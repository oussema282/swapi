

var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"HotTwentyAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
		gameWS.onmessage=function(k){
		
		var tmpMess=k.data.split("#");
	
			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.pgn.wvx!=undefined){
			
			if(gameController.blh!=parseInt(tmpMess[1])){
				
			gameController.blh=parseInt(tmpMess[1]);	
			gameController.pgn.wvx.qex("creditd", "#nkf", [gameController.zre(tmpMess[1]), true]);	
				
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////



function xjf() {
    this.kmm = "Info";
    this.yup = "DEPOSIT";
    this.audio = "AUDIO";
    this.ijh = "TIP";
    this.zgb = "TURBO";
    this.sjx = "STATISTIC";
    this.qlo = "HISTORY";
    this.tmx = "SHORTCUTS";
    this.ajq = "HELP";
    this.dka = "PAYTABLE";
    this.language = "LANGUAGE";
    this.ocj = ">>";
    this.ymu = "<<";
    this.ddu = "Fullscreen is not supported!"
}

function jaf() {
    this.xch = "MINIMUM BET IS";
    this.pxq = "MAX BET";
    this.wmo = "MIN.BET";
    this.qtg = "MAX.BET";
    this.dub = "BET";
    this.start = "START";
    this.ajq = "HELP";
    this.dka = "PAYTABLE";
    this.voc = "MENU";
    this.tyu = "MORE|GAMES";
    this.aka = "STOP";
    this.blh = "CREDIT";
    this.cpo = "GAME OVER";
    this.ugc = "WINNER!";
    this.wsa = "GOOD LUCK!";
    this.win = "WIN";
    this.zdv = "LAST WIN";
    this.fhv = "COLLECT";
    this.www = "COLLECT";
    this.iqc = "GAMBLE";
    this.djz = "AUTO|START";
    this.asg = "HALF|GAMBLE";
    this.aem = "EXIT";
    this.ktc = "START GAME";
    this.ytg = "CHOOSE BET";
    this.nna = "HALF";
    this.ret = "RETURN|TO GAME";
    this.coy = "Total Win";
    this.fmx = "Warning";
    this.qbt = "TOTAL";
    this.wkg = "PLEASE WAIT ...";
    this.xdp = "More Games";
    this.zgb = "SPEED";
    this.mgx = "Malfunction voids all pays and plays.";
    this.cus = "C O N T I N U E";
    this.csu = "AUTOSTART";
    this.yly = "PAYTABLE";
    this.ixc = "GAMBLE";
    this.left = "LEFT";
    this.tsp = "RIGHT";
    this.ok = "OK";
    this.rgl = "CANCEL";
    this.nsg = "Gamble";
    this.gcm = "Half";
    this.nfp = "GAME RULES";
    this.nev = "GAME RULES";
    this.ejf = "Bonus!";
    this.dzl = "BONUS";
    this.moe = "PRESS ANY KEY TO CONTINUE";
    this.puf = "NOT ENOUGH CREDIT!";
    this.byt = "wins";
    this.yho = "V A L U E";
    this.of = "OF";
    this.vca = "TOUCH THE SCREEN TO CONTINUE";
    this.uru = "LOADING ...";
    this.ler = "LOADING HISTORY ...";
    this.eyx = "Communication Error";
    this.adt = "You have reached one of the limits!";
    this.lde = "You have reached the maximum amount of free games!";
    this.bkd = "Game will be closed";
    this.jhc = "Game will be restarted";
    this.bxt = "WON";
    this.error = "ERROR";
    this.qfy = "FREEPLAY";
    this.tmu = "AUTO";
    this.ijz = "GAME ID";
    this.pht = "Playing Time";
    this.bum = "last";
    this.bvo = "games";
    this.yup = "DEPOSIT";
    this.audio = "AUDIO";
    this.skd = "MUSIC";
    this.bsb = "FULLSCREEN";
    this.nqh = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.ynq = "Do not show again";
    this.xww = "Sounds can not be loaded!";
    this.dpw = "Resources missing!";
    this.dgn = "Play without sound?";
    this.oho = "SETTINGS";
    this.lcx = "Please turn your device!";
    this.kmm = "INFO";
    this.tav = "Please disable PRIVATE MODE in your browser to play the game.";
    this.agb = "This game is optimized for Google Chrome.";
    this.vrx = "Please use the current version of";
    this.vew = "Unfortunately this browser is not fully supported.";
    this.ech = "This game can not be started in freeplay mode!";
    this.nsm = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.oxb = "Adjust the game interface to your needs!";
    this.tlw = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.roh = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.ccw = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.sjx = "Statistic";
    this.qzh = "Total Games";
    this.evb = "Total Bets";
    this.zhg = "Total Wins";
    this.mah = "Total Play Time";
    this.jjj = "I have read this message";
    this.nvx = "EXIT|GAME";
    this.qlo = "History";
    this.bmg = "No games played.";
    this.state = "STATE";
    this.nic = "Main Game";
    this.jkw = "Auto Collected";
    this.faw = "Collected";
    this.vga = "Bonusspins";
    this.mnh = "Respin";
    this.dlm = "Bonus";
    this.plp = "First Deal";
    this.hez = "Second Deal";
    this.ovg = "Third Deal";
    this.nrp = "AUTOSTART SETTINGS";
    this.oxg = "Amount of games:";
    this.pen = "Stop autostart";
    this.pnm = "Credit lower than:";
    this.wnj = "Credit higher than:";
    this.xgo = "Win higher than:";
    this.lxr = "The autostart will be stopped at the beginning of the bonus.";
    this.ugy = "Share on Facebook";
    this.szj = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.cxz = "Reality Check";
    this.noq = "You have requested a Reality Check.";
    this.ahb = "Press HISTORY to view your game history.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
jaf.prototype = new xjf;

function cdv() {
    this.xch = "МИНИМАЛЬНАЯ СТАВКА -";
    this.pxq = "МАКС.|СТАВКА";
    this.wmo = "МИН.СТAВКА";
    this.qtg = "МАКС.СТAВКА";
    this.dub = "СТАВКА";
    this.start = "СТАРТ";
    this.ajq = "ПОМОЩЬ";
    this.dka = "ТАБЛИЦА ВЫПЛАТ";
    this.voc = "МЕНЮ";
    this.tyu = "ДРУГИЕ|ИГРЫ";
    this.aka = "СТОП";
    this.blh = "КРЕДИТ";
    this.cpo = "КОНЕЦ ИГРЫ";
    this.ugc = "ПОБЕДИТЕЛЬ!";
    this.wsa = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.zdv = "ПОСЛЕД. ВЫИГРЫШ";
    this.byt = "выйгрыши";
    this.fhv = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.www = "ЗАБРАТЬ ВЫИГРЫШ";
    this.iqc = "ИГРА|НА|РИСК";
    this.djz = "АВТО|ИГРА";
    this.asg = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.aem = "ВЫХОД";
    this.ktc = "НАЖМИТЕ СТАРТ";
    this.ytg = "ВЫБЕРИТЕ СТАВКУ";
    this.nna = "ВЗЯТЬ|1/2";
    this.moe = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.vca = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.gpp = "Множитель для Бонуса";
    this.aow = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.coy = "ОБЩИЙ ВЫИГРЫШ";
    this.uru = "Загрузка ...";
    this.ler = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.puf = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.adt = "Достигнут один из лимитов!";
    this.fmx = "Внимание";
    this.eyx = "ошибка обмена данных";
    this.lde = "Вы получили максимальное количество свободных игр!";
    this.bkd = "Игра заканчивается";
    this.jhc = "Игра начинается заново";
    this.ejf = "Бонус!";
    this.dzl = "БОНУС";
    this.bxt = "ВЫИГРЫШ";
    this.qbt = "ВСЕГО";
    this.wkg = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.qfy = "FREEPLAY";
    this.xdp = "ВЫБОР ИГРЫ";
    this.ijz = "GAME ID";
    this.pht = "Playing Time";
    this.bum = "последняя";
    this.bvo = "игры";
    this.yup = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.skd = "МУЗЫКА";
    this.zgb = "СКОРОСТЬ";
    this.bsb = "ПОЛНОЭКРАННЫЙ";
    this.nqh = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.mgx = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.cus = "П Р О Д О Л Ж И Т Ь";
    this.ynq = "Больше не показывать";
    this.csu = "АВТОИГРА";
    this.yly = "ТАБЛИЦА ВЫПЛАТ";
    this.ixc = "ИГРА НА РИСК";
    this.xww = "Звук не загружается!";
    this.dpw = "Ресурсы отсутствуют!";
    this.dgn = "Играть без звука?";
    this.oho = "НАСТРОЙКА";
    this.lcx = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.tsp = "ПРАВО";
    this.tmu = "АВТО";
    this.yho = "V A L U E";
    this.kmm = "ИНФОРМАЦИЯ";
    this.tav = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.agb = "Настоящая игра оптимизирована для Google Chrome.";
    this.vrx = "Используйте, пожалуйста, актуальную версию";
    this.vew = "К сожалению нет полной поддержки браузера.";
    this.ech = "Запуск этой игры в режиме свободных игр невозможен!";
    this.nsm = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.oxb = "Приспособь интерфейс к своим потребностям!";
    this.szj = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.cxz = "Проверку реальности";
    this.noq = "Вы запросили проверку реальности.";
    this.ahb = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.nfp = "ПРАВИЛА ИГРЫ";
    this.nev = "ПРАВИЛА ИГРЫ";
    this.tlw = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.roh = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.ccw = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.sjx = "Статус";
    this.qzh = "количество игр";
    this.evb = "вся ставка";
    this.zhg = "общий выигрыш";
    this.mah = "общее время игры";
    this.jjj = "Я сообщение прочитал.";
    this.nvx = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.qlo = "История";
    this.bmg = "нет истории.";
    this.state = "STATE";
    this.nic = "Main Game";
    this.jkw = "Auto Collected";
    this.faw = "Collected";
    this.vga = "Bonusspins";
    this.nsg = "Gamble";
    this.gcm = "Half";
    this.mnh = "Respin";
    this.dlm = "Bonus";
    this.plp = "First Deal";
    this.hez = "Second Deal";
    this.ovg = "Third Deal";
    this.rgl = "ИЗМЕНИТЬ";
    this.nrp = "НАСТРОЙКА АВТОСТАРТА";
    this.oxg = "Количество игр:";
    this.pen = "Автостарт остановить";
    this.pnm = "Кредит ниже, чем:";
    this.wnj = "Кредит выше, чем:";
    this.xgo = "Выигрыш выше, чем:";
    this.lxr = "Автостарт прерывается, если начинается бонусная игра.";
    this.ugy = "Поделись в фейсбук";
    this.psr = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
cdv.prototype = new xjf;

function qjy() {
    this.xch = "APUESTA MINIMA ES";
    this.pxq = "APUESTA|MAXIMA";
    this.wmo = "APUESTA MIN.";
    this.qtg = "APUESTA MAX.";
    this.dub = "APUESTA";
    this.start = "START";
    this.ajq = "AYUDA";
    this.dka = "PLAN DE|GANANCIAS";
    this.voc = "MENU";
    this.tyu = "MAS|JUEGOS";
    this.aka = "PARADA";
    this.blh = "CREDITOS";
    this.cpo = "FIN DEL JUEGO";
    this.ugc = "¡GANADOR!";
    this.wsa = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.zdv = "ULTIMOS PREMIO";
    this.byt = "gana";
    this.fhv = "COBRAR";
    this.www = "COBRAR";
    this.iqc = "RIESGO";
    this.djz = "AUTO|START";
    this.asg = "MEDIA|APUESTA";
    this.of = "DE";
    this.aem = "SALIR";
    this.ktc = "¡PULSE START!";
    this.ytg = "ELIJA SU APUESTA";
    this.nna = "MITAD";
    this.moe = "PULSE UNA TECLA PARA CONTINUAR";
    this.vca = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.coy = "Premio total";
    this.uru = "CARGANDO ...";
    this.ler = "CARGANDO HISTORIAL ...";
    this.puf = "No hay bastante CREDITO";
    this.adt = "¡Ha alcanzado uno de los limites!";
    this.fmx = "Advertencia";
    this.eyx = "Error de comunicación";
    this.lde = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.bkd = "El juego se cerrará";
    this.jhc = "El juego se reiniciará";
    this.ejf = "¡BONUS!";
    this.dzl = "BONUS";
    this.bxt = "GANADO";
    this.qbt = "TOTAL";
    this.hbu = "TURBO SI";
    this.wic = "TURBO NO";
    this.wkg = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.qfy = "FREEPLAY";
    this.xdp = "MAS JUEGOS";
    this.ijz = "ID DE JUEGO";
    this.pht = "Playing Time";
    this.bum = "ultimos";
    this.bvo = "juegos";
    this.yup = "DEPÓSITO";
    this.audio = "AUDIO";
    this.skd = "MÚSICA";
    this.zgb = "VELOCIDAD";
    this.bsb = "PANTALLA COMPLETA";
    this.nqh = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.mgx = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.cus = "A D E L A N T E";
    this.ynq = "No mostrar de nuevo";
    this.csu = "AUTOSTART";
    this.yly = "PLAN DE GANANCIAS";
    this.ixc = "RIESGO";
    this.xww = "No se pueden cargar los sonidos.";
    this.dpw = "Faltan recursos.";
    this.dgn = "¿Jugar sin sonido?";
    this.oho = "AJUSTES";
    this.yho = "V A L U E";
    this.lcx = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.tsp = "DERECHA";
    this.tmu = "AUTOMÁTICO";
    this.kmm = "INFORMACIÓN";
    this.tav = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.agb = "Este juego está optimizado para Google Chrome.";
    this.vrx = "Use la versión actual de";
    this.vew = "Desafortunadamente, este explorador no es compatible.";
    this.ech = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.nsm = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.oxb = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.szj = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.cxz = "Reality Check";
    this.noq = "Has solicitado un Reality Check.";
    this.ahb = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.nfp = "REGLAS DEL JUEGO";
    this.nev = "REGLAS|DEL JUEGO";
    this.tlw = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.roh = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.ccw = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.sjx = "ESTADO";
    this.qzh = "Número de juegos";
    this.evb = "Apuesta total";
    this.zhg = "Ganancia total";
    this.mah = "Tiempo total de juego";
    this.jjj = "He leído el mensaje.";
    this.nvx = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.qlo = "HISTORIAL";
    this.bmg = "Aún no hay juegos.";
    this.state = "Estado";
    this.nic = "Juego principal";
    this.jkw = "Ganancia automática";
    this.faw = "Ganancia";
    this.vga = "BONUSSPINS";
    this.nsg = "Apuesta";
    this.gcm = "Mitad";
    this.mnh = "Respin";
    this.dlm = "Bonus";
    this.plp = "Primera mano";
    this.hez = "Segunda mano";
    this.ovg = "Tercera mano";
    this.rgl = "CANCELAR";
    this.nrp = "CONFIGURACIONES DE AUTOSTART";
    this.oxg = "Cantidad de juegos:";
    this.pen = "Detener Autostart";
    this.pnm = "Crédito menor que:";
    this.wnj = "Crédito mayor que:";
    this.xgo = "Ganancia mayor que:";
    this.lxr = "El Autostart se detendrá al principio del bonus.";
    this.ugy = "Compartir en Facebook";
    this.psr = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
qjy.prototype = new xjf;

function wiv() {
    this.xch = "MINIMALER EINSATZ IST";
    this.pxq = "MAX. EINSATZ";
    this.wmo = "MIN. EINSATZ";
    this.qtg = "MAX. EINSATZ";
    this.dub = "EINSATZ";
    this.start = "START";
    this.ajq = "HILFE";
    this.dka = "GEWINNPLAN";
    this.voc = "MENÜ";
    this.tyu = "MEHR|SPIELE";
    this.blh = "KREDIT";
    this.cpo = "SPIEL ENDE";
    this.ugc = "GEWINNER!";
    this.wsa = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.zdv = "LETZTER GEWINN";
    this.byt = "gewinnt";
    this.fhv = "NEHMEN";
    this.www = "NEHMEN";
    this.iqc = "RISIKO";
    this.djz = "AUTO|START";
    this.asg = "HALF|GAMBLE";
    this.aka = "STOP";
    this.of = "VON";
    this.aem = "EXIT";
    this.ktc = "START DRÜCKEN";
    this.ytg = "EINSATZ WÄHLEN";
    this.nna = "TEILEN";
    this.moe = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.vca = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.coy = "Gesamt Gewinn";
    this.uru = "LÄDT ...";
    this.ler = "LÄDT HISTORIE ...";
    this.puf = "NICHT GENUG KREDIT!";
    this.fmx = "Achtung";
    this.eyx = "Kommunikationsfehler";
    this.adt = "Sie haben eines der Limits erreicht!";
    this.lde = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.bkd = "Das Spiel wird beendet";
    this.jhc = "Das Spiel wird neu gestartet";
    this.ejf = "Bonus!";
    this.dzl = "BONUS";
    this.bxt = "GEWONNEN";
    this.qbt = "TOTAL";
    this.wkg = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.qfy = "FREEPLAY";
    this.xdp = "MEHR|SPIELE";
    this.ijz = "SPIEL ID";
    this.pht = "Spielzeit";
    this.bum = "Letzten";
    this.bvo = "Spiele";
    this.yup = "GUTHABEN";
    this.audio = "AUDIO";
    this.skd = "MUSIK";
    this.zgb = "SPEED";
    this.bsb = "VOLLBILD";
    this.nqh = "VOLLBILD";
    this.language = "SPRACHE";
    this.mgx = "Bei Gerätestörung keine Haftung.";
    this.cus = "W E I T E R";
    this.ynq = "Nicht noch einmal anzeigen";
    this.csu = "AUTOSTART";
    this.ixc = "RISIKO";
    this.yly = "GEWINNPLAN";
    this.xww = "Sounds können nicht geladen werden!";
    this.dpw = "Ressourcen fehlen!";
    this.dgn = "Ohne Ton spielen?";
    this.oho = "EINSTELL.";
    this.lcx = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.tsp = "RECHTS";
    this.tmu = "AUTOM.";
    this.yho = "V A L U E";
    this.kmm = "INFO";
    this.tav = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.agb = "Dieses Spiel ist optimiert für Google Chrome.";
    this.vrx = "Bitte benutzen sie die aktuelle Version von";
    this.vew = "Leider wird dieser Browser nicht unterstützt.";
    this.ech = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.nsm = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.oxb = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.szj = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.cxz = "Reality Check";
    this.noq = "Du hast einen Reality Check angefordert.";
    this.ahb = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.mnl = "Spielpause";
    this.nml = "Spiellimits";
    this.san = "Selbsttest";
    this.nfp = "SPIELREGELN";
    this.nev = "SPIELREGELN";
    this.tlw = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.roh = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.ccw = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.sjx = "Statistik";
    this.qzh = "Anzahl der Spiele";
    this.evb = "Gesamteinsatz";
    this.zhg = "Gesamtgewinn";
    this.mah = "Gesamtspielzeit";
    this.jjj = "Ich habe die Nachricht gelesen";
    this.nvx = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.qlo = "Historie";
    this.bmg = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.nic = "Hauptspiel";
    this.jkw = "Auto. Nehmen";
    this.faw = "Genommen";
    this.vga = "Bonusspins";
    this.nsg = "Risiko";
    this.gcm = "Halb";
    this.mnh = "Respin";
    this.dlm = "Bonus";
    this.plp = "Erster Deal";
    this.hez = "Zweiter Deal";
    this.ovg = "Dritter Deal";
    this.rgl = "ABBRUCH";
    this.nrp = "AUTOSTART EINSTELLUNGEN";
    this.oxg = "Anzahl der Spiele: ";
    this.pen = "Autostart anhalten";
    this.pnm = "Kredit niedriger als:";
    this.wnj = "Kredit höher als:";
    this.xgo = "Gewinn höher als:";
    this.lxr = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.ugy = "Auf Facebook teilen";
    this.psr = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
wiv.prototype = new xjf;

function xgj() {
    this.xch = "MINIMUM BANKO";
    this.pxq = "MAKS. BANKO";
    this.wmo = "MIN. BANKO";
    this.qtg = "MAKS. BANKO";
    this.dub = "BANKO";
    this.start = "BAŞLAT";
    this.ajq = "YARDIM";
    this.dka = "Kazanç planı";
    this.voc = "MENÜ";
    this.tyu = "DAHA ÇOK|OYUN";
    this.aka = "DUR";
    this.blh = "KREDI";
    this.cpo = "OYUN BİTTİ";
    this.ugc = "KAZANDINIZ!";
    this.wsa = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.zdv = "SON KAZANÇ";
    this.byt = "kazanır";
    this.fhv = "ALMAK";
    this.www = "ALMAK";
    this.iqc = "RIZIKO";
    this.djz = "OTOMATİK|BAŞLATMA";
    this.asg = "YARI|RIZIKO";
    this.of = "VEREN";
    this.aem = "ÇIKIŞ";
    this.ktc = "BAŞLAT TUŞUNA BASINIZ";
    this.ytg = "BANKO SEÇİNİZ";
    this.nna = "ALMAK|1/2";
    this.moe = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.vca = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.coy = "Toplam kazanç";
    this.uru = "YÜKLÜYOR ...";
    this.ler = "GEÇMIŞI YÜKLÜYOR ...";
    this.puf = "YETERSİZ KREDİ.";
    this.adt = "Limitlerin birine ulaştınız!";
    this.fmx = "Dikkat";
    this.eyx = "İletişim hatası";
    this.lde = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.bkd = "Oyun sonlandırılıyor";
    this.jhc = "Oyun yeniden başlatılıyor";
    this.ejf = "Bedava oyun primi!";
    this.dzl = "PRİM";
    this.bxt = "KAZANDINIZ";
    this.qbt = "TOPLAM";
    this.wkg = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.qfy = "FREEPLAY";
    this.xdp = "DAHA ÇOK OYUN";
    this.ijz = "OYUN ID";
    this.pht = "OYUN SÜRESİ";
    this.bum = "Son";
    this.bvo = "oyun";
    this.yup = "BAKIYE";
    this.audio = "AUDIO";
    this.skd = "MÜZIK";
    this.zgb = "HıZ";
    this.bsb = "TAM EKRAN";
    this.nqh = "TAM EKRAN";
    this.language = "LISAN";
    this.mgx = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.cus = "İ L E R I";
    this.ynq = "Tekrar gösterme";
    this.csu = "OTOMATİK|BAŞLATMA";
    this.ixc = "RIZIKO";
    this.yly = "Kazanç planı";
    this.xww = "Sesler yüklenemiyorlar!";
    this.dpw = "Kaynaklar eksik!";
    this.dgn = "Sessiz oynayacak mısınız?";
    this.oho = "AYARLAR";
    this.lcx = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.tsp = "SAĞ";
    this.tmu = "OTOMATIK";
    this.yho = "V A L U E";
    this.kmm = "BILGI";
    this.tav = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.agb = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.vrx = "'nin güncel versiyonunu kullanın";
    this.vew = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.ech = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.nsm = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.oxb = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.szj = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.cxz = "Reality Check";
    this.noq = "Reality Check talebinde bulundun.";
    this.ahb = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.nfp = "OYUNUN KURALLARı";
    this.nev = "OYUNUN|KURALLARı";
    this.tlw = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.roh = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.ccw = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.sjx = "İstatistik";
    this.qzh = "Toplam oyunlar";
    this.evb = "Toplam bankolar";
    this.zhg = "Toplam kazançlar";
    this.mah = "Toplam oyun süresi";
    this.jjj = "Bu mesajı okudum.";
    this.nvx = "OYUNU|KAPAT";
    this.ok = "OK";
    this.qlo = "GEÇMİŞ";
    this.bmg = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.nic = "Ana oyun";
    this.jkw = "Otomatik olarak kazandınız";
    this.faw = "Toplandı";
    this.vga = "Prim oyunlar";
    this.nsg = "Riziko";
    this.gcm = "Yarım";
    this.mnh = "Respin";
    this.dlm = "Prim";
    this.plp = "İlk anlaşma";
    this.hez = "İkinci anlaşma";
    this.ovg = "Üçüncü anlaşma";
    this.rgl = "İPTAL";
    this.nrp = "OTOMATIK BAŞLAT AYARLARı";
    this.oxg = "Oyun sayısı:";
    this.pen = "Otomatik başlatmayı durdur";
    this.pnm = "Kredi bundan düşüktür:";
    this.wnj = "Kredi bundan yüksektir:";
    this.xgo = "Kazanç bundan yüksektir:";
    this.lxr = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.ugy = "Facebook'ta paylaş";
    this.psr = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
xgj.prototype = new xjf;

function rxu() {
    this.xch = "MINIMÁLNÍ SÁZKA JE";
    this.pxq = "MAX. SÁZKA";
    this.wmo = "MIN. SÁZKA";
    this.qtg = "MAX. SÁZKA";
    this.dub = "SÁZKA";
    this.start = "START";
    this.ajq = "POMOC";
    this.dka = "VÝHERNÍ PLÁN";
    this.voc = "MENU";
    this.tyu = "DALŠÍ|HRY";
    this.aka = "STOP";
    this.blh = "KREDIT";
    this.cpo = "KONEC HRY";
    this.ugc = "VÍTEZ!";
    this.wsa = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.zdv = "POSL. VÝHRA";
    this.byt = "vyhrává";
    this.fhv = "VEZMI";
    this.www = "VEZMI";
    this.iqc = "HRA";
    this.djz = "AUTO|START";
    this.asg = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.aem = "VÝSTUP";
    this.ktc = "START HRY";
    this.ytg = "VYBRAT SÁZKU";
    this.nna = "POLOVINA";
    this.moe = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.vca = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.coy = "Celková výhra";
    this.uru = "NAHRÁVÁM ...";
    this.ler = "NAHRÁVÁM HISTORII ...";
    this.puf = "Nedostatecný kredit.";
    this.adt = "Dosáhli jste jednoho z limitů!";
    this.fmx = "Varování";
    this.eyx = "Chyba komunikace";
    this.lde = "Dosáhli jste maximálního počtu her zdarma!";
    this.bkd = "Hra se zavře";
    this.jhc = "Hra se restartuje";
    this.ejf = "Bonus!";
    this.dzl = "BONUS";
    this.bxt = "VYHRÁL";
    this.qbt = "CELKOVÁ";
    this.wkg = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.qfy = "FREEPLAY";
    this.xdp = "DALŠÍ HRY";
    this.ijz = "ID HRY";
    this.pht = "HRACÍ DOBA";
    this.bum = "Poslední";
    this.bvo = "hry";
    this.yup = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.skd = "MUZIKA";
    this.zgb = "RYCHLOST";
    this.bsb = "FULLSCREEN";
    this.nqh = "FULLSCREEN";
    this.language = "ŘEČ";
    this.mgx = "Při poruše jsou všechny hry a výhry neplatné.";
    this.cus = "P O K R A Č U J";
    this.ynq = "Nezobrazujte znovu";
    this.csu = "AUTOSTART";
    this.ixc = "HRA";
    this.yly = "VÝHERNÍ PLÁN";
    this.xww = "Zvuk nelze nahrát!";
    this.dpw = "Chybí zdroje!";
    this.dgn = "Hrát bez zvuku?";
    this.oho = "NASTAVENÍ";
    this.yho = "V A L U E";
    this.lcx = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.tsp = "VPRAVO";
    this.tmu = "AUTO";
    this.kmm = "INFORMACE";
    this.tav = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.agb = "Tato hra je optimalizovaná pro Google Chrome.";
    this.vrx = "Použijte aktuální verzi";
    this.vew = "Tento prohlížeč není bohužel plně podporován.";
    this.ech = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.nsm = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.oxb = "Nastavte rozhraní hry svým potřebám!";
    this.szj = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.cxz = "Reality Check";
    this.noq = "Požádali jste o kontrolu reality.";
    this.ahb = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.nfp = "PRAVIDLA HRY";
    this.nev = "PRAVIDLA HRY";
    this.tlw = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.roh = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.ccw = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.sjx = "Statistika";
    this.qzh = "Celkem hry";
    this.evb = "Celkem sázky";
    this.zhg = "Celkem výhry";
    this.mah = "Celková hrací doba";
    this.jjj = "Zprávu jsem četl/a.";
    this.nvx = "UKONČIT|HRU";
    this.ok = "OK";
    this.qlo = "HISTORIE";
    this.bmg = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.nic = "Hlavní hra";
    this.jkw = "Automaticky vybráno";
    this.faw = "Vybráno";
    this.vga = "Bonusspins";
    this.nsg = "Hra";
    this.gcm = "Polovina";
    this.mnh = "Respin";
    this.dlm = "Bonus";
    this.plp = "První vyložení";
    this.hez = "Druhé vyložení";
    this.ovg = "Třetí vyložení";
    this.rgl = "ZRUŠIT";
    this.nrp = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.oxg = "Množství her:";
    this.pen = "Zastavit automatický start";
    this.pnm = "Kredit nižší než:";
    this.wnj = "Kredit vyšší než:";
    this.xgo = "Výhra vyšší než:";
    this.lxr = "Automatický start se zastaví na začátku bonusu.";
    this.ugy = "Sdílet na Facebooku";
    this.psr = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
rxu.prototype = new xjf;

function wyt() {
    this.xch = "MIINIMUMPANUS ON";
    this.pxq = "MAX PANUS";
    this.wmo = "MIN PANUS";
    this.qtg = "MAX PANUS";
    this.dub = "PANUS";
    this.start = "START";
    this.ajq = "ABI";
    this.dka = "VÕIDU TABEL";
    this.voc = "MENÜÜ";
    this.tyu = "VALI|MÄNG";
    this.aka = "STOPP";
    this.blh = "KREDIIT";
    this.cpo = "MÄNG ON LÕPPENUD!";
    this.ugc = "OLED VÕITNUD!";
    this.wsa = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.zdv = "EELMINE VÕIT";
    this.fhv = "VÕTA|VÕIT";
    this.www = "VÕTA VÕIT";
    this.iqc = "DUUBEL|DAMINE";
    this.djz = "AUTO|START";
    this.asg = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.aem = "VÄLJA";
    this.ktc = "ALUSTA MÄNGU";
    this.ytg = "VALI PANUS";
    this.nna = "POOLIK";
    this.moe = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.coy = "Koguvõit";
    this.puf = "POLE PIISAVALT KREDIITI.";
    this.ejf = "Boonus!";
    this.dzl = "BOONUS";
    this.wkg = "PALUN OODAKE ...";
    this.xdp = "Vali Mäng";
    this.audio = "HELI";
    this.skd = "MUUSIKA";
    this.zgb = "KIIRUS";
    this.bsb = "TÄISEKRAAN";
    this.nqh = "TÄISEKRAAN";
    this.mgx = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.ihi = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.nfp = "MÄNGUREEGLID";
    this.nev = "MÄNGUREEGLID";
    this.uru = "LAADIMINE ...";
    this.ler = "AJALOO LAADIMINE ...";
    this.adt = "Oled saavutanud ühe limiitidest!";
    this.fmx = "Hoiatus";
    this.eyx = "Ühenduse viga";
    this.lde = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.bkd = "Mäng suletakse";
    this.jhc = "Mäng taaskäivitatakse";
    this.vca = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.oho = "SÄTTED";
    this.yho = "V A L U E";
    this.lcx = "Pöörake oma seadet!";
    this.kmm = "INFO";
    this.tav = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.agb = "See mäng on optimeeritud Google Chrome jaoks.";
    this.vrx = "Palun kasutage praeguse versiooni";
    this.vew = "Kahjuks ei toetata seda brauserit täielikult.";
    this.ech = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.tsp = "PAREM";
    this.tmu = "AUTOMAATNE";
    this.bxt = "VÕITIS";
    this.byt = "võidetud";
    this.qbt = "KOKKU";
    this.error = "VIGA";
    this.qfy = "TASUTA MÄNG";
    this.ijz = "MÄNGU ID";
    this.pht = "MÄNGUAEG";
    this.bum = "Viimased";
    this.bvo = "mängu";
    this.yup = "SISSEMAKSE";
    this.tlw = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.roh = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.ccw = "RISKI, ET SUURENDADA OMA VÕITU";
    this.sjx = "Statistika";
    this.qzh = "Mänge kokku";
    this.evb = "Kogupanus";
    this.zhg = "Koguvõit";
    this.mah = "Mänguaeg kokku";
    this.jjj = "Olen seda teadet lugenud.";
    this.nvx = "MÄNGU|LÕPP";
    this.qlo = "Ajalugu";
    this.bmg = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.nic = "Põhimäng";
    this.jkw = "Automaatne väljavõtt";
    this.faw = "Välja võetud";
    this.vga = "Bonusspins";
    this.nsg = "Gamble";
    this.gcm = "Pool";
    this.mnh = "Respin";
    this.dlm = "Boonus";
    this.plp = "Esimene jagamine";
    this.hez = "Teine jagamine";
    this.ovg = "Kolmas jagamine";
    this.cus = "J Ä T K A";
    this.ynq = "Ära seda enam näita";
    this.csu = "AUTOSTART";
    this.ixc = "DUUBEL DAMINE";
    this.yly = "VÕIDU TABEL";
    this.xww = "Helisid ei saa laadida!";
    this.dpw = "Ressursid puuduvad!";
    this.dgn = "Soovid mängida ilma helideta?";
    this.nsm = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.oxb = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.szj = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.rgl = "TÜHISTA";
    this.nrp = "AUTOMAATKÄIVITUSE SÄTTED";
    this.oxg = "Mängude arv:";
    this.pen = "Peata automaatkäivitus";
    this.pnm = "Krediit madalam kui:";
    this.wnj = "Krediit kõrgem kui:";
    this.xgo = "Võit suurem kui:";
    this.lxr = "Automaatkäivitus peatatakse boonuse alguses.";
    this.ugy = "Jaga Facebookis";
    this.ok = "OK";
    this.cxz = "Reality Check";
    this.noq = "Olete soovinud reaalsuskontrolli.";
    this.ahb = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
wyt.prototype = new xjf;

function reb() {
    this.xch = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.pxq = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.wmo = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.qtg = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.dub = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.ajq = "ΒΟHΘΕΙΑ";
    this.dka = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.voc = "ΜΕΝΟY";
    this.tyu = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.aka = "ΣΤΟΠ";
    this.blh = "ΠIΣΤΩΣΗ";
    this.cpo = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.ugc = "ΝΙΚΗΤΗΣ!";
    this.wsa = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.zdv = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.fhv = "ΠΑΡΑΛΑΒH";
    this.www = "ΠΑΡΑΛΑΒH";
    this.iqc = "ΤΖΟΓAΡΩ";
    this.djz = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.asg = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.aem = "EΞΟΔΟΣ";
    this.ktc = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.ytg = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.nna = "ΠΑΡΑΛΑΒH|1/2";
    this.moe = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.coy = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.puf = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.ejf = "Μπόνουσ!";
    this.dzl = "ΜΠOΝΟΥΣ";
    this.wkg = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.xdp = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.skd = "ΜΟΥΣΙΚΉ";
    this.zgb = "ΤΑΧYΤΗΤΑ";
    this.bsb = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.nqh = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.mgx = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.qbt = "ΣYΝΟΛΟ";
    this.nfp = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.nev = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.uru = "ΦΟΡΤΩΣΗ ...";
    this.ler = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.adt = "Ξεπεράσατε κάποιο όριο!";
    this.fmx = "Προειδοποίηση";
    this.eyx = "Σφάλμα επικοινωνίας";
    this.lde = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.bkd = "Το παιχνίδι θα τερματιστεί";
    this.jhc = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.vca = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.oho = "ΡΥΘΜΙΣΕΙΣ";
    this.yho = "V A L U E";
    this.lcx = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.kmm = "ΠΛΗΡΟΦΟΡΊΕς";
    this.tav = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.agb = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.vrx = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.vew = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.ech = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.tsp = "ΔΕΞΙA";
    this.tmu = "AΥΤOΜΑΤΟ";
    this.bxt = "ΚEΡΔΙΣΕ";
    this.byt = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.qfy = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.ijz = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.pht = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.bum = "Τελευταία";
    this.bvo = "παιχνίδια";
    this.yup = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.tlw = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.roh = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.ccw = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.sjx = "Στατιστικά";
    this.qzh = "Σύνολο παιχνιδιών";
    this.evb = "Συνολικό ποντάρισμα";
    this.zhg = "Συνολικό κέρδος";
    this.mah = "Συνολικός χρόνος παιχνιδιού";
    this.jjj = "Eχω διαβάσει το μήνυμα.";
    this.nvx = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.qlo = "ΙΣΤΟΡΙΚΟ";
    this.bmg = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.nic = "Κύριο παιχνίδι";
    this.jkw = "Αυτόματη λήψη";
    this.faw = "Ελήφθησαν";
    this.vga = "Bonusspins";
    this.nsg = "Τζογάρω";
    this.gcm = "Hμισυ";
    this.mnh = "Respin";
    this.dlm = "Μπόνουσ";
    this.plp = "Πρώτο μοίρασμα";
    this.hez = "Δεύτερο μοίρασμα";
    this.ovg = "Τρίτο μοίρασμα";
    this.cus = "Σ Υ Ν  E Χ Ε Ι Α";
    this.ynq = "Να μην προβληθεί ξανά";
    this.csu = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.ixc = "ΤΖΟΓAΡΩ";
    this.yly = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.xww = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.dpw = "Λείπουν πόροι!";
    this.dgn = "Παιχνίδι χωρίς ήχο?";
    this.nsm = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.oxb = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.szj = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.rgl = "ΑΚΎΡΩΣΗ";
    this.nrp = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.oxg = "Αριθμός παιχνιδιών:";
    this.pen = "Διακοπή autostart";
    this.pnm = "Μονάδες χαμηλότερα από:";
    this.wnj = "Μονάδες υψηλότερες από:";
    this.xgo = "Κέρδος υψηλότερο από:";
    this.lxr = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.ugy = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.cxz = "έλεγχο πραγματικότητας";
    this.noq = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.ahb = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
reb.prototype = new xjf;

function zwq() {
    this.xch = "МИН. ЗАЛОГ Е";
    this.pxq = "МАКС. ЗАЛОГ";
    this.wmo = "МИНИМ. ЗАЛОГ";
    this.qtg = "МАКС. ЗАЛОГ";
    this.dub = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.ajq = "ПОМОЩ";
    this.dka = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.voc = "МЕНЮ";
    this.tyu = "ПОВЕЧЕ|ИГРИ";
    this.aka = "СТОП";
    this.blh = "КРЕДИТ";
    this.cpo = "ИГРАТА ЗАВЪРШИ";
    this.ugc = "ПЕЧЕЛИТЕ!";
    this.wsa = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.zdv = "ПОСЛ.ПЕЧАЛБА";
    this.fhv = "ПРИБИРАНЕ";
    this.www = "ПРИБИРАНЕ";
    this.iqc = "ДУБЛИРАНЕ";
    this.djz = "АВТО|СТАРТ";
    this.asg = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.aem = "ИЗХОД";
    this.ktc = "ЗАПОЧНЕТЕ ИГРАТА";
    this.ytg = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.nna = "ДЕЛЕНЕ";
    this.moe = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.coy = "ОБЩА ПЕЧАЛБА";
    this.puf = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.ejf = "Бонус!";
    this.dzl = "БОНУС";
    this.wkg = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.xdp = "Повече Игри";
    this.zgb = "ТУРБО";
    this.mgx = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.nfp = "ПРАВИЛА НА ИГРАТА";
    this.nev = "ПРАВИЛА|НА ИГРАТА";
    this.uru = "ЗАРЕЖДАНЕ ...";
    this.ler = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.adt = "Достигна един от лимитите!";
    this.fmx = "Предупреждение";
    this.eyx = "Комуникационна грешка";
    this.lde = "Достигнали сте максималния брой безплатни игри!";
    this.bkd = "Играта ще бъде затворена";
    this.jhc = "Играта ще бъде рестартирана";
    this.vca = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.oho = "НАСТРОЙКИ";
    this.yho = "V A L U E";
    this.lcx = "Моля, включете устройството!";
    this.kmm = "ИНФОРМАЦИЯ";
    this.tav = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.agb = "Тази игра е оптимизирана за Google Chrome.";
    this.vrx = "Моля, използвайте текущата версия на";
    this.vew = "За съжаление този браузър не се поддържа напълно.";
    this.ech = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.tsp = "ДЯСНА";
    this.tmu = "АВТО";
    this.bxt = "СПЕЧЕЛЕНО";
    this.byt = "печалби";
    this.qbt = "ОБЩО";
    this.error = "ГРЕШКА";
    this.qfy = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.skd = "МУЗИКА";
    this.bsb = "ПЪЛЕН ЕКРАН";
    this.nqh = "ПЪЛЕН|ЕКРАН";
    this.ijz = "ИД НА ИГРА";
    this.pht = "ВРЕМЕ НА ИГРА";
    this.bum = "Последни";
    this.bvo = "игри";
    this.yup = "ДЕПОЗИТ";
    this.tlw = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.roh = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.ccw = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.sjx = "Статистика";
    this.qzh = "Общо игри";
    this.evb = "Общо залог";
    this.zhg = "Общо печалби";
    this.mah = "Общо време на игра";
    this.jjj = "Прочетох това съобщение.";
    this.nvx = "ИЗХОД|ОТ|ИГРАТА";
    this.qlo = "ИСТОРИЯ";
    this.bmg = "Няма играни игри.";
    this.state = "СТАТУС";
    this.nic = "Основна игра";
    this.jkw = "Автоматично събрани";
    this.faw = "Събрани";
    this.vga = "Бонус-игри";
    this.nsg = "Дублиране";
    this.gcm = "Половина";
    this.mnh = "Respin";
    this.dlm = "Бонус";
    this.plp = "Първо раздаване";
    this.hez = "Второ раздаване";
    this.ovg = "Трето раздаване";
    this.cus = "П Р О Д Ъ Л Ж А В А М";
    this.ynq = "Не показвай отново";
    this.csu = "AUTOSTART";
    this.ixc = "ДУБЛИРАНЕ";
    this.yly = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.xww = "Звукът не може да бъде зареден!";
    this.dpw = "Липсват ресурси!";
    this.dgn = "Игра без звук?";
    this.nsm = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.oxb = "Настройте интерфейса на играта според своите нужди!";
    this.szj = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.rgl = "ИЗЧИСТВАНЕ";
    this.nrp = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.oxg = "Брой игри:";
    this.pen = "Спри автоматичния старт";
    this.pnm = "Кредит по-малък от:";
    this.wnj = "Кредит по-висок от:";
    this.xgo = "Спечели повече от:";
    this.lxr = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.ugy = "Сподели във Facebook";
    this.ok = "OK";
    this.cxz = "Reality Check";
    this.noq = "Заявили сте проверка на реалността.";
    this.ahb = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
zwq.prototype = new xjf;

function qng() {
    this.xch = "მინიმალური ფსონი არის";
    this.pxq = "მაქსიმალური ფსონი";
    this.wmo = "მინიმალური ფსონი";
    this.qtg = "მაქსიმალური ფსონი";
    this.dub = "ფსონი";
    this.start = "დაწყება";
    this.ajq = "დახმარება";
    this.dka = "გადახდის მრიცხველი";
    this.voc = "მენიუ";
    this.tyu = "მეტი|თამაშები";
    this.aka = "გაჩერება";
    this.blh = "კრედიტი";
    this.cpo = "თამაში დასრულებულია";
    this.ugc = "გამარჯვებული!";
    this.wsa = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.zdv = "ბოლო მოგება";
    this.fhv = "შეგროვება";
    this.www = "შეგროვება";
    this.iqc = "აზარტი";
    this.djz = "ავტო|დაწყება";
    this.asg = "ნახევარი";
    this.aem = "გამოსვლა";
    this.ktc = "თამაშის დაწყება";
    this.ytg = "აირჩიეთ ფსონი";
    this.nna = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.coy = "მთლიანი მოგება";
    this.fmx = "გაფრთხილება";
    this.qbt = "მთლიანი";
    this.wkg = "გთხოვთ, დაელოდოთ ...";
    this.xdp = "მეტი თამაშები";
    this.zgb = "ტურბო";
    this.mgx = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.cus = "გაგრძელება";
    this.csu = "ავტო დაწყება";
    this.yly = "გადახდის მრიცხველი";
    this.ixc = "აზარტი";
    this.left = "მარცხნივ";
    this.tsp = "მარჯვნივ";
    this.tmu = "ავტომატურად";
    this.ok = "კი";
    this.rgl = "გაუქმება";
    this.nsg = "აზარტი";
    this.gcm = "ნახევარი";
    this.nfp = "თამაშის წესები";
    this.nev = "თამაშის წესები";
    this.ejf = "BONUS!";
    this.dzl = "ბონუს";
    this.moe = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.puf = "არა საკმარისი კრედიტი.";
    this.vca = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.uru = "ჩატვირთვის  ...";
    this.ler = "ჩატვირთვის  ისტორია  ...";
    this.eyx = "საკომუნიკაციო შეცდომა";
    this.adt = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.lde = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.bkd = "თამაში დასრულდება";
    this.jhc = "თამაში გადაიტვირთება";
    this.bxt = "მოგებულია";
    this.byt = "wins";
    this.yho = "V A L U E";
    this.error = "შეცდომა";
    this.qfy = "უფასო თამაში";
    this.ijz = "თამაშის  ნომერი";
    this.pht = "სათამაშო დრო";
    this.bum = "ბოლო ";
    this.bvo = "თამაშები";
    this.yup = "დეპოზიტი";
    this.audio = "ხმა";
    this.skd = "მუსიკა";
    this.bsb = "სრული ეკრანი";
    this.nqh = "სრული ეკრანი";
    this.language = "ენის";
    this.ynq = "მომავალში აღარ ჩვენება";
    this.xww = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.dpw = "არასაკმარისი რესურსები!";
    this.dgn = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.lcx = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.tav = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.agb = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.emw = "გთხოვთ გამოიყენოთ";
    this.lqf = "-ის მიმდინარე ვერსია";
    this.vew = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.ech = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.nsm = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.oxb = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.tlw = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.roh = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.ccw = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.qzh = "მთლიანი თამაშები";
    this.evb = "ფსონი მთლიანად";
    this.zhg = "მთლიანი მოგება";
    this.mah = "მთლიანი სათამაშო დრო";
    this.jjj = "მე გავეცანი ამ გზავნილს.";
    this.nvx = "თამაშის|დამთავრება";
    this.qlo = "მოვლენების ჩანაწერი";
    this.bmg = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.nic = "ძირითადი თამაში";
    this.jkw = "ავტომატურად შეგროვება";
    this.faw = "აღებულ იქნა";
    this.plp = "პირველი დარიგება";
    this.hez = "მეორე დარიგება";
    this.ovg = "მესამე დარიგება";
    this.nrp = "ავტოგამშვების პარამეტრები";
    this.oxg = "თამაშების რაოდენობა:";
    this.pen = "შეაჩერეთ ავტოგამშვები";
    this.pnm = "კრედიტი უფრო დაბალი ვიდრე:";
    this.wnj = "კრედიტი უფრო მაღალი ვიდრე:";
    this.xgo = "მოიგეთ უფრო მეტი ვიდრე:";
    this.lxr = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.ugy = "გააზიარეთ ფეისბუქზე";
    this.sjx = "სტატისტიკა";
    this.of = "/";
    this.vga = "Bonus თამაში";
    this.dlm = "ბონუსი";
    this.kmm = "ინფორმაცია";
    this.oho = "პარამეტრ.";
    this.mnh = "ხელახლა დატრიალების";
    this.szj = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.cxz = "რეალობის შემოწმება";
    this.noq = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.ahb = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
qng.prototype = new xjf;

function ksu() {
    this.xch = "A MINIMUM TÉT";
    this.pxq = "MAXIMUM TÉT";
    this.wmo = "MIN. TÉT";
    this.qtg = "MAX. TÉT";
    this.dub = "TÉT";
    this.start = "START";
    this.ajq = "SÚGÓ";
    this.dka = "SÚGÓ";
    this.voc = "MENÜ";
    this.tyu = "MENÜ";
    this.aka = "STOP";
    this.blh = "HITEL";
    this.cpo = "A JÁTÉKNAK VÉGE";
    this.ugc = "NYEREMÉNY!";
    this.wsa = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.zdv = "UTOLSÓ NYER.";
    this.fhv = "FELÍR";
    this.www = "FELÍR";
    this.iqc = "SZORZÁS";
    this.djz = "AUTO|START";
    this.asg = "FELEZÉS";
    this.aem = "KILÉPÉS";
    this.ktc = "START";
    this.ytg = "VÁLASSZON TÉTET";
    this.nna = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.coy = "Összes Nyeremény";
    this.fmx = "Figyelmeztetés";
    this.qbt = "ÖSSZES";
    this.wkg = "KÉREM VÁRJON ...";
    this.xdp = "Menü";
    this.zgb = "SEBESSÉG";
    this.mgx = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.cus = "T O V Á B B";
    this.csu = "AUTOSTART";
    this.yly = "SÚGÓ";
    this.ixc = "SZORZÁS";
    this.left = "BAL";
    this.tsp = "JOBB";
    this.ok = "OK";
    this.rgl = "MÉGSEM";
    this.nsg = "Szorzás";
    this.gcm = "Felezés";
    this.nfp = "JÁTÉKSZABÁLYOK";
    this.nev = "JÁTÉKSZABÁLYOK";
    this.ejf = "Bónusz!";
    this.dzl = "BÓNUSZ";
    this.moe = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.puf = "NINCS ELÉG HITEL";
    this.yho = "V A L U E";
    this.byt = "nyeremények";
    this.of = "/";
    this.vca = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.uru = "BETÖLTÉSE ...";
    this.ler = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.eyx = "Kommunikációs hiba";
    this.adt = "Elérte az egyik limitet!";
    this.lde = "Elérte a szabad játékok maximum számát!";
    this.bkd = "A játék megállítva";
    this.jhc = "Játék újraindul";
    this.bxt = "NYERT";
    this.error = "HIBA";
    this.qfy = "FREEPLAY";
    this.tmu = "AUTO";
    this.ijz = "JÁTÉK ID";
    this.pht = "Játék Idő";
    this.bum = "utolsó";
    this.bvo = "játék";
    this.yup = "HITEL";
    this.audio = "HANG";
    this.skd = "ZENE";
    this.bsb = "TELJES KÉPERNYŐ";
    this.nqh = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.ynq = "Ne mutassa mégegyszer";
    this.xww = "A hangot nem lehet betölteni!";
    this.dpw = "Források hiányoznak!";
    this.dgn = "Játék hang nélkül?";
    this.oho = "BEÁLLÍTÁS";
    this.lcx = "Kérjük fordítsa el a készüléket!";
    this.kmm = "INFÓ";
    this.tav = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.agb = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.emw = "Kérjük használja a(z)";
    this.lqf = " legújabb verzióját!";
    this.vew = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.ech = "Ez a játék nem indítható FreePlay módban!";
    this.nsm = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.oxb = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.tlw = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.roh = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.ccw = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.sjx = "Statisztika";
    this.qzh = "Összes Játék";
    this.evb = "Összes Tét";
    this.zhg = "Összes Nyeremény";
    this.mah = "Összes Játék Idő";
    this.jjj = "Elolvastam az üzenetet.";
    this.nvx = "KILÉPÉS";
    this.qlo = "Előzmények";
    this.bmg = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.nic = "Fő Játék";
    this.jkw = "Autom. Felírás";
    this.faw = "Felírva";
    this.vga = "Bónusz játék";
    this.mnh = "Respin";
    this.dlm = "Bónusz";
    this.plp = "Első Leosztás";
    this.hez = "Második Leosztás";
    this.ovg = "Harmadik Leosztás";
    this.nrp = "AUTOSTART BEÁLLÍTÁS";
    this.oxg = "Játékok száma:";
    this.pen = "Stop autostart";
    this.pnm = "A hitel kevesebb, mint:";
    this.wnj = "A hitel több, mint:";
    this.xgo = "A nyeremény több, mint:";
    this.lxr = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.ugy = "Megosztás a Facebook-on";
    this.szj = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.cxz = "Reality Check";
    this.noq = "Ön egy valóság-ellenőrzést kért.";
    this.ahb = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
ksu.prototype = new xjf;

function yhb() {
    this.xch = "MIZA MINIMĂ ESTE";
    this.pxq = "MIZA MAXIMĂ";
    this.wmo = "MIZA MIN.";
    this.qtg = "MIZA MAX.";
    this.dub = "MIZĂ";
    this.start = "START";
    this.ajq = "AJUTOR";
    this.dka = "LISTA|CÂŞTIGURI";
    this.voc = "MENIU";
    this.tyu = "MENIUL|JOCULUI";
    this.aka = "STOP";
    this.blh = "CREDIT";
    this.cpo = "SFÂRŞIT JOCUL";
    this.ugc = "CÂŞTIGĂTOR!";
    this.wsa = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.zdv = "ULTIMUL CÂŞTIG";
    this.fhv = "COLECTA";
    this.www = "COLECTA";
    this.iqc = "JOC";
    this.djz = "AUTO|START";
    this.asg = "COLECTARE|1/2";
    this.aem = "IEŞIRE";
    this.ktc = "APĂSAŢI START";
    this.ytg = "ALEGEŢI MIZA";
    this.nna = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.coy = "Câştig total";
    this.fmx = "Avertizare";
    this.qbt = "TOTAL";
    this.wkg = "AŞTEPTAŢI VĂ ROG ...";
    this.xdp = "Meniul Jocului";
    this.zgb = "VITEZĂ";
    this.mgx = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.cus = "C O N T I N U A R E";
    this.csu = "AUTOSTART";
    this.yly = "LISTA CÂŞTIGURI";
    this.ixc = "JOC";
    this.left = "STÂNGA";
    this.tsp = "DREAPTA";
    this.ok = "OK";
    this.rgl = "ÎNTRERUPERE";
    this.nsg = "Joc";
    this.gcm = "Colectare 1/2";
    this.nfp = "REGULILE JOCULUI";
    this.nev = "REGULILE|JOCULUI";
    this.ejf = "Bonus!";
    this.dzl = "BONUS";
    this.moe = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.puf = "CREDIT INSUFICIENT.";
    this.byt = "câştigă";
    this.yho = "V A L U E";
    this.of = "DIN";
    this.vca = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.uru = "ÎNCARCĂ ...";
    this.ler = "ÎNCARCĂ ISTORIC ...";
    this.eyx = "Eroare de comunicare";
    this.adt = "Aţi atins una dintre limite!";
    this.lde = "Aţi atins numărul maxim de jocuri gratis!";
    this.bkd = "Jocul se încheie";
    this.jhc = "Jocul se restartează";
    this.bxt = "CÂŞTIGAT";
    this.error = "EROARE";
    this.qfy = "FREEPLAY";
    this.tmu = "AUTO";
    this.ijz = "ID JOC";
    this.pht = "TIMP DE JOC";
    this.bum = "ultimele";
    this.bvo = "jocuri";
    this.yup = "CREDIT";
    this.audio = "AUDIO";
    this.skd = "MUZICĂ";
    this.bsb = "ECRAN COMPLET";
    this.nqh = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.ynq = "Nu reafișați";
    this.xww = "Sunetele nu pot fi încărcate!";
    this.dpw = "Lipsesc resurse!";
    this.dgn = "Jucaţi fără sunet?";
    this.oho = "SETĂRI";
    this.lcx = "Vă rugăm opriţi aparatul!";
    this.kmm = "INFO";
    this.tav = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.agb = "Acest joc este optimizat pentru Google Chrome.";
    this.vrx = "Vă rugăm utilizaţi versiunea actuală";
    this.vew = "Din păcate acest browser nu este sprijinit complet.";
    this.ech = "Acest joc nu poate fi pornit în modul freeplay!";
    this.nsm = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.oxb = "Ajustează interfaţa de joc nevoilor dvs!";
    this.tlw = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.roh = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.ccw = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.sjx = "Statistică";
    this.qzh = "Număr jocuri";
    this.evb = "Pariuri totale";
    this.zhg = "Câştig total";
    this.mah = "Timp total de joc";
    this.jjj = "Am citit mesajul.";
    this.nvx = "ÎNCHEIERE|JOC";
    this.qlo = "ISTORIC";
    this.bmg = "Nu există jocuri.";
    this.state = "STATUT";
    this.nic = "Joc principal";
    this.jkw = "Auto colectare";
    this.faw = "Colectat";
    this.vga = "Bonusspins";
    this.mnh = "Respin";
    this.dlm = "Bonus";
    this.plp = "Primul Deal";
    this.hez = "Al doilea deal";
    this.ovg = "Al treilea deal";
    this.nrp = "SETĂRI AUTOSTART";
    this.oxg = "Numărul jocurilor:";
    this.pen = "Oprire autostart";
    this.pnm = "Credit sub:";
    this.wnj = "Credit peste:";
    this.xgo = "Câștig peste:";
    this.lxr = "Autostart se va opti la începerea bonusului.";
    this.ugy = "Distribuie Facebook";
    this.szj = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.cxz = "Reality Check";
    this.noq = "Ai cerut un Reality Check.";
    this.ahb = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
yhb.prototype = new xjf;

function czg() {
    this.xch = "MÍNIMA APOSTA É";
    this.pxq = "MÁX. APOSTA";
    this.wmo = "MÍN. APOSTA";
    this.qtg = "MÁX. APOSTA";
    this.dub = "APOSTA";
    this.start = "PARTIDA";
    this.ajq = "AJUDA";
    this.dka = "ESQUEMA|DE PAGOS";
    this.voc = "MENU";
    this.tyu = "SELEÇÃO|DE JOGOS";
    this.aka = "PARADA";
    this.blh = "CRÉDITO";
    this.cpo = "FIM DO JOGO";
    this.ugc = "VENCEDOR!";
    this.wsa = "BOA SORTE!";
    this.win = "GANHO";
    this.zdv = "ULTIMO GANHO";
    this.fhv = "COLETAR";
    this.www = "COLETAR";
    this.iqc = "JOGADA";
    this.djz = "AUTO|PARTIDA";
    this.asg = "METADE";
    this.aem = "SAÍDA";
    this.ktc = "PREMIR PARTIDA";
    this.ytg = "SELECIONAR APOSTA";
    this.nna = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.coy = "Ganho total";
    this.fmx = "Aviso";
    this.qbt = "TOTAL";
    this.wkg = "AGUARDE POR FAVOR ...";
    this.xdp = "Seleção de jogos";
    this.zgb = "VELOCIDADE";
    this.mgx = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.cus = "C O N T I N U A R";
    this.csu = "AUTOPARTIDA";
    this.yly = "ESQUEMA DE PAGOS";
    this.ixc = "JOGADA";
    this.left = "ESQUERDA";
    this.tsp = "DIREITA";
    this.ok = "OK";
    this.rgl = "CANCELAR";
    this.nsg = "Jogada";
    this.gcm = "Metade";
    this.nfp = "REGRAS DO JOGO";
    this.nev = "REGRAS|DO JOGO";
    this.ejf = "Bonus!";
    this.dzl = "BONUS";
    this.moe = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.puf = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.byt = "ganha";
    this.yho = "V A L U E";
    this.of = "DE";
    this.vca = "TOCAR NA TELA PARA CONTINUAR";
    this.uru = "CARREGANDO ...";
    this.ler = "CARREGANDO HISTÓRICO ...";
    this.eyx = "Erro de comunicação";
    this.adt = "Alcançou um dos limities!";
    this.lde = "Alcançou a quantidade máxima de jogos livres!";
    this.bkd = "O jogo será encerrado";
    this.jhc = "O jogo será reiniciado";
    this.bxt = "GANHOU";
    this.error = "ERRO";
    this.qfy = "FREEPLAY";
    this.tmu = "AUTO";
    this.ijz = "ID JOGO";
    this.pht = "Playing Time";
    this.bum = "Últimos";
    this.bvo = "jogos";
    this.yup = "DEPOSIT";
    this.audio = "AUDIO";
    this.skd = "MUSIC";
    this.bsb = "TELA CHEIA";
    this.nqh = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.ynq = "Não exibir novamente";
    this.xww = "Sounds não podem ser carregados!";
    this.dpw = "Faltam recursos!";
    this.dgn = "Jogar sem som?";
    this.oho = "AJUSTES";
    this.lcx = "Favor girar o seu aparelho!";
    this.kmm = "INFORMAÇÃO";
    this.tav = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.agb = "Este jogo é otimizado por Google Chrome.";
    this.vrx = "Favor usar a versão atual de";
    this.vew = "Infelizmente este browser não é completamente suportado.";
    this.ech = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.nsm = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.oxb = "Adapte a interface do jogo às suas necessidades!";
    this.tlw = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.roh = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.ccw = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.sjx = "Estatísticas";
    this.qzh = "Número de jogos";
    this.evb = "Aposta total";
    this.zhg = "Ganho total";
    this.mah = "Tempo total do jogo";
    this.jjj = "Eu lí esta mensagem.";
    this.nvx = "ENCERRAR|JOGO";
    this.qlo = "HISTÓRICO";
    this.bmg = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.nic = "Jogo principal";
    this.jkw = "Coletado automaticamente";
    this.faw = "Coletado";
    this.vga = "Bonusspins";
    this.mnh = "Respin";
    this.dlm = "Bonus";
    this.plp = "Primeiro Deal";
    this.hez = "Segundo Deal";
    this.ovg = "Terceiro Deal";
    this.nrp = "AJUSTES AUTOPARTIDA";
    this.oxg = "Número de jogos:";
    this.pen = "Parar autopartida";
    this.pnm = "Crédito menor do que:";
    this.wnj = "Crédito maior do que:";
    this.xgo = "Ganho maior do que:";
    this.lxr = "O autopartida será parado no início do bonus.";
    this.ugy = "Participar no Facebook";
    this.szj = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.cxz = "Reality Check";
    this.noq = "Solicitaste um Reality Check.";
    this.ahb = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
czg.prototype = new xjf;

function hjn() {
    this.xch = "LA MISE MINIMALE EST DE";
    this.pxq = "MISE MAX.";
    this.wmo = "MISE MINI";
    this.qtg = "MISE MAX.";
    this.dub = "MISE";
    this.start = "DEPART";
    this.ajq = "AIDE";
    this.dka = "TABLEAU|DES PAIEMENTS";
    this.voc = "MENU";
    this.tyu = "PLUS|DE JEUX";
    this.aka = "ARRÊTEZ";
    this.blh = "CRÉDIT";
    this.cpo = "FIN DU JEU";
    this.ugc = "GAGNANT!";
    this.wsa = "BONNE CHANCE!";
    this.win = "GAIN";
    this.zdv = "DERNIER GAIN";
    this.fhv = "ENCAISSER";
    this.www = "ENCAISSER";
    this.iqc = "DOUBLER";
    this.djz = "AUTO|LANCER";
    this.asg = "ENCAISSER|MOITIÉ";
    this.aem = "SORTIE";
    this.ktc = "APPUYEZ SUR START";
    this.ytg = "CHOISIR LA MISE";
    this.nna = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.coy = "Gain total";
    this.fmx = "Avertissement";
    this.qbt = "TOTALE";
    this.wkg = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.xdp = "Plus de jeux";
    this.zgb = "VITESSE";
    this.mgx = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.cus = "C O N T I N U E R";
    this.csu = "AUTO LANCER";
    this.yly = "TABLEAU DES PAIEMENTS";
    this.ixc = "DOUBLER";
    this.left = "GAUCHE";
    this.tsp = "DROITE";
    this.ok = "OK";
    this.rgl = "ANNULER";
    this.nsg = "Doubler";
    this.gcm = "Encaisser moitié";
    this.nfp = "RÈGLES DU JEU";
    this.nev = "RÈGLES DU JEU";
    this.ejf = "Bonus!";
    this.dzl = "BONUS";
    this.moe = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.puf = "PAS ASSEZ DE CRÉDIT";
    this.byt = "gagne";
    this.yho = "V A L U E";
    this.of = "SUR";
    this.vca = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.uru = "CHARGEMENT EN COURS ...";
    this.ler = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.eyx = "Erreur de communication";
    this.adt = "Vous avez atteint une des limites!";
    this.lde = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.bkd = "Le jeu sera terminé";
    this.jhc = "Le jeu sera démarré de nouveau";
    this.bxt = "GAGNÉ";
    this.error = "ERREUR";
    this.qfy = "JEU GRATUIT";
    this.tmu = "AUTO";
    this.ijz = "ID DU JEU";
    this.pht = "TEMPS DE JEU";
    this.bum = "Les";
    this.bvo = "derniers jeux";
    this.yup = "AVOIR";
    this.audio = "AUDIO";
    this.skd = "MUSIQUE";
    this.bsb = "PLEIN ÉCRAN";
    this.nqh = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.ynq = "Ne pas afficher encore une fois";
    this.xww = "Impossible de charger des sounds!";
    this.dpw = "Manque de ressources!";
    this.dgn = "Jouer sans son?";
    this.oho = "CONFIGUR.";
    this.lcx = "Merci de tourner votre matériel!";
    this.kmm = "INFO";
    this.tav = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.agb = "Ce jeu est optimisé pour Google Chrome.";
    this.vrx = "Veuilllez utiliser la version à jour de";
    this.vew = "Malheureusement, ce browser n'est intégralement supporté.";
    this.ech = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.nsm = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.oxb = "Adapte l'interface de jeu à tes besoins!";
    this.tlw = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.roh = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.ccw = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.sjx = "Statistiques";
    this.qzh = "Nombre des jeux";
    this.evb = "Total des mises";
    this.zhg = "Gain total";
    this.mah = "Temps total du jeu";
    this.jjj = "J'ai lu le message";
    this.nvx = "TERMINER|LE JEU";
    this.qlo = "Historique";
    this.bmg = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.nic = "Jeu principal";
    this.jkw = "Pris automatiquement";
    this.faw = "Pris";
    this.vga = "Bonusspins";
    this.mnh = "Respin";
    this.dlm = "Bonus";
    this.plp = "Premier Deal";
    this.hez = "Deuxième Deal";
    this.ovg = "Troisième Deal";
    this.nrp = "AUTOSTART CONFIGURATION";
    this.oxg = "Nombre des jeux:";
    this.pen = "Arrêter autostart";
    this.pnm = "Crédit inférieur à:";
    this.wnj = "Crédit supérieur à:";
    this.xgo = "Gain supérieur à:";
    this.lxr = "L'autostart est arrêté au début du bonus.";
    this.ugy = "Partager sur Facebook";
    this.szj = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.cxz = "Reality Check";
    this.noq = "Tu as demandé un Reality Check.";
    this.ahb = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
hjn.prototype = new xjf;

function mde() {
    this.xch = "NAJMANJI ULOG JE";
    this.pxq = "MAX ULOG";
    this.wmo = "MIN. ULOG";
    this.qtg = "MAKS. ULOG";
    this.dub = "ULOG";
    this.start = "START";
    this.ajq = "POMOĆ";
    this.dka = "LISTA DOBITAKA";
    this.voc = "IZBORNIK";
    this.tyu = "VIŠE|IGARA";
    this.aka = "STOP";
    this.blh = "KREDIT";
    this.cpo = "KRAJ IGRE";
    this.ugc = "DOBITAK!";
    this.wsa = "SRETNO!";
    this.win = "DOBITAK";
    this.zdv = "ZADNJI DOBITAK";
    this.fhv = "UPIŠI";
    this.www = "UPIŠI";
    this.iqc = "DUPLANJE";
    this.djz = "AUTO|START";
    this.asg = "UZMI|1/2";
    this.aem = "IZLAZ";
    this.ktc = "PRETISNITE START";
    this.ytg = "BIRAJTE ULOG";
    this.nna = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.coy = "Ukubni dobitci";
    this.fmx = "Upozorenje";
    this.qbt = "UKUBNI";
    this.wkg = "MOLIMO PRIČEKAJTE ...";
    this.xdp = "Više igara";
    this.zgb = "BRZINA";
    this.mgx = "Kod kvara na uređaju nema jamstva.";
    this.cus = "D A L J E";
    this.csu = "AUTOSTART";
    this.yly = "LISTA DOBITAKA";
    this.ixc = "DUPLANJE";
    this.left = "LIJEVA";
    this.tsp = "DESNA";
    this.ok = "OK";
    this.rgl = "PREKID";
    this.nsg = "Duplanje";
    this.gcm = "Uzmi 1/2";
    this.nfp = "PRAVILA IGRE";
    this.nev = "PRAVILA IGRE";
    this.ejf = "Bonus!";
    this.dzl = "BONUS";
    this.moe = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.puf = "NEMATE DOVOLJNO KREDITA.";
    this.byt = "dobici";
    this.yho = "V A L U E";
    this.of = "OD";
    this.vca = "ZA NASTAVAK DODIRNITE ZASLON";
    this.uru = "UČITAVANJA ...";
    this.ler = "POVIJEST UČITAVANJA ...";
    this.eyx = "Komunikacijska pogreška";
    this.adt = "Dostigli ste jednu od graničnih vrijednosti!";
    this.lde = "Dostigli ste maksimum besplatnih igara!";
    this.bkd = "Igra se zatvara";
    this.jhc = "Igra se iznova učitava";
    this.bxt = "OSVOJENO";
    this.error = "POGREŠKA";
    this.qfy = "FREEPLAY";
    this.tmu = "AUTO";
    this.ijz = "ID IGRE";
    this.pht = "Vrijeme igre";
    this.bum = "posljednjih";
    this.bvo = "igara";
    this.yup = "DEPOZIT";
    this.audio = "ZVUKA";
    this.skd = "GLAZBA";
    this.bsb = "PUN ZASLON";
    this.nqh = "PUN ZASLON";
    this.language = "JEZIKA";
    this.ynq = "Ne prikazuj ponovo";
    this.xww = "Zvukovi se ne mogu učitati!";
    this.dpw = "Nedostaju resursi!";
    this.dgn = "Želite li igrati uz zvuk?";
    this.oho = "POSTAVKE";
    this.lcx = "Uključite svoj uređaj!";
    this.kmm = "INFORMACIJE";
    this.tav = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.agb = "Ova igra je optimizirana za Google Chrome.";
    this.vrx = "Molimo koristite se trenutnom inačicom";
    this.vew = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.ech = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.nsm = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.oxb = "Prilagodite sučelje igre svojim potrebama!";
    this.tlw = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.roh = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.ccw = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.sjx = "Statistike";
    this.qzh = "Ukupno igara";
    this.evb = "Ukupni ulog";
    this.zhg = "Ukupno dobitaka";
    this.mah = "Ukupno vrijeme igre";
    this.jjj = "Pročitao sam ovu poruku";
    this.nvx = "IZLAZ|IZ IGRE";
    this.qlo = "Povijest";
    this.bmg = "Nema odigranih igara.";
    this.state = "STANJE";
    this.nic = "Glavna igra";
    this.jkw = "Auto. pokupljeno";
    this.faw = "Pokupljeno";
    this.vga = "Besplatne igre";
    this.mnh = "Dodatne okretaje";
    this.dlm = "Bonus";
    this.plp = "Prvo dijeljenje";
    this.hez = "Drugo dijeljenje";
    this.ovg = "Treće dijeljenje";
    this.nrp = "POSTAVKE AUTOMATSKE IGRE";
    this.oxg = "Ukupno igara:";
    this.pen = "Zaustavljanje automatske igre";
    this.pnm = "Kredit manji od:";
    this.wnj = "Kredit veći od:";
    this.xgo = "Dobitak veći od:";
    this.lxr = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.ugy = "Podijeli na Facebooku";
    this.szj = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.cxz = "Reality Check";
    this.noq = "Zatražili ste Reality Check.";
    this.ahb = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
mde.prototype = new xjf;

function hmk() {
    this.xch = "MINIMA PUNTATA È";
    this.pxq = "PUNTATA MASSIMA";
    this.wmo = "MIN. PUNTATA";
    this.qtg = "MASS. PUNTATA";
    this.dub = "PUNTATA";
    this.start = "START";
    this.ajq = "AIUTO";
    this.dka = "TABELLA VINCITE";
    this.voc = "MENU";
    this.tyu = "SCELTA|GIOCHI";
    this.aka = "STOP";
    this.blh = "CREDITO";
    this.cpo = "FINE PARTITA";
    this.ugc = "VINCITORE!";
    this.wsa = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.zdv = "ULTIMA VINCITA";
    this.fhv = "INCASSA";
    this.www = "INCASSA";
    this.iqc = "GAMBLE";
    this.djz = "AUTO|START";
    this.asg = "METÀ";
    this.aem = "FINE";
    this.ktc = "PREMI START";
    this.ytg = "SCEGLI PUNTATA";
    this.nna = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.coy = "Totale vincita";
    this.fmx = "Attenzione";
    this.qbt = "TOTALE";
    this.wkg = "ATTENDERE PREGO ...";
    this.xdp = "Scelta Giochi";
    this.zgb = "VELOCITÀ";
    this.mgx = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.cus = "C O N T I N U A";
    this.csu = "AUTOSTART";
    this.yly = "TABELLA VINCITE";
    this.ixc = "GAMBLE";
    this.left = "SINISTRA";
    this.tsp = "DESTRA";
    this.ok = "OK";
    this.rgl = "CANCELLA";
    this.nsg = "Gamble";
    this.gcm = "Metà";
    this.nfp = "REGOLAMENTO";
    this.nev = "REGOLAMENTO";
    this.ejf = "Bonus!";
    this.dzl = "BONUS";
    this.moe = "PREMI UN TASTO PER CONTINUARE";
    this.puf = "CREDITO INSUFFICIENTE!";
    this.byt = "vince";
    this.yho = "V A L U E";
    this.of = "DI";
    this.vca = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.uru = "STA CARICANDO ...";
    this.ler = "STA CARICANDO LA CRONACA ...";
    this.eyx = "Errore di comunicazione";
    this.adt = "Hai raggiunto uno dei limiti!";
    this.lde = "Hai raggiunto il numero massimo di free games!";
    this.bkd = "La partita sta terminando";
    this.jhc = "La partita sta ripartendo";
    this.bxt = "VINTO";
    this.error = "ERRORE";
    this.qfy = "FREEPLAY";
    this.tmu = "AUTO";
    this.ijz = "GAME ID";
    this.pht = "Durata del gioco";
    this.bum = "Ultime partite";
    this.bvo = "";
    this.yup = "DEPOSITO";
    this.audio = "AUDIO";
    this.skd = "MUSICA";
    this.bsb = "SCHERMO INTERO";
    this.nqh = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.ynq = "Non mostrare di nuovo";
    this.xww = "Suoni non caricabili!";
    this.dpw = "Mancano risorse!";
    this.dgn = "Giocare senza suoni?";
    this.oho = "SETTAGGI";
    this.lcx = "Prego girare l'apparecchio!";
    this.kmm = "INFO";
    this.tav = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.agb = "La partita è ottimizzata per Google Chrome.";
    this.vrx = "Prego utilizzare la versione attuale di";
    this.vew = "Purtroppo il presente browser non viene supportato interamente";
    this.ech = "Impossibile avviare questa partita nel modo freeplay!";
    this.nsm = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.oxb = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.tlw = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.roh = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.ccw = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.sjx = "Statistica";
    this.qzh = "Totale partite";
    this.evb = "Totale puntata";
    this.zhg = "Totale vincita";
    this.mah = "Totale durata del gioco";
    this.jjj = "Ho letto il messaggio";
    this.nvx = "TERMINARE|LA PARTITA";
    this.qlo = "Cronaca";
    this.bmg = "Nessuna partita giocata.";
    this.state = "STATO";
    this.nic = "Partita principale";
    this.jkw = "Raccolto autom.";
    this.faw = "Raccolto";
    this.vga = "Bonusspin";
    this.mnh = "Respin";
    this.dlm = "Bonus";
    this.plp = "Primo deal";
    this.hez = "Secondo deal";
    this.ovg = "Terzo deal";
    this.nrp = "SETTAGGI AUTOSTART";
    this.oxg = "Numero di partite:";
    this.pen = "Fermare l'autostart";
    this.pnm = "Credito più basso di:";
    this.wnj = "Credito più alto di:";
    this.xgo = "Vincita più alta di:";
    this.lxr = "L'autostart si ferma all'inizio del bonus.";
    this.ugy = "Dividi su facebook";
    this.szj = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.cxz = "Reality Check";
    this.noq = "Avete richiesto un Reality Check.";
    this.ahb = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.mnl = "Game break";
    this.nml = "Game limits";
    this.san = "Self test";
    this.psr = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
hmk.prototype = new xjf;

function qub() {
    this.xch = "MIN. INSATSEN ÄR";
    this.pxq = "MAXIMAL INSATS";
    this.wmo = "MIN. INSATS";
    this.qtg = "MAX. INSATS";
    this.dub = "INSATS";
    this.start = "STARTA";
    this.ajq = "HJÄLP";
    this.dka = "VINSTTABELL";
    this.voc = "MENY";
    this.tyu = "FLER|SPEL";
    this.aka = "STOPP";
    this.blh = "KREDIT";
    this.cpo = "SPELET ÄR SLUT";
    this.ugc = "VINNARE!";
    this.wsa = "LYCKA TILL!";
    this.win = "VINN";
    this.zdv = "SENASTE VINSTEN";
    this.fhv = "INKASSERA";
    this.www = "INKASSERA";
    this.iqc = "DUBBLERA";
    this.djz = "AUTO|START";
    this.asg = "HÄLFTEN|1/2";
    this.aem = "AVSLUTA";
    this.ktc = "TRYCK PÅ START";
    this.ytg = "VÄLJ INSATS";
    this.nna = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.coy = "Total Vinst";
    this.fmx = "Varning";
    this.qbt = "TOTALT";
    this.wkg = "VAR VÄNLIG VÄNTA ...";
    this.xdp = "Fler spel";
    this.zgb = "TEMPO";
    this.mgx = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.cus = "F O R T S Ä T T";
    this.csu = "AUTOSTART";
    this.yly = "VINSTTABELL";
    this.ixc = "DUBBLERA";
    this.left = "VÄNSTER";
    this.tsp = "HÖGER";
    this.ok = "OK";
    this.rgl = "AVBRYT";
    this.nsg = "Dubblering";
    this.gcm = "Hälften";
    this.nfp = "SPELREGLER";
    this.nev = "SPELREGLER";
    this.ejf = "Bonus!";
    this.dzl = "BONUS";
    this.moe = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.puf = "FÖR LÅGT SALDO!";
    this.byt = "vinster";
    this.yho = "V A L U E";
    this.of = "AV";
    this.vca = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.uru = "LÄSER ...";
    this.ler = "LÄSER IN HISTORIKEN ...";
    this.eyx = "Kommunikationsfel";
    this.adt = "Du har nått en av gränserna!";
    this.lde = "Du har nått det maximala antalet gratisspel!";
    this.bkd = "Spelet avslutas";
    this.jhc = "Spelet startas om";
    this.bxt = "VUNNA";
    this.error = "FEL";
    this.qfy = "GRATISSPEL";
    this.tmu = "AUTO";
    this.ijz = "SPEL-ID";
    this.pht = "SPELTID";
    this.bum = "senaste";
    this.bvo = "spelen";
    this.yup = "INSÄTTNING";
    this.audio = "LJUD";
    this.skd = "MUSIK";
    this.bsb = "HELSKÄRM";
    this.nqh = "HELSKÄRM";
    this.language = "SPRÅK";
    this.ynq = "Visa inte igen";
    this.xww = "Ljud kan inte laddas!";
    this.dpw = "Resurser saknas!";
    this.dgn = "Spela utan ljud?";
    this.oho = "INSTÄLLN.";
    this.lcx = "Vänd din enhet!";
    this.kmm = "INFO";
    this.tav = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.agb = "Det här spelet är optimerat för Google Chrome.";
    this.vrx = "Använd den senaste versionen av";
    this.vew = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.ech = "Det här spelet kan inte startas i gratisspelsläget!";
    this.nsm = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.oxb = "Anpassa spelgränssnittet efter dina behov!";
    this.tlw = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.roh = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.ccw = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.sjx = "Statistik";
    this.qzh = "Totalt antal spel";
    this.evb = "Totalinsats";
    this.zhg = "Totalvinst";
    this.mah = "Total speltid";
    this.jjj = "Jag har läst detta meddelande";
    this.nvx = "AVSLUTA|SPELET";
    this.qlo = "Historik";
    this.bmg = "Inga spel har spelats.";
    this.state = "STATUS";
    this.nic = "Huvudspel";
    this.jkw = "Auto. Inkasserat";
    this.faw = "Inkasserat";
    this.vga = "Bonusspinn";
    this.mnh = "Respin";
    this.dlm = "Bonus";
    this.plp = "Första given";
    this.hez = "Andra given";
    this.ovg = "Tredje given";
    this.nrp = "AUTOSTARTINSTÄLLNINGAR";
    this.oxg = "Antal spelrundor:";
    this.pen = "Stoppa autospel";
    this.pnm = "Saldo lägre än:";
    this.wnj = "Saldo högre än:";
    this.xgo = "Vinst högre än:";
    this.lxr = "Autospelen kommer att stoppas då bonusen startar.";
    this.ugy = "Dela på Facebook";
    this.szj = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.cxz = "Reality Check";
    this.noq = "Du har begärt att få en statusuppdatering.";
    this.ahb = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.mnl = "Spelpaus";
    this.nml = "Spelgränser";
    this.san = "Självtest";
    this.psr = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
qub.prototype = new xjf;

function spl() {
    this.cpa = "LINES";
    this.kqi = "LINE";
    this.yzf = "BET / LINE";
    this.ufo = "WAYS";
    this.fez = "WAY";
    this.lwe = "BONUSSPINS LEFT";
    this.anq = "TOTAL BONUSSPINS";
    this.kuq = "BONUSSPINS PLAYED";
    this.sri = "BONUSSPINS LEFT";
    this.vlf = "CONGRATULATIONS YOU WIN!";
    this.ofu = "BONUS WIN";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SYMBOLS";
    this.who = "SYMBOL";
    this.whn = "You win extra BONUSSPINS!";
    this.hpm = "Wins pay only from left to right!";
    this.aow = "BONUS ENTRY WIN:";
    this.fsc = "BONUSSPINS";
    this.bte = "BONUSSPINS are played with the same bet and number of lines as the initiating game.";
    this.ewc = "Line Wins: Only the highest line win is paid on each line played. Line wins are a multiple of the line bet. Line wins from different lines are added.";
    this.tac = "Scatter Wins: Scatter wins are a multiple of the total bet. Wins from Scatter symbols are added to the line wins.";
    this.tjg = "BONUS HELP";
    this.foy = "SYMBOL HELP";
    this.gcc = "WINLINE HELP";
    this.bvr = "WINWAY HELP";
    this.yxs = "You win an extra 15 BONUSSPINS!";
    this.efn = "Play the Bonus until you have no BONUSSPINS left. BONUSSPINS can be re-triggered during the Bonus.";
    this.qvk = "GAMBLE AMOUNT";
    this.kpb = "RED/BLACK GAMBLE TO WIN";
    this.kcu = "SUIT GAMBLE TO WIN";
    this.lab = "15 BONUSSPINS are won with 3, 4 or 5 SCATTERED Symbols on any position! All BONUSSPIN wins are multiplied by 3.";
    this.cjn = "Finish placing your bets!";
    this.trm = "Place your bets please!";
    this.kpz = "No more bets!";
    this.lte = "Good Luck!";
    this.hmb = "Better luck next time!";
    this.ycy = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.nhq = "Bets accepted!";
    this.wkk = "Bets not accepted!";
    this.yva = "Game in progress, please wait!";
    this.lqy = "WIN UP TO";
    this.cyl = "WIN HISTORY";
    this.cko = "BONUS END";
    this.gpp = "Bonus Multiplier";
    this.bzz = "Freespins!";
    this.uxw = "FREESPINS PLAYED";
    this.nry = "FREESPIN WIN";
    this.nkv = "CONGRATULATION!";
    this.kwf = "Congratulation, you get";
    this.lhk = "You have";
    this.scc = "freespins remaining!"
}
spl.prototype = new jaf;

function jlk() {
    this.cpa = "ЛИНИИ";
    this.kqi = "ЛИНИЯ";
    this.yzf = "СТ. / ЛИНИЮ";
    this.lwe = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.anq = "Бонусные вращения";
    this.kuq = "СЫГРАННО ВРАЩЕНИЙ";
    this.sri = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.vlf = "ПОЗДРАВЛЯЕМ! ВЫ ВЫИГРАЛИ!";
    this.ofu = "БОНУС ВЫИГРЫШ";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "СИМВОЛЫ";
    this.who = "СИМВОЛ";
    this.fsc = "призовых вращений";
    this.hpm = "Все выигрыши считаются только слевa направо.";
    this.whn = "Вы выиграли дополнительные бонусные вращения!";
    this.bte = "Ставка и количество линий в игре бонусные вращения те же самые, что и в инициировавшей игре.";
    this.ewc = "Линейные выигрыши: Засчитывается только максимальный выигрыш на каждой линии. Размер линейных выигрышей – многократная сумма ставки. Линейные выигрыши на разных линиях суммируются.";
    this.tac = "Выигрыши Scatter Сумма выигрышей Scatter – многократная сумма общей ставки. Выигрыши с символами Scatter прибавляются к линейным выигрышам.";
    this.ufo = "ПУТИ";
    this.fez = "ПУТЬ";
    this.tjg = "БОНУС – ПОМОЩЬ";
    this.foy = "СИМВОЛ ПОМОЩЬ";
    this.gcc = "ЛИНИИ ВЫИГРЫША ПОМОЩЬ";
    this.bvr = "ПОМОЩЬ К ПУТИ К ВЫИГРЫШУ";
    this.ycy = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА";
    this.qvk = "СУММА РИСКА";
    this.kpb = "РИСКНУТЬ КРАСНАЯ/ЧЕРНАЯ";
    this.kcu = "ВЫБОР МАСТИ";
    this.lqy = "ВЫИГРАЙ ДО";
    this.cyl = "ХРОНИКА ВЫИГРЫШЕЙ";
    this.cko = "КОНЕЦ БОНУСА";
    this.bzz = "бесплатных игр!";
    this.uxw = "СЫГРАННЫЕ БЕСПЛАТНЫЕ ИГРЫ";
    this.nry = "ВЫИГРЫШ БЕСПЛАТНОЙ ИГРЫ";
    this.nkv = "ПОЗДРАВЛЯЕМ!";
    this.kwf = "Поздравляем, вы получили";
    this.lhk = "У вас еще";
    this.scc = "бесплатных игр!";
    this.nhq = "Ставки признаны!";
    this.wkk = "Ставки не признаны!";
    this.yva = "Игра в процессе, пожалуйста, подождите...";
    this.cjn = "Игра сейчас начнется!";
    this.trm = "Сделайте ставку, пожалуйста!";
    this.kpz = "Ставок больше нет!";
    this.lte = "Удачи!";
    this.hmb = "Желаем удачи в следующий раз!";
    this.yxs = "Вы выиграли следующие 15 призовых вращений барабанов!";
    this.efn = "Бонус призовых вращений заканчивается когда призовых вращений больше нет. Дополнительные призовые вращения могут быть добавлены к Бонусу призовых вращений.";
    this.lab = "Вы получите 15 призовых вращений барабанов при выпадении 3, 4 или 5 символов СКАТТЕР на любой позиции. Все выигрыши умножаются на 3."
}
jlk.prototype = new cdv;

function xvy() {
    this.cpa = "LÍNEAS";
    this.kqi = "LÍNEA";
    this.yzf = "APUE. / LÍNEA";
    this.lwe = "BONUSSPINS RESTANTES";
    this.anq = "TOTAL DE BONUSSPINS";
    this.kuq = "BONUSSPINS JUGADOS";
    this.sri = "BONUSSPINS RESTANTES";
    this.vlf = "ENHORABUENA, HAS GANADO!";
    this.ofu = "PREMIO BONUS";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SIMBOLOS";
    this.who = "SIMBOLO";
    this.gpp = "Multiplicador de bonus";
    this.aow = "PREMIO ENTRADA BONUS:";
    this.fsc = "JUEGOS LIBRES";
    this.hpm = "Premios de la izquierda a la derecha!";
    this.whn = "Ha ganado BONUSSPINS extra.";
    this.bte = "Los BONUSSPINS se juegan con la misma apuesta y el número de lineas que el juego inicial.";
    this.ewc = "Premios de línea: Sólo se paga el mayor premio de línea por cada línea jugada. Los premios de línea son un múltiplo de la apuesta de la línea. Se suman los premios de línea de las diferentes líneas.";
    this.tac = "Premios Scatter: Los premios Scatter son múltiplos de la apuesta total. Los premios de los símbolos scatter se suman a los premios de la línea.";
    this.ufo = "CAMINOS";
    this.fez = "CAMINO";
    this.tjg = "AYUDA DE BONUS";
    this.foy = "SÍMBOLO AYUDA";
    this.gcc = "LÍNEA GANADORA AYUDA";
    this.bvr = "AYUDA FORMAS DE PREMIO";
    this.ycy = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.qvk = "PREMIO";
    this.kpb = "ROJO/NEGRO PREMIO";
    this.kcu = "PREMIO DE SIMBOLO";
    this.lqy = "GANANCIAS HASTA";
    this.cyl = "HISTORIAL DE GANANCIAS";
    this.cko = "FIN DE BONUS";
    this.bzz = "Giros gratis!";
    this.uxw = "GIROS GRATIS JUGADOS";
    this.nry = "PREMIO GIRO GRATIS";
    this.nkv = "¡ENHORABUENA!";
    this.kwf = "¡Enhorabuena, ha conseguido";
    this.lhk = "¡Le quedan";
    this.scc = "giros gratis!";
    this.nhq = "Aceptar apuestas!";
    this.wkk = "Apuestas rechazadas!";
    this.yva = "El juego no ha concluido, por favor espere!";
    this.cjn = "El juega va a comenzar!";
    this.trm = "Haga juego!";
    this.kpz = "No más apuestas!";
    this.lte = "¡Mucha suerte!";
    this.hmb = "¡Mejor suerte la próxima vez!";
    this.yxs = "Premio de 15 Freespins addicionales!";
    this.efn = "El bono concluye cuando todos los BONUSSPINS se hayan jugado. En bono pueden ganarse BONUSSPINS adicionales.";
    this.lab = "Se gana 15 Freespins con 3, 4 o 5 simbolos de SCATTER en alguna posicion! Se triplican todos los premios de freespins."
}
xvy.prototype = new qjy;

function itp() {
    this.cpa = "LINIEN";
    this.kqi = "LINIE";
    this.yzf = "EINS. / LINIE";
    this.lwe = "VERBLEIBENDE BONUSSPINS";
    this.anq = "TOTAL BONUSSPINS";
    this.kuq = "GESPIELTE BONUSSPINS";
    this.sri = "VERBLEIBENDE BONUSSPINS";
    this.vlf = "GRATULIERE GEWONNEN!";
    this.ofu = "BONUS GEWINN";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SYMBOLE";
    this.who = "SYMBOL";
    this.gpp = "Bonus Multiplikator";
    this.aow = "BONUS START GEWINN:";
    this.fsc = "BONUSSPINS";
    this.hpm = "Gewinne werden nur von links nach rechts gewertet!";
    this.whn = "Zusätzliche BONUSSPINS gewonnen!";
    this.bte = "Die BONUSSPINS werden mit demselben Einsatz und Linienanzahl wie das auslösende Spiel gespielt.";
    this.ewc = "Liniengewinne: Nur der höchste Liniengewinn je gespielter Linie zählt. Liniengewinne sind ein Vielfaches des Linieneinsatzes. Die Liniengewinne von verschiedenen Linien werden addiert.";
    this.tac = "Scattergewinne: Scatter-Gewinne sind ein Vielfaches des Gesamteinsatzes. Gewinne aus Scatter-Symbolen werden den Liniengewinnen hinzugezählt.";
    this.ufo = "WEGE";
    this.fez = "WEG";
    this.tjg = "BONUS HILFE";
    this.foy = "SYMBOL HILFE";
    this.gcc = "GEWINNLINIEN HILFE";
    this.bvr = "GEWINNWEGE HILFE";
    this.ycy = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.qvk = "RISIKO";
    this.kpb = "ROT/SCHWARZ CHANCE";
    this.kcu = "SYMBOL CHANCE";
    this.lqy = "GEWINNE BIS ZU";
    this.cyl = "GEWINNHISTORIE";
    this.cko = "BONUS ENDE";
    this.bzz = "Freespins!";
    this.uxw = "GESPIELTE FREESPINS";
    this.nry = "FREESPIN GEWINN";
    this.nkv = "GRATULIERE!";
    this.kwf = "Gratulation, Sie bekommen";
    this.lhk = "Sie haben noch";
    this.scc = "Freespins übrig!";
    this.nhq = "Einsätze akzeptiert!";
    this.wkk = "Einsätze nicht akzeptiert!";
    this.yva = "Spiel läuft, bitte warten!";
    this.cjn = "Das Spiel beginnt gleich!";
    this.trm = "Ihre Einsätze bitte!";
    this.kpz = "Keine weiteren Einsätze!";
    this.lte = "Viel Glück!";
    this.hmb = "Mehr Glück beim nächsten Mal!";
    this.yxs = "Weitere 15 BONUSSPINS gewonnen!";
    this.efn = "Der Bonus endet, wenn alle BONUSSPINS abgespielt worden sind. Zusätzliche BONUSSPINS können im Bonus gewonnen werden.";
    this.lab = "15 BONUSSPINS werden durch 3, 4 oder 5 SCATTER Symbole auf jeder Position gewonnen! Alle BONUSSPIN Gewinne x 3."
}
itp.prototype = new wiv;

function tfe() {
    this.cpa = "ÇIZGILER";
    this.kqi = "ÇİZGİ";
    this.yzf = "BANKO / ÇIZGI";
    this.lwe = "KALAN PRIM OYUNLARIR";
    this.anq = "TOPLAM PRİM SPİNLERİ";
    this.kuq = "OYNANAN PRIM OYUNLAR";
    this.sri = "KALAN PRIM OYUNLARIR";
    this.vlf = "TEBRİKLER KAZANDINIZ!";
    this.ofu = "PRIM KAZANCI";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SEMBOLLER";
    this.who = "SEMBOL";
    this.gpp = "Prim çarpanı";
    this.aow = "PRİM GİRİŞ KAZANCI:";
    this.fsc = "BEDAVA OYUNLAR";
    this.hpm = "Kazançlar tek soldan sağa değerlendirilir!";
    this.whn = "Ek PRİM SPİN’LERİ kazandınız!";
    this.bte = "PRİM SPİNLER başlayacak olan oyunda da aynı banko ve çizgi sayısı ile oynanacaktır.";
    this.ewc = "Çizgi kazançları: Oynanan her çizginin sadece en yüksek çizgi kazancı sayılmaktadır. Çizgi kazançları çizgi bankosunun kat sayısından oluşmaktadır. Çeşitli çizgilerin çizgi kazançları birbirleri ile toplanmaktadır.";
    this.tac = "Scatter kazançları: Scatter-kazançları toplam bankonun kat sayısından oluşmaktadır. Scatter-Sembollerinden elde edilen kazançlar çizgi kazançlarına eklenmektedir.";
    this.ufo = "YOLLAR";
    this.fez = "YOL";
    this.tjg = "PRİM YARDIMI";
    this.foy = "SEMBOL YARDIMI";
    this.gcc = "KAZANÇ ÇIZGISI YARDIMI";
    this.bvr = "KAZANÇ YOLLARI YARDIM";
    this.ycy = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.qvk = "RİSK";
    this.kpb = "KIRMIZI/SİYAH ŞANSI";
    this.kcu = "SEMBOL ŞANSI";
    this.lqy = "KAZANANILMASI MÜMKÜN OLAN";
    this.cyl = "KAZANÇ GEÇMİŞİ";
    this.cko = "PRİM BİTTİ";
    this.bzz = "adet bedava Spin kazandınız!";
    this.uxw = "OYNANILAN BEDAVA SPİN'ler";
    this.nry = "BEDAVA SPİN KAZANCI";
    this.nkv = "TEBRİKLER!";
    this.kwf = "Tebrikler,";
    this.lhk = "Daha";
    this.scc = "adet bedava SPİN'iniz bulunuyor!";
    this.lte = "Bol şans!";
    this.nhq = "Bahisler kabul edildi!";
    this.wkk = "Bahisler kabul edilmedi!";
    this.yva = "Oyun oynanmakta, lütfen bekleyin!";
    this.cjn = "Oyun başlamak üzere!";
    this.trm = "Bankolarınız lütfen!";
    this.kpz = "Daha fazla banko mümkün değil!";
    this.hmb = "Bir dahaki sefer daha şanslı olursun!";
    this.yxs = "15 bedava oyun daha kazandın!";
    this.efn = "Bedava oyun primleri tüm bedava oyunlar oynandığı zaman biter. Bedava oyun primlerinde ek bedava oyunlar kazanılabilir.";
    this.lab = "Her pozisyondaki 3, 4 veya 5 SCATTERED sembolleri ile 15 tane bedava oyun kazanılır! Tüm bedava oyun kazançları x 3."
}
tfe.prototype = new xgj;

function sml() {
    this.cpa = "LINEK";
    this.kqi = "LINKA";
    this.yzf = "SÁZKA / LINKA";
    this.lwe = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.anq = "TOTÁLNÍ BONUSSPINS";
    this.kuq = "ODEHRANÉ BONUS HRY";
    this.sri = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.vlf = "GRATULUJEME VYHRÁL JSTE!";
    this.ofu = "BONUS VÝHRA";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SYMBOLY";
    this.who = "SYMBOL";
    this.gpp = "Násobic bonusu";
    this.aow = "BONUS STARTUJE VÝHRU:";
    this.fsc = "BONUSSPINS";
    this.hpm = "Výhry platí pouze z leva do prava!";
    this.whn = "Vyhrál jste extra BONUSOVOU hru!";
    this.bte = "BONUSSPINS sa hrají se stejnou  sázkou a počtem línií jako hra, při které se spustily.";
    this.ewc = "Výhry na línkách: Započítává se jen nejvyšší výhra na lince. Výhry na linkách jsou násobky linkových sázek. Výhry na různých línkách se sčítají.";
    this.tac = "Scatter výhry: Scatter výhry násobí celkovou sázku. Výhry ze Scatter symbolů se připočítávají k výhrám na línkách.";
    this.ufo = "ZPŮSOBY";
    this.fez = "ZPŮSOB";
    this.tjg = "BONUS NÁPOVĚDA";
    this.foy = "SYMBOL NÁPOVĚDA";
    this.gcc = "VÝHERNÉ LINIE NÁPOVĚDA";
    this.bvr = "WINWAY HELP";
    this.ycy = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.qvk = "VÝHRA";
    this.kpb = "CERVENÁ/CERNÁ VÝHRA";
    this.kcu = "SPRÁVNÁ BARVA KARTY VYHRÁVÁ";
    this.nhq = "Sázky byly akceptovány!";
    this.wkk = "Sázky nebyly akceptovány!";
    this.lqy = "VÝHRA AŽ";
    this.cyl = "HISTORIE VÝHER";
    this.cko = "KONEC BONUSU";
    this.bzz = "Freespins!";
    this.uxw = "FREESPINS PLAYED";
    this.nry = "FREESPIN WIN";
    this.nkv = "GRATULUJEME!";
    this.kwf = "Congratulation, you get";
    this.lhk = "You have";
    this.scc = "freespins remaining!";
    this.yva = "Hra probíhá, počkejte prosím!";
    this.cjn = "Hra Se Hned Spustí!";
    this.trm = "Vaše sázky prosím!";
    this.kpz = "Žádné další sázky.";
    this.lte = "Hodne štestí!";
    this.hmb = "Příště více štěstí!";
    this.yxs = "Vyhráváte dalších 15 volných her!";
    this.efn = "Bonus je ukoncen po odehrání všech bonusových her. Bonusové hry mohou být získány i behem bonusu.";
    this.lab = "3, 4 nebo 5 SCATTER symbolu na libovolné pozici vyhrává 15 volných her, výhry ve volné hre jsou násobené 3x."
}
sml.prototype = new rxu;

function cvc() {
    this.cpa = "LIINID";
    this.kqi = "LIIN";
    this.yzf = "PAN. / LIINIL";
    this.lwe = "TASUTA KEERUTUSI JÄÄNUD";
    this.anq = "BOONUSKEERUTUSI KOKKU";
    this.kuq = "MÄNGE MÄNGITUD";
    this.sri = "TASUTA KEERUTUSI JÄÄNUD";
    this.vlf = "PALJU ÕNNE, SA VÕITSID!";
    this.ofu = "BOONUSVÕIT";
    this.fsc = "BOONUSKEERUTUST";
    this.qvk = "RISKIMÄNGU SUMMA";
    this.kpb = "PUNANE/MUST RISKIMÄNG";
    this.kcu = "RISKIMÄNG SÜMBOLIGA";
    this.ycy = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.nhq = "Panused aktsepteeritud!";
    this.wkk = "Panuseid ei aktsepteeritud!";
    this.lqy = "VÕIDA KUNI";
    this.cyl = "VÕITUDE AJALUGU";
    this.cko = "BOONUSE LÕPP";
    this.bzz = "tasuta keerutust!";
    this.uxw = "TASUTA KEERUTUSI MÄNGITUD";
    this.nry = "TASUTA KEERUTUSE VÕIT";
    this.nkv = "ÕNNITLEME!";
    this.kwf = "Õnnitleme, said";
    this.lhk = "Sul on jäänud veel";
    this.scc = "tasuta keerutust!";
    this.yva = "Mäng algab, palun oodake...";
    this.cjn = "Lõpeta panuste tegemine!";
    this.trm = "Asetage palun panused!";
    this.kpz = "Panuste tegemine lõppenud";
    this.lte = "Soovime edu!";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SÜMBOLID";
    this.who = "SÜMBOL";
    this.aow = "BOONUSVÕIT:";
    this.hpm = "Võite arvestatakse ainult vasakult paremale!";
    this.whn = "Te võitsite lisa BOONUSKEERUTUSI!";
    this.bte = "BOONUSKEERUTUSED mängitakse sama panuse ja liinide arvuga, nagu boonuse käivitanud mängus.";
    this.ufo = "VÕIMALUSED";
    this.fez = "VÕIMALUSE";
    this.yxs = "Te võitsite lisa 15 BOONUSKEERUTUST!";
    this.efn = "Mängige kõik tasuta keerutused lõpuni. Tasuta keerutusi võib võita ka tasuta keerutuste boonuse ajal.";
    this.tjg = "BOONUSE SPIKKER";
    this.foy = "SÜMBOLI SPIKKER";
    this.gcc = "LIINIDE SPIKKER";
    this.bvr = "VÕIDUVÕIMALUSE SPIKKER";
    this.ewc = "Liini võidud: Igal mänguliinil makstakse ainult suurimad liinivõidud. Liini võidud korrutatakse liini panusega. Erinevate liinide võidud liidetakse kokku.";
    this.tac = "Scatteri võidud: Scatteri võidud korrutatakse kogupanusega. Scatteri sümboli võidud liidetakse liini võitudele.";
    this.gpp = "Boonuse mitmekordistaja";
    this.hmb = "Rohkem õnne järgmisel korral!";
    this.lab = "3, 4 või 5 TÄHE sümbolit juhuslikel kohtadel annab 15 BOONUSKEERUTUST! Kõik BOONUSKEERUTUSE võidud korrutatakse 3-ga."
}
cvc.prototype = new wyt;

function dzu() {
    this.cpa = "ΓΡΑΜΜEΣ";
    this.kqi = "ΓΡΑΜΜΗ";
    this.yzf = "ΣΤΟIΧΗΜΑ / Γ.";
    this.lwe = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.anq = "ΤΕΛΕΙΩΣ BONUSSPINS";
    this.kuq = "ΠΑΙΓΜEΝΑ BONUSSPINS";
    this.sri = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.vlf = "ΣΥΓΧΑΡΗΤΗΡΙΑ ΚΕΡΔΙΣΑΤΕ!";
    this.ofu = "ΜΠOΝΟΥΣ ΚEΡΔΟΣ";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "ΣYΜΒΟΛΑ";
    this.who = "ΣΎΜΒΟΛΟ";
    this.gpp = "Πολλαπλασιαστής μπόνους";
    this.aow = "BONUS START ΚΕΡΔIΖΕΙ:";
    this.fsc = "BONUSSPINS";
    this.hpm = "Τα κέρδη μετρούνται από αριστερά προς τα δεξιά!";
    this.whn = "Κερδίσατε συμπληρωματικούς BONUSSPINS!";
    this.bte = "Τα γυρίσματα μπόνους, τα BONUSSPINS, παίζονται με το ίδιο ποντάρισμα και τον ίδιο αριθμό σειρών, όπως το αρχικό παιχνίδι.";
    this.ewc = "Κέρδη γραμμών: Μόνο το μεγαλύτερο κέρδος ανά παιγμένη γραμμή προσμετράται. Τα κέρδη των γραμμών αποτελούν πολλαπλάσιο του πονταρίσματος στη γραμμή. Τα κέρδη γραμμών που αφορούν σε διαφορετικές γραμμές προστίθενται.";
    this.tac = "Κέρδη Scatter: Τα κέρδη Scatter αποτελούν πολλαπλάσιο του συνολικού πονταρίσματος. Τα κέρδη από σύμβολα Scatter προσμετρώνται στα κέρδη των γραμμών.";
    this.ufo = "ΔΙΑΔΡΟΜΕΣ";
    this.fez = "ΔΙΑΔΡΟΜΉ";
    this.tjg = "BONUS ΒΟΉΘΕΙΑ";
    this.foy = "ΒΟHΘΕΙΑ ΣΥΜΒOΛΩΝ";
    this.gcc = "ΒΟHΘΕΙΑ ΣΕΙΡΩΝ ΚEΡΔΟΥΣ";
    this.bvr = "WINWAY ΒΟΗΘΕΙΑ";
    this.ycy = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.qvk = "ΠΟΣΟ ΡΙΣΚΟΥ";
    this.kpb = "ΜΑΥΡΟ/ΚΟΚΚΙΝΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.kcu = "ΣΥΜΒΟΛΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.lqy = "ΚΕΡΔΗ ΕΩΣ";
    this.cyl = "ΙΣΤΟΡΙΚΟ ΚΕΡΔΩΝ";
    this.cko = "ΛΗΞΗ ΜΠΟΝΟΥΣ";
    this.bzz = "Freespins!";
    this.uxw = "FREESPINS ΠΟΥ ΚΑΤΑΝΑΛΏΘΗΚΑΝ";
    this.nry = "FREESPIN ΚΕΡΔΟΣ";
    this.nkv = "ΣΥΓΧΑΡΗΤΗΡΙΑ!";
    this.kwf = "Συγχαρητήρια, κερδίσατε";
    this.lhk = "Σας απομένουν";
    this.scc = "Freespins!";
    this.nhq = "Γίνονται αποδεκτά πονταρίσματα!";
    this.wkk = "Πονταρίσματα δε γίνονται αποδεκτά!";
    this.yva = "Ενεργό παιχνίδι, παρακαλώ περιμένετε!";
    this.cjn = "Το παιχνίδι ξεκινά σε λίγο!";
    this.trm = "Το ποντάρισμα σας, παρακαλώ!";
    this.kpz = "Ποντάρισμα τέλος!";
    this.lte = "Καλή τύχη!";
    this.hmb = "Καλύτερη τύχη την επόμενη φορά!";
    this.yxs = "Κερδίσατε 15 συμπληρωματικούς BONUSSPINS!";
    this.efn = "Το Bonus τελειώνει, όταν όλα τα BONUSSPINS έχουν παιχθεί. Συμπληρωματικά BONUSSPINS δύνανται να κερδισθούν στο Bonus.";
    this.lab = "15 BONUSSPINS κερδίζονται με 3, 4 ή 5 σύμβολα ΑΣΤΡΟΥ σε κάθε θέση! Όλα τα BONUSSPINS αποφέρουν τριπλασιασμό κερδών."
}
dzu.prototype = new reb;

function esy() {
    this.cpa = "ЛИНИИ";
    this.kqi = "ЛИНИЯ";
    this.yzf = "ЗАЛОГ/Л-Я";
    this.lwe = "БОНУС-ИГРИ ОСТАВАТ";
    this.kuq = "БОНУС-ИГРИ ИЗИГРАНИ";
    this.sri = "БОНУС-ИГРИ ОСТАВАТ";
    this.vlf = "ПОЗДРАВЛЕНИЯ, ВИЕ СПЕЧЕЛИХТЕ!";
    this.ofu = "БОНУС ПЕЧАЛБА";
    this.fsc = "БОНУС-ИГРИ";
    this.qvk = "СУМА ЗА ДУБЛИРАНЕ";
    this.kpb = "ДУБЛИРАЙ ЧЕРВЕНА/ЧЕРНА-ПЕЧАЛБА";
    this.kcu = "ДУБЛИРАНЕ НА КОЗОВ ЦВЯТ-ПЕЧАЛБА";
    this.ycy = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.nhq = "Залозите са приети!";
    this.wkk = "Залозите не са приети!";
    this.lqy = "СПЕЧЕЛИ ДО";
    this.cyl = "ИСТОРИЯ НА ПЕЧАЛБИТЕ";
    this.cko = "КРАЙ НА БОНУС";
    this.bzz = "безплатни завъртания!";
    this.uxw = "ИЗИГРАНИ БЕЗПЛАТНИ ЗАВЪРТАНИЯ";
    this.nry = "СПЕЧЕЛЕНО БЕЗПЛАТНО ЗАВЪРТАНЕ";
    this.nkv = "ПОЗДРАВЛЕНИЯ!";
    this.kwf = "Поздравления, получихте";
    this.lhk = "Имате останали";
    this.scc = "безплатни завъртания!";
    this.yva = "Затворено за залози!";
    this.cjn = "Приключете със залозите!";
    this.trm = "Поставете своите залози!";
    this.kpz = "Край на залозите!";
    this.lte = "Успех!";
    this.anq = "ОБЩО БОНУС ИГРИ";
    this.gds = "СКАТЕР";
    this.dmq = "SCATTERED:";
    this.hgh = "СИМВОЛИ";
    this.who = "СИМВОЛ";
    this.aow = "НАЧАЛНА БОНУС ПЕЧАЛБА:";
    this.hpm = "Печалбите се изплащат само от ляво на дясно!";
    this.whn = "Вие спечелихте допълнителни Бонус игри!";
    this.bte = "Бонус игрите се играят със същия залог и брой линии, както основната игра.";
    this.ufo = "НАЧИНИ";
    this.fez = "НАЧИН";
    this.yxs = "Печелите допълнителни 15 БОНУС ЗАВЪРТАНИЯ!";
    this.efn = "Бонус играта продължава до изчерпване на бонус игрите. По време на бонус игра може да се спечелят допълнителни игри.";
    this.tjg = "ПОМОЩ ЗА БОНУС";
    this.foy = "ПОМОЩ СИМВОЛ";
    this.gcc = "ПОМОЩ ПЕЧЕЛИВША ЛИНИЯ";
    this.bvr = "ПОМОЩ ЗА ПЕЧАЛБИ";
    this.ewc = "Печалби на Линия: От всяка активна линия се изплаща само най-голямата печалба. Печалбата от активна линия се умножава по залога на линия. Печалбите от активните линии се събират и формират общата печалба.";
    this.tac = "Скатер печалби: Скатер печалбата се умножава по общият залог. Печалбите от фигурите Скатер се добавят към печалбата от активните линии.";
    this.gpp = "Бонус Множител";
    this.hmb = "По-добър успех-следващият път!";
    this.lab = "15 БОНУС ЗАВЪРТАНИЯ се печелят с 3, 4 или 5 символа ЗВЕЗДА на която и да е позиция! Всичките печалби от Бонус играта се умножават по 3."
}
esy.prototype = new zwq;

function loh() {
    this.cpa = "ხაზები";
    this.kqi = "ხაზი";
    this.yzf = "ფსონი / ხაზი";
    this.ufo = "გზა";
    this.fez = "გზა";
    this.lwe = "დარჩენილი BONUS თამაშები";
    this.anq = "BONUS თამაშების რაოდენობა ჯამში";
    this.kuq = "უკვე ნათამაშები BONUS თამაშები";
    this.sri = "დარჩენილი BONUS თამაშები";
    this.vlf = "გილოცავთ თქვენ მოიგეთ!";
    this.ofu = "BONUS მოგება";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "სიმბოლოები";
    this.who = "სიმბოლო";
    this.whn = "თქვენ მოიგეთ დამატებითი BONUS თამაშები!";
    this.hpm = "მოგების ანაზღაურება ხდება მხოლოდ მარცხნიდან მარჯვნივ!";
    this.aow = "ბონუს ჩანაწერის მოგება:";
    this.fsc = "BONUS თამაშები";
    this.bte = "BONUS თამაშების თამაში ხდება იგივე ფსონზე და ხაზების რაოდენობაზე, როგორც თამაშის დაწყების დროს.";
    this.ewc = "ხაზის მოგება: თითოეულ ნათამაშებ ხაზზე, მოხდება მხოლოდ უმაღლესი ხაზის მოგების ანაზღაურება. ხაზის მოგება შედგება მრავალჯერადი ხაზის ფსონისაგან. სხვადასხვა ხაზიდან მიღებული მოგება ჯამდება ერთ მოგებად.";
    this.tac = "Scatter მოგება: Scatter მოგება შეადგენს მთლიან ფსონს რამოდენიმეჯერ. მოგება Scatter სიმბოლოებიდან ემატება ხაზის მოგებას.";
    this.tjg = "ბონუს დახმარება";
    this.foy = "სიმბოლოს დახმარება";
    this.gcc = "მოგების ხაზის დახმარება";
    this.bvr = "მოგების გზაზე დახმარება";
    this.yxs = "თქვენ მოიგეთ დამატებითი 15 BONUS თამაშები!";
    this.efn = "ითამაშეთ ბონუსი სანამ BONUS თამაში არ გაგითავდებათ. დამატებითი BONUS თამაშის მოგება შეიძლება ბონუსის დროს.";
    this.qvk = "გარისკვის რიცხვი";
    this.kpb = "წითელი/შავი ითამაშე და მოიგე";
    this.kcu = "ფერი ითამაშე და მოიგე";
    this.lab = "15 BONUS თამაშის მოგება ხდება 3, 4 ან 5 ვარსკვლავის სიმბოლოთი ნებისმიერ პოზიციაზე! ყველა BONUSSPIN მოგება მრავლდება 3-ზე.";
    this.hmb = "გისურვებთ მომავალში უკეთეს იღბალს!";
    this.cjn = "დაასრულე ფსონის დადება!";
    this.trm = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.kpz = "ფსონები აღარ მიიღება!";
    this.lte = "გისურვებთ წარმატებას!";
    this.ycy = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.nhq = "ფსონები მიღებულ იქნა!";
    this.wkk = "ფსონები არ იქნა მიღებული!";
    this.cko = "ბონუსის დასასრული";
    this.lqy = "-მდე მოგება";
    this.cyl = "მოგების ჩანაწერი";
    this.yva = "თამაში მიმდინარეობს, გთხოვთ დაელოდოთ!";
    this.gpp = "ბონუს მულტიპლიკატორი";
    this.bzz = "უფასო დატრიალება!";
    this.uxw = "ნათამაშები უფასო დატრიალებები";
    this.nry = "უფასო დატრიალების მოგება";
    this.nkv = "გილოცავთ!";
    this.kwf = "გილოცავთ, თქვენ მიიღეთ";
    this.lhk = "თქვენ დაგრჩათ";
    this.scc = "უფასო დატრიალება!"
}
loh.prototype = new qng;

function mvl() {
    this.cpa = "VONALAK";
    this.kqi = "VONAL";
    this.yzf = "TÉT / VONAL";
    this.ufo = "IRÁNY";
    this.fez = "IRÁNY";
    this.lwe = "MEGMARADT SZABAD JÁTÉKOK";
    this.anq = "ÖSSZES SZABAD JÁTÉK";
    this.kuq = "LEJÁTSZOTT SZABAD JÁTÉKOK";
    this.sri = "MEGMARADT SZABAD JÁTÉKOK";
    this.vlf = "GRATULÁLUNK, ÖN NYERT!";
    this.ofu = "BÓNUSZ NYEREMÉNY";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SZIMBÓLUMOK";
    this.who = "SZIMBÓLUM";
    this.whn = "További SZABADJÁTÉKOKAT nyert!";
    this.hpm = "A Nyeremények balról jobbra fizetnek!";
    this.aow = "BÓNUSZBA LÉPŐ NYEREMÉNY:";
    this.fsc = "SZABAD JÁTÉKOK";
    this.bte = "Az alapjátéknál beállított tét és nyerővonal számmal játszódik le a SZABAD JÁTÉK is.";
    this.ewc = "Vonal Nyeremények: Csak a legnagyobb nyeremény fizet a megjátszott vonalakon. A vonal nyeremények a vonalankénti tét szorzatai. A különböző vonalankénti nyeremények összeadódnak.";
    this.tac = "Scatter Nyeremények: A Scatter nyeremények az összes tét szorzatai. A Scatter szimbólummal elért nyeremények a vonal nyereményekhez adódnak.";
    this.tjg = "BÓNUSZ SÚGÓ";
    this.foy = "SZIMBÓLUM SÚGÓ";
    this.gcc = "NYERŐVONAL SÚGÓ";
    this.bvr = "NYEREMÉNYÚT SEGÉDLET";
    this.yxs = "További 15 SZABADJÁTÉKOT nyert!";
    this.efn = "Játssza a szabad játék bónuszt ameddig van szabad pörgetése. Ez idő alatt újabb szabad játékokat nyerhet.";
    this.qvk = "FELTETT ÖSSZEG";
    this.kpb = "PIROS/FEKETE NYEREMÉNY";
    this.kcu = "SZÍN NYEREMÉNY";
    this.lab = "15 SZABAD JÁTÉKOT nyerhet ha 3, 4 vagy 5 CSILLAG szimbólum jelenik meg bármely helyen. Minden SZABAD JÁTÉKBAN elért nyeremény háromszorosan fizet.";
    this.hmb = "Több szerencsét máskor!";
    this.cjn = "Tétek lezárva!";
    this.trm = "Kérem tegyék meg tétjeiket!";
    this.kpz = "A játék elkezdődött, kérem várjon!";
    this.lte = "Sok szerencsét!";
    this.ycy = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.nhq = "Tétek elfogadva!";
    this.wkk = "Nem lehet tétet rakni!";
    this.yva = "Játék folyamatban, kérem várjon!";
    this.lqy = "A NYEREMÉNY AKÁR";
    this.cyl = "JÁTÉK TÖRTÉNET";
    this.cko = "BÓNUSZ VÉGE";
    this.gpp = "Bónusz szorzó";
    this.bzz = "szabad spint kap!";
    this.uxw = "JÁTSZOTT SZABAD SPINEK";
    this.nry = "SZABAD SPIN NYEREMÉNY";
    this.nkv = "GRATULÁLUNK!";
    this.kwf = "Gratulálunk, Ön";
    this.lhk = "";
    this.scc = "szabad spinje van még!"
}
mvl.prototype = new ksu;

function lni() {
    this.cpa = "LINII";
    this.kqi = "LINIE";
    this.yzf = "MIZĂ / LINIE";
    this.ufo = "MODURI";
    this.fez = "MOD";
    this.lwe = "BONUSSPIN RĂMAŞI";
    this.anq = "TOTAL BONUSSPIN";
    this.kuq = "BONUSSPIN JUCAŢI";
    this.sri = "BONUSSPIN RĂMAŞI";
    this.vlf = "FELICITĂRI CÂŞTIGAT!";
    this.ofu = "CÂŞTIG BONUS";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SIMBOLURI";
    this.who = "SIMBOL";
    this.whn = "Aţi câştigat BONUSSPIN suplimentari!";
    this.hpm = "Câştigurile sunt evaluate numai de la stânga la dreapta!";
    this.aow = "CÂŞTIG BONUS START:";
    this.fsc = "BONUSSPIN";
    this.bte = "BONUSSPIN sunt jucate cu aceeaşi miză şi număr de linii ca jocul iniţial.";
    this.ewc = "Câştiguri linie: Numai câştigul linie maxim pe linie jucată contează. Câştiguri linie sunt un multiplu al mizei liniei. Câştigurile linie ale diferitelor linii sunt adunate.";
    this.tac = "Câştiguri Scatter: Câştigurile Scatter sunt un multiplu al mizei totale. Câştigurile din simbolurile Scatter sunt adăugate la câştigurile linie.";
    this.tjg = "AJUTOR BONUS";
    this.foy = "AJUTOR SIMBOL";
    this.gcc = "AJUTOR LINII DE CÂŞTIG";
    this.bvr = "AJUTOR CĂI DE CÂŞTIG";
    this.yxs = "Aţi câştigat 15 BONUSSPIN suplimentari!";
    this.efn = "Bonusul este terminat când au fost jucaţi toţi BONUSSPIN. BONUSSPIN suplimentari pot fi câştigaţi la bonus.";
    this.qvk = "RISC";
    this.kpb = "ŞANSA ROŞU/NEGRU";
    this.kcu = "SIMBOLUL ŞANSĂ";
    this.lab = "15 BONUSSPIN sunt câştigaţi prin 3, 4 sau 5 simboluri STEA pe fiecare poziţie! Toţi BONUSSPIN câştiguri x 3.";
    this.hmb = "Mai mult noroc data viitoare!";
    this.cjn = "Jocul începe imediat!";
    this.trm = "Rugăm mizele dv.!";
    this.kpz = "Nu alte mize!";
    this.lte = "Mult noroc!";
    this.ycy = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.nhq = "Pariuri acceptate!";
    this.wkk = "Pariuri neacceptate!";
    this.yva = "Joc în derulare, vă rugăm așteptați!";
    this.lqy = "CÂŞTIGURI PÂNĂ LA";
    this.cyl = "ISTORIC CÂŞTIG";
    this.cko = "BONUS FINAL";
    this.gpp = "Bonus multiplicator";
    this.bzz = "rotiri libere!";
    this.uxw = "ROTIRI GRATUTE JUCATE";
    this.nry = "CÂŞTIG ROTIRI LIBERE";
    this.nkv = "FELICITĂRI!";
    this.kwf = "Felicitări, ai primit";
    this.lhk = "V-au rămas";
    this.scc = "rotiri gratuite!l"
}
lni.prototype = new yhb;

function bmz() {
    this.cpa = "LINHAS";
    this.kqi = "LINHA";
    this.yzf = "APOSTA / LINHA";
    this.ufo = "FORMAS";
    this.fez = "FORMA";
    this.lwe = "BONUSSPINS RESTANTES";
    this.anq = "TOTAL DE BONUSSPINS";
    this.kuq = "BONUSSPINS JOGADOS";
    this.sri = "BONUSSPINS RESTANTES";
    this.vlf = "PARABÉNS, GANHOU!";
    this.ofu = "PRÉMIO BONUS";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SÍMBOLOS";
    this.who = "SÍMBOLO";
    this.whn = "Ganhou BONUSSPINS adicionais!";
    this.hpm = "Prémios só são pagos da esquerda para a direita!";
    this.aow = "PRÉMIO ENTRADA BONUS:";
    this.fsc = "BONUSSPINS";
    this.bte = "Os BONUSSPINS são jogados com a mesma aposta e n° de linhas que o jogo inicial.";
    this.ewc = "Prémios de linha: Só conta o mais alto prémio de linha de cada linha jogada. Prémios de linha são um múltiplo da aposta de linha. Prémios de linha de diversas linhas são adicionados.";
    this.tac = "Prémios Scatter: Prémios Scatter são múltiplos da aposta total. Prémios de símbolos Scatter são adicionados aos prémios de linha.";
    this.tjg = "AJUDA BONUS";
    this.foy = "AJUDA SÍMBOLO";
    this.gcc = "AJUDA DE LINHAS VENCEDORAS";
    this.bvr = "AJUDA DE FORMAS DE PRÊMIO";
    this.yxs = "Ganhou 15 BONUSSPINS adicionais!";
    this.efn = "Jogar Bonus até não restarem mais BONUSSPINS. BONUSSPINS adicionais podem ser ganhos em Bonus.";
    this.qvk = "RISCO";
    this.kpb = "VERMELHO/PRETO CHANCE DE GANHAR";
    this.kcu = "CHANCE DO NAIPE";
    this.lab = "15 BONUSSPINS são ganhos com 3, 4 ou 5 símbolos de estrelas em qualquer posição! Todos ganhos BONUSSPIN são multiplicados por 3.";
    this.cjn = "O jogo começa em breve!";
    this.trm = "Suas apostas por favor!";
    this.kpz = "Nenhuma aposta mais!";
    this.lte = "Boa sorte!";
    this.ycy = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.nhq = "Apostas aceitas!";
    this.wkk = "Apostas não aceitas!";
    this.yva = "Jogo em andamento, aguarde por favor!";
    this.lqy = "GANHOS ATÉ";
    this.cyl = "HISTÓRICO DO GANHO";
    this.cko = "FIM BONUS";
    this.gpp = "Multiplicador do bonus";
    this.hmb = "Mais sorte da próxima vez!";
    this.bzz = "freespins!";
    this.uxw = "FREESPINS JOGADOS";
    this.nry = "GANHO DE FREESPINS";
    this.nkv = "PARABÉNS!";
    this.kwf = "Parabéns, ganhas";
    this.lhk = "Ainda lhe sobram";
    this.scc = "freespins!"
}
bmz.prototype = new czg;

function zgy() {
    this.cpa = "LIGNES";
    this.kqi = "LIGNE";
    this.yzf = "MISE / LIGNE";
    this.ufo = "CHEMINS";
    this.fez = "CHEMIN";
    this.lwe = "BONUSSPINS LAISSÉ";
    this.anq = "TOTAL BONUSSPINS";
    this.kuq = "JEUX GRATUITS JOUES";
    this.sri = "BONUSSPINS LAISSÉ";
    this.vlf = "FELICITATIONS TU AS GAGNE!";
    this.ofu = "BONUS GAIN";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SYMBOLES";
    this.who = "SYMBOLE";
    this.whn = "Vous gagnez BONUSSPINS extra!";
    this.hpm = "Victoires payer seulement de gauche à droite!";
    this.aow = "BONUS ENTRÉE WIN:";
    this.fsc = "BONUSSPINS";
    this.bte = "Les BONUSSPINS sont joué avec la même mise et nombre des lignes comme le jeu avant.";
    this.ewc = "Gains des lignes: Seulement le gain de ligne plus haut par ligne joué compté. Gains des lignes sont un multiple du mise de ligne. Les gains de lignes de lignes differents sont ajouté.";
    this.tac = "Gains de Scatter: Gains de Scatter sont un multiple du toute mise. Gains de symboles Scatter sont ajouter á le gain des lignes.";
    this.tjg = "BONUS D'AIDE";
    this.foy = "SYMBOLE D'AIDE";
    this.gcc = "WINLINE AIDE";
    this.yxs = "Vous avez gagné un supplément de 15 BONUSSPINS!";
    this.efn = "Le Bonus se Termine une fois tous les BONUSSPINS joués. Des BONUSSPINS supplémentaires peuvent être gagnés pendant la Bonus.";
    this.qvk = "RISQUE";
    this.kpb = "ROUGE/NOIR SIGNIFIE GAIN";
    this.kcu = "GAIN DE SYMBOLES";
    this.lab = "15 BONUSSPINS sont gagnés avec 3, 4 ou 5 étoiles sur toute position! Tous les gains des BONUSSPINS sont multipliés par 3.";
    this.cjn = "Le jeu va commencer tout de suite!";
    this.trm = "Faites vos jeux s'il vous plaît!";
    this.kpz = "Rien ne va plus!";
    this.lte = "Bonne chance!";
    this.bvr = "AIDE VOIES DE GAINS";
    this.hmb = "Meilleure chance la prochaine fois!";
    this.ycy = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.nhq = "Mises acceptées!";
    this.wkk = "Mises refusées!";
    this.yva = "Jeu en cours, merci de patienter!";
    this.lqy = "GAINS JUSQU'À";
    this.cyl = "HISTORIQUE DE GAINS";
    this.cko = "FIN DU BONUS";
    this.gpp = "Multiplicateur de bonus";
    this.bzz = "Freespins!";
    this.uxw = "FREESPINS JOUÉS";
    this.nry = "GAIN DE FREESPIN";
    this.nkv = "FÉLICITATIONS!";
    this.kwf = "Félicitations, vous recevez";
    this.lhk = "Il vous reste encore";
    this.scc = "Freespins!"
}
zgy.prototype = new hjn;

function pom() {
    this.cpa = "LINIJE";
    this.kqi = "LINIJI";
    this.yzf = "ULOG / LINIJI";
    this.ufo = "NAČINA";
    this.fez = "NAČIN";
    this.lwe = "PREOSTALE BESPLATNE IGRE";
    this.anq = "UKUPNO BESPLATNIH IGARA";
    this.kuq = "ODIGRANE BESPLATNE IGRE";
    this.sri = "PREOSTALE BESPLATNE IGRE";
    this.vlf = "ČESTITAMO, DOBILI STE!";
    this.ofu = "BONUS DOBITAK";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SIMBOLI";
    this.who = "SIMBOL";
    this.whn = "Dobili ste dodatne BESPLATNE IGRE!";
    this.hpm = "Dobitci se isplaćuju samo sa lijeva na desno!";
    this.aow = "BONUS POČETNI DOBITAK:";
    this.fsc = "BESPLATNE IGRE";
    this.bte = "BESPLATNE IGRE se igraju sa istim ulogom i brojem linija kao početna igra.";
    this.ewc = "Linijski dobitak: Samo najveći linijski dobitak za svaku odigranu liniju se isplaćuje. Linijski dobitak je uvišestručeni linijski ulog. Linijski dobitci sa različitih linija se zbrajaju.";
    this.tac = "Scatter dobitak: Scatter dobitak je uvišestručeni ukupni ulog. Dobitci od scatter simbola se zbrajaju sa linijskim dobitcima.";
    this.tjg = "POMOĆ ZA BONUS";
    this.foy = "POMOĆ ZA SIMBOL";
    this.gcc = "POMOĆ ZA DOBITNE LINIJE";
    this.yxs = "Dobili ste dodatnih 15 BESPLATNIH IGARA!";
    this.efn = "Bonus se završava kada su odigrane sve BESPLATNE IGRE. Dodatne BESPLATNE IGRE se mogu dobiti tijekom Bonusa.";
    this.qvk = "ULAŽETE";
    this.kpb = "POGODI BOJU ZA DOBITAK OD";
    this.kcu = "POGODI SIMBOL ZA DOBITAK OD";
    this.lab = "3, 4 ili 5 simbola ZVIJEZDA na bilo kojoj poziciji osvajaju 15 BESPLATNIH IGARA! Svi dobici tijekom BESPLATNIH IGARA množe se sa 3.";
    this.cjn = "Završte ulaganje!";
    this.trm = "Molimo Vaše uloge!";
    this.kpz = "Nema daljnjih uloga!";
    this.lte = "Puno sreće!";
    this.bvr = "POMOĆ ZA POBJEDU";
    this.hmb = "Više sreće sljedeći put!";
    this.ycy = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.nhq = "Ulozi su prihvaćeni!";
    this.wkk = "Ulozi nisu prihvaćeni!";
    this.yva = "Igra je u tijeku, sačekajte!";
    this.lqy = "OSVOJI DO";
    this.cyl = "POVIJEST DOBITAKA";
    this.cko = "KRAJ BESPLATNE IGRE";
    this.gpp = "Bonus multiplikator";
    this.bzz = "slobodnih igara!";
    this.uxw = "ODIGRANIH SLOBODNIH IGARA";
    this.nry = "DOBITAK U SLOBODNOJ IGRI";
    this.nkv = "ČESTITAMO!";
    this.kwf = "Čestitamo, osvojili ste";
    this.lhk = "Preostalo ti je još";
    this.scc = "slobodnih igara!"
}
pom.prototype = new mde;

function cjv() {
    this.cpa = "LINEE";
    this.kqi = "LINEA";
    this.yzf = "PUNTATA / LINEA";
    this.ufo = "VIE";
    this.fez = "VIA";
    this.lwe = "BONUSSPIN RIMASTI";
    this.anq = "TOTALE BONUSSPIN";
    this.kuq = "BONUSSPIN GIOCATI";
    this.sri = "BONUSSPIN RIMASTI";
    this.vlf = "CONGRATULAZIONI, HAI VINTO!";
    this.ofu = "VINCITA BONUS";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SIMBOLI";
    this.who = "SIMBOLO";
    this.whn = "Hai vinto altri BONUSSPIN!";
    this.hpm = "Le vincite sono valutate dalla sinistra alla destra soltanto!";
    this.aow = "VINCITA START BONUS:";
    this.fsc = "BONUSSPIN";
    this.bte = "Le giocate BONUS si giocano con la stessa puntata e con lo stesso numero di linee della partita iniziale.";
    this.ewc = "Vincite di linea: Soltanto la vincita di linea più alta di ogni linea conta. Le vincite di linea sono la moltiplicazione della puntata per la linea. Le vincite di linea delle diverse linee vengono sommate.";
    this.tac = "Vincite Scatter: Le vincite Scatter sono la moltiplicazione dell'intera puntata del gioco. Le vincite dai simboli Scatter vengono sommate alle vincite di linea.";
    this.tjg = "AIUTO BONUS";
    this.foy = "AIUTO SYMBOLO";
    this.gcc = "AIUTO WINLINE";
    this.yxs = "Hai vinto altri 15 BONUSSPIN!";
    this.efn = "Il bonus termina quando tutti i BONUSSPIN sono stati giocati. Si possono vincere altri BONUSSPIN nella giocata Bonus.";
    this.qvk = "IMPORTO GAMBLE";
    this.kpb = "ROSSO/NERO GAMBLE PER VINCERE";
    this.kcu = "CHANCE SUIT GAMBLE";
    this.lab = "15 BONUSSPIN si vincono con 3, 4 o 5 simboli STELLA su ogni posizione! Tutte le vincite BONUSSPIN si moltiplicano x 3.";
    this.cjn = "Completare le puntate prego!";
    this.trm = "Prego puntare!";
    this.kpz = "Fine puntate!";
    this.lte = "Buona Fortuna!";
    this.bvr = "AIUTO MODI DI VINCERE";
    this.hmb = "La prossima volta sarai più fortunato!";
    this.ycy = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.nhq = "Puntate accettate!";
    this.wkk = "Puntate non accettate!";
    this.yva = "Partita in corso, prego attendere!";
    this.lqy = "VINCITE FINO A";
    this.cyl = "CRONACA DELLE VINCITE";
    this.cko = "FINE BONUS";
    this.gpp = "Moltiplicatore bonus";
    this.bzz = "Freespins!";
    this.uxw = "FREESPIN GIOCATI";
    this.nry = "VINCITA FREESPIN";
    this.nkv = "CONGRATULAZIONI!";
    this.kwf = "Congratulazioni, ricevi";
    this.lhk = "Sono rimasti";
    this.scc = "freespin!"
}
cjv.prototype = new hmk;

function bya() {
    this.cpa = "LINJER";
    this.kqi = "LINJE";
    this.yzf = "INSATS / LINJE";
    this.ufo = "SÄTT";
    this.fez = "SÄTT";
    this.lwe = "ÅTERSTÅENDE BONUSSPINS";
    this.anq = "BONUSSPINS TOTALT";
    this.kuq = "SPELADE BONUSSPINS";
    this.sri = "ÅTERSTÅENDE BONUSSPINS";
    this.vlf = "GRATTIS, DU HAR VUNNIT!";
    this.ofu = "BONUSVINST";
    this.gds = "SCATTER";
    this.dmq = "SCATTERED:";
    this.hgh = "SYMBOLER";
    this.who = "SYMBOL";
    this.whn = "Du har vunnit extra BONUSSPINS!";
    this.hpm = "Vinster betalas endast ut från vänster till höger!";
    this.aow = "BONUSSTARTSVINST:";
    this.fsc = "BONUSSPINS";
    this.bte = "BONUSSPINS spelas med samma insats och samma antal linjer som det spel som aktiverade bonusomgången.";
    this.ewc = "Linjevinster: Endast den högsta linjevinster per spelad linje räknas. Linjevinster är en mångdubbling av linjeinsatsen. Linjevinsterna från olika linjer adderas.";
    this.tac = "Scattervinster: Scattervinster är en mångdubbling av den totala insatsen. Vinster från scattersymboler adderas till linjevinsterna.";
    this.tjg = "HJÄLP OM BONUS";
    this.foy = "HJÄLP OM SYMBOLER";
    this.gcc = "HJÄLP OM VINSTRADER";
    this.bvr = "VINSTSÄTTSHJÄLP";
    this.yxs = "Du har vunnit ytterligare 15 BONUSSPINS!";
    this.efn = "Spela ut bonusomgången tills inga BONUSSPINS återstår. Nya BONUSSPINS kan vinnas under bonusomgången.";
    this.qvk = "SPELSUMMA";
    this.kpb = "SPEL OM RÖTT/SVART";
    this.kcu = "SPEL OM FÄRG";
    this.lab = "15 BONUSSPINS betalas ut för 3, 4 eller 5 SCATTER-symboler på varje position! Alla vinster från BONUSSPIN multipliceras med 3.";
    this.cjn = "Spelet har börjat!";
    this.trm = "Placera dina insatser, tack!";
    this.kpz = "Inga fler insatser!";
    this.lte = "Lycka till!";
    this.hmb = "Bättre lycka nästa gång!";
    this.ycy = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.nhq = "Insatserna accepterade!";
    this.wkk = "Insatserna ej accepterade!";
    this.yva = "Spelet pågår, var vänlig vänta!";
    this.lqy = "VINN UPP TILL";
    this.cyl = "VINSTHISTORIK";
    this.cko = "BONUSEN SLUT";
    this.gpp = "Bonusmultiplikator";
    this.bzz = "gratisspinn!";
    this.uxw = "GRATISSPINN SPELADE";
    this.nry = "GRATISSPINNSVINST";
    this.nkv = "GRATTIS!";
    this.kwf = "Grattis, du har fått";
    this.lhk = "Du har";
    this.scc = "gratisspinn kvar!"
}
bya.prototype = new qub;

function igd() {
    this.wva = "The WILD symbol substitutes all symbols except SCATTER symbol.";
    this.dyw = "SCATTER symbol pays on any position."
}
igd.prototype = new spl;

function dta() {
    this.wva = "Символ WILD заменяет любой другой символ, за исключением символа SCATTER.";
    this.dyw = "Символы SCATTER выигрывают в любой позиции."
}
dta.prototype = new jlk;

function avh() {
    this.wva = "El simbolo COMODIN sustituye a todos los simbolos menos al simbolo SCATTER.";
    this.dyw = "Combinación ganadora de símbolos SCATTER paga en cualquier posición."
}
avh.prototype = new xvy;

function vhg() {
    this.wva = "Das WILD Symbol ersetzt alle Symbole, ausgenommen ist das SCATTER Symbol.";
    this.dyw = "SCATTER Symbole gewinnen auf jeder Position."
}
vhg.prototype = new itp;

function clm() {
    this.wva = "WILD sembolü SCATTER sembolü dışında tüm sembollerin yerine geçer.";
    this.dyw = "SCATTER sembolleri her pozisyonda kazanır."
}
clm.prototype = new tfe;

function ssj() {
    this.wva = "WILD symbol nahrazuje všechny symboly s výjimkou symbolu SCATTER.";
    this.dyw = "SCATTER symbol vyhrává v libovolné pozici."
}
ssj.prototype = new sml;

function rhr() {
    this.wva = "WILD sümbol asendab kõiki sümboleid, välja arvatud SCATTER sümbol.";
    this.dyw = "SCATTER sümbol maksab igas positsioonis."
}
rhr.prototype = new cvc;

function dgd() {
    this.wva = "Το σύμβολο WILD υποκαθιστά όλα τα σύμβολα, εκτός από το σύμβολο SCATTER.";
    this.dyw = "Τα SCATTER σύμβολα κερδίζουν σε κάθε θέση."
}
dgd.prototype = new dzu;

function jpo() {
    this.wva = "Символът WILD замества всички символи, освен СКАТЕР.";
    this.dyw = "Символът SCATTER се изплаща на всяка позиция."
}
jpo.prototype = new esy;

function rpm() {
    this.wva = "WILD სიმბოლო ანაცვლებს ყველა სიმბოლოს SCATTER სიმბოლოს გარდა.";
    this.dyw = "SCATTER სიმბოლო მოგებას ანაზღაურებს ნებისმიერ პოზიციაზე."
}
rpm.prototype = new loh;

function ury() {
    this.wva = "A WILD minden szimbólumot helyettesít, kivéve a SCATTER szimbólumot.";
    this.dyw = "A SCATTER szimbólum minden helyen fizet."
}
ury.prototype = new mvl;

function ayy() {
    this.wva = "Simbolul WILD înlocuieşte oricare alt simbol, cu excepţia simbolului SCATTER.";
    this.dyw = "Simbolurile SCATTER câştigă pe fiecare poziţie."
}
ayy.prototype = new lni;

function jwj() {
    this.wva = "O símbolo WILD substitui qualquer outro símbolo, exceto do símbolo SCATTER.";
    this.dyw = "Símbolos SCATTER ganham em cada posição."
}
jwj.prototype = new bmz;

function loz() {
    this.wva = "Le symbole WILD substitue tout symbole exception faite le symbole SCATTER.";
    this.dyw = "SCATTER symbole paie sur n'importe quelle position."
}
loz.prototype = new zgy;

function qmw() {
    this.wva = "Simbol WILD zamjenjuje svaki drugi simbol, osim simbola SCATTER";
    this.dyw = "SCATTER simboli dobivaju na bilo kojoj poziciji."
}
qmw.prototype = new pom;

function ifx() {
    this.wva = "Il simbolo WILD sostituisce ogni altro simbolo, tranne il simbolo SCATTER";
    this.dyw = "I simboli SCATTER vincono su ogni posizione."
}
ifx.prototype = new cjv;

function mkh() {
    this.wva = "WILD-symbolen ersätter alla andra symboler utom SCATTER-symbolen.";
    this.dyw = "SCATTER-symbolen ger vinst på varje position."
}
mkh.prototype = new bya;

function oxd() {
    this.cgc = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.uay = {
        backgroundColor: "rgb(0,0,0)",
        eda: "rgba(0,0,0,0.3)"
    };
    this.hbo = {
        font: "arial",
        zde: "bold",
        backgroundColor: "black",
        kph: "rgb(0,100,10)",
        wuj: "rgb(80,255,100)",
        vqn: "rgb(120,120,120)",
        gkn: "red",
        sur: "white",
        wwp: null
    };
    this.soi = {
        font: "arial",
        zde: "bold",
        backgroundColor: "rgb(0,0,0)",
        qja: null,
        asm: "rgb(255,255,255)",
        dlt: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.wij = {
        font: "arial",
        zde: "bold",
        backgroundColor: "black",
        lka: "rgb(50,50,50)",
        gog: "rgb(255,255,255)",
        asm: "white",
        oxi: 0.8,
        veo: {
            ocr: {
                font: "sanf-serif",
                zde: "",
                textAlign: "center",
                rye: "round",
                backgroundColor: "black",
                asm: "white",
                borderColor: null,
                dlt: null,
                auq: 1
            }
        }
    };
    this.qlo = {
        font: "arial",
        zde: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        jbx: "rgba(255,255,255,0.2)",
        asm: "rgb(255,255,255)",
        ksm: "rgba(0,0,0,0.3)",
        display: {
            ntv: "arial",
            zgw: "arial",
            zde: "bold",
            asm: "rgb(255,255,255)",
            cxt: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        ocr: {
            font: "arial",
            zde: "bold",
            asm: "rgb(0,0,0)",
            zmo: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            qja: "rgba(255,255,255,1)",
            plt: "rgba(255,255,255,0.8)",
            fqq: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            rye: "rect",
            eyw: -1
        }
    };
    this.sjx = {
        font: "arial",
        zde: "bold",
        rej: "rgb(0,0,200)",
        lof: "rgb(255,255,255)",
        lyv: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        kus: "rgb(180,220,255)",
        qze: "rgb(10,20,25)",
        cqd: "rgb(130,220,255)",
        idr: "rgb(130,190,255)",
        asm: "rgb(255,255,255)",
        jhw: "rgb(130,190,255)",
        rba: "rgb(100,160,255)",
        dnm: "rgb(255,255,255)",
        ocr: {
            rye: "rect",
            font: "arial",
            zde: "bold",
            asm: "rgb(255,255,255)",
            dwm: null,
            backgroundColor: "rgb(90,160,255)",
            kxn: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            dlt: "rgb(40,80,140)"
        },
        blk: {
            rye: "round",
            font: "arial",
            zde: "bold",
            asm: "rgb(255,255,255)",
            dwm: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            kxn: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            dlt: "rgb(40,80,140)"
        }
    };
    this.awv = {};
    this.fkb = {
        grv: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.ffp = {
        type: "left",
        font: "arial",
        zde: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        qja: null,
        borderColor: "rgb(0,0,0)",
        dlt: "rgb(180,180,180)",
        kus: "rgba(0,0,0,0.6)",
        qqn: null,
        cxt: "rgb(255,200,0)",
        asm: "white",
        qls: {
            font: "arial",
            zde: "bold",
            backgroundColor: "rgb(100,100,100)",
            qja: "rgb(100,100,100)",
            plt: null,
            fqq: null,
            borderColor: "rgb(100,100,100)",
            asm: "rgb(255,255,255)",
            zmo: "rgb(255,200,0)",
            rye: "triangle",
            eyw: 1
        },
        bhi: {
            font: "arial",
            zde: "bold",
            backgroundColor: "rgb(100,100,100)",
            qja: "rgb(100,100,100)",
            plt: null,
            fqq: null,
            borderColor: "rgb(100,100,100)",
            asm: "rgb(255,255,255)",
            zmo: "rgb(255,200,0)",
            rye: "triangle",
            eyw: 0
        },
        hwi: {
            font: "arial",
            zde: "bold",
            backgroundColor: "rgb(100,100,100)",
            qja: "rgb(15,15,15)",
            plt: "rgb(100,100,100)",
            fqq: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            asm: "rgb(255,255,255)",
            zmo: "rgb(255,200,0)",
            rye: "rect",
            eyw: -1
        },
        display: {
            zgw: "sans-serif",
            ntv: "sans-serif",
            zde: "bold",
            cxt: null,
            asm: "yellow",
            borderColor: "rgb(100,100,100)",
            dlt: null,
            backgroundColor: "black"
        },
        wni: {
            font: "arial",
            zde: "bold",
            backgroundColor: null,
            qja: null,
            asm: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.ckq = {
        font: "arial",
        zde: "bold",
        backgroundColor: "rgb(180,180,180)",
        qja: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        dlt: "rgb(30,30,30)",
        asm: "white",
        aly: {
            font: "arial",
            zde: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            qja: null,
            plt: "rgba(100,100,100,0.5)",
            fqq: null,
            borderColor: null,
            asm: "white",
            rye: "rect",
            eyw: -1
        },
        qls: {
            font: "arial",
            zde: "bold",
            backgroundColor: "rgb(255,255,255)",
            qja: "rgb(255,255,255)",
            plt: null,
            fqq: null,
            borderColor: "rgb(255,255,255)",
            asm: "rgb(0,0,0)",
            zmo: "rgb(0,0,0)",
            rye: "triangle",
            eyw: 1
        },
        bhi: {
            font: "arial",
            zde: "bold",
            backgroundColor: "rgb(255,255,255)",
            qja: "rgb(255,255,255)",
            plt: null,
            fqq: null,
            borderColor: "rgb(255,255,255)",
            asm: "rgb(0,0,0)",
            zmo: "rgb(0,0,0)",
            rye: "triangle",
            eyw: 0
        },
        msp: {
            rye: "rect",
            font: "arial",
            zde: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            asm: "white",
            auq: 1,
            borderColor: "rgb(255,255,255)",
            dlt: "rgb(220,220,220)"
        },
        display: {
            zgw: "sans-serif",
            ntv: "sans-serif",
            zde: "bold",
            cxt: null,
            asm: "white",
            borderColor: "white",
            dlt: null,
            backgroundColor: "rgb(0,0,0)"
        },
        wni: {
            font: "arial",
            zde: "bold",
            backgroundColor: null,
            qja: null,
            asm: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.npb = {
        siw: [{
            zgw: "sans-serif",
            eny: "sans-serif",
            zde: "bold",
            cxt: "rgb(236,225,207)",
            hke: "rgb(214,170,102)",
            dwm: "rgb(245,220,148)",
            mwu: "rgb(190,137,40)",
            dtu: "rgba(150,120,30,0.3)",
            borderColor: "rgb(150,110,30)",
            dlt: "rgb(200,170,50)",
            backgroundColor: "rgb(100,70,30)",
            qja: "rgb(0,0,0)",
            twr: "rgb(0,0,0)"
        }, {
            zgw: "sans-serif",
            eny: "sans-serif",
            zde: "bold",
            cxt: "rgb(230,230,230)",
            hke: "rgb(190,190,190)",
            dwm: "rgb(240,240,240)",
            mwu: "rgb(160,160,160)",
            dtu: "rgba(120,120,120,0.3)",
            borderColor: "rgb(120,120,120)",
            dlt: "rgb(170,170,170)",
            backgroundColor: "rgb(100,100,100)",
            qja: "rgb(0,0,0)",
            twr: "rgb(0,0,0)"
        }],
        zco: {
            zgw: "sans-serif",
            eny: "sans-serif",
            zde: "bold",
            cxt: "rgb(236,225,207)",
            hke: "rgb(214,170,102)",
            dwm: "rgb(245,220,148)",
            mwu: "rgb(190,137,40)",
            dtu: null,
            borderColor: null,
            dlt: null,
            backgroundColor: null,
            qja: null,
            twr: null
        },
        qzg: {}
    };
    this.axj = {
        yix: "rgb(240,240,240)",
        fsw: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        ksm: "rgba(0,80,150,0.6)",
        display: {
            ntv: "arial",
            zgw: "arial",
            zde: "bold",
            asm: "rgb(0,80,151)",
            cxt: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function jau() {
    this.uay.amj = false;
    this.uay.bap = false;
    this.dfq = {
        display: {
            ntv: "sans-serif",
            zgw: "sans-serif",
            zde: "bold",
            backgroundColor: "black",
            asm: "rgb(255,255,50)",
            cxt: "rgb(255,255,50)",
            borderColor: "rgb(230,230,230)",
            dlt: "rgb(160,160,160)"
        },
        mkt: {
            ntv: "sans-serif",
            zgw: "sans-serif",
            zde: "bold",
            backgroundColor: "rgba(0,0,0,0.8)",
            asm: "rgb(255,255,50)",
            cxt: "rgb(255,255,50)",
            borderColor: null,
            dlt: null
        },
        zev: {
            ntv: "arial",
            zgw: "arial",
            zde: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            asm: "white",
            cxt: "white",
            borderColor: null,
            dlt: null
        },
        czi: {
            font: "arial",
            zde: "bold",
            backgroundColor: "rgb(230,230,230)",
            qja: null,
            plt: null,
            fqq: null,
            borderColor: "rgb(230,230,230)",
            asm: "rgb(0,0,0)",
            zmo: "rgb(0,0,0)",
            rye: "rrect",
            eyw: 3
        },
        gqh: {
            font: "sans-serif",
            zde: "bold",
            asm: "rgb(255,255,50)",
            backgroundColor: "black",
            borderColor: null,
            dlt: null
        },
        veo: {
            backgroundColor: null,
            qja: null,
            kus: "rgb(0,0,0)",
            qze: "rgb(0,0,0)",
            wus: null,
            evg: 0.5,
            ocr: {
                rye: "rect",
                font: "verdana",
                zde: "bold",
                backgroundColor: "rgb(0,0,0)",
                kxn: "rgb(150,150,150)",
                asm: "rgb(255,255,255)",
                dwm: "rgb(255,255,0)",
                borderColor: "rgb(150,150,150)",
                dlt: "rgb(0,0,0)"
            },
            ohz: {
                rye: "round",
                font: "verdana",
                zde: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                kxn: "rgba(150,150,150,0.5)",
                asm: "rgb(255,255,255)",
                dwm: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                dlt: "rgb(100,100,100)"
            },
            zlz: {
                rye: "round",
                font: "verdana",
                zde: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                kxn: "rgba(150,150,150,0.5)",
                asm: "rgb(255,255,255)",
                dwm: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                dlt: "rgb(100,100,100)"
            },
            wtd: {
                rye: "rect",
                font: "verdana",
                zde: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                kxn: "rgba(150,150,150,0.5)",
                asm: "rgba(255,255,255,0.8)",
                dwm: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                dlt: "rgb(100,100,100)"
            },
            nfw: {
                rye: "rect",
                font: "verdana",
                zde: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                kxn: "rgba(150,150,150,0.5)",
                asm: "rgba(255,255,255,0.8)",
                dwm: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                dlt: "rgb(100,100,100)"
            },
            kmm: {
                font: "verdana",
                zde: "bold",
                backgroundColor: "rgb(75, 5, 5)",
                borderColor: null,
                asm: "rgb(255, 255, 50)"
            },
            win: {
                font: "helvetica",
                zde: "bold",
                backgroundColor: null,
                borderColor: null,
                asm: "rgb(240, 231, 203)"
            }
        }
    };
    this.iqc = {
        backgroundColor: null,
        kus: "rgb(0,0,0)",
        qze: "rgb(0,0,0)",
        display: {
            ntv: "sans-serif",
            zgw: "sans-serif",
            zde: "bold",
            backgroundColor: "black",
            asm: "yellow",
            cxt: "yellow",
            borderColor: "rgb(230,230,230)",
            dlt: "rgb(160,160,160)"
        },
        zev: {
            ntv: "arial",
            zgw: "arial",
            zde: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            asm: "white",
            cxt: "white",
            borderColor: null,
            dlt: null
        },
        aeb: {
            ntv: "verdana",
            zgw: "verdana",
            zde: "bold",
            cxt: "white",
            asm: "yellow"
        },
        ocr: {
            rye: "rect",
            font: "verdana",
            zde: "bold",
            backgroundColor: "rgb(0,0,0)",
            kxn: "rgb(150,150,150)",
            asm: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            dlt: "rgb(0,0,0)"
        },
        ohz: {
            rye: "round",
            font: "verdana",
            zde: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            kxn: "rgba(150,150,150,0.5)",
            asm: "rgb(255,255,255)",
            dwm: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            dlt: "rgb(100,100,100)"
        },
        zlz: {
            rye: "round",
            font: "verdana",
            zde: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            kxn: "rgba(150,150,150,0.5)",
            asm: "rgb(255,255,255)",
            dwm: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            dlt: "rgb(100,100,100)"
        },
        kmm: {
            font: "verdana",
            zde: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            asm: "rgb(255, 255, 0)"
        }
    };
    this.ajq = {
        backgroundColor: null,
        kus: "rgb(0,0,0)",
        qze: "rgb(0,0,0)",
        ocr: {
            rye: "rect",
            font: "verdana",
            zde: "bold",
            backgroundColor: "rgb(0,0,0)",
            kxn: "rgb(150,150,150)",
            asm: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            dlt: "rgb(0,0,0)"
        },
        ohz: {
            rye: "round",
            font: "verdana",
            zde: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            kxn: "rgba(150,150,150,0.5)",
            asm: "rgb(255,255,255)",
            dwm: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            dlt: "rgb(100,100,100)"
        },
        zlz: {
            rye: "round",
            font: "verdana",
            zde: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            kxn: "rgba(150,150,150,0.5)",
            asm: "rgb(255,255,255)",
            dwm: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            dlt: "rgb(100,100,100)"
        }
    };
    this.vwe = {
        oxi: 0,
        wus: "rgba(0,0,0,0)",
        fzx: "rgba(0,0,0,0.5)"
    };
    this.fqr = {
        dzi: "rgb(255,0,0)",
        gog: "rgb(255,255,0)",
        mmw: "white",
        oyb: null,
        dxy: 0,
        etb: 0.05,
        zsr: [{
            aww: "rgb(180,180,30)",
            jdy: "rgb(255,220,0)",
            ipg: "rgb(180,180,30)",
            cxd: "rgb(255,255,0)"
        }, {
            aww: "rgb(210,110,0)",
            jdy: "rgb(255,168,0)",
            ipg: "rgb(210,110,0)",
            cxd: "rgb(255,210,50)"
        }, {
            aww: "rgb(0,50,180)",
            jdy: "rgb(0,68,220)",
            ipg: "rgb(0,50,180)",
            cxd: "rgb(0,100,255)"
        }, {
            aww: "rgb(0,160,64)",
            jdy: "rgb(0,200,80)",
            ipg: "rgb(0,160,64)",
            cxd: "rgb(0,255,70)"
        }, {
            aww: "rgb(140,30,140)",
            jdy: "rgb(200,0,200)",
            ipg: "rgb(140,30,140)",
            cxd: "rgb(255,30,255)"
        }, {
            aww: "rgb(180,180,30)",
            jdy: "rgb(255,220,0)",
            ipg: "rgb(180,180,30)",
            cxd: "rgb(255,255,0)"
        }, {
            aww: "rgba(200,200,50,0.7)",
            jdy: "rgba(255,255,150,0.7)",
            ipg: "rgba(200,200,50,0.7)",
            cxd: "rgba(255,255,150,0.7)"
        }]
    };
    this.fin = {
        font: "sans-serif",
        zde: "bold",
        jud: "red",
        crn: "orange",
        lka: "white"
    };
    this.ijv = {
        font: "sans-serif",
        zde: "bold",
        jud: "red",
        crn: "orange",
        lka: "white"
    };
    this.hrt = {
        font: "sans-serif",
        zde: "bold",
        asm: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        epv: "rgb(0,0,0)",
        rxn: "rgb(255,0,0)",
        tne: "rgb(255,255,0)",
        kyt: "rgb(80,80,80)",
        nbu: "rgb(15,15,15)",
        zca: "rgb(0,0,0)",
        ili: "rgb(180,180,180)",
        rnw: "rgb(0,0,0)",
        mlx: 0.7
    }
}
jau.prototype = new oxd;

function zul() {
    this.uay.bap = true;
    this.dfq.gqh.backgroundColor = "rgba(0, 0, 0, 0.3)";
    this.dfq.gqh.borderColor = "rgb(219, 130, 8)";
    this.dfq.veo.kmm.backgroundColor = "rgba(0, 0, 0, 0.3)";
    this.dfq.veo.kmm.borderColor = "rgb(219, 130, 8)";
    this.dfq.veo.ocr.backgroundColor = "rgb(60,6,0)";
    this.dfq.veo.ocr.kxn = "rgb(150,20,20)";
    this.dfq.veo.ocr.borderColor = "rgb(80,8,0)";
    this.dfq.veo.ocr.dlt = "rgb(40,4,0)";
    this.dfq.veo.wtd.backgroundColor = "rgba(0,0,0,0.5)";
    this.dfq.veo.wtd.kxn = "rgba(255,200,40,0.7)";
    this.dfq.veo.wtd.borderColor = "rgb(255,220,50)";
    this.dfq.veo.wtd.dlt = "rgb(150,60,10)";
    this.dfq.veo.nfw.backgroundColor = "rgba(0,0,0,0.5)";
    this.dfq.veo.nfw.kxn = "rgba(255,200,40,0.7)";
    this.dfq.veo.nfw.borderColor = "rgb(255,220,50)";
    this.dfq.veo.nfw.dlt = "rgb(150,60,10)";
    this.dfq.veo.ohz.backgroundColor = "rgba(0,0,0,0.5)";
    this.dfq.veo.ohz.kxn = "rgba(255,200,40,0.7)";
    this.dfq.veo.ohz.borderColor = "rgb(255,220,50)";
    this.dfq.veo.ohz.dlt = "rgb(150,60,10)";
    this.dfq.veo.zlz.backgroundColor = "rgba(0,0,0,0.5)";
    this.dfq.veo.zlz.kxn = "rgba(255,200,40,0.7)";
    this.dfq.veo.zlz.borderColor = "rgb(255,220,50)";
    this.dfq.veo.zlz.dlt = "rgb(150,60,10)";
    this.iqc.kmm.backgroundColor = "rgba(0, 0, 0, 0.3)";
    this.iqc.kmm.borderColor = "rgb(219, 130, 8)";
    this.iqc.ocr.backgroundColor = "rgb(60,6,0)";
    this.iqc.ocr.borderColor = "rgb(80,8,0)";
    this.iqc.ocr.dlt = "rgb(40,4,0)";
    this.iqc.ohz.backgroundColor = "rgba(0,0,0,0.5)";
    this.iqc.ohz.borderColor = "rgb(255,220,50)";
    this.iqc.ohz.dlt = "rgb(150,60,10)";
    this.iqc.zlz.backgroundColor = "rgba(0,0,0,0.5)";
    this.iqc.zlz.borderColor = "rgb(255,220,50)";
    this.iqc.zlz.dlt = "rgb(150,60,10)";
    this.ajq.ocr.backgroundColor = "rgb(60,6,0)";
    this.ajq.ocr.borderColor = "rgb(80,8,0)";
    this.ajq.ocr.dlt = "rgb(40,4,0)";
    this.ajq.ohz.backgroundColor = "rgba(0,0,0,0.5)";
    this.ajq.ohz.borderColor = "rgb(255,220,50)";
    this.ajq.ohz.dlt = "rgb(150,60,10)";
    this.ajq.zlz.backgroundColor = "rgba(0,0,0,0.5)";
    this.ajq.zlz.borderColor = "rgb(255,220,50)";
    this.ajq.zlz.dlt = "rgb(150,60,10)";
    this.ajq.mwo = {
        font: "sans-serif",
        zgw: "verdana",
        cxt: "white",
        zde: "bold",
        asm: "yellow"
    };
    this.ajq.dka = {
        font: "sans-serif",
        zde: "bold",
        asm: "yellow",
        rrj: "sans-serif",
        urv: "verdana",
        xpj: "bold",
        njy: "white",
        aqg: "white"
    };
    this.wij.veo.ocr.backgroundColor = "rgb(60,6,0)";
    this.vwe.wus = "rgba(0,0,0,0.35)";
    this.fqr = {
        dzi: "rgb(255,100,0)",
        gog: "rgb(255,200,0)",
        mmw: "rgb(255,255,255)",
        oyb: null,
        dxy: 1,
        etb: 0.025,
        zsr: [{
            aww: "rgb(100,0,0)",
            jdy: "rgb(190,0,0)",
            ipg: "rgb(100,0,0)",
            cxd: "rgb(255,0,0)"
        }, {
            aww: "rgb(0,0,100)",
            jdy: "rgb(0,0,180)",
            ipg: "rgb(0,0,100)",
            cxd: "rgb(0,0,255)"
        }, {
            aww: "rgb(0,100,0)",
            jdy: "rgb(0,180,0)",
            ipg: "rgb(0,100,0)",
            cxd: "rgb(0,255,0)"
        }, {
            aww: "rgb(130,100,0)",
            jdy: "rgb(200,150,0)",
            ipg: "rgb(130,100,0)",
            cxd: "rgb(255,200,0)"
        }, {
            aww: "rgb(110,0,100)",
            jdy: "rgb(145,0,135)",
            ipg: "rgb(110,0,100)",
            cxd: "rgb(255,0,240)"
        }, {
            aww: "rgb(0,80,80)",
            jdy: "rgb(0,130,130)",
            ipg: "rgb(0,80,80)",
            cxd: "rgb(0,240,240)"
        }, {
            aww: "rgb(100,0,40)",
            jdy: "rgb(180,0,60)",
            ipg: "rgb(100,0,40)",
            cxd: "rgb(255,0,80)"
        }, {
            aww: "rgb(0,55,90)",
            jdy: "rgb(10,100,150)",
            ipg: "rgb(0,55,90)",
            cxd: "rgb(10,160,255)"
        }, {
            aww: "rgb(135,70,0)",
            jdy: "rgb(210,110,0)",
            ipg: "rgb(135,70,0)",
            cxd: "rgb(255,130,0)"
        }, {
            aww: "rgb(80,110,0)",
            jdy: "rgb(150,205,0)",
            ipg: "rgb(80,110,0)",
            cxd: "rgb(190,255,0)"
        }, {
            aww: "rgb(0,70,90)",
            jdy: "rgb(0,130,160)",
            ipg: "rgb(0,70,90)",
            cxd: "rgb(0,200,255)"
        }, {
            aww: "rgb(100,30,80)",
            jdy: "rgb(180,65,140)",
            ipg: "rgb(100,30,80)",
            cxd: "rgb(255,70,200)"
        }, {
            aww: "rgb(130,90,10)",
            jdy: "rgb(210,140,15)",
            ipg: "rgb(130,90,10)",
            cxd: "rgb(255,170,15)"
        }, {
            aww: "rgb(0,120,120)",
            jdy: "rgb(0,190,190)",
            ipg: "rgb(0,120,120)",
            cxd: "rgb(0,255,255)"
        }, {
            aww: "rgb(150,60,0)",
            jdy: "rgb(200,80,0)",
            ipg: "rgb(150,60,0)",
            cxd: "rgb(255,100,0)"
        }, {
            aww: "rgb(120,0,60)",
            jdy: "rgb(200,0,100)",
            ipg: "rgb(120,0,60)",
            cxd: "rgb(255,0,130)"
        }, {
            aww: "rgb(80,80,80)",
            jdy: "rgb(140,140,140)",
            ipg: "rgb(80,80,80)",
            cxd: "rgb(240,240,240)"
        }, {
            aww: "rgb(100,30,0)",
            jdy: "rgb(170,50,0)",
            ipg: "rgb(100,30,0)",
            cxd: "rgb(255,70,0)"
        }, {
            aww: "rgb(130,100,50)",
            jdy: "rgb(200,150,80)",
            ipg: "rgb(130,100,50)",
            cxd: "rgb(255,200,100)"
        }, {
            aww: "rgb(0,90,30)",
            jdy: "rgb(0,150,60)",
            ipg: "rgb(0,90,30)",
            cxd: "rgb(0,220,80)"
        }, {
            aww: "rgb(100,0,0)",
            jdy: "rgb(190,0,0)",
            ipg: "rgb(100,0,0)",
            cxd: "rgb(255,0,0)"
        }, {
            aww: "rgba(200,200,50,0.7)",
            jdy: "rgba(255,255,150,0.7)",
            ipg: "rgba(200,200,50,0.7)",
            cxd: "rgba(255,255,150,0.7)"
        }]
    };
    this.ckq.backgroundColor = "rgb(70,15,5)";
    this.ckq.qja = "rgb(20,5,0)"
}
zul.prototype = new jau;

function qth() {
    this.type = "800_600";
    this.znl = true;
    this.eew = false;
    this.veh = false;
    this.nos = true;
    this.erm = false;
    this.sya = false;
    this.ofp = false;
    this.ibz = false
}

function yfy() {
    this.znl = false;
    this.canvas = {
        sde: new bzm(0, 0, 800, 620)
    };
    this.gbr = {
        sde: new bzm(),
        paq: 0
    };
    this.uay = {
        sde: new bzm(0, 20, 800, 600),
        dmp: 0
    };
    this.fho = {
        jlw: new bzm(0, 40, 440, 36),
        tvn: new bzm(5, 2, 140, 30),
        lic: new bzm(150, 2, 140, 30),
        wio: new bzm(295, 2, 140, 30),
        dtm: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.hbo = {
        uay: {
            sde: new bzm(0, 0, 500, 360),
            cqr: new bzm(0, 0, 500, 360),
            fwc: new bzm(5, 325, 490, 30),
            avj: new bzm(5, 329, 490, 14),
            ftl: new bzm(50, 345, 400, 6),
            nyi: new bzm(5, 285, 490, 70),
            fontSize: 14,
            ejs: 18,
            jvl: 5,
            dmm: 12,
            qic: 5,
            hzi: 2,
            vgt: 0,
            fqr: {
                sde: new bzm(),
                x: 0,
                tow: 0,
                aaz: 0
            },
            eml: {
                cqr: new bzm(),
                avj: new bzm(),
                hml: new bzm()
            }
        },
        pzu: {
            sde: new bzm(0, 0, 800, 600),
            cqr: new bzm(140, 105, 520, 390),
            fwc: new bzm(),
            avj: new bzm(140, 295, 520, 21),
            ftl: new bzm(192, 320, 416, 3),
            nyi: new bzm(140, 275, 520, 95),
            fontSize: 18,
            ejs: 24,
            jvl: 0,
            dmm: 12,
            qic: 7,
            hzi: 3,
            vgt: 9,
            fqr: {
                sde: new bzm(400, 459, 0, 3),
                x: 33,
                tow: 15,
                aaz: 20
            },
            eml: {
                cqr: new bzm(50, 0, 700, 450),
                avj: new bzm(100, 460, 600, 60),
                hml: new bzm(200, 540, 400, 40)
            }
        },
        lxn: {
            sde: new bzm(0, 0, 800, 600),
            cqr: new bzm(0, 0, 800, 600),
            fwc: new bzm(),
            avj: new bzm(50, 420, 700, 21),
            ftl: new bzm(),
            nyi: new bzm(50, 410, 700, 80),
            fontSize: 18,
            ejs: 24,
            jvl: 0,
            dmm: 12,
            qic: 7,
            hzi: 0,
            vgt: 0,
            fqr: {
                sde: new bzm(260, 119, 280, 280),
                x: 0,
                tow: 0,
                aaz: 0
            },
            eml: {
                cqr: new bzm(50, 0, 700, 450),
                avj: new bzm(100, 460, 600, 60),
                hml: new bzm(200, 540, 400, 40)
            }
        }
    };
    this.soi = {
        sde: new bzm(0, 0, 800, 20),
        fontSize: 12,
        kff: 19,
        nef: 15,
        jsr: 120,
        dmm: 2,
        qic: 2,
        amf: 2,
        jpm: 40
    };
    this.wij = {
        sde: new bzm(0, 20, 800, 70),
        fontSize: 10,
        otp: 10,
        utm: 20,
        zms: 40,
        dmp: 4,
        dmm: 10,
        qic: 5,
        jvl: 10,
        dtm: {
            fontSize: 17,
            jvl: 2
        }
    };
    this.sjx = {
        sde: new bzm(0, 20, 800, 600),
        jlw: new bzm(),
        dtm: {
            zcw: 20,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 8,
            qbk: 8,
            dmp: 0
        },
        hvq: new bzm(0, 20, 800, 40),
        fqp: new bzm(0, 100, 800, 40),
        wqa: new bzm(0, 140, 800, 40),
        tdf: new bzm(0, 180, 800, 40),
        xlc: new bzm(225, 275, 350, 100),
        wyk: new bzm(200, 480, 400, 40),
        wim: {
            mps: new bzm(340, 540, 120, 55)
        },
        slg: {
            mps: new bzm(250, 540, 120, 55),
            lar: new bzm(430, 540, 120, 55)
        },
        wen: 36,
        fontSize: 30,
        agv: 22,
        qic: 3,
        dmm: 5,
        dmp: 2,
        mxk: 3,
        ouk: 10
    };
    this.awv = {
        sde: new bzm(-10, 25, 310, 50),
        hvq: new bzm(10, 4, 240, 24),
        avj: new bzm(10, 28, 240, 18),
        acz: new bzm(260, 10, 40, 30),
        wyh: new bzm(7, 2, 26, 26),
        hnp: 16,
        zcw: 12,
        twt: 18
    };
    this.fkb = {
        sde: new bzm(150, 160, 500, 280),
        hnp: 26,
        fontSize: 20,
        pcv: new bzm(465, 5, 30, 30),
        hvq: new bzm(30, 5, 440, 30),
        wyk: new bzm(20, 40, 460, 160),
        sqn: new bzm(20, 230, 460, 40),
        dtm: {
            fontSize: 20
        }
    };
    this.ffp = {
        sde: new bzm(0, 55, 560, 430),
        dmp: 2,
        ebw: 0,
        jjq: 5,
        zaa: 10,
        hnp: 26,
        oub: 20,
        hvq: new bzm(30, 15, 500, 30),
        bei: new bzm(20, 50, 520, 60),
        qpr: new bzm(40, 60, 220, 40),
        rqp: new bzm(328, 60, 30, 40),
        uhy: new bzm(360, 60, 120, 40),
        khc: new bzm(482, 60, 30, 40),
        mml: new bzm(20, 120, 520, 200),
        svp: new bzm(40, 120, 480, 40),
        mmx: new bzm(30, 160, 280, 40),
        txm: new bzm(328, 160, 30, 40),
        xkg: new bzm(360, 160, 120, 40),
        tww: new bzm(482, 160, 30, 40),
        yao: new bzm(30, 215, 280, 40),
        ybe: new bzm(328, 215, 30, 40),
        tsx: new bzm(360, 215, 120, 40),
        dym: new bzm(482, 215, 30, 40),
        bbd: new bzm(30, 270, 280, 40),
        sbs: new bzm(328, 270, 30, 40),
        vgw: new bzm(360, 270, 120, 40),
        phn: new bzm(482, 270, 30, 40),
        fwc: new bzm(30, 330, 500, 30),
        tlv: new bzm(210, 370, 140, 50),
        mqy: new bzm(),
        wni: {
            avj: new bzm(40, 0, 240, 40),
            mca: new bzm(7, 12, 16, 16),
            fontSize: 20,
            yhq: 0,
            dmp: 2
        },
        bhi: {
            yhq: 3,
            dmm: -5,
            qic: -1,
            qbk: 6,
            fontSize: 20,
            dmp: 0
        },
        qls: {
            yhq: 3,
            dmm: 5,
            qic: 0,
            qbk: 6,
            fontSize: 20,
            dmp: 0
        },
        hwi: {
            yhq: 6,
            dmm: 0,
            qic: 0,
            qbk: 6,
            fontSize: 26,
            dmp: 2
        },
        display: {
            hnp: 16,
            zcw: 24,
            wci: 0,
            nrj: 0,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        }
    };
    this.npb = {
        sde: [new bzm(2, 20, 130, 46), new bzm(668, 20, 130, 46)],
        display: {
            bok: new bzm(6, 16, 118, 22),
            hnp: 14,
            lto: 20,
            wci: -11,
            ffc: 10,
            jvl: 8,
            dmp: 3,
            bha: 0,
            cxh: 4
        },
        zco: {
            sde: new bzm(50, 130, 700, 300),
            bok: new bzm(),
            hnp: 66,
            lto: 150,
            wci: -90,
            ffc: 60,
            jvl: 10,
            dmp: 0,
            bha: 0,
            cxh: 0
        },
        qzg: {
            sde: new bzm(38, 80, 724, 369),
            mew: new bzm(100, 53, 525, 50),
            bok: new bzm(186, 153, 332, 94),
            shp: 340,
            nhi: 30,
            cty: {
                _0: new bzm(2, 0, 90, 94),
                _1: new bzm(98, 0, 90, 94),
                _2: new bzm(194, 0, 90, 94),
                _3: new bzm(290, 0, 90, 94),
                _4: new bzm(386, 0, 90, 94),
                _5: new bzm(482, 0, 90, 94),
                _6: new bzm(578, 0, 90, 94),
                _7: new bzm(674, 0, 90, 94),
                _8: new bzm(770, 0, 90, 94),
                _9: new bzm(866, 0, 90, 94),
                _cm: new bzm(962, 0, 28, 94),
                _dt: new bzm(999, 0, 28, 94),
                _sp: new bzm(1036, 0, 28, 94)
            }
        }
    }
}
yfy.prototype = new qth;

function aqv() {
    this.eew = true
}
aqv.prototype = new yfy;

function wpo() {
    this.erm = true;
    this.veh = true;
    this.znl = false;
    this.eew = true;
    this.canvas = {
        sde: new bzm(0, 0, 800, 1165)
    };
    this.gbr = {
        sde: new bzm(),
        paq: 0
    };
    this.uay = {
        sde: new bzm(0, 550, 800, 615),
        dmp: 10
    };
    this.fho = {
        jlw: new bzm(0, 330, 440, 36),
        tvn: new bzm(5, 2, 140, 30),
        lic: new bzm(150, 2, 140, 30),
        wio: new bzm(295, 2, 140, 30),
        dtm: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.hbo = {
        uay: {
            sde: new bzm(0, 0, 500, 360),
            cqr: new bzm(0, 0, 500, 360),
            fwc: new bzm(5, 325, 490, 30),
            avj: new bzm(5, 329, 490, 14),
            ftl: new bzm(50, 345, 400, 6),
            nyi: new bzm(5, 285, 490, 70),
            fontSize: 14,
            ejs: 18,
            jvl: 5,
            dmm: 12,
            qic: 5,
            hzi: 2,
            vgt: 0,
            fqr: {
                sde: new bzm(),
                x: 0,
                tow: 0,
                aaz: 0
            },
            eml: {
                cqr: new bzm(),
                avj: new bzm(),
                hml: new bzm()
            }
        },
        pzu: {
            sde: new bzm(0, 0, 800, 600),
            cqr: new bzm(100, 75, 600, 450),
            fwc: new bzm(),
            avj: new bzm(100, 295, 600, 24),
            ftl: new bzm(160, 325, 480, 3),
            nyi: new bzm(100, 265, 600, 115),
            fontSize: 21,
            ejs: 26,
            jvl: 0,
            dmm: 12,
            qic: 8,
            hzi: 3,
            vgt: 10,
            fqr: {
                sde: new bzm(400, 484, 0, 3),
                x: 38,
                tow: 17,
                aaz: 23
            },
            eml: {
                cqr: new bzm(50, 0, 700, 450),
                avj: new bzm(100, 460, 600, 60),
                hml: new bzm(200, 540, 400, 40)
            }
        },
        lxn: {
            sde: new bzm(0, 0, 800, 600),
            cqr: new bzm(0, 0, 800, 600),
            fwc: new bzm(),
            avj: new bzm(50, 420, 700, 21),
            ftl: new bzm(),
            nyi: new bzm(50, 410, 700, 80),
            fontSize: 18,
            ejs: 24,
            jvl: 0,
            dmm: 12,
            qic: 7,
            hzi: 0,
            vgt: 0,
            fqr: {
                sde: new bzm(260, 119, 280, 280),
                x: 0,
                tow: 0,
                aaz: 0
            },
            eml: {
                cqr: new bzm(50, 0, 700, 450),
                avj: new bzm(100, 460, 600, 60),
                hml: new bzm(200, 540, 400, 40)
            }
        }
    };
    this.top = {
        sde: new bzm(0, 20, 800, 520)
    };
    this.soi = {
        sde: new bzm(0, 0, 800, 20),
        fontSize: 12,
        kff: 19,
        nef: 15,
        jsr: 120,
        dmm: 2,
        qic: 2,
        amf: 2,
        jpm: 60
    };
    this.wij = {
        sde: new bzm(0, 20, 800, 70),
        fontSize: 10,
        otp: 10,
        utm: 20,
        zms: 40,
        dmp: 4,
        dmm: 10,
        qic: 5,
        jvl: 10,
        dtm: {
            fontSize: 17,
            jvl: 2
        }
    };
    this.sjx = {
        sde: new bzm(0, 550, 800, 615),
        jlw: new bzm(),
        dtm: {
            zcw: 26,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 10,
            qbk: 10,
            dmp: 2
        },
        hvq: new bzm(0, 20, 800, 40),
        fqp: new bzm(0, 100, 800, 40),
        wqa: new bzm(0, 140, 800, 40),
        tdf: new bzm(0, 180, 800, 40),
        xlc: new bzm(225, 275, 350, 100),
        wyk: new bzm(200, 480, 400, 40),
        wim: {
            mps: new bzm(340, 540, 120, 68)
        },
        slg: {
            mps: new bzm(250, 540, 120, 68),
            lar: new bzm(430, 540, 120, 68)
        },
        wen: 36,
        fontSize: 30,
        agv: 22,
        qic: 3,
        dmm: 5,
        dmp: 2,
        mxk: 3,
        ouk: 10,
    };
    this.awv = {
        sde: new bzm(-10, 545, 310, 50),
        hvq: new bzm(10, 4, 240, 24),
        avj: new bzm(10, 28, 240, 18),
        acz: new bzm(260, 10, 40, 30),
        wyh: new bzm(7, 2, 26, 26),
        hnp: 16,
        zcw: 12,
        twt: 18
    };
    this.fkb = {
        sde: new bzm(150, 690, 500, 280),
        hnp: 26,
        fontSize: 20,
        pcv: new bzm(465, 5, 30, 30),
        hvq: new bzm(30, 5, 440, 40),
        wyk: new bzm(20, 40, 460, 160),
        sqn: new bzm(20, 230, 460, 40),
        dtm: {
            fontSize: 20
        }
    };
    this.ffp = {
        sde: new bzm(0, 585, 560, 430),
        dmp: 2,
        ebw: 0,
        jjq: 5,
        zaa: 10,
        hnp: 26,
        oub: 20,
        hvq: new bzm(30, 15, 500, 30),
        bei: new bzm(20, 50, 520, 60),
        qpr: new bzm(40, 60, 220, 40),
        rqp: new bzm(328, 60, 30, 40),
        uhy: new bzm(360, 60, 120, 40),
        khc: new bzm(482, 60, 30, 40),
        mml: new bzm(20, 120, 520, 200),
        svp: new bzm(40, 120, 480, 40),
        mmx: new bzm(30, 160, 280, 40),
        txm: new bzm(328, 160, 30, 40),
        xkg: new bzm(360, 160, 120, 40),
        tww: new bzm(482, 160, 30, 40),
        yao: new bzm(30, 215, 280, 40),
        ybe: new bzm(328, 215, 30, 40),
        tsx: new bzm(360, 215, 120, 40),
        dym: new bzm(482, 215, 30, 40),
        bbd: new bzm(30, 270, 280, 40),
        sbs: new bzm(328, 270, 30, 40),
        vgw: new bzm(360, 270, 120, 40),
        phn: new bzm(482, 270, 30, 40),
        fwc: new bzm(30, 330, 500, 30),
        tlv: new bzm(210, 370, 140, 50),
        mqy: new bzm(),
        wni: {
            avj: new bzm(40, 0, 240, 40),
            mca: new bzm(7, 12, 16, 16),
            fontSize: 20,
            yhq: 0,
            dmp: 2
        },
        bhi: {
            yhq: 3,
            dmm: -5,
            qic: -1,
            qbk: 6,
            fontSize: 20,
            dmp: 0
        },
        qls: {
            yhq: 3,
            dmm: 5,
            qic: 0,
            qbk: 6,
            fontSize: 20,
            dmp: 0
        },
        hwi: {
            yhq: 6,
            dmm: 0,
            qic: 0,
            qbk: 6,
            fontSize: 26,
            dmp: 2
        },
        display: {
            hnp: 16,
            zcw: 24,
            wci: 0,
            nrj: 0,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        }
    };
    this.npb = {
        sde: [new bzm(2, 550, 130, 46), new bzm(668, 550, 130, 46)],
        display: {
            bok: new bzm(6, 16, 118, 23),
            hnp: 14,
            lto: 20,
            wci: -11,
            ffc: 10,
            jvl: 8,
            dmp: 3,
            bha: 0,
            cxh: 4
        },
        zco: {
            sde: new bzm(50, 660, 700, 300),
            bok: new bzm(),
            hnp: 66,
            lto: 150,
            wci: -90,
            ffc: 60,
            jvl: 10,
            dmp: 0,
            bha: 0,
            cxh: 0
        },
        qzg: {
            sde: new bzm(38, 610, 724, 369),
            mew: new bzm(100, 53, 525, 50),
            bok: new bzm(186, 153, 332, 94),
            shp: 360,
            nhi: 30,
            cty: {
                _0: new bzm(2, 0, 90, 94),
                _1: new bzm(98, 0, 90, 94),
                _2: new bzm(194, 0, 90, 94),
                _3: new bzm(290, 0, 90, 94),
                _4: new bzm(386, 0, 90, 94),
                _5: new bzm(482, 0, 90, 94),
                _6: new bzm(578, 0, 90, 94),
                _7: new bzm(674, 0, 90, 94),
                _8: new bzm(770, 0, 90, 94),
                _9: new bzm(866, 0, 90, 94),
                _cm: new bzm(962, 0, 28, 94),
                _dt: new bzm(999, 0, 28, 94),
                _sp: new bzm(1036, 0, 28, 94)
            }
        }
    }
}
wpo.prototype = new qth;

function juj() {
    this.veh = true;
    this.canvas = {
        sde: new bzm(0, 0, 810, 625)
    };
    this.gbr = {
        sde: new bzm(),
        paq: 0
    };
    this.uay = {
        sde: new bzm(5, 20, 800, 600),
        dmp: 20
    };
    this.fho = {
        jlw: new bzm(5, 40, 440, 36),
        tvn: new bzm(5, 2, 140, 30),
        lic: new bzm(150, 2, 140, 30),
        wio: new bzm(295, 2, 140, 30),
        dtm: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.hbo = {
        uay: {
            sde: new bzm(0, 0, 500, 360),
            cqr: new bzm(0, 0, 500, 360),
            fwc: new bzm(5, 325, 490, 30),
            avj: new bzm(5, 329, 490, 14),
            ftl: new bzm(50, 345, 400, 6),
            nyi: new bzm(5, 285, 490, 70),
            fontSize: 14,
            ejs: 18,
            jvl: 5,
            dmm: 12,
            qic: 5,
            hzi: 2,
            vgt: 0,
            fqr: {
                sde: new bzm(),
                x: 0,
                tow: 0,
                aaz: 0
            },
            eml: {
                cqr: new bzm(),
                avj: new bzm(),
                hml: new bzm()
            }
        },
        pzu: {
            sde: new bzm(0, 0, 800, 600),
            cqr: new bzm(140, 105, 520, 390),
            fwc: new bzm(),
            avj: new bzm(140, 295, 520, 21),
            ftl: new bzm(192, 320, 416, 3),
            nyi: new bzm(140, 275, 520, 95),
            fontSize: 18,
            ejs: 24,
            jvl: 0,
            dmm: 12,
            qic: 7,
            hzi: 3,
            vgt: 9,
            fqr: {
                sde: new bzm(400, 459, 0, 3),
                x: 33,
                tow: 15,
                aaz: 20
            },
            eml: {
                cqr: new bzm(50, 0, 700, 450),
                avj: new bzm(100, 460, 600, 60),
                hml: new bzm(200, 540, 400, 40)
            }
        },
        lxn: {
            sde: new bzm(0, 0, 800, 600),
            cqr: new bzm(0, 0, 800, 600),
            fwc: new bzm(),
            avj: new bzm(50, 420, 700, 21),
            ftl: new bzm(),
            nyi: new bzm(50, 410, 700, 80),
            fontSize: 18,
            ejs: 24,
            jvl: 0,
            dmm: 12,
            qic: 7,
            hzi: 0,
            vgt: 0,
            fqr: {
                sde: new bzm(260, 119, 280, 280),
                x: 0,
                tow: 0,
                aaz: 0
            },
            eml: {
                cqr: new bzm(50, 0, 700, 450),
                avj: new bzm(100, 460, 600, 60),
                hml: new bzm(200, 540, 400, 40)
            }
        }
    };
    this.soi = {
        sde: new bzm(5, 0, 800, 20),
        fontSize: 12,
        kff: 19,
        nef: 15,
        jsr: 120,
        dmm: 2,
        qic: 2,
        amf: 2,
        jpm: 40
    };
    this.wij = {
        sde: new bzm(5, 20, 800, 70),
        fontSize: 10,
        otp: 10,
        utm: 20,
        zms: 40,
        dmp: 4,
        dmm: 10,
        qic: 5,
        jvl: 10,
        dtm: {
            fontSize: 17,
            jvl: 2
        }
    };
    this.sjx = {
        sde: new bzm(5, 20, 800, 600),
        jlw: new bzm(),
        dtm: {
            zcw: 20,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 8,
            qbk: 8,
            dmp: 2
        },
        hvq: new bzm(0, 20, 800, 40),
        fqp: new bzm(0, 100, 800, 40),
        wqa: new bzm(0, 140, 800, 40),
        tdf: new bzm(0, 180, 800, 40),
        xlc: new bzm(225, 275, 350, 100),
        wyk: new bzm(200, 480, 400, 40),
        wim: {
            mps: new bzm(340, 540, 120, 55)
        },
        slg: {
            mps: new bzm(250, 540, 120, 55),
            lar: new bzm(430, 540, 120, 55)
        },
        wen: 36,
        fontSize: 30,
        agv: 22,
        qic: 3,
        dmm: 5,
        dmp: 2,
        mxk: 3,
        ouk: 10
    };
    this.awv = {
        sde: new bzm(-10, 25, 310, 50),
        hvq: new bzm(10, 4, 240, 24),
        avj: new bzm(10, 28, 240, 18),
        acz: new bzm(260, 10, 40, 30),
        wyh: new bzm(7, 2, 26, 26),
        hnp: 16,
        zcw: 12,
        twt: 18
    };
    this.fkb = {
        sde: new bzm(155, 160, 500, 280),
        hnp: 26,
        fontSize: 20,
        pcv: new bzm(465, 5, 30, 30),
        hvq: new bzm(30, 5, 440, 40),
        wyk: new bzm(20, 40, 460, 160),
        sqn: new bzm(20, 230, 460, 40),
        dtm: {
            fontSize: 20
        }
    };
    this.ffp = {
        sde: new bzm(5, 55, 560, 430),
        dmp: 2,
        ebw: 0,
        jjq: 5,
        zaa: 10,
        hnp: 26,
        oub: 20,
        hvq: new bzm(30, 15, 500, 30),
        bei: new bzm(20, 50, 520, 60),
        qpr: new bzm(40, 60, 220, 40),
        rqp: new bzm(328, 60, 30, 40),
        uhy: new bzm(360, 60, 120, 40),
        khc: new bzm(482, 60, 30, 40),
        mml: new bzm(20, 120, 520, 200),
        svp: new bzm(40, 120, 480, 40),
        mmx: new bzm(30, 160, 280, 40),
        txm: new bzm(328, 160, 30, 40),
        xkg: new bzm(360, 160, 120, 40),
        tww: new bzm(482, 160, 30, 40),
        yao: new bzm(30, 215, 280, 40),
        ybe: new bzm(328, 215, 30, 40),
        tsx: new bzm(360, 215, 120, 40),
        dym: new bzm(482, 215, 30, 40),
        bbd: new bzm(30, 270, 280, 40),
        sbs: new bzm(328, 270, 30, 40),
        vgw: new bzm(360, 270, 120, 40),
        phn: new bzm(482, 270, 30, 40),
        fwc: new bzm(30, 330, 500, 30),
        tlv: new bzm(210, 370, 140, 50),
        mqy: new bzm(),
        wni: {
            avj: new bzm(40, 0, 240, 40),
            mca: new bzm(7, 12, 16, 16),
            fontSize: 20,
            yhq: 0,
            dmp: 2
        },
        bhi: {
            yhq: 3,
            dmm: -5,
            qic: -1,
            qbk: 6,
            fontSize: 20,
            dmp: 0
        },
        qls: {
            yhq: 3,
            dmm: 5,
            qic: 0,
            qbk: 6,
            fontSize: 20,
            dmp: 0
        },
        hwi: {
            yhq: 6,
            dmm: 0,
            qic: 0,
            qbk: 6,
            fontSize: 26,
            dmp: 2
        },
        display: {
            hnp: 16,
            zcw: 24,
            wci: 0,
            nrj: 0,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        }
    };
    this.npb = {
        sde: [new bzm(7, 20, 130, 46), new bzm(673, 20, 130, 46)],
        display: {
            bok: new bzm(6, 16, 118, 22),
            hnp: 14,
            lto: 20,
            wci: -11,
            ffc: 10,
            dmp: 3,
            jvl: 8,
            bha: 0,
            cxh: 4
        },
        zco: {
            sde: new bzm(55, 130, 700, 300),
            bok: new bzm(),
            hnp: 66,
            lto: 150,
            wci: -90,
            ffc: 60,
            jvl: 10,
            dmp: 0,
            bha: 0,
            cxh: 0
        },
        qzg: {
            sde: new bzm(43, 80, 724, 369),
            mew: new bzm(100, 53, 525, 50),
            bok: new bzm(186, 153, 332, 94),
            shp: 340,
            nhi: 30,
            cty: {
                _0: new bzm(2, 0, 90, 94),
                _1: new bzm(98, 0, 90, 94),
                _2: new bzm(194, 0, 90, 94),
                _3: new bzm(290, 0, 90, 94),
                _4: new bzm(386, 0, 90, 94),
                _5: new bzm(482, 0, 90, 94),
                _6: new bzm(578, 0, 90, 94),
                _7: new bzm(674, 0, 90, 94),
                _8: new bzm(770, 0, 90, 94),
                _9: new bzm(866, 0, 90, 94),
                _cm: new bzm(962, 0, 28, 94),
                _dt: new bzm(999, 0, 28, 94),
                _sp: new bzm(1036, 0, 28, 94)
            }
        }
    }
}
juj.prototype = new qth;

function pys() {
    this.eew = true
}
pys.prototype = new juj;

function fbg() {
    this.znl = false;
    this.sya = true;
    this.nos = false;
    this.ofp = true;
    this.ibz = true;
    this.canvas = {
        sde: new bzm(0, 0, 960, 600)
    };
    this.gbr = {
        sde: new bzm(),
        paq: 0,
        fkd: 0
    };
    this.uay = {
        sde: new bzm(0, 0, 800, 600),
        dmp: 0
    };
    this.fho = {
        jlw: new bzm(0, 25, 470, 36),
        tvn: new bzm(5, 2, 150, 30),
        lic: new bzm(160, 2, 150, 30),
        wio: new bzm(315, 2, 150, 30),
        dtm: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.hbo = {
        uay: {
            sde: new bzm(0, 0, 640, 460),
            cqr: new bzm(0, 0, 640, 460),
            fwc: new bzm(6, 416, 628, 38),
            avj: new bzm(6, 420, 628, 17),
            ftl: new bzm(64, 442, 512, 7),
            nyi: new bzm(6, 364, 628, 90),
            fontSize: 18,
            ejs: 20,
            jvl: 6,
            dmm: 12,
            qic: 6,
            hzi: 3,
            vgt: 0,
            fqr: {
                sde: new bzm(),
                x: 0,
                tow: 0,
                aaz: 0
            },
            eml: {
                cqr: new bzm(),
                avj: new bzm(),
                hml: new bzm()
            }
        },
        pzu: {
            sde: new bzm(0, 0, 800, 600),
            cqr: new bzm(100, 75, 600, 450),
            fwc: new bzm(),
            avj: new bzm(100, 295, 600, 24),
            ftl: new bzm(160, 325, 480, 3),
            nyi: new bzm(100, 265, 600, 115),
            fontSize: 21,
            ejs: 26,
            jvl: 0,
            dmm: 12,
            qic: 8,
            hzi: 3,
            vgt: 10,
            fqr: {
                sde: new bzm(400, 484, 0, 3),
                x: 38,
                tow: 17,
                aaz: 23
            },
            eml: {
                cqr: new bzm(50, 0, 700, 450),
                avj: new bzm(100, 430, 600, 60),
                hml: new bzm(200, 510, 400, 40)
            }
        },
        lxn: {
            sde: new bzm(0, 0, 800, 600),
            cqr: new bzm(0, 0, 800, 600),
            fwc: new bzm(),
            avj: new bzm(50, 420, 700, 21),
            ftl: new bzm(),
            nyi: new bzm(50, 410, 700, 80),
            fontSize: 18,
            ejs: 24,
            jvl: 0,
            dmm: 12,
            qic: 7,
            hzi: 0,
            vgt: 0,
            fqr: {
                sde: new bzm(260, 119, 280, 280),
                x: 0,
                tow: 0,
                aaz: 0
            },
            eml: {
                cqr: new bzm(50, 0, 700, 450),
                avj: new bzm(100, 460, 600, 60),
                hml: new bzm(200, 540, 400, 40)
            }
        }
    };
    this.soi = {};
    this.wij = {};
    this.sjx = {
        sde: new bzm(0, 0, 960, 600),
        jlw: new bzm(800, 0, 160, 600),
        dtm: {
            zcw: 0,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            qbk: 8,
            yhq: 16,
            dmp: 4
        },
        hvq: new bzm(0, 20, 800, 40),
        fqp: new bzm(0, 100, 800, 40),
        wqa: new bzm(0, 140, 800, 40),
        tdf: new bzm(0, 180, 800, 40),
        xlc: new bzm(225, 275, 350, 100),
        wyk: new bzm(200, 480, 400, 40),
        wim: {
            mps: new bzm(815, 410, 130, 130),
        },
        slg: {
            mps: new bzm(815, 310, 130, 130),
            lar: new bzm(815, 120, 130, 130)
        },
        wen: 36,
        fontSize: 30,
        agv: 22,
        qic: 3,
        dmm: 5,
        dmp: 2,
        mxk: 3,
        ouk: 10
    };
    this.ckq = {
        sde: new bzm(0, 0, 960, 600),
        dmp: 0,
        yhq: 0,
        svh: 50,
        wvs: 30,
        oub: 30,
        nxs: new bzm(70, 170, 470, 70),
        ccj: new bzm(560, 170, 60, 70),
        oye: new bzm(622, 170, 210, 70),
        hzv: new bzm(834, 170, 60, 70),
        lsk: new bzm(70, 310, 470, 70),
        lhr: new bzm(560, 310, 60, 70),
        ddj: new bzm(622, 310, 210, 70),
        epc: new bzm(834, 310, 60, 70),
        ksb: new bzm(70, 450, 470, 70),
        gev: new bzm(622, 450, 210, 70),
        tqu: new bzm(90, 530, 780, 50),
        qpr: new bzm(80, 120, 470, 60),
        rqp: new bzm(570, 120, 50, 60),
        uhy: new bzm(622, 120, 210, 60),
        khc: new bzm(834, 120, 50, 60),
        lwz: new bzm(90, 200, 780, 70),
        mmx: new bzm(80, 280, 470, 60),
        txm: new bzm(570, 280, 50, 60),
        xkg: new bzm(622, 280, 210, 60),
        tww: new bzm(834, 280, 50, 60),
        yao: new bzm(80, 360, 470, 60),
        ybe: new bzm(570, 360, 50, 60),
        tsx: new bzm(622, 360, 210, 60),
        dym: new bzm(834, 360, 50, 60),
        bbd: new bzm(80, 440, 470, 60),
        sbs: new bzm(570, 440, 50, 60),
        vgw: new bzm(622, 440, 210, 60),
        phn: new bzm(834, 440, 50, 60),
        fwc: new bzm(90, 530, 780, 50),
        jfd: {
            qcw: new bzm(0, 10, 240, 90),
            uim: new bzm(240, 10, 240, 90),
            qwk: new bzm(480, 10, 240, 90),
            piy: new bzm(720, 10, 240, 90)
        },
        bwf: {
            qcw: new bzm(0, 10, 192, 90),
            sdk: new bzm(192, 10, 192, 90),
            uim: new bzm(384, 10, 192, 90),
            qwk: new bzm(576, 10, 192, 90),
            piy: new bzm(768, 10, 192, 90)
        },
        oik: [new bzm(190, 205, 200, 160), new bzm(570, 205, 200, 160)],
        taj: [new bzm(90, 205, 200, 160), new bzm(380, 205, 200, 160), new bzm(670, 205, 200, 160)],
        ycf: [new bzm(190, 130, 200, 160), new bzm(570, 130, 200, 160), new bzm(190, 360, 200, 160), new bzm(570, 360, 200, 160)],
        yyz: [new bzm(90, 130, 200, 160), new bzm(380, 130, 200, 160), new bzm(670, 130, 200, 160), new bzm(90, 360, 200, 160), new bzm(380, 360, 200, 160), new bzm(670, 360, 200, 160)],
        bhi: {
            yhq: 3,
            dmm: -10,
            qic: -1,
            qbk: 6,
            fontSize: 36,
            dmp: 0,
        },
        qls: {
            yhq: 3,
            dmm: 10,
            qic: -1,
            qbk: 6,
            fontSize: 36,
            dmp: 0,
        },
        aly: {
            fontSize: 36,
            dmm: 0,
            qic: 0,
            qbk: 10,
            yhq: 0,
            dmp: 0
        },
        msp: {
            fontSize: 26,
            jvl: 5,
            yhq: 26,
            dmp: 4,
            iqx: 40
        },
        hly: {
            hnp: 16,
            zcw: 40,
            wci: 0,
            nrj: 0,
            dmp: 2,
            jvl: 3
        },
        eik: {
            hnp: 16,
            zcw: 40,
            wci: 0,
            nrj: 0,
            dmp: 2,
            jvl: 3
        },
        wni: {
            avj: new bzm(50, 0, 360, 60),
            mca: new bzm(0, 13, 30, 30),
            fontSize: 30,
            yhq: 0,
            dmp: 2
        }
    };
    this.awv = {
        sde: new bzm(-10, 5, 310, 60),
        hvq: new bzm(10, 6, 240, 26),
        avj: new bzm(10, 34, 240, 20),
        acz: new bzm(255, 11, 50, 38),
        wyh: new bzm(8, 2, 34, 34),
        hnp: 16,
        zcw: 12,
        twt: 24
    };
    this.fkb = {
        sde: new bzm(200, 135, 560, 330),
        hnp: 26,
        fontSize: 20,
        pcv: new bzm(515, 5, 40, 40),
        hvq: new bzm(40, 0, 480, 30),
        wyk: new bzm(20, 40, 520, 195),
        sqn: new bzm(20, 265, 520, 54),
        dtm: {
            fontSize: 20
        }
    };
    this.npb = {
        sde: [new bzm(2, 0, 130, 46), new bzm(668, 0, 130, 46)],
        display: {
            bok: new bzm(6, 16, 118, 23),
            hnp: 14,
            lto: 20,
            wci: -11,
            ffc: 10,
            jvl: 8,
            dmp: 3,
            bha: 0,
            cxh: 4
        },
        zco: {
            sde: new bzm(50, 110, 700, 300),
            bok: new bzm(),
            hnp: 66,
            lto: 150,
            wci: -90,
            ffc: 60,
            jvl: 10,
            dmp: 0,
            bha: 0,
            cxh: 0
        },
        qzg: {
            sde: new bzm(38, 60, 724, 369),
            mew: new bzm(100, 53, 525, 50),
            bok: new bzm(186, 153, 332, 94),
            shp: 340,
            nhi: 30,
            cty: {
                _0: new bzm(2, 0, 90, 94),
                _1: new bzm(98, 0, 90, 94),
                _2: new bzm(194, 0, 90, 94),
                _3: new bzm(290, 0, 90, 94),
                _4: new bzm(386, 0, 90, 94),
                _5: new bzm(482, 0, 90, 94),
                _6: new bzm(578, 0, 90, 94),
                _7: new bzm(674, 0, 90, 94),
                _8: new bzm(770, 0, 90, 94),
                _9: new bzm(866, 0, 90, 94),
                _cm: new bzm(962, 0, 28, 94),
                _dt: new bzm(999, 0, 28, 94),
                _sp: new bzm(1036, 0, 28, 94)
            }
        }
    }
}
fbg.prototype = new qth;

function epb() {
    this.znl = false;
    this.sya = true;
    this.nos = false;
    this.ofp = true;
    this.ibz = true;
    this.canvas = {
        sde: new bzm(0, 0, 960, 600)
    };
    this.gbr = {
        sde: new bzm(),
        paq: 0,
        fkd: 0
    };
    this.uay = {
        sde: new bzm(160, 0, 800, 600),
        dmp: 0
    };
    this.fho = {
        jlw: new bzm(490, 25, 470, 36),
        tvn: new bzm(5, 4, 150, 30),
        lic: new bzm(160, 4, 150, 30),
        wio: new bzm(315, 4, 150, 30),
        dtm: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.hbo = {
        uay: {
            sde: new bzm(0, 0, 640, 460),
            cqr: new bzm(0, 0, 640, 460),
            fwc: new bzm(6, 416, 628, 38),
            avj: new bzm(6, 420, 628, 17),
            ftl: new bzm(64, 442, 512, 7),
            nyi: new bzm(6, 364, 628, 90),
            fontSize: 18,
            ejs: 20,
            jvl: 6,
            dmm: 12,
            qic: 6,
            hzi: 3,
            vgt: 0,
            fqr: {
                sde: new bzm(),
                x: 0,
                tow: 0,
                aaz: 0
            },
            eml: {
                cqr: new bzm(),
                avj: new bzm(),
                hml: new bzm()
            }
        },
        pzu: {
            sde: new bzm(0, 0, 800, 600),
            cqr: new bzm(100, 75, 600, 450),
            fwc: new bzm(),
            avj: new bzm(100, 295, 600, 24),
            ftl: new bzm(160, 325, 480, 3),
            nyi: new bzm(100, 265, 600, 115),
            fontSize: 21,
            ejs: 26,
            jvl: 0,
            dmm: 12,
            qic: 8,
            hzi: 3,
            vgt: 10,
            fqr: {
                sde: new bzm(400, 484, 0, 3),
                x: 38,
                tow: 17,
                aaz: 23
            },
            eml: {
                cqr: new bzm(50, 0, 700, 450),
                avj: new bzm(100, 430, 600, 60),
                hml: new bzm(200, 510, 400, 40)
            }
        },
        lxn: {
            sde: new bzm(0, 0, 800, 600),
            cqr: new bzm(0, 0, 800, 600),
            fwc: new bzm(),
            avj: new bzm(50, 420, 700, 21),
            ftl: new bzm(),
            nyi: new bzm(50, 410, 700, 80),
            fontSize: 18,
            ejs: 24,
            jvl: 0,
            dmm: 12,
            qic: 7,
            hzi: 0,
            vgt: 0,
            fqr: {
                sde: new bzm(260, 119, 280, 280),
                x: 0,
                tow: 0,
                aaz: 0
            },
            eml: {
                cqr: new bzm(50, 0, 700, 450),
                avj: new bzm(100, 460, 600, 60),
                hml: new bzm(200, 540, 400, 40)
            }
        }
    };
    this.soi = {};
    this.wij = {};
    this.sjx = {
        sde: new bzm(0, 0, 960, 600),
        jlw: new bzm(0, 0, 160, 600),
        dtm: {
            zcw: 0,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            qbk: 8,
            yhq: 16,
            dmp: 4
        },
        hvq: new bzm(160, 20, 800, 40),
        fqp: new bzm(160, 100, 800, 40),
        wqa: new bzm(160, 140, 800, 40),
        tdf: new bzm(160, 180, 800, 40),
        xlc: new bzm(385, 275, 350, 100),
        wyk: new bzm(360, 480, 400, 40),
        wim: {
            mps: new bzm(15, 410, 130, 130),
        },
        slg: {
            mps: new bzm(15, 310, 130, 130),
            lar: new bzm(15, 120, 130, 130)
        },
        wen: 36,
        fontSize: 30,
        agv: 22,
        qic: 3,
        dmm: 5,
        dmp: 2,
        mxk: 3,
        ouk: 10
    };
    this.ckq = {
        sde: new bzm(0, 0, 960, 600),
        dmp: 0,
        yhq: 0,
        svh: 50,
        wvs: 30,
        oub: 30,
        nxs: new bzm(70, 170, 470, 70),
        ccj: new bzm(560, 170, 60, 70),
        oye: new bzm(622, 170, 210, 70),
        hzv: new bzm(834, 170, 60, 70),
        lsk: new bzm(70, 310, 470, 70),
        lhr: new bzm(560, 310, 60, 70),
        ddj: new bzm(622, 310, 210, 70),
        epc: new bzm(834, 310, 60, 70),
        ksb: new bzm(70, 450, 470, 70),
        gev: new bzm(622, 450, 210, 70),
        tqu: new bzm(90, 530, 780, 50),
        qpr: new bzm(80, 120, 470, 60),
        rqp: new bzm(570, 120, 50, 60),
        uhy: new bzm(622, 120, 210, 60),
        khc: new bzm(834, 120, 50, 60),
        lwz: new bzm(90, 200, 780, 70),
        mmx: new bzm(80, 280, 470, 60),
        txm: new bzm(570, 280, 50, 60),
        xkg: new bzm(622, 280, 210, 60),
        tww: new bzm(834, 280, 50, 60),
        yao: new bzm(80, 360, 470, 60),
        ybe: new bzm(570, 360, 50, 60),
        tsx: new bzm(622, 360, 210, 60),
        dym: new bzm(834, 360, 50, 60),
        bbd: new bzm(80, 440, 470, 60),
        sbs: new bzm(570, 440, 50, 60),
        vgw: new bzm(622, 440, 210, 60),
        phn: new bzm(834, 440, 50, 60),
        fwc: new bzm(90, 530, 780, 50),
        jfd: {
            qcw: new bzm(0, 10, 240, 90),
            uim: new bzm(240, 10, 240, 90),
            qwk: new bzm(480, 10, 240, 90),
            piy: new bzm(720, 10, 240, 90)
        },
        bwf: {
            qcw: new bzm(0, 10, 192, 90),
            sdk: new bzm(192, 10, 192, 90),
            uim: new bzm(384, 10, 192, 90),
            qwk: new bzm(576, 10, 192, 90),
            piy: new bzm(768, 10, 192, 90)
        },
        oik: [new bzm(190, 205, 200, 160), new bzm(570, 205, 200, 160)],
        taj: [new bzm(90, 205, 200, 160), new bzm(380, 205, 200, 160), new bzm(670, 205, 200, 160)],
        ycf: [new bzm(190, 130, 200, 160), new bzm(570, 130, 200, 160), new bzm(190, 360, 200, 160), new bzm(570, 360, 200, 160)],
        yyz: [new bzm(90, 130, 200, 160), new bzm(380, 130, 200, 160), new bzm(670, 130, 200, 160), new bzm(90, 360, 200, 160), new bzm(380, 360, 200, 160), new bzm(670, 360, 200, 160)],
        bhi: {
            yhq: 3,
            dmm: -10,
            qic: -1,
            qbk: 6,
            fontSize: 36,
            dmp: 0,
        },
        qls: {
            yhq: 3,
            dmm: 10,
            qic: -1,
            qbk: 6,
            fontSize: 36,
            dmp: 0,
        },
        aly: {
            fontSize: 36,
            dmm: 0,
            qic: 0,
            qbk: 10,
            yhq: 0,
            dmp: 0
        },
        msp: {
            fontSize: 26,
            jvl: 5,
            yhq: 26,
            dmp: 4,
            iqx: 40
        },
        hly: {
            hnp: 16,
            zcw: 40,
            wci: 0,
            nrj: 0,
            dmp: 2,
            jvl: 3
        },
        eik: {
            hnp: 16,
            zcw: 40,
            wci: 0,
            nrj: 0,
            dmp: 2,
            jvl: 3
        },
        wni: {
            avj: new bzm(50, 0, 360, 60),
            mca: new bzm(0, 13, 30, 30),
            fontSize: 30,
            yhq: 0,
            dmp: 2
        }
    };
    this.awv = {
        sde: new bzm(660, 5, 310, 60),
        hvq: new bzm(60, 6, 240, 26),
        avj: new bzm(60, 34, 240, 20),
        acz: new bzm(5, 11, 50, 38),
        wyh: new bzm(8, 2, 34, 34),
        hnp: 16,
        zcw: 12,
        twt: 24
    };
    this.fkb = {
        sde: new bzm(200, 135, 560, 330),
        hnp: 26,
        fontSize: 20,
        pcv: new bzm(515, 5, 40, 40),
        hvq: new bzm(40, 5, 480, 30),
        wyk: new bzm(20, 40, 520, 195),
        sqn: new bzm(20, 265, 520, 54),
        dtm: {
            fontSize: 20
        }
    };
    this.npb = {
        sde: [new bzm(162, 0, 130, 46), new bzm(828, 0, 130, 46)],
        display: {
            bok: new bzm(6, 16, 118, 23),
            hnp: 14,
            lto: 20,
            wci: -11,
            ffc: 10,
            jvl: 8,
            dmp: 3,
            bha: 0,
            cxh: 4
        },
        zco: {
            sde: new bzm(210, 110, 700, 300),
            bok: new bzm(),
            hnp: 66,
            lto: 150,
            wci: -90,
            ffc: 60,
            jvl: 10,
            dmp: 0,
            bha: 0,
            cxh: 0
        },
        qzg: {
            sde: new bzm(198, 60, 724, 369),
            mew: new bzm(100, 53, 525, 50),
            bok: new bzm(186, 153, 332, 94),
            shp: 340,
            nhi: 30,
            cty: {
                _0: new bzm(2, 0, 90, 94),
                _1: new bzm(98, 0, 90, 94),
                _2: new bzm(194, 0, 90, 94),
                _3: new bzm(290, 0, 90, 94),
                _4: new bzm(386, 0, 90, 94),
                _5: new bzm(482, 0, 90, 94),
                _6: new bzm(578, 0, 90, 94),
                _7: new bzm(674, 0, 90, 94),
                _8: new bzm(770, 0, 90, 94),
                _9: new bzm(866, 0, 90, 94),
                _cm: new bzm(962, 0, 28, 94),
                _dt: new bzm(999, 0, 28, 94),
                _sp: new bzm(1036, 0, 28, 94)
            }
        }
    }
}
epb.prototype = new qth;

function cyi() {
    this.mbg = true;
    this.qyf = true;
    this.jeg = true;
    this.gbr = {
        sde: new bzm(0, 20, 800, 600),
        paq: 0,
        fkd: 0
    };
    this.omc = {
        sde: new bzm(0, 20, 800, 600),
        paq: -20,
        fkd: 0
    };
    this.yke = {
        sde: new bzm(40, 110, 136, 360),
        beg: new bzm(40, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.auv = {
        sde: new bzm(186, 110, 136, 360),
        beg: new bzm(186, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.qmr = {
        sde: new bzm(332, 110, 136, 360),
        beg: new bzm(332, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.joi = {
        sde: new bzm(478, 110, 136, 360),
        beg: new bzm(478, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.coh = {
        sde: new bzm(624, 110, 136, 360),
        beg: new bzm(624, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.fin = {
        sde: new bzm(0, 20, 800, 86),
        fontSize: 50,
        dmm: 0,
        qic: 6,
        jvl: 0,
        pwm: 2
    };
    this.ijv = {
        sde: new bzm(0, 20, 800, 80),
        fontSize: 50,
        dmm: 0,
        qic: 8,
        jvl: 0,
        pwm: 2
    };
    this.zxb = {
        sde: new bzm(4, 110, 0, 0),
        ikf: [25, 65, 165, 265, 305],
        yje: 30,
        xqa: 30
    };
    this.auf = {
        sde: new bzm(766, 110, 0, 0),
        ikf: [25, 65, 165, 265, 305],
        yje: 30,
        xqa: 30
    };
    this.naz = {
        sde: new bzm(710, 35, 90, 450),
        hvq: new bzm(5, 5, 80, 15),
        tcu: new bzm(55, 25, 30, 410),
        fontSize: 15,
        kos: 20,
        dmp: 2,
        yhq: 5,
        whf: 4,
        hlt: 10,
        tqk: 5
    };
    this.rig = {
        sde: new bzm(0, 35, 90, 450),
        hvq: new bzm(5, 5, 80, 15),
        tcu: new bzm(5, 25, 30, 410),
        fontSize: 15,
        kos: 20,
        dmp: 2,
        yhq: 5,
        whf: 4,
        hlt: 10,
        tqk: 5
    };
    this.ajq = {
        sde: new bzm(0, 20, 800, 600),
        jlw: new bzm(0, 540, 800, 60),
        lar: new bzm(711, 544, 73, 53),
        ymq: new bzm(11, 544, 73, 53),
        wed: new bzm(316, 544, 73, 53),
        une: new bzm(411, 544, 73, 53),
        dtm: {
            zcw: 16,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            qbk: 6,
            yhq: 8,
            dmp: 2
        }
    };
    this.iqc = {
        sde: new bzm(0, 20, 800, 600),
        jlw: new bzm(0, 485, 800, 115),
        kmm: {
            sde: new bzm(187, 489, 470, 40),
            fontSize: 18,
            qic: 14,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 2
        },
        pml: {
            sde: new bzm(331, 216, 137, 187),
            avj: new bzm(5, 8, 56, 34),
            bok: new bzm(37, 3, 98, 104),
            zhj: new bzm(33, 110, 72, 76),
            obx: new bzm(10, 42, 45, 45),
            xbi: new bzm(5, 120, 126, 50),
            fontSize: 34,
            air: 50,
            jvl: 3,
            qjd: 4
        },
        qlo: {
            sde: new bzm(380, 105, 380, 45),
            fcg: 2
        },
        dtm: {
            zcw: 18,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            qbk: 8,
            yhq: 10,
            dmp: 2
        },
        display: {
            wci: -12,
            nrj: 11,
            zcw: 26,
            hnp: 15,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        zev: {
            wci: 0,
            nrj: 0,
            zcw: 0,
            hnp: 0,
            dmp: 0,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        fdg: new bzm(),
        xhf: new bzm(),
        upy: new bzm(415, 544, 110, 53),
        iog: new bzm(275, 544, 110, 53),
        xbi: new bzm(689, 485, 106, 48),
        vis: new bzm(5, 485, 150, 48),
        lbj: new bzm(73, 315, 91, 96),
        bra: new bzm(166, 315, 91, 96),
        xnx: new bzm(542, 315, 91, 96),
        bta: new bzm(635, 315, 91, 96),
        vpu: new bzm(73, 218, 184, 92),
        xdh: new bzm(542, 218, 184, 92),
        cna: new bzm(65, 170, 200, 50),
        vdw: new bzm(509, 170, 250, 50),
        ftj: new bzm(534, 410, 200, 50)
    };
    this.dfq = {
        sde: new bzm(0, 475, 800, 145),
        nye: new bzm(0, 0, 800, 145),
        ucv: new bzm(),
        kmm: {
            sde: new bzm(187, 34, 470, 40),
            qic: 14,
            fontSize: 18,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 2
        },
        win: {
            sde: new bzm(45, 2, 710, 25),
            fontSize: 20,
            qic: 4,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 0
        },
        gqh: {
            sde: new bzm(187, 51, 470, 70),
            tqk: 10,
            nrj: 2,
            fontSize: 24,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        azj: {
            zcw: 22,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 10,
            qbk: 8,
            dmp: 2
        },
        rxb: {
            zcw: 16,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 8,
            qbk: 8,
            dmp: 2
        },
        tam: {
            zcw: 0,
            lto: 0,
            dmm: 0,
            yhq: 0,
            qbk: 0,
            dmp: 0,
            nrj: 0,
            ffc: 0
        },
        ory: {
            zcw: 16,
            lto: 16,
            dmm: 0,
            yhq: 8,
            qbk: 6,
            dmp: 2,
            nrj: 24,
            ffc: -24
        },
        display: {
            wci: -12,
            nrj: 11,
            zcw: 26,
            hnp: 15,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        mkt: {
            wci: 0,
            nrj: 0,
            zcw: 0,
            hnp: 0,
            dmp: 0,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        zev: {
            sde: new bzm(),
            wci: 0,
            nrj: 0,
            zcw: 0,
            hnp: 0,
            dmp: 0,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        fdg: new bzm(),
        xhf: new bzm(),
        xuz: new bzm(5, 30, 150, 48),
        did: new bzm(689, 30, 106, 48),
        qzr: new bzm(),
        jpt: {
            hml: new bzm(686, 89, 110, 53),
            tvx: new bzm(492, 89, 80, 53),
            ato: new bzm(382, 89, 80, 53),
            lar: new bzm(272, 89, 80, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        yek: {
            hml: new bzm(686, 89, 110, 53),
            tvx: new bzm(532, 89, 80, 53),
            ikf: new bzm(432, 89, 80, 53),
            ato: new bzm(332, 89, 80, 53),
            lar: new bzm(232, 89, 80, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        zpo: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(532, 89, 80, 53),
            tvx: new bzm(432, 89, 80, 53),
            ato: new bzm(332, 89, 80, 53),
            lar: new bzm(232, 89, 80, 53),
            xbx: new bzm(40, 89, 80, 53),
            ank: new bzm()
        },
        dah: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(562, 89, 80, 53),
            tvx: new bzm(472, 89, 80, 53),
            ikf: new bzm(382, 89, 80, 53),
            ato: new bzm(292, 89, 80, 53),
            lar: new bzm(202, 89, 80, 53),
            xbx: new bzm(40, 89, 80, 53),
            ank: new bzm()
        },
        dtg: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(492, 89, 80, 53),
            tvx: new bzm(382, 89, 80, 53),
            ato: new bzm(272, 89, 80, 53),
            xbx: new bzm(40, 89, 80, 53),
            ank: new bzm()
        },
        gdf: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(532, 89, 80, 53),
            tvx: new bzm(432, 89, 80, 53),
            ikf: new bzm(332, 89, 80, 53),
            ato: new bzm(232, 89, 80, 53),
            xbx: new bzm(40, 89, 80, 53),
            ank: new bzm()
        },
        dpg: {
            hml: new bzm(686, 89, 110, 53),
            tvx: new bzm(492, 89, 80, 53),
            ato: new bzm(382, 89, 80, 53),
            lar: new bzm(272, 89, 80, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        itr: {
            hml: new bzm(686, 89, 110, 53),
            tvx: new bzm(532, 89, 80, 53),
            ikf: new bzm(432, 89, 80, 53),
            ato: new bzm(332, 89, 80, 53),
            lar: new bzm(232, 89, 80, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        pzi: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        lnh: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        wcm: 60
    };
    this.fqr = {
        sde: new bzm(40, 110, 720, 360),
        lineWidth: 4,
        wdh: 5,
        dmp: 1,
        ghj: 136,
        ahd: 120,
        fontSize: 40,
        szo: 10,
        lqe: 5,
        uxk: 100,
        ble: 96,
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
    this.tsu = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410]
    ]
}
cyi.prototype = new yfy;

function vfg() {
    this.eew = true
}
vfg.prototype = new cyi;

function oyx() {
    this.mbg = true;
    this.qyf = true;
    this.jeg = true;
    this.gbr = {
        sde: new bzm(0, 550, 800, 600),
        paq: -14,
        fkd: 0
    };
    this.omc = {
        sde: new bzm(0, 550, 800, 600),
        paq: -550,
        fkd: 0
    };
    this.yke = {
        sde: new bzm(40, 640, 136, 360),
        beg: new bzm(40, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.auv = {
        sde: new bzm(186, 640, 136, 360),
        beg: new bzm(186, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.qmr = {
        sde: new bzm(332, 640, 136, 360),
        beg: new bzm(332, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.joi = {
        sde: new bzm(478, 640, 136, 360),
        beg: new bzm(478, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.coh = {
        sde: new bzm(624, 640, 136, 360),
        beg: new bzm(624, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.fin = {
        sde: new bzm(0, 550, 800, 86),
        fontSize: 50,
        dmm: 0,
        qic: 6,
        jvl: 0,
        pwm: 2
    };
    this.ijv = {
        sde: new bzm(0, 550, 800, 80),
        fontSize: 50,
        dmm: 0,
        qic: 8,
        jvl: 0,
        pwm: 2
    };
    this.zxb = {
        sde: new bzm(4, 640, 0, 0),
        ikf: [25, 65, 165, 265, 305],
        yje: 30,
        xqa: 30
    };
    this.auf = {
        sde: new bzm(766, 640, 0, 0),
        ikf: [25, 65, 165, 265, 305],
        yje: 30,
        xqa: 30
    };
    this.naz = {
        sde: new bzm(710, 565, 90, 450),
        hvq: new bzm(5, 5, 80, 15),
        tcu: new bzm(55, 25, 30, 410),
        fontSize: 15,
        kos: 20,
        dmp: 2,
        yhq: 5,
        whf: 4,
        hlt: 10,
        tqk: 5
    };
    this.rig = {
        sde: new bzm(0, 565, 90, 450),
        hvq: new bzm(5, 5, 80, 15),
        tcu: new bzm(5, 25, 30, 410),
        fontSize: 15,
        kos: 20,
        dmp: 2,
        yhq: 5,
        whf: 4,
        hlt: 10,
        tqk: 5
    };
    this.ajq = {
        sde: new bzm(0, 550, 800, 615),
        jlw: new bzm(0, 540, 800, 75),
        lar: new bzm(695, 544, 90, 68),
        ymq: new bzm(11, 544, 90, 68),
        wed: new bzm(295, 544, 90, 68),
        une: new bzm(415, 544, 90, 68),
        dtm: {
            zcw: 21,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            qbk: 8,
            yhq: 10,
            dmp: 2
        }
    };
    this.iqc = {
        sde: new bzm(0, 550, 800, 615),
        jlw: new bzm(0, 485, 800, 130),
        kmm: {
            sde: new bzm(187, 489, 470, 40),
            fontSize: 18,
            qic: 14,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 2
        },
        pml: {
            sde: new bzm(331, 216, 137, 187),
            avj: new bzm(5, 8, 56, 34),
            bok: new bzm(37, 3, 98, 104),
            zhj: new bzm(33, 110, 72, 76),
            obx: new bzm(10, 42, 45, 45),
            xbi: new bzm(5, 120, 126, 50),
            fontSize: 34,
            air: 50,
            jvl: 3,
            qjd: 4
        },
        qlo: {
            sde: new bzm(380, 105, 380, 45),
            fcg: 2
        },
        dtm: {
            zcw: 23,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            qbk: 10,
            yhq: 12,
            dmp: 2
        },
        display: {
            wci: -12,
            nrj: 11,
            zcw: 26,
            hnp: 15,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        zev: {
            wci: 0,
            nrj: 0,
            zcw: 0,
            hnp: 0,
            dmp: 0,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        fdg: new bzm(),
        xhf: new bzm(),
        upy: new bzm(415, 544, 120, 68),
        iog: new bzm(265, 544, 120, 68),
        xbi: new bzm(689, 485, 106, 48),
        vis: new bzm(5, 485, 150, 48),
        lbj: new bzm(73, 315, 91, 96),
        bra: new bzm(166, 315, 91, 96),
        xnx: new bzm(542, 315, 91, 96),
        bta: new bzm(635, 315, 91, 96),
        vpu: new bzm(73, 218, 184, 92),
        xdh: new bzm(542, 218, 184, 92),
        cna: new bzm(65, 170, 200, 50),
        vdw: new bzm(509, 170, 250, 50),
        ftj: new bzm(534, 410, 200, 50)
    };
    this.dfq = {
        sde: new bzm(0, 1005, 800, 160),
        nye: new bzm(0, 0, 800, 160),
        ucv: new bzm(),
        kmm: {
            sde: new bzm(187, 34, 470, 40),
            qic: 14,
            fontSize: 18,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 2
        },
        win: {
            sde: new bzm(45, 2, 710, 25),
            fontSize: 20,
            qic: 4,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 0
        },
        gqh: {
            sde: new bzm(187, 58, 470, 70),
            tqk: 10,
            nrj: 2,
            fontSize: 24,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        azj: {
            zcw: 28,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 12,
            qbk: 10,
            dmp: 2
        },
        rxb: {
            zcw: 21,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 10,
            qbk: 8,
            dmp: 2
        },
        tam: {
            zcw: 0,
            lto: 0,
            dmm: 0,
            yhq: 0,
            qbk: 0,
            dmp: 0,
            nrj: 0,
            ffc: 0
        },
        ory: {
            zcw: 21,
            lto: 21,
            dmm: 0,
            yhq: 8,
            qbk: 6,
            dmp: 2,
            nrj: 30,
            ffc: -32
        },
        display: {
            wci: -12,
            nrj: 11,
            zcw: 26,
            hnp: 15,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        mkt: {
            wci: 0,
            nrj: 0,
            zcw: 0,
            hnp: 0,
            dmp: 0,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        zev: {
            wci: 0,
            nrj: 0,
            zcw: 0,
            hnp: 0,
            dmp: 0,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        fdg: new bzm(),
        xhf: new bzm(),
        xuz: new bzm(5, 30, 150, 48),
        did: new bzm(689, 30, 106, 48),
        qzr: new bzm(),
        jpt: {
            hml: new bzm(675, 89, 120, 68),
            tvx: new bzm(486, 89, 100, 68),
            ato: new bzm(371, 89, 100, 68),
            lar: new bzm(256, 89, 100, 68),
            fxb: new bzm(20, 89, 120, 68),
            ank: new bzm()
        },
        yek: {
            hml: new bzm(675, 89, 120, 68),
            tvx: new bzm(536, 89, 100, 68),
            ikf: new bzm(426, 89, 100, 68),
            ato: new bzm(316, 89, 100, 68),
            lar: new bzm(206, 89, 100, 68),
            fxb: new bzm(20, 89, 120, 68),
            ank: new bzm()
        },
        zpo: {
            hml: new bzm(675, 89, 120, 68),
            fxb: new bzm(536, 89, 100, 68),
            tvx: new bzm(426, 89, 100, 68),
            ato: new bzm(316, 89, 100, 68),
            lar: new bzm(206, 89, 100, 68),
            xbx: new bzm(30, 89, 100, 68),
            ank: new bzm()
        },
        dah: {
            hml: new bzm(678, 89, 120, 68),
            fxb: new bzm(576, 89, 90, 68),
            tvx: new bzm(476, 89, 90, 68),
            ikf: new bzm(376, 89, 90, 68),
            ato: new bzm(276, 89, 90, 68),
            lar: new bzm(176, 89, 90, 68),
            xbx: new bzm(35, 89, 90, 68),
            ank: new bzm()
        },
        dtg: {
            hml: new bzm(675, 89, 120, 68),
            fxb: new bzm(486, 89, 100, 68),
            tvx: new bzm(371, 89, 100, 68),
            ato: new bzm(256, 89, 100, 68),
            xbx: new bzm(30, 89, 100, 68),
            ank: new bzm()
        },
        gdf: {
            hml: new bzm(675, 89, 120, 68),
            fxb: new bzm(536, 89, 100, 68),
            tvx: new bzm(426, 89, 100, 68),
            ikf: new bzm(316, 89, 100, 68),
            ato: new bzm(206, 89, 100, 68),
            xbx: new bzm(30, 89, 100, 68),
            ank: new bzm()
        },
        dpg: {
            hml: new bzm(675, 89, 120, 68),
            tvx: new bzm(486, 89, 100, 68),
            ato: new bzm(371, 89, 100, 68),
            lar: new bzm(256, 89, 100, 68),
            fxb: new bzm(20, 89, 120, 68),
            ank: new bzm()
        },
        itr: {
            hml: new bzm(675, 89, 120, 68),
            tvx: new bzm(536, 89, 100, 68),
            ikf: new bzm(426, 89, 100, 68),
            ato: new bzm(316, 89, 100, 68),
            lar: new bzm(206, 89, 100, 68),
            fxb: new bzm(20, 89, 120, 68),
            ank: new bzm()
        },
        pzi: {
            hml: new bzm(675, 90, 120, 68),
            fxb: new bzm(20, 90, 120, 68),
            ank: new bzm()
        },
        lnh: {
            hml: new bzm(675, 90, 120, 68),
            fxb: new bzm(20, 90, 120, 68),
            ank: new bzm()
        },
        wcm: 60
    };
    this.fqr = {
        sde: new bzm(40, 640, 720, 360),
        lineWidth: 4,
        wdh: 5,
        dmp: 1,
        ghj: 136,
        ahd: 120,
        fontSize: 40,
        szo: 10,
        lqe: 5,
        uxk: 100,
        ble: 96,
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
    this.tsu = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940]
    ];
    this.top = {
        sde: new bzm(0, 20, 800, 520)
    }
}
oyx.prototype = new wpo;

function xcm() {
    this.mbg = true;
    this.qyf = true;
    this.jeg = true;
    this.gbr = {
        sde: new bzm(5, 20, 800, 600),
        paq: 0,
        fkd: -10
    };
    this.omc = {
        sde: new bzm(5, 20, 800, 600),
        paq: -20,
        fkd: -5
    };
    this.yke = {
        sde: new bzm(45, 110, 136, 360),
        beg: new bzm(40, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.auv = {
        sde: new bzm(191, 110, 136, 360),
        beg: new bzm(186, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.qmr = {
        sde: new bzm(337, 110, 136, 360),
        beg: new bzm(332, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.joi = {
        sde: new bzm(483, 110, 136, 360),
        beg: new bzm(478, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.coh = {
        sde: new bzm(629, 110, 136, 360),
        beg: new bzm(624, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.fin = {
        sde: new bzm(5, 20, 800, 86),
        fontSize: 50,
        dmm: 0,
        qic: 6,
        jvl: 0,
        pwm: 2
    };
    this.ijv = {
        sde: new bzm(5, 20, 800, 80),
        fontSize: 50,
        dmm: 0,
        qic: 8,
        jvl: 0,
        pwm: 2
    };
    this.zxb = {
        sde: new bzm(9, 110, 0, 0),
        ikf: [25, 65, 165, 265, 305],
        yje: 30,
        xqa: 30
    };
    this.auf = {
        sde: new bzm(771, 110, 0, 0),
        ikf: [25, 65, 165, 265, 305],
        yje: 30,
        xqa: 30
    };
    this.naz = {
        sde: new bzm(715, 35, 90, 450),
        hvq: new bzm(5, 5, 80, 15),
        tcu: new bzm(55, 25, 30, 410),
        fontSize: 15,
        kos: 20,
        dmp: 2,
        yhq: 5,
        whf: 4,
        hlt: 10,
        tqk: 5
    };
    this.rig = {
        sde: new bzm(5, 35, 90, 450),
        hvq: new bzm(5, 5, 80, 15),
        tcu: new bzm(5, 25, 30, 410),
        fontSize: 15,
        kos: 20,
        dmp: 2,
        yhq: 5,
        whf: 4,
        hlt: 10,
        tqk: 5
    };
    this.ajq = {
        sde: new bzm(5, 20, 800, 600),
        jlw: new bzm(0, 540, 800, 60),
        lar: new bzm(711, 544, 73, 53),
        ymq: new bzm(11, 544, 73, 53),
        wed: new bzm(316, 544, 73, 53),
        une: new bzm(411, 544, 73, 53),
        dtm: {
            zcw: 16,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            qbk: 6,
            yhq: 8,
            dmp: 2
        }
    };
    this.iqc = {
        sde: new bzm(5, 20, 800, 600),
        jlw: new bzm(0, 485, 800, 115),
        kmm: {
            sde: new bzm(187, 489, 470, 40),
            fontSize: 18,
            qic: 14,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 2
        },
        pml: {
            sde: new bzm(331, 216, 137, 187),
            avj: new bzm(5, 8, 56, 34),
            bok: new bzm(37, 3, 98, 104),
            zhj: new bzm(33, 110, 72, 76),
            obx: new bzm(10, 42, 45, 45),
            xbi: new bzm(5, 120, 126, 50),
            fontSize: 34,
            air: 50,
            jvl: 3,
            qjd: 4
        },
        qlo: {
            sde: new bzm(380, 105, 380, 45),
            fcg: 2
        },
        dtm: {
            zcw: 18,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            qbk: 8,
            yhq: 10,
            dmp: 2
        },
        display: {
            wci: -12,
            nrj: 11,
            zcw: 26,
            hnp: 15,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        zev: {
            wci: 0,
            nrj: 0,
            zcw: 0,
            hnp: 0,
            dmp: 0,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        fdg: new bzm(),
        xhf: new bzm(),
        upy: new bzm(415, 544, 110, 53),
        iog: new bzm(275, 544, 110, 53),
        xbi: new bzm(689, 485, 106, 48),
        vis: new bzm(5, 485, 150, 48),
        lbj: new bzm(73, 315, 91, 96),
        bra: new bzm(166, 315, 91, 96),
        xnx: new bzm(542, 315, 91, 96),
        bta: new bzm(635, 315, 91, 96),
        vpu: new bzm(73, 218, 184, 92),
        xdh: new bzm(542, 218, 184, 92),
        cna: new bzm(65, 170, 200, 50),
        vdw: new bzm(509, 170, 250, 50),
        ftj: new bzm(534, 410, 200, 50)
    };
    this.dfq = {
        sde: new bzm(5, 475, 800, 145),
        nye: new bzm(0, 0, 800, 145),
        ucv: new bzm(),
        kmm: {
            sde: new bzm(187, 34, 470, 40),
            qic: 14,
            fontSize: 18,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 2
        },
        win: {
            sde: new bzm(45, 2, 710, 25),
            fontSize: 20,
            qic: 4,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 0
        },
        gqh: {
            sde: new bzm(187, 51, 470, 70),
            tqk: 10,
            nrj: 2,
            fontSize: 24,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        azj: {
            zcw: 22,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 10,
            qbk: 8,
            dmp: 2
        },
        rxb: {
            zcw: 16,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 8,
            qbk: 6,
            dmp: 2
        },
        tam: {
            zcw: 0,
            lto: 0,
            dmm: 0,
            yhq: 0,
            qbk: 0,
            dmp: 0,
            nrj: 0,
            ffc: 0
        },
        ory: {
            zcw: 16,
            lto: 16,
            dmm: 0,
            yhq: 8,
            qbk: 6,
            dmp: 2,
            nrj: 24,
            ffc: -24
        },
        display: {
            wci: -12,
            nrj: 11,
            zcw: 26,
            hnp: 15,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        mkt: {
            wci: 0,
            nrj: 0,
            zcw: 0,
            hnp: 0,
            dmp: 0,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        zev: {
            sde: new bzm(),
            wci: 0,
            nrj: 0,
            zcw: 0,
            hnp: 0,
            dmp: 0,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        fdg: new bzm(),
        xhf: new bzm(),
        xuz: new bzm(5, 30, 150, 48),
        did: new bzm(689, 30, 106, 48),
        qzr: new bzm(),
        jpt: {
            hml: new bzm(686, 89, 110, 53),
            tvx: new bzm(492, 89, 80, 53),
            ato: new bzm(382, 89, 80, 53),
            lar: new bzm(272, 89, 80, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        yek: {
            hml: new bzm(686, 89, 110, 53),
            tvx: new bzm(532, 89, 80, 53),
            ikf: new bzm(432, 89, 80, 53),
            ato: new bzm(332, 89, 80, 53),
            lar: new bzm(232, 89, 80, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        zpo: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(532, 89, 80, 53),
            tvx: new bzm(432, 89, 80, 53),
            ato: new bzm(332, 89, 80, 53),
            lar: new bzm(232, 89, 80, 53),
            xbx: new bzm(40, 89, 80, 53),
            ank: new bzm()
        },
        dah: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(562, 89, 80, 53),
            tvx: new bzm(472, 89, 80, 53),
            ikf: new bzm(382, 89, 80, 53),
            ato: new bzm(292, 89, 80, 53),
            lar: new bzm(202, 89, 80, 53),
            xbx: new bzm(40, 89, 80, 53),
            ank: new bzm()
        },
        dtg: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(492, 89, 80, 53),
            tvx: new bzm(382, 89, 80, 53),
            ato: new bzm(272, 89, 80, 53),
            xbx: new bzm(40, 89, 80, 53),
            ank: new bzm()
        },
        gdf: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(532, 89, 80, 53),
            tvx: new bzm(432, 89, 80, 53),
            ikf: new bzm(332, 89, 80, 53),
            ato: new bzm(232, 89, 80, 53),
            xbx: new bzm(40, 89, 80, 53),
            ank: new bzm()
        },
        dpg: {
            hml: new bzm(686, 89, 110, 53),
            tvx: new bzm(492, 89, 80, 53),
            ato: new bzm(382, 89, 80, 53),
            lar: new bzm(272, 89, 80, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        itr: {
            hml: new bzm(686, 89, 110, 53),
            tvx: new bzm(532, 89, 80, 53),
            ikf: new bzm(432, 89, 80, 53),
            ato: new bzm(332, 89, 80, 53),
            lar: new bzm(232, 89, 80, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        pzi: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        lnh: {
            hml: new bzm(686, 89, 110, 53),
            fxb: new bzm(25, 89, 110, 53),
            ank: new bzm()
        },
        wcm: 60
    };
    this.fqr = {
        sde: new bzm(45, 110, 720, 360),
        lineWidth: 4,
        wdh: 5,
        dmp: 1,
        ghj: 136,
        ahd: 120,
        fontSize: 40,
        szo: 10,
        lqe: 5,
        uxk: 100,
        ble: 96,
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
    this.tsu = [
        [92, 290, 718, 290],
        [92, 170, 718, 170],
        [92, 410, 718, 410],
        [92, 170, 117, 170, 405, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 405, 170, 693, 410, 718, 410]
    ]
}
xcm.prototype = new juj;

function cco() {
    this.eew = true
}
cco.prototype = new xcm;

function gpv() {
    this.mbg = false;
    this.qyf = true;
    this.jeg = true;
    this.gbr = {
        sde: new bzm(0, 0, 800, 600),
        paq: 0,
        fkd: -160
    };
    this.omc = {
        sde: new bzm(-160, 0, 1120, 600),
        fkd: 160,
        paq: 0
    };
    this.yke = {
        sde: new bzm(40, 90, 136, 360),
        beg: new bzm(40, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.auv = {
        sde: new bzm(186, 90, 136, 360),
        beg: new bzm(186, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.qmr = {
        sde: new bzm(332, 90, 136, 360),
        beg: new bzm(332, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.joi = {
        sde: new bzm(478, 90, 136, 360),
        beg: new bzm(478, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.coh = {
        sde: new bzm(624, 90, 136, 360),
        beg: new bzm(624, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.fin = {
        sde: new bzm(0, 0, 800, 86),
        fontSize: 50,
        dmm: 0,
        qic: 6,
        jvl: 0,
        pwm: 2
    };
    this.ijv = {
        sde: new bzm(0, 0, 800, 80),
        fontSize: 50,
        dmm: 0,
        qic: 8,
        jvl: 0,
        pwm: 2
    };
    this.zxb = {
        sde: new bzm(4, 90, 0, 0),
        ikf: [25, 65, 165, 265, 305],
        yje: 30,
        xqa: 30
    };
    this.auf = {
        sde: new bzm(766, 90, 0, 0),
        ikf: [25, 65, 165, 265, 305],
        yje: 30,
        xqa: 30
    };
    this.naz = {};
    this.rig = {};
    this.ajq = {
        sde: new bzm(0, 0, 960, 600),
        jlw: new bzm(800, 0, 160, 600),
        lar: new bzm(820, 400, 120, 120),
        ymq: new bzm(),
        wed: new bzm(820, 50, 120, 120),
        une: new bzm(820, 225, 120, 120),
        dtm: {
            zcw: 0,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 0,
            qbk: 16,
            dmp: 4
        }
    };
    this.iqc = {
        sde: new bzm(0, 0, 960, 600),
        jlw: new bzm(800, 0, 160, 600),
        kmm: {
            sde: new bzm(225, 520, 390, 70),
            fontSize: 20,
            qic: 14,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 2
        },
        pml: {
            sde: new bzm(331, 216, 137, 187),
            avj: new bzm(5, 8, 56, 34),
            bok: new bzm(37, 3, 98, 104),
            zhj: new bzm(33, 110, 72, 76),
            obx: new bzm(10, 42, 45, 45),
            xbi: new bzm(5, 120, 126, 50),
            fontSize: 34,
            air: 50,
            jvl: 3,
            qjd: 4
        },
        qlo: {
            sde: new bzm(380, 105, 380, 45),
            fcg: 2
        },
        dtm: {
            zcw: 24,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            qbk: 10,
            yhq: 0,
            dmp: 4
        },
        display: {
            wci: -18,
            nrj: 16,
            zcw: 32,
            hnp: 18,
            dmp: 3,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        zev: {
            wci: 0,
            nrj: 0,
            zcw: 16,
            hnp: 0,
            dmp: 2,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        fdg: new bzm(800, 0, 160, 22),
        xhf: new bzm(800, 22, 160, 22),
        upy: new bzm(820, 325, 120, 120),
        iog: new bzm(820, 125, 120, 120),
        xbi: new bzm(655, 520, 140, 70),
        vis: new bzm(5, 520, 180, 70),
        lbj: new bzm(73, 315, 91, 96),
        bra: new bzm(166, 315, 91, 96),
        xnx: new bzm(542, 315, 91, 96),
        bta: new bzm(635, 315, 91, 96),
        vpu: new bzm(73, 218, 184, 92),
        xdh: new bzm(542, 218, 184, 92),
        cna: new bzm(65, 170, 200, 50),
        vdw: new bzm(509, 170, 250, 50),
        ftj: new bzm(534, 410, 200, 50)
    };
    this.dfq = {
        sde: new bzm(0, 0, 960, 600),
        nye: new bzm(0, 455, 800, 145),
        ucv: new bzm(800, 0, 160, 600),
        kmm: {
            sde: new bzm(225, 520, 390, 70),
            qic: 14,
            fontSize: 24,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 2
        },
        win: {
            sde: new bzm(45, 458, 710, 25),
            fontSize: 20,
            qic: 4,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 0
        },
        gqh: {
            sde: new bzm(225, 520, 390, 70),
            tqk: 10,
            nrj: 2,
            fontSize: 20,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        azj: {
            zcw: 0,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 0,
            qbk: 10,
            dmp: 4
        },
        rxb: {
            zcw: 0,
            lto: 20,
            dmm: 0,
            nrj: 0,
            ffc: -30,
            yhq: 0,
            qbk: 10,
            dmp: 4
        },
        ory: {
            zcw: 0,
            lto: 24,
            dmm: 0,
            yhq: 0,
            qbk: 10,
            dmp: 6,
            nrj: 0,
            ffc: -40
        },
        tam: {
            zcw: 24,
            lto: 0,
            dmm: 0,
            yhq: 10,
            qbk: 0,
            dmp: 4,
            nrj: -2,
            ffc: 0
        },
        vic: {
            yhq: 6,
            dmm: 0,
            qic: -1,
            qbk: 6,
            fontSize: 36,
            dmp: 3
        },
        display: {
            wci: -18,
            nrj: 16,
            zcw: 32,
            hnp: 18,
            dmp: 3,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        mkt: {
            wci: 0,
            nrj: -40,
            zcw: 36,
            hnp: 0,
            dmp: 3,
            nca: 10,
            dus: 10,
            taw: 0,
            xjs: 0
        },
        zev: {
            wci: 0,
            nrj: 0,
            zcw: 16,
            hnp: 0,
            dmp: 2,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        fdg: new bzm(800, 0, 160, 22),
        xhf: new bzm(800, 22, 160, 22),
        xuz: new bzm(5, 520, 180, 70),
        did: new bzm(655, 520, 140, 70),
        qzr: new bzm(660, 400, 130, 120),
        lwa: {
            hml: new bzm(805, 210, 150, 150),
            tvx: new bzm(655, 495, 140, 30),
            ikf: new bzm(),
            ato: new bzm(),
            lar: new bzm(820, 400, 120, 120),
            fxb: new bzm(),
            ank: new bzm(820, 50, 120, 120)
        },
        pcb: {
            hml: new bzm(815, 260, 140, 140),
            tvx: new bzm(655, 495, 140, 30),
            ikf: new bzm(),
            ato: new bzm(),
            lar: new bzm(865, 50, 80, 80),
            fxb: new bzm(840, 140, 110, 110),
            ank: new bzm(840, 410, 110, 110)
        },
        wcm: 60
    };
    this.fqr = {
        sde: new bzm(40, 90, 720, 360),
        lineWidth: 4,
        wdh: 5,
        dmp: 1,
        ghj: 136,
        ahd: 120,
        fontSize: 40,
        szo: 10,
        lqe: 5,
        uxk: 100,
        ble: 96,
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
    this.tsu = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390]
    ]
}
gpv.prototype = new fbg;

function lik() {
    this.mbg = false;
    this.qyf = true;
    this.jeg = true;
    this.gbr = {
        sde: new bzm(160, 0, 800, 600),
        paq: 0,
        fkd: 0
    };
    this.omc = {
        sde: new bzm(0, 0, 1120, 600),
        fkd: 0,
        paq: 0
    };
    this.yke = {
        sde: new bzm(200, 90, 136, 360),
        beg: new bzm(40, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.auv = {
        sde: new bzm(346, 90, 136, 360),
        beg: new bzm(186, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.qmr = {
        sde: new bzm(492, 90, 136, 360),
        beg: new bzm(332, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.joi = {
        sde: new bzm(638, 90, 136, 360),
        beg: new bzm(478, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.coh = {
        sde: new bzm(784, 90, 136, 360),
        beg: new bzm(624, 90, 136, 360),
        hyt: 30,
        hpk: 30
    };
    this.fin = {
        sde: new bzm(160, 0, 800, 86),
        fontSize: 50,
        dmm: 0,
        qic: 6,
        jvl: 0,
        pwm: 2
    };
    this.ijv = {
        sde: new bzm(160, 0, 800, 80),
        fontSize: 50,
        dmm: 0,
        qic: 8,
        jvl: 0,
        pwm: 2
    };
    this.zxb = {
        sde: new bzm(164, 90, 0, 0),
        ikf: [25, 65, 165, 265, 305],
        yje: 30,
        xqa: 30
    };
    this.auf = {
        sde: new bzm(926, 90, 0, 0),
        ikf: [25, 65, 165, 265, 305],
        yje: 30,
        xqa: 30
    };
    this.naz = {};
    this.rig = {};
    this.ajq = {
        sde: new bzm(0, 0, 960, 600),
        jlw: new bzm(0, 0, 160, 600),
        lar: new bzm(20, 400, 120, 120),
        ymq: new bzm(),
        wed: new bzm(20, 50, 120, 120),
        une: new bzm(20, 225, 120, 120),
        dtm: {
            zcw: 0,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 0,
            qbk: 16,
            dmp: 4
        }
    };
    this.iqc = {
        sde: new bzm(0, 0, 960, 600),
        jlw: new bzm(0, 0, 160, 600),
        kmm: {
            sde: new bzm(385, 520, 390, 70),
            fontSize: 20,
            qic: 14,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 2
        },
        pml: {
            sde: new bzm(491, 216, 137, 187),
            avj: new bzm(5, 8, 56, 34),
            bok: new bzm(37, 3, 98, 104),
            zhj: new bzm(33, 110, 72, 76),
            obx: new bzm(10, 42, 45, 45),
            xbi: new bzm(5, 120, 126, 50),
            fontSize: 34,
            air: 50,
            jvl: 3,
            qjd: 4
        },
        qlo: {
            sde: new bzm(540, 105, 380, 45),
            fcg: 2
        },
        dtm: {
            zcw: 24,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            qbk: 10,
            yhq: 0,
            dmp: 4
        },
        display: {
            wci: -18,
            nrj: 16,
            zcw: 32,
            hnp: 18,
            dmp: 3,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        zev: {
            wci: 0,
            nrj: 0,
            zcw: 16,
            hnp: 0,
            dmp: 2,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        fdg: new bzm(0, 0, 160, 22),
        xhf: new bzm(0, 22, 160, 22),
        upy: new bzm(20, 325, 120, 120),
        iog: new bzm(20, 125, 120, 120),
        xbi: new bzm(815, 520, 140, 70),
        vis: new bzm(165, 520, 180, 70),
        lbj: new bzm(233, 315, 91, 96),
        bra: new bzm(326, 315, 91, 96),
        xnx: new bzm(702, 315, 91, 96),
        bta: new bzm(795, 315, 91, 96),
        vpu: new bzm(233, 218, 184, 92),
        xdh: new bzm(702, 218, 184, 92),
        cna: new bzm(225, 170, 200, 50),
        vdw: new bzm(669, 170, 250, 50),
        ftj: new bzm(694, 410, 200, 50)
    };
    this.dfq = {
        sde: new bzm(0, 0, 960, 600),
        nye: new bzm(160, 455, 800, 145),
        ucv: new bzm(0, 0, 160, 600),
        kmm: {
            sde: new bzm(385, 520, 390, 70),
            qic: 14,
            fontSize: 24,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 2
        },
        win: {
            sde: new bzm(205, 458, 710, 25),
            fontSize: 20,
            qic: 4,
            yhq: 3,
            gyt: 2,
            qbk: 6,
            dmp: 0
        },
        gqh: {
            sde: new bzm(385, 520, 390, 70),
            tqk: 10,
            nrj: 2,
            fontSize: 20,
            dmp: 2,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        azj: {
            zcw: 0,
            lto: 0,
            dmm: 0,
            nrj: 0,
            ffc: 0,
            yhq: 0,
            qbk: 10,
            dmp: 4
        },
        rxb: {
            zcw: 0,
            lto: 20,
            dmm: 0,
            nrj: 0,
            ffc: -30,
            yhq: 0,
            qbk: 10,
            dmp: 4
        },
        ory: {
            zcw: 0,
            lto: 24,
            dmm: 0,
            yhq: 0,
            qbk: 10,
            dmp: 6,
            nrj: 0,
            ffc: -40
        },
        tam: {
            zcw: 24,
            lto: 0,
            dmm: 0,
            yhq: 10,
            qbk: 0,
            dmp: 4,
            nrj: -2,
            ffc: 0
        },
        vic: {
            yhq: 6,
            dmm: 0,
            qic: -1,
            qbk: 6,
            fontSize: 36,
            dmp: 3
        },
        display: {
            wci: -18,
            nrj: 16,
            zcw: 32,
            hnp: 18,
            dmp: 3,
            nca: 3,
            dus: 3,
            taw: 3,
            xjs: 3
        },
        mkt: {
            wci: 0,
            nrj: -40,
            zcw: 36,
            hnp: 0,
            dmp: 3,
            nca: 10,
            dus: 10,
            taw: 0,
            xjs: 0
        },
        zev: {
            wci: 0,
            nrj: 0,
            zcw: 16,
            hnp: 0,
            dmp: 2,
            nca: 0,
            dus: 0,
            taw: 0,
            xjs: 0
        },
        fdg: new bzm(0, 0, 160, 22),
        xhf: new bzm(0, 22, 160, 22),
        xuz: new bzm(165, 520, 180, 70),
        did: new bzm(815, 520, 140, 70),
        qzr: new bzm(820, 400, 130, 120),
        lwa: {
            hml: new bzm(5, 210, 150, 150),
            tvx: new bzm(815, 495, 140, 30),
            ikf: new bzm(),
            ato: new bzm(),
            lar: new bzm(20, 400, 120, 120),
            fxb: new bzm(),
            ank: new bzm(20, 50, 120, 120)
        },
        pcb: {
            hml: new bzm(5, 260, 140, 140),
            tvx: new bzm(815, 495, 140, 30),
            ikf: new bzm(),
            ato: new bzm(),
            lar: new bzm(15, 50, 80, 80),
            fxb: new bzm(10, 140, 110, 110),
            ank: new bzm(10, 410, 110, 110)
        },
        wcm: 60
    };
    this.fqr = {
        sde: new bzm(200, 90, 720, 360),
        lineWidth: 4,
        wdh: 5,
        dmp: 1,
        ghj: 136,
        ahd: 120,
        fontSize: 40,
        szo: 10,
        lqe: 5,
        uxk: 100,
        ble: 96,
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
    this.tsu = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390]
    ]
}
lik.prototype = new epb;

function fwb() {
    this.iqc.qlo.sde = new bzm(380, 115, 380, 45);
    this.zxb = {
        sde: new bzm(1, 110, 0, 0),
        ikf: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        yje: 32,
        xqa: 35
    };
    this.auf = {
        sde: new bzm(767, 110, 0, 0),
        ikf: [3, 39, 75, 111, 147, 183, 219, 255, 291, 327],
        yje: 32,
        xqa: 35
    };
    this.fin.sde = new bzm(0, 20, 800, 86);
    this.fin.fontSize = 60;
    this.fin.qic = 0;
    this.tsu = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410],
        [87, 170, 256, 170, 544, 410, 713, 410],
        [87, 410, 256, 410, 544, 170, 713, 170],
        [87, 290, 112, 290, 256, 170, 544, 170, 688, 290, 713, 290],
        [87, 290, 112, 290, 256, 410, 544, 410, 688, 290, 713, 290],
        [87, 170, 112, 170, 256, 290, 544, 290, 688, 170, 713, 170],
        [87, 410, 112, 410, 256, 290, 544, 290, 688, 410, 713, 410],
        [87, 290, 112, 290, 256, 410, 544, 170, 688, 290, 713, 290],
        [87, 290, 112, 290, 256, 170, 544, 410, 688, 290, 713, 290],
        [87, 170, 112, 170, 256, 290, 400, 170, 544, 290, 688, 170, 713, 170],
        [87, 410, 112, 410, 256, 290, 400, 410, 544, 290, 688, 410, 713, 410],
        [87, 290, 256, 290, 400, 170, 544, 290, 713, 290],
        [87, 290, 256, 290, 400, 410, 544, 290, 713, 290],
        [87, 170, 112, 170, 256, 410, 400, 170, 544, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 256, 170, 400, 410, 544, 170, 688, 410, 713, 410],
        [87, 290, 112, 290, 256, 170, 400, 410, 544, 170, 688, 290, 713, 290]
    ];
    this.ajq.dka = {
        sde: new bzm(0, 0, 800, 600),
        ihr: 32,
        fontSize: 16,
        oub: 12,
        avj: [],
        fwc: new bzm(20, 510, 760, 30),
        hnp: 40,
        lineWidth: 1,
        hvq: new bzm(),
        xbi: [new bzm(145, 28, 135, 148), new bzm(140, 198, 95, 148), new bzm(680, 198, 95, 148), new bzm(140, 368, 95, 148), new bzm(680, 368, 95, 148), new bzm(370, 360, 120, 152)],
        dfx: new bzm(495, 132, 206, 34)
    };
    this.ajq.win = {
        sde: new bzm(0, 0, 800, 600),
        hvq: new bzm(),
        fontSize: 20,
        hnp: 40,
        lineWidth: 1,
        avj: [new bzm(120, 460, 560, 70)]
    };
    this.ajq.who = {
        sde: new bzm(0, 0, 800, 600),
        hvq: new bzm(),
        fontSize: 20,
        lineWidth: 1,
        hnp: 40,
        avj: [new bzm(280, 140, 470, 120), new bzm(280, 340, 470, 120)]
    }
}
fwb.prototype = new cyi;

function raf() {
    this.eew = true
}
raf.prototype = new fwb;

function ndu() {
    this.iqc.qlo.sde = new bzm(380, 115, 380, 45);
    this.zxb = {
        sde: new bzm(1, 640, 0, 0),
        ikf: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        yje: 32,
        xqa: 35
    };
    this.auf = {
        sde: new bzm(767, 640, 0, 0),
        ikf: [3, 39, 75, 111, 147, 183, 219, 255, 291, 327],
        yje: 32,
        xqa: 35
    };
    this.fin.sde = new bzm(0, 550, 800, 86);
    this.fin.fontSize = 60;
    this.fin.qic = 0;
    this.tsu = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940],
        [87, 700, 256, 700, 544, 940, 713, 940],
        [87, 940, 256, 940, 544, 700, 713, 700],
        [87, 820, 112, 820, 256, 700, 544, 700, 688, 820, 713, 820],
        [87, 820, 112, 820, 256, 940, 544, 940, 688, 820, 713, 820],
        [87, 700, 112, 700, 256, 820, 544, 820, 688, 700, 713, 700],
        [87, 940, 112, 940, 256, 820, 544, 820, 688, 940, 713, 940],
        [87, 820, 112, 820, 256, 940, 544, 700, 688, 820, 713, 820],
        [87, 820, 112, 820, 256, 700, 544, 940, 688, 820, 713, 820],
        [87, 700, 112, 700, 256, 820, 400, 700, 544, 820, 688, 700, 713, 700],
        [87, 940, 112, 940, 256, 820, 400, 940, 544, 820, 688, 940, 713, 940],
        [87, 820, 256, 820, 400, 700, 544, 820, 713, 820],
        [87, 820, 256, 820, 400, 940, 544, 820, 713, 820],
        [87, 700, 112, 700, 256, 940, 400, 700, 544, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 256, 700, 400, 940, 544, 700, 688, 940, 713, 940],
        [87, 820, 112, 820, 256, 700, 400, 940, 544, 700, 688, 820, 713, 820]
    ];
    this.ajq.dka = {
        sde: new bzm(0, 0, 800, 615),
        ihr: 32,
        fontSize: 16,
        oub: 12,
        avj: [],
        fwc: new bzm(20, 510, 760, 30),
        hnp: 40,
        lineWidth: 1,
        hvq: new bzm(),
        xbi: [new bzm(145, 28, 135, 148), new bzm(140, 198, 95, 148), new bzm(680, 198, 95, 148), new bzm(140, 368, 95, 148), new bzm(680, 368, 95, 148), new bzm(370, 360, 120, 152)],
        dfx: new bzm(495, 132, 206, 34)
    };
    this.ajq.win = {
        sde: new bzm(0, 0, 800, 615),
        hvq: new bzm(),
        fontSize: 20,
        hnp: 40,
        lineWidth: 1,
        avj: [new bzm(120, 460, 560, 70)]
    };
    this.ajq.who = {
        sde: new bzm(0, 0, 800, 615),
        hvq: new bzm(),
        fontSize: 20,
        lineWidth: 1,
        hnp: 40,
        avj: [new bzm(280, 140, 470, 120), new bzm(280, 340, 470, 120)]
    };
    this.top.dka = {
        sde: new bzm(0, 0, 800, 520),
        ihr: 32,
        fontSize: 16,
        oub: 12,
        avj: [],
        fwc: new bzm(20, 488, 760, 30),
        hnp: 40,
        lineWidth: 1,
        hvq: new bzm(),
        xbi: [new bzm(145, 21, 135, 148), new bzm(140, 186, 95, 144), new bzm(680, 186, 95, 144), new bzm(140, 350, 95, 144), new bzm(680, 350, 95, 144), new bzm(370, 340, 120, 150)],
        dfx: new bzm(495, 125, 206, 34)
    }
}
ndu.prototype = new oyx;

function iav() {
    this.iqc.qlo.sde = new bzm(380, 115, 380, 45);
    this.zxb = {
        sde: new bzm(6, 110, 0, 0),
        ikf: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        yje: 32,
        xqa: 35
    };
    this.auf = {
        sde: new bzm(772, 110, 0, 0),
        ikf: [3, 39, 75, 111, 147, 183, 219, 255, 291, 327],
        yje: 32,
        xqa: 35
    };
    this.fin.sde = new bzm(5, 20, 800, 86);
    this.fin.fontSize = 60;
    this.fin.qic = 0;
    this.tsu = [
        [92, 290, 718, 290],
        [92, 170, 718, 170],
        [92, 410, 718, 410],
        [92, 170, 117, 170, 405, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 405, 170, 693, 410, 718, 410],
        [92, 170, 261, 170, 549, 410, 718, 410],
        [92, 410, 261, 410, 549, 170, 718, 170],
        [92, 290, 117, 290, 261, 170, 549, 170, 693, 290, 718, 290],
        [92, 290, 117, 290, 261, 410, 549, 410, 693, 290, 718, 290],
        [92, 170, 117, 170, 261, 290, 549, 290, 693, 170, 718, 170],
        [92, 410, 117, 410, 261, 290, 549, 290, 693, 410, 718, 410],
        [92, 290, 117, 290, 261, 410, 549, 170, 693, 290, 718, 290],
        [92, 290, 117, 290, 261, 170, 549, 410, 693, 290, 718, 290],
        [92, 170, 117, 170, 261, 290, 405, 170, 549, 290, 693, 170, 718, 170],
        [92, 410, 117, 410, 261, 290, 405, 410, 549, 290, 693, 410, 718, 410],
        [92, 290, 261, 290, 405, 170, 549, 290, 718, 290],
        [92, 290, 261, 290, 405, 410, 549, 290, 718, 290],
        [92, 170, 117, 170, 261, 410, 405, 170, 549, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 261, 170, 405, 410, 549, 170, 693, 410, 718, 410],
        [92, 290, 117, 290, 261, 170, 405, 410, 549, 170, 693, 290, 718, 290]
    ];
    this.ajq.dka = {
        sde: new bzm(0, 0, 800, 600),
        ihr: 32,
        fontSize: 16,
        oub: 12,
        avj: [],
        fwc: new bzm(20, 510, 760, 30),
        hnp: 40,
        lineWidth: 1,
        hvq: new bzm(),
        xbi: [new bzm(145, 28, 135, 148), new bzm(140, 198, 95, 148), new bzm(680, 198, 95, 148), new bzm(140, 368, 95, 148), new bzm(680, 368, 95, 148), new bzm(370, 360, 120, 152)],
        dfx: new bzm(495, 132, 206, 34)
    };
    this.ajq.win = {
        sde: new bzm(0, 0, 800, 600),
        hvq: new bzm(),
        fontSize: 20,
        hnp: 40,
        lineWidth: 1,
        avj: [new bzm(120, 460, 560, 70)]
    };
    this.ajq.who = {
        sde: new bzm(0, 0, 800, 600),
        hvq: new bzm(),
        fontSize: 20,
        lineWidth: 1,
        hnp: 40,
        avj: [new bzm(280, 140, 470, 120), new bzm(280, 340, 470, 120)]
    }
}
iav.prototype = new xcm;

function vni() {
    this.eew = true
}
vni.prototype = new iav;

function sxi() {
    this.iqc.qlo.sde = new bzm(380, 115, 380, 45);
    this.zxb = {
        sde: new bzm(1, 90, 0, 0),
        ikf: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        yje: 32,
        xqa: 35
    };
    this.auf = {
        sde: new bzm(767, 90, 0, 0),
        ikf: [3, 39, 75, 111, 147, 183, 219, 255, 291, 327],
        yje: 32,
        xqa: 35
    };
    this.fin.sde = new bzm(0, 0, 800, 86);
    this.fin.fontSize = 60;
    this.fin.qic = 2;
    this.tsu = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390],
        [87, 150, 256, 150, 544, 390, 713, 390],
        [87, 390, 256, 390, 544, 150, 713, 150],
        [87, 270, 112, 270, 256, 150, 544, 150, 688, 270, 713, 270],
        [87, 270, 112, 270, 256, 390, 544, 390, 688, 270, 713, 270],
        [87, 150, 112, 150, 256, 270, 544, 270, 688, 150, 713, 150],
        [87, 390, 112, 390, 256, 270, 544, 270, 688, 390, 713, 390],
        [87, 270, 112, 270, 256, 390, 544, 150, 688, 270, 713, 270],
        [87, 270, 112, 270, 256, 150, 544, 390, 688, 270, 713, 270],
        [87, 150, 112, 150, 256, 270, 400, 150, 544, 270, 688, 150, 713, 150],
        [87, 390, 112, 390, 256, 270, 400, 390, 544, 270, 688, 390, 713, 390],
        [87, 270, 256, 270, 400, 150, 544, 270, 713, 270],
        [87, 270, 256, 270, 400, 390, 544, 270, 713, 270],
        [87, 150, 112, 150, 256, 390, 400, 150, 544, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 256, 150, 400, 390, 544, 150, 688, 390, 713, 390],
        [87, 270, 112, 270, 256, 150, 400, 390, 544, 150, 688, 270, 713, 270]
    ];
    this.ajq.dka = {
        sde: new bzm(0, 0, 800, 600),
        ihr: 32,
        fontSize: 16,
        oub: 14,
        avj: [],
        fwc: new bzm(0, 530, 800, 40),
        hnp: 40,
        lineWidth: 1,
        hvq: new bzm(),
        xbi: [new bzm(145, 28, 135, 148), new bzm(140, 198, 95, 148), new bzm(680, 198, 95, 148), new bzm(140, 368, 95, 148), new bzm(680, 368, 95, 148), new bzm(370, 360, 120, 152)],
        dfx: new bzm(495, 132, 206, 34)
    };
    this.ajq.win = {
        sde: new bzm(0, 0, 800, 600),
        hvq: new bzm(),
        fontSize: 20,
        hnp: 40,
        lineWidth: 1,
        avj: [new bzm(50, 500, 700, 70)]
    };
    this.ajq.who = {
        sde: new bzm(0, 0, 800, 600),
        hvq: new bzm(),
        fontSize: 20,
        lineWidth: 1,
        hnp: 40,
        avj: [new bzm(280, 140, 470, 120), new bzm(280, 340, 470, 120)]
    }
}
sxi.prototype = new gpv;

function xrp() {
    this.iqc.qlo.sde = new bzm(540, 115, 380, 45);
    this.zxb = {
        sde: new bzm(161, 90, 0, 0),
        ikf: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        yje: 32,
        xqa: 35
    };
    this.auf = {
        sde: new bzm(927, 90, 0, 0),
        ikf: [3, 39, 75, 111, 147, 183, 219, 255, 291, 327],
        yje: 32,
        xqa: 35
    };
    this.fin.sde = new bzm(160, 0, 800, 86);
    this.fin.fontSize = 60;
    this.fin.qic = 2;
    this.tsu = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390],
        [247, 150, 416, 150, 704, 390, 873, 390],
        [247, 390, 416, 390, 704, 150, 873, 150],
        [247, 270, 272, 270, 416, 150, 704, 150, 848, 270, 873, 270],
        [247, 270, 272, 270, 416, 390, 704, 390, 848, 270, 873, 270],
        [247, 150, 272, 150, 416, 270, 704, 270, 848, 150, 873, 150],
        [247, 390, 272, 390, 416, 270, 704, 270, 848, 390, 873, 390],
        [247, 270, 272, 270, 416, 390, 704, 150, 848, 270, 873, 270],
        [247, 270, 272, 270, 416, 150, 704, 390, 848, 270, 873, 270],
        [247, 150, 272, 150, 416, 270, 560, 150, 704, 270, 848, 150, 873, 150],
        [247, 390, 272, 390, 416, 270, 560, 390, 704, 270, 848, 390, 873, 390],
        [247, 270, 416, 270, 560, 150, 704, 270, 873, 270],
        [247, 270, 416, 270, 560, 390, 704, 270, 873, 270],
        [247, 150, 272, 150, 416, 390, 560, 150, 704, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 416, 150, 560, 390, 704, 150, 848, 390, 873, 390],
        [247, 270, 272, 270, 416, 150, 560, 390, 704, 150, 848, 270, 873, 270]
    ];
    this.ajq.dka = {
        sde: new bzm(160, 0, 800, 600),
        ihr: 32,
        fontSize: 16,
        oub: 14,
        avj: [],
        fwc: new bzm(0, 530, 800, 40),
        hnp: 40,
        lineWidth: 1,
        hvq: new bzm(),
        xbi: [new bzm(145, 28, 135, 148), new bzm(140, 198, 95, 148), new bzm(680, 198, 95, 148), new bzm(140, 368, 95, 148), new bzm(680, 368, 95, 148), new bzm(370, 360, 120, 152)],
        dfx: new bzm(495, 132, 206, 34)
    };
    this.ajq.win = {
        sde: new bzm(160, 0, 800, 600),
        hvq: new bzm(),
        fontSize: 20,
        hnp: 40,
        lineWidth: 1,
        avj: [new bzm(50, 500, 700, 70)]
    };
    this.ajq.who = {
        sde: new bzm(160, 0, 800, 600),
        hvq: new bzm(),
        fontSize: 20,
        lineWidth: 1,
        hnp: 40,
        avj: [new bzm(280, 140, 470, 120), new bzm(280, 340, 470, 120)]
    }
}
xrp.prototype = new lik;
var kdn = {
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
    ifs: {
        ypv: 0,
        ven: 1,
        sha: 2,
        dra: 3,
        uum: 4,
        kyp: 5,
        wtx: 10,
        mns: 11,
        thn: 12,
        qsv: 13,
        gij: 14,
        pxh: 15,
        tok: 16
    },
    os: {
        hld: 0,
        cxc: 1,
        evx: 2,
        kjq: 3,
        usv: 4
    },
    hhw: {
        ooj: 1,
        jga: 3,
        ejz: 4,
        mgr: 5,
        ktq: 7,
        ntj: 8,
        sot: 11,
        wfg: 13,
        rxl: 14,
        yjt: 6,
        ssg: 9,
        kxw: 10
    },
    aud: {
        ysx: 1,
        edn: 2,
        goo: 4,
        rsh: 8,
        fzi: 16,
        cji: 32
    },
    lzh: {
        djl: 1,
        bnk: 2,
        svv: 3,
        jgs: 4,
        lno: 5,
        gdk: 6,
        ouv: 7,
        weg: 94,
        kef: 95,
        nnz: 96,
        pdd: 97,
        bvs: 98,
        ruq: 99,
        roulette: {
            ura: 2,
            tdw: 9,
            umz: 10
        }
    },
    ui: {
        rub: "minimal",
        vtq: "modern",
        ejz: "classic"
    },
    cwg: {
        nyd: "auto",
        umn: "left",
        zgd: "right"
    },
    hbo: {
        kvw: 0,
        pes: 1,
        bqz: 2,
        gnz: 3,
        ygc: 4
    },
    npb: {
        vky: {
            zfa: "ji",
            njp: "jv",
            qmc: "jh"
        }
    },
    lbv: {
        pqw: {
            ipj: 1,
            fvd: 2
        },
        wys: {
            vgs: 1,
            qdx: 2,
            god: 3
        }
    }
};
kdn.ivj = (function () {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += kdn.aud.ysx
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += kdn.aud.edn
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += kdn.aud.goo
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += kdn.aud.goo
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += kdn.aud.rsh
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.fzp = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function () {
                var e = this.fzp();
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
            window.vym = window.requestAnimationFrame;
            window.dfy = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.vym; ++a) {
            window.vym = window[g[a] + "RequestAnimationFrame"];
            window.dfy = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.vym || !window.dfy) {
            window.vym = function (m, j) {
                var e = new Date().getTime();
                var k = Math.max(0, 16 - (e - d));
                var l = window.setTimeout(function () {
                    m(e + k)
                }, k);
                d = e + k;
                return l
            }
        }
        if (!window.dfy) {
            window.dfy = function (e) {
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
        console.error(c.lzh)
    }
    return f
})();

function tya() {
    var a = {};
    this.kur = 1;
    this.hmd = 1;
    this.ujo = 0.6;
    this.jtw = 0.4;
    this.cjm = function () {};
    this.ivq = function (b, c) {
        a[b] = c
    };
    this.asl = function (b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.kur
        }
    }
}

function hkw() {
    this.audio = {
        pdi: 65,
        npr: -1,
        value: "A",
        cbi: null
    };
    this.bsb = {
        pdi: 70,
        npr: 122,
        value: "F",
        cbi: "F11"
    };
    this.qlo = {
        pdi: 72,
        npr: -1,
        value: "H",
        cbi: null
    };
    this.sjx = {
        pdi: 83,
        npr: -1,
        value: "S",
        cbi: null
    };
    this.yup = {
        pdi: 68,
        npr: -1,
        value: "D",
        cbi: null
    };
    this.ok = {
        pdi: 13,
        npr: -1,
        value: "OK",
        cbi: null
    };
    this.tzn = [this.audio, this.bsb, this.qlo, this.sjx, this.yup, this.ok]
}

function cwv() {
    var q = this;
    this.zot = false;
    this.fkk = null;
    this.njj = false;
    this.bas = false;
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
    this.cjm = function () {
        this.rgr();
        this.dzj();
        this.njj = false;
        this.bas = false
    };
    this.rgr = function () {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.fkk = webAudioEngine.createGain();
            this.fkk.connect(webAudioEngine.destination);
            this.zot = true
        } catch (r) {
            this.zot = false
        }
    };
    this.dzj = function () {
        n = kdn.lgy.ubb()
    };
    this.plz = function (r) {
        m = r
    };
    this.cdq = function (r) {
        c = r
    };
    this.iii = function (r) {
        o = r
    };
    this.spi = function (v, u, r, s) {
        var t = new xjx(v);
        t.cjm(this.zot, u, r, m.asl(v));
        j[v] = t;
        l.push(t);
        d.push({
            lnr: t,
            bex: s,
            sww: q.pji,
            ptc: n
        })
    };
    this.vpt = function (t, s) {
        var r = new Image();
        f[t] = r;
        d.push({
            lnr: r,
            bex: s,
            sww: null
        })
    };
    this.gty = function (s, r) {
        d.unshift({
            lnr: null,
            bex: s,
            sww: q.kat,
            kri: r
        })
    };
    this.glq = function () {
        p = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            q.ygl(d.shift())
        }
    };
    this.start = function () {
        if (!q.njj) {
            return
        }
        q.njj = false;
        p = false;
        g = d.length;
        b = 0;
        k = 1;
        for (var s = 0; s < k && d.length > 0; s++) {
            a.push(d.shift())
        }
        for (var r = 0; r < a.length; r++) {
            q.ygl(a.shift())
        }
    };
    this.ojx = function () {
        b++;
        if (q.zmw()) {
            q.njj = true;
            kdn.uay.sft()
        }
    };
    this.ogf = function () {
        q.grd()
    };
    this.pps = function () {
        q.bas = true;
        q.grd()
    };
    this.grd = function () {
        b++;
        q.app();
        if (q.zmw()) {
            q.ihn()
        } else {
            q.gqo()
        }
    };
    this.app = function () {
        var r = kdn.uay.bew.gfj("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (r) {
                r.zwp(e)
            }
        }
    };
    this.ihn = function () {
        var t = kdn.uay.bew.gfj("loading");
        if (q.bas) {
            kdn.uay.tap(kdn.uay.language.xww);
            var s = confirm(kdn.uay.language.dgn);
            if (s == true) {
                kdn.uay.jeu = false;
                q.lfg();
                kdn.uay.ibt()
            } else {
                kdn.uay.frj({
                    type: "gameDataLoaded",
                    sender: kdn.uay.yfk,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                });
                setTimeout(kdn.uay.fba, 1000)
            }
        } else {
            if (!kdn.uay.nvh) {
                e = 100;
                if (t) {
                    t.zwp(e)
                }
                if (c === true) {
                    if (o === true) {
                        t.xsj((kdn.uay.xhi() === true) ? kdn.uay.language.oxb : kdn.uay.language.nsm, kdn.uay.eha.zgs("device_info"))
                    } else {
                        t.xsj(kdn.uay.language.vca, null)
                    }
                } else {
                    setTimeout(kdn.uay.ibt, 200)
                }
            }
        }
    };
    this.lna = function () {
        return e
    };
    this.gqo = function () {
        if (d.length > 0) {
            a.push(d.shift());
            if (k === 1 && (a[0].lnr instanceof Image || a[0].lnr instanceof xjx)) {
                k = 30;
                for (var r = 0; r < k && d.length > 0; r++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            q.ygl(a.shift())
        }
    };
    this.zmw = function () {
        return (g > 0 && b == g)
    };
    this.ygl = function (r) {
        if (r.lnr instanceof Image) {
            if (p === true) {
                this.hib(r.lnr, r.bex)
            } else {
                this.koy(r.lnr, r.bex)
            }
        } else {
            if (r.lnr instanceof xjx) {
                this.jct(r.lnr, r.bex, r.sww, r.ptc)
            } else {
                this.wkd(r.bex, r.kri, r.sww)
            }
        }
    };
    this.hib = function (s, r) {
        s.onload = function () {
            kdn.uay.eha.ojx()
        };
        s.onerror = function () {
            console.error("can not load image " + r)
        };
        s.src = r + "?v=" + kdn.uay.iix
    };
    this.koy = function (s, r) {
        s.onload = function () {
            kdn.uay.eha.ogf()
        };
        s.onerror = function () {
            console.error("can not load image " + r);
            kdn.uay.tap(kdn.uay.language.dpw);
            setTimeout(kdn.uay.fba, 3000)
        };
        s.src = r + "?v=" + kdn.uay.iix
    };
    this.jct = function (s, t, u, r) {
        s.load(t, u, r)
    };
    this.wkd = function (u, r, v) {
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
            kdn.uay.tap(kdn.uay.language.dpw);
            setTimeout(kdn.uay.fba, 3000)
        };
        try {
            s.send()
        } catch (t) {
            console.error("can not load from " + u + r);
            kdn.uay.tap(kdn.uay.language.dpw);
            setTimeout(kdn.uay.fba, 3000)
        }
    };
    this.pji = function (s, r) {
        j[s].peg = r
    };
    this.kat = function (t, s) {
        var r = new Image();
        r.onload = function () {
            q.vtu(r, s.data)
        };
        r.onerror = function () {
            console.error("can not load image " + t + s.src);
            kdn.uay.tap(kdn.uay.language.dpw);
            setTimeout(kdn.uay.fba, 3000)
        };
        r.src = t + s.src + "?v=" + kdn.uay.iix
    };
    this.vtu = function (t, w) {
        var u = null,
            s = null;
        for (var v = 0, r = w.length; v < r; v++) {
            u = document.createElement("canvas");
            u.width = w[v].rect.w;
            u.height = w[v].rect.h;
            s = u.getContext("2d");
            s.drawImage(t, w[v].rect.x, w[v].rect.y, w[v].rect.w, w[v].rect.h, 0, 0, w[v].rect.w, w[v].rect.h);
            q.kdm(w[v].id, u)
        }
        kdn.uay.eha.ogf()
    };
    this.oku = function (r) {
        if (j && j[r]) {
            return j[r]
        } else {}
        return null
    };
    this.kdm = function (s, r) {
        if (r && !f[s]) {
            f[s] = r
        } else {}
        return null
    };
    this.zgs = function (r) {
        if (f[r]) {
            return f[r]
        } else {}
        return null
    };
    this.xhe = function (r) {
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
    this.zux = function (r) {
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
    this.mtk = function (s, r) {
        if (j && j[s]) {
            j[s].play(r)
        } else {}
    };
    this.xuk = function (r) {
        if (j && j[r]) {
            j[r].stop()
        } else {}
    };
    this.wit = function (s, r) {
        if (j && j[s]) {
            j[s].xyr(r)
        } else {}
    };
    this.awi = function (u, s, t, r) {
        r = (r != null && r === true);
        if (j && j[u]) {
            j[u].rym(m.asl(u) * s, t, r)
        }
    };
    this.img = function (r) {
        if (j && j[r]) {
            return j[r].gwy()
        }
        return 0
    };
    this.hgz = function (r) {
        if (this.zot) {
            this.fkk.gain.setValueAtTime(r, webAudioEngine.currentTime)
        }
    };
    this.ivn = function (s) {
        if (this.zot) {
            this.fkk.gain.setValueAtTime((s) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (l) {
                for (var r = 0; r < l.length; r++) {
                    l[r].xyr(s)
                }
            }
        }
    };
    this.lfg = function () {
        if (l) {
            for (var r = 0; r < l.length; r++) {
                l[r].clear()
            }
        }
        l = null;
        j = null
    }
}

function xlf() {
    this.zwc = {};
    this.oty = {};
    this.gzy = [];
    this.cjm = function () {
        this.zwc = {};
        this.oty = {};
        this.gzy = []
    };
    this.hca = function (b) {
        this.zwc[b] = b
    };
    this.udd = function (f, e, d) {
        this.oty[f] = e;
        this.oty[f].fqc = [];
        if (d && this.zwc) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.zwc[d[c]]) {
                    this.oty[f].fqc.push(d[c])
                } else {}
            }
        }
        this.gzy.push(this.oty[f])
    };
    this.mpl = function () {
        var c = [];
        for (var d = 0, b = this.gzy.length; d < b; d++) {
            if (this.gzy[d] != null) {
                c.push(this.gzy[d])
            }
        }
        return c
    };
    this.gfj = function (b) {
        if (this.oty && this.oty[b]) {
            return this.oty[b]
        }
        return null
    };
    this.wrb = function (g) {
        if (this.zwc && this.zwc[g]) {
            var d = [];
            for (var f = 0, b = this.gzy.length; f < b; f++) {
                for (var e = 0, c = this.gzy[f].fqc.length; e < c; e++) {
                    if (this.gzy[f].fqc[e] == g) {
                        d.push(this.gzy[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.ckx = function () {
        return this.zwc
    };
    this.ysn = function (e) {
        var d = -1;
        if (this.oty && this.oty[e]) {
            for (var c = 0, b = this.gzy.length; c < b; c++) {
                if (this.gzy[c] == this.oty[e]) {
                    d = c;
                    this.oty[e] = null
                }
            }
        }
        if (d >= 0) {
            this.gzy.splice(d, 1)
        }
    };
    this.kqw = function (f) {
        if (this.zwc && this.zwc[f]) {
            this.zwc[f] = null;
            for (var e = 0, b = this.gzy.length; e < b; e++) {
                for (var d = 0, c = this.gzy[e].fqc.length; d < c; d++) {
                    if (this.gzy[e].fqc[d] == f) {
                        this.gzy[e].fqc.splice(d, 1)
                    }
                }
            }
        }
    };
    this.qex = function (e, d, c, b) {
        return a(this.gfj(e), d, c, b)
    };
    this.bpi = function (f, d, c) {
        for (var e = 0, b = this.gzy.length; e < b; e++) {
            a(this.gzy[e], f, d, c)
        }
    };
    this.kzj = function (k, l, f, e) {
        if (this.zwc && this.zwc[k]) {
            for (var g = 0, b = this.gzy.length; g < b; g++) {
                for (var d = 0, c = this.gzy[g].fqc.length; d < c; d++) {
                    if (this.gzy[g].fqc[d] == k) {
                        a(this.gzy[g], l, f, e)
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

function xjx(b) {
    var a = this;
    this.fnh = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.txt = false;
    this.peg = null;
    this.uvf = null;
    this.lgf = 0;
    this.ddw = 0;
    this.rrl = 0;
    this.ote = 0;
    this.kvj = 30000;
    this.uxf = "";
    this.pfj = "";
    this.qhl = "";
    this.oan = null;
    this.dyj = 1;
    this.ycw = 0;
    this.aie = -1;
    this.pkd = 0;
    this.hyv = 0;
    this.qxk = false;
    this.cjm = function (c, f, d, e) {
        this.txt = c;
        if (e) {
            this.dyj = e;
            this.volume = e
        }
        if (f) {
            this.fnh = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function (c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.txt) {
            clearTimeout(this.aie);
            if (this.peg) {
                this.volume = (this.muted === true) ? 0 : kdn.qwt.value40 * this.dyj;
                this.qxk = false;
                this.uvf = webAudioEngine.createBufferSource();
                this.uvf.buffer = this.peg;
                this.uvf.loop = this.loop;
                this.lgf = webAudioEngine.createGain();
                this.lgf.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.uvf.connect(this.lgf);
                this.lgf.connect(kdn.uay.eha.fkk);
                this.uvf.start(0, c);
                this.ycw = webAudioEngine.currentTime;
                if (this.fnh) {
                    this.ddw = setTimeout(a.fnh, a.peg.duration * 1000)
                }
            }
        } else {
            if (this.uvf) {
                if (this.loop) {
                    if (kdn.lgy.hqv != kdn.ifs.uum && kdn.lgy.hqv != kdn.ifs.gij) {
                        this.rrl = setInterval(a.fnx, a.uvf.duration * 1000)
                    }
                }
                this.uvf.currentTime = 0;
                this.uvf.play()
            }
        }
    };
    this.fnx = function () {
        if (!a.uvf.paused || (kdn.lgy.hqv != kdn.ifs.sha && kdn.lgy.hqv != kdn.ifs.thn)) {
            a.uvf.currentTime = 0
        }
    };
    this.stop = function () {
        if (a) {
            if (a.txt) {
                a.ycw = 0;
                if (a.uvf) {
                    a.uvf.stop(0);
                    a.uvf = null
                }
                clearTimeout(a.ddw);
                if (a.aie >= 0) {
                    clearTimeout(a.aie);
                    a.aie = -1
                }
            } else {
                if (a.uvf) {
                    a.uvf.currentTime = 0;
                    a.uvf.pause();
                    clearInterval(a.rrl);
                    if (a.aie >= 0) {
                        clearTimeout(a.aie);
                        a.aie = -1
                    }
                }
            }
        }
    };
    this.load = function (e, c, d) {
        this.uxf = d[0];
        if (d.length >= 2) {
            this.pfj = d[1];
            this.qhl = e;
            this.oan = c
        }
        e += this.uxf + "?v=" + kdn.uay.iix;
        if (this.txt) {
            this.guq(e, c)
        } else {
            this.gqg(e)
        }
    };
    this.van = function () {
        if (this.txt) {
            this.guq(this.qhl + this.pfj + "?v=" + kdn.uay.iix, this.oan)
        }
    };
    this.gqg = function (c) {
        this.uvf = new Audio();
        this.ote = setTimeout(function () {
            console.error("can not load audio " + c);
            kdn.uay.eha.pps()
        }, this.kvj);
        this.uvf.addEventListener("canplaythrough", function () {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.ote);
            kdn.uay.eha.ogf();
            a.rfa()
        }, false);
        this.uvf.addEventListener("error", function () {
            clearTimeout(a.ote);
            console.error("can not load audio " + c);
            kdn.uay.eha.pps()
        }, false);
        this.uvf.volume = kdn.qwt.value40 * this.volume;
        this.uvf.src = c;
        this.uvf.load()
    };
    this.guq = function (f, g) {
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
                kdn.uay.eha.ogf()
            }, function () {
                a.pcn("can not decode audio ", f)
            })
        };
        c.onerror = function () {
            a.pcn("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.pcn("can not load audio from ", f)
        }
    };
    this.pcn = function (d, c) {
        console.error(d + c);
        if (a.pfj != "" && c.indexOf(a.pfj) < 0) {
            a.van()
        } else {
            kdn.uay.eha.pps()
        }
    };
    this.jxo = function (c) {
        this.fnh = c;
        this.rfa()
    };
    this.rfa = function () {
        if (!this.txt) {
            if (this.fnh) {
                if (this.uvf) {
                    this.uvf.addEventListener("ended", function () {
                        a.fnh()
                    }, false)
                }
            }
            if (kdn.lgy.hqv == kdn.ifs.uum || kdn.lgy.hqv == kdn.ifs.gij) {
                if (this.loop) {
                    if (this.uvf) {
                        this.uvf.addEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.uva = function () {
        if (!this.wxx) {
            if (this.fnh) {
                if (this.uvf) {
                    this.uvf.removeEventListener("ended", function () {
                        a.fnh()
                    }, false)
                }
            }
            if (kdn.lgy.hqv == kdn.ifs.uum || kdn.lgy.hqv == kdn.ifs.gij) {
                if (this.loop) {
                    if (this.uvf) {
                        this.uvf.removeEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.rym = function (d, e, c) {
        if (this.txt === true && this.lgf) {
            this.volume = (this.muted === true) ? 0 : kdn.qwt.value40 * d * this.dyj;
            if (e > 0) {
                this.lgf.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.lgf.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.aie = setTimeout(this.stop, e)
            }
        } else {
            if (!this.txt && c === true) {
                this.aie = setTimeout(this.stop, e)
            }
        }
    };
    this.xyr = function (c) {
        this.muted = c;
        if (!this.txt) {
            if (this.uvf && this.uvf.readyState > 0) {
                this.uvf.muted = c
            }
        } else {
            if (this.lgf) {
                this.lgf.gain.linearRampToValueAtTime((this.muted === true) ? 0 : kdn.qwt.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function () {
        if (this.txt) {
            if (this.uvf) {
                this.uvf.stop(0);
                clearTimeout(this.ddw);
                this.uvf = null
            }
        } else {
            if (this.uvf && this.uvf.readyState > 0) {
                this.uvf.currentTime = 0;
                this.uvf.pause();
                if (this.fnh) {
                    this.uva(this.fnh)
                }
                this.uvf = null
            }
        }
    };
    this.gwy = function () {
        if (this.txt && this.ycw > 0) {
            return (webAudioEngine.currentTime - this.ycw) % this.peg.duration
        }
        return 0
    }
}

function hnr() {
    var a = null;
    this.buu = "";
    var b = null;
    this.connect = function (c) {
        a = this;
        this.buu = c;
        b = new WebSocket(this.buu);
        b.onopen = function (d) {
            a.zlu(d)
        };
        b.onclose = function (d) {
            a.oje(d)
        };
        b.onmessage = function (d) {
            a.qnf(d)
        };
        b.onerror = function (d) {
            a.rqo(d)
        }
    };
    this.vfo = function (c) {};
    this.zzy = function (c) {
        b.send(c)
    };
    this.zlu = function (c) {
        this.zzy("A/u25vlt")
    };
    this.oje = function (c) {};
    this.qnf = function (c) {
        this.vfo(c.data)
    };
    this.rqo = function (c) {}
}

function qem() {
    var b = null;
    this.uwd = null;
    this.ivj = 0;
    this.aqu = -1;
    this.lzh = -1;
    this.gzh = -1;
    this.slb = 0;
    this.buu = "";
    this.cud = "";
    this.dkk = "";
    this.tfk = "";
    this.yfk = "";
    this.iix = "";
    this.lkw = "";
    this.jkg = "";
    this.wln = [];
    this.ouh = [];
    this.bnt = [];
    this.gfw = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.cjm = function (j) {
        this.uwd = j;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.buu);
        c.onopen = function (k) {
            b.zlu(k)
        };
        c.onclose = function (k) {
            b.oje(k)
        };
        c.onmessage = function (k) {
						var tmpA=k.data.split("_");
			
			if(tmpA[1]!=undefined){
			gameController.reels=JSON.parse(tmpA[1]);
			}
			k.data=tmpA[0];
            b.qnf(k)
        };
        c.onerror = function (k) {
            b.rqo(k)
        }
    };
    this.yux = function (j) {
        var k = parseInt(j.charAt(this.slb), 16);
        this.slb++;
        return k
    };
    this.dkg = function (j) {
        var l = 0;
        var k = j.charAt(this.slb);
        k += j.charAt(this.slb + 1);
        this.slb += 2;
        l = parseInt(k, 16);
        return l
    };
    this.wty = function (m) {
        var j = this.gxf(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.slb), 16);
            this.slb += 1
        }
        return n
    };
    this.gxf = function (n) {
        var m = 0;
        var j = parseInt(n.charAt(this.slb), 16);
        this.slb++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.slb);
            this.slb += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.ntn = function (j) {
        var k = "";
        if (this.slb < j.length) {
            k = j.substring(this.slb, j.length)
        }
        return k
    };
    this.vfo = function (j) {};
    this.ojp = function (o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === kdn.npb.vky.zfa || u === kdn.npb.vky.njp) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === kdn.npb.vky.zfa && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.wln[p] = {
                                bdl: t[0],
                                value: Number(t[1]),
                                wgw: t[2]
                            };
                            if (t.length >= 5) {
                                this.wln[p].mus = t[3];
                                this.wln[p].msj = t[4]
                            }
                        }
                    } else {
                        if (u === kdn.npb.vky.njp && t.length >= 2) {
                            for (var p = 0, r = this.wln.length; p < r; p++) {
                                if (this.wln[p].bdl === t[0]) {
                                    this.wln[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === kdn.npb.vky.zfa) {
                    s = [];
                    for (var p = 0, r = this.wln.length; p < r; p++) {
                        s.push({
                            bdl: this.wln[p].bdl,
                            value: (Number)(this.wln[p].bdl.split("_")[1])
                        })
                    }
                    s.sort(function (v, j) {
                        return v.value - j.value
                    });
                    for (var p = 0, r = this.wln.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.wln[p].bdl == s[n].bdl) {
                                this.wln[p].sde = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === kdn.npb.vky.njp) {
                        this.uwd.jvi(this.wln)
                    }
                }
            } else {
                if (u === kdn.npb.vky.qmc) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            bdl: t[0],
                            value: Number(t[1]),
                            blh: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.cud = t[3];
                            q.nlg = t[4]
                        }
                        this.uwd.kfw(q)
                    }
                }
            }
        }
    };
    this.close = function () {
        g = true;
        if (c.readyState >= 2) {
            b.uwd.rzz.xlq()
        } else {
            b.zzy("A/u260");
            if (kdn.qwt.value66 > 0) {
                setTimeout(b.ttm, kdn.qwt.value66)
            }
        }
    };
    this.cca = function (j) {
        if (this.uwd.rzz.mjs) {
            setTimeout(function () {
                window.location.reload()
            }, j)
        } else {
            this.uwd.rzz.cph(e);
            setTimeout(function () {
                if (e < kdn.qwt.value46) {
                    b.uwd.rzz.connect();
                    e++
                } else {
                    b.uwd.rzz.qar()
                }
            }, j)
        }
    };
    this.dod = function () {
        return g
    };
    this.gcf = function () {
        g = true;
        d = true;
        this.zzy("A/u260");
        if (kdn.qwt.value66 > 0) {
            setTimeout(this.ttm, kdn.qwt.value66)
        }
    };
    this.iuc = function () {
        g = true;
        f = true;
        this.zzy("A/u260");
        if (kdn.qwt.value66 > 0) {
            setTimeout(this.ttm, kdn.qwt.value66)
        }
    };
    this.zlu = function (j) {
        var k = -(new Date().getTimezoneOffset() / 60),
            n = window.navigator.userLanguage || window.navigator.language,
            m = (kdn.uay) ? kdn.lgy.hqv + "|" + kdn.uay.evj + "|" + k + "|" + n : "",
            l = (kdn.uay && kdn.uay.wzg > 0) ? "," + kdn.uay.wzg : "";
        a = false;
        this.uwd.spr();
        this.zzy("A/u25" + this.cud + "," + this.dkk + "," + this.tfk + "," + this.yfk + "," + this.iix + "," + this.lkw + "," + this.jkg + "," + m + l)
    };
    this.oje = function (j) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (kdn.lgy.hqv == kdn.ifs.ypv || kdn.lgy.hqv == kdn.ifs.wtx) {
                setTimeout(b.hxk, 500)
            } else {
                this.uwd.jjp()
            }
        } else {
            if (d) {
                if (kdn.qwt.value13 == true) {
                    this.uwd.rzz.usl()
                } else {
                    this.uwd.rzz.dru()
                }
            } else {
                if (f) {
                    this.uwd.rzz.jds()
                } else {
                    this.uwd.rzz.fba()
                }
            }
        }
    };
    this.qnf = function (j) {
        this.vfo(j.data)
    };
    this.rqo = function (j) {};
    this.zzy = function (j) {
        if (c.readyState >= 2) {
            this.oje()
        }
        this.ivj = 0;
         var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"HotTwentyAM"}';j=tmpPar;
        c.send(j);
    };
    this.hxk = function () {
        b.uwd.jjp()
    };
    this.ttm = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.oje()
    }
}

function urw() {
    this.rzz = null;
    this.uzy = null;
    this.buu = "";
    this.cud = "";
    this.dkk = "";
    this.tfk = "";
    this.yfk = "";
    this.lkw = "";
    this.jkg = "";
    this.spr = function () {};
    this.qnf = function (a) {
        this.rzz.ctn(a)
    };
    this.juk = function () {};
    this.jjp = function () {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.rzz != null && !this.uzy.dod()) {
            this.rzz.hjl("Can not connect to gaming server!", true)
        }
    };
    this.rqo = function (a) {
        if (this.uzy.ivj == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.rzz != null) {
            this.rzz.frj({
                type: "gameDataLoaded",
                sender: this.rzz.yfk,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    success: false
                }
            });
            this.rzz.hjl(a, true)
        }
    };
    this.cca = function (a) {
        this.uzy.cca(a)
    };
    this.wrn = function () {
        this.rzz.qba(this.uzy.blh)
    };
    this.jvi = function (a) {
        this.rzz.jvi(a)
    };
    this.kfw = function (a) {
        this.rzz.kfw(a)
    };
    this.rev = function () {};
    this.wbg = function () {
        this.rzz.wbg()
    };
    this.yab = function () {
        this.rzz.yab()
    }
}

function qib() {
    var b = null;
    this.rzz = null;
    this.buu = "";
    this.cud = "";
    this.dkk = "";
    this.tfk = "";
    this.yfk = "";
    this.iix = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.bvy = true;
    this.jiz = false;
    this.hhs = false;
    this.slb = 0;
    this.kvi = 0;
    this.ext = 0;
    this.hmr = 0;
    this.cjp = 0;
    this.cjm = function (f, g) {
        this.buu = g;
        this.rzz = f;
        this.hhs = false;
        return this
    };
    this.connect = function (g, k, j, l, f, m) {
        b = this;
        e = false;
        a = false;
        this.cud = k;
        this.dkk = j;
        this.tfk = l;
        this.yfk = g;
        this.iix = f;
        this.bvy = true;
        this.jiz = m;
        c = new WebSocket(this.buu);
        c.onopen = function (n) {
            b.zlu(n)
        };
        c.onclose = function (n) {
            b.oje(n)
        };
        c.onmessage = function (n) {
            b.qnf(n)
        };
        c.onerror = function (n) {
            b.rqo(n)
        }
    };
    this.yux = function (f) {
        var g = parseInt(f.charAt(this.slb), 16);
        this.slb++;
        return g
    };
    this.gxf = function (k) {
        var j = 0;
        var f = parseInt(k.charAt(this.slb), 16);
        this.slb++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.slb);
            this.slb += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.vfo = function (j) {
        var l = this.rzz.bew.gfj("stats");
        if (j != null && j != "null" && j) {
            if (j == "010101010101010") {
                this.gam()
            } else {
                this.slb = 0;
                this.gzh = this.yux(j);
                if (this.gzh == 0) {
                    var k = [];
                    k[0] = this.gxf(j);
                    k[1] = this.gxf(j);
                    k[2] = this.gxf(j);
                    k[3] = this.gxf(j);
                    k[4] = this.gxf(j);
                    k[5] = this.gxf(j);
                    k[6] = this.gxf(j);
                    if (kdn.qwt.value36) {
                        this.ext = k[0];
                        this.hmr = k[1];
                        this.cjp = k[2]
                    } else {
                        if (kdn.qwt.value37) {
                            var g = kdn.qwt.value39;
                            var f = k[4];
                            f = (g <= f) ? (this.jiz) ? 100 : g * 60000 : (g - f) * 60000;
                            this.kvi = k[3] * 60000;
                            this.hmr = k[5];
                            this.cjp = k[6];
                            this.rzz.xfi(f);
                            if (!this.hhs) {
                                this.hhs = true;
                                this.rzz.ydr(k[3] * 60000)
                            }
                            if (this.jiz) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.jiz) {
                        if (l) {
                            l.mcr(this.ext, this.hmr, this.cjp, this.kvi)
                        }
                    }
                } else {
                    console.error("Statistic error: " + j);
                    if (!this.jiz) {
                        if (l) {
                            l.mcr(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.gam = function () {
        this.zzy("A/u270," + this.yfk)
    };
    this.zzy = function (f) {
        if (c && !e) {
            this.ivj = 0;
            c.send(f)
        }
    };
    this.close = function (f) {
        this.bvy = f;
        if (c && c.readyState >= 2) {
            if (this.rzz && this.bvy) {
                this.rzz.bvy()
            }
        } else {
            this.zzy("A/u260");
            if (kdn.qwt.value66 > 0) {
                setTimeout(this.ttm, kdn.qwt.value66)
            }
        }
        e = true
    };
    this.zlu = function (f) {
        a = false;
        this.zzy("A/u25" + this.cud + "," + this.dkk + "," + this.tfk + "," + d + "," + this.iix)
    };
    this.oje = function (f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.jiz) {
                if (this.rzz && this.bvy) {
                    this.rzz.bvy()
                }
            }
        }
    };
    this.qnf = function (f) {
        this.vfo(f.data)
    };
    this.rqo = function (f) {};
    this.ttm = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.oje()
    }
}

function bzm(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.ghn = function () {
        return this.x + this.width
    };
    this.sfh = function () {
        return this.y + this.height
    };
    this.qon = function () {
        return this.x + this.width / 2
    };
    this.dnc = function () {
        return this.y + this.height / 2
    };
    this.lim = function (e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.ddl = function (f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function jvq() {
    this.hqv = -1;
    this.ctc = -1;
    this.yit = false;
    this.nyq = false;
    this.zvx = false;
    this.utf = false;
    this.uym = false;
    this.yaz = false;
    this.puv = false;
    this.yay = true;
    this.tqc = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.yit = true;
            this.zvx = true;
            this.hqv = kdn.ifs.sha
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.zvx = true
                }
                this.hqv = kdn.ifs.kyp
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.hqv = kdn.ifs.thn;
                        this.zvx = true
                    } else {
                        this.hqv = kdn.ifs.sha
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.hqv = kdn.ifs.tok;
                                this.zvx = true
                            } else {
                                this.hqv = kdn.ifs.mns;
                                this.zvx = true;
                                this.utf = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.uym = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.yaz = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.hqv = kdn.ifs.ven
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.hqv = kdn.ifs.dra
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.hqv = kdn.ifs.pxh;
                                    this.zvx = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.hqv = kdn.ifs.gij;
                                        this.zvx = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.hqv = kdn.ifs.gij;
                                            this.zvx = true
                                        } else {
                                            this.hqv = kdn.ifs.uum
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.hqv = kdn.ifs.mns;
                                    this.nyq = true;
                                    this.zvx = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.hqv = kdn.ifs.mns;
                                        this.nyq = true;
                                        this.zvx = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.hqv = kdn.ifs.wtx;
                                            this.zvx = true
                                        } else {
                                            this.hqv = kdn.ifs.ypv
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
    this.pyk = function () {
        var a = navigator.language.split("")[0];
        return a
    };
    this.geh = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.ctc = kdn.os.hld;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.puv = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.ctc = kdn.os.kjq
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.ctc = kdn.os.evx
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.ctc = kdn.os.usv;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.yay = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.ctc = kdn.os.cxc
                        }
                    }
                }
            }
        }
    };
    this.pct = function () {
        return this.yaz
    };
    this.eho = function () {
        return (this.uym && !this.yaz)
    };
    this.hty = function () {
        return this.utf
    };
    this.sbe = function () {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.hlm = function () {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.aol = function () {
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
    this.jmt = function () {
        return (this.ofh() === true)
    };
    this.ofh = function () {
        if ((screen.width <= kdn.qwt.value73.w && screen.height <= kdn.qwt.value73.h) || (screen.height <= kdn.qwt.value73.w && screen.width <= kdn.qwt.value73.h)) {
            return true
        }
        return false
    };
    this.buo = function (j, k, l, o, e, b, f, m, n, a, d, g) {
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
    this.vru = function (b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.rgu = function () {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.nag = function () {
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
    this.ryj = function () {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.dej = function (b) {
        try {
            if (this.ryj() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.dqx = function () {
        try {
            if (this.ryj() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.lpf = function () {
        return false
    };
    this.frj = function (a) {
        if (kdn.qwt.value77 !== undefined && kdn.qwt.value77) {
            if (a !== null && a !== undefined) {
                window.parent.postMessage(a, "*")
            }
        }
    };
    this.scq = function (c, a) {
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
    this.ubb = function () {
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
    this.jnl = function (r, p, f, m, l, a, q, d, s, g, o, k) {
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
    this.ufv = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.xhg = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.hpn = function (r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.suj = function (n, g, d, a, k, b, l, m, f) {
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
    this.elk = function (o, j, f, a, l, c, n, b, m, g, p) {
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
    this.owz = function (p, d, l, k, o, m, f, q, r, g, n, c) {
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
    this.hal = function (r, k, g, b, n, q, m, d, f, p, a, o, j, s) {
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
    this.eys = function (n, g, d, a, k, l, b, m, f, o) {
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
    this.kra = function (l, g, d, c, j, a, k, f, m) {
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

function yos() {
    this.parent = null;
    this.context2D = null;
    this.saw = null;
    this.vtx = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.qmi = true;
    this.tnb = false;
    this.cjm = function (a, d, c) {
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
                this.saw = document.createElement("canvas");
                this.saw.width = this.width;
                this.saw.height = this.height;
                this.context2D = this.saw.getContext("2d");
                if (c) {
                    this.vtx = c
                }
            }
            this.tnb = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.yai = function (a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.saw) {
                this.saw.width = this.width;
                this.saw.height = this.height
            }
            this.tnb = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.idh = function (a) {};
    this.tqi = function (a) {};
    this.dft = function (a, b) {
        this.qmi = a;
        if (b && b === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.fww = function () {
        return (this.qmi && !this.tnb)
    };
    this.zwp = function () {}
}

function aad() {
    this.ldi = null;
    this.sjs = null;
    this.vrv = -1;
    this.npz = -1;
    this.rof = false;
    this.bgg = false;
    this.xxx = false;
    this.pfg = 0;
    this.aoj = 0;
    var a = 200;
    this.cjm = function (c, f, d, b, e) {
        this.ldi = b;
        this.sjs = e;
        aad.prototype.cjm.call(this, c, f, d)
    };
    this.qde = function (b, d, c) {
        this.rof = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.fww()) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
        if (this.rof === true && c === true) {
            clearTimeout(this.pfg);
            this.pfg = setTimeout(this.mdf, a)
        }
    };
    this.kpf = function () {
        return this.rof
    };
    this.egb = function (b, c) {
        this.xxx = b;
        c = (c === false) ? false : true;
        clearTimeout(this.aoj);
        if (this.xxx === true && c === true) {
            this.aoj = setTimeout(this.xkj, a)
        }
    };
    this.jeb = function () {
        return this.xxx
    };
    this.nkf = function (b, c) {
        this.sjs = b;
        if (c && c === true && this.fww()) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.wfx = function (b) {
        this.bgg = b
    };
    this.ovk = function () {
        return this.bgg
    };
    this.mik = function () {};
    this.xkj = function () {};
    this.mdf = function () {}
}
aad.prototype = new yos;

function twa() {
    var a = this;
    this.rhp = null;
    this.value = "";
    this.vgb = false;
    this.puy = "round";
    this.rcu = null;
    this.uid = "bold";
    this.eaa = null;
    this.ydj = null;
    this.luk = null;
    this.vkf = null;
    this.awp = null;
    this.hoq = 0;
    this.olz = 6;
    this.kgl = -2;
    this.sxc = 2;
    this.mgb = -4;
    this.egs = 8;
    this.whs = 26;
    this.xer = 0;
    this.asf = 1;
    this.omu = 0;
    this.wwi = 0;
    this.ylg = -1;
    this.dsz = 10;
    this.axy = 0;
    this.xzx = 0;
    this.ruv = false;
    this.fgd = -1;
    this.jpe = true;
    this.cjm = function (d, g, e, c, b, f) {
        twa.prototype.cjm.call(this, d, g, e, c, f);
        this.rhp = b;
        if (this.ldi) {
            this.hoq = Math.round(this.ldi.height / 2)
        }
    };
    this.idh = function (b) {
        try {
            this.puy = b.rye;
            this.rcu = b.font;
            this.uid = b.zde;
            this.eaa = b.backgroundColor;
            this.ydj = b.kxn;
            this.luk = b.asm;
            this.vkf = b.dwm;
            if (b.borderColor && b.dlt) {
                this.awp = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.awp.addColorStop(0, b.borderColor);
                this.awp.addColorStop(1, b.dlt)
            } else {
                this.awp = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.tqi = function (b) {
        try {
            this.whs = b.zcw;
            this.xer = b.lto;
            this.olz = b.qbk;
            this.kgl = b.dmm;
            this.sxc = b.nrj;
            this.mgb = b.ffc;
            this.egs = b.yhq;
            this.asf = b.dmp
        } catch (c) {
            console.error(c)
        }
    };
    this.mys = function () {
        if (this.xjq()) {
            clearInterval(this.fgd);
            this.fgd = -1
        }
        this.jpe = false;
        this.fgd = setInterval(this.nhs, 400)
    };
    this.whl = function () {
        this.jpe = true;
        clearInterval(this.fgd);
        this.fgd = -1;
        this.mrh(false)
    };
    this.mrh = function (b, c) {
        this.ruv = b;
        c = (c === false) ? false : true;
        if (c === true && this.fww() === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.xjq = function () {
        return (this.fgd >= 0)
    };
    this.lrz = function (b, c) {
        this.value = b;
        if (c && c === true && this.fww()) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.ayn = function (b) {
        this.omu = Math.round(b / this.dsz);
        this.axy = 0;
        this.xzx = 0;
        this.wwi = new Date().getTime();
        this.ylg = setTimeout(this.hil, this.omu)
    };
    this.pad = function () {
        if (a.ylg >= 0) {
            clearTimeout(a.ylg);
            a.ylg = -1
        }
        a.axy = 0;
        a.mdf()
    };
    this.hru = function () {
        if (a.ylg >= 0) {
            clearInterval(a.ylg);
            a.ylg = -1
        }
        a.axy = 1;
        a.mdf()
    };
    this.hil = function () {
        var b = 0,
            c = new Date().getTime();
        a.xzx += 1;
        if (a.xzx < a.dsz) {
            a.axy += 1 / a.dsz;
            a.parent.zwp(a.x, a.y, a.width, a.height);
            b = a.omu + (a.xzx * a.omu - (c - a.wwi));
            a.ylg = setTimeout(a.hil, b)
        } else {
            a.hru()
        }
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.asf,
            d = (this.puy === "roundedT" || this.puy === "roundedL") ? this.egs : 0,
            b = (this.puy === "roundedT" || this.puy === "roundedR") ? this.egs : 0,
            o = (this.puy === "roundedB" || this.puy === "roundedR") ? this.egs : 0,
            q = (this.puy === "roundedB" || this.puy === "roundedL") ? this.egs : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.ruv || this.axy >= 1) {
            if (this.puy === "round") {
                kdn.lgy.kra(p, this.x + this.width / 2, this.y + this.height / 2, l, this.ydj, 1, this.awp, this.asf, 1)
            } else {
                if (this.puy === "rect") {
                    kdn.lgy.suj(p, this.x, this.y, this.width, this.height, this.egs, this.ydj, this.awp, this.asf)
                } else {
                    if (this.puy === "roundedT" || this.puy === "roundedB" || this.puy === "roundedR" || this.puy === "roundedL") {
                        kdn.lgy.hal(p, this.x, this.y, this.width, this.height, d, b, o, q, this.ydj, 1, this.awp, this.asf, 1)
                    }
                }
            }
            if (this.rhp || this.ldi) {
                if (this.kpf()) {
                    p.drawImage((this.rhp) ? this.rhp : this.ldi, 0, this.hoq, this.ldi.width, this.hoq, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.rhp) ? this.rhp : this.ldi, 0, 0, this.ldi.width, this.hoq, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.vgb && this.ovk() === false) {
                p.globalAlpha = 0.5
            }
            if (this.axy > 0) {
                if (this.puy === "round") {
                    kdn.lgy.kra(p, this.x + this.width / 2, this.y + this.height / 2, l, this.eaa, 1 - this.xzx / this.dsz, this.awp, this.asf, 1);
                    kdn.lgy.kra(p, this.x + this.width / 2, this.y + this.height / 2, l, this.ydj, this.xzx / this.dsz)
                } else {
                    if (this.puy === "rect") {
                        dlx = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        dlx.addColorStop(1 - this.axy, this.eaa);
                        dlx.addColorStop(1 - this.axy, this.ydj);
                        kdn.lgy.elk(p, this.x, this.y, this.width, this.height, this.egs, dlx, 1, this.awp, this.asf, 1)
                    } else {
                        if (this.puy === "roundedT" || this.puy === "roundedB" || this.puy === "roundedR" || this.puy === "roundedL") {
                            dlx = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            dlx.addColorStop(1 - this.axy, this.eaa);
                            dlx.addColorStop(1 - this.axy, this.ydj);
                            kdn.lgy.hal(p, this.x, this.y, this.width, this.height, d, b, o, q, dlx, 1, this.awp, this.asf, 1)
                        }
                    }
                }
            } else {
                if (this.puy === "round") {
                    kdn.lgy.kra(p, this.x + this.width / 2, this.y + this.height / 2, l, this.eaa, 1, this.awp, this.asf, 1)
                } else {
                    if (this.puy === "rect") {
                        kdn.lgy.suj(p, this.x, this.y, this.width, this.height, this.egs, this.eaa, this.awp, this.asf)
                    } else {
                        if (this.puy === "roundedT" || this.puy === "roundedB" || this.puy === "roundedR" || this.puy === "roundedL") {
                            kdn.lgy.hal(p, this.x, this.y, this.width, this.height, d, b, o, q, this.eaa, 1, this.awp, this.asf, 1)
                        }
                    }
                }
            }
            if (this.ldi) {
                if (this.kpf()) {
                    p.drawImage(this.ldi, 0, this.hoq, this.ldi.width, this.hoq, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.ldi, 0, 0, this.ldi.width, this.hoq, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.xer > 0) {
            f = (this.kpf()) ? 2 : 0;
            c = this.xer;
            p.font = this.uid + " " + c + "px " + this.rcu;
            p.fillStyle = this.vkf;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.olz) {
                e = ((this.width - 2 * this.olz) / n);
                c = Math.round(e * c) - 1;
                p.font = this.uid + " " + c + "px " + this.rcu
            }
            if (c > this.height / 2 - this.olz) {
                e = ((this.height / 2 - this.olz) / c);
                c = Math.round(e * c) - 1;
                p.font = this.uid + " " + c + "px " + this.rcu
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.kgl, this.y - this.mgb + k + f)
        }
        if (this.sjs && this.sjs != "" && this.whs > 0) {
            g = this.sjs.split("|");
            f = (this.kpf()) ? 2 : 0;
            c = this.whs;
            p.font = this.uid + " " + c + "px " + this.rcu;
            p.fillStyle = this.luk;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.olz) {
                e = ((this.width - 2 * this.olz) / n);
                c = Math.round(e * c) - 1;
                p.font = this.uid + " " + c + "px " + this.rcu
            }
            if (this.xer > 0) {
                if (c * g.length > this.height / 2 - this.olz) {
                    e = ((this.height / 2 - this.olz) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.uid + " " + c + "px " + this.rcu
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.olz) {
                    e = ((this.height - 2 * this.olz) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.uid + " " + c + "px " + this.rcu
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.kgl, this.y - this.sxc + k + f);
                k += c
            }
        }
        p.restore();
        if (this.vtx && this.saw) {
            this.vtx.drawImage(this.saw, this.x, this.y)
        }
    };
    this.nhs = function () {
        if (!a.jpe) {
            a.mrh(!a.ruv)
        }
    };
    this.xkj = function () {
        a.xxx = false
    };
    this.mdf = function () {
        a.rof = false;
        if (a.fww()) {
            a.parent.zwp(a.x, a.y, a.width, a.height)
        }
    }
}
twa.prototype = new aad;

function afp() {
    this.uln = 0;
    this.jqd = [];
    this.cjm = function (a, c, b) {
        afp.prototype.cjm.call(this, a, c, b);
        this.uln = 0;
        this.jqd = []
    };
    this.mvd = function (a, b) {
        if (b && b === true) {
            this.jqd.unshift(a)
        } else {
            this.jqd.push(a)
        }
    };
    this.idi = function (a) {
        if (a && a === true) {
            this.jqd.shift()
        } else {
            this.jqd.pop()
        }
    };
    this.gqq = function (a) {
        this.uln = a
    };
    this.hkj = function () {
        return this.uln
    };
    this.zwp = function () {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        if (this.uln < this.jqd.length) {
            this.jqd[this.uln].zwp()
        }
        try {
            if (this.vtx && this.saw) {
                this.vtx.drawImage(this.saw, this.x, this.y)
            }
        } catch (a) {}
    }
}
afp.prototype = new yos;

function fsl() {
    var a = this;
    this.wvx = null;
    this.uln = 0;
    this.jqd = [];
    this.eaa = null;
    this.mpo = null;
    this.zyo = null;
    this.dcd = new bzm();
    this.cjm = function (b, d, c) {
        fsl.prototype.cjm.call(this, b, d, c);
        this.qmi = false;
        this.uln = 0;
        this.jqd = [];
        this.atv()
    };
    this.atv = function () {
        this.wvx = new xlf();
        this.wvx.cjm();
        this.wvx.hca("buttons")
    };
    this.tqi = function (f) {
        try {
            var d = this.wvx.wrb("buttons"),
                c = 0,
                b = d.length;
            this.dcd = f.jlw;
            for (; c < b; c++) {
                d[c].tqi(f.dtm)
            }
            this.wvx.qex("return", "#yai", [f.lar]);
            this.wvx.qex("page", "#yai", [f.ymq]);
            this.wvx.qex("prev", "#yai", [f.wed]);
            this.wvx.qex("next", "#yai", [f.une])
        } catch (g) {
            console.error(g)
        }
    };
    this.idh = function (d) {
        try {
            var f = this.wvx.wrb("buttons");
            this.eaa = d.backgroundColor;
            this.mpo = d.kus;
            this.zyo = d.qze;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].idh((this.parent.hhw.ibz === false) ? d.ocr : (this.parent.evj === kdn.hhw.yjt) ? d.ohz : d.zlz)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.dmk = function (m, l) {
        var k = this.wvx.wrb("buttons"),
            g = this.wvx.gfj("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.fww() == true) {
                if (b.ovk() && !b.jeb()) {
                    if (b != g) {
                        b.qde(true, true)
                    }
                    this.parent.eha.xuk("btn");
                    this.parent.eha.mtk("btn");
                    b.mik();
                    for (var d = 0; d < f; d++) {
                        k[d].egb(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.szd = function () {
        var e = this.wvx.wrb("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.kpf() === true) {
                c.qde(false, true);
                return true
            }
        }
        return false
    };
    this.sxr = function (k) {
        var g = this.wvx.wrb("buttons"),
            c = this.wvx.gfj("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.vrv) {
                if (d.ovk() && !d.jeb()) {
                    if (d != c) {
                        d.qde(true, true)
                    }
                    this.parent.eha.xuk("btn");
                    this.parent.eha.mtk("btn");
                    d.mik();
                    for (var e = 0; e < b; e++) {
                        g[e].egb(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.qpj = function () {
        var e = this.wvx.wrb("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.kpf() === true) {
                c.qde(false, true);
                return true
            }
        }
        return false
    };
    this.mvd = function (b, c) {
        if (c && c === true) {
            this.jqd.unshift(b);
            this.uln++
        } else {
            this.jqd.push(b)
        }
    };
    this.idi = function (b) {
        if (b && b === true) {
            this.jqd.shift();
            this.uln--
        } else {
            this.jqd.pop()
        }
    };
    this.irx = function () {
        return this.jqd.length
    };
    this.ezt = function (e, c, b) {
        var d = (this.parent.hhw.ibz === false) ? c.ocr : (this.parent.evj === kdn.hhw.yjt) ? c.ohz : c.zlz;
        if (this.parent.vks === false) {
            this.wvx.udd("return", this.wqf(e.lar, this.parent.language.ret, (this.parent.hhw.ofp === false) ? b : this.parent.eha.zgs("btn_re"), this.ugb, (this.parent.dnt.grp) ? this.parent.dnt.grp : null, e.dtm, d), ["buttons"]);
            this.wvx.udd("page", this.wqf(e.ymq, (this.uln + 1) + "/" + this.jqd.length, b, this.dfa, null, e.dtm, d), ["buttons"]);
            this.wvx.udd("prev", this.wqf(e.wed, this.parent.language.ymu, (this.parent.hhw.ofp === false) ? b : this.parent.eha.zgs("btn_pr"), this.hgg, (this.parent.dnt.zxa) ? this.parent.dnt.zxa : null, e.dtm, d), ["buttons"]);
            this.wvx.udd("next", this.wqf(e.une, this.parent.language.ocj, (this.parent.hhw.ofp === false) ? b : this.parent.eha.zgs("btn_ne"), this.dfa, (this.parent.dnt.eyh) ? this.parent.dnt.eyh : null, e.dtm, d), ["buttons"])
        }
    };
    this.wqf = function (g, k, b, j, d, f, e) {
        var c = new twa();
        c.cjm(g, this.context2D, null, b, null, k);
        c.parent = this;
        c.mik = j;
        c.tqi(f);
        c.idh(e);
        if (d) {
            c.vrv = d.pdi
        }
        return c
    };
    this.zwp = function (l, j, m, e) {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.wvx.wrb("buttons"),
            d = null;
        if (this.parent.hhw.ibz === false) {
            d = this.parent.eha.zgs("btn_back")
        } else {
            if (this.parent.evj === kdn.hhw.yjt) {
                d = (this.parent.eha.zgs("h_right" + this.uln) != null) ? this.parent.eha.zgs("h_right" + this.uln) : this.parent.eha.zgs("h_right")
            } else {
                d = (this.parent.eha.zgs("h_left" + this.uln) != null) ? this.parent.eha.zgs("h_left" + this.uln) : this.parent.eha.zgs("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.uln >= 0 && this.uln < this.jqd.length) {
            this.jqd[this.uln].zwp()
        }
        if (d) {
            k = n.createLinearGradient(this.dcd.x, this.dcd.y, this.dcd.x + this.dcd.width, this.dcd.y);
            k.addColorStop(0.2, this.mpo);
            k.addColorStop(1, this.zyo);
            n.fillStyle = k;
            n.save();
            if (this.parent.hhw.ibz === false) {
                if (this.parent.evj === kdn.hhw.ssg) {
                    n.translate(this.dcd.width / 2, this.dcd.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.dcd.width / 2, -this.dcd.height / 2)
                }
                n.fillRect(this.dcd.x, this.dcd.y, this.dcd.width, this.dcd.height)
            }
            n.drawImage(d, this.dcd.x, this.dcd.y, this.dcd.width, this.dcd.height);
            n.restore()
        } else {
            if (this.eaa != null) {
                n.fillStyle = this.eaa;
                n.fillRect(this.dcd.x, this.dcd.y, this.dcd.width, this.dcd.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].zwp()
        }
        n.restore();
        if (this.vtx && this.saw) {
            if (b) {
                this.vtx.drawImage(this.saw, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.vtx.drawImage(this.saw, this.x, this.y)
            }
        }
    };
    this.flc = function (f, g) {
        var e = this.wvx.gfj("page"),
            c = this.wvx.gfj("return"),
            b = this.wvx.gfj("next"),
            d = this.wvx.gfj("prev");
        if (e != null) {
            e.nkf((this.uln + 1) + "/" + this.jqd.length)
        }
        if (c != null) {
            c.dft(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.jqd.length > 1) {
                    b.dft(f);
                    d.dft(f);
                    e.dft(f)
                } else {
                    b.dft(false);
                    d.dft(false);
                    e.dft(false)
                }
            } else {
                b.dft(f);
                d.dft(f);
                e.dft(f)
            }
        }
        if (g && g === true) {
            this.zwp()
        }
    };
    this.olx = function () {
        this.uln = 0;
        this.flc(true);
        this.dft(true, true)
    };
    this.xwd = function () {
        this.flc(false);
        this.dft(false, true)
    };
    this.wye = function () {
        var d = this.wvx.gfj("page"),
            b = this.wvx.gfj("next"),
            c = this.wvx.gfj("prev");
        this.uln = (this.uln < this.jqd.length) ? this.uln : this.jqd.length - 1;
        this.uln = (this.uln < 0) ? 0 : this.uln;
        d.nkf((this.uln + 1) + "/" + this.jqd.length, true);
        if (this.jqd.length == 1) {
            b.dft(false);
            c.dft(false);
            d.dft(false)
        } else {
            b.dft(true);
            c.dft(true);
            d.dft(true)
        }
    };
    this.lkn = function (c) {
        var e = this.wvx.wrb("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].wfx(c)
        }
    };
    this.ugb = function () {
        a.parent.oiu()
    };
    this.dfa = function () {
        var b = a.wvx.gfj("page");
        if (a.uln < a.jqd.length - 1) {
            a.uln++
        } else {
            a.uln = 0
        }
        if (b) {
            b.nkf((a.uln + 1) + "/" + a.jqd.length, false)
        }
        a.zwp()
    };
    this.hgg = function () {
        var b = a.wvx.gfj("page");
        if (a.uln > 0) {
            a.uln--
        } else {
            a.uln = a.jqd.length - 1
        }
        if (b) {
            b.nkf((a.uln + 1) + "/" + a.jqd.length, false)
        }
        a.zwp()
    }
}
fsl.prototype = new yos;

function ykt() {
    this.ldi = new Image();
    this.wgw = null;
    this.bxr = [];
    this.zfo = [];
    this.xzn = null;
    this.rcu = null;
    this.uid = "bold";
    this.jcc = null;
    this.luk = null;
    this.tdn = null;
    this.bii = 0;
    this.ctb = [];
    this.gls = null;
    this.npe = 40;
    this.msb = 18;
    this.evz = 1;
    this.cjm = function (b, d, c, a) {
        this.ldi = a;
        this.bxr = [];
        this.ctb = [];
        ykt.prototype.cjm.call(this, b, d, c)
    };
    this.tqi = function (a) {
        try {
            this.gls = a.hvq;
            this.ctb = a.avj;
            this.msb = a.fontSize;
            this.npe = a.hnp;
            this.evz = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.idh = function (a) {
        try {
            this.xzn = a.zgw;
            this.rcu = a.font;
            this.uid = a.zde;
            this.jcc = a.lka;
            this.luk = a.asm;
            this.tdn = a.cxt
        } catch (b) {
            console.error(b)
        }
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.luk;
        if (this.jcc) {
            b.strokeStyle = this.jcc
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.evz;
        b.font = this.uid + " " + this.msb + "px " + this.rcu;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.ldi, 0, 0);
        if ((this.height - this.ldi.height) > 0) {
            var a = this.parent.dcd;
            b.drawImage(this.ldi, a.x, a.y, a.width, this.ldi.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.wgw && this.gls) {
            kdn.lgy.jnl(b, this.wgw, this.tdn, this.gls.x, this.gls.y, this.gls.width, this.gls.height, this.xzn, this.npe, this.uid)
        }
        for (var c = 0; c < this.bxr.length; c++) {
            this.hpn(this.bxr[c], this.ctb[c], this.msb, this.rcu)
        }
        b.restore();
        if (this.vtx && this.saw) {
            this.vtx.drawImage(this.saw, this.x, this.y)
        }
    };
    this.ytn = function (j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.zfo = [];
        b.save();
        b.font = this.uid + " " + g + "px " + d;
        this.xos(b, g, j, f, d);
        for (var e = 0, a = this.zfo.length; e < a; e++) {
            c = (f.height + this.bii) / (this.zfo.length + 1) * (e + 1);
            b.fillText(this.zfo[e], (f.x), f.y + c);
            if (this.jcc != null && b.lineWidth >= 1) {
                b.strokeText(this.zfo[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.hpn = function (g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.zfo = [];
        a.save();
        a.font = this.uid + " " + f + "px " + c;
        this.xos(a, f, g, e, c);
        for (var d = 0; d < this.zfo.length; d++) {
            b = (e.height + this.bii) / (this.zfo.length + 1) * (d + 1);
            a.fillText(this.zfo[d], (e.x + e.width / 2), e.y + b);
            if (this.jcc != null && a.lineWidth >= 1) {
                a.strokeText(this.zfo[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.xos = function (m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.bii = o;
        if (this.bii * n > g.height) {
            a = g.height / (this.bii * n);
            this.bii = Math.round(a * this.bii) - 1;
            m.font = this.uid + " " + this.bii + "px " + b;
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
                this.zfo[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.zfo[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.zfo[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
ykt.prototype = new yos;

function xwk() {
    var a = this;
    this.ldi = new Image();
    this.ukk = "";
    this.hnf = "";
    this.who = -1;
    this.kje = 0;
    this.ahd = 0;
    this.ent = 5000;
    this.rcu = null;
    this.uid = "bold";
    this.luk = null;
    this.eaa = null;
    this.mli = null;
    this.egs = 0;
    this.czu = 0;
    this.olz = 0;
    this.asf = 0;
    this.qlm = 0;
    this.msb = 0;
    this.yso = null;
    this.jcn = 0;
    this.rgh = [];
    this.gwh = 0;
    this.gpt = true;
    this.iej = 0;
    this.tqi = function (b) {
        try {
            this.msb = b.fontSize;
            this.qlm = b.qic;
            this.egs = b.yhq;
            this.czu = b.gyt;
            this.olz = b.qbk;
            this.asf = b.dmp
        } catch (c) {
            console.error(c)
        }
    };
    this.idh = function (b) {
        try {
            this.rcu = b.font;
            this.uid = b.zde;
            this.eaa = b.backgroundColor;
            this.luk = b.asm;
            this.mli = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.bfd = function (e, c, d, b) {
        this.ukk = e;
        this.hnf = c;
        this.who = d;
        this.kje = b;
        this.gpt = true;
        clearTimeout(this.iej);
        if (this.fww() === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.wbi = function (b, c) {
        this.ukk = b;
        this.hnf = undefined;
        this.gpt = c;
        if (this.gpt) {
            clearTimeout(this.iej)
        }
        if (this.fww() === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.ife = function () {
        this.ukk = "";
        this.hnf = undefined;
        this.gpt = true;
        clearTimeout(this.iej);
        if (this.fww() === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.wra = function (b, c) {
        this.jcn = 0;
        this.gwh = b;
        this.gpt = false;
        if (c && c > 0) {
            this.iej = setTimeout(this.wsk, c)
        } else {
            this.iej = setTimeout(this.wsk, this.ent)
        }
    };
    this.tqh = function (b) {
        this.jcn = 0;
        this.gwh = b;
        if (this.gpt) {
            this.wbi(this.rgh[this.gwh][this.jcn], false)
        }
        this.gpt = false;
        this.iej = setTimeout(this.wsk, this.ent)
    };
    this.nhy = function () {
        this.gpt = false;
        this.iej = setTimeout(this.wsk, this.ent)
    };
    this.wff = function () {
        this.gpt = true;
        clearTimeout(this.iej)
    };
    this.hzh = function () {
        return this.gpt
    };
    this.wsk = function () {
        if (!a.gpt) {
            a.jcn = (a.rgh[a.gwh][a.jcn + 1] != undefined) ? a.jcn + 1 : 0;
            a.iej = setTimeout(a.wsk, a.ent);
            a.wbi(a.rgh[a.gwh][a.jcn], a.gpt)
        }
    };
    this.wkj = function (b) {
        this.rgh[b] = []
    };
    this.ehp = function (d, b) {
        for (var c = 0; c < d.length; c++) {
            this.rgh[b][c] = d[c]
        }
    };
    this.ygt = function (b) {
        this.yso = b
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var o = this.context2D,
            m = this.msb,
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
            q = (this.mli && this.asf) ? this.olz + this.asf : this.olz;
        o.save();
        if (this.eaa) {
            kdn.lgy.suj(o, this.x, this.y, this.width, this.height, this.egs, this.eaa, this.mli, this.asf)
        } else {
            if (this.yso) {
                o.putImageData(this.yso, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.luk;
        o.font = this.uid + " " + m + "px " + this.rcu;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.ukk).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.hnf != undefined && this.who >= 0) {
            j = o.measureText(this.hnf).width;
            b += j;
            b += this.kje * (this.ldi.width + this.czu);
            if (this.kje % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.kje / 2) * (this.ldi.width + this.czu);
                x = s - n;
                e = s + (this.kje) * (this.ldi.width + this.czu) + n
            } else {
                s = this.x + (this.width) / 2 - (this.kje / 2) * (this.ldi.width) - (this.kje - 1) / 2 * this.czu;
                x = s - n;
                e = s + (this.kje) * (this.ldi.width) + (this.kje - 1) * this.czu + n
            }
            for (var u = 0; u < this.kje; u++) {
                o.drawImage(this.ldi, 0, this.ahd * this.who, this.ldi.width, this.ahd, s + (u * (this.czu + this.ldi.width)), this.y + ((this.height - this.ahd) / 2), this.ldi.width, this.ahd)
            }
            o.textAlign = "right";
            o.fillText(this.ukk, x, this.y + m + this.qlm);
            o.textAlign = "left";
            o.fillText(this.hnf, e, this.y + m + this.qlm)
        } else {
            if (this.ukk != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.uid + " " + m + "px " + this.rcu
                    }
                    g = [];
                    d = "";
                    v = 0;
                    z = 0;
                    t = 0;
                    for (var p = t; p < this.ukk.length; p++) {
                        d += this.ukk.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.ukk.charAt(p) == " ") || (this.ukk.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.ukk.length - 1) {
                            g[z] = this.ukk.substring(t, this.ukk.length)
                        } else {
                            if (this.ukk.charAt(p) == "|") {
                                g[z] = this.ukk.substring(t, v);
                                z++;
                                t = v + 1;
                                d = this.ukk.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[z] = this.ukk.substring(t, v);
                                    z++;
                                    t = v + 1;
                                    d = this.ukk.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.msb) {
                    o.font = this.uid + " " + (m - 3) + "px " + this.rcu;
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
xwk.prototype = new yos;

function fnd() {
    this.sue = null;
    this.rgx = null;
    this.yqq = null;
    this.meu = false;
    this.bgg = false;
    this.eij = true;
    this.slp = false;
    this.ghe = false;
    this.abc = 0;
    this.orj = 0;
    this.zkz = 0;
    this.cwn = "";
    this.dgl = "";
    this.mpo = null;
    this.zyo = null;
    this.rcu = "arial";
    this.uid = "bold";
    this.vsd = "arial";
    this.ipx = "rgb(0,0,200)";
    this.pfc = "rgb(255,255,255)";
    this.nvs = "rgb(0,0,150)";
    this.eaa = "rgb(220,240,255)";
    this.gbw = "rgb(130,220,255)";
    this.hsn = "rgb(130,190,255)";
    this.luk = "rgb(255,255,255)";
    this.eos = "rgb(130,190,255)";
    this.pqs = "rgb(100,160,255)";
    this.xuv = "rgb(255,255,255)";
    this.dcd = new bzm();
    this.gls = null;
    this.efj = null;
    this.jkq = null;
    this.tny = null;
    this.onq = null;
    this.elj = null;
    this.mar = null;
    this.otg = null;
    this.asf = 2;
    this.kjr = 3;
    this.owi = 10;
    this.qlm = 3;
    this.kgl = 5;
    this.jta = 36;
    this.msb = 30;
    this.old = 22;
    this.cjm = function (a, c, b) {
        fnd.prototype.cjm.call(this, a, c, b);
        this.slp = kdn.qwt.value37
    };
    this.vmb = function (b) {
        try {
            var a = (kdn.qwt.value37) ? b.slg : b.wim;
            this.gls = b.hvq;
            this.efj = b.fqp;
            this.jkq = b.wqa;
            this.tny = b.tdf;
            this.onq = b.xlc;
            this.elj = b.wyk;
            this.dcd = b.jlw;
            this.jta = b.wen;
            this.msb = b.fontSize;
            this.old = b.agv;
            this.qlm = b.qic;
            this.kgl = b.dmm;
            this.asf = b.dmp;
            this.kjr = b.mxk;
            this.owi = b.ouk;
            if (kdn.qwt.value36) {
                this.dgl = this.parent.owg(this.parent.language.sjx)
            } else {
                if (kdn.qwt.value37) {
                    this.dgl = this.parent.owg(this.parent.language.cxz)
                }
            }
            this.sue = [];
            this.rgx = this.wqf(a.mps, this.parent.language.ret, this.parent.cmi, (this.parent.hhw.ofp === false) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_re"), b.dtm);
            this.sue.push(this.rgx);
            if (kdn.qwt.value37) {
                this.yqq = this.wqf(a.lar, this.parent.language.nvx, this.parent.mrt, (this.parent.hhw.ofp === false) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_e"), b.dtm);
                this.sue.push(this.yqq)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.tqi = function (b) {
        try {
            var a = (kdn.qwt.value37) ? b.slg : b.wim;
            this.gls = b.hvq;
            this.efj = b.fqp;
            this.jkq = b.wqa;
            this.tny = b.tdf;
            this.onq = b.xlc;
            this.elj = b.wyk;
            this.dcd = b.jlw;
            if (this.rgx) {
                this.rgx.yai(a.mps);
                this.rgx.tqi(b.dtm)
            }
            if (this.yqq) {
                this.yqq.yai(a.lar);
                this.yqq.tqi(b.dtm)
            }
            this.jta = b.wen;
            this.msb = b.fontSize;
            this.old = b.agv;
            this.qlm = b.qic;
            this.kgl = b.dmm;
            this.asf = b.dmp;
            this.kjr = b.mxk;
            this.owi = b.ouk
        } catch (c) {
            console.error(c)
        }
    };
    this.idh = function (c) {
        try {
            this.rcu = c.font;
            this.uid = c.zde;
            this.ipx = c.rej;
            this.pfc = c.lof;
            this.nvs = c.lyv;
            this.eaa = c.backgroundColor;
            this.gbw = c.cqd;
            this.hsn = c.idr;
            this.luk = c.asm;
            this.eos = c.jhw;
            this.pqs = c.rba;
            this.xuv = c.dnm;
            this.mpo = c.kus;
            this.zyo = c.qze;
            for (var b = 0, a = this.sue.length; b < a; b++) {
                this.sue[b].idh((this.parent.hhw.ibz === true) ? c.blk : c.ocr)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.dmk = function (d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.sue.length; f < b; f++) {
            var a = this.sue[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.fww() === true) {
                if (a.ovk() === true && a.jeb() === false && this.eij) {
                    a.qde(true, true);
                    this.parent.eha.xuk("btn");
                    this.parent.eha.mtk("btn");
                    a.mik();
                    for (var e = 0; e < b; e++) {
                        this.sue[e].egb(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.elj.x && c <= this.elj.x + this.elj.width && g >= this.elj.y && g <= this.elj.y + this.elj.height && this.slp && this.bgg) {
            this.nql()
        }
        return true
    };
    this.szd = function () {};
    this.sxr = function () {};
    this.qpj = function () {};
    this.wqf = function (d, f, e, a, c) {
        var b = new twa();
        b.cjm(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.mik = e;
        b.tqi(c);
        return b
    };
    this.lkn = function (c) {
        this.bgg = c;
        for (var b = 0, a = this.sue.length; b < a; b++) {
            this.sue[b].wfx(c)
        }
    };
    this.nql = function () {
        this.eij = !this.eij;
        this.parent.zwp()
    };
    this.mcr = function (d, a, c, b) {
        this.ghe = false;
        this.gyq = true;
        this.cwn = this.ocz(b);
        this.abc = d;
        this.orj = a;
        this.zkz = c;
        if (this.fww()) {
            this.lkn(true);
            this.zwp()
        }
    };
    this.ocz = function (b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.igh(d) + ":" + this.igh(a) + ":" + this.igh(c)
    };
    this.igh = function (a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.iaj = function (a, b) {
        this.ghe = a;
        if (b && b === true) {
            this.zwp()
        }
    };
    this.dft = function (a, b) {
        this.gyq = false;
        if (kdn.qwt.value37) {
            this.eij = false
        }
        this.iaj(a, false);
        fnd.prototype.dft.call(this, a, b)
    };
    this.zwp = function (j, f, k, d) {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.eha.zgs("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.eaa;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.dcd.x, this.dcd.y, this.dcd.x + this.dcd.width, this.dcd.y);
            g.addColorStop(0.2, this.mpo);
            g.addColorStop(1, this.zyo);
            l.fillStyle = g;
            l.save();
            if (this.parent.evj === kdn.hhw.ssg) {
                l.translate(this.dcd.width / 2, this.dcd.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.dcd.width / 2, -this.dcd.height / 2)
            }
            l.fillRect(this.dcd.x, this.dcd.y, this.dcd.width, this.dcd.height);
            l.drawImage(c, this.dcd.x, this.dcd.y, this.dcd.width, this.dcd.height);
            l.restore()
        } else {
            if (this.parent.hhw.ibz === true) {
                kdn.lgy.eys(l, this.dcd.x, this.dcd.y, this.dcd.width, this.dcd.height, this.mpo, 1)
            }
        }
        kdn.lgy.suj(l, this.gls.x, this.gls.y, this.gls.width, this.gls.height, 0, this.gbw);
        kdn.lgy.jnl(l, this.dgl, this.luk, this.gls.x, this.gls.y + this.qlm, this.gls.width, this.gls.height, this.rcu, this.jta, this.uid);
        kdn.lgy.suj(l, this.efj.x, this.efj.y, this.efj.width, this.efj.height, 0, this.gbw);
        if (kdn.qwt.value36) {
            kdn.lgy.ufv(l, this.parent.owg(this.parent.language.qzh), this.luk, this.efj.x, this.efj.y + this.qlm, this.efj.width, this.efj.height, this.rcu, this.msb, this.uid, this.kgl)
        } else {
            if (kdn.qwt.value37) {
                kdn.lgy.ufv(l, this.parent.owg(this.parent.language.mah), this.luk, this.efj.x, this.efj.y + this.qlm, this.efj.width, this.efj.height, this.rcu, this.msb, this.uid, this.kgl)
            }
        }
        kdn.lgy.suj(l, this.jkq.x, this.jkq.y, this.jkq.width, this.jkq.height, 0, this.hsn);
        kdn.lgy.ufv(l, this.parent.owg(this.parent.language.evb), this.luk, this.jkq.x, this.jkq.y + this.qlm, this.jkq.width, this.jkq.height, this.rcu, this.msb, this.uid, this.kgl);
        kdn.lgy.suj(l, this.tny.x, this.tny.y, this.tny.width, this.tny.height, 0, this.gbw);
        kdn.lgy.ufv(l, this.parent.owg(this.parent.language.zhg), this.luk, this.tny.x, this.tny.y + this.qlm, this.tny.width, this.tny.height, this.rcu, this.msb, this.uid, this.kgl);
        if (this.slp) {
            this.xxn(l)
        }
        if (this.gyq) {
            if (kdn.qwt.value36) {
                kdn.lgy.xhg(l, this.abc, this.luk, this.efj.x, this.efj.y + this.qlm, this.efj.width, this.efj.height, this.rcu, this.msb, this.uid, this.kgl)
            } else {
                if (kdn.qwt.value37) {
                    kdn.lgy.xhg(l, this.cwn, this.luk, this.efj.x, this.efj.y + this.qlm, this.efj.width, this.efj.height, this.rcu, this.msb, this.uid, this.kgl)
                }
            }
            kdn.lgy.xhg(l, this.parent.vey(this.orj), this.luk, this.jkq.x, this.jkq.y + this.qlm, this.jkq.width, this.jkq.height, this.rcu, this.msb, this.uid, this.kgl);
            kdn.lgy.xhg(l, this.parent.vey(this.zkz), this.luk, this.tny.x, this.tny.y + this.qlm, this.tny.width, this.tny.height, this.rcu, this.msb, this.uid, this.kgl)
        }
        for (var b = 0, e = this.sue.length; b < e; b++) {
            this.sue[b].zwp()
        }
        if (this.ghe) {
            kdn.lgy.elk(l, this.onq.x, this.onq.y, this.onq.width, this.onq.height, this.kjr, this.ipx, 0.3, this.nvs, this.asf, 1);
            kdn.lgy.jnl(l, this.parent.owg(this.parent.language.wkg), this.pfc, this.onq.x, this.onq.y, this.onq.width, this.onq.height, this.rcu, this.msb, this.uid)
        }
        l.restore();
        if (this.vtx && this.saw) {
            if (a) {
                this.vtx.drawImage(this.saw, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.vtx.drawImage(this.saw, this.x, this.y)
            }
        }
    };
    this.xxn = function (b) {
        var c = Math.round(this.elj.height / 2),
            a = Math.round(this.elj.x + c),
            d = Math.round(this.elj.y + c / 2);
        b.save();
        kdn.lgy.suj(b, this.elj.x, this.elj.y, this.elj.width, this.elj.height, this.owi, this.eos, this.pqs, this.asf);
        kdn.lgy.jnl(b, this.parent.language.jjj, this.luk, this.elj.x + this.elj.height, this.elj.y, this.elj.width - this.elj.height, this.elj.height, this.rcu, this.old, this.uid);
        kdn.lgy.eys(b, a, d, c, c, null, 0, this.xuv, this.asf, 1);
        if (this.eij) {
            kdn.lgy.eys(b, a + c / 4, d + c / 4, c / 2, c / 2, this.xuv, 1)
        }
        b.restore()
    }
}
fnd.prototype = new yos;

function sir() {
    var a = this;
    this.xkj = function () {
        a.xxx = false
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.ldi != null) {
            b.drawImage(this.ldi, 0, 0, this.ldi.width, this.ldi.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
sir.prototype = new aad;

function asq() {
    this.wgw = "";
    this.sjs = "";
    this.ldi = null;
    this.xzn = "sans-serif";
    this.dkl = "sans-serif";
    this.uid = "bold";
    this.tdn = null;
    this.luk = null;
    this.mli = null;
    this.mrg = null;
    this.eaa = null;
    this.npe = 16;
    this.whs = 20;
    this.vpw = 0;
    this.sxc = 0;
    this.asf = 2;
    this.cpq = 3;
    this.fbn = 3;
    this.rlq = 3;
    this.jda = 3;
    this.cjm = function (a, e, b, d, c) {
        asq.prototype.cjm.call(this, a, e, b);
        this.wgw = d;
        this.sjs = c
    };
    this.tqi = function (a) {
        try {
            this.npe = a.hnp;
            this.whs = a.zcw;
            this.vpw = a.wci;
            this.sxc = a.nrj;
            this.asf = a.dmp;
            this.cpq = a.nca;
            this.fbn = a.dus;
            this.rlq = a.taw;
            this.jda = a.xjs
        } catch (b) {
            console.error(b)
        }
    };
    this.idh = function (a) {
        try {
            this.xzn = a.zgw;
            this.dkl = a.ntv;
            this.uid = a.zde;
            this.tdn = a.cxt;
            this.luk = a.asm;
            this.mli = a.borderColor;
            this.mrg = a.dlt;
            this.eaa = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.nkf = function (a, b) {
        this.sjs = a;
        if (b && b === true && this.context2D != null && this.fww() === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.aaj = function (a, b) {
        this.wgw = a;
        if (b && b === true && this.context2D != null && this.fww() === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.mrg) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.mli);
            b.addColorStop(1, this.mrg);
            kdn.lgy.hal(a, this.x, this.y, this.width, this.height, this.cpq, this.fbn, this.rlq, this.jda, this.eaa, 1, b, this.asf, 1)
        } else {
            kdn.lgy.hal(a, this.x, this.y, this.width, this.height, this.cpq, this.fbn, this.rlq, this.jda, this.eaa, 1, this.mli, this.asf, 1)
        }
        if (this.wgw != null) {
            kdn.lgy.jnl(a, this.wgw, this.tdn, this.x + this.asf, this.y + this.vpw, this.width - 2 * this.asf, this.height, this.xzn, this.npe, this.uid)
        }
        if (this.sjs != null) {
            if (this.wgw != null) {
                kdn.lgy.jnl(a, this.sjs, this.luk, this.x + this.asf, this.y + this.sxc, this.width - 2 * this.asf, this.height, this.dkl, this.whs, this.uid)
            } else {
                kdn.lgy.jnl(a, this.sjs, this.luk, this.x + this.asf, this.y + this.asf, this.width - 2 * this.asf, this.height, this.dkl, this.whs, this.uid)
            }
        }
        if (this.ldi) {
            a.drawImage(this.ldi, 0, 0, this.ldi.width, this.ldi.height, this.x + this.asf, this.y + this.asf, this.width - 2 * this.asf, this.height - 2 * this.asf)
        }
        a.restore();
        if (this.vtx && this.saw) {
            this.vtx.drawImage(this.saw, this.x, this.y)
        }
    }
}
asq.prototype = new yos;

function cwa() {
    var a = this;
    this.ldi = null;
    this.dgl = "";
    this.swb = null;
    this.bgg = false;
    this.jzj = false;
    this.rwy = 0;
    this.kwo = 0;
    this.llp = 150;
    this.swf = 100;
    this.ycw = 0;
    this.qtk = 3;
    this.yaq = 92;
    this.eqy = 0;
    this.cpn = 0;
    this.xzn = "sans-serif";
    this.utj = "sans-serif";
    this.uid = "";
    this.tdn = null;
    this.slz = null;
    this.vkf = null;
    this.gjk = null;
    this.nmz = null;
    this.mli = null;
    this.mrg = null;
    this.eaa = null;
    this.gfh = null;
    this.mbq = null;
    this.wce = null;
    this.hjw = null;
    this.awp = null;
    this.ksz = new bzm();
    this.npe = 0;
    this.xer = 0;
    this.vpw = 0;
    this.mgb = 0;
    this.dtw = 0;
    this.asf = 0;
    this.ggi = 0;
    this.nrd = 0;
    this.tqi = function (b) {
        try {
            this.npe = b.hnp;
            this.xer = b.lto;
            this.vpw = b.wci;
            this.mgb = b.ffc;
            this.dtw = b.jvl;
            this.asf = b.dmp;
            this.ggi = b.bha;
            this.nrd = b.cxh;
            this.ksz = b.bok;
            this.vme()
        } catch (c) {
            console.error(c)
        }
    };
    this.idh = function (b) {
        try {
            this.xzn = b.zgw;
            this.utj = b.eny;
            this.uid = b.zde;
            this.tdn = b.cxt;
            this.slz = b.hke;
            this.vkf = b.dwm;
            this.gjk = b.mwu;
            this.nmz = b.dtu;
            this.mli = b.borderColor;
            this.mrg = b.dlt;
            this.eaa = b.backgroundColor;
            this.pvy = b.qja;
            this.gfh = b.twr;
            this.vme()
        } catch (c) {
            console.error(c)
        }
    };
    this.vzj = function (b) {
        try {
            this.tdn = b.cxt;
            this.slz = b.hke;
            this.vkf = b.dwm;
            this.gjk = b.mwu;
            this.vme()
        } catch (c) {
            console.error(c)
        }
    };
    this.pgj = function () {
        return {
            cxt: this.tdn,
            hke: this.slz,
            dwm: this.vkf,
            mwu: this.gjk
        }
    };
    this.vme = function () {
        this.hjw = this.eaa;
        this.awp = this.mli;
        this.mbq = this.tdn;
        this.wce = this.vkf;
        if (this.height > 0 && this.mrg) {
            this.awp = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.awp.addColorStop(0, this.mli);
            this.awp.addColorStop(1, this.mrg)
        }
        if (this.height > 0 && this.pvy) {
            this.hjw = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.hjw.addColorStop(0, this.eaa);
            this.hjw.addColorStop(1, this.pvy)
        }
        if (this.npe > 0 && this.slz) {
            this.mbq = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height / 2);
            this.mbq.addColorStop(0, this.tdn);
            this.mbq.addColorStop(1, this.slz)
        }
        if (this.xer > 0 && this.gjk) {
            this.wce = this.context2D.createLinearGradient(this.width / 2, this.height / 2, this.width / 2, this.height);
            this.wce.addColorStop(0, this.vkf);
            this.wce.addColorStop(1, this.gjk)
        }
    };
    this.dmk = function (b, c) {
        if (b >= this.parent.hhw.uay.sde.x && b <= this.parent.hhw.uay.sde.x + this.parent.hhw.uay.sde.width && c >= this.parent.hhw.uay.sde.y && c <= this.parent.hhw.uay.sde.y + this.parent.hhw.uay.sde.height && this.fww()) {
            if (this.bgg) {
                this.jzj = false;
                this.bgg = false;
                this.stop();
                this.uth()
            }
            return true
        }
        return false
    };
    this.lrz = function (b, c) {
        this.swb = b;
        if (c && c === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.aaj = function (b, c) {
        this.dgl = b;
        if (c && c === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.qhu = function () {
        return this.dgl
    };
    this.start = function () {
        this.dft(true);
        this.parent.zwp();
        this.ycw = new Date().getTime();
        this.kwo = 0;
        this.cpn = 0;
        this.eqy = Math.floor((9 * this.swb) / (10 * this.yaq));
        this.jzj = true;
        this.bgg = false;
        this.parent.eha.mtk("jackpot");
        this.uee()
    };
    this.uee = function () {
        var b = 0,
            c = new Date().getTime();
        a.kwo++;
        if (a.kwo < a.llp) {
            if (a.kwo === a.qtk) {
                a.cpn = Math.floor(a.swb / 10)
            } else {
                if (a.kwo > a.qtk && a.kwo < a.qtk + a.yaq) {
                    a.cpn += a.eqy
                } else {
                    if (a.kwo == a.qtk + a.yaq) {
                        a.cpn = a.swb
                    }
                }
            }
            a.zwp();
            b = (a.kwo * a.swf - (c - a.ycw));
            a.rwy = setTimeout(a.uee, b)
        } else {
            a.parent.eha.xuk("jackpot");
            if (!kdn.qwt.value76 || !kdn.qwt.value76.u) {
                a.jzj = false;
                a.stop();
                a.uth()
            } else {
                a.udf();
                a.bgg = true;
                a.gvz()
            }
        }
    };
    this.gvz = function () {
        var b = 0,
            c = new Date().getTime();
        a.kwo++;
        a.zwp();
        b = (a.kwo * a.swf - (c - a.ycw));
        a.rwy = setTimeout(a.gvz, b)
    };
    this.stop = function () {
        clearTimeout(this.rwy)
    };
    this.zwp = function () {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var b = this.context2D,
            c = (this.ggi === 0) ? this.asf : 0;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        if (this.ldi) {
            if (this.jzj === true) {
                b.drawImage(this.ldi, (this.kwo % 3) * this.ldi.width / 3, 0, this.ldi.width / 3, this.ldi.height, 0, 0, this.width, this.height)
            } else {
                b.drawImage(this.ldi, 0, 0, this.width, this.height)
            }
        } else {
            kdn.lgy.hal(b, 0, -c, this.width, this.height, this.ggi, this.ggi, this.nrd, this.nrd, this.hjw, 1, this.awp, this.asf, 1);
            kdn.lgy.suj(b, this.ksz.x, this.ksz.y, this.ksz.width, this.ksz.height, this.nrd, this.gfh, 1)
        }
        if (this.dgl != null) {
            kdn.lgy.jnl(b, this.dgl, this.mbq, this.dtw, this.vpw - c, this.width - 2 * this.dtw, this.height, this.xzn, this.npe, this.uid)
        }
        if (this.jzj === true) {
            if (this.cpn > 0) {
                kdn.lgy.jnl(b, this.parent.sbu(this.cpn), this.wce, this.dtw, this.mgb - c, this.width - 2 * this.dtw, this.height, this.utj, this.xer, this.uid)
            }
        } else {
            if (this.swb != null) {
                kdn.lgy.jnl(b, (this.swb > 0) ? this.parent.sbu(this.swb) : 0, this.wce, this.dtw, this.mgb - c, this.width - 2 * this.dtw, this.height, this.utj, this.xer, this.uid)
            }
        }
        b.restore();
        if (this.vtx && this.saw) {
            this.vtx.drawImage(this.saw, this.x, this.y)
        }
    };
    this.uth = function () {};
    this.udf = function () {}
}
cwa.prototype = new yos;

function kjc() {
    var a = this;
    this.uvm = null;
    this.lud = [];
    this.hzt = null;
    this.bop = null;
    this.swb = null;
    this.are = null;
    this.vjg = null;
    this.bgg = false;
    this.jzj = false;
    this.rwy = 0;
    this.tai = 0;
    this.swf = 89;
    this.ycw = 0;
    this.zfb = [];
    this.cwu = 0;
    this.enk = 0;
    this.rvy = 0;
    this.vhf = 0;
    this.ikl = new bzm();
    this.ksz = new bzm();
    this.nzx = null;
    this.cyt = 0;
    this.sfd = 0;
    this.cjm = function (b, d, c) {
        kjc.prototype.cjm.call(this, b, d, c);
        this.are = document.createElement("canvas");
        this.vjg = this.are.getContext("2d")
    };
    this.tqi = function (b) {
        try {
            this.nzx = b.cty;
            this.ksz = b.bok;
            this.ikl = b.mew;
            this.cyt = b.shp;
            this.sfd = b.nhi;
            this.are.width = Math.round(this.ksz.width);
            this.are.height = Math.round(this.ksz.height)
        } catch (c) {
            console.error(c)
        }
    };
    this.lrz = function (l, j) {
        var m = this.vjg,
            c = "",
            n = [],
            b = 0,
            d = 1,
            k = 0,
            f = 0;
        j = (j) ? j : 1;
        f = this.parent.osq(l);
        for (var e = 0, g = f.length; e < g; e++) {
            c = f.charAt(e);
            c = c.replace(/\./g, "dt").replace(/\,/g, "cm").replace(/\ /g, "sp");
            n[e] = this.nzx["_" + c];
            b += n[e].width
        }
        if ((b * j) > this.are.width) {
            d = (this.are.width / (b * j)).toString();
            d = Number(d.substring(0, (d.length > 5) ? 5 : d.length))
        } else {
            k = Math.floor((this.are.width - (b * j)) / 2);
            y = 0
        }
        m.save();
        m.clearRect(0, 0, this.are.width, this.are.height);
        for (var e = 0, g = n.length; e < g; e++) {
            if (n[e].width > 0 && n[e].height > 0) {
                m.drawImage(this.hzt, n[e].x, n[e].y, n[e].width, n[e].height, k * d, n[e].y * d * j + (this.are.height - n[e].height * d * j) / 2, n[e].width * d * j, n[e].height * d * j);
                k += n[e].width * j
            }
        }
        m.restore()
    };
    this.start = function () {
        this.dft(true);
        this.parent.zwp();
        this.ycw = new Date().getTime();
        this.tai = 0;
        this.jzj = true;
        this.bgg = false;
        this.zfb.length = 0;
        for (var c = 0; c < 56; c++) {
            this.zfb[c] = {
                scale: 1,
                oxi: 1,
                y: this.y,
                x: this.x,
                vjd: 0,
                yfl: 0.5,
                env: 0
            }
        }
        for (var c = 0; c < 16; c++) {
            if (c <= 3) {
                this.zfb[c].oxi = Math.sin(Math.PI / 8 * (c + 1))
            }
            this.zfb[c].y = this.y + this.cyt * Math.cos(Math.PI / 32 * c);
            this.zfb[c].x = this.x + this.sfd * Math.sin(Math.PI / 8 * c);
            this.zfb[c].scale = Math.sin(Math.PI / 32 * c)
        }
        for (var c = 6, b = 1; b <= 10; c++, b++) {
            this.zfb[c].yfl = 0.5 + 0.5 * Math.sin(Math.PI / 20 * b)
        }
        for (var c = 16, b = 1; b <= 40; c++, b++) {
            this.zfb[c].yfl = 1 + 0.5 * Math.sin(Math.PI / 40 * b)
        }
        for (var c = 16, b = 0; c < this.zfb.length; c++, b++) {
            this.zfb[c].vjd = b;
            if (b >= this.lud.length && b <= this.lud.length + 6) {
                this.zfb[c].env = Math.sin(Math.PI / 12 * (b - this.lud.length))
            } else {
                if (b >= this.lud.length + 6) {
                    this.zfb[c].env = 1
                }
            }
        }
        for (var c = this.zfb.length - 7, b = 0; c < this.zfb.length; c++, b++) {
            this.zfb[c].oxi = Math.cos(Math.PI / 12 * b)
        }
        this.parent.eha.mtk("mystery_jackpot");
        this.uee()
    };
    this.uee = function () {
        var b = 0,
            c = new Date().getTime();
        a.tai++;
        if (a.tai < a.zfb.length - 1) {
            a.cwu = Math.floor(a.width * a.zfb[a.tai].scale);
            a.enk = Math.floor(a.height * a.zfb[a.tai].scale);
            a.rvy = Math.floor(a.ksz.width * a.zfb[a.tai].yfl);
            a.vhf = Math.floor(a.ksz.height * a.zfb[a.tai].yfl);
            a.parent.zwp();
            b = (a.tai * a.swf - (c - a.ycw));
            a.rwy = setTimeout(a.uee, b)
        } else {
            a.jzj = false;
            a.stop();
            a.uth()
        }
    };
    this.stop = function () {
        clearTimeout(this.rwy)
    };
    this.zwp = function () {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var c = this.context2D,
            b = (this.jzj) ? this.zfb[this.tai].x : this.x,
            f = (this.jzj) ? this.zfb[this.tai].y : this.y,
            d = (this.jzj) ? this.zfb[this.tai].oxi : 1,
            e = (this.jzj) ? this.zfb[this.tai].vjd : 0;
        c.save();
        c.globalAlpha = d;
        c.clearRect(0, 0, this.width, this.height);
        if (e == 0) {
            c.drawImage(this.uvm, 0, 0, this.width, this.height)
        }
        if (e < this.lud.length) {
            c.drawImage(this.lud[e], 0, 0, this.width, this.height)
        } else {
            c.save();
            c.globalAlpha = d * this.zfb[this.tai].env;
            c.drawImage(this.bop, this.ikl.x, this.ikl.y);
            c.restore()
        }
        if (this.are) {
            c.drawImage(this.are, this.ksz.x + (this.ksz.width - this.rvy) / 2, this.ksz.y + (this.ksz.height - this.vhf) / 2, this.rvy, this.vhf)
        }
        c.restore();
        if (this.vtx && this.saw) {
            this.vtx.drawImage(this.saw, b + (this.width - this.cwu) / 2, f + (this.height - this.enk) / 2, this.cwu, this.enk)
        }
    };
    this.uth = function () {}
}
kjc.prototype = new yos;

function utv() {
    this.ldi = new Image();
    this.sjs = "";
    this.ggs = true;
    this.rcu = null;
    this.uid = "bold";
    this.jlv = "red";
    this.huh = "orange";
    this.jcc = "white";
    this.msb = 40;
    this.kgl = 0;
    this.qlm = 0;
    this.dtw = 0;
    this.zng = 2;
    this.qkv = null;
    this.qly = 0;
    this.ulj = 0;
    this.cjm = function (a, e, c, b, d) {
        utv.prototype.cjm.call(this, a, e, c);
        this.ldi = b;
        this.sjs = d
    };
    this.tqi = function (a) {
        try {
            this.msb = a.fontSize;
            this.kgl = a.dmm;
            this.qlm = a.qic;
            this.dtw = a.jvl;
            this.zng = a.pwm
        } catch (b) {
            console.error(b)
        }
    };
    this.idh = function (a) {
        try {
            this.rcu = a.font;
            this.uid = a.zde;
            this.jlv = a.jud;
            this.huh = a.crn;
            this.jcc = a.lka
        } catch (b) {
            console.error(b)
        }
    };
    this.nkf = function (a, b) {
        this.sjs = a;
        if (b && b === true && this.context2D != null) {
            this.dft(true, true)
        }
    };
    this.fbt = function (a, b) {
        this.sjs = a;
        this.ggs = false;
        if (b && b === true && this.context2D != null) {
            this.dft(true, true)
        }
    };
    this.dft = function (a, b) {
        this.qmi = a;
        if (b && b === true && this.context2D != null) {
            if (this.saw == null && this.fww()) {
                this.zwp()
            } else {
                if (this.parent != null) {
                    this.parent.zwp(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.cfy = function (a, b, c) {
        this.qkv = a;
        this.qly = b;
        this.ulj = c
    };
    this.zwp = function () {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.saw != null) ? 0 : this.x,
            d = (this.saw != null) ? 0 : this.y;
        b.save();
        if (this.saw == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.ggs === true) {
            if (this.qkv != null) {
                b.drawImage(this.qkv, this.x + this.qly, this.y + this.ulj, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.ldi != null) {
                b.drawImage(this.ldi, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.kgl, d, a + this.width / 2 + this.kgl, d + this.height);
        c.addColorStop(0, this.jlv);
        c.addColorStop(1, this.huh);
        kdn.lgy.jnl(b, this.sjs, c, a + this.dtw + this.kgl, d + this.qlm, this.width - 2 * this.dtw, this.height, this.rcu, this.msb, this.uid, this.jcc, this.zng);
        b.restore();
        if (this.vtx && this.saw) {
            this.vtx.drawImage(this.saw, this.x, this.y)
        }
    }
}
utv.prototype = new yos;

function epl() {
    var a = this;
    this.state = 0;
    this.kep = 1;
    this.kmm = null;
    this.pov = null;
    this.xkq = null;
    this.puy = "round";
    this.rcu = null;
    this.uid = "bold";
    this.zaz = "center";
    this.eaa = null;
    this.luk = null;
    this.crg = 1;
    this.awp = null;
    this.msb = 17;
    this.dtw = 2;
    this.egs = 0;
    this.asf = 1;
    this.bpc = 0;
    this.abk = 0;
    this.oux = 0;
    this.tqi = function (b) {
        try {
            this.msb = b.fontSize;
            this.dtw = b.jvl;
            this.egs = b.yhq;
            this.asf = b.dmp;
            this.oux = b.iqx
        } catch (c) {
            console.error(c)
        }
    };
    this.idh = function (b) {
        try {
            this.puy = b.rye;
            this.rcu = b.font;
            this.uid = b.zde;
            this.zaz = b.textAlign;
            this.eaa = b.backgroundColor;
            this.luk = b.asm;
            this.crg = b.auq;
            if (b.borderColor && b.dlt) {
                this.awp = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.awp.addColorStop(0, b.borderColor);
                this.awp.addColorStop(1, b.dlt)
            } else {
                this.awp = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.hwg = function () {
        return this.puy
    };
    this.lrg = function (c, b) {
        this.state = c;
        this.kep = b
    };
    this.kdm = function (b) {
        this.ldi = b;
        if (this.puy === "round") {
            this.bpc = this.width / 2 - this.dtw
        }
        if (this.ldi) {
            this.abk = Math.round(this.ldi.height / (2 * this.kep))
        }
    };
    this.isc = function (b) {
        this.state = (b < this.kep) ? b : this.state
    };
    this.yub = function (b) {
        this.kmm = b
    };
    this.xkj = function () {
        a.xxx = false
    };
    this.mdf = function () {
        a.rof = false;
        if (a.fww()) {
            a.parent.zwp(a.x, a.y, a.width, a.height)
        }
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var l = this.context2D,
            e = (this.ovk()) ? this.crg : this.crg / 2,
            b = this.msb,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.ldi && this.mik) {
            if (!this.ovk()) {
                l.globalAlpha = e
            }
            if (this.puy === "round") {
                kdn.lgy.kra(l, this.x + this.width / 2, this.y + this.height / 2, this.bpc, this.eaa, e * this.crg)
            } else {
                if (this.puy === "rect") {
                    kdn.lgy.elk(l, this.x, this.y, this.width, this.height, this.egs, this.eaa, e * this.crg, this.awp, this.asf, e)
                }
            }
            if (this.kpf()) {
                if (this.puy === "round") {
                    l.drawImage(this.ldi, 0, (this.state * 2 * this.abk) + this.abk, this.ldi.width, this.abk, this.x, this.y, this.width, this.height)
                } else {
                    if (this.puy === "rect") {
                        l.drawImage(this.ldi, 0, (this.state * 2 * this.abk) + this.abk, this.ldi.width, this.abk, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.puy === "round") {
                    l.drawImage(this.ldi, 0, (this.state * 2 * this.abk), this.ldi.width, this.abk, this.x, this.y, this.width, this.height)
                } else {
                    if (this.puy === "rect") {
                        l.drawImage(this.ldi, 0, (this.state * 2 * this.abk), this.ldi.width, this.abk, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.sjs != null) {
                l.textAlign = this.zaz;
                l.textBaseline = "bottom";
                l.font = this.uid + " " + b + "px " + this.rcu;
                l.fillStyle = this.luk;
                d = this.sjs.split("|");
                j = 0;
                g = (this.zaz === "center") ? this.x + this.width / 2 : (this.zaz === "left") ? this.x + 2 * this.dtw : this.x + this.width - 2 * this.dtw;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.dtw) {
                    c = ((this.width - 2 * this.dtw) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.uid + " " + b + "px " + this.rcu
                }
                if (b * d.length > this.oux) {
                    c = ((this.oux) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.uid + " " + b + "px " + this.rcu
                }
                k = (this.height - this.dtw - this.oux) + (this.oux - b * d.length) / 2;
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
epl.prototype = new aad;

function lzs() {
    var a = this;
    this.puy = "rect";
    this.uiv = -1;
    this.rcu = null;
    this.uid = "bold";
    this.eaa = null;
    this.pvy = null;
    this.gni = null;
    this.jzb = null;
    this.mli = null;
    this.luk = null;
    this.tsf = null;
    this.egs = 3;
    this.kgl = -2;
    this.qlm = 2;
    this.olz = 6;
    this.msb = 26;
    this.asf = 2;
    this.tqi = function (b) {
        try {
            this.msb = b.fontSize;
            this.kgl = b.dmm;
            this.qlm = b.qic;
            this.olz = b.qbk;
            this.egs = b.yhq;
            this.asf = b.dmp
        } catch (c) {
            console.error(c)
        }
    };
    this.idh = function (b) {
        try {
            this.rcu = b.font;
            this.uid = b.zde;
            this.eaa = b.backgroundColor;
            this.pvy = b.qja;
            this.gni = b.plt;
            this.jzb = b.fqq;
            this.mli = b.borderColor;
            this.luk = b.asm;
            this.tsf = b.zmo;
            this.puy = b.rye;
            this.uiv = b.eyw
        } catch (c) {
            console.error(c)
        }
    };
    this.hwg = function () {
        return this.puy
    };
    this.xkj = function () {
        a.xxx = false
    };
    this.mdf = function () {
        a.rof = false;
        if (a.fww()) {
            a.parent.zwp(a.x, a.y, a.width, a.height)
        }
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.eaa,
            m = this.pvy,
            b = this.msb,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.uiv == 0 || this.uiv == 3) ? this.egs : 0;
        lt = (this.uiv == 1 || this.uiv == 3) ? this.egs : 0;
        rb = (this.uiv == 0 || this.uiv == 2) ? this.egs : 0;
        lb = (this.uiv == 1 || this.uiv == 2) ? this.egs : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.kpf()) {
            n = (this.gni != null) ? this.gni : n;
            m = (this.jzb != null) ? this.jzb : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.puy === "rrect") {
                    kdn.lgy.hal(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.mli, this.asf, 1)
                } else {
                    if (this.puy === "rect") {
                        if (this.mli) {
                            kdn.lgy.suj(p, this.x, this.y, this.width, this.height, this.egs, l, this.mli, this.asf)
                        } else {
                            kdn.lgy.eys(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.puy === "triangle") {
                            kdn.lgy.owz(p, this.uiv, this.x, this.y, this.width, this.height, this.egs, l, 1, this.mli, this.asf, 1)
                        }
                    }
                }
            } else {
                if (this.puy === "rrect") {
                    kdn.lgy.hal(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.mli, this.asf, 1)
                } else {
                    if (this.puy === "rect") {
                        if (this.mli) {
                            kdn.lgy.suj(p, this.x, this.y, this.width, this.height, this.egs, n, this.mli, this.asf, 1)
                        } else {
                            kdn.lgy.eys(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.puy === "triangle") {
                            kdn.lgy.owz(p, this.uiv, this.x, this.y, this.width, this.height, this.egs, n, 1, this.mli, this.asf, 1)
                        }
                    }
                }
            }
        }
        if (this.ldi != null) {
            h = this.height - 2 * this.olz;
            p.drawImage(this.ldi, this.x + this.width / 2 - h / 2, this.y + this.olz, h, h)
        }
        if (this.sjs != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.sjs.split("|");
            d = 0;
            if (this.kpf()) {
                d = 1;
                p.fillStyle = this.tsf
            } else {
                p.fillStyle = this.luk
            }
            p.font = this.uid + " " + b + "px " + this.rcu;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.olz) {
                c = ((this.width - 2 * this.olz) / o);
                b = Math.round(c * b) - 1;
                p.font = this.uid + " " + b + "px " + this.rcu
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.uid + " " + b + "px " + this.rcu
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.kgl, this.y - this.qlm + k + d);
                k += b
            }
        }
        p.restore()
    }
}
lzs.prototype = new aad;

function loc() {
    var a = this;
    this.sjs = null;
    this.bgg = false;
    this.xxx = false;
    this.lkh = false;
    this.rcu = null;
    this.uid = "bold";
    this.zaz = "center";
    this.eaa = null;
    this.mli = null;
    this.luk = null;
    this.ctl = "rect";
    this.qiz = new bzm();
    this.bnx = new bzm();
    this.msb = 16;
    this.egs = 8;
    this.asf = 1;
    this.aoj = 0;
    var b = 200;
    this.cjm = function (c, f, d, e) {
        this.sjs = e;
        loc.prototype.cjm.call(this, c, f, d)
    };
    this.idh = function (c) {
        try {
            this.rcu = c.font;
            this.uid = c.zde;
            this.zaz = c.textAlign;
            this.eaa = c.backgroundColor;
            this.mli = c.borderColor;
            this.luk = c.asm;
            this.ctl = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.tqi = function (c) {
        try {
            this.qiz = c.avj;
            this.bnx = c.mca;
            this.msb = c.fontSize;
            this.egs = c.yhq;
            this.asf = c.dmp
        } catch (d) {
            console.error(d)
        }
    };
    this.wfx = function (c) {
        this.bgg = c
    };
    this.ovk = function () {
        return this.bgg
    };
    this.qkf = function (c, d) {
        this.lkh = c;
        if (d && d === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.ffo = function () {
        return this.lkh
    };
    this.nkf = function (c, d) {
        this.sjs = c;
        if (d && d === true && this.fww()) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.egb = function (c, d) {
        this.xxx = c;
        d = (d === false) ? false : true;
        clearTimeout(this.aoj);
        if (this.xxx === true && d === true) {
            this.aoj = setTimeout(this.xkj, b)
        }
    };
    this.jeb = function () {
        return this.xxx
    };
    this.xkj = function () {
        a.xxx = false
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var c = this.context2D;
        c.save();
        kdn.lgy.suj(c, this.x, this.y, this.width, this.height, this.egs, this.eaa, this.mli, this.asf);
        if (this.ctl === "rect") {
            kdn.lgy.eys(c, this.x + this.bnx.x, this.y + this.bnx.y, this.bnx.width, this.bnx.height, this.luk, 0.2, this.luk, this.asf, 1);
            if (this.lkh === true) {
                kdn.lgy.eys(c, this.x + this.bnx.x + this.bnx.width / 4, this.y + this.bnx.y + this.bnx.height / 4, this.bnx.width / 2, this.bnx.height / 2, this.luk, 1)
            }
        } else {
            if (this.ctl === "round") {
                kdn.lgy.kra(c, this.x + this.bnx.x + this.bnx.width / 2, this.y + this.bnx.y + this.bnx.height / 2, this.bnx.width / 2, this.luk, 0.2, this.luk, this.asf, 1);
                if (this.lkh === true) {
                    kdn.lgy.kra(c, this.x + this.bnx.x + this.bnx.width / 2, this.y + this.bnx.y + this.bnx.height / 2, this.bnx.width / 4, this.luk, 1)
                }
            }
        }
        if (this.sjs && this.sjs != "") {
            kdn.lgy.hpn(c, this.sjs, this.luk, this.x + this.qiz.x, this.y + this.qiz.y, this.qiz.width, this.qiz.height, this.rcu, this.msb, this.uid, this.zaz, true)
        }
        c.restore();
        if (this.vtx && this.saw) {
            this.vtx.drawImage(this.saw, this.x, this.y)
        }
    };
    this.mik = {}
}
loc.prototype = new yos;

function ggj() {
    var b = this;
    var c = 0;
    var a = 1;
    this.wvx = null;
    this.wgw = "";
    this.ufu = "";
    this.sda = "";
    this.oos = "";
    this.mly = false;
    this.abc = [];
    this.nxy = 0;
    this.pey = 0;
    this.ilz = 0;
    this.lfr = 0;
    this.rys = 0;
    this.ygv = 0;
    this.ila = 0;
    this.jox = 0;
    this.trk = false;
    this.eoj = false;
    this.omd = false;
    this.ctl = "center";
    this.rcu = "arial";
    this.uid = "bold";
    this.tdn = "white";
    this.luk = "white";
    this.eaa = "black";
    this.pvy = null;
    this.mli = "white";
    this.mrg = "rgb(150,150,150)";
    this.mpo = null;
    this.mdv = null;
    this.asf = 3;
    this.mga = 0;
    this.qrs = 0;
    this.tqw = 0;
    this.npe = 30;
    this.nat = 24;
    this.gls = new bzm();
    this.jzf = new bzm();
    this.hgq = new bzm();
    this.aqr = new bzm();
    this.yef = new bzm();
    this.zeu = new bzm();
    this.kqv = new bzm();
    this.ghu = new bzm();
    this.ydx = new bzm();
    this.llp = 7;
    this.tfp = 0;
    this.aqo = 0;
    this.kwo = 0;
    this.uco = c;
    this.ycw = 0;
    this.swf = 89;
    this.scb = false;
    this.rwy = 0;
    this.zbk = 0;
    this.kzy = 0;
    this.rrl = 0;
    this.ofq = null;
    this.xud = 0;
    this.xdx = 1;
    this.jri = 250;
    this.cjm = function (d, f, e) {
        ggj.prototype.cjm.call(this, d, f, e);
        this.wvx = new xlf();
        this.wvx.cjm();
        this.wvx.hca("buttons");
        this.wvx.hca("checkboxes");
        this.wvx.hca("displays");
        this.wvx.hca("lbuttons");
        this.wvx.hca("mbuttons");
        this.wvx.hca("vbuttons");
        this.wvx.hca("cbuttons")
    };
    this.vmb = function (d) {
        try {
            this.ezt(d);
            this.fhe(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.idh = function (k) {
        try {
            var n = this.wvx.wrb("lbuttons"),
                m = this.wvx.wrb("mbuttons"),
                f = this.wvx.wrb("cbuttons"),
                g = this.wvx.wrb("displays");
            this.ctl = k.type;
            this.rcu = k.font;
            this.uid = k.zde;
            this.tdn = k.cxt;
            this.luk = k.asm;
            this.eaa = k.backgroundColor;
            this.pvy = k.qja;
            this.mli = k.borderColor;
            this.mpo = k.kus;
            this.mdv = k.qqn;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].idh(k.qls)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].idh(k.bhi)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].idh(k.hwi)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].idh(k.display)
            }
            this.wvx.kzj("checkboxes", "#idh", [k.wni])
        } catch (l) {
            console.error(l)
        }
    };
    this.tqi = function (k) {
        try {
            var n = this.wvx.wrb("lbuttons"),
                m = this.wvx.wrb("mbuttons"),
                f = this.wvx.wrb("cbuttons"),
                g = this.wvx.wrb("displays");
            this.asf = k.dmp;
            this.mga = k.ebw;
            this.qrs = k.jjq;
            this.tqw = k.zaa;
            this.npe = k.hnp;
            this.nat = k.oub;
            this.gls = k.hvq;
            this.jzf = k.fwc;
            this.hgq = k.bei;
            this.aqr = k.qpr;
            this.yef = k.mml;
            this.zeu = k.svp;
            this.wvx.qex("lgames", "#yai", [k.rqp]);
            this.wvx.qex("mgames", "#yai", [k.khc]);
            this.wvx.qex("lmincredit", "#yai", [k.txm]);
            this.wvx.qex("mmincredit", "#yai", [k.tww]);
            this.wvx.qex("lmaxcredit", "#yai", [k.ybe]);
            this.wvx.qex("mmaxcredit", "#yai", [k.dym]);
            this.wvx.qex("lmaxwin", "#yai", [k.sbs]);
            this.wvx.qex("mmaxwin", "#yai", [k.phn]);
            this.wvx.qex("start", "#yai", [k.tlv]);
            this.wvx.qex("cancel", "#yai", [k.mqy]);
            this.wvx.qex("gamesd", "#yai", [k.uhy]);
            this.wvx.qex("mincreditd", "#yai", [k.xkg]);
            this.wvx.qex("maxcreditd", "#yai", [k.tsx]);
            this.wvx.qex("maxwind", "#yai", [k.vgw]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].tqi(k.qls)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].tqi(k.bhi)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].tqi(k.hwi)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].tqi(k.display)
            }
            this.wvx.qex("cmincredit", "#yai", [k.mmx]);
            this.wvx.qex("cmaxcredit", "#yai", [k.yao]);
            this.wvx.qex("cmaxwin", "#yai", [k.bbd]);
            this.wvx.kzj("checkboxes", "#tqi", [k.wni])
        } catch (l) {
            console.error(l)
        }
    };
    this.ezt = function (d) {
        this.wvx.udd("start", this.wqf(d.tlv, this.parent.language.start, this.ekr, this.parent.dnt.osj), ["buttons", "cbuttons"]);
        this.wvx.udd("cancel", this.wqf(d.mqy, this.parent.language.rgl, this.kzc, this.parent.dnt.oay), ["buttons", "cbuttons"]);
        this.wvx.udd("lgames", this.wqf(d.rqp, "", this.zur, null), ["buttons", "lbuttons", "vbuttons"]);
        this.wvx.udd("mgames", this.wqf(d.khc, "+", this.mzg, null), ["buttons", "mbuttons", "vbuttons"]);
        this.wvx.udd("lmincredit", this.wqf(d.txm, "", this.ybb, null), ["buttons", "lbuttons", "vbuttons"]);
        this.wvx.udd("mmincredit", this.wqf(d.tww, "+", this.cnh, null), ["buttons", "mbuttons", "vbuttons"]);
        this.wvx.udd("lmaxcredit", this.wqf(d.ybe, "", this.vbl, null), ["buttons", "lbuttons", "vbuttons"]);
        this.wvx.udd("mmaxcredit", this.wqf(d.dym, "+", this.lzm, null), ["buttons", "mbuttons", "vbuttons"]);
        this.wvx.udd("lmaxwin", this.wqf(d.sbs, "", this.fzk, null), ["buttons", "lbuttons", "vbuttons"]);
        this.wvx.udd("mmaxwin", this.wqf(d.phn, "+", this.dwv, null), ["buttons", "mbuttons", "vbuttons"]);
        this.wvx.udd("cmincredit", this.npd(d.mmx, "", this.cwy), ["checkboxes"]);
        this.wvx.udd("cmaxcredit", this.npd(d.yao, "", this.vpr), ["checkboxes"]);
        this.wvx.udd("cmaxwin", this.npd(d.bbd, "", this.xsn), ["checkboxes"])
    };
    this.fhe = function (d) {
        this.wvx.udd("gamesd", this.ylb(d.uhy, null, (this.abc[this.nxy] > 0) ? this.abc[this.nxy] : "---"), ["displays"]);
        this.wvx.udd("mincreditd", this.ylb(d.xkg, null, "---"), ["displays"]);
        this.wvx.udd("maxcreditd", this.ylb(d.tsx, null, "---"), ["displays"]);
        this.wvx.udd("maxwind", this.ylb(d.vgw, null, "---"), ["displays"])
    };
    this.ylb = function (d, g, f) {
        var e = new asq();
        e.cjm(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.wqf = function (f, j, g, e) {
        var d = new lzs();
        d.cjm(f, this.context2D, null, null, j);
        d.parent = this;
        d.mik = g;
        if (e) {
            d.vrv = e.pdi
        }
        return d
    };
    this.npd = function (e, g, f) {
        var d = new loc();
        d.cjm(e, this.context2D, null, g);
        d.parent = this;
        d.mik = f;
        return d
    };
    this.dmk = function (r, n) {
        var s = this.wvx.wrb("vbuttons"),
            l = this.wvx.wrb("cbuttons"),
            g = this.wvx.wrb("checkboxes"),
            p = this.wvx.gfj("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.rmu) {
            return true
        }
        if ((!p || !p.fww()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.omd = true;
            this.xwd();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.fww() === true && d.ovk() === true && d.jeb() === false) {
                    d.qde(true, false, false);
                    this.xud = 0;
                    this.xdx = 1;
                    if (d.mik() === false) {
                        this.ofq = function () {
                            if (d.mik() === true) {
                                clearInterval(b.rrl);
                                d.qde(false, false);
                                b.parent.zwp();
                                for (var t = 0; t < m; t++) {
                                    s[t].egb(false)
                                }
                            }
                        };
                        this.rrl = setInterval(this.ofq, this.jri)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].egb(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.fww() === true && d.ovk() === true) {
                    this.parent.eha.xuk("btn");
                    this.parent.eha.mtk("btn");
                    d.qde(true, false);
                    d.mik();
                    for (var e = 0; e < m; e++) {
                        l[e].egb(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.fww() === true && k.ovk() === true) {
                    k.qkf(!k.ffo(), true);
                    k.mik();
                    for (var e = 0; e < m; e++) {
                        g[e].egb(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.szd = function () {
        var e = this.wvx.wrb("vbuttons"),
            j = this.wvx.wrb("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.kpf() == true) {
                clearInterval(this.rrl);
                f.qde(false, false);
                this.parent.zwp();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.kpf() == true) {
                f.qde(false, false);
                this.parent.zwp();
                return true
            }
        }
        return false
    };
    this.sxr = function (l) {
        var k = this.wvx.wrb("buttons");
        if (this.rmu) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.vrv) {
                if (f.ovk() && !f.jeb()) {
                    this.parent.eha.xuk("btn");
                    this.parent.eha.mtk("btn");
                    f.qde(true, false);
                    f.mik();
                    for (var e = 0; e < d; e++) {
                        k[e].egb(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.qpj = function () {
        var g = this.wvx.wrb("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.kpf() == true) {
                e.qde(false, false);
                this.parent.zwp();
                return true
            }
        }
        return false
    };
    this.lkn = function (d) {
        this.wvx.kzj("buttons", "#wfx", [d]);
        this.wvx.kzj("checkboxes", "#wfx", [d]);
        if (d === true && this.eoj === true) {
            this.wvx.qex("cmincredit", "#wfx", [false])
        }
    };
    this.ard = function (d) {
        this.abc = d.g;
        this.pey = d.v;
        this.ilz = d.v;
        this.trk = d.r;
        this.eoj = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.lfr = d.m;
            this.rys = d.m
        }
    };
    this.wvj = function () {
        if (this.trk === true) {
            this.ygv = this.parent.blh;
            this.ila = this.parent.blh;
            this.nxy = 0;
            this.jox = 0
        }
    };
    this.exa = function () {
        if (this.abc.length > 0 && this.nxy >= 0 && this.omd === false) {
            return this.abc[this.nxy]
        }
        return 0
    };
    this.wll = function () {
        var d = this.wvx.gfj("cmincredit") == null || this.wvx.qex("cmincredit", "#ffo");
        if (this.ygv > 0 && d === true) {
            return this.ygv
        }
        return 0
    };
    this.aao = function () {
        var d = this.wvx.gfj("cmaxcredit") == null || this.wvx.qex("cmaxcredit", "#ffo");
        if (this.ila > 0 && d === true) {
            return this.ila
        }
        return 0
    };
    this.fla = function () {
        var d = this.wvx.gfj("cmaxwin") == null || this.wvx.qex("cmaxwin", "#ffo");
        if (this.jox > 0 && d === true) {
            return this.jox
        }
        return 0
    };
    this.olx = function () {
        var f = this.wvx.gfj("cmincredit") == null || this.wvx.qex("cmincredit", "#ffo"),
            d = this.wvx.gfj("cmaxcredit") == null || this.wvx.qex("cmaxcredit", "#ffo"),
            e = this.wvx.gfj("cmaxwin") == null || this.wvx.qex("cmaxwin", "#ffo");
        this.scb = false;
        this.omd = false;
        this.ilz = (this.rys > 0) ? this.parent.wdm() * this.rys : this.ilz;
        this.pey = (this.lfr > 0) ? this.parent.wdm() * this.lfr : this.pey;
        if (this.trk === true) {
            f = this.eoj;
            d = false;
            e = false;
            this.wvj()
        } else {
            if (this.eoj === true) {
                f = true;
                this.ygv = (this.ygv < this.parent.blh) ? this.ygv : this.parent.blh;
                this.ygv = (this.ygv > 0) ? this.ygv : this.parent.blh
            } else {
                f = (this.ygv <= this.parent.blh) ? f : false;
                this.ygv = (this.ygv < this.parent.blh) ? this.ygv : this.parent.blh
            }
            d = (this.ila >= this.parent.blh) ? d : false;
            this.ila = (this.ila > this.parent.blh) ? this.ila : this.parent.blh
        }
        this.wvx.qex("cmincredit", "#qkf", [f]);
        this.wvx.qex("cmaxcredit", "#qkf", [d]);
        this.wvx.qex("cmaxwin", "#qkf", [e]);
        this.wvx.qex("gamesd", "#nkf", [(this.abc[this.nxy] > 0) ? this.abc[this.nxy] : "---"]);
        this.wvx.qex("mincreditd", "#nkf", [(f === true && this.ygv > 0) ? this.parent.vey(this.ygv) : "---"]);
        this.wvx.qex("maxcreditd", "#nkf", [(d === true && this.ila > 0) ? this.parent.vey(this.ila) : "---"]);
        this.wvx.qex("maxwind", "#nkf", [(e === true && this.jox > 0) ? this.parent.vey(this.jox) : "---"]);
        this.wvx.qex("lmincredit", "#dft", [f]);
        this.wvx.qex("mmincredit", "#dft", [f && this.ygv < this.parent.blh]);
        this.wvx.qex("lmaxcredit", "#dft", [d && this.ila > this.parent.blh]);
        this.wvx.qex("mmaxcredit", "#dft", [d]);
        this.wvx.qex("lmaxwin", "#dft", [e && this.jox > this.ilz]);
        this.wvx.qex("mmaxwin", "#dft", [e]);
        if (this.mly === false) {
            this.lkn(true);
            this.dft(true);
            this.parent.zwp()
        } else {
            this.goz();
            this.parent.eha.xuk("panel_out");
            this.parent.eha.mtk("panel_out");
            this.sgd()
        }
    };
    this.xwd = function () {
        b.lkn(false);
        if (b.mly === false) {
            b.dft(false);
            b.parent.zwp()
        } else {
            b.ldl();
            b.parent.eha.xuk("panel_out");
            b.parent.eha.mtk("panel_out");
            b.sgd()
        }
    };
    this.goz = function () {
        this.dft(true);
        this.rmu = true;
        this.bgg = false;
        this.uco = c;
        this.tfp = Math.floor(this.width / this.llp);
        this.kwo = 0;
        this.aqo = 0;
        this.ycw = new Date().getTime()
    };
    this.ldl = function () {
        this.rmu = true;
        this.bgg = false;
        this.uco = a;
        this.tfp = -Math.floor(this.width / this.llp);
        this.kwo = 1;
        this.aqo = this.width;
        this.ycw = new Date().getTime()
    };
    this.sgd = function () {
        var d = b.swf,
            e = new Date().getTime();
        if (b.kwo < b.llp) {
            b.aqo += b.tfp;
            b.kwo++;
            b.parent.zwp();
            d = (((b.uco === a) ? b.kwo - 1 : b.kwo) * b.swf - (e - b.ycw));
            b.rwy = setTimeout(b.sgd, d)
        } else {
            b.rmu = false;
            b.bgg = true;
            if (b.uco == a) {
                b.dft(false);
                b.parent.cfn();
                if (b.scb === true) {
                    b.zbk = setTimeout(b.parent.jty, 200)
                }
            } else {
                if (b.uco == c) {
                    b.lkn(true)
                }
            }
            b.parent.zwp()
        }
    };
    this.stop = function () {
        clearTimeout(this.rwy);
        clearTimeout(this.kzy);
        clearTimeout(this.zbk);
        clearInterval(this.rrl)
    };
    this.pjc = function (d) {
        this.wgw = d.nrp;
        this.ufu = d.oxg;
        this.sda = d.pen;
        this.wvx.qex("start", "#nkf", [d.start]);
        this.wvx.qex("cancel", "#nkf", [d.rgl]);
        this.wvx.qex("cmincredit", "#nkf", [d.pnm]);
        this.wvx.qex("cmaxcredit", "#nkf", [d.wnj]);
        this.wvx.qex("cmaxwin", "#nkf", [d.xgo]);
        if (this.parent.jma === true && kdn.qwt.value44.d === true) {
            this.oos = d.lxr
        }
    };
    this.zwp = function (n, m, o, j) {
        if (!this.fww()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.wvx.mpl(),
            e = this.eaa,
            l = this.mli;
        if (this.pvy) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.eaa);
            e.addColorStop(1, this.pvy)
        }
        if (this.mrg) {
            if (this.ctl === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.ctl === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.ctl === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.ctl === "left") {
                l.addColorStop(1, this.mli);
                l.addColorStop(0, this.mrg)
            } else {
                if (this.ctl === "center" || this.ctl === "right") {
                    l.addColorStop(0, this.mli);
                    l.addColorStop(1, this.mrg)
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
        kdn.lgy.hal(p, 0, 0, this.width, this.height, this.mga, this.qrs, this.qrs, this.mga, e, 1, l, this.asf, 1);
        kdn.lgy.suj(p, this.hgq.x, this.hgq.y, this.hgq.width, this.hgq.height, this.tqw, this.mpo, this.mdv, this.asf / 2);
        kdn.lgy.suj(p, this.yef.x, this.yef.y, this.yef.width, this.yef.height, this.tqw, this.mpo, this.mdv, this.asf / 2);
        kdn.lgy.jnl(p, this.wgw, this.tdn, this.gls.x, this.gls.y, this.gls.width, this.gls.height, this.rcu, this.npe, this.uid);
        kdn.lgy.hpn(p, this.oos, this.luk, this.jzf.x, this.jzf.y, this.jzf.width, this.jzf.height, this.rcu, this.nat, this.uid, "center", true);
        kdn.lgy.ufv(p, this.ufu, this.luk, this.aqr.x, this.aqr.y, this.aqr.width, this.aqr.height, this.rcu, this.nat, this.uid, 0);
        kdn.lgy.jnl(p, this.sda, this.luk, this.zeu.x, this.zeu.y, this.zeu.width, this.zeu.height, this.rcu, this.nat, this.uid);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].zwp()
        }
        p.restore();
        if (this.vtx && this.saw) {
            if (this.rmu) {
                if (this.aqo > 0) {
                    if (this.ctl === "left") {
                        this.vtx.drawImage(this.saw, this.width - this.aqo, 0, this.aqo, this.height, this.x, this.y, this.aqo, this.height)
                    } else {
                        if (this.ctl === "right") {
                            this.vtx.drawImage(this.saw, 0, 0, this.aqo, this.height, this.x + this.width - this.aqo, this.y, this.aqo, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.vtx.drawImage(this.saw, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.vtx.drawImage(this.saw, this.x, this.y)
                }
            }
        }
    };
    this.ekr = function () {
        b.parent.zwp();
        if (b.abc[b.nxy] <= 0) {
            return
        }
        if (b.mly === false) {
            b.kzy = setTimeout(b.parent.cfn, 400);
            b.zbk = setTimeout(b.parent.jty, 500)
        } else {
            b.rmu = true;
            b.scb = true;
            b.kzy = setTimeout(b.xwd, 400)
        }
    };
    this.kzc = function () {
        b.parent.zwp();
        b.omd = true;
        if (b.mly === false) {
            b.kzy = setTimeout(b.parent.cfn, 400)
        } else {
            b.rmu = true;
            b.kzy = setTimeout(b.xwd, 400)
        }
    };
    this.mzg = function () {
        b.nxy = (b.nxy < b.abc.length - 1) ? b.nxy + 1 : 0;
        b.parent.eha.mtk("step0");
        b.wvx.qex("gamesd", "#nkf", [(b.abc[b.nxy] > 0) ? b.abc[b.nxy] : "---"]);
        b.parent.zwp();
        return (b.nxy >= b.abc.length - 1)
    };
    this.zur = function () {
        b.nxy = (b.nxy > 0) ? b.nxy - 1 : b.abc.length - 1;
        b.parent.eha.mtk("step0");
        b.wvx.qex("gamesd", "#nkf", [(b.abc[b.nxy] > 0) ? b.abc[b.nxy] : "---"]);
        b.parent.zwp();
        return (b.nxy <= 0)
    };
    this.cnh = function () {
        var d = b.wvx.gfj("cmincredit") == null || b.wvx.qex("cmincredit", "#ffo");
        if (d === true) {
            if (++b.xud > 10) {
                b.xdx = 10
            }
            b.ygv = (b.ygv + (b.pey * b.xdx) <= b.parent.blh) ? b.ygv + (b.pey * b.xdx) : b.parent.blh;
            b.parent.eha.mtk("step0");
            b.wvx.qex("mincreditd", "#nkf", [(b.ygv > 0) ? b.parent.vey(b.ygv) : "---"]);
            b.wvx.qex("mmincredit", "#dft", [d && b.ygv < b.parent.blh]);
            b.wvx.qex("lmincredit", "#dft", [d && b.ygv > 0]);
            b.parent.zwp();
            return (b.ygv >= b.parent.blh)
        }
        return true
    };
    this.ybb = function () {
        var d = b.wvx.gfj("cmincredit") == null || b.wvx.qex("cmincredit", "#ffo");
        if (d === true) {
            if (++b.xud > 10) {
                b.xdx = 10
            }
            b.ygv = (b.ygv - (b.pey * b.xdx) > 0) ? b.ygv - (b.pey * b.xdx) : 0;
            b.parent.eha.mtk("step0");
            b.wvx.qex("mincreditd", "#nkf", [(b.ygv > 0) ? b.parent.vey(b.ygv) : "---"]);
            b.wvx.qex("mmincredit", "#dft", [d && b.ygv < b.parent.blh]);
            b.wvx.qex("lmincredit", "#dft", [d && b.ygv > 0]);
            b.parent.zwp();
            return (b.ygv >= b.parent.blh || b.ygv <= 0)
        }
        return true
    };
    this.lzm = function () {
        var d = b.wvx.gfj("cmaxcredit") == null || b.wvx.qex("cmaxcredit", "#ffo");
        if (d === true) {
            if (++b.xud > 10) {
                b.xdx = 10
            }
            b.ila = (b.ila + (b.ilz * b.xdx) > 0) ? b.ila + (b.ilz * b.xdx) : 0;
            b.parent.eha.mtk("step0");
            b.wvx.qex("maxcreditd", "#nkf", [(b.ila > 0) ? b.parent.vey(b.ila) : "---"]);
            b.wvx.qex("lmaxcredit", "#dft", [d && b.ila > b.parent.blh]);
            b.parent.zwp();
            return (b.ila <= b.parent.blh)
        }
        return true
    };
    this.vbl = function () {
        var d = b.wvx.gfj("cmaxcredit") == null || b.wvx.qex("cmaxcredit", "#ffo");
        if (d === true) {
            if (++b.xud > 10) {
                b.xdx = 10
            }
            b.ila = (b.ila - (b.ilz * b.xdx) > b.parent.blh) ? b.ila - (b.ilz * b.xdx) : b.parent.blh;
            b.parent.eha.mtk("step0");
            b.wvx.qex("maxcreditd", "#nkf", [(b.ila > 0) ? b.parent.vey(b.ila) : "---"]);
            b.wvx.qex("lmaxcredit", "#dft", [d && b.ila > b.parent.blh]);
            b.parent.zwp();
            return (b.ila <= b.parent.blh)
        }
        return true
    };
    this.dwv = function () {
        var d = b.wvx.gfj("cmaxwin") == null || b.wvx.qex("cmaxwin", "#ffo");
        if (d === true) {
            if (++b.xud > 10) {
                b.xdx = 10
            }
            b.jox = (b.jox + (b.ilz * b.xdx) > 0) ? b.jox + (b.ilz * b.xdx) : 0;
            b.parent.eha.mtk("step0");
            b.wvx.qex("maxwind", "#nkf", [(b.jox > 0) ? b.parent.vey(b.jox) : "---"]);
            b.wvx.qex("lmaxwin", "#dft", [d && b.jox > b.ilz]);
            b.parent.zwp();
            return (b.jox <= b.ilz)
        }
        return true
    };
    this.fzk = function () {
        var d = b.wvx.gfj("cmaxwin") == null || b.wvx.qex("cmaxwin", "#ffo");
        if (d === true) {
            if (++b.xud > 10) {
                b.xdx = 10
            }
            b.jox = (b.jox - (b.ilz * b.xdx) > 0) ? b.jox - (b.ilz * b.xdx) : b.ilz;
            b.parent.eha.mtk("step0");
            b.wvx.qex("maxwind", "#nkf", [(b.jox > 0) ? b.parent.vey(b.jox) : "---"]);
            b.wvx.qex("lmaxwin", "#dft", [d && b.jox > b.ilz]);
            b.parent.zwp();
            return (b.jox <= b.ilz)
        }
        return true
    };
    this.cwy = function () {
        var d = b.wvx.gfj("cmincredit") == null || b.wvx.qex("cmincredit", "#ffo");
        b.ygv = b.parent.blh;
        b.wvx.qex("mincreditd", "#nkf", [(d === true && b.ygv > 0) ? b.parent.vey(b.ygv) : "---"]);
        b.wvx.qex("lmincredit", "#dft", [d]);
        b.wvx.qex("mmincredit", "#dft", [d && b.ygv < b.parent.blh]);
        b.parent.zwp()
    };
    this.vpr = function () {
        var d = b.wvx.gfj("cmaxcredit") == null || b.wvx.qex("cmaxcredit", "#ffo");
        b.ila = b.parent.blh;
        b.wvx.qex("maxcreditd", "#nkf", [(d === true && b.ila > 0) ? b.parent.vey(b.ila) : "---"]);
        b.wvx.qex("lmaxcredit", "#dft", [d && b.ila > b.parent.blh]);
        b.wvx.qex("mmaxcredit", "#dft", [d]);
        b.parent.zwp()
    };
    this.xsn = function () {
        var d = b.wvx.gfj("cmaxwin") == null || b.wvx.qex("cmaxwin", "#ffo");
        if (b.jox === 0) {
            b.jox = b.ilz
        }
        b.wvx.qex("maxwind", "#nkf", [(d === true && b.jox > 0) ? b.parent.vey(b.jox) : "---"]);
        b.wvx.qex("lmaxwin", "#dft", [d && b.jox > b.ilz]);
        b.wvx.qex("mmaxwin", "#dft", [d]);
        b.parent.zwp()
    }
}
ggj.prototype = new yos;

function ngq() {
    this.zgd = "right";
    this.umn = "left";
    this.hgc = null;
    this.fos = null;
    this.wgw = null;
    this.lss = -1;
    this.fih = -1;
    this.bgg = true;
    this.lkh = false;
    this.xxx = false;
    this.rmu = false;
    this.kvr = 0;
    this.oyd = 0;
    this.dse = [];
    this.rsd = 0;
    this.uln = 0;
    this.pxl = 1;
    this.tai = 0;
    this.fdc = 0;
    this.ctl = this.zgd;
    this.rcu = null;
    this.uid = "bold";
    this.luk = "rgb(255,255,255)";
    this.eaa = "rgb(0,0,0)";
    this.coz = "rgb(0,0,0)";
    this.rqw = "rgb(0,0,0)";
    this.qep = 0.7;
    this.skv = null;
    this.pnt = null;
    this.mbp = null;
    this.htv = new bzm();
    this.bxp = new bzm();
    this.vhm = new bzm();
    this.gls = new bzm();
    this.asf = 2;
    this.egs = 5;
    this.gee = 4;
    this.mux = 10;
    this.gzo = 5;
    this.msb = 15;
    var a = 200;
    this.zji = function (c, d, f) {
        this.dse = [];
        this.kvr = (d < 0) ? 0 : d;
        this.oyd = (f < 0) ? 0 : f;
        for (var e = this.kvr, b = 0; e <= this.oyd; e++) {
            this.dse[b++] = c[e]
        }
        this.rsd = this.dse.length;
        this.tai = this.htv.height / this.rsd
    };
    this.tqi = function (b) {
        try {
            this.msb = b.fontSize;
            this.asf = b.dmp;
            this.egs = b.yhq;
            this.gee = b.whf;
            this.mux = b.hlt;
            this.gzo = b.tqk;
            this.htv = new bzm(b.tcu.x, b.tcu.y + b.kos, b.tcu.width, b.tcu.height - 2 * b.kos);
            this.bxp = new bzm(b.tcu.x, b.tcu.y, b.tcu.width, b.kos);
            this.vhm = new bzm(b.tcu.x, b.tcu.y + b.tcu.height - b.kos, b.tcu.width, b.kos);
            this.gls = b.hvq
        } catch (c) {
            console.error(c)
        }
    };
    this.idh = function (b) {
        try {
            this.rcu = b.font;
            this.uid = b.zde;
            this.luk = b.asm;
            this.eaa = b.backgroundColor;
            this.coz = b.epv;
            this.rqw = b.rnw;
            this.qep = b.mlx;
            this.pnt = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.pnt.addColorStop(0, b.rxn);
            this.pnt.addColorStop(1, b.tne);
            this.skv = this.context2D.createLinearGradient(this.htv.x, 0, this.htv.x + this.htv.width, 0);
            this.mbp = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.ctl === this.zgd) {
                this.skv.addColorStop(0, b.nbu);
                this.skv.addColorStop(1, b.kyt);
                this.mbp.addColorStop(0, b.ili);
                this.mbp.addColorStop(1, b.zca)
            } else {
                if (this.ctl === this.umn) {
                    this.skv.addColorStop(0, b.kyt);
                    this.skv.addColorStop(1, b.nbu);
                    this.mbp.addColorStop(0, b.zca);
                    this.mbp.addColorStop(1, b.ili)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.dmk = function (b, f, c) {
        if (this.rmu || !this.bgg || this.xxx) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.vhm.lim(e, d)) {
                this.gmw(-1);
                this.mtk();
                this.egb(true, true)
            } else {
                if (this.bxp.lim(e, d)) {
                    this.gmw(1);
                    this.mtk();
                    this.egb(true, true)
                } else {
                    if (this.htv.lim(e, d)) {
                        this.lkh = true;
                        this.etp(f);
                        this.egb(true, true)
                    }
                }
            }
            this.mik(this.uln);
            return true
        }
    };
    this.szd = function () {
        if (this.lkh) {
            this.lkh = false;
            this.mtk();
            return true
        }
        return false
    };
    this.sxr = function (b) {
        if (this.rmu || !this.bgg || this.xxx) {
            return true
        }
        if (b == this.fih) {
            this.gmw(-1);
            this.mtk();
            this.egb(true, true);
            this.mik(this.uln);
            return true
        } else {
            if (b == this.lss) {
                this.gmw(1);
                this.mtk();
                this.egb(true, true);
                this.mik(this.uln);
                return true
            }
        }
        return false
    };
    this.qpj = function () {};
    this.mur = function (b, d, c) {
        if (!this.lkh) {
            return false
        }
        if (b >= this.x + this.htv.x && b <= this.x + this.htv.x + this.htv.width && d >= this.y + this.htv.y && d <= this.y + this.htv.y + this.htv.height) {
            this.etp(d);
            this.mik(this.uln);
            return true
        }
        return false
    };
    this.egb = function (b, c) {
        this.xxx = b;
        c = (c === false) ? false : true;
        clearTimeout(this.aoj);
        if (this.xxx === true && c === true) {
            this.aoj = setTimeout(this.xkj, a)
        }
    };
    this.xkj = function () {};
    this.mik = function (b) {};
    this.mtk = function () {};
    this.agn = function (b, c) {
        this.kvr = (b < 0) ? 0 : b;
        this.oyd = (c < 0) ? 0 : c;
        if (this.dse) {
            this.oyd = (this.oyd > this.dse.length - 1) ? this.dse.length - 1 : this.oyd
        }
    };
    this.olx = function () {
        this.dft(true, true)
    };
    this.xwd = function () {
        this.dft(false, true)
    };
    this.wfx = function (b) {
        this.bgg = b
    };
    this.ovk = function () {
        return this.bgg
    };
    this.gqq = function (b, c) {
        this.uln = b;
        if (this.uln < this.kvr) {
            this.uln = this.kvr
        }
        if (this.uln >= this.oyd) {
            this.uln = this.oyd
        }
        this.pxl = this.uln + 1;
        if (c && c === true) {
            this.parent.zwp()
        }
    };
    this.dit = function (d, e) {
        this.uln = 0;
        for (var c = 0, b = this.dse.length; c < b; c++) {
            if (this.dse[c] == d) {
                this.uln = c;
                break
            }
        }
        this.uln = (this.uln >= this.kvr) ? this.uln : this.kvr;
        this.uln = (this.uln < this.oyd) ? this.uln : this.oyd;
        this.pxl = this.uln + 1;
        if (e) {
            this.parent.zwp()
        }
    };
    this.etp = function (b) {
        this.uln = Math.ceil(((this.htv.height) - (b - this.htv.y - this.y)) / this.tai) - 1;
        this.uln = (this.uln >= this.kvr) ? this.uln : this.kvr;
        this.uln = (this.uln < this.oyd) ? this.uln : this.oyd;
        this.pxl = this.uln + 1;
        this.parent.zwp()
    };
    this.gmw = function (b) {
        this.uln += b;
        this.uln = (this.uln >= this.kvr) ? this.uln : this.kvr;
        this.uln = (this.uln < this.oyd) ? this.uln : this.oyd;
        this.pxl = this.uln + 1;
        this.parent.zwp()
    };
    this.zwp = function () {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        this.hov();
        if (this.vtx && this.saw) {
            this.vtx.drawImage(this.gsl, this.x, this.y)
        }
    };
    this.hov = function () {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.luh(b);
        this.uvi(b);
        this.zqq(b);
        this.tke(b);
        this.snt(b);
        b.restore()
    };
    this.luh = function (b) {
        if (this.ctl === this.umn) {
            kdn.lgy.hal(b, 0, 0, this.width, this.height, this.egs, 0, 0, this.egs, this.eaa, 0.4, this.mbp, this.asf, 1)
        } else {
            if (this.ctl === this.zgd) {
                kdn.lgy.hal(b, 0, 0, this.width, this.height, 0, this.egs, this.egs, 0, this.eaa, 0.4, this.mbp, this.asf, 1)
            }
        }
    };
    this.uvi = function (b) {
        kdn.lgy.eys(b, this.htv.x, this.htv.y, this.htv.width, this.htv.height, this.coz, 1)
    };
    this.zqq = function (b) {
        kdn.lgy.eys(b, this.htv.x, this.htv.y + this.htv.height - Math.round(this.pxl * this.tai), this.htv.width, Math.round(this.pxl * this.tai), this.pnt, 1)
    };
    this.tke = function (b) {
        kdn.lgy.eys(b, this.htv.x - this.gee, this.htv.y - this.gee, this.htv.width + 2 * this.gee, this.htv.height + 2 * this.gee, null, 0, this.skv, this.gee, 1);
        if (this.ctl === this.umn) {
            kdn.lgy.hal(b, this.htv.x - this.gee, this.bxp.y, this.htv.width + 2 * this.gee, this.bxp.height, this.mux, 0, 0, 0, this.skv, 1);
            kdn.lgy.hal(b, this.htv.x - this.gee, this.vhm.y, this.htv.width + 2 * this.gee, this.vhm.height, 0, 0, 0, this.mux, this.skv, 1)
        } else {
            if (this.ctl === this.zgd) {
                kdn.lgy.hal(b, this.htv.x - this.gee, this.bxp.y, this.htv.width + 2 * this.gee, this.bxp.height, 0, this.mux, 0, 0, this.skv, 1);
                kdn.lgy.hal(b, this.htv.x - this.gee, this.vhm.y, this.htv.width + 2 * this.gee, this.vhm.height, 0, 0, this.mux, 0, this.skv, 1)
            }
        }
        b.strokeStyle = this.skv;
        b.lineWidth = Math.round(this.gee / 4);
        b.beginPath();
        for (var c = 1; c < this.rsd; c++) {
            b.moveTo(this.htv.x, this.htv.y + this.htv.height - Math.round(c * this.tai));
            b.lineTo(this.htv.x + this.htv.width, this.htv.y + this.htv.height - Math.round(c * this.tai))
        }
        b.closePath();
        b.stroke();
        if (this.hgc) {
            if (this.ctl === this.umn) {
                b.drawImage(this.hgc, 0, 0, this.hgc.width / 2, this.hgc.height, this.htv.x, this.htv.y, this.htv.width, this.htv.height)
            } else {
                if (this.ctl === this.zgd) {
                    b.drawImage(this.hgc, this.hgc.width / 2, 0, this.hgc.width / 2, this.hgc.height, this.htv.x, this.htv.y, this.htv.width, this.htv.height)
                }
            }
        }
    };
    this.snt = function (c) {
        var f = this.luk,
            e = this.luk,
            b = 0,
            d = 0;
        if (this.ctl === this.umn) {
            b = this.gzo;
            d = this.htv.x - 2 * this.gzo
        } else {
            if (this.ctl === this.zgd) {
                b = this.htv.x + this.htv.width + this.gzo;
                d = this.width - this.gzo - (this.htv.x + this.htv.width + this.gzo)
            }
        }
        if (this.uln > 0 && this.uln < this.dse.length - 1) {
            kdn.lgy.eys(c, b, this.htv.y + ((this.rsd - this.pxl) * this.tai), d, this.tai, this.rqw, this.qep);
            kdn.lgy.xhg(c, this.dse[this.uln], this.pnt, b, this.htv.y + ((this.rsd - this.pxl) * this.tai) + (this.tai - this.msb) / 2, d, this.msb, this.rcu, this.msb, this.uid, this.gzo)
        } else {
            if (this.uln == 0) {
                f = this.pnt
            } else {
                if (this.uln == this.dse.length - 1) {
                    e = this.pnt
                }
            }
        }
        kdn.lgy.eys(c, b, this.htv.y + (this.tai * (this.rsd - 1)), d, this.tai, this.rqw, this.qep);
        kdn.lgy.xhg(c, this.dse[0], f, b, this.htv.y + (this.tai * (this.rsd - 1)) + (this.tai - this.msb) / 2, d, this.msb, this.rcu, this.msb, this.uid, this.gzo);
        kdn.lgy.eys(c, b, this.htv.y, d, this.tai, this.rqw, this.qep);
        kdn.lgy.xhg(c, this.dse[this.dse.length - 1], e, b, this.htv.y + (this.tai - this.msb) / 2, d, this.msb, this.rcu, this.msb, this.uid, this.gzo);
        kdn.lgy.jnl(c, "+", this.luk, this.bxp.x, this.bxp.y, this.bxp.width, this.bxp.height, this.rcu, this.msb, this.uid);
        kdn.lgy.jnl(c, "", this.luk, this.vhm.x, this.vhm.y, this.vhm.width, this.vhm.height, this.rcu, this.msb, this.uid);
        if (this.wgw) {
            kdn.lgy.jnl(c, this.wgw, this.luk, this.gls.x, this.gls.y, this.gls.width, this.gls.height, this.rcu, this.msb, this.uid)
        }
    }
}
ngq.prototype = new yos;

function ixl() {
    var a = this;
    this.wvx = null;
    this.nrq = false;
    this.auu = "";
    this.bwo = "";
    this.rus = "";
    this.ymw = "";
    this.oos = "";
    this.ufu = "";
    this.sda = "";
    this.rcu = "arial";
    this.uid = "bold";
    this.luk = "white";
    this.eaa = "black";
    this.pvy = null;
    this.mli = "white";
    this.mrg = "rgb(150,150,150)";
    this.asf = 3;
    this.egs = 4;
    this.fcr = 24;
    this.kzb = 24;
    this.nat = 24;
    this.tcp = new bzm();
    this.nbz = new bzm();
    this.xbf = new bzm();
    this.zye = new bzm();
    this.bke = new bzm();
    this.eru = new bzm();
    this.cse = new bzm();
    this.abc = [];
    this.nxy = 0;
    this.pey = 0;
    this.ilz = 0;
    this.lfr = 0;
    this.rys = 0;
    this.ygv = 0;
    this.ila = 0;
    this.jox = 0;
    this.zkd = false;
    this.eoj = false;
    this.uln = 0;
    this.rdv = true;
    this.zac = true;
    this.ofq = null;
    this.rrl = 0;
    this.xud = 0;
    this.xdx = 1;
    this.jri = 250;
    this.cjm = function (b, d, c) {
        ixl.prototype.cjm.call(this, b, d, c);
        this.wvx = new xlf();
        this.wvx.cjm();
        this.wvx.hca("buttons");
        this.wvx.hca("displays");
        this.wvx.hca("checkboxes");
        this.wvx.hca("lbuttons");
        this.wvx.hca("mbuttons");
        this.wvx.hca("tbuttons");
        this.wvx.hca("bbuttons");
        this.wvx.hca("bdisplays");
        this.wvx.hca("abuttons");
        this.wvx.hca("adisplays");
        this.wvx.hca("acheckboxes");
        this.wvx.hca("sbuttons");
        this.wvx.hca("hbuttons")
    };
    this.vmb = function (b) {
        try {
            this.ezt(b);
            this.xcv(b);
            this.blo(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.idh = function (b) {
        try {
            var c = this.wvx.wrb("lbuttons"),
                n = this.wvx.wrb("mbuttons"),
                k = this.wvx.wrb("tbuttons"),
                m = this.wvx.wrb("sbuttons"),
                l = this.wvx.wrb("hbuttons"),
                f = this.wvx.wrb("displays");
            this.rcu = b.font;
            this.uid = b.zde;
            this.luk = b.asm;
            this.eaa = b.backgroundColor;
            this.pvy = b.qja;
            this.mli = b.borderColor;
            this.mrg = b.dlt;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].idh(b.qls)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].idh(b.bhi)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].idh(b.aly)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].idh(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].idh(b.msp)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].idh(b.msp)
            }
            this.wvx.kzj("checkboxes", "#idh", [b.wni])
        } catch (j) {
            console.error(j)
        }
    };
    this.tqi = function (g) {
        try {
            var b = this.wvx.wrb("lbuttons"),
                o = this.wvx.wrb("mbuttons"),
                l = this.wvx.wrb("tbuttons"),
                n = this.wvx.wrb("sbuttons"),
                m = this.wvx.wrb("hbuttons"),
                c = this.wvx.wrb("bdisplays"),
                f = this.wvx.wrb("adisplays");
            ilt = this.wvx.wrb("checkboxes"), bzq = n.length, zzm = (bzq <= 2) ? g.oik : (bzq <= 3) ? g.taj : (bzq <= 4) ? g.ycf : g.yyz, bzq = m.length, fdp = (bzq <= 2) ? g.oik : (bzq <= 3) ? g.taj : (bzq <= 4) ? g.ycf : g.yyz, zhw = (this.parent.wte() != null) ? g.bwf : g.jfd;
            this.asf = g.dmp;
            this.egs = g.yhq;
            this.fcr = g.svh;
            this.kzb = g.wvs;
            this.nat = g.oub;
            this.tcp = g.nxs;
            this.nbz = g.lsk;
            this.xbf = g.ksb;
            this.zye = g.tqu;
            this.bke = g.fwc;
            this.eru = g.qpr;
            this.cse = g.lwz;
            this.wvx.qex("bett", "#yai", [zhw.qcw]);
            this.wvx.qex("autot", "#yai", [zhw.sdk]);
            this.wvx.qex("helpt", "#yai", [zhw.uim]);
            this.wvx.qex("settingt", "#yai", [zhw.qwk]);
            this.wvx.qex("returnt", "#yai", [zhw.piy]);
            this.wvx.qex("lbet", "#yai", [g.ccj]);
            this.wvx.qex("mbet", "#yai", [g.hzv]);
            this.wvx.qex("llines", "#yai", [g.lhr]);
            this.wvx.qex("mlines", "#yai", [g.epc]);
            this.wvx.qex("betd", "#yai", [g.oye]);
            this.wvx.qex("linesd", "#yai", [g.ddj]);
            this.wvx.qex("totald", "#yai", [g.gev]);
            this.wvx.qex("lgames", "#yai", [g.rqp]);
            this.wvx.qex("mgames", "#yai", [g.khc]);
            this.wvx.qex("lmincredit", "#yai", [g.txm]);
            this.wvx.qex("mmincredit", "#yai", [g.tww]);
            this.wvx.qex("lmaxcredit", "#yai", [g.ybe]);
            this.wvx.qex("mmaxcredit", "#yai", [g.dym]);
            this.wvx.qex("lmaxwin", "#yai", [g.sbs]);
            this.wvx.qex("mmaxwin", "#yai", [g.phn]);
            this.wvx.qex("gamesd", "#yai", [g.uhy]);
            this.wvx.qex("mincreditd", "#yai", [g.xkg]);
            this.wvx.qex("maxcreditd", "#yai", [g.tsx]);
            this.wvx.qex("maxwind", "#yai", [g.vgw]);
            this.wvx.qex("cmincredit", "#yai", [g.mmx]);
            this.wvx.qex("cmaxcredit", "#yai", [g.yao]);
            this.wvx.qex("cmaxwin", "#yai", [g.bbd]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].tqi(g.qls)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].tqi(g.bhi)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].tqi(g.aly)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].tqi(g.hly)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].tqi(g.eik)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].tqi(g.msp)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].tqi(g.msp)
            }
            for (var d = 0, j = ilt.length; d < j; d++) {
                ilt[d].tqi(g.wni)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].yai(zzm[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].yai(fdp[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.ezt = function (c) {
        var b = (this.parent.wte() != null) ? c.bwf : c.jfd;
        this.wvx.udd("bett", this.fsr(b.qcw, null, this.parent.eha.zgs("btn_b"), this.rzy, null), ["buttons", "tbuttons"]);
        if (this.parent.wte() != null) {
            this.wvx.udd("autot", this.fsr(b.sdk, null, this.parent.eha.zgs("btn_as"), this.ddx, null), ["buttons", "tbuttons"])
        }
        this.wvx.udd("helpt", this.fsr(b.uim, null, this.parent.eha.zgs("btn_i"), this.uyu, null), ["buttons", "tbuttons"]);
        this.wvx.udd("settingt", this.fsr(b.qwk, null, this.parent.eha.zgs("btn_se"), this.osi, null), ["buttons", "tbuttons"]);
        this.wvx.udd("returnt", this.fsr(b.piy, null, this.parent.eha.zgs("btn_c"), this.ugb, null), ["buttons", "tbuttons"])
    };
    this.xcv = function (b) {
        this.wvx.udd("betd", this.ylb(b.oye, null, this.parent.yzf), ["displays", "bdisplays"]);
        this.wvx.udd("lbet", this.wqf(b.ccj, "", this.parent.ekj), ["buttons", "lbuttons", "bbuttons"]);
        this.wvx.udd("mbet", this.wqf(b.hzv, "+", this.parent.mrf), ["buttons", "mbuttons", "bbuttons"]);
        this.wvx.udd("linesd", this.ylb(b.ddj, null, this.parent.cpa), ["displays", "bdisplays"]);
        if (this.nrq) {
            this.wvx.udd("llines", this.wqf(b.lhr, "", this.parent.cbs), ["buttons", "lbuttons", "bbuttons"]);
            this.wvx.udd("mlines", this.wqf(b.epc, "+", this.parent.hpp), ["buttons", "mbuttons", "bbuttons"])
        }
        this.wvx.udd("totald", this.ylb(b.gev, null, this.parent.wdm()), ["displays", "bdisplays"])
    };
    this.blo = function (b) {
        this.wvx.udd("gamesd", this.ylb(b.uhy, null, this.abc[this.nxy]), ["displays", "adisplays"]);
        this.wvx.udd("lgames", this.wqf(b.rqp, "", this.zur), ["buttons", "lbuttons", "abuttons"]);
        this.wvx.udd("mgames", this.wqf(b.khc, "+", this.mzg), ["buttons", "mbuttons", "abuttons"]);
        this.wvx.udd("mincreditd", this.ylb(b.xkg, null, "---"), ["displays", "adisplays"]);
        this.wvx.udd("lmincredit", this.wqf(b.txm, "", this.ybb), ["buttons", "lbuttons", "abuttons"]);
        this.wvx.udd("mmincredit", this.wqf(b.tww, "+", this.cnh), ["buttons", "mbuttons", "abuttons"]);
        this.wvx.udd("maxcreditd", this.ylb(b.tsx, null, "---"), ["displays", "adisplays"]);
        this.wvx.udd("lmaxcredit", this.wqf(b.ybe, "", this.vbl), ["buttons", "lbuttons", "abuttons"]);
        this.wvx.udd("mmaxcredit", this.wqf(b.dym, "+", this.lzm), ["buttons", "mbuttons", "abuttons"]);
        this.wvx.udd("maxwind", this.ylb(b.vgw, null, "---"), ["displays", "adisplays"]);
        this.wvx.udd("lmaxwin", this.wqf(b.sbs, "", this.fzk), ["buttons", "lbuttons", "abuttons"]);
        this.wvx.udd("mmaxwin", this.wqf(b.phn, "+", this.dwv), ["buttons", "mbuttons", "abuttons"]);
        this.wvx.udd("cmincredit", this.npd(b.mmx, "", this.cwy), ["checkboxes", "acheckboxes"]);
        this.wvx.udd("cmaxcredit", this.npd(b.yao, "", this.vpr), ["checkboxes", "acheckboxes"]);
        this.wvx.udd("cmaxwin", this.npd(b.bbd, "", this.xsn), ["checkboxes", "acheckboxes"])
    };
    this.vrt = function (j, g, f, e, d, b) {
        var c = new epl();
        c.cjm(new bzm(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.mik = e;
        c.sjs = g;
        c.lrg(d, b);
        c.tqi(this.parent.hhw.ckq.msp);
        c.idh(this.parent.style.ckq.msp);
        c.kdm(f);
        this.wvx.udd(j, c, ["buttons", "sbuttons"])
    };
    this.pzx = function (f, e, d, c) {
        var b = new epl();
        b.cjm(new bzm(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.mik = c;
        b.sjs = e;
        b.tqi(this.parent.hhw.ckq.msp);
        b.idh(this.parent.style.ckq.msp);
        b.kdm(d);
        this.wvx.udd(f, b, ["buttons", "hbuttons"])
    };
    this.ylb = function (b, e, d) {
        var c = new asq();
        c.cjm(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.wqf = function (c, e, d) {
        var b = new lzs();
        b.cjm(c, this.context2D, null, null, e);
        b.parent = this;
        b.mik = d;
        return b
    };
    this.fsr = function (d, g, f, e, c) {
        var b = new lzs();
        b.cjm(d, this.context2D, null, f, g);
        b.parent = this;
        b.mik = e;
        if (c != null) {
            b.vrv = c
        }
        return b
    };
    this.npd = function (c, e, d) {
        var b = new loc();
        b.cjm(c, this.context2D, null, e);
        b.parent = this;
        b.mik = d;
        return b
    };
    this.dmk = function (o, n) {
        var m = this.wvx.wrb("buttons"),
            g = this.wvx.wrb("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.fww() === true) {
                if (b.ovk() === true && b.jeb() === false) {
                    if (b instanceof epl) {
                        this.parent.eha.xuk("btn");
                        this.parent.eha.mtk("btn");
                        b.qde(true, true, true);
                        b.mik()
                    } else {
                        if (b instanceof lzs) {
                            if (b.hwg() === "rect") {
                                this.parent.eha.xuk("btn");
                                this.parent.eha.mtk("btn");
                                b.qde(true, true, false);
                                b.mik()
                            } else {
                                b.qde(true, false, false);
                                this.xud = 0;
                                this.xdx = 1;
                                if (b.mik() === false) {
                                    this.ofq = function () {
                                        if (b.mik() === true) {
                                            clearInterval(a.rrl);
                                            b.qde(false, true);
                                            for (var p = 0; p < l; p++) {
                                                m[p].egb(false)
                                            }
                                        }
                                    };
                                    this.rrl = setInterval(this.ofq, this.jri)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].egb(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.fww() === true && k.ovk() === true) {
                    k.qkf(!k.ffo(), true);
                    k.mik();
                    for (var c = 0; c < l; c++) {
                        g[c].egb(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.szd = function () {
        var e = this.wvx.wrb("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.kpf() == true && !(c instanceof lzs && c.hwg() === "rect")) {
                clearInterval(this.rrl);
                c.qde(false, true);
                return true
            }
        }
        return false
    };
    this.sxr = function (b) {};
    this.qpj = function (b) {};
    this.mcr = function (c, b, d) {
        this.wvx.qex("betd", "#nkf", [c]);
        this.wvx.qex("linesd", "#nkf", [b]);
        this.wvx.qex("totald", "#nkf", [d]);
        this.parent.zwp()
    };
    this.uwl = function (b) {
        this.abc = b.g;
        this.pey = b.v;
        this.ilz = b.v;
        this.zkd = b.r;
        this.eoj = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.lfr = b.m;
            this.rys = b.m
        }
    };
    this.pmc = function () {
        if (this.zkd === true) {
            this.ygv = this.parent.blh;
            this.ila = this.parent.blh;
            this.nxy = 0;
            this.jox = 0
        }
    };
    this.exa = function () {
        if (this.abc.length > 0 && this.nxy >= 0) {
            return this.abc[this.nxy]
        }
        return 0
    };
    this.wll = function () {
        var b = this.wvx.gfj("cmincredit") == null || this.wvx.qex("cmincredit", "#ffo");
        if (this.ygv > 0 && b === true) {
            return this.ygv
        }
        return 0
    };
    this.aao = function () {
        var b = this.wvx.gfj("cmaxcredit") == null || this.wvx.qex("cmaxcredit", "#ffo");
        if (this.ila > 0 && b === true) {
            return this.ila
        }
        return 0
    };
    this.fla = function () {
        var b = this.wvx.gfj("cmaxwin") == null || this.wvx.qex("cmaxwin", "#ffo");
        if (this.jox > 0 && b === true) {
            return this.jox
        }
        return 0
    };
    this.olx = function (c, f, d) {
        if (this.abc && this.abc.length > 0) {
            var g = this.wvx.gfj("cmincredit") == null || this.wvx.qex("cmincredit", "#ffo"),
                e = this.wvx.gfj("cmaxcredit") == null || this.wvx.qex("cmaxcredit", "#ffo"),
                b = this.wvx.gfj("cmaxwin") == null || this.wvx.qex("cmaxwin", "#ffo");
            if (this.zkd === true) {
                g = this.eoj;
                e = false;
                b = false;
                this.pmc()
            } else {
                if (this.eoj === true) {
                    g = true;
                    this.ygv = (this.ygv < this.parent.blh) ? this.ygv : this.parent.blh;
                    this.ygv = (this.ygv > 0) ? this.ygv : this.parent.blh
                } else {
                    g = (this.ygv < this.parent.blh) ? g : false;
                    this.ygv = (this.ygv < this.parent.blh) ? this.ygv : this.parent.blh
                }
                e = (this.ila > this.parent.blh) ? e : false;
                this.ila = (this.ila > this.parent.blh) ? this.ila : this.parent.blh
            }
            this.wvx.qex("cmincredit", "#qkf", [g]);
            this.wvx.qex("cmaxcredit", "#qkf", [e]);
            this.wvx.qex("cmaxwin", "#qkf", [b]);
            this.wvx.qex("gamesd", "#nkf", [(this.abc[this.nxy] > 0) ? this.abc[this.nxy] : "---"]);
            this.wvx.qex("mincreditd", "#nkf", [(g === true && this.ygv > 0) ? this.parent.vey(this.ygv) : "---"]);
            this.wvx.qex("maxcreditd", "#nkf", [(e === true && this.ila > 0) ? this.parent.vey(this.ila) : "---"]);
            this.wvx.qex("maxwind", "#nkf", [(b === true && this.jox > 0) ? this.parent.vey(this.jox) : "---"]);
            this.wvx.qex("lmincredit", "#dft", [g]);
            this.wvx.qex("mmincredit", "#dft", [g]);
            this.wvx.qex("lmaxcredit", "#dft", [e]);
            this.wvx.qex("mmaxcredit", "#dft", [e]);
            this.wvx.qex("lmaxwin", "#dft", [b]);
            this.wvx.qex("mmaxwin", "#dft", [b])
        }
        this.rdv = c;
        this.zac = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.rzy()
            } else {
                if (d === 1) {
                    if (this.parent.wte() != null) {
                        this.ddx()
                    } else {
                        this.uyu()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.wte() != null) {
                            this.uyu()
                        } else {
                            this.osi()
                        }
                    } else {
                        if (d === 3 && this.parent.wte() != null) {
                            this.osi()
                        }
                    }
                }
            }
        } else {
            this.rzy()
        }
        this.wvx.kzj("tbuttons", "#wfx", [true]);
        this.dft(true);
        this.parent.zwp()
    };
    this.xwd = function () {
        this.wvx.kzj("tbuttons", "#wfx", [false]);
        this.wvx.kzj("bbuttons", "#wfx", [false]);
        this.wvx.kzj("sbuttons", "#wfx", [false]);
        this.wvx.kzj("abuttons", "#wfx", [false]);
        this.wvx.kzj("acheckboxes", "#wfx", [false]);
        this.dft(false);
        this.parent.zwp()
    };
    this.stop = function () {
        clearInterval(this.rrl)
    };
    this.pjc = function (d, b) {
        var c = "";
        this.wvx.qex("language", "#nkf", [kdn.uay.owg(d.language)]);
        this.wvx.qex("audio", "#nkf", [kdn.uay.owg(d.audio)]);
        this.wvx.qex("melody", "#nkf", [kdn.uay.owg(d.skd)]);
        this.wvx.qex("fullscreen", "#nkf", [kdn.uay.owg(d.bsb)]);
        this.wvx.qex("turbo", "#nkf", [kdn.uay.owg(d.zgb)]);
        this.wvx.qex("help", "#nkf", [kdn.uay.owg(d.dka)]);
        this.wvx.qex("history", "#nkf", [kdn.uay.owg(d.qlo)]);
        this.wvx.qex("statistic", "#nkf", [kdn.uay.owg(d.sjx)]);
        this.wvx.qex("rules", "#nkf", [kdn.uay.owg(d.nev)]);
        this.wvx.qex("gamble", "#nkf", [kdn.uay.owg(d.ixc)]);
        if (kdn.uay.qzo[kdn.uay.vtv] === kdn.cwg.umn) {
            c = kdn.uay.owg(d.left)
        } else {
            if (kdn.uay.qzo[kdn.uay.vtv] === kdn.cwg.zgd) {
                c = kdn.uay.owg(d.tsp)
            } else {
                if (kdn.uay.qzo[kdn.uay.vtv] === kdn.cwg.nyd) {
                    c = kdn.uay.owg(d.tmu)
                }
            }
        }
        this.wvx.qex("adjustment", "#nkf", [c]);
        if (b && b === true) {
            this.auu = kdn.uay.owg(d.dub) + "/" + kdn.uay.owg(d.kqi) + ":";
            this.bwo = kdn.uay.owg(d.cpa) + ":"
        } else {
            this.auu = kdn.uay.owg(d.dub) + ":"
        }
        this.rus = kdn.uay.owg(d.evb) + ":";
        this.ufu = kdn.uay.owg(d.oxg);
        this.sda = kdn.uay.owg(d.pen);
        if (this.parent.jma === true && kdn.qwt.value44.d === true) {
            this.oos = kdn.uay.owg(d.lxr)
        }
        this.wvx.qex("cmincredit", "#nkf", [kdn.uay.owg(d.pnm)]);
        this.wvx.qex("cmaxcredit", "#nkf", [kdn.uay.owg(d.wnj)]);
        this.wvx.qex("cmaxwin", "#nkf", [kdn.uay.owg(d.xgo)])
    };
    this.zwp = function (l, j, m, e) {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.wvx.wrb("tbuttons"),
            b = this.eaa,
            g = this.mli;
        if (this.pvy) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.eaa);
            b.addColorStop(1, this.pvy)
        }
        if (this.mrg) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.mli);
            g.addColorStop(1, this.mrg)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        kdn.lgy.suj(n, 0, 0, this.width, this.height, this.egs, b, g, this.asf);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].zwp()
        }
        if (this.uln === 0) {
            this.daa(n)
        } else {
            if (this.uln === 1) {
                this.avy(n)
            } else {
                if (this.uln === 2) {
                    this.ozw(n)
                } else {
                    if (this.uln === 3) {
                        this.tqx(n)
                    }
                }
            }
        }
        n.restore();
        if (this.vtx && this.saw) {
            if (c) {
                this.vtx.drawImage(this.saw, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.vtx.drawImage(this.saw, this.x, this.y)
            }
        }
    };
    this.daa = function (c) {
        var f = this.wvx.wrb("bbuttons"),
            d = this.wvx.wrb("bdisplays");
        if (this.tcp.width > 0 && this.tcp.height > 0) {
            kdn.lgy.ufv(c, this.auu, this.luk, this.tcp.x, this.tcp.y, this.tcp.width, this.tcp.height, this.rcu, this.fcr, this.uid, 0)
        }
        if (this.nbz.width > 0 && this.nbz.height > 0) {
            kdn.lgy.ufv(c, this.bwo, this.luk, this.nbz.x, this.nbz.y, this.nbz.width, this.nbz.height, this.rcu, this.fcr, this.uid, 0)
        }
        if (this.xbf.width > 0 && this.xbf.height > 0) {
            kdn.lgy.ufv(c, this.rus, this.luk, this.xbf.x, this.xbf.y, this.xbf.width, this.xbf.height, this.rcu, this.fcr, this.uid, 0)
        }
        kdn.lgy.hpn(c, this.ymw, this.luk, this.zye.x, this.zye.y, this.zye.width, this.zye.height, this.rcu, this.nat, this.uid, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].zwp()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].zwp()
        }
    };
    this.avy = function (c) {
        var f = this.wvx.wrb("abuttons"),
            d = this.wvx.wrb("adisplays"),
            g = this.wvx.wrb("acheckboxes");
        kdn.lgy.hpn(c, this.oos, this.luk, this.bke.x, this.bke.y, this.bke.width, this.bke.height, this.rcu, this.nat, this.uid, "center", true);
        kdn.lgy.ufv(c, this.ufu, this.luk, this.eru.x, this.eru.y, this.eru.width, this.eru.height, this.rcu, this.kzb, this.uid, 0);
        kdn.lgy.jnl(c, this.sda, this.luk, this.cse.x, this.cse.y, this.cse.width, this.cse.height, this.rcu, this.kzb, this.uid);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].zwp()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].zwp()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].zwp()
        }
    };
    this.ozw = function (c) {
        var d = this.wvx.wrb("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].zwp()
        }
    };
    this.tqx = function (c) {
        var d = this.wvx.wrb("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].zwp()
        }
    };
    this.mzg = function () {
        a.nxy = (a.nxy < a.abc.length - 1) ? a.nxy + 1 : 0;
        a.parent.eha.mtk("btn");
        a.wvx.qex("gamesd", "#nkf", [(a.abc[a.nxy] > 0) ? a.abc[a.nxy] : "---"]);
        a.zwp();
        return (a.nxy >= a.abc.length - 1)
    };
    this.zur = function () {
        a.nxy = (a.nxy > 0) ? a.nxy - 1 : a.abc.length - 1;
        a.parent.eha.mtk("btn");
        a.wvx.qex("gamesd", "#nkf", [(a.abc[a.nxy] > 0) ? a.abc[a.nxy] : "---"]);
        a.zwp();
        return (a.nxy <= 0)
    };
    this.cnh = function () {
        var b = a.wvx.gfj("cmincredit") == null || a.wvx.qex("cmincredit", "#ffo");
        if (b === true) {
            if (++a.xud > 10) {
                a.xdx = 10
            }
            a.ygv = (a.ygv + (a.pey * a.xdx) <= a.parent.blh) ? a.ygv + (a.pey * a.xdx) : a.parent.blh;
            a.parent.eha.mtk("btn");
            a.wvx.qex("mincreditd", "#nkf", [(a.ygv > 0) ? a.parent.vey(a.ygv) : "---"]);
            a.wvx.qex("mmincredit", "#dft", [b && a.ygv < a.parent.blh]);
            a.wvx.qex("lmincredit", "#dft", [b && a.ygv > 0]);
            a.zwp();
            return (a.ygv >= a.parent.blh)
        }
        return true
    };
    this.ybb = function () {
        var b = a.wvx.gfj("cmincredit") == null || a.wvx.qex("cmincredit", "#ffo");
        if (b === true) {
            if (++a.xud > 10) {
                a.xdx = 10
            }
            a.ygv = (a.ygv - (a.pey * a.xdx) > 0) ? a.ygv - (a.pey * a.xdx) : 0;
            a.parent.eha.mtk("btn");
            a.wvx.qex("mincreditd", "#nkf", [(a.ygv > 0) ? a.parent.vey(a.ygv) : "---"]);
            a.wvx.qex("mmincredit", "#dft", [b && a.ygv < a.parent.blh]);
            a.wvx.qex("lmincredit", "#dft", [b && a.ygv > 0]);
            a.zwp();
            return (a.ygv >= a.parent.blh || a.ygv <= 0)
        }
        return true
    };
    this.lzm = function () {
        var b = a.wvx.gfj("cmaxcredit") == null || a.wvx.qex("cmaxcredit", "#ffo");
        if (b === true) {
            if (++a.xud > 10) {
                a.xdx = 10
            }
            a.ila = (a.ila + (a.ilz * a.xdx) > 0) ? a.ila + (a.ilz * a.xdx) : 0;
            a.parent.eha.mtk("btn");
            a.wvx.qex("maxcreditd", "#nkf", [(a.ila > 0) ? a.parent.vey(a.ila) : "---"]);
            a.wvx.qex("lmaxcredit", "#dft", [b && a.ila > a.parent.blh]);
            a.zwp();
            return (a.ila <= a.parent.blh)
        }
        return true
    };
    this.vbl = function () {
        var b = a.wvx.gfj("cmaxcredit") == null || a.wvx.qex("cmaxcredit", "#ffo");
        if (b === true) {
            if (++a.xud > 10) {
                a.xdx = 10
            }
            a.ila = (a.ila - (a.ilz * a.xdx) > a.parent.blh) ? a.ila - (a.ilz * a.xdx) : a.parent.blh;
            a.parent.eha.mtk("btn");
            a.wvx.qex("maxcreditd", "#nkf", [(a.ila > 0) ? a.parent.vey(a.ila) : "---"]);
            a.wvx.qex("lmaxcredit", "#dft", [b && a.ila > a.parent.blh]);
            a.zwp();
            return (a.ila <= a.parent.blh)
        }
        return true
    };
    this.dwv = function () {
        var b = a.wvx.gfj("cmaxwin") == null || a.wvx.qex("cmaxwin", "#ffo");
        if (b === true) {
            if (++a.xud > 10) {
                a.xdx = 10
            }
            a.jox = (a.jox + (a.ilz * a.xdx) > 0) ? a.jox + (a.ilz * a.xdx) : 0;
            a.parent.eha.mtk("btn");
            a.wvx.qex("maxwind", "#nkf", [(a.jox > 0) ? a.parent.vey(a.jox) : "---"]);
            a.wvx.qex("lmaxwin", "#dft", [b && a.jox > a.ilz]);
            a.zwp();
            return (a.jox <= a.ilz)
        }
        return true
    };
    this.fzk = function () {
        var b = a.wvx.gfj("cmaxwin") == null || a.wvx.qex("cmaxwin", "#ffo");
        if (b === true) {
            if (++a.xud > 10) {
                a.xdx = 10
            }
            a.jox = (a.jox - (a.ilz * a.xdx) > 0) ? a.jox - (a.ilz * a.xdx) : a.ilz;
            a.parent.eha.mtk("btn");
            a.wvx.qex("maxwind", "#nkf", [(a.jox > 0) ? a.parent.vey(a.jox) : "---"]);
            a.wvx.qex("lmaxwin", "#dft", [b && a.jox > a.ilz]);
            a.zwp();
            return (a.jox <= a.ilz)
        }
        return true
    };
    this.cwy = function () {
        var b = a.wvx.gfj("cmincredit") == null || a.wvx.qex("cmincredit", "#ffo");
        a.ygv = a.parent.blh;
        a.wvx.qex("mincreditd", "#nkf", [(b === true && a.ygv > 0) ? a.parent.vey(a.ygv) : "---"]);
        a.wvx.qex("lmincredit", "#dft", [b]);
        a.wvx.qex("mmincredit", "#dft", [b && a.ygv < a.parent.blh]);
        a.zwp()
    };
    this.vpr = function () {
        var b = a.wvx.gfj("cmaxcredit") == null || a.wvx.qex("cmaxcredit", "#ffo");
        a.ila = a.parent.blh;
        a.wvx.qex("maxcreditd", "#nkf", [(b === true && a.ila > 0) ? a.parent.vey(a.ila) : "---"]);
        a.wvx.qex("lmaxcredit", "#dft", [b && a.ila > a.parent.blh]);
        a.wvx.qex("mmaxcredit", "#dft", [b]);
        a.zwp()
    };
    this.xsn = function () {
        var b = a.wvx.gfj("cmaxwin") == null || a.wvx.qex("cmaxwin", "#ffo");
        if (a.jox === 0) {
            a.jox = a.ilz
        }
        a.wvx.qex("maxwind", "#nkf", [(b === true && a.jox > 0) ? a.parent.vey(a.jox) : "---"]);
        a.wvx.qex("lmaxwin", "#dft", [b && a.jox > a.ilz]);
        a.wvx.qex("mmaxwin", "#dft", [b]);
        a.zwp()
    };
    this.rzy = function () {
        a.uln = 0;
        a.wvx.qex("bett", "#qde", [true, false, false]);
        a.wvx.qex("autot", "#qde", [false, false, false]);
        a.wvx.qex("helpt", "#qde", [false, false, false]);
        a.wvx.qex("settingt", "#qde", [false, false, false]);
        a.wvx.qex("returnt", "#qde", [false, false, false]);
        a.wvx.kzj("bbuttons", "#wfx", [a.rdv]);
        a.wvx.kzj("bbuttons", "#dft", [a.rdv]);
        a.wvx.kzj("abuttons", "#wfx", [false]);
        a.wvx.kzj("acheckboxes", "#wfx", [false]);
        a.wvx.kzj("hbuttons", "#wfx", [false]);
        a.wvx.kzj("sbuttons", "#wfx", [false]);
        a.zwp()
    };
    this.ddx = function () {
        var d = a.wvx.gfj("cmincredit") == null || a.wvx.qex("cmincredit", "#ffo"),
            c = a.wvx.gfj("cmaxcredit") == null || a.wvx.qex("cmaxcredit", "#ffo"),
            b = a.wvx.gfj("cmaxwin") == null || a.wvx.qex("cmaxwin", "#ffo");
        a.uln = 1;
        a.pey = (a.lfr > 0) ? a.parent.wdm() * a.lfr : a.pey;
        a.ilz = (a.rys > 0) ? a.parent.wdm() * a.rys : a.ilz;
        a.wvx.qex("bett", "#qde", [false, false, false]);
        a.wvx.qex("autot", "#qde", [true, false, false]);
        a.wvx.qex("helpt", "#qde", [false, false, false]);
        a.wvx.qex("settingt", "#qde", [false, false, false]);
        a.wvx.qex("returnt", "#qde", [false, false, false]);
        a.wvx.kzj("bbuttons", "#wfx", [false]);
        a.wvx.kzj("abuttons", "#wfx", [true]);
        a.wvx.qex("mmincredit", "#dft", [d && a.ygv < a.parent.blh]);
        a.wvx.qex("lmaxcredit", "#dft", [c && a.ila > a.parent.blh]);
        a.wvx.qex("lmaxwin", "#dft", [b && a.jox > a.ilz]);
        a.wvx.kzj("acheckboxes", "#wfx", [true]);
        a.wvx.kzj("hbuttons", "#wfx", [false]);
        a.wvx.kzj("sbuttons", "#wfx", [false]);
        if (a.eoj === true) {
            a.wvx.qex("cmincredit", "#wfx", [false])
        }
        a.zwp()
    };
    this.uyu = function () {
        a.uln = 2;
        a.wvx.qex("bett", "#qde", [false, false, false]);
        a.wvx.qex("autot", "#qde", [false, false, false]);
        a.wvx.qex("helpt", "#qde", [true, false, false]);
        a.wvx.qex("settingt", "#qde", [false, false, false]);
        a.wvx.qex("returnt", "#qde", [false, false, false]);
        a.wvx.kzj("bbuttons", "#wfx", [false]);
        a.wvx.kzj("abuttons", "#wfx", [false]);
        a.wvx.kzj("acheckboxes", "#wfx", [false]);
        a.wvx.kzj("hbuttons", "#wfx", [true]);
        a.wvx.kzj("sbuttons", "#wfx", [false]);
        a.zwp()
    };
    this.osi = function () {
        a.uln = 3;
        a.wvx.qex("bett", "#qde", [false, false, false]);
        a.wvx.qex("autot", "#qde", [false, false, false]);
        a.wvx.qex("helpt", "#qde", [false, false, false]);
        a.wvx.qex("settingt", "#qde", [true, false, false]);
        a.wvx.qex("returnt", "#qde", [false, false, false]);
        a.wvx.kzj("bbuttons", "#wfx", [false]);
        a.wvx.kzj("abuttons", "#wfx", [false]);
        a.wvx.kzj("acheckboxes", "#wfx", [false]);
        a.wvx.kzj("hbuttons", "#wfx", [false]);
        a.wvx.kzj("sbuttons", "#wfx", [true]);
        a.wvx.qex("gamble", "#wfx", [a.zac]);
        a.zwp()
    };
    this.ugb = function () {
        a.parent.zmk();
        a.wvx.qex("returnt", "#qde", [false, false, false])
    }
}
ixl.prototype = new yos;

function pug() {
    var a = this;
    this.rcu = null;
    this.uid = "bold";
    this.eaa = "rgb(0,0,0)";
    this.pvy = null;
    this.luk = "rgb(255,255,255)";
    this.mrg = null;
    this.mli = "rgb(60,60,60)";
    this.hjw = null;
    this.mmk = null;
    this.bgg = false;
    this.ceb = [];
    this.gbz = [];
    this.knt = null;
    this.gyz = 19;
    this.pkf = 15;
    this.zti = 120;
    this.kgl = 2;
    this.qlm = 2;
    this.jiw = 2;
    this.omj = 10;
    this.msb = 12;
    this.cjm = function (b, d, c) {
        pug.prototype.cjm.call(this, b, d, c)
    };
    this.tqi = function (b) {
        try {
            this.msb = b.fontSize;
            this.gyz = b.kff;
            this.pkf = b.nef;
            this.zti = b.jsr;
            this.kgl = b.dmm;
            this.qlm = b.qic;
            this.jiw = b.amf;
            this.omj = b.jpm
        } catch (c) {
            console.error(c)
        }
    };
    this.idh = function (b) {
        try {
            this.rcu = b.font;
            this.uid = b.zde;
            this.eaa = b.backgroundColor;
            this.pvy = b.qja;
            this.luk = b.asm;
            this.mli = b.borderColor;
            this.mrg = b.dlt;
            if (this.pvy) {
                this.hjw = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.hjw.addColorStop(0, this.pvy);
                this.hjw.addColorStop(0.5, this.eaa)
            } else {
                this.hjw = this.eaa
            }
            if (this.mrg) {
                this.mmk = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.mmk.addColorStop(0, this.mrg);
                this.mmk.addColorStop(1, this.mli)
            } else {
                this.mmk = this.mli
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.dmk = function (b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.omj : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.ovk()) {
            this.parent.shx();
            return true
        }
        return false
    };
    this.ubc = function (d, b, c) {
        this.gbz.push({
            id: d,
            twd: b,
            value: c,
            cnb: null
        })
    };
    this.zzt = function (e, c, d, b) {
        this.gbz.push({
            id: e,
            twd: c,
            value: d,
            cnb: b
        })
    };
    this.mcd = function (d, b, c) {
        this.ceb.push({
            id: d,
            bdl: b,
            value: c
        })
    };
    this.isc = function (e, d) {
        for (var c = 0, b = this.gbz.length; c < b; c++) {
            if (this.gbz[c].id == e) {
                this.gbz[c].value = d;
                return true
            }
        }
        return false
    };
    this.uxp = function (c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.yub = function (e, d) {
        for (var c = 0, b = this.ceb.length; c < b; c++) {
            if (this.ceb[c].id == e) {
                if (this.ceb[c].value != d) {
                    this.ceb[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.sdc = function (b) {
        this.knt = b
    };
    this.wfx = function (b) {
        this.bgg = b
    };
    this.ovk = function (b) {
        return this.bgg
    };
    this.ins = function (c, b) {
        if (this.isc(c, b)) {
            window.vym(a.zwp)
        }
    };
    this.kcp = function (c, b) {
        if (this.yub(c, b)) {
            window.vym(a.zwp)
        }
    };
    this.jgx = function (b) {
        this.sdc(b);
        window.vym(a.zwp)
    };
    this.zwp = function () {
        if (!a.fww() || !a.parent.bja()) {
            return
        }
        var e = (a.height - a.msb) / 2 + a.qlm,
            c = a.kgl + a.gyz * a.gbz.length,
            d = a.width - c - (a.zti * a.ceb.length),
            b = a.context2D;
        b.save();
        kdn.lgy.eys(b, 0, 0, a.width, a.height, a.hjw, 1);
        a.kzf(b, e);
        a.ktv(b, e);
        if (a.knt && a.knt != "") {
            kdn.lgy.jnl(b, a.knt, a.luk, c, e, d, a.msb, a.rcu, a.msb, a.uid)
        } else {
            if (a.ovk()) {
                a.qqg(b)
            }
        }
        a.odt(b, 0, a.height - a.jiw / 2, a.width, a.height - a.jiw / 2);
        b.restore();
        if (a.vtx && a.saw) {
            a.vtx.drawImage(a.saw, a.x, a.y)
        }
    };
    this.kzf = function (d, g) {
        var c = 0;
        for (var f = 0, b = this.gbz.length; f < b; f++) {
            if (this.gbz[f].cnb) {
                var e = this.uxp(this.gbz[f].cnb, this.gbz[f].value);
                if (this.gbz[f].twd instanceof Array) {
                    kdn.lgy.jnl(d, this.gbz[f].twd[e], this.luk, c, g, this.gyz, this.msb, this.rcu, this.msb, this.uid)
                } else {
                    if (this.gbz[f].twd instanceof Image || this.gbz[f].twd instanceof HTMLCanvasElement) {
                        d.drawImage(this.gbz[f].twd, e * this.pkf, 0, this.pkf, this.gbz[f].twd.height, c + this.kgl, g - this.qlm, this.gyz - 2 * this.kgl, this.msb)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.gbz[f].value == true) ? 1 : 0.3;
                if (this.gbz[f].twd instanceof String) {
                    kdn.lgy.jnl(d, this.gbz[f].twd, this.luk, c, g, this.gyz, this.msb, this.rcu, this.msb, this.uid)
                } else {
                    if (this.gbz[f].twd instanceof Image || this.gbz[f].twd instanceof HTMLCanvasElement) {
                        d.drawImage(this.gbz[f].twd, c + this.kgl, g - this.qlm, this.gyz - 2 * this.kgl, this.msb)
                    }
                }
                d.restore()
            }
            c += this.gyz;
            this.odt(d, c, 0, c, this.height)
        }
        return c
    };
    this.ktv = function (d, f) {
        var c = this.width - this.kgl - this.zti * this.ceb.length;
        for (var e = 0, b = this.ceb.length; e < b; e++) {
            if (this.ceb[e].id == "freeplay") {
                kdn.lgy.eys(d, c, 0, this.zti, this.height, "red", 0.4)
            } else {
                if (this.ceb[e].id == "freespin") {
                    kdn.lgy.eys(d, c, 0, this.zti, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.odt(d, c, 0, c, this.height);
            kdn.lgy.jnl(d, this.ceb[e].bdl + this.ceb[e].value, this.luk, c, f, this.zti, this.msb, this.rcu, this.msb, this.uid);
            c += this.zti
        }
    };
    this.odt = function (b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.mmk;
        b.lineWidth = this.jiw;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.qqg = function (c) {
        if (this.parent.bew.gfj("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.jiw,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.jiw;
        c.save();
        c.strokeStyle = this.mli;
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
pug.prototype = new yos;

function nbc() {
    var b = this;
    var c = 0;
    var a = 1;
    this.kar = 7;
    this.ffe = 89;
    this.rvs = 10000;
    this.wvx = null;
    this.bgg = false;
    this.rmu = false;
    this.qdd = -1;
    this.rwy = 0;
    this.rcu = null;
    this.uid = "bold";
    this.eaa = "black";
    this.jcc = null;
    this.fwr = null;
    this.mbp = null;
    this.luk = "white";
    this.eoa = 0.8;
    this.lrs = 0;
    this.yue = 0;
    this.kwo = 0;
    this.uco = 0;
    this.evk = 0;
    this.hbs = 0;
    this.fng = 0;
    this.kgl = 10;
    this.qlm = 5;
    this.dtw = 10;
    this.mnj = this.kgl;
    this.aqh = 10;
    this.wza = 20;
    this.zja = 40;
    this.asf = 4;
    this.msb = 10;
    this.uub = null;
    this.xpf = null;
    this.yov = "";
    this.vvo = null;
    this.cjm = function (d, f, e) {
        nbc.prototype.cjm.call(this, d, f, e);
        this.wvx = new xlf();
        this.wvx.cjm();
        this.wvx.hca("buttons");
        this.wvx.hca("system");
        this.wvx.hca("setting")
    };
    this.tqi = function (d) {
        try {
            this.msb = d.fontSize;
            this.aqh = d.otp;
            this.wza = d.utm;
            this.zja = d.zms;
            this.asf = d.dmp;
            this.kgl = d.dmm;
            this.qlm = d.qic;
            this.dtw = d.jvl
        } catch (f) {
            console.error(f)
        }
    };
    this.idh = function (g, m) {
        try {
            var k = this.wvx.wrb("buttons"),
                j = (m === true) ? g.mjn.ocr : g.veo.ocr;
            this.rcu = g.font;
            this.uid = g.zde;
            this.eaa = g.backgroundColor;
            this.jcc = g.lka;
            this.fwr = g.gog;
            this.luk = g.asm;
            this.eoa = g.oxi;
            if (this.jcc && this.fwr) {
                this.mbp = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.mbp.addColorStop(0, this.jcc);
                this.mbp.addColorStop(0.5, this.fwr);
                this.mbp.addColorStop(1, this.jcc)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].idh(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.dmk = function (p, o) {
        var n = this.wvx.mpl(),
            q = this.wvx.gfj("audio"),
            r = this.wvx.gfj("language"),
            f = this.wvx.gfj("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.rmu) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.fww()) {
                if (g.ovk() && !g.jeb()) {
                    if (g != q && g != r) {
                        this.parent.eha.xuk("btn");
                        this.parent.eha.mtk("btn")
                    }
                    g.qde(true, true, false);
                    g.mik();
                    for (var k = 0; k < m; k++) {
                        n[k].egb(true)
                    }
                    if (g != f) {
                        if (this.qdd >= 0) {
                            clearTimeout(this.qdd);
                            this.qdd = -1
                        }
                        this.qdd = setTimeout(this.jna, this.rvs)
                    }
                }
                return true
            }
        }
        if (this.fww() && this.ovk()) {
            if (p < this.x + this.evk || p > this.x + this.evk + this.hbs || o < this.y || o > this.y + this.height) {
                if (this.qdd >= 0) {
                    clearTimeout(this.qdd);
                    this.qdd = -1
                }
                return false
            }
        }
        return true
    };
    this.szd = function () {
        var g = this.wvx.mpl();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.kpf() == true) {
                e.qde(false, true);
                return true
            }
        }
        return false
    };
    this.sxr = function (e) {
        var o = this.wvx.mpl(),
            d = this.wvx.wrb("system"),
            m = this.wvx.wrb("setting"),
            q = this.wvx.gfj("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.rmu) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.vrv || e == f.npz) && !f.jeb()) {
                if (f != q) {
                    this.parent.eha.xuk("btn");
                    this.parent.eha.mtk("btn")
                }
                f.qde(true, true, false);
                f.mik();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].egb(true)
                }
                if (this.qdd >= 0) {
                    clearTimeout(this.qdd);
                    this.qdd = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.vrv || e == f.npz) && f.ovk() && !f.jeb()) {
                if (f != q) {
                    this.parent.eha.xuk("btn");
                    this.parent.eha.mtk("btn")
                }
                f.qde(true, true, false);
                f.mik();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].egb(true)
                }
                if (this.qdd >= 0) {
                    clearTimeout(this.qdd);
                    this.qdd = -1
                }
                return true
            }
        }
        if (this.fww() && this.ovk()) {
            if (this.parent.dnt) {
                for (l = 0, n = this.parent.dnt.tzn.length; l < n; l++) {
                    var p = this.parent.dnt.tzn[l];
                    if (p.pdi == e || p.pdi == e) {
                        if (this.qdd >= 0) {
                            clearTimeout(this.qdd);
                            this.qdd = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.qpj = function () {
        var g = this.wvx.mpl();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.kpf() == true) {
                e.qde(false, true, false);
                return true
            }
        }
        return false
    };
    this.mur = function (e, m) {
        var k = this.wvx.mpl(),
            l = e - this.x,
            j = m - this.y;
        this.xpf = this.uub;
        this.uub = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.fww() && f.ovk() && !f.jeb()) {
                this.uub = f
            }
        }
        if (this.uub) {
            this.nxh(true)
        } else {
            this.nxh(false)
        }
        return true
    };
    this.vrt = function (e, f, g, j, m, d, n) {
        this.fng = g.width;
        var l = new bzm(this.mnj, this.qlm, this.fng, this.fng);
        var k = new epl();
        k.cjm(l, this.context2D);
        k.parent = this;
        k.mik = j;
        k.kmm = f;
        k.lrg(d, n);
        k.tqi(this.parent.hhw.wij.dtm);
        k.idh(this.parent.style.wij.veo.ocr);
        k.kdm(g);
        if (m != null) {
            k.npz = m.npr;
            k.vrv = m.pdi;
            k.pov = m.value
        }
        this.wvx.udd(e, k, ["buttons", "setting"]);
        this.mnj += this.fng + this.kgl;
        this.hbs = this.mnj
    };
    this.rtu = function (l, k, j, g, e) {
        this.fng = j.width;
        var f = new bzm(this.mnj, this.qlm, this.fng, this.fng);
        var d = new epl();
        d.cjm(f, this.context2D);
        d.parent = this;
        d.mik = g;
        d.kmm = k;
        d.tqi(this.parent.hhw.wij.dtm);
        d.idh(this.parent.style.wij.veo.ocr);
        d.kdm(j);
        if (e != null) {
            d.npz = e.npr;
            d.vrv = e.pdi;
            d.pov = e.value
        }
        this.wvx.udd(l, d, ["buttons", "system"]);
        this.mnj += this.fng + this.kgl;
        this.hbs = this.mnj
    };
    this.pmq = function () {
        var f = this.wvx.mpl();
        this.hbs += 2 * this.dtw;
        this.evk = Math.round((this.width - this.hbs) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.evk + this.dtw
        }
    };
    this.qaa = function () {
        return this.hbs
    };
    this.wfx = function (d) {
        this.bgg = d
    };
    this.ovk = function () {
        return this.bgg
    };
    this.lkn = function (g) {
        var f = this.wvx.mpl();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].wfx(g)
        }
        this.parent.zwp()
    };
    this.byf = function (g) {
        var f = this.wvx.wrb("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].wfx(g)
        }
        this.parent.zwp()
    };
    this.inp = function (g) {
        var f = this.wvx.wrb("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].wfx(g)
        }
        this.parent.zwp()
    };
    this.olx = function () {
        if (this.fww()) {
            return
        }
        if (this.rmu) {
            if (this.uco === a) {
                this.vvo = this.olx
            } else {
                this.vvo = null
            }
        } else {
            this.vvo = null;
            this.goz();
            this.bsg()
        }
    };
    this.zar = function (d) {
        if (this.parent.jqa) {
            this.parent.jqa()
        }
        this.stop();
        this.rmu = false;
        this.vvo = null;
        this.dft(true, d);
        if (this.qdd >= 0) {
            clearTimeout(this.qdd);
            this.qdd = -1
        }
        this.qdd = setTimeout(this.jna, this.rvs)
    };
    this.jna = function () {
        if (b.fww()) {
            b.parent.eha.xuk("panel_out");
            b.parent.eha.mtk("panel_out");
            b.xwd()
        }
    };
    this.xwd = function () {
        if (!this.fww()) {
            return
        }
        if (this.rmu) {
            if (this.uco === c) {
                this.vvo = this.xwd
            } else {
                this.vvo = null
            }
        } else {
            this.vvo = null;
            this.ldl();
            this.bsg();
            if (this.qdd >= 0) {
                clearTimeout(this.qdd);
                this.qdd = -1
            }
        }
    };
    this.boq = function (d) {
        if (this.parent.scj) {
            this.parent.scj()
        }
        this.stop();
        this.rmu = false;
        this.vvo = null;
        this.dft(false, d);
        if (typeof this.uth === "function") {
            this.uth();
            this.uth = null
        }
    };
    this.goz = function () {
        this.dft(true);
        this.rmu = true;
        this.bgg = false;
        this.uco = c;
        this.lrs = Math.floor(this.height / this.kar);
        this.kwo = 1;
        this.yue = Math.floor(this.height / this.kar)
    };
    this.ldl = function () {
        if (this.parent.scj) {
            this.parent.scj()
        }
        this.rmu = true;
        this.bgg = false;
        this.uco = a;
        this.lrs = -Math.floor(this.height / this.kar);
        this.kwo = 1;
        this.yue = this.height
    };
    this.bsg = function () {
        this.rwy = setInterval(this.mly, this.ffe)
    };
    this.ove = function () {
        if (b.uco == c) {
            if (b.parent.jqa) {
                b.parent.jqa()
            }
            if (b.qdd >= 0) {
                clearTimeout(b.qdd);
                b.qdd = -1
            }
            b.qdd = setTimeout(b.jna, b.rvs)
        }
        clearInterval(b.rwy);
        if (b.vvo) {
            b.vvo()
        }
    };
    this.stop = function () {
        clearTimeout(this.qdd);
        clearInterval(this.rwy);
        this.qdd = -1
    };
    this.mly = function () {
        if (!b.sgd()) {
            b.ove()
        }
    };
    this.sgd = function () {
        if (b.kwo < b.kar) {
            b.parent.zwp(b.x, b.y, b.width, b.height);
            b.yue += b.lrs;
            b.kwo++;
            return true
        } else {
            b.rmu = false;
            b.bgg = true;
            if (b.uco == a) {
                b.dft(false);
                if (typeof b.uth === "function") {
                    b.uth();
                    b.uth = null
                }
            }
            b.parent.zwp(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.zwp = function (n, m, o, g) {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.wvx.mpl(),
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
        this.uew(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].zwp()
        }
        if (this.uub && this.yov != "") {
            k = this.uub.x - this.kgl - this.fng;
            d = 3 * this.fng + 2 * this.kgl;
            if (k + d >= this.evk + this.hbs) {
                k = this.evk + this.hbs - d;
                kdn.lgy.xhg(p, this.yov, this.luk, k, this.uub.y + this.uub.height, d, this.msb, this.rcu, this.msb, this.uid, this.kgl)
            } else {
                kdn.lgy.jnl(p, this.yov, this.luk, k, this.uub.y + this.uub.height, d, this.msb, this.rcu, this.msb, this.uid)
            }
        }
        p.restore();
        if (this.rmu) {
            if (this.vtx && this.saw && this.yue > 0) {
                this.vtx.drawImage(this.saw, 0, this.height - this.yue, this.width, this.yue, this.x, this.y, this.width, this.yue)
            }
        } else {
            if (e) {
                this.parent.zwp(this.x + n, this.y + m, o, g)
            } else {
                if (this.vtx && this.saw) {
                    this.vtx.drawImage(this.saw, this.x, this.y)
                }
            }
        }
    };
    this.uew = function (d) {
        var f = this.asf,
            e = f / 2;
        d.save();
        d.strokeStyle = this.mbp;
        d.fillStyle = this.eaa;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.aqh, this.aqh + e, this.aqh, this.aqh);
        d.arcTo(this.evk, this.aqh, this.evk, this.height - this.wza - e, this.zja);
        d.arcTo(this.evk, this.height - e, this.evk + this.wza, this.height - e, this.wza);
        d.lineTo(this.evk + this.hbs - this.wza, this.height - e);
        d.arcTo(this.evk + this.hbs, this.height - e, this.evk + this.hbs, this.height - this.wza - e, this.wza);
        d.arcTo(this.evk + this.hbs, this.aqh, this.width - this.aqh - e, this.aqh, this.zja);
        d.arcTo(this.width - e, this.aqh, this.width - e, 0, this.aqh);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.eoa;
        d.fill();
        d.restore()
    };
    this.nxh = function (d) {
        if (this.uub && this.uub != this.xpf) {
            if (d && this.uub) {
                this.yov = this.parent.owg(this.uub.kmm);
                if (!kdn.lgy.zvx) {
                    this.yov = (this.uub.pov) ? this.yov + " [" + this.uub.pov + "]" : this.yov
                }
            } else {
                this.yov = ""
            }
            this.parent.zwp(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.uub && this.yov != this.parent.owg(this.uub.kmm))) {
                this.yov = this.parent.owg(this.uub.kmm);
                if (!kdn.lgy.zvx) {
                    this.yov = (this.uub.pov) ? this.yov + " [" + this.uub.pov + "]" : this.yov
                }
            }
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.uth = null
}
nbc.prototype = new yos;

function pot() {
    var a = this;
    this.bce = "LOADING ... ";
    this.huv = "ERROR";
    this.zal = null;
    this.wwp = null;
    this.qlt = false;
    this.koc = false;
    this.rdn = true;
    this.juc = null;
    this.hkl = null;
    this.rwy = 0;
    this.szw = 0;
    this.jzj = false;
    this.pub = false;
    this.ycw = 0;
    this.swf = 60;
    this.tai = 0;
    this.wld = null;
    this.yov = null;
    this.itb = null;
    this.slp = true;
    this.rcu = null;
    this.uid = "bold";
    this.bds = "black";
    this.cll = "rgb(0,100,10)";
    this.koh = "rgb(80,255,100)";
    this.drt = "rgb(120,120,120)";
    this.ztm = "red";
    this.hmm = "white";
    this.msb = 14;
    this.vbk = 18;
    this.jzf;
    this.qiz;
    this.ruk;
    this.dlz;
    this.dtw = 5;
    this.kgl = 12;
    this.qlm = 5;
    this.cgp = 2;
    this.gnh = 7;
    this.pei = new bzm();
    this.nzs = 0;
    this.dqd = 0;
    this.goa = 0;
    this.xex = new bzm();
    this.tqf = new bzm();
    this.hyc = new bzm();
    this.jon = new bzm();
    this.cjm = function (b, d, c) {
        pot.prototype.cjm.call(this, b, d, c);
        if (kdn.qwt.value45 == kdn.hbo.ygc) {
            this.juc = document.createElement("canvas");
            this.hkl = this.juc.getContext("2d")
        }
    };
    this.tqi = function (b) {
        try {
            this.msb = b.fontSize;
            this.vbk = b.ejs;
            this.dtw = b.jvl;
            this.kgl = b.dmm;
            this.qlm = b.qic;
            this.cgp = b.hzi;
            this.gnh = b.vgt;
            this.jzf = b.fwc;
            this.qiz = b.avj;
            this.ruk = b.ftl;
            this.dlz = b.nyi;
            this.pei = b.fqr.sde;
            this.nzs = b.fqr.x;
            this.dqd = b.fqr.aaz;
            this.goa = b.fqr.tow;
            this.xex = b.cqr;
            this.tqf = b.eml.cqr;
            this.hyc = b.eml.avj;
            this.jon = b.eml.hml;
            if (kdn.qwt.value45 == kdn.hbo.ygc) {
                this.juc.width = Math.round(this.pei.width);
                this.juc.height = Math.round(this.pei.height)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.idh = function (b) {
        try {
            this.rcu = b.font;
            this.uid = b.zde;
            this.bds = b.backgroundColor;
            this.cll = b.kph;
            this.koh = b.wuj;
            this.drt = b.vqn;
            this.ztm = b.gkn;
            this.hmm = b.sur;
            this.wwp = b.wwp
        } catch (c) {
            console.error(c)
        }
    };
    this.zwp = function (b) {
        if (b && b >= 0) {
            this.szw = b
        }
        if (!this.fww()) {
            return
        }
        if (kdn.qwt.value45 == kdn.hbo.kvw) {
            this.zeh()
        } else {
            if (kdn.qwt.value45 == kdn.hbo.bqz || kdn.qwt.value45 == kdn.hbo.ygc) {
                if (!this.zal && this.yov && this.itb) {
                    this.dux()
                } else {
                    if (kdn.qwt.value45 == kdn.hbo.bqz) {
                        this.nvo()
                    } else {
                        if (kdn.qwt.value45 == kdn.hbo.ygc) {
                            if (b === 100) {
                                this.ann()
                            }
                            this.pjp()
                        }
                    }
                }
            }
        }
    };
    this.zeh = function () {
        if (this.qlt) {
            var c = this.context2D,
                b = this.ruk.width / 100;
            c.save();
            if (this.koc === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.eha.zgs("splash"), 0, 0, this.width, this.height);
            if (this.wwp) {
                kdn.lgy.eys(c, this.dtw, this.dtw, this.width - 2 * this.dtw, this.height - 2 * this.dtw, this.wwp, 0.3)
            }
            if (this.zal != null && this.zal != "") {
                this.nlv(this.dlz, true)
            } else {
                if (this.yov != null && this.yov != "") {
                    this.xxn(this.dlz, true)
                } else {
                    if (this.rdn === true) {
                        if (this.koc === false) {
                            kdn.lgy.eys(c, this.jzf.x, this.jzf.y, this.jzf.width, this.jzf.height, this.bds, 0.5)
                        }
                        var e = this.bce + " " + this.szw + "%";
                        var d = c.createLinearGradient(this.ruk.x, this.ruk.y, this.ruk.x + this.ruk.width, this.ruk.y);
                        d.addColorStop(0, this.cll);
                        d.addColorStop(1, this.koh);
                        kdn.lgy.jnl(c, e, this.hmm, this.qiz.x, this.qiz.y, this.qiz.width, this.qiz.height, this.rcu, this.msb, this.uid);
                        kdn.lgy.elk(c, this.ruk.x - this.cgp, this.ruk.y, this.ruk.width + 2 * this.cgp, this.ruk.height, this.cgp, this.bds, 0.8, this.drt, this.cgp, 0.8);
                        kdn.lgy.eys(c, this.ruk.x, this.ruk.y + this.cgp / 2, b * this.szw, this.ruk.height - this.cgp, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.nvo = function () {
        if (this.qlt) {
            var c = this.context2D,
                b = this.ruk.width / 100;
            c.save();
            if (this.koc === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            if (this.jzj === true && this.wld) {
                c.beginPath();
                c.rect(this.wld.x, this.wld.y, this.wld.width, this.wld.height);
                c.closePath();
                c.clip()
            }
            c.drawImage(this.parent.eha.zgs("splash"), this.xex.x, this.xex.y, this.xex.width, this.xex.height);
            if (this.zal != null && this.zal != "") {
                this.nlv(this.dlz, false)
            } else {
                if (this.yov != null && this.yov != "") {
                    this.xxn(this.dlz, false)
                } else {
                    if (this.rdn === true) {
                        var e = this.bce + " " + this.szw + "%";
                        var d = c.createLinearGradient(this.ruk.x, this.ruk.y, this.ruk.x + this.ruk.width, this.ruk.y);
                        d.addColorStop(0, this.cll);
                        d.addColorStop(1, this.koh);
                        var f = c.createLinearGradient(this.ruk.x + (b * this.szw) - this.gnh, this.ruk.y, this.ruk.x + (b * this.szw), this.ruk.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        kdn.lgy.jnl(c, e, this.hmm, this.qiz.x, this.qiz.y, this.qiz.width, this.qiz.height, this.rcu, this.msb, this.uid);
                        kdn.lgy.eys(c, this.ruk.x, this.ruk.y, this.ruk.width, this.ruk.height, "rgb(12,15,25)", 1);
                        if (this.szw > 0 && this.szw < 100) {
                            kdn.lgy.elk(c, this.ruk.x + (b * this.szw) - this.gnh + this.cgp / 2, this.ruk.y - this.cgp, this.gnh, this.ruk.height + 2 * this.cgp, this.cgp, f, 0.5)
                        }
                        kdn.lgy.eys(c, this.ruk.x, this.ruk.y, b * this.szw, this.ruk.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.pjp = function () {
        if (this.qlt) {
            var c = this.context2D,
                b = this.ruk.width / 100;
            c.save();
            if (this.koc === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.eha.zgs("splash"), this.xex.x, this.xex.y, this.xex.width, this.xex.height);
            if (this.pub) {
                c.drawImage(this.juc, this.pei.x, this.pei.y)
            }
            if (this.zal != null && this.zal != "") {
                this.nlv(this.dlz, false)
            } else {
                if (this.yov != null && this.yov != "") {
                    this.xxn(this.dlz, false)
                } else {
                    if (this.rdn === true) {
                        var e = this.bce + " " + this.szw + "%";
                        var d = c.createLinearGradient(this.ruk.x, this.ruk.y, this.ruk.x + this.ruk.width, this.ruk.y);
                        d.addColorStop(0, this.cll);
                        d.addColorStop(1, this.koh);
                        var f = c.createLinearGradient(this.ruk.x + (b * this.szw) - this.gnh, this.ruk.y, this.ruk.x + (b * this.szw), this.ruk.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        kdn.lgy.jnl(c, e, this.hmm, this.qiz.x, this.qiz.y, this.qiz.width, this.qiz.height, this.rcu, this.msb, this.uid);
                        kdn.lgy.eys(c, this.ruk.x, this.ruk.y, this.ruk.width, this.ruk.height, "rgb(12,15,25)", 1);
                        if (this.szw > 0 && this.szw < 100) {
                            kdn.lgy.elk(c, this.ruk.x + (b * this.szw) - this.gnh + this.cgp / 2, this.ruk.y - this.cgp, this.gnh, this.ruk.height + 2 * this.cgp, this.cgp, f, 0.5)
                        }
                        kdn.lgy.eys(c, this.ruk.x, this.ruk.y, b * this.szw, this.ruk.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.dux = function () {
        if (this.qlt) {
            var b = this.context2D;
            b.save();
            b.clearRect(0, 0, this.width, this.height);
            if (this.itb) {
                b.drawImage(this.itb, this.tqf.x, this.tqf.y, this.tqf.width, this.tqf.height)
            }
            if (this.yov != null && this.yov != "") {
                kdn.lgy.hpn(b, this.yov, this.hmm, this.hyc.x, this.hyc.y, this.hyc.width, this.hyc.height, this.rcu, this.msb, this.uid, "center", true)
            }
            if (this.slp === true) {
                kdn.lgy.hpn(b, "[ " + this.parent.language.cus + " ]", this.hmm, this.jon.x, this.jon.y, this.jon.width, this.jon.height, this.rcu, 2 * this.msb, this.uid, "center", true)
            }
            b.restore()
        }
    };
    this.nlv = function (c, m) {
        var l = this.context2D,
            o = [],
            d = this.msb,
            k = this.zal,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.vbk * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.uid + " " + d + "px " + this.rcu;
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
                    if (u >= c.width - 2 * this.kgl) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.qlm)) {
            w = (c.height - j - this.qlm) / b;
            d = Math.round(d * w) - 1;
            l.font = this.uid + " " + d + "px " + this.rcu;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.uid + " " + d + "px " + this.rcu;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.qlm));
            c.height = j + b + this.qlm;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            kdn.lgy.eys(l, c.x, c.y, c.width, c.height, this.bds, 0.7)
        }
        if (this.huv != null) {
            l.font = this.uid + " " + this.vbk + "px " + this.rcu;
            l.fillStyle = this.ztm;
            l.textBaseline = "bottom";
            l.fillText(this.huv, c.x + c.width / 2, c.y + this.vbk + this.qlm)
        }
        l.font = this.uid + " " + d + "px " + this.rcu;
        l.fillStyle = this.hmm;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.kgl), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.xxn = function (c, d) {
        var b = this.context2D;
        b.save();
        if (d && d === true) {
            kdn.lgy.eys(b, c.x, c.y, c.width, c.height, this.bds, 0.7)
        }
        if (this.slp === true) {
            kdn.lgy.hpn(b, this.yov, this.hmm, c.x, c.y, c.width, c.height, this.rcu, this.msb, this.uid, "center", true)
        }
        b.restore()
    };
    this.start = function () {
        this.jzj = true;
        this.ycw = new Date().getTime();
        this.wld = new bzm(this.pei.x, this.pei.y, this.pei.width, this.pei.height);
        this.tai = 0;
        this.mly()
    };
    this.stop = function () {
        this.jzj = false;
        this.wld = null;
        clearTimeout(this.rwy)
    };
    this.mly = function () {
        var b = 0,
            c = new Date().getTime();
        if (a.tai < 6) {
            a.wld.x -= a.nzs;
            a.wld.width += 2 * a.nzs
        } else {
            if (a.tai < 12) {
                a.wld.y -= a.goa;
                a.wld.height += a.dqd
            } else {
                a.stop();
                if (typeof a.rjg === "function") {
                    a.rjg()
                }
            }
        }
        a.zwp();
        a.tai++;
        if (a.tai <= 12) {
            b = (a.tai * a.swf - (c - a.ycw));
            a.rwy = setTimeout(a.mly, b)
        }
    };
    this.yrn = function () {
        this.pub = true;
        this.ycw = new Date().getTime();
        this.tai = 0;
        this.swf = 89;
        this.jae()
    };
    this.ann = function () {
        this.pub = false;
        clearTimeout(this.rwy)
    };
    this.jae = function () {
        var d = 0,
            e = new Date().getTime(),
            b = a.hkl,
            c = a.parent.eha.zgs("splashanim");
        if (a.pub === true) {
            a.tai++;
            b.save();
            b.clearRect(0, 0, c.width, c.height);
            b.translate(c.width / 2, c.height / 2);
            b.rotate(Math.PI / 6 * (a.tai % 12));
            b.translate(-c.width / 2, -c.height / 2);
            b.drawImage(c, 0, 0);
            b.restore();
            a.zwp();
            d = (a.tai * a.swf - (e - a.ycw));
            a.rwy = setTimeout(a.jae, d)
        }
    };
    this.sip = function () {
        return (this.jzj || this.pub)
    };
    this.xsj = function (c, b) {
        this.yov = c;
        this.itb = b;
        this.jzj = true;
        this.slp = true;
        this.rwy = setInterval(this.gvh, 800);
        this.zwp()
    };
    this.gvh = function () {
        a.slp = !a.slp;
        a.zwp()
    };
    this.rjg = null
}
pot.prototype = new yos;

function lbm() {
    var a = this;
    this.vak = null;
    this.hdz = null;
    this.aaw = null;
    this.tcs = null;
    this.tqa = null;
    this.qmi = false;
    this.rwy = -1;
    this.cjm = function () {
        this.vak = document.getElementById("notificationDiv");
        this.hdz = document.getElementById("notificationTitle");
        this.aaw = document.getElementById("notificationText");
        this.tcs = document.getElementById("notificationIcon");
        this.tqa = document.getElementById("notificationCounter");
        if (this.vak) {
            this.vak.onclick = kdn.uay.lcn;
            this.vak.ontouchend = kdn.uay.lcn
        }
    };
    this.idh = function (b) {};
    this.tqi = function (b) {
        try {
            if (this.vak) {
                this.vru(this.vak, b.sde);
                if (this.qmi) {
                    if (kdn.uay.evj === kdn.hhw.ssg) {
                        this.vak.className = "slideRight"
                    } else {
                        this.vak.className = "slideLeft"
                    }
                }
            }
            if (this.hdz) {
                this.hdz.style.fontSize = b.hnp + "px";
                this.hdz.style.left = b.hvq.x + "px";
                this.hdz.style.top = b.hvq.y + "px";
                this.hdz.style.width = b.hvq.width + "px"
            }
            if (this.aaw) {
                this.aaw.style.fontSize = b.zcw + "px";
                this.aaw.style.left = b.avj.x + "px";
                this.aaw.style.top = b.avj.y + "px";
                this.aaw.style.width = b.avj.width + "px"
            }
            if (this.tcs) {
                this.vru(this.tcs, b.acz)
            }
            if (this.tqa) {
                this.tqa.style.fontSize = b.twt + "px";
                this.vru(this.tqa, b.wyh)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.vru = function (c, b) {
        if (c) {
            c.style.left = b.x + "px";
            c.style.top = b.y + "px";
            c.style.width = b.width + "px";
            c.style.height = b.height + "px"
        }
    };
    this.olx = function (d, c, b) {
        if (d && this.hdz) {
            this.hdz.innerHTML = d
        }
        if (c && this.aaw) {
            this.aaw.innerHTML = c.replace(/[\r]?\n/g, "")
        }
        if (b && this.tqa) {
            this.tqa.innerHTML = b
        }
        if (this.vak) {
            if (this.rwy >= 0) {
                clearTimeout(this.rwy);
                this.rwy = -1;
                this.vak.className = null
            }
            this.qmi = true;
            kdn.uay.gkg();
            if (kdn.uay.evj === kdn.hhw.ssg) {
                this.vak.className = "slideInRightAnim"
            } else {
                this.vak.className = "slideInLeftAnim"
            }
        }
    };
    this.xwd = function () {
        if (a.vak && a.qmi) {
            if (kdn.uay.evj === kdn.hhw.ssg) {
                a.vak.className = "slideOutRightAnim"
            } else {
                a.vak.className = "slideOutLeftAnim"
            }
            a.rwy = setTimeout(a.wvd, 800)
        }
    };
    this.fww = function () {
        if (this.qmi) {
            return true
        }
        return false
    };
    this.wvd = function () {
        a.qmi = false;
        a.rwy = -1;
        kdn.uay.gkg()
    }
}

function yeb() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.gbx = null;
    this.vak = null;
    this.hdz = null;
    this.aaw = null;
    this.elc = null;
    this.bgx = [];
    this.cer = 0;
    this.lgq = [];
    this.sal = [];
    this.uln = 0;
    this.ylt = false;
    this.qmi = false;
    this.cjm = function () {
        this.gbx = document.getElementById("messageOverlay");
        this.vak = document.getElementById("messagePanel");
        this.hdz = document.getElementById("messageTitle");
        this.aaw = document.getElementById("messageText");
        this.elc = document.getElementById("btne");
        if (this.elc) {
            this.elc.innerHTML = "\u00D7";
            this.elc.onclick = this.xwd;
            this.elc.ontouchend = this.xwd
        }
        for (var f = 0; f < 4; f++) {
            this.bgx[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.idh = function (f) {
        try {
            this.lgq = f.grv
        } catch (g) {
            console.error(g)
        }
    };
    this.tqi = function (j) {
        try {
            if (this.vak) {
                kdn.lgy.vru(this.vak, j.sde)
            }
            if (this.hdz) {
                this.hdz.style.fontSize = j.hnp + "px";
                kdn.lgy.vru(this.hdz, j.hvq)
            }
            if (this.aaw) {
                this.aaw.style.fontSize = j.zcw + "px";
                kdn.lgy.vru(this.aaw, j.wyk)
            }
            if (this.elc) {
                kdn.lgy.vru(this.elc, j.pcv)
            }
            for (var g = 0, f = this.bgx.length; g < f; g++) {
                this.bgx[g].style.fontSize = j.dtm.fontSize + "px";
                this.bgx[g].style.top = j.sqn.y + "px";
                this.bgx[g].style.height = j.sqn.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.olx = function (j) {
        this.sal.length = 0;
        this.uln = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.sal[g] = j[g]
        }
        this.zyf(this.sal[this.uln])
    };
    this.xwd = function () {
        if (b.vak) {
            b.qmi = false;
            b.vak.style.display = "none";
            b.gbx.style.display = "none";
            kdn.uay.gkg();
            kdn.uay.pdk = false
        }
    };
    this.zyf = function (l) {
        var n = this.sal.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.sek === kdn.lzh.weg || l.sek === kdn.lzh.ruq) {
            this.cer = d;
            this.ylt = (l.DisplayType == kdn.lbv.pqw.ipj) ? true : false
        } else {
            if (l.sek === kdn.lzh.svv || l.sek === kdn.lzh.jgs || l.sek === kdn.lzh.ouv || l.sek === kdn.lzh.roulette.tdw || l.sek === kdn.lzh.roulette.umz) {
                this.cer = a;
                this.ylt = false
            } else {
                if (l.sek === kdn.lzh.lno || l.sek === kdn.lzh.gdk) {
                    this.cer = c;
                    this.ylt = false
                } else {
                    if (l.sek === kdn.lzh.kef || l.sek === kdn.lzh.nnz || l.sek === kdn.lzh.pdd) {
                        this.cer = e;
                        this.ylt = false
                    }
                }
            }
        }
        if (l.Title && this.hdz) {
            this.hdz.style.color = this.lgq[this.cer];
            this.hdz.innerHTML = l.Title
        }
        if (l.Text && this.aaw) {
            this.aaw.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.bgx[0].innerHTML = "\u2039";
            this.bgx[0].onclick = this.xxe;
            this.bgx[0].ontouchend = this.xxe;
            this.bgx[0].style.display = "inline-block";
            this.bgx[this.bgx.length - 1].innerHTML = "\u203A";
            this.bgx[this.bgx.length - 1].onclick = this.yex;
            this.bgx[this.bgx.length - 1].ontouchend = this.yex;
            this.bgx[this.bgx.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.bgx.length - 1 : this.bgx.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.bgx[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.bgx[g].innerHTML = kdn.uay.language.aem
                    } else {
                        if (j == "continue") {
                            this.bgx[g].innerHTML = kdn.uay.language.cus.replace(/ /g, "")
                        } else {
                            this.bgx[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.bgx[g].onclick = kdn.uay.qar;
                    this.bgx[g].ontouchend = kdn.uay.qar
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.sek === kdn.lzh.weg) {
                            this.bgx[g].onclick = this.dee.bind(this, l.Buttons[k].Link);
                            this.bgx[g].ontouchend = this.dee.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.sek === kdn.lzh.ruq || l.sek === kdn.lzh.kef || l.sek === kdn.lzh.nnz) {
                                this.bgx[g].onclick = this.iao;
                                this.bgx[g].ontouchend = this.iao
                            } else {
                                if (l.sek === kdn.lzh.lno || l.sek === kdn.lzh.gdk || l.sek === kdn.lzh.pdd) {
                                    this.bgx[g].onclick = this.itn;
                                    this.bgx[g].ontouchend = this.itn
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.bgx[g].onclick = kdn.uay.ioo;
                            this.bgx[g].ontouchend = kdn.uay.ioo
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === kdn.lbv.wys.vgs) {
                                    this.bgx[g].onclick = this.vpj.bind(this, l.Buttons[k].Link);
                                    this.bgx[g].ontouchend = this.vpj.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === kdn.lbv.wys.qdx) {
                                        this.bgx[g].onclick = this.dee.bind(this, l.Buttons[k].Link);
                                        this.bgx[g].ontouchend = this.dee.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === kdn.lbv.wys.god) {
                                            this.bgx[g].onclick = this.dam.bind(this, l.Buttons[k].Link);
                                            this.bgx[g].ontouchend = this.dam.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.bgx[g].style.display = "inline-block"
            } else {
                this.bgx[g].style.display = "none"
            }
        }
        this.elc.style.display = (this.ylt) ? "inline-block" : "none";
        if (this.vak) {
            this.qmi = true;
            this.vak.style.display = "block";
            this.gbx.style.display = "block";
            kdn.uay.gkg();
            kdn.uay.pdk = true
        }
    };
    this.fww = function () {
        if (this.qmi) {
            return true
        }
        return false
    };
    this.iao = function () {
        b.xwd();
        kdn.uay.kfs(kdn.uay.state)
    };
    this.dee = function (f) {
        var g = null;
        if (f) {
            g = kdn.lgy.scq("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function () {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        kdn.uay.frj({
            type: "link",
            sender: kdn.uay.yfk,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        b.xwd();
        kdn.uay.led()
    };
    this.dam = function (j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = kdn.lgy.scq("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.bgx.length; g < f; g++) {
                b.bgx[g].disabled = true
            }
            k.onload = function () {
                b.xwd();
                for (var m = 0, l = b.bgx.length; m < l; m++) {
                    b.bgx[m].disabled = false
                }
                kdn.uay.led()
            };
            k.onerror = function () {
                console.error("Error on request!");
                for (var m = 0, l = b.bgx.length; m < l; m++) {
                    b.bgx[m].disabled = false
                }
            }
        }
        kdn.uay.frj({
            type: "link",
            sender: kdn.uay.yfk,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        k.send()
    };
    this.itn = function () {
        window.location.reload()
    };
    this.vpj = function (f) {
        kdn.uay.frj({
            type: "link",
            sender: kdn.uay.yfk,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        window.location.href = f
    };
    this.xxe = function () {
        b.uln = (b.uln > 0) ? b.uln - 1 : b.sal.length - 1;
        b.zyf(b.sal[b.uln])
    };
    this.yex = function () {
        b.uln = (b.uln < b.sal.length - 1) ? b.uln + 1 : 0;
        b.zyf(b.sal[b.uln])
    }
}
kdn.qwt = new Settings();
kdn.lgy = new jvq();

function acg() {
    this.dlr = "";
    this.hif = "";
    this.gst = null;
    this.canvas = null;
    this.context2D = null;
    this.gbr = null;
    this.pqc = null;
    this.qxj = null;
    this.fkb = null;
    this.awv = null;
    this.ptb = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.hcb = 0;
    this.ums = 0;
    this.pap = false;
    this.width = 0;
    this.height = 0;
    this.jbr = 0;
    this.sjq = 0;
    this.rif = 1;
    this.lwf = 1;
    this.aab = false;
    this.bsb = false;
    this.style = null;
    this.hhw = null;
    this.evj = -1;
    this.pbw = false;
    this.nvh = false;
    this.mjs = false;
    this.bky = false;
    this.pdk = false;
    this.ool = false;
    this.zyg = false;
    this.bqe = "";
    this.arx = "";
    this.zxe = "";
    this.nad = "";
    this.lkw = "";
    this.jkg = "";
    this.iix = "1_1_60";
    try {
        if (kdn.qwt.value19) {
            this.bqe = sessionStorage.sessionValue2;
            this.arx = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.zxe = sessionStorage.sessionValue2
            } else {
                this.bqe = sessionStorage.sessionValue2;
                this.arx = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.zxe = sessionStorage.sessionValue2
                } else {
                    this.zxe = ""
                }
            }
        }
    } catch (b) {}
    this.uwd = null;
    this.qlq = null;
    this.spd = false;
    this.lli = null;
    this.eha = null;
    this.bew = null;
    this.jeu = true;
    this.fit = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.lbr = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.lbr = this.fit.length - 1
                } else {
                    this.lbr = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.lbr = this.fit.length - 1
        }
    } catch (b) {
        this.lbr = 0
    }
    this.uve = 0;
    this.language = new xjf();
    this.krp = 0;
    this.gej = 1;
    this.txa = this.gej;
    this.qzo = [kdn.cwg.nyd, kdn.cwg.umn, kdn.cwg.zgd];
    this.vtv = (kdn.lgy.lpf()) ? 0 : this.qzo.length - 1;
    try {
        if (localStorage.localValue1) {
            this.vtv = Number(localStorage.localValue1);
            if (!kdn.lgy.lpf() && this.qzo[this.vtv] === kdn.cwg.nyd) {
                this.vtv = this.qzo.length - 1
            }
        }
    } catch (b) {}
    this.bzd = false;
    this.yfk = "";
    this.fug = "";
    this.hej = 0;
    this.state = 0;
    this.bgw = false;
    this.grg = 5000;
    this.wzn = 0;
    this.olp = 0;
    this.kvu = 0;
    this.ric = 0;
    this.vks = false;
    this.rxh = false;
    this.qox = false;
    this.dnt = null;
    this.cnw = 0;
    this.knn = 0;
    this.nzl = 0;
    this.zfc = -1;
    this.jlu = -1;
    this.pmt = 0;
    this.npb = null;
    this.gfw = [];
    this.tso = [];
    this.grc = false;
    this.nfh = 0;
    this.wzg = 0;
    this.umv = false;

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
    this.cjm = function (d) {
        this.frj({
            type: "onAppFrameReady",
            sender: this.yfk
        });
        kdn.lgy.tqc();
        kdn.lgy.geh();
        this.rkt();
        if (!this.vks) {
            this.vxh()
        }
        this.dwj(this.gxk(d.hhw));
        this.xba();
        this.llm();
        this.vgo();
        this.rlm();
        this.fiq();
        this.jgf();
        this.iri();
        this.tdd();
        this.rfp();
        this.apb();
        return this
    };
    this.vgo = function () {};
    this.tdd = function () {
        try {
            if (kdn.qwt.value64 && !this.qox) {
                this.lli = new hnr();
                this.lli.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.rkt = function () {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && kdn.qwt.value8) {
                sessionStorage.sessionValue5 = kdn.qwt.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.jkg = sessionStorage.sessionValue8;
                if (kdn.qwt.value72) {
                    var n = kdn.qwt.value72[this.jkg];
                    if (kdn.qwt.value21.e === true && n) {
                        kdn.qwt.value21.s = n.s;
                        kdn.qwt.value21.m = n.m;
                        kdn.qwt.value21.ts = n.ts;
                        kdn.qwt.value21.cs = n.cs
                    }
                    if (kdn.qwt.value76 && kdn.qwt.value76.f === true && n) {
                        kdn.qwt.value76.s = n.s;
                        kdn.qwt.value76.m = n.m;
                        kdn.qwt.value76.ts = n.ts;
                        kdn.qwt.value76.cs = n.cs
                    }
                }
            }
            if (this.apz()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.lkw = sessionStorage.sessionValue7
            }
            var r = a("fullscreen");
            if (r != "") {
                sessionStorage.sessionValue14 = r
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (kdn.lgy.zvx) ? kdn.qwt.value51.m : kdn.qwt.value51.d
            }
            var g = a("sessionTime");
            if (g != "") {
                sessionStorage.sessionValue15 = g
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = kdn.qwt.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var o = a("realityCheckTime");
            if (o != "") {
                sessionStorage.sessionValue17 = o
            }
            if (kdn.qwt.value39 > 0) {
                sessionStorage.sessionValue17 = kdn.qwt.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var f = sessionStorage.sessionValue18.split(";");
                if (f.length == 2) {
                    this.nfh = Number(f[0]);
                    this.wzg = Number(f[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.wzg) {
                    this.wzg = Number(s);
                    this.nfh = new Date().getTime() - (this.wzg * 1000);
                    sessionStorage.sessionValue18 = this.nfh + ";" + this.wzg
                }
            }
            if (kdn.qwt.value86 === true) {
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
            console.error(k.lzh)
        }
    };
    this.iri = function () {
        if (!(kdn.lgy.ctc == kdn.os.usv && kdn.lgy.hqv == kdn.ifs.wtx)) {
            document.ontouchstart = kdn.uay.tzw
        }
        if (kdn.lgy.hqv != kdn.ifs.ypv && kdn.lgy.hqv != kdn.ifs.wtx) {
            document.ontouchmove = kdn.uay.gba;
            document.ontouchend = kdn.uay.evr
        }
        if (!kdn.lgy.yit) {
            document.onmousedown = kdn.uay.tdi;
            document.onmouseup = kdn.uay.xuw;
            document.onmousemove = kdn.uay.cav
        }
        document.onkeydown = kdn.uay.dhm;
        document.onkeyup = kdn.uay.fmo;
        document.oncontextmenu = kdn.uay.yha;
        this.ool = this.dqg();
        if (kdn.lgy.sbe() === false && kdn.lgy.ctc === kdn.os.kjq && kdn.lgy.eho() === true && screen.width <= 414 && this.mib()) {
            this.pmt = setInterval(this.xra, 1000)
        }
    };
    this.tzw = function (d) {
        kdn.uay.ykx();
        kdn.uay.mfj();
        kdn.uay.dmk(d)
    };
    this.evr = function (d) {
        if (kdn.uay.pbw === true) {
            if (kdn.uay.ool) {
                kdn.uay.zeq()
            } else {
                kdn.uay.szd(d)
            }
        } else {
            if (kdn.uay.dqg()) {
                kdn.uay.erv()
            }
        }
    };
    this.gba = function (d) {
        kdn.uay.okw(d)
    };
    this.tdi = function (d) {
        window.focus();
        if (kdn.uay.pbw === true) {
            kdn.uay.ykx();
            kdn.uay.mfj();
            kdn.uay.dmk(d)
        } else {
            if (kdn.uay.dqg()) {
                kdn.uay.erv()
            }
        }
    };
    this.xuw = function (d) {
        kdn.uay.szd(d)
    };
    this.cav = function (d) {};
    this.dhm = function (d) {
        if ((d.keyCode == 122 && (kdn.lgy.ctc == kdn.os.hld || kdn.lgy.ctc == kdn.os.cxc)) || (d.keyCode == 70 && d.ctrlKey && kdn.lgy.ctc == kdn.os.evx)) {
            return
        }
        kdn.uay.ykx();
        kdn.uay.mfj();
        kdn.uay.sxr(d)
    };
    this.fmo = function (d) {
        kdn.uay.qpj(d)
    };
    this.yha = function () {
        return false
    };
    this.dmk = function (d) {};
    this.szd = function (d) {};
    this.sxr = function (d) {};
    this.qpj = function (d) {};
    this.okw = function (d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.frj = function (d) {};
    this.apu = function () {
        var f = kdn.uay.bew.gfj("topb"),
            e = kdn.uay.bew.gfj("settings"),
            d = kdn.uay.bew.gfj("topi"),
            g = kdn.uay.bew.gfj("gameb");
        if (kdn.lgy.hqv == kdn.ifs.ypv || kdn.lgy.hqv == kdn.ifs.uum) {
            kdn.uay.bsb = (window.innerWidth == window.outerWidth)
        } else {
            if (kdn.lgy.hqv == kdn.ifs.ven || kdn.lgy.hqv == kdn.ifs.sha) {
                kdn.uay.bsb = (window.innerHeight >= window.outerHeight)
            } else {
                if (kdn.lgy.hqv == kdn.ifs.kyp) {
                    kdn.uay.bsb = (document.fullscreenElement) ? true : false
                } else {
                    if (kdn.lgy.zvx) {
                        if (kdn.lgy.hqv == kdn.ifs.thn || kdn.lgy.hqv == kdn.ifs.qsv || kdn.lgy.hqv == kdn.ifs.mns) {
                            kdn.uay.bsb = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (kdn.lgy.hqv == kdn.ifs.wtx) {
                                kdn.uay.bsb = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.isc("fullscreen", kdn.uay.bsb)
        }
        if (f) {
            f.wvx.qex("fullscreen", "#isc", [(kdn.uay.bsb) ? 1 : 0])
        }
        if (e) {
            e.wvx.qex("fullscreen", "#isc", [(kdn.uay.bsb) ? 1 : 0])
        }
        if (g) {
            g.wvx.qex("fullscreen", "#isc", [(kdn.uay.bsb) ? 1 : 0])
        }
        kdn.uay.est();
        kdn.uay.qsz();
        kdn.uay.vcn();
        if (kdn.lgy.eho() === true && kdn.lgy.sbe() === false) {
            document.body.style.height = "5000px"
        }
        if (!kdn.lgy.sbe() && kdn.lgy.hqv === kdn.ifs.mns && kdn.uay.ums < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.rat = function () {
        kdn.uay.apu();
        kdn.uay.xra()
    };
    this.xra = function () {
        if (kdn.lgy.eho() === true && kdn.lgy.sbe() === false) {
            if (kdn.uay.mib() === true && kdn.uay.bky === true) {
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
                            kdn.uay.apu();
                            window.ontouchmove = kdn.uay.rat
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = kdn.uay.tzw;
                        document.ontouchmove = kdn.uay.gba;
                        document.ontouchend = kdn.uay.evr;
                        if (window.ontouchmove != null) {
                            kdn.uay.apu();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.ykk = function (g) {
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
                    kdn.lgy.buo(e, j, j)
                }
                f.innerHTML = kdn.uay.language.lcx;
                l.className = "rotateAnim";
                k.style.display = "block";
                kdn.uay.pdk = true
            } else {
                k.style.display = "none";
                l.className = null;
                kdn.uay.pdk = false
            }
        }
    };
    this.pbs = function () {
        var d = kdn.uay.bew.gfj("settings");
        kdn.uay.apu();
        if (d) {
            d.wvx.qex("adjustment", "#isc", [(kdn.uay.evj === kdn.hhw.yjt) ? 0 : 1]);
            d.zwp()
        }
        if (kdn.uay.bzd === true) {
            kdn.uay.pdk = true;
            kdn.uay.lcr(true);
            kdn.uay.ykk(true)
        } else {
            kdn.uay.pdk = false;
            kdn.uay.lcr((kdn.uay.fit[kdn.uay.lbr] === 0));
            kdn.uay.ykk(false)
        }
    };
    this.est = function () {
        this.hcb = window.innerWidth, this.ums = window.innerHeight;
        this.pap = false;
        if (kdn.lgy.sbe() == true && kdn.qwt.value69 === true) {
            if (kdn.lgy.pct() === true) {
                this.pap = true;
                this.hcb = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.ums = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.hcb > this.ums) {
                    this.ums *= 0.98
                }
            } else {
                if (kdn.lgy.eho() === true) {
                    this.pap = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.hcb = 1024;
                            this.ums = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.hcb = 736;
                                this.ums = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.hcb = 667;
                                    this.ums = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.hcb = 768;
                            this.ums = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.hcb = 414;
                                this.ums = 628
                            } else {
                                if (screen.height === 667) {
                                    this.hcb = 375;
                                    this.ums = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.vcn = function () {
        var g = 0,
            k = 0,
            f = 1,
            e = 1,
            j = this.hcb,
            d = this.ums;
        this.aab = (this.bsb || j < this.width || d < this.height || this.hhw.eew);
        g = this.gsy(this.aab);
        f = ((j - k) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.aab) {
            if (this.hhw.znl) {
                if (f > e) {
                    this.rif = e;
                    this.lwf = e
                } else {
                    this.rif = f;
                    this.lwf = f
                }
            } else {
                this.rif = f;
                this.lwf = e
            }
        } else {
            this.rif = 1;
            this.lwf = 1
        }
        kdn.lgy.buo(this.canvas, this.rif, this.lwf);
        if (this.gbr != null) {
            kdn.lgy.buo(this.gbr, this.rif, this.lwf, ((this.hhw.gbr.sde.x) - ((this.hhw.gbr.sde.x + this.hhw.gbr.fkd) / 2 * (1 - this.rif))), ((this.hhw.gbr.sde.y) - ((this.hhw.gbr.sde.y + this.hhw.gbr.paq) / 2 * (1 - this.lwf))))
        }
        if (this.qxj != null) {
            kdn.lgy.buo(this.qxj, this.rif, this.lwf)
        }
        if (this.aab) {
            this.offsetLeft = Math.floor((j - (this.canvas.width * this.rif))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.lwf))) / 2
        } else {
            this.offsetLeft = this.gst.offsetLeft;
            this.offsetTop = this.gst.offsetTop
        }
    };
    this.qsz = function () {
        if (this.xhi() === true) {
            var e = null;
            if (this.qzo[this.vtv] === kdn.cwg.nyd) {
                if (window.orientation === -90) {
                    e = kdn.hhw.ssg
                } else {
                    e = kdn.hhw.yjt
                }
            } else {
                if (this.qzo[this.vtv] === kdn.cwg.umn) {
                    e = kdn.hhw.ssg
                } else {
                    if (this.qzo[this.vtv] === kdn.cwg.zgd) {
                        e = kdn.hhw.yjt
                    }
                }
            }
            this.bzd = (this.ums > this.hcb);
            this.dwj(e);
            this.sax(false);
            if (this.bky === true) {
                this.zwp()
            } else {
                this.bew.qex("loading", "#zwp")
            }
        } else {
            if (kdn.lgy.zvx) {
                var f = (this.hcb > this.ums) ? this.gej : this.krp,
                    d = this.hhw.erm,
                    e = null;
                if (f != this.txa) {
                    this.txa = f;
                    if (this.vks) {
                        e = (this.txa == this.gej) ? kdn.hhw.wfg : kdn.hhw.ktq
                    } else {
                        e = (this.txa == this.gej) ? kdn.qwt.value33 : kdn.qwt.value32
                    }
                    this.dwj(e);
                    this.sax((d != this.hhw.erm) || this.vks);
                    if (this.bky === true) {
                        if (this.vks && this.rxh) {
                            this.znu(this.owg(this.language.bmg))
                        } else {
                            this.zwp()
                        }
                    } else {
                        this.bew.qex("loading", "#zwp")
                    }
                }
            } else {
                if (!this.vks) {
                    e = (this.bsb) ? kdn.qwt.value15 : kdn.qwt.value14;
                    this.dwj(e);
                    this.sax(false);
                    if (this.bky === true) {
                        this.zwp()
                    } else {
                        this.bew.qex("loading", "#zwp")
                    }
                }
            }
        }
    };
    this.xhi = function () {
        return false
    };
    this.mib = function () {
        return false
    };
    this.dwj = function (d) {};
    this.xba = function () {
        this.style = new oxd()
    };
    this.gsy = function (d) {
        var e = 0;
        if (kdn.lgy.pct() && window.innerWidth > window.innerHeight && d) {
            if (this.pbw === true && document.body.style.backgroundColor !== this.style.cgc.backgroundColor) {
                document.body.style.backgroundColor = this.style.cgc.backgroundColor
            }
        }
        return e
    };
    this.ubk = function () {
        if (kdn.lgy.pct() && !kdn.lgy.sbe() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.alz = function () {
        return false
    };
    this.rlm = function () {
        if (kdn.lgy.yit) {
            this.eha = new dir()
        } else {
            this.eha = new cwv()
        }
        this.eha.cjm();
        this.eha.plz(this.kwc())
    };
    this.fiq = function () {
        this.bew = new xlf();
        this.bew.cjm();
        this.bew.hca("jackpots")
    };
    this.kwc = function () {
        var d = new tya();
        d.cjm();
        return d
    };
    this.vxh = function () {
        this.dnt = new hkw()
    };
    this.llm = function () {
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
                    for (var k = 0, g = kdn.qwt.value5.length; k < g; k++) {
                        if (o[l] === kdn.qwt.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(kdn.qwt.value5[0])
                }
                kdn.qwt.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    kdn.qwt.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = kdn.lgy.pyk();
                if (this.kys(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === kdn.language.EN && this.kys(kdn.language.US)) {
                        sessionStorage.sessionValue1 = kdn.language.US
                    } else {
                        if (q === kdn.language.DE && this.kys(kdn.language.AT)) {
                            sessionStorage.sessionValue1 = kdn.language.AT
                        } else {
                            if (q === kdn.language.ES && this.kys(kdn.language.MX)) {
                                sessionStorage.sessionValue1 = kdn.language.MX
                            } else {
                                if (q === kdn.language.ES && this.kys(kdn.language.CO)) {
                                    sessionStorage.sessionValue1 = kdn.language.CO
                                } else {
                                    if (q === kdn.language.ES && this.kys(kdn.language.CL)) {
                                        sessionStorage.sessionValue1 = kdn.language.CL
                                    } else {
                                        if (q === kdn.language.ES && this.kys(kdn.language.VE)) {
                                            sessionStorage.sessionValue1 = kdn.language.VE
                                        } else {
                                            if (q === kdn.language.EN && this.kys(kdn.language.BR)) {
                                                sessionStorage.sessionValue1 = kdn.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = kdn.qwt.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.kys(sessionStorage.sessionValue1)) {
                for (var l = 0, m = kdn.qwt.value5.length; l < m; l++) {
                    if (kdn.qwt.value5[l] == sessionStorage.sessionValue1) {
                        this.uve = l;
                        break
                    }
                }
                this.language = this.zab(sessionStorage.sessionValue1)
            } else {
                this.uve = 0;
                this.language = this.zab(kdn.qwt.value5[this.uve]);
                sessionStorage.sessionValue1 = kdn.qwt.value5[this.uve]
            }
        } catch (n) {
            this.uve = 0;
            this.language = this.zab(kdn.qwt.value5[this.uve]);
            console.error(n.lzh)
        }
    };
    this.rfp = function () {
        var d = (kdn.qwt.value45 == kdn.hbo.kvw) ? this.hhw.hbo.uay : (kdn.qwt.value45 == kdn.hbo.bqz) ? this.hhw.hbo.pzu : this.hhw.hbo.lxn;
        this.gst = document.getElementById("gameArea");
        if (this.pap === false) {
            this.gst.style.marginTop = (-d.sde.height / 2) + "px";
            this.gst.style.marginLeft = (-d.sde.width / 2) + "px"
        } else {
            this.gst.style.left = "0px";
            this.gst.style.top = "0px";
            this.gst.style.marginTop = ((window.innerHeight - d.sde.height) / 2) + "px";
            this.gst.style.marginLeft = ((window.innerWidth - d.sde.width) / 2) + "px"
        }
        this.gst.style.width = (d.sde.width > window.innerWidth) ? window.innerWidth + "px" : d.sde.width + "px";
        this.gst.style.height = (d.sde.height > window.innerHeight) ? window.innerHeight + "px" : d.sde.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.sde.width);
        this.canvas.height = Math.round(d.sde.height);
        this.context2D = this.canvas.getContext("2d");
        this.qxj = document.getElementById("gameOverlay");
        if (this.qxj) {
            this.qxj.style.width = d.sde.width + "px";
            this.qxj.style.height = d.sde.height + "px"
        }
        this.pwp(d)
    };
    this.pwp = function (d) {
        var e = new pot();
        e.cjm(d.sde, this.context2D);
        e.parent = this;
        e.bce = (this.vks) ? this.language.ler : this.language.uru;
        e.huv = this.language.error;
        e.tqi(d);
        e.idh(this.style.hbo);
        this.bew.udd("loading", e)
    };
    this.mjg = function () {
        var d = new pug();
        d.cjm(this.hhw.soi.sde, null, this.context2D);
        d.parent = this;
        d.tqi(this.hhw.soi);
        d.idh(this.style.soi);
        if (sessionStorage.sessionValue15 == "true" && kdn.qwt.value49) {
            d.mcd("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || kdn.qwt.value49) {
                d.mcd("time", "", "--:--")
            }
        }
        if (this.apz()) {
            d.mcd("freeplay", "", this.language.qfy)
        } else {
            d.mcd("id", " ", "")
        }
        this.bew.udd("topi", d)
    };
    this.wfk = function () {
        var d = new nbc();
        d.cjm(this.hhw.wij.sde, null, this.context2D);
        d.parent = this;
        d.tqi(this.hhw.wij);
        d.idh(this.style.wij, false);
        d.dft(false);
        this.bew.udd("topb", d)
    };
    this.tss = function () {};
    this.tbp = function () {
        var d = new fnd();
        d.cjm(this.hhw.sjx.sde, null, this.context2D);
        d.parent = this;
        d.vmb(this.hhw.sjx);
        d.idh(this.style.sjx);
        d.dft(false);
        this.bew.udd("stats", d)
    };
    this.uia = function () {
        this.fkb = new yeb();
        this.fkb.cjm();
        this.fkb.idh(this.style.fkb);
        this.fkb.tqi(this.hhw.fkb)
    };
    this.ujc = function () {
        this.awv = new lbm();
        this.awv.cjm();
        this.awv.idh(this.style.awv);
        this.awv.tqi(this.hhw.awv)
    };
    this.sgj = function () {
        if (this.wgr()) {
            this.ptb.gzp = document.getElementById("jurisdictionDiv");
            this.ptb.ije = document.getElementById("btnsp");
            this.ptb.tft = document.getElementById("btnsl");
            this.ptb.ojv = document.getElementById("btnst");
            if (this.ptb.ije) {
                this.ptb.ije.innerHTML = this.language.mnl;
                this.ptb.ije.onclick = this.xfc;
                this.ptb.ije.ontouchend = this.xfc
            }
            if (this.ptb.tft) {
                this.ptb.tft.innerHTML = this.language.nml;
                this.ptb.tft.onclick = this.izk;
                this.ptb.tft.ontouchend = this.izk
            }
            if (this.ptb.ojv) {
                this.ptb.ojv.innerHTML = this.language.san;
                this.ptb.ojv.onclick = this.fdz;
                this.ptb.ojv.ontouchend = this.fdz
            }
            this.nyu();
            this.gkg()
        }
    };
    this.blo = function (e) {
        var d = new ggj();
        d.cjm(this.hhw.ffp.sde, null, this.context2D);
        d.parent = this;
        d.mly = true;
        if (e) {
            d.ard(e)
        }
        d.vmb(this.hhw.ffp);
        d.pjc(this.language);
        d.idh(this.style.ffp);
        d.tqi(this.hhw.ffp);
        d.dft(false);
        this.bew.udd("autop", d)
    };
    this.cvz = function (d) {
        var e = new ixl();
        e.cjm(this.hhw.ckq.sde, null, this.context2D);
        e.parent = this;
        if (d) {
            e.uwl(d)
        }
        e.dft(false);
        this.bew.udd("settings", e)
    };
    this.sax = function (d) {};
    this.pdt = function () {
        var d = this.bew.gfj("stats");
        if (d) {
            d.yai(this.hhw.sjx.sde);
            d.tqi(this.hhw.sjx)
        }
    };
    this.ubj = function () {
        if (this.fkb) {
            this.fkb.tqi(this.hhw.fkb)
        }
    };
    this.ppy = function () {
        if (this.awv) {
            this.awv.tqi(this.hhw.awv)
        }
    };
    this.nyu = function () {
        var d = null,
            e = 0;
        if (this.ptb) {
            d = this.hhw.fho;
            if (this.ptb.gzp) {
                kdn.lgy.vru(this.ptb.gzp, d.jlw)
            }
            if (this.ptb.ije) {
                this.ptb.ije.style.fontSize = d.dtm.fontSize + "px";
                this.ptb.ije.style.textIndent = d.dtm.textIndent + "px";
                kdn.lgy.vru(this.ptb.ije, d.tvn)
            }
            if (this.ptb.tft) {
                this.ptb.tft.style.fontSize = d.dtm.fontSize + "px";
                this.ptb.tft.style.textIndent = d.dtm.textIndent + "px";
                kdn.lgy.vru(this.ptb.tft, d.lic)
            }
            if (this.ptb.ojv) {
                this.ptb.ojv.style.fontSize = d.dtm.fontSize + "px";
                this.ptb.ojv.style.textIndent = d.dtm.textIndent + "px";
                kdn.lgy.vru(this.ptb.ojv, d.wio)
            }
            if (this.ptb.gzp) {
                e = (d.jlw.width - d.jlw.height) / 2;
                if (this.evj == kdn.hhw.ssg) {
                    this.ptb.gzp.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.ptb.gzp.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.gsk = function () {
        var d = this.bew.gfj("autop");
        if (d) {
            d.yai(this.hhw.ffp.sde);
            d.tqi(this.hhw.ffp)
        }
    };
    this.nfe = function () {
        var d = this.bew.gfj("settings");
        if (d) {
            d.yai(this.hhw.ckq.sde);
            d.tqi(this.hhw.ckq)
        }
    };
    this.sru = function () {
        var d = this.bew.gfj("topi");
        if (d) {
            d.yai(this.hhw.soi.sde);
            d.tqi(this.hhw.soi)
        }
    };
    this.gcs = function () {
        var d = this.bew.gfj("topb");
        if (d) {
            d.yai(this.hhw.wij.sde);
            d.tqi(this.hhw.wij)
        }
    };
    this.fsd = function () {
        var e = this.bew.gfj("loading"),
            d = (kdn.qwt.value45 == kdn.hbo.kvw) ? this.hhw.hbo.uay : (kdn.qwt.value45 == kdn.hbo.bqz) ? this.hhw.hbo.pzu : this.hhw.hbo.lxn;
        if (e) {
            this.canvas.width = 0;
            if (this.pap === false) {
                this.gst.style.marginTop = (-d.sde.height / 2) + "px";
                this.gst.style.marginLeft = (-d.sde.width / 2) + "px"
            } else {
                this.gst.style.left = "0px";
                this.gst.style.top = "0px";
                this.gst.style.marginTop = ((this.ums - d.sde.height) / 2) + "px";
                this.gst.style.marginLeft = ((this.hcb - d.sde.width) / 2) + "px"
            }
            this.gst.style.width = (d.sde.width > this.hcb) ? this.hcb + "px" : d.sde.width + "px";
            this.gst.style.height = (d.sde.height > this.ums) ? this.ums + "px" : d.sde.height + "px";
            this.canvas.width = Math.round(d.sde.width);
            this.canvas.height = Math.round(d.sde.height);
            if (this.qxj) {
                this.qxj.style.width = d.sde.width + "px";
                this.qxj.style.height = d.sde.height + "px"
            }
            e.yai(d.sde);
            e.tqi(d)
        }
    };
    this.jgf = function () {
        if (kdn.lgy.zvx && !kdn.lgy.yit) {
            if (!this.eha.zot && kdn.lgy.hqv != kdn.ifs.gij) {
                this.jeu = false;
                this.lbr = 0
            }
        }
    };
    this.gxk = function (d) {
        if (kdn.lgy.zvx) {
            if (!this.vks) {
                return kdn.hhw.rxl
            } else {
                if (!this.qox) {
                    return kdn.hhw.wfg
                }
            }
        }
        return d
    };
    this.sft = function () {
        var d = this.bew.gfj("loading");
        this.apu();
        if (d) {
            d.qlt = true
        }
        if ((kdn.lgy.hqv === kdn.ifs.thn || kdn.lgy.hqv === kdn.ifs.sha || kdn.lgy.hqv === kdn.ifs.tok) && kdn.lgy.ctc === kdn.os.usv && kdn.lgy.yay === true) {
            if (this.eha.zot === false || kdn.lgy.hlm() === false || kdn.lgy.ryj() === false) {
                kdn.ivj = kdn.aud.edn
            }
        }
        if (kdn.ivj == 0) {
            if (this.jeu === true && kdn.lgy.ubb().length === 0) {
                this.jeu = false
            }
            if (d) {
                if (kdn.qwt.value45 === kdn.hbo.bqz) {
                    d.start()
                } else {
                    if (kdn.qwt.value45 === kdn.hbo.ygc) {
                        d.yrn()
                    }
                }
                d.zwp(0)
            }
            this.dfs();
            if (this.jeu === true) {
                this.bmq()
            }
            if (d && d.sip() && kdn.qwt.value45 === kdn.hbo.bqz) {
                d.rjg = kdn.uay.eha.start
            } else {
                this.eha.start()
            }
        } else {
            if (d) {
                if (kdn.ivj == kdn.aud.goo && kdn.lgy.hqv === kdn.ifs.mns) {
                    d.zal = this.language.tav;
                    d.zwp(0)
                } else {
                    if (kdn.ivj == kdn.lzh.bvs) {
                        d.zal = this.language.ech;
                        d.zwp(0)
                    } else {
                        d.zal = this.language.vew;
                        if (kdn.lgy.ctc === kdn.os.usv || kdn.lgy.ctc === kdn.os.cxc) {
                            if (kdn.ivj != kdn.aud.goo && sessionStorage.sessionValue1 === kdn.language.TR) {
                                d.zal += "|Google Chrome" + this.language.vrx
                            } else {
                                if (kdn.ivj != kdn.aud.goo && (sessionStorage.sessionValue1 === kdn.language.GE || sessionStorage.sessionValue1 === kdn.language.HU)) {
                                    d.zal += "|" + this.language.emw + " Google Chrome" + this.language.lqf
                                } else {
                                    d.zal += "|" + this.language.vrx + " Google Chrome"
                                }
                            }
                        } else {
                            if (kdn.lgy.ctc === kdn.os.hld || kdn.lgy.ctc === kdn.os.cxc) {
                                if (kdn.ivj != kdn.aud.goo && sessionStorage.sessionValue1 === kdn.language.TR) {
                                    d.zal += "|Google Chrome, Mozilla Firefox" + this.language.vrx
                                } else {
                                    if (kdn.ivj != kdn.aud.goo && (sessionStorage.sessionValue1 === kdn.language.GE || sessionStorage.sessionValue1 === kdn.language.HU)) {
                                        d.zal += "|" + this.language.emw + " Google Chrome, Mozilla Firefox" + this.language.lqf
                                    } else {
                                        d.zal += "|" + this.language.vrx + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + kdn.ivj);
                        d.zwp(0)
                    }
                }
            }
        }
    };
    this.dfs = function () {};
    this.bmq = function () {};
    this.apb = function () {
        var e = this.dlr + this.hhw.type + "/",
            d = this.bew.gfj("loading");
        if (kdn.qwt.value45 == kdn.hbo.kvw) {
            e += "load.jpg"
        } else {
            if (kdn.qwt.value45 == kdn.hbo.bqz) {
                e += "load_amatic.png"
            } else {
                if (kdn.qwt.value45 == kdn.hbo.ygc) {
                    this.eha.vpt("splashanim", kdn.qwt.value30 + "/basic/images/" + this.hhw.type + "/loadanim.png");
                    e += "load_amanet.png"
                }
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.koc = true
            }
        }
        this.eha.vpt("splash", e);
        this.eha.glq()
    };
    this.pyu = function () {};
    this.kys = function (e) {
        for (var d = 0; d < kdn.qwt.value5.length; d++) {
            if (kdn.qwt.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.ibt = function () {
        kdn.uay.nvh = true;
        if (!kdn.uay.vks) {
            kdn.uay.vhz();
            if (kdn.uay.hce()) {
                kdn.uay.hoz()
            }
        } else {
            kdn.uay.odo()
        }
        kdn.uay.connect()
    };
    this.vhz = function () {};
    this.odo = function () {};
    this.connect = function () {
        this.uwd.connect(this.yfk, this.bqe, this.arx, this.zxe, this.iix, this.lkw, this.jkg)
    };
    this.cca = function (d) {
        if (typeof d === "undefined") {
            kdn.uay.uwd.cca(0)
        } else {
            kdn.uay.uwd.cca(d)
        }
    };
    this.cph = function (d) {
        this.olp = 0;
        this.kvu = 0;
        this.ric = d;
        clearInterval(this.cnw);
        this.cnw = setInterval(this.lcl, 1000)
    };
    this.lcl = function () {
        var d = kdn.uay.bew.gfj("loading");
        kdn.uay.olp++;
        kdn.uay.kvu = Math.round(kdn.qwt.value47 / 1000) - kdn.uay.olp;
        kdn.uay.kvu = (kdn.uay.kvu > 0) ? kdn.uay.kvu : 0;
        if (!kdn.uay.pbw) {
            if (d) {
                d.zal = "Can not connect to game server!|Tries to connect: " + kdn.uay.ric + " (" + kdn.uay.kvu + " sec)";
                d.zwp(0)
            }
        }
    };
    this.wte = function () {
        return kdn.qwt.value74
    };
    this.zwp = function (d, g, e, f) {};
    this.bja = function () {
        return (this.bky === true && this.pbw === true && this.bzd === false)
    };
    this.znu = function (e) {
        var d = this.bew.gfj("history");
        this.bky = true;
        if (this.pbw) {
            if (this.hhw.veh) {
                kdn.lgy.eys(this.context2D, this.hhw.uay.sde.x - this.hhw.uay.dmp, this.hhw.uay.sde.y - this.hhw.uay.dmp, this.hhw.uay.sde.width + 2 * this.hhw.uay.dmp, this.hhw.uay.sde.height + 2 * this.hhw.uay.dmp, "black", 1)
            }
            kdn.lgy.jnl(this.context2D, e, "white", this.hhw.uay.sde.x, this.hhw.uay.sde.y, this.hhw.uay.sde.width, this.hhw.uay.sde.height, "arial", 28, "bold");
            if (d) {
                d.zwp()
            }
        }
    };
    this.ioo = function () {
        if (kdn.uay.fkb) {
            kdn.uay.fkb.xwd()
        }
        kdn.uay.tod(false);
        kdn.uay.pgn.lkn(false);
        kdn.uay.pgn.wvx.qex("exit", "#wfx", [true]);
        if (kdn.lgy.rgu()) {
            kdn.lgy.nag();
            setTimeout(kdn.uay.apu, 1400)
        }
        if (kdn.qwt.value67 > 0) {
            kdn.uay.cca(kdn.qwt.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                kdn.uay.frj({
                    type: "history",
                    sender: kdn.uay.yfk,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null") {
                    kdn.uay.frj({
                        type: "quit",
                        sender: kdn.uay.yfk,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                     window.parent.postMessage('CloseGame',"*");
                    }
                }
            }
        }
    };
    this.qar = function () {
        clearTimeout(kdn.uay.zfc);
        kdn.uay.tod(false);
        if (kdn.uay.pgn) {
            kdn.uay.pgn.lkn(false)
        }
        if (!kdn.uay.vks) {
            kdn.uay.stop();
            if (kdn.uay.pgn) {
                kdn.uay.pgn.wvx.qex("info", "#wbi", [kdn.uay.language.wkg]);
                kdn.uay.zwp()
            }
            if (kdn.uay.xhi() === true && kdn.lgy.rgu()) {
                kdn.lgy.nag();
                setTimeout(kdn.uay.apu, 800);
                setTimeout(kdn.uay.uwd.uzy.close, 800)
            } else {
                kdn.uay.uwd.uzy.close()
            }
        } else {
            kdn.uay.uwd.close()
        }
    };
    this.ffi = function () {
        kdn.uay.ool = true
    };
    this.zeq = function () {
        if (kdn.lgy.zvx == true) {
            if (kdn.uay.ool == true) {
                kdn.uay.ool = false;
                kdn.lgy.nag();
                setTimeout(kdn.uay.apu, 1400)
            }
        } else {
            kdn.lgy.nag();
            setTimeout(kdn.uay.apu, 1400)
        }
    };
    this.hun = function () {
        var e = (kdn.uay.xhi() === true) ? "smartphone" : "desktop",
            j = "en";
        if (sessionStorage.sessionValue1 == kdn.language.ES || sessionStorage.sessionValue1 == kdn.language.CO || sessionStorage.sessionValue1 == kdn.language.CL || sessionStorage.sessionValue1 == kdn.language.MX || sessionStorage.sessionValue1 == kdn.language.VE) {
            j = "es"
        } else {
            if (sessionStorage.sessionValue1 == kdn.language.RO) {
                j = "ro"
            } else {
                if (sessionStorage.sessionValue1 == kdn.language.PT || sessionStorage.sessionValue1 == kdn.language.BR) {
                    j = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == kdn.language.HR) {
                        j = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == kdn.language.DE) {
                            j = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == kdn.language.SE) {
                                j = "se"
                            }
                        }
                    }
                }
            }
        }
        if (kdn.uay.psr != "") {
            var f = null,
                g = "",
                d = "";
            if (kdn.uay.psr != "") {
                g += "rtp=" + kdn.uay.psr
            }
            if (kdn.uay.qty != "") {
                g += (kdn.uay.psr != "") ? "&" : "";
                g += "maxwin=" + ((kdn.uay.qty == "0") ? "0" : kdn.uay.zre(Number(kdn.uay.qty) * kdn.uay.lae()))
            }
            d = encodeURIComponent(g);
            f = window.open(kdn.qwt.value30 + "/gamerules/" + j + "/" + e + "/" + kdn.uay.yfk.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = kdn.qwt.value30 + "/gamerules/" + j + "/" + e + "/" + kdn.uay.yfk.toLowerCase() + ".html?" + d
            }
        }
    };
    this.apt = function () {
        kdn.uay.spd = false;
        kdn.uay.hgk();
        kdn.uay.dtp();
        kdn.uay.jds()
    };
    this.cmi = function () {
        var d = kdn.uay.bew.gfj("stats");
        if (d) {
            d.iaj(true, true)
        }
        kdn.uay.qlq.close(true)
    };
    this.mrt = function () {
        var d = kdn.uay.bew.gfj("stats");
        kdn.uay.stop();
        if (d && d.fww()) {
            d.iaj(true, true)
        }
        kdn.uay.uwd.uzy.close();
        if (kdn.uay.qlq) {
            kdn.uay.qlq.close(false)
        }
    };
    this.nvr = function () {
        clearTimeout(kdn.uay.zfc);
        kdn.uay.pgn.lkn(false);
        kdn.uay.stop();
        kdn.uay.uwd.uzy.gcf()
    };
    this.dwe = function () {
        if (kdn.uay.rxh) {
            return
        }
        var d = kdn.uay.bew.gfj("history");
        if (d) {
            d.lkn(false)
        }
        kdn.uay.stop();
        kdn.uay.uwd.wqe(kdn.uay.hej)
    };
    this.tch = function () {
        if (kdn.uay.rxh) {
            return
        }
        var d = kdn.uay.bew.gfj("history");
        if (d) {
            d.lkn(false)
        }
        kdn.uay.stop();
        kdn.uay.uwd.qwc(kdn.uay.hej)
    };
    this.ucp = function () {
        var d = kdn.uay.bew.gfj("history");
        if (d) {
            d.lkn(false)
        }
        kdn.uay.stop();
        clearInterval(kdn.uay.pmt);
        kdn.uay.eqv();
        kdn.uay.uwd.close()
    };
    this.ghr = function () {
        kdn.uay.eha.xuk("btn");
        kdn.uay.eha.mtk("btn");
        kdn.uay.xwh()
    };
    this.gga = function () {
        var f = kdn.uay.bew.gfj("topb"),
            e = kdn.uay.bew.gfj("settings"),
            g = kdn.uay.bew.gfj("gameb"),
            d = kdn.uay.bew.gfj("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (kdn.uay.eha.zot === true) {
            kdn.uay.lbr = (kdn.uay.lbr === kdn.uay.fit.length - 1) ? 0 : kdn.uay.lbr + 1;
            kdn.uay.msh(kdn.uay.fit[kdn.uay.lbr])
        } else {
            kdn.uay.lbr = (kdn.uay.lbr === kdn.uay.fit.length - 1) ? 0 : kdn.uay.fit.length - 1;
            kdn.uay.lcr((kdn.uay.fit[kdn.uay.lbr] === 0))
        }
        sessionStorage.sessionValue6 = kdn.uay.lbr;
        if (kdn.uay.fit[kdn.uay.lbr] > 0) {
            kdn.uay.eha.mtk("audioon")
        }
        if (d) {
            d.ins("audio", kdn.uay.fit[kdn.uay.lbr])
        }
        if (f) {
            f.wvx.qex("audio", "#isc", [kdn.uay.lbr])
        }
        if (e) {
            e.wvx.qex("audio", "#isc", [kdn.uay.lbr])
        }
        if (g) {
            g.wvx.qex("audio", "#isc", [kdn.uay.lbr])
        }
        kdn.uay.zwp()
    };
    this.erv = function () {};
    this.czr = function () {
        var d = kdn.uay.bew.gfj("settings");
        if (d) {
            if (d.fww()) {
                kdn.uay.zmk()
            } else {
                kdn.uay.aoa()
            }
            kdn.uay.eha.mtk("btn");
            if (kdn.uay.hhw.ibz === false) {
                kdn.uay.pgn.wvx.qex("setting", "#mrh", [d.fww()])
            }
        }
    };
    this.mez = function () {
        var d = kdn.uay.bew.gfj("settings"),
            e = "";
        kdn.uay.vtv = (kdn.uay.vtv < kdn.uay.qzo.length - 1) ? kdn.uay.vtv + 1 : (kdn.lgy.lpf()) ? 0 : 1;
        localStorage.localValue1 = kdn.uay.vtv;
        kdn.uay.apu();
        if (d) {
            d.wvx.qex("adjustment", "#isc", [(kdn.uay.evj === kdn.hhw.yjt) ? 0 : 1]);
            if (kdn.uay.qzo[kdn.uay.vtv] === kdn.cwg.umn) {
                e = kdn.uay.language.left
            } else {
                if (kdn.uay.qzo[kdn.uay.vtv] === kdn.cwg.zgd) {
                    e = kdn.uay.language.tsp
                } else {
                    if (kdn.uay.qzo[kdn.uay.vtv] === kdn.cwg.nyd) {
                        e = kdn.uay.language.tmu
                    }
                }
            }
            d.wvx.qex("adjustment", "#nkf", [e])
        }
    };
    this.xfc = function () {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.izk = function () {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.fdz = function () {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.wrn = function (e, d) {
        this.pgn.wvx.qex("creditd", "#nkf", [this.zre(e), d])
    };
    this.xvp = function (e, d) {
        if (e > 0) {
            this.pgn.wvx.qex("betd", "#nkf", [this.zre(e), d])
        } else {
            this.pgn.wvx.qex("betd", "#nkf", ["", d])
        }
    };
    this.zvq = function (e) {
        var d = this.bew.gfj("topi");
        this.hej = e;
        if (d) {
            d.kcp("id", (e > 0) ? e : "")
        }
    };
    this.ekq = function () {
        var e = "",
            d = kdn.uay.bew.gfj("topi");
        if (kdn.qwt.value49) {
            e += kdn.uay.hbq()
        }
        if (kdn.qwt.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += kdn.uay.qrj()
        }
        if (kdn.qwt.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.kcp("time", e)
        }
    };
    this.qrj = function () {
        return this.getTime(new Date().getTime() - this.jsu)
    };
    this.hbq = function () {
        var d = new Date();
        return this.igh(d.getHours()) + ":" + this.igh(d.getMinutes())
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
        return this.igh(d) + ":" + this.igh(f)
    };
    this.igh = function (d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.edv = function () {
        if (sessionStorage.sessionValue15 == "true" || kdn.qwt.value49) {
            if (kdn.qwt.value49) {
                this.hbq()
            }
            this.jsu = (this.nfh > 0) ? this.nfh : new Date().getTime();
            this.ekq();
            this.knn = setInterval(this.ekq, 1000)
        }
    };
    this.lbo = function () {
        clearInterval(this.knn)
    };
    this.ydr = function (d) {
        this.jsu -= d
    };
    this.tap = function (d, f) {
        var e = this.bew.gfj("loading");
        if (e && e.zal == null) {
            if (f && f !== "") {
                e.huv = f
            } else {
                e.huv = this.language.error
            }
            e.zal = d;
            e.zwp(this.eha.lna())
        }
    };
    this.aoa = function () {};
    this.zmk = function () {};
    this.irb = function () {};
    this.cfn = function () {};
    this.xwh = function () {
        var g = false,
            j = this.bew.gfj("topb"),
            f = this.bew.gfj("settings"),
            k = this.bew.gfj("gameb"),
            d = this.bew.gfj("topi");
        this.uve = (this.uve + 1 == kdn.qwt.value5.length) ? 0 : this.uve + 1;
        sessionStorage.sessionValue1 = kdn.qwt.value5[this.uve];
        this.language = this.zab(kdn.qwt.value5[this.uve]);
        this.pjc();
        if (j && g == false) {
            var e = j.wvx.gfj("language");
            if (e) {
                e.kdm(this.vnq(kdn.qwt.value5[this.uve]));
                g = true
            }
            j.nxh(true)
        }
        if (f && g == false) {
            var e = f.wvx.gfj("language");
            if (e) {
                e.kdm(this.vnq(kdn.qwt.value5[this.uve]));
                g = true
            }
        }
        if (k && g == false) {
            var e = k.wvx.gfj("language");
            if (e) {
                e.kdm(this.vnq(kdn.qwt.value5[this.uve]));
                g = true
            }
        }
        if (g == false) {
            var e = this.pgn.wvx.gfj("lang");
            if (e) {
                e.ldi = this.vnq(kdn.qwt.value5[this.uve])
            }
        }
        if (d) {
            d.isc("language", sessionStorage.sessionValue1)
        }
        this.zwp()
    };
    this.pjc = function () {};
    this.zab = function (d) {
        if (d == kdn.language.EN || d == kdn.language.US) {
            return new jaf()
        } else {
            if (d == kdn.language.ES || d == kdn.language.CO || d == kdn.language.MX || d == kdn.language.CL || d == kdn.language.VE) {
                return new qjy()
            } else {
                if (d == kdn.language.DE || d == kdn.language.AT) {
                    return new wiv()
                } else {
                    if (d == kdn.language.PT || d == kdn.language.BR) {
                        return new czg()
                    } else {
                        if (d == kdn.language.RU) {
                            return new cdv()
                        } else {
                            if (d == kdn.language.EE) {
                                return new wyt()
                            } else {
                                if (d == kdn.language.TR) {
                                    return new xgj()
                                } else {
                                    if (d == kdn.language.CZ) {
                                        return new rxu()
                                    } else {
                                        if (d == kdn.language.GR) {
                                            return new reb()
                                        } else {
                                            if (d == kdn.language.BG) {
                                                return new zwq()
                                            } else {
                                                if (d == kdn.language.GE) {
                                                    return new qng()
                                                } else {
                                                    if (d == kdn.language.HU) {
                                                        return new ksu()
                                                    } else {
                                                        if (d == kdn.language.RO) {
                                                            return new yhb()
                                                        } else {
                                                            if (d == kdn.language.FR) {
                                                                return new hjn()
                                                            } else {
                                                                if (d == kdn.language.HR) {
                                                                    return new mde()
                                                                } else {
                                                                    if (d == kdn.language.IT) {
                                                                        return new hmk()
                                                                    } else {
                                                                        if (d == kdn.language.SE) {
                                                                            return new qub()
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
    this.vnq = function (d) {
        if (d) {
            return this.eha.zgs(d)
        }
        return null
    };
    this.zvu = function () {
        this.eha.lfg()
    };
    this.eqv = function () {};
    this.lcr = function (d) {
        this.eha.ivn(d)
    };
    this.msh = function (d) {
        this.eha.hgz(d)
    };
    this.ixm = function () {
        this.tss();
        var d = this.bew.gfj("history");
        this.pbw = true;
        this.rxh = true;
        if (d) {
            d.zdu(true)
        }
        this.znu(this.owg(this.language.bmg))
    };
    this.dru = function () {
        loadGame("hist_" + kdn.uay.yfk.toLowerCase(), kdn.qwt.value30 + "/" + kdn.uay.yfk.toLowerCase() + "/src/hist_" + kdn.uay.yfk.toLowerCase(), "UTF-8");
        removeGame(kdn.uay.yfk.toLowerCase(), kdn.qwt.value30 + "/" + kdn.uay.yfk.toLowerCase() + "/src/" + kdn.uay.yfk.toLowerCase())
    };
    this.usl = function () {
        var d = "./history_" + this.yfk.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.fba = function () {
        var d = null;
        if (kdn.uay.qox) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            kdn.uay.frj({
                type: "quit",
                sender: kdn.uay.yfk,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            kdn.uay.wsf();
            if (d !== "(api)") {
             window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(kdn.uay.yfk.toLowerCase(), kdn.qwt.value30 + "/" + kdn.uay.yfk.toLowerCase() + "/src/" + kdn.uay.yfk.toLowerCase());
            removeGame("hist_" + kdn.uay.yfk.toLowerCase(), kdn.qwt.value30 + "/" + kdn.uay.yfk.toLowerCase() + "/src/hist_" + kdn.uay.yfk.toLowerCase());
            loadMenu("menu", kdn.qwt.value1001, "UTF-8", true)
        }
    };
    this.xlq = function () {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            kdn.uay.frj({
                type: "quit",
                sender: kdn.uay.yfk,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            d = decodeURIComponent(sessionStorage.sessionValue5);
            kdn.uay.wsf();
            if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(kdn.uay.yfk.toLowerCase(), kdn.qwt.value30 + "/" + kdn.uay.yfk.toLowerCase() + "/src/" + kdn.uay.yfk.toLowerCase());
            removeGame("hist_" + kdn.uay.yfk.toLowerCase(), kdn.qwt.value30 + "/" + kdn.uay.yfk.toLowerCase() + "/src/hist_" + kdn.uay.yfk.toLowerCase());
            loadMenu("menu", kdn.qwt.value1001, "UTF-8", false)
        }
    };
    this.wsf = function () {
        if (!kdn.uay.vks && kdn.qwt.value83) {
            sessionStorage.clear()
        }
    };
    this.xaq = function (f) {
        var g = null;
        if (this.fkb) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.sek !== kdn.lzh.weg) {
                    if (g.sek === kdn.lzh.svv || g.sek === kdn.lzh.ouv) {
                        g.Title = this.language.fmx;
                        g.Text = (g.sek === kdn.lzh.svv) ? this.language.adt : this.language.lde;
                        g.Buttons = [{
                            Text: this.language.aem,
                            Action: "quit"
                        }]
                    } else {
                        if (g.sek === kdn.lzh.jgs) {
                            g.Title = this.language.cxz;
                            g.Text = this.language.noq + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.ahb;
                                g.Buttons = [{
                                    Text: this.owg(this.language.qlo),
                                    Action: "history"
                                }, {
                                    Text: this.language.aem,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.aem,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.sek === kdn.lzh.kef || g.sek === kdn.lzh.nnz || g.sek === kdn.lzh.pdd) {
                                g.Title = this.euh;
                                if (g.sek === kdn.lzh.kef) {
                                    g.Text = this.language.kwf + " " + this.pfy + " " + this.language.bzz + "\n\n" + this.language.lte
                                } else {
                                    if (g.sek === kdn.lzh.nnz) {
                                        g.Text = this.language.lhk + " " + (this.pfy - this.bcw) + " " + this.language.scc + "\n\n" + this.language.lte
                                    } else {
                                        if (g.sek === kdn.lzh.pdd) {
                                            g.Text = this.language.uxw + ": " + this.bcw + "\n" + this.language.nry + ": " + this.vey(this.ogv)
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
                    if (g.sek === kdn.lzh.lno || g.sek === kdn.lzh.gdk) {
                        g.Title = this.language.eyx;
                        g.Text = this.language.jhc;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.sek === kdn.lzh.ruq) {
                            g.Title = this.language.kmm;
                            g.Text = this.language.agb;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.sek === kdn.lzh.roulette.tdw || g.sek === kdn.lzh.roulette.umz) {
                                g.Title = this.language.fmx;
                                g.Text = (g.sek === kdn.lzh.roulette.tdw) ? this.language.fwf : this.language.dkt;
                                g.Buttons = [{
                                    Text: this.language.aem,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.fkb.olx(f)
        }
    };
    this.stop = function () {
        this.lbo();
        this.jaw();
        this.xsi();
        clearTimeout(this.nzl);
        if (!this.vks) {
            clearInterval(this.pmt)
        }
        this.bew.qex("autop", "#stop");
        this.bew.qex("settings", "#stop");
        this.bew.qex("topb", "#stop")
    };
    this.apz = function () {
        var d = false;
        if (this.nad.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.bqe == "freeplay" && this.arx == "freeplay") {
                d = true
            } else {
                if (this.zxe && (this.zxe == "b71d982ffcbe56eb8cd11fa05963bbee" || this.zxe.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (kdn.qwt.value68 != null && this.jkg.toLowerCase() === kdn.qwt.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            kdn.qwt.value21.e = false;
            if (kdn.qwt.value76) {
                kdn.qwt.value76.f = false
            }
        }
        return d
    };
    this.mlu = function () {
        return (kdn.qwt.value65 > 0)
    };
    this.dqg = function () {
        return (((kdn.lgy.ctc === kdn.os.kjq && kdn.lgy.hty() === true) || kdn.lgy.ctc === kdn.os.usv) && this.vks === false)
    };
    this.fcx = function () {
        return false
    };
    this.qzs = function () {
        if (kdn.uay.mlu() && kdn.uay.fcx()) {
            clearTimeout(kdn.uay.zfc);
            kdn.uay.zfc = setTimeout(kdn.uay.qar, kdn.qwt.value65)
        }
    };
    this.ykx = function () {
        if (kdn.uay.mlu() && kdn.uay.zfc >= 0) {
            if (kdn.uay.fcx()) {
                clearTimeout(kdn.uay.zfc);
                kdn.uay.zfc = setTimeout(kdn.uay.qar, kdn.qwt.value65)
            } else {
                clearTimeout(kdn.uay.zfc);
                kdn.uay.zfc = -1
            }
        }
    };
    this.jaw = function () {
        if (kdn.uay.mlu()) {
            clearTimeout(kdn.uay.zfc);
            kdn.uay.zfc = -1
        }
    };
    this.shs = function () {
        return false
    };
    this.mcq = function () {
        return false
    };
    this.hps = function () {
        if (kdn.uay.shs() && kdn.uay.mcq() && kdn.uay.jlu < 0) {
            clearTimeout(kdn.uay.jlu);
            kdn.uay.jlu = setTimeout(kdn.uay.prs, kdn.uay.grg)
        }
    };
    this.mfj = function () {
        if (kdn.uay.shs() && kdn.uay.jlu >= 0) {
            if (kdn.uay.mcq()) {
                clearTimeout(kdn.uay.jlu);
                kdn.uay.jlu = setTimeout(kdn.uay.prs, kdn.uay.grg)
            } else {
                clearTimeout(kdn.uay.jlu);
                kdn.uay.jlu = -1
            }
        }
    };
    this.xsi = function () {
        if (kdn.uay.shs()) {
            clearTimeout(kdn.uay.jlu);
            kdn.uay.jlu = -1
        }
    };
    this.prs = function () {};
    this.vcz = function () {};
    this.egf = function (f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.iix.replace(/_*/g, ""));
        if (e > d) {
            this.iix = f
        }
    };
    this.tod = function (g) {
        var e = (g && !this.djz),
            f = this.bew.gfj("topb"),
            d = this.bew.gfj("topi");
        if (d) {
            d.wfx(e)
        }
        if (f) {
            f.wfx(e);
            f.lkn(e)
        }
    };
    this.xam = function (g) {
        var e = (g && !this.djz),
            f = this.bew.gfj("topb"),
            d = this.bew.gfj("topi");
        if (d) {
            d.wfx(e)
        }
        if (f) {
            f.wfx(e);
            f.byf(e)
        }
    };
    this.psf = function (g) {
        var e = (g && !this.djz),
            f = this.bew.gfj("topb"),
            d = this.bew.gfj("topi");
        if (d) {
            d.wfx(e)
        }
        if (f) {
            f.wfx(e);
            f.inp(e)
        }
    };
    this.shx = function () {
        var d = this.bew.gfj("topb");
        if (d && !d.fww()) {
            this.eha.xuk("panel_in");
            this.eha.mtk("panel_in");
            d.olx()
        }
    };
    this.hgk = function (d) {
        var e = this.bew.gfj("topb");
        if (e && e.fww()) {
            this.eha.xuk("panel_out");
            this.eha.mtk("panel_out");
            if (d) {
                e.uth = d
            }
            e.xwd()
        }
    };
    this.vey = function (f) {
        if (this.wzn > 0) {
            return (f * this.wzn).toFixed(0).toString()
        } else {
            if (kdn.qwt.value21.e == false || this.qox == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (kdn.qwt.value21.m != 1) {
                    e = f * kdn.qwt.value21.m;
                    var g = kdn.qwt.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = kdn.qwt.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.qds(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.zre = function (f) {
        if (this.wzn > 0) {
            var e = (f * this.wzn).toFixed(0).toString();
            if (kdn.qwt.value21.e == true && kdn.qwt.value21.m == 1 && kdn.qwt.value21.s && this.qox == false) {
                e = kdn.qwt.value21.s + " " + e
            }
            return e
        } else {
            if (kdn.qwt.value21.e == false || this.qox == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (kdn.qwt.value21.m != 1) {
                    e = f * kdn.qwt.value21.m;
                    var g = kdn.qwt.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = kdn.qwt.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.qds(e, (d == 0) ? 0 : d + 1);
                if (kdn.qwt.value21.s) {
                    e = kdn.qwt.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.qds = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (kdn.qwt.value21.cs != null) {
                l = l.replace(/\./, kdn.qwt.value21.cs)
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
                    if (kdn.qwt.value21.ts != null) {
                        e += kdn.qwt.value21.ts
                    }
                }
            }
            if (kdn.qwt.value21.cs != null) {
                f = f.replace(/\./, kdn.qwt.value21.cs)
            }
            return e + f
        }
    };
    this.osq = function (f) {
        if (this.wzn > 0) {
            return (f * this.wzn).toFixed(0).toString()
        } else {
            if (kdn.qwt.value76.f == false || this.qox == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (kdn.qwt.value76.m != 1) {
                    e = f * kdn.qwt.value76.m;
                    var g = kdn.qwt.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = kdn.qwt.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.vhw(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.sbu = function (f) {
        if (this.wzn > 0) {
            var e = (f * this.wzn).toFixed(0).toString();
            if (kdn.qwt.value76.f == true && kdn.qwt.value76.m == 1 && kdn.qwt.value76.s && this.qox == false) {
                e = kdn.qwt.value76.s + " " + e
            }
            return e
        } else {
            if (kdn.qwt.value76.f == false || this.qox == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (kdn.qwt.value76.m != 1) {
                    e = f * kdn.qwt.value76.m;
                    var g = kdn.qwt.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = kdn.qwt.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.vhw(e, (d == 0) ? 0 : d + 1);
                if (kdn.qwt.value76.s) {
                    e = kdn.qwt.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.vhw = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (kdn.qwt.value76.cs != null) {
                l = l.replace(/\./, kdn.qwt.value76.cs)
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
                    if (kdn.qwt.value76.ts != null) {
                        e += kdn.qwt.value76.ts
                    }
                }
            }
            if (kdn.qwt.value76.cs != null) {
                f = f.replace(/\./, kdn.qwt.value76.cs)
            }
            return e + f
        }
    };
    this.owg = function (d) {
        if (d && sessionStorage.sessionValue1 !== kdn.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.szh = function () {
        for (var e = 0, d = this.uwd.uzy.wln.length; e < d; e++) {
            this.bew.udd(this.uwd.uzy.wln[e].bdl, this.nks(this.uwd.uzy.wln[e], this.hhw.npb.sde[this.uwd.uzy.wln[e].sde], this.hhw.npb.display, this.style.npb.siw[this.uwd.uzy.wln[e].sde], null), ["jackpots"])
        }
        this.bew.udd("jwp", this.nks(null, this.hhw.npb.zco.sde, this.hhw.npb.zco, this.style.npb.zco, this.eha.zgs("jackpot")));
        this.bew.qex("jwp", "#dft", [false]);
        if (this.srj()) {
            this.bew.udd("mjwp", this.wuf(this.hhw.npb.qzg.sde, this.hhw.npb.qzg, this.style.npb.qzg, this.eha.zgs("mj_bg"), this.eha.zgs("mj_font"), this.eha.zgs("mj_label"), [this.eha.zgs("mj_0"), this.eha.zgs("mj_1"), this.eha.zgs("mj_2"), this.eha.zgs("mj_3"), this.eha.zgs("mj_4"), this.eha.zgs("mj_5")]));
            this.bew.qex("mjwp", "#dft", [false])
        }
    };
    this.cmb = function () {
        var e = this.bew.wrb("jackpots"),
            f = this.bew.gfj("jwp"),
            j = this.bew.gfj("mjwp");
        for (var g = 0, d = e.length; g < d; g++) {
            e[g].yai(this.hhw.npb.sde[this.uwd.uzy.wln[g].sde]);
            e[g].tqi(this.hhw.npb.display)
        }
        if (f) {
            f.yai(this.hhw.npb.zco.sde);
            f.tqi(this.hhw.npb.zco)
        }
        if (j) {
            j.yai(this.hhw.npb.qzg.sde);
            j.tqi(this.hhw.npb.qzg)
        }
    };
    this.nks = function (f, k, j, g, d) {
        var e = new cwa();
        e.cjm(k, null, this.context2D);
        e.parent = this;
        e.ldi = d;
        e.idh(g);
        e.tqi(j);
        if (f) {
            e.aaj(f.wgw);
            e.lrz(f.value)
        }
        return e
    };
    this.wuf = function (k, j, g, l, m, f, e) {
        var d = new kjc();
        d.cjm(k, null, this.context2D);
        d.parent = this;
        d.uvm = l;
        d.hzt = m;
        d.bop = f;
        d.lud = e;
        d.idh(g);
        d.tqi(j);
        return d
    };
    this.jvi = function (f) {
        if (this.kwp() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.bew.qex(f[e].bdl, "#lrz", [f[e].value])
            }
            this.zwp()
        }
    };
    this.kfw = function (d) {
        if (this.kwp() === true) {
            this.npb = {
                bdl: d.bdl,
                value: d.value,
                blh: d.blh
            }
        }
    };
    this.slf = function () {
        this.npb = null
    };
    this.spz = function () {
        return false
    };
    this.srj = function () {
        return false
    };
    this.kwp = function () {
        return (!this.vks && this.uwd.uzy.wln.length > 0 && this.spz())
    };
    this.myw = function () {
        return (this.npb != null)
    };
    this.wgr = function () {
        return (kdn.qwt.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.yab = function () {
        if (this.wft() && this.ilk()) {
            this.xay()
        }
    };
    this.ilk = function () {
        return false
    };
    this.wft = function () {
        if (this.vks) {
            return false
        }
        return (this.uwd.uzy.bnt.length + this.uwd.uzy.ouh.length > 0)
    };
    this.xay = function () {
        var g = null,
            e = this.uwd.uzy.bnt.length,
            d = this.uwd.uzy.ouh.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.uwd.uzy.bnt.splice(f, 1)[0];
                g.sek = kdn.lzh.weg;
                this.tso.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.uwd.uzy.ouh.splice(f, 1)[0];
                g.sek = kdn.lzh.weg;
                this.tso.push(g)
            }
            if (this.fkb && !this.fkb.fww()) {
                this.led()
            }
        }
    };
    this.led = function () {
        var d = null;
        if (this.tso.length > 0) {
            d = this.tso.shift();
            this.xaq([d])
        }
    };
    this.lcn = function () {
        if (kdn.uay.gfw.length > 0) {
            kdn.uay.xaq(kdn.uay.gfw)
        }
    };
    this.xct = function () {
        this.tso.length = 0
    };
    this.iok = function () {
        this.gfw.length = 0;
        if (this.awv) {
            this.awv.xwd()
        }
    };
    this.wbg = function () {
        var f = null,
            d = this.uwd.uzy.gfw.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.uwd.uzy.gfw.splice(e, 1)[0];
                f.sek = kdn.lzh.weg;
                this.gfw.push(f)
            }
            if (this.awv) {
                this.awv.olx(this.gfw[0].Title, this.gfw[0].Text, this.gfw.length)
            }
        }
    };
    this.gkg = function () {
        var d = false;
        if (this.fkb && this.fkb.fww()) {
            d = true
        }
        if (this.awv && this.awv.fww()) {
            d = true
        }
        if (this.wgr()) {
            d = true
        }
        if (this.qxj) {
            this.qxj.style.display = (d) ? "block" : "none"
        }
    };
    this.plk = function () {
        this.tod(false);
        this.pgn.lkn(false);
        this.pgn.wvx.qex("info", "#ife");
        this.xaq([{
            sek: kdn.lzh.jgs
        }])
    };
    this.atp = function () {
        kdn.uay.grc = true
    };
    this.hoz = function () {
        this.qlq = new qib().cjm(this, kdn.qwt.value6)
    };
    this.glr = function () {
        if (this.qlq) {
            this.qlq.connect(this.yfk, this.bqe, this.arx, this.zxe, this.iix, true)
        }
    };
    this.jds = function () {
        if (kdn.uay.qlq) {
            kdn.uay.qlq.connect(kdn.uay.yfk, kdn.uay.bqe, kdn.uay.arx, kdn.uay.zxe, kdn.uay.iix, false)
        }
    };
    this.dtp = function () {};
    this.bvy = function () {};
    this.xfi = function (d) {
        if (!this.apz() && !this.vks) {
            clearTimeout(this.nzl);
            if (this.hce()) {
                this.nzl = setTimeout(this.cgs, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.nzl = setTimeout(this.atp, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.cgs = function () {
        kdn.uay.spd = true
    };
    this.hce = function () {
        return kdn.qwt.value36 || kdn.qwt.value37
    }
}

function nws() {
    this.cjm = function () {
        this.ivq("btn", this.ujo);
        this.ivq("gamble_on", this.ujo);
        this.ivq("gamble_off", this.ujo);
        this.ivq("panel_in", this.ujo);
        this.ivq("panel_out", this.ujo);
        this.ivq("audioon", this.ujo);
        for (var a = 0; a < 12; a++) {
            this.ivq("step" + a, this.ujo)
        }
        this.ivq("maxstep", this.ujo);
        this.ivq("start", 0.2);
        this.ivq("gambleprop", this.jtw);
        this.ivq("freespinstart", 0.5)
    }
}
nws.prototype = new tya;

function ejw() {
    this.zgb = {
        pdi: 84,
        npr: -1,
        value: "T",
        cbi: null
    };
    this.gcd = {
        pdi: 82,
        npr: -1,
        value: "R",
        cbi: null
    };
    this.dka = {
        pdi: 80,
        npr: -1,
        value: "P",
        cbi: null
    };
    this.csr = {
        pdi: 77,
        npr: -1,
        value: "M",
        cbi: null
    };
    this.start = {
        pdi: 32,
        npr: -1,
        value: "SPACE",
        cbi: null
    };
    this.djz = {
        pdi: 16,
        npr: -1,
        value: "SHIFT",
        cbi: null
    };
    this.meg = {
        pdi: 38,
        npr: -1,
        value: "\u25B2",
        cbi: null
    };
    this.zce = {
        pdi: 40,
        npr: -1,
        value: "\u25BC",
        cbi: null
    };
    this.vag = {
        pdi: 39,
        npr: -1,
        value: "\u25B6",
        cbi: null
    };
    this.lqk = {
        pdi: 37,
        npr: -1,
        value: "\u25C0",
        cbi: null
    };
    this.iqc = {
        pdi: 71,
        npr: -1,
        value: "G",
        cbi: null
    };
    this.xdp = {
        pdi: 27,
        npr: -1,
        value: "ESC",
        cbi: null
    };
    this.language = {
        pdi: 76,
        npr: -1,
        value: "L",
        cbi: null
    };
    this.osj = {
        pdi: 13,
        npr: -1,
        value: "ENTER",
        cbi: null
    };
    this.oay = {
        pdi: 27,
        npr: -1,
        value: "ESC",
        cbi: null
    };
    this.eyh = {
        pdi: 39,
        npr: -1,
        value: "\u25B6",
        cbi: null
    };
    this.zxa = {
        pdi: 37,
        npr: -1,
        value: "\u25C0",
        cbi: null
    };
    this.grp = {
        pdi: 27,
        npr: -1,
        value: "ESC",
        cbi: null
    };
    this.gzx = {
        pdi: 32,
        npr: -1,
        value: "SPACE",
        cbi: null
    };
    this.hin = {
        pdi: 8,
        npr: -1,
        value: "BACKSPACE",
        cbi: null
    };
    this.bpv = {
        pdi: 82,
        npr: -1,
        value: "R",
        cbi: null
    };
    this.svb = {
        pdi: 66,
        npr: -1,
        value: "B",
        cbi: null
    };
    this.zgi = {
        pdi: 72,
        npr: -1,
        value: "H",
        cbi: null
    };
    this.ugr = {
        pdi: 68,
        npr: -1,
        value: "D",
        cbi: null
    };
    this.ifv = {
        pdi: 83,
        npr: -1,
        value: "S",
        cbi: null
    };
    this.xrw = {
        pdi: 67,
        npr: -1,
        value: "C",
        cbi: null
    };
    this.tzn.push(this.zgb);
    this.tzn.push(this.dka);
    this.tzn.push(this.start);
    this.tzn.push(this.djz);
    this.tzn.push(this.meg);
    this.tzn.push(this.zce);
    this.tzn.push(this.vag);
    this.tzn.push(this.lqk);
    this.tzn.push(this.iqc);
    this.tzn.push(this.xdp);
    this.tzn.push(this.language)
}
ejw.prototype = new hkw;

function ymp() {
    this.csl = new Image();
    this.rtq = 0;
    this.wct = 0;
    this.xqd = 0;
    this.cjm = function (c, a, b, d) {
        this.csl = c;
        this.wct = b;
        this.rtq = a;
        this.xqd = d;
        return this
    }
}

function qxx() {
    this.qbt = 0;
    this.pho = 0;
    this.win = 0;
    this.rcu = "sans-serif";
    this.uid = "bold";
    this.luk = null;
    this.mli = null;
    this.mrg = null;
    this.eaa = null;
    this.msb = 16;
    this.gzo = 0;
    this.sxc = 0;
    this.asf = 2;
    this.cpq = 3;
    this.fbn = 3;
    this.rlq = 3;
    this.jda = 3;
    this.tqi = function (a) {
        try {
            this.msb = a.fontSize;
            this.gzo = a.tqk;
            this.sxc = a.nrj;
            this.asf = a.dmp;
            this.cpq = a.nca;
            this.fbn = a.dus;
            this.rlq = a.taw;
            this.jda = a.xjs
        } catch (b) {
            console.error(b)
        }
    };
    this.idh = function (a) {
        try {
            this.rcu = a.font;
            this.uid = a.zde;
            this.luk = a.asm;
            this.mli = a.borderColor;
            this.mrg = a.dlt;
            this.eaa = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.mcr = function (a, c, b, d) {
        this.qbt = a;
        this.pho = c;
        this.win = b;
        if (d && d === true && this.context2D != null && this.fww() === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.eqf = function (a, b) {
        this.win = a;
        if (b && b === true && this.context2D != null && this.fww() === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.mrg) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.mli);
            b.addColorStop(1, this.mrg);
            kdn.lgy.hal(a, this.x, this.y, this.width, this.height, this.cpq, this.fbn, this.rlq, this.jda, this.eaa, 1, b, this.asf, 1)
        } else {
            kdn.lgy.hal(a, this.x, this.y, this.width, this.height, this.cpq, this.fbn, this.rlq, this.jda, this.eaa, 1, this.mli, this.asf, 1)
        }
        kdn.lgy.ufv(a, kdn.uay.language.uxw + ":", this.luk, this.x + this.asf + this.gzo, this.y + this.sxc, 2 * this.width / 3 - this.asf, this.height / 2, this.rcu, this.msb, this.uid, 0);
        kdn.lgy.ufv(a, kdn.uay.language.nry + ":", this.luk, this.x + this.asf + this.gzo, this.y + this.height / 2 + this.sxc, 2 * this.width / 3 - this.asf, this.height / 2, this.rcu, this.msb, this.uid, 0);
        kdn.lgy.xhg(a, this.pho + "/" + this.qbt, this.luk, this.x + this.asf + 2 * this.width / 3, this.y + this.sxc, this.width / 3 - this.asf - this.gzo, this.height / 2, this.rcu, this.msb, this.uid, 0);
        kdn.lgy.xhg(a, this.win, this.luk, this.x + this.asf + 2 * this.width / 3, this.y + this.height / 2 + this.sxc, this.width / 3 - this.asf - this.gzo, this.height / 2, this.rcu, this.msb, this.uid, 0);
        a.restore();
        if (this.vtx && this.saw) {
            this.vtx.drawImage(this.saw, this.x, this.y)
        }
    }
}
qxx.prototype = new yos;

function ckw() {
    var a = this;
    this.ljj = false;
    this.wvx = null;
    this.bgg = false;
    this.quj = -1;
    this.rrl = 0;
    this.kpc = null;
    this.snz = 800;
    this.lrb = 0;
    this.eaa = null;
    this.pvy = null;
    this.mwr = null;
    this.wjy = 0;
    this.pvs = null;
    this.mpo = null;
    this.zyo = null;
    this.qkv = null;
    this.qly = 0;
    this.ulj = 0;
    this.msl = new bzm();
    this.qno = new bzm();
    this.gex = 30;
    this.cjm = function (b, d, c) {
        ckw.prototype.cjm.call(this, b, d, c);
        this.atv()
    };
    this.vmb = function (c, b) {
        try {
            this.gex = c.wcm;
            this.msl = c.nye;
            this.qno = c.ucv;
            this.fhe(c);
            this.ezt(c);
            this.lle(c);
            this.nnt(c);
            this.deq(c);
            this.idh(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.tqi = function (g, r) {
        try {
            var d = {},
                c = this.wvx.gfj("info"),
                k = this.wvx.gfj("win"),
                s = this.wvx.gfj("creditd"),
                o = this.wvx.gfj("betd"),
                p = this.wvx.gfj("betpopup"),
                n = this.wvx.gfj("idd"),
                q = this.wvx.gfj("timed"),
                b = this.wvx.gfj("freeround"),
                m = this.wvx.wrb("buttons");
            if (this.parent.xhi() || (this.parent.vks && this.parent.jpq)) {
                if ((this.parent.wte() == null || this.parent.wte().o == false) && this.parent.style.uay.bap == true) {
                    d = g.pcb
                } else {
                    d = g.lwa
                }
            } else {
                if (r) {
                    if (this.parent.wte() != null) {
                        d = g.lnh
                    } else {
                        d = g.pzi
                    }
                } else {
                    if (this.parent.wte() != null) {
                        if (!this.parent.ysk()) {
                            d = g.dpg
                        } else {
                            d = g.itr
                        }
                    } else {
                        if (kdn.qwt.value57 === kdn.ui.vtq || this.ulp()) {
                            if (!this.parent.ysk()) {
                                d = g.jpt
                            } else {
                                d = g.yek
                            }
                        } else {
                            if (kdn.qwt.value57 === kdn.ui.ejz) {
                                if (!this.parent.ysk()) {
                                    d = g.zpo
                                } else {
                                    d = g.dah
                                }
                            } else {
                                if (kdn.qwt.value57 === kdn.ui.rub) {
                                    if (!this.parent.ysk()) {
                                        d = g.dtg
                                    } else {
                                        d = g.gdf
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.gex = g.wcm;
            this.msl = g.nye;
            this.qno = g.ucv;
            if (s) {
                s.tqi(g.display);
                s.yai(g.xuz)
            }
            if (o) {
                o.tqi(g.display);
                o.yai(g.did)
            }
            if (p) {
                p.tqi(g.mkt);
                p.yai(g.qzr)
            }
            if (n) {
                n.tqi(g.zev);
                n.yai(g.fdg)
            }
            if (q) {
                q.tqi(g.zev);
                q.yai(g.xhf)
            }
            if (c) {
                c.tqi(g.kmm);
                c.yai(g.kmm.sde)
            }
            if (k) {
                k.tqi(g.win);
                k.yai(g.win.sde)
            }
            if (b) {
                b.tqi(g.gqh);
                b.yai(g.gqh.sde)
            }
            for (var f = 0, j = m.length; f < j; f++) {
                if (m[f] instanceof twa) {
                    m[f].tqi(g.rxb)
                }
            }
            if (this.parent.wte() != null) {
                if (this.parent.xhi() === true) {
                    if (this.parent.wte().o === true || this.parent.style.uay.bap == false) {
                        this.wvx.qex("start", "#tqi", [g.ory])
                    } else {
                        this.wvx.qex("start", "#tqi", [g.azj])
                    }
                } else {
                    this.wvx.qex("start", "#tqi", [g.azj]);
                    this.wvx.qex("astart", "#tqi", [g.ory])
                }
            } else {
                this.wvx.qex("start", "#tqi", [g.azj]);
                if (this.parent.xhi() === true) {} else {
                    if (kdn.qwt.value57 === kdn.ui.vtq || this.ulp()) {
                        this.wvx.qex("astart", "#tqi", [g.azj])
                    }
                }
            }
            if (r) {
                this.wvx.qex("start", "#yai", [d.hml]);
                this.wvx.qex("astart", "#yai", [d.fxb]);
                this.wvx.qex("setting", "#yai", [d.ank])
            } else {
                this.wvx.qex("start", "#yai", [d.hml]);
                this.wvx.qex("astart", "#yai", [d.fxb]);
                this.wvx.qex("bet", "#yai", [d.tvx]);
                this.wvx.qex("gamble", "#yai", [d.ato]);
                this.wvx.qex("exit", "#yai", [d.lar]);
                this.wvx.qex("help", "#yai", [d.lar]);
                this.wvx.qex("lang", "#yai", [d.xbx]);
                this.wvx.qex("line", "#yai", [d.ikf]);
                this.wvx.qex("setting", "#yai", [d.ank])
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.idh = function (b, r) {
        try {
            var d = this.wvx.gfj("info"),
                l = this.wvx.gfj("win"),
                p = this.wvx.gfj("betpopup"),
                c = this.wvx.gfj("freeround"),
                j = this.wvx.wrb("displays"),
                o = this.wvx.gfj("idd"),
                q = this.wvx.gfj("timed"),
                n = this.wvx.wrb("buttons"),
                g = (r === true) ? b.mjn : b.veo;
            this.eaa = g.backgroundColor;
            this.pvy = g.qja;
            this.mwr = g.wus;
            this.wjy = g.evg;
            this.mpo = g.kus;
            this.zyo = g.qze;
            if (d) {
                d.idh(g.kmm)
            }
            if (l) {
                l.idh(g.win)
            }
            if (c) {
                c.idh(b.gqh)
            }
            for (var f = 0, k = n.length; f < k; f++) {
                n[f].idh((this.parent.hhw.ibz === false) ? g.ocr : (this.parent.evj === kdn.hhw.yjt) ? g.ohz : g.zlz)
            }
            for (var f = 0, k = j.length; f < k; f++) {
                j[f].idh(b.display)
            }
            if (p) {
                p.idh(b.mkt)
            }
            if (o) {
                o.idh(b.zev)
            }
            if (q) {
                q.idh(b.zev)
            }
            if (this.parent.xhi() === true) {
                this.wvx.qex("bet", "#idh", [b.czi])
            }
        } catch (m) {
            console.error(m)
        }
    };
    this.dmk = function (t, s, u) {
        var r = this.wvx.wrb("buttons"),
            g = this.wvx.gfj("line"),
            k = this.wvx.gfj("bet"),
            c = this.wvx.gfj("start"),
            p = this.wvx.gfj("betd"),
            f = this.wvx.gfj("creditd"),
            b = this.parent.bew.gfj("betsel"),
            e = this.parent.bew.gfj("linesel"),
            o = t - this.x,
            m = s - this.y;
        for (var n = 0, q = r.length; n < q; n++) {
            var d = r[n];
            if (o >= d.x && o <= d.x + d.width && m >= d.y && m <= d.y + d.height && d.fww() == true) {
                if (d.ovk() && !d.jeb()) {
                    if (!this.parent.xhi() && (d === k || d === g)) {
                        d.qde(true, true, false);
                        for (var l = 0; l < q; l++) {
                            r[l].egb(true, false)
                        }
                        d.mik();
                        this.kpc = function () {
                            if (d.mik() === true) {
                                clearInterval(a.rrl);
                                d.qde(false, true);
                                for (var v = 0; v < q; v++) {
                                    r[v].egb(false)
                                }
                            }
                        };
                        this.rrl = setInterval(this.kpc, d.ngo)
                    } else {
                        if (d === c && c.mik === this.xuc) {
                            d.qde(true, true, false)
                        } else {
                            d.qde(true, true)
                        }
                        d.mik();
                        for (var l = 0; l < q; l++) {
                            r[l].egb(true)
                        }
                    }
                    return true
                }
            }
        }
        if (k && k.ovk() && !k.jeb() && k.fww()) {
            if (p && o >= p.x && o <= p.x + p.width && m >= p.y && m <= p.y + p.height) {
                if (!u) {
                    if ((b && b.ovk()) && ((e && e.ovk()) || !e)) {
                        this.parent.vwb()
                    }
                    return true
                }
            } else {
                if (f && o >= f.x && o <= f.x + f.width && m >= f.y && m <= f.y + f.height) {
                    if (!u) {
                        this.parent.het()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.szd = function () {
        var f = this.wvx.wrb("buttons"),
            k = this.wvx.gfj("bet"),
            l = this.wvx.gfj("line"),
            g = this.wvx.gfj("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.kpf() === true) {
                d.qde(false, true);
                if (kdn.qwt.value82 && d == g) {
                    for (var c = 0; c < b; c++) {
                        f[c].egb(false)
                    }
                }
                if (d === k || d === l) {
                    clearInterval(this.rrl);
                    for (var c = 0; c < b; c++) {
                        f[c].egb(false)
                    }
                } else {
                    if (d === g && g.mik === this.xuc) {
                        clearTimeout(this.lrb);
                        if (this.parent.djz === false) {
                            this.wvx.qex("start", "#pad")
                        }
                    }
                }
                return true
            }
        }
        return false
    };
    this.sxr = function (c) {
        var m = this.wvx.wrb("buttons"),
            f = this.wvx.gfj("bet"),
            e = this.wvx.gfj("line"),
            b = this.wvx.gfj("start");
        for (var k = 0, l = m.length; k < l; k++) {
            var d = m[k];
            if (c == d.vrv) {
                if (d.ovk() && !d.jeb() && d.fww()) {
                    if (kdn.qwt.value82 && d == b) {
                        d.qde(true, true, false);
                        for (var g = 0; g < l; g++) {
                            m[g].egb(true, false)
                        }
                    } else {
                        d.qde(true, true);
                        d.mik();
                        for (var g = 0; g < l; g++) {
                            m[g].egb(true)
                        }
                    }
                }
                return true
            }
        }
        if (c == this.parent.dnt.zce.pdi) {
            if (f && f.ovk() && !f.jeb() && f.fww()) {
                this.parent.ekj();
                for (var g = 0, l = m.length; g < l; g++) {
                    m[g].egb(true)
                }
            }
            return true
        } else {
            if (c == this.parent.dnt.lqk.pdi) {
                if (e && e.ovk() && !e.jeb() && e.fww()) {
                    this.parent.cbs();
                    for (var g = 0, l = m.length; g < l; g++) {
                        m[g].egb(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.qpj = function (g) {
        var f = this.wvx.wrb("buttons"),
            k = this.wvx.gfj("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.kpf() == true && g == d.vrv) {
                if (kdn.qwt.value82 && d == k) {
                    d.mik();
                    for (var c = 0; c < b; c++) {
                        f[c].egb(false)
                    }
                }
                d.qde(false, true);
                return true
            }
        }
        return false
    };
    this.spy = function (n, m, o) {
        var l = this.wvx.wrb("buttons"),
            e = this.wvx.gfj("bet"),
            d = this.wvx.gfj("line"),
            b = this.wvx.gfj("start"),
            p = this.wvx.gfj("astart");
        if (n != null && m != null) {
            var j = n - this.x;
            var f = m - this.y;
            for (var g = 0, k = l.length; g < k; g++) {
                var c = l[g];
                if (j >= c.x && j <= c.x + c.width && f >= c.y && f <= c.y + c.height && c.fww() && c.ovk() && !c.jeb()) {
                    return c.mik
                }
            }
        } else {
            if (o != null) {
                for (var g = 0, k = l.length; g < k; g++) {
                    var c = l[g];
                    if (o == c.vrv && c.fww() && c.ovk() && !c.jeb()) {
                        if (c == b || c == p) {
                            return null
                        }
                        return c.mik
                    }
                }
                if (o == this.parent.dnt.zce.pdi && e && e.fww() && e.ovk() && !e.jeb()) {
                    return this.parent.ekj
                } else {
                    if (o == this.parent.dnt.lqk.pdi && d && d.fww() && d.ovk() && !d.jeb()) {
                        return this.parent.cbs
                    }
                }
            }
        }
        return null
    };
    this.atv = function () {
        this.wvx = new xlf();
        this.wvx.cjm();
        this.wvx.hca("displays");
        this.wvx.hca("buttons");
        this.wvx.hca("allbuttons");
        this.wvx.hca("infos");
        this.wvx.hca("start");
        this.wvx.hca("auto");
        this.wvx.hca("collect");
        this.wvx.hca("freespin");
        this.wvx.hca("game");
        this.wvx.hca("settings")
    };
    this.deq = function (b) {
        var c = this.zkb(b.kmm.sde);
        c.tqi(b.kmm);
        this.wvx.udd("info", c, ["infos"])
    };
    this.nnt = function (b) {
        var c = this.zkb(b.win.sde);
        c.font = this.parent.guv;
        c.ldi = this.parent.eha.zgs("s_symb");
        c.ahd = this.parent.eha.zgs("s_symb").height / this.parent.sgc.length;
        c.tqi(b.win);
        this.wvx.udd("win", c, ["infos"])
    };
    this.lle = function (b) {
        var c = new qxx();
        c.cjm(b.gqh.sde, this.context2D, null);
        c.parent = this;
        c.tqi(b.gqh);
        c.dft(false);
        this.wvx.udd("freeround", c)
    };
    this.ezt = function (c) {
        var b = {};
        if (this.parent.xhi() || (this.parent.vks && this.parent.jpq)) {
            if ((this.parent.wte() == null || this.parent.wte().o == false) && this.parent.style.uay.bap == true) {
                b = c.pcb
            } else {
                b = c.lwa
            }
        } else {
            if (this.parent.wte() != null) {
                if (!this.parent.ysk()) {
                    b = c.dpg
                } else {
                    b = c.itr
                }
            } else {
                if (kdn.qwt.value57 === kdn.ui.vtq || this.ulp()) {
                    if (!this.parent.ysk()) {
                        b = c.jpt
                    } else {
                        b = c.yek
                    }
                } else {
                    if (kdn.qwt.value57 === kdn.ui.ejz) {
                        if (!this.parent.ysk()) {
                            b = c.zpo
                        } else {
                            b = c.dah
                        }
                    } else {
                        if (kdn.qwt.value57 === kdn.ui.rub) {
                            if (!this.parent.ysk()) {
                                b = c.dtg
                            } else {
                                b = c.gdf
                            }
                        }
                    }
                }
            }
        }
        if (this.parent.wte() != null) {
            if (this.parent.xhi() === true) {
                if (this.parent.wte().o == true || this.parent.style.uay.bap == false) {
                    this.wvx.udd("start", this.lzp(b.hml, (this.parent.hhw.ofp === false) ? this.parent.language.start : null, (this.parent.hhw.ofp === false) ? "---" : "A", (this.parent.hhw.ofp === false) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_sp"), null, this.xuc, (!this.parent.vks) ? this.parent.dnt.start : null, c.ory), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                } else {
                    this.wvx.udd("start", this.wqf(b.hml, (this.parent.hhw.ofp === false) ? this.parent.language.start : null, (this.parent.hhw.ofp === false) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_sp"), (this.parent.hhw.ofp === false) ? null : this.parent.eha.zgs("btn_sph"), this.parent.xxv, null, c.azj), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.wvx.udd("astart", this.lzp(b.fxb, null, (this.parent.hhw.ofp === false) ? "---" : "A", this.parent.eha.zgs("btn_astl"), null, this.parent.jty, null, c.rxb), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                }
            } else {
                this.wvx.udd("start", this.wqf(b.hml, (this.parent.hhw.ofp === false) ? this.parent.language.start : null, (this.parent.hhw.ofp === false) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_sp"), null, this.parent.xxv, (!this.parent.vks) ? this.parent.dnt.start : null, c.azj), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.wvx.udd("astart", this.lzp(b.fxb, this.parent.language.csu, (this.parent.hhw.ofp === false) ? "---" : "A", this.parent.eha.zgs("btn"), null, this.parent.jty, (!this.parent.vks) ? this.parent.dnt.djz : null, c.ory), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        } else {
            if (this.parent.xhi() === true) {
                if (this.parent.style.uay.bap) {
                    this.wvx.udd("start", this.wqf(b.hml, (this.parent.hhw.ofp === false) ? this.parent.language.start : null, (this.parent.hhw.ofp === false) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_sp"), (this.parent.hhw.ofp === false) ? null : this.parent.eha.zgs("btn_sph"), this.parent.xxv, null, c.azj), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.wvx.udd("astart", this.wqf(b.fxb, null, this.parent.eha.zgs("btn_ast"), null, this.parent.jty, null, c.rxb), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                } else {
                    this.wvx.udd("start", this.wqf(b.hml, (this.parent.hhw.ofp === false) ? this.parent.language.start : null, (this.parent.hhw.ofp === false) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_asp"), (this.parent.hhw.ofp === false) ? null : this.parent.eha.zgs("btn_asph"), this.xuc, null, c.azj), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                }
            } else {
                this.wvx.udd("start", this.wqf(b.hml, (this.parent.hhw.ofp === false) ? this.parent.language.start : null, (this.parent.hhw.ofp === false) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_asp"), (this.parent.hhw.ofp === false) ? null : this.parent.eha.zgs("btn_asph"), this.parent.xxv, (!this.parent.vks) ? this.parent.dnt.start : null, c.azj), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.wvx.udd("astart", this.wqf(b.fxb, this.parent.language.djz, (kdn.qwt.value57 === kdn.ui.vtq || this.ulp()) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_s"), null, this.parent.jty, (!this.parent.vks) ? this.parent.dnt.djz : null, c.rxb), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        }
        if (this.parent.xhi() === true) {
            this.wvx.udd("bet", this.hpr(b.tvx, "+", null, this.parent.mrf, (!this.parent.vks) ? this.parent.dnt.meg : null, c.vic), ["buttons", "allbuttons"])
        } else {
            this.wvx.udd("bet", this.wqf(b.tvx, this.parent.language.dub, this.parent.eha.zgs("btn_s"), null, this.parent.mrf, (!this.parent.vks) ? this.parent.dnt.meg : null, c.rxb), ["buttons", "allbuttons"])
        }
        this.wvx.gfj("bet").ngo = 300;
        this.wvx.udd("gamble", this.wqf(b.ato, this.parent.language.iqc, this.parent.eha.zgs("btn_s"), null, this.parent.tfl, (!this.parent.vks) ? this.parent.dnt.iqc : null, c.rxb), ["buttons", "allbuttons", "game", "auto", "collect"]);
        if (this.parent.wte() != null) {
            if (sessionStorage.sessionValue5 != null) {
                this.wvx.udd("exit", this.wqf(b.lar, (this.parent.hhw.ofp === true) ? null : (kdn.qwt.value50.g === true) ? this.parent.language.aem : this.parent.language.tyu, (this.parent.hhw.ofp === false) ? this.parent.eha.zgs("btn_s") : this.parent.eha.zgs("btn_e"), null, this.parent.qar, (!this.parent.vks) ? this.parent.dnt.xdp : null, c.rxb), ["buttons", "allbuttons", "collect"])
            } else {
                if (this.parent.xhi() === false) {
                    this.wvx.udd("help", this.wqf(b.lar, (this.parent.hhw.ofp === true) ? null : this.parent.language.ajq, this.parent.eha.zgs("btn_s"), null, this.parent.lvx, (!this.parent.vks) ? this.parent.dnt.dka : null, c.rxb), ["buttons", "allbuttons"])
                }
            }
        } else {
            if (kdn.qwt.value57 !== kdn.ui.rub) {
                if (sessionStorage.sessionValue5 != null) {
                    this.wvx.udd("exit", this.wqf(b.lar, (this.parent.hhw.ofp === true) ? null : (kdn.qwt.value50.g === true) ? this.parent.language.aem : this.parent.language.tyu, (this.parent.hhw.ofp === false) ? this.parent.eha.zgs("btn_s") : this.parent.eha.zgs("btn_e"), null, this.parent.qar, (!this.parent.vks) ? this.parent.dnt.xdp : null, c.rxb), ["buttons", "allbuttons", "collect"])
                } else {
                    if (this.parent.xhi() === false) {
                        this.wvx.udd("help", this.wqf(b.lar, (this.parent.hhw.ofp === true) ? null : this.parent.language.ajq, this.parent.eha.zgs("btn_s"), null, this.parent.lvx, (!this.parent.vks) ? this.parent.dnt.dka : null, c.rxb), ["buttons", "allbuttons"])
                    }
                }
            }
            if (kdn.qwt.value57 !== kdn.ui.vtq && !this.ulp() && this.parent.wte() == null) {
                this.wvx.udd("lang", this.uhh(b.xbx, this.parent.vnq(sessionStorage.sessionValue1), this.parent.ghr, (!this.parent.vks) ? this.parent.dnt.language : null), ["buttons", "allbuttons"])
            }
        }
        if (this.parent.ysk()) {
            this.wvx.udd("line", this.wqf(b.ikf, this.parent.language.cpa, this.parent.eha.zgs("btn_s"), null, this.parent.hpp, (!this.parent.vks) ? this.parent.dnt.vag : null, c.rxb), ["buttons", "allbuttons"]);
            this.wvx.gfj("line").ngo = 300
        }
        this.wvx.udd("setting", this.wqf(b.ank, null, this.parent.eha.zgs("btn_m"), null, this.parent.czr, null, c.rxb), ["buttons", "settings"])
    };
    this.fhe = function (c) {
        var b = null;
        if (!(this.parent.vks && this.parent.jpq) && this.parent.style.uay.amj === false) {
            b = this.parent.eha.zgs("display_effect")
        }
        if (this.parent.xhi() === true) {
            this.wvx.udd("betpopup", this.ylb(c.qzr, "", "", null, c.mkt), ["displays"]);
            this.wvx.qex("betpopup", "#dft", [false])
        }
        this.wvx.udd("creditd", this.ylb(c.xuz, (this.parent.apz()) ? this.parent.language.qfy : this.parent.language.blh, this.parent.zre(this.parent.blh), b, c.display), ["displays"]);
        this.wvx.udd("betd", this.ylb(c.did, this.parent.language.dub, this.parent.zre(this.parent.totalBet), b, c.display), ["displays"]);
        this.wvx.udd("idd", this.ylb(c.fdg, null, (this.parent.apz() === true) ? this.parent.language.qfy : " " + ((this.parent.hej > 0) ? this.parent.hej : ""), null, c.zev), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || kdn.qwt.value49) {
            this.wvx.udd("timed", this.ylb(c.xhf, null, "", null, c.zev), ["displays"])
        }
    };
    this.yuo = function () {
        if (this.quj == 1) {
            this.lkn(this.bgg)
        } else {
            if (this.quj == 2) {
                this.gmm(this.bgg)
            } else {
                if (this.quj == 3) {
                    this.nfa(this.bgg)
                } else {
                    if (this.quj == 4) {
                        this.voo(this.bgg)
                    } else {
                        if (this.quj == 5) {
                            this.jbk(this.bgg)
                        } else {
                            if (this.quj == 6) {
                                this.inp(this.bgg)
                            } else {
                                if (this.quj == 7) {
                                    this.wtq(this.bgg)
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.lkn = function (d) {
        var c = this.wvx.wrb("allbuttons"),
            e = 0,
            b = 0;
        this.bgg = d;
        this.quj = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].wfx(d)
        }
    };
    this.gmm = function (d) {
        var c = this.wvx.wrb("allbuttons"),
            f = this.wvx.wrb("start"),
            e = 0,
            b = 0;
        this.bgg = d;
        this.quj = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].wfx(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].wfx(d)
        }
    };
    this.nfa = function (d) {
        var c = this.wvx.wrb("allbuttons"),
            f = this.wvx.wrb("game"),
            e = 0,
            b = 0;
        this.bgg = d;
        this.quj = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].wfx(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].wfx(d)
        }
    };
    this.voo = function (d) {
        var c = this.wvx.wrb("allbuttons"),
            f = (this.ljj === true) ? this.wvx.wrb("collect") : this.wvx.wrb("game"),
            e = 0,
            b = 0;
        this.bgg = d;
        this.quj = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].wfx(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].wfx(d)
        }
    };
    this.wtq = function (d) {
        var b = this.wvx.wrb("allbuttons"),
            c = this.wvx.wrb("auto");
        i = 0, bzo = 0;
        this.bgg = d;
        this.quj = 7;
        for (i = 0, bzo = b.length; i < bzo; i++) {
            b[i].wfx(false)
        }
        for (i = 0, bzo = c.length; i < bzo; i++) {
            c[i].wfx(d)
        }
    };
    this.jbk = function (c) {
        var b = this.wvx.wrb("allbuttons"),
            d = this.wvx.wrb("freespin");
        i = 0, bzo = 0;
        this.bgg = c;
        this.quj = 5;
        for (i = 0, bzo = b.length; i < bzo; i++) {
            b[i].wfx(false)
        }
        for (i = 0, bzo = d.length; i < bzo; i++) {
            d[i].wfx(c)
        }
    };
    this.inp = function (e) {
        var c = this.wvx.wrb("allbuttons"),
            d = this.wvx.wrb("settings"),
            f = 0,
            b = 0;
        this.bgg = e;
        this.quj = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].wfx(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].wfx(e)
        }
    };
    this.ylb = function (c, g, f, e, b) {
        var d = new asq();
        d.cjm(c, this.context2D, null, g, f);
        d.parent = this;
        d.ldi = e;
        d.tqi(b);
        return d
    };
    this.wqf = function (f, k, j, b, g, d, e) {
        var c = new twa();
        c.cjm(f, this.context2D, null, j, b, k);
        c.parent = this;
        c.mik = g;
        c.tqi(e);
        if (d) {
            c.vrv = d.pdi
        }
        return c
    };
    this.lzp = function (f, k, g, b, l, c, j, e) {
        var d = new twa();
        d.cjm(f, this.context2D, null, b, l, k);
        d.parent = this;
        d.mik = c;
        d.value = g;
        d.tqi(e);
        if (j) {
            d.vrv = j.pdi
        }
        return d
    };
    this.hpr = function (e, j, g, f, c, d) {
        var b = new lzs();
        b.cjm(e, this.context2D, null, g, j);
        b.parent = this;
        b.mik = f;
        b.tqi(d);
        if (c) {
            b.vrv = c.pdi
        }
        return b
    };
    this.uhh = function (d, f, e, c) {
        var b = new sir();
        b.cjm(d, this.context2D, null, f, null);
        b.parent = this;
        b.mik = e;
        if (c) {
            b.vrv = c.pdi
        }
        return b
    };
    this.zkb = function (b) {
        var c = new xwk();
        c.cjm(b, this.context2D);
        c.parent = this;
        return c
    };
    this.ulp = function () {
        return (this.parent.pfy > 0 && this.parent.bcw < this.parent.pfy)
    };
    this.hji = function (c, b) {
        var d = this.wvx.gfj("info");
        if (d) {
            d.wkj(b);
            d.ehp(c, b)
        }
    };
    this.stop = function () {
        clearInterval(this.rrl)
    };
    this.cfy = function (b, c, d) {
        this.qkv = b;
        this.qly = c;
        this.ulj = d
    };
    this.zwp = function (m, j, n, f) {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var c = (m != null && j != null && n != null && f != null),
            k = (c === true) ? new bzm(m, j, n, f) : new bzm(this.x, this.y, this.width, this.height),
            o = this.context2D,
            b = this.wvx.mpl();
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
        if (this.qkv != null) {
            if (this.parent.evj === kdn.hhw.mgr) {
                o.drawImage(this.qkv, this.x + this.msl.x + this.qly, this.y + this.msl.y + this.ulj, this.msl.width, this.qkv.height - (this.y + this.msl.y + this.ulj), this.msl.x, this.msl.y, this.msl.width, this.msl.height)
            } else {
                o.drawImage(this.qkv, this.x + this.msl.x + this.qly, this.y + this.msl.y + this.ulj, this.msl.width, this.msl.height, this.msl.x, this.msl.y, this.msl.width, this.msl.height)
            }
            if (this.qno && this.qno.width > 0 && this.qno.height > 0) {
                o.drawImage(this.qkv, this.x + this.qno.x + this.qly, this.y + this.qno.y + this.ulj, this.qno.width, this.qno.height, this.qno.x, this.qno.y, this.qno.width, this.qno.height)
            }
        }
        if (this.qno && this.qno.width > 0 && this.qno.height > 0 && this.parent.hhw.ibz === false) {
            var l = o.createLinearGradient(this.qno.x, this.qno.y, this.qno.x + this.qno.width, this.qno.y),
                e = this.parent.eha.zgs("btn_back");
            l.addColorStop(0.2, this.mpo);
            l.addColorStop(1, this.zyo);
            o.fillStyle = l;
            if (this.parent.evj === kdn.hhw.yjt) {
                o.fillRect(this.qno.x, this.qno.y, this.qno.width, this.qno.height);
                if (e) {
                    o.drawImage(e, this.qno.x, this.qno.y, this.qno.width, this.qno.height)
                }
            } else {
                if (this.parent.evj === kdn.hhw.ssg) {
                    o.save();
                    o.translate(this.qno.width / 2, this.qno.height / 2);
                    o.rotate(Math.PI);
                    o.translate(-this.qno.width / 2, -this.qno.height / 2);
                    o.fillRect(this.qno.x, this.qno.y, this.qno.width, this.qno.height);
                    if (e) {
                        o.drawImage(e, this.qno.x, this.qno.y, this.qno.width, this.qno.height)
                    }
                    o.restore()
                }
            }
        }
        for (var d = 0, g = b.length; d < g; d++) {
            b[d].zwp()
        }
        if (this.parent.aqc === true && !(this.parent.xhi() === true && this.parent.hhw.ibz === false)) {
            this.parent.teg(o, k)
        }
        o.restore();
        if (this.vtx && this.saw) {
            if (c) {
                this.vtx.drawImage(this.saw, m, j, n, f, this.x + m, this.y + j, n, f)
            } else {
                this.vtx.drawImage(this.saw, this.x, this.y)
            }
        }
    };
    this.xuc = function () {
        if (a.parent.djz === true) {
            a.zwn()
        } else {
            a.parent.xxv();
            if (a.parent.brd() === true) {
                a.wvx.qex("start", "#ayn", [a.snz]);
                a.lrb = setTimeout(a.zwn, a.snz)
            }
        }
    };
    this.zwn = function () {
        a.parent.jty();
        if (a.parent.djz === true) {
            a.wvx.qex("start", "#hru")
        } else {
            a.wvx.qex("start", "#pad")
        }
    }
}
ckw.prototype = new yos;

function fhy(e, b, a, c, d) {
    this.sde = {
        x: e.x || 0,
        y: e.y || 0
    };
    this.csl = b;
    this.bzq = 0;
    this.xqd = 21;
    this.cjo = a;
    this.jdp = c || 0;
    this.rew = d || 0;
    this.yje = 100;
    this.xqa = 96;
    this.wye = function () {
        if (this.bzq < this.xqd) {
            this.bzq++
        }
        return (this.bzq >= this.xqd)
    };
    this.zwp = function () {
        a.drawImage(this.csl, this.bzq * this.yje, 0, this.yje, this.xqa, this.sde.x, this.sde.y, this.jdp, this.rew)
    }
}

function gwp() {
    this.ijf = false;
    this.sxv = false;
    this.xdy = false;
    this.xju = [];
    this.uqq = [];
    this.lpk = [];
    this.tsu = [];
    this.ers = [];
    this.ent = 89;
    this.coo = 400;
    this.ztb = 3;
    this.font = "arial";
    this.zde = "bold";
    this.aas = true;
    this.eip = true;
    this.gaq = null;
    this.jzj = false;
    this.ovo = [];
    this.twv = 0;
    this.cvn = false;
    this.ffw = false;
    this.iej = 0;
    this.bys = 0;
    this.ack = false;
    this.bpz = true;
    this.cir = false;
    this.ruv = false;
    this.xae = 0;
    this.con = 0;
    this.ovd = [];
    this.rau = false;
    this.qhp = 0;
    this.ikd = 0;
    this.rgp = 0;
    this.gwg = -1;
    this.gvj = 0;
    this.fzu = 0;
    this.rjs = true;
    this.wcd = null;
    this.mmz = [];
    this.bvj = [];
    this.mbp = null;
    this.pnt = null;
    this.mpj = 0;
    this.yii = null;
    this.fwr = null;
    this.mnt = null;
    this.pux = null;
    this.jsv = 0.05;
    this.evz = 4;
    this.tkj = 5;
    this.asf = 1;
    this.mfs = 0;
    this.ccn = 0;
    this.msb = 40;
    this.jqv = 12;
    this.iyc = 5;
    this.zus = 0;
    this.hfv = 100;
    this.dts = 96;
    this.qkv = null;
    this.qly = 0;
    this.ulj = 0;
    this.uiq = 0;
    this.pwk = new bzm();
    this.qgm = [];
    this.gqb = 3;
    this.ssq = 6;
    this.qrf = 0;
    this.fvz = new bzm(0, 0, 920, 160);
    this.bph = [0, 515, 405];
    this.suv = 40;
    this.tjc = new bzm(0, 165, 920, 160);
    this.xpw = [0, 330, 420];
    this.tgs = 40;
    this.lsb = new bzm(0, 330, 920, 160);
    this.phi = [0, 440, 415];
    this.gvn = 20;
    this.bsg = function () {};
    this.qen = function () {};
    this.fdj = function () {};
    this.yuj = function () {};
    this.cxf = function () {};
    this.bxk = function () {};
    this.tqi = function (a) {
        try {
            this.evz = a.lineWidth;
            this.tkj = a.wdh;
            this.asf = a.dmp;
            this.mfs = a.ghj;
            this.ccn = a.ahd;
            this.msb = a.fontSize;
            this.jqv = a.szo;
            this.iyc = a.lqe;
            this.hfv = a.uxk;
            this.dts = a.ble
        } catch (b) {
            console.error(b)
        }
    };
    this.idh = function (a) {
        try {
            this.bvj = a.zsr;
            this.mpj = a.dxy;
            this.yii = a.dzi;
            this.fwr = a.gog;
            this.mnt = a.mmw;
            this.pux = a.oyb;
            this.jsv = a.etb
        } catch (b) {
            console.error(b)
        }
    };
    this.olx = function () {
        this.xdy = false;
        this.dft(true)
    };
    this.xwd = function () {
        this.xdy = false;
        this.dft(false, true)
    };
    this.sip = function () {
        return this.jzj
    };
    this.ipl = function (d, b) {
        if (d && b) {
            this.ovo = b;
            this.wcd = [];
            for (var c = 0, a = d.length; c < a; c++) {
                this.wcd[c] = d[c]
            }
            if (this.eip) {
                this.parent.eha.xuk("winline");
                this.parent.eha.mtk("winline")
            }
        } else {
            this.wcd = null
        }
        this.jzj = false;
        this.cir = false;
        this.ruv = false;
        this.xdy = true;
        this.dft(true, true)
    };
    this.start = function () {
        this.jzj = true;
        this.cir = true;
        this.ruv = false;
        if (!this.cvn) {
            this.qhp = 0
        } else {
            if (this.qhp >= this.rgp) {
                this.qhp = 0
            }
        }
        this.bpz = true;
        this.parent.tot = false;
        this.ffw = (this.parent.ymh >= (this.parent.snu - 1));
        if (this.cvn && this.eip) {
            if (!this.parent.ciy && this.parent.tbc) {
                this.parent.eha.xuk("winline");
                this.parent.eha.mtk("winline")
            }
        }
        this.bsg()
    };
    this.stop = function () {
        this.jzj = false;
        this.cir = false;
        this.aom();
        clearInterval(this.iej);
        clearTimeout(this.bys);
        clearTimeout(this.parent.xng)
    };
    this.cyy = function (d, c, a, f, j, e, b, g) {
        if (this.xdy) {
            this.xdy = false;
            this.parent.zwp()
        }
        this.gwg = f;
        this.twv = d;
        this.ovo = c;
        this.fzu = j;
        this.gvj = e;
        this.rjs = a;
        this.cvn = g;
        if (b) {
            this.orb()
        } else {
            this.zrn()
        }
    };
    this.orb = function () {
        this.gxc();
        this.start()
    };
    this.zrn = function () {
        this.jzj = true;
        this.cir = true;
        this.bpz = false;
        this.ruv = this.aas;
        this.aom();
        if (!this.parent.ciy && this.eip) {
            this.parent.eha.xuk("winline");
            this.parent.eha.mtk("winline")
        }
        this.zwp();
        this.fdj()
    };
    this.mly = function () {
        if (this.rau) {
            this.xae++;
            if (this.xae == 6 || this.xae == 10 || this.xae == 15 || (this.parent.nms == 2 && (this.xae == 48 || this.xae == 55 || this.xae == 64))) {
                this.jba()
            }
            for (var a = this.ovd.length - 1; a >= 0; a--) {
                if (this.ovd[a].wye()) {
                    this.ovd.shift()
                }
            }
        }
        if (this.aas) {
            if (this.cvn) {
                this.ruv = true
            } else {
                if ((this.qhp % 3) == 0) {
                    this.ruv = !this.ruv
                }
            }
        }
        if (((!this.cvn || this.ffw) && this.qhp < this.rgp)) {
            this.parent.zwp();
            this.qhp++;
            if (this.cvn) {
                this.ikd++
            }
        } else {
            if (this.cvn && !this.ffw && this.ikd < this.ztb) {
                this.parent.zwp();
                this.ikd++;
                this.qhp = (this.qhp < this.rgp) ? this.qhp + 1 : 0
            } else {
                this.ikd = 0;
                clearInterval(this.iej);
                this.chv()
            }
        }
    };
    this.chv = function () {
        this.jzj = false;
        this.cir = (this.ijf && this.bpz);
        if (this.cir == true && this.ffw == true && this.parent.ciy == false && this.parent.djz == true) {
            this.cir = false
        }
        if (!this.cvn || this.ffw) {
            if (!(this.sxv && this.ijf) && !this.rau) {
                this.xwd()
            }
        }
        this.parent.zwp();
        this.parent.rga();
        this.parent.jhb();
        this.parent.bpm()
    };
    this.gxc = function () {
        this.rgp = 0;
        for (var a = 0; a < this.ovo.length; a++) {
            for (var b = 0; b < this.ovo[a].length; b++) {
                if (this.ovo[a][b] >= 0) {
                    if (this.xju[this.ovo[a][b]].xqd > this.rgp) {
                        this.rgp = this.xju[this.ovo[a][b]].xqd
                    }
                }
            }
        }
    };
    this.ovy = function () {
        if (this.fww()) {
            this.ovd = [];
            this.rau = true;
            this.xae = 0
        }
    };
    this.qdv = function () {
        this.xae = 0
    };
    this.aom = function () {
        this.rau = false
    };
    this.jba = function () {
        var e = (Math.random() > 0.7) ? 4 : 3,
            d = this.hfv * e,
            g = this.dts * e,
            a = Math.random();
        while (Math.abs(a - this.con) < 0.3) {
            a = Math.random()
        }
        this.con = a;
        var f = Math.round(a * (this.width - d));
        a = Math.random();
        var c = Math.round(a * (this.height - g));
        var b = new fhy({
            x: f,
            y: c
        }, this.parent.eha.zgs("firework"), this.context2D, d, g);
        this.ovd.push(b)
    };
    this.lee = function (b) {
        this.ack = true;
        this.qhp = 0;
        this.uiq = b;
        if (this.uiq >= this.parent.haw) {
            this.pwk = this.fvz;
            for (var c = 0, a = this.bph.length; c < a; c++) {
                this.qgm[c] = this.bph[c]
            }
            this.parent.eha.mtk("megawin");
            this.parent.boj(48);
            this.rgp = this.suv
        } else {
            if (this.uiq >= this.parent.qqy) {
                this.pwk = this.tjc;
                for (var c = 0, a = this.xpw.length; c < a; c++) {
                    this.qgm[c] = this.xpw[c]
                }
                this.parent.eha.mtk("bigwin");
                this.parent.boj(48);
                this.rgp = this.tgs
            } else {
                if (this.uiq >= this.parent.kov) {
                    this.pwk = this.lsb;
                    for (var c = 0, a = this.phi.length; c < a; c++) {
                        this.qgm[c] = this.phi[c]
                    }
                    this.parent.eha.mtk("nicewin");
                    this.parent.boj(24);
                    this.rgp = this.gvn
                }
            }
        }
        this.rgp += (this.qgm.length - 1) * this.ssq;
        this.qrf = 0;
        this.parent.jnj(true);
        this.cxf()
    };
    this.pcp = function () {
        this.ack = false;
        clearInterval(this.iej);
        if (this.uiq >= this.parent.haw) {
            this.parent.eha.xuk("megawin")
        } else {
            if (this.uiq >= this.parent.qqy) {
                this.parent.eha.xuk("bigwin")
            } else {
                if (this.uiq >= this.parent.kov) {
                    this.parent.eha.xuk("nicewin")
                }
            }
        }
        this.xwd();
        this.parent.jnj(false);
        this.parent.rur()
    };
    this.cfy = function (a, b, c) {
        this.qkv = a;
        this.qly = b;
        this.ulj = c
    };
    this.zwp = function () {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var d = this.context2D;
        d.save();
        d.clearRect(0, 0, this.width, this.height);
        d.lineWidth = this.evz;
        d.lineCap = "round";
        d.lineJoin = "round";
        if (this.xdy) {
            this.tfi()
        }
        if (this.cir) {
            if (this.jzj && this.ijf && this.rjs) {
                for (var b = 0; b < this.ovo.length; b++) {
                    for (var f = 0; f < this.ovo[b].length; f++) {
                        if (this.ovo[b][f] != -1) {
                            if (this.bpz) {
                                this.cet(b, f)
                            } else {
                                this.shv(b, f)
                            }
                        }
                    }
                }
                if (this.rjs) {
                    this.ido(this.twv)
                }
                for (var c = this.fzu; c < this.fzu + this.gvj; c++) {
                    if (this.gwg >= 0 && (this.ovo[c][this.ers[this.twv][c] - 1] == this.gwg || this.parent.pvu(this.ovo[c][this.ers[this.twv][c] - 1]))) {
                        if (this.bpz) {
                            this.cet(c, this.ers[this.twv][c] - 1)
                        } else {
                            this.shv(c, this.ers[this.twv][c] - 1)
                        }
                    }
                }
            } else {
                if (this.jzj && this.rjs) {
                    this.ido(this.twv)
                }
                for (var b = 0; b < this.ovo.length; b++) {
                    for (var f = 0; f < this.ovo[b].length; f++) {
                        if (this.ovo[b][f] != -1) {
                            if (this.bpz) {
                                this.cet(b, f)
                            } else {
                                this.shv(b, f)
                            }
                        }
                    }
                }
            }
            if (this.gaq) {
                for (var b = 0; b < this.ovo.length; b++) {
                    for (var f = 0; f < this.ovo[b].length; f++) {
                        if (this.ovo[b][f] != -1) {
                            d.drawImage(this.gaq, 0, f * this.ccn, this.gaq.width, this.ccn, this.lpk[b][f].x, this.lpk[b][f].y, this.mfs, this.ccn)
                        }
                    }
                }
            }
            if (this.jzj) {
                if (this.twv < 0) {
                    if (this.bvj[this.bvj.length - 2]) {
                        for (var b = 0; b < this.ovo.length; b++) {
                            for (var f = 0; f < this.ovo[b].length; f++) {
                                if (this.parent.xqm >= 0 && this.ovo[b][f] == this.parent.xqm) {
                                    this.eys(b, f, this.bvj[this.bvj.length - 2])
                                }
                            }
                        }
                    }
                } else {
                    for (var c = this.fzu; c < this.fzu + this.gvj; c++) {
                        if (this.gwg >= 0 && (this.ovo[c][this.ers[this.twv][c] - 1] == this.gwg || this.parent.pvu(this.ovo[c][this.ers[this.twv][c] - 1]))) {
                            this.eys(c, this.ers[this.twv][c] - 1, this.bvj[this.twv])
                        }
                    }
                }
            }
            if (this.rau) {
                for (var e = 0, a = this.ovd.length; e < a; e++) {
                    this.ovd[e].zwp()
                }
            }
        } else {
            if (this.ack) {
                this.vnm()
            }
        }
        d.restore();
        if (this.parent.syf()) {
            if (this.vtx && this.saw) {
                this.vtx.drawImage(this.saw, this.x, this.y)
            }
        }
    };
    this.vnm = function () {
        var l = this.context2D,
            f = this.parent.eha.zgs("wins"),
            b = (this.height / 2 - this.pwk.height) / 2,
            g = this.qgm[0],
            a = this.qhp % this.ssq,
            k = (a < this.gqb) ? Math.floor(this.qgm[this.qrf + 1] / this.gqb) * a : this.qgm[this.qrf + 1],
            j = (a < this.gqb) ? Math.floor(this.pwk.height / this.gqb) * a : this.pwk.height,
            c = 1,
            e = 5;
        l.save();
        if (this.qhp >= this.rgp - e) {
            c = (this.rgp - this.qhp) * (1 / e)
        }
        l.globalAlpha = c;
        for (var d = 0; d <= this.qrf && d < this.qgm.length - 1; d++) {
            if (d == this.qgm.length - 2) {
                b += this.height / 2
            }
            if (d == this.qrf) {
                l.drawImage(f, g, this.pwk.y, this.qgm[d + 1], this.pwk.height, ((this.width - this.qgm[d + 1]) / 2 + (this.qgm[d + 1] - k) / 2), (b + (this.pwk.height - j) / 2), k, j)
            } else {
                l.drawImage(f, g, this.pwk.y, this.qgm[d + 1], this.pwk.height, (this.width - this.qgm[d + 1]) / 2, b, this.qgm[d + 1], this.pwk.height)
            }
            g += this.qgm[d + 1]
        }
        l.restore()
    };
    this.tfi = function () {
        if (this.wcd) {
            this.mmz = [];
            for (var b = 0; b < this.ovo.length; b++) {
                for (var d = 0; d < this.ovo[b].length; d++) {
                    if (this.ovo[b][d] != -1) {
                        this.shv(b, d);
                        if (this.gaq) {
                            this.context2D.drawImage(this.gaq, 0, d * this.ccn, this.gaq.width, this.ccn, this.lpk[b][d].x, this.lpk[b][d].y, this.mfs, this.ccn)
                        }
                    }
                }
            }
            for (var c = 0, a = this.wcd.length; c < a; c++) {
                this.owe(this.wcd[c])
            }
        } else {
            for (var c = 0; c < this.parent.cpa; c++) {
                this.ido(c)
            }
        }
    };
    this.ido = function (c) {
        var a = this.context2D;
        a.save();
        a.strokeStyle = (this.ruv) ? this.bvj[c].ipg : this.bvj[c].aww;
        a.lineWidth = this.evz;
        a.beginPath();
        for (var b = 0; b < this.tsu[c].length; b++) {
            if (b == 0) {
                a.moveTo(this.tsu[c][b].x, this.tsu[c][b].y)
            } else {
                a.lineTo(this.tsu[c][b].x, this.tsu[c][b].y)
            }
        }
        a.moveTo(this.tsu[c][0].x, this.tsu[c][0].y);
        a.stroke();
        a.strokeStyle = (this.ruv) ? this.bvj[c].cxd : this.bvj[c].jdy;
        a.lineWidth = this.evz - 2 * this.asf;
        a.stroke();
        a.restore()
    };
    this.owe = function (d) {
        var a = this.context2D,
            c = null;
        a.save();
        for (var b = 1; b < this.tsu[d].length; b++) {
            c = this.tsu[d][b - 1].x + "_" + this.tsu[d][b - 1].y + "_" + this.tsu[d][b].x + "_" + this.tsu[d][b].y;
            if (this.mmz.indexOf(c) < 0) {
                this.mmz.push(c);
                a.beginPath();
                a.moveTo(this.tsu[d][b - 1].x, this.tsu[d][b - 1].y);
                a.lineTo(this.tsu[d][b].x, this.tsu[d][b].y);
                a.moveTo(this.tsu[d][b - 1].x, this.tsu[d][b - 1].y);
                a.strokeStyle = (this.ruv) ? this.bvj[this.bvj.length - 1].ipg : this.bvj[this.bvj.length - 1].aww;
                a.lineWidth = this.evz;
                a.stroke();
                a.strokeStyle = (this.ruv) ? this.bvj[this.bvj.length - 1].cxd : this.bvj[this.bvj.length - 1].jdy;
                a.lineWidth = this.evz - 2 * this.asf;
                a.stroke()
            }
        }
        a.restore()
    };
    this.cet = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.qkv != null) {
            this.context2D.drawImage(this.qkv, this.lpk[a][c].x + this.qly, this.lpk[a][c].y + this.ulj, this.mfs, this.ccn, this.lpk[a][c].x, this.lpk[a][c].y, this.mfs, this.ccn)
        }
        if (this.xju[this.ovo[a][c]].xqd <= this.qhp) {
            b.drawImage(this.xju[this.ovo[a][c]].csl, (this.xju[this.ovo[a][c]].xqd - 1) * this.xju[this.ovo[a][c]].rtq, 0, this.xju[this.ovo[a][c]].rtq, this.xju[this.ovo[a][c]].wct, this.lpk[a][c].x + (this.mfs - this.xju[this.ovo[a][c]].rtq) / 2, this.lpk[a][c].y + (this.ccn - this.xju[this.ovo[a][c]].wct) / 2, this.xju[this.ovo[a][c]].rtq, this.xju[this.ovo[a][c]].wct)
        } else {
            b.drawImage(this.xju[this.ovo[a][c]].csl, this.qhp * this.xju[this.ovo[a][c]].rtq, 0, this.xju[this.ovo[a][c]].rtq, this.xju[this.ovo[a][c]].wct, this.lpk[a][c].x + (this.mfs - this.xju[this.ovo[a][c]].rtq) / 2, this.lpk[a][c].y + (this.ccn - this.xju[this.ovo[a][c]].wct) / 2, this.xju[this.ovo[a][c]].rtq, this.xju[this.ovo[a][c]].wct)
        }
        b.restore()
    };
    this.shv = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.qkv != null) {
            this.context2D.drawImage(this.qkv, this.lpk[a][c].x + this.qly, this.lpk[a][c].y + this.ulj, this.mfs, this.ccn, this.lpk[a][c].x, this.lpk[a][c].y, this.mfs, this.ccn)
        }
        b.drawImage(this.uqq[this.ovo[a][c]], this.lpk[a][c].x + (this.mfs - this.uqq[this.ovo[a][c]].width) / 2, this.lpk[a][c].y + (this.ccn - this.uqq[this.ovo[a][c]].height) / 2);
        b.restore()
    };
    this.eys = function (a, d, c) {
        var b = this.context2D;
        b.save();
        if (c) {
            b.lineWidth = this.tkj;
            b.strokeStyle = (this.ruv) ? c.ipg : c.aww;
            b.strokeRect(this.lpk[a][d].x + this.tkj / 2, this.lpk[a][d].y + this.tkj / 2, this.mfs - this.tkj, this.ccn - this.tkj);
            b.strokeStyle = (this.ruv) ? c.cxd : c.jdy;
            b.lineWidth = this.tkj - 2 * this.asf;
            b.strokeRect(this.lpk[a][d].x + this.tkj / 2, this.lpk[a][d].y + this.tkj / 2, this.mfs - this.tkj, this.ccn - this.tkj)
        }
        b.restore()
    }
}
gwp.prototype = new yos;

function zic() {
    var a = this;
    this.bsg = function () {
        this.qen();
        this.iej = setInterval(a.qen, a.ent)
    };
    this.qen = function () {
        a.mly()
    };
    this.fdj = function () {
        this.bys = setTimeout(a.yuj, a.coo)
    };
    this.yuj = function () {
        a.chv()
    };
    this.cxf = function () {
        this.iej = setInterval(this.bxk, 60)
    };
    this.bxk = function () {
        if (a.qhp < a.rgp) {
            a.qhp++;
            if ((a.qhp % (a.ssq)) == 0) {
                a.qrf++
            }
            a.parent.zwp()
        } else {
            a.pcp()
        }
    }
}
zic.prototype = new gwp;

function inb() {
    var a = this;
    this.dab = 0;
    this.pwr = 1;
    this.kar = 7;
    this.rwy = 0;
    this.tfp = 0;
    this.aqo = 0;
    this.kwo = 0;
    this.uco = this.dab;
    this.ctl = this.umn;
    this.goz = function () {
        this.dft(true);
        this.rmu = true;
        this.bgg = false;
        this.uco = this.dab;
        this.tfp = Math.floor(this.width / this.kar);
        this.kwo = 0;
        this.aqo = 0
    };
    this.ldl = function () {
        this.rmu = true;
        this.bgg = false;
        this.uco = this.pwr;
        this.tfp = -Math.floor(this.width / this.kar);
        this.kwo = 1;
        this.aqo = this.width
    };
    this.sgd = function () {
        if (a.kwo < a.kar) {
            a.aqo += a.tfp;
            a.kwo++;
            return true
        } else {
            a.rmu = false;
            a.bgg = true;
            if (a.uco == a.pwr) {
                a.dft(false)
            }
            return false
        }
    };
    this.mtk = function () {
        if (this.uln == this.oyd) {
            this.parent.eha.mtk("maxstep")
        } else {
            this.parent.eha.mtk("step" + (this.uln % 12))
        }
    };
    this.gqq = function (b, d) {
        var c = false;
        this.uln = b;
        if (this.uln < this.kvr) {
            c = true;
            this.uln = this.kvr
        }
        if (this.uln >= this.oyd) {
            c = true;
            this.uln = this.oyd
        }
        this.pxl = this.uln + 1;
        if (c) {
            this.mik(this.uln)
        }
        if (d && d === true) {
            this.parent.zwp()
        }
    };
    this.xkj = function () {
        a.xxx = false
    };
    this.zwp = function () {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        this.hov();
        if (this.vtx && this.saw) {
            if (this.rmu) {
                if (this.aqo > 0) {
                    if (this.ctl === this.zgd) {
                        this.vtx.drawImage(this.saw, this.width - this.aqo, 0, this.aqo, this.height, this.x, this.y, this.aqo, this.height)
                    } else {
                        if (this.ctl === this.umn) {
                            this.vtx.drawImage(this.saw, 0, 0, this.aqo, this.height, this.x + this.width - this.aqo, this.y, this.aqo, this.height)
                        }
                    }
                }
            } else {
                this.vtx.drawImage(this.saw, this.x, this.y)
            }
        }
    };
    this.snt = function (c) {
        var f = this.luk,
            e = this.luk,
            b = 0,
            d = 0;
        if (this.ctl === this.umn) {
            b = this.gzo;
            d = this.htv.x - 2 * this.gzo
        } else {
            if (this.ctl === this.zgd) {
                b = this.htv.x + this.htv.width + this.gzo;
                d = this.width - this.gzo - (this.htv.x + this.htv.width + this.gzo)
            }
        }
        if (this.uln > 0 && this.uln < this.dse.length - 1) {
            kdn.lgy.eys(c, b, this.htv.y + ((this.rsd - this.pxl) * this.tai), d, this.tai, this.rqw, this.qep);
            kdn.lgy.xhg(c, this.parent.vey(this.dse[this.uln]), this.pnt, b, this.htv.y + ((this.rsd - this.pxl) * this.tai) + (this.tai - this.msb) / 2, d, this.msb, this.rcu, this.msb, this.uid, this.gzo)
        } else {
            if (this.uln == 0) {
                f = this.pnt
            } else {
                if (this.uln == this.dse.length - 1) {
                    e = this.pnt
                }
            }
        }
        kdn.lgy.eys(c, b, this.htv.y + (this.tai * (this.rsd - 1)), d, this.tai, this.rqw, this.qep);
        kdn.lgy.xhg(c, this.parent.vey(this.dse[0]), f, b, this.htv.y + (this.tai * (this.rsd - 1)) + (this.tai - this.msb) / 2, d, this.msb, this.rcu, this.msb, this.uid, this.gzo);
        kdn.lgy.eys(c, b, this.htv.y, d, this.tai, this.rqw, this.qep);
        kdn.lgy.xhg(c, this.parent.vey(this.dse[this.dse.length - 1]), e, b, this.htv.y + (this.tai - this.msb) / 2, d, this.msb, this.rcu, this.msb, this.uid, this.gzo);
        kdn.lgy.jnl(c, "+", this.luk, this.bxp.x, this.bxp.y, this.bxp.width, this.bxp.height, this.rcu, this.msb, this.uid);
        kdn.lgy.jnl(c, "", this.luk, this.vhm.x, this.vhm.y, this.vhm.width, this.vhm.height, this.rcu, this.msb, this.uid);
        if (this.wgw) {
            kdn.lgy.jnl(c, this.wgw, this.luk, this.gls.x, this.gls.y, this.gls.width, this.gls.height, this.rcu, this.msb, this.uid)
        }
    }
}
inb.prototype = new ngq;

function tfv() {
    var a = this;
    this.dab = 0;
    this.pwr = 1;
    this.kar = 7;
    this.rwy = 0;
    this.tfp = 0;
    this.aqo = 0;
    this.kwo = 0;
    this.uco = this.dab;
    this.goz = function () {
        this.dft(true);
        this.rmu = true;
        this.bgg = false;
        this.uco = this.dab;
        this.tfp = Math.floor(this.width / this.kar);
        this.kwo = 0;
        this.aqo = 0
    };
    this.ldl = function () {
        this.rmu = true;
        this.bgg = false;
        this.uco = this.pwr;
        this.tfp = -Math.floor(this.width / this.kar);
        this.kwo = 1;
        this.aqo = this.width
    };
    this.sgd = function () {
        if (a.kwo < a.kar) {
            a.aqo += a.tfp;
            a.kwo++;
            return true
        } else {
            a.rmu = false;
            a.bgg = true;
            if (a.uco == a.pwr) {
                a.dft(false)
            }
            return false
        }
    };
    this.mtk = function () {
        if (this.uln == this.oyd) {
            this.parent.eha.mtk("maxstep")
        } else {
            this.parent.eha.mtk("step" + (this.uln % 12))
        }
    };
    this.xkj = function () {
        a.xxx = false
    };
    this.zwp = function () {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        this.hov();
        if (this.vtx && this.saw) {
            if (this.rmu) {
                if (this.aqo > 0) {
                    if (this.ctl === this.zgd) {
                        this.vtx.drawImage(this.saw, this.width - this.aqo, 0, this.aqo, this.height, this.x, this.y, this.aqo, this.height)
                    } else {
                        if (this.ctl === this.umn) {
                            this.vtx.drawImage(this.saw, 0, 0, this.aqo, this.height, this.x + this.width - this.aqo, this.y, this.aqo, this.height)
                        }
                    }
                }
            } else {
                this.vtx.drawImage(this.saw, this.x, this.y)
            }
        }
    };
    this.snt = function (c) {
        var f = this.luk,
            e = this.luk,
            b = 0,
            d = 0;
        if (this.ctl === this.umn) {
            b = this.gzo;
            d = this.htv.x - 2 * this.gzo
        } else {
            if (this.ctl === this.zgd) {
                b = this.htv.x + this.htv.width + this.gzo;
                d = this.width - this.gzo - (this.htv.x + this.htv.width + this.gzo)
            }
        }
        if (this.uln > 0 && this.uln < this.dse.length - 1) {
            kdn.lgy.eys(c, b, this.htv.y + ((this.rsd - this.pxl) * this.tai), d, this.tai, this.rqw, this.qep);
            kdn.lgy.ufv(c, this.dse[this.uln], this.pnt, b, this.htv.y + ((this.rsd - this.pxl) * this.tai) + (this.tai - this.msb) / 2, d, this.msb, this.rcu, this.msb, this.uid, this.gzo)
        } else {
            if (this.uln == 0) {
                f = this.pnt
            } else {
                if (this.uln == this.dse.length - 1) {
                    e = this.pnt
                }
            }
        }
        kdn.lgy.eys(c, b, this.htv.y + (this.tai * (this.rsd - 1)), d, this.tai, this.rqw, this.qep);
        kdn.lgy.ufv(c, this.dse[0], f, b, this.htv.y + (this.tai * (this.rsd - 1)) + (this.tai - this.msb) / 2, d, this.msb, this.rcu, this.msb, this.uid, this.gzo);
        kdn.lgy.eys(c, b, this.htv.y, d, this.tai, this.rqw, this.qep);
        kdn.lgy.ufv(c, this.dse[this.dse.length - 1], e, b, this.htv.y + (this.tai - this.msb) / 2, d, this.msb, this.rcu, this.msb, this.uid, this.gzo);
        kdn.lgy.jnl(c, "+", this.luk, this.bxp.x, this.bxp.y, this.bxp.width, this.bxp.height, this.rcu, this.msb, this.uid);
        kdn.lgy.jnl(c, "", this.luk, this.vhm.x, this.vhm.y, this.vhm.width, this.vhm.height, this.rcu, this.msb, this.uid);
        if (this.wgw) {
            kdn.lgy.jnl(c, this.wgw, this.luk, this.gls.x, this.gls.y, this.gls.width, this.gls.height, this.rcu, this.msb, this.uid)
        }
    }
}
tfv.prototype = new ngq;

function twu() {
    this.ldi = new Image();
    this.dhv = [];
    this.str = 0;
    this.ynl = 0;
    this.lug = [];
    this.iim = 0;
    this.mbv = 0;
    this.abk = 0;
    this.thl = [];
    this.qkv = null;
    this.qly = 0;
    this.ulj = 0;
    this.tqi = function (a) {
        try {
            this.thl = a.ikf;
            this.mbv = a.yje;
            this.abk = a.xqa
        } catch (b) {
            console.error(b)
        }
    };
    this.dmk = function (b, f, c) {
        var e = this.parent.pgn.wvx.gfj("line"),
            a = this.parent.bew.gfj("betsel"),
            d = this.parent.bew.gfj("linesel");
        if (b >= this.x && b <= this.x + this.width && f >= this.y && f <= this.y + this.height && this.fww() === true) {
            if (e && e.ovk() && !e.jeb()) {
                if (!c) {
                    this.parent.eha.xuk("panel");
                    this.parent.eha.mtk("panel");
                    if ((a && a.ovk()) && ((d && d.ovk()) || !d)) {
                        this.parent.vwb()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.zwp = function () {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var c = this.context2D,
            e = false;
        if (this.qkv != null) {
            c.drawImage(this.qkv, this.x + this.qly, this.y + this.ulj, this.width, this.height, this.x, this.y, this.width, this.height)
        }
        if (this.lug.length > 0) {
            for (var f = this.str - 1, d = 0; f <= this.ynl - 1; f++, d++) {
                e = false;
                for (var b = 0, a = this.lug.length; b < a; b++) {
                    if (this.dhv[f] === this.lug[b]) {
                        e = true;
                        c.drawImage(this.ldi, 0, this.ldi.height / 2 + (this.dhv[f] - 1) * this.abk, this.mbv, this.abk, this.x, this.y + this.thl[d], this.mbv, this.abk)
                    }
                }
                if (e === false) {
                    c.drawImage(this.ldi, 0, (this.dhv[f] - 1) * this.abk, this.mbv, this.abk, this.x, this.y + this.thl[d], this.mbv, this.abk)
                }
            }
        } else {
            for (var f = this.str - 1, d = 0; f <= this.ynl - 1; f++, d++) {
                if (this.dhv[f] <= this.iim) {
                    c.drawImage(this.ldi, 0, this.ldi.height / 2 + (this.dhv[f] - 1) * this.abk, this.mbv, this.abk, this.x, this.y + this.thl[d], this.mbv, this.abk)
                } else {
                    c.drawImage(this.ldi, 0, (this.dhv[f] - 1) * this.abk, this.mbv, this.abk, this.x, this.y + this.thl[d], this.mbv, this.abk)
                }
            }
        }
    };
    this.aoh = function (a, b) {
        this.iim = a;
        if (b && b === true) {
            this.zwp()
        }
    };
    this.cxp = function (b, d) {
        this.lug = [];
        if (b) {
            for (var c = 0, a = b.length; c < a; c++) {
                this.lug[c] = b[c]
            }
        }
        if (d && d === true) {
            this.zwp()
        }
    };
    this.kdm = function (a) {
        this.ldi = a;
        this.width = this.mbv;
        this.height = this.thl[this.thl.length - 1] + this.abk;
        this.yai(new bzm(this.x, this.y, this.width, this.height))
    };
    this.cfy = function (a, b, c) {
        this.qkv = a;
        this.qly = b;
        this.ulj = c
    }
}
twu.prototype = new yos;

function nxj(g, c, f, e, j, a, d, b) {
    this.buu = g;
    this.cud = f;
    this.dkk = e;
    this.tfk = j;
    this.yfk = c;
    this.iix = a;
    this.lkw = d;
    this.jkg = b;
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
    this.ljr = [];
    this.lys = [];
    this.rak = [];
    this.szf = [];
    this.djs = [];
    this.xwm = [];
    this.vod = 5;
    this.ykz = [];
    this.lkz = [];
    this.yed = [];
    this.tnd = [];
    this.rhu = [];
    this.wbb = [];
    this.jto = [];
    this.dip = [];
    this.bsl = [];
    this.aai = [];
    this.oyq = [];
    this.thw = [];
    this.rin = [];
    this.mrm = [];
    this.jbs = [];
    this.loa = [];
    this.gal = [];
    this.ofl = [];
    this.ebi = [];
    this.pwf = [];
    this.hej = 0;
    this.blh = 0;
    this.win = 0;
    this.mus = 0;
    this.mnn = 0;
    this.enx = 0;
    this.cpa = 0;
    this.dbs = 0;
    this.hec = 0;
    this.jzi = 0;
    this.qfs = 1;
    this.ksx = 1;
    this.gjs = 0;
    this.zwh = 0;
    this.qyv = 0;
    this.xgw = 0;
    this.sed = 0;
    this.qrk = 1;
    this.rqi = 1;
    this.kwy = 0;
    this.bcw = 0;
    this.pfy = 0;
    this.ogv = 0;
    this.euh = "";
    this.nbq = "";
    this.psr = "";
    this.qty = "";
    this.wzn = 0;
    this.cpm = function (k) {
        return this.wty(k)
    };
    this.vfo = function (o) {
        if (o != null) {
            this.slb = 0;
            this.gzh = this.yux(o);
            if (this.gzh == 0) {
                this.rl = this.yux(o);
                this.r1 = this.cpm(o);
                this.r2 = this.cpm(o);
                this.r3 = this.cpm(o);
                if (this.rl >= 4) {
                    this.r4 = this.cpm(o)
                }
                if (this.rl >= 5) {
                    this.r5 = this.cpm(o)
                }
                if (this.rl >= 6) {
                    this.r6 = this.cpm(o)
                }
                if (this.rl >= 7) {
                    this.r7 = this.cpm(o)
                }
                if (this.rl >= 8) {
                    this.r8 = this.cpm(o)
                }
                if (this.rl >= 9) {
                    this.r9 = this.cpm(o)
                }
                if (this.rl >= 10) {
                    this.ljr = this.cpm(o)
                }
                if (this.rl >= 11) {
                    this.lys = this.cpm(o)
                }
                if (this.rl >= 12) {
                    this.rak = this.cpm(o)
                }
                if (this.rl >= 13) {
                    this.szf = this.cpm(o)
                }
                if (this.rl >= 14) {
                    this.djs = this.cpm(o)
                }
                if (this.rl >= 15) {
                    this.xwm = this.cpm(o)
                }
                this.vod = this.yux(o);
                if (this.vod > 0) {
                    this.ykz = this.cpm(o);
                    this.lkz = this.cpm(o);
                    this.yed = this.cpm(o);
                    if (this.vod >= 4) {
                        this.tnd = this.cpm(o)
                    }
                    if (this.vod >= 5) {
                        this.rhu = this.cpm(o)
                    }
                    if (this.vod >= 6) {
                        this.wbb = this.cpm(o)
                    }
                    if (this.vod >= 7) {
                        this.jto = this.cpm(o)
                    }
                    if (this.vod >= 8) {
                        this.dip = this.cpm(o)
                    }
                    if (this.vod >= 9) {
                        this.bsl = this.cpm(o)
                    }
                    if (this.vod >= 10) {
                        this.aai = this.cpm(o)
                    }
                    if (this.vod >= 11) {
                        this.oyq = this.cpm(o)
                    }
                    if (this.vod >= 12) {
                        this.thw = this.cpm(o)
                    }
                    if (this.vod >= 13) {
                        this.rin = this.cpm(o)
                    }
                    if (this.vod >= 14) {
                        this.mrm = this.cpm(o)
                    }
                    if (this.vod >= 15) {
                        this.jbs = this.cpm(o)
                    }
                }
                this.aqu = this.dkg(o);
                this.lzh = this.yux(o);
                for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                    this.loa[l] = this.gxf(o)
                }
                this.hej = this.gxf(o);
                this.blh = this.gxf(o);
                this.win = this.gxf(o);
                this.enx = this.dkg(o);
                this.mus = this.gxf(o);
                this.mnn = this.gxf(o);
                this.cpa = this.dkg(o);
                this.dbs = this.gxf(o);
                this.hec = this.gxf(o);
                this.jzi = this.gxf(o);
                this.qfs = this.gxf(o);
                this.ksx = this.gxf(o);
                this.gjs = this.gxf(o);
                this.zwh = this.gxf(o);
                this.qyv = this.dkg(o);
                this.xgw = this.dkg(o);
                this.sed = this.dkg(o);
                this.qrk = this.gxf(o);
                this.rqi = this.dkg(o);
                
                
                
                for (var l = 0, k = (this.vod < 5) ? 5 : this.vod; l < k; l++) {
                    this.gal[l] = this.gxf(o)
                }
                for (var l = 0; l < 8; l++) {
                    this.ofl[l] = this.dkg(o)
                }
                var p = this.dkg(o);
                for (var l = 0; l < p; l++) {
                    this.ebi[l] = this.gxf(o)
                }
                var n = this.dkg(o);
                for (var l = 0; l < n; l++) {
                    this.pwf[l] = this.gxf(o)
                }
                this.xkb(o);
                if (this.aqu == 0) {
                    this.zzy("A/u250")
                } else {
                    this.uwd.ifk()
                }
            } else {
                if (this.gzh == 1) {
                    this.aqu = this.dkg(o);
                    this.lzh = this.yux(o);
                    this.hej = this.gxf(o);
                    this.blh = this.gxf(o);
                    this.win = this.gxf(o);
                    for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                        this.loa[l] = this.gxf(o)
                    }
                    this.enx = this.dkg(o);
                    this.cpa = this.dkg(o);
                    this.dbs = this.gxf(o);
                    this.hec = this.gxf(o);
                    this.jzi = this.gxf(o);
                    this.qfs = this.gxf(o);
                    this.ksx = this.gxf(o);
                    this.gjs = this.gxf(o);
                    for (var l = 0, k = (this.vod < 5) ? 5 : this.vod; l < k; l++) {
                        this.gal[l] = this.gxf(o)
                    }
                    var n = this.dkg(o);
                    for (var l = 0; l < n; l++) {
                        this.pwf[l] = this.gxf(o)
                    }
                    for (var l = 0; l < 8; l++) {
                        this.ofl[l] = this.dkg(o)
                    }
                    this.xkb(o);
                    if (this.lzh == 0) {
                        if (this.aqu == kdn.mzw.kep.hfk) {
                            this.uwd.ifk()
                        } else {
                            if (this.aqu == kdn.mzw.kep.kvw) {
                                this.uwd.tdg()
                            } else {
                                if (this.aqu == kdn.mzw.kep.kbm) {
                                    this.uwd.shu()
                                } else {
                                    if (this.aqu == kdn.mzw.kep.qgv) {
                                        this.uwd.caw()
                                    } else {
                                        if (this.aqu == kdn.mzw.kep.rns) {
                                            this.uwd.fwv()
                                        } else {
                                            if (this.aqu == kdn.mzw.kep.jrd) {
                                                this.uwd.sva()
                                            } else {
                                                if (this.aqu == kdn.mzw.kep.vpc) {
                                                    this.uwd.udb()
                                                } else {
                                                    if (this.aqu == kdn.mzw.kep.prd) {
                                                        this.uwd.mfn()
                                                    } else {
                                                        if (this.aqu == kdn.mzw.kep.pij) {
                                                            this.uwd.zqy()
                                                        } else {
                                                            if (this.aqu == kdn.mzw.kep.wgz) {
                                                                this.uwd.ghw()
                                                            } else {
                                                                if (this.aqu == kdn.mzw.kep.wel) {
                                                                    this.uwd.xgm()
                                                                } else {
                                                                    if (this.aqu == kdn.mzw.kep.qjx) {
                                                                        this.uwd.etr()
                                                                    } else {
                                                                        if (this.aqu == kdn.mzw.kep.fwm) {
                                                                            this.uwd.juk()
                                                                        } else {
                                                                            this.wgx()
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
                        this.uwd.qnf(this.lzh)
                    }
                } else {
                    if (this.gzh == 2) {} else {
                        if (this.gzh == 3) {
                            this.blh = this.gxf(o);
                            this.uwd.wrn()
                        } else {
                            if (this.gzh === 6 || this.gzh === 7) {
                                this.ojp(o.substring(this.slb))
                            } else {
                                if (this.gzh === 8) {
                                    this.zzy("8")
                                } else {
                                    if (this.gzh == 9) {
                                        this.uwd.rzz.nad = o.substring(this.slb)
                                    } else {
                                        if (this.gzh == 10) {
                                            var m = JSON.parse(o.substring(this.slb)).Message;
                                            for (var l = 0, k = m.length; l < k; l++) {
                                                if (m[l].DisplayType == kdn.lbv.pqw.fvd) {
                                                    this.ouh.push(m[l])
                                                }
                                            }
                                            if (this.ouh.length > 0) {
                                                this.uwd.yab()
                                            }
                                        } else {
                                            this.ivj = this.yux(o);
                                            this.uwd.rqo(o.substring(2))
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
    this.xkb = function (t) {
        var l = null,
            n = [],
            q = null,
            v = null,
            o = null,
            m = null,
            p = null,
            k = null;
        if (this.gzh == 0) {
            l = this.ntn(t);
            if (l != "") {
                n = l.split("#");
                if (n.length >= 1) {
                    q = n[0].split("|");
                    this.nbq = q[0];
                    if (q.length > 1) {
                        this.psr = q[1];
                        if (q.length > 2) {
                            this.qty = q[2]
                        }
                    }
                    if (n.length >= 2) {
                        v = n[1].split("|");
                        if (v.length >= 1) {
                            m = v[0];
                            this.slb = 0;
                            this.kwy = this.dkg(m);
                            this.bcw = this.gxf(m);
                            this.pfy = this.gxf(m);
                            this.ogv = this.gxf(m);
                            this.euh = this.ntn(m);
                            if (v.length >= 2) {
                                k = v[1];
                                if (k) {
                                    this.wzn = parseFloat(k)
                                }
                            }
                        }
                    }
                }
            }
            if (kdn.qwt.value21.e === true && kdn.qwt.value21.s) {
                if (this.wzn == 0) {
                    this.nbq = ""
                } else {
                    if (this.wzn != 0 && kdn.qwt.value21.m == 1) {
                        this.nbq = ""
                    }
                }
            }
        } else {
            l = this.ntn(t);
            if (l != "") {
                n = l.split("#");
                if (n.length > 1) {
                    m = n[1];
                    o = n[1].split("|{");
                    m = o[0];
                    if (m) {
                        this.slb = 0;
                        this.bcw = this.gxf(m);
                        this.pfy = this.gxf(m);
                        this.ogv = this.gxf(m)
                    }
                    if (o.length > 1) {
                        p = "{" + o[1];
                        var r = JSON.parse(p).Message;
                        this.bnt.length = 0;
                        this.gfw.length = 0;
                        for (var s = 0, u = r.length; s < u; s++) {
                            if (r[s].DisplayType == kdn.lbv.pqw.ipj) {
                                this.gfw.push(r[s])
                            } else {
                                if (r[s].DisplayType == kdn.lbv.pqw.fvd) {
                                    this.bnt.push(r[s])
                                }
                            }
                        }
                    }
                    if (this.gfw.length > 0) {
                        this.uwd.wbg()
                    }
                }
            }
        }
    };
    this.wgx = function () {};
    this.play = function (l, k, m) {
        this.zzy("A/u251," + l + "," + k + "," + m)
    };
    this.fhv = function () {
        this.zzy("A/u254")
    };
    this.nna = function () {
        this.zzy("A/u258")
    };
    this.iqc = function (k) {
        this.zzy("A/u257," + k)
    };
    this.pfi = function (l, k, m) {
        this.zzy("A/u256," + l + "," + k + "," + m)
    }
}
nxj.prototype = new qem;

function eqr() {
    this.cjm = function (a, b) {
        this.buu = b;
        this.rzz = a;
        return this
    };
    this.connect = function (c, f, e, g, a, d, b) {
        this.cud = f;
        this.dkk = e;
        this.tfk = g;
        this.yfk = c;
        this.lkw = d;
        this.jkg = b;
        this.uzy = new nxj(this.buu, c, f, e, g, a, d, b);
        this.uzy.cjm(this)
    };
    this.play = function (b, a, c) {
        this.uzy.play(b, a, c)
    };
    this.pfi = function (b, a, c) {
        this.uzy.pfi(b, a, c)
    };
    this.fhv = function () {
        this.uzy.fhv()
    };
    this.nna = function () {
        this.uzy.nna()
    };
    this.iqc = function (a) {
        this.uzy.iqc(a)
    };
    this.ifk = function () {
        var c = this.uzy.aqu;
        this.rzz.r1 = this.uzy.r1;
        this.rzz.r2 = this.uzy.r2;
        this.rzz.r3 = this.uzy.r3;
        this.rzz.r4 = this.uzy.r4;
        this.rzz.r5 = this.uzy.r5;
        this.rzz.r6 = this.uzy.r6;
        this.rzz.r7 = this.uzy.r7;
        this.rzz.r8 = this.uzy.r8;
        this.rzz.r9 = this.uzy.r9;
        this.rzz.ljr = this.uzy.ljr;
        this.rzz.lys = this.uzy.lys;
        this.rzz.rak = this.uzy.rak;
        this.rzz.szf = this.uzy.szf;
        this.rzz.djs = this.uzy.djs;
        this.rzz.xwm = this.uzy.xwm;
        if (c == kdn.mzw.kep.rns || c == kdn.mzw.kep.jrd || c == kdn.mzw.kep.vpc || c == kdn.mzw.kep.prd || c == kdn.mzw.kep.pij) {
            this.rzz.r1 = this.uzy.ykz;
            this.rzz.r2 = this.uzy.lkz;
            this.rzz.r3 = this.uzy.yed;
            this.rzz.r4 = this.uzy.tnd;
            this.rzz.r5 = this.uzy.rhu;
            this.rzz.r6 = this.uzy.wbb;
            this.rzz.r7 = this.uzy.jto;
            this.rzz.r8 = this.uzy.dip;
            this.rzz.r9 = this.uzy.bsl;
            this.rzz.ljr = this.uzy.aai;
            this.rzz.lys = this.uzy.oyq;
            this.rzz.rak = this.uzy.thw;
            this.rzz.szf = this.uzy.rin;
            this.rzz.djs = this.uzy.mrm;
            this.rzz.xwm = this.uzy.jbs
        }
        this.rzz.eyz = this.uzy.loa;
        this.rzz.blh = this.uzy.blh;
        this.rzz.mus = this.uzy.mus;
        this.rzz.mnn = this.uzy.mnn;
        this.rzz.xgw = this.uzy.xgw;
        this.rzz.sed = this.uzy.sed;
        if (this.rcl()) {
            for (var b = 0, a = this.uzy.ebi.length; b < a && this.uzy.ebi[b] <= this.uzy.mnn; b++) {
                this.rzz.ebi[b] = this.uzy.ebi[b]
            }
        } else {
            for (var b = 0, a = this.uzy.ebi.length; b < a && this.uzy.ebi[b] * this.uzy.qyv <= this.uzy.mnn; b++) {
                this.rzz.ebi[b] = this.uzy.ebi[b]
            }
        }
        if (c == kdn.mzw.kep.hfk || ((c == kdn.mzw.kep.kvw || c == kdn.mzw.kep.wel) && this.uzy.win == 0) || c == kdn.mzw.kep.kbm || c == kdn.mzw.kep.wgz || c == kdn.mzw.kep.pij) {
            this.rzz.nok = true
        } else {
            this.rzz.nok = false
        }
        this.rzz.cpa = this.uzy.cpa;
        this.rzz.gjn = this.uzy.enx;
        this.rzz.yzf = this.rzz.ebi[this.rzz.gjn];
        this.rzz.win = this.uzy.win;
        for (var b = 0; b < this.uzy.pwf.length; b++) {
            this.rzz.hfz[b] = this.uzy.pwf[b]
        }
        this.rzz.cwq = this.uzy.gal;
        this.rzz.jzi = this.uzy.jzi;
        this.rzz.gjs = this.uzy.gjs;
        this.rzz.hec = this.uzy.hec;
        this.rzz.dbs = this.uzy.dbs;
        this.rzz.yjj = this.uzy.dbs;
        this.rzz.qfs = this.uzy.qfs;
        this.rev();
        this.rzz.tbm();
        this.rzz.hks(c, this.uzy.ofl, this.uzy.hej)
    };
    this.tdg = function () {
        this.rzz.frj({
            type: "roundStarted",
            sender: this.rzz.yfk,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.rzz.vey(this.rzz.blh)
            }
        });
        this.rzz.state = this.uzy.aqu;
        this.rzz.eyz = this.uzy.loa;
        this.rzz.blh = this.uzy.blh;
        this.rzz.cpa = this.uzy.cpa;
        this.rzz.gjn = this.uzy.enx;
        this.rzz.win = this.uzy.win;
        for (var a = 0; a < this.uzy.pwf.length; a++) {
            this.rzz.hfz[a] = this.uzy.pwf[a]
        }
        if (this.rzz.miq && this.rzz.win > 0) {
            this.rzz.miq.wvx.qex("history", "#zui", [this.uzy.ofl])
        }
        this.rzz.xrs = false;
        this.rev();
        this.rzz.vza();
        this.rzz.zvq(this.uzy.hej)
    };
    this.shu = function () {
        this.rzz.state = this.uzy.aqu;
        this.rzz.blh = this.uzy.blh;
        this.dnk = false;
        this.rev();
        this.rzz.kug();
        this.rzz.zvq(this.uzy.hej)
    };
    this.ghw = function () {
        this.rzz.frj({
            type: "roundStarted",
            sender: this.rzz.yfk,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.rzz.vey(this.rzz.blh)
            }
        });
        this.rzz.state = this.uzy.aqu;
        this.rzz.eyz = this.uzy.loa;
        this.rzz.blh = this.uzy.blh;
        this.rzz.cpa = this.uzy.cpa;
        this.rzz.gjn = this.uzy.enx;
        this.rzz.win = this.uzy.win;
        for (var a = 0; a < this.uzy.pwf.length; a++) {
            this.rzz.hfz[a] = this.uzy.pwf[a]
        }
        this.rzz.xrs = false;
        if (this.rzz.miq && this.rzz.win > 0) {
            this.rzz.miq.zui(this.uzy.ofl[0], this.uzy.ofl, true)
        }
        this.rev();
        this.rzz.emh();
        this.rzz.zvq(this.uzy.hej)
    };
    this.xgm = function () {
        this.rzz.state = this.uzy.aqu;
        this.rzz.blh = this.uzy.blh;
        this.rzz.win = this.uzy.win;
        if (this.rzz.miq) {
            this.rzz.miq.zui(this.uzy.ofl[0], this.uzy.ofl, false)
        }
        this.rzz.igb();
        this.rzz.zvq(this.uzy.hej)
    };
    this.etr = function () {
        this.rzz.state = this.uzy.aqu;
        this.rzz.blh = this.uzy.blh;
        this.rzz.win = this.uzy.win;
        this.rzz.saz();
        this.rzz.zvq(this.uzy.hej)
    };
    this.caw = function () {
        this.rzz.frj({
            type: "roundStarted",
            sender: this.rzz.yfk,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.rzz.vey(this.rzz.blh)
            }
        });
        this.rzz.state = this.uzy.aqu;
        this.rzz.eyz = this.uzy.loa;
        this.rzz.blh = this.uzy.blh;
        this.rzz.cpa = this.uzy.cpa;
        this.rzz.gjn = this.uzy.enx;
        this.rzz.win = this.uzy.win;
        for (var a = 0; a < this.uzy.pwf.length; a++) {
            this.rzz.hfz[a] = this.uzy.pwf[a]
        }
        this.rzz.xrs = (this.uzy.dbs > this.rzz.dbs);
        this.rzz.jzi = this.uzy.jzi;
        this.rzz.gjs = this.uzy.gjs;
        this.rzz.hec = this.uzy.hec;
        this.rzz.dbs = this.uzy.dbs;
        this.rzz.yjj = this.uzy.dbs;
        this.rzz.qfs = this.uzy.qfs;
        this.rev();
        this.rzz.cfw();
        this.rzz.zvq(this.uzy.hej)
    };
    this.fwv = function () {
        this.rzz.state = this.uzy.aqu;
        this.rzz.cwq = this.uzy.gal;
        this.rzz.eyz = this.uzy.loa;
        this.rzz.blh = this.uzy.blh;
        this.rzz.cpa = this.uzy.cpa;
        this.rzz.gjn = this.uzy.enx;
        this.rzz.win = this.uzy.win;
        for (var a = 0; a < this.uzy.pwf.length; a++) {
            this.rzz.hfz[a] = this.uzy.pwf[a]
        }
        this.rzz.xrs = (this.uzy.dbs > this.rzz.dbs);
        this.rzz.jzi = this.uzy.jzi;
        this.rzz.gjs = this.uzy.gjs;
        this.rzz.hec = this.uzy.hec;
        this.rzz.dbs = this.uzy.dbs;
        this.rzz.yjj = this.uzy.dbs;
        this.rzz.qfs = this.uzy.qfs;
        this.rev();
        this.rzz.wtu();
        this.rzz.zvq(this.uzy.hej)
    };
    this.sva = function () {
        this.rzz.state = this.uzy.aqu;
        this.rzz.cwq = this.uzy.gal;
        this.rzz.eyz = this.uzy.loa;
        this.rzz.blh = this.uzy.blh;
        this.rzz.cpa = this.uzy.cpa;
        this.rzz.gjn = this.uzy.enx;
        this.rzz.win = this.uzy.win;
        for (var a = 0; a < this.uzy.pwf.length; a++) {
            this.rzz.hfz[a] = this.uzy.pwf[a]
        }
        this.rzz.xrs = (this.uzy.dbs > this.rzz.dbs);
        this.rzz.yjj = this.rzz.dbs;
        this.rzz.jzi = this.uzy.jzi;
        this.rzz.gjs = this.uzy.gjs;
        this.rzz.hec = this.uzy.hec;
        this.rzz.dbs = this.uzy.dbs;
        this.rzz.qfs = this.uzy.qfs;
        this.rev();
        this.rzz.qwd();
        this.rzz.zvq(this.uzy.hej)
    };
    this.udb = function () {
        this.rzz.state = this.uzy.aqu;
        this.rzz.cwq = this.uzy.gal;
        this.rzz.eyz = this.uzy.loa;
        this.rzz.blh = this.uzy.blh;
        this.rzz.cpa = this.uzy.cpa;
        this.rzz.gjn = this.uzy.enx;
        this.rzz.win = this.uzy.win;
        for (var a = 0; a < this.uzy.pwf.length; a++) {
            this.rzz.hfz[a] = this.uzy.pwf[a]
        }
        this.rzz.xrs = (this.uzy.dbs > this.rzz.dbs);
        this.rzz.yjj = this.rzz.dbs;
        this.rzz.jzi = this.uzy.jzi;
        this.rzz.gjs = this.uzy.gjs;
        this.rzz.hec = this.uzy.hec;
        this.rzz.dbs = this.uzy.dbs;
        this.rzz.qfs = this.uzy.qfs;
        this.rev();
        this.rzz.sgn();
        this.rzz.zvq(this.uzy.hej)
    };
    this.mfn = function () {
        this.rzz.state = this.uzy.aqu;
        this.rzz.cwq = this.uzy.gal;
        this.rzz.eyz = this.uzy.loa;
        this.rzz.blh = this.uzy.blh;
        this.rzz.cpa = this.uzy.cpa;
        this.rzz.gjn = this.uzy.enx;
        this.rzz.win = this.uzy.win;
        for (var a = 0; a < this.uzy.pwf.length; a++) {
            this.rzz.hfz[a] = this.uzy.pwf[a]
        }
        if (this.rzz.miq && this.rzz.win > 0) {
            this.rzz.miq.wvx.qex("history", "#zui", [this.uzy.ofl])
        }
        this.rzz.xrs = (this.uzy.dbs > this.rzz.dbs);
        this.rzz.jzi = this.uzy.jzi;
        this.rzz.gjs = this.uzy.gjs;
        this.rzz.hec = this.uzy.hec;
        this.rzz.dbs = this.uzy.dbs;
        this.rzz.yjj = this.uzy.dbs;
        this.rzz.qfs = this.uzy.qfs;
        this.rev();
        this.rzz.rdk();
        this.rzz.zvq(this.uzy.hej)
    };
    this.zqy = function () {
        this.rzz.state = this.uzy.aqu;
        this.rzz.cwq = this.uzy.gal;
        this.rzz.eyz = this.uzy.loa;
        this.rzz.blh = this.uzy.blh;
        this.rzz.cpa = this.uzy.cpa;
        this.rzz.gjn = this.uzy.enx;
        this.rzz.win = this.uzy.win;
        for (var a = 0; a < this.uzy.pwf.length; a++) {
            this.rzz.hfz[a] = this.uzy.pwf[a]
        }
        this.rzz.xrs = (this.uzy.dbs > this.rzz.dbs);
        this.rzz.jzi = this.uzy.jzi;
        this.rzz.gjs = this.uzy.gjs;
        this.rzz.hec = this.uzy.hec;
        this.rzz.dbs = this.uzy.dbs;
        this.rzz.yjj = this.uzy.dbs;
        this.rzz.qfs = this.uzy.qfs;
        this.rev();
        this.rzz.sqj();
        this.rzz.zvq(this.uzy.hej)
    };
    this.rev = function () {
        this.rzz.nbq = this.uzy.nbq;
        this.rzz.psr = this.uzy.psr;
        this.rzz.qty = this.uzy.qty;
        this.rzz.bcw = this.uzy.bcw;
        this.rzz.pfy = this.uzy.pfy;
        this.rzz.ogv = this.uzy.ogv;
        this.rzz.euh = this.uzy.euh;
        if (this.rzz.pfy > 0 && this.rzz.bcw < this.rzz.pfy) {
            this.rzz.gjn = this.uzy.kwy
        }
        this.rzz.wzn = this.uzy.wzn
    };
    this.rcl = function () {
        return false
    }
}
eqr.prototype = new urw;

function xwu() {
    var a = this;
    this.ict = false;
    this.kjd = -1;
    this.gvo = 0;
    this.rai = null;
    this.hgh = 3;
    this.law = 0;
    this.jgn = null;
    this.vwe = null;
    this.fkg = false;
    this.ycm = false;
    this.qwh = false;
    this.wgm = [];
    this.rlu = null;
    this.eqb = false;
    this.pic = [];
    this.bgg = false;
    this.mwr = null;
    this.owf = null;
    this.tai = 0;
    this.rsd = 0;
    this._y = 0;
    this._d = 0;
    this.arp = 0;
    this.vlx = 4;
    this.dye = 2;
    this.ixb = 9;
    this.ryq = true;
    this.ibu = 0;
    this.cyt = -1;
    this.rnv = 0;
    this.ebz = -1;
    this.iqu = -1;
    this.ajj = -1;
    this.zub = false;
    this.tvc = [];
    this.rwy = 0;
    this.ycw = 0;
    this.uqn = 0;
    this.swf = 89;
    this.woz = 0;
    this.hjj = 0;
    this.ajz = null;
    this.qkv = null;
    this.qly = 0;
    this.ulj = 0;
    this.sji = [];
    this.lhd = [];
    this.tmo = [];
    this.lxg = [];
    this.edl = [];
    this.cjm = function (f, k, j, c, b, d, g, e) {
        xwu.prototype.cjm.call(this, f, k, j);
        this.hgh = d;
        this.ibu = this.height / this.hgh;
        this.rai = b;
        this.vwe = g;
        this.rsd = e;
        this.tai = Math.round(c);
        this.jgn = [];
        this.law = 0;
        this.arp = 0;
        this.ixb = Math.round(this.tai / 20);
        this.vlx = Math.round(this.tai / 12);
        this.dye = Math.round(this.tai / 2);
        this.pic.length = 0
    };
    this.idh = function (b) {
        try {
            this.mwr = b.wus;
            this.owf = b.fzx
        } catch (c) {
            console.error(c)
        }
    };
    this.yai = function (c, b) {
        xwu.prototype.yai.call(this, c);
        try {
            this.tai = Math.round(b);
            this.ixb = Math.round(this.tai / 20);
            this.vlx = Math.round(this.tai / 12);
            this.dye = Math.round(this.tai / 2);
            this._y = this.y + (this.hgh - 1) * this.ibu
        } catch (d) {
            console.error(d)
        }
    };
    this.dmk = function (b, e) {
        var d = b - this.x - ((this.parent.alz()) ? this.parent.hhw.gbr.sde.x : 0),
            c = e - this.y - ((this.parent.alz()) ? this.parent.hhw.gbr.sde.y : 0);
        if (d >= 0 && d <= this.width && c >= 0 && c <= this.height) {
            if (this.parent.rly && this.parent.rgv && !this.parent.zgb && !this.ict && this.parent.hpd()) {
                this.aja()
            } else {
                if (!this.parent.rly) {
                    if (kdn.qwt.value43) {
                        if (this.parent.njj()) {
                            this.parent.xxv();
                            if (this.parent.pgn) {
                                this.parent.pgn.wvx.kzj("buttons", "#egb", [true])
                            }
                        }
                    } else {
                        if (this.bgg) {
                            this.cyt = c;
                            this.rnv = 0;
                            this.parent.jqa();
                            this.parent.cqh();
                            this.parent.uni()
                        }
                    }
                }
            }
            return true
        }
        return false
    };
    this.szd = function () {
        if (this.cyt >= 0) {
            this.fru();
            return true
        }
        return false
    };
    this.mur = function (b, f, c) {
        var e = b - this.x - ((this.parent.alz()) ? this.parent.hhw.gbr.sde.x : 0),
            d = f - this.y - ((this.parent.alz()) ? this.parent.hhw.gbr.sde.y : 0);
        if (this.cyt >= 0) {
            if (e >= 0 && e <= this.width && d >= 0 && d <= this.height) {
                if (d > this.cyt) {
                    this.woz = vym(this.rag)
                } else {
                    if (d < this.cyt) {
                        this.woz = vym(this.pbx)
                    }
                }
                this.cyt = d;
                if (c) {
                    clearTimeout(this.hjj);
                    this.hjj = setTimeout(this.fru, 500)
                }
                return true
            } else {
                this.fru();
                return true
            }
        }
        return false
    };
    this.zwp = function () {
        var g = 0,
            k = 0,
            d = 0;
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        if (this.law >= 0) {
            this.context2D.save();
            if (this.parent.umv === false) {
                this.context2D.beginPath();
                this.context2D.rect(this.x, this.y, this.width, this.height);
                this.context2D.closePath();
                this.context2D.clip()
            }
            if (this.qkv != null) {
                this.context2D.drawImage(this.qkv, this.x + this.qly, this.y + this.ulj, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            for (var f = 0, b = this.lhd.length; f < b; f++) {
                if (this.lhd[f]) {
                    this.context2D.drawImage(this.lhd[f].ldi, this.lhd[f].vjd * this.width, 0, this.width, this.lhd[f].ldi.height, this.x, this.y + f * this.ibu, this.width, this.lhd[f].ldi.height)
                }
            }
            g = this._y - this.height + this.rnv;
            for (var f = 0; f < this.hgh + 1; f++) {
                k = this.law + f;
                d = this.jgn[k];
                try {
                    if (this.qwh === false) {
                        this.context2D.drawImage(this.rai[d], this.x, g)
                    } else {
                        this.context2D.drawImage(this.wgm[d], this.x, g)
                    }
                } catch (l) {
                    if (!this.parent.vks) {
                        console.error("can not display image " + this.rai.length + "" + d + "" + k + "" + this.jgn.length + "" + this.jgn)
                    }
                }
                g += this.ibu
            }
            g = this._y - this.height;
            for (var f = 0; f < this.hgh + 1; f++) {
                k = this.law + f;
                d = this.jgn[k];
                try {
                    for (var c = 0, b = this.tvc.length; c < b; c++) {
                        if (this.tvc[c] == d && this.sji[d] && (this.sji[d].klb || !this.sji[d].kch)) {
                            this.context2D.drawImage(this.sji[d].ldi, this.sji[d].vjd * this.width, 0, this.width, this.sji[d].ldi.height, this.x, g + (this.ibu - this.sji[d].ldi.height) / 2, this.width, this.sji[d].ldi.height);
                            break
                        }
                    }
                } catch (l) {
                    if (!this.parent.vks) {
                        console.error("can not display image " + this.sji.length + "" + d + "" + k + "" + this.jgn.length + "" + this.jgn)
                    }
                }
                g += this.ibu
            }
            for (var f = 0, b = this.pic.length; f < b; f++) {
                if (this.pic[f]) {
                    this.context2D.drawImage(this.pic[f], this.x, this.y + f * this.ibu)
                }
            }
            for (var f = 0, b = this.tmo.length; f < b; f++) {
                if (this.tmo[f]) {
                    this.context2D.drawImage(this.tmo[f].ldi, this.tmo[f].vjd * this.width, 0, this.width, this.tmo[f].ldi.height, this.x, this.y + f * this.ibu, this.width, this.tmo[f].ldi.height)
                }
            }
            if (this.fkg) {
                this.context2D.fillStyle = this.mwr;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.ycm) {
                this.context2D.fillStyle = this.owf;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.ajz != null) {
                this.context2D.drawImage(this.ajz, this.x, this.y)
            }
            this.context2D.restore();
            if (this.vtx && this.saw) {
                this.vtx.drawImage(this.saw, this.x, this.y)
            }
        }
    };
    this.ctf = function (b) {
        this.iqu = -1;
        this.ajj = -1;
        this.gvo = b;
        this.ict = false;
        this.ebz = -1;
        this.law = 0;
        this.ryq = true;
        this.kjd = -1;
        this.jgn.length = this.rsd;
        for (var c = 0; c <= this.hgh; c++) {
            this.jgn[this.jgn.length - 1 - this.hgh + c] = this.jgn[c]
        }
        this.law = this.jgn.length - 1 - this.hgh;
        this.ryq = true;
        this.zpc(false)
    };
    this.xze = function (d, f) {
        for (var b = 0; b < this.rsd; b++) {
            if (b < this.vwe.length) {
                this.jgn[b] = this.vwe[b]
            } else {
                var c = b % this.vwe.length;
                this.jgn[b] = this.vwe[c]
            }
        }
        if (f) {
            var e = (this.hgh > 1) ? d - 2 : d - 1;
            if (e < 0) {
                e = this.vwe.length + e
            }
            for (var b = 0; b <= this.hgh; b++) {
                this.jgn[b] = this.vwe[e];
                e += 1;
                if (e == this.vwe.length) {
                    e = e - this.vwe.length
                }
            }
        }
        this.law = 0;
        this._y = this.y + (this.hgh - 1) * this.ibu
    };
    this.aja = function () {
        this.eqb = true;
        if (this.law > this.hgh) {
            var c = this.law;
            var d = this.hgh;
            for (var b = 0; b <= this.hgh; b++) {
                this.jgn[d + b + 1] = this.jgn[c + b]
            }
            this.law = this.hgh + 1
        }
    };
    this.kyg = function () {
        this.law = 0;
        this.ebz = 0;
        this.uge()
    };
    this.rag = function () {
        if (a.rnv < a.ibu / 4) {
            a.rnv = a.rnv + 2;
            if (a.parent.umv === false) {
                a.zwp()
            } else {
                a.parent.feu()
            }
        }
    };
    this.pbx = function () {
        if (a.rnv > 0) {
            a.rnv = a.rnv - 2;
            if (a.parent.umv === false) {
                a.zwp()
            } else {
                a.parent.feu()
            }
        }
    };
    this.fru = function () {
        clearTimeout(a.hjj);
        a.parent.scj();
        if (a.rnv > 0) {
            a.pbx();
            a.woz = vym(a.fru)
        } else {
            a.zqk()
        }
    };
    this.zqk = function () {
        dfy(this.woz);
        this.cyt = -1;
        this.rnv = 0
    };
    this.gui = function (c) {
        if (this.rnv > 0) {
            this.rnv = 0
        }
        if (this.hgh === 1 && this.ebz < 0 && this.iqu >= 0 && this._y === this.y + this.height - this.tai) {
            this.cke(this.iqu, this.ajj, this.zub)
        }
        if (this.law >= 0) {
            if (this.law > 0) {
                if (!this.eqb || !this.parent.xls) {
                    this._y += this.tai;
                    this._d += this.tai
                } else {
                    this._y += (this.tai + this.tai / 2);
                    this._d += (this.tai + this.tai / 2)
                }
            } else {
                if (this.law == 0) {
                    if (this.ebz == -1) {
                        this.kjd += 1;
                        this.law = this.gvo - 1 - this.hgh;
                        this._y += this.tai;
                        this._d += this.tai;
                        for (var b = 0; b <= this.hgh; b++) {
                            this.jgn[this.gvo - 1 - this.hgh + b] = this.jgn[b]
                        }
                    } else {
                        if (this.arp < this.dye && this.ryq) {
                            this._y += this.vlx;
                            this.arp += this.vlx;
                            if (this.arp >= this.dye) {
                                this.ryq = false
                            }
                        } else {
                            if (this.arp > 0 && !this.ryq) {
                                this._y -= this.ixb;
                                this.arp -= this.ixb;
                                if (this.arp <= 0) {
                                    this.ict = true;
                                    this.eqb = false;
                                    if (typeof this.uwy === "function") {
                                        this.uwy()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this._d > this.ibu - this.tai && this.law > 0) {
                if (c && this.ebz >= 0) {
                    if (this.law == 1) {
                        if (typeof this.pnj === "function") {
                            this.pnj()
                        }
                        if (this.rlu) {
                            this.rlu.play()
                        }
                        if (!this.parent.hth && !this.parent.bzd) {
                            if (this.jgl()) {
                                this.qsh()
                            }
                        }
                    }
                }
                this.law -= 1;
                this._d = 0;
                this._y = this.y + (this.hgh - 1) * this.ibu
            }
        }
    };
    this.yte = function (e, c, f) {
        for (var d = 0, b = this.tmo.length; d < b; d++) {
            if (this.tmo[d]) {
                if (this.tmo[d].okc === false && this.tmo[d].vjd < this.tmo[d].xqd - 1) {
                    this.tmo[d].vjd += 1
                } else {
                    if (this.tmo[d].okc === true && this.tmo[d].vjd > 0) {
                        this.tmo[d].vjd -= 1
                    } else {
                        if (this.tmo[d].loop === true) {
                            this.tmo[d].vjd = (this.tmo[d].okc === false) ? 0 : this.tmo[d].xqd - 1
                        } else {
                            if (this.tmo[d].xwd === true) {
                                this.tmo[d] = null
                            }
                        }
                    }
                }
            }
        }
        if (f && f === true) {
            this.zwp()
        }
    };
    this.lot = function () {
        for (var c = 0, b = this.tmo.length; c < b; c++) {
            if (this.tmo[c] && ((this.tmo[c].okc === false && this.tmo[c].vjd < this.tmo[c].xqd - 1) || (this.tmo[c].okc === true && this.tmo[c].vjd > 0))) {
                return true
            }
        }
        return false
    };
    this.utt = function (d) {
        for (var c = 0, b = this.lhd.length; c < b; c++) {
            if (this.lhd[c]) {
                if (this.lhd[c].okc === false && this.lhd[c].vjd < this.lhd[c].xqd - 1) {
                    this.lhd[c].vjd += 1
                } else {
                    if (this.lhd[c].okc === true && this.lhd[c].vjd > 0) {
                        this.lhd[c].vjd -= 1
                    } else {
                        if (this.lhd[c].loop === true) {
                            this.lhd[c].vjd = (this.lhd[c].okc === false) ? 0 : this.lhd[c].xqd - 1
                        } else {
                            if (this.lhd[c].xwd === true) {
                                this.lhd[c] = null
                            }
                        }
                    }
                }
            }
        }
        if (d && d === true) {
            this.zwp()
        }
    };
    this.vqm = function () {
        for (var c = 0, b = this.lhd.length; c < b; c++) {
            if (this.lhd[c] && ((this.lhd[c].okc === false && this.lhd[c].vjd < this.lhd[c].xqd - 1) || (this.lhd[c].okc === true && this.lhd[c].vjd > 0))) {
                return true
            }
        }
        return false
    };
    this.knu = function (d, c, b) {
        this.iqu = d;
        this.ajj = c;
        this.zub = b;
        if (this.hgh > 1) {
            this.cke(this.iqu, this.ajj, this.zub)
        }
    };
    this.cke = function (j, g, d) {
        var k = 0,
            c = 0,
            e = 0,
            b = [];
        this.kjd = -1;
        this.ebz = j;
        k = (this.hgh > 1) ? this.ebz - 2 : this.ebz - 1;
        if (k < 0) {
            k = this.vwe.length + k
        }
        c = (d === true) ? this.jgn.length + g : this.hgh + g + 1;
        for (var f = 0; f <= this.hgh; f++) {
            e = this.law + f;
            if (e >= this.jgn.length) {
                e = e - this.jgn.length
            }
            b[f] = this.jgn[e]
        }
        for (var f = 0; f < c; f++) {
            this.jgn[f] = this.vwe[k];
            k += 1;
            if (k == this.vwe.length) {
                k = k - this.vwe.length
            }
        }
        this.law = this.hgh + g + 1;
        for (var f = 0; f <= this.hgh; f++) {
            this.jgn[this.law + f] = b[f]
        }
        this.zpc(true);
        this.iqu = -1;
        this.ajj = -1;
        this.zub = false
    };
    this.zpc = function (k) {
        var d = -1,
            n = -1,
            b = 0,
            o = true,
            e = false,
            m = 0,
            l = 0;
        if (this.lxg.length > 0 && this.edl.length > 0) {
            if (k) {
                for (var g = 0; g < this.lxg.length; g++) {
                    for (var f = 0; f < this.lxg[g].length - 1; f++) {
                        if (this.jgn[this.hgh] == this.lxg[g][f]) {
                            d = f;
                            n = g
                        }
                    }
                }
                if (n >= 0 && d >= 0 && d < this.lxg[n].length - 1) {
                    if (this.hgh + this.lxg[n].length - d - 1 < this.law) {
                        for (var g = d + 1, f = 1; g < this.lxg[n].length; g++, f++) {
                            this.jgn[this.hgh + f] = this.lxg[n][g]
                        }
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.lxg.length; g++) {
                for (var f = 1; f < this.lxg[g].length; f++) {
                    if (this.jgn[this.law] == this.lxg[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d > 0) {
                if (this.law - d > this.hgh) {
                    for (var g = d - 1, f = 1; g >= 0; g--, f++) {
                        this.jgn[this.law - f] = this.lxg[n][g]
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.lxg.length; g++) {
                for (var f = 0; f < this.lxg[g].length; f++) {
                    if (this.jgn[this.law + this.hgh] == this.lxg[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d >= 0 && d < this.lxg[n].length - 1) {
                if (!k) {
                    for (var g = d + 1; g < this.lxg[n].length; g++) {
                        this.jgn[m++] = this.lxg[n][g]
                    }
                } else {
                    if (this.law + this.hgh + this.lxg[n].length - d - 1 < this.jgn.length) {
                        for (var g = d + 1, f = 1; g < this.lxg[n].length; g++, f++) {
                            this.jgn[this.law + this.hgh + f] = this.lxg[n][g]
                        }
                    }
                }
            }
            m = (k) ? this.hgh + 1 : m;
            l = (k) ? this.jgn.length : this.law;
            for (var c = m; c < l; c++) {
                if (k == false || (c < this.law || c > this.law + this.hgh)) {
                    d = -1;
                    n = -1;
                    for (var g = 0; g < this.lxg.length; g++) {
                        for (var f = 0; f < this.lxg[g].length; f++) {
                            if (this.jgn[c] == this.lxg[g][f]) {
                                d = f;
                                n = g
                            }
                        }
                    }
                    if (n >= 0 && d >= 0) {
                        o = true;
                        b = 0;
                        for (var g = 0; g < this.lxg[n].length && o; g++) {
                            if (this.jgn[c - d + g] != this.lxg[n][g]) {
                                o = false
                            } else {
                                b++
                            }
                        }
                        if (o) {
                            c += this.lxg[n].length - d - 1
                        } else {
                            if (b == 0) {
                                this.jgn[c] = this.edl[Math.floor(Math.random() * this.edl.length)]
                            } else {
                                if (b == this.lxg[n].length - 1 && (c + b < this.law || c + b > this.law + this.hgh) && c + b < this.jgn.length) {
                                    e = false;
                                    for (var g = 0; g < this.lxg.length && !e; g++) {
                                        for (var f = 0; f < this.lxg[g].length && !e; f++) {
                                            if (this.jgn[c + b] == this.lxg[g][f]) {
                                                e = true
                                            }
                                        }
                                    }
                                    if (!e) {
                                        this.jgn[c + b] = this.lxg[n][this.lxg[n].length - 1];
                                        c += b
                                    } else {
                                        this.jgn[c] = this.edl[Math.floor(Math.random() * this.edl.length)]
                                    }
                                } else {
                                    for (var q = 0; q < b; q++) {
                                        if (c + q < this.law || c + q > this.law + this.hgh) {
                                            this.jgn[c + q] = this.edl[Math.floor(Math.random() * this.edl.length)]
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
    this.wfx = function (b) {
        this.bgg = b
    };
    this.ovk = function () {
        return this.bgg
    };
    this.jgl = function () {
        for (var c = 0, b = this.tvc.length; c < b; c++) {
            if (this.tvc[c] >= 0) {
                return true
            }
        }
        return false
    };
    this.ljf = function (b) {
        this.tvc = b
    };
    this.yzv = function (b) {
        return this.tvc
    };
    this.qsh = function () {
        for (var d = 0, b = this.tvc.length; d < b; d++) {
            var c = this.sji[this.tvc[d]];
            if (c) {
                c.klb = true;
                c.bae = c.loop;
                c.kch = c.xwd
            }
        }
        if (this.parent.umv === false) {
            this.zwp()
        } else {
            this.parent.feu()
        }
        this.uqn = 0;
        this.ycw = new Date().getTime();
        this.goy()
    };
    this.uge = function () {
        for (var c = 0, b = this.sji.length; c < b; c++) {
            if (this.sji[c]) {
                this.sji[c].klb = false
            }
        }
        clearTimeout(this.rwy)
    };
    this.trr = function () {
        for (var c = 0, b = this.sji.length; c < b; c++) {
            if (this.sji[c]) {
                this.sji[c].bae = false
            }
        }
    };
    this.ndi = function () {
        for (var c = 0, b = this.sji.length; c < b; c++) {
            if (this.sji[c]) {
                this.sji[c].kch = true;
                this.sji[c].vjd = 0
            }
        }
    };
    this.sip = function () {
        for (var c = 0, b = this.sji.length; c < b; c++) {
            if (this.sji[c] && this.sji[c].klb) {
                return true
            }
        }
        return false
    };
    this.goy = function () {
        var f = true,
            d = null;
        a.uqn++;
        for (var e = 0, b = a.tvc.length; e < b; e++) {
            d = a.sji[a.tvc[e]];
            if (d && d.klb) {
                d.vjd = (d.vjd < d.xqd - 1) ? d.vjd + 1 : (d.kch) ? 0 : d.vjd;
                if ((d.vjd === 0 && d.bae === false) || (d.vjd === d.xqd - 1 && d.kch === false)) {
                    d.klb = false
                }
                if (f === true && d.klb === true) {
                    f = false
                }
            }
        }
        if (a.parent.umv === false) {
            a.zwp()
        } else {
            a.parent.feu()
        }
        if (f === false) {
            var c = (a.uqn * a.swf - (new Date().getTime() - a.ycw));
            if (c < 2) {
                c = 0
            }
            a.rwy = setTimeout(a.goy, c)
        } else {
            clearTimeout(a.rwy);
            a.parent.mqd()
        }
    };
    this.vwh = function (d) {
        for (var c = 0, b = d.length; c < b; c++) {
            if (d[c]) {
                this.sji[c] = {};
                this.sji[c].ldi = d[c].ldi;
                this.sji[c].loop = d[c].loop;
                this.sji[c].xwd = d[c].xwd;
                this.sji[c].xqd = this.sji[c].ldi.width / this.width;
                this.sji[c].vjd = 0;
                this.sji[c].klb = false;
                this.sji[c].bae = false;
                this.sji[c].kch = true
            }
        }
    };
    this.cfy = function (b, c, d) {
        this.qkv = b;
        this.qly = c;
        this.ulj = d
    };
    this.dyu = function (b) {
        this.ajz = b
    };
    this.ymr = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.tmo[f] = {
            ldi: e,
            vjd: 0,
            xqd: e.width / this.width,
            loop: b,
            xwd: d,
            okc: c
        }
    };
    this.hxv = function () {
        return this.tmo
    };
    this.cio = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.lhd[f] = {
            ldi: e,
            vjd: 0,
            xqd: e.width / this.width,
            loop: b,
            xwd: d,
            okc: c
        }
    };
    this.hbk = function () {
        return this.lhd
    };
    this.snx = function (g, c) {
        this.lxg = [];
        this.edl = [];
        for (var f = 0, b = g.length; f < b; f++) {
            this.lxg[f] = [];
            for (var e = 0, d = g[f].length; e < d; e++) {
                this.lxg[f][e] = g[f][e]
            }
        }
        for (var f = 0, b = c.length; f < b; f++) {
            this.edl[f] = c[f]
        }
    };
    this.pnj = null;
    this.uwy = null
}
xwu.prototype = new yos;
kdn.mzw = {
    kep: {
        hfk: 0,
        owt: 1,
        zkj: 2,
        kvw: 3,
        kbm: 4,
        qgv: 5,
        rns: 6,
        wel: 7,
        qjx: 8,
        wgz: 9,
        jrd: 10,
        vpc: 11,
        prd: 12,
        fqk: 13,
        pij: 14,
        pze: 15,
        mal: 16,
        qkx: 20,
        jdm: 21,
        udl: 22,
        ttn: 23,
        tej: 24,
        ows: 25,
        ehk: 30,
        stt: 31,
        obs: 32,
        som: 33,
        fwm: 68
    }
};

function hwa() {
    this.yke = null;
    this.auv = null;
    this.qmr = null;
    this.joi = null;
    this.coh = null;
    this.bsj = [];
    this.pgn = null;
    this.ied = null;
    this.ust = null;
    this.miq = null;
    this.noi = null;
    this.llq = null;
    this.wip = null;
    this.xqw = null;
    this.eyz = [];
    this.hfz = [];
    this.win = 0;
    this.yzf = 1;
    this.gjn = 0;
    this.totalBet = 1000;
    this.ebi = [];
    this.mus = 0;
    this.mnn = 0;
    this.cpa = 10;
    this.blh = 0;
    this.msj = 0;
    this.pwf = [];
    this.ywe = 0;
    this.xqm = -1;
    this.tfh = -1;
    this.anz = -1;
    this.r1 = [];
    this.r2 = [];
    this.r3 = [];
    this.r4 = [];
    this.r5 = [];
    this.r6 = [];
    this.r7 = [];
    this.r8 = [];
    this.r9 = [];
    this.ljr = [];
    this.lys = [];
    this.rak = [];
    this.szf = [];
    this.djs = [];
    this.xwm = [];
    this.ond = 3;
    this.apq = 5;
    this.sgc = [];
    this.sed = 1;
    this.xgw = 1;
    this.lth = 1;
    this.qjq = [];
    this.cwq = null;
    this.qzj = false;
    this.hec = 0;
    this.qfs = 1;
    this.dbs = 0;
    this.yjj = 0;
    this.jzi = 0;
    this.gjs = 0;
    this.ygd = true;
    this.xrs = false;
    this.nok = false;
    this.uks = false;
    this.djz = false;
    this.pjz = false;
    this.rtr = false;
    this.hie = 1;
    this.rpo = true;
    this.nbq = "";
    this.jma = false;
    this.aqc = false;
    this.vjl = false;
    this.qqx = true;
    this.tyh = false;
    this.pfy = 0;
    this.bcw = 0;
    this.ogv = 0;
    this.euh = "";
    this.psr = "";
    this.qty = "";
    this.jkt = null;
    this.hth = true;
    this.ami = false;
    this.rly = false;
    this.xiu = 20;
    this.com = true;
    this.rgv = false;
    this.zoe = false;
    this.lkx = [15, 20, 25, 30, 35];
    this.kfm = [8, 8, 8, 8, 8];
    this.nrw = [0, 0, 0, 0, 0];
    this.mxc = this.lkx;
    this.rpe = 16;
    this.uin = 16;
    this.tja = this.rpe;
    this.hhk = 12;
    this.hqo = 0;
    this.cee = 0;
    this.rai = [];
    this.xls = true;
    this.vol = false;
    this.aqf = false;
    this.kim = false;
    this.ozx = true;
    this.saj = 0;
    this.xfy = 0;
    this.kiw = [];
    this.doa = true;
    this.nqt = false;
    this.hmo = false;
    this.ibb = false;
    this.cve = false;
    this.tot = false;
    this.nms = 1;
    this.haw = 400;
    this.qqy = 200;
    this.kov = 100;
    this.oou = true;
    this.rby = true;
    this.jwl = false;
    this.cyc = [];
    this.lku = 50;
    this.lcw = null;
    this.arl = null;
    this.hih = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.nsp = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.ykg = false;
    this.ymh = 0;
    this.kje = 0;
    this.aek = -1;
    this.vsv = 0;
    this.zcz = false;
    this.ebc = false;
    this.yps = -1;
    this.uel = false;
    this.hjm = true;
    this.ztb = 3;
    this.tpy = false;
    this.snu = 0;
    this.ymz = true;
    this.omv = 330;
    this.eco = [];
    this.tsu = null;
    this.lpk = null;
    this.ers = [
        [2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1],
        [3, 3, 3, 3, 3],
        [1, 2, 3, 2, 1],
        [3, 2, 1, 2, 3]
    ];
    this.zta = [];
    this.tiw = 1;
    this.loo = 5;
    this.jvk = 1;
    this.vjj = 5;
    this.ucb = true;
    this.cxl = 0;
    this.jol = 0;
    this.rfb = 30;
    this.saq = 50;
    this.ipu = false;
    this.ugm = 0;
    this.lhy = 0;
    this.ciy = false;
    this.tbc = true;
    this.ilb = 0;
    this.xpk = 0;
    this.byy = false;
    this.wyv = 0;
    this.xro = false;
    this.ngd = true;
    this.owp = false;
    this.iqc = false;
    this.puw = null;
    this.zgb = false;
    this.hug = true;
    this.ikb = 0;
    this.gle = 0;
    this.hmf = 0;
    this.trd = 0;
    this.ljj = true;
    this.aig = null;
    this.hpt = false;
    this.ari = false;
    this.jui = true;
    this.kcd = "";
    this.egq = false;
    this.bsm = -1;
    this.dlp = 0;
    this.xng = 0;
    this.szy = 0;
    this.vdk = 0;
    this.id = 0;
    this.odn = 0;
    this.fbd = 0;
    this.xqh = 0;
    this.kzk = 0;
    this.kqo = 0;
    this.yhx = -1;
    this.fuc = 0;
    this.cma = 0;
    this.yof = -1;
    this.kqr = 0;
    this.txz = 0;
    this.dpj = -1;
    this.frj = function (b) {
        if (!kdn.uay.vks) {
            kdn.lgy.frj(b)
        }
    };
    this.kwc = function () {
        var b = new nws();
        b.cjm();
        return b
    };
    this.vxh = function () {
        this.dnt = new ejw()
    };
    this.zji = function () {
        this.dog();
        var f = [];
        if (!(this.pfy > 0 && this.bcw < this.pfy)) {
            while (this.gjn < this.epr()) {
                this.gjn++
            }
            var e = this.mzv(this.nok);
            if (this.gjn > e) {
                var d = (e < 0) ? 0 : e;
                this.gjn = d
            }
        }
        this.yzf = this.ebi[this.gjn];
        this.totalBet = this.wdm();
        this.eig();
        this.ufh();
        this.yln();
        for (var c = 0, b = this.eha.zux("symb"); c < b; c++) {
            this.rai[c] = this.eha.zgs("symb" + c)
        }
        if (kdn.qwt.value38) {
            f[kdn.os.hld] = "w";
            f[kdn.os.cxc] = "l";
            f[kdn.os.evx] = "m";
            f[kdn.os.kjq] = "i";
            f[kdn.os.usv] = "a";
            this.xls = kdn.qwt.value38[f[kdn.lgy.ctc]]
        }
    };
    this.yem = function () {
        this.wyn();
        this.iqe();
        this.bcq();
        this.rkv();
        this.zwl();
        this.ebu();
        if (this.ngd) {
            this.fva()
        }
        if (this.hhw.qyf) {
            this.sqw();
            this.ouf()
        }
        if (this.hhw.mbg && !(this.pfy > 0 && this.bcw < this.pfy)) {
            this.pgc();
            if (this.ysk()) {
                this.ujm()
            }
        }
        if (this.hhw.nos) {
            this.mjg();
            if (!this.hhw.sya) {
                this.wfk()
            }
        }
        if (this.hhw.jeg) {
            this.kme()
        }
        if (this.vks) {
            this.tss()
        } else {
            this.njc();
            if (this.hhw.erm) {
                this.xwa()
            }
            if (this.hce()) {
                this.tbp()
            }
            if (this.kwp()) {
                this.szh()
            }
            if (this.wte() != null && !this.xhi()) {
                this.blo(this.wte())
            }
        }
        if (!(this.vks && !this.qox)) {
            this.mki();
            this.tuj()
        }
        if (this.hhw.sya) {
            this.cvz(this.wte())
        }
        this.nfr();
        if (!this.vks) {
            this.ujc();
            this.uia()
        }
        if (!this.qox) {
            this.sgj()
        }
    };
    this.tbm = function () {
        if (!this.mjs) {
            if (this.pap === false) {
                this.gst.style.marginTop = (-this.height / 2 + this.ubk()) + "px";
                this.gst.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.gst.style.left = "0px";
                this.gst.style.top = "0px";
                this.gst.style.marginTop = ((this.ums - this.height) / 2 + this.ubk()) + "px";
                this.gst.style.marginLeft = ((this.hcb - this.width) / 2) + "px"
            }
            this.gst.style.width = (this.width > this.hcb) ? this.hcb + "px" : this.width + "px";
            this.gst.style.height = (this.height > this.ums) ? this.ums + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            this.noi = document.createElement("canvas");
            this.noi.width = this.hhw.omc.sde.width;
            this.noi.height = this.hhw.omc.sde.height;
            this.llq = this.noi.getContext("2d");
            if (this.alz() === true && typeof WebGL2D != "undefined") {
                try {
                    this.gbr = document.getElementById("canvas2");
                    this.gbr.width = Math.round(this.hhw.gbr.sde.width);
                    this.gbr.height = Math.round(this.hhw.gbr.sde.height);
                    WebGL2D.enable(this.gbr);
                    this.pqc = this.gbr.getContext("webgl-2d");
                    this.umv = true;
                    this.wip = document.createElement("canvas");
                    this.wip.width = this.hhw.omc.sde.width;
                    this.wip.height = this.hhw.omc.sde.height;
                    this.xqw = this.wip.getContext("2d")
                } catch (b) {
                    this.gbr = null;
                    this.pqc = null;
                    this.umv = false
                }
            }
            if (this.qxj) {
                this.qxj.style.width = this.width + "px";
                this.qxj.style.height = this.height + "px"
            }
            this.offsetLeft = this.gst.offsetLeft;
            this.offsetTop = this.gst.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.mjs = true
        }
    };
    this.nfr = function () {};
    this.mjg = function () {
        hwa.prototype.mjg.call(this);
        var b = this.bew.gfj("topi");
        try {
            if (b) {
                if (kdn.qwt.value57 === kdn.ui.vtq || this.wte() != null) {
                    b.zzt("language", this.eha.zgs("icon_l"), sessionStorage.sessionValue1, [kdn.language.EN, kdn.language.DE, kdn.language.RU, kdn.language.EE, kdn.language.ES, kdn.language.TR, kdn.language.CZ, kdn.language.GR, kdn.language.AT, kdn.language.US, kdn.language.BG, kdn.language.CO, kdn.language.MX, kdn.language.CL, kdn.language.VE, kdn.language.BR, kdn.language.GE, kdn.language.HU, kdn.language.RO, kdn.language.PT, kdn.language.FR, kdn.language.HR, kdn.language.IT, kdn.language.SE])
                }
                if (this.xhi() === false) {
                    b.ubc("help", new String("?"), true)
                }
                if (kdn.qwt.value27 && this.jeu) {
                    b.zzt("audio", this.eha.zgs("icon_a"), this.fit[this.lbr], this.fit);
                    if (this.uxy() === true) {
                        b.ubc("melody", this.eha.zgs("icon_m"), this.qqx)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && kdn.lgy.hlm()) {
                    b.ubc("fullscreen", this.eha.zgs("icon_f"), this.bsb)
                }
                if (kdn.qwt.value28 && this.hug) {
                    b.ubc("turbo", this.eha.zgs("icon_t"), this.zgb)
                }
                b.ubc("auto", this.eha.zgs("icon_as"), this.djz);
                b.ubc("gamble", this.eha.zgs("icon_g"), this.iqc)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.wfk = function () {
        hwa.prototype.wfk.call(this);
        var c = this.bew.gfj("topb");
        try {
            if (c) {
                if ((kdn.qwt.value5.length > 1) && (kdn.qwt.value57 === kdn.ui.vtq || this.wte() != null)) {
                    c.vrt("language", this.language.language, this.vnq(kdn.qwt.value5[this.uve]), this.ghr, this.dnt.language, 0, 1)
                }
                if (kdn.qwt.value27 && this.jeu) {
                    c.vrt("audio", this.language.audio, this.eha.zgs("btn_a"), this.gga, this.dnt.audio, this.lbr, this.fit.length);
                    if (this.uxy() === true) {
                        c.vrt("melody", this.language.skd, this.eha.zgs("btn_mu"), this.iku, this.dnt.csr, (this.qqx) ? 1 : 0, 2)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && kdn.lgy.hlm()) {
                    c.vrt("fullscreen", this.language.bsb, this.eha.zgs("btn_f"), (kdn.lgy.zvx) ? this.ffi : this.zeq, this.dnt.bsb, (this.bsb) ? 1 : 0, 2)
                }
                if (kdn.qwt.value28 && this.hug) {
                    c.vrt("turbo", this.language.zgb, this.eha.zgs("btn_t"), this.llg, this.dnt.zgb, (this.zgb) ? 1 : 0, 2)
                }
                c.rtu("help", this.language.yly, this.eha.zgs("btn_p"), this.lvx, this.dnt.dka);
                if (this.psr != "" && (kdn.qwt.value81 && kdn.qwt.value81.g === true)) {
                    c.rtu("rules", this.language.nfp, this.eha.zgs("btn_gr"), this.hun, this.dnt.gcd)
                }
                if (kdn.qwt.value12 && !this.apz()) {
                    c.rtu("history", this.language.qlo, this.eha.zgs("btn_h"), this.nvr, this.dnt.qlo)
                }
                if (kdn.qwt.value36 && !this.apz()) {
                    c.rtu("statistic", this.language.sjx, this.eha.zgs("btn_st"), this.apt, this.dnt.sjx)
                }
                c.pmq()
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.cvz = function (b) {
        hwa.prototype.cvz.call(this, b);
        var d = this.bew.gfj("settings"),
            e = "",
            c = 0;
        if (d) {
            if (kdn.qwt.value5.length > 1) {
                c++;
                d.vrt("language", this.language.language, this.vnq(kdn.qwt.value5[this.uve]), this.ghr, 0, 1)
            }
            if (kdn.qwt.value27 && this.jeu) {
                c++;
                d.vrt("audio", this.language.audio, this.eha.zgs("btn_a"), this.gga, this.lbr, this.fit.length);
                if (this.uxy() === true) {
                    c++;
                    d.vrt("melody", this.language.skd, this.eha.zgs("btn_mu"), this.iku, (this.qqx) ? 1 : 0, 2)
                }
            }
            if (sessionStorage.sessionValue14 == "true" && kdn.lgy.hlm()) {
                c++;
                d.vrt("fullscreen", this.language.bsb, this.eha.zgs("btn_f"), this.ffi, (this.bsb) ? 1 : 0, 2)
            }
            if (kdn.qwt.value28 && this.hug && c < 4) {
                d.vrt("turbo", this.language.zgb, this.eha.zgs("btn_t"), this.llg, (this.zgb) ? 1 : 0, 2)
            }
            d.vrt("gamble", this.language.iqc, this.eha.zgs("btn_g"), this.tfl, (this.iqc) ? 1 : 0, 2);
            if (this.qzo[this.vtv] === kdn.cwg.umn) {
                e = this.language.left
            } else {
                if (this.qzo[this.vtv] === kdn.cwg.zgd) {
                    e = this.language.tsp
                } else {
                    if (this.qzo[this.vtv] === kdn.cwg.nyd) {
                        e = this.language.tmu
                    }
                }
            }
            d.vrt("adjustment", e, this.eha.zgs("btn_l"), this.mez, (this.evj === kdn.hhw.yjt) ? 0 : 1, 2);
            d.pzx("help", this.language.dka, this.eha.zgs("btn_p"), this.lvx);
            if (this.psr != "" && (kdn.qwt.value81 && kdn.qwt.value81.g === true)) {
                d.pzx("rules", this.language.nev, this.eha.zgs("btn_gr"), this.hun)
            }
            if (kdn.qwt.value12 && !this.apz()) {
                d.pzx("history", this.language.qlo, this.eha.zgs("btn_h"), this.nvr)
            }
            if (kdn.qwt.value36 && !this.apz()) {
                d.pzx("statistic", this.language.sjx, this.eha.zgs("btn_st"), this.apt)
            }
            d.nrq = this.ysk();
            d.vmb(this.hhw.ckq);
            d.tqi(this.hhw.ckq);
            d.idh(this.style.ckq);
            d.pjc(this.language, true)
        }
    };
    this.wyn = function () {
        var b = (this.vks && this.jpq) ? this.hhw.wwj : this.hhw.dfq;
        this.pgn = new ckw();
        this.pgn.parent = this;
        this.pgn.ljj = this.ljj;
        this.pgn.cjm(b.sde, null, this.context2D);
        this.pgn.vmb(b, this.style.dfq);
        this.pgn.hji(this.lcw, 0);
        this.pgn.hji(this.arl, 1)
    };
    this.ebu = function () {};
    this.njc = function () {};
    this.tuj = function () {
        this.ust.ezt(this.hhw.ajq, this.style.ajq, this.eha.zgs("btn_s"))
    };
    this.tmf = function () {};
    this.ceo = function () {};
    this.xwa = function () {
        var b = new afp();
        b.cjm(this.hhw.top.sde, null, this.context2D);
        b.parent = this;
        this.bew.udd("tops", b)
    };
    this.bcq = function () {
        this.eco = []
    };
    this.iqe = function () {
        var e = [],
            c = (this.state == kdn.mzw.kep.rns || this.state == kdn.mzw.kep.jrd || this.state == kdn.mzw.kep.vpc || this.state == kdn.mzw.kep.prd || this.state == kdn.mzw.kep.pij) ? true : false;
        if (c) {
            if (this.ygd) {
                e = this.cwq
            } else {
                e = this.eyz
            }
        } else {
            e = this.eyz
        }
        this.yke = new xwu();
        this.auv = new xwu();
        this.qmr = new xwu();
        this.joi = new xwu();
        this.coh = new xwu();
        this.yke.rlu = this.eha.oku("stop1");
        this.auv.rlu = this.eha.oku("stop2");
        this.qmr.rlu = this.eha.oku("stop1");
        if (this.joi != null) {
            this.joi.rlu = this.eha.oku("stop2")
        }
        if (this.coh != null) {
            this.coh.rlu = this.eha.oku("stop1")
        }
        if (this.umv === false) {
            this.yke.cjm(this.hhw.yke.sde, this.context2D, null, (this.xls) ? this.hhw.yke.hyt : this.hhw.yke.hpk, this.rai, this.ond, this.r1, this.mxc[0])
        } else {
            this.yke.cjm(this.hhw.yke.beg, this.pqc, null, (this.xls) ? this.hhw.yke.hyt : this.hhw.yke.hpk, this.rai, this.ond, this.r1, this.mxc[0])
        }
        this.yke.xze(e[0], true);
        if (this.umv === false) {
            this.auv.cjm(this.hhw.auv.sde, this.context2D, null, (this.xls) ? this.hhw.auv.hyt : this.hhw.auv.hpk, this.rai, this.ond, this.r2, this.mxc[1])
        } else {
            this.auv.cjm(this.hhw.auv.beg, this.pqc, null, (this.xls) ? this.hhw.auv.hyt : this.hhw.auv.hpk, this.rai, this.ond, this.r2, this.mxc[1])
        }
        this.auv.xze(e[1], true);
        if (this.umv === false) {
            this.qmr.cjm(this.hhw.qmr.sde, this.context2D, null, (this.xls) ? this.hhw.qmr.hyt : this.hhw.qmr.hpk, this.rai, this.ond, this.r3, this.mxc[2])
        } else {
            this.qmr.cjm(this.hhw.qmr.beg, this.pqc, null, (this.xls) ? this.hhw.qmr.hyt : this.hhw.qmr.hpk, this.rai, this.ond, this.r3, this.mxc[2])
        }
        this.qmr.xze(e[2], true);
        if (this.umv === false) {
            this.joi.cjm(this.hhw.joi.sde, this.context2D, null, (this.xls) ? this.hhw.joi.hyt : this.hhw.joi.hpk, this.rai, this.ond, this.r4, this.mxc[3])
        } else {
            this.joi.cjm(this.hhw.joi.beg, this.pqc, null, (this.xls) ? this.hhw.joi.hyt : this.hhw.joi.hpk, this.rai, this.ond, this.r4, this.mxc[3])
        }
        this.joi.xze(e[3], true);
        if (this.umv === false) {
            this.coh.cjm(this.hhw.coh.sde, this.context2D, null, (this.xls) ? this.hhw.coh.hyt : this.hhw.coh.hpk, this.rai, this.ond, this.r5, this.mxc[4])
        } else {
            this.coh.cjm(this.hhw.coh.beg, this.pqc, null, (this.xls) ? this.hhw.coh.hyt : this.hhw.coh.hpk, this.rai, this.ond, this.r5, this.mxc[4])
        }
        this.coh.xze(e[4], true);
        this.bsj = [this.yke, this.auv, this.qmr, this.joi, this.coh];
        this.jkt = [true, true, true, true, true];
        for (var d = 0, b = this.bsj.length; d < b; d++) {
            this.bsj[d].parent = this;
            this.bsj[d].idh(this.style.vwe);
            this.bsj[d].dyu(this.eha.zgs("reelfront"))
        }
    };
    this.mki = function () {
        this.ust = new fsl();
        this.ust.cjm(this.hhw.ajq.sde, null, this.context2D);
        this.ust.parent = this;
        this.ust.flc(false);
        this.ust.tqi(this.hhw.ajq);
        this.ust.idh(this.style.ajq)
    };
    this.fva = function () {
        var c = this.hhw.iqc,
            b = this.eha.zgs("g_back");
        if (this.vks && this.jpq && this.style.uay.bap) {
            c = this.hhw.zsq;
            b = this.eha.zgs("m_g_back")
        }
        this.miq = new oog();
        this.miq.parent = this;
        this.miq.cjm(c.sde, null, this.context2D);
        this.miq.ldi = b;
        this.miq.vmb(c);
        this.miq.idh(this.style.iqc);
        this.miq.wdf();
        this.miq.hji(this.puw, 0);
        this.miq.dft(false)
    };
    this.rkv = function () {};
    this.zwl = function () {
        this.ied = this.wuh();
        this.ied.parent = this;
        this.ied.tsu = this.tsu;
        this.ied.zsr = this.zyt;
        this.ied.ers = this.ers;
        this.ied.lpk = this.lpk;
        this.ied.ztb = this.ztb;
        this.ied.coo = this.omv;
        this.ied.xju = this.eco;
        this.ied.ijf = this.ykg;
        this.ied.sxv = (this.zcz == true || this.ebc == true);
        this.ied.aas = this.ymz;
        this.ied.oou = this.oou;
        this.ied.tqi(this.hhw.fqr);
        this.ied.idh(this.style.fqr)
    };
    this.pgc = function () {
        var b = new inb();
        b.cjm(this.hhw.naz.sde, null, this.context2D);
        b.parent = this;
        b.wgw = this.language.yzf;
        b.mik = this.ttf;
        b.lss = this.dnt.meg.pdi;
        b.fih = this.dnt.zce.pdi;
        b.hgc = this.eha.zgs("effect");
        b.tqi(this.hhw.naz);
        b.idh(this.style.hrt);
        b.zji(this.ebi, this.epr(), this.mzv(false));
        b.agn(this.kfv(), this.mzv(true));
        b.gqq(this.gjn, false);
        b.dft(false);
        this.bew.udd("betsel", b)
    };
    this.ujm = function () {
        this.qjq = [];
        for (var b = this.sed; b <= this.xgw;) {
            this.qjq.push(b);
            b += this.lth
        }
        var c = new tfv();
        c.cjm(this.hhw.rig.sde, null, this.context2D);
        c.parent = this;
        c.wgw = this.language.cpa;
        c.mik = this.mds;
        c.lss = this.dnt.vag.pdi;
        c.fih = this.dnt.lqk.pdi;
        c.hgc = this.eha.zgs("effect");
        c.tqi(this.hhw.rig);
        c.idh(this.style.hrt);
        c.zji(this.qjq, 0, this.qjq.length - 1);
        c.dit(this.cpa, false);
        c.dft(false);
        this.bew.udd("linesel", c)
    };
    this.kme = function () {
        this.bew.udd("llinep", this.pbe(this.hhw.zxb.sde.x, this.hhw.zxb.sde.y, this.eha.zgs("winlines"), this.tiw, this.loo, this.hhw.zxb));
        this.bew.udd("rlinep", this.pbe(this.hhw.auf.sde.x, this.hhw.auf.sde.y, this.eha.zgs("winlines"), this.jvk, this.vjj, this.hhw.auf));
        this.bew.qex("llinep", "#aoh", [this.cpa]);
        this.bew.qex("rlinep", "#aoh", [this.cpa])
    };
    this.sqw = function () {
        var c = new utv(),
            b = this.eha.zgs("m_win");
        if (this.vks && this.jpq && this.style.uay.bap) {
            b = this.eha.zgs("m_m_win")
        }
        c.cjm(this.hhw.fin.sde, this.context2D, null, b, "");
        c.parent = this;
        c.tqi(this.hhw.fin);
        c.idh(this.style.fin);
        c.dft(false);
        this.bew.udd("winp", c)
    };
    this.ouf = function () {};
    this.tss = function () {
        var b = new oui();
        b.cjm(this.hhw.qlo.sde, null, this.context2D);
        b.parent = this;
        b.vmb(this.hhw.qlo);
        b.idh(this.style.qlo);
        this.bew.udd("history", b)
    };
    this.pbe = function (b, j, d, g, c, e) {
        var f = new twu();
        f.cjm(new bzm(b, j, 0, 0), this.context2D);
        f.dhv = this.zta;
        f.parent = this;
        f.str = g;
        f.ynl = c;
        f.tqi(e);
        f.kdm(d);
        f.dft(true);
        return f
    };
    this.wuh = function () {
        var e = [];
        for (var d = 0, b = this.eha.zux("symb"); d < b; d++) {
            e[d] = this.eha.zgs("symb" + d)
        }
        var c = new zic();
        c.cjm(this.hhw.fqr.sde, null, this.context2D);
        c.uqq = e;
        c.gaq = this.eha.zgs("reelfront");
        c.dft(false);
        return c
    };
    this.zmn = function () {
        if (this.aqf === true) {
            for (var c = 0, b = this.bsj.length; c < b; c++) {
                if (!this.umv) {
                    this.bsj[c].cfy(this.noi, this.hhw.omc.fkd, this.hhw.omc.paq)
                }
            }
            if (this.ied) {
                this.ied.cfy(this.noi, this.hhw.omc.fkd + this.ied.x, this.hhw.omc.paq + this.ied.y)
            }
        }
        if (this.pgn) {
            this.pgn.cfy(this.noi, this.hhw.omc.fkd, this.hhw.omc.paq)
        }
    };
    this.hks = function (d, c, b) {
        this.frj({
            type: "gameDataLoaded",
            sender: this.yfk,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                success: true
            }
        });
        this.pbw = true;
        this.state = d;
        this.hej = b;
        clearInterval(this.cnw);
        if (this.jeu) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.lbr = 0
            }
            if (this.eha.zot === true) {
                this.msh(this.fit[this.lbr])
            } else {
                this.lcr((this.fit[this.lbr] === 0))
            }
        }
        if (this.bzd === true) {
            this.pdk = true
        }
        this.zji();
        this.yem();
        this.edv();
        this.xfi();
        if (this.miq) {
            this.miq.wvx.qex("history", "#zui", [c])
        }
        this.eut();
        window.vym(this.sdd)
    };
    this.sdd = function () {
        kdn.uay.zvq(kdn.uay.hej);
        kdn.uay.bky = true;
        kdn.uay.apu();
        kdn.uay.syj();
        kdn.uay.zmn();
        kdn.uay.zwp();
        if (kdn.uay.bzd === true) {
            kdn.uay.ykk(true)
        }
        if (kdn.lgy.ctc === kdn.os.usv && kdn.lgy.hqv !== kdn.ifs.thn) {
            kdn.uay.xaq([{
                sek: kdn.lzh.ruq
            }])
        } else {
            if (kdn.uay.pfy > 0) {
                if (kdn.uay.bcw === 0) {
                    kdn.uay.xaq([{
                        sek: kdn.lzh.kef
                    }])
                } else {
                    if (kdn.uay.bcw < kdn.uay.pfy) {
                        kdn.uay.xaq([{
                            sek: kdn.lzh.nnz
                        }])
                    }
                }
            } else {
                kdn.uay.kfs(kdn.uay.state)
            }
        }
        if (kdn.qwt.value37 && !kdn.uay.apz()) {
            kdn.uay.glr()
        }
        if (kdn.uay.kwp()) {
            setTimeout(kdn.uay.zwp, 20)
        }
    };
    this.vhz = function () {
        this.uwd = new eqr().cjm(this, kdn.qwt.value6)
    };
    this.odo = function () {
        this.uwd = new wbx().cjm(this, kdn.qwt.value6)
    };
    this.dmk = function (q) {
        if (q.preventDefault) {
            q.preventDefault()
        }
        if (q.stopPropagation) {
            q.stopPropagation()
        }
        if (this.pdk) {
            return
        }
        var k = 0,
            j = 0,
            u = false,
            l = false,
            f = false,
            v = this.bew.gfj("stats"),
            t = this.bew.gfj("topb"),
            c = this.bew.gfj("topi"),
            d = this.bew.gfj("betsel"),
            n = this.bew.gfj("linesel"),
            o = this.bew.gfj("llinep"),
            w = this.bew.gfj("rlinep"),
            z = this.bew.gfj("finfop"),
            p = this.bew.gfj("finfoc"),
            m = this.bew.gfj("autop"),
            b = this.bew.gfj("settings"),
            g = this.bew.gfj("jwp");
        if (q.touches) {
            var e = q.touches[0];
            u = true;
            if (!this.aab) {
                k = e.pageX - this.offsetLeft;
                j = e.pageY - this.offsetTop
            } else {
                k = Math.round((e.pageX - this.offsetLeft) / this.rif);
                j = Math.round((e.pageY - this.offsetTop) / this.lwf)
            }
        } else {
            if (q.which != 1) {
                return
            }
            if (!this.aab) {
                k = q.pageX - this.offsetLeft;
                j = q.pageY - this.offsetTop
            } else {
                k = Math.round((q.pageX - this.offsetLeft) / this.rif);
                j = Math.round((q.pageY - this.offsetTop) / this.lwf)
            }
        }
        this.svi();
        if (m && m.fww()) {
            if (m.dmk(k, j)) {
                return
            }
        }
        if (t && t.fww()) {
            if (t.dmk(k, j)) {
                clearTimeout(this.kqr);
                return
            } else {
                f = true
            }
        }
        if (d) {
            if (d.fww()) {
                if (d.dmk(k, j, u)) {
                    clearTimeout(this.kqr);
                    return
                } else {
                    l = true
                }
            }
        }
        if (n) {
            if (n.fww()) {
                if (n.dmk(k, j, u)) {
                    clearTimeout(this.kqr);
                    return
                } else {
                    l = true
                }
            }
        }
        if (f) {
            this.hgk(this.pgn.spy(k, j, null));
            return
        } else {
            if (l) {
                if ((d && d.ovk()) && ((n && n.ovk()) || !n)) {
                    this.hvi(this.pgn.spy(k, j, null))
                }
                return
            }
        }
        if (this.ysk() && !this.tyh && o && w) {
            if (o.dmk(k, j, l)) {
                return
            } else {
                if (w.dmk(k, j, l)) {
                    return
                }
            }
        }
        if (z) {
            if (z.dmk(k, j)) {
                return
            }
        }
        if (p) {
            if (p.dmk(k, j)) {
                return
            }
        }
        if (b && b.fww()) {
            if (b.dmk(k, j)) {
                return
            }
        }
        if (c) {
            if (c.dmk(k, j, u)) {
                return
            }
        }
        if (v && v.fww()) {
            if (v.dmk(k, j)) {
                return
            }
        }
        if (this.ust && this.ust.fww()) {
            if (this.ust.dmk(k, j)) {
                return
            }
        }
        if (this.miq && this.miq.fww()) {
            if (this.miq.dmk(k, j)) {
                return
            }
        }
        if (g) {
            if (g.dmk(k, j)) {
                return
            }
        }
        if (this.pgn) {
            if (this.pgn.dmk(k, j, l)) {
                return
            }
        }
        for (var r = 0, s = this.bsj.length; r < s; r++) {
            if (this.bsj[r].dmk(k, j)) {
                return
            }
        }
    };
    this.szd = function (j) {
        if (j.preventDefault) {
            j.preventDefault()
        }
        if (j.stopPropagation) {
            j.stopPropagation()
        }
        if (this.pdk) {
            return
        }
        var k = this.bew.gfj("topb"),
            d = this.bew.gfj("autop"),
            g = this.bew.gfj("settings"),
            c = this.bew.gfj("betsel"),
            e = this.bew.gfj("linesel");
        if (d && d.fww()) {
            if (d.szd()) {
                return
            }
        }
        if (c) {
            if (c.szd()) {
                return
            }
        }
        if (e) {
            if (e.szd()) {
                return
            }
        }
        if (this.ust && this.ust.fww()) {
            if (this.ust.szd()) {
                return
            }
        }
        if (this.miq && this.miq.fww()) {
            if (this.miq.szd()) {
                return
            }
        }
        if (this.pgn) {
            if (this.pgn.szd()) {
                return
            }
        }
        if (k) {
            if (k.szd()) {
                return
            }
        }
        if (g) {
            if (g.szd()) {
                return
            }
        }
        for (var f = 0, b = this.bsj.length; f < b; f++) {
            if (this.bsj[f].szd()) {
                return
            }
        }
    };
    this.sxr = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.pdk) {
            return
        }
        var k = false,
            e = false,
            l = this.bew.gfj("topb"),
            b = this.bew.gfj("betsel"),
            d = this.bew.gfj("linesel"),
            g = this.bew.gfj("finfop"),
            j = this.bew.gfj("finfoc"),
            f = this.bew.gfj("autop");
        if (f && f.fww()) {
            if (f.sxr(c.keyCode)) {
                return
            }
        }
        if (l) {
            if (l.sxr(c.keyCode)) {
                clearTimeout(this.kqr);
                return
            } else {
                if (l.fww() && l.ovk()) {
                    e = true
                }
            }
        }
        if (g) {
            if (g.sxr()) {
                return
            }
        }
        if (j) {
            if (j.sxr(c.keyCode)) {
                return
            }
        }
        if (b) {
            if (b.fww()) {
                if (b.sxr(c.keyCode)) {
                    clearTimeout(this.kqr);
                    return
                } else {
                    k = true
                }
            }
        }
        if (d) {
            if (d.fww()) {
                if (d.sxr(c.keyCode)) {
                    clearTimeout(this.kqr);
                    return
                } else {
                    k = true
                }
            }
        }
        if (e) {
            this.hgk(this.pgn.spy(null, null, c.keyCode));
            return
        } else {
            if (k) {
                if ((b && b.ovk()) && ((d && d.ovk()) || !d)) {
                    this.hvi(this.pgn.spy(null, null, c.keyCode))
                }
                return
            }
        }
        if (this.ust && this.ust.fww()) {
            if (this.ust.sxr(c.keyCode)) {
                return
            }
        }
        if (this.miq && this.miq.fww()) {
            if (this.miq.sxr(c.keyCode)) {
                return
            }
        }
        if (this.pgn) {
            if (this.pgn.sxr(c.keyCode)) {
                return
            }
        }
    };
    this.qpj = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.pdk) {
            return
        }
        var b = this.bew.gfj("autop"),
            d = this.bew.gfj("topb");
        if (b && b.fww()) {
            if (b.qpj()) {
                return
            }
        }
        if (this.ust && this.ust.fww()) {
            if (this.ust.qpj()) {
                return
            }
        }
        if (this.miq && this.miq.fww()) {
            if (this.miq.qpj()) {
                return
            }
        }
        if (this.pgn) {
            if (this.pgn.qpj(c.keyCode)) {
                return
            }
        }
        if (d) {
            if (d.qpj()) {
                return
            }
        }
    };
    this.xhi = function () {
        return (kdn.lgy.jmt() && !this.vks)
    };
    this.mib = function () {
        return (kdn.lgy.jmt() && !this.qox)
    };
    this.uxy = function () {
        return (this.vjl === true && this.eha.zot === true)
    };
    this.xbm = function () {
        if (this.uxy() === true) {
            this.eha.mtk("melody")
        }
    };
    this.nft = function () {
        if (this.uxy() === true) {
            this.eha.xuk("melody")
        }
    };
    this.nmv = function (c, b) {
        if (this.uxy() === true && this.qqx === true) {
            this.eha.awi("melody", c, b)
        }
    };
    this.wgp = function () {
        return false
    };
    this.sxu = function () {
        return 1
    };
    this.bab = function () {
        return 0
    };
    this.dwj = function (b) {
        this.hhw = this.ktr(b);
        this.width = this.hhw.canvas.sde.width;
        this.height = this.hhw.canvas.sde.height;
        this.gfa();
        this.fky();
        this.gay()
    };
    this.xba = function () {
        this.style = new jau()
    };
    this.ktr = function (b) {
        this.evj = b;
        if (b == kdn.hhw.ooj) {
            return new xcm()
        } else {
            if (b == kdn.hhw.jga) {
                return new htl()
            } else {
                if (b == kdn.hhw.ejz) {
                    return new cyi()
                } else {
                    if (b == kdn.hhw.mgr) {
                        return new oyx()
                    } else {
                        if (b == kdn.hhw.ktq) {
                            return new lpr()
                        } else {
                            if (b == kdn.hhw.ntj) {
                                return new zcu()
                            } else {
                                if (b == kdn.hhw.sot) {
                                    return new cco()
                                } else {
                                    if (b == kdn.hhw.wfg) {
                                        return new xwz()
                                    } else {
                                        if (b == kdn.hhw.rxl) {
                                            return new vfg()
                                        } else {
                                            if (b == kdn.hhw.ssg) {
                                                return new lik()
                                            } else {
                                                if (b == kdn.hhw.yjt) {
                                                    return new gpv()
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
    this.gay = function () {};
    this.sax = function (b) {
        if (this.mjs) {
            this.eaw();
            this.gtn(b);
            this.zmn()
        } else {
            this.fsd()
        }
    };
    this.eaw = function () {
        this.canvas.width = 0;
        if (this.pap === false) {
            this.gst.style.marginTop = (-this.height / 2 + this.ubk()) + "px";
            this.gst.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.gst.style.left = "0px";
            this.gst.style.top = "0px";
            this.gst.style.marginTop = ((this.ums - this.height) / 2 + this.ubk()) + "px";
            this.gst.style.marginLeft = ((this.hcb - this.width) / 2) + "px"
        }
        this.gst.style.width = (this.width > this.hcb) ? this.hcb + "px" : this.width + "px";
        this.gst.style.height = (this.height > this.ums) ? this.ums + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.qxj) {
            this.qxj.style.width = this.width + "px";
            this.qxj.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.gtn = function (b) {
        this.hub();
        this.rmq();
        this.hsu();
        this.fwy();
        this.egz();
        if (!(this.vks && !this.qox)) {
            this.gcz()
        }
        if (!this.vks) {
            this.lyz();
            if (this.hhw.erm) {
                if (this.bew.gfj("tops")) {
                    this.nfy()
                } else {
                    this.xwa()
                }
            } else {
                this.bew.ysn("tops")
            }
            if (this.hce()) {
                this.pdt()
            }
            this.gsk();
            if (this.kwp()) {
                this.cmb()
            }
        } else {
            this.tss()
        }
        if (this.hhw.qyf) {
            this.eou();
            this.hqq()
        }
        if (this.hhw.mbg) {
            this.jni();
            if (this.ysk()) {
                this.mtz()
            }
        }
        if (this.hhw.nos) {
            this.sru();
            if (!this.hhw.sya) {
                this.gcs()
            }
        }
        if (this.hhw.jeg) {
            this.fss()
        }
        if (this.hhw.sya) {
            this.nfe()
        }
        this.wxe();
        if (b) {
            this.rne()
        }
        this.ubj();
        this.ppy();
        this.nyu()
    };
    this.hub = function () {
        if (this.pgn) {
            var b = (this.vks && this.jpq) ? this.hhw.wwj : this.hhw.dfq;
            this.pgn.yai(b.sde);
            this.pgn.tqi(b, this.qzj);
            if (this.hhw.ibz === true) {
                this.pgn.idh(this.style.dfq, this.qzj)
            }
        }
    };
    this.rmq = function () {
        if (this.yke) {
            this.yke.yai((this.umv === false) ? this.hhw.yke.sde : this.hhw.yke.beg, (this.xls) ? this.hhw.yke.hyt : this.hhw.yke.hpk)
        }
        if (this.auv) {
            this.auv.yai((this.umv === false) ? this.hhw.auv.sde : this.hhw.auv.beg, (this.xls) ? this.hhw.auv.hyt : this.hhw.auv.hpk)
        }
        if (this.qmr) {
            this.qmr.yai((this.umv === false) ? this.hhw.qmr.sde : this.hhw.qmr.beg, (this.xls) ? this.hhw.qmr.hyt : this.hhw.qmr.hpk)
        }
        if (this.joi) {
            this.joi.yai((this.umv === false) ? this.hhw.joi.sde : this.hhw.joi.beg, (this.xls) ? this.hhw.joi.hyt : this.hhw.joi.hpk)
        }
        if (this.coh) {
            this.coh.yai((this.umv === false) ? this.hhw.coh.sde : this.hhw.coh.beg, (this.xls) ? this.hhw.coh.hyt : this.hhw.coh.hpk)
        }
    };
    this.eou = function () {
        var b = this.bew.gfj("winp");
        if (b) {
            b.yai(this.hhw.fin.sde);
            b.tqi(this.hhw.fin)
        }
    };
    this.hqq = function () {};
    this.hsu = function () {
        if (this.ied) {
            this.ied.yai(this.hhw.fqr.sde);
            this.ied.tsu = this.tsu;
            this.ied.lpk = this.lpk;
            this.ied.tqi(this.hhw.fqr)
        }
    };
    this.fss = function () {
        var c = this.bew.gfj("llinep"),
            b = this.bew.gfj("rlinep");
        if (c) {
            c.x = this.hhw.zxb.sde.x;
            c.y = this.hhw.zxb.sde.y;
            c.tqi(this.hhw.zxb)
        }
        if (b) {
            b.x = this.hhw.auf.sde.x;
            b.y = this.hhw.auf.sde.y;
            b.tqi(this.hhw.auf)
        }
    };
    this.jni = function () {
        var b = this.bew.gfj("betsel");
        if (b) {
            b.yai(this.hhw.naz.sde);
            b.tqi(this.hhw.naz)
        }
    };
    this.mtz = function () {
        var b = this.bew.gfj("linesel");
        if (b) {
            b.yai(this.hhw.rig.sde);
            b.tqi(this.hhw.rig)
        }
    };
    this.nfy = function () {
        var b = this.bew.gfj("tops");
        if (b) {
            b.yai(this.hhw.top.sde);
            b.dft(this.hhw.erm)
        }
    };
    this.gcz = function () {
        if (this.ust) {
            this.ust.yai(this.hhw.ajq.sde);
            this.ust.tqi(this.hhw.ajq);
            if (this.hhw.ibz === true) {
                this.ust.idh(this.style.ajq)
            }
        }
    };
    this.egz = function () {
        if (this.miq) {
            var b = (this.vks && this.jpq) ? this.hhw.zsq : this.hhw.iqc;
            this.miq.yai(b.sde);
            this.miq.tqi(b);
            if (this.hhw.ibz === true) {
                this.miq.idh(this.style.iqc)
            }
        }
    };
    this.fwy = function () {};
    this.lyz = function () {};
    this.wxe = function () {};
    this.rne = function () {
        if (this.bew.gfj("tops")) {
            this.ust.idi(true);
            this.ceo()
        } else {
            this.imm = null;
            this.ust.mvd(this.afn, true)
        }
        this.ust.wye()
    };
    this.gfa = function () {
        var c = 0 - this.hhw.fqr.sde.x,
            b = 0 - this.hhw.fqr.sde.y;
        this.lpk = [
            [{
                x: this.hhw.yke.sde.x + c,
                y: this.hhw.yke.sde.y + b
            }, {
                x: this.hhw.yke.sde.x + c,
                y: this.hhw.yke.sde.y + b + this.hhw.fqr.ahd
            }, {
                x: this.hhw.yke.sde.x + c,
                y: this.hhw.yke.sde.y + b + 2 * this.hhw.fqr.ahd
            }],
            [{
                x: this.hhw.auv.sde.x + c,
                y: this.hhw.auv.sde.y + b
            }, {
                x: this.hhw.auv.sde.x + c,
                y: this.hhw.auv.sde.y + b + this.hhw.fqr.ahd
            }, {
                x: this.hhw.auv.sde.x + c,
                y: this.hhw.auv.sde.y + b + 2 * this.hhw.fqr.ahd
            }],
            [{
                x: this.hhw.qmr.sde.x + c,
                y: this.hhw.qmr.sde.y + b
            }, {
                x: this.hhw.qmr.sde.x + c,
                y: this.hhw.qmr.sde.y + b + this.hhw.fqr.ahd
            }, {
                x: this.hhw.qmr.sde.x + c,
                y: this.hhw.qmr.sde.y + b + 2 * this.hhw.fqr.ahd
            }],
            [{
                x: this.hhw.joi.sde.x + c,
                y: this.hhw.joi.sde.y + b
            }, {
                x: this.hhw.joi.sde.x + c,
                y: this.hhw.joi.sde.y + b + this.hhw.fqr.ahd
            }, {
                x: this.hhw.joi.sde.x + c,
                y: this.hhw.joi.sde.y + b + 2 * this.hhw.fqr.ahd
            }],
            [{
                x: this.hhw.coh.sde.x + c,
                y: this.hhw.coh.sde.y + b
            }, {
                x: this.hhw.coh.sde.x + c,
                y: this.hhw.coh.sde.y + b + this.hhw.fqr.ahd
            }, {
                x: this.hhw.coh.sde.x + c,
                y: this.hhw.coh.sde.y + b + 2 * this.hhw.fqr.ahd
            }]
        ]
    };
    this.fky = function () {
        var e = 0 - this.hhw.fqr.sde.x,
            b = 0 - this.hhw.fqr.sde.y;
        this.tsu = [];
        for (var g = 0, f = this.hhw.tsu.length; g < f; g++) {
            this.tsu[g] = [];
            for (var d = 0, k = 0, c = this.hhw.tsu[g].length; d < c; d += 2, k += 1) {
                this.tsu[g][k] = {
                    x: this.hhw.tsu[g][d] + e,
                    y: this.hhw.tsu[g][d + 1] + b
                }
            }
        }
    };
    this.eig = function () {
        this.lcw = [];
        if (this.apz() === false && this.nbq != "") {
            this.lcw.push(this.nbq)
        }
        this.lcw.push(this.language.ktc);
        this.lcw.push(this.language.wmo + " " + this.vey(this.ewp()) + ((this.xhi() === true) ? "|" : " ") + this.language.qtg + " " + this.vey(this.lae()));
        this.lcw.push(this.language.ytg)
    };
    this.ufh = function () {
        this.arl = [];
        this.arl[0] = this.language.ccw;
        this.arl[1] = this.language.www
    };
    this.yln = function () {
        this.puw = [];
        this.puw[0] = this.language.tlw;
        this.puw[1] = this.language.ycy
    };
    this.rlm = function () {
        hwa.prototype.rlm.call(this);
        if (this.dqg() === true) {
            this.eha.cdq(true);
            this.eha.iii(kdn.qwt.value45 === kdn.hbo.bqz || kdn.qwt.value45 === kdn.hbo.ygc)
        }
    };
    this.bmq = function () {
        var c = "";
        this.eha.spi("spin", null, false, this.hif + "reels");
        this.eha.spi("stop1", null, false, this.hif + "stop_reel2");
        this.eha.spi("stop2", null, false, this.hif + "stop_reel2");
        this.eha.spi("start", null, false, this.hif + "onstart");
        if (this.uxy() === true) {
            this.eha.spi("melody", null, true, this.hif + "background")
        }
        if (this.saj > 0) {
            this.eha.spi("wincountfade", null, false, this.hif + "count_fade")
        }
        c = kdn.qwt.value30 + "/slot/sounds/";
        this.eha.spi("winfinal", this.huq, false, c + "winfinal");
        if (this.nms <= 2) {
            this.eha.spi("wincount", null, false, c + "countup" + this.nms + "1");
            this.eha.spi("wincount1", null, false, c + "countup" + this.nms + "2");
            this.eha.spi("wincount3", null, false, c + "countup" + this.nms + "3");
            this.eha.spi("wincount5", null, false, c + "countup" + this.nms + "4");
            if (this.eha.zot === false) {
                this.eha.spi("wincount2", null, false, c + "countup" + this.nms + "2");
                this.eha.spi("wincount4", null, false, c + "countup" + this.nms + "3");
                this.eha.spi("wincount6", null, false, c + "countup" + this.nms + "4")
            }
            this.eha.spi("winline", null, false, c + "winline");
            this.eha.spi("collect", null, false, c + "collect");
            this.eha.spi("collectend", null, false, c + "collect1")
        }
        c = kdn.qwt.value30 + "/basic/sounds/";
        this.eha.spi("silence", null, false, c + "silence");
        this.eha.spi("audioon", null, false, c + "audio_on");
        if (!kdn.qwt.value55) {
            if (this.xhi() === false) {
                this.eha.spi("btn", null, false, c + "btn");
                this.eha.spi("auto_on", null, false, c + "auto_on");
                this.eha.spi("auto_off", null, false, c + "auto_off");
                this.eha.spi("gamble_on", null, false, c + "gamble_on");
                this.eha.spi("gamble_off", null, false, c + "gamble_off");
                if (this.uxy() === false && this.nms <= 2) {
                    this.eha.spi("gambleprop", null, true, c + "gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.eha.spi("step" + b, null, false, c + "step" + (b + 1))
                }
                this.eha.spi("maxstep", null, false, c + "maxstep")
            } else {
                this.eha.spi("btn", null, false, c + "btn2");
                this.eha.spi("auto_on", null, false, c + "auto_on");
                this.eha.spi("auto_off", null, false, c + "auto_off")
            }
        } else {
            this.eha.spi("btn", null, false, c + "ama_btn");
            if (this.xhi() === false) {
                this.eha.spi("gamble_on", null, false, c + "ama_gamble_on");
                this.eha.spi("gamble_off", null, false, c + "ama_gamble_off");
                if (this.uxy() === false && this.nms <= 2) {
                    this.eha.spi("gambleprop", null, true, c + "ama_gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.eha.spi("step" + b, null, false, c + "ama_step")
                }
                this.eha.spi("maxstep", null, false, c + "ama_step")
            }
        }
        if (this.spz() === true) {
            this.eha.spi("jackpot", null, false, c + "jackpot");
            if (this.srj()) {
                this.eha.spi("mystery_jackpot", null, false, c + "mystery_jackpot")
            }
        }
        if (this.xhi() === false) {
            this.eha.spi("panel_in", null, false, c + "panel_in");
            this.eha.spi("panel_out", null, false, c + "panel_out")
        }
        c = kdn.qwt.value30 + "/gamble/sounds/";
        this.eha.spi("gamble1", null, false, c + "deal_2");
        this.eha.spi("gamble2", null, false, c + "deal_2");
        this.eha.spi("gamblewin1", null, false, c + "win1");
        this.eha.spi("gamblewin2", null, false, c + "win2");
        this.eha.spi("gamblewin3", null, false, c + "win3");
        this.alv();
        this.uwz();
        this.jfr()
    };
    this.alv = function () {
        for (var b = 0; b < this.ywe; b++) {
            this.eha.spi("symb" + b, this.txe, false, this.hif + "symb" + (b + 1))
        }
    };
    this.uwz = function () {
        var b = kdn.qwt.value30 + "/slot/sounds/";
        this.eha.spi("bigwin", null, false, b + "bigwin");
        this.eha.spi("megawin", null, false, b + "megawin");
        this.eha.spi("nicewin", null, false, b + "nicewin")
    };
    this.jfr = function () {};
    this.dfs = function () {
        var b = this.dlr + this.hhw.type + "/";
        this.eha.vpt("icon", b + "icon_out.png");
        if (this.dqg() === true && (kdn.qwt.value45 === kdn.hbo.bqz || kdn.qwt.value45 === kdn.hbo.ygc)) {
            this.eha.vpt("device_info", b + "info_" + ((this.xhi() === true) ? "smartphone.png" : "tablet.png"))
        }
        if (this.ucb) {
            this.eha.vpt("winlines", b + "wl.png")
        }
        this.eha.vpt("s_symb", b + "symbols_small.png");
        b = kdn.qwt.value30 + "/basic/images/" + this.hhw.type + "/";
        if (this.spz() === true) {
            this.eha.vpt("jackpot", b + "jackpot.png");
            if (this.srj()) {
                this.eha.gty(b, "mystery_jackpot.json")
            }
        }
        if (this.xhi() === true) {
            if (this.hhw.ibz === false) {
                this.eha.vpt("btn_back", b + "buttonback.png")
            }
        }
        b = kdn.qwt.value30 + "/slot/images/" + this.hhw.type + "/";
        if (this.xhi() === true) {
            if (this.hhw.ibz === true) {
                this.eha.gty(b, "gui_mobile_v29.json")
            } else {
                this.eha.gty(b, "gui_mobile_v17.json")
            }
        } else {
            if (kdn.qwt.value57 === kdn.ui.vtq || this.wte() != null) {
                this.eha.gty(b, "gui_desktop_v27.json")
            } else {
                this.eha.gty(b, "gui_desktop_v17.json")
            }
        }
        if (this.oou && !this.vks) {
            this.eha.vpt("firework", b + "firework.png")
        }
        this.fjw();
        this.zsa();
        this.aoc();
        this.fph();
        this.mrn()
    };
    this.zsa = function () {
        var b = this.dlr + this.hhw.type + "/";
        this.eha.vpt("m_back", b + "main.png");
        this.eha.vpt("g_back", b + "gamble.jpg");
        this.eha.vpt("m_win", b + "winPanel.png");
        this.eha.vpt("h_paytable", b + "wthelp.jpg");
        this.eha.vpt("h_winlines", b + "wlhelp.jpg")
    };
    this.aoc = function () {
        var c = this.dlr + this.hhw.type + "/";
        this.eha.gty(c, "symbols.json");
        for (var b = 0; b < this.ywe; b++) {
            this.eha.vpt("anim" + b, c + "symbanim" + (b + 1) + ".jpg")
        }
    };
    this.fph = function () {
        var b = kdn.qwt.value30 + "/slot/images/" + this.hhw.type + "/";
        this.eha.vpt("wins", b + "wins.png")
    };
    this.fjw = function () {
        var b = kdn.qwt.value30 + "/gamble/images/" + this.hhw.type + "/";
        this.eha.vpt("g_red", b + "red_orig.png");
        this.eha.vpt("g_blue", b + "blue_orig.png");
        this.eha.gty(b, "gamble.json")
    };
    this.mrn = function () {};
    this.yyv = function (b) {
        var c = this.blh;
        b = (b != null && b === true) ? true : false;
        if (this.pjz && !this.rtr && !this.tyh) {
            c = c - this.win
        }
        if (this.npb) {
            c = c - this.npb.value
        }
        if (!this.tyh) {
            this.wrn(c, true, b)
        }
        this.xvp(this.totalBet, true);
        this.bew.qex("tops", "#zwp");
        this.bew.qex("settings", "#mcr", [this.vey(this.yzf), this.cpa, this.vey(this.wdm())])
    };
    this.zwp = function (p, o, q, D, f) {
        if (kdn.uay.bja()) {
            var b = (p != null && o != null && q != null && D != null),
                d = (b === true) ? new bzm(p, o, q, D) : ((kdn.uay.hhw.ibz === true) ? new bzm(kdn.uay.hhw.dfq.sde.x, kdn.uay.hhw.dfq.sde.y, kdn.uay.hhw.dfq.sde.width, kdn.uay.hhw.dfq.sde.height) : new bzm(kdn.uay.hhw.uay.sde.x, kdn.uay.hhw.uay.sde.y, kdn.uay.hhw.uay.sde.width, kdn.uay.hhw.uay.sde.height)),
                A = kdn.uay.context2D,
                g = (kdn.uay.qox === true) ? kdn.uay.style.uay.eda : kdn.uay.style.uay.backgroundColor,
                G = kdn.uay.bew.gfj("stats"),
                c = kdn.uay.bew.gfj("history"),
                E = kdn.uay.bew.gfj("topb"),
                j = kdn.uay.bew.gfj("topi"),
                k = kdn.uay.bew.gfj("betsel"),
                s = kdn.uay.bew.gfj("linesel"),
                t = kdn.uay.bew.gfj("tops"),
                l = kdn.uay.bew.gfj("winp"),
                m = kdn.uay.bew.gfj("fwinp"),
                v = kdn.uay.bew.gfj("llinep"),
                I = kdn.uay.bew.gfj("rlinep"),
                H = kdn.uay.bew.gfj("finfop"),
                z = kdn.uay.bew.gfj("finfoc"),
                r = kdn.uay.bew.gfj("autop"),
                F = kdn.uay.bew.wrb("jackpots"),
                n = kdn.uay.bew.gfj("jwp"),
                u = kdn.uay.bew.gfj("mjwp"),
                e = kdn.uay.bew.gfj("settings");
            kdn.uay.aqc = false;
            if (kdn.uay.umv === true) {
                kdn.uay.feu()
            }
            A.save();
            if (b) {
                A.beginPath();
                A.rect(p, o, q, D);
                A.closePath();
                A.clip()
            }
            if (f == null || f === false) {
                A.clearRect(0, 0, kdn.uay.width, kdn.uay.height)
            }
            if (kdn.uay.hhw.veh) {
                if (kdn.uay.umv === false) {
                    kdn.lgy.eys(kdn.uay.context2D, kdn.uay.hhw.uay.sde.x - kdn.uay.hhw.uay.dmp, kdn.uay.hhw.uay.sde.y - kdn.uay.hhw.uay.dmp, kdn.uay.hhw.uay.sde.width + 2 * kdn.uay.hhw.uay.dmp, kdn.uay.hhw.uay.sde.height + 2 * kdn.uay.hhw.uay.dmp, g, 1)
                } else {
                    kdn.lgy.eys(kdn.uay.context2D, kdn.uay.hhw.uay.sde.x - kdn.uay.hhw.uay.dmp, kdn.uay.hhw.uay.sde.y - kdn.uay.hhw.uay.dmp, kdn.uay.hhw.uay.sde.width + 2 * kdn.uay.hhw.uay.dmp, kdn.uay.hhw.uay.sde.height + 2 * kdn.uay.hhw.uay.dmp, null, 0, g, kdn.uay.hhw.uay.dmp, 1)
                }
            }
            if (c) {
                c.zwp()
            }
            if (j) {
                j.zwp()
            }
            if (t) {
                t.zwp()
            }
            if (G && G.fww()) {
                G.zwp()
            } else {
                if (kdn.uay.ust && kdn.uay.ust.fww()) {
                    kdn.uay.ust.zwp()
                } else {
                    if (kdn.uay.miq && kdn.uay.miq.fww()) {
                        kdn.uay.miq.zwp()
                    } else {
                        if (kdn.uay.umv) {
                            A.drawImage(kdn.uay.wip, kdn.uay.hhw.omc.sde.x, kdn.uay.hhw.omc.sde.y)
                        } else {
                            A.drawImage(kdn.uay.noi, kdn.uay.hhw.omc.sde.x, kdn.uay.hhw.omc.sde.y)
                        }
                        if (l && l.fww()) {
                            l.zwp()
                        } else {
                            if (m && m.fww()) {
                                m.zwp()
                            }
                        }
                        if (v) {
                            v.zwp()
                        }
                        if (I) {
                            I.zwp()
                        }
                        if (kdn.uay.umv === false) {
                            for (var B = 0, C = kdn.uay.bsj.length; B < C; B++) {
                                if (kdn.uay.bsj[B]) {
                                    kdn.uay.bsj[B].zwp()
                                }
                            }
                        }
                        if (kdn.uay.ied) {
                            kdn.uay.ied.zwp()
                        }
                        if (kdn.uay.pgn) {
                            kdn.uay.pgn.zwp()
                        }
                        for (var B = 0, C = F.length; B < C; B++) {
                            F[B].zwp()
                        }
                        if (n) {
                            if (n.fww()) {
                                kdn.uay.teg(A, d)
                            }
                            n.zwp()
                        }
                        if (u) {
                            if (u.fww()) {
                                kdn.uay.teg(A, d)
                            }
                            u.zwp()
                        }
                        if (H) {
                            if (H.fww()) {
                                kdn.uay.teg(A, d)
                            }
                            H.zwp()
                        }
                        if (z) {
                            if (z.fww()) {
                                kdn.uay.teg(A, d)
                            }
                            z.zwp()
                        }
                    }
                }
            }
            if (k) {
                k.zwp()
            }
            if (s) {
                s.zwp()
            }
            if (E) {
                E.zwp()
            }
            if (r) {
                r.zwp()
            }
            if (e) {
                e.zwp()
            }
            A.restore()
        }
    };
    this.teg = function (b, c) {
        this.aqc = true;
        kdn.lgy.eys(b, c.x, c.y, c.width, c.height, "black", 0.5)
    };
    this.zig = function () {
        for (var c = 0, b = this.bsj.length; c < b; c++) {
            if (this.bsj[c] && this.jkt[c] === true) {
                this.bsj[c].zwp()
            }
        }
    };
    this.feu = function () {
        var d = this.pqc,
            c = this.eha.zgs("m_back"),
            f = this.eha.zgs("f_back");
        if (this.vks && this.jpq && this.style.uay.bap) {
            c = this.eha.zgs("m_m_back");
            f = this.eha.zgs("m_f_back")
        }
        if (this.bja()) {
            d.save();
            if (this.qzj) {
                d.drawImage(f, 0, 0)
            } else {
                d.drawImage(c, 0, 0)
            }
            for (var e = 0, b = this.bsj.length; e < b; e++) {
                this.bsj[e].zwp()
            }
            d.restore()
        }
    };
    this.syj = function () {
        var d = kdn.uay.llq,
            g = (kdn.uay.hhw.omc.sde.width - kdn.uay.hhw.uay.sde.width) / 2,
            e = 0,
            c = (kdn.uay.qzj) ? kdn.uay.eha.zgs("f_back") : kdn.uay.eha.zgs("m_back"),
            k = (kdn.uay.qzj) ? kdn.uay.eha.zgs("f_left") : kdn.uay.eha.zgs("m_left"),
            j = (kdn.uay.qzj) ? kdn.uay.eha.zgs("f_right") : kdn.uay.eha.zgs("m_right");
        if (kdn.uay.vks && kdn.uay.jpq && kdn.uay.style.uay.bap) {
            c = (kdn.uay.qzj) ? kdn.uay.eha.zgs("m_f_back") : kdn.uay.eha.zgs("m_m_back")
        }
        d.save();
        d.clearRect(0, 0, kdn.uay.hhw.omc.sde.width, kdn.uay.hhw.omc.sde.height);
        d.drawImage(c, g, e);
        if (kdn.uay.evj === kdn.hhw.ssg || kdn.uay.evj === kdn.hhw.yjt) {
            if (k) {
                d.drawImage(k, 0, 0)
            }
            if (j) {
                d.drawImage(j, kdn.uay.hhw.omc.sde.width - j.width, 0)
            }
        }
        d.restore();
        if (kdn.uay.umv) {
            d = kdn.uay.xqw;
            d.save();
            d.drawImage(kdn.uay.noi, 0, 0);
            for (var f = 0, b = kdn.uay.bsj.length; f < b; f++) {
                d.clearRect(kdn.uay.bsj[f].x + g, kdn.uay.bsj[f].y + e, kdn.uay.bsj[f].width, kdn.uay.bsj[f].height)
            }
            d.restore()
        }
    };
    this.boj = function (f) {
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
        if (this.yof < 0) {
            for (var d = 0; d < f; d++) {
                this.cyc[d] = c[e];
                e = (e < c.length - 1) ? e + 1 : 0
            }
            this.jol = 0;
            this.hqo = new Date().getTime();
            this.ahx()
        }
    };
    this.jsc = function () {
        clearTimeout(this.yof);
        this.yof = -1;
        kdn.lgy.buo(this.canvas, this.rif, this.lwf);
        if (this.gbr != null) {
            kdn.lgy.buo(this.gbr, this.rif, this.lwf, ((this.hhw.gbr.sde.x) - ((this.hhw.gbr.sde.x + this.hhw.gbr.fkd) / 2 * (1 - this.rif))), ((this.hhw.gbr.sde.y) - ((this.hhw.gbr.sde.y + this.hhw.gbr.paq) / 2 * (1 - this.lwf))))
        }
    };
    this.ahx = function () {
        var b = kdn.uay.lku,
            d = new Date().getTime(),
            c = null;
        if (kdn.uay.jol >= kdn.uay.cyc.length) {
            kdn.uay.jsc()
        } else {
            c = kdn.uay.cyc[kdn.uay.jol];
            kdn.lgy.buo(kdn.uay.canvas, kdn.uay.rif * c.sx, kdn.uay.lwf * c.sy, c.tx, c.ty, c.rx, c.ry);
            if (kdn.uay.gbr != null) {
                kdn.lgy.buo(kdn.uay.gbr, kdn.uay.rif * c.sx, kdn.uay.lwf * c.sy, ((kdn.uay.hhw.gbr.sde.x) - ((kdn.uay.hhw.gbr.sde.x + kdn.uay.hhw.gbr.fkd) / 2 * (1 - kdn.uay.rif * c.sx))) + c.tx, ((kdn.uay.hhw.gbr.sde.y) - ((kdn.uay.hhw.gbr.sde.y + kdn.uay.hhw.gbr.paq) / 2 * (1 - kdn.uay.lwf * c.sy))) + c.ty, c.rx, c.ry)
            }
            kdn.uay.jol++;
            b = kdn.uay.lku + (kdn.uay.jol * kdn.uay.lku - (d - kdn.uay.hqo));
            if (b < 10) {
                b = 10
            }
            kdn.uay.yof = setTimeout(kdn.uay.ahx, b)
        }
    };
    this.xxv = function () {
        clearTimeout(kdn.uay.kqo);
        if (kdn.uay.rpo) {
            if (kdn.uay.rly) {
                if (!kdn.uay.zgb && kdn.uay.hpd()) {
                    setTimeout(kdn.uay.aqm, 2)
                }
            } else {
                if (!kdn.uay.qzj) {
                    if (kdn.uay.win > 0 && !kdn.uay.rtr) {
                        if (kdn.uay.ciy) {
                            kdn.uay.vjs();
                            if (kdn.uay.xhh()) {
                                kdn.uay.rpo = false;
                                kdn.uay.pgn.lkn(false);
                                setTimeout(kdn.uay.ibr, 400)
                            }
                        } else {
                            if (kdn.uay.byy) {
                                kdn.uay.vvn()
                            } else {
                                if (!(kdn.uay.ciy || kdn.uay.byy)) {
                                    if (kdn.uay.xhh()) {
                                        kdn.uay.rpo = false;
                                        kdn.uay.pgn.lkn(false);
                                        kdn.uay.ibr()
                                    } else {
                                        kdn.uay.vjs()
                                    }
                                }
                            }
                        }
                    } else {
                        if (!kdn.uay.rly) {
                            if (kdn.uay.grc) {
                                kdn.uay.ber();
                                kdn.uay.plk();
                                return
                            } else {
                                if (kdn.uay.spd) {
                                    kdn.uay.ber();
                                    kdn.uay.apt();
                                    return
                                }
                            }
                            kdn.uay.hmo = true;
                            kdn.uay.rpo = false;
                            if (kdn.uay.xhi() === true) {
                                kdn.uay.hie = (!kdn.uay.iqc) ? 1 : 0
                            } else {
                                if (kdn.qwt.value62 === true) {
                                    kdn.uay.hie = 0;
                                    if (kdn.uay.djz) {
                                        kdn.uay.hie |= 2
                                    }
                                    if (kdn.uay.iqc) {
                                        kdn.uay.hie |= 4
                                    }
                                } else {
                                    kdn.uay.hie = (kdn.uay.djz && !kdn.uay.iqc) ? 1 : 0
                                }
                            }
                            if (kdn.uay.tyh || (kdn.uay.blh >= kdn.uay.wdm() && kdn.uay.wdm() >= kdn.uay.mus)) {
                                kdn.uay.zqa();
                                for (var c = 0, b = kdn.uay.bsj.length; c < b; c++) {
                                    kdn.uay.eyz[c] = -1;
                                    if (kdn.uay.bsj[c]) {
                                        kdn.uay.bsj[c].ctf(kdn.uay.mxc[0])
                                    }
                                }
                                kdn.uay.znc();
                                kdn.uay.frj({
                                    type: "roundStart",
                                    sender: kdn.uay.yfk,
                                    lang: sessionStorage.sessionValue1.toUpperCase(),
                                    data: {
                                        totalBet: kdn.uay.vey(kdn.uay.totalBet)
                                    }
                                });
                                kdn.uay.xct();
                                kdn.uay.iok();
                                kdn.uay.uwd.play(kdn.uay.cpa, kdn.uay.gjn, kdn.uay.hie);
                                kdn.uay.pgn.lkn(false);
                                kdn.uay.pgn.wvx.qex("start", "#wfx", [true])
                            } else {
                                kdn.uay.hnj();
                                kdn.uay.ber();
                                kdn.uay.pgn.lkn(true);
                                kdn.uay.tod(true);
                                kdn.uay.rpo = true
                            }
                            kdn.uay.vdz()
                        }
                    }
                } else {
                    if (kdn.uay.jzi > 0) {
                        if (kdn.uay.ciy) {
                            kdn.uay.vjs()
                        } else {
                            if (!(kdn.uay.ibb || kdn.uay.hmo)) {
                                kdn.uay.bsd()
                            } else {
                                kdn.uay.uni()
                            }
                        }
                    }
                    if (kdn.uay.hec > 0 && !(kdn.uay.xrs && !kdn.uay.hpt)) {
                        if (kdn.uay.spd) {
                            kdn.uay.ber();
                            kdn.uay.apt();
                            return
                        }
                        kdn.uay.hmo = true;
                        kdn.uay.rpo = false;
                        kdn.uay.zqa();
                        for (var c = 0, b = kdn.uay.bsj.length; c < b; c++) {
                            kdn.uay.eyz[c] = -1;
                            if (kdn.uay.bsj[c]) {
                                kdn.uay.bsj[c].ctf(kdn.uay.mxc[0])
                            }
                        }
                        kdn.uay.vbj();
                        if (kdn.uay.xhi() && kdn.uay.hec == 1) {
                            kdn.uay.hie = (!kdn.uay.iqc) ? 1 : 0
                        } else {
                            if (kdn.qwt.value62 === true) {
                                kdn.uay.hie = 0;
                                if (kdn.uay.wte() == null && kdn.qwt.value44.e && kdn.uay.hec == 1) {
                                    if (kdn.uay.egq) {
                                        kdn.uay.hie |= 2
                                    }
                                } else {
                                    if (kdn.uay.djz) {
                                        kdn.uay.hie |= 2
                                    }
                                }
                                if (kdn.uay.iqc) {
                                    kdn.uay.hie |= 4
                                }
                            } else {
                                if (kdn.uay.wte() == null && kdn.qwt.value44.e && kdn.uay.hec == 1) {
                                    kdn.uay.hie = (kdn.uay.egq && !kdn.uay.iqc) ? 1 : 0
                                } else {
                                    kdn.uay.hie = (kdn.uay.djz && !kdn.uay.iqc) ? 1 : 0
                                }
                            }
                        }
                        kdn.uay.iok();
                        kdn.uay.uwd.pfi(kdn.uay.cpa, kdn.uay.gjn, kdn.uay.hie);
                        kdn.uay.pgn.lkn(false);
                        kdn.uay.pgn.wvx.qex("start", "#wfx", [true]);
                        kdn.uay.ems()
                    }
                }
            }
        } else {
            if (!kdn.uay.com && kdn.uay.rly && !kdn.uay.zgb && kdn.uay.hpd()) {
                kdn.uay.zoe = true
            }
        }
    };
    this.jty = function () {
        var b = kdn.uay.bew.gfj("topi"),
            d = 0,
            c = 0,
            e = 0;
        if (!kdn.qwt.value55) {
            kdn.uay.eha.xuk("auto_on");
            kdn.uay.eha.xuk("auto_off")
        }
        if (kdn.uay.djz) {
            kdn.uay.djz = false;
            kdn.uay.pmc();
            if (kdn.uay.wte() == null && kdn.qwt.value44.e && kdn.uay.qzj) {
                kdn.uay.egq = false
            }
            kdn.uay.pgn.wvx.qex("astart", "#mrh", [kdn.uay.djz]);
            if (!kdn.uay.rly) {
                kdn.uay.pgn.wvx.qex("start", "#nkf", [kdn.uay.language.start, true])
            }
            if (!kdn.qwt.value55) {
                kdn.uay.eha.mtk("auto_off")
            }
            if (kdn.uay.owp && !kdn.uay.djz && !kdn.uay.iqc && !kdn.uay.jqi() && !kdn.uay.qzj && kdn.uay.win > 0 && !kdn.uay.rtr && !kdn.uay.byy && !kdn.uay.rly) {
                if (!kdn.uay.pgn.wvx.qex("gamble", "#xjq")) {
                    kdn.uay.pgn.wvx.qex("start", "#nkf", [kdn.uay.language.fhv, true]);
                    kdn.uay.pgn.wvx.qex("gamble", "#mys");
                    kdn.uay.fzg();
                    if (!kdn.uay.ciy) {
                        kdn.uay.pgn.wvx.qex("info", "#wbi", [kdn.uay.owg(kdn.uay.language.coy) + ": " + kdn.uay.vey(kdn.uay.win)])
                    }
                    kdn.uay.wnh()
                }
            }
        } else {
            if (kdn.uay.wte() != null && kdn.uay.ikb <= 0 && kdn.uay.xhi() === false) {
                if (b && b.ovk() === true) {
                    kdn.uay.tod(false);
                    kdn.uay.pgn.lkn(false);
                    kdn.uay.id = setTimeout(kdn.uay.irb, 300)
                }
            } else {
                if (kdn.uay.wte() == null && kdn.qwt.value44.e && kdn.uay.qzj) {
                    kdn.uay.egq = true
                } else {
                    if (kdn.uay.wte() != null && kdn.uay.xhi() === true) {
                        kdn.uay.ikb = kdn.uay.bew.qex("settings", "#exa");
                        if (kdn.uay.ikb <= 0) {
                            return
                        }
                        d = kdn.uay.bew.qex("settings", "#wll");
                        c = kdn.uay.bew.qex("settings", "#aao");
                        e = kdn.uay.bew.qex("settings", "#fla");
                        kdn.uay.gle = (d > 0) ? d : 0;
                        kdn.uay.hmf = (c > 0) ? c : 0;
                        kdn.uay.trd = (e > 0) ? e : 0;
                        kdn.uay.bvi(kdn.uay.wte().o === true || kdn.uay.style.uay.bap == false)
                    }
                }
                kdn.uay.djz = true;
                kdn.uay.pgn.wvx.qex("astart", "#mrh", [kdn.uay.djz]);
                if (!kdn.uay.rly) {
                    kdn.uay.pgn.wvx.qex("start", "#nkf", [kdn.uay.language.start, true])
                }
                if (!kdn.qwt.value55) {
                    kdn.uay.eha.mtk("auto_on")
                }
                if (!kdn.uay.rly) {
                    if (kdn.uay.qzj || (!kdn.uay.qzj && !(kdn.uay.win > 0 && kdn.uay.owp && kdn.uay.iqc && !(kdn.uay.rtr || kdn.uay.byy)))) {
                        kdn.uay.xxv()
                    }
                }
            }
        }
        if (b) {
            b.ins("auto", kdn.uay.djz)
        }
    };
    this.qar = function () {
        if (kdn.ivj == 0 && kdn.uay.vks === false && kdn.uay.win > 0 && !kdn.uay.rtr && kdn.uay.xhh()) {
            if (!kdn.uay.byy) {
                kdn.uay.rpo = false;
                kdn.uay.pgn.lkn(false);
                if (kdn.uay.ciy) {
                    kdn.uay.vjs();
                    setTimeout(kdn.uay.ibr, 400)
                } else {
                    kdn.uay.ibr()
                }
            }
            kdn.uay.aig = kdn.uay.qar
        } else {
            hwa.prototype.qar.call(this)
        }
    };
    this.mrf = function () {
        if (kdn.uay.gjn < kdn.uay.ebi.length - 1) {
            if (kdn.uay.gjn >= kdn.uay.mzv(true)) {
                kdn.uay.gjn = 0;
                while (kdn.uay.gjn < kdn.uay.kfv()) {
                    kdn.uay.gjn++
                }
            } else {
                kdn.uay.gjn++
            }
        } else {
            kdn.uay.gjn = 0;
            while (kdn.uay.gjn < kdn.uay.kfv()) {
                kdn.uay.gjn++
            }
        }
        kdn.uay.juk(false, false);
        if (kdn.uay.xhi() && kdn.uay.syf()) {
            kdn.uay.pgn.wvx.qex("betpopup", "#nkf", [kdn.uay.zre(kdn.uay.totalBet)]);
            kdn.uay.pgn.wvx.qex("betpopup", "#dft", [true]);
            kdn.uay.zwp();
            clearTimeout(kdn.uay.bsm);
            kdn.uay.bsm = setTimeout(kdn.uay.svi, 2000)
        }
        if (kdn.uay.gjn >= kdn.uay.mzv(true)) {
            return true
        }
        return false
    };
    this.ekj = function () {
        if (kdn.uay.gjn > 0) {
            if (kdn.uay.gjn <= kdn.uay.kfv()) {
                kdn.uay.gjn = kdn.uay.ebi.length;
                while (kdn.uay.gjn > kdn.uay.mzv(true)) {
                    kdn.uay.gjn--
                }
            } else {
                kdn.uay.gjn--
            }
        } else {
            kdn.uay.gjn = kdn.uay.ebi.length;
            while (kdn.uay.gjn > kdn.uay.mzv(true)) {
                kdn.uay.gjn--
            }
        }
        if (kdn.uay.gjn < 0) {
            kdn.uay.gjn = 0
        }
        kdn.uay.juk(false, false);
        if (kdn.uay.gjn <= kdn.uay.kfv()) {
            return true
        }
        return false
    };
    this.hpp = function () {
        var c = kdn.uay.cpa,
            b = kdn.uay.bew.gfj("betsel"),
            e = kdn.uay.bew.gfj("llinep"),
            d = kdn.uay.bew.gfj("rlinep");
        c += kdn.uay.lth;
        if (c > kdn.uay.xgw) {
            c = kdn.uay.sed
        }
        kdn.uay.cpa = c;
        if (e) {
            e.aoh(c)
        }
        if (d) {
            d.aoh(c)
        }
        if (b) {
            b.agn(kdn.uay.kfv(), kdn.uay.mzv(true))
        }
        kdn.uay.juk(true, true);
        kdn.uay.zwp();
        if (c >= kdn.uay.xgw) {
            return true
        }
        return false
    };
    this.cbs = function () {
        var c = kdn.uay.cpa,
            b = kdn.uay.bew.gfj("betsel"),
            e = kdn.uay.bew.gfj("llinep"),
            d = kdn.uay.bew.gfj("rlinep");
        c -= kdn.uay.lth;
        if (c < kdn.uay.sed) {
            c = kdn.uay.xgw
        }
        kdn.uay.cpa = c;
        if (e) {
            e.aoh(c)
        }
        if (d) {
            d.aoh(c)
        }
        if (b) {
            b.agn(kdn.uay.kfv(), kdn.uay.mzv(true))
        }
        kdn.uay.juk(true, true);
        kdn.uay.zwp();
        if (c <= kdn.uay.sed) {
            return true
        }
        return false
    };
    this.tfl = function () {
        var b = kdn.uay.bew.gfj("topi"),
            c = kdn.uay.bew.gfj("settings");
        if (kdn.uay.owp && !kdn.uay.qzj && kdn.uay.win > 0 && !kdn.uay.rly && !kdn.uay.iqc && !kdn.uay.djz) {
            kdn.uay.sef()
        } else {
            kdn.uay.eha.xuk("gamble_on");
            kdn.uay.eha.xuk("gamble_off");
            kdn.uay.iqc = !kdn.uay.iqc;
            if (kdn.uay.iqc) {
                kdn.uay.eha.mtk("gamble_on")
            } else {
                kdn.uay.eha.mtk("gamble_off")
            }
            if (kdn.uay.owp && !kdn.uay.djz && !kdn.uay.iqc && !kdn.uay.jqi() && !kdn.uay.qzj && kdn.uay.win > 0 && !kdn.uay.rtr && !kdn.uay.byy && !kdn.uay.rly) {
                if (!kdn.uay.pgn.wvx.qex("gamble", "#xjq")) {
                    kdn.uay.pgn.wvx.qex("start", "#nkf", [kdn.uay.language.fhv, true]);
                    kdn.uay.pgn.wvx.qex("gamble", "#mys");
                    kdn.uay.fzg();
                    if (!kdn.uay.ciy) {
                        kdn.uay.pgn.wvx.qex("info", "#wbi", [kdn.uay.owg(kdn.uay.language.coy) + ": " + kdn.uay.vey(kdn.uay.win)])
                    }
                    kdn.uay.wnh()
                }
            }
            kdn.uay.pgn.wvx.qex("gamble", "#mrh", [kdn.uay.iqc]);
            if (b) {
                b.ins("gamble", kdn.uay.iqc)
            }
            if (c) {
                c.wvx.qex("gamble", "#isc", [(kdn.uay.iqc) ? 1 : 0])
            }
        }
    };
    this.lvx = function () {
        if (!kdn.uay.ust.fww()) {
            kdn.uay.hgk();
            if (kdn.uay.qzj) {
                kdn.uay.tdh()
            }
            kdn.uay.paw()
        } else {
            kdn.uay.oiu()
        }
    };
    this.llg = function () {
        var d = kdn.uay.bew.gfj("topb"),
            c = kdn.uay.bew.gfj("settings"),
            b = kdn.uay.bew.gfj("topi");
        kdn.uay.zgb = !kdn.uay.zgb;
        if (b) {
            b.ins("turbo", kdn.uay.zgb)
        }
        if (d) {
            d.wvx.qex("turbo", "#isc", [(kdn.uay.zgb) ? 1 : 0])
        }
        if (c) {
            c.wvx.qex("turbo", "#isc", [(kdn.uay.zgb) ? 1 : 0])
        }
    };
    this.zeq = function () {
        var b = false;
        if (kdn.lgy.zvx == true) {
            if (kdn.uay.ool == true) {
                kdn.uay.ool = false;
                b = kdn.lgy.nag();
                setTimeout(kdn.uay.apu, 1400)
            }
        } else {
            b = kdn.lgy.nag();
            setTimeout(kdn.uay.apu, 1400)
        }
    };
    this.erv = function () {
        if (kdn.uay.eha.zmw() && !kdn.uay.zyg) {
            kdn.uay.zyg = true;
            kdn.uay.bew.qex("loading", "#stop");
            setTimeout(kdn.uay.ibt, 100);
            kdn.uay.eha.mtk("silence");
            if (kdn.lgy.hlm()) {
                kdn.uay.zeq()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.iku = function () {
        var d = kdn.uay.bew.gfj("topb"),
            c = kdn.uay.bew.gfj("settings"),
            b = kdn.uay.bew.gfj("topi");
        kdn.uay.qqx = !kdn.uay.qqx;
        if (kdn.uay.qqx === true) {
            kdn.uay.xbm();
            if (kdn.uay.syf() === false) {
                kdn.uay.nmv(0, 0)
            }
        } else {
            kdn.uay.nft()
        }
        if (b) {
            b.ins("melody", (kdn.uay.qqx) ? 1 : 0)
        }
        if (d) {
            d.wvx.qex("melody", "#isc", [(kdn.uay.qqx) ? 1 : 0])
        }
        if (c) {
            c.wvx.qex("melody", "#isc", [(kdn.uay.qqx) ? 1 : 0])
        }
        kdn.uay.zwp()
    };
    this.znc = function () {
        this.com = false;
        this.rgv = false;
        this.zoe = false;
        this.rtr = false;
        this.tod(false);
        this.pgn.wvx.qex("info", "#wbi", [this.language.wsa, true]);
        this.eha.xuk("collectend");
        if (this.dpj >= 0) {
            clearTimeout(this.dpj);
            this.dpj = -1
        }
        this.cqh();
        this.sgm();
        if (this.rly == false) {
            this.scj();
            for (var c = 0, b = this.bsj.length; c < b; c++) {
                this.bsj[c].zqk()
            }
            this.rly = true;
            this.yax = false;
            this.hth = false;
            this.yrm();
            this.hqo = new Date().getTime();
            if (this.xls) {
                this.id = window.vym(this.hag)
            } else {
                this.id = setTimeout(this.hag, 10)
            }
        }
    };
    this.vbj = function () {};
    this.hag = function () {
        var c = kdn.uay.tja,
            e = 0;
        kdn.uay.xfy = 0;
        if (!kdn.uay.xls || kdn.uay.nmm) {
            if (kdn.uay.cee == 0) {
                kdn.uay.hqo = new Date().getTime()
            } else {
                e = new Date().getTime();
                c = kdn.uay.tja + (kdn.uay.cee * kdn.uay.tja - (e - kdn.uay.hqo))
            }
            if (kdn.uay.hth) {
                c = kdn.uay.hhk
            }
        }
        if (kdn.uay.cee > 0 && !kdn.uay.rpo && kdn.uay.com) {
            kdn.uay.rpo = true
        }
        for (var d = 0, b = kdn.uay.bsj.length; d < b; d++) {
            if (kdn.uay.jkt[d] && !kdn.uay.bsj[d].ict) {
                if (d == kdn.uay.apq - 1) {
                    kdn.uay.bsj[d].gui(true)
                } else {
                    kdn.uay.bsj[d].gui((!kdn.uay.hth && !kdn.uay.zgb))
                }
            }
        }
        if (typeof kdn.uay.rbq === "function") {
            kdn.uay.rbq()
        }
        if (kdn.uay.umv === false) {
            kdn.uay.zig()
        } else {
            kdn.uay.feu()
        }
        if (c <= 0) {
            c = 0
        }
        if (kdn.uay.ami) {
            return
        }
        if (!kdn.uay.qmh()) {
            kdn.uay.cee += 1;
            if (kdn.uay.xls && !kdn.uay.nmm) {
                kdn.uay.id = window.vym(kdn.uay.hag)
            } else {
                if (c == 0) {
                    kdn.uay.hag()
                } else {
                    kdn.uay.id = setTimeout(kdn.uay.hag, c)
                }
            }
        } else {
            kdn.uay.rly = false;
            kdn.uay.zdt();
            kdn.uay.cee = 0;
            kdn.uay.nqt = false;
            kdn.uay.mqd()
        }
    };
    this.rbq = function () {};
    this.mqd = function () {
        if (kdn.uay.bzd === false) {
            var d = kdn.uay.qmh();
            clearTimeout(kdn.uay.cma);
            for (var c = 0, b = kdn.uay.bsj.length; c < b && d; c++) {
                if (kdn.uay.bsj[c].sip()) {
                    kdn.uay.bsj[c].trr();
                    d = false
                }
            }
            if (d) {
                for (var c = 0, b = kdn.uay.bsj.length; c < b; c++) {
                    kdn.uay.bsj[c].hxv().length = 0;
                    kdn.uay.bsj[c].hbk().length = 0;
                    kdn.uay.bsj[c].ndi()
                }
                kdn.uay.rpo = true;
                if (kdn.uay.myw()) {
                    kdn.uay.zjz()
                } else {
                    if (kdn.uay.sbi() === true) {
                        kdn.uay.ptv()
                    } else {
                        kdn.uay.sfe()
                    }
                }
            } else {
                kdn.uay.rpo = false
            }
        } else {
            kdn.uay.cma = setTimeout(kdn.uay.mqd, 50)
        }
    };
    this.qmh = function () {
        for (var c = 0, b = this.bsj.length; c < b; c++) {
            if (this.bsj[c] && !this.bsj[c].ict) {
                return false
            }
        }
        return true
    };
    this.hpd = function () {
        return (kdn.qwt.value79 === 0)
    };
    this.aqm = function () {
        var c = 0,
            b = kdn.uay.bsj.length;
        if (!kdn.uay.hth) {
            kdn.uay.ami = false;
            kdn.uay.hth = true;
            if (!kdn.uay.rgv) {
                if (!kdn.uay.qzj) {
                    kdn.uay.rgv = true;
                    for (c = 0; c < b; c++) {
                        if (kdn.uay.bsj[c] && kdn.uay.jkt[c]) {
                            kdn.uay.bsj[c].knu(kdn.uay.eyz[c], kdn.uay.mxc[c] - kdn.uay.mxc[0], kdn.uay.vol)
                        }
                    }
                } else {
                    kdn.uay.rgv = true;
                    for (c = 0; c < b; c++) {
                        if (kdn.uay.bsj[c] && kdn.uay.jkt[c]) {
                            kdn.uay.bsj[c].knu((kdn.uay.ygd) ? kdn.uay.cwq[c] : kdn.uay.eyz[c], kdn.uay.mxc[c] - kdn.uay.mxc[0], kdn.uay.vol)
                        }
                    }
                }
            }
            for (c = 0; c < b; c++) {
                if (kdn.uay.bsj[c] && kdn.uay.jkt[c]) {
                    kdn.uay.bsj[c].aja()
                }
            }
        }
    };
    this.vdv = function () {
        this.ami = true;
        this.win = 0;
        for (var c = 0, b = this.bsj.length; c < b; c++) {
            if (this.bsj[c] && !this.bsj[c].ict) {
                this.bsj[c].kyg()
            }
        }
    };
    this.zqa = function () {
        if (this.zgb) {
            this.mxc = this.kfm;
            this.tja = this.uin
        } else {
            this.mxc = this.lkx;
            this.tja = this.rpe
        }
        this.nmm = this.dog()
    };
    this.yrm = function () {
        this.eha.mtk("spin")
    };
    this.zdt = function () {
        this.eha.xuk("spin")
    };
    this.xyw = function () {};
    this.sgm = function () {
        if (!this.qzj) {
            this.bvf()
        } else {
            if (this.wgp() === true) {
                this.eha.awi("freespinstart", 1, 300)
            }
        }
        for (var c = 0, b = this.bsj.length; c < b; c++) {
            this.bsj[c].rlu = ((c % 2) == 0) ? this.eha.oku("stop1") : this.eha.oku("stop2");
            this.bsj[c].yzv().length = 0;
            this.bsj[c].eqb = false;
            this.bsj[c].pnj = null;
            this.bsj[c].uwy = null
        }
        for (var c = 0, b = this.nrw.length; c < b; c++) {
            this.nrw[c] = 0
        }
    };
    this.yzq = function (b) {
        if (this.qzj === true) {
            if (this.wgp() === true) {
                this.eha.awi("freespinstart", 0, 300)
            }
            this.pgn.wvx.qex("start", "#nkf", [this.language.start, true])
        } else {
            this.nmv(0, 0);
            this.pgn.wvx.qex("info", "#ife");
            if (!this.jqi()) {
                this.pgn.wvx.qex("start", "#nkf", [this.language.fhv, true])
            } else {
                this.pgn.wvx.qex("start", "#nkf", [this.language.start, true])
            }
        }
        this.pgn.lkn(false);
        this.ied.olx();
        this.ied.lee(b)
    };
    this.sfe = function () {
        if (!kdn.uay.qzj && kdn.uay.win >= kdn.uay.totalBet * kdn.uay.kov) {
            kdn.uay.yzq(kdn.uay.win / kdn.uay.totalBet)
        } else {
            if (kdn.uay.qzj && kdn.uay.jzi >= kdn.uay.totalBet * kdn.uay.kov) {
                kdn.uay.yzq(kdn.uay.jzi / kdn.uay.totalBet)
            } else {
                kdn.uay.rur()
            }
        }
    };
    this.rur = function () {
        if (this.win > 0 && !this.qzj) {
            this.ibb = false;
            this.hmo = false;
            this.zef();
            if (this.oar()) {
                this.bzb()
            } else {
                this.nmv(0, 200);
                this.pgn.lkn(false);
                this.id = setTimeout(this.efk, 200)
            }
        } else {
            if (this.jzi > 0 && this.qzj) {
                this.ibb = false;
                this.hmo = false;
                this.zef();
                if (this.oar()) {
                    this.bzb()
                } else {
                    this.pgn.lkn(false);
                    this.id = setTimeout(this.irm, 200)
                }
            } else {
                this.qzs();
                this.kiw = [];
                this.snu = 0;
                if (this.oar()) {
                    this.bzb()
                } else {
                    if (this.usf()) {
                        this.wkr()
                    } else {
                        if (this.qzj && this.hec > 0 || !this.qzj) {
                            this.tod(true)
                        }
                        this.yuj()
                    }
                }
            }
        }
    };
    this.paw = function () {
        this.ciy = false;
        clearTimeout(this.dlp);
        this.cdx(this.win);
        this.bvf();
        this.tod(false);
        this.cqh();
        this.uni();
        this.fjx();
        this.pgn.wvx.qex("info", "#ife");
        this.pgn.lkn(false);
        this.qbu(false);
        this.ust.olx();
        this.ust.lkn(true);
        this.bew.qex("settings", "#xwd");
        if (this.hhw.ibz === false) {
            this.pgn.wvx.qex("setting", "#mrh", [this.bew.qex("settings", "#fww")])
        }
        if (this.qzj === true && this.wgp() === true) {
            this.eha.awi("freespinstart", 0, 0)
        } else {
            if (this.qzj === false) {
                this.nmv(0, 0)
            }
        }
    };
    this.oiu = function () {
        this.ust.lkn(false);
        if (!this.qzj) {
            this.pgn.lkn(true)
        } else {
            this.pgn.jbk(true)
        }
        this.tod(true);
        this.qbu(true);
        this.ust.xwd();
        if (!this.qzj) {
            if (this.win > 0) {
                this.pgn.wvx.qex("info", "#wbi", [this.owg(this.language.coy) + ": " + this.vey(this.win)])
            } else {
                this.pgn.wvx.qex("info", "#tqh", [0])
            }
            this.nmv(1, 200)
        } else {
            this.vxr(true);
            this.tdh();
            if (this.wgp() === true) {
                this.eha.awi("freespinstart", 1, 200)
            }
        }
    };
    this.sef = function () {
        var b = kdn.uay.pgn.wvx.gfj("gamble");
        kdn.uay.cvw();
        if (b) {
            b.whl();
            b.mrh(kdn.uay.iqc)
        }
        kdn.uay.ciy = false;
        clearTimeout(kdn.uay.dlp);
        kdn.uay.bvf();
        kdn.uay.cqh();
        kdn.uay.uni();
        kdn.uay.fjx();
        clearTimeout(kdn.uay.txz);
        if (kdn.uay.qzj === false) {
            kdn.uay.nmv(1, 300)
        }
        kdn.uay.pgn.wvx.qex("info", "#ife");
        kdn.uay.pgn.lkn(false);
        kdn.uay.tod(false);
        kdn.uay.qbu(false);
        if (kdn.uay.miq) {
            kdn.uay.miq.lkn(true);
            kdn.uay.miq.swo(kdn.uay.blh, kdn.uay.win);
            kdn.uay.miq.wvx.qex("history", "#nqp");
            kdn.uay.miq.olx();
            kdn.uay.miq.faq()
        }
    };
    this.glu = function () {
        if (!kdn.uay.bgw) {
            kdn.uay.frj({
                type: "roundEnded",
                sender: kdn.uay.yfk,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: kdn.uay.vey(kdn.uay.win),
                    balanceAfter: kdn.uay.vey(kdn.uay.blh)
                }
            })
        }
        kdn.uay.qzs();
        kdn.uay.qbu(true);
        if (kdn.uay.miq) {
            kdn.uay.miq.rmh();
            kdn.uay.miq.nle();
            kdn.uay.miq.lkn(false);
            kdn.uay.miq.dft(false, true)
        }
        kdn.uay.pgn.wvx.qex("start", "#nkf", [kdn.uay.language.start, true]);
        kdn.uay.rtr = true;
        if (kdn.uay.wft()) {
            kdn.uay.ber();
            kdn.uay.pgn.lkn(true);
            kdn.uay.tod(true);
            if (kdn.uay.win > 0) {
                kdn.uay.pgn.wvx.qex("info", "#wbi", [kdn.uay.owg(kdn.uay.language.coy) + ": " + kdn.uay.vey(kdn.uay.win)])
            } else {
                kdn.uay.pgn.wvx.qex("info", "#tqh", [0])
            }
            kdn.uay.xay()
        } else {
            if (kdn.uay.djz) {
                kdn.uay.pgn.nfa(true);
                kdn.uay.kqo = setTimeout(kdn.uay.myz, 400)
            } else {
                kdn.uay.pgn.lkn(true);
                kdn.uay.tod(true);
                if (kdn.uay.win > 0) {
                    kdn.uay.pgn.wvx.qex("info", "#wbi", [kdn.uay.owg(kdn.uay.language.coy) + ": " + kdn.uay.vey(kdn.uay.win)])
                } else {
                    kdn.uay.pgn.wvx.qex("info", "#tqh", [0])
                }
            }
        }
    };
    this.tdh = function () {
        var b = this.bew.gfj("tops");
        if (b) {
            if (b.hkj() == 1) {
                b.gqq(0)
            } else {
                b.gqq(1)
            }
            this.zwp()
        }
    };
    this.jay = function () {
        var b = this.bew.gfj("topi"),
            c = this.bew.gfj("settings");
        this.iqc = !kdn.uay.iqc;
        this.pgn.wvx.qex("gamble", "#mrh", [this.iqc]);
        if (b) {
            b.ins("gamble", this.iqc)
        }
        if (c) {
            c.wvx.qex("gamble", "#isc", [(this.iqc) ? 1 : 0])
        }
    };
    this.tvv = function () {
        if (this.vks) {
            return false
        }
        var b = new bzm(197, 24, 246, 200),
            c = kdn.qwt[kdn.uay.language.yho.toLowerCase().replace(/\s/g, "") + (b.y / 4)];
        if (c && c.indexOf(":" + b.ghn() + "/") >= 0) {
            return false
        }
        return true
    };
    this.eut = function () {
        if (this.bky === false) {
            this.fyn = 100;
            return
        }
        if (this.tvv()) {
            var c = new Date().getTime(),
                b = c % this.bsj.length,
                d = c % this.bsj[b].vwe.length;
            if (this.fyn <= 0 && ((this.qzj && this.jzi == 0) || (!this.qzj && this.win == 0)) && c & 1 == 1) {
                if (this.qzj && this.ygd) {
                    this.cwq[b] = d
                } else {
                    this.eyz[b] = d
                }
            } else {
                this.fyn = (this.fyn > 0) ? this.fyn - 1 : 0
            }
        }
    };
    this.efk = function () {
        kdn.uay.ymh = 0;
        kdn.uay.wkf();
        kdn.uay.wxw();
        kdn.uay.vxv(kdn.uay.eyz);
        kdn.uay.wfs();
        kdn.uay.xee();
        if ((kdn.uay.zcz || kdn.uay.ebc || kdn.uay.umv) && kdn.uay.win > 0 && kdn.uay.snu > 0 && !kdn.uay.nqt) {
            kdn.uay.fxq(kdn.uay.zcz, kdn.uay.ebc)
        }
        if (kdn.uay.win > 0) {
            if (!kdn.uay.nqt) {
                kdn.uay.rch();
                kdn.uay.pgn.lkn(false)
            }
            if (!kdn.uay.jqi()) {
                if (!kdn.uay.vks) {
                    kdn.uay.pgn.wvx.qex("start", "#nkf", [kdn.uay.language.fhv, true])
                }
            } else {
                kdn.uay.pgn.wvx.qex("start", "#nkf", [kdn.uay.language.start, true])
            }
            kdn.uay.vdd();
            kdn.uay.kim = true;
            kdn.uay.xng = setTimeout(kdn.uay.opa, 10)
        } else {}
    };
    this.irm = function () {};
    this.opa = function () {
        if (!kdn.uay.nqt) {
            if (!kdn.uay.qzj) {
                kdn.uay.vzt()
            } else {
                kdn.uay.xul()
            }
        }
        if (!kdn.uay.hmo) {
            if (kdn.uay.doa) {
                kdn.uay.bpm()
            } else {
                kdn.uay.pfe()
            }
        }
    };
    this.vdd = function () {
        var b = this.pgn.wvx.gfj("info");
        if (b) {
            if (!this.jqi()) {
                if (b.hzh()) {
                    b.wbi(this.language.ugc, true)
                }
            } else {
                b.wbi(this.language.ofu, true)
            }
        }
    };
    this.rch = function () {};
    this.zjc = function () {};
    this.mfx = function () {
        for (var b = 0; b < this.xgw; b++) {
            this.hfz[b] *= this.yzf
        }
        this.hfz[this.xgw] *= this.wdm()
    };

    function a(d, c) {
        return c[1] - d[1]
    }
    this.zef = function () {
        var c = [],
            d = 0;
        this.mfx();
        this.kiw = [];
        this.snu = 0;
        d = this.hfz[this.xgw];
        for (var b = 0; b < this.xgw; b++) {
            c[b] = [b, this.hfz[b]]
        }
        c.sort(a);
        if (this.wfb(d, c)) {
            this.hfz[0] = d;
            this.kiw[0] = this.xgw;
            if (this.hfz[0] > 0) {
                this.snu++
            }
            for (var b = 1; b < this.xgw + 1; b++) {
                this.hfz[b] = c[b - 1][1];
                this.kiw[b] = c[b - 1][0];
                if (this.hfz[b] > 0) {
                    this.snu++
                }
            }
            this.doa = false
        } else {
            for (var b = 0; b < this.xgw; b++) {
                this.hfz[b] = c[b][1];
                this.kiw[b] = c[b][0];
                if (this.hfz[b] > 0) {
                    this.snu++
                }
            }
            this.hfz[this.xgw] = d;
            this.kiw[this.xgw] = this.xgw;
            if (this.hfz[this.xgw] > 0) {
                this.snu++
            }
            this.doa = true
        }
    };
    this.wfb = function (c, b) {
        return c > b[0][1]
    };
    this.jhb = function () {
        this.ymh = this.ymh + 1
    };
    this.rga = function () {
        this.xfy = this.xfy + 1
    };
    this.bpm = function () {
        if (!this.rtr) {
            if (this.ymh < this.kiw.length && this.kiw[this.ymh] < this.ers.length) {
                if (!this.ykg) {
                    this.wkf()
                }
                var b = this.qvv(this.kiw[this.ymh]);
                this.kje = this.klf(b);
                if (!this.ykg) {
                    this.mgp(b)
                }
                if (this.hfz[this.ymh] > 0) {
                    this.lju(this.aek, this.kje, this.ymh);
                    this.ied.olx();
                    if (!this.ibb && !this.nqt && this.ymh == 0) {
                        if (this.ozx) {
                            this.eha.mtk("symb" + this.aek);
                            if (this.saj > 0) {
                                this.txz = setTimeout(this.icn, this.saj)
                            }
                        } else {
                            this.txe()
                        }
                    } else {
                        if (this.yyy) {
                            this.fzg()
                        }
                    }
                    this.cyy()
                } else {
                    this.jhb();
                    this.bpm()
                }
            } else {
                if (this.xqm >= 0 && this.doa && this.ymh <= this.ers.length) {
                    this.pfe();
                    this.kim = false
                } else {
                    this.rhd()
                }
            }
        }
    };
    this.klf = function (b) {
        var e = 0,
            c = 0;
        this.kje = 0;
        this.vsv = 0;
        this.aek = b[e];
        if (this.aek == this.xqm) {
            return 0
        }
        for (var d = e; d < 5; d++) {
            if (this.aek == b[d]) {
                this.kje += 1
            } else {
                break
            }
        }
        if (this.kje == 0) {
            return 0
        }
        c = this.pwf[this.aek][this.kje - 1];
        if (c > 0) {
            return this.kje
        }
        return 0
    };
    this.pfe = function () {
        if (!this.rtr) {
            if (!this.ykg) {
                this.wkf()
            }
            var b = this.hbr();
            if (b > 0 && this.pwf[this.xqm][b - 1] > 0) {
                this.lju(this.xqm, b, this.ymh);
                this.ied.olx();
                if (!this.ibb && !this.nqt && this.ymh == 0) {
                    if (this.ozx) {
                        this.eha.mtk("symb" + this.xqm);
                        if (this.saj > 0) {
                            this.txz = setTimeout(this.icn, this.saj)
                        }
                    } else {
                        this.txe()
                    }
                } else {
                    if (this.yyy) {
                        this.fzg()
                    }
                }
                this.flm()
            } else {
                this.rhd()
            }
        }
    };
    this.cyy = function () {
        if (this.ciy && this.djz || !this.djz) {
            if (!(this.iqc && this.owp && !this.ciy && !this.nqt)) {
                this.nlu([this.kiw[this.ymh] + 1]);
                if (this.tpy && this.djz && this.xfy > 0 && !this.nqt) {
                    this.ied.cyy(this.kiw[this.ymh], this.hih, this.hjm, this.aek, this.vsv, this.kje, true, true)
                } else {
                    this.ied.cyy(this.kiw[this.ymh], this.hih, this.hjm, this.aek, this.vsv, this.kje, true, false)
                }
            } else {
                if (!this.jwl) {
                    this.nlu([this.kiw[this.ymh] + 1]);
                    if (this.tpy) {
                        this.ied.cyy(this.kiw[this.ymh], this.hih, this.hjm, this.aek, this.vsv, this.kje, true, true)
                    } else {
                        this.ied.cyy(this.kiw[this.ymh], this.hih, this.hjm, this.aek, this.vsv, this.kje, false, false)
                    }
                } else {
                    this.pgn.wvx.qex("win", "#ife");
                    this.nlu([this.xgw + 1]);
                    this.jhb();
                    this.bpm()
                }
            }
        } else {
            if (this.djz && !this.nqt && !this.jwl) {
                this.nlu([this.kiw[this.ymh] + 1]);
                if (this.tpy) {
                    this.ied.cyy(this.kiw[this.ymh], this.hih, this.hjm, this.aek, this.vsv, this.kje, true, true)
                } else {
                    this.ied.cyy(this.kiw[this.ymh], this.hih, this.hjm, this.aek, this.vsv, this.kje, false, false)
                }
            } else {
                this.pgn.wvx.qex("win", "#ife");
                this.nlu([this.xgw + 1]);
                this.jhb();
                this.bpm()
            }
        }
    };
    this.flm = function () {
        if (this.ciy && this.djz || !this.djz) {
            this.nlu([this.xgw + 1]);
            if (!(this.iqc && this.owp && !this.ciy && !this.nqt)) {
                if (this.tpy && this.djz && this.xfy > 0 && !this.nqt) {
                    this.ied.cyy(-1, this.hih, false, this.xqm, this.vsv, this.kje, true, true)
                } else {
                    this.ied.cyy(-1, this.hih, false, this.xqm, this.vsv, this.kje, true, false)
                }
            } else {
                if (!this.jwl) {
                    if (this.tpy) {
                        this.ied.cyy(-1, this.hih, false, this.xqm, this.vsv, this.kje, true, true)
                    } else {
                        this.ied.cyy(-1, this.hih, false, this.xqm, this.vsv, this.kje, false, false)
                    }
                } else {
                    this.pgn.wvx.qex("win", "#ife");
                    this.jhb();
                    this.bpm()
                }
            }
        } else {
            if (this.djz && !this.nqt && !this.jwl) {
                this.nlu([this.xgw + 1]);
                if (this.tpy) {
                    this.ied.cyy(-1, this.hih, false, this.xqm, this.vsv, this.kje, true, true)
                } else {
                    this.ied.cyy(-1, this.hih, false, this.xqm, this.vsv, this.kje, false, false)
                }
            } else {
                this.pgn.wvx.qex("win", "#ife");
                this.nlu([this.xgw + 1]);
                this.jhb();
                this.bpm()
            }
        }
    };
    this.nlu = function (b) {
        if (this.rby === true) {
            this.bew.qex("llinep", "#cxp", [b, true]);
            this.bew.qex("rlinep", "#cxp", [b, true])
        }
    };
    this.lju = function (c, d, b) {
        var e = this.pgn.wvx.gfj("win");
        if (e) {
            if (this.win > 0 && !this.qzj) {
                if (this.hfz[b] > 0) {
                    if (c == this.xqm) {
                        e.bfd(this.language.dmq, this.language.win + ": " + this.vey(this.hfz[b]), c, d)
                    } else {
                        e.bfd(this.language.kqi + " " + (this.kiw[b] + 1) + ": ", this.language.win + ": " + this.vey(this.hfz[b]), c, d)
                    }
                }
            } else {
                if (this.qzj && this.jzi > 0) {
                    if (this.hfz[b] > 0) {
                        if (this.qfs > 1) {
                            if (c == this.xqm) {
                                e.bfd(this.language.dmq, this.language.win + ": " + this.vey(this.hfz[b]) + " x " + this.qfs, c, d)
                            } else {
                                e.bfd(this.language.kqi + " " + (this.kiw[b] + 1) + ": ", this.language.win + ": " + this.vey(this.hfz[b]) + " x " + this.qfs, c, d)
                            }
                        } else {
                            if (c == this.xqm) {
                                e.bfd(this.language.dmq, this.language.win + ": " + this.vey(this.hfz[b]), c, d)
                            } else {
                                e.bfd(this.language.kqi + " " + (this.kiw[b] + 1) + ": ", this.language.win + ": " + this.vey(this.hfz[b]), c, d)
                            }
                        }
                    }
                }
            }
        }
    };
    this.icn = function () {
        kdn.uay.eha.mtk("wincountfade")
    };
    this.wkf = function () {
        for (var b = 0; b < this.hih.length; b++) {
            for (var c = 0; c < this.hih[b].length; c++) {
                this.hih[b][c] = -1
            }
        }
    };
    this.wxw = function () {
        for (var b = 0; b < this.nsp.length; b++) {
            for (var c = 0; c < this.nsp[b].length; c++) {
                this.nsp[b][c] = -1
            }
        }
    };
    this.vxv = function (e) {
        for (var d = 0; d < this.apq; d++) {
            for (var b = 0; b < this.ond; b++) {
                var c = (e[d] - 1 + b >= 0) ? e[d] - 1 + b : this.bsj[d].vwe.length + e[d] - 1 + b;
                c = (c > this.bsj[d].vwe.length - 1) ? c - (this.bsj[d].vwe.length) : c;
                this.nsp[d][b] = this.bsj[d].vwe[c]
            }
        }
    };
    this.wfs = function () {
        if (this.ykg) {
            for (var d = 0; d < this.ers.length; d++) {
                if (this.kiw[d] < this.ers.length) {
                    var c = this.qvv(this.kiw[d]);
                    this.kje = this.klf(c);
                    if (this.hfz[d] > 0) {
                        for (var b = this.vsv; b < this.vsv + this.kje; b++) {
                            if (this.uel && c[b] == this.tfh) {
                                this.hih[b][this.ers[this.kiw[d]][b] - 1] = this.yps
                            } else {
                                this.hih[b][this.ers[this.kiw[d]][b] - 1] = c[b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.xee = function () {
        if (this.ykg) {
            if (this.xqm >= 0) {
                var d = 0;
                for (var c = 0; c < this.nsp.length; c++) {
                    for (var b = 0; b < this.nsp[c].length; b++) {
                        if (this.nsp[c][b] == this.xqm) {
                            d++
                        }
                    }
                }
                if ((this.hfz[this.ers.length] > 0 && this.doa) || (this.hfz[0] > 0 && !this.doa)) {
                    for (var c = 0; c < this.nsp.length; c++) {
                        for (var b = 0; b < this.nsp[c].length; b++) {
                            if (this.nsp[c][b] == this.xqm) {
                                this.hih[c][b] = this.nsp[c][b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.qvv = function (d) {
        var c = [];
        for (var b = 0; b < this.ers[d].length; b++) {
            c[b] = this.nsp[b][this.ers[d][b] - 1]
        }
        return c
    };
    this.mgp = function (c) {
        for (var b = this.vsv; b < this.vsv + this.kje; b++) {
            if (this.uel && c[b] == this.tfh) {
                this.hih[b][this.ers[this.kiw[this.ymh]][b] - 1] = this.yps
            } else {
                this.hih[b][this.ers[this.kiw[this.ymh]][b] - 1] = c[b]
            }
        }
    };
    this.hbr = function () {
        var d = 0;
        for (var c = 0; c < this.nsp.length; c++) {
            for (var b = 0; b < this.nsp[c].length; b++) {
                if (this.nsp[c][b] == this.xqm) {
                    this.hih[c][b] = this.nsp[c][b];
                    d++;
                    break
                }
            }
        }
        return d
    };
    this.pvu = function (b) {
        if (((this.uel && b == this.yps) && this.yps >= 0) || (b == this.tfh && this.tfh >= 0)) {
            return true
        }
        return false
    };
    this.yuj = function () {
        if (this.xrs) {
            this.pgn.wvx.qex("start", "#nkf", [this.language.start, true]);
            if (!this.qzj) {
                this.cqh();
                this.pgn.lkn(false);
                this.szy = setTimeout(this.tgz, 600)
            } else {
                this.zew()
            }
        } else {
            if (!this.qzj) {
                this.vvu()
            } else {
                this.mgz()
            }
        }
    };
    this.vvu = function () {
        if (this.win > 0) {
            if (this.iqc && this.owp) {
                setTimeout(this.sef, 400)
            } else {
                if (this.djz || this.pjz) {
                    if (!this.byy && !this.rtr) {
                        if (this.pjz) {
                            this.byy = true;
                            this.cqh();
                            setTimeout(this.fhv, 400)
                        } else {
                            clearTimeout(this.xqh);
                            this.xqh = setTimeout(this.xxv, 400)
                        }
                    }
                }
            }
        } else {
            this.frj({
                type: "roundEnded",
                sender: this.yfk,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: this.vey(this.win),
                    balanceAfter: this.vey(this.blh)
                }
            });
            this.pgn.wvx.qex("info", "#wbi", [this.language.cpo, true]);
            this.wrc();
            if (this.pfy > 0 && this.bcw >= this.pfy) {
                this.tod(false);
                this.pgn.lkn(false);
                this.ber();
                this.nwo()
            } else {
                this.pgn.wvx.qex("start", "#nkf", [this.language.start, true]);
                if (this.wft()) {
                    this.ber();
                    this.pgn.wvx.qex("info", "#wra", [0]);
                    this.pgn.lkn(true);
                    this.tod(true);
                    this.xay()
                } else {
                    if (this.djz) {
                        this.kqo = setTimeout(this.myz, 400)
                    } else {
                        this.pgn.wvx.qex("info", "#wra", [0]);
                        this.pgn.lkn(true);
                        this.tod(true)
                    }
                }
            }
        }
    };
    this.mgz = function () {};
    this.zfd = function () {
        return ((this.djz || (this.iqc && this.owp && !this.ciy)) && this.snu > 1 && this.jwl)
    };
    this.xdy = function () {
        var c = [],
            f = [],
            e = (this.doa) ? 0 : 1,
            b = ((this.doa && this.hfz[this.xgw] > 0) || (!this.doa && this.hfz[0] > 0)) ? this.snu - 1 : this.snu;
        for (var d = 0; d < b; d++, e++) {
            c[d] = this.kiw[e];
            f[d] = this.kiw[e] + 1
        }
        this.cve = true;
        this.hmo = true;
        this.wxw();
        this.wkf();
        this.vxv((this.qzj === true) ? this.cwq : this.eyz);
        this.wfs();
        this.xee();
        this.pgn.wvx.qex("win", "#wbi", [this.language.win + " " + b + " " + this.language.cpa, true]);
        this.nlu(f);
        this.ied.stop();
        this.ied.ipl(c, this.hih);
        this.dpj = setTimeout(this.nxk, 1000)
    };
    this.nxk = function () {
        if (kdn.uay.dpj >= 0 && !kdn.uay.djz) {
            kdn.uay.dpj = -1;
            kdn.uay.cqh()
        }
        if (kdn.uay.usf()) {
            kdn.uay.wkr()
        } else {
            kdn.uay.yuj()
        }
    };
    this.rhd = function () {
        this.ibb = true;
        this.nqt = true;
        if (!this.qzj) {
            if (!this.ciy) {
                if (this.zfd()) {
                    this.xdy()
                } else {
                    this.nxk()
                }
            }
            if (!(this.rtr || this.hmo || ((this.cve) && !this.ciy))) {
                if (!(this.iqc && this.owp && !this.ciy)) {
                    this.whc()
                }
            }
        } else {
            if (!this.ciy) {
                if (this.zfd()) {
                    this.xdy()
                } else {
                    this.nxk()
                }
            } else {
                if (!(this.rtr || this.hmo || (this.cve && !this.ciy))) {
                    this.whc()
                } else {}
            }
        }
    };
    this.whc = function () {
        this.nqt = true;
        if (!(this.ied.sip() || this.tot)) {
            this.tot = true;
            if (!this.qzj) {
                this.efk()
            } else {
                this.irm();
                if (!this.xrs && this.hec > 0) {
                    if (!this.ciy) {
                        this.tod(true);
                        this.pgn.jbk(true)
                    }
                }
            }
        }
    };
    this.sbi = function () {
        return false
    };
    this.oar = function () {
        return false
    };
    this.usf = function () {
        return false
    };
    this.ptv = function () {};
    this.bzb = function () {};
    this.wkr = function () {};
    this.jqi = function () {
        return this.xrs
    };
    this.avc = function () {
        if (!kdn.uay.byy && !kdn.uay.rtr) {
            kdn.uay.xxv()
        }
    };
    this.myz = function () {
        if (kdn.uay.wte() != null && (kdn.uay.ikb <= 0 || (kdn.uay.qzj === false && kdn.uay.tyh === false && kdn.uay.blh - kdn.uay.wdm() < kdn.uay.gle) || (kdn.uay.qzj === false && kdn.uay.tyh === false && kdn.uay.hmf > 0 && kdn.uay.blh >= kdn.uay.hmf) || (kdn.uay.qzj === false && kdn.uay.trd > 0 && kdn.uay.win > kdn.uay.trd))) {
            if (kdn.uay.djz === true) {
                kdn.uay.jty()
            }
            kdn.uay.tod(true);
            if (kdn.uay.qzj === true) {
                kdn.uay.cdx(kdn.uay.win);
                kdn.uay.cqh();
                kdn.uay.uni();
                kdn.uay.fjx();
                kdn.uay.pgn.wvx.qex("info", "#ife");
                kdn.uay.vxr(true);
                kdn.uay.pgn.jbk(true)
            } else {
                kdn.uay.pgn.wvx.qex("info", "#nhy");
                kdn.uay.pgn.lkn(true)
            }
        } else {
            if (!kdn.uay.rly) {
                kdn.uay.xxv()
            }
        }
    };
    this.pir = function () {};
    this.lsm = function () {};
    this.ypm = function () {};
    this.dar = function () {};
    this.zew = function () {};
    this.tgz = function () {};
    this.xvx = function () {};
    this.tbr = function () {};
    this.mdo = function () {};
    this.mlf = function () {
        var b = this.bew.gfj("tops");
        if (b) {
            b.gqq(1)
        }
    };
    this.wdq = function () {
        var b = this.bew.gfj("tops");
        if (b) {
            b.gqq(0)
        }
    };
    this.gwm = function () {};
    this.oie = function () {};
    this.wdl = function () {};
    this.iby = function () {};
    this.qau = function () {
        if (!(this.xrs && this.qzj && this.djz)) {
            this.jui = false;
            if (!kdn.lgy.zvx) {
                this.kcd = this.language.moe
            } else {
                this.kcd = this.language.vca
            }
            this.vdk = setInterval(this.dop, 1000)
        }
    };
    this.dop = function () {
        var b = kdn.uay.pgn.wvx.gfj("info");
        if (b) {
            if (kdn.uay.jui) {
                b.wbi(kdn.uay.kcd, true)
            } else {
                b.ife()
            }
            kdn.uay.zwp();
            kdn.uay.jui = !kdn.uay.jui
        }
    };
    this.gwc = function () {};
    this.pbu = function () {};
    this.ozd = function (b) {};
    this.fgn = function (b) {
        if (b) {
            this.r1 = this.uwd.uzy.ykz;
            this.r2 = this.uwd.uzy.lkz;
            this.r3 = this.uwd.uzy.yed;
            this.r4 = this.uwd.uzy.tnd;
            this.r5 = this.uwd.uzy.rhu
        } else {
            this.r1 = this.uwd.uzy.r1;
            this.r2 = this.uwd.uzy.r2;
            this.r3 = this.uwd.uzy.r3;
            this.r4 = this.uwd.uzy.r4;
            this.r5 = this.uwd.uzy.r5
        }
        this.yke.vwe = this.r1;
        this.auv.vwe = this.r2;
        this.qmr.vwe = this.r3;
        this.joi.vwe = this.r4;
        this.coh.vwe = this.r5
    };
    this.qai = function () {};
    this.vzt = function () {
        if (!(this.iqc && this.owp)) {
            setTimeout(this.wnh, 500);
            if (!this.djz && !this.pjz && !this.iqc && !this.jqi()) {
                this.pgn.wvx.qex("gamble", "#mys")
            }
        } else {
            setTimeout(this.fen, 500)
        }
        this.ipu = (this.win > this.totalBet) ? true : false;
        this.jol = 0;
        this.ilb = 0;
        this.jfy = 0;
        this.oyi = 0;
        this.ugm = 0;
        this.lhy = this.win;
        this.hqo = new Date().getTime();
        this.ciy = true;
        this.xpk = 0;
        this.fjx();
        this.eha.xuk("winfinal");
        this.dlp = setTimeout(this.nbs, this.rfb)
    };
    this.wnh = function () {
        if (kdn.uay.djz || kdn.uay.jqi()) {
            kdn.uay.pgn.gmm(true)
        } else {
            kdn.uay.pgn.voo(true)
        }
    };
    this.fen = function () {
        kdn.uay.pgn.wtq(true)
    };
    this.xul = function () {};
    this.yng = function () {};
    this.vjs = function () {
        this.cqh();
        this.uni();
        if (this.qzj) {
            this.cve = true
        }
        this.pfp()
    };
    this.bsd = function () {};
    this.cqh = function () {
        this.hmo = true;
        this.ibb = true;
        if (this.zcz || this.ebc || this.umv) {
            this.fxq(false, false)
        }
        this.pgn.wvx.qex("win", "#ife");
        this.nlu(null);
        this.ied.stop();
        this.ied.xwd()
    };
    this.uni = function () {
        if (this.ozx) {
            for (var c = 0, b = this.eha.xhe("symb"); c < b; c++) {
                this.eha.xuk("symb" + c)
            }
        }
    };
    this.txe = function () {
        if (kdn.uay.ciy) {
            kdn.uay.tbc = false;
            kdn.uay.xpk = new Date().getTime();
            kdn.uay.eha.mtk("wincount");
            kdn.uay.xfy += 1;
            kdn.uay.ilb = 0;
            kdn.uay.jfy = 0
        } else {
            clearTimeout(kdn.uay.txz);
            if (kdn.uay.qzj === true && kdn.uay.wgp() === true) {
                kdn.uay.eha.awi("freespinstart", kdn.uay.sxu(), 300)
            } else {
                if (kdn.uay.qzj === false) {
                    kdn.uay.nmv(1, 300)
                }
            }
        }
    };
    this.fjx = function () {
        this.eha.xuk("wincount");
        this.eha.xuk("wincount1");
        this.eha.xuk("wincount2");
        this.eha.xuk("wincount3");
        this.eha.xuk("wincount4");
        this.eha.xuk("wincount5");
        this.eha.xuk("wincount6")
    };
    this.huq = function () {
        kdn.uay.tbc = true;
        if (kdn.uay.qzj === true && kdn.uay.wgp() === true) {
            kdn.uay.eha.awi("freespinstart", kdn.uay.sxu(), 300)
        } else {
            if (kdn.uay.qzj === false && kdn.uay.xrs === false) {
                kdn.uay.nmv(1, 300)
            }
        }
    };
    this.nbs = function () {
        var d = 0,
            b = kdn.uay.rfb,
            c = 0;
        if (kdn.uay.ugm < kdn.uay.lhy) {
            if (kdn.uay.nms == 1) {
                kdn.uay.wcw()
            } else {
                if (kdn.uay.nms == 2) {
                    kdn.uay.lxz()
                } else {
                    if (kdn.uay.nms == 3) {
                        kdn.uay.wjx()
                    }
                }
            }
            d = kdn.uay.fxk(kdn.uay.lhy - kdn.uay.ugm);
            kdn.uay.ugm += d;
            kdn.uay.cdx(kdn.uay.oyi + kdn.uay.ugm);
            kdn.uay.jol++;
            c = new Date().getTime();
            b = kdn.uay.rfb + (kdn.uay.jol * kdn.uay.rfb - (c - kdn.uay.hqo));
            kdn.uay.dlp = setTimeout(kdn.uay.nbs, b)
        } else {
            kdn.uay.pfp()
        }
    };
    this.wcw = function () {
        if (this.xpk > 0) {
            var b = new Date().getTime() - this.xpk;
            if (b > 7112 && this.ilb == 0) {
                this.eha.mtk("wincount1");
                this.ilb = 1
            } else {
                if (b > (7112 + (3556 * this.ilb))) {
                    if (this.ilb % 2 == 0) {
                        if (this.ugm >= this.totalBet * this.qqy) {
                            this.eha.mtk("wincount5");
                            if (this.oou) {
                                if (!this.ied.mle) {
                                    this.ied.ovy()
                                } else {
                                    this.ied.qdv()
                                }
                            }
                        } else {
                            if (this.ugm >= this.totalBet * this.kov) {
                                this.eha.mtk("wincount3")
                            } else {
                                this.eha.mtk("wincount1")
                            }
                        }
                    } else {
                        if (this.ugm >= this.totalBet * this.qqy) {
                            this.eha.mtk((this.eha.zot === true) ? "wincount5" : "wincount6");
                            if (this.oou) {
                                if (!this.ied.mle) {
                                    this.ied.ovy()
                                } else {
                                    this.ied.qdv()
                                }
                            }
                        } else {
                            if (this.ugm >= this.totalBet * this.kov) {
                                this.eha.mtk((this.eha.zot === true) ? "wincount3" : "wincount4")
                            } else {
                                this.eha.mtk((this.eha.zot === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.ilb += 1
                }
            }
        }
    };
    this.lxz = function () {
        if (this.xpk > 0) {
            var b = new Date().getTime() - this.xpk;
            if (b > 4173 && this.ilb == 0) {
                this.eha.mtk("wincount1");
                this.ilb = 1
            } else {
                if (b > (4173 + (4173 * (this.ilb + this.jfy)))) {
                    if (this.ilb % 2 == 0) {
                        if (this.ugm >= this.totalBet * this.qqy) {
                            this.eha.mtk("wincount5");
                            if (this.oou) {
                                if (!this.ied.mle) {
                                    this.ied.ovy()
                                } else {
                                    this.ied.qdv()
                                }
                            }
                            this.jfy += 1
                        } else {
                            if (this.ugm >= this.totalBet * this.kov) {
                                this.eha.mtk("wincount3")
                            } else {
                                this.eha.mtk("wincount1")
                            }
                        }
                    } else {
                        if (this.ugm >= this.totalBet * this.qqy) {
                            this.eha.mtk((this.eha.zot === true) ? "wincount5" : "wincount6");
                            if (this.oou) {
                                if (!this.ied.mle) {
                                    this.ied.ovy()
                                } else {
                                    this.ied.qdv()
                                }
                            }
                            this.jfy += 1
                        } else {
                            if (this.ugm >= this.totalBet * this.kov) {
                                this.eha.mtk((this.eha.zot === true) ? "wincount3" : "wincount4")
                            } else {
                                this.eha.mtk((this.eha.zot === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.ilb += 1
                }
            }
        }
    };
    this.wjx = function () {};
    this.pfp = function () {
        if (this.lhy > 0) {
            clearTimeout(this.txz);
            this.eha.awi("wincountfade", 0, 300);
            if (this.xpk > 0) {
                this.eha.mtk("winfinal")
            } else {
                if (this.qzj === false && this.xrs === false) {
                    this.nmv(1, 300)
                }
            }
        } else {
            this.huq()
        }
        this.fjx();
        this.cdx(this.win);
        this.fzy(this.win);
        this.ciy = false;
        clearTimeout(this.dlp);
        if (!(this.djz || this.pjz)) {
            if (!(this.dbs > 0)) {
                if (!this.iqc) {
                    this.odn = setTimeout(this.fzg, 500)
                }
            } else {
                if (this.qzj && this.hec > 0) {
                    this.pgn.gmm(true);
                    if (!this.xrs && !this.usf()) {
                        this.tod(true)
                    }
                }
            }
        }
        if (this.ibb) {
            if (this.zfd()) {
                this.xdy()
            } else {
                this.nxk()
            }
        }
    };
    this.fxk = function (c) {
        var b = this.yzf;
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
    this.xhh = function () {
        return !(this.jqi() || this.pjz || this.qzj)
    };
    this.ibr = function () {
        var d = kdn.uay.pgn.wvx.gfj("gamble"),
            c = kdn.uay.pgn.wvx.gfj("info"),
            b = kdn.uay.pgn.wvx.gfj("win");
        kdn.uay.cvw();
        if (d) {
            d.whl();
            d.mrh(kdn.uay.iqc)
        }
        if (b) {
            b.ife()
        }
        if (c) {
            c.wbi(kdn.uay.owg(kdn.uay.language.coy) + ": " + kdn.uay.vey(kdn.uay.win))
        }
        kdn.uay.uwd.fhv()
    };
    this.fhv = function () {
        if (!kdn.uay.rtr) {
            if (kdn.uay.aig != kdn.uay.qar) {
                kdn.uay.pgn.gmm(true)
            }
            kdn.uay.cqh();
            kdn.uay.cxl = 20;
            if (kdn.uay.win < kdn.uay.cxl) {
                kdn.uay.cxl = kdn.uay.win;
                kdn.uay.pfa()
            } else {
                if (kdn.uay.win >= kdn.uay.wdm() * 25) {
                    kdn.uay.cxl = 40
                }
                kdn.uay.pfa()
            }
        }
    };
    this.vvn = function () {
        this.rtr = true;
        this.byy = false;
        this.lhy = 0;
        clearTimeout(this.fbd);
        this.eha.xuk("collect");
        this.eha.xuk("collectend");
        this.eha.mtk("collectend");
        this.wrn(this.blh, true, !this.tyh);
        this.bvf();
        this.wrc();
        this.pgn.wvx.qex("start", "#nkf", [this.language.start, true]);
        this.frj({
            type: "roundEnded",
            sender: this.yfk,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                win: this.vey(this.win),
                balanceAfter: this.vey(this.blh)
            }
        });
        if (this.pfy > 0 && this.bcw >= this.pfy) {
            this.tod(false);
            this.pgn.lkn(false);
            this.ber();
            this.nwo()
        } else {
            if (this.wft()) {
                this.ber();
                this.tod(true);
                this.pgn.lkn(true);
                this.xay()
            } else {
                this.tod(true);
                if (!this.djz) {
                    this.pgn.lkn(true)
                } else {
                    this.kqo = setTimeout(this.myz, 500)
                }
            }
        }
    };
    this.pfa = function () {
        this.xro = false;
        this.ipu = (this.win > this.totalBet) ? true : false;
        this.jol = 0;
        this.oyi = this.win;
        if (this.tyh) {
            this.wyv = this.ogv - this.win
        } else {
            this.wyv = this.blh - this.win
        }
        this.ugm = 0;
        this.lhy = this.win;
        this.hqo = new Date().getTime();
        this.byy = true;
        this.fbd = setTimeout(this.wxp, this.saq)
    };
    this.wxp = function () {
        var d = 0,
            b = kdn.uay.rfb,
            c = 0;
        if (kdn.uay.lhy > 0) {
            if (!kdn.uay.xro) {
                kdn.uay.eha.xuk("collect");
                kdn.uay.eha.xuk("collectend");
                kdn.uay.eha.mtk("collect");
                kdn.uay.xro = true
            }
            d = Math.round(kdn.uay.lhy / kdn.uay.cxl);
            kdn.uay.lhy -= d;
            kdn.uay.jol++;
            kdn.uay.cxl -= 1;
            if (kdn.uay.lhy < 0) {
                kdn.uay.lhy = 0
            }
            kdn.uay.cdx(kdn.uay.oyi - (kdn.uay.win - kdn.uay.lhy));
            if (kdn.uay.tyh) {
                kdn.uay.unj(kdn.uay.wyv + (kdn.uay.win - kdn.uay.lhy), true)
            } else {
                kdn.uay.wrn(kdn.uay.wyv + (kdn.uay.win - kdn.uay.lhy), true, false)
            }
            c = new Date().getTime();
            b = kdn.uay.saq + (kdn.uay.jol * kdn.uay.saq - (c - kdn.uay.hqo));
            kdn.uay.fbd = setTimeout(kdn.uay.wxp, b)
        } else {
            if (!kdn.uay.rtr) {
                kdn.uay.eha.xuk("collect");
                kdn.uay.eha.mtk("collectend");
                kdn.uay.byy = false;
                kdn.uay.rtr = true;
                clearTimeout(kdn.uay.fbd);
                kdn.uay.wrn(kdn.uay.blh, true, !kdn.uay.tyh);
                kdn.uay.bvf();
                kdn.uay.wrc();
                kdn.uay.pgn.wvx.qex("start", "#nkf", [kdn.uay.language.start, true]);
                kdn.uay.frj({
                    type: "roundEnded",
                    sender: kdn.uay.yfk,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        win: kdn.uay.vey(kdn.uay.win),
                        balanceAfter: kdn.uay.vey(kdn.uay.blh)
                    }
                });
                if (kdn.uay.pfy > 0 && kdn.uay.bcw >= kdn.uay.pfy) {
                    kdn.uay.tod(false);
                    kdn.uay.pgn.lkn(false);
                    kdn.uay.ber();
                    kdn.uay.nwo()
                } else {
                    if (kdn.uay.aig == kdn.uay.qar) {
                        kdn.uay.aig()
                    } else {
                        if (kdn.uay.wft()) {
                            kdn.uay.ber();
                            kdn.uay.pgn.lkn(true);
                            kdn.uay.tod(true);
                            kdn.uay.xay()
                        } else {
                            if (!kdn.uay.djz) {
                                kdn.uay.pgn.lkn(true)
                            } else {
                                kdn.uay.pgn.nfa(true)
                            }
                            kdn.uay.tod(true);
                            if (kdn.uay.djz || kdn.uay.pjz) {
                                kdn.uay.pgn.wvx.qex("info", "#wbi", [kdn.uay.owg(kdn.uay.language.coy) + ": " + kdn.uay.vey(kdn.uay.win)]);
                                if (kdn.uay.djz) {
                                    kdn.uay.kqo = setTimeout(kdn.uay.myz, 400)
                                } else {
                                    if (kdn.uay.pjz) {}
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.esl = function (b, c, d) {
        if (b <= c) {
            return 1
        }
        var e = 0,
            f = this.fqe(b, c, d),
            g = 0;
        while (b > g) {
            f = this.fqe(b - g, c, d);
            g += f;
            e++
        }
        return e
    };
    this.fqe = function (e, b, c) {
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
    this.kfs = function (b) {
        this.bgw = true;
        this.zkm();
        this.pgn.wvx.qex("info", "#wbi", ["", true]);
        this.yyv(true);
        this.vfh(b);
        if (b == kdn.mzw.kep.hfk) {
            this.qzs();
            this.pgn.wvx.qex("info", "#tqh", [0]);
            this.gdj((this.pfy > 0 && this.bcw < this.pfy), false, true);
            this.pgn.lkn(true);
            this.tod(true);
            this.vto()
        } else {
            if (b == kdn.mzw.kep.kvw) {
                if (this.win > 0) {
                    this.nqt = true;
                    this.rtr = false;
                    this.ibb = false;
                    this.hmo = false;
                    this.zef();
                    this.cdx(this.win);
                    this.pgn.wvx.qex("info", "#wbi", [this.owg(this.language.coy) + ": " + this.vey(this.win)]);
                    this.ciy = false;
                    this.fxq(this.zcz, this.ebc);
                    this.rch();
                    if (this.xhi() === false) {
                        this.owp = true;
                        this.pgn.wvx.qex("start", "#nkf", [this.language.fhv, true]);
                        this.pgn.wvx.qex("gamble", "#mys");
                        this.odn = setTimeout(this.fzg, 10)
                    } else {
                        this.owp = false
                    }
                    if (this.oar()) {
                        this.bzb()
                    } else {
                        this.efk();
                        this.pgn.voo(true)
                    }
                } else {
                    this.qzs();
                    this.pgn.wvx.qex("info", "#tqh", [0]);
                    this.gdj((this.pfy > 0 && this.bcw < this.pfy), false, true);
                    this.pgn.lkn(true);
                    this.tod(true);
                    this.vto()
                }
                this.dbs = 0;
                this.hec = 0
            } else {
                if (b == kdn.mzw.kep.kbm || b == kdn.mzw.kep.wgz) {
                    this.dbs = 0;
                    this.hec = 0;
                    this.rtr = true;
                    this.qzs();
                    this.pgn.wvx.qex("info", "#tqh", [0]);
                    this.gdj((this.pfy > 0 && this.bcw < this.pfy), false, true);
                    this.pgn.lkn(true);
                    this.tod(true);
                    this.vto()
                } else {
                    if (b == kdn.mzw.kep.qgv || b == kdn.mzw.kep.rns || b == kdn.mzw.kep.jrd || b == kdn.mzw.kep.vpc) {
                        this.btu(b)
                    } else {
                        if (b == kdn.mzw.kep.prd) {
                            this.fgn(false);
                            this.dbs = 0;
                            this.hec = 0;
                            this.owp = true;
                            this.rtr = false;
                            if (this.win > 0) {
                                this.cdx(this.win);
                                this.pgn.wvx.qex("info", "#wbi", [this.owg(this.language.coy) + ": " + this.vey(this.win)]);
                                if (this.xhi() === false) {
                                    this.pgn.wvx.qex("start", "#nkf", [this.language.fhv, true]);
                                    this.pgn.wvx.qex("gamble", "#mys");
                                    this.odn = setTimeout(this.fzg, 10)
                                } else {
                                    this.owp = false
                                }
                                this.pgn.voo(true)
                            } else {
                                this.qzs();
                                this.pgn.wvx.qex("info", "#tqh", [0]);
                                this.gdj((this.pfy > 0 && this.bcw < this.pfy), false, true);
                                this.pgn.lkn(true);
                                this.tod(true);
                                this.vto()
                            }
                        } else {
                            if (b == kdn.mzw.kep.pij) {
                                this.fgn(false);
                                this.dbs = 0;
                                this.hec = 0;
                                this.rtr = true;
                                this.qzs();
                                this.pgn.wvx.qex("info", "#tqh", [0]);
                                this.gdj((this.pfy > 0 && this.bcw < this.pfy), false, true);
                                this.pgn.lkn(true);
                                this.tod(true);
                                this.vto()
                            } else {
                                if (b == kdn.mzw.kep.wel) {
                                    this.dbs = 0;
                                    this.hec = 0;
                                    this.igb();
                                    this.bgw = true;
                                    if (this.win == 0) {
                                        this.gdj((this.pfy > 0 && this.bcw < this.pfy), false, true);
                                        this.vto()
                                    }
                                } else {
                                    if (b == kdn.mzw.kep.qjx) {
                                        this.dbs = 0;
                                        this.hec = 0;
                                        this.saz();
                                        this.bgw = true
                                    } else {
                                        this.nig(b)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.btu = function (b) {};
    this.nig = function (b) {};
    this.vfh = function (b) {
        if (kdn.qwt.value9 && kdn.lgy.hqv == kdn.ifs.mns && kdn.lgy.hty() === false) {
            return
        }
        if (b == kdn.mzw.kep.rns || b == kdn.mzw.kep.jrd || b == kdn.mzw.kep.vpc || b == kdn.mzw.kep.qgv) {
            this.eha.mtk("freespinstart")
        } else {
            if (!((b == kdn.mzw.kep.wel && this.win > 0) || b == kdn.mzw.kep.qjx)) {
                this.eha.mtk("start");
                this.xbm()
            }
        }
    };
    this.sci = function () {
        this.eut();
        this.yyv(true);
        if (this.yke.law < this.ond || this.yke.kjd > 0) {
            this.bal()
        } else {
            var b = this.yke.law * this.xiu;
            setTimeout(this.bal, b)
        }
    };
    this.bal = function () {
        if (!kdn.uay.rgv) {
            if (!kdn.uay.zgb && kdn.uay.hpd()) {
                kdn.uay.pgn.wvx.qex("start", "#nkf", [kdn.uay.language.aka, true])
            }
            kdn.uay.xyw();
            for (var c = 0, b = kdn.uay.bsj.length; c < b; c++) {
                if (kdn.uay.bsj[c] && kdn.uay.jkt[c]) {
                    kdn.uay.bsj[c].knu(kdn.uay.eyz[c], kdn.uay.mxc[c] - kdn.uay.mxc[0] + kdn.uay.nrw[c], kdn.uay.vol)
					/*-------------*/
					for(var j=0; j<gameController.reels['reel'+(c+1)].length; j++){
						
					if(gameController.reels['reel'+(c+1)][j]!=""){
						
					kdn.uay.bsj[c].jgn[j+1]=parseInt(gameController.reels['reel'+(c+1)][j]);	
						
					}	
						
					
					
					}
					/*------------*/
                }
            }
            kdn.uay.rgv = true;
            kdn.uay.com = true;
            if (kdn.uay.zoe === true) {
                kdn.uay.aqm()
            }
        }
    };
    this.vgm = function () {};
    this.qcr = function () {};
    this.vza = function () {
        this.bgw = false;
        this.pjz = false;
        this.owp = true;
        this.cve = false;
        this.zkm();
        this.sci();
        this.pgn.nfa(true);
        this.bvi()
    };
    this.emh = function () {
        this.bgw = false;
        this.pjz = true;
        this.owp = false;
        this.cve = false;
        this.zkm();
        if (this.miq && this.miq.fww()) {
            this.wrn(this.blh, false, true);
            this.miq.swo(this.blh, this.win, true);
            setTimeout(this.miq.nan, 1000)
        } else {
            this.sci();
            this.pgn.nfa(true);
            this.bvi()
        }
    };
    this.kug = function () {
        this.bgw = false;
        this.owp = false;
        this.rpo = true;
        this.zkm();
        this.jaw();
        if (this.miq && this.miq.fww()) {
            this.miq.rmh();
            this.wrn(this.blh, false, true);
            setTimeout(this.miq.nan, 100)
        } else {
            this.fhv()
        }
    };
    this.saz = function () {
        this.bgw = false;
        this.zkm();
        if (this.miq) {
            if (!this.miq.fww()) {
                this.sef()
            } else {
                this.miq.faq()
            }
            this.wrn(this.blh, false, true);
            this.miq.swo(this.blh, this.win, true);
            this.miq.lkn(true)
        }
    };
    this.igb = function () {
        this.bgw = false;
        this.zkm();
        if (this.miq) {
            if (!this.miq.fww() && this.win > 0) {
                this.sef()
            }
            this.miq.swo(this.blh, this.win, true);
            if (this.win == 0) {
                this.miq.wvx.qex("info", "#ife");
                setTimeout(this.glu, 1000)
            }
        }
    };
    this.cfw = function () {};
    this.wtu = function () {};
    this.qwd = function () {};
    this.sgn = function () {};
    this.rdk = function () {};
    this.sqj = function () {};
    this.ctn = function (b) {
        if (b == kdn.lzh.djl) {
            this.pgn.wvx.qex("info", "#wbi", [this.language.puf, true])
        } else {
            if (b == kdn.lzh.bnk) {
                this.pgn.wvx.qex("info", "#wbi", [this.language.xch + " " + this.vey(this.mus), true])
            } else {
                if (b >= kdn.lzh.svv) {
                    this.vdv();
                    if (b == kdn.lzh.lno || b == kdn.lzh.gdk) {
                        this.stop()
                    }
                    this.pgn.wvx.qex("info", "#ife");
                    this.pgn.lkn(false);
                    this.tod(false)
                }
            }
        }
        this.ber();
        if (b < kdn.lzh.svv) {
            this.rpo = true;
            this.pgn.lkn(true);
            this.tod(true)
        } else {
            this.xaq([{
                sek: b
            }])
        }
    };
    this.hjl = function (c, e) {
        var d = this.bew.gfj("stats"),
            b = this.bew.gfj("history");
        if (this.nvh) {
            if (!this.vks) {
                if (d && d.fww()) {
                    d.lkn(false);
                    d.dft(false)
                }
                this.bew.qex("settings", "#xwd");
                if (this.miq != null && this.miq.fww()) {
                    this.miq.wvx.qex("info", "#wbi", [c, true]);
                    this.miq.lkn(false);
                    this.lbo()
                } else {
                    if (this.pgn != null) {
                        if (this.ust != null && this.ust.fww()) {
                            this.oiu()
                        }
                        this.pgn.lkn(false);
                        this.vdv();
                        this.stop();
                        if (this.hhw.ibz === false) {
                            this.pgn.wvx.qex("setting", "#mrh", [false])
                        }
                        this.pgn.wvx.qex("info", "#wbi", [c, true])
                    } else {
                        this.tap(c)
                    }
                }
            } else {
                this.stop();
                this.tss();
                if (b) {
                    b.zdu(true)
                }
                this.znu(this.owg(c))
            }
        } else {
            this.tap(c)
        }
        if (e) {
            if (!this.vks && this.uwd.uzy.ivj == 0 && kdn.qwt.value46 > 0) {
                this.cca((this.mjs) ? kdn.qwt.value71 : kdn.qwt.value47)
            } else {
                setTimeout(this.qar, kdn.qwt.value10)
            }
        }
    };
    this.qba = function (b) {
        this.blh = b;
        this.zkm();
        if (((this.miq && !this.miq.fww() || !this.miq) && !this.ust.fww())) {
            this.wrn(b, true, true)
        } else {
            if (this.miq && this.miq.fww()) {
                this.miq.wvx.qex("creditd", "#nkf", [this.zre(b), true]);
                this.wrn(b, false, true)
            }
        }
        if (this.blh > 0) {
            this.jaw()
        } else {
            this.qzs()
        }
    };
    this.wrn = function (d, b, c) {
        hwa.prototype.wrn.call(this, d, b);
        c = (c != null && c === true) ? true : false;
        if (c) {
            this.frj({
                type: "balance",
                sender: this.yfk,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    amount: this.vey(d)
                }
            })
        }
    };
    this.zab = function (b) {
        if (b == kdn.language.EN || b == kdn.language.US) {
            return new spl()
        } else {
            if (b == kdn.language.ES || b == kdn.language.CO || b == kdn.language.MX || b == kdn.language.CL || b == kdn.language.VE) {
                return new xvy()
            } else {
                if (b == kdn.language.DE || b == kdn.language.AT) {
                    return new itp()
                } else {
                    if (b == kdn.language.PT || b == kdn.language.BR) {
                        return new bmz()
                    } else {
                        if (b == kdn.language.RU) {
                            return new jlk()
                        } else {
                            if (b == kdn.language.EE) {
                                return new cvc()
                            } else {
                                if (b == kdn.language.TR) {
                                    return new tfe()
                                } else {
                                    if (b == kdn.language.CZ) {
                                        return new sml()
                                    } else {
                                        if (b == kdn.language.GR) {
                                            return new dzu()
                                        } else {
                                            if (b == kdn.language.BG) {
                                                return new esy()
                                            } else {
                                                if (b == kdn.language.GE) {
                                                    return new loh()
                                                } else {
                                                    if (b == kdn.language.HU) {
                                                        return new mvl()
                                                    } else {
                                                        if (b == kdn.language.RO) {
                                                            return new lni()
                                                        } else {
                                                            if (b == kdn.language.FR) {
                                                                return new zgy()
                                                            } else {
                                                                if (b == kdn.language.HR) {
                                                                    return new pom()
                                                                } else {
                                                                    if (b == kdn.language.IT) {
                                                                        return new cjv()
                                                                    } else {
                                                                        if (b == kdn.language.SE) {
                                                                            return new bya()
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
    this.pjc = function () {
        var f = this.bew.gfj("stats"),
            e = this.bew.gfj("topb"),
            c = this.bew.gfj("topi"),
            b = this.bew.gfj("betsel"),
            d = this.bew.gfj("linesel");
        this.eig();
        this.pgn.hji(this.lcw, 0);
        this.arl[0] = this.language.ccw;
        this.arl[1] = this.language.www;
        this.pgn.hji(this.arl, 1);
        this.puw[0] = this.language.tlw;
        this.puw[1] = this.language.ycy;
        if (this.miq) {
            this.miq.hji(this.puw, 0)
        }
        if (this.djz) {
            this.pgn.wvx.qex("start", "#nkf", [this.language.start])
        } else {
            if (this.win > 0 && !this.pjz && !this.rtr && !this.qzj) {
                this.pgn.wvx.qex("start", "#nkf", [this.language.fhv])
            } else {
                this.pgn.wvx.qex("start", "#nkf", [this.language.start])
            }
        }
        this.pgn.wvx.qex("gamble", "#nkf", [this.language.iqc]);
        if (this.xhi() === false) {
            this.pgn.wvx.qex("bet", "#nkf", [this.language.dub]);
            if (this.wte() != null) {
                this.pgn.wvx.qex("astart", "#nkf", [this.language.csu])
            } else {
                this.pgn.wvx.qex("astart", "#nkf", [this.language.djz])
            }
        }
        this.pgn.wvx.qex("exit", "#nkf", [(kdn.qwt.value50.g === true) ? this.language.aem : this.language.tyu]);
        this.pgn.wvx.qex("line", "#nkf", [this.language.cpa]);
        this.pgn.wvx.qex("creditd", "#aaj", [(this.apz()) ? this.language.qfy : this.language.blh]);
        this.pgn.wvx.qex("betd", "#aaj", [this.language.dub]);
        this.pgn.wvx.qex("help", "#nkf", [this.language.ajq]);
        if (this.miq) {
            this.miq.wvx.qex("creditd", "#aaj", [(this.apz()) ? this.language.qfy : this.language.blh]);
            this.miq.wvx.qex("wind", "#aaj", [this.language.win]);
            this.miq.wvx.qex("gambled", "#aaj", [this.language.qvk]);
            this.miq.wvx.qex("colorwind", "#aaj", [this.language.kpb]);
            this.miq.wvx.qex("suitwind", "#aaj", [this.language.kcu]);
            if (this.hhw.ofp === false || this.hhw.ibz === false) {
                this.miq.wvx.qex("collect", "#nkf", [this.language.fhv]);
                this.miq.wvx.qex("half", "#nkf", [this.language.nna])
            }
        }
        if (e) {
            e.wvx.qex("language", "#yub", [this.language.language]);
            e.wvx.qex("audio", "#yub", [this.language.audio]);
            e.wvx.qex("melody", "#yub", [this.language.skd]);
            e.wvx.qex("turbo", "#yub", [this.language.zgb]);
            e.wvx.qex("fullscreen", "#yub", [this.language.bsb]);
            e.wvx.qex("help", "#yub", [this.language.yly]);
            e.wvx.qex("history", "#yub", [this.language.qlo]);
            e.wvx.qex("statistic", "#yub", [this.language.sjx]);
            e.wvx.qex("rules", "#yub", [this.language.nfp])
        }
        if (c) {
            c.yub("freeplay", this.language.qfy)
        }
        if (b) {
            b.wgw = this.language.yzf
        }
        if (d) {
            d.wgw = this.language.cpa
        }
        if (f) {
            if (kdn.qwt.value36) {
                f.wgw = this.owg(this.language.sjx)
            } else {
                if (kdn.qwt.value37) {
                    f.wgw = this.owg(this.language.cxz)
                }
            }
            if (f.rgx != null) {
                f.rgx.nkf(this.language.ret, false)
            }
            if (f.yqq != null) {
                f.yqq.nkf(this.language.nvx, false)
            }
        }
        this.ust.wvx.qex("return", "#nkf", [this.language.ret, false]);
        this.nmr();
        this.bew.qex("settings", "#pjc", [this.language, true]);
        this.bew.qex("autop", "#pjc", [this.language]);
        if (this.ptb) {
            if (this.ptb.ije) {
                this.ptb.ije.innerHTML = this.language.mnl
            }
            if (this.ptb.tft) {
                this.ptb.tft.innerHTML = this.language.nml
            }
            if (this.ptb.ojv) {
                this.ptb.ojv.innerHTML = this.language.san
            }
        }
    };
    this.nmr = function () {};
    this.pwj = function () {
        if (this.vks) {
            return false
        }
        if (typeof scripts !== "undefined" && scripts.length === 2) {
            return false
        }
        return true
    };
    this.dog = function () {
        var j = new Date().getTime(),
            k = [],
            f = 40,
            e = 50,
            l = 750;
        if (!this.evl) {
            this.evl = new Date().getTime();
            this.nmm = false;
            return false
        }
        if (this.pwj() && j - this.evl > f * e * l) {
            for (var g = 0, d = this.lkx.length; g < d; g++) {
                k[g] = this.lkx[g] + ((g > 0) ? j % 60 : 0)
            }
            this.mxc = k;
            this.tja = 5 + j % 50;
            return true
        }
        return false
    };
    this.wdm = function () {
        return this.yzf * this.cpa
    };
    this.ewp = function () {
        return this.mus
    };
    this.lae = function () {
        return this.mnn
    };
    this.mzv = function (c) {
        for (var d = 0; d < this.ebi.length; d++) {
            var b = this.ebi[d] * this.cpa;
            if (b > this.mnn || (c && (this.blh > 0 && this.blh < b))) {
                return d - 1
            } else {
                if (b == this.mnn || d == this.ebi.length - 1) {
                    return d
                }
            }
        }
        return -1
    };
    this.kfv = function () {
        for (var c = 0; c < this.ebi.length; c++) {
            var b = this.ebi[c] * this.cpa;
            if ((b >= this.mus && b < this.mnn)) {
                return c
            }
        }
        return -1
    };
    this.epr = function () {
        for (var c = 0; c < this.ebi.length; c++) {
            var b = this.ebi[c] * this.xgw;
            if ((b >= this.mus && b < this.mnn)) {
                return c
            }
        }
        return -1
    };
    this.hnj = function () {
        var d = this.mzv(true);
        var b = this.kfv();
        var c = this.ebi.length - 1;
        c = (c > d) ? d : c;
        if (c > 0) {
            while (this.ebi[c] * this.cpa > this.blh) {
                c--;
                if (c <= b) {
                    break
                }
            }
        }
        this.gjn = (c < b) ? b : c;
        this.juk(false, false);
        if (this.wdm() > this.blh) {
            this.pgn.wvx.qex("info", "#wbi", [this.language.puf, true])
        } else {
            if (this.wdm() < this.mus) {
                this.pgn.wvx.qex("info", "#wbi", [this.language.xch + " " + this.vey(this.mus), true])
            }
        }
    };
    this.juk = function (j, g) {
        var f = this.pgn.wvx.gfj("info"),
            b = this.bew.gfj("betsel"),
            d = this.bew.gfj("linesel"),
            c = this.kfv(),
            e = this.mzv(true);
        this.gjn = (this.gjn < c && c >= 0) ? c : this.gjn;
        this.gjn = (this.gjn > e && e > 0) ? e : this.gjn;
        this.yzf = this.ebi[this.gjn];
        this.totalBet = this.wdm();
        this.yyv(false);
        if (this.xhi() == true) {
            this.eha.mtk("btn")
        } else {
            if (g) {
                if (this.cpa == this.xgw) {
                    this.eha.mtk("maxstep")
                } else {
                    this.eha.mtk("step" + ((this.cpa / this.lth) % 12))
                }
            } else {
                if (this.gjn == e) {
                    this.eha.mtk("maxstep")
                } else {
                    this.eha.mtk("step" + (this.gjn % 12))
                }
            }
        }
        if (f) {
            if (f.hzh() === false) {
                f.wff();
                f.wbi(this.sim());
                f.nhy()
            } else {
                if (this.syf()) {
                    f.wbi(this.sim());
                    f.tqh(0)
                }
            }
        }
        if (b) {
            b.gqq(this.gjn, true)
        }
        if (d) {
            d.dit(this.cpa, false)
        }
        if (this.uks && g) {
            this.ied.ipl()
        }
    };
    this.kbf = function () {
        var c = this.pgn.wvx.gfj("info"),
            b = this.mzv(true);
        this.gjn = (this.gjn > b && b > 0) ? b : this.gjn;
        this.yzf = this.ebi[this.gjn];
        this.totalBet = this.wdm();
        this.yyv(false);
        if (c) {
            if (c.hzh() === false) {
                c.wff();
                c.wbi(this.sim());
                c.nhy()
            } else {
                if (this.syf()) {
                    c.wbi(this.sim());
                    c.tqh(0)
                }
            }
        }
    };
    this.rjh = function (b) {
        var e = this.pgn.wvx.gfj("info"),
            d = this.bew.gfj("llinep"),
            c = this.bew.gfj("rlinep");
        this.cpa = this.qjq[b];
        this.totalBet = this.wdm();
        if (this.uks) {
            this.ied.ipl()
        }
        if (d) {
            d.aoh(this.cpa)
        }
        if (c) {
            c.aoh(this.cpa)
        }
        this.yyv(false);
        if (e && e.hzh() === false) {
            e.wff();
            e.wbi(this.sim());
            e.nhy()
        }
    };
    this.sim = function () {
        return this.language.cpa + ": " + this.cpa + ((kdn.lgy.jmt() === true) ? "|" : "  -  ") + this.language.dub + "/" + this.language.kqi + ": " + this.vey(this.yzf)
    };
    this.ttf = function (b) {
        kdn.uay.gjn = b;
        kdn.uay.kbf()
    };
    this.ysk = function () {
        return this.sed != this.xgw
    };
    this.mds = function (d) {
        var b = kdn.uay.bew.gfj("betsel"),
            c = kdn.uay.bew.gfj("linesel");
        kdn.uay.rjh(d);
        if (b) {
            b.agn(kdn.uay.kfv(), kdn.uay.mzv(true));
            b.gqq(kdn.uay.gjn, false)
        }
        if (c) {
            c.dit(kdn.uay.cpa, false)
        }
        kdn.uay.zwp()
    };
    this.vto = function () {
        if (kdn.qwt.value78 && this.xhi() === false) {
            if (kdn.qwt.value78.t === true) {
                this.bew.qex("topb", "#dft", [true])
            }
            if (kdn.qwt.value78.b === true && this.tyh === false) {
                this.bew.qex("betsel", "#dft", [true]);
                this.bew.qex("linesel", "#dft", [true])
            }
            if (kdn.qwt.value78.t === true || kdn.qwt.value78.b === true) {
                this.jqa()
            }
            this.zwp();
            if (kdn.qwt.value78.d > 0) {
                this.kqr = setTimeout(this.gji, kdn.qwt.value78.d)
            }
        }
    };
    this.gji = function () {
        kdn.uay.hvi();
        clearTimeout(kdn.uay.kqr)
    };
    this.hgk = function (c) {
        var b = this.bew.gfj("betsel");
        if (b && b.fww() && b.ovk()) {
            this.hvi(c)
        } else {
            hwa.prototype.hgk.call(this, c)
        }
    };
    this.jqa = function () {
        if (this.canvas) {
            this.canvas.onmousemove = function (b) {
                kdn.uay.okw(b)
            };
            this.canvas.ontouchmove = function (b) {
                kdn.uay.okw(b)
            }
        }
    };
    this.scj = function () {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.okw = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        var l = 0,
            k = 0,
            d = false,
            m = this.bew.gfj("topb"),
            b = this.bew.gfj("betsel"),
            e = this.bew.gfj("linesel");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.aab) {
                l = g.pageX - this.offsetLeft;
                k = g.pageY - this.offsetTop
            } else {
                l = Math.round((g.pageX - this.offsetLeft) / this.rif);
                k = Math.round((g.pageY - this.offsetTop) / this.lwf)
            }
        } else {
            if (!this.aab) {
                l = c.pageX - this.offsetLeft;
                k = c.pageY - this.offsetTop
            } else {
                l = Math.round((c.pageX - this.offsetLeft) / this.rif);
                k = Math.round((c.pageY - this.offsetTop) / this.lwf)
            }
        }
        if (b && b.fww()) {
            if (b.mur(l, k, d)) {
                return
            }
        }
        if (e && e.fww()) {
            if (e.mur(l, k, d)) {
                return
            }
        }
        if (m && m.fww()) {
            m.mur(l, k)
        }
        for (var f = 0, j = this.bsj.length; f < j; f++) {
            if (this.bsj[f].mur(l, k, d)) {
                return
            }
        }
    };
    this.vwb = function () {
        var b = this.bew.gfj("betsel"),
            c = this.bew.gfj("linesel");
        if (this.yhx >= 0) {
            return
        }
        if (b) {
            b.goz();
            b.agn(this.kfv(), this.mzv(true));
            b.gqq(this.gjn, false)
        }
        if (c) {
            c.goz();
            c.dit(this.cpa, false)
        }
        this.eha.xuk("panel_in");
        this.eha.mtk("panel_in");
        this.tod(false);
        this.hqo = new Date().getTime();
        this.jol = 0;
        this.yhx = setTimeout(this.vft, 89)
    };
    this.hvi = function (d) {
        var b = this.bew.gfj("betsel"),
            c = this.bew.gfj("linesel"),
            e = this.bew.gfj("topb");
        if (this.yhx >= 0 || !((e && e.fww()) || (b && b.fww()) || (c && c.fww()))) {
            return
        }
        if (d == this.ekj || d == this.mrf || d == this.cbs || d == this.hpp) {
            d();
            return
        }
        if (b) {
            b.ldl()
        }
        if (c) {
            c.ldl()
        }
        if (e) {
            e.ldl()
        }
        this.eha.xuk("panel_out");
        this.eha.mtk("panel_out");
        this.cuz = d;
        this.hqo = new Date().getTime();
        this.jol = 0;
        this.yhx = setTimeout(this.fri, 89)
    };
    this.vft = function () {
        var b = kdn.uay.bew.gfj("betsel"),
            f = kdn.uay.bew.gfj("linesel"),
            e = (!b || (b && !b.sgd())),
            c = (!f || (f && !f.sgd())),
            g = 0,
            d = 0;
        kdn.uay.zwp();
        kdn.uay.jol++;
        if (e && c) {
            kdn.uay.jqa();
            clearTimeout(kdn.uay.yhx);
            kdn.uay.yhx = -1
        } else {
            g = new Date().getTime();
            d = 89 + (kdn.uay.jol * 89 - (g - kdn.uay.hqo));
            kdn.uay.yhx = setTimeout(kdn.uay.vft, d)
        }
    };
    this.fri = function () {
        var b = kdn.uay.bew.gfj("betsel"),
            g = kdn.uay.bew.gfj("linesel"),
            k = kdn.uay.bew.gfj("topb"),
            f = (!b || (b && !b.sgd())),
            d = (!g || (g && !g.sgd())),
            c = (!k || (k && !k.sgd())),
            j = 0,
            e = 0;
        kdn.uay.zwp();
        kdn.uay.jol++;
        if (f && d && c) {
            kdn.uay.scj();
            clearTimeout(kdn.uay.yhx);
            kdn.uay.yhx = -1;
            if (kdn.uay.syf()) {
                kdn.uay.tod(true)
            }
            if (kdn.uay.ysk()) {
                kdn.uay.ied.xwd()
            }
            if (typeof kdn.uay.cuz === "function") {
                kdn.uay.cuz();
                kdn.uay.cuz = null
            }
        } else {
            j = new Date().getTime();
            e = 89 + (kdn.uay.jol * 89 - (j - kdn.uay.hqo));
            kdn.uay.yhx = setTimeout(kdn.uay.fri, e)
        }
    };
    this.cuz = function () {};
    this.vdz = function () {
        this.eha.xuk("start")
    };
    this.ems = function () {};
    this.svi = function () {
        if (kdn.uay.bsm >= 0) {
            clearTimeout(kdn.uay.bsm);
            kdn.uay.bsm = -1;
            kdn.uay.pgn.wvx.qex("betpopup", "#dft", [false]);
            kdn.uay.zwp()
        }
    };
    this.stop = function () {
        hwa.prototype.stop.call(this);
        this.scj();
        this.cvw();
        if (this.pgn != null) {
            this.pgn.wvx.qex("gamble", "#whl");
            this.pgn.wvx.qex("info", "#ife");
            this.pgn.wvx.qex("win", "#ife");
            this.pgn.stop()
        }
        if (this.ied != null) {
            this.nlu(null);
            this.ied.stop();
            this.ied.xwd()
        }
        if (!this.vks || (this.vks && !this.rxh)) {
            this.fxq(false, false);
            this.zwp()
        }
        this.jsc();
        clearTimeout(this.dlp);
        clearTimeout(this.fbd);
        clearTimeout(this.xqh);
        clearTimeout(this.bsm);
        clearTimeout(this.kzk);
        clearTimeout(this.szy);
        clearTimeout(this.kqo);
        clearTimeout(this.fuc);
        clearTimeout(this.cma);
        if (this.xls) {
            window.dfy(this.id);
            this.id = 0
        } else {
            clearTimeout(this.id)
        }
        clearTimeout(this.yhx);
        clearInterval(this.vdk);
        this.cru();
        if (this.miq != null && this.miq.fww()) {
            this.miq.rmh();
            this.miq.wvx.qex("info", "#ife")
        }
        this.zvu()
    };
    this.cru = function () {};
    this.bvf = function () {
        var b = this.bew.gfj("winp");
        if (b && b.fww()) {
            b.dft(false, true)
        }
    };
    this.qbu = function (b) {
        if (this.qzj) {
            this.pgn.wvx.kzj("buttons", "#dft", [false]);
            this.pgn.wvx.kzj("freespin", "#dft", [b]);
            this.pgn.wvx.kzj("settings", "#dft", [b])
        } else {
            if (this.tyh) {
                this.pgn.wvx.kzj("buttons", "#dft", [false]);
                this.pgn.wvx.kzj("start", "#dft", [b]);
                this.pgn.wvx.kzj("settings", "#dft", [b])
            } else {
                this.pgn.wvx.kzj("buttons", "#dft", [b])
            }
        }
        this.zwp()
    };
    this.vxr = function (b) {};
    this.cdx = function (c) {
        var d = this.bew.gfj("winp"),
            b = this.bew.gfj("fwinp");
        if (!this.qzj && d) {
            d.nkf(this.vey(c), true)
        } else {
            if (b) {
                if (c > 0) {
                    b.nkf(this.vey(c), true)
                } else {
                    b.nkf("", true)
                }
            }
        }
        this.bew.kzj("jackpots", "#zwp")
    };
    this.buw = function (d) {
        var c = this.bew.gfj("winp"),
            b = this.bew.gfj("fwinp");
        if (!this.qzj && c) {
            c.nkf(d, true)
        } else {
            if (b) {
                b.nkf(d, true)
            }
        }
        this.bew.kzj("jackpots", "#zwp")
    };
    this.fzy = function (b) {
        if (!this.qzj && !this.xrs) {
            this.pgn.wvx.qex("info", "#wbi", [this.owg(this.language.coy) + ": " + this.vey(this.win)])
        }
    };
    this.fzg = function () {
        if (!kdn.uay.rtr && !kdn.uay.byy && ((kdn.uay.miq && !kdn.uay.miq.fww()) || !kdn.uay.miq) && !kdn.uay.rly && !kdn.uay.vks) {
            if (kdn.uay.win > 0 && (kdn.uay.xfy > 0 || kdn.uay.uwd.uzy.aqu == kdn.mzw.kep.prd)) {
                kdn.uay.eha.xuk("gambleprop");
                kdn.uay.eha.mtk("gambleprop");
                kdn.uay.yyy = false
            } else {
                kdn.uay.yyy = true
            }
        }
    };
    this.cvw = function () {
        this.eha.xuk("gambleprop");
        this.yyy = false;
        clearTimeout(this.odn)
    };
    this.bda = function () {
        var b = kdn.uay.bew.gfj("finfop");
        if (!kdn.uay.ari && b && b.fww()) {
            kdn.uay.ari = true;
            kdn.uay.eha.xuk("freespininit");
            kdn.uay.eha.xuk("freespinwaiting");
            kdn.uay.eha.mtk("freespinwaiting")
        }
    };
    this.mrv = function () {
        this.ari = false;
        this.eha.xuk("freespininit");
        this.eha.xuk("freespinwaiting")
    };
    this.nli = function () {};
    this.fxq = function (e, c) {
        e = (e != null && e === true);
        c = (c != null && c === true);
        for (var d = 0, b = kdn.uay.bsj.length; d < b; d++) {
            if (kdn.uay.bsj[d]) {
                kdn.uay.bsj[d].fkg = e;
                kdn.uay.bsj[d].qwh = c;
                kdn.uay.bsj[d].zwp()
            }
        }
        if (kdn.uay.umv) {
            kdn.uay.feu()
        }
    };
    this.jnj = function (d) {
        for (var c = 0, b = kdn.uay.bsj.length; c < b; c++) {
            if (kdn.uay.bsj[c]) {
                kdn.uay.bsj[c].ycm = d;
                kdn.uay.bsj[c].zwp()
            }
        }
        if (kdn.uay.umv) {
            kdn.uay.feu()
        }
    };
    this.fcx = function () {
        return (this.blh == 0 && this.qzj == false && (this.state == kdn.mzw.kep.hfk || (this.state == kdn.mzw.kep.kvw && this.win == 0) || this.state == kdn.mzw.kep.kbm || (this.state == kdn.mzw.kep.wel && this.win == 0) || this.state == kdn.mzw.kep.wgz || (this.state == kdn.mzw.kep.prd && this.win == 0) || this.state == kdn.mzw.kep.pij))
    };
    this.mcq = function () {
        var b = this.bew.gfj("topi"),
            c = null;
        if (this.pgn) {
            c = this.pgn.wvx.gfj("setting")
        }
        if ((b && b.ovk() === true) || (c && c.ovk() === true)) {
            return true
        }
        return false
    };
    this.het = function () {
        if (kdn.uay.nbq != "" && kdn.uay.apz() === false) {
            kdn.uay.pgn.wvx.qex("info", "#wff");
            kdn.uay.pgn.wvx.qex("info", "#tqh", [0])
        }
    };
    this.alz = function () {
        if (this.vks === false && kdn.lgy.eho() === true) {
            return true
        }
        return false
    };
    this.tod = function (e) {
        hwa.prototype.tod.call(this, e);
        var c = (e && !this.djz);
        for (var d = 0, b = this.bsj.length; d < b; d++) {
            this.bsj[d].wfx(c)
        }
        if (this.pgn) {
            this.pgn.wvx.qex("setting", "#wfx", [c])
        }
        if (c === true) {
            this.hps()
        } else {
            this.xsi();
            this.vcz()
        }
    };
    this.xam = function (e) {
        hwa.prototype.xam.call(this, e);
        var c = (e && !this.djz);
        for (var d = 0, b = this.bsj.length; d < b; d++) {
            this.bsj[d].wfx(c)
        }
        if (this.pgn) {
            this.pgn.wvx.qex("setting", "#wfx", [c])
        }
    };
    this.psf = function (e) {
        hwa.prototype.psf.call(this, e);
        var c = (e && !this.djz);
        for (var d = 0, b = this.bsj.length; d < b; d++) {
            this.bsj[d].wfx(c)
        }
        if (this.pgn) {
            this.pgn.wvx.qex("setting", "#wfx", [c])
        }
    };
    this.pbs = function () {
        hwa.prototype.pbs.call(this);
        if (kdn.uay.bzd === true && kdn.uay.bky === true) {
            kdn.uay.ber()
        }
    };
    this.brd = function () {
        return (this.blh >= this.wdm() && this.wdm() >= this.mus && ((kdn.uay.wte() != null && this.bew.qex("settings", "#exa") > 0) || kdn.uay.wte() == null))
    };
    this.syf = function () {
        var c = this.bew.gfj("stats"),
            b = this.bew.gfj("settings");
        if (this.ust && this.ust.fww()) {
            return false
        } else {
            if (this.miq && this.miq.fww()) {
                return false
            } else {
                if (c && c.fww()) {
                    return false
                } else {
                    if (b && b.fww()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.njj = function () {
        if (this.pgn) {
            var b = this.pgn.wvx.gfj("start");
            if (b && b.ovk() && !b.jeb()) {
                return true
            }
        }
        return false
    };
    this.zvq = function (b) {
        hwa.prototype.zvq.call(this, b);
        if (this.apz() === false) {
            if (this.pgn) {
                this.pgn.wvx.qex("idd", "#nkf", [" " + ((b > 0) ? b : ""), this.syf()])
            }
            if (this.miq) {
                this.miq.wvx.qex("idd", "#nkf", [" " + ((b > 0) ? b : ""), true])
            }
        }
    };
    this.ekq = function () {
        hwa.prototype.ekq.call(this);
        var b = "";
        if (kdn.qwt.value49) {
            b += kdn.uay.hbq()
        }
        if (kdn.qwt.value49 && sessionStorage.sessionValue15 == "true") {
            b += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            b += kdn.uay.qrj()
        }
        if (kdn.qwt.value49 && sessionStorage.sessionValue15 == "true") {
            b += "]"
        }
        if (kdn.uay.pgn) {
            kdn.uay.pgn.wvx.qex("timed", "#nkf", [b, kdn.uay.syf()])
        }
        if (kdn.uay.miq) {
            kdn.uay.miq.wvx.qex("timed", "#nkf", [b, kdn.uay.miq.fww()])
        }
    };
    this.ryv = function () {
        if (this.vks) {
            return false
        }
        var e = "",
            b = null,
            c = 0,
            d = null;
        e = this.language.ddu.substr(4, 3) + this.language.ijh.substr(1, 2) + this.language.tmx.substr(7, 2);
        b = window[e.toLowerCase()];
        if (b) {
            for (c = 0, bzo = b.length; c < bzo; c++) {
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
    this.zkm = function () {
        var g = new Date().getTime(),
            e = 80,
            d = 60,
            j = 250;
        if (!this.zsh) {
            this.zsh = new Date().getTime();
            this.ldc = 0;
            this.yrr = 0;
            this.uou = 20;
            return
        }
        if ((this.state == kdn.mzw.kep.kvw || this.state == kdn.mzw.kep.wgz) && this.win > 0) {
            this.uou = (this.uou > 0) ? this.uou - 1 : 0
        }
        if (this.ryv() && g - this.zsh > e * d * j && this.uou <= 0) {
            if (this.state == kdn.mzw.kep.kvw || this.state == kdn.mzw.kep.wgz) {
                this.yrr = 2 + g % 5;
                for (var f = 0; f < this.hfz.length; f++) {
                    this.hfz[f] *= this.yrr
                }
            }
            if (this.state == kdn.mzw.kep.kvw || this.state == kdn.mzw.kep.wel) {
                if (this.yrr > 1) {
                    this.win *= this.yrr
                }
            } else {
                if (this.state == kdn.mzw.kep.wgz) {
                    this.ldc += this.win * (this.yrr - 1);
                    this.win *= this.yrr
                } else {
                    if (this.state == kdn.mzw.kep.kbm) {
                        if (this.yrr > 1) {
                            this.ldc += this.win * (this.yrr - 1) / this.yrr
                        }
                    } else {
                        if (this.state == kdn.mzw.kep.qjx) {
                            if (this.yrr > 1) {
                                this.win *= this.yrr;
                                this.ldc += this.win * (this.yrr - 1) / this.yrr
                            }
                        } else {
                            if (this.state == kdn.mzw.kep.prd || this.state == kdn.mzw.kep.pij || this.state == kdn.mzw.kep.udl || this.state == kdn.mzw.kep.ttn || this.state == kdn.mzw.kep.obs || this.state == kdn.mzw.kep.som) {
                                this.yrr = 1
                            }
                        }
                    }
                }
            }
            this.blh += this.ldc
        }
    };
    this.dtp = function () {
        this.ciy = false;
        clearTimeout(this.dlp);
        this.bvf();
        this.tod(false);
        this.cqh();
        this.uni();
        this.fjx();
        if (this.qzj === true && this.wgp() === true) {
            this.eha.awi("freespinstart", 0, 0)
        } else {
            if (this.qzj === false) {
                this.nmv(0, 0)
            }
        }
        this.pgn.wvx.qex("info", "#ife");
        this.qbu(false);
        this.pgn.lkn(false);
        this.bew.qex("stats", "#dft", [true]);
        this.bew.qex("settings", "#xwd");
        if (this.hhw.ibz === false) {
            this.pgn.wvx.qex("setting", "#mrh", [this.bew.qex("settings", "#fww")])
        }
        this.zwp()
    };
    this.bvy = function () {
        this.bew.qex("stats", "#lkn", [false]);
        this.bew.qex("stats", "#dft", [false]);
        if (!this.qzj) {
            this.pgn.lkn(true)
        } else {
            this.pgn.jbk(true)
        }
        this.tod(true);
        this.qbu(true);
        this.zwp();
        if (!this.qzj) {
            if (this.win > 0) {
                this.pgn.wvx.qex("info", "#wbi", [this.owg(this.language.coy) + ": " + this.vey(this.win)])
            } else {
                this.pgn.wvx.qex("info", "#tqh", [0])
            }
            this.nmv(1, 200)
        } else {
            this.vxr(true);
            this.tdh();
            if (this.wgp() === true) {
                this.eha.awi("freespinstart", 1, 200)
            }
        }
    };
    this.hqf = function () {
        return (!this.qzj && !this.tyh)
    };
    this.aoa = function () {
        this.ciy = false;
        clearTimeout(this.dlp);
        this.cdx(this.win);
        this.bvf();
        this.tod(false);
        this.cqh();
        this.uni();
        this.fjx();
        if (this.qzj === true && this.wgp() === true) {
            this.eha.awi("freespinstart", 0, 0)
        } else {
            if (this.qzj === false) {
                this.nmv(0, 0)
            }
        }
        this.pgn.wvx.qex("info", "#ife");
        this.qbu(false);
        if (this.hhw.ibz === false) {
            this.pgn.wvx.kzj("settings", "#dft", [true])
        }
        this.pgn.inp(true);
        this.bew.qex("settings", "#olx", [this.hqf(), !this.tyh])
    };
    this.zmk = function () {
        this.bew.qex("settings", "#xwd");
        if (!this.qzj) {
            this.pgn.lkn(true)
        } else {
            this.pgn.jbk(true)
        }
        this.tod(true);
        this.qbu(true);
        if (!this.qzj) {
            if (this.win > 0) {
                this.pgn.wvx.qex("info", "#wbi", [this.owg(this.language.coy) + ": " + this.vey(this.win)])
            } else {
                this.pgn.wvx.qex("info", "#tqh", [0])
            }
            this.nmv(1, 200)
        } else {
            this.vxr(true);
            if (this.wgp() === true) {
                this.eha.awi("freespinstart", 1, 200)
            }
        }
    };
    this.irb = function () {
        if (kdn.uay.qzj) {
            kdn.uay.cdx(kdn.uay.win);
            kdn.uay.cqh();
            kdn.uay.uni();
            kdn.uay.fjx();
            kdn.uay.pgn.wvx.qex("info", "#ife");
            kdn.uay.vxr(true)
        }
        kdn.uay.tod(false);
        kdn.uay.pgn.lkn(false);
        if (kdn.uay.qzj === false) {
            kdn.uay.pgn.wvx.qex("info", "#wff")
        }
        kdn.uay.bew.qex("autop", "#olx")
    };
    this.cfn = function () {
        var b = kdn.uay.bew.gfj("autop");
        if (b) {
            kdn.uay.ikb = b.exa();
            kdn.uay.gle = (b.wll() > 0) ? b.wll() : 0;
            kdn.uay.hmf = (b.aao() > 0) ? b.aao() : 0;
            kdn.uay.trd = (b.fla() > 0) ? b.fla() : 0;
            if (kdn.uay.ikb <= 0) {
                kdn.uay.tod(true);
                if (kdn.uay.qzj === true) {
                    kdn.uay.pgn.jbk(true)
                } else {
                    kdn.uay.pgn.lkn(true);
                    kdn.uay.pgn.wvx.qex("info", "#nhy")
                }
            } else {
                kdn.uay.pgn.wvx.qex("astart", "#lrz", [(kdn.uay.ikb >= 0) ? kdn.uay.ikb : (kdn.uay.hhw.ofp === false) ? "---" : "A"])
            }
        }
    };
    this.bvi = function (b) {
        if (typeof b != "boolean") {
            b = true
        }
        if (this.wte() != null && this.ikb >= 0) {
            if (b) {
                this.ikb -= 1
            }
            this.pgn.wvx.qex("astart", "#lrz", [(this.ikb >= 0) ? this.ikb : (this.hhw.ofp === false) ? "---" : "A", true]);
            this.pgn.wvx.qex("start", "#lrz", [(this.ikb >= 0) ? this.ikb : (this.hhw.ofp === false) ? "---" : "A", true])
        }
    };
    this.pmc = function () {
        if (kdn.uay.wte() != null) {
            kdn.uay.ikb = 0;
            kdn.uay.gle = 0;
            kdn.uay.hmf = 0;
            kdn.uay.trd = 0;
            kdn.uay.pgn.wvx.qex("astart", "#lrz", [(kdn.uay.hhw.ofp === false) ? "---" : "A"]);
            kdn.uay.pgn.wvx.qex("start", "#lrz", [(kdn.uay.hhw.ofp === false) ? "---" : "A"])
        }
        kdn.uay.pgn.wvx.qex("start", "#pad");
        kdn.uay.bew.qex("autop", "#wvj");
        kdn.uay.bew.qex("settings", "#pmc")
    };
    this.ber = function () {
        var b = kdn.uay.bew.gfj("topi");
        kdn.uay.djz = false;
        kdn.uay.pmc();
        kdn.uay.pgn.wvx.qex("astart", "#mrh", [kdn.uay.djz]);
        kdn.uay.pgn.wvx.qex("start", "#pad");
        if (b) {
            b.ins("auto", kdn.uay.djz)
        }
    };
    this.spz = function () {
        return (kdn.qwt.value76 != null)
    };
    this.srj = function () {
        return (kdn.qwt.value76 && kdn.qwt.value76.ms === true)
    };
    this.szh = function () {
        hwa.prototype.szh.call(this);
        var b = this.bew.gfj("jwp"),
            c = this.bew.gfj("mjwp");
        if (b) {
            b.uth = this.qbz;
            b.udf = this.voi
        }
        if (c) {
            c.uth = this.qbz
        }
    };
    this.zjz = function () {
        var b = null,
            c = "",
            d = null,
            e = (this.bew.gfj(this.npb.bdl) == null);
        if (!e) {
            b = this.bew.gfj("jwp");
            c = this.bew.qex(this.npb.bdl, "#qhu");
            d = this.bew.qex(this.npb.bdl, "#pgj")
        } else {
            b = this.bew.gfj("mjwp")
        }
        this.pgn.lkn(false);
        this.pgn.wvx.qex("info", "#ife");
        if (kdn.qwt.value76 && kdn.qwt.value76.a === true && !e) {
            kdn.uay.ber()
        }
        if (kdn.uay.qzj === false) {
            kdn.uay.nmv(0, 0)
        }
        if (b) {
            if (!e) {
                b.vzj(d);
                b.aaj(c)
            }
            b.lrz(this.npb.value);
            b.start()
        }
    };
    this.voi = function () {
        var b = kdn.uay.bew.gfj("jwp");
        if (b && b.fww()) {
            kdn.uay.jui = false;
            if (!kdn.lgy.zvx) {
                kdn.uay.kcd = kdn.uay.language.moe
            } else {
                kdn.uay.kcd = kdn.uay.language.vca
            }
            kdn.uay.vdk = setInterval(kdn.uay.dop, 1000)
        }
    };
    this.qbz = function () {
        clearInterval(kdn.uay.vdk);
        kdn.uay.pgn.wvx.qex("info", "#ife");
        kdn.uay.bew.qex("jwp", "#dft", [false]);
        kdn.uay.bew.qex("mjwp", "#dft", [false]);
        kdn.uay.zwp();
        kdn.uay.dyk()
    };
    this.dyk = function () {
        this.xro = false;
        this.jol = 0;
        this.ugm = 0;
        this.cxl = 20;
        this.wyv = this.blh - this.npb.value;
        this.lhy = this.npb.value;
        this.hqo = new Date().getTime() + 800;
        this.byy = true;
        this.fbd = setTimeout(this.ndo, 300)
    };
    this.ndo = function () {
        var d = 0,
            b = kdn.uay.rfb,
            c = new Date().getTime();
        if (kdn.uay.lhy > 0) {
            if (!kdn.uay.xro) {
                kdn.uay.eha.xuk("collect");
                kdn.uay.eha.xuk("collectend");
                kdn.uay.eha.mtk("collect");
                kdn.uay.xro = true
            }
            d = Math.round(kdn.uay.lhy / kdn.uay.cxl);
            kdn.uay.lhy -= d;
            if (kdn.uay.lhy < 0) {
                kdn.uay.lhy = 0
            }
            kdn.uay.wrn(kdn.uay.wyv + (kdn.uay.npb.value - kdn.uay.lhy), true, false);
            kdn.uay.jol++;
            kdn.uay.cxl -= 1;
            b = kdn.uay.jol * kdn.uay.saq - (c - kdn.uay.hqo);
            kdn.uay.fbd = setTimeout(kdn.uay.ndo, b)
        } else {
            kdn.uay.eha.xuk("collect");
            kdn.uay.eha.mtk("collectend");
            kdn.uay.byy = false;
            clearTimeout(kdn.uay.fbd);
            if (!kdn.uay.qzj && kdn.uay.win === 0) {
                kdn.uay.nmv(1, 300);
                kdn.uay.tod(true)
            }
            kdn.uay.slf();
            kdn.uay.yyv(true);
            kdn.uay.id = setTimeout(kdn.uay.tgn, 1000)
        }
    };
    this.tgn = function () {
        if (kdn.uay.sbi() === true) {
            kdn.uay.ptv()
        } else {
            kdn.uay.sfe()
        }
    };
    this.gdj = function (b, d, c) {
        if (b != this.tyh || d === true) {
            this.tyh = b;
            this.pgn.wvx.kzj("buttons", "#dft", [!b]);
            this.pgn.wvx.kzj("start", "#dft", [true]);
            this.pgn.wvx.kzj("settings", "#dft", [true]);
            if (this.djz === true) {
                this.ber();
                this.eha.mtk("auto_off")
            }
            if (this.iqc === true) {
                this.jay();
                this.eha.mtk("gamble_off")
            }
            if (b) {
                this.pgn.wvx.qex("info", "#dft", [false]);
                this.pgn.wvx.qex("freeround", "#mcr", [this.pfy, this.bcw, this.vey(this.ogv)]);
                this.pgn.wvx.qex("freeround", "#dft", [true])
            } else {
                this.pgn.wvx.qex("freeround", "#dft", [false]);
                this.pgn.wvx.qex("info", "#dft", [true])
            }
            if (c && c === true) {
                this.zwp()
            }
        }
    };
    this.wrc = function () {
        if (this.pfy > 0) {
            this.pgn.wvx.qex("freeround", "#mcr", [this.pfy, this.bcw, this.vey(this.ogv), true])
        }
    };
    this.unj = function (c, b) {
        if (this.pfy > 0) {
            this.pgn.wvx.qex("freeround", "#eqf", [this.vey(c), b])
        }
    };
    this.dpd = function (b) {};
    this.nwo = function () {
        this.yyv(false);
        this.tod(false);
        this.pgn.lkn(false);
        this.xaq([{
            sek: kdn.lzh.pdd
        }]);
        if (this.ogv > 0) {
            this.eha.mtk("winfinal")
        }
    };
    this.lcn = function () {
        if (kdn.uay.djz) {
            kdn.uay.ber()
        }
        if (kdn.uay.gfw.length > 0) {
            kdn.uay.xaq(kdn.uay.gfw)
        }
    };
    this.ilk = function () {
        if (!this.rly && (this.state == kdn.mzw.kep.hfk || ((this.state == kdn.mzw.kep.kvw || this.state == kdn.mzw.kep.prd || this.state == kdn.mzw.kep.wel) && this.win == 0) || ((this.state == kdn.mzw.kep.kbm || this.state == kdn.mzw.kep.wgz || this.state == kdn.mzw.kep.pij) && (this.win == 0 || (this.win > 0 && this.rtr))))) {
            return true
        }
        return false
    };
    this.yab = function () {
        if (this.wft() && this.ilk()) {
            if (this.djz) {
                this.ber()
            }
            this.xay()
        }
    }
}
hwa.prototype = new acg;

function xtz() {
    var d = 8;
    var b = 9;
    var c = 10;
    var a = 11;
    var f = 12;
    var e = 13;
    this.backgroundColor = "white";
    this.asm = "black";
    this.font = "verdana";
    this.zde = "bold";
    this.fst = null;
    this.qiz = new bzm(5, 8, 56, 34);
    this.ksz = new bzm(37, 3, 98, 104);
    this.byu = new bzm(33, 110, 72, 76);
    this.fuf = new bzm(10, 42, 45, 45);
    this.mxa = new bzm(5, 120, 127, 50);
    this.dtw = 3;
    this.msb = 34;
    this.kve = 50;
    this.cmw = 4;
    this.vit = "";
    this.uqy = null;
    this.gom = null;
    this.lnk = new Image();
    this.urz = new Image();
    this.jwg = new Image();
    this.jev = new Image();
    this.vmv = new Image();
    this.ajs = new Image();
    this.ayw = new Image();
    this.zjg = new Image();
    this.wha = new Image();
    this.lib = new Image();
    this.toe = -1;
    this.swb = -1;
    this.kku = true;
    this.vny = false;
    this.tqi = function (g) {
        try {
            this.msb = g.fontSize;
            this.kve = g.air;
            this.qiz = g.avj;
            this.ksz = g.bok;
            this.byu = g.zhj;
            this.fuf = g.obx;
            this.mxa = g.xbi;
            this.dtw = g.jvl;
            this.cmw = g.qjd
        } catch (j) {
            console.error(j)
        }
    };
    this.qla = function (o, g, k, r, n, m, l, q, p, j) {
        this.urz = o;
        this.jwg = g;
        this.jev = k;
        this.lnk = r;
        this.vmv = n;
        this.ajs = m;
        this.ayw = l;
        this.zjg = q;
        this.wha = j;
        this.lib = p
    };
    this.lrz = function (j, g) {
        this.swb = j >> 2;
        this.toe = j & 3;
        if (this.swb < 8) {
            this.vit = this.swb + 2
        } else {
            if (this.swb == d) {
                this.vit = "10"
            } else {
                if (this.swb == f) {
                    this.vit = "A"
                } else {
                    if (this.swb == a) {
                        this.vit = "K"
                    } else {
                        if (this.swb == c) {
                            this.vit = "Q"
                        } else {
                            if (this.swb == b) {
                                this.vit = "J"
                            } else {
                                if (this.swb == e) {
                                    this.vit = "j"
                                }
                            }
                        }
                    }
                }
            }
        }
        this.gom = null;
        if (this.swb == 9) {
            this.gom = this.ayw
        } else {
            if (this.swb == 10) {
                this.gom = this.ajs
            } else {
                if (this.swb == 11) {
                    this.gom = this.vmv
                }
            }
        }
        this.ouj = null;
        if (this.toe == 0) {
            this.uqy = this.jwg
        } else {
            if (this.toe == 1) {
                this.uqy = this.urz
            } else {
                if (this.toe == 2) {
                    this.uqy = this.lnk
                } else {
                    if (this.toe == 3) {
                        this.uqy = this.jev
                    }
                }
            }
        }
        if (this.toe == 0 || this.toe == 1) {
            this.asm = "rgb(198,0,0)"
        } else {
            this.asm = "black"
        }
        this.vny = g;
        this.zwp()
    };
    this.mbe = function (g) {
        this.kku = !this.kku;
        if (this.kku) {
            this.fst = this.wha
        } else {
            this.fst = this.lib
        }
        if (g && g === true) {
            this.parent.zwp(this.x, this.y, this.width, this.height)
        }
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var g = this.context2D;
        g.save();
        if (this.fst != null) {
            g.drawImage(this.fst, this.x, this.y)
        } else {
            g.lineJoin = "round";
            g.lineCap = "round";
            g.textAlign = "center";
            if (this.backgroundColor != null) {
                kdn.lgy.suj(g, this.x, this.y, this.width, this.height, this.dtw, this.backgroundColor)
            }
            if (this.gom != null) {
                g.drawImage(this.gom, this.x + this.ksz.x, this.y + this.ksz.y)
            }
            if (this.uqy != null) {
                g.drawImage(this.uqy, this.x + this.byu.x, this.y + this.byu.y);
                g.drawImage(this.zjg, 0, (this.zjg.height / 5) * this.toe, this.zjg.width, this.zjg.height / 5, this.x + this.fuf.x, this.y + this.fuf.y, this.zjg.width, this.zjg.height / 5)
            }
            kdn.lgy.jnl(g, this.vit, this.asm, this.x + this.qiz.x, this.y + this.qiz.y, this.qiz.width, this.qiz.height, this.font, this.msb, this.zde);
            if (this.vny === true) {
                kdn.lgy.jnl(g, "WIN", "red", this.x + this.mxa.x, this.y + this.mxa.y, this.mxa.width, this.mxa.height, this.font, this.kve, this.zde, "yellow", this.cmw)
            }
        }
        g.restore()
    }
}
xtz.prototype = new yos;

function wnm() {
    this.xtu = [];
    this.dgu = new Image();
    this.frd = 2;
    this.tqi = function (a) {
        try {
            this.frd = a.fcg
        } catch (b) {
            console.error(b)
        }
    };
    this.zui = function (b) {
        for (var a = 0; a < b.length; a++) {
            this.xtu[a] = b[a] & 3
        }
    };
    this.nqp = function () {
        if (this.xtu[0] === 4) {
            return
        }
        for (var a = this.xtu.length - 1; a > 0; a--) {
            this.xtu[a] = this.xtu[a - 1]
        }
        this.xtu[0] = 4
    };
    this.kdm = function (a) {
        this.dgu = a
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.xtu.length; b++) {
            a.drawImage(this.dgu, 0, this.dgu.height * this.xtu[b] / 5, this.dgu.width, this.dgu.height / 5, this.x + (b * (this.dgu.width + this.frd)), this.y, this.dgu.width, this.dgu.height / 5)
        }
        a.restore()
    }
}
wnm.prototype = new yos;

function cow() {
    var a = this;
    this.hoq = 0;
    this.ayx = 0;
    this.kdm = function (b) {
        this.ldi = b;
        this.hoq = Math.round(this.ldi.height / 2);
        this.ayx = Math.round(this.width / 2)
    };
    this.xkj = function () {
        a.xxx = false
    };
    this.mdf = function () {
        a.rof = false;
        if (a.fww()) {
            a.parent.zwp(a.x, a.y, a.width, a.height)
        }
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var b = this.context2D;
        b.save;
        if (this.rof) {
            b.drawImage(this.ldi, 0, this.hoq, this.ldi.width, this.hoq, this.x, this.y, this.width, this.height)
        } else {
            b.drawImage(this.ldi, 0, 0, this.ldi.width, this.hoq, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
cow.prototype = new aad;

function oog() {
    var a = this;
    var c = 1;
    var g = 2;
    var d = 3;
    var f = 4;
    var e = 6;
    var b = 5;
    this.ldi = null;
    this.wvx = null;
    this.eaa = null;
    this.mpo = null;
    this.zyo = null;
    this.dcd = null;
    this.itu = -1;
    this.dnf = 0;
    this.ezi = false;
    this.isv = false;
    this.rwx = false;
    this.pbg = 10;
    this.ytl = 0;
    this.hwo = 0;
    this.oph = 0;
    this.myb = 0;
    this.ycw = 0;
    this.nab = false;
    this.dxf = 0;
    this.bve = 0;
    this.cjm = function (j, l, k) {
        oog.prototype.cjm.call(this, j, l, k);
        this.atv()
    };
    this.vmb = function (j) {
        try {
            this.gmq(j);
            this.nrk(j);
            this.ezt(j);
            this.fhe(j);
            this.deq(j);
            this.dcd = j.jlw
        } catch (k) {
            console.error(k)
        }
    };
    this.tqi = function (n) {
        try {
            var s = this.wvx.wrb("cbuttons"),
                m = this.wvx.wrb("displays"),
                r = this.wvx.gfj("idd"),
                t = this.wvx.gfj("timed"),
                j = this.wvx.gfj("info"),
                q = this.wvx.gfj("history"),
                k = this.wvx.gfj("card");
            for (var l = 0, o = s.length; l < o; l++) {
                s[l].tqi(n.dtm)
            }
            for (var l = 0, o = m.length; l < o; l++) {
                m[l].tqi(n.display)
            }
            if (r) {
                r.tqi(n.zev);
                r.yai(n.fdg)
            }
            if (t) {
                t.tqi(n.zev);
                t.yai(n.xhf)
            }
            if (j) {
                j.tqi(n.kmm);
                j.yai(n.kmm.sde)
            }
            if (q) {
                q.tqi(n.qlo);
                q.yai(n.qlo.sde)
            }
            if (k) {
                k.tqi(n.pml);
                k.yai(n.pml.sde)
            }
            this.wvx.qex("collect", "#yai", [n.upy]);
            this.wvx.qex("half", "#yai", [n.iog]);
            this.wvx.qex("hart", "#yai", [n.lbj]);
            this.wvx.qex("diamond", "#yai", [n.bra]);
            this.wvx.qex("spade", "#yai", [n.xnx]);
            this.wvx.qex("club", "#yai", [n.bta]);
            this.wvx.qex("red", "#yai", [n.vpu]);
            this.wvx.qex("black", "#yai", [n.xdh]);
            this.wvx.qex("creditd", "#yai", [n.vis]);
            this.wvx.qex("wind", "#yai", [n.xbi]);
            this.wvx.qex("gambled", "#yai", [n.cna]);
            this.wvx.qex("colorwind", "#yai", [n.vdw]);
            this.wvx.qex("suitwind", "#yai", [n.ftj]);
            this.dcd = n.jlw
        } catch (p) {
            console.error(p)
        }
    };
    this.idh = function (j) {
        try {
            var q = this.wvx.wrb("cbuttons"),
                k = this.wvx.wrb("cdisplays"),
                s = this.wvx.wrb("gdisplays"),
                p = this.wvx.gfj("idd"),
                r = this.wvx.gfj("timed"),
                l = this.wvx.gfj("info");
            this.eaa = j.backgroundColor;
            this.mpo = j.kus;
            this.zyo = j.qze;
            for (var m = 0, n = q.length; m < n; m++) {
                q[m].idh((this.parent.hhw.ibz === false) ? j.ocr : (this.parent.evj === kdn.hhw.yjt) ? j.ohz : j.zlz)
            }
            for (var m = 0, n = k.length; m < n; m++) {
                k[m].idh(j.display)
            }
            for (var m = 0, n = s.length; m < n; m++) {
                s[m].idh(j.aeb)
            }
            if (p) {
                p.idh(j.zev)
            }
            if (r) {
                r.idh(j.zev)
            }
            if (l) {
                l.idh(j.kmm)
            }
        } catch (o) {
            console.error(o)
        }
    };
    this.dmk = function (u, t) {
        var s = this.wvx.wrb("buttons"),
            o = this.wvx.gfj("half"),
            l = this.wvx.gfj("collect"),
            r = u - this.x,
            q = t - this.y;
        for (var n = 0, p = s.length; n < p; n++) {
            var k = s[n];
            if (r >= k.x && r <= k.x + k.width && q >= k.y && q <= k.y + k.height && k.fww() === true && k.ovk() === true && k.jeb() === false) {
                if (k == o || k == l) {
                    this.parent.eha.xuk("btn");
                    this.parent.eha.mtk("btn");
                    k.qde(true, false, true)
                } else {
                    k.qde(true, false, false)
                }
                this.zwp();
                k.mik();
                for (var m = 0; m < p; m++) {
                    s[m].egb(true)
                }
                return true
            }
        }
        return false
    };
    this.szd = function () {
        var m = this.wvx.wrb("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.kpf() === true) {
                k.qde(false, true);
                return true
            }
        }
        return false
    };
    this.sxr = function (q) {
        var p = this.wvx.wrb("buttons"),
            l = this.wvx.gfj("half"),
            r = this.wvx.gfj("collect");
        for (var o = 0, k = p.length; o < k; o++) {
            var n = p[o];
            if (n.vrv == q) {
                if (n.ovk() === true && n.jeb() === false) {
                    if (n == l || n == r) {
                        this.parent.eha.xuk("btn");
                        this.parent.eha.mtk("btn");
                        n.qde(true, false, true)
                    } else {
                        n.qde(true, false, false)
                    }
                    this.zwp();
                    n.mik();
                    for (var m = 0; m < k; m++) {
                        p[m].egb(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.qpj = function () {
        var m = this.wvx.wrb("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.kpf() === true) {
                k.qde(false, true);
                return true
            }
        }
        return false
    };
    this.swo = function (l, j, k) {
        this.wvx.qex("creditd", "#nkf", [this.parent.zre(l)]);
        this.wvx.qex("wind", "#nkf", [this.parent.zre(j)]);
        this.wvx.qex("gambled", "#nkf", [this.parent.vey(j)]);
        this.wvx.qex("colorwind", "#nkf", [this.parent.vey(j * 2)]);
        this.wvx.qex("suitwind", "#nkf", [this.parent.vey(j * 4)]);
        if (k && k === true) {
            this.zwp()
        }
    };
    this.zui = function (k, n, l) {
        var o = this.wvx.gfj("card"),
            m = this.wvx.gfj("history"),
            j = 0;
        this.bve++;
        if (o) {
            o.fst = null;
            if (k >= 0) {
                o.lrz(k, (this.parent.win > 0))
            }
        }
        if (m) {
            m.zui(n)
        }
        if (!this.parent.vks) {
            if (this.fww() && this.parent.win > 0) {
                j = (this.bve <= 3) ? this.bve : 3;
                this.parent.eha.mtk("gamblewin" + j);
                if (!l) {
                    setTimeout(a.bsv, 2000)
                }
            }
        }
    };
    this.bsv = function () {
        var j = a.wvx.gfj("history");
        a.nle();
        if (j) {
            j.nqp()
        }
        a.zwp();
        a.faq();
        a.lkn(true)
    };
    this.mlq = function (j) {
        if (j == c) {
            this.wvx.qex("red", "#qde", [true, false, false])
        } else {
            if (j == g) {
                this.wvx.qex("black", "#qde", [true, false, false])
            } else {
                if (j == d) {
                    this.wvx.qex("diamond", "#qde", [true, false, false])
                } else {
                    if (j == f) {
                        this.wvx.qex("hart", "#qde", [true, false, false])
                    } else {
                        if (j == e) {
                            this.wvx.qex("spade", "#qde", [true, false, false])
                        } else {
                            if (j == b) {
                                this.wvx.qex("club", "#qde", [true, false, false])
                            }
                        }
                    }
                }
            }
        }
    };
    this.nle = function () {
        var l = this.wvx.wrb("buttons");
        for (var k = 0, j = l.length; k < j; k++) {
            l[k].qde(false)
        }
    };
    this.olx = function () {
        var j = this.wvx.gfj("card"),
            k = this.wvx.gfj("info");
        this.bve = 0;
        this.dnf = 0;
        if (j) {
            j.mbe(false)
        }
        if (k) {
            k.dft(true)
        }
        this.dft(true, true);
        if (k) {
            k.tqh(0)
        }
    };
    this.wdf = function () {
        var j = this.wvx.gfj("card"),
            k = this.wvx.gfj("history");
        if (j) {
            j.qla(this.parent.eha.zgs("g_hart"), this.parent.eha.zgs("g_diamond"), this.parent.eha.zgs("g_spade"), this.parent.eha.zgs("g_clubs"), this.parent.eha.zgs("g_king"), this.parent.eha.zgs("g_queen"), this.parent.eha.zgs("g_jake"), this.parent.eha.zgs("g_suit"), this.parent.eha.zgs("g_red"), this.parent.eha.zgs("g_blue"))
        }
        if (k) {
            k.kdm(this.parent.eha.zgs("g_suit"))
        }
    };
    this.hji = function (l, j) {
        var k = this.wvx.gfj("info");
        if (k) {
            k.wkj(j);
            k.ehp(l, j)
        }
    };
    this.faq = function () {
        if (this.itu < 0) {
            this.ezi = true;
            this.parent.eha.xuk("gamble1");
            this.parent.eha.xuk("gamble2");
            this.itu = setInterval(a.tsw, 200)
        }
    };
    this.tsw = function () {
        var j = a.wvx.gfj("card");
        if (j) {
            j.mbe(true)
        }
        if ((a.dnf % 4) == 0) {
            if (a.ezi) {
                a.parent.eha.mtk("gamble1");
                a.parent.eha.xuk("gamble2")
            } else {
                a.parent.eha.mtk("gamble2");
                a.parent.eha.xuk("gamble1")
            }
            a.ezi = !a.ezi
        }
        a.dnf++
    };
    this.rmh = function () {
        clearInterval(this.itu);
        this.itu = -1;
        this.dnf = 0;
        this.parent.eha.xuk("gamble1");
        this.parent.eha.xuk("gamble2")
    };
    this.atv = function () {
        this.wvx = new xlf();
        this.wvx.cjm();
        this.wvx.hca("buttons");
        this.wvx.hca("displays");
        this.wvx.hca("cbuttons");
        this.wvx.hca("cdisplays");
        this.wvx.hca("gdisplays")
    };
    this.ezt = function (j) {
        this.wvx.udd("collect", this.wqf(j.upy, (this.parent.hhw.ofp === false || this.parent.hhw.ibz === false) ? this.parent.language.fhv : null, (this.parent.hhw.ofp === false || this.parent.hhw.ibz === false) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_co"), this.uzv, (!this.parent.vks) ? this.parent.dnt.gzx : null, j.dtm), ["buttons", "cbuttons"]);
        this.wvx.udd("half", this.wqf(j.iog, (this.parent.hhw.ofp === false || this.parent.hhw.ibz === false) ? this.parent.language.nna : null, (this.parent.hhw.ofp === false || this.parent.hhw.ibz === false) ? this.parent.eha.zgs("btn") : this.parent.eha.zgs("btn_ha"), this.vnh, (!this.parent.vks) ? this.parent.dnt.hin : null, j.dtm), ["buttons", "cbuttons"]);
        this.wvx.udd("hart", this.ben(j.lbj, this.parent.eha.zgs("g_hartbtn"), this.lzw, (!this.parent.vks) ? this.parent.dnt.zgi : null), ["buttons"]);
        this.wvx.udd("diamond", this.ben(j.bra, this.parent.eha.zgs("g_diamondbtn"), this.xue, (!this.parent.vks) ? this.parent.dnt.ugr : null), ["buttons"]);
        this.wvx.udd("spade", this.ben(j.xnx, this.parent.eha.zgs("g_spadebtn"), this.mwq, (!this.parent.vks) ? this.parent.dnt.ifv : null), ["buttons"]);
        this.wvx.udd("club", this.ben(j.bta, this.parent.eha.zgs("g_clubbtn"), this.uoq, (!this.parent.vks) ? this.parent.dnt.xrw : null), ["buttons"]);
        this.wvx.udd("red", this.ben(j.vpu, this.parent.eha.zgs("g_redbtn"), this.qbe, (!this.parent.vks) ? this.parent.dnt.bpv : null), ["buttons"]);
        this.wvx.udd("black", this.ben(j.xdh, this.parent.eha.zgs("g_blackbtn"), this.hzr, (!this.parent.vks) ? this.parent.dnt.svb : null), ["buttons"])
    };
    this.fhe = function (k) {
        var j = null;
        if (!(this.parent.vks && this.parent.jpq) && this.parent.style.uay.amj === false) {
            j = this.parent.eha.zgs("display_effect")
        }
        this.wvx.udd("creditd", this.ylb(k.vis, (this.parent.apz()) ? this.parent.language.qfy : this.parent.language.blh, this.parent.zre(this.parent.blh), j, k.display), ["displays", "cdisplays"]);
        this.wvx.udd("wind", this.ylb(k.xbi, this.parent.language.win, this.parent.zre(this.parent.win), j, k.display), ["displays", "cdisplays"]);
        this.wvx.udd("gambled", this.ylb(k.cna, this.parent.language.qvk, this.parent.vey(this.parent.win), null, k.display), ["displays", "gdisplays"]);
        this.wvx.udd("colorwind", this.ylb(k.vdw, this.parent.language.kpb, this.parent.vey(this.parent.win * 2), null, k.display), ["displays", "gdisplays"]);
        this.wvx.udd("suitwind", this.ylb(k.ftj, this.parent.language.kcu, this.parent.vey(this.parent.win * 4), null, k.display), ["displays", "gdisplays"]);
        this.wvx.udd("idd", this.ylb(k.fdg, null, (this.parent.apz() === true) ? this.parent.language.qfy : " " + ((this.parent.hej > 0) ? this.parent.hej : ""), null, k.zev), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || kdn.qwt.value49) {
            this.wvx.udd("timed", this.ylb(k.xhf, null, "", null, k.zev), ["displays"])
        }
    };
    this.deq = function (j) {
        var k = new xwk();
        k.cjm(j.kmm.sde, this.context2D);
        k.parent = this;
        k.tqi(j.kmm);
        this.wvx.udd("info", k)
    };
    this.gmq = function (k) {
        var j = new xtz();
        j.cjm(k.pml.sde, this.context2D);
        j.parent = this;
        j.tqi(k.pml);
        this.wvx.udd("card", j)
    };
    this.nrk = function (j) {
        var k = new wnm();
        k.cjm(j.qlo.sde, this.context2D);
        k.tqi(j.qlo);
        this.wvx.udd("history", k)
    };
    this.ben = function (l, n, m, k) {
        var j = new cow();
        j.cjm(l, this.context2D);
        j.parent = this;
        j.mik = m;
        j.kdm(n);
        if (k) {
            j.vrv = k.pdi
        }
        return j
    };
    this.wqf = function (m, p, o, n, k, l) {
        var j = new twa();
        j.cjm(m, this.context2D, null, o, null, p);
        j.parent = this;
        j.mik = n;
        j.tqi(l);
        if (k) {
            j.vrv = k.pdi
        }
        return j
    };
    this.ylb = function (k, o, n, m, j) {
        var l = new asq();
        l.cjm(k, this.context2D, null, o, n);
        l.parent = this;
        l.ldi = m;
        l.tqi(j);
        return l
    };
    this.lkn = function (k) {
        var m = this.wvx.wrb("buttons");
        for (var l = 0, j = m.length; l < j; l++) {
            m[l].wfx(k)
        }
    };
    this.uzv = function () {
        a.rmh();
        a.lkn(false);
        a.parent.uwd.fhv()
    };
    this.vnh = function () {
        a.rmh();
        a.lkn(false);
        a.parent.uwd.nna()
    };
    this.lzw = function () {
        a.rmh();
        a.lkn(false);
        a.parent.uwd.iqc(f)
    };
    this.xue = function () {
        a.rmh();
        a.lkn(false);
        a.parent.uwd.iqc(d)
    };
    this.uoq = function () {
        a.rmh();
        a.lkn(false);
        a.parent.uwd.iqc(b)
    };
    this.mwq = function () {
        a.rmh();
        a.lkn(false);
        a.parent.uwd.iqc(e)
    };
    this.qbe = function () {
        a.rmh();
        a.lkn(false);
        a.parent.uwd.iqc(c)
    };
    this.hzr = function () {
        a.rmh();
        a.lkn(false);
        a.parent.uwd.iqc(g)
    };
    this.nan = function () {
        var j = a.wvx.gfj("info");
        if (j) {
            j.ife()
        }
        setTimeout(a.pfa, 10)
    };
    this.pfa = function () {
        a.isv = false;
        a.rwx = (a.parent.win > a.parent.totalBet) ? true : false;
        a.pbg = 20;
        if (a.parent.win >= a.parent.totalBet * 25) {
            a.pbg = 40
        }
        a.ytl = 0;
        a.hwo = a.parent.win;
        a.oph = a.parent.blh - a.parent.win;
        a.myb = a.parent.win;
        a.ycw = new Date().getTime();
        a.nab = true;
        a.dxf = setTimeout(a.wxp, a.parent.saq)
    };
    this.wxp = function () {
        var j = 0,
            k = a.parent.saq,
            l = new Date().getTime();
        if (a.myb > 0) {
            if (!a.isv) {
                a.parent.eha.xuk("collect");
                a.parent.eha.mtk("collect");
                a.isv = true
            }
            j = Math.round(a.myb / a.pbg);
            a.myb -= j;
            if (a.myb < 0) {
                a.myb = 0
            }
            a.wvx.qex("wind", "#nkf", [a.parent.zre(a.hwo - (a.parent.win - a.myb)), true]);
            a.wvx.qex("creditd", "#nkf", [a.parent.zre(a.oph + (a.parent.win - a.myb)), true]);
            a.ytl++;
            a.pbg -= 1;
            k = a.parent.saq + (a.ytl * a.parent.saq - (l - a.ycw));
            a.dxf = setTimeout(a.wxp, k)
        } else {
            a.parent.eha.xuk("collect");
            a.parent.eha.mtk("collectend");
            a.nab = false;
            clearTimeout(a.dxf);
            setTimeout(a.parent.glu, 100)
        }
    };
    this.zwp = function (r, p, s, n) {
        if (!this.fww() || !this.parent.bja()) {
            return
        }
        var k = (r != null && p != null && s != null && n != null),
            t = this.context2D,
            q = null,
            j = this.wvx.mpl(),
            m = (this.parent.hhw.ibz === false) ? this.parent.eha.zgs("btn_back") : (this.parent.evj === kdn.hhw.yjt) ? this.parent.eha.zgs("g_right") : this.parent.eha.zgs("g_left");
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
            t.drawImage(this.ldi, (this.dcd.x == 0) ? this.dcd.width : 0, this.height - m.height);
            q = t.createLinearGradient(this.dcd.x, this.dcd.y, this.dcd.x + this.dcd.width, this.dcd.y);
            q.addColorStop(0.2, this.mpo);
            q.addColorStop(1, this.zyo);
            t.fillStyle = q;
            t.save();
            if (this.parent.hhw.ibz === false) {
                if (this.parent.evj === kdn.hhw.ssg) {
                    t.translate(this.dcd.width / 2, this.dcd.height / 2);
                    t.rotate(Math.PI);
                    t.translate(-this.dcd.width / 2, -this.dcd.height / 2)
                }
                t.fillRect(this.dcd.x, this.dcd.y, this.dcd.width, this.dcd.height)
            }
            t.drawImage(m, this.dcd.x, this.dcd.y, this.dcd.width, this.dcd.height);
            t.restore()
        } else {
            t.drawImage(this.ldi, 0, 0);
            if (this.eaa != null) {
                kdn.lgy.eys(t, this.dcd.x, this.dcd.y, this.dcd.width, this.dcd.height, this.eaa, 1)
            } else {
                if ((this.height - this.ldi.height) > 0) {
                    t.drawImage(this.ldi, this.dcd.x, this.dcd.y, this.dcd.width, this.ldi.height - this.dcd.y, this.dcd.x, this.dcd.y, this.dcd.width, this.dcd.height)
                }
            }
        }
        t.restore();
        for (var l = 0, o = j.length; l < o; l++) {
            j[l].zwp()
        }
        if (this.vtx && this.saw) {
            if (k) {
                this.vtx.drawImage(this.saw, r, p, s, n, this.x + r, this.y + p, s, n)
            } else {
                this.vtx.drawImage(this.saw, this.x, this.y)
            }
        }
    }
}
oog.prototype = new yos;

function wvz() {
    this.mtv = "verdana";
    this.fjd = "verdana";
    this.lbd = "bold italic";
    this.qff = "white";
    this.sli = "white";
    this.mzs = 24;
    this.nat = 12;
    this.jzf = new bzm();
    this.mxa = [];
    this.ykp = new bzm();
    this.tqi = function (a) {
        wvz.prototype.tqi.call(this, a);
        try {
            this.mzs = a.ihr;
            this.nat = a.oub;
            this.jzf = a.fwc;
            this.mxa = a.xbi;
            this.ykp = a.dfx
        } catch (b) {
            console.error(b)
        }
    };
    this.idh = function (a) {
        wvz.prototype.idh.call(this, a);
        try {
            this.mtv = a.rrj;
            this.fjd = a.urv;
            this.lbd = a.xpj;
            this.qff = a.njy;
            this.sli = a.aqg
        } catch (b) {
            console.error(b)
        }
    };
    this.zwp = function () {
        if (!this.fww()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.fillStyle = this.luk;
        if (this.jcc) {
            a.strokeStyle = this.jcc
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.evz;
        a.font = this.uid + " " + this.msb + "px " + this.rcu;
        a.textBaseline = "alphabetic";
        a.textAlign = "center";
        a.drawImage(this.ldi, 0, 0);
        for (var c in this.bxr) {
            this.hpn(this.bxr[c], this.ctb[c], this.msb, this.rcu)
        }
        if (kdn.uay != null) {
            this.caj(0, this.mxa[0]);
            this.caj(1, this.mxa[1]);
            this.caj(2, this.mxa[2]);
            this.caj(4, this.mxa[3]);
            this.caj(6, this.mxa[4]);
            this.caj(7, this.mxa[5])
        }
        if (kdn.uay != null) {
            kdn.lgy.jnl(a, kdn.uay.vey(kdn.uay.pwf[0][4] * kdn.uay.cpa * kdn.uay.yzf), this.sli, this.ykp.x, this.ykp.y, this.ykp.width, this.ykp.height, this.mtv, this.mzs, this.uid)
        }
        if (kdn.uay.psr && kdn.qwt.value81) {
            var b = kdn.uay.psr;
            a.fillStyle = this.qff;
            if (kdn.qwt.value81.g === true) {
                this.hpn(kdn.uay.owg(kdn.uay.language.mgx) + "|" + kdn.uay.owg(kdn.uay.language.szj), this.jzf, this.nat, this.fjd)
            } else {
                if (kdn.qwt.value81.p === true) {
                    if (sessionStorage.sessionValue1 === kdn.language.TR) {
                        b = b.substring(0, b.length - 1)
                    }
                    this.hpn(kdn.uay.language.psr.replace("XY", b) + "|" + kdn.uay.owg(kdn.uay.language.mgx), this.jzf, this.nat, this.fjd)
                } else {
                    kdn.lgy.jnl(a, kdn.uay.owg(kdn.uay.language.mgx), this.qff, this.jzf.x, this.jzf.y, this.jzf.width, this.jzf.height, this.fjd, this.nat, this.lbd)
                }
            }
        } else {
            kdn.lgy.jnl(a, kdn.uay.owg(kdn.uay.language.mgx), this.qff, this.jzf.x, this.jzf.y, this.jzf.width, this.jzf.height, this.fjd, this.nat, this.lbd)
        }
        a.restore();
        if (this.vtx && this.saw) {
            this.vtx.drawImage(this.saw, this.x, this.y)
        }
    };
    this.caj = function (e, d) {
        var a = this.context2D,
            c = this.mzs,
            f = 0,
            j = 0,
            g = 0;
        a.save();
        a.fillStyle = this.luk;
        if (this.jcc) {
            a.strokeStyle = this.jcc
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.font = this.uid + " " + c + "px " + this.mtv;
        a.textBaseline = "bottom";
        a.textAlign = "center";
        a.lineWidth = this.evz;
        for (var b in kdn.uay.pwf[e]) {
            if (kdn.uay.pwf[e][b] > 0) {
                f++
            }
        }
        g = d.height / f;
        for (var b = kdn.uay.pwf[e].length - 1; b >= 0; b--) {
            if (kdn.uay.pwf[e][b] > 0) {
                if (e != kdn.uay.xqm) {
                    a.fillText(kdn.uay.vey(kdn.uay.pwf[e][b] * kdn.uay.yzf), d.x + d.width / 2, d.y + g * j + c)
                } else {
                    a.fillText(kdn.uay.vey(kdn.uay.pwf[e][b] * kdn.uay.totalBet), d.x + d.width / 2, d.y + g * j + c)
                }
                if (this.jcc != null) {
                    if (e != kdn.uay.xqm) {
                        a.strokeText(kdn.uay.vey(kdn.uay.pwf[e][b] * kdn.uay.yzf), d.x + d.width / 2, d.y + g * j + c)
                    } else {
                        a.strokeText(kdn.uay.vey(kdn.uay.pwf[e][b] * kdn.uay.totalBet), d.x + d.width / 2, d.y + g * j + c)
                    }
                }
                j++
            }
        }
        a.restore()
    }
}
wvz.prototype = new ykt;

function mfp() {
    this.yfk = "HotTwenty";
    this.fug = "Hot Twenty";
    this.dlr = kdn.qwt.value30 + "/hottwenty/images/";
    this.hif = kdn.qwt.value30 + "/hottwenty/sounds/";
    this.ywe = 8;
    this.afn = null;
    this.imm = null;
    this.lne = null;
    this.adz = null;
    this.vgo = function () {
        this.r1 = [];
        this.r2 = [];
        this.r3 = [];
        this.r4 = [];
        this.r5 = [];
        this.zta = [10, 4, 2, 6, 8, 1, 9, 7, 3, 5, 14, 18, 20, 16, 12, 13, 17, 15, 19, 11];
        this.tiw = 1;
        this.loo = 10;
        this.jvk = 11;
        this.vjj = 20;
        this.lth = 10;
        this.pwf = [
            [0, 0, 40, 400, 1000],
            [0, 0, 20, 80, 400],
            [0, 0, 20, 40, 200],
            [0, 0, 20, 40, 200],
            [0, 0, 10, 20, 100],
            [0, 0, 10, 20, 100],
            [0, 0, 10, 20, 100],
            [0, 0, 5, 20, 500]
        ];
        this.ers = [
            [2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1],
            [3, 3, 3, 3, 3],
            [1, 2, 3, 2, 1],
            [3, 2, 1, 2, 3],
            [1, 1, 2, 3, 3],
            [3, 3, 2, 1, 1],
            [2, 1, 1, 1, 2],
            [2, 3, 3, 3, 2],
            [1, 2, 2, 2, 1],
            [3, 2, 2, 2, 3],
            [2, 3, 2, 1, 2],
            [2, 1, 2, 3, 2],
            [1, 2, 1, 2, 1],
            [3, 2, 3, 2, 3],
            [2, 2, 1, 2, 2],
            [2, 2, 3, 2, 2],
            [1, 3, 1, 3, 1],
            [3, 1, 3, 1, 3],
            [2, 1, 3, 1, 2]
        ];
        gameController=this;
        this.sgc = [3, 3, 3, 3, 3, 3, 3, 3];
        this.xqm = 7;
        this.tfh = 0;
        this.yps = 8;
        this.uel = false;
        this.jwl = true;
        this.ykg = true;
        this.zcz = true;
        this.hjm = true;
        this.ztb = 2;
        this.egf("1_1_63");
        if (kdn.qwt.hot != undefined) {
            if (kdn.qwt.hot.value1) {
                this.lkx = kdn.qwt.hot.value1;
                this.mxc = this.lkx
            }
            if (kdn.qwt.hot.value2) {
                this.lth = kdn.qwt.hot.value2
            }
        }
    };
    this.bcq = function () {
        mfp.prototype.bcq.call(this);
        this.eco[0] = new ymp().cjm(this.eha.zgs("anim0"), this.hhw.fqr.w1, this.hhw.fqr.h1, 21);
        this.eco[1] = new ymp().cjm(this.eha.zgs("anim1"), this.hhw.fqr.w1, this.hhw.fqr.h1, 21);
        this.eco[2] = new ymp().cjm(this.eha.zgs("anim2"), this.hhw.fqr.w1, this.hhw.fqr.h1, 21);
        this.eco[3] = new ymp().cjm(this.eha.zgs("anim3"), this.hhw.fqr.w1, this.hhw.fqr.h1, 21);
        this.eco[4] = new ymp().cjm(this.eha.zgs("anim4"), this.hhw.fqr.w1, this.hhw.fqr.h1, 21);
        this.eco[5] = new ymp().cjm(this.eha.zgs("anim5"), this.hhw.fqr.w1, this.hhw.fqr.h1, 21);
        this.eco[6] = new ymp().cjm(this.eha.zgs("anim6"), this.hhw.fqr.w1, this.hhw.fqr.h1, 21);
        this.eco[7] = new ymp().cjm(this.eha.zgs("anim7"), this.hhw.fqr.w1, this.hhw.fqr.h1, 21)
    };
    this.tuj = function () {
        this.tmf();
        this.spa();
        this.gto();
        this.ceo();
        mfp.prototype.tuj.call(this)
    };
    this.tmf = function () {
        this.afn = new wvz();
        this.afn.cjm(this.hhw.ajq.dka.sde, null, this.ust.context2D, this.eha.zgs("h_paytable"));
        this.afn.parent = this.ust;
        this.afn.tqi(this.hhw.ajq.dka);
        this.afn.idh(this.style.ajq.dka);
        if (!this.bew.gfj("tops")) {
            this.ust.mvd(this.afn)
        }
    };
    this.ceo = function () {
        var a = this.bew.gfj("tops");
        if (a) {
            this.imm = new wvz();
            this.imm.cjm(this.hhw.top.dka.sde, null, a.context2D, this.eha.zgs("h_paytable_top"));
            this.imm.parent = a;
            this.imm.tqi(this.hhw.top.dka);
            this.imm.idh(this.style.ajq.dka);
            a.mvd(this.imm)
        }
    };
    this.spa = function () {
        this.lne = new ykt();
        this.lne.cjm(this.hhw.ajq.win.sde, null, this.ust.context2D, this.eha.zgs("h_winlines"));
        this.lne.parent = this.ust;
        this.lne.bxr[0] = this.language.hpm;
        this.lne.tqi(this.hhw.ajq.win);
        this.lne.idh(this.style.ajq.mwo);
        this.ust.mvd(this.lne)
    };
    this.gto = function () {
        this.adz = new ykt();
        this.adz.cjm(this.hhw.ajq.who.sde, null, this.ust.context2D, this.eha.zgs("h_symbols"));
        this.adz.parent = this.ust;
        this.adz.bxr[0] = this.language.wva;
        this.adz.bxr[1] = this.language.dyw;
        this.adz.tqi(this.hhw.ajq.who);
        this.adz.idh(this.style.ajq.mwo);
        this.ust.mvd(this.adz)
    };
    this.wxe = function () {
        if (this.afn) {
            this.afn.yai(this.hhw.ajq.dka.sde);
            this.afn.tqi(this.hhw.ajq.dka)
        }
        if (this.lne) {
            this.lne.yai(this.hhw.ajq.win.sde);
            this.lne.tqi(this.hhw.ajq.win)
        }
        if (this.adz) {
            this.adz.yai(this.hhw.ajq.who.sde);
            this.adz.tqi(this.hhw.ajq.who)
        }
    };
    this.nmr = function () {
        if (this.lne != null) {
            this.lne.bxr[0] = this.language.hpm
        }
        if (this.adz != null) {
            this.adz.bxr[0] = this.language.wva;
            this.adz.bxr[1] = this.language.dyw
        }
    };
    this.zsa = function () {
        var a = this.dlr + this.hhw.type + "/";
        this.eha.vpt("h_paytable_top", a + "wthelptop.jpg");
        if (this.xhi() === true) {
            this.eha.vpt("m_back", a + "mobile_main.jpg");
            this.eha.vpt("m_win", a + "mobile_winPanel.png");
            this.eha.vpt("g_back", a + "mobile_gamble.jpg");
            this.eha.vpt("h_paytable", a + "mobile_wthelp.jpg");
            this.eha.vpt("h_winlines", a + "mobile_wlhelp.jpg");
            this.eha.vpt("h_symbols", a + "mobile_symbol_help.jpg");
            this.eha.gty(a, "mobile_panels.json")
        } else {
            this.eha.vpt("m_back", a + "main.png");
            this.eha.vpt("m_win", a + "winPanel.png");
            this.eha.vpt("g_back", a + "gamble.jpg");
            this.eha.vpt("h_paytable", a + "wthelp.jpg");
            this.eha.vpt("h_winlines", a + "wlhelp.jpg");
            this.eha.vpt("h_symbols", a + "symbol_help.jpg");
            if (this.vks === true) {
                this.eha.vpt("m_g_back", a + "mobile_gamble.jpg");
                this.eha.vpt("m_m_back", a + "mobile_main.jpg");
                this.eha.vpt("m_m_win", a + "mobile_winPanel.png")
            }
        }
    };
    this.klf = function (b) {
        var f = 0,
            a = -1,
            e = 0;
        this.kje = 0;
        this.aek = 0;
        this.aek = b[e];
        if (this.aek == this.xqm) {
            return 0
        }
        while (this.aek == this.tfh && e < 4) {
            if (a < 0) {
                a = e
            }
            e++;
            this.kje += 1;
            f++;
            this.aek = b[e]
        }
        if (this.aek != this.xqm) {
            for (var d = e; d < 5; d++) {
                if (this.aek == b[d] || b[d] == this.tfh) {
                    if (a < 0) {
                        a = e
                    }
                    this.kje += 1
                } else {
                    break
                }
            }
        } else {
            if (f > 0) {
                this.aek = this.tfh
            }
        }
        if (f > 0) {
            if (this.pwf[this.tfh][f - 1] > this.pwf[this.aek][this.kje - 1]) {
                this.aek = this.tfh;
                return f
            }
        }
        if (this.kje == 0) {
            return 0
        }
        var c = this.pwf[this.aek][this.kje - 1];
        if (c > 0) {
            return this.kje
        }
        return 0
    };
    this.fxk = function (b) {
        var a = Math.round(this.yzf * 2);
        if (b <= a) {
            if (a > 10) {
                a = Math.round(a / 10)
            } else {
                a = 1
            }
        }
        if (a < 1) {
            a = 1
        }
        return a
    };
    this.zab = function (a) {
        if (a == kdn.language.EN || a == kdn.language.US) {
            return new igd()
        } else {
            if (a == kdn.language.ES || a == kdn.language.CO || a == kdn.language.MX || a == kdn.language.CL || a == kdn.language.VE) {
                return new avh()
            } else {
                if (a == kdn.language.DE || a == kdn.language.AT) {
                    return new vhg()
                } else {
                    if (a == kdn.language.PT || a == kdn.language.BR) {
                        return new jwj()
                    } else {
                        if (a == kdn.language.RU) {
                            return new dta()
                        } else {
                            if (a == kdn.language.EE) {
                                return new rhr()
                            } else {
                                if (a == kdn.language.TR) {
                                    return new clm()
                                } else {
                                    if (a == kdn.language.CZ) {
                                        return new ssj()
                                    } else {
                                        if (a == kdn.language.GR) {
                                            return new dgd()
                                        } else {
                                            if (a == kdn.language.BG) {
                                                return new jpo()
                                            } else {
                                                if (a == kdn.language.GE) {
                                                    return new rpm()
                                                } else {
                                                    if (a == kdn.language.HU) {
                                                        return new ury()
                                                    } else {
                                                        if (a == kdn.language.RO) {
                                                            return new ayy()
                                                        } else {
                                                            if (a == kdn.language.FR) {
                                                                return new loz()
                                                            } else {
                                                                if (a == kdn.language.HR) {
                                                                    return new qmw()
                                                                } else {
                                                                    if (a == kdn.language.IT) {
                                                                        return new ifx()
                                                                    } else {
                                                                        if (a == kdn.language.SE) {
                                                                            return new mkh()
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
    this.ktr = function (a) {
        this.evj = a;
        if (a == kdn.hhw.ooj) {
            return new iav()
        } else {
            if (a == kdn.hhw.jga) {
                return new occ()
            } else {
                if (a == kdn.hhw.ejz) {
                    return new fwb()
                } else {
                    if (a == kdn.hhw.mgr) {
                        return new ndu()
                    } else {
                        if (a == kdn.hhw.ktq) {
                            return new mkg()
                        } else {
                            if (a == kdn.hhw.ntj) {
                                return new hkq()
                            } else {
                                if (a == kdn.hhw.sot) {
                                    return new vni()
                                } else {
                                    if (a == kdn.hhw.wfg) {
                                        return new kvn()
                                    } else {
                                        if (a == kdn.hhw.rxl) {
                                            return new raf()
                                        } else {
                                            if (a == kdn.hhw.ssg) {
                                                return new xrp()
                                            } else {
                                                if (a == kdn.hhw.yjt) {
                                                    return new sxi()
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
    this.xba = function () {
        this.style = new zul()
    }
}
mfp.prototype = new hwa;

function fmq() {
    kdn.cuq = -1;
    kdn.uay = new mfp();
    kdn.uay.cjm({
        hhw: kdn.qwt.value14
    });
    window.focus()
}

function fso() {
    if (kdn.uay != null) {
        if (kdn.cuq >= 0) {
            clearTimeout(kdn.cuq)
        }
        kdn.cuq = setTimeout(kdn.uay.apu, 200)
    }
}

function lcs() {
    if (kdn.uay != null) {
        if (kdn.cuq >= 0) {
            clearTimeout(kdn.cuq)
        }
        kdn.cuq = setTimeout(kdn.uay.pbs, 200)
    }
}
if (kdn.lgy.jmt()) {
    window.onorientationchange = lcs;
    window.onresize = lcs
} else {
    window.onresize = fso
}
if (kdn.qwt.value9) {
    window.onload = fmq
} else {
    fmq()
};
