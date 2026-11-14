
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"Hot7DiceAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
	
	
		gameWS.onmessage=function(k){
	
		    var tmpMess=k.data.split("#");

			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.qzy.xlm!=undefined){
			
			if(gameController.ehm!=parseInt(tmpMess[1])){
				
			gameController.ehm=parseInt(tmpMess[1]);	
			gameController.pwr=parseInt(tmpMess[1]);	
			gameController.mdr=parseInt(tmpMess[1]);	
			gameController.qzy.xlm.mom("creditd", "#rwv", [gameController.wwe(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////
function goo() {
    this.fvi = "Info";
    this.iew = "DEPOSIT";
    this.audio = "AUDIO";
    this.jls = "TIP";
    this.qpy = "TURBO";
    this.bml = "STATISTIC";
    this.xfn = "HISTORY";
    this.mvb = "SHORTCUTS";
    this.oxo = "HELP";
    this.iog = "PAYTABLE";
    this.language = "LANGUAGE";
    this.yix = ">>";
    this.bpn = "<<";
    this.pzp = "Fullscreen is not supported!"
}

function ooe() {
    this.fjd = "MINIMUM BET IS";
    this.wpe = "MAX BET";
    this.vuc = "MIN.BET";
    this.fhk = "MAX.BET";
    this.wmw = "BET";
    this.start = "START";
    this.oxo = "HELP";
    this.iog = "PAYTABLE";
    this.tyl = "MENU";
    this.twv = "MORE|GAMES";
    this.ubl = "STOP";
    this.pwr = "CREDIT";
    this.vuf = "GAME OVER";
    this.kbd = "WINNER!";
    this.eiq = "GOOD LUCK!";
    this.win = "WIN";
    this.aii = "LAST WIN";
    this.tbs = "COLLECT";
    this.oqq = "COLLECT";
    this.fgi = "GAMBLE";
    this.zhn = "AUTO|START";
    this.rxg = "HALF|GAMBLE";
    this.whk = "EXIT";
    this.tvo = "START GAME";
    this.ctc = "CHOOSE BET";
    this.jbf = "HALF";
    this.ret = "RETURN|TO GAME";
    this.vjh = "Total Win";
    this.fdb = "Warning";
    this.apv = "TOTAL";
    this.jqu = "PLEASE WAIT ...";
    this.hxh = "More Games";
    this.qpy = "SPEED";
    this.nbf = "Malfunction voids all pays and plays.";
    this.mup = "CONTINUE";
    this.bqj = "AUTOSTART";
    this.zys = "PAYTABLE";
    this.ivl = "GAMBLE";
    this.left = "LEFT";
    this.bib = "RIGHT";
    this.ok = "OK";
    this.iab = "CANCEL";
    this.gly = "Gamble";
    this.gnp = "Half";
    this.nbc = "GAME RULES";
    this.irl = "GAME RULES";
    this.ifx = "Bonus!";
    this.rfg = "BONUS";
    this.vnx = "PRESS ANY KEY TO CONTINUE";
    this.zqn = "NOT ENOUGH CREDIT!";
    this.yun = "wins";
    this.wbo = "V A L U E";
    this.of = "OF";
    this.cgs = "TOUCH THE SCREEN TO CONTINUE";
    this.arq = "LOADING ...";
    this.xxd = "LOADING HISTORY ...";
    this.wvz = "Communication Error";
    this.fwt = "You have reached one of the limits!";
    this.kfe = "You have reached the maximum amount of free games!";
    this.joo = "Game will be closed";
    this.qex = "Game will be restarted";
    this.nuo = "WON";
    this.error = "ERROR";
    this.egt = "FREEPLAY";
    this.kpp = "AUTO";
    this.jfh = "GAME ID";
    this.toc = "Playing Time";
    this.yqj = "last";
    this.tgn = "games";
    this.iew = "DEPOSIT";
    this.audio = "AUDIO";
    this.ucf = "MUSIC";
    this.zdw = "FULLSCREEN";
    this.unn = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.omr = "Do not show again";
    this.eku = "Sounds can not be loaded!";
    this.aog = "Resources missing!";
    this.rpy = "Play without sound?";
    this.vdf = "SETTINGS";
    this.swx = "Please turn your device!";
    this.fvi = "INFO";
    this.kxz = "Please disable PRIVATE MODE in your browser to play the game.";
    this.nxg = "This game is optimized for Google Chrome.";
    this.tfu = "Please use the current version of";
    this.nwi = "Unfortunately this browser is not fully supported.";
    this.chi = "This game can not be started in freeplay mode!";
    this.ttd = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.cyq = "Adjust the game interface to your needs!";
    this.sir = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.jwh = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.xvr = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.bml = "Statistic";
    this.ato = "Total Games";
    this.nfu = "Total Bets";
    this.vlk = "Total Wins";
    this.rwl = "Total Play Time";
    this.jie = "I have read this message";
    this.swo = "EXIT|GAME";
    this.xfn = "History";
    this.otl = "No games played.";
    this.state = "STATE";
    this.qld = "Main Game";
    this.iji = "Auto Collected";
    this.kep = "Collected";
    this.vcy = "Bonusspins";
    this.rma = "Respin";
    this.qtw = "Bonus";
    this.tbg = "First Deal";
    this.cmq = "Second Deal";
    this.clo = "Third Deal";
    this.ugf = "AUTOSTART SETTINGS";
    this.zbe = "Amount of games:";
    this.wpf = "Stop autostart";
    this.uhr = "Credit lower than:";
    this.xnn = "Credit higher than:";
    this.cxr = "Win higher than:";
    this.dhi = "The autostart will be stopped at the beginning of the bonus.";
    this.ggs = "Share on Facebook";
    this.utw = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.vhl = "Reality Check";
    this.yjc = "You have requested a Reality Check.";
    this.mee = "Press HISTORY to view your game history.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
ooe.prototype = new goo;

function hdv() {
    this.fjd = "МИНИМАЛЬНАЯ СТАВКА -";
    this.wpe = "МАКС.|СТАВКА";
    this.vuc = "МИН.СТAВКА";
    this.fhk = "МАКС.СТAВКА";
    this.wmw = "СТАВКА";
    this.start = "СТАРТ";
    this.oxo = "ПОМОЩЬ";
    this.iog = "ТАБЛИЦА ВЫПЛАТ";
    this.tyl = "МЕНЮ";
    this.twv = "ДРУГИЕ|ИГРЫ";
    this.ubl = "СТОП";
    this.pwr = "КРЕДИТ";
    this.vuf = "КОНЕЦ ИГРЫ";
    this.kbd = "ПОБЕДИТЕЛЬ!";
    this.eiq = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.aii = "ПОСЛЕД. ВЫИГРЫШ";
    this.yun = "выйгрыши";
    this.tbs = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.oqq = "ЗАБРАТЬ ВЫИГРЫШ";
    this.fgi = "ИГРА|НА|РИСК";
    this.zhn = "АВТО|ИГРА";
    this.rxg = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.whk = "ВЫХОД";
    this.tvo = "НАЖМИТЕ СТАРТ";
    this.ctc = "ВЫБЕРИТЕ СТАВКУ";
    this.jbf = "ВЗЯТЬ|1/2";
    this.vnx = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.cgs = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.tdf = "Множитель для Бонуса";
    this.xrz = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.vjh = "ОБЩИЙ ВЫИГРЫШ";
    this.arq = "Загрузка ...";
    this.xxd = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.zqn = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.fwt = "Достигнут один из лимитов!";
    this.fdb = "Внимание";
    this.wvz = "ошибка обмена данных";
    this.kfe = "Вы получили максимальное количество свободных игр!";
    this.joo = "Игра заканчивается";
    this.qex = "Игра начинается заново";
    this.ifx = "Бонус!";
    this.rfg = "БОНУС";
    this.nuo = "ВЫИГРЫШ";
    this.apv = "ВСЕГО";
    this.jqu = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.egt = "FREEPLAY";
    this.hxh = "ВЫБОР ИГРЫ";
    this.jfh = "GAME ID";
    this.toc = "Playing Time";
    this.yqj = "последняя";
    this.tgn = "игры";
    this.iew = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.ucf = "МУЗЫКА";
    this.qpy = "СКОРОСТЬ";
    this.zdw = "ПОЛНОЭКРАННЫЙ";
    this.unn = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.nbf = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.mup = "ПРОДОЛЖИТЬ";
    this.omr = "Больше не показывать";
    this.bqj = "АВТОИГРА";
    this.zys = "ТАБЛИЦА ВЫПЛАТ";
    this.ivl = "ИГРА НА РИСК";
    this.eku = "Звук не загружается!";
    this.aog = "Ресурсы отсутствуют!";
    this.rpy = "Играть без звука?";
    this.vdf = "НАСТРОЙКА";
    this.swx = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.bib = "ПРАВО";
    this.kpp = "АВТО";
    this.wbo = "V A L U E";
    this.fvi = "ИНФОРМАЦИЯ";
    this.kxz = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.nxg = "Настоящая игра оптимизирована для Google Chrome.";
    this.tfu = "Используйте, пожалуйста, актуальную версию";
    this.nwi = "К сожалению нет полной поддержки браузера.";
    this.chi = "Запуск этой игры в режиме свободных игр невозможен!";
    this.ttd = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.cyq = "Приспособь интерфейс к своим потребностям!";
    this.utw = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.vhl = "Проверку реальности";
    this.yjc = "Вы запросили проверку реальности.";
    this.mee = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.nbc = "ПРАВИЛА ИГРЫ";
    this.irl = "ПРАВИЛА ИГРЫ";
    this.sir = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.jwh = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.xvr = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.bml = "Статус";
    this.ato = "количество игр";
    this.nfu = "вся ставка";
    this.vlk = "общий выигрыш";
    this.rwl = "общее время игры";
    this.jie = "Я сообщение прочитал.";
    this.swo = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.xfn = "История";
    this.otl = "нет истории.";
    this.state = "STATE";
    this.qld = "Main Game";
    this.iji = "Auto Collected";
    this.kep = "Collected";
    this.vcy = "Bonusspins";
    this.gly = "Gamble";
    this.gnp = "Half";
    this.rma = "Respin";
    this.qtw = "Bonus";
    this.tbg = "First Deal";
    this.cmq = "Second Deal";
    this.clo = "Third Deal";
    this.iab = "ИЗМЕНИТЬ";
    this.ugf = "НАСТРОЙКА АВТОСТАРТА";
    this.zbe = "Количество игр:";
    this.wpf = "Автостарт остановить";
    this.uhr = "Кредит ниже, чем:";
    this.xnn = "Кредит выше, чем:";
    this.cxr = "Выигрыш выше, чем:";
    this.dhi = "Автостарт прерывается, если начинается бонусная игра.";
    this.ggs = "Поделись в фейсбук";
    this.adp = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
hdv.prototype = new goo;

function yul() {
    this.fjd = "APUESTA MINIMA ES";
    this.wpe = "APUESTA|MAXIMA";
    this.vuc = "APUESTA MIN.";
    this.fhk = "APUESTA MAX.";
    this.wmw = "APUESTA";
    this.start = "START";
    this.oxo = "AYUDA";
    this.iog = "PLAN DE|GANANCIAS";
    this.tyl = "MENU";
    this.twv = "MAS|JUEGOS";
    this.ubl = "PARADA";
    this.pwr = "CREDITOS";
    this.vuf = "FIN DEL JUEGO";
    this.kbd = "¡GANADOR!";
    this.eiq = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.aii = "ULTIMOS PREMIO";
    this.yun = "gana";
    this.tbs = "COBRAR";
    this.oqq = "COBRAR";
    this.fgi = "RIESGO";
    this.zhn = "AUTO|START";
    this.rxg = "MEDIA|APUESTA";
    this.of = "DE";
    this.whk = "SALIR";
    this.tvo = "¡PULSE START!";
    this.ctc = "ELIJA SU APUESTA";
    this.jbf = "MITAD";
    this.vnx = "PULSE UNA TECLA PARA CONTINUAR";
    this.cgs = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.vjh = "Premio total";
    this.arq = "CARGANDO ...";
    this.xxd = "CARGANDO HISTORIAL ...";
    this.zqn = "No hay bastante CREDITO";
    this.fwt = "¡Ha alcanzado uno de los limites!";
    this.fdb = "Advertencia";
    this.wvz = "Error de comunicación";
    this.kfe = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.joo = "El juego se cerrará";
    this.qex = "El juego se reiniciará";
    this.ifx = "¡BONUS!";
    this.rfg = "BONUS";
    this.nuo = "GANADO";
    this.apv = "TOTAL";
    this.nfq = "TURBO SI";
    this.tcv = "TURBO NO";
    this.jqu = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.egt = "FREEPLAY";
    this.hxh = "MAS JUEGOS";
    this.jfh = "ID DE JUEGO";
    this.toc = "Playing Time";
    this.yqj = "ultimos";
    this.tgn = "juegos";
    this.iew = "DEPÓSITO";
    this.audio = "AUDIO";
    this.ucf = "MÚSICA";
    this.qpy = "VELOCIDAD";
    this.zdw = "PANTALLA COMPLETA";
    this.unn = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.nbf = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.mup = "ADELANTE";
    this.omr = "No mostrar de nuevo";
    this.bqj = "AUTOSTART";
    this.zys = "PLAN DE GANANCIAS";
    this.ivl = "RIESGO";
    this.eku = "No se pueden cargar los sonidos.";
    this.aog = "Faltan recursos.";
    this.rpy = "¿Jugar sin sonido?";
    this.vdf = "AJUSTES";
    this.wbo = "V A L U E";
    this.swx = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.bib = "DERECHA";
    this.kpp = "AUTOMÁTICO";
    this.fvi = "INFORMACIÓN";
    this.kxz = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.nxg = "Este juego está optimizado para Google Chrome.";
    this.tfu = "Use la versión actual de";
    this.nwi = "Desafortunadamente, este explorador no es compatible.";
    this.chi = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.ttd = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.cyq = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.utw = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.vhl = "Reality Check";
    this.yjc = "Has solicitado un Reality Check.";
    this.mee = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.nbc = "REGLAS DEL JUEGO";
    this.irl = "REGLAS|DEL JUEGO";
    this.sir = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.jwh = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.xvr = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.bml = "ESTADO";
    this.ato = "Número de juegos";
    this.nfu = "Apuesta total";
    this.vlk = "Ganancia total";
    this.rwl = "Tiempo total de juego";
    this.jie = "He leído el mensaje.";
    this.swo = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.xfn = "HISTORIAL";
    this.otl = "Aún no hay juegos.";
    this.state = "Estado";
    this.qld = "Juego principal";
    this.iji = "Ganancia automática";
    this.kep = "Ganancia";
    this.vcy = "BONUSSPINS";
    this.gly = "Apuesta";
    this.gnp = "Mitad";
    this.rma = "Respin";
    this.qtw = "Bonus";
    this.tbg = "Primera mano";
    this.cmq = "Segunda mano";
    this.clo = "Tercera mano";
    this.iab = "CANCELAR";
    this.ugf = "CONFIGURACIONES DE AUTOSTART";
    this.zbe = "Cantidad de juegos:";
    this.wpf = "Detener Autostart";
    this.uhr = "Crédito menor que:";
    this.xnn = "Crédito mayor que:";
    this.cxr = "Ganancia mayor que:";
    this.dhi = "El Autostart se detendrá al principio del bonus.";
    this.ggs = "Compartir en Facebook";
    this.adp = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
yul.prototype = new goo;

function yhd() {
    this.fjd = "MINIMALER EINSATZ IST";
    this.wpe = "MAX. EINSATZ";
    this.vuc = "MIN. EINSATZ";
    this.fhk = "MAX. EINSATZ";
    this.wmw = "EINSATZ";
    this.start = "START";
    this.oxo = "HILFE";
    this.iog = "GEWINNPLAN";
    this.tyl = "MENÜ";
    this.twv = "MEHR|SPIELE";
    this.pwr = "GUTHABEN";
    this.vuf = "SPIEL ENDE";
    this.kbd = "GEWINNER!";
    this.eiq = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.aii = "LETZTER GEWINN";
    this.yun = "gewinnt";
    this.tbs = "NEHMEN";
    this.oqq = "NEHMEN";
    this.fgi = "RISIKO";
    this.zhn = "AUTO|START";
    this.rxg = "HALF|GAMBLE";
    this.ubl = "STOP";
    this.of = "VON";
    this.whk = "EXIT";
    this.tvo = "START DRÜCKEN";
    this.ctc = "EINSATZ WÄHLEN";
    this.jbf = "TEILEN";
    this.vnx = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.cgs = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.vjh = "Gesamt Gewinn";
    this.arq = "LÄDT ...";
    this.xxd = "LÄDT HISTORIE ...";
    this.zqn = "NICHT GENUG GUTHABEN!";
    this.fdb = "Achtung";
    this.wvz = "Kommunikationsfehler";
    this.fwt = "Sie haben eines der Limits erreicht!";
    this.kfe = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.joo = "Das Spiel wird beendet";
    this.qex = "Das Spiel wird neu gestartet";
    this.ifx = "Bonus!";
    this.rfg = "BONUS";
    this.nuo = "GEWONNEN";
    this.apv = "TOTAL";
    this.jqu = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.egt = "FREEPLAY";
    this.hxh = "MEHR|SPIELE";
    this.jfh = "SPIEL ID";
    this.toc = "Spielzeit";
    this.yqj = "Letzten";
    this.tgn = "Spiele";
    this.iew = "GUTHABEN";
    this.audio = "AUDIO";
    this.ucf = "MUSIK";
    this.qpy = "SPEED";
    this.zdw = "VOLLBILD";
    this.unn = "VOLLBILD";
    this.language = "SPRACHE";
    this.nbf = "Bei Gerätestörung keine Haftung.";
    this.mup = "WEITER";
    this.omr = "Nicht noch einmal anzeigen";
    this.bqj = "AUTOSTART";
    this.ivl = "RISIKO";
    this.zys = "GEWINNPLAN";
    this.eku = "Sounds können nicht geladen werden!";
    this.aog = "Ressourcen fehlen!";
    this.rpy = "Ohne Ton spielen?";
    this.vdf = "EINSTELL.";
    this.swx = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.bib = "RECHTS";
    this.kpp = "AUTOM.";
    this.wbo = "V A L U E";
    this.fvi = "INFO";
    this.kxz = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.nxg = "Dieses Spiel ist optimiert für Google Chrome.";
    this.tfu = "Bitte benutzen sie die aktuelle Version von";
    this.nwi = "Leider wird dieser Browser nicht unterstützt.";
    this.chi = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.ttd = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.cyq = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.utw = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.vhl = "Reality Check";
    this.yjc = "Du hast einen Reality Check angefordert.";
    this.mee = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.aor = "Spielpause";
    this.jml = "Spiellimits";
    this.efm = "Selbsttest";
    this.nbc = "SPIELREGELN";
    this.irl = "SPIELREGELN";
    this.sir = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.jwh = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.xvr = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.bml = "Statistik";
    this.ato = "Anzahl der Spiele";
    this.nfu = "Gesamteinsatz";
    this.vlk = "Gesamtgewinn";
    this.rwl = "Gesamtspielzeit";
    this.jie = "Ich habe die Nachricht gelesen";
    this.swo = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.xfn = "Historie";
    this.otl = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.qld = "Hauptspiel";
    this.iji = "Auto. Nehmen";
    this.kep = "Genommen";
    this.vcy = "Bonusspins";
    this.gly = "Risiko";
    this.gnp = "Halb";
    this.rma = "Respin";
    this.qtw = "Bonus";
    this.tbg = "Erster Deal";
    this.cmq = "Zweiter Deal";
    this.clo = "Dritter Deal";
    this.iab = "ABBRUCH";
    this.ugf = "AUTOSTART EINSTELLUNGEN";
    this.zbe = "Anzahl der Spiele: ";
    this.wpf = "Autostart anhalten";
    this.uhr = "Guthaben niedriger als:";
    this.xnn = "Guthaben höher als:";
    this.cxr = "Gewinn höher als:";
    this.dhi = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.ggs = "Auf Facebook teilen";
    this.adp = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
yhd.prototype = new goo;

function zcz() {
    this.fjd = "MINIMUM BANKO";
    this.wpe = "MAKS. BANKO";
    this.vuc = "MIN. BANKO";
    this.fhk = "MAKS. BANKO";
    this.wmw = "BANKO";
    this.start = "BAŞLAT";
    this.oxo = "YARDIM";
    this.iog = "Kazanç planı";
    this.tyl = "MENÜ";
    this.twv = "DAHA ÇOK|OYUN";
    this.ubl = "DUR";
    this.pwr = "KREDI";
    this.vuf = "OYUN BİTTİ";
    this.kbd = "KAZANDINIZ!";
    this.eiq = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.aii = "SON KAZANÇ";
    this.yun = "kazanır";
    this.tbs = "ALMAK";
    this.oqq = "ALMAK";
    this.fgi = "RIZIKO";
    this.zhn = "OTOMATİK|BAŞLATMA";
    this.rxg = "YARI|RIZIKO";
    this.of = "VEREN";
    this.whk = "ÇIKIŞ";
    this.tvo = "BAŞLAT TUŞUNA BASINIZ";
    this.ctc = "BANKO SEÇİNİZ";
    this.jbf = "ALMAK|1/2";
    this.vnx = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.cgs = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.vjh = "Toplam kazanç";
    this.arq = "YÜKLÜYOR ...";
    this.xxd = "GEÇMIŞI YÜKLÜYOR ...";
    this.zqn = "YETERSİZ KREDİ.";
    this.fwt = "Limitlerin birine ulaştınız!";
    this.fdb = "Dikkat";
    this.wvz = "İletişim hatası";
    this.kfe = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.joo = "Oyun sonlandırılıyor";
    this.qex = "Oyun yeniden başlatılıyor";
    this.ifx = "Bedava oyun primi!";
    this.rfg = "PRİM";
    this.nuo = "KAZANDINIZ";
    this.apv = "TOPLAM";
    this.jqu = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.egt = "FREEPLAY";
    this.hxh = "DAHA ÇOK OYUN";
    this.jfh = "OYUN ID";
    this.toc = "OYUN SÜRESİ";
    this.yqj = "Son";
    this.tgn = "oyun";
    this.iew = "BAKIYE";
    this.audio = "AUDIO";
    this.ucf = "MÜZIK";
    this.qpy = "HıZ";
    this.zdw = "TAM EKRAN";
    this.unn = "TAM EKRAN";
    this.language = "LISAN";
    this.nbf = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.mup = "DEVAM";
    this.omr = "Tekrar gösterme";
    this.bqj = "OTOMATİK|BAŞLATMA";
    this.ivl = "RIZIKO";
    this.zys = "Kazanç planı";
    this.eku = "Sesler yüklenemiyorlar!";
    this.aog = "Kaynaklar eksik!";
    this.rpy = "Sessiz oynayacak mısınız?";
    this.vdf = "AYARLAR";
    this.swx = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.bib = "SAĞ";
    this.kpp = "OTOMATIK";
    this.wbo = "V A L U E";
    this.fvi = "BILGI";
    this.kxz = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.nxg = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.tfu = "'nin güncel versiyonunu kullanın";
    this.nwi = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.chi = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.ttd = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.cyq = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.utw = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.vhl = "Reality Check";
    this.yjc = "Reality Check talebinde bulundun.";
    this.mee = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.nbc = "OYUNUN KURALLARı";
    this.irl = "OYUNUN|KURALLARı";
    this.sir = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.jwh = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.xvr = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.bml = "İstatistik";
    this.ato = "Toplam oyunlar";
    this.nfu = "Toplam bankolar";
    this.vlk = "Toplam kazançlar";
    this.rwl = "Toplam oyun süresi";
    this.jie = "Bu mesajı okudum.";
    this.swo = "OYUNU|KAPAT";
    this.ok = "OK";
    this.xfn = "GEÇMİŞ";
    this.otl = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.qld = "Ana oyun";
    this.iji = "Otomatik olarak kazandınız";
    this.kep = "Toplandı";
    this.vcy = "Prim oyunlar";
    this.gly = "Riziko";
    this.gnp = "Yarım";
    this.rma = "Respin";
    this.qtw = "Prim";
    this.tbg = "İlk anlaşma";
    this.cmq = "İkinci anlaşma";
    this.clo = "Üçüncü anlaşma";
    this.iab = "İPTAL";
    this.ugf = "OTOMATIK BAŞLAT AYARLARı";
    this.zbe = "Oyun sayısı:";
    this.wpf = "Otomatik başlatmayı durdur";
    this.uhr = "Kredi bundan düşüktür:";
    this.xnn = "Kredi bundan yüksektir:";
    this.cxr = "Kazanç bundan yüksektir:";
    this.dhi = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.ggs = "Facebook'ta paylaş";
    this.adp = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
zcz.prototype = new goo;

function fup() {
    this.fjd = "MINIMÁLNÍ SÁZKA JE";
    this.wpe = "MAX. SÁZKA";
    this.vuc = "MIN. SÁZKA";
    this.fhk = "MAX. SÁZKA";
    this.wmw = "SÁZKA";
    this.start = "START";
    this.oxo = "POMOC";
    this.iog = "VÝHERNÍ PLÁN";
    this.tyl = "MENU";
    this.twv = "DALŠÍ|HRY";
    this.ubl = "STOP";
    this.pwr = "KREDIT";
    this.vuf = "KONEC HRY";
    this.kbd = "VÍTEZ!";
    this.eiq = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.aii = "POSL. VÝHRA";
    this.yun = "vyhrává";
    this.tbs = "VEZMI";
    this.oqq = "VEZMI";
    this.fgi = "HRA";
    this.zhn = "AUTO|START";
    this.rxg = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.whk = "VÝSTUP";
    this.tvo = "START HRY";
    this.ctc = "VYBRAT SÁZKU";
    this.jbf = "POLOVINA";
    this.vnx = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.cgs = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.vjh = "Celková výhra";
    this.arq = "NAHRÁVÁM ...";
    this.xxd = "NAHRÁVÁM HISTORII ...";
    this.zqn = "Nedostatecný kredit.";
    this.fwt = "Dosáhli jste jednoho z limitů!";
    this.fdb = "Varování";
    this.wvz = "Chyba komunikace";
    this.kfe = "Dosáhli jste maximálního počtu her zdarma!";
    this.joo = "Hra se zavře";
    this.qex = "Hra se restartuje";
    this.ifx = "Bonus!";
    this.rfg = "BONUS";
    this.nuo = "VYHRÁL";
    this.apv = "CELKOVÁ";
    this.jqu = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.egt = "FREEPLAY";
    this.hxh = "DALŠÍ HRY";
    this.jfh = "ID HRY";
    this.toc = "HRACÍ DOBA";
    this.yqj = "Poslední";
    this.tgn = "hry";
    this.iew = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.ucf = "MUZIKA";
    this.qpy = "RYCHLOST";
    this.zdw = "FULLSCREEN";
    this.unn = "FULLSCREEN";
    this.language = "ŘEČ";
    this.nbf = "Při poruše jsou všechny hry a výhry neplatné.";
    this.mup = "POKRAČUJ";
    this.omr = "Nezobrazujte znovu";
    this.bqj = "AUTOSTART";
    this.ivl = "HRA";
    this.zys = "VÝHERNÍ PLÁN";
    this.eku = "Zvuk nelze nahrát!";
    this.aog = "Chybí zdroje!";
    this.rpy = "Hrát bez zvuku?";
    this.vdf = "NASTAVENÍ";
    this.wbo = "V A L U E";
    this.swx = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.bib = "VPRAVO";
    this.kpp = "AUTO";
    this.fvi = "INFORMACE";
    this.kxz = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.nxg = "Tato hra je optimalizovaná pro Google Chrome.";
    this.tfu = "Použijte aktuální verzi";
    this.nwi = "Tento prohlížeč není bohužel plně podporován.";
    this.chi = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.ttd = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.cyq = "Nastavte rozhraní hry svým potřebám!";
    this.utw = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.vhl = "Reality Check";
    this.yjc = "Požádali jste o kontrolu reality.";
    this.mee = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.nbc = "PRAVIDLA HRY";
    this.irl = "PRAVIDLA HRY";
    this.sir = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.jwh = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.xvr = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.bml = "Statistika";
    this.ato = "Celkem hry";
    this.nfu = "Celkem sázky";
    this.vlk = "Celkem výhry";
    this.rwl = "Celková hrací doba";
    this.jie = "Zprávu jsem četl/a.";
    this.swo = "UKONČIT|HRU";
    this.ok = "OK";
    this.xfn = "HISTORIE";
    this.otl = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.qld = "Hlavní hra";
    this.iji = "Automaticky vybráno";
    this.kep = "Vybráno";
    this.vcy = "Bonusspins";
    this.gly = "Hra";
    this.gnp = "Polovina";
    this.rma = "Respin";
    this.qtw = "Bonus";
    this.tbg = "První vyložení";
    this.cmq = "Druhé vyložení";
    this.clo = "Třetí vyložení";
    this.iab = "ZRUŠIT";
    this.ugf = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.zbe = "Množství her:";
    this.wpf = "Zastavit automatický start";
    this.uhr = "Kredit nižší než:";
    this.xnn = "Kredit vyšší než:";
    this.cxr = "Výhra vyšší než:";
    this.dhi = "Automatický start se zastaví na začátku bonusu.";
    this.ggs = "Sdílet na Facebooku";
    this.adp = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
fup.prototype = new goo;

function jul() {
    this.fjd = "MIINIMUMPANUS ON";
    this.wpe = "MAX PANUS";
    this.vuc = "MIN PANUS";
    this.fhk = "MAX PANUS";
    this.wmw = "PANUS";
    this.start = "START";
    this.oxo = "ABI";
    this.iog = "VÕIDU TABEL";
    this.tyl = "MENÜÜ";
    this.twv = "VALI|MÄNG";
    this.ubl = "STOPP";
    this.pwr = "KREDIIT";
    this.vuf = "MÄNG ON LÕPPENUD!";
    this.kbd = "OLED VÕITNUD!";
    this.eiq = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.aii = "EELMINE VÕIT";
    this.tbs = "VÕTA|VÕIT";
    this.oqq = "VÕTA VÕIT";
    this.fgi = "DUUBEL|DAMINE";
    this.zhn = "AUTO|START";
    this.rxg = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.whk = "VÄLJA";
    this.tvo = "ALUSTA MÄNGU";
    this.ctc = "VALI PANUS";
    this.jbf = "POOLIK";
    this.vnx = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.vjh = "Koguvõit";
    this.zqn = "POLE PIISAVALT KREDIITI.";
    this.ifx = "Boonus!";
    this.rfg = "BOONUS";
    this.jqu = "PALUN OODAKE ...";
    this.hxh = "Vali Mäng";
    this.audio = "HELI";
    this.ucf = "MUUSIKA";
    this.qpy = "KIIRUS";
    this.zdw = "TÄISEKRAAN";
    this.unn = "TÄISEKRAAN";
    this.nbf = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.odr = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.nbc = "MÄNGUREEGLID";
    this.irl = "MÄNGUREEGLID";
    this.arq = "LAADIMINE ...";
    this.xxd = "AJALOO LAADIMINE ...";
    this.fwt = "Oled saavutanud ühe limiitidest!";
    this.fdb = "Hoiatus";
    this.wvz = "Ühenduse viga";
    this.kfe = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.joo = "Mäng suletakse";
    this.qex = "Mäng taaskäivitatakse";
    this.cgs = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.vdf = "SÄTTED";
    this.wbo = "V A L U E";
    this.swx = "Pöörake oma seadet!";
    this.fvi = "INFO";
    this.kxz = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.nxg = "See mäng on optimeeritud Google Chrome jaoks.";
    this.tfu = "Palun kasutage praeguse versiooni";
    this.nwi = "Kahjuks ei toetata seda brauserit täielikult.";
    this.chi = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.bib = "PAREM";
    this.kpp = "AUTOMAATNE";
    this.nuo = "VÕITIS";
    this.yun = "võidetud";
    this.apv = "KOKKU";
    this.error = "VIGA";
    this.egt = "TASUTA MÄNG";
    this.jfh = "MÄNGU ID";
    this.toc = "MÄNGUAEG";
    this.yqj = "Viimased";
    this.tgn = "mängu";
    this.iew = "SISSEMAKSE";
    this.sir = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.jwh = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.xvr = "RISKI, ET SUURENDADA OMA VÕITU";
    this.bml = "Statistika";
    this.ato = "Mänge kokku";
    this.nfu = "Kogupanus";
    this.vlk = "Koguvõit";
    this.rwl = "Mänguaeg kokku";
    this.jie = "Olen seda teadet lugenud.";
    this.swo = "MÄNGU|LÕPP";
    this.xfn = "Ajalugu";
    this.otl = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.qld = "Põhimäng";
    this.iji = "Automaatne väljavõtt";
    this.kep = "Välja võetud";
    this.vcy = "Bonusspins";
    this.gly = "Gamble";
    this.gnp = "Pool";
    this.rma = "Respin";
    this.qtw = "Boonus";
    this.tbg = "Esimene jagamine";
    this.cmq = "Teine jagamine";
    this.clo = "Kolmas jagamine";
    this.mup = "JÄTKA";
    this.omr = "Ära seda enam näita";
    this.bqj = "AUTOSTART";
    this.ivl = "DUUBEL DAMINE";
    this.zys = "VÕIDU TABEL";
    this.eku = "Helisid ei saa laadida!";
    this.aog = "Ressursid puuduvad!";
    this.rpy = "Soovid mängida ilma helideta?";
    this.ttd = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.cyq = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.utw = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.iab = "TÜHISTA";
    this.ugf = "AUTOMAATKÄIVITUSE SÄTTED";
    this.zbe = "Mängude arv:";
    this.wpf = "Peata automaatkäivitus";
    this.uhr = "Krediit madalam kui:";
    this.xnn = "Krediit kõrgem kui:";
    this.cxr = "Võit suurem kui:";
    this.dhi = "Automaatkäivitus peatatakse boonuse alguses.";
    this.ggs = "Jaga Facebookis";
    this.ok = "OK";
    this.vhl = "Reality Check";
    this.yjc = "Olete soovinud reaalsuskontrolli.";
    this.mee = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
jul.prototype = new goo;

function bho() {
    this.fjd = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.wpe = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.vuc = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.fhk = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.wmw = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.oxo = "ΒΟHΘΕΙΑ";
    this.iog = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.tyl = "ΜΕΝΟY";
    this.twv = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.ubl = "ΣΤΟΠ";
    this.pwr = "ΠIΣΤΩΣΗ";
    this.vuf = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.kbd = "ΝΙΚΗΤΗΣ!";
    this.eiq = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.aii = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.tbs = "ΠΑΡΑΛΑΒH";
    this.oqq = "ΠΑΡΑΛΑΒH";
    this.fgi = "ΤΖΟΓAΡΩ";
    this.zhn = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.rxg = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.whk = "EΞΟΔΟΣ";
    this.tvo = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.ctc = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.jbf = "ΠΑΡΑΛΑΒH|1/2";
    this.vnx = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.vjh = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.zqn = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.ifx = "Μπόνουσ!";
    this.rfg = "ΜΠOΝΟΥΣ";
    this.jqu = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.hxh = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.ucf = "ΜΟΥΣΙΚΉ";
    this.qpy = "ΤΑΧYΤΗΤΑ";
    this.zdw = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.unn = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.nbf = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.apv = "ΣYΝΟΛΟ";
    this.nbc = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.irl = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.arq = "ΦΟΡΤΩΣΗ ...";
    this.xxd = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.fwt = "Ξεπεράσατε κάποιο όριο!";
    this.fdb = "Προειδοποίηση";
    this.wvz = "Σφάλμα επικοινωνίας";
    this.kfe = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.joo = "Το παιχνίδι θα τερματιστεί";
    this.qex = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.cgs = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.vdf = "ΡΥΘΜΙΣΕΙΣ";
    this.wbo = "V A L U E";
    this.swx = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.fvi = "ΠΛΗΡΟΦΟΡΊΕς";
    this.kxz = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.nxg = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.tfu = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.nwi = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.chi = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.bib = "ΔΕΞΙA";
    this.kpp = "AΥΤOΜΑΤΟ";
    this.nuo = "ΚEΡΔΙΣΕ";
    this.yun = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.egt = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.jfh = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.toc = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.yqj = "Τελευταία";
    this.tgn = "παιχνίδια";
    this.iew = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.sir = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.jwh = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.xvr = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.bml = "Στατιστικά";
    this.ato = "Σύνολο παιχνιδιών";
    this.nfu = "Συνολικό ποντάρισμα";
    this.vlk = "Συνολικό κέρδος";
    this.rwl = "Συνολικός χρόνος παιχνιδιού";
    this.jie = "Eχω διαβάσει το μήνυμα.";
    this.swo = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.xfn = "ΙΣΤΟΡΙΚΟ";
    this.otl = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.qld = "Κύριο παιχνίδι";
    this.iji = "Αυτόματη λήψη";
    this.kep = "Ελήφθησαν";
    this.vcy = "Bonusspins";
    this.gly = "Τζογάρω";
    this.gnp = "Hμισυ";
    this.rma = "Respin";
    this.qtw = "Μπόνουσ";
    this.tbg = "Πρώτο μοίρασμα";
    this.cmq = "Δεύτερο μοίρασμα";
    this.clo = "Τρίτο μοίρασμα";
    this.mup = "ΣΥΝΈΧΕΙΑ";
    this.omr = "Να μην προβληθεί ξανά";
    this.bqj = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.ivl = "ΤΖΟΓAΡΩ";
    this.zys = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.eku = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.aog = "Λείπουν πόροι!";
    this.rpy = "Παιχνίδι χωρίς ήχο?";
    this.ttd = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.cyq = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.utw = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.iab = "ΑΚΎΡΩΣΗ";
    this.ugf = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.zbe = "Αριθμός παιχνιδιών:";
    this.wpf = "Διακοπή autostart";
    this.uhr = "Μονάδες χαμηλότερα από:";
    this.xnn = "Μονάδες υψηλότερες από:";
    this.cxr = "Κέρδος υψηλότερο από:";
    this.dhi = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.ggs = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.vhl = "έλεγχο πραγματικότητας";
    this.yjc = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.mee = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
bho.prototype = new goo;

function lyc() {
    this.fjd = "МИН. ЗАЛОГ Е";
    this.wpe = "МАКС. ЗАЛОГ";
    this.vuc = "МИНИМ. ЗАЛОГ";
    this.fhk = "МАКС. ЗАЛОГ";
    this.wmw = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.oxo = "ПОМОЩ";
    this.iog = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.tyl = "МЕНЮ";
    this.twv = "ПОВЕЧЕ|ИГРИ";
    this.ubl = "СТОП";
    this.pwr = "КРЕДИТ";
    this.vuf = "ИГРАТА ЗАВЪРШИ";
    this.kbd = "ПЕЧЕЛИТЕ!";
    this.eiq = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.aii = "ПОСЛ.ПЕЧАЛБА";
    this.tbs = "ПРИБИРАНЕ";
    this.oqq = "ПРИБИРАНЕ";
    this.fgi = "ДУБЛИРАНЕ";
    this.zhn = "АВТО|СТАРТ";
    this.rxg = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.whk = "ИЗХОД";
    this.tvo = "ЗАПОЧНЕТЕ ИГРАТА";
    this.ctc = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.jbf = "ДЕЛЕНЕ";
    this.vnx = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.vjh = "ОБЩА ПЕЧАЛБА";
    this.zqn = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.ifx = "Бонус!";
    this.rfg = "БОНУС";
    this.jqu = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.hxh = "Повече Игри";
    this.qpy = "ТУРБО";
    this.nbf = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.nbc = "ПРАВИЛА НА ИГРАТА";
    this.irl = "ПРАВИЛА|НА ИГРАТА";
    this.arq = "ЗАРЕЖДАНЕ ...";
    this.xxd = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.fwt = "Достигна един от лимитите!";
    this.fdb = "Предупреждение";
    this.wvz = "Комуникационна грешка";
    this.kfe = "Достигнали сте максималния брой безплатни игри!";
    this.joo = "Играта ще бъде затворена";
    this.qex = "Играта ще бъде рестартирана";
    this.cgs = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.vdf = "НАСТРОЙКИ";
    this.wbo = "V A L U E";
    this.swx = "Моля, включете устройството!";
    this.fvi = "ИНФОРМАЦИЯ";
    this.kxz = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.nxg = "Тази игра е оптимизирана за Google Chrome.";
    this.tfu = "Моля, използвайте текущата версия на";
    this.nwi = "За съжаление този браузър не се поддържа напълно.";
    this.chi = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.bib = "ДЯСНА";
    this.kpp = "АВТО";
    this.nuo = "СПЕЧЕЛЕНО";
    this.yun = "печалби";
    this.apv = "ОБЩО";
    this.error = "ГРЕШКА";
    this.egt = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.ucf = "МУЗИКА";
    this.zdw = "ПЪЛЕН ЕКРАН";
    this.unn = "ПЪЛЕН|ЕКРАН";
    this.jfh = "ИД НА ИГРА";
    this.toc = "ВРЕМЕ НА ИГРА";
    this.yqj = "Последни";
    this.tgn = "игри";
    this.iew = "ДЕПОЗИТ";
    this.sir = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.jwh = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.xvr = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.bml = "Статистика";
    this.ato = "Общо игри";
    this.nfu = "Общо залог";
    this.vlk = "Общо печалби";
    this.rwl = "Общо време на игра";
    this.jie = "Прочетох това съобщение.";
    this.swo = "ИЗХОД|ОТ|ИГРАТА";
    this.xfn = "ИСТОРИЯ";
    this.otl = "Няма играни игри.";
    this.state = "СТАТУС";
    this.qld = "Основна игра";
    this.iji = "Автоматично събрани";
    this.kep = "Събрани";
    this.vcy = "Бонус-игри";
    this.gly = "Дублиране";
    this.gnp = "Половина";
    this.rma = "Respin";
    this.qtw = "Бонус";
    this.tbg = "Първо раздаване";
    this.cmq = "Второ раздаване";
    this.clo = "Трето раздаване";
    this.mup = "ПРОДЪЛЖЕНИЕ";
    this.omr = "Не показвай отново";
    this.bqj = "AUTOSTART";
    this.ivl = "ДУБЛИРАНЕ";
    this.zys = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.eku = "Звукът не може да бъде зареден!";
    this.aog = "Липсват ресурси!";
    this.rpy = "Игра без звук?";
    this.ttd = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.cyq = "Настройте интерфейса на играта според своите нужди!";
    this.utw = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.iab = "ИЗЧИСТВАНЕ";
    this.ugf = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.zbe = "Брой игри:";
    this.wpf = "Спри автоматичния старт";
    this.uhr = "Кредит по-малък от:";
    this.xnn = "Кредит по-висок от:";
    this.cxr = "Спечели повече от:";
    this.dhi = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.ggs = "Сподели във Facebook";
    this.ok = "OK";
    this.vhl = "Reality Check";
    this.yjc = "Заявили сте проверка на реалността.";
    this.mee = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
lyc.prototype = new goo;

function fif() {
    this.fjd = "მინიმალური ფსონი არის";
    this.wpe = "მაქსიმალური ფსონი";
    this.vuc = "მინიმალური ფსონი";
    this.fhk = "მაქსიმალური ფსონი";
    this.wmw = "ფსონი";
    this.start = "დაწყება";
    this.oxo = "დახმარება";
    this.iog = "გადახდის მრიცხველი";
    this.tyl = "მენიუ";
    this.twv = "მეტი|თამაშები";
    this.ubl = "გაჩერება";
    this.pwr = "კრედიტი";
    this.vuf = "თამაში დასრულებულია";
    this.kbd = "გამარჯვებული!";
    this.eiq = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.aii = "ბოლო მოგება";
    this.tbs = "შეგროვება";
    this.oqq = "შეგროვება";
    this.fgi = "აზარტი";
    this.zhn = "ავტო|დაწყება";
    this.rxg = "ნახევარი";
    this.whk = "გამოსვლა";
    this.tvo = "თამაშის დაწყება";
    this.ctc = "აირჩიეთ ფსონი";
    this.jbf = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.vjh = "მთლიანი მოგება";
    this.fdb = "გაფრთხილება";
    this.apv = "მთლიანი";
    this.jqu = "გთხოვთ, დაელოდოთ ...";
    this.hxh = "მეტი თამაშები";
    this.qpy = "ტურბო";
    this.nbf = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.mup = "გაგრძელება";
    this.bqj = "ავტო დაწყება";
    this.zys = "გადახდის მრიცხველი";
    this.ivl = "აზარტი";
    this.left = "მარცხნივ";
    this.bib = "მარჯვნივ";
    this.kpp = "ავტომატურად";
    this.ok = "კი";
    this.iab = "გაუქმება";
    this.gly = "აზარტი";
    this.gnp = "ნახევარი";
    this.nbc = "თამაშის წესები";
    this.irl = "თამაშის წესები";
    this.ifx = "BONUS!";
    this.rfg = "ბონუს";
    this.vnx = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.zqn = "არა საკმარისი კრედიტი.";
    this.cgs = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.arq = "ჩატვირთვის  ...";
    this.xxd = "ჩატვირთვის  ისტორია  ...";
    this.wvz = "საკომუნიკაციო შეცდომა";
    this.fwt = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.kfe = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.joo = "თამაში დასრულდება";
    this.qex = "თამაში გადაიტვირთება";
    this.nuo = "მოგებულია";
    this.yun = "wins";
    this.wbo = "V A L U E";
    this.error = "შეცდომა";
    this.egt = "უფასო თამაში";
    this.jfh = "თამაშის  ნომერი";
    this.toc = "სათამაშო დრო";
    this.yqj = "ბოლო ";
    this.tgn = "თამაშები";
    this.iew = "დეპოზიტი";
    this.audio = "ხმა";
    this.ucf = "მუსიკა";
    this.zdw = "სრული ეკრანი";
    this.unn = "სრული ეკრანი";
    this.language = "ენის";
    this.omr = "მომავალში აღარ ჩვენება";
    this.eku = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.aog = "არასაკმარისი რესურსები!";
    this.rpy = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.swx = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.kxz = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.nxg = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.umd = "გთხოვთ გამოიყენოთ";
    this.kop = "-ის მიმდინარე ვერსია";
    this.nwi = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.chi = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.ttd = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.cyq = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.sir = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.jwh = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.xvr = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.ato = "მთლიანი თამაშები";
    this.nfu = "ფსონი მთლიანად";
    this.vlk = "მთლიანი მოგება";
    this.rwl = "მთლიანი სათამაშო დრო";
    this.jie = "მე გავეცანი ამ გზავნილს.";
    this.swo = "თამაშის|დამთავრება";
    this.xfn = "მოვლენების ჩანაწერი";
    this.otl = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.qld = "ძირითადი თამაში";
    this.iji = "ავტომატურად შეგროვება";
    this.kep = "აღებულ იქნა";
    this.tbg = "პირველი დარიგება";
    this.cmq = "მეორე დარიგება";
    this.clo = "მესამე დარიგება";
    this.ugf = "ავტოგამშვების პარამეტრები";
    this.zbe = "თამაშების რაოდენობა:";
    this.wpf = "შეაჩერეთ ავტოგამშვები";
    this.uhr = "კრედიტი უფრო დაბალი ვიდრე:";
    this.xnn = "კრედიტი უფრო მაღალი ვიდრე:";
    this.cxr = "მოიგეთ უფრო მეტი ვიდრე:";
    this.dhi = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.ggs = "გააზიარეთ ფეისბუქზე";
    this.bml = "სტატისტიკა";
    this.of = "/";
    this.vcy = "Bonus თამაში";
    this.qtw = "ბონუსი";
    this.fvi = "ინფორმაცია";
    this.vdf = "პარამეტრ.";
    this.rma = "ხელახლა დატრიალების";
    this.utw = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.vhl = "რეალობის შემოწმება";
    this.yjc = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.mee = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
fif.prototype = new goo;

function tsd() {
    this.fjd = "A MINIMUM TÉT";
    this.wpe = "MAXIMUM TÉT";
    this.vuc = "MIN. TÉT";
    this.fhk = "MAX. TÉT";
    this.wmw = "TÉT";
    this.start = "START";
    this.oxo = "SÚGÓ";
    this.iog = "SÚGÓ";
    this.tyl = "MENÜ";
    this.twv = "MENÜ";
    this.ubl = "STOP";
    this.pwr = "HITEL";
    this.vuf = "A JÁTÉKNAK VÉGE";
    this.kbd = "NYEREMÉNY!";
    this.eiq = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.aii = "UTOLSÓ NYER.";
    this.tbs = "FELÍR";
    this.oqq = "FELÍR";
    this.fgi = "SZORZÁS";
    this.zhn = "AUTO|START";
    this.rxg = "FELEZÉS";
    this.whk = "KILÉPÉS";
    this.tvo = "START";
    this.ctc = "VÁLASSZON TÉTET";
    this.jbf = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.vjh = "Összes Nyeremény";
    this.fdb = "Figyelmeztetés";
    this.apv = "ÖSSZES";
    this.jqu = "KÉREM VÁRJON ...";
    this.hxh = "Menü";
    this.qpy = "SEBESSÉG";
    this.nbf = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.mup = "TOVÁBB";
    this.bqj = "AUTOSTART";
    this.zys = "SÚGÓ";
    this.ivl = "SZORZÁS";
    this.left = "BAL";
    this.bib = "JOBB";
    this.ok = "OK";
    this.iab = "MÉGSEM";
    this.gly = "Szorzás";
    this.gnp = "Felezés";
    this.nbc = "JÁTÉKSZABÁLYOK";
    this.irl = "JÁTÉKSZABÁLYOK";
    this.ifx = "Bónusz!";
    this.rfg = "BÓNUSZ";
    this.vnx = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.zqn = "NINCS ELÉG HITEL";
    this.wbo = "V A L U E";
    this.yun = "nyeremények";
    this.of = "/";
    this.cgs = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.arq = "BETÖLTÉSE ...";
    this.xxd = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.wvz = "Kommunikációs hiba";
    this.fwt = "Elérte az egyik limitet!";
    this.kfe = "Elérte a szabad játékok maximum számát!";
    this.joo = "A játék megállítva";
    this.qex = "Játék újraindul";
    this.nuo = "NYERT";
    this.error = "HIBA";
    this.egt = "FREEPLAY";
    this.kpp = "AUTO";
    this.jfh = "JÁTÉK ID";
    this.toc = "Játék Idő";
    this.yqj = "utolsó";
    this.tgn = "játék";
    this.iew = "HITEL";
    this.audio = "HANG";
    this.ucf = "ZENE";
    this.zdw = "TELJES KÉPERNYŐ";
    this.unn = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.omr = "Ne mutassa mégegyszer";
    this.eku = "A hangot nem lehet betölteni!";
    this.aog = "Források hiányoznak!";
    this.rpy = "Játék hang nélkül?";
    this.vdf = "BEÁLLÍTÁS";
    this.swx = "Kérjük fordítsa el a készüléket!";
    this.fvi = "INFÓ";
    this.kxz = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.nxg = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.umd = "Kérjük használja a(z)";
    this.kop = " legújabb verzióját!";
    this.nwi = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.chi = "Ez a játék nem indítható FreePlay módban!";
    this.ttd = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.cyq = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.sir = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.jwh = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.xvr = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.bml = "Statisztika";
    this.ato = "Összes Játék";
    this.nfu = "Összes Tét";
    this.vlk = "Összes Nyeremény";
    this.rwl = "Összes Játék Idő";
    this.jie = "Elolvastam az üzenetet.";
    this.swo = "KILÉPÉS";
    this.xfn = "Előzmények";
    this.otl = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.qld = "Fő Játék";
    this.iji = "Autom. Felírás";
    this.kep = "Felírva";
    this.vcy = "Bónusz játék";
    this.rma = "Respin";
    this.qtw = "Bónusz";
    this.tbg = "Első Leosztás";
    this.cmq = "Második Leosztás";
    this.clo = "Harmadik Leosztás";
    this.ugf = "AUTOSTART BEÁLLÍTÁS";
    this.zbe = "Játékok száma:";
    this.wpf = "Stop autostart";
    this.uhr = "A hitel kevesebb, mint:";
    this.xnn = "A hitel több, mint:";
    this.cxr = "A nyeremény több, mint:";
    this.dhi = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.ggs = "Megosztás a Facebook-on";
    this.utw = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.vhl = "Reality Check";
    this.yjc = "Ön egy valóság-ellenőrzést kért.";
    this.mee = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
tsd.prototype = new goo;

function fze() {
    this.fjd = "MIZA MINIMĂ ESTE";
    this.wpe = "MIZA MAXIMĂ";
    this.vuc = "MIZA MIN.";
    this.fhk = "MIZA MAX.";
    this.wmw = "MIZĂ";
    this.start = "START";
    this.oxo = "AJUTOR";
    this.iog = "LISTA|CÂŞTIGURI";
    this.tyl = "MENIU";
    this.twv = "MENIUL|JOCULUI";
    this.ubl = "STOP";
    this.pwr = "CREDIT";
    this.vuf = "SFÂRŞIT JOCUL";
    this.kbd = "CÂŞTIGĂTOR!";
    this.eiq = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.aii = "ULTIMUL CÂŞTIG";
    this.tbs = "COLECTA";
    this.oqq = "COLECTA";
    this.fgi = "JOC";
    this.zhn = "AUTO|START";
    this.rxg = "COLECTARE|1/2";
    this.whk = "IEŞIRE";
    this.tvo = "APĂSAŢI START";
    this.ctc = "ALEGEŢI MIZA";
    this.jbf = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.vjh = "Câştig total";
    this.fdb = "Avertizare";
    this.apv = "TOTAL";
    this.jqu = "AŞTEPTAŢI VĂ ROG ...";
    this.hxh = "Meniul Jocului";
    this.qpy = "VITEZĂ";
    this.nbf = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.mup = "CONTINUARE";
    this.bqj = "AUTOSTART";
    this.zys = "LISTA CÂŞTIGURI";
    this.ivl = "JOC";
    this.left = "STÂNGA";
    this.bib = "DREAPTA";
    this.ok = "OK";
    this.iab = "ÎNTRERUPERE";
    this.gly = "Joc";
    this.gnp = "Colectare 1/2";
    this.nbc = "REGULILE JOCULUI";
    this.irl = "REGULILE|JOCULUI";
    this.ifx = "Bonus!";
    this.rfg = "BONUS";
    this.vnx = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.zqn = "CREDIT INSUFICIENT.";
    this.yun = "câştigă";
    this.wbo = "V A L U E";
    this.of = "DIN";
    this.cgs = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.arq = "ÎNCARCĂ ...";
    this.xxd = "ÎNCARCĂ ISTORIC ...";
    this.wvz = "Eroare de comunicare";
    this.fwt = "Aţi atins una dintre limite!";
    this.kfe = "Aţi atins numărul maxim de jocuri gratis!";
    this.joo = "Jocul se încheie";
    this.qex = "Jocul se restartează";
    this.nuo = "CÂŞTIGAT";
    this.error = "EROARE";
    this.egt = "FREEPLAY";
    this.kpp = "AUTO";
    this.jfh = "ID JOC";
    this.toc = "TIMP DE JOC";
    this.yqj = "ultimele";
    this.tgn = "jocuri";
    this.iew = "CREDIT";
    this.audio = "AUDIO";
    this.ucf = "MUZICĂ";
    this.zdw = "ECRAN COMPLET";
    this.unn = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.omr = "Nu reafișați";
    this.eku = "Sunetele nu pot fi încărcate!";
    this.aog = "Lipsesc resurse!";
    this.rpy = "Jucaţi fără sunet?";
    this.vdf = "SETĂRI";
    this.swx = "Vă rugăm opriţi aparatul!";
    this.fvi = "INFO";
    this.kxz = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.nxg = "Acest joc este optimizat pentru Google Chrome.";
    this.tfu = "Vă rugăm utilizaţi versiunea actuală";
    this.nwi = "Din păcate acest browser nu este sprijinit complet.";
    this.chi = "Acest joc nu poate fi pornit în modul freeplay!";
    this.ttd = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.cyq = "Ajustează interfaţa de joc nevoilor dvs!";
    this.sir = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.jwh = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.xvr = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.bml = "Statistică";
    this.ato = "Număr jocuri";
    this.nfu = "Pariuri totale";
    this.vlk = "Câştig total";
    this.rwl = "Timp total de joc";
    this.jie = "Am citit mesajul.";
    this.swo = "ÎNCHEIERE|JOC";
    this.xfn = "ISTORIC";
    this.otl = "Nu există jocuri.";
    this.state = "STATUT";
    this.qld = "Joc principal";
    this.iji = "Auto colectare";
    this.kep = "Colectat";
    this.vcy = "Bonusspins";
    this.rma = "Respin";
    this.qtw = "Bonus";
    this.tbg = "Primul Deal";
    this.cmq = "Al doilea deal";
    this.clo = "Al treilea deal";
    this.ugf = "SETĂRI AUTOSTART";
    this.zbe = "Numărul jocurilor:";
    this.wpf = "Oprire autostart";
    this.uhr = "Credit sub:";
    this.xnn = "Credit peste:";
    this.cxr = "Câștig peste:";
    this.dhi = "Autostart se va opti la începerea bonusului.";
    this.ggs = "Distribuie Facebook";
    this.utw = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.vhl = "Reality Check";
    this.yjc = "Ai cerut un Reality Check.";
    this.mee = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
fze.prototype = new goo;

function xxl() {
    this.fjd = "MÍNIMA APOSTA É";
    this.wpe = "MÁX. APOSTA";
    this.vuc = "MÍN. APOSTA";
    this.fhk = "MÁX. APOSTA";
    this.wmw = "APOSTA";
    this.start = "PARTIDA";
    this.oxo = "AJUDA";
    this.iog = "ESQUEMA|DE PAGOS";
    this.tyl = "MENU";
    this.twv = "SELEÇÃO|DE JOGOS";
    this.ubl = "PARADA";
    this.pwr = "CRÉDITO";
    this.vuf = "FIM DO JOGO";
    this.kbd = "VENCEDOR!";
    this.eiq = "BOA SORTE!";
    this.win = "GANHO";
    this.aii = "ULTIMO GANHO";
    this.tbs = "COLETAR";
    this.oqq = "COLETAR";
    this.fgi = "JOGADA";
    this.zhn = "AUTO|PARTIDA";
    this.rxg = "METADE";
    this.whk = "SAÍDA";
    this.tvo = "PREMIR PARTIDA";
    this.ctc = "SELECIONAR APOSTA";
    this.jbf = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.vjh = "Ganho total";
    this.fdb = "Aviso";
    this.apv = "TOTAL";
    this.jqu = "AGUARDE POR FAVOR ...";
    this.hxh = "Seleção de jogos";
    this.qpy = "VELOCIDADE";
    this.nbf = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.mup = "CONTINUAR";
    this.bqj = "AUTOPARTIDA";
    this.zys = "ESQUEMA DE PAGOS";
    this.ivl = "JOGADA";
    this.left = "ESQUERDA";
    this.bib = "DIREITA";
    this.ok = "OK";
    this.iab = "CANCELAR";
    this.gly = "Jogada";
    this.gnp = "Metade";
    this.nbc = "REGRAS DO JOGO";
    this.irl = "REGRAS|DO JOGO";
    this.ifx = "Bonus!";
    this.rfg = "BONUS";
    this.vnx = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.zqn = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.yun = "ganha";
    this.wbo = "V A L U E";
    this.of = "DE";
    this.cgs = "TOCAR NA TELA PARA CONTINUAR";
    this.arq = "CARREGANDO ...";
    this.xxd = "CARREGANDO HISTÓRICO ...";
    this.wvz = "Erro de comunicação";
    this.fwt = "Alcançou um dos limities!";
    this.kfe = "Alcançou a quantidade máxima de jogos livres!";
    this.joo = "O jogo será encerrado";
    this.qex = "O jogo será reiniciado";
    this.nuo = "GANHOU";
    this.error = "ERRO";
    this.egt = "FREEPLAY";
    this.kpp = "AUTO";
    this.jfh = "ID JOGO";
    this.toc = "Playing Time";
    this.yqj = "Últimos";
    this.tgn = "jogos";
    this.iew = "DEPOSIT";
    this.audio = "AUDIO";
    this.ucf = "MUSIC";
    this.zdw = "TELA CHEIA";
    this.unn = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.omr = "Não exibir novamente";
    this.eku = "Sounds não podem ser carregados!";
    this.aog = "Faltam recursos!";
    this.rpy = "Jogar sem som?";
    this.vdf = "AJUSTES";
    this.swx = "Favor girar o seu aparelho!";
    this.fvi = "INFORMAÇÃO";
    this.kxz = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.nxg = "Este jogo é otimizado por Google Chrome.";
    this.tfu = "Favor usar a versão atual de";
    this.nwi = "Infelizmente este browser não é completamente suportado.";
    this.chi = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.ttd = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.cyq = "Adapte a interface do jogo às suas necessidades!";
    this.sir = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.jwh = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.xvr = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.bml = "Estatísticas";
    this.ato = "Número de jogos";
    this.nfu = "Aposta total";
    this.vlk = "Ganho total";
    this.rwl = "Tempo total do jogo";
    this.jie = "Eu lí esta mensagem.";
    this.swo = "ENCERRAR|JOGO";
    this.xfn = "HISTÓRICO";
    this.otl = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.qld = "Jogo principal";
    this.iji = "Coletado automaticamente";
    this.kep = "Coletado";
    this.vcy = "Bonusspins";
    this.rma = "Respin";
    this.qtw = "Bonus";
    this.tbg = "Primeiro Deal";
    this.cmq = "Segundo Deal";
    this.clo = "Terceiro Deal";
    this.ugf = "AJUSTES AUTOPARTIDA";
    this.zbe = "Número de jogos:";
    this.wpf = "Parar autopartida";
    this.uhr = "Crédito menor do que:";
    this.xnn = "Crédito maior do que:";
    this.cxr = "Ganho maior do que:";
    this.dhi = "O autopartida será parado no início do bonus.";
    this.ggs = "Participar no Facebook";
    this.utw = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.vhl = "Reality Check";
    this.yjc = "Solicitaste um Reality Check.";
    this.mee = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
xxl.prototype = new goo;

function ymf() {
    this.fjd = "LA MISE MINIMALE EST DE";
    this.wpe = "MISE MAX.";
    this.vuc = "MISE MINI";
    this.fhk = "MISE MAX.";
    this.wmw = "MISE";
    this.start = "DEPART";
    this.oxo = "AIDE";
    this.iog = "TABLEAU|DES PAIEMENTS";
    this.tyl = "MENU";
    this.twv = "PLUS|DE JEUX";
    this.ubl = "ARRÊTEZ";
    this.pwr = "CRÉDIT";
    this.vuf = "FIN DU JEU";
    this.kbd = "GAGNANT!";
    this.eiq = "BONNE CHANCE!";
    this.win = "GAIN";
    this.aii = "DERNIER GAIN";
    this.tbs = "ENCAISSER";
    this.oqq = "ENCAISSER";
    this.fgi = "DOUBLER";
    this.zhn = "AUTO|LANCER";
    this.rxg = "ENCAISSER|MOITIÉ";
    this.whk = "SORTIE";
    this.tvo = "APPUYEZ SUR START";
    this.ctc = "CHOISIR LA MISE";
    this.jbf = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.vjh = "Gain total";
    this.fdb = "Avertissement";
    this.apv = "TOTALE";
    this.jqu = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.hxh = "Plus de jeux";
    this.qpy = "VITESSE";
    this.nbf = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.mup = "CONTINUER";
    this.bqj = "AUTO LANCER";
    this.zys = "TABLEAU DES PAIEMENTS";
    this.ivl = "DOUBLER";
    this.left = "GAUCHE";
    this.bib = "DROITE";
    this.ok = "OK";
    this.iab = "ANNULER";
    this.gly = "Doubler";
    this.gnp = "Encaisser moitié";
    this.nbc = "RÈGLES DU JEU";
    this.irl = "RÈGLES DU JEU";
    this.ifx = "Bonus!";
    this.rfg = "BONUS";
    this.vnx = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.zqn = "PAS ASSEZ DE CRÉDIT";
    this.yun = "gagne";
    this.wbo = "V A L U E";
    this.of = "SUR";
    this.cgs = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.arq = "CHARGEMENT EN COURS ...";
    this.xxd = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.wvz = "Erreur de communication";
    this.fwt = "Vous avez atteint une des limites!";
    this.kfe = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.joo = "Le jeu sera terminé";
    this.qex = "Le jeu sera démarré de nouveau";
    this.nuo = "GAGNÉ";
    this.error = "ERREUR";
    this.egt = "JEU GRATUIT";
    this.kpp = "AUTO";
    this.jfh = "ID DU JEU";
    this.toc = "TEMPS DE JEU";
    this.yqj = "Les";
    this.tgn = "derniers jeux";
    this.iew = "AVOIR";
    this.audio = "AUDIO";
    this.ucf = "MUSIQUE";
    this.zdw = "PLEIN ÉCRAN";
    this.unn = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.omr = "Ne pas afficher encore une fois";
    this.eku = "Impossible de charger des sounds!";
    this.aog = "Manque de ressources!";
    this.rpy = "Jouer sans son?";
    this.vdf = "CONFIGUR.";
    this.swx = "Merci de tourner votre matériel!";
    this.fvi = "INFO";
    this.kxz = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.nxg = "Ce jeu est optimisé pour Google Chrome.";
    this.tfu = "Veuilllez utiliser la version à jour de";
    this.nwi = "Malheureusement, ce browser n'est intégralement supporté.";
    this.chi = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.ttd = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.cyq = "Adapte l'interface de jeu à tes besoins!";
    this.sir = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.jwh = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.xvr = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.bml = "Statistiques";
    this.ato = "Nombre des jeux";
    this.nfu = "Total des mises";
    this.vlk = "Gain total";
    this.rwl = "Temps total du jeu";
    this.jie = "J'ai lu le message";
    this.swo = "TERMINER|LE JEU";
    this.xfn = "Historique";
    this.otl = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.qld = "Jeu principal";
    this.iji = "Pris automatiquement";
    this.kep = "Pris";
    this.vcy = "Bonusspins";
    this.rma = "Respin";
    this.qtw = "Bonus";
    this.tbg = "Premier Deal";
    this.cmq = "Deuxième Deal";
    this.clo = "Troisième Deal";
    this.ugf = "AUTOSTART CONFIGURATION";
    this.zbe = "Nombre des jeux:";
    this.wpf = "Arrêter autostart";
    this.uhr = "Crédit inférieur à:";
    this.xnn = "Crédit supérieur à:";
    this.cxr = "Gain supérieur à:";
    this.dhi = "L'autostart est arrêté au début du bonus.";
    this.ggs = "Partager sur Facebook";
    this.utw = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.vhl = "Reality Check";
    this.yjc = "Tu as demandé un Reality Check.";
    this.mee = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
ymf.prototype = new goo;

function wow() {
    this.fjd = "NAJMANJI ULOG JE";
    this.wpe = "MAX ULOG";
    this.vuc = "MIN. ULOG";
    this.fhk = "MAKS. ULOG";
    this.wmw = "ULOG";
    this.start = "START";
    this.oxo = "POMOĆ";
    this.iog = "LISTA DOBITAKA";
    this.tyl = "IZBORNIK";
    this.twv = "VIŠE|IGARA";
    this.ubl = "STOP";
    this.pwr = "KREDIT";
    this.vuf = "KRAJ IGRE";
    this.kbd = "DOBITAK!";
    this.eiq = "SRETNO!";
    this.win = "DOBITAK";
    this.aii = "ZADNJI DOBITAK";
    this.tbs = "UPIŠI";
    this.oqq = "UPIŠI";
    this.fgi = "DUPLANJE";
    this.zhn = "AUTO|START";
    this.rxg = "UZMI|1/2";
    this.whk = "IZLAZ";
    this.tvo = "PRETISNITE START";
    this.ctc = "BIRAJTE ULOG";
    this.jbf = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.vjh = "Ukubni dobitci";
    this.fdb = "Upozorenje";
    this.apv = "UKUBNI";
    this.jqu = "MOLIMO PRIČEKAJTE ...";
    this.hxh = "Više igara";
    this.qpy = "BRZINA";
    this.nbf = "Kod kvara na uređaju nema jamstva.";
    this.mup = "DALJE";
    this.bqj = "AUTOSTART";
    this.zys = "LISTA DOBITAKA";
    this.ivl = "DUPLANJE";
    this.left = "LIJEVA";
    this.bib = "DESNA";
    this.ok = "OK";
    this.iab = "PREKID";
    this.gly = "Duplanje";
    this.gnp = "Uzmi 1/2";
    this.nbc = "PRAVILA IGRE";
    this.irl = "PRAVILA IGRE";
    this.ifx = "Bonus!";
    this.rfg = "BONUS";
    this.vnx = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.zqn = "NEMATE DOVOLJNO KREDITA.";
    this.yun = "dobici";
    this.wbo = "V A L U E";
    this.of = "OD";
    this.cgs = "ZA NASTAVAK DODIRNITE ZASLON";
    this.arq = "UČITAVANJA ...";
    this.xxd = "POVIJEST UČITAVANJA ...";
    this.wvz = "Komunikacijska pogreška";
    this.fwt = "Dostigli ste jednu od graničnih vrijednosti!";
    this.kfe = "Dostigli ste maksimum besplatnih igara!";
    this.joo = "Igra se zatvara";
    this.qex = "Igra se iznova učitava";
    this.nuo = "OSVOJENO";
    this.error = "POGREŠKA";
    this.egt = "FREEPLAY";
    this.kpp = "AUTO";
    this.jfh = "ID IGRE";
    this.toc = "Vrijeme igre";
    this.yqj = "posljednjih";
    this.tgn = "igara";
    this.iew = "DEPOZIT";
    this.audio = "ZVUKA";
    this.ucf = "GLAZBA";
    this.zdw = "PUN ZASLON";
    this.unn = "PUN ZASLON";
    this.language = "JEZIKA";
    this.omr = "Ne prikazuj ponovo";
    this.eku = "Zvukovi se ne mogu učitati!";
    this.aog = "Nedostaju resursi!";
    this.rpy = "Želite li igrati uz zvuk?";
    this.vdf = "POSTAVKE";
    this.swx = "Uključite svoj uređaj!";
    this.fvi = "INFORMACIJE";
    this.kxz = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.nxg = "Ova igra je optimizirana za Google Chrome.";
    this.tfu = "Molimo koristite se trenutnom inačicom";
    this.nwi = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.chi = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.ttd = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.cyq = "Prilagodite sučelje igre svojim potrebama!";
    this.sir = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.jwh = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.xvr = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.bml = "Statistike";
    this.ato = "Ukupno igara";
    this.nfu = "Ukupni ulog";
    this.vlk = "Ukupno dobitaka";
    this.rwl = "Ukupno vrijeme igre";
    this.jie = "Pročitao sam ovu poruku";
    this.swo = "IZLAZ|IZ IGRE";
    this.xfn = "Povijest";
    this.otl = "Nema odigranih igara.";
    this.state = "STANJE";
    this.qld = "Glavna igra";
    this.iji = "Auto. pokupljeno";
    this.kep = "Pokupljeno";
    this.vcy = "Besplatne igre";
    this.rma = "Dodatne okretaje";
    this.qtw = "Bonus";
    this.tbg = "Prvo dijeljenje";
    this.cmq = "Drugo dijeljenje";
    this.clo = "Treće dijeljenje";
    this.ugf = "POSTAVKE AUTOMATSKE IGRE";
    this.zbe = "Ukupno igara:";
    this.wpf = "Zaustavljanje automatske igre";
    this.uhr = "Kredit manji od:";
    this.xnn = "Kredit veći od:";
    this.cxr = "Dobitak veći od:";
    this.dhi = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.ggs = "Podijeli na Facebooku";
    this.utw = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.vhl = "Reality Check";
    this.yjc = "Zatražili ste Reality Check.";
    this.mee = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
wow.prototype = new goo;

function qom() {
    this.fjd = "MINIMA PUNTATA È";
    this.wpe = "PUNTATA MASSIMA";
    this.vuc = "MIN. PUNTATA";
    this.fhk = "MASS. PUNTATA";
    this.wmw = "PUNTATA";
    this.start = "START";
    this.oxo = "AIUTO";
    this.iog = "TABELLA VINCITE";
    this.tyl = "MENU";
    this.twv = "SCELTA|GIOCHI";
    this.ubl = "STOP";
    this.pwr = "CREDITO";
    this.vuf = "FINE PARTITA";
    this.kbd = "VINCITORE!";
    this.eiq = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.aii = "ULTIMA VINCITA";
    this.tbs = "INCASSA";
    this.oqq = "INCASSA";
    this.fgi = "GAMBLE";
    this.zhn = "AUTO|START";
    this.rxg = "METÀ";
    this.whk = "FINE";
    this.tvo = "PREMI START";
    this.ctc = "SCEGLI PUNTATA";
    this.jbf = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.vjh = "Totale vincita";
    this.fdb = "Attenzione";
    this.apv = "TOTALE";
    this.jqu = "ATTENDERE PREGO ...";
    this.hxh = "Scelta Giochi";
    this.qpy = "VELOCITÀ";
    this.nbf = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.mup = "CONTINUA";
    this.bqj = "AUTOSTART";
    this.zys = "TABELLA VINCITE";
    this.ivl = "GAMBLE";
    this.left = "SINISTRA";
    this.bib = "DESTRA";
    this.ok = "OK";
    this.iab = "CANCELLA";
    this.gly = "Gamble";
    this.gnp = "Metà";
    this.nbc = "REGOLAMENTO";
    this.irl = "REGOLAMENTO";
    this.ifx = "Bonus!";
    this.rfg = "BONUS";
    this.vnx = "PREMI UN TASTO PER CONTINUARE";
    this.zqn = "CREDITO INSUFFICIENTE!";
    this.yun = "vince";
    this.wbo = "V A L U E";
    this.of = "DI";
    this.cgs = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.arq = "STA CARICANDO ...";
    this.xxd = "STA CARICANDO LA CRONACA ...";
    this.wvz = "Errore di comunicazione";
    this.fwt = "Hai raggiunto uno dei limiti!";
    this.kfe = "Hai raggiunto il numero massimo di free games!";
    this.joo = "La partita sta terminando";
    this.qex = "La partita sta ripartendo";
    this.nuo = "VINTO";
    this.error = "ERRORE";
    this.egt = "FREEPLAY";
    this.kpp = "AUTO";
    this.jfh = "GAME ID";
    this.toc = "Durata del gioco";
    this.yqj = "Ultime partite";
    this.tgn = "";
    this.iew = "DEPOSITO";
    this.audio = "AUDIO";
    this.ucf = "MUSICA";
    this.zdw = "SCHERMO INTERO";
    this.unn = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.omr = "Non mostrare di nuovo";
    this.eku = "Suoni non caricabili!";
    this.aog = "Mancano risorse!";
    this.rpy = "Giocare senza suoni?";
    this.vdf = "SETTAGGI";
    this.swx = "Prego girare l'apparecchio!";
    this.fvi = "INFO";
    this.kxz = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.nxg = "La partita è ottimizzata per Google Chrome.";
    this.tfu = "Prego utilizzare la versione attuale di";
    this.nwi = "Purtroppo il presente browser non viene supportato interamente";
    this.chi = "Impossibile avviare questa partita nel modo freeplay!";
    this.ttd = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.cyq = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.sir = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.jwh = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.xvr = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.bml = "Statistica";
    this.ato = "Totale partite";
    this.nfu = "Totale puntata";
    this.vlk = "Totale vincita";
    this.rwl = "Totale durata del gioco";
    this.jie = "Ho letto il messaggio";
    this.swo = "TERMINARE|LA PARTITA";
    this.xfn = "Cronaca";
    this.otl = "Nessuna partita giocata.";
    this.state = "STATO";
    this.qld = "Partita principale";
    this.iji = "Raccolto autom.";
    this.kep = "Raccolto";
    this.vcy = "Bonusspin";
    this.rma = "Respin";
    this.qtw = "Bonus";
    this.tbg = "Primo deal";
    this.cmq = "Secondo deal";
    this.clo = "Terzo deal";
    this.ugf = "SETTAGGI AUTOSTART";
    this.zbe = "Numero di partite:";
    this.wpf = "Fermare l'autostart";
    this.uhr = "Credito più basso di:";
    this.xnn = "Credito più alto di:";
    this.cxr = "Vincita più alta di:";
    this.dhi = "L'autostart si ferma all'inizio del bonus.";
    this.ggs = "Dividi su facebook";
    this.utw = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.vhl = "Reality Check";
    this.yjc = "Avete richiesto un Reality Check.";
    this.mee = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.aor = "Game break";
    this.jml = "Game limits";
    this.efm = "Self test";
    this.adp = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
qom.prototype = new goo;

function luf() {
    this.fjd = "MIN. INSATSEN ÄR";
    this.wpe = "MAXIMAL INSATS";
    this.vuc = "MIN. INSATS";
    this.fhk = "MAX. INSATS";
    this.wmw = "INSATS";
    this.start = "STARTA";
    this.oxo = "HJÄLP";
    this.iog = "VINSTTABELL";
    this.tyl = "MENY";
    this.twv = "FLER|SPEL";
    this.ubl = "STOPP";
    this.pwr = "KREDIT";
    this.vuf = "SPELET ÄR SLUT";
    this.kbd = "VINNARE!";
    this.eiq = "LYCKA TILL!";
    this.win = "VINN";
    this.aii = "SENASTE VINSTEN";
    this.tbs = "INKASSERA";
    this.oqq = "INKASSERA";
    this.fgi = "DUBBLERA";
    this.zhn = "AUTO|START";
    this.rxg = "HÄLFTEN|1/2";
    this.whk = "AVSLUTA";
    this.tvo = "TRYCK PÅ START";
    this.ctc = "VÄLJ INSATS";
    this.jbf = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.vjh = "Total Vinst";
    this.fdb = "Varning";
    this.apv = "TOTALT";
    this.jqu = "VAR VÄNLIG VÄNTA ...";
    this.hxh = "Fler spel";
    this.qpy = "TEMPO";
    this.nbf = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.mup = "FORTSÄTT";
    this.bqj = "AUTOSTART";
    this.zys = "VINSTTABELL";
    this.ivl = "DUBBLERA";
    this.left = "VÄNSTER";
    this.bib = "HÖGER";
    this.ok = "OK";
    this.iab = "AVBRYT";
    this.gly = "Dubblering";
    this.gnp = "Hälften";
    this.nbc = "SPELREGLER";
    this.irl = "SPELREGLER";
    this.ifx = "Bonus!";
    this.rfg = "BONUS";
    this.vnx = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.zqn = "FÖR LÅGT SALDO!";
    this.yun = "vinster";
    this.wbo = "V A L U E";
    this.of = "AV";
    this.cgs = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.arq = "LÄSER ...";
    this.xxd = "LÄSER IN HISTORIKEN ...";
    this.wvz = "Kommunikationsfel";
    this.fwt = "Du har nått en av gränserna!";
    this.kfe = "Du har nått det maximala antalet gratisspel!";
    this.joo = "Spelet avslutas";
    this.qex = "Spelet startas om";
    this.nuo = "VUNNA";
    this.error = "FEL";
    this.egt = "GRATISSPEL";
    this.kpp = "AUTO";
    this.jfh = "SPEL-ID";
    this.toc = "SPELTID";
    this.yqj = "senaste";
    this.tgn = "spelen";
    this.iew = "INSÄTTNING";
    this.audio = "LJUD";
    this.ucf = "MUSIK";
    this.zdw = "HELSKÄRM";
    this.unn = "HELSKÄRM";
    this.language = "SPRÅK";
    this.omr = "Visa inte igen";
    this.eku = "Ljud kan inte laddas!";
    this.aog = "Resurser saknas!";
    this.rpy = "Spela utan ljud?";
    this.vdf = "INSTÄLLN.";
    this.swx = "Vänd din enhet!";
    this.fvi = "INFO";
    this.kxz = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.nxg = "Det här spelet är optimerat för Google Chrome.";
    this.tfu = "Använd den senaste versionen av";
    this.nwi = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.chi = "Det här spelet kan inte startas i gratisspelsläget!";
    this.ttd = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.cyq = "Anpassa spelgränssnittet efter dina behov!";
    this.sir = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.jwh = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.xvr = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.bml = "Statistik";
    this.ato = "Totalt antal spel";
    this.nfu = "Totalinsats";
    this.vlk = "Totalvinst";
    this.rwl = "Total speltid";
    this.jie = "Jag har läst detta meddelande";
    this.swo = "AVSLUTA|SPELET";
    this.xfn = "Historik";
    this.otl = "Inga spel har spelats.";
    this.state = "STATUS";
    this.qld = "Huvudspel";
    this.iji = "Auto. Inkasserat";
    this.kep = "Inkasserat";
    this.vcy = "Bonusspinn";
    this.rma = "Respin";
    this.qtw = "Bonus";
    this.tbg = "Första given";
    this.cmq = "Andra given";
    this.clo = "Tredje given";
    this.ugf = "AUTOSTARTINSTÄLLNINGAR";
    this.zbe = "Antal spelrundor:";
    this.wpf = "Stoppa autospel";
    this.uhr = "Saldo lägre än:";
    this.xnn = "Saldo högre än:";
    this.cxr = "Vinst högre än:";
    this.dhi = "Autospelen kommer att stoppas då bonusen startar.";
    this.ggs = "Dela på Facebook";
    this.utw = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.vhl = "Reality Check";
    this.yjc = "Du har begärt att få en statusuppdatering.";
    this.mee = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.aor = "Spelpaus";
    this.jml = "Spelgränser";
    this.efm = "Självtest";
    this.adp = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
luf.prototype = new goo;

function pwn() {
    this.yzu = "LINES";
    this.oat = "LINE";
    this.nza = "BET / LINE";
    this.vwm = "WAYS";
    this.zum = "WAY";
    this.loz = "BONUSSPINS LEFT";
    this.hae = "TOTAL BONUSSPINS";
    this.unh = "BONUSSPINS PLAYED";
    this.pgh = "BONUSSPINS LEFT";
    this.hns = "CONGRATULATIONS YOU WIN!";
    this.dcr = "BONUS WIN";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SYMBOLS";
    this.pjl = "SYMBOL";
    this.jiw = "You win extra BONUSSPINS!";
    this.gmd = "Wins pay only from left to right!";
    this.xrz = "BONUS ENTRY WIN:";
    this.xcb = "BONUSSPINS";
    this.wji = "BONUSSPINS are played with the same bet and number of lines as the initiating game.";
    this.ova = "Line Wins: Only the highest line win is paid on each line played. Line wins are a multiple of the line bet. Line wins from different lines are added.";
    this.rkl = "Scatter Wins: Scatter wins are a multiple of the total bet. Wins from Scatter symbols are added to the line wins.";
    this.ldl = "BONUS HELP";
    this.eyv = "SYMBOL HELP";
    this.dlv = "WINLINE HELP";
    this.emo = "WINWAY HELP";
    this.fwl = "You win an extra 15 BONUSSPINS!";
    this.cuq = "Play the Bonus until you have no BONUSSPINS left. BONUSSPINS can be re-triggered during the Bonus.";
    this.zth = "GAMBLE AMOUNT";
    this.upy = "RED/BLACK GAMBLE TO WIN";
    this.ctj = "SUIT GAMBLE TO WIN";
    this.sry = "15 BONUSSPINS are won with 3, 4 or 5 SCATTERED Symbols on any position! All BONUSSPIN wins are multiplied by 3.";
    this.mje = "Finish placing your bets!";
    this.guk = "Place your bets please!";
    this.itp = "No more bets!";
    this.oih = "Good Luck!";
    this.zto = "Better luck next time!";
    this.vgd = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.yta = "Bets accepted!";
    this.scy = "Bets not accepted!";
    this.jht = "Game in progress, please wait!";
    this.mbg = "WIN UP TO";
    this.jet = "WIN HISTORY";
    this.odc = "BONUS END";
    this.tdf = "Bonus Multiplier";
    this.kez = "Freespins!";
    this.pyr = "FREESPINS PLAYED";
    this.dvj = "FREESPIN WIN";
    this.pok = "CONGRATULATION!";
    this.xkm = "Congratulation, you get";
    this.cge = "You have";
    this.hpf = "freespins remaining!"
}
pwn.prototype = new ooe;

function ouw() {
    this.yzu = "ЛИНИИ";
    this.oat = "ЛИНИЯ";
    this.nza = "СТ. / ЛИНИЮ";
    this.loz = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.hae = "Бонусные вращения";
    this.unh = "СЫГРАННО ВРАЩЕНИЙ";
    this.pgh = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.hns = "ПОЗДРАВЛЯЕМ! ВЫ ВЫИГРАЛИ!";
    this.dcr = "БОНУС ВЫИГРЫШ";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "СИМВОЛЫ";
    this.pjl = "СИМВОЛ";
    this.xcb = "призовых вращений";
    this.gmd = "Все выигрыши считаются только слевa направо.";
    this.jiw = "Вы выиграли дополнительные бонусные вращения!";
    this.wji = "Ставка и количество линий в игре бонусные вращения те же самые, что и в инициировавшей игре.";
    this.ova = "Линейные выигрыши: Засчитывается только максимальный выигрыш на каждой линии. Размер линейных выигрышей – многократная сумма ставки. Линейные выигрыши на разных линиях суммируются.";
    this.rkl = "Выигрыши Scatter Сумма выигрышей Scatter – многократная сумма общей ставки. Выигрыши с символами Scatter прибавляются к линейным выигрышам.";
    this.vwm = "ПУТИ";
    this.zum = "ПУТЬ";
    this.ldl = "БОНУС – ПОМОЩЬ";
    this.eyv = "СИМВОЛ ПОМОЩЬ";
    this.dlv = "ЛИНИИ ВЫИГРЫША ПОМОЩЬ";
    this.emo = "ПОМОЩЬ К ПУТИ К ВЫИГРЫШУ";
    this.vgd = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА";
    this.zth = "СУММА РИСКА";
    this.upy = "РИСКНУТЬ КРАСНАЯ/ЧЕРНАЯ";
    this.ctj = "ВЫБОР МАСТИ";
    this.mbg = "ВЫИГРАЙ ДО";
    this.jet = "ХРОНИКА ВЫИГРЫШЕЙ";
    this.odc = "КОНЕЦ БОНУСА";
    this.kez = "бесплатных игр!";
    this.pyr = "СЫГРАННЫЕ БЕСПЛАТНЫЕ ИГРЫ";
    this.dvj = "ВЫИГРЫШ БЕСПЛАТНОЙ ИГРЫ";
    this.pok = "ПОЗДРАВЛЯЕМ!";
    this.xkm = "Поздравляем, вы получили";
    this.cge = "У вас еще";
    this.hpf = "бесплатных игр!";
    this.yta = "Ставки признаны!";
    this.scy = "Ставки не признаны!";
    this.jht = "Игра в процессе, пожалуйста, подождите...";
    this.mje = "Игра сейчас начнется!";
    this.guk = "Сделайте ставку, пожалуйста!";
    this.itp = "Ставок больше нет!";
    this.oih = "Удачи!";
    this.zto = "Желаем удачи в следующий раз!";
    this.fwl = "Вы выиграли следующие 15 призовых вращений барабанов!";
    this.cuq = "Бонус призовых вращений заканчивается когда призовых вращений больше нет. Дополнительные призовые вращения могут быть добавлены к Бонусу призовых вращений.";
    this.sry = "Вы получите 15 призовых вращений барабанов при выпадении 3, 4 или 5 символов СКАТТЕР на любой позиции. Все выигрыши умножаются на 3."
}
ouw.prototype = new hdv;

function owe() {
    this.yzu = "LÍNEAS";
    this.oat = "LÍNEA";
    this.nza = "APUE. / LÍNEA";
    this.loz = "BONUSSPINS RESTANTES";
    this.hae = "TOTAL DE BONUSSPINS";
    this.unh = "BONUSSPINS JUGADOS";
    this.pgh = "BONUSSPINS RESTANTES";
    this.hns = "ENHORABUENA, HAS GANADO!";
    this.dcr = "PREMIO BONUS";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SIMBOLOS";
    this.pjl = "SIMBOLO";
    this.tdf = "Multiplicador de bonus";
    this.xrz = "PREMIO ENTRADA BONUS:";
    this.xcb = "JUEGOS LIBRES";
    this.gmd = "Premios de la izquierda a la derecha!";
    this.jiw = "Ha ganado BONUSSPINS extra.";
    this.wji = "Los BONUSSPINS se juegan con la misma apuesta y el número de lineas que el juego inicial.";
    this.ova = "Premios de línea: Sólo se paga el mayor premio de línea por cada línea jugada. Los premios de línea son un múltiplo de la apuesta de la línea. Se suman los premios de línea de las diferentes líneas.";
    this.rkl = "Premios Scatter: Los premios Scatter son múltiplos de la apuesta total. Los premios de los símbolos scatter se suman a los premios de la línea.";
    this.vwm = "CAMINOS";
    this.zum = "CAMINO";
    this.ldl = "AYUDA DE BONUS";
    this.eyv = "SÍMBOLO AYUDA";
    this.dlv = "LÍNEA GANADORA AYUDA";
    this.emo = "AYUDA FORMAS DE PREMIO";
    this.vgd = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.zth = "PREMIO";
    this.upy = "ROJO/NEGRO PREMIO";
    this.ctj = "PREMIO DE SIMBOLO";
    this.mbg = "GANANCIAS HASTA";
    this.jet = "HISTORIAL DE GANANCIAS";
    this.odc = "FIN DE BONUS";
    this.kez = "Giros gratis!";
    this.pyr = "GIROS GRATIS JUGADOS";
    this.dvj = "PREMIO GIRO GRATIS";
    this.pok = "¡ENHORABUENA!";
    this.xkm = "¡Enhorabuena, ha conseguido";
    this.cge = "¡Le quedan";
    this.hpf = "giros gratis!";
    this.yta = "Aceptar apuestas!";
    this.scy = "Apuestas rechazadas!";
    this.jht = "El juego no ha concluido, por favor espere!";
    this.mje = "El juega va a comenzar!";
    this.guk = "Haga juego!";
    this.itp = "No más apuestas!";
    this.oih = "¡Mucha suerte!";
    this.zto = "¡Mejor suerte la próxima vez!";
    this.fwl = "Premio de 15 Freespins addicionales!";
    this.cuq = "El bono concluye cuando todos los BONUSSPINS se hayan jugado. En bono pueden ganarse BONUSSPINS adicionales.";
    this.sry = "Se gana 15 Freespins con 3, 4 o 5 simbolos de SCATTER en alguna posicion! Se triplican todos los premios de freespins."
}
owe.prototype = new yul;

function ror() {
    this.yzu = "LINIEN";
    this.oat = "LINIE";
    this.nza = "EINS. / LINIE";
    this.loz = "VERBLEIBENDE BONUSSPINS";
    this.hae = "TOTAL BONUSSPINS";
    this.unh = "GESPIELTE BONUSSPINS";
    this.pgh = "VERBLEIBENDE BONUSSPINS";
    this.hns = "GRATULIERE GEWONNEN!";
    this.dcr = "BONUS GEWINN";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SYMBOLE";
    this.pjl = "SYMBOL";
    this.tdf = "Bonus Multiplikator";
    this.xrz = "BONUS START GEWINN:";
    this.xcb = "BONUSSPINS";
    this.gmd = "Gewinne werden nur von links nach rechts gewertet!";
    this.jiw = "Zusätzliche BONUSSPINS gewonnen!";
    this.wji = "Die BONUSSPINS werden mit demselben Einsatz und Linienanzahl wie das auslösende Spiel gespielt.";
    this.ova = "Liniengewinne: Nur der höchste Liniengewinn je gespielter Linie zählt. Liniengewinne sind ein Vielfaches des Linieneinsatzes. Die Liniengewinne von verschiedenen Linien werden addiert.";
    this.rkl = "Scattergewinne: Scatter-Gewinne sind ein Vielfaches des Gesamteinsatzes. Gewinne aus Scatter-Symbolen werden den Liniengewinnen hinzugezählt.";
    this.vwm = "WEGE";
    this.zum = "WEG";
    this.ldl = "BONUS HILFE";
    this.eyv = "SYMBOL HILFE";
    this.dlv = "GEWINNLINIEN HILFE";
    this.emo = "GEWINNWEGE HILFE";
    this.vgd = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.zth = "RISIKO";
    this.upy = "ROT/SCHWARZ CHANCE";
    this.ctj = "SYMBOL CHANCE";
    this.mbg = "GEWINNE BIS ZU";
    this.jet = "GEWINNHISTORIE";
    this.odc = "BONUS ENDE";
    this.kez = "Freespins!";
    this.pyr = "GESPIELTE FREESPINS";
    this.dvj = "FREESPIN GEWINN";
    this.pok = "GRATULIERE!";
    this.xkm = "Gratulation, Sie bekommen";
    this.cge = "Sie haben noch";
    this.hpf = "Freespins übrig!";
    this.yta = "Einsätze akzeptiert!";
    this.scy = "Einsätze nicht akzeptiert!";
    this.jht = "Spiel läuft, bitte warten!";
    this.mje = "Das Spiel beginnt gleich!";
    this.guk = "Ihre Einsätze bitte!";
    this.itp = "Keine weiteren Einsätze!";
    this.oih = "Viel Glück!";
    this.zto = "Mehr Glück beim nächsten Mal!";
    this.fwl = "Weitere 15 BONUSSPINS gewonnen!";
    this.cuq = "Der Bonus endet, wenn alle BONUSSPINS abgespielt worden sind. Zusätzliche BONUSSPINS können im Bonus gewonnen werden.";
    this.sry = "15 BONUSSPINS werden durch 3, 4 oder 5 SCATTER Symbole auf jeder Position gewonnen! Alle BONUSSPIN Gewinne x 3."
}
ror.prototype = new yhd;

function drb() {
    this.yzu = "ÇIZGILER";
    this.oat = "ÇİZGİ";
    this.nza = "BANKO / ÇIZGI";
    this.loz = "KALAN PRIM OYUNLARIR";
    this.hae = "TOPLAM PRİM SPİNLERİ";
    this.unh = "OYNANAN PRIM OYUNLAR";
    this.pgh = "KALAN PRIM OYUNLARIR";
    this.hns = "TEBRİKLER KAZANDINIZ!";
    this.dcr = "PRIM KAZANCI";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SEMBOLLER";
    this.pjl = "SEMBOL";
    this.tdf = "Prim çarpanı";
    this.xrz = "PRİM GİRİŞ KAZANCI:";
    this.xcb = "BEDAVA OYUNLAR";
    this.gmd = "Kazançlar tek soldan sağa değerlendirilir!";
    this.jiw = "Ek PRİM SPİN’LERİ kazandınız!";
    this.wji = "PRİM SPİNLER başlayacak olan oyunda da aynı banko ve çizgi sayısı ile oynanacaktır.";
    this.ova = "Çizgi kazançları: Oynanan her çizginin sadece en yüksek çizgi kazancı sayılmaktadır. Çizgi kazançları çizgi bankosunun kat sayısından oluşmaktadır. Çeşitli çizgilerin çizgi kazançları birbirleri ile toplanmaktadır.";
    this.rkl = "Scatter kazançları: Scatter-kazançları toplam bankonun kat sayısından oluşmaktadır. Scatter-Sembollerinden elde edilen kazançlar çizgi kazançlarına eklenmektedir.";
    this.vwm = "YOLLAR";
    this.zum = "YOL";
    this.ldl = "PRİM YARDIMI";
    this.eyv = "SEMBOL YARDIMI";
    this.dlv = "KAZANÇ ÇIZGISI YARDIMI";
    this.emo = "KAZANÇ YOLLARI YARDIM";
    this.vgd = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.zth = "RİSK";
    this.upy = "KIRMIZI/SİYAH ŞANSI";
    this.ctj = "SEMBOL ŞANSI";
    this.mbg = "KAZANANILMASI MÜMKÜN OLAN";
    this.jet = "KAZANÇ GEÇMİŞİ";
    this.odc = "PRİM BİTTİ";
    this.kez = "adet bedava Spin kazandınız!";
    this.pyr = "OYNANILAN BEDAVA SPİN'ler";
    this.dvj = "BEDAVA SPİN KAZANCI";
    this.pok = "TEBRİKLER!";
    this.xkm = "Tebrikler,";
    this.cge = "Daha";
    this.hpf = "adet bedava SPİN'iniz bulunuyor!";
    this.oih = "Bol şans!";
    this.yta = "Bahisler kabul edildi!";
    this.scy = "Bahisler kabul edilmedi!";
    this.jht = "Oyun oynanmakta, lütfen bekleyin!";
    this.mje = "Oyun başlamak üzere!";
    this.guk = "Bankolarınız lütfen!";
    this.itp = "Daha fazla banko mümkün değil!";
    this.zto = "Bir dahaki sefer daha şanslı olursun!";
    this.fwl = "15 bedava oyun daha kazandın!";
    this.cuq = "Bedava oyun primleri tüm bedava oyunlar oynandığı zaman biter. Bedava oyun primlerinde ek bedava oyunlar kazanılabilir.";
    this.sry = "Her pozisyondaki 3, 4 veya 5 SCATTERED sembolleri ile 15 tane bedava oyun kazanılır! Tüm bedava oyun kazançları x 3."
}
drb.prototype = new zcz;

function qde() {
    this.yzu = "LINEK";
    this.oat = "LINKA";
    this.nza = "SÁZKA / LINKA";
    this.loz = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.hae = "TOTÁLNÍ BONUSSPINS";
    this.unh = "ODEHRANÉ BONUS HRY";
    this.pgh = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.hns = "GRATULUJEME VYHRÁL JSTE!";
    this.dcr = "BONUS VÝHRA";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SYMBOLY";
    this.pjl = "SYMBOL";
    this.tdf = "Násobic bonusu";
    this.xrz = "BONUS STARTUJE VÝHRU:";
    this.xcb = "BONUSSPINS";
    this.gmd = "Výhry platí pouze z leva do prava!";
    this.jiw = "Vyhrál jste extra BONUSOVOU hru!";
    this.wji = "BONUSSPINS sa hrají se stejnou  sázkou a počtem línií jako hra, při které se spustily.";
    this.ova = "Výhry na línkách: Započítává se jen nejvyšší výhra na lince. Výhry na linkách jsou násobky linkových sázek. Výhry na různých línkách se sčítají.";
    this.rkl = "Scatter výhry: Scatter výhry násobí celkovou sázku. Výhry ze Scatter symbolů se připočítávají k výhrám na línkách.";
    this.vwm = "ZPŮSOBY";
    this.zum = "ZPŮSOB";
    this.ldl = "BONUS NÁPOVĚDA";
    this.eyv = "SYMBOL NÁPOVĚDA";
    this.dlv = "VÝHERNÉ LINIE NÁPOVĚDA";
    this.emo = "WINWAY HELP";
    this.vgd = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.zth = "VÝHRA";
    this.upy = "CERVENÁ/CERNÁ VÝHRA";
    this.ctj = "SPRÁVNÁ BARVA KARTY VYHRÁVÁ";
    this.yta = "Sázky byly akceptovány!";
    this.scy = "Sázky nebyly akceptovány!";
    this.mbg = "VÝHRA AŽ";
    this.jet = "HISTORIE VÝHER";
    this.odc = "KONEC BONUSU";
    this.kez = "Freespins!";
    this.pyr = "FREESPINS PLAYED";
    this.dvj = "FREESPIN WIN";
    this.pok = "GRATULUJEME!";
    this.xkm = "Congratulation, you get";
    this.cge = "You have";
    this.hpf = "freespins remaining!";
    this.jht = "Hra probíhá, počkejte prosím!";
    this.mje = "Hra Se Hned Spustí!";
    this.guk = "Vaše sázky prosím!";
    this.itp = "Žádné další sázky.";
    this.oih = "Hodne štestí!";
    this.zto = "Příště více štěstí!";
    this.fwl = "Vyhráváte dalších 15 volných her!";
    this.cuq = "Bonus je ukoncen po odehrání všech bonusových her. Bonusové hry mohou být získány i behem bonusu.";
    this.sry = "3, 4 nebo 5 SCATTER symbolu na libovolné pozici vyhrává 15 volných her, výhry ve volné hre jsou násobené 3x."
}
qde.prototype = new fup;

function xwl() {
    this.yzu = "LIINID";
    this.oat = "LIIN";
    this.nza = "PAN. / LIINIL";
    this.loz = "TASUTA KEERUTUSI JÄÄNUD";
    this.hae = "BOONUSKEERUTUSI KOKKU";
    this.unh = "MÄNGE MÄNGITUD";
    this.pgh = "TASUTA KEERUTUSI JÄÄNUD";
    this.hns = "PALJU ÕNNE, SA VÕITSID!";
    this.dcr = "BOONUSVÕIT";
    this.xcb = "BOONUSKEERUTUST";
    this.zth = "RISKIMÄNGU SUMMA";
    this.upy = "PUNANE/MUST RISKIMÄNG";
    this.ctj = "RISKIMÄNG SÜMBOLIGA";
    this.vgd = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.yta = "Panused aktsepteeritud!";
    this.scy = "Panuseid ei aktsepteeritud!";
    this.mbg = "VÕIDA KUNI";
    this.jet = "VÕITUDE AJALUGU";
    this.odc = "BOONUSE LÕPP";
    this.kez = "tasuta keerutust!";
    this.pyr = "TASUTA KEERUTUSI MÄNGITUD";
    this.dvj = "TASUTA KEERUTUSE VÕIT";
    this.pok = "ÕNNITLEME!";
    this.xkm = "Õnnitleme, said";
    this.cge = "Sul on jäänud veel";
    this.hpf = "tasuta keerutust!";
    this.jht = "Mäng algab, palun oodake...";
    this.mje = "Lõpeta panuste tegemine!";
    this.guk = "Asetage palun panused!";
    this.itp = "Panuste tegemine lõppenud";
    this.oih = "Soovime edu!";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SÜMBOLID";
    this.pjl = "SÜMBOL";
    this.xrz = "BOONUSVÕIT:";
    this.gmd = "Võite arvestatakse ainult vasakult paremale!";
    this.jiw = "Te võitsite lisa BOONUSKEERUTUSI!";
    this.wji = "BOONUSKEERUTUSED mängitakse sama panuse ja liinide arvuga, nagu boonuse käivitanud mängus.";
    this.vwm = "VÕIMALUSED";
    this.zum = "VÕIMALUSE";
    this.fwl = "Te võitsite lisa 15 BOONUSKEERUTUST!";
    this.cuq = "Mängige kõik tasuta keerutused lõpuni. Tasuta keerutusi võib võita ka tasuta keerutuste boonuse ajal.";
    this.ldl = "BOONUSE SPIKKER";
    this.eyv = "SÜMBOLI SPIKKER";
    this.dlv = "LIINIDE SPIKKER";
    this.emo = "VÕIDUVÕIMALUSE SPIKKER";
    this.ova = "Liini võidud: Igal mänguliinil makstakse ainult suurimad liinivõidud. Liini võidud korrutatakse liini panusega. Erinevate liinide võidud liidetakse kokku.";
    this.rkl = "Scatteri võidud: Scatteri võidud korrutatakse kogupanusega. Scatteri sümboli võidud liidetakse liini võitudele.";
    this.tdf = "Boonuse mitmekordistaja";
    this.zto = "Rohkem õnne järgmisel korral!";
    this.sry = "3, 4 või 5 TÄHE sümbolit juhuslikel kohtadel annab 15 BOONUSKEERUTUST! Kõik BOONUSKEERUTUSE võidud korrutatakse 3-ga."
}
xwl.prototype = new jul;

function oab() {
    this.yzu = "ΓΡΑΜΜEΣ";
    this.oat = "ΓΡΑΜΜΗ";
    this.nza = "ΣΤΟIΧΗΜΑ / Γ.";
    this.loz = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.hae = "ΤΕΛΕΙΩΣ BONUSSPINS";
    this.unh = "ΠΑΙΓΜEΝΑ BONUSSPINS";
    this.pgh = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.hns = "ΣΥΓΧΑΡΗΤΗΡΙΑ ΚΕΡΔΙΣΑΤΕ!";
    this.dcr = "ΜΠOΝΟΥΣ ΚEΡΔΟΣ";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "ΣYΜΒΟΛΑ";
    this.pjl = "ΣΎΜΒΟΛΟ";
    this.tdf = "Πολλαπλασιαστής μπόνους";
    this.xrz = "BONUS START ΚΕΡΔIΖΕΙ:";
    this.xcb = "BONUSSPINS";
    this.gmd = "Τα κέρδη μετρούνται από αριστερά προς τα δεξιά!";
    this.jiw = "Κερδίσατε συμπληρωματικούς BONUSSPINS!";
    this.wji = "Τα γυρίσματα μπόνους, τα BONUSSPINS, παίζονται με το ίδιο ποντάρισμα και τον ίδιο αριθμό σειρών, όπως το αρχικό παιχνίδι.";
    this.ova = "Κέρδη γραμμών: Μόνο το μεγαλύτερο κέρδος ανά παιγμένη γραμμή προσμετράται. Τα κέρδη των γραμμών αποτελούν πολλαπλάσιο του πονταρίσματος στη γραμμή. Τα κέρδη γραμμών που αφορούν σε διαφορετικές γραμμές προστίθενται.";
    this.rkl = "Κέρδη Scatter: Τα κέρδη Scatter αποτελούν πολλαπλάσιο του συνολικού πονταρίσματος. Τα κέρδη από σύμβολα Scatter προσμετρώνται στα κέρδη των γραμμών.";
    this.vwm = "ΔΙΑΔΡΟΜΕΣ";
    this.zum = "ΔΙΑΔΡΟΜΉ";
    this.ldl = "BONUS ΒΟΉΘΕΙΑ";
    this.eyv = "ΒΟHΘΕΙΑ ΣΥΜΒOΛΩΝ";
    this.dlv = "ΒΟHΘΕΙΑ ΣΕΙΡΩΝ ΚEΡΔΟΥΣ";
    this.emo = "WINWAY ΒΟΗΘΕΙΑ";
    this.vgd = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.zth = "ΠΟΣΟ ΡΙΣΚΟΥ";
    this.upy = "ΜΑΥΡΟ/ΚΟΚΚΙΝΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.ctj = "ΣΥΜΒΟΛΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.mbg = "ΚΕΡΔΗ ΕΩΣ";
    this.jet = "ΙΣΤΟΡΙΚΟ ΚΕΡΔΩΝ";
    this.odc = "ΛΗΞΗ ΜΠΟΝΟΥΣ";
    this.kez = "Freespins!";
    this.pyr = "FREESPINS ΠΟΥ ΚΑΤΑΝΑΛΏΘΗΚΑΝ";
    this.dvj = "FREESPIN ΚΕΡΔΟΣ";
    this.pok = "ΣΥΓΧΑΡΗΤΗΡΙΑ!";
    this.xkm = "Συγχαρητήρια, κερδίσατε";
    this.cge = "Σας απομένουν";
    this.hpf = "Freespins!";
    this.yta = "Γίνονται αποδεκτά πονταρίσματα!";
    this.scy = "Πονταρίσματα δε γίνονται αποδεκτά!";
    this.jht = "Ενεργό παιχνίδι, παρακαλώ περιμένετε!";
    this.mje = "Το παιχνίδι ξεκινά σε λίγο!";
    this.guk = "Το ποντάρισμα σας, παρακαλώ!";
    this.itp = "Ποντάρισμα τέλος!";
    this.oih = "Καλή τύχη!";
    this.zto = "Καλύτερη τύχη την επόμενη φορά!";
    this.fwl = "Κερδίσατε 15 συμπληρωματικούς BONUSSPINS!";
    this.cuq = "Το Bonus τελειώνει, όταν όλα τα BONUSSPINS έχουν παιχθεί. Συμπληρωματικά BONUSSPINS δύνανται να κερδισθούν στο Bonus.";
    this.sry = "15 BONUSSPINS κερδίζονται με 3, 4 ή 5 σύμβολα ΑΣΤΡΟΥ σε κάθε θέση! Όλα τα BONUSSPINS αποφέρουν τριπλασιασμό κερδών."
}
oab.prototype = new bho;

function lfm() {
    this.yzu = "ЛИНИИ";
    this.oat = "ЛИНИЯ";
    this.nza = "ЗАЛОГ/Л-Я";
    this.loz = "БОНУС-ИГРИ ОСТАВАТ";
    this.unh = "БОНУС-ИГРИ ИЗИГРАНИ";
    this.pgh = "БОНУС-ИГРИ ОСТАВАТ";
    this.hns = "ПОЗДРАВЛЕНИЯ, ВИЕ СПЕЧЕЛИХТЕ!";
    this.dcr = "БОНУС ПЕЧАЛБА";
    this.xcb = "БОНУС-ИГРИ";
    this.zth = "СУМА ЗА ДУБЛИРАНЕ";
    this.upy = "ДУБЛИРАЙ ЧЕРВЕНА/ЧЕРНА-ПЕЧАЛБА";
    this.ctj = "ДУБЛИРАНЕ НА КОЗОВ ЦВЯТ-ПЕЧАЛБА";
    this.vgd = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.yta = "Залозите са приети!";
    this.scy = "Залозите не са приети!";
    this.mbg = "СПЕЧЕЛИ ДО";
    this.jet = "ИСТОРИЯ НА ПЕЧАЛБИТЕ";
    this.odc = "КРАЙ НА БОНУС";
    this.kez = "безплатни завъртания!";
    this.pyr = "ИЗИГРАНИ БЕЗПЛАТНИ ЗАВЪРТАНИЯ";
    this.dvj = "СПЕЧЕЛЕНО БЕЗПЛАТНО ЗАВЪРТАНЕ";
    this.pok = "ПОЗДРАВЛЕНИЯ!";
    this.xkm = "Поздравления, получихте";
    this.cge = "Имате останали";
    this.hpf = "безплатни завъртания!";
    this.jht = "Затворено за залози!";
    this.mje = "Приключете със залозите!";
    this.guk = "Поставете своите залози!";
    this.itp = "Край на залозите!";
    this.oih = "Успех!";
    this.hae = "ОБЩО БОНУС ИГРИ";
    this.vsx = "СКАТЕР";
    this.vrs = "SCATTERED:";
    this.ayh = "СИМВОЛИ";
    this.pjl = "СИМВОЛ";
    this.xrz = "НАЧАЛНА БОНУС ПЕЧАЛБА:";
    this.gmd = "Печалбите се изплащат само от ляво на дясно!";
    this.jiw = "Вие спечелихте допълнителни Бонус игри!";
    this.wji = "Бонус игрите се играят със същия залог и брой линии, както основната игра.";
    this.vwm = "НАЧИНИ";
    this.zum = "НАЧИН";
    this.fwl = "Печелите допълнителни 15 БОНУС ЗАВЪРТАНИЯ!";
    this.cuq = "Бонус играта продължава до изчерпване на бонус игрите. По време на бонус игра може да се спечелят допълнителни игри.";
    this.ldl = "ПОМОЩ ЗА БОНУС";
    this.eyv = "ПОМОЩ СИМВОЛ";
    this.dlv = "ПОМОЩ ПЕЧЕЛИВША ЛИНИЯ";
    this.emo = "ПОМОЩ ЗА ПЕЧАЛБИ";
    this.ova = "Печалби на линия: От всяка активна линия се изплаща само най-голямата печалба. Печалбата от линия се умножава по залога на линия. Печалбите от линиите се събират.";
    this.rkl = "Scatter печалби: Scatter печалбите се умножават по общия залог. Печалбите от символите Scatter се добавят към печалбите от линиите.";
    this.tdf = "Бонус Множител";
    this.zto = "По-добър успех-следващият път!";
    this.sry = "15 БОНУС ЗАВЪРТАНИЯ се печелят с 3, 4 или 5 символа ЗВЕЗДА на която и да е позиция! Всичките печалби от Бонус играта се умножават по 3."
}
lfm.prototype = new lyc;

function noo() {
    this.yzu = "ხაზები";
    this.oat = "ხაზი";
    this.nza = "ფსონი / ხაზი";
    this.vwm = "გზა";
    this.zum = "გზა";
    this.loz = "დარჩენილი BONUS თამაშები";
    this.hae = "BONUS თამაშების რაოდენობა ჯამში";
    this.unh = "უკვე ნათამაშები BONUS თამაშები";
    this.pgh = "დარჩენილი BONUS თამაშები";
    this.hns = "გილოცავთ თქვენ მოიგეთ!";
    this.dcr = "BONUS მოგება";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "სიმბოლოები";
    this.pjl = "სიმბოლო";
    this.jiw = "თქვენ მოიგეთ დამატებითი BONUS თამაშები!";
    this.gmd = "მოგების ანაზღაურება ხდება მხოლოდ მარცხნიდან მარჯვნივ!";
    this.xrz = "ბონუს ჩანაწერის მოგება:";
    this.xcb = "BONUS თამაშები";
    this.wji = "BONUS თამაშების თამაში ხდება იგივე ფსონზე და ხაზების რაოდენობაზე, როგორც თამაშის დაწყების დროს.";
    this.ova = "ხაზის მოგება: თითოეულ ნათამაშებ ხაზზე, მოხდება მხოლოდ უმაღლესი ხაზის მოგების ანაზღაურება. ხაზის მოგება შედგება მრავალჯერადი ხაზის ფსონისაგან. სხვადასხვა ხაზიდან მიღებული მოგება ჯამდება ერთ მოგებად.";
    this.rkl = "Scatter მოგება: Scatter მოგება შეადგენს მთლიან ფსონს რამოდენიმეჯერ. მოგება Scatter სიმბოლოებიდან ემატება ხაზის მოგებას.";
    this.ldl = "ბონუს დახმარება";
    this.eyv = "სიმბოლოს დახმარება";
    this.dlv = "მოგების ხაზის დახმარება";
    this.emo = "მოგების გზაზე დახმარება";
    this.fwl = "თქვენ მოიგეთ დამატებითი 15 BONUS თამაშები!";
    this.cuq = "ითამაშეთ ბონუსი სანამ BONUS თამაში არ გაგითავდებათ. დამატებითი BONUS თამაშის მოგება შეიძლება ბონუსის დროს.";
    this.zth = "გარისკვის რიცხვი";
    this.upy = "წითელი/შავი ითამაშე და მოიგე";
    this.ctj = "ფერი ითამაშე და მოიგე";
    this.sry = "15 BONUS თამაშის მოგება ხდება 3, 4 ან 5 ვარსკვლავის სიმბოლოთი ნებისმიერ პოზიციაზე! ყველა BONUSSPIN მოგება მრავლდება 3-ზე.";
    this.zto = "გისურვებთ მომავალში უკეთეს იღბალს!";
    this.mje = "დაასრულე ფსონის დადება!";
    this.guk = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.itp = "ფსონები აღარ მიიღება!";
    this.oih = "გისურვებთ წარმატებას!";
    this.vgd = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.yta = "ფსონები მიღებულ იქნა!";
    this.scy = "ფსონები არ იქნა მიღებული!";
    this.odc = "ბონუსის დასასრული";
    this.mbg = "-მდე მოგება";
    this.jet = "მოგების ჩანაწერი";
    this.jht = "თამაში მიმდინარეობს, გთხოვთ დაელოდოთ!";
    this.tdf = "ბონუს მულტიპლიკატორი";
    this.kez = "უფასო დატრიალება!";
    this.pyr = "ნათამაშები უფასო დატრიალებები";
    this.dvj = "უფასო დატრიალების მოგება";
    this.pok = "გილოცავთ!";
    this.xkm = "გილოცავთ, თქვენ მიიღეთ";
    this.cge = "თქვენ დაგრჩათ";
    this.hpf = "უფასო დატრიალება!"
}
noo.prototype = new fif;

function nfl() {
    this.yzu = "VONALAK";
    this.oat = "VONAL";
    this.nza = "TÉT / VONAL";
    this.vwm = "IRÁNY";
    this.zum = "IRÁNY";
    this.loz = "MEGMARADT SZABAD JÁTÉKOK";
    this.hae = "ÖSSZES SZABAD JÁTÉK";
    this.unh = "LEJÁTSZOTT SZABAD JÁTÉKOK";
    this.pgh = "MEGMARADT SZABAD JÁTÉKOK";
    this.hns = "GRATULÁLUNK, ÖN NYERT!";
    this.dcr = "BÓNUSZ NYEREMÉNY";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SZIMBÓLUMOK";
    this.pjl = "SZIMBÓLUM";
    this.jiw = "További SZABADJÁTÉKOKAT nyert!";
    this.gmd = "A Nyeremények balról jobbra fizetnek!";
    this.xrz = "BÓNUSZBA LÉPŐ NYEREMÉNY:";
    this.xcb = "SZABAD JÁTÉKOK";
    this.wji = "Az alapjátéknál beállított tét és nyerővonal számmal játszódik le a SZABAD JÁTÉK is.";
    this.ova = "Vonal Nyeremények: Csak a legnagyobb nyeremény fizet a megjátszott vonalakon. A vonal nyeremények a vonalankénti tét szorzatai. A különböző vonalankénti nyeremények összeadódnak.";
    this.rkl = "Scatter Nyeremények: A Scatter nyeremények az összes tét szorzatai. A Scatter szimbólummal elért nyeremények a vonal nyereményekhez adódnak.";
    this.ldl = "BÓNUSZ SÚGÓ";
    this.eyv = "SZIMBÓLUM SÚGÓ";
    this.dlv = "NYERŐVONAL SÚGÓ";
    this.emo = "NYEREMÉNYÚT SEGÉDLET";
    this.fwl = "További 15 SZABADJÁTÉKOT nyert!";
    this.cuq = "Játssza a szabad játék bónuszt ameddig van szabad pörgetése. Ez idő alatt újabb szabad játékokat nyerhet.";
    this.zth = "FELTETT ÖSSZEG";
    this.upy = "PIROS/FEKETE NYEREMÉNY";
    this.ctj = "SZÍN NYEREMÉNY";
    this.sry = "15 SZABAD JÁTÉKOT nyerhet ha 3, 4 vagy 5 CSILLAG szimbólum jelenik meg bármely helyen. Minden SZABAD JÁTÉKBAN elért nyeremény háromszorosan fizet.";
    this.zto = "Több szerencsét máskor!";
    this.mje = "Tétek lezárva!";
    this.guk = "Kérem tegyék meg tétjeiket!";
    this.itp = "A játék elkezdődött, kérem várjon!";
    this.oih = "Sok szerencsét!";
    this.vgd = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.yta = "Tétek elfogadva!";
    this.scy = "Nem lehet tétet rakni!";
    this.jht = "Játék folyamatban, kérem várjon!";
    this.mbg = "A NYEREMÉNY AKÁR";
    this.jet = "JÁTÉK TÖRTÉNET";
    this.odc = "BÓNUSZ VÉGE";
    this.tdf = "Bónusz szorzó";
    this.kez = "szabad spint kap!";
    this.pyr = "JÁTSZOTT SZABAD SPINEK";
    this.dvj = "SZABAD SPIN NYEREMÉNY";
    this.pok = "GRATULÁLUNK!";
    this.xkm = "Gratulálunk, Ön";
    this.cge = "";
    this.hpf = "szabad spinje van még!"
}
nfl.prototype = new tsd;

function rqj() {
    this.yzu = "LINII";
    this.oat = "LINIE";
    this.nza = "MIZĂ / LINIE";
    this.vwm = "MODURI";
    this.zum = "MOD";
    this.loz = "BONUSSPIN RĂMAŞI";
    this.hae = "TOTAL BONUSSPIN";
    this.unh = "BONUSSPIN JUCAŢI";
    this.pgh = "BONUSSPIN RĂMAŞI";
    this.hns = "FELICITĂRI CÂŞTIGAT!";
    this.dcr = "CÂŞTIG BONUS";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SIMBOLURI";
    this.pjl = "SIMBOL";
    this.jiw = "Aţi câştigat BONUSSPIN suplimentari!";
    this.gmd = "Câştigurile sunt evaluate numai de la stânga la dreapta!";
    this.xrz = "CÂŞTIG BONUS START:";
    this.xcb = "BONUSSPIN";
    this.wji = "BONUSSPIN sunt jucate cu aceeaşi miză şi număr de linii ca jocul iniţial.";
    this.ova = "Câştiguri linie: Numai câştigul linie maxim pe linie jucată contează. Câştiguri linie sunt un multiplu al mizei liniei. Câştigurile linie ale diferitelor linii sunt adunate.";
    this.rkl = "Câştiguri Scatter: Câştigurile Scatter sunt un multiplu al mizei totale. Câştigurile din simbolurile Scatter sunt adăugate la câştigurile linie.";
    this.ldl = "AJUTOR BONUS";
    this.eyv = "AJUTOR SIMBOL";
    this.dlv = "AJUTOR LINII DE CÂŞTIG";
    this.emo = "AJUTOR CĂI DE CÂŞTIG";
    this.fwl = "Aţi câştigat 15 BONUSSPIN suplimentari!";
    this.cuq = "Bonusul este terminat când au fost jucaţi toţi BONUSSPIN. BONUSSPIN suplimentari pot fi câştigaţi la bonus.";
    this.zth = "RISC";
    this.upy = "ŞANSA ROŞU/NEGRU";
    this.ctj = "SIMBOLUL ŞANSĂ";
    this.sry = "15 BONUSSPIN sunt câştigaţi prin 3, 4 sau 5 simboluri STEA pe fiecare poziţie! Toţi BONUSSPIN câştiguri x 3.";
    this.zto = "Mai mult noroc data viitoare!";
    this.mje = "Jocul începe imediat!";
    this.guk = "Rugăm mizele dv.!";
    this.itp = "Nu alte mize!";
    this.oih = "Mult noroc!";
    this.vgd = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.yta = "Pariuri acceptate!";
    this.scy = "Pariuri neacceptate!";
    this.jht = "Joc în derulare, vă rugăm așteptați!";
    this.mbg = "CÂŞTIGURI PÂNĂ LA";
    this.jet = "ISTORIC CÂŞTIG";
    this.odc = "BONUS FINAL";
    this.tdf = "Bonus multiplicator";
    this.kez = "rotiri libere!";
    this.pyr = "ROTIRI GRATUTE JUCATE";
    this.dvj = "CÂŞTIG ROTIRI LIBERE";
    this.pok = "FELICITĂRI!";
    this.xkm = "Felicitări, ai primit";
    this.cge = "V-au rămas";
    this.hpf = "rotiri gratuite!l"
}
rqj.prototype = new fze;

function gxo() {
    this.yzu = "LINHAS";
    this.oat = "LINHA";
    this.nza = "APOSTA / LINHA";
    this.vwm = "FORMAS";
    this.zum = "FORMA";
    this.loz = "BONUSSPINS RESTANTES";
    this.hae = "TOTAL DE BONUSSPINS";
    this.unh = "BONUSSPINS JOGADOS";
    this.pgh = "BONUSSPINS RESTANTES";
    this.hns = "PARABÉNS, GANHOU!";
    this.dcr = "PRÉMIO BONUS";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SÍMBOLOS";
    this.pjl = "SÍMBOLO";
    this.jiw = "Ganhou BONUSSPINS adicionais!";
    this.gmd = "Prémios só são pagos da esquerda para a direita!";
    this.xrz = "PRÉMIO ENTRADA BONUS:";
    this.xcb = "BONUSSPINS";
    this.wji = "Os BONUSSPINS são jogados com a mesma aposta e n° de linhas que o jogo inicial.";
    this.ova = "Prémios de linha: Só conta o mais alto prémio de linha de cada linha jogada. Prémios de linha são um múltiplo da aposta de linha. Prémios de linha de diversas linhas são adicionados.";
    this.rkl = "Prémios Scatter: Prémios Scatter são múltiplos da aposta total. Prémios de símbolos Scatter são adicionados aos prémios de linha.";
    this.ldl = "AJUDA BONUS";
    this.eyv = "AJUDA SÍMBOLO";
    this.dlv = "AJUDA DE LINHAS VENCEDORAS";
    this.emo = "AJUDA DE FORMAS DE PRÊMIO";
    this.fwl = "Ganhou 15 BONUSSPINS adicionais!";
    this.cuq = "Jogar Bonus até não restarem mais BONUSSPINS. BONUSSPINS adicionais podem ser ganhos em Bonus.";
    this.zth = "RISCO";
    this.upy = "VERMELHO/PRETO CHANCE DE GANHAR";
    this.ctj = "CHANCE DO NAIPE";
    this.sry = "15 BONUSSPINS são ganhos com 3, 4 ou 5 símbolos de estrelas em qualquer posição! Todos ganhos BONUSSPIN são multiplicados por 3.";
    this.mje = "O jogo começa em breve!";
    this.guk = "Suas apostas por favor!";
    this.itp = "Nenhuma aposta mais!";
    this.oih = "Boa sorte!";
    this.vgd = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.yta = "Apostas aceitas!";
    this.scy = "Apostas não aceitas!";
    this.jht = "Jogo em andamento, aguarde por favor!";
    this.mbg = "GANHOS ATÉ";
    this.jet = "HISTÓRICO DO GANHO";
    this.odc = "FIM BONUS";
    this.tdf = "Multiplicador do bonus";
    this.zto = "Mais sorte da próxima vez!";
    this.kez = "freespins!";
    this.pyr = "FREESPINS JOGADOS";
    this.dvj = "GANHO DE FREESPINS";
    this.pok = "PARABÉNS!";
    this.xkm = "Parabéns, ganhas";
    this.cge = "Ainda lhe sobram";
    this.hpf = "freespins!"
}
gxo.prototype = new xxl;

function pmw() {
    this.yzu = "LIGNES";
    this.oat = "LIGNE";
    this.nza = "MISE / LIGNE";
    this.vwm = "CHEMINS";
    this.zum = "CHEMIN";
    this.loz = "BONUSSPINS LAISSÉ";
    this.hae = "TOTAL BONUSSPINS";
    this.unh = "JEUX GRATUITS JOUES";
    this.pgh = "BONUSSPINS LAISSÉ";
    this.hns = "FELICITATIONS TU AS GAGNE!";
    this.dcr = "BONUS GAIN";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SYMBOLES";
    this.pjl = "SYMBOLE";
    this.jiw = "Vous gagnez BONUSSPINS extra!";
    this.gmd = "Victoires payer seulement de gauche à droite!";
    this.xrz = "BONUS ENTRÉE WIN:";
    this.xcb = "BONUSSPINS";
    this.wji = "Les BONUSSPINS sont joué avec la même mise et nombre des lignes comme le jeu avant.";
    this.ova = "Gains des lignes: Seulement le gain de ligne plus haut par ligne joué compté. Gains des lignes sont un multiple du mise de ligne. Les gains de lignes de lignes differents sont ajouté.";
    this.rkl = "Gains de Scatter: Gains de Scatter sont un multiple du toute mise. Gains de symboles Scatter sont ajouter á le gain des lignes.";
    this.ldl = "BONUS D'AIDE";
    this.eyv = "SYMBOLE D'AIDE";
    this.dlv = "WINLINE AIDE";
    this.fwl = "Vous avez gagné un supplément de 15 BONUSSPINS!";
    this.cuq = "Le Bonus se Termine une fois tous les BONUSSPINS joués. Des BONUSSPINS supplémentaires peuvent être gagnés pendant la Bonus.";
    this.zth = "RISQUE";
    this.upy = "ROUGE/NOIR SIGNIFIE GAIN";
    this.ctj = "GAIN DE SYMBOLES";
    this.sry = "15 BONUSSPINS sont gagnés avec 3, 4 ou 5 étoiles sur toute position! Tous les gains des BONUSSPINS sont multipliés par 3.";
    this.mje = "Le jeu va commencer tout de suite!";
    this.guk = "Faites vos jeux s'il vous plaît!";
    this.itp = "Rien ne va plus!";
    this.oih = "Bonne chance!";
    this.emo = "AIDE VOIES DE GAINS";
    this.zto = "Meilleure chance la prochaine fois!";
    this.vgd = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.yta = "Mises acceptées!";
    this.scy = "Mises refusées!";
    this.jht = "Jeu en cours, merci de patienter!";
    this.mbg = "GAINS JUSQU'À";
    this.jet = "HISTORIQUE DE GAINS";
    this.odc = "FIN DU BONUS";
    this.tdf = "Multiplicateur de bonus";
    this.kez = "Freespins!";
    this.pyr = "FREESPINS JOUÉS";
    this.dvj = "GAIN DE FREESPIN";
    this.pok = "FÉLICITATIONS!";
    this.xkm = "Félicitations, vous recevez";
    this.cge = "Il vous reste encore";
    this.hpf = "Freespins!"
}
pmw.prototype = new ymf;

function het() {
    this.yzu = "LINIJE";
    this.oat = "LINIJI";
    this.nza = "ULOG / LINIJI";
    this.vwm = "NAČINA";
    this.zum = "NAČIN";
    this.loz = "PREOSTALE BESPLATNE IGRE";
    this.hae = "UKUPNO BESPLATNIH IGARA";
    this.unh = "ODIGRANE BESPLATNE IGRE";
    this.pgh = "PREOSTALE BESPLATNE IGRE";
    this.hns = "ČESTITAMO, DOBILI STE!";
    this.dcr = "BONUS DOBITAK";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SIMBOLI";
    this.pjl = "SIMBOL";
    this.jiw = "Dobili ste dodatne BESPLATNE IGRE!";
    this.gmd = "Dobitci se isplaćuju samo sa lijeva na desno!";
    this.xrz = "BONUS POČETNI DOBITAK:";
    this.xcb = "BESPLATNE IGRE";
    this.wji = "BESPLATNE IGRE se igraju sa istim ulogom i brojem linija kao početna igra.";
    this.ova = "Linijski dobitak: Samo najveći linijski dobitak za svaku odigranu liniju se isplaćuje. Linijski dobitak je uvišestručeni linijski ulog. Linijski dobitci sa različitih linija se zbrajaju.";
    this.rkl = "Scatter dobitak: Scatter dobitak je uvišestručeni ukupni ulog. Dobitci od scatter simbola se zbrajaju sa linijskim dobitcima.";
    this.ldl = "POMOĆ ZA BONUS";
    this.eyv = "POMOĆ ZA SIMBOL";
    this.dlv = "POMOĆ ZA DOBITNE LINIJE";
    this.fwl = "Dobili ste dodatnih 15 BESPLATNIH IGARA!";
    this.cuq = "Bonus se završava kada su odigrane sve BESPLATNE IGRE. Dodatne BESPLATNE IGRE se mogu dobiti tijekom Bonusa.";
    this.zth = "ULAŽETE";
    this.upy = "POGODI BOJU ZA DOBITAK OD";
    this.ctj = "POGODI SIMBOL ZA DOBITAK OD";
    this.sry = "3, 4 ili 5 simbola ZVIJEZDA na bilo kojoj poziciji osvajaju 15 BESPLATNIH IGARA! Svi dobici tijekom BESPLATNIH IGARA množe se sa 3.";
    this.mje = "Završte ulaganje!";
    this.guk = "Molimo Vaše uloge!";
    this.itp = "Nema daljnjih uloga!";
    this.oih = "Puno sreće!";
    this.emo = "POMOĆ ZA POBJEDU";
    this.zto = "Više sreće sljedeći put!";
    this.vgd = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.yta = "Ulozi su prihvaćeni!";
    this.scy = "Ulozi nisu prihvaćeni!";
    this.jht = "Igra je u tijeku, sačekajte!";
    this.mbg = "OSVOJI DO";
    this.jet = "POVIJEST DOBITAKA";
    this.odc = "KRAJ BESPLATNE IGRE";
    this.tdf = "Bonus multiplikator";
    this.kez = "slobodnih igara!";
    this.pyr = "ODIGRANIH SLOBODNIH IGARA";
    this.dvj = "DOBITAK U SLOBODNOJ IGRI";
    this.pok = "ČESTITAMO!";
    this.xkm = "Čestitamo, osvojili ste";
    this.cge = "Preostalo ti je još";
    this.hpf = "slobodnih igara!"
}
het.prototype = new wow;

function ysw() {
    this.yzu = "LINEE";
    this.oat = "LINEA";
    this.nza = "PUNTATA / LINEA";
    this.vwm = "VIE";
    this.zum = "VIA";
    this.loz = "BONUSSPIN RIMASTI";
    this.hae = "TOTALE BONUSSPIN";
    this.unh = "BONUSSPIN GIOCATI";
    this.pgh = "BONUSSPIN RIMASTI";
    this.hns = "CONGRATULAZIONI, HAI VINTO!";
    this.dcr = "VINCITA BONUS";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SIMBOLI";
    this.pjl = "SIMBOLO";
    this.jiw = "Hai vinto altri BONUSSPIN!";
    this.gmd = "Le vincite sono valutate dalla sinistra alla destra soltanto!";
    this.xrz = "VINCITA START BONUS:";
    this.xcb = "BONUSSPIN";
    this.wji = "Le giocate BONUS si giocano con la stessa puntata e con lo stesso numero di linee della partita iniziale.";
    this.ova = "Vincite di linea: Soltanto la vincita di linea più alta di ogni linea conta. Le vincite di linea sono la moltiplicazione della puntata per la linea. Le vincite di linea delle diverse linee vengono sommate.";
    this.rkl = "Vincite Scatter: Le vincite Scatter sono la moltiplicazione dell'intera puntata del gioco. Le vincite dai simboli Scatter vengono sommate alle vincite di linea.";
    this.ldl = "AIUTO BONUS";
    this.eyv = "AIUTO SYMBOLO";
    this.dlv = "AIUTO WINLINE";
    this.fwl = "Hai vinto altri 15 BONUSSPIN!";
    this.cuq = "Il bonus termina quando tutti i BONUSSPIN sono stati giocati. Si possono vincere altri BONUSSPIN nella giocata Bonus.";
    this.zth = "IMPORTO GAMBLE";
    this.upy = "ROSSO/NERO GAMBLE PER VINCERE";
    this.ctj = "CHANCE SUIT GAMBLE";
    this.sry = "15 BONUSSPIN si vincono con 3, 4 o 5 simboli STELLA su ogni posizione! Tutte le vincite BONUSSPIN si moltiplicano x 3.";
    this.mje = "Completare le puntate prego!";
    this.guk = "Prego puntare!";
    this.itp = "Fine puntate!";
    this.oih = "Buona Fortuna!";
    this.emo = "AIUTO MODI DI VINCERE";
    this.zto = "La prossima volta sarai più fortunato!";
    this.vgd = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.yta = "Puntate accettate!";
    this.scy = "Puntate non accettate!";
    this.jht = "Partita in corso, prego attendere!";
    this.mbg = "VINCITE FINO A";
    this.jet = "CRONACA DELLE VINCITE";
    this.odc = "FINE BONUS";
    this.tdf = "Moltiplicatore bonus";
    this.kez = "Freespins!";
    this.pyr = "FREESPIN GIOCATI";
    this.dvj = "VINCITA FREESPIN";
    this.pok = "CONGRATULAZIONI!";
    this.xkm = "Congratulazioni, ricevi";
    this.cge = "Sono rimasti";
    this.hpf = "freespin!"
}
ysw.prototype = new qom;

function krg() {
    this.yzu = "LINJER";
    this.oat = "LINJE";
    this.nza = "INSATS / LINJE";
    this.vwm = "SÄTT";
    this.zum = "SÄTT";
    this.loz = "ÅTERSTÅENDE BONUSSPINS";
    this.hae = "BONUSSPINS TOTALT";
    this.unh = "SPELADE BONUSSPINS";
    this.pgh = "ÅTERSTÅENDE BONUSSPINS";
    this.hns = "GRATTIS, DU HAR VUNNIT!";
    this.dcr = "BONUSVINST";
    this.vsx = "SCATTER";
    this.vrs = "SCATTERED:";
    this.ayh = "SYMBOLER";
    this.pjl = "SYMBOL";
    this.jiw = "Du har vunnit extra BONUSSPINS!";
    this.gmd = "Vinster betalas endast ut från vänster till höger!";
    this.xrz = "BONUSSTARTSVINST:";
    this.xcb = "BONUSSPINS";
    this.wji = "BONUSSPINS spelas med samma insats och samma antal linjer som det spel som aktiverade bonusomgången.";
    this.ova = "Linjevinster: Endast den högsta linjevinster per spelad linje räknas. Linjevinster är en mångdubbling av linjeinsatsen. Linjevinsterna från olika linjer adderas.";
    this.rkl = "Scattervinster: Scattervinster är en mångdubbling av den totala insatsen. Vinster från scattersymboler adderas till linjevinsterna.";
    this.ldl = "HJÄLP OM BONUS";
    this.eyv = "HJÄLP OM SYMBOLER";
    this.dlv = "HJÄLP OM VINSTRADER";
    this.emo = "VINSTSÄTTSHJÄLP";
    this.fwl = "Du har vunnit ytterligare 15 BONUSSPINS!";
    this.cuq = "Spela ut bonusomgången tills inga BONUSSPINS återstår. Nya BONUSSPINS kan vinnas under bonusomgången.";
    this.zth = "SPELSUMMA";
    this.upy = "SPEL OM RÖTT/SVART";
    this.ctj = "SPEL OM FÄRG";
    this.sry = "15 BONUSSPINS betalas ut för 3, 4 eller 5 SCATTER-symboler på varje position! Alla vinster från BONUSSPIN multipliceras med 3.";
    this.mje = "Spelet har börjat!";
    this.guk = "Placera dina insatser, tack!";
    this.itp = "Inga fler insatser!";
    this.oih = "Lycka till!";
    this.zto = "Bättre lycka nästa gång!";
    this.vgd = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.yta = "Insatserna accepterade!";
    this.scy = "Insatserna ej accepterade!";
    this.jht = "Spelet pågår, var vänlig vänta!";
    this.mbg = "VINN UPP TILL";
    this.jet = "VINSTHISTORIK";
    this.odc = "BONUSEN SLUT";
    this.tdf = "Bonusmultiplikator";
    this.kez = "gratisspinn!";
    this.pyr = "GRATISSPINN SPELADE";
    this.dvj = "GRATISSPINNSVINST";
    this.pok = "GRATTIS!";
    this.xkm = "Grattis, du har fått";
    this.cge = "Du har";
    this.hpf = "gratisspinn kvar!"
}
krg.prototype = new luf;

function ych() {
    this.mkc = "Wins pay from left to right. Star symbols pay in any position."
}
ych.prototype = new pwn;

function rns() {
    this.mkc = "Выигрышем считаются все, рядом стоящие символы, на выигрышной линии. Засчитывается самый высокий выигрыш."
}
rns.prototype = new ouw;

function ryx() {
    this.mkc = "Los premios se evaluan de izquierda a derecha. Los simbolos estrella ganan en todas las posiciones."
}
ryx.prototype = new owe;

function fsz() {
    this.mkc = "Gewinne werden von links nach rechts gewertet. Sternsymbole gewinnen auf jeder Position."
}
fsz.prototype = new ror;

function nsl() {
    this.mkc = "Kazançlar soldan sağa doğru değerlendirilir! Yıldız sembolleri her pozisyonda kazanır."
}
nsl.prototype = new drb;

function pyn() {
    this.mkc = "Výhry se zapocítávají zleva doprava. Symbol hvezdy vyhrává na každé pozici."
}
pyn.prototype = new qde;

function vha() {
    this.mkc = "Võite arvestatakse vasakult paremale. Star sümbol toob võidu igas positsioonis."
}
vha.prototype = new xwl;

function nhv() {
    this.mkc = "Τα κέρδη μετράνε από αριστερά προς δεξιά. Το αστέρι κερδίζει σε οποιαδήποτε θέση."
}
nhv.prototype = new oab;

function nlo() {
    this.mkc = "Печалбите се изплащат от ляво на дясно. Символът Звезда се изплаща на всяка позиция."
}
nlo.prototype = new lfm;

function qrh() {
    this.mkc = "მოგების ანაზღაურება ხდება მარცხნიდან მარჯვნივ. ვარსკვლავის სიმბოლოები იგებს ნებისმიერ პოზიციაზე."
}
qrh.prototype = new noo;

function zug() {
    this.mkc = "A nyeremények balról jobbra fizetnek. A Csillag szimbólum minden helyen nyerő."
}
zug.prototype = new nfl;

function dke() {
    this.mkc = "Câştigurile numărate de la stânga la dreapta. Simbolul STAR câştigă in orice pozitie."
}
dke.prototype = new rqj;

function ijv() {
    this.mkc = "Os Prêmios ganham da esquerda à direita. O símbolo de estrela ganha em qualquer posição."
}
ijv.prototype = new gxo;

function vku() {
    this.mkc = "Les gains sont pris en compte de gauche à droite. Les symboles étoiles gagnent dans toute position."
}
vku.prototype = new pmw;

function fat() {
    this.mkc = "Dobitci se zbrajaju sa lijeva na desno. Simbol ZVIJEZDA dobiva na bilo kojoj poziciji."
}
fat.prototype = new het;

function amu() {
    this.mkc = "Le combinazioni vincenti sono valide da sinistra a destra. I simboli Stella vincono su ogni posizione."
}
amu.prototype = new ysw;

function qib() {
    this.mkc = "Vinsterna betalas ut från vänster till höger. Stjärnsymbolen ger vinst i vilken position som helst."
}
qib.prototype = new krg;

function nhm() {
    this.isi = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.mij = {
        backgroundColor: "rgb(0,0,0)",
        vwr: "rgba(0,0,0,0.3)"
    };
    this.bmy = {
        mij: {
            font: "arial",
            pev: "bold",
            backgroundColor: "black",
            ujo: "rgb(0,100,10)",
            nva: "rgb(80,255,100)",
            tip: "rgb(120,120,120)",
            jcg: "red",
            rce: "white",
            ydb: "white",
            cbe: null
        },
        wwy: {
            font: "arial",
            pev: "bold",
            backgroundColor: "black",
            ujo: "rgb(0,100,10)",
            nva: "rgb(80,255,100)",
            tip: "rgb(120,120,120)",
            jcg: "red",
            rce: "white",
            ydb: "rgb(230,190,10)",
            cbe: null
        }
    };
    this.bea = {
        font: "arial",
        pev: "bold",
        backgroundColor: "rgb(0,0,0)",
        pbq: null,
        ydb: "rgb(255,255,255)",
        ldt: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.ctg = {
        font: "arial",
        pev: "bold",
        backgroundColor: "black",
        sru: "rgb(50,50,50)",
        uui: "rgb(255,255,255)",
        ydb: "white",
        xet: 0.8,
        wze: {
            zns: {
                font: "sanf-serif",
                pev: "",
                textAlign: "center",
                inp: "round",
                backgroundColor: "black",
                ydb: "white",
                borderColor: null,
                ldt: null,
                fcb: 1
            }
        }
    };
    this.xfn = {
        font: "arial",
        pev: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        xwk: "rgba(255,255,255,0.2)",
        ydb: "rgb(255,255,255)",
        nkx: "rgba(0,0,0,0.3)",
        display: {
            dax: "arial",
            yes: "arial",
            pev: "bold",
            ydb: "rgb(255,255,255)",
            noj: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        zns: {
            font: "arial",
            pev: "bold",
            ydb: "rgb(0,0,0)",
            sik: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            pbq: "rgba(255,255,255,1)",
            kud: "rgba(255,255,255,0.8)",
            qjy: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            inp: "rect",
            kcc: -1
        }
    };
    this.bml = {
        font: "arial",
        pev: "bold",
        cqm: "rgb(0,0,200)",
        vbd: "rgb(255,255,255)",
        lnd: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        osq: "rgb(180,220,255)",
        pvd: "rgb(10,20,25)",
        qtl: "rgb(130,220,255)",
        wrn: "rgb(130,190,255)",
        ydb: "rgb(255,255,255)",
        thu: "rgb(130,190,255)",
        ggq: "rgb(100,160,255)",
        jut: "rgb(255,255,255)",
        zns: {
            inp: "rect",
            font: "arial",
            pev: "bold",
            ydb: "rgb(255,255,255)",
            tbd: null,
            backgroundColor: "rgb(90,160,255)",
            ukh: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            ldt: "rgb(40,80,140)"
        },
        hre: {
            inp: "round",
            font: "arial",
            pev: "bold",
            ydb: "rgb(255,255,255)",
            tbd: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            ukh: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            ldt: "rgb(40,80,140)"
        }
    };
    this.wmv = {};
    this.gqp = {
        ekk: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.ths = {
        type: "left",
        font: "arial",
        pev: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        pbq: null,
        borderColor: "rgb(0,0,0)",
        ldt: "rgb(180,180,180)",
        osq: "rgba(0,0,0,0.6)",
        iot: null,
        noj: "rgb(255,200,0)",
        ydb: "white",
        kmf: {
            font: "arial",
            pev: "bold",
            backgroundColor: "rgb(100,100,100)",
            pbq: "rgb(100,100,100)",
            kud: null,
            qjy: null,
            borderColor: "rgb(100,100,100)",
            ydb: "rgb(255,255,255)",
            sik: "rgb(255,200,0)",
            inp: "triangle",
            kcc: 1
        },
        fdm: {
            font: "arial",
            pev: "bold",
            backgroundColor: "rgb(100,100,100)",
            pbq: "rgb(100,100,100)",
            kud: null,
            qjy: null,
            borderColor: "rgb(100,100,100)",
            ydb: "rgb(255,255,255)",
            sik: "rgb(255,200,0)",
            inp: "triangle",
            kcc: 0
        },
        cpe: {
            font: "arial",
            pev: "bold",
            backgroundColor: "rgb(100,100,100)",
            pbq: "rgb(15,15,15)",
            kud: "rgb(100,100,100)",
            qjy: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            ydb: "rgb(255,255,255)",
            sik: "rgb(255,200,0)",
            inp: "rect",
            kcc: -1
        },
        display: {
            yes: "sans-serif",
            dax: "sans-serif",
            pev: "bold",
            noj: null,
            ydb: "yellow",
            borderColor: "rgb(100,100,100)",
            ldt: null,
            backgroundColor: "black"
        },
        tav: {
            font: "arial",
            pev: "bold",
            backgroundColor: null,
            pbq: null,
            ydb: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.raz = {
        font: "arial",
        pev: "bold",
        backgroundColor: "rgb(180,180,180)",
        pbq: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        ldt: "rgb(30,30,30)",
        ydb: "white",
        wef: {
            font: "arial",
            pev: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            pbq: null,
            kud: "rgba(100,100,100,0.5)",
            qjy: null,
            borderColor: null,
            ydb: "white",
            inp: "rect",
            kcc: -1
        },
        kmf: {
            font: "arial",
            pev: "bold",
            backgroundColor: "rgb(255,255,255)",
            pbq: "rgb(255,255,255)",
            kud: null,
            qjy: null,
            borderColor: "rgb(255,255,255)",
            ydb: "rgb(0,0,0)",
            sik: "rgb(0,0,0)",
            inp: "triangle",
            kcc: 1
        },
        fdm: {
            font: "arial",
            pev: "bold",
            backgroundColor: "rgb(255,255,255)",
            pbq: "rgb(255,255,255)",
            kud: null,
            qjy: null,
            borderColor: "rgb(255,255,255)",
            ydb: "rgb(0,0,0)",
            sik: "rgb(0,0,0)",
            inp: "triangle",
            kcc: 0
        },
        zbo: {
            inp: "rect",
            font: "arial",
            pev: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            ydb: "white",
            fcb: 1,
            borderColor: "rgb(255,255,255)",
            ldt: "rgb(220,220,220)"
        },
        display: {
            yes: "sans-serif",
            dax: "sans-serif",
            pev: "bold",
            noj: null,
            ydb: "white",
            borderColor: "white",
            ldt: null,
            backgroundColor: "rgb(0,0,0)"
        },
        tav: {
            font: "arial",
            pev: "bold",
            backgroundColor: null,
            pbq: null,
            ydb: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.tyt = {
        sgd: [{
            yes: "sans-serif",
            tpw: "verdana",
            pev: "bold",
            noj: "rgb(255,255,100)",
            xjd: "rgb(210,190,40)",
            tbd: "rgb(252,247,0)",
            sgi: "rgb(220,200,0)",
            sru: "rgb(0,0,0)"
        }, {
            yes: "sans-serif",
            tpw: "verdana",
            pev: "bold",
            noj: "rgb(250,250,250)",
            xjd: "rgb(210,210,210)",
            tbd: "rgb(255,255,255)",
            sgi: "rgb(220,220,220)",
            sru: "rgb(0,0,0)"
        }, {
            yes: "sans-serif",
            tpw: "verdana",
            pev: "bold",
            noj: "rgb(230,230,230)",
            xjd: "rgb(190,190,190)",
            tbd: "rgb(255,255,255)",
            sgi: "rgb(220,220,220)",
            sru: "rgb(0,0,0)"
        }, {
            yes: "sans-serif",
            tpw: "verdana",
            pev: "bold",
            noj: "rgb(230,230,230)",
            xjd: "rgb(190,190,190)",
            tbd: "rgb(255,255,255)",
            sgi: "rgb(220,220,220)",
            sru: "rgb(0,0,0)"
        }],
        udh: {
            yes: "sans-serif",
            tpw: "sans-serif",
            pev: "bold",
            noj: "rgb(236,225,207)",
            xjd: "rgb(214,170,102)",
            tbd: "rgb(245,220,148)",
            sgi: "rgb(190,137,40)"
        },
        koo: {}
    };
    this.gse = {
        vfg: "rgb(240,240,240)",
        rnn: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        nkx: "rgba(0,80,150,0.6)",
        display: {
            dax: "arial",
            yes: "arial",
            pev: "bold",
            ydb: "rgb(0,80,151)",
            noj: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function sib() {
    this.mij.rya = false;
    this.mij.xhk = false;
    this.znp = {
        display: {
            dax: "sans-serif",
            yes: "sans-serif",
            pev: "bold",
            backgroundColor: "black",
            ydb: "rgb(255,255,50)",
            noj: "rgb(255,255,50)",
            borderColor: "rgb(230,230,230)",
            ldt: "rgb(160,160,160)"
        },
        ggk: {
            dax: "sans-serif",
            yes: "sans-serif",
            pev: "bold",
            backgroundColor: "rgba(0,0,0,0.8)",
            ydb: "rgb(255,255,50)",
            noj: "rgb(255,255,50)",
            borderColor: null,
            ldt: null
        },
        zvm: {
            dax: "arial",
            yes: "arial",
            pev: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            ydb: "white",
            noj: "white",
            borderColor: null,
            ldt: null
        },
        qaw: {
            font: "arial",
            pev: "bold",
            backgroundColor: "rgb(230,230,230)",
            pbq: null,
            kud: null,
            qjy: null,
            borderColor: "rgb(230,230,230)",
            ydb: "rgb(0,0,0)",
            sik: "rgb(0,0,0)",
            inp: "rrect",
            kcc: 3
        },
        bar: {
            font: "sans-serif",
            pev: "bold",
            ydb: "rgb(255,255,50)",
            backgroundColor: "black",
            borderColor: null,
            ldt: null
        },
        wze: {
            backgroundColor: null,
            pbq: null,
            osq: "rgb(0,0,0)",
            pvd: "rgb(0,0,0)",
            ksx: null,
            lsh: 0.5,
            zns: {
                inp: "rect",
                font: "verdana",
                pev: "bold",
                backgroundColor: "rgb(0,0,0)",
                ukh: "rgb(150,150,150)",
                ydb: "rgb(255,255,255)",
                tbd: "rgb(255,255,0)",
                borderColor: "rgb(150,150,150)",
                ldt: "rgb(0,0,0)"
            },
            iwg: {
                inp: "round",
                font: "verdana",
                pev: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                ukh: "rgba(150,150,150,0.5)",
                ydb: "rgb(255,255,255)",
                tbd: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                ldt: "rgb(100,100,100)"
            },
            tmo: {
                inp: "round",
                font: "verdana",
                pev: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                ukh: "rgba(150,150,150,0.5)",
                ydb: "rgb(255,255,255)",
                tbd: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                ldt: "rgb(100,100,100)"
            },
            hhv: {
                inp: "rect",
                font: "verdana",
                pev: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                ukh: "rgba(150,150,150,0.5)",
                ydb: "rgba(255,255,255,0.8)",
                tbd: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                ldt: "rgb(100,100,100)"
            },
            ruq: {
                inp: "rect",
                font: "verdana",
                pev: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                ukh: "rgba(150,150,150,0.5)",
                ydb: "rgba(255,255,255,0.8)",
                tbd: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                ldt: "rgb(100,100,100)"
            },
            fvi: {
                font: "verdana",
                pev: "bold",
                backgroundColor: "rgb(75, 5, 5)",
                borderColor: null,
                ydb: "rgb(255, 255, 50)"
            },
            win: {
                font: "helvetica",
                pev: "bold",
                backgroundColor: null,
                borderColor: null,
                ydb: "rgb(240, 231, 203)"
            }
        }
    };
    this.fgi = {
        backgroundColor: null,
        osq: "rgb(0,0,0)",
        pvd: "rgb(0,0,0)",
        display: {
            dax: "sans-serif",
            yes: "sans-serif",
            pev: "bold",
            backgroundColor: "black",
            ydb: "yellow",
            noj: "yellow",
            borderColor: "rgb(230,230,230)",
            ldt: "rgb(160,160,160)"
        },
        zvm: {
            dax: "arial",
            yes: "arial",
            pev: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            ydb: "white",
            noj: "white",
            borderColor: null,
            ldt: null
        },
        rde: {
            dax: "verdana",
            yes: "verdana",
            pev: "bold",
            noj: "white",
            ydb: "yellow"
        },
        zns: {
            inp: "rect",
            font: "verdana",
            pev: "bold",
            backgroundColor: "rgb(0,0,0)",
            ukh: "rgb(150,150,150)",
            ydb: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            ldt: "rgb(0,0,0)"
        },
        iwg: {
            inp: "round",
            font: "verdana",
            pev: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            ukh: "rgba(150,150,150,0.5)",
            ydb: "rgb(255,255,255)",
            tbd: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            ldt: "rgb(100,100,100)"
        },
        tmo: {
            inp: "round",
            font: "verdana",
            pev: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            ukh: "rgba(150,150,150,0.5)",
            ydb: "rgb(255,255,255)",
            tbd: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            ldt: "rgb(100,100,100)"
        },
        fvi: {
            font: "verdana",
            pev: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            ydb: "rgb(255, 255, 0)"
        }
    };
    this.oxo = {
        backgroundColor: null,
        osq: "rgb(0,0,0)",
        pvd: "rgb(0,0,0)",
        zns: {
            inp: "rect",
            font: "verdana",
            pev: "bold",
            backgroundColor: "rgb(0,0,0)",
            ukh: "rgb(150,150,150)",
            ydb: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            ldt: "rgb(0,0,0)"
        },
        iwg: {
            inp: "round",
            font: "verdana",
            pev: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            ukh: "rgba(150,150,150,0.5)",
            ydb: "rgb(255,255,255)",
            tbd: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            ldt: "rgb(100,100,100)"
        },
        tmo: {
            inp: "round",
            font: "verdana",
            pev: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            ukh: "rgba(150,150,150,0.5)",
            ydb: "rgb(255,255,255)",
            tbd: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            ldt: "rgb(100,100,100)"
        }
    };
    this.udj = {
        xet: 0,
        ksx: "rgba(0,0,0,0)",
        dqj: "rgba(0,0,0,0.5)"
    };
    this.evi = {
        wzj: "rgb(255,0,0)",
        uui: "rgb(255,255,0)",
        ffg: "white",
        yoh: null,
        rcm: 0,
        nkl: 0.05,
        zdl: [{
            hif: "rgb(180,180,30)",
            mov: "rgb(255,220,0)",
            fli: "rgb(180,180,30)",
            whb: "rgb(255,255,0)"
        }, {
            hif: "rgb(210,110,0)",
            mov: "rgb(255,168,0)",
            fli: "rgb(210,110,0)",
            whb: "rgb(255,210,50)"
        }, {
            hif: "rgb(0,50,180)",
            mov: "rgb(0,68,220)",
            fli: "rgb(0,50,180)",
            whb: "rgb(0,100,255)"
        }, {
            hif: "rgb(0,160,64)",
            mov: "rgb(0,200,80)",
            fli: "rgb(0,160,64)",
            whb: "rgb(0,255,70)"
        }, {
            hif: "rgb(140,30,140)",
            mov: "rgb(200,0,200)",
            fli: "rgb(140,30,140)",
            whb: "rgb(255,30,255)"
        }, {
            hif: "rgb(180,180,30)",
            mov: "rgb(255,220,0)",
            fli: "rgb(180,180,30)",
            whb: "rgb(255,255,0)"
        }, {
            hif: "rgba(200,200,50,0.7)",
            mov: "rgba(255,255,150,0.7)",
            fli: "rgba(200,200,50,0.7)",
            whb: "rgba(255,255,150,0.7)"
        }]
    };
    this.svw = {
        font: "sans-serif",
        pev: "bold",
        vgb: "red",
        oom: "orange",
        sru: "white"
    };
    this.dbn = {
        font: "sans-serif",
        pev: "bold",
        vgb: "red",
        oom: "orange",
        sru: "white"
    };
    this.gwh = {
        font: "sans-serif",
        pev: "bold",
        ydb: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        wub: "rgb(0,0,0)",
        wvq: "rgb(255,0,0)",
        kgd: "rgb(255,255,0)",
        spd: "rgb(80,80,80)",
        crz: "rgb(15,15,15)",
        qmv: "rgb(0,0,0)",
        ykj: "rgb(180,180,180)",
        pfb: "rgb(0,0,0)",
        enx: 0.7
    }
}
sib.prototype = new nhm;

function gzm() {
    this.mij.xhk = true;
    this.znp.bar.backgroundColor = "rgb(50, 0, 0)";
    this.znp.bar.borderColor = "rgb(40,0,0)";
    this.znp.wze.fvi.backgroundColor = "rgb(50, 0, 0)";
    this.znp.wze.fvi.borderColor = "rgb(40,0,0)";
    this.znp.wze.zns.backgroundColor = "rgb(140,0,17)";
    this.znp.wze.zns.ukh = "rgb(200,0,20)";
    this.znp.wze.zns.borderColor = "rgb(160,0,30)";
    this.znp.wze.zns.ldt = "rgb(50,0,0)";
    this.znp.wze.hhv.backgroundColor = "rgba(0,0,0,0.5)";
    this.znp.wze.hhv.ukh = "rgba(255,20,30,0.8)";
    this.znp.wze.hhv.borderColor = "rgb(255,20,30)";
    this.znp.wze.hhv.ldt = "rgb(80,5,10)";
    this.znp.wze.ruq.backgroundColor = "rgba(0,0,0,0.5)";
    this.znp.wze.ruq.ukh = "rgba(255,20,30,0.8)";
    this.znp.wze.ruq.borderColor = "rgb(255,20,30)";
    this.znp.wze.ruq.ldt = "rgb(80,5,10)";
    this.znp.wze.iwg.backgroundColor = "rgba(0,0,0,0.5)";
    this.znp.wze.iwg.ukh = "rgba(255,20,30,0.8)";
    this.znp.wze.iwg.borderColor = "rgb(255,20,30)";
    this.znp.wze.iwg.ldt = "rgb(80,5,10)";
    this.znp.wze.tmo.backgroundColor = "rgba(0,0,0,0.5)";
    this.znp.wze.tmo.ukh = "rgba(255,20,30,0.8)";
    this.znp.wze.tmo.borderColor = "rgb(255,20,30)";
    this.znp.wze.tmo.ldt = "rgb(80,5,10)";
    this.fgi.fvi.borderColor = "rgb(65,0,0)";
    this.fgi.zns.backgroundColor = "rgb(140,0,17)";
    this.fgi.zns.borderColor = "rgb(160,0,30)";
    this.fgi.zns.ldt = "rgb(50,0,0)";
    this.fgi.iwg.backgroundColor = "rgba(0,0,0,0.5)";
    this.fgi.iwg.borderColor = "rgb(255,20,30)";
    this.fgi.iwg.ldt = "rgb(80,5,10)";
    this.fgi.tmo.backgroundColor = "rgba(0,0,0,0.5)";
    this.fgi.tmo.borderColor = "rgb(255,20,90)";
    this.fgi.tmo.ldt = "rgb(80,5,10)";
    this.oxo.zns.backgroundColor = "rgb(140,0,17)";
    this.oxo.zns.borderColor = "rgb(160,0,30)";
    this.oxo.zns.ldt = "rgb(50,0,0)";
    this.oxo.iwg.backgroundColor = "rgba(0,0,0,0.5)";
    this.oxo.iwg.borderColor = "rgb(255,20,30)";
    this.oxo.iwg.ldt = "rgb(80,5,10)";
    this.oxo.tmo.backgroundColor = "rgba(0,0,0,0.5)";
    this.oxo.tmo.borderColor = "rgb(255,20,30)";
    this.oxo.tmo.ldt = "rgb(80,5,10)";
    this.oxo.foc = {
        font: "sans-serif",
        yes: "verdana",
        noj: "white",
        pev: "bold",
        ydb: "yellow"
    };
    this.oxo.iog = {
        font: "sans-serif",
        pev: "bold",
        ydb: "yellow",
        zsv: "sans-serif",
        ozq: "verdana",
        cqq: "bold",
        yzt: "white"
    };
    this.ctg.wze.zns.backgroundColor = "rgb(140,0,17)";
    this.raz.backgroundColor = "rgb(200,0,10)";
    this.raz.pbq = "rgb(60,5,5)"
}
gzm.prototype = new sib;

function dsj() {
    this.type = "800_600";
    this.thl = true;
    this.nrw = false;
    this.ews = false;
    this.qsn = true;
    this.jgj = false;
    this.uzt = false;
    this.rqi = false;
    this.sbj = false
}

function fzd() {
    this.thl = false;
    this.canvas = {
        oue: new gup(0, 0, 800, 620)
    };
    this.uhd = {
        oue: new gup(),
        ape: 0
    };
    this.mij = {
        oue: new gup(0, 20, 800, 600),
        stc: 0
    };
    this.rkb = {
        faa: new gup(0, 40, 440, 36),
        ujx: new gup(5, 2, 140, 30),
        npn: new gup(150, 2, 140, 30),
        uex: new gup(295, 2, 140, 30),
        sue: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.bmy = {
        mij: {
            oue: new gup(0, 0, 500, 360),
            buy: new gup(5, 325, 490, 30),
            jgx: new gup(5, 329, 490, 14),
            uxq: new gup(50, 345, 400, 6),
            uto: new gup(5, 285, 490, 70),
            mkb: new gup(120, 300, 260, 55),
            fontSize: 14,
            gwb: 18,
            cfw: 26,
            dfz: 5,
            nrh: 12,
            rzh: 5,
            voq: 2
        },
        wwy: {
            oue: new gup(0, 0, 800, 620),
            buy: new gup(),
            jgx: new gup(),
            uxq: new gup(200, 425, 400, 8),
            uto: new gup(100, 372, 600, 84),
            mkb: new gup(270, 394, 260, 70),
            fontSize: 18,
            gwb: 24,
            cfw: 20,
            dfz: 0,
            nrh: 12,
            rzh: 7,
            voq: 0
        }
    };
    this.bea = {
        oue: new gup(0, 0, 800, 20),
        fontSize: 12,
        zik: 19,
        yhl: 15,
        doe: 120,
        nrh: 2,
        rzh: 2,
        tcs: 2,
        vev: 40
    };
    this.ctg = {
        oue: new gup(0, 20, 800, 70),
        fontSize: 10,
        ano: 10,
        zdr: 20,
        xfk: 40,
        stc: 4,
        nrh: 10,
        rzh: 5,
        dfz: 10,
        sue: {
            fontSize: 17,
            dfz: 2
        }
    };
    this.bml = {
        oue: new gup(0, 20, 800, 600),
        faa: new gup(),
        sue: {
            cgx: 20,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            jau: 8,
            ibs: 8,
            stc: 0
        },
        hwx: new gup(0, 20, 800, 40),
        lmy: new gup(0, 100, 800, 40),
        qcp: new gup(0, 140, 800, 40),
        hul: new gup(0, 180, 800, 40),
        wvx: new gup(225, 275, 350, 100),
        sjl: new gup(200, 480, 400, 40),
        ktx: {
            jnm: new gup(340, 540, 120, 55)
        },
        ogp: {
            jnm: new gup(250, 540, 120, 55),
            edl: new gup(430, 540, 120, 55)
        },
        cnz: 36,
        fontSize: 30,
        nia: 22,
        rzh: 3,
        nrh: 5,
        stc: 2,
        ulr: 3,
        bez: 10
    };
    this.wmv = {
        oue: new gup(-10, 25, 310, 50),
        hwx: new gup(10, 4, 240, 24),
        jgx: new gup(10, 28, 240, 18),
        ser: new gup(260, 10, 40, 30),
        qai: new gup(7, 2, 26, 26),
        wck: 16,
        cgx: 12,
        xpj: 18
    };
    this.gqp = {
        oue: new gup(150, 160, 500, 280),
        wck: 26,
        fontSize: 20,
        xne: new gup(465, 5, 30, 30),
        hwx: new gup(30, 5, 440, 30),
        sjl: new gup(20, 40, 460, 160),
        btn: new gup(20, 230, 460, 40),
        sue: {
            fontSize: 20
        }
    };
    this.ths = {
        oue: new gup(0, 55, 560, 430),
        stc: 2,
        qyf: 0,
        rme: 5,
        eiy: 10,
        wck: 26,
        iur: 20,
        hwx: new gup(30, 15, 500, 30),
        nfn: new gup(20, 50, 520, 60),
        ori: new gup(40, 60, 220, 40),
        ibc: new gup(328, 60, 30, 40),
        npe: new gup(360, 60, 120, 40),
        lmd: new gup(482, 60, 30, 40),
        tbk: new gup(20, 120, 520, 200),
        nef: new gup(40, 120, 480, 40),
        nrb: new gup(30, 160, 280, 40),
        yha: new gup(328, 160, 30, 40),
        hhs: new gup(360, 160, 120, 40),
        qef: new gup(482, 160, 30, 40),
        lkd: new gup(30, 215, 280, 40),
        vqm: new gup(328, 215, 30, 40),
        hrt: new gup(360, 215, 120, 40),
        gcw: new gup(482, 215, 30, 40),
        azm: new gup(30, 270, 280, 40),
        jdh: new gup(328, 270, 30, 40),
        nqh: new gup(360, 270, 120, 40),
        jxh: new gup(482, 270, 30, 40),
        buy: new gup(30, 330, 500, 30),
        ssc: new gup(210, 370, 140, 50),
        xao: new gup(),
        tav: {
            jgx: new gup(40, 0, 240, 40),
            grz: new gup(7, 12, 16, 16),
            fontSize: 20,
            jau: 0,
            stc: 2
        },
        fdm: {
            jau: 3,
            nrh: -5,
            rzh: -1,
            ibs: 6,
            fontSize: 20,
            stc: 0
        },
        kmf: {
            jau: 3,
            nrh: 5,
            rzh: 0,
            ibs: 6,
            fontSize: 20,
            stc: 0
        },
        cpe: {
            jau: 6,
            nrh: 0,
            rzh: 0,
            ibs: 6,
            fontSize: 26,
            stc: 2
        },
        display: {
            wck: 16,
            cgx: 24,
            aeo: 0,
            fvn: 0,
            stc: 2,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        }
    };
    this.tyt = {
        oue: [
            [new gup(2, 20, 130, 44)],
            [new gup(2, 20, 130, 44), new gup(668, 20, 130, 44)],
            [new gup(2, 20, 130, 23), new gup(668, 20, 130, 23), new gup(2, 41, 130, 23)],
            [new gup(2, 20, 130, 23), new gup(668, 20, 130, 23), new gup(2, 41, 130, 23), new gup(668, 41, 130, 23)]
        ],
        display: {
            zsc: new gup(0, 0, 130, 44),
            yvo: new gup(0, 0, 130, 44),
            agl: new gup(),
            hwx: new gup(2, 3, 126, 19),
            fwo: new gup(8, 24, 114, 19),
            wck: 16,
            bba: 18,
            oqg: 0
        },
        tot: {
            zsc: new gup(0, 0, 130, 23),
            yvo: new gup(0, 0, 130, 23),
            agl: new gup(2, 2, 19, 19),
            hwx: new gup(),
            fwo: new gup(22, 3, 100, 19),
            wck: 14,
            bba: 18,
            oqg: 0
        },
        udh: {
            oue: new gup(62, 100, 676, 372),
            zsc: new gup(32, 10, 612, 351),
            yvo: new gup(0, 0, 676, 372),
            agl: new gup(301, 263, 74, 74),
            hwx: new gup(120, 58, 436, 56),
            fwo: new gup(32, 140, 612, 96),
            wck: 68,
            bba: 100,
            oqg: 0
        },
        koo: {
            oue: new gup(38, 80, 724, 369),
            bfv: new gup(100, 53, 525, 50),
            fwo: new gup(186, 153, 332, 94),
            jvk: 340,
            cwa: 30,
            hll: {
                _0: new gup(2, 0, 90, 94),
                _1: new gup(98, 0, 90, 94),
                _2: new gup(194, 0, 90, 94),
                _3: new gup(290, 0, 90, 94),
                _4: new gup(386, 0, 90, 94),
                _5: new gup(482, 0, 90, 94),
                _6: new gup(578, 0, 90, 94),
                _7: new gup(674, 0, 90, 94),
                _8: new gup(770, 0, 90, 94),
                _9: new gup(866, 0, 90, 94),
                _cm: new gup(962, 0, 28, 94),
                _dt: new gup(999, 0, 28, 94),
                _sp: new gup(1036, 0, 28, 94)
            }
        }
    }
}
fzd.prototype = new dsj;

function tpb() {
    this.nrw = true
}
tpb.prototype = new fzd;

function fia() {
    this.jgj = true;
    this.ews = true;
    this.thl = false;
    this.nrw = true;
    this.canvas = {
        oue: new gup(0, 0, 800, 1165)
    };
    this.uhd = {
        oue: new gup(),
        ape: 0
    };
    this.mij = {
        oue: new gup(0, 550, 800, 615),
        stc: 10
    };
    this.rkb = {
        faa: new gup(0, 330, 440, 36),
        ujx: new gup(5, 2, 140, 30),
        npn: new gup(150, 2, 140, 30),
        uex: new gup(295, 2, 140, 30),
        sue: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.bmy = {
        mij: {
            oue: new gup(0, 0, 500, 360),
            buy: new gup(5, 325, 490, 30),
            jgx: new gup(5, 329, 490, 14),
            uxq: new gup(50, 345, 400, 6),
            uto: new gup(5, 285, 490, 70),
            mkb: new gup(120, 300, 260, 55),
            fontSize: 14,
            gwb: 18,
            cfw: 26,
            dfz: 5,
            nrh: 12,
            rzh: 5,
            voq: 2
        },
        wwy: {
            oue: new gup(0, 0, 800, 600),
            buy: new gup(),
            jgx: new gup(),
            uxq: new gup(200, 411, 400, 8),
            uto: new gup(100, 360, 600, 110),
            mkb: new gup(270, 380, 260, 70),
            fontSize: 18,
            gwb: 24,
            cfw: 20,
            dfz: 0,
            nrh: 12,
            rzh: 7,
            voq: 0
        }
    };
    this.top = {
        oue: new gup(0, 20, 800, 520)
    };
    this.bea = {
        oue: new gup(0, 0, 800, 20),
        fontSize: 12,
        zik: 19,
        yhl: 15,
        doe: 120,
        nrh: 2,
        rzh: 2,
        tcs: 2,
        vev: 60
    };
    this.ctg = {
        oue: new gup(0, 20, 800, 70),
        fontSize: 10,
        ano: 10,
        zdr: 20,
        xfk: 40,
        stc: 4,
        nrh: 10,
        rzh: 5,
        dfz: 10,
        sue: {
            fontSize: 17,
            dfz: 2
        }
    };
    this.bml = {
        oue: new gup(0, 550, 800, 615),
        faa: new gup(),
        sue: {
            cgx: 26,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            jau: 10,
            ibs: 10,
            stc: 2
        },
        hwx: new gup(0, 20, 800, 40),
        lmy: new gup(0, 100, 800, 40),
        qcp: new gup(0, 140, 800, 40),
        hul: new gup(0, 180, 800, 40),
        wvx: new gup(225, 275, 350, 100),
        sjl: new gup(200, 480, 400, 40),
        ktx: {
            jnm: new gup(340, 540, 120, 68)
        },
        ogp: {
            jnm: new gup(250, 540, 120, 68),
            edl: new gup(430, 540, 120, 68)
        },
        cnz: 36,
        fontSize: 30,
        nia: 22,
        rzh: 3,
        nrh: 5,
        stc: 2,
        ulr: 3,
        bez: 10,
    };
    this.wmv = {
        oue: new gup(-10, 545, 310, 50),
        hwx: new gup(10, 4, 240, 24),
        jgx: new gup(10, 28, 240, 18),
        ser: new gup(260, 10, 40, 30),
        qai: new gup(7, 2, 26, 26),
        wck: 16,
        cgx: 12,
        xpj: 18
    };
    this.gqp = {
        oue: new gup(150, 690, 500, 280),
        wck: 26,
        fontSize: 20,
        xne: new gup(465, 5, 30, 30),
        hwx: new gup(30, 5, 440, 40),
        sjl: new gup(20, 40, 460, 160),
        btn: new gup(20, 230, 460, 40),
        sue: {
            fontSize: 20
        }
    };
    this.ths = {
        oue: new gup(0, 585, 560, 430),
        stc: 2,
        qyf: 0,
        rme: 5,
        eiy: 10,
        wck: 26,
        iur: 20,
        hwx: new gup(30, 15, 500, 30),
        nfn: new gup(20, 50, 520, 60),
        ori: new gup(40, 60, 220, 40),
        ibc: new gup(328, 60, 30, 40),
        npe: new gup(360, 60, 120, 40),
        lmd: new gup(482, 60, 30, 40),
        tbk: new gup(20, 120, 520, 200),
        nef: new gup(40, 120, 480, 40),
        nrb: new gup(30, 160, 280, 40),
        yha: new gup(328, 160, 30, 40),
        hhs: new gup(360, 160, 120, 40),
        qef: new gup(482, 160, 30, 40),
        lkd: new gup(30, 215, 280, 40),
        vqm: new gup(328, 215, 30, 40),
        hrt: new gup(360, 215, 120, 40),
        gcw: new gup(482, 215, 30, 40),
        azm: new gup(30, 270, 280, 40),
        jdh: new gup(328, 270, 30, 40),
        nqh: new gup(360, 270, 120, 40),
        jxh: new gup(482, 270, 30, 40),
        buy: new gup(30, 330, 500, 30),
        ssc: new gup(210, 370, 140, 50),
        xao: new gup(),
        tav: {
            jgx: new gup(40, 0, 240, 40),
            grz: new gup(7, 12, 16, 16),
            fontSize: 20,
            jau: 0,
            stc: 2
        },
        fdm: {
            jau: 3,
            nrh: -5,
            rzh: -1,
            ibs: 6,
            fontSize: 20,
            stc: 0
        },
        kmf: {
            jau: 3,
            nrh: 5,
            rzh: 0,
            ibs: 6,
            fontSize: 20,
            stc: 0
        },
        cpe: {
            jau: 6,
            nrh: 0,
            rzh: 0,
            ibs: 6,
            fontSize: 26,
            stc: 2
        },
        display: {
            wck: 16,
            cgx: 24,
            aeo: 0,
            fvn: 0,
            stc: 2,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        }
    };
    this.tyt = {
        oue: [
            [new gup(2, 550, 130, 44)],
            [new gup(2, 550, 130, 44), new gup(668, 550, 130, 44)],
            [new gup(2, 550, 130, 23), new gup(668, 550, 130, 23), new gup(2, 571, 130, 23)],
            [new gup(2, 550, 130, 23), new gup(668, 550, 130, 23), new gup(2, 571, 130, 23), new gup(668, 571, 130, 23)]
        ],
        display: {
            zsc: new gup(0, 0, 130, 44),
            yvo: new gup(0, 0, 130, 44),
            agl: new gup(),
            hwx: new gup(2, 3, 126, 19),
            fwo: new gup(8, 24, 114, 19),
            wck: 16,
            bba: 18,
            oqg: 0
        },
        tot: {
            zsc: new gup(0, 0, 130, 23),
            yvo: new gup(0, 0, 130, 23),
            agl: new gup(2, 2, 19, 19),
            hwx: new gup(),
            fwo: new gup(22, 3, 100, 19),
            wck: 14,
            bba: 18,
            oqg: 0
        },
        udh: {
            oue: new gup(62, 640, 676, 372),
            zsc: new gup(32, 10, 612, 351),
            yvo: new gup(0, 0, 676, 372),
            agl: new gup(301, 263, 74, 74),
            hwx: new gup(120, 58, 436, 56),
            fwo: new gup(32, 140, 612, 96),
            wck: 68,
            bba: 100,
            oqg: 0
        },
        koo: {
            oue: new gup(38, 610, 724, 369),
            bfv: new gup(100, 53, 525, 50),
            fwo: new gup(186, 153, 332, 94),
            jvk: 360,
            cwa: 30,
            hll: {
                _0: new gup(2, 0, 90, 94),
                _1: new gup(98, 0, 90, 94),
                _2: new gup(194, 0, 90, 94),
                _3: new gup(290, 0, 90, 94),
                _4: new gup(386, 0, 90, 94),
                _5: new gup(482, 0, 90, 94),
                _6: new gup(578, 0, 90, 94),
                _7: new gup(674, 0, 90, 94),
                _8: new gup(770, 0, 90, 94),
                _9: new gup(866, 0, 90, 94),
                _cm: new gup(962, 0, 28, 94),
                _dt: new gup(999, 0, 28, 94),
                _sp: new gup(1036, 0, 28, 94)
            }
        }
    }
}
fia.prototype = new dsj;

function bvv() {
    this.thl = false;
    this.uzt = true;
    this.qsn = false;
    this.rqi = true;
    this.sbj = true;
    this.canvas = {
        oue: new gup(0, 0, 960, 600)
    };
    this.uhd = {
        oue: new gup(),
        ape: 0,
        wzm: 0
    };
    this.mij = {
        oue: new gup(160, 0, 800, 600),
        stc: 0
    };
    this.rkb = {
        faa: new gup(490, 25, 470, 36),
        ujx: new gup(5, 4, 150, 30),
        npn: new gup(160, 4, 150, 30),
        uex: new gup(315, 4, 150, 30),
        sue: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.bmy = {
        mij: {
            oue: new gup(0, 0, 640, 460),
            buy: new gup(6, 416, 628, 38),
            jgx: new gup(6, 420, 628, 17),
            uxq: new gup(64, 442, 512, 7),
            uto: new gup(6, 364, 628, 90),
            mkb: new gup(140, 384, 360, 70),
            fontSize: 18,
            gwb: 20,
            cfw: 30,
            dfz: 6,
            nrh: 12,
            rzh: 6,
            voq: 3
        },
        wwy: {
            oue: new gup(0, 0, 960, 600),
            buy: new gup(),
            jgx: new gup(),
            uxq: new gup(280, 411, 400, 8),
            uto: new gup(180, 360, 600, 110),
            mkb: new gup(350, 380, 260, 70),
            fontSize: 18,
            gwb: 24,
            cfw: 20,
            dfz: 0,
            nrh: 12,
            rzh: 7,
            voq: 0
        }
    };
    this.bea = {};
    this.ctg = {};
    this.bml = {
        oue: new gup(0, 0, 960, 600),
        faa: new gup(0, 0, 160, 600),
        sue: {
            cgx: 0,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            ibs: 8,
            jau: 16,
            stc: 4
        },
        hwx: new gup(160, 20, 800, 40),
        lmy: new gup(160, 100, 800, 40),
        qcp: new gup(160, 140, 800, 40),
        hul: new gup(160, 180, 800, 40),
        wvx: new gup(385, 275, 350, 100),
        sjl: new gup(360, 480, 400, 40),
        ktx: {
            jnm: new gup(15, 410, 130, 130),
        },
        ogp: {
            jnm: new gup(15, 310, 130, 130),
            edl: new gup(15, 120, 130, 130)
        },
        cnz: 36,
        fontSize: 30,
        nia: 22,
        rzh: 3,
        nrh: 5,
        stc: 2,
        ulr: 3,
        bez: 10
    };
    this.raz = {
        oue: new gup(0, 0, 960, 600),
        stc: 0,
        jau: 0,
        ujf: 50,
        cmw: 30,
        iur: 30,
        cwl: new gup(70, 170, 470, 70),
        scq: new gup(560, 170, 60, 70),
        whv: new gup(622, 170, 210, 70),
        cuw: new gup(834, 170, 60, 70),
        hch: new gup(70, 310, 470, 70),
        ugw: new gup(560, 310, 60, 70),
        cqt: new gup(622, 310, 210, 70),
        vdk: new gup(834, 310, 60, 70),
        zmg: new gup(70, 450, 470, 70),
        uxc: new gup(622, 450, 210, 70),
        nxz: new gup(90, 530, 780, 50),
        ori: new gup(80, 120, 470, 60),
        ibc: new gup(570, 120, 50, 60),
        npe: new gup(622, 120, 210, 60),
        lmd: new gup(834, 120, 50, 60),
        frb: new gup(90, 200, 780, 70),
        nrb: new gup(80, 280, 470, 60),
        yha: new gup(570, 280, 50, 60),
        hhs: new gup(622, 280, 210, 60),
        qef: new gup(834, 280, 50, 60),
        lkd: new gup(80, 360, 470, 60),
        vqm: new gup(570, 360, 50, 60),
        hrt: new gup(622, 360, 210, 60),
        gcw: new gup(834, 360, 50, 60),
        azm: new gup(80, 440, 470, 60),
        jdh: new gup(570, 440, 50, 60),
        nqh: new gup(622, 440, 210, 60),
        jxh: new gup(834, 440, 50, 60),
        buy: new gup(90, 530, 780, 50),
        nnc: {
            aug: new gup(0, 10, 240, 90),
            nqu: new gup(240, 10, 240, 90),
            axh: new gup(480, 10, 240, 90),
            ivs: new gup(720, 10, 240, 90)
        },
        iff: {
            aug: new gup(0, 10, 192, 90),
            ofo: new gup(192, 10, 192, 90),
            nqu: new gup(384, 10, 192, 90),
            axh: new gup(576, 10, 192, 90),
            ivs: new gup(768, 10, 192, 90)
        },
        znm: [new gup(190, 205, 200, 160), new gup(570, 205, 200, 160)],
        rpg: [new gup(90, 205, 200, 160), new gup(380, 205, 200, 160), new gup(670, 205, 200, 160)],
        knq: [new gup(190, 130, 200, 160), new gup(570, 130, 200, 160), new gup(190, 360, 200, 160), new gup(570, 360, 200, 160)],
        hpl: [new gup(90, 130, 200, 160), new gup(380, 130, 200, 160), new gup(670, 130, 200, 160), new gup(90, 360, 200, 160), new gup(380, 360, 200, 160), new gup(670, 360, 200, 160)],
        fdm: {
            jau: 3,
            nrh: -10,
            rzh: -1,
            ibs: 6,
            fontSize: 36,
            stc: 0,
        },
        kmf: {
            jau: 3,
            nrh: 10,
            rzh: -1,
            ibs: 6,
            fontSize: 36,
            stc: 0,
        },
        wef: {
            fontSize: 36,
            nrh: 0,
            rzh: 0,
            ibs: 10,
            jau: 0,
            stc: 0
        },
        zbo: {
            fontSize: 26,
            dfz: 5,
            jau: 26,
            stc: 4,
            dyd: 40
        },
        ipr: {
            wck: 16,
            cgx: 40,
            aeo: 0,
            fvn: 0,
            stc: 2,
            dfz: 3
        },
        thb: {
            wck: 16,
            cgx: 40,
            aeo: 0,
            fvn: 0,
            stc: 2,
            dfz: 3
        },
        tav: {
            jgx: new gup(50, 0, 420, 60),
            grz: new gup(0, 13, 30, 30),
            fontSize: 30,
            jau: 0,
            stc: 2
        }
    };
    this.wmv = {
        oue: new gup(660, 5, 310, 60),
        hwx: new gup(60, 6, 240, 26),
        jgx: new gup(60, 34, 240, 20),
        ser: new gup(5, 11, 50, 38),
        qai: new gup(8, 2, 34, 34),
        wck: 16,
        cgx: 12,
        xpj: 24
    };
    this.gqp = {
        oue: new gup(200, 135, 560, 330),
        wck: 26,
        fontSize: 20,
        xne: new gup(515, 5, 40, 40),
        hwx: new gup(40, 5, 480, 30),
        sjl: new gup(20, 40, 520, 195),
        btn: new gup(20, 265, 520, 54),
        sue: {
            fontSize: 20
        }
    };
    this.tyt = {
        oue: [
            [new gup(162, 0, 130, 44)],
            [new gup(162, 0, 130, 44), new gup(828, 0, 130, 44)],
            [new gup(162, 0, 130, 23), new gup(828, 0, 130, 23), new gup(162, 21, 130, 23)],
            [new gup(162, 0, 130, 23), new gup(828, 0, 130, 23), new gup(162, 21, 130, 23), new gup(828, 21, 130, 23)]
        ],
        display: {
            zsc: new gup(0, 0, 130, 44),
            yvo: new gup(0, 0, 130, 44),
            agl: new gup(),
            hwx: new gup(2, 3, 126, 19),
            fwo: new gup(8, 24, 114, 19),
            wck: 16,
            bba: 18,
            oqg: 0
        },
        tot: {
            zsc: new gup(0, 0, 130, 23),
            yvo: new gup(0, 0, 130, 23),
            agl: new gup(2, 2, 19, 19),
            hwx: new gup(),
            fwo: new gup(22, 3, 100, 19),
            wck: 14,
            bba: 18,
            oqg: 0
        },
        udh: {
            oue: new gup(222, 80, 676, 372),
            zsc: new gup(32, 10, 612, 351),
            yvo: new gup(0, 0, 676, 372),
            agl: new gup(301, 263, 74, 74),
            hwx: new gup(120, 58, 436, 56),
            fwo: new gup(32, 140, 612, 96),
            wck: 68,
            bba: 100,
            oqg: 0
        },
        koo: {
            oue: new gup(198, 60, 724, 369),
            bfv: new gup(100, 53, 525, 50),
            fwo: new gup(186, 153, 332, 94),
            jvk: 340,
            cwa: 30,
            hll: {
                _0: new gup(2, 0, 90, 94),
                _1: new gup(98, 0, 90, 94),
                _2: new gup(194, 0, 90, 94),
                _3: new gup(290, 0, 90, 94),
                _4: new gup(386, 0, 90, 94),
                _5: new gup(482, 0, 90, 94),
                _6: new gup(578, 0, 90, 94),
                _7: new gup(674, 0, 90, 94),
                _8: new gup(770, 0, 90, 94),
                _9: new gup(866, 0, 90, 94),
                _cm: new gup(962, 0, 28, 94),
                _dt: new gup(999, 0, 28, 94),
                _sp: new gup(1036, 0, 28, 94)
            }
        }
    }
}
bvv.prototype = new dsj;

function vnd() {
    this.thl = false;
    this.uzt = true;
    this.qsn = false;
    this.rqi = true;
    this.sbj = true;
    this.canvas = {
        oue: new gup(0, 0, 960, 600)
    };
    this.uhd = {
        oue: new gup(),
        ape: 0,
        wzm: 0
    };
    this.mij = {
        oue: new gup(0, 0, 800, 600),
        stc: 0
    };
    this.rkb = {
        faa: new gup(0, 25, 470, 36),
        ujx: new gup(5, 2, 150, 30),
        npn: new gup(160, 2, 150, 30),
        uex: new gup(315, 2, 150, 30),
        sue: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.bmy = {
        mij: {
            oue: new gup(0, 0, 640, 460),
            buy: new gup(6, 416, 628, 38),
            jgx: new gup(6, 420, 628, 17),
            uxq: new gup(64, 442, 512, 7),
            uto: new gup(6, 364, 628, 90),
            mkb: new gup(140, 384, 360, 70),
            fontSize: 18,
            gwb: 20,
            cfw: 30,
            dfz: 6,
            nrh: 12,
            rzh: 6,
            voq: 3
        },
        wwy: {
            oue: new gup(0, 0, 960, 600),
            buy: new gup(),
            jgx: new gup(),
            uxq: new gup(280, 411, 400, 8),
            uto: new gup(180, 360, 600, 110),
            mkb: new gup(350, 380, 260, 70),
            fontSize: 18,
            gwb: 24,
            cfw: 20,
            dfz: 0,
            nrh: 12,
            rzh: 7,
            voq: 0
        }
    };
    this.bea = {};
    this.ctg = {};
    this.bml = {
        oue: new gup(0, 0, 960, 600),
        faa: new gup(800, 0, 160, 600),
        sue: {
            cgx: 0,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            ibs: 8,
            jau: 16,
            stc: 4
        },
        hwx: new gup(0, 20, 800, 40),
        lmy: new gup(0, 100, 800, 40),
        qcp: new gup(0, 140, 800, 40),
        hul: new gup(0, 180, 800, 40),
        wvx: new gup(225, 275, 350, 100),
        sjl: new gup(200, 480, 400, 40),
        ktx: {
            jnm: new gup(815, 410, 130, 130),
        },
        ogp: {
            jnm: new gup(815, 310, 130, 130),
            edl: new gup(815, 120, 130, 130)
        },
        cnz: 36,
        fontSize: 30,
        nia: 22,
        rzh: 3,
        nrh: 5,
        stc: 2,
        ulr: 3,
        bez: 10
    };
    this.raz = {
        oue: new gup(0, 0, 960, 600),
        stc: 0,
        jau: 0,
        ujf: 50,
        cmw: 30,
        iur: 30,
        cwl: new gup(70, 170, 470, 70),
        scq: new gup(560, 170, 60, 70),
        whv: new gup(622, 170, 210, 70),
        cuw: new gup(834, 170, 60, 70),
        hch: new gup(70, 310, 470, 70),
        ugw: new gup(560, 310, 60, 70),
        cqt: new gup(622, 310, 210, 70),
        vdk: new gup(834, 310, 60, 70),
        zmg: new gup(70, 450, 470, 70),
        uxc: new gup(622, 450, 210, 70),
        nxz: new gup(90, 530, 780, 50),
        ori: new gup(80, 120, 470, 60),
        ibc: new gup(570, 120, 50, 60),
        npe: new gup(622, 120, 210, 60),
        lmd: new gup(834, 120, 50, 60),
        frb: new gup(90, 200, 780, 70),
        nrb: new gup(80, 280, 470, 60),
        yha: new gup(570, 280, 50, 60),
        hhs: new gup(622, 280, 210, 60),
        qef: new gup(834, 280, 50, 60),
        lkd: new gup(80, 360, 470, 60),
        vqm: new gup(570, 360, 50, 60),
        hrt: new gup(622, 360, 210, 60),
        gcw: new gup(834, 360, 50, 60),
        azm: new gup(80, 440, 470, 60),
        jdh: new gup(570, 440, 50, 60),
        nqh: new gup(622, 440, 210, 60),
        jxh: new gup(834, 440, 50, 60),
        buy: new gup(90, 530, 780, 50),
        nnc: {
            aug: new gup(0, 10, 240, 90),
            nqu: new gup(240, 10, 240, 90),
            axh: new gup(480, 10, 240, 90),
            ivs: new gup(720, 10, 240, 90)
        },
        iff: {
            aug: new gup(0, 10, 192, 90),
            ofo: new gup(192, 10, 192, 90),
            nqu: new gup(384, 10, 192, 90),
            axh: new gup(576, 10, 192, 90),
            ivs: new gup(768, 10, 192, 90)
        },
        znm: [new gup(190, 205, 200, 160), new gup(570, 205, 200, 160)],
        rpg: [new gup(90, 205, 200, 160), new gup(380, 205, 200, 160), new gup(670, 205, 200, 160)],
        knq: [new gup(190, 130, 200, 160), new gup(570, 130, 200, 160), new gup(190, 360, 200, 160), new gup(570, 360, 200, 160)],
        hpl: [new gup(90, 130, 200, 160), new gup(380, 130, 200, 160), new gup(670, 130, 200, 160), new gup(90, 360, 200, 160), new gup(380, 360, 200, 160), new gup(670, 360, 200, 160)],
        fdm: {
            jau: 3,
            nrh: -10,
            rzh: -1,
            ibs: 6,
            fontSize: 36,
            stc: 0,
        },
        kmf: {
            jau: 3,
            nrh: 10,
            rzh: -1,
            ibs: 6,
            fontSize: 36,
            stc: 0,
        },
        wef: {
            fontSize: 36,
            nrh: 0,
            rzh: 0,
            ibs: 10,
            jau: 0,
            stc: 0
        },
        zbo: {
            fontSize: 26,
            dfz: 5,
            jau: 26,
            stc: 4,
            dyd: 40
        },
        ipr: {
            wck: 16,
            cgx: 40,
            aeo: 0,
            fvn: 0,
            stc: 2,
            dfz: 3
        },
        thb: {
            wck: 16,
            cgx: 40,
            aeo: 0,
            fvn: 0,
            stc: 2,
            dfz: 3
        },
        tav: {
            jgx: new gup(50, 0, 420, 60),
            grz: new gup(0, 13, 30, 30),
            fontSize: 30,
            jau: 0,
            stc: 2
        }
    };
    this.wmv = {
        oue: new gup(-10, 5, 310, 60),
        hwx: new gup(10, 6, 240, 26),
        jgx: new gup(10, 34, 240, 20),
        ser: new gup(255, 11, 50, 38),
        qai: new gup(8, 2, 34, 34),
        wck: 16,
        cgx: 12,
        xpj: 24
    };
    this.gqp = {
        oue: new gup(200, 135, 560, 330),
        wck: 26,
        fontSize: 20,
        xne: new gup(515, 5, 40, 40),
        hwx: new gup(40, 0, 480, 30),
        sjl: new gup(20, 40, 520, 195),
        btn: new gup(20, 265, 520, 54),
        sue: {
            fontSize: 20
        }
    };
    this.tyt = {
        oue: [
            [new gup(2, 0, 130, 44)],
            [new gup(2, 0, 130, 44), new gup(668, 0, 130, 44)],
            [new gup(2, 0, 130, 23), new gup(668, 0, 130, 23), new gup(2, 21, 130, 23)],
            [new gup(2, 0, 130, 23), new gup(668, 0, 130, 23), new gup(2, 21, 130, 23), new gup(668, 21, 130, 23)]
        ],
        display: {
            zsc: new gup(0, 0, 130, 44),
            yvo: new gup(0, 0, 130, 44),
            agl: new gup(),
            hwx: new gup(2, 3, 126, 19),
            fwo: new gup(8, 24, 114, 19),
            wck: 16,
            bba: 18,
            oqg: 0
        },
        tot: {
            zsc: new gup(0, 0, 130, 23),
            yvo: new gup(0, 0, 130, 23),
            agl: new gup(2, 2, 19, 19),
            hwx: new gup(),
            fwo: new gup(22, 3, 100, 19),
            wck: 14,
            bba: 18,
            oqg: 0
        },
        udh: {
            oue: new gup(62, 80, 676, 372),
            zsc: new gup(32, 10, 612, 351),
            yvo: new gup(0, 0, 676, 372),
            agl: new gup(301, 263, 74, 74),
            hwx: new gup(120, 58, 436, 56),
            fwo: new gup(32, 140, 612, 96),
            wck: 68,
            bba: 100,
            oqg: 0
        },
        koo: {
            oue: new gup(38, 60, 724, 369),
            bfv: new gup(100, 53, 525, 50),
            fwo: new gup(186, 153, 332, 94),
            jvk: 340,
            cwa: 30,
            hll: {
                _0: new gup(2, 0, 90, 94),
                _1: new gup(98, 0, 90, 94),
                _2: new gup(194, 0, 90, 94),
                _3: new gup(290, 0, 90, 94),
                _4: new gup(386, 0, 90, 94),
                _5: new gup(482, 0, 90, 94),
                _6: new gup(578, 0, 90, 94),
                _7: new gup(674, 0, 90, 94),
                _8: new gup(770, 0, 90, 94),
                _9: new gup(866, 0, 90, 94),
                _cm: new gup(962, 0, 28, 94),
                _dt: new gup(999, 0, 28, 94),
                _sp: new gup(1036, 0, 28, 94)
            }
        }
    }
}
vnd.prototype = new dsj;

function lyj() {
    this.enp = true;
    this.lcx = true;
    this.gic = true;
    this.uhd = {
        oue: new gup(0, 20, 800, 600),
        ape: 0,
        wzm: 0
    };
    this.vwh = {
        oue: new gup(0, 20, 800, 600),
        ape: -20,
        wzm: 0
    };
    this.dou = {
        oue: new gup(40, 110, 136, 360),
        djv: new gup(40, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.wce = {
        oue: new gup(186, 110, 136, 360),
        djv: new gup(186, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.stl = {
        oue: new gup(332, 110, 136, 360),
        djv: new gup(332, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.lhh = {
        oue: new gup(478, 110, 136, 360),
        djv: new gup(478, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.vvn = {
        oue: new gup(624, 110, 136, 360),
        djv: new gup(624, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.svw = {
        oue: new gup(0, 20, 800, 86),
        fontSize: 50,
        nrh: 0,
        rzh: 6,
        dfz: 0,
        oqg: 2
    };
    this.dbn = {
        oue: new gup(0, 20, 800, 80),
        fontSize: 50,
        nrh: 0,
        rzh: 8,
        dfz: 0,
        oqg: 2
    };
    this.yfx = {
        oue: new gup(4, 110, 0, 0),
        bfi: [25, 65, 165, 265, 305],
        qyi: 30,
        dns: 30
    };
    this.dhc = {
        oue: new gup(766, 110, 0, 0),
        bfi: [25, 65, 165, 265, 305],
        qyi: 30,
        dns: 30
    };
    this.yib = {
        oue: new gup(710, 35, 90, 450),
        hwx: new gup(5, 5, 80, 15),
        nli: new gup(55, 25, 30, 410),
        fontSize: 15,
        zvn: 20,
        stc: 2,
        jau: 5,
        sxq: 4,
        gft: 10,
        eub: 5
    };
    this.tup = {
        oue: new gup(0, 35, 90, 450),
        hwx: new gup(5, 5, 80, 15),
        nli: new gup(5, 25, 30, 410),
        fontSize: 15,
        zvn: 20,
        stc: 2,
        jau: 5,
        sxq: 4,
        gft: 10,
        eub: 5
    };
    this.oxo = {
        oue: new gup(0, 20, 800, 600),
        faa: new gup(0, 540, 800, 60),
        edl: new gup(711, 544, 73, 53),
        lgj: new gup(11, 544, 73, 53),
        rrp: new gup(316, 544, 73, 53),
        agk: new gup(411, 544, 73, 53),
        sue: {
            cgx: 16,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            ibs: 6,
            jau: 8,
            stc: 2
        }
    };
    this.fgi = {
        oue: new gup(0, 20, 800, 600),
        faa: new gup(0, 485, 800, 115),
        fvi: {
            oue: new gup(187, 489, 470, 40),
            fontSize: 18,
            rzh: 14,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 2
        },
        nuu: {
            oue: new gup(331, 216, 137, 187),
            jgx: new gup(5, 8, 56, 34),
            fwo: new gup(37, 3, 98, 104),
            faj: new gup(33, 110, 72, 76),
            ymp: new gup(10, 42, 45, 45),
            duz: new gup(5, 120, 126, 50),
            fontSize: 34,
            bub: 50,
            dfz: 3,
            sxy: 4
        },
        xfn: {
            oue: new gup(380, 105, 380, 45),
            dto: 2
        },
        sue: {
            cgx: 18,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            ibs: 8,
            jau: 10,
            stc: 2
        },
        display: {
            aeo: -12,
            fvn: 11,
            cgx: 26,
            wck: 15,
            stc: 2,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        zvm: {
            aeo: 0,
            fvn: 0,
            cgx: 0,
            wck: 0,
            stc: 0,
            ylm: 0,
            rzf: 0,
            hlr: 0,
            qll: 0
        },
        ebq: new gup(),
        bni: new gup(),
        ftv: new gup(415, 544, 110, 53),
        onk: new gup(275, 544, 110, 53),
        duz: new gup(689, 485, 106, 48),
        apu: new gup(5, 485, 150, 48),
        bxh: new gup(73, 315, 91, 96),
        pio: new gup(166, 315, 91, 96),
        xum: new gup(542, 315, 91, 96),
        did: new gup(635, 315, 91, 96),
        yvl: new gup(73, 218, 184, 92),
        nmo: new gup(542, 218, 184, 92),
        cmd: new gup(65, 170, 200, 50),
        bst: new gup(509, 170, 250, 50),
        swg: new gup(534, 410, 200, 50)
    };
    this.znp = {
        oue: new gup(0, 475, 800, 145),
        xrt: new gup(0, 0, 800, 145),
        mhv: new gup(),
        fvi: {
            oue: new gup(187, 34, 470, 40),
            rzh: 14,
            fontSize: 18,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 2
        },
        win: {
            oue: new gup(45, 2, 710, 25),
            fontSize: 20,
            rzh: 4,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 0
        },
        bar: {
            oue: new gup(187, 51, 470, 70),
            eub: 10,
            fvn: 2,
            fontSize: 24,
            stc: 2,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        dmi: {
            cgx: 22,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            jau: 10,
            ibs: 8,
            stc: 2
        },
        rsf: {
            cgx: 16,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            jau: 8,
            ibs: 8,
            stc: 2
        },
        fyl: {
            cgx: 0,
            bba: 0,
            nrh: 0,
            jau: 0,
            ibs: 0,
            stc: 0,
            fvn: 0,
            sny: 0
        },
        ish: {
            cgx: 16,
            bba: 16,
            nrh: 0,
            jau: 8,
            ibs: 6,
            stc: 2,
            fvn: 24,
            sny: -24
        },
        display: {
            aeo: -12,
            fvn: 11,
            cgx: 26,
            wck: 15,
            stc: 2,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        ggk: {
            aeo: 0,
            fvn: 0,
            cgx: 0,
            wck: 0,
            stc: 0,
            ylm: 0,
            rzf: 0,
            hlr: 0,
            qll: 0
        },
        zvm: {
            oue: new gup(),
            aeo: 0,
            fvn: 0,
            cgx: 0,
            wck: 0,
            stc: 0,
            ylm: 0,
            rzf: 0,
            hlr: 0,
            qll: 0
        },
        ebq: new gup(),
        bni: new gup(),
        gpt: new gup(5, 30, 150, 48),
        poy: new gup(689, 30, 106, 48),
        dzd: new gup(),
        rpx: {
            csi: new gup(686, 89, 110, 53),
            ell: new gup(492, 89, 80, 53),
            ehv: new gup(382, 89, 80, 53),
            edl: new gup(272, 89, 80, 53),
            anm: new gup(25, 89, 110, 53),
            qnq: new gup()
        },
        ihm: {
            csi: new gup(686, 89, 110, 53),
            ell: new gup(532, 89, 80, 53),
            bfi: new gup(432, 89, 80, 53),
            ehv: new gup(332, 89, 80, 53),
            edl: new gup(232, 89, 80, 53),
            anm: new gup(25, 89, 110, 53),
            qnq: new gup()
        },
        pcc: {
            csi: new gup(686, 89, 110, 53),
            anm: new gup(532, 89, 80, 53),
            ell: new gup(432, 89, 80, 53),
            ehv: new gup(332, 89, 80, 53),
            edl: new gup(232, 89, 80, 53),
            hni: new gup(40, 89, 80, 53),
            qnq: new gup()
        },
        qeu: {
            csi: new gup(686, 89, 110, 53),
            anm: new gup(562, 89, 80, 53),
            ell: new gup(472, 89, 80, 53),
            bfi: new gup(382, 89, 80, 53),
            ehv: new gup(292, 89, 80, 53),
            edl: new gup(202, 89, 80, 53),
            hni: new gup(40, 89, 80, 53),
            qnq: new gup()
        },
        azb: {
            csi: new gup(686, 89, 110, 53),
            anm: new gup(492, 89, 80, 53),
            ell: new gup(382, 89, 80, 53),
            ehv: new gup(272, 89, 80, 53),
            hni: new gup(40, 89, 80, 53),
            qnq: new gup()
        },
        apf: {
            csi: new gup(686, 89, 110, 53),
            anm: new gup(532, 89, 80, 53),
            ell: new gup(432, 89, 80, 53),
            bfi: new gup(332, 89, 80, 53),
            ehv: new gup(232, 89, 80, 53),
            hni: new gup(40, 89, 80, 53),
            qnq: new gup()
        },
        opr: {
            csi: new gup(686, 89, 110, 53),
            ell: new gup(492, 89, 80, 53),
            ehv: new gup(382, 89, 80, 53),
            edl: new gup(272, 89, 80, 53),
            anm: new gup(25, 89, 110, 53),
            qnq: new gup()
        },
        opt: {
            csi: new gup(686, 89, 110, 53),
            ell: new gup(532, 89, 80, 53),
            bfi: new gup(432, 89, 80, 53),
            ehv: new gup(332, 89, 80, 53),
            edl: new gup(232, 89, 80, 53),
            anm: new gup(25, 89, 110, 53),
            qnq: new gup()
        },
        xjp: {
            csi: new gup(686, 89, 110, 53),
            anm: new gup(25, 89, 110, 53),
            qnq: new gup()
        },
        wrx: {
            csi: new gup(686, 89, 110, 53),
            anm: new gup(25, 89, 110, 53),
            qnq: new gup()
        },
        hkh: 60
    };
    this.evi = {
        oue: new gup(40, 110, 720, 360),
        lineWidth: 4,
        xuq: 5,
        stc: 1,
        tsx: 136,
        nhw: 120,
        fontSize: 40,
        srl: 10,
        yjr: 5,
        mft: 100,
        sbq: 96,
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
    this.fhc = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410]
    ]
}
lyj.prototype = new fzd;

function wtb() {
    this.nrw = true
}
wtb.prototype = new lyj;

function xml() {
    this.enp = true;
    this.lcx = true;
    this.gic = true;
    this.uhd = {
        oue: new gup(0, 550, 800, 600),
        ape: -14,
        wzm: 0
    };
    this.vwh = {
        oue: new gup(0, 550, 800, 600),
        ape: -550,
        wzm: 0
    };
    this.dou = {
        oue: new gup(40, 640, 136, 360),
        djv: new gup(40, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.wce = {
        oue: new gup(186, 640, 136, 360),
        djv: new gup(186, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.stl = {
        oue: new gup(332, 640, 136, 360),
        djv: new gup(332, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.lhh = {
        oue: new gup(478, 640, 136, 360),
        djv: new gup(478, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.vvn = {
        oue: new gup(624, 640, 136, 360),
        djv: new gup(624, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.svw = {
        oue: new gup(0, 550, 800, 86),
        fontSize: 50,
        nrh: 0,
        rzh: 6,
        dfz: 0,
        oqg: 2
    };
    this.dbn = {
        oue: new gup(0, 550, 800, 80),
        fontSize: 50,
        nrh: 0,
        rzh: 8,
        dfz: 0,
        oqg: 2
    };
    this.yfx = {
        oue: new gup(4, 640, 0, 0),
        bfi: [25, 65, 165, 265, 305],
        qyi: 30,
        dns: 30
    };
    this.dhc = {
        oue: new gup(766, 640, 0, 0),
        bfi: [25, 65, 165, 265, 305],
        qyi: 30,
        dns: 30
    };
    this.yib = {
        oue: new gup(710, 565, 90, 450),
        hwx: new gup(5, 5, 80, 15),
        nli: new gup(55, 25, 30, 410),
        fontSize: 15,
        zvn: 20,
        stc: 2,
        jau: 5,
        sxq: 4,
        gft: 10,
        eub: 5
    };
    this.tup = {
        oue: new gup(0, 565, 90, 450),
        hwx: new gup(5, 5, 80, 15),
        nli: new gup(5, 25, 30, 410),
        fontSize: 15,
        zvn: 20,
        stc: 2,
        jau: 5,
        sxq: 4,
        gft: 10,
        eub: 5
    };
    this.oxo = {
        oue: new gup(0, 550, 800, 615),
        faa: new gup(0, 540, 800, 75),
        edl: new gup(695, 544, 90, 68),
        lgj: new gup(11, 544, 90, 68),
        rrp: new gup(295, 544, 90, 68),
        agk: new gup(415, 544, 90, 68),
        sue: {
            cgx: 21,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            ibs: 8,
            jau: 10,
            stc: 2
        }
    };
    this.fgi = {
        oue: new gup(0, 550, 800, 615),
        faa: new gup(0, 485, 800, 130),
        fvi: {
            oue: new gup(187, 489, 470, 40),
            fontSize: 18,
            rzh: 14,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 2
        },
        nuu: {
            oue: new gup(331, 216, 137, 187),
            jgx: new gup(5, 8, 56, 34),
            fwo: new gup(37, 3, 98, 104),
            faj: new gup(33, 110, 72, 76),
            ymp: new gup(10, 42, 45, 45),
            duz: new gup(5, 120, 126, 50),
            fontSize: 34,
            bub: 50,
            dfz: 3,
            sxy: 4
        },
        xfn: {
            oue: new gup(380, 105, 380, 45),
            dto: 2
        },
        sue: {
            cgx: 23,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            ibs: 10,
            jau: 12,
            stc: 2
        },
        display: {
            aeo: -12,
            fvn: 11,
            cgx: 26,
            wck: 15,
            stc: 2,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        zvm: {
            aeo: 0,
            fvn: 0,
            cgx: 0,
            wck: 0,
            stc: 0,
            ylm: 0,
            rzf: 0,
            hlr: 0,
            qll: 0
        },
        ebq: new gup(),
        bni: new gup(),
        ftv: new gup(415, 544, 120, 68),
        onk: new gup(265, 544, 120, 68),
        duz: new gup(689, 485, 106, 48),
        apu: new gup(5, 485, 150, 48),
        bxh: new gup(73, 315, 91, 96),
        pio: new gup(166, 315, 91, 96),
        xum: new gup(542, 315, 91, 96),
        did: new gup(635, 315, 91, 96),
        yvl: new gup(73, 218, 184, 92),
        nmo: new gup(542, 218, 184, 92),
        cmd: new gup(65, 170, 200, 50),
        bst: new gup(509, 170, 250, 50),
        swg: new gup(534, 410, 200, 50)
    };
    this.znp = {
        oue: new gup(0, 1005, 800, 160),
        xrt: new gup(0, 0, 800, 160),
        mhv: new gup(),
        fvi: {
            oue: new gup(187, 34, 470, 40),
            rzh: 14,
            fontSize: 18,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 2
        },
        win: {
            oue: new gup(45, 2, 710, 25),
            fontSize: 20,
            rzh: 4,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 0
        },
        bar: {
            oue: new gup(187, 58, 470, 70),
            eub: 10,
            fvn: 2,
            fontSize: 24,
            stc: 2,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        dmi: {
            cgx: 28,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            jau: 12,
            ibs: 10,
            stc: 2
        },
        rsf: {
            cgx: 21,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            jau: 10,
            ibs: 8,
            stc: 2
        },
        fyl: {
            cgx: 0,
            bba: 0,
            nrh: 0,
            jau: 0,
            ibs: 0,
            stc: 0,
            fvn: 0,
            sny: 0
        },
        ish: {
            cgx: 21,
            bba: 21,
            nrh: 0,
            jau: 8,
            ibs: 6,
            stc: 2,
            fvn: 30,
            sny: -32
        },
        display: {
            aeo: -12,
            fvn: 11,
            cgx: 26,
            wck: 15,
            stc: 2,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        ggk: {
            aeo: 0,
            fvn: 0,
            cgx: 0,
            wck: 0,
            stc: 0,
            ylm: 0,
            rzf: 0,
            hlr: 0,
            qll: 0
        },
        zvm: {
            aeo: 0,
            fvn: 0,
            cgx: 0,
            wck: 0,
            stc: 0,
            ylm: 0,
            rzf: 0,
            hlr: 0,
            qll: 0
        },
        ebq: new gup(),
        bni: new gup(),
        gpt: new gup(5, 30, 150, 48),
        poy: new gup(689, 30, 106, 48),
        dzd: new gup(),
        rpx: {
            csi: new gup(675, 89, 120, 68),
            ell: new gup(486, 89, 100, 68),
            ehv: new gup(371, 89, 100, 68),
            edl: new gup(256, 89, 100, 68),
            anm: new gup(20, 89, 120, 68),
            qnq: new gup()
        },
        ihm: {
            csi: new gup(675, 89, 120, 68),
            ell: new gup(536, 89, 100, 68),
            bfi: new gup(426, 89, 100, 68),
            ehv: new gup(316, 89, 100, 68),
            edl: new gup(206, 89, 100, 68),
            anm: new gup(20, 89, 120, 68),
            qnq: new gup()
        },
        pcc: {
            csi: new gup(675, 89, 120, 68),
            anm: new gup(536, 89, 100, 68),
            ell: new gup(426, 89, 100, 68),
            ehv: new gup(316, 89, 100, 68),
            edl: new gup(206, 89, 100, 68),
            hni: new gup(30, 89, 100, 68),
            qnq: new gup()
        },
        qeu: {
            csi: new gup(678, 89, 120, 68),
            anm: new gup(576, 89, 90, 68),
            ell: new gup(476, 89, 90, 68),
            bfi: new gup(376, 89, 90, 68),
            ehv: new gup(276, 89, 90, 68),
            edl: new gup(176, 89, 90, 68),
            hni: new gup(35, 89, 90, 68),
            qnq: new gup()
        },
        azb: {
            csi: new gup(675, 89, 120, 68),
            anm: new gup(486, 89, 100, 68),
            ell: new gup(371, 89, 100, 68),
            ehv: new gup(256, 89, 100, 68),
            hni: new gup(30, 89, 100, 68),
            qnq: new gup()
        },
        apf: {
            csi: new gup(675, 89, 120, 68),
            anm: new gup(536, 89, 100, 68),
            ell: new gup(426, 89, 100, 68),
            bfi: new gup(316, 89, 100, 68),
            ehv: new gup(206, 89, 100, 68),
            hni: new gup(30, 89, 100, 68),
            qnq: new gup()
        },
        opr: {
            csi: new gup(675, 89, 120, 68),
            ell: new gup(486, 89, 100, 68),
            ehv: new gup(371, 89, 100, 68),
            edl: new gup(256, 89, 100, 68),
            anm: new gup(20, 89, 120, 68),
            qnq: new gup()
        },
        opt: {
            csi: new gup(675, 89, 120, 68),
            ell: new gup(536, 89, 100, 68),
            bfi: new gup(426, 89, 100, 68),
            ehv: new gup(316, 89, 100, 68),
            edl: new gup(206, 89, 100, 68),
            anm: new gup(20, 89, 120, 68),
            qnq: new gup()
        },
        xjp: {
            csi: new gup(675, 90, 120, 68),
            anm: new gup(20, 90, 120, 68),
            qnq: new gup()
        },
        wrx: {
            csi: new gup(675, 90, 120, 68),
            anm: new gup(20, 90, 120, 68),
            qnq: new gup()
        },
        hkh: 60
    };
    this.evi = {
        oue: new gup(40, 640, 720, 360),
        lineWidth: 4,
        xuq: 5,
        stc: 1,
        tsx: 136,
        nhw: 120,
        fontSize: 40,
        srl: 10,
        yjr: 5,
        mft: 100,
        sbq: 96,
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
    this.fhc = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940]
    ];
    this.top = {
        oue: new gup(0, 20, 800, 520)
    }
}
xml.prototype = new fia;

function phl() {
    this.enp = false;
    this.lcx = true;
    this.gic = true;
    this.uhd = {
        oue: new gup(160, 0, 800, 600),
        ape: 0,
        wzm: 0
    };
    this.vwh = {
        oue: new gup(0, 0, 1120, 600),
        wzm: 0,
        ape: 0
    };
    this.dou = {
        oue: new gup(200, 90, 136, 360),
        djv: new gup(40, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.wce = {
        oue: new gup(346, 90, 136, 360),
        djv: new gup(186, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.stl = {
        oue: new gup(492, 90, 136, 360),
        djv: new gup(332, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.lhh = {
        oue: new gup(638, 90, 136, 360),
        djv: new gup(478, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.vvn = {
        oue: new gup(784, 90, 136, 360),
        djv: new gup(624, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.svw = {
        oue: new gup(160, 0, 800, 86),
        fontSize: 50,
        nrh: 0,
        rzh: 6,
        dfz: 0,
        oqg: 2
    };
    this.dbn = {
        oue: new gup(160, 0, 800, 80),
        fontSize: 50,
        nrh: 0,
        rzh: 8,
        dfz: 0,
        oqg: 2
    };
    this.yfx = {
        oue: new gup(164, 90, 0, 0),
        bfi: [25, 65, 165, 265, 305],
        qyi: 30,
        dns: 30
    };
    this.dhc = {
        oue: new gup(926, 90, 0, 0),
        bfi: [25, 65, 165, 265, 305],
        qyi: 30,
        dns: 30
    };
    this.yib = {};
    this.tup = {};
    this.oxo = {
        oue: new gup(0, 0, 960, 600),
        faa: new gup(0, 0, 160, 600),
        edl: new gup(20, 400, 120, 120),
        lgj: new gup(),
        rrp: new gup(20, 50, 120, 120),
        agk: new gup(20, 225, 120, 120),
        sue: {
            cgx: 0,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            jau: 0,
            ibs: 16,
            stc: 4
        }
    };
    this.fgi = {
        oue: new gup(0, 0, 960, 600),
        faa: new gup(0, 0, 160, 600),
        fvi: {
            oue: new gup(385, 520, 390, 70),
            fontSize: 20,
            rzh: 14,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 2
        },
        nuu: {
            oue: new gup(491, 216, 137, 187),
            jgx: new gup(5, 8, 56, 34),
            fwo: new gup(37, 3, 98, 104),
            faj: new gup(33, 110, 72, 76),
            ymp: new gup(10, 42, 45, 45),
            duz: new gup(5, 120, 126, 50),
            fontSize: 34,
            bub: 50,
            dfz: 3,
            sxy: 4
        },
        xfn: {
            oue: new gup(540, 105, 380, 45),
            dto: 2
        },
        sue: {
            cgx: 24,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            ibs: 10,
            jau: 0,
            stc: 4
        },
        display: {
            aeo: -18,
            fvn: 16,
            cgx: 32,
            wck: 18,
            stc: 3,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        zvm: {
            aeo: 0,
            fvn: 0,
            cgx: 16,
            wck: 0,
            stc: 2,
            ylm: 0,
            rzf: 0,
            hlr: 0,
            qll: 0
        },
        ebq: new gup(0, 0, 160, 22),
        bni: new gup(0, 22, 160, 22),
        ftv: new gup(20, 325, 120, 120),
        onk: new gup(20, 125, 120, 120),
        duz: new gup(815, 520, 140, 70),
        apu: new gup(165, 520, 180, 70),
        bxh: new gup(233, 315, 91, 96),
        pio: new gup(326, 315, 91, 96),
        xum: new gup(702, 315, 91, 96),
        did: new gup(795, 315, 91, 96),
        yvl: new gup(233, 218, 184, 92),
        nmo: new gup(702, 218, 184, 92),
        cmd: new gup(225, 170, 200, 50),
        bst: new gup(669, 170, 250, 50),
        swg: new gup(694, 410, 200, 50)
    };
    this.znp = {
        oue: new gup(0, 0, 960, 600),
        xrt: new gup(160, 455, 800, 145),
        mhv: new gup(0, 0, 160, 600),
        fvi: {
            oue: new gup(385, 520, 390, 70),
            rzh: 14,
            fontSize: 24,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 2
        },
        win: {
            oue: new gup(205, 458, 710, 25),
            fontSize: 20,
            rzh: 4,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 0
        },
        bar: {
            oue: new gup(385, 520, 390, 70),
            eub: 10,
            fvn: 2,
            fontSize: 20,
            stc: 2,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        dmi: {
            cgx: 0,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            jau: 0,
            ibs: 10,
            stc: 4
        },
        rsf: {
            cgx: 0,
            bba: 20,
            nrh: 0,
            fvn: 0,
            sny: -30,
            jau: 0,
            ibs: 10,
            stc: 4
        },
        ish: {
            cgx: 0,
            bba: 24,
            nrh: 0,
            jau: 0,
            ibs: 10,
            stc: 6,
            fvn: 0,
            sny: -40
        },
        fyl: {
            cgx: 24,
            bba: 0,
            nrh: 0,
            jau: 10,
            ibs: 0,
            stc: 4,
            fvn: -2,
            sny: 0
        },
        ird: {
            jau: 6,
            nrh: 0,
            rzh: -1,
            ibs: 6,
            fontSize: 36,
            stc: 3
        },
        display: {
            aeo: -18,
            fvn: 16,
            cgx: 32,
            wck: 18,
            stc: 3,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        ggk: {
            aeo: 0,
            fvn: -40,
            cgx: 36,
            wck: 0,
            stc: 3,
            ylm: 10,
            rzf: 10,
            hlr: 0,
            qll: 0
        },
        zvm: {
            aeo: 0,
            fvn: 0,
            cgx: 16,
            wck: 0,
            stc: 2,
            ylm: 0,
            rzf: 0,
            hlr: 0,
            qll: 0
        },
        ebq: new gup(0, 0, 160, 22),
        bni: new gup(0, 22, 160, 22),
        gpt: new gup(165, 520, 180, 70),
        poy: new gup(815, 520, 140, 70),
        dzd: new gup(820, 400, 130, 120),
        krk: {
            csi: new gup(5, 210, 150, 150),
            ell: new gup(815, 495, 140, 30),
            bfi: new gup(),
            ehv: new gup(),
            edl: new gup(20, 400, 120, 120),
            anm: new gup(),
            qnq: new gup(20, 50, 120, 120)
        },
        ufh: {
            csi: new gup(5, 260, 140, 140),
            ell: new gup(815, 495, 140, 30),
            bfi: new gup(),
            ehv: new gup(),
            edl: new gup(15, 50, 80, 80),
            anm: new gup(10, 140, 110, 110),
            qnq: new gup(10, 410, 110, 110)
        },
        hkh: 60
    };
    this.evi = {
        oue: new gup(200, 90, 720, 360),
        lineWidth: 4,
        xuq: 5,
        stc: 1,
        tsx: 136,
        nhw: 120,
        fontSize: 40,
        srl: 10,
        yjr: 5,
        mft: 100,
        sbq: 96,
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
    this.fhc = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390]
    ]
}
phl.prototype = new bvv;

function awi() {
    this.enp = false;
    this.lcx = true;
    this.gic = true;
    this.uhd = {
        oue: new gup(0, 0, 800, 600),
        ape: 0,
        wzm: -160
    };
    this.vwh = {
        oue: new gup(-160, 0, 1120, 600),
        wzm: 160,
        ape: 0
    };
    this.dou = {
        oue: new gup(40, 90, 136, 360),
        djv: new gup(40, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.wce = {
        oue: new gup(186, 90, 136, 360),
        djv: new gup(186, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.stl = {
        oue: new gup(332, 90, 136, 360),
        djv: new gup(332, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.lhh = {
        oue: new gup(478, 90, 136, 360),
        djv: new gup(478, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.vvn = {
        oue: new gup(624, 90, 136, 360),
        djv: new gup(624, 90, 136, 360),
        msi: 30,
        vum: 30
    };
    this.svw = {
        oue: new gup(0, 0, 800, 86),
        fontSize: 50,
        nrh: 0,
        rzh: 6,
        dfz: 0,
        oqg: 2
    };
    this.dbn = {
        oue: new gup(0, 0, 800, 80),
        fontSize: 50,
        nrh: 0,
        rzh: 8,
        dfz: 0,
        oqg: 2
    };
    this.yfx = {
        oue: new gup(4, 90, 0, 0),
        bfi: [25, 65, 165, 265, 305],
        qyi: 30,
        dns: 30
    };
    this.dhc = {
        oue: new gup(766, 90, 0, 0),
        bfi: [25, 65, 165, 265, 305],
        qyi: 30,
        dns: 30
    };
    this.yib = {};
    this.tup = {};
    this.oxo = {
        oue: new gup(0, 0, 960, 600),
        faa: new gup(800, 0, 160, 600),
        edl: new gup(820, 400, 120, 120),
        lgj: new gup(),
        rrp: new gup(820, 50, 120, 120),
        agk: new gup(820, 225, 120, 120),
        sue: {
            cgx: 0,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            jau: 0,
            ibs: 16,
            stc: 4
        }
    };
    this.fgi = {
        oue: new gup(0, 0, 960, 600),
        faa: new gup(800, 0, 160, 600),
        fvi: {
            oue: new gup(225, 520, 390, 70),
            fontSize: 20,
            rzh: 14,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 2
        },
        nuu: {
            oue: new gup(331, 216, 137, 187),
            jgx: new gup(5, 8, 56, 34),
            fwo: new gup(37, 3, 98, 104),
            faj: new gup(33, 110, 72, 76),
            ymp: new gup(10, 42, 45, 45),
            duz: new gup(5, 120, 126, 50),
            fontSize: 34,
            bub: 50,
            dfz: 3,
            sxy: 4
        },
        xfn: {
            oue: new gup(380, 105, 380, 45),
            dto: 2
        },
        sue: {
            cgx: 24,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            ibs: 10,
            jau: 0,
            stc: 4
        },
        display: {
            aeo: -18,
            fvn: 16,
            cgx: 32,
            wck: 18,
            stc: 3,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        zvm: {
            aeo: 0,
            fvn: 0,
            cgx: 16,
            wck: 0,
            stc: 2,
            ylm: 0,
            rzf: 0,
            hlr: 0,
            qll: 0
        },
        ebq: new gup(800, 0, 160, 22),
        bni: new gup(800, 22, 160, 22),
        ftv: new gup(820, 325, 120, 120),
        onk: new gup(820, 125, 120, 120),
        duz: new gup(655, 520, 140, 70),
        apu: new gup(5, 520, 180, 70),
        bxh: new gup(73, 315, 91, 96),
        pio: new gup(166, 315, 91, 96),
        xum: new gup(542, 315, 91, 96),
        did: new gup(635, 315, 91, 96),
        yvl: new gup(73, 218, 184, 92),
        nmo: new gup(542, 218, 184, 92),
        cmd: new gup(65, 170, 200, 50),
        bst: new gup(509, 170, 250, 50),
        swg: new gup(534, 410, 200, 50)
    };
    this.znp = {
        oue: new gup(0, 0, 960, 600),
        xrt: new gup(0, 455, 800, 145),
        mhv: new gup(800, 0, 160, 600),
        fvi: {
            oue: new gup(225, 520, 390, 70),
            rzh: 14,
            fontSize: 24,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 2
        },
        win: {
            oue: new gup(45, 458, 710, 25),
            fontSize: 20,
            rzh: 4,
            jau: 3,
            fom: 2,
            ibs: 6,
            stc: 0
        },
        bar: {
            oue: new gup(225, 520, 390, 70),
            eub: 10,
            fvn: 2,
            fontSize: 20,
            stc: 2,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        dmi: {
            cgx: 0,
            bba: 0,
            nrh: 0,
            fvn: 0,
            sny: 0,
            jau: 0,
            ibs: 10,
            stc: 4
        },
        rsf: {
            cgx: 0,
            bba: 20,
            nrh: 0,
            fvn: 0,
            sny: -30,
            jau: 0,
            ibs: 10,
            stc: 4
        },
        ish: {
            cgx: 0,
            bba: 24,
            nrh: 0,
            jau: 0,
            ibs: 10,
            stc: 6,
            fvn: 0,
            sny: -40
        },
        fyl: {
            cgx: 24,
            bba: 0,
            nrh: 0,
            jau: 10,
            ibs: 0,
            stc: 4,
            fvn: -2,
            sny: 0
        },
        ird: {
            jau: 6,
            nrh: 0,
            rzh: -1,
            ibs: 6,
            fontSize: 36,
            stc: 3
        },
        display: {
            aeo: -18,
            fvn: 16,
            cgx: 32,
            wck: 18,
            stc: 3,
            ylm: 3,
            rzf: 3,
            hlr: 3,
            qll: 3
        },
        ggk: {
            aeo: 0,
            fvn: -40,
            cgx: 36,
            wck: 0,
            stc: 3,
            ylm: 10,
            rzf: 10,
            hlr: 0,
            qll: 0
        },
        zvm: {
            aeo: 0,
            fvn: 0,
            cgx: 16,
            wck: 0,
            stc: 2,
            ylm: 0,
            rzf: 0,
            hlr: 0,
            qll: 0
        },
        ebq: new gup(800, 0, 160, 22),
        bni: new gup(800, 22, 160, 22),
        gpt: new gup(5, 520, 180, 70),
        poy: new gup(655, 520, 140, 70),
        dzd: new gup(660, 400, 130, 120),
        krk: {
            csi: new gup(805, 210, 150, 150),
            ell: new gup(655, 495, 140, 30),
            bfi: new gup(),
            ehv: new gup(),
            edl: new gup(820, 400, 120, 120),
            anm: new gup(),
            qnq: new gup(820, 50, 120, 120)
        },
        ufh: {
            csi: new gup(815, 260, 140, 140),
            ell: new gup(655, 495, 140, 30),
            bfi: new gup(),
            ehv: new gup(),
            edl: new gup(865, 50, 80, 80),
            anm: new gup(840, 140, 110, 110),
            qnq: new gup(840, 410, 110, 110)
        },
        hkh: 60
    };
    this.evi = {
        oue: new gup(40, 90, 720, 360),
        lineWidth: 4,
        xuq: 5,
        stc: 1,
        tsx: 136,
        nhw: 120,
        fontSize: 40,
        srl: 10,
        yjr: 5,
        mft: 100,
        sbq: 96,
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
    this.fhc = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390]
    ]
}
awi.prototype = new vnd;

function muo() {
    this.oxo.win = {
        oue: new gup(0, 0, 800, 600),
        hwx: new gup(),
        fontSize: 20,
        wck: 40,
        lineWidth: 1,
        jgx: [new gup(10, 425, 780, 42)]
    };
    this.oxo.iog = {
        oue: new gup(0, 0, 800, 600),
        hwx: new gup(),
        fontSize: 16,
        ckz: 30,
        wck: 40,
        iur: 12,
        lineWidth: 1,
        buy: new gup(20, 500, 760, 30),
        jgx: [],
        duz: [new gup(380, 48, 125, 150), new gup(120, 43, 135, 122), new gup(635, 43, 135, 122), new gup(90, 203, 153, 122), new gup(625, 203, 153, 122), new gup(90, 363, 153, 122), new gup(625, 358, 153, 122), new gup(358, 363, 153, 122)]
    }
}
muo.prototype = new lyj;

function gpr() {
    this.nrw = true
}
gpr.prototype = new muo;

function iaq() {
    this.oxo.win = {
        oue: new gup(0, 0, 800, 615),
        hwx: new gup(),
        fontSize: 20,
        wck: 40,
        lineWidth: 1,
        jgx: [new gup(10, 425, 780, 42)]
    };
    this.oxo.iog = {
        oue: new gup(0, 0, 800, 615),
        hwx: new gup(),
        fontSize: 16,
        ckz: 30,
        wck: 40,
        iur: 12,
        lineWidth: 1,
        buy: new gup(20, 500, 760, 30),
        jgx: [],
        duz: [new gup(380, 48, 125, 150), new gup(120, 43, 135, 122), new gup(635, 43, 135, 122), new gup(90, 203, 153, 122), new gup(625, 203, 153, 122), new gup(90, 363, 153, 122), new gup(625, 358, 153, 122), new gup(358, 363, 153, 122)]
    };
    this.top.iog = {
        oue: new gup(0, 0, 800, 520),
        hwx: new gup(),
        fontSize: 16,
        ckz: 30,
        wck: 40,
        iur: 12,
        lineWidth: 1,
        buy: new gup(20, 486, 760, 30),
        jgx: [],
        duz: [new gup(380, 38, 125, 154), new gup(120, 32, 135, 124), new gup(635, 32, 135, 124), new gup(90, 192, 153, 124), new gup(625, 192, 153, 124), new gup(90, 352, 153, 124), new gup(625, 346, 153, 126), new gup(358, 352, 153, 124)]
    }
}
iaq.prototype = new xml;

function sfb() {
    this.oxo.win = {
        oue: new gup(160, 0, 800, 600),
        hwx: new gup(),
        fontSize: 20,
        wck: 40,
        lineWidth: 1,
        jgx: [new gup(10, 425, 780, 42)]
    };
    this.oxo.iog = {
        oue: new gup(160, 0, 800, 600),
        hwx: new gup(),
        fontSize: 16,
        ckz: 30,
        wck: 40,
        iur: 14,
        lineWidth: 1,
        buy: new gup(0, 520, 800, 40),
        jgx: [],
        duz: [new gup(380, 48, 125, 150), new gup(120, 43, 135, 122), new gup(635, 43, 135, 122), new gup(90, 203, 153, 122), new gup(625, 203, 153, 122), new gup(90, 363, 153, 122), new gup(625, 358, 153, 122), new gup(358, 363, 153, 122)]
    }
}
sfb.prototype = new phl;

function vtc() {
    this.oxo.win = {
        oue: new gup(0, 0, 800, 600),
        hwx: new gup(),
        fontSize: 20,
        wck: 40,
        lineWidth: 1,
        jgx: [new gup(10, 425, 780, 42)]
    };
    this.oxo.iog = {
        oue: new gup(0, 0, 800, 600),
        hwx: new gup(),
        fontSize: 16,
        ckz: 30,
        wck: 40,
        iur: 14,
        lineWidth: 1,
        buy: new gup(0, 520, 800, 40),
        jgx: [],
        duz: [new gup(380, 48, 125, 150), new gup(120, 43, 135, 122), new gup(635, 43, 135, 122), new gup(90, 203, 153, 122), new gup(625, 203, 153, 122), new gup(90, 363, 153, 122), new gup(625, 358, 153, 122), new gup(358, 363, 153, 122)]
    }
}
vtc.prototype = new awi;
var bva = {
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
    igo: {
        eqs: 0,
        jkw: 1,
        tuh: 2,
        qic: 3,
        tkz: 4,
        cqr: 5,
        yzd: 10,
        cek: 11,
        ukb: 12,
        buf: 13,
        ndm: 14,
        jui: 15,
        xrv: 16
    },
    os: {
        dfl: 0,
        wuv: 1,
        mkz: 2,
        zgr: 3,
        nik: 4
    },
    uhn: {
        uum: 1,
        tzn: 3,
        mkq: 4,
        qnf: 5,
        zjz: 7,
        hog: 8,
        udt: 11,
        cnt: 13,
        fbi: 14,
        opd: 6,
        xhx: 9,
        hau: 10
    },
    qfw: {
        ijd: 1,
        vom: 2,
        eei: 4,
        tmc: 8,
        lty: 16,
        vit: 32
    },
    pdb: {
        iql: 1,
        kml: 2,
        ddk: 3,
        mdw: 4,
        oeb: 5,
        ztr: 6,
        xdj: 7,
        sey: 94,
        lbh: 95,
        gfv: 96,
        bcj: 97,
        rei: 98,
        bab: 99,
        roulette: {
            gxf: 2,
            ocv: 9,
            mlo: 10
        }
    },
    ui: {
        ojj: "minimal",
        wkn: "modern",
        mkq: "classic"
    },
    xoc: {
        xny: "auto",
        cil: "left",
        xzx: "right"
    },
    bmy: {
        ung: 0,
        xov: 4
    },
    tyt: {
        tme: {
            puq: "ji",
            xmw: "jv",
            pzy: "jh"
        }
    },
    ols: {
        wku: {
            mtp: 1,
            wmy: 2
        },
        ijk: {
            aut: 1,
            xif: 2,
            cii: 3
        }
    }
};
bva.fcq = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += bva.qfw.ijd
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += bva.qfw.vom
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += bva.qfw.eei
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += bva.qfw.eei
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += bva.qfw.tmc
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.yyw = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.yyw();
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
            window.xpv = window.requestAnimationFrame;
            window.coe = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.xpv; ++a) {
            window.xpv = window[g[a] + "RequestAnimationFrame"];
            window.coe = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.xpv || !window.coe) {
            window.xpv = function(m, j) {
                var e = new Date().getTime();
                var k = Math.max(0, 16 - (e - d));
                var l = window.setTimeout(function() {
                    m(e + k)
                }, k);
                d = e + k;
                return l
            }
        }
        if (!window.coe) {
            window.coe = function(e) {
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
        console.error(c.pdb)
    }
    return f
})();

function hta() {
    var a = {};
    this.aem = 1;
    this.omk = 1;
    this.jyx = 0.6;
    this.gvx = 0.4;
    this.uwa = function() {};
    this.erk = function(b, c) {
        a[b] = c
    };
    this.nfe = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.aem
        }
    }
}

function xho() {
    this.audio = {
        vmm: 65,
        cyz: -1,
        value: "A",
        ikg: null
    };
    this.zdw = {
        vmm: 70,
        cyz: 122,
        value: "F",
        ikg: "F11"
    };
    this.xfn = {
        vmm: 72,
        cyz: -1,
        value: "H",
        ikg: null
    };
    this.bml = {
        vmm: 83,
        cyz: -1,
        value: "S",
        ikg: null
    };
    this.iew = {
        vmm: 68,
        cyz: -1,
        value: "D",
        ikg: null
    };
    this.ok = {
        vmm: 13,
        cyz: -1,
        value: "OK",
        ikg: null
    };
    this.bfz = [this.audio, this.zdw, this.xfn, this.bml, this.iew, this.ok]
}

function ofb() {
    var p = this;
    this.mde = false;
    this.jdp = null;
    this.rkt = false;
    this.qmj = false;
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
    this.uwa = function() {
        this.rnl();
        this.xwb();
        this.rkt = false;
        this.qmj = false
    };
    this.rnl = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.jdp = webAudioEngine.createGain();
            this.jdp.connect(webAudioEngine.destination);
            this.mde = true
        } catch (q) {
            this.mde = false
        }
    };
    this.xwb = function() {
        n = bva.kgg.cxg()
    };
    this.ved = function(q) {
        m = q
    };
    this.rww = function(q) {
        c = q
    };
    this.ydq = function(u, t, q, r) {
        var s = new wlg(u);
        s.uwa(this.mde, t, q, m.nfe(u));
        j[u] = s;
        l.push(s);
        d.push({
            bqh: s,
            vzg: r,
            xey: p.wkx,
            wqm: n
        })
    };
    this.ajx = function(s, r) {
        var q = new Image();
        f[s] = q;
        d.push({
            bqh: q,
            vzg: r,
            xey: null
        })
    };
    this.ovc = function(r, q) {
        d.unshift({
            bqh: null,
            vzg: r,
            xey: p.cyb,
            vdw: q
        })
    };
    this.dip = function() {
        o = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            p.zrd(d.shift())
        }
    };
    this.start = function() {
        if (!p.rkt) {
            return
        }
        p.rkt = false;
        o = false;
        g = d.length;
        b = 0;
        k = 1;
        for (var r = 0; r < k && d.length > 0; r++) {
            a.push(d.shift())
        }
        for (var q = 0; q < a.length; q++) {
            p.zrd(a.shift())
        }
    };
    this.geh = function() {
        b++;
        if (p.fhl()) {
            p.rkt = true;
            bva.mij.szz()
        }
    };
    this.ikh = function() {
        p.xwr()
    };
    this.hbz = function() {
        p.qmj = true;
        p.xwr()
    };
    this.xwr = function() {
        b++;
        p.ihi();
        if (p.fhl()) {
            p.rrd()
        } else {
            p.pkb()
        }
    };
    this.ihi = function() {
        var q = bva.mij.xqp.whx("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (q) {
                q.egc(e)
            }
        }
    };
    this.rrd = function() {
        var s = bva.mij.xqp.whx("loading");
        if (p.qmj) {
            bva.mij.ogm(bva.mij.language.eku);
            var q = confirm(bva.mij.language.rpy);
            if (q == true) {
                bva.mij.tgt = false;
                p.iac();
                bva.mij.hiz()
            } else {
                bva.mij.mno({
                    type: "gameDataLoaded",
                    sender: bva.mij.hdt,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                });
                setTimeout(bva.mij.zhe, 1000)
            }
        } else {
            if (!bva.mij.pig) {
                e = 100;
                if (s) {
                    s.egc(e)
                }
                if (c === true) {
                    s.kvk()
                } else {
                    setTimeout(bva.mij.hiz, 200)
                }
            }
        }
    };
    this.bzd = function() {
        return e
    };
    this.pkb = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (k === 1 && (a[0].bqh instanceof Image || a[0].bqh instanceof wlg)) {
                k = 30;
                for (var q = 0; q < k && d.length > 0; q++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            p.zrd(a.shift())
        }
    };
    this.fhl = function() {
        return (g > 0 && b == g)
    };
    this.zrd = function(q) {
        if (q.bqh instanceof Image) {
            if (o === true) {
                this.knc(q.bqh, q.vzg)
            } else {
                this.qjw(q.bqh, q.vzg)
            }
        } else {
            if (q.bqh instanceof wlg) {
                this.txi(q.bqh, q.vzg, q.xey, q.wqm)
            } else {
                this.jwx(q.vzg, q.vdw, q.xey)
            }
        }
    };
    this.knc = function(r, q) {
        r.onload = function() {
            bva.mij.eyo.geh()
        };
        r.onerror = function() {
            console.error("can not load image " + q)
        };
        r.src = q + "?v=" + bva.mij.hpk
    };
    this.qjw = function(r, q) {
        r.onload = function() {
            bva.mij.eyo.ikh()
        };
        r.onerror = function() {
            console.error("can not load image " + q);
            bva.mij.ogm(bva.mij.language.aog);
            setTimeout(bva.mij.zhe, 3000)
        };
        r.src = q + "?v=" + bva.mij.hpk
    };
    this.txi = function(r, s, t, q) {
        r.load(s, t, q)
    };
    this.jwx = function(t, q, u) {
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
            bva.mij.ogm(bva.mij.language.aog);
            setTimeout(bva.mij.zhe, 3000)
        };
        try {
            r.send()
        } catch (s) {
            console.error("can not load from " + t + q);
            bva.mij.ogm(bva.mij.language.aog);
            setTimeout(bva.mij.zhe, 3000)
        }
    };
    this.wkx = function(r, q) {
        j[r].sqw = q
    };
    this.cyb = function(s, r) {
        var q = new Image();
        q.onload = function() {
            p.kdk(q, r.data)
        };
        q.onerror = function() {
            console.error("can not load image " + s + r.src);
            bva.mij.ogm(bva.mij.language.aog);
            setTimeout(bva.mij.zhe, 3000)
        };
        q.src = s + r.src + "?v=" + bva.mij.hpk
    };
    this.kdk = function(s, v) {
        var t = null,
            r = null;
        for (var u = 0, q = v.length; u < q; u++) {
            t = document.createElement("canvas");
            t.width = v[u].rect.w;
            t.height = v[u].rect.h;
            r = t.getContext("2d");
            r.drawImage(s, v[u].rect.x, v[u].rect.y, v[u].rect.w, v[u].rect.h, 0, 0, v[u].rect.w, v[u].rect.h);
            p.yct(v[u].id, t)
        }
        bva.mij.eyo.ikh()
    };
    this.onv = function(q) {
        if (j && j[q]) {
            return j[q]
        } else {}
        return null
    };
    this.yct = function(r, q) {
        if (q && !f[r]) {
            f[r] = q
        } else {}
        return null
    };
    this.jgz = function(q) {
        if (f[q]) {
            return f[q]
        } else {}
        return null
    };
    this.kyq = function(q) {
        if (!j) {
            return 0
        }
        var r = 0,
            s = true;
        while (s) {
            if (j[q + r]) {
                r++
            } else {
                s = false
            }
        }
        return r
    };
    this.pnx = function(q) {
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
    this.urt = function(r, q) {
        if (j && j[r]) {
            j[r].play(q)
        } else {}
    };
    this.zqb = function(q) {
        if (j && j[q]) {
            j[q].stop()
        } else {}
    };
    this.vrg = function(r, q) {
        if (j && j[r]) {
            j[r].poi(q)
        } else {}
    };
    this.rll = function(t, r, s, q) {
        q = (q != null && q === true);
        if (j && j[t]) {
            j[t].qin(m.nfe(t) * r, s, q)
        }
    };
    this.voy = function(q) {
        if (j && j[q]) {
            return j[q].qhj()
        }
        return 0
    };
    this.dvr = function(q) {
        if (this.mde) {
            this.jdp.gain.setValueAtTime(q, webAudioEngine.currentTime)
        }
    };
    this.jql = function(r) {
        if (this.mde) {
            this.jdp.gain.setValueAtTime((r) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (l) {
                for (var q = 0; q < l.length; q++) {
                    l[q].poi(r)
                }
            }
        }
    };
    this.iac = function() {
        if (l) {
            for (var q = 0; q < l.length; q++) {
                l[q].clear()
            }
        }
        l = null;
        j = null
    }
}

function rch() {
    this.aby = {};
    this.hqo = {};
    this.rok = [];
    this.uwa = function() {
        this.aby = {};
        this.hqo = {};
        this.rok = []
    };
    this.knm = function(b) {
        this.aby[b] = b
    };
    this.mzx = function(f, e, d) {
        this.hqo[f] = e;
        this.hqo[f].uin = [];
        if (d && this.aby) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.aby[d[c]]) {
                    this.hqo[f].uin.push(d[c])
                } else {}
            }
        }
        this.rok.push(this.hqo[f])
    };
    this.icz = function() {
        var c = [];
        for (var d = 0, b = this.rok.length; d < b; d++) {
            if (this.rok[d] != null) {
                c.push(this.rok[d])
            }
        }
        return c
    };
    this.whx = function(b) {
        if (this.hqo && this.hqo[b]) {
            return this.hqo[b]
        }
        return null
    };
    this.jkd = function(g) {
        if (this.aby && this.aby[g]) {
            var d = [];
            for (var f = 0, b = this.rok.length; f < b; f++) {
                for (var e = 0, c = this.rok[f].uin.length; e < c; e++) {
                    if (this.rok[f].uin[e] == g) {
                        d.push(this.rok[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.kyo = function() {
        return this.aby
    };
    this.nai = function(e) {
        var d = -1;
        if (this.hqo && this.hqo[e]) {
            for (var c = 0, b = this.rok.length; c < b; c++) {
                if (this.rok[c] == this.hqo[e]) {
                    d = c;
                    this.hqo[e] = null
                }
            }
        }
        if (d >= 0) {
            this.rok.splice(d, 1)
        }
    };
    this.aef = function(f) {
        if (this.aby && this.aby[f]) {
            this.aby[f] = null;
            for (var e = 0, b = this.rok.length; e < b; e++) {
                for (var d = 0, c = this.rok[e].uin.length; d < c; d++) {
                    if (this.rok[e].uin[d] == f) {
                        this.rok[e].uin.splice(d, 1)
                    }
                }
            }
        }
    };
    this.mom = function(e, d, c, b) {
        return a(this.whx(e), d, c, b)
    };
    this.mpt = function(f, d, c) {
        for (var e = 0, b = this.rok.length; e < b; e++) {
            a(this.rok[e], f, d, c)
        }
    };
    this.hui = function(k, l, f, e) {
        if (this.aby && this.aby[k]) {
            for (var g = 0, b = this.rok.length; g < b; g++) {
                for (var d = 0, c = this.rok[g].uin.length; d < c; d++) {
                    if (this.rok[g].uin[d] == k) {
                        a(this.rok[g], l, f, e)
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

function wlg(b) {
    var a = this;
    this.dfe = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.ioz = false;
    this.sqw = null;
    this.fnv = null;
    this.ifh = 0;
    this.fxg = 0;
    this.zuf = 0;
    this.gka = 0;
    this.wov = 30000;
    this.hjf = "";
    this.tnk = "";
    this.hbu = "";
    this.rxp = null;
    this.mjy = 1;
    this.udp = 0;
    this.kvf = -1;
    this.uhy = 0;
    this.llg = 0;
    this.yld = false;
    this.uwa = function(c, f, d, e) {
        this.ioz = c;
        if (e) {
            this.mjy = e;
            this.volume = e
        }
        if (f) {
            this.dfe = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.ioz) {
            clearTimeout(this.kvf);
            if (this.sqw) {
                this.volume = (this.muted === true) ? 0 : bva.uug.value40 * this.mjy;
                this.yld = false;
                this.fnv = webAudioEngine.createBufferSource();
                this.fnv.buffer = this.sqw;
                this.fnv.loop = this.loop;
                this.ifh = webAudioEngine.createGain();
                this.ifh.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.fnv.connect(this.ifh);
                this.ifh.connect(bva.mij.eyo.jdp);
                this.fnv.start(0, c);
                this.udp = webAudioEngine.currentTime;
                if (this.dfe) {
                    this.fxg = setTimeout(a.dfe, a.sqw.duration * 1000)
                }
            }
        } else {
            if (this.fnv) {
                if (this.loop) {
                    if (bva.kgg.bxp != bva.igo.tkz && bva.kgg.bxp != bva.igo.ndm) {
                        this.zuf = setInterval(a.nuv, a.fnv.duration * 1000)
                    }
                }
                this.fnv.currentTime = 0;
                this.fnv.play()
            }
        }
    };
    this.nuv = function() {
        if (!a.fnv.paused || (bva.kgg.bxp != bva.igo.tuh && bva.kgg.bxp != bva.igo.ukb)) {
            a.fnv.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.ioz) {
                a.udp = 0;
                if (a.fnv) {
                    a.fnv.stop(0);
                    a.fnv = null
                }
                clearTimeout(a.fxg);
                if (a.kvf >= 0) {
                    clearTimeout(a.kvf);
                    a.kvf = -1
                }
            } else {
                if (a.fnv) {
                    a.fnv.currentTime = 0;
                    a.fnv.pause();
                    clearInterval(a.zuf);
                    if (a.kvf >= 0) {
                        clearTimeout(a.kvf);
                        a.kvf = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.hjf = d[0];
        if (d.length >= 2) {
            this.tnk = d[1];
            this.hbu = e;
            this.rxp = c
        }
        e += this.hjf + "?v=" + bva.mij.hpk;
        if (this.ioz) {
            this.zcc(e, c)
        } else {
            this.glz(e)
        }
    };
    this.pdj = function() {
        if (this.ioz) {
            this.zcc(this.hbu + this.tnk + "?v=" + bva.mij.hpk, this.rxp)
        }
    };
    this.glz = function(c) {
        this.fnv = new Audio();
        this.gka = setTimeout(function() {
            console.error("can not load audio " + c);
            bva.mij.eyo.hbz()
        }, this.wov);
        this.fnv.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.gka);
            bva.mij.eyo.ikh();
            a.nbu()
        }, false);
        this.fnv.addEventListener("error", function() {
            clearTimeout(a.gka);
            console.error("can not load audio " + c);
            bva.mij.eyo.hbz()
        }, false);
        this.fnv.volume = bva.uug.value40 * this.volume;
        this.fnv.src = c;
        this.fnv.load()
    };
    this.zcc = function(f, g) {
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
                bva.mij.eyo.ikh()
            }, function() {
                a.bre("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.bre("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.bre("can not load audio from ", f)
        }
    };
    this.bre = function(d, c) {
        console.error(d + c);
        if (a.tnk != "" && c.indexOf(a.tnk) < 0) {
            a.pdj()
        } else {
            bva.mij.eyo.hbz()
        }
    };
    this.rqt = function(c) {
        this.dfe = c;
        this.nbu()
    };
    this.nbu = function() {
        if (!this.ioz) {
            if (this.dfe) {
                if (this.fnv) {
                    this.fnv.addEventListener("ended", function() {
                        a.dfe()
                    }, false)
                }
            }
            if (bva.kgg.bxp == bva.igo.tkz || bva.kgg.bxp == bva.igo.ndm) {
                if (this.loop) {
                    if (this.fnv) {
                        this.fnv.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.xtb = function() {
        if (!this.ytq) {
            if (this.dfe) {
                if (this.fnv) {
                    this.fnv.removeEventListener("ended", function() {
                        a.dfe()
                    }, false)
                }
            }
            if (bva.kgg.bxp == bva.igo.tkz || bva.kgg.bxp == bva.igo.ndm) {
                if (this.loop) {
                    if (this.fnv) {
                        this.fnv.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.qin = function(d, e, c) {
        if (this.ioz === true && this.ifh) {
            this.volume = (this.muted === true) ? 0 : bva.uug.value40 * d * this.mjy;
            if (e > 0) {
                this.ifh.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.ifh.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.kvf = setTimeout(this.stop, e)
            }
        } else {
            if (!this.ioz && c === true) {
                this.kvf = setTimeout(this.stop, e)
            }
        }
    };
    this.poi = function(c) {
        this.muted = c;
        if (!this.ioz) {
            if (this.fnv && this.fnv.readyState > 0) {
                this.fnv.muted = c
            }
        } else {
            if (this.ifh) {
                this.ifh.gain.linearRampToValueAtTime((this.muted === true) ? 0 : bva.uug.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.ioz) {
            if (this.fnv) {
                this.fnv.stop(0);
                clearTimeout(this.fxg);
                this.fnv = null
            }
        } else {
            if (this.fnv && this.fnv.readyState > 0) {
                this.fnv.currentTime = 0;
                this.fnv.pause();
                if (this.dfe) {
                    this.xtb(this.dfe)
                }
                this.fnv = null
            }
        }
    };
    this.qhj = function() {
        if (this.ioz && this.udp > 0) {
            return (webAudioEngine.currentTime - this.udp) % this.sqw.duration
        }
        return 0
    }
}

function ivj() {
    var a = null;
    this.vnv = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.vnv = c;
        b = new WebSocket(this.vnv);
        b.onopen = function(d) {
            a.uvt(d)
        };
        b.onclose = function(d) {
            a.jzm(d)
        };
        b.onmessage = function(d) {
            a.zyh(d)
        };
        b.onerror = function(d) {
            a.xic(d)
        }
    };
    this.ylh = function(c) {};
    this.bce = function(c) {
        b.send(c)
    };
    this.uvt = function(c) {
        this.bce("A/u25vlt")
    };
    this.jzm = function(c) {};
    this.zyh = function(c) {
        this.ylh(c.data)
    };
    this.xic = function(c) {}
}

function wie() {
    var b = null;
    this.lri = null;
    this.fcq = 0;
    this.efk = -1;
    this.pdb = -1;
    this.xtq = -1;
    this.ftf = 0;
    this.vnv = "";
    this.qxl = "";
    this.jmw = "";
    this.rua = "";
    this.hdt = "";
    this.hpk = "";
    this.prw = "";
    this.rhm = "";
    this.bas = [];
    this.sxf = [];
    this.szl = [];
    this.sxc = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.uwa = function(j) {
        this.lri = j;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.vnv);
        c.onopen = function(k) {
            b.uvt(k)
        };
        c.onclose = function(k) {
            b.jzm(k)
        };
        c.onmessage = function(k) {
							
				
				
			var tmpA=k.data.split("_");
			
			if(tmpA[1]!=undefined){
			gameController.reels=JSON.parse(tmpA[1]);
			}
			k.data=tmpA[0];
            b.zyh(k)
        };
        c.onerror = function(k) {
            b.xic(k)
        }
    };
    this.vvg = function(j) {
        var k = parseInt(j.charAt(this.ftf), 16);
        this.ftf++;
        return k
    };
    this.scj = function(j) {
        var l = 0;
        var k = j.charAt(this.ftf);
        k += j.charAt(this.ftf + 1);
        this.ftf += 2;
        l = parseInt(k, 16);
        return l
    };
    this.vjk = function(m) {
        var j = this.juv(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.ftf), 16);
            this.ftf += 1
        }
        return n
    };
    this.juv = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.ftf), 16);
        this.ftf++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.ftf);
            this.ftf += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.prj = function(j) {
        var k = "";
        if (this.ftf < j.length) {
            k = j.substring(this.ftf, j.length)
        }
        return k
    };
    this.ylh = function(j) {};
    this.dvp = function(o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === bva.tyt.tme.puq || u === bva.tyt.tme.xmw) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === bva.tyt.tme.puq && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.bas[p] = {
                                ywa: t[0],
                                value: Number(t[1]),
                                pes: t[2]
                            };
                            if (t.length >= 5) {
                                this.bas[p].pyw = t[3];
                                this.bas[p].poh = t[4]
                            }
                        }
                    } else {
                        if (u === bva.tyt.tme.xmw && t.length >= 2) {
                            for (var p = 0, r = this.bas.length; p < r; p++) {
                                if (this.bas[p].ywa === t[0]) {
                                    this.bas[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === bva.tyt.tme.puq) {
                    s = [];
                    for (var p = 0, r = this.bas.length; p < r; p++) {
                        s.push({
                            ywa: this.bas[p].ywa,
                            value: (Number)(this.bas[p].ywa.split("_")[1])
                        })
                    }
                    s.sort(function(v, j) {
                        return v.value - j.value
                    });
                    for (var p = 0, r = this.bas.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.bas[p].ywa == s[n].ywa) {
                                this.bas[p].oue = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === bva.tyt.tme.xmw) {
                        this.lri.jlj(this.bas)
                    }
                }
            } else {
                if (u === bva.tyt.tme.pzy) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            ywa: t[0],
                            value: Number(t[1]),
                            pwr: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.qxl = t[3];
                            q.ulo = t[4]
                        }
                        this.lri.qru(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.lri.yfn.sdi()
        } else {
            b.bce("A/u260");
            if (bva.uug.value66 > 0) {
                setTimeout(b.nub, bva.uug.value66)
            }
        }
    };
    this.bfd = function(j) {
        if (this.lri.yfn.zjj) {
            setTimeout(function() {
                window.location.reload()
            }, j)
        } else {
            this.lri.yfn.uni(e);
            setTimeout(function() {
                if (e < bva.uug.value46) {
                    b.lri.yfn.connect();
                    e++
                } else {
                    b.lri.yfn.owo()
                }
            }, j)
        }
    };
    this.cls = function() {
        return g
    };
    this.czd = function() {
        g = true;
        d = true;
        this.bce("A/u260");
        if (bva.uug.value66 > 0) {
            setTimeout(this.nub, bva.uug.value66)
        }
    };
    this.xvq = function() {
        g = true;
        f = true;
        this.bce("A/u260");
        if (bva.uug.value66 > 0) {
            setTimeout(this.nub, bva.uug.value66)
        }
    };
    this.uvt = function(j) {
        var k = -(new Date().getTimezoneOffset() / 60),
            n = window.navigator.userLanguage || window.navigator.language,
            m = (bva.mij) ? bva.kgg.bxp + "|" + bva.mij.ngk + "|" + k + "|" + n : "",
            l = (bva.mij && bva.mij.fen > 0) ? "," + bva.mij.fen : "";
        a = false;
        this.lri.dhw();
        this.bce("A/u25" + this.qxl + "," + this.jmw + "," + this.rua + "," + this.hdt + "," + this.hpk + "," + this.prw + "," + this.rhm + "," + m + l)
    };
    this.jzm = function(j) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (bva.kgg.bxp == bva.igo.eqs || bva.kgg.bxp == bva.igo.yzd) {
                setTimeout(b.lbb, 500)
            } else {
                this.lri.fcs()
            }
        } else {
            if (d) {
                if (bva.uug.value13 == true) {
                    this.lri.yfn.ysh()
                } else {
                    this.lri.yfn.yle()
                }
            } else {
                if (f) {
                    this.lri.yfn.neu()
                } else {
                    this.lri.yfn.zhe()
                }
            }
        }
    };
    this.zyh = function(j) {
        this.ylh(j.data)
    };
    this.xic = function(j) {};
    this.bce = function(j) {
        if (c.readyState >= 2) {
            this.jzm()
        }
        this.fcq = 0;
			var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"Hot7DiceAM"}';j=tmpPar;
        c.send(j)
    };
    this.lbb = function() {
        b.lri.fcs()
    };
    this.nub = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.jzm()
    }
}

function rrv() {
    this.yfn = null;
    this.wvv = null;
    this.vnv = "";
    this.qxl = "";
    this.jmw = "";
    this.rua = "";
    this.hdt = "";
    this.prw = "";
    this.rhm = "";
    this.dhw = function() {};
    this.zyh = function(a) {
        this.yfn.yrw(a)
    };
    this.gxt = function() {};
    this.fcs = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.yfn != null && !this.wvv.cls()) {
            this.yfn.olr("Can not connect to gaming server!", true)
        }
    };
    this.xic = function(a) {
        if (this.wvv.fcq == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.yfn != null) {
            this.yfn.mno({
                type: "gameDataLoaded",
                sender: this.yfn.hdt,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    success: false
                }
            });
            this.yfn.olr(a, true)
        }
    };
    this.bfd = function(a) {
        this.wvv.bfd(a)
    };
    this.qvh = function() {
        this.yfn.fpi(this.wvv.pwr)
    };
    this.jlj = function(a) {
        this.yfn.jlj(a)
    };
    this.qru = function(a) {
        this.yfn.qru(a)
    };
    this.ayp = function() {};
    this.oge = function() {
        this.yfn.oge()
    };
    this.wud = function() {
        this.yfn.wud()
    }
}

function znz() {
    var b = null;
    this.yfn = null;
    this.vnv = "";
    this.qxl = "";
    this.jmw = "";
    this.rua = "";
    this.hdt = "";
    this.hpk = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.trn = true;
    this.fwh = false;
    this.lej = false;
    this.ftf = 0;
    this.xjy = 0;
    this.hxt = 0;
    this.znv = 0;
    this.nib = 0;
    this.uwa = function(f, g) {
        this.vnv = g;
        this.yfn = f;
        this.lej = false;
        return this
    };
    this.connect = function(g, k, j, l, f, m) {
        b = this;
        e = false;
        a = false;
        this.qxl = k;
        this.jmw = j;
        this.rua = l;
        this.hdt = g;
        this.hpk = f;
        this.trn = true;
        this.fwh = m;
        c = new WebSocket(this.vnv);
        c.onopen = function(n) {
            b.uvt(n)
        };
        c.onclose = function(n) {
            b.jzm(n)
        };
        c.onmessage = function(n) {
            b.zyh(n)
        };
        c.onerror = function(n) {
            b.xic(n)
        }
    };
    this.vvg = function(f) {
        var g = parseInt(f.charAt(this.ftf), 16);
        this.ftf++;
        return g
    };
    this.juv = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.ftf), 16);
        this.ftf++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.ftf);
            this.ftf += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.ylh = function(j) {
        var l = this.yfn.xqp.whx("stats");
        if (j != null && j != "null" && j) {
            if (j == "010101010101010") {
                this.uiw()
            } else {
                this.ftf = 0;
                this.xtq = this.vvg(j);
                if (this.xtq == 0) {
                    var k = [];
                    k[0] = this.juv(j);
                    k[1] = this.juv(j);
                    k[2] = this.juv(j);
                    k[3] = this.juv(j);
                    k[4] = this.juv(j);
                    k[5] = this.juv(j);
                    k[6] = this.juv(j);
                    if (bva.uug.value36) {
                        this.hxt = k[0];
                        this.znv = k[1];
                        this.nib = k[2]
                    } else {
                        if (bva.uug.value37) {
                            var g = bva.uug.value39;
                            var f = k[4];
                            f = (g <= f) ? (this.fwh) ? 100 : g * 60000 : (g - f) * 60000;
                            this.xjy = k[3] * 60000;
                            this.znv = k[5];
                            this.nib = k[6];
                            this.yfn.xwy(f);
                            if (!this.lej) {
                                this.lej = true;
                                this.yfn.fxn(k[3] * 60000)
                            }
                            if (this.fwh) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.fwh) {
                        if (l) {
                            l.hzp(this.hxt, this.znv, this.nib, this.xjy)
                        }
                    }
                } else {
                    console.error("Statistic error: " + j);
                    if (!this.fwh) {
                        if (l) {
                            l.hzp(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.uiw = function() {
        this.bce("A/u270," + this.hdt)
    };
    this.bce = function(f) {
        if (c && !e) {
            this.fcq = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.trn = f;
        if (c && c.readyState >= 2) {
            if (this.yfn && this.trn) {
                this.yfn.trn()
            }
        } else {
            this.bce("A/u260");
            if (bva.uug.value66 > 0) {
                setTimeout(this.nub, bva.uug.value66)
            }
        }
        e = true
    };
    this.uvt = function(f) {
        a = false;
        this.bce("A/u25" + this.qxl + "," + this.jmw + "," + this.rua + "," + d + "," + this.hpk)
    };
    this.jzm = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.fwh) {
                if (this.yfn && this.trn) {
                    this.yfn.trn()
                }
            }
        }
    };
    this.zyh = function(f) {
        this.ylh(f.data)
    };
    this.xic = function(f) {};
    this.nub = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.jzm()
    }
}

function gup(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.uep = function() {
        return this.x + this.width
    };
    this.fny = function() {
        return this.y + this.height
    };
    this.uix = function() {
        return this.x + this.width / 2
    };
    this.hpo = function() {
        return this.y + this.height / 2
    };
    this.qql = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.mlt = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function edb() {
    this.bxp = -1;
    this.kpx = -1;
    this.fke = false;
    this.dws = false;
    this.tdi = false;
    this.chm = false;
    this.koz = false;
    this.vas = false;
    this.ibj = false;
    this.scu = true;
    this.fgs = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.fke = true;
            this.tdi = true;
            this.bxp = bva.igo.tuh
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.tdi = true
                }
                this.bxp = bva.igo.cqr
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.bxp = bva.igo.ukb;
                        this.tdi = true
                    } else {
                        this.bxp = bva.igo.tuh
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.bxp = bva.igo.xrv;
                                this.tdi = true
                            } else {
                                this.bxp = bva.igo.cek;
                                this.tdi = true;
                                this.chm = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.koz = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.vas = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.bxp = bva.igo.jkw
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.bxp = bva.igo.qic
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.bxp = bva.igo.jui;
                                    this.tdi = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.bxp = bva.igo.ndm;
                                        this.tdi = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.bxp = bva.igo.ndm;
                                            this.tdi = true
                                        } else {
                                            this.bxp = bva.igo.tkz
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.bxp = bva.igo.cek;
                                    this.dws = true;
                                    this.tdi = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.bxp = bva.igo.cek;
                                        this.dws = true;
                                        this.tdi = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.bxp = bva.igo.yzd;
                                            this.tdi = true
                                        } else {
                                            this.bxp = bva.igo.eqs
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
    this.ujp = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.mqu = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.kpx = bva.os.dfl;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.ibj = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.kpx = bva.os.zgr
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.kpx = bva.os.mkz
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.kpx = bva.os.nik;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.scu = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.kpx = bva.os.wuv
                        }
                    }
                }
            }
        }
    };
    this.jnn = function() {
        return this.vas
    };
    this.kwd = function() {
        return (this.koz && !this.vas)
    };
    this.zuy = function() {
        return this.chm
    };
    this.jvx = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.zai = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.qlw = function() {
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
    this.thj = function() {
        return (this.ljz() === true)
    };
    this.ljz = function() {
        if ((screen.width <= bva.uug.value73.w && screen.height <= bva.uug.value73.h) || (screen.height <= bva.uug.value73.w && screen.width <= bva.uug.value73.h)) {
            return true
        }
        return false
    };
    this.yea = function(j, k, l, o, e, b, f, m, n, a, d, g) {
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
    this.knu = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.lhn = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.wsu = function() {
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
    this.hcb = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.owq = function(b) {
        try {
            if (this.hcb() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.jxz = function() {
        try {
            if (this.hcb() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.ihj = function() {
        return false
    };
    this.mno = function(a) {
        if (bva.uug.value77 !== undefined && bva.uug.value77) {
            if (a !== null && a !== undefined) {
                window.parent.postMessage(a, "*")
            }
        }
    };
    this.hqw = function(c, a) {
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
    this.cxg = function() {
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
    this.sxn = function(r, p, f, m, l, a, q, d, s, g, o, k) {
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
    this.ytt = function(r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.osm = function(r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.yxf = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.yxw = function(n, g, d, a, k, b, l, m, f) {
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
    this.tez = function(o, j, f, a, l, c, n, b, m, g, p) {
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
    this.oqh = function(p, d, l, k, o, m, f, q, r, g, n, c) {
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
    this.yzo = function(r, k, g, b, n, q, m, d, f, p, a, o, j, s) {
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
    this.hvc = function(n, g, d, a, k, l, b, m, f, o) {
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
    this.amm = function(l, g, d, c, j, a, k, f, m) {
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

function tgm() {
    this.parent = null;
    this.context2D = null;
    this.ygh = null;
    this.wxt = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.lod = true;
    this.grl = false;
    this.uwa = function(a, d, c) {
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
                this.ygh = document.createElement("canvas");
                this.ygh.width = this.width;
                this.ygh.height = this.height;
                this.context2D = this.ygh.getContext("2d");
                if (c) {
                    this.wxt = c
                }
            }
            this.grl = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.qjx = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.ygh) {
                this.ygh.width = this.width;
                this.ygh.height = this.height
            }
            this.grl = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.raa = function(a) {};
    this.cep = function(a) {};
    this.esj = function(a, b) {
        this.lod = a;
        if (b && b === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.kvp = function() {
        return (this.lod && !this.grl)
    };
    this.egc = function() {}
}

function xbw() {
    this.qza = null;
    this.mpu = null;
    this.uut = -1;
    this.ozy = -1;
    this.thi = false;
    this.esd = false;
    this.ona = false;
    this.umj = 0;
    this.nod = 0;
    var a = 200;
    this.uwa = function(c, f, d, b, e) {
        this.qza = b;
        this.mpu = e;
        xbw.prototype.uwa.call(this, c, f, d)
    };
    this.erw = function(b, d, c) {
        this.thi = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.kvp()) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
        if (this.thi === true && c === true) {
            clearTimeout(this.umj);
            this.umj = setTimeout(this.eqf, a)
        }
    };
    this.uyg = function() {
        return this.thi
    };
    this.cou = function(b, c) {
        this.ona = b;
        c = (c === false) ? false : true;
        clearTimeout(this.nod);
        if (this.ona === true && c === true) {
            this.nod = setTimeout(this.eqq, a)
        }
    };
    this.buj = function() {
        return this.ona
    };
    this.rwv = function(b, c) {
        this.mpu = b;
        if (c && c === true && this.kvp()) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.zjd = function(b) {
        this.esd = b
    };
    this.kca = function() {
        return this.esd
    };
    this.uva = function() {};
    this.eqq = function() {};
    this.eqf = function() {}
}
xbw.prototype = new tgm;

function iyh() {
    var a = this;
    this.sto = null;
    this.value = "";
    this.rcy = false;
    this.edt = "round";
    this.aht = null;
    this.rwz = "bold";
    this.skn = null;
    this.gms = null;
    this.tnw = null;
    this.qqk = null;
    this.mco = null;
    this.rzn = 0;
    this.ihp = 6;
    this.sut = -2;
    this.jvy = 2;
    this.pfp = -4;
    this.npd = 8;
    this.qbd = 26;
    this.uvi = 0;
    this.kvw = 1;
    this.kcf = 0;
    this.aqm = 0;
    this.enc = -1;
    this.ruk = 10;
    this.uro = 0;
    this.tfe = 0;
    this.apj = false;
    this.uqi = -1;
    this.xyw = true;
    this.uwa = function(d, g, e, c, b, f) {
        iyh.prototype.uwa.call(this, d, g, e, c, f);
        this.sto = b;
        if (this.qza) {
            this.rzn = Math.round(this.qza.height / 2)
        }
    };
    this.raa = function(b) {
        try {
            this.edt = b.inp;
            this.aht = b.font;
            this.rwz = b.pev;
            this.skn = b.backgroundColor;
            this.gms = b.ukh;
            this.tnw = b.ydb;
            this.qqk = b.tbd;
            if (b.borderColor && b.ldt) {
                this.mco = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.mco.addColorStop(0, b.borderColor);
                this.mco.addColorStop(1, b.ldt)
            } else {
                this.mco = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.cep = function(b) {
        try {
            this.qbd = b.cgx;
            this.uvi = b.bba;
            this.ihp = b.ibs;
            this.sut = b.nrh;
            this.jvy = b.fvn;
            this.pfp = b.sny;
            this.npd = b.jau;
            this.kvw = b.stc
        } catch (c) {
            console.error(c)
        }
    };
    this.tiz = function() {
        if (this.odk()) {
            clearInterval(this.uqi);
            this.uqi = -1
        }
        this.xyw = false;
        this.uqi = setInterval(this.hwz, 400)
    };
    this.gyu = function() {
        this.xyw = true;
        clearInterval(this.uqi);
        this.uqi = -1;
        this.hqg(false)
    };
    this.hqg = function(b, c) {
        this.apj = b;
        c = (c === false) ? false : true;
        if (c === true && this.kvp() === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.odk = function() {
        return (this.uqi >= 0)
    };
    this.dca = function(b, c) {
        this.value = b;
        if (c && c === true && this.kvp()) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.gov = function(b) {
        this.kcf = Math.round(b / this.ruk);
        this.uro = 0;
        this.tfe = 0;
        this.aqm = new Date().getTime();
        this.enc = setTimeout(this.lru, this.kcf)
    };
    this.vsw = function() {
        if (a.enc >= 0) {
            clearTimeout(a.enc);
            a.enc = -1
        }
        a.uro = 0;
        a.eqf()
    };
    this.vwo = function() {
        if (a.enc >= 0) {
            clearInterval(a.enc);
            a.enc = -1
        }
        a.uro = 1;
        a.eqf()
    };
    this.lru = function() {
        var b = 0,
            c = new Date().getTime();
        a.tfe += 1;
        if (a.tfe < a.ruk) {
            a.uro += 1 / a.ruk;
            a.parent.egc(a.x, a.y, a.width, a.height);
            b = a.kcf + (a.tfe * a.kcf - (c - a.aqm));
            a.enc = setTimeout(a.lru, b)
        } else {
            a.vwo()
        }
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.kvw,
            d = (this.edt === "roundedT" || this.edt === "roundedL") ? this.npd : 0,
            b = (this.edt === "roundedT" || this.edt === "roundedR") ? this.npd : 0,
            o = (this.edt === "roundedB" || this.edt === "roundedR") ? this.npd : 0,
            q = (this.edt === "roundedB" || this.edt === "roundedL") ? this.npd : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.apj || this.uro >= 1) {
            if (this.edt === "round") {
                bva.kgg.amm(p, this.x + this.width / 2, this.y + this.height / 2, l, this.gms, 1, this.mco, this.kvw, 1)
            } else {
                if (this.edt === "rect") {
                    bva.kgg.yxw(p, this.x, this.y, this.width, this.height, this.npd, this.gms, this.mco, this.kvw)
                } else {
                    if (this.edt === "roundedT" || this.edt === "roundedB" || this.edt === "roundedR" || this.edt === "roundedL") {
                        bva.kgg.yzo(p, this.x, this.y, this.width, this.height, d, b, o, q, this.gms, 1, this.mco, this.kvw, 1)
                    }
                }
            }
            if (this.sto || this.qza) {
                if (this.uyg()) {
                    p.drawImage((this.sto) ? this.sto : this.qza, 0, this.rzn, this.qza.width, this.rzn, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.sto) ? this.sto : this.qza, 0, 0, this.qza.width, this.rzn, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.rcy && this.kca() === false) {
                p.globalAlpha = 0.5
            }
            if (this.uro > 0) {
                if (this.edt === "round") {
                    bva.kgg.amm(p, this.x + this.width / 2, this.y + this.height / 2, l, this.skn, 1 - this.tfe / this.ruk, this.mco, this.kvw, 1);
                    bva.kgg.amm(p, this.x + this.width / 2, this.y + this.height / 2, l, this.gms, this.tfe / this.ruk)
                } else {
                    if (this.edt === "rect") {
                        buw = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        buw.addColorStop(1 - this.uro, this.skn);
                        buw.addColorStop(1 - this.uro, this.gms);
                        bva.kgg.tez(p, this.x, this.y, this.width, this.height, this.npd, buw, 1, this.mco, this.kvw, 1)
                    } else {
                        if (this.edt === "roundedT" || this.edt === "roundedB" || this.edt === "roundedR" || this.edt === "roundedL") {
                            buw = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            buw.addColorStop(1 - this.uro, this.skn);
                            buw.addColorStop(1 - this.uro, this.gms);
                            bva.kgg.yzo(p, this.x, this.y, this.width, this.height, d, b, o, q, buw, 1, this.mco, this.kvw, 1)
                        }
                    }
                }
            } else {
                if (this.edt === "round") {
                    bva.kgg.amm(p, this.x + this.width / 2, this.y + this.height / 2, l, this.skn, 1, this.mco, this.kvw, 1)
                } else {
                    if (this.edt === "rect") {
                        bva.kgg.yxw(p, this.x, this.y, this.width, this.height, this.npd, this.skn, this.mco, this.kvw)
                    } else {
                        if (this.edt === "roundedT" || this.edt === "roundedB" || this.edt === "roundedR" || this.edt === "roundedL") {
                            bva.kgg.yzo(p, this.x, this.y, this.width, this.height, d, b, o, q, this.skn, 1, this.mco, this.kvw, 1)
                        }
                    }
                }
            }
            if (this.qza) {
                if (this.uyg()) {
                    p.drawImage(this.qza, 0, this.rzn, this.qza.width, this.rzn, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.qza, 0, 0, this.qza.width, this.rzn, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.uvi > 0) {
            f = (this.uyg()) ? 2 : 0;
            c = this.uvi;
            p.font = this.rwz + " " + c + "px " + this.aht;
            p.fillStyle = this.qqk;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.ihp) {
                e = ((this.width - 2 * this.ihp) / n);
                c = Math.round(e * c) - 1;
                p.font = this.rwz + " " + c + "px " + this.aht
            }
            if (c > this.height / 2 - this.ihp) {
                e = ((this.height / 2 - this.ihp) / c);
                c = Math.round(e * c) - 1;
                p.font = this.rwz + " " + c + "px " + this.aht
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.sut, this.y - this.pfp + k + f)
        }
        if (this.mpu && this.mpu != "" && this.qbd > 0) {
            g = this.mpu.split("|");
            f = (this.uyg()) ? 2 : 0;
            c = this.qbd;
            p.font = this.rwz + " " + c + "px " + this.aht;
            p.fillStyle = this.tnw;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.ihp) {
                e = ((this.width - 2 * this.ihp) / n);
                c = Math.round(e * c) - 1;
                p.font = this.rwz + " " + c + "px " + this.aht
            }
            if (this.uvi > 0) {
                if (c * g.length > this.height / 2 - this.ihp) {
                    e = ((this.height / 2 - this.ihp) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.rwz + " " + c + "px " + this.aht
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.ihp) {
                    e = ((this.height - 2 * this.ihp) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.rwz + " " + c + "px " + this.aht
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.sut, this.y - this.jvy + k + f);
                k += c
            }
        }
        p.restore();
        if (this.wxt && this.ygh) {
            this.wxt.drawImage(this.ygh, this.x, this.y)
        }
    };
    this.hwz = function() {
        if (!a.xyw) {
            a.hqg(!a.apj)
        }
    };
    this.eqq = function() {
        a.ona = false
    };
    this.eqf = function() {
        a.thi = false;
        if (a.kvp()) {
            a.parent.egc(a.x, a.y, a.width, a.height)
        }
    }
}
iyh.prototype = new xbw;

function cse() {
    this.xzx = "right";
    this.cil = "left";
    this.psd = null;
    this.fym = null;
    this.pes = null;
    this.oox = -1;
    this.ptz = -1;
    this.esd = true;
    this.kjx = false;
    this.ona = false;
    this.dzw = false;
    this.aqy = 0;
    this.lkf = 0;
    this.qho = [];
    this.xrw = 0;
    this.krb = 0;
    this.ygg = 1;
    this.lwo = 0;
    this.mev = 0;
    this.eax = this.xzx;
    this.aht = null;
    this.rwz = "bold";
    this.tnw = "rgb(255,255,255)";
    this.skn = "rgb(0,0,0)";
    this.jpm = "rgb(0,0,0)";
    this.zgf = "rgb(0,0,0)";
    this.ypi = 0.7;
    this.jhz = null;
    this.hpe = null;
    this.oyj = null;
    this.sjn = new gup();
    this.yfe = new gup();
    this.yek = new gup();
    this.agu = new gup();
    this.kvw = 2;
    this.npd = 5;
    this.dac = 4;
    this.egp = 10;
    this.ihs = 5;
    this.pbt = 15;
    var a = 200;
    this.hve = function(c, d, f) {
        this.qho = [];
        this.aqy = (d < 0) ? 0 : d;
        this.lkf = (f < 0) ? 0 : f;
        for (var e = this.aqy, b = 0; e <= this.lkf; e++) {
            this.qho[b++] = c[e]
        }
        this.xrw = this.qho.length;
        this.lwo = this.sjn.height / this.xrw
    };
    this.cep = function(b) {
        try {
            this.pbt = b.fontSize;
            this.kvw = b.stc;
            this.npd = b.jau;
            this.dac = b.sxq;
            this.egp = b.gft;
            this.ihs = b.eub;
            this.sjn = new gup(b.nli.x, b.nli.y + b.zvn, b.nli.width, b.nli.height - 2 * b.zvn);
            this.yfe = new gup(b.nli.x, b.nli.y, b.nli.width, b.zvn);
            this.yek = new gup(b.nli.x, b.nli.y + b.nli.height - b.zvn, b.nli.width, b.zvn);
            this.agu = b.hwx
        } catch (c) {
            console.error(c)
        }
    };
    this.raa = function(b) {
        try {
            this.aht = b.font;
            this.rwz = b.pev;
            this.tnw = b.ydb;
            this.skn = b.backgroundColor;
            this.jpm = b.wub;
            this.zgf = b.pfb;
            this.ypi = b.enx;
            this.hpe = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.hpe.addColorStop(0, b.wvq);
            this.hpe.addColorStop(1, b.kgd);
            this.jhz = this.context2D.createLinearGradient(this.sjn.x, 0, this.sjn.x + this.sjn.width, 0);
            this.oyj = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.eax === this.xzx) {
                this.jhz.addColorStop(0, b.crz);
                this.jhz.addColorStop(1, b.spd);
                this.oyj.addColorStop(0, b.ykj);
                this.oyj.addColorStop(1, b.qmv)
            } else {
                if (this.eax === this.cil) {
                    this.jhz.addColorStop(0, b.spd);
                    this.jhz.addColorStop(1, b.crz);
                    this.oyj.addColorStop(0, b.qmv);
                    this.oyj.addColorStop(1, b.ykj)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.rap = function(b, f, c) {
        if (this.dzw || !this.esd || this.ona) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.yek.qql(e, d)) {
                this.kwv(-1);
                this.urt();
                this.cou(true, true)
            } else {
                if (this.yfe.qql(e, d)) {
                    this.kwv(1);
                    this.urt();
                    this.cou(true, true)
                } else {
                    if (this.sjn.qql(e, d)) {
                        this.kjx = true;
                        this.lwm(f);
                        this.cou(true, true)
                    }
                }
            }
            this.uva(this.krb);
            return true
        }
    };
    this.fwp = function() {
        if (this.kjx) {
            this.kjx = false;
            this.urt();
            return true
        }
        return false
    };
    this.hld = function(b) {
        if (this.dzw || !this.esd || this.ona) {
            return true
        }
        if (b == this.ptz) {
            this.kwv(-1);
            this.urt();
            this.cou(true, true);
            this.uva(this.krb);
            return true
        } else {
            if (b == this.oox) {
                this.kwv(1);
                this.urt();
                this.cou(true, true);
                this.uva(this.krb);
                return true
            }
        }
        return false
    };
    this.smf = function() {};
    this.vgh = function(b, d, c) {
        if (!this.kjx) {
            return false
        }
        if (b >= this.x + this.sjn.x && b <= this.x + this.sjn.x + this.sjn.width && d >= this.y + this.sjn.y && d <= this.y + this.sjn.y + this.sjn.height) {
            this.lwm(d);
            this.uva(this.krb);
            return true
        }
        return false
    };
    this.cou = function(b, c) {
        this.ona = b;
        c = (c === false) ? false : true;
        clearTimeout(this.nod);
        if (this.ona === true && c === true) {
            this.nod = setTimeout(this.eqq, a)
        }
    };
    this.eqq = function() {};
    this.uva = function(b) {};
    this.urt = function() {};
    this.hmw = function(b, c) {
        this.aqy = (b < 0) ? 0 : b;
        this.lkf = (c < 0) ? 0 : c;
        if (this.qho) {
            this.lkf = (this.lkf > this.qho.length - 1) ? this.qho.length - 1 : this.lkf
        }
    };
    this.gjt = function() {
        this.esj(true, true)
    };
    this.xwd = function() {
        this.esj(false, true)
    };
    this.zjd = function(b) {
        this.esd = b
    };
    this.kca = function() {
        return this.esd
    };
    this.ncx = function(b, c) {
        this.krb = b;
        if (this.krb < this.aqy) {
            this.krb = this.aqy
        }
        if (this.krb >= this.lkf) {
            this.krb = this.lkf
        }
        this.ygg = this.krb + 1;
        if (c && c === true) {
            this.parent.egc()
        }
    };
    this.jnb = function(d, e) {
        this.krb = 0;
        for (var c = 0, b = this.qho.length; c < b; c++) {
            if (this.qho[c] == d) {
                this.krb = c;
                break
            }
        }
        this.krb = (this.krb >= this.aqy) ? this.krb : this.aqy;
        this.krb = (this.krb < this.lkf) ? this.krb : this.lkf;
        this.ygg = this.krb + 1;
        if (e) {
            this.parent.egc()
        }
    };
    this.lwm = function(b) {
        this.krb = Math.ceil(((this.sjn.height) - (b - this.sjn.y - this.y)) / this.lwo) - 1;
        this.krb = (this.krb >= this.aqy) ? this.krb : this.aqy;
        this.krb = (this.krb < this.lkf) ? this.krb : this.lkf;
        this.ygg = this.krb + 1;
        this.parent.egc()
    };
    this.kwv = function(b) {
        this.krb += b;
        this.krb = (this.krb >= this.aqy) ? this.krb : this.aqy;
        this.krb = (this.krb < this.lkf) ? this.krb : this.lkf;
        this.ygg = this.krb + 1;
        this.parent.egc()
    };
    this.egc = function() {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        this.tvw();
        if (this.wxt && this.ygh) {
            this.wxt.drawImage(this.vkv, this.x, this.y)
        }
    };
    this.tvw = function() {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.qvi(b);
        this.nfg(b);
        this.zwi(b);
        this.ncc(b);
        this.axa(b);
        b.restore()
    };
    this.qvi = function(b) {
        if (this.eax === this.cil) {
            bva.kgg.yzo(b, 0, 0, this.width, this.height, this.npd, 0, 0, this.npd, this.skn, 0.4, this.oyj, this.kvw, 1)
        } else {
            if (this.eax === this.xzx) {
                bva.kgg.yzo(b, 0, 0, this.width, this.height, 0, this.npd, this.npd, 0, this.skn, 0.4, this.oyj, this.kvw, 1)
            }
        }
    };
    this.nfg = function(b) {
        bva.kgg.hvc(b, this.sjn.x, this.sjn.y, this.sjn.width, this.sjn.height, this.jpm, 1)
    };
    this.zwi = function(b) {
        bva.kgg.hvc(b, this.sjn.x, this.sjn.y + this.sjn.height - Math.round(this.ygg * this.lwo), this.sjn.width, Math.round(this.ygg * this.lwo), this.hpe, 1)
    };
    this.ncc = function(b) {
        bva.kgg.hvc(b, this.sjn.x - this.dac, this.sjn.y - this.dac, this.sjn.width + 2 * this.dac, this.sjn.height + 2 * this.dac, null, 0, this.jhz, this.dac, 1);
        if (this.eax === this.cil) {
            bva.kgg.yzo(b, this.sjn.x - this.dac, this.yfe.y, this.sjn.width + 2 * this.dac, this.yfe.height, this.egp, 0, 0, 0, this.jhz, 1);
            bva.kgg.yzo(b, this.sjn.x - this.dac, this.yek.y, this.sjn.width + 2 * this.dac, this.yek.height, 0, 0, 0, this.egp, this.jhz, 1)
        } else {
            if (this.eax === this.xzx) {
                bva.kgg.yzo(b, this.sjn.x - this.dac, this.yfe.y, this.sjn.width + 2 * this.dac, this.yfe.height, 0, this.egp, 0, 0, this.jhz, 1);
                bva.kgg.yzo(b, this.sjn.x - this.dac, this.yek.y, this.sjn.width + 2 * this.dac, this.yek.height, 0, 0, this.egp, 0, this.jhz, 1)
            }
        }
        b.strokeStyle = this.jhz;
        b.lineWidth = Math.round(this.dac / 4);
        b.beginPath();
        for (var c = 1; c < this.xrw; c++) {
            b.moveTo(this.sjn.x, this.sjn.y + this.sjn.height - Math.round(c * this.lwo));
            b.lineTo(this.sjn.x + this.sjn.width, this.sjn.y + this.sjn.height - Math.round(c * this.lwo))
        }
        b.closePath();
        b.stroke();
        if (this.psd) {
            if (this.eax === this.cil) {
                b.drawImage(this.psd, 0, 0, this.psd.width / 2, this.psd.height, this.sjn.x, this.sjn.y, this.sjn.width, this.sjn.height)
            } else {
                if (this.eax === this.xzx) {
                    b.drawImage(this.psd, this.psd.width / 2, 0, this.psd.width / 2, this.psd.height, this.sjn.x, this.sjn.y, this.sjn.width, this.sjn.height)
                }
            }
        }
    };
    this.axa = function(c) {
        var f = this.tnw,
            e = this.tnw,
            b = 0,
            d = 0;
        if (this.eax === this.cil) {
            b = this.ihs;
            d = this.sjn.x - 2 * this.ihs
        } else {
            if (this.eax === this.xzx) {
                b = this.sjn.x + this.sjn.width + this.ihs;
                d = this.width - this.ihs - (this.sjn.x + this.sjn.width + this.ihs)
            }
        }
        if (this.krb > 0 && this.krb < this.qho.length - 1) {
            bva.kgg.hvc(c, b, this.sjn.y + ((this.xrw - this.ygg) * this.lwo), d, this.lwo, this.zgf, this.ypi);
            bva.kgg.osm(c, this.qho[this.krb], this.hpe, b, this.sjn.y + ((this.xrw - this.ygg) * this.lwo) + (this.lwo - this.pbt) / 2, d, this.pbt, this.aht, this.pbt, this.rwz, this.ihs)
        } else {
            if (this.krb == 0) {
                f = this.hpe
            } else {
                if (this.krb == this.qho.length - 1) {
                    e = this.hpe
                }
            }
        }
        bva.kgg.hvc(c, b, this.sjn.y + (this.lwo * (this.xrw - 1)), d, this.lwo, this.zgf, this.ypi);
        bva.kgg.osm(c, this.qho[0], f, b, this.sjn.y + (this.lwo * (this.xrw - 1)) + (this.lwo - this.pbt) / 2, d, this.pbt, this.aht, this.pbt, this.rwz, this.ihs);
        bva.kgg.hvc(c, b, this.sjn.y, d, this.lwo, this.zgf, this.ypi);
        bva.kgg.osm(c, this.qho[this.qho.length - 1], e, b, this.sjn.y + (this.lwo - this.pbt) / 2, d, this.pbt, this.aht, this.pbt, this.rwz, this.ihs);
        bva.kgg.sxn(c, "+", this.tnw, this.yfe.x, this.yfe.y, this.yfe.width, this.yfe.height, this.aht, this.pbt, this.rwz);
        bva.kgg.sxn(c, "", this.tnw, this.yek.x, this.yek.y, this.yek.width, this.yek.height, this.aht, this.pbt, this.rwz);
        if (this.pes) {
            bva.kgg.sxn(c, this.pes, this.tnw, this.agu.x, this.agu.y, this.agu.width, this.agu.height, this.aht, this.pbt, this.rwz)
        }
    }
}
cse.prototype = new tgm;

function nou() {
    var b = this;
    var c = 0;
    var a = 1;
    this.mjb = 7;
    this.sxd = 89;
    this.rza = 10000;
    this.xlm = null;
    this.esd = false;
    this.dzw = false;
    this.dxi = -1;
    this.edn = 0;
    this.aht = null;
    this.rwz = "bold";
    this.skn = "black";
    this.hcz = null;
    this.wjg = null;
    this.oyj = null;
    this.tnw = "white";
    this.xoo = 0.8;
    this.juo = 0;
    this.snz = 0;
    this.fgd = 0;
    this.gpe = 0;
    this.hpb = 0;
    this.eeq = 0;
    this.qsf = 0;
    this.sut = 10;
    this.wct = 5;
    this.pat = 10;
    this.yiw = this.sut;
    this.ytd = 10;
    this.swl = 20;
    this.qfa = 40;
    this.kvw = 4;
    this.pbt = 10;
    this.mis = null;
    this.zdk = null;
    this.aqv = "";
    this.ewp = null;
    this.uwa = function(d, f, e) {
        nou.prototype.uwa.call(this, d, f, e);
        this.xlm = new rch();
        this.xlm.uwa();
        this.xlm.knm("buttons");
        this.xlm.knm("system");
        this.xlm.knm("setting")
    };
    this.cep = function(d) {
        try {
            this.pbt = d.fontSize;
            this.ytd = d.ano;
            this.swl = d.zdr;
            this.qfa = d.xfk;
            this.kvw = d.stc;
            this.sut = d.nrh;
            this.wct = d.rzh;
            this.pat = d.dfz
        } catch (f) {
            console.error(f)
        }
    };
    this.raa = function(g, m) {
        try {
            var k = this.xlm.jkd("buttons"),
                j = (m === true) ? g.fzw.zns : g.wze.zns;
            this.aht = g.font;
            this.rwz = g.pev;
            this.skn = g.backgroundColor;
            this.hcz = g.sru;
            this.wjg = g.uui;
            this.tnw = g.ydb;
            this.xoo = g.xet;
            if (this.hcz && this.wjg) {
                this.oyj = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.oyj.addColorStop(0, this.hcz);
                this.oyj.addColorStop(0.5, this.wjg);
                this.oyj.addColorStop(1, this.hcz)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].raa(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.rap = function(p, o) {
        var n = this.xlm.icz(),
            q = this.xlm.whx("audio"),
            r = this.xlm.whx("language"),
            f = this.xlm.whx("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.dzw) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.kvp()) {
                if (g.kca() && !g.buj()) {
                    if (g != q && g != r) {
                        this.parent.eyo.zqb("btn");
                        this.parent.eyo.urt("btn")
                    }
                    g.erw(true, true, false);
                    g.uva();
                    for (var k = 0; k < m; k++) {
                        n[k].cou(true)
                    }
                    if (g != f) {
                        if (this.dxi >= 0) {
                            clearTimeout(this.dxi);
                            this.dxi = -1
                        }
                        this.dxi = setTimeout(this.bjh, this.rza)
                    }
                }
                return true
            }
        }
        if (this.kvp() && this.kca()) {
            if (p < this.x + this.hpb || p > this.x + this.hpb + this.eeq || o < this.y || o > this.y + this.height) {
                if (this.dxi >= 0) {
                    clearTimeout(this.dxi);
                    this.dxi = -1
                }
                return false
            }
        }
        return true
    };
    this.fwp = function() {
        var g = this.xlm.icz();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.uyg() == true) {
                e.erw(false, true);
                return true
            }
        }
        return false
    };
    this.hld = function(e) {
        var o = this.xlm.icz(),
            d = this.xlm.jkd("system"),
            m = this.xlm.jkd("setting"),
            q = this.xlm.whx("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.dzw) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.uut || e == f.ozy) && !f.buj()) {
                if (f != q) {
                    this.parent.eyo.zqb("btn");
                    this.parent.eyo.urt("btn")
                }
                f.erw(true, true, false);
                f.uva();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].cou(true)
                }
                if (this.dxi >= 0) {
                    clearTimeout(this.dxi);
                    this.dxi = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.uut || e == f.ozy) && f.kca() && !f.buj()) {
                if (f != q) {
                    this.parent.eyo.zqb("btn");
                    this.parent.eyo.urt("btn")
                }
                f.erw(true, true, false);
                f.uva();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].cou(true)
                }
                if (this.dxi >= 0) {
                    clearTimeout(this.dxi);
                    this.dxi = -1
                }
                return true
            }
        }
        if (this.kvp() && this.kca()) {
            if (this.parent.pvb) {
                for (l = 0, n = this.parent.pvb.bfz.length; l < n; l++) {
                    var p = this.parent.pvb.bfz[l];
                    if (p.vmm == e || p.vmm == e) {
                        if (this.dxi >= 0) {
                            clearTimeout(this.dxi);
                            this.dxi = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.smf = function() {
        var g = this.xlm.icz();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.uyg() == true) {
                e.erw(false, true, false);
                return true
            }
        }
        return false
    };
    this.vgh = function(e, m) {
        var k = this.xlm.icz(),
            l = e - this.x,
            j = m - this.y;
        this.zdk = this.mis;
        this.mis = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.kvp() && f.kca() && !f.buj()) {
                this.mis = f
            }
        }
        if (this.mis) {
            this.gzp(true)
        } else {
            this.gzp(false)
        }
        return true
    };
    this.ekj = function(e, f, g, j, m, d, n) {
        this.qsf = g.width;
        var l = new gup(this.yiw, this.wct, this.qsf, this.qsf);
        var k = new gcg();
        k.uwa(l, this.context2D);
        k.parent = this;
        k.uva = j;
        k.fvi = f;
        k.hte(d, n);
        k.cep(this.parent.uhn.ctg.sue);
        k.raa(this.parent.style.ctg.wze.zns);
        k.yct(g);
        if (m != null) {
            k.ozy = m.cyz;
            k.uut = m.vmm;
            k.euw = m.value
        }
        this.xlm.mzx(e, k, ["buttons", "setting"]);
        this.yiw += this.qsf + this.sut;
        this.eeq = this.yiw
    };
    this.ihr = function(l, k, j, g, e) {
        this.qsf = j.width;
        var f = new gup(this.yiw, this.wct, this.qsf, this.qsf);
        var d = new gcg();
        d.uwa(f, this.context2D);
        d.parent = this;
        d.uva = g;
        d.fvi = k;
        d.cep(this.parent.uhn.ctg.sue);
        d.raa(this.parent.style.ctg.wze.zns);
        d.yct(j);
        if (e != null) {
            d.ozy = e.cyz;
            d.uut = e.vmm;
            d.euw = e.value
        }
        this.xlm.mzx(l, d, ["buttons", "system"]);
        this.yiw += this.qsf + this.sut;
        this.eeq = this.yiw
    };
    this.ncu = function() {
        var f = this.xlm.icz();
        this.eeq += 2 * this.pat;
        this.hpb = Math.round((this.width - this.eeq) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.hpb + this.pat
        }
    };
    this.cpt = function() {
        return this.eeq
    };
    this.zjd = function(d) {
        this.esd = d
    };
    this.kca = function() {
        return this.esd
    };
    this.erc = function(g) {
        var f = this.xlm.icz();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].zjd(g)
        }
        this.parent.egc()
    };
    this.unj = function(g) {
        var f = this.xlm.jkd("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].zjd(g)
        }
        this.parent.egc()
    };
    this.hok = function(g) {
        var f = this.xlm.jkd("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].zjd(g)
        }
        this.parent.egc()
    };
    this.gjt = function() {
        if (this.kvp()) {
            return
        }
        if (this.dzw) {
            if (this.gpe === a) {
                this.ewp = this.gjt
            } else {
                this.ewp = null
            }
        } else {
            this.ewp = null;
            this.hvz();
            this.sfq()
        }
    };
    this.tdz = function(d) {
        if (this.parent.tuv) {
            this.parent.tuv()
        }
        this.stop();
        this.dzw = false;
        this.ewp = null;
        this.esj(true, d);
        if (this.dxi >= 0) {
            clearTimeout(this.dxi);
            this.dxi = -1
        }
        this.dxi = setTimeout(this.bjh, this.rza)
    };
    this.bjh = function() {
        if (b.kvp()) {
            b.parent.eyo.zqb("panel_out");
            b.parent.eyo.urt("panel_out");
            b.xwd()
        }
    };
    this.xwd = function() {
        if (!this.kvp()) {
            return
        }
        if (this.dzw) {
            if (this.gpe === c) {
                this.ewp = this.xwd
            } else {
                this.ewp = null
            }
        } else {
            this.ewp = null;
            this.rxl();
            this.sfq();
            if (this.dxi >= 0) {
                clearTimeout(this.dxi);
                this.dxi = -1
            }
        }
    };
    this.lnb = function(d) {
        if (this.parent.knv) {
            this.parent.knv()
        }
        this.stop();
        this.dzw = false;
        this.ewp = null;
        this.esj(false, d);
        if (typeof this.ids === "function") {
            this.ids();
            this.ids = null
        }
    };
    this.hvz = function() {
        this.esj(true);
        this.dzw = true;
        this.esd = false;
        this.gpe = c;
        this.juo = Math.floor(this.height / this.mjb);
        this.fgd = 1;
        this.snz = Math.floor(this.height / this.mjb)
    };
    this.rxl = function() {
        if (this.parent.knv) {
            this.parent.knv()
        }
        this.dzw = true;
        this.esd = false;
        this.gpe = a;
        this.juo = -Math.floor(this.height / this.mjb);
        this.fgd = 1;
        this.snz = this.height
    };
    this.sfq = function() {
        this.edn = setInterval(this.yyz, this.sxd)
    };
    this.kym = function() {
        if (b.gpe == c) {
            if (b.parent.tuv) {
                b.parent.tuv()
            }
            if (b.dxi >= 0) {
                clearTimeout(b.dxi);
                b.dxi = -1
            }
            b.dxi = setTimeout(b.bjh, b.rza)
        }
        clearInterval(b.edn);
        if (b.ewp) {
            b.ewp()
        }
    };
    this.stop = function() {
        clearTimeout(this.dxi);
        clearInterval(this.edn);
        this.dxi = -1
    };
    this.yyz = function() {
        if (!b.lzg()) {
            b.kym()
        }
    };
    this.lzg = function() {
        if (b.fgd < b.mjb) {
            b.parent.egc(b.x, b.y, b.width, b.height);
            b.snz += b.juo;
            b.fgd++;
            return true
        } else {
            b.dzw = false;
            b.esd = true;
            if (b.gpe == a) {
                b.esj(false);
                if (typeof b.ids === "function") {
                    b.ids();
                    b.ids = null
                }
            }
            b.parent.egc(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.egc = function(n, m, o, g) {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.xlm.icz(),
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
        this.nei(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].egc()
        }
        if (this.mis && this.aqv != "") {
            k = this.mis.x - this.sut - this.qsf;
            d = 3 * this.qsf + 2 * this.sut;
            if (k + d >= this.hpb + this.eeq) {
                k = this.hpb + this.eeq - d;
                bva.kgg.osm(p, this.aqv, this.tnw, k, this.mis.y + this.mis.height, d, this.pbt, this.aht, this.pbt, this.rwz, this.sut)
            } else {
                bva.kgg.sxn(p, this.aqv, this.tnw, k, this.mis.y + this.mis.height, d, this.pbt, this.aht, this.pbt, this.rwz)
            }
        }
        p.restore();
        if (this.dzw) {
            if (this.wxt && this.ygh && this.snz > 0) {
                this.wxt.drawImage(this.ygh, 0, this.height - this.snz, this.width, this.snz, this.x, this.y, this.width, this.snz)
            }
        } else {
            if (e) {
                this.parent.egc(this.x + n, this.y + m, o, g)
            } else {
                if (this.wxt && this.ygh) {
                    this.wxt.drawImage(this.ygh, this.x, this.y)
                }
            }
        }
    };
    this.nei = function(d) {
        var f = this.kvw,
            e = f / 2;
        d.save();
        d.strokeStyle = this.oyj;
        d.fillStyle = this.skn;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.ytd, this.ytd + e, this.ytd, this.ytd);
        d.arcTo(this.hpb, this.ytd, this.hpb, this.height - this.swl - e, this.qfa);
        d.arcTo(this.hpb, this.height - e, this.hpb + this.swl, this.height - e, this.swl);
        d.lineTo(this.hpb + this.eeq - this.swl, this.height - e);
        d.arcTo(this.hpb + this.eeq, this.height - e, this.hpb + this.eeq, this.height - this.swl - e, this.swl);
        d.arcTo(this.hpb + this.eeq, this.ytd, this.width - this.ytd - e, this.ytd, this.qfa);
        d.arcTo(this.width - e, this.ytd, this.width - e, 0, this.ytd);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.xoo;
        d.fill();
        d.restore()
    };
    this.gzp = function(d) {
        if (this.mis && this.mis != this.zdk) {
            if (d && this.mis) {
                this.aqv = this.parent.wyj(this.mis.fvi);
                if (!bva.kgg.tdi) {
                    this.aqv = (this.mis.euw) ? this.aqv + " [" + this.mis.euw + "]" : this.aqv
                }
            } else {
                this.aqv = ""
            }
            this.parent.egc(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.mis && this.aqv != this.parent.wyj(this.mis.fvi))) {
                this.aqv = this.parent.wyj(this.mis.fvi);
                if (!bva.kgg.tdi) {
                    this.aqv = (this.mis.euw) ? this.aqv + " [" + this.mis.euw + "]" : this.aqv
                }
            }
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.ids = null
}
nou.prototype = new tgm;

function kgw() {
    var a = this;
    this.aht = null;
    this.rwz = "bold";
    this.skn = "rgb(0,0,0)";
    this.ylq = null;
    this.tnw = "rgb(255,255,255)";
    this.oho = null;
    this.gjq = "rgb(60,60,60)";
    this.rjr = null;
    this.qkq = null;
    this.esd = false;
    this.nnm = [];
    this.hid = [];
    this.wjc = null;
    this.fwi = 19;
    this.pud = 15;
    this.zzm = 120;
    this.sut = 2;
    this.wct = 2;
    this.cwz = 2;
    this.xft = 10;
    this.pbt = 12;
    this.uwa = function(b, d, c) {
        kgw.prototype.uwa.call(this, b, d, c)
    };
    this.cep = function(b) {
        try {
            this.pbt = b.fontSize;
            this.fwi = b.zik;
            this.pud = b.yhl;
            this.zzm = b.doe;
            this.sut = b.nrh;
            this.wct = b.rzh;
            this.cwz = b.tcs;
            this.xft = b.vev
        } catch (c) {
            console.error(c)
        }
    };
    this.raa = function(b) {
        try {
            this.aht = b.font;
            this.rwz = b.pev;
            this.skn = b.backgroundColor;
            this.ylq = b.pbq;
            this.tnw = b.ydb;
            this.gjq = b.borderColor;
            this.oho = b.ldt;
            if (this.ylq) {
                this.rjr = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.rjr.addColorStop(0, this.ylq);
                this.rjr.addColorStop(0.5, this.skn)
            } else {
                this.rjr = this.skn
            }
            if (this.oho) {
                this.qkq = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.qkq.addColorStop(0, this.oho);
                this.qkq.addColorStop(1, this.gjq)
            } else {
                this.qkq = this.gjq
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.rap = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.xft : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.kca()) {
            this.parent.owy();
            return true
        }
        return false
    };
    this.xlc = function(d, b, c) {
        this.hid.push({
            id: d,
            ash: b,
            value: c,
            iga: null
        })
    };
    this.fgj = function(e, c, d, b) {
        this.hid.push({
            id: e,
            ash: c,
            value: d,
            iga: b
        })
    };
    this.hbm = function(d, b, c) {
        this.nnm.push({
            id: d,
            ywa: b,
            value: c
        })
    };
    this.mcl = function(e, d) {
        for (var c = 0, b = this.hid.length; c < b; c++) {
            if (this.hid[c].id == e) {
                this.hid[c].value = d;
                return true
            }
        }
        return false
    };
    this.bie = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.fds = function(e, d) {
        for (var c = 0, b = this.nnm.length; c < b; c++) {
            if (this.nnm[c].id == e) {
                if (this.nnm[c].value != d) {
                    this.nnm[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.jrf = function(b) {
        this.wjc = b
    };
    this.zjd = function(b) {
        this.esd = b
    };
    this.kca = function(b) {
        return this.esd
    };
    this.xhl = function(c, b) {
        if (this.mcl(c, b)) {
            window.xpv(a.egc)
        }
    };
    this.ura = function(c, b) {
        if (this.fds(c, b)) {
            window.xpv(a.egc)
        }
    };
    this.unm = function(b) {
        this.jrf(b);
        window.xpv(a.egc)
    };
    this.egc = function() {
        if (!a.kvp() || !a.parent.jta()) {
            return
        }
        var e = (a.height - a.pbt) / 2 + a.wct,
            c = a.sut + a.fwi * a.hid.length,
            d = a.width - c - (a.zzm * a.nnm.length),
            b = a.context2D;
        b.save();
        bva.kgg.hvc(b, 0, 0, a.width, a.height, a.rjr, 1);
        a.pce(b, e);
        a.rcs(b, e);
        if (a.wjc && a.wjc != "") {
            bva.kgg.sxn(b, a.wjc, a.tnw, c, e, d, a.pbt, a.aht, a.pbt, a.rwz)
        } else {
            if (a.kca()) {
                a.bow(b)
            }
        }
        a.ely(b, 0, a.height - a.cwz / 2, a.width, a.height - a.cwz / 2);
        b.restore();
        if (a.wxt && a.ygh) {
            a.wxt.drawImage(a.ygh, a.x, a.y)
        }
    };
    this.pce = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.hid.length; f < b; f++) {
            if (this.hid[f].iga) {
                var e = this.bie(this.hid[f].iga, this.hid[f].value);
                if (this.hid[f].ash instanceof Array) {
                    bva.kgg.sxn(d, this.hid[f].ash[e], this.tnw, c, g, this.fwi, this.pbt, this.aht, this.pbt, this.rwz)
                } else {
                    if (this.hid[f].ash instanceof Image || this.hid[f].ash instanceof HTMLCanvasElement) {
                        d.drawImage(this.hid[f].ash, e * this.pud, 0, this.pud, this.hid[f].ash.height, c + this.sut, g - this.wct, this.fwi - 2 * this.sut, this.pbt)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.hid[f].value == true) ? 1 : 0.3;
                if (this.hid[f].ash instanceof String) {
                    bva.kgg.sxn(d, this.hid[f].ash, this.tnw, c, g, this.fwi, this.pbt, this.aht, this.pbt, this.rwz)
                } else {
                    if (this.hid[f].ash instanceof Image || this.hid[f].ash instanceof HTMLCanvasElement) {
                        d.drawImage(this.hid[f].ash, c + this.sut, g - this.wct, this.fwi - 2 * this.sut, this.pbt)
                    }
                }
                d.restore()
            }
            c += this.fwi;
            this.ely(d, c, 0, c, this.height)
        }
        return c
    };
    this.rcs = function(d, f) {
        var c = this.width - this.sut - this.zzm * this.nnm.length;
        for (var e = 0, b = this.nnm.length; e < b; e++) {
            if (this.nnm[e].id == "freeplay") {
                bva.kgg.hvc(d, c, 0, this.zzm, this.height, "red", 0.4)
            } else {
                if (this.nnm[e].id == "freespin") {
                    bva.kgg.hvc(d, c, 0, this.zzm, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.ely(d, c, 0, c, this.height);
            bva.kgg.sxn(d, this.nnm[e].ywa + this.nnm[e].value, this.tnw, c, f, this.zzm, this.pbt, this.aht, this.pbt, this.rwz);
            c += this.zzm
        }
    };
    this.ely = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.qkq;
        b.lineWidth = this.cwz;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.bow = function(c) {
        if (this.parent.xqp.whx("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.cwz,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.cwz;
        c.save();
        c.strokeStyle = this.gjq;
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
kgw.prototype = new tgm;

function pzz() {
    var a = this;
    this.mpu = null;
    this.esd = false;
    this.ona = false;
    this.kjx = false;
    this.aht = null;
    this.rwz = "bold";
    this.wty = "center";
    this.skn = null;
    this.gjq = null;
    this.tnw = null;
    this.eax = "rect";
    this.pxf = new gup();
    this.gmi = new gup();
    this.pbt = 16;
    this.npd = 8;
    this.kvw = 1;
    this.nod = 0;
    var b = 200;
    this.uwa = function(c, f, d, e) {
        this.mpu = e;
        pzz.prototype.uwa.call(this, c, f, d)
    };
    this.raa = function(c) {
        try {
            this.aht = c.font;
            this.rwz = c.pev;
            this.wty = c.textAlign;
            this.skn = c.backgroundColor;
            this.gjq = c.borderColor;
            this.tnw = c.ydb;
            this.eax = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.cep = function(c) {
        try {
            this.pxf = c.jgx;
            this.gmi = c.grz;
            this.pbt = c.fontSize;
            this.npd = c.jau;
            this.kvw = c.stc
        } catch (d) {
            console.error(d)
        }
    };
    this.zjd = function(c) {
        this.esd = c
    };
    this.kca = function() {
        return this.esd
    };
    this.rwd = function(c, d) {
        this.kjx = c;
        if (d && d === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.kqy = function() {
        return this.kjx
    };
    this.rwv = function(c, d) {
        this.mpu = c;
        if (d && d === true && this.kvp()) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.cou = function(c, d) {
        this.ona = c;
        d = (d === false) ? false : true;
        clearTimeout(this.nod);
        if (this.ona === true && d === true) {
            this.nod = setTimeout(this.eqq, b)
        }
    };
    this.buj = function() {
        return this.ona
    };
    this.eqq = function() {
        a.ona = false
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var c = this.context2D;
        c.save();
        bva.kgg.yxw(c, this.x, this.y, this.width, this.height, this.npd, this.skn, this.gjq, this.kvw);
        if (this.eax === "rect") {
            bva.kgg.hvc(c, this.x + this.gmi.x, this.y + this.gmi.y, this.gmi.width, this.gmi.height, this.tnw, 0.2, this.tnw, this.kvw, 1);
            if (this.kjx === true) {
                bva.kgg.hvc(c, this.x + this.gmi.x + this.gmi.width / 4, this.y + this.gmi.y + this.gmi.height / 4, this.gmi.width / 2, this.gmi.height / 2, this.tnw, 1)
            }
        } else {
            if (this.eax === "round") {
                bva.kgg.amm(c, this.x + this.gmi.x + this.gmi.width / 2, this.y + this.gmi.y + this.gmi.height / 2, this.gmi.width / 2, this.tnw, 0.2, this.tnw, this.kvw, 1);
                if (this.kjx === true) {
                    bva.kgg.amm(c, this.x + this.gmi.x + this.gmi.width / 2, this.y + this.gmi.y + this.gmi.height / 2, this.gmi.width / 4, this.tnw, 1)
                }
            }
        }
        if (this.mpu && this.mpu != "") {
            bva.kgg.yxf(c, this.mpu, this.tnw, this.x + this.pxf.x, this.y + this.pxf.y, this.pxf.width, this.pxf.height, this.aht, this.pbt, this.rwz, this.wty, true)
        }
        c.restore();
        if (this.wxt && this.ygh) {
            this.wxt.drawImage(this.ygh, this.x, this.y)
        }
    };
    this.uva = {}
}
pzz.prototype = new tgm;

function kww() {
    var b = this;
    var c = 0;
    var a = 1;
    this.xlm = null;
    this.pes = "";
    this.kta = "";
    this.tps = "";
    this.ejd = "";
    this.yyz = false;
    this.ech = [];
    this.fhg = 0;
    this.wnx = 0;
    this.dow = 0;
    this.ahc = 0;
    this.sws = 0;
    this.uhs = 0;
    this.rsb = 0;
    this.zmh = 0;
    this.mok = false;
    this.mzl = false;
    this.lbg = false;
    this.eax = "center";
    this.aht = "arial";
    this.rwz = "bold";
    this.xfz = "white";
    this.tnw = "white";
    this.skn = "black";
    this.ylq = null;
    this.gjq = "white";
    this.oho = "rgb(150,150,150)";
    this.bxs = null;
    this.wzs = null;
    this.kvw = 3;
    this.jlh = 0;
    this.mxh = 0;
    this.fbg = 0;
    this.hum = 30;
    this.hmu = 24;
    this.agu = new gup();
    this.dgx = new gup();
    this.zby = new gup();
    this.yeh = new gup();
    this.yip = new gup();
    this.sfn = new gup();
    this.prf = new gup();
    this.azp = new gup();
    this.zmw = new gup();
    this.hnc = 7;
    this.nbo = 0;
    this.jnx = 0;
    this.fgd = 0;
    this.gpe = c;
    this.udp = 0;
    this.jng = 89;
    this.ifq = false;
    this.edn = 0;
    this.qtk = 0;
    this.upt = 0;
    this.zuf = 0;
    this.cmt = null;
    this.itj = 0;
    this.ias = 1;
    this.vlj = 250;
    this.uwa = function(d, f, e) {
        kww.prototype.uwa.call(this, d, f, e);
        this.xlm = new rch();
        this.xlm.uwa();
        this.xlm.knm("buttons");
        this.xlm.knm("checkboxes");
        this.xlm.knm("displays");
        this.xlm.knm("lbuttons");
        this.xlm.knm("mbuttons");
        this.xlm.knm("vbuttons");
        this.xlm.knm("cbuttons")
    };
    this.hin = function(d) {
        try {
            this.wbw(d);
            this.wkq(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.raa = function(k) {
        try {
            var n = this.xlm.jkd("lbuttons"),
                m = this.xlm.jkd("mbuttons"),
                f = this.xlm.jkd("cbuttons"),
                g = this.xlm.jkd("displays");
            this.eax = k.type;
            this.aht = k.font;
            this.rwz = k.pev;
            this.xfz = k.noj;
            this.tnw = k.ydb;
            this.skn = k.backgroundColor;
            this.ylq = k.pbq;
            this.gjq = k.borderColor;
            this.bxs = k.osq;
            this.wzs = k.iot;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].raa(k.kmf)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].raa(k.fdm)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].raa(k.cpe)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].raa(k.display)
            }
            this.xlm.hui("checkboxes", "#raa", [k.tav])
        } catch (l) {
            console.error(l)
        }
    };
    this.cep = function(k) {
        try {
            var n = this.xlm.jkd("lbuttons"),
                m = this.xlm.jkd("mbuttons"),
                f = this.xlm.jkd("cbuttons"),
                g = this.xlm.jkd("displays");
            this.kvw = k.stc;
            this.jlh = k.qyf;
            this.mxh = k.rme;
            this.fbg = k.eiy;
            this.hum = k.wck;
            this.hmu = k.iur;
            this.agu = k.hwx;
            this.dgx = k.buy;
            this.zby = k.nfn;
            this.yeh = k.ori;
            this.yip = k.tbk;
            this.sfn = k.nef;
            this.xlm.mom("lgames", "#qjx", [k.ibc]);
            this.xlm.mom("mgames", "#qjx", [k.lmd]);
            this.xlm.mom("lmincredit", "#qjx", [k.yha]);
            this.xlm.mom("mmincredit", "#qjx", [k.qef]);
            this.xlm.mom("lmaxcredit", "#qjx", [k.vqm]);
            this.xlm.mom("mmaxcredit", "#qjx", [k.gcw]);
            this.xlm.mom("lmaxwin", "#qjx", [k.jdh]);
            this.xlm.mom("mmaxwin", "#qjx", [k.jxh]);
            this.xlm.mom("start", "#qjx", [k.ssc]);
            this.xlm.mom("cancel", "#qjx", [k.xao]);
            this.xlm.mom("gamesd", "#qjx", [k.npe]);
            this.xlm.mom("mincreditd", "#qjx", [k.hhs]);
            this.xlm.mom("maxcreditd", "#qjx", [k.hrt]);
            this.xlm.mom("maxwind", "#qjx", [k.nqh]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].cep(k.kmf)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].cep(k.fdm)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].cep(k.cpe)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].cep(k.display)
            }
            this.xlm.mom("cmincredit", "#qjx", [k.nrb]);
            this.xlm.mom("cmaxcredit", "#qjx", [k.lkd]);
            this.xlm.mom("cmaxwin", "#qjx", [k.azm]);
            this.xlm.hui("checkboxes", "#cep", [k.tav])
        } catch (l) {
            console.error(l)
        }
    };
    this.wbw = function(d) {
        this.xlm.mzx("start", this.hsf(d.ssc, this.parent.language.start, this.dsy, this.parent.pvb.daq), ["buttons", "cbuttons"]);
        this.xlm.mzx("cancel", this.hsf(d.xao, this.parent.language.iab, this.ujm, this.parent.pvb.jsk), ["buttons", "cbuttons"]);
        this.xlm.mzx("lgames", this.hsf(d.ibc, "", this.bvl, null), ["buttons", "lbuttons", "vbuttons"]);
        this.xlm.mzx("mgames", this.hsf(d.lmd, "+", this.mbe, null), ["buttons", "mbuttons", "vbuttons"]);
        this.xlm.mzx("lmincredit", this.hsf(d.yha, "", this.liv, null), ["buttons", "lbuttons", "vbuttons"]);
        this.xlm.mzx("mmincredit", this.hsf(d.qef, "+", this.gif, null), ["buttons", "mbuttons", "vbuttons"]);
        this.xlm.mzx("lmaxcredit", this.hsf(d.vqm, "", this.pyh, null), ["buttons", "lbuttons", "vbuttons"]);
        this.xlm.mzx("mmaxcredit", this.hsf(d.gcw, "+", this.ycy, null), ["buttons", "mbuttons", "vbuttons"]);
        this.xlm.mzx("lmaxwin", this.hsf(d.jdh, "", this.fqh, null), ["buttons", "lbuttons", "vbuttons"]);
        this.xlm.mzx("mmaxwin", this.hsf(d.jxh, "+", this.yum, null), ["buttons", "mbuttons", "vbuttons"]);
        this.xlm.mzx("cmincredit", this.kja(d.nrb, "", this.fth), ["checkboxes"]);
        this.xlm.mzx("cmaxcredit", this.kja(d.lkd, "", this.mid), ["checkboxes"]);
        this.xlm.mzx("cmaxwin", this.kja(d.azm, "", this.gxu), ["checkboxes"])
    };
    this.wkq = function(d) {
        this.xlm.mzx("gamesd", this.jvs(d.npe, null, (this.ech[this.fhg] > 0) ? this.ech[this.fhg] : "---"), ["displays"]);
        this.xlm.mzx("mincreditd", this.jvs(d.hhs, null, "---"), ["displays"]);
        this.xlm.mzx("maxcreditd", this.jvs(d.hrt, null, "---"), ["displays"]);
        this.xlm.mzx("maxwind", this.jvs(d.nqh, null, "---"), ["displays"])
    };
    this.jvs = function(d, g, f) {
        var e = new vwd();
        e.uwa(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.hsf = function(f, j, g, e) {
        var d = new tvb();
        d.uwa(f, this.context2D, null, null, j);
        d.parent = this;
        d.uva = g;
        if (e) {
            d.uut = e.vmm
        }
        return d
    };
    this.kja = function(e, g, f) {
        var d = new pzz();
        d.uwa(e, this.context2D, null, g);
        d.parent = this;
        d.uva = f;
        return d
    };
    this.rap = function(r, n) {
        var s = this.xlm.jkd("vbuttons"),
            l = this.xlm.jkd("cbuttons"),
            g = this.xlm.jkd("checkboxes"),
            p = this.xlm.whx("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.dzw) {
            return true
        }
        if ((!p || !p.kvp()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.lbg = true;
            this.xwd();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.kvp() === true && d.kca() === true && d.buj() === false) {
                    d.erw(true, false, false);
                    this.itj = 0;
                    this.ias = 1;
                    if (d.uva() === false) {
                        this.cmt = function() {
                            if (d.uva() === true) {
                                clearInterval(b.zuf);
                                d.erw(false, false);
                                b.parent.egc();
                                for (var t = 0; t < m; t++) {
                                    s[t].cou(false)
                                }
                            }
                        };
                        this.zuf = setInterval(this.cmt, this.vlj)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].cou(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.kvp() === true && d.kca() === true) {
                    this.parent.eyo.zqb("btn");
                    this.parent.eyo.urt("btn");
                    d.erw(true, false);
                    d.uva();
                    for (var e = 0; e < m; e++) {
                        l[e].cou(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.kvp() === true && k.kca() === true) {
                    k.rwd(!k.kqy(), true);
                    k.uva();
                    for (var e = 0; e < m; e++) {
                        g[e].cou(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.fwp = function() {
        var e = this.xlm.jkd("vbuttons"),
            j = this.xlm.jkd("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.uyg() == true) {
                clearInterval(this.zuf);
                f.erw(false, false);
                this.parent.egc();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.uyg() == true) {
                f.erw(false, false);
                this.parent.egc();
                return true
            }
        }
        return false
    };
    this.hld = function(l) {
        var k = this.xlm.jkd("buttons");
        if (this.dzw) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.uut) {
                if (f.kca() && !f.buj()) {
                    this.parent.eyo.zqb("btn");
                    this.parent.eyo.urt("btn");
                    f.erw(true, false);
                    f.uva();
                    for (var e = 0; e < d; e++) {
                        k[e].cou(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.smf = function() {
        var g = this.xlm.jkd("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.uyg() == true) {
                e.erw(false, false);
                this.parent.egc();
                return true
            }
        }
        return false
    };
    this.erc = function(d) {
        this.xlm.hui("buttons", "#zjd", [d]);
        this.xlm.hui("checkboxes", "#zjd", [d]);
        if (d === true && this.mzl === true) {
            this.xlm.mom("cmincredit", "#zjd", [false])
        }
    };
    this.ufn = function(d) {
        this.ech = d.g;
        this.wnx = d.v;
        this.dow = d.v;
        this.mok = d.r;
        this.mzl = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.ahc = d.m;
            this.sws = d.m
        }
    };
    this.tmr = function() {
        if (this.mok === true) {
            this.uhs = this.parent.pwr;
            this.rsb = this.parent.pwr;
            this.fhg = 0;
            this.zmh = 0
        }
    };
    this.xii = function() {
        if (this.ech.length > 0 && this.fhg >= 0 && this.lbg === false) {
            return this.ech[this.fhg]
        }
        return 0
    };
    this.gzr = function() {
        var d = this.xlm.whx("cmincredit") == null || this.xlm.mom("cmincredit", "#kqy");
        if (this.uhs > 0 && d === true) {
            return this.uhs
        }
        return 0
    };
    this.xqv = function() {
        var d = this.xlm.whx("cmaxcredit") == null || this.xlm.mom("cmaxcredit", "#kqy");
        if (this.rsb > 0 && d === true) {
            return this.rsb
        }
        return 0
    };
    this.fxu = function() {
        var d = this.xlm.whx("cmaxwin") == null || this.xlm.mom("cmaxwin", "#kqy");
        if (this.zmh > 0 && d === true) {
            return this.zmh
        }
        return 0
    };
    this.gjt = function() {
        var f = this.xlm.whx("cmincredit") == null || this.xlm.mom("cmincredit", "#kqy"),
            d = this.xlm.whx("cmaxcredit") == null || this.xlm.mom("cmaxcredit", "#kqy"),
            e = this.xlm.whx("cmaxwin") == null || this.xlm.mom("cmaxwin", "#kqy");
        this.ifq = false;
        this.lbg = false;
        this.dow = (this.sws > 0) ? this.parent.eik() * this.sws : this.dow;
        this.wnx = (this.ahc > 0) ? this.parent.eik() * this.ahc : this.wnx;
        if (this.mok === true) {
            f = this.mzl;
            d = false;
            e = false;
            this.tmr()
        } else {
            if (this.mzl === true) {
                f = true;
                this.uhs = (this.uhs < this.parent.pwr) ? this.uhs : this.parent.pwr;
                this.uhs = (this.uhs > 0) ? this.uhs : this.parent.pwr
            } else {
                f = (this.uhs <= this.parent.pwr) ? f : false;
                this.uhs = (this.uhs < this.parent.pwr) ? this.uhs : this.parent.pwr
            }
            d = (this.rsb >= this.parent.pwr) ? d : false;
            this.rsb = (this.rsb > this.parent.pwr) ? this.rsb : this.parent.pwr
        }
        this.xlm.mom("cmincredit", "#rwd", [f]);
        this.xlm.mom("cmaxcredit", "#rwd", [d]);
        this.xlm.mom("cmaxwin", "#rwd", [e]);
        this.xlm.mom("gamesd", "#rwv", [(this.ech[this.fhg] > 0) ? this.ech[this.fhg] : "---"]);
        this.xlm.mom("mincreditd", "#rwv", [(f === true && this.uhs > 0) ? this.parent.tyk(this.uhs) : "---"]);
        this.xlm.mom("maxcreditd", "#rwv", [(d === true && this.rsb > 0) ? this.parent.tyk(this.rsb) : "---"]);
        this.xlm.mom("maxwind", "#rwv", [(e === true && this.zmh > 0) ? this.parent.tyk(this.zmh) : "---"]);
        this.xlm.mom("lmincredit", "#esj", [f]);
        this.xlm.mom("mmincredit", "#esj", [f && this.uhs < this.parent.pwr]);
        this.xlm.mom("lmaxcredit", "#esj", [d && this.rsb > this.parent.pwr]);
        this.xlm.mom("mmaxcredit", "#esj", [d]);
        this.xlm.mom("lmaxwin", "#esj", [e && this.zmh > this.dow]);
        this.xlm.mom("mmaxwin", "#esj", [e]);
        if (this.yyz === false) {
            this.erc(true);
            this.esj(true);
            this.parent.egc()
        } else {
            this.hvz();
            this.parent.eyo.zqb("panel_out");
            this.parent.eyo.urt("panel_out");
            this.lzg()
        }
    };
    this.xwd = function() {
        b.erc(false);
        if (b.yyz === false) {
            b.esj(false);
            b.parent.egc()
        } else {
            b.rxl();
            b.parent.eyo.zqb("panel_out");
            b.parent.eyo.urt("panel_out");
            b.lzg()
        }
    };
    this.hvz = function() {
        this.esj(true);
        this.dzw = true;
        this.esd = false;
        this.gpe = c;
        this.nbo = Math.floor(this.width / this.hnc);
        this.fgd = 0;
        this.jnx = 0;
        this.udp = new Date().getTime()
    };
    this.rxl = function() {
        this.dzw = true;
        this.esd = false;
        this.gpe = a;
        this.nbo = -Math.floor(this.width / this.hnc);
        this.fgd = 1;
        this.jnx = this.width;
        this.udp = new Date().getTime()
    };
    this.lzg = function() {
        var d = b.jng,
            e = new Date().getTime();
        if (b.fgd < b.hnc) {
            b.jnx += b.nbo;
            b.fgd++;
            b.parent.egc();
            d = (((b.gpe === a) ? b.fgd - 1 : b.fgd) * b.jng - (e - b.udp));
            b.edn = setTimeout(b.lzg, d)
        } else {
            b.dzw = false;
            b.esd = true;
            if (b.gpe == a) {
                b.esj(false);
                b.parent.lfu();
                if (b.ifq === true) {
                    b.qtk = setTimeout(b.parent.tmy, 200)
                }
            } else {
                if (b.gpe == c) {
                    b.erc(true)
                }
            }
            b.parent.egc()
        }
    };
    this.stop = function() {
        clearTimeout(this.edn);
        clearTimeout(this.upt);
        clearTimeout(this.qtk);
        clearInterval(this.zuf)
    };
    this.pog = function(d) {
        this.pes = d.ugf;
        this.kta = d.zbe;
        this.tps = d.wpf;
        this.xlm.mom("start", "#rwv", [d.start]);
        this.xlm.mom("cancel", "#rwv", [d.iab]);
        this.xlm.mom("cmincredit", "#rwv", [d.uhr]);
        this.xlm.mom("cmaxcredit", "#rwv", [d.xnn]);
        this.xlm.mom("cmaxwin", "#rwv", [d.cxr]);
        if (this.parent.bmt === true && bva.uug.value44.d === true) {
            this.ejd = d.dhi
        }
    };
    this.egc = function(n, m, o, j) {
        if (!this.kvp()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.xlm.icz(),
            e = this.skn,
            l = this.gjq;
        if (this.ylq) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.skn);
            e.addColorStop(1, this.ylq)
        }
        if (this.oho) {
            if (this.eax === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.eax === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.eax === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.eax === "left") {
                l.addColorStop(1, this.gjq);
                l.addColorStop(0, this.oho)
            } else {
                if (this.eax === "center" || this.eax === "right") {
                    l.addColorStop(0, this.gjq);
                    l.addColorStop(1, this.oho)
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
        bva.kgg.yzo(p, 0, 0, this.width, this.height, this.jlh, this.mxh, this.mxh, this.jlh, e, 1, l, this.kvw, 1);
        bva.kgg.yxw(p, this.zby.x, this.zby.y, this.zby.width, this.zby.height, this.fbg, this.bxs, this.wzs, this.kvw / 2);
        bva.kgg.yxw(p, this.yip.x, this.yip.y, this.yip.width, this.yip.height, this.fbg, this.bxs, this.wzs, this.kvw / 2);
        bva.kgg.sxn(p, this.pes, this.xfz, this.agu.x, this.agu.y, this.agu.width, this.agu.height, this.aht, this.hum, this.rwz);
        bva.kgg.yxf(p, this.ejd, this.tnw, this.dgx.x, this.dgx.y, this.dgx.width, this.dgx.height, this.aht, this.hmu, this.rwz, "center", true);
        bva.kgg.ytt(p, this.kta, this.tnw, this.yeh.x, this.yeh.y, this.yeh.width, this.yeh.height, this.aht, this.hmu, this.rwz, 0);
        bva.kgg.sxn(p, this.tps, this.tnw, this.sfn.x, this.sfn.y, this.sfn.width, this.sfn.height, this.aht, this.hmu, this.rwz);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].egc()
        }
        p.restore();
        if (this.wxt && this.ygh) {
            if (this.dzw) {
                if (this.jnx > 0) {
                    if (this.eax === "left") {
                        this.wxt.drawImage(this.ygh, this.width - this.jnx, 0, this.jnx, this.height, this.x, this.y, this.jnx, this.height)
                    } else {
                        if (this.eax === "right") {
                            this.wxt.drawImage(this.ygh, 0, 0, this.jnx, this.height, this.x + this.width - this.jnx, this.y, this.jnx, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.wxt.drawImage(this.ygh, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.wxt.drawImage(this.ygh, this.x, this.y)
                }
            }
        }
    };
    this.dsy = function() {
        b.parent.egc();
        if (b.ech[b.fhg] <= 0) {
            return
        }
        if (b.yyz === false) {
            b.upt = setTimeout(b.parent.lfu, 400);
            b.qtk = setTimeout(b.parent.tmy, 500)
        } else {
            b.dzw = true;
            b.ifq = true;
            b.upt = setTimeout(b.xwd, 400)
        }
    };
    this.ujm = function() {
        b.parent.egc();
        b.lbg = true;
        if (b.yyz === false) {
            b.upt = setTimeout(b.parent.lfu, 400)
        } else {
            b.dzw = true;
            b.upt = setTimeout(b.xwd, 400)
        }
    };
    this.mbe = function() {
        b.fhg = (b.fhg < b.ech.length - 1) ? b.fhg + 1 : 0;
        b.parent.eyo.urt("step0");
        b.xlm.mom("gamesd", "#rwv", [(b.ech[b.fhg] > 0) ? b.ech[b.fhg] : "---"]);
        b.parent.egc();
        return (b.fhg >= b.ech.length - 1)
    };
    this.bvl = function() {
        b.fhg = (b.fhg > 0) ? b.fhg - 1 : b.ech.length - 1;
        b.parent.eyo.urt("step0");
        b.xlm.mom("gamesd", "#rwv", [(b.ech[b.fhg] > 0) ? b.ech[b.fhg] : "---"]);
        b.parent.egc();
        return (b.fhg <= 0)
    };
    this.gif = function() {
        var d = b.xlm.whx("cmincredit") == null || b.xlm.mom("cmincredit", "#kqy");
        if (d === true) {
            if (++b.itj > 10) {
                b.ias = 10
            }
            b.uhs = (b.uhs + (b.wnx * b.ias) <= b.parent.pwr) ? b.uhs + (b.wnx * b.ias) : b.parent.pwr;
            b.parent.eyo.urt("step0");
            b.xlm.mom("mincreditd", "#rwv", [(b.uhs > 0) ? b.parent.tyk(b.uhs) : "---"]);
            b.xlm.mom("mmincredit", "#esj", [d && b.uhs < b.parent.pwr]);
            b.xlm.mom("lmincredit", "#esj", [d && b.uhs > 0]);
            b.parent.egc();
            return (b.uhs >= b.parent.pwr)
        }
        return true
    };
    this.liv = function() {
        var d = b.xlm.whx("cmincredit") == null || b.xlm.mom("cmincredit", "#kqy");
        if (d === true) {
            if (++b.itj > 10) {
                b.ias = 10
            }
            b.uhs = (b.uhs - (b.wnx * b.ias) > 0) ? b.uhs - (b.wnx * b.ias) : 0;
            b.parent.eyo.urt("step0");
            b.xlm.mom("mincreditd", "#rwv", [(b.uhs > 0) ? b.parent.tyk(b.uhs) : "---"]);
            b.xlm.mom("mmincredit", "#esj", [d && b.uhs < b.parent.pwr]);
            b.xlm.mom("lmincredit", "#esj", [d && b.uhs > 0]);
            b.parent.egc();
            return (b.uhs >= b.parent.pwr || b.uhs <= 0)
        }
        return true
    };
    this.ycy = function() {
        var d = b.xlm.whx("cmaxcredit") == null || b.xlm.mom("cmaxcredit", "#kqy");
        if (d === true) {
            if (++b.itj > 10) {
                b.ias = 10
            }
            b.rsb = (b.rsb + (b.dow * b.ias) > 0) ? b.rsb + (b.dow * b.ias) : 0;
            b.parent.eyo.urt("step0");
            b.xlm.mom("maxcreditd", "#rwv", [(b.rsb > 0) ? b.parent.tyk(b.rsb) : "---"]);
            b.xlm.mom("lmaxcredit", "#esj", [d && b.rsb > b.parent.pwr]);
            b.parent.egc();
            return (b.rsb <= b.parent.pwr)
        }
        return true
    };
    this.pyh = function() {
        var d = b.xlm.whx("cmaxcredit") == null || b.xlm.mom("cmaxcredit", "#kqy");
        if (d === true) {
            if (++b.itj > 10) {
                b.ias = 10
            }
            b.rsb = (b.rsb - (b.dow * b.ias) > b.parent.pwr) ? b.rsb - (b.dow * b.ias) : b.parent.pwr;
            b.parent.eyo.urt("step0");
            b.xlm.mom("maxcreditd", "#rwv", [(b.rsb > 0) ? b.parent.tyk(b.rsb) : "---"]);
            b.xlm.mom("lmaxcredit", "#esj", [d && b.rsb > b.parent.pwr]);
            b.parent.egc();
            return (b.rsb <= b.parent.pwr)
        }
        return true
    };
    this.yum = function() {
        var d = b.xlm.whx("cmaxwin") == null || b.xlm.mom("cmaxwin", "#kqy");
        if (d === true) {
            if (++b.itj > 10) {
                b.ias = 10
            }
            b.zmh = (b.zmh + (b.dow * b.ias) > 0) ? b.zmh + (b.dow * b.ias) : 0;
            b.parent.eyo.urt("step0");
            b.xlm.mom("maxwind", "#rwv", [(b.zmh > 0) ? b.parent.tyk(b.zmh) : "---"]);
            b.xlm.mom("lmaxwin", "#esj", [d && b.zmh > b.dow]);
            b.parent.egc();
            return (b.zmh <= b.dow)
        }
        return true
    };
    this.fqh = function() {
        var d = b.xlm.whx("cmaxwin") == null || b.xlm.mom("cmaxwin", "#kqy");
        if (d === true) {
            if (++b.itj > 10) {
                b.ias = 10
            }
            b.zmh = (b.zmh - (b.dow * b.ias) > 0) ? b.zmh - (b.dow * b.ias) : b.dow;
            b.parent.eyo.urt("step0");
            b.xlm.mom("maxwind", "#rwv", [(b.zmh > 0) ? b.parent.tyk(b.zmh) : "---"]);
            b.xlm.mom("lmaxwin", "#esj", [d && b.zmh > b.dow]);
            b.parent.egc();
            return (b.zmh <= b.dow)
        }
        return true
    };
    this.fth = function() {
        var d = b.xlm.whx("cmincredit") == null || b.xlm.mom("cmincredit", "#kqy");
        b.uhs = b.parent.pwr;
        b.xlm.mom("mincreditd", "#rwv", [(d === true && b.uhs > 0) ? b.parent.tyk(b.uhs) : "---"]);
        b.xlm.mom("lmincredit", "#esj", [d]);
        b.xlm.mom("mmincredit", "#esj", [d && b.uhs < b.parent.pwr]);
        b.parent.egc()
    };
    this.mid = function() {
        var d = b.xlm.whx("cmaxcredit") == null || b.xlm.mom("cmaxcredit", "#kqy");
        b.rsb = b.parent.pwr;
        b.xlm.mom("maxcreditd", "#rwv", [(d === true && b.rsb > 0) ? b.parent.tyk(b.rsb) : "---"]);
        b.xlm.mom("lmaxcredit", "#esj", [d && b.rsb > b.parent.pwr]);
        b.xlm.mom("mmaxcredit", "#esj", [d]);
        b.parent.egc()
    };
    this.gxu = function() {
        var d = b.xlm.whx("cmaxwin") == null || b.xlm.mom("cmaxwin", "#kqy");
        if (b.zmh === 0) {
            b.zmh = b.dow
        }
        b.xlm.mom("maxwind", "#rwv", [(d === true && b.zmh > 0) ? b.parent.tyk(b.zmh) : "---"]);
        b.xlm.mom("lmaxwin", "#esj", [d && b.zmh > b.dow]);
        b.xlm.mom("mmaxwin", "#esj", [d]);
        b.parent.egc()
    }
}
kww.prototype = new tgm;

function zgl() {
    var a = this;
    this.xlm = null;
    this.ejk = false;
    this.app = "";
    this.gwi = "";
    this.jhs = "";
    this.cuu = "";
    this.ejd = "";
    this.kta = "";
    this.tps = "";
    this.aht = "arial";
    this.rwz = "bold";
    this.tnw = "white";
    this.skn = "black";
    this.ylq = null;
    this.gjq = "white";
    this.oho = "rgb(150,150,150)";
    this.kvw = 3;
    this.npd = 4;
    this.osc = 24;
    this.gcm = 24;
    this.hmu = 24;
    this.nun = new gup();
    this.mul = new gup();
    this.qlq = new gup();
    this.vet = new gup();
    this.chb = new gup();
    this.wui = new gup();
    this.fqo = new gup();
    this.ech = [];
    this.fhg = 0;
    this.wnx = 0;
    this.dow = 0;
    this.ahc = 0;
    this.sws = 0;
    this.uhs = 0;
    this.rsb = 0;
    this.zmh = 0;
    this.dgw = false;
    this.mzl = false;
    this.krb = 0;
    this.fdq = true;
    this.ojb = true;
    this.cmt = null;
    this.zuf = 0;
    this.itj = 0;
    this.ias = 1;
    this.vlj = 250;
    this.uwa = function(b, d, c) {
        zgl.prototype.uwa.call(this, b, d, c);
        this.xlm = new rch();
        this.xlm.uwa();
        this.xlm.knm("buttons");
        this.xlm.knm("displays");
        this.xlm.knm("checkboxes");
        this.xlm.knm("lbuttons");
        this.xlm.knm("mbuttons");
        this.xlm.knm("tbuttons");
        this.xlm.knm("bbuttons");
        this.xlm.knm("bdisplays");
        this.xlm.knm("abuttons");
        this.xlm.knm("adisplays");
        this.xlm.knm("acheckboxes");
        this.xlm.knm("sbuttons");
        this.xlm.knm("hbuttons")
    };
    this.hin = function(b) {
        try {
            this.wbw(b);
            this.xpc(b);
            this.ypr(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.raa = function(b) {
        try {
            var c = this.xlm.jkd("lbuttons"),
                n = this.xlm.jkd("mbuttons"),
                k = this.xlm.jkd("tbuttons"),
                m = this.xlm.jkd("sbuttons"),
                l = this.xlm.jkd("hbuttons"),
                f = this.xlm.jkd("displays");
            this.aht = b.font;
            this.rwz = b.pev;
            this.tnw = b.ydb;
            this.skn = b.backgroundColor;
            this.ylq = b.pbq;
            this.gjq = b.borderColor;
            this.oho = b.ldt;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].raa(b.kmf)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].raa(b.fdm)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].raa(b.wef)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].raa(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].raa(b.zbo)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].raa(b.zbo)
            }
            this.xlm.hui("checkboxes", "#raa", [b.tav])
        } catch (j) {
            console.error(j)
        }
    };
    this.cep = function(g) {
        try {
            var b = this.xlm.jkd("lbuttons"),
                o = this.xlm.jkd("mbuttons"),
                l = this.xlm.jkd("tbuttons"),
                n = this.xlm.jkd("sbuttons"),
                m = this.xlm.jkd("hbuttons"),
                c = this.xlm.jkd("bdisplays"),
                f = this.xlm.jkd("adisplays");
            evv = this.xlm.jkd("checkboxes"), prm = n.length, eng = (prm <= 2) ? g.znm : (prm <= 3) ? g.rpg : (prm <= 4) ? g.knq : g.hpl, prm = m.length, kna = (prm <= 2) ? g.znm : (prm <= 3) ? g.rpg : (prm <= 4) ? g.knq : g.hpl, tai = (this.parent.ruj() != null) ? g.iff : g.nnc;
            this.kvw = g.stc;
            this.npd = g.jau;
            this.osc = g.ujf;
            this.gcm = g.cmw;
            this.hmu = g.iur;
            this.nun = g.cwl;
            this.mul = g.hch;
            this.qlq = g.zmg;
            this.vet = g.nxz;
            this.chb = g.buy;
            this.wui = g.ori;
            this.fqo = g.frb;
            this.xlm.mom("bett", "#qjx", [tai.aug]);
            this.xlm.mom("autot", "#qjx", [tai.ofo]);
            this.xlm.mom("helpt", "#qjx", [tai.nqu]);
            this.xlm.mom("settingt", "#qjx", [tai.axh]);
            this.xlm.mom("returnt", "#qjx", [tai.ivs]);
            this.xlm.mom("lbet", "#qjx", [g.scq]);
            this.xlm.mom("mbet", "#qjx", [g.cuw]);
            this.xlm.mom("llines", "#qjx", [g.ugw]);
            this.xlm.mom("mlines", "#qjx", [g.vdk]);
            this.xlm.mom("betd", "#qjx", [g.whv]);
            this.xlm.mom("linesd", "#qjx", [g.cqt]);
            this.xlm.mom("totald", "#qjx", [g.uxc]);
            this.xlm.mom("lgames", "#qjx", [g.ibc]);
            this.xlm.mom("mgames", "#qjx", [g.lmd]);
            this.xlm.mom("lmincredit", "#qjx", [g.yha]);
            this.xlm.mom("mmincredit", "#qjx", [g.qef]);
            this.xlm.mom("lmaxcredit", "#qjx", [g.vqm]);
            this.xlm.mom("mmaxcredit", "#qjx", [g.gcw]);
            this.xlm.mom("lmaxwin", "#qjx", [g.jdh]);
            this.xlm.mom("mmaxwin", "#qjx", [g.jxh]);
            this.xlm.mom("gamesd", "#qjx", [g.npe]);
            this.xlm.mom("mincreditd", "#qjx", [g.hhs]);
            this.xlm.mom("maxcreditd", "#qjx", [g.hrt]);
            this.xlm.mom("maxwind", "#qjx", [g.nqh]);
            this.xlm.mom("cmincredit", "#qjx", [g.nrb]);
            this.xlm.mom("cmaxcredit", "#qjx", [g.lkd]);
            this.xlm.mom("cmaxwin", "#qjx", [g.azm]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].cep(g.kmf)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].cep(g.fdm)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].cep(g.wef)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].cep(g.ipr)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].cep(g.thb)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].cep(g.zbo)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].cep(g.zbo)
            }
            for (var d = 0, j = evv.length; d < j; d++) {
                evv[d].cep(g.tav)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].qjx(eng[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].qjx(kna[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.wbw = function(c) {
        var b = (this.parent.ruj() != null) ? c.iff : c.nnc;
        this.xlm.mzx("bett", this.bdw(b.aug, null, this.parent.eyo.jgz("btn_b"), this.zwe, null), ["buttons", "tbuttons"]);
        if (this.parent.ruj() != null) {
            this.xlm.mzx("autot", this.bdw(b.ofo, null, this.parent.eyo.jgz("btn_as"), this.xod, null), ["buttons", "tbuttons"])
        }
        this.xlm.mzx("helpt", this.bdw(b.nqu, null, this.parent.eyo.jgz("btn_i"), this.xju, null), ["buttons", "tbuttons"]);
        this.xlm.mzx("settingt", this.bdw(b.axh, null, this.parent.eyo.jgz("btn_se"), this.hhq, null), ["buttons", "tbuttons"]);
        this.xlm.mzx("returnt", this.bdw(b.ivs, null, this.parent.eyo.jgz("btn_c"), this.bnj, null), ["buttons", "tbuttons"])
    };
    this.xpc = function(b) {
        this.xlm.mzx("betd", this.jvs(b.whv, null, this.parent.nza), ["displays", "bdisplays"]);
        this.xlm.mzx("lbet", this.hsf(b.scq, "", this.parent.psu), ["buttons", "lbuttons", "bbuttons"]);
        this.xlm.mzx("mbet", this.hsf(b.cuw, "+", this.parent.giy), ["buttons", "mbuttons", "bbuttons"]);
        this.xlm.mzx("linesd", this.jvs(b.cqt, null, this.parent.yzu), ["displays", "bdisplays"]);
        if (this.ejk) {
            this.xlm.mzx("llines", this.hsf(b.ugw, "", this.parent.oaj), ["buttons", "lbuttons", "bbuttons"]);
            this.xlm.mzx("mlines", this.hsf(b.vdk, "+", this.parent.ild), ["buttons", "mbuttons", "bbuttons"])
        }
        this.xlm.mzx("totald", this.jvs(b.uxc, null, this.parent.eik()), ["displays", "bdisplays"])
    };
    this.ypr = function(b) {
        this.xlm.mzx("gamesd", this.jvs(b.npe, null, this.ech[this.fhg]), ["displays", "adisplays"]);
        this.xlm.mzx("lgames", this.hsf(b.ibc, "", this.bvl), ["buttons", "lbuttons", "abuttons"]);
        this.xlm.mzx("mgames", this.hsf(b.lmd, "+", this.mbe), ["buttons", "mbuttons", "abuttons"]);
        this.xlm.mzx("mincreditd", this.jvs(b.hhs, null, "---"), ["displays", "adisplays"]);
        this.xlm.mzx("lmincredit", this.hsf(b.yha, "", this.liv), ["buttons", "lbuttons", "abuttons"]);
        this.xlm.mzx("mmincredit", this.hsf(b.qef, "+", this.gif), ["buttons", "mbuttons", "abuttons"]);
        this.xlm.mzx("maxcreditd", this.jvs(b.hrt, null, "---"), ["displays", "adisplays"]);
        this.xlm.mzx("lmaxcredit", this.hsf(b.vqm, "", this.pyh), ["buttons", "lbuttons", "abuttons"]);
        this.xlm.mzx("mmaxcredit", this.hsf(b.gcw, "+", this.ycy), ["buttons", "mbuttons", "abuttons"]);
        this.xlm.mzx("maxwind", this.jvs(b.nqh, null, "---"), ["displays", "adisplays"]);
        this.xlm.mzx("lmaxwin", this.hsf(b.jdh, "", this.fqh), ["buttons", "lbuttons", "abuttons"]);
        this.xlm.mzx("mmaxwin", this.hsf(b.jxh, "+", this.yum), ["buttons", "mbuttons", "abuttons"]);
        this.xlm.mzx("cmincredit", this.kja(b.nrb, "", this.fth), ["checkboxes", "acheckboxes"]);
        this.xlm.mzx("cmaxcredit", this.kja(b.lkd, "", this.mid), ["checkboxes", "acheckboxes"]);
        this.xlm.mzx("cmaxwin", this.kja(b.azm, "", this.gxu), ["checkboxes", "acheckboxes"])
    };
    this.ekj = function(j, g, f, e, d, b) {
        var c = new gcg();
        c.uwa(new gup(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.uva = e;
        c.mpu = g;
        c.hte(d, b);
        c.cep(this.parent.uhn.raz.zbo);
        c.raa(this.parent.style.raz.zbo);
        c.yct(f);
        this.xlm.mzx(j, c, ["buttons", "sbuttons"])
    };
    this.qqd = function(f, e, d, c) {
        var b = new gcg();
        b.uwa(new gup(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.uva = c;
        b.mpu = e;
        b.cep(this.parent.uhn.raz.zbo);
        b.raa(this.parent.style.raz.zbo);
        b.yct(d);
        this.xlm.mzx(f, b, ["buttons", "hbuttons"])
    };
    this.jvs = function(b, e, d) {
        var c = new vwd();
        c.uwa(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.hsf = function(c, e, d) {
        var b = new tvb();
        b.uwa(c, this.context2D, null, null, e);
        b.parent = this;
        b.uva = d;
        return b
    };
    this.bdw = function(d, g, f, e, c) {
        var b = new tvb();
        b.uwa(d, this.context2D, null, f, g);
        b.parent = this;
        b.uva = e;
        if (c != null) {
            b.uut = c
        }
        return b
    };
    this.kja = function(c, e, d) {
        var b = new pzz();
        b.uwa(c, this.context2D, null, e);
        b.parent = this;
        b.uva = d;
        return b
    };
    this.rap = function(o, n) {
        var m = this.xlm.jkd("buttons"),
            g = this.xlm.jkd("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.kvp() === true) {
                if (b.kca() === true && b.buj() === false) {
                    if (b instanceof gcg) {
                        this.parent.eyo.zqb("btn");
                        this.parent.eyo.urt("btn");
                        b.erw(true, true, true);
                        b.uva()
                    } else {
                        if (b instanceof tvb) {
                            if (b.ylv() === "rect") {
                                this.parent.eyo.zqb("btn");
                                this.parent.eyo.urt("btn");
                                b.erw(true, true, false);
                                b.uva()
                            } else {
                                b.erw(true, false, false);
                                this.itj = 0;
                                this.ias = 1;
                                if (b.uva() === false) {
                                    this.cmt = function() {
                                        if (b.uva() === true) {
                                            clearInterval(a.zuf);
                                            b.erw(false, true);
                                            for (var p = 0; p < l; p++) {
                                                m[p].cou(false)
                                            }
                                        }
                                    };
                                    this.zuf = setInterval(this.cmt, this.vlj)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].cou(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.kvp() === true && k.kca() === true) {
                    k.rwd(!k.kqy(), true);
                    k.uva();
                    for (var c = 0; c < l; c++) {
                        g[c].cou(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.fwp = function() {
        var e = this.xlm.jkd("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.uyg() == true && !(c instanceof tvb && c.ylv() === "rect")) {
                clearInterval(this.zuf);
                c.erw(false, true);
                return true
            }
        }
        return false
    };
    this.hld = function(b) {};
    this.smf = function(b) {};
    this.hzp = function(c, b, d) {
        this.xlm.mom("betd", "#rwv", [c]);
        this.xlm.mom("linesd", "#rwv", [b]);
        this.xlm.mom("totald", "#rwv", [d]);
        this.parent.egc()
    };
    this.jfo = function(b) {
        this.ech = b.g;
        this.wnx = b.v;
        this.dow = b.v;
        this.dgw = b.r;
        this.mzl = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.ahc = b.m;
            this.sws = b.m
        }
    };
    this.hop = function() {
        if (this.dgw === true) {
            this.uhs = this.parent.pwr;
            this.rsb = this.parent.pwr;
            this.fhg = 0;
            this.zmh = 0
        }
    };
    this.xii = function() {
        if (this.ech.length > 0 && this.fhg >= 0) {
            return this.ech[this.fhg]
        }
        return 0
    };
    this.gzr = function() {
        var b = this.xlm.whx("cmincredit") == null || this.xlm.mom("cmincredit", "#kqy");
        if (this.uhs > 0 && b === true) {
            return this.uhs
        }
        return 0
    };
    this.xqv = function() {
        var b = this.xlm.whx("cmaxcredit") == null || this.xlm.mom("cmaxcredit", "#kqy");
        if (this.rsb > 0 && b === true) {
            return this.rsb
        }
        return 0
    };
    this.fxu = function() {
        var b = this.xlm.whx("cmaxwin") == null || this.xlm.mom("cmaxwin", "#kqy");
        if (this.zmh > 0 && b === true) {
            return this.zmh
        }
        return 0
    };
    this.gjt = function(c, f, d) {
        if (this.ech && this.ech.length > 0) {
            var g = this.xlm.whx("cmincredit") == null || this.xlm.mom("cmincredit", "#kqy"),
                e = this.xlm.whx("cmaxcredit") == null || this.xlm.mom("cmaxcredit", "#kqy"),
                b = this.xlm.whx("cmaxwin") == null || this.xlm.mom("cmaxwin", "#kqy");
            if (this.dgw === true) {
                g = this.mzl;
                e = false;
                b = false;
                this.hop()
            } else {
                if (this.mzl === true) {
                    g = true;
                    this.uhs = (this.uhs < this.parent.pwr) ? this.uhs : this.parent.pwr;
                    this.uhs = (this.uhs > 0) ? this.uhs : this.parent.pwr
                } else {
                    g = (this.uhs < this.parent.pwr) ? g : false;
                    this.uhs = (this.uhs < this.parent.pwr) ? this.uhs : this.parent.pwr
                }
                e = (this.rsb > this.parent.pwr) ? e : false;
                this.rsb = (this.rsb > this.parent.pwr) ? this.rsb : this.parent.pwr
            }
            this.xlm.mom("cmincredit", "#rwd", [g]);
            this.xlm.mom("cmaxcredit", "#rwd", [e]);
            this.xlm.mom("cmaxwin", "#rwd", [b]);
            this.xlm.mom("gamesd", "#rwv", [(this.ech[this.fhg] > 0) ? this.ech[this.fhg] : "---"]);
            this.xlm.mom("mincreditd", "#rwv", [(g === true && this.uhs > 0) ? this.parent.tyk(this.uhs) : "---"]);
            this.xlm.mom("maxcreditd", "#rwv", [(e === true && this.rsb > 0) ? this.parent.tyk(this.rsb) : "---"]);
            this.xlm.mom("maxwind", "#rwv", [(b === true && this.zmh > 0) ? this.parent.tyk(this.zmh) : "---"]);
            this.xlm.mom("lmincredit", "#esj", [g]);
            this.xlm.mom("mmincredit", "#esj", [g]);
            this.xlm.mom("lmaxcredit", "#esj", [e]);
            this.xlm.mom("mmaxcredit", "#esj", [e]);
            this.xlm.mom("lmaxwin", "#esj", [b]);
            this.xlm.mom("mmaxwin", "#esj", [b])
        }
        this.fdq = c;
        this.ojb = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.zwe()
            } else {
                if (d === 1) {
                    if (this.parent.ruj() != null) {
                        this.xod()
                    } else {
                        this.xju()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.ruj() != null) {
                            this.xju()
                        } else {
                            this.hhq()
                        }
                    } else {
                        if (d === 3 && this.parent.ruj() != null) {
                            this.hhq()
                        }
                    }
                }
            }
        } else {
            this.zwe()
        }
        this.xlm.hui("tbuttons", "#zjd", [true]);
        this.esj(true);
        this.parent.egc()
    };
    this.xwd = function() {
        this.xlm.hui("tbuttons", "#zjd", [false]);
        this.xlm.hui("bbuttons", "#zjd", [false]);
        this.xlm.hui("sbuttons", "#zjd", [false]);
        this.xlm.hui("abuttons", "#zjd", [false]);
        this.xlm.hui("acheckboxes", "#zjd", [false]);
        this.esj(false);
        this.parent.egc()
    };
    this.stop = function() {
        clearInterval(this.zuf)
    };
    this.pog = function(d, b) {
        var c = "";
        this.xlm.mom("language", "#rwv", [bva.mij.wyj(d.language)]);
        this.xlm.mom("audio", "#rwv", [bva.mij.wyj(d.audio)]);
        this.xlm.mom("melody", "#rwv", [bva.mij.wyj(d.ucf)]);
        this.xlm.mom("fullscreen", "#rwv", [bva.mij.wyj(d.zdw)]);
        this.xlm.mom("turbo", "#rwv", [bva.mij.wyj(d.qpy)]);
        this.xlm.mom("help", "#rwv", [bva.mij.wyj(d.iog)]);
        this.xlm.mom("history", "#rwv", [bva.mij.wyj(d.xfn)]);
        this.xlm.mom("statistic", "#rwv", [bva.mij.wyj(d.bml)]);
        this.xlm.mom("rules", "#rwv", [bva.mij.wyj(d.irl)]);
        this.xlm.mom("gamble", "#rwv", [bva.mij.wyj(d.ivl)]);
        if (bva.mij.msp[bva.mij.ngt] === bva.xoc.cil) {
            c = bva.mij.wyj(d.left)
        } else {
            if (bva.mij.msp[bva.mij.ngt] === bva.xoc.xzx) {
                c = bva.mij.wyj(d.bib)
            } else {
                if (bva.mij.msp[bva.mij.ngt] === bva.xoc.xny) {
                    c = bva.mij.wyj(d.kpp)
                }
            }
        }
        this.xlm.mom("adjustment", "#rwv", [c]);
        if (b && b === true) {
            this.app = bva.mij.wyj(d.wmw) + "/" + bva.mij.wyj(d.oat) + ":";
            this.gwi = bva.mij.wyj(d.yzu) + ":"
        } else {
            this.app = bva.mij.wyj(d.wmw) + ":"
        }
        this.jhs = bva.mij.wyj(d.nfu) + ":";
        this.kta = bva.mij.wyj(d.zbe);
        this.tps = bva.mij.wyj(d.wpf);
        if (this.parent.bmt === true && bva.uug.value44.d === true) {
            this.ejd = bva.mij.wyj(d.dhi)
        }
        this.xlm.mom("cmincredit", "#rwv", [bva.mij.wyj(d.uhr)]);
        this.xlm.mom("cmaxcredit", "#rwv", [bva.mij.wyj(d.xnn)]);
        this.xlm.mom("cmaxwin", "#rwv", [bva.mij.wyj(d.cxr)])
    };
    this.egc = function(l, j, m, e) {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.xlm.jkd("tbuttons"),
            b = this.skn,
            g = this.gjq;
        if (this.ylq) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.skn);
            b.addColorStop(1, this.ylq)
        }
        if (this.oho) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.gjq);
            g.addColorStop(1, this.oho)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        bva.kgg.yxw(n, 0, 0, this.width, this.height, this.npd, b, g, this.kvw);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].egc()
        }
        if (this.krb === 0) {
            this.kbf(n)
        } else {
            if (this.krb === 1) {
                this.pvu(n)
            } else {
                if (this.krb === 2) {
                    this.crq(n)
                } else {
                    if (this.krb === 3) {
                        this.svh(n)
                    }
                }
            }
        }
        n.restore();
        if (this.wxt && this.ygh) {
            if (c) {
                this.wxt.drawImage(this.ygh, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.wxt.drawImage(this.ygh, this.x, this.y)
            }
        }
    };
    this.kbf = function(c) {
        var f = this.xlm.jkd("bbuttons"),
            d = this.xlm.jkd("bdisplays");
        if (this.nun.width > 0 && this.nun.height > 0) {
            bva.kgg.ytt(c, this.app, this.tnw, this.nun.x, this.nun.y, this.nun.width, this.nun.height, this.aht, this.osc, this.rwz, 0)
        }
        if (this.mul.width > 0 && this.mul.height > 0) {
            bva.kgg.ytt(c, this.gwi, this.tnw, this.mul.x, this.mul.y, this.mul.width, this.mul.height, this.aht, this.osc, this.rwz, 0)
        }
        if (this.qlq.width > 0 && this.qlq.height > 0) {
            bva.kgg.ytt(c, this.jhs, this.tnw, this.qlq.x, this.qlq.y, this.qlq.width, this.qlq.height, this.aht, this.osc, this.rwz, 0)
        }
        bva.kgg.yxf(c, this.cuu, this.tnw, this.vet.x, this.vet.y, this.vet.width, this.vet.height, this.aht, this.hmu, this.rwz, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].egc()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].egc()
        }
    };
    this.pvu = function(c) {
        var f = this.xlm.jkd("abuttons"),
            d = this.xlm.jkd("adisplays"),
            g = this.xlm.jkd("acheckboxes");
        bva.kgg.yxf(c, this.ejd, this.tnw, this.chb.x, this.chb.y, this.chb.width, this.chb.height, this.aht, this.hmu, this.rwz, "center", true);
        bva.kgg.ytt(c, this.kta, this.tnw, this.wui.x, this.wui.y, this.wui.width, this.wui.height, this.aht, this.gcm, this.rwz, 0);
        bva.kgg.sxn(c, this.tps, this.tnw, this.fqo.x, this.fqo.y, this.fqo.width, this.fqo.height, this.aht, this.gcm, this.rwz);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].egc()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].egc()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].egc()
        }
    };
    this.crq = function(c) {
        var d = this.xlm.jkd("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].egc()
        }
    };
    this.svh = function(c) {
        var d = this.xlm.jkd("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].egc()
        }
    };
    this.mbe = function() {
        a.fhg = (a.fhg < a.ech.length - 1) ? a.fhg + 1 : 0;
        a.parent.eyo.urt("btn");
        a.xlm.mom("gamesd", "#rwv", [(a.ech[a.fhg] > 0) ? a.ech[a.fhg] : "---"]);
        a.egc();
        return (a.fhg >= a.ech.length - 1)
    };
    this.bvl = function() {
        a.fhg = (a.fhg > 0) ? a.fhg - 1 : a.ech.length - 1;
        a.parent.eyo.urt("btn");
        a.xlm.mom("gamesd", "#rwv", [(a.ech[a.fhg] > 0) ? a.ech[a.fhg] : "---"]);
        a.egc();
        return (a.fhg <= 0)
    };
    this.gif = function() {
        var b = a.xlm.whx("cmincredit") == null || a.xlm.mom("cmincredit", "#kqy");
        if (b === true) {
            if (++a.itj > 10) {
                a.ias = 10
            }
            a.uhs = (a.uhs + (a.wnx * a.ias) <= a.parent.pwr) ? a.uhs + (a.wnx * a.ias) : a.parent.pwr;
            a.parent.eyo.urt("btn");
            a.xlm.mom("mincreditd", "#rwv", [(a.uhs > 0) ? a.parent.tyk(a.uhs) : "---"]);
            a.xlm.mom("mmincredit", "#esj", [b && a.uhs < a.parent.pwr]);
            a.xlm.mom("lmincredit", "#esj", [b && a.uhs > 0]);
            a.egc();
            return (a.uhs >= a.parent.pwr)
        }
        return true
    };
    this.liv = function() {
        var b = a.xlm.whx("cmincredit") == null || a.xlm.mom("cmincredit", "#kqy");
        if (b === true) {
            if (++a.itj > 10) {
                a.ias = 10
            }
            a.uhs = (a.uhs - (a.wnx * a.ias) > 0) ? a.uhs - (a.wnx * a.ias) : 0;
            a.parent.eyo.urt("btn");
            a.xlm.mom("mincreditd", "#rwv", [(a.uhs > 0) ? a.parent.tyk(a.uhs) : "---"]);
            a.xlm.mom("mmincredit", "#esj", [b && a.uhs < a.parent.pwr]);
            a.xlm.mom("lmincredit", "#esj", [b && a.uhs > 0]);
            a.egc();
            return (a.uhs >= a.parent.pwr || a.uhs <= 0)
        }
        return true
    };
    this.ycy = function() {
        var b = a.xlm.whx("cmaxcredit") == null || a.xlm.mom("cmaxcredit", "#kqy");
        if (b === true) {
            if (++a.itj > 10) {
                a.ias = 10
            }
            a.rsb = (a.rsb + (a.dow * a.ias) > 0) ? a.rsb + (a.dow * a.ias) : 0;
            a.parent.eyo.urt("btn");
            a.xlm.mom("maxcreditd", "#rwv", [(a.rsb > 0) ? a.parent.tyk(a.rsb) : "---"]);
            a.xlm.mom("lmaxcredit", "#esj", [b && a.rsb > a.parent.pwr]);
            a.egc();
            return (a.rsb <= a.parent.pwr)
        }
        return true
    };
    this.pyh = function() {
        var b = a.xlm.whx("cmaxcredit") == null || a.xlm.mom("cmaxcredit", "#kqy");
        if (b === true) {
            if (++a.itj > 10) {
                a.ias = 10
            }
            a.rsb = (a.rsb - (a.dow * a.ias) > a.parent.pwr) ? a.rsb - (a.dow * a.ias) : a.parent.pwr;
            a.parent.eyo.urt("btn");
            a.xlm.mom("maxcreditd", "#rwv", [(a.rsb > 0) ? a.parent.tyk(a.rsb) : "---"]);
            a.xlm.mom("lmaxcredit", "#esj", [b && a.rsb > a.parent.pwr]);
            a.egc();
            return (a.rsb <= a.parent.pwr)
        }
        return true
    };
    this.yum = function() {
        var b = a.xlm.whx("cmaxwin") == null || a.xlm.mom("cmaxwin", "#kqy");
        if (b === true) {
            if (++a.itj > 10) {
                a.ias = 10
            }
            a.zmh = (a.zmh + (a.dow * a.ias) > 0) ? a.zmh + (a.dow * a.ias) : 0;
            a.parent.eyo.urt("btn");
            a.xlm.mom("maxwind", "#rwv", [(a.zmh > 0) ? a.parent.tyk(a.zmh) : "---"]);
            a.xlm.mom("lmaxwin", "#esj", [b && a.zmh > a.dow]);
            a.egc();
            return (a.zmh <= a.dow)
        }
        return true
    };
    this.fqh = function() {
        var b = a.xlm.whx("cmaxwin") == null || a.xlm.mom("cmaxwin", "#kqy");
        if (b === true) {
            if (++a.itj > 10) {
                a.ias = 10
            }
            a.zmh = (a.zmh - (a.dow * a.ias) > 0) ? a.zmh - (a.dow * a.ias) : a.dow;
            a.parent.eyo.urt("btn");
            a.xlm.mom("maxwind", "#rwv", [(a.zmh > 0) ? a.parent.tyk(a.zmh) : "---"]);
            a.xlm.mom("lmaxwin", "#esj", [b && a.zmh > a.dow]);
            a.egc();
            return (a.zmh <= a.dow)
        }
        return true
    };
    this.fth = function() {
        var b = a.xlm.whx("cmincredit") == null || a.xlm.mom("cmincredit", "#kqy");
        a.uhs = a.parent.pwr;
        a.xlm.mom("mincreditd", "#rwv", [(b === true && a.uhs > 0) ? a.parent.tyk(a.uhs) : "---"]);
        a.xlm.mom("lmincredit", "#esj", [b]);
        a.xlm.mom("mmincredit", "#esj", [b && a.uhs < a.parent.pwr]);
        a.egc()
    };
    this.mid = function() {
        var b = a.xlm.whx("cmaxcredit") == null || a.xlm.mom("cmaxcredit", "#kqy");
        a.rsb = a.parent.pwr;
        a.xlm.mom("maxcreditd", "#rwv", [(b === true && a.rsb > 0) ? a.parent.tyk(a.rsb) : "---"]);
        a.xlm.mom("lmaxcredit", "#esj", [b && a.rsb > a.parent.pwr]);
        a.xlm.mom("mmaxcredit", "#esj", [b]);
        a.egc()
    };
    this.gxu = function() {
        var b = a.xlm.whx("cmaxwin") == null || a.xlm.mom("cmaxwin", "#kqy");
        if (a.zmh === 0) {
            a.zmh = a.dow
        }
        a.xlm.mom("maxwind", "#rwv", [(b === true && a.zmh > 0) ? a.parent.tyk(a.zmh) : "---"]);
        a.xlm.mom("lmaxwin", "#esj", [b && a.zmh > a.dow]);
        a.xlm.mom("mmaxwin", "#esj", [b]);
        a.egc()
    };
    this.zwe = function() {
        a.krb = 0;
        a.xlm.mom("bett", "#erw", [true, false, false]);
        a.xlm.mom("autot", "#erw", [false, false, false]);
        a.xlm.mom("helpt", "#erw", [false, false, false]);
        a.xlm.mom("settingt", "#erw", [false, false, false]);
        a.xlm.mom("returnt", "#erw", [false, false, false]);
        a.xlm.hui("bbuttons", "#zjd", [a.fdq]);
        a.xlm.hui("bbuttons", "#esj", [a.fdq]);
        a.xlm.hui("abuttons", "#zjd", [false]);
        a.xlm.hui("acheckboxes", "#zjd", [false]);
        a.xlm.hui("hbuttons", "#zjd", [false]);
        a.xlm.hui("sbuttons", "#zjd", [false]);
        a.egc()
    };
    this.xod = function() {
        var d = a.xlm.whx("cmincredit") == null || a.xlm.mom("cmincredit", "#kqy"),
            c = a.xlm.whx("cmaxcredit") == null || a.xlm.mom("cmaxcredit", "#kqy"),
            b = a.xlm.whx("cmaxwin") == null || a.xlm.mom("cmaxwin", "#kqy");
        a.krb = 1;
        a.wnx = (a.ahc > 0) ? a.parent.eik() * a.ahc : a.wnx;
        a.dow = (a.sws > 0) ? a.parent.eik() * a.sws : a.dow;
        a.xlm.mom("bett", "#erw", [false, false, false]);
        a.xlm.mom("autot", "#erw", [true, false, false]);
        a.xlm.mom("helpt", "#erw", [false, false, false]);
        a.xlm.mom("settingt", "#erw", [false, false, false]);
        a.xlm.mom("returnt", "#erw", [false, false, false]);
        a.xlm.hui("bbuttons", "#zjd", [false]);
        a.xlm.hui("abuttons", "#zjd", [true]);
        a.xlm.mom("mmincredit", "#esj", [d && a.uhs < a.parent.pwr]);
        a.xlm.mom("lmaxcredit", "#esj", [c && a.rsb > a.parent.pwr]);
        a.xlm.mom("lmaxwin", "#esj", [b && a.zmh > a.dow]);
        a.xlm.hui("acheckboxes", "#zjd", [true]);
        a.xlm.hui("hbuttons", "#zjd", [false]);
        a.xlm.hui("sbuttons", "#zjd", [false]);
        if (a.mzl === true) {
            a.xlm.mom("cmincredit", "#zjd", [false])
        }
        a.egc()
    };
    this.xju = function() {
        a.krb = 2;
        a.xlm.mom("bett", "#erw", [false, false, false]);
        a.xlm.mom("autot", "#erw", [false, false, false]);
        a.xlm.mom("helpt", "#erw", [true, false, false]);
        a.xlm.mom("settingt", "#erw", [false, false, false]);
        a.xlm.mom("returnt", "#erw", [false, false, false]);
        a.xlm.hui("bbuttons", "#zjd", [false]);
        a.xlm.hui("abuttons", "#zjd", [false]);
        a.xlm.hui("acheckboxes", "#zjd", [false]);
        a.xlm.hui("hbuttons", "#zjd", [true]);
        a.xlm.hui("sbuttons", "#zjd", [false]);
        a.egc()
    };
    this.hhq = function() {
        a.krb = 3;
        a.xlm.mom("bett", "#erw", [false, false, false]);
        a.xlm.mom("autot", "#erw", [false, false, false]);
        a.xlm.mom("helpt", "#erw", [false, false, false]);
        a.xlm.mom("settingt", "#erw", [true, false, false]);
        a.xlm.mom("returnt", "#erw", [false, false, false]);
        a.xlm.hui("bbuttons", "#zjd", [false]);
        a.xlm.hui("abuttons", "#zjd", [false]);
        a.xlm.hui("acheckboxes", "#zjd", [false]);
        a.xlm.hui("hbuttons", "#zjd", [false]);
        a.xlm.hui("sbuttons", "#zjd", [true]);
        a.xlm.mom("gamble", "#zjd", [a.ojb]);
        a.egc()
    };
    this.bnj = function() {
        a.parent.ije();
        a.xlm.mom("returnt", "#erw", [false, false, false])
    }
}
zgl.prototype = new tgm;

function mgm() {
    var a = this;
    this.xlm = null;
    this.krb = 0;
    this.gvr = [];
    this.skn = null;
    this.bxs = null;
    this.dvu = null;
    this.hzh = new gup();
    this.uwa = function(b, d, c) {
        mgm.prototype.uwa.call(this, b, d, c);
        this.lod = false;
        this.krb = 0;
        this.gvr = [];
        this.ack()
    };
    this.ack = function() {
        this.xlm = new rch();
        this.xlm.uwa();
        this.xlm.knm("buttons")
    };
    this.cep = function(f) {
        try {
            var d = this.xlm.jkd("buttons"),
                c = 0,
                b = d.length;
            this.hzh = f.faa;
            for (; c < b; c++) {
                d[c].cep(f.sue)
            }
            this.xlm.mom("return", "#qjx", [f.edl]);
            this.xlm.mom("page", "#qjx", [f.lgj]);
            this.xlm.mom("prev", "#qjx", [f.rrp]);
            this.xlm.mom("next", "#qjx", [f.agk])
        } catch (g) {
            console.error(g)
        }
    };
    this.raa = function(d) {
        try {
            var f = this.xlm.jkd("buttons");
            this.skn = d.backgroundColor;
            this.bxs = d.osq;
            this.dvu = d.pvd;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].raa((this.parent.uhn.sbj === false) ? d.zns : (this.parent.ngk === bva.uhn.opd) ? d.iwg : d.tmo)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.rap = function(m, l) {
        var k = this.xlm.jkd("buttons"),
            g = this.xlm.whx("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.kvp() == true) {
                if (b.kca() && !b.buj()) {
                    if (b != g) {
                        b.erw(true, true)
                    }
                    this.parent.eyo.zqb("btn");
                    this.parent.eyo.urt("btn");
                    b.uva();
                    for (var d = 0; d < f; d++) {
                        k[d].cou(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.fwp = function() {
        var e = this.xlm.jkd("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.uyg() === true) {
                c.erw(false, true);
                return true
            }
        }
        return false
    };
    this.hld = function(k) {
        var g = this.xlm.jkd("buttons"),
            c = this.xlm.whx("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.uut) {
                if (d.kca() && !d.buj()) {
                    if (d != c) {
                        d.erw(true, true)
                    }
                    this.parent.eyo.zqb("btn");
                    this.parent.eyo.urt("btn");
                    d.uva();
                    for (var e = 0; e < b; e++) {
                        g[e].cou(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.smf = function() {
        var e = this.xlm.jkd("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.uyg() === true) {
                c.erw(false, true);
                return true
            }
        }
        return false
    };
    this.hxw = function(b, c) {
        if (c && c === true) {
            this.gvr.unshift(b);
            this.krb++
        } else {
            this.gvr.push(b)
        }
    };
    this.gxq = function(b) {
        if (b && b === true) {
            this.gvr.shift();
            this.krb--
        } else {
            this.gvr.pop()
        }
    };
    this.pll = function() {
        return this.gvr.length
    };
    this.wbw = function(e, c, b) {
        var d = (this.parent.uhn.sbj === false) ? c.zns : (this.parent.ngk === bva.uhn.opd) ? c.iwg : c.tmo;
        if (this.parent.kdt === false) {
            this.xlm.mzx("return", this.hsf(e.edl, this.parent.language.ret, (this.parent.uhn.rqi === false) ? b : this.parent.eyo.jgz("btn_re"), this.bnj, (this.parent.pvb.spq) ? this.parent.pvb.spq : null, e.sue, d), ["buttons"]);
            this.xlm.mzx("page", this.hsf(e.lgj, (this.krb + 1) + "/" + this.gvr.length, b, this.uaz, null, e.sue, d), ["buttons"]);
            this.xlm.mzx("prev", this.hsf(e.rrp, this.parent.language.bpn, (this.parent.uhn.rqi === false) ? b : this.parent.eyo.jgz("btn_pr"), this.doi, (this.parent.pvb.mua) ? this.parent.pvb.mua : null, e.sue, d), ["buttons"]);
            this.xlm.mzx("next", this.hsf(e.agk, this.parent.language.yix, (this.parent.uhn.rqi === false) ? b : this.parent.eyo.jgz("btn_ne"), this.uaz, (this.parent.pvb.ite) ? this.parent.pvb.ite : null, e.sue, d), ["buttons"])
        }
    };
    this.hsf = function(g, k, b, j, d, f, e) {
        var c = new iyh();
        c.uwa(g, this.context2D, null, b, null, k);
        c.parent = this;
        c.uva = j;
        c.cep(f);
        c.raa(e);
        if (d) {
            c.uut = d.vmm
        }
        return c
    };
    this.egc = function(l, j, m, e) {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.xlm.jkd("buttons"),
            d = null;
        if (this.parent.uhn.sbj === false) {
            d = this.parent.eyo.jgz("btn_back")
        } else {
            if (this.parent.ngk === bva.uhn.opd) {
                d = (this.parent.eyo.jgz("h_right" + this.krb) != null) ? this.parent.eyo.jgz("h_right" + this.krb) : this.parent.eyo.jgz("h_right")
            } else {
                d = (this.parent.eyo.jgz("h_left" + this.krb) != null) ? this.parent.eyo.jgz("h_left" + this.krb) : this.parent.eyo.jgz("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.krb >= 0 && this.krb < this.gvr.length) {
            this.gvr[this.krb].egc()
        }
        if (d) {
            k = n.createLinearGradient(this.hzh.x, this.hzh.y, this.hzh.x + this.hzh.width, this.hzh.y);
            k.addColorStop(0.2, this.bxs);
            k.addColorStop(1, this.dvu);
            n.fillStyle = k;
            n.save();
            if (this.parent.uhn.sbj === false) {
                if (this.parent.ngk === bva.uhn.xhx) {
                    n.translate(this.hzh.width / 2, this.hzh.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.hzh.width / 2, -this.hzh.height / 2)
                }
                n.fillRect(this.hzh.x, this.hzh.y, this.hzh.width, this.hzh.height)
            }
            n.drawImage(d, this.hzh.x, this.hzh.y, this.hzh.width, this.hzh.height);
            n.restore()
        } else {
            if (this.skn != null) {
                n.fillStyle = this.skn;
                n.fillRect(this.hzh.x, this.hzh.y, this.hzh.width, this.hzh.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].egc()
        }
        n.restore();
        if (this.wxt && this.ygh) {
            if (b) {
                this.wxt.drawImage(this.ygh, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.wxt.drawImage(this.ygh, this.x, this.y)
            }
        }
    };
    this.ivx = function(f, g) {
        var e = this.xlm.whx("page"),
            c = this.xlm.whx("return"),
            b = this.xlm.whx("next"),
            d = this.xlm.whx("prev");
        if (e != null) {
            e.rwv((this.krb + 1) + "/" + this.gvr.length)
        }
        if (c != null) {
            c.esj(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.gvr.length > 1) {
                    b.esj(f);
                    d.esj(f);
                    e.esj(f)
                } else {
                    b.esj(false);
                    d.esj(false);
                    e.esj(false)
                }
            } else {
                b.esj(f);
                d.esj(f);
                e.esj(f)
            }
        }
        if (g && g === true) {
            this.egc()
        }
    };
    this.gjt = function() {
        this.krb = 0;
        this.ivx(true);
        this.esj(true, true)
    };
    this.xwd = function() {
        this.ivx(false);
        this.esj(false, true)
    };
    this.ouu = function() {
        var d = this.xlm.whx("page"),
            b = this.xlm.whx("next"),
            c = this.xlm.whx("prev");
        this.krb = (this.krb < this.gvr.length) ? this.krb : this.gvr.length - 1;
        this.krb = (this.krb < 0) ? 0 : this.krb;
        d.rwv((this.krb + 1) + "/" + this.gvr.length, true);
        if (this.gvr.length == 1) {
            b.esj(false);
            c.esj(false);
            d.esj(false)
        } else {
            b.esj(true);
            c.esj(true);
            d.esj(true)
        }
    };
    this.erc = function(c) {
        var e = this.xlm.jkd("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].zjd(c)
        }
    };
    this.bnj = function() {
        a.parent.cfl()
    };
    this.uaz = function() {
        var b = a.xlm.whx("page");
        if (a.krb < a.gvr.length - 1) {
            a.krb++
        } else {
            a.krb = 0
        }
        if (b) {
            b.rwv((a.krb + 1) + "/" + a.gvr.length, false)
        }
        a.egc()
    };
    this.doi = function() {
        var b = a.xlm.whx("page");
        if (a.krb > 0) {
            a.krb--
        } else {
            a.krb = a.gvr.length - 1
        }
        if (b) {
            b.rwv((a.krb + 1) + "/" + a.gvr.length, false)
        }
        a.egc()
    }
}
mgm.prototype = new tgm;

function lfx() {
    this.qza = new Image();
    this.pes = null;
    this.oop = [];
    this.jcd = [];
    this.yme = null;
    this.aht = null;
    this.rwz = "bold";
    this.hcz = null;
    this.tnw = null;
    this.xfz = null;
    this.vls = 0;
    this.iuw = [];
    this.agu = null;
    this.hum = 40;
    this.pbt = 18;
    this.tln = 1;
    this.uwa = function(b, d, c, a) {
        this.qza = a;
        this.oop = [];
        this.iuw = [];
        lfx.prototype.uwa.call(this, b, d, c)
    };
    this.cep = function(a) {
        try {
            this.agu = a.hwx;
            this.iuw = a.jgx;
            this.pbt = a.fontSize;
            this.hum = a.wck;
            this.tln = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.raa = function(a) {
        try {
            this.yme = a.yes;
            this.aht = a.font;
            this.rwz = a.pev;
            this.hcz = a.sru;
            this.tnw = a.ydb;
            this.xfz = a.noj
        } catch (b) {
            console.error(b)
        }
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.tnw;
        if (this.hcz) {
            b.strokeStyle = this.hcz
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.tln;
        b.font = this.rwz + " " + this.pbt + "px " + this.aht;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.qza, 0, 0);
        if ((this.height - this.qza.height) > 0) {
            var a = this.parent.hzh;
            b.drawImage(this.qza, a.x, a.y, a.width, this.qza.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.pes && this.agu) {
            bva.kgg.sxn(b, this.pes, this.xfz, this.agu.x, this.agu.y, this.agu.width, this.agu.height, this.yme, this.hum, this.rwz)
        }
        for (var c = 0; c < this.oop.length; c++) {
            this.yxf(this.oop[c], this.iuw[c], this.pbt, this.aht)
        }
        b.restore();
        if (this.wxt && this.ygh) {
            this.wxt.drawImage(this.ygh, this.x, this.y)
        }
    };
    this.lsp = function(j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.jcd = [];
        b.save();
        b.font = this.rwz + " " + g + "px " + d;
        this.cba(b, g, j, f, d);
        for (var e = 0, a = this.jcd.length; e < a; e++) {
            c = (f.height + this.vls) / (this.jcd.length + 1) * (e + 1);
            b.fillText(this.jcd[e], (f.x), f.y + c);
            if (this.hcz != null && b.lineWidth >= 1) {
                b.strokeText(this.jcd[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.yxf = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.jcd = [];
        a.save();
        a.font = this.rwz + " " + f + "px " + c;
        this.cba(a, f, g, e, c);
        for (var d = 0; d < this.jcd.length; d++) {
            b = (e.height + this.vls) / (this.jcd.length + 1) * (d + 1);
            a.fillText(this.jcd[d], (e.x + e.width / 2), e.y + b);
            if (this.hcz != null && a.lineWidth >= 1) {
                a.strokeText(this.jcd[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.cba = function(m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.vls = o;
        if (this.vls * n > g.height) {
            a = g.height / (this.vls * n);
            this.vls = Math.round(a * this.vls) - 1;
            m.font = this.rwz + " " + this.vls + "px " + b;
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
                this.jcd[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.jcd[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.jcd[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
lfx.prototype = new tgm;

function gcg() {
    var a = this;
    this.state = 0;
    this.ywb = 1;
    this.fvi = null;
    this.euw = null;
    this.blc = null;
    this.edt = "round";
    this.aht = null;
    this.rwz = "bold";
    this.wty = "center";
    this.skn = null;
    this.tnw = null;
    this.wen = 1;
    this.mco = null;
    this.pbt = 17;
    this.pat = 2;
    this.npd = 0;
    this.kvw = 1;
    this.qqt = 0;
    this.lzu = 0;
    this.lny = 0;
    this.cep = function(b) {
        try {
            this.pbt = b.fontSize;
            this.pat = b.dfz;
            this.npd = b.jau;
            this.kvw = b.stc;
            this.lny = b.dyd
        } catch (c) {
            console.error(c)
        }
    };
    this.raa = function(b) {
        try {
            this.edt = b.inp;
            this.aht = b.font;
            this.rwz = b.pev;
            this.wty = b.textAlign;
            this.skn = b.backgroundColor;
            this.tnw = b.ydb;
            this.wen = b.fcb;
            if (b.borderColor && b.ldt) {
                this.mco = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.mco.addColorStop(0, b.borderColor);
                this.mco.addColorStop(1, b.ldt)
            } else {
                this.mco = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.ylv = function() {
        return this.edt
    };
    this.hte = function(c, b) {
        this.state = c;
        this.ywb = b
    };
    this.yct = function(b) {
        this.qza = b;
        if (this.edt === "round") {
            this.qqt = this.width / 2 - this.pat
        }
        if (this.qza) {
            this.lzu = Math.round(this.qza.height / (2 * this.ywb))
        }
    };
    this.mcl = function(b) {
        this.state = (b < this.ywb) ? b : this.state
    };
    this.fds = function(b) {
        this.fvi = b
    };
    this.eqq = function() {
        a.ona = false
    };
    this.eqf = function() {
        a.thi = false;
        if (a.kvp()) {
            a.parent.egc(a.x, a.y, a.width, a.height)
        }
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var l = this.context2D,
            e = (this.kca()) ? this.wen : this.wen / 2,
            b = this.pbt,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.qza && this.uva) {
            if (!this.kca()) {
                l.globalAlpha = e
            }
            if (this.edt === "round") {
                bva.kgg.amm(l, this.x + this.width / 2, this.y + this.height / 2, this.qqt, this.skn, e * this.wen)
            } else {
                if (this.edt === "rect") {
                    bva.kgg.tez(l, this.x, this.y, this.width, this.height, this.npd, this.skn, e * this.wen, this.mco, this.kvw, e)
                }
            }
            if (this.uyg()) {
                if (this.edt === "round") {
                    l.drawImage(this.qza, 0, (this.state * 2 * this.lzu) + this.lzu, this.qza.width, this.lzu, this.x, this.y, this.width, this.height)
                } else {
                    if (this.edt === "rect") {
                        l.drawImage(this.qza, 0, (this.state * 2 * this.lzu) + this.lzu, this.qza.width, this.lzu, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.edt === "round") {
                    l.drawImage(this.qza, 0, (this.state * 2 * this.lzu), this.qza.width, this.lzu, this.x, this.y, this.width, this.height)
                } else {
                    if (this.edt === "rect") {
                        l.drawImage(this.qza, 0, (this.state * 2 * this.lzu), this.qza.width, this.lzu, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.mpu != null) {
                l.textAlign = this.wty;
                l.textBaseline = "bottom";
                l.font = this.rwz + " " + b + "px " + this.aht;
                l.fillStyle = this.tnw;
                d = this.mpu.split("|");
                j = 0;
                g = (this.wty === "center") ? this.x + this.width / 2 : (this.wty === "left") ? this.x + 2 * this.pat : this.x + this.width - 2 * this.pat;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.pat) {
                    c = ((this.width - 2 * this.pat) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.rwz + " " + b + "px " + this.aht
                }
                if (b * d.length > this.lny) {
                    c = ((this.lny) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.rwz + " " + b + "px " + this.aht
                }
                k = (this.height - this.pat - this.lny) + (this.lny - b * d.length) / 2;
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
gcg.prototype = new xbw;

function tvb() {
    var a = this;
    this.edt = "rect";
    this.pzr = -1;
    this.aht = null;
    this.rwz = "bold";
    this.skn = null;
    this.ylq = null;
    this.nmk = null;
    this.ewd = null;
    this.gjq = null;
    this.tnw = null;
    this.qit = null;
    this.npd = 3;
    this.sut = -2;
    this.wct = 2;
    this.ihp = 6;
    this.pbt = 26;
    this.kvw = 2;
    this.cep = function(b) {
        try {
            this.pbt = b.fontSize;
            this.sut = b.nrh;
            this.wct = b.rzh;
            this.ihp = b.ibs;
            this.npd = b.jau;
            this.kvw = b.stc
        } catch (c) {
            console.error(c)
        }
    };
    this.raa = function(b) {
        try {
            this.aht = b.font;
            this.rwz = b.pev;
            this.skn = b.backgroundColor;
            this.ylq = b.pbq;
            this.nmk = b.kud;
            this.ewd = b.qjy;
            this.gjq = b.borderColor;
            this.tnw = b.ydb;
            this.qit = b.sik;
            this.edt = b.inp;
            this.pzr = b.kcc
        } catch (c) {
            console.error(c)
        }
    };
    this.ylv = function() {
        return this.edt
    };
    this.eqq = function() {
        a.ona = false
    };
    this.eqf = function() {
        a.thi = false;
        if (a.kvp()) {
            a.parent.egc(a.x, a.y, a.width, a.height)
        }
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.skn,
            m = this.ylq,
            b = this.pbt,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.pzr == 0 || this.pzr == 3) ? this.npd : 0;
        lt = (this.pzr == 1 || this.pzr == 3) ? this.npd : 0;
        rb = (this.pzr == 0 || this.pzr == 2) ? this.npd : 0;
        lb = (this.pzr == 1 || this.pzr == 2) ? this.npd : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.uyg()) {
            n = (this.nmk != null) ? this.nmk : n;
            m = (this.ewd != null) ? this.ewd : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.edt === "rrect") {
                    bva.kgg.yzo(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.gjq, this.kvw, 1)
                } else {
                    if (this.edt === "rect") {
                        if (this.gjq) {
                            bva.kgg.yxw(p, this.x, this.y, this.width, this.height, this.npd, l, this.gjq, this.kvw)
                        } else {
                            bva.kgg.hvc(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.edt === "triangle") {
                            bva.kgg.oqh(p, this.pzr, this.x, this.y, this.width, this.height, this.npd, l, 1, this.gjq, this.kvw, 1)
                        }
                    }
                }
            } else {
                if (this.edt === "rrect") {
                    bva.kgg.yzo(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.gjq, this.kvw, 1)
                } else {
                    if (this.edt === "rect") {
                        if (this.gjq) {
                            bva.kgg.yxw(p, this.x, this.y, this.width, this.height, this.npd, n, this.gjq, this.kvw, 1)
                        } else {
                            bva.kgg.hvc(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.edt === "triangle") {
                            bva.kgg.oqh(p, this.pzr, this.x, this.y, this.width, this.height, this.npd, n, 1, this.gjq, this.kvw, 1)
                        }
                    }
                }
            }
        }
        if (this.qza != null) {
            h = this.height - 2 * this.ihp;
            p.drawImage(this.qza, this.x + this.width / 2 - h / 2, this.y + this.ihp, h, h)
        }
        if (this.mpu != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.mpu.split("|");
            d = 0;
            if (this.uyg()) {
                d = 1;
                p.fillStyle = this.qit
            } else {
                p.fillStyle = this.tnw
            }
            p.font = this.rwz + " " + b + "px " + this.aht;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.ihp) {
                c = ((this.width - 2 * this.ihp) / o);
                b = Math.round(c * b) - 1;
                p.font = this.rwz + " " + b + "px " + this.aht
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.rwz + " " + b + "px " + this.aht
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.sut, this.y - this.wct + k + d);
                k += b
            }
        }
        p.restore()
    }
}
tvb.prototype = new xbw;

function cev() {
    var a = this;
    this.zkf = null;
    this.jwo = null;
    this.owk = null;
    this.usn = null;
    this.bdv = null;
    this.lod = false;
    this.edn = -1;
    this.uwa = function() {
        this.zkf = document.getElementById("notificationDiv");
        this.jwo = document.getElementById("notificationTitle");
        this.owk = document.getElementById("notificationText");
        this.usn = document.getElementById("notificationIcon");
        this.bdv = document.getElementById("notificationCounter");
        if (this.zkf) {
            this.zkf.onclick = bva.mij.prl;
            this.zkf.ontouchend = bva.mij.prl
        }
    };
    this.raa = function(b) {};
    this.cep = function(b) {
        try {
            if (this.zkf) {
                this.knu(this.zkf, b.oue);
                if (this.lod) {
                    if (bva.mij.ngk === bva.uhn.xhx) {
                        this.zkf.className = "slideRight"
                    } else {
                        this.zkf.className = "slideLeft"
                    }
                }
            }
            if (this.jwo) {
                this.jwo.style.fontSize = b.wck + "px";
                this.jwo.style.left = b.hwx.x + "px";
                this.jwo.style.top = b.hwx.y + "px";
                this.jwo.style.width = b.hwx.width + "px"
            }
            if (this.owk) {
                this.owk.style.fontSize = b.cgx + "px";
                this.owk.style.left = b.jgx.x + "px";
                this.owk.style.top = b.jgx.y + "px";
                this.owk.style.width = b.jgx.width + "px"
            }
            if (this.usn) {
                this.knu(this.usn, b.ser)
            }
            if (this.bdv) {
                this.bdv.style.fontSize = b.xpj + "px";
                this.knu(this.bdv, b.qai)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.knu = function(c, b) {
        if (c) {
            c.style.left = b.x + "px";
            c.style.top = b.y + "px";
            c.style.width = b.width + "px";
            c.style.height = b.height + "px"
        }
    };
    this.gjt = function(d, c, b) {
        if (d && this.jwo) {
            this.jwo.innerHTML = d
        }
        if (c && this.owk) {
            this.owk.innerHTML = c.replace(/[\r]?\n/g, "")
        }
        if (b && this.bdv) {
            this.bdv.innerHTML = b
        }
        if (this.zkf) {
            if (this.edn >= 0) {
                clearTimeout(this.edn);
                this.edn = -1;
                this.zkf.className = null
            }
            this.lod = true;
            bva.mij.bpu();
            if (bva.mij.ngk === bva.uhn.xhx) {
                this.zkf.className = "slideInRightAnim"
            } else {
                this.zkf.className = "slideInLeftAnim"
            }
        }
    };
    this.xwd = function() {
        if (a.zkf && a.lod) {
            if (bva.mij.ngk === bva.uhn.xhx) {
                a.zkf.className = "slideOutRightAnim"
            } else {
                a.zkf.className = "slideOutLeftAnim"
            }
            a.edn = setTimeout(a.agx, 800)
        }
    };
    this.kvp = function() {
        if (this.lod) {
            return true
        }
        return false
    };
    this.agx = function() {
        a.lod = false;
        a.edn = -1;
        bva.mij.bpu()
    }
}

function gdm() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.asu = null;
    this.zkf = null;
    this.jwo = null;
    this.owk = null;
    this.wqw = null;
    this.rek = [];
    this.rxw = 0;
    this.foa = [];
    this.onx = [];
    this.krb = 0;
    this.npz = false;
    this.lod = false;
    this.uwa = function() {
        this.asu = document.getElementById("messageOverlay");
        this.zkf = document.getElementById("messagePanel");
        this.jwo = document.getElementById("messageTitle");
        this.owk = document.getElementById("messageText");
        this.wqw = document.getElementById("btne");
        if (this.wqw) {
            this.wqw.innerHTML = "\u00D7";
            this.wqw.onclick = this.xwd;
            this.wqw.ontouchend = this.xwd
        }
        for (var f = 0; f < 4; f++) {
            this.rek[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.raa = function(f) {
        try {
            this.foa = f.ekk
        } catch (g) {
            console.error(g)
        }
    };
    this.cep = function(j) {
        try {
            if (this.zkf) {
                bva.kgg.knu(this.zkf, j.oue)
            }
            if (this.jwo) {
                this.jwo.style.fontSize = j.wck + "px";
                bva.kgg.knu(this.jwo, j.hwx)
            }
            if (this.owk) {
                this.owk.style.fontSize = j.cgx + "px";
                bva.kgg.knu(this.owk, j.sjl)
            }
            if (this.wqw) {
                bva.kgg.knu(this.wqw, j.xne)
            }
            for (var g = 0, f = this.rek.length; g < f; g++) {
                this.rek[g].style.fontSize = j.sue.fontSize + "px";
                this.rek[g].style.top = j.btn.y + "px";
                this.rek[g].style.height = j.btn.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.gjt = function(j) {
        this.onx.length = 0;
        this.krb = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.onx[g] = j[g]
        }
        this.oov(this.onx[this.krb])
    };
    this.xwd = function() {
        if (b.zkf) {
            b.lod = false;
            b.zkf.style.display = "none";
            b.asu.style.display = "none";
            bva.mij.bpu();
            bva.mij.ycx = false
        }
    };
    this.oov = function(l) {
        var n = this.onx.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.lor === bva.pdb.sey || l.lor === bva.pdb.bab) {
            this.rxw = d;
            this.npz = (l.DisplayType == bva.ols.wku.mtp) ? true : false
        } else {
            if (l.lor === bva.pdb.ddk || l.lor === bva.pdb.mdw || l.lor === bva.pdb.xdj || l.lor === bva.pdb.roulette.ocv || l.lor === bva.pdb.roulette.mlo) {
                this.rxw = a;
                this.npz = false
            } else {
                if (l.lor === bva.pdb.oeb || l.lor === bva.pdb.ztr) {
                    this.rxw = c;
                    this.npz = false
                } else {
                    if (l.lor === bva.pdb.lbh || l.lor === bva.pdb.gfv || l.lor === bva.pdb.bcj) {
                        this.rxw = e;
                        this.npz = false
                    }
                }
            }
        }
        if (l.Title && this.jwo) {
            this.jwo.style.color = this.foa[this.rxw];
            this.jwo.innerHTML = l.Title
        }
        if (l.Text && this.owk) {
            this.owk.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.rek[0].innerHTML = "\u2039";
            this.rek[0].onclick = this.vxl;
            this.rek[0].ontouchend = this.vxl;
            this.rek[0].style.display = "inline-block";
            this.rek[this.rek.length - 1].innerHTML = "\u203A";
            this.rek[this.rek.length - 1].onclick = this.rdd;
            this.rek[this.rek.length - 1].ontouchend = this.rdd;
            this.rek[this.rek.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.rek.length - 1 : this.rek.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.rek[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.rek[g].innerHTML = bva.mij.language.whk
                    } else {
                        if (j == "continue") {
                            this.rek[g].innerHTML = bva.mij.language.mup.replace(/ /g, "")
                        } else {
                            this.rek[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.rek[g].onclick = bva.mij.owo;
                    this.rek[g].ontouchend = bva.mij.owo
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.lor === bva.pdb.sey) {
                            this.rek[g].onclick = this.nge.bind(this, l.Buttons[k].Link);
                            this.rek[g].ontouchend = this.nge.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.lor === bva.pdb.bab || l.lor === bva.pdb.lbh || l.lor === bva.pdb.gfv) {
                                this.rek[g].onclick = this.xrq;
                                this.rek[g].ontouchend = this.xrq
                            } else {
                                if (l.lor === bva.pdb.oeb || l.lor === bva.pdb.ztr || l.lor === bva.pdb.bcj) {
                                    this.rek[g].onclick = this.qhy;
                                    this.rek[g].ontouchend = this.qhy
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.rek[g].onclick = bva.mij.dnx;
                            this.rek[g].ontouchend = bva.mij.dnx
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === bva.ols.ijk.aut) {
                                    this.rek[g].onclick = this.zuz.bind(this, l.Buttons[k].Link);
                                    this.rek[g].ontouchend = this.zuz.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === bva.ols.ijk.xif) {
                                        this.rek[g].onclick = this.nge.bind(this, l.Buttons[k].Link);
                                        this.rek[g].ontouchend = this.nge.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === bva.ols.ijk.cii) {
                                            this.rek[g].onclick = this.uxn.bind(this, l.Buttons[k].Link);
                                            this.rek[g].ontouchend = this.uxn.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.rek[g].style.display = "inline-block"
            } else {
                this.rek[g].style.display = "none"
            }
        }
        this.wqw.style.display = (this.npz) ? "inline-block" : "none";
        if (this.zkf) {
            this.lod = true;
            this.zkf.style.display = "block";
            this.asu.style.display = "block";
            bva.mij.bpu();
            bva.mij.ycx = true
        }
    };
    this.kvp = function() {
        if (this.lod) {
            return true
        }
        return false
    };
    this.xrq = function() {
        b.xwd();
        bva.mij.uff(bva.mij.state)
    };
    this.nge = function(f) {
        var g = null;
        if (f) {
            g = bva.kgg.hqw("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        bva.mij.mno({
            type: "link",
            sender: bva.mij.hdt,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        b.xwd();
        bva.mij.chr()
    };
    this.uxn = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = bva.kgg.hqw("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.rek.length; g < f; g++) {
                b.rek[g].disabled = true
            }
            k.onload = function() {
                b.xwd();
                for (var m = 0, l = b.rek.length; m < l; m++) {
                    b.rek[m].disabled = false
                }
                bva.mij.chr()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.rek.length; m < l; m++) {
                    b.rek[m].disabled = false
                }
            }
        }
        bva.mij.mno({
            type: "link",
            sender: bva.mij.hdt,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        k.send()
    };
    this.qhy = function() {
        window.location.reload()
    };
    this.zuz = function(f) {
        bva.mij.mno({
            type: "link",
            sender: bva.mij.hdt,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        window.location.href = f
    };
    this.vxl = function() {
        b.krb = (b.krb > 0) ? b.krb - 1 : b.onx.length - 1;
        b.oov(b.onx[b.krb])
    };
    this.rdd = function() {
        b.krb = (b.krb < b.onx.length - 1) ? b.krb + 1 : 0;
        b.oov(b.onx[b.krb])
    }
}

function hjy() {
    var a = this;
    this.qza = new Image();
    this.gyx = "";
    this.yrs = "";
    this.pjl = -1;
    this.yuf = 0;
    this.nhw = 0;
    this.rdq = 5000;
    this.aht = null;
    this.rwz = "bold";
    this.tnw = null;
    this.skn = null;
    this.gjq = null;
    this.npd = 0;
    this.hdz = 0;
    this.ihp = 0;
    this.kvw = 0;
    this.wct = 0;
    this.pbt = 0;
    this.gct = null;
    this.uhg = 0;
    this.ffv = [];
    this.bod = 0;
    this.gzi = true;
    this.ppv = 0;
    this.cep = function(b) {
        try {
            this.pbt = b.fontSize;
            this.wct = b.rzh;
            this.npd = b.jau;
            this.hdz = b.fom;
            this.ihp = b.ibs;
            this.kvw = b.stc
        } catch (c) {
            console.error(c)
        }
    };
    this.raa = function(b) {
        try {
            this.aht = b.font;
            this.rwz = b.pev;
            this.skn = b.backgroundColor;
            this.tnw = b.ydb;
            this.gjq = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.mvq = function(e, c, d, b) {
        this.gyx = e;
        this.yrs = c;
        this.pjl = d;
        this.yuf = b;
        this.gzi = true;
        clearTimeout(this.ppv);
        if (this.kvp() === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.tok = function(b, c) {
        this.gyx = b;
        this.yrs = undefined;
        this.gzi = c;
        if (this.gzi) {
            clearTimeout(this.ppv)
        }
        if (this.kvp() === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.vdt = function() {
        this.gyx = "";
        this.yrs = undefined;
        this.gzi = true;
        clearTimeout(this.ppv);
        if (this.kvp() === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.nzh = function(b, c) {
        this.uhg = 0;
        this.bod = b;
        this.gzi = false;
        if (c && c > 0) {
            this.ppv = setTimeout(this.kmt, c)
        } else {
            this.ppv = setTimeout(this.kmt, this.rdq)
        }
    };
    this.kgi = function(b) {
        this.uhg = 0;
        this.bod = b;
        if (this.gzi) {
            this.tok(this.ffv[this.bod][this.uhg], false)
        }
        this.gzi = false;
        this.ppv = setTimeout(this.kmt, this.rdq)
    };
    this.mwj = function() {
        this.gzi = false;
        this.ppv = setTimeout(this.kmt, this.rdq)
    };
    this.vka = function() {
        this.gzi = true;
        clearTimeout(this.ppv)
    };
    this.zrn = function() {
        return this.gzi
    };
    this.kmt = function() {
        if (!a.gzi) {
            a.uhg = (a.ffv[a.bod][a.uhg + 1] != undefined) ? a.uhg + 1 : 0;
            a.ppv = setTimeout(a.kmt, a.rdq);
            a.tok(a.ffv[a.bod][a.uhg], a.gzi)
        }
    };
    this.hto = function(b) {
        this.ffv[b] = []
    };
    this.bic = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.ffv[b][c] = d[c]
        }
    };
    this.xta = function(b) {
        this.gct = b
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var o = this.context2D,
            m = this.pbt,
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
            q = (this.gjq && this.kvw) ? this.ihp + this.kvw : this.ihp;
        o.save();
        if (this.skn) {
            bva.kgg.yxw(o, this.x, this.y, this.width, this.height, this.npd, this.skn, this.gjq, this.kvw)
        } else {
            if (this.gct) {
                o.putImageData(this.gct, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.tnw;
        o.font = this.rwz + " " + m + "px " + this.aht;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.gyx).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.yrs != undefined && this.pjl >= 0) {
            j = o.measureText(this.yrs).width;
            b += j;
            b += this.yuf * (this.qza.width + this.hdz);
            if (this.yuf % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.yuf / 2) * (this.qza.width + this.hdz);
                x = s - n;
                e = s + (this.yuf) * (this.qza.width + this.hdz) + n
            } else {
                s = this.x + (this.width) / 2 - (this.yuf / 2) * (this.qza.width) - (this.yuf - 1) / 2 * this.hdz;
                x = s - n;
                e = s + (this.yuf) * (this.qza.width) + (this.yuf - 1) * this.hdz + n
            }
            for (var u = 0; u < this.yuf; u++) {
                o.drawImage(this.qza, 0, this.nhw * this.pjl, this.qza.width, this.nhw, s + (u * (this.hdz + this.qza.width)), this.y + ((this.height - this.nhw) / 2), this.qza.width, this.nhw)
            }
            o.textAlign = "right";
            o.fillText(this.gyx, x, this.y + m + this.wct);
            o.textAlign = "left";
            o.fillText(this.yrs, e, this.y + m + this.wct)
        } else {
            if (this.gyx != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.rwz + " " + m + "px " + this.aht
                    }
                    g = [];
                    d = "";
                    v = 0;
                    z = 0;
                    t = 0;
                    for (var p = t; p < this.gyx.length; p++) {
                        d += this.gyx.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.gyx.charAt(p) == " ") || (this.gyx.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.gyx.length - 1) {
                            g[z] = this.gyx.substring(t, this.gyx.length)
                        } else {
                            if (this.gyx.charAt(p) == "|") {
                                g[z] = this.gyx.substring(t, v);
                                z++;
                                t = v + 1;
                                d = this.gyx.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[z] = this.gyx.substring(t, v);
                                    z++;
                                    t = v + 1;
                                    d = this.gyx.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.pbt) {
                    o.font = this.rwz + " " + (m - 3) + "px " + this.aht;
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
hjy.prototype = new tgm;

function bgd() {
    this.him = null;
    this.ili = null;
    this.kmd = null;
    this.wcu = false;
    this.esd = false;
    this.gtq = true;
    this.qbk = false;
    this.dqb = false;
    this.ech = 0;
    this.acp = 0;
    this.zkw = 0;
    this.nip = "";
    this.duq = "";
    this.bxs = null;
    this.dvu = null;
    this.aht = "arial";
    this.rwz = "bold";
    this.vji = "arial";
    this.csa = "rgb(0,0,200)";
    this.dzt = "rgb(255,255,255)";
    this.rix = "rgb(0,0,150)";
    this.skn = "rgb(220,240,255)";
    this.toz = "rgb(130,220,255)";
    this.afq = "rgb(130,190,255)";
    this.tnw = "rgb(255,255,255)";
    this.wmq = "rgb(130,190,255)";
    this.qmg = "rgb(100,160,255)";
    this.qvd = "rgb(255,255,255)";
    this.hzh = new gup();
    this.agu = null;
    this.fsq = null;
    this.bnv = null;
    this.zpi = null;
    this.aij = null;
    this.dea = null;
    this.yli = null;
    this.wet = null;
    this.kvw = 2;
    this.ral = 3;
    this.wcr = 10;
    this.wct = 3;
    this.sut = 5;
    this.orm = 36;
    this.pbt = 30;
    this.ckr = 22;
    this.uwa = function(a, c, b) {
        bgd.prototype.uwa.call(this, a, c, b);
        this.qbk = bva.uug.value37
    };
    this.hin = function(b) {
        try {
            var a = (bva.uug.value37) ? b.ogp : b.ktx;
            this.agu = b.hwx;
            this.fsq = b.lmy;
            this.bnv = b.qcp;
            this.zpi = b.hul;
            this.aij = b.wvx;
            this.dea = b.sjl;
            this.hzh = b.faa;
            this.orm = b.cnz;
            this.pbt = b.fontSize;
            this.ckr = b.nia;
            this.wct = b.rzh;
            this.sut = b.nrh;
            this.kvw = b.stc;
            this.ral = b.ulr;
            this.wcr = b.bez;
            if (bva.uug.value36) {
                this.duq = this.parent.wyj(this.parent.language.bml)
            } else {
                if (bva.uug.value37) {
                    this.duq = this.parent.wyj(this.parent.language.vhl)
                }
            }
            this.him = [];
            this.ili = this.hsf(a.jnm, this.parent.language.ret, this.parent.utl, (this.parent.uhn.rqi === false) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_re"), b.sue);
            this.him.push(this.ili);
            if (bva.uug.value37) {
                this.kmd = this.hsf(a.edl, this.parent.language.swo, this.parent.lsz, (this.parent.uhn.rqi === false) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_e"), b.sue);
                this.him.push(this.kmd)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.cep = function(b) {
        try {
            var a = (bva.uug.value37) ? b.ogp : b.ktx;
            this.agu = b.hwx;
            this.fsq = b.lmy;
            this.bnv = b.qcp;
            this.zpi = b.hul;
            this.aij = b.wvx;
            this.dea = b.sjl;
            this.hzh = b.faa;
            if (this.ili) {
                this.ili.qjx(a.jnm);
                this.ili.cep(b.sue)
            }
            if (this.kmd) {
                this.kmd.qjx(a.edl);
                this.kmd.cep(b.sue)
            }
            this.orm = b.cnz;
            this.pbt = b.fontSize;
            this.ckr = b.nia;
            this.wct = b.rzh;
            this.sut = b.nrh;
            this.kvw = b.stc;
            this.ral = b.ulr;
            this.wcr = b.bez
        } catch (c) {
            console.error(c)
        }
    };
    this.raa = function(c) {
        try {
            this.aht = c.font;
            this.rwz = c.pev;
            this.csa = c.cqm;
            this.dzt = c.vbd;
            this.rix = c.lnd;
            this.skn = c.backgroundColor;
            this.toz = c.qtl;
            this.afq = c.wrn;
            this.tnw = c.ydb;
            this.wmq = c.thu;
            this.qmg = c.ggq;
            this.qvd = c.jut;
            this.bxs = c.osq;
            this.dvu = c.pvd;
            for (var b = 0, a = this.him.length; b < a; b++) {
                this.him[b].raa((this.parent.uhn.sbj === true) ? c.hre : c.zns)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.rap = function(d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.him.length; f < b; f++) {
            var a = this.him[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.kvp() === true) {
                if (a.kca() === true && a.buj() === false && this.gtq) {
                    a.erw(true, true);
                    this.parent.eyo.zqb("btn");
                    this.parent.eyo.urt("btn");
                    a.uva();
                    for (var e = 0; e < b; e++) {
                        this.him[e].cou(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.dea.x && c <= this.dea.x + this.dea.width && g >= this.dea.y && g <= this.dea.y + this.dea.height && this.qbk && this.esd) {
            this.xrp()
        }
        return true
    };
    this.fwp = function() {};
    this.hld = function() {};
    this.smf = function() {};
    this.hsf = function(d, f, e, a, c) {
        var b = new iyh();
        b.uwa(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.uva = e;
        b.cep(c);
        return b
    };
    this.erc = function(c) {
        this.esd = c;
        for (var b = 0, a = this.him.length; b < a; b++) {
            this.him[b].zjd(c)
        }
    };
    this.xrp = function() {
        this.gtq = !this.gtq;
        this.parent.egc()
    };
    this.hzp = function(d, a, c, b) {
        this.dqb = false;
        this.zyg = true;
        this.nip = this.jpw(b);
        this.ech = d;
        this.acp = a;
        this.zkw = c;
        if (this.kvp()) {
            this.erc(true);
            this.egc()
        }
    };
    this.jpw = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.lpx(d) + ":" + this.lpx(a) + ":" + this.lpx(c)
    };
    this.lpx = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.ekz = function(a, b) {
        this.dqb = a;
        if (b && b === true) {
            this.egc()
        }
    };
    this.esj = function(a, b) {
        this.zyg = false;
        if (bva.uug.value37) {
            this.gtq = false
        }
        this.ekz(a, false);
        bgd.prototype.esj.call(this, a, b)
    };
    this.egc = function(j, f, k, d) {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.eyo.jgz("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.skn;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.hzh.x, this.hzh.y, this.hzh.x + this.hzh.width, this.hzh.y);
            g.addColorStop(0.2, this.bxs);
            g.addColorStop(1, this.dvu);
            l.fillStyle = g;
            l.save();
            if (this.parent.ngk === bva.uhn.xhx) {
                l.translate(this.hzh.width / 2, this.hzh.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.hzh.width / 2, -this.hzh.height / 2)
            }
            l.fillRect(this.hzh.x, this.hzh.y, this.hzh.width, this.hzh.height);
            l.drawImage(c, this.hzh.x, this.hzh.y, this.hzh.width, this.hzh.height);
            l.restore()
        } else {
            if (this.parent.uhn.sbj === true) {
                bva.kgg.hvc(l, this.hzh.x, this.hzh.y, this.hzh.width, this.hzh.height, this.bxs, 1)
            }
        }
        bva.kgg.yxw(l, this.agu.x, this.agu.y, this.agu.width, this.agu.height, 0, this.toz);
        bva.kgg.sxn(l, this.duq, this.tnw, this.agu.x, this.agu.y + this.wct, this.agu.width, this.agu.height, this.aht, this.orm, this.rwz);
        bva.kgg.yxw(l, this.fsq.x, this.fsq.y, this.fsq.width, this.fsq.height, 0, this.toz);
        if (bva.uug.value36) {
            bva.kgg.ytt(l, this.parent.wyj(this.parent.language.ato), this.tnw, this.fsq.x, this.fsq.y + this.wct, this.fsq.width, this.fsq.height, this.aht, this.pbt, this.rwz, this.sut)
        } else {
            if (bva.uug.value37) {
                bva.kgg.ytt(l, this.parent.wyj(this.parent.language.rwl), this.tnw, this.fsq.x, this.fsq.y + this.wct, this.fsq.width, this.fsq.height, this.aht, this.pbt, this.rwz, this.sut)
            }
        }
        bva.kgg.yxw(l, this.bnv.x, this.bnv.y, this.bnv.width, this.bnv.height, 0, this.afq);
        bva.kgg.ytt(l, this.parent.wyj(this.parent.language.nfu), this.tnw, this.bnv.x, this.bnv.y + this.wct, this.bnv.width, this.bnv.height, this.aht, this.pbt, this.rwz, this.sut);
        bva.kgg.yxw(l, this.zpi.x, this.zpi.y, this.zpi.width, this.zpi.height, 0, this.toz);
        bva.kgg.ytt(l, this.parent.wyj(this.parent.language.vlk), this.tnw, this.zpi.x, this.zpi.y + this.wct, this.zpi.width, this.zpi.height, this.aht, this.pbt, this.rwz, this.sut);
        if (this.qbk) {
            this.lot(l)
        }
        if (this.zyg) {
            if (bva.uug.value36) {
                bva.kgg.osm(l, this.ech, this.tnw, this.fsq.x, this.fsq.y + this.wct, this.fsq.width, this.fsq.height, this.aht, this.pbt, this.rwz, this.sut)
            } else {
                if (bva.uug.value37) {
                    bva.kgg.osm(l, this.nip, this.tnw, this.fsq.x, this.fsq.y + this.wct, this.fsq.width, this.fsq.height, this.aht, this.pbt, this.rwz, this.sut)
                }
            }
            bva.kgg.osm(l, this.parent.tyk(this.acp), this.tnw, this.bnv.x, this.bnv.y + this.wct, this.bnv.width, this.bnv.height, this.aht, this.pbt, this.rwz, this.sut);
            bva.kgg.osm(l, this.parent.tyk(this.zkw), this.tnw, this.zpi.x, this.zpi.y + this.wct, this.zpi.width, this.zpi.height, this.aht, this.pbt, this.rwz, this.sut)
        }
        for (var b = 0, e = this.him.length; b < e; b++) {
            this.him[b].egc()
        }
        if (this.dqb) {
            bva.kgg.tez(l, this.aij.x, this.aij.y, this.aij.width, this.aij.height, this.ral, this.csa, 0.3, this.rix, this.kvw, 1);
            bva.kgg.sxn(l, this.parent.wyj(this.parent.language.jqu), this.dzt, this.aij.x, this.aij.y, this.aij.width, this.aij.height, this.aht, this.pbt, this.rwz)
        }
        l.restore();
        if (this.wxt && this.ygh) {
            if (a) {
                this.wxt.drawImage(this.ygh, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.wxt.drawImage(this.ygh, this.x, this.y)
            }
        }
    };
    this.lot = function(b) {
        var c = Math.round(this.dea.height / 2),
            a = Math.round(this.dea.x + c),
            d = Math.round(this.dea.y + c / 2);
        b.save();
        bva.kgg.yxw(b, this.dea.x, this.dea.y, this.dea.width, this.dea.height, this.wcr, this.wmq, this.qmg, this.kvw);
        bva.kgg.sxn(b, this.parent.language.jie, this.tnw, this.dea.x + this.dea.height, this.dea.y, this.dea.width - this.dea.height, this.dea.height, this.aht, this.ckr, this.rwz);
        bva.kgg.hvc(b, a, d, c, c, null, 0, this.qvd, this.kvw, 1);
        if (this.gtq) {
            bva.kgg.hvc(b, a + c / 4, d + c / 4, c / 2, c / 2, this.qvd, 1)
        }
        b.restore()
    }
}
bgd.prototype = new tgm;

function ndw() {
    this.krb = 0;
    this.gvr = [];
    this.uwa = function(a, c, b) {
        ndw.prototype.uwa.call(this, a, c, b);
        this.krb = 0;
        this.gvr = []
    };
    this.hxw = function(a, b) {
        if (b && b === true) {
            this.gvr.unshift(a)
        } else {
            this.gvr.push(a)
        }
    };
    this.gxq = function(a) {
        if (a && a === true) {
            this.gvr.shift()
        } else {
            this.gvr.pop()
        }
    };
    this.ncx = function(a) {
        this.krb = a
    };
    this.akq = function() {
        return this.krb
    };
    this.egc = function() {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        if (this.krb < this.gvr.length) {
            this.gvr[this.krb].egc()
        }
        try {
            if (this.wxt && this.ygh) {
                this.wxt.drawImage(this.ygh, this.x, this.y)
            }
        } catch (a) {}
    }
}
ndw.prototype = new tgm;

function mcp() {
    var a = this;
    this.eqq = function() {
        a.ona = false
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.qza != null) {
            b.drawImage(this.qza, 0, 0, this.qza.width, this.qza.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
mcp.prototype = new xbw;

function vwd() {
    this.pes = "";
    this.mpu = "";
    this.qza = null;
    this.yme = "sans-serif";
    this.yyh = "sans-serif";
    this.rwz = "bold";
    this.xfz = null;
    this.tnw = null;
    this.gjq = null;
    this.oho = null;
    this.skn = null;
    this.hum = 16;
    this.qbd = 20;
    this.uvu = 0;
    this.jvy = 0;
    this.kvw = 2;
    this.bzf = 3;
    this.zmr = 3;
    this.zqh = 3;
    this.xqy = 3;
    this.uwa = function(a, e, b, d, c) {
        vwd.prototype.uwa.call(this, a, e, b);
        this.pes = d;
        this.mpu = c
    };
    this.cep = function(a) {
        try {
            this.hum = a.wck;
            this.qbd = a.cgx;
            this.uvu = a.aeo;
            this.jvy = a.fvn;
            this.kvw = a.stc;
            this.bzf = a.ylm;
            this.zmr = a.rzf;
            this.zqh = a.hlr;
            this.xqy = a.qll
        } catch (b) {
            console.error(b)
        }
    };
    this.raa = function(a) {
        try {
            this.yme = a.yes;
            this.yyh = a.dax;
            this.rwz = a.pev;
            this.xfz = a.noj;
            this.tnw = a.ydb;
            this.gjq = a.borderColor;
            this.oho = a.ldt;
            this.skn = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.rwv = function(a, b) {
        this.mpu = a;
        if (b && b === true && this.context2D != null && this.kvp() === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.afk = function(a, b) {
        this.pes = a;
        if (b && b === true && this.context2D != null && this.kvp() === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.oho) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.gjq);
            b.addColorStop(1, this.oho);
            bva.kgg.yzo(a, this.x, this.y, this.width, this.height, this.bzf, this.zmr, this.zqh, this.xqy, this.skn, 1, b, this.kvw, 1)
        } else {
            bva.kgg.yzo(a, this.x, this.y, this.width, this.height, this.bzf, this.zmr, this.zqh, this.xqy, this.skn, 1, this.gjq, this.kvw, 1)
        }
        if (this.pes != null) {
            bva.kgg.sxn(a, this.pes, this.xfz, this.x + this.kvw, this.y + this.uvu, this.width - 2 * this.kvw, this.height, this.yme, this.hum, this.rwz)
        }
        if (this.mpu != null) {
            if (this.pes != null) {
                bva.kgg.sxn(a, this.mpu, this.tnw, this.x + this.kvw, this.y + this.jvy, this.width - 2 * this.kvw, this.height, this.yyh, this.qbd, this.rwz)
            } else {
                bva.kgg.sxn(a, this.mpu, this.tnw, this.x + this.kvw, this.y + this.kvw, this.width - 2 * this.kvw, this.height, this.yyh, this.qbd, this.rwz)
            }
        }
        if (this.qza) {
            a.drawImage(this.qza, 0, 0, this.qza.width, this.qza.height, this.x + this.kvw, this.y + this.kvw, this.width - 2 * this.kvw, this.height - 2 * this.kvw)
        }
        a.restore();
        if (this.wxt && this.ygh) {
            this.wxt.drawImage(this.ygh, this.x, this.y)
        }
    }
}
vwd.prototype = new tgm;

function wyg() {
    var a = this;
    this.luk = null;
    this.mjf = [];
    this.tjt = null;
    this.duq = null;
    this.bjk = null;
    this.esd = false;
    this.huc = false;
    this.edn = 0;
    this.fgd = 0;
    this.hnc = 150;
    this.jng = 100;
    this.udp = 0;
    this.qbs = 3;
    this.exv = 92;
    this.gxw = 0;
    this.lze = 0;
    this.yme = "sans-serif";
    this.vnu = "sans-serif";
    this.rwz = "";
    this.xfz = null;
    this.bvp = null;
    this.qqk = null;
    this.cng = null;
    this.hcz = null;
    this.znc = null;
    this.rnb = null;
    this.sbe = new gup();
    this.dtm = new gup();
    this.agu = new gup();
    this.aqt = new gup();
    this.ayr = new gup();
    this.hum = 0;
    this.uvi = 0;
    this.oio = 0;
    this.cep = function(b) {
        try {
            this.hum = b.wck;
            this.uvi = b.bba;
            this.oio = b.oqg;
            this.sbe = b.yvo;
            this.dtm = b.zsc;
            this.agu = b.hwx;
            this.aqt = b.fwo;
            this.ayr = b.agl;
            this.qvs()
        } catch (c) {
            console.error(c)
        }
    };
    this.raa = function(b) {
        try {
            this.rwz = b.pev;
            this.yme = b.yes;
            this.vnu = b.tpw;
            this.xfz = b.noj;
            this.bvp = b.xjd;
            this.qqk = b.tbd;
            this.cng = b.sgi;
            this.hcz = b.sru;
            this.qvs()
        } catch (c) {
            console.error(c)
        }
    };
    this.cyo = function(b) {
        try {
            this.xfz = b.noj;
            this.bvp = b.xjd;
            this.qqk = b.tbd;
            this.cng = b.sgi;
            this.qvs()
        } catch (c) {
            console.error(c)
        }
    };
    this.iiz = function() {
        return {
            noj: this.xfz,
            xjd: this.bvp,
            tbd: this.qqk,
            sgi: this.cng
        }
    };
    this.qvs = function() {
        this.znc = this.xfz;
        this.rnb = this.qqk;
        if (this.hum > 0 && this.bvp) {
            this.znc = this.context2D.createLinearGradient(this.agu.x + this.agu.width / 2, this.agu.y, this.agu.x + this.agu.width / 2, this.agu.y + this.agu.height / 2);
            this.znc.addColorStop(0.7, this.xfz);
            this.znc.addColorStop(1, this.bvp)
        }
        if (this.uvi > 0 && this.cng) {
            this.rnb = this.context2D.createLinearGradient(this.aqt.x + this.aqt.width / 2, this.aqt.y, this.aqt.x + this.aqt.width / 2, this.aqt.y + this.aqt.height / 2);
            this.rnb.addColorStop(0.7, this.qqk);
            this.rnb.addColorStop(1, this.cng)
        }
    };
    this.rap = function(b, c) {
        if (b >= this.parent.uhn.mij.oue.x && b <= this.parent.uhn.mij.oue.x + this.parent.uhn.mij.oue.width && c >= this.parent.uhn.mij.oue.y && c <= this.parent.uhn.mij.oue.y + this.parent.uhn.mij.oue.height && this.kvp()) {
            if (this.esd) {
                this.huc = false;
                this.esd = false;
                this.stop();
                this.ids()
            }
            return true
        }
        return false
    };
    this.dca = function(b, c) {
        this.bjk = b;
        if (c && c === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.afk = function(b, c) {
        this.duq = b;
        if (c && c === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.luo = function() {
        return this.duq
    };
    this.start = function() {
        this.esj(true);
        this.parent.egc();
        this.udp = new Date().getTime();
        this.fgd = 0;
        this.lze = 0;
        this.gxw = Math.floor((9 * this.bjk) / (10 * this.exv));
        this.huc = true;
        this.esd = false;
        this.parent.eyo.urt("jackpot");
        this.tsc()
    };
    this.tsc = function() {
        var b = 0,
            c = new Date().getTime();
        a.fgd++;
        if (a.fgd < a.hnc) {
            if (a.fgd === a.qbs) {
                a.lze = Math.floor(a.bjk / 10)
            } else {
                if (a.fgd > a.qbs && a.fgd < a.qbs + a.exv) {
                    a.lze += a.gxw
                } else {
                    if (a.fgd == a.qbs + a.exv) {
                        a.lze = a.bjk
                    }
                }
            }
            a.parent.egc(a.x, a.y, a.width, a.height);
            b = (a.fgd * a.jng - (c - a.udp));
            a.edn = setTimeout(a.tsc, b)
        } else {
            a.parent.eyo.zqb("jackpot");
            if (!bva.uug.value76 || !bva.uug.value76.u) {
                a.huc = false;
                a.stop();
                a.ids()
            } else {
                a.ony();
                a.esd = true;
                a.amf()
            }
        }
    };
    this.amf = function() {
        var b = 0,
            c = new Date().getTime();
        a.fgd++;
        a.parent.egc(a.x, a.y, a.width, a.height);
        b = (a.fgd * a.jng - (c - a.udp));
        a.edn = setTimeout(a.amf, b)
    };
    this.stop = function() {
        clearTimeout(this.edn)
    };
    this.egc = function() {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        if (this.luk) {
            b.drawImage(this.luk, this.dtm.x, this.dtm.y, this.dtm.width, this.dtm.height)
        }
        if (this.tjt) {
            b.drawImage(this.tjt, this.ayr.x, this.ayr.y, this.ayr.width, this.ayr.height)
        }
        if (this.mjf.length > 0) {
            if (this.huc === true) {
                b.drawImage(this.mjf[this.fgd % this.mjf.length], this.sbe.x, this.sbe.y, this.sbe.width, this.sbe.height)
            } else {
                b.drawImage(this.mjf[0], this.sbe.x, this.sbe.y, this.sbe.width, this.sbe.height)
            }
        }
        if (this.duq != null && this.agu.width > 0 && this.agu.height > 0) {
            bva.kgg.sxn(b, this.duq, this.znc, this.agu.x, this.agu.y, this.agu.width, this.agu.height, this.yme, this.hum, this.rwz, this.hcz, this.oio)
        }
        if (this.huc === true) {
            if (this.lze > 0) {
                bva.kgg.sxn(b, this.parent.ycq(this.lze), this.rnb, this.aqt.x, this.aqt.y, this.aqt.width, this.aqt.height, this.vnu, this.uvi, this.rwz, this.hcz, this.oio)
            }
        } else {
            if (this.bjk != null) {
                bva.kgg.sxn(b, (this.bjk > 0) ? this.parent.ycq(this.bjk) : 0, this.rnb, this.aqt.x, this.aqt.y, this.aqt.width, this.aqt.height, this.vnu, this.uvi, this.rwz, this.hcz, this.oio)
            }
        }
        b.restore();
        if (this.wxt && this.ygh) {
            this.wxt.drawImage(this.ygh, this.x, this.y)
        }
    };
    this.ids = function() {};
    this.ony = function() {}
}
wyg.prototype = new tgm;

function cla() {
    var a = this;
    this.wvu = null;
    this.bxn = [];
    this.fkp = null;
    this.uii = null;
    this.bjk = null;
    this.pja = null;
    this.qco = null;
    this.esd = false;
    this.huc = false;
    this.edn = 0;
    this.lwo = 0;
    this.jng = 89;
    this.udp = 0;
    this.xkr = [];
    this.cqc = 0;
    this.hqv = 0;
    this.ezc = 0;
    this.upq = 0;
    this.moh = new gup();
    this.aqt = new gup();
    this.nzn = null;
    this.yxp = 0;
    this.nnn = 0;
    this.uwa = function(b, d, c) {
        cla.prototype.uwa.call(this, b, d, c);
        this.pja = document.createElement("canvas");
        this.qco = this.pja.getContext("2d")
    };
    this.cep = function(b) {
        try {
            this.nzn = b.hll;
            this.aqt = b.fwo;
            this.moh = b.bfv;
            this.yxp = b.jvk;
            this.nnn = b.cwa;
            this.pja.width = Math.round(this.aqt.width);
            this.pja.height = Math.round(this.aqt.height)
        } catch (c) {
            console.error(c)
        }
    };
    this.dca = function(l, j) {
        var m = this.qco,
            c = "",
            n = [],
            b = 0,
            d = 1,
            k = 0,
            f = 0;
        j = (j) ? j : 1;
        f = this.parent.ioj(l);
        for (var e = 0, g = f.length; e < g; e++) {
            c = f.charAt(e);
            c = c.replace(/\./g, "dt").replace(/\,/g, "cm").replace(/\ /g, "sp");
            n[e] = this.nzn["_" + c];
            b += n[e].width
        }
        if ((b * j) > this.pja.width) {
            d = (this.pja.width / (b * j)).toString();
            d = Number(d.substring(0, (d.length > 5) ? 5 : d.length))
        } else {
            k = Math.floor((this.pja.width - (b * j)) / 2);
            y = 0
        }
        m.save();
        m.clearRect(0, 0, this.pja.width, this.pja.height);
        for (var e = 0, g = n.length; e < g; e++) {
            if (n[e].width > 0 && n[e].height > 0) {
                m.drawImage(this.fkp, n[e].x, n[e].y, n[e].width, n[e].height, k * d, n[e].y * d * j + (this.pja.height - n[e].height * d * j) / 2, n[e].width * d * j, n[e].height * d * j);
                k += n[e].width * j
            }
        }
        m.restore()
    };
    this.start = function() {
        this.esj(true);
        this.parent.egc();
        this.udp = new Date().getTime();
        this.lwo = 0;
        this.huc = true;
        this.esd = false;
        this.xkr.length = 0;
        for (var c = 0; c < 56; c++) {
            this.xkr[c] = {
                scale: 1,
                xet: 1,
                y: this.y,
                x: this.x,
                gsp: 0,
                hcr: 0.5,
                ntt: 0
            }
        }
        for (var c = 0; c < 16; c++) {
            if (c <= 3) {
                this.xkr[c].xet = Math.sin(Math.PI / 8 * (c + 1))
            }
            this.xkr[c].y = this.y + this.yxp * Math.cos(Math.PI / 32 * c);
            this.xkr[c].x = this.x + this.nnn * Math.sin(Math.PI / 8 * c);
            this.xkr[c].scale = Math.sin(Math.PI / 32 * c)
        }
        for (var c = 6, b = 1; b <= 10; c++, b++) {
            this.xkr[c].hcr = 0.5 + 0.5 * Math.sin(Math.PI / 20 * b)
        }
        for (var c = 16, b = 1; b <= 40; c++, b++) {
            this.xkr[c].hcr = 1 + 0.5 * Math.sin(Math.PI / 40 * b)
        }
        for (var c = 16, b = 0; c < this.xkr.length; c++, b++) {
            this.xkr[c].gsp = b;
            if (b >= this.bxn.length && b <= this.bxn.length + 6) {
                this.xkr[c].ntt = Math.sin(Math.PI / 12 * (b - this.bxn.length))
            } else {
                if (b >= this.bxn.length + 6) {
                    this.xkr[c].ntt = 1
                }
            }
        }
        for (var c = this.xkr.length - 7, b = 0; c < this.xkr.length; c++, b++) {
            this.xkr[c].xet = Math.cos(Math.PI / 12 * b)
        }
        this.parent.eyo.urt("mystery_jackpot");
        this.tsc()
    };
    this.tsc = function() {
        var b = 0,
            c = new Date().getTime();
        a.lwo++;
        if (a.lwo < a.xkr.length - 1) {
            a.cqc = Math.floor(a.width * a.xkr[a.lwo].scale);
            a.hqv = Math.floor(a.height * a.xkr[a.lwo].scale);
            a.ezc = Math.floor(a.aqt.width * a.xkr[a.lwo].hcr);
            a.upq = Math.floor(a.aqt.height * a.xkr[a.lwo].hcr);
            a.parent.egc();
            b = (a.lwo * a.jng - (c - a.udp));
            a.edn = setTimeout(a.tsc, b)
        } else {
            a.huc = false;
            a.stop();
            a.ids()
        }
    };
    this.stop = function() {
        clearTimeout(this.edn)
    };
    this.egc = function() {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var c = this.context2D,
            b = (this.huc) ? this.xkr[this.lwo].x : this.x,
            f = (this.huc) ? this.xkr[this.lwo].y : this.y,
            d = (this.huc) ? this.xkr[this.lwo].xet : 1,
            e = (this.huc) ? this.xkr[this.lwo].gsp : 0;
        c.save();
        c.globalAlpha = d;
        c.clearRect(0, 0, this.width, this.height);
        if (e == 0) {
            c.drawImage(this.wvu, 0, 0, this.width, this.height)
        }
        if (e < this.bxn.length) {
            c.drawImage(this.bxn[e], 0, 0, this.width, this.height)
        } else {
            c.save();
            c.globalAlpha = d * this.xkr[this.lwo].ntt;
            c.drawImage(this.uii, this.moh.x, this.moh.y);
            c.restore()
        }
        if (this.pja) {
            c.drawImage(this.pja, this.aqt.x + (this.aqt.width - this.ezc) / 2, this.aqt.y + (this.aqt.height - this.upq) / 2, this.ezc, this.upq)
        }
        c.restore();
        if (this.wxt && this.ygh) {
            this.wxt.drawImage(this.ygh, b + (this.width - this.cqc) / 2, f + (this.height - this.hqv) / 2, this.cqc, this.hqv)
        }
    };
    this.ids = function() {}
}
cla.prototype = new tgm;

function ybg() {
    this.qza = new Image();
    this.mpu = "";
    this.euy = true;
    this.aht = null;
    this.rwz = "bold";
    this.rlh = "red";
    this.hyi = "orange";
    this.hcz = "white";
    this.pbt = 40;
    this.sut = 0;
    this.wct = 0;
    this.pat = 0;
    this.oio = 2;
    this.kiy = null;
    this.ayt = 0;
    this.ofn = 0;
    this.uwa = function(a, e, c, b, d) {
        ybg.prototype.uwa.call(this, a, e, c);
        this.qza = b;
        this.mpu = d
    };
    this.cep = function(a) {
        try {
            this.pbt = a.fontSize;
            this.sut = a.nrh;
            this.wct = a.rzh;
            this.pat = a.dfz;
            this.oio = a.oqg
        } catch (b) {
            console.error(b)
        }
    };
    this.raa = function(a) {
        try {
            this.aht = a.font;
            this.rwz = a.pev;
            this.rlh = a.vgb;
            this.hyi = a.oom;
            this.hcz = a.sru
        } catch (b) {
            console.error(b)
        }
    };
    this.rwv = function(a, b) {
        this.mpu = a;
        if (b && b === true && this.context2D != null) {
            this.esj(true, true)
        }
    };
    this.nur = function(a, b) {
        this.mpu = a;
        this.euy = false;
        if (b && b === true && this.context2D != null) {
            this.esj(true, true)
        }
    };
    this.esj = function(a, b) {
        this.lod = a;
        if (b && b === true && this.context2D != null) {
            if (this.ygh == null && this.kvp()) {
                this.egc()
            } else {
                if (this.parent != null) {
                    this.parent.egc(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.vie = function(a, b, c) {
        this.kiy = a;
        this.ayt = b;
        this.ofn = c
    };
    this.egc = function() {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.ygh != null) ? 0 : this.x,
            d = (this.ygh != null) ? 0 : this.y;
        b.save();
        if (this.ygh == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.euy === true) {
            if (this.kiy != null) {
                b.drawImage(this.kiy, this.x + this.ayt, this.y + this.ofn, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.qza != null) {
                b.drawImage(this.qza, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.sut, d, a + this.width / 2 + this.sut, d + this.height);
        c.addColorStop(0, this.rlh);
        c.addColorStop(1, this.hyi);
        bva.kgg.sxn(b, this.mpu, c, a + this.pat + this.sut, d + this.wct, this.width - 2 * this.pat, this.height, this.aht, this.pbt, this.rwz, this.hcz, this.oio);
        b.restore();
        if (this.wxt && this.ygh) {
            this.wxt.drawImage(this.ygh, this.x, this.y)
        }
    }
}
ybg.prototype = new tgm;

function bqm() {
    var a = this;
    this.thf = "LOADING ... ";
    this.mao = "ERROR";
    this.cmu = null;
    this.cbe = null;
    this.byo = false;
    this.xxb = false;
    this.hzj = true;
    this.uva = null;
    this.vbc = null;
    this.wto = null;
    this.edn = 0;
    this.uhl = 0;
    this.huc = false;
    this.udp = 0;
    this.jng = 60;
    this.lwo = 0;
    this.aht = "arial";
    this.rwz = "bold";
    this.veo = "black";
    this.cxv = "rgb(0,100,10)";
    this.rcp = "rgb(80,255,100)";
    this.gjn = "rgb(120,120,120)";
    this.vxh = "red";
    this.zoi = "white";
    this.tnw = "yellow";
    this.pbt = 14;
    this.hml = 18;
    this.xjn = 20;
    this.dgx;
    this.pxf;
    this.isl;
    this.xvu;
    this.pat = 5;
    this.sut = 12;
    this.wct = 5;
    this.jly = 2;
    this.bvy = new gup();
    this.dlb = new gup();
    this.eev = [];
    this.fnm = 0;
    this.yyx = 20;
    this.uwa = function(b, d, c) {
        bqm.prototype.uwa.call(this, b, d, c);
        this.vbc = document.createElement("canvas");
        this.wto = this.vbc.getContext("2d")
    };
    this.cep = function(b) {
        try {
            this.pbt = b.fontSize;
            this.hml = b.gwb;
            this.xjn = b.cfw;
            this.pat = b.dfz;
            this.sut = b.nrh;
            this.wct = b.rzh;
            this.jly = b.voq;
            this.dgx = b.buy;
            this.pxf = b.jgx;
            this.isl = b.uxq;
            this.xvu = b.uto;
            this.bvy = b.mkb;
            if (this.dlb.width > 0 && this.dlb.height) {
                this.avg()
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.raa = function(b) {
        try {
            this.aht = b.font;
            this.rwz = b.pev;
            this.veo = b.backgroundColor;
            this.cxv = b.ujo;
            this.rcp = b.nva;
            this.gjn = b.tip;
            this.vxh = b.jcg;
            this.zoi = b.rce;
            this.tnw = b.ydb;
            this.cbe = b.cbe
        } catch (c) {
            console.error(c)
        }
    };
    this.rap = function(b, e) {
        var d = b - this.x,
            c = e - this.y;
        if (d >= this.dlb.x && d <= this.dlb.x + this.dlb.width && c >= this.dlb.y && c <= this.dlb.y + this.dlb.height) {
            this.uva();
            return true
        }
        return false
    };
    this.egc = function(b) {
        if (b && b >= 0) {
            this.uhl = b
        }
        if (!this.kvp()) {
            return
        }
        if (bva.uug.value45 == bva.bmy.ung) {
            this.vus()
        } else {
            if (bva.uug.value45 == bva.bmy.xov) {
                this.bbb()
            }
        }
    };
    this.vus = function() {
        if (this.byo) {
            var c = this.context2D,
                b = this.isl.width / 100;
            c.save();
            if (this.xxb === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.eyo.jgz("splash"), 0, 0, this.width, this.height);
            if (this.cbe) {
                bva.kgg.hvc(c, this.pat, this.pat, this.width - 2 * this.pat, this.height - 2 * this.pat, this.cbe, 0.3)
            }
            if (this.cmu != null && this.cmu != "") {
                this.eud(this.xvu, true)
            } else {
                if (this.huc) {
                    bva.kgg.hvc(c, this.bvy.x, this.bvy.y, this.bvy.width, this.bvy.height, this.veo, 0.7);
                    c.drawImage(this.vbc, this.bvy.x + this.bvy.width * (1 - this.eev[this.fnm]) / 2, this.bvy.y + this.bvy.height * (1 - this.eev[this.fnm]) / 2, this.bvy.width * this.eev[this.fnm], this.bvy.height * this.eev[this.fnm])
                } else {
                    if (this.hzj === true) {
                        if (this.xxb === false) {
                            bva.kgg.hvc(c, this.dgx.x, this.dgx.y, this.dgx.width, this.dgx.height, this.veo, 0.7)
                        }
                        var e = this.thf + " " + this.uhl + "%";
                        var d = c.createLinearGradient(this.isl.x, this.isl.y, this.isl.x + this.isl.width, this.isl.y);
                        d.addColorStop(0, this.cxv);
                        d.addColorStop(1, this.rcp);
                        bva.kgg.sxn(c, e, this.zoi, this.pxf.x, this.pxf.y, this.pxf.width, this.pxf.height, this.aht, this.pbt, this.rwz);
                        bva.kgg.tez(c, this.isl.x - this.jly, this.isl.y, this.isl.width + 2 * this.jly, this.isl.height, this.jly, this.veo, 0.8, this.gjn, this.jly, 0.8);
                        bva.kgg.hvc(c, this.isl.x, this.isl.y + this.jly / 2, b * this.uhl, this.isl.height - this.jly, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.bbb = function() {
        if (this.byo) {
            var c = this.context2D,
                b = this.isl.width / 100;
            c.save();
            if (this.xxb === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.eyo.jgz("splash"), 0, 0, this.width, this.height);
            if (this.cmu != null && this.cmu != "") {
                this.eud(this.xvu, true)
            } else {
                if (this.huc) {
                    c.drawImage(this.parent.eyo.jgz("continue"), this.bvy.x, this.bvy.y, this.bvy.width, this.bvy.height);
                    c.drawImage(this.vbc, this.bvy.x + this.bvy.width * (1 - this.eev[this.fnm]) / 2, this.bvy.y + this.bvy.height * (1 - this.eev[this.fnm]) / 2, this.bvy.width * this.eev[this.fnm], this.bvy.height * this.eev[this.fnm])
                } else {
                    if (this.hzj === true) {
                        bva.kgg.hvc(c, this.isl.x, this.isl.y, this.isl.width, this.isl.height, "rgb(0,0,0)", 0.5);
                        bva.kgg.hvc(c, this.isl.x, this.isl.y, b * this.uhl, this.isl.height, "rgb(0,250,0)", 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.eud = function(c, m) {
        var l = this.context2D,
            o = [],
            d = this.pbt,
            k = this.cmu,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.hml * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.rwz + " " + d + "px " + this.aht;
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
                    if (u >= c.width - 2 * this.sut) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.wct)) {
            w = (c.height - j - this.wct) / b;
            d = Math.round(d * w) - 1;
            l.font = this.rwz + " " + d + "px " + this.aht;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.rwz + " " + d + "px " + this.aht;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.wct));
            c.height = j + b + this.wct;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            bva.kgg.hvc(l, c.x, c.y, c.width, c.height, this.veo, 0.7)
        }
        if (this.mao != null) {
            l.font = this.rwz + " " + this.hml + "px " + this.aht;
            l.fillStyle = this.vxh;
            l.textBaseline = "bottom";
            l.fillText(this.mao, c.x + c.width / 2, c.y + this.hml + this.wct)
        }
        l.font = this.rwz + " " + d + "px " + this.aht;
        l.fillStyle = this.zoi;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.sut), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.avu = function() {
        return (this.huc)
    };
    this.kvk = function() {
        for (var b = 0; b < this.yyx; b++) {
            this.eev[b] = 1 - Math.sin(Math.PI * b / (this.yyx - 1)) * 0.04
        }
        this.eev[this.yyx - 1] = 1;
        this.huc = true;
        this.fnm = 0;
        this.avg();
        this.edn = setInterval(this.ofs, this.jng);
        this.egc()
    };
    this.ofs = function() {
        a.egc();
        a.fnm = (a.fnm < a.yyx - 1) ? a.fnm + 1 : 0
    };
    this.stop = function() {
        this.huc = false;
        clearTimeout(this.edn)
    };
    this.avg = function() {
        var b = this.wto;
        this.dlb = this.bvy;
        this.vbc.width = Math.round(this.dlb.width);
        this.vbc.height = Math.round(this.dlb.height);
        b.save();
        b.clearRect(0, 0, this.vbc.width, this.vbc.height);
        bva.kgg.yxf(b, this.parent.language.mup, this.tnw, 0, 0, this.vbc.width, this.vbc.height, this.aht, this.xjn, this.rwz, "center", true);
        b.restore()
    }
}
bqm.prototype = new tgm;
bva.uug = new Settings();
bva.kgg = new edb();

function dlh() {
    this.ymd = "";
    this.jqw = "";
    this.fzk = null;
    this.canvas = null;
    this.context2D = null;
    this.uhd = null;
    this.iwn = null;
    this.kxy = null;
    this.gqp = null;
    this.wmv = null;
    this.ltj = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.kqv = 0;
    this.jqs = 0;
    this.gdw = false;
    this.width = 0;
    this.height = 0;
    this.cko = 0;
    this.okc = 0;
    this.eel = 1;
    this.lbq = 1;
    this.sei = false;
    this.zdw = false;
    this.style = null;
    this.uhn = null;
    this.ngk = -1;
    this.luv = false;
    this.pig = false;
    this.zjj = false;
    this.orc = false;
    this.ycx = false;
    this.nvb = false;
    this.nta = false;
    this.tfd = false;
    this.hct = "";
    this.pcz = "";
    this.ucg = "";
    this.ipe = "";
    this.prw = "";
    this.rhm = "";
    this.hpk = "1_1_60";
    try {
        if (bva.uug.value19) {
            this.hct = sessionStorage.sessionValue2;
            this.pcz = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.ucg = sessionStorage.sessionValue2
            } else {
                this.hct = sessionStorage.sessionValue2;
                this.pcz = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.ucg = sessionStorage.sessionValue2
                } else {
                    this.ucg = ""
                }
            }
        }
    } catch (b) {}
    this.lri = null;
    this.ilt = null;
    this.khk = false;
    this.wlk = null;
    this.eyo = null;
    this.xqp = null;
    this.tgt = true;
    this.rnr = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.kek = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.kek = this.rnr.length - 1
                } else {
                    this.kek = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.kek = this.rnr.length - 1
        }
    } catch (b) {
        this.kek = 0
    }
    this.afx = 0;
    this.language = new goo();
    this.mes = 0;
    this.mmc = 1;
    this.aph = this.mmc;
    this.msp = [bva.xoc.xny, bva.xoc.cil, bva.xoc.xzx];
    this.ngt = (bva.kgg.ihj()) ? 0 : this.msp.length - 1;
    try {
        if (localStorage.localValue1) {
            this.ngt = Number(localStorage.localValue1);
            if (!bva.kgg.ihj() && this.msp[this.ngt] === bva.xoc.xny) {
                this.ngt = this.msp.length - 1
            }
        }
    } catch (b) {}
    this.yux = false;
    this.hdt = "";
    this.phq = "";
    this.tnc = 0;
    this.state = 0;
    this.iqj = false;
    this.tcd = 5000;
    this.ewm = 0;
    this.hwl = 0;
    this.sge = 0;
    this.snw = 0;
    this.kdt = false;
    this.yig = false;
    this.xmr = false;
    this.pvb = null;
    this.ypj = 0;
    this.zty = 0;
    this.qva = 0;
    this.myi = -1;
    this.pds = -1;
    this.tgq = 0;
    this.tyt = null;
    this.sxc = [];
    this.njn = [];
    this.dtz = false;
    this.qul = 0;
    this.fen = 0;
    this.qdx = false;

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
    this.uwa = function(d) {
        this.mno({
            type: "onAppFrameReady",
            sender: this.hdt
        });
        bva.kgg.fgs();
        bva.kgg.mqu();
        this.trr();
        if (!this.kdt) {
            this.twt()
        }
        this.pbd(this.irw(d.uhn));
        this.acv();
        this.txh();
        this.fsn();
        this.pec();
        this.gny();
        this.rte();
        this.bam();
        this.cdu();
        this.xlf();
        this.rxi();
        return this
    };
    this.fsn = function() {};
    this.cdu = function() {
        try {
            if (bva.uug.value64 && !this.xmr) {
                this.wlk = new ivj();
                this.wlk.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.trr = function() {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && bva.uug.value8) {
                sessionStorage.sessionValue5 = bva.uug.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.rhm = sessionStorage.sessionValue8;
                if (bva.uug.value72) {
                    var n = bva.uug.value72[this.rhm];
                    if (bva.uug.value21.e === true && n) {
                        bva.uug.value21.s = n.s;
                        bva.uug.value21.m = n.m;
                        bva.uug.value21.ts = n.ts;
                        bva.uug.value21.cs = n.cs
                    }
                    if (bva.uug.value76 && bva.uug.value76.f === true && n) {
                        bva.uug.value76.s = n.s;
                        bva.uug.value76.m = n.m;
                        bva.uug.value76.ts = n.ts;
                        bva.uug.value76.cs = n.cs
                    }
                }
            }
            if (this.sgm()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.prw = sessionStorage.sessionValue7
            }
            var r = a("fullscreen");
            if (r != "") {
                sessionStorage.sessionValue14 = r
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (bva.kgg.tdi) ? bva.uug.value51.m : bva.uug.value51.d
            }
            var g = a("sessionTime");
            if (g != "") {
                sessionStorage.sessionValue15 = g
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = bva.uug.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var o = a("realityCheckTime");
            if (o != "") {
                sessionStorage.sessionValue17 = o
            }
            if (bva.uug.value39 > 0) {
                sessionStorage.sessionValue17 = bva.uug.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var f = sessionStorage.sessionValue18.split(";");
                if (f.length == 2) {
                    this.qul = Number(f[0]);
                    this.fen = Number(f[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.fen) {
                    this.fen = Number(s);
                    this.qul = new Date().getTime() - (this.fen * 1000);
                    sessionStorage.sessionValue18 = this.qul + ";" + this.fen
                }
            }
            if (bva.uug.value86 === true) {
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
            console.error(k.pdb)
        }
    };
    this.bam = function() {
        if (!(bva.kgg.kpx == bva.os.nik && bva.kgg.bxp == bva.igo.yzd)) {
            document.ontouchstart = bva.mij.lgk
        }
        if (bva.kgg.bxp != bva.igo.eqs && bva.kgg.bxp != bva.igo.yzd) {
            document.ontouchmove = bva.mij.vfe;
            document.ontouchend = bva.mij.mha
        }
        if (!bva.kgg.fke) {
            document.onmousedown = bva.mij.ggy;
            document.onmouseup = bva.mij.hkj;
            document.onmousemove = bva.mij.hqb
        }
        document.onkeydown = bva.mij.lzb;
        document.onkeyup = bva.mij.als;
        document.oncontextmenu = bva.mij.dwj;
        this.nvb = (this.vgl() && bva.kgg.zai() && bva.kgg.tdi);
        if (bva.kgg.jvx() === false && bva.kgg.kpx === bva.os.zgr && bva.kgg.kwd() === true && screen.width <= 414 && this.oxg()) {
            this.tgq = setInterval(this.onw, 1000)
        }
    };
    this.lgk = function(d) {
        if (bva.mij.luv === true) {
            bva.mij.uzz();
            bva.mij.nne()
        }
        bva.mij.rap(d)
    };
    this.mha = function(d) {
        if (bva.mij.luv === true) {
            if (bva.mij.nvb) {
                bva.mij.fpl()
            } else {
                bva.mij.fwp(d)
            }
        } else {
            if (bva.mij.nta) {
                bva.mij.kuo()
            }
        }
    };
    this.vfe = function(d) {
        bva.mij.gfu(d)
    };
    this.ggy = function(d) {
        window.focus();
        if (bva.mij.luv === true) {
            bva.mij.uzz();
            bva.mij.nne()
        }
        bva.mij.rap(d)
    };
    this.hkj = function(d) {
        if (bva.mij.luv === true) {
            bva.mij.fwp(d)
        }
    };
    this.hqb = function(d) {};
    this.lzb = function(d) {
        if ((d.keyCode == 122 && (bva.kgg.kpx == bva.os.dfl || bva.kgg.kpx == bva.os.wuv)) || (d.keyCode == 70 && d.ctrlKey && bva.kgg.kpx == bva.os.mkz)) {
            return
        }
        bva.mij.uzz();
        bva.mij.nne();
        bva.mij.hld(d)
    };
    this.als = function(d) {
        bva.mij.smf(d)
    };
    this.dwj = function() {
        return false
    };
    this.rap = function(d) {};
    this.fwp = function(d) {};
    this.hld = function(d) {};
    this.smf = function(d) {};
    this.gfu = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.mno = function(d) {};
    this.mei = function() {
        var f = bva.mij.xqp.whx("topb"),
            e = bva.mij.xqp.whx("settings"),
            d = bva.mij.xqp.whx("topi"),
            g = bva.mij.xqp.whx("gameb");
        if (bva.kgg.bxp == bva.igo.eqs || bva.kgg.bxp == bva.igo.tkz) {
            bva.mij.zdw = (window.innerWidth == window.outerWidth)
        } else {
            if (bva.kgg.bxp == bva.igo.jkw || bva.kgg.bxp == bva.igo.tuh) {
                bva.mij.zdw = (window.innerHeight >= window.outerHeight)
            } else {
                if (bva.kgg.bxp == bva.igo.cqr) {
                    bva.mij.zdw = (document.fullscreenElement) ? true : false
                } else {
                    if (bva.kgg.tdi) {
                        if (bva.kgg.bxp == bva.igo.ukb || bva.kgg.bxp == bva.igo.buf || bva.kgg.bxp == bva.igo.cek) {
                            bva.mij.zdw = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (bva.kgg.bxp == bva.igo.yzd) {
                                bva.mij.zdw = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.mcl("fullscreen", bva.mij.zdw)
        }
        if (f) {
            f.xlm.mom("fullscreen", "#mcl", [(bva.mij.zdw) ? 1 : 0])
        }
        if (e) {
            e.xlm.mom("fullscreen", "#mcl", [(bva.mij.zdw) ? 1 : 0])
        }
        if (g) {
            g.xlm.mom("fullscreen", "#mcl", [(bva.mij.zdw) ? 1 : 0])
        }
        bva.mij.nmh();
        bva.mij.lwb();
        bva.mij.udr();
        if (bva.kgg.kwd() === true && bva.kgg.jvx() === false) {
            document.body.style.height = "5000px"
        }
        if (!bva.kgg.jvx() && bva.kgg.bxp === bva.igo.cek && bva.mij.jqs < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.pnk = function() {
        bva.mij.mei();
        bva.mij.onw()
    };
    this.onw = function() {
        if (bva.kgg.kwd() === true && bva.kgg.jvx() === false) {
            if (bva.mij.oxg() === true) {
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
                            bva.mij.mei();
                            window.ontouchmove = bva.mij.pnk
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = bva.mij.lgk;
                        document.ontouchmove = bva.mij.vfe;
                        document.ontouchend = bva.mij.mha;
                        if (window.ontouchmove != null) {
                            bva.mij.mei();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.coy = function(g) {
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
                    bva.kgg.yea(e, j, j)
                }
                f.innerHTML = bva.mij.language.swx;
                l.className = "rotateAnim";
                k.style.display = "block";
                bva.mij.ycx = true
            } else {
                k.style.display = "none";
                l.className = null;
                bva.mij.ycx = false
            }
        }
    };
    this.fgc = function() {
        var d = bva.mij.xqp.whx("settings");
        bva.mij.mei();
        if (d) {
            d.xlm.mom("adjustment", "#mcl", [(bva.mij.ngk === bva.uhn.opd) ? 0 : 1]);
            d.egc()
        }
        if (bva.mij.yux === true) {
            bva.mij.ycx = true;
            bva.mij.rgq(true);
            bva.mij.coy(true)
        } else {
            bva.mij.ycx = false;
            bva.mij.rgq((bva.mij.rnr[bva.mij.kek] === 0));
            bva.mij.coy(false)
        }
    };
    this.nmh = function() {
        this.kqv = window.innerWidth, this.jqs = window.innerHeight;
        this.gdw = false;
        if (bva.kgg.jvx() == true && bva.uug.value69 === true) {
            if (bva.kgg.jnn() === true) {
                this.gdw = true;
                this.kqv = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.jqs = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.kqv > this.jqs) {
                    this.jqs *= 0.98
                }
            } else {
                if (bva.kgg.kwd() === true) {
                    this.gdw = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.kqv = 1024;
                            this.jqs = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.kqv = 736;
                                this.jqs = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.kqv = 667;
                                    this.jqs = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.kqv = 768;
                            this.jqs = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.kqv = 414;
                                this.jqs = 628
                            } else {
                                if (screen.height === 667) {
                                    this.kqv = 375;
                                    this.jqs = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.udr = function() {
        var g = 0,
            k = 0,
            f = 1,
            e = 1,
            j = this.kqv,
            d = this.jqs;
        this.sei = (this.zdw || j < this.width || d < this.height || this.uhn.nrw);
        g = this.sbt(this.sei);
        f = ((j - k) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.sei) {
            if (this.uhn.thl) {
                if (f > e) {
                    this.eel = e;
                    this.lbq = e
                } else {
                    this.eel = f;
                    this.lbq = f
                }
            } else {
                this.eel = f;
                this.lbq = e
            }
        } else {
            this.eel = 1;
            this.lbq = 1
        }
        bva.kgg.yea(this.canvas, this.eel, this.lbq);
        if (this.uhd != null) {
            bva.kgg.yea(this.uhd, this.eel, this.lbq, ((this.uhn.uhd.oue.x) - ((this.uhn.uhd.oue.x + this.uhn.uhd.wzm) / 2 * (1 - this.eel))), ((this.uhn.uhd.oue.y) - ((this.uhn.uhd.oue.y + this.uhn.uhd.ape) / 2 * (1 - this.lbq))))
        }
        if (this.kxy != null) {
            bva.kgg.yea(this.kxy, this.eel, this.lbq)
        }
        if (this.sei) {
            this.offsetLeft = Math.floor((j - (this.canvas.width * this.eel))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.lbq))) / 2
        } else {
            this.offsetLeft = this.fzk.offsetLeft;
            this.offsetTop = this.fzk.offsetTop
        }
    };
    this.lwb = function() {
        if (this.taj() === true) {
            var e = null;
            if (this.msp[this.ngt] === bva.xoc.xny) {
                if (window.orientation === -90) {
                    e = bva.uhn.xhx
                } else {
                    e = bva.uhn.opd
                }
            } else {
                if (this.msp[this.ngt] === bva.xoc.cil) {
                    e = bva.uhn.xhx
                } else {
                    if (this.msp[this.ngt] === bva.xoc.xzx) {
                        e = bva.uhn.opd
                    }
                }
            }
            this.yux = (this.jqs > this.kqv);
            this.pbd(e);
            this.rdr(false);
            if (this.orc === true) {
                this.egc()
            } else {
                this.xqp.mom("loading", "#egc")
            }
        } else {
            if (bva.kgg.tdi) {
                var f = (this.kqv > this.jqs) ? this.mmc : this.mes,
                    d = this.uhn.jgj,
                    e = null;
                if (f != this.aph) {
                    this.aph = f;
                    if (this.kdt) {
                        e = (this.aph == this.mmc) ? bva.uhn.cnt : bva.uhn.zjz
                    } else {
                        e = (this.aph == this.mmc) ? bva.uug.value33 : bva.uug.value32
                    }
                    this.pbd(e);
                    this.rdr((d != this.uhn.jgj) || this.kdt);
                    if (this.orc === true) {
                        if (this.kdt && this.yig) {
                            this.lye(this.wyj(this.language.otl))
                        } else {
                            this.egc()
                        }
                    } else {
                        this.xqp.mom("loading", "#egc")
                    }
                }
            } else {
                if (!this.kdt) {
                    e = (this.zdw) ? bva.uug.value15 : bva.uug.value14;
                    this.pbd(e);
                    this.rdr(false);
                    if (this.orc === true) {
                        this.egc()
                    } else {
                        this.xqp.mom("loading", "#egc")
                    }
                }
            }
        }
    };
    this.taj = function() {
        return false
    };
    this.oxg = function() {
        return false
    };
    this.pbd = function(d) {};
    this.acv = function() {
        this.style = new nhm()
    };
    this.sbt = function(d) {
        var e = 0;
        if (bva.kgg.jnn() && window.innerWidth > window.innerHeight && d) {
            if (this.luv === true && document.body.style.backgroundColor !== this.style.isi.backgroundColor) {
                document.body.style.backgroundColor = this.style.isi.backgroundColor
            }
        }
        return e
    };
    this.gec = function() {
        if (bva.kgg.jnn() && !bva.kgg.jvx() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.soc = function() {
        return false
    };
    this.pec = function() {
        if (bva.kgg.fke) {
            this.eyo = new ziz()
        } else {
            this.eyo = new ofb()
        }
        this.eyo.uwa();
        this.eyo.ved(this.fqs())
    };
    this.gny = function() {
        this.xqp = new rch();
        this.xqp.uwa();
        this.xqp.knm("jackpots")
    };
    this.fqs = function() {
        var d = new hta();
        d.uwa();
        return d
    };
    this.twt = function() {
        this.pvb = new xho()
    };
    this.txh = function() {
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
                    for (var k = 0, g = bva.uug.value5.length; k < g; k++) {
                        if (o[l] === bva.uug.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(bva.uug.value5[0])
                }
                bva.uug.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    bva.uug.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = bva.kgg.ujp();
                if (this.cjn(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === bva.language.EN && this.cjn(bva.language.US)) {
                        sessionStorage.sessionValue1 = bva.language.US
                    } else {
                        if (q === bva.language.DE && this.cjn(bva.language.AT)) {
                            sessionStorage.sessionValue1 = bva.language.AT
                        } else {
                            if (q === bva.language.ES && this.cjn(bva.language.MX)) {
                                sessionStorage.sessionValue1 = bva.language.MX
                            } else {
                                if (q === bva.language.ES && this.cjn(bva.language.CO)) {
                                    sessionStorage.sessionValue1 = bva.language.CO
                                } else {
                                    if (q === bva.language.ES && this.cjn(bva.language.CL)) {
                                        sessionStorage.sessionValue1 = bva.language.CL
                                    } else {
                                        if (q === bva.language.ES && this.cjn(bva.language.VE)) {
                                            sessionStorage.sessionValue1 = bva.language.VE
                                        } else {
                                            if (q === bva.language.EN && this.cjn(bva.language.BR)) {
                                                sessionStorage.sessionValue1 = bva.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = bva.uug.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.cjn(sessionStorage.sessionValue1)) {
                for (var l = 0, m = bva.uug.value5.length; l < m; l++) {
                    if (bva.uug.value5[l] == sessionStorage.sessionValue1) {
                        this.afx = l;
                        break
                    }
                }
                this.language = this.vbx(sessionStorage.sessionValue1)
            } else {
                this.afx = 0;
                this.language = this.vbx(bva.uug.value5[this.afx]);
                sessionStorage.sessionValue1 = bva.uug.value5[this.afx]
            }
        } catch (n) {
            this.afx = 0;
            this.language = this.vbx(bva.uug.value5[this.afx]);
            console.error(n.pdb)
        }
    };
    this.xlf = function() {
        var d = (bva.uug.value45 == bva.bmy.ung) ? this.uhn.bmy.mij : this.uhn.bmy.wwy;
        this.fzk = document.getElementById("gameArea");
        if (this.gdw === false) {
            this.fzk.style.marginTop = (-d.oue.height / 2) + "px";
            this.fzk.style.marginLeft = (-d.oue.width / 2) + "px"
        } else {
            this.fzk.style.left = "0px";
            this.fzk.style.top = "0px";
            this.fzk.style.marginTop = ((window.innerHeight - d.oue.height) / 2) + "px";
            this.fzk.style.marginLeft = ((window.innerWidth - d.oue.width) / 2) + "px"
        }
        this.fzk.style.width = (d.oue.width > window.innerWidth) ? window.innerWidth + "px" : d.oue.width + "px";
        this.fzk.style.height = (d.oue.height > window.innerHeight) ? window.innerHeight + "px" : d.oue.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.oue.width);
        this.canvas.height = Math.round(d.oue.height);
        this.context2D = this.canvas.getContext("2d");
        this.kxy = document.getElementById("gameOverlay");
        if (this.kxy) {
            this.kxy.style.width = d.oue.width + "px";
            this.kxy.style.height = d.oue.height + "px"
        }
        this.trj(d)
    };
    this.trj = function(e) {
        var f = new bqm(),
            d = (bva.uug.value45 == bva.bmy.ung) ? this.style.bmy.mij : this.style.bmy.wwy;
        f.uwa(e.oue, this.context2D);
        f.parent = this;
        f.uva = (bva.kgg.tdi) ? this.rem : this.kuo;
        f.thf = (this.kdt) ? this.language.xxd : this.language.arq;
        f.mao = this.language.error;
        f.cep(e);
        f.raa(d);
        this.xqp.mzx("loading", f)
    };
    this.pna = function() {
        var d = new kgw();
        d.uwa(this.uhn.bea.oue, null, this.context2D);
        d.parent = this;
        d.cep(this.uhn.bea);
        d.raa(this.style.bea);
        if (sessionStorage.sessionValue15 == "true" && bva.uug.value49) {
            d.hbm("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || bva.uug.value49) {
                d.hbm("time", "", "--:--")
            }
        }
        if (this.sgm()) {
            d.hbm("freeplay", "", this.language.egt)
        } else {
            d.hbm("id", "", "")
        }
        this.xqp.mzx("topi", d)
    };
    this.wpn = function() {
        var d = new nou();
        d.uwa(this.uhn.ctg.oue, null, this.context2D);
        d.parent = this;
        d.cep(this.uhn.ctg);
        d.raa(this.style.ctg, false);
        d.esj(false);
        this.xqp.mzx("topb", d)
    };
    this.uyc = function() {};
    this.xsm = function() {
        var d = new bgd();
        d.uwa(this.uhn.bml.oue, null, this.context2D);
        d.parent = this;
        d.hin(this.uhn.bml);
        d.raa(this.style.bml);
        d.esj(false);
        this.xqp.mzx("stats", d)
    };
    this.mlj = function() {
        this.gqp = new gdm();
        this.gqp.uwa();
        this.gqp.raa(this.style.gqp);
        this.gqp.cep(this.uhn.gqp)
    };
    this.ivb = function() {
        this.wmv = new cev();
        this.wmv.uwa();
        this.wmv.raa(this.style.wmv);
        this.wmv.cep(this.uhn.wmv)
    };
    this.vco = function() {
        if (this.wle()) {
            this.ltj.bud = document.getElementById("jurisdictionDiv");
            this.ltj.bmb = document.getElementById("btnsp");
            this.ltj.mwo = document.getElementById("btnsl");
            this.ltj.gtz = document.getElementById("btnst");
            if (this.ltj.bmb) {
                this.ltj.bmb.innerHTML = this.language.aor;
                this.ltj.bmb.onclick = this.viy;
                this.ltj.bmb.ontouchend = this.viy
            }
            if (this.ltj.mwo) {
                this.ltj.mwo.innerHTML = this.language.jml;
                this.ltj.mwo.onclick = this.xnk;
                this.ltj.mwo.ontouchend = this.xnk
            }
            if (this.ltj.gtz) {
                this.ltj.gtz.innerHTML = this.language.efm;
                this.ltj.gtz.onclick = this.vol;
                this.ltj.gtz.ontouchend = this.vol
            }
            this.zcf();
            this.bpu()
        }
    };
    this.ypr = function(e) {
        var d = new kww();
        d.uwa(this.uhn.ths.oue, null, this.context2D);
        d.parent = this;
        d.yyz = true;
        if (e) {
            d.ufn(e)
        }
        d.hin(this.uhn.ths);
        d.pog(this.language);
        d.raa(this.style.ths);
        d.cep(this.uhn.ths);
        d.esj(false);
        this.xqp.mzx("autop", d)
    };
    this.abn = function(d) {
        var e = new zgl();
        e.uwa(this.uhn.raz.oue, null, this.context2D);
        e.parent = this;
        if (d) {
            e.jfo(d)
        }
        e.esj(false);
        this.xqp.mzx("settings", e)
    };
    this.rdr = function(d) {};
    this.qei = function() {
        var d = this.xqp.whx("stats");
        if (d) {
            d.qjx(this.uhn.bml.oue);
            d.cep(this.uhn.bml)
        }
    };
    this.fzg = function() {
        if (this.gqp) {
            this.gqp.cep(this.uhn.gqp)
        }
    };
    this.iqq = function() {
        if (this.wmv) {
            this.wmv.cep(this.uhn.wmv)
        }
    };
    this.zcf = function() {
        var d = null,
            e = 0;
        if (this.ltj) {
            d = this.uhn.rkb;
            if (this.ltj.bud) {
                bva.kgg.knu(this.ltj.bud, d.faa)
            }
            if (this.ltj.bmb) {
                this.ltj.bmb.style.fontSize = d.sue.fontSize + "px";
                this.ltj.bmb.style.textIndent = d.sue.textIndent + "px";
                bva.kgg.knu(this.ltj.bmb, d.ujx)
            }
            if (this.ltj.mwo) {
                this.ltj.mwo.style.fontSize = d.sue.fontSize + "px";
                this.ltj.mwo.style.textIndent = d.sue.textIndent + "px";
                bva.kgg.knu(this.ltj.mwo, d.npn)
            }
            if (this.ltj.gtz) {
                this.ltj.gtz.style.fontSize = d.sue.fontSize + "px";
                this.ltj.gtz.style.textIndent = d.sue.textIndent + "px";
                bva.kgg.knu(this.ltj.gtz, d.uex)
            }
            if (this.ltj.bud) {
                e = (d.faa.width - d.faa.height) / 2;
                if (this.ngk == bva.uhn.xhx) {
                    this.ltj.bud.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.ltj.bud.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.ijy = function() {
        var d = this.xqp.whx("autop");
        if (d) {
            d.qjx(this.uhn.ths.oue);
            d.cep(this.uhn.ths)
        }
    };
    this.mfo = function() {
        var d = this.xqp.whx("settings");
        if (d) {
            d.qjx(this.uhn.raz.oue);
            d.cep(this.uhn.raz)
        }
    };
    this.brt = function() {
        var d = this.xqp.whx("topi");
        if (d) {
            d.qjx(this.uhn.bea.oue);
            d.cep(this.uhn.bea)
        }
    };
    this.ifg = function() {
        var d = this.xqp.whx("topb");
        if (d) {
            d.qjx(this.uhn.ctg.oue);
            d.cep(this.uhn.ctg)
        }
    };
    this.xcn = function() {
        var e = this.xqp.whx("loading"),
            d = (bva.uug.value45 == bva.bmy.ung) ? this.uhn.bmy.mij : this.uhn.bmy.wwy;
        if (e) {
            this.canvas.width = 0;
            if (this.gdw === false) {
                this.fzk.style.marginTop = (-d.oue.height / 2) + "px";
                this.fzk.style.marginLeft = (-d.oue.width / 2) + "px"
            } else {
                this.fzk.style.left = "0px";
                this.fzk.style.top = "0px";
                this.fzk.style.marginTop = ((this.jqs - d.oue.height) / 2) + "px";
                this.fzk.style.marginLeft = ((this.kqv - d.oue.width) / 2) + "px"
            }
            this.fzk.style.width = (d.oue.width > this.kqv) ? this.kqv + "px" : d.oue.width + "px";
            this.fzk.style.height = (d.oue.height > this.jqs) ? this.jqs + "px" : d.oue.height + "px";
            this.canvas.width = Math.round(d.oue.width);
            this.canvas.height = Math.round(d.oue.height);
            if (this.kxy) {
                this.kxy.style.width = d.oue.width + "px";
                this.kxy.style.height = d.oue.height + "px"
            }
            e.qjx(d.oue);
            e.cep(d)
        }
    };
    this.rte = function() {
        if (bva.kgg.tdi && !bva.kgg.fke) {
            if (!this.eyo.mde && bva.kgg.bxp != bva.igo.ndm) {
                this.tgt = false;
                this.kek = 0
            }
        }
    };
    this.irw = function(d) {
        if (bva.kgg.tdi) {
            if (!this.kdt) {
                return bva.uhn.fbi
            } else {
                if (!this.xmr) {
                    return bva.uhn.cnt
                }
            }
        }
        return d
    };
    this.szz = function() {
        var d = this.xqp.whx("loading");
        this.mei();
        if (d) {
            d.byo = true
        }
        if ((bva.kgg.bxp === bva.igo.ukb || bva.kgg.bxp === bva.igo.tuh || bva.kgg.bxp === bva.igo.xrv) && bva.kgg.kpx === bva.os.nik && bva.kgg.scu === true) {
            if (this.eyo.mde === false || bva.kgg.zai() === false || bva.kgg.hcb() === false) {
                bva.fcq = bva.qfw.vom
            }
        }
        if (bva.fcq == 0) {
            if (this.tgt === true && bva.kgg.cxg().length === 0) {
                this.tgt = false
            }
            if (d) {
                d.egc(0)
            }
            this.kwg();
            if (this.tgt === true) {
                this.gvi()
            }
            this.eyo.start()
        } else {
            if (d) {
                if (bva.fcq == bva.qfw.eei && bva.kgg.bxp === bva.igo.cek) {
                    d.cmu = this.language.kxz;
                    d.egc(0)
                } else {
                    if (bva.fcq == bva.pdb.rei) {
                        d.cmu = this.language.chi;
                        d.egc(0)
                    } else {
                        d.cmu = this.language.nwi;
                        if (bva.kgg.kpx === bva.os.nik || bva.kgg.kpx === bva.os.wuv) {
                            if (bva.fcq != bva.qfw.eei && sessionStorage.sessionValue1 === bva.language.TR) {
                                d.cmu += "|Google Chrome" + this.language.tfu
                            } else {
                                if (bva.fcq != bva.qfw.eei && (sessionStorage.sessionValue1 === bva.language.GE || sessionStorage.sessionValue1 === bva.language.HU)) {
                                    d.cmu += "|" + this.language.umd + " Google Chrome" + this.language.kop
                                } else {
                                    d.cmu += "|" + this.language.tfu + " Google Chrome"
                                }
                            }
                        } else {
                            if (bva.kgg.kpx === bva.os.dfl || bva.kgg.kpx === bva.os.wuv) {
                                if (bva.fcq != bva.qfw.eei && sessionStorage.sessionValue1 === bva.language.TR) {
                                    d.cmu += "|Google Chrome, Mozilla Firefox" + this.language.tfu
                                } else {
                                    if (bva.fcq != bva.qfw.eei && (sessionStorage.sessionValue1 === bva.language.GE || sessionStorage.sessionValue1 === bva.language.HU)) {
                                        d.cmu += "|" + this.language.umd + " Google Chrome, Mozilla Firefox" + this.language.kop
                                    } else {
                                        d.cmu += "|" + this.language.tfu + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + bva.fcq);
                        d.egc(0)
                    }
                }
            }
        }
    };
    this.kwg = function() {};
    this.gvi = function() {};
    this.rxi = function() {
        var e = this.ymd + this.uhn.type + "/",
            d = this.xqp.whx("loading");
        if (!this.kdt) {
            this.eyo.ajx("continue", bva.uug.value30 + "/basic/images/" + this.uhn.type + "/btn_continue.png")
        }
        if (bva.uug.value45 == bva.bmy.ung) {
            e += "load.jpg"
        } else {
            if (bva.uug.value45 == bva.bmy.xov) {
                e += "load_amanet.jpg"
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.xxb = true
            }
        }
        this.eyo.ajx("splash", e);
        this.eyo.dip()
    };
    this.bfg = function() {};
    this.cjn = function(e) {
        for (var d = 0; d < bva.uug.value5.length; d++) {
            if (bva.uug.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.hiz = function() {
        bva.mij.pig = true;
        if (!bva.mij.kdt) {
            bva.mij.uos();
            if (bva.mij.dqq()) {
                bva.mij.pol()
            }
        } else {
            bva.mij.ceb()
        }
        bva.mij.connect()
    };
    this.uos = function() {};
    this.ceb = function() {};
    this.connect = function() {
        this.lri.connect(this.hdt, this.hct, this.pcz, this.ucg, this.hpk, this.prw, this.rhm)
    };
    this.bfd = function(d) {
        if (typeof d === "undefined") {
            bva.mij.lri.bfd(0)
        } else {
            bva.mij.lri.bfd(d)
        }
    };
    this.uni = function(d) {
        this.hwl = 0;
        this.sge = 0;
        this.snw = d;
        clearInterval(this.ypj);
        this.ypj = setInterval(this.njx, 1000)
    };
    this.njx = function() {
        var d = bva.mij.xqp.whx("loading");
        bva.mij.hwl++;
        bva.mij.sge = Math.round(bva.uug.value47 / 1000) - bva.mij.hwl;
        bva.mij.sge = (bva.mij.sge > 0) ? bva.mij.sge : 0;
        if (!bva.mij.luv) {
            if (d) {
                d.cmu = "Can not connect to game server!|Tries to connect: " + bva.mij.snw + " (" + bva.mij.sge + " sec)";
                d.egc(0)
            }
        }
    };
    this.ruj = function() {
        return bva.uug.value74
    };
    this.egc = function(d, g, e, f) {};
    this.jta = function() {
        return (this.orc === true && this.luv === true && this.yux === false)
    };
    this.lye = function(e) {
        var d = this.xqp.whx("history");
        this.orc = true;
        if (this.luv) {
            if (this.uhn.ews) {
                bva.kgg.hvc(this.context2D, this.uhn.mij.oue.x - this.uhn.mij.stc, this.uhn.mij.oue.y - this.uhn.mij.stc, this.uhn.mij.oue.width + 2 * this.uhn.mij.stc, this.uhn.mij.oue.height + 2 * this.uhn.mij.stc, "black", 1)
            }
            bva.kgg.sxn(this.context2D, e, "white", this.uhn.mij.oue.x, this.uhn.mij.oue.y, this.uhn.mij.oue.width, this.uhn.mij.oue.height, "arial", 28, "bold");
            if (d) {
                d.egc()
            }
        }
    };
    this.dnx = function() {
        if (bva.mij.gqp) {
            bva.mij.gqp.xwd()
        }
        bva.mij.mnd(false);
        bva.mij.qzy.erc(false);
        bva.mij.qzy.xlm.mom("exit", "#zjd", [true]);
        if (bva.kgg.lhn()) {
            bva.kgg.wsu();
            setTimeout(bva.mij.mei, 1400)
        }
        if (bva.uug.value67 > 0) {
            bva.mij.bfd(bva.uug.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                bva.mij.mno({
                    type: "history",
                    sender: bva.mij.hdt,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null") {
                    bva.mij.mno({
                        type: "quit",
                        sender: bva.mij.hdt,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                        window.location.href = decodeURIComponent(sessionStorage.sessionValue5)
                    }
                }
            }
        }
    };
    this.owo = function() {
        clearTimeout(bva.mij.myi);
        bva.mij.mnd(false);
        if (bva.mij.qzy) {
            bva.mij.qzy.erc(false)
        }
        if (!bva.mij.kdt) {
            bva.mij.stop();
            if (bva.mij.qzy) {
                bva.mij.qzy.xlm.mom("info", "#tok", [bva.mij.language.jqu]);
                bva.mij.egc()
            }
            if (bva.mij.taj() === true && bva.kgg.lhn()) {
                bva.kgg.wsu();
                setTimeout(bva.mij.mei, 800);
                setTimeout(bva.mij.lri.wvv.close, 800)
            } else {
                bva.mij.lri.wvv.close()
            }
        } else {
            bva.mij.lri.close()
        }
    };
    this.duw = function() {
        bva.mij.nvb = true
    };
    this.fpl = function() {
        if (bva.kgg.tdi == true) {
            if (bva.mij.nvb == true) {
                bva.mij.nvb = false;
                bva.kgg.wsu();
                setTimeout(bva.mij.mei, 1400)
            }
        } else {
            bva.kgg.wsu();
            setTimeout(bva.mij.mei, 1400)
        }
    };
    this.zsj = function() {
        var e = (bva.mij.taj() === true) ? "smartphone" : "desktop",
            j = "en";
        if (sessionStorage.sessionValue1 == bva.language.ES || sessionStorage.sessionValue1 == bva.language.CO || sessionStorage.sessionValue1 == bva.language.CL || sessionStorage.sessionValue1 == bva.language.MX || sessionStorage.sessionValue1 == bva.language.VE) {
            j = "es"
        } else {
            if (sessionStorage.sessionValue1 == bva.language.RO) {
                j = "ro"
            } else {
                if (sessionStorage.sessionValue1 == bva.language.PT || sessionStorage.sessionValue1 == bva.language.BR) {
                    j = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == bva.language.HR) {
                        j = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == bva.language.DE) {
                            j = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == bva.language.SE) {
                                j = "se"
                            }
                        }
                    }
                }
            }
        }
        if (bva.mij.adp != "") {
            var f = null,
                g = "",
                d = "";
            if (bva.mij.adp != "") {
                g += "rtp=" + bva.mij.adp
            }
            if (bva.mij.pqz != "") {
                g += (bva.mij.adp != "") ? "&" : "";
                g += "maxwin=" + ((bva.mij.pqz == "0") ? "0" : bva.mij.wwe(Number(bva.mij.pqz) * bva.mij.rjo()))
            }
            d = encodeURIComponent(g);
            f = window.open(bva.uug.value30 + "/gamerules/" + j + "/" + e + "/" + bva.mij.hdt.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = bva.uug.value30 + "/gamerules/" + j + "/" + e + "/" + bva.mij.hdt.toLowerCase() + ".html?" + d
            }
        }
    };
    this.nvm = function() {
        bva.mij.khk = false;
        bva.mij.tnb();
        bva.mij.zta();
        bva.mij.neu()
    };
    this.utl = function() {
        var d = bva.mij.xqp.whx("stats");
        if (d) {
            d.ekz(true, true)
        }
        bva.mij.ilt.close(true)
    };
    this.lsz = function() {
        var d = bva.mij.xqp.whx("stats");
        bva.mij.stop();
        if (d && d.kvp()) {
            d.ekz(true, true)
        }
        bva.mij.lri.wvv.close();
        if (bva.mij.ilt) {
            bva.mij.ilt.close(false)
        }
    };
    this.ure = function() {
        clearTimeout(bva.mij.myi);
        bva.mij.qzy.erc(false);
        bva.mij.stop();
        bva.mij.lri.wvv.czd()
    };
    this.zkl = function() {
        if (bva.mij.yig) {
            return
        }
        var d = bva.mij.xqp.whx("history");
        if (d) {
            d.erc(false)
        }
        bva.mij.stop();
        bva.mij.lri.fpu(bva.mij.tnc)
    };
    this.ess = function() {
        if (bva.mij.yig) {
            return
        }
        var d = bva.mij.xqp.whx("history");
        if (d) {
            d.erc(false)
        }
        bva.mij.stop();
        bva.mij.lri.nyk(bva.mij.tnc)
    };
    this.sfl = function() {
        var d = bva.mij.xqp.whx("history");
        if (d) {
            d.erc(false)
        }
        bva.mij.stop();
        clearInterval(bva.mij.tgq);
        bva.mij.vbk();
        bva.mij.lri.close()
    };
    this.zwb = function() {
        bva.mij.eyo.zqb("btn");
        bva.mij.eyo.urt("btn");
        bva.mij.ffh()
    };
    this.smk = function() {
        var f = bva.mij.xqp.whx("topb"),
            e = bva.mij.xqp.whx("settings"),
            g = bva.mij.xqp.whx("gameb"),
            d = bva.mij.xqp.whx("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (bva.mij.eyo.mde === true) {
            bva.mij.kek = (bva.mij.kek === bva.mij.rnr.length - 1) ? 0 : bva.mij.kek + 1;
            bva.mij.blh(bva.mij.rnr[bva.mij.kek])
        } else {
            bva.mij.kek = (bva.mij.kek === bva.mij.rnr.length - 1) ? 0 : bva.mij.rnr.length - 1;
            bva.mij.rgq((bva.mij.rnr[bva.mij.kek] === 0))
        }
        sessionStorage.sessionValue6 = bva.mij.kek;
        if (bva.mij.rnr[bva.mij.kek] > 0) {
            bva.mij.eyo.urt("audioon")
        }
        if (d) {
            d.xhl("audio", bva.mij.rnr[bva.mij.kek])
        }
        if (f) {
            f.xlm.mom("audio", "#mcl", [bva.mij.kek])
        }
        if (e) {
            e.xlm.mom("audio", "#mcl", [bva.mij.kek])
        }
        if (g) {
            g.xlm.mom("audio", "#mcl", [bva.mij.kek])
        }
        bva.mij.egc()
    };
    this.rem = function() {
        bva.mij.nta = true
    };
    this.kuo = function() {};
    this.unu = function() {
        var d = bva.mij.xqp.whx("settings");
        if (d) {
            if (d.kvp()) {
                bva.mij.ije()
            } else {
                bva.mij.ggb()
            }
            bva.mij.eyo.urt("btn");
            if (bva.mij.uhn.sbj === false) {
                bva.mij.qzy.xlm.mom("setting", "#hqg", [d.kvp()])
            }
        }
    };
    this.vei = function() {
        var d = bva.mij.xqp.whx("settings"),
            e = "";
        bva.mij.ngt = (bva.mij.ngt < bva.mij.msp.length - 1) ? bva.mij.ngt + 1 : (bva.kgg.ihj()) ? 0 : 1;
        localStorage.localValue1 = bva.mij.ngt;
        bva.mij.mei();
        if (d) {
            d.xlm.mom("adjustment", "#mcl", [(bva.mij.ngk === bva.uhn.opd) ? 0 : 1]);
            if (bva.mij.msp[bva.mij.ngt] === bva.xoc.cil) {
                e = bva.mij.language.left
            } else {
                if (bva.mij.msp[bva.mij.ngt] === bva.xoc.xzx) {
                    e = bva.mij.language.bib
                } else {
                    if (bva.mij.msp[bva.mij.ngt] === bva.xoc.xny) {
                        e = bva.mij.language.kpp
                    }
                }
            }
            d.xlm.mom("adjustment", "#rwv", [e])
        }
    };
    this.viy = function() {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.xnk = function() {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.vol = function() {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.qvh = function(e, d) {
        this.qzy.xlm.mom("creditd", "#rwv", [this.wwe(e), d])
    };
    this.sgu = function(e, d) {
        if (e > 0) {
            this.qzy.xlm.mom("betd", "#rwv", [this.wwe(e), d])
        } else {
            this.qzy.xlm.mom("betd", "#rwv", ["", d])
        }
    };
    this.ikb = function(e) {
        var d = this.xqp.whx("topi");
        this.tnc = e;
        if (d) {
            d.ura("id", (e > 0) ? e : "")
        }
    };
    this.ags = function() {
        var e = "",
            d = bva.mij.xqp.whx("topi");
        if (bva.uug.value49) {
            e += bva.mij.fuw()
        }
        if (bva.uug.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += bva.mij.erl()
        }
        if (bva.uug.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.ura("time", e)
        }
    };
    this.erl = function() {
        return this.getTime(new Date().getTime() - this.duo)
    };
    this.fuw = function() {
        var d = new Date();
        return this.lpx(d.getHours()) + ":" + this.lpx(d.getMinutes())
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
        return this.lpx(d) + ":" + this.lpx(f)
    };
    this.lpx = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.yhq = function() {
        if (sessionStorage.sessionValue15 == "true" || bva.uug.value49) {
            if (bva.uug.value49) {
                this.fuw()
            }
            this.duo = (this.qul > 0) ? this.qul : new Date().getTime();
            this.ags();
            this.zty = setInterval(this.ags, 1000)
        }
    };
    this.ool = function() {
        clearInterval(this.zty)
    };
    this.fxn = function(d) {
        this.duo -= d
    };
    this.ogm = function(d, f) {
        var e = this.xqp.whx("loading");
        if (e && e.cmu == null) {
            if (f && f !== "") {
                e.mao = f
            } else {
                e.mao = this.language.error
            }
            e.cmu = d;
            e.egc(this.eyo.bzd())
        }
    };
    this.ggb = function() {};
    this.ije = function() {};
    this.gri = function() {};
    this.lfu = function() {};
    this.ffh = function() {
        var g = false,
            j = this.xqp.whx("topb"),
            f = this.xqp.whx("settings"),
            k = this.xqp.whx("gameb"),
            d = this.xqp.whx("topi");
        this.afx = (this.afx + 1 == bva.uug.value5.length) ? 0 : this.afx + 1;
        sessionStorage.sessionValue1 = bva.uug.value5[this.afx];
        this.language = this.vbx(bva.uug.value5[this.afx]);
        this.pog();
        if (j && g == false) {
            var e = j.xlm.whx("language");
            if (e) {
                e.yct(this.jxa(bva.uug.value5[this.afx]));
                g = true
            }
            j.gzp(true)
        }
        if (f && g == false) {
            var e = f.xlm.whx("language");
            if (e) {
                e.yct(this.jxa(bva.uug.value5[this.afx]));
                g = true
            }
        }
        if (k && g == false) {
            var e = k.xlm.whx("language");
            if (e) {
                e.yct(this.jxa(bva.uug.value5[this.afx]));
                g = true
            }
        }
        if (g == false) {
            var e = this.qzy.xlm.whx("lang");
            if (e) {
                e.qza = this.jxa(bva.uug.value5[this.afx])
            }
        }
        if (d) {
            d.mcl("language", sessionStorage.sessionValue1)
        }
        this.egc()
    };
    this.pog = function() {};
    this.vbx = function(d) {
        if (d == bva.language.EN || d == bva.language.US) {
            return new ooe()
        } else {
            if (d == bva.language.ES || d == bva.language.CO || d == bva.language.MX || d == bva.language.CL || d == bva.language.VE) {
                return new yul()
            } else {
                if (d == bva.language.DE || d == bva.language.AT) {
                    return new yhd()
                } else {
                    if (d == bva.language.PT || d == bva.language.BR) {
                        return new xxl()
                    } else {
                        if (d == bva.language.RU) {
                            return new hdv()
                        } else {
                            if (d == bva.language.EE) {
                                return new jul()
                            } else {
                                if (d == bva.language.TR) {
                                    return new zcz()
                                } else {
                                    if (d == bva.language.CZ) {
                                        return new fup()
                                    } else {
                                        if (d == bva.language.GR) {
                                            return new bho()
                                        } else {
                                            if (d == bva.language.BG) {
                                                return new lyc()
                                            } else {
                                                if (d == bva.language.GE) {
                                                    return new fif()
                                                } else {
                                                    if (d == bva.language.HU) {
                                                        return new tsd()
                                                    } else {
                                                        if (d == bva.language.RO) {
                                                            return new fze()
                                                        } else {
                                                            if (d == bva.language.FR) {
                                                                return new ymf()
                                                            } else {
                                                                if (d == bva.language.HR) {
                                                                    return new wow()
                                                                } else {
                                                                    if (d == bva.language.IT) {
                                                                        return new qom()
                                                                    } else {
                                                                        if (d == bva.language.SE) {
                                                                            return new luf()
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
    this.jxa = function(d) {
        if (d) {
            return this.eyo.jgz(d)
        }
        return null
    };
    this.jrx = function() {
        this.eyo.iac()
    };
    this.vbk = function() {};
    this.rgq = function(d) {
        this.eyo.jql(d)
    };
    this.blh = function(d) {
        this.eyo.dvr(d)
    };
    this.iwv = function() {
        this.uyc();
        var d = this.xqp.whx("history");
        this.luv = true;
        this.yig = true;
        if (d) {
            d.rpb(true)
        }
        this.lye(this.wyj(this.language.otl))
    };
    this.yle = function() {
        loadGame("hist_" + bva.mij.hdt.toLowerCase(), bva.uug.value30 + "/" + bva.mij.hdt.toLowerCase() + "/src/hist_" + bva.mij.hdt.toLowerCase(), "UTF-8");
        removeGame(bva.mij.hdt.toLowerCase(), bva.uug.value30 + "/" + bva.mij.hdt.toLowerCase() + "/src/" + bva.mij.hdt.toLowerCase())
    };
    this.ysh = function() {
        var d = "./history_" + this.hdt.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.parent.postMessage('CloseGame',"*");
    };
    this.zhe = function() {
        var d = null;
        if (bva.mij.xmr) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            bva.mij.mno({
                type: "quit",
                sender: bva.mij.hdt,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            bva.mij.nvu();
            if (d !== "(api)") {
                window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(bva.mij.hdt.toLowerCase(), bva.uug.value30 + "/" + bva.mij.hdt.toLowerCase() + "/src/" + bva.mij.hdt.toLowerCase());
            removeGame("hist_" + bva.mij.hdt.toLowerCase(), bva.uug.value30 + "/" + bva.mij.hdt.toLowerCase() + "/src/hist_" + bva.mij.hdt.toLowerCase());
            loadMenu("menu", bva.uug.value1001, "UTF-8", true)
        }
    };
    this.sdi = function() {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            bva.mij.mno({
                type: "quit",
                sender: bva.mij.hdt,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            d = decodeURIComponent(sessionStorage.sessionValue5);
            bva.mij.nvu();
            if (d !== "(api)") {
                window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(bva.mij.hdt.toLowerCase(), bva.uug.value30 + "/" + bva.mij.hdt.toLowerCase() + "/src/" + bva.mij.hdt.toLowerCase());
            removeGame("hist_" + bva.mij.hdt.toLowerCase(), bva.uug.value30 + "/" + bva.mij.hdt.toLowerCase() + "/src/hist_" + bva.mij.hdt.toLowerCase());
            loadMenu("menu", bva.uug.value1001, "UTF-8", false)
        }
    };
    this.nvu = function() {
        if (!bva.mij.kdt && bva.uug.value83) {
            sessionStorage.clear()
        }
    };
    this.vqc = function(f) {
        var g = null;
        if (this.gqp) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.lor !== bva.pdb.sey) {
                    if (g.lor === bva.pdb.ddk || g.lor === bva.pdb.xdj) {
                        g.Title = this.language.fdb;
                        g.Text = (g.lor === bva.pdb.ddk) ? this.language.fwt : this.language.kfe;
                        g.Buttons = [{
                            Text: this.language.whk,
                            Action: "quit"
                        }]
                    } else {
                        if (g.lor === bva.pdb.mdw) {
                            g.Title = this.language.vhl;
                            g.Text = this.language.yjc + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.mee;
                                g.Buttons = [{
                                    Text: this.wyj(this.language.xfn),
                                    Action: "history"
                                }, {
                                    Text: this.language.whk,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.whk,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.lor === bva.pdb.lbh || g.lor === bva.pdb.gfv || g.lor === bva.pdb.bcj) {
                                g.Title = this.rcj;
                                if (g.lor === bva.pdb.lbh) {
                                    g.Text = this.language.xkm + " " + this.xyj + " " + this.language.kez + "\n\n" + this.language.oih
                                } else {
                                    if (g.lor === bva.pdb.gfv) {
                                        g.Text = this.language.cge + " " + (this.xyj - this.jky) + " " + this.language.hpf + "\n\n" + this.language.oih
                                    } else {
                                        if (g.lor === bva.pdb.bcj) {
                                            g.Text = this.language.pyr + ": " + this.jky + "\n" + this.language.dvj + ": " + this.tyk(this.kun)
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
                    if (g.lor === bva.pdb.oeb || g.lor === bva.pdb.ztr) {
                        g.Title = this.language.wvz;
                        g.Text = this.language.qex;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.lor === bva.pdb.bab) {
                            g.Title = this.language.fvi;
                            g.Text = this.language.nxg;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.lor === bva.pdb.roulette.ocv || g.lor === bva.pdb.roulette.mlo) {
                                g.Title = this.language.fdb;
                                g.Text = (g.lor === bva.pdb.roulette.ocv) ? this.language.ylz : this.language.icp;
                                g.Buttons = [{
                                    Text: this.language.whk,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.gqp.gjt(f)
        }
    };
    this.stop = function() {
        this.ool();
        this.rhj();
        this.tti();
        clearTimeout(this.qva);
        if (!this.kdt) {
            clearInterval(this.tgq)
        }
        this.xqp.mom("autop", "#stop");
        this.xqp.mom("settings", "#stop");
        this.xqp.mom("topb", "#stop")
    };
    this.sgm = function() {
        var d = false;
        if (this.ipe.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.hct == "freeplay" && this.pcz == "freeplay") {
                d = true
            } else {
                if (this.ucg && (this.ucg == "b71d982ffcbe56eb8cd11fa05963bbee" || this.ucg.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (bva.uug.value68 != null && this.rhm.toLowerCase() === bva.uug.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            bva.uug.value21.e = false;
            if (bva.uug.value76) {
                bva.uug.value76.f = false
            }
        }
        return d
    };
    this.pvv = function() {
        return (bva.uug.value65 > 0)
    };
    this.vgl = function() {
        return (this.kdt === false)
    };
    this.gax = function() {
        return false
    };
    this.som = function() {
        if (bva.mij.pvv() && bva.mij.gax()) {
            clearTimeout(bva.mij.myi);
            bva.mij.myi = setTimeout(bva.mij.owo, bva.uug.value65)
        }
    };
    this.uzz = function() {
        if (bva.mij.pvv() && bva.mij.myi >= 0) {
            if (bva.mij.gax()) {
                clearTimeout(bva.mij.myi);
                bva.mij.myi = setTimeout(bva.mij.owo, bva.uug.value65)
            } else {
                clearTimeout(bva.mij.myi);
                bva.mij.myi = -1
            }
        }
    };
    this.rhj = function() {
        if (bva.mij.pvv()) {
            clearTimeout(bva.mij.myi);
            bva.mij.myi = -1
        }
    };
    this.xbu = function() {
        return false
    };
    this.naf = function() {
        return false
    };
    this.bks = function() {
        if (bva.mij.xbu() && bva.mij.naf() && bva.mij.pds < 0) {
            clearTimeout(bva.mij.pds);
            bva.mij.pds = setTimeout(bva.mij.mxq, bva.mij.tcd)
        }
    };
    this.nne = function() {
        if (bva.mij.xbu() && bva.mij.pds >= 0) {
            if (bva.mij.naf()) {
                clearTimeout(bva.mij.pds);
                bva.mij.pds = setTimeout(bva.mij.mxq, bva.mij.tcd)
            } else {
                clearTimeout(bva.mij.pds);
                bva.mij.pds = -1
            }
        }
    };
    this.tti = function() {
        if (bva.mij.xbu()) {
            clearTimeout(bva.mij.pds);
            bva.mij.pds = -1
        }
    };
    this.mxq = function() {};
    this.pve = function() {};
    this.dmg = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.hpk.replace(/_*/g, ""));
        if (e > d) {
            this.hpk = f
        }
    };
    this.mnd = function(g) {
        var e = (g && !this.zhn),
            f = this.xqp.whx("topb"),
            d = this.xqp.whx("topi");
        if (d) {
            d.zjd(e)
        }
        if (f) {
            f.zjd(e);
            f.erc(e)
        }
    };
    this.vpr = function(g) {
        var e = (g && !this.zhn),
            f = this.xqp.whx("topb"),
            d = this.xqp.whx("topi");
        if (d) {
            d.zjd(e)
        }
        if (f) {
            f.zjd(e);
            f.unj(e)
        }
    };
    this.ylb = function(g) {
        var e = (g && !this.zhn),
            f = this.xqp.whx("topb"),
            d = this.xqp.whx("topi");
        if (d) {
            d.zjd(e)
        }
        if (f) {
            f.zjd(e);
            f.hok(e)
        }
    };
    this.owy = function() {
        var d = this.xqp.whx("topb");
        if (d && !d.kvp()) {
            this.eyo.zqb("panel_in");
            this.eyo.urt("panel_in");
            d.gjt()
        }
    };
    this.tnb = function(d) {
        var e = this.xqp.whx("topb");
        if (e && e.kvp()) {
            this.eyo.zqb("panel_out");
            this.eyo.urt("panel_out");
            if (d) {
                e.ids = d
            }
            e.xwd()
        }
    };
    this.tyk = function(f) {
        if (this.ewm > 0) {
            return (f * this.ewm).toFixed(0).toString()
        } else {
            if (bva.uug.value21.e == false || this.xmr == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bva.uug.value21.m != 1) {
                    e = f * bva.uug.value21.m;
                    var g = bva.uug.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bva.uug.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.yxl(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.wwe = function(f) {
        if (this.ewm > 0) {
            var e = (f * this.ewm).toFixed(0).toString();
            if (bva.uug.value21.e == true && bva.uug.value21.m == 1 && bva.uug.value21.s && this.xmr == false) {
                e = bva.uug.value21.s + " " + e
            }
            return e
        } else {
            if (bva.uug.value21.e == false || this.xmr == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bva.uug.value21.m != 1) {
                    e = f * bva.uug.value21.m;
                    var g = bva.uug.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bva.uug.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.yxl(e, (d == 0) ? 0 : d + 1);
                if (bva.uug.value21.s) {
                    e = bva.uug.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.yxl = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (bva.uug.value21.cs != null) {
                l = l.replace(/\./, bva.uug.value21.cs)
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
                    if (bva.uug.value21.ts != null) {
                        e += bva.uug.value21.ts
                    }
                }
            }
            if (bva.uug.value21.cs != null) {
                f = f.replace(/\./, bva.uug.value21.cs)
            }
            return e + f
        }
    };
    this.ioj = function(f) {
        if (this.ewm > 0) {
            return (f * this.ewm).toFixed(0).toString()
        } else {
            if (bva.uug.value76.f == false || this.xmr == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bva.uug.value76.m != 1) {
                    e = f * bva.uug.value76.m;
                    var g = bva.uug.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bva.uug.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.kll(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.ycq = function(f) {
        if (this.ewm > 0) {
            var e = (f * this.ewm).toFixed(0).toString();
            if (bva.uug.value76.f == true && bva.uug.value76.m == 1 && bva.uug.value76.s && this.xmr == false) {
                e = bva.uug.value76.s + " " + e
            }
            return e
        } else {
            if (bva.uug.value76.f == false || this.xmr == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bva.uug.value76.m != 1) {
                    e = f * bva.uug.value76.m;
                    var g = bva.uug.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bva.uug.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.kll(e, (d == 0) ? 0 : d + 1);
                if (bva.uug.value76.s) {
                    e = bva.uug.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.kll = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (bva.uug.value76.cs != null) {
                l = l.replace(/\./, bva.uug.value76.cs)
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
                    if (bva.uug.value76.ts != null) {
                        e += bva.uug.value76.ts
                    }
                }
            }
            if (bva.uug.value76.cs != null) {
                f = f.replace(/\./, bva.uug.value76.cs)
            }
            return e + f
        }
    };
    this.wyj = function(d) {
        if (d && sessionStorage.sessionValue1 !== bva.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.rah = function() {
        for (var f = 0, d = this.lri.wvv.bas.length, e = null, g = 0; f < d; f++) {
            e = this.lri.wvv.bas[f];
            g = e.ywa.substring(e.ywa.length - 1);
            this.xqp.mzx(e.ywa, this.hij(this.uhn.tyt.oue[d - 1][e.oue], (d > 2) ? this.uhn.tyt.tot : this.uhn.tyt.display, this.style.tyt.sgd[e.oue], e.pes, e.value, this.eyo.jgz((d > 2) ? e.ywa + "_smalldsp" : e.ywa + "_dsp"), (d <= 2) ? [this.eyo.jgz("jackpot_frame")] : (Number(g) <= 2) ? [this.eyo.jgz("jackpot_topframe")] : [this.eyo.jgz("jackpot_bottomframe")], (d > 2) ? this.eyo.jgz(e.ywa + "_sym") : null), ["jackpots"])
        }
        this.xqp.mzx("jwp", this.hij(this.uhn.tyt.udh.oue, this.uhn.tyt.udh, this.style.tyt.udh, null, null, null, [this.eyo.jgz("jackpot_win_0"), this.eyo.jgz("jackpot_win_1"), this.eyo.jgz("jackpot_win_2")], null));
        this.xqp.mom("jwp", "#esj", [false]);
        if (this.tqs()) {
            this.xqp.mzx("mjwp", this.tyg(this.uhn.tyt.koo.oue, this.uhn.tyt.koo, this.style.tyt.koo, this.eyo.jgz("mj_bg"), this.eyo.jgz("mj_font"), this.eyo.jgz("mj_label"), [this.eyo.jgz("mj_0"), this.eyo.jgz("mj_1"), this.eyo.jgz("mj_2"), this.eyo.jgz("mj_3"), this.eyo.jgz("mj_4"), this.eyo.jgz("mj_5")]));
            this.xqp.mom("mjwp", "#esj", [false])
        }
    };
    this.oqx = function() {
        var e = this.xqp.jkd("jackpots"),
            f = this.xqp.whx("jwp"),
            k = this.xqp.whx("mjwp");
        for (var j = 0, d = this.lri.wvv.bas.length, g = null; j < d; j++) {
            g = this.lri.wvv.bas[j];
            e[j].qjx(this.uhn.tyt.oue[d - 1][g.oue]);
            e[j].cep((d > 2) ? this.uhn.tyt.tot : this.uhn.tyt.display)
        }
        if (f) {
            f.qjx(this.uhn.tyt.udh.oue);
            f.cep(this.uhn.tyt.udh)
        }
        if (k) {
            k.qjx(this.uhn.tyt.koo.oue);
            k.cep(this.uhn.tyt.koo)
        }
    };
    this.hij = function(l, j, e, m, n, f, d, g) {
        var k = new wyg();
        k.uwa(l, null, this.context2D);
        k.parent = this;
        k.luk = f;
        k.mjf = d;
        k.tjt = g;
        k.afk(m);
        k.dca(n);
        k.raa(e);
        k.cep(j);
        return k
    };
    this.tyg = function(k, j, g, l, m, f, e) {
        var d = new cla();
        d.uwa(k, null, this.context2D);
        d.parent = this;
        d.wvu = l;
        d.fkp = m;
        d.uii = f;
        d.bxn = e;
        d.raa(g);
        d.cep(j);
        return d
    };
    this.jlj = function(f) {
        if (this.znt() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.xqp.mom(f[e].ywa, "#dca", [f[e].value])
            }
            this.egc()
        }
    };
    this.qru = function(d) {
        if (this.znt() === true) {
            this.tyt = {
                ywa: d.ywa,
                value: d.value,
                pwr: d.pwr
            }
        }
    };
    this.qsq = function() {
        this.tyt = null
    };
    this.tfg = function() {
        return false
    };
    this.tqs = function() {
        return false
    };
    this.znt = function() {
        return (!this.kdt && this.lri.wvv.bas.length > 0 && this.tfg())
    };
    this.rlr = function() {
        return (this.tyt != null)
    };
    this.wle = function() {
        return (bva.uug.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.wud = function() {
        if (this.lnl() && this.zlv()) {
            this.iry()
        }
    };
    this.zlv = function() {
        return false
    };
    this.lnl = function() {
        if (this.kdt) {
            return false
        }
        return (this.lri.wvv.szl.length + this.lri.wvv.sxf.length > 0)
    };
    this.iry = function() {
        var g = null,
            e = this.lri.wvv.szl.length,
            d = this.lri.wvv.sxf.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.lri.wvv.szl.splice(f, 1)[0];
                g.lor = bva.pdb.sey;
                this.njn.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.lri.wvv.sxf.splice(f, 1)[0];
                g.lor = bva.pdb.sey;
                this.njn.push(g)
            }
            if (this.gqp && !this.gqp.kvp()) {
                this.chr()
            }
        }
    };
    this.chr = function() {
        var d = null;
        if (this.njn.length > 0) {
            d = this.njn.shift();
            this.vqc([d])
        }
    };
    this.prl = function() {
        if (bva.mij.sxc.length > 0) {
            bva.mij.vqc(bva.mij.sxc)
        }
    };
    this.ior = function() {
        this.njn.length = 0
    };
    this.twe = function() {
        this.sxc.length = 0;
        if (this.wmv) {
            this.wmv.xwd()
        }
    };
    this.oge = function() {
        var f = null,
            d = this.lri.wvv.sxc.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.lri.wvv.sxc.splice(e, 1)[0];
                f.lor = bva.pdb.sey;
                this.sxc.push(f)
            }
            if (this.wmv) {
                this.wmv.gjt(this.sxc[0].Title, this.sxc[0].Text, this.sxc.length)
            }
        }
    };
    this.bpu = function() {
        var d = false;
        if (this.gqp && this.gqp.kvp()) {
            d = true
        }
        if (this.wmv && this.wmv.kvp()) {
            d = true
        }
        if (this.wle()) {
            d = true
        }
        if (this.kxy) {
            this.kxy.style.display = (d) ? "block" : "none"
        }
    };
    this.kif = function() {
        this.mnd(false);
        this.qzy.erc(false);
        this.qzy.xlm.mom("info", "#vdt");
        this.vqc([{
            lor: bva.pdb.mdw
        }])
    };
    this.hxc = function() {
        bva.mij.dtz = true
    };
    this.pol = function() {
        this.ilt = new znz().uwa(this, bva.uug.value6)
    };
    this.esx = function() {
        if (this.ilt) {
            this.ilt.connect(this.hdt, this.hct, this.pcz, this.ucg, this.hpk, true)
        }
    };
    this.neu = function() {
        if (bva.mij.ilt) {
            bva.mij.ilt.connect(bva.mij.hdt, bva.mij.hct, bva.mij.pcz, bva.mij.ucg, bva.mij.hpk, false)
        }
    };
    this.zta = function() {};
    this.trn = function() {};
    this.xwy = function(d) {
        if (!this.sgm() && !this.kdt) {
            clearTimeout(this.qva);
            if (this.dqq()) {
                this.qva = setTimeout(this.jpa, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.qva = setTimeout(this.hxc, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.jpa = function() {
        bva.mij.khk = true
    };
    this.dqq = function() {
        return bva.uug.value36 || bva.uug.value37
    }
}

function kck() {
    this.uwa = function() {
        this.erk("btn", this.jyx);
        this.erk("gamble_on", this.jyx);
        this.erk("gamble_off", this.jyx);
        this.erk("panel_in", this.jyx);
        this.erk("panel_out", this.jyx);
        this.erk("audioon", this.jyx);
        for (var a = 0; a < 12; a++) {
            this.erk("step" + a, this.jyx)
        }
        this.erk("maxstep", this.jyx);
        this.erk("start", 0.2);
        this.erk("gambleprop", this.gvx);
        this.erk("freespinstart", 0.5)
    }
}
kck.prototype = new hta;

function vbi() {
    this.qpy = {
        vmm: 84,
        cyz: -1,
        value: "T",
        ikg: null
    };
    this.mgf = {
        vmm: 82,
        cyz: -1,
        value: "R",
        ikg: null
    };
    this.iog = {
        vmm: 80,
        cyz: -1,
        value: "P",
        ikg: null
    };
    this.kka = {
        vmm: 77,
        cyz: -1,
        value: "M",
        ikg: null
    };
    this.start = {
        vmm: 32,
        cyz: -1,
        value: "SPACE",
        ikg: null
    };
    this.zhn = {
        vmm: 16,
        cyz: -1,
        value: "SHIFT",
        ikg: null
    };
    this.wfd = {
        vmm: 38,
        cyz: -1,
        value: "\u25B2",
        ikg: null
    };
    this.kli = {
        vmm: 40,
        cyz: -1,
        value: "\u25BC",
        ikg: null
    };
    this.jeg = {
        vmm: 39,
        cyz: -1,
        value: "\u25B6",
        ikg: null
    };
    this.hvb = {
        vmm: 37,
        cyz: -1,
        value: "\u25C0",
        ikg: null
    };
    this.fgi = {
        vmm: 71,
        cyz: -1,
        value: "G",
        ikg: null
    };
    this.hxh = {
        vmm: 27,
        cyz: -1,
        value: "ESC",
        ikg: null
    };
    this.language = {
        vmm: 76,
        cyz: -1,
        value: "L",
        ikg: null
    };
    this.daq = {
        vmm: 13,
        cyz: -1,
        value: "ENTER",
        ikg: null
    };
    this.jsk = {
        vmm: 27,
        cyz: -1,
        value: "ESC",
        ikg: null
    };
    this.ite = {
        vmm: 39,
        cyz: -1,
        value: "\u25B6",
        ikg: null
    };
    this.mua = {
        vmm: 37,
        cyz: -1,
        value: "\u25C0",
        ikg: null
    };
    this.spq = {
        vmm: 27,
        cyz: -1,
        value: "ESC",
        ikg: null
    };
    this.gpg = {
        vmm: 32,
        cyz: -1,
        value: "SPACE",
        ikg: null
    };
    this.jnt = {
        vmm: 8,
        cyz: -1,
        value: "BACKSPACE",
        ikg: null
    };
    this.ozp = {
        vmm: 82,
        cyz: -1,
        value: "R",
        ikg: null
    };
    this.pzd = {
        vmm: 66,
        cyz: -1,
        value: "B",
        ikg: null
    };
    this.lzn = {
        vmm: 72,
        cyz: -1,
        value: "H",
        ikg: null
    };
    this.sdb = {
        vmm: 68,
        cyz: -1,
        value: "D",
        ikg: null
    };
    this.qrf = {
        vmm: 83,
        cyz: -1,
        value: "S",
        ikg: null
    };
    this.wgc = {
        vmm: 67,
        cyz: -1,
        value: "C",
        ikg: null
    };
    this.bfz.push(this.qpy);
    this.bfz.push(this.iog);
    this.bfz.push(this.start);
    this.bfz.push(this.zhn);
    this.bfz.push(this.wfd);
    this.bfz.push(this.kli);
    this.bfz.push(this.jeg);
    this.bfz.push(this.hvb);
    this.bfz.push(this.fgi);
    this.bfz.push(this.hxh);
    this.bfz.push(this.language)
}
vbi.prototype = new xho;

function uqf() {
    this.lzh = new Image();
    this.gkf = 0;
    this.yyn = 0;
    this.wrz = 0;
    this.uwa = function(c, a, b, d) {
        this.lzh = c;
        this.yyn = b;
        this.gkf = a;
        this.wrz = d;
        return this
    }
}

function gvo() {
    this.apv = 0;
    this.svr = 0;
    this.win = 0;
    this.aht = "sans-serif";
    this.rwz = "bold";
    this.tnw = null;
    this.gjq = null;
    this.oho = null;
    this.skn = null;
    this.pbt = 16;
    this.ihs = 0;
    this.jvy = 0;
    this.kvw = 2;
    this.bzf = 3;
    this.zmr = 3;
    this.zqh = 3;
    this.xqy = 3;
    this.cep = function(a) {
        try {
            this.pbt = a.fontSize;
            this.ihs = a.eub;
            this.jvy = a.fvn;
            this.kvw = a.stc;
            this.bzf = a.ylm;
            this.zmr = a.rzf;
            this.zqh = a.hlr;
            this.xqy = a.qll
        } catch (b) {
            console.error(b)
        }
    };
    this.raa = function(a) {
        try {
            this.aht = a.font;
            this.rwz = a.pev;
            this.tnw = a.ydb;
            this.gjq = a.borderColor;
            this.oho = a.ldt;
            this.skn = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.hzp = function(a, c, b, d) {
        this.apv = a;
        this.svr = c;
        this.win = b;
        if (d && d === true && this.context2D != null && this.kvp() === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.ewz = function(a, b) {
        this.win = a;
        if (b && b === true && this.context2D != null && this.kvp() === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.oho) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.gjq);
            b.addColorStop(1, this.oho);
            bva.kgg.yzo(a, this.x, this.y, this.width, this.height, this.bzf, this.zmr, this.zqh, this.xqy, this.skn, 1, b, this.kvw, 1)
        } else {
            bva.kgg.yzo(a, this.x, this.y, this.width, this.height, this.bzf, this.zmr, this.zqh, this.xqy, this.skn, 1, this.gjq, this.kvw, 1)
        }
        bva.kgg.ytt(a, bva.mij.language.pyr + ":", this.tnw, this.x + this.kvw + this.ihs, this.y + this.jvy, 2 * this.width / 3 - this.kvw, this.height / 2, this.aht, this.pbt, this.rwz, 0);
        bva.kgg.ytt(a, bva.mij.language.dvj + ":", this.tnw, this.x + this.kvw + this.ihs, this.y + this.height / 2 + this.jvy, 2 * this.width / 3 - this.kvw, this.height / 2, this.aht, this.pbt, this.rwz, 0);
        bva.kgg.osm(a, this.svr + "/" + this.apv, this.tnw, this.x + this.kvw + 2 * this.width / 3, this.y + this.jvy, this.width / 3 - this.kvw - this.ihs, this.height / 2, this.aht, this.pbt, this.rwz, 0);
        bva.kgg.osm(a, this.win, this.tnw, this.x + this.kvw + 2 * this.width / 3, this.y + this.height / 2 + this.jvy, this.width / 3 - this.kvw - this.ihs, this.height / 2, this.aht, this.pbt, this.rwz, 0);
        a.restore();
        if (this.wxt && this.ygh) {
            this.wxt.drawImage(this.ygh, this.x, this.y)
        }
    }
}
gvo.prototype = new tgm;

function kcl() {
    var a = this;
    this.xue = false;
    this.xlm = null;
    this.esd = false;
    this.aei = -1;
    this.zuf = 0;
    this.unc = null;
    this.exb = 800;
    this.aah = 0;
    this.skn = null;
    this.ylq = null;
    this.oek = null;
    this.dps = 0;
    this.jgf = null;
    this.bxs = null;
    this.dvu = null;
    this.kiy = null;
    this.ayt = 0;
    this.ofn = 0;
    this.udu = new gup();
    this.emb = new gup();
    this.zdy = 30;
    this.uwa = function(b, d, c) {
        kcl.prototype.uwa.call(this, b, d, c);
        this.ack()
    };
    this.hin = function(c, b) {
        try {
            this.zdy = c.hkh;
            this.udu = c.xrt;
            this.emb = c.mhv;
            this.wkq(c);
            this.wbw(c);
            this.rnw(c);
            this.yrl(c);
            this.vcv(c);
            this.raa(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.cep = function(g, r) {
        try {
            var d = {},
                c = this.xlm.whx("info"),
                k = this.xlm.whx("win"),
                s = this.xlm.whx("creditd"),
                o = this.xlm.whx("betd"),
                p = this.xlm.whx("betpopup"),
                n = this.xlm.whx("idd"),
                q = this.xlm.whx("timed"),
                b = this.xlm.whx("freeround"),
                m = this.xlm.jkd("buttons");
            if (this.parent.taj() || (this.parent.kdt && this.parent.wwt)) {
                if ((this.parent.ruj() == null || this.parent.ruj().o == false) && this.parent.style.mij.xhk == true) {
                    d = g.ufh
                } else {
                    d = g.krk
                }
            } else {
                if (r) {
                    if (this.parent.ruj() != null) {
                        d = g.wrx
                    } else {
                        d = g.xjp
                    }
                } else {
                    if (this.parent.ruj() != null) {
                        if (!this.parent.cli()) {
                            d = g.opr
                        } else {
                            d = g.opt
                        }
                    } else {
                        if (bva.uug.value57 === bva.ui.wkn || this.nnr()) {
                            if (!this.parent.cli()) {
                                d = g.rpx
                            } else {
                                d = g.ihm
                            }
                        } else {
                            if (bva.uug.value57 === bva.ui.mkq) {
                                if (!this.parent.cli()) {
                                    d = g.pcc
                                } else {
                                    d = g.qeu
                                }
                            } else {
                                if (bva.uug.value57 === bva.ui.ojj) {
                                    if (!this.parent.cli()) {
                                        d = g.azb
                                    } else {
                                        d = g.apf
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.zdy = g.hkh;
            this.udu = g.xrt;
            this.emb = g.mhv;
            if (s) {
                s.cep(g.display);
                s.qjx(g.gpt)
            }
            if (o) {
                o.cep(g.display);
                o.qjx(g.poy)
            }
            if (p) {
                p.cep(g.ggk);
                p.qjx(g.dzd)
            }
            if (n) {
                n.cep(g.zvm);
                n.qjx(g.ebq)
            }
            if (q) {
                q.cep(g.zvm);
                q.qjx(g.bni)
            }
            if (c) {
                c.cep(g.fvi);
                c.qjx(g.fvi.oue)
            }
            if (k) {
                k.cep(g.win);
                k.qjx(g.win.oue)
            }
            if (b) {
                b.cep(g.bar);
                b.qjx(g.bar.oue)
            }
            for (var f = 0, j = m.length; f < j; f++) {
                if (m[f] instanceof iyh) {
                    m[f].cep(g.rsf)
                }
            }
            if (this.parent.ruj() != null) {
                if (this.parent.taj() === true) {
                    if (this.parent.ruj().o === true || this.parent.style.mij.xhk == false) {
                        this.xlm.mom("start", "#cep", [g.ish])
                    } else {
                        this.xlm.mom("start", "#cep", [g.dmi])
                    }
                } else {
                    this.xlm.mom("start", "#cep", [g.dmi]);
                    this.xlm.mom("astart", "#cep", [g.ish])
                }
            } else {
                this.xlm.mom("start", "#cep", [g.dmi]);
                if (this.parent.taj() === true) {} else {
                    if (bva.uug.value57 === bva.ui.wkn || this.nnr()) {
                        this.xlm.mom("astart", "#cep", [g.dmi])
                    }
                }
            }
            if (r) {
                this.xlm.mom("start", "#qjx", [d.csi]);
                this.xlm.mom("astart", "#qjx", [d.anm]);
                this.xlm.mom("setting", "#qjx", [d.qnq])
            } else {
                this.xlm.mom("start", "#qjx", [d.csi]);
                this.xlm.mom("astart", "#qjx", [d.anm]);
                this.xlm.mom("bet", "#qjx", [d.ell]);
                this.xlm.mom("gamble", "#qjx", [d.ehv]);
                this.xlm.mom("exit", "#qjx", [d.edl]);
                this.xlm.mom("help", "#qjx", [d.edl]);
                this.xlm.mom("lang", "#qjx", [d.hni]);
                this.xlm.mom("line", "#qjx", [d.bfi]);
                this.xlm.mom("setting", "#qjx", [d.qnq])
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.raa = function(b, r) {
        try {
            var d = this.xlm.whx("info"),
                l = this.xlm.whx("win"),
                p = this.xlm.whx("betpopup"),
                c = this.xlm.whx("freeround"),
                j = this.xlm.jkd("displays"),
                o = this.xlm.whx("idd"),
                q = this.xlm.whx("timed"),
                n = this.xlm.jkd("buttons"),
                g = (r === true) ? b.fzw : b.wze;
            this.skn = g.backgroundColor;
            this.ylq = g.pbq;
            this.oek = g.ksx;
            this.dps = g.lsh;
            this.bxs = g.osq;
            this.dvu = g.pvd;
            if (d) {
                d.raa(g.fvi)
            }
            if (l) {
                l.raa(g.win)
            }
            if (c) {
                c.raa(b.bar)
            }
            for (var f = 0, k = n.length; f < k; f++) {
                n[f].raa((this.parent.uhn.sbj === false) ? g.zns : (this.parent.ngk === bva.uhn.opd) ? g.iwg : g.tmo)
            }
            for (var f = 0, k = j.length; f < k; f++) {
                j[f].raa(b.display)
            }
            if (p) {
                p.raa(b.ggk)
            }
            if (o) {
                o.raa(b.zvm)
            }
            if (q) {
                q.raa(b.zvm)
            }
            if (this.parent.taj() === true) {
                this.xlm.mom("bet", "#raa", [b.qaw])
            }
        } catch (m) {
            console.error(m)
        }
    };
    this.rap = function(t, s, u) {
        var r = this.xlm.jkd("buttons"),
            g = this.xlm.whx("line"),
            k = this.xlm.whx("bet"),
            c = this.xlm.whx("start"),
            p = this.xlm.whx("betd"),
            f = this.xlm.whx("creditd"),
            b = this.parent.xqp.whx("betsel"),
            e = this.parent.xqp.whx("linesel"),
            o = t - this.x,
            m = s - this.y;
        for (var n = 0, q = r.length; n < q; n++) {
            var d = r[n];
            if (o >= d.x && o <= d.x + d.width && m >= d.y && m <= d.y + d.height && d.kvp() == true) {
                if (d.kca() && !d.buj()) {
                    if (!this.parent.taj() && (d === k || d === g)) {
                        d.erw(true, true, false);
                        for (var l = 0; l < q; l++) {
                            r[l].cou(true, false)
                        }
                        d.uva();
                        this.unc = function() {
                            if (d.uva() === true) {
                                clearInterval(a.zuf);
                                d.erw(false, true);
                                for (var v = 0; v < q; v++) {
                                    r[v].cou(false)
                                }
                            }
                        };
                        this.zuf = setInterval(this.unc, d.cfp)
                    } else {
                        if (d === c && c.uva === this.smx) {
                            d.erw(true, true, false)
                        } else {
                            d.erw(true, true)
                        }
                        d.uva();
                        for (var l = 0; l < q; l++) {
                            r[l].cou(true)
                        }
                    }
                    return true
                }
            }
        }
        if (k && k.kca() && !k.buj() && k.kvp()) {
            if (p && o >= p.x && o <= p.x + p.width && m >= p.y && m <= p.y + p.height) {
                if (!u) {
                    if ((b && b.kca()) && ((e && e.kca()) || !e)) {
                        this.parent.avb()
                    }
                    return true
                }
            } else {
                if (f && o >= f.x && o <= f.x + f.width && m >= f.y && m <= f.y + f.height) {
                    if (!u) {
                        this.parent.plx()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.fwp = function() {
        var f = this.xlm.jkd("buttons"),
            k = this.xlm.whx("bet"),
            l = this.xlm.whx("line"),
            g = this.xlm.whx("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.uyg() === true) {
                d.erw(false, true);
                if (bva.uug.value82 && d == g) {
                    for (var c = 0; c < b; c++) {
                        f[c].cou(false)
                    }
                }
                if (d === k || d === l) {
                    clearInterval(this.zuf);
                    for (var c = 0; c < b; c++) {
                        f[c].cou(false)
                    }
                } else {
                    if (d === g && g.uva === this.smx) {
                        clearTimeout(this.aah);
                        if (this.parent.zhn === false) {
                            this.xlm.mom("start", "#vsw")
                        }
                    }
                }
                return true
            }
        }
        return false
    };
    this.hld = function(c) {
        var m = this.xlm.jkd("buttons"),
            f = this.xlm.whx("bet"),
            e = this.xlm.whx("line"),
            b = this.xlm.whx("start");
        for (var k = 0, l = m.length; k < l; k++) {
            var d = m[k];
            if (c == d.uut) {
                if (d.kca() && !d.buj() && d.kvp()) {
                    if (bva.uug.value82 && d == b) {
                        d.erw(true, true, false);
                        for (var g = 0; g < l; g++) {
                            m[g].cou(true, false)
                        }
                    } else {
                        d.erw(true, true);
                        d.uva();
                        for (var g = 0; g < l; g++) {
                            m[g].cou(true)
                        }
                    }
                }
                return true
            }
        }
        if (c == this.parent.pvb.kli.vmm) {
            if (f && f.kca() && !f.buj() && f.kvp()) {
                this.parent.psu();
                for (var g = 0, l = m.length; g < l; g++) {
                    m[g].cou(true)
                }
            }
            return true
        } else {
            if (c == this.parent.pvb.hvb.vmm) {
                if (e && e.kca() && !e.buj() && e.kvp()) {
                    this.parent.oaj();
                    for (var g = 0, l = m.length; g < l; g++) {
                        m[g].cou(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.smf = function(g) {
        var f = this.xlm.jkd("buttons"),
            k = this.xlm.whx("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.uyg() == true && g == d.uut) {
                if (bva.uug.value82 && d == k) {
                    d.uva();
                    for (var c = 0; c < b; c++) {
                        f[c].cou(false)
                    }
                }
                d.erw(false, true);
                return true
            }
        }
        return false
    };
    this.zcw = function(n, m, o) {
        var l = this.xlm.jkd("buttons"),
            e = this.xlm.whx("bet"),
            d = this.xlm.whx("line"),
            b = this.xlm.whx("start"),
            p = this.xlm.whx("astart");
        if (n != null && m != null) {
            var j = n - this.x;
            var f = m - this.y;
            for (var g = 0, k = l.length; g < k; g++) {
                var c = l[g];
                if (j >= c.x && j <= c.x + c.width && f >= c.y && f <= c.y + c.height && c.kvp() && c.kca() && !c.buj()) {
                    return c.uva
                }
            }
        } else {
            if (o != null) {
                for (var g = 0, k = l.length; g < k; g++) {
                    var c = l[g];
                    if (o == c.uut && c.kvp() && c.kca() && !c.buj()) {
                        if (c == b || c == p) {
                            return null
                        }
                        return c.uva
                    }
                }
                if (o == this.parent.pvb.kli.vmm && e && e.kvp() && e.kca() && !e.buj()) {
                    return this.parent.psu
                } else {
                    if (o == this.parent.pvb.hvb.vmm && d && d.kvp() && d.kca() && !d.buj()) {
                        return this.parent.oaj
                    }
                }
            }
        }
        return null
    };
    this.ack = function() {
        this.xlm = new rch();
        this.xlm.uwa();
        this.xlm.knm("displays");
        this.xlm.knm("buttons");
        this.xlm.knm("allbuttons");
        this.xlm.knm("infos");
        this.xlm.knm("start");
        this.xlm.knm("auto");
        this.xlm.knm("collect");
        this.xlm.knm("freespin");
        this.xlm.knm("game");
        this.xlm.knm("settings")
    };
    this.vcv = function(b) {
        var c = this.fau(b.fvi.oue);
        c.cep(b.fvi);
        this.xlm.mzx("info", c, ["infos"])
    };
    this.yrl = function(b) {
        var c = this.fau(b.win.oue);
        c.font = this.parent.tsw;
        c.qza = this.parent.eyo.jgz("s_symb");
        c.nhw = this.parent.eyo.jgz("s_symb").height / this.parent.fyd.length;
        c.cep(b.win);
        this.xlm.mzx("win", c, ["infos"])
    };
    this.rnw = function(b) {
        var c = new gvo();
        c.uwa(b.bar.oue, this.context2D, null);
        c.parent = this;
        c.cep(b.bar);
        c.esj(false);
        this.xlm.mzx("freeround", c)
    };
    this.wbw = function(c) {
        var b = {};
        if (this.parent.taj() || (this.parent.kdt && this.parent.wwt)) {
            if ((this.parent.ruj() == null || this.parent.ruj().o == false) && this.parent.style.mij.xhk == true) {
                b = c.ufh
            } else {
                b = c.krk
            }
        } else {
            if (this.parent.ruj() != null) {
                if (!this.parent.cli()) {
                    b = c.opr
                } else {
                    b = c.opt
                }
            } else {
                if (bva.uug.value57 === bva.ui.wkn || this.nnr()) {
                    if (!this.parent.cli()) {
                        b = c.rpx
                    } else {
                        b = c.ihm
                    }
                } else {
                    if (bva.uug.value57 === bva.ui.mkq) {
                        if (!this.parent.cli()) {
                            b = c.pcc
                        } else {
                            b = c.qeu
                        }
                    } else {
                        if (bva.uug.value57 === bva.ui.ojj) {
                            if (!this.parent.cli()) {
                                b = c.azb
                            } else {
                                b = c.apf
                            }
                        }
                    }
                }
            }
        }
        if (this.parent.ruj() != null) {
            if (this.parent.taj() === true) {
                if (this.parent.ruj().o == true || this.parent.style.mij.xhk == false) {
                    this.xlm.mzx("start", this.zkv(b.csi, (this.parent.uhn.rqi === false) ? this.parent.language.start : null, (this.parent.uhn.rqi === false) ? "---" : "A", (this.parent.uhn.rqi === false) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_sp"), null, this.smx, (!this.parent.kdt) ? this.parent.pvb.start : null, c.ish), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                } else {
                    this.xlm.mzx("start", this.hsf(b.csi, (this.parent.uhn.rqi === false) ? this.parent.language.start : null, (this.parent.uhn.rqi === false) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_sp"), (this.parent.uhn.rqi === false) ? null : this.parent.eyo.jgz("btn_sph"), this.parent.wmt, null, c.dmi), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.xlm.mzx("astart", this.zkv(b.anm, null, (this.parent.uhn.rqi === false) ? "---" : "A", this.parent.eyo.jgz("btn_astl"), null, this.parent.tmy, null, c.rsf), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                }
            } else {
                this.xlm.mzx("start", this.hsf(b.csi, (this.parent.uhn.rqi === false) ? this.parent.language.start : null, (this.parent.uhn.rqi === false) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_sp"), null, this.parent.wmt, (!this.parent.kdt) ? this.parent.pvb.start : null, c.dmi), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.xlm.mzx("astart", this.zkv(b.anm, this.parent.language.bqj, (this.parent.uhn.rqi === false) ? "---" : "A", this.parent.eyo.jgz("btn"), null, this.parent.tmy, (!this.parent.kdt) ? this.parent.pvb.zhn : null, c.ish), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        } else {
            if (this.parent.taj() === true) {
                if (this.parent.style.mij.xhk) {
                    this.xlm.mzx("start", this.hsf(b.csi, (this.parent.uhn.rqi === false) ? this.parent.language.start : null, (this.parent.uhn.rqi === false) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_sp"), (this.parent.uhn.rqi === false) ? null : this.parent.eyo.jgz("btn_sph"), this.parent.wmt, null, c.dmi), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.xlm.mzx("astart", this.hsf(b.anm, null, this.parent.eyo.jgz("btn_ast"), null, this.parent.tmy, null, c.rsf), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                } else {
                    this.xlm.mzx("start", this.hsf(b.csi, (this.parent.uhn.rqi === false) ? this.parent.language.start : null, (this.parent.uhn.rqi === false) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_asp"), (this.parent.uhn.rqi === false) ? null : this.parent.eyo.jgz("btn_asph"), this.smx, null, c.dmi), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                }
            } else {
                this.xlm.mzx("start", this.hsf(b.csi, (this.parent.uhn.rqi === false) ? this.parent.language.start : null, (this.parent.uhn.rqi === false) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_asp"), (this.parent.uhn.rqi === false) ? null : this.parent.eyo.jgz("btn_asph"), this.parent.wmt, (!this.parent.kdt) ? this.parent.pvb.start : null, c.dmi), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.xlm.mzx("astart", this.hsf(b.anm, this.parent.language.zhn, (bva.uug.value57 === bva.ui.wkn || this.nnr()) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_s"), null, this.parent.tmy, (!this.parent.kdt) ? this.parent.pvb.zhn : null, c.rsf), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        }
        if (this.parent.taj() === true) {
            this.xlm.mzx("bet", this.pft(b.ell, "+", null, this.parent.giy, (!this.parent.kdt) ? this.parent.pvb.wfd : null, c.ird), ["buttons", "allbuttons"])
        } else {
            this.xlm.mzx("bet", this.hsf(b.ell, this.parent.language.wmw, this.parent.eyo.jgz("btn_s"), null, this.parent.giy, (!this.parent.kdt) ? this.parent.pvb.wfd : null, c.rsf), ["buttons", "allbuttons"])
        }
        this.xlm.whx("bet").cfp = 300;
        this.xlm.mzx("gamble", this.hsf(b.ehv, this.parent.language.fgi, this.parent.eyo.jgz("btn_s"), null, this.parent.kuk, (!this.parent.kdt) ? this.parent.pvb.fgi : null, c.rsf), ["buttons", "allbuttons", "game", "auto", "collect"]);
        if (this.parent.ruj() != null) {
            if (sessionStorage.sessionValue5 != null) {
                this.xlm.mzx("exit", this.hsf(b.edl, (this.parent.uhn.rqi === true) ? null : (bva.uug.value50.g === true) ? this.parent.language.whk : this.parent.language.twv, (this.parent.uhn.rqi === false) ? this.parent.eyo.jgz("btn_s") : this.parent.eyo.jgz("btn_e"), null, this.parent.owo, (!this.parent.kdt) ? this.parent.pvb.hxh : null, c.rsf), ["buttons", "allbuttons", "collect"])
            } else {
                if (this.parent.taj() === false) {
                    this.xlm.mzx("help", this.hsf(b.edl, (this.parent.uhn.rqi === true) ? null : this.parent.language.oxo, this.parent.eyo.jgz("btn_s"), null, this.parent.xnz, (!this.parent.kdt) ? this.parent.pvb.iog : null, c.rsf), ["buttons", "allbuttons"])
                }
            }
        } else {
            if (bva.uug.value57 !== bva.ui.ojj) {
                if (sessionStorage.sessionValue5 != null) {
                    this.xlm.mzx("exit", this.hsf(b.edl, (this.parent.uhn.rqi === true) ? null : (bva.uug.value50.g === true) ? this.parent.language.whk : this.parent.language.twv, (this.parent.uhn.rqi === false) ? this.parent.eyo.jgz("btn_s") : this.parent.eyo.jgz("btn_e"), null, this.parent.owo, (!this.parent.kdt) ? this.parent.pvb.hxh : null, c.rsf), ["buttons", "allbuttons", "collect"])
                } else {
                    if (this.parent.taj() === false) {
                        this.xlm.mzx("help", this.hsf(b.edl, (this.parent.uhn.rqi === true) ? null : this.parent.language.oxo, this.parent.eyo.jgz("btn_s"), null, this.parent.xnz, (!this.parent.kdt) ? this.parent.pvb.iog : null, c.rsf), ["buttons", "allbuttons"])
                    }
                }
            }
            if (bva.uug.value57 !== bva.ui.wkn && !this.nnr() && this.parent.ruj() == null) {
                this.xlm.mzx("lang", this.kbv(b.hni, this.parent.jxa(sessionStorage.sessionValue1), this.parent.zwb, (!this.parent.kdt) ? this.parent.pvb.language : null), ["buttons", "allbuttons"])
            }
        }
        if (this.parent.cli()) {
            this.xlm.mzx("line", this.hsf(b.bfi, this.parent.language.yzu, this.parent.eyo.jgz("btn_s"), null, this.parent.ild, (!this.parent.kdt) ? this.parent.pvb.jeg : null, c.rsf), ["buttons", "allbuttons"]);
            this.xlm.whx("line").cfp = 300
        }
        this.xlm.mzx("setting", this.hsf(b.qnq, null, this.parent.eyo.jgz("btn_m"), null, this.parent.unu, null, c.rsf), ["buttons", "settings"])
    };
    this.wkq = function(c) {
        var b = null;
        if (!(this.parent.kdt && this.parent.wwt) && this.parent.style.mij.rya === false) {
            b = this.parent.eyo.jgz("display_effect")
        }
        if (this.parent.taj() === true) {
            this.xlm.mzx("betpopup", this.jvs(c.dzd, "", "", null, c.ggk), ["displays"]);
            this.xlm.mom("betpopup", "#esj", [false])
        }
        this.xlm.mzx("creditd", this.jvs(c.gpt, (this.parent.sgm()) ? this.parent.language.egt : this.parent.language.pwr, this.parent.wwe(this.parent.pwr), b, c.display), ["displays"]);
        this.xlm.mzx("betd", this.jvs(c.poy, this.parent.language.wmw, this.parent.wwe(this.parent.totalBet), b, c.display), ["displays"]);
        this.xlm.mzx("idd", this.jvs(c.ebq, null, (this.parent.sgm() === true) ? this.parent.language.egt : "" + ((this.parent.tnc > 0) ? this.parent.tnc : ""), null, c.zvm), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || bva.uug.value49) {
            this.xlm.mzx("timed", this.jvs(c.bni, null, "", null, c.zvm), ["displays"])
        }
    };
    this.ddx = function() {
        if (this.aei == 1) {
            this.erc(this.esd)
        } else {
            if (this.aei == 2) {
                this.fki(this.esd)
            } else {
                if (this.aei == 3) {
                    this.mzn(this.esd)
                } else {
                    if (this.aei == 4) {
                        this.ymh(this.esd)
                    } else {
                        if (this.aei == 5) {
                            this.wwj(this.esd)
                        } else {
                            if (this.aei == 6) {
                                this.hok(this.esd)
                            } else {
                                if (this.aei == 7) {
                                    this.wup(this.esd)
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.erc = function(d) {
        var c = this.xlm.jkd("allbuttons"),
            e = 0,
            b = 0;
        this.esd = d;
        this.aei = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].zjd(d)
        }
    };
    this.fki = function(d) {
        var c = this.xlm.jkd("allbuttons"),
            f = this.xlm.jkd("start"),
            e = 0,
            b = 0;
        this.esd = d;
        this.aei = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].zjd(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].zjd(d)
        }
    };
    this.mzn = function(d) {
        var c = this.xlm.jkd("allbuttons"),
            f = this.xlm.jkd("game"),
            e = 0,
            b = 0;
        this.esd = d;
        this.aei = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].zjd(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].zjd(d)
        }
    };
    this.ymh = function(d) {
        var c = this.xlm.jkd("allbuttons"),
            f = (this.xue === true) ? this.xlm.jkd("collect") : this.xlm.jkd("game"),
            e = 0,
            b = 0;
        this.esd = d;
        this.aei = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].zjd(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].zjd(d)
        }
    };
    this.wup = function(d) {
        var b = this.xlm.jkd("allbuttons"),
            c = this.xlm.jkd("auto");
        i = 0, ixq = 0;
        this.esd = d;
        this.aei = 7;
        for (i = 0, ixq = b.length; i < ixq; i++) {
            b[i].zjd(false)
        }
        for (i = 0, ixq = c.length; i < ixq; i++) {
            c[i].zjd(d)
        }
    };
    this.wwj = function(c) {
        var b = this.xlm.jkd("allbuttons"),
            d = this.xlm.jkd("freespin");
        i = 0, ixq = 0;
        this.esd = c;
        this.aei = 5;
        for (i = 0, ixq = b.length; i < ixq; i++) {
            b[i].zjd(false)
        }
        for (i = 0, ixq = d.length; i < ixq; i++) {
            d[i].zjd(c)
        }
    };
    this.hok = function(e) {
        var c = this.xlm.jkd("allbuttons"),
            d = this.xlm.jkd("settings"),
            f = 0,
            b = 0;
        this.esd = e;
        this.aei = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].zjd(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].zjd(e)
        }
    };
    this.jvs = function(c, g, f, e, b) {
        var d = new vwd();
        d.uwa(c, this.context2D, null, g, f);
        d.parent = this;
        d.qza = e;
        d.cep(b);
        return d
    };
    this.hsf = function(f, k, j, b, g, d, e) {
        var c = new iyh();
        c.uwa(f, this.context2D, null, j, b, k);
        c.parent = this;
        c.uva = g;
        c.cep(e);
        if (d) {
            c.uut = d.vmm
        }
        return c
    };
    this.zkv = function(f, k, g, b, l, c, j, e) {
        var d = new iyh();
        d.uwa(f, this.context2D, null, b, l, k);
        d.parent = this;
        d.uva = c;
        d.value = g;
        d.cep(e);
        if (j) {
            d.uut = j.vmm
        }
        return d
    };
    this.pft = function(e, j, g, f, c, d) {
        var b = new tvb();
        b.uwa(e, this.context2D, null, g, j);
        b.parent = this;
        b.uva = f;
        b.cep(d);
        if (c) {
            b.uut = c.vmm
        }
        return b
    };
    this.kbv = function(d, f, e, c) {
        var b = new mcp();
        b.uwa(d, this.context2D, null, f, null);
        b.parent = this;
        b.uva = e;
        if (c) {
            b.uut = c.vmm
        }
        return b
    };
    this.fau = function(b) {
        var c = new hjy();
        c.uwa(b, this.context2D);
        c.parent = this;
        return c
    };
    this.nnr = function() {
        return (this.parent.xyj > 0 && this.parent.jky < this.parent.xyj)
    };
    this.rbi = function(c, b) {
        var d = this.xlm.whx("info");
        if (d) {
            d.hto(b);
            d.bic(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.zuf)
    };
    this.vie = function(b, c, d) {
        this.kiy = b;
        this.ayt = c;
        this.ofn = d
    };
    this.egc = function(m, j, n, f) {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var c = (m != null && j != null && n != null && f != null),
            k = (c === true) ? new gup(m, j, n, f) : new gup(this.x, this.y, this.width, this.height),
            o = this.context2D,
            b = this.xlm.icz();
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
        if (this.kiy != null) {
            if (this.parent.ngk === bva.uhn.qnf) {
                o.drawImage(this.kiy, this.x + this.udu.x + this.ayt, this.y + this.udu.y + this.ofn, this.udu.width, this.kiy.height - (this.y + this.udu.y + this.ofn), this.udu.x, this.udu.y, this.udu.width, this.udu.height)
            } else {
                o.drawImage(this.kiy, this.x + this.udu.x + this.ayt, this.y + this.udu.y + this.ofn, this.udu.width, this.udu.height, this.udu.x, this.udu.y, this.udu.width, this.udu.height)
            }
            if (this.emb && this.emb.width > 0 && this.emb.height > 0) {
                o.drawImage(this.kiy, this.x + this.emb.x + this.ayt, this.y + this.emb.y + this.ofn, this.emb.width, this.emb.height, this.emb.x, this.emb.y, this.emb.width, this.emb.height)
            }
        }
        if (this.emb && this.emb.width > 0 && this.emb.height > 0 && this.parent.uhn.sbj === false) {
            var l = o.createLinearGradient(this.emb.x, this.emb.y, this.emb.x + this.emb.width, this.emb.y),
                e = this.parent.eyo.jgz("btn_back");
            l.addColorStop(0.2, this.bxs);
            l.addColorStop(1, this.dvu);
            o.fillStyle = l;
            if (this.parent.ngk === bva.uhn.opd) {
                o.fillRect(this.emb.x, this.emb.y, this.emb.width, this.emb.height);
                if (e) {
                    o.drawImage(e, this.emb.x, this.emb.y, this.emb.width, this.emb.height)
                }
            } else {
                if (this.parent.ngk === bva.uhn.xhx) {
                    o.save();
                    o.translate(this.emb.width / 2, this.emb.height / 2);
                    o.rotate(Math.PI);
                    o.translate(-this.emb.width / 2, -this.emb.height / 2);
                    o.fillRect(this.emb.x, this.emb.y, this.emb.width, this.emb.height);
                    if (e) {
                        o.drawImage(e, this.emb.x, this.emb.y, this.emb.width, this.emb.height)
                    }
                    o.restore()
                }
            }
        }
        for (var d = 0, g = b.length; d < g; d++) {
            b[d].egc()
        }
        if (this.parent.cqz === true && !(this.parent.taj() === true && this.parent.uhn.sbj === false)) {
            this.parent.hiy(o, k)
        }
        o.restore();
        if (this.wxt && this.ygh) {
            if (c) {
                this.wxt.drawImage(this.ygh, m, j, n, f, this.x + m, this.y + j, n, f)
            } else {
                this.wxt.drawImage(this.ygh, this.x, this.y)
            }
        }
    };
    this.smx = function() {
        if (a.parent.zhn === true) {
            a.hnx()
        } else {
            a.parent.wmt();
            if (a.parent.vsg() === true) {
                a.xlm.mom("start", "#gov", [a.exb]);
                a.aah = setTimeout(a.hnx, a.exb)
            }
        }
    };
    this.hnx = function() {
        a.parent.tmy();
        if (a.parent.zhn === true) {
            a.xlm.mom("start", "#vwo")
        } else {
            a.xlm.mom("start", "#vsw")
        }
    }
}
kcl.prototype = new tgm;

function uae(e, b, a, c, d) {
    this.oue = {
        x: e.x || 0,
        y: e.y || 0
    };
    this.lzh = b;
    this.prm = 0;
    this.wrz = 21;
    this.dzn = a;
    this.oza = c || 0;
    this.rxv = d || 0;
    this.qyi = 100;
    this.dns = 96;
    this.ouu = function() {
        if (this.prm < this.wrz) {
            this.prm++
        }
        return (this.prm >= this.wrz)
    };
    this.egc = function() {
        a.drawImage(this.lzh, this.prm * this.qyi, 0, this.qyi, this.dns, this.oue.x, this.oue.y, this.oza, this.rxv)
    }
}

function yll() {
    this.adf = false;
    this.ylc = false;
    this.ygu = false;
    this.vmh = [];
    this.npp = [];
    this.cci = [];
    this.fhc = [];
    this.szx = [];
    this.rdq = 89;
    this.ngd = 400;
    this.ufe = 3;
    this.font = "arial";
    this.pev = "bold";
    this.wim = true;
    this.nig = true;
    this.bsb = null;
    this.huc = false;
    this.bgn = [];
    this.kvm = 0;
    this.wtq = false;
    this.ery = false;
    this.ppv = 0;
    this.bly = 0;
    this.mza = false;
    this.wrd = true;
    this.wuk = false;
    this.apj = false;
    this.fok = 0;
    this.dae = 0;
    this.ggp = [];
    this.qry = false;
    this.bjb = 0;
    this.qmz = 0;
    this.kbi = 0;
    this.ucj = -1;
    this.gbj = 0;
    this.eky = 0;
    this.hri = true;
    this.uvk = null;
    this.yzb = [];
    this.osr = [];
    this.oyj = null;
    this.hpe = null;
    this.jyc = 0;
    this.vvu = null;
    this.wjg = null;
    this.nqo = null;
    this.its = null;
    this.knb = 0.05;
    this.tln = 4;
    this.gaq = 5;
    this.kvw = 1;
    this.wdw = 0;
    this.luz = 0;
    this.pbt = 40;
    this.egs = 12;
    this.bme = 5;
    this.okl = 0;
    this.qwg = 100;
    this.pdy = 96;
    this.kiy = null;
    this.ayt = 0;
    this.ofn = 0;
    this.wwh = 0;
    this.ksv = new gup();
    this.erj = [];
    this.bwr = 3;
    this.lfq = 6;
    this.cdk = 0;
    this.rgp = new gup(0, 0, 920, 160);
    this.bbo = [0, 515, 405];
    this.lxr = 40;
    this.iel = new gup(0, 165, 920, 160);
    this.fns = [0, 330, 420];
    this.zbr = 40;
    this.ydx = new gup(0, 330, 920, 160);
    this.zfz = [0, 440, 415];
    this.jee = 20;
    this.sfq = function() {};
    this.gqn = function() {};
    this.dju = function() {};
    this.lfn = function() {};
    this.ogw = function() {};
    this.okk = function() {};
    this.cep = function(a) {
        try {
            this.tln = a.lineWidth;
            this.gaq = a.xuq;
            this.kvw = a.stc;
            this.wdw = a.tsx;
            this.luz = a.nhw;
            this.pbt = a.fontSize;
            this.egs = a.srl;
            this.bme = a.yjr;
            this.qwg = a.mft;
            this.pdy = a.sbq
        } catch (b) {
            console.error(b)
        }
    };
    this.raa = function(a) {
        try {
            this.osr = a.zdl;
            this.jyc = a.rcm;
            this.vvu = a.wzj;
            this.wjg = a.uui;
            this.nqo = a.ffg;
            this.its = a.yoh;
            this.knb = a.nkl
        } catch (b) {
            console.error(b)
        }
    };
    this.gjt = function() {
        this.ygu = false;
        this.esj(true)
    };
    this.xwd = function() {
        this.ygu = false;
        this.esj(false, true)
    };
    this.avu = function() {
        return this.huc
    };
    this.mrs = function(d, b) {
        if (d && b) {
            this.bgn = b;
            this.uvk = [];
            for (var c = 0, a = d.length; c < a; c++) {
                this.uvk[c] = d[c]
            }
        } else {
            this.uvk = null
        }
        this.huc = false;
        this.wuk = false;
        this.apj = false;
        this.ygu = true;
        this.esj(true, true)
    };
    this.start = function() {
        this.huc = true;
        this.wuk = true;
        this.apj = false;
        if (!this.wtq) {
            this.bjb = 0
        } else {
            if (this.bjb >= this.kbi) {
                this.bjb = 0
            }
        }
        this.wrd = true;
        this.parent.nga = false;
        this.ery = (this.parent.cho >= (this.parent.dld - 1));
        if (this.wtq && this.nig) {
            if (!this.parent.xre && this.parent.atk) {
                this.parent.eyo.zqb("winline");
                this.parent.eyo.urt("winline")
            }
        }
        this.sfq()
    };
    this.stop = function() {
        this.huc = false;
        this.wuk = false;
        this.pmn();
        clearInterval(this.ppv);
        clearTimeout(this.bly);
        clearTimeout(this.parent.zdo)
    };
    this.bpe = function(d, c, a, f, j, e, b, g) {
        if (this.ygu) {
            this.ygu = false;
            this.parent.egc()
        }
        this.ucj = f;
        this.kvm = d;
        this.bgn = c;
        this.eky = j;
        this.gbj = e;
        this.hri = a;
        this.wtq = g;
        if (b) {
            this.zkx()
        } else {
            this.haw()
        }
    };
    this.zkx = function() {
        this.hzf();
        this.start()
    };
    this.haw = function() {
        this.huc = true;
        this.wuk = true;
        this.wrd = false;
        this.apj = this.wim;
        this.pmn();
        if (!this.parent.xre && this.nig) {
            this.parent.eyo.zqb("winline");
            this.parent.eyo.urt("winline")
        }
        this.egc();
        this.dju()
    };
    this.yyz = function() {
        if (this.qry) {
            this.fok++;
            if (this.fok == 6 || this.fok == 10 || this.fok == 15 || (this.parent.scn == 2 && (this.fok == 48 || this.fok == 55 || this.fok == 64))) {
                this.afd()
            }
            for (var a = this.ggp.length - 1; a >= 0; a--) {
                if (this.ggp[a].ouu()) {
                    this.ggp.shift()
                }
            }
        }
        if (this.wim) {
            if (this.wtq) {
                this.apj = true
            } else {
                if ((this.bjb % 3) == 0) {
                    this.apj = !this.apj
                }
            }
        }
        if (((!this.wtq || this.ery) && this.bjb < this.kbi)) {
            this.parent.egc();
            this.bjb++;
            if (this.wtq) {
                this.qmz++
            }
        } else {
            if (this.wtq && !this.ery && this.qmz < this.ufe) {
                this.parent.egc();
                this.qmz++;
                this.bjb = (this.bjb < this.kbi) ? this.bjb + 1 : 0
            } else {
                this.qmz = 0;
                clearInterval(this.ppv);
                this.xzs()
            }
        }
    };
    this.xzs = function() {
        this.huc = false;
        this.wuk = (this.adf && this.wrd);
        if (this.wuk == true && this.ery == true && this.parent.xre == false && this.parent.zhn == true) {
            this.wuk = false
        }
        if (!this.wtq || this.ery) {
            if (!(this.ylc && this.adf) && !this.qry) {
                this.xwd()
            }
        }
        this.parent.egc();
        this.parent.qpa();
        this.parent.yfd();
        this.parent.pdi()
    };
    this.hzf = function() {
        this.kbi = 0;
        for (var a = 0; a < this.bgn.length; a++) {
            for (var b = 0; b < this.bgn[a].length; b++) {
                if (this.bgn[a][b] >= 0) {
                    if (this.vmh[this.bgn[a][b]].wrz > this.kbi) {
                        this.kbi = this.vmh[this.bgn[a][b]].wrz
                    }
                }
            }
        }
    };
    this.hfh = function() {
        if (this.kvp()) {
            this.ggp = [];
            this.qry = true;
            this.fok = 0
        }
    };
    this.wrs = function() {
        this.fok = 0
    };
    this.pmn = function() {
        this.qry = false
    };
    this.afd = function() {
        var e = (Math.random() > 0.7) ? 4 : 3,
            d = this.qwg * e,
            g = this.pdy * e,
            a = Math.random();
        while (Math.abs(a - this.dae) < 0.3) {
            a = Math.random()
        }
        this.dae = a;
        var f = Math.round(a * (this.width - d));
        a = Math.random();
        var c = Math.round(a * (this.height - g));
        var b = new uae({
            x: f,
            y: c
        }, this.parent.eyo.jgz("firework"), this.context2D, d, g);
        this.ggp.push(b)
    };
    this.ybq = function(b) {
        this.mza = true;
        this.bjb = 0;
        this.wwh = b;
        if (this.wwh >= this.parent.xbn) {
            this.ksv = this.rgp;
            for (var c = 0, a = this.bbo.length; c < a; c++) {
                this.erj[c] = this.bbo[c]
            }
            this.parent.eyo.urt("megawin");
            this.parent.fkr(48);
            this.kbi = this.lxr
        } else {
            if (this.wwh >= this.parent.hcf) {
                this.ksv = this.iel;
                for (var c = 0, a = this.fns.length; c < a; c++) {
                    this.erj[c] = this.fns[c]
                }
                this.parent.eyo.urt("bigwin");
                this.parent.fkr(48);
                this.kbi = this.zbr
            } else {
                if (this.wwh >= this.parent.krc) {
                    this.ksv = this.ydx;
                    for (var c = 0, a = this.zfz.length; c < a; c++) {
                        this.erj[c] = this.zfz[c]
                    }
                    this.parent.eyo.urt("nicewin");
                    this.parent.fkr(24);
                    this.kbi = this.jee
                }
            }
        }
        this.kbi += (this.erj.length - 1) * this.lfq;
        this.cdk = 0;
        this.parent.wvb(true);
        this.ogw()
    };
    this.qmm = function() {
        this.mza = false;
        clearInterval(this.ppv);
        if (this.wwh >= this.parent.xbn) {
            this.parent.eyo.zqb("megawin")
        } else {
            if (this.wwh >= this.parent.hcf) {
                this.parent.eyo.zqb("bigwin")
            } else {
                if (this.wwh >= this.parent.krc) {
                    this.parent.eyo.zqb("nicewin")
                }
            }
        }
        this.xwd();
        this.parent.wvb(false);
        this.parent.qou()
    };
    this.vie = function(a, b, c) {
        this.kiy = a;
        this.ayt = b;
        this.ofn = c
    };
    this.egc = function() {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var d = this.context2D;
        d.save();
        d.clearRect(0, 0, this.width, this.height);
        d.lineWidth = this.tln;
        d.lineCap = "round";
        d.lineJoin = "round";
        if (this.ygu) {
            this.odz()
        }
        if (this.wuk) {
            if (this.huc && this.adf && this.hri) {
                for (var b = 0; b < this.bgn.length; b++) {
                    for (var f = 0; f < this.bgn[b].length; f++) {
                        if (this.bgn[b][f] != -1) {
                            if (this.wrd) {
                                this.kfw(b, f)
                            } else {
                                this.zso(b, f)
                            }
                        }
                    }
                }
                if (this.hri) {
                    this.pcu(this.kvm)
                }
                for (var c = this.eky; c < this.eky + this.gbj; c++) {
                    if (this.ucj >= 0 && (this.bgn[c][this.szx[this.kvm][c] - 1] == this.ucj || this.parent.trx(this.bgn[c][this.szx[this.kvm][c] - 1]))) {
                        if (this.wrd) {
                            this.kfw(c, this.szx[this.kvm][c] - 1)
                        } else {
                            this.zso(c, this.szx[this.kvm][c] - 1)
                        }
                    }
                }
            } else {
                if (this.huc && this.hri) {
                    this.pcu(this.kvm)
                }
                for (var b = 0; b < this.bgn.length; b++) {
                    for (var f = 0; f < this.bgn[b].length; f++) {
                        if (this.bgn[b][f] != -1) {
                            if (this.wrd) {
                                this.kfw(b, f)
                            } else {
                                this.zso(b, f)
                            }
                        }
                    }
                }
            }
            if (this.bsb) {
                for (var b = 0; b < this.bgn.length; b++) {
                    for (var f = 0; f < this.bgn[b].length; f++) {
                        if (this.bgn[b][f] != -1) {
                            d.drawImage(this.bsb, 0, f * this.luz, this.bsb.width, this.luz, this.cci[b][f].x, this.cci[b][f].y, this.wdw, this.luz)
                        }
                    }
                }
            }
            if (this.huc) {
                if (this.kvm < 0) {
                    if (this.osr[this.osr.length - 2]) {
                        for (var b = 0; b < this.bgn.length; b++) {
                            for (var f = 0; f < this.bgn[b].length; f++) {
                                if (this.parent.sob >= 0 && this.bgn[b][f] == this.parent.sob) {
                                    this.hvc(b, f, this.osr[this.osr.length - 2])
                                }
                            }
                        }
                    }
                } else {
                    for (var c = this.eky; c < this.eky + this.gbj; c++) {
                        if (this.ucj >= 0 && (this.bgn[c][this.szx[this.kvm][c] - 1] == this.ucj || this.parent.trx(this.bgn[c][this.szx[this.kvm][c] - 1]))) {
                            this.hvc(c, this.szx[this.kvm][c] - 1, this.osr[this.kvm])
                        }
                    }
                }
            }
            if (this.qry) {
                for (var e = 0, a = this.ggp.length; e < a; e++) {
                    this.ggp[e].egc()
                }
            }
        } else {
            if (this.mza) {
                this.mns()
            }
        }
        d.restore();
        if (this.parent.qoq()) {
            if (this.wxt && this.ygh) {
                this.wxt.drawImage(this.ygh, this.x, this.y)
            }
        }
    };
    this.mns = function() {
        var l = this.context2D,
            f = this.parent.eyo.jgz("wins"),
            b = (this.height / 2 - this.ksv.height) / 2,
            g = this.erj[0],
            a = this.bjb % this.lfq,
            k = (a < this.bwr) ? Math.floor(this.erj[this.cdk + 1] / this.bwr) * a : this.erj[this.cdk + 1],
            j = (a < this.bwr) ? Math.floor(this.ksv.height / this.bwr) * a : this.ksv.height,
            c = 1,
            e = 5;
        l.save();
        if (this.bjb >= this.kbi - e) {
            c = (this.kbi - this.bjb) * (1 / e)
        }
        l.globalAlpha = c;
        for (var d = 0; d <= this.cdk && d < this.erj.length - 1; d++) {
            if (d == this.erj.length - 2) {
                b += this.height / 2
            }
            if (d == this.cdk) {
                l.drawImage(f, g, this.ksv.y, this.erj[d + 1], this.ksv.height, ((this.width - this.erj[d + 1]) / 2 + (this.erj[d + 1] - k) / 2), (b + (this.ksv.height - j) / 2), k, j)
            } else {
                l.drawImage(f, g, this.ksv.y, this.erj[d + 1], this.ksv.height, (this.width - this.erj[d + 1]) / 2, b, this.erj[d + 1], this.ksv.height)
            }
            g += this.erj[d + 1]
        }
        l.restore()
    };
    this.odz = function() {
        if (this.uvk) {
            this.yzb = [];
            for (var b = 0; b < this.bgn.length; b++) {
                for (var d = 0; d < this.bgn[b].length; d++) {
                    if (this.bgn[b][d] != -1) {
                        this.zso(b, d);
                        if (this.bsb) {
                            this.context2D.drawImage(this.bsb, 0, d * this.luz, this.bsb.width, this.luz, this.cci[b][d].x, this.cci[b][d].y, this.wdw, this.luz)
                        }
                    }
                }
            }
            for (var c = 0, a = this.uvk.length; c < a; c++) {
                this.crk(this.uvk[c])
            }
        } else {
            for (var c = 0; c < this.parent.yzu; c++) {
                this.pcu(c)
            }
        }
    };
    this.pcu = function(c) {
        var a = this.context2D;
        a.save();
        a.strokeStyle = (this.apj) ? this.osr[c].fli : this.osr[c].hif;
        a.lineWidth = this.tln;
        a.beginPath();
        for (var b = 0; b < this.fhc[c].length; b++) {
            if (b == 0) {
                a.moveTo(this.fhc[c][b].x, this.fhc[c][b].y)
            } else {
                a.lineTo(this.fhc[c][b].x, this.fhc[c][b].y)
            }
        }
        a.moveTo(this.fhc[c][0].x, this.fhc[c][0].y);
        a.stroke();
        a.strokeStyle = (this.apj) ? this.osr[c].whb : this.osr[c].mov;
        a.lineWidth = this.tln - 2 * this.kvw;
        a.stroke();
        a.restore()
    };
    this.crk = function(d) {
        var a = this.context2D,
            c = null;
        a.save();
        for (var b = 1; b < this.fhc[d].length; b++) {
            c = this.fhc[d][b - 1].x + "_" + this.fhc[d][b - 1].y + "_" + this.fhc[d][b].x + "_" + this.fhc[d][b].y;
            if (this.yzb.indexOf(c) < 0) {
                this.yzb.push(c);
                a.beginPath();
                a.moveTo(this.fhc[d][b - 1].x, this.fhc[d][b - 1].y);
                a.lineTo(this.fhc[d][b].x, this.fhc[d][b].y);
                a.moveTo(this.fhc[d][b - 1].x, this.fhc[d][b - 1].y);
                a.strokeStyle = (this.apj) ? this.osr[this.osr.length - 1].fli : this.osr[this.osr.length - 1].hif;
                a.lineWidth = this.tln;
                a.stroke();
                a.strokeStyle = (this.apj) ? this.osr[this.osr.length - 1].whb : this.osr[this.osr.length - 1].mov;
                a.lineWidth = this.tln - 2 * this.kvw;
                a.stroke()
            }
        }
        a.restore()
    };
    this.kfw = function(a, c) {
        var b = this.context2D;
        b.save();
        if (this.kiy != null) {
            this.context2D.drawImage(this.kiy, this.cci[a][c].x + this.ayt, this.cci[a][c].y + this.ofn, this.wdw, this.luz, this.cci[a][c].x, this.cci[a][c].y, this.wdw, this.luz)
        }
        if (this.vmh[this.bgn[a][c]].wrz <= this.bjb) {
            b.drawImage(this.vmh[this.bgn[a][c]].lzh, (this.vmh[this.bgn[a][c]].wrz - 1) * this.vmh[this.bgn[a][c]].gkf, 0, this.vmh[this.bgn[a][c]].gkf, this.vmh[this.bgn[a][c]].yyn, this.cci[a][c].x + (this.wdw - this.vmh[this.bgn[a][c]].gkf) / 2, this.cci[a][c].y + (this.luz - this.vmh[this.bgn[a][c]].yyn) / 2, this.vmh[this.bgn[a][c]].gkf, this.vmh[this.bgn[a][c]].yyn)
        } else {
            b.drawImage(this.vmh[this.bgn[a][c]].lzh, this.bjb * this.vmh[this.bgn[a][c]].gkf, 0, this.vmh[this.bgn[a][c]].gkf, this.vmh[this.bgn[a][c]].yyn, this.cci[a][c].x + (this.wdw - this.vmh[this.bgn[a][c]].gkf) / 2, this.cci[a][c].y + (this.luz - this.vmh[this.bgn[a][c]].yyn) / 2, this.vmh[this.bgn[a][c]].gkf, this.vmh[this.bgn[a][c]].yyn)
        }
        b.restore()
    };
    this.zso = function(a, c) {
        var b = this.context2D;
        b.save();
        if (this.kiy != null) {
            this.context2D.drawImage(this.kiy, this.cci[a][c].x + this.ayt, this.cci[a][c].y + this.ofn, this.wdw, this.luz, this.cci[a][c].x, this.cci[a][c].y, this.wdw, this.luz)
        }
        b.drawImage(this.npp[this.bgn[a][c]], this.cci[a][c].x + (this.wdw - this.npp[this.bgn[a][c]].width) / 2, this.cci[a][c].y + (this.luz - this.npp[this.bgn[a][c]].height) / 2);
        b.restore()
    };
    this.hvc = function(a, d, c) {
        var b = this.context2D;
        b.save();
        if (c) {
            b.lineWidth = this.gaq;
            b.strokeStyle = (this.apj) ? c.fli : c.hif;
            b.strokeRect(this.cci[a][d].x + this.gaq / 2, this.cci[a][d].y + this.gaq / 2, this.wdw - this.gaq, this.luz - this.gaq);
            b.strokeStyle = (this.apj) ? c.whb : c.mov;
            b.lineWidth = this.gaq - 2 * this.kvw;
            b.strokeRect(this.cci[a][d].x + this.gaq / 2, this.cci[a][d].y + this.gaq / 2, this.wdw - this.gaq, this.luz - this.gaq)
        }
        b.restore()
    }
}
yll.prototype = new tgm;

function tml() {
    var a = this;
    this.sfq = function() {
        this.gqn();
        this.ppv = setInterval(a.gqn, a.rdq)
    };
    this.gqn = function() {
        a.yyz()
    };
    this.dju = function() {
        this.bly = setTimeout(a.lfn, a.ngd)
    };
    this.lfn = function() {
        a.xzs()
    };
    this.ogw = function() {
        this.ppv = setInterval(this.okk, 60)
    };
    this.okk = function() {
        if (a.bjb < a.kbi) {
            a.bjb++;
            if ((a.bjb % (a.lfq)) == 0) {
                a.cdk++
            }
            a.parent.egc()
        } else {
            a.qmm()
        }
    }
}
tml.prototype = new yll;

function anx() {
    var a = this;
    this.otp = 0;
    this.una = 1;
    this.mjb = 7;
    this.edn = 0;
    this.nbo = 0;
    this.jnx = 0;
    this.fgd = 0;
    this.gpe = this.otp;
    this.eax = this.cil;
    this.hvz = function() {
        this.esj(true);
        this.dzw = true;
        this.esd = false;
        this.gpe = this.otp;
        this.nbo = Math.floor(this.width / this.mjb);
        this.fgd = 0;
        this.jnx = 0
    };
    this.rxl = function() {
        this.dzw = true;
        this.esd = false;
        this.gpe = this.una;
        this.nbo = -Math.floor(this.width / this.mjb);
        this.fgd = 1;
        this.jnx = this.width
    };
    this.lzg = function() {
        if (a.fgd < a.mjb) {
            a.jnx += a.nbo;
            a.fgd++;
            return true
        } else {
            a.dzw = false;
            a.esd = true;
            if (a.gpe == a.una) {
                a.esj(false)
            }
            return false
        }
    };
    this.urt = function() {
        if (this.krb == this.lkf) {
            this.parent.eyo.urt("maxstep")
        } else {
            this.parent.eyo.urt("step" + (this.krb % 12))
        }
    };
    this.ncx = function(b, d) {
        var c = false;
        this.krb = b;
        if (this.krb < this.aqy) {
            c = true;
            this.krb = this.aqy
        }
        if (this.krb >= this.lkf) {
            c = true;
            this.krb = this.lkf
        }
        this.ygg = this.krb + 1;
        if (c) {
            this.uva(this.krb)
        }
        if (d && d === true) {
            this.parent.egc()
        }
    };
    this.eqq = function() {
        a.ona = false
    };
    this.egc = function() {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        this.tvw();
        if (this.wxt && this.ygh) {
            if (this.dzw) {
                if (this.jnx > 0) {
                    if (this.eax === this.xzx) {
                        this.wxt.drawImage(this.ygh, this.width - this.jnx, 0, this.jnx, this.height, this.x, this.y, this.jnx, this.height)
                    } else {
                        if (this.eax === this.cil) {
                            this.wxt.drawImage(this.ygh, 0, 0, this.jnx, this.height, this.x + this.width - this.jnx, this.y, this.jnx, this.height)
                        }
                    }
                }
            } else {
                this.wxt.drawImage(this.ygh, this.x, this.y)
            }
        }
    };
    this.axa = function(c) {
        var f = this.tnw,
            e = this.tnw,
            b = 0,
            d = 0;
        if (this.eax === this.cil) {
            b = this.ihs;
            d = this.sjn.x - 2 * this.ihs
        } else {
            if (this.eax === this.xzx) {
                b = this.sjn.x + this.sjn.width + this.ihs;
                d = this.width - this.ihs - (this.sjn.x + this.sjn.width + this.ihs)
            }
        }
        if (this.krb > 0 && this.krb < this.qho.length - 1) {
            bva.kgg.hvc(c, b, this.sjn.y + ((this.xrw - this.ygg) * this.lwo), d, this.lwo, this.zgf, this.ypi);
            bva.kgg.osm(c, this.parent.tyk(this.qho[this.krb]), this.hpe, b, this.sjn.y + ((this.xrw - this.ygg) * this.lwo) + (this.lwo - this.pbt) / 2, d, this.pbt, this.aht, this.pbt, this.rwz, this.ihs)
        } else {
            if (this.krb == 0) {
                f = this.hpe
            } else {
                if (this.krb == this.qho.length - 1) {
                    e = this.hpe
                }
            }
        }
        bva.kgg.hvc(c, b, this.sjn.y + (this.lwo * (this.xrw - 1)), d, this.lwo, this.zgf, this.ypi);
        bva.kgg.osm(c, this.parent.tyk(this.qho[0]), f, b, this.sjn.y + (this.lwo * (this.xrw - 1)) + (this.lwo - this.pbt) / 2, d, this.pbt, this.aht, this.pbt, this.rwz, this.ihs);
        bva.kgg.hvc(c, b, this.sjn.y, d, this.lwo, this.zgf, this.ypi);
        bva.kgg.osm(c, this.parent.tyk(this.qho[this.qho.length - 1]), e, b, this.sjn.y + (this.lwo - this.pbt) / 2, d, this.pbt, this.aht, this.pbt, this.rwz, this.ihs);
        bva.kgg.sxn(c, "+", this.tnw, this.yfe.x, this.yfe.y, this.yfe.width, this.yfe.height, this.aht, this.pbt, this.rwz);
        bva.kgg.sxn(c, "", this.tnw, this.yek.x, this.yek.y, this.yek.width, this.yek.height, this.aht, this.pbt, this.rwz);
        if (this.pes) {
            bva.kgg.sxn(c, this.pes, this.tnw, this.agu.x, this.agu.y, this.agu.width, this.agu.height, this.aht, this.pbt, this.rwz)
        }
    }
}
anx.prototype = new cse;

function wno() {
    var a = this;
    this.otp = 0;
    this.una = 1;
    this.mjb = 7;
    this.edn = 0;
    this.nbo = 0;
    this.jnx = 0;
    this.fgd = 0;
    this.gpe = this.otp;
    this.hvz = function() {
        this.esj(true);
        this.dzw = true;
        this.esd = false;
        this.gpe = this.otp;
        this.nbo = Math.floor(this.width / this.mjb);
        this.fgd = 0;
        this.jnx = 0
    };
    this.rxl = function() {
        this.dzw = true;
        this.esd = false;
        this.gpe = this.una;
        this.nbo = -Math.floor(this.width / this.mjb);
        this.fgd = 1;
        this.jnx = this.width
    };
    this.lzg = function() {
        if (a.fgd < a.mjb) {
            a.jnx += a.nbo;
            a.fgd++;
            return true
        } else {
            a.dzw = false;
            a.esd = true;
            if (a.gpe == a.una) {
                a.esj(false)
            }
            return false
        }
    };
    this.urt = function() {
        if (this.krb == this.lkf) {
            this.parent.eyo.urt("maxstep")
        } else {
            this.parent.eyo.urt("step" + (this.krb % 12))
        }
    };
    this.eqq = function() {
        a.ona = false
    };
    this.egc = function() {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        this.tvw();
        if (this.wxt && this.ygh) {
            if (this.dzw) {
                if (this.jnx > 0) {
                    if (this.eax === this.xzx) {
                        this.wxt.drawImage(this.ygh, this.width - this.jnx, 0, this.jnx, this.height, this.x, this.y, this.jnx, this.height)
                    } else {
                        if (this.eax === this.cil) {
                            this.wxt.drawImage(this.ygh, 0, 0, this.jnx, this.height, this.x + this.width - this.jnx, this.y, this.jnx, this.height)
                        }
                    }
                }
            } else {
                this.wxt.drawImage(this.ygh, this.x, this.y)
            }
        }
    };
    this.axa = function(c) {
        var f = this.tnw,
            e = this.tnw,
            b = 0,
            d = 0;
        if (this.eax === this.cil) {
            b = this.ihs;
            d = this.sjn.x - 2 * this.ihs
        } else {
            if (this.eax === this.xzx) {
                b = this.sjn.x + this.sjn.width + this.ihs;
                d = this.width - this.ihs - (this.sjn.x + this.sjn.width + this.ihs)
            }
        }
        if (this.krb > 0 && this.krb < this.qho.length - 1) {
            bva.kgg.hvc(c, b, this.sjn.y + ((this.xrw - this.ygg) * this.lwo), d, this.lwo, this.zgf, this.ypi);
            bva.kgg.ytt(c, this.qho[this.krb], this.hpe, b, this.sjn.y + ((this.xrw - this.ygg) * this.lwo) + (this.lwo - this.pbt) / 2, d, this.pbt, this.aht, this.pbt, this.rwz, this.ihs)
        } else {
            if (this.krb == 0) {
                f = this.hpe
            } else {
                if (this.krb == this.qho.length - 1) {
                    e = this.hpe
                }
            }
        }
        bva.kgg.hvc(c, b, this.sjn.y + (this.lwo * (this.xrw - 1)), d, this.lwo, this.zgf, this.ypi);
        bva.kgg.ytt(c, this.qho[0], f, b, this.sjn.y + (this.lwo * (this.xrw - 1)) + (this.lwo - this.pbt) / 2, d, this.pbt, this.aht, this.pbt, this.rwz, this.ihs);
        bva.kgg.hvc(c, b, this.sjn.y, d, this.lwo, this.zgf, this.ypi);
        bva.kgg.ytt(c, this.qho[this.qho.length - 1], e, b, this.sjn.y + (this.lwo - this.pbt) / 2, d, this.pbt, this.aht, this.pbt, this.rwz, this.ihs);
        bva.kgg.sxn(c, "+", this.tnw, this.yfe.x, this.yfe.y, this.yfe.width, this.yfe.height, this.aht, this.pbt, this.rwz);
        bva.kgg.sxn(c, "", this.tnw, this.yek.x, this.yek.y, this.yek.width, this.yek.height, this.aht, this.pbt, this.rwz);
        if (this.pes) {
            bva.kgg.sxn(c, this.pes, this.tnw, this.agu.x, this.agu.y, this.agu.width, this.agu.height, this.aht, this.pbt, this.rwz)
        }
    }
}
wno.prototype = new cse;

function zag() {
    this.qza = new Image();
    this.jwl = [];
    this.uud = 0;
    this.vvd = 0;
    this.lbf = [];
    this.kjd = 0;
    this.uwp = 0;
    this.lzu = 0;
    this.fxr = [];
    this.kiy = null;
    this.ayt = 0;
    this.ofn = 0;
    this.cep = function(a) {
        try {
            this.fxr = a.bfi;
            this.uwp = a.qyi;
            this.lzu = a.dns
        } catch (b) {
            console.error(b)
        }
    };
    this.rap = function(b, f, c) {
        var e = this.parent.qzy.xlm.whx("line"),
            a = this.parent.xqp.whx("betsel"),
            d = this.parent.xqp.whx("linesel");
        if (b >= this.x && b <= this.x + this.width && f >= this.y && f <= this.y + this.height && this.kvp() === true) {
            if (e && e.kca() && !e.buj()) {
                if (!c) {
                    this.parent.eyo.zqb("panel");
                    this.parent.eyo.urt("panel");
                    if ((a && a.kca()) && ((d && d.kca()) || !d)) {
                        this.parent.avb()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.egc = function() {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var c = this.context2D,
            e = false;
        if (this.kiy != null) {
            c.drawImage(this.kiy, this.x + this.ayt, this.y + this.ofn, this.width, this.height, this.x, this.y, this.width, this.height)
        }
        if (this.lbf.length > 0) {
            for (var f = this.uud - 1, d = 0; f <= this.vvd - 1; f++, d++) {
                e = false;
                for (var b = 0, a = this.lbf.length; b < a; b++) {
                    if (this.jwl[f] === this.lbf[b]) {
                        e = true;
                        c.drawImage(this.qza, 0, this.qza.height / 2 + (this.jwl[f] - 1) * this.lzu, this.uwp, this.lzu, this.x, this.y + this.fxr[d], this.uwp, this.lzu)
                    }
                }
                if (e === false) {
                    c.drawImage(this.qza, 0, (this.jwl[f] - 1) * this.lzu, this.uwp, this.lzu, this.x, this.y + this.fxr[d], this.uwp, this.lzu)
                }
            }
        } else {
            for (var f = this.uud - 1, d = 0; f <= this.vvd - 1; f++, d++) {
                if (this.jwl[f] <= this.kjd) {
                    c.drawImage(this.qza, 0, this.qza.height / 2 + (this.jwl[f] - 1) * this.lzu, this.uwp, this.lzu, this.x, this.y + this.fxr[d], this.uwp, this.lzu)
                } else {
                    c.drawImage(this.qza, 0, (this.jwl[f] - 1) * this.lzu, this.uwp, this.lzu, this.x, this.y + this.fxr[d], this.uwp, this.lzu)
                }
            }
        }
    };
    this.uvv = function(a, b) {
        this.kjd = a;
        if (b && b === true) {
            this.egc()
        }
    };
    this.vqy = function(b, d) {
        this.lbf = [];
        if (b) {
            for (var c = 0, a = b.length; c < a; c++) {
                this.lbf[c] = b[c]
            }
        }
        if (d && d === true) {
            this.egc()
        }
    };
    this.yct = function(a) {
        this.qza = a;
        this.width = this.uwp;
        this.height = this.fxr[this.fxr.length - 1] + this.lzu;
        this.qjx(new gup(this.x, this.y, this.width, this.height))
    };
    this.vie = function(a, b, c) {
        this.kiy = a;
        this.ayt = b;
        this.ofn = c
    }
}
zag.prototype = new tgm;

function gud(g, c, f, e, j, a, d, b) {
    this.vnv = g;
    this.qxl = f;
    this.jmw = e;
    this.rua = j;
    this.hdt = c;
    this.hpk = a;
    this.prw = d;
    this.rhm = b;
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
    this.iar = [];
    this.oew = [];
    this.dtj = [];
    this.jjz = [];
    this.xli = [];
    this.bqx = [];
    this.hga = 5;
    this.nrg = [];
    this.kso = [];
    this.apy = [];
    this.sii = [];
    this.lih = [];
    this.aja = [];
    this.uie = [];
    this.ewv = [];
    this.elw = [];
    this.ftc = [];
    this.lxa = [];
    this.gqt = [];
    this.opb = [];
    this.jtz = [];
    this.gzt = [];
    this.ipo = [];
    this.uru = [];
    this.wxp = [];
    this.uoy = [];
    this.pqd = [];
    this.tnc = 0;
    this.pwr = 0;
    this.win = 0;
    this.pyw = 0;
    this.frn = 0;
    this.lis = 0;
    this.yzu = 0;
    this.xqz = 0;
    this.chw = 0;
    this.edm = 0;
    this.soh = 1;
    this.wyc = 1;
    this.lsr = 0;
    this.fsd = 0;
    this.hkr = 0;
    this.bmv = 0;
    this.eml = 0;
    this.rpp = 1;
    this.cjt = 1;
    this.iod = 0;
    this.jky = 0;
    this.xyj = 0;
    this.kun = 0;
    this.rcj = "";
    this.bpl = "";
    this.adp = "";
    this.pqz = "";
    this.ewm = 0;
    this.ihx = function(k) {
        return this.vjk(k)
    };
    this.ylh = function(o) {
        if (o != null) {
            this.ftf = 0;
            this.xtq = this.vvg(o);
            if (this.xtq == 0) {
                this.rl = this.vvg(o);
                this.r1 = this.ihx(o);
                this.r2 = this.ihx(o);
                this.r3 = this.ihx(o);
                if (this.rl >= 4) {
                    this.r4 = this.ihx(o)
                }
                if (this.rl >= 5) {
                    this.r5 = this.ihx(o)
                }
                if (this.rl >= 6) {
                    this.r6 = this.ihx(o)
                }
                if (this.rl >= 7) {
                    this.r7 = this.ihx(o)
                }
                if (this.rl >= 8) {
                    this.r8 = this.ihx(o)
                }
                if (this.rl >= 9) {
                    this.r9 = this.ihx(o)
                }
                if (this.rl >= 10) {
                    this.iar = this.ihx(o)
                }
                if (this.rl >= 11) {
                    this.oew = this.ihx(o)
                }
                if (this.rl >= 12) {
                    this.dtj = this.ihx(o)
                }
                if (this.rl >= 13) {
                    this.jjz = this.ihx(o)
                }
                if (this.rl >= 14) {
                    this.xli = this.ihx(o)
                }
                if (this.rl >= 15) {
                    this.bqx = this.ihx(o)
                }
                this.hga = this.vvg(o);
                if (this.hga > 0) {
                    this.nrg = this.ihx(o);
                    this.kso = this.ihx(o);
                    this.apy = this.ihx(o);
                    if (this.hga >= 4) {
                        this.sii = this.ihx(o)
                    }
                    if (this.hga >= 5) {
                        this.lih = this.ihx(o)
                    }
                    if (this.hga >= 6) {
                        this.aja = this.ihx(o)
                    }
                    if (this.hga >= 7) {
                        this.uie = this.ihx(o)
                    }
                    if (this.hga >= 8) {
                        this.ewv = this.ihx(o)
                    }
                    if (this.hga >= 9) {
                        this.elw = this.ihx(o)
                    }
                    if (this.hga >= 10) {
                        this.ftc = this.ihx(o)
                    }
                    if (this.hga >= 11) {
                        this.lxa = this.ihx(o)
                    }
                    if (this.hga >= 12) {
                        this.gqt = this.ihx(o)
                    }
                    if (this.hga >= 13) {
                        this.opb = this.ihx(o)
                    }
                    if (this.hga >= 14) {
                        this.jtz = this.ihx(o)
                    }
                    if (this.hga >= 15) {
                        this.gzt = this.ihx(o)
                    }
                }
                this.efk = this.scj(o);
                this.pdb = this.vvg(o);
                for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                    this.ipo[l] = this.juv(o)
                }
                this.tnc = this.juv(o);
                this.pwr = this.juv(o);
                this.win = this.juv(o);
                this.lis = this.scj(o);
                this.pyw = this.juv(o);
                this.frn = this.juv(o);
                this.yzu = this.scj(o);
                this.xqz = this.juv(o);
                this.chw = this.juv(o);
                this.edm = this.juv(o);
                this.soh = this.juv(o);
                this.wyc = this.juv(o);
                this.lsr = this.juv(o);
                this.fsd = this.juv(o);
                this.hkr = this.scj(o);
                this.bmv = this.scj(o);
                this.eml = this.scj(o);
                this.rpp = this.juv(o);
                this.cjt = this.scj(o);
                for (var l = 0, k = (this.hga < 5) ? 5 : this.hga; l < k; l++) {
                    this.uru[l] = this.juv(o)
                }
                for (var l = 0; l < 8; l++) {
                    this.wxp[l] = this.scj(o)
                }
                var p = this.scj(o);
                for (var l = 0; l < p; l++) {
                    this.uoy[l] = this.juv(o)
                }
                var n = this.scj(o);
                for (var l = 0; l < n; l++) {
                    this.pqd[l] = this.juv(o)
                }
                this.otf(o);
                if (this.efk == 0) {
                    this.bce("A/u250")
                } else {
                    this.lri.utm()
                }
            } else {
                if (this.xtq == 1) {
                    this.efk = this.scj(o);
                    this.pdb = this.vvg(o);
                    this.tnc = this.juv(o);
                    this.pwr = this.juv(o);
                    this.win = this.juv(o);
                    for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                        this.ipo[l] = this.juv(o)
                    }
                    this.lis = this.scj(o);
                    this.yzu = this.scj(o);
                    this.xqz = this.juv(o);
                    this.chw = this.juv(o);
                    this.edm = this.juv(o);
                    this.soh = this.juv(o);
                    this.wyc = this.juv(o);
                    this.lsr = this.juv(o);
                    for (var l = 0, k = (this.hga < 5) ? 5 : this.hga; l < k; l++) {
                        this.uru[l] = this.juv(o)
                    }
                    var n = this.scj(o);
                    for (var l = 0; l < n; l++) {
                        this.pqd[l] = this.juv(o)
                    }
                    for (var l = 0; l < 8; l++) {
                        this.wxp[l] = this.scj(o)
                    }
                    this.otf(o);
                    if (this.pdb == 0) {
                        if (this.efk == bva.sva.ywb.avt) {
                            this.lri.utm()
                        } else {
                            if (this.efk == bva.sva.ywb.ung) {
                                this.lri.iss()
                            } else {
                                if (this.efk == bva.sva.ywb.rzq) {
                                    this.lri.kmw()
                                } else {
                                    if (this.efk == bva.sva.ywb.ynx) {
                                        this.lri.zox()
                                    } else {
                                        if (this.efk == bva.sva.ywb.sku) {
                                            this.lri.psk()
                                        } else {
                                            if (this.efk == bva.sva.ywb.fcg) {
                                                this.lri.joq()
                                            } else {
                                                if (this.efk == bva.sva.ywb.egq) {
                                                    this.lri.pbu()
                                                } else {
                                                    if (this.efk == bva.sva.ywb.mot) {
                                                        this.lri.czu()
                                                    } else {
                                                        if (this.efk == bva.sva.ywb.qrz) {
                                                            this.lri.qnc()
                                                        } else {
                                                            if (this.efk == bva.sva.ywb.mqv) {
                                                                this.lri.kfi()
                                                            } else {
                                                                if (this.efk == bva.sva.ywb.ngn) {
                                                                    this.lri.srv()
                                                                } else {
                                                                    if (this.efk == bva.sva.ywb.lfi) {
                                                                        this.lri.uer()
                                                                    } else {
                                                                        if (this.efk == bva.sva.ywb.mwg) {
                                                                            this.lri.gxt()
                                                                        } else {
                                                                            this.arn()
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
                        this.lri.zyh(this.pdb)
                    }
                } else {
                    if (this.xtq == 2) {} else {
                        if (this.xtq == 3) {
                            this.pwr = this.juv(o);
                            this.lri.qvh()
                        } else {
                            if (this.xtq === 6 || this.xtq === 7) {
                                this.dvp(o.substring(this.ftf))
                            } else {
                                if (this.xtq === 8) {
                                    this.bce("8")
                                } else {
                                    if (this.xtq == 9) {
                                        this.lri.yfn.ipe = o.substring(this.ftf)
                                    } else {
                                        if (this.xtq == 10) {
                                            var m = JSON.parse(o.substring(this.ftf)).Message;
                                            for (var l = 0, k = m.length; l < k; l++) {
                                                if (m[l].DisplayType == bva.ols.wku.wmy) {
                                                    this.sxf.push(m[l])
                                                }
                                            }
                                            if (this.sxf.length > 0) {
                                                this.lri.wud()
                                            }
                                        } else {
                                            this.fcq = this.vvg(o);
                                            this.lri.xic(o.substring(2))
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
    this.otf = function(t) {
        var l = null,
            n = [],
            q = null,
            v = null,
            o = null,
            m = null,
            p = null,
            k = null;
        if (this.xtq == 0) {
            l = this.prj(t);
            if (l != "") {
                n = l.split("#");
                if (n.length >= 1) {
                    q = n[0].split("|");
                    this.bpl = q[0];
                    if (q.length > 1) {
                        this.adp = q[1];
                        if (q.length > 2) {
                            this.pqz = q[2]
                        }
                    }
                    if (n.length >= 2) {
                        v = n[1].split("|");
                        if (v.length >= 1) {
                            m = v[0];
                            this.ftf = 0;
                            this.iod = this.scj(m);
                            this.jky = this.juv(m);
                            this.xyj = this.juv(m);
                            this.kun = this.juv(m);
                            this.rcj = this.prj(m);
                            if (v.length >= 2) {
                                k = v[1];
                                if (k) {
                                    this.ewm = parseFloat(k)
                                }
                            }
                        }
                    }
                }
            }
            if (bva.uug.value21.e === true && bva.uug.value21.s) {
                if (this.ewm == 0) {
                    this.bpl = ""
                } else {
                    if (this.ewm != 0 && bva.uug.value21.m == 1) {
                        this.bpl = ""
                    }
                }
            }
        } else {
            l = this.prj(t);
            if (l != "") {
                n = l.split("#");
                if (n.length > 1) {
                    m = n[1];
                    o = n[1].split("|{");
                    m = o[0];
                    if (m) {
                        this.ftf = 0;
                        this.jky = this.juv(m);
                        this.xyj = this.juv(m);
                        this.kun = this.juv(m)
                    }
                    if (o.length > 1) {
                        p = "{" + o[1];
                        var r = JSON.parse(p).Message;
                        this.szl.length = 0;
                        this.sxc.length = 0;
                        for (var s = 0, u = r.length; s < u; s++) {
                            if (r[s].DisplayType == bva.ols.wku.mtp) {
                                this.sxc.push(r[s])
                            } else {
                                if (r[s].DisplayType == bva.ols.wku.wmy) {
                                    this.szl.push(r[s])
                                }
                            }
                        }
                    }
                    if (this.sxc.length > 0) {
                        this.lri.oge()
                    }
                }
            }
        }
    };
    this.arn = function() {};
    this.play = function(l, k, m) {
        this.bce("A/u251," + l + "," + k + "," + m)
    };
    this.tbs = function() {
        this.bce("A/u254")
    };
    this.jbf = function() {
        this.bce("A/u258")
    };
    this.fgi = function(k) {
        this.bce("A/u257," + k)
    };
    this.qvl = function(l, k, m) {
        this.bce("A/u256," + l + "," + k + "," + m)
    }
}
gud.prototype = new wie;

function vau() {
    this.uwa = function(a, b) {
        this.vnv = b;
        this.yfn = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.qxl = f;
        this.jmw = e;
        this.rua = g;
        this.hdt = c;
        this.prw = d;
        this.rhm = b;
        this.wvv = new gud(this.vnv, c, f, e, g, a, d, b);
        this.wvv.uwa(this)
    };
    this.play = function(b, a, c) {
        this.wvv.play(b, a, c)
    };
    this.qvl = function(b, a, c) {
        this.wvv.qvl(b, a, c)
    };
    this.tbs = function() {
        this.wvv.tbs()
    };
    this.jbf = function() {
        this.wvv.jbf()
    };
    this.fgi = function(a) {
        this.wvv.fgi(a)
    };
    this.utm = function() {
        var c = this.wvv.efk;
        this.yfn.r1 = this.wvv.r1;
        this.yfn.r2 = this.wvv.r2;
        this.yfn.r3 = this.wvv.r3;
        this.yfn.r4 = this.wvv.r4;
        this.yfn.r5 = this.wvv.r5;
        this.yfn.r6 = this.wvv.r6;
        this.yfn.r7 = this.wvv.r7;
        this.yfn.r8 = this.wvv.r8;
        this.yfn.r9 = this.wvv.r9;
        this.yfn.iar = this.wvv.iar;
        this.yfn.oew = this.wvv.oew;
        this.yfn.dtj = this.wvv.dtj;
        this.yfn.jjz = this.wvv.jjz;
        this.yfn.xli = this.wvv.xli;
        this.yfn.bqx = this.wvv.bqx;
        if (c == bva.sva.ywb.sku || c == bva.sva.ywb.fcg || c == bva.sva.ywb.egq || c == bva.sva.ywb.mot || c == bva.sva.ywb.qrz) {
            this.yfn.r1 = this.wvv.nrg;
            this.yfn.r2 = this.wvv.kso;
            this.yfn.r3 = this.wvv.apy;
            this.yfn.r4 = this.wvv.sii;
            this.yfn.r5 = this.wvv.lih;
            this.yfn.r6 = this.wvv.aja;
            this.yfn.r7 = this.wvv.uie;
            this.yfn.r8 = this.wvv.ewv;
            this.yfn.r9 = this.wvv.elw;
            this.yfn.iar = this.wvv.ftc;
            this.yfn.oew = this.wvv.lxa;
            this.yfn.dtj = this.wvv.gqt;
            this.yfn.jjz = this.wvv.opb;
            this.yfn.xli = this.wvv.jtz;
            this.yfn.bqx = this.wvv.gzt
        }
        this.yfn.ufa = this.wvv.ipo;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.pyw = this.wvv.pyw;
        this.yfn.frn = this.wvv.frn;
        this.yfn.bmv = this.wvv.bmv;
        this.yfn.eml = this.wvv.eml;
        if (this.jpo()) {
            for (var b = 0, a = this.wvv.uoy.length; b < a && this.wvv.uoy[b] <= this.wvv.frn; b++) {
                this.yfn.uoy[b] = this.wvv.uoy[b]
            }
        } else {
            for (var b = 0, a = this.wvv.uoy.length; b < a && this.wvv.uoy[b] * this.wvv.hkr <= this.wvv.frn; b++) {
                this.yfn.uoy[b] = this.wvv.uoy[b]
            }
        }
        if (c == bva.sva.ywb.avt || ((c == bva.sva.ywb.ung || c == bva.sva.ywb.ngn) && this.wvv.win == 0) || c == bva.sva.ywb.rzq || c == bva.sva.ywb.mqv || c == bva.sva.ywb.qrz) {
            this.yfn.cbo = true
        } else {
            this.yfn.cbo = false
        }
        this.yfn.yzu = this.wvv.yzu;
        this.yfn.vnq = this.wvv.lis;
        this.yfn.nza = this.yfn.uoy[this.yfn.vnq];
        this.yfn.win = this.wvv.win;
        for (var b = 0; b < this.wvv.pqd.length; b++) {
            this.yfn.pdz[b] = this.wvv.pqd[b]
        }
        this.yfn.fpf = this.wvv.uru;
        this.yfn.edm = this.wvv.edm;
        this.yfn.lsr = this.wvv.lsr;
        this.yfn.chw = this.wvv.chw;
        this.yfn.xqz = this.wvv.xqz;
        this.yfn.ewy = this.wvv.xqz;
        this.yfn.soh = this.wvv.soh;
        this.ayp();
        this.yfn.maz();
        this.yfn.ocf(c, this.wvv.wxp, this.wvv.tnc)
    };
    this.iss = function() {
        this.yfn.mno({
            type: "roundStarted",
            sender: this.yfn.hdt,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.yfn.tyk(this.yfn.pwr)
            }
        });
        this.yfn.state = this.wvv.efk;
        this.yfn.ufa = this.wvv.ipo;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.yzu = this.wvv.yzu;
        this.yfn.vnq = this.wvv.lis;
        this.yfn.win = this.wvv.win;
        for (var a = 0; a < this.wvv.pqd.length; a++) {
            this.yfn.pdz[a] = this.wvv.pqd[a]
        }
        if (this.yfn.kfs && this.yfn.win > 0) {
            this.yfn.kfs.xlm.mom("history", "#nvs", [this.wvv.wxp])
        }
        this.yfn.dlk = false;
        this.ayp();
        this.yfn.naj();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.kmw = function() {
        this.yfn.state = this.wvv.efk;
        this.yfn.pwr = this.wvv.pwr;
        this.npi = false;
        this.ayp();
        this.yfn.svs();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.kfi = function() {
        this.yfn.mno({
            type: "roundStarted",
            sender: this.yfn.hdt,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.yfn.tyk(this.yfn.pwr)
            }
        });
        this.yfn.state = this.wvv.efk;
        this.yfn.ufa = this.wvv.ipo;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.yzu = this.wvv.yzu;
        this.yfn.vnq = this.wvv.lis;
        this.yfn.win = this.wvv.win;
        for (var a = 0; a < this.wvv.pqd.length; a++) {
            this.yfn.pdz[a] = this.wvv.pqd[a]
        }
        this.yfn.dlk = false;
        if (this.yfn.kfs && this.yfn.win > 0) {
            this.yfn.kfs.nvs(this.wvv.wxp[0], this.wvv.wxp, true)
        }
        this.ayp();
        this.yfn.cen();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.srv = function() {
        this.yfn.state = this.wvv.efk;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.win = this.wvv.win;
        if (this.yfn.kfs) {
            this.yfn.kfs.nvs(this.wvv.wxp[0], this.wvv.wxp, false)
        }
        this.yfn.tem();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.uer = function() {
        this.yfn.state = this.wvv.efk;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.win = this.wvv.win;
        this.yfn.art();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.zox = function() {
        this.yfn.mno({
            type: "roundStarted",
            sender: this.yfn.hdt,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.yfn.tyk(this.yfn.pwr)
            }
        });
        this.yfn.state = this.wvv.efk;
        this.yfn.ufa = this.wvv.ipo;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.yzu = this.wvv.yzu;
        this.yfn.vnq = this.wvv.lis;
        this.yfn.win = this.wvv.win;
        for (var a = 0; a < this.wvv.pqd.length; a++) {
            this.yfn.pdz[a] = this.wvv.pqd[a]
        }
        this.yfn.dlk = (this.wvv.xqz > this.yfn.xqz);
        this.yfn.edm = this.wvv.edm;
        this.yfn.lsr = this.wvv.lsr;
        this.yfn.chw = this.wvv.chw;
        this.yfn.xqz = this.wvv.xqz;
        this.yfn.ewy = this.wvv.xqz;
        this.yfn.soh = this.wvv.soh;
        this.ayp();
        this.yfn.xai();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.psk = function() {
        this.yfn.state = this.wvv.efk;
        this.yfn.fpf = this.wvv.uru;
        this.yfn.ufa = this.wvv.ipo;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.yzu = this.wvv.yzu;
        this.yfn.vnq = this.wvv.lis;
        this.yfn.win = this.wvv.win;
        for (var a = 0; a < this.wvv.pqd.length; a++) {
            this.yfn.pdz[a] = this.wvv.pqd[a]
        }
        this.yfn.dlk = (this.wvv.xqz > this.yfn.xqz);
        this.yfn.edm = this.wvv.edm;
        this.yfn.lsr = this.wvv.lsr;
        this.yfn.chw = this.wvv.chw;
        this.yfn.xqz = this.wvv.xqz;
        this.yfn.ewy = this.wvv.xqz;
        this.yfn.soh = this.wvv.soh;
        this.ayp();
        this.yfn.idj();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.joq = function() {
        this.yfn.state = this.wvv.efk;
        this.yfn.fpf = this.wvv.uru;
        this.yfn.ufa = this.wvv.ipo;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.yzu = this.wvv.yzu;
        this.yfn.vnq = this.wvv.lis;
        this.yfn.win = this.wvv.win;
        for (var a = 0; a < this.wvv.pqd.length; a++) {
            this.yfn.pdz[a] = this.wvv.pqd[a]
        }
        this.yfn.dlk = (this.wvv.xqz > this.yfn.xqz);
        this.yfn.ewy = this.yfn.xqz;
        this.yfn.edm = this.wvv.edm;
        this.yfn.lsr = this.wvv.lsr;
        this.yfn.chw = this.wvv.chw;
        this.yfn.xqz = this.wvv.xqz;
        this.yfn.soh = this.wvv.soh;
        this.ayp();
        this.yfn.qed();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.pbu = function() {
        this.yfn.state = this.wvv.efk;
        this.yfn.fpf = this.wvv.uru;
        this.yfn.ufa = this.wvv.ipo;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.yzu = this.wvv.yzu;
        this.yfn.vnq = this.wvv.lis;
        this.yfn.win = this.wvv.win;
        for (var a = 0; a < this.wvv.pqd.length; a++) {
            this.yfn.pdz[a] = this.wvv.pqd[a]
        }
        this.yfn.dlk = (this.wvv.xqz > this.yfn.xqz);
        this.yfn.ewy = this.yfn.xqz;
        this.yfn.edm = this.wvv.edm;
        this.yfn.lsr = this.wvv.lsr;
        this.yfn.chw = this.wvv.chw;
        this.yfn.xqz = this.wvv.xqz;
        this.yfn.soh = this.wvv.soh;
        this.ayp();
        this.yfn.lls();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.czu = function() {
        this.yfn.state = this.wvv.efk;
        this.yfn.fpf = this.wvv.uru;
        this.yfn.ufa = this.wvv.ipo;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.yzu = this.wvv.yzu;
        this.yfn.vnq = this.wvv.lis;
        this.yfn.win = this.wvv.win;
        for (var a = 0; a < this.wvv.pqd.length; a++) {
            this.yfn.pdz[a] = this.wvv.pqd[a]
        }
        if (this.yfn.kfs && this.yfn.win > 0) {
            this.yfn.kfs.xlm.mom("history", "#nvs", [this.wvv.wxp])
        }
        this.yfn.dlk = (this.wvv.xqz > this.yfn.xqz);
        this.yfn.edm = this.wvv.edm;
        this.yfn.lsr = this.wvv.lsr;
        this.yfn.chw = this.wvv.chw;
        this.yfn.xqz = this.wvv.xqz;
        this.yfn.ewy = this.wvv.xqz;
        this.yfn.soh = this.wvv.soh;
        this.ayp();
        this.yfn.uko();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.qnc = function() {
        this.yfn.state = this.wvv.efk;
        this.yfn.fpf = this.wvv.uru;
        this.yfn.ufa = this.wvv.ipo;
        this.yfn.pwr = this.wvv.pwr;
        this.yfn.yzu = this.wvv.yzu;
        this.yfn.vnq = this.wvv.lis;
        this.yfn.win = this.wvv.win;
        for (var a = 0; a < this.wvv.pqd.length; a++) {
            this.yfn.pdz[a] = this.wvv.pqd[a]
        }
        this.yfn.dlk = (this.wvv.xqz > this.yfn.xqz);
        this.yfn.edm = this.wvv.edm;
        this.yfn.lsr = this.wvv.lsr;
        this.yfn.chw = this.wvv.chw;
        this.yfn.xqz = this.wvv.xqz;
        this.yfn.ewy = this.wvv.xqz;
        this.yfn.soh = this.wvv.soh;
        this.ayp();
        this.yfn.rqz();
        this.yfn.ikb(this.wvv.tnc)
    };
    this.ayp = function() {
        this.yfn.bpl = this.wvv.bpl;
        this.yfn.adp = this.wvv.adp;
        this.yfn.pqz = this.wvv.pqz;
        this.yfn.jky = this.wvv.jky;
        this.yfn.xyj = this.wvv.xyj;
        this.yfn.kun = this.wvv.kun;
        this.yfn.rcj = this.wvv.rcj;
        if (this.yfn.xyj > 0 && this.yfn.jky < this.yfn.xyj) {
            this.yfn.vnq = this.wvv.iod
        }
        this.yfn.ewm = this.wvv.ewm
    };
    this.jpo = function() {
        return false
    }
}
vau.prototype = new rrv;

function gra() {
    var a = this;
    this.fmd = false;
    this.cqh = -1;
    this.jru = 0;
    this.sif = null;
    this.ayh = 3;
    this.uqh = 0;
    this.inn = null;
    this.udj = null;
    this.dwu = false;
    this.nwd = false;
    this.qxi = false;
    this.emk = [];
    this.gkc = null;
    this.gpu = false;
    this.bzj = [];
    this.esd = false;
    this.oek = null;
    this.xvb = null;
    this.lwo = 0;
    this.xrw = 0;
    this._y = 0;
    this._d = 0;
    this.aie = 0;
    this.lfc = 4;
    this.tvt = 2;
    this.qqo = 9;
    this.awy = true;
    this.yif = 0;
    this.yxp = -1;
    this.lbd = 0;
    this.dtu = -1;
    this.qvm = -1;
    this.icw = -1;
    this.czy = false;
    this.pmm = [];
    this.edn = 0;
    this.udp = 0;
    this.lmp = 0;
    this.jng = 89;
    this.fzt = 0;
    this.jof = 0;
    this.pxi = null;
    this.kiy = null;
    this.ayt = 0;
    this.ofn = 0;
    this.isb = [];
    this.sek = [];
    this.rlj = [];
    this.juz = [];
    this.lhk = [];
    this.uwa = function(f, k, j, c, b, d, g, e) {
        gra.prototype.uwa.call(this, f, k, j);
        this.ayh = d;
        this.yif = this.height / this.ayh;
        this.sif = b;
        this.udj = g;
        this.xrw = e;
        this.lwo = Math.round(c);
        this.inn = [];
        this.uqh = 0;
        this.aie = 0;
        this.qqo = Math.round(this.lwo / 20);
        this.lfc = Math.round(this.lwo / 12);
        this.tvt = Math.round(this.lwo / 2);
        this.bzj.length = 0
    };
    this.raa = function(b) {
        try {
            this.oek = b.ksx;
            this.xvb = b.dqj
        } catch (c) {
            console.error(c)
        }
    };
    this.qjx = function(c, b) {
        gra.prototype.qjx.call(this, c);
        try {
            this.lwo = Math.round(b);
            this.qqo = Math.round(this.lwo / 20);
            this.lfc = Math.round(this.lwo / 12);
            this.tvt = Math.round(this.lwo / 2);
            this._y = this.y + (this.ayh - 1) * this.yif
        } catch (d) {
            console.error(d)
        }
    };
    this.rap = function(b, e) {
        var d = b - this.x - ((this.parent.soc()) ? this.parent.uhn.uhd.oue.x : 0),
            c = e - this.y - ((this.parent.soc()) ? this.parent.uhn.uhd.oue.y : 0);
        if (d >= 0 && d <= this.width && c >= 0 && c <= this.height) {
            if (this.parent.yyb && this.parent.gle && !this.parent.qpy && !this.fmd && this.parent.wej()) {
                this.dwf()
            } else {
                if (!this.parent.yyb) {
                    if (bva.uug.value43) {
                        if (this.parent.rkt()) {
                            this.parent.wmt();
                            if (this.parent.qzy) {
                                this.parent.qzy.xlm.hui("buttons", "#cou", [true])
                            }
                        }
                    } else {
                        if (this.esd) {
                            this.yxp = c;
                            this.lbd = 0;
                            this.parent.tuv();
                            this.parent.sxz();
                            this.parent.zkm()
                        }
                    }
                }
            }
            return true
        }
        return false
    };
    this.fwp = function() {
        if (this.yxp >= 0) {
            this.kfv();
            return true
        }
        return false
    };
    this.vgh = function(b, f, c) {
        var e = b - this.x - ((this.parent.soc()) ? this.parent.uhn.uhd.oue.x : 0),
            d = f - this.y - ((this.parent.soc()) ? this.parent.uhn.uhd.oue.y : 0);
        if (this.yxp >= 0) {
            if (e >= 0 && e <= this.width && d >= 0 && d <= this.height) {
                if (d > this.yxp) {
                    this.fzt = xpv(this.vlr)
                } else {
                    if (d < this.yxp) {
                        this.fzt = xpv(this.bnq)
                    }
                }
                this.yxp = d;
                if (c) {
                    clearTimeout(this.jof);
                    this.jof = setTimeout(this.kfv, 500)
                }
                return true
            } else {
                this.kfv();
                return true
            }
        }
        return false
    };
    this.egc = function() {
        var g = 0,
            k = 0,
            d = 0;
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        if (this.uqh >= 0) {
            this.context2D.save();
            if (this.parent.qdx === false) {
                this.context2D.beginPath();
                this.context2D.rect(this.x, this.y, this.width, this.height);
                this.context2D.closePath();
                this.context2D.clip()
            }
            if (this.kiy != null) {
                this.context2D.drawImage(this.kiy, this.x + this.ayt, this.y + this.ofn, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            for (var f = 0, b = this.sek.length; f < b; f++) {
                if (this.sek[f]) {
                    this.context2D.drawImage(this.sek[f].qza, this.sek[f].gsp * this.width, 0, this.width, this.sek[f].qza.height, this.x, this.y + f * this.yif, this.width, this.sek[f].qza.height)
                }
            }
            g = this._y - this.height + this.lbd;
            for (var f = 0; f < this.ayh + 1; f++) {
                k = this.uqh + f;
                d = this.inn[k];
                try {
                    if (this.qxi === false) {
                        this.context2D.drawImage(this.sif[d], this.x, g)
                    } else {
                        this.context2D.drawImage(this.emk[d], this.x, g)
                    }
                } catch (l) {
                    if (!this.parent.kdt) {
                        console.error("can not display image " + this.sif.length + "" + d + "" + k + "" + this.inn.length + "" + this.inn)
                    }
                }
                g += this.yif
            }
            g = this._y - this.height;
            for (var f = 0; f < this.ayh + 1; f++) {
                k = this.uqh + f;
                d = this.inn[k];
                try {
                    for (var c = 0, b = this.pmm.length; c < b; c++) {
                        if (this.pmm[c] == d && this.isb[d] && (this.isb[d].mpv || !this.isb[d].hna)) {
                            this.context2D.drawImage(this.isb[d].qza, this.isb[d].gsp * this.width, 0, this.width, this.isb[d].qza.height, this.x, g + (this.yif - this.isb[d].qza.height) / 2, this.width, this.isb[d].qza.height);
                            break
                        }
                    }
                } catch (l) {
                    if (!this.parent.kdt) {
                        console.error("can not display image " + this.isb.length + "" + d + "" + k + "" + this.inn.length + "" + this.inn)
                    }
                }
                g += this.yif
            }
            for (var f = 0, b = this.bzj.length; f < b; f++) {
                if (this.bzj[f]) {
                    this.context2D.drawImage(this.bzj[f], this.x, this.y + f * this.yif)
                }
            }
            for (var f = 0, b = this.rlj.length; f < b; f++) {
                if (this.rlj[f]) {
                    this.context2D.drawImage(this.rlj[f].qza, this.rlj[f].gsp * this.width, 0, this.width, this.rlj[f].qza.height, this.x, this.y + f * this.yif, this.width, this.rlj[f].qza.height)
                }
            }
            if (this.dwu) {
                this.context2D.fillStyle = this.oek;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.nwd) {
                this.context2D.fillStyle = this.xvb;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.pxi != null) {
                this.context2D.drawImage(this.pxi, this.x, this.y)
            }
            this.context2D.restore();
            if (this.wxt && this.ygh) {
                this.wxt.drawImage(this.ygh, this.x, this.y)
            }
        }
    };
    this.yxb = function(b) {
        this.qvm = -1;
        this.icw = -1;
        this.jru = b;
        this.fmd = false;
        this.dtu = -1;
        this.uqh = 0;
        this.awy = true;
        this.cqh = -1;
        this.inn.length = this.xrw;
        for (var c = 0; c <= this.ayh; c++) {
            this.inn[this.inn.length - 1 - this.ayh + c] = this.inn[c]
        }
        this.uqh = this.inn.length - 1 - this.ayh;
        this.awy = true;
        this.dih(false)
    };
    this.wqr = function(d, f) {
        for (var b = 0; b < this.xrw; b++) {
            if (b < this.udj.length) {
                this.inn[b] = this.udj[b]
            } else {
                var c = b % this.udj.length;
                this.inn[b] = this.udj[c]
            }
        }
        if (f) {
            var e = (this.ayh > 1) ? d - 2 : d - 1;
            if (e < 0) {
                e = this.udj.length + e
            }
            for (var b = 0; b <= this.ayh; b++) {
                this.inn[b] = this.udj[e];
                e += 1;
                if (e == this.udj.length) {
                    e = e - this.udj.length
                }
            }
        }
        this.uqh = 0;
        this._y = this.y + (this.ayh - 1) * this.yif
    };
    this.dwf = function() {
        this.gpu = true;
        if (this.uqh > this.ayh) {
            var c = this.uqh;
            var d = this.ayh;
            for (var b = 0; b <= this.ayh; b++) {
                this.inn[d + b + 1] = this.inn[c + b]
            }
            this.uqh = this.ayh + 1
        }
    };
    this.kdo = function() {
        this.uqh = 0;
        this.dtu = 0;
        this.etx()
    };
    this.vlr = function() {
        if (a.lbd < a.yif / 4) {
            a.lbd = a.lbd + 2;
            if (a.parent.qdx === false) {
                a.egc()
            } else {
                a.parent.qqm()
            }
        }
    };
    this.bnq = function() {
        if (a.lbd > 0) {
            a.lbd = a.lbd - 2;
            if (a.parent.qdx === false) {
                a.egc()
            } else {
                a.parent.qqm()
            }
        }
    };
    this.kfv = function() {
        clearTimeout(a.jof);
        a.parent.knv();
        if (a.lbd > 0) {
            a.bnq();
            a.fzt = xpv(a.kfv)
        } else {
            a.zrj()
        }
    };
    this.zrj = function() {
        coe(this.fzt);
        this.yxp = -1;
        this.lbd = 0
    };
    this.rtk = function(c) {
        if (this.lbd > 0) {
            this.lbd = 0
        }
        if (this.ayh === 1 && this.dtu < 0 && this.qvm >= 0 && this._y === this.y + this.height - this.lwo) {
            this.dno(this.qvm, this.icw, this.czy)
        }
        if (this.uqh >= 0) {
            if (this.uqh > 0) {
                if (!this.gpu || !this.parent.zmv) {
                    this._y += this.lwo;
                    this._d += this.lwo
                } else {
                    this._y += (this.lwo + this.lwo / 2);
                    this._d += (this.lwo + this.lwo / 2)
                }
            } else {
                if (this.uqh == 0) {
                    if (this.dtu == -1) {
                        this.cqh += 1;
                        this.uqh = this.jru - 1 - this.ayh;
                        this._y += this.lwo;
                        this._d += this.lwo;
                        for (var b = 0; b <= this.ayh; b++) {
                            this.inn[this.jru - 1 - this.ayh + b] = this.inn[b]
                        }
                    } else {
                        if (this.aie < this.tvt && this.awy) {
                            this._y += this.lfc;
                            this.aie += this.lfc;
                            if (this.aie >= this.tvt) {
                                this.awy = false
                            }
                        } else {
                            if (this.aie > 0 && !this.awy) {
                                this._y -= this.qqo;
                                this.aie -= this.qqo;
                                if (this.aie <= 0) {
                                    this.fmd = true;
                                    this.gpu = false;
                                    if (typeof this.kxe === "function") {
                                        this.kxe()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this._d > this.yif - this.lwo && this.uqh > 0) {
                if (c && this.dtu >= 0) {
                    if (this.uqh == 1) {
                        if (typeof this.uuw === "function") {
                            this.uuw()
                        }
                        if (this.gkc) {
                            this.gkc.play()
                        }
                        if (!this.parent.woa && !this.parent.yux) {
                            if (this.xts()) {
                                this.vga()
                            }
                        }
                    }
                }
                this.uqh -= 1;
                this._d = 0;
                this._y = this.y + (this.ayh - 1) * this.yif
            }
        }
    };
    this.fzs = function(e, c, f) {
        for (var d = 0, b = this.rlj.length; d < b; d++) {
            if (this.rlj[d]) {
                if (this.rlj[d].itd === false && this.rlj[d].gsp < this.rlj[d].wrz - 1) {
                    this.rlj[d].gsp += 1
                } else {
                    if (this.rlj[d].itd === true && this.rlj[d].gsp > 0) {
                        this.rlj[d].gsp -= 1
                    } else {
                        if (this.rlj[d].loop === true) {
                            this.rlj[d].gsp = (this.rlj[d].itd === false) ? 0 : this.rlj[d].wrz - 1
                        } else {
                            if (this.rlj[d].xwd === true) {
                                this.rlj[d] = null
                            }
                        }
                    }
                }
            }
        }
        if (f && f === true) {
            this.egc()
        }
    };
    this.jvw = function() {
        for (var c = 0, b = this.rlj.length; c < b; c++) {
            if (this.rlj[c] && ((this.rlj[c].itd === false && this.rlj[c].gsp < this.rlj[c].wrz - 1) || (this.rlj[c].itd === true && this.rlj[c].gsp > 0))) {
                return true
            }
        }
        return false
    };
    this.hqn = function(d) {
        for (var c = 0, b = this.sek.length; c < b; c++) {
            if (this.sek[c]) {
                if (this.sek[c].itd === false && this.sek[c].gsp < this.sek[c].wrz - 1) {
                    this.sek[c].gsp += 1
                } else {
                    if (this.sek[c].itd === true && this.sek[c].gsp > 0) {
                        this.sek[c].gsp -= 1
                    } else {
                        if (this.sek[c].loop === true) {
                            this.sek[c].gsp = (this.sek[c].itd === false) ? 0 : this.sek[c].wrz - 1
                        } else {
                            if (this.sek[c].xwd === true) {
                                this.sek[c] = null
                            }
                        }
                    }
                }
            }
        }
        if (d && d === true) {
            this.egc()
        }
    };
    this.cnv = function() {
        for (var c = 0, b = this.sek.length; c < b; c++) {
            if (this.sek[c] && ((this.sek[c].itd === false && this.sek[c].gsp < this.sek[c].wrz - 1) || (this.sek[c].itd === true && this.sek[c].gsp > 0))) {
                return true
            }
        }
        return false
    };
    this.asj = function(d, c, b) {
        this.qvm = d;
        this.icw = c;
        this.czy = b;
        if (this.ayh > 1) {
            this.dno(this.qvm, this.icw, this.czy)
        }
    };
    this.dno = function(j, g, d) {
        var k = 0,
            c = 0,
            e = 0,
            b = [];
        this.cqh = -1;
        this.dtu = j;
        k = (this.ayh > 1) ? this.dtu - 2 : this.dtu - 1;
        if (k < 0) {
            k = this.udj.length + k
        }
        c = (d === true) ? this.inn.length + g : this.ayh + g + 1;
        for (var f = 0; f <= this.ayh; f++) {
            e = this.uqh + f;
            if (e >= this.inn.length) {
                e = e - this.inn.length
            }
            b[f] = this.inn[e]
        }
        for (var f = 0; f < c; f++) {
            this.inn[f] = this.udj[k];
            k += 1;
            if (k == this.udj.length) {
                k = k - this.udj.length
            }
        }
        this.uqh = this.ayh + g + 1;
        for (var f = 0; f <= this.ayh; f++) {
            this.inn[this.uqh + f] = b[f]
        }
        this.dih(true);
        this.qvm = -1;
        this.icw = -1;
        this.czy = false
    };
    this.dih = function(k) {
        var d = -1,
            n = -1,
            b = 0,
            o = true,
            e = false,
            m = 0,
            l = 0;
        if (this.juz.length > 0 && this.lhk.length > 0) {
            if (k) {
                for (var g = 0; g < this.juz.length; g++) {
                    for (var f = 0; f < this.juz[g].length - 1; f++) {
                        if (this.inn[this.ayh] == this.juz[g][f]) {
                            d = f;
                            n = g
                        }
                    }
                }
                if (n >= 0 && d >= 0 && d < this.juz[n].length - 1) {
                    if (this.ayh + this.juz[n].length - d - 1 < this.uqh) {
                        for (var g = d + 1, f = 1; g < this.juz[n].length; g++, f++) {
                            this.inn[this.ayh + f] = this.juz[n][g]
                        }
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.juz.length; g++) {
                for (var f = 1; f < this.juz[g].length; f++) {
                    if (this.inn[this.uqh] == this.juz[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d > 0) {
                if (this.uqh - d > this.ayh) {
                    for (var g = d - 1, f = 1; g >= 0; g--, f++) {
                        this.inn[this.uqh - f] = this.juz[n][g]
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.juz.length; g++) {
                for (var f = 0; f < this.juz[g].length; f++) {
                    if (this.inn[this.uqh + this.ayh] == this.juz[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d >= 0 && d < this.juz[n].length - 1) {
                if (!k) {
                    for (var g = d + 1; g < this.juz[n].length; g++) {
                        this.inn[m++] = this.juz[n][g]
                    }
                } else {
                    if (this.uqh + this.ayh + this.juz[n].length - d - 1 < this.inn.length) {
                        for (var g = d + 1, f = 1; g < this.juz[n].length; g++, f++) {
                            this.inn[this.uqh + this.ayh + f] = this.juz[n][g]
                        }
                    }
                }
            }
            m = (k) ? this.ayh + 1 : m;
            l = (k) ? this.inn.length : this.uqh;
            for (var c = m; c < l; c++) {
                if (k == false || (c < this.uqh || c > this.uqh + this.ayh)) {
                    d = -1;
                    n = -1;
                    for (var g = 0; g < this.juz.length; g++) {
                        for (var f = 0; f < this.juz[g].length; f++) {
                            if (this.inn[c] == this.juz[g][f]) {
                                d = f;
                                n = g
                            }
                        }
                    }
                    if (n >= 0 && d >= 0) {
                        o = true;
                        b = 0;
                        for (var g = 0; g < this.juz[n].length && o; g++) {
                            if (this.inn[c - d + g] != this.juz[n][g]) {
                                o = false
                            } else {
                                b++
                            }
                        }
                        if (o) {
                            c += this.juz[n].length - d - 1
                        } else {
                            if (b == 0) {
                                this.inn[c] = this.lhk[Math.floor(Math.random() * this.lhk.length)]
                            } else {
                                if (b == this.juz[n].length - 1 && (c + b < this.uqh || c + b > this.uqh + this.ayh) && c + b < this.inn.length) {
                                    e = false;
                                    for (var g = 0; g < this.juz.length && !e; g++) {
                                        for (var f = 0; f < this.juz[g].length && !e; f++) {
                                            if (this.inn[c + b] == this.juz[g][f]) {
                                                e = true
                                            }
                                        }
                                    }
                                    if (!e) {
                                        this.inn[c + b] = this.juz[n][this.juz[n].length - 1];
                                        c += b
                                    } else {
                                        this.inn[c] = this.lhk[Math.floor(Math.random() * this.lhk.length)]
                                    }
                                } else {
                                    for (var q = 0; q < b; q++) {
                                        if (c + q < this.uqh || c + q > this.uqh + this.ayh) {
                                            this.inn[c + q] = this.lhk[Math.floor(Math.random() * this.lhk.length)]
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
    this.zjd = function(b) {
        this.esd = b
    };
    this.kca = function() {
        return this.esd
    };
    this.xts = function() {
        for (var c = 0, b = this.pmm.length; c < b; c++) {
            if (this.pmm[c] >= 0) {
                return true
            }
        }
        return false
    };
    this.iub = function(b) {
        this.pmm = b
    };
    this.qxp = function(b) {
        return this.pmm
    };
    this.vga = function() {
        for (var d = 0, b = this.pmm.length; d < b; d++) {
            var c = this.isb[this.pmm[d]];
            if (c) {
                c.mpv = true;
                c.std = c.loop;
                c.hna = c.xwd
            }
        }
        if (this.parent.qdx === false) {
            this.egc()
        } else {
            this.parent.qqm()
        }
        this.lmp = 0;
        this.udp = new Date().getTime();
        this.jpu()
    };
    this.etx = function() {
        for (var c = 0, b = this.isb.length; c < b; c++) {
            if (this.isb[c]) {
                this.isb[c].mpv = false
            }
        }
        clearTimeout(this.edn)
    };
    this.orv = function() {
        for (var c = 0, b = this.isb.length; c < b; c++) {
            if (this.isb[c]) {
                this.isb[c].std = false
            }
        }
    };
    this.wyo = function() {
        for (var c = 0, b = this.isb.length; c < b; c++) {
            if (this.isb[c]) {
                this.isb[c].hna = true;
                this.isb[c].gsp = 0
            }
        }
    };
    this.avu = function() {
        for (var c = 0, b = this.isb.length; c < b; c++) {
            if (this.isb[c] && this.isb[c].mpv) {
                return true
            }
        }
        return false
    };
    this.jpu = function() {
        var f = true,
            d = null;
        a.lmp++;
        for (var e = 0, b = a.pmm.length; e < b; e++) {
            d = a.isb[a.pmm[e]];
            if (d && d.mpv) {
                d.gsp = (d.gsp < d.wrz - 1) ? d.gsp + 1 : (d.hna) ? 0 : d.gsp;
                if ((d.gsp === 0 && d.std === false) || (d.gsp === d.wrz - 1 && d.hna === false)) {
                    d.mpv = false
                }
                if (f === true && d.mpv === true) {
                    f = false
                }
            }
        }
        if (a.parent.qdx === false) {
            a.egc()
        } else {
            a.parent.qqm()
        }
        if (f === false) {
            var c = (a.lmp * a.jng - (new Date().getTime() - a.udp));
            if (c < 2) {
                c = 0
            }
            a.edn = setTimeout(a.jpu, c)
        } else {
            clearTimeout(a.edn);
            a.parent.mho()
        }
    };
    this.dau = function(d) {
        for (var c = 0, b = d.length; c < b; c++) {
            if (d[c]) {
                this.isb[c] = {};
                this.isb[c].qza = d[c].qza;
                this.isb[c].loop = d[c].loop;
                this.isb[c].xwd = d[c].xwd;
                this.isb[c].wrz = this.isb[c].qza.width / this.width;
                this.isb[c].gsp = 0;
                this.isb[c].mpv = false;
                this.isb[c].std = false;
                this.isb[c].hna = true
            }
        }
    };
    this.vie = function(b, c, d) {
        this.kiy = b;
        this.ayt = c;
        this.ofn = d
    };
    this.rqd = function(b) {
        this.pxi = b
    };
    this.axz = function(f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.rlj[f] = {
            qza: e,
            gsp: 0,
            wrz: e.width / this.width,
            loop: b,
            xwd: d,
            itd: c
        }
    };
    this.pcq = function() {
        return this.rlj
    };
    this.uyw = function(f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.sek[f] = {
            qza: e,
            gsp: 0,
            wrz: e.width / this.width,
            loop: b,
            xwd: d,
            itd: c
        }
    };
    this.vjb = function() {
        return this.sek
    };
    this.zcy = function(g, c) {
        this.juz = [];
        this.lhk = [];
        for (var f = 0, b = g.length; f < b; f++) {
            this.juz[f] = [];
            for (var e = 0, d = g[f].length; e < d; e++) {
                this.juz[f][e] = g[f][e]
            }
        }
        for (var f = 0, b = c.length; f < b; f++) {
            this.lhk[f] = c[f]
        }
    };
    this.uuw = null;
    this.kxe = null
}
gra.prototype = new tgm;
bva.sva = {
    ywb: {
        avt: 0,
        opa: 1,
        ujd: 2,
        ung: 3,
        rzq: 4,
        ynx: 5,
        sku: 6,
        ngn: 7,
        lfi: 8,
        mqv: 9,
        fcg: 10,
        egq: 11,
        mot: 12,
        qpf: 13,
        qrz: 14,
        prd: 15,
        ugn: 16,
        kno: 20,
        oym: 21,
        zam: 22,
        xpe: 23,
        bzp: 24,
        jvf: 25,
        zgx: 30,
        ibb: 31,
        cyh: 32,
        ppw: 33,
        mwg: 68
    }
};

function axb() {
    this.dou = null;
    this.wce = null;
    this.stl = null;
    this.lhh = null;
    this.vvn = null;
    this.tlk = [];
    this.qzy = null;
    this.rko = null;
    this.rvt = null;
    this.kfs = null;
    this.dmv = null;
    this.rci = null;
    this.vii = null;
    this.qve = null;
    this.ufa = [];
    this.pdz = [];
    this.win = 0;
    this.nza = 1;
    this.vnq = 0;
    this.totalBet = 1000;
    this.uoy = [];
    this.pyw = 0;
    this.frn = 0;
    this.yzu = 10;
    this.pwr = 0;
    this.poh = 0;
    this.pqd = [];
    this.jfa = 0;
    this.sob = -1;
    this.trb = -1;
    this.rnh = -1;
    this.r1 = [];
    this.r2 = [];
    this.r3 = [];
    this.r4 = [];
    this.r5 = [];
    this.r6 = [];
    this.r7 = [];
    this.r8 = [];
    this.r9 = [];
    this.iar = [];
    this.oew = [];
    this.dtj = [];
    this.jjz = [];
    this.xli = [];
    this.bqx = [];
    this.qwc = 3;
    this.bzs = 5;
    this.fyd = [];
    this.eml = 1;
    this.bmv = 1;
    this.gyb = 1;
    this.ygv = [];
    this.fpf = null;
    this.ptn = false;
    this.chw = 0;
    this.soh = 1;
    this.xqz = 0;
    this.ewy = 0;
    this.edm = 0;
    this.lsr = 0;
    this.wex = true;
    this.dlk = false;
    this.cbo = false;
    this.evb = false;
    this.zhn = false;
    this.chz = false;
    this.vuh = false;
    this.wdt = 1;
    this.tol = true;
    this.bpl = "";
    this.bmt = false;
    this.cqz = false;
    this.rjz = false;
    this.nnv = true;
    this.hnt = false;
    this.xyj = 0;
    this.jky = 0;
    this.kun = 0;
    this.rcj = "";
    this.adp = "";
    this.pqz = "";
    this.utk = null;
    this.woa = true;
    this.iax = false;
    this.yyb = false;
    this.kaw = 20;
    this.jha = true;
    this.gle = false;
    this.fyq = false;
    this.kku = [15, 20, 25, 30, 35];
    this.ves = [8, 8, 8, 8, 8];
    this.fbm = [0, 0, 0, 0, 0];
    this.jhc = this.kku;
    this.qpu = 16;
    this.xdo = 16;
    this.isg = this.qpu;
    this.zmu = 12;
    this.jno = 0;
    this.lbo = 0;
    this.sif = [];
    this.zmv = true;
    this.gex = false;
    this.yxy = false;
    this.soa = false;
    this.xth = true;
    this.brs = 0;
    this.izy = 0;
    this.ich = [];
    this.gwk = true;
    this.krz = false;
    this.zca = false;
    this.gpd = false;
    this.lrm = false;
    this.nga = false;
    this.scn = 1;
    this.xbn = 400;
    this.hcf = 200;
    this.krc = 100;
    this.zpv = true;
    this.mnp = true;
    this.hhi = false;
    this.mbf = [];
    this.vjc = 50;
    this.vbj = null;
    this.smm = null;
    this.ipd = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.bkp = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.cns = false;
    this.cho = 0;
    this.yuf = 0;
    this.mfm = -1;
    this.zcl = 0;
    this.fjp = false;
    this.qbj = false;
    this.ikx = -1;
    this.vfq = false;
    this.qoz = true;
    this.ufe = 3;
    this.ohg = false;
    this.dld = 0;
    this.asz = true;
    this.ovw = 330;
    this.ivv = [];
    this.fhc = null;
    this.cci = null;
    this.szx = [
        [2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1],
        [3, 3, 3, 3, 3],
        [1, 2, 3, 2, 1],
        [3, 2, 1, 2, 3]
    ];
    this.qxf = [];
    this.syv = 1;
    this.zls = 5;
    this.axq = 1;
    this.ssi = 5;
    this.xqi = true;
    this.gyv = 0;
    this.puo = 0;
    this.eow = 30;
    this.slo = 50;
    this.rgm = false;
    this.vob = 0;
    this.zxv = 0;
    this.xre = false;
    this.atk = true;
    this.boi = 0;
    this.qqs = 0;
    this.ujy = false;
    this.nri = 0;
    this.yex = false;
    this.mlk = true;
    this.hem = false;
    this.fgi = false;
    this.cqy = null;
    this.qpy = false;
    this.ktq = true;
    this.qoj = 0;
    this.drc = 0;
    this.agh = 0;
    this.gou = 0;
    this.xue = true;
    this.nvo = null;
    this.zfj = false;
    this.pkz = false;
    this.bjl = true;
    this.tgk = "";
    this.xxc = false;
    this.cgm = -1;
    this.aqk = 0;
    this.zdo = 0;
    this.zxp = 0;
    this.bnm = 0;
    this.id = 0;
    this.zup = 0;
    this.oqv = 0;
    this.afn = 0;
    this.vxv = 0;
    this.zge = 0;
    this.zri = -1;
    this.eyx = 0;
    this.gll = 0;
    this.vhq = -1;
    this.fbf = 0;
    this.vfy = 0;
    this.pmr = -1;
    this.mno = function(b) {
        if (!bva.mij.kdt) {
            bva.kgg.mno(b)
        }
    };
    this.fqs = function() {
        var b = new kck();
        b.uwa();
        return b
    };
    this.twt = function() {
        this.pvb = new vbi()
    };
    this.hve = function() {
        this.yuh();
        var f = [];
        if (!(this.xyj > 0 && this.jky < this.xyj)) {
            while (this.vnq < this.ima()) {
                this.vnq++
            }
            var e = this.faw(this.cbo);
            if (this.vnq > e) {
                var d = (e < 0) ? 0 : e;
                this.vnq = d
            }
        }
        this.nza = this.uoy[this.vnq];
        this.totalBet = this.eik();
        this.rtx();
        this.pwv();
        this.xdr();
        for (var c = 0, b = this.eyo.pnx("symb"); c < b; c++) {
            this.sif[c] = this.eyo.jgz("symb" + c)
        }
        if (bva.uug.value38) {
            f[bva.os.dfl] = "w";
            f[bva.os.wuv] = "l";
            f[bva.os.mkz] = "m";
            f[bva.os.zgr] = "i";
            f[bva.os.nik] = "a";
            this.zmv = bva.uug.value38[f[bva.kgg.kpx]]
        }
    };
    this.ple = function() {
        this.deg();
        this.tqm();
        this.tkv();
        this.roa();
        this.pex();
        this.kcw();
        if (this.mlk) {
            this.lzv()
        }
        if (this.uhn.lcx) {
            this.wez();
            this.lqw()
        }
        if (this.uhn.enp && !(this.xyj > 0 && this.jky < this.xyj)) {
            this.qoi();
            if (this.cli()) {
                this.sjr()
            }
        }
        if (this.uhn.qsn) {
            this.pna();
            if (!this.uhn.uzt) {
                this.wpn()
            }
        }
        if (this.uhn.gic) {
            this.zcr()
        }
        if (this.kdt) {
            this.uyc()
        } else {
            this.csy();
            if (this.uhn.jgj) {
                this.aga()
            }
            if (this.dqq()) {
                this.xsm()
            }
            if (this.znt()) {
                this.rah()
            }
            if (this.ruj() != null && !this.taj()) {
                this.ypr(this.ruj())
            }
        }
        if (!(this.kdt && !this.xmr)) {
            this.bkn();
            this.nuh()
        }
        if (this.uhn.uzt) {
            this.abn(this.ruj())
        }
        this.plq();
        if (!this.kdt) {
            this.ivb();
            this.mlj()
        }
        if (!this.xmr) {
            this.vco()
        }
    };
    this.maz = function() {
        if (!this.zjj) {
            if (this.gdw === false) {
                this.fzk.style.marginTop = (-this.height / 2 + this.gec()) + "px";
                this.fzk.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.fzk.style.left = "0px";
                this.fzk.style.top = "0px";
                this.fzk.style.marginTop = ((this.jqs - this.height) / 2 + this.gec()) + "px";
                this.fzk.style.marginLeft = ((this.kqv - this.width) / 2) + "px"
            }
            this.fzk.style.width = (this.width > this.kqv) ? this.kqv + "px" : this.width + "px";
            this.fzk.style.height = (this.height > this.jqs) ? this.jqs + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            this.dmv = document.createElement("canvas");
            this.dmv.width = this.uhn.vwh.oue.width;
            this.dmv.height = this.uhn.vwh.oue.height;
            this.rci = this.dmv.getContext("2d");
            if (this.soc() === true && typeof WebGL2D != "undefined") {
                try {
                    this.uhd = document.getElementById("canvas2");
                    this.uhd.width = Math.round(this.uhn.uhd.oue.width);
                    this.uhd.height = Math.round(this.uhn.uhd.oue.height);
                    WebGL2D.enable(this.uhd);
                    this.iwn = this.uhd.getContext("webgl-2d");
                    this.qdx = true;
                    this.vii = document.createElement("canvas");
                    this.vii.width = this.uhn.vwh.oue.width;
                    this.vii.height = this.uhn.vwh.oue.height;
                    this.qve = this.vii.getContext("2d")
                } catch (b) {
                    this.uhd = null;
                    this.iwn = null;
                    this.qdx = false
                }
            }
            if (this.kxy) {
                this.kxy.style.width = this.width + "px";
                this.kxy.style.height = this.height + "px"
            }
            this.offsetLeft = this.fzk.offsetLeft;
            this.offsetTop = this.fzk.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.zjj = true
        }
    };
    this.plq = function() {};
    this.pna = function() {
        axb.prototype.pna.call(this);
        var b = this.xqp.whx("topi");
        try {
            if (b) {
                if (bva.uug.value57 === bva.ui.wkn || this.ruj() != null) {
                    b.fgj("language", this.eyo.jgz("icon_l"), sessionStorage.sessionValue1, [bva.language.EN, bva.language.DE, bva.language.RU, bva.language.EE, bva.language.ES, bva.language.TR, bva.language.CZ, bva.language.GR, bva.language.AT, bva.language.US, bva.language.BG, bva.language.CO, bva.language.MX, bva.language.CL, bva.language.VE, bva.language.BR, bva.language.GE, bva.language.HU, bva.language.RO, bva.language.PT, bva.language.FR, bva.language.HR, bva.language.IT, bva.language.SE])
                }
                if (this.taj() === false) {
                    b.xlc("help", new String("?"), true)
                }
                if (bva.uug.value27 && this.tgt) {
                    b.fgj("audio", this.eyo.jgz("icon_a"), this.rnr[this.kek], this.rnr);
                    if (this.agr() === true) {
                        b.xlc("melody", this.eyo.jgz("icon_m"), this.nnv)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && bva.kgg.zai()) {
                    b.xlc("fullscreen", this.eyo.jgz("icon_f"), this.zdw)
                }
                if (bva.uug.value28 && this.ktq) {
                    b.xlc("turbo", this.eyo.jgz("icon_t"), this.qpy)
                }
                b.xlc("auto", this.eyo.jgz("icon_as"), this.zhn);
                b.xlc("gamble", this.eyo.jgz("icon_g"), this.fgi)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.wpn = function() {
        axb.prototype.wpn.call(this);
        var c = this.xqp.whx("topb");
        try {
            if (c) {
                if ((bva.uug.value5.length > 1) && (bva.uug.value57 === bva.ui.wkn || this.ruj() != null)) {
                    c.ekj("language", this.language.language, this.jxa(bva.uug.value5[this.afx]), this.zwb, this.pvb.language, 0, 1)
                }
                if (bva.uug.value27 && this.tgt) {
                    c.ekj("audio", this.language.audio, this.eyo.jgz("btn_a"), this.smk, this.pvb.audio, this.kek, this.rnr.length);
                    if (this.agr() === true) {
                        c.ekj("melody", this.language.ucf, this.eyo.jgz("btn_mu"), this.wuu, this.pvb.kka, (this.nnv) ? 1 : 0, 2)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && bva.kgg.zai()) {
                    c.ekj("fullscreen", this.language.zdw, this.eyo.jgz("btn_f"), (bva.kgg.tdi) ? this.duw : this.fpl, this.pvb.zdw, (this.zdw) ? 1 : 0, 2)
                }
                if (bva.uug.value28 && this.ktq) {
                    c.ekj("turbo", this.language.qpy, this.eyo.jgz("btn_t"), this.pea, this.pvb.qpy, (this.qpy) ? 1 : 0, 2)
                }
                c.ihr("help", this.language.zys, this.eyo.jgz("btn_p"), this.xnz, this.pvb.iog);
                if (this.adp != "" && (bva.uug.value81 && bva.uug.value81.g === true)) {
                    c.ihr("rules", this.language.nbc, this.eyo.jgz("btn_gr"), this.zsj, this.pvb.mgf)
                }
                if (bva.uug.value12 && !this.sgm()) {
                    c.ihr("history", this.language.xfn, this.eyo.jgz("btn_h"), this.ure, this.pvb.xfn)
                }
                if (bva.uug.value36 && !this.sgm()) {
                    c.ihr("statistic", this.language.bml, this.eyo.jgz("btn_st"), this.nvm, this.pvb.bml)
                }
                c.ncu()
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.abn = function(b) {
        axb.prototype.abn.call(this, b);
        var d = this.xqp.whx("settings"),
            e = "",
            c = 0;
        if (d) {
            if (bva.uug.value5.length > 1) {
                c++;
                d.ekj("language", this.language.language, this.jxa(bva.uug.value5[this.afx]), this.zwb, 0, 1)
            }
            if (bva.uug.value27 && this.tgt) {
                c++;
                d.ekj("audio", this.language.audio, this.eyo.jgz("btn_a"), this.smk, this.kek, this.rnr.length);
                if (this.agr() === true) {
                    c++;
                    d.ekj("melody", this.language.ucf, this.eyo.jgz("btn_mu"), this.wuu, (this.nnv) ? 1 : 0, 2)
                }
            }
            if (sessionStorage.sessionValue14 == "true" && bva.kgg.zai()) {
                c++;
                d.ekj("fullscreen", this.language.zdw, this.eyo.jgz("btn_f"), this.duw, (this.zdw) ? 1 : 0, 2)
            }
            if (bva.uug.value28 && this.ktq && c < 4) {
                d.ekj("turbo", this.language.qpy, this.eyo.jgz("btn_t"), this.pea, (this.qpy) ? 1 : 0, 2)
            }
            d.ekj("gamble", this.language.fgi, this.eyo.jgz("btn_g"), this.kuk, (this.fgi) ? 1 : 0, 2);
            if (this.msp[this.ngt] === bva.xoc.cil) {
                e = this.language.left
            } else {
                if (this.msp[this.ngt] === bva.xoc.xzx) {
                    e = this.language.bib
                } else {
                    if (this.msp[this.ngt] === bva.xoc.xny) {
                        e = this.language.kpp
                    }
                }
            }
            d.ekj("adjustment", e, this.eyo.jgz("btn_l"), this.vei, (this.ngk === bva.uhn.opd) ? 0 : 1, 2);
            d.qqd("help", this.language.iog, this.eyo.jgz("btn_p"), this.xnz);
            if (this.adp != "" && (bva.uug.value81 && bva.uug.value81.g === true)) {
                d.qqd("rules", this.language.irl, this.eyo.jgz("btn_gr"), this.zsj)
            }
            if (bva.uug.value12 && !this.sgm()) {
                d.qqd("history", this.language.xfn, this.eyo.jgz("btn_h"), this.ure)
            }
            if (bva.uug.value36 && !this.sgm()) {
                d.qqd("statistic", this.language.bml, this.eyo.jgz("btn_st"), this.nvm)
            }
            d.ejk = this.cli();
            d.hin(this.uhn.raz);
            d.cep(this.uhn.raz);
            d.raa(this.style.raz);
            d.pog(this.language, true)
        }
    };
    this.deg = function() {
        var b = (this.kdt && this.wwt) ? this.uhn.fdt : this.uhn.znp;
        this.qzy = new kcl();
        this.qzy.parent = this;
        this.qzy.xue = this.xue;
        this.qzy.uwa(b.oue, null, this.context2D);
        this.qzy.hin(b, this.style.znp);
        this.qzy.rbi(this.vbj, 0);
        this.qzy.rbi(this.smm, 1)
    };
    this.kcw = function() {};
    this.csy = function() {};
    this.nuh = function() {
        this.rvt.wbw(this.uhn.oxo, this.style.oxo, this.eyo.jgz("btn_s"))
    };
    this.vlw = function() {};
    this.tvh = function() {};
    this.aga = function() {
        var b = new ndw();
        b.uwa(this.uhn.top.oue, null, this.context2D);
        b.parent = this;
        this.xqp.mzx("tops", b)
    };
    this.tkv = function() {
        this.ivv = []
    };
    this.tqm = function() {
        var e = [],
            c = (this.state == bva.sva.ywb.sku || this.state == bva.sva.ywb.fcg || this.state == bva.sva.ywb.egq || this.state == bva.sva.ywb.mot || this.state == bva.sva.ywb.qrz) ? true : false;
        if (c) {
            if (this.wex) {
                e = this.fpf
            } else {
                e = this.ufa
            }
        } else {
            e = this.ufa
        }
        this.dou = new gra();
        this.wce = new gra();
        this.stl = new gra();
        this.lhh = new gra();
        this.vvn = new gra();
        this.dou.gkc = this.eyo.onv("stop1");
        this.wce.gkc = this.eyo.onv("stop2");
        this.stl.gkc = this.eyo.onv("stop1");
        if (this.lhh != null) {
            this.lhh.gkc = this.eyo.onv("stop2")
        }
        if (this.vvn != null) {
            this.vvn.gkc = this.eyo.onv("stop1")
        }
        if (this.qdx === false) {
            this.dou.uwa(this.uhn.dou.oue, this.context2D, null, (this.zmv) ? this.uhn.dou.msi : this.uhn.dou.vum, this.sif, this.qwc, this.r1, this.jhc[0])
        } else {
            this.dou.uwa(this.uhn.dou.djv, this.iwn, null, (this.zmv) ? this.uhn.dou.msi : this.uhn.dou.vum, this.sif, this.qwc, this.r1, this.jhc[0])
        }
        this.dou.wqr(e[0], true);
        if (this.qdx === false) {
            this.wce.uwa(this.uhn.wce.oue, this.context2D, null, (this.zmv) ? this.uhn.wce.msi : this.uhn.wce.vum, this.sif, this.qwc, this.r2, this.jhc[1])
        } else {
            this.wce.uwa(this.uhn.wce.djv, this.iwn, null, (this.zmv) ? this.uhn.wce.msi : this.uhn.wce.vum, this.sif, this.qwc, this.r2, this.jhc[1])
        }
        this.wce.wqr(e[1], true);
        if (this.qdx === false) {
            this.stl.uwa(this.uhn.stl.oue, this.context2D, null, (this.zmv) ? this.uhn.stl.msi : this.uhn.stl.vum, this.sif, this.qwc, this.r3, this.jhc[2])
        } else {
            this.stl.uwa(this.uhn.stl.djv, this.iwn, null, (this.zmv) ? this.uhn.stl.msi : this.uhn.stl.vum, this.sif, this.qwc, this.r3, this.jhc[2])
        }
        this.stl.wqr(e[2], true);
        if (this.qdx === false) {
            this.lhh.uwa(this.uhn.lhh.oue, this.context2D, null, (this.zmv) ? this.uhn.lhh.msi : this.uhn.lhh.vum, this.sif, this.qwc, this.r4, this.jhc[3])
        } else {
            this.lhh.uwa(this.uhn.lhh.djv, this.iwn, null, (this.zmv) ? this.uhn.lhh.msi : this.uhn.lhh.vum, this.sif, this.qwc, this.r4, this.jhc[3])
        }
        this.lhh.wqr(e[3], true);
        if (this.qdx === false) {
            this.vvn.uwa(this.uhn.vvn.oue, this.context2D, null, (this.zmv) ? this.uhn.vvn.msi : this.uhn.vvn.vum, this.sif, this.qwc, this.r5, this.jhc[4])
        } else {
            this.vvn.uwa(this.uhn.vvn.djv, this.iwn, null, (this.zmv) ? this.uhn.vvn.msi : this.uhn.vvn.vum, this.sif, this.qwc, this.r5, this.jhc[4])
        }
        this.vvn.wqr(e[4], true);
        this.tlk = [this.dou, this.wce, this.stl, this.lhh, this.vvn];
        this.utk = [true, true, true, true, true];
        for (var d = 0, b = this.tlk.length; d < b; d++) {
            this.tlk[d].parent = this;
            this.tlk[d].raa(this.style.udj);
            this.tlk[d].rqd(this.eyo.jgz("reelfront"))
        }
    };
    this.bkn = function() {
        this.rvt = new mgm();
        this.rvt.uwa(this.uhn.oxo.oue, null, this.context2D);
        this.rvt.parent = this;
        this.rvt.ivx(false);
        this.rvt.cep(this.uhn.oxo);
        this.rvt.raa(this.style.oxo)
    };
    this.lzv = function() {
        var c = this.uhn.fgi,
            b = this.eyo.jgz("g_back");
        if (this.kdt && this.wwt && this.style.mij.xhk) {
            c = this.uhn.jtq;
            b = this.eyo.jgz("m_g_back")
        }
        this.kfs = new ufv();
        this.kfs.parent = this;
        this.kfs.uwa(c.oue, null, this.context2D);
        this.kfs.qza = b;
        this.kfs.hin(c);
        this.kfs.raa(this.style.fgi);
        this.kfs.neq();
        this.kfs.rbi(this.cqy, 0);
        this.kfs.esj(false)
    };
    this.roa = function() {};
    this.pex = function() {
        this.rko = this.wug();
        this.rko.parent = this;
        this.rko.fhc = this.fhc;
        this.rko.zdl = this.olj;
        this.rko.szx = this.szx;
        this.rko.cci = this.cci;
        this.rko.ufe = this.ufe;
        this.rko.ngd = this.ovw;
        this.rko.vmh = this.ivv;
        this.rko.adf = this.cns;
        this.rko.ylc = (this.fjp == true || this.qbj == true);
        this.rko.wim = this.asz;
        this.rko.zpv = this.zpv;
        this.rko.cep(this.uhn.evi);
        this.rko.raa(this.style.evi)
    };
    this.qoi = function() {
        var b = new anx();
        b.uwa(this.uhn.yib.oue, null, this.context2D);
        b.parent = this;
        b.pes = this.language.nza;
        b.uva = this.odd;
        b.oox = this.pvb.wfd.vmm;
        b.ptz = this.pvb.kli.vmm;
        b.psd = this.eyo.jgz("effect");
        b.cep(this.uhn.yib);
        b.raa(this.style.gwh);
        b.hve(this.uoy, this.ima(), this.faw(false));
        b.hmw(this.cov(), this.faw(true));
        b.ncx(this.vnq, false);
        b.esj(false);
        this.xqp.mzx("betsel", b)
    };
    this.sjr = function() {
        this.ygv = [];
        for (var b = this.eml; b <= this.bmv;) {
            this.ygv.push(b);
            b += this.gyb
        }
        var c = new wno();
        c.uwa(this.uhn.tup.oue, null, this.context2D);
        c.parent = this;
        c.pes = this.language.yzu;
        c.uva = this.pcm;
        c.oox = this.pvb.jeg.vmm;
        c.ptz = this.pvb.hvb.vmm;
        c.psd = this.eyo.jgz("effect");
        c.cep(this.uhn.tup);
        c.raa(this.style.gwh);
        c.hve(this.ygv, 0, this.ygv.length - 1);
        c.jnb(this.yzu, false);
        c.esj(false);
        this.xqp.mzx("linesel", c)
    };
    this.zcr = function() {
        this.xqp.mzx("llinep", this.mqg(this.uhn.yfx.oue.x, this.uhn.yfx.oue.y, this.eyo.jgz("winlines"), this.syv, this.zls, this.uhn.yfx));
        this.xqp.mzx("rlinep", this.mqg(this.uhn.dhc.oue.x, this.uhn.dhc.oue.y, this.eyo.jgz("winlines"), this.axq, this.ssi, this.uhn.dhc));
        this.xqp.mom("llinep", "#uvv", [this.yzu]);
        this.xqp.mom("rlinep", "#uvv", [this.yzu])
    };
    this.wez = function() {
        var c = new ybg(),
            b = this.eyo.jgz("m_win");
        if (this.kdt && this.wwt && this.style.mij.xhk) {
            b = this.eyo.jgz("m_m_win")
        }
        c.uwa(this.uhn.svw.oue, this.context2D, null, b, "");
        c.parent = this;
        c.cep(this.uhn.svw);
        c.raa(this.style.svw);
        c.esj(false);
        this.xqp.mzx("winp", c)
    };
    this.lqw = function() {};
    this.uyc = function() {
        var b = new axk();
        b.uwa(this.uhn.xfn.oue, null, this.context2D);
        b.parent = this;
        b.hin(this.uhn.xfn);
        b.raa(this.style.xfn);
        this.xqp.mzx("history", b)
    };
    this.mqg = function(b, j, d, g, c, e) {
        var f = new zag();
        f.uwa(new gup(b, j, 0, 0), this.context2D);
        f.jwl = this.qxf;
        f.parent = this;
        f.uud = g;
        f.vvd = c;
        f.cep(e);
        f.yct(d);
        f.esj(true);
        return f
    };
    this.wug = function() {
        var e = [];
        for (var d = 0, b = this.eyo.pnx("symb"); d < b; d++) {
            e[d] = this.eyo.jgz("symb" + d)
        }
        var c = new tml();
        c.uwa(this.uhn.evi.oue, null, this.context2D);
        c.npp = e;
        c.bsb = this.eyo.jgz("reelfront");
        c.esj(false);
        return c
    };
    this.sql = function() {
        if (this.yxy === true) {
            for (var c = 0, b = this.tlk.length; c < b; c++) {
                if (!this.qdx) {
                    this.tlk[c].vie(this.dmv, this.uhn.vwh.wzm, this.uhn.vwh.ape)
                }
            }
            if (this.rko) {
                this.rko.vie(this.dmv, this.uhn.vwh.wzm + this.rko.x, this.uhn.vwh.ape + this.rko.y)
            }
        }
        if (this.qzy) {
            this.qzy.vie(this.dmv, this.uhn.vwh.wzm, this.uhn.vwh.ape)
        }
    };
    this.ocf = function(d, c, b) {
        this.mno({
            type: "gameDataLoaded",
            sender: this.hdt,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                success: true
            }
        });
        this.luv = true;
        this.state = d;
        this.tnc = b;
        clearInterval(this.ypj);
        if (this.tgt) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.kek = 0
            }
            if (this.eyo.mde === true) {
                this.blh(this.rnr[this.kek])
            } else {
                this.rgq((this.rnr[this.kek] === 0))
            }
        }
        if (this.yux === true) {
            this.ycx = true
        }
        this.hve();
        this.ple();
        this.yhq();
        this.xwy();
        if (this.kfs) {
            this.kfs.xlm.mom("history", "#nvs", [c])
        }
        this.das();
        window.xpv(this.efr)
    };
    this.efr = function() {
        bva.mij.ikb(bva.mij.tnc);
        bva.mij.orc = true;
        bva.mij.mei();
        bva.mij.igz();
        bva.mij.sql();
        bva.mij.egc();
        if (bva.mij.yux === true) {
            bva.mij.coy(true)
        }
        if (bva.kgg.kpx === bva.os.nik && bva.kgg.bxp !== bva.igo.ukb) {
            bva.mij.vqc([{
                lor: bva.pdb.bab
            }])
        } else {
            if (bva.mij.xyj > 0) {
                if (bva.mij.jky === 0) {
                    bva.mij.vqc([{
                        lor: bva.pdb.lbh
                    }])
                } else {
                    if (bva.mij.jky < bva.mij.xyj) {
                        bva.mij.vqc([{
                            lor: bva.pdb.gfv
                        }])
                    }
                }
            } else {
                bva.mij.uff(bva.mij.state)
            }
        }
        if (bva.uug.value37 && !bva.mij.sgm()) {
            bva.mij.esx()
        }
        if (bva.mij.znt()) {
            setTimeout(bva.mij.egc, 20)
        }
    };
    this.uos = function() {
        this.lri = new vau().uwa(this, bva.uug.value6)
    };
    this.ceb = function() {
        this.lri = new qzv().uwa(this, bva.uug.value6)
    };
    this.rap = function(r) {
        if (r.preventDefault) {
            r.preventDefault()
        }
        if (r.stopPropagation) {
            r.stopPropagation()
        }
        if (this.ycx) {
            return
        }
        var k = 0,
            j = 0,
            v = false,
            l = false,
            f = false,
            q = this.xqp.whx("loading"),
            w = this.xqp.whx("stats"),
            u = this.xqp.whx("topb"),
            c = this.xqp.whx("topi"),
            d = this.xqp.whx("betsel"),
            n = this.xqp.whx("linesel"),
            o = this.xqp.whx("llinep"),
            z = this.xqp.whx("rlinep"),
            A = this.xqp.whx("finfop"),
            p = this.xqp.whx("finfoc"),
            m = this.xqp.whx("autop"),
            b = this.xqp.whx("settings"),
            g = this.xqp.whx("jwp");
        if (r.touches) {
            var e = r.touches[0];
            v = true;
            if (!this.sei) {
                k = e.pageX - this.offsetLeft;
                j = e.pageY - this.offsetTop
            } else {
                k = Math.round((e.pageX - this.offsetLeft) / this.eel);
                j = Math.round((e.pageY - this.offsetTop) / this.lbq)
            }
        } else {
            if (r.which != 1) {
                return
            }
            if (!this.sei) {
                k = r.pageX - this.offsetLeft;
                j = r.pageY - this.offsetTop
            } else {
                k = Math.round((r.pageX - this.offsetLeft) / this.eel);
                j = Math.round((r.pageY - this.offsetTop) / this.lbq)
            }
        }
        if (this.luv === true) {
            this.ucq();
            if (m && m.kvp()) {
                if (m.rap(k, j)) {
                    return
                }
            }
            if (u && u.kvp()) {
                if (u.rap(k, j)) {
                    clearTimeout(this.fbf);
                    return
                } else {
                    f = true
                }
            }
            if (d) {
                if (d.kvp()) {
                    if (d.rap(k, j, v)) {
                        clearTimeout(this.fbf);
                        return
                    } else {
                        l = true
                    }
                }
            }
            if (n) {
                if (n.kvp()) {
                    if (n.rap(k, j, v)) {
                        clearTimeout(this.fbf);
                        return
                    } else {
                        l = true
                    }
                }
            }
            if (f) {
                this.tnb(this.qzy.zcw(k, j, null));
                return
            } else {
                if (l) {
                    if ((d && d.kca()) && ((n && n.kca()) || !n)) {
                        this.uhq(this.qzy.zcw(k, j, null))
                    }
                    return
                }
            }
            if (this.cli() && !this.hnt && o && z) {
                if (o.rap(k, j, l)) {
                    return
                } else {
                    if (z.rap(k, j, l)) {
                        return
                    }
                }
            }
            if (A) {
                if (A.rap(k, j)) {
                    return
                }
            }
            if (p) {
                if (p.rap(k, j)) {
                    return
                }
            }
            if (b && b.kvp()) {
                if (b.rap(k, j)) {
                    return
                }
            }
            if (c) {
                if (c.rap(k, j, v)) {
                    return
                }
            }
            if (w && w.kvp()) {
                if (w.rap(k, j)) {
                    return
                }
            }
            if (this.rvt && this.rvt.kvp()) {
                if (this.rvt.rap(k, j)) {
                    return
                }
            }
            if (this.kfs && this.kfs.kvp()) {
                if (this.kfs.rap(k, j)) {
                    return
                }
            }
            if (g) {
                if (g.rap(k, j)) {
                    return
                }
            }
            if (this.qzy) {
                if (this.qzy.rap(k, j, l)) {
                    return
                }
            }
            for (var s = 0, t = this.tlk.length; s < t; s++) {
                if (this.tlk[s].rap(k, j)) {
                    return
                }
            }
        } else {
            if (q && q.kvp()) {
                if (q.rap(k, j)) {
                    return
                }
            }
        }
    };
    this.fwp = function(j) {
        if (j.preventDefault) {
            j.preventDefault()
        }
        if (j.stopPropagation) {
            j.stopPropagation()
        }
        if (this.ycx) {
            return
        }
        var k = this.xqp.whx("topb"),
            d = this.xqp.whx("autop"),
            g = this.xqp.whx("settings"),
            c = this.xqp.whx("betsel"),
            e = this.xqp.whx("linesel");
        if (this.luv === true) {
            if (d && d.kvp()) {
                if (d.fwp()) {
                    return
                }
            }
            if (c) {
                if (c.fwp()) {
                    return
                }
            }
            if (e) {
                if (e.fwp()) {
                    return
                }
            }
            if (this.rvt && this.rvt.kvp()) {
                if (this.rvt.fwp()) {
                    return
                }
            }
            if (this.kfs && this.kfs.kvp()) {
                if (this.kfs.fwp()) {
                    return
                }
            }
            if (this.qzy) {
                if (this.qzy.fwp()) {
                    return
                }
            }
            if (k) {
                if (k.fwp()) {
                    return
                }
            }
            if (g) {
                if (g.fwp()) {
                    return
                }
            }
            for (var f = 0, b = this.tlk.length; f < b; f++) {
                if (this.tlk[f].fwp()) {
                    return
                }
            }
        }
    };
    this.hld = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.ycx) {
            return
        }
        var k = false,
            e = false,
            l = this.xqp.whx("topb"),
            b = this.xqp.whx("betsel"),
            d = this.xqp.whx("linesel"),
            g = this.xqp.whx("finfop"),
            j = this.xqp.whx("finfoc"),
            f = this.xqp.whx("autop");
        if (f && f.kvp()) {
            if (f.hld(c.keyCode)) {
                return
            }
        }
        if (l) {
            if (l.hld(c.keyCode)) {
                clearTimeout(this.fbf);
                return
            } else {
                if (l.kvp() && l.kca()) {
                    e = true
                }
            }
        }
        if (g) {
            if (g.hld()) {
                return
            }
        }
        if (j) {
            if (j.hld(c.keyCode)) {
                return
            }
        }
        if (b) {
            if (b.kvp()) {
                if (b.hld(c.keyCode)) {
                    clearTimeout(this.fbf);
                    return
                } else {
                    k = true
                }
            }
        }
        if (d) {
            if (d.kvp()) {
                if (d.hld(c.keyCode)) {
                    clearTimeout(this.fbf);
                    return
                } else {
                    k = true
                }
            }
        }
        if (e) {
            this.tnb(this.qzy.zcw(null, null, c.keyCode));
            return
        } else {
            if (k) {
                if ((b && b.kca()) && ((d && d.kca()) || !d)) {
                    this.uhq(this.qzy.zcw(null, null, c.keyCode))
                }
                return
            }
        }
        if (this.rvt && this.rvt.kvp()) {
            if (this.rvt.hld(c.keyCode)) {
                return
            }
        }
        if (this.kfs && this.kfs.kvp()) {
            if (this.kfs.hld(c.keyCode)) {
                return
            }
        }
        if (this.qzy) {
            if (this.qzy.hld(c.keyCode)) {
                return
            }
        }
    };
    this.smf = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.ycx) {
            return
        }
        var b = this.xqp.whx("autop"),
            d = this.xqp.whx("topb");
        if (b && b.kvp()) {
            if (b.smf()) {
                return
            }
        }
        if (this.rvt && this.rvt.kvp()) {
            if (this.rvt.smf()) {
                return
            }
        }
        if (this.kfs && this.kfs.kvp()) {
            if (this.kfs.smf()) {
                return
            }
        }
        if (this.qzy) {
            if (this.qzy.smf(c.keyCode)) {
                return
            }
        }
        if (d) {
            if (d.smf()) {
                return
            }
        }
    };
    this.taj = function() {
        return (bva.kgg.thj() && !this.kdt)
    };
    this.oxg = function() {
        return (bva.kgg.thj() && !this.xmr)
    };
    this.agr = function() {
        return (this.rjz === true && this.eyo.mde === true)
    };
    this.mwa = function() {
        if (this.agr() === true) {
            this.eyo.urt("melody")
        }
    };
    this.ewl = function() {
        if (this.agr() === true) {
            this.eyo.zqb("melody")
        }
    };
    this.jnj = function(c, b) {
        if (this.agr() === true && this.nnv === true) {
            this.eyo.rll("melody", c, b)
        }
    };
    this.uwl = function() {
        return false
    };
    this.fyf = function() {
        return 1
    };
    this.iiu = function() {
        return 0
    };
    this.pbd = function(b) {
        this.uhn = this.eby(b);
        this.width = this.uhn.canvas.oue.width;
        this.height = this.uhn.canvas.oue.height;
        this.xtl();
        this.ugt();
        this.gvz()
    };
    this.acv = function() {
        this.style = new sib()
    };
    this.eby = function(b) {
        this.ngk = b;
        if (b == bva.uhn.uum) {
            return new eiw()
        } else {
            if (b == bva.uhn.tzn) {
                return new djw()
            } else {
                if (b == bva.uhn.mkq) {
                    return new lyj()
                } else {
                    if (b == bva.uhn.qnf) {
                        return new xml()
                    } else {
                        if (b == bva.uhn.zjz) {
                            return new zfh()
                        } else {
                            if (b == bva.uhn.hog) {
                                return new pah()
                            } else {
                                if (b == bva.uhn.udt) {
                                    return new bjz()
                                } else {
                                    if (b == bva.uhn.cnt) {
                                        return new tpt()
                                    } else {
                                        if (b == bva.uhn.fbi) {
                                            return new wtb()
                                        } else {
                                            if (b == bva.uhn.xhx) {
                                                return new phl()
                                            } else {
                                                if (b == bva.uhn.opd) {
                                                    return new awi()
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
    this.gvz = function() {};
    this.rdr = function(b) {
        if (this.zjj) {
            this.zpu();
            this.aeh(b);
            this.sql()
        } else {
            this.xcn()
        }
    };
    this.zpu = function() {
        this.canvas.width = 0;
        if (this.gdw === false) {
            this.fzk.style.marginTop = (-this.height / 2 + this.gec()) + "px";
            this.fzk.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.fzk.style.left = "0px";
            this.fzk.style.top = "0px";
            this.fzk.style.marginTop = ((this.jqs - this.height) / 2 + this.gec()) + "px";
            this.fzk.style.marginLeft = ((this.kqv - this.width) / 2) + "px"
        }
        this.fzk.style.width = (this.width > this.kqv) ? this.kqv + "px" : this.width + "px";
        this.fzk.style.height = (this.height > this.jqs) ? this.jqs + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.kxy) {
            this.kxy.style.width = this.width + "px";
            this.kxy.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.aeh = function(b) {
        this.jsh();
        this.ltk();
        this.xrg();
        this.etf();
        this.aea();
        if (!(this.kdt && !this.xmr)) {
            this.upx()
        }
        if (!this.kdt) {
            this.hht();
            if (this.uhn.jgj) {
                if (this.xqp.whx("tops")) {
                    this.yhz()
                } else {
                    this.aga()
                }
            } else {
                this.xqp.nai("tops")
            }
            if (this.dqq()) {
                this.qei()
            }
            this.ijy();
            if (this.znt()) {
                this.oqx()
            }
        } else {
            this.uyc()
        }
        if (this.uhn.lcx) {
            this.tdy();
            this.nlb()
        }
        if (this.uhn.enp) {
            this.zzp();
            if (this.cli()) {
                this.uzk()
            }
        }
        if (this.uhn.qsn) {
            this.brt();
            if (!this.uhn.uzt) {
                this.ifg()
            }
        }
        if (this.uhn.gic) {
            this.enn()
        }
        if (this.uhn.uzt) {
            this.mfo()
        }
        this.hsr();
        if (b) {
            this.yso()
        }
        this.fzg();
        this.iqq();
        this.zcf()
    };
    this.jsh = function() {
        if (this.qzy) {
            var b = (this.kdt && this.wwt) ? this.uhn.fdt : this.uhn.znp;
            this.qzy.qjx(b.oue);
            this.qzy.cep(b, this.ptn);
            if (this.uhn.sbj === true) {
                this.qzy.raa(this.style.znp, this.ptn)
            }
        }
    };
    this.ltk = function() {
        if (this.dou) {
            this.dou.qjx((this.qdx === false) ? this.uhn.dou.oue : this.uhn.dou.djv, (this.zmv) ? this.uhn.dou.msi : this.uhn.dou.vum)
        }
        if (this.wce) {
            this.wce.qjx((this.qdx === false) ? this.uhn.wce.oue : this.uhn.wce.djv, (this.zmv) ? this.uhn.wce.msi : this.uhn.wce.vum)
        }
        if (this.stl) {
            this.stl.qjx((this.qdx === false) ? this.uhn.stl.oue : this.uhn.stl.djv, (this.zmv) ? this.uhn.stl.msi : this.uhn.stl.vum)
        }
        if (this.lhh) {
            this.lhh.qjx((this.qdx === false) ? this.uhn.lhh.oue : this.uhn.lhh.djv, (this.zmv) ? this.uhn.lhh.msi : this.uhn.lhh.vum)
        }
        if (this.vvn) {
            this.vvn.qjx((this.qdx === false) ? this.uhn.vvn.oue : this.uhn.vvn.djv, (this.zmv) ? this.uhn.vvn.msi : this.uhn.vvn.vum)
        }
    };
    this.tdy = function() {
        var b = this.xqp.whx("winp");
        if (b) {
            b.qjx(this.uhn.svw.oue);
            b.cep(this.uhn.svw)
        }
    };
    this.nlb = function() {};
    this.xrg = function() {
        if (this.rko) {
            this.rko.qjx(this.uhn.evi.oue);
            this.rko.fhc = this.fhc;
            this.rko.cci = this.cci;
            this.rko.cep(this.uhn.evi)
        }
    };
    this.enn = function() {
        var c = this.xqp.whx("llinep"),
            b = this.xqp.whx("rlinep");
        if (c) {
            c.x = this.uhn.yfx.oue.x;
            c.y = this.uhn.yfx.oue.y;
            c.cep(this.uhn.yfx)
        }
        if (b) {
            b.x = this.uhn.dhc.oue.x;
            b.y = this.uhn.dhc.oue.y;
            b.cep(this.uhn.dhc)
        }
    };
    this.zzp = function() {
        var b = this.xqp.whx("betsel");
        if (b) {
            b.qjx(this.uhn.yib.oue);
            b.cep(this.uhn.yib)
        }
    };
    this.uzk = function() {
        var b = this.xqp.whx("linesel");
        if (b) {
            b.qjx(this.uhn.tup.oue);
            b.cep(this.uhn.tup)
        }
    };
    this.yhz = function() {
        var b = this.xqp.whx("tops");
        if (b) {
            b.qjx(this.uhn.top.oue);
            b.esj(this.uhn.jgj)
        }
    };
    this.upx = function() {
        if (this.rvt) {
            this.rvt.qjx(this.uhn.oxo.oue);
            this.rvt.cep(this.uhn.oxo);
            if (this.uhn.sbj === true) {
                this.rvt.raa(this.style.oxo)
            }
        }
    };
    this.aea = function() {
        if (this.kfs) {
            var b = (this.kdt && this.wwt) ? this.uhn.jtq : this.uhn.fgi;
            this.kfs.qjx(b.oue);
            this.kfs.cep(b);
            if (this.uhn.sbj === true) {
                this.kfs.raa(this.style.fgi)
            }
        }
    };
    this.etf = function() {};
    this.hht = function() {};
    this.hsr = function() {};
    this.yso = function() {
        if (this.xqp.whx("tops")) {
            this.rvt.gxq(true);
            this.tvh()
        } else {
            this.uct = null;
            this.rvt.hxw(this.zyo, true)
        }
        this.rvt.ouu()
    };
    this.xtl = function() {
        var c = 0 - this.uhn.evi.oue.x,
            b = 0 - this.uhn.evi.oue.y;
        this.cci = [
            [{
                x: this.uhn.dou.oue.x + c,
                y: this.uhn.dou.oue.y + b
            }, {
                x: this.uhn.dou.oue.x + c,
                y: this.uhn.dou.oue.y + b + this.uhn.evi.nhw
            }, {
                x: this.uhn.dou.oue.x + c,
                y: this.uhn.dou.oue.y + b + 2 * this.uhn.evi.nhw
            }],
            [{
                x: this.uhn.wce.oue.x + c,
                y: this.uhn.wce.oue.y + b
            }, {
                x: this.uhn.wce.oue.x + c,
                y: this.uhn.wce.oue.y + b + this.uhn.evi.nhw
            }, {
                x: this.uhn.wce.oue.x + c,
                y: this.uhn.wce.oue.y + b + 2 * this.uhn.evi.nhw
            }],
            [{
                x: this.uhn.stl.oue.x + c,
                y: this.uhn.stl.oue.y + b
            }, {
                x: this.uhn.stl.oue.x + c,
                y: this.uhn.stl.oue.y + b + this.uhn.evi.nhw
            }, {
                x: this.uhn.stl.oue.x + c,
                y: this.uhn.stl.oue.y + b + 2 * this.uhn.evi.nhw
            }],
            [{
                x: this.uhn.lhh.oue.x + c,
                y: this.uhn.lhh.oue.y + b
            }, {
                x: this.uhn.lhh.oue.x + c,
                y: this.uhn.lhh.oue.y + b + this.uhn.evi.nhw
            }, {
                x: this.uhn.lhh.oue.x + c,
                y: this.uhn.lhh.oue.y + b + 2 * this.uhn.evi.nhw
            }],
            [{
                x: this.uhn.vvn.oue.x + c,
                y: this.uhn.vvn.oue.y + b
            }, {
                x: this.uhn.vvn.oue.x + c,
                y: this.uhn.vvn.oue.y + b + this.uhn.evi.nhw
            }, {
                x: this.uhn.vvn.oue.x + c,
                y: this.uhn.vvn.oue.y + b + 2 * this.uhn.evi.nhw
            }]
        ]
    };
    this.ugt = function() {
        var e = 0 - this.uhn.evi.oue.x,
            b = 0 - this.uhn.evi.oue.y;
        this.fhc = [];
        for (var g = 0, f = this.uhn.fhc.length; g < f; g++) {
            this.fhc[g] = [];
            for (var d = 0, k = 0, c = this.uhn.fhc[g].length; d < c; d += 2, k += 1) {
                this.fhc[g][k] = {
                    x: this.uhn.fhc[g][d] + e,
                    y: this.uhn.fhc[g][d + 1] + b
                }
            }
        }
    };
    this.rtx = function() {
        this.vbj = [];
        if (this.sgm() === false && this.bpl != "") {
            this.vbj.push(this.bpl)
        }
        this.vbj.push(this.language.tvo);
        this.vbj.push(this.language.vuc + " " + this.tyk(this.wyk()) + ((this.taj() === true) ? "|" : " ") + this.language.fhk + " " + this.tyk(this.rjo()));
        this.vbj.push(this.language.ctc)
    };
    this.pwv = function() {
        this.smm = [];
        this.smm[0] = this.language.xvr;
        this.smm[1] = this.language.oqq
    };
    this.xdr = function() {
        this.cqy = [];
        this.cqy[0] = this.language.sir;
        this.cqy[1] = this.language.vgd
    };
    this.pec = function() {
        axb.prototype.pec.call(this);
        if (this.vgl() === true) {
            this.eyo.rww(true)
        }
    };
    this.gvi = function() {
        var c = "";
        this.eyo.ydq("spin", null, false, this.jqw + "reels");
        this.eyo.ydq("stop1", null, false, this.jqw + "stop_reel2");
        this.eyo.ydq("stop2", null, false, this.jqw + "stop_reel2");
        this.eyo.ydq("start", null, false, this.jqw + "onstart");
        if (this.agr() === true) {
            this.eyo.ydq("melody", null, true, this.jqw + "background")
        }
        if (this.brs > 0) {
            this.eyo.ydq("wincountfade", null, false, this.jqw + "count_fade")
        }
        c = bva.uug.value30 + "/slot/sounds/";
        this.eyo.ydq("winfinal", this.wgq, false, c + "winfinal");
        if (this.scn <= 2) {
            this.eyo.ydq("wincount", null, false, c + "countup" + this.scn + "1");
            this.eyo.ydq("wincount1", null, false, c + "countup" + this.scn + "2");
            this.eyo.ydq("wincount3", null, false, c + "countup" + this.scn + "3");
            this.eyo.ydq("wincount5", null, false, c + "countup" + this.scn + "4");
            if (this.eyo.mde === false) {
                this.eyo.ydq("wincount2", null, false, c + "countup" + this.scn + "2");
                this.eyo.ydq("wincount4", null, false, c + "countup" + this.scn + "3");
                this.eyo.ydq("wincount6", null, false, c + "countup" + this.scn + "4")
            }
            this.eyo.ydq("winline", null, false, c + "winline");
            this.eyo.ydq("collect", null, false, c + "collect");
            this.eyo.ydq("collectend", null, false, c + "collect1")
        }
        c = bva.uug.value30 + "/basic/sounds/";
        this.eyo.ydq("silence", null, false, c + "silence");
        this.eyo.ydq("audioon", null, false, c + "audio_on");
        if (!bva.uug.value55) {
            if (this.taj() === false) {
                this.eyo.ydq("btn", null, false, c + "btn");
                this.eyo.ydq("auto_on", null, false, c + "auto_on");
                this.eyo.ydq("auto_off", null, false, c + "auto_off");
                this.eyo.ydq("gamble_on", null, false, c + "gamble_on");
                this.eyo.ydq("gamble_off", null, false, c + "gamble_off");
                if (this.agr() === false && this.scn <= 2) {
                    this.eyo.ydq("gambleprop", null, true, c + "gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.eyo.ydq("step" + b, null, false, c + "step" + (b + 1))
                }
                this.eyo.ydq("maxstep", null, false, c + "maxstep")
            } else {
                this.eyo.ydq("btn", null, false, c + "btn2");
                this.eyo.ydq("auto_on", null, false, c + "auto_on");
                this.eyo.ydq("auto_off", null, false, c + "auto_off")
            }
        } else {
            this.eyo.ydq("btn", null, false, c + "ama_btn");
            if (this.taj() === false) {
                this.eyo.ydq("gamble_on", null, false, c + "ama_gamble_on");
                this.eyo.ydq("gamble_off", null, false, c + "ama_gamble_off");
                if (this.agr() === false && this.scn <= 2) {
                    this.eyo.ydq("gambleprop", null, true, c + "ama_gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.eyo.ydq("step" + b, null, false, c + "ama_step")
                }
                this.eyo.ydq("maxstep", null, false, c + "ama_step")
            }
        }
        if (this.tfg() === true) {
            this.eyo.ydq("jackpot", null, false, c + "jackpot");
            if (this.tqs()) {
                this.eyo.ydq("mystery_jackpot", null, false, c + "mystery_jackpot")
            }
        }
        if (this.taj() === false) {
            this.eyo.ydq("panel_in", null, false, c + "panel_in");
            this.eyo.ydq("panel_out", null, false, c + "panel_out")
        }
        c = bva.uug.value30 + "/gamble/sounds/";
        this.eyo.ydq("gamble1", null, false, c + "deal_2");
        this.eyo.ydq("gamble2", null, false, c + "deal_2");
        this.eyo.ydq("gamblewin1", null, false, c + "win1");
        this.eyo.ydq("gamblewin2", null, false, c + "win2");
        this.eyo.ydq("gamblewin3", null, false, c + "win3");
        this.pai();
        this.vno();
        this.wtd()
    };
    this.pai = function() {
        for (var b = 0; b < this.jfa; b++) {
            this.eyo.ydq("symb" + b, this.toy, false, this.jqw + "symb" + (b + 1))
        }
    };
    this.vno = function() {
        var b = bva.uug.value30 + "/slot/sounds/";
        this.eyo.ydq("bigwin", null, false, b + "bigwin");
        this.eyo.ydq("megawin", null, false, b + "megawin");
        this.eyo.ydq("nicewin", null, false, b + "nicewin")
    };
    this.wtd = function() {};
    this.kwg = function() {
        var b = this.ymd + this.uhn.type + "/";
        this.eyo.ajx("icon", b + "icon_out.png");
        if (this.xqi) {
            this.eyo.ajx("winlines", b + "wl.png")
        }
        this.eyo.ajx("s_symb", b + "symbols_small.png");
        b = bva.uug.value30 + "/basic/images/" + this.uhn.type + "/";
        if (this.tfg() === true) {
            this.eyo.ovc(b, "jackpot.json");
            if (this.tqs()) {
                this.eyo.ovc(b, "mystery_jackpot.json")
            }
        }
        if (this.taj() === true) {
            if (this.uhn.sbj === false) {
                this.eyo.ajx("btn_back", b + "buttonback.png")
            }
        }
        b = bva.uug.value30 + "/slot/images/" + this.uhn.type + "/";
        if (this.taj() === true) {
            if (this.uhn.sbj === true) {
                this.eyo.ovc(b, "gui_mobile_v29.json")
            } else {
                this.eyo.ovc(b, "gui_mobile_v17.json")
            }
        } else {
            if (bva.uug.value57 === bva.ui.wkn || this.ruj() != null) {
                this.eyo.ovc(b, "gui_desktop_v27.json")
            } else {
                this.eyo.ovc(b, "gui_desktop_v17.json")
            }
        }
        if (this.zpv && !this.kdt) {
            this.eyo.ajx("firework", b + "firework.png")
        }
        this.yrt();
        this.njz();
        this.yid();
        this.frf();
        this.jsy()
    };
    this.njz = function() {
        var b = this.ymd + this.uhn.type + "/";
        this.eyo.ajx("m_back", b + "main.png");
        this.eyo.ajx("g_back", b + "gamble.jpg");
        this.eyo.ajx("m_win", b + "winPanel.png");
        this.eyo.ajx("h_paytable", b + "wthelp.jpg");
        this.eyo.ajx("h_winlines", b + "wlhelp.jpg")
    };
    this.yid = function() {
        var c = this.ymd + this.uhn.type + "/";
        this.eyo.ovc(c, "symbols.json");
        for (var b = 0; b < this.jfa; b++) {
            this.eyo.ajx("anim" + b, c + "symbanim" + (b + 1) + ".jpg")
        }
    };
    this.frf = function() {
        var b = bva.uug.value30 + "/slot/images/" + this.uhn.type + "/";
        this.eyo.ajx("wins", b + "wins.png")
    };
    this.yrt = function() {
        var b = bva.uug.value30 + "/gamble/images/" + this.uhn.type + "/";
        this.eyo.ajx("g_red", b + "red_orig.png");
        this.eyo.ajx("g_blue", b + "blue_orig.png");
        this.eyo.ovc(b, "gamble.json")
    };
    this.jsy = function() {};
    this.dzs = function(b) {
        var c = this.pwr;
        b = (b != null && b === true) ? true : false;
        if (this.chz && !this.vuh && !this.hnt) {
            c = c - this.win
        }
        if (this.tyt) {
            c = c - this.tyt.value
        }
        if (!this.hnt) {
            this.qvh(c, true, b)
        }
        this.sgu(this.totalBet, true);
        this.xqp.mom("tops", "#egc");
        this.xqp.mom("settings", "#hzp", [this.tyk(this.nza), this.yzu, this.tyk(this.eik())])
    };
    this.egc = function(p, o, q, D, f) {
        if (bva.mij.jta()) {
            var b = (p != null && o != null && q != null && D != null),
                d = (b === true) ? new gup(p, o, q, D) : ((bva.mij.uhn.sbj === true) ? new gup(bva.mij.uhn.znp.oue.x, bva.mij.uhn.znp.oue.y, bva.mij.uhn.znp.oue.width, bva.mij.uhn.znp.oue.height) : new gup(bva.mij.uhn.mij.oue.x, bva.mij.uhn.mij.oue.y, bva.mij.uhn.mij.oue.width, bva.mij.uhn.mij.oue.height)),
                A = bva.mij.context2D,
                g = (bva.mij.xmr === true) ? bva.mij.style.mij.vwr : bva.mij.style.mij.backgroundColor,
                G = bva.mij.xqp.whx("stats"),
                c = bva.mij.xqp.whx("history"),
                E = bva.mij.xqp.whx("topb"),
                j = bva.mij.xqp.whx("topi"),
                k = bva.mij.xqp.whx("betsel"),
                s = bva.mij.xqp.whx("linesel"),
                t = bva.mij.xqp.whx("tops"),
                l = bva.mij.xqp.whx("winp"),
                m = bva.mij.xqp.whx("fwinp"),
                v = bva.mij.xqp.whx("llinep"),
                I = bva.mij.xqp.whx("rlinep"),
                H = bva.mij.xqp.whx("finfop"),
                z = bva.mij.xqp.whx("finfoc"),
                r = bva.mij.xqp.whx("autop"),
                F = bva.mij.xqp.jkd("jackpots"),
                n = bva.mij.xqp.whx("jwp"),
                u = bva.mij.xqp.whx("mjwp"),
                e = bva.mij.xqp.whx("settings");
            bva.mij.cqz = false;
            if (bva.mij.qdx === true) {
                bva.mij.qqm()
            }
            A.save();
            if (b) {
                A.beginPath();
                A.rect(p, o, q, D);
                A.closePath();
                A.clip()
            }
            if (f == null || f === false) {
                A.clearRect(0, 0, bva.mij.width, bva.mij.height)
            }
            if (bva.mij.uhn.ews) {
                if (bva.mij.qdx === false) {
                    bva.kgg.hvc(bva.mij.context2D, bva.mij.uhn.mij.oue.x - bva.mij.uhn.mij.stc, bva.mij.uhn.mij.oue.y - bva.mij.uhn.mij.stc, bva.mij.uhn.mij.oue.width + 2 * bva.mij.uhn.mij.stc, bva.mij.uhn.mij.oue.height + 2 * bva.mij.uhn.mij.stc, g, 1)
                } else {
                    bva.kgg.hvc(bva.mij.context2D, bva.mij.uhn.mij.oue.x - bva.mij.uhn.mij.stc, bva.mij.uhn.mij.oue.y - bva.mij.uhn.mij.stc, bva.mij.uhn.mij.oue.width + 2 * bva.mij.uhn.mij.stc, bva.mij.uhn.mij.oue.height + 2 * bva.mij.uhn.mij.stc, null, 0, g, bva.mij.uhn.mij.stc, 1)
                }
            }
            if (c) {
                c.egc()
            }
            if (j) {
                j.egc()
            }
            if (t) {
                t.egc()
            }
            if (G && G.kvp()) {
                G.egc()
            } else {
                if (bva.mij.rvt && bva.mij.rvt.kvp()) {
                    bva.mij.rvt.egc()
                } else {
                    if (bva.mij.kfs && bva.mij.kfs.kvp()) {
                        bva.mij.kfs.egc()
                    } else {
                        if (bva.mij.qdx) {
                            A.drawImage(bva.mij.vii, bva.mij.uhn.vwh.oue.x, bva.mij.uhn.vwh.oue.y)
                        } else {
                            A.drawImage(bva.mij.dmv, bva.mij.uhn.vwh.oue.x, bva.mij.uhn.vwh.oue.y)
                        }
                        if (l && l.kvp()) {
                            l.egc()
                        } else {
                            if (m && m.kvp()) {
                                m.egc()
                            }
                        }
                        if (v) {
                            v.egc()
                        }
                        if (I) {
                            I.egc()
                        }
                        if (bva.mij.qdx === false) {
                            for (var B = 0, C = bva.mij.tlk.length; B < C; B++) {
                                if (bva.mij.tlk[B]) {
                                    bva.mij.tlk[B].egc()
                                }
                            }
                        }
                        if (bva.mij.rko) {
                            bva.mij.rko.egc()
                        }
                        if (bva.mij.qzy) {
                            bva.mij.qzy.egc()
                        }
                        for (var B = 0, C = F.length; B < C; B++) {
                            F[B].egc()
                        }
                        if (n) {
                            if (n.kvp()) {
                                bva.mij.hiy(A, d)
                            }
                            n.egc()
                        }
                        if (u) {
                            if (u.kvp()) {
                                bva.mij.hiy(A, d)
                            }
                            u.egc()
                        }
                        if (H) {
                            if (H.kvp()) {
                                bva.mij.hiy(A, d)
                            }
                            H.egc()
                        }
                        if (z) {
                            if (z.kvp()) {
                                bva.mij.hiy(A, d)
                            }
                            z.egc()
                        }
                    }
                }
            }
            if (k) {
                k.egc()
            }
            if (s) {
                s.egc()
            }
            if (E) {
                E.egc()
            }
            if (r) {
                r.egc()
            }
            if (e) {
                e.egc()
            }
            A.restore()
        }
    };
    this.hiy = function(b, c) {
        this.cqz = true;
        bva.kgg.hvc(b, c.x, c.y, c.width, c.height, "black", 0.5)
    };
    this.nvh = function() {
        for (var c = 0, b = this.tlk.length; c < b; c++) {
            if (this.tlk[c] && this.utk[c] === true) {
                this.tlk[c].egc()
            }
        }
    };
    this.qqm = function() {
        var d = this.iwn,
            c = this.eyo.jgz("m_back"),
            f = this.eyo.jgz("f_back");
        if (this.kdt && this.wwt && this.style.mij.xhk) {
            c = this.eyo.jgz("m_m_back");
            f = this.eyo.jgz("m_f_back")
        }
        if (this.jta()) {
            d.save();
            if (this.ptn) {
                d.drawImage(f, 0, 0)
            } else {
                d.drawImage(c, 0, 0)
            }
            for (var e = 0, b = this.tlk.length; e < b; e++) {
                this.tlk[e].egc()
            }
            d.restore()
        }
    };
    this.igz = function() {
        var d = bva.mij.rci,
            g = (bva.mij.uhn.vwh.oue.width - bva.mij.uhn.mij.oue.width) / 2,
            e = 0,
            c = (bva.mij.ptn) ? bva.mij.eyo.jgz("f_back") : bva.mij.eyo.jgz("m_back"),
            k = (bva.mij.ptn) ? bva.mij.eyo.jgz("f_left") : bva.mij.eyo.jgz("m_left"),
            j = (bva.mij.ptn) ? bva.mij.eyo.jgz("f_right") : bva.mij.eyo.jgz("m_right");
        if (bva.mij.kdt && bva.mij.wwt && bva.mij.style.mij.xhk) {
            c = (bva.mij.ptn) ? bva.mij.eyo.jgz("m_f_back") : bva.mij.eyo.jgz("m_m_back")
        }
        d.save();
        d.clearRect(0, 0, bva.mij.uhn.vwh.oue.width, bva.mij.uhn.vwh.oue.height);
        d.drawImage(c, g, e);
        if (bva.mij.ngk === bva.uhn.xhx || bva.mij.ngk === bva.uhn.opd) {
            if (k) {
                d.drawImage(k, 0, 0)
            }
            if (j) {
                d.drawImage(j, bva.mij.uhn.vwh.oue.width - j.width, 0)
            }
        }
        d.restore();
        if (bva.mij.qdx) {
            d = bva.mij.qve;
            d.save();
            d.drawImage(bva.mij.dmv, 0, 0);
            for (var f = 0, b = bva.mij.tlk.length; f < b; f++) {
                d.clearRect(bva.mij.tlk[f].x + g, bva.mij.tlk[f].y + e, bva.mij.tlk[f].width, bva.mij.tlk[f].height)
            }
            d.restore()
        }
    };
    this.fkr = function(f) {
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
        if (this.vhq < 0) {
            for (var d = 0; d < f; d++) {
                this.mbf[d] = c[e];
                e = (e < c.length - 1) ? e + 1 : 0
            }
            this.puo = 0;
            this.jno = new Date().getTime();
            this.ofi()
        }
    };
    this.fxl = function() {
        clearTimeout(this.vhq);
        this.vhq = -1;
        bva.kgg.yea(this.canvas, this.eel, this.lbq);
        if (this.uhd != null) {
            bva.kgg.yea(this.uhd, this.eel, this.lbq, ((this.uhn.uhd.oue.x) - ((this.uhn.uhd.oue.x + this.uhn.uhd.wzm) / 2 * (1 - this.eel))), ((this.uhn.uhd.oue.y) - ((this.uhn.uhd.oue.y + this.uhn.uhd.ape) / 2 * (1 - this.lbq))))
        }
    };
    this.ofi = function() {
        var b = bva.mij.vjc,
            d = new Date().getTime(),
            c = null;
        if (bva.mij.puo >= bva.mij.mbf.length) {
            bva.mij.fxl()
        } else {
            c = bva.mij.mbf[bva.mij.puo];
            bva.kgg.yea(bva.mij.canvas, bva.mij.eel * c.sx, bva.mij.lbq * c.sy, c.tx, c.ty, c.rx, c.ry);
            if (bva.mij.uhd != null) {
                bva.kgg.yea(bva.mij.uhd, bva.mij.eel * c.sx, bva.mij.lbq * c.sy, ((bva.mij.uhn.uhd.oue.x) - ((bva.mij.uhn.uhd.oue.x + bva.mij.uhn.uhd.wzm) / 2 * (1 - bva.mij.eel * c.sx))) + c.tx, ((bva.mij.uhn.uhd.oue.y) - ((bva.mij.uhn.uhd.oue.y + bva.mij.uhn.uhd.ape) / 2 * (1 - bva.mij.lbq * c.sy))) + c.ty, c.rx, c.ry)
            }
            bva.mij.puo++;
            b = bva.mij.vjc + (bva.mij.puo * bva.mij.vjc - (d - bva.mij.jno));
            if (b < 10) {
                b = 10
            }
            bva.mij.vhq = setTimeout(bva.mij.ofi, b)
        }
    };
    this.wmt = function() {
        clearTimeout(bva.mij.zge);
        if (bva.mij.tol) {
            if (bva.mij.yyb) {
                if (!bva.mij.qpy && bva.mij.wej()) {
                    setTimeout(bva.mij.mfl, 2)
                }
            } else {
                if (!bva.mij.ptn) {
                    if (bva.mij.win > 0 && !bva.mij.vuh) {
                        if (bva.mij.xre) {
                            bva.mij.sza();
                            if (bva.mij.xas()) {
                                bva.mij.tol = false;
                                bva.mij.qzy.erc(false);
                                setTimeout(bva.mij.muk, 400)
                            }
                        } else {
                            if (bva.mij.ujy) {
                                bva.mij.pmq()
                            } else {
                                if (!(bva.mij.xre || bva.mij.ujy)) {
                                    if (bva.mij.xas()) {
                                        bva.mij.tol = false;
                                        bva.mij.qzy.erc(false);
                                        bva.mij.muk()
                                    } else {
                                        bva.mij.sza()
                                    }
                                }
                            }
                        }
                    } else {
                        if (!bva.mij.yyb) {
                            if (bva.mij.dtz) {
                                bva.mij.imo();
                                bva.mij.kif();
                                return
                            } else {
                                if (bva.mij.khk) {
                                    bva.mij.imo();
                                    bva.mij.nvm();
                                    return
                                }
                            }
                            bva.mij.zca = true;
                            bva.mij.tol = false;
                            if (bva.mij.taj() === true) {
                                bva.mij.wdt = (!bva.mij.fgi) ? 1 : 0
                            } else {
                                if (bva.uug.value62 === true) {
                                    bva.mij.wdt = 0;
                                    if (bva.mij.zhn) {
                                        bva.mij.wdt |= 2
                                    }
                                    if (bva.mij.fgi) {
                                        bva.mij.wdt |= 4
                                    }
                                } else {
                                    bva.mij.wdt = (bva.mij.zhn && !bva.mij.fgi) ? 1 : 0
                                }
                            }
                            if (bva.mij.hnt || (bva.mij.pwr >= bva.mij.eik() && bva.mij.eik() >= bva.mij.pyw)) {
                                bva.mij.mpj();
                                for (var c = 0, b = bva.mij.tlk.length; c < b; c++) {
                                    bva.mij.ufa[c] = -1;
                                    if (bva.mij.tlk[c]) {
                                        bva.mij.tlk[c].yxb(bva.mij.jhc[0])
                                    }
                                }
                                bva.mij.kfz();
                                bva.mij.mno({
                                    type: "roundStart",
                                    sender: bva.mij.hdt,
                                    lang: sessionStorage.sessionValue1.toUpperCase(),
                                    data: {
                                        totalBet: bva.mij.tyk(bva.mij.totalBet)
                                    }
                                });
                                bva.mij.ior();
                                bva.mij.twe();
                                bva.mij.lri.play(bva.mij.yzu, bva.mij.vnq, bva.mij.wdt);
                                bva.mij.qzy.erc(false);
                                bva.mij.qzy.xlm.mom("start", "#zjd", [true])
                            } else {
                                bva.mij.tgz();
                                bva.mij.imo();
                                bva.mij.qzy.erc(true);
                                bva.mij.mnd(true);
                                bva.mij.tol = true
                            }
                            bva.mij.zyf()
                        }
                    }
                } else {
                    if (bva.mij.edm > 0) {
                        if (bva.mij.xre) {
                            bva.mij.sza()
                        } else {
                            if (!(bva.mij.gpd || bva.mij.zca)) {
                                bva.mij.xvy()
                            } else {
                                bva.mij.zkm()
                            }
                        }
                    }
                    if (bva.mij.chw > 0 && !(bva.mij.dlk && !bva.mij.zfj)) {
                        if (bva.mij.khk) {
                            bva.mij.imo();
                            bva.mij.nvm();
                            return
                        }
                        bva.mij.zca = true;
                        bva.mij.tol = false;
                        bva.mij.mpj();
                        for (var c = 0, b = bva.mij.tlk.length; c < b; c++) {
                            bva.mij.ufa[c] = -1;
                            if (bva.mij.tlk[c]) {
                                bva.mij.tlk[c].yxb(bva.mij.jhc[0])
                            }
                        }
                        bva.mij.ghu();
                        if (bva.mij.taj() && bva.mij.chw == 1) {
                            bva.mij.wdt = (!bva.mij.fgi) ? 1 : 0
                        } else {
                            if (bva.uug.value62 === true) {
                                bva.mij.wdt = 0;
                                if (bva.mij.ruj() == null && bva.uug.value44.e && bva.mij.chw == 1) {
                                    if (bva.mij.xxc) {
                                        bva.mij.wdt |= 2
                                    }
                                } else {
                                    if (bva.mij.zhn) {
                                        bva.mij.wdt |= 2
                                    }
                                }
                                if (bva.mij.fgi) {
                                    bva.mij.wdt |= 4
                                }
                            } else {
                                if (bva.mij.ruj() == null && bva.uug.value44.e && bva.mij.chw == 1) {
                                    bva.mij.wdt = (bva.mij.xxc && !bva.mij.fgi) ? 1 : 0
                                } else {
                                    bva.mij.wdt = (bva.mij.zhn && !bva.mij.fgi) ? 1 : 0
                                }
                            }
                        }
                        bva.mij.twe();
                        bva.mij.lri.qvl(bva.mij.yzu, bva.mij.vnq, bva.mij.wdt);
                        bva.mij.qzy.erc(false);
                        bva.mij.qzy.xlm.mom("start", "#zjd", [true]);
                        bva.mij.scd()
                    }
                }
            }
        } else {
            if (!bva.mij.jha && bva.mij.yyb && !bva.mij.qpy && bva.mij.wej()) {
                bva.mij.fyq = true
            }
        }
    };
    this.tmy = function() {
        var b = bva.mij.xqp.whx("topi"),
            d = 0,
            c = 0,
            e = 0;
        if (!bva.uug.value55) {
            bva.mij.eyo.zqb("auto_on");
            bva.mij.eyo.zqb("auto_off")
        }
        if (bva.mij.zhn) {
            bva.mij.zhn = false;
            bva.mij.hop();
            if (bva.mij.ruj() == null && bva.uug.value44.e && bva.mij.ptn) {
                bva.mij.xxc = false
            }
            bva.mij.qzy.xlm.mom("astart", "#hqg", [bva.mij.zhn]);
            if (!bva.mij.yyb) {
                bva.mij.qzy.xlm.mom("start", "#rwv", [bva.mij.language.start, true])
            }
            if (!bva.uug.value55) {
                bva.mij.eyo.urt("auto_off")
            }
            if (bva.mij.hem && !bva.mij.zhn && !bva.mij.fgi && !bva.mij.qrp() && !bva.mij.ptn && bva.mij.win > 0 && !bva.mij.vuh && !bva.mij.ujy && !bva.mij.yyb) {
                if (!bva.mij.qzy.xlm.mom("gamble", "#odk")) {
                    bva.mij.qzy.xlm.mom("start", "#rwv", [bva.mij.language.tbs, true]);
                    bva.mij.qzy.xlm.mom("gamble", "#tiz");
                    bva.mij.gym();
                    if (!bva.mij.xre) {
                        bva.mij.qzy.xlm.mom("info", "#tok", [bva.mij.wyj(bva.mij.language.vjh) + ": " + bva.mij.tyk(bva.mij.win)])
                    }
                    bva.mij.esk()
                }
            }
        } else {
            if (bva.mij.ruj() != null && bva.mij.qoj <= 0 && bva.mij.taj() === false) {
                if (b && b.kca() === true) {
                    bva.mij.mnd(false);
                    bva.mij.qzy.erc(false);
                    bva.mij.id = setTimeout(bva.mij.gri, 300)
                }
            } else {
                if (bva.mij.ruj() == null && bva.uug.value44.e && bva.mij.ptn) {
                    bva.mij.xxc = true
                } else {
                    if (bva.mij.ruj() != null && bva.mij.taj() === true) {
                        bva.mij.qoj = bva.mij.xqp.mom("settings", "#xii");
                        if (bva.mij.qoj <= 0) {
                            return
                        }
                        d = bva.mij.xqp.mom("settings", "#gzr");
                        c = bva.mij.xqp.mom("settings", "#xqv");
                        e = bva.mij.xqp.mom("settings", "#fxu");
                        bva.mij.drc = (d > 0) ? d : 0;
                        bva.mij.agh = (c > 0) ? c : 0;
                        bva.mij.gou = (e > 0) ? e : 0;
                        bva.mij.ghc(bva.mij.ruj().o === true || bva.mij.style.mij.xhk == false)
                    }
                }
                bva.mij.zhn = true;
                bva.mij.qzy.xlm.mom("astart", "#hqg", [bva.mij.zhn]);
                if (!bva.mij.yyb) {
                    bva.mij.qzy.xlm.mom("start", "#rwv", [bva.mij.language.start, true])
                }
                if (!bva.uug.value55) {
                    bva.mij.eyo.urt("auto_on")
                }
                if (!bva.mij.yyb) {
                    if (bva.mij.ptn || (!bva.mij.ptn && !(bva.mij.win > 0 && bva.mij.hem && bva.mij.fgi && !(bva.mij.vuh || bva.mij.ujy)))) {
                        bva.mij.wmt()
                    }
                }
            }
        }
        if (b) {
            b.xhl("auto", bva.mij.zhn)
        }
    };
    this.owo = function() {
        if (bva.fcq == 0 && bva.mij.kdt === false && bva.mij.win > 0 && !bva.mij.vuh && bva.mij.xas()) {
            if (!bva.mij.ujy) {
                bva.mij.tol = false;
                bva.mij.qzy.erc(false);
                if (bva.mij.xre) {
                    bva.mij.sza();
                    setTimeout(bva.mij.muk, 400)
                } else {
                    bva.mij.muk()
                }
            }
            bva.mij.nvo = bva.mij.owo
        } else {
            axb.prototype.owo.call(this)
        }
    };
    this.giy = function() {
        if (bva.mij.vnq < bva.mij.uoy.length - 1) {
            if (bva.mij.vnq >= bva.mij.faw(true)) {
                bva.mij.vnq = 0;
                while (bva.mij.vnq < bva.mij.cov()) {
                    bva.mij.vnq++
                }
            } else {
                bva.mij.vnq++
            }
        } else {
            bva.mij.vnq = 0;
            while (bva.mij.vnq < bva.mij.cov()) {
                bva.mij.vnq++
            }
        }
        bva.mij.gxt(false, false);
        if (bva.mij.taj() && bva.mij.qoq()) {
            bva.mij.qzy.xlm.mom("betpopup", "#rwv", [bva.mij.wwe(bva.mij.totalBet)]);
            bva.mij.qzy.xlm.mom("betpopup", "#esj", [true]);
            bva.mij.egc();
            clearTimeout(bva.mij.cgm);
            bva.mij.cgm = setTimeout(bva.mij.ucq, 2000)
        }
        if (bva.mij.vnq >= bva.mij.faw(true)) {
            return true
        }
        return false
    };
    this.psu = function() {
        if (bva.mij.vnq > 0) {
            if (bva.mij.vnq <= bva.mij.cov()) {
                bva.mij.vnq = bva.mij.uoy.length;
                while (bva.mij.vnq > bva.mij.faw(true)) {
                    bva.mij.vnq--
                }
            } else {
                bva.mij.vnq--
            }
        } else {
            bva.mij.vnq = bva.mij.uoy.length;
            while (bva.mij.vnq > bva.mij.faw(true)) {
                bva.mij.vnq--
            }
        }
        if (bva.mij.vnq < 0) {
            bva.mij.vnq = 0
        }
        bva.mij.gxt(false, false);
        if (bva.mij.vnq <= bva.mij.cov()) {
            return true
        }
        return false
    };
    this.ild = function() {
        var c = bva.mij.yzu,
            b = bva.mij.xqp.whx("betsel"),
            e = bva.mij.xqp.whx("llinep"),
            d = bva.mij.xqp.whx("rlinep");
        c += bva.mij.gyb;
        if (c > bva.mij.bmv) {
            c = bva.mij.eml
        }
        bva.mij.yzu = c;
        if (e) {
            e.uvv(c)
        }
        if (d) {
            d.uvv(c)
        }
        if (b) {
            b.hmw(bva.mij.cov(), bva.mij.faw(true))
        }
        bva.mij.gxt(true, true);
        bva.mij.egc();
        if (c >= bva.mij.bmv) {
            return true
        }
        return false
    };
    this.oaj = function() {
        var c = bva.mij.yzu,
            b = bva.mij.xqp.whx("betsel"),
            e = bva.mij.xqp.whx("llinep"),
            d = bva.mij.xqp.whx("rlinep");
        c -= bva.mij.gyb;
        if (c < bva.mij.eml) {
            c = bva.mij.bmv
        }
        bva.mij.yzu = c;
        if (e) {
            e.uvv(c)
        }
        if (d) {
            d.uvv(c)
        }
        if (b) {
            b.hmw(bva.mij.cov(), bva.mij.faw(true))
        }
        bva.mij.gxt(true, true);
        bva.mij.egc();
        if (c <= bva.mij.eml) {
            return true
        }
        return false
    };
    this.kuk = function() {
        var b = bva.mij.xqp.whx("topi"),
            c = bva.mij.xqp.whx("settings");
        if (bva.mij.hem && !bva.mij.ptn && bva.mij.win > 0 && !bva.mij.yyb && !bva.mij.fgi && !bva.mij.zhn) {
            bva.mij.lmv()
        } else {
            bva.mij.eyo.zqb("gamble_on");
            bva.mij.eyo.zqb("gamble_off");
            bva.mij.fgi = !bva.mij.fgi;
            if (bva.mij.fgi) {
                bva.mij.eyo.urt("gamble_on")
            } else {
                bva.mij.eyo.urt("gamble_off")
            }
            if (bva.mij.hem && !bva.mij.zhn && !bva.mij.fgi && !bva.mij.qrp() && !bva.mij.ptn && bva.mij.win > 0 && !bva.mij.vuh && !bva.mij.ujy && !bva.mij.yyb) {
                if (!bva.mij.qzy.xlm.mom("gamble", "#odk")) {
                    bva.mij.qzy.xlm.mom("start", "#rwv", [bva.mij.language.tbs, true]);
                    bva.mij.qzy.xlm.mom("gamble", "#tiz");
                    bva.mij.gym();
                    if (!bva.mij.xre) {
                        bva.mij.qzy.xlm.mom("info", "#tok", [bva.mij.wyj(bva.mij.language.vjh) + ": " + bva.mij.tyk(bva.mij.win)])
                    }
                    bva.mij.esk()
                }
            }
            bva.mij.qzy.xlm.mom("gamble", "#hqg", [bva.mij.fgi]);
            if (b) {
                b.xhl("gamble", bva.mij.fgi)
            }
            if (c) {
                c.xlm.mom("gamble", "#mcl", [(bva.mij.fgi) ? 1 : 0])
            }
        }
    };
    this.xnz = function() {
        if (!bva.mij.rvt.kvp()) {
            bva.mij.tnb();
            if (bva.mij.ptn) {
                bva.mij.hbh()
            }
            bva.mij.bsa()
        } else {
            bva.mij.cfl()
        }
    };
    this.pea = function() {
        var d = bva.mij.xqp.whx("topb"),
            c = bva.mij.xqp.whx("settings"),
            b = bva.mij.xqp.whx("topi");
        bva.mij.qpy = !bva.mij.qpy;
        if (b) {
            b.xhl("turbo", bva.mij.qpy)
        }
        if (d) {
            d.xlm.mom("turbo", "#mcl", [(bva.mij.qpy) ? 1 : 0])
        }
        if (c) {
            c.xlm.mom("turbo", "#mcl", [(bva.mij.qpy) ? 1 : 0])
        }
    };
    this.fpl = function() {
        var b = false;
        if (bva.kgg.tdi == true) {
            if (bva.mij.nvb == true) {
                bva.mij.nvb = false;
                b = bva.kgg.wsu();
                setTimeout(bva.mij.mei, 1400)
            }
        } else {
            b = bva.kgg.wsu();
            setTimeout(bva.mij.mei, 1400)
        }
    };
    this.kuo = function() {
        if (bva.mij.eyo.fhl() && !bva.mij.tfd) {
            bva.mij.nta = false;
            bva.mij.tfd = true;
            bva.mij.xqp.mom("loading", "#stop");
            setTimeout(bva.mij.hiz, 100);
            bva.mij.eyo.urt("silence");
            if (bva.kgg.zai() && bva.kgg.tdi) {
                bva.mij.fpl()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.wuu = function() {
        var d = bva.mij.xqp.whx("topb"),
            c = bva.mij.xqp.whx("settings"),
            b = bva.mij.xqp.whx("topi");
        bva.mij.nnv = !bva.mij.nnv;
        if (bva.mij.nnv === true) {
            bva.mij.mwa();
            if (bva.mij.qoq() === false) {
                bva.mij.jnj(0, 0)
            }
        } else {
            bva.mij.ewl()
        }
        if (b) {
            b.xhl("melody", (bva.mij.nnv) ? 1 : 0)
        }
        if (d) {
            d.xlm.mom("melody", "#mcl", [(bva.mij.nnv) ? 1 : 0])
        }
        if (c) {
            c.xlm.mom("melody", "#mcl", [(bva.mij.nnv) ? 1 : 0])
        }
        bva.mij.egc()
    };
    this.kfz = function() {
        this.jha = false;
        this.gle = false;
        this.fyq = false;
        this.vuh = false;
        this.mnd(false);
        this.qzy.xlm.mom("info", "#tok", [this.language.eiq, true]);
        this.eyo.zqb("collectend");
        if (this.pmr >= 0) {
            clearTimeout(this.pmr);
            this.pmr = -1
        }
        this.sxz();
        this.xbv();
        if (this.yyb == false) {
            this.knv();
            for (var c = 0, b = this.tlk.length; c < b; c++) {
                this.tlk[c].zrj()
            }
            this.yyb = true;
            this.jbk = false;
            this.woa = false;
            this.tnq();
            this.jno = new Date().getTime();
            if (this.zmv) {
                this.id = window.xpv(this.yhj)
            } else {
                this.id = setTimeout(this.yhj, 10)
            }
        }
    };
    this.ghu = function() {};
    this.yhj = function() {
        var c = bva.mij.isg,
            e = 0;
        bva.mij.izy = 0;
        if (!bva.mij.zmv || bva.mij.tad) {
            if (bva.mij.lbo == 0) {
                bva.mij.jno = new Date().getTime()
            } else {
                e = new Date().getTime();
                c = bva.mij.isg + (bva.mij.lbo * bva.mij.isg - (e - bva.mij.jno))
            }
            if (bva.mij.woa) {
                c = bva.mij.zmu
            }
        }
        if (bva.mij.lbo > 0 && !bva.mij.tol && bva.mij.jha) {
            bva.mij.tol = true
        }
        for (var d = 0, b = bva.mij.tlk.length; d < b; d++) {
            if (bva.mij.utk[d] && !bva.mij.tlk[d].fmd) {
                if (d == bva.mij.bzs - 1) {
                    bva.mij.tlk[d].rtk(true)
                } else {
                    bva.mij.tlk[d].rtk((!bva.mij.woa && !bva.mij.qpy))
                }
            }
        }
        if (typeof bva.mij.frr === "function") {
            bva.mij.frr()
        }
        if (bva.mij.qdx === false) {
            bva.mij.nvh()
        } else {
            bva.mij.qqm()
        }
        if (c <= 0) {
            c = 0
        }
        if (bva.mij.iax) {
            return
        }
        if (!bva.mij.gkx()) {
            bva.mij.lbo += 1;
            if (bva.mij.zmv && !bva.mij.tad) {
                bva.mij.id = window.xpv(bva.mij.yhj)
            } else {
                if (c == 0) {
                    bva.mij.yhj()
                } else {
                    bva.mij.id = setTimeout(bva.mij.yhj, c)
                }
            }
        } else {
            bva.mij.yyb = false;
            bva.mij.flg();
            bva.mij.lbo = 0;
            bva.mij.krz = false;
            bva.mij.mho()
        }
    };
    this.frr = function() {};
    this.mho = function() {
        if (bva.mij.yux === false) {
            var d = bva.mij.gkx();
            clearTimeout(bva.mij.gll);
            for (var c = 0, b = bva.mij.tlk.length; c < b && d; c++) {
                if (bva.mij.tlk[c].avu()) {
                    bva.mij.tlk[c].orv();
                    d = false
                }
            }
            if (d) {
                for (var c = 0, b = bva.mij.tlk.length; c < b; c++) {
                    bva.mij.tlk[c].pcq().length = 0;
                    bva.mij.tlk[c].vjb().length = 0;
                    bva.mij.tlk[c].wyo()
                }
                bva.mij.tol = true;
                if (bva.mij.rlr()) {
                    bva.mij.bwm()
                } else {
                    if (bva.mij.okj() === true) {
                        bva.mij.wjp()
                    } else {
                        bva.mij.qrm()
                    }
                }
            } else {
                bva.mij.tol = false
            }
        } else {
            bva.mij.gll = setTimeout(bva.mij.mho, 50)
        }
    };
    this.gkx = function() {
        for (var c = 0, b = this.tlk.length; c < b; c++) {
            if (this.tlk[c] && !this.tlk[c].fmd) {
                return false
            }
        }
        return true
    };
    this.wej = function() {
        return (bva.uug.value79 === 0)
    };
    this.mfl = function() {
        var c = 0,
            b = bva.mij.tlk.length;
        if (!bva.mij.woa) {
            bva.mij.iax = false;
            bva.mij.woa = true;
            if (!bva.mij.gle) {
                if (!bva.mij.ptn) {
                    bva.mij.gle = true;
                    for (c = 0; c < b; c++) {
                        if (bva.mij.tlk[c] && bva.mij.utk[c]) {
                            bva.mij.tlk[c].asj(bva.mij.ufa[c], bva.mij.jhc[c] - bva.mij.jhc[0], bva.mij.gex)
                        }
                    }
                } else {
                    bva.mij.gle = true;
                    for (c = 0; c < b; c++) {
                        if (bva.mij.tlk[c] && bva.mij.utk[c]) {
                            bva.mij.tlk[c].asj((bva.mij.wex) ? bva.mij.fpf[c] : bva.mij.ufa[c], bva.mij.jhc[c] - bva.mij.jhc[0], bva.mij.gex)
                        }
                    }
                }
            }
            for (c = 0; c < b; c++) {
                if (bva.mij.tlk[c] && bva.mij.utk[c]) {
                    bva.mij.tlk[c].dwf()
                }
            }
        }
    };
    this.rdp = function() {
        this.iax = true;
        this.win = 0;
        for (var c = 0, b = this.tlk.length; c < b; c++) {
            if (this.tlk[c] && !this.tlk[c].fmd) {
                this.tlk[c].kdo()
            }
        }
    };
    this.mpj = function() {
        if (this.qpy) {
            this.jhc = this.ves;
            this.isg = this.xdo
        } else {
            this.jhc = this.kku;
            this.isg = this.qpu
        }
        this.tad = this.yuh()
    };
    this.tnq = function() {
        this.eyo.urt("spin")
    };
    this.flg = function() {
        this.eyo.zqb("spin")
    };
    this.dnn = function() {};
    this.xbv = function() {
        if (!this.ptn) {
            this.ssq()
        } else {
            if (this.uwl() === true) {
                this.eyo.rll("freespinstart", 1, 300)
            }
        }
        for (var c = 0, b = this.tlk.length; c < b; c++) {
            this.tlk[c].gkc = ((c % 2) == 0) ? this.eyo.onv("stop1") : this.eyo.onv("stop2");
            this.tlk[c].qxp().length = 0;
            this.tlk[c].gpu = false;
            this.tlk[c].uuw = null;
            this.tlk[c].kxe = null
        }
        for (var c = 0, b = this.fbm.length; c < b; c++) {
            this.fbm[c] = 0
        }
    };
    this.skr = function(b) {
        if (this.ptn === true) {
            if (this.uwl() === true) {
                this.eyo.rll("freespinstart", 0, 300)
            }
            this.qzy.xlm.mom("start", "#rwv", [this.language.start, true])
        } else {
            this.jnj(0, 0);
            this.qzy.xlm.mom("info", "#vdt");
            if (!this.qrp()) {
                this.qzy.xlm.mom("start", "#rwv", [this.language.tbs, true])
            } else {
                this.qzy.xlm.mom("start", "#rwv", [this.language.start, true])
            }
        }
        this.qzy.erc(false);
        this.rko.gjt();
        this.rko.ybq(b)
    };
    this.qrm = function() {
        if (!bva.mij.ptn && bva.mij.win >= bva.mij.totalBet * bva.mij.krc) {
            bva.mij.skr(bva.mij.win / bva.mij.totalBet)
        } else {
            if (bva.mij.ptn && bva.mij.edm >= bva.mij.totalBet * bva.mij.krc) {
                bva.mij.skr(bva.mij.edm / bva.mij.totalBet)
            } else {
                bva.mij.qou()
            }
        }
    };
    this.qou = function() {
        if (this.win > 0 && !this.ptn) {
            this.gpd = false;
            this.zca = false;
            this.kpk();
            if (this.vxp()) {
                this.yza()
            } else {
                this.jnj(0, 200);
                this.qzy.erc(false);
                this.id = setTimeout(this.kar, 200)
            }
        } else {
            if (this.edm > 0 && this.ptn) {
                this.gpd = false;
                this.zca = false;
                this.kpk();
                if (this.vxp()) {
                    this.yza()
                } else {
                    this.qzy.erc(false);
                    this.id = setTimeout(this.eqo, 200)
                }
            } else {
                this.som();
                this.ich = [];
                this.dld = 0;
                if (this.vxp()) {
                    this.yza()
                } else {
                    if (this.qgh()) {
                        this.zlk()
                    } else {
                        if (this.ptn && this.chw > 0 || !this.ptn) {
                            this.mnd(true)
                        }
                        this.lfn()
                    }
                }
            }
        }
    };
    this.bsa = function() {
        this.xre = false;
        clearTimeout(this.aqk);
        this.uja(this.win);
        this.ssq();
        this.mnd(false);
        this.sxz();
        this.zkm();
        this.abc();
        this.qzy.xlm.mom("info", "#vdt");
        this.qzy.erc(false);
        this.fgq(false);
        this.rvt.gjt();
        this.rvt.erc(true);
        this.xqp.mom("settings", "#xwd");
        if (this.uhn.sbj === false) {
            this.qzy.xlm.mom("setting", "#hqg", [this.xqp.mom("settings", "#kvp")])
        }
        if (this.ptn === true && this.uwl() === true) {
            this.eyo.rll("freespinstart", 0, 0)
        } else {
            if (this.ptn === false) {
                this.jnj(0, 0)
            }
        }
    };
    this.cfl = function() {
        this.rvt.erc(false);
        if (!this.ptn) {
            this.qzy.erc(true)
        } else {
            this.qzy.wwj(true)
        }
        this.mnd(true);
        this.fgq(true);
        this.rvt.xwd();
        if (!this.ptn) {
            if (this.win > 0) {
                this.qzy.xlm.mom("info", "#tok", [this.wyj(this.language.vjh) + ": " + this.tyk(this.win)])
            } else {
                this.qzy.xlm.mom("info", "#kgi", [0])
            }
            this.jnj(1, 200)
        } else {
            this.wgo(true);
            this.hbh();
            if (this.uwl() === true) {
                this.eyo.rll("freespinstart", 1, 200)
            }
        }
    };
    this.lmv = function() {
        var b = bva.mij.qzy.xlm.whx("gamble");
        bva.mij.xfq();
        if (b) {
            b.gyu();
            b.hqg(bva.mij.fgi)
        }
        bva.mij.xre = false;
        clearTimeout(bva.mij.aqk);
        bva.mij.ssq();
        bva.mij.sxz();
        bva.mij.zkm();
        bva.mij.abc();
        clearTimeout(bva.mij.vfy);
        if (bva.mij.ptn === false) {
            bva.mij.jnj(1, 300)
        }
        bva.mij.qzy.xlm.mom("info", "#vdt");
        bva.mij.qzy.erc(false);
        bva.mij.mnd(false);
        bva.mij.fgq(false);
        if (bva.mij.kfs) {
            bva.mij.kfs.erc(true);
            bva.mij.kfs.qvc(bva.mij.pwr, bva.mij.win);
            bva.mij.kfs.xlm.mom("history", "#isn");
            bva.mij.kfs.gjt();
            bva.mij.kfs.ftj()
        }
    };
    this.gta = function() {
        if (!bva.mij.iqj) {
            bva.mij.mno({
                type: "roundEnded",
                sender: bva.mij.hdt,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: bva.mij.tyk(bva.mij.win),
                    balanceAfter: bva.mij.tyk(bva.mij.pwr)
                }
            })
        }
        bva.mij.som();
        bva.mij.fgq(true);
        if (bva.mij.kfs) {
            bva.mij.kfs.fuo();
            bva.mij.kfs.air();
            bva.mij.kfs.erc(false);
            bva.mij.kfs.esj(false, true)
        }
        bva.mij.qzy.xlm.mom("start", "#rwv", [bva.mij.language.start, true]);
        bva.mij.vuh = true;
        if (bva.mij.lnl()) {
            bva.mij.imo();
            bva.mij.qzy.erc(true);
            bva.mij.mnd(true);
            if (bva.mij.win > 0) {
                bva.mij.qzy.xlm.mom("info", "#tok", [bva.mij.wyj(bva.mij.language.vjh) + ": " + bva.mij.tyk(bva.mij.win)])
            } else {
                bva.mij.qzy.xlm.mom("info", "#kgi", [0])
            }
            bva.mij.iry()
        } else {
            if (bva.mij.zhn) {
                bva.mij.qzy.mzn(true);
                bva.mij.zge = setTimeout(bva.mij.ueh, 400)
            } else {
                bva.mij.qzy.erc(true);
                bva.mij.mnd(true);
                if (bva.mij.win > 0) {
                    bva.mij.qzy.xlm.mom("info", "#tok", [bva.mij.wyj(bva.mij.language.vjh) + ": " + bva.mij.tyk(bva.mij.win)])
                } else {
                    bva.mij.qzy.xlm.mom("info", "#kgi", [0])
                }
            }
        }
    };
    this.hbh = function() {
        var b = this.xqp.whx("tops");
        if (b) {
            if (b.akq() == 1) {
                b.ncx(0)
            } else {
                b.ncx(1)
            }
            this.egc()
        }
    };
    this.mps = function() {
        var b = this.xqp.whx("topi"),
            c = this.xqp.whx("settings");
        this.fgi = !bva.mij.fgi;
        this.qzy.xlm.mom("gamble", "#hqg", [this.fgi]);
        if (b) {
            b.xhl("gamble", this.fgi)
        }
        if (c) {
            c.xlm.mom("gamble", "#mcl", [(this.fgi) ? 1 : 0])
        }
    };
    this.tze = function() {
        if (this.kdt) {
            return false
        }
        var b = new gup(197, 24, 246, 200),
            c = bva.uug[bva.mij.language.wbo.toLowerCase().replace(/\s/g, "") + (b.y / 4)];
        if (c && c.indexOf(":" + b.uep() + "/") >= 0) {
            return false
        }
        return true
    };
    this.das = function() {
        if (this.orc === false) {
            this.cfj = 100;
            return
        }
        if (this.tze()) {
            var c = new Date().getTime(),
                b = c % this.tlk.length,
                d = c % this.tlk[b].udj.length;
            if (this.cfj <= 0 && ((this.ptn && this.edm == 0) || (!this.ptn && this.win == 0)) && c & 1 == 1) {
                if (this.ptn && this.wex) {
                    this.fpf[b] = d
                } else {
                    this.ufa[b] = d
                }
            } else {
                this.cfj = (this.cfj > 0) ? this.cfj - 1 : 0
            }
        }
    };
    this.kar = function() {
        bva.mij.cho = 0;
        bva.mij.tbz();
        bva.mij.qft();
        bva.mij.czo(bva.mij.ufa);
        bva.mij.qsg();
        bva.mij.lki();
        if ((bva.mij.fjp || bva.mij.qbj || bva.mij.qdx) && bva.mij.win > 0 && bva.mij.dld > 0 && !bva.mij.krz) {
            bva.mij.iwq(bva.mij.fjp, bva.mij.qbj)
        }
        if (bva.mij.win > 0) {
            if (!bva.mij.krz) {
                bva.mij.fjo();
                bva.mij.qzy.erc(false)
            }
            if (!bva.mij.qrp()) {
                if (!bva.mij.kdt) {
                    bva.mij.qzy.xlm.mom("start", "#rwv", [bva.mij.language.tbs, true])
                }
            } else {
                bva.mij.qzy.xlm.mom("start", "#rwv", [bva.mij.language.start, true])
            }
            bva.mij.ctl();
            bva.mij.soa = true;
            bva.mij.zdo = setTimeout(bva.mij.kut, 10)
        } else {}
    };
    this.eqo = function() {};
    this.kut = function() {
        if (!bva.mij.krz) {
            if (!bva.mij.ptn) {
                bva.mij.wnk()
            } else {
                bva.mij.rva()
            }
        }
        if (!bva.mij.zca) {
            if (bva.mij.gwk) {
                bva.mij.pdi()
            } else {
                bva.mij.gbo()
            }
        }
    };
    this.ctl = function() {
        var b = this.qzy.xlm.whx("info");
        if (b) {
            if (!this.qrp()) {
                if (b.zrn()) {
                    b.tok(this.language.kbd, true)
                }
            } else {
                b.tok(this.language.dcr, true)
            }
        }
    };
    this.fjo = function() {};
    this.isy = function() {};
    this.pnr = function() {
        for (var b = 0; b < this.bmv; b++) {
            this.pdz[b] *= this.nza
        }
        this.pdz[this.bmv] *= this.eik()
    };

    function a(d, c) {
        return c[1] - d[1]
    }
    this.kpk = function() {
        var c = [],
            d = 0;
        this.pnr();
        this.ich = [];
        this.dld = 0;
        d = this.pdz[this.bmv];
        for (var b = 0; b < this.bmv; b++) {
            c[b] = [b, this.pdz[b]]
        }
        c.sort(a);
        if (this.ora(d, c)) {
            this.pdz[0] = d;
            this.ich[0] = this.bmv;
            if (this.pdz[0] > 0) {
                this.dld++
            }
            for (var b = 1; b < this.bmv + 1; b++) {
                this.pdz[b] = c[b - 1][1];
                this.ich[b] = c[b - 1][0];
                if (this.pdz[b] > 0) {
                    this.dld++
                }
            }
            this.gwk = false
        } else {
            for (var b = 0; b < this.bmv; b++) {
                this.pdz[b] = c[b][1];
                this.ich[b] = c[b][0];
                if (this.pdz[b] > 0) {
                    this.dld++
                }
            }
            this.pdz[this.bmv] = d;
            this.ich[this.bmv] = this.bmv;
            if (this.pdz[this.bmv] > 0) {
                this.dld++
            }
            this.gwk = true
        }
    };
    this.ora = function(c, b) {
        return c > b[0][1]
    };
    this.yfd = function() {
        this.cho = this.cho + 1
    };
    this.qpa = function() {
        this.izy = this.izy + 1
    };
    this.pdi = function() {
        if (!this.vuh) {
            if (this.cho < this.ich.length && this.ich[this.cho] < this.szx.length) {
                if (!this.cns) {
                    this.tbz()
                }
                var b = this.jsf(this.ich[this.cho]);
                this.yuf = this.gcq(b);
                if (!this.cns) {
                    this.jje(b)
                }
                if (this.pdz[this.cho] > 0) {
                    this.hlu(this.mfm, this.yuf, this.cho);
                    this.rko.gjt();
                    if (!this.gpd && !this.krz && this.cho == 0) {
                        if (this.xth) {
                            this.eyo.urt("symb" + this.mfm);
                            if (this.brs > 0) {
                                this.vfy = setTimeout(this.sfa, this.brs)
                            }
                        } else {
                            this.toy()
                        }
                    } else {
                        if (this.ihq) {
                            this.gym()
                        }
                    }
                    this.bpe()
                } else {
                    this.yfd();
                    this.pdi()
                }
            } else {
                if (this.sob >= 0 && this.gwk && this.cho <= this.szx.length) {
                    this.gbo();
                    this.soa = false
                } else {
                    this.ave()
                }
            }
        }
    };
    this.gcq = function(b) {
        var e = 0,
            c = 0;
        this.yuf = 0;
        this.zcl = 0;
        this.mfm = b[e];
        if (this.mfm == this.sob) {
            return 0
        }
        for (var d = e; d < 5; d++) {
            if (this.mfm == b[d]) {
                this.yuf += 1
            } else {
                break
            }
        }
        if (this.yuf == 0) {
            return 0
        }
        c = this.pqd[this.mfm][this.yuf - 1];
        if (c > 0) {
            return this.yuf
        }
        return 0
    };
    this.gbo = function() {
        if (!this.vuh) {
            if (!this.cns) {
                this.tbz()
            }
            var b = this.don();
            if (b > 0 && this.pqd[this.sob][b - 1] > 0) {
                this.hlu(this.sob, b, this.cho);
                this.rko.gjt();
                if (!this.gpd && !this.krz && this.cho == 0) {
                    if (this.xth) {
                        this.eyo.urt("symb" + this.sob);
                        if (this.brs > 0) {
                            this.vfy = setTimeout(this.sfa, this.brs)
                        }
                    } else {
                        this.toy()
                    }
                } else {
                    if (this.ihq) {
                        this.gym()
                    }
                }
                this.riw()
            } else {
                this.ave()
            }
        }
    };
    this.bpe = function() {
        if (this.xre && this.zhn || !this.zhn) {
            if (!(this.fgi && this.hem && !this.xre && !this.krz)) {
                this.mso([this.ich[this.cho] + 1]);
                if (this.ohg && this.zhn && this.izy > 0 && !this.krz) {
                    this.rko.bpe(this.ich[this.cho], this.ipd, this.qoz, this.mfm, this.zcl, this.yuf, true, true)
                } else {
                    this.rko.bpe(this.ich[this.cho], this.ipd, this.qoz, this.mfm, this.zcl, this.yuf, true, false)
                }
            } else {
                if (!this.hhi) {
                    this.mso([this.ich[this.cho] + 1]);
                    if (this.ohg) {
                        this.rko.bpe(this.ich[this.cho], this.ipd, this.qoz, this.mfm, this.zcl, this.yuf, true, true)
                    } else {
                        this.rko.bpe(this.ich[this.cho], this.ipd, this.qoz, this.mfm, this.zcl, this.yuf, false, false)
                    }
                } else {
                    this.qzy.xlm.mom("win", "#vdt");
                    this.mso([this.bmv + 1]);
                    this.yfd();
                    this.pdi()
                }
            }
        } else {
            if (this.zhn && !this.krz && !this.hhi) {
                this.mso([this.ich[this.cho] + 1]);
                if (this.ohg) {
                    this.rko.bpe(this.ich[this.cho], this.ipd, this.qoz, this.mfm, this.zcl, this.yuf, true, true)
                } else {
                    this.rko.bpe(this.ich[this.cho], this.ipd, this.qoz, this.mfm, this.zcl, this.yuf, false, false)
                }
            } else {
                this.qzy.xlm.mom("win", "#vdt");
                this.mso([this.bmv + 1]);
                this.yfd();
                this.pdi()
            }
        }
    };
    this.riw = function() {
        if (this.xre && this.zhn || !this.zhn) {
            this.mso([this.bmv + 1]);
            if (!(this.fgi && this.hem && !this.xre && !this.krz)) {
                if (this.ohg && this.zhn && this.izy > 0 && !this.krz) {
                    this.rko.bpe(-1, this.ipd, false, this.sob, this.zcl, this.yuf, true, true)
                } else {
                    this.rko.bpe(-1, this.ipd, false, this.sob, this.zcl, this.yuf, true, false)
                }
            } else {
                if (!this.hhi) {
                    if (this.ohg) {
                        this.rko.bpe(-1, this.ipd, false, this.sob, this.zcl, this.yuf, true, true)
                    } else {
                        this.rko.bpe(-1, this.ipd, false, this.sob, this.zcl, this.yuf, false, false)
                    }
                } else {
                    this.qzy.xlm.mom("win", "#vdt");
                    this.yfd();
                    this.pdi()
                }
            }
        } else {
            if (this.zhn && !this.krz && !this.hhi) {
                this.mso([this.bmv + 1]);
                if (this.ohg) {
                    this.rko.bpe(-1, this.ipd, false, this.sob, this.zcl, this.yuf, true, true)
                } else {
                    this.rko.bpe(-1, this.ipd, false, this.sob, this.zcl, this.yuf, false, false)
                }
            } else {
                this.qzy.xlm.mom("win", "#vdt");
                this.mso([this.bmv + 1]);
                this.yfd();
                this.pdi()
            }
        }
    };
    this.mso = function(b) {
        if (this.mnp === true) {
            this.xqp.mom("llinep", "#vqy", [b, true]);
            this.xqp.mom("rlinep", "#vqy", [b, true])
        }
    };
    this.hlu = function(c, d, b) {
        var e = this.qzy.xlm.whx("win");
        if (e) {
            if (this.win > 0 && !this.ptn) {
                if (this.pdz[b] > 0) {
                    if (c == this.sob) {
                        e.mvq(this.language.vrs, this.language.win + ": " + this.tyk(this.pdz[b]), c, d)
                    } else {
                        e.mvq(this.language.oat + " " + (this.ich[b] + 1) + ": ", this.language.win + ": " + this.tyk(this.pdz[b]), c, d)
                    }
                }
            } else {
                if (this.ptn && this.edm > 0) {
                    if (this.pdz[b] > 0) {
                        if (this.soh > 1) {
                            if (c == this.sob) {
                                e.mvq(this.language.vrs, this.language.win + ": " + this.tyk(this.pdz[b]) + " x " + this.soh, c, d)
                            } else {
                                e.mvq(this.language.oat + " " + (this.ich[b] + 1) + ": ", this.language.win + ": " + this.tyk(this.pdz[b]) + " x " + this.soh, c, d)
                            }
                        } else {
                            if (c == this.sob) {
                                e.mvq(this.language.vrs, this.language.win + ": " + this.tyk(this.pdz[b]), c, d)
                            } else {
                                e.mvq(this.language.oat + " " + (this.ich[b] + 1) + ": ", this.language.win + ": " + this.tyk(this.pdz[b]), c, d)
                            }
                        }
                    }
                }
            }
        }
    };
    this.sfa = function() {
        bva.mij.eyo.urt("wincountfade")
    };
    this.tbz = function() {
        for (var b = 0; b < this.ipd.length; b++) {
            for (var c = 0; c < this.ipd[b].length; c++) {
                this.ipd[b][c] = -1
            }
        }
    };
    this.qft = function() {
        for (var b = 0; b < this.bkp.length; b++) {
            for (var c = 0; c < this.bkp[b].length; c++) {
                this.bkp[b][c] = -1
            }
        }
    };
    this.czo = function(e) {
        for (var d = 0; d < this.bzs; d++) {
            for (var b = 0; b < this.qwc; b++) {
                var c = (e[d] - 1 + b >= 0) ? e[d] - 1 + b : this.tlk[d].udj.length + e[d] - 1 + b;
                c = (c > this.tlk[d].udj.length - 1) ? c - (this.tlk[d].udj.length) : c;
                this.bkp[d][b] = this.tlk[d].udj[c]
            }
        }
    };
    this.qsg = function() {
        if (this.cns) {
            for (var d = 0; d < this.szx.length; d++) {
                if (this.ich[d] < this.szx.length) {
                    var c = this.jsf(this.ich[d]);
                    this.yuf = this.gcq(c);
                    if (this.pdz[d] > 0) {
                        for (var b = this.zcl; b < this.zcl + this.yuf; b++) {
                            if (this.vfq && c[b] == this.trb) {
                                this.ipd[b][this.szx[this.ich[d]][b] - 1] = this.ikx
                            } else {
                                this.ipd[b][this.szx[this.ich[d]][b] - 1] = c[b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.lki = function() {
        if (this.cns) {
            if (this.sob >= 0) {
                var d = 0;
                for (var c = 0; c < this.bkp.length; c++) {
                    for (var b = 0; b < this.bkp[c].length; b++) {
                        if (this.bkp[c][b] == this.sob) {
                            d++
                        }
                    }
                }
                if ((this.pdz[this.szx.length] > 0 && this.gwk) || (this.pdz[0] > 0 && !this.gwk)) {
                    for (var c = 0; c < this.bkp.length; c++) {
                        for (var b = 0; b < this.bkp[c].length; b++) {
                            if (this.bkp[c][b] == this.sob) {
                                this.ipd[c][b] = this.bkp[c][b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.jsf = function(d) {
        var c = [];
        for (var b = 0; b < this.szx[d].length; b++) {
            c[b] = this.bkp[b][this.szx[d][b] - 1]
        }
        return c
    };
    this.jje = function(c) {
        for (var b = this.zcl; b < this.zcl + this.yuf; b++) {
            if (this.vfq && c[b] == this.trb) {
                this.ipd[b][this.szx[this.ich[this.cho]][b] - 1] = this.ikx
            } else {
                this.ipd[b][this.szx[this.ich[this.cho]][b] - 1] = c[b]
            }
        }
    };
    this.don = function() {
        var d = 0;
        for (var c = 0; c < this.bkp.length; c++) {
            for (var b = 0; b < this.bkp[c].length; b++) {
                if (this.bkp[c][b] == this.sob) {
                    this.ipd[c][b] = this.bkp[c][b];
                    d++;
                    break
                }
            }
        }
        return d
    };
    this.trx = function(b) {
        if (((this.vfq && b == this.ikx) && this.ikx >= 0) || (b == this.trb && this.trb >= 0)) {
            return true
        }
        return false
    };
    this.lfn = function() {
        if (this.dlk) {
            this.qzy.xlm.mom("start", "#rwv", [this.language.start, true]);
            if (!this.ptn) {
                this.sxz();
                this.qzy.erc(false);
                this.zxp = setTimeout(this.gqq, 600)
            } else {
                this.waz()
            }
        } else {
            if (!this.ptn) {
                this.kav()
            } else {
                this.jya()
            }
        }
    };
    this.kav = function() {
        if (this.win > 0) {
            if (this.fgi && this.hem) {
                setTimeout(this.lmv, 400)
            } else {
                if (this.zhn || this.chz) {
                    if (!this.ujy && !this.vuh) {
                        if (this.chz) {
                            this.ujy = true;
                            this.sxz();
                            setTimeout(this.tbs, 400)
                        } else {
                            clearTimeout(this.afn);
                            this.afn = setTimeout(this.wmt, 400)
                        }
                    }
                }
            }
        } else {
            this.mno({
                type: "roundEnded",
                sender: this.hdt,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: this.tyk(this.win),
                    balanceAfter: this.tyk(this.pwr)
                }
            });
            this.qzy.xlm.mom("info", "#tok", [this.language.vuf, true]);
            this.tpp();
            if (this.xyj > 0 && this.jky >= this.xyj) {
                this.mnd(false);
                this.qzy.erc(false);
                this.imo();
                this.xro()
            } else {
                this.qzy.xlm.mom("start", "#rwv", [this.language.start, true]);
                if (this.lnl()) {
                    this.imo();
                    this.qzy.xlm.mom("info", "#nzh", [0]);
                    this.qzy.erc(true);
                    this.mnd(true);
                    this.iry()
                } else {
                    if (this.zhn) {
                        this.zge = setTimeout(this.ueh, 400)
                    } else {
                        this.qzy.xlm.mom("info", "#nzh", [0]);
                        this.qzy.erc(true);
                        this.mnd(true)
                    }
                }
            }
        }
    };
    this.jya = function() {};
    this.lhs = function() {
        return ((this.zhn || (this.fgi && this.hem && !this.xre)) && this.dld > 1 && this.hhi)
    };
    this.ygu = function() {
        var c = [],
            f = [],
            e = (this.gwk) ? 0 : 1,
            b = ((this.gwk && this.pdz[this.bmv] > 0) || (!this.gwk && this.pdz[0] > 0)) ? this.dld - 1 : this.dld;
        for (var d = 0; d < b; d++, e++) {
            c[d] = this.ich[e];
            f[d] = this.ich[e] + 1
        }
        this.lrm = true;
        this.zca = true;
        this.qft();
        this.tbz();
        this.czo((this.ptn === true) ? this.fpf : this.ufa);
        this.qsg();
        this.lki();
        this.qzy.xlm.mom("win", "#tok", [this.language.win + " " + b + " " + this.language.yzu, true]);
        this.mso(f);
        this.rko.stop();
        this.rko.mrs(c, this.ipd);
        this.pmr = setTimeout(this.ilo, 1000)
    };
    this.ilo = function() {
        if (bva.mij.pmr >= 0 && !bva.mij.zhn) {
            bva.mij.pmr = -1;
            bva.mij.sxz()
        }
        if (bva.mij.qgh()) {
            bva.mij.zlk()
        } else {
            bva.mij.lfn()
        }
    };
    this.ave = function() {
        this.gpd = true;
        this.krz = true;
        if (!this.ptn) {
            if (!this.xre) {
                if (this.lhs()) {
                    this.ygu()
                } else {
                    this.ilo()
                }
            }
            if (!(this.vuh || this.zca || ((this.lrm) && !this.xre))) {
                if (!(this.fgi && this.hem && !this.xre)) {
                    this.rky()
                }
            }
        } else {
            if (!this.xre) {
                if (this.lhs()) {
                    this.ygu()
                } else {
                    this.ilo()
                }
            } else {
                if (!(this.vuh || this.zca || (this.lrm && !this.xre))) {
                    this.rky()
                } else {}
            }
        }
    };
    this.rky = function() {
        this.krz = true;
        if (!(this.rko.avu() || this.nga)) {
            this.nga = true;
            if (!this.ptn) {
                this.kar()
            } else {
                this.eqo();
                if (!this.dlk && this.chw > 0) {
                    if (!this.xre) {
                        this.mnd(true);
                        this.qzy.wwj(true)
                    }
                }
            }
        }
    };
    this.okj = function() {
        return false
    };
    this.vxp = function() {
        return false
    };
    this.qgh = function() {
        return false
    };
    this.wjp = function() {};
    this.yza = function() {};
    this.zlk = function() {};
    this.qrp = function() {
        return this.dlk
    };
    this.hyn = function() {
        if (!bva.mij.ujy && !bva.mij.vuh) {
            bva.mij.wmt()
        }
    };
    this.ueh = function() {
        if (bva.mij.ruj() != null && (bva.mij.qoj <= 0 || (bva.mij.ptn === false && bva.mij.hnt === false && bva.mij.pwr - bva.mij.eik() < bva.mij.drc) || (bva.mij.ptn === false && bva.mij.hnt === false && bva.mij.agh > 0 && bva.mij.pwr >= bva.mij.agh) || (bva.mij.ptn === false && bva.mij.gou > 0 && bva.mij.win > bva.mij.gou))) {
            if (bva.mij.zhn === true) {
                bva.mij.tmy()
            }
            bva.mij.mnd(true);
            if (bva.mij.ptn === true) {
                bva.mij.uja(bva.mij.win);
                bva.mij.sxz();
                bva.mij.zkm();
                bva.mij.abc();
                bva.mij.qzy.xlm.mom("info", "#vdt");
                bva.mij.wgo(true);
                bva.mij.qzy.wwj(true)
            } else {
                bva.mij.qzy.xlm.mom("info", "#mwj");
                bva.mij.qzy.erc(true)
            }
        } else {
            if (!bva.mij.yyb) {
                bva.mij.wmt()
            }
        }
    };
    this.tph = function() {};
    this.uyk = function() {};
    this.wfh = function() {};
    this.tjx = function() {};
    this.waz = function() {};
    this.gqq = function() {};
    this.gsq = function() {};
    this.idb = function() {};
    this.ptv = function() {};
    this.zqz = function() {
        var b = this.xqp.whx("tops");
        if (b) {
            b.ncx(1)
        }
    };
    this.hao = function() {
        var b = this.xqp.whx("tops");
        if (b) {
            b.ncx(0)
        }
    };
    this.cib = function() {};
    this.fvh = function() {};
    this.avd = function() {};
    this.zgd = function() {};
    this.huv = function() {
        if (!(this.dlk && this.ptn && this.zhn)) {
            this.bjl = false;
            if (!bva.kgg.tdi) {
                this.tgk = this.language.vnx
            } else {
                this.tgk = this.language.cgs
            }
            this.bnm = setInterval(this.jwp, 1000)
        }
    };
    this.jwp = function() {
        var b = bva.mij.qzy.xlm.whx("info");
        if (b) {
            if (bva.mij.bjl) {
                b.tok(bva.mij.tgk, true)
            } else {
                b.vdt()
            }
            bva.mij.egc();
            bva.mij.bjl = !bva.mij.bjl
        }
    };
    this.qgb = function() {};
    this.mmp = function() {};
    this.vpu = function(b) {};
    this.lxz = function(b) {
        if (b) {
            this.r1 = this.lri.wvv.nrg;
            this.r2 = this.lri.wvv.kso;
            this.r3 = this.lri.wvv.apy;
            this.r4 = this.lri.wvv.sii;
            this.r5 = this.lri.wvv.lih
        } else {
            this.r1 = this.lri.wvv.r1;
            this.r2 = this.lri.wvv.r2;
            this.r3 = this.lri.wvv.r3;
            this.r4 = this.lri.wvv.r4;
            this.r5 = this.lri.wvv.r5
        }
        this.dou.udj = this.r1;
        this.wce.udj = this.r2;
        this.stl.udj = this.r3;
        this.lhh.udj = this.r4;
        this.vvn.udj = this.r5
    };
    this.jib = function() {};
    this.wnk = function() {
        if (!(this.fgi && this.hem)) {
            setTimeout(this.esk, 500);
            if (!this.zhn && !this.chz && !this.fgi && !this.qrp()) {
                this.qzy.xlm.mom("gamble", "#tiz")
            }
        } else {
            setTimeout(this.ooh, 500)
        }
        this.rgm = (this.win > this.totalBet) ? true : false;
        this.puo = 0;
        this.boi = 0;
        this.uib = 0;
        this.pzt = 0;
        this.vob = 0;
        this.zxv = this.win;
        this.jno = new Date().getTime();
        this.xre = true;
        this.qqs = 0;
        this.abc();
        this.eyo.zqb("winfinal");
        this.aqk = setTimeout(this.dbf, this.eow)
    };
    this.esk = function() {
        if (bva.mij.zhn || bva.mij.qrp()) {
            bva.mij.qzy.fki(true)
        } else {
            bva.mij.qzy.ymh(true)
        }
    };
    this.ooh = function() {
        bva.mij.qzy.wup(true)
    };
    this.rva = function() {};
    this.hwv = function() {};
    this.sza = function() {
        this.sxz();
        this.zkm();
        if (this.ptn) {
            this.lrm = true
        }
        this.whp()
    };
    this.xvy = function() {};
    this.sxz = function() {
        this.zca = true;
        this.gpd = true;
        if (this.fjp || this.qbj || this.qdx) {
            this.iwq(false, false)
        }
        this.qzy.xlm.mom("win", "#vdt");
        this.mso(null);
        this.rko.stop();
        this.rko.xwd()
    };
    this.zkm = function() {
        if (this.xth) {
            for (var c = 0, b = this.eyo.kyq("symb"); c < b; c++) {
                this.eyo.zqb("symb" + c)
            }
        }
    };
    this.toy = function() {
        if (bva.mij.xre) {
            bva.mij.atk = false;
            bva.mij.qqs = new Date().getTime();
            bva.mij.eyo.urt("wincount");
            bva.mij.izy += 1;
            bva.mij.boi = 0;
            bva.mij.uib = 0
        } else {
            clearTimeout(bva.mij.vfy);
            if (bva.mij.ptn === true && bva.mij.uwl() === true) {
                bva.mij.eyo.rll("freespinstart", bva.mij.fyf(), 300)
            } else {
                if (bva.mij.ptn === false) {
                    bva.mij.jnj(1, 300)
                }
            }
        }
    };
    this.abc = function() {
        this.eyo.zqb("wincount");
        this.eyo.zqb("wincount1");
        this.eyo.zqb("wincount2");
        this.eyo.zqb("wincount3");
        this.eyo.zqb("wincount4");
        this.eyo.zqb("wincount5");
        this.eyo.zqb("wincount6")
    };
    this.wgq = function() {
        bva.mij.atk = true;
        if (bva.mij.ptn === true && bva.mij.uwl() === true) {
            bva.mij.eyo.rll("freespinstart", bva.mij.fyf(), 300)
        } else {
            if (bva.mij.ptn === false && bva.mij.dlk === false) {
                bva.mij.jnj(1, 300)
            }
        }
    };
    this.dbf = function() {
        var d = 0,
            b = bva.mij.eow,
            c = 0;
        if (bva.mij.vob < bva.mij.zxv) {
            if (bva.mij.scn == 1) {
                bva.mij.vkk()
            } else {
                if (bva.mij.scn == 2) {
                    bva.mij.rxm()
                } else {
                    if (bva.mij.scn == 3) {
                        bva.mij.jke()
                    }
                }
            }
            d = bva.mij.bux(bva.mij.zxv - bva.mij.vob);
            bva.mij.vob += d;
            bva.mij.uja(bva.mij.pzt + bva.mij.vob);
            bva.mij.puo++;
            c = new Date().getTime();
            b = bva.mij.eow + (bva.mij.puo * bva.mij.eow - (c - bva.mij.jno));
            bva.mij.aqk = setTimeout(bva.mij.dbf, b)
        } else {
            bva.mij.whp()
        }
    };
    this.vkk = function() {
        if (this.qqs > 0) {
            var b = new Date().getTime() - this.qqs;
            if (b > 7112 && this.boi == 0) {
                this.eyo.urt("wincount1");
                this.boi = 1
            } else {
                if (b > (7112 + (3556 * this.boi))) {
                    if (this.boi % 2 == 0) {
                        if (this.vob >= this.totalBet * this.hcf) {
                            this.eyo.urt("wincount5");
                            if (this.zpv) {
                                if (!this.rko.qqn) {
                                    this.rko.hfh()
                                } else {
                                    this.rko.wrs()
                                }
                            }
                        } else {
                            if (this.vob >= this.totalBet * this.krc) {
                                this.eyo.urt("wincount3")
                            } else {
                                this.eyo.urt("wincount1")
                            }
                        }
                    } else {
                        if (this.vob >= this.totalBet * this.hcf) {
                            this.eyo.urt((this.eyo.mde === true) ? "wincount5" : "wincount6");
                            if (this.zpv) {
                                if (!this.rko.qqn) {
                                    this.rko.hfh()
                                } else {
                                    this.rko.wrs()
                                }
                            }
                        } else {
                            if (this.vob >= this.totalBet * this.krc) {
                                this.eyo.urt((this.eyo.mde === true) ? "wincount3" : "wincount4")
                            } else {
                                this.eyo.urt((this.eyo.mde === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.boi += 1
                }
            }
        }
    };
    this.rxm = function() {
        if (this.qqs > 0) {
            var b = new Date().getTime() - this.qqs;
            if (b > 4173 && this.boi == 0) {
                this.eyo.urt("wincount1");
                this.boi = 1
            } else {
                if (b > (4173 + (4173 * (this.boi + this.uib)))) {
                    if (this.boi % 2 == 0) {
                        if (this.vob >= this.totalBet * this.hcf) {
                            this.eyo.urt("wincount5");
                            if (this.zpv) {
                                if (!this.rko.qqn) {
                                    this.rko.hfh()
                                } else {
                                    this.rko.wrs()
                                }
                            }
                            this.uib += 1
                        } else {
                            if (this.vob >= this.totalBet * this.krc) {
                                this.eyo.urt("wincount3")
                            } else {
                                this.eyo.urt("wincount1")
                            }
                        }
                    } else {
                        if (this.vob >= this.totalBet * this.hcf) {
                            this.eyo.urt((this.eyo.mde === true) ? "wincount5" : "wincount6");
                            if (this.zpv) {
                                if (!this.rko.qqn) {
                                    this.rko.hfh()
                                } else {
                                    this.rko.wrs()
                                }
                            }
                            this.uib += 1
                        } else {
                            if (this.vob >= this.totalBet * this.krc) {
                                this.eyo.urt((this.eyo.mde === true) ? "wincount3" : "wincount4")
                            } else {
                                this.eyo.urt((this.eyo.mde === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.boi += 1
                }
            }
        }
    };
    this.jke = function() {};
    this.whp = function() {
        if (this.zxv > 0) {
            clearTimeout(this.vfy);
            this.eyo.rll("wincountfade", 0, 300);
            if (this.qqs > 0) {
                this.eyo.urt("winfinal")
            } else {
                if (this.ptn === false && this.dlk === false) {
                    this.jnj(1, 300)
                }
            }
        } else {
            this.wgq()
        }
        this.abc();
        this.uja(this.win);
        this.nkp(this.win);
        this.xre = false;
        clearTimeout(this.aqk);
        if (!(this.zhn || this.chz)) {
            if (!(this.xqz > 0)) {
                if (!this.fgi) {
                    this.zup = setTimeout(this.gym, 500)
                }
            } else {
                if (this.ptn && this.chw > 0) {
                    this.qzy.fki(true);
                    if (!this.dlk && !this.qgh()) {
                        this.mnd(true)
                    }
                }
            }
        }
        if (this.gpd) {
            if (this.lhs()) {
                this.ygu()
            } else {
                this.ilo()
            }
        }
    };
    this.bux = function(c) {
        var b = this.nza;
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
    this.xas = function() {
        return !(this.qrp() || this.chz || this.ptn)
    };
    this.muk = function() {
        var d = bva.mij.qzy.xlm.whx("gamble"),
            c = bva.mij.qzy.xlm.whx("info"),
            b = bva.mij.qzy.xlm.whx("win");
        bva.mij.xfq();
        if (d) {
            d.gyu();
            d.hqg(bva.mij.fgi)
        }
        if (b) {
            b.vdt()
        }
        if (c) {
            c.tok(bva.mij.wyj(bva.mij.language.vjh) + ": " + bva.mij.tyk(bva.mij.win))
        }
        bva.mij.lri.tbs()
    };
    this.tbs = function() {
        if (!bva.mij.vuh) {
            if (bva.mij.nvo != bva.mij.owo) {
                bva.mij.qzy.fki(true)
            }
            bva.mij.sxz();
            bva.mij.gyv = 20;
            if (bva.mij.win < bva.mij.gyv) {
                bva.mij.gyv = bva.mij.win;
                bva.mij.lju()
            } else {
                if (bva.mij.win >= bva.mij.eik() * 25) {
                    bva.mij.gyv = 40
                }
                bva.mij.lju()
            }
        }
    };
    this.pmq = function() {
        this.vuh = true;
        this.ujy = false;
        this.zxv = 0;
        clearTimeout(this.oqv);
        this.eyo.zqb("collect");
        this.eyo.zqb("collectend");
        this.eyo.urt("collectend");
        this.qvh(this.pwr, true, !this.hnt);
        this.ssq();
        this.tpp();
        this.qzy.xlm.mom("start", "#rwv", [this.language.start, true]);
        this.mno({
            type: "roundEnded",
            sender: this.hdt,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                win: this.tyk(this.win),
                balanceAfter: this.tyk(this.pwr)
            }
        });
        if (this.xyj > 0 && this.jky >= this.xyj) {
            this.mnd(false);
            this.qzy.erc(false);
            this.imo();
            this.xro()
        } else {
            if (this.lnl()) {
                this.imo();
                this.mnd(true);
                this.qzy.erc(true);
                this.iry()
            } else {
                this.mnd(true);
                if (!this.zhn) {
                    this.qzy.erc(true)
                } else {
                    this.zge = setTimeout(this.ueh, 500)
                }
            }
        }
    };
    this.lju = function() {
        this.yex = false;
        this.rgm = (this.win > this.totalBet) ? true : false;
        this.puo = 0;
        this.pzt = this.win;
        if (this.hnt) {
            this.nri = this.kun - this.win
        } else {
            this.nri = this.pwr - this.win
        }
        this.vob = 0;
        this.zxv = this.win;
        this.jno = new Date().getTime();
        this.ujy = true;
        this.oqv = setTimeout(this.pda, this.slo)
    };
    this.pda = function() {
        var d = 0,
            b = bva.mij.eow,
            c = 0;
        if (bva.mij.zxv > 0) {
            if (!bva.mij.yex) {
                bva.mij.eyo.zqb("collect");
                bva.mij.eyo.zqb("collectend");
                bva.mij.eyo.urt("collect");
                bva.mij.yex = true
            }
            d = Math.round(bva.mij.zxv / bva.mij.gyv);
            bva.mij.zxv -= d;
            bva.mij.puo++;
            bva.mij.gyv -= 1;
            if (bva.mij.zxv < 0) {
                bva.mij.zxv = 0
            }
            bva.mij.uja(bva.mij.pzt - (bva.mij.win - bva.mij.zxv));
            if (bva.mij.hnt) {
                bva.mij.iil(bva.mij.nri + (bva.mij.win - bva.mij.zxv), true)
            } else {
                bva.mij.qvh(bva.mij.nri + (bva.mij.win - bva.mij.zxv), true, false)
            }
            c = new Date().getTime();
            b = bva.mij.slo + (bva.mij.puo * bva.mij.slo - (c - bva.mij.jno));
            bva.mij.oqv = setTimeout(bva.mij.pda, b)
        } else {
            if (!bva.mij.vuh) {
                bva.mij.eyo.zqb("collect");
                bva.mij.eyo.urt("collectend");
                bva.mij.ujy = false;
                bva.mij.vuh = true;
                clearTimeout(bva.mij.oqv);
                bva.mij.qvh(bva.mij.pwr, true, !bva.mij.hnt);
                bva.mij.ssq();
                bva.mij.tpp();
                bva.mij.qzy.xlm.mom("start", "#rwv", [bva.mij.language.start, true]);
                bva.mij.mno({
                    type: "roundEnded",
                    sender: bva.mij.hdt,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        win: bva.mij.tyk(bva.mij.win),
                        balanceAfter: bva.mij.tyk(bva.mij.pwr)
                    }
                });
                if (bva.mij.xyj > 0 && bva.mij.jky >= bva.mij.xyj) {
                    bva.mij.mnd(false);
                    bva.mij.qzy.erc(false);
                    bva.mij.imo();
                    bva.mij.xro()
                } else {
                    if (bva.mij.nvo == bva.mij.owo) {
                        bva.mij.nvo()
                    } else {
                        if (bva.mij.lnl()) {
                            bva.mij.imo();
                            bva.mij.qzy.erc(true);
                            bva.mij.mnd(true);
                            bva.mij.iry()
                        } else {
                            if (!bva.mij.zhn) {
                                bva.mij.qzy.erc(true)
                            } else {
                                bva.mij.qzy.mzn(true)
                            }
                            bva.mij.mnd(true);
                            if (bva.mij.zhn || bva.mij.chz) {
                                bva.mij.qzy.xlm.mom("info", "#tok", [bva.mij.wyj(bva.mij.language.vjh) + ": " + bva.mij.tyk(bva.mij.win)]);
                                if (bva.mij.zhn) {
                                    bva.mij.zge = setTimeout(bva.mij.ueh, 400)
                                } else {
                                    if (bva.mij.chz) {}
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.iqw = function(b, c, d) {
        if (b <= c) {
            return 1
        }
        var e = 0,
            f = this.ede(b, c, d),
            g = 0;
        while (b > g) {
            f = this.ede(b - g, c, d);
            g += f;
            e++
        }
        return e
    };
    this.ede = function(e, b, c) {
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
    this.uff = function(b) {
        this.iqj = true;
        this.eot();
        this.qzy.xlm.mom("info", "#tok", ["", true]);
        this.dzs(true);
        this.sqe(b);
        if (b == bva.sva.ywb.avt) {
            this.som();
            this.qzy.xlm.mom("info", "#kgi", [0]);
            this.kum((this.xyj > 0 && this.jky < this.xyj), false, true);
            this.qzy.erc(true);
            this.mnd(true);
            this.dom()
        } else {
            if (b == bva.sva.ywb.ung) {
                if (this.win > 0) {
                    this.krz = true;
                    this.vuh = false;
                    this.gpd = false;
                    this.zca = false;
                    this.kpk();
                    this.uja(this.win);
                    this.qzy.xlm.mom("info", "#tok", [this.wyj(this.language.vjh) + ": " + this.tyk(this.win)]);
                    this.xre = false;
                    this.iwq(this.fjp, this.qbj);
                    this.fjo();
                    if (this.taj() === false) {
                        this.hem = true;
                        this.qzy.xlm.mom("start", "#rwv", [this.language.tbs, true]);
                        this.qzy.xlm.mom("gamble", "#tiz");
                        this.zup = setTimeout(this.gym, 10)
                    } else {
                        this.hem = false
                    }
                    if (this.vxp()) {
                        this.yza()
                    } else {
                        this.kar();
                        this.qzy.ymh(true)
                    }
                } else {
                    this.som();
                    this.qzy.xlm.mom("info", "#kgi", [0]);
                    this.kum((this.xyj > 0 && this.jky < this.xyj), false, true);
                    this.qzy.erc(true);
                    this.mnd(true);
                    this.dom()
                }
                this.xqz = 0;
                this.chw = 0
            } else {
                if (b == bva.sva.ywb.rzq || b == bva.sva.ywb.mqv) {
                    this.xqz = 0;
                    this.chw = 0;
                    this.vuh = true;
                    this.som();
                    this.qzy.xlm.mom("info", "#kgi", [0]);
                    this.kum((this.xyj > 0 && this.jky < this.xyj), false, true);
                    this.qzy.erc(true);
                    this.mnd(true);
                    this.dom()
                } else {
                    if (b == bva.sva.ywb.ynx || b == bva.sva.ywb.sku || b == bva.sva.ywb.fcg || b == bva.sva.ywb.egq) {
                        this.jbv(b)
                    } else {
                        if (b == bva.sva.ywb.mot) {
                            this.lxz(false);
                            this.xqz = 0;
                            this.chw = 0;
                            this.hem = true;
                            this.vuh = false;
                            if (this.win > 0) {
                                this.uja(this.win);
                                this.qzy.xlm.mom("info", "#tok", [this.wyj(this.language.vjh) + ": " + this.tyk(this.win)]);
                                if (this.taj() === false) {
                                    this.qzy.xlm.mom("start", "#rwv", [this.language.tbs, true]);
                                    this.qzy.xlm.mom("gamble", "#tiz");
                                    this.zup = setTimeout(this.gym, 10)
                                } else {
                                    this.hem = false
                                }
                                this.qzy.ymh(true)
                            } else {
                                this.som();
                                this.qzy.xlm.mom("info", "#kgi", [0]);
                                this.kum((this.xyj > 0 && this.jky < this.xyj), false, true);
                                this.qzy.erc(true);
                                this.mnd(true);
                                this.dom()
                            }
                        } else {
                            if (b == bva.sva.ywb.qrz) {
                                this.lxz(false);
                                this.xqz = 0;
                                this.chw = 0;
                                this.vuh = true;
                                this.som();
                                this.qzy.xlm.mom("info", "#kgi", [0]);
                                this.kum((this.xyj > 0 && this.jky < this.xyj), false, true);
                                this.qzy.erc(true);
                                this.mnd(true);
                                this.dom()
                            } else {
                                if (b == bva.sva.ywb.ngn) {
                                    this.xqz = 0;
                                    this.chw = 0;
                                    this.tem();
                                    this.iqj = true;
                                    if (this.win == 0) {
                                        this.kum((this.xyj > 0 && this.jky < this.xyj), false, true);
                                        this.dom()
                                    }
                                } else {
                                    if (b == bva.sva.ywb.lfi) {
                                        this.xqz = 0;
                                        this.chw = 0;
                                        this.art();
                                        this.iqj = true
                                    } else {
                                        this.sns(b)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.jbv = function(b) {};
    this.sns = function(b) {};
    this.sqe = function(b) {
        if (bva.uug.value9 && bva.kgg.bxp == bva.igo.cek && bva.kgg.zuy() === false) {
            return
        }
        if (b == bva.sva.ywb.sku || b == bva.sva.ywb.fcg || b == bva.sva.ywb.egq || b == bva.sva.ywb.ynx) {
            this.eyo.urt("freespinstart")
        } else {
            if (!((b == bva.sva.ywb.ngn && this.win > 0) || b == bva.sva.ywb.lfi)) {
                this.eyo.urt("start");
                this.mwa()
            }
        }
    };
    this.iym = function() {
        this.das();
        this.dzs(true);
        if (this.dou.uqh < this.qwc || this.dou.cqh > 0) {
            this.kkz()
        } else {
            var b = this.dou.uqh * this.kaw;
            setTimeout(this.kkz, b)
        }
    };
    this.kkz = function() {
        if (!bva.mij.gle) {
            if (!bva.mij.qpy && bva.mij.wej()) {
                bva.mij.qzy.xlm.mom("start", "#rwv", [bva.mij.language.ubl, true])
            }
            bva.mij.dnn();
            for (var c = 0, b = bva.mij.tlk.length; c < b; c++) {
                if (bva.mij.tlk[c] && bva.mij.utk[c]) {
                    bva.mij.tlk[c].asj(bva.mij.ufa[c], bva.mij.jhc[c] - bva.mij.jhc[0] + bva.mij.fbm[c], bva.mij.gex)
							/*-------------*/
					for(var j=0; j<gameController.reels['reel'+(c+1)].length; j++){
						
					if(gameController.reels['reel'+(c+1)][j]!=""){
						
					bva.mij.tlk[c].inn[j+1]=parseInt(gameController.reels['reel'+(c+1)][j]);	
						
					}	
						
					
					
					}
					/*------------*/
                }
            }
            bva.mij.gle = true;
            bva.mij.jha = true;
            if (bva.mij.fyq === true) {
                bva.mij.mfl()
            }
        }
    };
    this.kwy = function() {};
    this.hzn = function() {};
    this.naj = function() {
        this.iqj = false;
        this.chz = false;
        this.hem = true;
        this.lrm = false;
        this.eot();
        this.iym();
        this.qzy.mzn(true);
        this.ghc()
    };
    this.cen = function() {
        this.iqj = false;
        this.chz = true;
        this.hem = false;
        this.lrm = false;
        this.eot();
        if (this.kfs && this.kfs.kvp()) {
            this.qvh(this.pwr, false, true);
            this.kfs.qvc(this.pwr, this.win, true);
            setTimeout(this.kfs.kwc, 1000)
        } else {
            this.iym();
            this.qzy.mzn(true);
            this.ghc()
        }
    };
    this.svs = function() {
        this.iqj = false;
        this.hem = false;
        this.tol = true;
        this.eot();
        this.rhj();
        if (this.kfs && this.kfs.kvp()) {
            this.kfs.fuo();
            this.qvh(this.pwr, false, true);
            setTimeout(this.kfs.kwc, 100)
        } else {
            this.tbs()
        }
    };
    this.art = function() {
        this.iqj = false;
        this.eot();
        if (this.kfs) {
            if (!this.kfs.kvp()) {
                this.lmv()
            } else {
                this.kfs.ftj()
            }
            this.qvh(this.pwr, false, true);
            this.kfs.qvc(this.pwr, this.win, true);
            this.kfs.erc(true)
        }
    };
    this.tem = function() {
        this.iqj = false;
        this.eot();
        if (this.kfs) {
            if (!this.kfs.kvp() && this.win > 0) {
                this.lmv()
            }
            this.kfs.qvc(this.pwr, this.win, true);
            if (this.win == 0) {
                this.kfs.xlm.mom("info", "#vdt");
                setTimeout(this.gta, 1000)
            }
        }
    };
    this.xai = function() {};
    this.idj = function() {};
    this.qed = function() {};
    this.lls = function() {};
    this.uko = function() {};
    this.rqz = function() {};
    this.yrw = function(b) {
        if (b == bva.pdb.iql) {
            this.qzy.xlm.mom("info", "#tok", [this.language.zqn, true])
        } else {
            if (b == bva.pdb.kml) {
                this.qzy.xlm.mom("info", "#tok", [this.language.fjd + " " + this.tyk(this.pyw), true])
            } else {
                if (b >= bva.pdb.ddk) {
                    this.rdp();
                    if (b == bva.pdb.oeb || b == bva.pdb.ztr) {
                        this.stop()
                    }
                    this.qzy.xlm.mom("info", "#vdt");
                    this.qzy.erc(false);
                    this.mnd(false)
                }
            }
        }
        this.imo();
        if (b < bva.pdb.ddk) {
            this.tol = true;
            this.qzy.erc(true);
            this.mnd(true)
        } else {
            this.vqc([{
                lor: b
            }])
        }
    };
    this.olr = function(c, e) {
        var d = this.xqp.whx("stats"),
            b = this.xqp.whx("history");
        if (this.pig) {
            if (!this.kdt) {
                if (d && d.kvp()) {
                    d.erc(false);
                    d.esj(false)
                }
                this.xqp.mom("settings", "#xwd");
                if (this.kfs != null && this.kfs.kvp()) {
                    this.kfs.xlm.mom("info", "#tok", [c, true]);
                    this.kfs.erc(false);
                    this.ool()
                } else {
                    if (this.qzy != null) {
                        if (this.rvt != null && this.rvt.kvp()) {
                            this.cfl()
                        }
                        this.qzy.erc(false);
                        this.rdp();
                        this.stop();
                        if (this.uhn.sbj === false) {
                            this.qzy.xlm.mom("setting", "#hqg", [false])
                        }
                        this.qzy.xlm.mom("info", "#tok", [c, true])
                    } else {
                        this.ogm(c)
                    }
                }
            } else {
                this.stop();
                this.uyc();
                if (b) {
                    b.rpb(true)
                }
                this.lye(this.wyj(c))
            }
        } else {
            this.ogm(c)
        }
        if (e) {
            if (!this.kdt && this.lri.wvv.fcq == 0 && bva.uug.value46 > 0) {
                this.bfd((this.zjj) ? bva.uug.value71 : bva.uug.value47)
            } else {
                setTimeout(this.owo, bva.uug.value10)
            }
        }
    };
    this.fpi = function(b) {
        this.pwr = b;
        this.eot();
        if (((this.kfs && !this.kfs.kvp() || !this.kfs) && !this.rvt.kvp())) {
            this.qvh(b, true, true)
        } else {
            if (this.kfs && this.kfs.kvp()) {
                this.kfs.xlm.mom("creditd", "#rwv", [this.wwe(b), true]);
                this.qvh(b, false, true)
            }
        }
        if (this.pwr > 0) {
            this.rhj()
        } else {
            this.som()
        }
    };
    this.qvh = function(d, b, c) {
        axb.prototype.qvh.call(this, d, b);
        c = (c != null && c === true) ? true : false;
        if (c) {
            this.mno({
                type: "balance",
                sender: this.hdt,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    amount: this.tyk(d)
                }
            })
        }
    };
    this.vbx = function(b) {
        if (b == bva.language.EN || b == bva.language.US) {
            return new pwn()
        } else {
            if (b == bva.language.ES || b == bva.language.CO || b == bva.language.MX || b == bva.language.CL || b == bva.language.VE) {
                return new owe()
            } else {
                if (b == bva.language.DE || b == bva.language.AT) {
                    return new ror()
                } else {
                    if (b == bva.language.PT || b == bva.language.BR) {
                        return new gxo()
                    } else {
                        if (b == bva.language.RU) {
                            return new ouw()
                        } else {
                            if (b == bva.language.EE) {
                                return new xwl()
                            } else {
                                if (b == bva.language.TR) {
                                    return new drb()
                                } else {
                                    if (b == bva.language.CZ) {
                                        return new qde()
                                    } else {
                                        if (b == bva.language.GR) {
                                            return new oab()
                                        } else {
                                            if (b == bva.language.BG) {
                                                return new lfm()
                                            } else {
                                                if (b == bva.language.GE) {
                                                    return new noo()
                                                } else {
                                                    if (b == bva.language.HU) {
                                                        return new nfl()
                                                    } else {
                                                        if (b == bva.language.RO) {
                                                            return new rqj()
                                                        } else {
                                                            if (b == bva.language.FR) {
                                                                return new pmw()
                                                            } else {
                                                                if (b == bva.language.HR) {
                                                                    return new het()
                                                                } else {
                                                                    if (b == bva.language.IT) {
                                                                        return new ysw()
                                                                    } else {
                                                                        if (b == bva.language.SE) {
                                                                            return new krg()
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
    this.pog = function() {
        var f = this.xqp.whx("stats"),
            e = this.xqp.whx("topb"),
            c = this.xqp.whx("topi"),
            b = this.xqp.whx("betsel"),
            d = this.xqp.whx("linesel");
        this.rtx();
        this.qzy.rbi(this.vbj, 0);
        this.smm[0] = this.language.xvr;
        this.smm[1] = this.language.oqq;
        this.qzy.rbi(this.smm, 1);
        this.cqy[0] = this.language.sir;
        this.cqy[1] = this.language.vgd;
        if (this.kfs) {
            this.kfs.rbi(this.cqy, 0)
        }
        if (this.zhn) {
            this.qzy.xlm.mom("start", "#rwv", [this.language.start])
        } else {
            if (this.win > 0 && !this.chz && !this.vuh && !this.ptn) {
                this.qzy.xlm.mom("start", "#rwv", [this.language.tbs])
            } else {
                this.qzy.xlm.mom("start", "#rwv", [this.language.start])
            }
        }
        this.qzy.xlm.mom("gamble", "#rwv", [this.language.fgi]);
        if (this.taj() === false) {
            this.qzy.xlm.mom("bet", "#rwv", [this.language.wmw]);
            if (this.ruj() != null) {
                this.qzy.xlm.mom("astart", "#rwv", [this.language.bqj])
            } else {
                this.qzy.xlm.mom("astart", "#rwv", [this.language.zhn])
            }
        }
        this.qzy.xlm.mom("exit", "#rwv", [(bva.uug.value50.g === true) ? this.language.whk : this.language.twv]);
        this.qzy.xlm.mom("line", "#rwv", [this.language.yzu]);
        this.qzy.xlm.mom("creditd", "#afk", [(this.sgm()) ? this.language.egt : this.language.pwr]);
        this.qzy.xlm.mom("betd", "#afk", [this.language.wmw]);
        this.qzy.xlm.mom("help", "#rwv", [this.language.oxo]);
        if (this.kfs) {
            this.kfs.xlm.mom("creditd", "#afk", [(this.sgm()) ? this.language.egt : this.language.pwr]);
            this.kfs.xlm.mom("wind", "#afk", [this.language.win]);
            this.kfs.xlm.mom("gambled", "#afk", [this.language.zth]);
            this.kfs.xlm.mom("colorwind", "#afk", [this.language.upy]);
            this.kfs.xlm.mom("suitwind", "#afk", [this.language.ctj]);
            if (this.uhn.rqi === false || this.uhn.sbj === false) {
                this.kfs.xlm.mom("collect", "#rwv", [this.language.tbs]);
                this.kfs.xlm.mom("half", "#rwv", [this.language.jbf])
            }
        }
        if (e) {
            e.xlm.mom("language", "#fds", [this.language.language]);
            e.xlm.mom("audio", "#fds", [this.language.audio]);
            e.xlm.mom("melody", "#fds", [this.language.ucf]);
            e.xlm.mom("turbo", "#fds", [this.language.qpy]);
            e.xlm.mom("fullscreen", "#fds", [this.language.zdw]);
            e.xlm.mom("help", "#fds", [this.language.zys]);
            e.xlm.mom("history", "#fds", [this.language.xfn]);
            e.xlm.mom("statistic", "#fds", [this.language.bml]);
            e.xlm.mom("rules", "#fds", [this.language.nbc])
        }
        if (c) {
            c.fds("freeplay", this.language.egt)
        }
        if (b) {
            b.pes = this.language.nza
        }
        if (d) {
            d.pes = this.language.yzu
        }
        if (f) {
            if (bva.uug.value36) {
                f.pes = this.wyj(this.language.bml)
            } else {
                if (bva.uug.value37) {
                    f.pes = this.wyj(this.language.vhl)
                }
            }
            if (f.ili != null) {
                f.ili.rwv(this.language.ret, false)
            }
            if (f.kmd != null) {
                f.kmd.rwv(this.language.swo, false)
            }
        }
        this.rvt.xlm.mom("return", "#rwv", [this.language.ret, false]);
        this.ujj();
        this.xqp.mom("settings", "#pog", [this.language, true]);
        this.xqp.mom("autop", "#pog", [this.language]);
        if (this.ltj) {
            if (this.ltj.bmb) {
                this.ltj.bmb.innerHTML = this.language.aor
            }
            if (this.ltj.mwo) {
                this.ltj.mwo.innerHTML = this.language.jml
            }
            if (this.ltj.gtz) {
                this.ltj.gtz.innerHTML = this.language.efm
            }
        }
    };
    this.ujj = function() {};
    this.tov = function() {
        if (this.kdt) {
            return false
        }
        if (typeof scripts !== "undefined" && scripts.length === 2) {
            return false
        }
        return true
    };
    this.yuh = function() {
        var j = new Date().getTime(),
            k = [],
            f = 40,
            e = 50,
            l = 750;
        if (!this.knj) {
            this.knj = new Date().getTime();
            this.tad = false;
            return false
        }
        if (this.tov() && j - this.knj > f * e * l) {
            for (var g = 0, d = this.kku.length; g < d; g++) {
                k[g] = this.kku[g] + ((g > 0) ? j % 60 : 0)
            }
            this.jhc = k;
            this.isg = 5 + j % 50;
            return true
        }
        return false
    };
    this.eik = function() {
        return this.nza * this.yzu
    };
    this.wyk = function() {
        return this.pyw
    };
    this.rjo = function() {
        return this.frn
    };
    this.faw = function(c) {
        for (var d = 0; d < this.uoy.length; d++) {
            var b = this.uoy[d] * this.yzu;
            if (b > this.frn || (c && (this.pwr > 0 && this.pwr < b))) {
                return d - 1
            } else {
                if (b == this.frn || d == this.uoy.length - 1) {
                    return d
                }
            }
        }
        return -1
    };
    this.cov = function() {
        for (var c = 0; c < this.uoy.length; c++) {
            var b = this.uoy[c] * this.yzu;
            if ((b >= this.pyw && b < this.frn)) {
                return c
            }
        }
        return -1
    };
    this.ima = function() {
        for (var c = 0; c < this.uoy.length; c++) {
            var b = this.uoy[c] * this.bmv;
            if ((b >= this.pyw && b < this.frn)) {
                return c
            }
        }
        return -1
    };
    this.tgz = function() {
        var d = this.faw(true);
        var b = this.cov();
        var c = this.uoy.length - 1;
        c = (c > d) ? d : c;
        if (c > 0) {
            while (this.uoy[c] * this.yzu > this.pwr) {
                c--;
                if (c <= b) {
                    break
                }
            }
        }
        this.vnq = (c < b) ? b : c;
        this.gxt(false, false);
        if (this.eik() > this.pwr) {
            this.qzy.xlm.mom("info", "#tok", [this.language.zqn, true])
        } else {
            if (this.eik() < this.pyw) {
                this.qzy.xlm.mom("info", "#tok", [this.language.fjd + " " + this.tyk(this.pyw), true])
            }
        }
    };
    this.gxt = function(j, g) {
        var f = this.qzy.xlm.whx("info"),
            b = this.xqp.whx("betsel"),
            d = this.xqp.whx("linesel"),
            c = this.cov(),
            e = this.faw(true);
        this.vnq = (this.vnq < c && c >= 0) ? c : this.vnq;
        this.vnq = (this.vnq > e && e > 0) ? e : this.vnq;
        this.nza = this.uoy[this.vnq];
        this.totalBet = this.eik();
        this.dzs(false);
        if (this.taj() == true) {
            this.eyo.urt("btn")
        } else {
            if (g) {
                if (this.yzu == this.bmv) {
                    this.eyo.urt("maxstep")
                } else {
                    this.eyo.urt("step" + ((this.yzu / this.gyb) % 12))
                }
            } else {
                if (this.vnq == e) {
                    this.eyo.urt("maxstep")
                } else {
                    this.eyo.urt("step" + (this.vnq % 12))
                }
            }
        }
        if (f) {
            if (f.zrn() === false) {
                f.vka();
                f.tok(this.urc());
                f.mwj()
            } else {
                if (this.qoq()) {
                    f.tok(this.urc());
                    f.kgi(0)
                }
            }
        }
        if (b) {
            b.ncx(this.vnq, true)
        }
        if (d) {
            d.jnb(this.yzu, false)
        }
        if (this.evb && g) {
            this.rko.mrs()
        }
    };
    this.ytu = function() {
        var c = this.qzy.xlm.whx("info"),
            b = this.faw(true);
        this.vnq = (this.vnq > b && b > 0) ? b : this.vnq;
        this.nza = this.uoy[this.vnq];
        this.totalBet = this.eik();
        this.dzs(false);
        if (c) {
            if (c.zrn() === false) {
                c.vka();
                c.tok(this.urc());
                c.mwj()
            } else {
                if (this.qoq()) {
                    c.tok(this.urc());
                    c.kgi(0)
                }
            }
        }
    };
    this.snm = function(b) {
        var e = this.qzy.xlm.whx("info"),
            d = this.xqp.whx("llinep"),
            c = this.xqp.whx("rlinep");
        this.yzu = this.ygv[b];
        this.totalBet = this.eik();
        if (this.evb) {
            this.rko.mrs()
        }
        if (d) {
            d.uvv(this.yzu)
        }
        if (c) {
            c.uvv(this.yzu)
        }
        this.dzs(false);
        if (e && e.zrn() === false) {
            e.vka();
            e.tok(this.urc());
            e.mwj()
        }
    };
    this.urc = function() {
        return this.language.yzu + ": " + this.yzu + ((bva.kgg.thj() === true) ? "|" : "  -  ") + this.language.wmw + "/" + this.language.oat + ": " + this.tyk(this.nza)
    };
    this.odd = function(b) {
        bva.mij.vnq = b;
        bva.mij.ytu()
    };
    this.cli = function() {
        return this.eml != this.bmv
    };
    this.pcm = function(d) {
        var b = bva.mij.xqp.whx("betsel"),
            c = bva.mij.xqp.whx("linesel");
        bva.mij.snm(d);
        if (b) {
            b.hmw(bva.mij.cov(), bva.mij.faw(true));
            b.ncx(bva.mij.vnq, false)
        }
        if (c) {
            c.jnb(bva.mij.yzu, false)
        }
        bva.mij.egc()
    };
    this.dom = function() {
        if (bva.uug.value78 && this.taj() === false) {
            if (bva.uug.value78.t === true) {
                this.xqp.mom("topb", "#esj", [true])
            }
            if (bva.uug.value78.b === true && this.hnt === false) {
                this.xqp.mom("betsel", "#esj", [true]);
                this.xqp.mom("linesel", "#esj", [true])
            }
            if (bva.uug.value78.t === true || bva.uug.value78.b === true) {
                this.tuv()
            }
            this.egc();
            if (bva.uug.value78.d > 0) {
                this.fbf = setTimeout(this.ahj, bva.uug.value78.d)
            }
        }
    };
    this.ahj = function() {
        bva.mij.uhq();
        clearTimeout(bva.mij.fbf)
    };
    this.tnb = function(c) {
        var b = this.xqp.whx("betsel");
        if (b && b.kvp() && b.kca()) {
            this.uhq(c)
        } else {
            axb.prototype.tnb.call(this, c)
        }
    };
    this.tuv = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(b) {
                bva.mij.gfu(b)
            };
            this.canvas.ontouchmove = function(b) {
                bva.mij.gfu(b)
            }
        }
    };
    this.knv = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.gfu = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        var l = 0,
            k = 0,
            d = false,
            m = this.xqp.whx("topb"),
            b = this.xqp.whx("betsel"),
            e = this.xqp.whx("linesel");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.sei) {
                l = g.pageX - this.offsetLeft;
                k = g.pageY - this.offsetTop
            } else {
                l = Math.round((g.pageX - this.offsetLeft) / this.eel);
                k = Math.round((g.pageY - this.offsetTop) / this.lbq)
            }
        } else {
            if (!this.sei) {
                l = c.pageX - this.offsetLeft;
                k = c.pageY - this.offsetTop
            } else {
                l = Math.round((c.pageX - this.offsetLeft) / this.eel);
                k = Math.round((c.pageY - this.offsetTop) / this.lbq)
            }
        }
        if (b && b.kvp()) {
            if (b.vgh(l, k, d)) {
                return
            }
        }
        if (e && e.kvp()) {
            if (e.vgh(l, k, d)) {
                return
            }
        }
        if (m && m.kvp()) {
            m.vgh(l, k)
        }
        for (var f = 0, j = this.tlk.length; f < j; f++) {
            if (this.tlk[f].vgh(l, k, d)) {
                return
            }
        }
    };
    this.avb = function() {
        var b = this.xqp.whx("betsel"),
            c = this.xqp.whx("linesel");
        if (this.zri >= 0) {
            return
        }
        if (b) {
            b.hvz();
            b.hmw(this.cov(), this.faw(true));
            b.ncx(this.vnq, false)
        }
        if (c) {
            c.hvz();
            c.jnb(this.yzu, false)
        }
        this.eyo.zqb("panel_in");
        this.eyo.urt("panel_in");
        this.mnd(false);
        this.jno = new Date().getTime();
        this.puo = 0;
        this.zri = setTimeout(this.gxe, 89)
    };
    this.uhq = function(d) {
        var b = this.xqp.whx("betsel"),
            c = this.xqp.whx("linesel"),
            e = this.xqp.whx("topb");
        if (this.zri >= 0 || !((e && e.kvp()) || (b && b.kvp()) || (c && c.kvp()))) {
            return
        }
        if (d == this.psu || d == this.giy || d == this.oaj || d == this.ild) {
            d();
            return
        }
        if (b) {
            b.rxl()
        }
        if (c) {
            c.rxl()
        }
        if (e) {
            e.rxl()
        }
        this.eyo.zqb("panel_out");
        this.eyo.urt("panel_out");
        this.bcg = d;
        this.jno = new Date().getTime();
        this.puo = 0;
        this.zri = setTimeout(this.xjt, 89)
    };
    this.gxe = function() {
        var b = bva.mij.xqp.whx("betsel"),
            f = bva.mij.xqp.whx("linesel"),
            e = (!b || (b && !b.lzg())),
            c = (!f || (f && !f.lzg())),
            g = 0,
            d = 0;
        bva.mij.egc();
        bva.mij.puo++;
        if (e && c) {
            bva.mij.tuv();
            clearTimeout(bva.mij.zri);
            bva.mij.zri = -1
        } else {
            g = new Date().getTime();
            d = 89 + (bva.mij.puo * 89 - (g - bva.mij.jno));
            bva.mij.zri = setTimeout(bva.mij.gxe, d)
        }
    };
    this.xjt = function() {
        var b = bva.mij.xqp.whx("betsel"),
            g = bva.mij.xqp.whx("linesel"),
            k = bva.mij.xqp.whx("topb"),
            f = (!b || (b && !b.lzg())),
            d = (!g || (g && !g.lzg())),
            c = (!k || (k && !k.lzg())),
            j = 0,
            e = 0;
        bva.mij.egc();
        bva.mij.puo++;
        if (f && d && c) {
            bva.mij.knv();
            clearTimeout(bva.mij.zri);
            bva.mij.zri = -1;
            if (bva.mij.qoq()) {
                bva.mij.mnd(true)
            }
            if (bva.mij.cli()) {
                bva.mij.rko.xwd()
            }
            if (typeof bva.mij.bcg === "function") {
                bva.mij.bcg();
                bva.mij.bcg = null
            }
        } else {
            j = new Date().getTime();
            e = 89 + (bva.mij.puo * 89 - (j - bva.mij.jno));
            bva.mij.zri = setTimeout(bva.mij.xjt, e)
        }
    };
    this.bcg = function() {};
    this.zyf = function() {
        this.eyo.zqb("start")
    };
    this.scd = function() {};
    this.ucq = function() {
        if (bva.mij.cgm >= 0) {
            clearTimeout(bva.mij.cgm);
            bva.mij.cgm = -1;
            bva.mij.qzy.xlm.mom("betpopup", "#esj", [false]);
            bva.mij.egc()
        }
    };
    this.stop = function() {
        axb.prototype.stop.call(this);
        this.knv();
        this.xfq();
        if (this.qzy != null) {
            this.qzy.xlm.mom("gamble", "#gyu");
            this.qzy.xlm.mom("info", "#vdt");
            this.qzy.xlm.mom("win", "#vdt");
            this.qzy.stop()
        }
        if (this.rko != null) {
            this.mso(null);
            this.rko.stop();
            this.rko.xwd()
        }
        if (!this.kdt || (this.kdt && !this.yig)) {
            this.iwq(false, false);
            this.egc()
        }
        this.fxl();
        clearTimeout(this.aqk);
        clearTimeout(this.oqv);
        clearTimeout(this.afn);
        clearTimeout(this.cgm);
        clearTimeout(this.vxv);
        clearTimeout(this.zxp);
        clearTimeout(this.zge);
        clearTimeout(this.eyx);
        clearTimeout(this.gll);
        if (this.zmv) {
            window.coe(this.id);
            this.id = 0
        } else {
            clearTimeout(this.id)
        }
        clearTimeout(this.zri);
        clearInterval(this.bnm);
        this.gpz();
        if (this.kfs != null && this.kfs.kvp()) {
            this.kfs.fuo();
            this.kfs.xlm.mom("info", "#vdt")
        }
        this.jrx()
    };
    this.gpz = function() {};
    this.ssq = function() {
        var b = this.xqp.whx("winp");
        if (b && b.kvp()) {
            b.esj(false, true)
        }
    };
    this.fgq = function(b) {
        if (this.ptn) {
            this.qzy.xlm.hui("buttons", "#esj", [false]);
            this.qzy.xlm.hui("freespin", "#esj", [b]);
            this.qzy.xlm.hui("settings", "#esj", [b])
        } else {
            if (this.hnt) {
                this.qzy.xlm.hui("buttons", "#esj", [false]);
                this.qzy.xlm.hui("start", "#esj", [b]);
                this.qzy.xlm.hui("settings", "#esj", [b])
            } else {
                this.qzy.xlm.hui("buttons", "#esj", [b])
            }
        }
        this.egc()
    };
    this.wgo = function(b) {};
    this.uja = function(c) {
        var d = this.xqp.whx("winp"),
            b = this.xqp.whx("fwinp");
        if (!this.ptn && d) {
            d.rwv(this.tyk(c), true)
        } else {
            if (b) {
                if (c > 0) {
                    b.rwv(this.tyk(c), true)
                } else {
                    b.rwv("", true)
                }
            }
        }
        this.xqp.hui("jackpots", "#egc")
    };
    this.gcv = function(d) {
        var c = this.xqp.whx("winp"),
            b = this.xqp.whx("fwinp");
        if (!this.ptn && c) {
            c.rwv(d, true)
        } else {
            if (b) {
                b.rwv(d, true)
            }
        }
        this.xqp.hui("jackpots", "#egc")
    };
    this.nkp = function(b) {
        if (!this.ptn && !this.dlk) {
            this.qzy.xlm.mom("info", "#tok", [this.wyj(this.language.vjh) + ": " + this.tyk(this.win)])
        }
    };
    this.gym = function() {
        if (!bva.mij.vuh && !bva.mij.ujy && ((bva.mij.kfs && !bva.mij.kfs.kvp()) || !bva.mij.kfs) && !bva.mij.yyb && !bva.mij.kdt) {
            if (bva.mij.win > 0 && (bva.mij.izy > 0 || bva.mij.lri.wvv.efk == bva.sva.ywb.mot)) {
                bva.mij.eyo.zqb("gambleprop");
                bva.mij.eyo.urt("gambleprop");
                bva.mij.ihq = false
            } else {
                bva.mij.ihq = true
            }
        }
    };
    this.xfq = function() {
        this.eyo.zqb("gambleprop");
        this.ihq = false;
        clearTimeout(this.zup)
    };
    this.pvw = function() {
        var b = bva.mij.xqp.whx("finfop");
        if (!bva.mij.pkz && b && b.kvp()) {
            bva.mij.pkz = true;
            bva.mij.eyo.zqb("freespininit");
            bva.mij.eyo.zqb("freespinwaiting");
            bva.mij.eyo.urt("freespinwaiting")
        }
    };
    this.vrx = function() {
        this.pkz = false;
        this.eyo.zqb("freespininit");
        this.eyo.zqb("freespinwaiting")
    };
    this.ddl = function() {};
    this.iwq = function(e, c) {
        e = (e != null && e === true);
        c = (c != null && c === true);
        for (var d = 0, b = bva.mij.tlk.length; d < b; d++) {
            if (bva.mij.tlk[d]) {
                bva.mij.tlk[d].dwu = e;
                bva.mij.tlk[d].qxi = c;
                bva.mij.tlk[d].egc()
            }
        }
        if (bva.mij.qdx) {
            bva.mij.qqm()
        }
    };
    this.wvb = function(d) {
        for (var c = 0, b = bva.mij.tlk.length; c < b; c++) {
            if (bva.mij.tlk[c]) {
                bva.mij.tlk[c].nwd = d;
                bva.mij.tlk[c].egc()
            }
        }
        if (bva.mij.qdx) {
            bva.mij.qqm()
        }
    };
    this.gax = function() {
        return (this.pwr == 0 && this.ptn == false && (this.state == bva.sva.ywb.avt || (this.state == bva.sva.ywb.ung && this.win == 0) || this.state == bva.sva.ywb.rzq || (this.state == bva.sva.ywb.ngn && this.win == 0) || this.state == bva.sva.ywb.mqv || (this.state == bva.sva.ywb.mot && this.win == 0) || this.state == bva.sva.ywb.qrz))
    };
    this.naf = function() {
        var b = this.xqp.whx("topi"),
            c = null;
        if (this.qzy) {
            c = this.qzy.xlm.whx("setting")
        }
        if ((b && b.kca() === true) || (c && c.kca() === true)) {
            return true
        }
        return false
    };
    this.plx = function() {
        if (bva.mij.bpl != "" && bva.mij.sgm() === false) {
            bva.mij.qzy.xlm.mom("info", "#vka");
            bva.mij.qzy.xlm.mom("info", "#kgi", [0])
        }
    };
    this.soc = function() {
        if (this.kdt === false && bva.kgg.kwd() === true) {
            return true
        }
        return false
    };
    this.mnd = function(e) {
        axb.prototype.mnd.call(this, e);
        var c = (e && !this.zhn);
        for (var d = 0, b = this.tlk.length; d < b; d++) {
            this.tlk[d].zjd(c)
        }
        if (this.qzy) {
            this.qzy.xlm.mom("setting", "#zjd", [c])
        }
        if (c === true) {
            this.bks()
        } else {
            this.tti();
            this.pve()
        }
    };
    this.vpr = function(e) {
        axb.prototype.vpr.call(this, e);
        var c = (e && !this.zhn);
        for (var d = 0, b = this.tlk.length; d < b; d++) {
            this.tlk[d].zjd(c)
        }
        if (this.qzy) {
            this.qzy.xlm.mom("setting", "#zjd", [c])
        }
    };
    this.ylb = function(e) {
        axb.prototype.ylb.call(this, e);
        var c = (e && !this.zhn);
        for (var d = 0, b = this.tlk.length; d < b; d++) {
            this.tlk[d].zjd(c)
        }
        if (this.qzy) {
            this.qzy.xlm.mom("setting", "#zjd", [c])
        }
    };
    this.fgc = function() {
        axb.prototype.fgc.call(this);
        if (bva.mij.yux === true && bva.mij.orc === true) {
            bva.mij.imo()
        }
    };
    this.vsg = function() {
        return (this.pwr >= this.eik() && this.eik() >= this.pyw && ((bva.mij.ruj() != null && this.xqp.mom("settings", "#xii") > 0) || bva.mij.ruj() == null))
    };
    this.qoq = function() {
        var c = this.xqp.whx("stats"),
            b = this.xqp.whx("settings");
        if (this.rvt && this.rvt.kvp()) {
            return false
        } else {
            if (this.kfs && this.kfs.kvp()) {
                return false
            } else {
                if (c && c.kvp()) {
                    return false
                } else {
                    if (b && b.kvp()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.rkt = function() {
        if (this.qzy) {
            var b = this.qzy.xlm.whx("start");
            if (b && b.kca() && !b.buj()) {
                return true
            }
        }
        return false
    };
    this.ikb = function(b) {
        axb.prototype.ikb.call(this, b);
        if (this.sgm() === false) {
            if (this.qzy) {
                this.qzy.xlm.mom("idd", "#rwv", ["" + ((b > 0) ? b : ""), this.qoq()])
            }
            if (this.kfs) {
                this.kfs.xlm.mom("idd", "#rwv", ["" + ((b > 0) ? b : ""), true])
            }
        }
    };
    this.ags = function() {
        axb.prototype.ags.call(this);
        var b = "";
        if (bva.uug.value49) {
            b += bva.mij.fuw()
        }
        if (bva.uug.value49 && sessionStorage.sessionValue15 == "true") {
            b += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            b += bva.mij.erl()
        }
        if (bva.uug.value49 && sessionStorage.sessionValue15 == "true") {
            b += "]"
        }
        if (bva.mij.qzy) {
            bva.mij.qzy.xlm.mom("timed", "#rwv", [b, bva.mij.qoq()])
        }
        if (bva.mij.kfs) {
            bva.mij.kfs.xlm.mom("timed", "#rwv", [b, bva.mij.kfs.kvp()])
        }
    };
    this.umm = function() {
        if (this.kdt) {
            return false
        }
        var e = "",
            b = null,
            c = 0,
            d = null;
        e = this.language.pzp.substr(4, 3) + this.language.jls.substr(1, 2) + this.language.mvb.substr(7, 2);
        b = window[e.toLowerCase()];
        if (b) {
            for (c = 0, ixq = b.length; c < ixq; c++) {
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
    this.eot = function() {
        var g = new Date().getTime(),
            e = 80,
            d = 60,
            j = 250;
        if (!this.afu) {
            this.afu = new Date().getTime();
            this.ljy = 0;
            this.oni = 0;
            this.npu = 20;
            return
        }
        if ((this.state == bva.sva.ywb.ung || this.state == bva.sva.ywb.mqv) && this.win > 0) {
            this.npu = (this.npu > 0) ? this.npu - 1 : 0
        }
        if (this.umm() && g - this.afu > e * d * j && this.npu <= 0) {
            if (this.state == bva.sva.ywb.ung || this.state == bva.sva.ywb.mqv) {
                this.oni = 2 + g % 5;
                for (var f = 0; f < this.pdz.length; f++) {
                    this.pdz[f] *= this.oni
                }
            }
            if (this.state == bva.sva.ywb.ung || this.state == bva.sva.ywb.ngn) {
                if (this.oni > 1) {
                    this.win *= this.oni
                }
            } else {
                if (this.state == bva.sva.ywb.mqv) {
                    this.ljy += this.win * (this.oni - 1);
                    this.win *= this.oni
                } else {
                    if (this.state == bva.sva.ywb.rzq) {
                        if (this.oni > 1) {
                            this.ljy += this.win * (this.oni - 1) / this.oni
                        }
                    } else {
                        if (this.state == bva.sva.ywb.lfi) {
                            if (this.oni > 1) {
                                this.win *= this.oni;
                                this.ljy += this.win * (this.oni - 1) / this.oni
                            }
                        } else {
                            if (this.state == bva.sva.ywb.mot || this.state == bva.sva.ywb.qrz || this.state == bva.sva.ywb.zam || this.state == bva.sva.ywb.xpe || this.state == bva.sva.ywb.cyh || this.state == bva.sva.ywb.ppw) {
                                this.oni = 1
                            }
                        }
                    }
                }
            }
            this.pwr += this.ljy
        }
    };
    this.zta = function() {
        this.xre = false;
        clearTimeout(this.aqk);
        this.ssq();
        this.mnd(false);
        this.sxz();
        this.zkm();
        this.abc();
        if (this.ptn === true && this.uwl() === true) {
            this.eyo.rll("freespinstart", 0, 0)
        } else {
            if (this.ptn === false) {
                this.jnj(0, 0)
            }
        }
        this.qzy.xlm.mom("info", "#vdt");
        this.fgq(false);
        this.qzy.erc(false);
        this.xqp.mom("stats", "#esj", [true]);
        this.xqp.mom("settings", "#xwd");
        if (this.uhn.sbj === false) {
            this.qzy.xlm.mom("setting", "#hqg", [this.xqp.mom("settings", "#kvp")])
        }
        this.egc()
    };
    this.trn = function() {
        this.xqp.mom("stats", "#erc", [false]);
        this.xqp.mom("stats", "#esj", [false]);
        if (!this.ptn) {
            this.qzy.erc(true)
        } else {
            this.qzy.wwj(true)
        }
        this.mnd(true);
        this.fgq(true);
        this.egc();
        if (!this.ptn) {
            if (this.win > 0) {
                this.qzy.xlm.mom("info", "#tok", [this.wyj(this.language.vjh) + ": " + this.tyk(this.win)])
            } else {
                this.qzy.xlm.mom("info", "#kgi", [0])
            }
            this.jnj(1, 200)
        } else {
            this.wgo(true);
            this.hbh();
            if (this.uwl() === true) {
                this.eyo.rll("freespinstart", 1, 200)
            }
        }
    };
    this.txv = function() {
        return (!this.ptn && !this.hnt)
    };
    this.ggb = function() {
        this.xre = false;
        clearTimeout(this.aqk);
        this.uja(this.win);
        this.ssq();
        this.mnd(false);
        this.sxz();
        this.zkm();
        this.abc();
        if (this.ptn === true && this.uwl() === true) {
            this.eyo.rll("freespinstart", 0, 0)
        } else {
            if (this.ptn === false) {
                this.jnj(0, 0)
            }
        }
        this.qzy.xlm.mom("info", "#vdt");
        this.fgq(false);
        if (this.uhn.sbj === false) {
            this.qzy.xlm.hui("settings", "#esj", [true])
        }
        this.qzy.hok(true);
        this.xqp.mom("settings", "#gjt", [this.txv(), !this.hnt])
    };
    this.ije = function() {
        this.xqp.mom("settings", "#xwd");
        if (!this.ptn) {
            this.qzy.erc(true)
        } else {
            this.qzy.wwj(true)
        }
        this.mnd(true);
        this.fgq(true);
        if (!this.ptn) {
            if (this.win > 0) {
                this.qzy.xlm.mom("info", "#tok", [this.wyj(this.language.vjh) + ": " + this.tyk(this.win)])
            } else {
                this.qzy.xlm.mom("info", "#kgi", [0])
            }
            this.jnj(1, 200)
        } else {
            this.wgo(true);
            if (this.uwl() === true) {
                this.eyo.rll("freespinstart", 1, 200)
            }
        }
    };
    this.gri = function() {
        if (bva.mij.ptn) {
            bva.mij.uja(bva.mij.win);
            bva.mij.sxz();
            bva.mij.zkm();
            bva.mij.abc();
            bva.mij.qzy.xlm.mom("info", "#vdt");
            bva.mij.wgo(true)
        }
        bva.mij.mnd(false);
        bva.mij.qzy.erc(false);
        if (bva.mij.ptn === false) {
            bva.mij.qzy.xlm.mom("info", "#vka")
        }
        bva.mij.xqp.mom("autop", "#gjt")
    };
    this.lfu = function() {
        var b = bva.mij.xqp.whx("autop");
        if (b) {
            bva.mij.qoj = b.xii();
            bva.mij.drc = (b.gzr() > 0) ? b.gzr() : 0;
            bva.mij.agh = (b.xqv() > 0) ? b.xqv() : 0;
            bva.mij.gou = (b.fxu() > 0) ? b.fxu() : 0;
            if (bva.mij.qoj <= 0) {
                bva.mij.mnd(true);
                if (bva.mij.ptn === true) {
                    bva.mij.qzy.wwj(true)
                } else {
                    bva.mij.qzy.erc(true);
                    bva.mij.qzy.xlm.mom("info", "#mwj")
                }
            } else {
                bva.mij.qzy.xlm.mom("astart", "#dca", [(bva.mij.qoj >= 0) ? bva.mij.qoj : (bva.mij.uhn.rqi === false) ? "---" : "A"])
            }
        }
    };
    this.ghc = function(b) {
        if (typeof b != "boolean") {
            b = true
        }
        if (this.ruj() != null && this.qoj >= 0) {
            if (b) {
                this.qoj -= 1
            }
            this.qzy.xlm.mom("astart", "#dca", [(this.qoj >= 0) ? this.qoj : (this.uhn.rqi === false) ? "---" : "A", true]);
            this.qzy.xlm.mom("start", "#dca", [(this.qoj >= 0) ? this.qoj : (this.uhn.rqi === false) ? "---" : "A", true])
        }
    };
    this.hop = function() {
        if (bva.mij.ruj() != null) {
            bva.mij.qoj = 0;
            bva.mij.drc = 0;
            bva.mij.agh = 0;
            bva.mij.gou = 0;
            bva.mij.qzy.xlm.mom("astart", "#dca", [(bva.mij.uhn.rqi === false) ? "---" : "A"]);
            bva.mij.qzy.xlm.mom("start", "#dca", [(bva.mij.uhn.rqi === false) ? "---" : "A"])
        }
        bva.mij.qzy.xlm.mom("start", "#vsw");
        bva.mij.xqp.mom("autop", "#tmr");
        bva.mij.xqp.mom("settings", "#hop")
    };
    this.imo = function() {
        var b = bva.mij.xqp.whx("topi");
        bva.mij.zhn = false;
        bva.mij.hop();
        bva.mij.qzy.xlm.mom("astart", "#hqg", [bva.mij.zhn]);
        bva.mij.qzy.xlm.mom("start", "#vsw");
        if (b) {
            b.xhl("auto", bva.mij.zhn)
        }
    };
    this.tfg = function() {
        return (bva.uug.value76 != null)
    };
    this.tqs = function() {
        return (bva.uug.value76 && bva.uug.value76.ms === true)
    };
    this.rah = function() {
        axb.prototype.rah.call(this);
        var b = this.xqp.whx("jwp"),
            c = this.xqp.whx("mjwp");
        if (b) {
            b.ids = this.eqr;
            b.ony = this.lcw
        }
        if (c) {
            c.ids = this.eqr
        }
    };
    this.bwm = function() {
        var c = null,
            e = "",
            g = null,
            d = null,
            f = null,
            j = (this.xqp.whx(this.tyt.ywa) == null),
            b = this.lri.wvv.bas.length;
        if (!j) {
            c = this.xqp.whx("jwp");
            e = this.xqp.mom(this.tyt.ywa, "#luo");
            g = this.xqp.mom(this.tyt.ywa, "#iiz");
            d = this.eyo.jgz(this.tyt.ywa + "_windsp");
            if (b > 2) {
                f = this.eyo.jgz(this.tyt.ywa + "_winsym")
            }
        } else {
            c = this.xqp.whx("mjwp")
        }
        this.qzy.erc(false);
        this.qzy.xlm.mom("info", "#vdt");
        if (bva.uug.value76 && bva.uug.value76.a === true && !j) {
            bva.mij.imo()
        }
        if (bva.mij.ptn === false) {
            bva.mij.jnj(0, 0)
        }
        if (c) {
            if (!j) {
                c.luk = d;
                c.tjt = f;
                c.cyo(g);
                c.afk(e)
            }
            c.dca(this.tyt.value);
            c.start()
        }
    };
    this.lcw = function() {
        var b = bva.mij.xqp.whx("jwp");
        if (b && b.kvp()) {
            bva.mij.bjl = false;
            if (!bva.kgg.tdi) {
                bva.mij.tgk = bva.mij.language.vnx
            } else {
                bva.mij.tgk = bva.mij.language.cgs
            }
            bva.mij.bnm = setInterval(bva.mij.jwp, 1000)
        }
    };
    this.eqr = function() {
        clearInterval(bva.mij.bnm);
        bva.mij.qzy.xlm.mom("info", "#vdt");
        bva.mij.xqp.mom("jwp", "#esj", [false]);
        bva.mij.xqp.mom("mjwp", "#esj", [false]);
        bva.mij.egc();
        bva.mij.odn()
    };
    this.odn = function() {
        this.yex = false;
        this.puo = 0;
        this.vob = 0;
        this.gyv = 20;
        this.nri = this.pwr - this.tyt.value;
        this.zxv = this.tyt.value;
        this.jno = new Date().getTime() + 800;
        this.ujy = true;
        this.oqv = setTimeout(this.ixb, 300)
    };
    this.ixb = function() {
        var d = 0,
            b = bva.mij.eow,
            c = new Date().getTime();
        if (bva.mij.zxv > 0) {
            if (!bva.mij.yex) {
                bva.mij.eyo.zqb("collect");
                bva.mij.eyo.zqb("collectend");
                bva.mij.eyo.urt("collect");
                bva.mij.yex = true
            }
            d = Math.round(bva.mij.zxv / bva.mij.gyv);
            bva.mij.zxv -= d;
            if (bva.mij.zxv < 0) {
                bva.mij.zxv = 0
            }
            bva.mij.qvh(bva.mij.nri + (bva.mij.tyt.value - bva.mij.zxv), true, false);
            bva.mij.puo++;
            bva.mij.gyv -= 1;
            b = bva.mij.puo * bva.mij.slo - (c - bva.mij.jno);
            bva.mij.oqv = setTimeout(bva.mij.ixb, b)
        } else {
            bva.mij.eyo.zqb("collect");
            bva.mij.eyo.urt("collectend");
            bva.mij.ujy = false;
            clearTimeout(bva.mij.oqv);
            if (!bva.mij.ptn && bva.mij.win === 0) {
                bva.mij.jnj(1, 300);
                bva.mij.mnd(true)
            }
            bva.mij.qsq();
            bva.mij.dzs(true);
            bva.mij.id = setTimeout(bva.mij.mrh, 1000)
        }
    };
    this.mrh = function() {
        if (bva.mij.okj() === true) {
            bva.mij.wjp()
        } else {
            bva.mij.qrm()
        }
    };
    this.kum = function(b, d, c) {
        if (b != this.hnt || d === true) {
            this.hnt = b;
            this.qzy.xlm.hui("buttons", "#esj", [!b]);
            this.qzy.xlm.hui("start", "#esj", [true]);
            this.qzy.xlm.hui("settings", "#esj", [true]);
            if (this.zhn === true) {
                this.imo();
                this.eyo.urt("auto_off")
            }
            if (this.fgi === true) {
                this.mps();
                this.eyo.urt("gamble_off")
            }
            if (b) {
                this.qzy.xlm.mom("info", "#esj", [false]);
                this.qzy.xlm.mom("freeround", "#hzp", [this.xyj, this.jky, this.tyk(this.kun)]);
                this.qzy.xlm.mom("freeround", "#esj", [true])
            } else {
                this.qzy.xlm.mom("freeround", "#esj", [false]);
                this.qzy.xlm.mom("info", "#esj", [true])
            }
            if (c && c === true) {
                this.egc()
            }
        }
    };
    this.tpp = function() {
        if (this.xyj > 0) {
            this.qzy.xlm.mom("freeround", "#hzp", [this.xyj, this.jky, this.tyk(this.kun), true])
        }
    };
    this.iil = function(c, b) {
        if (this.xyj > 0) {
            this.qzy.xlm.mom("freeround", "#ewz", [this.tyk(c), b])
        }
    };
    this.fsr = function(b) {};
    this.xro = function() {
        this.dzs(false);
        this.mnd(false);
        this.qzy.erc(false);
        this.vqc([{
            lor: bva.pdb.bcj
        }]);
        if (this.kun > 0) {
            this.eyo.urt("winfinal")
        }
    };
    this.prl = function() {
        if (bva.mij.zhn) {
            bva.mij.imo()
        }
        if (bva.mij.sxc.length > 0) {
            bva.mij.vqc(bva.mij.sxc)
        }
    };
    this.zlv = function() {
        if (!this.yyb && (this.state == bva.sva.ywb.avt || ((this.state == bva.sva.ywb.ung || this.state == bva.sva.ywb.mot || this.state == bva.sva.ywb.ngn) && this.win == 0) || ((this.state == bva.sva.ywb.rzq || this.state == bva.sva.ywb.mqv || this.state == bva.sva.ywb.qrz) && (this.win == 0 || (this.win > 0 && this.vuh))))) {
            return true
        }
        return false
    };
    this.wud = function() {
        if (this.lnl() && this.zlv()) {
            if (this.zhn) {
                this.imo()
            }
            this.iry()
        }
    }
}
axb.prototype = new dlh;

function uzd() {
    var d = 8;
    var b = 9;
    var c = 10;
    var a = 11;
    var f = 12;
    var e = 13;
    this.backgroundColor = "white";
    this.ydb = "black";
    this.font = "verdana";
    this.pev = "bold";
    this.trt = null;
    this.pxf = new gup(5, 8, 56, 34);
    this.aqt = new gup(37, 3, 98, 104);
    this.vdn = new gup(33, 110, 72, 76);
    this.ogz = new gup(10, 42, 45, 45);
    this.lxd = new gup(5, 120, 127, 50);
    this.pat = 3;
    this.pbt = 34;
    this.zqu = 50;
    this.gjp = 4;
    this.yrg = "";
    this.yqk = null;
    this.txe = null;
    this.twx = new Image();
    this.ldm = new Image();
    this.wzo = new Image();
    this.iro = new Image();
    this.ubn = new Image();
    this.usm = new Image();
    this.nsx = new Image();
    this.ckc = new Image();
    this.gsc = new Image();
    this.itc = new Image();
    this.qms = -1;
    this.bjk = -1;
    this.iwh = true;
    this.hpy = false;
    this.cep = function(g) {
        try {
            this.pbt = g.fontSize;
            this.zqu = g.bub;
            this.pxf = g.jgx;
            this.aqt = g.fwo;
            this.vdn = g.faj;
            this.ogz = g.ymp;
            this.lxd = g.duz;
            this.pat = g.dfz;
            this.gjp = g.sxy
        } catch (j) {
            console.error(j)
        }
    };
    this.etu = function(o, g, k, r, n, m, l, q, p, j) {
        this.ldm = o;
        this.wzo = g;
        this.iro = k;
        this.twx = r;
        this.ubn = n;
        this.usm = m;
        this.nsx = l;
        this.ckc = q;
        this.gsc = j;
        this.itc = p
    };
    this.dca = function(j, g) {
        this.bjk = j >> 2;
        this.qms = j & 3;
        if (this.bjk < 8) {
            this.yrg = this.bjk + 2
        } else {
            if (this.bjk == d) {
                this.yrg = "10"
            } else {
                if (this.bjk == f) {
                    this.yrg = "A"
                } else {
                    if (this.bjk == a) {
                        this.yrg = "K"
                    } else {
                        if (this.bjk == c) {
                            this.yrg = "Q"
                        } else {
                            if (this.bjk == b) {
                                this.yrg = "J"
                            } else {
                                if (this.bjk == e) {
                                    this.yrg = "j"
                                }
                            }
                        }
                    }
                }
            }
        }
        this.txe = null;
        if (this.bjk == 9) {
            this.txe = this.nsx
        } else {
            if (this.bjk == 10) {
                this.txe = this.usm
            } else {
                if (this.bjk == 11) {
                    this.txe = this.ubn
                }
            }
        }
        this.age = null;
        if (this.qms == 0) {
            this.yqk = this.wzo
        } else {
            if (this.qms == 1) {
                this.yqk = this.ldm
            } else {
                if (this.qms == 2) {
                    this.yqk = this.twx
                } else {
                    if (this.qms == 3) {
                        this.yqk = this.iro
                    }
                }
            }
        }
        if (this.qms == 0 || this.qms == 1) {
            this.ydb = "rgb(198,0,0)"
        } else {
            this.ydb = "black"
        }
        this.hpy = g;
        this.egc()
    };
    this.ieo = function(g) {
        this.iwh = !this.iwh;
        if (this.iwh) {
            this.trt = this.gsc
        } else {
            this.trt = this.itc
        }
        if (g && g === true) {
            this.parent.egc(this.x, this.y, this.width, this.height)
        }
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var g = this.context2D;
        g.save();
        if (this.trt != null) {
            g.drawImage(this.trt, this.x, this.y)
        } else {
            g.lineJoin = "round";
            g.lineCap = "round";
            g.textAlign = "center";
            if (this.backgroundColor != null) {
                bva.kgg.yxw(g, this.x, this.y, this.width, this.height, this.pat, this.backgroundColor)
            }
            if (this.txe != null) {
                g.drawImage(this.txe, this.x + this.aqt.x, this.y + this.aqt.y)
            }
            if (this.yqk != null) {
                g.drawImage(this.yqk, this.x + this.vdn.x, this.y + this.vdn.y);
                g.drawImage(this.ckc, 0, (this.ckc.height / 5) * this.qms, this.ckc.width, this.ckc.height / 5, this.x + this.ogz.x, this.y + this.ogz.y, this.ckc.width, this.ckc.height / 5)
            }
            bva.kgg.sxn(g, this.yrg, this.ydb, this.x + this.pxf.x, this.y + this.pxf.y, this.pxf.width, this.pxf.height, this.font, this.pbt, this.pev);
            if (this.hpy === true) {
                bva.kgg.sxn(g, "WIN", "red", this.x + this.lxd.x, this.y + this.lxd.y, this.lxd.width, this.lxd.height, this.font, this.zqu, this.pev, "yellow", this.gjp)
            }
        }
        g.restore()
    }
}
uzd.prototype = new tgm;

function aly() {
    this.dio = [];
    this.eqt = new Image();
    this.xez = 2;
    this.cep = function(a) {
        try {
            this.xez = a.dto
        } catch (b) {
            console.error(b)
        }
    };
    this.nvs = function(b) {
        for (var a = 0; a < b.length; a++) {
            this.dio[a] = b[a] & 3
        }
    };
    this.isn = function() {
        if (this.dio[0] === 4) {
            return
        }
        for (var a = this.dio.length - 1; a > 0; a--) {
            this.dio[a] = this.dio[a - 1]
        }
        this.dio[0] = 4
    };
    this.yct = function(a) {
        this.eqt = a
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.dio.length; b++) {
            a.drawImage(this.eqt, 0, this.eqt.height * this.dio[b] / 5, this.eqt.width, this.eqt.height / 5, this.x + (b * (this.eqt.width + this.xez)), this.y, this.eqt.width, this.eqt.height / 5)
        }
        a.restore()
    }
}
aly.prototype = new tgm;

function kvs() {
    var a = this;
    this.rzn = 0;
    this.pgf = 0;
    this.yct = function(b) {
        this.qza = b;
        this.rzn = Math.round(this.qza.height / 2);
        this.pgf = Math.round(this.width / 2)
    };
    this.eqq = function() {
        a.ona = false
    };
    this.eqf = function() {
        a.thi = false;
        if (a.kvp()) {
            a.parent.egc(a.x, a.y, a.width, a.height)
        }
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var b = this.context2D;
        b.save;
        if (this.thi) {
            b.drawImage(this.qza, 0, this.rzn, this.qza.width, this.rzn, this.x, this.y, this.width, this.height)
        } else {
            b.drawImage(this.qza, 0, 0, this.qza.width, this.rzn, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
kvs.prototype = new xbw;

function ufv() {
    var a = this;
    var c = 1;
    var g = 2;
    var d = 3;
    var f = 4;
    var e = 6;
    var b = 5;
    this.qza = null;
    this.xlm = null;
    this.skn = null;
    this.bxs = null;
    this.dvu = null;
    this.hzh = null;
    this.zmo = -1;
    this.dme = 0;
    this.pug = false;
    this.nde = false;
    this.csu = false;
    this.dpp = 10;
    this.ebp = 0;
    this.oir = 0;
    this.btm = 0;
    this.dos = 0;
    this.udp = 0;
    this.znf = false;
    this.mqh = 0;
    this.ldy = 0;
    this.uwa = function(j, l, k) {
        ufv.prototype.uwa.call(this, j, l, k);
        this.ack()
    };
    this.hin = function(j) {
        try {
            this.bkf(j);
            this.vhu(j);
            this.wbw(j);
            this.wkq(j);
            this.vcv(j);
            this.hzh = j.faa
        } catch (k) {
            console.error(k)
        }
    };
    this.cep = function(n) {
        try {
            var s = this.xlm.jkd("cbuttons"),
                m = this.xlm.jkd("displays"),
                r = this.xlm.whx("idd"),
                t = this.xlm.whx("timed"),
                j = this.xlm.whx("info"),
                q = this.xlm.whx("history"),
                k = this.xlm.whx("card");
            for (var l = 0, o = s.length; l < o; l++) {
                s[l].cep(n.sue)
            }
            for (var l = 0, o = m.length; l < o; l++) {
                m[l].cep(n.display)
            }
            if (r) {
                r.cep(n.zvm);
                r.qjx(n.ebq)
            }
            if (t) {
                t.cep(n.zvm);
                t.qjx(n.bni)
            }
            if (j) {
                j.cep(n.fvi);
                j.qjx(n.fvi.oue)
            }
            if (q) {
                q.cep(n.xfn);
                q.qjx(n.xfn.oue)
            }
            if (k) {
                k.cep(n.nuu);
                k.qjx(n.nuu.oue)
            }
            this.xlm.mom("collect", "#qjx", [n.ftv]);
            this.xlm.mom("half", "#qjx", [n.onk]);
            this.xlm.mom("hart", "#qjx", [n.bxh]);
            this.xlm.mom("diamond", "#qjx", [n.pio]);
            this.xlm.mom("spade", "#qjx", [n.xum]);
            this.xlm.mom("club", "#qjx", [n.did]);
            this.xlm.mom("red", "#qjx", [n.yvl]);
            this.xlm.mom("black", "#qjx", [n.nmo]);
            this.xlm.mom("creditd", "#qjx", [n.apu]);
            this.xlm.mom("wind", "#qjx", [n.duz]);
            this.xlm.mom("gambled", "#qjx", [n.cmd]);
            this.xlm.mom("colorwind", "#qjx", [n.bst]);
            this.xlm.mom("suitwind", "#qjx", [n.swg]);
            this.hzh = n.faa
        } catch (p) {
            console.error(p)
        }
    };
    this.raa = function(j) {
        try {
            var q = this.xlm.jkd("cbuttons"),
                k = this.xlm.jkd("cdisplays"),
                s = this.xlm.jkd("gdisplays"),
                p = this.xlm.whx("idd"),
                r = this.xlm.whx("timed"),
                l = this.xlm.whx("info");
            this.skn = j.backgroundColor;
            this.bxs = j.osq;
            this.dvu = j.pvd;
            for (var m = 0, n = q.length; m < n; m++) {
                q[m].raa((this.parent.uhn.sbj === false) ? j.zns : (this.parent.ngk === bva.uhn.opd) ? j.iwg : j.tmo)
            }
            for (var m = 0, n = k.length; m < n; m++) {
                k[m].raa(j.display)
            }
            for (var m = 0, n = s.length; m < n; m++) {
                s[m].raa(j.rde)
            }
            if (p) {
                p.raa(j.zvm)
            }
            if (r) {
                r.raa(j.zvm)
            }
            if (l) {
                l.raa(j.fvi)
            }
        } catch (o) {
            console.error(o)
        }
    };
    this.rap = function(u, t) {
        var s = this.xlm.jkd("buttons"),
            o = this.xlm.whx("half"),
            l = this.xlm.whx("collect"),
            r = u - this.x,
            q = t - this.y;
        for (var n = 0, p = s.length; n < p; n++) {
            var k = s[n];
            if (r >= k.x && r <= k.x + k.width && q >= k.y && q <= k.y + k.height && k.kvp() === true && k.kca() === true && k.buj() === false) {
                if (k == o || k == l) {
                    this.parent.eyo.zqb("btn");
                    this.parent.eyo.urt("btn");
                    k.erw(true, false, true)
                } else {
                    k.erw(true, false, false)
                }
                this.egc();
                k.uva();
                for (var m = 0; m < p; m++) {
                    s[m].cou(true)
                }
                return true
            }
        }
        return false
    };
    this.fwp = function() {
        var m = this.xlm.jkd("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.uyg() === true) {
                k.erw(false, true);
                return true
            }
        }
        return false
    };
    this.hld = function(q) {
        var p = this.xlm.jkd("buttons"),
            l = this.xlm.whx("half"),
            r = this.xlm.whx("collect");
        for (var o = 0, k = p.length; o < k; o++) {
            var n = p[o];
            if (n.uut == q) {
                if (n.kca() === true && n.buj() === false) {
                    if (n == l || n == r) {
                        this.parent.eyo.zqb("btn");
                        this.parent.eyo.urt("btn");
                        n.erw(true, false, true)
                    } else {
                        n.erw(true, false, false)
                    }
                    this.egc();
                    n.uva();
                    for (var m = 0; m < k; m++) {
                        p[m].cou(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.smf = function() {
        var m = this.xlm.jkd("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.uyg() === true) {
                k.erw(false, true);
                return true
            }
        }
        return false
    };
    this.qvc = function(l, j, k) {
        this.xlm.mom("creditd", "#rwv", [this.parent.wwe(l)]);
        this.xlm.mom("wind", "#rwv", [this.parent.wwe(j)]);
        this.xlm.mom("gambled", "#rwv", [this.parent.tyk(j)]);
        this.xlm.mom("colorwind", "#rwv", [this.parent.tyk(j * 2)]);
        this.xlm.mom("suitwind", "#rwv", [this.parent.tyk(j * 4)]);
        if (k && k === true) {
            this.egc()
        }
    };
    this.nvs = function(k, n, l) {
        var o = this.xlm.whx("card"),
            m = this.xlm.whx("history"),
            j = 0;
        this.ldy++;
        if (o) {
            o.trt = null;
            if (k >= 0) {
                o.dca(k, (this.parent.win > 0))
            }
        }
        if (m) {
            m.nvs(n)
        }
        if (!this.parent.kdt) {
            if (this.kvp() && this.parent.win > 0) {
                j = (this.ldy <= 3) ? this.ldy : 3;
                this.parent.eyo.urt("gamblewin" + j);
                if (!l) {
                    setTimeout(a.lzr, 2000)
                }
            }
        }
    };
    this.lzr = function() {
        var j = a.xlm.whx("history");
        a.air();
        if (j) {
            j.isn()
        }
        a.egc();
        a.ftj();
        a.erc(true)
    };
    this.chl = function(j) {
        if (j == c) {
            this.xlm.mom("red", "#erw", [true, false, false])
        } else {
            if (j == g) {
                this.xlm.mom("black", "#erw", [true, false, false])
            } else {
                if (j == d) {
                    this.xlm.mom("diamond", "#erw", [true, false, false])
                } else {
                    if (j == f) {
                        this.xlm.mom("hart", "#erw", [true, false, false])
                    } else {
                        if (j == e) {
                            this.xlm.mom("spade", "#erw", [true, false, false])
                        } else {
                            if (j == b) {
                                this.xlm.mom("club", "#erw", [true, false, false])
                            }
                        }
                    }
                }
            }
        }
    };
    this.air = function() {
        var l = this.xlm.jkd("buttons");
        for (var k = 0, j = l.length; k < j; k++) {
            l[k].erw(false)
        }
    };
    this.gjt = function() {
        var j = this.xlm.whx("card"),
            k = this.xlm.whx("info");
        this.ldy = 0;
        this.dme = 0;
        if (j) {
            j.ieo(false)
        }
        if (k) {
            k.esj(true)
        }
        this.esj(true, true);
        if (k) {
            k.kgi(0)
        }
    };
    this.neq = function() {
        var j = this.xlm.whx("card"),
            k = this.xlm.whx("history");
        if (j) {
            j.etu(this.parent.eyo.jgz("g_hart"), this.parent.eyo.jgz("g_diamond"), this.parent.eyo.jgz("g_spade"), this.parent.eyo.jgz("g_clubs"), this.parent.eyo.jgz("g_king"), this.parent.eyo.jgz("g_queen"), this.parent.eyo.jgz("g_jake"), this.parent.eyo.jgz("g_suit"), this.parent.eyo.jgz("g_red"), this.parent.eyo.jgz("g_blue"))
        }
        if (k) {
            k.yct(this.parent.eyo.jgz("g_suit"))
        }
    };
    this.rbi = function(l, j) {
        var k = this.xlm.whx("info");
        if (k) {
            k.hto(j);
            k.bic(l, j)
        }
    };
    this.ftj = function() {
        if (this.zmo < 0) {
            this.pug = true;
            this.parent.eyo.zqb("gamble1");
            this.parent.eyo.zqb("gamble2");
            this.zmo = setInterval(a.uxm, 200)
        }
    };
    this.uxm = function() {
        var j = a.xlm.whx("card");
        if (j) {
            j.ieo(true)
        }
        if ((a.dme % 4) == 0) {
            if (a.pug) {
                a.parent.eyo.urt("gamble1");
                a.parent.eyo.zqb("gamble2")
            } else {
                a.parent.eyo.urt("gamble2");
                a.parent.eyo.zqb("gamble1")
            }
            a.pug = !a.pug
        }
        a.dme++
    };
    this.fuo = function() {
        clearInterval(this.zmo);
        this.zmo = -1;
        this.dme = 0;
        this.parent.eyo.zqb("gamble1");
        this.parent.eyo.zqb("gamble2")
    };
    this.ack = function() {
        this.xlm = new rch();
        this.xlm.uwa();
        this.xlm.knm("buttons");
        this.xlm.knm("displays");
        this.xlm.knm("cbuttons");
        this.xlm.knm("cdisplays");
        this.xlm.knm("gdisplays")
    };
    this.wbw = function(j) {
        this.xlm.mzx("collect", this.hsf(j.ftv, (this.parent.uhn.rqi === false || this.parent.uhn.sbj === false) ? this.parent.language.tbs : null, (this.parent.uhn.rqi === false || this.parent.uhn.sbj === false) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_co"), this.lcz, (!this.parent.kdt) ? this.parent.pvb.gpg : null, j.sue), ["buttons", "cbuttons"]);
        this.xlm.mzx("half", this.hsf(j.onk, (this.parent.uhn.rqi === false || this.parent.uhn.sbj === false) ? this.parent.language.jbf : null, (this.parent.uhn.rqi === false || this.parent.uhn.sbj === false) ? this.parent.eyo.jgz("btn") : this.parent.eyo.jgz("btn_ha"), this.drk, (!this.parent.kdt) ? this.parent.pvb.jnt : null, j.sue), ["buttons", "cbuttons"]);
        this.xlm.mzx("hart", this.mah(j.bxh, this.parent.eyo.jgz("g_hartbtn"), this.kgf, (!this.parent.kdt) ? this.parent.pvb.lzn : null), ["buttons"]);
        this.xlm.mzx("diamond", this.mah(j.pio, this.parent.eyo.jgz("g_diamondbtn"), this.miy, (!this.parent.kdt) ? this.parent.pvb.sdb : null), ["buttons"]);
        this.xlm.mzx("spade", this.mah(j.xum, this.parent.eyo.jgz("g_spadebtn"), this.yde, (!this.parent.kdt) ? this.parent.pvb.qrf : null), ["buttons"]);
        this.xlm.mzx("club", this.mah(j.did, this.parent.eyo.jgz("g_clubbtn"), this.nww, (!this.parent.kdt) ? this.parent.pvb.wgc : null), ["buttons"]);
        this.xlm.mzx("red", this.mah(j.yvl, this.parent.eyo.jgz("g_redbtn"), this.nxa, (!this.parent.kdt) ? this.parent.pvb.ozp : null), ["buttons"]);
        this.xlm.mzx("black", this.mah(j.nmo, this.parent.eyo.jgz("g_blackbtn"), this.bwv, (!this.parent.kdt) ? this.parent.pvb.pzd : null), ["buttons"])
    };
    this.wkq = function(k) {
        var j = null;
        if (!(this.parent.kdt && this.parent.wwt) && this.parent.style.mij.rya === false) {
            j = this.parent.eyo.jgz("display_effect")
        }
        this.xlm.mzx("creditd", this.jvs(k.apu, (this.parent.sgm()) ? this.parent.language.egt : this.parent.language.pwr, this.parent.wwe(this.parent.pwr), j, k.display), ["displays", "cdisplays"]);
        this.xlm.mzx("wind", this.jvs(k.duz, this.parent.language.win, this.parent.wwe(this.parent.win), j, k.display), ["displays", "cdisplays"]);
        this.xlm.mzx("gambled", this.jvs(k.cmd, this.parent.language.zth, this.parent.tyk(this.parent.win), null, k.display), ["displays", "gdisplays"]);
        this.xlm.mzx("colorwind", this.jvs(k.bst, this.parent.language.upy, this.parent.tyk(this.parent.win * 2), null, k.display), ["displays", "gdisplays"]);
        this.xlm.mzx("suitwind", this.jvs(k.swg, this.parent.language.ctj, this.parent.tyk(this.parent.win * 4), null, k.display), ["displays", "gdisplays"]);
        this.xlm.mzx("idd", this.jvs(k.ebq, null, (this.parent.sgm() === true) ? this.parent.language.egt : "" + ((this.parent.tnc > 0) ? this.parent.tnc : ""), null, k.zvm), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || bva.uug.value49) {
            this.xlm.mzx("timed", this.jvs(k.bni, null, "", null, k.zvm), ["displays"])
        }
    };
    this.vcv = function(j) {
        var k = new hjy();
        k.uwa(j.fvi.oue, this.context2D);
        k.parent = this;
        k.cep(j.fvi);
        this.xlm.mzx("info", k)
    };
    this.bkf = function(k) {
        var j = new uzd();
        j.uwa(k.nuu.oue, this.context2D);
        j.parent = this;
        j.cep(k.nuu);
        this.xlm.mzx("card", j)
    };
    this.vhu = function(j) {
        var k = new aly();
        k.uwa(j.xfn.oue, this.context2D);
        k.cep(j.xfn);
        this.xlm.mzx("history", k)
    };
    this.mah = function(l, n, m, k) {
        var j = new kvs();
        j.uwa(l, this.context2D);
        j.parent = this;
        j.uva = m;
        j.yct(n);
        if (k) {
            j.uut = k.vmm
        }
        return j
    };
    this.hsf = function(m, p, o, n, k, l) {
        var j = new iyh();
        j.uwa(m, this.context2D, null, o, null, p);
        j.parent = this;
        j.uva = n;
        j.cep(l);
        if (k) {
            j.uut = k.vmm
        }
        return j
    };
    this.jvs = function(k, o, n, m, j) {
        var l = new vwd();
        l.uwa(k, this.context2D, null, o, n);
        l.parent = this;
        l.qza = m;
        l.cep(j);
        return l
    };
    this.erc = function(k) {
        var m = this.xlm.jkd("buttons");
        for (var l = 0, j = m.length; l < j; l++) {
            m[l].zjd(k)
        }
    };
    this.lcz = function() {
        a.fuo();
        a.erc(false);
        a.parent.lri.tbs()
    };
    this.drk = function() {
        a.fuo();
        a.erc(false);
        a.parent.lri.jbf()
    };
    this.kgf = function() {
        a.fuo();
        a.erc(false);
        a.parent.lri.fgi(f)
    };
    this.miy = function() {
        a.fuo();
        a.erc(false);
        a.parent.lri.fgi(d)
    };
    this.nww = function() {
        a.fuo();
        a.erc(false);
        a.parent.lri.fgi(b)
    };
    this.yde = function() {
        a.fuo();
        a.erc(false);
        a.parent.lri.fgi(e)
    };
    this.nxa = function() {
        a.fuo();
        a.erc(false);
        a.parent.lri.fgi(c)
    };
    this.bwv = function() {
        a.fuo();
        a.erc(false);
        a.parent.lri.fgi(g)
    };
    this.kwc = function() {
        var j = a.xlm.whx("info");
        if (j) {
            j.vdt()
        }
        setTimeout(a.lju, 10)
    };
    this.lju = function() {
        a.nde = false;
        a.csu = (a.parent.win > a.parent.totalBet) ? true : false;
        a.dpp = 20;
        if (a.parent.win >= a.parent.totalBet * 25) {
            a.dpp = 40
        }
        a.ebp = 0;
        a.oir = a.parent.win;
        a.btm = a.parent.pwr - a.parent.win;
        a.dos = a.parent.win;
        a.udp = new Date().getTime();
        a.znf = true;
        a.mqh = setTimeout(a.pda, a.parent.slo)
    };
    this.pda = function() {
        var j = 0,
            k = a.parent.slo,
            l = new Date().getTime();
        if (a.dos > 0) {
            if (!a.nde) {
                a.parent.eyo.zqb("collect");
                a.parent.eyo.urt("collect");
                a.nde = true
            }
            j = Math.round(a.dos / a.dpp);
            a.dos -= j;
            if (a.dos < 0) {
                a.dos = 0
            }
            a.xlm.mom("wind", "#rwv", [a.parent.wwe(a.oir - (a.parent.win - a.dos)), true]);
            a.xlm.mom("creditd", "#rwv", [a.parent.wwe(a.btm + (a.parent.win - a.dos)), true]);
            a.ebp++;
            a.dpp -= 1;
            k = a.parent.slo + (a.ebp * a.parent.slo - (l - a.udp));
            a.mqh = setTimeout(a.pda, k)
        } else {
            a.parent.eyo.zqb("collect");
            a.parent.eyo.urt("collectend");
            a.znf = false;
            clearTimeout(a.mqh);
            setTimeout(a.parent.gta, 100)
        }
    };
    this.egc = function(r, p, s, n) {
        if (!this.kvp() || !this.parent.jta()) {
            return
        }
        var k = (r != null && p != null && s != null && n != null),
            t = this.context2D,
            q = null,
            j = this.xlm.icz(),
            m = (this.parent.uhn.sbj === false) ? this.parent.eyo.jgz("btn_back") : (this.parent.ngk === bva.uhn.opd) ? this.parent.eyo.jgz("g_right") : this.parent.eyo.jgz("g_left");
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
            t.drawImage(this.qza, (this.hzh.x == 0) ? this.hzh.width : 0, this.height - m.height);
            q = t.createLinearGradient(this.hzh.x, this.hzh.y, this.hzh.x + this.hzh.width, this.hzh.y);
            q.addColorStop(0.2, this.bxs);
            q.addColorStop(1, this.dvu);
            t.fillStyle = q;
            t.save();
            if (this.parent.uhn.sbj === false) {
                if (this.parent.ngk === bva.uhn.xhx) {
                    t.translate(this.hzh.width / 2, this.hzh.height / 2);
                    t.rotate(Math.PI);
                    t.translate(-this.hzh.width / 2, -this.hzh.height / 2)
                }
                t.fillRect(this.hzh.x, this.hzh.y, this.hzh.width, this.hzh.height)
            }
            t.drawImage(m, this.hzh.x, this.hzh.y, this.hzh.width, this.hzh.height);
            t.restore()
        } else {
            t.drawImage(this.qza, 0, 0);
            if (this.skn != null) {
                bva.kgg.hvc(t, this.hzh.x, this.hzh.y, this.hzh.width, this.hzh.height, this.skn, 1)
            } else {
                if ((this.height - this.qza.height) > 0) {
                    t.drawImage(this.qza, this.hzh.x, this.hzh.y, this.hzh.width, this.qza.height - this.hzh.y, this.hzh.x, this.hzh.y, this.hzh.width, this.hzh.height)
                }
            }
        }
        t.restore();
        for (var l = 0, o = j.length; l < o; l++) {
            j[l].egc()
        }
        if (this.wxt && this.ygh) {
            if (k) {
                this.wxt.drawImage(this.ygh, r, p, s, n, this.x + r, this.y + p, s, n)
            } else {
                this.wxt.drawImage(this.ygh, this.x, this.y)
            }
        }
    }
}
ufv.prototype = new tgm;

function fsx() {
    this.kur = "verdana";
    this.fla = "verdana";
    this.gst = "bold italic";
    this.kmi = "white";
    this.srr = 24;
    this.hmu = 12;
    this.dgx = new gup();
    this.lxd = [];
    this.cep = function(a) {
        fsx.prototype.cep.call(this, a);
        try {
            this.srr = a.ckz;
            this.hmu = a.iur;
            this.dgx = a.buy;
            this.lxd = a.duz
        } catch (b) {
            console.error(b)
        }
    };
    this.raa = function(a) {
        fsx.prototype.raa.call(this, a);
        try {
            this.kur = a.zsv;
            this.fla = a.ozq;
            this.gst = a.cqq;
            this.kmi = a.yzt
        } catch (b) {
            console.error(b)
        }
    };
    this.egc = function() {
        if (!this.kvp()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.fillStyle = this.tnw;
        if (this.hcz) {
            a.strokeStyle = this.hcz
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.tln;
        a.font = this.rwz + " " + this.pbt + "px " + this.aht;
        a.textBaseline = "alphabetic";
        a.textAlign = "center";
        a.drawImage(this.qza, 0, 0);
        for (var d in this.oop) {
            this.yxf(this.oop[d], this.iuw[d], this.pbt, this.aht)
        }
        if (bva.mij != null) {
            for (var c in bva.mij.pqd) {
                this.byi(c, this.lxd[c])
            }
        }
        if (bva.mij.adp && bva.uug.value81) {
            var b = bva.mij.adp;
            a.fillStyle = this.kmi;
            if (bva.uug.value81.g === true) {
                this.yxf(bva.mij.wyj(bva.mij.language.nbf) + "|" + bva.mij.wyj(bva.mij.language.utw), this.dgx, this.hmu, this.fla)
            } else {
                if (bva.uug.value81.p === true) {
                    if (sessionStorage.sessionValue1 === bva.language.TR) {
                        b = b.substring(0, b.length - 1)
                    }
                    this.yxf(bva.mij.language.adp.replace("XY", b) + "|" + bva.mij.wyj(bva.mij.language.nbf), this.dgx, this.hmu, this.fla)
                } else {
                    bva.kgg.sxn(a, bva.mij.wyj(bva.mij.language.nbf), this.kmi, this.dgx.x, this.dgx.y, this.dgx.width, this.dgx.height, this.fla, this.hmu, this.gst)
                }
            }
        } else {
            bva.kgg.sxn(a, bva.mij.wyj(bva.mij.language.nbf), this.kmi, this.dgx.x, this.dgx.y, this.dgx.width, this.dgx.height, this.fla, this.hmu, this.gst)
        }
        a.restore();
        if (this.wxt && this.ygh) {
            this.wxt.drawImage(this.ygh, this.x, this.y)
        }
    };
    this.byi = function(b, j) {
        var k = this.context2D,
            e = 0,
            c = 0,
            a = this.srr,
            g = 0;
        k.save();
        k.fillStyle = this.tnw;
        if (this.hcz) {
            k.strokeStyle = this.hcz
        }
        k.lineJoin = "round";
        k.lineCap = "round";
        k.font = this.rwz + " " + this.srr + "px " + this.kur;
        k.textBaseline = "bottom";
        k.textAlign = "center";
        k.lineWidth = this.tln;
        for (var d = 0, f = bva.mij.pqd[b].length; d < f; d++) {
            if (bva.mij.pqd[b][d] > 0) {
                e++
            }
        }
        c = j.height / e;
        for (var d = bva.mij.pqd[b].length - 1; d >= 0; d--) {
            if (bva.mij.pqd[b][d] > 0) {
                if (b != bva.mij.sob) {
                    k.fillText(bva.mij.tyk(bva.mij.pqd[b][d] * bva.mij.nza), j.x + j.width / 2, j.y + c * g + a)
                } else {
                    k.fillText(bva.mij.tyk(bva.mij.pqd[b][d] * bva.mij.totalBet), j.x + j.width / 2, j.y + c * g + a)
                }
                if (this.sru != null) {
                    if (b != bva.mij.sob) {
                        k.strokeText(bva.mij.tyk(bva.mij.pqd[b][d] * bva.mij.nza), j.x + j.width / 2, j.y + c * g + a)
                    } else {
                        k.strokeText(bva.mij.tyk(bva.mij.pqd[b][d] * bva.mij.totalBet), j.x + j.width / 2, j.y + c * g + a)
                    }
                }
                g++
            }
        }
        k.restore()
    }
}
fsx.prototype = new lfx;

function wwu() {
    this.hdt = "Hot7Dice";
    this.phq = "Hot 7 Dice";
    this.ymd = bva.uug.value30 + "/hot7dice/images/";
    this.jqw = bva.uug.value30 + "/hot7dice/sounds/";
    this.jfa = 8;
    this.zyo = null;
    this.uct = null;
    this.bve = null;
    this.fsn = function() {
        this.r1 = [];
        this.r2 = [];
        this.r3 = [];
        this.r4 = [];
        this.r5 = [];
        this.qxf = [4, 2, 1, 3, 5];
        this.pqd = [
            [0, 0, 100, 1000, 5000],
            [0, 0, 50, 200, 500],
            [0, 0, 50, 200, 500],
            [0, 0, 20, 50, 200],
            [0, 0, 20, 50, 200],
            [0, 0, 20, 50, 200],
            [0, 5, 20, 50, 200],
            [0, 0, 2, 10, 50]
        ];
		gameController=this;
        this.fyd = [3, 3, 3, 3, 3, 3, 2, 3];
        this.sob = 7;
        if (bva.uug.hsed != undefined) {
            if (bva.uug.hsed.value1) {
                this.kku = bva.uug.hsed.value1;
                this.jhc = this.kku
            }
        }
    };
    this.tkv = function() {
        wwu.prototype.tkv.call(this);
        this.ivv[0] = new uqf().uwa(this.eyo.jgz("anim0"), this.uhn.evi.w1, this.uhn.evi.h1, 22);
        this.ivv[1] = new uqf().uwa(this.eyo.jgz("anim1"), this.uhn.evi.w1, this.uhn.evi.h1, 22);
        this.ivv[2] = new uqf().uwa(this.eyo.jgz("anim2"), this.uhn.evi.w1, this.uhn.evi.h1, 22);
        this.ivv[3] = new uqf().uwa(this.eyo.jgz("anim3"), this.uhn.evi.w1, this.uhn.evi.h1, 17);
        this.ivv[4] = new uqf().uwa(this.eyo.jgz("anim4"), this.uhn.evi.w1, this.uhn.evi.h1, 17);
        this.ivv[5] = new uqf().uwa(this.eyo.jgz("anim5"), this.uhn.evi.w1, this.uhn.evi.h1, 17);
        this.ivv[6] = new uqf().uwa(this.eyo.jgz("anim6"), this.uhn.evi.w1, this.uhn.evi.h1, 17);
        this.ivv[7] = new uqf().uwa(this.eyo.jgz("anim7"), this.uhn.evi.w1, this.uhn.evi.h1, 33)
    };
    this.nuh = function() {
        this.vlw();
        this.bfj();
        this.tvh();
        wwu.prototype.nuh.call(this)
    };
    this.vlw = function() {
        this.zyo = new fsx();
        this.zyo.uwa(this.uhn.oxo.iog.oue, null, this.rvt.context2D, this.eyo.jgz("h_paytable"));
        this.zyo.parent = this.rvt;
        this.zyo.cep(this.uhn.oxo.iog);
        this.zyo.raa(this.style.oxo.iog);
        if (!this.xqp.whx("tops")) {
            this.rvt.hxw(this.zyo)
        }
    };
    this.tvh = function() {
        var a = this.xqp.whx("tops");
        if (a) {
            this.uct = new fsx();
            this.uct.uwa(this.uhn.top.iog.oue, null, a.context2D, this.eyo.jgz("h_paytable_top"));
            this.uct.parent = a;
            this.uct.cep(this.uhn.top.iog);
            this.uct.raa(this.style.oxo.iog);
            a.hxw(this.uct)
        }
    };
    this.bfj = function() {
        this.bve = new lfx();
        this.bve.uwa(this.uhn.oxo.win.oue, null, this.rvt.context2D, this.eyo.jgz("h_winlines"));
        this.bve.parent = this.rvt;
        this.bve.cep(this.uhn.oxo.win);
        this.bve.raa(this.style.oxo.foc);
        this.bve.oop[0] = this.language.mkc;
        this.rvt.hxw(this.bve)
    };
    this.ujj = function() {
        if (this.bve != null) {
            this.bve.oop[0] = this.language.mkc
        }
    };
    this.njz = function() {
        var a = this.ymd + this.uhn.type + "/";
        this.eyo.ajx("m_back", a + "main.png");
        this.eyo.ajx("m_win", a + "winPanel.png");
        this.eyo.ajx("g_back", a + "gamble.jpg");
        this.eyo.ajx("h_paytable", a + "wthelp.jpg");
        this.eyo.ajx("h_winlines", a + "wlhelp.jpg");
        this.eyo.ajx("h_paytable_top", a + "wthelptop.jpg");
        if (this.taj() === true) {
            this.eyo.ovc(a, "mobile_panels.json")
        } else {
            if (this.kdt === true) {
                this.eyo.ajx("m_g_back", a + "gamble.jpg");
                this.eyo.ajx("m_m_back", a + "main.png");
                this.eyo.ajx("m_m_win", a + "winPanel.png")
            }
        }
    };
    this.hsr = function() {
        if (this.zyo) {
            this.zyo.qjx(this.uhn.oxo.iog.oue);
            this.zyo.cep(this.uhn.oxo.iog)
        }
        if (this.bve) {
            this.bve.qjx(this.uhn.oxo.win.oue);
            this.bve.cep(this.uhn.oxo.win)
        }
    };
    this.vbx = function(a) {
        if (a == bva.language.EN || a == bva.language.US) {
            return new ych()
        } else {
            if (a == bva.language.ES || a == bva.language.CO || a == bva.language.MX || a == bva.language.CL || a == bva.language.VE) {
                return new ryx()
            } else {
                if (a == bva.language.DE || a == bva.language.AT) {
                    return new fsz()
                } else {
                    if (a == bva.language.PT || a == bva.language.BR) {
                        return new ijv()
                    } else {
                        if (a == bva.language.RU) {
                            return new rns()
                        } else {
                            if (a == bva.language.EE) {
                                return new vha()
                            } else {
                                if (a == bva.language.TR) {
                                    return new nsl()
                                } else {
                                    if (a == bva.language.CZ) {
                                        return new pyn()
                                    } else {
                                        if (a == bva.language.GR) {
                                            return new nhv()
                                        } else {
                                            if (a == bva.language.BG) {
                                                return new nlo()
                                            } else {
                                                if (a == bva.language.GE) {
                                                    return new qrh()
                                                } else {
                                                    if (a == bva.language.HU) {
                                                        return new zug()
                                                    } else {
                                                        if (a == bva.language.RO) {
                                                            return new dke()
                                                        } else {
                                                            if (a == bva.language.FR) {
                                                                return new vku()
                                                            } else {
                                                                if (a == bva.language.HR) {
                                                                    return new fat()
                                                                } else {
                                                                    if (a == bva.language.IT) {
                                                                        return new amu()
                                                                    } else {
                                                                        if (a == bva.language.SE) {
                                                                            return new qib()
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
    this.eby = function(a) {
        this.ngk = a;
        if (a == bva.uhn.uum) {
            return new zsu()
        } else {
            if (a == bva.uhn.tzn) {
                return new vub()
            } else {
                if (a == bva.uhn.mkq) {
                    return new muo()
                } else {
                    if (a == bva.uhn.qnf) {
                        return new iaq()
                    } else {
                        if (a == bva.uhn.zjz) {
                            return new xjm()
                        } else {
                            if (a == bva.uhn.hog) {
                                return new mpo()
                            } else {
                                if (a == bva.uhn.udt) {
                                    return new izn()
                                } else {
                                    if (a == bva.uhn.cnt) {
                                        return new mtq()
                                    } else {
                                        if (a == bva.uhn.fbi) {
                                            return new gpr()
                                        } else {
                                            if (a == bva.uhn.opd) {
                                                return new vtc()
                                            } else {
                                                if (a == bva.uhn.xhx) {
                                                    return new sfb()
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
    this.acv = function() {
        this.style = new gzm()
    }
}
wwu.prototype = new axb;

function ecj() {
    bva.sne = -1;
    bva.mij = new wwu();
    bva.mij.uwa({
        uhn: bva.uug.value14
    });
    window.focus()
}

function mss() {
    if (bva.mij != null) {
        if (bva.sne >= 0) {
            clearTimeout(bva.sne)
        }
        bva.sne = setTimeout(bva.mij.mei, 200)
    }
}

function whd() {
    if (bva.mij != null) {
        if (bva.sne >= 0) {
            clearTimeout(bva.sne)
        }
        bva.sne = setTimeout(bva.mij.fgc, 200)
    }
}
if (bva.kgg.thj()) {
    window.onorientationchange = whd;
    window.onresize = whd
} else {
    window.onresize = mss
}
if (bva.uug.value9) {
    window.onload = ecj
} else {
    ecj()
};