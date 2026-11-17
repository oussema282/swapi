
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"MerryFruitsAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
		gameWS.onmessage=function(k){
		
		var tmpMess=k.data.split("#");
		
			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.kxp.myd!=undefined){
			
			if(gameController.dzc!=parseInt(tmpMess[1])){
				
			gameController.dzc=parseInt(tmpMess[1]);	
			gameController.kxp.myd.mpx("creditd", "#pjk", [gameController.ifb(tmpMess[1]), true]);	
				
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////
var fakeJack = Math.floor((Math.random()+1)  * 1115278923);
var fackStep;

function oim() {
    this.uck = "Info";
    this.ysw = "DEPOSIT";
    this.audio = "AUDIO";
    this.ypj = "TIP";
    this.kjr = "TURBO";
    this.fdd = "STATISTIC";
    this.zmo = "HISTORY";
    this.doc = "SHORTCUTS";
    this.hwg = "HELP";
    this.duv = "PAYTABLE";
    this.language = "LANGUAGE";
    this.ikd = ">>";
    this.zes = "<<";
    this.apm = "Fullscreen is not supported!"
}

function vxq() {
    this.rkb = "MINIMUM BET IS";
    this.rzu = "MAX BET";
    this.llw = "MIN.BET";
    this.rzt = "MAX.BET";
    this.wrg = "BET";
    this.start = "START";
    this.hwg = "HELP";
    this.duv = "PAYTABLE";
    this.hfi = "MENU";
    this.fsf = "MORE|GAMES";
    this.rmq = "STOP";
    this.dzc = "CREDIT";
    this.xaq = "GAME OVER";
    this.bph = "WINNER!";
    this.gzw = "GOOD LUCK!";
    this.win = "WIN";
    this.wzi = "LAST WIN";
    this.ffo = "COLLECT";
    this.sbp = "COLLECT";
    this.jzz = "GAMBLE";
    this.lyb = "AUTO|START";
    this.wda = "HALF|GAMBLE";
    this.xhl = "EXIT";
    this.zxs = "START GAME";
    this.fik = "CHOOSE BET";
    this.lam = "HALF";
    this.ret = "RETURN|TO GAME";
    this.mga = "Total Win";
    this.hox = "Warning";
    this.evt = "TOTAL";
    this.msx = "PLEASE WAIT ...";
    this.zbs = "More Games";
    this.kjr = "SPEED";
    this.zsd = "Malfunction voids all pays and plays.";
    this.hwj = "C O N T I N U E";
    this.qag = "AUTOSTART";
    this.abz = "PAYTABLE";
    this.dkg = "GAMBLE";
    this.left = "LEFT";
    this.dva = "RIGHT";
    this.ok = "OK";
    this.bhk = "CANCEL";
    this.tww = "Gamble";
    this.kno = "Half";
    this.lmb = "GAME RULES";
    this.xqg = "GAME RULES";
    this.wcx = "Bonus!";
    this.bbb = "BONUS";
    this.xif = "PRESS ANY KEY TO CONTINUE";
    this.axc = "NOT ENOUGH CREDIT!";
    this.bky = "wins";
    this.svk = "V A L U E";
    this.of = "OF";
    this.vwd = "TOUCH THE SCREEN TO CONTINUE";
    this.acn = "LOADING ...";
    this.wju = "LOADING HISTORY ...";
    this.jtk = "Communication Error";
    this.obl = "You have reached one of the limits!";
    this.nzk = "You have reached the maximum amount of free games!";
    this.bvf = "Game will be closed";
    this.wsr = "Game will be restarted";
    this.ino = "WON";
    this.error = "ERROR";
    this.fqu = "FREEPLAY";
    this.zqq = "AUTO";
    this.tka = "GAME ID";
    this.uum = "Playing Time";
    this.aco = "last";
    this.vre = "games";
    this.ysw = "DEPOSIT";
    this.audio = "AUDIO";
    this.hyv = "MUSIC";
    this.efn = "FULLSCREEN";
    this.csj = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.nxp = "Do not show again";
    this.dnu = "Sounds can not be loaded!";
    this.tju = "Resources missing!";
    this.cee = "Play without sound?";
    this.jva = "SETTINGS";
    this.fzs = "Please turn your device!";
    this.uck = "INFO";
    this.eai = "Please disable PRIVATE MODE in your browser to play the game.";
    this.mka = "This game is optimized for Google Chrome.";
    this.ulm = "Please use the current version of";
    this.azk = "Unfortunately this browser is not fully supported.";
    this.nif = "This game can not be started in freeplay mode!";
    this.epz = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.ldp = "Adjust the game interface to your needs!";
    this.kug = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.ybi = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.lmu = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.fdd = "Statistic";
    this.rgq = "Total Games";
    this.hcy = "Total Bets";
    this.wnd = "Total Wins";
    this.dfz = "Total Play Time";
    this.qst = "I have read this message";
    this.rkm = "EXIT|GAME";
    this.zmo = "History";
    this.ltj = "No games played.";
    this.state = "STATE";
    this.pox = "Main Game";
    this.yeg = "Auto Collected";
    this.mio = "Collected";
    this.lim = "Bonusspins";
    this.gkb = "Respin";
    this.vce = "Bonus";
    this.ktv = "First Deal";
    this.tgt = "Second Deal";
    this.ore = "Third Deal";
    this.vsb = "AUTOSTART SETTINGS";
    this.iyl = "Amount of games:";
    this.vpw = "Stop autostart";
    this.okv = "Credit lower than:";
    this.nit = "Credit higher than:";
    this.whf = "Win higher than:";
    this.ldr = "The autostart will be stopped at the beginning of the bonus.";
    this.gir = "Share on Facebook";
    this.zmf = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.nup = "Reality Check";
    this.xjg = "You have requested a Reality Check.";
    this.ssv = "Press HISTORY to view your game history.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
vxq.prototype = new oim;

function myx() {
    this.rkb = "МИНИМАЛЬНАЯ СТАВКА -";
    this.rzu = "МАКС.|СТАВКА";
    this.llw = "МИН.СТAВКА";
    this.rzt = "МАКС.СТAВКА";
    this.wrg = "СТАВКА";
    this.start = "СТАРТ";
    this.hwg = "ПОМОЩЬ";
    this.duv = "ТАБЛИЦА ВЫПЛАТ";
    this.hfi = "МЕНЮ";
    this.fsf = "ДРУГИЕ|ИГРЫ";
    this.rmq = "СТОП";
    this.dzc = "КРЕДИТ";
    this.xaq = "КОНЕЦ ИГРЫ";
    this.bph = "ПОБЕДИТЕЛЬ!";
    this.gzw = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.wzi = "ПОСЛЕД. ВЫИГРЫШ";
    this.bky = "выйгрыши";
    this.ffo = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.sbp = "ЗАБРАТЬ ВЫИГРЫШ";
    this.jzz = "ИГРА|НА|РИСК";
    this.lyb = "АВТО|ИГРА";
    this.wda = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.xhl = "ВЫХОД";
    this.zxs = "НАЖМИТЕ СТАРТ";
    this.fik = "ВЫБЕРИТЕ СТАВКУ";
    this.lam = "ВЗЯТЬ|1/2";
    this.xif = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.vwd = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.ika = "Множитель для Бонуса";
    this.xow = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.mga = "ОБЩИЙ ВЫИГРЫШ";
    this.acn = "Загрузка ...";
    this.wju = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.axc = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.obl = "Достигнут один из лимитов!";
    this.hox = "Внимание";
    this.jtk = "ошибка обмена данных";
    this.nzk = "Вы получили максимальное количество свободных игр!";
    this.bvf = "Игра заканчивается";
    this.wsr = "Игра начинается заново";
    this.wcx = "Бонус!";
    this.bbb = "БОНУС";
    this.ino = "ВЫИГРЫШ";
    this.evt = "ВСЕГО";
    this.msx = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.fqu = "FREEPLAY";
    this.zbs = "ВЫБОР ИГРЫ";
    this.tka = "GAME ID";
    this.uum = "Playing Time";
    this.aco = "последняя";
    this.vre = "игры";
    this.ysw = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.hyv = "МУЗЫКА";
    this.kjr = "СКОРОСТЬ";
    this.efn = "ПОЛНОЭКРАННЫЙ";
    this.csj = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.zsd = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.hwj = "П Р О Д О Л Ж И Т Ь";
    this.nxp = "Больше не показывать";
    this.qag = "АВТОИГРА";
    this.abz = "ТАБЛИЦА ВЫПЛАТ";
    this.dkg = "ИГРА НА РИСК";
    this.dnu = "Звук не загружается!";
    this.tju = "Ресурсы отсутствуют!";
    this.cee = "Играть без звука?";
    this.jva = "НАСТРОЙКА";
    this.fzs = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.dva = "ПРАВО";
    this.zqq = "АВТО";
    this.svk = "V A L U E";
    this.uck = "ИНФОРМАЦИЯ";
    this.eai = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.mka = "Настоящая игра оптимизирована для Google Chrome.";
    this.ulm = "Используйте, пожалуйста, актуальную версию";
    this.azk = "К сожалению нет полной поддержки браузера.";
    this.nif = "Запуск этой игры в режиме свободных игр невозможен!";
    this.epz = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.ldp = "Приспособь интерфейс к своим потребностям!";
    this.zmf = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.nup = "Проверку реальности";
    this.xjg = "Вы запросили проверку реальности.";
    this.ssv = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.lmb = "ПРАВИЛА ИГРЫ";
    this.xqg = "ПРАВИЛА ИГРЫ";
    this.kug = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.ybi = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.lmu = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.fdd = "Статус";
    this.rgq = "количество игр";
    this.hcy = "вся ставка";
    this.wnd = "общий выигрыш";
    this.dfz = "общее время игры";
    this.qst = "Я сообщение прочитал.";
    this.rkm = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.zmo = "История";
    this.ltj = "нет истории.";
    this.state = "STATE";
    this.pox = "Main Game";
    this.yeg = "Auto Collected";
    this.mio = "Collected";
    this.lim = "Bonusspins";
    this.tww = "Gamble";
    this.kno = "Half";
    this.gkb = "Respin";
    this.vce = "Bonus";
    this.ktv = "First Deal";
    this.tgt = "Second Deal";
    this.ore = "Third Deal";
    this.bhk = "ИЗМЕНИТЬ";
    this.vsb = "НАСТРОЙКА АВТОСТАРТА";
    this.iyl = "Количество игр:";
    this.vpw = "Автостарт остановить";
    this.okv = "Кредит ниже, чем:";
    this.nit = "Кредит выше, чем:";
    this.whf = "Выигрыш выше, чем:";
    this.ldr = "Автостарт прерывается, если начинается бонусная игра.";
    this.gir = "Поделись в фейсбук";
    this.jxv = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
myx.prototype = new oim;

function oeb() {
    this.rkb = "APUESTA MINIMA ES";
    this.rzu = "APUESTA|MAXIMA";
    this.llw = "APUESTA MIN.";
    this.rzt = "APUESTA MAX.";
    this.wrg = "APUESTA";
    this.start = "START";
    this.hwg = "AYUDA";
    this.duv = "PLAN DE|GANANCIAS";
    this.hfi = "MENU";
    this.fsf = "MAS|JUEGOS";
    this.rmq = "PARADA";
    this.dzc = "CREDITOS";
    this.xaq = "FIN DEL JUEGO";
    this.bph = "¡GANADOR!";
    this.gzw = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.wzi = "ULTIMOS PREMIO";
    this.bky = "gana";
    this.ffo = "COBRAR";
    this.sbp = "COBRAR";
    this.jzz = "RIESGO";
    this.lyb = "AUTO|START";
    this.wda = "MEDIA|APUESTA";
    this.of = "DE";
    this.xhl = "SALIR";
    this.zxs = "¡PULSE START!";
    this.fik = "ELIJA SU APUESTA";
    this.lam = "MITAD";
    this.xif = "PULSE UNA TECLA PARA CONTINUAR";
    this.vwd = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.mga = "Premio total";
    this.acn = "CARGANDO ...";
    this.wju = "CARGANDO HISTORIAL ...";
    this.axc = "No hay bastante CREDITO";
    this.obl = "¡Ha alcanzado uno de los limites!";
    this.hox = "Advertencia";
    this.jtk = "Error de comunicación";
    this.nzk = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.bvf = "El juego se cerrará";
    this.wsr = "El juego se reiniciará";
    this.wcx = "¡BONUS!";
    this.bbb = "BONUS";
    this.ino = "GANADO";
    this.evt = "TOTAL";
    this.sgl = "TURBO SI";
    this.pic = "TURBO NO";
    this.msx = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.fqu = "FREEPLAY";
    this.zbs = "MAS JUEGOS";
    this.tka = "ID DE JUEGO";
    this.uum = "Playing Time";
    this.aco = "ultimos";
    this.vre = "juegos";
    this.ysw = "DEPÓSITO";
    this.audio = "AUDIO";
    this.hyv = "MÚSICA";
    this.kjr = "VELOCIDAD";
    this.efn = "PANTALLA COMPLETA";
    this.csj = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.zsd = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.hwj = "A D E L A N T E";
    this.nxp = "No mostrar de nuevo";
    this.qag = "AUTOSTART";
    this.abz = "PLAN DE GANANCIAS";
    this.dkg = "RIESGO";
    this.dnu = "No se pueden cargar los sonidos.";
    this.tju = "Faltan recursos.";
    this.cee = "¿Jugar sin sonido?";
    this.jva = "AJUSTES";
    this.svk = "V A L U E";
    this.fzs = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.dva = "DERECHA";
    this.zqq = "AUTOMÁTICO";
    this.uck = "INFORMACIÓN";
    this.eai = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.mka = "Este juego está optimizado para Google Chrome.";
    this.ulm = "Use la versión actual de";
    this.azk = "Desafortunadamente, este explorador no es compatible.";
    this.nif = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.epz = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.ldp = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.zmf = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.nup = "Reality Check";
    this.xjg = "Has solicitado un Reality Check.";
    this.ssv = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.lmb = "REGLAS DEL JUEGO";
    this.xqg = "REGLAS|DEL JUEGO";
    this.kug = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.ybi = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.lmu = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.fdd = "ESTADO";
    this.rgq = "Número de juegos";
    this.hcy = "Apuesta total";
    this.wnd = "Ganancia total";
    this.dfz = "Tiempo total de juego";
    this.qst = "He leído el mensaje.";
    this.rkm = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.zmo = "HISTORIAL";
    this.ltj = "Aún no hay juegos.";
    this.state = "Estado";
    this.pox = "Juego principal";
    this.yeg = "Ganancia automática";
    this.mio = "Ganancia";
    this.lim = "BONUSSPINS";
    this.tww = "Apuesta";
    this.kno = "Mitad";
    this.gkb = "Respin";
    this.vce = "Bonus";
    this.ktv = "Primera mano";
    this.tgt = "Segunda mano";
    this.ore = "Tercera mano";
    this.bhk = "CANCELAR";
    this.vsb = "CONFIGURACIONES DE AUTOSTART";
    this.iyl = "Cantidad de juegos:";
    this.vpw = "Detener Autostart";
    this.okv = "Crédito menor que:";
    this.nit = "Crédito mayor que:";
    this.whf = "Ganancia mayor que:";
    this.ldr = "El Autostart se detendrá al principio del bonus.";
    this.gir = "Compartir en Facebook";
    this.jxv = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
oeb.prototype = new oim;

function nxk() {
    this.rkb = "MINIMALER EINSATZ IST";
    this.rzu = "MAX. EINSATZ";
    this.llw = "MIN. EINSATZ";
    this.rzt = "MAX. EINSATZ";
    this.wrg = "EINSATZ";
    this.start = "START";
    this.hwg = "HILFE";
    this.duv = "GEWINNPLAN";
    this.hfi = "MENÜ";
    this.fsf = "MEHR|SPIELE";
    this.dzc = "KREDIT";
    this.xaq = "SPIEL ENDE";
    this.bph = "GEWINNER!";
    this.gzw = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.wzi = "LETZTER GEWINN";
    this.bky = "gewinnt";
    this.ffo = "NEHMEN";
    this.sbp = "NEHMEN";
    this.jzz = "RISIKO";
    this.lyb = "AUTO|START";
    this.wda = "HALF|GAMBLE";
    this.rmq = "STOP";
    this.of = "VON";
    this.xhl = "EXIT";
    this.zxs = "START DRÜCKEN";
    this.fik = "EINSATZ WÄHLEN";
    this.lam = "TEILEN";
    this.xif = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.vwd = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.mga = "Gesamt Gewinn";
    this.acn = "LÄDT ...";
    this.wju = "LÄDT HISTORIE ...";
    this.axc = "NICHT GENUG KREDIT!";
    this.hox = "Achtung";
    this.jtk = "Kommunikationsfehler";
    this.obl = "Sie haben eines der Limits erreicht!";
    this.nzk = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.bvf = "Das Spiel wird beendet";
    this.wsr = "Das Spiel wird neu gestartet";
    this.wcx = "Bonus!";
    this.bbb = "BONUS";
    this.ino = "GEWONNEN";
    this.evt = "TOTAL";
    this.msx = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.fqu = "FREEPLAY";
    this.zbs = "MEHR|SPIELE";
    this.tka = "SPIEL ID";
    this.uum = "Spielzeit";
    this.aco = "Letzten";
    this.vre = "Spiele";
    this.ysw = "GUTHABEN";
    this.audio = "AUDIO";
    this.hyv = "MUSIK";
    this.kjr = "SPEED";
    this.efn = "VOLLBILD";
    this.csj = "VOLLBILD";
    this.language = "SPRACHE";
    this.zsd = "Bei Gerätestörung keine Haftung.";
    this.hwj = "W E I T E R";
    this.nxp = "Nicht noch einmal anzeigen";
    this.qag = "AUTOSTART";
    this.dkg = "RISIKO";
    this.abz = "GEWINNPLAN";
    this.dnu = "Sounds können nicht geladen werden!";
    this.tju = "Ressourcen fehlen!";
    this.cee = "Ohne Ton spielen?";
    this.jva = "EINSTELL.";
    this.fzs = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.dva = "RECHTS";
    this.zqq = "AUTOM.";
    this.svk = "V A L U E";
    this.uck = "INFO";
    this.eai = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.mka = "Dieses Spiel ist optimiert für Google Chrome.";
    this.ulm = "Bitte benutzen sie die aktuelle Version von";
    this.azk = "Leider wird dieser Browser nicht unterstützt.";
    this.nif = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.epz = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.ldp = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.zmf = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.nup = "Reality Check";
    this.xjg = "Du hast einen Reality Check angefordert.";
    this.ssv = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.qqv = "Spielpause";
    this.ett = "Spiellimits";
    this.nvs = "Selbsttest";
    this.lmb = "SPIELREGELN";
    this.xqg = "SPIELREGELN";
    this.kug = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.ybi = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.lmu = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.fdd = "Statistik";
    this.rgq = "Anzahl der Spiele";
    this.hcy = "Gesamteinsatz";
    this.wnd = "Gesamtgewinn";
    this.dfz = "Gesamtspielzeit";
    this.qst = "Ich habe die Nachricht gelesen";
    this.rkm = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.zmo = "Historie";
    this.ltj = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.pox = "Hauptspiel";
    this.yeg = "Auto. Nehmen";
    this.mio = "Genommen";
    this.lim = "Bonusspins";
    this.tww = "Risiko";
    this.kno = "Halb";
    this.gkb = "Respin";
    this.vce = "Bonus";
    this.ktv = "Erster Deal";
    this.tgt = "Zweiter Deal";
    this.ore = "Dritter Deal";
    this.bhk = "ABBRUCH";
    this.vsb = "AUTOSTART EINSTELLUNGEN";
    this.iyl = "Anzahl der Spiele: ";
    this.vpw = "Autostart anhalten";
    this.okv = "Kredit niedriger als:";
    this.nit = "Kredit höher als:";
    this.whf = "Gewinn höher als:";
    this.ldr = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.gir = "Auf Facebook teilen";
    this.jxv = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
nxk.prototype = new oim;

function ozy() {
    this.rkb = "MINIMUM BANKO";
    this.rzu = "MAKS. BANKO";
    this.llw = "MIN. BANKO";
    this.rzt = "MAKS. BANKO";
    this.wrg = "BANKO";
    this.start = "BAŞLAT";
    this.hwg = "YARDIM";
    this.duv = "Kazanç planı";
    this.hfi = "MENÜ";
    this.fsf = "DAHA ÇOK|OYUN";
    this.rmq = "DUR";
    this.dzc = "KREDI";
    this.xaq = "OYUN BİTTİ";
    this.bph = "KAZANDINIZ!";
    this.gzw = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.wzi = "SON KAZANÇ";
    this.bky = "kazanır";
    this.ffo = "ALMAK";
    this.sbp = "ALMAK";
    this.jzz = "RIZIKO";
    this.lyb = "OTOMATİK|BAŞLATMA";
    this.wda = "YARI|RIZIKO";
    this.of = "VEREN";
    this.xhl = "ÇIKIŞ";
    this.zxs = "BAŞLAT TUŞUNA BASINIZ";
    this.fik = "BANKO SEÇİNİZ";
    this.lam = "ALMAK|1/2";
    this.xif = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.vwd = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.mga = "Toplam kazanç";
    this.acn = "YÜKLÜYOR ...";
    this.wju = "GEÇMIŞI YÜKLÜYOR ...";
    this.axc = "YETERSİZ KREDİ.";
    this.obl = "Limitlerin birine ulaştınız!";
    this.hox = "Dikkat";
    this.jtk = "İletişim hatası";
    this.nzk = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.bvf = "Oyun sonlandırılıyor";
    this.wsr = "Oyun yeniden başlatılıyor";
    this.wcx = "Bedava oyun primi!";
    this.bbb = "PRİM";
    this.ino = "KAZANDINIZ";
    this.evt = "TOPLAM";
    this.msx = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.fqu = "FREEPLAY";
    this.zbs = "DAHA ÇOK OYUN";
    this.tka = "OYUN ID";
    this.uum = "OYUN SÜRESİ";
    this.aco = "Son";
    this.vre = "oyun";
    this.ysw = "BAKIYE";
    this.audio = "AUDIO";
    this.hyv = "MÜZIK";
    this.kjr = "HıZ";
    this.efn = "TAM EKRAN";
    this.csj = "TAM EKRAN";
    this.language = "LISAN";
    this.zsd = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.hwj = "İ L E R I";
    this.nxp = "Tekrar gösterme";
    this.qag = "OTOMATİK|BAŞLATMA";
    this.dkg = "RIZIKO";
    this.abz = "Kazanç planı";
    this.dnu = "Sesler yüklenemiyorlar!";
    this.tju = "Kaynaklar eksik!";
    this.cee = "Sessiz oynayacak mısınız?";
    this.jva = "AYARLAR";
    this.fzs = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.dva = "SAĞ";
    this.zqq = "OTOMATIK";
    this.svk = "V A L U E";
    this.uck = "BILGI";
    this.eai = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.mka = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.ulm = "'nin güncel versiyonunu kullanın";
    this.azk = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.nif = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.epz = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.ldp = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.zmf = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.nup = "Reality Check";
    this.xjg = "Reality Check talebinde bulundun.";
    this.ssv = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.lmb = "OYUNUN KURALLARı";
    this.xqg = "OYUNUN|KURALLARı";
    this.kug = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.ybi = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.lmu = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.fdd = "İstatistik";
    this.rgq = "Toplam oyunlar";
    this.hcy = "Toplam bankolar";
    this.wnd = "Toplam kazançlar";
    this.dfz = "Toplam oyun süresi";
    this.qst = "Bu mesajı okudum.";
    this.rkm = "OYUNU|KAPAT";
    this.ok = "OK";
    this.zmo = "GEÇMİŞ";
    this.ltj = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.pox = "Ana oyun";
    this.yeg = "Otomatik olarak kazandınız";
    this.mio = "Toplandı";
    this.lim = "Prim oyunlar";
    this.tww = "Riziko";
    this.kno = "Yarım";
    this.gkb = "Respin";
    this.vce = "Prim";
    this.ktv = "İlk anlaşma";
    this.tgt = "İkinci anlaşma";
    this.ore = "Üçüncü anlaşma";
    this.bhk = "İPTAL";
    this.vsb = "OTOMATIK BAŞLAT AYARLARı";
    this.iyl = "Oyun sayısı:";
    this.vpw = "Otomatik başlatmayı durdur";
    this.okv = "Kredi bundan düşüktür:";
    this.nit = "Kredi bundan yüksektir:";
    this.whf = "Kazanç bundan yüksektir:";
    this.ldr = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.gir = "Facebook'ta paylaş";
    this.jxv = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
ozy.prototype = new oim;

function mmv() {
    this.rkb = "MINIMÁLNÍ SÁZKA JE";
    this.rzu = "MAX. SÁZKA";
    this.llw = "MIN. SÁZKA";
    this.rzt = "MAX. SÁZKA";
    this.wrg = "SÁZKA";
    this.start = "START";
    this.hwg = "POMOC";
    this.duv = "VÝHERNÍ PLÁN";
    this.hfi = "MENU";
    this.fsf = "DALŠÍ|HRY";
    this.rmq = "STOP";
    this.dzc = "KREDIT";
    this.xaq = "KONEC HRY";
    this.bph = "VÍTEZ!";
    this.gzw = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.wzi = "POSL. VÝHRA";
    this.bky = "vyhrává";
    this.ffo = "VEZMI";
    this.sbp = "VEZMI";
    this.jzz = "HRA";
    this.lyb = "AUTO|START";
    this.wda = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.xhl = "VÝSTUP";
    this.zxs = "START HRY";
    this.fik = "VYBRAT SÁZKU";
    this.lam = "POLOVINA";
    this.xif = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.vwd = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.mga = "Celková výhra";
    this.acn = "NAHRÁVÁM ...";
    this.wju = "NAHRÁVÁM HISTORII ...";
    this.axc = "Nedostatecný kredit.";
    this.obl = "Dosáhli jste jednoho z limitů!";
    this.hox = "Varování";
    this.jtk = "Chyba komunikace";
    this.nzk = "Dosáhli jste maximálního počtu her zdarma!";
    this.bvf = "Hra se zavře";
    this.wsr = "Hra se restartuje";
    this.wcx = "Bonus!";
    this.bbb = "BONUS";
    this.ino = "VYHRÁL";
    this.evt = "CELKOVÁ";
    this.msx = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.fqu = "FREEPLAY";
    this.zbs = "DALŠÍ HRY";
    this.tka = "ID HRY";
    this.uum = "HRACÍ DOBA";
    this.aco = "Poslední";
    this.vre = "hry";
    this.ysw = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.hyv = "MUZIKA";
    this.kjr = "RYCHLOST";
    this.efn = "FULLSCREEN";
    this.csj = "FULLSCREEN";
    this.language = "ŘEČ";
    this.zsd = "Při poruše jsou všechny hry a výhry neplatné.";
    this.hwj = "P O K R A Č U J";
    this.nxp = "Nezobrazujte znovu";
    this.qag = "AUTOSTART";
    this.dkg = "HRA";
    this.abz = "VÝHERNÍ PLÁN";
    this.dnu = "Zvuk nelze nahrát!";
    this.tju = "Chybí zdroje!";
    this.cee = "Hrát bez zvuku?";
    this.jva = "NASTAVENÍ";
    this.svk = "V A L U E";
    this.fzs = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.dva = "VPRAVO";
    this.zqq = "AUTO";
    this.uck = "INFORMACE";
    this.eai = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.mka = "Tato hra je optimalizovaná pro Google Chrome.";
    this.ulm = "Použijte aktuální verzi";
    this.azk = "Tento prohlížeč není bohužel plně podporován.";
    this.nif = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.epz = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.ldp = "Nastavte rozhraní hry svým potřebám!";
    this.zmf = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.nup = "Reality Check";
    this.xjg = "Požádali jste o kontrolu reality.";
    this.ssv = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.lmb = "PRAVIDLA HRY";
    this.xqg = "PRAVIDLA HRY";
    this.kug = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.ybi = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.lmu = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.fdd = "Statistika";
    this.rgq = "Celkem hry";
    this.hcy = "Celkem sázky";
    this.wnd = "Celkem výhry";
    this.dfz = "Celková hrací doba";
    this.qst = "Zprávu jsem četl/a.";
    this.rkm = "UKONČIT|HRU";
    this.ok = "OK";
    this.zmo = "HISTORIE";
    this.ltj = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.pox = "Hlavní hra";
    this.yeg = "Automaticky vybráno";
    this.mio = "Vybráno";
    this.lim = "Bonusspins";
    this.tww = "Hra";
    this.kno = "Polovina";
    this.gkb = "Respin";
    this.vce = "Bonus";
    this.ktv = "První vyložení";
    this.tgt = "Druhé vyložení";
    this.ore = "Třetí vyložení";
    this.bhk = "ZRUŠIT";
    this.vsb = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.iyl = "Množství her:";
    this.vpw = "Zastavit automatický start";
    this.okv = "Kredit nižší než:";
    this.nit = "Kredit vyšší než:";
    this.whf = "Výhra vyšší než:";
    this.ldr = "Automatický start se zastaví na začátku bonusu.";
    this.gir = "Sdílet na Facebooku";
    this.jxv = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
mmv.prototype = new oim;

function tvt() {
    this.rkb = "MIINIMUMPANUS ON";
    this.rzu = "MAX PANUS";
    this.llw = "MIN PANUS";
    this.rzt = "MAX PANUS";
    this.wrg = "PANUS";
    this.start = "START";
    this.hwg = "ABI";
    this.duv = "VÕIDU TABEL";
    this.hfi = "MENÜÜ";
    this.fsf = "VALI|MÄNG";
    this.rmq = "STOPP";
    this.dzc = "KREDIIT";
    this.xaq = "MÄNG ON LÕPPENUD!";
    this.bph = "OLED VÕITNUD!";
    this.gzw = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.wzi = "EELMINE VÕIT";
    this.ffo = "VÕTA|VÕIT";
    this.sbp = "VÕTA VÕIT";
    this.jzz = "DUUBEL|DAMINE";
    this.lyb = "AUTO|START";
    this.wda = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.xhl = "VÄLJA";
    this.zxs = "ALUSTA MÄNGU";
    this.fik = "VALI PANUS";
    this.lam = "POOLIK";
    this.xif = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.mga = "Koguvõit";
    this.axc = "POLE PIISAVALT KREDIITI.";
    this.wcx = "Boonus!";
    this.bbb = "BOONUS";
    this.msx = "PALUN OODAKE ...";
    this.zbs = "Vali Mäng";
    this.audio = "HELI";
    this.hyv = "MUUSIKA";
    this.kjr = "KIIRUS";
    this.efn = "TÄISEKRAAN";
    this.csj = "TÄISEKRAAN";
    this.zsd = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.tym = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.lmb = "MÄNGUREEGLID";
    this.xqg = "MÄNGUREEGLID";
    this.acn = "LAADIMINE ...";
    this.wju = "AJALOO LAADIMINE ...";
    this.obl = "Oled saavutanud ühe limiitidest!";
    this.hox = "Hoiatus";
    this.jtk = "Ühenduse viga";
    this.nzk = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.bvf = "Mäng suletakse";
    this.wsr = "Mäng taaskäivitatakse";
    this.vwd = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.jva = "SÄTTED";
    this.svk = "V A L U E";
    this.fzs = "Pöörake oma seadet!";
    this.uck = "INFO";
    this.eai = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.mka = "See mäng on optimeeritud Google Chrome jaoks.";
    this.ulm = "Palun kasutage praeguse versiooni";
    this.azk = "Kahjuks ei toetata seda brauserit täielikult.";
    this.nif = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.dva = "PAREM";
    this.zqq = "AUTOMAATNE";
    this.ino = "VÕITIS";
    this.bky = "võidetud";
    this.evt = "KOKKU";
    this.error = "VIGA";
    this.fqu = "TASUTA MÄNG";
    this.tka = "MÄNGU ID";
    this.uum = "MÄNGUAEG";
    this.aco = "Viimased";
    this.vre = "mängu";
    this.ysw = "SISSEMAKSE";
    this.kug = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.ybi = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.lmu = "RISKI, ET SUURENDADA OMA VÕITU";
    this.fdd = "Statistika";
    this.rgq = "Mänge kokku";
    this.hcy = "Kogupanus";
    this.wnd = "Koguvõit";
    this.dfz = "Mänguaeg kokku";
    this.qst = "Olen seda teadet lugenud.";
    this.rkm = "MÄNGU|LÕPP";
    this.zmo = "Ajalugu";
    this.ltj = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.pox = "Põhimäng";
    this.yeg = "Automaatne väljavõtt";
    this.mio = "Välja võetud";
    this.lim = "Bonusspins";
    this.tww = "Gamble";
    this.kno = "Pool";
    this.gkb = "Respin";
    this.vce = "Boonus";
    this.ktv = "Esimene jagamine";
    this.tgt = "Teine jagamine";
    this.ore = "Kolmas jagamine";
    this.hwj = "J Ä T K A";
    this.nxp = "Ära seda enam näita";
    this.qag = "AUTOSTART";
    this.dkg = "DUUBEL DAMINE";
    this.abz = "VÕIDU TABEL";
    this.dnu = "Helisid ei saa laadida!";
    this.tju = "Ressursid puuduvad!";
    this.cee = "Soovid mängida ilma helideta?";
    this.epz = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.ldp = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.zmf = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.bhk = "TÜHISTA";
    this.vsb = "AUTOMAATKÄIVITUSE SÄTTED";
    this.iyl = "Mängude arv:";
    this.vpw = "Peata automaatkäivitus";
    this.okv = "Krediit madalam kui:";
    this.nit = "Krediit kõrgem kui:";
    this.whf = "Võit suurem kui:";
    this.ldr = "Automaatkäivitus peatatakse boonuse alguses.";
    this.gir = "Jaga Facebookis";
    this.ok = "OK";
    this.nup = "Reality Check";
    this.xjg = "Olete soovinud reaalsuskontrolli.";
    this.ssv = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
tvt.prototype = new oim;

function wbh() {
    this.rkb = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.rzu = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.llw = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.rzt = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.wrg = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.hwg = "ΒΟHΘΕΙΑ";
    this.duv = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.hfi = "ΜΕΝΟY";
    this.fsf = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.rmq = "ΣΤΟΠ";
    this.dzc = "ΠIΣΤΩΣΗ";
    this.xaq = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.bph = "ΝΙΚΗΤΗΣ!";
    this.gzw = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.wzi = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.ffo = "ΠΑΡΑΛΑΒH";
    this.sbp = "ΠΑΡΑΛΑΒH";
    this.jzz = "ΤΖΟΓAΡΩ";
    this.lyb = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.wda = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.xhl = "EΞΟΔΟΣ";
    this.zxs = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.fik = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.lam = "ΠΑΡΑΛΑΒH|1/2";
    this.xif = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.mga = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.axc = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.wcx = "Μπόνουσ!";
    this.bbb = "ΜΠOΝΟΥΣ";
    this.msx = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.zbs = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.hyv = "ΜΟΥΣΙΚΉ";
    this.kjr = "ΤΑΧYΤΗΤΑ";
    this.efn = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.csj = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.zsd = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.evt = "ΣYΝΟΛΟ";
    this.lmb = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.xqg = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.acn = "ΦΟΡΤΩΣΗ ...";
    this.wju = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.obl = "Ξεπεράσατε κάποιο όριο!";
    this.hox = "Προειδοποίηση";
    this.jtk = "Σφάλμα επικοινωνίας";
    this.nzk = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.bvf = "Το παιχνίδι θα τερματιστεί";
    this.wsr = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.vwd = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.jva = "ΡΥΘΜΙΣΕΙΣ";
    this.svk = "V A L U E";
    this.fzs = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.uck = "ΠΛΗΡΟΦΟΡΊΕς";
    this.eai = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.mka = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.ulm = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.azk = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.nif = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.dva = "ΔΕΞΙA";
    this.zqq = "AΥΤOΜΑΤΟ";
    this.ino = "ΚEΡΔΙΣΕ";
    this.bky = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.fqu = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.tka = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.uum = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.aco = "Τελευταία";
    this.vre = "παιχνίδια";
    this.ysw = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.kug = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.ybi = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.lmu = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.fdd = "Στατιστικά";
    this.rgq = "Σύνολο παιχνιδιών";
    this.hcy = "Συνολικό ποντάρισμα";
    this.wnd = "Συνολικό κέρδος";
    this.dfz = "Συνολικός χρόνος παιχνιδιού";
    this.qst = "Eχω διαβάσει το μήνυμα.";
    this.rkm = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.zmo = "ΙΣΤΟΡΙΚΟ";
    this.ltj = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.pox = "Κύριο παιχνίδι";
    this.yeg = "Αυτόματη λήψη";
    this.mio = "Ελήφθησαν";
    this.lim = "Bonusspins";
    this.tww = "Τζογάρω";
    this.kno = "Hμισυ";
    this.gkb = "Respin";
    this.vce = "Μπόνουσ";
    this.ktv = "Πρώτο μοίρασμα";
    this.tgt = "Δεύτερο μοίρασμα";
    this.ore = "Τρίτο μοίρασμα";
    this.hwj = "Σ Υ Ν  E Χ Ε Ι Α";
    this.nxp = "Να μην προβληθεί ξανά";
    this.qag = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.dkg = "ΤΖΟΓAΡΩ";
    this.abz = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.dnu = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.tju = "Λείπουν πόροι!";
    this.cee = "Παιχνίδι χωρίς ήχο?";
    this.epz = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.ldp = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.zmf = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.bhk = "ΑΚΎΡΩΣΗ";
    this.vsb = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.iyl = "Αριθμός παιχνιδιών:";
    this.vpw = "Διακοπή autostart";
    this.okv = "Μονάδες χαμηλότερα από:";
    this.nit = "Μονάδες υψηλότερες από:";
    this.whf = "Κέρδος υψηλότερο από:";
    this.ldr = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.gir = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.nup = "έλεγχο πραγματικότητας";
    this.xjg = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.ssv = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
wbh.prototype = new oim;

function jhi() {
    this.rkb = "МИН. ЗАЛОГ Е";
    this.rzu = "МАКС. ЗАЛОГ";
    this.llw = "МИНИМ. ЗАЛОГ";
    this.rzt = "МАКС. ЗАЛОГ";
    this.wrg = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.hwg = "ПОМОЩ";
    this.duv = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.hfi = "МЕНЮ";
    this.fsf = "ПОВЕЧЕ|ИГРИ";
    this.rmq = "СТОП";
    this.dzc = "КРЕДИТ";
    this.xaq = "ИГРАТА ЗАВЪРШИ";
    this.bph = "ПЕЧЕЛИТЕ!";
    this.gzw = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.wzi = "ПОСЛ.ПЕЧАЛБА";
    this.ffo = "ПРИБИРАНЕ";
    this.sbp = "ПРИБИРАНЕ";
    this.jzz = "ДУБЛИРАНЕ";
    this.lyb = "АВТО|СТАРТ";
    this.wda = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.xhl = "ИЗХОД";
    this.zxs = "ЗАПОЧНЕТЕ ИГРАТА";
    this.fik = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.lam = "ДЕЛЕНЕ";
    this.xif = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.mga = "ОБЩА ПЕЧАЛБА";
    this.axc = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.wcx = "Бонус!";
    this.bbb = "БОНУС";
    this.msx = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.zbs = "Повече Игри";
    this.kjr = "ТУРБО";
    this.zsd = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.lmb = "ПРАВИЛА НА ИГРАТА";
    this.xqg = "ПРАВИЛА|НА ИГРАТА";
    this.acn = "ЗАРЕЖДАНЕ ...";
    this.wju = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.obl = "Достигна един от лимитите!";
    this.hox = "Предупреждение";
    this.jtk = "Комуникационна грешка";
    this.nzk = "Достигнали сте максималния брой безплатни игри!";
    this.bvf = "Играта ще бъде затворена";
    this.wsr = "Играта ще бъде рестартирана";
    this.vwd = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.jva = "НАСТРОЙКИ";
    this.svk = "V A L U E";
    this.fzs = "Моля, включете устройството!";
    this.uck = "ИНФОРМАЦИЯ";
    this.eai = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.mka = "Тази игра е оптимизирана за Google Chrome.";
    this.ulm = "Моля, използвайте текущата версия на";
    this.azk = "За съжаление този браузър не се поддържа напълно.";
    this.nif = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.dva = "ДЯСНА";
    this.zqq = "АВТО";
    this.ino = "СПЕЧЕЛЕНО";
    this.bky = "печалби";
    this.evt = "ОБЩО";
    this.error = "ГРЕШКА";
    this.fqu = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.hyv = "МУЗИКА";
    this.efn = "ПЪЛЕН ЕКРАН";
    this.csj = "ПЪЛЕН|ЕКРАН";
    this.tka = "ИД НА ИГРА";
    this.uum = "ВРЕМЕ НА ИГРА";
    this.aco = "Последни";
    this.vre = "игри";
    this.ysw = "ДЕПОЗИТ";
    this.kug = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.ybi = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.lmu = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.fdd = "Статистика";
    this.rgq = "Общо игри";
    this.hcy = "Общо залог";
    this.wnd = "Общо печалби";
    this.dfz = "Общо време на игра";
    this.qst = "Прочетох това съобщение.";
    this.rkm = "ИЗХОД|ОТ|ИГРАТА";
    this.zmo = "ИСТОРИЯ";
    this.ltj = "Няма играни игри.";
    this.state = "СТАТУС";
    this.pox = "Основна игра";
    this.yeg = "Автоматично събрани";
    this.mio = "Събрани";
    this.lim = "Бонус-игри";
    this.tww = "Дублиране";
    this.kno = "Половина";
    this.gkb = "Respin";
    this.vce = "Бонус";
    this.ktv = "Първо раздаване";
    this.tgt = "Второ раздаване";
    this.ore = "Трето раздаване";
    this.hwj = "П Р О Д Ъ Л Ж А В А М";
    this.nxp = "Не показвай отново";
    this.qag = "AUTOSTART";
    this.dkg = "ДУБЛИРАНЕ";
    this.abz = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.dnu = "Звукът не може да бъде зареден!";
    this.tju = "Липсват ресурси!";
    this.cee = "Игра без звук?";
    this.epz = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.ldp = "Настройте интерфейса на играта според своите нужди!";
    this.zmf = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.bhk = "ИЗЧИСТВАНЕ";
    this.vsb = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.iyl = "Брой игри:";
    this.vpw = "Спри автоматичния старт";
    this.okv = "Кредит по-малък от:";
    this.nit = "Кредит по-висок от:";
    this.whf = "Спечели повече от:";
    this.ldr = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.gir = "Сподели във Facebook";
    this.ok = "OK";
    this.nup = "Reality Check";
    this.xjg = "Заявили сте проверка на реалността.";
    this.ssv = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
jhi.prototype = new oim;

function kmp() {
    this.rkb = "მინიმალური ფსონი არის";
    this.rzu = "მაქსიმალური ფსონი";
    this.llw = "მინიმალური ფსონი";
    this.rzt = "მაქსიმალური ფსონი";
    this.wrg = "ფსონი";
    this.start = "დაწყება";
    this.hwg = "დახმარება";
    this.duv = "გადახდის მრიცხველი";
    this.hfi = "მენიუ";
    this.fsf = "მეტი|თამაშები";
    this.rmq = "გაჩერება";
    this.dzc = "კრედიტი";
    this.xaq = "თამაში დასრულებულია";
    this.bph = "გამარჯვებული!";
    this.gzw = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.wzi = "ბოლო მოგება";
    this.ffo = "შეგროვება";
    this.sbp = "შეგროვება";
    this.jzz = "აზარტი";
    this.lyb = "ავტო|დაწყება";
    this.wda = "ნახევარი";
    this.xhl = "გამოსვლა";
    this.zxs = "თამაშის დაწყება";
    this.fik = "აირჩიეთ ფსონი";
    this.lam = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.mga = "მთლიანი მოგება";
    this.hox = "გაფრთხილება";
    this.evt = "მთლიანი";
    this.msx = "გთხოვთ, დაელოდოთ ...";
    this.zbs = "მეტი თამაშები";
    this.kjr = "ტურბო";
    this.zsd = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.hwj = "გაგრძელება";
    this.qag = "ავტო დაწყება";
    this.abz = "გადახდის მრიცხველი";
    this.dkg = "აზარტი";
    this.left = "მარცხნივ";
    this.dva = "მარჯვნივ";
    this.zqq = "ავტომატურად";
    this.ok = "კი";
    this.bhk = "გაუქმება";
    this.tww = "აზარტი";
    this.kno = "ნახევარი";
    this.lmb = "თამაშის წესები";
    this.xqg = "თამაშის წესები";
    this.wcx = "BONUS!";
    this.bbb = "ბონუს";
    this.xif = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.axc = "არა საკმარისი კრედიტი.";
    this.vwd = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.acn = "ჩატვირთვის  ...";
    this.wju = "ჩატვირთვის  ისტორია  ...";
    this.jtk = "საკომუნიკაციო შეცდომა";
    this.obl = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.nzk = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.bvf = "თამაში დასრულდება";
    this.wsr = "თამაში გადაიტვირთება";
    this.ino = "მოგებულია";
    this.bky = "wins";
    this.svk = "V A L U E";
    this.error = "შეცდომა";
    this.fqu = "უფასო თამაში";
    this.tka = "თამაშის  ნომერი";
    this.uum = "სათამაშო დრო";
    this.aco = "ბოლო ";
    this.vre = "თამაშები";
    this.ysw = "დეპოზიტი";
    this.audio = "ხმა";
    this.hyv = "მუსიკა";
    this.efn = "სრული ეკრანი";
    this.csj = "სრული ეკრანი";
    this.language = "ენის";
    this.nxp = "მომავალში აღარ ჩვენება";
    this.dnu = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.tju = "არასაკმარისი რესურსები!";
    this.cee = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.fzs = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.eai = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.mka = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.owy = "გთხოვთ გამოიყენოთ";
    this.kfz = "-ის მიმდინარე ვერსია";
    this.azk = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.nif = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.epz = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.ldp = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.kug = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.ybi = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.lmu = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.rgq = "მთლიანი თამაშები";
    this.hcy = "ფსონი მთლიანად";
    this.wnd = "მთლიანი მოგება";
    this.dfz = "მთლიანი სათამაშო დრო";
    this.qst = "მე გავეცანი ამ გზავნილს.";
    this.rkm = "თამაშის|დამთავრება";
    this.zmo = "მოვლენების ჩანაწერი";
    this.ltj = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.pox = "ძირითადი თამაში";
    this.yeg = "ავტომატურად შეგროვება";
    this.mio = "აღებულ იქნა";
    this.ktv = "პირველი დარიგება";
    this.tgt = "მეორე დარიგება";
    this.ore = "მესამე დარიგება";
    this.vsb = "ავტოგამშვების პარამეტრები";
    this.iyl = "თამაშების რაოდენობა:";
    this.vpw = "შეაჩერეთ ავტოგამშვები";
    this.okv = "კრედიტი უფრო დაბალი ვიდრე:";
    this.nit = "კრედიტი უფრო მაღალი ვიდრე:";
    this.whf = "მოიგეთ უფრო მეტი ვიდრე:";
    this.ldr = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.gir = "გააზიარეთ ფეისბუქზე";
    this.fdd = "სტატისტიკა";
    this.of = "/";
    this.lim = "Bonus თამაში";
    this.vce = "ბონუსი";
    this.uck = "ინფორმაცია";
    this.jva = "პარამეტრ.";
    this.gkb = "ხელახლა დატრიალების";
    this.zmf = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.nup = "რეალობის შემოწმება";
    this.xjg = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.ssv = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
kmp.prototype = new oim;

function tsw() {
    this.rkb = "A MINIMUM TÉT";
    this.rzu = "MAXIMUM TÉT";
    this.llw = "MIN. TÉT";
    this.rzt = "MAX. TÉT";
    this.wrg = "TÉT";
    this.start = "START";
    this.hwg = "SÚGÓ";
    this.duv = "SÚGÓ";
    this.hfi = "MENÜ";
    this.fsf = "MENÜ";
    this.rmq = "STOP";
    this.dzc = "HITEL";
    this.xaq = "A JÁTÉKNAK VÉGE";
    this.bph = "NYEREMÉNY!";
    this.gzw = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.wzi = "UTOLSÓ NYER.";
    this.ffo = "FELÍR";
    this.sbp = "FELÍR";
    this.jzz = "SZORZÁS";
    this.lyb = "AUTO|START";
    this.wda = "FELEZÉS";
    this.xhl = "KILÉPÉS";
    this.zxs = "START";
    this.fik = "VÁLASSZON TÉTET";
    this.lam = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.mga = "Összes Nyeremény";
    this.hox = "Figyelmeztetés";
    this.evt = "ÖSSZES";
    this.msx = "KÉREM VÁRJON ...";
    this.zbs = "Menü";
    this.kjr = "SEBESSÉG";
    this.zsd = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.hwj = "T O V Á B B";
    this.qag = "AUTOSTART";
    this.abz = "SÚGÓ";
    this.dkg = "SZORZÁS";
    this.left = "BAL";
    this.dva = "JOBB";
    this.ok = "OK";
    this.bhk = "MÉGSEM";
    this.tww = "Szorzás";
    this.kno = "Felezés";
    this.lmb = "JÁTÉKSZABÁLYOK";
    this.xqg = "JÁTÉKSZABÁLYOK";
    this.wcx = "Bónusz!";
    this.bbb = "BÓNUSZ";
    this.xif = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.axc = "NINCS ELÉG HITEL";
    this.svk = "V A L U E";
    this.bky = "nyeremények";
    this.of = "/";
    this.vwd = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.acn = "BETÖLTÉSE ...";
    this.wju = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.jtk = "Kommunikációs hiba";
    this.obl = "Elérte az egyik limitet!";
    this.nzk = "Elérte a szabad játékok maximum számát!";
    this.bvf = "A játék megállítva";
    this.wsr = "Játék újraindul";
    this.ino = "NYERT";
    this.error = "HIBA";
    this.fqu = "FREEPLAY";
    this.zqq = "AUTO";
    this.tka = "JÁTÉK ID";
    this.uum = "Játék Idő";
    this.aco = "utolsó";
    this.vre = "játék";
    this.ysw = "HITEL";
    this.audio = "HANG";
    this.hyv = "ZENE";
    this.efn = "TELJES KÉPERNYŐ";
    this.csj = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.nxp = "Ne mutassa mégegyszer";
    this.dnu = "A hangot nem lehet betölteni!";
    this.tju = "Források hiányoznak!";
    this.cee = "Játék hang nélkül?";
    this.jva = "BEÁLLÍTÁS";
    this.fzs = "Kérjük fordítsa el a készüléket!";
    this.uck = "INFÓ";
    this.eai = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.mka = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.owy = "Kérjük használja a(z)";
    this.kfz = " legújabb verzióját!";
    this.azk = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.nif = "Ez a játék nem indítható FreePlay módban!";
    this.epz = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.ldp = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.kug = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.ybi = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.lmu = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.fdd = "Statisztika";
    this.rgq = "Összes Játék";
    this.hcy = "Összes Tét";
    this.wnd = "Összes Nyeremény";
    this.dfz = "Összes Játék Idő";
    this.qst = "Elolvastam az üzenetet.";
    this.rkm = "KILÉPÉS";
    this.zmo = "Előzmények";
    this.ltj = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.pox = "Fő Játék";
    this.yeg = "Autom. Felírás";
    this.mio = "Felírva";
    this.lim = "Bónusz játék";
    this.gkb = "Respin";
    this.vce = "Bónusz";
    this.ktv = "Első Leosztás";
    this.tgt = "Második Leosztás";
    this.ore = "Harmadik Leosztás";
    this.vsb = "AUTOSTART BEÁLLÍTÁS";
    this.iyl = "Játékok száma:";
    this.vpw = "Stop autostart";
    this.okv = "A hitel kevesebb, mint:";
    this.nit = "A hitel több, mint:";
    this.whf = "A nyeremény több, mint:";
    this.ldr = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.gir = "Megosztás a Facebook-on";
    this.zmf = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.nup = "Reality Check";
    this.xjg = "Ön egy valóság-ellenőrzést kért.";
    this.ssv = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
tsw.prototype = new oim;

function juk() {
    this.rkb = "MIZA MINIMĂ ESTE";
    this.rzu = "MIZA MAXIMĂ";
    this.llw = "MIZA MIN.";
    this.rzt = "MIZA MAX.";
    this.wrg = "MIZĂ";
    this.start = "START";
    this.hwg = "AJUTOR";
    this.duv = "LISTA|CÂŞTIGURI";
    this.hfi = "MENIU";
    this.fsf = "MENIUL|JOCULUI";
    this.rmq = "STOP";
    this.dzc = "CREDIT";
    this.xaq = "SFÂRŞIT JOCUL";
    this.bph = "CÂŞTIGĂTOR!";
    this.gzw = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.wzi = "ULTIMUL CÂŞTIG";
    this.ffo = "COLECTA";
    this.sbp = "COLECTA";
    this.jzz = "JOC";
    this.lyb = "AUTO|START";
    this.wda = "COLECTARE|1/2";
    this.xhl = "IEŞIRE";
    this.zxs = "APĂSAŢI START";
    this.fik = "ALEGEŢI MIZA";
    this.lam = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.mga = "Câştig total";
    this.hox = "Avertizare";
    this.evt = "TOTAL";
    this.msx = "AŞTEPTAŢI VĂ ROG ...";
    this.zbs = "Meniul Jocului";
    this.kjr = "VITEZĂ";
    this.zsd = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.hwj = "C O N T I N U A R E";
    this.qag = "AUTOSTART";
    this.abz = "LISTA CÂŞTIGURI";
    this.dkg = "JOC";
    this.left = "STÂNGA";
    this.dva = "DREAPTA";
    this.ok = "OK";
    this.bhk = "ÎNTRERUPERE";
    this.tww = "Joc";
    this.kno = "Colectare 1/2";
    this.lmb = "REGULILE JOCULUI";
    this.xqg = "REGULILE|JOCULUI";
    this.wcx = "Bonus!";
    this.bbb = "BONUS";
    this.xif = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.axc = "CREDIT INSUFICIENT.";
    this.bky = "câştigă";
    this.svk = "V A L U E";
    this.of = "DIN";
    this.vwd = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.acn = "ÎNCARCĂ ...";
    this.wju = "ÎNCARCĂ ISTORIC ...";
    this.jtk = "Eroare de comunicare";
    this.obl = "Aţi atins una dintre limite!";
    this.nzk = "Aţi atins numărul maxim de jocuri gratis!";
    this.bvf = "Jocul se încheie";
    this.wsr = "Jocul se restartează";
    this.ino = "CÂŞTIGAT";
    this.error = "EROARE";
    this.fqu = "FREEPLAY";
    this.zqq = "AUTO";
    this.tka = "ID JOC";
    this.uum = "TIMP DE JOC";
    this.aco = "ultimele";
    this.vre = "jocuri";
    this.ysw = "CREDIT";
    this.audio = "AUDIO";
    this.hyv = "MUZICĂ";
    this.efn = "ECRAN COMPLET";
    this.csj = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.nxp = "Nu reafișați";
    this.dnu = "Sunetele nu pot fi încărcate!";
    this.tju = "Lipsesc resurse!";
    this.cee = "Jucaţi fără sunet?";
    this.jva = "SETĂRI";
    this.fzs = "Vă rugăm opriţi aparatul!";
    this.uck = "INFO";
    this.eai = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.mka = "Acest joc este optimizat pentru Google Chrome.";
    this.ulm = "Vă rugăm utilizaţi versiunea actuală";
    this.azk = "Din păcate acest browser nu este sprijinit complet.";
    this.nif = "Acest joc nu poate fi pornit în modul freeplay!";
    this.epz = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.ldp = "Ajustează interfaţa de joc nevoilor dvs!";
    this.kug = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.ybi = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.lmu = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.fdd = "Statistică";
    this.rgq = "Număr jocuri";
    this.hcy = "Pariuri totale";
    this.wnd = "Câştig total";
    this.dfz = "Timp total de joc";
    this.qst = "Am citit mesajul.";
    this.rkm = "ÎNCHEIERE|JOC";
    this.zmo = "ISTORIC";
    this.ltj = "Nu există jocuri.";
    this.state = "STATUT";
    this.pox = "Joc principal";
    this.yeg = "Auto colectare";
    this.mio = "Colectat";
    this.lim = "Bonusspins";
    this.gkb = "Respin";
    this.vce = "Bonus";
    this.ktv = "Primul Deal";
    this.tgt = "Al doilea deal";
    this.ore = "Al treilea deal";
    this.vsb = "SETĂRI AUTOSTART";
    this.iyl = "Numărul jocurilor:";
    this.vpw = "Oprire autostart";
    this.okv = "Credit sub:";
    this.nit = "Credit peste:";
    this.whf = "Câștig peste:";
    this.ldr = "Autostart se va opti la începerea bonusului.";
    this.gir = "Distribuie Facebook";
    this.zmf = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.nup = "Reality Check";
    this.xjg = "Ai cerut un Reality Check.";
    this.ssv = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
juk.prototype = new oim;

function dbj() {
    this.rkb = "MÍNIMA APOSTA É";
    this.rzu = "MÁX. APOSTA";
    this.llw = "MÍN. APOSTA";
    this.rzt = "MÁX. APOSTA";
    this.wrg = "APOSTA";
    this.start = "PARTIDA";
    this.hwg = "AJUDA";
    this.duv = "ESQUEMA|DE PAGOS";
    this.hfi = "MENU";
    this.fsf = "SELEÇÃO|DE JOGOS";
    this.rmq = "PARADA";
    this.dzc = "CRÉDITO";
    this.xaq = "FIM DO JOGO";
    this.bph = "VENCEDOR!";
    this.gzw = "BOA SORTE!";
    this.win = "GANHO";
    this.wzi = "ULTIMO GANHO";
    this.ffo = "COLETAR";
    this.sbp = "COLETAR";
    this.jzz = "JOGADA";
    this.lyb = "AUTO|PARTIDA";
    this.wda = "METADE";
    this.xhl = "SAÍDA";
    this.zxs = "PREMIR PARTIDA";
    this.fik = "SELECIONAR APOSTA";
    this.lam = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.mga = "Ganho total";
    this.hox = "Aviso";
    this.evt = "TOTAL";
    this.msx = "AGUARDE POR FAVOR ...";
    this.zbs = "Seleção de jogos";
    this.kjr = "VELOCIDADE";
    this.zsd = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.hwj = "C O N T I N U A R";
    this.qag = "AUTOPARTIDA";
    this.abz = "ESQUEMA DE PAGOS";
    this.dkg = "JOGADA";
    this.left = "ESQUERDA";
    this.dva = "DIREITA";
    this.ok = "OK";
    this.bhk = "CANCELAR";
    this.tww = "Jogada";
    this.kno = "Metade";
    this.lmb = "REGRAS DO JOGO";
    this.xqg = "REGRAS|DO JOGO";
    this.wcx = "Bonus!";
    this.bbb = "BONUS";
    this.xif = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.axc = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.bky = "ganha";
    this.svk = "V A L U E";
    this.of = "DE";
    this.vwd = "TOCAR NA TELA PARA CONTINUAR";
    this.acn = "CARREGANDO ...";
    this.wju = "CARREGANDO HISTÓRICO ...";
    this.jtk = "Erro de comunicação";
    this.obl = "Alcançou um dos limities!";
    this.nzk = "Alcançou a quantidade máxima de jogos livres!";
    this.bvf = "O jogo será encerrado";
    this.wsr = "O jogo será reiniciado";
    this.ino = "GANHOU";
    this.error = "ERRO";
    this.fqu = "FREEPLAY";
    this.zqq = "AUTO";
    this.tka = "ID JOGO";
    this.uum = "Playing Time";
    this.aco = "Últimos";
    this.vre = "jogos";
    this.ysw = "DEPOSIT";
    this.audio = "AUDIO";
    this.hyv = "MUSIC";
    this.efn = "TELA CHEIA";
    this.csj = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.nxp = "Não exibir novamente";
    this.dnu = "Sounds não podem ser carregados!";
    this.tju = "Faltam recursos!";
    this.cee = "Jogar sem som?";
    this.jva = "AJUSTES";
    this.fzs = "Favor girar o seu aparelho!";
    this.uck = "INFORMAÇÃO";
    this.eai = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.mka = "Este jogo é otimizado por Google Chrome.";
    this.ulm = "Favor usar a versão atual de";
    this.azk = "Infelizmente este browser não é completamente suportado.";
    this.nif = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.epz = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.ldp = "Adapte a interface do jogo às suas necessidades!";
    this.kug = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.ybi = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.lmu = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.fdd = "Estatísticas";
    this.rgq = "Número de jogos";
    this.hcy = "Aposta total";
    this.wnd = "Ganho total";
    this.dfz = "Tempo total do jogo";
    this.qst = "Eu lí esta mensagem.";
    this.rkm = "ENCERRAR|JOGO";
    this.zmo = "HISTÓRICO";
    this.ltj = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.pox = "Jogo principal";
    this.yeg = "Coletado automaticamente";
    this.mio = "Coletado";
    this.lim = "Bonusspins";
    this.gkb = "Respin";
    this.vce = "Bonus";
    this.ktv = "Primeiro Deal";
    this.tgt = "Segundo Deal";
    this.ore = "Terceiro Deal";
    this.vsb = "AJUSTES AUTOPARTIDA";
    this.iyl = "Número de jogos:";
    this.vpw = "Parar autopartida";
    this.okv = "Crédito menor do que:";
    this.nit = "Crédito maior do que:";
    this.whf = "Ganho maior do que:";
    this.ldr = "O autopartida será parado no início do bonus.";
    this.gir = "Participar no Facebook";
    this.zmf = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.nup = "Reality Check";
    this.xjg = "Solicitaste um Reality Check.";
    this.ssv = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
dbj.prototype = new oim;

function skg() {
    this.rkb = "LA MISE MINIMALE EST DE";
    this.rzu = "MISE MAX.";
    this.llw = "MISE MINI";
    this.rzt = "MISE MAX.";
    this.wrg = "MISE";
    this.start = "DEPART";
    this.hwg = "AIDE";
    this.duv = "TABLEAU|DES PAIEMENTS";
    this.hfi = "MENU";
    this.fsf = "PLUS|DE JEUX";
    this.rmq = "ARRÊTEZ";
    this.dzc = "CRÉDIT";
    this.xaq = "FIN DU JEU";
    this.bph = "GAGNANT!";
    this.gzw = "BONNE CHANCE!";
    this.win = "GAIN";
    this.wzi = "DERNIER GAIN";
    this.ffo = "ENCAISSER";
    this.sbp = "ENCAISSER";
    this.jzz = "DOUBLER";
    this.lyb = "AUTO|LANCER";
    this.wda = "ENCAISSER|MOITIÉ";
    this.xhl = "SORTIE";
    this.zxs = "APPUYEZ SUR START";
    this.fik = "CHOISIR LA MISE";
    this.lam = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.mga = "Gain total";
    this.hox = "Avertissement";
    this.evt = "TOTALE";
    this.msx = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.zbs = "Plus de jeux";
    this.kjr = "VITESSE";
    this.zsd = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.hwj = "C O N T I N U E R";
    this.qag = "AUTO LANCER";
    this.abz = "TABLEAU DES PAIEMENTS";
    this.dkg = "DOUBLER";
    this.left = "GAUCHE";
    this.dva = "DROITE";
    this.ok = "OK";
    this.bhk = "ANNULER";
    this.tww = "Doubler";
    this.kno = "Encaisser moitié";
    this.lmb = "RÈGLES DU JEU";
    this.xqg = "RÈGLES DU JEU";
    this.wcx = "Bonus!";
    this.bbb = "BONUS";
    this.xif = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.axc = "PAS ASSEZ DE CRÉDIT";
    this.bky = "gagne";
    this.svk = "V A L U E";
    this.of = "SUR";
    this.vwd = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.acn = "CHARGEMENT EN COURS ...";
    this.wju = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.jtk = "Erreur de communication";
    this.obl = "Vous avez atteint une des limites!";
    this.nzk = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.bvf = "Le jeu sera terminé";
    this.wsr = "Le jeu sera démarré de nouveau";
    this.ino = "GAGNÉ";
    this.error = "ERREUR";
    this.fqu = "JEU GRATUIT";
    this.zqq = "AUTO";
    this.tka = "ID DU JEU";
    this.uum = "TEMPS DE JEU";
    this.aco = "Les";
    this.vre = "derniers jeux";
    this.ysw = "AVOIR";
    this.audio = "AUDIO";
    this.hyv = "MUSIQUE";
    this.efn = "PLEIN ÉCRAN";
    this.csj = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.nxp = "Ne pas afficher encore une fois";
    this.dnu = "Impossible de charger des sounds!";
    this.tju = "Manque de ressources!";
    this.cee = "Jouer sans son?";
    this.jva = "CONFIGUR.";
    this.fzs = "Merci de tourner votre matériel!";
    this.uck = "INFO";
    this.eai = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.mka = "Ce jeu est optimisé pour Google Chrome.";
    this.ulm = "Veuilllez utiliser la version à jour de";
    this.azk = "Malheureusement, ce browser n'est intégralement supporté.";
    this.nif = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.epz = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.ldp = "Adapte l'interface de jeu à tes besoins!";
    this.kug = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.ybi = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.lmu = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.fdd = "Statistiques";
    this.rgq = "Nombre des jeux";
    this.hcy = "Total des mises";
    this.wnd = "Gain total";
    this.dfz = "Temps total du jeu";
    this.qst = "J'ai lu le message";
    this.rkm = "TERMINER|LE JEU";
    this.zmo = "Historique";
    this.ltj = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.pox = "Jeu principal";
    this.yeg = "Pris automatiquement";
    this.mio = "Pris";
    this.lim = "Bonusspins";
    this.gkb = "Respin";
    this.vce = "Bonus";
    this.ktv = "Premier Deal";
    this.tgt = "Deuxième Deal";
    this.ore = "Troisième Deal";
    this.vsb = "AUTOSTART CONFIGURATION";
    this.iyl = "Nombre des jeux:";
    this.vpw = "Arrêter autostart";
    this.okv = "Crédit inférieur à:";
    this.nit = "Crédit supérieur à:";
    this.whf = "Gain supérieur à:";
    this.ldr = "L'autostart est arrêté au début du bonus.";
    this.gir = "Partager sur Facebook";
    this.zmf = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.nup = "Reality Check";
    this.xjg = "Tu as demandé un Reality Check.";
    this.ssv = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
skg.prototype = new oim;

function hhb() {
    this.rkb = "NAJMANJI ULOG JE";
    this.rzu = "MAX ULOG";
    this.llw = "MIN. ULOG";
    this.rzt = "MAKS. ULOG";
    this.wrg = "ULOG";
    this.start = "START";
    this.hwg = "POMOĆ";
    this.duv = "LISTA DOBITAKA";
    this.hfi = "IZBORNIK";
    this.fsf = "VIŠE|IGARA";
    this.rmq = "STOP";
    this.dzc = "KREDIT";
    this.xaq = "KRAJ IGRE";
    this.bph = "DOBITAK!";
    this.gzw = "SRETNO!";
    this.win = "DOBITAK";
    this.wzi = "ZADNJI DOBITAK";
    this.ffo = "UPIŠI";
    this.sbp = "UPIŠI";
    this.jzz = "DUPLANJE";
    this.lyb = "AUTO|START";
    this.wda = "UZMI|1/2";
    this.xhl = "IZLAZ";
    this.zxs = "PRETISNITE START";
    this.fik = "BIRAJTE ULOG";
    this.lam = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.mga = "Ukubni dobitci";
    this.hox = "Upozorenje";
    this.evt = "UKUBNI";
    this.msx = "MOLIMO PRIČEKAJTE ...";
    this.zbs = "Više igara";
    this.kjr = "BRZINA";
    this.zsd = "Kod kvara na uređaju nema jamstva.";
    this.hwj = "D A L J E";
    this.qag = "AUTOSTART";
    this.abz = "LISTA DOBITAKA";
    this.dkg = "DUPLANJE";
    this.left = "LIJEVA";
    this.dva = "DESNA";
    this.ok = "OK";
    this.bhk = "PREKID";
    this.tww = "Duplanje";
    this.kno = "Uzmi 1/2";
    this.lmb = "PRAVILA IGRE";
    this.xqg = "PRAVILA IGRE";
    this.wcx = "Bonus!";
    this.bbb = "BONUS";
    this.xif = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.axc = "NEMATE DOVOLJNO KREDITA.";
    this.bky = "dobici";
    this.svk = "V A L U E";
    this.of = "OD";
    this.vwd = "ZA NASTAVAK DODIRNITE ZASLON";
    this.acn = "UČITAVANJA ...";
    this.wju = "POVIJEST UČITAVANJA ...";
    this.jtk = "Komunikacijska pogreška";
    this.obl = "Dostigli ste jednu od graničnih vrijednosti!";
    this.nzk = "Dostigli ste maksimum besplatnih igara!";
    this.bvf = "Igra se zatvara";
    this.wsr = "Igra se iznova učitava";
    this.ino = "OSVOJENO";
    this.error = "POGREŠKA";
    this.fqu = "FREEPLAY";
    this.zqq = "AUTO";
    this.tka = "ID IGRE";
    this.uum = "Vrijeme igre";
    this.aco = "posljednjih";
    this.vre = "igara";
    this.ysw = "DEPOZIT";
    this.audio = "ZVUKA";
    this.hyv = "GLAZBA";
    this.efn = "PUN ZASLON";
    this.csj = "PUN ZASLON";
    this.language = "JEZIKA";
    this.nxp = "Ne prikazuj ponovo";
    this.dnu = "Zvukovi se ne mogu učitati!";
    this.tju = "Nedostaju resursi!";
    this.cee = "Želite li igrati uz zvuk?";
    this.jva = "POSTAVKE";
    this.fzs = "Uključite svoj uređaj!";
    this.uck = "INFORMACIJE";
    this.eai = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.mka = "Ova igra je optimizirana za Google Chrome.";
    this.ulm = "Molimo koristite se trenutnom inačicom";
    this.azk = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.nif = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.epz = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.ldp = "Prilagodite sučelje igre svojim potrebama!";
    this.kug = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.ybi = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.lmu = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.fdd = "Statistike";
    this.rgq = "Ukupno igara";
    this.hcy = "Ukupni ulog";
    this.wnd = "Ukupno dobitaka";
    this.dfz = "Ukupno vrijeme igre";
    this.qst = "Pročitao sam ovu poruku";
    this.rkm = "IZLAZ|IZ IGRE";
    this.zmo = "Povijest";
    this.ltj = "Nema odigranih igara.";
    this.state = "STANJE";
    this.pox = "Glavna igra";
    this.yeg = "Auto. pokupljeno";
    this.mio = "Pokupljeno";
    this.lim = "Besplatne igre";
    this.gkb = "Dodatne okretaje";
    this.vce = "Bonus";
    this.ktv = "Prvo dijeljenje";
    this.tgt = "Drugo dijeljenje";
    this.ore = "Treće dijeljenje";
    this.vsb = "POSTAVKE AUTOMATSKE IGRE";
    this.iyl = "Ukupno igara:";
    this.vpw = "Zaustavljanje automatske igre";
    this.okv = "Kredit manji od:";
    this.nit = "Kredit veći od:";
    this.whf = "Dobitak veći od:";
    this.ldr = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.gir = "Podijeli na Facebooku";
    this.zmf = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.nup = "Reality Check";
    this.xjg = "Zatražili ste Reality Check.";
    this.ssv = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
hhb.prototype = new oim;

function sbz() {
    this.rkb = "MINIMA PUNTATA È";
    this.rzu = "PUNTATA MASSIMA";
    this.llw = "MIN. PUNTATA";
    this.rzt = "MASS. PUNTATA";
    this.wrg = "PUNTATA";
    this.start = "START";
    this.hwg = "AIUTO";
    this.duv = "TABELLA VINCITE";
    this.hfi = "MENU";
    this.fsf = "SCELTA|GIOCHI";
    this.rmq = "STOP";
    this.dzc = "CREDITO";
    this.xaq = "FINE PARTITA";
    this.bph = "VINCITORE!";
    this.gzw = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.wzi = "ULTIMA VINCITA";
    this.ffo = "INCASSA";
    this.sbp = "INCASSA";
    this.jzz = "GAMBLE";
    this.lyb = "AUTO|START";
    this.wda = "METÀ";
    this.xhl = "FINE";
    this.zxs = "PREMI START";
    this.fik = "SCEGLI PUNTATA";
    this.lam = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.mga = "Totale vincita";
    this.hox = "Attenzione";
    this.evt = "TOTALE";
    this.msx = "ATTENDERE PREGO ...";
    this.zbs = "Scelta Giochi";
    this.kjr = "VELOCITÀ";
    this.zsd = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.hwj = "C O N T I N U A";
    this.qag = "AUTOSTART";
    this.abz = "TABELLA VINCITE";
    this.dkg = "GAMBLE";
    this.left = "SINISTRA";
    this.dva = "DESTRA";
    this.ok = "OK";
    this.bhk = "CANCELLA";
    this.tww = "Gamble";
    this.kno = "Metà";
    this.lmb = "REGOLAMENTO";
    this.xqg = "REGOLAMENTO";
    this.wcx = "Bonus!";
    this.bbb = "BONUS";
    this.xif = "PREMI UN TASTO PER CONTINUARE";
    this.axc = "CREDITO INSUFFICIENTE!";
    this.bky = "vince";
    this.svk = "V A L U E";
    this.of = "DI";
    this.vwd = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.acn = "STA CARICANDO ...";
    this.wju = "STA CARICANDO LA CRONACA ...";
    this.jtk = "Errore di comunicazione";
    this.obl = "Hai raggiunto uno dei limiti!";
    this.nzk = "Hai raggiunto il numero massimo di free games!";
    this.bvf = "La partita sta terminando";
    this.wsr = "La partita sta ripartendo";
    this.ino = "VINTO";
    this.error = "ERRORE";
    this.fqu = "FREEPLAY";
    this.zqq = "AUTO";
    this.tka = "GAME ID";
    this.uum = "Durata del gioco";
    this.aco = "Ultime partite";
    this.vre = "";
    this.ysw = "DEPOSITO";
    this.audio = "AUDIO";
    this.hyv = "MUSICA";
    this.efn = "SCHERMO INTERO";
    this.csj = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.nxp = "Non mostrare di nuovo";
    this.dnu = "Suoni non caricabili!";
    this.tju = "Mancano risorse!";
    this.cee = "Giocare senza suoni?";
    this.jva = "SETTAGGI";
    this.fzs = "Prego girare l'apparecchio!";
    this.uck = "INFO";
    this.eai = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.mka = "La partita è ottimizzata per Google Chrome.";
    this.ulm = "Prego utilizzare la versione attuale di";
    this.azk = "Purtroppo il presente browser non viene supportato interamente";
    this.nif = "Impossibile avviare questa partita nel modo freeplay!";
    this.epz = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.ldp = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.kug = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.ybi = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.lmu = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.fdd = "Statistica";
    this.rgq = "Totale partite";
    this.hcy = "Totale puntata";
    this.wnd = "Totale vincita";
    this.dfz = "Totale durata del gioco";
    this.qst = "Ho letto il messaggio";
    this.rkm = "TERMINARE|LA PARTITA";
    this.zmo = "Cronaca";
    this.ltj = "Nessuna partita giocata.";
    this.state = "STATO";
    this.pox = "Partita principale";
    this.yeg = "Raccolto autom.";
    this.mio = "Raccolto";
    this.lim = "Bonusspin";
    this.gkb = "Respin";
    this.vce = "Bonus";
    this.ktv = "Primo deal";
    this.tgt = "Secondo deal";
    this.ore = "Terzo deal";
    this.vsb = "SETTAGGI AUTOSTART";
    this.iyl = "Numero di partite:";
    this.vpw = "Fermare l'autostart";
    this.okv = "Credito più basso di:";
    this.nit = "Credito più alto di:";
    this.whf = "Vincita più alta di:";
    this.ldr = "L'autostart si ferma all'inizio del bonus.";
    this.gir = "Dividi su facebook";
    this.zmf = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.nup = "Reality Check";
    this.xjg = "Avete richiesto un Reality Check.";
    this.ssv = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.qqv = "Game break";
    this.ett = "Game limits";
    this.nvs = "Self test";
    this.jxv = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
sbz.prototype = new oim;

function rrf() {
    this.rkb = "MIN. INSATSEN ÄR";
    this.rzu = "MAXIMAL INSATS";
    this.llw = "MIN. INSATS";
    this.rzt = "MAX. INSATS";
    this.wrg = "INSATS";
    this.start = "STARTA";
    this.hwg = "HJÄLP";
    this.duv = "VINSTTABELL";
    this.hfi = "MENY";
    this.fsf = "FLER|SPEL";
    this.rmq = "STOPP";
    this.dzc = "KREDIT";
    this.xaq = "SPELET ÄR SLUT";
    this.bph = "VINNARE!";
    this.gzw = "LYCKA TILL!";
    this.win = "VINN";
    this.wzi = "SENASTE VINSTEN";
    this.ffo = "INKASSERA";
    this.sbp = "INKASSERA";
    this.jzz = "DUBBLERA";
    this.lyb = "AUTO|START";
    this.wda = "HÄLFTEN|1/2";
    this.xhl = "AVSLUTA";
    this.zxs = "TRYCK PÅ START";
    this.fik = "VÄLJ INSATS";
    this.lam = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.mga = "Total Vinst";
    this.hox = "Varning";
    this.evt = "TOTALT";
    this.msx = "VAR VÄNLIG VÄNTA ...";
    this.zbs = "Fler spel";
    this.kjr = "TEMPO";
    this.zsd = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.hwj = "F O R T S Ä T T";
    this.qag = "AUTOSTART";
    this.abz = "VINSTTABELL";
    this.dkg = "DUBBLERA";
    this.left = "VÄNSTER";
    this.dva = "HÖGER";
    this.ok = "OK";
    this.bhk = "AVBRYT";
    this.tww = "Dubblering";
    this.kno = "Hälften";
    this.lmb = "SPELREGLER";
    this.xqg = "SPELREGLER";
    this.wcx = "Bonus!";
    this.bbb = "BONUS";
    this.xif = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.axc = "FÖR LÅGT SALDO!";
    this.bky = "vinster";
    this.svk = "V A L U E";
    this.of = "AV";
    this.vwd = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.acn = "LÄSER ...";
    this.wju = "LÄSER IN HISTORIKEN ...";
    this.jtk = "Kommunikationsfel";
    this.obl = "Du har nått en av gränserna!";
    this.nzk = "Du har nått det maximala antalet gratisspel!";
    this.bvf = "Spelet avslutas";
    this.wsr = "Spelet startas om";
    this.ino = "VUNNA";
    this.error = "FEL";
    this.fqu = "GRATISSPEL";
    this.zqq = "AUTO";
    this.tka = "SPEL-ID";
    this.uum = "SPELTID";
    this.aco = "senaste";
    this.vre = "spelen";
    this.ysw = "INSÄTTNING";
    this.audio = "LJUD";
    this.hyv = "MUSIK";
    this.efn = "HELSKÄRM";
    this.csj = "HELSKÄRM";
    this.language = "SPRÅK";
    this.nxp = "Visa inte igen";
    this.dnu = "Ljud kan inte laddas!";
    this.tju = "Resurser saknas!";
    this.cee = "Spela utan ljud?";
    this.jva = "INSTÄLLN.";
    this.fzs = "Vänd din enhet!";
    this.uck = "INFO";
    this.eai = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.mka = "Det här spelet är optimerat för Google Chrome.";
    this.ulm = "Använd den senaste versionen av";
    this.azk = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.nif = "Det här spelet kan inte startas i gratisspelsläget!";
    this.epz = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.ldp = "Anpassa spelgränssnittet efter dina behov!";
    this.kug = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.ybi = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.lmu = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.fdd = "Statistik";
    this.rgq = "Totalt antal spel";
    this.hcy = "Totalinsats";
    this.wnd = "Totalvinst";
    this.dfz = "Total speltid";
    this.qst = "Jag har läst detta meddelande";
    this.rkm = "AVSLUTA|SPELET";
    this.zmo = "Historik";
    this.ltj = "Inga spel har spelats.";
    this.state = "STATUS";
    this.pox = "Huvudspel";
    this.yeg = "Auto. Inkasserat";
    this.mio = "Inkasserat";
    this.lim = "Bonusspinn";
    this.gkb = "Respin";
    this.vce = "Bonus";
    this.ktv = "Första given";
    this.tgt = "Andra given";
    this.ore = "Tredje given";
    this.vsb = "AUTOSTARTINSTÄLLNINGAR";
    this.iyl = "Antal spelrundor:";
    this.vpw = "Stoppa autospel";
    this.okv = "Saldo lägre än:";
    this.nit = "Saldo högre än:";
    this.whf = "Vinst högre än:";
    this.ldr = "Autospelen kommer att stoppas då bonusen startar.";
    this.gir = "Dela på Facebook";
    this.zmf = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.nup = "Reality Check";
    this.xjg = "Du har begärt att få en statusuppdatering.";
    this.ssv = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.qqv = "Spelpaus";
    this.ett = "Spelgränser";
    this.nvs = "Självtest";
    this.jxv = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
rrf.prototype = new oim;

function vdt() {
    this.snl = "LINES";
    this.lay = "LINE";
    this.uqc = "BET / LINE";
    this.jog = "WAYS";
    this.yro = "WAY";
    this.yzv = "BONUSSPINS LEFT";
    this.one = "TOTAL BONUSSPINS";
    this.gxw = "BONUSSPINS PLAYED";
    this.hga = "BONUSSPINS LEFT";
    this.ytq = "CONGRATULATIONS YOU WIN!";
    this.fyr = "BONUS WIN";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SYMBOLS";
    this.zzt = "SYMBOL";
    this.exj = "You win extra BONUSSPINS!";
    this.aux = "Wins pay only from left to right!";
    this.xow = "BONUS ENTRY WIN:";
    this.nlr = "BONUSSPINS";
    this.yhe = "BONUSSPINS are played with the same bet and number of lines as the initiating game.";
    this.anu = "Line Wins: Only the highest line win is paid on each line played. Line wins are a multiple of the line bet. Line wins from different lines are added.";
    this.vxf = "Scatter Wins: Scatter wins are a multiple of the total bet. Wins from Scatter symbols are added to the line wins.";
    this.iwq = "BONUS HELP";
    this.qep = "SYMBOL HELP";
    this.nag = "WINLINE HELP";
    this.xej = "WINWAY HELP";
    this.sxj = "You win an extra 15 BONUSSPINS!";
    this.ewq = "Play the Bonus until you have no BONUSSPINS left. BONUSSPINS can be re-triggered during the Bonus.";
    this.aab = "GAMBLE AMOUNT";
    this.gxd = "RED/BLACK GAMBLE TO WIN";
    this.uky = "SUIT GAMBLE TO WIN";
    this.yyu = "15 BONUSSPINS are won with 3, 4 or 5 SCATTERED Symbols on any position! All BONUSSPIN wins are multiplied by 3.";
    this.ssa = "Finish placing your bets!";
    this.gki = "Place your bets please!";
    this.llt = "No more bets!";
    this.utr = "Good Luck!";
    this.pag = "Better luck next time!";
    this.lsk = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.qzw = "Bets accepted!";
    this.rxd = "Bets not accepted!";
    this.wxs = "Game in progress, please wait!";
    this.har = "WIN UP TO";
    this.njm = "WIN HISTORY";
    this.gct = "BONUS END";
    this.ika = "Bonus Multiplier";
    this.bhy = "Freespins!";
    this.cpw = "FREESPINS PLAYED";
    this.bjl = "FREESPIN WIN";
    this.nni = "CONGRATULATION!";
    this.gdh = "Congratulation, you get";
    this.wjs = "You have";
    this.irc = "freespins remaining!"
}
vdt.prototype = new vxq;

function wnp() {
    this.snl = "ЛИНИИ";
    this.lay = "ЛИНИЯ";
    this.uqc = "СТ. / ЛИНИЮ";
    this.yzv = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.one = "Бонусные вращения";
    this.gxw = "СЫГРАННО ВРАЩЕНИЙ";
    this.hga = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.ytq = "ПОЗДРАВЛЯЕМ! ВЫ ВЫИГРАЛИ!";
    this.fyr = "БОНУС ВЫИГРЫШ";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "СИМВОЛЫ";
    this.zzt = "СИМВОЛ";
    this.nlr = "призовых вращений";
    this.aux = "Все выигрыши считаются только слевa направо.";
    this.exj = "Вы выиграли дополнительные бонусные вращения!";
    this.yhe = "Ставка и количество линий в игре бонусные вращения те же самые, что и в инициировавшей игре.";
    this.anu = "Линейные выигрыши: Засчитывается только максимальный выигрыш на каждой линии. Размер линейных выигрышей – многократная сумма ставки. Линейные выигрыши на разных линиях суммируются.";
    this.vxf = "Выигрыши Scatter Сумма выигрышей Scatter – многократная сумма общей ставки. Выигрыши с символами Scatter прибавляются к линейным выигрышам.";
    this.jog = "ПУТИ";
    this.yro = "ПУТЬ";
    this.iwq = "БОНУС – ПОМОЩЬ";
    this.qep = "СИМВОЛ ПОМОЩЬ";
    this.nag = "ЛИНИИ ВЫИГРЫША ПОМОЩЬ";
    this.xej = "ПОМОЩЬ К ПУТИ К ВЫИГРЫШУ";
    this.lsk = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА";
    this.aab = "СУММА РИСКА";
    this.gxd = "РИСКНУТЬ КРАСНАЯ/ЧЕРНАЯ";
    this.uky = "ВЫБОР МАСТИ";
    this.har = "ВЫИГРАЙ ДО";
    this.njm = "ХРОНИКА ВЫИГРЫШЕЙ";
    this.gct = "КОНЕЦ БОНУСА";
    this.bhy = "бесплатных игр!";
    this.cpw = "СЫГРАННЫЕ БЕСПЛАТНЫЕ ИГРЫ";
    this.bjl = "ВЫИГРЫШ БЕСПЛАТНОЙ ИГРЫ";
    this.nni = "ПОЗДРАВЛЯЕМ!";
    this.gdh = "Поздравляем, вы получили";
    this.wjs = "У вас еще";
    this.irc = "бесплатных игр!";
    this.qzw = "Ставки признаны!";
    this.rxd = "Ставки не признаны!";
    this.wxs = "Игра в процессе, пожалуйста, подождите...";
    this.ssa = "Игра сейчас начнется!";
    this.gki = "Сделайте ставку, пожалуйста!";
    this.llt = "Ставок больше нет!";
    this.utr = "Удачи!";
    this.pag = "Желаем удачи в следующий раз!";
    this.sxj = "Вы выиграли следующие 15 призовых вращений барабанов!";
    this.ewq = "Бонус призовых вращений заканчивается когда призовых вращений больше нет. Дополнительные призовые вращения могут быть добавлены к Бонусу призовых вращений.";
    this.yyu = "Вы получите 15 призовых вращений барабанов при выпадении 3, 4 или 5 символов СКАТТЕР на любой позиции. Все выигрыши умножаются на 3."
}
wnp.prototype = new myx;

function lqr() {
    this.snl = "LÍNEAS";
    this.lay = "LÍNEA";
    this.uqc = "APUE. / LÍNEA";
    this.yzv = "BONUSSPINS RESTANTES";
    this.one = "TOTAL DE BONUSSPINS";
    this.gxw = "BONUSSPINS JUGADOS";
    this.hga = "BONUSSPINS RESTANTES";
    this.ytq = "ENHORABUENA, HAS GANADO!";
    this.fyr = "PREMIO BONUS";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SIMBOLOS";
    this.zzt = "SIMBOLO";
    this.ika = "Multiplicador de bonus";
    this.xow = "PREMIO ENTRADA BONUS:";
    this.nlr = "JUEGOS LIBRES";
    this.aux = "Premios de la izquierda a la derecha!";
    this.exj = "Ha ganado BONUSSPINS extra.";
    this.yhe = "Los BONUSSPINS se juegan con la misma apuesta y el número de lineas que el juego inicial.";
    this.anu = "Premios de línea: Sólo se paga el mayor premio de línea por cada línea jugada. Los premios de línea son un múltiplo de la apuesta de la línea. Se suman los premios de línea de las diferentes líneas.";
    this.vxf = "Premios Scatter: Los premios Scatter son múltiplos de la apuesta total. Los premios de los símbolos scatter se suman a los premios de la línea.";
    this.jog = "CAMINOS";
    this.yro = "CAMINO";
    this.iwq = "AYUDA DE BONUS";
    this.qep = "SÍMBOLO AYUDA";
    this.nag = "LÍNEA GANADORA AYUDA";
    this.xej = "AYUDA FORMAS DE PREMIO";
    this.lsk = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.aab = "PREMIO";
    this.gxd = "ROJO/NEGRO PREMIO";
    this.uky = "PREMIO DE SIMBOLO";
    this.har = "GANANCIAS HASTA";
    this.njm = "HISTORIAL DE GANANCIAS";
    this.gct = "FIN DE BONUS";
    this.bhy = "Giros gratis!";
    this.cpw = "GIROS GRATIS JUGADOS";
    this.bjl = "PREMIO GIRO GRATIS";
    this.nni = "¡ENHORABUENA!";
    this.gdh = "¡Enhorabuena, ha conseguido";
    this.wjs = "¡Le quedan";
    this.irc = "giros gratis!";
    this.qzw = "Aceptar apuestas!";
    this.rxd = "Apuestas rechazadas!";
    this.wxs = "El juego no ha concluido, por favor espere!";
    this.ssa = "El juega va a comenzar!";
    this.gki = "Haga juego!";
    this.llt = "No más apuestas!";
    this.utr = "¡Mucha suerte!";
    this.pag = "¡Mejor suerte la próxima vez!";
    this.sxj = "Premio de 15 Freespins addicionales!";
    this.ewq = "El bono concluye cuando todos los BONUSSPINS se hayan jugado. En bono pueden ganarse BONUSSPINS adicionales.";
    this.yyu = "Se gana 15 Freespins con 3, 4 o 5 simbolos de SCATTER en alguna posicion! Se triplican todos los premios de freespins."
}
lqr.prototype = new oeb;

function ais() {
    this.snl = "LINIEN";
    this.lay = "LINIE";
    this.uqc = "EINS. / LINIE";
    this.yzv = "VERBLEIBENDE BONUSSPINS";
    this.one = "TOTAL BONUSSPINS";
    this.gxw = "GESPIELTE BONUSSPINS";
    this.hga = "VERBLEIBENDE BONUSSPINS";
    this.ytq = "GRATULIERE GEWONNEN!";
    this.fyr = "BONUS GEWINN";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SYMBOLE";
    this.zzt = "SYMBOL";
    this.ika = "Bonus Multiplikator";
    this.xow = "BONUS START GEWINN:";
    this.nlr = "BONUSSPINS";
    this.aux = "Gewinne werden nur von links nach rechts gewertet!";
    this.exj = "Zusätzliche BONUSSPINS gewonnen!";
    this.yhe = "Die BONUSSPINS werden mit demselben Einsatz und Linienanzahl wie das auslösende Spiel gespielt.";
    this.anu = "Liniengewinne: Nur der höchste Liniengewinn je gespielter Linie zählt. Liniengewinne sind ein Vielfaches des Linieneinsatzes. Die Liniengewinne von verschiedenen Linien werden addiert.";
    this.vxf = "Scattergewinne: Scatter-Gewinne sind ein Vielfaches des Gesamteinsatzes. Gewinne aus Scatter-Symbolen werden den Liniengewinnen hinzugezählt.";
    this.jog = "WEGE";
    this.yro = "WEG";
    this.iwq = "BONUS HILFE";
    this.qep = "SYMBOL HILFE";
    this.nag = "GEWINNLINIEN HILFE";
    this.xej = "GEWINNWEGE HILFE";
    this.lsk = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.aab = "RISIKO";
    this.gxd = "ROT/SCHWARZ CHANCE";
    this.uky = "SYMBOL CHANCE";
    this.har = "GEWINNE BIS ZU";
    this.njm = "GEWINNHISTORIE";
    this.gct = "BONUS ENDE";
    this.bhy = "Freespins!";
    this.cpw = "GESPIELTE FREESPINS";
    this.bjl = "FREESPIN GEWINN";
    this.nni = "GRATULIERE!";
    this.gdh = "Gratulation, Sie bekommen";
    this.wjs = "Sie haben noch";
    this.irc = "Freespins übrig!";
    this.qzw = "Einsätze akzeptiert!";
    this.rxd = "Einsätze nicht akzeptiert!";
    this.wxs = "Spiel läuft, bitte warten!";
    this.ssa = "Das Spiel beginnt gleich!";
    this.gki = "Ihre Einsätze bitte!";
    this.llt = "Keine weiteren Einsätze!";
    this.utr = "Viel Glück!";
    this.pag = "Mehr Glück beim nächsten Mal!";
    this.sxj = "Weitere 15 BONUSSPINS gewonnen!";
    this.ewq = "Der Bonus endet, wenn alle BONUSSPINS abgespielt worden sind. Zusätzliche BONUSSPINS können im Bonus gewonnen werden.";
    this.yyu = "15 BONUSSPINS werden durch 3, 4 oder 5 SCATTER Symbole auf jeder Position gewonnen! Alle BONUSSPIN Gewinne x 3."
}
ais.prototype = new nxk;

function gxj() {
    this.snl = "ÇIZGILER";
    this.lay = "ÇİZGİ";
    this.uqc = "BANKO / ÇIZGI";
    this.yzv = "KALAN PRIM OYUNLARIR";
    this.one = "TOPLAM PRİM SPİNLERİ";
    this.gxw = "OYNANAN PRIM OYUNLAR";
    this.hga = "KALAN PRIM OYUNLARIR";
    this.ytq = "TEBRİKLER KAZANDINIZ!";
    this.fyr = "PRIM KAZANCI";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SEMBOLLER";
    this.zzt = "SEMBOL";
    this.ika = "Prim çarpanı";
    this.xow = "PRİM GİRİŞ KAZANCI:";
    this.nlr = "BEDAVA OYUNLAR";
    this.aux = "Kazançlar tek soldan sağa değerlendirilir!";
    this.exj = "Ek PRİM SPİN’LERİ kazandınız!";
    this.yhe = "PRİM SPİNLER başlayacak olan oyunda da aynı banko ve çizgi sayısı ile oynanacaktır.";
    this.anu = "Çizgi kazançları: Oynanan her çizginin sadece en yüksek çizgi kazancı sayılmaktadır. Çizgi kazançları çizgi bankosunun kat sayısından oluşmaktadır. Çeşitli çizgilerin çizgi kazançları birbirleri ile toplanmaktadır.";
    this.vxf = "Scatter kazançları: Scatter-kazançları toplam bankonun kat sayısından oluşmaktadır. Scatter-Sembollerinden elde edilen kazançlar çizgi kazançlarına eklenmektedir.";
    this.jog = "YOLLAR";
    this.yro = "YOL";
    this.iwq = "PRİM YARDIMI";
    this.qep = "SEMBOL YARDIMI";
    this.nag = "KAZANÇ ÇIZGISI YARDIMI";
    this.xej = "KAZANÇ YOLLARI YARDIM";
    this.lsk = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.aab = "RİSK";
    this.gxd = "KIRMIZI/SİYAH ŞANSI";
    this.uky = "SEMBOL ŞANSI";
    this.har = "KAZANANILMASI MÜMKÜN OLAN";
    this.njm = "KAZANÇ GEÇMİŞİ";
    this.gct = "PRİM BİTTİ";
    this.bhy = "adet bedava Spin kazandınız!";
    this.cpw = "OYNANILAN BEDAVA SPİN'ler";
    this.bjl = "BEDAVA SPİN KAZANCI";
    this.nni = "TEBRİKLER!";
    this.gdh = "Tebrikler,";
    this.wjs = "Daha";
    this.irc = "adet bedava SPİN'iniz bulunuyor!";
    this.utr = "Bol şans!";
    this.qzw = "Bahisler kabul edildi!";
    this.rxd = "Bahisler kabul edilmedi!";
    this.wxs = "Oyun oynanmakta, lütfen bekleyin!";
    this.ssa = "Oyun başlamak üzere!";
    this.gki = "Bankolarınız lütfen!";
    this.llt = "Daha fazla banko mümkün değil!";
    this.pag = "Bir dahaki sefer daha şanslı olursun!";
    this.sxj = "15 bedava oyun daha kazandın!";
    this.ewq = "Bedava oyun primleri tüm bedava oyunlar oynandığı zaman biter. Bedava oyun primlerinde ek bedava oyunlar kazanılabilir.";
    this.yyu = "Her pozisyondaki 3, 4 veya 5 SCATTERED sembolleri ile 15 tane bedava oyun kazanılır! Tüm bedava oyun kazançları x 3."
}
gxj.prototype = new ozy;

function bcg() {
    this.snl = "LINEK";
    this.lay = "LINKA";
    this.uqc = "SÁZKA / LINKA";
    this.yzv = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.one = "TOTÁLNÍ BONUSSPINS";
    this.gxw = "ODEHRANÉ BONUS HRY";
    this.hga = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.ytq = "GRATULUJEME VYHRÁL JSTE!";
    this.fyr = "BONUS VÝHRA";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SYMBOLY";
    this.zzt = "SYMBOL";
    this.ika = "Násobic bonusu";
    this.xow = "BONUS STARTUJE VÝHRU:";
    this.nlr = "BONUSSPINS";
    this.aux = "Výhry platí pouze z leva do prava!";
    this.exj = "Vyhrál jste extra BONUSOVOU hru!";
    this.yhe = "BONUSSPINS sa hrají se stejnou  sázkou a počtem línií jako hra, při které se spustily.";
    this.anu = "Výhry na línkách: Započítává se jen nejvyšší výhra na lince. Výhry na linkách jsou násobky linkových sázek. Výhry na různých línkách se sčítají.";
    this.vxf = "Scatter výhry: Scatter výhry násobí celkovou sázku. Výhry ze Scatter symbolů se připočítávají k výhrám na línkách.";
    this.jog = "ZPŮSOBY";
    this.yro = "ZPŮSOB";
    this.iwq = "BONUS NÁPOVĚDA";
    this.qep = "SYMBOL NÁPOVĚDA";
    this.nag = "VÝHERNÉ LINIE NÁPOVĚDA";
    this.xej = "WINWAY HELP";
    this.lsk = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.aab = "VÝHRA";
    this.gxd = "CERVENÁ/CERNÁ VÝHRA";
    this.uky = "SPRÁVNÁ BARVA KARTY VYHRÁVÁ";
    this.qzw = "Sázky byly akceptovány!";
    this.rxd = "Sázky nebyly akceptovány!";
    this.har = "VÝHRA AŽ";
    this.njm = "HISTORIE VÝHER";
    this.gct = "KONEC BONUSU";
    this.bhy = "Freespins!";
    this.cpw = "FREESPINS PLAYED";
    this.bjl = "FREESPIN WIN";
    this.nni = "GRATULUJEME!";
    this.gdh = "Congratulation, you get";
    this.wjs = "You have";
    this.irc = "freespins remaining!";
    this.wxs = "Hra probíhá, počkejte prosím!";
    this.ssa = "Hra Se Hned Spustí!";
    this.gki = "Vaše sázky prosím!";
    this.llt = "Žádné další sázky.";
    this.utr = "Hodne štestí!";
    this.pag = "Příště více štěstí!";
    this.sxj = "Vyhráváte dalších 15 volných her!";
    this.ewq = "Bonus je ukoncen po odehrání všech bonusových her. Bonusové hry mohou být získány i behem bonusu.";
    this.yyu = "3, 4 nebo 5 SCATTER symbolu na libovolné pozici vyhrává 15 volných her, výhry ve volné hre jsou násobené 3x."
}
bcg.prototype = new mmv;

function fqs() {
    this.snl = "LIINID";
    this.lay = "LIIN";
    this.uqc = "PAN. / LIINIL";
    this.yzv = "TASUTA KEERUTUSI JÄÄNUD";
    this.one = "BOONUSKEERUTUSI KOKKU";
    this.gxw = "MÄNGE MÄNGITUD";
    this.hga = "TASUTA KEERUTUSI JÄÄNUD";
    this.ytq = "PALJU ÕNNE, SA VÕITSID!";
    this.fyr = "BOONUSVÕIT";
    this.nlr = "BOONUSKEERUTUST";
    this.aab = "RISKIMÄNGU SUMMA";
    this.gxd = "PUNANE/MUST RISKIMÄNG";
    this.uky = "RISKIMÄNG SÜMBOLIGA";
    this.lsk = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.qzw = "Panused aktsepteeritud!";
    this.rxd = "Panuseid ei aktsepteeritud!";
    this.har = "VÕIDA KUNI";
    this.njm = "VÕITUDE AJALUGU";
    this.gct = "BOONUSE LÕPP";
    this.bhy = "tasuta keerutust!";
    this.cpw = "TASUTA KEERUTUSI MÄNGITUD";
    this.bjl = "TASUTA KEERUTUSE VÕIT";
    this.nni = "ÕNNITLEME!";
    this.gdh = "Õnnitleme, said";
    this.wjs = "Sul on jäänud veel";
    this.irc = "tasuta keerutust!";
    this.wxs = "Mäng algab, palun oodake...";
    this.ssa = "Lõpeta panuste tegemine!";
    this.gki = "Asetage palun panused!";
    this.llt = "Panuste tegemine lõppenud";
    this.utr = "Soovime edu!";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SÜMBOLID";
    this.zzt = "SÜMBOL";
    this.xow = "BOONUSVÕIT:";
    this.aux = "Võite arvestatakse ainult vasakult paremale!";
    this.exj = "Te võitsite lisa BOONUSKEERUTUSI!";
    this.yhe = "BOONUSKEERUTUSED mängitakse sama panuse ja liinide arvuga, nagu boonuse käivitanud mängus.";
    this.jog = "VÕIMALUSED";
    this.yro = "VÕIMALUSE";
    this.sxj = "Te võitsite lisa 15 BOONUSKEERUTUST!";
    this.ewq = "Mängige kõik tasuta keerutused lõpuni. Tasuta keerutusi võib võita ka tasuta keerutuste boonuse ajal.";
    this.iwq = "BOONUSE SPIKKER";
    this.qep = "SÜMBOLI SPIKKER";
    this.nag = "LIINIDE SPIKKER";
    this.xej = "VÕIDUVÕIMALUSE SPIKKER";
    this.anu = "Liini võidud: Igal mänguliinil makstakse ainult suurimad liinivõidud. Liini võidud korrutatakse liini panusega. Erinevate liinide võidud liidetakse kokku.";
    this.vxf = "Scatteri võidud: Scatteri võidud korrutatakse kogupanusega. Scatteri sümboli võidud liidetakse liini võitudele.";
    this.ika = "Boonuse mitmekordistaja";
    this.pag = "Rohkem õnne järgmisel korral!";
    this.yyu = "3, 4 või 5 TÄHE sümbolit juhuslikel kohtadel annab 15 BOONUSKEERUTUST! Kõik BOONUSKEERUTUSE võidud korrutatakse 3-ga."
}
fqs.prototype = new tvt;

function own() {
    this.snl = "ΓΡΑΜΜEΣ";
    this.lay = "ΓΡΑΜΜΗ";
    this.uqc = "ΣΤΟIΧΗΜΑ / Γ.";
    this.yzv = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.one = "ΤΕΛΕΙΩΣ BONUSSPINS";
    this.gxw = "ΠΑΙΓΜEΝΑ BONUSSPINS";
    this.hga = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.ytq = "ΣΥΓΧΑΡΗΤΗΡΙΑ ΚΕΡΔΙΣΑΤΕ!";
    this.fyr = "ΜΠOΝΟΥΣ ΚEΡΔΟΣ";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "ΣYΜΒΟΛΑ";
    this.zzt = "ΣΎΜΒΟΛΟ";
    this.ika = "Πολλαπλασιαστής μπόνους";
    this.xow = "BONUS START ΚΕΡΔIΖΕΙ:";
    this.nlr = "BONUSSPINS";
    this.aux = "Τα κέρδη μετρούνται από αριστερά προς τα δεξιά!";
    this.exj = "Κερδίσατε συμπληρωματικούς BONUSSPINS!";
    this.yhe = "Τα γυρίσματα μπόνους, τα BONUSSPINS, παίζονται με το ίδιο ποντάρισμα και τον ίδιο αριθμό σειρών, όπως το αρχικό παιχνίδι.";
    this.anu = "Κέρδη γραμμών: Μόνο το μεγαλύτερο κέρδος ανά παιγμένη γραμμή προσμετράται. Τα κέρδη των γραμμών αποτελούν πολλαπλάσιο του πονταρίσματος στη γραμμή. Τα κέρδη γραμμών που αφορούν σε διαφορετικές γραμμές προστίθενται.";
    this.vxf = "Κέρδη Scatter: Τα κέρδη Scatter αποτελούν πολλαπλάσιο του συνολικού πονταρίσματος. Τα κέρδη από σύμβολα Scatter προσμετρώνται στα κέρδη των γραμμών.";
    this.jog = "ΔΙΑΔΡΟΜΕΣ";
    this.yro = "ΔΙΑΔΡΟΜΉ";
    this.iwq = "BONUS ΒΟΉΘΕΙΑ";
    this.qep = "ΒΟHΘΕΙΑ ΣΥΜΒOΛΩΝ";
    this.nag = "ΒΟHΘΕΙΑ ΣΕΙΡΩΝ ΚEΡΔΟΥΣ";
    this.xej = "WINWAY ΒΟΗΘΕΙΑ";
    this.lsk = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.aab = "ΠΟΣΟ ΡΙΣΚΟΥ";
    this.gxd = "ΜΑΥΡΟ/ΚΟΚΚΙΝΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.uky = "ΣΥΜΒΟΛΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.har = "ΚΕΡΔΗ ΕΩΣ";
    this.njm = "ΙΣΤΟΡΙΚΟ ΚΕΡΔΩΝ";
    this.gct = "ΛΗΞΗ ΜΠΟΝΟΥΣ";
    this.bhy = "Freespins!";
    this.cpw = "FREESPINS ΠΟΥ ΚΑΤΑΝΑΛΏΘΗΚΑΝ";
    this.bjl = "FREESPIN ΚΕΡΔΟΣ";
    this.nni = "ΣΥΓΧΑΡΗΤΗΡΙΑ!";
    this.gdh = "Συγχαρητήρια, κερδίσατε";
    this.wjs = "Σας απομένουν";
    this.irc = "Freespins!";
    this.qzw = "Γίνονται αποδεκτά πονταρίσματα!";
    this.rxd = "Πονταρίσματα δε γίνονται αποδεκτά!";
    this.wxs = "Ενεργό παιχνίδι, παρακαλώ περιμένετε!";
    this.ssa = "Το παιχνίδι ξεκινά σε λίγο!";
    this.gki = "Το ποντάρισμα σας, παρακαλώ!";
    this.llt = "Ποντάρισμα τέλος!";
    this.utr = "Καλή τύχη!";
    this.pag = "Καλύτερη τύχη την επόμενη φορά!";
    this.sxj = "Κερδίσατε 15 συμπληρωματικούς BONUSSPINS!";
    this.ewq = "Το Bonus τελειώνει, όταν όλα τα BONUSSPINS έχουν παιχθεί. Συμπληρωματικά BONUSSPINS δύνανται να κερδισθούν στο Bonus.";
    this.yyu = "15 BONUSSPINS κερδίζονται με 3, 4 ή 5 σύμβολα ΑΣΤΡΟΥ σε κάθε θέση! Όλα τα BONUSSPINS αποφέρουν τριπλασιασμό κερδών."
}
own.prototype = new wbh;

function wua() {
    this.snl = "ЛИНИИ";
    this.lay = "ЛИНИЯ";
    this.uqc = "ЗАЛОГ/Л-Я";
    this.yzv = "БОНУС-ИГРИ ОСТАВАТ";
    this.gxw = "БОНУС-ИГРИ ИЗИГРАНИ";
    this.hga = "БОНУС-ИГРИ ОСТАВАТ";
    this.ytq = "ПОЗДРАВЛЕНИЯ, ВИЕ СПЕЧЕЛИХТЕ!";
    this.fyr = "БОНУС ПЕЧАЛБА";
    this.nlr = "БОНУС-ИГРИ";
    this.aab = "СУМА ЗА ДУБЛИРАНЕ";
    this.gxd = "ДУБЛИРАЙ ЧЕРВЕНА/ЧЕРНА-ПЕЧАЛБА";
    this.uky = "ДУБЛИРАНЕ НА КОЗОВ ЦВЯТ-ПЕЧАЛБА";
    this.lsk = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.qzw = "Залозите са приети!";
    this.rxd = "Залозите не са приети!";
    this.har = "СПЕЧЕЛИ ДО";
    this.njm = "ИСТОРИЯ НА ПЕЧАЛБИТЕ";
    this.gct = "КРАЙ НА БОНУС";
    this.bhy = "безплатни завъртания!";
    this.cpw = "ИЗИГРАНИ БЕЗПЛАТНИ ЗАВЪРТАНИЯ";
    this.bjl = "СПЕЧЕЛЕНО БЕЗПЛАТНО ЗАВЪРТАНЕ";
    this.nni = "ПОЗДРАВЛЕНИЯ!";
    this.gdh = "Поздравления, получихте";
    this.wjs = "Имате останали";
    this.irc = "безплатни завъртания!";
    this.wxs = "Затворено за залози!";
    this.ssa = "Приключете със залозите!";
    this.gki = "Поставете своите залози!";
    this.llt = "Край на залозите!";
    this.utr = "Успех!";
    this.one = "ОБЩО БОНУС ИГРИ";
    this.qzn = "СКАТЕР";
    this.kmb = "SCATTERED:";
    this.elx = "СИМВОЛИ";
    this.zzt = "СИМВОЛ";
    this.xow = "НАЧАЛНА БОНУС ПЕЧАЛБА:";
    this.aux = "Печалбите се изплащат само от ляво на дясно!";
    this.exj = "Вие спечелихте допълнителни Бонус игри!";
    this.yhe = "Бонус игрите се играят със същия залог и брой линии, както основната игра.";
    this.jog = "НАЧИНИ";
    this.yro = "НАЧИН";
    this.sxj = "Печелите допълнителни 15 БОНУС ЗАВЪРТАНИЯ!";
    this.ewq = "Бонус играта продължава до изчерпване на бонус игрите. По време на бонус игра може да се спечелят допълнителни игри.";
    this.iwq = "ПОМОЩ ЗА БОНУС";
    this.qep = "ПОМОЩ СИМВОЛ";
    this.nag = "ПОМОЩ ПЕЧЕЛИВША ЛИНИЯ";
    this.xej = "ПОМОЩ ЗА ПЕЧАЛБИ";
    this.anu = "Печалби на Линия: От всяка активна линия се изплаща само най-голямата печалба. Печалбата от активна линия се умножава по залога на линия. Печалбите от активните линии се събират и формират общата печалба.";
    this.vxf = "Скатер печалби: Скатер печалбата се умножава по общият залог. Печалбите от фигурите Скатер се добавят към печалбата от активните линии.";
    this.ika = "Бонус Множител";
    this.pag = "По-добър успех-следващият път!";
    this.yyu = "15 БОНУС ЗАВЪРТАНИЯ се печелят с 3, 4 или 5 символа ЗВЕЗДА на която и да е позиция! Всичките печалби от Бонус играта се умножават по 3."
}
wua.prototype = new jhi;

function itx() {
    this.snl = "ხაზები";
    this.lay = "ხაზი";
    this.uqc = "ფსონი / ხაზი";
    this.jog = "გზა";
    this.yro = "გზა";
    this.yzv = "დარჩენილი BONUS თამაშები";
    this.one = "BONUS თამაშების რაოდენობა ჯამში";
    this.gxw = "უკვე ნათამაშები BONUS თამაშები";
    this.hga = "დარჩენილი BONUS თამაშები";
    this.ytq = "გილოცავთ თქვენ მოიგეთ!";
    this.fyr = "BONUS მოგება";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "სიმბოლოები";
    this.zzt = "სიმბოლო";
    this.exj = "თქვენ მოიგეთ დამატებითი BONUS თამაშები!";
    this.aux = "მოგების ანაზღაურება ხდება მხოლოდ მარცხნიდან მარჯვნივ!";
    this.xow = "ბონუს ჩანაწერის მოგება:";
    this.nlr = "BONUS თამაშები";
    this.yhe = "BONUS თამაშების თამაში ხდება იგივე ფსონზე და ხაზების რაოდენობაზე, როგორც თამაშის დაწყების დროს.";
    this.anu = "ხაზის მოგება: თითოეულ ნათამაშებ ხაზზე, მოხდება მხოლოდ უმაღლესი ხაზის მოგების ანაზღაურება. ხაზის მოგება შედგება მრავალჯერადი ხაზის ფსონისაგან. სხვადასხვა ხაზიდან მიღებული მოგება ჯამდება ერთ მოგებად.";
    this.vxf = "Scatter მოგება: Scatter მოგება შეადგენს მთლიან ფსონს რამოდენიმეჯერ. მოგება Scatter სიმბოლოებიდან ემატება ხაზის მოგებას.";
    this.iwq = "ბონუს დახმარება";
    this.qep = "სიმბოლოს დახმარება";
    this.nag = "მოგების ხაზის დახმარება";
    this.xej = "მოგების გზაზე დახმარება";
    this.sxj = "თქვენ მოიგეთ დამატებითი 15 BONUS თამაშები!";
    this.ewq = "ითამაშეთ ბონუსი სანამ BONUS თამაში არ გაგითავდებათ. დამატებითი BONUS თამაშის მოგება შეიძლება ბონუსის დროს.";
    this.aab = "გარისკვის რიცხვი";
    this.gxd = "წითელი/შავი ითამაშე და მოიგე";
    this.uky = "ფერი ითამაშე და მოიგე";
    this.yyu = "15 BONUS თამაშის მოგება ხდება 3, 4 ან 5 ვარსკვლავის სიმბოლოთი ნებისმიერ პოზიციაზე! ყველა BONUSSPIN მოგება მრავლდება 3-ზე.";
    this.pag = "გისურვებთ მომავალში უკეთეს იღბალს!";
    this.ssa = "დაასრულე ფსონის დადება!";
    this.gki = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.llt = "ფსონები აღარ მიიღება!";
    this.utr = "გისურვებთ წარმატებას!";
    this.lsk = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.qzw = "ფსონები მიღებულ იქნა!";
    this.rxd = "ფსონები არ იქნა მიღებული!";
    this.gct = "ბონუსის დასასრული";
    this.har = "-მდე მოგება";
    this.njm = "მოგების ჩანაწერი";
    this.wxs = "თამაში მიმდინარეობს, გთხოვთ დაელოდოთ!";
    this.ika = "ბონუს მულტიპლიკატორი";
    this.bhy = "უფასო დატრიალება!";
    this.cpw = "ნათამაშები უფასო დატრიალებები";
    this.bjl = "უფასო დატრიალების მოგება";
    this.nni = "გილოცავთ!";
    this.gdh = "გილოცავთ, თქვენ მიიღეთ";
    this.wjs = "თქვენ დაგრჩათ";
    this.irc = "უფასო დატრიალება!"
}
itx.prototype = new kmp;

function aly() {
    this.snl = "VONALAK";
    this.lay = "VONAL";
    this.uqc = "TÉT / VONAL";
    this.jog = "IRÁNY";
    this.yro = "IRÁNY";
    this.yzv = "MEGMARADT SZABAD JÁTÉKOK";
    this.one = "ÖSSZES SZABAD JÁTÉK";
    this.gxw = "LEJÁTSZOTT SZABAD JÁTÉKOK";
    this.hga = "MEGMARADT SZABAD JÁTÉKOK";
    this.ytq = "GRATULÁLUNK, ÖN NYERT!";
    this.fyr = "BÓNUSZ NYEREMÉNY";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SZIMBÓLUMOK";
    this.zzt = "SZIMBÓLUM";
    this.exj = "További SZABADJÁTÉKOKAT nyert!";
    this.aux = "A Nyeremények balról jobbra fizetnek!";
    this.xow = "BÓNUSZBA LÉPŐ NYEREMÉNY:";
    this.nlr = "SZABAD JÁTÉKOK";
    this.yhe = "Az alapjátéknál beállított tét és nyerővonal számmal játszódik le a SZABAD JÁTÉK is.";
    this.anu = "Vonal Nyeremények: Csak a legnagyobb nyeremény fizet a megjátszott vonalakon. A vonal nyeremények a vonalankénti tét szorzatai. A különböző vonalankénti nyeremények összeadódnak.";
    this.vxf = "Scatter Nyeremények: A Scatter nyeremények az összes tét szorzatai. A Scatter szimbólummal elért nyeremények a vonal nyereményekhez adódnak.";
    this.iwq = "BÓNUSZ SÚGÓ";
    this.qep = "SZIMBÓLUM SÚGÓ";
    this.nag = "NYERŐVONAL SÚGÓ";
    this.xej = "NYEREMÉNYÚT SEGÉDLET";
    this.sxj = "További 15 SZABADJÁTÉKOT nyert!";
    this.ewq = "Játssza a szabad játék bónuszt ameddig van szabad pörgetése. Ez idő alatt újabb szabad játékokat nyerhet.";
    this.aab = "FELTETT ÖSSZEG";
    this.gxd = "PIROS/FEKETE NYEREMÉNY";
    this.uky = "SZÍN NYEREMÉNY";
    this.yyu = "15 SZABAD JÁTÉKOT nyerhet ha 3, 4 vagy 5 CSILLAG szimbólum jelenik meg bármely helyen. Minden SZABAD JÁTÉKBAN elért nyeremény háromszorosan fizet.";
    this.pag = "Több szerencsét máskor!";
    this.ssa = "Tétek lezárva!";
    this.gki = "Kérem tegyék meg tétjeiket!";
    this.llt = "A játék elkezdődött, kérem várjon!";
    this.utr = "Sok szerencsét!";
    this.lsk = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.qzw = "Tétek elfogadva!";
    this.rxd = "Nem lehet tétet rakni!";
    this.wxs = "Játék folyamatban, kérem várjon!";
    this.har = "A NYEREMÉNY AKÁR";
    this.njm = "JÁTÉK TÖRTÉNET";
    this.gct = "BÓNUSZ VÉGE";
    this.ika = "Bónusz szorzó";
    this.bhy = "szabad spint kap!";
    this.cpw = "JÁTSZOTT SZABAD SPINEK";
    this.bjl = "SZABAD SPIN NYEREMÉNY";
    this.nni = "GRATULÁLUNK!";
    this.gdh = "Gratulálunk, Ön";
    this.wjs = "";
    this.irc = "szabad spinje van még!"
}
aly.prototype = new tsw;

function kua() {
    this.snl = "LINII";
    this.lay = "LINIE";
    this.uqc = "MIZĂ / LINIE";
    this.jog = "MODURI";
    this.yro = "MOD";
    this.yzv = "BONUSSPIN RĂMAŞI";
    this.one = "TOTAL BONUSSPIN";
    this.gxw = "BONUSSPIN JUCAŢI";
    this.hga = "BONUSSPIN RĂMAŞI";
    this.ytq = "FELICITĂRI CÂŞTIGAT!";
    this.fyr = "CÂŞTIG BONUS";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SIMBOLURI";
    this.zzt = "SIMBOL";
    this.exj = "Aţi câştigat BONUSSPIN suplimentari!";
    this.aux = "Câştigurile sunt evaluate numai de la stânga la dreapta!";
    this.xow = "CÂŞTIG BONUS START:";
    this.nlr = "BONUSSPIN";
    this.yhe = "BONUSSPIN sunt jucate cu aceeaşi miză şi număr de linii ca jocul iniţial.";
    this.anu = "Câştiguri linie: Numai câştigul linie maxim pe linie jucată contează. Câştiguri linie sunt un multiplu al mizei liniei. Câştigurile linie ale diferitelor linii sunt adunate.";
    this.vxf = "Câştiguri Scatter: Câştigurile Scatter sunt un multiplu al mizei totale. Câştigurile din simbolurile Scatter sunt adăugate la câştigurile linie.";
    this.iwq = "AJUTOR BONUS";
    this.qep = "AJUTOR SIMBOL";
    this.nag = "AJUTOR LINII DE CÂŞTIG";
    this.xej = "AJUTOR CĂI DE CÂŞTIG";
    this.sxj = "Aţi câştigat 15 BONUSSPIN suplimentari!";
    this.ewq = "Bonusul este terminat când au fost jucaţi toţi BONUSSPIN. BONUSSPIN suplimentari pot fi câştigaţi la bonus.";
    this.aab = "RISC";
    this.gxd = "ŞANSA ROŞU/NEGRU";
    this.uky = "SIMBOLUL ŞANSĂ";
    this.yyu = "15 BONUSSPIN sunt câştigaţi prin 3, 4 sau 5 simboluri STEA pe fiecare poziţie! Toţi BONUSSPIN câştiguri x 3.";
    this.pag = "Mai mult noroc data viitoare!";
    this.ssa = "Jocul începe imediat!";
    this.gki = "Rugăm mizele dv.!";
    this.llt = "Nu alte mize!";
    this.utr = "Mult noroc!";
    this.lsk = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.qzw = "Pariuri acceptate!";
    this.rxd = "Pariuri neacceptate!";
    this.wxs = "Joc în derulare, vă rugăm așteptați!";
    this.har = "CÂŞTIGURI PÂNĂ LA";
    this.njm = "ISTORIC CÂŞTIG";
    this.gct = "BONUS FINAL";
    this.ika = "Bonus multiplicator";
    this.bhy = "rotiri libere!";
    this.cpw = "ROTIRI GRATUTE JUCATE";
    this.bjl = "CÂŞTIG ROTIRI LIBERE";
    this.nni = "FELICITĂRI!";
    this.gdh = "Felicitări, ai primit";
    this.wjs = "V-au rămas";
    this.irc = "rotiri gratuite!l"
}
kua.prototype = new juk;

function pfq() {
    this.snl = "LINHAS";
    this.lay = "LINHA";
    this.uqc = "APOSTA / LINHA";
    this.jog = "FORMAS";
    this.yro = "FORMA";
    this.yzv = "BONUSSPINS RESTANTES";
    this.one = "TOTAL DE BONUSSPINS";
    this.gxw = "BONUSSPINS JOGADOS";
    this.hga = "BONUSSPINS RESTANTES";
    this.ytq = "PARABÉNS, GANHOU!";
    this.fyr = "PRÉMIO BONUS";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SÍMBOLOS";
    this.zzt = "SÍMBOLO";
    this.exj = "Ganhou BONUSSPINS adicionais!";
    this.aux = "Prémios só são pagos da esquerda para a direita!";
    this.xow = "PRÉMIO ENTRADA BONUS:";
    this.nlr = "BONUSSPINS";
    this.yhe = "Os BONUSSPINS são jogados com a mesma aposta e n° de linhas que o jogo inicial.";
    this.anu = "Prémios de linha: Só conta o mais alto prémio de linha de cada linha jogada. Prémios de linha são um múltiplo da aposta de linha. Prémios de linha de diversas linhas são adicionados.";
    this.vxf = "Prémios Scatter: Prémios Scatter são múltiplos da aposta total. Prémios de símbolos Scatter são adicionados aos prémios de linha.";
    this.iwq = "AJUDA BONUS";
    this.qep = "AJUDA SÍMBOLO";
    this.nag = "AJUDA DE LINHAS VENCEDORAS";
    this.xej = "AJUDA DE FORMAS DE PRÊMIO";
    this.sxj = "Ganhou 15 BONUSSPINS adicionais!";
    this.ewq = "Jogar Bonus até não restarem mais BONUSSPINS. BONUSSPINS adicionais podem ser ganhos em Bonus.";
    this.aab = "RISCO";
    this.gxd = "VERMELHO/PRETO CHANCE DE GANHAR";
    this.uky = "CHANCE DO NAIPE";
    this.yyu = "15 BONUSSPINS são ganhos com 3, 4 ou 5 símbolos de estrelas em qualquer posição! Todos ganhos BONUSSPIN são multiplicados por 3.";
    this.ssa = "O jogo começa em breve!";
    this.gki = "Suas apostas por favor!";
    this.llt = "Nenhuma aposta mais!";
    this.utr = "Boa sorte!";
    this.lsk = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.qzw = "Apostas aceitas!";
    this.rxd = "Apostas não aceitas!";
    this.wxs = "Jogo em andamento, aguarde por favor!";
    this.har = "GANHOS ATÉ";
    this.njm = "HISTÓRICO DO GANHO";
    this.gct = "FIM BONUS";
    this.ika = "Multiplicador do bonus";
    this.pag = "Mais sorte da próxima vez!";
    this.bhy = "freespins!";
    this.cpw = "FREESPINS JOGADOS";
    this.bjl = "GANHO DE FREESPINS";
    this.nni = "PARABÉNS!";
    this.gdh = "Parabéns, ganhas";
    this.wjs = "Ainda lhe sobram";
    this.irc = "freespins!"
}
pfq.prototype = new dbj;

function qjj() {
    this.snl = "LIGNES";
    this.lay = "LIGNE";
    this.uqc = "MISE / LIGNE";
    this.jog = "CHEMINS";
    this.yro = "CHEMIN";
    this.yzv = "BONUSSPINS LAISSÉ";
    this.one = "TOTAL BONUSSPINS";
    this.gxw = "JEUX GRATUITS JOUES";
    this.hga = "BONUSSPINS LAISSÉ";
    this.ytq = "FELICITATIONS TU AS GAGNE!";
    this.fyr = "BONUS GAIN";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SYMBOLES";
    this.zzt = "SYMBOLE";
    this.exj = "Vous gagnez BONUSSPINS extra!";
    this.aux = "Victoires payer seulement de gauche à droite!";
    this.xow = "BONUS ENTRÉE WIN:";
    this.nlr = "BONUSSPINS";
    this.yhe = "Les BONUSSPINS sont joué avec la même mise et nombre des lignes comme le jeu avant.";
    this.anu = "Gains des lignes: Seulement le gain de ligne plus haut par ligne joué compté. Gains des lignes sont un multiple du mise de ligne. Les gains de lignes de lignes differents sont ajouté.";
    this.vxf = "Gains de Scatter: Gains de Scatter sont un multiple du toute mise. Gains de symboles Scatter sont ajouter á le gain des lignes.";
    this.iwq = "BONUS D'AIDE";
    this.qep = "SYMBOLE D'AIDE";
    this.nag = "WINLINE AIDE";
    this.sxj = "Vous avez gagné un supplément de 15 BONUSSPINS!";
    this.ewq = "Le Bonus se Termine une fois tous les BONUSSPINS joués. Des BONUSSPINS supplémentaires peuvent être gagnés pendant la Bonus.";
    this.aab = "RISQUE";
    this.gxd = "ROUGE/NOIR SIGNIFIE GAIN";
    this.uky = "GAIN DE SYMBOLES";
    this.yyu = "15 BONUSSPINS sont gagnés avec 3, 4 ou 5 étoiles sur toute position! Tous les gains des BONUSSPINS sont multipliés par 3.";
    this.ssa = "Le jeu va commencer tout de suite!";
    this.gki = "Faites vos jeux s'il vous plaît!";
    this.llt = "Rien ne va plus!";
    this.utr = "Bonne chance!";
    this.xej = "AIDE VOIES DE GAINS";
    this.pag = "Meilleure chance la prochaine fois!";
    this.lsk = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.qzw = "Mises acceptées!";
    this.rxd = "Mises refusées!";
    this.wxs = "Jeu en cours, merci de patienter!";
    this.har = "GAINS JUSQU'À";
    this.njm = "HISTORIQUE DE GAINS";
    this.gct = "FIN DU BONUS";
    this.ika = "Multiplicateur de bonus";
    this.bhy = "Freespins!";
    this.cpw = "FREESPINS JOUÉS";
    this.bjl = "GAIN DE FREESPIN";
    this.nni = "FÉLICITATIONS!";
    this.gdh = "Félicitations, vous recevez";
    this.wjs = "Il vous reste encore";
    this.irc = "Freespins!"
}
qjj.prototype = new skg;

function jmv() {
    this.snl = "LINIJE";
    this.lay = "LINIJI";
    this.uqc = "ULOG / LINIJI";
    this.jog = "NAČINA";
    this.yro = "NAČIN";
    this.yzv = "PREOSTALE BESPLATNE IGRE";
    this.one = "UKUPNO BESPLATNIH IGARA";
    this.gxw = "ODIGRANE BESPLATNE IGRE";
    this.hga = "PREOSTALE BESPLATNE IGRE";
    this.ytq = "ČESTITAMO, DOBILI STE!";
    this.fyr = "BONUS DOBITAK";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SIMBOLI";
    this.zzt = "SIMBOL";
    this.exj = "Dobili ste dodatne BESPLATNE IGRE!";
    this.aux = "Dobitci se isplaćuju samo sa lijeva na desno!";
    this.xow = "BONUS POČETNI DOBITAK:";
    this.nlr = "BESPLATNE IGRE";
    this.yhe = "BESPLATNE IGRE se igraju sa istim ulogom i brojem linija kao početna igra.";
    this.anu = "Linijski dobitak: Samo najveći linijski dobitak za svaku odigranu liniju se isplaćuje. Linijski dobitak je uvišestručeni linijski ulog. Linijski dobitci sa različitih linija se zbrajaju.";
    this.vxf = "Scatter dobitak: Scatter dobitak je uvišestručeni ukupni ulog. Dobitci od scatter simbola se zbrajaju sa linijskim dobitcima.";
    this.iwq = "POMOĆ ZA BONUS";
    this.qep = "POMOĆ ZA SIMBOL";
    this.nag = "POMOĆ ZA DOBITNE LINIJE";
    this.sxj = "Dobili ste dodatnih 15 BESPLATNIH IGARA!";
    this.ewq = "Bonus se završava kada su odigrane sve BESPLATNE IGRE. Dodatne BESPLATNE IGRE se mogu dobiti tijekom Bonusa.";
    this.aab = "ULAŽETE";
    this.gxd = "POGODI BOJU ZA DOBITAK OD";
    this.uky = "POGODI SIMBOL ZA DOBITAK OD";
    this.yyu = "3, 4 ili 5 simbola ZVIJEZDA na bilo kojoj poziciji osvajaju 15 BESPLATNIH IGARA! Svi dobici tijekom BESPLATNIH IGARA množe se sa 3.";
    this.ssa = "Završte ulaganje!";
    this.gki = "Molimo Vaše uloge!";
    this.llt = "Nema daljnjih uloga!";
    this.utr = "Puno sreće!";
    this.xej = "POMOĆ ZA POBJEDU";
    this.pag = "Više sreće sljedeći put!";
    this.lsk = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.qzw = "Ulozi su prihvaćeni!";
    this.rxd = "Ulozi nisu prihvaćeni!";
    this.wxs = "Igra je u tijeku, sačekajte!";
    this.har = "OSVOJI DO";
    this.njm = "POVIJEST DOBITAKA";
    this.gct = "KRAJ BESPLATNE IGRE";
    this.ika = "Bonus multiplikator";
    this.bhy = "slobodnih igara!";
    this.cpw = "ODIGRANIH SLOBODNIH IGARA";
    this.bjl = "DOBITAK U SLOBODNOJ IGRI";
    this.nni = "ČESTITAMO!";
    this.gdh = "Čestitamo, osvojili ste";
    this.wjs = "Preostalo ti je još";
    this.irc = "slobodnih igara!"
}
jmv.prototype = new hhb;

function mhf() {
    this.snl = "LINEE";
    this.lay = "LINEA";
    this.uqc = "PUNTATA / LINEA";
    this.jog = "VIE";
    this.yro = "VIA";
    this.yzv = "BONUSSPIN RIMASTI";
    this.one = "TOTALE BONUSSPIN";
    this.gxw = "BONUSSPIN GIOCATI";
    this.hga = "BONUSSPIN RIMASTI";
    this.ytq = "CONGRATULAZIONI, HAI VINTO!";
    this.fyr = "VINCITA BONUS";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SIMBOLI";
    this.zzt = "SIMBOLO";
    this.exj = "Hai vinto altri BONUSSPIN!";
    this.aux = "Le vincite sono valutate dalla sinistra alla destra soltanto!";
    this.xow = "VINCITA START BONUS:";
    this.nlr = "BONUSSPIN";
    this.yhe = "Le giocate BONUS si giocano con la stessa puntata e con lo stesso numero di linee della partita iniziale.";
    this.anu = "Vincite di linea: Soltanto la vincita di linea più alta di ogni linea conta. Le vincite di linea sono la moltiplicazione della puntata per la linea. Le vincite di linea delle diverse linee vengono sommate.";
    this.vxf = "Vincite Scatter: Le vincite Scatter sono la moltiplicazione dell'intera puntata del gioco. Le vincite dai simboli Scatter vengono sommate alle vincite di linea.";
    this.iwq = "AIUTO BONUS";
    this.qep = "AIUTO SYMBOLO";
    this.nag = "AIUTO WINLINE";
    this.sxj = "Hai vinto altri 15 BONUSSPIN!";
    this.ewq = "Il bonus termina quando tutti i BONUSSPIN sono stati giocati. Si possono vincere altri BONUSSPIN nella giocata Bonus.";
    this.aab = "IMPORTO GAMBLE";
    this.gxd = "ROSSO/NERO GAMBLE PER VINCERE";
    this.uky = "CHANCE SUIT GAMBLE";
    this.yyu = "15 BONUSSPIN si vincono con 3, 4 o 5 simboli STELLA su ogni posizione! Tutte le vincite BONUSSPIN si moltiplicano x 3.";
    this.ssa = "Completare le puntate prego!";
    this.gki = "Prego puntare!";
    this.llt = "Fine puntate!";
    this.utr = "Buona Fortuna!";
    this.xej = "AIUTO MODI DI VINCERE";
    this.pag = "La prossima volta sarai più fortunato!";
    this.lsk = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.qzw = "Puntate accettate!";
    this.rxd = "Puntate non accettate!";
    this.wxs = "Partita in corso, prego attendere!";
    this.har = "VINCITE FINO A";
    this.njm = "CRONACA DELLE VINCITE";
    this.gct = "FINE BONUS";
    this.ika = "Moltiplicatore bonus";
    this.bhy = "Freespins!";
    this.cpw = "FREESPIN GIOCATI";
    this.bjl = "VINCITA FREESPIN";
    this.nni = "CONGRATULAZIONI!";
    this.gdh = "Congratulazioni, ricevi";
    this.wjs = "Sono rimasti";
    this.irc = "freespin!"
}
mhf.prototype = new sbz;

function ocu() {
    this.snl = "LINJER";
    this.lay = "LINJE";
    this.uqc = "INSATS / LINJE";
    this.jog = "SÄTT";
    this.yro = "SÄTT";
    this.yzv = "ÅTERSTÅENDE BONUSSPINS";
    this.one = "BONUSSPINS TOTALT";
    this.gxw = "SPELADE BONUSSPINS";
    this.hga = "ÅTERSTÅENDE BONUSSPINS";
    this.ytq = "GRATTIS, DU HAR VUNNIT!";
    this.fyr = "BONUSVINST";
    this.qzn = "SCATTER";
    this.kmb = "SCATTERED:";
    this.elx = "SYMBOLER";
    this.zzt = "SYMBOL";
    this.exj = "Du har vunnit extra BONUSSPINS!";
    this.aux = "Vinster betalas endast ut från vänster till höger!";
    this.xow = "BONUSSTARTSVINST:";
    this.nlr = "BONUSSPINS";
    this.yhe = "BONUSSPINS spelas med samma insats och samma antal linjer som det spel som aktiverade bonusomgången.";
    this.anu = "Linjevinster: Endast den högsta linjevinster per spelad linje räknas. Linjevinster är en mångdubbling av linjeinsatsen. Linjevinsterna från olika linjer adderas.";
    this.vxf = "Scattervinster: Scattervinster är en mångdubbling av den totala insatsen. Vinster från scattersymboler adderas till linjevinsterna.";
    this.iwq = "HJÄLP OM BONUS";
    this.qep = "HJÄLP OM SYMBOLER";
    this.nag = "HJÄLP OM VINSTRADER";
    this.xej = "VINSTSÄTTSHJÄLP";
    this.sxj = "Du har vunnit ytterligare 15 BONUSSPINS!";
    this.ewq = "Spela ut bonusomgången tills inga BONUSSPINS återstår. Nya BONUSSPINS kan vinnas under bonusomgången.";
    this.aab = "SPELSUMMA";
    this.gxd = "SPEL OM RÖTT/SVART";
    this.uky = "SPEL OM FÄRG";
    this.yyu = "15 BONUSSPINS betalas ut för 3, 4 eller 5 SCATTER-symboler på varje position! Alla vinster från BONUSSPIN multipliceras med 3.";
    this.ssa = "Spelet har börjat!";
    this.gki = "Placera dina insatser, tack!";
    this.llt = "Inga fler insatser!";
    this.utr = "Lycka till!";
    this.pag = "Bättre lycka nästa gång!";
    this.lsk = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.qzw = "Insatserna accepterade!";
    this.rxd = "Insatserna ej accepterade!";
    this.wxs = "Spelet pågår, var vänlig vänta!";
    this.har = "VINN UPP TILL";
    this.njm = "VINSTHISTORIK";
    this.gct = "BONUSEN SLUT";
    this.ika = "Bonusmultiplikator";
    this.bhy = "gratisspinn!";
    this.cpw = "GRATISSPINN SPELADE";
    this.bjl = "GRATISSPINNSVINST";
    this.nni = "GRATTIS!";
    this.gdh = "Grattis, du har fått";
    this.wjs = "Du har";
    this.irc = "gratisspinn kvar!"
}
ocu.prototype = new rrf;

function qze() {
    this.emg = "The WILD symbol substitutes all symbols except SCATTER symbol.";
    this.cbh = "SCATTER symbol pays on any position."
}
qze.prototype = new vdt;

function byd() {
    this.emg = "Символ WILD заменяет любой другой символ, за исключением символа SCATTER.";
    this.cbh = "Символы SCATTER выигрывают в любой позиции."
}
byd.prototype = new wnp;

function rev() {
    this.emg = "El simbolo COMODIN sustituye a todos los simbolos menos al simbolo SCATTER.";
    this.cbh = "Combinación ganadora de símbolos SCATTER paga en cualquier posición."
}
rev.prototype = new lqr;

function rnw() {
    this.emg = "Das WILD Symbol ersetzt alle Symbole, ausgenommen ist das SCATTER Symbol.";
    this.cbh = "SCATTER Symbole gewinnen auf jeder Position."
}
rnw.prototype = new ais;

function kek() {
    this.emg = "WILD sembolü SCATTER sembolü dışında tüm sembollerin yerine geçer.";
    this.cbh = "SCATTER sembolleri her pozisyonda kazanır."
}
kek.prototype = new gxj;

function diz() {
    this.emg = "WILD symbol nahrazuje všechny symboly s výjimkou symbolu SCATTER.";
    this.cbh = "SCATTER symbol vyhrává v libovolné pozici."
}
diz.prototype = new bcg;

function otz() {
    this.emg = "WILD sümbol asendab kõiki sümboleid, välja arvatud SCATTER sümbol.";
    this.cbh = "SCATTER sümbol maksab igas positsioonis."
}
otz.prototype = new fqs;

function yqy() {
    this.emg = "Το σύμβολο WILD υποκαθιστά όλα τα σύμβολα, εκτός από το σύμβολο SCATTER.";
    this.cbh = "Τα SCATTER σύμβολα κερδίζουν σε κάθε θέση."
}
yqy.prototype = new own;

function kbw() {
    this.emg = "Символът WILD замества всички символи, освен СКАТЕР.";
    this.cbh = "Символът SCATTER се изплаща на всяка позиция."
}
kbw.prototype = new wua;

function vop() {
    this.emg = "WILD სიმბოლო ანაცვლებს ყველა სიმბოლოს SCATTER სიმბოლოს გარდა.";
    this.cbh = "SCATTER სიმბოლო მოგებას ანაზღაურებს ნებისმიერ პოზიციაზე."
}
vop.prototype = new itx;

function csr() {
    this.emg = "A WILD minden szimbólumot helyettesít, kivéve a SCATTER szimbólumot.";
    this.cbh = "A SCATTER szimbólum minden helyen fizet."
}
csr.prototype = new aly;

function are() {
    this.emg = "Simbolul WILD înlocuieşte oricare alt simbol, cu excepţia simbolului SCATTER.";
    this.cbh = "Simbolurile SCATTER câştigă pe fiecare poziţie."
}
are.prototype = new kua;

function wjl() {
    this.emg = "O símbolo WILD substitui qualquer outro símbolo, exceto do símbolo SCATTER.";
    this.cbh = "Símbolos SCATTER ganham em cada posição."
}
wjl.prototype = new pfq;

function wvy() {
    this.emg = "Le symbole WILD substitue tout symbole exception faite le symbole SCATTER.";
    this.cbh = "SCATTER symbole paie sur n'importe quelle position."
}
wvy.prototype = new qjj;

function rkq() {
    this.emg = "Simbol WILD zamjenjuje svaki drugi simbol, osim simbola SCATTER.";
    this.cbh = "SCATTER simboli dobivaju na bilo kojoj poziciji."
}
rkq.prototype = new jmv;

function dfw() {
    this.emg = "Il simbolo WILD sostituisce ogni altro simbolo, tranne il simbolo SCATTER";
    this.cbh = "I simboli SCATTER vincono su ogni posizione."
}
dfw.prototype = new mhf;

function wxj() {
    this.emg = "WILD-symbolen ersätter alla andra symboler utom SCATTER-symbolen.";
    this.cbh = "SCATTER-symbolen ger vinst på varje position."
}
wxj.prototype = new ocu;

function ucj() {
    this.bbh = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.khg = {
        backgroundColor: "rgb(0,0,0)",
        tho: "rgba(0,0,0,0.3)"
    };
    this.fzq = {
        font: "arial",
        akl: "bold",
        backgroundColor: "black",
        seo: "rgb(0,100,10)",
        xtn: "rgb(80,255,100)",
        ifa: "rgb(120,120,120)",
        ipt: "red",
        ejy: "white",
        pze: null
    };
    this.crk = {
        font: "arial",
        akl: "bold",
        backgroundColor: "rgb(0,0,0)",
        wgg: null,
        rmc: "rgb(255,255,255)",
        fbc: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.jik = {
        font: "arial",
        akl: "bold",
        backgroundColor: "black",
        zxb: "rgb(50,50,50)",
        jup: "rgb(255,255,255)",
        rmc: "white",
        oqs: 0.8,
        kml: {
            fsa: {
                font: "sanf-serif",
                akl: "",
                textAlign: "center",
                hfa: "round",
                backgroundColor: "black",
                rmc: "white",
                borderColor: null,
                fbc: null,
                mnl: 1
            }
        }
    };
    this.zmo = {
        font: "arial",
        akl: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        vdy: "rgba(255,255,255,0.2)",
        rmc: "rgb(255,255,255)",
        cua: "rgba(0,0,0,0.3)",
        display: {
            fmk: "arial",
            bgc: "arial",
            akl: "bold",
            rmc: "rgb(255,255,255)",
            iyh: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        fsa: {
            font: "arial",
            akl: "bold",
            rmc: "rgb(0,0,0)",
            ydl: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            wgg: "rgba(255,255,255,1)",
            wgy: "rgba(255,255,255,0.8)",
            gol: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            hfa: "rect",
            peq: -1
        }
    };
    this.fdd = {
        font: "arial",
        akl: "bold",
        eya: "rgb(0,0,200)",
        dzt: "rgb(255,255,255)",
        vjp: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        yzl: "rgb(180,220,255)",
        rjw: "rgb(10,20,25)",
        moq: "rgb(130,220,255)",
        wqb: "rgb(130,190,255)",
        rmc: "rgb(255,255,255)",
        toq: "rgb(130,190,255)",
        esx: "rgb(100,160,255)",
        kmm: "rgb(255,255,255)",
        fsa: {
            hfa: "rect",
            font: "arial",
            akl: "bold",
            rmc: "rgb(255,255,255)",
            bfy: null,
            backgroundColor: "rgb(90,160,255)",
            ypp: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            fbc: "rgb(40,80,140)"
        },
        dky: {
            hfa: "round",
            font: "arial",
            akl: "bold",
            rmc: "rgb(255,255,255)",
            bfy: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            ypp: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            fbc: "rgb(40,80,140)"
        }
    };
    this.afm = {};
    this.lzp = {
        wqi: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.fem = {
        type: "left",
        font: "arial",
        akl: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        wgg: null,
        borderColor: "rgb(0,0,0)",
        fbc: "rgb(180,180,180)",
        yzl: "rgba(0,0,0,0.6)",
        ypy: null,
        iyh: "rgb(255,200,0)",
        rmc: "white",
        zcx: {
            font: "arial",
            akl: "bold",
            backgroundColor: "rgb(100,100,100)",
            wgg: "rgb(100,100,100)",
            wgy: null,
            gol: null,
            borderColor: "rgb(100,100,100)",
            rmc: "rgb(255,255,255)",
            ydl: "rgb(255,200,0)",
            hfa: "triangle",
            peq: 1
        },
        noz: {
            font: "arial",
            akl: "bold",
            backgroundColor: "rgb(100,100,100)",
            wgg: "rgb(100,100,100)",
            wgy: null,
            gol: null,
            borderColor: "rgb(100,100,100)",
            rmc: "rgb(255,255,255)",
            ydl: "rgb(255,200,0)",
            hfa: "triangle",
            peq: 0
        },
        gcl: {
            font: "arial",
            akl: "bold",
            backgroundColor: "rgb(100,100,100)",
            wgg: "rgb(15,15,15)",
            wgy: "rgb(100,100,100)",
            gol: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            rmc: "rgb(255,255,255)",
            ydl: "rgb(255,200,0)",
            hfa: "rect",
            peq: -1
        },
        display: {
            bgc: "sans-serif",
            fmk: "sans-serif",
            akl: "bold",
            iyh: null,
            rmc: "yellow",
            borderColor: "rgb(100,100,100)",
            fbc: null,
            backgroundColor: "black"
        },
        quw: {
            font: "arial",
            akl: "bold",
            backgroundColor: null,
            wgg: null,
            rmc: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.rdr = {
        font: "arial",
        akl: "bold",
        backgroundColor: "rgb(180,180,180)",
        wgg: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        fbc: "rgb(30,30,30)",
        rmc: "white",
        utd: {
            font: "arial",
            akl: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            wgg: null,
            wgy: "rgba(100,100,100,0.5)",
            gol: null,
            borderColor: null,
            rmc: "white",
            hfa: "rect",
            peq: -1
        },
        zcx: {
            font: "arial",
            akl: "bold",
            backgroundColor: "rgb(255,255,255)",
            wgg: "rgb(255,255,255)",
            wgy: null,
            gol: null,
            borderColor: "rgb(255,255,255)",
            rmc: "rgb(0,0,0)",
            ydl: "rgb(0,0,0)",
            hfa: "triangle",
            peq: 1
        },
        noz: {
            font: "arial",
            akl: "bold",
            backgroundColor: "rgb(255,255,255)",
            wgg: "rgb(255,255,255)",
            wgy: null,
            gol: null,
            borderColor: "rgb(255,255,255)",
            rmc: "rgb(0,0,0)",
            ydl: "rgb(0,0,0)",
            hfa: "triangle",
            peq: 0
        },
        zto: {
            hfa: "rect",
            font: "arial",
            akl: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            rmc: "white",
            mnl: 1,
            borderColor: "rgb(255,255,255)",
            fbc: "rgb(220,220,220)"
        },
        display: {
            bgc: "sans-serif",
            fmk: "sans-serif",
            akl: "bold",
            iyh: null,
            rmc: "white",
            borderColor: "white",
            fbc: null,
            backgroundColor: "rgb(0,0,0)"
        },
        quw: {
            font: "arial",
            akl: "bold",
            backgroundColor: null,
            wgg: null,
            rmc: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.jof = {
        zzw: [{
            bgc: "sans-serif",
            qkz: "sans-serif",
            akl: "bold",
            iyh: "rgb(236,225,207)",
            kau: "rgb(214,170,102)",
            bfy: "rgb(245,220,148)",
            fes: "rgb(190,137,40)",
            ebb: "rgba(150,120,30,0.3)",
            borderColor: "rgb(150,110,30)",
            fbc: "rgb(200,170,50)",
            backgroundColor: "rgb(100,70,30)",
            wgg: "rgb(0,0,0)",
            prq: "rgb(0,0,0)"
        }, {
            bgc: "sans-serif",
            qkz: "sans-serif",
            akl: "bold",
            iyh: "rgb(230,230,230)",
            kau: "rgb(190,190,190)",
            bfy: "rgb(240,240,240)",
            fes: "rgb(160,160,160)",
            ebb: "rgba(120,120,120,0.3)",
            borderColor: "rgb(120,120,120)",
            fbc: "rgb(170,170,170)",
            backgroundColor: "rgb(100,100,100)",
            wgg: "rgb(0,0,0)",
            prq: "rgb(0,0,0)"
        }],
        cmt: {
            bgc: "sans-serif",
            qkz: "sans-serif",
            akl: "bold",
            iyh: "rgb(236,225,207)",
            kau: "rgb(214,170,102)",
            bfy: "rgb(245,220,148)",
            fes: "rgb(190,137,40)",
            ebb: null,
            borderColor: null,
            fbc: null,
            backgroundColor: null,
            wgg: null,
            prq: null
        },
        xxv: {}
    };
    this.zyi = {
        lnf: "rgb(240,240,240)",
        xak: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        cua: "rgba(0,80,150,0.6)",
        display: {
            fmk: "arial",
            bgc: "arial",
            akl: "bold",
            rmc: "rgb(0,80,151)",
            iyh: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function kla() {
    this.khg.eyr = false;
    this.khg.gdc = false;
    this.tcm = {
        display: {
            fmk: "sans-serif",
            bgc: "sans-serif",
            akl: "bold",
            backgroundColor: "black",
            rmc: "rgb(255,255,50)",
            iyh: "rgb(255,255,50)",
            borderColor: "rgb(230,230,230)",
            fbc: "rgb(160,160,160)"
        },
        hzp: {
            fmk: "sans-serif",
            bgc: "sans-serif",
            akl: "bold",
            backgroundColor: "rgba(0,0,0,0.8)",
            rmc: "rgb(255,255,50)",
            iyh: "rgb(255,255,50)",
            borderColor: null,
            fbc: null
        },
        xoz: {
            fmk: "arial",
            bgc: "arial",
            akl: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            rmc: "white",
            iyh: "white",
            borderColor: null,
            fbc: null
        },
        giq: {
            font: "arial",
            akl: "bold",
            backgroundColor: "rgb(230,230,230)",
            wgg: null,
            wgy: null,
            gol: null,
            borderColor: "rgb(230,230,230)",
            rmc: "rgb(0,0,0)",
            ydl: "rgb(0,0,0)",
            hfa: "rrect",
            peq: 3
        },
        sgb: {
            font: "sans-serif",
            akl: "bold",
            rmc: "rgb(255,255,50)",
            backgroundColor: "black",
            borderColor: null,
            fbc: null
        },
        kml: {
            backgroundColor: null,
            wgg: null,
            yzl: "rgb(0,0,0)",
            rjw: "rgb(0,0,0)",
            muq: null,
            fxm: 0.5,
            fsa: {
                hfa: "rect",
                font: "verdana",
                akl: "bold",
                backgroundColor: "rgb(0,0,0)",
                ypp: "rgb(150,150,150)",
                rmc: "rgb(255,255,255)",
                bfy: "rgb(255,255,0)",
                borderColor: "rgb(150,150,150)",
                fbc: "rgb(0,0,0)"
            },
            msh: {
                hfa: "round",
                font: "verdana",
                akl: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                ypp: "rgba(150,150,150,0.5)",
                rmc: "rgb(255,255,255)",
                bfy: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                fbc: "rgb(100,100,100)"
            },
            pdc: {
                hfa: "round",
                font: "verdana",
                akl: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                ypp: "rgba(150,150,150,0.5)",
                rmc: "rgb(255,255,255)",
                bfy: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                fbc: "rgb(100,100,100)"
            },
            csm: {
                hfa: "rect",
                font: "verdana",
                akl: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                ypp: "rgba(150,150,150,0.5)",
                rmc: "rgba(255,255,255,0.8)",
                bfy: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                fbc: "rgb(100,100,100)"
            },
            gvt: {
                hfa: "rect",
                font: "verdana",
                akl: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                ypp: "rgba(150,150,150,0.5)",
                rmc: "rgba(255,255,255,0.8)",
                bfy: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                fbc: "rgb(100,100,100)"
            },
            uck: {
                font: "verdana",
                akl: "bold",
                backgroundColor: "rgb(75, 5, 5)",
                borderColor: null,
                rmc: "rgb(255, 255, 50)"
            },
            win: {
                font: "helvetica",
                akl: "bold",
                backgroundColor: null,
                borderColor: null,
                rmc: "rgb(240, 231, 203)"
            }
        }
    };
    this.jzz = {
        backgroundColor: null,
        yzl: "rgb(0,0,0)",
        rjw: "rgb(0,0,0)",
        display: {
            fmk: "sans-serif",
            bgc: "sans-serif",
            akl: "bold",
            backgroundColor: "black",
            rmc: "yellow",
            iyh: "yellow",
            borderColor: "rgb(230,230,230)",
            fbc: "rgb(160,160,160)"
        },
        xoz: {
            fmk: "arial",
            bgc: "arial",
            akl: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            rmc: "white",
            iyh: "white",
            borderColor: null,
            fbc: null
        },
        mcz: {
            fmk: "verdana",
            bgc: "verdana",
            akl: "bold",
            iyh: "white",
            rmc: "yellow"
        },
        fsa: {
            hfa: "rect",
            font: "verdana",
            akl: "bold",
            backgroundColor: "rgb(0,0,0)",
            ypp: "rgb(150,150,150)",
            rmc: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            fbc: "rgb(0,0,0)"
        },
        msh: {
            hfa: "round",
            font: "verdana",
            akl: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            ypp: "rgba(150,150,150,0.5)",
            rmc: "rgb(255,255,255)",
            bfy: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            fbc: "rgb(100,100,100)"
        },
        pdc: {
            hfa: "round",
            font: "verdana",
            akl: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            ypp: "rgba(150,150,150,0.5)",
            rmc: "rgb(255,255,255)",
            bfy: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            fbc: "rgb(100,100,100)"
        },
        uck: {
            font: "verdana",
            akl: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            rmc: "rgb(255, 255, 0)"
        }
    };
    this.hwg = {
        backgroundColor: null,
        yzl: "rgb(0,0,0)",
        rjw: "rgb(0,0,0)",
        fsa: {
            hfa: "rect",
            font: "verdana",
            akl: "bold",
            backgroundColor: "rgb(0,0,0)",
            ypp: "rgb(150,150,150)",
            rmc: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            fbc: "rgb(0,0,0)"
        },
        msh: {
            hfa: "round",
            font: "verdana",
            akl: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            ypp: "rgba(150,150,150,0.5)",
            rmc: "rgb(255,255,255)",
            bfy: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            fbc: "rgb(100,100,100)"
        },
        pdc: {
            hfa: "round",
            font: "verdana",
            akl: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            ypp: "rgba(150,150,150,0.5)",
            rmc: "rgb(255,255,255)",
            bfy: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            fbc: "rgb(100,100,100)"
        }
    };
    this.tiz = {
        oqs: 0,
        muq: "rgba(0,0,0,0)",
        lax: "rgba(0,0,0,0.5)"
    };
    this.crs = {
        nay: "rgb(255,0,0)",
        jup: "rgb(255,255,0)",
        laq: "white",
        xqu: null,
        rhc: 0,
        dyh: 0.05,
        ead: [{
            wnu: "rgb(180,180,30)",
            fmt: "rgb(255,220,0)",
            opm: "rgb(180,180,30)",
            klm: "rgb(255,255,0)"
        }, {
            wnu: "rgb(210,110,0)",
            fmt: "rgb(255,168,0)",
            opm: "rgb(210,110,0)",
            klm: "rgb(255,210,50)"
        }, {
            wnu: "rgb(0,50,180)",
            fmt: "rgb(0,68,220)",
            opm: "rgb(0,50,180)",
            klm: "rgb(0,100,255)"
        }, {
            wnu: "rgb(0,160,64)",
            fmt: "rgb(0,200,80)",
            opm: "rgb(0,160,64)",
            klm: "rgb(0,255,70)"
        }, {
            wnu: "rgb(140,30,140)",
            fmt: "rgb(200,0,200)",
            opm: "rgb(140,30,140)",
            klm: "rgb(255,30,255)"
        }, {
            wnu: "rgb(180,180,30)",
            fmt: "rgb(255,220,0)",
            opm: "rgb(180,180,30)",
            klm: "rgb(255,255,0)"
        }, {
            wnu: "rgba(200,200,50,0.7)",
            fmt: "rgba(255,255,150,0.7)",
            opm: "rgba(200,200,50,0.7)",
            klm: "rgba(255,255,150,0.7)"
        }]
    };
    this.mqj = {
        font: "sans-serif",
        akl: "bold",
        mqt: "red",
        ocb: "orange",
        zxb: "white"
    };
    this.nux = {
        font: "sans-serif",
        akl: "bold",
        mqt: "red",
        ocb: "orange",
        zxb: "white"
    };
    this.mht = {
        font: "sans-serif",
        akl: "bold",
        rmc: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        pml: "rgb(0,0,0)",
        izh: "rgb(255,0,0)",
        hlr: "rgb(255,255,0)",
        tag: "rgb(80,80,80)",
        tir: "rgb(15,15,15)",
        xiw: "rgb(0,0,0)",
        dxx: "rgb(180,180,180)",
        smm: "rgb(0,0,0)",
        lfb: 0.7
    }
}
kla.prototype = new ucj;

function exh() {
    this.khg.gdc = true;
    this.tcm.sgb.backgroundColor = "rgb(80, 0, 55)";
    this.tcm.sgb.borderColor = "rgb(70, 0, 50)";
    this.tcm.kml.uck.backgroundColor = "rgb(80, 0, 55)";
    this.tcm.kml.uck.borderColor = "rgb(70, 0, 50)";
    this.tcm.kml.fsa.backgroundColor = "rgb(88, 2, 65)";
    this.tcm.kml.fsa.ypp = "rgb(180,0,160)";
    this.tcm.kml.fsa.borderColor = "rgb(100, 0, 70)";
    this.tcm.kml.fsa.fbc = "rgb(30, 0, 10)";
    this.tcm.kml.csm.backgroundColor = "rgba(50,0,30,0.5)";
    this.tcm.kml.csm.ypp = "rgba(240,0,170,0.8)";
    this.tcm.kml.csm.borderColor = "rgb(240,0,170)";
    this.tcm.kml.csm.fbc = "rgb(90,0,60)";
    this.tcm.kml.gvt.backgroundColor = "rgba(50,0,30,0.5)";
    this.tcm.kml.gvt.ypp = "rgba(240,0,170,0.8)";
    this.tcm.kml.gvt.borderColor = "rgb(240,0,170)";
    this.tcm.kml.gvt.fbc = "rgb(90,0,60)";
    this.tcm.kml.msh.backgroundColor = "rgba(50,0,30,0.5)";
    this.tcm.kml.msh.ypp = "rgba(240,0,170,0.8)";
    this.tcm.kml.msh.borderColor = "rgb(240,0,170)";
    this.tcm.kml.msh.fbc = "rgb(90,0,60)";
    this.tcm.kml.pdc.backgroundColor = "rgba(50,0,30,0.5)";
    this.tcm.kml.pdc.ypp = "rgba(240,0,170,0.8)";
    this.tcm.kml.pdc.borderColor = "rgb(240,0,170)";
    this.tcm.kml.pdc.fbc = "rgb(90,0,60)";
    this.jzz.yzl = "rgb(95,10,75)";
    this.jzz.rjw = "rgb(30,0,20)";
    this.jzz.uck.backgroundColor = "rgb(88, 2, 65)";
    this.jzz.fsa.backgroundColor = "rgb(88, 2, 65)";
    this.jzz.fsa.borderColor = "rgb(100, 0, 70)";
    this.jzz.fsa.fbc = "rgb(30, 0, 10)";
    this.jzz.msh.backgroundColor = "rgba(50,0,30,0.5)";
    this.jzz.msh.borderColor = "rgb(240,0,170)";
    this.jzz.msh.fbc = "rgb(90,0,60)";
    this.jzz.pdc.backgroundColor = "rgba(50,0,30,0.5)";
    this.jzz.pdc.borderColor = "rgb(240,0,170)";
    this.jzz.pdc.fbc = "rgb(90,0,60)";
    this.hwg.yzl = "rgb(95,10,75)";
    this.hwg.rjw = "rgb(30,0,20)";
    this.hwg.fsa.backgroundColor = "rgb(88, 2, 65)";
    this.hwg.fsa.borderColor = "rgb(100, 0, 70)";
    this.hwg.fsa.fbc = "rgb(30, 0, 10)";
    this.hwg.msh.backgroundColor = "rgba(50,0,30,0.5)";
    this.hwg.msh.borderColor = "rgb(200,0,150)";
    this.hwg.msh.fbc = "rgb(90,0,60)";
    this.hwg.pdc.backgroundColor = "rgba(50,0,30,0.5)";
    this.hwg.pdc.borderColor = "rgb(200,0,150)";
    this.hwg.pdc.fbc = "rgb(90,0,60)";
    this.hwg.esb = {
        font: "sans-serif",
        bgc: "verdana",
        iyh: "white",
        akl: "bold",
        rmc: "yellow"
    };
    this.hwg.duv = {
        font: "sans-serif",
        akl: "bold",
        rmc: "yellow",
        zfp: "sans-serif",
        jcv: "verdana",
        bab: "bold",
        bgw: "white",
        yjg: "white"
    };
    this.jik.kml.fsa.backgroundColor = "rgb(88, 2, 65)";
    this.tiz.muq = "rgba(0,0,0,0.35)";
    this.crs = {
        nay: "rgb(255,70,255)",
        jup: "rgb(255,200,0)",
        laq: "rgb(255,255,255)",
        xqu: null,
        rhc: 0,
        dyh: 0.05,
        ead: [{
            wnu: "rgb(100,0,0)",
            fmt: "rgb(180,0,0)",
            opm: "rgb(100,0,0)",
            klm: "rgb(255,0,0)"
        }, {
            wnu: "rgb(0,0,100)",
            fmt: "rgb(0,0,180)",
            opm: "rgb(0,0,100)",
            klm: "rgb(0,0,255)"
        }, {
            wnu: "rgb(0,100,0)",
            fmt: "rgb(0,180,0)",
            opm: "rgb(0,100,0)",
            klm: "rgb(0,255,0)"
        }, {
            wnu: "rgb(130,130,0)",
            fmt: "rgb(200,200,0)",
            opm: "rgb(130,130,0)",
            klm: "rgb(255,255,0)"
        }, {
            wnu: "rgb(70,0,120)",
            fmt: "rgb(130,0,200)",
            opm: "rgb(70,0,120)",
            klm: "rgb(160,0,255)"
        }, {
            wnu: "rgb(15,85,95)",
            fmt: "rgb(30,145,165)",
            opm: "rgb(15,85,95)",
            klm: "rgb(40,220,255)"
        }, {
            wnu: "rgb(100,5,50)",
            fmt: "rgb(180,10,80)",
            opm: "rgb(100,5,50)",
            klm: "rgb(255,15,120)"
        }, {
            wnu: "rgb(0,65,130)",
            fmt: "rgb(0,100,190)",
            opm: "rgb(0,65,130)",
            klm: "rgb(0,130,255)"
        }, {
            wnu: "rgb(170,110,0)",
            fmt: "rgb(210,135,0)",
            opm: "rgb(170,110,0)",
            klm: "rgb(255,165,0)"
        }, {
            wnu: "rgb(70,110,20)",
            fmt: "rgb(120,180,30)",
            opm: "rgb(70,110,20)",
            klm: "rgb(170,255,45)"
        }, {
            wnu: "rgb(0,95,150)",
            fmt: "rgb(0,130,210)",
            opm: "rgb(0,95,150)",
            klm: "rgb(0,160,255)"
        }, {
            wnu: "rgb(100,40,130)",
            fmt: "rgb(150,60,190)",
            opm: "rgb(100,40,130)",
            klm: "rgb(210,80,255)"
        }, {
            wnu: "rgb(160,130,0)",
            fmt: "rgb(220,185,0)",
            opm: "rgb(160,130,0)",
            klm: "rgb(255,220,30)"
        }, {
            wnu: "rgb(0,140,140)",
            fmt: "rgb(0,200,200)",
            opm: "rgb(0,140,140)",
            klm: "rgb(0,255,255)"
        }, {
            wnu: "rgb(140,50,0)",
            fmt: "rgb(200,70,0)",
            opm: "rgb(140,50,0)",
            klm: "rgb(255,100,0)"
        }, {
            wnu: "rgb(140,0,100)",
            fmt: "rgb(200,0,140)",
            opm: "rgb(140,0,100)",
            klm: "rgb(255,0,180)"
        }, {
            wnu: "rgb(90,110,135)",
            fmt: "rgb(125,150,185)",
            opm: "rgb(90,10,135)",
            klm: "rgb(170,205,255)"
        }, {
            wnu: "rgb(120,40,0)",
            fmt: "rgb(180,70,0)",
            opm: "rgb(120,40,0)",
            klm: "rgb(255,90,0)"
        }, {
            wnu: "rgb(140,140,80)",
            fmt: "rgb(200,200,110)",
            opm: "rgb(140,140,80)",
            klm: "rgb(255,255,140)"
        }, {
            wnu: "rgb(0,100,40)",
            fmt: "rgb(0,150,50)",
            opm: "rgb(0,100,40)",
            klm: "rgb(0,240,90)"
        }, {
            wnu: "rgb(100,0,0)",
            fmt: "rgb(180,0,0)",
            opm: "rgb(100,0,0)",
            klm: "rgb(255,0,0)"
        }, {
            wnu: "rgba(200,200,50,0.7)",
            fmt: "rgba(255,255,150,0.7)",
            opm: "rgba(200,200,50,0.7)",
            klm: "rgba(255,255,150,0.7)"
        }]
    };
    this.rdr.backgroundColor = "rgb(140,30,120)";
    this.rdr.wgg = "rgb(90,20,70)"
}
exh.prototype = new kla;

function iju() {
    this.type = "800_600";
    this.ulr = true;
    this.jmk = false;
    this.xns = false;
    this.ryc = true;
    this.vfk = false;
    this.bzg = false;
    this.tpq = false;
    this.awz = false
}

function kuj() {
    this.ulr = false;
    this.canvas = {
        eqf: new xop(0, 0, 800, 620)
    };
    this.yis = {
        eqf: new xop(),
        jyt: 0
    };
    this.khg = {
        eqf: new xop(0, 20, 800, 600),
        dkv: 0
    };
    this.cvi = {
        ien: new xop(0, 40, 440, 36),
        izc: new xop(5, 2, 140, 30),
        esz: new xop(150, 2, 140, 30),
        thi: new xop(295, 2, 140, 30),
        gsh: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.fzq = {
        khg: {
            eqf: new xop(0, 0, 500, 360),
            tkr: new xop(0, 0, 500, 360),
            wkh: new xop(5, 325, 490, 30),
            stn: new xop(5, 329, 490, 14),
            axj: new xop(50, 345, 400, 6),
            ich: new xop(5, 285, 490, 70),
            fontSize: 14,
            suc: 18,
            kfu: 5,
            pfx: 12,
            xpn: 5,
            edt: 2,
            wng: 0,
            crs: {
                eqf: new xop(),
                x: 0,
                toz: 0,
                sbl: 0
            },
            qfl: {
                tkr: new xop(),
                stn: new xop(),
                pcy: new xop()
            }
        },
        vsg: {
            eqf: new xop(0, 0, 800, 600),
            tkr: new xop(140, 105, 520, 390),
            wkh: new xop(),
            stn: new xop(140, 295, 520, 21),
            axj: new xop(192, 320, 416, 3),
            ich: new xop(140, 275, 520, 95),
            fontSize: 18,
            suc: 24,
            kfu: 0,
            pfx: 12,
            xpn: 7,
            edt: 3,
            wng: 9,
            crs: {
                eqf: new xop(400, 459, 0, 3),
                x: 33,
                toz: 15,
                sbl: 20
            },
            qfl: {
                tkr: new xop(50, 0, 700, 450),
                stn: new xop(100, 460, 600, 60),
                pcy: new xop(200, 540, 400, 40)
            }
        },
        hsp: {
            eqf: new xop(0, 0, 800, 600),
            tkr: new xop(0, 0, 800, 600),
            wkh: new xop(),
            stn: new xop(50, 420, 700, 21),
            axj: new xop(),
            ich: new xop(50, 410, 700, 80),
            fontSize: 18,
            suc: 24,
            kfu: 0,
            pfx: 12,
            xpn: 7,
            edt: 0,
            wng: 0,
            crs: {
                eqf: new xop(260, 119, 280, 280),
                x: 0,
                toz: 0,
                sbl: 0
            },
            qfl: {
                tkr: new xop(50, 0, 700, 450),
                stn: new xop(100, 460, 600, 60),
                pcy: new xop(200, 540, 400, 40)
            }
        }
    };
    this.crk = {
        eqf: new xop(0, 0, 800, 20),
        fontSize: 12,
        afn: 19,
        fzh: 15,
        xnb: 120,
        pfx: 2,
        xpn: 2,
        czc: 2,
        awm: 40
    };
    this.jik = {
        eqf: new xop(0, 20, 800, 70),
        fontSize: 10,
        aan: 10,
        sdm: 20,
        liq: 40,
        dkv: 4,
        pfx: 10,
        xpn: 5,
        kfu: 10,
        gsh: {
            fontSize: 17,
            kfu: 2
        }
    };
    this.fdd = {
        eqf: new xop(0, 20, 800, 600),
        ien: new xop(),
        gsh: {
            fjp: 20,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 8,
            xfq: 8,
            dkv: 0
        },
        waf: new xop(0, 20, 800, 40),
        bux: new xop(0, 100, 800, 40),
        hrp: new xop(0, 140, 800, 40),
        zfh: new xop(0, 180, 800, 40),
        esi: new xop(225, 275, 350, 100),
        kgw: new xop(200, 480, 400, 40),
        wmu: {
            ldo: new xop(340, 540, 120, 55)
        },
        pky: {
            ldo: new xop(250, 540, 120, 55),
            ivf: new xop(430, 540, 120, 55)
        },
        tri: 36,
        fontSize: 30,
        cgl: 22,
        xpn: 3,
        pfx: 5,
        dkv: 2,
        cpg: 3,
        wqa: 10
    };
    this.afm = {
        eqf: new xop(-10, 25, 310, 50),
        waf: new xop(10, 4, 240, 24),
        stn: new xop(10, 28, 240, 18),
        zcm: new xop(260, 10, 40, 30),
        wlw: new xop(7, 2, 26, 26),
        hqm: 16,
        fjp: 12,
        jzy: 18
    };
    this.lzp = {
        eqf: new xop(150, 160, 500, 280),
        hqm: 26,
        fontSize: 20,
        lhd: new xop(465, 5, 30, 30),
        waf: new xop(30, 5, 440, 30),
        kgw: new xop(20, 40, 460, 160),
        ats: new xop(20, 230, 460, 40),
        gsh: {
            fontSize: 20
        }
    };
    this.fem = {
        eqf: new xop(0, 55, 560, 430),
        dkv: 2,
        aay: 0,
        dcb: 5,
        cpy: 10,
        hqm: 26,
        pnq: 20,
        waf: new xop(30, 15, 500, 30),
        bjf: new xop(20, 50, 520, 60),
        wqv: new xop(40, 60, 220, 40),
        rlk: new xop(328, 60, 30, 40),
        ufb: new xop(360, 60, 120, 40),
        hwo: new xop(482, 60, 30, 40),
        jxx: new xop(20, 120, 520, 200),
        akn: new xop(40, 120, 480, 40),
        yap: new xop(30, 160, 280, 40),
        xba: new xop(328, 160, 30, 40),
        ipf: new xop(360, 160, 120, 40),
        sen: new xop(482, 160, 30, 40),
        iyp: new xop(30, 215, 280, 40),
        qxp: new xop(328, 215, 30, 40),
        vmx: new xop(360, 215, 120, 40),
        pqz: new xop(482, 215, 30, 40),
        aum: new xop(30, 270, 280, 40),
        ghw: new xop(328, 270, 30, 40),
        dvq: new xop(360, 270, 120, 40),
        saj: new xop(482, 270, 30, 40),
        wkh: new xop(30, 330, 500, 30),
        ivs: new xop(210, 370, 140, 50),
        xyt: new xop(),
        quw: {
            stn: new xop(40, 0, 240, 40),
            izy: new xop(7, 12, 16, 16),
            fontSize: 20,
            vqi: 0,
            dkv: 2
        },
        noz: {
            vqi: 3,
            pfx: -5,
            xpn: -1,
            xfq: 6,
            fontSize: 20,
            dkv: 0
        },
        zcx: {
            vqi: 3,
            pfx: 5,
            xpn: 0,
            xfq: 6,
            fontSize: 20,
            dkv: 0
        },
        gcl: {
            vqi: 6,
            pfx: 0,
            xpn: 0,
            xfq: 6,
            fontSize: 26,
            dkv: 2
        },
        display: {
            hqm: 16,
            fjp: 24,
            zyt: 0,
            igy: 0,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        }
    };
    this.jof = {
        eqf: [new xop(2, 20, 130, 46), new xop(668, 20, 130, 46)],
        display: {
            eod: new xop(6, 16, 118, 22),
            hqm: 14,
            pim: 20,
            zyt: -11,
            ilu: 10,
            kfu: 8,
            dkv: 3,
            hsy: 0,
            afu: 4
        },
        cmt: {
            eqf: new xop(50, 130, 700, 300),
            eod: new xop(),
            hqm: 66,
            pim: 150,
            zyt: -90,
            ilu: 60,
            kfu: 10,
            dkv: 0,
            hsy: 0,
            afu: 0
        },
        xxv: {
            eqf: new xop(38, 80, 724, 369),
            tkb: new xop(100, 53, 525, 50),
            eod: new xop(186, 153, 332, 94),
            pgh: 340,
            isa: 30,
            ijr: {
                _0: new xop(2, 0, 90, 94),
                _1: new xop(98, 0, 90, 94),
                _2: new xop(194, 0, 90, 94),
                _3: new xop(290, 0, 90, 94),
                _4: new xop(386, 0, 90, 94),
                _5: new xop(482, 0, 90, 94),
                _6: new xop(578, 0, 90, 94),
                _7: new xop(674, 0, 90, 94),
                _8: new xop(770, 0, 90, 94),
                _9: new xop(866, 0, 90, 94),
                _cm: new xop(962, 0, 28, 94),
                _dt: new xop(999, 0, 28, 94),
                _sp: new xop(1036, 0, 28, 94)
            }
        }
    }
}
kuj.prototype = new iju;

function fqc() {
    this.jmk = true
}
fqc.prototype = new kuj;

function fwh() {
    this.vfk = true;
    this.xns = true;
    this.ulr = false;
    this.jmk = true;
    this.canvas = {
        eqf: new xop(0, 0, 800, 1165)
    };
    this.yis = {
        eqf: new xop(),
        jyt: 0
    };
    this.khg = {
        eqf: new xop(0, 550, 800, 615),
        dkv: 10
    };
    this.cvi = {
        ien: new xop(0, 330, 440, 36),
        izc: new xop(5, 2, 140, 30),
        esz: new xop(150, 2, 140, 30),
        thi: new xop(295, 2, 140, 30),
        gsh: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.fzq = {
        khg: {
            eqf: new xop(0, 0, 500, 360),
            tkr: new xop(0, 0, 500, 360),
            wkh: new xop(5, 325, 490, 30),
            stn: new xop(5, 329, 490, 14),
            axj: new xop(50, 345, 400, 6),
            ich: new xop(5, 285, 490, 70),
            fontSize: 14,
            suc: 18,
            kfu: 5,
            pfx: 12,
            xpn: 5,
            edt: 2,
            wng: 0,
            crs: {
                eqf: new xop(),
                x: 0,
                toz: 0,
                sbl: 0
            },
            qfl: {
                tkr: new xop(),
                stn: new xop(),
                pcy: new xop()
            }
        },
        vsg: {
            eqf: new xop(0, 0, 800, 600),
            tkr: new xop(100, 75, 600, 450),
            wkh: new xop(),
            stn: new xop(100, 295, 600, 24),
            axj: new xop(160, 325, 480, 3),
            ich: new xop(100, 265, 600, 115),
            fontSize: 21,
            suc: 26,
            kfu: 0,
            pfx: 12,
            xpn: 8,
            edt: 3,
            wng: 10,
            crs: {
                eqf: new xop(400, 484, 0, 3),
                x: 38,
                toz: 17,
                sbl: 23
            },
            qfl: {
                tkr: new xop(50, 0, 700, 450),
                stn: new xop(100, 460, 600, 60),
                pcy: new xop(200, 540, 400, 40)
            }
        },
        hsp: {
            eqf: new xop(0, 0, 800, 600),
            tkr: new xop(0, 0, 800, 600),
            wkh: new xop(),
            stn: new xop(50, 420, 700, 21),
            axj: new xop(),
            ich: new xop(50, 410, 700, 80),
            fontSize: 18,
            suc: 24,
            kfu: 0,
            pfx: 12,
            xpn: 7,
            edt: 0,
            wng: 0,
            crs: {
                eqf: new xop(260, 119, 280, 280),
                x: 0,
                toz: 0,
                sbl: 0
            },
            qfl: {
                tkr: new xop(50, 0, 700, 450),
                stn: new xop(100, 460, 600, 60),
                pcy: new xop(200, 540, 400, 40)
            }
        }
    };
    this.top = {
        eqf: new xop(0, 20, 800, 520)
    };
    this.crk = {
        eqf: new xop(0, 0, 800, 20),
        fontSize: 12,
        afn: 19,
        fzh: 15,
        xnb: 120,
        pfx: 2,
        xpn: 2,
        czc: 2,
        awm: 60
    };
    this.jik = {
        eqf: new xop(0, 20, 800, 70),
        fontSize: 10,
        aan: 10,
        sdm: 20,
        liq: 40,
        dkv: 4,
        pfx: 10,
        xpn: 5,
        kfu: 10,
        gsh: {
            fontSize: 17,
            kfu: 2
        }
    };
    this.fdd = {
        eqf: new xop(0, 550, 800, 615),
        ien: new xop(),
        gsh: {
            fjp: 26,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 10,
            xfq: 10,
            dkv: 2
        },
        waf: new xop(0, 20, 800, 40),
        bux: new xop(0, 100, 800, 40),
        hrp: new xop(0, 140, 800, 40),
        zfh: new xop(0, 180, 800, 40),
        esi: new xop(225, 275, 350, 100),
        kgw: new xop(200, 480, 400, 40),
        wmu: {
            ldo: new xop(340, 540, 120, 68)
        },
        pky: {
            ldo: new xop(250, 540, 120, 68),
            ivf: new xop(430, 540, 120, 68)
        },
        tri: 36,
        fontSize: 30,
        cgl: 22,
        xpn: 3,
        pfx: 5,
        dkv: 2,
        cpg: 3,
        wqa: 10,
    };
    this.afm = {
        eqf: new xop(-10, 545, 310, 50),
        waf: new xop(10, 4, 240, 24),
        stn: new xop(10, 28, 240, 18),
        zcm: new xop(260, 10, 40, 30),
        wlw: new xop(7, 2, 26, 26),
        hqm: 16,
        fjp: 12,
        jzy: 18
    };
    this.lzp = {
        eqf: new xop(150, 690, 500, 280),
        hqm: 26,
        fontSize: 20,
        lhd: new xop(465, 5, 30, 30),
        waf: new xop(30, 5, 440, 40),
        kgw: new xop(20, 40, 460, 160),
        ats: new xop(20, 230, 460, 40),
        gsh: {
            fontSize: 20
        }
    };
    this.fem = {
        eqf: new xop(0, 585, 560, 430),
        dkv: 2,
        aay: 0,
        dcb: 5,
        cpy: 10,
        hqm: 26,
        pnq: 20,
        waf: new xop(30, 15, 500, 30),
        bjf: new xop(20, 50, 520, 60),
        wqv: new xop(40, 60, 220, 40),
        rlk: new xop(328, 60, 30, 40),
        ufb: new xop(360, 60, 120, 40),
        hwo: new xop(482, 60, 30, 40),
        jxx: new xop(20, 120, 520, 200),
        akn: new xop(40, 120, 480, 40),
        yap: new xop(30, 160, 280, 40),
        xba: new xop(328, 160, 30, 40),
        ipf: new xop(360, 160, 120, 40),
        sen: new xop(482, 160, 30, 40),
        iyp: new xop(30, 215, 280, 40),
        qxp: new xop(328, 215, 30, 40),
        vmx: new xop(360, 215, 120, 40),
        pqz: new xop(482, 215, 30, 40),
        aum: new xop(30, 270, 280, 40),
        ghw: new xop(328, 270, 30, 40),
        dvq: new xop(360, 270, 120, 40),
        saj: new xop(482, 270, 30, 40),
        wkh: new xop(30, 330, 500, 30),
        ivs: new xop(210, 370, 140, 50),
        xyt: new xop(),
        quw: {
            stn: new xop(40, 0, 240, 40),
            izy: new xop(7, 12, 16, 16),
            fontSize: 20,
            vqi: 0,
            dkv: 2
        },
        noz: {
            vqi: 3,
            pfx: -5,
            xpn: -1,
            xfq: 6,
            fontSize: 20,
            dkv: 0
        },
        zcx: {
            vqi: 3,
            pfx: 5,
            xpn: 0,
            xfq: 6,
            fontSize: 20,
            dkv: 0
        },
        gcl: {
            vqi: 6,
            pfx: 0,
            xpn: 0,
            xfq: 6,
            fontSize: 26,
            dkv: 2
        },
        display: {
            hqm: 16,
            fjp: 24,
            zyt: 0,
            igy: 0,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        }
    };
    this.jof = {
        eqf: [new xop(2, 550, 130, 46), new xop(668, 550, 130, 46)],
        display: {
            eod: new xop(6, 16, 118, 23),
            hqm: 14,
            pim: 20,
            zyt: -11,
            ilu: 10,
            kfu: 8,
            dkv: 3,
            hsy: 0,
            afu: 4
        },
        cmt: {
            eqf: new xop(50, 660, 700, 300),
            eod: new xop(),
            hqm: 66,
            pim: 150,
            zyt: -90,
            ilu: 60,
            kfu: 10,
            dkv: 0,
            hsy: 0,
            afu: 0
        },
        xxv: {
            eqf: new xop(38, 610, 724, 369),
            tkb: new xop(100, 53, 525, 50),
            eod: new xop(186, 153, 332, 94),
            pgh: 360,
            isa: 30,
            ijr: {
                _0: new xop(2, 0, 90, 94),
                _1: new xop(98, 0, 90, 94),
                _2: new xop(194, 0, 90, 94),
                _3: new xop(290, 0, 90, 94),
                _4: new xop(386, 0, 90, 94),
                _5: new xop(482, 0, 90, 94),
                _6: new xop(578, 0, 90, 94),
                _7: new xop(674, 0, 90, 94),
                _8: new xop(770, 0, 90, 94),
                _9: new xop(866, 0, 90, 94),
                _cm: new xop(962, 0, 28, 94),
                _dt: new xop(999, 0, 28, 94),
                _sp: new xop(1036, 0, 28, 94)
            }
        }
    }
}
fwh.prototype = new iju;

function fde() {
    this.xns = true;
    this.canvas = {
        eqf: new xop(0, 0, 810, 625)
    };
    this.yis = {
        eqf: new xop(),
        jyt: 0
    };
    this.khg = {
        eqf: new xop(5, 20, 800, 600),
        dkv: 20
    };
    this.cvi = {
        ien: new xop(5, 40, 440, 36),
        izc: new xop(5, 2, 140, 30),
        esz: new xop(150, 2, 140, 30),
        thi: new xop(295, 2, 140, 30),
        gsh: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.fzq = {
        khg: {
            eqf: new xop(0, 0, 500, 360),
            tkr: new xop(0, 0, 500, 360),
            wkh: new xop(5, 325, 490, 30),
            stn: new xop(5, 329, 490, 14),
            axj: new xop(50, 345, 400, 6),
            ich: new xop(5, 285, 490, 70),
            fontSize: 14,
            suc: 18,
            kfu: 5,
            pfx: 12,
            xpn: 5,
            edt: 2,
            wng: 0,
            crs: {
                eqf: new xop(),
                x: 0,
                toz: 0,
                sbl: 0
            },
            qfl: {
                tkr: new xop(),
                stn: new xop(),
                pcy: new xop()
            }
        },
        vsg: {
            eqf: new xop(0, 0, 800, 600),
            tkr: new xop(140, 105, 520, 390),
            wkh: new xop(),
            stn: new xop(140, 295, 520, 21),
            axj: new xop(192, 320, 416, 3),
            ich: new xop(140, 275, 520, 95),
            fontSize: 18,
            suc: 24,
            kfu: 0,
            pfx: 12,
            xpn: 7,
            edt: 3,
            wng: 9,
            crs: {
                eqf: new xop(400, 459, 0, 3),
                x: 33,
                toz: 15,
                sbl: 20
            },
            qfl: {
                tkr: new xop(50, 0, 700, 450),
                stn: new xop(100, 460, 600, 60),
                pcy: new xop(200, 540, 400, 40)
            }
        },
        hsp: {
            eqf: new xop(0, 0, 800, 600),
            tkr: new xop(0, 0, 800, 600),
            wkh: new xop(),
            stn: new xop(50, 420, 700, 21),
            axj: new xop(),
            ich: new xop(50, 410, 700, 80),
            fontSize: 18,
            suc: 24,
            kfu: 0,
            pfx: 12,
            xpn: 7,
            edt: 0,
            wng: 0,
            crs: {
                eqf: new xop(260, 119, 280, 280),
                x: 0,
                toz: 0,
                sbl: 0
            },
            qfl: {
                tkr: new xop(50, 0, 700, 450),
                stn: new xop(100, 460, 600, 60),
                pcy: new xop(200, 540, 400, 40)
            }
        }
    };
    this.crk = {
        eqf: new xop(5, 0, 800, 20),
        fontSize: 12,
        afn: 19,
        fzh: 15,
        xnb: 120,
        pfx: 2,
        xpn: 2,
        czc: 2,
        awm: 40
    };
    this.jik = {
        eqf: new xop(5, 20, 800, 70),
        fontSize: 10,
        aan: 10,
        sdm: 20,
        liq: 40,
        dkv: 4,
        pfx: 10,
        xpn: 5,
        kfu: 10,
        gsh: {
            fontSize: 17,
            kfu: 2
        }
    };
    this.fdd = {
        eqf: new xop(5, 20, 800, 600),
        ien: new xop(),
        gsh: {
            fjp: 20,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 8,
            xfq: 8,
            dkv: 2
        },
        waf: new xop(0, 20, 800, 40),
        bux: new xop(0, 100, 800, 40),
        hrp: new xop(0, 140, 800, 40),
        zfh: new xop(0, 180, 800, 40),
        esi: new xop(225, 275, 350, 100),
        kgw: new xop(200, 480, 400, 40),
        wmu: {
            ldo: new xop(340, 540, 120, 55)
        },
        pky: {
            ldo: new xop(250, 540, 120, 55),
            ivf: new xop(430, 540, 120, 55)
        },
        tri: 36,
        fontSize: 30,
        cgl: 22,
        xpn: 3,
        pfx: 5,
        dkv: 2,
        cpg: 3,
        wqa: 10
    };
    this.afm = {
        eqf: new xop(-10, 25, 310, 50),
        waf: new xop(10, 4, 240, 24),
        stn: new xop(10, 28, 240, 18),
        zcm: new xop(260, 10, 40, 30),
        wlw: new xop(7, 2, 26, 26),
        hqm: 16,
        fjp: 12,
        jzy: 18
    };
    this.lzp = {
        eqf: new xop(155, 160, 500, 280),
        hqm: 26,
        fontSize: 20,
        lhd: new xop(465, 5, 30, 30),
        waf: new xop(30, 5, 440, 40),
        kgw: new xop(20, 40, 460, 160),
        ats: new xop(20, 230, 460, 40),
        gsh: {
            fontSize: 20
        }
    };
    this.fem = {
        eqf: new xop(5, 55, 560, 430),
        dkv: 2,
        aay: 0,
        dcb: 5,
        cpy: 10,
        hqm: 26,
        pnq: 20,
        waf: new xop(30, 15, 500, 30),
        bjf: new xop(20, 50, 520, 60),
        wqv: new xop(40, 60, 220, 40),
        rlk: new xop(328, 60, 30, 40),
        ufb: new xop(360, 60, 120, 40),
        hwo: new xop(482, 60, 30, 40),
        jxx: new xop(20, 120, 520, 200),
        akn: new xop(40, 120, 480, 40),
        yap: new xop(30, 160, 280, 40),
        xba: new xop(328, 160, 30, 40),
        ipf: new xop(360, 160, 120, 40),
        sen: new xop(482, 160, 30, 40),
        iyp: new xop(30, 215, 280, 40),
        qxp: new xop(328, 215, 30, 40),
        vmx: new xop(360, 215, 120, 40),
        pqz: new xop(482, 215, 30, 40),
        aum: new xop(30, 270, 280, 40),
        ghw: new xop(328, 270, 30, 40),
        dvq: new xop(360, 270, 120, 40),
        saj: new xop(482, 270, 30, 40),
        wkh: new xop(30, 330, 500, 30),
        ivs: new xop(210, 370, 140, 50),
        xyt: new xop(),
        quw: {
            stn: new xop(40, 0, 240, 40),
            izy: new xop(7, 12, 16, 16),
            fontSize: 20,
            vqi: 0,
            dkv: 2
        },
        noz: {
            vqi: 3,
            pfx: -5,
            xpn: -1,
            xfq: 6,
            fontSize: 20,
            dkv: 0
        },
        zcx: {
            vqi: 3,
            pfx: 5,
            xpn: 0,
            xfq: 6,
            fontSize: 20,
            dkv: 0
        },
        gcl: {
            vqi: 6,
            pfx: 0,
            xpn: 0,
            xfq: 6,
            fontSize: 26,
            dkv: 2
        },
        display: {
            hqm: 16,
            fjp: 24,
            zyt: 0,
            igy: 0,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        }
    };
    this.jof = {
        eqf: [new xop(7, 20, 130, 46), new xop(673, 20, 130, 46)],
        display: {
            eod: new xop(6, 16, 118, 22),
            hqm: 14,
            pim: 20,
            zyt: -11,
            ilu: 10,
            dkv: 3,
            kfu: 8,
            hsy: 0,
            afu: 4
        },
        cmt: {
            eqf: new xop(55, 130, 700, 300),
            eod: new xop(),
            hqm: 66,
            pim: 150,
            zyt: -90,
            ilu: 60,
            kfu: 10,
            dkv: 0,
            hsy: 0,
            afu: 0
        },
        xxv: {
            eqf: new xop(43, 80, 724, 369),
            tkb: new xop(100, 53, 525, 50),
            eod: new xop(186, 153, 332, 94),
            pgh: 340,
            isa: 30,
            ijr: {
                _0: new xop(2, 0, 90, 94),
                _1: new xop(98, 0, 90, 94),
                _2: new xop(194, 0, 90, 94),
                _3: new xop(290, 0, 90, 94),
                _4: new xop(386, 0, 90, 94),
                _5: new xop(482, 0, 90, 94),
                _6: new xop(578, 0, 90, 94),
                _7: new xop(674, 0, 90, 94),
                _8: new xop(770, 0, 90, 94),
                _9: new xop(866, 0, 90, 94),
                _cm: new xop(962, 0, 28, 94),
                _dt: new xop(999, 0, 28, 94),
                _sp: new xop(1036, 0, 28, 94)
            }
        }
    }
}
fde.prototype = new iju;

function mmr() {
    this.jmk = true
}
mmr.prototype = new fde;

function lii() {
    this.ulr = false;
    this.bzg = true;
    this.ryc = false;
    this.tpq = true;
    this.awz = true;
    this.canvas = {
        eqf: new xop(0, 0, 960, 600)
    };
    this.yis = {
        eqf: new xop(),
        jyt: 0,
        jco: 0
    };
    this.khg = {
        eqf: new xop(0, 0, 800, 600),
        dkv: 0
    };
    this.cvi = {
        ien: new xop(0, 25, 470, 36),
        izc: new xop(5, 2, 150, 30),
        esz: new xop(160, 2, 150, 30),
        thi: new xop(315, 2, 150, 30),
        gsh: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.fzq = {
        khg: {
            eqf: new xop(0, 0, 640, 460),
            tkr: new xop(0, 0, 640, 460),
            wkh: new xop(6, 416, 628, 38),
            stn: new xop(6, 420, 628, 17),
            axj: new xop(64, 442, 512, 7),
            ich: new xop(6, 364, 628, 90),
            fontSize: 18,
            suc: 20,
            kfu: 6,
            pfx: 12,
            xpn: 6,
            edt: 3,
            wng: 0,
            crs: {
                eqf: new xop(),
                x: 0,
                toz: 0,
                sbl: 0
            },
            qfl: {
                tkr: new xop(),
                stn: new xop(),
                pcy: new xop()
            }
        },
        vsg: {
            eqf: new xop(0, 0, 800, 600),
            tkr: new xop(100, 75, 600, 450),
            wkh: new xop(),
            stn: new xop(100, 295, 600, 24),
            axj: new xop(160, 325, 480, 3),
            ich: new xop(100, 265, 600, 115),
            fontSize: 21,
            suc: 26,
            kfu: 0,
            pfx: 12,
            xpn: 8,
            edt: 3,
            wng: 10,
            crs: {
                eqf: new xop(400, 484, 0, 3),
                x: 38,
                toz: 17,
                sbl: 23
            },
            qfl: {
                tkr: new xop(50, 0, 700, 450),
                stn: new xop(100, 430, 600, 60),
                pcy: new xop(200, 510, 400, 40)
            }
        },
        hsp: {
            eqf: new xop(0, 0, 800, 600),
            tkr: new xop(0, 0, 800, 600),
            wkh: new xop(),
            stn: new xop(50, 420, 700, 21),
            axj: new xop(),
            ich: new xop(50, 410, 700, 80),
            fontSize: 18,
            suc: 24,
            kfu: 0,
            pfx: 12,
            xpn: 7,
            edt: 0,
            wng: 0,
            crs: {
                eqf: new xop(260, 119, 280, 280),
                x: 0,
                toz: 0,
                sbl: 0
            },
            qfl: {
                tkr: new xop(50, 0, 700, 450),
                stn: new xop(100, 460, 600, 60),
                pcy: new xop(200, 540, 400, 40)
            }
        }
    };
    this.crk = {};
    this.jik = {};
    this.fdd = {
        eqf: new xop(0, 0, 960, 600),
        ien: new xop(800, 0, 160, 600),
        gsh: {
            fjp: 0,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            xfq: 8,
            vqi: 16,
            dkv: 4
        },
        waf: new xop(0, 20, 800, 40),
        bux: new xop(0, 100, 800, 40),
        hrp: new xop(0, 140, 800, 40),
        zfh: new xop(0, 180, 800, 40),
        esi: new xop(225, 275, 350, 100),
        kgw: new xop(200, 480, 400, 40),
        wmu: {
            ldo: new xop(815, 410, 130, 130),
        },
        pky: {
            ldo: new xop(815, 310, 130, 130),
            ivf: new xop(815, 120, 130, 130)
        },
        tri: 36,
        fontSize: 30,
        cgl: 22,
        xpn: 3,
        pfx: 5,
        dkv: 2,
        cpg: 3,
        wqa: 10
    };
    this.rdr = {
        eqf: new xop(0, 0, 960, 600),
        dkv: 0,
        vqi: 0,
        clm: 50,
        fpo: 30,
        pnq: 30,
        qqh: new xop(70, 170, 470, 70),
        myf: new xop(560, 170, 60, 70),
        lmv: new xop(622, 170, 210, 70),
        vip: new xop(834, 170, 60, 70),
        cuf: new xop(70, 310, 470, 70),
        cqm: new xop(560, 310, 60, 70),
        alp: new xop(622, 310, 210, 70),
        aip: new xop(834, 310, 60, 70),
        khl: new xop(70, 450, 470, 70),
        mhw: new xop(622, 450, 210, 70),
        hzw: new xop(90, 530, 780, 50),
        wqv: new xop(80, 120, 470, 60),
        rlk: new xop(570, 120, 50, 60),
        ufb: new xop(622, 120, 210, 60),
        hwo: new xop(834, 120, 50, 60),
        tgo: new xop(90, 200, 780, 70),
        yap: new xop(80, 280, 470, 60),
        xba: new xop(570, 280, 50, 60),
        ipf: new xop(622, 280, 210, 60),
        sen: new xop(834, 280, 50, 60),
        iyp: new xop(80, 360, 470, 60),
        qxp: new xop(570, 360, 50, 60),
        vmx: new xop(622, 360, 210, 60),
        pqz: new xop(834, 360, 50, 60),
        aum: new xop(80, 440, 470, 60),
        ghw: new xop(570, 440, 50, 60),
        dvq: new xop(622, 440, 210, 60),
        saj: new xop(834, 440, 50, 60),
        wkh: new xop(90, 530, 780, 50),
        ylk: {
            swc: new xop(0, 10, 240, 90),
            nar: new xop(240, 10, 240, 90),
            yfd: new xop(480, 10, 240, 90),
            npo: new xop(720, 10, 240, 90)
        },
        mxs: {
            swc: new xop(0, 10, 192, 90),
            pbd: new xop(192, 10, 192, 90),
            nar: new xop(384, 10, 192, 90),
            yfd: new xop(576, 10, 192, 90),
            npo: new xop(768, 10, 192, 90)
        },
        gpv: [new xop(190, 205, 200, 160), new xop(570, 205, 200, 160)],
        zrg: [new xop(90, 205, 200, 160), new xop(380, 205, 200, 160), new xop(670, 205, 200, 160)],
        ozg: [new xop(190, 130, 200, 160), new xop(570, 130, 200, 160), new xop(190, 360, 200, 160), new xop(570, 360, 200, 160)],
        joh: [new xop(90, 130, 200, 160), new xop(380, 130, 200, 160), new xop(670, 130, 200, 160), new xop(90, 360, 200, 160), new xop(380, 360, 200, 160), new xop(670, 360, 200, 160)],
        noz: {
            vqi: 3,
            pfx: -10,
            xpn: -1,
            xfq: 6,
            fontSize: 36,
            dkv: 0,
        },
        zcx: {
            vqi: 3,
            pfx: 10,
            xpn: -1,
            xfq: 6,
            fontSize: 36,
            dkv: 0,
        },
        utd: {
            fontSize: 36,
            pfx: 0,
            xpn: 0,
            xfq: 10,
            vqi: 0,
            dkv: 0
        },
        zto: {
            fontSize: 26,
            kfu: 5,
            vqi: 26,
            dkv: 4,
            tqa: 40
        },
        fbd: {
            hqm: 16,
            fjp: 40,
            zyt: 0,
            igy: 0,
            dkv: 2,
            kfu: 3
        },
        prr: {
            hqm: 16,
            fjp: 40,
            zyt: 0,
            igy: 0,
            dkv: 2,
            kfu: 3
        },
        quw: {
            stn: new xop(50, 0, 360, 60),
            izy: new xop(0, 13, 30, 30),
            fontSize: 30,
            vqi: 0,
            dkv: 2
        }
    };
    this.afm = {
        eqf: new xop(-10, 5, 310, 60),
        waf: new xop(10, 6, 240, 26),
        stn: new xop(10, 34, 240, 20),
        zcm: new xop(255, 11, 50, 38),
        wlw: new xop(8, 2, 34, 34),
        hqm: 16,
        fjp: 12,
        jzy: 24
    };
    this.lzp = {
        eqf: new xop(200, 135, 560, 330),
        hqm: 26,
        fontSize: 20,
        lhd: new xop(515, 5, 40, 40),
        waf: new xop(40, 0, 480, 30),
        kgw: new xop(20, 40, 520, 195),
        ats: new xop(20, 265, 520, 54),
        gsh: {
            fontSize: 20
        }
    };
    this.jof = {
        eqf: [new xop(2, 0, 130, 46), new xop(668, 0, 130, 46)],
        display: {
            eod: new xop(6, 16, 118, 23),
            hqm: 14,
            pim: 20,
            zyt: -11,
            ilu: 10,
            kfu: 8,
            dkv: 3,
            hsy: 0,
            afu: 4
        },
        cmt: {
            eqf: new xop(50, 110, 700, 300),
            eod: new xop(),
            hqm: 66,
            pim: 150,
            zyt: -90,
            ilu: 60,
            kfu: 10,
            dkv: 0,
            hsy: 0,
            afu: 0
        },
        xxv: {
            eqf: new xop(38, 60, 724, 369),
            tkb: new xop(100, 53, 525, 50),
            eod: new xop(186, 153, 332, 94),
            pgh: 340,
            isa: 30,
            ijr: {
                _0: new xop(2, 0, 90, 94),
                _1: new xop(98, 0, 90, 94),
                _2: new xop(194, 0, 90, 94),
                _3: new xop(290, 0, 90, 94),
                _4: new xop(386, 0, 90, 94),
                _5: new xop(482, 0, 90, 94),
                _6: new xop(578, 0, 90, 94),
                _7: new xop(674, 0, 90, 94),
                _8: new xop(770, 0, 90, 94),
                _9: new xop(866, 0, 90, 94),
                _cm: new xop(962, 0, 28, 94),
                _dt: new xop(999, 0, 28, 94),
                _sp: new xop(1036, 0, 28, 94)
            }
        }
    }
}
lii.prototype = new iju;

function qal() {
    this.ulr = false;
    this.bzg = true;
    this.ryc = false;
    this.tpq = true;
    this.awz = true;
    this.canvas = {
        eqf: new xop(0, 0, 960, 600)
    };
    this.yis = {
        eqf: new xop(),
        jyt: 0,
        jco: 0
    };
    this.khg = {
        eqf: new xop(160, 0, 800, 600),
        dkv: 0
    };
    this.cvi = {
        ien: new xop(490, 25, 470, 36),
        izc: new xop(5, 4, 150, 30),
        esz: new xop(160, 4, 150, 30),
        thi: new xop(315, 4, 150, 30),
        gsh: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.fzq = {
        khg: {
            eqf: new xop(0, 0, 640, 460),
            tkr: new xop(0, 0, 640, 460),
            wkh: new xop(6, 416, 628, 38),
            stn: new xop(6, 420, 628, 17),
            axj: new xop(64, 442, 512, 7),
            ich: new xop(6, 364, 628, 90),
            fontSize: 18,
            suc: 20,
            kfu: 6,
            pfx: 12,
            xpn: 6,
            edt: 3,
            wng: 0,
            crs: {
                eqf: new xop(),
                x: 0,
                toz: 0,
                sbl: 0
            },
            qfl: {
                tkr: new xop(),
                stn: new xop(),
                pcy: new xop()
            }
        },
        vsg: {
            eqf: new xop(0, 0, 800, 600),
            tkr: new xop(100, 75, 600, 450),
            wkh: new xop(),
            stn: new xop(100, 295, 600, 24),
            axj: new xop(160, 325, 480, 3),
            ich: new xop(100, 265, 600, 115),
            fontSize: 21,
            suc: 26,
            kfu: 0,
            pfx: 12,
            xpn: 8,
            edt: 3,
            wng: 10,
            crs: {
                eqf: new xop(400, 484, 0, 3),
                x: 38,
                toz: 17,
                sbl: 23
            },
            qfl: {
                tkr: new xop(50, 0, 700, 450),
                stn: new xop(100, 430, 600, 60),
                pcy: new xop(200, 510, 400, 40)
            }
        },
        hsp: {
            eqf: new xop(0, 0, 800, 600),
            tkr: new xop(0, 0, 800, 600),
            wkh: new xop(),
            stn: new xop(50, 420, 700, 21),
            axj: new xop(),
            ich: new xop(50, 410, 700, 80),
            fontSize: 18,
            suc: 24,
            kfu: 0,
            pfx: 12,
            xpn: 7,
            edt: 0,
            wng: 0,
            crs: {
                eqf: new xop(260, 119, 280, 280),
                x: 0,
                toz: 0,
                sbl: 0
            },
            qfl: {
                tkr: new xop(50, 0, 700, 450),
                stn: new xop(100, 460, 600, 60),
                pcy: new xop(200, 540, 400, 40)
            }
        }
    };
    this.crk = {};
    this.jik = {};
    this.fdd = {
        eqf: new xop(0, 0, 960, 600),
        ien: new xop(0, 0, 160, 600),
        gsh: {
            fjp: 0,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            xfq: 8,
            vqi: 16,
            dkv: 4
        },
        waf: new xop(160, 20, 800, 40),
        bux: new xop(160, 100, 800, 40),
        hrp: new xop(160, 140, 800, 40),
        zfh: new xop(160, 180, 800, 40),
        esi: new xop(385, 275, 350, 100),
        kgw: new xop(360, 480, 400, 40),
        wmu: {
            ldo: new xop(15, 410, 130, 130),
        },
        pky: {
            ldo: new xop(15, 310, 130, 130),
            ivf: new xop(15, 120, 130, 130)
        },
        tri: 36,
        fontSize: 30,
        cgl: 22,
        xpn: 3,
        pfx: 5,
        dkv: 2,
        cpg: 3,
        wqa: 10
    };
    this.rdr = {
        eqf: new xop(0, 0, 960, 600),
        dkv: 0,
        vqi: 0,
        clm: 50,
        fpo: 30,
        pnq: 30,
        qqh: new xop(70, 170, 470, 70),
        myf: new xop(560, 170, 60, 70),
        lmv: new xop(622, 170, 210, 70),
        vip: new xop(834, 170, 60, 70),
        cuf: new xop(70, 310, 470, 70),
        cqm: new xop(560, 310, 60, 70),
        alp: new xop(622, 310, 210, 70),
        aip: new xop(834, 310, 60, 70),
        khl: new xop(70, 450, 470, 70),
        mhw: new xop(622, 450, 210, 70),
        hzw: new xop(90, 530, 780, 50),
        wqv: new xop(80, 120, 470, 60),
        rlk: new xop(570, 120, 50, 60),
        ufb: new xop(622, 120, 210, 60),
        hwo: new xop(834, 120, 50, 60),
        tgo: new xop(90, 200, 780, 70),
        yap: new xop(80, 280, 470, 60),
        xba: new xop(570, 280, 50, 60),
        ipf: new xop(622, 280, 210, 60),
        sen: new xop(834, 280, 50, 60),
        iyp: new xop(80, 360, 470, 60),
        qxp: new xop(570, 360, 50, 60),
        vmx: new xop(622, 360, 210, 60),
        pqz: new xop(834, 360, 50, 60),
        aum: new xop(80, 440, 470, 60),
        ghw: new xop(570, 440, 50, 60),
        dvq: new xop(622, 440, 210, 60),
        saj: new xop(834, 440, 50, 60),
        wkh: new xop(90, 530, 780, 50),
        ylk: {
            swc: new xop(0, 10, 240, 90),
            nar: new xop(240, 10, 240, 90),
            yfd: new xop(480, 10, 240, 90),
            npo: new xop(720, 10, 240, 90)
        },
        mxs: {
            swc: new xop(0, 10, 192, 90),
            pbd: new xop(192, 10, 192, 90),
            nar: new xop(384, 10, 192, 90),
            yfd: new xop(576, 10, 192, 90),
            npo: new xop(768, 10, 192, 90)
        },
        gpv: [new xop(190, 205, 200, 160), new xop(570, 205, 200, 160)],
        zrg: [new xop(90, 205, 200, 160), new xop(380, 205, 200, 160), new xop(670, 205, 200, 160)],
        ozg: [new xop(190, 130, 200, 160), new xop(570, 130, 200, 160), new xop(190, 360, 200, 160), new xop(570, 360, 200, 160)],
        joh: [new xop(90, 130, 200, 160), new xop(380, 130, 200, 160), new xop(670, 130, 200, 160), new xop(90, 360, 200, 160), new xop(380, 360, 200, 160), new xop(670, 360, 200, 160)],
        noz: {
            vqi: 3,
            pfx: -10,
            xpn: -1,
            xfq: 6,
            fontSize: 36,
            dkv: 0,
        },
        zcx: {
            vqi: 3,
            pfx: 10,
            xpn: -1,
            xfq: 6,
            fontSize: 36,
            dkv: 0,
        },
        utd: {
            fontSize: 36,
            pfx: 0,
            xpn: 0,
            xfq: 10,
            vqi: 0,
            dkv: 0
        },
        zto: {
            fontSize: 26,
            kfu: 5,
            vqi: 26,
            dkv: 4,
            tqa: 40
        },
        fbd: {
            hqm: 16,
            fjp: 40,
            zyt: 0,
            igy: 0,
            dkv: 2,
            kfu: 3
        },
        prr: {
            hqm: 16,
            fjp: 40,
            zyt: 0,
            igy: 0,
            dkv: 2,
            kfu: 3
        },
        quw: {
            stn: new xop(50, 0, 360, 60),
            izy: new xop(0, 13, 30, 30),
            fontSize: 30,
            vqi: 0,
            dkv: 2
        }
    };
    this.afm = {
        eqf: new xop(660, 5, 310, 60),
        waf: new xop(60, 6, 240, 26),
        stn: new xop(60, 34, 240, 20),
        zcm: new xop(5, 11, 50, 38),
        wlw: new xop(8, 2, 34, 34),
        hqm: 16,
        fjp: 12,
        jzy: 24
    };
    this.lzp = {
        eqf: new xop(200, 135, 560, 330),
        hqm: 26,
        fontSize: 20,
        lhd: new xop(515, 5, 40, 40),
        waf: new xop(40, 5, 480, 30),
        kgw: new xop(20, 40, 520, 195),
        ats: new xop(20, 265, 520, 54),
        gsh: {
            fontSize: 20
        }
    };
    this.jof = {
        eqf: [new xop(162, 0, 130, 46), new xop(828, 0, 130, 46)],
        display: {
            eod: new xop(6, 16, 118, 23),
            hqm: 14,
            pim: 20,
            zyt: -11,
            ilu: 10,
            kfu: 8,
            dkv: 3,
            hsy: 0,
            afu: 4
        },
        cmt: {
            eqf: new xop(210, 110, 700, 300),
            eod: new xop(),
            hqm: 66,
            pim: 150,
            zyt: -90,
            ilu: 60,
            kfu: 10,
            dkv: 0,
            hsy: 0,
            afu: 0
        },
        xxv: {
            eqf: new xop(198, 60, 724, 369),
            tkb: new xop(100, 53, 525, 50),
            eod: new xop(186, 153, 332, 94),
            pgh: 340,
            isa: 30,
            ijr: {
                _0: new xop(2, 0, 90, 94),
                _1: new xop(98, 0, 90, 94),
                _2: new xop(194, 0, 90, 94),
                _3: new xop(290, 0, 90, 94),
                _4: new xop(386, 0, 90, 94),
                _5: new xop(482, 0, 90, 94),
                _6: new xop(578, 0, 90, 94),
                _7: new xop(674, 0, 90, 94),
                _8: new xop(770, 0, 90, 94),
                _9: new xop(866, 0, 90, 94),
                _cm: new xop(962, 0, 28, 94),
                _dt: new xop(999, 0, 28, 94),
                _sp: new xop(1036, 0, 28, 94)
            }
        }
    }
}
qal.prototype = new iju;

function iqd() {
    this.ykg = true;
    this.lzv = true;
    this.rcb = true;
    this.yis = {
        eqf: new xop(0, 20, 800, 600),
        jyt: 0,
        jco: 0
    };
    this.hbb = {
        eqf: new xop(0, 20, 800, 600),
        jyt: -20,
        jco: 0
    };
    this.boc = {
        eqf: new xop(40, 110, 136, 360),
        dmq: new xop(40, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.iqw = {
        eqf: new xop(186, 110, 136, 360),
        dmq: new xop(186, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.ulp = {
        eqf: new xop(332, 110, 136, 360),
        dmq: new xop(332, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.dro = {
        eqf: new xop(478, 110, 136, 360),
        dmq: new xop(478, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.hau = {
        eqf: new xop(624, 110, 136, 360),
        dmq: new xop(624, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.mqj = {
        eqf: new xop(0, 20, 800, 86),
        fontSize: 50,
        pfx: 0,
        xpn: 6,
        kfu: 0,
        gcy: 2
    };
    this.nux = {
        eqf: new xop(0, 20, 800, 80),
        fontSize: 50,
        pfx: 0,
        xpn: 8,
        kfu: 0,
        gcy: 2
    };
    this.ysu = {
        eqf: new xop(4, 110, 0, 0),
        kdd: [25, 65, 165, 265, 305],
        ruj: 30,
        zuh: 30
    };
    this.mur = {
        eqf: new xop(766, 110, 0, 0),
        kdd: [25, 65, 165, 265, 305],
        ruj: 30,
        zuh: 30
    };
    this.myl = {
        eqf: new xop(710, 35, 90, 450),
        waf: new xop(5, 5, 80, 15),
        rdg: new xop(55, 25, 30, 410),
        fontSize: 15,
        yfp: 20,
        dkv: 2,
        vqi: 5,
        bko: 4,
        trw: 10,
        wkl: 5
    };
    this.pod = {
        eqf: new xop(0, 35, 90, 450),
        waf: new xop(5, 5, 80, 15),
        rdg: new xop(5, 25, 30, 410),
        fontSize: 15,
        yfp: 20,
        dkv: 2,
        vqi: 5,
        bko: 4,
        trw: 10,
        wkl: 5
    };
    this.hwg = {
        eqf: new xop(0, 20, 800, 600),
        ien: new xop(0, 540, 800, 60),
        ivf: new xop(711, 544, 73, 53),
        neo: new xop(11, 544, 73, 53),
        kkk: new xop(316, 544, 73, 53),
        kmf: new xop(411, 544, 73, 53),
        gsh: {
            fjp: 16,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            xfq: 6,
            vqi: 8,
            dkv: 2
        }
    };
    this.jzz = {
        eqf: new xop(0, 20, 800, 600),
        ien: new xop(0, 485, 800, 115),
        uck: {
            eqf: new xop(187, 489, 470, 40),
            fontSize: 18,
            xpn: 14,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 2
        },
        dam: {
            eqf: new xop(331, 216, 137, 187),
            stn: new xop(5, 8, 56, 34),
            eod: new xop(37, 3, 98, 104),
            ovl: new xop(33, 110, 72, 76),
            hor: new xop(10, 42, 45, 45),
            luy: new xop(5, 120, 126, 50),
            fontSize: 34,
            ryd: 50,
            kfu: 3,
            esf: 4
        },
        zmo: {
            eqf: new xop(380, 105, 380, 45),
            bun: 2
        },
        gsh: {
            fjp: 18,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            xfq: 8,
            vqi: 10,
            dkv: 2
        },
        display: {
            zyt: -12,
            igy: 11,
            fjp: 26,
            hqm: 15,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        xoz: {
            zyt: 0,
            igy: 0,
            fjp: 0,
            hqm: 0,
            dkv: 0,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        tqm: new xop(),
        fyf: new xop(),
        zju: new xop(415, 544, 110, 53),
        huy: new xop(275, 544, 110, 53),
        luy: new xop(689, 485, 106, 48),
        oal: new xop(5, 485, 150, 48),
        dcf: new xop(73, 315, 91, 96),
        xbi: new xop(166, 315, 91, 96),
        wvx: new xop(542, 315, 91, 96),
        ljw: new xop(635, 315, 91, 96),
        stm: new xop(73, 218, 184, 92),
        xas: new xop(542, 218, 184, 92),
        hto: new xop(65, 170, 200, 50),
        zzv: new xop(509, 170, 250, 50),
        tmj: new xop(534, 410, 200, 50)
    };
    this.tcm = {
        eqf: new xop(0, 475, 800, 145),
        uto: new xop(0, 0, 800, 145),
        plt: new xop(),
        uck: {
            eqf: new xop(187, 34, 470, 40),
            xpn: 14,
            fontSize: 18,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 2
        },
        win: {
            eqf: new xop(45, 2, 710, 25),
            fontSize: 20,
            xpn: 4,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 0
        },
        sgb: {
            eqf: new xop(187, 51, 470, 70),
            wkl: 10,
            igy: 2,
            fontSize: 24,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        nnt: {
            fjp: 22,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 10,
            xfq: 8,
            dkv: 2
        },
        bmx: {
            fjp: 16,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 8,
            xfq: 8,
            dkv: 2
        },
        dfp: {
            fjp: 0,
            pim: 0,
            pfx: 0,
            vqi: 0,
            xfq: 0,
            dkv: 0,
            igy: 0,
            ilu: 0
        },
        knd: {
            fjp: 16,
            pim: 16,
            pfx: 0,
            vqi: 8,
            xfq: 6,
            dkv: 2,
            igy: 24,
            ilu: -24
        },
        display: {
            zyt: -12,
            igy: 11,
            fjp: 26,
            hqm: 15,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        hzp: {
            zyt: 0,
            igy: 0,
            fjp: 0,
            hqm: 0,
            dkv: 0,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        xoz: {
            eqf: new xop(),
            zyt: 0,
            igy: 0,
            fjp: 0,
            hqm: 0,
            dkv: 0,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        tqm: new xop(),
        fyf: new xop(),
        hrk: new xop(5, 30, 150, 48),
        dyu: new xop(689, 30, 106, 48),
        eee: new xop(),
        hvb: {
            pcy: new xop(686, 89, 110, 53),
            xpp: new xop(492, 89, 80, 53),
            qqo: new xop(382, 89, 80, 53),
            ivf: new xop(272, 89, 80, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        cxr: {
            pcy: new xop(686, 89, 110, 53),
            xpp: new xop(532, 89, 80, 53),
            kdd: new xop(432, 89, 80, 53),
            qqo: new xop(332, 89, 80, 53),
            ivf: new xop(232, 89, 80, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        eye: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(532, 89, 80, 53),
            xpp: new xop(432, 89, 80, 53),
            qqo: new xop(332, 89, 80, 53),
            ivf: new xop(232, 89, 80, 53),
            cmf: new xop(40, 89, 80, 53),
            gjr: new xop()
        },
        myr: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(562, 89, 80, 53),
            xpp: new xop(472, 89, 80, 53),
            kdd: new xop(382, 89, 80, 53),
            qqo: new xop(292, 89, 80, 53),
            ivf: new xop(202, 89, 80, 53),
            cmf: new xop(40, 89, 80, 53),
            gjr: new xop()
        },
        lgi: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(492, 89, 80, 53),
            xpp: new xop(382, 89, 80, 53),
            qqo: new xop(272, 89, 80, 53),
            cmf: new xop(40, 89, 80, 53),
            gjr: new xop()
        },
        uze: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(532, 89, 80, 53),
            xpp: new xop(432, 89, 80, 53),
            kdd: new xop(332, 89, 80, 53),
            qqo: new xop(232, 89, 80, 53),
            cmf: new xop(40, 89, 80, 53),
            gjr: new xop()
        },
        rzh: {
            pcy: new xop(686, 89, 110, 53),
            xpp: new xop(492, 89, 80, 53),
            qqo: new xop(382, 89, 80, 53),
            ivf: new xop(272, 89, 80, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        fff: {
            pcy: new xop(686, 89, 110, 53),
            xpp: new xop(532, 89, 80, 53),
            kdd: new xop(432, 89, 80, 53),
            qqo: new xop(332, 89, 80, 53),
            ivf: new xop(232, 89, 80, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        pxt: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        qcg: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        osa: 60
    };
    this.crs = {
        eqf: new xop(40, 110, 720, 360),
        lineWidth: 4,
        eks: 5,
        dkv: 1,
        unm: 136,
        qig: 120,
        fontSize: 40,
        xfl: 10,
        rel: 5,
        kwe: 100,
        izf: 96,
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
    this.kzk = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410]
    ]
}
iqd.prototype = new kuj;

function zcz() {
    this.jmk = true
}
zcz.prototype = new iqd;

function cug() {
    this.ykg = true;
    this.lzv = true;
    this.rcb = true;
    this.yis = {
        eqf: new xop(0, 550, 800, 600),
        jyt: -14,
        jco: 0
    };
    this.hbb = {
        eqf: new xop(0, 550, 800, 600),
        jyt: -550,
        jco: 0
    };
    this.boc = {
        eqf: new xop(40, 640, 136, 360),
        dmq: new xop(40, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.iqw = {
        eqf: new xop(186, 640, 136, 360),
        dmq: new xop(186, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.ulp = {
        eqf: new xop(332, 640, 136, 360),
        dmq: new xop(332, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.dro = {
        eqf: new xop(478, 640, 136, 360),
        dmq: new xop(478, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.hau = {
        eqf: new xop(624, 640, 136, 360),
        dmq: new xop(624, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.mqj = {
        eqf: new xop(0, 550, 800, 86),
        fontSize: 50,
        pfx: 0,
        xpn: 6,
        kfu: 0,
        gcy: 2
    };
    this.nux = {
        eqf: new xop(0, 550, 800, 80),
        fontSize: 50,
        pfx: 0,
        xpn: 8,
        kfu: 0,
        gcy: 2
    };
    this.ysu = {
        eqf: new xop(4, 640, 0, 0),
        kdd: [25, 65, 165, 265, 305],
        ruj: 30,
        zuh: 30
    };
    this.mur = {
        eqf: new xop(766, 640, 0, 0),
        kdd: [25, 65, 165, 265, 305],
        ruj: 30,
        zuh: 30
    };
    this.myl = {
        eqf: new xop(710, 565, 90, 450),
        waf: new xop(5, 5, 80, 15),
        rdg: new xop(55, 25, 30, 410),
        fontSize: 15,
        yfp: 20,
        dkv: 2,
        vqi: 5,
        bko: 4,
        trw: 10,
        wkl: 5
    };
    this.pod = {
        eqf: new xop(0, 565, 90, 450),
        waf: new xop(5, 5, 80, 15),
        rdg: new xop(5, 25, 30, 410),
        fontSize: 15,
        yfp: 20,
        dkv: 2,
        vqi: 5,
        bko: 4,
        trw: 10,
        wkl: 5
    };
    this.hwg = {
        eqf: new xop(0, 550, 800, 615),
        ien: new xop(0, 540, 800, 75),
        ivf: new xop(695, 544, 90, 68),
        neo: new xop(11, 544, 90, 68),
        kkk: new xop(295, 544, 90, 68),
        kmf: new xop(415, 544, 90, 68),
        gsh: {
            fjp: 21,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            xfq: 8,
            vqi: 10,
            dkv: 2
        }
    };
    this.jzz = {
        eqf: new xop(0, 550, 800, 615),
        ien: new xop(0, 485, 800, 130),
        uck: {
            eqf: new xop(187, 489, 470, 40),
            fontSize: 18,
            xpn: 14,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 2
        },
        dam: {
            eqf: new xop(331, 216, 137, 187),
            stn: new xop(5, 8, 56, 34),
            eod: new xop(37, 3, 98, 104),
            ovl: new xop(33, 110, 72, 76),
            hor: new xop(10, 42, 45, 45),
            luy: new xop(5, 120, 126, 50),
            fontSize: 34,
            ryd: 50,
            kfu: 3,
            esf: 4
        },
        zmo: {
            eqf: new xop(380, 105, 380, 45),
            bun: 2
        },
        gsh: {
            fjp: 23,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            xfq: 10,
            vqi: 12,
            dkv: 2
        },
        display: {
            zyt: -12,
            igy: 11,
            fjp: 26,
            hqm: 15,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        xoz: {
            zyt: 0,
            igy: 0,
            fjp: 0,
            hqm: 0,
            dkv: 0,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        tqm: new xop(),
        fyf: new xop(),
        zju: new xop(415, 544, 120, 68),
        huy: new xop(265, 544, 120, 68),
        luy: new xop(689, 485, 106, 48),
        oal: new xop(5, 485, 150, 48),
        dcf: new xop(73, 315, 91, 96),
        xbi: new xop(166, 315, 91, 96),
        wvx: new xop(542, 315, 91, 96),
        ljw: new xop(635, 315, 91, 96),
        stm: new xop(73, 218, 184, 92),
        xas: new xop(542, 218, 184, 92),
        hto: new xop(65, 170, 200, 50),
        zzv: new xop(509, 170, 250, 50),
        tmj: new xop(534, 410, 200, 50)
    };
    this.tcm = {
        eqf: new xop(0, 1005, 800, 160),
        uto: new xop(0, 0, 800, 160),
        plt: new xop(),
        uck: {
            eqf: new xop(187, 34, 470, 40),
            xpn: 14,
            fontSize: 18,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 2
        },
        win: {
            eqf: new xop(45, 2, 710, 25),
            fontSize: 20,
            xpn: 4,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 0
        },
        sgb: {
            eqf: new xop(187, 58, 470, 70),
            wkl: 10,
            igy: 2,
            fontSize: 24,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        nnt: {
            fjp: 28,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 12,
            xfq: 10,
            dkv: 2
        },
        bmx: {
            fjp: 21,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 10,
            xfq: 8,
            dkv: 2
        },
        dfp: {
            fjp: 0,
            pim: 0,
            pfx: 0,
            vqi: 0,
            xfq: 0,
            dkv: 0,
            igy: 0,
            ilu: 0
        },
        knd: {
            fjp: 21,
            pim: 21,
            pfx: 0,
            vqi: 8,
            xfq: 6,
            dkv: 2,
            igy: 30,
            ilu: -32
        },
        display: {
            zyt: -12,
            igy: 11,
            fjp: 26,
            hqm: 15,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        hzp: {
            zyt: 0,
            igy: 0,
            fjp: 0,
            hqm: 0,
            dkv: 0,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        xoz: {
            zyt: 0,
            igy: 0,
            fjp: 0,
            hqm: 0,
            dkv: 0,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        tqm: new xop(),
        fyf: new xop(),
        hrk: new xop(5, 30, 150, 48),
        dyu: new xop(689, 30, 106, 48),
        eee: new xop(),
        hvb: {
            pcy: new xop(675, 89, 120, 68),
            xpp: new xop(486, 89, 100, 68),
            qqo: new xop(371, 89, 100, 68),
            ivf: new xop(256, 89, 100, 68),
            zvl: new xop(20, 89, 120, 68),
            gjr: new xop()
        },
        cxr: {
            pcy: new xop(675, 89, 120, 68),
            xpp: new xop(536, 89, 100, 68),
            kdd: new xop(426, 89, 100, 68),
            qqo: new xop(316, 89, 100, 68),
            ivf: new xop(206, 89, 100, 68),
            zvl: new xop(20, 89, 120, 68),
            gjr: new xop()
        },
        eye: {
            pcy: new xop(675, 89, 120, 68),
            zvl: new xop(536, 89, 100, 68),
            xpp: new xop(426, 89, 100, 68),
            qqo: new xop(316, 89, 100, 68),
            ivf: new xop(206, 89, 100, 68),
            cmf: new xop(30, 89, 100, 68),
            gjr: new xop()
        },
        myr: {
            pcy: new xop(678, 89, 120, 68),
            zvl: new xop(576, 89, 90, 68),
            xpp: new xop(476, 89, 90, 68),
            kdd: new xop(376, 89, 90, 68),
            qqo: new xop(276, 89, 90, 68),
            ivf: new xop(176, 89, 90, 68),
            cmf: new xop(35, 89, 90, 68),
            gjr: new xop()
        },
        lgi: {
            pcy: new xop(675, 89, 120, 68),
            zvl: new xop(486, 89, 100, 68),
            xpp: new xop(371, 89, 100, 68),
            qqo: new xop(256, 89, 100, 68),
            cmf: new xop(30, 89, 100, 68),
            gjr: new xop()
        },
        uze: {
            pcy: new xop(675, 89, 120, 68),
            zvl: new xop(536, 89, 100, 68),
            xpp: new xop(426, 89, 100, 68),
            kdd: new xop(316, 89, 100, 68),
            qqo: new xop(206, 89, 100, 68),
            cmf: new xop(30, 89, 100, 68),
            gjr: new xop()
        },
        rzh: {
            pcy: new xop(675, 89, 120, 68),
            xpp: new xop(486, 89, 100, 68),
            qqo: new xop(371, 89, 100, 68),
            ivf: new xop(256, 89, 100, 68),
            zvl: new xop(20, 89, 120, 68),
            gjr: new xop()
        },
        fff: {
            pcy: new xop(675, 89, 120, 68),
            xpp: new xop(536, 89, 100, 68),
            kdd: new xop(426, 89, 100, 68),
            qqo: new xop(316, 89, 100, 68),
            ivf: new xop(206, 89, 100, 68),
            zvl: new xop(20, 89, 120, 68),
            gjr: new xop()
        },
        pxt: {
            pcy: new xop(675, 90, 120, 68),
            zvl: new xop(20, 90, 120, 68),
            gjr: new xop()
        },
        qcg: {
            pcy: new xop(675, 90, 120, 68),
            zvl: new xop(20, 90, 120, 68),
            gjr: new xop()
        },
        osa: 60
    };
    this.crs = {
        eqf: new xop(40, 640, 720, 360),
        lineWidth: 4,
        eks: 5,
        dkv: 1,
        unm: 136,
        qig: 120,
        fontSize: 40,
        xfl: 10,
        rel: 5,
        kwe: 100,
        izf: 96,
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
    this.kzk = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940]
    ];
    this.top = {
        eqf: new xop(0, 20, 800, 520)
    }
}
cug.prototype = new fwh;

function iai() {
    this.ykg = true;
    this.lzv = true;
    this.rcb = true;
    this.yis = {
        eqf: new xop(5, 20, 800, 600),
        jyt: 0,
        jco: -10
    };
    this.hbb = {
        eqf: new xop(5, 20, 800, 600),
        jyt: -20,
        jco: -5
    };
    this.boc = {
        eqf: new xop(45, 110, 136, 360),
        dmq: new xop(40, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.iqw = {
        eqf: new xop(191, 110, 136, 360),
        dmq: new xop(186, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.ulp = {
        eqf: new xop(337, 110, 136, 360),
        dmq: new xop(332, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.dro = {
        eqf: new xop(483, 110, 136, 360),
        dmq: new xop(478, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.hau = {
        eqf: new xop(629, 110, 136, 360),
        dmq: new xop(624, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.mqj = {
        eqf: new xop(5, 20, 800, 86),
        fontSize: 50,
        pfx: 0,
        xpn: 6,
        kfu: 0,
        gcy: 2
    };
    this.nux = {
        eqf: new xop(5, 20, 800, 80),
        fontSize: 50,
        pfx: 0,
        xpn: 8,
        kfu: 0,
        gcy: 2
    };
    this.ysu = {
        eqf: new xop(9, 110, 0, 0),
        kdd: [25, 65, 165, 265, 305],
        ruj: 30,
        zuh: 30
    };
    this.mur = {
        eqf: new xop(771, 110, 0, 0),
        kdd: [25, 65, 165, 265, 305],
        ruj: 30,
        zuh: 30
    };
    this.myl = {
        eqf: new xop(715, 35, 90, 450),
        waf: new xop(5, 5, 80, 15),
        rdg: new xop(55, 25, 30, 410),
        fontSize: 15,
        yfp: 20,
        dkv: 2,
        vqi: 5,
        bko: 4,
        trw: 10,
        wkl: 5
    };
    this.pod = {
        eqf: new xop(5, 35, 90, 450),
        waf: new xop(5, 5, 80, 15),
        rdg: new xop(5, 25, 30, 410),
        fontSize: 15,
        yfp: 20,
        dkv: 2,
        vqi: 5,
        bko: 4,
        trw: 10,
        wkl: 5
    };
    this.hwg = {
        eqf: new xop(5, 20, 800, 600),
        ien: new xop(0, 540, 800, 60),
        ivf: new xop(711, 544, 73, 53),
        neo: new xop(11, 544, 73, 53),
        kkk: new xop(316, 544, 73, 53),
        kmf: new xop(411, 544, 73, 53),
        gsh: {
            fjp: 16,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            xfq: 6,
            vqi: 8,
            dkv: 2
        }
    };
    this.jzz = {
        eqf: new xop(5, 20, 800, 600),
        ien: new xop(0, 485, 800, 115),
        uck: {
            eqf: new xop(187, 489, 470, 40),
            fontSize: 18,
            xpn: 14,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 2
        },
        dam: {
            eqf: new xop(331, 216, 137, 187),
            stn: new xop(5, 8, 56, 34),
            eod: new xop(37, 3, 98, 104),
            ovl: new xop(33, 110, 72, 76),
            hor: new xop(10, 42, 45, 45),
            luy: new xop(5, 120, 126, 50),
            fontSize: 34,
            ryd: 50,
            kfu: 3,
            esf: 4
        },
        zmo: {
            eqf: new xop(380, 105, 380, 45),
            bun: 2
        },
        gsh: {
            fjp: 18,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            xfq: 8,
            vqi: 10,
            dkv: 2
        },
        display: {
            zyt: -12,
            igy: 11,
            fjp: 26,
            hqm: 15,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        xoz: {
            zyt: 0,
            igy: 0,
            fjp: 0,
            hqm: 0,
            dkv: 0,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        tqm: new xop(),
        fyf: new xop(),
        zju: new xop(415, 544, 110, 53),
        huy: new xop(275, 544, 110, 53),
        luy: new xop(689, 485, 106, 48),
        oal: new xop(5, 485, 150, 48),
        dcf: new xop(73, 315, 91, 96),
        xbi: new xop(166, 315, 91, 96),
        wvx: new xop(542, 315, 91, 96),
        ljw: new xop(635, 315, 91, 96),
        stm: new xop(73, 218, 184, 92),
        xas: new xop(542, 218, 184, 92),
        hto: new xop(65, 170, 200, 50),
        zzv: new xop(509, 170, 250, 50),
        tmj: new xop(534, 410, 200, 50)
    };
    this.tcm = {
        eqf: new xop(5, 475, 800, 145),
        uto: new xop(0, 0, 800, 145),
        plt: new xop(),
        uck: {
            eqf: new xop(187, 34, 470, 40),
            xpn: 14,
            fontSize: 18,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 2
        },
        win: {
            eqf: new xop(45, 2, 710, 25),
            fontSize: 20,
            xpn: 4,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 0
        },
        sgb: {
            eqf: new xop(187, 51, 470, 70),
            wkl: 10,
            igy: 2,
            fontSize: 24,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        nnt: {
            fjp: 22,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 10,
            xfq: 8,
            dkv: 2
        },
        bmx: {
            fjp: 16,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 8,
            xfq: 6,
            dkv: 2
        },
        dfp: {
            fjp: 0,
            pim: 0,
            pfx: 0,
            vqi: 0,
            xfq: 0,
            dkv: 0,
            igy: 0,
            ilu: 0
        },
        knd: {
            fjp: 16,
            pim: 16,
            pfx: 0,
            vqi: 8,
            xfq: 6,
            dkv: 2,
            igy: 24,
            ilu: -24
        },
        display: {
            zyt: -12,
            igy: 11,
            fjp: 26,
            hqm: 15,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        hzp: {
            zyt: 0,
            igy: 0,
            fjp: 0,
            hqm: 0,
            dkv: 0,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        xoz: {
            eqf: new xop(),
            zyt: 0,
            igy: 0,
            fjp: 0,
            hqm: 0,
            dkv: 0,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        tqm: new xop(),
        fyf: new xop(),
        hrk: new xop(5, 30, 150, 48),
        dyu: new xop(689, 30, 106, 48),
        eee: new xop(),
        hvb: {
            pcy: new xop(686, 89, 110, 53),
            xpp: new xop(492, 89, 80, 53),
            qqo: new xop(382, 89, 80, 53),
            ivf: new xop(272, 89, 80, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        cxr: {
            pcy: new xop(686, 89, 110, 53),
            xpp: new xop(532, 89, 80, 53),
            kdd: new xop(432, 89, 80, 53),
            qqo: new xop(332, 89, 80, 53),
            ivf: new xop(232, 89, 80, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        eye: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(532, 89, 80, 53),
            xpp: new xop(432, 89, 80, 53),
            qqo: new xop(332, 89, 80, 53),
            ivf: new xop(232, 89, 80, 53),
            cmf: new xop(40, 89, 80, 53),
            gjr: new xop()
        },
        myr: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(562, 89, 80, 53),
            xpp: new xop(472, 89, 80, 53),
            kdd: new xop(382, 89, 80, 53),
            qqo: new xop(292, 89, 80, 53),
            ivf: new xop(202, 89, 80, 53),
            cmf: new xop(40, 89, 80, 53),
            gjr: new xop()
        },
        lgi: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(492, 89, 80, 53),
            xpp: new xop(382, 89, 80, 53),
            qqo: new xop(272, 89, 80, 53),
            cmf: new xop(40, 89, 80, 53),
            gjr: new xop()
        },
        uze: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(532, 89, 80, 53),
            xpp: new xop(432, 89, 80, 53),
            kdd: new xop(332, 89, 80, 53),
            qqo: new xop(232, 89, 80, 53),
            cmf: new xop(40, 89, 80, 53),
            gjr: new xop()
        },
        rzh: {
            pcy: new xop(686, 89, 110, 53),
            xpp: new xop(492, 89, 80, 53),
            qqo: new xop(382, 89, 80, 53),
            ivf: new xop(272, 89, 80, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        fff: {
            pcy: new xop(686, 89, 110, 53),
            xpp: new xop(532, 89, 80, 53),
            kdd: new xop(432, 89, 80, 53),
            qqo: new xop(332, 89, 80, 53),
            ivf: new xop(232, 89, 80, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        pxt: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        qcg: {
            pcy: new xop(686, 89, 110, 53),
            zvl: new xop(25, 89, 110, 53),
            gjr: new xop()
        },
        osa: 60
    };
    this.crs = {
        eqf: new xop(45, 110, 720, 360),
        lineWidth: 4,
        eks: 5,
        dkv: 1,
        unm: 136,
        qig: 120,
        fontSize: 40,
        xfl: 10,
        rel: 5,
        kwe: 100,
        izf: 96,
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
    this.kzk = [
        [92, 290, 718, 290],
        [92, 170, 718, 170],
        [92, 410, 718, 410],
        [92, 170, 117, 170, 405, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 405, 170, 693, 410, 718, 410]
    ]
}
iai.prototype = new fde;

function tcz() {
    this.jmk = true
}
tcz.prototype = new iai;

function dqr() {
    this.ykg = false;
    this.lzv = true;
    this.rcb = true;
    this.yis = {
        eqf: new xop(0, 0, 800, 600),
        jyt: 0,
        jco: -160
    };
    this.hbb = {
        eqf: new xop(-160, 0, 1120, 600),
        jco: 160,
        jyt: 0
    };
    this.boc = {
        eqf: new xop(40, 90, 136, 360),
        dmq: new xop(40, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.iqw = {
        eqf: new xop(186, 90, 136, 360),
        dmq: new xop(186, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.ulp = {
        eqf: new xop(332, 90, 136, 360),
        dmq: new xop(332, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.dro = {
        eqf: new xop(478, 90, 136, 360),
        dmq: new xop(478, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.hau = {
        eqf: new xop(624, 90, 136, 360),
        dmq: new xop(624, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.mqj = {
        eqf: new xop(0, 0, 800, 86),
        fontSize: 50,
        pfx: 0,
        xpn: 6,
        kfu: 0,
        gcy: 2
    };
    this.nux = {
        eqf: new xop(0, 0, 800, 80),
        fontSize: 50,
        pfx: 0,
        xpn: 8,
        kfu: 0,
        gcy: 2
    };
    this.ysu = {
        eqf: new xop(4, 90, 0, 0),
        kdd: [25, 65, 165, 265, 305],
        ruj: 30,
        zuh: 30
    };
    this.mur = {
        eqf: new xop(766, 90, 0, 0),
        kdd: [25, 65, 165, 265, 305],
        ruj: 30,
        zuh: 30
    };
    this.myl = {};
    this.pod = {};
    this.hwg = {
        eqf: new xop(0, 0, 960, 600),
        ien: new xop(800, 0, 160, 600),
        ivf: new xop(820, 400, 120, 120),
        neo: new xop(),
        kkk: new xop(820, 50, 120, 120),
        kmf: new xop(820, 225, 120, 120),
        gsh: {
            fjp: 0,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 0,
            xfq: 16,
            dkv: 4
        }
    };
    this.jzz = {
        eqf: new xop(0, 0, 960, 600),
        ien: new xop(800, 0, 160, 600),
        uck: {
            eqf: new xop(225, 520, 390, 70),
            fontSize: 20,
            xpn: 14,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 2
        },
        dam: {
            eqf: new xop(331, 216, 137, 187),
            stn: new xop(5, 8, 56, 34),
            eod: new xop(37, 3, 98, 104),
            ovl: new xop(33, 110, 72, 76),
            hor: new xop(10, 42, 45, 45),
            luy: new xop(5, 120, 126, 50),
            fontSize: 34,
            ryd: 50,
            kfu: 3,
            esf: 4
        },
        zmo: {
            eqf: new xop(380, 105, 380, 45),
            bun: 2
        },
        gsh: {
            fjp: 24,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            xfq: 10,
            vqi: 0,
            dkv: 4
        },
        display: {
            zyt: -18,
            igy: 16,
            fjp: 32,
            hqm: 18,
            dkv: 3,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        xoz: {
            zyt: 0,
            igy: 0,
            fjp: 16,
            hqm: 0,
            dkv: 2,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        tqm: new xop(800, 0, 160, 22),
        fyf: new xop(800, 22, 160, 22),
        zju: new xop(820, 325, 120, 120),
        huy: new xop(820, 125, 120, 120),
        luy: new xop(655, 520, 140, 70),
        oal: new xop(5, 520, 180, 70),
        dcf: new xop(73, 315, 91, 96),
        xbi: new xop(166, 315, 91, 96),
        wvx: new xop(542, 315, 91, 96),
        ljw: new xop(635, 315, 91, 96),
        stm: new xop(73, 218, 184, 92),
        xas: new xop(542, 218, 184, 92),
        hto: new xop(65, 170, 200, 50),
        zzv: new xop(509, 170, 250, 50),
        tmj: new xop(534, 410, 200, 50)
    };
    this.tcm = {
        eqf: new xop(0, 0, 960, 600),
        uto: new xop(0, 455, 800, 145),
        plt: new xop(800, 0, 160, 600),
        uck: {
            eqf: new xop(225, 520, 390, 70),
            xpn: 14,
            fontSize: 24,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 2
        },
        win: {
            eqf: new xop(45, 458, 710, 25),
            fontSize: 20,
            xpn: 4,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 0
        },
        sgb: {
            eqf: new xop(225, 520, 390, 70),
            wkl: 10,
            igy: 2,
            fontSize: 20,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        nnt: {
            fjp: 0,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 0,
            xfq: 10,
            dkv: 4
        },
        bmx: {
            fjp: 0,
            pim: 20,
            pfx: 0,
            igy: 0,
            ilu: -30,
            vqi: 0,
            xfq: 10,
            dkv: 4
        },
        knd: {
            fjp: 0,
            pim: 24,
            pfx: 0,
            vqi: 0,
            xfq: 10,
            dkv: 6,
            igy: 0,
            ilu: -40
        },
        dfp: {
            fjp: 24,
            pim: 0,
            pfx: 0,
            vqi: 10,
            xfq: 0,
            dkv: 4,
            igy: -2,
            ilu: 0
        },
        skq: {
            vqi: 6,
            pfx: 0,
            xpn: -1,
            xfq: 6,
            fontSize: 36,
            dkv: 3
        },
        display: {
            zyt: -18,
            igy: 16,
            fjp: 32,
            hqm: 18,
            dkv: 3,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        hzp: {
            zyt: 0,
            igy: -40,
            fjp: 36,
            hqm: 0,
            dkv: 3,
            sac: 10,
            rzl: 10,
            xus: 0,
            brn: 0
        },
        xoz: {
            zyt: 0,
            igy: 0,
            fjp: 16,
            hqm: 0,
            dkv: 2,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        tqm: new xop(800, 0, 160, 22),
        fyf: new xop(800, 22, 160, 22),
        hrk: new xop(5, 520, 180, 70),
        dyu: new xop(655, 520, 140, 70),
        eee: new xop(660, 400, 130, 120),
        thj: {
            pcy: new xop(805, 210, 150, 150),
            xpp: new xop(655, 495, 140, 30),
            kdd: new xop(),
            qqo: new xop(),
            ivf: new xop(820, 400, 120, 120),
            zvl: new xop(),
            gjr: new xop(820, 50, 120, 120)
        },
        qec: {
            pcy: new xop(815, 260, 140, 140),
            xpp: new xop(655, 495, 140, 30),
            kdd: new xop(),
            qqo: new xop(),
            ivf: new xop(865, 50, 80, 80),
            zvl: new xop(840, 140, 110, 110),
            gjr: new xop(840, 410, 110, 110)
        },
        osa: 60
    };
    this.crs = {
        eqf: new xop(40, 90, 720, 360),
        lineWidth: 4,
        eks: 5,
        dkv: 1,
        unm: 136,
        qig: 120,
        fontSize: 40,
        xfl: 10,
        rel: 5,
        kwe: 100,
        izf: 96,
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
    this.kzk = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390]
    ]
}
dqr.prototype = new lii;

function ppr() {
    this.ykg = false;
    this.lzv = true;
    this.rcb = true;
    this.yis = {
        eqf: new xop(160, 0, 800, 600),
        jyt: 0,
        jco: 0
    };
    this.hbb = {
        eqf: new xop(0, 0, 1120, 600),
        jco: 0,
        jyt: 0
    };
    this.boc = {
        eqf: new xop(200, 90, 136, 360),
        dmq: new xop(40, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.iqw = {
        eqf: new xop(346, 90, 136, 360),
        dmq: new xop(186, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.ulp = {
        eqf: new xop(492, 90, 136, 360),
        dmq: new xop(332, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.dro = {
        eqf: new xop(638, 90, 136, 360),
        dmq: new xop(478, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.hau = {
        eqf: new xop(784, 90, 136, 360),
        dmq: new xop(624, 90, 136, 360),
        jjr: 30,
        avp: 30
    };
    this.mqj = {
        eqf: new xop(160, 0, 800, 86),
        fontSize: 50,
        pfx: 0,
        xpn: 6,
        kfu: 0,
        gcy: 2
    };
    this.nux = {
        eqf: new xop(160, 0, 800, 80),
        fontSize: 50,
        pfx: 0,
        xpn: 8,
        kfu: 0,
        gcy: 2
    };
    this.ysu = {
        eqf: new xop(164, 90, 0, 0),
        kdd: [25, 65, 165, 265, 305],
        ruj: 30,
        zuh: 30
    };
    this.mur = {
        eqf: new xop(926, 90, 0, 0),
        kdd: [25, 65, 165, 265, 305],
        ruj: 30,
        zuh: 30
    };
    this.myl = {};
    this.pod = {};
    this.hwg = {
        eqf: new xop(0, 0, 960, 600),
        ien: new xop(0, 0, 160, 600),
        ivf: new xop(20, 400, 120, 120),
        neo: new xop(),
        kkk: new xop(20, 50, 120, 120),
        kmf: new xop(20, 225, 120, 120),
        gsh: {
            fjp: 0,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 0,
            xfq: 16,
            dkv: 4
        }
    };
    this.jzz = {
        eqf: new xop(0, 0, 960, 600),
        ien: new xop(0, 0, 160, 600),
        uck: {
            eqf: new xop(385, 520, 390, 70),
            fontSize: 20,
            xpn: 14,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 2
        },
        dam: {
            eqf: new xop(491, 216, 137, 187),
            stn: new xop(5, 8, 56, 34),
            eod: new xop(37, 3, 98, 104),
            ovl: new xop(33, 110, 72, 76),
            hor: new xop(10, 42, 45, 45),
            luy: new xop(5, 120, 126, 50),
            fontSize: 34,
            ryd: 50,
            kfu: 3,
            esf: 4
        },
        zmo: {
            eqf: new xop(540, 105, 380, 45),
            bun: 2
        },
        gsh: {
            fjp: 24,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            xfq: 10,
            vqi: 0,
            dkv: 4
        },
        display: {
            zyt: -18,
            igy: 16,
            fjp: 32,
            hqm: 18,
            dkv: 3,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        xoz: {
            zyt: 0,
            igy: 0,
            fjp: 16,
            hqm: 0,
            dkv: 2,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        tqm: new xop(0, 0, 160, 22),
        fyf: new xop(0, 22, 160, 22),
        zju: new xop(20, 325, 120, 120),
        huy: new xop(20, 125, 120, 120),
        luy: new xop(815, 520, 140, 70),
        oal: new xop(165, 520, 180, 70),
        dcf: new xop(233, 315, 91, 96),
        xbi: new xop(326, 315, 91, 96),
        wvx: new xop(702, 315, 91, 96),
        ljw: new xop(795, 315, 91, 96),
        stm: new xop(233, 218, 184, 92),
        xas: new xop(702, 218, 184, 92),
        hto: new xop(225, 170, 200, 50),
        zzv: new xop(669, 170, 250, 50),
        tmj: new xop(694, 410, 200, 50)
    };
    this.tcm = {
        eqf: new xop(0, 0, 960, 600),
        uto: new xop(160, 455, 800, 145),
        plt: new xop(0, 0, 160, 600),
        uck: {
            eqf: new xop(385, 520, 390, 70),
            xpn: 14,
            fontSize: 24,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 2
        },
        win: {
            eqf: new xop(205, 458, 710, 25),
            fontSize: 20,
            xpn: 4,
            vqi: 3,
            txw: 2,
            xfq: 6,
            dkv: 0
        },
        sgb: {
            eqf: new xop(385, 520, 390, 70),
            wkl: 10,
            igy: 2,
            fontSize: 20,
            dkv: 2,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        nnt: {
            fjp: 0,
            pim: 0,
            pfx: 0,
            igy: 0,
            ilu: 0,
            vqi: 0,
            xfq: 10,
            dkv: 4
        },
        bmx: {
            fjp: 0,
            pim: 20,
            pfx: 0,
            igy: 0,
            ilu: -30,
            vqi: 0,
            xfq: 10,
            dkv: 4
        },
        knd: {
            fjp: 0,
            pim: 24,
            pfx: 0,
            vqi: 0,
            xfq: 10,
            dkv: 6,
            igy: 0,
            ilu: -40
        },
        dfp: {
            fjp: 24,
            pim: 0,
            pfx: 0,
            vqi: 10,
            xfq: 0,
            dkv: 4,
            igy: -2,
            ilu: 0
        },
        skq: {
            vqi: 6,
            pfx: 0,
            xpn: -1,
            xfq: 6,
            fontSize: 36,
            dkv: 3
        },
        display: {
            zyt: -18,
            igy: 16,
            fjp: 32,
            hqm: 18,
            dkv: 3,
            sac: 3,
            rzl: 3,
            xus: 3,
            brn: 3
        },
        hzp: {
            zyt: 0,
            igy: -40,
            fjp: 36,
            hqm: 0,
            dkv: 3,
            sac: 10,
            rzl: 10,
            xus: 0,
            brn: 0
        },
        xoz: {
            zyt: 0,
            igy: 0,
            fjp: 16,
            hqm: 0,
            dkv: 2,
            sac: 0,
            rzl: 0,
            xus: 0,
            brn: 0
        },
        tqm: new xop(0, 0, 160, 22),
        fyf: new xop(0, 22, 160, 22),
        hrk: new xop(165, 520, 180, 70),
        dyu: new xop(815, 520, 140, 70),
        eee: new xop(820, 400, 130, 120),
        thj: {
            pcy: new xop(5, 210, 150, 150),
            xpp: new xop(815, 495, 140, 30),
            kdd: new xop(),
            qqo: new xop(),
            ivf: new xop(20, 400, 120, 120),
            zvl: new xop(),
            gjr: new xop(20, 50, 120, 120)
        },
        qec: {
            pcy: new xop(5, 260, 140, 140),
            xpp: new xop(815, 495, 140, 30),
            kdd: new xop(),
            qqo: new xop(),
            ivf: new xop(15, 50, 80, 80),
            zvl: new xop(10, 140, 110, 110),
            gjr: new xop(10, 410, 110, 110)
        },
        osa: 60
    };
    this.crs = {
        eqf: new xop(200, 90, 720, 360),
        lineWidth: 4,
        eks: 5,
        dkv: 1,
        unm: 136,
        qig: 120,
        fontSize: 40,
        xfl: 10,
        rel: 5,
        kwe: 100,
        izf: 96,
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
    this.kzk = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390]
    ]
}
ppr.prototype = new qal;

function omm() {
    this.jzz.zmo.eqf = new xop(380, 118, 380, 45);
    this.mqj.eqf = new xop(0, 20, 800, 80);
    this.mqj.fontSize = 56;
    this.ysu = {
        eqf: new xop(4, 110, 0, 0),
        kdd: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ruj: 32,
        zuh: 35
    };
    this.mur = {
        eqf: new xop(764, 110, 0, 0),
        kdd: [3, 39, 75, 111, 147, 183, 219, 255, 291, 327],
        ruj: 32,
        zuh: 35
    };
    this.kzk = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410],
        [87, 170, 256, 170, 400, 290, 544, 170, 713, 170],
        [87, 410, 256, 410, 400, 290, 544, 410, 713, 410],
        [87, 290, 112, 290, 256, 170, 544, 170, 688, 290, 713, 290],
        [87, 290, 112, 290, 256, 410, 544, 410, 688, 290, 713, 290],
        [87, 170, 112, 170, 256, 290, 544, 290, 688, 170, 713, 170],
        [87, 410, 112, 410, 256, 290, 544, 290, 688, 410, 713, 410],
        [87, 170, 112, 170, 256, 290, 400, 170, 544, 290, 688, 170, 713, 170],
        [87, 410, 112, 410, 256, 290, 400, 410, 544, 290, 688, 410, 713, 410],
        [87, 290, 112, 290, 256, 170, 400, 290, 544, 170, 688, 290, 713, 290],
        [87, 290, 112, 290, 256, 410, 400, 290, 544, 410, 688, 290, 713, 290],
        [87, 290, 256, 290, 400, 170, 544, 290, 713, 290],
        [87, 290, 256, 290, 400, 410, 544, 290, 713, 290],
        [87, 170, 112, 170, 256, 410, 400, 170, 544, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 256, 170, 400, 410, 544, 170, 688, 410, 713, 410],
        [87, 290, 112, 290, 256, 170, 400, 410, 544, 170, 688, 290, 713, 290]
    ];
    this.hwg.duv = {
        eqf: new xop(0, 0, 800, 600),
        pmv: 28,
        fontSize: 16,
        pnq: 12,
        stn: [],
        wkh: new xop(20, 500, 760, 30),
        hqm: 40,
        lineWidth: 1,
        waf: new xop(),
        luy: [new xop(160, 35, 150, 80), new xop(390, 160, 125, 75), new xop(130, 286, 145, 75), new xop(580, 286, 145, 75), new xop(355, 410, 150, 75)]
    };
    this.hwg.win = {
        eqf: new xop(0, 0, 800, 600),
        waf: new xop(),
        fontSize: 20,
        hqm: 40,
        lineWidth: 1,
        stn: [new xop(120, 450, 560, 70)]
    };
    this.hwg.zzt = {
        eqf: new xop(0, 0, 800, 600),
        waf: new xop(),
        fontSize: 20,
        lineWidth: 1,
        hqm: 40,
        stn: [new xop(280, 140, 470, 120), new xop(280, 340, 470, 120)]
    }
}
omm.prototype = new iqd;

function pto() {
    this.jmk = true
}
pto.prototype = new omm;

function rot() {
    this.jzz.zmo.eqf = new xop(380, 118, 380, 45);
    this.mqj.eqf = new xop(0, 550, 800, 80);
    this.mqj.fontSize = 56;
    this.ysu = {
        eqf: new xop(4, 640, 0, 0),
        kdd: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ruj: 32,
        zuh: 35
    };
    this.mur = {
        eqf: new xop(764, 640, 0, 0),
        kdd: [3, 39, 75, 111, 147, 183, 219, 255, 291, 327],
        ruj: 32,
        zuh: 35
    };
    this.kzk = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940],
        [87, 700, 256, 700, 400, 820, 544, 700, 713, 700],
        [87, 940, 256, 940, 400, 820, 544, 940, 713, 940],
        [87, 820, 112, 820, 256, 700, 544, 700, 688, 820, 713, 820],
        [87, 820, 112, 820, 256, 940, 544, 940, 688, 820, 713, 820],
        [87, 700, 112, 700, 256, 820, 544, 820, 688, 700, 713, 700],
        [87, 940, 112, 940, 256, 820, 544, 820, 688, 940, 713, 940],
        [87, 700, 112, 700, 256, 820, 400, 700, 544, 820, 688, 700, 713, 700],
        [87, 940, 112, 940, 256, 820, 400, 940, 544, 820, 688, 940, 713, 940],
        [87, 820, 112, 820, 256, 700, 400, 820, 544, 700, 688, 820, 713, 820],
        [87, 820, 112, 820, 256, 940, 400, 820, 544, 940, 688, 820, 713, 820],
        [87, 820, 256, 820, 400, 700, 544, 820, 713, 820],
        [87, 820, 256, 820, 400, 940, 544, 820, 713, 820],
        [87, 700, 112, 700, 256, 940, 400, 700, 544, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 256, 700, 400, 940, 544, 700, 688, 940, 713, 940],
        [87, 820, 112, 820, 256, 700, 400, 940, 544, 700, 688, 820, 713, 820]
    ];
    this.hwg.duv = {
        eqf: new xop(0, 0, 800, 615),
        pmv: 28,
        fontSize: 16,
        pnq: 12,
        stn: [],
        wkh: new xop(20, 500, 760, 30),
        hqm: 40,
        lineWidth: 1,
        waf: new xop(),
        luy: [new xop(160, 35, 150, 80), new xop(390, 160, 125, 75), new xop(130, 286, 145, 75), new xop(580, 286, 145, 75), new xop(355, 410, 150, 75)]
    };
    this.hwg.win = {
        eqf: new xop(0, 0, 800, 615),
        waf: new xop(),
        fontSize: 20,
        hqm: 40,
        lineWidth: 1,
        stn: [new xop(120, 450, 560, 70)]
    };
    this.hwg.zzt = {
        eqf: new xop(0, 0, 800, 615),
        waf: new xop(),
        fontSize: 20,
        lineWidth: 1,
        hqm: 40,
        stn: [new xop(280, 140, 470, 120), new xop(280, 340, 470, 120)]
    };
    this.top.duv = {
        eqf: new xop(0, 0, 800, 520),
        pmv: 28,
        fontSize: 16,
        pnq: 12,
        stn: [],
        wkh: new xop(20, 488, 760, 30),
        hqm: 40,
        lineWidth: 1,
        waf: new xop(),
        luy: [new xop(160, 34, 150, 80), new xop(390, 154, 125, 75), new xop(130, 280, 145, 75), new xop(580, 280, 145, 75), new xop(355, 400, 150, 75)]
    }
}
rot.prototype = new cug;

function bfp() {
    this.jzz.zmo.eqf = new xop(380, 118, 380, 45);
    this.mqj.eqf = new xop(5, 20, 800, 80);
    this.mqj.fontSize = 56;
    this.ysu = {
        eqf: new xop(9, 110, 0, 0),
        kdd: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ruj: 32,
        zuh: 35
    };
    this.mur = {
        eqf: new xop(769, 110, 0, 0),
        kdd: [3, 39, 75, 111, 147, 183, 219, 255, 291, 327],
        ruj: 32,
        zuh: 35
    };
    this.kzk = [
        [92, 290, 718, 290],
        [92, 170, 718, 170],
        [92, 410, 718, 410],
        [92, 170, 117, 170, 405, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 405, 170, 693, 410, 718, 410],
        [92, 170, 261, 170, 405, 290, 549, 170, 718, 170],
        [92, 410, 261, 410, 405, 290, 549, 410, 718, 410],
        [92, 290, 117, 290, 261, 170, 549, 170, 693, 290, 718, 290],
        [92, 290, 117, 290, 261, 410, 549, 410, 693, 290, 718, 290],
        [92, 170, 117, 170, 261, 290, 549, 290, 693, 170, 718, 170],
        [92, 410, 117, 410, 261, 290, 549, 290, 693, 410, 718, 410],
        [92, 170, 117, 170, 261, 290, 405, 170, 549, 290, 693, 170, 718, 170],
        [92, 410, 117, 410, 261, 290, 405, 410, 549, 290, 693, 410, 718, 410],
        [92, 290, 117, 290, 261, 170, 405, 290, 549, 170, 693, 290, 718, 290],
        [92, 290, 117, 290, 261, 410, 405, 290, 549, 410, 693, 290, 718, 290],
        [92, 290, 261, 290, 405, 170, 549, 290, 718, 290],
        [92, 290, 261, 290, 405, 410, 549, 290, 718, 290],
        [92, 170, 117, 170, 261, 410, 405, 170, 549, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 261, 170, 405, 410, 549, 170, 693, 410, 718, 410],
        [92, 290, 117, 290, 261, 170, 405, 410, 549, 170, 693, 290, 718, 290]
    ];
    this.hwg.duv = {
        eqf: new xop(0, 0, 800, 600),
        pmv: 28,
        fontSize: 16,
        pnq: 12,
        stn: [],
        wkh: new xop(20, 500, 760, 30),
        hqm: 40,
        lineWidth: 1,
        waf: new xop(),
        luy: [new xop(160, 35, 150, 80), new xop(390, 160, 125, 75), new xop(130, 286, 145, 75), new xop(580, 286, 145, 75), new xop(355, 410, 150, 75)]
    };
    this.hwg.win = {
        eqf: new xop(0, 0, 800, 600),
        waf: new xop(),
        fontSize: 20,
        hqm: 40,
        lineWidth: 1,
        stn: [new xop(120, 450, 560, 70)]
    };
    this.hwg.zzt = {
        eqf: new xop(0, 0, 800, 600),
        waf: new xop(),
        fontSize: 20,
        lineWidth: 1,
        hqm: 40,
        stn: [new xop(280, 140, 470, 120), new xop(280, 340, 470, 120)]
    }
}
bfp.prototype = new iai;

function vwc() {
    this.jmk = true
}
vwc.prototype = new bfp;

function sog() {
    this.jzz.zmo.eqf = new xop(380, 118, 380, 45);
    this.mqj.eqf = new xop(0, 0, 800, 80);
    this.mqj.fontSize = 56;
    this.ysu = {
        eqf: new xop(4, 90, 0, 0),
        kdd: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ruj: 32,
        zuh: 35
    };
    this.mur = {
        eqf: new xop(764, 90, 0, 0),
        kdd: [3, 39, 75, 111, 147, 183, 219, 255, 291, 327],
        ruj: 32,
        zuh: 35
    };
    this.kzk = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390],
        [87, 150, 256, 150, 400, 270, 544, 150, 713, 150],
        [87, 390, 256, 390, 400, 270, 544, 390, 713, 390],
        [87, 270, 112, 270, 256, 150, 544, 150, 688, 270, 713, 270],
        [87, 270, 112, 270, 256, 390, 544, 390, 688, 270, 713, 270],
        [87, 150, 112, 150, 256, 270, 544, 270, 688, 150, 713, 150],
        [87, 390, 112, 390, 256, 270, 544, 270, 688, 390, 713, 390],
        [87, 150, 112, 150, 256, 270, 400, 150, 544, 270, 688, 150, 713, 150],
        [87, 390, 112, 390, 256, 270, 400, 390, 544, 270, 688, 390, 713, 390],
        [87, 270, 112, 270, 256, 150, 400, 270, 544, 150, 688, 270, 713, 270],
        [87, 270, 112, 270, 256, 390, 400, 270, 544, 390, 688, 270, 713, 270],
        [87, 270, 256, 270, 400, 150, 544, 270, 713, 270],
        [87, 270, 256, 270, 400, 390, 544, 270, 713, 270],
        [87, 150, 112, 150, 256, 390, 400, 150, 544, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 256, 150, 400, 390, 544, 150, 688, 390, 713, 390],
        [87, 270, 112, 270, 256, 150, 400, 390, 544, 150, 688, 270, 713, 270]
    ];
    this.hwg.duv = {
        eqf: new xop(0, 0, 800, 600),
        pmv: 28,
        fontSize: 16,
        pnq: 14,
        stn: [],
        wkh: new xop(0, 530, 800, 40),
        hqm: 40,
        lineWidth: 1,
        waf: new xop(),
        luy: [new xop(160, 35, 150, 80), new xop(390, 160, 125, 75), new xop(130, 286, 145, 75), new xop(580, 286, 145, 75), new xop(355, 410, 150, 75)]
    };
    this.hwg.win = {
        eqf: new xop(0, 0, 800, 600),
        waf: new xop(),
        fontSize: 20,
        hqm: 40,
        lineWidth: 1,
        stn: [new xop(120, 500, 560, 70)]
    };
    this.hwg.zzt = {
        eqf: new xop(0, 0, 800, 600),
        waf: new xop(),
        fontSize: 20,
        lineWidth: 1,
        hqm: 40,
        stn: [new xop(280, 140, 470, 120), new xop(280, 340, 470, 120)]
    }
}
sog.prototype = new dqr;

function hkh() {
    this.jzz.zmo.eqf = new xop(540, 118, 380, 45);
    this.mqj.eqf = new xop(160, 0, 800, 80);
    this.mqj.fontSize = 56;
    this.ysu = {
        eqf: new xop(164, 90, 0, 0),
        kdd: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ruj: 32,
        zuh: 35
    };
    this.mur = {
        eqf: new xop(924, 90, 0, 0),
        kdd: [3, 39, 75, 111, 147, 183, 219, 255, 291, 327],
        ruj: 32,
        zuh: 35
    };
    this.kzk = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390],
        [247, 150, 416, 150, 560, 270, 704, 150, 873, 150],
        [247, 390, 416, 390, 560, 270, 704, 390, 873, 390],
        [247, 270, 272, 270, 416, 150, 704, 150, 848, 270, 873, 270],
        [247, 270, 272, 270, 416, 390, 704, 390, 848, 270, 873, 270],
        [247, 150, 272, 150, 416, 270, 704, 270, 848, 150, 873, 150],
        [247, 390, 272, 390, 416, 270, 704, 270, 848, 390, 873, 390],
        [247, 150, 272, 150, 416, 270, 560, 150, 704, 270, 848, 150, 873, 150],
        [247, 390, 272, 390, 416, 270, 560, 390, 704, 270, 848, 390, 873, 390],
        [247, 270, 272, 270, 416, 150, 560, 270, 704, 150, 848, 270, 873, 270],
        [247, 270, 272, 270, 416, 390, 560, 270, 704, 390, 848, 270, 873, 270],
        [247, 270, 416, 270, 560, 150, 704, 270, 873, 270],
        [247, 270, 416, 270, 560, 390, 704, 270, 873, 270],
        [247, 150, 272, 150, 416, 390, 560, 150, 704, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 416, 150, 560, 390, 704, 150, 848, 390, 873, 390],
        [247, 270, 272, 270, 416, 150, 560, 390, 704, 150, 848, 270, 873, 270]
    ];
    this.hwg.duv = {
        eqf: new xop(160, 0, 800, 600),
        pmv: 28,
        fontSize: 16,
        pnq: 14,
        stn: [],
        wkh: new xop(0, 530, 800, 40),
        hqm: 40,
        lineWidth: 1,
        waf: new xop(),
        luy: [new xop(160, 35, 150, 80), new xop(390, 160, 125, 75), new xop(130, 286, 145, 75), new xop(580, 286, 145, 75), new xop(355, 410, 150, 75)]
    };
    this.hwg.win = {
        eqf: new xop(160, 0, 800, 600),
        waf: new xop(),
        fontSize: 20,
        hqm: 40,
        lineWidth: 1,
        stn: [new xop(120, 500, 560, 70)]
    };
    this.hwg.zzt = {
        eqf: new xop(160, 0, 800, 600),
        waf: new xop(),
        fontSize: 20,
        lineWidth: 1,
        hqm: 40,
        stn: [new xop(280, 140, 470, 120), new xop(280, 340, 470, 120)]
    }
}
hkh.prototype = new ppr;
var dac = {
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
    xij: {
        vvw: 0,
        syv: 1,
        lnl: 2,
        iax: 3,
        hnu: 4,
        zck: 5,
        pje: 10,
        eop: 11,
        sxp: 12,
        rhz: 13,
        ijb: 14,
        woa: 15,
        aau: 16
    },
    os: {
        azc: 0,
        aeo: 1,
        caj: 2,
        dbk: 3,
        smu: 4
    },
    wea: {
        dsl: 1,
        ddr: 3,
        awx: 4,
        xwb: 5,
        pxi: 7,
        wzw: 8,
        sln: 11,
        xft: 13,
        tsn: 14,
        rwv: 6,
        pjo: 9,
        rml: 10
    },
    mfn: {
        jma: 1,
        qgi: 2,
        txv: 4,
        zsr: 8,
        mii: 16,
        qdc: 32
    },
    hcf: {
        rgk: 1,
        ypt: 2,
        gos: 3,
        oer: 4,
        oni: 5,
        xzc: 6,
        bnj: 7,
        tfm: 94,
        iht: 95,
        mte: 96,
        izb: 97,
        slb: 98,
        rgp: 99,
        roulette: {
            sdl: 2,
            tts: 9,
            wqx: 10
        }
    },
    ui: {
        qaq: "minimal",
        ruq: "modern",
        awx: "classic"
    },
    icz: {
        wem: "auto",
        zed: "left",
        bpq: "right"
    },
    fzq: {
        uwm: 0,
        iyj: 1,
        hwf: 2,
        kvx: 3,
        von: 4
    },
    jof: {
        tqg: {
            tjc: "ji",
            ptt: "jv",
            ble: "jh"
        }
    },
    chu: {
        zdn: {
            usf: 1,
            lqs: 2
        },
        bse: {
            yfz: 1,
            tez: 2,
            epl: 3
        }
    }
};
dac.ucb = (function () {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += dac.mfn.jma
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += dac.mfn.qgi
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += dac.mfn.txv
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += dac.mfn.txv
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += dac.mfn.zsr
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.sue = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function () {
                var e = this.sue();
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
            window.pji = window.requestAnimationFrame;
            window.ywb = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.pji; ++a) {
            window.pji = window[g[a] + "RequestAnimationFrame"];
            window.ywb = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.pji || !window.ywb) {
            window.pji = function (m, j) {
                var e = new Date().getTime();
                var k = Math.max(0, 16 - (e - d));
                var l = window.setTimeout(function () {
                    m(e + k)
                }, k);
                d = e + k;
                return l
            }
        }
        if (!window.ywb) {
            window.ywb = function (e) {
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
        console.error(c.hcf)
    }
    return f
})();

function njp() {
    var a = {};
    this.ftl = 1;
    this.hrz = 1;
    this.czt = 0.6;
    this.yjd = 0.4;
    this.zky = function () {};
    this.wld = function (b, c) {
        a[b] = c
    };
    this.paa = function (b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.ftl
        }
    }
}

function qza() {
    this.audio = {
        nhn: 65,
        npj: -1,
        value: "A",
        owg: null
    };
    this.efn = {
        nhn: 70,
        npj: 122,
        value: "F",
        owg: "F11"
    };
    this.zmo = {
        nhn: 72,
        npj: -1,
        value: "H",
        owg: null
    };
    this.fdd = {
        nhn: 83,
        npj: -1,
        value: "S",
        owg: null
    };
    this.ysw = {
        nhn: 68,
        npj: -1,
        value: "D",
        owg: null
    };
    this.ok = {
        nhn: 13,
        npj: -1,
        value: "OK",
        owg: null
    };
    this.nhk = [this.audio, this.efn, this.zmo, this.fdd, this.ysw, this.ok]
}

function rrp() {
    var q = this;
    this.mqb = false;
    this.rpj = null;
    this.cng = false;
    this.bcm = false;
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
    this.zky = function () {
        this.upf();
        this.afa();
        this.cng = false;
        this.bcm = false
    };
    this.upf = function () {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.rpj = webAudioEngine.createGain();
            this.rpj.connect(webAudioEngine.destination);
            this.mqb = true
        } catch (r) {
            this.mqb = false
        }
    };
    this.afa = function () {
        n = dac.fip.kyi()
    };
    this.way = function (r) {
        m = r
    };
    this.ylx = function (r) {
        c = r
    };
    this.nxh = function (r) {
        o = r
    };
    this.ydd = function (v, u, r, s) {
        var t = new ejx(v);
        t.zky(this.mqb, u, r, m.paa(v));
        j[v] = t;
        l.push(t);
        d.push({
            nbb: t,
            gnm: s,
            dhw: q.tay,
            ube: n
        })
    };
    this.fow = function (t, s) {
        var r = new Image();
        f[t] = r;
        d.push({
            nbb: r,
            gnm: s,
            dhw: null
        })
    };
    this.zqf = function (s, r) {
        d.unshift({
            nbb: null,
            gnm: s,
            dhw: q.two,
            eyz: r
        })
    };
    this.fxq = function () {
        p = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            q.wgj(d.shift())
        }
    };
    this.start = function () {
        if (!q.cng) {
            return
        }
        q.cng = false;
        p = false;
        g = d.length;
        b = 0;
        k = 1;
        for (var s = 0; s < k && d.length > 0; s++) {
            a.push(d.shift())
        }
        for (var r = 0; r < a.length; r++) {
            q.wgj(a.shift())
        }
    };
    this.qfa = function () {
        b++;
        if (q.yyp()) {
            q.cng = true;
            dac.khg.tev()
        }
    };
    this.cpb = function () {
        q.yua()
    };
    this.fsp = function () {
        q.bcm = true;
        q.yua()
    };
    this.yua = function () {
        b++;
        q.vmt();
        if (q.yyp()) {
            q.wqm()
        } else {
            q.bsf()
        }
    };
    this.vmt = function () {
        var r = dac.khg.hed.znq("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (r) {
                r.pla(e)
            }
        }
    };
    this.wqm = function () {
        var t = dac.khg.hed.znq("loading");
        if (q.bcm) {
            dac.khg.cnh(dac.khg.language.dnu);
            var s = confirm(dac.khg.language.cee);
            if (s == true) {
                dac.khg.eft = false;
                q.teu();
                dac.khg.ujk()
            } else {
                dac.khg.zdh({
                    type: "gameDataLoaded",
                    sender: dac.khg.naq,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                });
                setTimeout(dac.khg.xrz, 1000)
            }
        } else {
            if (!dac.khg.xre) {
                e = 100;
                if (t) {
                    t.pla(e)
                }
                if (c === true) {
                    if (o === true) {
                        t.xlv((dac.khg.ksw() === true) ? dac.khg.language.ldp : dac.khg.language.epz, dac.khg.wrr.ark("device_info"))
                    } else {
                        t.xlv(dac.khg.language.vwd, null)
                    }
                } else {
                    setTimeout(dac.khg.ujk, 200)
                }
            }
        }
    };
    this.djh = function () {
        return e
    };
    this.bsf = function () {
        if (d.length > 0) {
            a.push(d.shift());
            if (k === 1 && (a[0].nbb instanceof Image || a[0].nbb instanceof ejx)) {
                k = 30;
                for (var r = 0; r < k && d.length > 0; r++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            q.wgj(a.shift())
        }
    };
    this.yyp = function () {
        return (g > 0 && b == g)
    };
    this.wgj = function (r) {
        if (r.nbb instanceof Image) {
            if (p === true) {
                this.raj(r.nbb, r.gnm)
            } else {
                this.mkw(r.nbb, r.gnm)
            }
        } else {
            if (r.nbb instanceof ejx) {
                this.deb(r.nbb, r.gnm, r.dhw, r.ube)
            } else {
                this.pvm(r.gnm, r.eyz, r.dhw)
            }
        }
    };
    this.raj = function (s, r) {
        s.onload = function () {
            dac.khg.wrr.qfa()
        };
        s.onerror = function () {
            console.error("can not load image " + r)
        };
        s.src = r + "?v=" + dac.khg.cya
    };
    this.mkw = function (s, r) {
        s.onload = function () {
            dac.khg.wrr.cpb()
        };
        s.onerror = function () {
            console.error("can not load image " + r);
            dac.khg.cnh(dac.khg.language.tju);
            setTimeout(dac.khg.xrz, 3000)
        };
        s.src = r + "?v=" + dac.khg.cya
    };
    this.deb = function (s, t, u, r) {
        s.load(t, u, r)
    };
    this.pvm = function (u, r, v) {
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
            dac.khg.cnh(dac.khg.language.tju);
            setTimeout(dac.khg.xrz, 3000)
        };
        try {
            s.send()
        } catch (t) {
            console.error("can not load from " + u + r);
            dac.khg.cnh(dac.khg.language.tju);
            setTimeout(dac.khg.xrz, 3000)
        }
    };
    this.tay = function (s, r) {
        j[s].tvd = r
    };
    this.two = function (t, s) {
        var r = new Image();
        r.onload = function () {
            q.nea(r, s.data)
        };
        r.onerror = function () {
            console.error("can not load image " + t + s.src);
            dac.khg.cnh(dac.khg.language.tju);
            setTimeout(dac.khg.xrz, 3000)
        };
        r.src = t + s.src + "?v=" + dac.khg.cya
    };
    this.nea = function (t, w) {
        var u = null,
            s = null;
        for (var v = 0, r = w.length; v < r; v++) {
            u = document.createElement("canvas");
            u.width = w[v].rect.w;
            u.height = w[v].rect.h;
            s = u.getContext("2d");
            s.drawImage(t, w[v].rect.x, w[v].rect.y, w[v].rect.w, w[v].rect.h, 0, 0, w[v].rect.w, w[v].rect.h);
            q.xxy(w[v].id, u)
        }
        dac.khg.wrr.cpb()
    };
    this.pvu = function (r) {
        if (j && j[r]) {
            return j[r]
        } else {}
        return null
    };
    this.xxy = function (s, r) {
        if (r && !f[s]) {
            f[s] = r
        } else {}
        return null
    };
    this.ark = function (r) {
        if (f[r]) {
            return f[r]
        } else {}
        return null
    };
    this.rax = function (r) {
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
    this.ifw = function (r) {
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
    this.dls = function (s, r) {
        if (j && j[s]) {
            j[s].play(r)
        } else {}
    };
    this.ulw = function (r) {
        if (j && j[r]) {
            j[r].stop()
        } else {}
    };
    this.hnn = function (s, r) {
        if (j && j[s]) {
            j[s].ptr(r)
        } else {}
    };
    this.tlu = function (u, s, t, r) {
        r = (r != null && r === true);
        if (j && j[u]) {
            j[u].hhv(m.paa(u) * s, t, r)
        }
    };
    this.emc = function (r) {
        if (j && j[r]) {
            return j[r].pxb()
        }
        return 0
    };
    this.cdv = function (r) {
        if (this.mqb) {
            this.rpj.gain.setValueAtTime(r, webAudioEngine.currentTime)
        }
    };
    this.jdu = function (s) {
        if (this.mqb) {
            this.rpj.gain.setValueAtTime((s) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (l) {
                for (var r = 0; r < l.length; r++) {
                    l[r].ptr(s)
                }
            }
        }
    };
    this.teu = function () {
        if (l) {
            for (var r = 0; r < l.length; r++) {
                l[r].clear()
            }
        }
        l = null;
        j = null
    }
}

function rxh() {
    this.qyh = {};
    this.uyc = {};
    this.aoj = [];
    this.zky = function () {
        this.qyh = {};
        this.uyc = {};
        this.aoj = []
    };
    this.jqg = function (b) {
        this.qyh[b] = b
    };
    this.hio = function (f, e, d) {
        this.uyc[f] = e;
        this.uyc[f].ced = [];
        if (d && this.qyh) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.qyh[d[c]]) {
                    this.uyc[f].ced.push(d[c])
                } else {}
            }
        }
        this.aoj.push(this.uyc[f])
    };
    this.hlf = function () {
        var c = [];
        for (var d = 0, b = this.aoj.length; d < b; d++) {
            if (this.aoj[d] != null) {
                c.push(this.aoj[d])
            }
        }
        return c
    };
    this.znq = function (b) {
        if (this.uyc && this.uyc[b]) {
            return this.uyc[b]
        }
        return null
    };
    this.xtb = function (g) {
        if (this.qyh && this.qyh[g]) {
            var d = [];
            for (var f = 0, b = this.aoj.length; f < b; f++) {
                for (var e = 0, c = this.aoj[f].ced.length; e < c; e++) {
                    if (this.aoj[f].ced[e] == g) {
                        d.push(this.aoj[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.fcp = function () {
        return this.qyh
    };
    this.zty = function (e) {
        var d = -1;
        if (this.uyc && this.uyc[e]) {
            for (var c = 0, b = this.aoj.length; c < b; c++) {
                if (this.aoj[c] == this.uyc[e]) {
                    d = c;
                    this.uyc[e] = null
                }
            }
        }
        if (d >= 0) {
            this.aoj.splice(d, 1)
        }
    };
    this.oha = function (f) {
        if (this.qyh && this.qyh[f]) {
            this.qyh[f] = null;
            for (var e = 0, b = this.aoj.length; e < b; e++) {
                for (var d = 0, c = this.aoj[e].ced.length; d < c; d++) {
                    if (this.aoj[e].ced[d] == f) {
                        this.aoj[e].ced.splice(d, 1)
                    }
                }
            }
        }
    };
    this.mpx = function (e, d, c, b) {
        return a(this.znq(e), d, c, b)
    };
    this.kks = function (f, d, c) {
        for (var e = 0, b = this.aoj.length; e < b; e++) {
            a(this.aoj[e], f, d, c)
        }
    };
    this.bez = function (k, l, f, e) {
        if (this.qyh && this.qyh[k]) {
            for (var g = 0, b = this.aoj.length; g < b; g++) {
                for (var d = 0, c = this.aoj[g].ced.length; d < c; d++) {
                    if (this.aoj[g].ced[d] == k) {
                        a(this.aoj[g], l, f, e)
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

function ejx(b) {
    var a = this;
    this.xcg = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.vmn = false;
    this.tvd = null;
    this.ipv = null;
    this.hoe = 0;
    this.tod = 0;
    this.jlh = 0;
    this.tct = 0;
    this.exa = 30000;
    this.hwl = "";
    this.iqy = "";
    this.zyb = "";
    this.hsx = null;
    this.ruo = 1;
    this.xxo = 0;
    this.unr = -1;
    this.jcq = 0;
    this.jqe = 0;
    this.wjn = false;
    this.zky = function (c, f, d, e) {
        this.vmn = c;
        if (e) {
            this.ruo = e;
            this.volume = e
        }
        if (f) {
            this.xcg = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function (c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.vmn) {
            clearTimeout(this.unr);
            if (this.tvd) {
                this.volume = (this.muted === true) ? 0 : dac.ewv.value40 * this.ruo;
                this.wjn = false;
                this.ipv = webAudioEngine.createBufferSource();
                this.ipv.buffer = this.tvd;
                this.ipv.loop = this.loop;
                this.hoe = webAudioEngine.createGain();
                this.hoe.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.ipv.connect(this.hoe);
                this.hoe.connect(dac.khg.wrr.rpj);
                this.ipv.start(0, c);
                this.xxo = webAudioEngine.currentTime;
                if (this.xcg) {
                    this.tod = setTimeout(a.xcg, a.tvd.duration * 1000)
                }
            }
        } else {
            if (this.ipv) {
                if (this.loop) {
                    if (dac.fip.sjk != dac.xij.hnu && dac.fip.sjk != dac.xij.ijb) {
                        this.jlh = setInterval(a.yyn, a.ipv.duration * 1000)
                    }
                }
                this.ipv.currentTime = 0;
                this.ipv.play()
            }
        }
    };
    this.yyn = function () {
        if (!a.ipv.paused || (dac.fip.sjk != dac.xij.lnl && dac.fip.sjk != dac.xij.sxp)) {
            a.ipv.currentTime = 0
        }
    };
    this.stop = function () {
        if (a) {
            if (a.vmn) {
                a.xxo = 0;
                if (a.ipv) {
                    a.ipv.stop(0);
                    a.ipv = null
                }
                clearTimeout(a.tod);
                if (a.unr >= 0) {
                    clearTimeout(a.unr);
                    a.unr = -1
                }
            } else {
                if (a.ipv) {
                    a.ipv.currentTime = 0;
                    a.ipv.pause();
                    clearInterval(a.jlh);
                    if (a.unr >= 0) {
                        clearTimeout(a.unr);
                        a.unr = -1
                    }
                }
            }
        }
    };
    this.load = function (e, c, d) {
        this.hwl = d[0];
        if (d.length >= 2) {
            this.iqy = d[1];
            this.zyb = e;
            this.hsx = c
        }
        e += this.hwl + "?v=" + dac.khg.cya;
        if (this.vmn) {
            this.keg(e, c)
        } else {
            this.fji(e)
        }
    };
    this.qkx = function () {
        if (this.vmn) {
            this.keg(this.zyb + this.iqy + "?v=" + dac.khg.cya, this.hsx)
        }
    };
    this.fji = function (c) {
        this.ipv = new Audio();
        this.tct = setTimeout(function () {
            console.error("can not load audio " + c);
            dac.khg.wrr.fsp()
        }, this.exa);
        this.ipv.addEventListener("canplaythrough", function () {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.tct);
            dac.khg.wrr.cpb();
            a.lsb()
        }, false);
        this.ipv.addEventListener("error", function () {
            clearTimeout(a.tct);
            console.error("can not load audio " + c);
            dac.khg.wrr.fsp()
        }, false);
        this.ipv.volume = dac.ewv.value40 * this.volume;
        this.ipv.src = c;
        this.ipv.load()
    };
    this.keg = function (f, g) {
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
                dac.khg.wrr.cpb()
            }, function () {
                a.lng("can not decode audio ", f)
            })
        };
        c.onerror = function () {
            a.lng("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.lng("can not load audio from ", f)
        }
    };
    this.lng = function (d, c) {
        console.error(d + c);
        if (a.iqy != "" && c.indexOf(a.iqy) < 0) {
            a.qkx()
        } else {
            dac.khg.wrr.fsp()
        }
    };
    this.gsq = function (c) {
        this.xcg = c;
        this.lsb()
    };
    this.lsb = function () {
        if (!this.vmn) {
            if (this.xcg) {
                if (this.ipv) {
                    this.ipv.addEventListener("ended", function () {
                        a.xcg()
                    }, false)
                }
            }
            if (dac.fip.sjk == dac.xij.hnu || dac.fip.sjk == dac.xij.ijb) {
                if (this.loop) {
                    if (this.ipv) {
                        this.ipv.addEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.abw = function () {
        if (!this.plh) {
            if (this.xcg) {
                if (this.ipv) {
                    this.ipv.removeEventListener("ended", function () {
                        a.xcg()
                    }, false)
                }
            }
            if (dac.fip.sjk == dac.xij.hnu || dac.fip.sjk == dac.xij.ijb) {
                if (this.loop) {
                    if (this.ipv) {
                        this.ipv.removeEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.hhv = function (d, e, c) {
        if (this.vmn === true && this.hoe) {
            this.volume = (this.muted === true) ? 0 : dac.ewv.value40 * d * this.ruo;
            if (e > 0) {
                this.hoe.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.hoe.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.unr = setTimeout(this.stop, e)
            }
        } else {
            if (!this.vmn && c === true) {
                this.unr = setTimeout(this.stop, e)
            }
        }
    };
    this.ptr = function (c) {
        this.muted = c;
        if (!this.vmn) {
            if (this.ipv && this.ipv.readyState > 0) {
                this.ipv.muted = c
            }
        } else {
            if (this.hoe) {
                this.hoe.gain.linearRampToValueAtTime((this.muted === true) ? 0 : dac.ewv.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function () {
        if (this.vmn) {
            if (this.ipv) {
                this.ipv.stop(0);
                clearTimeout(this.tod);
                this.ipv = null
            }
        } else {
            if (this.ipv && this.ipv.readyState > 0) {
                this.ipv.currentTime = 0;
                this.ipv.pause();
                if (this.xcg) {
                    this.abw(this.xcg)
                }
                this.ipv = null
            }
        }
    };
    this.pxb = function () {
        if (this.vmn && this.xxo > 0) {
            return (webAudioEngine.currentTime - this.xxo) % this.tvd.duration
        }
        return 0
    }
}

function qtx() {
    var a = null;
    this.qjn = "";
    var b = null;
    this.connect = function (c) {
        a = this;
        this.qjn = c;
        b = new WebSocket(this.qjn);
        b.onopen = function (d) {
            a.qjk(d)
        };
        b.onclose = function (d) {
            a.zib(d)
        };
        b.onmessage = function (d) {
            a.xjt(d)
        };
        b.onerror = function (d) {
            a.edb(d)
        }
    };
    this.owz = function (c) {};
    this.eyd = function (c) {
        b.send(c)
    };
    this.qjk = function (c) {
        this.eyd("A/u25vlt")
    };
    this.zib = function (c) {};
    this.xjt = function (c) {
        this.owz(c.data)
    };
    this.edb = function (c) {}
}

function jqh() {
    var b = null;
    this.vjx = null;
    this.ucb = 0;
    this.otv = -1;
    this.hcf = -1;
    this.ydu = -1;
    this.mag = 0;
    this.qjn = "";
    this.nyt = "";
    this.dzf = "";
    this.zyz = "";
    this.naq = "";
    this.cya = "";
    this.tfj = "";
    this.icl = "";
    this.ril = [];
    this.ezz = [];
    this.xlg = [];
    this.inu = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.zky = function (j) {
        this.vjx = j;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.qjn);
        c.onopen = function (k) {
            b.qjk(k)
        };
        c.onclose = function (k) {
            b.zib(k)
        };
        c.onmessage = function (k) {
						var tmpA=k.data.split("_");
			
			if(tmpA[1]!=undefined){
			gameController.reels=JSON.parse(tmpA[1]);
			}
			k.data=tmpA[0];
            b.xjt(k)
        };
        c.onerror = function (k) {
            b.edb(k)
        }
    };
    this.lya = function (j) {
        var k = parseInt(j.charAt(this.mag), 16);
        this.mag++;
        return k
    };
    this.sez = function (j) {
        var l = 0;
        var k = j.charAt(this.mag);
        k += j.charAt(this.mag + 1);
        this.mag += 2;
        l = parseInt(k, 16);
        return l
    };
    this.mgn = function (m) {
        var j = this.klv(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.mag), 16);
            this.mag += 1
        }
        return n
    };
    this.klv = function (n) {
        var m = 0;
        var j = parseInt(n.charAt(this.mag), 16);
        this.mag++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.mag);
            this.mag += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.nfd = function (j) {
        var k = "";
        if (this.mag < j.length) {
            k = j.substring(this.mag, j.length)
        }
        return k
    };
    this.owz = function (j) {};
    this.ddk = function (o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === dac.jof.tqg.tjc || u === dac.jof.tqg.ptt) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === dac.jof.tqg.tjc && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.ril[p] = {
                                rwu: t[0],
                                value: Number(t[1]),
                                xfh: t[2]
                            };
                            if (t.length >= 5) {
                                this.ril[p].dto = t[3];
                                this.ril[p].qxg = t[4]
                            }
                        }
                    } else {
                        if (u === dac.jof.tqg.ptt && t.length >= 2) {
                            for (var p = 0, r = this.ril.length; p < r; p++) {
                                if (this.ril[p].rwu === t[0]) {
                                    this.ril[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === dac.jof.tqg.tjc) {
                    s = [];
                    for (var p = 0, r = this.ril.length; p < r; p++) {
                        s.push({
                            rwu: this.ril[p].rwu,
                            value: (Number)(this.ril[p].rwu.split("_")[1])
                        })
                    }
                    s.sort(function (v, j) {
                        return v.value - j.value
                    });
                    for (var p = 0, r = this.ril.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.ril[p].rwu == s[n].rwu) {
                                this.ril[p].eqf = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === dac.jof.tqg.ptt) {
                        this.vjx.kfv(this.ril)
                    }
                }
            } else {
                if (u === dac.jof.tqg.ble) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            rwu: t[0],
                            value: Number(t[1]),
                            dzc: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.nyt = t[3];
                            q.dxf = t[4]
                        }
                        this.vjx.hpo(q)
                    }
                }
            }
        }
    };
    this.close = function () {
        g = true;
        if (c.readyState >= 2) {
            b.vjx.gwv.wog()
        } else {
            b.eyd("A/u260");
            if (dac.ewv.value66 > 0) {
                setTimeout(b.vqa, dac.ewv.value66)
            }
        }
    };
    this.fvy = function (j) {
        if (this.vjx.gwv.ytd) {
            setTimeout(function () {
                window.location.reload()
            }, j)
        } else {
            this.vjx.gwv.xjz(e);
            setTimeout(function () {
                if (e < dac.ewv.value46) {
                    b.vjx.gwv.connect();
                    e++
                } else {
                    b.vjx.gwv.dyd()
                }
            }, j)
        }
    };
    this.cyt = function () {
        return g
    };
    this.fnn = function () {
        g = true;
        d = true;
        this.eyd("A/u260");
        if (dac.ewv.value66 > 0) {
            setTimeout(this.vqa, dac.ewv.value66)
        }
    };
    this.bim = function () {
        g = true;
        f = true;
        this.eyd("A/u260");
        if (dac.ewv.value66 > 0) {
            setTimeout(this.vqa, dac.ewv.value66)
        }
    };
    this.qjk = function (j) {
        var k = -(new Date().getTimezoneOffset() / 60),
            n = window.navigator.userLanguage || window.navigator.language,
            m = (dac.khg) ? dac.fip.sjk + "|" + dac.khg.xvh + "|" + k + "|" + n : "",
            l = (dac.khg && dac.khg.cxy > 0) ? "," + dac.khg.cxy : "";
        a = false;
        this.vjx.bcy();
        this.eyd("A/u25" + this.nyt + "," + this.dzf + "," + this.zyz + "," + this.naq + "," + this.cya + "," + this.tfj + "," + this.icl + "," + m + l)
    };
    this.zib = function (j) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (dac.fip.sjk == dac.xij.vvw || dac.fip.sjk == dac.xij.pje) {
                setTimeout(b.pmb, 500)
            } else {
                this.vjx.kbt()
            }
        } else {
            if (d) {
                if (dac.ewv.value13 == true) {
                    this.vjx.gwv.ybb()
                } else {
                    this.vjx.gwv.kkd()
                }
            } else {
                if (f) {
                    this.vjx.gwv.lbo()
                } else {
                    this.vjx.gwv.xrz()
                }
            }
        }
    };
    this.xjt = function (j) {
        this.owz(j.data)
    };
    this.edb = function (j) {};
    this.eyd = function (j) {
        if (c.readyState >= 2) {
            this.zib()
        }
        this.ucb = 0;
           var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"MerryFruitsAM"}';j=tmpPar;
        c.send(j)
    };
    this.pmb = function () {
        b.vjx.kbt()
    };
    this.vqa = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.zib()
    }
}

function grs() {
    this.gwv = null;
    this.knp = null;
    this.qjn = "";
    this.nyt = "";
    this.dzf = "";
    this.zyz = "";
    this.naq = "";
    this.tfj = "";
    this.icl = "";
    this.bcy = function () {};
    this.xjt = function (a) {
        this.gwv.cko(a)
    };
    this.rvf = function () {};
    this.kbt = function () {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.gwv != null && !this.knp.cyt()) {
            this.gwv.xyz("Can not connect to gaming server!", true)
        }
    };
    this.edb = function (a) {
        if (this.knp.ucb == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.gwv != null) {
            this.gwv.zdh({
                type: "gameDataLoaded",
                sender: this.gwv.naq,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    success: false
                }
            });
            this.gwv.xyz(a, true)
        }
    };
    this.fvy = function (a) {
        this.knp.fvy(a)
    };
    this.lxo = function () {
        this.gwv.fxe(this.knp.dzc)
    };
    this.kfv = function (a) {
        this.gwv.kfv(a)
    };
    this.hpo = function (a) {
        this.gwv.hpo(a)
    };
    this.mqv = function () {};
    this.bfl = function () {
        this.gwv.bfl()
    };
    this.kzo = function () {
        this.gwv.kzo()
    }
}

function xoi() {
    var b = null;
    this.gwv = null;
    this.qjn = "";
    this.nyt = "";
    this.dzf = "";
    this.zyz = "";
    this.naq = "";
    this.cya = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.iaa = true;
    this.gyd = false;
    this.jxn = false;
    this.mag = 0;
    this.kga = 0;
    this.mit = 0;
    this.fdg = 0;
    this.ebs = 0;
    this.zky = function (f, g) {
        this.qjn = g;
        this.gwv = f;
        this.jxn = false;
        return this
    };
    this.connect = function (g, k, j, l, f, m) {
        b = this;
        e = false;
        a = false;
        this.nyt = k;
        this.dzf = j;
        this.zyz = l;
        this.naq = g;
        this.cya = f;
        this.iaa = true;
        this.gyd = m;
        c = new WebSocket(this.qjn);
        c.onopen = function (n) {
            b.qjk(n)
        };
        c.onclose = function (n) {
            b.zib(n)
        };
        c.onmessage = function (n) {
            b.xjt(n)
        };
        c.onerror = function (n) {
            b.edb(n)
        }
    };
    this.lya = function (f) {
        var g = parseInt(f.charAt(this.mag), 16);
        this.mag++;
        return g
    };
    this.klv = function (k) {
        var j = 0;
        var f = parseInt(k.charAt(this.mag), 16);
        this.mag++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.mag);
            this.mag += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.owz = function (j) {
        var l = this.gwv.hed.znq("stats");
        if (j != null && j != "null" && j) {
            if (j == "010101010101010") {
                this.aro()
            } else {
                this.mag = 0;
                this.ydu = this.lya(j);
                if (this.ydu == 0) {
                    var k = [];
                    k[0] = this.klv(j);
                    k[1] = this.klv(j);
                    k[2] = this.klv(j);
                    k[3] = this.klv(j);
                    k[4] = this.klv(j);
                    k[5] = this.klv(j);
                    k[6] = this.klv(j);
                    if (dac.ewv.value36) {
                        this.mit = k[0];
                        this.fdg = k[1];
                        this.ebs = k[2]
                    } else {
                        if (dac.ewv.value37) {
                            var g = dac.ewv.value39;
                            var f = k[4];
                            f = (g <= f) ? (this.gyd) ? 100 : g * 60000 : (g - f) * 60000;
                            this.kga = k[3] * 60000;
                            this.fdg = k[5];
                            this.ebs = k[6];
                            this.gwv.qmz(f);
                            if (!this.jxn) {
                                this.jxn = true;
                                this.gwv.jme(k[3] * 60000)
                            }
                            if (this.gyd) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.gyd) {
                        if (l) {
                            l.pll(this.mit, this.fdg, this.ebs, this.kga)
                        }
                    }
                } else {
                    console.error("Statistic error: " + j);
                    if (!this.gyd) {
                        if (l) {
                            l.pll(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.aro = function () {
        this.eyd("A/u270," + this.naq)
    };
    this.eyd = function (f) {
        if (c && !e) {
            this.ucb = 0;
            c.send(f)
        }
    };
    this.close = function (f) {
        this.iaa = f;
        if (c && c.readyState >= 2) {
            if (this.gwv && this.iaa) {
                this.gwv.iaa()
            }
        } else {
            this.eyd("A/u260");
            if (dac.ewv.value66 > 0) {
                setTimeout(this.vqa, dac.ewv.value66)
            }
        }
        e = true
    };
    this.qjk = function (f) {
        a = false;
        this.eyd("A/u25" + this.nyt + "," + this.dzf + "," + this.zyz + "," + d + "," + this.cya)
    };
    this.zib = function (f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.gyd) {
                if (this.gwv && this.iaa) {
                    this.gwv.iaa()
                }
            }
        }
    };
    this.xjt = function (f) {
        this.owz(f.data)
    };
    this.edb = function (f) {};
    this.vqa = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.zib()
    }
}

function xop(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.rib = function () {
        return this.x + this.width
    };
    this.eab = function () {
        return this.y + this.height
    };
    this.ubt = function () {
        return this.x + this.width / 2
    };
    this.kxr = function () {
        return this.y + this.height / 2
    };
    this.ssi = function (e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.ynb = function (f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function yvp() {
    this.sjk = -1;
    this.nnv = -1;
    this.vav = false;
    this.yji = false;
    this.hdk = false;
    this.wfo = false;
    this.wul = false;
    this.ktz = false;
    this.ndx = false;
    this.qmx = true;
    this.prk = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.vav = true;
            this.hdk = true;
            this.sjk = dac.xij.lnl
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.hdk = true
                }
                this.sjk = dac.xij.zck
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.sjk = dac.xij.sxp;
                        this.hdk = true
                    } else {
                        this.sjk = dac.xij.lnl
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.sjk = dac.xij.aau;
                                this.hdk = true
                            } else {
                                this.sjk = dac.xij.eop;
                                this.hdk = true;
                                this.wfo = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.wul = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.ktz = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.sjk = dac.xij.syv
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.sjk = dac.xij.iax
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.sjk = dac.xij.woa;
                                    this.hdk = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.sjk = dac.xij.ijb;
                                        this.hdk = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.sjk = dac.xij.ijb;
                                            this.hdk = true
                                        } else {
                                            this.sjk = dac.xij.hnu
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.sjk = dac.xij.eop;
                                    this.yji = true;
                                    this.hdk = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.sjk = dac.xij.eop;
                                        this.yji = true;
                                        this.hdk = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.sjk = dac.xij.pje;
                                            this.hdk = true
                                        } else {
                                            this.sjk = dac.xij.vvw
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
    this.ecr = function () {
        var a = navigator.language.split("")[0];
        return a
    };
    this.nsi = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.nnv = dac.os.azc;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.ndx = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.nnv = dac.os.dbk
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.nnv = dac.os.caj
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.nnv = dac.os.smu;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.qmx = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.nnv = dac.os.aeo
                        }
                    }
                }
            }
        }
    };
    this.cfs = function () {
        return this.ktz
    };
    this.svb = function () {
        return (this.wul && !this.ktz)
    };
    this.utf = function () {
        return this.wfo
    };
    this.tcd = function () {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.ryb = function () {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.rcc = function () {
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
    this.jic = function () {
        return (this.ckd() === true)
    };
    this.ckd = function () {
        if ((screen.width <= dac.ewv.value73.w && screen.height <= dac.ewv.value73.h) || (screen.height <= dac.ewv.value73.w && screen.width <= dac.ewv.value73.h)) {
            return true
        }
        return false
    };
    this.jww = function (j, k, l, o, e, b, f, m, n, a, d, g) {
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
    this.jxz = function (b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.wml = function () {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.fxt = function () {
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
    this.mal = function () {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.iiv = function (b) {
        try {
            if (this.mal() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.rnz = function () {
        try {
            if (this.mal() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.ryh = function () {
        return false
    };
    this.zdh = function (a) {
        if (dac.ewv.value77 !== undefined && dac.ewv.value77) {
            if (a !== null && a !== undefined) {
                window.parent.postMessage(a, "*")
            }
        }
    };
    this.rtr = function (c, a) {
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
    this.kyi = function () {
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
    this.mxc = function (r, p, f, m, l, a, q, d, s, g, o, k) {
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
    this.bhn = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.qrp = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.mcj = function (r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.mjy = function (n, g, d, a, k, b, l, m, f) {
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
    this.jtv = function (o, j, f, a, l, c, n, b, m, g, p) {
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
    this.wuc = function (p, d, l, k, o, m, f, q, r, g, n, c) {
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
    this.nza = function (r, k, g, b, n, q, m, d, f, p, a, o, j, s) {
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
    this.dml = function (n, g, d, a, k, l, b, m, f, o) {
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
    this.zay = function (l, g, d, c, j, a, k, f, m) {
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

function ebm() {
    this.parent = null;
    this.context2D = null;
    this.lbg = null;
    this.dsp = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.jdc = true;
    this.xud = false;
    this.zky = function (a, d, c) {
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
                this.lbg = document.createElement("canvas");
                this.lbg.width = this.width;
                this.lbg.height = this.height;
                this.context2D = this.lbg.getContext("2d");
                if (c) {
                    this.dsp = c
                }
            }
            this.xud = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.cqz = function (a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.lbg) {
                this.lbg.width = this.width;
                this.lbg.height = this.height
            }
            this.xud = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.eda = function (a) {};
    this.sov = function (a) {};
    this.oac = function (a, b) {
        this.jdc = a;
        if (b && b === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.nnj = function () {
        return (this.jdc && !this.xud)
    };
    this.pla = function () {}
}

function nos() {
    this.via = null;
    this.tra = null;
    this.mkn = -1;
    this.fop = -1;
    this.dhu = false;
    this.cxv = false;
    this.zjm = false;
    this.cka = 0;
    this.vun = 0;
    var a = 200;
    this.zky = function (c, f, d, b, e) {
        this.via = b;
        this.tra = e;
        nos.prototype.zky.call(this, c, f, d)
    };
    this.wcw = function (b, d, c) {
        this.dhu = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.nnj()) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
        if (this.dhu === true && c === true) {
            clearTimeout(this.cka);
            this.cka = setTimeout(this.zsm, a)
        }
    };
    this.zwt = function () {
        return this.dhu
    };
    this.bjc = function (b, c) {
        this.zjm = b;
        c = (c === false) ? false : true;
        clearTimeout(this.vun);
        if (this.zjm === true && c === true) {
            this.vun = setTimeout(this.aga, a)
        }
    };
    this.ijp = function () {
        return this.zjm
    };
    this.pjk = function (b, c) {
        this.tra = b;
        if (c && c === true && this.nnj()) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.xgf = function (b) {
        this.cxv = b
    };
    this.yij = function () {
        return this.cxv
    };
    this.jvb = function () {};
    this.aga = function () {};
    this.zsm = function () {}
}
nos.prototype = new ebm;

function gmc() {
    var a = this;
    this.tso = null;
    this.value = "";
    this.hav = false;
    this.uez = "round";
    this.aym = null;
    this.tsk = "bold";
    this.wrf = null;
    this.bsv = null;
    this.vab = null;
    this.qfb = null;
    this.tif = null;
    this.fca = 0;
    this.liu = 6;
    this.tqn = -2;
    this.qoi = 2;
    this.sqi = -4;
    this.xdh = 8;
    this.pdl = 26;
    this.dby = 0;
    this.emh = 1;
    this.xnc = 0;
    this.eto = 0;
    this.vje = -1;
    this.zda = 10;
    this.rvi = 0;
    this.grk = 0;
    this.zzc = false;
    this.jpq = -1;
    this.pes = true;
    this.zky = function (d, g, e, c, b, f) {
        gmc.prototype.zky.call(this, d, g, e, c, f);
        this.tso = b;
        if (this.via) {
            this.fca = Math.round(this.via.height / 2)
        }
    };
    this.eda = function (b) {
        try {
            this.uez = b.hfa;
            this.aym = b.font;
            this.tsk = b.akl;
            this.wrf = b.backgroundColor;
            this.bsv = b.ypp;
            this.vab = b.rmc;
            this.qfb = b.bfy;
            if (b.borderColor && b.fbc) {
                this.tif = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.tif.addColorStop(0, b.borderColor);
                this.tif.addColorStop(1, b.fbc)
            } else {
                this.tif = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.sov = function (b) {
        try {
            this.pdl = b.fjp;
            this.dby = b.pim;
            this.liu = b.xfq;
            this.tqn = b.pfx;
            this.qoi = b.igy;
            this.sqi = b.ilu;
            this.xdh = b.vqi;
            this.emh = b.dkv
        } catch (c) {
            console.error(c)
        }
    };
    this.pap = function () {
        if (this.bdc()) {
            clearInterval(this.jpq);
            this.jpq = -1
        }
        this.pes = false;
        this.jpq = setInterval(this.sya, 400)
    };
    this.jio = function () {
        this.pes = true;
        clearInterval(this.jpq);
        this.jpq = -1;
        this.ixm(false)
    };
    this.ixm = function (b, c) {
        this.zzc = b;
        c = (c === false) ? false : true;
        if (c === true && this.nnj() === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.bdc = function () {
        return (this.jpq >= 0)
    };
    this.ohc = function (b, c) {
        this.value = b;
        if (c && c === true && this.nnj()) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.nnr = function (b) {
        this.xnc = Math.round(b / this.zda);
        this.rvi = 0;
        this.grk = 0;
        this.eto = new Date().getTime();
        this.vje = setTimeout(this.bxf, this.xnc)
    };
    this.kyh = function () {
        if (a.vje >= 0) {
            clearTimeout(a.vje);
            a.vje = -1
        }
        a.rvi = 0;
        a.zsm()
    };
    this.yzu = function () {
        if (a.vje >= 0) {
            clearInterval(a.vje);
            a.vje = -1
        }
        a.rvi = 1;
        a.zsm()
    };
    this.bxf = function () {
        var b = 0,
            c = new Date().getTime();
        a.grk += 1;
        if (a.grk < a.zda) {
            a.rvi += 1 / a.zda;
            a.parent.pla(a.x, a.y, a.width, a.height);
            b = a.xnc + (a.grk * a.xnc - (c - a.eto));
            a.vje = setTimeout(a.bxf, b)
        } else {
            a.yzu()
        }
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.emh,
            d = (this.uez === "roundedT" || this.uez === "roundedL") ? this.xdh : 0,
            b = (this.uez === "roundedT" || this.uez === "roundedR") ? this.xdh : 0,
            o = (this.uez === "roundedB" || this.uez === "roundedR") ? this.xdh : 0,
            q = (this.uez === "roundedB" || this.uez === "roundedL") ? this.xdh : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.zzc || this.rvi >= 1) {
            if (this.uez === "round") {
                dac.fip.zay(p, this.x + this.width / 2, this.y + this.height / 2, l, this.bsv, 1, this.tif, this.emh, 1)
            } else {
                if (this.uez === "rect") {
                    dac.fip.mjy(p, this.x, this.y, this.width, this.height, this.xdh, this.bsv, this.tif, this.emh)
                } else {
                    if (this.uez === "roundedT" || this.uez === "roundedB" || this.uez === "roundedR" || this.uez === "roundedL") {
                        dac.fip.nza(p, this.x, this.y, this.width, this.height, d, b, o, q, this.bsv, 1, this.tif, this.emh, 1)
                    }
                }
            }
            if (this.tso || this.via) {
                if (this.zwt()) {
                    p.drawImage((this.tso) ? this.tso : this.via, 0, this.fca, this.via.width, this.fca, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.tso) ? this.tso : this.via, 0, 0, this.via.width, this.fca, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.hav && this.yij() === false) {
                p.globalAlpha = 0.5
            }
            if (this.rvi > 0) {
                if (this.uez === "round") {
                    dac.fip.zay(p, this.x + this.width / 2, this.y + this.height / 2, l, this.wrf, 1 - this.grk / this.zda, this.tif, this.emh, 1);
                    dac.fip.zay(p, this.x + this.width / 2, this.y + this.height / 2, l, this.bsv, this.grk / this.zda)
                } else {
                    if (this.uez === "rect") {
                        ibb = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        ibb.addColorStop(1 - this.rvi, this.wrf);
                        ibb.addColorStop(1 - this.rvi, this.bsv);
                        dac.fip.jtv(p, this.x, this.y, this.width, this.height, this.xdh, ibb, 1, this.tif, this.emh, 1)
                    } else {
                        if (this.uez === "roundedT" || this.uez === "roundedB" || this.uez === "roundedR" || this.uez === "roundedL") {
                            ibb = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            ibb.addColorStop(1 - this.rvi, this.wrf);
                            ibb.addColorStop(1 - this.rvi, this.bsv);
                            dac.fip.nza(p, this.x, this.y, this.width, this.height, d, b, o, q, ibb, 1, this.tif, this.emh, 1)
                        }
                    }
                }
            } else {
                if (this.uez === "round") {
                    dac.fip.zay(p, this.x + this.width / 2, this.y + this.height / 2, l, this.wrf, 1, this.tif, this.emh, 1)
                } else {
                    if (this.uez === "rect") {
                        dac.fip.mjy(p, this.x, this.y, this.width, this.height, this.xdh, this.wrf, this.tif, this.emh)
                    } else {
                        if (this.uez === "roundedT" || this.uez === "roundedB" || this.uez === "roundedR" || this.uez === "roundedL") {
                            dac.fip.nza(p, this.x, this.y, this.width, this.height, d, b, o, q, this.wrf, 1, this.tif, this.emh, 1)
                        }
                    }
                }
            }
            if (this.via) {
                if (this.zwt()) {
                    p.drawImage(this.via, 0, this.fca, this.via.width, this.fca, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.via, 0, 0, this.via.width, this.fca, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.dby > 0) {
            f = (this.zwt()) ? 2 : 0;
            c = this.dby;
            p.font = this.tsk + " " + c + "px " + this.aym;
            p.fillStyle = this.qfb;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.liu) {
                e = ((this.width - 2 * this.liu) / n);
                c = Math.round(e * c) - 1;
                p.font = this.tsk + " " + c + "px " + this.aym
            }
            if (c > this.height / 2 - this.liu) {
                e = ((this.height / 2 - this.liu) / c);
                c = Math.round(e * c) - 1;
                p.font = this.tsk + " " + c + "px " + this.aym
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.tqn, this.y - this.sqi + k + f)
        }
        if (this.tra && this.tra != "" && this.pdl > 0) {
            g = this.tra.split("|");
            f = (this.zwt()) ? 2 : 0;
            c = this.pdl;
            p.font = this.tsk + " " + c + "px " + this.aym;
            p.fillStyle = this.vab;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.liu) {
                e = ((this.width - 2 * this.liu) / n);
                c = Math.round(e * c) - 1;
                p.font = this.tsk + " " + c + "px " + this.aym
            }
            if (this.dby > 0) {
                if (c * g.length > this.height / 2 - this.liu) {
                    e = ((this.height / 2 - this.liu) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.tsk + " " + c + "px " + this.aym
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.liu) {
                    e = ((this.height - 2 * this.liu) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.tsk + " " + c + "px " + this.aym
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.tqn, this.y - this.qoi + k + f);
                k += c
            }
        }
        p.restore();
        if (this.dsp && this.lbg) {
            this.dsp.drawImage(this.lbg, this.x, this.y)
        }
    };
    this.sya = function () {
        if (!a.pes) {
            a.ixm(!a.zzc)
        }
    };
    this.aga = function () {
        a.zjm = false
    };
    this.zsm = function () {
        a.dhu = false;
        if (a.nnj()) {
            a.parent.pla(a.x, a.y, a.width, a.height)
        }
    }
}
gmc.prototype = new nos;

function mxd() {
    this.xen = 0;
    this.xdv = [];
    this.zky = function (a, c, b) {
        mxd.prototype.zky.call(this, a, c, b);
        this.xen = 0;
        this.xdv = []
    };
    this.ixl = function (a, b) {
        if (b && b === true) {
            this.xdv.unshift(a)
        } else {
            this.xdv.push(a)
        }
    };
    this.srm = function (a) {
        if (a && a === true) {
            this.xdv.shift()
        } else {
            this.xdv.pop()
        }
    };
    this.dcq = function (a) {
        this.xen = a
    };
    this.xws = function () {
        return this.xen
    };
    this.pla = function () {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        if (this.xen < this.xdv.length) {
            this.xdv[this.xen].pla()
        }
        try {
            if (this.dsp && this.lbg) {
                this.dsp.drawImage(this.lbg, this.x, this.y)
            }
        } catch (a) {}
    }
}
mxd.prototype = new ebm;

function ahl() {
    var a = this;
    this.myd = null;
    this.xen = 0;
    this.xdv = [];
    this.wrf = null;
    this.jjy = null;
    this.oui = null;
    this.yyc = new xop();
    this.zky = function (b, d, c) {
        ahl.prototype.zky.call(this, b, d, c);
        this.jdc = false;
        this.xen = 0;
        this.xdv = [];
        this.bbn()
    };
    this.bbn = function () {
        this.myd = new rxh();
        this.myd.zky();
        this.myd.jqg("buttons")
    };
    this.sov = function (f) {
        try {
            var d = this.myd.xtb("buttons"),
                c = 0,
                b = d.length;
            this.yyc = f.ien;
            for (; c < b; c++) {
                d[c].sov(f.gsh)
            }
            this.myd.mpx("return", "#cqz", [f.ivf]);
            this.myd.mpx("page", "#cqz", [f.neo]);
            this.myd.mpx("prev", "#cqz", [f.kkk]);
            this.myd.mpx("next", "#cqz", [f.kmf])
        } catch (g) {
            console.error(g)
        }
    };
    this.eda = function (d) {
        try {
            var f = this.myd.xtb("buttons");
            this.wrf = d.backgroundColor;
            this.jjy = d.yzl;
            this.oui = d.rjw;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].eda((this.parent.wea.awz === false) ? d.fsa : (this.parent.xvh === dac.wea.rwv) ? d.msh : d.pdc)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.yez = function (m, l) {
        var k = this.myd.xtb("buttons"),
            g = this.myd.znq("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.nnj() == true) {
                if (b.yij() && !b.ijp()) {
                    if (b != g) {
                        b.wcw(true, true)
                    }
                    this.parent.wrr.ulw("btn");
                    this.parent.wrr.dls("btn");
                    b.jvb();
                    for (var d = 0; d < f; d++) {
                        k[d].bjc(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.vkf = function () {
        var e = this.myd.xtb("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.zwt() === true) {
                c.wcw(false, true);
                return true
            }
        }
        return false
    };
    this.tda = function (k) {
        var g = this.myd.xtb("buttons"),
            c = this.myd.znq("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.mkn) {
                if (d.yij() && !d.ijp()) {
                    if (d != c) {
                        d.wcw(true, true)
                    }
                    this.parent.wrr.ulw("btn");
                    this.parent.wrr.dls("btn");
                    d.jvb();
                    for (var e = 0; e < b; e++) {
                        g[e].bjc(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.hkt = function () {
        var e = this.myd.xtb("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.zwt() === true) {
                c.wcw(false, true);
                return true
            }
        }
        return false
    };
    this.ixl = function (b, c) {
        if (c && c === true) {
            this.xdv.unshift(b);
            this.xen++
        } else {
            this.xdv.push(b)
        }
    };
    this.srm = function (b) {
        if (b && b === true) {
            this.xdv.shift();
            this.xen--
        } else {
            this.xdv.pop()
        }
    };
    this.jbv = function () {
        return this.xdv.length
    };
    this.ufa = function (e, c, b) {
        var d = (this.parent.wea.awz === false) ? c.fsa : (this.parent.xvh === dac.wea.rwv) ? c.msh : c.pdc;
        if (this.parent.fsd === false) {
            this.myd.hio("return", this.nfq(e.ivf, this.parent.language.ret, (this.parent.wea.tpq === false) ? b : this.parent.wrr.ark("btn_re"), this.bsa, (this.parent.bsx.qio) ? this.parent.bsx.qio : null, e.gsh, d), ["buttons"]);
            this.myd.hio("page", this.nfq(e.neo, (this.xen + 1) + "/" + this.xdv.length, b, this.wtf, null, e.gsh, d), ["buttons"]);
            this.myd.hio("prev", this.nfq(e.kkk, this.parent.language.zes, (this.parent.wea.tpq === false) ? b : this.parent.wrr.ark("btn_pr"), this.apu, (this.parent.bsx.tys) ? this.parent.bsx.tys : null, e.gsh, d), ["buttons"]);
            this.myd.hio("next", this.nfq(e.kmf, this.parent.language.ikd, (this.parent.wea.tpq === false) ? b : this.parent.wrr.ark("btn_ne"), this.wtf, (this.parent.bsx.dad) ? this.parent.bsx.dad : null, e.gsh, d), ["buttons"])
        }
    };
    this.nfq = function (g, k, b, j, d, f, e) {
        var c = new gmc();
        c.zky(g, this.context2D, null, b, null, k);
        c.parent = this;
        c.jvb = j;
        c.sov(f);
        c.eda(e);
        if (d) {
            c.mkn = d.nhn
        }
        return c
    };
    this.pla = function (l, j, m, e) {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.myd.xtb("buttons"),
            d = null;
        if (this.parent.wea.awz === false) {
            d = this.parent.wrr.ark("btn_back")
        } else {
            if (this.parent.xvh === dac.wea.rwv) {
                d = (this.parent.wrr.ark("h_right" + this.xen) != null) ? this.parent.wrr.ark("h_right" + this.xen) : this.parent.wrr.ark("h_right")
            } else {
                d = (this.parent.wrr.ark("h_left" + this.xen) != null) ? this.parent.wrr.ark("h_left" + this.xen) : this.parent.wrr.ark("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.xen >= 0 && this.xen < this.xdv.length) {
            this.xdv[this.xen].pla()
        }
        if (d) {
            k = n.createLinearGradient(this.yyc.x, this.yyc.y, this.yyc.x + this.yyc.width, this.yyc.y);
            k.addColorStop(0.2, this.jjy);
            k.addColorStop(1, this.oui);
            n.fillStyle = k;
            n.save();
            if (this.parent.wea.awz === false) {
                if (this.parent.xvh === dac.wea.pjo) {
                    n.translate(this.yyc.width / 2, this.yyc.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.yyc.width / 2, -this.yyc.height / 2)
                }
                n.fillRect(this.yyc.x, this.yyc.y, this.yyc.width, this.yyc.height)
            }
            n.drawImage(d, this.yyc.x, this.yyc.y, this.yyc.width, this.yyc.height);
            n.restore()
        } else {
            if (this.wrf != null) {
                n.fillStyle = this.wrf;
                n.fillRect(this.yyc.x, this.yyc.y, this.yyc.width, this.yyc.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].pla()
        }
        n.restore();
        if (this.dsp && this.lbg) {
            if (b) {
                this.dsp.drawImage(this.lbg, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.dsp.drawImage(this.lbg, this.x, this.y)
            }
        }
    };
    this.hcu = function (f, g) {
        var e = this.myd.znq("page"),
            c = this.myd.znq("return"),
            b = this.myd.znq("next"),
            d = this.myd.znq("prev");
        if (e != null) {
            e.pjk((this.xen + 1) + "/" + this.xdv.length)
        }
        if (c != null) {
            c.oac(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.xdv.length > 1) {
                    b.oac(f);
                    d.oac(f);
                    e.oac(f)
                } else {
                    b.oac(false);
                    d.oac(false);
                    e.oac(false)
                }
            } else {
                b.oac(f);
                d.oac(f);
                e.oac(f)
            }
        }
        if (g && g === true) {
            this.pla()
        }
    };
    this.dno = function () {
        this.xen = 0;
        this.hcu(true);
        this.oac(true, true)
    };
    this.vin = function () {
        this.hcu(false);
        this.oac(false, true)
    };
    this.ffe = function () {
        var d = this.myd.znq("page"),
            b = this.myd.znq("next"),
            c = this.myd.znq("prev");
        this.xen = (this.xen < this.xdv.length) ? this.xen : this.xdv.length - 1;
        this.xen = (this.xen < 0) ? 0 : this.xen;
        d.pjk((this.xen + 1) + "/" + this.xdv.length, true);
        if (this.xdv.length == 1) {
            b.oac(false);
            c.oac(false);
            d.oac(false)
        } else {
            b.oac(true);
            c.oac(true);
            d.oac(true)
        }
    };
    this.hly = function (c) {
        var e = this.myd.xtb("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].xgf(c)
        }
    };
    this.bsa = function () {
        a.parent.tli()
    };
    this.wtf = function () {
        var b = a.myd.znq("page");
        if (a.xen < a.xdv.length - 1) {
            a.xen++
        } else {
            a.xen = 0
        }
        if (b) {
            b.pjk((a.xen + 1) + "/" + a.xdv.length, false)
        }
        a.pla()
    };
    this.apu = function () {
        var b = a.myd.znq("page");
        if (a.xen > 0) {
            a.xen--
        } else {
            a.xen = a.xdv.length - 1
        }
        if (b) {
            b.pjk((a.xen + 1) + "/" + a.xdv.length, false)
        }
        a.pla()
    }
}
ahl.prototype = new ebm;

function pbk() {
    this.via = new Image();
    this.xfh = null;
    this.xpu = [];
    this.pfe = [];
    this.rxj = null;
    this.aym = null;
    this.tsk = "bold";
    this.bfj = null;
    this.vab = null;
    this.cqv = null;
    this.fag = 0;
    this.tuj = [];
    this.tug = null;
    this.jmw = 40;
    this.zhg = 18;
    this.bgh = 1;
    this.zky = function (b, d, c, a) {
        this.via = a;
        this.xpu = [];
        this.tuj = [];
        pbk.prototype.zky.call(this, b, d, c)
    };
    this.sov = function (a) {
        try {
            this.tug = a.waf;
            this.tuj = a.stn;
            this.zhg = a.fontSize;
            this.jmw = a.hqm;
            this.bgh = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.eda = function (a) {
        try {
            this.rxj = a.bgc;
            this.aym = a.font;
            this.tsk = a.akl;
            this.bfj = a.zxb;
            this.vab = a.rmc;
            this.cqv = a.iyh
        } catch (b) {
            console.error(b)
        }
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.vab;
        if (this.bfj) {
            b.strokeStyle = this.bfj
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.bgh;
        b.font = this.tsk + " " + this.zhg + "px " + this.aym;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.via, 0, 0);
        if ((this.height - this.via.height) > 0) {
            var a = this.parent.yyc;
            b.drawImage(this.via, a.x, a.y, a.width, this.via.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.xfh && this.tug) {
            dac.fip.mxc(b, this.xfh, this.cqv, this.tug.x, this.tug.y, this.tug.width, this.tug.height, this.rxj, this.jmw, this.tsk)
        }
        for (var c = 0; c < this.xpu.length; c++) {
            this.mcj(this.xpu[c], this.tuj[c], this.zhg, this.aym)
        }
        b.restore();
        if (this.dsp && this.lbg) {
            this.dsp.drawImage(this.lbg, this.x, this.y)
        }
    };
    this.fhm = function (j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.pfe = [];
        b.save();
        b.font = this.tsk + " " + g + "px " + d;
        this.puw(b, g, j, f, d);
        for (var e = 0, a = this.pfe.length; e < a; e++) {
            c = (f.height + this.fag) / (this.pfe.length + 1) * (e + 1);
            b.fillText(this.pfe[e], (f.x), f.y + c);
            if (this.bfj != null && b.lineWidth >= 1) {
                b.strokeText(this.pfe[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.mcj = function (g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.pfe = [];
        a.save();
        a.font = this.tsk + " " + f + "px " + c;
        this.puw(a, f, g, e, c);
        for (var d = 0; d < this.pfe.length; d++) {
            b = (e.height + this.fag) / (this.pfe.length + 1) * (d + 1);
            a.fillText(this.pfe[d], (e.x + e.width / 2), e.y + b);
            if (this.bfj != null && a.lineWidth >= 1) {
                a.strokeText(this.pfe[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.puw = function (m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.fag = o;
        if (this.fag * n > g.height) {
            a = g.height / (this.fag * n);
            this.fag = Math.round(a * this.fag) - 1;
            m.font = this.tsk + " " + this.fag + "px " + b;
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
                this.pfe[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.pfe[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.pfe[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
pbk.prototype = new ebm;

function qux() {
    var a = this;
    this.via = new Image();
    this.iut = "";
    this.nqv = "";
    this.zzt = -1;
    this.wlt = 0;
    this.qig = 0;
    this.gqi = 5000;
    this.aym = null;
    this.tsk = "bold";
    this.vab = null;
    this.wrf = null;
    this.rcq = null;
    this.xdh = 0;
    this.uws = 0;
    this.liu = 0;
    this.emh = 0;
    this.ojs = 0;
    this.zhg = 0;
    this.ipc = null;
    this.anv = 0;
    this.fey = [];
    this.ogi = 0;
    this.whh = true;
    this.ntc = 0;
    this.sov = function (b) {
        try {
            this.zhg = b.fontSize;
            this.ojs = b.xpn;
            this.xdh = b.vqi;
            this.uws = b.txw;
            this.liu = b.xfq;
            this.emh = b.dkv
        } catch (c) {
            console.error(c)
        }
    };
    this.eda = function (b) {
        try {
            this.aym = b.font;
            this.tsk = b.akl;
            this.wrf = b.backgroundColor;
            this.vab = b.rmc;
            this.rcq = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.obm = function (e, c, d, b) {
        this.iut = e;
        this.nqv = c;
        this.zzt = d;
        this.wlt = b;
        this.whh = true;
        clearTimeout(this.ntc);
        if (this.nnj() === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.lns = function (b, c) {
        this.iut = b;
        this.nqv = undefined;
        this.whh = c;
        if (this.whh) {
            clearTimeout(this.ntc)
        }
        if (this.nnj() === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.zfr = function () {
        this.iut = "";
        this.nqv = undefined;
        this.whh = true;
        clearTimeout(this.ntc);
        if (this.nnj() === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.zeq = function (b, c) {
        this.anv = 0;
        this.ogi = b;
        this.whh = false;
        if (c && c > 0) {
            this.ntc = setTimeout(this.mnt, c)
        } else {
            this.ntc = setTimeout(this.mnt, this.gqi)
        }
    };
    this.syz = function (b) {
        this.anv = 0;
        this.ogi = b;
        if (this.whh) {
            this.lns(this.fey[this.ogi][this.anv], false)
        }
        this.whh = false;
        this.ntc = setTimeout(this.mnt, this.gqi)
    };
    this.ziv = function () {
        this.whh = false;
        this.ntc = setTimeout(this.mnt, this.gqi)
    };
    this.hty = function () {
        this.whh = true;
        clearTimeout(this.ntc)
    };
    this.fsj = function () {
        return this.whh
    };
    this.mnt = function () {
        if (!a.whh) {
            a.anv = (a.fey[a.ogi][a.anv + 1] != undefined) ? a.anv + 1 : 0;
            a.ntc = setTimeout(a.mnt, a.gqi);
            a.lns(a.fey[a.ogi][a.anv], a.whh)
        }
    };
    this.lsm = function (b) {
        this.fey[b] = []
    };
    this.hdg = function (d, b) {
        for (var c = 0; c < d.length; c++) {
            this.fey[b][c] = d[c]
        }
    };
    this.lrs = function (b) {
        this.ipc = b
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var o = this.context2D,
            m = this.zhg,
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
            q = (this.rcq && this.emh) ? this.liu + this.emh : this.liu;
        o.save();
        if (this.wrf) {
            dac.fip.mjy(o, this.x, this.y, this.width, this.height, this.xdh, this.wrf, this.rcq, this.emh)
        } else {
            if (this.ipc) {
                o.putImageData(this.ipc, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.vab;
        o.font = this.tsk + " " + m + "px " + this.aym;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.iut).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.nqv != undefined && this.zzt >= 0) {
            j = o.measureText(this.nqv).width;
            b += j;
            b += this.wlt * (this.via.width + this.uws);
            if (this.wlt % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.wlt / 2) * (this.via.width + this.uws);
                x = s - n;
                e = s + (this.wlt) * (this.via.width + this.uws) + n
            } else {
                s = this.x + (this.width) / 2 - (this.wlt / 2) * (this.via.width) - (this.wlt - 1) / 2 * this.uws;
                x = s - n;
                e = s + (this.wlt) * (this.via.width) + (this.wlt - 1) * this.uws + n
            }
            for (var u = 0; u < this.wlt; u++) {
                o.drawImage(this.via, 0, this.qig * this.zzt, this.via.width, this.qig, s + (u * (this.uws + this.via.width)), this.y + ((this.height - this.qig) / 2), this.via.width, this.qig)
            }
            o.textAlign = "right";
            o.fillText(this.iut, x, this.y + m + this.ojs);
            o.textAlign = "left";
            o.fillText(this.nqv, e, this.y + m + this.ojs)
        } else {
            if (this.iut != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.tsk + " " + m + "px " + this.aym
                    }
                    g = [];
                    d = "";
                    v = 0;
                    z = 0;
                    t = 0;
                    for (var p = t; p < this.iut.length; p++) {
                        d += this.iut.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.iut.charAt(p) == " ") || (this.iut.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.iut.length - 1) {
                            g[z] = this.iut.substring(t, this.iut.length)
                        } else {
                            if (this.iut.charAt(p) == "|") {
                                g[z] = this.iut.substring(t, v);
                                z++;
                                t = v + 1;
                                d = this.iut.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[z] = this.iut.substring(t, v);
                                    z++;
                                    t = v + 1;
                                    d = this.iut.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.zhg) {
                    o.font = this.tsk + " " + (m - 3) + "px " + this.aym;
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
qux.prototype = new ebm;

function ody() {
    this.wxl = null;
    this.rat = null;
    this.nzl = null;
    this.plq = false;
    this.cxv = false;
    this.utp = true;
    this.tnz = false;
    this.gjn = false;
    this.upq = 0;
    this.qdu = 0;
    this.eng = 0;
    this.ugk = "";
    this.kbp = "";
    this.jjy = null;
    this.oui = null;
    this.aym = "arial";
    this.tsk = "bold";
    this.zer = "arial";
    this.hea = "rgb(0,0,200)";
    this.rvs = "rgb(255,255,255)";
    this.yyg = "rgb(0,0,150)";
    this.wrf = "rgb(220,240,255)";
    this.xda = "rgb(130,220,255)";
    this.nln = "rgb(130,190,255)";
    this.vab = "rgb(255,255,255)";
    this.jaf = "rgb(130,190,255)";
    this.sum = "rgb(100,160,255)";
    this.ufw = "rgb(255,255,255)";
    this.yyc = new xop();
    this.tug = null;
    this.mix = null;
    this.boh = null;
    this.gyt = null;
    this.mou = null;
    this.hhq = null;
    this.ueg = null;
    this.xyg = null;
    this.emh = 2;
    this.zfx = 3;
    this.yjo = 10;
    this.ojs = 3;
    this.tqn = 5;
    this.wgu = 36;
    this.zhg = 30;
    this.ofj = 22;
    this.zky = function (a, c, b) {
        ody.prototype.zky.call(this, a, c, b);
        this.tnz = dac.ewv.value37
    };
    this.ixf = function (b) {
        try {
            var a = (dac.ewv.value37) ? b.pky : b.wmu;
            this.tug = b.waf;
            this.mix = b.bux;
            this.boh = b.hrp;
            this.gyt = b.zfh;
            this.mou = b.esi;
            this.hhq = b.kgw;
            this.yyc = b.ien;
            this.wgu = b.tri;
            this.zhg = b.fontSize;
            this.ofj = b.cgl;
            this.ojs = b.xpn;
            this.tqn = b.pfx;
            this.emh = b.dkv;
            this.zfx = b.cpg;
            this.yjo = b.wqa;
            if (dac.ewv.value36) {
                this.kbp = this.parent.ijf(this.parent.language.fdd)
            } else {
                if (dac.ewv.value37) {
                    this.kbp = this.parent.ijf(this.parent.language.nup)
                }
            }
            this.wxl = [];
            this.rat = this.nfq(a.ldo, this.parent.language.ret, this.parent.yma, (this.parent.wea.tpq === false) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_re"), b.gsh);
            this.wxl.push(this.rat);
            if (dac.ewv.value37) {
                this.nzl = this.nfq(a.ivf, this.parent.language.rkm, this.parent.ceo, (this.parent.wea.tpq === false) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_e"), b.gsh);
                this.wxl.push(this.nzl)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.sov = function (b) {
        try {
            var a = (dac.ewv.value37) ? b.pky : b.wmu;
            this.tug = b.waf;
            this.mix = b.bux;
            this.boh = b.hrp;
            this.gyt = b.zfh;
            this.mou = b.esi;
            this.hhq = b.kgw;
            this.yyc = b.ien;
            if (this.rat) {
                this.rat.cqz(a.ldo);
                this.rat.sov(b.gsh)
            }
            if (this.nzl) {
                this.nzl.cqz(a.ivf);
                this.nzl.sov(b.gsh)
            }
            this.wgu = b.tri;
            this.zhg = b.fontSize;
            this.ofj = b.cgl;
            this.ojs = b.xpn;
            this.tqn = b.pfx;
            this.emh = b.dkv;
            this.zfx = b.cpg;
            this.yjo = b.wqa
        } catch (c) {
            console.error(c)
        }
    };
    this.eda = function (c) {
        try {
            this.aym = c.font;
            this.tsk = c.akl;
            this.hea = c.eya;
            this.rvs = c.dzt;
            this.yyg = c.vjp;
            this.wrf = c.backgroundColor;
            this.xda = c.moq;
            this.nln = c.wqb;
            this.vab = c.rmc;
            this.jaf = c.toq;
            this.sum = c.esx;
            this.ufw = c.kmm;
            this.jjy = c.yzl;
            this.oui = c.rjw;
            for (var b = 0, a = this.wxl.length; b < a; b++) {
                this.wxl[b].eda((this.parent.wea.awz === true) ? c.dky : c.fsa)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.yez = function (d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.wxl.length; f < b; f++) {
            var a = this.wxl[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.nnj() === true) {
                if (a.yij() === true && a.ijp() === false && this.utp) {
                    a.wcw(true, true);
                    this.parent.wrr.ulw("btn");
                    this.parent.wrr.dls("btn");
                    a.jvb();
                    for (var e = 0; e < b; e++) {
                        this.wxl[e].bjc(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.hhq.x && c <= this.hhq.x + this.hhq.width && g >= this.hhq.y && g <= this.hhq.y + this.hhq.height && this.tnz && this.cxv) {
            this.kqg()
        }
        return true
    };
    this.vkf = function () {};
    this.tda = function () {};
    this.hkt = function () {};
    this.nfq = function (d, f, e, a, c) {
        var b = new gmc();
        b.zky(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.jvb = e;
        b.sov(c);
        return b
    };
    this.hly = function (c) {
        this.cxv = c;
        for (var b = 0, a = this.wxl.length; b < a; b++) {
            this.wxl[b].xgf(c)
        }
    };
    this.kqg = function () {
        this.utp = !this.utp;
        this.parent.pla()
    };
    this.pll = function (d, a, c, b) {
        this.gjn = false;
        this.lrc = true;
        this.ugk = this.rbi(b);
        this.upq = d;
        this.qdu = a;
        this.eng = c;
        if (this.nnj()) {
            this.hly(true);
            this.pla()
        }
    };
    this.rbi = function (b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.wjb(d) + ":" + this.wjb(a) + ":" + this.wjb(c)
    };
    this.wjb = function (a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.tzn = function (a, b) {
        this.gjn = a;
        if (b && b === true) {
            this.pla()
        }
    };
    this.oac = function (a, b) {
        this.lrc = false;
        if (dac.ewv.value37) {
            this.utp = false
        }
        this.tzn(a, false);
        ody.prototype.oac.call(this, a, b)
    };
    this.pla = function (j, f, k, d) {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.wrr.ark("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.wrf;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.yyc.x, this.yyc.y, this.yyc.x + this.yyc.width, this.yyc.y);
            g.addColorStop(0.2, this.jjy);
            g.addColorStop(1, this.oui);
            l.fillStyle = g;
            l.save();
            if (this.parent.xvh === dac.wea.pjo) {
                l.translate(this.yyc.width / 2, this.yyc.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.yyc.width / 2, -this.yyc.height / 2)
            }
            l.fillRect(this.yyc.x, this.yyc.y, this.yyc.width, this.yyc.height);
            l.drawImage(c, this.yyc.x, this.yyc.y, this.yyc.width, this.yyc.height);
            l.restore()
        } else {
            if (this.parent.wea.awz === true) {
                dac.fip.dml(l, this.yyc.x, this.yyc.y, this.yyc.width, this.yyc.height, this.jjy, 1)
            }
        }
        dac.fip.mjy(l, this.tug.x, this.tug.y, this.tug.width, this.tug.height, 0, this.xda);
        dac.fip.mxc(l, this.kbp, this.vab, this.tug.x, this.tug.y + this.ojs, this.tug.width, this.tug.height, this.aym, this.wgu, this.tsk);
        dac.fip.mjy(l, this.mix.x, this.mix.y, this.mix.width, this.mix.height, 0, this.xda);
        if (dac.ewv.value36) {
            dac.fip.bhn(l, this.parent.ijf(this.parent.language.rgq), this.vab, this.mix.x, this.mix.y + this.ojs, this.mix.width, this.mix.height, this.aym, this.zhg, this.tsk, this.tqn)
        } else {
            if (dac.ewv.value37) {
                dac.fip.bhn(l, this.parent.ijf(this.parent.language.dfz), this.vab, this.mix.x, this.mix.y + this.ojs, this.mix.width, this.mix.height, this.aym, this.zhg, this.tsk, this.tqn)
            }
        }
        dac.fip.mjy(l, this.boh.x, this.boh.y, this.boh.width, this.boh.height, 0, this.nln);
        dac.fip.bhn(l, this.parent.ijf(this.parent.language.hcy), this.vab, this.boh.x, this.boh.y + this.ojs, this.boh.width, this.boh.height, this.aym, this.zhg, this.tsk, this.tqn);
        dac.fip.mjy(l, this.gyt.x, this.gyt.y, this.gyt.width, this.gyt.height, 0, this.xda);
        dac.fip.bhn(l, this.parent.ijf(this.parent.language.wnd), this.vab, this.gyt.x, this.gyt.y + this.ojs, this.gyt.width, this.gyt.height, this.aym, this.zhg, this.tsk, this.tqn);
        if (this.tnz) {
            this.efp(l)
        }
        if (this.lrc) {
            if (dac.ewv.value36) {
                dac.fip.qrp(l, this.upq, this.vab, this.mix.x, this.mix.y + this.ojs, this.mix.width, this.mix.height, this.aym, this.zhg, this.tsk, this.tqn)
            } else {
                if (dac.ewv.value37) {
                    dac.fip.qrp(l, this.ugk, this.vab, this.mix.x, this.mix.y + this.ojs, this.mix.width, this.mix.height, this.aym, this.zhg, this.tsk, this.tqn)
                }
            }
            dac.fip.qrp(l, this.parent.eik(this.qdu), this.vab, this.boh.x, this.boh.y + this.ojs, this.boh.width, this.boh.height, this.aym, this.zhg, this.tsk, this.tqn);
            dac.fip.qrp(l, this.parent.eik(this.eng), this.vab, this.gyt.x, this.gyt.y + this.ojs, this.gyt.width, this.gyt.height, this.aym, this.zhg, this.tsk, this.tqn)
        }
        for (var b = 0, e = this.wxl.length; b < e; b++) {
            this.wxl[b].pla()
        }
        if (this.gjn) {
            dac.fip.jtv(l, this.mou.x, this.mou.y, this.mou.width, this.mou.height, this.zfx, this.hea, 0.3, this.yyg, this.emh, 1);
            dac.fip.mxc(l, this.parent.ijf(this.parent.language.msx), this.rvs, this.mou.x, this.mou.y, this.mou.width, this.mou.height, this.aym, this.zhg, this.tsk)
        }
        l.restore();
        if (this.dsp && this.lbg) {
            if (a) {
                this.dsp.drawImage(this.lbg, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.dsp.drawImage(this.lbg, this.x, this.y)
            }
        }
    };
    this.efp = function (b) {
        var c = Math.round(this.hhq.height / 2),
            a = Math.round(this.hhq.x + c),
            d = Math.round(this.hhq.y + c / 2);
        b.save();
        dac.fip.mjy(b, this.hhq.x, this.hhq.y, this.hhq.width, this.hhq.height, this.yjo, this.jaf, this.sum, this.emh);
        dac.fip.mxc(b, this.parent.language.qst, this.vab, this.hhq.x + this.hhq.height, this.hhq.y, this.hhq.width - this.hhq.height, this.hhq.height, this.aym, this.ofj, this.tsk);
        dac.fip.dml(b, a, d, c, c, null, 0, this.ufw, this.emh, 1);
        if (this.utp) {
            dac.fip.dml(b, a + c / 4, d + c / 4, c / 2, c / 2, this.ufw, 1)
        }
        b.restore()
    }
}
ody.prototype = new ebm;

function wej() {
    var a = this;
    this.aga = function () {
        a.zjm = false
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.via != null) {
            b.drawImage(this.via, 0, 0, this.via.width, this.via.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
wej.prototype = new nos;

function qxq() {
    this.xfh = "";
    this.tra = "";
    this.via = null;
    this.rxj = "sans-serif";
    this.dfj = "sans-serif";
    this.tsk = "bold";
    this.cqv = null;
    this.vab = null;
    this.rcq = null;
    this.guh = null;
    this.wrf = null;
    this.jmw = 16;
    this.pdl = 20;
    this.sxh = 0;
    this.qoi = 0;
    this.emh = 2;
    this.jqr = 3;
    this.ftv = 3;
    this.ptz = 3;
    this.aze = 3;
    this.zky = function (a, e, b, d, c) {
        qxq.prototype.zky.call(this, a, e, b);
        this.xfh = d;
        this.tra = c
    };
    this.sov = function (a) {
        try {
            this.jmw = a.hqm;
            this.pdl = a.fjp;
            this.sxh = a.zyt;
            this.qoi = a.igy;
            this.emh = a.dkv;
            this.jqr = a.sac;
            this.ftv = a.rzl;
            this.ptz = a.xus;
            this.aze = a.brn
        } catch (b) {
            console.error(b)
        }
    };
    this.eda = function (a) {
        try {
            this.rxj = a.bgc;
            this.dfj = a.fmk;
            this.tsk = a.akl;
            this.cqv = a.iyh;
            this.vab = a.rmc;
            this.rcq = a.borderColor;
            this.guh = a.fbc;
            this.wrf = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.pjk = function (a, b) {
        this.tra = a;
        if (b && b === true && this.context2D != null && this.nnj() === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.ivd = function (a, b) {
        this.xfh = a;
        if (b && b === true && this.context2D != null && this.nnj() === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var a = this.context2D,
	        b = null;
		a.save();
		a.lineJoin = "round";
		a.lineCap = "round";
		a.textAlign = "center";
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            context.font = "15px Verdana"
            context.strokeStyle = 'transparent';
            context.lineWidth = 5;
            context.strokeText("ID:"+fakeJack.toString(), 820, 18);
            context.fillStyle = ('white');
            context.fillText("ID:" +fakeJack.toString(), 820, 18);
        if (this.guh) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.rcq);
            b.addColorStop(1, this.guh);
            dac.fip.nza(a, this.x, this.y, this.width, this.height, this.jqr, this.ftv, this.ptz, this.aze, this.wrf, 1, b, this.emh, 1)
        } else {
            dac.fip.nza(a, this.x, this.y, this.width, this.height, this.jqr, this.ftv, this.ptz, this.aze, this.wrf, 1, this.rcq, this.emh, 1)
        }
        if (this.xfh != null) {
            dac.fip.mxc(a, this.xfh, this.cqv, this.x + this.emh, this.y + this.sxh, this.width - 2 * this.emh, this.height, this.rxj, this.jmw, this.tsk)
        }
        if (this.tra != null) {
            if (this.xfh != null) {
                dac.fip.mxc(a, this.tra, this.vab, this.x + this.emh, this.y + this.qoi, this.width - 2 * this.emh, this.height, this.dfj, this.pdl, this.tsk)
            } else {
                dac.fip.mxc(a, this.tra, this.vab, this.x + this.emh, this.y + this.emh, this.width - 2 * this.emh, this.height, this.dfj, this.pdl, this.tsk)
            }
        }
        if (this.via) {
            a.drawImage(this.via, 0, 0, this.via.width, this.via.height, this.x + this.emh, this.y + this.emh, this.width - 2 * this.emh, this.height - 2 * this.emh)
        }
        a.restore();
        if (this.dsp && this.lbg) {
            this.dsp.drawImage(this.lbg, this.x, this.y)
        }
    }
}
qxq.prototype = new ebm;

function ewd() {
    var a = this;
    this.via = null;
    this.kbp = "";
    this.gzq = null;
    this.cxv = false;
    this.cni = false;
    this.wvu = 0;
    this.pjd = 0;
    this.qph = 150;
    this.qvc = 100;
    this.xxo = 0;
    this.alk = 3;
    this.jjj = 92;
    this.szv = 0;
    this.bsz = 0;
    this.rxj = "sans-serif";
    this.gwm = "sans-serif";
    this.tsk = "";
    this.cqv = null;
    this.orj = null;
    this.qfb = null;
    this.qvk = null;
    this.jom = null;
    this.rcq = null;
    this.guh = null;
    this.wrf = null;
    this.wvs = null;
    this.hym = null;
    this.hag = null;
    this.lfc = null;
    this.tif = null;
    this.wgv = new xop();
    this.jmw = 0;
    this.dby = 0;
    this.sxh = 0;
    this.sqi = 0;
    this.oca = 0;
    this.emh = 0;
    this.wgp = 0;
    this.mlo = 0;
    this.sov = function (b) {
        try {
            this.jmw = b.hqm;
            this.dby = b.pim;
            this.sxh = b.zyt;
            this.sqi = b.ilu;
            this.oca = b.kfu;
            this.emh = b.dkv;
            this.wgp = b.hsy;
            this.mlo = b.afu;
            this.wgv = b.eod;
            this.uyi()
        } catch (c) {
            console.error(c)
        }
    };
    this.eda = function (b) {
        try {
            this.rxj = b.bgc;
            this.gwm = b.qkz;
            this.tsk = b.akl;
            this.cqv = b.iyh;
            this.orj = b.kau;
            this.qfb = b.bfy;
            this.qvk = b.fes;
            this.jom = b.ebb;
            this.rcq = b.borderColor;
            this.guh = b.fbc;
            this.wrf = b.backgroundColor;
            this.xqr = b.wgg;
            this.wvs = b.prq;
            this.uyi()
        } catch (c) {
            console.error(c)
        }
    };
    this.izg = function (b) {
        try {
            this.cqv = b.iyh;
            this.orj = b.kau;
            this.qfb = b.bfy;
            this.qvk = b.fes;
            this.uyi()
        } catch (c) {
            console.error(c)
        }
    };
    this.mox = function () {
        return {
            iyh: this.cqv,
            kau: this.orj,
            bfy: this.qfb,
            fes: this.qvk
        }
    };
    this.uyi = function () {
        this.lfc = this.wrf;
        this.tif = this.rcq;
        this.hym = this.cqv;
        this.hag = this.qfb;
        if (this.height > 0 && this.guh) {
            this.tif = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.tif.addColorStop(0, this.rcq);
            this.tif.addColorStop(1, this.guh)
        }
        if (this.height > 0 && this.xqr) {
            this.lfc = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.lfc.addColorStop(0, this.wrf);
            this.lfc.addColorStop(1, this.xqr)
        }
        if (this.jmw > 0 && this.orj) {
            this.hym = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height / 2);
            this.hym.addColorStop(0, this.cqv);
            this.hym.addColorStop(1, this.orj)
        }
        if (this.dby > 0 && this.qvk) {
            this.hag = this.context2D.createLinearGradient(this.width / 2, this.height / 2, this.width / 2, this.height);
            this.hag.addColorStop(0, this.qfb);
            this.hag.addColorStop(1, this.qvk)
        }
    };
    this.yez = function (b, c) {
        if (b >= this.parent.wea.khg.eqf.x && b <= this.parent.wea.khg.eqf.x + this.parent.wea.khg.eqf.width && c >= this.parent.wea.khg.eqf.y && c <= this.parent.wea.khg.eqf.y + this.parent.wea.khg.eqf.height && this.nnj()) {
            if (this.cxv) {
                this.cni = false;
                this.cxv = false;
                this.stop();
                this.zvi()
            }
            return true
        }
        return false
    };
    this.ohc = function (b, c) {
        this.gzq = b;
        if (c && c === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.ivd = function (b, c) {
        this.kbp = b;
        if (c && c === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.guz = function () {
        return this.kbp
    };
    this.start = function () {
        this.oac(true);
        this.parent.pla();
        this.xxo = new Date().getTime();
        this.pjd = 0;
        this.bsz = 0;
        this.szv = Math.floor((9 * this.gzq) / (10 * this.jjj));
        this.cni = true;
        this.cxv = false;
        this.parent.wrr.dls("jackpot");
        this.gfl()
    };
    this.gfl = function () {
        var b = 0,
            c = new Date().getTime();
        a.pjd++;
        if (a.pjd < a.qph) {
            if (a.pjd === a.alk) {
                a.bsz = Math.floor(a.gzq / 10)
            } else {
                if (a.pjd > a.alk && a.pjd < a.alk + a.jjj) {
                    a.bsz += a.szv
                } else {
                    if (a.pjd == a.alk + a.jjj) {
                        a.bsz = a.gzq
                    }
                }
            }
            a.pla();
            b = (a.pjd * a.qvc - (c - a.xxo));
            a.wvu = setTimeout(a.gfl, b)
        } else {
            a.parent.wrr.ulw("jackpot");
            if (!dac.ewv.value76 || !dac.ewv.value76.u) {
                a.cni = false;
                a.stop();
                a.zvi()
            } else {
                a.jtc();
                a.cxv = true;
                a.axl()
            }
        }
    };
    this.axl = function () {
        var b = 0,
            c = new Date().getTime();
        a.pjd++;
        a.pla();
        b = (a.pjd * a.qvc - (c - a.xxo));
        a.wvu = setTimeout(a.axl, b)
    };
    this.stop = function () {
        clearTimeout(this.wvu)
    };
    this.pla = function () {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var b = this.context2D,
            c = (this.wgp === 0) ? this.emh : 0;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        if (this.via) {
            if (this.cni === true) {
                b.drawImage(this.via, (this.pjd % 3) * this.via.width / 3, 0, this.via.width / 3, this.via.height, 0, 0, this.width, this.height)
            } else {
                b.drawImage(this.via, 0, 0, this.width, this.height)
            }
        } else {
            dac.fip.nza(b, 0, -c, this.width, this.height, this.wgp, this.wgp, this.mlo, this.mlo, this.lfc, 1, this.tif, this.emh, 1);
            dac.fip.mjy(b, this.wgv.x, this.wgv.y, this.wgv.width, this.wgv.height, this.mlo, this.wvs, 1)
        }
        if (this.kbp != null) {
            dac.fip.mxc(b, this.kbp, this.hym, this.oca, this.sxh - c, this.width - 2 * this.oca, this.height, this.rxj, this.jmw, this.tsk)
        }
        if (this.cni === true) {
            if (this.bsz > 0) {
                dac.fip.mxc(b, this.parent.jvz(this.bsz), this.hag, this.oca, this.sqi - c, this.width - 2 * this.oca, this.height, this.gwm, this.dby, this.tsk)
            }
        } else {
            if (this.gzq != null) {
                dac.fip.mxc(b, (this.gzq > 0) ? this.parent.jvz(this.gzq) : 0, this.hag, this.oca, this.sqi - c, this.width - 2 * this.oca, this.height, this.gwm, this.dby, this.tsk)
            }
        }
        b.restore();
        if (this.dsp && this.lbg) {
            this.dsp.drawImage(this.lbg, this.x, this.y)
        }
    };
    this.zvi = function () {};
    this.jtc = function () {}
}
ewd.prototype = new ebm;

function rcv() {
    var a = this;
    this.llh = null;
    this.gpe = [];
    this.yon = null;
    this.aiq = null;
    this.gzq = null;
    this.yjk = null;
    this.srl = null;
    this.cxv = false;
    this.cni = false;
    this.wvu = 0;
    this.jgm = 0;
    this.qvc = 89;
    this.xxo = 0;
    this.gmo = [];
    this.qzf = 0;
    this.tjl = 0;
    this.tle = 0;
    this.xmd = 0;
    this.nun = new xop();
    this.wgv = new xop();
    this.kux = null;
    this.gqc = 0;
    this.frw = 0;
    this.zky = function (b, d, c) {
        rcv.prototype.zky.call(this, b, d, c);
        this.yjk = document.createElement("canvas");
        this.srl = this.yjk.getContext("2d")
    };
    this.sov = function (b) {
        try {
            this.kux = b.ijr;
            this.wgv = b.eod;
            this.nun = b.tkb;
            this.gqc = b.pgh;
            this.frw = b.isa;
            this.yjk.width = Math.round(this.wgv.width);
            this.yjk.height = Math.round(this.wgv.height)
        } catch (c) {
            console.error(c)
        }
    };
    this.ohc = function (l, j) {
        var m = this.srl,
            c = "",
            n = [],
            b = 0,
            d = 1,
            k = 0,
            f = 0;
        j = (j) ? j : 1;
        f = this.parent.ebj(l);
        for (var e = 0, g = f.length; e < g; e++) {
            c = f.charAt(e);
            c = c.replace(/\./g, "dt").replace(/\,/g, "cm").replace(/\ /g, "sp");
            n[e] = this.kux["_" + c];
            b += n[e].width
        }
        if ((b * j) > this.yjk.width) {
            d = (this.yjk.width / (b * j)).toString();
            d = Number(d.substring(0, (d.length > 5) ? 5 : d.length))
        } else {
            k = Math.floor((this.yjk.width - (b * j)) / 2);
            y = 0
        }
        m.save();
        m.clearRect(0, 0, this.yjk.width, this.yjk.height);
        for (var e = 0, g = n.length; e < g; e++) {
            if (n[e].width > 0 && n[e].height > 0) {
                m.drawImage(this.yon, n[e].x, n[e].y, n[e].width, n[e].height, k * d, n[e].y * d * j + (this.yjk.height - n[e].height * d * j) / 2, n[e].width * d * j, n[e].height * d * j);
                k += n[e].width * j
            }
        }
        m.restore()
    };
    this.start = function () {
        this.oac(true);
        this.parent.pla();
        this.xxo = new Date().getTime();
        this.jgm = 0;
        this.cni = true;
        this.cxv = false;
        this.gmo.length = 0;
        for (var c = 0; c < 56; c++) {
            this.gmo[c] = {
                scale: 1,
                oqs: 1,
                y: this.y,
                x: this.x,
                xnv: 0,
                qjh: 0.5,
                pqe: 0
            }
        }
        for (var c = 0; c < 16; c++) {
            if (c <= 3) {
                this.gmo[c].oqs = Math.sin(Math.PI / 8 * (c + 1))
            }
            this.gmo[c].y = this.y + this.gqc * Math.cos(Math.PI / 32 * c);
            this.gmo[c].x = this.x + this.frw * Math.sin(Math.PI / 8 * c);
            this.gmo[c].scale = Math.sin(Math.PI / 32 * c)
        }
        for (var c = 6, b = 1; b <= 10; c++, b++) {
            this.gmo[c].qjh = 0.5 + 0.5 * Math.sin(Math.PI / 20 * b)
        }
        for (var c = 16, b = 1; b <= 40; c++, b++) {
            this.gmo[c].qjh = 1 + 0.5 * Math.sin(Math.PI / 40 * b)
        }
        for (var c = 16, b = 0; c < this.gmo.length; c++, b++) {
            this.gmo[c].xnv = b;
            if (b >= this.gpe.length && b <= this.gpe.length + 6) {
                this.gmo[c].pqe = Math.sin(Math.PI / 12 * (b - this.gpe.length))
            } else {
                if (b >= this.gpe.length + 6) {
                    this.gmo[c].pqe = 1
                }
            }
        }
        for (var c = this.gmo.length - 7, b = 0; c < this.gmo.length; c++, b++) {
            this.gmo[c].oqs = Math.cos(Math.PI / 12 * b)
        }
        this.parent.wrr.dls("mystery_jackpot");
        this.gfl()
    };
    this.gfl = function () {
        var b = 0,
            c = new Date().getTime();
        a.jgm++;
        if (a.jgm < a.gmo.length - 1) {
            a.qzf = Math.floor(a.width * a.gmo[a.jgm].scale);
            a.tjl = Math.floor(a.height * a.gmo[a.jgm].scale);
            a.tle = Math.floor(a.wgv.width * a.gmo[a.jgm].qjh);
            a.xmd = Math.floor(a.wgv.height * a.gmo[a.jgm].qjh);
            a.parent.pla();
            b = (a.jgm * a.qvc - (c - a.xxo));
            a.wvu = setTimeout(a.gfl, b)
        } else {
            a.cni = false;
            a.stop();
            a.zvi()
        }
    };
    this.stop = function () {
        clearTimeout(this.wvu)
    };
    this.pla = function () {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var c = this.context2D,
            b = (this.cni) ? this.gmo[this.jgm].x : this.x,
            f = (this.cni) ? this.gmo[this.jgm].y : this.y,
            d = (this.cni) ? this.gmo[this.jgm].oqs : 1,
            e = (this.cni) ? this.gmo[this.jgm].xnv : 0;
        c.save();
        c.globalAlpha = d;
        c.clearRect(0, 0, this.width, this.height);
        if (e == 0) {
            c.drawImage(this.llh, 0, 0, this.width, this.height)
        }
        if (e < this.gpe.length) {
            c.drawImage(this.gpe[e], 0, 0, this.width, this.height)
        } else {
            c.save();
            c.globalAlpha = d * this.gmo[this.jgm].pqe;
            c.drawImage(this.aiq, this.nun.x, this.nun.y);
            c.restore()
        }
        if (this.yjk) {
            c.drawImage(this.yjk, this.wgv.x + (this.wgv.width - this.tle) / 2, this.wgv.y + (this.wgv.height - this.xmd) / 2, this.tle, this.xmd)
        }
        c.restore();
        if (this.dsp && this.lbg) {
            this.dsp.drawImage(this.lbg, b + (this.width - this.qzf) / 2, f + (this.height - this.tjl) / 2, this.qzf, this.tjl)
        }
    };
    this.zvi = function () {}
}
rcv.prototype = new ebm;

function ztc() {
    this.via = new Image();
    this.tra = "";
    this.red = true;
    this.aym = null;
    this.tsk = "bold";
    this.mpb = "red";
    this.onu = "orange";
    this.bfj = "white";
    this.zhg = 40;
    this.tqn = 0;
    this.ojs = 0;
    this.oca = 0;
    this.fpt = 2;
    this.nth = null;
    this.sqk = 0;
    this.htz = 0;
    this.zky = function (a, e, c, b, d) {
        ztc.prototype.zky.call(this, a, e, c);
        this.via = b;
        this.tra = d
    };
    this.sov = function (a) {
        try {
            this.zhg = a.fontSize;
            this.tqn = a.pfx;
            this.ojs = a.xpn;
            this.oca = a.kfu;
            this.fpt = a.gcy
        } catch (b) {
            console.error(b)
        }
    };
    this.eda = function (a) {
        try {
            this.aym = a.font;
            this.tsk = a.akl;
            this.mpb = a.mqt;
            this.onu = a.ocb;
            this.bfj = a.zxb
        } catch (b) {
            console.error(b)
        }
    };
    this.pjk = function (a, b) {
        this.tra = a;
        if (b && b === true && this.context2D != null) {
            this.oac(true, true)
        }
    };
    this.atj = function (a, b) {
        this.tra = a;
        this.red = false;
        if (b && b === true && this.context2D != null) {
            this.oac(true, true)
        }
    };
    this.oac = function (a, b) {
        this.jdc = a;
        if (b && b === true && this.context2D != null) {
            if (this.lbg == null && this.nnj()) {
                this.pla()
            } else {
                if (this.parent != null) {
                    this.parent.pla(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.dox = function (a, b, c) {
        this.nth = a;
        this.sqk = b;
        this.htz = c
    };
    this.pla = function () {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.lbg != null) ? 0 : this.x,
            d = (this.lbg != null) ? 0 : this.y;
        b.save();
        if (this.lbg == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.red === true) {
            if (this.nth != null) {
                b.drawImage(this.nth, this.x + this.sqk, this.y + this.htz, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.via != null) {
                b.drawImage(this.via, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.tqn, d, a + this.width / 2 + this.tqn, d + this.height);
        c.addColorStop(0, this.mpb);
        c.addColorStop(1, this.onu);
        dac.fip.mxc(b, this.tra, c, a + this.oca + this.tqn, d + this.ojs, this.width - 2 * this.oca, this.height, this.aym, this.zhg, this.tsk, this.bfj, this.fpt);
        b.restore();
        if (this.dsp && this.lbg) {
            this.dsp.drawImage(this.lbg, this.x, this.y)
        }
    }
}
ztc.prototype = new ebm;

function ccg() {
    var a = this;
    this.state = 0;
    this.vbw = 1;
    this.uck = null;
    this.hud = null;
    this.kwn = null;
    this.uez = "round";
    this.aym = null;
    this.tsk = "bold";
    this.bge = "center";
    this.wrf = null;
    this.vab = null;
    this.cdd = 1;
    this.tif = null;
    this.zhg = 17;
    this.oca = 2;
    this.xdh = 0;
    this.emh = 1;
    this.jyi = 0;
    this.yks = 0;
    this.ryl = 0;
    this.sov = function (b) {
        try {
            this.zhg = b.fontSize;
            this.oca = b.kfu;
            this.xdh = b.vqi;
            this.emh = b.dkv;
            this.ryl = b.tqa
        } catch (c) {
            console.error(c)
        }
    };
    this.eda = function (b) {
        try {
            this.uez = b.hfa;
            this.aym = b.font;
            this.tsk = b.akl;
            this.bge = b.textAlign;
            this.wrf = b.backgroundColor;
            this.vab = b.rmc;
            this.cdd = b.mnl;
            if (b.borderColor && b.fbc) {
                this.tif = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.tif.addColorStop(0, b.borderColor);
                this.tif.addColorStop(1, b.fbc)
            } else {
                this.tif = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.pbp = function () {
        return this.uez
    };
    this.ued = function (c, b) {
        this.state = c;
        this.vbw = b
    };
    this.xxy = function (b) {
        this.via = b;
        if (this.uez === "round") {
            this.jyi = this.width / 2 - this.oca
        }
        if (this.via) {
            this.yks = Math.round(this.via.height / (2 * this.vbw))
        }
    };
    this.tvl = function (b) {
        this.state = (b < this.vbw) ? b : this.state
    };
    this.ryf = function (b) {
        this.uck = b
    };
    this.aga = function () {
        a.zjm = false
    };
    this.zsm = function () {
        a.dhu = false;
        if (a.nnj()) {
            a.parent.pla(a.x, a.y, a.width, a.height)
        }
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var l = this.context2D,
            e = (this.yij()) ? this.cdd : this.cdd / 2,
            b = this.zhg,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.via && this.jvb) {
            if (!this.yij()) {
                l.globalAlpha = e
            }
            if (this.uez === "round") {
                dac.fip.zay(l, this.x + this.width / 2, this.y + this.height / 2, this.jyi, this.wrf, e * this.cdd)
            } else {
                if (this.uez === "rect") {
                    dac.fip.jtv(l, this.x, this.y, this.width, this.height, this.xdh, this.wrf, e * this.cdd, this.tif, this.emh, e)
                }
            }
            if (this.zwt()) {
                if (this.uez === "round") {
                    l.drawImage(this.via, 0, (this.state * 2 * this.yks) + this.yks, this.via.width, this.yks, this.x, this.y, this.width, this.height)
                } else {
                    if (this.uez === "rect") {
                        l.drawImage(this.via, 0, (this.state * 2 * this.yks) + this.yks, this.via.width, this.yks, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.uez === "round") {
                    l.drawImage(this.via, 0, (this.state * 2 * this.yks), this.via.width, this.yks, this.x, this.y, this.width, this.height)
                } else {
                    if (this.uez === "rect") {
                        l.drawImage(this.via, 0, (this.state * 2 * this.yks), this.via.width, this.yks, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.tra != null) {
                l.textAlign = this.bge;
                l.textBaseline = "bottom";
                l.font = this.tsk + " " + b + "px " + this.aym;
                l.fillStyle = this.vab;
                d = this.tra.split("|");
                j = 0;
                g = (this.bge === "center") ? this.x + this.width / 2 : (this.bge === "left") ? this.x + 2 * this.oca : this.x + this.width - 2 * this.oca;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.oca) {
                    c = ((this.width - 2 * this.oca) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.tsk + " " + b + "px " + this.aym
                }
                if (b * d.length > this.ryl) {
                    c = ((this.ryl) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.tsk + " " + b + "px " + this.aym
                }
                k = (this.height - this.oca - this.ryl) + (this.ryl - b * d.length) / 2;
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
ccg.prototype = new nos;

function nsu() {
    var a = this;
    this.uez = "rect";
    this.tge = -1;
    this.aym = null;
    this.tsk = "bold";
    this.wrf = null;
    this.xqr = null;
    this.pfd = null;
    this.xkw = null;
    this.rcq = null;
    this.vab = null;
    this.egc = null;
    this.xdh = 3;
    this.tqn = -2;
    this.ojs = 2;
    this.liu = 6;
    this.zhg = 26;
    this.emh = 2;
    this.sov = function (b) {
        try {
            this.zhg = b.fontSize;
            this.tqn = b.pfx;
            this.ojs = b.xpn;
            this.liu = b.xfq;
            this.xdh = b.vqi;
            this.emh = b.dkv
        } catch (c) {
            console.error(c)
        }
    };
    this.eda = function (b) {
        try {
            this.aym = b.font;
            this.tsk = b.akl;
            this.wrf = b.backgroundColor;
            this.xqr = b.wgg;
            this.pfd = b.wgy;
            this.xkw = b.gol;
            this.rcq = b.borderColor;
            this.vab = b.rmc;
            this.egc = b.ydl;
            this.uez = b.hfa;
            this.tge = b.peq
        } catch (c) {
            console.error(c)
        }
    };
    this.pbp = function () {
        return this.uez
    };
    this.aga = function () {
        a.zjm = false
    };
    this.zsm = function () {
        a.dhu = false;
        if (a.nnj()) {
            a.parent.pla(a.x, a.y, a.width, a.height)
        }
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.wrf,
            m = this.xqr,
            b = this.zhg,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.tge == 0 || this.tge == 3) ? this.xdh : 0;
        lt = (this.tge == 1 || this.tge == 3) ? this.xdh : 0;
        rb = (this.tge == 0 || this.tge == 2) ? this.xdh : 0;
        lb = (this.tge == 1 || this.tge == 2) ? this.xdh : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.zwt()) {
            n = (this.pfd != null) ? this.pfd : n;
            m = (this.xkw != null) ? this.xkw : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.uez === "rrect") {
                    dac.fip.nza(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.rcq, this.emh, 1)
                } else {
                    if (this.uez === "rect") {
                        if (this.rcq) {
                            dac.fip.mjy(p, this.x, this.y, this.width, this.height, this.xdh, l, this.rcq, this.emh)
                        } else {
                            dac.fip.dml(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.uez === "triangle") {
                            dac.fip.wuc(p, this.tge, this.x, this.y, this.width, this.height, this.xdh, l, 1, this.rcq, this.emh, 1)
                        }
                    }
                }
            } else {
                if (this.uez === "rrect") {
                    dac.fip.nza(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.rcq, this.emh, 1)
                } else {
                    if (this.uez === "rect") {
                        if (this.rcq) {
                            dac.fip.mjy(p, this.x, this.y, this.width, this.height, this.xdh, n, this.rcq, this.emh, 1)
                        } else {
                            dac.fip.dml(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.uez === "triangle") {
                            dac.fip.wuc(p, this.tge, this.x, this.y, this.width, this.height, this.xdh, n, 1, this.rcq, this.emh, 1)
                        }
                    }
                }
            }
        }
        if (this.via != null) {
            h = this.height - 2 * this.liu;
            p.drawImage(this.via, this.x + this.width / 2 - h / 2, this.y + this.liu, h, h)
        }
        if (this.tra != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.tra.split("|");
            d = 0;
            if (this.zwt()) {
                d = 1;
                p.fillStyle = this.egc
            } else {
                p.fillStyle = this.vab
            }
            p.font = this.tsk + " " + b + "px " + this.aym;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.liu) {
                c = ((this.width - 2 * this.liu) / o);
                b = Math.round(c * b) - 1;
                p.font = this.tsk + " " + b + "px " + this.aym
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.tsk + " " + b + "px " + this.aym
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.tqn, this.y - this.ojs + k + d);
                k += b
            }
        }
        p.restore()
    }
}
nsu.prototype = new nos;

function oen() {
    var a = this;
    this.tra = null;
    this.cxv = false;
    this.zjm = false;
    this.eqj = false;
    this.aym = null;
    this.tsk = "bold";
    this.bge = "center";
    this.wrf = null;
    this.rcq = null;
    this.vab = null;
    this.ipb = "rect";
    this.vsl = new xop();
    this.zrq = new xop();
    this.zhg = 16;
    this.xdh = 8;
    this.emh = 1;
    this.vun = 0;
    var b = 200;
    this.zky = function (c, f, d, e) {
        this.tra = e;
        oen.prototype.zky.call(this, c, f, d)
    };
    this.eda = function (c) {
        try {
            this.aym = c.font;
            this.tsk = c.akl;
            this.bge = c.textAlign;
            this.wrf = c.backgroundColor;
            this.rcq = c.borderColor;
            this.vab = c.rmc;
            this.ipb = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.sov = function (c) {
        try {
            this.vsl = c.stn;
            this.zrq = c.izy;
            this.zhg = c.fontSize;
            this.xdh = c.vqi;
            this.emh = c.dkv
        } catch (d) {
            console.error(d)
        }
    };
    this.xgf = function (c) {
        this.cxv = c
    };
    this.yij = function () {
        return this.cxv
    };
    this.oxd = function (c, d) {
        this.eqj = c;
        if (d && d === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.xwa = function () {
        return this.eqj
    };
    this.pjk = function (c, d) {
        this.tra = c;
        if (d && d === true && this.nnj()) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.bjc = function (c, d) {
        this.zjm = c;
        d = (d === false) ? false : true;
        clearTimeout(this.vun);
        if (this.zjm === true && d === true) {
            this.vun = setTimeout(this.aga, b)
        }
    };
    this.ijp = function () {
        return this.zjm
    };
    this.aga = function () {
        a.zjm = false
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var c = this.context2D;
        c.save();
        dac.fip.mjy(c, this.x, this.y, this.width, this.height, this.xdh, this.wrf, this.rcq, this.emh);
        if (this.ipb === "rect") {
            dac.fip.dml(c, this.x + this.zrq.x, this.y + this.zrq.y, this.zrq.width, this.zrq.height, this.vab, 0.2, this.vab, this.emh, 1);
            if (this.eqj === true) {
                dac.fip.dml(c, this.x + this.zrq.x + this.zrq.width / 4, this.y + this.zrq.y + this.zrq.height / 4, this.zrq.width / 2, this.zrq.height / 2, this.vab, 1)
            }
        } else {
            if (this.ipb === "round") {
                dac.fip.zay(c, this.x + this.zrq.x + this.zrq.width / 2, this.y + this.zrq.y + this.zrq.height / 2, this.zrq.width / 2, this.vab, 0.2, this.vab, this.emh, 1);
                if (this.eqj === true) {
                    dac.fip.zay(c, this.x + this.zrq.x + this.zrq.width / 2, this.y + this.zrq.y + this.zrq.height / 2, this.zrq.width / 4, this.vab, 1)
                }
            }
        }
        if (this.tra && this.tra != "") {
            dac.fip.mcj(c, this.tra, this.vab, this.x + this.vsl.x, this.y + this.vsl.y, this.vsl.width, this.vsl.height, this.aym, this.zhg, this.tsk, this.bge, true)
        }
        c.restore();
        if (this.dsp && this.lbg) {
            this.dsp.drawImage(this.lbg, this.x, this.y)
        }
    };
    this.jvb = {}
}
oen.prototype = new ebm;

function vmb() {
    var b = this;
    var c = 0;
    var a = 1;
    this.myd = null;
    this.xfh = "";
    this.iym = "";
    this.vcj = "";
    this.nvn = "";
    this.hsn = false;
    this.upq = [];
    this.mqe = 0;
    this.owr = 0;
    this.qay = 0;
    this.sru = 0;
    this.mww = 0;
    this.cfb = 0;
    this.cvl = 0;
    this.zfb = 0;
    this.ajj = false;
    this.act = false;
    this.rau = false;
    this.ipb = "center";
    this.aym = "arial";
    this.tsk = "bold";
    this.cqv = "white";
    this.vab = "white";
    this.wrf = "black";
    this.xqr = null;
    this.rcq = "white";
    this.guh = "rgb(150,150,150)";
    this.jjy = null;
    this.jee = null;
    this.emh = 3;
    this.uwr = 0;
    this.wcy = 0;
    this.nqw = 0;
    this.jmw = 30;
    this.jjm = 24;
    this.tug = new xop();
    this.wuk = new xop();
    this.mun = new xop();
    this.mdt = new xop();
    this.yms = new xop();
    this.fgj = new xop();
    this.ley = new xop();
    this.mau = new xop();
    this.ubg = new xop();
    this.qph = 7;
    this.opg = 0;
    this.msf = 0;
    this.pjd = 0;
    this.cen = c;
    this.xxo = 0;
    this.qvc = 89;
    this.fax = false;
    this.wvu = 0;
    this.wyz = 0;
    this.qnc = 0;
    this.jlh = 0;
    this.emv = null;
    this.xwo = 0;
    this.paj = 1;
    this.zon = 250;
    this.zky = function (d, f, e) {
        vmb.prototype.zky.call(this, d, f, e);
        this.myd = new rxh();
        this.myd.zky();
        this.myd.jqg("buttons");
        this.myd.jqg("checkboxes");
        this.myd.jqg("displays");
        this.myd.jqg("lbuttons");
        this.myd.jqg("mbuttons");
        this.myd.jqg("vbuttons");
        this.myd.jqg("cbuttons")
    };
    this.ixf = function (d) {
        try {
            this.ufa(d);
            this.qpq(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.eda = function (k) {
        try {
            var n = this.myd.xtb("lbuttons"),
                m = this.myd.xtb("mbuttons"),
                f = this.myd.xtb("cbuttons"),
                g = this.myd.xtb("displays");
            this.ipb = k.type;
            this.aym = k.font;
            this.tsk = k.akl;
            this.cqv = k.iyh;
            this.vab = k.rmc;
            this.wrf = k.backgroundColor;
            this.xqr = k.wgg;
            this.rcq = k.borderColor;
            this.jjy = k.yzl;
            this.jee = k.ypy;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].eda(k.zcx)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].eda(k.noz)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].eda(k.gcl)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].eda(k.display)
            }
            this.myd.bez("checkboxes", "#eda", [k.quw])
        } catch (l) {
            console.error(l)
        }
    };
    this.sov = function (k) {
        try {
            var n = this.myd.xtb("lbuttons"),
                m = this.myd.xtb("mbuttons"),
                f = this.myd.xtb("cbuttons"),
                g = this.myd.xtb("displays");
            this.emh = k.dkv;
            this.uwr = k.aay;
            this.wcy = k.dcb;
            this.nqw = k.cpy;
            this.jmw = k.hqm;
            this.jjm = k.pnq;
            this.tug = k.waf;
            this.wuk = k.wkh;
            this.mun = k.bjf;
            this.mdt = k.wqv;
            this.yms = k.jxx;
            this.fgj = k.akn;
            this.myd.mpx("lgames", "#cqz", [k.rlk]);
            this.myd.mpx("mgames", "#cqz", [k.hwo]);
            this.myd.mpx("lmincredit", "#cqz", [k.xba]);
            this.myd.mpx("mmincredit", "#cqz", [k.sen]);
            this.myd.mpx("lmaxcredit", "#cqz", [k.qxp]);
            this.myd.mpx("mmaxcredit", "#cqz", [k.pqz]);
            this.myd.mpx("lmaxwin", "#cqz", [k.ghw]);
            this.myd.mpx("mmaxwin", "#cqz", [k.saj]);
            this.myd.mpx("start", "#cqz", [k.ivs]);
            this.myd.mpx("cancel", "#cqz", [k.xyt]);
            this.myd.mpx("gamesd", "#cqz", [k.ufb]);
            this.myd.mpx("mincreditd", "#cqz", [k.ipf]);
            this.myd.mpx("maxcreditd", "#cqz", [k.vmx]);
            this.myd.mpx("maxwind", "#cqz", [k.dvq]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].sov(k.zcx)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].sov(k.noz)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].sov(k.gcl)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].sov(k.display)
            }
            this.myd.mpx("cmincredit", "#cqz", [k.yap]);
            this.myd.mpx("cmaxcredit", "#cqz", [k.iyp]);
            this.myd.mpx("cmaxwin", "#cqz", [k.aum]);
            this.myd.bez("checkboxes", "#sov", [k.quw])
        } catch (l) {
            console.error(l)
        }
    };
    this.ufa = function (d) {
        this.myd.hio("start", this.nfq(d.ivs, this.parent.language.start, this.rvx, this.parent.bsx.wel), ["buttons", "cbuttons"]);
        this.myd.hio("cancel", this.nfq(d.xyt, this.parent.language.bhk, this.nji, this.parent.bsx.hbr), ["buttons", "cbuttons"]);
        this.myd.hio("lgames", this.nfq(d.rlk, "", this.usj, null), ["buttons", "lbuttons", "vbuttons"]);
        this.myd.hio("mgames", this.nfq(d.hwo, "+", this.pat, null), ["buttons", "mbuttons", "vbuttons"]);
        this.myd.hio("lmincredit", this.nfq(d.xba, "", this.pna, null), ["buttons", "lbuttons", "vbuttons"]);
        this.myd.hio("mmincredit", this.nfq(d.sen, "+", this.ufe, null), ["buttons", "mbuttons", "vbuttons"]);
        this.myd.hio("lmaxcredit", this.nfq(d.qxp, "", this.bby, null), ["buttons", "lbuttons", "vbuttons"]);
        this.myd.hio("mmaxcredit", this.nfq(d.pqz, "+", this.rjq, null), ["buttons", "mbuttons", "vbuttons"]);
        this.myd.hio("lmaxwin", this.nfq(d.ghw, "", this.xkn, null), ["buttons", "lbuttons", "vbuttons"]);
        this.myd.hio("mmaxwin", this.nfq(d.saj, "+", this.vqo, null), ["buttons", "mbuttons", "vbuttons"]);
        this.myd.hio("cmincredit", this.ydo(d.yap, "", this.sjg), ["checkboxes"]);
        this.myd.hio("cmaxcredit", this.ydo(d.iyp, "", this.iib), ["checkboxes"]);
        this.myd.hio("cmaxwin", this.ydo(d.aum, "", this.xlk), ["checkboxes"])
    };
    this.qpq = function (d) {
        this.myd.hio("gamesd", this.rxr(d.ufb, null, (this.upq[this.mqe] > 0) ? this.upq[this.mqe] : "---"), ["displays"]);
        this.myd.hio("mincreditd", this.rxr(d.ipf, null, "---"), ["displays"]);
        this.myd.hio("maxcreditd", this.rxr(d.vmx, null, "---"), ["displays"]);
        this.myd.hio("maxwind", this.rxr(d.dvq, null, "---"), ["displays"])
    };
    this.rxr = function (d, g, f) {
        var e = new qxq();
        e.zky(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.nfq = function (f, j, g, e) {
        var d = new nsu();
        d.zky(f, this.context2D, null, null, j);
        d.parent = this;
        d.jvb = g;
        if (e) {
            d.mkn = e.nhn
        }
        return d
    };
    this.ydo = function (e, g, f) {
        var d = new oen();
        d.zky(e, this.context2D, null, g);
        d.parent = this;
        d.jvb = f;
        return d
    };
    this.yez = function (r, n) {
        var s = this.myd.xtb("vbuttons"),
            l = this.myd.xtb("cbuttons"),
            g = this.myd.xtb("checkboxes"),
            p = this.myd.znq("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.lxy) {
            return true
        }
        if ((!p || !p.nnj()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.rau = true;
            this.vin();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.nnj() === true && d.yij() === true && d.ijp() === false) {
                    d.wcw(true, false, false);
                    this.xwo = 0;
                    this.paj = 1;
                    if (d.jvb() === false) {
                        this.emv = function () {
                            if (d.jvb() === true) {
                                clearInterval(b.jlh);
                                d.wcw(false, false);
                                b.parent.pla();
                                for (var t = 0; t < m; t++) {
                                    s[t].bjc(false)
                                }
                            }
                        };
                        this.jlh = setInterval(this.emv, this.zon)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].bjc(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.nnj() === true && d.yij() === true) {
                    this.parent.wrr.ulw("btn");
                    this.parent.wrr.dls("btn");
                    d.wcw(true, false);
                    d.jvb();
                    for (var e = 0; e < m; e++) {
                        l[e].bjc(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.nnj() === true && k.yij() === true) {
                    k.oxd(!k.xwa(), true);
                    k.jvb();
                    for (var e = 0; e < m; e++) {
                        g[e].bjc(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.vkf = function () {
        var e = this.myd.xtb("vbuttons"),
            j = this.myd.xtb("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.zwt() == true) {
                clearInterval(this.jlh);
                f.wcw(false, false);
                this.parent.pla();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.zwt() == true) {
                f.wcw(false, false);
                this.parent.pla();
                return true
            }
        }
        return false
    };
    this.tda = function (l) {
        var k = this.myd.xtb("buttons");
        if (this.lxy) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.mkn) {
                if (f.yij() && !f.ijp()) {
                    this.parent.wrr.ulw("btn");
                    this.parent.wrr.dls("btn");
                    f.wcw(true, false);
                    f.jvb();
                    for (var e = 0; e < d; e++) {
                        k[e].bjc(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.hkt = function () {
        var g = this.myd.xtb("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.zwt() == true) {
                e.wcw(false, false);
                this.parent.pla();
                return true
            }
        }
        return false
    };
    this.hly = function (d) {
        this.myd.bez("buttons", "#xgf", [d]);
        this.myd.bez("checkboxes", "#xgf", [d]);
        if (d === true && this.act === true) {
            this.myd.mpx("cmincredit", "#xgf", [false])
        }
    };
    this.mff = function (d) {
        this.upq = d.g;
        this.owr = d.v;
        this.qay = d.v;
        this.ajj = d.r;
        this.act = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.sru = d.m;
            this.mww = d.m
        }
    };
    this.nqi = function () {
        if (this.ajj === true) {
            this.cfb = this.parent.dzc;
            this.cvl = this.parent.dzc;
            this.mqe = 0;
            this.zfb = 0
        }
    };
    this.mwc = function () {
        if (this.upq.length > 0 && this.mqe >= 0 && this.rau === false) {
            return this.upq[this.mqe]
        }
        return 0
    };
    this.scr = function () {
        var d = this.myd.znq("cmincredit") == null || this.myd.mpx("cmincredit", "#xwa");
        if (this.cfb > 0 && d === true) {
            return this.cfb
        }
        return 0
    };
    this.hig = function () {
        var d = this.myd.znq("cmaxcredit") == null || this.myd.mpx("cmaxcredit", "#xwa");
        if (this.cvl > 0 && d === true) {
            return this.cvl
        }
        return 0
    };
    this.blk = function () {
        var d = this.myd.znq("cmaxwin") == null || this.myd.mpx("cmaxwin", "#xwa");
        if (this.zfb > 0 && d === true) {
            return this.zfb
        }
        return 0
    };
    this.dno = function () {
        var f = this.myd.znq("cmincredit") == null || this.myd.mpx("cmincredit", "#xwa"),
            d = this.myd.znq("cmaxcredit") == null || this.myd.mpx("cmaxcredit", "#xwa"),
            e = this.myd.znq("cmaxwin") == null || this.myd.mpx("cmaxwin", "#xwa");
        this.fax = false;
        this.rau = false;
        this.qay = (this.mww > 0) ? this.parent.tac() * this.mww : this.qay;
        this.owr = (this.sru > 0) ? this.parent.tac() * this.sru : this.owr;
        if (this.ajj === true) {
            f = this.act;
            d = false;
            e = false;
            this.nqi()
        } else {
            if (this.act === true) {
                f = true;
                this.cfb = (this.cfb < this.parent.dzc) ? this.cfb : this.parent.dzc;
                this.cfb = (this.cfb > 0) ? this.cfb : this.parent.dzc
            } else {
                f = (this.cfb <= this.parent.dzc) ? f : false;
                this.cfb = (this.cfb < this.parent.dzc) ? this.cfb : this.parent.dzc
            }
            d = (this.cvl >= this.parent.dzc) ? d : false;
            this.cvl = (this.cvl > this.parent.dzc) ? this.cvl : this.parent.dzc
        }
        this.myd.mpx("cmincredit", "#oxd", [f]);
        this.myd.mpx("cmaxcredit", "#oxd", [d]);
        this.myd.mpx("cmaxwin", "#oxd", [e]);
        this.myd.mpx("gamesd", "#pjk", [(this.upq[this.mqe] > 0) ? this.upq[this.mqe] : "---"]);
        this.myd.mpx("mincreditd", "#pjk", [(f === true && this.cfb > 0) ? this.parent.eik(this.cfb) : "---"]);
        this.myd.mpx("maxcreditd", "#pjk", [(d === true && this.cvl > 0) ? this.parent.eik(this.cvl) : "---"]);
        this.myd.mpx("maxwind", "#pjk", [(e === true && this.zfb > 0) ? this.parent.eik(this.zfb) : "---"]);
        this.myd.mpx("lmincredit", "#oac", [f]);
        this.myd.mpx("mmincredit", "#oac", [f && this.cfb < this.parent.dzc]);
        this.myd.mpx("lmaxcredit", "#oac", [d && this.cvl > this.parent.dzc]);
        this.myd.mpx("mmaxcredit", "#oac", [d]);
        this.myd.mpx("lmaxwin", "#oac", [e && this.zfb > this.qay]);
        this.myd.mpx("mmaxwin", "#oac", [e]);
        if (this.hsn === false) {
            this.hly(true);
            this.oac(true);
            this.parent.pla()
        } else {
            this.nsb();
            this.parent.wrr.ulw("panel_out");
            this.parent.wrr.dls("panel_out");
            this.vhp()
        }
    };
    this.vin = function () {
        b.hly(false);
        if (b.hsn === false) {
            b.oac(false);
            b.parent.pla()
        } else {
            b.qid();
            b.parent.wrr.ulw("panel_out");
            b.parent.wrr.dls("panel_out");
            b.vhp()
        }
    };
    this.nsb = function () {
        this.oac(true);
        this.lxy = true;
        this.cxv = false;
        this.cen = c;
        this.opg = Math.floor(this.width / this.qph);
        this.pjd = 0;
        this.msf = 0;
        this.xxo = new Date().getTime()
    };
    this.qid = function () {
        this.lxy = true;
        this.cxv = false;
        this.cen = a;
        this.opg = -Math.floor(this.width / this.qph);
        this.pjd = 1;
        this.msf = this.width;
        this.xxo = new Date().getTime()
    };
    this.vhp = function () {
        var d = b.qvc,
            e = new Date().getTime();
        if (b.pjd < b.qph) {
            b.msf += b.opg;
            b.pjd++;
            b.parent.pla();
            d = (((b.cen === a) ? b.pjd - 1 : b.pjd) * b.qvc - (e - b.xxo));
            b.wvu = setTimeout(b.vhp, d)
        } else {
            b.lxy = false;
            b.cxv = true;
            if (b.cen == a) {
                b.oac(false);
                b.parent.xbf();
                if (b.fax === true) {
                    b.wyz = setTimeout(b.parent.bea, 200)
                }
            } else {
                if (b.cen == c) {
                    b.hly(true)
                }
            }
            b.parent.pla()
        }
    };
    this.stop = function () {
        clearTimeout(this.wvu);
        clearTimeout(this.qnc);
        clearTimeout(this.wyz);
        clearInterval(this.jlh)
    };
    this.sii = function (d) {
        this.xfh = d.vsb;
        this.iym = d.iyl;
        this.vcj = d.vpw;
        this.myd.mpx("start", "#pjk", [d.start]);
        this.myd.mpx("cancel", "#pjk", [d.bhk]);
        this.myd.mpx("cmincredit", "#pjk", [d.okv]);
        this.myd.mpx("cmaxcredit", "#pjk", [d.nit]);
        this.myd.mpx("cmaxwin", "#pjk", [d.whf]);
        if (this.parent.tjf === true && dac.ewv.value44.d === true) {
            this.nvn = d.ldr
        }
    };
    this.pla = function (n, m, o, j) {
        if (!this.nnj()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.myd.hlf(),
            e = this.wrf,
            l = this.rcq;
        if (this.xqr) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.wrf);
            e.addColorStop(1, this.xqr)
        }
        if (this.guh) {
            if (this.ipb === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.ipb === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.ipb === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.ipb === "left") {
                l.addColorStop(1, this.rcq);
                l.addColorStop(0, this.guh)
            } else {
                if (this.ipb === "center" || this.ipb === "right") {
                    l.addColorStop(0, this.rcq);
                    l.addColorStop(1, this.guh)
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
        dac.fip.nza(p, 0, 0, this.width, this.height, this.uwr, this.wcy, this.wcy, this.uwr, e, 1, l, this.emh, 1);
        dac.fip.mjy(p, this.mun.x, this.mun.y, this.mun.width, this.mun.height, this.nqw, this.jjy, this.jee, this.emh / 2);
        dac.fip.mjy(p, this.yms.x, this.yms.y, this.yms.width, this.yms.height, this.nqw, this.jjy, this.jee, this.emh / 2);
        dac.fip.mxc(p, this.xfh, this.cqv, this.tug.x, this.tug.y, this.tug.width, this.tug.height, this.aym, this.jmw, this.tsk);
        dac.fip.mcj(p, this.nvn, this.vab, this.wuk.x, this.wuk.y, this.wuk.width, this.wuk.height, this.aym, this.jjm, this.tsk, "center", true);
        dac.fip.bhn(p, this.iym, this.vab, this.mdt.x, this.mdt.y, this.mdt.width, this.mdt.height, this.aym, this.jjm, this.tsk, 0);
        dac.fip.mxc(p, this.vcj, this.vab, this.fgj.x, this.fgj.y, this.fgj.width, this.fgj.height, this.aym, this.jjm, this.tsk);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].pla()
        }
        p.restore();
        if (this.dsp && this.lbg) {
            if (this.lxy) {
                if (this.msf > 0) {
                    if (this.ipb === "left") {
                        this.dsp.drawImage(this.lbg, this.width - this.msf, 0, this.msf, this.height, this.x, this.y, this.msf, this.height)
                    } else {
                        if (this.ipb === "right") {
                            this.dsp.drawImage(this.lbg, 0, 0, this.msf, this.height, this.x + this.width - this.msf, this.y, this.msf, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.dsp.drawImage(this.lbg, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.dsp.drawImage(this.lbg, this.x, this.y)
                }
            }
        }
    };
    this.rvx = function () {
        b.parent.pla();
        if (b.upq[b.mqe] <= 0) {
            return
        }
        if (b.hsn === false) {
            b.qnc = setTimeout(b.parent.xbf, 400);
            b.wyz = setTimeout(b.parent.bea, 500)
        } else {
            b.lxy = true;
            b.fax = true;
            b.qnc = setTimeout(b.vin, 400)
        }
    };
    this.nji = function () {
        b.parent.pla();
        b.rau = true;
        if (b.hsn === false) {
            b.qnc = setTimeout(b.parent.xbf, 400)
        } else {
            b.lxy = true;
            b.qnc = setTimeout(b.vin, 400)
        }
    };
    this.pat = function () {
        b.mqe = (b.mqe < b.upq.length - 1) ? b.mqe + 1 : 0;
        b.parent.wrr.dls("step0");
        b.myd.mpx("gamesd", "#pjk", [(b.upq[b.mqe] > 0) ? b.upq[b.mqe] : "---"]);
        b.parent.pla();
        return (b.mqe >= b.upq.length - 1)
    };
    this.usj = function () {
        b.mqe = (b.mqe > 0) ? b.mqe - 1 : b.upq.length - 1;
        b.parent.wrr.dls("step0");
        b.myd.mpx("gamesd", "#pjk", [(b.upq[b.mqe] > 0) ? b.upq[b.mqe] : "---"]);
        b.parent.pla();
        return (b.mqe <= 0)
    };
    this.ufe = function () {
        var d = b.myd.znq("cmincredit") == null || b.myd.mpx("cmincredit", "#xwa");
        if (d === true) {
            if (++b.xwo > 10) {
                b.paj = 10
            }
            b.cfb = (b.cfb + (b.owr * b.paj) <= b.parent.dzc) ? b.cfb + (b.owr * b.paj) : b.parent.dzc;
            b.parent.wrr.dls("step0");
            b.myd.mpx("mincreditd", "#pjk", [(b.cfb > 0) ? b.parent.eik(b.cfb) : "---"]);
            b.myd.mpx("mmincredit", "#oac", [d && b.cfb < b.parent.dzc]);
            b.myd.mpx("lmincredit", "#oac", [d && b.cfb > 0]);
            b.parent.pla();
            return (b.cfb >= b.parent.dzc)
        }
        return true
    };
    this.pna = function () {
        var d = b.myd.znq("cmincredit") == null || b.myd.mpx("cmincredit", "#xwa");
        if (d === true) {
            if (++b.xwo > 10) {
                b.paj = 10
            }
            b.cfb = (b.cfb - (b.owr * b.paj) > 0) ? b.cfb - (b.owr * b.paj) : 0;
            b.parent.wrr.dls("step0");
            b.myd.mpx("mincreditd", "#pjk", [(b.cfb > 0) ? b.parent.eik(b.cfb) : "---"]);
            b.myd.mpx("mmincredit", "#oac", [d && b.cfb < b.parent.dzc]);
            b.myd.mpx("lmincredit", "#oac", [d && b.cfb > 0]);
            b.parent.pla();
            return (b.cfb >= b.parent.dzc || b.cfb <= 0)
        }
        return true
    };
    this.rjq = function () {
        var d = b.myd.znq("cmaxcredit") == null || b.myd.mpx("cmaxcredit", "#xwa");
        if (d === true) {
            if (++b.xwo > 10) {
                b.paj = 10
            }
            b.cvl = (b.cvl + (b.qay * b.paj) > 0) ? b.cvl + (b.qay * b.paj) : 0;
            b.parent.wrr.dls("step0");
            b.myd.mpx("maxcreditd", "#pjk", [(b.cvl > 0) ? b.parent.eik(b.cvl) : "---"]);
            b.myd.mpx("lmaxcredit", "#oac", [d && b.cvl > b.parent.dzc]);
            b.parent.pla();
            return (b.cvl <= b.parent.dzc)
        }
        return true
    };
    this.bby = function () {
        var d = b.myd.znq("cmaxcredit") == null || b.myd.mpx("cmaxcredit", "#xwa");
        if (d === true) {
            if (++b.xwo > 10) {
                b.paj = 10
            }
            b.cvl = (b.cvl - (b.qay * b.paj) > b.parent.dzc) ? b.cvl - (b.qay * b.paj) : b.parent.dzc;
            b.parent.wrr.dls("step0");
            b.myd.mpx("maxcreditd", "#pjk", [(b.cvl > 0) ? b.parent.eik(b.cvl) : "---"]);
            b.myd.mpx("lmaxcredit", "#oac", [d && b.cvl > b.parent.dzc]);
            b.parent.pla();
            return (b.cvl <= b.parent.dzc)
        }
        return true
    };
    this.vqo = function () {
        var d = b.myd.znq("cmaxwin") == null || b.myd.mpx("cmaxwin", "#xwa");
        if (d === true) {
            if (++b.xwo > 10) {
                b.paj = 10
            }
            b.zfb = (b.zfb + (b.qay * b.paj) > 0) ? b.zfb + (b.qay * b.paj) : 0;
            b.parent.wrr.dls("step0");
            b.myd.mpx("maxwind", "#pjk", [(b.zfb > 0) ? b.parent.eik(b.zfb) : "---"]);
            b.myd.mpx("lmaxwin", "#oac", [d && b.zfb > b.qay]);
            b.parent.pla();
            return (b.zfb <= b.qay)
        }
        return true
    };
    this.xkn = function () {
        var d = b.myd.znq("cmaxwin") == null || b.myd.mpx("cmaxwin", "#xwa");
        if (d === true) {
            if (++b.xwo > 10) {
                b.paj = 10
            }
            b.zfb = (b.zfb - (b.qay * b.paj) > 0) ? b.zfb - (b.qay * b.paj) : b.qay;
            b.parent.wrr.dls("step0");
            b.myd.mpx("maxwind", "#pjk", [(b.zfb > 0) ? b.parent.eik(b.zfb) : "---"]);
            b.myd.mpx("lmaxwin", "#oac", [d && b.zfb > b.qay]);
            b.parent.pla();
            return (b.zfb <= b.qay)
        }
        return true
    };
    this.sjg = function () {
        var d = b.myd.znq("cmincredit") == null || b.myd.mpx("cmincredit", "#xwa");
        b.cfb = b.parent.dzc;
        b.myd.mpx("mincreditd", "#pjk", [(d === true && b.cfb > 0) ? b.parent.eik(b.cfb) : "---"]);
        b.myd.mpx("lmincredit", "#oac", [d]);
        b.myd.mpx("mmincredit", "#oac", [d && b.cfb < b.parent.dzc]);
        b.parent.pla()
    };
    this.iib = function () {
        var d = b.myd.znq("cmaxcredit") == null || b.myd.mpx("cmaxcredit", "#xwa");
        b.cvl = b.parent.dzc;
        b.myd.mpx("maxcreditd", "#pjk", [(d === true && b.cvl > 0) ? b.parent.eik(b.cvl) : "---"]);
        b.myd.mpx("lmaxcredit", "#oac", [d && b.cvl > b.parent.dzc]);
        b.myd.mpx("mmaxcredit", "#oac", [d]);
        b.parent.pla()
    };
    this.xlk = function () {
        var d = b.myd.znq("cmaxwin") == null || b.myd.mpx("cmaxwin", "#xwa");
        if (b.zfb === 0) {
            b.zfb = b.qay
        }
        b.myd.mpx("maxwind", "#pjk", [(d === true && b.zfb > 0) ? b.parent.eik(b.zfb) : "---"]);
        b.myd.mpx("lmaxwin", "#oac", [d && b.zfb > b.qay]);
        b.myd.mpx("mmaxwin", "#oac", [d]);
        b.parent.pla()
    }
}
vmb.prototype = new ebm;

function psb() {
    this.bpq = "right";
    this.zed = "left";
    this.cjh = null;
    this.mgt = null;
    this.xfh = null;
    this.vfl = -1;
    this.equ = -1;
    this.cxv = true;
    this.eqj = false;
    this.zjm = false;
    this.lxy = false;
    this.yim = 0;
    this.prv = 0;
    this.mqf = [];
    this.whm = 0;
    this.xen = 0;
    this.jiu = 1;
    this.jgm = 0;
    this.eau = 0;
    this.ipb = this.bpq;
    this.aym = null;
    this.tsk = "bold";
    this.vab = "rgb(255,255,255)";
    this.wrf = "rgb(0,0,0)";
    this.bdv = "rgb(0,0,0)";
    this.dwb = "rgb(0,0,0)";
    this.jol = 0.7;
    this.sja = null;
    this.tnm = null;
    this.wqq = null;
    this.dwi = new xop();
    this.kos = new xop();
    this.xof = new xop();
    this.tug = new xop();
    this.emh = 2;
    this.xdh = 5;
    this.dyc = 4;
    this.jwz = 10;
    this.cwd = 5;
    this.zhg = 15;
    var a = 200;
    this.zwa = function (c, d, f) {
        this.mqf = [];
        this.yim = (d < 0) ? 0 : d;
        this.prv = (f < 0) ? 0 : f;
        for (var e = this.yim, b = 0; e <= this.prv; e++) {
            this.mqf[b++] = c[e]
        }
        this.whm = this.mqf.length;
        this.jgm = this.dwi.height / this.whm
    };
    this.sov = function (b) {
        try {
            this.zhg = b.fontSize;
            this.emh = b.dkv;
            this.xdh = b.vqi;
            this.dyc = b.bko;
            this.jwz = b.trw;
            this.cwd = b.wkl;
            this.dwi = new xop(b.rdg.x, b.rdg.y + b.yfp, b.rdg.width, b.rdg.height - 2 * b.yfp);
            this.kos = new xop(b.rdg.x, b.rdg.y, b.rdg.width, b.yfp);
            this.xof = new xop(b.rdg.x, b.rdg.y + b.rdg.height - b.yfp, b.rdg.width, b.yfp);
            this.tug = b.waf
        } catch (c) {
            console.error(c)
        }
    };
    this.eda = function (b) {
        try {
            this.aym = b.font;
            this.tsk = b.akl;
            this.vab = b.rmc;
            this.wrf = b.backgroundColor;
            this.bdv = b.pml;
            this.dwb = b.smm;
            this.jol = b.lfb;
            this.tnm = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.tnm.addColorStop(0, b.izh);
            this.tnm.addColorStop(1, b.hlr);
            this.sja = this.context2D.createLinearGradient(this.dwi.x, 0, this.dwi.x + this.dwi.width, 0);
            this.wqq = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.ipb === this.bpq) {
                this.sja.addColorStop(0, b.tir);
                this.sja.addColorStop(1, b.tag);
                this.wqq.addColorStop(0, b.dxx);
                this.wqq.addColorStop(1, b.xiw)
            } else {
                if (this.ipb === this.zed) {
                    this.sja.addColorStop(0, b.tag);
                    this.sja.addColorStop(1, b.tir);
                    this.wqq.addColorStop(0, b.xiw);
                    this.wqq.addColorStop(1, b.dxx)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.yez = function (b, f, c) {
        if (this.lxy || !this.cxv || this.zjm) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.xof.ssi(e, d)) {
                this.axf(-1);
                this.dls();
                this.bjc(true, true)
            } else {
                if (this.kos.ssi(e, d)) {
                    this.axf(1);
                    this.dls();
                    this.bjc(true, true)
                } else {
                    if (this.dwi.ssi(e, d)) {
                        this.eqj = true;
                        this.olc(f);
                        this.bjc(true, true)
                    }
                }
            }
            this.jvb(this.xen);
            return true
        }
    };
    this.vkf = function () {
        if (this.eqj) {
            this.eqj = false;
            this.dls();
            return true
        }
        return false
    };
    this.tda = function (b) {
        if (this.lxy || !this.cxv || this.zjm) {
            return true
        }
        if (b == this.equ) {
            this.axf(-1);
            this.dls();
            this.bjc(true, true);
            this.jvb(this.xen);
            return true
        } else {
            if (b == this.vfl) {
                this.axf(1);
                this.dls();
                this.bjc(true, true);
                this.jvb(this.xen);
                return true
            }
        }
        return false
    };
    this.hkt = function () {};
    this.mnc = function (b, d, c) {
        if (!this.eqj) {
            return false
        }
        if (b >= this.x + this.dwi.x && b <= this.x + this.dwi.x + this.dwi.width && d >= this.y + this.dwi.y && d <= this.y + this.dwi.y + this.dwi.height) {
            this.olc(d);
            this.jvb(this.xen);
            return true
        }
        return false
    };
    this.bjc = function (b, c) {
        this.zjm = b;
        c = (c === false) ? false : true;
        clearTimeout(this.vun);
        if (this.zjm === true && c === true) {
            this.vun = setTimeout(this.aga, a)
        }
    };
    this.aga = function () {};
    this.jvb = function (b) {};
    this.dls = function () {};
    this.xkp = function (b, c) {
        this.yim = (b < 0) ? 0 : b;
        this.prv = (c < 0) ? 0 : c;
        if (this.mqf) {
            this.prv = (this.prv > this.mqf.length - 1) ? this.mqf.length - 1 : this.prv
        }
    };
    this.dno = function () {
        this.oac(true, true)
    };
    this.vin = function () {
        this.oac(false, true)
    };
    this.xgf = function (b) {
        this.cxv = b
    };
    this.yij = function () {
        return this.cxv
    };
    this.dcq = function (b, c) {
        this.xen = b;
        if (this.xen < this.yim) {
            this.xen = this.yim
        }
        if (this.xen >= this.prv) {
            this.xen = this.prv
        }
        this.jiu = this.xen + 1;
        if (c && c === true) {
            this.parent.pla()
        }
    };
    this.iwb = function (d, e) {
        this.xen = 0;
        for (var c = 0, b = this.mqf.length; c < b; c++) {
            if (this.mqf[c] == d) {
                this.xen = c;
                break
            }
        }
        this.xen = (this.xen >= this.yim) ? this.xen : this.yim;
        this.xen = (this.xen < this.prv) ? this.xen : this.prv;
        this.jiu = this.xen + 1;
        if (e) {
            this.parent.pla()
        }
    };
    this.olc = function (b) {
        this.xen = Math.ceil(((this.dwi.height) - (b - this.dwi.y - this.y)) / this.jgm) - 1;
        this.xen = (this.xen >= this.yim) ? this.xen : this.yim;
        this.xen = (this.xen < this.prv) ? this.xen : this.prv;
        this.jiu = this.xen + 1;
        this.parent.pla()
    };
    this.axf = function (b) {
        this.xen += b;
        this.xen = (this.xen >= this.yim) ? this.xen : this.yim;
        this.xen = (this.xen < this.prv) ? this.xen : this.prv;
        this.jiu = this.xen + 1;
        this.parent.pla()
    };
    this.pla = function () {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        this.hrm();
        if (this.dsp && this.lbg) {
            this.dsp.drawImage(this.mvz, this.x, this.y)
        }
    };
    this.hrm = function () {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.fam(b);
        this.hxy(b);
        this.ptq(b);
        this.lyj(b);
        this.zov(b);
        b.restore()
    };
    this.fam = function (b) {
        if (this.ipb === this.zed) {
            dac.fip.nza(b, 0, 0, this.width, this.height, this.xdh, 0, 0, this.xdh, this.wrf, 0.4, this.wqq, this.emh, 1)
        } else {
            if (this.ipb === this.bpq) {
                dac.fip.nza(b, 0, 0, this.width, this.height, 0, this.xdh, this.xdh, 0, this.wrf, 0.4, this.wqq, this.emh, 1)
            }
        }
    };
    this.hxy = function (b) {
        dac.fip.dml(b, this.dwi.x, this.dwi.y, this.dwi.width, this.dwi.height, this.bdv, 1)
    };
    this.ptq = function (b) {
        dac.fip.dml(b, this.dwi.x, this.dwi.y + this.dwi.height - Math.round(this.jiu * this.jgm), this.dwi.width, Math.round(this.jiu * this.jgm), this.tnm, 1)
    };
    this.lyj = function (b) {
        dac.fip.dml(b, this.dwi.x - this.dyc, this.dwi.y - this.dyc, this.dwi.width + 2 * this.dyc, this.dwi.height + 2 * this.dyc, null, 0, this.sja, this.dyc, 1);
        if (this.ipb === this.zed) {
            dac.fip.nza(b, this.dwi.x - this.dyc, this.kos.y, this.dwi.width + 2 * this.dyc, this.kos.height, this.jwz, 0, 0, 0, this.sja, 1);
            dac.fip.nza(b, this.dwi.x - this.dyc, this.xof.y, this.dwi.width + 2 * this.dyc, this.xof.height, 0, 0, 0, this.jwz, this.sja, 1)
        } else {
            if (this.ipb === this.bpq) {
                dac.fip.nza(b, this.dwi.x - this.dyc, this.kos.y, this.dwi.width + 2 * this.dyc, this.kos.height, 0, this.jwz, 0, 0, this.sja, 1);
                dac.fip.nza(b, this.dwi.x - this.dyc, this.xof.y, this.dwi.width + 2 * this.dyc, this.xof.height, 0, 0, this.jwz, 0, this.sja, 1)
            }
        }
        b.strokeStyle = this.sja;
        b.lineWidth = Math.round(this.dyc / 4);
        b.beginPath();
        for (var c = 1; c < this.whm; c++) {
            b.moveTo(this.dwi.x, this.dwi.y + this.dwi.height - Math.round(c * this.jgm));
            b.lineTo(this.dwi.x + this.dwi.width, this.dwi.y + this.dwi.height - Math.round(c * this.jgm))
        }
        b.closePath();
        b.stroke();
        if (this.cjh) {
            if (this.ipb === this.zed) {
                b.drawImage(this.cjh, 0, 0, this.cjh.width / 2, this.cjh.height, this.dwi.x, this.dwi.y, this.dwi.width, this.dwi.height)
            } else {
                if (this.ipb === this.bpq) {
                    b.drawImage(this.cjh, this.cjh.width / 2, 0, this.cjh.width / 2, this.cjh.height, this.dwi.x, this.dwi.y, this.dwi.width, this.dwi.height)
                }
            }
        }
    };
    this.zov = function (c) {
        var f = this.vab,
            e = this.vab,
            b = 0,
            d = 0;
        if (this.ipb === this.zed) {
            b = this.cwd;
            d = this.dwi.x - 2 * this.cwd
        } else {
            if (this.ipb === this.bpq) {
                b = this.dwi.x + this.dwi.width + this.cwd;
                d = this.width - this.cwd - (this.dwi.x + this.dwi.width + this.cwd)
            }
        }
        if (this.xen > 0 && this.xen < this.mqf.length - 1) {
            dac.fip.dml(c, b, this.dwi.y + ((this.whm - this.jiu) * this.jgm), d, this.jgm, this.dwb, this.jol);
            dac.fip.qrp(c, this.mqf[this.xen], this.tnm, b, this.dwi.y + ((this.whm - this.jiu) * this.jgm) + (this.jgm - this.zhg) / 2, d, this.zhg, this.aym, this.zhg, this.tsk, this.cwd)
        } else {
            if (this.xen == 0) {
                f = this.tnm
            } else {
                if (this.xen == this.mqf.length - 1) {
                    e = this.tnm
                }
            }
        }
        dac.fip.dml(c, b, this.dwi.y + (this.jgm * (this.whm - 1)), d, this.jgm, this.dwb, this.jol);
        dac.fip.qrp(c, this.mqf[0], f, b, this.dwi.y + (this.jgm * (this.whm - 1)) + (this.jgm - this.zhg) / 2, d, this.zhg, this.aym, this.zhg, this.tsk, this.cwd);
        dac.fip.dml(c, b, this.dwi.y, d, this.jgm, this.dwb, this.jol);
        dac.fip.qrp(c, this.mqf[this.mqf.length - 1], e, b, this.dwi.y + (this.jgm - this.zhg) / 2, d, this.zhg, this.aym, this.zhg, this.tsk, this.cwd);
        dac.fip.mxc(c, "+", this.vab, this.kos.x, this.kos.y, this.kos.width, this.kos.height, this.aym, this.zhg, this.tsk);
        dac.fip.mxc(c, "", this.vab, this.xof.x, this.xof.y, this.xof.width, this.xof.height, this.aym, this.zhg, this.tsk);
        if (this.xfh) {
            dac.fip.mxc(c, this.xfh, this.vab, this.tug.x, this.tug.y, this.tug.width, this.tug.height, this.aym, this.zhg, this.tsk)
        }
    }
}
psb.prototype = new ebm;

function bxe() {
    var a = this;
    this.myd = null;
    this.qpw = false;
    this.ctt = "";
    this.nin = "";
    this.tnd = "";
    this.zkt = "";
    this.nvn = "";
    this.iym = "";
    this.vcj = "";
    this.aym = "arial";
    this.tsk = "bold";
    this.vab = "white";
    this.wrf = "black";
    this.xqr = null;
    this.rcq = "white";
    this.guh = "rgb(150,150,150)";
    this.emh = 3;
    this.xdh = 4;
    this.qse = 24;
    this.rsj = 24;
    this.jjm = 24;
    this.cxw = new xop();
    this.dpm = new xop();
    this.gks = new xop();
    this.skj = new xop();
    this.vfa = new xop();
    this.uuk = new xop();
    this.bkb = new xop();
    this.upq = [];
    this.mqe = 0;
    this.owr = 0;
    this.qay = 0;
    this.sru = 0;
    this.mww = 0;
    this.cfb = 0;
    this.cvl = 0;
    this.zfb = 0;
    this.wpk = false;
    this.act = false;
    this.xen = 0;
    this.esa = true;
    this.frf = true;
    this.emv = null;
    this.jlh = 0;
    this.xwo = 0;
    this.paj = 1;
    this.zon = 250;
    this.zky = function (b, d, c) {
        bxe.prototype.zky.call(this, b, d, c);
        this.myd = new rxh();
        this.myd.zky();
        this.myd.jqg("buttons");
        this.myd.jqg("displays");
        this.myd.jqg("checkboxes");
        this.myd.jqg("lbuttons");
        this.myd.jqg("mbuttons");
        this.myd.jqg("tbuttons");
        this.myd.jqg("bbuttons");
        this.myd.jqg("bdisplays");
        this.myd.jqg("abuttons");
        this.myd.jqg("adisplays");
        this.myd.jqg("acheckboxes");
        this.myd.jqg("sbuttons");
        this.myd.jqg("hbuttons")
    };
    this.ixf = function (b) {
        try {
            this.ufa(b);
            this.qdt(b);
            this.woo(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.eda = function (b) {
        try {
            var c = this.myd.xtb("lbuttons"),
                n = this.myd.xtb("mbuttons"),
                k = this.myd.xtb("tbuttons"),
                m = this.myd.xtb("sbuttons"),
                l = this.myd.xtb("hbuttons"),
                f = this.myd.xtb("displays");
            this.aym = b.font;
            this.tsk = b.akl;
            this.vab = b.rmc;
            this.wrf = b.backgroundColor;
            this.xqr = b.wgg;
            this.rcq = b.borderColor;
            this.guh = b.fbc;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].eda(b.zcx)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].eda(b.noz)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].eda(b.utd)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].eda(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].eda(b.zto)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].eda(b.zto)
            }
            this.myd.bez("checkboxes", "#eda", [b.quw])
        } catch (j) {
            console.error(j)
        }
    };
    this.sov = function (g) {
        try {
            var b = this.myd.xtb("lbuttons"),
                o = this.myd.xtb("mbuttons"),
                l = this.myd.xtb("tbuttons"),
                n = this.myd.xtb("sbuttons"),
                m = this.myd.xtb("hbuttons"),
                c = this.myd.xtb("bdisplays"),
                f = this.myd.xtb("adisplays");
            byb = this.myd.xtb("checkboxes"), vyo = n.length, wjd = (vyo <= 2) ? g.gpv : (vyo <= 3) ? g.zrg : (vyo <= 4) ? g.ozg : g.joh, vyo = m.length, gag = (vyo <= 2) ? g.gpv : (vyo <= 3) ? g.zrg : (vyo <= 4) ? g.ozg : g.joh, rnv = (this.parent.beq() != null) ? g.mxs : g.ylk;
            this.emh = g.dkv;
            this.xdh = g.vqi;
            this.qse = g.clm;
            this.rsj = g.fpo;
            this.jjm = g.pnq;
            this.cxw = g.qqh;
            this.dpm = g.cuf;
            this.gks = g.khl;
            this.skj = g.hzw;
            this.vfa = g.wkh;
            this.uuk = g.wqv;
            this.bkb = g.tgo;
            this.myd.mpx("bett", "#cqz", [rnv.swc]);
            this.myd.mpx("autot", "#cqz", [rnv.pbd]);
            this.myd.mpx("helpt", "#cqz", [rnv.nar]);
            this.myd.mpx("settingt", "#cqz", [rnv.yfd]);
            this.myd.mpx("returnt", "#cqz", [rnv.npo]);
            this.myd.mpx("lbet", "#cqz", [g.myf]);
            this.myd.mpx("mbet", "#cqz", [g.vip]);
            this.myd.mpx("llines", "#cqz", [g.cqm]);
            this.myd.mpx("mlines", "#cqz", [g.aip]);
            this.myd.mpx("betd", "#cqz", [g.lmv]);
            this.myd.mpx("linesd", "#cqz", [g.alp]);
            this.myd.mpx("totald", "#cqz", [g.mhw]);
            this.myd.mpx("lgames", "#cqz", [g.rlk]);
            this.myd.mpx("mgames", "#cqz", [g.hwo]);
            this.myd.mpx("lmincredit", "#cqz", [g.xba]);
            this.myd.mpx("mmincredit", "#cqz", [g.sen]);
            this.myd.mpx("lmaxcredit", "#cqz", [g.qxp]);
            this.myd.mpx("mmaxcredit", "#cqz", [g.pqz]);
            this.myd.mpx("lmaxwin", "#cqz", [g.ghw]);
            this.myd.mpx("mmaxwin", "#cqz", [g.saj]);
            this.myd.mpx("gamesd", "#cqz", [g.ufb]);
            this.myd.mpx("mincreditd", "#cqz", [g.ipf]);
            this.myd.mpx("maxcreditd", "#cqz", [g.vmx]);
            this.myd.mpx("maxwind", "#cqz", [g.dvq]);
            this.myd.mpx("cmincredit", "#cqz", [g.yap]);
            this.myd.mpx("cmaxcredit", "#cqz", [g.iyp]);
            this.myd.mpx("cmaxwin", "#cqz", [g.aum]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].sov(g.zcx)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].sov(g.noz)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].sov(g.utd)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].sov(g.fbd)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].sov(g.prr)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].sov(g.zto)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].sov(g.zto)
            }
            for (var d = 0, j = byb.length; d < j; d++) {
                byb[d].sov(g.quw)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].cqz(wjd[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].cqz(gag[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.ufa = function (c) {
        var b = (this.parent.beq() != null) ? c.mxs : c.ylk;
        this.myd.hio("bett", this.ile(b.swc, null, this.parent.wrr.ark("btn_b"), this.vlz, null), ["buttons", "tbuttons"]);
        if (this.parent.beq() != null) {
            this.myd.hio("autot", this.ile(b.pbd, null, this.parent.wrr.ark("btn_as"), this.mku, null), ["buttons", "tbuttons"])
        }
        this.myd.hio("helpt", this.ile(b.nar, null, this.parent.wrr.ark("btn_i"), this.kle, null), ["buttons", "tbuttons"]);
        this.myd.hio("settingt", this.ile(b.yfd, null, this.parent.wrr.ark("btn_se"), this.xkg, null), ["buttons", "tbuttons"]);
        this.myd.hio("returnt", this.ile(b.npo, null, this.parent.wrr.ark("btn_c"), this.bsa, null), ["buttons", "tbuttons"])
    };
    this.qdt = function (b) {
        this.myd.hio("betd", this.rxr(b.lmv, null, this.parent.uqc), ["displays", "bdisplays"]);
        this.myd.hio("lbet", this.nfq(b.myf, "", this.parent.ied), ["buttons", "lbuttons", "bbuttons"]);
        this.myd.hio("mbet", this.nfq(b.vip, "+", this.parent.wvv), ["buttons", "mbuttons", "bbuttons"]);
        this.myd.hio("linesd", this.rxr(b.alp, null, this.parent.snl), ["displays", "bdisplays"]);
        if (this.qpw) {
            this.myd.hio("llines", this.nfq(b.cqm, "", this.parent.pgz), ["buttons", "lbuttons", "bbuttons"]);
            this.myd.hio("mlines", this.nfq(b.aip, "+", this.parent.zzg), ["buttons", "mbuttons", "bbuttons"])
        }
        this.myd.hio("totald", this.rxr(b.mhw, null, this.parent.tac()), ["displays", "bdisplays"])
    };
    this.woo = function (b) {
        this.myd.hio("gamesd", this.rxr(b.ufb, null, this.upq[this.mqe]), ["displays", "adisplays"]);
        this.myd.hio("lgames", this.nfq(b.rlk, "", this.usj), ["buttons", "lbuttons", "abuttons"]);
        this.myd.hio("mgames", this.nfq(b.hwo, "+", this.pat), ["buttons", "mbuttons", "abuttons"]);
        this.myd.hio("mincreditd", this.rxr(b.ipf, null, "---"), ["displays", "adisplays"]);
        this.myd.hio("lmincredit", this.nfq(b.xba, "", this.pna), ["buttons", "lbuttons", "abuttons"]);
        this.myd.hio("mmincredit", this.nfq(b.sen, "+", this.ufe), ["buttons", "mbuttons", "abuttons"]);
        this.myd.hio("maxcreditd", this.rxr(b.vmx, null, "---"), ["displays", "adisplays"]);
        this.myd.hio("lmaxcredit", this.nfq(b.qxp, "", this.bby), ["buttons", "lbuttons", "abuttons"]);
        this.myd.hio("mmaxcredit", this.nfq(b.pqz, "+", this.rjq), ["buttons", "mbuttons", "abuttons"]);
        this.myd.hio("maxwind", this.rxr(b.dvq, null, "---"), ["displays", "adisplays"]);
        this.myd.hio("lmaxwin", this.nfq(b.ghw, "", this.xkn), ["buttons", "lbuttons", "abuttons"]);
        this.myd.hio("mmaxwin", this.nfq(b.saj, "+", this.vqo), ["buttons", "mbuttons", "abuttons"]);
        this.myd.hio("cmincredit", this.ydo(b.yap, "", this.sjg), ["checkboxes", "acheckboxes"]);
        this.myd.hio("cmaxcredit", this.ydo(b.iyp, "", this.iib), ["checkboxes", "acheckboxes"]);
        this.myd.hio("cmaxwin", this.ydo(b.aum, "", this.xlk), ["checkboxes", "acheckboxes"])
    };
    this.nof = function (j, g, f, e, d, b) {
        var c = new ccg();
        c.zky(new xop(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.jvb = e;
        c.tra = g;
        c.ued(d, b);
        c.sov(this.parent.wea.rdr.zto);
        c.eda(this.parent.style.rdr.zto);
        c.xxy(f);
        this.myd.hio(j, c, ["buttons", "sbuttons"])
    };
    this.meo = function (f, e, d, c) {
        var b = new ccg();
        b.zky(new xop(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.jvb = c;
        b.tra = e;
        b.sov(this.parent.wea.rdr.zto);
        b.eda(this.parent.style.rdr.zto);
        b.xxy(d);
        this.myd.hio(f, b, ["buttons", "hbuttons"])
    };
    this.rxr = function (b, e, d) {
        var c = new qxq();
        c.zky(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.nfq = function (c, e, d) {
        var b = new nsu();
        b.zky(c, this.context2D, null, null, e);
        b.parent = this;
        b.jvb = d;
        return b
    };
    this.ile = function (d, g, f, e, c) {
        var b = new nsu();
        b.zky(d, this.context2D, null, f, g);
        b.parent = this;
        b.jvb = e;
        if (c != null) {
            b.mkn = c
        }
        return b
    };
    this.ydo = function (c, e, d) {
        var b = new oen();
        b.zky(c, this.context2D, null, e);
        b.parent = this;
        b.jvb = d;
        return b
    };
    this.yez = function (o, n) {
        var m = this.myd.xtb("buttons"),
            g = this.myd.xtb("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.nnj() === true) {
                if (b.yij() === true && b.ijp() === false) {
                    if (b instanceof ccg) {
                        this.parent.wrr.ulw("btn");
                        this.parent.wrr.dls("btn");
                        b.wcw(true, true, true);
                        b.jvb()
                    } else {
                        if (b instanceof nsu) {
                            if (b.pbp() === "rect") {
                                this.parent.wrr.ulw("btn");
                                this.parent.wrr.dls("btn");
                                b.wcw(true, true, false);
                                b.jvb()
                            } else {
                                b.wcw(true, false, false);
                                this.xwo = 0;
                                this.paj = 1;
                                if (b.jvb() === false) {
                                    this.emv = function () {
                                        if (b.jvb() === true) {
                                            clearInterval(a.jlh);
                                            b.wcw(false, true);
                                            for (var p = 0; p < l; p++) {
                                                m[p].bjc(false)
                                            }
                                        }
                                    };
                                    this.jlh = setInterval(this.emv, this.zon)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].bjc(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.nnj() === true && k.yij() === true) {
                    k.oxd(!k.xwa(), true);
                    k.jvb();
                    for (var c = 0; c < l; c++) {
                        g[c].bjc(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.vkf = function () {
        var e = this.myd.xtb("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.zwt() == true && !(c instanceof nsu && c.pbp() === "rect")) {
                clearInterval(this.jlh);
                c.wcw(false, true);
                return true
            }
        }
        return false
    };
    this.tda = function (b) {};
    this.hkt = function (b) {};
    this.pll = function (c, b, d) {
        this.myd.mpx("betd", "#pjk", [c]);
        this.myd.mpx("linesd", "#pjk", [b]);
        this.myd.mpx("totald", "#pjk", [d]);
        this.parent.pla()
    };
    this.amx = function (b) {
        this.upq = b.g;
        this.owr = b.v;
        this.qay = b.v;
        this.wpk = b.r;
        this.act = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.sru = b.m;
            this.mww = b.m
        }
    };
    this.uyj = function () {
        if (this.wpk === true) {
            this.cfb = this.parent.dzc;
            this.cvl = this.parent.dzc;
            this.mqe = 0;
            this.zfb = 0
        }
    };
    this.mwc = function () {
        if (this.upq.length > 0 && this.mqe >= 0) {
            return this.upq[this.mqe]
        }
        return 0
    };
    this.scr = function () {
        var b = this.myd.znq("cmincredit") == null || this.myd.mpx("cmincredit", "#xwa");
        if (this.cfb > 0 && b === true) {
            return this.cfb
        }
        return 0
    };
    this.hig = function () {
        var b = this.myd.znq("cmaxcredit") == null || this.myd.mpx("cmaxcredit", "#xwa");
        if (this.cvl > 0 && b === true) {
            return this.cvl
        }
        return 0
    };
    this.blk = function () {
        var b = this.myd.znq("cmaxwin") == null || this.myd.mpx("cmaxwin", "#xwa");
        if (this.zfb > 0 && b === true) {
            return this.zfb
        }
        return 0
    };
    this.dno = function (c, f, d) {
        if (this.upq && this.upq.length > 0) {
            var g = this.myd.znq("cmincredit") == null || this.myd.mpx("cmincredit", "#xwa"),
                e = this.myd.znq("cmaxcredit") == null || this.myd.mpx("cmaxcredit", "#xwa"),
                b = this.myd.znq("cmaxwin") == null || this.myd.mpx("cmaxwin", "#xwa");
            if (this.wpk === true) {
                g = this.act;
                e = false;
                b = false;
                this.uyj()
            } else {
                if (this.act === true) {
                    g = true;
                    this.cfb = (this.cfb < this.parent.dzc) ? this.cfb : this.parent.dzc;
                    this.cfb = (this.cfb > 0) ? this.cfb : this.parent.dzc
                } else {
                    g = (this.cfb < this.parent.dzc) ? g : false;
                    this.cfb = (this.cfb < this.parent.dzc) ? this.cfb : this.parent.dzc
                }
                e = (this.cvl > this.parent.dzc) ? e : false;
                this.cvl = (this.cvl > this.parent.dzc) ? this.cvl : this.parent.dzc
            }
            this.myd.mpx("cmincredit", "#oxd", [g]);
            this.myd.mpx("cmaxcredit", "#oxd", [e]);
            this.myd.mpx("cmaxwin", "#oxd", [b]);
            this.myd.mpx("gamesd", "#pjk", [(this.upq[this.mqe] > 0) ? this.upq[this.mqe] : "---"]);
            this.myd.mpx("mincreditd", "#pjk", [(g === true && this.cfb > 0) ? this.parent.eik(this.cfb) : "---"]);
            this.myd.mpx("maxcreditd", "#pjk", [(e === true && this.cvl > 0) ? this.parent.eik(this.cvl) : "---"]);
            this.myd.mpx("maxwind", "#pjk", [(b === true && this.zfb > 0) ? this.parent.eik(this.zfb) : "---"]);
            this.myd.mpx("lmincredit", "#oac", [g]);
            this.myd.mpx("mmincredit", "#oac", [g]);
            this.myd.mpx("lmaxcredit", "#oac", [e]);
            this.myd.mpx("mmaxcredit", "#oac", [e]);
            this.myd.mpx("lmaxwin", "#oac", [b]);
            this.myd.mpx("mmaxwin", "#oac", [b])
        }
        this.esa = c;
        this.frf = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.vlz()
            } else {
                if (d === 1) {
                    if (this.parent.beq() != null) {
                        this.mku()
                    } else {
                        this.kle()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.beq() != null) {
                            this.kle()
                        } else {
                            this.xkg()
                        }
                    } else {
                        if (d === 3 && this.parent.beq() != null) {
                            this.xkg()
                        }
                    }
                }
            }
        } else {
            this.vlz()
        }
        this.myd.bez("tbuttons", "#xgf", [true]);
        this.oac(true);
        this.parent.pla()
    };
    this.vin = function () {
        this.myd.bez("tbuttons", "#xgf", [false]);
        this.myd.bez("bbuttons", "#xgf", [false]);
        this.myd.bez("sbuttons", "#xgf", [false]);
        this.myd.bez("abuttons", "#xgf", [false]);
        this.myd.bez("acheckboxes", "#xgf", [false]);
        this.oac(false);
        this.parent.pla()
    };
    this.stop = function () {
        clearInterval(this.jlh)
    };
    this.sii = function (d, b) {
        var c = "";
        this.myd.mpx("language", "#pjk", [dac.khg.ijf(d.language)]);
        this.myd.mpx("audio", "#pjk", [dac.khg.ijf(d.audio)]);
        this.myd.mpx("melody", "#pjk", [dac.khg.ijf(d.hyv)]);
        this.myd.mpx("fullscreen", "#pjk", [dac.khg.ijf(d.efn)]);
        this.myd.mpx("turbo", "#pjk", [dac.khg.ijf(d.kjr)]);
        this.myd.mpx("help", "#pjk", [dac.khg.ijf(d.duv)]);
        this.myd.mpx("history", "#pjk", [dac.khg.ijf(d.zmo)]);
        this.myd.mpx("statistic", "#pjk", [dac.khg.ijf(d.fdd)]);
        this.myd.mpx("rules", "#pjk", [dac.khg.ijf(d.xqg)]);
        this.myd.mpx("gamble", "#pjk", [dac.khg.ijf(d.dkg)]);
        if (dac.khg.riv[dac.khg.zej] === dac.icz.zed) {
            c = dac.khg.ijf(d.left)
        } else {
            if (dac.khg.riv[dac.khg.zej] === dac.icz.bpq) {
                c = dac.khg.ijf(d.dva)
            } else {
                if (dac.khg.riv[dac.khg.zej] === dac.icz.wem) {
                    c = dac.khg.ijf(d.zqq)
                }
            }
        }
        this.myd.mpx("adjustment", "#pjk", [c]);
        if (b && b === true) {
            this.ctt = dac.khg.ijf(d.wrg) + "/" + dac.khg.ijf(d.lay) + ":";
            this.nin = dac.khg.ijf(d.snl) + ":"
        } else {
            this.ctt = dac.khg.ijf(d.wrg) + ":"
        }
        this.tnd = dac.khg.ijf(d.hcy) + ":";
        this.iym = dac.khg.ijf(d.iyl);
        this.vcj = dac.khg.ijf(d.vpw);
        if (this.parent.tjf === true && dac.ewv.value44.d === true) {
            this.nvn = dac.khg.ijf(d.ldr)
        }
        this.myd.mpx("cmincredit", "#pjk", [dac.khg.ijf(d.okv)]);
        this.myd.mpx("cmaxcredit", "#pjk", [dac.khg.ijf(d.nit)]);
        this.myd.mpx("cmaxwin", "#pjk", [dac.khg.ijf(d.whf)])
    };
    this.pla = function (l, j, m, e) {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.myd.xtb("tbuttons"),
            b = this.wrf,
            g = this.rcq;
        if (this.xqr) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.wrf);
            b.addColorStop(1, this.xqr)
        }
        if (this.guh) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.rcq);
            g.addColorStop(1, this.guh)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        dac.fip.mjy(n, 0, 0, this.width, this.height, this.xdh, b, g, this.emh);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].pla()
        }
        if (this.xen === 0) {
            this.kyn(n)
        } else {
            if (this.xen === 1) {
                this.dwq(n)
            } else {
                if (this.xen === 2) {
                    this.vmz(n)
                } else {
                    if (this.xen === 3) {
                        this.cwv(n)
                    }
                }
            }
        }
        n.restore();
        if (this.dsp && this.lbg) {
            if (c) {
                this.dsp.drawImage(this.lbg, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.dsp.drawImage(this.lbg, this.x, this.y)
            }
        }
    };
    this.kyn = function (c) {
        var f = this.myd.xtb("bbuttons"),
            d = this.myd.xtb("bdisplays");
        if (this.cxw.width > 0 && this.cxw.height > 0) {
            dac.fip.bhn(c, this.ctt, this.vab, this.cxw.x, this.cxw.y, this.cxw.width, this.cxw.height, this.aym, this.qse, this.tsk, 0)
        }
        if (this.dpm.width > 0 && this.dpm.height > 0) {
            dac.fip.bhn(c, this.nin, this.vab, this.dpm.x, this.dpm.y, this.dpm.width, this.dpm.height, this.aym, this.qse, this.tsk, 0)
        }
        if (this.gks.width > 0 && this.gks.height > 0) {
            dac.fip.bhn(c, this.tnd, this.vab, this.gks.x, this.gks.y, this.gks.width, this.gks.height, this.aym, this.qse, this.tsk, 0)
        }
        dac.fip.mcj(c, this.zkt, this.vab, this.skj.x, this.skj.y, this.skj.width, this.skj.height, this.aym, this.jjm, this.tsk, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].pla()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].pla()
        }
    };
    this.dwq = function (c) {
        var f = this.myd.xtb("abuttons"),
            d = this.myd.xtb("adisplays"),
            g = this.myd.xtb("acheckboxes");
        dac.fip.mcj(c, this.nvn, this.vab, this.vfa.x, this.vfa.y, this.vfa.width, this.vfa.height, this.aym, this.jjm, this.tsk, "center", true);
        dac.fip.bhn(c, this.iym, this.vab, this.uuk.x, this.uuk.y, this.uuk.width, this.uuk.height, this.aym, this.rsj, this.tsk, 0);
        dac.fip.mxc(c, this.vcj, this.vab, this.bkb.x, this.bkb.y, this.bkb.width, this.bkb.height, this.aym, this.rsj, this.tsk);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].pla()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].pla()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].pla()
        }
    };
    this.vmz = function (c) {
        var d = this.myd.xtb("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].pla()
        }
    };
    this.cwv = function (c) {
        var d = this.myd.xtb("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].pla()
        }
    };
    this.pat = function () {
        a.mqe = (a.mqe < a.upq.length - 1) ? a.mqe + 1 : 0;
        a.parent.wrr.dls("btn");
        a.myd.mpx("gamesd", "#pjk", [(a.upq[a.mqe] > 0) ? a.upq[a.mqe] : "---"]);
        a.pla();
        return (a.mqe >= a.upq.length - 1)
    };
    this.usj = function () {
        a.mqe = (a.mqe > 0) ? a.mqe - 1 : a.upq.length - 1;
        a.parent.wrr.dls("btn");
        a.myd.mpx("gamesd", "#pjk", [(a.upq[a.mqe] > 0) ? a.upq[a.mqe] : "---"]);
        a.pla();
        return (a.mqe <= 0)
    };
    this.ufe = function () {
        var b = a.myd.znq("cmincredit") == null || a.myd.mpx("cmincredit", "#xwa");
        if (b === true) {
            if (++a.xwo > 10) {
                a.paj = 10
            }
            a.cfb = (a.cfb + (a.owr * a.paj) <= a.parent.dzc) ? a.cfb + (a.owr * a.paj) : a.parent.dzc;
            a.parent.wrr.dls("btn");
            a.myd.mpx("mincreditd", "#pjk", [(a.cfb > 0) ? a.parent.eik(a.cfb) : "---"]);
            a.myd.mpx("mmincredit", "#oac", [b && a.cfb < a.parent.dzc]);
            a.myd.mpx("lmincredit", "#oac", [b && a.cfb > 0]);
            a.pla();
            return (a.cfb >= a.parent.dzc)
        }
        return true
    };
    this.pna = function () {
        var b = a.myd.znq("cmincredit") == null || a.myd.mpx("cmincredit", "#xwa");
        if (b === true) {
            if (++a.xwo > 10) {
                a.paj = 10
            }
            a.cfb = (a.cfb - (a.owr * a.paj) > 0) ? a.cfb - (a.owr * a.paj) : 0;
            a.parent.wrr.dls("btn");
            a.myd.mpx("mincreditd", "#pjk", [(a.cfb > 0) ? a.parent.eik(a.cfb) : "---"]);
            a.myd.mpx("mmincredit", "#oac", [b && a.cfb < a.parent.dzc]);
            a.myd.mpx("lmincredit", "#oac", [b && a.cfb > 0]);
            a.pla();
            return (a.cfb >= a.parent.dzc || a.cfb <= 0)
        }
        return true
    };
    this.rjq = function () {
        var b = a.myd.znq("cmaxcredit") == null || a.myd.mpx("cmaxcredit", "#xwa");
        if (b === true) {
            if (++a.xwo > 10) {
                a.paj = 10
            }
            a.cvl = (a.cvl + (a.qay * a.paj) > 0) ? a.cvl + (a.qay * a.paj) : 0;
            a.parent.wrr.dls("btn");
            a.myd.mpx("maxcreditd", "#pjk", [(a.cvl > 0) ? a.parent.eik(a.cvl) : "---"]);
            a.myd.mpx("lmaxcredit", "#oac", [b && a.cvl > a.parent.dzc]);
            a.pla();
            return (a.cvl <= a.parent.dzc)
        }
        return true
    };
    this.bby = function () {
        var b = a.myd.znq("cmaxcredit") == null || a.myd.mpx("cmaxcredit", "#xwa");
        if (b === true) {
            if (++a.xwo > 10) {
                a.paj = 10
            }
            a.cvl = (a.cvl - (a.qay * a.paj) > a.parent.dzc) ? a.cvl - (a.qay * a.paj) : a.parent.dzc;
            a.parent.wrr.dls("btn");
            a.myd.mpx("maxcreditd", "#pjk", [(a.cvl > 0) ? a.parent.eik(a.cvl) : "---"]);
            a.myd.mpx("lmaxcredit", "#oac", [b && a.cvl > a.parent.dzc]);
            a.pla();
            return (a.cvl <= a.parent.dzc)
        }
        return true
    };
    this.vqo = function () {
        var b = a.myd.znq("cmaxwin") == null || a.myd.mpx("cmaxwin", "#xwa");
        if (b === true) {
            if (++a.xwo > 10) {
                a.paj = 10
            }
            a.zfb = (a.zfb + (a.qay * a.paj) > 0) ? a.zfb + (a.qay * a.paj) : 0;
            a.parent.wrr.dls("btn");
            a.myd.mpx("maxwind", "#pjk", [(a.zfb > 0) ? a.parent.eik(a.zfb) : "---"]);
            a.myd.mpx("lmaxwin", "#oac", [b && a.zfb > a.qay]);
            a.pla();
            return (a.zfb <= a.qay)
        }
        return true
    };
    this.xkn = function () {
        var b = a.myd.znq("cmaxwin") == null || a.myd.mpx("cmaxwin", "#xwa");
        if (b === true) {
            if (++a.xwo > 10) {
                a.paj = 10
            }
            a.zfb = (a.zfb - (a.qay * a.paj) > 0) ? a.zfb - (a.qay * a.paj) : a.qay;
            a.parent.wrr.dls("btn");
            a.myd.mpx("maxwind", "#pjk", [(a.zfb > 0) ? a.parent.eik(a.zfb) : "---"]);
            a.myd.mpx("lmaxwin", "#oac", [b && a.zfb > a.qay]);
            a.pla();
            return (a.zfb <= a.qay)
        }
        return true
    };
    this.sjg = function () {
        var b = a.myd.znq("cmincredit") == null || a.myd.mpx("cmincredit", "#xwa");
        a.cfb = a.parent.dzc;
        a.myd.mpx("mincreditd", "#pjk", [(b === true && a.cfb > 0) ? a.parent.eik(a.cfb) : "---"]);
        a.myd.mpx("lmincredit", "#oac", [b]);
        a.myd.mpx("mmincredit", "#oac", [b && a.cfb < a.parent.dzc]);
        a.pla()
    };
    this.iib = function () {
        var b = a.myd.znq("cmaxcredit") == null || a.myd.mpx("cmaxcredit", "#xwa");
        a.cvl = a.parent.dzc;
        a.myd.mpx("maxcreditd", "#pjk", [(b === true && a.cvl > 0) ? a.parent.eik(a.cvl) : "---"]);
        a.myd.mpx("lmaxcredit", "#oac", [b && a.cvl > a.parent.dzc]);
        a.myd.mpx("mmaxcredit", "#oac", [b]);
        a.pla()
    };
    this.xlk = function () {
        var b = a.myd.znq("cmaxwin") == null || a.myd.mpx("cmaxwin", "#xwa");
        if (a.zfb === 0) {
            a.zfb = a.qay
        }
        a.myd.mpx("maxwind", "#pjk", [(b === true && a.zfb > 0) ? a.parent.eik(a.zfb) : "---"]);
        a.myd.mpx("lmaxwin", "#oac", [b && a.zfb > a.qay]);
        a.myd.mpx("mmaxwin", "#oac", [b]);
        a.pla()
    };
    this.vlz = function () {
        a.xen = 0;
        a.myd.mpx("bett", "#wcw", [true, false, false]);
        a.myd.mpx("autot", "#wcw", [false, false, false]);
        a.myd.mpx("helpt", "#wcw", [false, false, false]);
        a.myd.mpx("settingt", "#wcw", [false, false, false]);
        a.myd.mpx("returnt", "#wcw", [false, false, false]);
        a.myd.bez("bbuttons", "#xgf", [a.esa]);
        a.myd.bez("bbuttons", "#oac", [a.esa]);
        a.myd.bez("abuttons", "#xgf", [false]);
        a.myd.bez("acheckboxes", "#xgf", [false]);
        a.myd.bez("hbuttons", "#xgf", [false]);
        a.myd.bez("sbuttons", "#xgf", [false]);
        a.pla()
    };
    this.mku = function () {
        var d = a.myd.znq("cmincredit") == null || a.myd.mpx("cmincredit", "#xwa"),
            c = a.myd.znq("cmaxcredit") == null || a.myd.mpx("cmaxcredit", "#xwa"),
            b = a.myd.znq("cmaxwin") == null || a.myd.mpx("cmaxwin", "#xwa");
        a.xen = 1;
        a.owr = (a.sru > 0) ? a.parent.tac() * a.sru : a.owr;
        a.qay = (a.mww > 0) ? a.parent.tac() * a.mww : a.qay;
        a.myd.mpx("bett", "#wcw", [false, false, false]);
        a.myd.mpx("autot", "#wcw", [true, false, false]);
        a.myd.mpx("helpt", "#wcw", [false, false, false]);
        a.myd.mpx("settingt", "#wcw", [false, false, false]);
        a.myd.mpx("returnt", "#wcw", [false, false, false]);
        a.myd.bez("bbuttons", "#xgf", [false]);
        a.myd.bez("abuttons", "#xgf", [true]);
        a.myd.mpx("mmincredit", "#oac", [d && a.cfb < a.parent.dzc]);
        a.myd.mpx("lmaxcredit", "#oac", [c && a.cvl > a.parent.dzc]);
        a.myd.mpx("lmaxwin", "#oac", [b && a.zfb > a.qay]);
        a.myd.bez("acheckboxes", "#xgf", [true]);
        a.myd.bez("hbuttons", "#xgf", [false]);
        a.myd.bez("sbuttons", "#xgf", [false]);
        if (a.act === true) {
            a.myd.mpx("cmincredit", "#xgf", [false])
        }
        a.pla()
    };
    this.kle = function () {
        a.xen = 2;
        a.myd.mpx("bett", "#wcw", [false, false, false]);
        a.myd.mpx("autot", "#wcw", [false, false, false]);
        a.myd.mpx("helpt", "#wcw", [true, false, false]);
        a.myd.mpx("settingt", "#wcw", [false, false, false]);
        a.myd.mpx("returnt", "#wcw", [false, false, false]);
        a.myd.bez("bbuttons", "#xgf", [false]);
        a.myd.bez("abuttons", "#xgf", [false]);
        a.myd.bez("acheckboxes", "#xgf", [false]);
        a.myd.bez("hbuttons", "#xgf", [true]);
        a.myd.bez("sbuttons", "#xgf", [false]);
        a.pla()
    };
    this.xkg = function () {
        a.xen = 3;
        a.myd.mpx("bett", "#wcw", [false, false, false]);
        a.myd.mpx("autot", "#wcw", [false, false, false]);
        a.myd.mpx("helpt", "#wcw", [false, false, false]);
        a.myd.mpx("settingt", "#wcw", [true, false, false]);
        a.myd.mpx("returnt", "#wcw", [false, false, false]);
        a.myd.bez("bbuttons", "#xgf", [false]);
        a.myd.bez("abuttons", "#xgf", [false]);
        a.myd.bez("acheckboxes", "#xgf", [false]);
        a.myd.bez("hbuttons", "#xgf", [false]);
        a.myd.bez("sbuttons", "#xgf", [true]);
        a.myd.mpx("gamble", "#xgf", [a.frf]);
        a.pla()
    };
    this.bsa = function () {
        a.parent.gix();
        a.myd.mpx("returnt", "#wcw", [false, false, false])
    }
}
bxe.prototype = new ebm;

function pqy() {
    var a = this;
    this.aym = null;
    this.tsk = "bold";
    this.wrf = "rgb(0,0,0)";
    this.xqr = null;
    this.vab = "rgb(255,255,255)";
    this.guh = null;
    this.rcq = "rgb(60,60,60)";
    this.lfc = null;
    this.zkd = null;
    this.cxv = false;
    this.mxl = [];
    this.odn = [];
    this.aod = null;
    this.pdv = 19;
    this.efq = 15;
    this.cve = 120;
    this.tqn = 2;
    this.ojs = 2;
    this.joy = 2;
    this.nxr = 10;
    this.zhg = 12;
    this.zky = function (b, d, c) {
        pqy.prototype.zky.call(this, b, d, c)
    };
    this.sov = function (b) {
        try {
            this.zhg = b.fontSize;
            this.pdv = b.afn;
            this.efq = b.fzh;
            this.cve = b.xnb;
            this.tqn = b.pfx;
            this.ojs = b.xpn;
            this.joy = b.czc;
            this.nxr = b.awm
        } catch (c) {
            console.error(c)
        }
    };
    this.eda = function (b) {
        try {
            this.aym = b.font;
            this.tsk = b.akl;
            this.wrf = b.backgroundColor;
            this.xqr = b.wgg;
            this.vab = b.rmc;
            this.rcq = b.borderColor;
            this.guh = b.fbc;
            if (this.xqr) {
                this.lfc = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.lfc.addColorStop(0, this.xqr);
                this.lfc.addColorStop(0.5, this.wrf)
            } else {
                this.lfc = this.wrf
            }
            if (this.guh) {
                this.zkd = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.zkd.addColorStop(0, this.guh);
                this.zkd.addColorStop(1, this.rcq)
            } else {
                this.zkd = this.rcq
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.yez = function (b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.nxr : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.yij()) {
            this.parent.vbm();
            return true
        }
        return false
    };
    this.xle = function (d, b, c) {
        this.odn.push({
            id: d,
            igk: b,
            value: c,
            jlq: null
        })
    };
    this.bwz = function (e, c, d, b) {
        this.odn.push({
            id: e,
            igk: c,
            value: d,
            jlq: b
        })
    };
    this.crp = function (d, b, c) {
        this.mxl.push({
            id: d,
            rwu: b,
            value: c
        })
    };
    this.tvl = function (e, d) {
        for (var c = 0, b = this.odn.length; c < b; c++) {
            if (this.odn[c].id == e) {
                this.odn[c].value = d;
                return true
            }
        }
        return false
    };
    this.qvl = function (c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.ryf = function (e, d) {
        for (var c = 0, b = this.mxl.length; c < b; c++) {
            if (this.mxl[c].id == e) {
                if (this.mxl[c].value != d) {
                    this.mxl[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.lei = function (b) {
        this.aod = b
    };
    this.xgf = function (b) {
        this.cxv = b
    };
    this.yij = function (b) {
        return this.cxv
    };
    this.xdt = function (c, b) {
        if (this.tvl(c, b)) {
            window.pji(a.pla)
        }
    };
    this.dlk = function (c, b) {
        if (this.ryf(c, b)) {
            window.pji(a.pla)
        }
    };
    this.spi = function (b) {
        this.lei(b);
        window.pji(a.pla)
    };
    this.pla = function () {
        if (!a.nnj() || !a.parent.inc()) {
            return
        }
        var e = (a.height - a.zhg) / 2 + a.ojs,
            c = a.tqn + a.pdv * a.odn.length,
            d = a.width - c - (a.cve * a.mxl.length),
            b = a.context2D;
        b.save();
        dac.fip.dml(b, 0, 0, a.width, a.height, a.lfc, 1);
        a.tzw(b, e);
        a.tmz(b, e);
        if (a.aod && a.aod != "") {
            dac.fip.mxc(b, a.aod, a.vab, c, e, d, a.zhg, a.aym, a.zhg, a.tsk)
        } else {
            if (a.yij()) {
                a.rdc(b)
            }
        }
        a.efz(b, 0, a.height - a.joy / 2, a.width, a.height - a.joy / 2);
        b.restore();
        if (a.dsp && a.lbg) {
            a.dsp.drawImage(a.lbg, a.x, a.y)
        }
    };
    this.tzw = function (d, g) {
        var c = 0;
        for (var f = 0, b = this.odn.length; f < b; f++) {
            if (this.odn[f].jlq) {
                var e = this.qvl(this.odn[f].jlq, this.odn[f].value);
                if (this.odn[f].igk instanceof Array) {
                    dac.fip.mxc(d, this.odn[f].igk[e], this.vab, c, g, this.pdv, this.zhg, this.aym, this.zhg, this.tsk)
                } else {
                    if (this.odn[f].igk instanceof Image || this.odn[f].igk instanceof HTMLCanvasElement) {
                        d.drawImage(this.odn[f].igk, e * this.efq, 0, this.efq, this.odn[f].igk.height, c + this.tqn, g - this.ojs, this.pdv - 2 * this.tqn, this.zhg)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.odn[f].value == true) ? 1 : 0.3;
                if (this.odn[f].igk instanceof String) {
                    dac.fip.mxc(d, this.odn[f].igk, this.vab, c, g, this.pdv, this.zhg, this.aym, this.zhg, this.tsk)
                } else {
                    if (this.odn[f].igk instanceof Image || this.odn[f].igk instanceof HTMLCanvasElement) {
                        d.drawImage(this.odn[f].igk, c + this.tqn, g - this.ojs, this.pdv - 2 * this.tqn, this.zhg)
                    }
                }
                d.restore()
            }
            c += this.pdv;
            this.efz(d, c, 0, c, this.height)
        }
        return c
    };
    this.tmz = function (d, f) {
        var c = this.width - this.tqn - this.cve * this.mxl.length;
        for (var e = 0, b = this.mxl.length; e < b; e++) {
            if (this.mxl[e].id == "freeplay") {
                dac.fip.dml(d, c, 0, this.cve, this.height, "red", 0.4)
            } else {
                if (this.mxl[e].id == "freespin") {
                    dac.fip.dml(d, c, 0, this.cve, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.efz(d, c, 0, c, this.height);
            dac.fip.mxc(d, this.mxl[e].rwu + this.mxl[e].value, this.vab, c, f, this.cve, this.zhg, this.aym, this.zhg, this.tsk);
            c += this.cve
        }
    };
    this.efz = function (b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.zkd;
        b.lineWidth = this.joy;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.rdc = function (c) {
        if (this.parent.hed.znq("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.joy,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.joy;
        c.save();
        c.strokeStyle = this.rcq;
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
pqy.prototype = new ebm;

function kmq() {
    var b = this;
    var c = 0;
    var a = 1;
    this.aoz = 7;
    this.zeg = 89;
    this.ewt = 10000;
    this.myd = null;
    this.cxv = false;
    this.lxy = false;
    this.yau = -1;
    this.wvu = 0;
    this.aym = null;
    this.tsk = "bold";
    this.wrf = "black";
    this.bfj = null;
    this.odr = null;
    this.wqq = null;
    this.vab = "white";
    this.leg = 0.8;
    this.msj = 0;
    this.hpr = 0;
    this.pjd = 0;
    this.cen = 0;
    this.jly = 0;
    this.qqn = 0;
    this.tyr = 0;
    this.tqn = 10;
    this.ojs = 5;
    this.oca = 10;
    this.rhf = this.tqn;
    this.uoy = 10;
    this.lwe = 20;
    this.gdj = 40;
    this.emh = 4;
    this.zhg = 10;
    this.tpv = null;
    this.vrw = null;
    this.tmx = "";
    this.ftw = null;
    this.zky = function (d, f, e) {
        kmq.prototype.zky.call(this, d, f, e);
        this.myd = new rxh();
        this.myd.zky();
        this.myd.jqg("buttons");
        this.myd.jqg("system");
        this.myd.jqg("setting")
    };
    this.sov = function (d) {
        try {
            this.zhg = d.fontSize;
            this.uoy = d.aan;
            this.lwe = d.sdm;
            this.gdj = d.liq;
            this.emh = d.dkv;
            this.tqn = d.pfx;
            this.ojs = d.xpn;
            this.oca = d.kfu
        } catch (f) {
            console.error(f)
        }
    };
    this.eda = function (g, m) {
        try {
            var k = this.myd.xtb("buttons"),
                j = (m === true) ? g.yur.fsa : g.kml.fsa;
            this.aym = g.font;
            this.tsk = g.akl;
            this.wrf = g.backgroundColor;
            this.bfj = g.zxb;
            this.odr = g.jup;
            this.vab = g.rmc;
            this.leg = g.oqs;
            if (this.bfj && this.odr) {
                this.wqq = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.wqq.addColorStop(0, this.bfj);
                this.wqq.addColorStop(0.5, this.odr);
                this.wqq.addColorStop(1, this.bfj)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].eda(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.yez = function (p, o) {
        var n = this.myd.hlf(),
            q = this.myd.znq("audio"),
            r = this.myd.znq("language"),
            f = this.myd.znq("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.lxy) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.nnj()) {
                if (g.yij() && !g.ijp()) {
                    if (g != q && g != r) {
                        this.parent.wrr.ulw("btn");
                        this.parent.wrr.dls("btn")
                    }
                    g.wcw(true, true, false);
                    g.jvb();
                    for (var k = 0; k < m; k++) {
                        n[k].bjc(true)
                    }
                    if (g != f) {
                        if (this.yau >= 0) {
                            clearTimeout(this.yau);
                            this.yau = -1
                        }
                        this.yau = setTimeout(this.ueo, this.ewt)
                    }
                }
                return true
            }
        }
        if (this.nnj() && this.yij()) {
            if (p < this.x + this.jly || p > this.x + this.jly + this.qqn || o < this.y || o > this.y + this.height) {
                if (this.yau >= 0) {
                    clearTimeout(this.yau);
                    this.yau = -1
                }
                return false
            }
        }
        return true
    };
    this.vkf = function () {
        var g = this.myd.hlf();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.zwt() == true) {
                e.wcw(false, true);
                return true
            }
        }
        return false
    };
    this.tda = function (e) {
        var o = this.myd.hlf(),
            d = this.myd.xtb("system"),
            m = this.myd.xtb("setting"),
            q = this.myd.znq("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.lxy) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.mkn || e == f.fop) && !f.ijp()) {
                if (f != q) {
                    this.parent.wrr.ulw("btn");
                    this.parent.wrr.dls("btn")
                }
                f.wcw(true, true, false);
                f.jvb();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].bjc(true)
                }
                if (this.yau >= 0) {
                    clearTimeout(this.yau);
                    this.yau = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.mkn || e == f.fop) && f.yij() && !f.ijp()) {
                if (f != q) {
                    this.parent.wrr.ulw("btn");
                    this.parent.wrr.dls("btn")
                }
                f.wcw(true, true, false);
                f.jvb();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].bjc(true)
                }
                if (this.yau >= 0) {
                    clearTimeout(this.yau);
                    this.yau = -1
                }
                return true
            }
        }
        if (this.nnj() && this.yij()) {
            if (this.parent.bsx) {
                for (l = 0, n = this.parent.bsx.nhk.length; l < n; l++) {
                    var p = this.parent.bsx.nhk[l];
                    if (p.nhn == e || p.nhn == e) {
                        if (this.yau >= 0) {
                            clearTimeout(this.yau);
                            this.yau = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.hkt = function () {
        var g = this.myd.hlf();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.zwt() == true) {
                e.wcw(false, true, false);
                return true
            }
        }
        return false
    };
    this.mnc = function (e, m) {
        var k = this.myd.hlf(),
            l = e - this.x,
            j = m - this.y;
        this.vrw = this.tpv;
        this.tpv = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.nnj() && f.yij() && !f.ijp()) {
                this.tpv = f
            }
        }
        if (this.tpv) {
            this.kxc(true)
        } else {
            this.kxc(false)
        }
        return true
    };
    this.nof = function (e, f, g, j, m, d, n) {
        this.tyr = g.width;
        var l = new xop(this.rhf, this.ojs, this.tyr, this.tyr);
        var k = new ccg();
        k.zky(l, this.context2D);
        k.parent = this;
        k.jvb = j;
        k.uck = f;
        k.ued(d, n);
        k.sov(this.parent.wea.jik.gsh);
        k.eda(this.parent.style.jik.kml.fsa);
        k.xxy(g);
        if (m != null) {
            k.fop = m.npj;
            k.mkn = m.nhn;
            k.hud = m.value
        }
        this.myd.hio(e, k, ["buttons", "setting"]);
        this.rhf += this.tyr + this.tqn;
        this.qqn = this.rhf
    };
    this.bel = function (l, k, j, g, e) {
        this.tyr = j.width;
        var f = new xop(this.rhf, this.ojs, this.tyr, this.tyr);
        var d = new ccg();
        d.zky(f, this.context2D);
        d.parent = this;
        d.jvb = g;
        d.uck = k;
        d.sov(this.parent.wea.jik.gsh);
        d.eda(this.parent.style.jik.kml.fsa);
        d.xxy(j);
        if (e != null) {
            d.fop = e.npj;
            d.mkn = e.nhn;
            d.hud = e.value
        }
        this.myd.hio(l, d, ["buttons", "system"]);
        this.rhf += this.tyr + this.tqn;
        this.qqn = this.rhf
    };
    this.krj = function () {
        var f = this.myd.hlf();
        this.qqn += 2 * this.oca;
        this.jly = Math.round((this.width - this.qqn) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.jly + this.oca
        }
    };
    this.jgb = function () {
        return this.qqn
    };
    this.xgf = function (d) {
        this.cxv = d
    };
    this.yij = function () {
        return this.cxv
    };
    this.hly = function (g) {
        var f = this.myd.hlf();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].xgf(g)
        }
        this.parent.pla()
    };
    this.mcy = function (g) {
        var f = this.myd.xtb("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].xgf(g)
        }
        this.parent.pla()
    };
    this.sha = function (g) {
        var f = this.myd.xtb("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].xgf(g)
        }
        this.parent.pla()
    };
    this.dno = function () {
        if (this.nnj()) {
            return
        }
        if (this.lxy) {
            if (this.cen === a) {
                this.ftw = this.dno
            } else {
                this.ftw = null
            }
        } else {
            this.ftw = null;
            this.nsb();
            this.ocv()
        }
    };
    this.ram = function (d) {
        if (this.parent.yqu) {
            this.parent.yqu()
        }
        this.stop();
        this.lxy = false;
        this.ftw = null;
        this.oac(true, d);
        if (this.yau >= 0) {
            clearTimeout(this.yau);
            this.yau = -1
        }
        this.yau = setTimeout(this.ueo, this.ewt)
    };
    this.ueo = function () {
        if (b.nnj()) {
            b.parent.wrr.ulw("panel_out");
            b.parent.wrr.dls("panel_out");
            b.vin()
        }
    };
    this.vin = function () {
        if (!this.nnj()) {
            return
        }
        if (this.lxy) {
            if (this.cen === c) {
                this.ftw = this.vin
            } else {
                this.ftw = null
            }
        } else {
            this.ftw = null;
            this.qid();
            this.ocv();
            if (this.yau >= 0) {
                clearTimeout(this.yau);
                this.yau = -1
            }
        }
    };
    this.iwf = function (d) {
        if (this.parent.ult) {
            this.parent.ult()
        }
        this.stop();
        this.lxy = false;
        this.ftw = null;
        this.oac(false, d);
        if (typeof this.zvi === "function") {
            this.zvi();
            this.zvi = null
        }
    };
    this.nsb = function () {
        this.oac(true);
        this.lxy = true;
        this.cxv = false;
        this.cen = c;
        this.msj = Math.floor(this.height / this.aoz);
        this.pjd = 1;
        this.hpr = Math.floor(this.height / this.aoz)
    };
    this.qid = function () {
        if (this.parent.ult) {
            this.parent.ult()
        }
        this.lxy = true;
        this.cxv = false;
        this.cen = a;
        this.msj = -Math.floor(this.height / this.aoz);
        this.pjd = 1;
        this.hpr = this.height
    };
    this.ocv = function () {
        this.wvu = setInterval(this.hsn, this.zeg)
    };
    this.ltv = function () {
        if (b.cen == c) {
            if (b.parent.yqu) {
                b.parent.yqu()
            }
            if (b.yau >= 0) {
                clearTimeout(b.yau);
                b.yau = -1
            }
            b.yau = setTimeout(b.ueo, b.ewt)
        }
        clearInterval(b.wvu);
        if (b.ftw) {
            b.ftw()
        }
    };
    this.stop = function () {
        clearTimeout(this.yau);
        clearInterval(this.wvu);
        this.yau = -1
    };
    this.hsn = function () {
        if (!b.vhp()) {
            b.ltv()
        }
    };
    this.vhp = function () {
        if (b.pjd < b.aoz) {
            b.parent.pla(b.x, b.y, b.width, b.height);
            b.hpr += b.msj;
            b.pjd++;
            return true
        } else {
            b.lxy = false;
            b.cxv = true;
            if (b.cen == a) {
                b.oac(false);
                if (typeof b.zvi === "function") {
                    b.zvi();
                    b.zvi = null
                }
            }
            b.parent.pla(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.pla = function (n, m, o, g) {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.myd.hlf(),
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
        this.kok(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].pla()
        }
        if (this.tpv && this.tmx != "") {
            k = this.tpv.x - this.tqn - this.tyr;
            d = 3 * this.tyr + 2 * this.tqn;
            if (k + d >= this.jly + this.qqn) {
                k = this.jly + this.qqn - d;
                dac.fip.qrp(p, this.tmx, this.vab, k, this.tpv.y + this.tpv.height, d, this.zhg, this.aym, this.zhg, this.tsk, this.tqn)
            } else {
                dac.fip.mxc(p, this.tmx, this.vab, k, this.tpv.y + this.tpv.height, d, this.zhg, this.aym, this.zhg, this.tsk)
            }
        }
        p.restore();
        if (this.lxy) {
            if (this.dsp && this.lbg && this.hpr > 0) {
                this.dsp.drawImage(this.lbg, 0, this.height - this.hpr, this.width, this.hpr, this.x, this.y, this.width, this.hpr)
            }
        } else {
            if (e) {
                this.parent.pla(this.x + n, this.y + m, o, g)
            } else {
                if (this.dsp && this.lbg) {
                    this.dsp.drawImage(this.lbg, this.x, this.y)
                }
            }
        }
    };
    this.kok = function (d) {
        var f = this.emh,
            e = f / 2;
        d.save();
        d.strokeStyle = this.wqq;
        d.fillStyle = this.wrf;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.uoy, this.uoy + e, this.uoy, this.uoy);
        d.arcTo(this.jly, this.uoy, this.jly, this.height - this.lwe - e, this.gdj);
        d.arcTo(this.jly, this.height - e, this.jly + this.lwe, this.height - e, this.lwe);
        d.lineTo(this.jly + this.qqn - this.lwe, this.height - e);
        d.arcTo(this.jly + this.qqn, this.height - e, this.jly + this.qqn, this.height - this.lwe - e, this.lwe);
        d.arcTo(this.jly + this.qqn, this.uoy, this.width - this.uoy - e, this.uoy, this.gdj);
        d.arcTo(this.width - e, this.uoy, this.width - e, 0, this.uoy);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.leg;
        d.fill();
        d.restore()
    };
    this.kxc = function (d) {
        if (this.tpv && this.tpv != this.vrw) {
            if (d && this.tpv) {
                this.tmx = this.parent.ijf(this.tpv.uck);
                if (!dac.fip.hdk) {
                    this.tmx = (this.tpv.hud) ? this.tmx + " [" + this.tpv.hud + "]" : this.tmx
                }
            } else {
                this.tmx = ""
            }
            this.parent.pla(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.tpv && this.tmx != this.parent.ijf(this.tpv.uck))) {
                this.tmx = this.parent.ijf(this.tpv.uck);
                if (!dac.fip.hdk) {
                    this.tmx = (this.tpv.hud) ? this.tmx + " [" + this.tpv.hud + "]" : this.tmx
                }
            }
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.zvi = null
}
kmq.prototype = new ebm;

function rlq() {
    var a = this;
    this.vbg = "LOADING ... ";
    this.pjb = "ERROR";
    this.iok = null;
    this.pze = null;
    this.iyr = false;
    this.onw = false;
    this.gyh = true;
    this.jmi = null;
    this.gkk = null;
    this.wvu = 0;
    this.yky = 0;
    this.cni = false;
    this.hua = false;
    this.xxo = 0;
    this.qvc = 60;
    this.jgm = 0;
    this.uim = null;
    this.tmx = null;
    this.jwk = null;
    this.tnz = true;
    this.aym = null;
    this.tsk = "bold";
    this.vwx = "black";
    this.xhd = "rgb(0,100,10)";
    this.bcc = "rgb(80,255,100)";
    this.eow = "rgb(120,120,120)";
    this.odc = "red";
    this.obt = "white";
    this.zhg = 14;
    this.qhq = 18;
    this.wuk;
    this.vsl;
    this.skf;
    this.tyg;
    this.oca = 5;
    this.tqn = 12;
    this.ojs = 5;
    this.bfc = 2;
    this.ivb = 7;
    this.brz = new xop();
    this.rrw = 0;
    this.fmx = 0;
    this.xua = 0;
    this.sol = new xop();
    this.wob = new xop();
    this.tht = new xop();
    this.dmz = new xop();
    this.zky = function (b, d, c) {
        rlq.prototype.zky.call(this, b, d, c);
        if (dac.ewv.value45 == dac.fzq.von) {
            this.jmi = document.createElement("canvas");
            this.gkk = this.jmi.getContext("2d")
        }
    };
    this.sov = function (b) {
        try {
            this.zhg = b.fontSize;
            this.qhq = b.suc;
            this.oca = b.kfu;
            this.tqn = b.pfx;
            this.ojs = b.xpn;
            this.bfc = b.edt;
            this.ivb = b.wng;
            this.wuk = b.wkh;
            this.vsl = b.stn;
            this.skf = b.axj;
            this.tyg = b.ich;
            this.brz = b.crs.eqf;
            this.rrw = b.crs.x;
            this.fmx = b.crs.sbl;
            this.xua = b.crs.toz;
            this.sol = b.tkr;
            this.wob = b.qfl.tkr;
            this.tht = b.qfl.stn;
            this.dmz = b.qfl.pcy;
            if (dac.ewv.value45 == dac.fzq.von) {
                this.jmi.width = Math.round(this.brz.width);
                this.jmi.height = Math.round(this.brz.height)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.eda = function (b) {
        try {
            this.aym = b.font;
            this.tsk = b.akl;
            this.vwx = b.backgroundColor;
            this.xhd = b.seo;
            this.bcc = b.xtn;
            this.eow = b.ifa;
            this.odc = b.ipt;
            this.obt = b.ejy;
            this.pze = b.pze
        } catch (c) {
            console.error(c)
        }
    };
    this.pla = function (b) {
        if (b && b >= 0) {
            this.yky = b
        }
        if (!this.nnj()) {
            return
        }
        if (dac.ewv.value45 == dac.fzq.uwm) {
            this.qln()
        } else {
            if (dac.ewv.value45 == dac.fzq.hwf || dac.ewv.value45 == dac.fzq.von) {
                if (!this.iok && this.tmx && this.jwk) {
                    this.pgr()
                } else {
                    if (dac.ewv.value45 == dac.fzq.hwf) {
                        this.mgg()
                    } else {
                        if (dac.ewv.value45 == dac.fzq.von) {
                            if (b === 100) {
                                this.lsd()
                            }
                            this.mzd()
                        }
                    }
                }
            }
        }
    };
    this.qln = function () {
        if (this.iyr) {
            var c = this.context2D,
                b = this.skf.width / 100;
            c.save();
            if (this.onw === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.wrr.ark("splash"), 0, 0, this.width, this.height);
            if (this.pze) {
                dac.fip.dml(c, this.oca, this.oca, this.width - 2 * this.oca, this.height - 2 * this.oca, this.pze, 0.3)
            }
            if (this.iok != null && this.iok != "") {
                this.kag(this.tyg, true)
            } else {
                if (this.tmx != null && this.tmx != "") {
                    this.efp(this.tyg, true)
                } else {
                    if (this.gyh === true) {
                        if (this.onw === false) {
                            dac.fip.dml(c, this.wuk.x, this.wuk.y, this.wuk.width, this.wuk.height, this.vwx, 0.5)
                        }
                        var e = this.vbg + " " + this.yky + "%";
                        var d = c.createLinearGradient(this.skf.x, this.skf.y, this.skf.x + this.skf.width, this.skf.y);
                        d.addColorStop(0, this.xhd);
                        d.addColorStop(1, this.bcc);
                        dac.fip.mxc(c, e, this.obt, this.vsl.x, this.vsl.y, this.vsl.width, this.vsl.height, this.aym, this.zhg, this.tsk);
                        dac.fip.jtv(c, this.skf.x - this.bfc, this.skf.y, this.skf.width + 2 * this.bfc, this.skf.height, this.bfc, this.vwx, 0.8, this.eow, this.bfc, 0.8);
                        dac.fip.dml(c, this.skf.x, this.skf.y + this.bfc / 2, b * this.yky, this.skf.height - this.bfc, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.mgg = function () {
        if (this.iyr) {
            var c = this.context2D,
                b = this.skf.width / 100;
            c.save();
            if (this.onw === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            if (this.cni === true && this.uim) {
                c.beginPath();
                c.rect(this.uim.x, this.uim.y, this.uim.width, this.uim.height);
                c.closePath();
                c.clip()
            }
            c.drawImage(this.parent.wrr.ark("splash"), this.sol.x, this.sol.y, this.sol.width, this.sol.height);
            if (this.iok != null && this.iok != "") {
                this.kag(this.tyg, false)
            } else {
                if (this.tmx != null && this.tmx != "") {
                    this.efp(this.tyg, false)
                } else {
                    if (this.gyh === true) {
                        var e = this.vbg + " " + this.yky + "%";
                        var d = c.createLinearGradient(this.skf.x, this.skf.y, this.skf.x + this.skf.width, this.skf.y);
                        d.addColorStop(0, this.xhd);
                        d.addColorStop(1, this.bcc);
                        var f = c.createLinearGradient(this.skf.x + (b * this.yky) - this.ivb, this.skf.y, this.skf.x + (b * this.yky), this.skf.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        dac.fip.mxc(c, e, this.obt, this.vsl.x, this.vsl.y, this.vsl.width, this.vsl.height, this.aym, this.zhg, this.tsk);
                        dac.fip.dml(c, this.skf.x, this.skf.y, this.skf.width, this.skf.height, "rgb(12,15,25)", 1);
                        if (this.yky > 0 && this.yky < 100) {
                            dac.fip.jtv(c, this.skf.x + (b * this.yky) - this.ivb + this.bfc / 2, this.skf.y - this.bfc, this.ivb, this.skf.height + 2 * this.bfc, this.bfc, f, 0.5)
                        }
                        dac.fip.dml(c, this.skf.x, this.skf.y, b * this.yky, this.skf.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.mzd = function () {
        if (this.iyr) {
            var c = this.context2D,
                b = this.skf.width / 100;
            c.save();
            if (this.onw === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.wrr.ark("splash"), this.sol.x, this.sol.y, this.sol.width, this.sol.height);
            if (this.hua) {
                c.drawImage(this.jmi, this.brz.x, this.brz.y)
            }
            if (this.iok != null && this.iok != "") {
                this.kag(this.tyg, false)
            } else {
                if (this.tmx != null && this.tmx != "") {
                    this.efp(this.tyg, false)
                } else {
                    if (this.gyh === true) {
                        var e = this.vbg + " " + this.yky + "%";
                        var d = c.createLinearGradient(this.skf.x, this.skf.y, this.skf.x + this.skf.width, this.skf.y);
                        d.addColorStop(0, this.xhd);
                        d.addColorStop(1, this.bcc);
                        var f = c.createLinearGradient(this.skf.x + (b * this.yky) - this.ivb, this.skf.y, this.skf.x + (b * this.yky), this.skf.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        dac.fip.mxc(c, e, this.obt, this.vsl.x, this.vsl.y, this.vsl.width, this.vsl.height, this.aym, this.zhg, this.tsk);
                        dac.fip.dml(c, this.skf.x, this.skf.y, this.skf.width, this.skf.height, "rgb(12,15,25)", 1);
                        if (this.yky > 0 && this.yky < 100) {
                            dac.fip.jtv(c, this.skf.x + (b * this.yky) - this.ivb + this.bfc / 2, this.skf.y - this.bfc, this.ivb, this.skf.height + 2 * this.bfc, this.bfc, f, 0.5)
                        }
                        dac.fip.dml(c, this.skf.x, this.skf.y, b * this.yky, this.skf.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.pgr = function () {
        if (this.iyr) {
            var b = this.context2D;
            b.save();
            b.clearRect(0, 0, this.width, this.height);
            if (this.jwk) {
                b.drawImage(this.jwk, this.wob.x, this.wob.y, this.wob.width, this.wob.height)
            }
            if (this.tmx != null && this.tmx != "") {
                dac.fip.mcj(b, this.tmx, this.obt, this.tht.x, this.tht.y, this.tht.width, this.tht.height, this.aym, this.zhg, this.tsk, "center", true)
            }
            if (this.tnz === true) {
                dac.fip.mcj(b, "[ " + this.parent.language.hwj + " ]", this.obt, this.dmz.x, this.dmz.y, this.dmz.width, this.dmz.height, this.aym, 2 * this.zhg, this.tsk, "center", true)
            }
            b.restore()
        }
    };
    this.kag = function (c, m) {
        var l = this.context2D,
            o = [],
            d = this.zhg,
            k = this.iok,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.qhq * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.tsk + " " + d + "px " + this.aym;
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
                    if (u >= c.width - 2 * this.tqn) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.ojs)) {
            w = (c.height - j - this.ojs) / b;
            d = Math.round(d * w) - 1;
            l.font = this.tsk + " " + d + "px " + this.aym;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.tsk + " " + d + "px " + this.aym;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.ojs));
            c.height = j + b + this.ojs;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            dac.fip.dml(l, c.x, c.y, c.width, c.height, this.vwx, 0.7)
        }
        if (this.pjb != null) {
            l.font = this.tsk + " " + this.qhq + "px " + this.aym;
            l.fillStyle = this.odc;
            l.textBaseline = "bottom";
            l.fillText(this.pjb, c.x + c.width / 2, c.y + this.qhq + this.ojs)
        }
        l.font = this.tsk + " " + d + "px " + this.aym;
        l.fillStyle = this.obt;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.tqn), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.efp = function (c, d) {
        var b = this.context2D;
        b.save();
        if (d && d === true) {
            dac.fip.dml(b, c.x, c.y, c.width, c.height, this.vwx, 0.7)
        }
        if (this.tnz === true) {
            dac.fip.mcj(b, this.tmx, this.obt, c.x, c.y, c.width, c.height, this.aym, this.zhg, this.tsk, "center", true)
        }
        b.restore()
    };
    this.start = function () {
        this.cni = true;
        this.xxo = new Date().getTime();
        this.uim = new xop(this.brz.x, this.brz.y, this.brz.width, this.brz.height);
        this.jgm = 0;
        this.hsn()
    };
    this.stop = function () {
        this.cni = false;
        this.uim = null;
        clearTimeout(this.wvu)
    };
    this.hsn = function () {
        var b = 0,
            c = new Date().getTime();
        if (a.jgm < 6) {
            a.uim.x -= a.rrw;
            a.uim.width += 2 * a.rrw
        } else {
            if (a.jgm < 12) {
                a.uim.y -= a.xua;
                a.uim.height += a.fmx
            } else {
                a.stop();
                if (typeof a.ljp === "function") {
                    a.ljp()
                }
            }
        }
        a.pla();
        a.jgm++;
        if (a.jgm <= 12) {
            b = (a.jgm * a.qvc - (c - a.xxo));
            a.wvu = setTimeout(a.hsn, b)
        }
    };
    this.jud = function () {
        this.hua = true;
        this.xxo = new Date().getTime();
        this.jgm = 0;
        this.qvc = 89;
        this.pka()
    };
    this.lsd = function () {
        this.hua = false;
        clearTimeout(this.wvu)
    };
    this.pka = function () {
        var d = 0,
            e = new Date().getTime(),
            b = a.gkk,
            c = a.parent.wrr.ark("splashanim");
        if (a.hua === true) {
            a.jgm++;
            b.save();
            b.clearRect(0, 0, c.width, c.height);
            b.translate(c.width / 2, c.height / 2);
            b.rotate(Math.PI / 6 * (a.jgm % 12));
            b.translate(-c.width / 2, -c.height / 2);
            b.drawImage(c, 0, 0);
            b.restore();
            a.pla();
            d = (a.jgm * a.qvc - (e - a.xxo));
            a.wvu = setTimeout(a.pka, d)
        }
    };
    this.rob = function () {
        return (this.cni || this.hua)
    };
    this.xlv = function (c, b) {
        this.tmx = c;
        this.jwk = b;
        this.cni = true;
        this.tnz = true;
        this.wvu = setInterval(this.uld, 800);
        this.pla()
    };
    this.uld = function () {
        a.tnz = !a.tnz;
        a.pla()
    };
    this.ljp = null
}
rlq.prototype = new ebm;

function aud() {
    var a = this;
    this.swa = null;
    this.oln = null;
    this.nep = null;
    this.jjd = null;
    this.cvu = null;
    this.jdc = false;
    this.wvu = -1;
    this.zky = function () {
        this.swa = document.getElementById("notificationDiv");
        this.oln = document.getElementById("notificationTitle");
        this.nep = document.getElementById("notificationText");
        this.jjd = document.getElementById("notificationIcon");
        this.cvu = document.getElementById("notificationCounter");
        if (this.swa) {
            this.swa.onclick = dac.khg.pnw;
            this.swa.ontouchend = dac.khg.pnw
        }
    };
    this.eda = function (b) {};
    this.sov = function (b) {
        try {
            if (this.swa) {
                this.jxz(this.swa, b.eqf);
                if (this.jdc) {
                    if (dac.khg.xvh === dac.wea.pjo) {
                        this.swa.className = "slideRight"
                    } else {
                        this.swa.className = "slideLeft"
                    }
                }
            }
            if (this.oln) {
                this.oln.style.fontSize = b.hqm + "px";
                this.oln.style.left = b.waf.x + "px";
                this.oln.style.top = b.waf.y + "px";
                this.oln.style.width = b.waf.width + "px"
            }
            if (this.nep) {
                this.nep.style.fontSize = b.fjp + "px";
                this.nep.style.left = b.stn.x + "px";
                this.nep.style.top = b.stn.y + "px";
                this.nep.style.width = b.stn.width + "px"
            }
            if (this.jjd) {
                this.jxz(this.jjd, b.zcm)
            }
            if (this.cvu) {
                this.cvu.style.fontSize = b.jzy + "px";
                this.jxz(this.cvu, b.wlw)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.jxz = function (c, b) {
        if (c) {
            c.style.left = b.x + "px";
            c.style.top = b.y + "px";
            c.style.width = b.width + "px";
            c.style.height = b.height + "px"
        }
    };
    this.dno = function (d, c, b) {
        if (d && this.oln) {
            this.oln.innerHTML = d
        }
        if (c && this.nep) {
            this.nep.innerHTML = c.replace(/[\r]?\n/g, "")
        }
        if (b && this.cvu) {
            this.cvu.innerHTML = b
        }
        if (this.swa) {
            if (this.wvu >= 0) {
                clearTimeout(this.wvu);
                this.wvu = -1;
                this.swa.className = null
            }
            this.jdc = true;
            dac.khg.cfv();
            if (dac.khg.xvh === dac.wea.pjo) {
                this.swa.className = "slideInRightAnim"
            } else {
                this.swa.className = "slideInLeftAnim"
            }
        }
    };
    this.vin = function () {
        if (a.swa && a.jdc) {
            if (dac.khg.xvh === dac.wea.pjo) {
                a.swa.className = "slideOutRightAnim"
            } else {
                a.swa.className = "slideOutLeftAnim"
            }
            a.wvu = setTimeout(a.qbl, 800)
        }
    };
    this.nnj = function () {
        if (this.jdc) {
            return true
        }
        return false
    };
    this.qbl = function () {
        a.jdc = false;
        a.wvu = -1;
        dac.khg.cfv()
    }
}

function zmi() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.yhw = null;
    this.swa = null;
    this.oln = null;
    this.nep = null;
    this.exu = null;
    this.wvr = [];
    this.owv = 0;
    this.ety = [];
    this.qop = [];
    this.xen = 0;
    this.ghz = false;
    this.jdc = false;
    this.zky = function () {
        this.yhw = document.getElementById("messageOverlay");
        this.swa = document.getElementById("messagePanel");
        this.oln = document.getElementById("messageTitle");
        this.nep = document.getElementById("messageText");
        this.exu = document.getElementById("btne");
        if (this.exu) {
            this.exu.innerHTML = "\u00D7";
            this.exu.onclick = this.vin;
            this.exu.ontouchend = this.vin
        }
        for (var f = 0; f < 4; f++) {
            this.wvr[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.eda = function (f) {
        try {
            this.ety = f.wqi
        } catch (g) {
            console.error(g)
        }
    };
    this.sov = function (j) {
        try {
            if (this.swa) {
                dac.fip.jxz(this.swa, j.eqf)
            }
            if (this.oln) {
                this.oln.style.fontSize = j.hqm + "px";
                dac.fip.jxz(this.oln, j.waf)
            }
            if (this.nep) {
                this.nep.style.fontSize = j.fjp + "px";
                dac.fip.jxz(this.nep, j.kgw)
            }
            if (this.exu) {
                dac.fip.jxz(this.exu, j.lhd)
            }
            for (var g = 0, f = this.wvr.length; g < f; g++) {
                this.wvr[g].style.fontSize = j.gsh.fontSize + "px";
                this.wvr[g].style.top = j.ats.y + "px";
                this.wvr[g].style.height = j.ats.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.dno = function (j) {
        this.qop.length = 0;
        this.xen = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.qop[g] = j[g]
        }
        this.gzp(this.qop[this.xen])
    };
    this.vin = function () {
        if (b.swa) {
            b.jdc = false;
            b.swa.style.display = "none";
            b.yhw.style.display = "none";
            dac.khg.cfv();
            dac.khg.lkw = false
        }
    };
    this.gzp = function (l) {
        var n = this.qop.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.xmt === dac.hcf.tfm || l.xmt === dac.hcf.rgp) {
            this.owv = d;
            this.ghz = (l.DisplayType == dac.chu.zdn.usf) ? true : false
        } else {
            if (l.xmt === dac.hcf.gos || l.xmt === dac.hcf.oer || l.xmt === dac.hcf.bnj || l.xmt === dac.hcf.roulette.tts || l.xmt === dac.hcf.roulette.wqx) {
                this.owv = a;
                this.ghz = false
            } else {
                if (l.xmt === dac.hcf.oni || l.xmt === dac.hcf.xzc) {
                    this.owv = c;
                    this.ghz = false
                } else {
                    if (l.xmt === dac.hcf.iht || l.xmt === dac.hcf.mte || l.xmt === dac.hcf.izb) {
                        this.owv = e;
                        this.ghz = false
                    }
                }
            }
        }
        if (l.Title && this.oln) {
            this.oln.style.color = this.ety[this.owv];
            this.oln.innerHTML = l.Title
        }
        if (l.Text && this.nep) {
            this.nep.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.wvr[0].innerHTML = "\u2039";
            this.wvr[0].onclick = this.uyt;
            this.wvr[0].ontouchend = this.uyt;
            this.wvr[0].style.display = "inline-block";
            this.wvr[this.wvr.length - 1].innerHTML = "\u203A";
            this.wvr[this.wvr.length - 1].onclick = this.ics;
            this.wvr[this.wvr.length - 1].ontouchend = this.ics;
            this.wvr[this.wvr.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.wvr.length - 1 : this.wvr.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.wvr[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.wvr[g].innerHTML = dac.khg.language.xhl
                    } else {
                        if (j == "continue") {
                            this.wvr[g].innerHTML = dac.khg.language.hwj.replace(/ /g, "")
                        } else {
                            this.wvr[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.wvr[g].onclick = dac.khg.dyd;
                    this.wvr[g].ontouchend = dac.khg.dyd
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.xmt === dac.hcf.tfm) {
                            this.wvr[g].onclick = this.mty.bind(this, l.Buttons[k].Link);
                            this.wvr[g].ontouchend = this.mty.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.xmt === dac.hcf.rgp || l.xmt === dac.hcf.iht || l.xmt === dac.hcf.mte) {
                                this.wvr[g].onclick = this.cws;
                                this.wvr[g].ontouchend = this.cws
                            } else {
                                if (l.xmt === dac.hcf.oni || l.xmt === dac.hcf.xzc || l.xmt === dac.hcf.izb) {
                                    this.wvr[g].onclick = this.qhu;
                                    this.wvr[g].ontouchend = this.qhu
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.wvr[g].onclick = dac.khg.tyn;
                            this.wvr[g].ontouchend = dac.khg.tyn
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === dac.chu.bse.yfz) {
                                    this.wvr[g].onclick = this.tqu.bind(this, l.Buttons[k].Link);
                                    this.wvr[g].ontouchend = this.tqu.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === dac.chu.bse.tez) {
                                        this.wvr[g].onclick = this.mty.bind(this, l.Buttons[k].Link);
                                        this.wvr[g].ontouchend = this.mty.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === dac.chu.bse.epl) {
                                            this.wvr[g].onclick = this.ros.bind(this, l.Buttons[k].Link);
                                            this.wvr[g].ontouchend = this.ros.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.wvr[g].style.display = "inline-block"
            } else {
                this.wvr[g].style.display = "none"
            }
        }
        this.exu.style.display = (this.ghz) ? "inline-block" : "none";
        if (this.swa) {
            this.jdc = true;
            this.swa.style.display = "block";
            this.yhw.style.display = "block";
            dac.khg.cfv();
            dac.khg.lkw = true
        }
    };
    this.nnj = function () {
        if (this.jdc) {
            return true
        }
        return false
    };
    this.cws = function () {
        b.vin();
        dac.khg.kdt(dac.khg.state)
    };
    this.mty = function (f) {
        var g = null;
        if (f) {
            g = dac.fip.rtr("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function () {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        dac.khg.zdh({
            type: "link",
            sender: dac.khg.naq,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        b.vin();
        dac.khg.mbd()
    };
    this.ros = function (j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = dac.fip.rtr("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.wvr.length; g < f; g++) {
                b.wvr[g].disabled = true
            }
            k.onload = function () {
                b.vin();
                for (var m = 0, l = b.wvr.length; m < l; m++) {
                    b.wvr[m].disabled = false
                }
                dac.khg.mbd()
            };
            k.onerror = function () {
                console.error("Error on request!");
                for (var m = 0, l = b.wvr.length; m < l; m++) {
                    b.wvr[m].disabled = false
                }
            }
        }
        dac.khg.zdh({
            type: "link",
            sender: dac.khg.naq,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        k.send()
    };
    this.qhu = function () {
        window.location.reload()
    };
    this.tqu = function (f) {
        dac.khg.zdh({
            type: "link",
            sender: dac.khg.naq,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        window.location.href = f
    };
    this.uyt = function () {
        b.xen = (b.xen > 0) ? b.xen - 1 : b.qop.length - 1;
        b.gzp(b.qop[b.xen])
    };
    this.ics = function () {
        b.xen = (b.xen < b.qop.length - 1) ? b.xen + 1 : 0;
        b.gzp(b.qop[b.xen])
    }
}
dac.ewv = new Settings();
dac.fip = new yvp();

function kmj() {
    this.cvs = "";
    this.oeq = "";
    this.lwj = null;
    this.canvas = null;
    this.context2D = null;
    this.yis = null;
    this.zoc = null;
    this.qqf = null;
    this.lzp = null;
    this.afm = null;
    this.yuj = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.csl = 0;
    this.zbj = 0;
    this.ggc = false;
    this.width = 0;
    this.height = 0;
    this.guq = 0;
    this.ilk = 0;
    this.yyv = 1;
    this.adv = 1;
    this.srw = false;
    this.efn = false;
    this.style = null;
    this.wea = null;
    this.xvh = -1;
    this.shz = false;
    this.xre = false;
    this.ytd = false;
    this.mti = false;
    this.lkw = false;
    this.upy = false;
    this.pco = false;
    this.ede = "";
    this.jkm = "";
    this.frs = "";
    this.tme = "";
    this.tfj = "";
    this.icl = "";
    this.cya = "1_1_60";
    try {
        if (dac.ewv.value19) {
            this.ede = sessionStorage.sessionValue2;
            this.jkm = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.frs = sessionStorage.sessionValue2
            } else {
                this.ede = sessionStorage.sessionValue2;
                this.jkm = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.frs = sessionStorage.sessionValue2
                } else {
                    this.frs = ""
                }
            }
        }
    } catch (b) {}
    this.vjx = null;
    this.isd = null;
    this.xiq = false;
    this.bua = null;
    this.wrr = null;
    this.hed = null;
    this.eft = true;
    this.jcu = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.uao = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.uao = this.jcu.length - 1
                } else {
                    this.uao = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.uao = this.jcu.length - 1
        }
    } catch (b) {
        this.uao = 0
    }
    this.isc = 0;
    this.language = new oim();
    this.apl = 0;
    this.lxk = 1;
    this.mji = this.lxk;
    this.riv = [dac.icz.wem, dac.icz.zed, dac.icz.bpq];
    this.zej = (dac.fip.ryh()) ? 0 : this.riv.length - 1;
    try {
        if (localStorage.localValue1) {
            this.zej = Number(localStorage.localValue1);
            if (!dac.fip.ryh() && this.riv[this.zej] === dac.icz.wem) {
                this.zej = this.riv.length - 1
            }
        }
    } catch (b) {}
    this.aqu = false;
    this.naq = "";
    this.hbz = "";
    this.qpy = 0;
    this.state = 0;
    this.kex = false;
    this.ykm = 5000;
    this.bjg = 0;
    this.mzs = 0;
    this.xvj = 0;
    this.nlj = 0;
    this.fsd = false;
    this.byp = false;
    this.pip = false;
    this.bsx = null;
    this.vkh = 0;
    this.yyt = 0;
    this.xgc = 0;
    this.guy = -1;
    this.rlo = -1;
    this.bpo = 0;
    this.jof = null;
    this.inu = [];
    this.axi = [];
    this.hnw = false;
    this.bmu = 0;
    this.cxy = 0;
    this.hgi = false;

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
    this.zky = function (d) {
        this.zdh({
            type: "onAppFrameReady",
            sender: this.naq
        });
        dac.fip.prk();
        dac.fip.nsi();
        this.zih();
        if (!this.fsd) {
            this.gjs()
        }
        this.jjn(this.gnt(d.wea));
        this.lec();
        this.tad();
        this.rpc();
        this.jao();
        this.lqy();
        this.djw();
        this.cze();
        this.zau();
        this.ktb();
        this.psk();
        return this
    };
    this.rpc = function () {};
    this.zau = function () {
        try {
            if (dac.ewv.value64 && !this.pip) {
                this.bua = new qtx();
                this.bua.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.zih = function () {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && dac.ewv.value8) {
                sessionStorage.sessionValue5 = dac.ewv.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.icl = sessionStorage.sessionValue8;
                if (dac.ewv.value72) {
                    var n = dac.ewv.value72[this.icl];
                    if (dac.ewv.value21.e === true && n) {
                        dac.ewv.value21.s = n.s;
                        dac.ewv.value21.m = n.m;
                        dac.ewv.value21.ts = n.ts;
                        dac.ewv.value21.cs = n.cs
                    }
                    if (dac.ewv.value76 && dac.ewv.value76.f === true && n) {
                        dac.ewv.value76.s = n.s;
                        dac.ewv.value76.m = n.m;
                        dac.ewv.value76.ts = n.ts;
                        dac.ewv.value76.cs = n.cs
                    }
                }
            }
            if (this.zam()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.tfj = sessionStorage.sessionValue7
            }
            var r = a("fullscreen");
            if (r != "") {
                sessionStorage.sessionValue14 = r
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (dac.fip.hdk) ? dac.ewv.value51.m : dac.ewv.value51.d
            }
            var g = a("sessionTime");
            if (g != "") {
                sessionStorage.sessionValue15 = g
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = dac.ewv.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var o = a("realityCheckTime");
            if (o != "") {
                sessionStorage.sessionValue17 = o
            }
            if (dac.ewv.value39 > 0) {
                sessionStorage.sessionValue17 = dac.ewv.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var f = sessionStorage.sessionValue18.split(";");
                if (f.length == 2) {
                    this.bmu = Number(f[0]);
                    this.cxy = Number(f[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.cxy) {
                    this.cxy = Number(s);
                    this.bmu = new Date().getTime() - (this.cxy * 1000);
                    sessionStorage.sessionValue18 = this.bmu + ";" + this.cxy
                }
            }
            if (dac.ewv.value86 === true) {
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
            console.error(k.hcf)
        }
    };
    this.cze = function () {
        if (!(dac.fip.nnv == dac.os.smu && dac.fip.sjk == dac.xij.pje)) {
            document.ontouchstart = dac.khg.ose
        }
        if (dac.fip.sjk != dac.xij.vvw && dac.fip.sjk != dac.xij.pje) {
            document.ontouchmove = dac.khg.ggh;
            document.ontouchend = dac.khg.rqs
        }
        if (!dac.fip.vav) {
            document.onmousedown = dac.khg.vvi;
            document.onmouseup = dac.khg.mnh;
            document.onmousemove = dac.khg.ewb
        }
        document.onkeydown = dac.khg.mwj;
        document.onkeyup = dac.khg.dpo;
        document.oncontextmenu = dac.khg.wya;
        this.upy = this.acs();
        if (dac.fip.tcd() === false && dac.fip.nnv === dac.os.dbk && dac.fip.svb() === true && screen.width <= 414 && this.wsq()) {
            this.bpo = setInterval(this.but, 1000)
        }
    };
    this.ose = function (d) {
        dac.khg.nzi();
        dac.khg.jyz();
        dac.khg.yez(d)
    };
    this.rqs = function (d) {
        if (dac.khg.shz === true) {
            if (dac.khg.upy) {
                dac.khg.cmu()
            } else {
                dac.khg.vkf(d)
            }
        } else {
            if (dac.khg.acs()) {
                dac.khg.swi()
            }
        }
    };
    this.ggh = function (d) {
        dac.khg.nlw(d)
    };
    this.vvi = function (d) {
        window.focus();
        if (dac.khg.shz === true) {
            dac.khg.nzi();
            dac.khg.jyz();
            dac.khg.yez(d)
        } else {
            if (dac.khg.acs()) {
                dac.khg.swi()
            }
        }
    };
    this.mnh = function (d) {
        dac.khg.vkf(d)
    };
    this.ewb = function (d) {};
    this.mwj = function (d) {
        if ((d.keyCode == 122 && (dac.fip.nnv == dac.os.azc || dac.fip.nnv == dac.os.aeo)) || (d.keyCode == 70 && d.ctrlKey && dac.fip.nnv == dac.os.caj)) {
            return
        }
        dac.khg.nzi();
        dac.khg.jyz();
        dac.khg.tda(d)
    };
    this.dpo = function (d) {
        dac.khg.hkt(d)
    };
    this.wya = function () {
        return false
    };
    this.yez = function (d) {};
    this.vkf = function (d) {};
    this.tda = function (d) {};
    this.hkt = function (d) {};
    this.nlw = function (d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.zdh = function (d) {};
    this.bjt = function () {
        var f = dac.khg.hed.znq("topb"),
            e = dac.khg.hed.znq("settings"),
            d = dac.khg.hed.znq("topi"),
            g = dac.khg.hed.znq("gameb");
        if (dac.fip.sjk == dac.xij.vvw || dac.fip.sjk == dac.xij.hnu) {
            dac.khg.efn = (window.innerWidth == window.outerWidth)
        } else {
            if (dac.fip.sjk == dac.xij.syv || dac.fip.sjk == dac.xij.lnl) {
                dac.khg.efn = (window.innerHeight >= window.outerHeight)
            } else {
                if (dac.fip.sjk == dac.xij.zck) {
                    dac.khg.efn = (document.fullscreenElement) ? true : false
                } else {
                    if (dac.fip.hdk) {
                        if (dac.fip.sjk == dac.xij.sxp || dac.fip.sjk == dac.xij.rhz || dac.fip.sjk == dac.xij.eop) {
                            dac.khg.efn = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (dac.fip.sjk == dac.xij.pje) {
                                dac.khg.efn = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.tvl("fullscreen", dac.khg.efn)
        }
        if (f) {
            f.myd.mpx("fullscreen", "#tvl", [(dac.khg.efn) ? 1 : 0])
        }
        if (e) {
            e.myd.mpx("fullscreen", "#tvl", [(dac.khg.efn) ? 1 : 0])
        }
        if (g) {
            g.myd.mpx("fullscreen", "#tvl", [(dac.khg.efn) ? 1 : 0])
        }
        dac.khg.tck();
        dac.khg.ygq();
        dac.khg.iri();
        if (dac.fip.svb() === true && dac.fip.tcd() === false) {
            document.body.style.height = "5000px"
        }
        if (!dac.fip.tcd() && dac.fip.sjk === dac.xij.eop && dac.khg.zbj < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.zrc = function () {
        dac.khg.bjt();
        dac.khg.but()
    };
    this.but = function () {
        if (dac.fip.svb() === true && dac.fip.tcd() === false) {
            if (dac.khg.wsq() === true && dac.khg.mti === true) {
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
                            dac.khg.bjt();
                            window.ontouchmove = dac.khg.zrc
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = dac.khg.ose;
                        document.ontouchmove = dac.khg.ggh;
                        document.ontouchend = dac.khg.rqs;
                        if (window.ontouchmove != null) {
                            dac.khg.bjt();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.agl = function (g) {
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
                    dac.fip.jww(e, j, j)
                }
                f.innerHTML = dac.khg.language.fzs;
                l.className = "rotateAnim";
                k.style.display = "block";
                dac.khg.lkw = true
            } else {
                k.style.display = "none";
                l.className = null;
                dac.khg.lkw = false
            }
        }
    };
    this.ocp = function () {
        var d = dac.khg.hed.znq("settings");
        dac.khg.bjt();
        if (d) {
            d.myd.mpx("adjustment", "#tvl", [(dac.khg.xvh === dac.wea.rwv) ? 0 : 1]);
            d.pla()
        }
        if (dac.khg.aqu === true) {
            dac.khg.lkw = true;
            dac.khg.kxj(true);
            dac.khg.agl(true)
        } else {
            dac.khg.lkw = false;
            dac.khg.kxj((dac.khg.jcu[dac.khg.uao] === 0));
            dac.khg.agl(false)
        }
    };
    this.tck = function () {
        this.csl = window.innerWidth, this.zbj = window.innerHeight;
        this.ggc = false;
        if (dac.fip.tcd() == true && dac.ewv.value69 === true) {
            if (dac.fip.cfs() === true) {
                this.ggc = true;
                this.csl = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.zbj = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.csl > this.zbj) {
                    this.zbj *= 0.98
                }
            } else {
                if (dac.fip.svb() === true) {
                    this.ggc = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.csl = 1024;
                            this.zbj = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.csl = 736;
                                this.zbj = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.csl = 667;
                                    this.zbj = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.csl = 768;
                            this.zbj = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.csl = 414;
                                this.zbj = 628
                            } else {
                                if (screen.height === 667) {
                                    this.csl = 375;
                                    this.zbj = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.iri = function () {
        var g = 0,
            k = 0,
            f = 1,
            e = 1,
            j = this.csl,
            d = this.zbj;
        this.srw = (this.efn || j < this.width || d < this.height || this.wea.jmk);
        g = this.yip(this.srw);
        f = ((j - k) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.srw) {
            if (this.wea.ulr) {
                if (f > e) {
                    this.yyv = e;
                    this.adv = e
                } else {
                    this.yyv = f;
                    this.adv = f
                }
            } else {
                this.yyv = f;
                this.adv = e
            }
        } else {
            this.yyv = 1;
            this.adv = 1
        }
        dac.fip.jww(this.canvas, this.yyv, this.adv);
        if (this.yis != null) {
            dac.fip.jww(this.yis, this.yyv, this.adv, ((this.wea.yis.eqf.x) - ((this.wea.yis.eqf.x + this.wea.yis.jco) / 2 * (1 - this.yyv))), ((this.wea.yis.eqf.y) - ((this.wea.yis.eqf.y + this.wea.yis.jyt) / 2 * (1 - this.adv))))
        }
        if (this.qqf != null) {
            dac.fip.jww(this.qqf, this.yyv, this.adv)
        }
        if (this.srw) {
            this.offsetLeft = Math.floor((j - (this.canvas.width * this.yyv))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.adv))) / 2
        } else {
            this.offsetLeft = this.lwj.offsetLeft;
            this.offsetTop = this.lwj.offsetTop
        }
    };
    this.ygq = function () {
        if (this.ksw() === true) {
            var e = null;
            if (this.riv[this.zej] === dac.icz.wem) {
                if (window.orientation === -90) {
                    e = dac.wea.pjo
                } else {
                    e = dac.wea.rwv
                }
            } else {
                if (this.riv[this.zej] === dac.icz.zed) {
                    e = dac.wea.pjo
                } else {
                    if (this.riv[this.zej] === dac.icz.bpq) {
                        e = dac.wea.rwv
                    }
                }
            }
            this.aqu = (this.zbj > this.csl);
            this.jjn(e);
            this.tkq(false);
            if (this.mti === true) {
                this.pla()
            } else {
                this.hed.mpx("loading", "#pla")
            }
        } else {
            if (dac.fip.hdk) {
                var f = (this.csl > this.zbj) ? this.lxk : this.apl,
                    d = this.wea.vfk,
                    e = null;
                if (f != this.mji) {
                    this.mji = f;
                    if (this.fsd) {
                        e = (this.mji == this.lxk) ? dac.wea.xft : dac.wea.pxi
                    } else {
                        e = (this.mji == this.lxk) ? dac.ewv.value33 : dac.ewv.value32
                    }
                    this.jjn(e);
                    this.tkq((d != this.wea.vfk) || this.fsd);
                    if (this.mti === true) {
                        if (this.fsd && this.byp) {
                            this.ugm(this.ijf(this.language.ltj))
                        } else {
                            this.pla()
                        }
                    } else {
                        this.hed.mpx("loading", "#pla")
                    }
                }
            } else {
                if (!this.fsd) {
                    e = (this.efn) ? dac.ewv.value15 : dac.ewv.value14;
                    this.jjn(e);
                    this.tkq(false);
                    if (this.mti === true) {
                        this.pla()
                    } else {
                        this.hed.mpx("loading", "#pla")
                    }
                }
            }
        }
    };
    this.ksw = function () {
        return false
    };
    this.wsq = function () {
        return false
    };
    this.jjn = function (d) {};
    this.lec = function () {
        this.style = new ucj()
    };
    this.yip = function (d) {
        var e = 0;
        if (dac.fip.cfs() && window.innerWidth > window.innerHeight && d) {
            if (this.shz === true && document.body.style.backgroundColor !== this.style.bbh.backgroundColor) {
                document.body.style.backgroundColor = this.style.bbh.backgroundColor
            }
        }
        return e
    };
    this.esr = function () {
        if (dac.fip.cfs() && !dac.fip.tcd() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.xhw = function () {
        return false
    };
    this.jao = function () {
        if (dac.fip.vav) {
            this.wrr = new cec()
        } else {
            this.wrr = new rrp()
        }
        this.wrr.zky();
        this.wrr.way(this.cfc())
    };
    this.lqy = function () {
        this.hed = new rxh();
        this.hed.zky();
        this.hed.jqg("jackpots")
    };
    this.cfc = function () {
        var d = new njp();
        d.zky();
        return d
    };
    this.gjs = function () {
        this.bsx = new qza()
    };
    this.tad = function () {
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
                    for (var k = 0, g = dac.ewv.value5.length; k < g; k++) {
                        if (o[l] === dac.ewv.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(dac.ewv.value5[0])
                }
                dac.ewv.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    dac.ewv.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = dac.fip.ecr();
                if (this.vkv(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === dac.language.EN && this.vkv(dac.language.US)) {
                        sessionStorage.sessionValue1 = dac.language.US
                    } else {
                        if (q === dac.language.DE && this.vkv(dac.language.AT)) {
                            sessionStorage.sessionValue1 = dac.language.AT
                        } else {
                            if (q === dac.language.ES && this.vkv(dac.language.MX)) {
                                sessionStorage.sessionValue1 = dac.language.MX
                            } else {
                                if (q === dac.language.ES && this.vkv(dac.language.CO)) {
                                    sessionStorage.sessionValue1 = dac.language.CO
                                } else {
                                    if (q === dac.language.ES && this.vkv(dac.language.CL)) {
                                        sessionStorage.sessionValue1 = dac.language.CL
                                    } else {
                                        if (q === dac.language.ES && this.vkv(dac.language.VE)) {
                                            sessionStorage.sessionValue1 = dac.language.VE
                                        } else {
                                            if (q === dac.language.EN && this.vkv(dac.language.BR)) {
                                                sessionStorage.sessionValue1 = dac.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = dac.ewv.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.vkv(sessionStorage.sessionValue1)) {
                for (var l = 0, m = dac.ewv.value5.length; l < m; l++) {
                    if (dac.ewv.value5[l] == sessionStorage.sessionValue1) {
                        this.isc = l;
                        break
                    }
                }
                this.language = this.kuy(sessionStorage.sessionValue1)
            } else {
                this.isc = 0;
                this.language = this.kuy(dac.ewv.value5[this.isc]);
                sessionStorage.sessionValue1 = dac.ewv.value5[this.isc]
            }
        } catch (n) {
            this.isc = 0;
            this.language = this.kuy(dac.ewv.value5[this.isc]);
            console.error(n.hcf)
        }
    };
    this.ktb = function () {
        var d = (dac.ewv.value45 == dac.fzq.uwm) ? this.wea.fzq.khg : (dac.ewv.value45 == dac.fzq.hwf) ? this.wea.fzq.vsg : this.wea.fzq.hsp;
        this.lwj = document.getElementById("gameArea");
        if (this.ggc === false) {
            this.lwj.style.marginTop = (-d.eqf.height / 2) + "px";
            this.lwj.style.marginLeft = (-d.eqf.width / 2) + "px"
        } else {
            this.lwj.style.left = "0px";
            this.lwj.style.top = "0px";
            this.lwj.style.marginTop = ((window.innerHeight - d.eqf.height) / 2) + "px";
            this.lwj.style.marginLeft = ((window.innerWidth - d.eqf.width) / 2) + "px"
        }
        this.lwj.style.width = (d.eqf.width > window.innerWidth) ? window.innerWidth + "px" : d.eqf.width + "px";
        this.lwj.style.height = (d.eqf.height > window.innerHeight) ? window.innerHeight + "px" : d.eqf.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.eqf.width);
        this.canvas.height = Math.round(d.eqf.height);
        this.context2D = this.canvas.getContext("2d");
        this.qqf = document.getElementById("gameOverlay");
        if (this.qqf) {
            this.qqf.style.width = d.eqf.width + "px";
            this.qqf.style.height = d.eqf.height + "px"
        }
        this.mep(d)
    };
    this.mep = function (d) {
        var e = new rlq();
        e.zky(d.eqf, this.context2D);
        e.parent = this;
        e.vbg = (this.fsd) ? this.language.wju : this.language.acn;
        e.pjb = this.language.error;
        e.sov(d);
        e.eda(this.style.fzq);
        this.hed.hio("loading", e)
    };
    this.abp = function () {
        var d = new pqy();
        d.zky(this.wea.crk.eqf, null, this.context2D);
        d.parent = this;
        d.sov(this.wea.crk);
        d.eda(this.style.crk);
        if (sessionStorage.sessionValue15 == "true" && dac.ewv.value49) {
            d.crp("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || dac.ewv.value49) {
                d.crp("time", "", "--:--")
            }
        }
        if (this.zam()) {
            d.crp("freeplay", "", this.language.fqu)
        } else {
            d.crp("id", " ", "")
        }
        this.hed.hio("topi", d)
    };
    this.pbb = function () {
        var d = new kmq();
        d.zky(this.wea.jik.eqf, null, this.context2D);
        d.parent = this;
        d.sov(this.wea.jik);
        d.eda(this.style.jik, false);
        d.oac(false);
        this.hed.hio("topb", d)
    };
    this.qnb = function () {};
    this.izj = function () {
        var d = new ody();
        d.zky(this.wea.fdd.eqf, null, this.context2D);
        d.parent = this;
        d.ixf(this.wea.fdd);
        d.eda(this.style.fdd);
        d.oac(false);
        this.hed.hio("stats", d)
    };
    this.cyu = function () {
        this.lzp = new zmi();
        this.lzp.zky();
        this.lzp.eda(this.style.lzp);
        this.lzp.sov(this.wea.lzp)
    };
    this.izq = function () {
        this.afm = new aud();
        this.afm.zky();
        this.afm.eda(this.style.afm);
        this.afm.sov(this.wea.afm)
    };
    this.cfn = function () {
        if (this.ptg()) {
            this.yuj.mkp = document.getElementById("jurisdictionDiv");
            this.yuj.omy = document.getElementById("btnsp");
            this.yuj.tyk = document.getElementById("btnsl");
            this.yuj.ary = document.getElementById("btnst");
            if (this.yuj.omy) {
                this.yuj.omy.innerHTML = this.language.qqv;
                this.yuj.omy.onclick = this.vxe;
                this.yuj.omy.ontouchend = this.vxe
            }
            if (this.yuj.tyk) {
                this.yuj.tyk.innerHTML = this.language.ett;
                this.yuj.tyk.onclick = this.flz;
                this.yuj.tyk.ontouchend = this.flz
            }
            if (this.yuj.ary) {
                this.yuj.ary.innerHTML = this.language.nvs;
                this.yuj.ary.onclick = this.czf;
                this.yuj.ary.ontouchend = this.czf
            }
            this.ktd();
            this.cfv()
        }
    };
    this.woo = function (e) {
        var d = new vmb();
        d.zky(this.wea.fem.eqf, null, this.context2D);
        d.parent = this;
        d.hsn = true;
        if (e) {
            d.mff(e)
        }
        d.ixf(this.wea.fem);
        d.sii(this.language);
        d.eda(this.style.fem);
        d.sov(this.wea.fem);
        d.oac(false);
        this.hed.hio("autop", d)
    };
    this.eaw = function (d) {
        var e = new bxe();
        e.zky(this.wea.rdr.eqf, null, this.context2D);
        e.parent = this;
        if (d) {
            e.amx(d)
        }
        e.oac(false);
        this.hed.hio("settings", e)
    };
    this.tkq = function (d) {};
    this.hcv = function () {
        var d = this.hed.znq("stats");
        if (d) {
            d.cqz(this.wea.fdd.eqf);
            d.sov(this.wea.fdd)
        }
    };
    this.kho = function () {
        if (this.lzp) {
            this.lzp.sov(this.wea.lzp)
        }
    };
    this.ozv = function () {
        if (this.afm) {
            this.afm.sov(this.wea.afm)
        }
    };
    this.ktd = function () {
        var d = null,
            e = 0;
        if (this.yuj) {
            d = this.wea.cvi;
            if (this.yuj.mkp) {
                dac.fip.jxz(this.yuj.mkp, d.ien)
            }
            if (this.yuj.omy) {
                this.yuj.omy.style.fontSize = d.gsh.fontSize + "px";
                this.yuj.omy.style.textIndent = d.gsh.textIndent + "px";
                dac.fip.jxz(this.yuj.omy, d.izc)
            }
            if (this.yuj.tyk) {
                this.yuj.tyk.style.fontSize = d.gsh.fontSize + "px";
                this.yuj.tyk.style.textIndent = d.gsh.textIndent + "px";
                dac.fip.jxz(this.yuj.tyk, d.esz)
            }
            if (this.yuj.ary) {
                this.yuj.ary.style.fontSize = d.gsh.fontSize + "px";
                this.yuj.ary.style.textIndent = d.gsh.textIndent + "px";
                dac.fip.jxz(this.yuj.ary, d.thi)
            }
            if (this.yuj.mkp) {
                e = (d.ien.width - d.ien.height) / 2;
                if (this.xvh == dac.wea.pjo) {
                    this.yuj.mkp.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.yuj.mkp.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.mhc = function () {
        var d = this.hed.znq("autop");
        if (d) {
            d.cqz(this.wea.fem.eqf);
            d.sov(this.wea.fem)
        }
    };
    this.xhs = function () {
        var d = this.hed.znq("settings");
        if (d) {
            d.cqz(this.wea.rdr.eqf);
            d.sov(this.wea.rdr)
        }
    };
    this.ays = function () {
        var d = this.hed.znq("topi");
        if (d) {
            d.cqz(this.wea.crk.eqf);
            d.sov(this.wea.crk)
        }
    };
    this.tdy = function () {
        var d = this.hed.znq("topb");
        if (d) {
            d.cqz(this.wea.jik.eqf);
            d.sov(this.wea.jik)
        }
    };
    this.vvv = function () {
        var e = this.hed.znq("loading"),
            d = (dac.ewv.value45 == dac.fzq.uwm) ? this.wea.fzq.khg : (dac.ewv.value45 == dac.fzq.hwf) ? this.wea.fzq.vsg : this.wea.fzq.hsp;
        if (e) {
            this.canvas.width = 0;
            if (this.ggc === false) {
                this.lwj.style.marginTop = (-d.eqf.height / 2) + "px";
                this.lwj.style.marginLeft = (-d.eqf.width / 2) + "px"
            } else {
                this.lwj.style.left = "0px";
                this.lwj.style.top = "0px";
                this.lwj.style.marginTop = ((this.zbj - d.eqf.height) / 2) + "px";
                this.lwj.style.marginLeft = ((this.csl - d.eqf.width) / 2) + "px"
            }
            this.lwj.style.width = (d.eqf.width > this.csl) ? this.csl + "px" : d.eqf.width + "px";
            this.lwj.style.height = (d.eqf.height > this.zbj) ? this.zbj + "px" : d.eqf.height + "px";
            this.canvas.width = Math.round(d.eqf.width);
            this.canvas.height = Math.round(d.eqf.height);
            if (this.qqf) {
                this.qqf.style.width = d.eqf.width + "px";
                this.qqf.style.height = d.eqf.height + "px"
            }
            e.cqz(d.eqf);
            e.sov(d)
        }
    };
    this.djw = function () {
        if (dac.fip.hdk && !dac.fip.vav) {
            if (!this.wrr.mqb && dac.fip.sjk != dac.xij.ijb) {
                this.eft = false;
                this.uao = 0
            }
        }
    };
    this.gnt = function (d) {
        if (dac.fip.hdk) {
            if (!this.fsd) {
                return dac.wea.tsn
            } else {
                if (!this.pip) {
                    return dac.wea.xft
                }
            }
        }
        return d
    };
    this.tev = function () {
        var d = this.hed.znq("loading");
        this.bjt();
        if (d) {
            d.iyr = true
        }
        if ((dac.fip.sjk === dac.xij.sxp || dac.fip.sjk === dac.xij.lnl || dac.fip.sjk === dac.xij.aau) && dac.fip.nnv === dac.os.smu && dac.fip.qmx === true) {
            if (this.wrr.mqb === false || dac.fip.ryb() === false || dac.fip.mal() === false) {
                dac.ucb = dac.mfn.qgi
            }
        }
        if (dac.ucb == 0) {
            if (this.eft === true && dac.fip.kyi().length === 0) {
                this.eft = false
            }
            if (d) {
                if (dac.ewv.value45 === dac.fzq.hwf) {
                    d.start()
                } else {
                    if (dac.ewv.value45 === dac.fzq.von) {
                        d.jud()
                    }
                }
                d.pla(0)
            }
            this.xyd();
            if (this.eft === true) {
                this.cdp()
            }
            if (d && d.rob() && dac.ewv.value45 === dac.fzq.hwf) {
                d.ljp = dac.khg.wrr.start
            } else {
                this.wrr.start()
            }
        } else {
            if (d) {
                if (dac.ucb == dac.mfn.txv && dac.fip.sjk === dac.xij.eop) {
                    d.iok = this.language.eai;
                    d.pla(0)
                } else {
                    if (dac.ucb == dac.hcf.slb) {
                        d.iok = this.language.nif;
                        d.pla(0)
                    } else {
                        d.iok = this.language.azk;
                        if (dac.fip.nnv === dac.os.smu || dac.fip.nnv === dac.os.aeo) {
                            if (dac.ucb != dac.mfn.txv && sessionStorage.sessionValue1 === dac.language.TR) {
                                d.iok += "|Google Chrome" + this.language.ulm
                            } else {
                                if (dac.ucb != dac.mfn.txv && (sessionStorage.sessionValue1 === dac.language.GE || sessionStorage.sessionValue1 === dac.language.HU)) {
                                    d.iok += "|" + this.language.owy + " Google Chrome" + this.language.kfz
                                } else {
                                    d.iok += "|" + this.language.ulm + " Google Chrome"
                                }
                            }
                        } else {
                            if (dac.fip.nnv === dac.os.azc || dac.fip.nnv === dac.os.aeo) {
                                if (dac.ucb != dac.mfn.txv && sessionStorage.sessionValue1 === dac.language.TR) {
                                    d.iok += "|Google Chrome, Mozilla Firefox" + this.language.ulm
                                } else {
                                    if (dac.ucb != dac.mfn.txv && (sessionStorage.sessionValue1 === dac.language.GE || sessionStorage.sessionValue1 === dac.language.HU)) {
                                        d.iok += "|" + this.language.owy + " Google Chrome, Mozilla Firefox" + this.language.kfz
                                    } else {
                                        d.iok += "|" + this.language.ulm + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + dac.ucb);
                        d.pla(0)
                    }
                }
            }
        }
    };
    this.xyd = function () {};
    this.cdp = function () {};
    this.psk = function () {
        var e = this.cvs + this.wea.type + "/",
            d = this.hed.znq("loading");
        if (dac.ewv.value45 == dac.fzq.uwm) {
            e += "load.jpg"
        } else {
            if (dac.ewv.value45 == dac.fzq.hwf) {
                e += "load_amatic.png"
            } else {
                if (dac.ewv.value45 == dac.fzq.von) {
                    this.wrr.fow("splashanim", dac.ewv.value30 + "/basic/images/" + this.wea.type + "/loadanim.png");
                    e += "load_amanet.png"
                }
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.onw = true
            }
        }
        this.wrr.fow("splash", e);
        this.wrr.fxq()
    };
    this.tcy = function () {};
    this.vkv = function (e) {
        for (var d = 0; d < dac.ewv.value5.length; d++) {
            if (dac.ewv.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.ujk = function () {
        dac.khg.xre = true;
        if (!dac.khg.fsd) {
            dac.khg.wqg();
            if (dac.khg.aus()) {
                dac.khg.plp()
            }
        } else {
            dac.khg.jah()
        }
        dac.khg.connect()
    };
    this.wqg = function () {};
    this.jah = function () {};
    this.connect = function () {
        this.vjx.connect(this.naq, this.ede, this.jkm, this.frs, this.cya, this.tfj, this.icl)
    };
    this.fvy = function (d) {
        if (typeof d === "undefined") {
            dac.khg.vjx.fvy(0)
        } else {
            dac.khg.vjx.fvy(d)
        }
    };
    this.xjz = function (d) {
        this.mzs = 0;
        this.xvj = 0;
        this.nlj = d;
        clearInterval(this.vkh);
        this.vkh = setInterval(this.cht, 1000)
    };
    this.cht = function () {
        var d = dac.khg.hed.znq("loading");
        dac.khg.mzs++;
        dac.khg.xvj = Math.round(dac.ewv.value47 / 1000) - dac.khg.mzs;
        dac.khg.xvj = (dac.khg.xvj > 0) ? dac.khg.xvj : 0;
        if (!dac.khg.shz) {
            if (d) {
                d.iok = "Can not connect to game server!|Tries to connect: " + dac.khg.nlj + " (" + dac.khg.xvj + " sec)";
                d.pla(0)
            }
        }
    };
    this.beq = function () {
        return dac.ewv.value74
    };
    this.pla = function (d, g, e, f) {};
    this.inc = function () {
        return (this.mti === true && this.shz === true && this.aqu === false)
    };
    this.ugm = function (e) {
        var d = this.hed.znq("history");
        this.mti = true;
        if (this.shz) {
            if (this.wea.xns) {
                dac.fip.dml(this.context2D, this.wea.khg.eqf.x - this.wea.khg.dkv, this.wea.khg.eqf.y - this.wea.khg.dkv, this.wea.khg.eqf.width + 2 * this.wea.khg.dkv, this.wea.khg.eqf.height + 2 * this.wea.khg.dkv, "black", 1)
            }
            dac.fip.mxc(this.context2D, e, "white", this.wea.khg.eqf.x, this.wea.khg.eqf.y, this.wea.khg.eqf.width, this.wea.khg.eqf.height, "arial", 28, "bold");
            if (d) {
                d.pla()
            }
        }
    };
    this.tyn = function () {
        if (dac.khg.lzp) {
            dac.khg.lzp.vin()
        }
        dac.khg.nqt(false);
        dac.khg.kxp.hly(false);
        dac.khg.kxp.myd.mpx("exit", "#xgf", [true]);
        if (dac.fip.wml()) {
            dac.fip.fxt();
            setTimeout(dac.khg.bjt, 1400)
        }
        if (dac.ewv.value67 > 0) {
            dac.khg.fvy(dac.ewv.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                dac.khg.zdh({
                    type: "history",
                    sender: dac.khg.naq,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null") {
                    dac.khg.zdh({
                        type: "quit",
                        sender: dac.khg.naq,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                        window.parent.postMessage('CloseGame',"*");
                    }
                }
            }
        }
    };
    this.dyd = function () {
        clearTimeout(dac.khg.guy);
        dac.khg.nqt(false);
        if (dac.khg.kxp) {
            dac.khg.kxp.hly(false)
        }
        if (!dac.khg.fsd) {
            dac.khg.stop();
            if (dac.khg.kxp) {
                dac.khg.kxp.myd.mpx("info", "#lns", [dac.khg.language.msx]);
                dac.khg.pla()
            }
            if (dac.khg.ksw() === true && dac.fip.wml()) {
                dac.fip.fxt();
                setTimeout(dac.khg.bjt, 800);
                setTimeout(dac.khg.vjx.knp.close, 800)
            } else {
                dac.khg.vjx.knp.close()
            }
        } else {
            dac.khg.vjx.close()
        }
    };
    this.ova = function () {
        dac.khg.upy = true
    };
    this.cmu = function () {
        if (dac.fip.hdk == true) {
            if (dac.khg.upy == true) {
                dac.khg.upy = false;
                dac.fip.fxt();
                setTimeout(dac.khg.bjt, 1400)
            }
        } else {
            dac.fip.fxt();
            setTimeout(dac.khg.bjt, 1400)
        }
    };
    this.fxn = function () {
        var e = (dac.khg.ksw() === true) ? "smartphone" : "desktop",
            j = "en";
        if (sessionStorage.sessionValue1 == dac.language.ES || sessionStorage.sessionValue1 == dac.language.CO || sessionStorage.sessionValue1 == dac.language.CL || sessionStorage.sessionValue1 == dac.language.MX || sessionStorage.sessionValue1 == dac.language.VE) {
            j = "es"
        } else {
            if (sessionStorage.sessionValue1 == dac.language.RO) {
                j = "ro"
            } else {
                if (sessionStorage.sessionValue1 == dac.language.PT || sessionStorage.sessionValue1 == dac.language.BR) {
                    j = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == dac.language.HR) {
                        j = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == dac.language.DE) {
                            j = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == dac.language.SE) {
                                j = "se"
                            }
                        }
                    }
                }
            }
        }
        if (dac.khg.jxv != "") {
            var f = null,
                g = "",
                d = "";
            if (dac.khg.jxv != "") {
                g += "rtp=" + dac.khg.jxv
            }
            if (dac.khg.dgc != "") {
                g += (dac.khg.jxv != "") ? "&" : "";
                g += "maxwin=" + ((dac.khg.dgc == "0") ? "0" : dac.khg.ifb(Number(dac.khg.dgc) * dac.khg.fla()))
            }
            d = encodeURIComponent(g);
            f = window.open(dac.ewv.value30 + "/gamerules/" + j + "/" + e + "/" + dac.khg.naq.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = dac.ewv.value30 + "/gamerules/" + j + "/" + e + "/" + dac.khg.naq.toLowerCase() + ".html?" + d
            }
        }
    };
    this.uuf = function () {
        dac.khg.xiq = false;
        dac.khg.ogp();
        dac.khg.teb();
        dac.khg.lbo()
    };
    this.yma = function () {
        var d = dac.khg.hed.znq("stats");
        if (d) {
            d.tzn(true, true)
        }
        dac.khg.isd.close(true)
    };
    this.ceo = function () {
        var d = dac.khg.hed.znq("stats");
        dac.khg.stop();
        if (d && d.nnj()) {
            d.tzn(true, true)
        }
        dac.khg.vjx.knp.close();
        if (dac.khg.isd) {
            dac.khg.isd.close(false)
        }
    };
    this.sdt = function () {
        clearTimeout(dac.khg.guy);
        dac.khg.kxp.hly(false);
        dac.khg.stop();
        dac.khg.vjx.knp.fnn()
    };
    this.qgc = function () {
        if (dac.khg.byp) {
            return
        }
        var d = dac.khg.hed.znq("history");
        if (d) {
            d.hly(false)
        }
        dac.khg.stop();
        dac.khg.vjx.ihy(dac.khg.qpy)
    };
    this.kqy = function () {
        if (dac.khg.byp) {
            return
        }
        var d = dac.khg.hed.znq("history");
        if (d) {
            d.hly(false)
        }
        dac.khg.stop();
        dac.khg.vjx.gqs(dac.khg.qpy)
    };
    this.ftt = function () {
        var d = dac.khg.hed.znq("history");
        if (d) {
            d.hly(false)
        }
        dac.khg.stop();
        clearInterval(dac.khg.bpo);
        dac.khg.dbi();
        dac.khg.vjx.close()
    };
    this.ipk = function () {
        dac.khg.wrr.ulw("btn");
        dac.khg.wrr.dls("btn");
        dac.khg.lba()
    };
    this.cwc = function () {
        var f = dac.khg.hed.znq("topb"),
            e = dac.khg.hed.znq("settings"),
            g = dac.khg.hed.znq("gameb"),
            d = dac.khg.hed.znq("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (dac.khg.wrr.mqb === true) {
            dac.khg.uao = (dac.khg.uao === dac.khg.jcu.length - 1) ? 0 : dac.khg.uao + 1;
            dac.khg.det(dac.khg.jcu[dac.khg.uao])
        } else {
            dac.khg.uao = (dac.khg.uao === dac.khg.jcu.length - 1) ? 0 : dac.khg.jcu.length - 1;
            dac.khg.kxj((dac.khg.jcu[dac.khg.uao] === 0))
        }
        sessionStorage.sessionValue6 = dac.khg.uao;
        if (dac.khg.jcu[dac.khg.uao] > 0) {
            dac.khg.wrr.dls("audioon")
        }
        if (d) {
            d.xdt("audio", dac.khg.jcu[dac.khg.uao])
        }
        if (f) {
            f.myd.mpx("audio", "#tvl", [dac.khg.uao])
        }
        if (e) {
            e.myd.mpx("audio", "#tvl", [dac.khg.uao])
        }
        if (g) {
            g.myd.mpx("audio", "#tvl", [dac.khg.uao])
        }
        dac.khg.pla()
    };
    this.swi = function () {};
    this.kkx = function () {
        var d = dac.khg.hed.znq("settings");
        if (d) {
            if (d.nnj()) {
                dac.khg.gix()
            } else {
                dac.khg.nfz()
            }
            dac.khg.wrr.dls("btn");
            if (dac.khg.wea.awz === false) {
                dac.khg.kxp.myd.mpx("setting", "#ixm", [d.nnj()])
            }
        }
    };
    this.pbn = function () {
        var d = dac.khg.hed.znq("settings"),
            e = "";
        dac.khg.zej = (dac.khg.zej < dac.khg.riv.length - 1) ? dac.khg.zej + 1 : (dac.fip.ryh()) ? 0 : 1;
        localStorage.localValue1 = dac.khg.zej;
        dac.khg.bjt();
        if (d) {
            d.myd.mpx("adjustment", "#tvl", [(dac.khg.xvh === dac.wea.rwv) ? 0 : 1]);
            if (dac.khg.riv[dac.khg.zej] === dac.icz.zed) {
                e = dac.khg.language.left
            } else {
                if (dac.khg.riv[dac.khg.zej] === dac.icz.bpq) {
                    e = dac.khg.language.dva
                } else {
                    if (dac.khg.riv[dac.khg.zej] === dac.icz.wem) {
                        e = dac.khg.language.zqq
                    }
                }
            }
            d.myd.mpx("adjustment", "#pjk", [e])
        }
    };
    this.vxe = function () {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.flz = function () {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.czf = function () {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.lxo = function (e, d) {
        this.kxp.myd.mpx("creditd", "#pjk", [this.ifb(e), d])
    };
    this.ueh = function (e, d) {
        if (e > 0) {
            this.kxp.myd.mpx("betd", "#pjk", [this.ifb(e), d])
        } else {
            this.kxp.myd.mpx("betd", "#pjk", ["", d])
        }
    };
    this.gow = function (e) {
        var d = this.hed.znq("topi");
        this.qpy = e;
        if (d) {
            d.dlk("id", (e > 0) ? e : "")
        }
    };
    this.coq = function () {
        var e = "",
            d = dac.khg.hed.znq("topi");
        if (dac.ewv.value49) {
            e += dac.khg.wmz()
        }
        if (dac.ewv.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += dac.khg.qgj()
        }
        if (dac.ewv.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.dlk("time", e)
        }
    };
    this.qgj = function () {
        return this.getTime(new Date().getTime() - this.mim)
    };
    this.wmz = function () {
        var d = new Date();
        return this.wjb(d.getHours()) + ":" + this.wjb(d.getMinutes())
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
        return this.wjb(d) + ":" + this.wjb(f)
    };
    this.wjb = function (d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.csv = function () {
        if (sessionStorage.sessionValue15 == "true" || dac.ewv.value49) {
            if (dac.ewv.value49) {
                this.wmz()
            }
            this.mim = (this.bmu > 0) ? this.bmu : new Date().getTime();
            this.coq();
            this.yyt = setInterval(this.coq, 1000)
        }
    };
    this.zgy = function () {
        clearInterval(this.yyt)
    };
    this.jme = function (d) {
        this.mim -= d
    };
    this.cnh = function (d, f) {
        var e = this.hed.znq("loading");
        if (e && e.iok == null) {
            if (f && f !== "") {
                e.pjb = f
            } else {
                e.pjb = this.language.error
            }
            e.iok = d;
            e.pla(this.wrr.djh())
        }
    };
    this.nfz = function () {};
    this.gix = function () {};
    this.dkr = function () {};
    this.xbf = function () {};
    this.lba = function () {
        var g = false,
            j = this.hed.znq("topb"),
            f = this.hed.znq("settings"),
            k = this.hed.znq("gameb"),
            d = this.hed.znq("topi");
        this.isc = (this.isc + 1 == dac.ewv.value5.length) ? 0 : this.isc + 1;
        sessionStorage.sessionValue1 = dac.ewv.value5[this.isc];
        this.language = this.kuy(dac.ewv.value5[this.isc]);
        this.sii();
        if (j && g == false) {
            var e = j.myd.znq("language");
            if (e) {
                e.xxy(this.eht(dac.ewv.value5[this.isc]));
                g = true
            }
            j.kxc(true)
        }
        if (f && g == false) {
            var e = f.myd.znq("language");
            if (e) {
                e.xxy(this.eht(dac.ewv.value5[this.isc]));
                g = true
            }
        }
        if (k && g == false) {
            var e = k.myd.znq("language");
            if (e) {
                e.xxy(this.eht(dac.ewv.value5[this.isc]));
                g = true
            }
        }
        if (g == false) {
            var e = this.kxp.myd.znq("lang");
            if (e) {
                e.via = this.eht(dac.ewv.value5[this.isc])
            }
        }
        if (d) {
            d.tvl("language", sessionStorage.sessionValue1)
        }
        this.pla()
    };
    this.sii = function () {};
    this.kuy = function (d) {
        if (d == dac.language.EN || d == dac.language.US) {
            return new vxq()
        } else {
            if (d == dac.language.ES || d == dac.language.CO || d == dac.language.MX || d == dac.language.CL || d == dac.language.VE) {
                return new oeb()
            } else {
                if (d == dac.language.DE || d == dac.language.AT) {
                    return new nxk()
                } else {
                    if (d == dac.language.PT || d == dac.language.BR) {
                        return new dbj()
                    } else {
                        if (d == dac.language.RU) {
                            return new myx()
                        } else {
                            if (d == dac.language.EE) {
                                return new tvt()
                            } else {
                                if (d == dac.language.TR) {
                                    return new ozy()
                                } else {
                                    if (d == dac.language.CZ) {
                                        return new mmv()
                                    } else {
                                        if (d == dac.language.GR) {
                                            return new wbh()
                                        } else {
                                            if (d == dac.language.BG) {
                                                return new jhi()
                                            } else {
                                                if (d == dac.language.GE) {
                                                    return new kmp()
                                                } else {
                                                    if (d == dac.language.HU) {
                                                        return new tsw()
                                                    } else {
                                                        if (d == dac.language.RO) {
                                                            return new juk()
                                                        } else {
                                                            if (d == dac.language.FR) {
                                                                return new skg()
                                                            } else {
                                                                if (d == dac.language.HR) {
                                                                    return new hhb()
                                                                } else {
                                                                    if (d == dac.language.IT) {
                                                                        return new sbz()
                                                                    } else {
                                                                        if (d == dac.language.SE) {
                                                                            return new rrf()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.eht = function (d) {
        if (d) {
            return this.wrr.ark(d)
        }
        return null
    };
    this.quy = function () {
        this.wrr.teu()
    };
    this.dbi = function () {};
    this.kxj = function (d) {
        this.wrr.jdu(d)
    };
    this.det = function (d) {
        this.wrr.cdv(d)
    };
    this.kpm = function () {
        this.qnb();
        var d = this.hed.znq("history");
        this.shz = true;
        this.byp = true;
        if (d) {
            d.san(true)
        }
        this.ugm(this.ijf(this.language.ltj))
    };
    this.kkd = function () {
        loadGame("hist_" + dac.khg.naq.toLowerCase(), dac.ewv.value30 + "/" + dac.khg.naq.toLowerCase() + "/src/hist_" + dac.khg.naq.toLowerCase(), "UTF-8");
        removeGame(dac.khg.naq.toLowerCase(), dac.ewv.value30 + "/" + dac.khg.naq.toLowerCase() + "/src/" + dac.khg.naq.toLowerCase())
    };
    this.ybb = function () {
        var d = "./history_" + this.naq.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.xrz = function () {
        var d = null;
        if (dac.khg.pip) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            dac.khg.zdh({
                type: "quit",
                sender: dac.khg.naq,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            dac.khg.axa();
            if (d !== "(api)") {
                window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(dac.khg.naq.toLowerCase(), dac.ewv.value30 + "/" + dac.khg.naq.toLowerCase() + "/src/" + dac.khg.naq.toLowerCase());
            removeGame("hist_" + dac.khg.naq.toLowerCase(), dac.ewv.value30 + "/" + dac.khg.naq.toLowerCase() + "/src/hist_" + dac.khg.naq.toLowerCase());
            loadMenu("menu", dac.ewv.value1001, "UTF-8", true)
        }
    };
    this.wog = function () {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            dac.khg.zdh({
                type: "quit",
                sender: dac.khg.naq,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            d = decodeURIComponent(sessionStorage.sessionValue5);
            dac.khg.axa();
            if (d !== "(api)") {
       window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(dac.khg.naq.toLowerCase(), dac.ewv.value30 + "/" + dac.khg.naq.toLowerCase() + "/src/" + dac.khg.naq.toLowerCase());
            removeGame("hist_" + dac.khg.naq.toLowerCase(), dac.ewv.value30 + "/" + dac.khg.naq.toLowerCase() + "/src/hist_" + dac.khg.naq.toLowerCase());
            loadMenu("menu", dac.ewv.value1001, "UTF-8", false)
        }
    };
    this.axa = function () {
        if (!dac.khg.fsd && dac.ewv.value83) {
            sessionStorage.clear()
        }
    };
    this.snk = function (f) {
        var g = null;
        if (this.lzp) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.xmt !== dac.hcf.tfm) {
                    if (g.xmt === dac.hcf.gos || g.xmt === dac.hcf.bnj) {
                        g.Title = this.language.hox;
                        g.Text = (g.xmt === dac.hcf.gos) ? this.language.obl : this.language.nzk;
                        g.Buttons = [{
                            Text: this.language.xhl,
                            Action: "quit"
                        }]
                    } else {
                        if (g.xmt === dac.hcf.oer) {
                            g.Title = this.language.nup;
                            g.Text = this.language.xjg + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.ssv;
                                g.Buttons = [{
                                    Text: this.ijf(this.language.zmo),
                                    Action: "history"
                                }, {
                                    Text: this.language.xhl,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.xhl,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.xmt === dac.hcf.iht || g.xmt === dac.hcf.mte || g.xmt === dac.hcf.izb) {
                                g.Title = this.xiz;
                                if (g.xmt === dac.hcf.iht) {
                                    g.Text = this.language.gdh + " " + this.opy + " " + this.language.bhy + "\n\n" + this.language.utr
                                } else {
                                    if (g.xmt === dac.hcf.mte) {
                                        g.Text = this.language.wjs + " " + (this.opy - this.bzy) + " " + this.language.irc + "\n\n" + this.language.utr
                                    } else {
                                        if (g.xmt === dac.hcf.izb) {
                                            g.Text = this.language.cpw + ": " + this.bzy + "\n" + this.language.bjl + ": " + this.eik(this.hjv)
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
                    if (g.xmt === dac.hcf.oni || g.xmt === dac.hcf.xzc) {
                        g.Title = this.language.jtk;
                        g.Text = this.language.wsr;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.xmt === dac.hcf.rgp) {
                            g.Title = this.language.uck;
                            g.Text = this.language.mka;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.xmt === dac.hcf.roulette.tts || g.xmt === dac.hcf.roulette.wqx) {
                                g.Title = this.language.hox;
                                g.Text = (g.xmt === dac.hcf.roulette.tts) ? this.language.enc : this.language.dqa;
                                g.Buttons = [{
                                    Text: this.language.xhl,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.lzp.dno(f)
        }
    };
    this.stop = function () {
        this.zgy();
        this.civ();
        this.jru();
        clearTimeout(this.xgc);
        if (!this.fsd) {
            clearInterval(this.bpo)
        }
        this.hed.mpx("autop", "#stop");
        this.hed.mpx("settings", "#stop");
        this.hed.mpx("topb", "#stop")
    };
    this.zam = function () {
        var d = false;
        if (this.tme.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.ede == "freeplay" && this.jkm == "freeplay") {
                d = true
            } else {
                if (this.frs && (this.frs == "b71d982ffcbe56eb8cd11fa05963bbee" || this.frs.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (dac.ewv.value68 != null && this.icl.toLowerCase() === dac.ewv.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            dac.ewv.value21.e = false;
            if (dac.ewv.value76) {
                dac.ewv.value76.f = false
            }
        }
        return d
    };
    this.gdf = function () {
        return (dac.ewv.value65 > 0)
    };
    this.acs = function () {
        return (((dac.fip.nnv === dac.os.dbk && dac.fip.utf() === true) || dac.fip.nnv === dac.os.smu) && this.fsd === false)
    };
    this.kcw = function () {
        return false
    };
    this.gyj = function () {
        if (dac.khg.gdf() && dac.khg.kcw()) {
            clearTimeout(dac.khg.guy);
            dac.khg.guy = setTimeout(dac.khg.dyd, dac.ewv.value65)
        }
    };
    this.nzi = function () {
        if (dac.khg.gdf() && dac.khg.guy >= 0) {
            if (dac.khg.kcw()) {
                clearTimeout(dac.khg.guy);
                dac.khg.guy = setTimeout(dac.khg.dyd, dac.ewv.value65)
            } else {
                clearTimeout(dac.khg.guy);
                dac.khg.guy = -1
            }
        }
    };
    this.civ = function () {
        if (dac.khg.gdf()) {
            clearTimeout(dac.khg.guy);
            dac.khg.guy = -1
        }
    };
    this.wys = function () {
        return false
    };
    this.enz = function () {
        return false
    };
    this.ddc = function () {
        if (dac.khg.wys() && dac.khg.enz() && dac.khg.rlo < 0) {
            clearTimeout(dac.khg.rlo);
            dac.khg.rlo = setTimeout(dac.khg.ksl, dac.khg.ykm)
        }
    };
    this.jyz = function () {
        if (dac.khg.wys() && dac.khg.rlo >= 0) {
            if (dac.khg.enz()) {
                clearTimeout(dac.khg.rlo);
                dac.khg.rlo = setTimeout(dac.khg.ksl, dac.khg.ykm)
            } else {
                clearTimeout(dac.khg.rlo);
                dac.khg.rlo = -1
            }
        }
    };
    this.jru = function () {
        if (dac.khg.wys()) {
            clearTimeout(dac.khg.rlo);
            dac.khg.rlo = -1
        }
    };
    this.ksl = function () {};
    this.bag = function () {};
    this.agm = function (f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.cya.replace(/_*/g, ""));
        if (e > d) {
            this.cya = f
        }
    };
    this.nqt = function (g) {
        var e = (g && !this.lyb),
            f = this.hed.znq("topb"),
            d = this.hed.znq("topi");
        if (d) {
            d.xgf(e)
        }
        if (f) {
            f.xgf(e);
            f.hly(e)
        }
    };
    this.ask = function (g) {
        var e = (g && !this.lyb),
            f = this.hed.znq("topb"),
            d = this.hed.znq("topi");
        if (d) {
            d.xgf(e)
        }
        if (f) {
            f.xgf(e);
            f.mcy(e)
        }
    };
    this.zar = function (g) {
        var e = (g && !this.lyb),
            f = this.hed.znq("topb"),
            d = this.hed.znq("topi");
        if (d) {
            d.xgf(e)
        }
        if (f) {
            f.xgf(e);
            f.sha(e)
        }
    };
    this.vbm = function () {
        var d = this.hed.znq("topb");
        if (d && !d.nnj()) {
            this.wrr.ulw("panel_in");
            this.wrr.dls("panel_in");
            d.dno()
        }
    };
    this.ogp = function (d) {
        var e = this.hed.znq("topb");
        if (e && e.nnj()) {
            this.wrr.ulw("panel_out");
            this.wrr.dls("panel_out");
            if (d) {
                e.zvi = d
            }
            e.vin()
        }
    };
    this.eik = function (f) {
        if (this.bjg > 0) {
            return (f * this.bjg).toFixed(0).toString()
        } else {
            if (dac.ewv.value21.e == false || this.pip == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (dac.ewv.value21.m != 1) {
                    e = f * dac.ewv.value21.m;
                    var g = dac.ewv.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = dac.ewv.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.xki(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.ifb = function (f) {
        if (this.bjg > 0) {
            var e = (f * this.bjg).toFixed(0).toString();
            if (dac.ewv.value21.e == true && dac.ewv.value21.m == 1 && dac.ewv.value21.s && this.pip == false) {
                e = dac.ewv.value21.s + " " + e
            }
            return e
        } else {
            if (dac.ewv.value21.e == false || this.pip == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (dac.ewv.value21.m != 1) {
                    e = f * dac.ewv.value21.m;
                    var g = dac.ewv.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = dac.ewv.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.xki(e, (d == 0) ? 0 : d + 1);
                if (dac.ewv.value21.s) {
                    e = dac.ewv.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.xki = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (dac.ewv.value21.cs != null) {
                l = l.replace(/\./, dac.ewv.value21.cs)
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
                    if (dac.ewv.value21.ts != null) {
                        e += dac.ewv.value21.ts
                    }
                }
            }
            if (dac.ewv.value21.cs != null) {
                f = f.replace(/\./, dac.ewv.value21.cs)
            }
            return e + f
        }
    };
    this.ebj = function (f) {
        if (this.bjg > 0) {
            return (f * this.bjg).toFixed(0).toString()
        } else {
            if (dac.ewv.value76.f == false || this.pip == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (dac.ewv.value76.m != 1) {
                    e = f * dac.ewv.value76.m;
                    var g = dac.ewv.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = dac.ewv.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.rok(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.jvz = function (f) {
        if (this.bjg > 0) {
            var e = (f * this.bjg).toFixed(0).toString();
            if (dac.ewv.value76.f == true && dac.ewv.value76.m == 1 && dac.ewv.value76.s && this.pip == false) {
                e = dac.ewv.value76.s + " " + e
            }
            return e
        } else {
            if (dac.ewv.value76.f == false || this.pip == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (dac.ewv.value76.m != 1) {
                    e = f * dac.ewv.value76.m;
                    var g = dac.ewv.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = dac.ewv.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.rok(e, (d == 0) ? 0 : d + 1);
                if (dac.ewv.value76.s) {
                    e = dac.ewv.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.rok = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (dac.ewv.value76.cs != null) {
                l = l.replace(/\./, dac.ewv.value76.cs)
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
                    if (dac.ewv.value76.ts != null) {
                        e += dac.ewv.value76.ts
                    }
                }
            }
            if (dac.ewv.value76.cs != null) {
                f = f.replace(/\./, dac.ewv.value76.cs)
            }
            return e + f
        }
    };
    this.ijf = function (d) {
        if (d && sessionStorage.sessionValue1 !== dac.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.khj = function () {
        for (var e = 0, d = this.vjx.knp.ril.length; e < d; e++) {
            this.hed.hio(this.vjx.knp.ril[e].rwu, this.kbs(this.vjx.knp.ril[e], this.wea.jof.eqf[this.vjx.knp.ril[e].eqf], this.wea.jof.display, this.style.jof.zzw[this.vjx.knp.ril[e].eqf], null), ["jackpots"])
        }
        this.hed.hio("jwp", this.kbs(null, this.wea.jof.cmt.eqf, this.wea.jof.cmt, this.style.jof.cmt, this.wrr.ark("jackpot")));
        this.hed.mpx("jwp", "#oac", [false]);
        if (this.rko()) {
            this.hed.hio("mjwp", this.cmc(this.wea.jof.xxv.eqf, this.wea.jof.xxv, this.style.jof.xxv, this.wrr.ark("mj_bg"), this.wrr.ark("mj_font"), this.wrr.ark("mj_label"), [this.wrr.ark("mj_0"), this.wrr.ark("mj_1"), this.wrr.ark("mj_2"), this.wrr.ark("mj_3"), this.wrr.ark("mj_4"), this.wrr.ark("mj_5")]));
            this.hed.mpx("mjwp", "#oac", [false])
        }
    };
    this.tpy = function () {
        var e = this.hed.xtb("jackpots"),
            f = this.hed.znq("jwp"),
            j = this.hed.znq("mjwp");
        for (var g = 0, d = e.length; g < d; g++) {
            e[g].cqz(this.wea.jof.eqf[this.vjx.knp.ril[g].eqf]);
            e[g].sov(this.wea.jof.display)
        }
        if (f) {
            f.cqz(this.wea.jof.cmt.eqf);
            f.sov(this.wea.jof.cmt)
        }
        if (j) {
            j.cqz(this.wea.jof.xxv.eqf);
            j.sov(this.wea.jof.xxv)
        }
    };
    this.kbs = function (f, k, j, g, d) {
        var e = new ewd();
        e.zky(k, null, this.context2D);
        e.parent = this;
        e.via = d;
        e.eda(g);
        e.sov(j);
        if (f) {
            e.ivd(f.xfh);
            e.ohc(f.value)
        }
        return e
    };
    this.cmc = function (k, j, g, l, m, f, e) {
        var d = new rcv();
        d.zky(k, null, this.context2D);
        d.parent = this;
        d.llh = l;
        d.yon = m;
        d.aiq = f;
        d.gpe = e;
        d.eda(g);
        d.sov(j);
        return d
    };
    this.kfv = function (f) {
        if (this.qqe() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.hed.mpx(f[e].rwu, "#ohc", [f[e].value])
            }
            this.pla()
        }
    };
    this.hpo = function (d) {
        if (this.qqe() === true) {
            this.jof = {
                rwu: d.rwu,
                value: d.value,
                dzc: d.dzc
            }
        }
    };
    this.sei = function () {
        this.jof = null
    };
    this.mkz = function () {
        return false
    };
    this.rko = function () {
        return false
    };
    this.qqe = function () {
        return (!this.fsd && this.vjx.knp.ril.length > 0 && this.mkz())
    };
    this.qsg = function () {
        return (this.jof != null)
    };
    this.ptg = function () {
        return (dac.ewv.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.kzo = function () {
        if (this.oil() && this.mrf()) {
            this.vkt()
        }
    };
    this.mrf = function () {
        return false
    };
    this.oil = function () {
        if (this.fsd) {
            return false
        }
        return (this.vjx.knp.xlg.length + this.vjx.knp.ezz.length > 0)
    };
    this.vkt = function () {
        var g = null,
            e = this.vjx.knp.xlg.length,
            d = this.vjx.knp.ezz.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.vjx.knp.xlg.splice(f, 1)[0];
                g.xmt = dac.hcf.tfm;
                this.axi.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.vjx.knp.ezz.splice(f, 1)[0];
                g.xmt = dac.hcf.tfm;
                this.axi.push(g)
            }
            if (this.lzp && !this.lzp.nnj()) {
                this.mbd()
            }
        }
    };
    this.mbd = function () {
        var d = null;
        if (this.axi.length > 0) {
            d = this.axi.shift();
            this.snk([d])
        }
    };
    this.pnw = function () {
        if (dac.khg.inu.length > 0) {
            dac.khg.snk(dac.khg.inu)
        }
    };
    this.inz = function () {
        this.axi.length = 0
    };
    this.gwt = function () {
        this.inu.length = 0;
        if (this.afm) {
            this.afm.vin()
        }
    };
    this.bfl = function () {
        var f = null,
            d = this.vjx.knp.inu.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.vjx.knp.inu.splice(e, 1)[0];
                f.xmt = dac.hcf.tfm;
                this.inu.push(f)
            }
            if (this.afm) {
                this.afm.dno(this.inu[0].Title, this.inu[0].Text, this.inu.length)
            }
        }
    };
    this.cfv = function () {
        var d = false;
        if (this.lzp && this.lzp.nnj()) {
            d = true
        }
        if (this.afm && this.afm.nnj()) {
            d = true
        }
        if (this.ptg()) {
            d = true
        }
        if (this.qqf) {
            this.qqf.style.display = (d) ? "block" : "none"
        }
    };
    this.mqd = function () {
        this.nqt(false);
        this.kxp.hly(false);
        this.kxp.myd.mpx("info", "#zfr");
        this.snk([{
            xmt: dac.hcf.oer
        }])
    };
    this.cdy = function () {
        dac.khg.hnw = true
    };
    this.plp = function () {
        this.isd = new xoi().zky(this, dac.ewv.value6)
    };
    this.ehi = function () {
        if (this.isd) {
            this.isd.connect(this.naq, this.ede, this.jkm, this.frs, this.cya, true)
        }
    };
    this.lbo = function () {
        if (dac.khg.isd) {
            dac.khg.isd.connect(dac.khg.naq, dac.khg.ede, dac.khg.jkm, dac.khg.frs, dac.khg.cya, false)
        }
    };
    this.teb = function () {};
    this.iaa = function () {};
    this.qmz = function (d) {
        if (!this.zam() && !this.fsd) {
            clearTimeout(this.xgc);
            if (this.aus()) {
                this.xgc = setTimeout(this.tnu, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.xgc = setTimeout(this.cdy, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.tnu = function () {
        dac.khg.xiq = true
    };
    this.aus = function () {
        return dac.ewv.value36 || dac.ewv.value37
    }
}

function bhs() {
    this.zky = function () {
        this.wld("btn", this.czt);
        this.wld("gamble_on", this.czt);
        this.wld("gamble_off", this.czt);
        this.wld("panel_in", this.czt);
        this.wld("panel_out", this.czt);
        this.wld("audioon", this.czt);
        for (var a = 0; a < 12; a++) {
            this.wld("step" + a, this.czt)
        }
        this.wld("maxstep", this.czt);
        this.wld("start", 0.2);
        this.wld("gambleprop", this.yjd);
        this.wld("freespinstart", 0.5)
    }
}
bhs.prototype = new njp;

function eaf() {
    this.kjr = {
        nhn: 84,
        npj: -1,
        value: "T",
        owg: null
    };
    this.wzr = {
        nhn: 82,
        npj: -1,
        value: "R",
        owg: null
    };
    this.duv = {
        nhn: 80,
        npj: -1,
        value: "P",
        owg: null
    };
    this.xvl = {
        nhn: 77,
        npj: -1,
        value: "M",
        owg: null
    };
    this.start = {
        nhn: 32,
        npj: -1,
        value: "SPACE",
        owg: null
    };
    this.lyb = {
        nhn: 16,
        npj: -1,
        value: "SHIFT",
        owg: null
    };
    this.pcc = {
        nhn: 38,
        npj: -1,
        value: "\u25B2",
        owg: null
    };
    this.ykr = {
        nhn: 40,
        npj: -1,
        value: "\u25BC",
        owg: null
    };
    this.ncp = {
        nhn: 39,
        npj: -1,
        value: "\u25B6",
        owg: null
    };
    this.dtk = {
        nhn: 37,
        npj: -1,
        value: "\u25C0",
        owg: null
    };
    this.jzz = {
        nhn: 71,
        npj: -1,
        value: "G",
        owg: null
    };
    this.zbs = {
        nhn: 27,
        npj: -1,
        value: "ESC",
        owg: null
    };
    this.language = {
        nhn: 76,
        npj: -1,
        value: "L",
        owg: null
    };
    this.wel = {
        nhn: 13,
        npj: -1,
        value: "ENTER",
        owg: null
    };
    this.hbr = {
        nhn: 27,
        npj: -1,
        value: "ESC",
        owg: null
    };
    this.dad = {
        nhn: 39,
        npj: -1,
        value: "\u25B6",
        owg: null
    };
    this.tys = {
        nhn: 37,
        npj: -1,
        value: "\u25C0",
        owg: null
    };
    this.qio = {
        nhn: 27,
        npj: -1,
        value: "ESC",
        owg: null
    };
    this.axg = {
        nhn: 32,
        npj: -1,
        value: "SPACE",
        owg: null
    };
    this.alj = {
        nhn: 8,
        npj: -1,
        value: "BACKSPACE",
        owg: null
    };
    this.ptk = {
        nhn: 82,
        npj: -1,
        value: "R",
        owg: null
    };
    this.wzh = {
        nhn: 66,
        npj: -1,
        value: "B",
        owg: null
    };
    this.vfv = {
        nhn: 72,
        npj: -1,
        value: "H",
        owg: null
    };
    this.vne = {
        nhn: 68,
        npj: -1,
        value: "D",
        owg: null
    };
    this.nik = {
        nhn: 83,
        npj: -1,
        value: "S",
        owg: null
    };
    this.vtg = {
        nhn: 67,
        npj: -1,
        value: "C",
        owg: null
    };
    this.nhk.push(this.kjr);
    this.nhk.push(this.duv);
    this.nhk.push(this.start);
    this.nhk.push(this.lyb);
    this.nhk.push(this.pcc);
    this.nhk.push(this.ykr);
    this.nhk.push(this.ncp);
    this.nhk.push(this.dtk);
    this.nhk.push(this.jzz);
    this.nhk.push(this.zbs);
    this.nhk.push(this.language)
}
eaf.prototype = new qza;

function nmg() {
    this.vuu = new Image();
    this.tut = 0;
    this.uva = 0;
    this.znu = 0;
    this.zky = function (c, a, b, d) {
        this.vuu = c;
        this.uva = b;
        this.tut = a;
        this.znu = d;
        return this
    }
}

function szz() {
    this.evt = 0;
    this.vqc = 0;
    this.win = 0;
    this.aym = "sans-serif";
    this.tsk = "bold";
    this.vab = null;
    this.rcq = null;
    this.guh = null;
    this.wrf = null;
    this.zhg = 16;
    this.cwd = 0;
    this.qoi = 0;
    this.emh = 2;
    this.jqr = 3;
    this.ftv = 3;
    this.ptz = 3;
    this.aze = 3;
    this.sov = function (a) {
        try {
            this.zhg = a.fontSize;
            this.cwd = a.wkl;
            this.qoi = a.igy;
            this.emh = a.dkv;
            this.jqr = a.sac;
            this.ftv = a.rzl;
            this.ptz = a.xus;
            this.aze = a.brn
        } catch (b) {
            console.error(b)
        }
    };
    this.eda = function (a) {
        try {
            this.aym = a.font;
            this.tsk = a.akl;
            this.vab = a.rmc;
            this.rcq = a.borderColor;
            this.guh = a.fbc;
            this.wrf = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.pll = function (a, c, b, d) {
        this.evt = a;
        this.vqc = c;
        this.win = b;
        if (d && d === true && this.context2D != null && this.nnj() === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.vna = function (a, b) {
        this.win = a;
        if (b && b === true && this.context2D != null && this.nnj() === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.guh) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.rcq);
            b.addColorStop(1, this.guh);
            dac.fip.nza(a, this.x, this.y, this.width, this.height, this.jqr, this.ftv, this.ptz, this.aze, this.wrf, 1, b, this.emh, 1)
        } else {
            dac.fip.nza(a, this.x, this.y, this.width, this.height, this.jqr, this.ftv, this.ptz, this.aze, this.wrf, 1, this.rcq, this.emh, 1)
        }
        dac.fip.bhn(a, dac.khg.language.cpw + ":", this.vab, this.x + this.emh + this.cwd, this.y + this.qoi, 2 * this.width / 3 - this.emh, this.height / 2, this.aym, this.zhg, this.tsk, 0);
        dac.fip.bhn(a, dac.khg.language.bjl + ":", this.vab, this.x + this.emh + this.cwd, this.y + this.height / 2 + this.qoi, 2 * this.width / 3 - this.emh, this.height / 2, this.aym, this.zhg, this.tsk, 0);
        dac.fip.qrp(a, this.vqc + "/" + this.evt, this.vab, this.x + this.emh + 2 * this.width / 3, this.y + this.qoi, this.width / 3 - this.emh - this.cwd, this.height / 2, this.aym, this.zhg, this.tsk, 0);
        dac.fip.qrp(a, this.win, this.vab, this.x + this.emh + 2 * this.width / 3, this.y + this.height / 2 + this.qoi, this.width / 3 - this.emh - this.cwd, this.height / 2, this.aym, this.zhg, this.tsk, 0);
        a.restore();
        if (this.dsp && this.lbg) {
            this.dsp.drawImage(this.lbg, this.x, this.y)
        }
    }
}
szz.prototype = new ebm;

function zvz() {
    var a = this;
    this.wnt = false;
    this.myd = null;
    this.cxv = false;
    this.iki = -1;
    this.jlh = 0;
    this.aft = null;
    this.svv = 800;
    this.xko = 0;
    this.wrf = null;
    this.xqr = null;
    this.kpq = null;
    this.vzw = 0;
    this.vur = null;
    this.jjy = null;
    this.oui = null;
    this.nth = null;
    this.sqk = 0;
    this.htz = 0;
    this.hls = new xop();
    this.fat = new xop();
    this.hgk = 30;
    this.zky = function (b, d, c) {
        zvz.prototype.zky.call(this, b, d, c);
        this.bbn()
    };
    this.ixf = function (c, b) {
        try {
            this.hgk = c.osa;
            this.hls = c.uto;
            this.fat = c.plt;
            this.qpq(c);
            this.ufa(c);
            this.uwl(c);
            this.anj(c);
            this.sve(c);
            this.eda(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.sov = function (g, r) {
        try {
            var d = {},
                c = this.myd.znq("info"),
                k = this.myd.znq("win"),
                s = this.myd.znq("creditd"),
                o = this.myd.znq("betd"),
                p = this.myd.znq("betpopup"),
                n = this.myd.znq("idd"),
                q = this.myd.znq("timed"),
                b = this.myd.znq("freeround"),
                m = this.myd.xtb("buttons");
            if (this.parent.ksw() || (this.parent.fsd && this.parent.ltg)) {
                if ((this.parent.beq() == null || this.parent.beq().o == false) && this.parent.style.khg.gdc == true) {
                    d = g.qec
                } else {
                    d = g.thj
                }
            } else {
                if (r) {
                    if (this.parent.beq() != null) {
                        d = g.qcg
                    } else {
                        d = g.pxt
                    }
                } else {
                    if (this.parent.beq() != null) {
                        if (!this.parent.rdw()) {
                            d = g.rzh
                        } else {
                            d = g.fff
                        }
                    } else {
                        if (dac.ewv.value57 === dac.ui.ruq || this.ssz()) {
                            if (!this.parent.rdw()) {
                                d = g.hvb
                            } else {
                                d = g.cxr
                            }
                        } else {
                            if (dac.ewv.value57 === dac.ui.awx) {
                                if (!this.parent.rdw()) {
                                    d = g.eye
                                } else {
                                    d = g.myr
                                }
                            } else {
                                if (dac.ewv.value57 === dac.ui.qaq) {
                                    if (!this.parent.rdw()) {
                                        d = g.lgi
                                    } else {
                                        d = g.uze
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.hgk = g.osa;
            this.hls = g.uto;
            this.fat = g.plt;
            if (s) {
                s.sov(g.display);
                s.cqz(g.hrk)
            }
            if (o) {
                o.sov(g.display);
                o.cqz(g.dyu)
            }
            if (p) {
                p.sov(g.hzp);
                p.cqz(g.eee)
            }
            if (n) {
                n.sov(g.xoz);
                n.cqz(g.tqm)
            }
            if (q) {
                q.sov(g.xoz);
                q.cqz(g.fyf)
            }
            if (c) {
                c.sov(g.uck);
                c.cqz(g.uck.eqf)
            }
            if (k) {
                k.sov(g.win);
                k.cqz(g.win.eqf)
            }
            if (b) {
                b.sov(g.sgb);
                b.cqz(g.sgb.eqf)
            }
            for (var f = 0, j = m.length; f < j; f++) {
                if (m[f] instanceof gmc) {
                    m[f].sov(g.bmx)
                }
            }
            if (this.parent.beq() != null) {
                if (this.parent.ksw() === true) {
                    if (this.parent.beq().o === true || this.parent.style.khg.gdc == false) {
                        this.myd.mpx("start", "#sov", [g.knd])
                    } else {
                        this.myd.mpx("start", "#sov", [g.nnt])
                    }
                } else {
                    this.myd.mpx("start", "#sov", [g.nnt]);
                    this.myd.mpx("astart", "#sov", [g.knd])
                }
            } else {
                this.myd.mpx("start", "#sov", [g.nnt]);
                if (this.parent.ksw() === true) {} else {
                    if (dac.ewv.value57 === dac.ui.ruq || this.ssz()) {
                        this.myd.mpx("astart", "#sov", [g.nnt])
                    }
                }
            }
            if (r) {
                this.myd.mpx("start", "#cqz", [d.pcy]);
                this.myd.mpx("astart", "#cqz", [d.zvl]);
                this.myd.mpx("setting", "#cqz", [d.gjr])
            } else {
                this.myd.mpx("start", "#cqz", [d.pcy]);
                this.myd.mpx("astart", "#cqz", [d.zvl]);
                this.myd.mpx("bet", "#cqz", [d.xpp]);
                this.myd.mpx("gamble", "#cqz", [d.qqo]);
                this.myd.mpx("exit", "#cqz", [d.ivf]);
                this.myd.mpx("help", "#cqz", [d.ivf]);
                this.myd.mpx("lang", "#cqz", [d.cmf]);
                this.myd.mpx("line", "#cqz", [d.kdd]);
                this.myd.mpx("setting", "#cqz", [d.gjr])
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.eda = function (b, r) {
        try {
            var d = this.myd.znq("info"),
                l = this.myd.znq("win"),
                p = this.myd.znq("betpopup"),
                c = this.myd.znq("freeround"),
                j = this.myd.xtb("displays"),
                o = this.myd.znq("idd"),
                q = this.myd.znq("timed"),
                n = this.myd.xtb("buttons"),
                g = (r === true) ? b.yur : b.kml;
            this.wrf = g.backgroundColor;
            this.xqr = g.wgg;
            this.kpq = g.muq;
            this.vzw = g.fxm;
            this.jjy = g.yzl;
            this.oui = g.rjw;
            if (d) {
                d.eda(g.uck)
            }
            if (l) {
                l.eda(g.win)
            }
            if (c) {
                c.eda(b.sgb)
            }
            for (var f = 0, k = n.length; f < k; f++) {
                n[f].eda((this.parent.wea.awz === false) ? g.fsa : (this.parent.xvh === dac.wea.rwv) ? g.msh : g.pdc)
            }
            for (var f = 0, k = j.length; f < k; f++) {
                j[f].eda(b.display)
            }
            if (p) {
                p.eda(b.hzp)
            }
            if (o) {
                o.eda(b.xoz)
            }
            if (q) {
                q.eda(b.xoz)
            }
            if (this.parent.ksw() === true) {
                this.myd.mpx("bet", "#eda", [b.giq])
            }
        } catch (m) {
            console.error(m)
        }
    };
    this.yez = function (t, s, u) {
        var r = this.myd.xtb("buttons"),
            g = this.myd.znq("line"),
            k = this.myd.znq("bet"),
            c = this.myd.znq("start"),
            p = this.myd.znq("betd"),
            f = this.myd.znq("creditd"),
            b = this.parent.hed.znq("betsel"),
            e = this.parent.hed.znq("linesel"),
            o = t - this.x,
            m = s - this.y;
        for (var n = 0, q = r.length; n < q; n++) {
            var d = r[n];
            if (o >= d.x && o <= d.x + d.width && m >= d.y && m <= d.y + d.height && d.nnj() == true) {
                if (d.yij() && !d.ijp()) {
                    if (!this.parent.ksw() && (d === k || d === g)) {
                        d.wcw(true, true, false);
                        for (var l = 0; l < q; l++) {
                            r[l].bjc(true, false)
                        }
                        d.jvb();
                        this.aft = function () {
                            if (d.jvb() === true) {
                                clearInterval(a.jlh);
                                d.wcw(false, true);
                                for (var v = 0; v < q; v++) {
                                    r[v].bjc(false)
                                }
                            }
                        };
                        this.jlh = setInterval(this.aft, d.fll)
                    } else {
                        if (d === c && c.jvb === this.ndg) {
                            d.wcw(true, true, false)
                        } else {
                            d.wcw(true, true)
                        }
                        d.jvb();
                        for (var l = 0; l < q; l++) {
                            r[l].bjc(true)
                        }
                    }
                    return true
                }
            }
        }
        if (k && k.yij() && !k.ijp() && k.nnj()) {
            if (p && o >= p.x && o <= p.x + p.width && m >= p.y && m <= p.y + p.height) {
                if (!u) {
                    if ((b && b.yij()) && ((e && e.yij()) || !e)) {
                        this.parent.qnn()
                    }
                    return true
                }
            } else {
                if (f && o >= f.x && o <= f.x + f.width && m >= f.y && m <= f.y + f.height) {
                    if (!u) {
                        this.parent.xkq()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.vkf = function () {
        var f = this.myd.xtb("buttons"),
            k = this.myd.znq("bet"),
            l = this.myd.znq("line"),
            g = this.myd.znq("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.zwt() === true) {
                d.wcw(false, true);
                if (dac.ewv.value82 && d == g) {
                    for (var c = 0; c < b; c++) {
                        f[c].bjc(false)
                    }
                }
                if (d === k || d === l) {
                    clearInterval(this.jlh);
                    for (var c = 0; c < b; c++) {
                        f[c].bjc(false)
                    }
                } else {
                    if (d === g && g.jvb === this.ndg) {
                        clearTimeout(this.xko);
                        if (this.parent.lyb === false) {
                            this.myd.mpx("start", "#kyh")
                        }
                    }
                }
                return true
            }
        }
        return false
    };
    this.tda = function (c) {
        var m = this.myd.xtb("buttons"),
            f = this.myd.znq("bet"),
            e = this.myd.znq("line"),
            b = this.myd.znq("start");
        for (var k = 0, l = m.length; k < l; k++) {
            var d = m[k];
            if (c == d.mkn) {
                if (d.yij() && !d.ijp() && d.nnj()) {
                    if (dac.ewv.value82 && d == b) {
                        d.wcw(true, true, false);
                        for (var g = 0; g < l; g++) {
                            m[g].bjc(true, false)
                        }
                    } else {
                        d.wcw(true, true);
                        d.jvb();
                        for (var g = 0; g < l; g++) {
                            m[g].bjc(true)
                        }
                    }
                }
                return true
            }
        }
        if (c == this.parent.bsx.ykr.nhn) {
            if (f && f.yij() && !f.ijp() && f.nnj()) {
                this.parent.ied();
                for (var g = 0, l = m.length; g < l; g++) {
                    m[g].bjc(true)
                }
            }
            return true
        } else {
            if (c == this.parent.bsx.dtk.nhn) {
                if (e && e.yij() && !e.ijp() && e.nnj()) {
                    this.parent.pgz();
                    for (var g = 0, l = m.length; g < l; g++) {
                        m[g].bjc(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.hkt = function (g) {
        var f = this.myd.xtb("buttons"),
            k = this.myd.znq("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.zwt() == true && g == d.mkn) {
                if (dac.ewv.value82 && d == k) {
                    d.jvb();
                    for (var c = 0; c < b; c++) {
                        f[c].bjc(false)
                    }
                }
                d.wcw(false, true);
                return true
            }
        }
        return false
    };
    this.cuj = function (n, m, o) {
        var l = this.myd.xtb("buttons"),
            e = this.myd.znq("bet"),
            d = this.myd.znq("line"),
            b = this.myd.znq("start"),
            p = this.myd.znq("astart");
        if (n != null && m != null) {
            var j = n - this.x;
            var f = m - this.y;
            for (var g = 0, k = l.length; g < k; g++) {
                var c = l[g];
                if (j >= c.x && j <= c.x + c.width && f >= c.y && f <= c.y + c.height && c.nnj() && c.yij() && !c.ijp()) {
                    return c.jvb
                }
            }
        } else {
            if (o != null) {
                for (var g = 0, k = l.length; g < k; g++) {
                    var c = l[g];
                    if (o == c.mkn && c.nnj() && c.yij() && !c.ijp()) {
                        if (c == b || c == p) {
                            return null
                        }
                        return c.jvb
                    }
                }
                if (o == this.parent.bsx.ykr.nhn && e && e.nnj() && e.yij() && !e.ijp()) {
                    return this.parent.ied
                } else {
                    if (o == this.parent.bsx.dtk.nhn && d && d.nnj() && d.yij() && !d.ijp()) {
                        return this.parent.pgz
                    }
                }
            }
        }
        return null
    };
    this.bbn = function () {
        this.myd = new rxh();
        this.myd.zky();
        this.myd.jqg("displays");
        this.myd.jqg("buttons");
        this.myd.jqg("allbuttons");
        this.myd.jqg("infos");
        this.myd.jqg("start");
        this.myd.jqg("auto");
        this.myd.jqg("collect");
        this.myd.jqg("freespin");
        this.myd.jqg("game");
        this.myd.jqg("settings")
    };
    this.sve = function (b) {
        var c = this.vqw(b.uck.eqf);
        c.sov(b.uck);
        this.myd.hio("info", c, ["infos"])
    };
    this.anj = function (b) {
        var c = this.vqw(b.win.eqf);
        c.font = this.parent.hkx;
        c.via = this.parent.wrr.ark("s_symb");
        c.qig = this.parent.wrr.ark("s_symb").height / this.parent.pyb.length;
        c.sov(b.win);
        this.myd.hio("win", c, ["infos"])
    };
    this.uwl = function (b) {
        var c = new szz();
        c.zky(b.sgb.eqf, this.context2D, null);
        c.parent = this;
        c.sov(b.sgb);
        c.oac(false);
        this.myd.hio("freeround", c)
    };
    this.ufa = function (c) {
        var b = {};
        if (this.parent.ksw() || (this.parent.fsd && this.parent.ltg)) {
            if ((this.parent.beq() == null || this.parent.beq().o == false) && this.parent.style.khg.gdc == true) {
                b = c.qec
            } else {
                b = c.thj
            }
        } else {
            if (this.parent.beq() != null) {
                if (!this.parent.rdw()) {
                    b = c.rzh
                } else {
                    b = c.fff
                }
            } else {
                if (dac.ewv.value57 === dac.ui.ruq || this.ssz()) {
                    if (!this.parent.rdw()) {
                        b = c.hvb
                    } else {
                        b = c.cxr
                    }
                } else {
                    if (dac.ewv.value57 === dac.ui.awx) {
                        if (!this.parent.rdw()) {
                            b = c.eye
                        } else {
                            b = c.myr
                        }
                    } else {
                        if (dac.ewv.value57 === dac.ui.qaq) {
                            if (!this.parent.rdw()) {
                                b = c.lgi
                            } else {
                                b = c.uze
                            }
                        }
                    }
                }
            }
        }
        if (this.parent.beq() != null) {
            if (this.parent.ksw() === true) {
                if (this.parent.beq().o == true || this.parent.style.khg.gdc == false) {
                    this.myd.hio("start", this.ahv(b.pcy, (this.parent.wea.tpq === false) ? this.parent.language.start : null, (this.parent.wea.tpq === false) ? "---" : "A", (this.parent.wea.tpq === false) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_sp"), null, this.ndg, (!this.parent.fsd) ? this.parent.bsx.start : null, c.knd), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                } else {
                    this.myd.hio("start", this.nfq(b.pcy, (this.parent.wea.tpq === false) ? this.parent.language.start : null, (this.parent.wea.tpq === false) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_sp"), (this.parent.wea.tpq === false) ? null : this.parent.wrr.ark("btn_sph"), this.parent.zdo, null, c.nnt), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.myd.hio("astart", this.ahv(b.zvl, null, (this.parent.wea.tpq === false) ? "---" : "A", this.parent.wrr.ark("btn_astl"), null, this.parent.bea, null, c.bmx), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                }
            } else {
                this.myd.hio("start", this.nfq(b.pcy, (this.parent.wea.tpq === false) ? this.parent.language.start : null, (this.parent.wea.tpq === false) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_sp"), null, this.parent.zdo, (!this.parent.fsd) ? this.parent.bsx.start : null, c.nnt), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.myd.hio("astart", this.ahv(b.zvl, this.parent.language.qag, (this.parent.wea.tpq === false) ? "---" : "A", this.parent.wrr.ark("btn"), null, this.parent.bea, (!this.parent.fsd) ? this.parent.bsx.lyb : null, c.knd), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        } else {
            if (this.parent.ksw() === true) {
                if (this.parent.style.khg.gdc) {
                    this.myd.hio("start", this.nfq(b.pcy, (this.parent.wea.tpq === false) ? this.parent.language.start : null, (this.parent.wea.tpq === false) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_sp"), (this.parent.wea.tpq === false) ? null : this.parent.wrr.ark("btn_sph"), this.parent.zdo, null, c.nnt), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.myd.hio("astart", this.nfq(b.zvl, null, this.parent.wrr.ark("btn_ast"), null, this.parent.bea, null, c.bmx), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                } else {
                    this.myd.hio("start", this.nfq(b.pcy, (this.parent.wea.tpq === false) ? this.parent.language.start : null, (this.parent.wea.tpq === false) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_asp"), (this.parent.wea.tpq === false) ? null : this.parent.wrr.ark("btn_asph"), this.ndg, null, c.nnt), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                }
            } else {
                this.myd.hio("start", this.nfq(b.pcy, (this.parent.wea.tpq === false) ? this.parent.language.start : null, (this.parent.wea.tpq === false) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_asp"), (this.parent.wea.tpq === false) ? null : this.parent.wrr.ark("btn_asph"), this.parent.zdo, (!this.parent.fsd) ? this.parent.bsx.start : null, c.nnt), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.myd.hio("astart", this.nfq(b.zvl, this.parent.language.lyb, (dac.ewv.value57 === dac.ui.ruq || this.ssz()) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_s"), null, this.parent.bea, (!this.parent.fsd) ? this.parent.bsx.lyb : null, c.bmx), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        }
        if (this.parent.ksw() === true) {
            this.myd.hio("bet", this.hni(b.xpp, "+", null, this.parent.wvv, (!this.parent.fsd) ? this.parent.bsx.pcc : null, c.skq), ["buttons", "allbuttons"])
        } else {
            this.myd.hio("bet", this.nfq(b.xpp, this.parent.language.wrg, this.parent.wrr.ark("btn_s"), null, this.parent.wvv, (!this.parent.fsd) ? this.parent.bsx.pcc : null, c.bmx), ["buttons", "allbuttons"])
        }
        this.myd.znq("bet").fll = 300;
        this.myd.hio("gamble", this.nfq(b.qqo, this.parent.language.jzz, this.parent.wrr.ark("btn_s"), null, this.parent.mtr, (!this.parent.fsd) ? this.parent.bsx.jzz : null, c.bmx), ["buttons", "allbuttons", "game", "auto", "collect"]);
        if (this.parent.beq() != null) {
            if (sessionStorage.sessionValue5 != null) {
                this.myd.hio("exit", this.nfq(b.ivf, (this.parent.wea.tpq === true) ? null : (dac.ewv.value50.g === true) ? this.parent.language.xhl : this.parent.language.fsf, (this.parent.wea.tpq === false) ? this.parent.wrr.ark("btn_s") : this.parent.wrr.ark("btn_e"), null, this.parent.dyd, (!this.parent.fsd) ? this.parent.bsx.zbs : null, c.bmx), ["buttons", "allbuttons", "collect"])
            } else {
                if (this.parent.ksw() === false) {
                    this.myd.hio("help", this.nfq(b.ivf, (this.parent.wea.tpq === true) ? null : this.parent.language.hwg, this.parent.wrr.ark("btn_s"), null, this.parent.epe, (!this.parent.fsd) ? this.parent.bsx.duv : null, c.bmx), ["buttons", "allbuttons"])
                }
            }
        } else {
            if (dac.ewv.value57 !== dac.ui.qaq) {
                if (sessionStorage.sessionValue5 != null) {
                    this.myd.hio("exit", this.nfq(b.ivf, (this.parent.wea.tpq === true) ? null : (dac.ewv.value50.g === true) ? this.parent.language.xhl : this.parent.language.fsf, (this.parent.wea.tpq === false) ? this.parent.wrr.ark("btn_s") : this.parent.wrr.ark("btn_e"), null, this.parent.dyd, (!this.parent.fsd) ? this.parent.bsx.zbs : null, c.bmx), ["buttons", "allbuttons", "collect"])
                } else {
                    if (this.parent.ksw() === false) {
                        this.myd.hio("help", this.nfq(b.ivf, (this.parent.wea.tpq === true) ? null : this.parent.language.hwg, this.parent.wrr.ark("btn_s"), null, this.parent.epe, (!this.parent.fsd) ? this.parent.bsx.duv : null, c.bmx), ["buttons", "allbuttons"])
                    }
                }
            }
            if (dac.ewv.value57 !== dac.ui.ruq && !this.ssz() && this.parent.beq() == null) {
                this.myd.hio("lang", this.woy(b.cmf, this.parent.eht(sessionStorage.sessionValue1), this.parent.ipk, (!this.parent.fsd) ? this.parent.bsx.language : null), ["buttons", "allbuttons"])
            }
        }
        if (this.parent.rdw()) {
            this.myd.hio("line", this.nfq(b.kdd, this.parent.language.snl, this.parent.wrr.ark("btn_s"), null, this.parent.zzg, (!this.parent.fsd) ? this.parent.bsx.ncp : null, c.bmx), ["buttons", "allbuttons"]);
            this.myd.znq("line").fll = 300
        }
        this.myd.hio("setting", this.nfq(b.gjr, null, this.parent.wrr.ark("btn_m"), null, this.parent.kkx, null, c.bmx), ["buttons", "settings"])
    };
    this.qpq = function (c) {
        var b = null;
        if (!(this.parent.fsd && this.parent.ltg) && this.parent.style.khg.eyr === false) {
            b = this.parent.wrr.ark("display_effect")
        }
        if (this.parent.ksw() === true) {
            this.myd.hio("betpopup", this.rxr(c.eee, "", "", null, c.hzp), ["displays"]);
            this.myd.mpx("betpopup", "#oac", [false])
        }
        this.myd.hio("creditd", this.rxr(c.hrk, (this.parent.zam()) ? this.parent.language.fqu : this.parent.language.dzc, this.parent.ifb(this.parent.dzc), b, c.display), ["displays"]);
        this.myd.hio("betd", this.rxr(c.dyu, this.parent.language.wrg, this.parent.ifb(this.parent.totalBet), b, c.display), ["displays"]);
        this.myd.hio("idd", this.rxr(c.tqm, null, (this.parent.zam() === true) ? this.parent.language.fqu : " " + ((this.parent.qpy > 0) ? this.parent.qpy : ""), null, c.xoz), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || dac.ewv.value49) {
            this.myd.hio("timed", this.rxr(c.fyf, null, "", null, c.xoz), ["displays"])
        }
    };
    this.juy = function () {
        if (this.iki == 1) {
            this.hly(this.cxv)
        } else {
            if (this.iki == 2) {
                this.cyp(this.cxv)
            } else {
                if (this.iki == 3) {
                    this.nef(this.cxv)
                } else {
                    if (this.iki == 4) {
                        this.ntg(this.cxv)
                    } else {
                        if (this.iki == 5) {
                            this.lpk(this.cxv)
                        } else {
                            if (this.iki == 6) {
                                this.sha(this.cxv)
                            } else {
                                if (this.iki == 7) {
                                    this.bzd(this.cxv)
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hly = function (d) {
        var c = this.myd.xtb("allbuttons"),
            e = 0,
            b = 0;
        this.cxv = d;
        this.iki = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].xgf(d)
        }
    };
    this.cyp = function (d) {
        var c = this.myd.xtb("allbuttons"),
            f = this.myd.xtb("start"),
            e = 0,
            b = 0;
        this.cxv = d;
        this.iki = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].xgf(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].xgf(d)
        }
    };
    this.nef = function (d) {
        var c = this.myd.xtb("allbuttons"),
            f = this.myd.xtb("game"),
            e = 0,
            b = 0;
        this.cxv = d;
        this.iki = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].xgf(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].xgf(d)
        }
    };
    this.ntg = function (d) {
        var c = this.myd.xtb("allbuttons"),
            f = (this.wnt === true) ? this.myd.xtb("collect") : this.myd.xtb("game"),
            e = 0,
            b = 0;
        this.cxv = d;
        this.iki = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].xgf(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].xgf(d)
        }
    };
    this.bzd = function (d) {
        var b = this.myd.xtb("allbuttons"),
            c = this.myd.xtb("auto");
        i = 0, ndu = 0;
        this.cxv = d;
        this.iki = 7;
        for (i = 0, ndu = b.length; i < ndu; i++) {
            b[i].xgf(false)
        }
        for (i = 0, ndu = c.length; i < ndu; i++) {
            c[i].xgf(d)
        }
    };
    this.lpk = function (c) {
        var b = this.myd.xtb("allbuttons"),
            d = this.myd.xtb("freespin");
        i = 0, ndu = 0;
        this.cxv = c;
        this.iki = 5;
        for (i = 0, ndu = b.length; i < ndu; i++) {
            b[i].xgf(false)
        }
        for (i = 0, ndu = d.length; i < ndu; i++) {
            d[i].xgf(c)
        }
    };
    this.sha = function (e) {
        var c = this.myd.xtb("allbuttons"),
            d = this.myd.xtb("settings"),
            f = 0,
            b = 0;
        this.cxv = e;
        this.iki = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].xgf(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].xgf(e)
        }
    };
    this.rxr = function (c, g, f, e, b) {
        var d = new qxq();
        d.zky(c, this.context2D, null, g, f);
        d.parent = this;
        d.via = e;
        d.sov(b);
        return d
    };
    this.nfq = function (f, k, j, b, g, d, e) {
        var c = new gmc();
        c.zky(f, this.context2D, null, j, b, k);
        c.parent = this;
        c.jvb = g;
        c.sov(e);
        if (d) {
            c.mkn = d.nhn
        }
        return c
    };
    this.ahv = function (f, k, g, b, l, c, j, e) {
        var d = new gmc();
        d.zky(f, this.context2D, null, b, l, k);
        d.parent = this;
        d.jvb = c;
        d.value = g;
        d.sov(e);
        if (j) {
            d.mkn = j.nhn
        }
        return d
    };
    this.hni = function (e, j, g, f, c, d) {
        var b = new nsu();
        b.zky(e, this.context2D, null, g, j);
        b.parent = this;
        b.jvb = f;
        b.sov(d);
        if (c) {
            b.mkn = c.nhn
        }
        return b
    };
    this.woy = function (d, f, e, c) {
        var b = new wej();
        b.zky(d, this.context2D, null, f, null);
        b.parent = this;
        b.jvb = e;
        if (c) {
            b.mkn = c.nhn
        }
        return b
    };
    this.vqw = function (b) {
        var c = new qux();
        c.zky(b, this.context2D);
        c.parent = this;
        return c
    };
    this.ssz = function () {
        return (this.parent.opy > 0 && this.parent.bzy < this.parent.opy)
    };
    this.fcy = function (c, b) {
        var d = this.myd.znq("info");
        if (d) {
            d.lsm(b);
            d.hdg(c, b)
        }
    };
    this.stop = function () {
        clearInterval(this.jlh)
    };
    this.dox = function (b, c, d) {
        this.nth = b;
        this.sqk = c;
        this.htz = d
    };
    this.pla = function (m, j, n, f) {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var c = (m != null && j != null && n != null && f != null),
            k = (c === true) ? new xop(m, j, n, f) : new xop(this.x, this.y, this.width, this.height),
            o = this.context2D,
            b = this.myd.hlf();
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
        if (this.nth != null) {
            if (this.parent.xvh === dac.wea.xwb) {
                o.drawImage(this.nth, this.x + this.hls.x + this.sqk, this.y + this.hls.y + this.htz, this.hls.width, this.nth.height - (this.y + this.hls.y + this.htz), this.hls.x, this.hls.y, this.hls.width, this.hls.height)
            } else {
                o.drawImage(this.nth, this.x + this.hls.x + this.sqk, this.y + this.hls.y + this.htz, this.hls.width, this.hls.height, this.hls.x, this.hls.y, this.hls.width, this.hls.height)
            }
            if (this.fat && this.fat.width > 0 && this.fat.height > 0) {
                o.drawImage(this.nth, this.x + this.fat.x + this.sqk, this.y + this.fat.y + this.htz, this.fat.width, this.fat.height, this.fat.x, this.fat.y, this.fat.width, this.fat.height)
            }
        }
        if (this.fat && this.fat.width > 0 && this.fat.height > 0 && this.parent.wea.awz === false) {
            var l = o.createLinearGradient(this.fat.x, this.fat.y, this.fat.x + this.fat.width, this.fat.y),
                e = this.parent.wrr.ark("btn_back");
            l.addColorStop(0.2, this.jjy);
            l.addColorStop(1, this.oui);
            o.fillStyle = l;
            if (this.parent.xvh === dac.wea.rwv) {
                o.fillRect(this.fat.x, this.fat.y, this.fat.width, this.fat.height);
                if (e) {
                    o.drawImage(e, this.fat.x, this.fat.y, this.fat.width, this.fat.height)
                }
            } else {
                if (this.parent.xvh === dac.wea.pjo) {
                    o.save();
                    o.translate(this.fat.width / 2, this.fat.height / 2);
                    o.rotate(Math.PI);
                    o.translate(-this.fat.width / 2, -this.fat.height / 2);
                    o.fillRect(this.fat.x, this.fat.y, this.fat.width, this.fat.height);
                    if (e) {
                        o.drawImage(e, this.fat.x, this.fat.y, this.fat.width, this.fat.height)
                    }
                    o.restore()
                }
            }
        }
        for (var d = 0, g = b.length; d < g; d++) {
            b[d].pla()
        }
        if (this.parent.awv === true && !(this.parent.ksw() === true && this.parent.wea.awz === false)) {
            this.parent.pzf(o, k)
        }
        o.restore();
        if (this.dsp && this.lbg) {
            if (c) {
                this.dsp.drawImage(this.lbg, m, j, n, f, this.x + m, this.y + j, n, f)
            } else {
                this.dsp.drawImage(this.lbg, this.x, this.y)
            }
        }
    };
    this.ndg = function () {
        if (a.parent.lyb === true) {
            a.rmt()
        } else {
            a.parent.zdo();
            if (a.parent.ytk() === true) {
                a.myd.mpx("start", "#nnr", [a.svv]);
                a.xko = setTimeout(a.rmt, a.svv)
            }
        }
    };
    this.rmt = function () {
        a.parent.bea();
        if (a.parent.lyb === true) {
            a.myd.mpx("start", "#yzu")
        } else {
            a.myd.mpx("start", "#kyh")
        }
    }
}
zvz.prototype = new ebm;

function lnz(e, b, a, c, d) {
    this.eqf = {
        x: e.x || 0,
        y: e.y || 0
    };
    this.vuu = b;
    this.vyo = 0;
    this.znu = 21;
    this.nhg = a;
    this.gxf = c || 0;
    this.ras = d || 0;
    this.ruj = 100;
    this.zuh = 96;
    this.ffe = function () {
        if (this.vyo < this.znu) {
            this.vyo++
        }
        return (this.vyo >= this.znu)
    };
    this.pla = function () {
        a.drawImage(this.vuu, this.vyo * this.ruj, 0, this.ruj, this.zuh, this.eqf.x, this.eqf.y, this.gxf, this.ras)
    }
}

function dee() {
    this.iji = false;
    this.wzk = false;
    this.uaz = false;
    this.stt = [];
    this.rtx = [];
    this.rze = [];
    this.kzk = [];
    this.ljd = [];
    this.gqi = 89;
    this.zop = 400;
    this.cwy = 3;
    this.font = "arial";
    this.akl = "bold";
    this.uhh = true;
    this.juh = true;
    this.wak = null;
    this.cni = false;
    this.pzd = [];
    this.vov = 0;
    this.hsd = false;
    this.mar = false;
    this.ntc = 0;
    this.jqi = 0;
    this.xyu = false;
    this.otu = true;
    this.ofn = false;
    this.zzc = false;
    this.utx = 0;
    this.ibs = 0;
    this.ujx = [];
    this.xnf = false;
    this.lfn = 0;
    this.saw = 0;
    this.dmv = 0;
    this.zfu = -1;
    this.xke = 0;
    this.wtm = 0;
    this.ycv = true;
    this.wah = null;
    this.idz = [];
    this.fye = [];
    this.wqq = null;
    this.tnm = null;
    this.eay = 0;
    this.fjs = null;
    this.odr = null;
    this.flu = null;
    this.dzb = null;
    this.ply = 0.05;
    this.bgh = 4;
    this.nnn = 5;
    this.emh = 1;
    this.kwt = 0;
    this.ffd = 0;
    this.zhg = 40;
    this.awo = 12;
    this.uvs = 5;
    this.yfg = 0;
    this.kom = 100;
    this.stp = 96;
    this.nth = null;
    this.sqk = 0;
    this.htz = 0;
    this.sjx = 0;
    this.hmg = new xop();
    this.aoc = [];
    this.csu = 3;
    this.lwa = 6;
    this.qot = 0;
    this.qgg = new xop(0, 0, 920, 160);
    this.soo = [0, 515, 405];
    this.bum = 40;
    this.ara = new xop(0, 165, 920, 160);
    this.svw = [0, 330, 420];
    this.bhr = 40;
    this.gsm = new xop(0, 330, 920, 160);
    this.qyi = [0, 440, 415];
    this.php = 20;
    this.ocv = function () {};
    this.ynn = function () {};
    this.tha = function () {};
    this.qsv = function () {};
    this.gri = function () {};
    this.gkl = function () {};
    this.sov = function (a) {
        try {
            this.bgh = a.lineWidth;
            this.nnn = a.eks;
            this.emh = a.dkv;
            this.kwt = a.unm;
            this.ffd = a.qig;
            this.zhg = a.fontSize;
            this.awo = a.xfl;
            this.uvs = a.rel;
            this.kom = a.kwe;
            this.stp = a.izf
        } catch (b) {
            console.error(b)
        }
    };
    this.eda = function (a) {
        try {
            this.fye = a.ead;
            this.eay = a.rhc;
            this.fjs = a.nay;
            this.odr = a.jup;
            this.flu = a.laq;
            this.dzb = a.xqu;
            this.ply = a.dyh
        } catch (b) {
            console.error(b)
        }
    };
    this.dno = function () {
        this.uaz = false;
        this.oac(true)
    };
    this.vin = function () {
        this.uaz = false;
        this.oac(false, true)
    };
    this.rob = function () {
        return this.cni
    };
    this.ryq = function (d, b) {
        if (d && b) {
            this.pzd = b;
            this.wah = [];
            for (var c = 0, a = d.length; c < a; c++) {
                this.wah[c] = d[c]
            }
            if (this.juh) {
                this.parent.wrr.ulw("winline");
                this.parent.wrr.dls("winline")
            }
        } else {
            this.wah = null
        }
        this.cni = false;
        this.ofn = false;
        this.zzc = false;
        this.uaz = true;
        this.oac(true, true)
    };
    this.start = function () {
        this.cni = true;
        this.ofn = true;
        this.zzc = false;
        if (!this.hsd) {
            this.lfn = 0
        } else {
            if (this.lfn >= this.dmv) {
                this.lfn = 0
            }
        }
        this.otu = true;
        this.parent.pbe = false;
        this.mar = (this.parent.klz >= (this.parent.qbi - 1));
        if (this.hsd && this.juh) {
            if (!this.parent.epk && this.parent.sws) {
                this.parent.wrr.ulw("winline");
                this.parent.wrr.dls("winline")
            }
        }
        this.ocv()
    };
    this.stop = function () {
        this.cni = false;
        this.ofn = false;
        this.elk();
        clearInterval(this.ntc);
        clearTimeout(this.jqi);
        clearTimeout(this.parent.uef)
    };
    this.ibf = function (d, c, a, f, j, e, b, g) {
        if (this.uaz) {
            this.uaz = false;
            this.parent.pla()
        }
        this.zfu = f;
        this.vov = d;
        this.pzd = c;
        this.wtm = j;
        this.xke = e;
        this.ycv = a;
        this.hsd = g;
        if (b) {
            this.kin()
        } else {
            this.qkb()
        }
    };
    this.kin = function () {
        this.dli();
        this.start()
    };
    this.qkb = function () {
        this.cni = true;
        this.ofn = true;
        this.otu = false;
        this.zzc = this.uhh;
        this.elk();
        if (!this.parent.epk && this.juh) {
            this.parent.wrr.ulw("winline");
            this.parent.wrr.dls("winline")
        }
        this.pla();
        this.tha()
    };
    this.hsn = function () {
        if (this.xnf) {
            this.utx++;
            if (this.utx == 6 || this.utx == 10 || this.utx == 15 || (this.parent.hcs == 2 && (this.utx == 48 || this.utx == 55 || this.utx == 64))) {
                this.dsh()
            }
            for (var a = this.ujx.length - 1; a >= 0; a--) {
                if (this.ujx[a].ffe()) {
                    this.ujx.shift()
                }
            }
        }
        if (this.uhh) {
            if (this.hsd) {
                this.zzc = true
            } else {
                if ((this.lfn % 3) == 0) {
                    this.zzc = !this.zzc
                }
            }
        }
        if (((!this.hsd || this.mar) && this.lfn < this.dmv)) {
            this.parent.pla();
            this.lfn++;
            if (this.hsd) {
                this.saw++
            }
        } else {
            if (this.hsd && !this.mar && this.saw < this.cwy) {
                this.parent.pla();
                this.saw++;
                this.lfn = (this.lfn < this.dmv) ? this.lfn + 1 : 0
            } else {
                this.saw = 0;
                clearInterval(this.ntc);
                this.gkv()
            }
        }
    };
    this.gkv = function () {
        this.cni = false;
        this.ofn = (this.iji && this.otu);
        if (this.ofn == true && this.mar == true && this.parent.epk == false && this.parent.lyb == true) {
            this.ofn = false
        }
        if (!this.hsd || this.mar) {
            if (!(this.wzk && this.iji) && !this.xnf) {
                this.vin()
            }
        }
        this.parent.pla();
        this.parent.rif();
        this.parent.uzb();
        this.parent.kxm()
    };
    this.dli = function () {
        this.dmv = 0;
        for (var a = 0; a < this.pzd.length; a++) {
            for (var b = 0; b < this.pzd[a].length; b++) {
                if (this.pzd[a][b] >= 0) {
                    if (this.stt[this.pzd[a][b]].znu > this.dmv) {
                        this.dmv = this.stt[this.pzd[a][b]].znu
                    }
                }
            }
        }
    };
    this.dma = function () {
        if (this.nnj()) {
            this.ujx = [];
            this.xnf = true;
            this.utx = 0
        }
    };
    this.khv = function () {
        this.utx = 0
    };
    this.elk = function () {
        this.xnf = false
    };
    this.dsh = function () {
        var e = (Math.random() > 0.7) ? 4 : 3,
            d = this.kom * e,
            g = this.stp * e,
            a = Math.random();
        while (Math.abs(a - this.ibs) < 0.3) {
            a = Math.random()
        }
        this.ibs = a;
        var f = Math.round(a * (this.width - d));
        a = Math.random();
        var c = Math.round(a * (this.height - g));
        var b = new lnz({
            x: f,
            y: c
        }, this.parent.wrr.ark("firework"), this.context2D, d, g);
        this.ujx.push(b)
    };
    this.nqy = function (b) {
        this.xyu = true;
        this.lfn = 0;
        this.sjx = b;
        if (this.sjx >= this.parent.aah) {
            this.hmg = this.qgg;
            for (var c = 0, a = this.soo.length; c < a; c++) {
                this.aoc[c] = this.soo[c]
            }
            this.parent.wrr.dls("megawin");
            this.parent.sce(48);
            this.dmv = this.bum
        } else {
            if (this.sjx >= this.parent.wso) {
                this.hmg = this.ara;
                for (var c = 0, a = this.svw.length; c < a; c++) {
                    this.aoc[c] = this.svw[c]
                }
                this.parent.wrr.dls("bigwin");
                this.parent.sce(48);
                this.dmv = this.bhr
            } else {
                if (this.sjx >= this.parent.pwy) {
                    this.hmg = this.gsm;
                    for (var c = 0, a = this.qyi.length; c < a; c++) {
                        this.aoc[c] = this.qyi[c]
                    }
                    this.parent.wrr.dls("nicewin");
                    this.parent.sce(24);
                    this.dmv = this.php
                }
            }
        }
        this.dmv += (this.aoc.length - 1) * this.lwa;
        this.qot = 0;
        this.parent.zko(true);
        this.gri()
    };
    this.tbu = function () {
        this.xyu = false;
        clearInterval(this.ntc);
        if (this.sjx >= this.parent.aah) {
            this.parent.wrr.ulw("megawin")
        } else {
            if (this.sjx >= this.parent.wso) {
                this.parent.wrr.ulw("bigwin")
            } else {
                if (this.sjx >= this.parent.pwy) {
                    this.parent.wrr.ulw("nicewin")
                }
            }
        }
        this.vin();
        this.parent.zko(false);
        this.parent.zst()
    };
    this.dox = function (a, b, c) {
        this.nth = a;
        this.sqk = b;
        this.htz = c
    };
    this.pla = function () {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var d = this.context2D;
        d.save();
        d.clearRect(0, 0, this.width, this.height);
        d.lineWidth = this.bgh;
        d.lineCap = "round";
        d.lineJoin = "round";
        if (this.uaz) {
            this.woc()
        }
        if (this.ofn) {
            if (this.cni && this.iji && this.ycv) {
                for (var b = 0; b < this.pzd.length; b++) {
                    for (var f = 0; f < this.pzd[b].length; f++) {
                        if (this.pzd[b][f] != -1) {
                            if (this.otu) {
                                this.mli(b, f)
                            } else {
                                this.ppz(b, f)
                            }
                        }
                    }
                }
                if (this.ycv) {
                    this.quc(this.vov)
                }
                for (var c = this.wtm; c < this.wtm + this.xke; c++) {
                    if (this.zfu >= 0 && (this.pzd[c][this.ljd[this.vov][c] - 1] == this.zfu || this.parent.fez(this.pzd[c][this.ljd[this.vov][c] - 1]))) {
                        if (this.otu) {
                            this.mli(c, this.ljd[this.vov][c] - 1)
                        } else {
                            this.ppz(c, this.ljd[this.vov][c] - 1)
                        }
                    }
                }
            } else {
                if (this.cni && this.ycv) {
                    this.quc(this.vov)
                }
                for (var b = 0; b < this.pzd.length; b++) {
                    for (var f = 0; f < this.pzd[b].length; f++) {
                        if (this.pzd[b][f] != -1) {
                            if (this.otu) {
                                this.mli(b, f)
                            } else {
                                this.ppz(b, f)
                            }
                        }
                    }
                }
            }
            if (this.wak) {
                for (var b = 0; b < this.pzd.length; b++) {
                    for (var f = 0; f < this.pzd[b].length; f++) {
                        if (this.pzd[b][f] != -1) {
                            d.drawImage(this.wak, 0, f * this.ffd, this.wak.width, this.ffd, this.rze[b][f].x, this.rze[b][f].y, this.kwt, this.ffd)
                        }
                    }
                }
            }
            if (this.cni) {
                if (this.vov < 0) {
                    if (this.fye[this.fye.length - 2]) {
                        for (var b = 0; b < this.pzd.length; b++) {
                            for (var f = 0; f < this.pzd[b].length; f++) {
                                if (this.parent.hca >= 0 && this.pzd[b][f] == this.parent.hca) {
                                    this.dml(b, f, this.fye[this.fye.length - 2])
                                }
                            }
                        }
                    }
                } else {
                    for (var c = this.wtm; c < this.wtm + this.xke; c++) {
                        if (this.zfu >= 0 && (this.pzd[c][this.ljd[this.vov][c] - 1] == this.zfu || this.parent.fez(this.pzd[c][this.ljd[this.vov][c] - 1]))) {
                            this.dml(c, this.ljd[this.vov][c] - 1, this.fye[this.vov])
                        }
                    }
                }
            }
            if (this.xnf) {
                for (var e = 0, a = this.ujx.length; e < a; e++) {
                    this.ujx[e].pla()
                }
            }
        } else {
            if (this.xyu) {
                this.izi()
            }
        }
        d.restore();
        if (this.parent.ejc()) {
            if (this.dsp && this.lbg) {
                this.dsp.drawImage(this.lbg, this.x, this.y)
            }
        }
    };
    this.izi = function () {
        var l = this.context2D,
            f = this.parent.wrr.ark("wins"),
            b = (this.height / 2 - this.hmg.height) / 2,
            g = this.aoc[0],
            a = this.lfn % this.lwa,
            k = (a < this.csu) ? Math.floor(this.aoc[this.qot + 1] / this.csu) * a : this.aoc[this.qot + 1],
            j = (a < this.csu) ? Math.floor(this.hmg.height / this.csu) * a : this.hmg.height,
            c = 1,
            e = 5;
        l.save();
        if (this.lfn >= this.dmv - e) {
            c = (this.dmv - this.lfn) * (1 / e)
        }
        l.globalAlpha = c;
        for (var d = 0; d <= this.qot && d < this.aoc.length - 1; d++) {
            if (d == this.aoc.length - 2) {
                b += this.height / 2
            }
            if (d == this.qot) {
                l.drawImage(f, g, this.hmg.y, this.aoc[d + 1], this.hmg.height, ((this.width - this.aoc[d + 1]) / 2 + (this.aoc[d + 1] - k) / 2), (b + (this.hmg.height - j) / 2), k, j)
            } else {
                l.drawImage(f, g, this.hmg.y, this.aoc[d + 1], this.hmg.height, (this.width - this.aoc[d + 1]) / 2, b, this.aoc[d + 1], this.hmg.height)
            }
            g += this.aoc[d + 1]
        }
        l.restore()
    };
    this.woc = function () {
        if (this.wah) {
            this.idz = [];
            for (var b = 0; b < this.pzd.length; b++) {
                for (var d = 0; d < this.pzd[b].length; d++) {
                    if (this.pzd[b][d] != -1) {
                        this.ppz(b, d);
                        if (this.wak) {
                            this.context2D.drawImage(this.wak, 0, d * this.ffd, this.wak.width, this.ffd, this.rze[b][d].x, this.rze[b][d].y, this.kwt, this.ffd)
                        }
                    }
                }
            }
            for (var c = 0, a = this.wah.length; c < a; c++) {
                this.hvp(this.wah[c])
            }
        } else {
            for (var c = 0; c < this.parent.snl; c++) {
                this.quc(c)
            }
        }
    };
    this.quc = function (c) {
        var a = this.context2D;
        a.save();
        a.strokeStyle = (this.zzc) ? this.fye[c].opm : this.fye[c].wnu;
        a.lineWidth = this.bgh;
        a.beginPath();
        for (var b = 0; b < this.kzk[c].length; b++) {
            if (b == 0) {
                a.moveTo(this.kzk[c][b].x, this.kzk[c][b].y)
            } else {
                a.lineTo(this.kzk[c][b].x, this.kzk[c][b].y)
            }
        }
        a.moveTo(this.kzk[c][0].x, this.kzk[c][0].y);
        a.stroke();
        a.strokeStyle = (this.zzc) ? this.fye[c].klm : this.fye[c].fmt;
        a.lineWidth = this.bgh - 2 * this.emh;
        a.stroke();
        a.restore()
    };
    this.hvp = function (d) {
        var a = this.context2D,
            c = null;
        a.save();
        for (var b = 1; b < this.kzk[d].length; b++) {
            c = this.kzk[d][b - 1].x + "_" + this.kzk[d][b - 1].y + "_" + this.kzk[d][b].x + "_" + this.kzk[d][b].y;
            if (this.idz.indexOf(c) < 0) {
                this.idz.push(c);
                a.beginPath();
                a.moveTo(this.kzk[d][b - 1].x, this.kzk[d][b - 1].y);
                a.lineTo(this.kzk[d][b].x, this.kzk[d][b].y);
                a.moveTo(this.kzk[d][b - 1].x, this.kzk[d][b - 1].y);
                a.strokeStyle = (this.zzc) ? this.fye[this.fye.length - 1].opm : this.fye[this.fye.length - 1].wnu;
                a.lineWidth = this.bgh;
                a.stroke();
                a.strokeStyle = (this.zzc) ? this.fye[this.fye.length - 1].klm : this.fye[this.fye.length - 1].fmt;
                a.lineWidth = this.bgh - 2 * this.emh;
                a.stroke()
            }
        }
        a.restore()
    };
    this.mli = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.nth != null) {
            this.context2D.drawImage(this.nth, this.rze[a][c].x + this.sqk, this.rze[a][c].y + this.htz, this.kwt, this.ffd, this.rze[a][c].x, this.rze[a][c].y, this.kwt, this.ffd)
        }
        if (this.stt[this.pzd[a][c]].znu <= this.lfn) {
            b.drawImage(this.stt[this.pzd[a][c]].vuu, (this.stt[this.pzd[a][c]].znu - 1) * this.stt[this.pzd[a][c]].tut, 0, this.stt[this.pzd[a][c]].tut, this.stt[this.pzd[a][c]].uva, this.rze[a][c].x + (this.kwt - this.stt[this.pzd[a][c]].tut) / 2, this.rze[a][c].y + (this.ffd - this.stt[this.pzd[a][c]].uva) / 2, this.stt[this.pzd[a][c]].tut, this.stt[this.pzd[a][c]].uva)
        } else {
            b.drawImage(this.stt[this.pzd[a][c]].vuu, this.lfn * this.stt[this.pzd[a][c]].tut, 0, this.stt[this.pzd[a][c]].tut, this.stt[this.pzd[a][c]].uva, this.rze[a][c].x + (this.kwt - this.stt[this.pzd[a][c]].tut) / 2, this.rze[a][c].y + (this.ffd - this.stt[this.pzd[a][c]].uva) / 2, this.stt[this.pzd[a][c]].tut, this.stt[this.pzd[a][c]].uva)
        }
        b.restore()
    };
    this.ppz = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.nth != null) {
            this.context2D.drawImage(this.nth, this.rze[a][c].x + this.sqk, this.rze[a][c].y + this.htz, this.kwt, this.ffd, this.rze[a][c].x, this.rze[a][c].y, this.kwt, this.ffd)
        }
        b.drawImage(this.rtx[this.pzd[a][c]], this.rze[a][c].x + (this.kwt - this.rtx[this.pzd[a][c]].width) / 2, this.rze[a][c].y + (this.ffd - this.rtx[this.pzd[a][c]].height) / 2);
        b.restore()
    };
    this.dml = function (a, d, c) {
        var b = this.context2D;
        b.save();
        if (c) {
            b.lineWidth = this.nnn;
            b.strokeStyle = (this.zzc) ? c.opm : c.wnu;
            b.strokeRect(this.rze[a][d].x + this.nnn / 2, this.rze[a][d].y + this.nnn / 2, this.kwt - this.nnn, this.ffd - this.nnn);
            b.strokeStyle = (this.zzc) ? c.klm : c.fmt;
            b.lineWidth = this.nnn - 2 * this.emh;
            b.strokeRect(this.rze[a][d].x + this.nnn / 2, this.rze[a][d].y + this.nnn / 2, this.kwt - this.nnn, this.ffd - this.nnn)
        }
        b.restore()
    }
}
dee.prototype = new ebm;

function ixc() {
    var a = this;
    this.ocv = function () {
        this.ynn();
        this.ntc = setInterval(a.ynn, a.gqi)
    };
    this.ynn = function () {
        a.hsn()
    };
    this.tha = function () {
        this.jqi = setTimeout(a.qsv, a.zop)
    };
    this.qsv = function () {
        a.gkv()
    };
    this.gri = function () {
        this.ntc = setInterval(this.gkl, 60)
    };
    this.gkl = function () {
        if (a.lfn < a.dmv) {
            a.lfn++;
            if ((a.lfn % (a.lwa)) == 0) {
                a.qot++
            }
            a.parent.pla()
        } else {
            a.tbu()
        }
    }
}
ixc.prototype = new dee;

function yeu() {
    var a = this;
    this.zct = 0;
    this.sza = 1;
    this.aoz = 7;
    this.wvu = 0;
    this.opg = 0;
    this.msf = 0;
    this.pjd = 0;
    this.cen = this.zct;
    this.ipb = this.zed;
    this.nsb = function () {
        this.oac(true);
        this.lxy = true;
        this.cxv = false;
        this.cen = this.zct;
        this.opg = Math.floor(this.width / this.aoz);
        this.pjd = 0;
        this.msf = 0
    };
    this.qid = function () {
        this.lxy = true;
        this.cxv = false;
        this.cen = this.sza;
        this.opg = -Math.floor(this.width / this.aoz);
        this.pjd = 1;
        this.msf = this.width
    };
    this.vhp = function () {
        if (a.pjd < a.aoz) {
            a.msf += a.opg;
            a.pjd++;
            return true
        } else {
            a.lxy = false;
            a.cxv = true;
            if (a.cen == a.sza) {
                a.oac(false)
            }
            return false
        }
    };
    this.dls = function () {
        if (this.xen == this.prv) {
            this.parent.wrr.dls("maxstep")
        } else {
            this.parent.wrr.dls("step" + (this.xen % 12))
        }
    };
    this.dcq = function (b, d) {
        var c = false;
        this.xen = b;
        if (this.xen < this.yim) {
            c = true;
            this.xen = this.yim
        }
        if (this.xen >= this.prv) {
            c = true;
            this.xen = this.prv
        }
        this.jiu = this.xen + 1;
        if (c) {
            this.jvb(this.xen)
        }
        if (d && d === true) {
            this.parent.pla()
        }
    };
    this.aga = function () {
        a.zjm = false
    };
    this.pla = function () {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        this.hrm();
        if (this.dsp && this.lbg) {
            if (this.lxy) {
                if (this.msf > 0) {
                    if (this.ipb === this.bpq) {
                        this.dsp.drawImage(this.lbg, this.width - this.msf, 0, this.msf, this.height, this.x, this.y, this.msf, this.height)
                    } else {
                        if (this.ipb === this.zed) {
                            this.dsp.drawImage(this.lbg, 0, 0, this.msf, this.height, this.x + this.width - this.msf, this.y, this.msf, this.height)
                        }
                    }
                }
            } else {
                this.dsp.drawImage(this.lbg, this.x, this.y)
            }
        }
    };
    this.zov = function (c) {
        var f = this.vab,
            e = this.vab,
            b = 0,
            d = 0;
        if (this.ipb === this.zed) {
            b = this.cwd;
            d = this.dwi.x - 2 * this.cwd
        } else {
            if (this.ipb === this.bpq) {
                b = this.dwi.x + this.dwi.width + this.cwd;
                d = this.width - this.cwd - (this.dwi.x + this.dwi.width + this.cwd)
            }
        }
        if (this.xen > 0 && this.xen < this.mqf.length - 1) {
            dac.fip.dml(c, b, this.dwi.y + ((this.whm - this.jiu) * this.jgm), d, this.jgm, this.dwb, this.jol);
            dac.fip.qrp(c, this.parent.eik(this.mqf[this.xen]), this.tnm, b, this.dwi.y + ((this.whm - this.jiu) * this.jgm) + (this.jgm - this.zhg) / 2, d, this.zhg, this.aym, this.zhg, this.tsk, this.cwd)
        } else {
            if (this.xen == 0) {
                f = this.tnm
            } else {
                if (this.xen == this.mqf.length - 1) {
                    e = this.tnm
                }
            }
        }
        dac.fip.dml(c, b, this.dwi.y + (this.jgm * (this.whm - 1)), d, this.jgm, this.dwb, this.jol);
        dac.fip.qrp(c, this.parent.eik(this.mqf[0]), f, b, this.dwi.y + (this.jgm * (this.whm - 1)) + (this.jgm - this.zhg) / 2, d, this.zhg, this.aym, this.zhg, this.tsk, this.cwd);
        dac.fip.dml(c, b, this.dwi.y, d, this.jgm, this.dwb, this.jol);
        dac.fip.qrp(c, this.parent.eik(this.mqf[this.mqf.length - 1]), e, b, this.dwi.y + (this.jgm - this.zhg) / 2, d, this.zhg, this.aym, this.zhg, this.tsk, this.cwd);
        dac.fip.mxc(c, "+", this.vab, this.kos.x, this.kos.y, this.kos.width, this.kos.height, this.aym, this.zhg, this.tsk);
        dac.fip.mxc(c, "", this.vab, this.xof.x, this.xof.y, this.xof.width, this.xof.height, this.aym, this.zhg, this.tsk);
        if (this.xfh) {
            dac.fip.mxc(c, this.xfh, this.vab, this.tug.x, this.tug.y, this.tug.width, this.tug.height, this.aym, this.zhg, this.tsk)
        }
    }
}
yeu.prototype = new psb;

function pum() {
    var a = this;
    this.zct = 0;
    this.sza = 1;
    this.aoz = 7;
    this.wvu = 0;
    this.opg = 0;
    this.msf = 0;
    this.pjd = 0;
    this.cen = this.zct;
    this.nsb = function () {
        this.oac(true);
        this.lxy = true;
        this.cxv = false;
        this.cen = this.zct;
        this.opg = Math.floor(this.width / this.aoz);
        this.pjd = 0;
        this.msf = 0
    };
    this.qid = function () {
        this.lxy = true;
        this.cxv = false;
        this.cen = this.sza;
        this.opg = -Math.floor(this.width / this.aoz);
        this.pjd = 1;
        this.msf = this.width
    };
    this.vhp = function () {
        if (a.pjd < a.aoz) {
            a.msf += a.opg;
            a.pjd++;
            return true
        } else {
            a.lxy = false;
            a.cxv = true;
            if (a.cen == a.sza) {
                a.oac(false)
            }
            return false
        }
    };
    this.dls = function () {
        if (this.xen == this.prv) {
            this.parent.wrr.dls("maxstep")
        } else {
            this.parent.wrr.dls("step" + (this.xen % 12))
        }
    };
    this.aga = function () {
        a.zjm = false
    };
    this.pla = function () {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        this.hrm();
        if (this.dsp && this.lbg) {
            if (this.lxy) {
                if (this.msf > 0) {
                    if (this.ipb === this.bpq) {
                        this.dsp.drawImage(this.lbg, this.width - this.msf, 0, this.msf, this.height, this.x, this.y, this.msf, this.height)
                    } else {
                        if (this.ipb === this.zed) {
                            this.dsp.drawImage(this.lbg, 0, 0, this.msf, this.height, this.x + this.width - this.msf, this.y, this.msf, this.height)
                        }
                    }
                }
            } else {
                this.dsp.drawImage(this.lbg, this.x, this.y)
            }
        }
    };
    this.zov = function (c) {
        var f = this.vab,
            e = this.vab,
            b = 0,
            d = 0;
        if (this.ipb === this.zed) {
            b = this.cwd;
            d = this.dwi.x - 2 * this.cwd
        } else {
            if (this.ipb === this.bpq) {
                b = this.dwi.x + this.dwi.width + this.cwd;
                d = this.width - this.cwd - (this.dwi.x + this.dwi.width + this.cwd)
            }
        }
        if (this.xen > 0 && this.xen < this.mqf.length - 1) {
            dac.fip.dml(c, b, this.dwi.y + ((this.whm - this.jiu) * this.jgm), d, this.jgm, this.dwb, this.jol);
            dac.fip.bhn(c, this.mqf[this.xen], this.tnm, b, this.dwi.y + ((this.whm - this.jiu) * this.jgm) + (this.jgm - this.zhg) / 2, d, this.zhg, this.aym, this.zhg, this.tsk, this.cwd)
        } else {
            if (this.xen == 0) {
                f = this.tnm
            } else {
                if (this.xen == this.mqf.length - 1) {
                    e = this.tnm
                }
            }
        }
        dac.fip.dml(c, b, this.dwi.y + (this.jgm * (this.whm - 1)), d, this.jgm, this.dwb, this.jol);
        dac.fip.bhn(c, this.mqf[0], f, b, this.dwi.y + (this.jgm * (this.whm - 1)) + (this.jgm - this.zhg) / 2, d, this.zhg, this.aym, this.zhg, this.tsk, this.cwd);
        dac.fip.dml(c, b, this.dwi.y, d, this.jgm, this.dwb, this.jol);
        dac.fip.bhn(c, this.mqf[this.mqf.length - 1], e, b, this.dwi.y + (this.jgm - this.zhg) / 2, d, this.zhg, this.aym, this.zhg, this.tsk, this.cwd);
        dac.fip.mxc(c, "+", this.vab, this.kos.x, this.kos.y, this.kos.width, this.kos.height, this.aym, this.zhg, this.tsk);
        dac.fip.mxc(c, "", this.vab, this.xof.x, this.xof.y, this.xof.width, this.xof.height, this.aym, this.zhg, this.tsk);
        if (this.xfh) {
            dac.fip.mxc(c, this.xfh, this.vab, this.tug.x, this.tug.y, this.tug.width, this.tug.height, this.aym, this.zhg, this.tsk)
        }
    }
}
pum.prototype = new psb;

function ilb() {
    this.via = new Image();
    this.qol = [];
    this.qkj = 0;
    this.pxj = 0;
    this.goc = [];
    this.ted = 0;
    this.ytg = 0;
    this.yks = 0;
    this.lhw = [];
    this.nth = null;
    this.sqk = 0;
    this.htz = 0;
    this.sov = function (a) {
        try {
            this.lhw = a.kdd;
            this.ytg = a.ruj;
            this.yks = a.zuh
        } catch (b) {
            console.error(b)
        }
    };
    this.yez = function (b, f, c) {
        var e = this.parent.kxp.myd.znq("line"),
            a = this.parent.hed.znq("betsel"),
            d = this.parent.hed.znq("linesel");
        if (b >= this.x && b <= this.x + this.width && f >= this.y && f <= this.y + this.height && this.nnj() === true) {
            if (e && e.yij() && !e.ijp()) {
                if (!c) {
                    this.parent.wrr.ulw("panel");
                    this.parent.wrr.dls("panel");
                    if ((a && a.yij()) && ((d && d.yij()) || !d)) {
                        this.parent.qnn()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.pla = function () {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var c = this.context2D,
            e = false;
        if (this.nth != null) {
            c.drawImage(this.nth, this.x + this.sqk, this.y + this.htz, this.width, this.height, this.x, this.y, this.width, this.height)
        }
        if (this.goc.length > 0) {
            for (var f = this.qkj - 1, d = 0; f <= this.pxj - 1; f++, d++) {
                e = false;
                for (var b = 0, a = this.goc.length; b < a; b++) {
                    if (this.qol[f] === this.goc[b]) {
                        e = true;
                        c.drawImage(this.via, 0, this.via.height / 2 + (this.qol[f] - 1) * this.yks, this.ytg, this.yks, this.x, this.y + this.lhw[d], this.ytg, this.yks)
                    }
                }
                if (e === false) {
                    c.drawImage(this.via, 0, (this.qol[f] - 1) * this.yks, this.ytg, this.yks, this.x, this.y + this.lhw[d], this.ytg, this.yks)
                }
            }
        } else {
            for (var f = this.qkj - 1, d = 0; f <= this.pxj - 1; f++, d++) {
                if (this.qol[f] <= this.ted) {
                    c.drawImage(this.via, 0, this.via.height / 2 + (this.qol[f] - 1) * this.yks, this.ytg, this.yks, this.x, this.y + this.lhw[d], this.ytg, this.yks)
                } else {
                    c.drawImage(this.via, 0, (this.qol[f] - 1) * this.yks, this.ytg, this.yks, this.x, this.y + this.lhw[d], this.ytg, this.yks)
                }
            }
        }
    };
    this.rvo = function (a, b) {
        this.ted = a;
        if (b && b === true) {
            this.pla()
        }
    };
    this.vfo = function (b, d) {
        this.goc = [];
        if (b) {
            for (var c = 0, a = b.length; c < a; c++) {
                this.goc[c] = b[c]
            }
        }
        if (d && d === true) {
            this.pla()
        }
    };
    this.xxy = function (a) {
        this.via = a;
        this.width = this.ytg;
        this.height = this.lhw[this.lhw.length - 1] + this.yks;
        this.cqz(new xop(this.x, this.y, this.width, this.height))
    };
    this.dox = function (a, b, c) {
        this.nth = a;
        this.sqk = b;
        this.htz = c
    }
}
ilb.prototype = new ebm;

function yum(g, c, f, e, j, a, d, b) {
    this.qjn = g;
    this.nyt = f;
    this.dzf = e;
    this.zyz = j;
    this.naq = c;
    this.cya = a;
    this.tfj = d;
    this.icl = b;
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
    this.joe = [];
    this.inb = [];
    this.vfn = [];
    this.ump = [];
    this.vzn = [];
    this.zsg = [];
    this.lku = 5;
    this.jcw = [];
    this.cgs = [];
    this.pkz = [];
    this.uuj = [];
    this.vzo = [];
    this.ukt = [];
    this.thw = [];
    this.dwz = [];
    this.wcj = [];
    this.ynr = [];
    this.zdy = [];
    this.lea = [];
    this.kwj = [];
    this.qov = [];
    this.cfp = [];
    this.exn = [];
    this.dpf = [];
    this.fge = [];
    this.srx = [];
    this.szl = [];
    this.qpy = 0;
    this.dzc = 0;
    this.win = 0;
    this.dto = 0;
    this.myk = 0;
    this.kii = 0;
    this.snl = 0;
    this.xbh = 0;
    this.pjz = 0;
    this.xwz = 0;
    this.wvm = 1;
    this.iue = 1;
    this.zia = 0;
    this.aas = 0;
    this.ijz = 0;
    this.qex = 0;
    this.kew = 0;
    this.qvw = 1;
    this.ohd = 1;
    this.gku = 0;
    this.bzy = 0;
    this.opy = 0;
    this.hjv = 0;
    this.xiz = "";
    this.rjo = "";
    this.jxv = "";
    this.dgc = "";
    this.bjg = 0;
    this.uxh = function (k) {
        return this.mgn(k)
    };
    this.owz = function (o) {
        if (o != null) {
            this.mag = 0;
            this.ydu = this.lya(o);
            if (this.ydu == 0) {
                this.rl = this.lya(o);
                this.r1 = this.uxh(o);
                this.r2 = this.uxh(o);
                this.r3 = this.uxh(o);
                if (this.rl >= 4) {
                    this.r4 = this.uxh(o)
                }
                if (this.rl >= 5) {
                    this.r5 = this.uxh(o)
                }
                if (this.rl >= 6) {
                    this.r6 = this.uxh(o)
                }
                if (this.rl >= 7) {
                    this.r7 = this.uxh(o)
                }
                if (this.rl >= 8) {
                    this.r8 = this.uxh(o)
                }
                if (this.rl >= 9) {
                    this.r9 = this.uxh(o)
                }
                if (this.rl >= 10) {
                    this.joe = this.uxh(o)
                }
                if (this.rl >= 11) {
                    this.inb = this.uxh(o)
                }
                if (this.rl >= 12) {
                    this.vfn = this.uxh(o)
                }
                if (this.rl >= 13) {
                    this.ump = this.uxh(o)
                }
                if (this.rl >= 14) {
                    this.vzn = this.uxh(o)
                }
                if (this.rl >= 15) {
                    this.zsg = this.uxh(o)
                }
                this.lku = this.lya(o);
                if (this.lku > 0) {
                    this.jcw = this.uxh(o);
                    this.cgs = this.uxh(o);
                    this.pkz = this.uxh(o);
                    if (this.lku >= 4) {
                        this.uuj = this.uxh(o)
                    }
                    if (this.lku >= 5) {
                        this.vzo = this.uxh(o)
                    }
                    if (this.lku >= 6) {
                        this.ukt = this.uxh(o)
                    }
                    if (this.lku >= 7) {
                        this.thw = this.uxh(o)
                    }
                    if (this.lku >= 8) {
                        this.dwz = this.uxh(o)
                    }
                    if (this.lku >= 9) {
                        this.wcj = this.uxh(o)
                    }
                    if (this.lku >= 10) {
                        this.ynr = this.uxh(o)
                    }
                    if (this.lku >= 11) {
                        this.zdy = this.uxh(o)
                    }
                    if (this.lku >= 12) {
                        this.lea = this.uxh(o)
                    }
                    if (this.lku >= 13) {
                        this.kwj = this.uxh(o)
                    }
                    if (this.lku >= 14) {
                        this.qov = this.uxh(o)
                    }
                    if (this.lku >= 15) {
                        this.cfp = this.uxh(o)
                    }
                }
                this.otv = this.sez(o);
                this.hcf = this.lya(o);
                for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                    this.exn[l] = this.klv(o)
                }
                this.qpy = this.klv(o);
                this.dzc = this.klv(o);
                this.win = this.klv(o);
                this.kii = this.sez(o);
                this.dto = this.klv(o);
                this.myk = this.klv(o);
                this.snl = this.sez(o);
                this.xbh = this.klv(o);
                this.pjz = this.klv(o);
                this.xwz = this.klv(o);
                this.wvm = this.klv(o);
                this.iue = this.klv(o);
                this.zia = this.klv(o);
                this.aas = this.klv(o);
                this.ijz = this.sez(o);
                this.qex = this.sez(o);
                this.kew = this.sez(o);
                this.qvw = this.klv(o);
                this.ohd = this.sez(o);
                
                
                
                
                
                for (var l = 0, k = (this.lku < 5) ? 5 : this.lku; l < k; l++) {
                    this.dpf[l] = this.klv(o)
                }
                for (var l = 0; l < 8; l++) {
                    this.fge[l] = this.sez(o)
                }
                var p = this.sez(o);
                for (var l = 0; l < p; l++) {
                    this.srx[l] = this.klv(o)
                }
                var n = this.sez(o);
                for (var l = 0; l < n; l++) {
                    this.szl[l] = this.klv(o)
                }
                this.ghk(o);
                if (this.otv == 0) {
                    this.eyd("A/u250")
                } else {
                    this.vjx.jfe()
                }
            } else {
                if (this.ydu == 1) {
                    this.otv = this.sez(o);
                    this.hcf = this.lya(o);
                    this.qpy = this.klv(o);
                    this.dzc = this.klv(o);
					fackStep = Math.floor(Math.random() * 10)+1;
                    fakeJack += fackStep;
                    this.win = this.klv(o);
                    for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                        this.exn[l] = this.klv(o)
                    }
                    this.kii = this.sez(o);
                    this.snl = this.sez(o);
                    this.xbh = this.klv(o);
                    this.pjz = this.klv(o);
                    this.xwz = this.klv(o);
                    this.wvm = this.klv(o);
                    this.iue = this.klv(o);
                    this.zia = this.klv(o);
                    for (var l = 0, k = (this.lku < 5) ? 5 : this.lku; l < k; l++) {
                        this.dpf[l] = this.klv(o)
                    }
                    var n = this.sez(o);
                    for (var l = 0; l < n; l++) {
                        this.szl[l] = this.klv(o)
                    }
                    for (var l = 0; l < 8; l++) {
                        this.fge[l] = this.sez(o)
                    }
                    this.ghk(o);
                    if (this.hcf == 0) {
                        if (this.otv == dac.qxv.vbw.zue) {
                            this.vjx.jfe()
                        } else {
                            if (this.otv == dac.qxv.vbw.uwm) {
                                this.vjx.tin()
                            } else {
                                if (this.otv == dac.qxv.vbw.kcg) {
                                    this.vjx.tjr()
                                } else {
                                    if (this.otv == dac.qxv.vbw.xqa) {
                                        this.vjx.ysh()
                                    } else {
                                        if (this.otv == dac.qxv.vbw.jgp) {
                                            this.vjx.xiu()
                                        } else {
                                            if (this.otv == dac.qxv.vbw.edf) {
                                                this.vjx.hik()
                                            } else {
                                                if (this.otv == dac.qxv.vbw.zmk) {
                                                    this.vjx.rbu()
                                                } else {
                                                    if (this.otv == dac.qxv.vbw.poz) {
                                                        this.vjx.wks()
                                                    } else {
                                                        if (this.otv == dac.qxv.vbw.rwt) {
                                                            this.vjx.whp()
                                                        } else {
                                                            if (this.otv == dac.qxv.vbw.qsb) {
                                                                this.vjx.pwm()
                                                            } else {
                                                                if (this.otv == dac.qxv.vbw.qrt) {
                                                                    this.vjx.uot()
                                                                } else {
                                                                    if (this.otv == dac.qxv.vbw.lto) {
                                                                        this.vjx.amq()
                                                                    } else {
                                                                        if (this.otv == dac.qxv.vbw.gyk) {
                                                                            this.vjx.rvf()
                                                                        } else {
                                                                            this.bou()
                                                                        }
                                                                    }
                                                                }
                                                            }
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
                        this.vjx.xjt(this.hcf)
                    }
                } else {
                    if (this.ydu == 2) {} else {
                        if (this.ydu == 3) {
                            this.dzc = this.klv(o);
                            this.vjx.lxo()
                        } else {
                            if (this.ydu === 6 || this.ydu === 7) {
                                this.ddk(o.substring(this.mag))
                            } else {
                                if (this.ydu === 8) {
                                    this.eyd("8")
                                } else {
                                    if (this.ydu == 9) {
                                        this.vjx.gwv.tme = o.substring(this.mag)
                                    } else {
                                        if (this.ydu == 10) {
                                            var m = JSON.parse(o.substring(this.mag)).Message;
                                            for (var l = 0, k = m.length; l < k; l++) {
                                                if (m[l].DisplayType == dac.chu.zdn.lqs) {
                                                    this.ezz.push(m[l])
                                                }
                                            }
                                            if (this.ezz.length > 0) {
                                                this.vjx.kzo()
                                            }
                                        } else {
                                            this.ucb = this.lya(o);
                                            this.vjx.edb(o.substring(2))
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
    this.ghk = function (t) {
        var l = null,
            n = [],
            q = null,
            v = null,
            o = null,
            m = null,
            p = null,
            k = null;
        if (this.ydu == 0) {
            l = this.nfd(t);
            if (l != "") {
                n = l.split("#");
                if (n.length >= 1) {
                    q = n[0].split("|");
                    this.rjo = q[0];
                    if (q.length > 1) {
                        this.jxv = q[1];
                        if (q.length > 2) {
                            this.dgc = q[2]
                        }
                    }
                    if (n.length >= 2) {
                        v = n[1].split("|");
                        if (v.length >= 1) {
                            m = v[0];
                            this.mag = 0;
                            this.gku = this.sez(m);
                            this.bzy = this.klv(m);
                            this.opy = this.klv(m);
                            this.hjv = this.klv(m);
                            this.xiz = this.nfd(m);
                            if (v.length >= 2) {
                                k = v[1];
                                if (k) {
                                    this.bjg = parseFloat(k)
                                }
                            }
                        }
                    }
                }
            }
            if (dac.ewv.value21.e === true && dac.ewv.value21.s) {
                if (this.bjg == 0) {
                    this.rjo = ""
                } else {
                    if (this.bjg != 0 && dac.ewv.value21.m == 1) {
                        this.rjo = ""
                    }
                }
            }
        } else {
            l = this.nfd(t);
            if (l != "") {
                n = l.split("#");
                if (n.length > 1) {
                    m = n[1];
                    o = n[1].split("|{");
                    m = o[0];
                    if (m) {
                        this.mag = 0;
                        this.bzy = this.klv(m);
                        this.opy = this.klv(m);
                        this.hjv = this.klv(m)
                    }
                    if (o.length > 1) {
                        p = "{" + o[1];
                        var r = JSON.parse(p).Message;
                        this.xlg.length = 0;
                        this.inu.length = 0;
                        for (var s = 0, u = r.length; s < u; s++) {
                            if (r[s].DisplayType == dac.chu.zdn.usf) {
                                this.inu.push(r[s])
                            } else {
                                if (r[s].DisplayType == dac.chu.zdn.lqs) {
                                    this.xlg.push(r[s])
                                }
                            }
                        }
                    }
                    if (this.inu.length > 0) {
                        this.vjx.bfl()
                    }
                }
            }
        }
    };
    this.bou = function () {};
    this.play = function (l, k, m) {
        this.eyd("A/u251," + l + "," + k + "," + m)
    };
    this.ffo = function () {
        this.eyd("A/u254")
    };
    this.lam = function () {
        this.eyd("A/u258")
    };
    this.jzz = function (k) {
        this.eyd("A/u257," + k)
    };
    this.mdy = function (l, k, m) {
        this.eyd("A/u256," + l + "," + k + "," + m)
    }
}
yum.prototype = new jqh;

function grd() {
    this.zky = function (a, b) {
        this.qjn = b;
        this.gwv = a;
        return this
    };
    this.connect = function (c, f, e, g, a, d, b) {
        this.nyt = f;
        this.dzf = e;
        this.zyz = g;
        this.naq = c;
        this.tfj = d;
        this.icl = b;
        this.knp = new yum(this.qjn, c, f, e, g, a, d, b);
        this.knp.zky(this)
    };
    this.play = function (b, a, c) {
        this.knp.play(b, a, c)
    };
    this.mdy = function (b, a, c) {
        this.knp.mdy(b, a, c)
    };
    this.ffo = function () {
        this.knp.ffo()
    };
    this.lam = function () {
        this.knp.lam()
    };
    this.jzz = function (a) {
        this.knp.jzz(a)
    };
    this.jfe = function () {
        var c = this.knp.otv;
        this.gwv.r1 = this.knp.r1;
        this.gwv.r2 = this.knp.r2;
        this.gwv.r3 = this.knp.r3;
        this.gwv.r4 = this.knp.r4;
        this.gwv.r5 = this.knp.r5;
        this.gwv.r6 = this.knp.r6;
        this.gwv.r7 = this.knp.r7;
        this.gwv.r8 = this.knp.r8;
        this.gwv.r9 = this.knp.r9;
        this.gwv.joe = this.knp.joe;
        this.gwv.inb = this.knp.inb;
        this.gwv.vfn = this.knp.vfn;
        this.gwv.ump = this.knp.ump;
        this.gwv.vzn = this.knp.vzn;
        this.gwv.zsg = this.knp.zsg;
        if (c == dac.qxv.vbw.jgp || c == dac.qxv.vbw.edf || c == dac.qxv.vbw.zmk || c == dac.qxv.vbw.poz || c == dac.qxv.vbw.rwt) {
            this.gwv.r1 = this.knp.jcw;
            this.gwv.r2 = this.knp.cgs;
            this.gwv.r3 = this.knp.pkz;
            this.gwv.r4 = this.knp.uuj;
            this.gwv.r5 = this.knp.vzo;
            this.gwv.r6 = this.knp.ukt;
            this.gwv.r7 = this.knp.thw;
            this.gwv.r8 = this.knp.dwz;
            this.gwv.r9 = this.knp.wcj;
            this.gwv.joe = this.knp.ynr;
            this.gwv.inb = this.knp.zdy;
            this.gwv.vfn = this.knp.lea;
            this.gwv.ump = this.knp.kwj;
            this.gwv.vzn = this.knp.qov;
            this.gwv.zsg = this.knp.cfp
        }
        this.gwv.wmd = this.knp.exn;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.dto = this.knp.dto;
        this.gwv.myk = this.knp.myk;
        this.gwv.qex = this.knp.qex;
        this.gwv.kew = this.knp.kew;
        if (this.ozu()) {
            for (var b = 0, a = this.knp.srx.length; b < a && this.knp.srx[b] <= this.knp.myk; b++) {
                this.gwv.srx[b] = this.knp.srx[b]
            }
        } else {
            for (var b = 0, a = this.knp.srx.length; b < a && this.knp.srx[b] * this.knp.ijz <= this.knp.myk; b++) {
                this.gwv.srx[b] = this.knp.srx[b]
            }
        }
        if (c == dac.qxv.vbw.zue || ((c == dac.qxv.vbw.uwm || c == dac.qxv.vbw.qrt) && this.knp.win == 0) || c == dac.qxv.vbw.kcg || c == dac.qxv.vbw.qsb || c == dac.qxv.vbw.rwt) {
            this.gwv.kul = true
        } else {
            this.gwv.kul = false
        }
        this.gwv.snl = this.knp.snl;
        this.gwv.ayi = this.knp.kii;
        this.gwv.uqc = this.gwv.srx[this.gwv.ayi];
        this.gwv.win = this.knp.win;
        for (var b = 0; b < this.knp.szl.length; b++) {
            this.gwv.kzh[b] = this.knp.szl[b]
        }
        this.gwv.fix = this.knp.dpf;
        this.gwv.xwz = this.knp.xwz;
        this.gwv.zia = this.knp.zia;
        this.gwv.pjz = this.knp.pjz;
        this.gwv.xbh = this.knp.xbh;
        this.gwv.szu = this.knp.xbh;
        this.gwv.wvm = this.knp.wvm;
        this.mqv();
        this.gwv.lxt();
        this.gwv.fnv(c, this.knp.fge, this.knp.qpy)
    };
    this.tin = function () {
        this.gwv.zdh({
            type: "roundStarted",
            sender: this.gwv.naq,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.gwv.eik(this.gwv.dzc)
            }
        });
        this.gwv.state = this.knp.otv;
        this.gwv.wmd = this.knp.exn;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.snl = this.knp.snl;
        this.gwv.ayi = this.knp.kii;
        this.gwv.win = this.knp.win;
        for (var a = 0; a < this.knp.szl.length; a++) {
            this.gwv.kzh[a] = this.knp.szl[a]
        }
        if (this.gwv.gji && this.gwv.win > 0) {
            this.gwv.gji.myd.mpx("history", "#ner", [this.knp.fge])
        }
        this.gwv.tfl = false;
        this.mqv();
        this.gwv.wdl();
        this.gwv.gow(this.knp.qpy)
    };
    this.tjr = function () {
        this.gwv.state = this.knp.otv;
        this.gwv.dzc = this.knp.dzc;
        this.kzb = false;
        this.mqv();
        this.gwv.rzg();
        this.gwv.gow(this.knp.qpy)
    };
    this.pwm = function () {
        this.gwv.zdh({
            type: "roundStarted",
            sender: this.gwv.naq,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.gwv.eik(this.gwv.dzc)
            }
        });
        this.gwv.state = this.knp.otv;
        this.gwv.wmd = this.knp.exn;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.snl = this.knp.snl;
        this.gwv.ayi = this.knp.kii;
        this.gwv.win = this.knp.win;
        for (var a = 0; a < this.knp.szl.length; a++) {
            this.gwv.kzh[a] = this.knp.szl[a]
        }
        this.gwv.tfl = false;
        if (this.gwv.gji && this.gwv.win > 0) {
            this.gwv.gji.ner(this.knp.fge[0], this.knp.fge, true)
        }
        this.mqv();
        this.gwv.fef();
        this.gwv.gow(this.knp.qpy)
    };
    this.uot = function () {
        this.gwv.state = this.knp.otv;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.win = this.knp.win;
        if (this.gwv.gji) {
            this.gwv.gji.ner(this.knp.fge[0], this.knp.fge, false)
        }
        this.gwv.yqv();
        this.gwv.gow(this.knp.qpy)
    };
    this.amq = function () {
        this.gwv.state = this.knp.otv;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.win = this.knp.win;
        this.gwv.bvv();
        this.gwv.gow(this.knp.qpy)
    };
    this.ysh = function () {
        this.gwv.zdh({
            type: "roundStarted",
            sender: this.gwv.naq,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.gwv.eik(this.gwv.dzc)
            }
        });
        this.gwv.state = this.knp.otv;
        this.gwv.wmd = this.knp.exn;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.snl = this.knp.snl;
        this.gwv.ayi = this.knp.kii;
        this.gwv.win = this.knp.win;
        for (var a = 0; a < this.knp.szl.length; a++) {
            this.gwv.kzh[a] = this.knp.szl[a]
        }
        this.gwv.tfl = (this.knp.xbh > this.gwv.xbh);
        this.gwv.xwz = this.knp.xwz;
        this.gwv.zia = this.knp.zia;
        this.gwv.pjz = this.knp.pjz;
        this.gwv.xbh = this.knp.xbh;
        this.gwv.szu = this.knp.xbh;
        this.gwv.wvm = this.knp.wvm;
        this.mqv();
        this.gwv.nzr();
        this.gwv.gow(this.knp.qpy)
    };
    this.xiu = function () {
        this.gwv.state = this.knp.otv;
        this.gwv.fix = this.knp.dpf;
        this.gwv.wmd = this.knp.exn;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.snl = this.knp.snl;
        this.gwv.ayi = this.knp.kii;
        this.gwv.win = this.knp.win;
        for (var a = 0; a < this.knp.szl.length; a++) {
            this.gwv.kzh[a] = this.knp.szl[a]
        }
        this.gwv.tfl = (this.knp.xbh > this.gwv.xbh);
        this.gwv.xwz = this.knp.xwz;
        this.gwv.zia = this.knp.zia;
        this.gwv.pjz = this.knp.pjz;
        this.gwv.xbh = this.knp.xbh;
        this.gwv.szu = this.knp.xbh;
        this.gwv.wvm = this.knp.wvm;
        this.mqv();
        this.gwv.seq();
        this.gwv.gow(this.knp.qpy)
    };
    this.hik = function () {
        this.gwv.state = this.knp.otv;
        this.gwv.fix = this.knp.dpf;
        this.gwv.wmd = this.knp.exn;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.snl = this.knp.snl;
        this.gwv.ayi = this.knp.kii;
        this.gwv.win = this.knp.win;
        for (var a = 0; a < this.knp.szl.length; a++) {
            this.gwv.kzh[a] = this.knp.szl[a]
        }
        this.gwv.tfl = (this.knp.xbh > this.gwv.xbh);
        this.gwv.szu = this.gwv.xbh;
        this.gwv.xwz = this.knp.xwz;
        this.gwv.zia = this.knp.zia;
        this.gwv.pjz = this.knp.pjz;
        this.gwv.xbh = this.knp.xbh;
        this.gwv.wvm = this.knp.wvm;
        this.mqv();
        this.gwv.gye();
        this.gwv.gow(this.knp.qpy)
    };
    this.rbu = function () {
        this.gwv.state = this.knp.otv;
        this.gwv.fix = this.knp.dpf;
        this.gwv.wmd = this.knp.exn;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.snl = this.knp.snl;
        this.gwv.ayi = this.knp.kii;
        this.gwv.win = this.knp.win;
        for (var a = 0; a < this.knp.szl.length; a++) {
            this.gwv.kzh[a] = this.knp.szl[a]
        }
        this.gwv.tfl = (this.knp.xbh > this.gwv.xbh);
        this.gwv.szu = this.gwv.xbh;
        this.gwv.xwz = this.knp.xwz;
        this.gwv.zia = this.knp.zia;
        this.gwv.pjz = this.knp.pjz;
        this.gwv.xbh = this.knp.xbh;
        this.gwv.wvm = this.knp.wvm;
        this.mqv();
        this.gwv.qmp();
        this.gwv.gow(this.knp.qpy)
    };
    this.wks = function () {
        this.gwv.state = this.knp.otv;
        this.gwv.fix = this.knp.dpf;
        this.gwv.wmd = this.knp.exn;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.snl = this.knp.snl;
        this.gwv.ayi = this.knp.kii;
        this.gwv.win = this.knp.win;
        for (var a = 0; a < this.knp.szl.length; a++) {
            this.gwv.kzh[a] = this.knp.szl[a]
        }
        if (this.gwv.gji && this.gwv.win > 0) {
            this.gwv.gji.myd.mpx("history", "#ner", [this.knp.fge])
        }
        this.gwv.tfl = (this.knp.xbh > this.gwv.xbh);
        this.gwv.xwz = this.knp.xwz;
        this.gwv.zia = this.knp.zia;
        this.gwv.pjz = this.knp.pjz;
        this.gwv.xbh = this.knp.xbh;
        this.gwv.szu = this.knp.xbh;
        this.gwv.wvm = this.knp.wvm;
        this.mqv();
        this.gwv.peu();
        this.gwv.gow(this.knp.qpy)
    };
    this.whp = function () {
        this.gwv.state = this.knp.otv;
        this.gwv.fix = this.knp.dpf;
        this.gwv.wmd = this.knp.exn;
        this.gwv.dzc = this.knp.dzc;
        this.gwv.snl = this.knp.snl;
        this.gwv.ayi = this.knp.kii;
        this.gwv.win = this.knp.win;
        for (var a = 0; a < this.knp.szl.length; a++) {
            this.gwv.kzh[a] = this.knp.szl[a]
        }
        this.gwv.tfl = (this.knp.xbh > this.gwv.xbh);
        this.gwv.xwz = this.knp.xwz;
        this.gwv.zia = this.knp.zia;
        this.gwv.pjz = this.knp.pjz;
        this.gwv.xbh = this.knp.xbh;
        this.gwv.szu = this.knp.xbh;
        this.gwv.wvm = this.knp.wvm;
        this.mqv();
        this.gwv.gpx();
        this.gwv.gow(this.knp.qpy)
    };
    this.mqv = function () {
        this.gwv.rjo = this.knp.rjo;
        this.gwv.jxv = this.knp.jxv;
        this.gwv.dgc = this.knp.dgc;
        this.gwv.bzy = this.knp.bzy;
        this.gwv.opy = this.knp.opy;
        this.gwv.hjv = this.knp.hjv;
        this.gwv.xiz = this.knp.xiz;
        if (this.gwv.opy > 0 && this.gwv.bzy < this.gwv.opy) {
            this.gwv.ayi = this.knp.gku
        }
        this.gwv.bjg = this.knp.bjg
    };
    this.ozu = function () {
        return false
    }
}
grd.prototype = new grs;

function net() {
    var a = this;
    this.rod = false;
    this.zny = -1;
    this.xwm = 0;
    this.ztg = null;
    this.elx = 3;
    this.nkm = 0;
    this.wfr = null;
    this.tiz = null;
    this.wdd = false;
    this.vde = false;
    this.rmi = false;
    this.lyz = [];
    this.ftb = null;
    this.swb = false;
    this.amt = [];
    this.cxv = false;
    this.kpq = null;
    this.rhb = null;
    this.jgm = 0;
    this.whm = 0;
    this._y = 0;
    this._d = 0;
    this.jsl = 0;
    this.nnh = 4;
    this.rxl = 2;
    this.ugq = 9;
    this.fsi = true;
    this.iuk = 0;
    this.gqc = -1;
    this.ssy = 0;
    this.nrk = -1;
    this.nvq = -1;
    this.iff = -1;
    this.tqq = false;
    this.jmg = [];
    this.wvu = 0;
    this.xxo = 0;
    this.luk = 0;
    this.qvc = 89;
    this.kzj = 0;
    this.cvv = 0;
    this.qxk = null;
    this.nth = null;
    this.sqk = 0;
    this.htz = 0;
    this.zmz = [];
    this.szd = [];
    this.dwd = [];
    this.nyv = [];
    this.zki = [];
    this.zky = function (f, k, j, c, b, d, g, e) {
        net.prototype.zky.call(this, f, k, j);
        this.elx = d;
        this.iuk = this.height / this.elx;
        this.ztg = b;
        this.tiz = g;
        this.whm = e;
        this.jgm = Math.round(c);
        this.wfr = [];
        this.nkm = 0;
        this.jsl = 0;
        this.ugq = Math.round(this.jgm / 20);
        this.nnh = Math.round(this.jgm / 12);
        this.rxl = Math.round(this.jgm / 2);
        this.amt.length = 0
    };
    this.eda = function (b) {
        try {
            this.kpq = b.muq;
            this.rhb = b.lax
        } catch (c) {
            console.error(c)
        }
    };
    this.cqz = function (c, b) {
        net.prototype.cqz.call(this, c);
        try {
            this.jgm = Math.round(b);
            this.ugq = Math.round(this.jgm / 20);
            this.nnh = Math.round(this.jgm / 12);
            this.rxl = Math.round(this.jgm / 2);
            this._y = this.y + (this.elx - 1) * this.iuk
        } catch (d) {
            console.error(d)
        }
    };
    this.yez = function (b, e) {
        var d = b - this.x - ((this.parent.xhw()) ? this.parent.wea.yis.eqf.x : 0),
            c = e - this.y - ((this.parent.xhw()) ? this.parent.wea.yis.eqf.y : 0);
        if (d >= 0 && d <= this.width && c >= 0 && c <= this.height) {
            if (this.parent.glo && this.parent.mns && !this.parent.kjr && !this.rod && this.parent.okz()) {
                this.wfh()
            } else {
                if (!this.parent.glo) {
                    if (dac.ewv.value43) {
                        if (this.parent.cng()) {
                            this.parent.zdo();
                            if (this.parent.kxp) {
                                this.parent.kxp.myd.bez("buttons", "#bjc", [true])
                            }
                        }
                    } else {
                        if (this.cxv) {
                            this.gqc = c;
                            this.ssy = 0;
                            this.parent.yqu();
                            this.parent.yvo();
                            this.parent.wct()
                        }
                    }
                }
            }
            return true
        }
        return false
    };
    this.vkf = function () {
        if (this.gqc >= 0) {
            this.cri();
            return true
        }
        return false
    };
    this.mnc = function (b, f, c) {
        var e = b - this.x - ((this.parent.xhw()) ? this.parent.wea.yis.eqf.x : 0),
            d = f - this.y - ((this.parent.xhw()) ? this.parent.wea.yis.eqf.y : 0);
        if (this.gqc >= 0) {
            if (e >= 0 && e <= this.width && d >= 0 && d <= this.height) {
                if (d > this.gqc) {
                    this.kzj = pji(this.ndc)
                } else {
                    if (d < this.gqc) {
                        this.kzj = pji(this.cml)
                    }
                }
                this.gqc = d;
                if (c) {
                    clearTimeout(this.cvv);
                    this.cvv = setTimeout(this.cri, 500)
                }
                return true
            } else {
                this.cri();
                return true
            }
        }
        return false
    };
    this.pla = function () {
        var g = 0,
            k = 0,
            d = 0;
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        if (this.nkm >= 0) {
            this.context2D.save();
            if (this.parent.hgi === false) {
                this.context2D.beginPath();
                this.context2D.rect(this.x, this.y, this.width, this.height);
                this.context2D.closePath();
                this.context2D.clip()
            }
            if (this.nth != null) {
                this.context2D.drawImage(this.nth, this.x + this.sqk, this.y + this.htz, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            for (var f = 0, b = this.szd.length; f < b; f++) {
                if (this.szd[f]) {
                    this.context2D.drawImage(this.szd[f].via, this.szd[f].xnv * this.width, 0, this.width, this.szd[f].via.height, this.x, this.y + f * this.iuk, this.width, this.szd[f].via.height)
                }
            }
            g = this._y - this.height + this.ssy;
            for (var f = 0; f < this.elx + 1; f++) {
                k = this.nkm + f;
                d = this.wfr[k];
                try {
                    if (this.rmi === false) {
                        this.context2D.drawImage(this.ztg[d], this.x, g)
                    } else {
                        this.context2D.drawImage(this.lyz[d], this.x, g)
                    }
                } catch (l) {
                    if (!this.parent.fsd) {
                        console.error("can not display image " + this.ztg.length + "" + d + "" + k + "" + this.wfr.length + "" + this.wfr)
                    }
                }
                g += this.iuk
            }
            g = this._y - this.height;
            for (var f = 0; f < this.elx + 1; f++) {
                k = this.nkm + f;
                d = this.wfr[k];
                try {
                    for (var c = 0, b = this.jmg.length; c < b; c++) {
                        if (this.jmg[c] == d && this.zmz[d] && (this.zmz[d].cva || !this.zmz[d].ljy)) {
                            this.context2D.drawImage(this.zmz[d].via, this.zmz[d].xnv * this.width, 0, this.width, this.zmz[d].via.height, this.x, g + (this.iuk - this.zmz[d].via.height) / 2, this.width, this.zmz[d].via.height);
                            break
                        }
                    }
                } catch (l) {
                    if (!this.parent.fsd) {
                        console.error("can not display image " + this.zmz.length + "" + d + "" + k + "" + this.wfr.length + "" + this.wfr)
                    }
                }
                g += this.iuk
            }
            for (var f = 0, b = this.amt.length; f < b; f++) {
                if (this.amt[f]) {
                    this.context2D.drawImage(this.amt[f], this.x, this.y + f * this.iuk)
                }
            }
            for (var f = 0, b = this.dwd.length; f < b; f++) {
                if (this.dwd[f]) {
                    this.context2D.drawImage(this.dwd[f].via, this.dwd[f].xnv * this.width, 0, this.width, this.dwd[f].via.height, this.x, this.y + f * this.iuk, this.width, this.dwd[f].via.height)
                }
            }
            if (this.wdd) {
                this.context2D.fillStyle = this.kpq;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.vde) {
                this.context2D.fillStyle = this.rhb;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.qxk != null) {
                this.context2D.drawImage(this.qxk, this.x, this.y)
            }
            this.context2D.restore();
            if (this.dsp && this.lbg) {
                this.dsp.drawImage(this.lbg, this.x, this.y)
            }
        }
    };
    this.xcq = function (b) {
        this.nvq = -1;
        this.iff = -1;
        this.xwm = b;
        this.rod = false;
        this.nrk = -1;
        this.nkm = 0;
        this.fsi = true;
        this.zny = -1;
        this.wfr.length = this.whm;
        for (var c = 0; c <= this.elx; c++) {
            this.wfr[this.wfr.length - 1 - this.elx + c] = this.wfr[c]
        }
        this.nkm = this.wfr.length - 1 - this.elx;
        this.fsi = true;
        this.lkl(false)
    };
    this.hrd = function (d, f) {
        for (var b = 0; b < this.whm; b++) {
            if (b < this.tiz.length) {
                this.wfr[b] = this.tiz[b]
            } else {
                var c = b % this.tiz.length;
                this.wfr[b] = this.tiz[c]
            }
        }
        if (f) {
            var e = (this.elx > 1) ? d - 2 : d - 1;
            if (e < 0) {
                e = this.tiz.length + e
            }
            for (var b = 0; b <= this.elx; b++) {
                this.wfr[b] = this.tiz[e];
                e += 1;
                if (e == this.tiz.length) {
                    e = e - this.tiz.length
                }
            }
        }
        this.nkm = 0;
        this._y = this.y + (this.elx - 1) * this.iuk
    };
    this.wfh = function () {
        this.swb = true;
        if (this.nkm > this.elx) {
            var c = this.nkm;
            var d = this.elx;
            for (var b = 0; b <= this.elx; b++) {
                this.wfr[d + b + 1] = this.wfr[c + b]
            }
            this.nkm = this.elx + 1
        }
    };
    this.vir = function () {
        this.nkm = 0;
        this.nrk = 0;
        this.fpp()
    };
    this.ndc = function () {
        if (a.ssy < a.iuk / 4) {
            a.ssy = a.ssy + 2;
            if (a.parent.hgi === false) {
                a.pla()
            } else {
                a.parent.vad()
            }
        }
    };
    this.cml = function () {
        if (a.ssy > 0) {
            a.ssy = a.ssy - 2;
            if (a.parent.hgi === false) {
                a.pla()
            } else {
                a.parent.vad()
            }
        }
    };
    this.cri = function () {
        clearTimeout(a.cvv);
        a.parent.ult();
        if (a.ssy > 0) {
            a.cml();
            a.kzj = pji(a.cri)
        } else {
            a.vzy()
        }
    };
    this.vzy = function () {
        ywb(this.kzj);
        this.gqc = -1;
        this.ssy = 0
    };
    this.cph = function (c) {
        if (this.ssy > 0) {
            this.ssy = 0
        }
        if (this.elx === 1 && this.nrk < 0 && this.nvq >= 0 && this._y === this.y + this.height - this.jgm) {
            this.xoo(this.nvq, this.iff, this.tqq)
        }
        if (this.nkm >= 0) {
            if (this.nkm > 0) {
                if (!this.swb || !this.parent.cgd) {
                    this._y += this.jgm;
                    this._d += this.jgm
                } else {
                    this._y += (this.jgm + this.jgm / 2);
                    this._d += (this.jgm + this.jgm / 2)
                }
            } else {
                if (this.nkm == 0) {
                    if (this.nrk == -1) {
                        this.zny += 1;
                        this.nkm = this.xwm - 1 - this.elx;
                        this._y += this.jgm;
                        this._d += this.jgm;
                        for (var b = 0; b <= this.elx; b++) {
                            this.wfr[this.xwm - 1 - this.elx + b] = this.wfr[b]
                        }
                    } else {
                        if (this.jsl < this.rxl && this.fsi) {
                            this._y += this.nnh;
                            this.jsl += this.nnh;
                            if (this.jsl >= this.rxl) {
                                this.fsi = false
                            }
                        } else {
                            if (this.jsl > 0 && !this.fsi) {
                                this._y -= this.ugq;
                                this.jsl -= this.ugq;
                                if (this.jsl <= 0) {
                                    this.rod = true;
                                    this.swb = false;
                                    if (typeof this.jbo === "function") {
                                        this.jbo()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this._d > this.iuk - this.jgm && this.nkm > 0) {
                if (c && this.nrk >= 0) {
                    if (this.nkm == 1) {
                        if (typeof this.ltm === "function") {
                            this.ltm()
                        }
                        if (this.ftb) {
                            this.ftb.play()
                        }
                        if (!this.parent.xom && !this.parent.aqu) {
                            if (this.bwm()) {
                                this.gys()
                            }
                        }
                    }
                }
                this.nkm -= 1;
                this._d = 0;
                this._y = this.y + (this.elx - 1) * this.iuk
            }
        }
    };
    this.moi = function (e, c, f) {
        for (var d = 0, b = this.dwd.length; d < b; d++) {
            if (this.dwd[d]) {
                if (this.dwd[d].tuq === false && this.dwd[d].xnv < this.dwd[d].znu - 1) {
                    this.dwd[d].xnv += 1
                } else {
                    if (this.dwd[d].tuq === true && this.dwd[d].xnv > 0) {
                        this.dwd[d].xnv -= 1
                    } else {
                        if (this.dwd[d].loop === true) {
                            this.dwd[d].xnv = (this.dwd[d].tuq === false) ? 0 : this.dwd[d].znu - 1
                        } else {
                            if (this.dwd[d].vin === true) {
                                this.dwd[d] = null
                            }
                        }
                    }
                }
            }
        }
        if (f && f === true) {
            this.pla()
        }
    };
    this.nzu = function () {
        for (var c = 0, b = this.dwd.length; c < b; c++) {
            if (this.dwd[c] && ((this.dwd[c].tuq === false && this.dwd[c].xnv < this.dwd[c].znu - 1) || (this.dwd[c].tuq === true && this.dwd[c].xnv > 0))) {
                return true
            }
        }
        return false
    };
    this.vyr = function (d) {
        for (var c = 0, b = this.szd.length; c < b; c++) {
            if (this.szd[c]) {
                if (this.szd[c].tuq === false && this.szd[c].xnv < this.szd[c].znu - 1) {
                    this.szd[c].xnv += 1
                } else {
                    if (this.szd[c].tuq === true && this.szd[c].xnv > 0) {
                        this.szd[c].xnv -= 1
                    } else {
                        if (this.szd[c].loop === true) {
                            this.szd[c].xnv = (this.szd[c].tuq === false) ? 0 : this.szd[c].znu - 1
                        } else {
                            if (this.szd[c].vin === true) {
                                this.szd[c] = null
                            }
                        }
                    }
                }
            }
        }
        if (d && d === true) {
            this.pla()
        }
    };
    this.vue = function () {
        for (var c = 0, b = this.szd.length; c < b; c++) {
            if (this.szd[c] && ((this.szd[c].tuq === false && this.szd[c].xnv < this.szd[c].znu - 1) || (this.szd[c].tuq === true && this.szd[c].xnv > 0))) {
                return true
            }
        }
        return false
    };
    this.qfo = function (d, c, b) {
        this.nvq = d;
        this.iff = c;
        this.tqq = b;
        if (this.elx > 1) {
            this.xoo(this.nvq, this.iff, this.tqq)
        }
    };
    this.xoo = function (j, g, d) {
        var k = 0,
            c = 0,
            e = 0,
            b = [];
        this.zny = -1;
        this.nrk = j;
        k = (this.elx > 1) ? this.nrk - 2 : this.nrk - 1;
        if (k < 0) {
            k = this.tiz.length + k
        }
        c = (d === true) ? this.wfr.length + g : this.elx + g + 1;
        for (var f = 0; f <= this.elx; f++) {
            e = this.nkm + f;
            if (e >= this.wfr.length) {
                e = e - this.wfr.length
            }
            b[f] = this.wfr[e]
        }
        for (var f = 0; f < c; f++) {
            this.wfr[f] = this.tiz[k];
            k += 1;
            if (k == this.tiz.length) {
                k = k - this.tiz.length
            }
        }
        this.nkm = this.elx + g + 1;
        for (var f = 0; f <= this.elx; f++) {
            this.wfr[this.nkm + f] = b[f]
        }
        this.lkl(true);
        this.nvq = -1;
        this.iff = -1;
        this.tqq = false
    };
    this.lkl = function (k) {
        var d = -1,
            n = -1,
            b = 0,
            o = true,
            e = false,
            m = 0,
            l = 0;
        if (this.nyv.length > 0 && this.zki.length > 0) {
            if (k) {
                for (var g = 0; g < this.nyv.length; g++) {
                    for (var f = 0; f < this.nyv[g].length - 1; f++) {
                        if (this.wfr[this.elx] == this.nyv[g][f]) {
                            d = f;
                            n = g
                        }
                    }
                }
                if (n >= 0 && d >= 0 && d < this.nyv[n].length - 1) {
                    if (this.elx + this.nyv[n].length - d - 1 < this.nkm) {
                        for (var g = d + 1, f = 1; g < this.nyv[n].length; g++, f++) {
                            this.wfr[this.elx + f] = this.nyv[n][g]
                        }
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.nyv.length; g++) {
                for (var f = 1; f < this.nyv[g].length; f++) {
                    if (this.wfr[this.nkm] == this.nyv[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d > 0) {
                if (this.nkm - d > this.elx) {
                    for (var g = d - 1, f = 1; g >= 0; g--, f++) {
                        this.wfr[this.nkm - f] = this.nyv[n][g]
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.nyv.length; g++) {
                for (var f = 0; f < this.nyv[g].length; f++) {
                    if (this.wfr[this.nkm + this.elx] == this.nyv[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d >= 0 && d < this.nyv[n].length - 1) {
                if (!k) {
                    for (var g = d + 1; g < this.nyv[n].length; g++) {
                        this.wfr[m++] = this.nyv[n][g]
                    }
                } else {
                    if (this.nkm + this.elx + this.nyv[n].length - d - 1 < this.wfr.length) {
                        for (var g = d + 1, f = 1; g < this.nyv[n].length; g++, f++) {
                            this.wfr[this.nkm + this.elx + f] = this.nyv[n][g]
                        }
                    }
                }
            }
            m = (k) ? this.elx + 1 : m;
            l = (k) ? this.wfr.length : this.nkm;
            for (var c = m; c < l; c++) {
                if (k == false || (c < this.nkm || c > this.nkm + this.elx)) {
                    d = -1;
                    n = -1;
                    for (var g = 0; g < this.nyv.length; g++) {
                        for (var f = 0; f < this.nyv[g].length; f++) {
                            if (this.wfr[c] == this.nyv[g][f]) {
                                d = f;
                                n = g
                            }
                        }
                    }
                    if (n >= 0 && d >= 0) {
                        o = true;
                        b = 0;
                        for (var g = 0; g < this.nyv[n].length && o; g++) {
                            if (this.wfr[c - d + g] != this.nyv[n][g]) {
                                o = false
                            } else {
                                b++
                            }
                        }
                        if (o) {
                            c += this.nyv[n].length - d - 1
                        } else {
                            if (b == 0) {
                                this.wfr[c] = this.zki[Math.floor(Math.random() * this.zki.length)]
                            } else {
                                if (b == this.nyv[n].length - 1 && (c + b < this.nkm || c + b > this.nkm + this.elx) && c + b < this.wfr.length) {
                                    e = false;
                                    for (var g = 0; g < this.nyv.length && !e; g++) {
                                        for (var f = 0; f < this.nyv[g].length && !e; f++) {
                                            if (this.wfr[c + b] == this.nyv[g][f]) {
                                                e = true
                                            }
                                        }
                                    }
                                    if (!e) {
                                        this.wfr[c + b] = this.nyv[n][this.nyv[n].length - 1];
                                        c += b
                                    } else {
                                        this.wfr[c] = this.zki[Math.floor(Math.random() * this.zki.length)]
                                    }
                                } else {
                                    for (var q = 0; q < b; q++) {
                                        if (c + q < this.nkm || c + q > this.nkm + this.elx) {
                                            this.wfr[c + q] = this.zki[Math.floor(Math.random() * this.zki.length)]
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
    this.xgf = function (b) {
        this.cxv = b
    };
    this.yij = function () {
        return this.cxv
    };
    this.bwm = function () {
        for (var c = 0, b = this.jmg.length; c < b; c++) {
            if (this.jmg[c] >= 0) {
                return true
            }
        }
        return false
    };
    this.jtg = function (b) {
        this.jmg = b
    };
    this.wrp = function (b) {
        return this.jmg
    };
    this.gys = function () {
        for (var d = 0, b = this.jmg.length; d < b; d++) {
            var c = this.zmz[this.jmg[d]];
            if (c) {
                c.cva = true;
                c.sys = c.loop;
                c.ljy = c.vin
            }
        }
        if (this.parent.hgi === false) {
            this.pla()
        } else {
            this.parent.vad()
        }
        this.luk = 0;
        this.xxo = new Date().getTime();
        this.itc()
    };
    this.fpp = function () {
        for (var c = 0, b = this.zmz.length; c < b; c++) {
            if (this.zmz[c]) {
                this.zmz[c].cva = false
            }
        }
        clearTimeout(this.wvu)
    };
    this.mjl = function () {
        for (var c = 0, b = this.zmz.length; c < b; c++) {
            if (this.zmz[c]) {
                this.zmz[c].sys = false
            }
        }
    };
    this.pms = function () {
        for (var c = 0, b = this.zmz.length; c < b; c++) {
            if (this.zmz[c]) {
                this.zmz[c].ljy = true;
                this.zmz[c].xnv = 0
            }
        }
    };
    this.rob = function () {
        for (var c = 0, b = this.zmz.length; c < b; c++) {
            if (this.zmz[c] && this.zmz[c].cva) {
                return true
            }
        }
        return false
    };
    this.itc = function () {
        var f = true,
            d = null;
        a.luk++;
        for (var e = 0, b = a.jmg.length; e < b; e++) {
            d = a.zmz[a.jmg[e]];
            if (d && d.cva) {
                d.xnv = (d.xnv < d.znu - 1) ? d.xnv + 1 : (d.ljy) ? 0 : d.xnv;
                if ((d.xnv === 0 && d.sys === false) || (d.xnv === d.znu - 1 && d.ljy === false)) {
                    d.cva = false
                }
                if (f === true && d.cva === true) {
                    f = false
                }
            }
        }
        if (a.parent.hgi === false) {
            a.pla()
        } else {
            a.parent.vad()
        }
        if (f === false) {
            var c = (a.luk * a.qvc - (new Date().getTime() - a.xxo));
            if (c < 2) {
                c = 0
            }
            a.wvu = setTimeout(a.itc, c)
        } else {
            clearTimeout(a.wvu);
            a.parent.ptl()
        }
    };
    this.vfb = function (d) {
        for (var c = 0, b = d.length; c < b; c++) {
            if (d[c]) {
                this.zmz[c] = {};
                this.zmz[c].via = d[c].via;
                this.zmz[c].loop = d[c].loop;
                this.zmz[c].vin = d[c].vin;
                this.zmz[c].znu = this.zmz[c].via.width / this.width;
                this.zmz[c].xnv = 0;
                this.zmz[c].cva = false;
                this.zmz[c].sys = false;
                this.zmz[c].ljy = true
            }
        }
    };
    this.dox = function (b, c, d) {
        this.nth = b;
        this.sqk = c;
        this.htz = d
    };
    this.hfy = function (b) {
        this.qxk = b
    };
    this.vhi = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.dwd[f] = {
            via: e,
            xnv: 0,
            znu: e.width / this.width,
            loop: b,
            vin: d,
            tuq: c
        }
    };
    this.hqz = function () {
        return this.dwd
    };
    this.bwh = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.szd[f] = {
            via: e,
            xnv: 0,
            znu: e.width / this.width,
            loop: b,
            vin: d,
            tuq: c
        }
    };
    this.shs = function () {
        return this.szd
    };
    this.umt = function (g, c) {
        this.nyv = [];
        this.zki = [];
        for (var f = 0, b = g.length; f < b; f++) {
            this.nyv[f] = [];
            for (var e = 0, d = g[f].length; e < d; e++) {
                this.nyv[f][e] = g[f][e]
            }
        }
        for (var f = 0, b = c.length; f < b; f++) {
            this.zki[f] = c[f]
        }
    };
    this.ltm = null;
    this.jbo = null
}
net.prototype = new ebm;
dac.qxv = {
    vbw: {
        zue: 0,
        sib: 1,
        jdf: 2,
        uwm: 3,
        kcg: 4,
        xqa: 5,
        jgp: 6,
        qrt: 7,
        lto: 8,
        qsb: 9,
        edf: 10,
        zmk: 11,
        poz: 12,
        lze: 13,
        rwt: 14,
        hsl: 15,
        tqp: 16,
        ouz: 20,
        uan: 21,
        fgr: 22,
        azj: 23,
        wlo: 24,
        kbn: 25,
        fte: 30,
        lgn: 31,
        qzg: 32,
        nzd: 33,
        gyk: 68
    }
};

function qeg() {
    this.boc = null;
    this.iqw = null;
    this.ulp = null;
    this.dro = null;
    this.hau = null;
    this.jms = [];
    this.kxp = null;
    this.owh = null;
    this.jqa = null;
    this.gji = null;
    this.wcb = null;
    this.jks = null;
    this.udz = null;
    this.ssr = null;
    this.wmd = [];
    this.kzh = [];
    this.win = 0;
    this.uqc = 1;
    this.ayi = 0;
    this.totalBet = 1000;
    this.srx = [];
    this.dto = 0;
    this.myk = 0;
    this.snl = 10;
    this.dzc = 0;
    this.qxg = 0;
    this.szl = [];
    this.wkz = 0;
    this.hca = -1;
    this.hum = -1;
    this.wdk = -1;
    this.r1 = [];
    this.r2 = [];
    this.r3 = [];
    this.r4 = [];
    this.r5 = [];
    this.r6 = [];
    this.r7 = [];
    this.r8 = [];
    this.r9 = [];
    this.joe = [];
    this.inb = [];
    this.vfn = [];
    this.ump = [];
    this.vzn = [];
    this.zsg = [];
    this.rct = 3;
    this.tjk = 5;
    this.pyb = [];
    this.kew = 1;
    this.qex = 1;
    this.imw = 1;
    this.mlv = [];
    this.fix = null;
    this.nrz = false;
    this.pjz = 0;
    this.wvm = 1;
    this.xbh = 0;
    this.szu = 0;
    this.xwz = 0;
    this.zia = 0;
    this.jue = true;
    this.tfl = false;
    this.kul = false;
    this.vem = false;
    this.lyb = false;
    this.rpm = false;
    this.qdz = false;
    this.gtv = 1;
    this.ygx = true;
    this.rjo = "";
    this.tjf = false;
    this.awv = false;
    this.oyf = false;
    this.bpc = true;
    this.mjw = false;
    this.opy = 0;
    this.bzy = 0;
    this.hjv = 0;
    this.xiz = "";
    this.jxv = "";
    this.dgc = "";
    this.sgp = null;
    this.xom = true;
    this.rkp = false;
    this.glo = false;
    this.xks = 20;
    this.zzj = true;
    this.mns = false;
    this.oms = false;
    this.dmn = [15, 20, 25, 30, 35];
    this.kpt = [8, 8, 8, 8, 8];
    this.nqk = [0, 0, 0, 0, 0];
    this.okh = this.dmn;
    this.cyc = 16;
    this.wlr = 16;
    this.wve = this.cyc;
    this.qnh = 12;
    this.nem = 0;
    this.zjg = 0;
    this.ztg = [];
    this.cgd = true;
    this.xbl = false;
    this.xgy = false;
    this.uxc = false;
    this.pug = true;
    this.oag = 0;
    this.gkx = 0;
    this.puq = [];
    this.lvo = true;
    this.vil = false;
    this.yhj = false;
    this.uvl = false;
    this.cmz = false;
    this.pbe = false;
    this.hcs = 1;
    this.aah = 400;
    this.wso = 200;
    this.pwy = 100;
    this.alz = true;
    this.mtu = true;
    this.onf = false;
    this.ugf = [];
    this.yxi = 50;
    this.sso = null;
    this.wyo = null;
    this.all = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.yav = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.omv = false;
    this.klz = 0;
    this.wlt = 0;
    this.djt = -1;
    this.ydh = 0;
    this.mtw = false;
    this.wfx = false;
    this.rzy = -1;
    this.dlv = false;
    this.cxn = true;
    this.cwy = 3;
    this.vxn = false;
    this.qbi = 0;
    this.qve = true;
    this.ptc = 330;
    this.yfc = [];
    this.kzk = null;
    this.rze = null;
    this.ljd = [
        [2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1],
        [3, 3, 3, 3, 3],
        [1, 2, 3, 2, 1],
        [3, 2, 1, 2, 3]
    ];
    this.dil = [];
    this.qrx = 1;
    this.mdm = 5;
    this.iou = 1;
    this.iao = 5;
    this.dqo = true;
    this.buf = 0;
    this.wlm = 0;
    this.qxn = 30;
    this.hde = 50;
    this.adc = false;
    this.gne = 0;
    this.qwk = 0;
    this.epk = false;
    this.sws = true;
    this.szp = 0;
    this.kxk = 0;
    this.oiv = false;
    this.lbl = 0;
    this.kwa = false;
    this.vxj = true;
    this.ois = false;
    this.jzz = false;
    this.deg = null;
    this.kjr = false;
    this.ytu = true;
    this.fzu = 0;
    this.osl = 0;
    this.ywj = 0;
    this.rpi = 0;
    this.wnt = true;
    this.pwq = null;
    this.iny = false;
    this.mtb = false;
    this.ikf = true;
    this.vpp = "";
    this.bbi = false;
    this.yhr = -1;
    this.ysq = 0;
    this.uef = 0;
    this.dug = 0;
    this.yye = 0;
    this.id = 0;
    this.tsz = 0;
    this.lvg = 0;
    this.lrr = 0;
    this.gyy = 0;
    this.xpv = 0;
    this.upc = -1;
    this.qld = 0;
    this.zxt = 0;
    this.iuq = -1;
    this.wuz = 0;
    this.xtg = 0;
    this.typ = -1;
    this.zdh = function (b) {
        if (!dac.khg.fsd) {
            dac.fip.zdh(b)
        }
    };
    this.cfc = function () {
        var b = new bhs();
        b.zky();
        return b
    };
    this.gjs = function () {
        this.bsx = new eaf()
    };
    this.zwa = function () {
        this.rlp();
        var f = [];
        if (!(this.opy > 0 && this.bzy < this.opy)) {
            while (this.ayi < this.ike()) {
                this.ayi++
            }
            var e = this.sjo(this.kul);
            if (this.ayi > e) {
                var d = (e < 0) ? 0 : e;
                this.ayi = d
            }
        }
        this.uqc = this.srx[this.ayi];
        this.totalBet = this.tac();
        this.xmf();
        this.aen();
        this.gpc();
        for (var c = 0, b = this.wrr.ifw("symb"); c < b; c++) {
            this.ztg[c] = this.wrr.ark("symb" + c)
        }
        if (dac.ewv.value38) {
            f[dac.os.azc] = "w";
            f[dac.os.aeo] = "l";
            f[dac.os.caj] = "m";
            f[dac.os.dbk] = "i";
            f[dac.os.smu] = "a";
            this.cgd = dac.ewv.value38[f[dac.fip.nnv]]
        }
    };
    this.unf = function () {
        this.rpf();
        this.mqh();
        this.lki();
        this.evd();
        this.qok();
        this.icg();
        if (this.vxj) {
            this.qic()
        }
        if (this.wea.lzv) {
            this.ygj();
            this.bxs()
        }
        if (this.wea.ykg && !(this.opy > 0 && this.bzy < this.opy)) {
            this.mgl();
            if (this.rdw()) {
                this.zfl()
            }
        }
        if (this.wea.ryc) {
            this.abp();
            if (!this.wea.bzg) {
                this.pbb()
            }
        }
        if (this.wea.rcb) {
            this.mip()
        }
        if (this.fsd) {
            this.qnb()
        } else {
            this.gsx();
            if (this.wea.vfk) {
                this.jlt()
            }
            if (this.aus()) {
                this.izj()
            }
            if (this.qqe()) {
                this.khj()
            }
            if (this.beq() != null && !this.ksw()) {
                this.woo(this.beq())
            }
        }
        if (!(this.fsd && !this.pip)) {
            this.kyx();
            this.llc()
        }
        if (this.wea.bzg) {
            this.eaw(this.beq())
        }
        this.upj();
        if (!this.fsd) {
            this.izq();
            this.cyu()
        }
        if (!this.pip) {
            this.cfn()
        }
    };
    this.lxt = function () {
        if (!this.ytd) {
            if (this.ggc === false) {
                this.lwj.style.marginTop = (-this.height / 2 + this.esr()) + "px";
                this.lwj.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.lwj.style.left = "0px";
                this.lwj.style.top = "0px";
                this.lwj.style.marginTop = ((this.zbj - this.height) / 2 + this.esr()) + "px";
                this.lwj.style.marginLeft = ((this.csl - this.width) / 2) + "px"
            }
            this.lwj.style.width = (this.width > this.csl) ? this.csl + "px" : this.width + "px";
            this.lwj.style.height = (this.height > this.zbj) ? this.zbj + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            this.wcb = document.createElement("canvas");
            this.wcb.width = this.wea.hbb.eqf.width;
            this.wcb.height = this.wea.hbb.eqf.height;
            this.jks = this.wcb.getContext("2d");
            if (this.xhw() === true && typeof WebGL2D != "undefined") {
                try {
                    this.yis = document.getElementById("canvas2");
                    this.yis.width = Math.round(this.wea.yis.eqf.width);
                    this.yis.height = Math.round(this.wea.yis.eqf.height);
                    WebGL2D.enable(this.yis);
                    this.zoc = this.yis.getContext("webgl-2d");
                    this.hgi = true;
                    this.udz = document.createElement("canvas");
                    this.udz.width = this.wea.hbb.eqf.width;
                    this.udz.height = this.wea.hbb.eqf.height;
                    this.ssr = this.udz.getContext("2d")
                } catch (b) {
                    this.yis = null;
                    this.zoc = null;
                    this.hgi = false
                }
            }
            if (this.qqf) {
                this.qqf.style.width = this.width + "px";
                this.qqf.style.height = this.height + "px"
            }
            this.offsetLeft = this.lwj.offsetLeft;
            this.offsetTop = this.lwj.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.ytd = true
        }
    };
    this.upj = function () {};
    this.abp = function () {
        qeg.prototype.abp.call(this);
        var b = this.hed.znq("topi");
        try {
            if (b) {
                if (dac.ewv.value57 === dac.ui.ruq || this.beq() != null) {
                    b.bwz("language", this.wrr.ark("icon_l"), sessionStorage.sessionValue1, [dac.language.EN, dac.language.DE, dac.language.RU, dac.language.EE, dac.language.ES, dac.language.TR, dac.language.CZ, dac.language.GR, dac.language.AT, dac.language.US, dac.language.BG, dac.language.CO, dac.language.MX, dac.language.CL, dac.language.VE, dac.language.BR, dac.language.GE, dac.language.HU, dac.language.RO, dac.language.PT, dac.language.FR, dac.language.HR, dac.language.IT, dac.language.SE])
                }
                if (this.ksw() === false) {
                    b.xle("help", new String("?"), true)
                }
                if (dac.ewv.value27 && this.eft) {
                    b.bwz("audio", this.wrr.ark("icon_a"), this.jcu[this.uao], this.jcu);
                    if (this.tqc() === true) {
                        b.xle("melody", this.wrr.ark("icon_m"), this.bpc)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && dac.fip.ryb()) {
                    b.xle("fullscreen", this.wrr.ark("icon_f"), this.efn)
                }
                if (dac.ewv.value28 && this.ytu) {
                    b.xle("turbo", this.wrr.ark("icon_t"), this.kjr)
                }
                b.xle("auto", this.wrr.ark("icon_as"), this.lyb);
                b.xle("gamble", this.wrr.ark("icon_g"), this.jzz)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.pbb = function () {
        qeg.prototype.pbb.call(this);
        var c = this.hed.znq("topb");
        try {
            if (c) {
                if ((dac.ewv.value5.length > 1) && (dac.ewv.value57 === dac.ui.ruq || this.beq() != null)) {
                    c.nof("language", this.language.language, this.eht(dac.ewv.value5[this.isc]), this.ipk, this.bsx.language, 0, 1)
                }
                if (dac.ewv.value27 && this.eft) {
                    c.nof("audio", this.language.audio, this.wrr.ark("btn_a"), this.cwc, this.bsx.audio, this.uao, this.jcu.length);
                    if (this.tqc() === true) {
                        c.nof("melody", this.language.hyv, this.wrr.ark("btn_mu"), this.pgj, this.bsx.xvl, (this.bpc) ? 1 : 0, 2)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && dac.fip.ryb()) {
                    c.nof("fullscreen", this.language.efn, this.wrr.ark("btn_f"), (dac.fip.hdk) ? this.ova : this.cmu, this.bsx.efn, (this.efn) ? 1 : 0, 2)
                }
                if (dac.ewv.value28 && this.ytu) {
                    c.nof("turbo", this.language.kjr, this.wrr.ark("btn_t"), this.uzy, this.bsx.kjr, (this.kjr) ? 1 : 0, 2)
                }
                c.bel("help", this.language.abz, this.wrr.ark("btn_p"), this.epe, this.bsx.duv);
                if (this.jxv != "" && (dac.ewv.value81 && dac.ewv.value81.g === true)) {
                    c.bel("rules", this.language.lmb, this.wrr.ark("btn_gr"), this.fxn, this.bsx.wzr)
                }
                if (dac.ewv.value12 && !this.zam()) {
                    c.bel("history", this.language.zmo, this.wrr.ark("btn_h"), this.sdt, this.bsx.zmo)
                }
                if (dac.ewv.value36 && !this.zam()) {
                    c.bel("statistic", this.language.fdd, this.wrr.ark("btn_st"), this.uuf, this.bsx.fdd)
                }
                c.krj()
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.eaw = function (b) {
        qeg.prototype.eaw.call(this, b);
        var d = this.hed.znq("settings"),
            e = "",
            c = 0;
        if (d) {
            if (dac.ewv.value5.length > 1) {
                c++;
                d.nof("language", this.language.language, this.eht(dac.ewv.value5[this.isc]), this.ipk, 0, 1)
            }
            if (dac.ewv.value27 && this.eft) {
                c++;
                d.nof("audio", this.language.audio, this.wrr.ark("btn_a"), this.cwc, this.uao, this.jcu.length);
                if (this.tqc() === true) {
                    c++;
                    d.nof("melody", this.language.hyv, this.wrr.ark("btn_mu"), this.pgj, (this.bpc) ? 1 : 0, 2)
                }
            }
            if (sessionStorage.sessionValue14 == "true" && dac.fip.ryb()) {
                c++;
                d.nof("fullscreen", this.language.efn, this.wrr.ark("btn_f"), this.ova, (this.efn) ? 1 : 0, 2)
            }
            if (dac.ewv.value28 && this.ytu && c < 4) {
                d.nof("turbo", this.language.kjr, this.wrr.ark("btn_t"), this.uzy, (this.kjr) ? 1 : 0, 2)
            }
            d.nof("gamble", this.language.jzz, this.wrr.ark("btn_g"), this.mtr, (this.jzz) ? 1 : 0, 2);
            if (this.riv[this.zej] === dac.icz.zed) {
                e = this.language.left
            } else {
                if (this.riv[this.zej] === dac.icz.bpq) {
                    e = this.language.dva
                } else {
                    if (this.riv[this.zej] === dac.icz.wem) {
                        e = this.language.zqq
                    }
                }
            }
            d.nof("adjustment", e, this.wrr.ark("btn_l"), this.pbn, (this.xvh === dac.wea.rwv) ? 0 : 1, 2);
            d.meo("help", this.language.duv, this.wrr.ark("btn_p"), this.epe);
            if (this.jxv != "" && (dac.ewv.value81 && dac.ewv.value81.g === true)) {
                d.meo("rules", this.language.xqg, this.wrr.ark("btn_gr"), this.fxn)
            }
            if (dac.ewv.value12 && !this.zam()) {
                d.meo("history", this.language.zmo, this.wrr.ark("btn_h"), this.sdt)
            }
            if (dac.ewv.value36 && !this.zam()) {
                d.meo("statistic", this.language.fdd, this.wrr.ark("btn_st"), this.uuf)
            }
            d.qpw = this.rdw();
            d.ixf(this.wea.rdr);
            d.sov(this.wea.rdr);
            d.eda(this.style.rdr);
            d.sii(this.language, true)
        }
    };
    this.rpf = function () {
        var b = (this.fsd && this.ltg) ? this.wea.yoy : this.wea.tcm;
        this.kxp = new zvz();
        this.kxp.parent = this;
        this.kxp.wnt = this.wnt;
        this.kxp.zky(b.eqf, null, this.context2D);
        this.kxp.ixf(b, this.style.tcm);
        this.kxp.fcy(this.sso, 0);
        this.kxp.fcy(this.wyo, 1)
    };
    this.icg = function () {};
    this.gsx = function () {};
    this.llc = function () {
        this.jqa.ufa(this.wea.hwg, this.style.hwg, this.wrr.ark("btn_s"))
    };
    this.owf = function () {};
    this.ifo = function () {};
    this.jlt = function () {
        var b = new mxd();
        b.zky(this.wea.top.eqf, null, this.context2D);
        b.parent = this;
        this.hed.hio("tops", b)
    };
    this.lki = function () {
        this.yfc = []
    };
    this.mqh = function () {
        var e = [],
            c = (this.state == dac.qxv.vbw.jgp || this.state == dac.qxv.vbw.edf || this.state == dac.qxv.vbw.zmk || this.state == dac.qxv.vbw.poz || this.state == dac.qxv.vbw.rwt) ? true : false;
        if (c) {
            if (this.jue) {
                e = this.fix
            } else {
                e = this.wmd
            }
        } else {
            e = this.wmd
        }
        this.boc = new net();
        this.iqw = new net();
        this.ulp = new net();
        this.dro = new net();
        this.hau = new net();
        this.boc.ftb = this.wrr.pvu("stop1");
        this.iqw.ftb = this.wrr.pvu("stop2");
        this.ulp.ftb = this.wrr.pvu("stop1");
        if (this.dro != null) {
            this.dro.ftb = this.wrr.pvu("stop2")
        }
        if (this.hau != null) {
            this.hau.ftb = this.wrr.pvu("stop1")
        }
        if (this.hgi === false) {
            this.boc.zky(this.wea.boc.eqf, this.context2D, null, (this.cgd) ? this.wea.boc.jjr : this.wea.boc.avp, this.ztg, this.rct, this.r1, this.okh[0])
        } else {
            this.boc.zky(this.wea.boc.dmq, this.zoc, null, (this.cgd) ? this.wea.boc.jjr : this.wea.boc.avp, this.ztg, this.rct, this.r1, this.okh[0])
        }
        this.boc.hrd(e[0], true);
        if (this.hgi === false) {
            this.iqw.zky(this.wea.iqw.eqf, this.context2D, null, (this.cgd) ? this.wea.iqw.jjr : this.wea.iqw.avp, this.ztg, this.rct, this.r2, this.okh[1])
        } else {
            this.iqw.zky(this.wea.iqw.dmq, this.zoc, null, (this.cgd) ? this.wea.iqw.jjr : this.wea.iqw.avp, this.ztg, this.rct, this.r2, this.okh[1])
        }
        this.iqw.hrd(e[1], true);
        if (this.hgi === false) {
            this.ulp.zky(this.wea.ulp.eqf, this.context2D, null, (this.cgd) ? this.wea.ulp.jjr : this.wea.ulp.avp, this.ztg, this.rct, this.r3, this.okh[2])
        } else {
            this.ulp.zky(this.wea.ulp.dmq, this.zoc, null, (this.cgd) ? this.wea.ulp.jjr : this.wea.ulp.avp, this.ztg, this.rct, this.r3, this.okh[2])
        }
        this.ulp.hrd(e[2], true);
        if (this.hgi === false) {
            this.dro.zky(this.wea.dro.eqf, this.context2D, null, (this.cgd) ? this.wea.dro.jjr : this.wea.dro.avp, this.ztg, this.rct, this.r4, this.okh[3])
        } else {
            this.dro.zky(this.wea.dro.dmq, this.zoc, null, (this.cgd) ? this.wea.dro.jjr : this.wea.dro.avp, this.ztg, this.rct, this.r4, this.okh[3])
        }
        this.dro.hrd(e[3], true);
        if (this.hgi === false) {
            this.hau.zky(this.wea.hau.eqf, this.context2D, null, (this.cgd) ? this.wea.hau.jjr : this.wea.hau.avp, this.ztg, this.rct, this.r5, this.okh[4])
        } else {
            this.hau.zky(this.wea.hau.dmq, this.zoc, null, (this.cgd) ? this.wea.hau.jjr : this.wea.hau.avp, this.ztg, this.rct, this.r5, this.okh[4])
        }
        this.hau.hrd(e[4], true);
        this.jms = [this.boc, this.iqw, this.ulp, this.dro, this.hau];
        this.sgp = [true, true, true, true, true];
        for (var d = 0, b = this.jms.length; d < b; d++) {
            this.jms[d].parent = this;
            this.jms[d].eda(this.style.tiz);
            this.jms[d].hfy(this.wrr.ark("reelfront"))
        }
    };
    this.kyx = function () {
        this.jqa = new ahl();
        this.jqa.zky(this.wea.hwg.eqf, null, this.context2D);
        this.jqa.parent = this;
        this.jqa.hcu(false);
        this.jqa.sov(this.wea.hwg);
        this.jqa.eda(this.style.hwg)
    };
    this.qic = function () {
        var c = this.wea.jzz,
            b = this.wrr.ark("g_back");
        if (this.fsd && this.ltg && this.style.khg.gdc) {
            c = this.wea.vor;
            b = this.wrr.ark("m_g_back")
        }
        this.gji = new phu();
        this.gji.parent = this;
        this.gji.zky(c.eqf, null, this.context2D);
        this.gji.via = b;
        this.gji.ixf(c);
        this.gji.eda(this.style.jzz);
        this.gji.ykw();
        this.gji.fcy(this.deg, 0);
        this.gji.oac(false)
    };
    this.evd = function () {};
    this.qok = function () {
        this.owh = this.qdm();
        this.owh.parent = this;
        this.owh.kzk = this.kzk;
        this.owh.ead = this.uvy;
        this.owh.ljd = this.ljd;
        this.owh.rze = this.rze;
        this.owh.cwy = this.cwy;
        this.owh.zop = this.ptc;
        this.owh.stt = this.yfc;
        this.owh.iji = this.omv;
        this.owh.wzk = (this.mtw == true || this.wfx == true);
        this.owh.uhh = this.qve;
        this.owh.alz = this.alz;
        this.owh.sov(this.wea.crs);
        this.owh.eda(this.style.crs)
    };
    this.mgl = function () {
        var b = new yeu();
        b.zky(this.wea.myl.eqf, null, this.context2D);
        b.parent = this;
        b.xfh = this.language.uqc;
        b.jvb = this.aut;
        b.vfl = this.bsx.pcc.nhn;
        b.equ = this.bsx.ykr.nhn;
        b.cjh = this.wrr.ark("effect");
        b.sov(this.wea.myl);
        b.eda(this.style.mht);
        b.zwa(this.srx, this.ike(), this.sjo(false));
        b.xkp(this.bcr(), this.sjo(true));
        b.dcq(this.ayi, false);
        b.oac(false);
        this.hed.hio("betsel", b)
    };
    this.zfl = function () {
        this.mlv = [];
        for (var b = this.kew; b <= this.qex;) {
            this.mlv.push(b);
            b += this.imw
        }
        var c = new pum();
        c.zky(this.wea.pod.eqf, null, this.context2D);
        c.parent = this;
        c.xfh = this.language.snl;
        c.jvb = this.vwi;
        c.vfl = this.bsx.ncp.nhn;
        c.equ = this.bsx.dtk.nhn;
        c.cjh = this.wrr.ark("effect");
        c.sov(this.wea.pod);
        c.eda(this.style.mht);
        c.zwa(this.mlv, 0, this.mlv.length - 1);
        c.iwb(this.snl, false);
        c.oac(false);
        this.hed.hio("linesel", c)
    };
    this.mip = function () {
        this.hed.hio("llinep", this.smn(this.wea.ysu.eqf.x, this.wea.ysu.eqf.y, this.wrr.ark("winlines"), this.qrx, this.mdm, this.wea.ysu));
        this.hed.hio("rlinep", this.smn(this.wea.mur.eqf.x, this.wea.mur.eqf.y, this.wrr.ark("winlines"), this.iou, this.iao, this.wea.mur));
        this.hed.mpx("llinep", "#rvo", [this.snl]);
        this.hed.mpx("rlinep", "#rvo", [this.snl])
    };
    this.ygj = function () {
        var c = new ztc(),
            b = this.wrr.ark("m_win");
        if (this.fsd && this.ltg && this.style.khg.gdc) {
            b = this.wrr.ark("m_m_win")
        }
        c.zky(this.wea.mqj.eqf, this.context2D, null, b, "");
        c.parent = this;
        c.sov(this.wea.mqj);
        c.eda(this.style.mqj);
        c.oac(false);
        this.hed.hio("winp", c)
    };
    this.bxs = function () {};
    this.qnb = function () {
        var b = new jep();
        b.zky(this.wea.zmo.eqf, null, this.context2D);
        b.parent = this;
        b.ixf(this.wea.zmo);
        b.eda(this.style.zmo);
        this.hed.hio("history", b)
    };
    this.smn = function (b, j, d, g, c, e) {
        var f = new ilb();
        f.zky(new xop(b, j, 0, 0), this.context2D);
        f.qol = this.dil;
        f.parent = this;
        f.qkj = g;
        f.pxj = c;
        f.sov(e);
        f.xxy(d);
        f.oac(true);
        return f
    };
    this.qdm = function () {
        var e = [];
        for (var d = 0, b = this.wrr.ifw("symb"); d < b; d++) {
            e[d] = this.wrr.ark("symb" + d)
        }
        var c = new ixc();
        c.zky(this.wea.crs.eqf, null, this.context2D);
        c.rtx = e;
        c.wak = this.wrr.ark("reelfront");
        c.oac(false);
        return c
    };
    this.qtz = function () {
        if (this.xgy === true) {
            for (var c = 0, b = this.jms.length; c < b; c++) {
                if (!this.hgi) {
                    this.jms[c].dox(this.wcb, this.wea.hbb.jco, this.wea.hbb.jyt)
                }
            }
            if (this.owh) {
                this.owh.dox(this.wcb, this.wea.hbb.jco + this.owh.x, this.wea.hbb.jyt + this.owh.y)
            }
        }
        if (this.kxp) {
            this.kxp.dox(this.wcb, this.wea.hbb.jco, this.wea.hbb.jyt)
        }
    };
    this.fnv = function (d, c, b) {
        this.zdh({
            type: "gameDataLoaded",
            sender: this.naq,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                success: true
            }
        });
        this.shz = true;
        this.state = d;
        this.qpy = b;
        clearInterval(this.vkh);
        if (this.eft) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.uao = 0
            }
            if (this.wrr.mqb === true) {
                this.det(this.jcu[this.uao])
            } else {
                this.kxj((this.jcu[this.uao] === 0))
            }
        }
        if (this.aqu === true) {
            this.lkw = true
        }
        this.zwa();
        this.unf();
        this.csv();
        this.qmz();
        if (this.gji) {
            this.gji.myd.mpx("history", "#ner", [c])
        }
        this.hvn();
        window.pji(this.vps)
    };
    this.vps = function () {
        dac.khg.gow(dac.khg.qpy);
        dac.khg.mti = true;
        dac.khg.bjt();
        dac.khg.vko();
        dac.khg.qtz();
        dac.khg.pla();
        if (dac.khg.aqu === true) {
            dac.khg.agl(true)
        }
        if (dac.fip.nnv === dac.os.smu && dac.fip.sjk !== dac.xij.sxp) {
            dac.khg.snk([{
                xmt: dac.hcf.rgp
            }])
        } else {
            if (dac.khg.opy > 0) {
                if (dac.khg.bzy === 0) {
                    dac.khg.snk([{
                        xmt: dac.hcf.iht
                    }])
                } else {
                    if (dac.khg.bzy < dac.khg.opy) {
                        dac.khg.snk([{
                            xmt: dac.hcf.mte
                        }])
                    }
                }
            } else {
                dac.khg.kdt(dac.khg.state)
            }
        }
        if (dac.ewv.value37 && !dac.khg.zam()) {
            dac.khg.ehi()
        }
        if (dac.khg.qqe()) {
            setTimeout(dac.khg.pla, 20)
        }
    };
    this.wqg = function () {
        this.vjx = new grd().zky(this, dac.ewv.value6)
    };
    this.jah = function () {
        this.vjx = new orm().zky(this, dac.ewv.value6)
    };
    this.yez = function (q) {
        if (q.preventDefault) {
            q.preventDefault()
        }
        if (q.stopPropagation) {
            q.stopPropagation()
        }
        if (this.lkw) {
            return
        }
        var k = 0,
            j = 0,
            u = false,
            l = false,
            f = false,
            v = this.hed.znq("stats"),
            t = this.hed.znq("topb"),
            c = this.hed.znq("topi"),
            d = this.hed.znq("betsel"),
            n = this.hed.znq("linesel"),
            o = this.hed.znq("llinep"),
            w = this.hed.znq("rlinep"),
            z = this.hed.znq("finfop"),
            p = this.hed.znq("finfoc"),
            m = this.hed.znq("autop"),
            b = this.hed.znq("settings"),
            g = this.hed.znq("jwp");
        if (q.touches) {
            var e = q.touches[0];
            u = true;
            if (!this.srw) {
                k = e.pageX - this.offsetLeft;
                j = e.pageY - this.offsetTop
            } else {
                k = Math.round((e.pageX - this.offsetLeft) / this.yyv);
                j = Math.round((e.pageY - this.offsetTop) / this.adv)
            }
        } else {
            if (q.which != 1) {
                return
            }
            if (!this.srw) {
                k = q.pageX - this.offsetLeft;
                j = q.pageY - this.offsetTop
            } else {
                k = Math.round((q.pageX - this.offsetLeft) / this.yyv);
                j = Math.round((q.pageY - this.offsetTop) / this.adv)
            }
        }
        this.num();
        if (m && m.nnj()) {
            if (m.yez(k, j)) {
                return
            }
        }
        if (t && t.nnj()) {
            if (t.yez(k, j)) {
                clearTimeout(this.wuz);
                return
            } else {
                f = true
            }
        }
        if (d) {
            if (d.nnj()) {
                if (d.yez(k, j, u)) {
                    clearTimeout(this.wuz);
                    return
                } else {
                    l = true
                }
            }
        }
        if (n) {
            if (n.nnj()) {
                if (n.yez(k, j, u)) {
                    clearTimeout(this.wuz);
                    return
                } else {
                    l = true
                }
            }
        }
        if (f) {
            this.ogp(this.kxp.cuj(k, j, null));
            return
        } else {
            if (l) {
                if ((d && d.yij()) && ((n && n.yij()) || !n)) {
                    this.dgg(this.kxp.cuj(k, j, null))
                }
                return
            }
        }
        if (this.rdw() && !this.mjw && o && w) {
            if (o.yez(k, j, l)) {
                return
            } else {
                if (w.yez(k, j, l)) {
                    return
                }
            }
        }
        if (z) {
            if (z.yez(k, j)) {
                return
            }
        }
        if (p) {
            if (p.yez(k, j)) {
                return
            }
        }
        if (b && b.nnj()) {
            if (b.yez(k, j)) {
                return
            }
        }
        if (c) {
            if (c.yez(k, j, u)) {
                return
            }
        }
        if (v && v.nnj()) {
            if (v.yez(k, j)) {
                return
            }
        }
        if (this.jqa && this.jqa.nnj()) {
            if (this.jqa.yez(k, j)) {
                return
            }
        }
        if (this.gji && this.gji.nnj()) {
            if (this.gji.yez(k, j)) {
                return
            }
        }
        if (g) {
            if (g.yez(k, j)) {
                return
            }
        }
        if (this.kxp) {
            if (this.kxp.yez(k, j, l)) {
                return
            }
        }
        for (var r = 0, s = this.jms.length; r < s; r++) {
            if (this.jms[r].yez(k, j)) {
                return
            }
        }
    };
    this.vkf = function (j) {
        if (j.preventDefault) {
            j.preventDefault()
        }
        if (j.stopPropagation) {
            j.stopPropagation()
        }
        if (this.lkw) {
            return
        }
        var k = this.hed.znq("topb"),
            d = this.hed.znq("autop"),
            g = this.hed.znq("settings"),
            c = this.hed.znq("betsel"),
            e = this.hed.znq("linesel");
        if (d && d.nnj()) {
            if (d.vkf()) {
                return
            }
        }
        if (c) {
            if (c.vkf()) {
                return
            }
        }
        if (e) {
            if (e.vkf()) {
                return
            }
        }
        if (this.jqa && this.jqa.nnj()) {
            if (this.jqa.vkf()) {
                return
            }
        }
        if (this.gji && this.gji.nnj()) {
            if (this.gji.vkf()) {
                return
            }
        }
        if (this.kxp) {
            if (this.kxp.vkf()) {
                return
            }
        }
        if (k) {
            if (k.vkf()) {
                return
            }
        }
        if (g) {
            if (g.vkf()) {
                return
            }
        }
        for (var f = 0, b = this.jms.length; f < b; f++) {
            if (this.jms[f].vkf()) {
                return
            }
        }
    };
    this.tda = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.lkw) {
            return
        }
        var k = false,
            e = false,
            l = this.hed.znq("topb"),
            b = this.hed.znq("betsel"),
            d = this.hed.znq("linesel"),
            g = this.hed.znq("finfop"),
            j = this.hed.znq("finfoc"),
            f = this.hed.znq("autop");
        if (f && f.nnj()) {
            if (f.tda(c.keyCode)) {
                return
            }
        }
        if (l) {
            if (l.tda(c.keyCode)) {
                clearTimeout(this.wuz);
                return
            } else {
                if (l.nnj() && l.yij()) {
                    e = true
                }
            }
        }
        if (g) {
            if (g.tda()) {
                return
            }
        }
        if (j) {
            if (j.tda(c.keyCode)) {
                return
            }
        }
        if (b) {
            if (b.nnj()) {
                if (b.tda(c.keyCode)) {
                    clearTimeout(this.wuz);
                    return
                } else {
                    k = true
                }
            }
        }
        if (d) {
            if (d.nnj()) {
                if (d.tda(c.keyCode)) {
                    clearTimeout(this.wuz);
                    return
                } else {
                    k = true
                }
            }
        }
        if (e) {
            this.ogp(this.kxp.cuj(null, null, c.keyCode));
            return
        } else {
            if (k) {
                if ((b && b.yij()) && ((d && d.yij()) || !d)) {
                    this.dgg(this.kxp.cuj(null, null, c.keyCode))
                }
                return
            }
        }
        if (this.jqa && this.jqa.nnj()) {
            if (this.jqa.tda(c.keyCode)) {
                return
            }
        }
        if (this.gji && this.gji.nnj()) {
            if (this.gji.tda(c.keyCode)) {
                return
            }
        }
        if (this.kxp) {
            if (this.kxp.tda(c.keyCode)) {
                return
            }
        }
    };
    this.hkt = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.lkw) {
            return
        }
        var b = this.hed.znq("autop"),
            d = this.hed.znq("topb");
        if (b && b.nnj()) {
            if (b.hkt()) {
                return
            }
        }
        if (this.jqa && this.jqa.nnj()) {
            if (this.jqa.hkt()) {
                return
            }
        }
        if (this.gji && this.gji.nnj()) {
            if (this.gji.hkt()) {
                return
            }
        }
        if (this.kxp) {
            if (this.kxp.hkt(c.keyCode)) {
                return
            }
        }
        if (d) {
            if (d.hkt()) {
                return
            }
        }
    };
    this.ksw = function () {
        return (dac.fip.jic() && !this.fsd)
    };
    this.wsq = function () {
        return (dac.fip.jic() && !this.pip)
    };
    this.tqc = function () {
        return (this.oyf === true && this.wrr.mqb === true)
    };
    this.qsy = function () {
        if (this.tqc() === true) {
            this.wrr.dls("melody")
        }
    };
    this.ncj = function () {
        if (this.tqc() === true) {
            this.wrr.ulw("melody")
        }
    };
    this.mxb = function (c, b) {
        if (this.tqc() === true && this.bpc === true) {
            this.wrr.tlu("melody", c, b)
        }
    };
    this.kyt = function () {
        return false
    };
    this.aun = function () {
        return 1
    };
    this.dda = function () {
        return 0
    };
    this.jjn = function (b) {
        this.wea = this.ymu(b);
        this.width = this.wea.canvas.eqf.width;
        this.height = this.wea.canvas.eqf.height;
        this.qsf();
        this.mkf();
        this.qhp()
    };
    this.lec = function () {
        this.style = new kla()
    };
    this.ymu = function (b) {
        this.xvh = b;
        if (b == dac.wea.dsl) {
            return new iai()
        } else {
            if (b == dac.wea.ddr) {
                return new wbu()
            } else {
                if (b == dac.wea.awx) {
                    return new iqd()
                } else {
                    if (b == dac.wea.xwb) {
                        return new cug()
                    } else {
                        if (b == dac.wea.pxi) {
                            return new gor()
                        } else {
                            if (b == dac.wea.wzw) {
                                return new gnj()
                            } else {
                                if (b == dac.wea.sln) {
                                    return new tcz()
                                } else {
                                    if (b == dac.wea.xft) {
                                        return new rqf()
                                    } else {
                                        if (b == dac.wea.tsn) {
                                            return new zcz()
                                        } else {
                                            if (b == dac.wea.pjo) {
                                                return new ppr()
                                            } else {
                                                if (b == dac.wea.rwv) {
                                                    return new dqr()
                                                }
                                            }
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
    this.qhp = function () {};
    this.tkq = function (b) {
        if (this.ytd) {
            this.lxu();
            this.szm(b);
            this.qtz()
        } else {
            this.vvv()
        }
    };
    this.lxu = function () {
        this.canvas.width = 0;
        if (this.ggc === false) {
            this.lwj.style.marginTop = (-this.height / 2 + this.esr()) + "px";
            this.lwj.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.lwj.style.left = "0px";
            this.lwj.style.top = "0px";
            this.lwj.style.marginTop = ((this.zbj - this.height) / 2 + this.esr()) + "px";
            this.lwj.style.marginLeft = ((this.csl - this.width) / 2) + "px"
        }
        this.lwj.style.width = (this.width > this.csl) ? this.csl + "px" : this.width + "px";
        this.lwj.style.height = (this.height > this.zbj) ? this.zbj + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.qqf) {
            this.qqf.style.width = this.width + "px";
            this.qqf.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.szm = function (b) {
        this.soc();
        this.kqt();
        this.sjy();
        this.ogu();
        this.jff();
        if (!(this.fsd && !this.pip)) {
            this.xdd()
        }
        if (!this.fsd) {
            this.yyq();
            if (this.wea.vfk) {
                if (this.hed.znq("tops")) {
                    this.dsb()
                } else {
                    this.jlt()
                }
            } else {
                this.hed.zty("tops")
            }
            if (this.aus()) {
                this.hcv()
            }
            this.mhc();
            if (this.qqe()) {
                this.tpy()
            }
        } else {
            this.qnb()
        }
        if (this.wea.lzv) {
            this.fud();
            this.ugh()
        }
        if (this.wea.ykg) {
            this.std();
            if (this.rdw()) {
                this.jul()
            }
        }
        if (this.wea.ryc) {
            this.ays();
            if (!this.wea.bzg) {
                this.tdy()
            }
        }
        if (this.wea.rcb) {
            this.irh()
        }
        if (this.wea.bzg) {
            this.xhs()
        }
        this.xrr();
        if (b) {
            this.ijh()
        }
        this.kho();
        this.ozv();
        this.ktd()
    };
    this.soc = function () {
        if (this.kxp) {
            var b = (this.fsd && this.ltg) ? this.wea.yoy : this.wea.tcm;
            this.kxp.cqz(b.eqf);
            this.kxp.sov(b, this.nrz);
            if (this.wea.awz === true) {
                this.kxp.eda(this.style.tcm, this.nrz)
            }
        }
    };
    this.kqt = function () {
        if (this.boc) {
            this.boc.cqz((this.hgi === false) ? this.wea.boc.eqf : this.wea.boc.dmq, (this.cgd) ? this.wea.boc.jjr : this.wea.boc.avp)
        }
        if (this.iqw) {
            this.iqw.cqz((this.hgi === false) ? this.wea.iqw.eqf : this.wea.iqw.dmq, (this.cgd) ? this.wea.iqw.jjr : this.wea.iqw.avp)
        }
        if (this.ulp) {
            this.ulp.cqz((this.hgi === false) ? this.wea.ulp.eqf : this.wea.ulp.dmq, (this.cgd) ? this.wea.ulp.jjr : this.wea.ulp.avp)
        }
        if (this.dro) {
            this.dro.cqz((this.hgi === false) ? this.wea.dro.eqf : this.wea.dro.dmq, (this.cgd) ? this.wea.dro.jjr : this.wea.dro.avp)
        }
        if (this.hau) {
            this.hau.cqz((this.hgi === false) ? this.wea.hau.eqf : this.wea.hau.dmq, (this.cgd) ? this.wea.hau.jjr : this.wea.hau.avp)
        }
    };
    this.fud = function () {
        var b = this.hed.znq("winp");
        if (b) {
            b.cqz(this.wea.mqj.eqf);
            b.sov(this.wea.mqj)
        }
    };
    this.ugh = function () {};
    this.sjy = function () {
        if (this.owh) {
            this.owh.cqz(this.wea.crs.eqf);
            this.owh.kzk = this.kzk;
            this.owh.rze = this.rze;
            this.owh.sov(this.wea.crs)
        }
    };
    this.irh = function () {
        var c = this.hed.znq("llinep"),
            b = this.hed.znq("rlinep");
        if (c) {
            c.x = this.wea.ysu.eqf.x;
            c.y = this.wea.ysu.eqf.y;
            c.sov(this.wea.ysu)
        }
        if (b) {
            b.x = this.wea.mur.eqf.x;
            b.y = this.wea.mur.eqf.y;
            b.sov(this.wea.mur)
        }
    };
    this.std = function () {
        var b = this.hed.znq("betsel");
        if (b) {
            b.cqz(this.wea.myl.eqf);
            b.sov(this.wea.myl)
        }
    };
    this.jul = function () {
        var b = this.hed.znq("linesel");
        if (b) {
            b.cqz(this.wea.pod.eqf);
            b.sov(this.wea.pod)
        }
    };
    this.dsb = function () {
        var b = this.hed.znq("tops");
        if (b) {
            b.cqz(this.wea.top.eqf);
            b.oac(this.wea.vfk)
        }
    };
    this.xdd = function () {
        if (this.jqa) {
            this.jqa.cqz(this.wea.hwg.eqf);
            this.jqa.sov(this.wea.hwg);
            if (this.wea.awz === true) {
                this.jqa.eda(this.style.hwg)
            }
        }
    };
    this.jff = function () {
        if (this.gji) {
            var b = (this.fsd && this.ltg) ? this.wea.vor : this.wea.jzz;
            this.gji.cqz(b.eqf);
            this.gji.sov(b);
            if (this.wea.awz === true) {
                this.gji.eda(this.style.jzz)
            }
        }
    };
    this.ogu = function () {};
    this.yyq = function () {};
    this.xrr = function () {};
    this.ijh = function () {
        if (this.hed.znq("tops")) {
            this.jqa.srm(true);
            this.ifo()
        } else {
            this.pou = null;
            this.jqa.ixl(this.dyy, true)
        }
        this.jqa.ffe()
    };
    this.qsf = function () {
        var c = 0 - this.wea.crs.eqf.x,
            b = 0 - this.wea.crs.eqf.y;
        this.rze = [
            [{
                x: this.wea.boc.eqf.x + c,
                y: this.wea.boc.eqf.y + b
            }, {
                x: this.wea.boc.eqf.x + c,
                y: this.wea.boc.eqf.y + b + this.wea.crs.qig
            }, {
                x: this.wea.boc.eqf.x + c,
                y: this.wea.boc.eqf.y + b + 2 * this.wea.crs.qig
            }],
            [{
                x: this.wea.iqw.eqf.x + c,
                y: this.wea.iqw.eqf.y + b
            }, {
                x: this.wea.iqw.eqf.x + c,
                y: this.wea.iqw.eqf.y + b + this.wea.crs.qig
            }, {
                x: this.wea.iqw.eqf.x + c,
                y: this.wea.iqw.eqf.y + b + 2 * this.wea.crs.qig
            }],
            [{
                x: this.wea.ulp.eqf.x + c,
                y: this.wea.ulp.eqf.y + b
            }, {
                x: this.wea.ulp.eqf.x + c,
                y: this.wea.ulp.eqf.y + b + this.wea.crs.qig
            }, {
                x: this.wea.ulp.eqf.x + c,
                y: this.wea.ulp.eqf.y + b + 2 * this.wea.crs.qig
            }],
            [{
                x: this.wea.dro.eqf.x + c,
                y: this.wea.dro.eqf.y + b
            }, {
                x: this.wea.dro.eqf.x + c,
                y: this.wea.dro.eqf.y + b + this.wea.crs.qig
            }, {
                x: this.wea.dro.eqf.x + c,
                y: this.wea.dro.eqf.y + b + 2 * this.wea.crs.qig
            }],
            [{
                x: this.wea.hau.eqf.x + c,
                y: this.wea.hau.eqf.y + b
            }, {
                x: this.wea.hau.eqf.x + c,
                y: this.wea.hau.eqf.y + b + this.wea.crs.qig
            }, {
                x: this.wea.hau.eqf.x + c,
                y: this.wea.hau.eqf.y + b + 2 * this.wea.crs.qig
            }]
        ]
    };
    this.mkf = function () {
        var e = 0 - this.wea.crs.eqf.x,
            b = 0 - this.wea.crs.eqf.y;
        this.kzk = [];
        for (var g = 0, f = this.wea.kzk.length; g < f; g++) {
            this.kzk[g] = [];
            for (var d = 0, k = 0, c = this.wea.kzk[g].length; d < c; d += 2, k += 1) {
                this.kzk[g][k] = {
                    x: this.wea.kzk[g][d] + e,
                    y: this.wea.kzk[g][d + 1] + b
                }
            }
        }
    };
    this.xmf = function () {
        this.sso = [];
        if (this.zam() === false && this.rjo != "") {
            this.sso.push(this.rjo)
        }
        this.sso.push(this.language.zxs);
        this.sso.push(this.language.llw + " " + this.eik(this.aiz()) + ((this.ksw() === true) ? "|" : " ") + this.language.rzt + " " + this.eik(this.fla()));
        this.sso.push(this.language.fik)
    };
    this.aen = function () {
        this.wyo = [];
        this.wyo[0] = this.language.lmu;
        this.wyo[1] = this.language.sbp
    };
    this.gpc = function () {
        this.deg = [];
        this.deg[0] = this.language.kug;
        this.deg[1] = this.language.lsk
    };
    this.jao = function () {
        qeg.prototype.jao.call(this);
        if (this.acs() === true) {
            this.wrr.ylx(true);
            this.wrr.nxh(dac.ewv.value45 === dac.fzq.hwf || dac.ewv.value45 === dac.fzq.von)
        }
    };
    this.cdp = function () {
        var c = "";
        this.wrr.ydd("spin", null, false, this.oeq + "reels");
        this.wrr.ydd("stop1", null, false, this.oeq + "stop_reel2");
        this.wrr.ydd("stop2", null, false, this.oeq + "stop_reel2");
        this.wrr.ydd("start", null, false, this.oeq + "onstart");
        if (this.tqc() === true) {
            this.wrr.ydd("melody", null, true, this.oeq + "background")
        }
        if (this.oag > 0) {
            this.wrr.ydd("wincountfade", null, false, this.oeq + "count_fade")
        }
        c = dac.ewv.value30 + "/slot/sounds/";
        this.wrr.ydd("winfinal", this.bvr, false, c + "winfinal");
        if (this.hcs <= 2) {
            this.wrr.ydd("wincount", null, false, c + "countup" + this.hcs + "1");
            this.wrr.ydd("wincount1", null, false, c + "countup" + this.hcs + "2");
            this.wrr.ydd("wincount3", null, false, c + "countup" + this.hcs + "3");
            this.wrr.ydd("wincount5", null, false, c + "countup" + this.hcs + "4");
            if (this.wrr.mqb === false) {
                this.wrr.ydd("wincount2", null, false, c + "countup" + this.hcs + "2");
                this.wrr.ydd("wincount4", null, false, c + "countup" + this.hcs + "3");
                this.wrr.ydd("wincount6", null, false, c + "countup" + this.hcs + "4")
            }
            this.wrr.ydd("winline", null, false, c + "winline");
            this.wrr.ydd("collect", null, false, c + "collect");
            this.wrr.ydd("collectend", null, false, c + "collect1")
        }
        c = dac.ewv.value30 + "/basic/sounds/";
        this.wrr.ydd("silence", null, false, c + "silence");
        this.wrr.ydd("audioon", null, false, c + "audio_on");
        if (!dac.ewv.value55) {
            if (this.ksw() === false) {
                this.wrr.ydd("btn", null, false, c + "btn");
                this.wrr.ydd("auto_on", null, false, c + "auto_on");
                this.wrr.ydd("auto_off", null, false, c + "auto_off");
                this.wrr.ydd("gamble_on", null, false, c + "gamble_on");
                this.wrr.ydd("gamble_off", null, false, c + "gamble_off");
                if (this.tqc() === false && this.hcs <= 2) {
                    this.wrr.ydd("gambleprop", null, true, c + "gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.wrr.ydd("step" + b, null, false, c + "step" + (b + 1))
                }
                this.wrr.ydd("maxstep", null, false, c + "maxstep")
            } else {
                this.wrr.ydd("btn", null, false, c + "btn2");
                this.wrr.ydd("auto_on", null, false, c + "auto_on");
                this.wrr.ydd("auto_off", null, false, c + "auto_off")
            }
        } else {
            this.wrr.ydd("btn", null, false, c + "ama_btn");
            if (this.ksw() === false) {
                this.wrr.ydd("gamble_on", null, false, c + "ama_gamble_on");
                this.wrr.ydd("gamble_off", null, false, c + "ama_gamble_off");
                if (this.tqc() === false && this.hcs <= 2) {
                    this.wrr.ydd("gambleprop", null, true, c + "ama_gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.wrr.ydd("step" + b, null, false, c + "ama_step")
                }
                this.wrr.ydd("maxstep", null, false, c + "ama_step")
            }
        }
        if (this.mkz() === true) {
            this.wrr.ydd("jackpot", null, false, c + "jackpot");
            if (this.rko()) {
                this.wrr.ydd("mystery_jackpot", null, false, c + "mystery_jackpot")
            }
        }
        if (this.ksw() === false) {
            this.wrr.ydd("panel_in", null, false, c + "panel_in");
            this.wrr.ydd("panel_out", null, false, c + "panel_out")
        }
        c = dac.ewv.value30 + "/gamble/sounds/";
        this.wrr.ydd("gamble1", null, false, c + "deal_2");
        this.wrr.ydd("gamble2", null, false, c + "deal_2");
        this.wrr.ydd("gamblewin1", null, false, c + "win1");
        this.wrr.ydd("gamblewin2", null, false, c + "win2");
        this.wrr.ydd("gamblewin3", null, false, c + "win3");
        this.dmi();
        this.vqn();
        this.kdy()
    };
    this.dmi = function () {
        for (var b = 0; b < this.wkz; b++) {
            this.wrr.ydd("symb" + b, this.hia, false, this.oeq + "symb" + (b + 1))
        }
    };
    this.vqn = function () {
        var b = dac.ewv.value30 + "/slot/sounds/";
        this.wrr.ydd("bigwin", null, false, b + "bigwin");
        this.wrr.ydd("megawin", null, false, b + "megawin");
        this.wrr.ydd("nicewin", null, false, b + "nicewin")
    };
    this.kdy = function () {};
    this.xyd = function () {
        var b = this.cvs + this.wea.type + "/";
        this.wrr.fow("icon", b + "icon_out.png");
        if (this.acs() === true && (dac.ewv.value45 === dac.fzq.hwf || dac.ewv.value45 === dac.fzq.von)) {
            this.wrr.fow("device_info", b + "info_" + ((this.ksw() === true) ? "smartphone.png" : "tablet.png"))
        }
        if (this.dqo) {
            this.wrr.fow("winlines", b + "wl.png")
        }
        this.wrr.fow("s_symb", b + "symbols_small.png");
        b = dac.ewv.value30 + "/basic/images/" + this.wea.type + "/";
        if (this.mkz() === true) {
            this.wrr.fow("jackpot", b + "jackpot.png");
            if (this.rko()) {
                this.wrr.zqf(b, "mystery_jackpot.json")
            }
        }
        if (this.ksw() === true) {
            if (this.wea.awz === false) {
                this.wrr.fow("btn_back", b + "buttonback.png")
            }
        }
        b = dac.ewv.value30 + "/slot/images/" + this.wea.type + "/";
        if (this.ksw() === true) {
            if (this.wea.awz === true) {
                this.wrr.zqf(b, "gui_mobile_v29.json")
            } else {
                this.wrr.zqf(b, "gui_mobile_v17.json")
            }
        } else {
            if (dac.ewv.value57 === dac.ui.ruq || this.beq() != null) {
                this.wrr.zqf(b, "gui_desktop_v27.json")
            } else {
                this.wrr.zqf(b, "gui_desktop_v17.json")
            }
        }
        if (this.alz && !this.fsd) {
            this.wrr.fow("firework", b + "firework.png")
        }
        this.leo();
        this.rkk();
        this.avb();
        this.nir();
        this.use()
    };
    this.rkk = function () {
        var b = this.cvs + this.wea.type + "/";
        this.wrr.fow("m_back", b + "main.png");
        this.wrr.fow("g_back", b + "gamble.jpg");
        this.wrr.fow("m_win", b + "winPanel.png");
        this.wrr.fow("h_paytable", b + "wthelp.jpg");
        this.wrr.fow("h_winlines", b + "wlhelp.jpg")
    };
    this.avb = function () {
        var c = this.cvs + this.wea.type + "/";
        this.wrr.zqf(c, "symbols.json");
        for (var b = 0; b < this.wkz; b++) {
            this.wrr.fow("anim" + b, c + "symbanim" + (b + 1) + ".jpg")
        }
    };
    this.nir = function () {
        var b = dac.ewv.value30 + "/slot/images/" + this.wea.type + "/";
        this.wrr.fow("wins", b + "wins.png")
    };
    this.leo = function () {
        var b = dac.ewv.value30 + "/gamble/images/" + this.wea.type + "/";
        this.wrr.fow("g_red", b + "red_orig.png");
        this.wrr.fow("g_blue", b + "blue_orig.png");
        this.wrr.zqf(b, "gamble.json")
    };
    this.use = function () {};
    this.vfq = function (b) {
        var c = this.dzc;
        b = (b != null && b === true) ? true : false;
        if (this.rpm && !this.qdz && !this.mjw) {
            c = c - this.win
        }
        if (this.jof) {
            c = c - this.jof.value
        }
        if (!this.mjw) {
            this.lxo(c, true, b)
        }
        this.ueh(this.totalBet, true);
        this.hed.mpx("tops", "#pla");
        this.hed.mpx("settings", "#pll", [this.eik(this.uqc), this.snl, this.eik(this.tac())])
    };
    this.pla = function (p, o, q, D, f) {
        if (dac.khg.inc()) {
            var b = (p != null && o != null && q != null && D != null),
                d = (b === true) ? new xop(p, o, q, D) : ((dac.khg.wea.awz === true) ? new xop(dac.khg.wea.tcm.eqf.x, dac.khg.wea.tcm.eqf.y, dac.khg.wea.tcm.eqf.width, dac.khg.wea.tcm.eqf.height) : new xop(dac.khg.wea.khg.eqf.x, dac.khg.wea.khg.eqf.y, dac.khg.wea.khg.eqf.width, dac.khg.wea.khg.eqf.height)),
                A = dac.khg.context2D,
                g = (dac.khg.pip === true) ? dac.khg.style.khg.tho : dac.khg.style.khg.backgroundColor,
                G = dac.khg.hed.znq("stats"),
                c = dac.khg.hed.znq("history"),
                E = dac.khg.hed.znq("topb"),
                j = dac.khg.hed.znq("topi"),
                k = dac.khg.hed.znq("betsel"),
                s = dac.khg.hed.znq("linesel"),
                t = dac.khg.hed.znq("tops"),
                l = dac.khg.hed.znq("winp"),
                m = dac.khg.hed.znq("fwinp"),
                v = dac.khg.hed.znq("llinep"),
                I = dac.khg.hed.znq("rlinep"),
                H = dac.khg.hed.znq("finfop"),
                z = dac.khg.hed.znq("finfoc"),
                r = dac.khg.hed.znq("autop"),
                F = dac.khg.hed.xtb("jackpots"),
                n = dac.khg.hed.znq("jwp"),
                u = dac.khg.hed.znq("mjwp"),
                e = dac.khg.hed.znq("settings");
            dac.khg.awv = false;
            if (dac.khg.hgi === true) {
                dac.khg.vad()
            }
            A.save();
            if (b) {
                A.beginPath();
                A.rect(p, o, q, D);
                A.closePath();
                A.clip()
            }
            if (f == null || f === false) {
                A.clearRect(0, 0, dac.khg.width, dac.khg.height)
            }
            if (dac.khg.wea.xns) {
                if (dac.khg.hgi === false) {
                    dac.fip.dml(dac.khg.context2D, dac.khg.wea.khg.eqf.x - dac.khg.wea.khg.dkv, dac.khg.wea.khg.eqf.y - dac.khg.wea.khg.dkv, dac.khg.wea.khg.eqf.width + 2 * dac.khg.wea.khg.dkv, dac.khg.wea.khg.eqf.height + 2 * dac.khg.wea.khg.dkv, g, 1)
                } else {
                    dac.fip.dml(dac.khg.context2D, dac.khg.wea.khg.eqf.x - dac.khg.wea.khg.dkv, dac.khg.wea.khg.eqf.y - dac.khg.wea.khg.dkv, dac.khg.wea.khg.eqf.width + 2 * dac.khg.wea.khg.dkv, dac.khg.wea.khg.eqf.height + 2 * dac.khg.wea.khg.dkv, null, 0, g, dac.khg.wea.khg.dkv, 1)
                }
            }
            if (c) {
                c.pla()
            }
            if (j) {
                j.pla()
            }
            if (t) {
                t.pla()
            }
            if (G && G.nnj()) {
                G.pla()
            } else {
                if (dac.khg.jqa && dac.khg.jqa.nnj()) {
                    dac.khg.jqa.pla()
                } else {
                    if (dac.khg.gji && dac.khg.gji.nnj()) {
                        dac.khg.gji.pla()
                    } else {
                        if (dac.khg.hgi) {
                            A.drawImage(dac.khg.udz, dac.khg.wea.hbb.eqf.x, dac.khg.wea.hbb.eqf.y)
                        } else {
                            A.drawImage(dac.khg.wcb, dac.khg.wea.hbb.eqf.x, dac.khg.wea.hbb.eqf.y)
                        }
                        if (l && l.nnj()) {
                            l.pla()
                        } else {
                            if (m && m.nnj()) {
                                m.pla()
                            }
                        }
                        if (v) {
                            v.pla()
                        }
                        if (I) {
                            I.pla()
                        }
                        if (dac.khg.hgi === false) {
                            for (var B = 0, C = dac.khg.jms.length; B < C; B++) {
                                if (dac.khg.jms[B]) {
                                    dac.khg.jms[B].pla()
                                }
                            }
                        }
                        if (dac.khg.owh) {
                            dac.khg.owh.pla()
                        }
                        if (dac.khg.kxp) {
                            dac.khg.kxp.pla()
                        }
                        for (var B = 0, C = F.length; B < C; B++) {
                            F[B].pla()
                        }
                        if (n) {
                            if (n.nnj()) {
                                dac.khg.pzf(A, d)
                            }
                            n.pla()
                        }
                        if (u) {
                            if (u.nnj()) {
                                dac.khg.pzf(A, d)
                            }
                            u.pla()
                        }
                        if (H) {
                            if (H.nnj()) {
                                dac.khg.pzf(A, d)
                            }
                            H.pla()
                        }
                        if (z) {
                            if (z.nnj()) {
                                dac.khg.pzf(A, d)
                            }
                            z.pla()
                        }
                    }
                }
            }
            if (k) {
                k.pla()
            }
            if (s) {
                s.pla()
            }
            if (E) {
                E.pla()
            }
            if (r) {
                r.pla()
            }
            if (e) {
                e.pla()
            }
            A.restore()
        }
    };
    this.pzf = function (b, c) {
        this.awv = true;
        dac.fip.dml(b, c.x, c.y, c.width, c.height, "black", 0.5)
    };
    this.hri = function () {
        for (var c = 0, b = this.jms.length; c < b; c++) {
            if (this.jms[c] && this.sgp[c] === true) {
                this.jms[c].pla()
            }
        }
    };
    this.vad = function () {
        var d = this.zoc,
            c = this.wrr.ark("m_back"),
            f = this.wrr.ark("f_back");
        if (this.fsd && this.ltg && this.style.khg.gdc) {
            c = this.wrr.ark("m_m_back");
            f = this.wrr.ark("m_f_back")
        }
        if (this.inc()) {
            d.save();
            if (this.nrz) {
                d.drawImage(f, 0, 0)
            } else {
                d.drawImage(c, 0, 0)
            }
            for (var e = 0, b = this.jms.length; e < b; e++) {
                this.jms[e].pla()
            }
            d.restore()
        }
    };
    this.vko = function () {
        var d = dac.khg.jks,
            g = (dac.khg.wea.hbb.eqf.width - dac.khg.wea.khg.eqf.width) / 2,
            e = 0,
            c = (dac.khg.nrz) ? dac.khg.wrr.ark("f_back") : dac.khg.wrr.ark("m_back"),
            k = (dac.khg.nrz) ? dac.khg.wrr.ark("f_left") : dac.khg.wrr.ark("m_left"),
            j = (dac.khg.nrz) ? dac.khg.wrr.ark("f_right") : dac.khg.wrr.ark("m_right");
        if (dac.khg.fsd && dac.khg.ltg && dac.khg.style.khg.gdc) {
            c = (dac.khg.nrz) ? dac.khg.wrr.ark("m_f_back") : dac.khg.wrr.ark("m_m_back")
        }
        d.save();
        d.clearRect(0, 0, dac.khg.wea.hbb.eqf.width, dac.khg.wea.hbb.eqf.height);
        d.drawImage(c, g, e);
        if (dac.khg.xvh === dac.wea.pjo || dac.khg.xvh === dac.wea.rwv) {
            if (k) {
                d.drawImage(k, 0, 0)
            }
            if (j) {
                d.drawImage(j, dac.khg.wea.hbb.eqf.width - j.width, 0)
            }
        }
        d.restore();
        if (dac.khg.hgi) {
            d = dac.khg.ssr;
            d.save();
            d.drawImage(dac.khg.wcb, 0, 0);
            for (var f = 0, b = dac.khg.jms.length; f < b; f++) {
                d.clearRect(dac.khg.jms[f].x + g, dac.khg.jms[f].y + e, dac.khg.jms[f].width, dac.khg.jms[f].height)
            }
            d.restore()
        }
    };
    this.sce = function (f) {
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
        if (this.iuq < 0) {
            for (var d = 0; d < f; d++) {
                this.ugf[d] = c[e];
                e = (e < c.length - 1) ? e + 1 : 0
            }
            this.wlm = 0;
            this.nem = new Date().getTime();
            this.kqq()
        }
    };
    this.qgd = function () {
        clearTimeout(this.iuq);
        this.iuq = -1;
        dac.fip.jww(this.canvas, this.yyv, this.adv);
        if (this.yis != null) {
            dac.fip.jww(this.yis, this.yyv, this.adv, ((this.wea.yis.eqf.x) - ((this.wea.yis.eqf.x + this.wea.yis.jco) / 2 * (1 - this.yyv))), ((this.wea.yis.eqf.y) - ((this.wea.yis.eqf.y + this.wea.yis.jyt) / 2 * (1 - this.adv))))
        }
    };
    this.kqq = function () {
        var b = dac.khg.yxi,
            d = new Date().getTime(),
            c = null;
        if (dac.khg.wlm >= dac.khg.ugf.length) {
            dac.khg.qgd()
        } else {
            c = dac.khg.ugf[dac.khg.wlm];
            dac.fip.jww(dac.khg.canvas, dac.khg.yyv * c.sx, dac.khg.adv * c.sy, c.tx, c.ty, c.rx, c.ry);
            if (dac.khg.yis != null) {
                dac.fip.jww(dac.khg.yis, dac.khg.yyv * c.sx, dac.khg.adv * c.sy, ((dac.khg.wea.yis.eqf.x) - ((dac.khg.wea.yis.eqf.x + dac.khg.wea.yis.jco) / 2 * (1 - dac.khg.yyv * c.sx))) + c.tx, ((dac.khg.wea.yis.eqf.y) - ((dac.khg.wea.yis.eqf.y + dac.khg.wea.yis.jyt) / 2 * (1 - dac.khg.adv * c.sy))) + c.ty, c.rx, c.ry)
            }
            dac.khg.wlm++;
            b = dac.khg.yxi + (dac.khg.wlm * dac.khg.yxi - (d - dac.khg.nem));
            if (b < 10) {
                b = 10
            }
            dac.khg.iuq = setTimeout(dac.khg.kqq, b)
        }
    };
    this.zdo = function () {
        clearTimeout(dac.khg.xpv);
        if (dac.khg.ygx) {
            if (dac.khg.glo) {
                if (!dac.khg.kjr && dac.khg.okz()) {
                    setTimeout(dac.khg.rhu, 2)
                }
            } else {
                if (!dac.khg.nrz) {
                    if (dac.khg.win > 0 && !dac.khg.qdz) {
                        if (dac.khg.epk) {
                            dac.khg.tkx();
                            if (dac.khg.bap()) {
                                dac.khg.ygx = false;
                                dac.khg.kxp.hly(false);
                                setTimeout(dac.khg.tbj, 400)
                            }
                        } else {
                            if (dac.khg.oiv) {
                                dac.khg.vbk()
                            } else {
                                if (!(dac.khg.epk || dac.khg.oiv)) {
                                    if (dac.khg.bap()) {
                                        dac.khg.ygx = false;
                                        dac.khg.kxp.hly(false);
                                        dac.khg.tbj()
                                    } else {
                                        dac.khg.tkx()
                                    }
                                }
                            }
                        }
                    } else {
                        if (!dac.khg.glo) {
                            if (dac.khg.hnw) {
                                dac.khg.hmv();
                                dac.khg.mqd();
                                return
                            } else {
                                if (dac.khg.xiq) {
                                    dac.khg.hmv();
                                    dac.khg.uuf();
                                    return
                                }
                            }
                            dac.khg.yhj = true;
                            dac.khg.ygx = false;
                            if (dac.khg.ksw() === true) {
                                dac.khg.gtv = (!dac.khg.jzz) ? 1 : 0
                            } else {
                                if (dac.ewv.value62 === true) {
                                    dac.khg.gtv = 0;
                                    if (dac.khg.lyb) {
                                        dac.khg.gtv |= 2
                                    }
                                    if (dac.khg.jzz) {
                                        dac.khg.gtv |= 4
                                    }
                                } else {
                                    dac.khg.gtv = (dac.khg.lyb && !dac.khg.jzz) ? 1 : 0
                                }
                            }
                            if (dac.khg.mjw || (dac.khg.dzc >= dac.khg.tac() && dac.khg.tac() >= dac.khg.dto)) {
                                dac.khg.wwb();
                                for (var c = 0, b = dac.khg.jms.length; c < b; c++) {
                                    dac.khg.wmd[c] = -1;
                                    if (dac.khg.jms[c]) {
                                        dac.khg.jms[c].xcq(dac.khg.okh[0])
                                    }
                                }
                                dac.khg.mgp();
                                dac.khg.zdh({
                                    type: "roundStart",
                                    sender: dac.khg.naq,
                                    lang: sessionStorage.sessionValue1.toUpperCase(),
                                    data: {
                                        totalBet: dac.khg.eik(dac.khg.totalBet)
                                    }
                                });
                                dac.khg.inz();
                                dac.khg.gwt();
                                dac.khg.vjx.play(dac.khg.snl, dac.khg.ayi, dac.khg.gtv);
                                dac.khg.kxp.hly(false);
                                dac.khg.kxp.myd.mpx("start", "#xgf", [true])
                            } else {
                                dac.khg.rbs();
                                dac.khg.hmv();
                                dac.khg.kxp.hly(true);
                                dac.khg.nqt(true);
                                dac.khg.ygx = true
                            }
                            dac.khg.qgp()
                        }
                    }
                } else {
                    if (dac.khg.xwz > 0) {
                        if (dac.khg.epk) {
                            dac.khg.tkx()
                        } else {
                            if (!(dac.khg.uvl || dac.khg.yhj)) {
                                dac.khg.xxs()
                            } else {
                                dac.khg.wct()
                            }
                        }
                    }
                    if (dac.khg.pjz > 0 && !(dac.khg.tfl && !dac.khg.iny)) {
                        if (dac.khg.xiq) {
                            dac.khg.hmv();
                            dac.khg.uuf();
                            return
                        }
                        dac.khg.yhj = true;
                        dac.khg.ygx = false;
                        dac.khg.wwb();
                        for (var c = 0, b = dac.khg.jms.length; c < b; c++) {
                            dac.khg.wmd[c] = -1;
                            if (dac.khg.jms[c]) {
                                dac.khg.jms[c].xcq(dac.khg.okh[0])
                            }
                        }
                        dac.khg.htr();
                        if (dac.khg.ksw() && dac.khg.pjz == 1) {
                            dac.khg.gtv = (!dac.khg.jzz) ? 1 : 0
                        } else {
                            if (dac.ewv.value62 === true) {
                                dac.khg.gtv = 0;
                                if (dac.khg.beq() == null && dac.ewv.value44.e && dac.khg.pjz == 1) {
                                    if (dac.khg.bbi) {
                                        dac.khg.gtv |= 2
                                    }
                                } else {
                                    if (dac.khg.lyb) {
                                        dac.khg.gtv |= 2
                                    }
                                }
                                if (dac.khg.jzz) {
                                    dac.khg.gtv |= 4
                                }
                            } else {
                                if (dac.khg.beq() == null && dac.ewv.value44.e && dac.khg.pjz == 1) {
                                    dac.khg.gtv = (dac.khg.bbi && !dac.khg.jzz) ? 1 : 0
                                } else {
                                    dac.khg.gtv = (dac.khg.lyb && !dac.khg.jzz) ? 1 : 0
                                }
                            }
                        }
                        dac.khg.gwt();
                        dac.khg.vjx.mdy(dac.khg.snl, dac.khg.ayi, dac.khg.gtv);
                        dac.khg.kxp.hly(false);
                        dac.khg.kxp.myd.mpx("start", "#xgf", [true]);
                        dac.khg.wsp()
                    }
                }
            }
        } else {
            if (!dac.khg.zzj && dac.khg.glo && !dac.khg.kjr && dac.khg.okz()) {
                dac.khg.oms = true
            }
        }
    };
    this.bea = function () {
        var b = dac.khg.hed.znq("topi"),
            d = 0,
            c = 0,
            e = 0;
        if (!dac.ewv.value55) {
            dac.khg.wrr.ulw("auto_on");
            dac.khg.wrr.ulw("auto_off")
        }
        if (dac.khg.lyb) {
            dac.khg.lyb = false;
            dac.khg.uyj();
            if (dac.khg.beq() == null && dac.ewv.value44.e && dac.khg.nrz) {
                dac.khg.bbi = false
            }
            dac.khg.kxp.myd.mpx("astart", "#ixm", [dac.khg.lyb]);
            if (!dac.khg.glo) {
                dac.khg.kxp.myd.mpx("start", "#pjk", [dac.khg.language.start, true])
            }
            if (!dac.ewv.value55) {
                dac.khg.wrr.dls("auto_off")
            }
            if (dac.khg.ois && !dac.khg.lyb && !dac.khg.jzz && !dac.khg.nzz() && !dac.khg.nrz && dac.khg.win > 0 && !dac.khg.qdz && !dac.khg.oiv && !dac.khg.glo) {
                if (!dac.khg.kxp.myd.mpx("gamble", "#bdc")) {
                    dac.khg.kxp.myd.mpx("start", "#pjk", [dac.khg.language.ffo, true]);
                    dac.khg.kxp.myd.mpx("gamble", "#pap");
                    dac.khg.xlf();
                    if (!dac.khg.epk) {
                        dac.khg.kxp.myd.mpx("info", "#lns", [dac.khg.ijf(dac.khg.language.mga) + ": " + dac.khg.eik(dac.khg.win)])
                    }
                    dac.khg.lab()
                }
            }
        } else {
            if (dac.khg.beq() != null && dac.khg.fzu <= 0 && dac.khg.ksw() === false) {
                if (b && b.yij() === true) {
                    dac.khg.nqt(false);
                    dac.khg.kxp.hly(false);
                    dac.khg.id = setTimeout(dac.khg.dkr, 300)
                }
            } else {
                if (dac.khg.beq() == null && dac.ewv.value44.e && dac.khg.nrz) {
                    dac.khg.bbi = true
                } else {
                    if (dac.khg.beq() != null && dac.khg.ksw() === true) {
                        dac.khg.fzu = dac.khg.hed.mpx("settings", "#mwc");
                        if (dac.khg.fzu <= 0) {
                            return
                        }
                        d = dac.khg.hed.mpx("settings", "#scr");
                        c = dac.khg.hed.mpx("settings", "#hig");
                        e = dac.khg.hed.mpx("settings", "#blk");
                        dac.khg.osl = (d > 0) ? d : 0;
                        dac.khg.ywj = (c > 0) ? c : 0;
                        dac.khg.rpi = (e > 0) ? e : 0;
                        dac.khg.ajz(dac.khg.beq().o === true || dac.khg.style.khg.gdc == false)
                    }
                }
                dac.khg.lyb = true;
                dac.khg.kxp.myd.mpx("astart", "#ixm", [dac.khg.lyb]);
                if (!dac.khg.glo) {
                    dac.khg.kxp.myd.mpx("start", "#pjk", [dac.khg.language.start, true])
                }
                if (!dac.ewv.value55) {
                    dac.khg.wrr.dls("auto_on")
                }
                if (!dac.khg.glo) {
                    if (dac.khg.nrz || (!dac.khg.nrz && !(dac.khg.win > 0 && dac.khg.ois && dac.khg.jzz && !(dac.khg.qdz || dac.khg.oiv)))) {
                        dac.khg.zdo()
                    }
                }
            }
        }
        if (b) {
            b.xdt("auto", dac.khg.lyb)
        }
    };
    this.dyd = function () {
        if (dac.ucb == 0 && dac.khg.fsd === false && dac.khg.win > 0 && !dac.khg.qdz && dac.khg.bap()) {
            if (!dac.khg.oiv) {
                dac.khg.ygx = false;
                dac.khg.kxp.hly(false);
                if (dac.khg.epk) {
                    dac.khg.tkx();
                    setTimeout(dac.khg.tbj, 400)
                } else {
                    dac.khg.tbj()
                }
            }
            dac.khg.pwq = dac.khg.dyd
        } else {
            qeg.prototype.dyd.call(this)
        }
    };
    this.wvv = function () {
        if (dac.khg.ayi < dac.khg.srx.length - 1) {
            if (dac.khg.ayi >= dac.khg.sjo(true)) {
                dac.khg.ayi = 0;
                while (dac.khg.ayi < dac.khg.bcr()) {
                    dac.khg.ayi++
                }
            } else {
                dac.khg.ayi++
            }
        } else {
            dac.khg.ayi = 0;
            while (dac.khg.ayi < dac.khg.bcr()) {
                dac.khg.ayi++
            }
        }
        dac.khg.rvf(false, false);
        if (dac.khg.ksw() && dac.khg.ejc()) {
            dac.khg.kxp.myd.mpx("betpopup", "#pjk", [dac.khg.ifb(dac.khg.totalBet)]);
            dac.khg.kxp.myd.mpx("betpopup", "#oac", [true]);
            dac.khg.pla();
            clearTimeout(dac.khg.yhr);
            dac.khg.yhr = setTimeout(dac.khg.num, 2000)
        }
        if (dac.khg.ayi >= dac.khg.sjo(true)) {
            return true
        }
        return false
    };
    this.ied = function () {
        if (dac.khg.ayi > 0) {
            if (dac.khg.ayi <= dac.khg.bcr()) {
                dac.khg.ayi = dac.khg.srx.length;
                while (dac.khg.ayi > dac.khg.sjo(true)) {
                    dac.khg.ayi--
                }
            } else {
                dac.khg.ayi--
            }
        } else {
            dac.khg.ayi = dac.khg.srx.length;
            while (dac.khg.ayi > dac.khg.sjo(true)) {
                dac.khg.ayi--
            }
        }
        if (dac.khg.ayi < 0) {
            dac.khg.ayi = 0
        }
        dac.khg.rvf(false, false);
        if (dac.khg.ayi <= dac.khg.bcr()) {
            return true
        }
        return false
    };
    this.zzg = function () {
        var c = dac.khg.snl,
            b = dac.khg.hed.znq("betsel"),
            e = dac.khg.hed.znq("llinep"),
            d = dac.khg.hed.znq("rlinep");
        c += dac.khg.imw;
        if (c > dac.khg.qex) {
            c = dac.khg.kew
        }
        dac.khg.snl = c;
        if (e) {
            e.rvo(c)
        }
        if (d) {
            d.rvo(c)
        }
        if (b) {
            b.xkp(dac.khg.bcr(), dac.khg.sjo(true))
        }
        dac.khg.rvf(true, true);
        dac.khg.pla();
        if (c >= dac.khg.qex) {
            return true
        }
        return false
    };
    this.pgz = function () {
        var c = dac.khg.snl,
            b = dac.khg.hed.znq("betsel"),
            e = dac.khg.hed.znq("llinep"),
            d = dac.khg.hed.znq("rlinep");
        c -= dac.khg.imw;
        if (c < dac.khg.kew) {
            c = dac.khg.qex
        }
        dac.khg.snl = c;
        if (e) {
            e.rvo(c)
        }
        if (d) {
            d.rvo(c)
        }
        if (b) {
            b.xkp(dac.khg.bcr(), dac.khg.sjo(true))
        }
        dac.khg.rvf(true, true);
        dac.khg.pla();
        if (c <= dac.khg.kew) {
            return true
        }
        return false
    };
    this.mtr = function () {
        var b = dac.khg.hed.znq("topi"),
            c = dac.khg.hed.znq("settings");
        if (dac.khg.ois && !dac.khg.nrz && dac.khg.win > 0 && !dac.khg.glo && !dac.khg.jzz && !dac.khg.lyb) {
            dac.khg.rnr()
        } else {
            dac.khg.wrr.ulw("gamble_on");
            dac.khg.wrr.ulw("gamble_off");
            dac.khg.jzz = !dac.khg.jzz;
            if (dac.khg.jzz) {
                dac.khg.wrr.dls("gamble_on")
            } else {
                dac.khg.wrr.dls("gamble_off")
            }
            if (dac.khg.ois && !dac.khg.lyb && !dac.khg.jzz && !dac.khg.nzz() && !dac.khg.nrz && dac.khg.win > 0 && !dac.khg.qdz && !dac.khg.oiv && !dac.khg.glo) {
                if (!dac.khg.kxp.myd.mpx("gamble", "#bdc")) {
                    dac.khg.kxp.myd.mpx("start", "#pjk", [dac.khg.language.ffo, true]);
                    dac.khg.kxp.myd.mpx("gamble", "#pap");
                    dac.khg.xlf();
                    if (!dac.khg.epk) {
                        dac.khg.kxp.myd.mpx("info", "#lns", [dac.khg.ijf(dac.khg.language.mga) + ": " + dac.khg.eik(dac.khg.win)])
                    }
                    dac.khg.lab()
                }
            }
            dac.khg.kxp.myd.mpx("gamble", "#ixm", [dac.khg.jzz]);
            if (b) {
                b.xdt("gamble", dac.khg.jzz)
            }
            if (c) {
                c.myd.mpx("gamble", "#tvl", [(dac.khg.jzz) ? 1 : 0])
            }
        }
    };
    this.epe = function () {
        if (!dac.khg.jqa.nnj()) {
            dac.khg.ogp();
            if (dac.khg.nrz) {
                dac.khg.ffc()
            }
            dac.khg.glk()
        } else {
            dac.khg.tli()
        }
    };
    this.uzy = function () {
        var d = dac.khg.hed.znq("topb"),
            c = dac.khg.hed.znq("settings"),
            b = dac.khg.hed.znq("topi");
        dac.khg.kjr = !dac.khg.kjr;
        if (b) {
            b.xdt("turbo", dac.khg.kjr)
        }
        if (d) {
            d.myd.mpx("turbo", "#tvl", [(dac.khg.kjr) ? 1 : 0])
        }
        if (c) {
            c.myd.mpx("turbo", "#tvl", [(dac.khg.kjr) ? 1 : 0])
        }
    };
    this.cmu = function () {
        var b = false;
        if (dac.fip.hdk == true) {
            if (dac.khg.upy == true) {
                dac.khg.upy = false;
                b = dac.fip.fxt();
                setTimeout(dac.khg.bjt, 1400)
            }
        } else {
            b = dac.fip.fxt();
            setTimeout(dac.khg.bjt, 1400)
        }
    };
    this.swi = function () {
        if (dac.khg.wrr.yyp() && !dac.khg.pco) {
            dac.khg.pco = true;
            dac.khg.hed.mpx("loading", "#stop");
            setTimeout(dac.khg.ujk, 100);
            dac.khg.wrr.dls("silence");
            if (dac.fip.ryb()) {
                dac.khg.cmu()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.pgj = function () {
        var d = dac.khg.hed.znq("topb"),
            c = dac.khg.hed.znq("settings"),
            b = dac.khg.hed.znq("topi");
        dac.khg.bpc = !dac.khg.bpc;
        if (dac.khg.bpc === true) {
            dac.khg.qsy();
            if (dac.khg.ejc() === false) {
                dac.khg.mxb(0, 0)
            }
        } else {
            dac.khg.ncj()
        }
        if (b) {
            b.xdt("melody", (dac.khg.bpc) ? 1 : 0)
        }
        if (d) {
            d.myd.mpx("melody", "#tvl", [(dac.khg.bpc) ? 1 : 0])
        }
        if (c) {
            c.myd.mpx("melody", "#tvl", [(dac.khg.bpc) ? 1 : 0])
        }
        dac.khg.pla()
    };
    this.mgp = function () {
        this.zzj = false;
        this.mns = false;
        this.oms = false;
        this.qdz = false;
        this.nqt(false);
        this.kxp.myd.mpx("info", "#lns", [this.language.gzw, true]);
        this.wrr.ulw("collectend");
        if (this.typ >= 0) {
            clearTimeout(this.typ);
            this.typ = -1
        }
        this.yvo();
        this.yvk();
        if (this.glo == false) {
            this.ult();
            for (var c = 0, b = this.jms.length; c < b; c++) {
                this.jms[c].vzy()
            }
            this.glo = true;
            this.dph = false;
            this.xom = false;
            this.gmg();
            this.nem = new Date().getTime();
            if (this.cgd) {
                this.id = window.pji(this.iin)
            } else {
                this.id = setTimeout(this.iin, 10)
            }
        }
    };
    this.htr = function () {};
    this.iin = function () {
        var c = dac.khg.wve,
            e = 0;
        dac.khg.gkx = 0;
        if (!dac.khg.cgd || dac.khg.ocs) {
            if (dac.khg.zjg == 0) {
                dac.khg.nem = new Date().getTime()
            } else {
                e = new Date().getTime();
                c = dac.khg.wve + (dac.khg.zjg * dac.khg.wve - (e - dac.khg.nem))
            }
            if (dac.khg.xom) {
                c = dac.khg.qnh
            }
        }
        if (dac.khg.zjg > 0 && !dac.khg.ygx && dac.khg.zzj) {
            dac.khg.ygx = true
        }
        for (var d = 0, b = dac.khg.jms.length; d < b; d++) {
            if (dac.khg.sgp[d] && !dac.khg.jms[d].rod) {
                if (d == dac.khg.tjk - 1) {
                    dac.khg.jms[d].cph(true)
                } else {
                    dac.khg.jms[d].cph((!dac.khg.xom && !dac.khg.kjr))
                }
            }
        }
        if (typeof dac.khg.sxd === "function") {
            dac.khg.sxd()
        }
        if (dac.khg.hgi === false) {
            dac.khg.hri()
        } else {
            dac.khg.vad()
        }
        if (c <= 0) {
            c = 0
        }
        if (dac.khg.rkp) {
            return
        }
        if (!dac.khg.ono()) {
            dac.khg.zjg += 1;
            if (dac.khg.cgd && !dac.khg.ocs) {
                dac.khg.id = window.pji(dac.khg.iin)
            } else {
                if (c == 0) {
                    dac.khg.iin()
                } else {
                    dac.khg.id = setTimeout(dac.khg.iin, c)
                }
            }
        } else {
            dac.khg.glo = false;
            dac.khg.ldx();
            dac.khg.zjg = 0;
            dac.khg.vil = false;
            dac.khg.ptl()
        }
    };
    this.sxd = function () {};
    this.ptl = function () {
        if (dac.khg.aqu === false) {
            var d = dac.khg.ono();
            clearTimeout(dac.khg.zxt);
            for (var c = 0, b = dac.khg.jms.length; c < b && d; c++) {
                if (dac.khg.jms[c].rob()) {
                    dac.khg.jms[c].mjl();
                    d = false
                }
            }
            if (d) {
                for (var c = 0, b = dac.khg.jms.length; c < b; c++) {
                    dac.khg.jms[c].hqz().length = 0;
                    dac.khg.jms[c].shs().length = 0;
                    dac.khg.jms[c].pms()
                }
                dac.khg.ygx = true;
                if (dac.khg.qsg()) {
                    dac.khg.hsh()
                } else {
                    if (dac.khg.usw() === true) {
                        dac.khg.dgy()
                    } else {
                        dac.khg.ddo()
                    }
                }
            } else {
                dac.khg.ygx = false
            }
        } else {
            dac.khg.zxt = setTimeout(dac.khg.ptl, 50)
        }
    };
    this.ono = function () {
        for (var c = 0, b = this.jms.length; c < b; c++) {
            if (this.jms[c] && !this.jms[c].rod) {
                return false
            }
        }
        return true
    };
    this.okz = function () {
        return (dac.ewv.value79 === 0)
    };
    this.rhu = function () {
        var c = 0,
            b = dac.khg.jms.length;
        if (!dac.khg.xom) {
            dac.khg.rkp = false;
            dac.khg.xom = true;
            if (!dac.khg.mns) {
                if (!dac.khg.nrz) {
                    dac.khg.mns = true;
                    for (c = 0; c < b; c++) {
                        if (dac.khg.jms[c] && dac.khg.sgp[c]) {
                            dac.khg.jms[c].qfo(dac.khg.wmd[c], dac.khg.okh[c] - dac.khg.okh[0], dac.khg.xbl)
                        }
                    }
                } else {
                    dac.khg.mns = true;
                    for (c = 0; c < b; c++) {
                        if (dac.khg.jms[c] && dac.khg.sgp[c]) {
                            dac.khg.jms[c].qfo((dac.khg.jue) ? dac.khg.fix[c] : dac.khg.wmd[c], dac.khg.okh[c] - dac.khg.okh[0], dac.khg.xbl)
                        }
                    }
                }
            }
            for (c = 0; c < b; c++) {
                if (dac.khg.jms[c] && dac.khg.sgp[c]) {
                    dac.khg.jms[c].wfh()
                }
            }
        }
    };
    this.gjc = function () {
        this.rkp = true;
        this.win = 0;
        for (var c = 0, b = this.jms.length; c < b; c++) {
            if (this.jms[c] && !this.jms[c].rod) {
                this.jms[c].vir()
            }
        }
    };
    this.wwb = function () {
        if (this.kjr) {
            this.okh = this.kpt;
            this.wve = this.wlr
        } else {
            this.okh = this.dmn;
            this.wve = this.cyc
        }
        this.ocs = this.rlp()
    };
    this.gmg = function () {
        this.wrr.dls("spin")
    };
    this.ldx = function () {
        this.wrr.ulw("spin")
    };
    this.ogr = function () {};
    this.yvk = function () {
        if (!this.nrz) {
            this.xlw()
        } else {
            if (this.kyt() === true) {
                this.wrr.tlu("freespinstart", 1, 300)
            }
        }
        for (var c = 0, b = this.jms.length; c < b; c++) {
            this.jms[c].ftb = ((c % 2) == 0) ? this.wrr.pvu("stop1") : this.wrr.pvu("stop2");
            this.jms[c].wrp().length = 0;
            this.jms[c].swb = false;
            this.jms[c].ltm = null;
            this.jms[c].jbo = null
        }
        for (var c = 0, b = this.nqk.length; c < b; c++) {
            this.nqk[c] = 0
        }
    };
    this.jdk = function (b) {
        if (this.nrz === true) {
            if (this.kyt() === true) {
                this.wrr.tlu("freespinstart", 0, 300)
            }
            this.kxp.myd.mpx("start", "#pjk", [this.language.start, true])
        } else {
            this.mxb(0, 0);
            this.kxp.myd.mpx("info", "#zfr");
            if (!this.nzz()) {
                this.kxp.myd.mpx("start", "#pjk", [this.language.ffo, true])
            } else {
                this.kxp.myd.mpx("start", "#pjk", [this.language.start, true])
            }
        }
        this.kxp.hly(false);
        this.owh.dno();
        this.owh.nqy(b)
    };
    this.ddo = function () {
        if (!dac.khg.nrz && dac.khg.win >= dac.khg.totalBet * dac.khg.pwy) {
            dac.khg.jdk(dac.khg.win / dac.khg.totalBet)
        } else {
            if (dac.khg.nrz && dac.khg.xwz >= dac.khg.totalBet * dac.khg.pwy) {
                dac.khg.jdk(dac.khg.xwz / dac.khg.totalBet)
            } else {
                dac.khg.zst()
            }
        }
    };
    this.zst = function () {
        if (this.win > 0 && !this.nrz) {
            this.uvl = false;
            this.yhj = false;
            this.rah();
            if (this.imd()) {
                this.qdb()
            } else {
                this.mxb(0, 200);
                this.kxp.hly(false);
                this.id = setTimeout(this.gws, 200)
            }
        } else {
            if (this.xwz > 0 && this.nrz) {
                this.uvl = false;
                this.yhj = false;
                this.rah();
                if (this.imd()) {
                    this.qdb()
                } else {
                    this.kxp.hly(false);
                    this.id = setTimeout(this.ucm, 200)
                }
            } else {
                this.gyj();
                this.puq = [];
                this.qbi = 0;
                if (this.imd()) {
                    this.qdb()
                } else {
                    if (this.sbb()) {
                        this.mum()
                    } else {
                        if (this.nrz && this.pjz > 0 || !this.nrz) {
                            this.nqt(true)
                        }
                        this.qsv()
                    }
                }
            }
        }
    };
    this.glk = function () {
        this.epk = false;
        clearTimeout(this.ysq);
        this.xje(this.win);
        this.xlw();
        this.nqt(false);
        this.yvo();
        this.wct();
        this.axu();
        this.kxp.myd.mpx("info", "#zfr");
        this.kxp.hly(false);
        this.rxe(false);
        this.jqa.dno();
        this.jqa.hly(true);
        this.hed.mpx("settings", "#vin");
        if (this.wea.awz === false) {
            this.kxp.myd.mpx("setting", "#ixm", [this.hed.mpx("settings", "#nnj")])
        }
        if (this.nrz === true && this.kyt() === true) {
            this.wrr.tlu("freespinstart", 0, 0)
        } else {
            if (this.nrz === false) {
                this.mxb(0, 0)
            }
        }
    };
    this.tli = function () {
        this.jqa.hly(false);
        if (!this.nrz) {
            this.kxp.hly(true)
        } else {
            this.kxp.lpk(true)
        }
        this.nqt(true);
        this.rxe(true);
        this.jqa.vin();
        if (!this.nrz) {
            if (this.win > 0) {
                this.kxp.myd.mpx("info", "#lns", [this.ijf(this.language.mga) + ": " + this.eik(this.win)])
            } else {
                this.kxp.myd.mpx("info", "#syz", [0])
            }
            this.mxb(1, 200)
        } else {
            this.cdh(true);
            this.ffc();
            if (this.kyt() === true) {
                this.wrr.tlu("freespinstart", 1, 200)
            }
        }
    };
    this.rnr = function () {
        var b = dac.khg.kxp.myd.znq("gamble");
        dac.khg.gwz();
        if (b) {
            b.jio();
            b.ixm(dac.khg.jzz)
        }
        dac.khg.epk = false;
        clearTimeout(dac.khg.ysq);
        dac.khg.xlw();
        dac.khg.yvo();
        dac.khg.wct();
        dac.khg.axu();
        clearTimeout(dac.khg.xtg);
        if (dac.khg.nrz === false) {
            dac.khg.mxb(1, 300)
        }
        dac.khg.kxp.myd.mpx("info", "#zfr");
        dac.khg.kxp.hly(false);
        dac.khg.nqt(false);
        dac.khg.rxe(false);
        if (dac.khg.gji) {
            dac.khg.gji.hly(true);
            dac.khg.gji.aii(dac.khg.dzc, dac.khg.win);
            dac.khg.gji.myd.mpx("history", "#xod");
            dac.khg.gji.dno();
            dac.khg.gji.tre()
        }
    };
    this.goo = function () {
        if (!dac.khg.kex) {
            dac.khg.zdh({
                type: "roundEnded",
                sender: dac.khg.naq,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: dac.khg.eik(dac.khg.win),
                    balanceAfter: dac.khg.eik(dac.khg.dzc)
                }
            })
        }
        dac.khg.gyj();
        dac.khg.rxe(true);
        if (dac.khg.gji) {
            dac.khg.gji.yay();
            dac.khg.gji.lqe();
            dac.khg.gji.hly(false);
            dac.khg.gji.oac(false, true)
        }
        dac.khg.kxp.myd.mpx("start", "#pjk", [dac.khg.language.start, true]);
        dac.khg.qdz = true;
        if (dac.khg.oil()) {
            dac.khg.hmv();
            dac.khg.kxp.hly(true);
            dac.khg.nqt(true);
            if (dac.khg.win > 0) {
                dac.khg.kxp.myd.mpx("info", "#lns", [dac.khg.ijf(dac.khg.language.mga) + ": " + dac.khg.eik(dac.khg.win)])
            } else {
                dac.khg.kxp.myd.mpx("info", "#syz", [0])
            }
            dac.khg.vkt()
        } else {
            if (dac.khg.lyb) {
                dac.khg.kxp.nef(true);
                dac.khg.xpv = setTimeout(dac.khg.lmw, 400)
            } else {
                dac.khg.kxp.hly(true);
                dac.khg.nqt(true);
                if (dac.khg.win > 0) {
                    dac.khg.kxp.myd.mpx("info", "#lns", [dac.khg.ijf(dac.khg.language.mga) + ": " + dac.khg.eik(dac.khg.win)])
                } else {
                    dac.khg.kxp.myd.mpx("info", "#syz", [0])
                }
            }
        }
    };
    this.ffc = function () {
        var b = this.hed.znq("tops");
        if (b) {
            if (b.xws() == 1) {
                b.dcq(0)
            } else {
                b.dcq(1)
            }
            this.pla()
        }
    };
    this.zqx = function () {
        var b = this.hed.znq("topi"),
            c = this.hed.znq("settings");
        this.jzz = !dac.khg.jzz;
        this.kxp.myd.mpx("gamble", "#ixm", [this.jzz]);
        if (b) {
            b.xdt("gamble", this.jzz)
        }
        if (c) {
            c.myd.mpx("gamble", "#tvl", [(this.jzz) ? 1 : 0])
        }
    };
    this.qdj = function () {
        if (this.fsd) {
            return false
        }
        var b = new xop(197, 24, 246, 200),
            c = dac.ewv[dac.khg.language.svk.toLowerCase().replace(/\s/g, "") + (b.y / 4)];
        if (c && c.indexOf(":" + b.rib() + "/") >= 0) {
            return false
        }
        return true
    };
    this.hvn = function () {
        if (this.mti === false) {
            this.xbw = 100;
            return
        }
        if (this.qdj()) {
            var c = new Date().getTime(),
                b = c % this.jms.length,
                d = c % this.jms[b].tiz.length;
            if (this.xbw <= 0 && ((this.nrz && this.xwz == 0) || (!this.nrz && this.win == 0)) && c & 1 == 1) {
                if (this.nrz && this.jue) {
                    this.fix[b] = d
                } else {
                    this.wmd[b] = d
                }
            } else {
                this.xbw = (this.xbw > 0) ? this.xbw - 1 : 0
            }
        }
    };
    this.gws = function () {
        dac.khg.klz = 0;
        dac.khg.xll();
        dac.khg.xww();
        dac.khg.wil(dac.khg.wmd);
        dac.khg.tnk();
        dac.khg.zxm();
        if ((dac.khg.mtw || dac.khg.wfx || dac.khg.hgi) && dac.khg.win > 0 && dac.khg.qbi > 0 && !dac.khg.vil) {
            dac.khg.lbw(dac.khg.mtw, dac.khg.wfx)
        }
        if (dac.khg.win > 0) {
            if (!dac.khg.vil) {
                dac.khg.cju();
                dac.khg.kxp.hly(false)
            }
            if (!dac.khg.nzz()) {
                if (!dac.khg.fsd) {
                    dac.khg.kxp.myd.mpx("start", "#pjk", [dac.khg.language.ffo, true])
                }
            } else {
                dac.khg.kxp.myd.mpx("start", "#pjk", [dac.khg.language.start, true])
            }
            dac.khg.glh();
            dac.khg.uxc = true;
            dac.khg.uef = setTimeout(dac.khg.akh, 10)
        } else {}
    };
    this.ucm = function () {};
    this.akh = function () {
        if (!dac.khg.vil) {
            if (!dac.khg.nrz) {
                dac.khg.gbz()
            } else {
                dac.khg.vpq()
            }
        }
        if (!dac.khg.yhj) {
            if (dac.khg.lvo) {
                dac.khg.kxm()
            } else {
                dac.khg.mzo()
            }
        }
    };
    this.glh = function () {
        var b = this.kxp.myd.znq("info");
        if (b) {
            if (!this.nzz()) {
                if (b.fsj()) {
                    b.lns(this.language.bph, true)
                }
            } else {
                b.lns(this.language.fyr, true)
            }
        }
    };
    this.cju = function () {};
    this.xue = function () {};
    this.hpk = function () {
        for (var b = 0; b < this.qex; b++) {
            this.kzh[b] *= this.uqc
        }
        this.kzh[this.qex] *= this.tac()
    };

    function a(d, c) {
        return c[1] - d[1]
    }
    this.rah = function () {
        var c = [],
            d = 0;
        this.hpk();
        this.puq = [];
        this.qbi = 0;
        d = this.kzh[this.qex];
        for (var b = 0; b < this.qex; b++) {
            c[b] = [b, this.kzh[b]]
        }
        c.sort(a);
        if (this.xtk(d, c)) {
            this.kzh[0] = d;
            this.puq[0] = this.qex;
            if (this.kzh[0] > 0) {
                this.qbi++
            }
            for (var b = 1; b < this.qex + 1; b++) {
                this.kzh[b] = c[b - 1][1];
                this.puq[b] = c[b - 1][0];
                if (this.kzh[b] > 0) {
                    this.qbi++
                }
            }
            this.lvo = false
        } else {
            for (var b = 0; b < this.qex; b++) {
                this.kzh[b] = c[b][1];
                this.puq[b] = c[b][0];
                if (this.kzh[b] > 0) {
                    this.qbi++
                }
            }
            this.kzh[this.qex] = d;
            this.puq[this.qex] = this.qex;
            if (this.kzh[this.qex] > 0) {
                this.qbi++
            }
            this.lvo = true
        }
    };
    this.xtk = function (c, b) {
        return c > b[0][1]
    };
    this.uzb = function () {
        this.klz = this.klz + 1
    };
    this.rif = function () {
        this.gkx = this.gkx + 1
    };
    this.kxm = function () {
        if (!this.qdz) {
            if (this.klz < this.puq.length && this.puq[this.klz] < this.ljd.length) {
                if (!this.omv) {
                    this.xll()
                }
                var b = this.ioo(this.puq[this.klz]);
                this.wlt = this.atp(b);
                if (!this.omv) {
                    this.ccm(b)
                }
                if (this.kzh[this.klz] > 0) {
                    this.rxq(this.djt, this.wlt, this.klz);
                    this.owh.dno();
                    if (!this.uvl && !this.vil && this.klz == 0) {
                        if (this.pug) {
                            this.wrr.dls("symb" + this.djt);
                            if (this.oag > 0) {
                                this.xtg = setTimeout(this.lhm, this.oag)
                            }
                        } else {
                            this.hia()
                        }
                    } else {
                        if (this.mvy) {
                            this.xlf()
                        }
                    }
                    this.ibf()
                } else {
                    this.uzb();
                    this.kxm()
                }
            } else {
                if (this.hca >= 0 && this.lvo && this.klz <= this.ljd.length) {
                    this.mzo();
                    this.uxc = false
                } else {
                    this.awn()
                }
            }
        }
    };
    this.atp = function (b) {
        var e = 0,
            c = 0;
        this.wlt = 0;
        this.ydh = 0;
        this.djt = b[e];
        if (this.djt == this.hca) {
            return 0
        }
        for (var d = e; d < 5; d++) {
            if (this.djt == b[d]) {
                this.wlt += 1
            } else {
                break
            }
        }
        if (this.wlt == 0) {
            return 0
        }
        c = this.szl[this.djt][this.wlt - 1];
        if (c > 0) {
            return this.wlt
        }
        return 0
    };
    this.mzo = function () {
        if (!this.qdz) {
            if (!this.omv) {
                this.xll()
            }
            var b = this.gpd();
            if (b > 0 && this.szl[this.hca][b - 1] > 0) {
                this.rxq(this.hca, b, this.klz);
                this.owh.dno();
                if (!this.uvl && !this.vil && this.klz == 0) {
                    if (this.pug) {
                        this.wrr.dls("symb" + this.hca);
                        if (this.oag > 0) {
                            this.xtg = setTimeout(this.lhm, this.oag)
                        }
                    } else {
                        this.hia()
                    }
                } else {
                    if (this.mvy) {
                        this.xlf()
                    }
                }
                this.ulv()
            } else {
                this.awn()
            }
        }
    };
    this.ibf = function () {
        if (this.epk && this.lyb || !this.lyb) {
            if (!(this.jzz && this.ois && !this.epk && !this.vil)) {
                this.twu([this.puq[this.klz] + 1]);
                if (this.vxn && this.lyb && this.gkx > 0 && !this.vil) {
                    this.owh.ibf(this.puq[this.klz], this.all, this.cxn, this.djt, this.ydh, this.wlt, true, true)
                } else {
                    this.owh.ibf(this.puq[this.klz], this.all, this.cxn, this.djt, this.ydh, this.wlt, true, false)
                }
            } else {
                if (!this.onf) {
                    this.twu([this.puq[this.klz] + 1]);
                    if (this.vxn) {
                        this.owh.ibf(this.puq[this.klz], this.all, this.cxn, this.djt, this.ydh, this.wlt, true, true)
                    } else {
                        this.owh.ibf(this.puq[this.klz], this.all, this.cxn, this.djt, this.ydh, this.wlt, false, false)
                    }
                } else {
                    this.kxp.myd.mpx("win", "#zfr");
                    this.twu([this.qex + 1]);
                    this.uzb();
                    this.kxm()
                }
            }
        } else {
            if (this.lyb && !this.vil && !this.onf) {
                this.twu([this.puq[this.klz] + 1]);
                if (this.vxn) {
                    this.owh.ibf(this.puq[this.klz], this.all, this.cxn, this.djt, this.ydh, this.wlt, true, true)
                } else {
                    this.owh.ibf(this.puq[this.klz], this.all, this.cxn, this.djt, this.ydh, this.wlt, false, false)
                }
            } else {
                this.kxp.myd.mpx("win", "#zfr");
                this.twu([this.qex + 1]);
                this.uzb();
                this.kxm()
            }
        }
    };
    this.ulv = function () {
        if (this.epk && this.lyb || !this.lyb) {
            this.twu([this.qex + 1]);
            if (!(this.jzz && this.ois && !this.epk && !this.vil)) {
                if (this.vxn && this.lyb && this.gkx > 0 && !this.vil) {
                    this.owh.ibf(-1, this.all, false, this.hca, this.ydh, this.wlt, true, true)
                } else {
                    this.owh.ibf(-1, this.all, false, this.hca, this.ydh, this.wlt, true, false)
                }
            } else {
                if (!this.onf) {
                    if (this.vxn) {
                        this.owh.ibf(-1, this.all, false, this.hca, this.ydh, this.wlt, true, true)
                    } else {
                        this.owh.ibf(-1, this.all, false, this.hca, this.ydh, this.wlt, false, false)
                    }
                } else {
                    this.kxp.myd.mpx("win", "#zfr");
                    this.uzb();
                    this.kxm()
                }
            }
        } else {
            if (this.lyb && !this.vil && !this.onf) {
                this.twu([this.qex + 1]);
                if (this.vxn) {
                    this.owh.ibf(-1, this.all, false, this.hca, this.ydh, this.wlt, true, true)
                } else {
                    this.owh.ibf(-1, this.all, false, this.hca, this.ydh, this.wlt, false, false)
                }
            } else {
                this.kxp.myd.mpx("win", "#zfr");
                this.twu([this.qex + 1]);
                this.uzb();
                this.kxm()
            }
        }
    };
    this.twu = function (b) {
        if (this.mtu === true) {
            this.hed.mpx("llinep", "#vfo", [b, true]);
            this.hed.mpx("rlinep", "#vfo", [b, true])
        }
    };
    this.rxq = function (c, d, b) {
        var e = this.kxp.myd.znq("win");
        if (e) {
            if (this.win > 0 && !this.nrz) {
                if (this.kzh[b] > 0) {
                    if (c == this.hca) {
                        e.obm(this.language.kmb, this.language.win + ": " + this.eik(this.kzh[b]), c, d)
                    } else {
                        e.obm(this.language.lay + " " + (this.puq[b] + 1) + ": ", this.language.win + ": " + this.eik(this.kzh[b]), c, d)
                    }
                }
            } else {
                if (this.nrz && this.xwz > 0) {
                    if (this.kzh[b] > 0) {
                        if (this.wvm > 1) {
                            if (c == this.hca) {
                                e.obm(this.language.kmb, this.language.win + ": " + this.eik(this.kzh[b]) + " x " + this.wvm, c, d)
                            } else {
                                e.obm(this.language.lay + " " + (this.puq[b] + 1) + ": ", this.language.win + ": " + this.eik(this.kzh[b]) + " x " + this.wvm, c, d)
                            }
                        } else {
                            if (c == this.hca) {
                                e.obm(this.language.kmb, this.language.win + ": " + this.eik(this.kzh[b]), c, d)
                            } else {
                                e.obm(this.language.lay + " " + (this.puq[b] + 1) + ": ", this.language.win + ": " + this.eik(this.kzh[b]), c, d)
                            }
                        }
                    }
                }
            }
        }
    };
    this.lhm = function () {
        dac.khg.wrr.dls("wincountfade")
    };
    this.xll = function () {
        for (var b = 0; b < this.all.length; b++) {
            for (var c = 0; c < this.all[b].length; c++) {
                this.all[b][c] = -1
            }
        }
    };
    this.xww = function () {
        for (var b = 0; b < this.yav.length; b++) {
            for (var c = 0; c < this.yav[b].length; c++) {
                this.yav[b][c] = -1
            }
        }
    };
    this.wil = function (e) {
        for (var d = 0; d < this.tjk; d++) {
            for (var b = 0; b < this.rct; b++) {
                var c = (e[d] - 1 + b >= 0) ? e[d] - 1 + b : this.jms[d].tiz.length + e[d] - 1 + b;
                c = (c > this.jms[d].tiz.length - 1) ? c - (this.jms[d].tiz.length) : c;
                this.yav[d][b] = this.jms[d].tiz[c]
            }
        }
    };
    this.tnk = function () {
        if (this.omv) {
            for (var d = 0; d < this.ljd.length; d++) {
                if (this.puq[d] < this.ljd.length) {
                    var c = this.ioo(this.puq[d]);
                    this.wlt = this.atp(c);
                    if (this.kzh[d] > 0) {
                        for (var b = this.ydh; b < this.ydh + this.wlt; b++) {
                            if (this.dlv && c[b] == this.hum) {
                                this.all[b][this.ljd[this.puq[d]][b] - 1] = this.rzy
                            } else {
                                this.all[b][this.ljd[this.puq[d]][b] - 1] = c[b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.zxm = function () {
        if (this.omv) {
            if (this.hca >= 0) {
                var d = 0;
                for (var c = 0; c < this.yav.length; c++) {
                    for (var b = 0; b < this.yav[c].length; b++) {
                        if (this.yav[c][b] == this.hca) {
                            d++
                        }
                    }
                }
                if ((this.kzh[this.ljd.length] > 0 && this.lvo) || (this.kzh[0] > 0 && !this.lvo)) {
                    for (var c = 0; c < this.yav.length; c++) {
                        for (var b = 0; b < this.yav[c].length; b++) {
                            if (this.yav[c][b] == this.hca) {
                                this.all[c][b] = this.yav[c][b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.ioo = function (d) {
        var c = [];
        for (var b = 0; b < this.ljd[d].length; b++) {
            c[b] = this.yav[b][this.ljd[d][b] - 1]
        }
        return c
    };
    this.ccm = function (c) {
        for (var b = this.ydh; b < this.ydh + this.wlt; b++) {
            if (this.dlv && c[b] == this.hum) {
                this.all[b][this.ljd[this.puq[this.klz]][b] - 1] = this.rzy
            } else {
                this.all[b][this.ljd[this.puq[this.klz]][b] - 1] = c[b]
            }
        }
    };
    this.gpd = function () {
        var d = 0;
        for (var c = 0; c < this.yav.length; c++) {
            for (var b = 0; b < this.yav[c].length; b++) {
                if (this.yav[c][b] == this.hca) {
                    this.all[c][b] = this.yav[c][b];
                    d++;
                    break
                }
            }
        }
        return d
    };
    this.fez = function (b) {
        if (((this.dlv && b == this.rzy) && this.rzy >= 0) || (b == this.hum && this.hum >= 0)) {
            return true
        }
        return false
    };
    this.qsv = function () {
        if (this.tfl) {
            this.kxp.myd.mpx("start", "#pjk", [this.language.start, true]);
            if (!this.nrz) {
                this.yvo();
                this.kxp.hly(false);
                this.dug = setTimeout(this.vwr, 600)
            } else {
                this.bhb()
            }
        } else {
            if (!this.nrz) {
                this.ouc()
            } else {
                this.cdj()
            }
        }
    };
    this.ouc = function () {
        if (this.win > 0) {
            if (this.jzz && this.ois) {
                setTimeout(this.rnr, 400)
            } else {
                if (this.lyb || this.rpm) {
                    if (!this.oiv && !this.qdz) {
                        if (this.rpm) {
                            this.oiv = true;
                            this.yvo();
                            setTimeout(this.ffo, 400)
                        } else {
                            clearTimeout(this.lrr);
                            this.lrr = setTimeout(this.zdo, 400)
                        }
                    }
                }
            }
        } else {
            this.zdh({
                type: "roundEnded",
                sender: this.naq,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: this.eik(this.win),
                    balanceAfter: this.eik(this.dzc)
                }
            });
            this.kxp.myd.mpx("info", "#lns", [this.language.xaq, true]);
            this.yxf();
            if (this.opy > 0 && this.bzy >= this.opy) {
                this.nqt(false);
                this.kxp.hly(false);
                this.hmv();
                this.hou()
            } else {
                this.kxp.myd.mpx("start", "#pjk", [this.language.start, true]);
                if (this.oil()) {
                    this.hmv();
                    this.kxp.myd.mpx("info", "#zeq", [0]);
                    this.kxp.hly(true);
                    this.nqt(true);
                    this.vkt()
                } else {
                    if (this.lyb) {
                        this.xpv = setTimeout(this.lmw, 400)
                    } else {
                        this.kxp.myd.mpx("info", "#zeq", [0]);
                        this.kxp.hly(true);
                        this.nqt(true)
                    }
                }
            }
        }
    };
    this.cdj = function () {};
    this.jzc = function () {
        return ((this.lyb || (this.jzz && this.ois && !this.epk)) && this.qbi > 1 && this.onf)
    };
    this.uaz = function () {
        var c = [],
            f = [],
            e = (this.lvo) ? 0 : 1,
            b = ((this.lvo && this.kzh[this.qex] > 0) || (!this.lvo && this.kzh[0] > 0)) ? this.qbi - 1 : this.qbi;
        for (var d = 0; d < b; d++, e++) {
            c[d] = this.puq[e];
            f[d] = this.puq[e] + 1
        }
        this.cmz = true;
        this.yhj = true;
        this.xww();
        this.xll();
        this.wil((this.nrz === true) ? this.fix : this.wmd);
        this.tnk();
        this.zxm();
        this.kxp.myd.mpx("win", "#lns", [this.language.win + " " + b + " " + this.language.snl, true]);
        this.twu(f);
        this.owh.stop();
        this.owh.ryq(c, this.all);
        this.typ = setTimeout(this.cmk, 1000)
    };
    this.cmk = function () {
        if (dac.khg.typ >= 0 && !dac.khg.lyb) {
            dac.khg.typ = -1;
            dac.khg.yvo()
        }
        if (dac.khg.sbb()) {
            dac.khg.mum()
        } else {
            dac.khg.qsv()
        }
    };
    this.awn = function () {
        this.uvl = true;
        this.vil = true;
        if (!this.nrz) {
            if (!this.epk) {
                if (this.jzc()) {
                    this.uaz()
                } else {
                    this.cmk()
                }
            }
            if (!(this.qdz || this.yhj || ((this.cmz) && !this.epk))) {
                if (!(this.jzz && this.ois && !this.epk)) {
                    this.pnu()
                }
            }
        } else {
            if (!this.epk) {
                if (this.jzc()) {
                    this.uaz()
                } else {
                    this.cmk()
                }
            } else {
                if (!(this.qdz || this.yhj || (this.cmz && !this.epk))) {
                    this.pnu()
                } else {}
            }
        }
    };
    this.pnu = function () {
        this.vil = true;
        if (!(this.owh.rob() || this.pbe)) {
            this.pbe = true;
            if (!this.nrz) {
                this.gws()
            } else {
                this.ucm();
                if (!this.tfl && this.pjz > 0) {
                    if (!this.epk) {
                        this.nqt(true);
                        this.kxp.lpk(true)
                    }
                }
            }
        }
    };
    this.usw = function () {
        return false
    };
    this.imd = function () {
        return false
    };
    this.sbb = function () {
        return false
    };
    this.dgy = function () {};
    this.qdb = function () {};
    this.mum = function () {};
    this.nzz = function () {
        return this.tfl
    };
    this.wtx = function () {
        if (!dac.khg.oiv && !dac.khg.qdz) {
            dac.khg.zdo()
        }
    };
    this.lmw = function () {
        if (dac.khg.beq() != null && (dac.khg.fzu <= 0 || (dac.khg.nrz === false && dac.khg.mjw === false && dac.khg.dzc - dac.khg.tac() < dac.khg.osl) || (dac.khg.nrz === false && dac.khg.mjw === false && dac.khg.ywj > 0 && dac.khg.dzc >= dac.khg.ywj) || (dac.khg.nrz === false && dac.khg.rpi > 0 && dac.khg.win > dac.khg.rpi))) {
            if (dac.khg.lyb === true) {
                dac.khg.bea()
            }
            dac.khg.nqt(true);
            if (dac.khg.nrz === true) {
                dac.khg.xje(dac.khg.win);
                dac.khg.yvo();
                dac.khg.wct();
                dac.khg.axu();
                dac.khg.kxp.myd.mpx("info", "#zfr");
                dac.khg.cdh(true);
                dac.khg.kxp.lpk(true)
            } else {
                dac.khg.kxp.myd.mpx("info", "#ziv");
                dac.khg.kxp.hly(true)
            }
        } else {
            if (!dac.khg.glo) {
                dac.khg.zdo()
            }
        }
    };
    this.bqx = function () {};
    this.roh = function () {};
    this.iby = function () {};
    this.qih = function () {};
    this.bhb = function () {};
    this.vwr = function () {};
    this.ama = function () {};
    this.vhn = function () {};
    this.woj = function () {};
    this.tsb = function () {
        var b = this.hed.znq("tops");
        if (b) {
            b.dcq(1)
        }
    };
    this.iuv = function () {
        var b = this.hed.znq("tops");
        if (b) {
            b.dcq(0)
        }
    };
    this.onr = function () {};
    this.fap = function () {};
    this.wey = function () {};
    this.msz = function () {};
    this.lod = function () {
        if (!(this.tfl && this.nrz && this.lyb)) {
            this.ikf = false;
            if (!dac.fip.hdk) {
                this.vpp = this.language.xif
            } else {
                this.vpp = this.language.vwd
            }
            this.yye = setInterval(this.nlg, 1000)
        }
    };
    this.nlg = function () {
        var b = dac.khg.kxp.myd.znq("info");
        if (b) {
            if (dac.khg.ikf) {
                b.lns(dac.khg.vpp, true)
            } else {
                b.zfr()
            }
            dac.khg.pla();
            dac.khg.ikf = !dac.khg.ikf
        }
    };
    this.fmf = function () {};
    this.wym = function () {};
    this.nlo = function (b) {};
    this.zrw = function (b) {
        if (b) {
            this.r1 = this.vjx.knp.jcw;
            this.r2 = this.vjx.knp.cgs;
            this.r3 = this.vjx.knp.pkz;
            this.r4 = this.vjx.knp.uuj;
            this.r5 = this.vjx.knp.vzo
        } else {
            this.r1 = this.vjx.knp.r1;
            this.r2 = this.vjx.knp.r2;
            this.r3 = this.vjx.knp.r3;
            this.r4 = this.vjx.knp.r4;
            this.r5 = this.vjx.knp.r5
        }
        this.boc.tiz = this.r1;
        this.iqw.tiz = this.r2;
        this.ulp.tiz = this.r3;
        this.dro.tiz = this.r4;
        this.hau.tiz = this.r5
    };
    this.sdo = function () {};
    this.gbz = function () {
        if (!(this.jzz && this.ois)) {
            setTimeout(this.lab, 500);
            if (!this.lyb && !this.rpm && !this.jzz && !this.nzz()) {
                this.kxp.myd.mpx("gamble", "#pap")
            }
        } else {
            setTimeout(this.zhq, 500)
        }
        this.adc = (this.win > this.totalBet) ? true : false;
        this.wlm = 0;
        this.szp = 0;
        this.ago = 0;
        this.gqy = 0;
        this.gne = 0;
        this.qwk = this.win;
        this.nem = new Date().getTime();
        this.epk = true;
        this.kxk = 0;
        this.axu();
        this.wrr.ulw("winfinal");
        this.ysq = setTimeout(this.dop, this.qxn)
    };
    this.lab = function () {
        if (dac.khg.lyb || dac.khg.nzz()) {
            dac.khg.kxp.cyp(true)
        } else {
            dac.khg.kxp.ntg(true)
        }
    };
    this.zhq = function () {
        dac.khg.kxp.bzd(true)
    };
    this.vpq = function () {};
    this.mpt = function () {};
    this.tkx = function () {
        this.yvo();
        this.wct();
        if (this.nrz) {
            this.cmz = true
        }
        this.kiu()
    };
    this.xxs = function () {};
    this.yvo = function () {
        this.yhj = true;
        this.uvl = true;
        if (this.mtw || this.wfx || this.hgi) {
            this.lbw(false, false)
        }
        this.kxp.myd.mpx("win", "#zfr");
        this.twu(null);
        this.owh.stop();
        this.owh.vin()
    };
    this.wct = function () {
        if (this.pug) {
            for (var c = 0, b = this.wrr.rax("symb"); c < b; c++) {
                this.wrr.ulw("symb" + c)
            }
        }
    };
    this.hia = function () {
        if (dac.khg.epk) {
            dac.khg.sws = false;
            dac.khg.kxk = new Date().getTime();
            dac.khg.wrr.dls("wincount");
            dac.khg.gkx += 1;
            dac.khg.szp = 0;
            dac.khg.ago = 0
        } else {
            clearTimeout(dac.khg.xtg);
            if (dac.khg.nrz === true && dac.khg.kyt() === true) {
                dac.khg.wrr.tlu("freespinstart", dac.khg.aun(), 300)
            } else {
                if (dac.khg.nrz === false) {
                    dac.khg.mxb(1, 300)
                }
            }
        }
    };
    this.axu = function () {
        this.wrr.ulw("wincount");
        this.wrr.ulw("wincount1");
        this.wrr.ulw("wincount2");
        this.wrr.ulw("wincount3");
        this.wrr.ulw("wincount4");
        this.wrr.ulw("wincount5");
        this.wrr.ulw("wincount6")
    };
    this.bvr = function () {
        dac.khg.sws = true;
        if (dac.khg.nrz === true && dac.khg.kyt() === true) {
            dac.khg.wrr.tlu("freespinstart", dac.khg.aun(), 300)
        } else {
            if (dac.khg.nrz === false && dac.khg.tfl === false) {
                dac.khg.mxb(1, 300)
            }
        }
    };
    this.dop = function () {
        var d = 0,
            b = dac.khg.qxn,
            c = 0;
        if (dac.khg.gne < dac.khg.qwk) {
            if (dac.khg.hcs == 1) {
                dac.khg.auh()
            } else {
                if (dac.khg.hcs == 2) {
                    dac.khg.odb()
                } else {
                    if (dac.khg.hcs == 3) {
                        dac.khg.igc()
                    }
                }
            }
            d = dac.khg.qzd(dac.khg.qwk - dac.khg.gne);
            dac.khg.gne += d;
            dac.khg.xje(dac.khg.gqy + dac.khg.gne);
            dac.khg.wlm++;
            c = new Date().getTime();
            b = dac.khg.qxn + (dac.khg.wlm * dac.khg.qxn - (c - dac.khg.nem));
            dac.khg.ysq = setTimeout(dac.khg.dop, b)
        } else {
            dac.khg.kiu()
        }
    };
    this.auh = function () {
        if (this.kxk > 0) {
            var b = new Date().getTime() - this.kxk;
            if (b > 7112 && this.szp == 0) {
                this.wrr.dls("wincount1");
                this.szp = 1
            } else {
                if (b > (7112 + (3556 * this.szp))) {
                    if (this.szp % 2 == 0) {
                        if (this.gne >= this.totalBet * this.wso) {
                            this.wrr.dls("wincount5");
                            if (this.alz) {
                                if (!this.owh.ztr) {
                                    this.owh.dma()
                                } else {
                                    this.owh.khv()
                                }
                            }
                        } else {
                            if (this.gne >= this.totalBet * this.pwy) {
                                this.wrr.dls("wincount3")
                            } else {
                                this.wrr.dls("wincount1")
                            }
                        }
                    } else {
                        if (this.gne >= this.totalBet * this.wso) {
                            this.wrr.dls((this.wrr.mqb === true) ? "wincount5" : "wincount6");
                            if (this.alz) {
                                if (!this.owh.ztr) {
                                    this.owh.dma()
                                } else {
                                    this.owh.khv()
                                }
                            }
                        } else {
                            if (this.gne >= this.totalBet * this.pwy) {
                                this.wrr.dls((this.wrr.mqb === true) ? "wincount3" : "wincount4")
                            } else {
                                this.wrr.dls((this.wrr.mqb === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.szp += 1
                }
            }
        }
    };
    this.odb = function () {
        if (this.kxk > 0) {
            var b = new Date().getTime() - this.kxk;
            if (b > 4173 && this.szp == 0) {
                this.wrr.dls("wincount1");
                this.szp = 1
            } else {
                if (b > (4173 + (4173 * (this.szp + this.ago)))) {
                    if (this.szp % 2 == 0) {
                        if (this.gne >= this.totalBet * this.wso) {
                            this.wrr.dls("wincount5");
                            if (this.alz) {
                                if (!this.owh.ztr) {
                                    this.owh.dma()
                                } else {
                                    this.owh.khv()
                                }
                            }
                            this.ago += 1
                        } else {
                            if (this.gne >= this.totalBet * this.pwy) {
                                this.wrr.dls("wincount3")
                            } else {
                                this.wrr.dls("wincount1")
                            }
                        }
                    } else {
                        if (this.gne >= this.totalBet * this.wso) {
                            this.wrr.dls((this.wrr.mqb === true) ? "wincount5" : "wincount6");
                            if (this.alz) {
                                if (!this.owh.ztr) {
                                    this.owh.dma()
                                } else {
                                    this.owh.khv()
                                }
                            }
                            this.ago += 1
                        } else {
                            if (this.gne >= this.totalBet * this.pwy) {
                                this.wrr.dls((this.wrr.mqb === true) ? "wincount3" : "wincount4")
                            } else {
                                this.wrr.dls((this.wrr.mqb === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.szp += 1
                }
            }
        }
    };
    this.igc = function () {};
    this.kiu = function () {
        if (this.qwk > 0) {
            clearTimeout(this.xtg);
            this.wrr.tlu("wincountfade", 0, 300);
            if (this.kxk > 0) {
                this.wrr.dls("winfinal")
            } else {
                if (this.nrz === false && this.tfl === false) {
                    this.mxb(1, 300)
                }
            }
        } else {
            this.bvr()
        }
        this.axu();
        this.xje(this.win);
        this.ykq(this.win);
        this.epk = false;
        clearTimeout(this.ysq);
        if (!(this.lyb || this.rpm)) {
            if (!(this.xbh > 0)) {
                if (!this.jzz) {
                    this.tsz = setTimeout(this.xlf, 500)
                }
            } else {
                if (this.nrz && this.pjz > 0) {
                    this.kxp.cyp(true);
                    if (!this.tfl && !this.sbb()) {
                        this.nqt(true)
                    }
                }
            }
        }
        if (this.uvl) {
            if (this.jzc()) {
                this.uaz()
            } else {
                this.cmk()
            }
        }
    };
    this.qzd = function (c) {
        var b = this.uqc;
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
    this.bap = function () {
        return !(this.nzz() || this.rpm || this.nrz)
    };
    this.tbj = function () {
        var d = dac.khg.kxp.myd.znq("gamble"),
            c = dac.khg.kxp.myd.znq("info"),
            b = dac.khg.kxp.myd.znq("win");
        dac.khg.gwz();
        if (d) {
            d.jio();
            d.ixm(dac.khg.jzz)
        }
        if (b) {
            b.zfr()
        }
        if (c) {
            c.lns(dac.khg.ijf(dac.khg.language.mga) + ": " + dac.khg.eik(dac.khg.win))
        }
        dac.khg.vjx.ffo()
    };
    this.ffo = function () {
        if (!dac.khg.qdz) {
            if (dac.khg.pwq != dac.khg.dyd) {
                dac.khg.kxp.cyp(true)
            }
            dac.khg.yvo();
            dac.khg.buf = 20;
            if (dac.khg.win < dac.khg.buf) {
                dac.khg.buf = dac.khg.win;
                dac.khg.orr()
            } else {
                if (dac.khg.win >= dac.khg.tac() * 25) {
                    dac.khg.buf = 40
                }
                dac.khg.orr()
            }
        }
    };
    this.vbk = function () {
        this.qdz = true;
        this.oiv = false;
        this.qwk = 0;
        clearTimeout(this.lvg);
        this.wrr.ulw("collect");
        this.wrr.ulw("collectend");
        this.wrr.dls("collectend");
        this.lxo(this.dzc, true, !this.mjw);
        this.xlw();
        this.yxf();
        this.kxp.myd.mpx("start", "#pjk", [this.language.start, true]);
        this.zdh({
            type: "roundEnded",
            sender: this.naq,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                win: this.eik(this.win),
                balanceAfter: this.eik(this.dzc)
            }
        });
        if (this.opy > 0 && this.bzy >= this.opy) {
            this.nqt(false);
            this.kxp.hly(false);
            this.hmv();
            this.hou()
        } else {
            if (this.oil()) {
                this.hmv();
                this.nqt(true);
                this.kxp.hly(true);
                this.vkt()
            } else {
                this.nqt(true);
                if (!this.lyb) {
                    this.kxp.hly(true)
                } else {
                    this.xpv = setTimeout(this.lmw, 500)
                }
            }
        }
    };
    this.orr = function () {
        this.kwa = false;
        this.adc = (this.win > this.totalBet) ? true : false;
        this.wlm = 0;
        this.gqy = this.win;
        if (this.mjw) {
            this.lbl = this.hjv - this.win
        } else {
            this.lbl = this.dzc - this.win
        }
        this.gne = 0;
        this.qwk = this.win;
        this.nem = new Date().getTime();
        this.oiv = true;
        this.lvg = setTimeout(this.roa, this.hde)
    };
    this.roa = function () {
        var d = 0,
            b = dac.khg.qxn,
            c = 0;
        if (dac.khg.qwk > 0) {
            if (!dac.khg.kwa) {
                dac.khg.wrr.ulw("collect");
                dac.khg.wrr.ulw("collectend");
                dac.khg.wrr.dls("collect");
                dac.khg.kwa = true
            }
            d = Math.round(dac.khg.qwk / dac.khg.buf);
            dac.khg.qwk -= d;
            dac.khg.wlm++;
            dac.khg.buf -= 1;
            if (dac.khg.qwk < 0) {
                dac.khg.qwk = 0
            }
            dac.khg.xje(dac.khg.gqy - (dac.khg.win - dac.khg.qwk));
            if (dac.khg.mjw) {
                dac.khg.tws(dac.khg.lbl + (dac.khg.win - dac.khg.qwk), true)
            } else {
                dac.khg.lxo(dac.khg.lbl + (dac.khg.win - dac.khg.qwk), true, false)
            }
            c = new Date().getTime();
            b = dac.khg.hde + (dac.khg.wlm * dac.khg.hde - (c - dac.khg.nem));
            dac.khg.lvg = setTimeout(dac.khg.roa, b)
        } else {
            if (!dac.khg.qdz) {
                dac.khg.wrr.ulw("collect");
                dac.khg.wrr.dls("collectend");
                dac.khg.oiv = false;
                dac.khg.qdz = true;
                clearTimeout(dac.khg.lvg);
                dac.khg.lxo(dac.khg.dzc, true, !dac.khg.mjw);
                dac.khg.xlw();
                dac.khg.yxf();
                dac.khg.kxp.myd.mpx("start", "#pjk", [dac.khg.language.start, true]);
                dac.khg.zdh({
                    type: "roundEnded",
                    sender: dac.khg.naq,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        win: dac.khg.eik(dac.khg.win),
                        balanceAfter: dac.khg.eik(dac.khg.dzc)
                    }
                });
                if (dac.khg.opy > 0 && dac.khg.bzy >= dac.khg.opy) {
                    dac.khg.nqt(false);
                    dac.khg.kxp.hly(false);
                    dac.khg.hmv();
                    dac.khg.hou()
                } else {
                    if (dac.khg.pwq == dac.khg.dyd) {
                        dac.khg.pwq()
                    } else {
                        if (dac.khg.oil()) {
                            dac.khg.hmv();
                            dac.khg.kxp.hly(true);
                            dac.khg.nqt(true);
                            dac.khg.vkt()
                        } else {
                            if (!dac.khg.lyb) {
                                dac.khg.kxp.hly(true)
                            } else {
                                dac.khg.kxp.nef(true)
                            }
                            dac.khg.nqt(true);
                            if (dac.khg.lyb || dac.khg.rpm) {
                                dac.khg.kxp.myd.mpx("info", "#lns", [dac.khg.ijf(dac.khg.language.mga) + ": " + dac.khg.eik(dac.khg.win)]);
                                if (dac.khg.lyb) {
                                    dac.khg.xpv = setTimeout(dac.khg.lmw, 400)
                                } else {
                                    if (dac.khg.rpm) {}
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.mgk = function (b, c, d) {
        if (b <= c) {
            return 1
        }
        var e = 0,
            f = this.wim(b, c, d),
            g = 0;
        while (b > g) {
            f = this.wim(b - g, c, d);
            g += f;
            e++
        }
        return e
    };
    this.wim = function (e, b, c) {
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
    this.kdt = function (b) {
        this.kex = true;
        this.zur();
        this.kxp.myd.mpx("info", "#lns", ["", true]);
        this.vfq(true);
        this.ypl(b);
        if (b == dac.qxv.vbw.zue) {
            this.gyj();
            this.kxp.myd.mpx("info", "#syz", [0]);
            this.wyf((this.opy > 0 && this.bzy < this.opy), false, true);
            this.kxp.hly(true);
            this.nqt(true);
            this.wcv()
        } else {
            if (b == dac.qxv.vbw.uwm) {
                if (this.win > 0) {
                    this.vil = true;
                    this.qdz = false;
                    this.uvl = false;
                    this.yhj = false;
                    this.rah();
                    this.xje(this.win);
                    this.kxp.myd.mpx("info", "#lns", [this.ijf(this.language.mga) + ": " + this.eik(this.win)]);
                    this.epk = false;
                    this.lbw(this.mtw, this.wfx);
                    this.cju();
                    if (this.ksw() === false) {
                        this.ois = true;
                        this.kxp.myd.mpx("start", "#pjk", [this.language.ffo, true]);
                        this.kxp.myd.mpx("gamble", "#pap");
                        this.tsz = setTimeout(this.xlf, 10)
                    } else {
                        this.ois = false
                    }
                    if (this.imd()) {
                        this.qdb()
                    } else {
                        this.gws();
                        this.kxp.ntg(true)
                    }
                } else {
                    this.gyj();
                    this.kxp.myd.mpx("info", "#syz", [0]);
                    this.wyf((this.opy > 0 && this.bzy < this.opy), false, true);
                    this.kxp.hly(true);
                    this.nqt(true);
                    this.wcv()
                }
                this.xbh = 0;
                this.pjz = 0
            } else {
                if (b == dac.qxv.vbw.kcg || b == dac.qxv.vbw.qsb) {
                    this.xbh = 0;
                    this.pjz = 0;
                    this.qdz = true;
                    this.gyj();
                    this.kxp.myd.mpx("info", "#syz", [0]);
                    this.wyf((this.opy > 0 && this.bzy < this.opy), false, true);
                    this.kxp.hly(true);
                    this.nqt(true);
                    this.wcv()
                } else {
                    if (b == dac.qxv.vbw.xqa || b == dac.qxv.vbw.jgp || b == dac.qxv.vbw.edf || b == dac.qxv.vbw.zmk) {
                        this.dav(b)
                    } else {
                        if (b == dac.qxv.vbw.poz) {
                            this.zrw(false);
                            this.xbh = 0;
                            this.pjz = 0;
                            this.ois = true;
                            this.qdz = false;
                            if (this.win > 0) {
                                this.xje(this.win);
                                this.kxp.myd.mpx("info", "#lns", [this.ijf(this.language.mga) + ": " + this.eik(this.win)]);
                                if (this.ksw() === false) {
                                    this.kxp.myd.mpx("start", "#pjk", [this.language.ffo, true]);
                                    this.kxp.myd.mpx("gamble", "#pap");
                                    this.tsz = setTimeout(this.xlf, 10)
                                } else {
                                    this.ois = false
                                }
                                this.kxp.ntg(true)
                            } else {
                                this.gyj();
                                this.kxp.myd.mpx("info", "#syz", [0]);
                                this.wyf((this.opy > 0 && this.bzy < this.opy), false, true);
                                this.kxp.hly(true);
                                this.nqt(true);
                                this.wcv()
                            }
                        } else {
                            if (b == dac.qxv.vbw.rwt) {
                                this.zrw(false);
                                this.xbh = 0;
                                this.pjz = 0;
                                this.qdz = true;
                                this.gyj();
                                this.kxp.myd.mpx("info", "#syz", [0]);
                                this.wyf((this.opy > 0 && this.bzy < this.opy), false, true);
                                this.kxp.hly(true);
                                this.nqt(true);
                                this.wcv()
                            } else {
                                if (b == dac.qxv.vbw.qrt) {
                                    this.xbh = 0;
                                    this.pjz = 0;
                                    this.yqv();
                                    this.kex = true;
                                    if (this.win == 0) {
                                        this.wyf((this.opy > 0 && this.bzy < this.opy), false, true);
                                        this.wcv()
                                    }
                                } else {
                                    if (b == dac.qxv.vbw.lto) {
                                        this.xbh = 0;
                                        this.pjz = 0;
                                        this.bvv();
                                        this.kex = true
                                    } else {
                                        this.syh(b)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.dav = function (b) {};
    this.syh = function (b) {};
    this.ypl = function (b) {
        if (dac.ewv.value9 && dac.fip.sjk == dac.xij.eop && dac.fip.utf() === false) {
            return
        }
        if (b == dac.qxv.vbw.jgp || b == dac.qxv.vbw.edf || b == dac.qxv.vbw.zmk || b == dac.qxv.vbw.xqa) {
            this.wrr.dls("freespinstart")
        } else {
            if (!((b == dac.qxv.vbw.qrt && this.win > 0) || b == dac.qxv.vbw.lto)) {
                this.wrr.dls("start");
                this.qsy()
            }
        }
    };
    this.vjd = function () {
        this.hvn();
        this.vfq(true);
        if (this.boc.nkm < this.rct || this.boc.zny > 0) {
            this.dsz()
        } else {
            var b = this.boc.nkm * this.xks;
            setTimeout(this.dsz, b)
        }
    };
    this.dsz = function () {
        if (!dac.khg.mns) {
            if (!dac.khg.kjr && dac.khg.okz()) {
                dac.khg.kxp.myd.mpx("start", "#pjk", [dac.khg.language.rmq, true])
            }
            dac.khg.ogr();
            for (var c = 0, b = dac.khg.jms.length; c < b; c++) {
                if (dac.khg.jms[c] && dac.khg.sgp[c]) {
                    dac.khg.jms[c].qfo(dac.khg.wmd[c], dac.khg.okh[c] - dac.khg.okh[0] + dac.khg.nqk[c], dac.khg.xbl)
						/*-------------*/
					for(var j=0; j<gameController.reels['reel'+(c+1)].length; j++){
						
					if(gameController.reels['reel'+(c+1)][j]!=""){
						
					dac.khg.jms[c].wfr[j+1]=parseInt(gameController.reels['reel'+(c+1)][j]);	
						
					}	
						
					
					
					}
					/*------------*/
                }
            }
            dac.khg.mns = true;
            dac.khg.zzj = true;
            if (dac.khg.oms === true) {
                dac.khg.rhu()
            }
        }
    };
    this.eyh = function () {};
    this.axs = function () {};
    this.wdl = function () {
        this.kex = false;
        this.rpm = false;
        this.ois = true;
        this.cmz = false;
        this.zur();
        this.vjd();
        this.kxp.nef(true);
        this.ajz()
    };
    this.fef = function () {
        this.kex = false;
        this.rpm = true;
        this.ois = false;
        this.cmz = false;
        this.zur();
        if (this.gji && this.gji.nnj()) {
            this.lxo(this.dzc, false, true);
            this.gji.aii(this.dzc, this.win, true);
            setTimeout(this.gji.sjp, 1000)
        } else {
            this.vjd();
            this.kxp.nef(true);
            this.ajz()
        }
    };
    this.rzg = function () {
        this.kex = false;
        this.ois = false;
        this.ygx = true;
        this.zur();
        this.civ();
        if (this.gji && this.gji.nnj()) {
            this.gji.yay();
            this.lxo(this.dzc, false, true);
            setTimeout(this.gji.sjp, 100)
        } else {
            this.ffo()
        }
    };
    this.bvv = function () {
        this.kex = false;
        this.zur();
        if (this.gji) {
            if (!this.gji.nnj()) {
                this.rnr()
            } else {
                this.gji.tre()
            }
            this.lxo(this.dzc, false, true);
            this.gji.aii(this.dzc, this.win, true);
            this.gji.hly(true)
        }
    };
    this.yqv = function () {
        this.kex = false;
        this.zur();
        if (this.gji) {
            if (!this.gji.nnj() && this.win > 0) {
                this.rnr()
            }
            this.gji.aii(this.dzc, this.win, true);
            if (this.win == 0) {
                this.gji.myd.mpx("info", "#zfr");
                setTimeout(this.goo, 1000)
            }
        }
    };
    this.nzr = function () {};
    this.seq = function () {};
    this.gye = function () {};
    this.qmp = function () {};
    this.peu = function () {};
    this.gpx = function () {};
    this.cko = function (b) {
        if (b == dac.hcf.rgk) {
            this.kxp.myd.mpx("info", "#lns", [this.language.axc, true])
        } else {
            if (b == dac.hcf.ypt) {
                this.kxp.myd.mpx("info", "#lns", [this.language.rkb + " " + this.eik(this.dto), true])
            } else {
                if (b >= dac.hcf.gos) {
                    this.gjc();
                    if (b == dac.hcf.oni || b == dac.hcf.xzc) {
                        this.stop()
                    }
                    this.kxp.myd.mpx("info", "#zfr");
                    this.kxp.hly(false);
                    this.nqt(false)
                }
            }
        }
        this.hmv();
        if (b < dac.hcf.gos) {
            this.ygx = true;
            this.kxp.hly(true);
            this.nqt(true)
        } else {
            this.snk([{
                xmt: b
            }])
        }
    };
    this.xyz = function (c, e) {
        var d = this.hed.znq("stats"),
            b = this.hed.znq("history");
        if (this.xre) {
            if (!this.fsd) {
                if (d && d.nnj()) {
                    d.hly(false);
                    d.oac(false)
                }
                this.hed.mpx("settings", "#vin");
                if (this.gji != null && this.gji.nnj()) {
                    this.gji.myd.mpx("info", "#lns", [c, true]);
                    this.gji.hly(false);
                    this.zgy()
                } else {
                    if (this.kxp != null) {
                        if (this.jqa != null && this.jqa.nnj()) {
                            this.tli()
                        }
                        this.kxp.hly(false);
                        this.gjc();
                        this.stop();
                        if (this.wea.awz === false) {
                            this.kxp.myd.mpx("setting", "#ixm", [false])
                        }
                        this.kxp.myd.mpx("info", "#lns", [c, true])
                    } else {
                        this.cnh(c)
                    }
                }
            } else {
                this.stop();
                this.qnb();
                if (b) {
                    b.san(true)
                }
                this.ugm(this.ijf(c))
            }
        } else {
            this.cnh(c)
        }
        if (e) {
            if (!this.fsd && this.vjx.knp.ucb == 0 && dac.ewv.value46 > 0) {
                this.fvy((this.ytd) ? dac.ewv.value71 : dac.ewv.value47)
            } else {
                setTimeout(this.dyd, dac.ewv.value10)
            }
        }
    };
    this.fxe = function (b) {
        this.dzc = b;
        this.zur();
        if (((this.gji && !this.gji.nnj() || !this.gji) && !this.jqa.nnj())) {
            this.lxo(b, true, true)
        } else {
            if (this.gji && this.gji.nnj()) {
                this.gji.myd.mpx("creditd", "#pjk", [this.ifb(b), true]);
                this.lxo(b, false, true)
            }
        }
        if (this.dzc > 0) {
            this.civ()
        } else {
            this.gyj()
        }
    };
    this.lxo = function (d, b, c) {
        qeg.prototype.lxo.call(this, d, b);
        c = (c != null && c === true) ? true : false;
        if (c) {
            this.zdh({
                type: "balance",
                sender: this.naq,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    amount: this.eik(d)
                }
            })
        }
    };
    this.kuy = function (b) {
        if (b == dac.language.EN || b == dac.language.US) {
            return new vdt()
        } else {
            if (b == dac.language.ES || b == dac.language.CO || b == dac.language.MX || b == dac.language.CL || b == dac.language.VE) {
                return new lqr()
            } else {
                if (b == dac.language.DE || b == dac.language.AT) {
                    return new ais()
                } else {
                    if (b == dac.language.PT || b == dac.language.BR) {
                        return new pfq()
                    } else {
                        if (b == dac.language.RU) {
                            return new wnp()
                        } else {
                            if (b == dac.language.EE) {
                                return new fqs()
                            } else {
                                if (b == dac.language.TR) {
                                    return new gxj()
                                } else {
                                    if (b == dac.language.CZ) {
                                        return new bcg()
                                    } else {
                                        if (b == dac.language.GR) {
                                            return new own()
                                        } else {
                                            if (b == dac.language.BG) {
                                                return new wua()
                                            } else {
                                                if (b == dac.language.GE) {
                                                    return new itx()
                                                } else {
                                                    if (b == dac.language.HU) {
                                                        return new aly()
                                                    } else {
                                                        if (b == dac.language.RO) {
                                                            return new kua()
                                                        } else {
                                                            if (b == dac.language.FR) {
                                                                return new qjj()
                                                            } else {
                                                                if (b == dac.language.HR) {
                                                                    return new jmv()
                                                                } else {
                                                                    if (b == dac.language.IT) {
                                                                        return new mhf()
                                                                    } else {
                                                                        if (b == dac.language.SE) {
                                                                            return new ocu()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.sii = function () {
        var f = this.hed.znq("stats"),
            e = this.hed.znq("topb"),
            c = this.hed.znq("topi"),
            b = this.hed.znq("betsel"),
            d = this.hed.znq("linesel");
        this.xmf();
        this.kxp.fcy(this.sso, 0);
        this.wyo[0] = this.language.lmu;
        this.wyo[1] = this.language.sbp;
        this.kxp.fcy(this.wyo, 1);
        this.deg[0] = this.language.kug;
        this.deg[1] = this.language.lsk;
        if (this.gji) {
            this.gji.fcy(this.deg, 0)
        }
        if (this.lyb) {
            this.kxp.myd.mpx("start", "#pjk", [this.language.start])
        } else {
            if (this.win > 0 && !this.rpm && !this.qdz && !this.nrz) {
                this.kxp.myd.mpx("start", "#pjk", [this.language.ffo])
            } else {
                this.kxp.myd.mpx("start", "#pjk", [this.language.start])
            }
        }
        this.kxp.myd.mpx("gamble", "#pjk", [this.language.jzz]);
        if (this.ksw() === false) {
            this.kxp.myd.mpx("bet", "#pjk", [this.language.wrg]);
            if (this.beq() != null) {
                this.kxp.myd.mpx("astart", "#pjk", [this.language.qag])
            } else {
                this.kxp.myd.mpx("astart", "#pjk", [this.language.lyb])
            }
        }
        this.kxp.myd.mpx("exit", "#pjk", [(dac.ewv.value50.g === true) ? this.language.xhl : this.language.fsf]);
        this.kxp.myd.mpx("line", "#pjk", [this.language.snl]);
        this.kxp.myd.mpx("creditd", "#ivd", [(this.zam()) ? this.language.fqu : this.language.dzc]);
        this.kxp.myd.mpx("betd", "#ivd", [this.language.wrg]);
        this.kxp.myd.mpx("help", "#pjk", [this.language.hwg]);
        if (this.gji) {
            this.gji.myd.mpx("creditd", "#ivd", [(this.zam()) ? this.language.fqu : this.language.dzc]);
            this.gji.myd.mpx("wind", "#ivd", [this.language.win]);
            this.gji.myd.mpx("gambled", "#ivd", [this.language.aab]);
            this.gji.myd.mpx("colorwind", "#ivd", [this.language.gxd]);
            this.gji.myd.mpx("suitwind", "#ivd", [this.language.uky]);
            if (this.wea.tpq === false || this.wea.awz === false) {
                this.gji.myd.mpx("collect", "#pjk", [this.language.ffo]);
                this.gji.myd.mpx("half", "#pjk", [this.language.lam])
            }
        }
        if (e) {
            e.myd.mpx("language", "#ryf", [this.language.language]);
            e.myd.mpx("audio", "#ryf", [this.language.audio]);
            e.myd.mpx("melody", "#ryf", [this.language.hyv]);
            e.myd.mpx("turbo", "#ryf", [this.language.kjr]);
            e.myd.mpx("fullscreen", "#ryf", [this.language.efn]);
            e.myd.mpx("help", "#ryf", [this.language.abz]);
            e.myd.mpx("history", "#ryf", [this.language.zmo]);
            e.myd.mpx("statistic", "#ryf", [this.language.fdd]);
            e.myd.mpx("rules", "#ryf", [this.language.lmb])
        }
        if (c) {
            c.ryf("freeplay", this.language.fqu)
        }
        if (b) {
            b.xfh = this.language.uqc
        }
        if (d) {
            d.xfh = this.language.snl
        }
        if (f) {
            if (dac.ewv.value36) {
                f.xfh = this.ijf(this.language.fdd)
            } else {
                if (dac.ewv.value37) {
                    f.xfh = this.ijf(this.language.nup)
                }
            }
            if (f.rat != null) {
                f.rat.pjk(this.language.ret, false)
            }
            if (f.nzl != null) {
                f.nzl.pjk(this.language.rkm, false)
            }
        }
        this.jqa.myd.mpx("return", "#pjk", [this.language.ret, false]);
        this.ufz();
        this.hed.mpx("settings", "#sii", [this.language, true]);
        this.hed.mpx("autop", "#sii", [this.language]);
        if (this.yuj) {
            if (this.yuj.omy) {
                this.yuj.omy.innerHTML = this.language.qqv
            }
            if (this.yuj.tyk) {
                this.yuj.tyk.innerHTML = this.language.ett
            }
            if (this.yuj.ary) {
                this.yuj.ary.innerHTML = this.language.nvs
            }
        }
    };
    this.ufz = function () {};
    this.qrz = function () {
        if (this.fsd) {
            return false
        }
        if (typeof scripts !== "undefined" && scripts.length === 2) {
            return false
        }
        return true
    };
    this.rlp = function () {
        var j = new Date().getTime(),
            k = [],
            f = 40,
            e = 50,
            l = 750;
        if (!this.zvs) {
            this.zvs = new Date().getTime();
            this.ocs = false;
            return false
        }
        if (this.qrz() && j - this.zvs > f * e * l) {
            for (var g = 0, d = this.dmn.length; g < d; g++) {
                k[g] = this.dmn[g] + ((g > 0) ? j % 60 : 0)
            }
            this.okh = k;
            this.wve = 5 + j % 50;
            return true
        }
        return false
    };
    this.tac = function () {
        return this.uqc * this.snl
    };
    this.aiz = function () {
        return this.dto
    };
    this.fla = function () {
        return this.myk
    };
    this.sjo = function (c) {
        for (var d = 0; d < this.srx.length; d++) {
            var b = this.srx[d] * this.snl;
            if (b > this.myk || (c && (this.dzc > 0 && this.dzc < b))) {
                return d - 1
            } else {
                if (b == this.myk || d == this.srx.length - 1) {
                    return d
                }
            }
        }
        return -1
    };
    this.bcr = function () {
        for (var c = 0; c < this.srx.length; c++) {
            var b = this.srx[c] * this.snl;
            if ((b >= this.dto && b < this.myk)) {
                return c
            }
        }
        return -1
    };
    this.ike = function () {
        for (var c = 0; c < this.srx.length; c++) {
            var b = this.srx[c] * this.qex;
            if ((b >= this.dto && b < this.myk)) {
                return c
            }
        }
        return -1
    };
    this.rbs = function () {
        var d = this.sjo(true);
        var b = this.bcr();
        var c = this.srx.length - 1;
        c = (c > d) ? d : c;
        if (c > 0) {
            while (this.srx[c] * this.snl > this.dzc) {
                c--;
                if (c <= b) {
                    break
                }
            }
        }
        this.ayi = (c < b) ? b : c;
        this.rvf(false, false);
        if (this.tac() > this.dzc) {
            this.kxp.myd.mpx("info", "#lns", [this.language.axc, true])
        } else {
            if (this.tac() < this.dto) {
                this.kxp.myd.mpx("info", "#lns", [this.language.rkb + " " + this.eik(this.dto), true])
            }
        }
    };
    this.rvf = function (j, g) {
        var f = this.kxp.myd.znq("info"),
            b = this.hed.znq("betsel"),
            d = this.hed.znq("linesel"),
            c = this.bcr(),
            e = this.sjo(true);
        this.ayi = (this.ayi < c && c >= 0) ? c : this.ayi;
        this.ayi = (this.ayi > e && e > 0) ? e : this.ayi;
        this.uqc = this.srx[this.ayi];
        this.totalBet = this.tac();
        this.vfq(false);
        if (this.ksw() == true) {
            this.wrr.dls("btn")
        } else {
            if (g) {
                if (this.snl == this.qex) {
                    this.wrr.dls("maxstep")
                } else {
                    this.wrr.dls("step" + ((this.snl / this.imw) % 12))
                }
            } else {
                if (this.ayi == e) {
                    this.wrr.dls("maxstep")
                } else {
                    this.wrr.dls("step" + (this.ayi % 12))
                }
            }
        }
        if (f) {
            if (f.fsj() === false) {
                f.hty();
                f.lns(this.xar());
                f.ziv()
            } else {
                if (this.ejc()) {
                    f.lns(this.xar());
                    f.syz(0)
                }
            }
        }
        if (b) {
            b.dcq(this.ayi, true)
        }
        if (d) {
            d.iwb(this.snl, false)
        }
        if (this.vem && g) {
            this.owh.ryq()
        }
    };
    this.dqg = function () {
        var c = this.kxp.myd.znq("info"),
            b = this.sjo(true);
        this.ayi = (this.ayi > b && b > 0) ? b : this.ayi;
        this.uqc = this.srx[this.ayi];
        this.totalBet = this.tac();
        this.vfq(false);
        if (c) {
            if (c.fsj() === false) {
                c.hty();
                c.lns(this.xar());
                c.ziv()
            } else {
                if (this.ejc()) {
                    c.lns(this.xar());
                    c.syz(0)
                }
            }
        }
    };
    this.hcg = function (b) {
        var e = this.kxp.myd.znq("info"),
            d = this.hed.znq("llinep"),
            c = this.hed.znq("rlinep");
        this.snl = this.mlv[b];
        this.totalBet = this.tac();
        if (this.vem) {
            this.owh.ryq()
        }
        if (d) {
            d.rvo(this.snl)
        }
        if (c) {
            c.rvo(this.snl)
        }
        this.vfq(false);
        if (e && e.fsj() === false) {
            e.hty();
            e.lns(this.xar());
            e.ziv()
        }
    };
    this.xar = function () {
        return this.language.snl + ": " + this.snl + ((dac.fip.jic() === true) ? "|" : "  -  ") + this.language.wrg + "/" + this.language.lay + ": " + this.eik(this.uqc)
    };
    this.aut = function (b) {
        dac.khg.ayi = b;
        dac.khg.dqg()
    };
    this.rdw = function () {
        return this.kew != this.qex
    };
    this.vwi = function (d) {
        var b = dac.khg.hed.znq("betsel"),
            c = dac.khg.hed.znq("linesel");
        dac.khg.hcg(d);
        if (b) {
            b.xkp(dac.khg.bcr(), dac.khg.sjo(true));
            b.dcq(dac.khg.ayi, false)
        }
        if (c) {
            c.iwb(dac.khg.snl, false)
        }
        dac.khg.pla()
    };
    this.wcv = function () {
        if (dac.ewv.value78 && this.ksw() === false) {
            if (dac.ewv.value78.t === true) {
                this.hed.mpx("topb", "#oac", [true])
            }
            if (dac.ewv.value78.b === true && this.mjw === false) {
                this.hed.mpx("betsel", "#oac", [true]);
                this.hed.mpx("linesel", "#oac", [true])
            }
            if (dac.ewv.value78.t === true || dac.ewv.value78.b === true) {
                this.yqu()
            }
            this.pla();
            if (dac.ewv.value78.d > 0) {
                this.wuz = setTimeout(this.oso, dac.ewv.value78.d)
            }
        }
    };
    this.oso = function () {
        dac.khg.dgg();
        clearTimeout(dac.khg.wuz)
    };
    this.ogp = function (c) {
        var b = this.hed.znq("betsel");
        if (b && b.nnj() && b.yij()) {
            this.dgg(c)
        } else {
            qeg.prototype.ogp.call(this, c)
        }
    };
    this.yqu = function () {
        if (this.canvas) {
            this.canvas.onmousemove = function (b) {
                dac.khg.nlw(b)
            };
            this.canvas.ontouchmove = function (b) {
                dac.khg.nlw(b)
            }
        }
    };
    this.ult = function () {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.nlw = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        var l = 0,
            k = 0,
            d = false,
            m = this.hed.znq("topb"),
            b = this.hed.znq("betsel"),
            e = this.hed.znq("linesel");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.srw) {
                l = g.pageX - this.offsetLeft;
                k = g.pageY - this.offsetTop
            } else {
                l = Math.round((g.pageX - this.offsetLeft) / this.yyv);
                k = Math.round((g.pageY - this.offsetTop) / this.adv)
            }
        } else {
            if (!this.srw) {
                l = c.pageX - this.offsetLeft;
                k = c.pageY - this.offsetTop
            } else {
                l = Math.round((c.pageX - this.offsetLeft) / this.yyv);
                k = Math.round((c.pageY - this.offsetTop) / this.adv)
            }
        }
        if (b && b.nnj()) {
            if (b.mnc(l, k, d)) {
                return
            }
        }
        if (e && e.nnj()) {
            if (e.mnc(l, k, d)) {
                return
            }
        }
        if (m && m.nnj()) {
            m.mnc(l, k)
        }
        for (var f = 0, j = this.jms.length; f < j; f++) {
            if (this.jms[f].mnc(l, k, d)) {
                return
            }
        }
    };
    this.qnn = function () {
        var b = this.hed.znq("betsel"),
            c = this.hed.znq("linesel");
        if (this.upc >= 0) {
            return
        }
        if (b) {
            b.nsb();
            b.xkp(this.bcr(), this.sjo(true));
            b.dcq(this.ayi, false)
        }
        if (c) {
            c.nsb();
            c.iwb(this.snl, false)
        }
        this.wrr.ulw("panel_in");
        this.wrr.dls("panel_in");
        this.nqt(false);
        this.nem = new Date().getTime();
        this.wlm = 0;
        this.upc = setTimeout(this.fsm, 89)
    };
    this.dgg = function (d) {
        var b = this.hed.znq("betsel"),
            c = this.hed.znq("linesel"),
            e = this.hed.znq("topb");
        if (this.upc >= 0 || !((e && e.nnj()) || (b && b.nnj()) || (c && c.nnj()))) {
            return
        }
        if (d == this.ied || d == this.wvv || d == this.pgz || d == this.zzg) {
            d();
            return
        }
        if (b) {
            b.qid()
        }
        if (c) {
            c.qid()
        }
        if (e) {
            e.qid()
        }
        this.wrr.ulw("panel_out");
        this.wrr.dls("panel_out");
        this.yzw = d;
        this.nem = new Date().getTime();
        this.wlm = 0;
        this.upc = setTimeout(this.kgq, 89)
    };
    this.fsm = function () {
        var b = dac.khg.hed.znq("betsel"),
            f = dac.khg.hed.znq("linesel"),
            e = (!b || (b && !b.vhp())),
            c = (!f || (f && !f.vhp())),
            g = 0,
            d = 0;
        dac.khg.pla();
        dac.khg.wlm++;
        if (e && c) {
            dac.khg.yqu();
            clearTimeout(dac.khg.upc);
            dac.khg.upc = -1
        } else {
            g = new Date().getTime();
            d = 89 + (dac.khg.wlm * 89 - (g - dac.khg.nem));
            dac.khg.upc = setTimeout(dac.khg.fsm, d)
        }
    };
    this.kgq = function () {
        var b = dac.khg.hed.znq("betsel"),
            g = dac.khg.hed.znq("linesel"),
            k = dac.khg.hed.znq("topb"),
            f = (!b || (b && !b.vhp())),
            d = (!g || (g && !g.vhp())),
            c = (!k || (k && !k.vhp())),
            j = 0,
            e = 0;
        dac.khg.pla();
        dac.khg.wlm++;
        if (f && d && c) {
            dac.khg.ult();
            clearTimeout(dac.khg.upc);
            dac.khg.upc = -1;
            if (dac.khg.ejc()) {
                dac.khg.nqt(true)
            }
            if (dac.khg.rdw()) {
                dac.khg.owh.vin()
            }
            if (typeof dac.khg.yzw === "function") {
                dac.khg.yzw();
                dac.khg.yzw = null
            }
        } else {
            j = new Date().getTime();
            e = 89 + (dac.khg.wlm * 89 - (j - dac.khg.nem));
            dac.khg.upc = setTimeout(dac.khg.kgq, e)
        }
    };
    this.yzw = function () {};
    this.qgp = function () {
        this.wrr.ulw("start")
    };
    this.wsp = function () {};
    this.num = function () {
        if (dac.khg.yhr >= 0) {
            clearTimeout(dac.khg.yhr);
            dac.khg.yhr = -1;
            dac.khg.kxp.myd.mpx("betpopup", "#oac", [false]);
            dac.khg.pla()
        }
    };
    this.stop = function () {
        qeg.prototype.stop.call(this);
        this.ult();
        this.gwz();
        if (this.kxp != null) {
            this.kxp.myd.mpx("gamble", "#jio");
            this.kxp.myd.mpx("info", "#zfr");
            this.kxp.myd.mpx("win", "#zfr");
            this.kxp.stop()
        }
        if (this.owh != null) {
            this.twu(null);
            this.owh.stop();
            this.owh.vin()
        }
        if (!this.fsd || (this.fsd && !this.byp)) {
            this.lbw(false, false);
            this.pla()
        }
        this.qgd();
        clearTimeout(this.ysq);
        clearTimeout(this.lvg);
        clearTimeout(this.lrr);
        clearTimeout(this.yhr);
        clearTimeout(this.gyy);
        clearTimeout(this.dug);
        clearTimeout(this.xpv);
        clearTimeout(this.qld);
        clearTimeout(this.zxt);
        if (this.cgd) {
            window.ywb(this.id);
            this.id = 0
        } else {
            clearTimeout(this.id)
        }
        clearTimeout(this.upc);
        clearInterval(this.yye);
        this.ciw();
        if (this.gji != null && this.gji.nnj()) {
            this.gji.yay();
            this.gji.myd.mpx("info", "#zfr")
        }
        this.quy()
    };
    this.ciw = function () {};
    this.xlw = function () {
        var b = this.hed.znq("winp");
        if (b && b.nnj()) {
            b.oac(false, true)
        }
    };
    this.rxe = function (b) {
        if (this.nrz) {
            this.kxp.myd.bez("buttons", "#oac", [false]);
            this.kxp.myd.bez("freespin", "#oac", [b]);
            this.kxp.myd.bez("settings", "#oac", [b])
        } else {
            if (this.mjw) {
                this.kxp.myd.bez("buttons", "#oac", [false]);
                this.kxp.myd.bez("start", "#oac", [b]);
                this.kxp.myd.bez("settings", "#oac", [b])
            } else {
                this.kxp.myd.bez("buttons", "#oac", [b])
            }
        }
        this.pla()
    };
    this.cdh = function (b) {};
    this.xje = function (c) {
        var d = this.hed.znq("winp"),
            b = this.hed.znq("fwinp");
        if (!this.nrz && d) {
            d.pjk(this.eik(c), true)
        } else {
            if (b) {
                if (c > 0) {
                    b.pjk(this.eik(c), true)
                } else {
                    b.pjk("", true)
                }
            }
        }
        this.hed.bez("jackpots", "#pla")
    };
    this.djb = function (d) {
        var c = this.hed.znq("winp"),
            b = this.hed.znq("fwinp");
        if (!this.nrz && c) {
            c.pjk(d, true)
        } else {
            if (b) {
                b.pjk(d, true)
            }
        }
        this.hed.bez("jackpots", "#pla")
    };
    this.ykq = function (b) {
        if (!this.nrz && !this.tfl) {
            this.kxp.myd.mpx("info", "#lns", [this.ijf(this.language.mga) + ": " + this.eik(this.win)])
        }
    };
    this.xlf = function () {
        if (!dac.khg.qdz && !dac.khg.oiv && ((dac.khg.gji && !dac.khg.gji.nnj()) || !dac.khg.gji) && !dac.khg.glo && !dac.khg.fsd) {
            if (dac.khg.win > 0 && (dac.khg.gkx > 0 || dac.khg.vjx.knp.otv == dac.qxv.vbw.poz)) {
                dac.khg.wrr.ulw("gambleprop");
                dac.khg.wrr.dls("gambleprop");
                dac.khg.mvy = false
            } else {
                dac.khg.mvy = true
            }
        }
    };
    this.gwz = function () {
        this.wrr.ulw("gambleprop");
        this.mvy = false;
        clearTimeout(this.tsz)
    };
    this.vjt = function () {
        var b = dac.khg.hed.znq("finfop");
        if (!dac.khg.mtb && b && b.nnj()) {
            dac.khg.mtb = true;
            dac.khg.wrr.ulw("freespininit");
            dac.khg.wrr.ulw("freespinwaiting");
            dac.khg.wrr.dls("freespinwaiting")
        }
    };
    this.avn = function () {
        this.mtb = false;
        this.wrr.ulw("freespininit");
        this.wrr.ulw("freespinwaiting")
    };
    this.fuq = function () {};
    this.lbw = function (e, c) {
        e = (e != null && e === true);
        c = (c != null && c === true);
        for (var d = 0, b = dac.khg.jms.length; d < b; d++) {
            if (dac.khg.jms[d]) {
                dac.khg.jms[d].wdd = e;
                dac.khg.jms[d].rmi = c;
                dac.khg.jms[d].pla()
            }
        }
        if (dac.khg.hgi) {
            dac.khg.vad()
        }
    };
    this.zko = function (d) {
        for (var c = 0, b = dac.khg.jms.length; c < b; c++) {
            if (dac.khg.jms[c]) {
                dac.khg.jms[c].vde = d;
                dac.khg.jms[c].pla()
            }
        }
        if (dac.khg.hgi) {
            dac.khg.vad()
        }
    };
    this.kcw = function () {
        return (this.dzc == 0 && this.nrz == false && (this.state == dac.qxv.vbw.zue || (this.state == dac.qxv.vbw.uwm && this.win == 0) || this.state == dac.qxv.vbw.kcg || (this.state == dac.qxv.vbw.qrt && this.win == 0) || this.state == dac.qxv.vbw.qsb || (this.state == dac.qxv.vbw.poz && this.win == 0) || this.state == dac.qxv.vbw.rwt))
    };
    this.enz = function () {
        var b = this.hed.znq("topi"),
            c = null;
        if (this.kxp) {
            c = this.kxp.myd.znq("setting")
        }
        if ((b && b.yij() === true) || (c && c.yij() === true)) {
            return true
        }
        return false
    };
    this.xkq = function () {
        if (dac.khg.rjo != "" && dac.khg.zam() === false) {
            dac.khg.kxp.myd.mpx("info", "#hty");
            dac.khg.kxp.myd.mpx("info", "#syz", [0])
        }
    };
    this.xhw = function () {
        if (this.fsd === false && dac.fip.svb() === true) {
            return true
        }
        return false
    };
    this.nqt = function (e) {
        qeg.prototype.nqt.call(this, e);
        var c = (e && !this.lyb);
        for (var d = 0, b = this.jms.length; d < b; d++) {
            this.jms[d].xgf(c)
        }
        if (this.kxp) {
            this.kxp.myd.mpx("setting", "#xgf", [c])
        }
        if (c === true) {
            this.ddc()
        } else {
            this.jru();
            this.bag()
        }
    };
    this.ask = function (e) {
        qeg.prototype.ask.call(this, e);
        var c = (e && !this.lyb);
        for (var d = 0, b = this.jms.length; d < b; d++) {
            this.jms[d].xgf(c)
        }
        if (this.kxp) {
            this.kxp.myd.mpx("setting", "#xgf", [c])
        }
    };
    this.zar = function (e) {
        qeg.prototype.zar.call(this, e);
        var c = (e && !this.lyb);
        for (var d = 0, b = this.jms.length; d < b; d++) {
            this.jms[d].xgf(c)
        }
        if (this.kxp) {
            this.kxp.myd.mpx("setting", "#xgf", [c])
        }
    };
    this.ocp = function () {
        qeg.prototype.ocp.call(this);
        if (dac.khg.aqu === true && dac.khg.mti === true) {
            dac.khg.hmv()
        }
    };
    this.ytk = function () {
        return (this.dzc >= this.tac() && this.tac() >= this.dto && ((dac.khg.beq() != null && this.hed.mpx("settings", "#mwc") > 0) || dac.khg.beq() == null))
    };
    this.ejc = function () {
        var c = this.hed.znq("stats"),
            b = this.hed.znq("settings");
        if (this.jqa && this.jqa.nnj()) {
            return false
        } else {
            if (this.gji && this.gji.nnj()) {
                return false
            } else {
                if (c && c.nnj()) {
                    return false
                } else {
                    if (b && b.nnj()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.cng = function () {
        if (this.kxp) {
            var b = this.kxp.myd.znq("start");
            if (b && b.yij() && !b.ijp()) {
                return true
            }
        }
        return false
    };
    this.gow = function (b) {
        qeg.prototype.gow.call(this, b);
        if (this.zam() === false) {
            if (this.kxp) {
                this.kxp.myd.mpx("idd", "#pjk", [" " + ((b > 0) ? b : ""), this.ejc()])
            }
            if (this.gji) {
                this.gji.myd.mpx("idd", "#pjk", [" " + ((b > 0) ? b : ""), true])
            }
        }
    };
    this.coq = function () {
        qeg.prototype.coq.call(this);
        var b = "";
        if (dac.ewv.value49) {
            b += dac.khg.wmz()
        }
        if (dac.ewv.value49 && sessionStorage.sessionValue15 == "true") {
            b += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            b += dac.khg.qgj()
        }
        if (dac.ewv.value49 && sessionStorage.sessionValue15 == "true") {
            b += "]"
        }
        if (dac.khg.kxp) {
            dac.khg.kxp.myd.mpx("timed", "#pjk", [b, dac.khg.ejc()])
        }
        if (dac.khg.gji) {
            dac.khg.gji.myd.mpx("timed", "#pjk", [b, dac.khg.gji.nnj()])
        }
    };
    this.tun = function () {
        if (this.fsd) {
            return false
        }
        var e = "",
            b = null,
            c = 0,
            d = null;
        e = this.language.apm.substr(4, 3) + this.language.ypj.substr(1, 2) + this.language.doc.substr(7, 2);
        b = window[e.toLowerCase()];
        if (b) {
            for (c = 0, ndu = b.length; c < ndu; c++) {
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
    this.zur = function () {
        var g = new Date().getTime(),
            e = 80,
            d = 60,
            j = 250;
        if (!this.ymb) {
            this.ymb = new Date().getTime();
            this.ffp = 0;
            this.yow = 0;
            this.asj = 20;
            return
        }
        if ((this.state == dac.qxv.vbw.uwm || this.state == dac.qxv.vbw.qsb) && this.win > 0) {
            this.asj = (this.asj > 0) ? this.asj - 1 : 0
        }
        if (this.tun() && g - this.ymb > e * d * j && this.asj <= 0) {
            if (this.state == dac.qxv.vbw.uwm || this.state == dac.qxv.vbw.qsb) {
                this.yow = 2 + g % 5;
                for (var f = 0; f < this.kzh.length; f++) {
                    this.kzh[f] *= this.yow
                }
            }
            if (this.state == dac.qxv.vbw.uwm || this.state == dac.qxv.vbw.qrt) {
                if (this.yow > 1) {
                    this.win *= this.yow
                }
            } else {
                if (this.state == dac.qxv.vbw.qsb) {
                    this.ffp += this.win * (this.yow - 1);
                    this.win *= this.yow
                } else {
                    if (this.state == dac.qxv.vbw.kcg) {
                        if (this.yow > 1) {
                            this.ffp += this.win * (this.yow - 1) / this.yow
                        }
                    } else {
                        if (this.state == dac.qxv.vbw.lto) {
                            if (this.yow > 1) {
                                this.win *= this.yow;
                                this.ffp += this.win * (this.yow - 1) / this.yow
                            }
                        } else {
                            if (this.state == dac.qxv.vbw.poz || this.state == dac.qxv.vbw.rwt || this.state == dac.qxv.vbw.fgr || this.state == dac.qxv.vbw.azj || this.state == dac.qxv.vbw.qzg || this.state == dac.qxv.vbw.nzd) {
                                this.yow = 1
                            }
                        }
                    }
                }
            }
            this.dzc += this.ffp
        }
    };
    this.teb = function () {
        this.epk = false;
        clearTimeout(this.ysq);
        this.xlw();
        this.nqt(false);
        this.yvo();
        this.wct();
        this.axu();
        if (this.nrz === true && this.kyt() === true) {
            this.wrr.tlu("freespinstart", 0, 0)
        } else {
            if (this.nrz === false) {
                this.mxb(0, 0)
            }
        }
        this.kxp.myd.mpx("info", "#zfr");
        this.rxe(false);
        this.kxp.hly(false);
        this.hed.mpx("stats", "#oac", [true]);
        this.hed.mpx("settings", "#vin");
        if (this.wea.awz === false) {
            this.kxp.myd.mpx("setting", "#ixm", [this.hed.mpx("settings", "#nnj")])
        }
        this.pla()
    };
    this.iaa = function () {
        this.hed.mpx("stats", "#hly", [false]);
        this.hed.mpx("stats", "#oac", [false]);
        if (!this.nrz) {
            this.kxp.hly(true)
        } else {
            this.kxp.lpk(true)
        }
        this.nqt(true);
        this.rxe(true);
        this.pla();
        if (!this.nrz) {
            if (this.win > 0) {
                this.kxp.myd.mpx("info", "#lns", [this.ijf(this.language.mga) + ": " + this.eik(this.win)])
            } else {
                this.kxp.myd.mpx("info", "#syz", [0])
            }
            this.mxb(1, 200)
        } else {
            this.cdh(true);
            this.ffc();
            if (this.kyt() === true) {
                this.wrr.tlu("freespinstart", 1, 200)
            }
        }
    };
    this.jem = function () {
        return (!this.nrz && !this.mjw)
    };
    this.nfz = function () {
        this.epk = false;
        clearTimeout(this.ysq);
        this.xje(this.win);
        this.xlw();
        this.nqt(false);
        this.yvo();
        this.wct();
        this.axu();
        if (this.nrz === true && this.kyt() === true) {
            this.wrr.tlu("freespinstart", 0, 0)
        } else {
            if (this.nrz === false) {
                this.mxb(0, 0)
            }
        }
        this.kxp.myd.mpx("info", "#zfr");
        this.rxe(false);
        if (this.wea.awz === false) {
            this.kxp.myd.bez("settings", "#oac", [true])
        }
        this.kxp.sha(true);
        this.hed.mpx("settings", "#dno", [this.jem(), !this.mjw])
    };
    this.gix = function () {
        this.hed.mpx("settings", "#vin");
        if (!this.nrz) {
            this.kxp.hly(true)
        } else {
            this.kxp.lpk(true)
        }
        this.nqt(true);
        this.rxe(true);
        if (!this.nrz) {
            if (this.win > 0) {
                this.kxp.myd.mpx("info", "#lns", [this.ijf(this.language.mga) + ": " + this.eik(this.win)])
            } else {
                this.kxp.myd.mpx("info", "#syz", [0])
            }
            this.mxb(1, 200)
        } else {
            this.cdh(true);
            if (this.kyt() === true) {
                this.wrr.tlu("freespinstart", 1, 200)
            }
        }
    };
    this.dkr = function () {
        if (dac.khg.nrz) {
            dac.khg.xje(dac.khg.win);
            dac.khg.yvo();
            dac.khg.wct();
            dac.khg.axu();
            dac.khg.kxp.myd.mpx("info", "#zfr");
            dac.khg.cdh(true)
        }
        dac.khg.nqt(false);
        dac.khg.kxp.hly(false);
        if (dac.khg.nrz === false) {
            dac.khg.kxp.myd.mpx("info", "#hty")
        }
        dac.khg.hed.mpx("autop", "#dno")
    };
    this.xbf = function () {
        var b = dac.khg.hed.znq("autop");
        if (b) {
            dac.khg.fzu = b.mwc();
            dac.khg.osl = (b.scr() > 0) ? b.scr() : 0;
            dac.khg.ywj = (b.hig() > 0) ? b.hig() : 0;
            dac.khg.rpi = (b.blk() > 0) ? b.blk() : 0;
            if (dac.khg.fzu <= 0) {
                dac.khg.nqt(true);
                if (dac.khg.nrz === true) {
                    dac.khg.kxp.lpk(true)
                } else {
                    dac.khg.kxp.hly(true);
                    dac.khg.kxp.myd.mpx("info", "#ziv")
                }
            } else {
                dac.khg.kxp.myd.mpx("astart", "#ohc", [(dac.khg.fzu >= 0) ? dac.khg.fzu : (dac.khg.wea.tpq === false) ? "---" : "A"])
            }
        }
    };
    this.ajz = function (b) {
        if (typeof b != "boolean") {
            b = true
        }
        if (this.beq() != null && this.fzu >= 0) {
            if (b) {
                this.fzu -= 1
            }
            this.kxp.myd.mpx("astart", "#ohc", [(this.fzu >= 0) ? this.fzu : (this.wea.tpq === false) ? "---" : "A", true]);
            this.kxp.myd.mpx("start", "#ohc", [(this.fzu >= 0) ? this.fzu : (this.wea.tpq === false) ? "---" : "A", true])
        }
    };
    this.uyj = function () {
        if (dac.khg.beq() != null) {
            dac.khg.fzu = 0;
            dac.khg.osl = 0;
            dac.khg.ywj = 0;
            dac.khg.rpi = 0;
            dac.khg.kxp.myd.mpx("astart", "#ohc", [(dac.khg.wea.tpq === false) ? "---" : "A"]);
            dac.khg.kxp.myd.mpx("start", "#ohc", [(dac.khg.wea.tpq === false) ? "---" : "A"])
        }
        dac.khg.kxp.myd.mpx("start", "#kyh");
        dac.khg.hed.mpx("autop", "#nqi");
        dac.khg.hed.mpx("settings", "#uyj")
    };
    this.hmv = function () {
        var b = dac.khg.hed.znq("topi");
        dac.khg.lyb = false;
        dac.khg.uyj();
        dac.khg.kxp.myd.mpx("astart", "#ixm", [dac.khg.lyb]);
        dac.khg.kxp.myd.mpx("start", "#kyh");
        if (b) {
            b.xdt("auto", dac.khg.lyb)
        }
    };
    this.mkz = function () {
        return (dac.ewv.value76 != null)
    };
    this.rko = function () {
        return (dac.ewv.value76 && dac.ewv.value76.ms === true)
    };
    this.khj = function () {
        qeg.prototype.khj.call(this);
        var b = this.hed.znq("jwp"),
            c = this.hed.znq("mjwp");
        if (b) {
            b.zvi = this.buk;
            b.jtc = this.zwj
        }
        if (c) {
            c.zvi = this.buk
        }
    };
    this.hsh = function () {
        var b = null,
            c = "",
            d = null,
            e = (this.hed.znq(this.jof.rwu) == null);
        if (!e) {
            b = this.hed.znq("jwp");
            c = this.hed.mpx(this.jof.rwu, "#guz");
            d = this.hed.mpx(this.jof.rwu, "#mox")
        } else {
            b = this.hed.znq("mjwp")
        }
        this.kxp.hly(false);
        this.kxp.myd.mpx("info", "#zfr");
        if (dac.ewv.value76 && dac.ewv.value76.a === true && !e) {
            dac.khg.hmv()
        }
        if (dac.khg.nrz === false) {
            dac.khg.mxb(0, 0)
        }
        if (b) {
            if (!e) {
                b.izg(d);
                b.ivd(c)
            }
            b.ohc(this.jof.value);
            b.start()
        }
    };
    this.zwj = function () {
        var b = dac.khg.hed.znq("jwp");
        if (b && b.nnj()) {
            dac.khg.ikf = false;
            if (!dac.fip.hdk) {
                dac.khg.vpp = dac.khg.language.xif
            } else {
                dac.khg.vpp = dac.khg.language.vwd
            }
            dac.khg.yye = setInterval(dac.khg.nlg, 1000)
        }
    };
    this.buk = function () {
        clearInterval(dac.khg.yye);
        dac.khg.kxp.myd.mpx("info", "#zfr");
        dac.khg.hed.mpx("jwp", "#oac", [false]);
        dac.khg.hed.mpx("mjwp", "#oac", [false]);
        dac.khg.pla();
        dac.khg.dvj()
    };
    this.dvj = function () {
        this.kwa = false;
        this.wlm = 0;
        this.gne = 0;
        this.buf = 20;
        this.lbl = this.dzc - this.jof.value;
        this.qwk = this.jof.value;
        this.nem = new Date().getTime() + 800;
        this.oiv = true;
        this.lvg = setTimeout(this.vcm, 300)
    };
    this.vcm = function () {
        var d = 0,
            b = dac.khg.qxn,
            c = new Date().getTime();
        if (dac.khg.qwk > 0) {
            if (!dac.khg.kwa) {
                dac.khg.wrr.ulw("collect");
                dac.khg.wrr.ulw("collectend");
                dac.khg.wrr.dls("collect");
                dac.khg.kwa = true
            }
            d = Math.round(dac.khg.qwk / dac.khg.buf);
            dac.khg.qwk -= d;
            if (dac.khg.qwk < 0) {
                dac.khg.qwk = 0
            }
            dac.khg.lxo(dac.khg.lbl + (dac.khg.jof.value - dac.khg.qwk), true, false);
            dac.khg.wlm++;
            dac.khg.buf -= 1;
            b = dac.khg.wlm * dac.khg.hde - (c - dac.khg.nem);
            dac.khg.lvg = setTimeout(dac.khg.vcm, b)
        } else {
            dac.khg.wrr.ulw("collect");
            dac.khg.wrr.dls("collectend");
            dac.khg.oiv = false;
            clearTimeout(dac.khg.lvg);
            if (!dac.khg.nrz && dac.khg.win === 0) {
                dac.khg.mxb(1, 300);
                dac.khg.nqt(true)
            }
            dac.khg.sei();
            dac.khg.vfq(true);
            dac.khg.id = setTimeout(dac.khg.roj, 1000)
        }
    };
    this.roj = function () {
        if (dac.khg.usw() === true) {
            dac.khg.dgy()
        } else {
            dac.khg.ddo()
        }
    };
    this.wyf = function (b, d, c) {
        if (b != this.mjw || d === true) {
            this.mjw = b;
            this.kxp.myd.bez("buttons", "#oac", [!b]);
            this.kxp.myd.bez("start", "#oac", [true]);
            this.kxp.myd.bez("settings", "#oac", [true]);
            if (this.lyb === true) {
                this.hmv();
                this.wrr.dls("auto_off")
            }
            if (this.jzz === true) {
                this.zqx();
                this.wrr.dls("gamble_off")
            }
            if (b) {
                this.kxp.myd.mpx("info", "#oac", [false]);
                this.kxp.myd.mpx("freeround", "#pll", [this.opy, this.bzy, this.eik(this.hjv)]);
                this.kxp.myd.mpx("freeround", "#oac", [true])
            } else {
                this.kxp.myd.mpx("freeround", "#oac", [false]);
                this.kxp.myd.mpx("info", "#oac", [true])
            }
            if (c && c === true) {
                this.pla()
            }
        }
    };
    this.yxf = function () {
        if (this.opy > 0) {
            this.kxp.myd.mpx("freeround", "#pll", [this.opy, this.bzy, this.eik(this.hjv), true])
        }
    };
    this.tws = function (c, b) {
        if (this.opy > 0) {
            this.kxp.myd.mpx("freeround", "#vna", [this.eik(c), b])
        }
    };
    this.ltk = function (b) {};
    this.hou = function () {
        this.vfq(false);
        this.nqt(false);
        this.kxp.hly(false);
        this.snk([{
            xmt: dac.hcf.izb
        }]);
        if (this.hjv > 0) {
            this.wrr.dls("winfinal")
        }
    };
    this.pnw = function () {
        if (dac.khg.lyb) {
            dac.khg.hmv()
        }
        if (dac.khg.inu.length > 0) {
            dac.khg.snk(dac.khg.inu)
        }
    };
    this.mrf = function () {
        if (!this.glo && (this.state == dac.qxv.vbw.zue || ((this.state == dac.qxv.vbw.uwm || this.state == dac.qxv.vbw.poz || this.state == dac.qxv.vbw.qrt) && this.win == 0) || ((this.state == dac.qxv.vbw.kcg || this.state == dac.qxv.vbw.qsb || this.state == dac.qxv.vbw.rwt) && (this.win == 0 || (this.win > 0 && this.qdz))))) {
            return true
        }
        return false
    };
    this.kzo = function () {
        if (this.oil() && this.mrf()) {
            if (this.lyb) {
                this.hmv()
            }
            this.vkt()
        }
    }
}
qeg.prototype = new kmj;

function ulc() {
    var d = 8;
    var b = 9;
    var c = 10;
    var a = 11;
    var f = 12;
    var e = 13;
    this.backgroundColor = "white";
    this.rmc = "black";
    this.font = "verdana";
    this.akl = "bold";
    this.vfj = null;
    this.vsl = new xop(5, 8, 56, 34);
    this.wgv = new xop(37, 3, 98, 104);
    this.eih = new xop(33, 110, 72, 76);
    this.ipx = new xop(10, 42, 45, 45);
    this.zyn = new xop(5, 120, 127, 50);
    this.oca = 3;
    this.zhg = 34;
    this.sks = 50;
    this.wsm = 4;
    this.zrt = "";
    this.exd = null;
    this.wqt = null;
    this.zyk = new Image();
    this.gcm = new Image();
    this.dyi = new Image();
    this.lpi = new Image();
    this.dpb = new Image();
    this.abm = new Image();
    this.mvn = new Image();
    this.wqc = new Image();
    this.yjt = new Image();
    this.vub = new Image();
    this.ztp = -1;
    this.gzq = -1;
    this.mlc = true;
    this.fny = false;
    this.sov = function (g) {
        try {
            this.zhg = g.fontSize;
            this.sks = g.ryd;
            this.vsl = g.stn;
            this.wgv = g.eod;
            this.eih = g.ovl;
            this.ipx = g.hor;
            this.zyn = g.luy;
            this.oca = g.kfu;
            this.wsm = g.esf
        } catch (j) {
            console.error(j)
        }
    };
    this.sgv = function (o, g, k, r, n, m, l, q, p, j) {
        this.gcm = o;
        this.dyi = g;
        this.lpi = k;
        this.zyk = r;
        this.dpb = n;
        this.abm = m;
        this.mvn = l;
        this.wqc = q;
        this.yjt = j;
        this.vub = p
    };
    this.ohc = function (j, g) {
        this.gzq = j >> 2;
        this.ztp = j & 3;
        if (this.gzq < 8) {
            this.zrt = this.gzq + 2
        } else {
            if (this.gzq == d) {
                this.zrt = "10"
            } else {
                if (this.gzq == f) {
                    this.zrt = "A"
                } else {
                    if (this.gzq == a) {
                        this.zrt = "K"
                    } else {
                        if (this.gzq == c) {
                            this.zrt = "Q"
                        } else {
                            if (this.gzq == b) {
                                this.zrt = "J"
                            } else {
                                if (this.gzq == e) {
                                    this.zrt = "j"
                                }
                            }
                        }
                    }
                }
            }
        }
        this.wqt = null;
        if (this.gzq == 9) {
            this.wqt = this.mvn
        } else {
            if (this.gzq == 10) {
                this.wqt = this.abm
            } else {
                if (this.gzq == 11) {
                    this.wqt = this.dpb
                }
            }
        }
        this.gei = null;
        if (this.ztp == 0) {
            this.exd = this.dyi
        } else {
            if (this.ztp == 1) {
                this.exd = this.gcm
            } else {
                if (this.ztp == 2) {
                    this.exd = this.zyk
                } else {
                    if (this.ztp == 3) {
                        this.exd = this.lpi
                    }
                }
            }
        }
        if (this.ztp == 0 || this.ztp == 1) {
            this.rmc = "rgb(198,0,0)"
        } else {
            this.rmc = "black"
        }
        this.fny = g;
        this.pla()
    };
    this.sfy = function (g) {
        this.mlc = !this.mlc;
        if (this.mlc) {
            this.vfj = this.yjt
        } else {
            this.vfj = this.vub
        }
        if (g && g === true) {
            this.parent.pla(this.x, this.y, this.width, this.height)
        }
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var g = this.context2D;
        g.save();
        if (this.vfj != null) {
            g.drawImage(this.vfj, this.x, this.y)
        } else {
            g.lineJoin = "round";
            g.lineCap = "round";
            g.textAlign = "center";
            if (this.backgroundColor != null) {
                dac.fip.mjy(g, this.x, this.y, this.width, this.height, this.oca, this.backgroundColor)
            }
            if (this.wqt != null) {
                g.drawImage(this.wqt, this.x + this.wgv.x, this.y + this.wgv.y)
            }
            if (this.exd != null) {
                g.drawImage(this.exd, this.x + this.eih.x, this.y + this.eih.y);
                g.drawImage(this.wqc, 0, (this.wqc.height / 5) * this.ztp, this.wqc.width, this.wqc.height / 5, this.x + this.ipx.x, this.y + this.ipx.y, this.wqc.width, this.wqc.height / 5)
            }
            dac.fip.mxc(g, this.zrt, this.rmc, this.x + this.vsl.x, this.y + this.vsl.y, this.vsl.width, this.vsl.height, this.font, this.zhg, this.akl);
            if (this.fny === true) {
                dac.fip.mxc(g, "WIN", "red", this.x + this.zyn.x, this.y + this.zyn.y, this.zyn.width, this.zyn.height, this.font, this.sks, this.akl, "yellow", this.wsm)
            }
        }
        g.restore()
    }
}
ulc.prototype = new ebm;

function nej() {
    this.gma = [];
    this.iuc = new Image();
    this.prl = 2;
    this.sov = function (a) {
        try {
            this.prl = a.bun
        } catch (b) {
            console.error(b)
        }
    };
    this.ner = function (b) {
        for (var a = 0; a < b.length; a++) {
            this.gma[a] = b[a] & 3
        }
    };
    this.xod = function () {
        if (this.gma[0] === 4) {
            return
        }
        for (var a = this.gma.length - 1; a > 0; a--) {
            this.gma[a] = this.gma[a - 1]
        }
        this.gma[0] = 4
    };
    this.xxy = function (a) {
        this.iuc = a
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.gma.length; b++) {
            a.drawImage(this.iuc, 0, this.iuc.height * this.gma[b] / 5, this.iuc.width, this.iuc.height / 5, this.x + (b * (this.iuc.width + this.prl)), this.y, this.iuc.width, this.iuc.height / 5)
        }
        a.restore()
    }
}
nej.prototype = new ebm;

function usy() {
    var a = this;
    this.fca = 0;
    this.mzy = 0;
    this.xxy = function (b) {
        this.via = b;
        this.fca = Math.round(this.via.height / 2);
        this.mzy = Math.round(this.width / 2)
    };
    this.aga = function () {
        a.zjm = false
    };
    this.zsm = function () {
        a.dhu = false;
        if (a.nnj()) {
            a.parent.pla(a.x, a.y, a.width, a.height)
        }
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var b = this.context2D;
        b.save;
        if (this.dhu) {
            b.drawImage(this.via, 0, this.fca, this.via.width, this.fca, this.x, this.y, this.width, this.height)
        } else {
            b.drawImage(this.via, 0, 0, this.via.width, this.fca, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
usy.prototype = new nos;

function phu() {
    var a = this;
    var c = 1;
    var g = 2;
    var d = 3;
    var f = 4;
    var e = 6;
    var b = 5;
    this.via = null;
    this.myd = null;
    this.wrf = null;
    this.jjy = null;
    this.oui = null;
    this.yyc = null;
    this.avm = -1;
    this.azm = 0;
    this.mxk = false;
    this.sfa = false;
    this.myz = false;
    this.mlb = 10;
    this.mce = 0;
    this.cyo = 0;
    this.ttj = 0;
    this.eiq = 0;
    this.xxo = 0;
    this.ece = false;
    this.awq = 0;
    this.vyi = 0;
    this.zky = function (j, l, k) {
        phu.prototype.zky.call(this, j, l, k);
        this.bbn()
    };
    this.ixf = function (j) {
        try {
            this.udb(j);
            this.qat(j);
            this.ufa(j);
            this.qpq(j);
            this.sve(j);
            this.yyc = j.ien
        } catch (k) {
            console.error(k)
        }
    };
    this.sov = function (n) {
        try {
            var s = this.myd.xtb("cbuttons"),
                m = this.myd.xtb("displays"),
                r = this.myd.znq("idd"),
                t = this.myd.znq("timed"),
                j = this.myd.znq("info"),
                q = this.myd.znq("history"),
                k = this.myd.znq("card");
            for (var l = 0, o = s.length; l < o; l++) {
                s[l].sov(n.gsh)
            }
            for (var l = 0, o = m.length; l < o; l++) {
                m[l].sov(n.display)
            }
            if (r) {
                r.sov(n.xoz);
                r.cqz(n.tqm)
            }
            if (t) {
                t.sov(n.xoz);
                t.cqz(n.fyf)
            }
            if (j) {
                j.sov(n.uck);
                j.cqz(n.uck.eqf)
            }
            if (q) {
                q.sov(n.zmo);
                q.cqz(n.zmo.eqf)
            }
            if (k) {
                k.sov(n.dam);
                k.cqz(n.dam.eqf)
            }
            this.myd.mpx("collect", "#cqz", [n.zju]);
            this.myd.mpx("half", "#cqz", [n.huy]);
            this.myd.mpx("hart", "#cqz", [n.dcf]);
            this.myd.mpx("diamond", "#cqz", [n.xbi]);
            this.myd.mpx("spade", "#cqz", [n.wvx]);
            this.myd.mpx("club", "#cqz", [n.ljw]);
            this.myd.mpx("red", "#cqz", [n.stm]);
            this.myd.mpx("black", "#cqz", [n.xas]);
            this.myd.mpx("creditd", "#cqz", [n.oal]);
            this.myd.mpx("wind", "#cqz", [n.luy]);
            this.myd.mpx("gambled", "#cqz", [n.hto]);
            this.myd.mpx("colorwind", "#cqz", [n.zzv]);
            this.myd.mpx("suitwind", "#cqz", [n.tmj]);
            this.yyc = n.ien
        } catch (p) {
            console.error(p)
        }
    };
    this.eda = function (j) {
        try {
            var q = this.myd.xtb("cbuttons"),
                k = this.myd.xtb("cdisplays"),
                s = this.myd.xtb("gdisplays"),
                p = this.myd.znq("idd"),
                r = this.myd.znq("timed"),
                l = this.myd.znq("info");
            this.wrf = j.backgroundColor;
            this.jjy = j.yzl;
            this.oui = j.rjw;
            for (var m = 0, n = q.length; m < n; m++) {
                q[m].eda((this.parent.wea.awz === false) ? j.fsa : (this.parent.xvh === dac.wea.rwv) ? j.msh : j.pdc)
            }
            for (var m = 0, n = k.length; m < n; m++) {
                k[m].eda(j.display)
            }
            for (var m = 0, n = s.length; m < n; m++) {
                s[m].eda(j.mcz)
            }
            if (p) {
                p.eda(j.xoz)
            }
            if (r) {
                r.eda(j.xoz)
            }
            if (l) {
                l.eda(j.uck)
            }
        } catch (o) {
            console.error(o)
        }
    };
    this.yez = function (u, t) {
        var s = this.myd.xtb("buttons"),
            o = this.myd.znq("half"),
            l = this.myd.znq("collect"),
            r = u - this.x,
            q = t - this.y;
        for (var n = 0, p = s.length; n < p; n++) {
            var k = s[n];
            if (r >= k.x && r <= k.x + k.width && q >= k.y && q <= k.y + k.height && k.nnj() === true && k.yij() === true && k.ijp() === false) {
                if (k == o || k == l) {
                    this.parent.wrr.ulw("btn");
                    this.parent.wrr.dls("btn");
                    k.wcw(true, false, true)
                } else {
                    k.wcw(true, false, false)
                }
                this.pla();
                k.jvb();
                for (var m = 0; m < p; m++) {
                    s[m].bjc(true)
                }
                return true
            }
        }
        return false
    };
    this.vkf = function () {
        var m = this.myd.xtb("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.zwt() === true) {
                k.wcw(false, true);
                return true
            }
        }
        return false
    };
    this.tda = function (q) {
        var p = this.myd.xtb("buttons"),
            l = this.myd.znq("half"),
            r = this.myd.znq("collect");
        for (var o = 0, k = p.length; o < k; o++) {
            var n = p[o];
            if (n.mkn == q) {
                if (n.yij() === true && n.ijp() === false) {
                    if (n == l || n == r) {
                        this.parent.wrr.ulw("btn");
                        this.parent.wrr.dls("btn");
                        n.wcw(true, false, true)
                    } else {
                        n.wcw(true, false, false)
                    }
                    this.pla();
                    n.jvb();
                    for (var m = 0; m < k; m++) {
                        p[m].bjc(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.hkt = function () {
        var m = this.myd.xtb("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.zwt() === true) {
                k.wcw(false, true);
                return true
            }
        }
        return false
    };
    this.aii = function (l, j, k) {
        this.myd.mpx("creditd", "#pjk", [this.parent.ifb(l)]);
        this.myd.mpx("wind", "#pjk", [this.parent.ifb(j)]);
        this.myd.mpx("gambled", "#pjk", [this.parent.eik(j)]);
        this.myd.mpx("colorwind", "#pjk", [this.parent.eik(j * 2)]);
        this.myd.mpx("suitwind", "#pjk", [this.parent.eik(j * 4)]);
        if (k && k === true) {
            this.pla()
        }
    };
    this.ner = function (k, n, l) {
        var o = this.myd.znq("card"),
            m = this.myd.znq("history"),
            j = 0;
        this.vyi++;
        if (o) {
            o.vfj = null;
            if (k >= 0) {
                o.ohc(k, (this.parent.win > 0))
            }
        }
        if (m) {
            m.ner(n)
        }
        if (!this.parent.fsd) {
            if (this.nnj() && this.parent.win > 0) {
                j = (this.vyi <= 3) ? this.vyi : 3;
                this.parent.wrr.dls("gamblewin" + j);
                if (!l) {
                    setTimeout(a.dtn, 2000)
                }
            }
        }
    };
    this.dtn = function () {
        var j = a.myd.znq("history");
        a.lqe();
        if (j) {
            j.xod()
        }
        a.pla();
        a.tre();
        a.hly(true)
    };
    this.vaf = function (j) {
        if (j == c) {
            this.myd.mpx("red", "#wcw", [true, false, false])
        } else {
            if (j == g) {
                this.myd.mpx("black", "#wcw", [true, false, false])
            } else {
                if (j == d) {
                    this.myd.mpx("diamond", "#wcw", [true, false, false])
                } else {
                    if (j == f) {
                        this.myd.mpx("hart", "#wcw", [true, false, false])
                    } else {
                        if (j == e) {
                            this.myd.mpx("spade", "#wcw", [true, false, false])
                        } else {
                            if (j == b) {
                                this.myd.mpx("club", "#wcw", [true, false, false])
                            }
                        }
                    }
                }
            }
        }
    };
    this.lqe = function () {
        var l = this.myd.xtb("buttons");
        for (var k = 0, j = l.length; k < j; k++) {
            l[k].wcw(false)
        }
    };
    this.dno = function () {
        var j = this.myd.znq("card"),
            k = this.myd.znq("info");
        this.vyi = 0;
        this.azm = 0;
        if (j) {
            j.sfy(false)
        }
        if (k) {
            k.oac(true)
        }
        this.oac(true, true);
        if (k) {
            k.syz(0)
        }
    };
    this.ykw = function () {
        var j = this.myd.znq("card"),
            k = this.myd.znq("history");
        if (j) {
            j.sgv(this.parent.wrr.ark("g_hart"), this.parent.wrr.ark("g_diamond"), this.parent.wrr.ark("g_spade"), this.parent.wrr.ark("g_clubs"), this.parent.wrr.ark("g_king"), this.parent.wrr.ark("g_queen"), this.parent.wrr.ark("g_jake"), this.parent.wrr.ark("g_suit"), this.parent.wrr.ark("g_red"), this.parent.wrr.ark("g_blue"))
        }
        if (k) {
            k.xxy(this.parent.wrr.ark("g_suit"))
        }
    };
    this.fcy = function (l, j) {
        var k = this.myd.znq("info");
        if (k) {
            k.lsm(j);
            k.hdg(l, j)
        }
    };
    this.tre = function () {
        if (this.avm < 0) {
            this.mxk = true;
            this.parent.wrr.ulw("gamble1");
            this.parent.wrr.ulw("gamble2");
            this.avm = setInterval(a.jfa, 200)
        }
    };
    this.jfa = function () {
        var j = a.myd.znq("card");
        if (j) {
            j.sfy(true)
        }
        if ((a.azm % 4) == 0) {
            if (a.mxk) {
                a.parent.wrr.dls("gamble1");
                a.parent.wrr.ulw("gamble2")
            } else {
                a.parent.wrr.dls("gamble2");
                a.parent.wrr.ulw("gamble1")
            }
            a.mxk = !a.mxk
        }
        a.azm++
    };
    this.yay = function () {
        clearInterval(this.avm);
        this.avm = -1;
        this.azm = 0;
        this.parent.wrr.ulw("gamble1");
        this.parent.wrr.ulw("gamble2")
    };
    this.bbn = function () {
        this.myd = new rxh();
        this.myd.zky();
        this.myd.jqg("buttons");
        this.myd.jqg("displays");
        this.myd.jqg("cbuttons");
        this.myd.jqg("cdisplays");
        this.myd.jqg("gdisplays")
    };
    this.ufa = function (j) {
        this.myd.hio("collect", this.nfq(j.zju, (this.parent.wea.tpq === false || this.parent.wea.awz === false) ? this.parent.language.ffo : null, (this.parent.wea.tpq === false || this.parent.wea.awz === false) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_co"), this.nkt, (!this.parent.fsd) ? this.parent.bsx.axg : null, j.gsh), ["buttons", "cbuttons"]);
        this.myd.hio("half", this.nfq(j.huy, (this.parent.wea.tpq === false || this.parent.wea.awz === false) ? this.parent.language.lam : null, (this.parent.wea.tpq === false || this.parent.wea.awz === false) ? this.parent.wrr.ark("btn") : this.parent.wrr.ark("btn_ha"), this.xrg, (!this.parent.fsd) ? this.parent.bsx.alj : null, j.gsh), ["buttons", "cbuttons"]);
        this.myd.hio("hart", this.mms(j.dcf, this.parent.wrr.ark("g_hartbtn"), this.hmw, (!this.parent.fsd) ? this.parent.bsx.vfv : null), ["buttons"]);
        this.myd.hio("diamond", this.mms(j.xbi, this.parent.wrr.ark("g_diamondbtn"), this.zcs, (!this.parent.fsd) ? this.parent.bsx.vne : null), ["buttons"]);
        this.myd.hio("spade", this.mms(j.wvx, this.parent.wrr.ark("g_spadebtn"), this.xhj, (!this.parent.fsd) ? this.parent.bsx.nik : null), ["buttons"]);
        this.myd.hio("club", this.mms(j.ljw, this.parent.wrr.ark("g_clubbtn"), this.spf, (!this.parent.fsd) ? this.parent.bsx.vtg : null), ["buttons"]);
        this.myd.hio("red", this.mms(j.stm, this.parent.wrr.ark("g_redbtn"), this.wln, (!this.parent.fsd) ? this.parent.bsx.ptk : null), ["buttons"]);
        this.myd.hio("black", this.mms(j.xas, this.parent.wrr.ark("g_blackbtn"), this.jbr, (!this.parent.fsd) ? this.parent.bsx.wzh : null), ["buttons"])
    };
    this.qpq = function (k) {
        var j = null;
        if (!(this.parent.fsd && this.parent.ltg) && this.parent.style.khg.eyr === false) {
            j = this.parent.wrr.ark("display_effect")
        }
        this.myd.hio("creditd", this.rxr(k.oal, (this.parent.zam()) ? this.parent.language.fqu : this.parent.language.dzc, this.parent.ifb(this.parent.dzc), j, k.display), ["displays", "cdisplays"]);
        this.myd.hio("wind", this.rxr(k.luy, this.parent.language.win, this.parent.ifb(this.parent.win), j, k.display), ["displays", "cdisplays"]);
        this.myd.hio("gambled", this.rxr(k.hto, this.parent.language.aab, this.parent.eik(this.parent.win), null, k.display), ["displays", "gdisplays"]);
        this.myd.hio("colorwind", this.rxr(k.zzv, this.parent.language.gxd, this.parent.eik(this.parent.win * 2), null, k.display), ["displays", "gdisplays"]);
        this.myd.hio("suitwind", this.rxr(k.tmj, this.parent.language.uky, this.parent.eik(this.parent.win * 4), null, k.display), ["displays", "gdisplays"]);
        this.myd.hio("idd", this.rxr(k.tqm, null, (this.parent.zam() === true) ? this.parent.language.fqu : " " + ((this.parent.qpy > 0) ? this.parent.qpy : ""), null, k.xoz), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || dac.ewv.value49) {
            this.myd.hio("timed", this.rxr(k.fyf, null, "", null, k.xoz), ["displays"])
        }
    };
    this.sve = function (j) {
        var k = new qux();
        k.zky(j.uck.eqf, this.context2D);
        k.parent = this;
        k.sov(j.uck);
        this.myd.hio("info", k)
    };
    this.udb = function (k) {
        var j = new ulc();
        j.zky(k.dam.eqf, this.context2D);
        j.parent = this;
        j.sov(k.dam);
        this.myd.hio("card", j)
    };
    this.qat = function (j) {
        var k = new nej();
        k.zky(j.zmo.eqf, this.context2D);
        k.sov(j.zmo);
        this.myd.hio("history", k)
    };
    this.mms = function (l, n, m, k) {
        var j = new usy();
        j.zky(l, this.context2D);
        j.parent = this;
        j.jvb = m;
        j.xxy(n);
        if (k) {
            j.mkn = k.nhn
        }
        return j
    };
    this.nfq = function (m, p, o, n, k, l) {
        var j = new gmc();
        j.zky(m, this.context2D, null, o, null, p);
        j.parent = this;
        j.jvb = n;
        j.sov(l);
        if (k) {
            j.mkn = k.nhn
        }
        return j
    };
    this.rxr = function (k, o, n, m, j) {
        var l = new qxq();
        l.zky(k, this.context2D, null, o, n);
        l.parent = this;
        l.via = m;
        l.sov(j);
        return l
    };
    this.hly = function (k) {
        var m = this.myd.xtb("buttons");
        for (var l = 0, j = m.length; l < j; l++) {
            m[l].xgf(k)
        }
    };
    this.nkt = function () {
        a.yay();
        a.hly(false);
        a.parent.vjx.ffo()
    };
    this.xrg = function () {
        a.yay();
        a.hly(false);
        a.parent.vjx.lam()
    };
    this.hmw = function () {
        a.yay();
        a.hly(false);
        a.parent.vjx.jzz(f)
    };
    this.zcs = function () {
        a.yay();
        a.hly(false);
        a.parent.vjx.jzz(d)
    };
    this.spf = function () {
        a.yay();
        a.hly(false);
        a.parent.vjx.jzz(b)
    };
    this.xhj = function () {
        a.yay();
        a.hly(false);
        a.parent.vjx.jzz(e)
    };
    this.wln = function () {
        a.yay();
        a.hly(false);
        a.parent.vjx.jzz(c)
    };
    this.jbr = function () {
        a.yay();
        a.hly(false);
        a.parent.vjx.jzz(g)
    };
    this.sjp = function () {
        var j = a.myd.znq("info");
        if (j) {
            j.zfr()
        }
        setTimeout(a.orr, 10)
    };
    this.orr = function () {
        a.sfa = false;
        a.myz = (a.parent.win > a.parent.totalBet) ? true : false;
        a.mlb = 20;
        if (a.parent.win >= a.parent.totalBet * 25) {
            a.mlb = 40
        }
        a.mce = 0;
        a.cyo = a.parent.win;
        a.ttj = a.parent.dzc - a.parent.win;
        a.eiq = a.parent.win;
        a.xxo = new Date().getTime();
        a.ece = true;
        a.awq = setTimeout(a.roa, a.parent.hde)
    };
    this.roa = function () {
        var j = 0,
            k = a.parent.hde,
            l = new Date().getTime();
        if (a.eiq > 0) {
            if (!a.sfa) {
                a.parent.wrr.ulw("collect");
                a.parent.wrr.dls("collect");
                a.sfa = true
            }
            j = Math.round(a.eiq / a.mlb);
            a.eiq -= j;
            if (a.eiq < 0) {
                a.eiq = 0
            }
            a.myd.mpx("wind", "#pjk", [a.parent.ifb(a.cyo - (a.parent.win - a.eiq)), true]);
            a.myd.mpx("creditd", "#pjk", [a.parent.ifb(a.ttj + (a.parent.win - a.eiq)), true]);
            a.mce++;
            a.mlb -= 1;
            k = a.parent.hde + (a.mce * a.parent.hde - (l - a.xxo));
            a.awq = setTimeout(a.roa, k)
        } else {
            a.parent.wrr.ulw("collect");
            a.parent.wrr.dls("collectend");
            a.ece = false;
            clearTimeout(a.awq);
            setTimeout(a.parent.goo, 100)
        }
    };
    this.pla = function (r, p, s, n) {
        if (!this.nnj() || !this.parent.inc()) {
            return
        }
        var k = (r != null && p != null && s != null && n != null),
            t = this.context2D,
            q = null,
            j = this.myd.hlf(),
            m = (this.parent.wea.awz === false) ? this.parent.wrr.ark("btn_back") : (this.parent.xvh === dac.wea.rwv) ? this.parent.wrr.ark("g_right") : this.parent.wrr.ark("g_left");
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
            t.drawImage(this.via, (this.yyc.x == 0) ? this.yyc.width : 0, this.height - m.height);
            q = t.createLinearGradient(this.yyc.x, this.yyc.y, this.yyc.x + this.yyc.width, this.yyc.y);
            q.addColorStop(0.2, this.jjy);
            q.addColorStop(1, this.oui);
            t.fillStyle = q;
            t.save();
            if (this.parent.wea.awz === false) {
                if (this.parent.xvh === dac.wea.pjo) {
                    t.translate(this.yyc.width / 2, this.yyc.height / 2);
                    t.rotate(Math.PI);
                    t.translate(-this.yyc.width / 2, -this.yyc.height / 2)
                }
                t.fillRect(this.yyc.x, this.yyc.y, this.yyc.width, this.yyc.height)
            }
            t.drawImage(m, this.yyc.x, this.yyc.y, this.yyc.width, this.yyc.height);
            t.restore()
        } else {
            t.drawImage(this.via, 0, 0);
            if (this.wrf != null) {
                dac.fip.dml(t, this.yyc.x, this.yyc.y, this.yyc.width, this.yyc.height, this.wrf, 1)
            } else {
                if ((this.height - this.via.height) > 0) {
                    t.drawImage(this.via, this.yyc.x, this.yyc.y, this.yyc.width, this.via.height - this.yyc.y, this.yyc.x, this.yyc.y, this.yyc.width, this.yyc.height)
                }
            }
        }
        t.restore();
        for (var l = 0, o = j.length; l < o; l++) {
            j[l].pla()
        }
        if (this.dsp && this.lbg) {
            if (k) {
                this.dsp.drawImage(this.lbg, r, p, s, n, this.x + r, this.y + p, s, n)
            } else {
                this.dsp.drawImage(this.lbg, this.x, this.y)
            }
        }
    }
}
phu.prototype = new ebm;

function rti() {
    this.mmb = "verdana";
    this.nah = "verdana";
    this.chz = "bold italic";
    this.jvq = "white";
    this.evx = 24;
    this.jjm = 12;
    this.wuk = new xop();
    this.zyn = [];
    this.sov = function (a) {
        rti.prototype.sov.call(this, a);
        try {
            this.evx = a.pmv;
            this.jjm = a.pnq;
            this.wuk = a.wkh;
            this.zyn = a.luy
        } catch (b) {
            console.error(b)
        }
    };
    this.eda = function (a) {
        rti.prototype.eda.call(this, a);
        try {
            this.mmb = a.zfp;
            this.nah = a.jcv;
            this.chz = a.bab;
            this.jvq = a.bgw
        } catch (b) {
            console.error(b)
        }
    };
    this.pla = function () {
        if (!this.nnj()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.fillStyle = this.vab;
        if (this.bfj) {
            a.strokeStyle = this.bfj
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.bgh;
        a.font = this.tsk + " " + this.zhg + "px " + this.aym;
        a.textBaseline = "alphabetic";
        a.textAlign = "center";
        a.drawImage(this.via, 0, 0);
        for (var c in this.xpu) {
            this.mcj(this.xpu[c], this.tuj[c], this.zhg, this.aym)
        }
        if (dac.khg != null) {
            this.lce(0, this.zyn[0]);
            this.lce(1, this.zyn[1]);
            this.lce(2, this.zyn[2]);
            this.lce(4, this.zyn[3]);
            this.lce(7, this.zyn[4])
        }
        if (dac.khg.jxv && dac.ewv.value81) {
            var b = dac.khg.jxv;
            a.fillStyle = this.jvq;
            if (dac.ewv.value81.g === true) {
                this.mcj(dac.khg.ijf(dac.khg.language.zsd) + "|" + dac.khg.ijf(dac.khg.language.zmf), this.wuk, this.jjm, this.nah)
            } else {
                if (dac.ewv.value81.p === true) {
                    if (sessionStorage.sessionValue1 === dac.language.TR) {
                        b = b.substring(0, b.length - 1)
                    }
                    this.mcj(dac.khg.language.jxv.replace("XY", b) + "|" + dac.khg.ijf(dac.khg.language.zsd), this.wuk, this.jjm, this.nah)
                } else {
                    dac.fip.mxc(a, dac.khg.ijf(dac.khg.language.zsd), this.jvq, this.wuk.x, this.wuk.y, this.wuk.width, this.wuk.height, this.nah, this.jjm, this.chz)
                }
            }
        } else {
            dac.fip.mxc(a, dac.khg.ijf(dac.khg.language.zsd), this.jvq, this.wuk.x, this.wuk.y, this.wuk.width, this.wuk.height, this.nah, this.jjm, this.chz)
        }
        a.restore();
        if (this.dsp && this.lbg) {
            this.dsp.drawImage(this.lbg, this.x, this.y)
        }
    };
    this.lce = function (e, d) {
        var a = this.context2D,
            c = this.evx,
            f = 0,
            j = 0,
            g = 0;
        a.save();
        a.fillStyle = this.vab;
        if (this.bfj) {
            a.strokeStyle = this.bfj
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.font = this.tsk + " " + c + "px " + this.mmb;
        a.textBaseline = "bottom";
        a.textAlign = "center";
        a.lineWidth = this.bgh;
        for (var b in dac.khg.szl[e]) {
            if (dac.khg.szl[e][b] > 0) {
                f++
            }
        }
        g = d.height / f;
        for (var b = dac.khg.szl[e].length - 1; b >= 0; b--) {
            if (dac.khg.szl[e][b] > 0) {
                if (e != dac.khg.hca) {
                    a.fillText(dac.khg.eik(dac.khg.szl[e][b] * dac.khg.uqc), d.x + d.width / 2, d.y + g * j + c)
                } else {
                    a.fillText(dac.khg.eik(dac.khg.szl[e][b] * dac.khg.totalBet), d.x + d.width / 2, d.y + g * j + c)
                }
                if (this.bfj) {
                    if (e != dac.khg.hca) {
                        a.strokeText(dac.khg.eik(dac.khg.szl[e][b] * dac.khg.uqc), d.x + d.width / 2, d.y + g * j + c)
                    } else {
                        a.strokeText(dac.khg.eik(dac.khg.szl[e][b] * dac.khg.totalBet), d.x + d.width / 2, d.y + g * j + c)
                    }
                }
                j++
            }
        }
        a.restore()
    }
}
rti.prototype = new pbk;

function vct() {
    this.naq = "MerryFruits";
    this.hbz = "Merry Fruits";
    this.cvs = dac.ewv.value30 + "/merryfruits/images/";
    this.oeq = dac.ewv.value30 + "/merryfruits/sounds/";
    this.wkz = 8;
    this.dyy = null;
    this.pou = null;
    this.uhd = null;
    this.ajd = null;
    this.rpc = function () {
        this.r1 = [];
        this.r2 = [];
        this.r3 = [];
        this.r4 = [];
        this.r5 = [];
        this.dil = [10, 4, 2, 6, 8, 1, 9, 7, 3, 5, 12, 18, 20, 14, 16, 17, 15, 11, 19, 13];
        this.qrx = 1;
        this.mdm = 10;
        this.iou = 11;
        this.iao = 20;
        this.imw = 10;
        this.szl = [
            [0, 0, 50, 500, 1000],
            [0, 0, 20, 80, 400],
            [0, 0, 20, 40, 200],
            [0, 0, 20, 40, 200],
            [0, 0, 10, 20, 100],
            [0, 0, 10, 20, 100],
            [0, 0, 10, 20, 100],
            [0, 0, 5, 20, 500]
        ];
        this.ljd = [
            [2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1],
            [3, 3, 3, 3, 3],
            [1, 2, 3, 2, 1],
            [3, 2, 1, 2, 3],
            [1, 1, 2, 1, 1],
            [3, 3, 2, 3, 3],
            [2, 1, 1, 1, 2],
            [2, 3, 3, 3, 2],
            [1, 2, 2, 2, 1],
            [3, 2, 2, 2, 3],
            [1, 2, 1, 2, 1],
            [3, 2, 3, 2, 3],
            [2, 1, 2, 1, 2],
            [2, 3, 2, 3, 2],
            [2, 2, 1, 2, 2],
            [2, 2, 3, 2, 2],
            [1, 3, 1, 3, 1],
            [3, 1, 3, 1, 3],
            [2, 1, 3, 1, 2]
        ];
        
        gameController=this;
        this.pyb = [3, 3, 3, 3, 3, 3, 3, 3];
        this.hca = 7;
        this.hum = 0;
        this.rzy = 8;
        this.dlv = false;
        this.omv = true;
        this.mtw = true;
        this.onf = true;
        this.cxn = true;
        this.cwy = 2;
        this.agm("1_1_62");
        if (dac.ewv.mfr != undefined) {
            if (dac.ewv.mfr.value1) {
                this.dmn = dac.ewv.mfr.value1;
                this.okh = this.dmn
            }
            if (dac.ewv.mfr.value2) {
                this.imw = dac.ewv.mfr.value2
            }
        }
    };
    this.lki = function () {
        vct.prototype.lki.call(this);
        this.yfc[0] = new nmg().zky(this.wrr.ark("anim0"), this.wea.crs.w1, this.wea.crs.h1, 21);
        this.yfc[1] = new nmg().zky(this.wrr.ark("anim1"), this.wea.crs.w1, this.wea.crs.h1, 21);
        this.yfc[2] = new nmg().zky(this.wrr.ark("anim2"), this.wea.crs.w1, this.wea.crs.h1, 21);
        this.yfc[3] = new nmg().zky(this.wrr.ark("anim3"), this.wea.crs.w1, this.wea.crs.h1, 21);
        this.yfc[4] = new nmg().zky(this.wrr.ark("anim4"), this.wea.crs.w1, this.wea.crs.h1, 21);
        this.yfc[5] = new nmg().zky(this.wrr.ark("anim5"), this.wea.crs.w1, this.wea.crs.h1, 21);
        this.yfc[6] = new nmg().zky(this.wrr.ark("anim6"), this.wea.crs.w1, this.wea.crs.h1, 21);
        this.yfc[7] = new nmg().zky(this.wrr.ark("anim7"), this.wea.crs.w1, this.wea.crs.h1, 21)
    };
    this.llc = function () {
        this.owf();
        this.rje();
        this.cuv();
        this.ifo();
        vct.prototype.llc.call(this)
    };
    this.owf = function () {
        this.dyy = new rti();
        this.dyy.zky(this.wea.hwg.duv.eqf, null, this.jqa.context2D, this.wrr.ark("h_paytable"));
        this.dyy.parent = this.jqa;
        this.dyy.sov(this.wea.hwg.duv);
        this.dyy.eda(this.style.hwg.duv);
        if (!this.hed.znq("tops")) {
            this.jqa.ixl(this.dyy)
        }
    };
    this.ifo = function () {
        var a = this.hed.znq("tops");
        if (a) {
            this.pou = new rti();
            this.pou.zky(this.wea.top.duv.eqf, null, a.context2D, this.wrr.ark("h_paytable_top"));
            this.pou.parent = a;
            this.pou.sov(this.wea.top.duv);
            this.pou.eda(this.style.hwg.duv);
            a.ixl(this.pou)
        }
    };
    this.rje = function () {
        this.uhd = new pbk();
        this.uhd.zky(this.wea.hwg.win.eqf, null, this.jqa.context2D, this.wrr.ark("h_winlines"));
        this.uhd.parent = this.jqa;
        this.uhd.xpu[0] = this.language.aux;
        this.uhd.sov(this.wea.hwg.win);
        this.uhd.eda(this.style.hwg.esb);
        this.jqa.ixl(this.uhd)
    };
    this.cuv = function () {
        this.ajd = new pbk();
        this.ajd.zky(this.wea.hwg.zzt.eqf, null, this.jqa.context2D, this.wrr.ark("h_symbols"));
        this.ajd.parent = this.jqa;
        this.ajd.xpu[0] = this.language.emg;
        this.ajd.xpu[1] = this.language.cbh;
        this.ajd.sov(this.wea.hwg.zzt);
        this.ajd.eda(this.style.hwg.esb);
        this.jqa.ixl(this.ajd)
    };
    this.xrr = function () {
        if (this.dyy) {
            this.dyy.cqz(this.wea.hwg.duv.eqf);
            this.dyy.sov(this.wea.hwg.duv)
        }
        if (this.uhd) {
            this.uhd.cqz(this.wea.hwg.win.eqf);
            this.uhd.sov(this.wea.hwg.win)
        }
        if (this.ajd) {
            this.ajd.cqz(this.wea.hwg.zzt.eqf);
            this.ajd.sov(this.wea.hwg.zzt)
        }
    };
    this.ufz = function () {
        if (this.uhd != null) {
            this.uhd.xpu[0] = this.language.aux
        }
        if (this.ajd != null) {
            this.ajd.xpu[0] = this.language.emg;
            this.ajd.xpu[1] = this.language.cbh
        }
    };
    this.rkk = function () {
        var a = this.cvs + this.wea.type + "/";
        this.wrr.fow("m_back", a + "main.jpg");
        this.wrr.fow("m_win", a + "winPanel.png");
        this.wrr.fow("g_back", a + "gamble.jpg");
        this.wrr.fow("h_paytable", a + "wthelp.jpg");
        this.wrr.fow("h_symbols", a + "symbol_help.jpg");
        this.wrr.fow("h_paytable_top", a + "wthelptop.jpg");
        if (this.ksw() === true) {
            this.wrr.fow("h_winlines", a + "mobile_wlhelp.jpg");
            this.wrr.zqf(a, "mobile_panels.json")
        } else {
            this.wrr.fow("h_winlines", a + "wlhelp.jpg");
            if (this.fsd === true) {
                this.wrr.fow("m_g_back", a + "gamble.jpg");
                this.wrr.fow("m_m_back", a + "main.jpg");
                this.wrr.fow("m_m_win", a + "winPanel.png")
            }
        }
    };
    this.use = function () {
        var a = this.cvs + this.wea.type + "/";
        this.wrr.fow("reelfront", a + "glass.png")
    };
    this.atp = function (b) {
        var e = 0,
            f = 0,
            a = -1;
        this.wlt = 0;
        this.djt = 0;
        this.djt = b[e];
        if (this.djt == this.hca) {
            return 0
        }
        while (this.djt == this.hum && e < 4) {
            if (a < 0) {
                a = e
            }
            e++;
            this.wlt += 1;
            f++;
            this.djt = b[e]
        }
        if (this.djt != this.hca) {
            for (var d = e; d < 5; d++) {
                if (this.djt == b[d] || b[d] == this.hum) {
                    if (a < 0) {
                        a = e
                    }
                    this.wlt += 1
                } else {
                    break
                }
            }
        } else {
            if (f > 0) {
                this.djt = this.hum
            }
        }
        if (f > 0) {
            if (this.szl[this.hum][f - 1] > this.szl[this.djt][this.wlt - 1]) {
                this.djt = this.hum;
                return f
            }
        }
        if (this.wlt == 0) {
            return 0
        }
        var c = this.szl[this.djt][this.wlt - 1];
        if (c > 0) {
            return this.wlt
        }
        return 0
    };
    this.qzd = function (b) {
        var a = Math.round(this.uqc * 2);
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
    this.kuy = function (a) {
        if (a == dac.language.EN || a == dac.language.US) {
            return new qze()
        } else {
            if (a == dac.language.ES || a == dac.language.CO || a == dac.language.MX || a == dac.language.CL || a == dac.language.VE) {
                return new rev()
            } else {
                if (a == dac.language.DE || a == dac.language.AT) {
                    return new rnw()
                } else {
                    if (a == dac.language.PT || a == dac.language.BR) {
                        return new wjl()
                    } else {
                        if (a == dac.language.RU) {
                            return new byd()
                        } else {
                            if (a == dac.language.EE) {
                                return new otz()
                            } else {
                                if (a == dac.language.TR) {
                                    return new kek()
                                } else {
                                    if (a == dac.language.CZ) {
                                        return new diz()
                                    } else {
                                        if (a == dac.language.GR) {
                                            return new yqy()
                                        } else {
                                            if (a == dac.language.BG) {
                                                return new kbw()
                                            } else {
                                                if (a == dac.language.GE) {
                                                    return new vop()
                                                } else {
                                                    if (a == dac.language.HU) {
                                                        return new csr()
                                                    } else {
                                                        if (a == dac.language.RO) {
                                                            return new are()
                                                        } else {
                                                            if (a == dac.language.FR) {
                                                                return new wvy()
                                                            } else {
                                                                if (a == dac.language.HR) {
                                                                    return new rkq()
                                                                } else {
                                                                    if (a == dac.language.IT) {
                                                                        return new dfw()
                                                                    } else {
                                                                        if (a == dac.language.SE) {
                                                                            return new wxj()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.ymu = function (a) {
        this.xvh = a;
        if (a == dac.wea.dsl) {
            return new bfp()
        } else {
            if (a == dac.wea.ddr) {
                return new qib()
            } else {
                if (a == dac.wea.awx) {
                    return new omm()
                } else {
                    if (a == dac.wea.xwb) {
                        return new rot()
                    } else {
                        if (a == dac.wea.pxi) {
                            return new wnv()
                        } else {
                            if (a == dac.wea.wzw) {
                                return new nww()
                            } else {
                                if (a == dac.wea.sln) {
                                    return new vwc()
                                } else {
                                    if (a == dac.wea.xft) {
                                        return new hkz()
                                    } else {
                                        if (a == dac.wea.tsn) {
                                            return new pto()
                                        } else {
                                            if (a == dac.wea.pjo) {
                                                return new hkh()
                                            } else {
                                                if (a == dac.wea.rwv) {
                                                    return new sog()
                                                }
                                            }
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
    this.lec = function () {
        this.style = new exh()
    }
}
vct.prototype = new qeg;

function qyq() {
    dac.phz = -1;
    dac.khg = new vct();
    dac.khg.zky({
        wea: dac.ewv.value14
    });
    window.focus()
}

function xec() {
    if (dac.khg != null) {
        if (dac.phz >= 0) {
            clearTimeout(dac.phz)
        }
        dac.phz = setTimeout(dac.khg.bjt, 200)
    }
}

function ypb() {
    if (dac.khg != null) {
        if (dac.phz >= 0) {
            clearTimeout(dac.phz)
        }
        dac.phz = setTimeout(dac.khg.ocp, 200)
    }
}
if (dac.fip.jic()) {
    window.onorientationchange = ypb;
    window.onresize = ypb
} else {
    window.onresize = xec
}
if (dac.ewv.value9) {
    window.onload = qyq
} else {
    qyq()
};
