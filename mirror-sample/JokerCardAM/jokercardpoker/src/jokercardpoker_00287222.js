
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"JokerCardAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
	
	
		gameWS.onmessage=function(k){
	
		 /*   var tmpMess=k.data.split("#");

			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.gmy.odj!=undefined){
			
			if(gameController.ehm!=parseInt(tmpMess[1])){
				
			gameController.ehm=parseInt(tmpMess[1]);	
			gameController.mdr=parseInt(tmpMess[1]);	
			gameController.gmy.odj.iiz("creditd", "#rkw", [gameController.bug(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	*/
			
		}
		
		/*--------------*/

/////////////////

function ojt() {
    this.hyp = "Info";
    this.nco = "DEPOSIT";
    this.audio = "AUDIO";
    this.xio = "TIP";
    this.ukl = "TURBO";
    this.iyc = "STATISTIC";
    this.dac = "HISTORY";
    this.hjy = "SHORTCUTS";
    this.dqz = "HELP";
    this.gdk = "PAYTABLE";
    this.language = "LANGUAGE";
    this.cgu = ">>";
    this.mwk = "<<";
    this.pxh = "Fullscreen is not supported!"
}

function ouc() {
    this.jkb = "MINIMUM BET IS";
    this.teh = "MAX BET";
    this.npo = "MIN.BET";
    this.uvy = "MAX.BET";
    this.ssy = "BET";
    this.start = "START";
    this.dqz = "HELP";
    this.gdk = "PAYTABLE";
    this.qxy = "MENU";
    this.ujz = "MORE|GAMES";
    this.ppf = "STOP";
    this.eqm = "CREDIT";
    this.yrx = "GAME OVER";
    this.icz = "WINNER!";
    this.acj = "GOOD LUCK!";
    this.win = "WIN";
    this.blm = "LAST WIN";
    this.ucp = "COLLECT";
    this.pse = "COLLECT";
    this.ytt = "GAMBLE";
    this.ldn = "AUTO|START";
    this.xkg = "HALF|GAMBLE";
    this.qhz = "EXIT";
    this.zuy = "START GAME";
    this.uuu = "CHOOSE BET";
    this.qyd = "HALF";
    this.ret = "RETURN|TO GAME";
    this.cdp = "Total Win";
    this.ydq = "Warning";
    this.pre = "TOTAL";
    this.hhn = "PLEASE WAIT ...";
    this.tpf = "More Games";
    this.ukl = "SPEED";
    this.vov = "Malfunction voids all pays and plays.";
    this.uzi = "CONTINUE";
    this.mtf = "AUTOSTART";
    this.dbe = "PAYTABLE";
    this.qwj = "GAMBLE";
    this.left = "LEFT";
    this.pfn = "RIGHT";
    this.ok = "OK";
    this.bxh = "CANCEL";
    this.opj = "Gamble";
    this.fyc = "Half";
    this.gnd = "GAME RULES";
    this.xma = "GAME RULES";
    this.ied = "Bonus!";
    this.ukv = "BONUS";
    this.awp = "PRESS ANY KEY TO CONTINUE";
    this.ggv = "NOT ENOUGH CREDIT!";
    this.iwz = "wins";
    this.swa = "V A L U E";
    this.of = "OF";
    this.pzz = "TOUCH THE SCREEN TO CONTINUE";
    this.awz = "LOADING ...";
    this.bnj = "LOADING HISTORY ...";
    this.dco = "Communication Error";
    this.mpl = "You have reached one of the limits!";
    this.aoy = "You have reached the maximum amount of free games!";
    this.dyg = "Game will be closed";
    this.ozz = "Game will be restarted";
    this.min = "WON";
    this.error = "ERROR";
    this.trm = "FREEPLAY";
    this.tgi = "AUTO";
    this.ybc = "GAME ID";
    this.xvy = "Playing Time";
    this.zcf = "last";
    this.umt = "games";
    this.nco = "DEPOSIT";
    this.audio = "AUDIO";
    this.itd = "MUSIC";
    this.aqq = "FULLSCREEN";
    this.pvv = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.llt = "Do not show again";
    this.chy = "Sounds can not be loaded!";
    this.cxv = "Resources missing!";
    this.ugr = "Play without sound?";
    this.qtj = "SETTINGS";
    this.kpi = "Please turn your device!";
    this.hyp = "INFO";
    this.mrl = "Please disable PRIVATE MODE in your browser to play the game.";
    this.frx = "This game is optimized for Google Chrome.";
    this.zgr = "Please use the current version of";
    this.efe = "Unfortunately this browser is not fully supported.";
    this.exe = "This game can not be started in freeplay mode!";
    this.jpp = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.gxl = "Adjust the game interface to your needs!";
    this.leu = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.itr = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.fwe = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.iyc = "Statistic";
    this.ubl = "Total Games";
    this.qkw = "Total Bets";
    this.nji = "Total Wins";
    this.cyc = "Total Play Time";
    this.mms = "I have read this message";
    this.key = "EXIT|GAME";
    this.dac = "History";
    this.hum = "No games played.";
    this.state = "STATE";
    this.qjy = "Main Game";
    this.hmr = "Auto Collected";
    this.uva = "Collected";
    this.hnb = "Bonusspins";
    this.ldz = "Respin";
    this.sps = "Bonus";
    this.ftf = "First Deal";
    this.xrz = "Second Deal";
    this.xin = "Third Deal";
    this.lbj = "AUTOSTART SETTINGS";
    this.qcc = "Amount of games:";
    this.xzr = "Stop autostart";
    this.qnb = "Credit lower than:";
    this.gfu = "Credit higher than:";
    this.jbp = "Win higher than:";
    this.dlp = "The autostart will be stopped at the beginning of the bonus.";
    this.wcu = "Share on Facebook";
    this.fev = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.crf = "Reality Check";
    this.shp = "You have requested a Reality Check.";
    this.wlz = "Press HISTORY to view your game history.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
ouc.prototype = new ojt;

function dep() {
    this.jkb = "МИНИМАЛЬНАЯ СТАВКА -";
    this.teh = "МАКС.|СТАВКА";
    this.npo = "МИН.СТAВКА";
    this.uvy = "МАКС.СТAВКА";
    this.ssy = "СТАВКА";
    this.start = "СТАРТ";
    this.dqz = "ПОМОЩЬ";
    this.gdk = "ТАБЛИЦА ВЫПЛАТ";
    this.qxy = "МЕНЮ";
    this.ujz = "ДРУГИЕ|ИГРЫ";
    this.ppf = "СТОП";
    this.eqm = "КРЕДИТ";
    this.yrx = "КОНЕЦ ИГРЫ";
    this.icz = "ПОБЕДИТЕЛЬ!";
    this.acj = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.blm = "ПОСЛЕД. ВЫИГРЫШ";
    this.iwz = "выйгрыши";
    this.ucp = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.pse = "ЗАБРАТЬ ВЫИГРЫШ";
    this.ytt = "ИГРА|НА|РИСК";
    this.ldn = "АВТО|ИГРА";
    this.xkg = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.qhz = "ВЫХОД";
    this.zuy = "НАЖМИТЕ СТАРТ";
    this.uuu = "ВЫБЕРИТЕ СТАВКУ";
    this.qyd = "ВЗЯТЬ|1/2";
    this.awp = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.pzz = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.mhs = "Множитель для Бонуса";
    this.qao = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.cdp = "ОБЩИЙ ВЫИГРЫШ";
    this.awz = "Загрузка ...";
    this.bnj = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.ggv = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.mpl = "Достигнут один из лимитов!";
    this.ydq = "Внимание";
    this.dco = "ошибка обмена данных";
    this.aoy = "Вы получили максимальное количество свободных игр!";
    this.dyg = "Игра заканчивается";
    this.ozz = "Игра начинается заново";
    this.ied = "Бонус!";
    this.ukv = "БОНУС";
    this.min = "ВЫИГРЫШ";
    this.pre = "ВСЕГО";
    this.hhn = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.trm = "FREEPLAY";
    this.tpf = "ВЫБОР ИГРЫ";
    this.ybc = "GAME ID";
    this.xvy = "Playing Time";
    this.zcf = "последняя";
    this.umt = "игры";
    this.nco = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.itd = "МУЗЫКА";
    this.ukl = "СКОРОСТЬ";
    this.aqq = "ПОЛНОЭКРАННЫЙ";
    this.pvv = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.vov = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.uzi = "ПРОДОЛЖИТЬ";
    this.llt = "Больше не показывать";
    this.mtf = "АВТОИГРА";
    this.dbe = "ТАБЛИЦА ВЫПЛАТ";
    this.qwj = "ИГРА НА РИСК";
    this.chy = "Звук не загружается!";
    this.cxv = "Ресурсы отсутствуют!";
    this.ugr = "Играть без звука?";
    this.qtj = "НАСТРОЙКА";
    this.kpi = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.pfn = "ПРАВО";
    this.tgi = "АВТО";
    this.swa = "V A L U E";
    this.hyp = "ИНФОРМАЦИЯ";
    this.mrl = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.frx = "Настоящая игра оптимизирована для Google Chrome.";
    this.zgr = "Используйте, пожалуйста, актуальную версию";
    this.efe = "К сожалению нет полной поддержки браузера.";
    this.exe = "Запуск этой игры в режиме свободных игр невозможен!";
    this.jpp = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.gxl = "Приспособь интерфейс к своим потребностям!";
    this.fev = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.crf = "Проверку реальности";
    this.shp = "Вы запросили проверку реальности.";
    this.wlz = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.gnd = "ПРАВИЛА ИГРЫ";
    this.xma = "ПРАВИЛА ИГРЫ";
    this.leu = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.itr = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.fwe = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.iyc = "Статус";
    this.ubl = "количество игр";
    this.qkw = "вся ставка";
    this.nji = "общий выигрыш";
    this.cyc = "общее время игры";
    this.mms = "Я сообщение прочитал.";
    this.key = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.dac = "История";
    this.hum = "нет истории.";
    this.state = "STATE";
    this.qjy = "Main Game";
    this.hmr = "Auto Collected";
    this.uva = "Collected";
    this.hnb = "Bonusspins";
    this.opj = "Gamble";
    this.fyc = "Half";
    this.ldz = "Respin";
    this.sps = "Bonus";
    this.ftf = "First Deal";
    this.xrz = "Second Deal";
    this.xin = "Third Deal";
    this.bxh = "ИЗМЕНИТЬ";
    this.lbj = "НАСТРОЙКА АВТОСТАРТА";
    this.qcc = "Количество игр:";
    this.xzr = "Автостарт остановить";
    this.qnb = "Кредит ниже, чем:";
    this.gfu = "Кредит выше, чем:";
    this.jbp = "Выигрыш выше, чем:";
    this.dlp = "Автостарт прерывается, если начинается бонусная игра.";
    this.wcu = "Поделись в фейсбук";
    this.zlh = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
dep.prototype = new ojt;

function qpg() {
    this.jkb = "APUESTA MINIMA ES";
    this.teh = "APUESTA|MAXIMA";
    this.npo = "APUESTA MIN.";
    this.uvy = "APUESTA MAX.";
    this.ssy = "APUESTA";
    this.start = "START";
    this.dqz = "AYUDA";
    this.gdk = "PLAN DE|GANANCIAS";
    this.qxy = "MENU";
    this.ujz = "MAS|JUEGOS";
    this.ppf = "PARADA";
    this.eqm = "CREDITOS";
    this.yrx = "FIN DEL JUEGO";
    this.icz = "¡GANADOR!";
    this.acj = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.blm = "ULTIMOS PREMIO";
    this.iwz = "gana";
    this.ucp = "COBRAR";
    this.pse = "COBRAR";
    this.ytt = "RIESGO";
    this.ldn = "AUTO|START";
    this.xkg = "MEDIA|APUESTA";
    this.of = "DE";
    this.qhz = "SALIR";
    this.zuy = "¡PULSE START!";
    this.uuu = "ELIJA SU APUESTA";
    this.qyd = "MITAD";
    this.awp = "PULSE UNA TECLA PARA CONTINUAR";
    this.pzz = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.cdp = "Premio total";
    this.awz = "CARGANDO ...";
    this.bnj = "CARGANDO HISTORIAL ...";
    this.ggv = "No hay bastante CREDITO";
    this.mpl = "¡Ha alcanzado uno de los limites!";
    this.ydq = "Advertencia";
    this.dco = "Error de comunicación";
    this.aoy = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.dyg = "El juego se cerrará";
    this.ozz = "El juego se reiniciará";
    this.ied = "¡BONUS!";
    this.ukv = "BONUS";
    this.min = "GANADO";
    this.pre = "TOTAL";
    this.jpy = "TURBO SI";
    this.kjn = "TURBO NO";
    this.hhn = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.trm = "FREEPLAY";
    this.tpf = "MAS JUEGOS";
    this.ybc = "ID DE JUEGO";
    this.xvy = "Playing Time";
    this.zcf = "ultimos";
    this.umt = "juegos";
    this.nco = "DEPÓSITO";
    this.audio = "AUDIO";
    this.itd = "MÚSICA";
    this.ukl = "VELOCIDAD";
    this.aqq = "PANTALLA COMPLETA";
    this.pvv = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.vov = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.uzi = "ADELANTE";
    this.llt = "No mostrar de nuevo";
    this.mtf = "AUTOSTART";
    this.dbe = "PLAN DE GANANCIAS";
    this.qwj = "RIESGO";
    this.chy = "No se pueden cargar los sonidos.";
    this.cxv = "Faltan recursos.";
    this.ugr = "¿Jugar sin sonido?";
    this.qtj = "AJUSTES";
    this.swa = "V A L U E";
    this.kpi = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.pfn = "DERECHA";
    this.tgi = "AUTOMÁTICO";
    this.hyp = "INFORMACIÓN";
    this.mrl = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.frx = "Este juego está optimizado para Google Chrome.";
    this.zgr = "Use la versión actual de";
    this.efe = "Desafortunadamente, este explorador no es compatible.";
    this.exe = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.jpp = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.gxl = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.fev = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.crf = "Reality Check";
    this.shp = "Has solicitado un Reality Check.";
    this.wlz = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.gnd = "REGLAS DEL JUEGO";
    this.xma = "REGLAS|DEL JUEGO";
    this.leu = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.itr = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.fwe = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.iyc = "ESTADO";
    this.ubl = "Número de juegos";
    this.qkw = "Apuesta total";
    this.nji = "Ganancia total";
    this.cyc = "Tiempo total de juego";
    this.mms = "He leído el mensaje.";
    this.key = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.dac = "HISTORIAL";
    this.hum = "Aún no hay juegos.";
    this.state = "Estado";
    this.qjy = "Juego principal";
    this.hmr = "Ganancia automática";
    this.uva = "Ganancia";
    this.hnb = "BONUSSPINS";
    this.opj = "Apuesta";
    this.fyc = "Mitad";
    this.ldz = "Respin";
    this.sps = "Bonus";
    this.ftf = "Primera mano";
    this.xrz = "Segunda mano";
    this.xin = "Tercera mano";
    this.bxh = "CANCELAR";
    this.lbj = "CONFIGURACIONES DE AUTOSTART";
    this.qcc = "Cantidad de juegos:";
    this.xzr = "Detener Autostart";
    this.qnb = "Crédito menor que:";
    this.gfu = "Crédito mayor que:";
    this.jbp = "Ganancia mayor que:";
    this.dlp = "El Autostart se detendrá al principio del bonus.";
    this.wcu = "Compartir en Facebook";
    this.zlh = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
qpg.prototype = new ojt;

function vkb() {
    this.jkb = "MINIMALER EINSATZ IST";
    this.teh = "MAX. EINSATZ";
    this.npo = "MIN. EINSATZ";
    this.uvy = "MAX. EINSATZ";
    this.ssy = "EINSATZ";
    this.start = "START";
    this.dqz = "HILFE";
    this.gdk = "GEWINNPLAN";
    this.qxy = "MENÜ";
    this.ujz = "MEHR|SPIELE";
    this.eqm = "GUTHABEN";
    this.yrx = "SPIEL ENDE";
    this.icz = "GEWINNER!";
    this.acj = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.blm = "LETZTER GEWINN";
    this.iwz = "gewinnt";
    this.ucp = "NEHMEN";
    this.pse = "NEHMEN";
    this.ytt = "RISIKO";
    this.ldn = "AUTO|START";
    this.xkg = "HALF|GAMBLE";
    this.ppf = "STOP";
    this.of = "VON";
    this.qhz = "EXIT";
    this.zuy = "START DRÜCKEN";
    this.uuu = "EINSATZ WÄHLEN";
    this.qyd = "TEILEN";
    this.awp = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.pzz = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.cdp = "Gesamt Gewinn";
    this.awz = "LÄDT ...";
    this.bnj = "LÄDT HISTORIE ...";
    this.ggv = "NICHT GENUG GUTHABEN!";
    this.ydq = "Achtung";
    this.dco = "Kommunikationsfehler";
    this.mpl = "Sie haben eines der Limits erreicht!";
    this.aoy = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.dyg = "Das Spiel wird beendet";
    this.ozz = "Das Spiel wird neu gestartet";
    this.ied = "Bonus!";
    this.ukv = "BONUS";
    this.min = "GEWONNEN";
    this.pre = "TOTAL";
    this.hhn = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.trm = "FREEPLAY";
    this.tpf = "MEHR|SPIELE";
    this.ybc = "SPIEL ID";
    this.xvy = "Spielzeit";
    this.zcf = "Letzten";
    this.umt = "Spiele";
    this.nco = "GUTHABEN";
    this.audio = "AUDIO";
    this.itd = "MUSIK";
    this.ukl = "SPEED";
    this.aqq = "VOLLBILD";
    this.pvv = "VOLLBILD";
    this.language = "SPRACHE";
    this.vov = "Bei Gerätestörung keine Haftung.";
    this.uzi = "WEITER";
    this.llt = "Nicht noch einmal anzeigen";
    this.mtf = "AUTOSTART";
    this.qwj = "RISIKO";
    this.dbe = "GEWINNPLAN";
    this.chy = "Sounds können nicht geladen werden!";
    this.cxv = "Ressourcen fehlen!";
    this.ugr = "Ohne Ton spielen?";
    this.qtj = "EINSTELL.";
    this.kpi = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.pfn = "RECHTS";
    this.tgi = "AUTOM.";
    this.swa = "V A L U E";
    this.hyp = "INFO";
    this.mrl = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.frx = "Dieses Spiel ist optimiert für Google Chrome.";
    this.zgr = "Bitte benutzen sie die aktuelle Version von";
    this.efe = "Leider wird dieser Browser nicht unterstützt.";
    this.exe = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.jpp = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.gxl = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.fev = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.crf = "Reality Check";
    this.shp = "Du hast einen Reality Check angefordert.";
    this.wlz = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.btu = "Spielpause";
    this.eyy = "Spiellimits";
    this.vnu = "Selbsttest";
    this.gnd = "SPIELREGELN";
    this.xma = "SPIELREGELN";
    this.leu = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.itr = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.fwe = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.iyc = "Statistik";
    this.ubl = "Anzahl der Spiele";
    this.qkw = "Gesamteinsatz";
    this.nji = "Gesamtgewinn";
    this.cyc = "Gesamtspielzeit";
    this.mms = "Ich habe die Nachricht gelesen";
    this.key = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.dac = "Historie";
    this.hum = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.qjy = "Hauptspiel";
    this.hmr = "Auto. Nehmen";
    this.uva = "Genommen";
    this.hnb = "Bonusspins";
    this.opj = "Risiko";
    this.fyc = "Halb";
    this.ldz = "Respin";
    this.sps = "Bonus";
    this.ftf = "Erster Deal";
    this.xrz = "Zweiter Deal";
    this.xin = "Dritter Deal";
    this.bxh = "ABBRUCH";
    this.lbj = "AUTOSTART EINSTELLUNGEN";
    this.qcc = "Anzahl der Spiele: ";
    this.xzr = "Autostart anhalten";
    this.qnb = "Guthaben niedriger als:";
    this.gfu = "Guthaben höher als:";
    this.jbp = "Gewinn höher als:";
    this.dlp = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.wcu = "Auf Facebook teilen";
    this.zlh = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
vkb.prototype = new ojt;

function uxe() {
    this.jkb = "MINIMUM BANKO";
    this.teh = "MAKS. BANKO";
    this.npo = "MIN. BANKO";
    this.uvy = "MAKS. BANKO";
    this.ssy = "BANKO";
    this.start = "BAŞLAT";
    this.dqz = "YARDIM";
    this.gdk = "Kazanç planı";
    this.qxy = "MENÜ";
    this.ujz = "DAHA ÇOK|OYUN";
    this.ppf = "DUR";
    this.eqm = "KREDI";
    this.yrx = "OYUN BİTTİ";
    this.icz = "KAZANDINIZ!";
    this.acj = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.blm = "SON KAZANÇ";
    this.iwz = "kazanır";
    this.ucp = "ALMAK";
    this.pse = "ALMAK";
    this.ytt = "RIZIKO";
    this.ldn = "OTOMATİK|BAŞLATMA";
    this.xkg = "YARI|RIZIKO";
    this.of = "VEREN";
    this.qhz = "ÇIKIŞ";
    this.zuy = "BAŞLAT TUŞUNA BASINIZ";
    this.uuu = "BANKO SEÇİNİZ";
    this.qyd = "ALMAK|1/2";
    this.awp = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.pzz = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.cdp = "Toplam kazanç";
    this.awz = "YÜKLÜYOR ...";
    this.bnj = "GEÇMIŞI YÜKLÜYOR ...";
    this.ggv = "YETERSİZ KREDİ.";
    this.mpl = "Limitlerin birine ulaştınız!";
    this.ydq = "Dikkat";
    this.dco = "İletişim hatası";
    this.aoy = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.dyg = "Oyun sonlandırılıyor";
    this.ozz = "Oyun yeniden başlatılıyor";
    this.ied = "Bedava oyun primi!";
    this.ukv = "PRİM";
    this.min = "KAZANDINIZ";
    this.pre = "TOPLAM";
    this.hhn = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.trm = "FREEPLAY";
    this.tpf = "DAHA ÇOK OYUN";
    this.ybc = "OYUN ID";
    this.xvy = "OYUN SÜRESİ";
    this.zcf = "Son";
    this.umt = "oyun";
    this.nco = "BAKIYE";
    this.audio = "AUDIO";
    this.itd = "MÜZIK";
    this.ukl = "HıZ";
    this.aqq = "TAM EKRAN";
    this.pvv = "TAM EKRAN";
    this.language = "LISAN";
    this.vov = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.uzi = "DEVAM";
    this.llt = "Tekrar gösterme";
    this.mtf = "OTOMATİK|BAŞLATMA";
    this.qwj = "RIZIKO";
    this.dbe = "Kazanç planı";
    this.chy = "Sesler yüklenemiyorlar!";
    this.cxv = "Kaynaklar eksik!";
    this.ugr = "Sessiz oynayacak mısınız?";
    this.qtj = "AYARLAR";
    this.kpi = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.pfn = "SAĞ";
    this.tgi = "OTOMATIK";
    this.swa = "V A L U E";
    this.hyp = "BILGI";
    this.mrl = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.frx = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.zgr = "'nin güncel versiyonunu kullanın";
    this.efe = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.exe = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.jpp = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.gxl = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.fev = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.crf = "Reality Check";
    this.shp = "Reality Check talebinde bulundun.";
    this.wlz = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.gnd = "OYUNUN KURALLARı";
    this.xma = "OYUNUN|KURALLARı";
    this.leu = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.itr = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.fwe = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.iyc = "İstatistik";
    this.ubl = "Toplam oyunlar";
    this.qkw = "Toplam bankolar";
    this.nji = "Toplam kazançlar";
    this.cyc = "Toplam oyun süresi";
    this.mms = "Bu mesajı okudum.";
    this.key = "OYUNU|KAPAT";
    this.ok = "OK";
    this.dac = "GEÇMİŞ";
    this.hum = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.qjy = "Ana oyun";
    this.hmr = "Otomatik olarak kazandınız";
    this.uva = "Toplandı";
    this.hnb = "Prim oyunlar";
    this.opj = "Riziko";
    this.fyc = "Yarım";
    this.ldz = "Respin";
    this.sps = "Prim";
    this.ftf = "İlk anlaşma";
    this.xrz = "İkinci anlaşma";
    this.xin = "Üçüncü anlaşma";
    this.bxh = "İPTAL";
    this.lbj = "OTOMATIK BAŞLAT AYARLARı";
    this.qcc = "Oyun sayısı:";
    this.xzr = "Otomatik başlatmayı durdur";
    this.qnb = "Kredi bundan düşüktür:";
    this.gfu = "Kredi bundan yüksektir:";
    this.jbp = "Kazanç bundan yüksektir:";
    this.dlp = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.wcu = "Facebook'ta paylaş";
    this.zlh = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
uxe.prototype = new ojt;

function eat() {
    this.jkb = "MINIMÁLNÍ SÁZKA JE";
    this.teh = "MAX. SÁZKA";
    this.npo = "MIN. SÁZKA";
    this.uvy = "MAX. SÁZKA";
    this.ssy = "SÁZKA";
    this.start = "START";
    this.dqz = "POMOC";
    this.gdk = "VÝHERNÍ PLÁN";
    this.qxy = "MENU";
    this.ujz = "DALŠÍ|HRY";
    this.ppf = "STOP";
    this.eqm = "KREDIT";
    this.yrx = "KONEC HRY";
    this.icz = "VÍTEZ!";
    this.acj = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.blm = "POSL. VÝHRA";
    this.iwz = "vyhrává";
    this.ucp = "VEZMI";
    this.pse = "VEZMI";
    this.ytt = "HRA";
    this.ldn = "AUTO|START";
    this.xkg = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.qhz = "VÝSTUP";
    this.zuy = "START HRY";
    this.uuu = "VYBRAT SÁZKU";
    this.qyd = "POLOVINA";
    this.awp = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.pzz = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.cdp = "Celková výhra";
    this.awz = "NAHRÁVÁM ...";
    this.bnj = "NAHRÁVÁM HISTORII ...";
    this.ggv = "Nedostatecný kredit.";
    this.mpl = "Dosáhli jste jednoho z limitů!";
    this.ydq = "Varování";
    this.dco = "Chyba komunikace";
    this.aoy = "Dosáhli jste maximálního počtu her zdarma!";
    this.dyg = "Hra se zavře";
    this.ozz = "Hra se restartuje";
    this.ied = "Bonus!";
    this.ukv = "BONUS";
    this.min = "VYHRÁL";
    this.pre = "CELKOVÁ";
    this.hhn = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.trm = "FREEPLAY";
    this.tpf = "DALŠÍ HRY";
    this.ybc = "ID HRY";
    this.xvy = "HRACÍ DOBA";
    this.zcf = "Poslední";
    this.umt = "hry";
    this.nco = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.itd = "MUZIKA";
    this.ukl = "RYCHLOST";
    this.aqq = "FULLSCREEN";
    this.pvv = "FULLSCREEN";
    this.language = "ŘEČ";
    this.vov = "Při poruše jsou všechny hry a výhry neplatné.";
    this.uzi = "POKRAČUJ";
    this.llt = "Nezobrazujte znovu";
    this.mtf = "AUTOSTART";
    this.qwj = "HRA";
    this.dbe = "VÝHERNÍ PLÁN";
    this.chy = "Zvuk nelze nahrát!";
    this.cxv = "Chybí zdroje!";
    this.ugr = "Hrát bez zvuku?";
    this.qtj = "NASTAVENÍ";
    this.swa = "V A L U E";
    this.kpi = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.pfn = "VPRAVO";
    this.tgi = "AUTO";
    this.hyp = "INFORMACE";
    this.mrl = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.frx = "Tato hra je optimalizovaná pro Google Chrome.";
    this.zgr = "Použijte aktuální verzi";
    this.efe = "Tento prohlížeč není bohužel plně podporován.";
    this.exe = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.jpp = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.gxl = "Nastavte rozhraní hry svým potřebám!";
    this.fev = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.crf = "Reality Check";
    this.shp = "Požádali jste o kontrolu reality.";
    this.wlz = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.gnd = "PRAVIDLA HRY";
    this.xma = "PRAVIDLA HRY";
    this.leu = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.itr = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.fwe = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.iyc = "Statistika";
    this.ubl = "Celkem hry";
    this.qkw = "Celkem sázky";
    this.nji = "Celkem výhry";
    this.cyc = "Celková hrací doba";
    this.mms = "Zprávu jsem četl/a.";
    this.key = "UKONČIT|HRU";
    this.ok = "OK";
    this.dac = "HISTORIE";
    this.hum = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.qjy = "Hlavní hra";
    this.hmr = "Automaticky vybráno";
    this.uva = "Vybráno";
    this.hnb = "Bonusspins";
    this.opj = "Hra";
    this.fyc = "Polovina";
    this.ldz = "Respin";
    this.sps = "Bonus";
    this.ftf = "První vyložení";
    this.xrz = "Druhé vyložení";
    this.xin = "Třetí vyložení";
    this.bxh = "ZRUŠIT";
    this.lbj = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.qcc = "Množství her:";
    this.xzr = "Zastavit automatický start";
    this.qnb = "Kredit nižší než:";
    this.gfu = "Kredit vyšší než:";
    this.jbp = "Výhra vyšší než:";
    this.dlp = "Automatický start se zastaví na začátku bonusu.";
    this.wcu = "Sdílet na Facebooku";
    this.zlh = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
eat.prototype = new ojt;

function cbv() {
    this.jkb = "MIINIMUMPANUS ON";
    this.teh = "MAX PANUS";
    this.npo = "MIN PANUS";
    this.uvy = "MAX PANUS";
    this.ssy = "PANUS";
    this.start = "START";
    this.dqz = "ABI";
    this.gdk = "VÕIDU TABEL";
    this.qxy = "MENÜÜ";
    this.ujz = "VALI|MÄNG";
    this.ppf = "STOPP";
    this.eqm = "KREDIIT";
    this.yrx = "MÄNG ON LÕPPENUD!";
    this.icz = "OLED VÕITNUD!";
    this.acj = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.blm = "EELMINE VÕIT";
    this.ucp = "VÕTA|VÕIT";
    this.pse = "VÕTA VÕIT";
    this.ytt = "DUUBEL|DAMINE";
    this.ldn = "AUTO|START";
    this.xkg = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.qhz = "VÄLJA";
    this.zuy = "ALUSTA MÄNGU";
    this.uuu = "VALI PANUS";
    this.qyd = "POOLIK";
    this.awp = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.cdp = "Koguvõit";
    this.ggv = "POLE PIISAVALT KREDIITI.";
    this.ied = "Boonus!";
    this.ukv = "BOONUS";
    this.hhn = "PALUN OODAKE ...";
    this.tpf = "Vali Mäng";
    this.audio = "HELI";
    this.itd = "MUUSIKA";
    this.ukl = "KIIRUS";
    this.aqq = "TÄISEKRAAN";
    this.pvv = "TÄISEKRAAN";
    this.vov = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.nkl = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.gnd = "MÄNGUREEGLID";
    this.xma = "MÄNGUREEGLID";
    this.awz = "LAADIMINE ...";
    this.bnj = "AJALOO LAADIMINE ...";
    this.mpl = "Oled saavutanud ühe limiitidest!";
    this.ydq = "Hoiatus";
    this.dco = "Ühenduse viga";
    this.aoy = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.dyg = "Mäng suletakse";
    this.ozz = "Mäng taaskäivitatakse";
    this.pzz = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.qtj = "SÄTTED";
    this.swa = "V A L U E";
    this.kpi = "Pöörake oma seadet!";
    this.hyp = "INFO";
    this.mrl = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.frx = "See mäng on optimeeritud Google Chrome jaoks.";
    this.zgr = "Palun kasutage praeguse versiooni";
    this.efe = "Kahjuks ei toetata seda brauserit täielikult.";
    this.exe = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.pfn = "PAREM";
    this.tgi = "AUTOMAATNE";
    this.min = "VÕITIS";
    this.iwz = "võidetud";
    this.pre = "KOKKU";
    this.error = "VIGA";
    this.trm = "TASUTA MÄNG";
    this.ybc = "MÄNGU ID";
    this.xvy = "MÄNGUAEG";
    this.zcf = "Viimased";
    this.umt = "mängu";
    this.nco = "SISSEMAKSE";
    this.leu = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.itr = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.fwe = "RISKI, ET SUURENDADA OMA VÕITU";
    this.iyc = "Statistika";
    this.ubl = "Mänge kokku";
    this.qkw = "Kogupanus";
    this.nji = "Koguvõit";
    this.cyc = "Mänguaeg kokku";
    this.mms = "Olen seda teadet lugenud.";
    this.key = "MÄNGU|LÕPP";
    this.dac = "Ajalugu";
    this.hum = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.qjy = "Põhimäng";
    this.hmr = "Automaatne väljavõtt";
    this.uva = "Välja võetud";
    this.hnb = "Bonusspins";
    this.opj = "Gamble";
    this.fyc = "Pool";
    this.ldz = "Respin";
    this.sps = "Boonus";
    this.ftf = "Esimene jagamine";
    this.xrz = "Teine jagamine";
    this.xin = "Kolmas jagamine";
    this.uzi = "JÄTKA";
    this.llt = "Ära seda enam näita";
    this.mtf = "AUTOSTART";
    this.qwj = "DUUBEL DAMINE";
    this.dbe = "VÕIDU TABEL";
    this.chy = "Helisid ei saa laadida!";
    this.cxv = "Ressursid puuduvad!";
    this.ugr = "Soovid mängida ilma helideta?";
    this.jpp = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.gxl = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.fev = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.bxh = "TÜHISTA";
    this.lbj = "AUTOMAATKÄIVITUSE SÄTTED";
    this.qcc = "Mängude arv:";
    this.xzr = "Peata automaatkäivitus";
    this.qnb = "Krediit madalam kui:";
    this.gfu = "Krediit kõrgem kui:";
    this.jbp = "Võit suurem kui:";
    this.dlp = "Automaatkäivitus peatatakse boonuse alguses.";
    this.wcu = "Jaga Facebookis";
    this.ok = "OK";
    this.crf = "Reality Check";
    this.shp = "Olete soovinud reaalsuskontrolli.";
    this.wlz = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
cbv.prototype = new ojt;

function psm() {
    this.jkb = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.teh = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.npo = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.uvy = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.ssy = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.dqz = "ΒΟHΘΕΙΑ";
    this.gdk = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.qxy = "ΜΕΝΟY";
    this.ujz = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.ppf = "ΣΤΟΠ";
    this.eqm = "ΠIΣΤΩΣΗ";
    this.yrx = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.icz = "ΝΙΚΗΤΗΣ!";
    this.acj = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.blm = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.ucp = "ΠΑΡΑΛΑΒH";
    this.pse = "ΠΑΡΑΛΑΒH";
    this.ytt = "ΤΖΟΓAΡΩ";
    this.ldn = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.xkg = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.qhz = "EΞΟΔΟΣ";
    this.zuy = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.uuu = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.qyd = "ΠΑΡΑΛΑΒH|1/2";
    this.awp = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.cdp = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.ggv = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.ied = "Μπόνουσ!";
    this.ukv = "ΜΠOΝΟΥΣ";
    this.hhn = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.tpf = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.itd = "ΜΟΥΣΙΚΉ";
    this.ukl = "ΤΑΧYΤΗΤΑ";
    this.aqq = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.pvv = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.vov = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.pre = "ΣYΝΟΛΟ";
    this.gnd = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.xma = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.awz = "ΦΟΡΤΩΣΗ ...";
    this.bnj = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.mpl = "Ξεπεράσατε κάποιο όριο!";
    this.ydq = "Προειδοποίηση";
    this.dco = "Σφάλμα επικοινωνίας";
    this.aoy = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.dyg = "Το παιχνίδι θα τερματιστεί";
    this.ozz = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.pzz = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.qtj = "ΡΥΘΜΙΣΕΙΣ";
    this.swa = "V A L U E";
    this.kpi = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.hyp = "ΠΛΗΡΟΦΟΡΊΕς";
    this.mrl = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.frx = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.zgr = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.efe = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.exe = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.pfn = "ΔΕΞΙA";
    this.tgi = "AΥΤOΜΑΤΟ";
    this.min = "ΚEΡΔΙΣΕ";
    this.iwz = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.trm = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.ybc = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.xvy = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.zcf = "Τελευταία";
    this.umt = "παιχνίδια";
    this.nco = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.leu = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.itr = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.fwe = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.iyc = "Στατιστικά";
    this.ubl = "Σύνολο παιχνιδιών";
    this.qkw = "Συνολικό ποντάρισμα";
    this.nji = "Συνολικό κέρδος";
    this.cyc = "Συνολικός χρόνος παιχνιδιού";
    this.mms = "Eχω διαβάσει το μήνυμα.";
    this.key = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.dac = "ΙΣΤΟΡΙΚΟ";
    this.hum = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.qjy = "Κύριο παιχνίδι";
    this.hmr = "Αυτόματη λήψη";
    this.uva = "Ελήφθησαν";
    this.hnb = "Bonusspins";
    this.opj = "Τζογάρω";
    this.fyc = "Hμισυ";
    this.ldz = "Respin";
    this.sps = "Μπόνουσ";
    this.ftf = "Πρώτο μοίρασμα";
    this.xrz = "Δεύτερο μοίρασμα";
    this.xin = "Τρίτο μοίρασμα";
    this.uzi = "ΣΥΝΈΧΕΙΑ";
    this.llt = "Να μην προβληθεί ξανά";
    this.mtf = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.qwj = "ΤΖΟΓAΡΩ";
    this.dbe = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.chy = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.cxv = "Λείπουν πόροι!";
    this.ugr = "Παιχνίδι χωρίς ήχο?";
    this.jpp = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.gxl = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.fev = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.bxh = "ΑΚΎΡΩΣΗ";
    this.lbj = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.qcc = "Αριθμός παιχνιδιών:";
    this.xzr = "Διακοπή autostart";
    this.qnb = "Μονάδες χαμηλότερα από:";
    this.gfu = "Μονάδες υψηλότερες από:";
    this.jbp = "Κέρδος υψηλότερο από:";
    this.dlp = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.wcu = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.crf = "έλεγχο πραγματικότητας";
    this.shp = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.wlz = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
psm.prototype = new ojt;

function nbh() {
    this.jkb = "МИН. ЗАЛОГ Е";
    this.teh = "МАКС. ЗАЛОГ";
    this.npo = "МИНИМ. ЗАЛОГ";
    this.uvy = "МАКС. ЗАЛОГ";
    this.ssy = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.dqz = "ПОМОЩ";
    this.gdk = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.qxy = "МЕНЮ";
    this.ujz = "ПОВЕЧЕ|ИГРИ";
    this.ppf = "СТОП";
    this.eqm = "КРЕДИТ";
    this.yrx = "ИГРАТА ЗАВЪРШИ";
    this.icz = "ПЕЧЕЛИТЕ!";
    this.acj = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.blm = "ПОСЛ.ПЕЧАЛБА";
    this.ucp = "ПРИБИРАНЕ";
    this.pse = "ПРИБИРАНЕ";
    this.ytt = "ДУБЛИРАНЕ";
    this.ldn = "АВТО|СТАРТ";
    this.xkg = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.qhz = "ИЗХОД";
    this.zuy = "ЗАПОЧНЕТЕ ИГРАТА";
    this.uuu = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.qyd = "ДЕЛЕНЕ";
    this.awp = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.cdp = "ОБЩА ПЕЧАЛБА";
    this.ggv = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.ied = "Бонус!";
    this.ukv = "БОНУС";
    this.hhn = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.tpf = "Повече Игри";
    this.ukl = "ТУРБО";
    this.vov = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.gnd = "ПРАВИЛА НА ИГРАТА";
    this.xma = "ПРАВИЛА|НА ИГРАТА";
    this.awz = "ЗАРЕЖДАНЕ ...";
    this.bnj = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.mpl = "Достигна един от лимитите!";
    this.ydq = "Предупреждение";
    this.dco = "Комуникационна грешка";
    this.aoy = "Достигнали сте максималния брой безплатни игри!";
    this.dyg = "Играта ще бъде затворена";
    this.ozz = "Играта ще бъде рестартирана";
    this.pzz = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.qtj = "НАСТРОЙКИ";
    this.swa = "V A L U E";
    this.kpi = "Моля, включете устройството!";
    this.hyp = "ИНФОРМАЦИЯ";
    this.mrl = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.frx = "Тази игра е оптимизирана за Google Chrome.";
    this.zgr = "Моля, използвайте текущата версия на";
    this.efe = "За съжаление този браузър не се поддържа напълно.";
    this.exe = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.pfn = "ДЯСНА";
    this.tgi = "АВТО";
    this.min = "СПЕЧЕЛЕНО";
    this.iwz = "печалби";
    this.pre = "ОБЩО";
    this.error = "ГРЕШКА";
    this.trm = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.itd = "МУЗИКА";
    this.aqq = "ПЪЛЕН ЕКРАН";
    this.pvv = "ПЪЛЕН|ЕКРАН";
    this.ybc = "ИД НА ИГРА";
    this.xvy = "ВРЕМЕ НА ИГРА";
    this.zcf = "Последни";
    this.umt = "игри";
    this.nco = "ДЕПОЗИТ";
    this.leu = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.itr = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.fwe = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.iyc = "Статистика";
    this.ubl = "Общо игри";
    this.qkw = "Общо залог";
    this.nji = "Общо печалби";
    this.cyc = "Общо време на игра";
    this.mms = "Прочетох това съобщение.";
    this.key = "ИЗХОД|ОТ|ИГРАТА";
    this.dac = "ИСТОРИЯ";
    this.hum = "Няма играни игри.";
    this.state = "СТАТУС";
    this.qjy = "Основна игра";
    this.hmr = "Автоматично събрани";
    this.uva = "Събрани";
    this.hnb = "Бонус-игри";
    this.opj = "Дублиране";
    this.fyc = "Половина";
    this.ldz = "Respin";
    this.sps = "Бонус";
    this.ftf = "Първо раздаване";
    this.xrz = "Второ раздаване";
    this.xin = "Трето раздаване";
    this.uzi = "ПРОДЪЛЖЕНИЕ";
    this.llt = "Не показвай отново";
    this.mtf = "AUTOSTART";
    this.qwj = "ДУБЛИРАНЕ";
    this.dbe = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.chy = "Звукът не може да бъде зареден!";
    this.cxv = "Липсват ресурси!";
    this.ugr = "Игра без звук?";
    this.jpp = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.gxl = "Настройте интерфейса на играта според своите нужди!";
    this.fev = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.bxh = "ИЗЧИСТВАНЕ";
    this.lbj = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.qcc = "Брой игри:";
    this.xzr = "Спри автоматичния старт";
    this.qnb = "Кредит по-малък от:";
    this.gfu = "Кредит по-висок от:";
    this.jbp = "Спечели повече от:";
    this.dlp = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.wcu = "Сподели във Facebook";
    this.ok = "OK";
    this.crf = "Reality Check";
    this.shp = "Заявили сте проверка на реалността.";
    this.wlz = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
nbh.prototype = new ojt;

function xjf() {
    this.jkb = "მინიმალური ფსონი არის";
    this.teh = "მაქსიმალური ფსონი";
    this.npo = "მინიმალური ფსონი";
    this.uvy = "მაქსიმალური ფსონი";
    this.ssy = "ფსონი";
    this.start = "დაწყება";
    this.dqz = "დახმარება";
    this.gdk = "გადახდის მრიცხველი";
    this.qxy = "მენიუ";
    this.ujz = "მეტი|თამაშები";
    this.ppf = "გაჩერება";
    this.eqm = "კრედიტი";
    this.yrx = "თამაში დასრულებულია";
    this.icz = "გამარჯვებული!";
    this.acj = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.blm = "ბოლო მოგება";
    this.ucp = "შეგროვება";
    this.pse = "შეგროვება";
    this.ytt = "აზარტი";
    this.ldn = "ავტო|დაწყება";
    this.xkg = "ნახევარი";
    this.qhz = "გამოსვლა";
    this.zuy = "თამაშის დაწყება";
    this.uuu = "აირჩიეთ ფსონი";
    this.qyd = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.cdp = "მთლიანი მოგება";
    this.ydq = "გაფრთხილება";
    this.pre = "მთლიანი";
    this.hhn = "გთხოვთ, დაელოდოთ ...";
    this.tpf = "მეტი თამაშები";
    this.ukl = "ტურბო";
    this.vov = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.uzi = "გაგრძელება";
    this.mtf = "ავტო დაწყება";
    this.dbe = "გადახდის მრიცხველი";
    this.qwj = "აზარტი";
    this.left = "მარცხნივ";
    this.pfn = "მარჯვნივ";
    this.tgi = "ავტომატურად";
    this.ok = "კი";
    this.bxh = "გაუქმება";
    this.opj = "აზარტი";
    this.fyc = "ნახევარი";
    this.gnd = "თამაშის წესები";
    this.xma = "თამაშის წესები";
    this.ied = "BONUS!";
    this.ukv = "ბონუს";
    this.awp = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.ggv = "არა საკმარისი კრედიტი.";
    this.pzz = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.awz = "ჩატვირთვის  ...";
    this.bnj = "ჩატვირთვის  ისტორია  ...";
    this.dco = "საკომუნიკაციო შეცდომა";
    this.mpl = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.aoy = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.dyg = "თამაში დასრულდება";
    this.ozz = "თამაში გადაიტვირთება";
    this.min = "მოგებულია";
    this.iwz = "wins";
    this.swa = "V A L U E";
    this.error = "შეცდომა";
    this.trm = "უფასო თამაში";
    this.ybc = "თამაშის  ნომერი";
    this.xvy = "სათამაშო დრო";
    this.zcf = "ბოლო ";
    this.umt = "თამაშები";
    this.nco = "დეპოზიტი";
    this.audio = "ხმა";
    this.itd = "მუსიკა";
    this.aqq = "სრული ეკრანი";
    this.pvv = "სრული ეკრანი";
    this.language = "ენის";
    this.llt = "მომავალში აღარ ჩვენება";
    this.chy = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.cxv = "არასაკმარისი რესურსები!";
    this.ugr = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.kpi = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.mrl = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.frx = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.jrr = "გთხოვთ გამოიყენოთ";
    this.jiq = "-ის მიმდინარე ვერსია";
    this.efe = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.exe = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.jpp = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.gxl = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.leu = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.itr = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.fwe = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.ubl = "მთლიანი თამაშები";
    this.qkw = "ფსონი მთლიანად";
    this.nji = "მთლიანი მოგება";
    this.cyc = "მთლიანი სათამაშო დრო";
    this.mms = "მე გავეცანი ამ გზავნილს.";
    this.key = "თამაშის|დამთავრება";
    this.dac = "მოვლენების ჩანაწერი";
    this.hum = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.qjy = "ძირითადი თამაში";
    this.hmr = "ავტომატურად შეგროვება";
    this.uva = "აღებულ იქნა";
    this.ftf = "პირველი დარიგება";
    this.xrz = "მეორე დარიგება";
    this.xin = "მესამე დარიგება";
    this.lbj = "ავტოგამშვების პარამეტრები";
    this.qcc = "თამაშების რაოდენობა:";
    this.xzr = "შეაჩერეთ ავტოგამშვები";
    this.qnb = "კრედიტი უფრო დაბალი ვიდრე:";
    this.gfu = "კრედიტი უფრო მაღალი ვიდრე:";
    this.jbp = "მოიგეთ უფრო მეტი ვიდრე:";
    this.dlp = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.wcu = "გააზიარეთ ფეისბუქზე";
    this.iyc = "სტატისტიკა";
    this.of = "/";
    this.hnb = "Bonus თამაში";
    this.sps = "ბონუსი";
    this.hyp = "ინფორმაცია";
    this.qtj = "პარამეტრ.";
    this.ldz = "ხელახლა დატრიალების";
    this.fev = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.crf = "რეალობის შემოწმება";
    this.shp = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.wlz = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
xjf.prototype = new ojt;

function vxt() {
    this.jkb = "A MINIMUM TÉT";
    this.teh = "MAXIMUM TÉT";
    this.npo = "MIN. TÉT";
    this.uvy = "MAX. TÉT";
    this.ssy = "TÉT";
    this.start = "START";
    this.dqz = "SÚGÓ";
    this.gdk = "SÚGÓ";
    this.qxy = "MENÜ";
    this.ujz = "MENÜ";
    this.ppf = "STOP";
    this.eqm = "HITEL";
    this.yrx = "A JÁTÉKNAK VÉGE";
    this.icz = "NYEREMÉNY!";
    this.acj = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.blm = "UTOLSÓ NYER.";
    this.ucp = "FELÍR";
    this.pse = "FELÍR";
    this.ytt = "SZORZÁS";
    this.ldn = "AUTO|START";
    this.xkg = "FELEZÉS";
    this.qhz = "KILÉPÉS";
    this.zuy = "START";
    this.uuu = "VÁLASSZON TÉTET";
    this.qyd = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.cdp = "Összes Nyeremény";
    this.ydq = "Figyelmeztetés";
    this.pre = "ÖSSZES";
    this.hhn = "KÉREM VÁRJON ...";
    this.tpf = "Menü";
    this.ukl = "SEBESSÉG";
    this.vov = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.uzi = "TOVÁBB";
    this.mtf = "AUTOSTART";
    this.dbe = "SÚGÓ";
    this.qwj = "SZORZÁS";
    this.left = "BAL";
    this.pfn = "JOBB";
    this.ok = "OK";
    this.bxh = "MÉGSEM";
    this.opj = "Szorzás";
    this.fyc = "Felezés";
    this.gnd = "JÁTÉKSZABÁLYOK";
    this.xma = "JÁTÉKSZABÁLYOK";
    this.ied = "Bónusz!";
    this.ukv = "BÓNUSZ";
    this.awp = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.ggv = "NINCS ELÉG HITEL";
    this.swa = "V A L U E";
    this.iwz = "nyeremények";
    this.of = "/";
    this.pzz = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.awz = "BETÖLTÉSE ...";
    this.bnj = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.dco = "Kommunikációs hiba";
    this.mpl = "Elérte az egyik limitet!";
    this.aoy = "Elérte a szabad játékok maximum számát!";
    this.dyg = "A játék megállítva";
    this.ozz = "Játék újraindul";
    this.min = "NYERT";
    this.error = "HIBA";
    this.trm = "FREEPLAY";
    this.tgi = "AUTO";
    this.ybc = "JÁTÉK ID";
    this.xvy = "Játék Idő";
    this.zcf = "utolsó";
    this.umt = "játék";
    this.nco = "HITEL";
    this.audio = "HANG";
    this.itd = "ZENE";
    this.aqq = "TELJES KÉPERNYŐ";
    this.pvv = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.llt = "Ne mutassa mégegyszer";
    this.chy = "A hangot nem lehet betölteni!";
    this.cxv = "Források hiányoznak!";
    this.ugr = "Játék hang nélkül?";
    this.qtj = "BEÁLLÍTÁS";
    this.kpi = "Kérjük fordítsa el a készüléket!";
    this.hyp = "INFÓ";
    this.mrl = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.frx = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.jrr = "Kérjük használja a(z)";
    this.jiq = " legújabb verzióját!";
    this.efe = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.exe = "Ez a játék nem indítható FreePlay módban!";
    this.jpp = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.gxl = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.leu = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.itr = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.fwe = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.iyc = "Statisztika";
    this.ubl = "Összes Játék";
    this.qkw = "Összes Tét";
    this.nji = "Összes Nyeremény";
    this.cyc = "Összes Játék Idő";
    this.mms = "Elolvastam az üzenetet.";
    this.key = "KILÉPÉS";
    this.dac = "Előzmények";
    this.hum = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.qjy = "Fő Játék";
    this.hmr = "Autom. Felírás";
    this.uva = "Felírva";
    this.hnb = "Bónusz játék";
    this.ldz = "Respin";
    this.sps = "Bónusz";
    this.ftf = "Első Leosztás";
    this.xrz = "Második Leosztás";
    this.xin = "Harmadik Leosztás";
    this.lbj = "AUTOSTART BEÁLLÍTÁS";
    this.qcc = "Játékok száma:";
    this.xzr = "Stop autostart";
    this.qnb = "A hitel kevesebb, mint:";
    this.gfu = "A hitel több, mint:";
    this.jbp = "A nyeremény több, mint:";
    this.dlp = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.wcu = "Megosztás a Facebook-on";
    this.fev = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.crf = "Reality Check";
    this.shp = "Ön egy valóság-ellenőrzést kért.";
    this.wlz = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
vxt.prototype = new ojt;

function mrj() {
    this.jkb = "MIZA MINIMĂ ESTE";
    this.teh = "MIZA MAXIMĂ";
    this.npo = "MIZA MIN.";
    this.uvy = "MIZA MAX.";
    this.ssy = "MIZĂ";
    this.start = "START";
    this.dqz = "AJUTOR";
    this.gdk = "LISTA|CÂŞTIGURI";
    this.qxy = "MENIU";
    this.ujz = "MENIUL|JOCULUI";
    this.ppf = "STOP";
    this.eqm = "CREDIT";
    this.yrx = "SFÂRŞIT JOCUL";
    this.icz = "CÂŞTIGĂTOR!";
    this.acj = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.blm = "ULTIMUL CÂŞTIG";
    this.ucp = "COLECTA";
    this.pse = "COLECTA";
    this.ytt = "JOC";
    this.ldn = "AUTO|START";
    this.xkg = "COLECTARE|1/2";
    this.qhz = "IEŞIRE";
    this.zuy = "APĂSAŢI START";
    this.uuu = "ALEGEŢI MIZA";
    this.qyd = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.cdp = "Câştig total";
    this.ydq = "Avertizare";
    this.pre = "TOTAL";
    this.hhn = "AŞTEPTAŢI VĂ ROG ...";
    this.tpf = "Meniul Jocului";
    this.ukl = "VITEZĂ";
    this.vov = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.uzi = "CONTINUARE";
    this.mtf = "AUTOSTART";
    this.dbe = "LISTA CÂŞTIGURI";
    this.qwj = "JOC";
    this.left = "STÂNGA";
    this.pfn = "DREAPTA";
    this.ok = "OK";
    this.bxh = "ÎNTRERUPERE";
    this.opj = "Joc";
    this.fyc = "Colectare 1/2";
    this.gnd = "REGULILE JOCULUI";
    this.xma = "REGULILE|JOCULUI";
    this.ied = "Bonus!";
    this.ukv = "BONUS";
    this.awp = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.ggv = "CREDIT INSUFICIENT.";
    this.iwz = "câştigă";
    this.swa = "V A L U E";
    this.of = "DIN";
    this.pzz = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.awz = "ÎNCARCĂ ...";
    this.bnj = "ÎNCARCĂ ISTORIC ...";
    this.dco = "Eroare de comunicare";
    this.mpl = "Aţi atins una dintre limite!";
    this.aoy = "Aţi atins numărul maxim de jocuri gratis!";
    this.dyg = "Jocul se încheie";
    this.ozz = "Jocul se restartează";
    this.min = "CÂŞTIGAT";
    this.error = "EROARE";
    this.trm = "FREEPLAY";
    this.tgi = "AUTO";
    this.ybc = "ID JOC";
    this.xvy = "TIMP DE JOC";
    this.zcf = "ultimele";
    this.umt = "jocuri";
    this.nco = "CREDIT";
    this.audio = "AUDIO";
    this.itd = "MUZICĂ";
    this.aqq = "ECRAN COMPLET";
    this.pvv = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.llt = "Nu reafișați";
    this.chy = "Sunetele nu pot fi încărcate!";
    this.cxv = "Lipsesc resurse!";
    this.ugr = "Jucaţi fără sunet?";
    this.qtj = "SETĂRI";
    this.kpi = "Vă rugăm opriţi aparatul!";
    this.hyp = "INFO";
    this.mrl = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.frx = "Acest joc este optimizat pentru Google Chrome.";
    this.zgr = "Vă rugăm utilizaţi versiunea actuală";
    this.efe = "Din păcate acest browser nu este sprijinit complet.";
    this.exe = "Acest joc nu poate fi pornit în modul freeplay!";
    this.jpp = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.gxl = "Ajustează interfaţa de joc nevoilor dvs!";
    this.leu = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.itr = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.fwe = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.iyc = "Statistică";
    this.ubl = "Număr jocuri";
    this.qkw = "Pariuri totale";
    this.nji = "Câştig total";
    this.cyc = "Timp total de joc";
    this.mms = "Am citit mesajul.";
    this.key = "ÎNCHEIERE|JOC";
    this.dac = "ISTORIC";
    this.hum = "Nu există jocuri.";
    this.state = "STATUT";
    this.qjy = "Joc principal";
    this.hmr = "Auto colectare";
    this.uva = "Colectat";
    this.hnb = "Bonusspins";
    this.ldz = "Respin";
    this.sps = "Bonus";
    this.ftf = "Primul Deal";
    this.xrz = "Al doilea deal";
    this.xin = "Al treilea deal";
    this.lbj = "SETĂRI AUTOSTART";
    this.qcc = "Numărul jocurilor:";
    this.xzr = "Oprire autostart";
    this.qnb = "Credit sub:";
    this.gfu = "Credit peste:";
    this.jbp = "Câștig peste:";
    this.dlp = "Autostart se va opti la începerea bonusului.";
    this.wcu = "Distribuie Facebook";
    this.fev = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.crf = "Reality Check";
    this.shp = "Ai cerut un Reality Check.";
    this.wlz = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
mrj.prototype = new ojt;

function vjt() {
    this.jkb = "MÍNIMA APOSTA É";
    this.teh = "MÁX. APOSTA";
    this.npo = "MÍN. APOSTA";
    this.uvy = "MÁX. APOSTA";
    this.ssy = "APOSTA";
    this.start = "PARTIDA";
    this.dqz = "AJUDA";
    this.gdk = "ESQUEMA|DE PAGOS";
    this.qxy = "MENU";
    this.ujz = "SELEÇÃO|DE JOGOS";
    this.ppf = "PARADA";
    this.eqm = "CRÉDITO";
    this.yrx = "FIM DO JOGO";
    this.icz = "VENCEDOR!";
    this.acj = "BOA SORTE!";
    this.win = "GANHO";
    this.blm = "ULTIMO GANHO";
    this.ucp = "COLETAR";
    this.pse = "COLETAR";
    this.ytt = "JOGADA";
    this.ldn = "AUTO|PARTIDA";
    this.xkg = "METADE";
    this.qhz = "SAÍDA";
    this.zuy = "PREMIR PARTIDA";
    this.uuu = "SELECIONAR APOSTA";
    this.qyd = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.cdp = "Ganho total";
    this.ydq = "Aviso";
    this.pre = "TOTAL";
    this.hhn = "AGUARDE POR FAVOR ...";
    this.tpf = "Seleção de jogos";
    this.ukl = "VELOCIDADE";
    this.vov = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.uzi = "CONTINUAR";
    this.mtf = "AUTOPARTIDA";
    this.dbe = "ESQUEMA DE PAGOS";
    this.qwj = "JOGADA";
    this.left = "ESQUERDA";
    this.pfn = "DIREITA";
    this.ok = "OK";
    this.bxh = "CANCELAR";
    this.opj = "Jogada";
    this.fyc = "Metade";
    this.gnd = "REGRAS DO JOGO";
    this.xma = "REGRAS|DO JOGO";
    this.ied = "Bonus!";
    this.ukv = "BONUS";
    this.awp = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.ggv = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.iwz = "ganha";
    this.swa = "V A L U E";
    this.of = "DE";
    this.pzz = "TOCAR NA TELA PARA CONTINUAR";
    this.awz = "CARREGANDO ...";
    this.bnj = "CARREGANDO HISTÓRICO ...";
    this.dco = "Erro de comunicação";
    this.mpl = "Alcançou um dos limities!";
    this.aoy = "Alcançou a quantidade máxima de jogos livres!";
    this.dyg = "O jogo será encerrado";
    this.ozz = "O jogo será reiniciado";
    this.min = "GANHOU";
    this.error = "ERRO";
    this.trm = "FREEPLAY";
    this.tgi = "AUTO";
    this.ybc = "ID JOGO";
    this.xvy = "Playing Time";
    this.zcf = "Últimos";
    this.umt = "jogos";
    this.nco = "DEPOSIT";
    this.audio = "AUDIO";
    this.itd = "MUSIC";
    this.aqq = "TELA CHEIA";
    this.pvv = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.llt = "Não exibir novamente";
    this.chy = "Sounds não podem ser carregados!";
    this.cxv = "Faltam recursos!";
    this.ugr = "Jogar sem som?";
    this.qtj = "AJUSTES";
    this.kpi = "Favor girar o seu aparelho!";
    this.hyp = "INFORMAÇÃO";
    this.mrl = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.frx = "Este jogo é otimizado por Google Chrome.";
    this.zgr = "Favor usar a versão atual de";
    this.efe = "Infelizmente este browser não é completamente suportado.";
    this.exe = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.jpp = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.gxl = "Adapte a interface do jogo às suas necessidades!";
    this.leu = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.itr = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.fwe = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.iyc = "Estatísticas";
    this.ubl = "Número de jogos";
    this.qkw = "Aposta total";
    this.nji = "Ganho total";
    this.cyc = "Tempo total do jogo";
    this.mms = "Eu lí esta mensagem.";
    this.key = "ENCERRAR|JOGO";
    this.dac = "HISTÓRICO";
    this.hum = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.qjy = "Jogo principal";
    this.hmr = "Coletado automaticamente";
    this.uva = "Coletado";
    this.hnb = "Bonusspins";
    this.ldz = "Respin";
    this.sps = "Bonus";
    this.ftf = "Primeiro Deal";
    this.xrz = "Segundo Deal";
    this.xin = "Terceiro Deal";
    this.lbj = "AJUSTES AUTOPARTIDA";
    this.qcc = "Número de jogos:";
    this.xzr = "Parar autopartida";
    this.qnb = "Crédito menor do que:";
    this.gfu = "Crédito maior do que:";
    this.jbp = "Ganho maior do que:";
    this.dlp = "O autopartida será parado no início do bonus.";
    this.wcu = "Participar no Facebook";
    this.fev = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.crf = "Reality Check";
    this.shp = "Solicitaste um Reality Check.";
    this.wlz = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
vjt.prototype = new ojt;

function hor() {
    this.jkb = "LA MISE MINIMALE EST DE";
    this.teh = "MISE MAX.";
    this.npo = "MISE MINI";
    this.uvy = "MISE MAX.";
    this.ssy = "MISE";
    this.start = "DEPART";
    this.dqz = "AIDE";
    this.gdk = "TABLEAU|DES PAIEMENTS";
    this.qxy = "MENU";
    this.ujz = "PLUS|DE JEUX";
    this.ppf = "ARRÊTEZ";
    this.eqm = "CRÉDIT";
    this.yrx = "FIN DU JEU";
    this.icz = "GAGNANT!";
    this.acj = "BONNE CHANCE!";
    this.win = "GAIN";
    this.blm = "DERNIER GAIN";
    this.ucp = "ENCAISSER";
    this.pse = "ENCAISSER";
    this.ytt = "DOUBLER";
    this.ldn = "AUTO|LANCER";
    this.xkg = "ENCAISSER|MOITIÉ";
    this.qhz = "SORTIE";
    this.zuy = "APPUYEZ SUR START";
    this.uuu = "CHOISIR LA MISE";
    this.qyd = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.cdp = "Gain total";
    this.ydq = "Avertissement";
    this.pre = "TOTALE";
    this.hhn = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.tpf = "Plus de jeux";
    this.ukl = "VITESSE";
    this.vov = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.uzi = "CONTINUER";
    this.mtf = "AUTO LANCER";
    this.dbe = "TABLEAU DES PAIEMENTS";
    this.qwj = "DOUBLER";
    this.left = "GAUCHE";
    this.pfn = "DROITE";
    this.ok = "OK";
    this.bxh = "ANNULER";
    this.opj = "Doubler";
    this.fyc = "Encaisser moitié";
    this.gnd = "RÈGLES DU JEU";
    this.xma = "RÈGLES DU JEU";
    this.ied = "Bonus!";
    this.ukv = "BONUS";
    this.awp = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.ggv = "PAS ASSEZ DE CRÉDIT";
    this.iwz = "gagne";
    this.swa = "V A L U E";
    this.of = "SUR";
    this.pzz = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.awz = "CHARGEMENT EN COURS ...";
    this.bnj = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.dco = "Erreur de communication";
    this.mpl = "Vous avez atteint une des limites!";
    this.aoy = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.dyg = "Le jeu sera terminé";
    this.ozz = "Le jeu sera démarré de nouveau";
    this.min = "GAGNÉ";
    this.error = "ERREUR";
    this.trm = "JEU GRATUIT";
    this.tgi = "AUTO";
    this.ybc = "ID DU JEU";
    this.xvy = "TEMPS DE JEU";
    this.zcf = "Les";
    this.umt = "derniers jeux";
    this.nco = "AVOIR";
    this.audio = "AUDIO";
    this.itd = "MUSIQUE";
    this.aqq = "PLEIN ÉCRAN";
    this.pvv = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.llt = "Ne pas afficher encore une fois";
    this.chy = "Impossible de charger des sounds!";
    this.cxv = "Manque de ressources!";
    this.ugr = "Jouer sans son?";
    this.qtj = "CONFIGUR.";
    this.kpi = "Merci de tourner votre matériel!";
    this.hyp = "INFO";
    this.mrl = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.frx = "Ce jeu est optimisé pour Google Chrome.";
    this.zgr = "Veuilllez utiliser la version à jour de";
    this.efe = "Malheureusement, ce browser n'est intégralement supporté.";
    this.exe = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.jpp = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.gxl = "Adapte l'interface de jeu à tes besoins!";
    this.leu = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.itr = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.fwe = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.iyc = "Statistiques";
    this.ubl = "Nombre des jeux";
    this.qkw = "Total des mises";
    this.nji = "Gain total";
    this.cyc = "Temps total du jeu";
    this.mms = "J'ai lu le message";
    this.key = "TERMINER|LE JEU";
    this.dac = "Historique";
    this.hum = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.qjy = "Jeu principal";
    this.hmr = "Pris automatiquement";
    this.uva = "Pris";
    this.hnb = "Bonusspins";
    this.ldz = "Respin";
    this.sps = "Bonus";
    this.ftf = "Premier Deal";
    this.xrz = "Deuxième Deal";
    this.xin = "Troisième Deal";
    this.lbj = "AUTOSTART CONFIGURATION";
    this.qcc = "Nombre des jeux:";
    this.xzr = "Arrêter autostart";
    this.qnb = "Crédit inférieur à:";
    this.gfu = "Crédit supérieur à:";
    this.jbp = "Gain supérieur à:";
    this.dlp = "L'autostart est arrêté au début du bonus.";
    this.wcu = "Partager sur Facebook";
    this.fev = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.crf = "Reality Check";
    this.shp = "Tu as demandé un Reality Check.";
    this.wlz = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
hor.prototype = new ojt;

function hqa() {
    this.jkb = "NAJMANJI ULOG JE";
    this.teh = "MAX ULOG";
    this.npo = "MIN. ULOG";
    this.uvy = "MAKS. ULOG";
    this.ssy = "ULOG";
    this.start = "START";
    this.dqz = "POMOĆ";
    this.gdk = "LISTA DOBITAKA";
    this.qxy = "IZBORNIK";
    this.ujz = "VIŠE|IGARA";
    this.ppf = "STOP";
    this.eqm = "KREDIT";
    this.yrx = "KRAJ IGRE";
    this.icz = "DOBITAK!";
    this.acj = "SRETNO!";
    this.win = "DOBITAK";
    this.blm = "ZADNJI DOBITAK";
    this.ucp = "UPIŠI";
    this.pse = "UPIŠI";
    this.ytt = "DUPLANJE";
    this.ldn = "AUTO|START";
    this.xkg = "UZMI|1/2";
    this.qhz = "IZLAZ";
    this.zuy = "PRETISNITE START";
    this.uuu = "BIRAJTE ULOG";
    this.qyd = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.cdp = "Ukubni dobitci";
    this.ydq = "Upozorenje";
    this.pre = "UKUBNI";
    this.hhn = "MOLIMO PRIČEKAJTE ...";
    this.tpf = "Više igara";
    this.ukl = "BRZINA";
    this.vov = "Kod kvara na uređaju nema jamstva.";
    this.uzi = "DALJE";
    this.mtf = "AUTOSTART";
    this.dbe = "LISTA DOBITAKA";
    this.qwj = "DUPLANJE";
    this.left = "LIJEVA";
    this.pfn = "DESNA";
    this.ok = "OK";
    this.bxh = "PREKID";
    this.opj = "Duplanje";
    this.fyc = "Uzmi 1/2";
    this.gnd = "PRAVILA IGRE";
    this.xma = "PRAVILA IGRE";
    this.ied = "Bonus!";
    this.ukv = "BONUS";
    this.awp = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.ggv = "NEMATE DOVOLJNO KREDITA.";
    this.iwz = "dobici";
    this.swa = "V A L U E";
    this.of = "OD";
    this.pzz = "ZA NASTAVAK DODIRNITE ZASLON";
    this.awz = "UČITAVANJA ...";
    this.bnj = "POVIJEST UČITAVANJA ...";
    this.dco = "Komunikacijska pogreška";
    this.mpl = "Dostigli ste jednu od graničnih vrijednosti!";
    this.aoy = "Dostigli ste maksimum besplatnih igara!";
    this.dyg = "Igra se zatvara";
    this.ozz = "Igra se iznova učitava";
    this.min = "OSVOJENO";
    this.error = "POGREŠKA";
    this.trm = "FREEPLAY";
    this.tgi = "AUTO";
    this.ybc = "ID IGRE";
    this.xvy = "Vrijeme igre";
    this.zcf = "posljednjih";
    this.umt = "igara";
    this.nco = "DEPOZIT";
    this.audio = "ZVUKA";
    this.itd = "GLAZBA";
    this.aqq = "PUN ZASLON";
    this.pvv = "PUN ZASLON";
    this.language = "JEZIKA";
    this.llt = "Ne prikazuj ponovo";
    this.chy = "Zvukovi se ne mogu učitati!";
    this.cxv = "Nedostaju resursi!";
    this.ugr = "Želite li igrati uz zvuk?";
    this.qtj = "POSTAVKE";
    this.kpi = "Uključite svoj uređaj!";
    this.hyp = "INFORMACIJE";
    this.mrl = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.frx = "Ova igra je optimizirana za Google Chrome.";
    this.zgr = "Molimo koristite se trenutnom inačicom";
    this.efe = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.exe = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.jpp = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.gxl = "Prilagodite sučelje igre svojim potrebama!";
    this.leu = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.itr = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.fwe = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.iyc = "Statistike";
    this.ubl = "Ukupno igara";
    this.qkw = "Ukupni ulog";
    this.nji = "Ukupno dobitaka";
    this.cyc = "Ukupno vrijeme igre";
    this.mms = "Pročitao sam ovu poruku";
    this.key = "IZLAZ|IZ IGRE";
    this.dac = "Povijest";
    this.hum = "Nema odigranih igara.";
    this.state = "STANJE";
    this.qjy = "Glavna igra";
    this.hmr = "Auto. pokupljeno";
    this.uva = "Pokupljeno";
    this.hnb = "Besplatne igre";
    this.ldz = "Dodatne okretaje";
    this.sps = "Bonus";
    this.ftf = "Prvo dijeljenje";
    this.xrz = "Drugo dijeljenje";
    this.xin = "Treće dijeljenje";
    this.lbj = "POSTAVKE AUTOMATSKE IGRE";
    this.qcc = "Ukupno igara:";
    this.xzr = "Zaustavljanje automatske igre";
    this.qnb = "Kredit manji od:";
    this.gfu = "Kredit veći od:";
    this.jbp = "Dobitak veći od:";
    this.dlp = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.wcu = "Podijeli na Facebooku";
    this.fev = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.crf = "Reality Check";
    this.shp = "Zatražili ste Reality Check.";
    this.wlz = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
hqa.prototype = new ojt;

function nla() {
    this.jkb = "MINIMA PUNTATA È";
    this.teh = "PUNTATA MASSIMA";
    this.npo = "MIN. PUNTATA";
    this.uvy = "MASS. PUNTATA";
    this.ssy = "PUNTATA";
    this.start = "START";
    this.dqz = "AIUTO";
    this.gdk = "TABELLA VINCITE";
    this.qxy = "MENU";
    this.ujz = "SCELTA|GIOCHI";
    this.ppf = "STOP";
    this.eqm = "CREDITO";
    this.yrx = "FINE PARTITA";
    this.icz = "VINCITORE!";
    this.acj = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.blm = "ULTIMA VINCITA";
    this.ucp = "INCASSA";
    this.pse = "INCASSA";
    this.ytt = "GAMBLE";
    this.ldn = "AUTO|START";
    this.xkg = "METÀ";
    this.qhz = "FINE";
    this.zuy = "PREMI START";
    this.uuu = "SCEGLI PUNTATA";
    this.qyd = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.cdp = "Totale vincita";
    this.ydq = "Attenzione";
    this.pre = "TOTALE";
    this.hhn = "ATTENDERE PREGO ...";
    this.tpf = "Scelta Giochi";
    this.ukl = "VELOCITÀ";
    this.vov = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.uzi = "CONTINUA";
    this.mtf = "AUTOSTART";
    this.dbe = "TABELLA VINCITE";
    this.qwj = "GAMBLE";
    this.left = "SINISTRA";
    this.pfn = "DESTRA";
    this.ok = "OK";
    this.bxh = "CANCELLA";
    this.opj = "Gamble";
    this.fyc = "Metà";
    this.gnd = "REGOLAMENTO";
    this.xma = "REGOLAMENTO";
    this.ied = "Bonus!";
    this.ukv = "BONUS";
    this.awp = "PREMI UN TASTO PER CONTINUARE";
    this.ggv = "CREDITO INSUFFICIENTE!";
    this.iwz = "vince";
    this.swa = "V A L U E";
    this.of = "DI";
    this.pzz = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.awz = "STA CARICANDO ...";
    this.bnj = "STA CARICANDO LA CRONACA ...";
    this.dco = "Errore di comunicazione";
    this.mpl = "Hai raggiunto uno dei limiti!";
    this.aoy = "Hai raggiunto il numero massimo di free games!";
    this.dyg = "La partita sta terminando";
    this.ozz = "La partita sta ripartendo";
    this.min = "VINTO";
    this.error = "ERRORE";
    this.trm = "FREEPLAY";
    this.tgi = "AUTO";
    this.ybc = "GAME ID";
    this.xvy = "Durata del gioco";
    this.zcf = "Ultime partite";
    this.umt = "";
    this.nco = "DEPOSITO";
    this.audio = "AUDIO";
    this.itd = "MUSICA";
    this.aqq = "SCHERMO INTERO";
    this.pvv = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.llt = "Non mostrare di nuovo";
    this.chy = "Suoni non caricabili!";
    this.cxv = "Mancano risorse!";
    this.ugr = "Giocare senza suoni?";
    this.qtj = "SETTAGGI";
    this.kpi = "Prego girare l'apparecchio!";
    this.hyp = "INFO";
    this.mrl = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.frx = "La partita è ottimizzata per Google Chrome.";
    this.zgr = "Prego utilizzare la versione attuale di";
    this.efe = "Purtroppo il presente browser non viene supportato interamente";
    this.exe = "Impossibile avviare questa partita nel modo freeplay!";
    this.jpp = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.gxl = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.leu = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.itr = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.fwe = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.iyc = "Statistica";
    this.ubl = "Totale partite";
    this.qkw = "Totale puntata";
    this.nji = "Totale vincita";
    this.cyc = "Totale durata del gioco";
    this.mms = "Ho letto il messaggio";
    this.key = "TERMINARE|LA PARTITA";
    this.dac = "Cronaca";
    this.hum = "Nessuna partita giocata.";
    this.state = "STATO";
    this.qjy = "Partita principale";
    this.hmr = "Raccolto autom.";
    this.uva = "Raccolto";
    this.hnb = "Bonusspin";
    this.ldz = "Respin";
    this.sps = "Bonus";
    this.ftf = "Primo deal";
    this.xrz = "Secondo deal";
    this.xin = "Terzo deal";
    this.lbj = "SETTAGGI AUTOSTART";
    this.qcc = "Numero di partite:";
    this.xzr = "Fermare l'autostart";
    this.qnb = "Credito più basso di:";
    this.gfu = "Credito più alto di:";
    this.jbp = "Vincita più alta di:";
    this.dlp = "L'autostart si ferma all'inizio del bonus.";
    this.wcu = "Dividi su facebook";
    this.fev = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.crf = "Reality Check";
    this.shp = "Avete richiesto un Reality Check.";
    this.wlz = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.btu = "Game break";
    this.eyy = "Game limits";
    this.vnu = "Self test";
    this.zlh = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
nla.prototype = new ojt;

function ima() {
    this.jkb = "MIN. INSATSEN ÄR";
    this.teh = "MAXIMAL INSATS";
    this.npo = "MIN. INSATS";
    this.uvy = "MAX. INSATS";
    this.ssy = "INSATS";
    this.start = "STARTA";
    this.dqz = "HJÄLP";
    this.gdk = "VINSTTABELL";
    this.qxy = "MENY";
    this.ujz = "FLER|SPEL";
    this.ppf = "STOPP";
    this.eqm = "KREDIT";
    this.yrx = "SPELET ÄR SLUT";
    this.icz = "VINNARE!";
    this.acj = "LYCKA TILL!";
    this.win = "VINN";
    this.blm = "SENASTE VINSTEN";
    this.ucp = "INKASSERA";
    this.pse = "INKASSERA";
    this.ytt = "DUBBLERA";
    this.ldn = "AUTO|START";
    this.xkg = "HÄLFTEN|1/2";
    this.qhz = "AVSLUTA";
    this.zuy = "TRYCK PÅ START";
    this.uuu = "VÄLJ INSATS";
    this.qyd = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.cdp = "Total Vinst";
    this.ydq = "Varning";
    this.pre = "TOTALT";
    this.hhn = "VAR VÄNLIG VÄNTA ...";
    this.tpf = "Fler spel";
    this.ukl = "TEMPO";
    this.vov = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.uzi = "FORTSÄTT";
    this.mtf = "AUTOSTART";
    this.dbe = "VINSTTABELL";
    this.qwj = "DUBBLERA";
    this.left = "VÄNSTER";
    this.pfn = "HÖGER";
    this.ok = "OK";
    this.bxh = "AVBRYT";
    this.opj = "Dubblering";
    this.fyc = "Hälften";
    this.gnd = "SPELREGLER";
    this.xma = "SPELREGLER";
    this.ied = "Bonus!";
    this.ukv = "BONUS";
    this.awp = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.ggv = "FÖR LÅGT SALDO!";
    this.iwz = "vinster";
    this.swa = "V A L U E";
    this.of = "AV";
    this.pzz = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.awz = "LÄSER ...";
    this.bnj = "LÄSER IN HISTORIKEN ...";
    this.dco = "Kommunikationsfel";
    this.mpl = "Du har nått en av gränserna!";
    this.aoy = "Du har nått det maximala antalet gratisspel!";
    this.dyg = "Spelet avslutas";
    this.ozz = "Spelet startas om";
    this.min = "VUNNA";
    this.error = "FEL";
    this.trm = "GRATISSPEL";
    this.tgi = "AUTO";
    this.ybc = "SPEL-ID";
    this.xvy = "SPELTID";
    this.zcf = "senaste";
    this.umt = "spelen";
    this.nco = "INSÄTTNING";
    this.audio = "LJUD";
    this.itd = "MUSIK";
    this.aqq = "HELSKÄRM";
    this.pvv = "HELSKÄRM";
    this.language = "SPRÅK";
    this.llt = "Visa inte igen";
    this.chy = "Ljud kan inte laddas!";
    this.cxv = "Resurser saknas!";
    this.ugr = "Spela utan ljud?";
    this.qtj = "INSTÄLLN.";
    this.kpi = "Vänd din enhet!";
    this.hyp = "INFO";
    this.mrl = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.frx = "Det här spelet är optimerat för Google Chrome.";
    this.zgr = "Använd den senaste versionen av";
    this.efe = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.exe = "Det här spelet kan inte startas i gratisspelsläget!";
    this.jpp = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.gxl = "Anpassa spelgränssnittet efter dina behov!";
    this.leu = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.itr = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.fwe = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.iyc = "Statistik";
    this.ubl = "Totalt antal spel";
    this.qkw = "Totalinsats";
    this.nji = "Totalvinst";
    this.cyc = "Total speltid";
    this.mms = "Jag har läst detta meddelande";
    this.key = "AVSLUTA|SPELET";
    this.dac = "Historik";
    this.hum = "Inga spel har spelats.";
    this.state = "STATUS";
    this.qjy = "Huvudspel";
    this.hmr = "Auto. Inkasserat";
    this.uva = "Inkasserat";
    this.hnb = "Bonusspinn";
    this.ldz = "Respin";
    this.sps = "Bonus";
    this.ftf = "Första given";
    this.xrz = "Andra given";
    this.xin = "Tredje given";
    this.lbj = "AUTOSTARTINSTÄLLNINGAR";
    this.qcc = "Antal spelrundor:";
    this.xzr = "Stoppa autospel";
    this.qnb = "Saldo lägre än:";
    this.gfu = "Saldo högre än:";
    this.jbp = "Vinst högre än:";
    this.dlp = "Autospelen kommer att stoppas då bonusen startar.";
    this.wcu = "Dela på Facebook";
    this.fev = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.crf = "Reality Check";
    this.shp = "Du har begärt att få en statusuppdatering.";
    this.wlz = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.btu = "Spelpaus";
    this.eyy = "Spelgränser";
    this.vnu = "Självtest";
    this.zlh = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
ima.prototype = new ojt;

function kck() {
    this.onv = "HELD";
    this.oar = "RED";
    this.mob = "BLACK";
    this.tpr = "HIGH";
    this.swj = "LOW";
    this.aeg = "DEAL CARDS";
    this.uop = "HOLD CARDS";
    this.ufy = "DRAW CARDS";
    this.rbk = "five equivalent cards (only possible with a wild card)";
    this.jwp = "ace - king - queen - jack - ten of the same suit";
    this.rgz = "STRAIGHT with cards of the same suit";
    this.bya = "four cards of the same rank";
    this.kvv = "combination of THREE OF A KIND and a PAIR";
    this.fqr = "five cards of the same suit";
    this.odd = "five cards in rank order, but not of the same suit";
    this.vzf = "three cards of the same rank";
    this.bqz = "two distinct pairs and any 5th card";
    this.dfy = "two jacks, queens, kings or aces";
    this.rzr = "four cards of the same suit with any 5th card";
    this.dii = "straight with ace in the center";
    this.uta = "combination of figures which contains jack, queen and king";
    this.jkx = "sequence with even or odd successive values";
    this.rvx = "ROYAL FLUSH containing a wild card";
    this.lam = "four twos with any other card";
    this.ejy = "four 5's, 6's, 7's, 8's, 9's, 10's, JACK's, QUEEN's OR KING's";
    this.qtr = "four 2's, 3's or 4's with any other card";
    this.izi = "four aces with any other card";
    this.jmu = "four 2's, 3's OR 4's with an Ace 2,3 or 4";
    this.yyh = "four Aces with 2, 3 or 4";
    this.pov = "two Kings or Aces";
    this.pnv = "two tens, jacks, queens, kings or aces";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "GAMBLE AGAIN OR COLLECT?";
    this.ral = "SELECT A CARD";
    this.ouz = "If selected card is higher than dealer: WIN!";
    this.ebg = "If selected card is lower than dealer: lose";
    this.ksm = "If selected card is same as dealer: tie";
    this.vim = "ACE is highest, two is lowest, no wild cards.";
    this.bck = "TIE";
    this.ptk = "PLAYER";
    this.gan = "DEALER";
    this.toq = "BEAT THE DEALER TO DOUBLE THE WIN";
    this.rez = "SELECT THE CORRECT VALUE TO DOUBLE THE WIN"
}
kck.prototype = new ouc;

function cxy() {
    this.onv = "Удержать";
    this.oar = "КРАСНЫЙ";
    this.mob = "BLACK";
    this.tpr = "КРУПНАЯ";
    this.swj = "МЕЛКАЯ";
    this.aeg = "РАЗДЕЛИТЬ КАРТЫ";
    this.uop = "УДЕРЖАТЬ КАРТЫ";
    this.ufy = "ВЗЯТЬ КАРТЫ";
    this.rbk = "Пять карт одного номинала (одна из них джокер)";
    this.jwp = "Туз - король - дама - валет - 10 одной масти";
    this.rgz = "STRAIGHT одной масти";
    this.bya = "Четыре карты одного номинала";
    this.kvv = "Три карты одного номинала и одна пара";
    this.fqr = "Пять карт одной масти";
    this.odd = "Пять карт по порядку, но не одной масти";
    this.vzf = "Три карты одного номинала";
    this.bqz = "Две пары и одна допол. карта";
    this.dfy = "Четыре карты одной масти и одна допол. карта";
    this.rzr = "Два валета, две дамы, два короля или туза";
    this.dii = "Пять карт по порядку через туз (3-2-Т-К-Д)";
    this.uta = "Комбинация из карт с картинками: две валета, две дамы и король";
    this.jkx = "Пять четных или пять не четных карт по порядку";
    this.rvx = "ROYAL FLUSH с джокером";
    this.lam = "Четыре карты 2 и одна допол. карта";
    this.ejy = "Четыре карты 5, 6, 7, 8, 9, 10, валет, дама или король";
    this.qtr = "Четыре карты 2, 3 или 4 с любой допол. картой.";
    this.izi = "Четыре туза и одна допол. карта";
    this.jmu = "Четыре двойки, тройки или четверки с тузом, двойкой, тройкой или четверкой";
    this.yyh = "Четыре туза с 2, 3 или 4";
    this.pov = "Два короля или туза";
    this.pnv = "Две карты 10, валет, дама, король или туз";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "Удвоить или взять?";
    this.ral = "ВЫБЕРИТЕ КАРТУ";
    this.ouz = "Если Ваши карты крупнее, чем карты дилера, Вы выиграете!";
    this.ebg = "Если Ваши карты мельче, чем карты дилера, Вы не выиграете";
    this.ksm = "Если достоинство Ваших карт равно картам дилера, это означает ничью";
    this.vim = "ТУЗ самая крупная, ДВА самая мелкая карта, нет джокеров.";
    this.toq = "ВЫИГРАЙТЕ У РАЗДАЮЩЕГО, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.bck = "РОВНО";
    this.ptk = "ИГРОК";
    this.gan = "DEALER";
    this.rez = "ВЫБЕРИТЕ ПРАВИЛЬНЫЙ НОМИНАЛ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ."
}
cxy.prototype = new dep;

function ngt() {
    this.onv = "PARAR";
    this.oar = "ROJO";
    this.mob = "NEGRO";
    this.tpr = "ALTO";
    this.swj = "BAJO";
    this.aeg = "DAR CARTAS";
    this.uop = "RETENER CARTAS";
    this.ufy = "DAR CARTAS";
    this.rbk = "Cinco cartas iguales (sólo posible con el comodin)";
    this.jwp = "As - rey - dama - sota - 10 del mismo color";
    this.rgz = "STRAIGHT del mismo color";
    this.dii = "Escalera con as en el centro";
    this.uta = "Combinación de figuras con sota, dama y rey";
    this.bya = "Cuatro cartas del mismo valor";
    this.jkx = "Secuencia de cinco cartas pares o impares de valores sucesivos";
    this.kvv = "Combinación entre THREE OF A KIND y PAIR";
    this.fqr = "Cinco cartas del mismo color";
    this.odd = "Cinco cartas puestas en orden pero no del mismo color";
    this.vzf = "Tres cartas equivalentes";
    this.bqz = "Dos pares diferentes y una quinta carta";
    this.dfy = "Cuatro cartas del mismo color con una quinta carta";
    this.rzr = "Dos sotas, damas, reyes o ases";
    this.rvx = "ROYAL FLUSH con comodin";
    this.lam = "Cuatro doses con otra carta";
    this.ejy = "Cuatro 5, 6, 7, 8, 9, 10, sotas, damas o reyes";
    this.qtr = "Cuatro de dos, de tres o de cuatro con otra carta";
    this.izi = "Cuatro ases con otra carta";
    this.jmu = "Cuatro 2, 3 o 4 con un as, una 2, 3 o 4";
    this.yyh = "Cuatro ases con una 2, 3 o 4";
    this.pov = "Dos reyes o dos ases";
    this.pnv = "Dos 10, sotas, damas, reyes o ases";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "Arriesgar otra vez o tomar el premio?";
    this.ral = "Tome una carta";
    this.ouz = "Si la carta es más alta que la del crupier: hay premio!";
    this.ebg = "Si la carta elegida es más baja que la del crupier: no hay premio!";
    this.ksm = "Si la carta elegida es la misma que la del crupier: QUEDA IGUAL";
    this.vim = "ACE es la más alta, dos es la más baja, no hay comodin.";
    this.toq = "GANAR LA MANO PARA DOBLAR EL PREMIO";
    this.rez = "SELECCIONAR EL VALOR CORRECTO PARA DOBLAR EL PREMIO";
    this.bck = "IGUAL";
    this.ptk = "JUGADOR";
    this.gan = "MANO"
}
ngt.prototype = new qpg;

function sjt() {
    this.onv = "HALTEN";
    this.oar = "ROT";
    this.mob = "SCHWARZ";
    this.tpr = "HOCH";
    this.swj = "TIEF";
    this.aeg = "KARTEN GEBEN";
    this.uop = "KARTEN HALTEN";
    this.ufy = "KARTEN GEBEN";
    this.rbk = "Fünf gleiche Karten (nur mit Joker möglich)";
    this.jwp = "Ass - König - Dame - Buben - 10er der selben Farbe";
    this.rgz = "STRAIGHT in der selben Farbe";
    this.bya = "Vier wertgleiche Karten";
    this.kvv = "Kombination aus THREE OF A KIND und PAIR";
    this.fqr = "Fünf Karten mit der selben Farbe";
    this.odd = "Fünf Karten in geordneter Reihenfolge, ohne der selben Farbe";
    this.vzf = "Drei gleichwertige Karten";
    this.bqz = "Zwei verschiedene Paare und eine 5. Karte";
    this.dfy = "Zwei Buben, Damen, Könige oder Assen";
    this.rzr = "Vier Karten der selben Farbe mit einer 5. Karte";
    this.dii = "Straight mit Ass in der Mitte";
    this.uta = "Bildkarten welche Bube, Dame und König enthalten";
    this.jkx = "Fünf gerade oder ungerade aufeinanderfolgende Werte";
    this.rvx = "ROYAL FLUSH mit Joker";
    this.lam = "Vier Zweier mit einer anderen Karte";
    this.ejy = "Vier 5er, 6er, 7er, 8er, 9er, 10er, Buben, Damen oder Könige";
    this.qtr = "Vier 2er,3er oder 4er mit einer anderen Karte";
    this.izi = "Vier Assen mit einer anderen Karte";
    this.jmu = "Vier 2er, 3er oder 4er mit einer As, einem 2er, 3er oder 4er";
    this.yyh = "Vier Assen mit einer 2, 3 oder 4";
    this.pov = "Zwei Könige oder zwei Assen";
    this.pnv = "Zwei 10er, Buben, Damen, Könige oder Assen";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "NOCHEINMAL GAMBELN ODER GEWINN NEHMEN?";
    this.ral = "NIMM EINE KARTE";
    this.ouz = "Wenn die gewählte Karte höher ist als die vom Dealer: Gewinn!";
    this.ebg = "Wenn die gewählte Karte niedriger ist als die vom Dealer: Kein Gewinn";
    this.ksm = "Wenn die gewählte Karte die selbe ist wie die vom Dealer: GLEICH";
    this.vim = "Ass ist die höchste Karte, Zwei die niedrigste, keine Joker.";
    this.toq = "BESIEGE DEN GEBER UM DEN GEWINN ZU VERDOPPELN";
    this.rez = "WÄHLE DEN RICHTIGEN WERT UM DEN GEWINN ZU VERDOPPELN";
    this.bck = "GLEICH";
    this.ptk = "SPIELER";
    this.gan = "GEBER"
}
sjt.prototype = new vkb;

function ixd() {
    this.onv = "TUTUNUZ";
    this.oar = "KIRMIZI";
    this.mob = "SIYAH";
    this.tpr = "YÜKSEK";
    this.swj = "DERIN";
    this.aeg = "KARTLARI VERİNİZ";
    this.uop = "KARTLARI TUTUNUZ";
    this.ufy = "KARTLARI VERİNİZ";
    this.rbk = "Beş ayni kartlar (tek jokerle mümkün)";
    this.jwp = "Ass - papaz - dama - valeler - 10lar ayni renkli";
    this.rgz = "STRAIGHT ayni renkli";
    this.bya = "Dört ayni değerde olan kartlar";
    this.kvv = "Kombinasyon THREE OF A KIND ve PAIR le";
    this.fqr = "Beş ayni renkli kartlar";
    this.odd = "Beş kartlar düzenli bir sıralamada, ayni renk siz";
    this.vzf = "Üç ayni değerinde olan kartlar";
    this.bqz = "Iki değişik çiftle ve bir 5. kart";
    this.dfy = "Iki valeler, damalar, papazlar veya asslar";
    this.rzr = "Ayni renkten dört kart ve bir 5. kart";
    this.dii = "As’ı ortada olan Straight";
    this.uta = "Vale, kız ve papaz gösteren resimli kartlar";
    this.jkx = "Arka arkaya beş çift veya tek değer";
    this.rvx = "ROYAL FLUSH  joker le";
    this.lam = "Dört ikili başka bir kartla";
    this.ejy = "Dört 5’li, 6’lı, 7’li, 8’li, 9’lu, 10’lu, vale, kız veya papaz";
    this.qtr = "Dört 2ler,3ler veya 4ler başka bir kartla";
    this.izi = "Dört as başka bir kartla";
    this.jmu = "Bir as ile bir 2'li, 3'lü veya 4'lü ile dört adet 2'li, 3'lü veya 4'lü";
    this.yyh = "2,3 veya 4 ile dört as";
    this.pov = "Iki papazlar veya iki asslar";
    this.pnv = "Iki 10lar, valeler, damalar, papazlar veya asslar";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "Bir daha riziko veya kazançı alınız?";
    this.ral = "Bir kart al";
    this.ouz = "Seçilen kart Dealer’inkinden yüksekse: Kazanç!";
    this.ebg = "Seçilen kart Dealer’inkinden düşükse: Kazanç yok";
    this.ksm = "Seçilen kart Dealer’inkiyle aynı ise: PAT";
    this.vim = "ACE is highest, two is lowest, Joker yok";
    this.toq = "KAĞITLARI DAĞITANI YENEREK KAZANCINI İKİYE KATLAYABİLİRSİN";
    this.bck = "AYNI";
    this.ptk = "OYUNCU";
    this.gan = "DEALER";
    this.rez = "DOĞRU DEĞERİ SEÇEREK KAZANCINI İKİYE KATLARSIN"
}
ixd.prototype = new uxe;

function ldy() {
    this.onv = "DRŽET";
    this.oar = "CERVENÁ";
    this.mob = "CERNÁ";
    this.tpr = "VELKÁ";
    this.swj = "MALÁ";
    this.aeg = "DÁT KARTY";
    this.uop = "KARTY DRŽET";
    this.ufy = "DÁT KARTY";
    this.rbk = "Pet stejných karet(možné pouze s Jokerem)";
    this.jwp = "Eso - král - královna - kluk - desítka stejné barvy";
    this.rgz = "STRAIGHT s kartami stejné barvy";
    this.bya = "Ctyri karty stejné hodnoty";
    this.kvv = "Kombinace z THREE OF A KIND a PAIR";
    this.fqr = "Pet karet stejné barvy";
    this.odd = "Pet karet usporádaných v rade, ale ne stejné barvy";
    this.vzf = "Tri karty stejné hodnoty";
    this.bqz = "Dve odlišné dvojice a 5. karta";
    this.dfy = "Dva klucii, královny, králové nebo esa";
    this.rzr = "Ctyrii karty stejné barvy s 5. kartou";
    this.dii = "postupka s esem uprostred";
    this.uta = "kombinace obsahující pouze postavy (jack, queen  a king)";
    this.jkx = "postupka vytvorená ze sudých nebo lichých za sebou následujících císel";
    this.rvx = "ROYAL FLUSH s Jokerem";
    this.lam = "Ctyri dvojky s jinou kartou";
    this.ejy = "Čtyři 5ky, 6ky, 7ky,8ky,9ky,10ky, kluci,královny nebo králové";
    this.qtr = "Čtyři 2ky,3ky nebo 4ky s další kartou";
    this.izi = "Čtyri Esa s další kartou";
    this.jmu = "Čtyři 2, 3 nebo 4 s Esem, 2,3 nebo 4";
    this.yyh = "Čtyři Esa s jednou 2,3 nebo 4";
    this.pov = "Dva Králové nebo dvě Esa";
    this.pnv = "Dve desítky, kluci, královny, králové nebo esa";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "HRÁT ZNOVU NEBO VZÍT VÝHRU?";
    this.ral = "ZVOL KARTU";
    this.ouz = "Je-li zvolená karta vyšší než dealerova: Výhra!";
    this.ebg = "Je-li  zvolená karta nižšií než dealerova: Žádná výhra!";
    this.ksm = "Je-li  zvolená karta shodná s dealerovou: nerozhodný výsledek";
    this.vim = "Eso je nejvyšší, dvě je nejnižší, žádné divoké karty.";
    this.toq = "PORAZIT DEALERA KE ZDVOJNÁSOBENÍ VÝHRY";
    this.rez = "VYBRAT SPRÁVNOU HODNOTU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.bck = "STEJNÉ";
    this.ptk = "HRÁČ";
    this.gan = "DEALER"
}
ldy.prototype = new eat;

function rpx() {
    this.onv = "HOIA";
    this.oar = "PUNANE";
    this.mob = "MUST";
    this.tpr = "KÕRGE";
    this.swj = "MADAL";
    this.aeg = "JAGA KAARDID";
    this.uop = "HOIA KAARTE";
    this.ufy = "JAGA KAARDID";
    this.rbk = "viis võrdväärset kaarti (võimalik ainult koos Wild kaardiga)";
    this.jwp = "sama masti äss - kuningas - emand - soldat - kümme";
    this.rgz = "RIDA samavärvi kaartidest";
    this.bya = "neli sama väärtusega kaarti";
    this.kvv = "kombinatsioon KOLMIK ja PAAR";
    this.fqr = "viis sama värvi kaarti";
    this.odd = "viis järjestikust, kuid erivärvi kaarti";
    this.vzf = "kolm võrdväärset kaarti";
    this.bqz = "kaks kindlat paari ja ükskõik milline viies kaart";
    this.dfy = "kaks soldatit, emandat, kuningat või ässa";
    this.rzr = "neli sama värvi kaarti koos ükskõik millise viienda kaardiga";
    this.rvx = "KUNINGLIK MASTIRIDA, mis sisaldab Wild kaarti";
    this.lam = "neli kahte koos ükskõik millise muu kaardiga";
    this.ejy = "neli viite, kuute, seitset, kaheksat, üheksat, kümmet, Soldatit, Emandat või Kuningat";
    this.qtr = "neli kahte, kolme või nelja koos ükskõik millise muu kaardiga";
    this.izi = "neli ässa ükskõik millise muu kaardiga";
    this.jmu = "Neli 2-te, 3-e või 4-ja koos 2, 3, või 4";
    this.yyh = "Neli ässa ja 2, 3, või 4";
    this.pov = "kaks Kuningat või Ässa";
    this.pnv = "kaks kümmet, soldatit, emandat, kuningat või ässa";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.bck = "VIIK";
    this.ptk = "PLAYER";
    this.gan = "DEALER";
    this.dwu = "MÄNGI VEEL VÕI VÕTA VÕIT?";
    this.ouz = "Kui valitud kaart on suurem kui diileril: OLED VÕITNUD!";
    this.ebg = "Kui valitud kaart on väiksem kui diileril: kaotad";
    this.ksm = "Kui valitud kaart on diileri kaardiga võrdne: viik";
    this.vim = "ÄSS on kõrgeim, kaks madalaim, metsikuid kaarte ei ole.";
    this.dii = "rida ässaga keskel";
    this.uta = "kombinatsioon soldatist, emandast ja kuningast";
    this.jkx = "kaheste vahedega rida";
    this.ral = "VALI KAART";
    this.toq = "VÕIDA DIILERIT, ET KAHEKORDISTADA OMA VÕIT";
    this.rez = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄÄRTUS"
}
rpx.prototype = new cbv;

function mem() {
    this.onv = "ΚΡΑΤΗΣΤΕ";
    this.oar = "ΚΟΚΚΙΝΟ";
    this.mob = "ΜΑΥΡΟ";
    this.tpr = "ΥΨΗΛΟ";
    this.swj = "ΧΑΜΗΛΟ";
    this.aeg = "ΜΟΙΡΑΣΤΕ ΧΑΡΤΙΑ";
    this.uop = "ΚΡΑΤΗΣΤΕ ΧΑΡΤΙΑ";
    this.ufy = "ΤΡΑΒΗΞΤΕ ΧΑΡΤΙΑ";
    this.rbk = "πέντε ίδια χαρτιά (μόνη πιθανότητα με το Joker)";
    this.jwp = "άσσος - ρήγας - ντάμα - βαλές - δέκα από το ίδιο χρώμα";
    this.rgz = "STRAIGHT με χαρτιά από το ίδιο χρώμα";
    this.bya = "τέσσερα χαρτιά με την ίδια αξία";
    this.kvv = "συνδυασμός από THREE OF A KIND και ένα PAIR";
    this.fqr = "πέντε χαρτιά με το ίδιο χρώμα";
    this.odd = "πέντε χαρτιά σε αύξουσα σειρά, αλλά όχι ίδιο χρώμα";
    this.vzf = "τρία χαρτιά ίδιας αξίας";
    this.bqz = "δύο διαφορετικά ζευγάρια και οποιοδήποτε πέμπτο χαρτί";
    this.dfy = "δύο βαλέδες, ντάμες, ρήγες ή άσσοι";
    this.rzr = "τέσσερα χαρτιά από το ίδιο χρώμα μαζί με κάθε πέμπτη κάρτα";
    this.dii = "Straight με άσσο στο κέντρο";
    this.uta = "συνδιασμός από φιγούρες που βγαίνει βαλές, ντάμα και ρήγας";
    this.jkx = "σειρά μαζί με μονά ή ζυγά έχει διαδοχική αξία";
    this.rvx = "ROYAL FLUSH περιέχει και Joker";
    this.lam = "τέσσερα δυάρια μαζί με κάθε άλλη κάρτα";
    this.ejy = "τέσσερα 5's, 6's,7's, 8's, 9's, 10's, ΒΑΛΕΔΕΣ, ΝΤΑΜΕΣ ή ΡΗΓΕΣ";
    this.qtr = "Τέσσερα 2's ή 4's μαζί με κάθε άλλη κάρτα";
    this.izi = "τέσσερις άσσοι μαζί με κάθε άλλη κάρτα";
    this.jmu = "Τέσσερα 2άρια, 3άρια ή 4άρια μαζί με έναν Άσσο, ένα 2άρι, 3άρι ή 4άρι";
    this.yyh = "Τέσσερις άσσοι μαζί με ένα 2, 3 ή 4";
    this.pov = "δύο Ρήγες ή Άσσοι";
    this.pnv = "δύο δεκάρια, βαλέδες, ντάμες, ρήγες ή άσσοι";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.toq = "ΚΕΡΔΙΣΤΕ ΤΟΝ ΝΤΙΛΕΡ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.bck = "ΙΣΟΠΑΛΙΑ";
    this.ptk = "ΠΑIΧΤΗΣ";
    this.gan = "ΝΤHΛΕΡ";
    this.dwu = "ΞΑΝA ΡIΣΚΟ H ΠΑΡΑΛΑΒH;";
    this.ouz = "Αν έχετε χαρτί μεγαλύτερο από τον κρουπιέρη: ΚΕΡΔΙΖΕΤΕ!";
    this.ebg = "Αν έχετε χαρτί μικρότερο από τον κρουπιέρη: ΧΑΝΕΤΕ!";
    this.ksm = "Αν έχετε το ίδιο χαρτί με τον κρουπιέρη: ισοβαθμήτε";
    this.vim = "Ασσος είναι το μεγαλύτερο, δύο είναι το μικρότερο, δεν υπάρχει Τζόκερ";
    this.ral = "ΕΠΙΛEΞΤΕ ΚAΡΤΑ";
    this.rez = "ΕΠΙΛΕΞΤΕ ΤΗ ΣΩΣΤΗ ΑΞΙΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ"
}
mem.prototype = new psm;

function xdo() {
    this.onv = "ЗАДЪРЖАНИ";
    this.oar = "ЧЕРВЕНА";
    this.mob = "ЧЕРНА";
    this.tpr = "ГОЛЯМА";
    this.swj = "МАЛКА";
    this.aeg = "РАЗДАВАНЕ НА КАРТИТЕ";
    this.uop = "ЗАПАЗЕТЕ КАРТИ";
    this.ufy = "ИЗТЕГЛЕТЕ КАРТИ";
    this.rbk = "пет еднакви карти (само с джокер)";
    this.jwp = "Асе - Поп - Дама - Вале - 10 от един и същ цвят";
    this.rgz = "КЕНТА с карти от един и същ цвят";
    this.bya = "четири карти с една и съща стойност";
    this.kvv = "комбинация от три еднакви карти и един чифт";
    this.fqr = "пет еднакви карти";
    this.odd = "пет поредни карти, но от различен цвят";
    this.vzf = "три карти с една и съща стойност";
    this.bqz = "две различни двойки и някоя друга 5-та карта";
    this.dfy = "две Валета, Дами, Попа или Аса";
    this.rzr = "четири карти от един и същ цвят с някоя друга карта";
    this.rvx = "КЕНТ ФЛЕШ РОЯЛ с джокер";
    this.lam = "четири 2-ки с някоя друга карта";
    this.ejy = "четири 5-ци, 6-ци, 7-ци, 8-ци, 9-ки, 10-ки, ВАЛЕТА, ДАМИ или ПОПОВЕ";
    this.qtr = "четири 2-ки, 3-ки или 4-ки с някоя друга карта";
    this.izi = "четири Аса с някоя друга карта";
    this.jmu = "четири 2-ки, 3-ки, или 4-ки с Ас, 2-ка, 3-ка или 4-ка";
    this.yyh = "четири Аса с 2-ка, 3-ка или 4-ка";
    this.pov = "два Попа или Аса";
    this.pnv = "две 10-ки, Валета, Дами, Попа или Аса";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.bck = "НЕРЕШЕНО";
    this.ptk = "ИГРАЧ";
    this.gan = "ДИЛЪР";
    this.dwu = "ДУБЛИРАЙТЕ ОТНОВО ИЛИ ПРИБЕРЕТЕ?";
    this.ouz = "Ако избраната карта е по-голяма от картата на дилъра:ПЕЧЕЛИТЕ!";
    this.ebg = "Ако избраната карта е по-малка от дилъровата:ГУБИТЕ";
    this.ksm = "Ако избраната е същата:Нерешено";
    this.vim = "Ас е най-голямата, 2-ка е най-малката, без джокер карти.";
    this.dii = "пет поредни карти с Ас в средата";
    this.uta = "комбинация от карти в които има(K -Q -J -Поп, Дама, Вале)";
    this.jkx = "пет карти с четни или нечетни стойности";
    this.ral = "ЗАДРЪЖТЕ КАРТИ";
    this.toq = "ПОБЕДИ ДИЛЪРА, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.rez = "ИЗБЕРИ ПРАВИЛНАТА СТОЙНОСТ, ЗА ДА УДВОИШ ПЕЧАЛБАТА"
}
xdo.prototype = new nbh;

function oux() {
    this.onv = "დაიჭირეთ";
    this.oar = "წითელი";
    this.mob = "შავი";
    this.tpr = "მაღალი";
    this.swj = "დაბლა";
    this.aeg = "აიღეთ ბარათი";
    this.uop = "დაიჭირეთ ბარათები";
    this.ufy = "აიღეთ ბარათი";
    this.rbk = "ხუთი იგივე მნიშვნელობის კარტი (შესაძლოა მოპოვებულ იქნას მხოლოდ ჯოკერით)";
    this.jwp = "იგივე ფერის ტუზი - მეფე - დამა - ვალეტი - ათიანი";
    this.rgz = "Straight იგივე ფერის კარტებით";
    this.bya = "იგივე იერარქიის ოთხი კარტი";
    this.kvv = "Three Of A Kind-ისა და ერთი Pair-ის კომბინაცია";
    this.fqr = "ხუთი ერთი და იგივე ფერის კარტი";
    this.odd = "ხუთი თანმიმდევრული კარტი";
    this.vzf = "სამი თანაბარი კარტი";
    this.bqz = "ორი ორ თანაბარ კარტთან ერთად";
    this.dfy = "ორი თანაბარი კარტი ვალეტით ზევითკენ";
    this.rzr = "ოთხი სხვადასხვა ერთი და იგივე ფერის კარტი";
    this.dii = "Straight შუაში ტუზით";
    this.uta = "5 ნახატიანი კარტი";
    this.jkx = "Straight სადაც ყოველი მეორე კარტი აკლია";
    this.rvx = "ROYAL FLUSH რომელიც შეიცავს ჯოკერს";
    this.lam = "ოთხი ორიანი ნებისმიერ სხვა კარტთან ერთად";
    this.ejy = "ოთხი 5-იანი, 6-იანი, 7-იანი, 8-იანი, 9-იანი, 10-იანი, ვალეტი, დამა ან მეფე";
    this.qtr = "ოთხი 2-იანი, 3-იანი ან 4-იანი ნებისმიერ სხვა კარტთან ერთად";
    this.izi = "ოთხი ტუზი ნებისმიერ სხვა კარტთან ერთად";
    this.jmu = "ოთხი 2-იანი, 3-იანი ან 4-იანი ტუზთან 2-იანთან, 3-იანთან ან 4-იანთან ერთად";
    this.yyh = "ოთხი ტუზი 2, 3 ან 4-თან ერთად";
    this.pov = "ორი მეფე ან ტუზი";
    this.pnv = "ორი ათიანი, ვალეტი, დამა, მეფე ან ტუზი";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "ითამაშეთ ან აიღეთ მოგება?";
    this.ral = "აირჩიეთ კარტი";
    this.ouz = "თუ არჩეული კარტი დილერის კარტზე უფრო მაღალია: თქვენ მოიგებთ!";
    this.ebg = "თუ არჩეული კარტი დილერის კარტზე უფრო დაბალია: თქვენ წააგებთ";
    this.ksm = "თუ არჩეული კარტი იგივეა რაც დილერს აქვს: ანგარიშია ფრე";
    this.vim = "ტუზი არის ყველაზე მაღალი, ორიანი ყველაზე დაბალი, ჯოკერის კარტი არ თამაშდება.";
    this.bck = "ფრე";
    this.ptk = "მოთამაშე";
    this.gan = "დილერი";
    this.toq = "მოუგეთ დილერს რომ გააორმაგოთ მოგება";
    this.rez = "აირჩიეთ სწორი სიდიდე რომ გააორმაგოთ მოგება"
}
oux.prototype = new xjf;

function ezn() {
    this.onv = "TART";
    this.oar = "PIROS";
    this.mob = "FEKETE";
    this.tpr = "MAGAS";
    this.swj = "ALACSONY";
    this.aeg = "KÉRJEN LAPOKAT";
    this.uop = "TARTSON LAPOKAT";
    this.ufy = "KÉRJEN LAPOKAT";
    this.rbk = "öt egyforma lap (az ötödik a JOKER)";
    this.jwp = "ász - király - dáma - bubi - tizes egy színben";
    this.rgz = "SOR egyforma színű lapokból";
    this.bya = "négy egyforma lap";
    this.kvv = "három és kettő egyforma lap";
    this.fqr = "öt egyforma színű lap";
    this.odd = "öt sorban következő lap nem egyforma színben";
    this.vzf = "három egyforma lap";
    this.bqz = "kettő pár és még egy lap";
    this.dfy = "kettő Bubi, Dáma, Király vagy Ász";
    this.rzr = "négy egyforma és egy másmilyen színű lap";
    this.dii = "5 sorban következő lap A-val a középen";
    this.uta = "5 'képes' lap";
    this.jkx = "5 egymást követő páros vagy páratlan lap";
    this.rvx = "ROYAL FLUSH amelyben van Joker";
    this.lam = "négy kettes és még egy lap";
    this.ejy = "négy 5-ös, 6-os, 7-es, 8-as, 9-es, 10-es, Bubi, Dáma vagy Király";
    this.qtr = "négy kettes, hármas vagy négyes + egy lap";
    this.izi = "négy ász és még egy lap";
    this.jmu = "négy 2, 3 vagy 4 meg egy ász, 2, 3 vagy 4";
    this.yyh = "négy Ász és 2, 3 vagy 4";
    this.pov = "kettő Király vagy Ász";
    this.pnv = "kettő tizes, bubi, dáma, király vagy ász";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "SZOROZZA VAGY FELÍRJA?";
    this.ral = "VÁLASSZON EGY LAPOT";
    this.ouz = "Ha a kiválasztott lap az osztó lapjától nagyobb: NYERT!";
    this.ebg = "Ha a kiválasztott lap az osztó lapjától kisebb: veszített";
    this.ksm = "Ha a két lap egyforma: döntetlen";
    this.vim = "Az ÁSZ a legnagyobb a kettes pedig a legkisebb lap.";
    this.bck = "DÖNTETLEN";
    this.ptk = "JÁTÉKOS";
    this.gan = "OSZTÓ";
    this.toq = "GYŐZZE LE AZ OSZTÓT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.rez = "VÁLASSZA A MEGFELELŐT, HOGY MEGDUPLÁZZA A NYEREMÉNYT"
}
ezn.prototype = new vxt;

function mrh() {
    this.onv = "ŢINERE";
    this.oar = "ROŞU";
    this.mob = "NEGRU";
    this.tpr = "MARE";
    this.swj = "MICĂ";
    this.aeg = "ÎMPĂRŢIRE CĂRŢI";
    this.uop = "ŢINERE CĂRŢI";
    this.ufy = "ÎMPĂRŢIRE CĂRŢI";
    this.rbk = "Cinci cărţi identice (posibil numai cu joker)";
    this.jwp = "As - rege - damă - valet - zece de aceeaşi culoare";
    this.rgz = "STRAIGHT cu cărţi de aceeaşi culoare";
    this.bya = "Patru cărţi de aceeaşi valoare";
    this.kvv = "Combinaţie din THREE OF A KIND şi PAIR";
    this.fqr = "Cinci cărţi de aceeaşi culoare";
    this.odd = "Cinci cărţi în succesiune ordonată, nu de aceeaşi culoare";
    this.vzf = "Trei cărţi egale ca valoare";
    this.bqz = "Două perechi diferite şi o a cincea carte";
    this.dfy = "Două cărţi cu valeţi, dame, regi sau aşi";
    this.rzr = "Patru cărţi de aceeaşi culoare cu o a 5-a carte";
    this.dii = "Straight cu as în mijloc";
    this.uta = "Combinaţie de cărţi cu figuri cu valet, damă şi rege";
    this.jkx = "Cinci valori succesive cu soţ sau fără soţ";
    this.rvx = "ROYAL FLUSH cu joker";
    this.lam = "Patru cărţi de doi cu o altă carte";
    this.ejy = "Patru cărţi de 5, 6, 7, 8, 9, 10, valeţi, dame sau regi";
    this.qtr = "Patru cărţi de 2, 3 sau 4 cu o altă carte";
    this.izi = "Patru aşi cu o altă carte";
    this.jmu = "Patru cărţi de 2, 3 sau 4 cu un as, o carte de 2, 3 sau 4";
    this.yyh = "Patru aşi cu o carte de 2, 3 sau 4";
    this.pov = "Doi regi sau doi aşi.";
    this.pnv = "Două cărţi de 10, valeţi, dame, regi sau aşi";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "GAMBLE SAU RIDICAREA CÂŞTIGULUI?";
    this.ral = "ALEGEŢI O CARTE";
    this.ouz = "Când cartea aleasă este mai mare decât cea a dealerului: câştig!";
    this.ebg = "Când cartea aleasă este mai mică decât cea a dealerului: fără câştig";
    this.ksm = " Când cartea aleasă este identică cu cea a dealerului: egal";
    this.vim = "As este cartea cea mai mare, 2 este cartea cea mai mică, fără joker.";
    this.bck = "EGAL";
    this.ptk = "PLAYER";
    this.gan = "DEALER";
    this.toq = "ÎNVINGE DEALERUL PENTRU DUBLAREA PROFITULUI";
    this.rez = "SELECTEAZĂ VALOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI"
}
mrh.prototype = new mrj;

function ard() {
    this.onv = "HELD";
    this.oar = "VERMELHO";
    this.mob = "PRETO";
    this.tpr = "ALTO";
    this.swj = "BAIXO";
    this.aeg = "DAR CARTAS";
    this.uop = "RETER CARTAS";
    this.ufy = "DAR CARTAS";
    this.rbk = "Cinco cartas iguais com o mesmo valor (só é possível com curinga)";
    this.jwp = "Ás - Rei - Dama - Valete - Dez de um naipe";
    this.rgz = "STRAIGHT do mesmo naipe";
    this.bya = "Quatro cartas do mesmo valor";
    this.kvv = "Combinação de THREE OF A KIND e PAIR";
    this.fqr = "Cinco cartas com o mesmo naipe";
    this.odd = "Cinco cartas sucessivas, sem o mesmo naipe";
    this.vzf = "Três cartas do mesmo valor";
    this.bqz = "Dois pares diferentes e uma 5ª carta";
    this.dfy = "Dois valetes, damas, reis ou áses";
    this.rzr = "Quatro cartas do mesmo naipe com uma 5ª";
    this.dii = "Uma escada com um ás no centro";
    this.uta = "Uma combinação somente de figuras";
    this.jkx = "Sequência de pares ou ímpares de sucessivos valores";
    this.rvx = "ROYAL FLUSH com curinga";
    this.lam = "Quatro dois com uma outra carta";
    this.ejy = "Quatro 5, 6, 7, 8, 9, 10, valete, dama, rei";
    this.qtr = "Quatro 2, 3 ou 4 com outra carta";
    this.izi = "Quatro áses com uma outra carta";
    this.jmu = "Quatro 2,3 ou 4 A, 2, 3 ou 4";
    this.yyh = "Quatro áses com 2,3 ou 4";
    this.pov = "Dois reis ou dois áses";
    this.pnv = "Dois 10, valetes, damas, reis ou áses";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "JOGAR OU RECOLHER O PRÉMIO?";
    this.ral = "ESCOLHA UMA CARTA";
    this.ouz = "Se a carta selecionada for mais alta do que a do crupier: PRÉMIO";
    this.ebg = "Se a carta selecionada for menor do que a do crupier: Nenhum prémio";
    this.ksm = "Se a carta selecionada for a mesma que a do crupier: Empate";
    this.vim = "Az é carta mais alta, dois é a menor, não há curingas.";
    this.bck = "EMPATE";
    this.ptk = "JOGADOR";
    this.gan = "CRUPIER";
    this.toq = "GANHE DO DEALER PARA DOBRAR O GANHO";
    this.rez = "ESCOLHA O VALOR CERTO PARA DUBRAR O GANHO"
}
ard.prototype = new vjt;

function qss() {
    this.onv = "GARDER";
    this.oar = "ROUGE";
    this.mob = "NOIR";
    this.tpr = "HAUT";
    this.swj = "BAS";
    this.aeg = "DONNER DES CARTES";
    this.uop = "GARDER DES CARTES";
    this.ufy = "DONNER DES CARTES";
    this.rbk = "Cinq cartes identiques (possible seulement avec un joker)";
    this.jwp = "As, roi, dame, valet, 10 de la même couleur";
    this.rgz = "STRAIGHT dans la même couleur";
    this.bya = "Quatre cartes de la même valeur";
    this.kvv = "Combinaison de trois (BRELAN) et un PAIRE";
    this.fqr = "Cinq cartes de la même couleur";
    this.odd = "Cinq cartes dans l'ordre, mais pas de la même couleur";
    this.vzf = "Trois cartes de la même valeur";
    this.bqz = "Deux paires différentes et une 5ème carte";
    this.dfy = "Deux valets, dames, rois ou as";
    this.rzr = "Quatre cartes de la même couleur avec une 5ème carte";
    this.dii = "Straight avec un as au milieu";
    this.uta = "Cartes qui comprennent le valet, la dame et le roi";
    this.jkx = "Cinq cartes consécutives paires ou impaires";
    this.rvx = "QUINTE FLUSH avec joker";
    this.lam = "Quatre deux avec une autre carte";
    this.ejy = "Quatre 5, 6, 7, 8, 9, 10, valets, dames ou rois";
    this.qtr = "Quatre 2, 3 ou 4 avec une autre carte";
    this.izi = "Quatres as avec une autre carte";
    this.jmu = "Quatre 2,3 ou 4 avec A, 2, 3, ou 4";
    this.yyh = "Quatre as avec un 2, 3, ou 4";
    this.pov = "Deux rois ou deux as.";
    this.pnv = "Deux 10, valets, dames, rois ou as";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "GAMBLE OU PRENDRE GAIN?";
    this.ral = "PRENDS UNE CARTE";
    this.ouz = "Si la carte sélectionnée est supérieure à celle du dealer: GAIN";
    this.ebg = "Si la carte sélectionnée est inférieure à celle du dealer: PAS DE GAIN";
    this.ksm = "Si la carte sélectionnée est identique à celle du dealer: EGALITÉ";
    this.vim = "L'as a la valeur la plus importante, le deux la moins importante, aucun joker.";
    this.bck = "EGALITÉ";
    this.ptk = "JOUER";
    this.gan = "NOUN";
    this.toq = "VAINCS LE DONNEUR AFIN DE DOUBLER LE GAIN";
    this.rez = "CHOISIS LA BONNE VALEUR AFIN DE DOUBLER LE GAIN"
}
qss.prototype = new hor;

function leg() {
    this.onv = "ZADRŽI";
    this.oar = "CRVENA";
    this.mob = "CRNA";
    this.tpr = "VELIKA";
    this.swj = "MALA";
    this.aeg = "DIJELI KARTE";
    this.uop = "ZADRŽI KARTE";
    this.ufy = "DIJELI KARTE";
    this.rbk = "Pet istih karata (moguće samo s džokerom)";
    this.jwp = "As - kralj - dama - dečko - desetka u istoj boji";
    this.rgz = "STRAIGHT u istoj boji";
    this.bya = "Četiri jednake karte";
    this.kvv = "Kombinacija od TRI ISTE i PARA";
    this.fqr = "Pet karata u istoj boji";
    this.odd = "Pet karata u nizu, ali ne u istoj boji";
    this.vzf = "Tri jednake karte";
    this.bqz = "Dva različita para i neka 5. karta";
    this.dfy = "Dva dečka, dame, kralja ili asa";
    this.rzr = "Četiri karte u istoj boji s nekom 5. kartom";
    this.dii = "Pet karata u redu, As u sredini";
    this.uta = "5 karata sa slikama (dečko, dama i kralj + 2 slike)";
    this.jkx = "5 uzastopnih parnih ili neparnih karata";
    this.rvx = "ROYAL FLUSH s džokerom";
    this.lam = "Četiri dvojke s nekom drugom kartom";
    this.ejy = "Četiri petice, šestice, sedmice, osmice, devetke, desetke, dečka, dame ili kralja";
    this.qtr = "Četiri dvojke, trojke ili četvorke s nekom drugom kartom";
    this.izi = "Četiri asa sa nekom drugom kartom";
    this.jmu = "Četiri 2,3 ili 4 sa A, 2, 3 ili 4";
    this.yyh = "Četiri asa s 2, 3 ili 4";
    this.pov = "Dva kralja ili dva asa";
    this.pnv = "Dvije desetke, dečka, dame, kralja ili asa";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "IGRAJ ILI POKUPI DOBITAK?";
    this.ral = "ODABERITE KARTU";
    this.ouz = "Ako je odabrana karta veća od dilerove karte: DOBITAK";
    this.ebg = "Ako je odabrana karta manja od dilerove karte: NEMA DOBITKA";
    this.ksm = "Ako je odabrana karta ista kao dilerova: NERIJEŠENO";
    this.vim = "As je najveća karta, 2 je najmanja karta, nema džokera.";
    this.bck = "ISTA";
    this.ptk = "IGRAČ";
    this.gan = "DILER";
    this.toq = "POBJEDI DJELITELJA I TIME UDVOSTRUČI DOBITAK";
    this.rez = "ODABERI PRAVU VRIJEDNOST I TIME UDVOSTRUČI DOBITAK"
}
leg.prototype = new hqa;

function bwc() {
    this.onv = "TENERE";
    this.oar = "ROSSO";
    this.mob = "NERO";
    this.tpr = "ALTO";
    this.swj = "BASSO";
    this.aeg = "NUOVE CARTE";
    this.uop = "BLOCCA CARTE";
    this.ufy = "NUOVE CARTE";
    this.rbk = "Cinque carte uguali (possibile soltanto con il joker)";
    this.jwp = "Asso - Re - Dama - Fante - 10 di un colore";
    this.rgz = "STRAIGHT dello stesso colore";
    this.bya = "Quattro carte dello stesso valore";
    this.kvv = "Combinazione tra THREE OF A KIND e una COPPIA";
    this.fqr = "Cinque carte dello stesso colore";
    this.odd = "Cinque carte in ordine cronologico, senza aver lo stesso colore";
    this.vzf = "Tre carte dello stesso valore";
    this.bqz = "Due coppie diverse e una quinta carta";
    this.dfy = "Due fanti, dame, re o assi";
    this.rzr = "Quattro carte dello stesso colore con una quinta carta";
    this.dii = "Straight con asso in centro";
    this.uta = "5 carte solo con figure";
    this.jkx = "Straight ove sempre una carta su due manca";
    this.rvx = "ROYAL FLUSH con Jolly";
    this.lam = "Quattro due con un'altra carta";
    this.ejy = "Quattro carte da 5, 6, 7, 8, 9, 10, fante, dama o re";
    this.qtr = "Quattro carte da 2, 3 o 4 con un'altra carta";
    this.izi = "Quattro assi con un'altra carta";
    this.jmu = "Quattro 2,3 o 4 con Asso, 2, 3 o 4";
    this.yyh = "Quattro assi con il 2, 3 o 4";
    this.pov = "Due re o due assi";
    this.pnv = "Due carte da 10, fante, dama, re o asso";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "GAMBLE O RACCOGLIERE VINCITA?";
    this.ral = "PRENDI UNA CARTA";
    this.ouz = "Se la carta selezionata è più alta di quella del mazziere: VINCITA";
    this.ebg = "Se la carta selezionata è più bassa di quella del mazziere: NESSUNA VINCITA";
    this.ksm = "Se la carta selezionata è uguale a quella del mazziere:ALLA PARI";
    this.vim = "L'asso è la più alta, il due la più bassa, nessuno jolly.";
    this.bck = "ALLA PARI";
    this.ptk = "GIOCATORE";
    this.gan = "DEALER";
    this.toq = "VINCI SUL DEALER PER RADDOPPIARE LA VINCITA";
    this.rez = "SCEGLI IL VALORE GIUSTO PER RADDOPPIARE LA VINCITA"
}
bwc.prototype = new nla;

function kuc() {
    this.onv = "HÅLLET";
    this.oar = "RÖTT";
    this.mob = "SVART";
    this.tpr = "HÖG";
    this.swj = "LÅG";
    this.aeg = "TA KORT";
    this.uop = "BEHÅLL KORTEN";
    this.ufy = "TA KORT";
    this.rbk = "Fem kort av samma värde (endast möjligt med Joker)";
    this.jwp = "Ess - Kung - Dam - Knekt - Tio i samma färg";
    this.rgz = "Stege i samma färg";
    this.bya = "Fyra kort av samma värde";
    this.kvv = "Kombination bestående av TRISS och PAR";
    this.fqr = "Fem kort i samma färg";
    this.odd = "Fem kort i följd, men inte i samma färg";
    this.vzf = "Tre kort av samma värde";
    this.bqz = "Två olika par och ett 5:e kort";
    this.dfy = "Två Knektar, Damer, Kungar eller Ess";
    this.rzr = "Fyra kort i en färg med ett 5:e kort";
    this.dii = "Stege med Ess i mitten";
    this.uta = "Kort som visar Knekt, Dam och Kung";
    this.jkx = "Stege med fem udda eller fem jämna kort i följd";
    this.rvx = "ROYAL FLUSH med Joker";
    this.lam = "Fyra tvåor med något annat kort";
    this.ejy = "Fyra 5:or, 6:or, 7:or, 8:or, 9:or, 10:or, Knektar, Damer eller Kungar";
    this.qtr = "Fyra 2:or, 3:or eller 4:or med något annat kort";
    this.izi = "Fyra Ess med något annat kort";
    this.jmu = "Fyra 2:or, 3:or eller 4:or med ett Ess, en 2:a, 3:a eller 4:a";
    this.yyh = "Fyra Ess med en 2:a, 3:a eller 4:a";
    this.pov = "Två Kungar eller två Ess";
    this.pnv = "Två 10:or, Knektar, Damer, Kungar eller Ess.";
    this.wfu = "FIVE OF A KIND";
    this.axo = "ROYAL FLUSH";
    this.izh = "STRAIGHT FLUSH";
    this.phx = "FOUR OF A KIND";
    this.iwt = "FULL HOUSE";
    this.unh = "FLUSH";
    this.sqk = "STRAIGHT";
    this.kgh = "THREE OF A KIND";
    this.wgd = "TWO PAIRS";
    this.suf = "HIGH PAIR";
    this.ent = "FOUR FLUSH";
    this.dze = "POKER";
    this.ggk = "SKIP STRAIGHT";
    this.kja = "BLAZE";
    this.gjk = "CORNER STRAIGHT";
    this.uzu = "TENS OR BETTER";
    this.gzr = "JACKS OR BETTER";
    this.mra = "KINGS OR BETTER";
    this.aaa = "WILD ROYAL FLUSH";
    this.uag = "FOUR DEUCES";
    this.zsm = "FOUR 5 TO KING";
    this.qld = "FOUR 2 TO 4";
    this.tvi = "FOUR ACES";
    this.bkf = "FOUR LOW WITH LOW";
    this.jic = "FOUR ACES WITH 2, 3 OR 4";
    this.dwu = "DUBBLERA ELLER INKASSERA?";
    this.ral = "VÄLJ ETT KORT";
    this.ouz = "Om valt kort är högre än givens: VINST!";
    this.ebg = "Om valt kort är lägre än givens: förlust";
    this.ksm = "Om valt kort är samma som givens: lika";
    this.vim = "Ess är högst, två är lägst, inga Jokerkort.";
    this.bck = "LIKA";
    this.ptk = "SPELARE";
    this.gan = "GIVARE";
    this.toq = "SLÅ DEALERN FÖR ATT DUBBLA VINSTEN";
    this.rez = "VÄLJ RÄTT VALÖR FÖR ATT DUBBLA VINSTEN"
}
kuc.prototype = new ima;

function fhp() {
    this.xni = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.dcm = {
        backgroundColor: "rgb(0,0,0)",
        yig: "rgba(0,0,0,0.3)"
    };
    this.kqm = {
        dcm: {
            font: "arial",
            hfp: "bold",
            backgroundColor: "black",
            fuo: "rgb(0,100,10)",
            bzd: "rgb(80,255,100)",
            pwf: "rgb(120,120,120)",
            uzm: "red",
            rkb: "white",
            vfn: "white",
            uav: null
        },
        xgx: {
            font: "arial",
            hfp: "bold",
            backgroundColor: "black",
            fuo: "rgb(0,100,10)",
            bzd: "rgb(80,255,100)",
            pwf: "rgb(120,120,120)",
            uzm: "red",
            rkb: "white",
            vfn: "rgb(230,190,10)",
            uav: null
        }
    };
    this.mqg = {
        font: "arial",
        hfp: "bold",
        backgroundColor: "rgb(0,0,0)",
        our: null,
        vfn: "rgb(255,255,255)",
        jdr: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.rjp = {
        font: "arial",
        hfp: "bold",
        backgroundColor: "black",
        ynr: "rgb(50,50,50)",
        uoa: "rgb(255,255,255)",
        vfn: "white",
        czq: 0.8,
        jen: {
            wqt: {
                font: "sanf-serif",
                hfp: "",
                textAlign: "center",
                sfy: "round",
                backgroundColor: "black",
                vfn: "white",
                borderColor: null,
                jdr: null,
                mxx: 1
            }
        }
    };
    this.dac = {
        font: "arial",
        hfp: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        wha: "rgba(255,255,255,0.2)",
        vfn: "rgb(255,255,255)",
        zhh: "rgba(0,0,0,0.3)",
        display: {
            nhu: "arial",
            kpm: "arial",
            hfp: "bold",
            vfn: "rgb(255,255,255)",
            klk: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        wqt: {
            font: "arial",
            hfp: "bold",
            vfn: "rgb(0,0,0)",
            mlv: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            our: "rgba(255,255,255,1)",
            ebx: "rgba(255,255,255,0.8)",
            mhk: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            sfy: "rect",
            aqz: -1
        }
    };
    this.iyc = {
        font: "arial",
        hfp: "bold",
        szg: "rgb(0,0,200)",
        ipj: "rgb(255,255,255)",
        kzx: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        sme: "rgb(180,220,255)",
        fhj: "rgb(10,20,25)",
        dih: "rgb(130,220,255)",
        qpp: "rgb(130,190,255)",
        vfn: "rgb(255,255,255)",
        kqn: "rgb(130,190,255)",
        vvs: "rgb(100,160,255)",
        xne: "rgb(255,255,255)",
        wqt: {
            sfy: "rect",
            font: "arial",
            hfp: "bold",
            vfn: "rgb(255,255,255)",
            hau: null,
            backgroundColor: "rgb(90,160,255)",
            esx: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            jdr: "rgb(40,80,140)"
        },
        cty: {
            sfy: "round",
            font: "arial",
            hfp: "bold",
            vfn: "rgb(255,255,255)",
            hau: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            esx: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            jdr: "rgb(40,80,140)"
        }
    };
    this.fhc = {};
    this.yxi = {
        mqs: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.lbf = {
        type: "left",
        font: "arial",
        hfp: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        our: null,
        borderColor: "rgb(0,0,0)",
        jdr: "rgb(180,180,180)",
        sme: "rgba(0,0,0,0.6)",
        uvi: null,
        klk: "rgb(255,200,0)",
        vfn: "white",
        zlf: {
            font: "arial",
            hfp: "bold",
            backgroundColor: "rgb(100,100,100)",
            our: "rgb(100,100,100)",
            ebx: null,
            mhk: null,
            borderColor: "rgb(100,100,100)",
            vfn: "rgb(255,255,255)",
            mlv: "rgb(255,200,0)",
            sfy: "triangle",
            aqz: 1
        },
        hvh: {
            font: "arial",
            hfp: "bold",
            backgroundColor: "rgb(100,100,100)",
            our: "rgb(100,100,100)",
            ebx: null,
            mhk: null,
            borderColor: "rgb(100,100,100)",
            vfn: "rgb(255,255,255)",
            mlv: "rgb(255,200,0)",
            sfy: "triangle",
            aqz: 0
        },
        qzp: {
            font: "arial",
            hfp: "bold",
            backgroundColor: "rgb(100,100,100)",
            our: "rgb(15,15,15)",
            ebx: "rgb(100,100,100)",
            mhk: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            vfn: "rgb(255,255,255)",
            mlv: "rgb(255,200,0)",
            sfy: "rect",
            aqz: -1
        },
        display: {
            kpm: "sans-serif",
            nhu: "sans-serif",
            hfp: "bold",
            klk: null,
            vfn: "yellow",
            borderColor: "rgb(100,100,100)",
            jdr: null,
            backgroundColor: "black"
        },
        sur: {
            font: "arial",
            hfp: "bold",
            backgroundColor: null,
            our: null,
            vfn: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.voz = {
        font: "arial",
        hfp: "bold",
        backgroundColor: "rgb(180,180,180)",
        our: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        jdr: "rgb(30,30,30)",
        vfn: "white",
        jqh: {
            font: "arial",
            hfp: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            our: null,
            ebx: "rgba(100,100,100,0.5)",
            mhk: null,
            borderColor: null,
            vfn: "white",
            sfy: "rect",
            aqz: -1
        },
        zlf: {
            font: "arial",
            hfp: "bold",
            backgroundColor: "rgb(255,255,255)",
            our: "rgb(255,255,255)",
            ebx: null,
            mhk: null,
            borderColor: "rgb(255,255,255)",
            vfn: "rgb(0,0,0)",
            mlv: "rgb(0,0,0)",
            sfy: "triangle",
            aqz: 1
        },
        hvh: {
            font: "arial",
            hfp: "bold",
            backgroundColor: "rgb(255,255,255)",
            our: "rgb(255,255,255)",
            ebx: null,
            mhk: null,
            borderColor: "rgb(255,255,255)",
            vfn: "rgb(0,0,0)",
            mlv: "rgb(0,0,0)",
            sfy: "triangle",
            aqz: 0
        },
        fso: {
            sfy: "rect",
            font: "arial",
            hfp: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            vfn: "white",
            mxx: 1,
            borderColor: "rgb(255,255,255)",
            jdr: "rgb(220,220,220)"
        },
        display: {
            kpm: "sans-serif",
            nhu: "sans-serif",
            hfp: "bold",
            klk: null,
            vfn: "white",
            borderColor: "white",
            jdr: null,
            backgroundColor: "rgb(0,0,0)"
        },
        sur: {
            font: "arial",
            hfp: "bold",
            backgroundColor: null,
            our: null,
            vfn: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.kwf = {
        xjz: [{
            kpm: "sans-serif",
            jtt: "verdana",
            hfp: "bold",
            klk: "rgb(255,255,100)",
            atb: "rgb(210,190,40)",
            hau: "rgb(252,247,0)",
            uyf: "rgb(220,200,0)",
            ynr: "rgb(0,0,0)"
        }, {
            kpm: "sans-serif",
            jtt: "verdana",
            hfp: "bold",
            klk: "rgb(250,250,250)",
            atb: "rgb(210,210,210)",
            hau: "rgb(255,255,255)",
            uyf: "rgb(220,220,220)",
            ynr: "rgb(0,0,0)"
        }, {
            kpm: "sans-serif",
            jtt: "verdana",
            hfp: "bold",
            klk: "rgb(230,230,230)",
            atb: "rgb(190,190,190)",
            hau: "rgb(255,255,255)",
            uyf: "rgb(220,220,220)",
            ynr: "rgb(0,0,0)"
        }, {
            kpm: "sans-serif",
            jtt: "verdana",
            hfp: "bold",
            klk: "rgb(230,230,230)",
            atb: "rgb(190,190,190)",
            hau: "rgb(255,255,255)",
            uyf: "rgb(220,220,220)",
            ynr: "rgb(0,0,0)"
        }],
        dec: {
            kpm: "sans-serif",
            jtt: "sans-serif",
            hfp: "bold",
            klk: "rgb(236,225,207)",
            atb: "rgb(214,170,102)",
            hau: "rgb(245,220,148)",
            uyf: "rgb(190,137,40)"
        },
        cnu: {}
    };
    this.eom = {
        krw: "rgb(240,240,240)",
        veu: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        zhh: "rgba(0,80,150,0.6)",
        display: {
            nhu: "arial",
            kpm: "arial",
            hfp: "bold",
            vfn: "rgb(0,80,151)",
            klk: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function wuf() {
    this.bxq = {
        backgroundColor: null,
        our: null,
        sme: "rgb(0,0,0)",
        fhj: "rgb(0,0,0)",
        pzb: null,
        fwl: 0.5,
        wqt: {
            sfy: "rect",
            font: "verdana",
            hfp: "bold",
            backgroundColor: "rgb(0,0,0)",
            esx: "rgb(150,150,150)",
            vfn: "rgb(255,255,255)",
            hau: "rgb(255,255,0)",
            borderColor: "rgb(150,150,150)",
            jdr: "rgb(0,0,0)"
        },
        display: {
            nhu: "sans-serif",
            kpm: "sans-serif",
            hfp: "bold",
            backgroundColor: "black",
            vfn: "yellow",
            klk: "yellow",
            borderColor: "rgb(255,255,255)",
            jdr: "rgb(160,160,160)"
        },
        hyp: {
            font: "verdana",
            hfp: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            vfn: "rgb(255, 255, 0)"
        }
    };
    this.ytt = {
        backgroundColor: null,
        sme: "rgb(0,0,0)",
        fhj: "rgb(0,0,0)",
        display: {
            nhu: "sans-serif",
            kpm: "sans-serif",
            hfp: "bold",
            backgroundColor: "black",
            vfn: "yellow",
            klk: "yellow",
            borderColor: "rgb(255,255,255)",
            jdr: "rgb(160,160,160)"
        },
        wqt: {
            sfy: "rect",
            font: "verdana",
            hfp: "bold",
            backgroundColor: "rgb(0,0,0)",
            esx: "rgb(150,150,150)",
            vfn: "rgb(255,255,255)",
            hau: null,
            borderColor: "rgb(150,150,150)",
            jdr: "rgb(0,0,0)"
        },
        hyp: {
            font: "verdana",
            hfp: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            vfn: "rgb(255, 255, 0)"
        }
    };
    this.dqz = {
        backgroundColor: null,
        sme: "rgb(0,0,0)",
        fhj: "rgb(0,0,0)",
        wqt: {
            sfy: "rect",
            font: "verdana",
            hfp: "bold",
            backgroundColor: "rgb(0,0,0)",
            esx: "rgb(150,150,150)",
            vfn: "rgb(255,255,255)",
            hau: null,
            borderColor: "rgb(150,150,150)",
            jdr: "rgb(0,0,0)"
        },
    };
    this.bac = {
        font: "arial",
        hfp: "bold",
        yng: "yellow",
        ulc: "yellow",
        vfn: "yellow"
    };
    this.wdt = {
        font: "sans-serif",
        hfp: "bold",
        cyf: "red",
        cmu: "orange",
        ynr: "white"
    };
    this.gdk = {
        font: "arial",
        hfp: "bold",
        vfn: "yellow"
    };
    this.srl = {
        font: "sans-serif",
        hfp: "bold",
        vfn: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        suh: "rgb(0,0,0)",
        gua: "rgb(255,0,0)",
        mzx: "rgb(255,255,0)",
        oio: "rgb(80,80,80)",
        guq: "rgb(15,15,15)",
        lzf: "rgb(0,0,0)",
        dmk: "rgb(180,180,180)",
        sdx: "rgb(0,0,0)",
        szv: 0.7
    }
}
wuf.prototype = new fhp;

function smr() {
    this.bxq.backgroundColor = "rgb(0,70,0)";
    this.bxq.sme = "rgb(0,70,0)";
    this.bxq.fhj = "rgb(0,20,0)";
    this.bxq.hyp.backgroundColor = "rgb(0, 30, 0)";
    this.bxq.wqt.backgroundColor = "rgb(0,50,0)";
    this.bxq.wqt.esx = "rgb(0,150,0)";
    this.bxq.wqt.borderColor = "rgb(0,70,0)";
    this.bxq.wqt.jdr = "rgb(0,20,0)";
    this.bac.yng = "white";
    this.ytt.backgroundColor = "rgb(0,70,0)";
    this.ytt.sme = "rgb(0,70,0)";
    this.ytt.fhj = "rgb(0,20,0)";
    this.ytt.hyp.backgroundColor = "rgb(0,30,0)";
    this.ytt.wqt.backgroundColor = "rgb(0,50,0)";
    this.ytt.wqt.esx = "rgb(0,150,0)";
    this.ytt.wqt.borderColor = "rgb(0,70,0)";
    this.ytt.wqt.jdr = "rgb(0,20,0)";
    this.ytt.wdt = {
        font: "sans-serif",
        hfp: "bold",
        cyf: "red",
        cmu: null,
        ynr: "white"
    };
    this.gdk.mdf = ["rgb(189,0,0)", "rgb(0,189,189)", "rgb(0,189,0)", "rgb(189,189,0)"];
    this.dqz.sme = "rgb(0,70,0)";
    this.dqz.fhj = "rgb(0,20,0)";
    this.dqz.wqt.backgroundColor = "rgb(0,50,0)";
    this.dqz.wqt.borderColor = "rgb(0,70,0)";
    this.dqz.wqt.jdr = "rgb(0,20,0)";
    this.dqz.win = {
        font: "arial",
        hfp: "bold",
        vfn: "white",
        klk: "yellow",
        wgh: "verdana",
        pmv: "bold italic",
        ybs: "white"
    };
    this.rjp.jen.wqt.backgroundColor = "rgb(0,50,0)";
    this.voz.backgroundColor = "rgb(0,100,0)";
    this.voz.our = "rgb(0,20,0)"
}
smr.prototype = new wuf;

function xac() {
    this.type = "800_600";
    this.neo = true;
    this.avq = false;
    this.osk = false;
    this.zkn = true;
    this.psv = false;
    this.kwn = false;
    this.hxm = false;
    this.vaw = false
}

function cor() {
    this.neo = false;
    this.canvas = {
        ebf: new kyc(0, 0, 800, 620)
    };
    this.sat = {
        ebf: new kyc(),
        yxu: 0
    };
    this.dcm = {
        ebf: new kyc(0, 20, 800, 600),
        owp: 0
    };
    this.bvv = {
        lpt: new kyc(0, 40, 440, 36),
        gia: new kyc(5, 2, 140, 30),
        sis: new kyc(150, 2, 140, 30),
        odn: new kyc(295, 2, 140, 30),
        wgs: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.kqm = {
        dcm: {
            ebf: new kyc(0, 0, 500, 360),
            ecl: new kyc(5, 325, 490, 30),
            uud: new kyc(5, 329, 490, 14),
            hle: new kyc(50, 345, 400, 6),
            wix: new kyc(5, 285, 490, 70),
            cua: new kyc(120, 300, 260, 55),
            fontSize: 14,
            arq: 18,
            gqn: 26,
            xrg: 5,
            eha: 12,
            gtq: 5,
            fru: 2
        },
        xgx: {
            ebf: new kyc(0, 0, 800, 620),
            ecl: new kyc(),
            uud: new kyc(),
            hle: new kyc(200, 425, 400, 8),
            wix: new kyc(100, 372, 600, 84),
            cua: new kyc(270, 394, 260, 70),
            fontSize: 18,
            arq: 24,
            gqn: 20,
            xrg: 0,
            eha: 12,
            gtq: 7,
            fru: 0
        }
    };
    this.mqg = {
        ebf: new kyc(0, 0, 800, 20),
        fontSize: 12,
        nbn: 19,
        sjs: 15,
        rjc: 120,
        eha: 2,
        gtq: 2,
        kol: 2,
        mit: 40
    };
    this.rjp = {
        ebf: new kyc(0, 20, 800, 70),
        fontSize: 10,
        vjg: 10,
        tsw: 20,
        ads: 40,
        owp: 4,
        eha: 10,
        gtq: 5,
        xrg: 10,
        wgs: {
            fontSize: 17,
            xrg: 2
        }
    };
    this.iyc = {
        ebf: new kyc(0, 20, 800, 600),
        lpt: new kyc(),
        wgs: {
            uux: 20,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            xjw: 8,
            jvq: 8,
            owp: 0
        },
        otm: new kyc(0, 20, 800, 40),
        fwb: new kyc(0, 100, 800, 40),
        okv: new kyc(0, 140, 800, 40),
        wkn: new kyc(0, 180, 800, 40),
        gst: new kyc(225, 275, 350, 100),
        iyb: new kyc(200, 480, 400, 40),
        vdu: {
            wkx: new kyc(340, 540, 120, 55)
        },
        knx: {
            wkx: new kyc(250, 540, 120, 55),
            elh: new kyc(430, 540, 120, 55)
        },
        def: 36,
        fontSize: 30,
        eys: 22,
        gtq: 3,
        eha: 5,
        owp: 2,
        agq: 3,
        nbj: 10
    };
    this.fhc = {
        ebf: new kyc(-10, 25, 310, 50),
        otm: new kyc(10, 4, 240, 24),
        uud: new kyc(10, 28, 240, 18),
        vek: new kyc(260, 10, 40, 30),
        fqu: new kyc(7, 2, 26, 26),
        gbd: 16,
        uux: 12,
        dsn: 18
    };
    this.yxi = {
        ebf: new kyc(150, 160, 500, 280),
        gbd: 26,
        fontSize: 20,
        jwb: new kyc(465, 5, 30, 30),
        otm: new kyc(30, 5, 440, 30),
        iyb: new kyc(20, 40, 460, 160),
        ibv: new kyc(20, 230, 460, 40),
        wgs: {
            fontSize: 20
        }
    };
    this.lbf = {
        ebf: new kyc(0, 55, 560, 430),
        owp: 2,
        wlp: 0,
        ddf: 5,
        ifs: 10,
        gbd: 26,
        swf: 20,
        otm: new kyc(30, 15, 500, 30),
        ybz: new kyc(20, 50, 520, 60),
        chc: new kyc(40, 60, 220, 40),
        zgq: new kyc(328, 60, 30, 40),
        dit: new kyc(360, 60, 120, 40),
        apv: new kyc(482, 60, 30, 40),
        olx: new kyc(20, 120, 520, 200),
        bky: new kyc(40, 120, 480, 40),
        hni: new kyc(30, 160, 280, 40),
        ipt: new kyc(328, 160, 30, 40),
        zvk: new kyc(360, 160, 120, 40),
        gxu: new kyc(482, 160, 30, 40),
        rny: new kyc(30, 215, 280, 40),
        gqg: new kyc(328, 215, 30, 40),
        pws: new kyc(360, 215, 120, 40),
        uwl: new kyc(482, 215, 30, 40),
        zvb: new kyc(30, 270, 280, 40),
        bhe: new kyc(328, 270, 30, 40),
        emf: new kyc(360, 270, 120, 40),
        omf: new kyc(482, 270, 30, 40),
        ecl: new kyc(30, 330, 500, 30),
        fty: new kyc(210, 370, 140, 50),
        abc: new kyc(),
        sur: {
            uud: new kyc(40, 0, 240, 40),
            sos: new kyc(7, 12, 16, 16),
            fontSize: 20,
            xjw: 0,
            owp: 2
        },
        hvh: {
            xjw: 3,
            eha: -5,
            gtq: -1,
            jvq: 6,
            fontSize: 20,
            owp: 0
        },
        zlf: {
            xjw: 3,
            eha: 5,
            gtq: 0,
            jvq: 6,
            fontSize: 20,
            owp: 0
        },
        qzp: {
            xjw: 6,
            eha: 0,
            gtq: 0,
            jvq: 6,
            fontSize: 26,
            owp: 2
        },
        display: {
            gbd: 16,
            uux: 24,
            gvt: 0,
            hnd: 0,
            owp: 2,
            meh: 3,
            wev: 3,
            wwa: 3,
            zes: 3
        }
    };
    this.kwf = {
        ebf: [
            [new kyc(2, 20, 130, 44)],
            [new kyc(2, 20, 130, 44), new kyc(668, 20, 130, 44)],
            [new kyc(2, 20, 130, 23), new kyc(668, 20, 130, 23), new kyc(2, 41, 130, 23)],
            [new kyc(2, 20, 130, 23), new kyc(668, 20, 130, 23), new kyc(2, 41, 130, 23), new kyc(668, 41, 130, 23)]
        ],
        display: {
            kka: new kyc(0, 0, 130, 44),
            hgw: new kyc(0, 0, 130, 44),
            dhz: new kyc(),
            otm: new kyc(2, 3, 126, 19),
            tsg: new kyc(8, 24, 114, 19),
            gbd: 16,
            amm: 18,
            kkn: 0
        },
        con: {
            kka: new kyc(0, 0, 130, 23),
            hgw: new kyc(0, 0, 130, 23),
            dhz: new kyc(2, 2, 19, 19),
            otm: new kyc(),
            tsg: new kyc(22, 3, 100, 19),
            gbd: 14,
            amm: 18,
            kkn: 0
        },
        dec: {
            ebf: new kyc(62, 100, 676, 372),
            kka: new kyc(32, 10, 612, 351),
            hgw: new kyc(0, 0, 676, 372),
            dhz: new kyc(301, 263, 74, 74),
            otm: new kyc(120, 58, 436, 56),
            tsg: new kyc(32, 140, 612, 96),
            gbd: 68,
            amm: 100,
            kkn: 0
        },
        cnu: {
            ebf: new kyc(38, 80, 724, 369),
            jpr: new kyc(100, 53, 525, 50),
            tsg: new kyc(186, 153, 332, 94),
            dxz: 340,
            ipk: 30,
            lyk: {
                _0: new kyc(2, 0, 90, 94),
                _1: new kyc(98, 0, 90, 94),
                _2: new kyc(194, 0, 90, 94),
                _3: new kyc(290, 0, 90, 94),
                _4: new kyc(386, 0, 90, 94),
                _5: new kyc(482, 0, 90, 94),
                _6: new kyc(578, 0, 90, 94),
                _7: new kyc(674, 0, 90, 94),
                _8: new kyc(770, 0, 90, 94),
                _9: new kyc(866, 0, 90, 94),
                _cm: new kyc(962, 0, 28, 94),
                _dt: new kyc(999, 0, 28, 94),
                _sp: new kyc(1036, 0, 28, 94)
            }
        }
    }
}
cor.prototype = new xac;

function yka() {
    this.avq = true
}
yka.prototype = new cor;

function reo() {
    this.psv = true;
    this.osk = true;
    this.neo = false;
    this.avq = true;
    this.canvas = {
        ebf: new kyc(0, 0, 800, 1165)
    };
    this.sat = {
        ebf: new kyc(),
        yxu: 0
    };
    this.dcm = {
        ebf: new kyc(0, 550, 800, 615),
        owp: 10
    };
    this.bvv = {
        lpt: new kyc(0, 330, 440, 36),
        gia: new kyc(5, 2, 140, 30),
        sis: new kyc(150, 2, 140, 30),
        odn: new kyc(295, 2, 140, 30),
        wgs: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.kqm = {
        dcm: {
            ebf: new kyc(0, 0, 500, 360),
            ecl: new kyc(5, 325, 490, 30),
            uud: new kyc(5, 329, 490, 14),
            hle: new kyc(50, 345, 400, 6),
            wix: new kyc(5, 285, 490, 70),
            cua: new kyc(120, 300, 260, 55),
            fontSize: 14,
            arq: 18,
            gqn: 26,
            xrg: 5,
            eha: 12,
            gtq: 5,
            fru: 2
        },
        xgx: {
            ebf: new kyc(0, 0, 800, 600),
            ecl: new kyc(),
            uud: new kyc(),
            hle: new kyc(200, 411, 400, 8),
            wix: new kyc(100, 360, 600, 110),
            cua: new kyc(270, 380, 260, 70),
            fontSize: 18,
            arq: 24,
            gqn: 20,
            xrg: 0,
            eha: 12,
            gtq: 7,
            fru: 0
        }
    };
    this.top = {
        ebf: new kyc(0, 20, 800, 520)
    };
    this.mqg = {
        ebf: new kyc(0, 0, 800, 20),
        fontSize: 12,
        nbn: 19,
        sjs: 15,
        rjc: 120,
        eha: 2,
        gtq: 2,
        kol: 2,
        mit: 60
    };
    this.rjp = {
        ebf: new kyc(0, 20, 800, 70),
        fontSize: 10,
        vjg: 10,
        tsw: 20,
        ads: 40,
        owp: 4,
        eha: 10,
        gtq: 5,
        xrg: 10,
        wgs: {
            fontSize: 17,
            xrg: 2
        }
    };
    this.iyc = {
        ebf: new kyc(0, 550, 800, 615),
        lpt: new kyc(),
        wgs: {
            uux: 26,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            xjw: 10,
            jvq: 10,
            owp: 2
        },
        otm: new kyc(0, 20, 800, 40),
        fwb: new kyc(0, 100, 800, 40),
        okv: new kyc(0, 140, 800, 40),
        wkn: new kyc(0, 180, 800, 40),
        gst: new kyc(225, 275, 350, 100),
        iyb: new kyc(200, 480, 400, 40),
        vdu: {
            wkx: new kyc(340, 540, 120, 68)
        },
        knx: {
            wkx: new kyc(250, 540, 120, 68),
            elh: new kyc(430, 540, 120, 68)
        },
        def: 36,
        fontSize: 30,
        eys: 22,
        gtq: 3,
        eha: 5,
        owp: 2,
        agq: 3,
        nbj: 10,
    };
    this.fhc = {
        ebf: new kyc(-10, 545, 310, 50),
        otm: new kyc(10, 4, 240, 24),
        uud: new kyc(10, 28, 240, 18),
        vek: new kyc(260, 10, 40, 30),
        fqu: new kyc(7, 2, 26, 26),
        gbd: 16,
        uux: 12,
        dsn: 18
    };
    this.yxi = {
        ebf: new kyc(150, 690, 500, 280),
        gbd: 26,
        fontSize: 20,
        jwb: new kyc(465, 5, 30, 30),
        otm: new kyc(30, 5, 440, 40),
        iyb: new kyc(20, 40, 460, 160),
        ibv: new kyc(20, 230, 460, 40),
        wgs: {
            fontSize: 20
        }
    };
    this.lbf = {
        ebf: new kyc(0, 585, 560, 430),
        owp: 2,
        wlp: 0,
        ddf: 5,
        ifs: 10,
        gbd: 26,
        swf: 20,
        otm: new kyc(30, 15, 500, 30),
        ybz: new kyc(20, 50, 520, 60),
        chc: new kyc(40, 60, 220, 40),
        zgq: new kyc(328, 60, 30, 40),
        dit: new kyc(360, 60, 120, 40),
        apv: new kyc(482, 60, 30, 40),
        olx: new kyc(20, 120, 520, 200),
        bky: new kyc(40, 120, 480, 40),
        hni: new kyc(30, 160, 280, 40),
        ipt: new kyc(328, 160, 30, 40),
        zvk: new kyc(360, 160, 120, 40),
        gxu: new kyc(482, 160, 30, 40),
        rny: new kyc(30, 215, 280, 40),
        gqg: new kyc(328, 215, 30, 40),
        pws: new kyc(360, 215, 120, 40),
        uwl: new kyc(482, 215, 30, 40),
        zvb: new kyc(30, 270, 280, 40),
        bhe: new kyc(328, 270, 30, 40),
        emf: new kyc(360, 270, 120, 40),
        omf: new kyc(482, 270, 30, 40),
        ecl: new kyc(30, 330, 500, 30),
        fty: new kyc(210, 370, 140, 50),
        abc: new kyc(),
        sur: {
            uud: new kyc(40, 0, 240, 40),
            sos: new kyc(7, 12, 16, 16),
            fontSize: 20,
            xjw: 0,
            owp: 2
        },
        hvh: {
            xjw: 3,
            eha: -5,
            gtq: -1,
            jvq: 6,
            fontSize: 20,
            owp: 0
        },
        zlf: {
            xjw: 3,
            eha: 5,
            gtq: 0,
            jvq: 6,
            fontSize: 20,
            owp: 0
        },
        qzp: {
            xjw: 6,
            eha: 0,
            gtq: 0,
            jvq: 6,
            fontSize: 26,
            owp: 2
        },
        display: {
            gbd: 16,
            uux: 24,
            gvt: 0,
            hnd: 0,
            owp: 2,
            meh: 3,
            wev: 3,
            wwa: 3,
            zes: 3
        }
    };
    this.kwf = {
        ebf: [
            [new kyc(2, 550, 130, 44)],
            [new kyc(2, 550, 130, 44), new kyc(668, 550, 130, 44)],
            [new kyc(2, 550, 130, 23), new kyc(668, 550, 130, 23), new kyc(2, 571, 130, 23)],
            [new kyc(2, 550, 130, 23), new kyc(668, 550, 130, 23), new kyc(2, 571, 130, 23), new kyc(668, 571, 130, 23)]
        ],
        display: {
            kka: new kyc(0, 0, 130, 44),
            hgw: new kyc(0, 0, 130, 44),
            dhz: new kyc(),
            otm: new kyc(2, 3, 126, 19),
            tsg: new kyc(8, 24, 114, 19),
            gbd: 16,
            amm: 18,
            kkn: 0
        },
        con: {
            kka: new kyc(0, 0, 130, 23),
            hgw: new kyc(0, 0, 130, 23),
            dhz: new kyc(2, 2, 19, 19),
            otm: new kyc(),
            tsg: new kyc(22, 3, 100, 19),
            gbd: 14,
            amm: 18,
            kkn: 0
        },
        dec: {
            ebf: new kyc(62, 640, 676, 372),
            kka: new kyc(32, 10, 612, 351),
            hgw: new kyc(0, 0, 676, 372),
            dhz: new kyc(301, 263, 74, 74),
            otm: new kyc(120, 58, 436, 56),
            tsg: new kyc(32, 140, 612, 96),
            gbd: 68,
            amm: 100,
            kkn: 0
        },
        cnu: {
            ebf: new kyc(38, 610, 724, 369),
            jpr: new kyc(100, 53, 525, 50),
            tsg: new kyc(186, 153, 332, 94),
            dxz: 360,
            ipk: 30,
            lyk: {
                _0: new kyc(2, 0, 90, 94),
                _1: new kyc(98, 0, 90, 94),
                _2: new kyc(194, 0, 90, 94),
                _3: new kyc(290, 0, 90, 94),
                _4: new kyc(386, 0, 90, 94),
                _5: new kyc(482, 0, 90, 94),
                _6: new kyc(578, 0, 90, 94),
                _7: new kyc(674, 0, 90, 94),
                _8: new kyc(770, 0, 90, 94),
                _9: new kyc(866, 0, 90, 94),
                _cm: new kyc(962, 0, 28, 94),
                _dt: new kyc(999, 0, 28, 94),
                _sp: new kyc(1036, 0, 28, 94)
            }
        }
    }
}
reo.prototype = new xac;

function eao() {
    this.neo = false;
    this.kwn = true;
    this.hxm = true;
    this.canvas = {
        ebf: new kyc(0, 0, 960, 630)
    };
    this.sat = {
        ebf: new kyc(),
        yxu: 0,
        crz: 0
    };
    this.dcm = {
        ebf: new kyc(160, 30, 800, 600),
        owp: 0
    };
    this.bvv = {
        lpt: new kyc(460, 25, 500, 34),
        gia: new kyc(5, 2, 160, 30),
        sis: new kyc(170, 2, 160, 30),
        odn: new kyc(335, 2, 160, 30),
        wgs: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.kqm = {
        dcm: {
            ebf: new kyc(0, 0, 640, 460),
            ecl: new kyc(6, 416, 628, 38),
            uud: new kyc(6, 420, 628, 17),
            hle: new kyc(64, 442, 512, 7),
            wix: new kyc(6, 364, 628, 90),
            cua: new kyc(140, 384, 360, 70),
            fontSize: 18,
            arq: 20,
            gqn: 30,
            xrg: 6,
            eha: 12,
            gtq: 6,
            fru: 3
        },
        xgx: {
            ebf: new kyc(0, 0, 960, 630),
            ecl: new kyc(),
            uud: new kyc(),
            hle: new kyc(280, 431, 400, 8),
            wix: new kyc(180, 380, 600, 90),
            cua: new kyc(350, 400, 260, 70),
            fontSize: 18,
            arq: 24,
            gqn: 20,
            xrg: 0,
            eha: 12,
            gtq: 7,
            fru: 0
        }
    };
    this.mqg = {
        ebf: new kyc(160, 0, 800, 30),
        fontSize: 16,
        nbn: 26,
        sjs: 15,
        rjc: 160,
        eha: 2,
        gtq: 2,
        kol: 2,
        mit: 0
    };
    this.rjp = {};
    this.iyc = {
        ebf: new kyc(0, 0, 960, 630),
        lpt: new kyc(0, 0, 160, 630),
        wgs: {
            uux: 0,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            jvq: 8,
            xjw: 16,
            owp: 4
        },
        otm: new kyc(160, 50, 800, 40),
        fwb: new kyc(160, 130, 800, 40),
        okv: new kyc(160, 170, 800, 40),
        wkn: new kyc(160, 210, 800, 40),
        gst: new kyc(385, 305, 350, 100),
        iyb: new kyc(360, 510, 400, 40),
        vdu: {
            wkx: new kyc(10, 455, 140, 100),
        },
        knx: {
            wkx: new kyc(10, 355, 140, 100),
            elh: new kyc(10, 165, 140, 100)
        },
        def: 36,
        fontSize: 30,
        eys: 22,
        gtq: 3,
        eha: 5,
        owp: 2,
        agq: 3,
        nbj: 10
    };
    this.voz = {
        ebf: new kyc(160, 30, 800, 600),
        owp: 0,
        xjw: 0,
        tia: 50,
        vwz: 30,
        swf: 30,
        kcv: new kyc(30, 180, 410, 60),
        okc: new kyc(460, 180, 50, 60),
        bnb: new kyc(512, 180, 210, 60),
        bos: new kyc(724, 180, 50, 60),
        izy: new kyc(30, 310, 410, 60),
        hmd: new kyc(460, 310, 50, 60),
        olq: new kyc(512, 310, 210, 60),
        dsj: new kyc(724, 310, 50, 60),
        luk: new kyc(30, 440, 410, 60),
        ekx: new kyc(512, 440, 210, 60),
        twt: new kyc(40, 530, 720, 50),
        chc: new kyc(30, 120, 360, 60),
        zgq: new kyc(460, 120, 50, 60),
        dit: new kyc(512, 120, 210, 60),
        apv: new kyc(724, 120, 50, 60),
        api: new kyc(40, 200, 760, 70),
        hni: new kyc(30, 280, 410, 60),
        ipt: new kyc(460, 280, 50, 60),
        zvk: new kyc(512, 280, 210, 60),
        gxu: new kyc(724, 280, 50, 60),
        rny: new kyc(30, 360, 410, 60),
        gqg: new kyc(460, 360, 50, 60),
        pws: new kyc(512, 360, 210, 60),
        uwl: new kyc(724, 360, 50, 60),
        zvb: new kyc(30, 440, 410, 60),
        bhe: new kyc(460, 440, 50, 60),
        emf: new kyc(512, 440, 210, 60),
        omf: new kyc(724, 440, 50, 60),
        ecl: new kyc(40, 530, 720, 50),
        ywj: {
            kkb: new kyc(0, 0, 267, 90),
            fwp: new kyc(267, 0, 266, 90),
            igf: new kyc(533, 0, 267, 90),
            jnc: new kyc()
        },
        xhj: {
            kkb: new kyc(0, 0, 200, 90),
            rie: new kyc(200, 0, 200, 90),
            fwp: new kyc(400, 0, 200, 90),
            igf: new kyc(600, 0, 200, 90),
            jnc: new kyc()
        },
        vtw: [new kyc(132, 205, 200, 160), new kyc(464, 205, 200, 160)],
        mvp: [new kyc(50, 205, 200, 160), new kyc(300, 205, 200, 160), new kyc(550, 205, 200, 160)],
        ano: [new kyc(132, 130, 200, 160), new kyc(464, 130, 200, 160), new kyc(132, 360, 200, 160), new kyc(464, 360, 200, 160)],
        jrd: [new kyc(50, 130, 200, 160), new kyc(300, 130, 200, 160), new kyc(550, 130, 200, 160), new kyc(50, 360, 200, 160), new kyc(300, 360, 200, 160), new kyc(550, 360, 200, 160)],
        hvh: {
            xjw: 3,
            eha: -10,
            gtq: -1,
            jvq: 6,
            fontSize: 36,
            owp: 0
        },
        zlf: {
            xjw: 3,
            eha: 10,
            gtq: -1,
            jvq: 6,
            fontSize: 36,
            owp: 0
        },
        jqh: {
            fontSize: 36,
            eha: 0,
            gtq: 0,
            jvq: 10,
            xjw: 0,
            owp: 0
        },
        fso: {
            fontSize: 26,
            xrg: 5,
            xjw: 26,
            owp: 4,
            qdz: 40
        },
        cud: {
            gbd: 16,
            uux: 40,
            gvt: 0,
            hnd: 0,
            owp: 2,
            xrg: 3
        },
        fnz: {
            gbd: 16,
            uux: 40,
            gvt: 0,
            hnd: 0,
            owp: 2,
            xrg: 3
        },
        sur: {
            uud: new kyc(50, 0, 360, 60),
            sos: new kyc(0, 13, 30, 30),
            fontSize: 30,
            xjw: 0,
            owp: 2
        }
    };
    this.fhc = {
        ebf: new kyc(660, 30, 310, 60),
        otm: new kyc(60, 6, 240, 26),
        uud: new kyc(60, 34, 240, 20),
        vek: new kyc(5, 11, 50, 38),
        fqu: new kyc(8, 2, 34, 34),
        gbd: 16,
        uux: 12,
        dsn: 24
    };
    this.yxi = {
        ebf: new kyc(280, 150, 560, 330),
        gbd: 26,
        fontSize: 20,
        jwb: new kyc(515, 5, 40, 40),
        otm: new kyc(40, 5, 480, 30),
        iyb: new kyc(20, 40, 520, 195),
        ibv: new kyc(20, 265, 520, 54),
        wgs: {
            fontSize: 20
        }
    };
    this.kwf = {
        ebf: [
            [new kyc(162, 30, 130, 44)],
            [new kyc(162, 30, 130, 44), new kyc(828, 30, 130, 44)],
            [new kyc(162, 30, 130, 23), new kyc(828, 30, 130, 23), new kyc(162, 51, 130, 23)],
            [new kyc(162, 30, 130, 23), new kyc(828, 30, 130, 23), new kyc(162, 51, 130, 23), new kyc(828, 51, 130, 23)]
        ],
        display: {
            kka: new kyc(0, 0, 130, 44),
            hgw: new kyc(0, 0, 130, 44),
            dhz: new kyc(),
            otm: new kyc(2, 3, 126, 19),
            tsg: new kyc(8, 24, 114, 19),
            gbd: 16,
            amm: 18,
            kkn: 0
        },
        con: {
            kka: new kyc(0, 0, 130, 23),
            hgw: new kyc(0, 0, 130, 23),
            dhz: new kyc(2, 2, 19, 19),
            otm: new kyc(),
            tsg: new kyc(22, 3, 100, 19),
            gbd: 14,
            amm: 18,
            kkn: 0
        },
        dec: {
            ebf: new kyc(222, 110, 676, 372),
            kka: new kyc(32, 10, 612, 351),
            hgw: new kyc(0, 0, 676, 372),
            dhz: new kyc(301, 263, 74, 74),
            otm: new kyc(120, 58, 436, 56),
            tsg: new kyc(32, 140, 612, 96),
            gbd: 68,
            amm: 100,
            kkn: 0
        },
        cnu: {
            ebf: new kyc(198, 90, 724, 369),
            jpr: new kyc(100, 53, 525, 50),
            tsg: new kyc(186, 153, 332, 94),
            dxz: 340,
            ipk: 30,
            lyk: {
                _0: new kyc(2, 0, 90, 94),
                _1: new kyc(98, 0, 90, 94),
                _2: new kyc(194, 0, 90, 94),
                _3: new kyc(290, 0, 90, 94),
                _4: new kyc(386, 0, 90, 94),
                _5: new kyc(482, 0, 90, 94),
                _6: new kyc(578, 0, 90, 94),
                _7: new kyc(674, 0, 90, 94),
                _8: new kyc(770, 0, 90, 94),
                _9: new kyc(866, 0, 90, 94),
                _cm: new kyc(962, 0, 28, 94),
                _dt: new kyc(999, 0, 28, 94),
                _sp: new kyc(1036, 0, 28, 94)
            }
        }
    }
}
eao.prototype = new xac;

function uin() {
    this.neo = false;
    this.kwn = true;
    this.hxm = true;
    this.canvas = {
        ebf: new kyc(0, 0, 960, 630)
    };
    this.sat = {
        ebf: new kyc(),
        yxu: 0,
        crz: 0
    };
    this.dcm = {
        ebf: new kyc(0, 30, 800, 600),
        owp: 0
    };
    this.bvv = {
        lpt: new kyc(0, 25, 500, 34),
        gia: new kyc(5, 2, 160, 30),
        sis: new kyc(170, 2, 160, 30),
        odn: new kyc(335, 2, 160, 30),
        wgs: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.kqm = {
        dcm: {
            ebf: new kyc(0, 0, 640, 460),
            ecl: new kyc(6, 416, 628, 38),
            uud: new kyc(6, 420, 628, 17),
            hle: new kyc(64, 442, 512, 7),
            wix: new kyc(6, 364, 628, 90),
            cua: new kyc(140, 384, 360, 70),
            fontSize: 18,
            arq: 20,
            gqn: 30,
            xrg: 6,
            eha: 12,
            gtq: 6,
            fru: 3
        },
        xgx: {
            ebf: new kyc(0, 0, 960, 630),
            ecl: new kyc(),
            uud: new kyc(),
            hle: new kyc(280, 431, 400, 8),
            wix: new kyc(180, 380, 600, 90),
            cua: new kyc(350, 400, 260, 70),
            fontSize: 18,
            arq: 24,
            gqn: 20,
            xrg: 0,
            eha: 12,
            gtq: 7,
            fru: 0
        }
    };
    this.mqg = {
        ebf: new kyc(0, 0, 800, 30),
        fontSize: 16,
        nbn: 26,
        sjs: 15,
        rjc: 160,
        eha: 2,
        gtq: 2,
        kol: 2,
        mit: 0
    };
    this.rjp = {};
    this.iyc = {
        ebf: new kyc(0, 0, 960, 630),
        lpt: new kyc(800, 0, 160, 630),
        wgs: {
            uux: 0,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            jvq: 8,
            xjw: 16,
            owp: 4
        },
        otm: new kyc(0, 50, 800, 40),
        fwb: new kyc(0, 130, 800, 40),
        okv: new kyc(0, 170, 800, 40),
        wkn: new kyc(0, 210, 800, 40),
        gst: new kyc(225, 305, 350, 100),
        iyb: new kyc(200, 510, 400, 40),
        vdu: {
            wkx: new kyc(810, 455, 140, 100),
        },
        knx: {
            wkx: new kyc(810, 355, 140, 100),
            elh: new kyc(810, 165, 140, 100)
        },
        def: 36,
        fontSize: 30,
        eys: 22,
        gtq: 3,
        eha: 5,
        owp: 2,
        agq: 3,
        nbj: 10
    };
    this.voz = {
        ebf: new kyc(0, 30, 800, 600),
        owp: 0,
        xjw: 0,
        tia: 50,
        vwz: 30,
        swf: 30,
        kcv: new kyc(30, 180, 410, 60),
        okc: new kyc(460, 180, 50, 60),
        bnb: new kyc(512, 180, 210, 60),
        bos: new kyc(724, 180, 50, 60),
        izy: new kyc(30, 310, 410, 60),
        hmd: new kyc(460, 310, 50, 60),
        olq: new kyc(512, 310, 210, 60),
        dsj: new kyc(724, 310, 50, 60),
        luk: new kyc(30, 440, 410, 60),
        ekx: new kyc(512, 440, 210, 60),
        twt: new kyc(40, 530, 720, 50),
        chc: new kyc(30, 120, 360, 60),
        zgq: new kyc(460, 120, 50, 60),
        dit: new kyc(512, 120, 210, 60),
        apv: new kyc(724, 120, 50, 60),
        api: new kyc(40, 200, 760, 70),
        hni: new kyc(30, 280, 410, 60),
        ipt: new kyc(460, 280, 50, 60),
        zvk: new kyc(512, 280, 210, 60),
        gxu: new kyc(724, 280, 50, 60),
        rny: new kyc(30, 360, 410, 60),
        gqg: new kyc(460, 360, 50, 60),
        pws: new kyc(512, 360, 210, 60),
        uwl: new kyc(724, 360, 50, 60),
        zvb: new kyc(30, 440, 410, 60),
        bhe: new kyc(460, 440, 50, 60),
        emf: new kyc(512, 440, 210, 60),
        omf: new kyc(724, 440, 50, 60),
        ecl: new kyc(40, 530, 720, 50),
        ywj: {
            kkb: new kyc(0, 0, 267, 90),
            fwp: new kyc(267, 0, 266, 90),
            igf: new kyc(533, 0, 267, 90),
            jnc: new kyc()
        },
        xhj: {
            kkb: new kyc(0, 0, 200, 90),
            rie: new kyc(200, 0, 200, 90),
            fwp: new kyc(400, 0, 200, 90),
            igf: new kyc(600, 0, 200, 90),
            jnc: new kyc()
        },
        vtw: [new kyc(132, 205, 200, 160), new kyc(464, 205, 200, 160)],
        mvp: [new kyc(50, 205, 200, 160), new kyc(300, 205, 200, 160), new kyc(550, 205, 200, 160)],
        ano: [new kyc(132, 130, 200, 160), new kyc(464, 130, 200, 160), new kyc(132, 360, 200, 160), new kyc(464, 360, 200, 160)],
        jrd: [new kyc(50, 130, 200, 160), new kyc(300, 130, 200, 160), new kyc(550, 130, 200, 160), new kyc(50, 360, 200, 160), new kyc(300, 360, 200, 160), new kyc(550, 360, 200, 160)],
        hvh: {
            xjw: 3,
            eha: -10,
            gtq: -1,
            jvq: 6,
            fontSize: 36,
            owp: 0
        },
        zlf: {
            xjw: 3,
            eha: 10,
            gtq: -1,
            jvq: 6,
            fontSize: 36,
            owp: 0
        },
        jqh: {
            fontSize: 36,
            eha: 0,
            gtq: 0,
            jvq: 10,
            xjw: 0,
            owp: 0
        },
        fso: {
            fontSize: 26,
            xrg: 5,
            xjw: 26,
            owp: 4,
            qdz: 40
        },
        cud: {
            gbd: 16,
            uux: 40,
            gvt: 0,
            hnd: 0,
            owp: 2,
            xrg: 3
        },
        fnz: {
            gbd: 16,
            uux: 40,
            gvt: 0,
            hnd: 0,
            owp: 2,
            xrg: 3
        },
        sur: {
            uud: new kyc(50, 0, 360, 60),
            sos: new kyc(0, 13, 30, 30),
            fontSize: 30,
            xjw: 0,
            owp: 2
        }
    };
    this.fhc = {
        ebf: new kyc(-10, 30, 310, 60),
        otm: new kyc(10, 6, 240, 26),
        uud: new kyc(10, 34, 240, 20),
        vek: new kyc(255, 11, 50, 38),
        fqu: new kyc(8, 2, 34, 34),
        gbd: 16,
        uux: 12,
        dsn: 24
    };
    this.yxi = {
        ebf: new kyc(120, 150, 560, 330),
        gbd: 26,
        fontSize: 20,
        jwb: new kyc(515, 5, 40, 40),
        otm: new kyc(40, 5, 480, 30),
        iyb: new kyc(20, 40, 520, 195),
        ibv: new kyc(20, 265, 520, 54),
        wgs: {
            fontSize: 20
        }
    };
    this.kwf = {
        ebf: [
            [new kyc(2, 30, 130, 44)],
            [new kyc(2, 30, 130, 44), new kyc(668, 30, 130, 44)],
            [new kyc(2, 30, 130, 23), new kyc(668, 30, 130, 23), new kyc(2, 51, 130, 23)],
            [new kyc(2, 30, 130, 23), new kyc(668, 30, 130, 23), new kyc(2, 51, 130, 23), new kyc(668, 51, 130, 23)]
        ],
        display: {
            kka: new kyc(0, 0, 130, 44),
            hgw: new kyc(0, 0, 130, 44),
            dhz: new kyc(),
            otm: new kyc(2, 3, 126, 19),
            tsg: new kyc(8, 24, 114, 19),
            gbd: 16,
            amm: 18,
            kkn: 0
        },
        con: {
            kka: new kyc(0, 0, 130, 23),
            hgw: new kyc(0, 0, 130, 23),
            dhz: new kyc(2, 2, 19, 19),
            otm: new kyc(),
            tsg: new kyc(22, 3, 100, 19),
            gbd: 14,
            amm: 18,
            kkn: 0
        },
        dec: {
            ebf: new kyc(62, 110, 676, 372),
            kka: new kyc(32, 10, 612, 351),
            hgw: new kyc(0, 0, 676, 372),
            dhz: new kyc(301, 263, 74, 74),
            otm: new kyc(120, 58, 436, 56),
            tsg: new kyc(32, 140, 612, 96),
            gbd: 68,
            amm: 100,
            kkn: 0
        },
        cnu: {
            ebf: new kyc(38, 90, 724, 369),
            jpr: new kyc(100, 53, 525, 50),
            tsg: new kyc(186, 153, 332, 94),
            dxz: 340,
            ipk: 30,
            lyk: {
                _0: new kyc(2, 0, 90, 94),
                _1: new kyc(98, 0, 90, 94),
                _2: new kyc(194, 0, 90, 94),
                _3: new kyc(290, 0, 90, 94),
                _4: new kyc(386, 0, 90, 94),
                _5: new kyc(482, 0, 90, 94),
                _6: new kyc(578, 0, 90, 94),
                _7: new kyc(674, 0, 90, 94),
                _8: new kyc(770, 0, 90, 94),
                _9: new kyc(866, 0, 90, 94),
                _cm: new kyc(962, 0, 28, 94),
                _dt: new kyc(999, 0, 28, 94),
                _sp: new kyc(1036, 0, 28, 94)
            }
        }
    }
}
uin.prototype = new xac;

function yri() {
    this.wog = true;
    this.adz = true;
    this.bxq = {
        ebf: new kyc(0, 496, 800, 124),
        shk: new kyc(0, 0, 800, 124),
        tzz: new kyc(),
        hyp: {
            ebf: new kyc(187, 14, 470, 40),
            gtq: 10,
            fontSize: 18,
            xjw: 3,
            nrx: 2,
            jvq: 6,
            owp: 2
        },
        vda: {
            uux: 22,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            xjw: 10,
            jvq: 8,
            owp: 2
        },
        whw: {
            uux: 16,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            xjw: 8,
            jvq: 6,
            owp: 2
        },
        uwa: {
            uux: 16,
            amm: 16,
            eha: 0,
            xjw: 8,
            jvq: 6,
            owp: 2,
            hnd: 24,
            dlr: -24
        },
        display: {
            gvt: -12,
            hnd: 11,
            uux: 26,
            gbd: 15,
            owp: 2,
            meh: 3,
            wev: 3,
            wwa: 3,
            zes: 3
        },
        crs: new kyc(5, 10, 150, 48),
        jws: new kyc(689, 10, 106, 48),
        bvu: {
            gfb: new kyc(686, 68, 110, 53),
            vbd: new kyc(492, 68, 80, 53),
            nhm: new kyc(382, 68, 80, 53),
            elh: new kyc(272, 68, 80, 53),
            dcu: new kyc(25, 68, 110, 53),
            jfr: new kyc()
        },
        bts: {
            gfb: new kyc(686, 68, 110, 53),
            dcu: new kyc(532, 68, 80, 53),
            vbd: new kyc(432, 68, 80, 53),
            nhm: new kyc(332, 68, 80, 53),
            elh: new kyc(232, 68, 80, 53),
            vzr: new kyc(40, 68, 80, 53),
            jfr: new kyc()
        },
        gbw: {
            gfb: new kyc(686, 68, 110, 53),
            dcu: new kyc(492, 68, 80, 53),
            vbd: new kyc(382, 68, 80, 53),
            nhm: new kyc(272, 68, 80, 53),
            vzr: new kyc(40, 68, 80, 53),
            jfr: new kyc()
        },
        wbn: {
            gfb: new kyc(686, 68, 110, 53),
            vbd: new kyc(492, 68, 80, 53),
            nhm: new kyc(382, 68, 80, 53),
            elh: new kyc(272, 68, 80, 53),
            dcu: new kyc(25, 68, 110, 53),
            jfr: new kyc()
        },
        ypi: 15
    };
    this.dqz = {
        ebf: new kyc(0, 20, 800, 600),
        lpt: new kyc(0, 540, 800, 60),
        elh: new kyc(711, 544, 73, 53),
        ift: new kyc(11, 544, 73, 53),
        qbh: new kyc(316, 544, 73, 53),
        xuk: new kyc(411, 544, 73, 53),
        wgs: {
            uux: 16,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            jvq: 6,
            xjw: 8,
            owp: 2
        }
    };
    this.ytt = {
        ebf: new kyc(0, 20, 800, 600),
        lpt: new kyc(0, 485, 800, 115),
        hyp: {
            ebf: new kyc(187, 490, 470, 40),
            fontSize: 18,
            gtq: 14,
            xjw: 3,
            nrx: 2,
            jvq: 6,
            owp: 2
        },
        wgs: {
            uux: 18,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            jvq: 8,
            xjw: 10,
            owp: 2
        },
        display: {
            gvt: -12,
            hnd: 11,
            uux: 26,
            gbd: 15,
            owp: 2,
            meh: 3,
            wev: 3,
            wwa: 3,
            zes: 3
        },
        rrc: new kyc(689, 486, 106, 48),
        jbh: new kyc(5, 486, 150, 48)
    };
    this.phh = {
        ebf: new kyc(710, 35, 90, 450),
        otm: new kyc(5, 5, 80, 15),
        sht: new kyc(50, 25, 35, 410),
        fontSize: 15,
        kxt: 20,
        owp: 2,
        xjw: 5,
        ifq: 4,
        nie: 10,
        vjw: 5
    };
    this.bac = {
        fontSize: 18,
        iut: 128,
        nso: 176,
        avc: 0,
        ial: 20,
        poh: true
    };
    this.txd = new kyc(20, 290, 128, 205);
    this.zvh = new kyc(176, 290, 128, 205);
    this.mnb = new kyc(333, 290, 128, 205);
    this.wyj = new kyc(490, 290, 128, 205);
    this.qbz = new kyc(646, 290, 128, 205);
    this.wdt = {
        ebf: new kyc(363, 72, 408, 155),
        fontSize: 50,
        eha: 0,
        gtq: 9,
        xrg: 0,
        kkn: 2
    };
    this.gdk = {
        ebf: new kyc(355, 30, 424, 236),
        fontSize: 20,
        xrg: 6
    }
}
yri.prototype = new cor;

function sws() {
    this.avq = true
}
sws.prototype = new yri;

function cdj() {
    this.wog = true;
    this.adz = true;
    this.bxq = {
        ebf: new kyc(0, 1026, 800, 139),
        shk: new kyc(0, 0, 800, 139),
        tzz: new kyc(),
        hyp: {
            ebf: new kyc(187, 14, 470, 40),
            gtq: 10,
            fontSize: 18,
            xjw: 3,
            nrx: 2,
            jvq: 6,
            owp: 2
        },
        vda: {
            uux: 28,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            xjw: 12,
            jvq: 10,
            owp: 2
        },
        whw: {
            uux: 21,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            xjw: 10,
            jvq: 8,
            owp: 2
        },
        uwa: {
            uux: 21,
            amm: 21,
            eha: 0,
            xjw: 8,
            jvq: 6,
            owp: 2,
            hnd: 30,
            dlr: -32
        },
        display: {
            gvt: -12,
            hnd: 11,
            uux: 26,
            gbd: 15,
            owp: 2,
            meh: 3,
            wev: 3,
            wwa: 3,
            zes: 3
        },
        crs: new kyc(5, 10, 150, 48),
        jws: new kyc(689, 10, 106, 48),
        bvu: {
            gfb: new kyc(675, 68, 120, 68),
            vbd: new kyc(486, 68, 100, 68),
            nhm: new kyc(371, 68, 100, 68),
            elh: new kyc(256, 68, 100, 68),
            dcu: new kyc(20, 68, 120, 68),
            jfr: new kyc()
        },
        bts: {
            gfb: new kyc(675, 68, 110, 68),
            dcu: new kyc(536, 68, 100, 68),
            vbd: new kyc(426, 68, 100, 68),
            nhm: new kyc(316, 68, 100, 68),
            elh: new kyc(206, 68, 100, 68),
            vzr: new kyc(30, 68, 100, 68),
            jfr: new kyc()
        },
        gbw: {
            gfb: new kyc(675, 68, 120, 68),
            dcu: new kyc(486, 68, 100, 68),
            vbd: new kyc(371, 68, 100, 68),
            nhm: new kyc(256, 68, 100, 68),
            vzr: new kyc(30, 68, 100, 68),
            jfr: new kyc()
        },
        wbn: {
            gfb: new kyc(675, 68, 120, 68),
            vbd: new kyc(486, 68, 100, 68),
            nhm: new kyc(371, 68, 100, 68),
            elh: new kyc(256, 68, 100, 68),
            dcu: new kyc(20, 68, 120, 68),
            jfr: new kyc()
        },
        ypi: 15
    };
    this.dqz = {
        ebf: new kyc(0, 550, 800, 615),
        lpt: new kyc(0, 540, 800, 75),
        elh: new kyc(695, 544, 90, 68),
        ift: new kyc(11, 544, 90, 68),
        qbh: new kyc(295, 544, 90, 68),
        xuk: new kyc(415, 544, 90, 68),
        wgs: {
            uux: 21,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            jvq: 8,
            xjw: 10,
            owp: 2
        }
    };
    this.ytt = {
        ebf: new kyc(0, 550, 800, 615),
        lpt: new kyc(0, 485, 800, 130),
        hyp: {
            ebf: new kyc(187, 490, 470, 40),
            fontSize: 18,
            gtq: 14,
            xjw: 3,
            nrx: 2,
            jvq: 6,
            owp: 2
        },
        wgs: {
            uux: 23,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            jvq: 10,
            xjw: 12,
            owp: 2
        },
        display: {
            gvt: -12,
            hnd: 11,
            uux: 26,
            gbd: 15,
            owp: 2,
            meh: 3,
            wev: 3,
            wwa: 3,
            zes: 3
        },
        rrc: new kyc(689, 486, 106, 48),
        jbh: new kyc(5, 486, 150, 48)
    };
    this.phh = {
        ebf: new kyc(710, 565, 90, 450),
        otm: new kyc(5, 5, 80, 15),
        sht: new kyc(50, 25, 35, 410),
        fontSize: 15,
        kxt: 20,
        owp: 2,
        xjw: 5,
        ifq: 4,
        nie: 10,
        vjw: 5
    };
    this.bac = {
        fontSize: 18,
        iut: 128,
        nso: 176,
        avc: 0,
        ial: 20,
        poh: true
    };
    this.txd = new kyc(20, 820, 128, 205);
    this.zvh = new kyc(176, 820, 128, 205);
    this.mnb = new kyc(333, 820, 128, 205);
    this.wyj = new kyc(490, 820, 128, 205);
    this.qbz = new kyc(646, 820, 128, 205);
    this.wdt = {
        ebf: new kyc(363, 602, 408, 155),
        fontSize: 50,
        eha: 0,
        gtq: 9,
        xrg: 0,
        kkn: 2
    };
    this.gdk = {
        ebf: new kyc(355, 560, 424, 236),
        fontSize: 20,
        xrg: 6
    };
    this.top = {
        ebf: new kyc(0, 20, 800, 520)
    }
}
cdj.prototype = new reo;

function npa() {
    this.wog = false;
    this.adz = true;
    this.bxq = {
        ebf: new kyc(0, 0, 960, 630),
        shk: new kyc(160, 506, 800, 124),
        tzz: new kyc(0, 0, 160, 630),
        hyp: {
            ebf: new kyc(385, 525, 390, 70),
            gtq: 14,
            fontSize: 24,
            xjw: 3,
            nrx: 2,
            jvq: 6,
            owp: 2
        },
        vda: {
            uux: 0,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            xjw: 24,
            jvq: 8,
            owp: 6
        },
        whw: {
            uux: 0,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            xjw: 16,
            jvq: 8,
            owp: 4
        },
        uwa: {
            uux: 0,
            amm: 24,
            eha: 0,
            xjw: 24,
            jvq: 8,
            owp: 6,
            hnd: 0,
            dlr: -130
        },
        display: {
            gvt: -20,
            hnd: 16,
            uux: 32,
            gbd: 18,
            owp: 3,
            meh: 3,
            wev: 3,
            wwa: 3,
            zes: 3
        },
        crs: new kyc(165, 525, 180, 70),
        jws: new kyc(815, 525, 140, 70),
        bvu: {
            gfb: new kyc(10, 215, 140, 200),
            vbd: new kyc(),
            nhm: new kyc(),
            elh: new kyc(10, 455, 140, 100),
            dcu: new kyc(),
            jfr: new kyc(10, 75, 140, 100)
        },
        bts: {
            gfb: new kyc(10, 215, 140, 200),
            dcu: new kyc(),
            vbd: new kyc(),
            nhm: new kyc(),
            elh: new kyc(10, 455, 140, 100),
            vzr: new kyc(),
            jfr: new kyc(10, 75, 140, 100)
        },
        gbw: {
            gfb: new kyc(10, 215, 140, 200),
            dcu: new kyc(),
            vbd: new kyc(),
            nhm: new kyc(),
            vzr: new kyc(),
            jfr: new kyc(10, 75, 140, 100)
        },
        wbn: {
            gfb: new kyc(10, 215, 140, 200),
            vbd: new kyc(),
            nhm: new kyc(),
            elh: new kyc(10, 455, 140, 100),
            dcu: new kyc(),
            jfr: new kyc(10, 75, 140, 100)
        },
        ypi: 15
    };
    this.dqz = {
        ebf: new kyc(0, 0, 960, 630),
        lpt: new kyc(0, 0, 160, 630),
        elh: new kyc(10, 455, 140, 100),
        ift: new kyc(),
        qbh: new kyc(10, 75, 140, 100),
        xuk: new kyc(10, 265, 140, 100),
        wgs: {
            uux: 0,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            jvq: 16,
            xjw: 16,
            owp: 4
        }
    };
    this.ytt = {
        ebf: new kyc(0, 0, 960, 630),
        lpt: new kyc(0, 0, 160, 630),
        hyp: {
            ebf: new kyc(390, 525, 390, 70),
            fontSize: 20,
            gtq: 14,
            xjw: 3,
            nrx: 2,
            jvq: 6,
            owp: 2
        },
        wgs: {
            uux: 24,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            jvq: 8,
            xjw: 16,
            owp: 4
        },
        display: {
            gvt: -20,
            hnd: 16,
            uux: 32,
            gbd: 18,
            owp: 3,
            meh: 3,
            wev: 3,
            wwa: 3,
            zes: 3
        },
        jbh: new kyc(165, 525, 180, 70),
        rrc: new kyc(815, 525, 140, 70),
    };
    this.bac = {
        fontSize: 18,
        iut: 128,
        nso: 176,
        avc: 0,
        ial: 20,
        poh: true
    };
    this.txd = new kyc(180, 300, 128, 205);
    this.zvh = new kyc(336, 300, 128, 205);
    this.mnb = new kyc(493, 300, 128, 205);
    this.wyj = new kyc(650, 300, 128, 205);
    this.qbz = new kyc(806, 300, 128, 205);
    this.wdt = {
        ebf: new kyc(523, 82, 408, 155),
        fontSize: 50,
        eha: 0,
        gtq: 9,
        xrg: 0,
        kkn: 2
    };
    this.gdk = {
        ebf: new kyc(515, 40, 424, 236),
        fontSize: 20,
        xrg: 6
    };
    this.voz.kcv = new kyc();
    this.voz.bnb = new kyc();
    this.voz.izy = new kyc();
    this.voz.hmd = new kyc();
    this.voz.olq = new kyc();
    this.voz.dsj = new kyc();
    this.voz.luk = new kyc(30, 180, 410, 60);
    this.voz.ekx = new kyc(512, 180, 210, 60)
}
npa.prototype = new eao;

function yga() {
    this.wog = false;
    this.adz = true;
    this.bxq = {
        ebf: new kyc(0, 0, 960, 630),
        shk: new kyc(0, 506, 800, 124),
        tzz: new kyc(800, 0, 160, 630),
        hyp: {
            ebf: new kyc(225, 525, 390, 70),
            gtq: 14,
            fontSize: 24,
            xjw: 3,
            nrx: 2,
            jvq: 6,
            owp: 2
        },
        vda: {
            uux: 0,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            xjw: 24,
            jvq: 8,
            owp: 6
        },
        whw: {
            uux: 0,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            xjw: 16,
            jvq: 8,
            owp: 4
        },
        uwa: {
            uux: 0,
            amm: 24,
            eha: 0,
            xjw: 24,
            jvq: 8,
            owp: 6,
            hnd: 0,
            dlr: -130
        },
        display: {
            gvt: -20,
            hnd: 16,
            uux: 32,
            gbd: 18,
            owp: 3,
            meh: 3,
            wev: 3,
            wwa: 3,
            zes: 3
        },
        crs: new kyc(5, 525, 180, 70),
        jws: new kyc(655, 525, 140, 70),
        bvu: {
            gfb: new kyc(810, 215, 140, 200),
            vbd: new kyc(),
            nhm: new kyc(),
            elh: new kyc(810, 455, 140, 100),
            dcu: new kyc(),
            jfr: new kyc(810, 75, 140, 100)
        },
        bts: {
            gfb: new kyc(810, 215, 140, 200),
            dcu: new kyc(),
            vbd: new kyc(),
            nhm: new kyc(),
            elh: new kyc(810, 455, 140, 100),
            vzr: new kyc(),
            jfr: new kyc(810, 75, 140, 100)
        },
        gbw: {
            gfb: new kyc(810, 215, 140, 200),
            dcu: new kyc(),
            vbd: new kyc(),
            nhm: new kyc(),
            vzr: new kyc(),
            jfr: new kyc(810, 75, 140, 100)
        },
        wbn: {
            gfb: new kyc(810, 215, 140, 200),
            vbd: new kyc(),
            nhm: new kyc(),
            elh: new kyc(810, 455, 140, 100),
            dcu: new kyc(),
            jfr: new kyc(810, 75, 140, 100)
        },
        ypi: 15
    };
    this.dqz = {
        ebf: new kyc(0, 0, 960, 630),
        lpt: new kyc(800, 0, 160, 630),
        elh: new kyc(810, 455, 140, 100),
        ift: new kyc(),
        qbh: new kyc(810, 75, 140, 100),
        xuk: new kyc(810, 265, 140, 100),
        wgs: {
            uux: 0,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            jvq: 16,
            xjw: 16,
            owp: 4
        }
    };
    this.ytt = {
        ebf: new kyc(0, 0, 960, 630),
        lpt: new kyc(800, 0, 160, 630),
        hyp: {
            ebf: new kyc(230, 525, 390, 70),
            fontSize: 20,
            gtq: 14,
            xjw: 3,
            nrx: 2,
            jvq: 6,
            owp: 2
        },
        wgs: {
            uux: 24,
            amm: 0,
            eha: 0,
            hnd: 0,
            dlr: 0,
            jvq: 8,
            xjw: 16,
            owp: 4
        },
        display: {
            gvt: -20,
            hnd: 16,
            uux: 32,
            gbd: 18,
            owp: 3,
            meh: 3,
            wev: 3,
            wwa: 3,
            zes: 3
        },
        jbh: new kyc(5, 525, 180, 70),
        rrc: new kyc(655, 525, 140, 70),
    };
    this.bac = {
        fontSize: 18,
        iut: 128,
        nso: 176,
        avc: 0,
        ial: 20,
        poh: true
    };
    this.txd = new kyc(20, 300, 128, 205);
    this.zvh = new kyc(176, 300, 128, 205);
    this.mnb = new kyc(333, 300, 128, 205);
    this.wyj = new kyc(490, 300, 128, 205);
    this.qbz = new kyc(646, 300, 128, 205);
    this.wdt = {
        ebf: new kyc(363, 82, 408, 155),
        fontSize: 50,
        eha: 0,
        gtq: 9,
        xrg: 0,
        kkn: 2
    };
    this.gdk = {
        ebf: new kyc(355, 40, 424, 236),
        fontSize: 20,
        xrg: 6
    };
    this.voz.kcv = new kyc();
    this.voz.bnb = new kyc();
    this.voz.izy = new kyc();
    this.voz.hmd = new kyc();
    this.voz.olq = new kyc();
    this.voz.dsj = new kyc();
    this.voz.luk = new kyc(30, 180, 410, 60);
    this.voz.ekx = new kyc(512, 180, 210, 60)
}
yga.prototype = new uin;

function fvs() {
    this.zqq = {
        ebf: new kyc(81, 190, 198, 64)
    };
    this.wdt.fontSize = 40;
    this.wdt.gbd = 40;
    this.wdt.gtq = 40;
    this.wdt.gvt = -40;
    this.gdk.xrg = 10;
    this.ytt.bac = {
        ebf: new kyc(19, 266, 430, 176),
        iut: 128,
        nso: 176,
        eha: 30,
    };
    this.ytt.wdt = {
        ebf: new kyc(363, 52, 408, 155),
        fontSize: 40,
        gbd: 40,
        eha: 0,
        gtq: 40,
        gvt: -40,
        xrg: 0,
        kkn: 2
    };
    this.ytt.dac = {
        ebf: new kyc(89, 171, 180, 64),
        iut: 36,
        nso: 64,
        uao: 36,
        lgn: 64
    };
    this.ytt.whw = {
        uux: 16,
        amm: 0,
        eha: 0,
        hnd: 0,
        dlr: 0,
        xjw: 8,
        jvq: 6,
        owp: 2
    };
    this.ytt.laf = new kyc(686, 544, 110, 53);
    this.ytt.rfj = new kyc(382, 544, 80, 53);
    this.ytt.hdm = new kyc(272, 544, 80, 53);
    this.ytt.uwn = new kyc(492, 544, 80, 53);
    this.ytt.ecl = new kyc(50, 20, 700, 120);
    this.ytt.wzl = new kyc(626, 281, 86, 156);
    this.dqz.win = {
        ebf: new kyc(0, 0, 800, 600),
        fontSize: 16,
        gbd: 40,
        swf: 12,
        lineWidth: 1,
        otm: new kyc(),
        ecl: new kyc(0, 530, 800, 20),
        vcw: [new kyc(22, 40, 161, 19), new kyc(422, 40, 161, 19), new kyc(22, 140, 161, 19), new kyc(422, 140, 161, 19), new kyc(22, 240, 161, 19), new kyc(422, 240, 161, 19), new kyc(22, 340, 161, 19), new kyc(422, 340, 161, 19), new kyc(22, 440, 161, 19), new kyc(422, 440, 161, 19)],
        uud: [new kyc(190, 61, 190, 44), new kyc(590, 61, 190, 44), new kyc(190, 161, 190, 44), new kyc(590, 161, 190, 44), new kyc(190, 261, 190, 44), new kyc(590, 261, 190, 44), new kyc(190, 361, 190, 44), new kyc(590, 361, 190, 44), new kyc(190, 461, 190, 44), new kyc(590, 461, 190, 44)]
    }
}
fvs.prototype = new yri;

function roo() {
    this.avq = true
}
roo.prototype = new fvs;

function vcm() {
    this.zqq = {
        ebf: new kyc(81, 720, 198, 64)
    };
    this.wdt.fontSize = 40;
    this.wdt.gbd = 40;
    this.wdt.gtq = 40;
    this.wdt.gvt = -40;
    this.gdk.xrg = 10;
    this.ytt.bac = {
        ebf: new kyc(19, 266, 430, 176),
        iut: 128,
        nso: 176,
        eha: 30,
    };
    this.ytt.wdt = {
        ebf: new kyc(363, 52, 408, 155),
        fontSize: 40,
        gbd: 40,
        eha: 0,
        gtq: 40,
        gvt: -40,
        xrg: 0,
        kkn: 2
    };
    this.ytt.dac = {
        ebf: new kyc(89, 171, 180, 64),
        iut: 36,
        nso: 64,
        uao: 36,
        lgn: 64
    };
    this.ytt.whw = {
        uux: 21,
        amm: 0,
        eha: 0,
        hnd: 0,
        dlr: 0,
        xjw: 10,
        jvq: 8,
        owp: 2
    };
    this.ytt.laf = new kyc(675, 544, 120, 68);
    this.ytt.rfj = new kyc(371, 544, 100, 68);
    this.ytt.hdm = new kyc(256, 544, 100, 68);
    this.ytt.uwn = new kyc(486, 544, 100, 68);
    this.ytt.ecl = new kyc(50, 20, 700, 120);
    this.ytt.wzl = new kyc(626, 281, 86, 156);
    this.dqz.win = {
        ebf: new kyc(0, 0, 800, 615),
        fontSize: 16,
        gbd: 40,
        swf: 12,
        lineWidth: 1,
        otm: new kyc(),
        ecl: new kyc(0, 530, 800, 20),
        vcw: [new kyc(22, 40, 161, 19), new kyc(422, 40, 161, 19), new kyc(22, 140, 161, 19), new kyc(422, 140, 161, 19), new kyc(22, 240, 161, 19), new kyc(422, 240, 161, 19), new kyc(22, 340, 161, 19), new kyc(422, 340, 161, 19), new kyc(22, 440, 161, 19), new kyc(422, 440, 161, 19)],
        uud: [new kyc(190, 61, 190, 44), new kyc(590, 61, 190, 44), new kyc(190, 161, 190, 44), new kyc(590, 161, 190, 44), new kyc(190, 261, 190, 44), new kyc(590, 261, 190, 44), new kyc(190, 361, 190, 44), new kyc(590, 361, 190, 44), new kyc(190, 461, 190, 44), new kyc(590, 461, 190, 44)]
    };
    this.top.win = {
        ebf: new kyc(0, 0, 800, 520),
        fontSize: 16,
        gbd: 40,
        swf: 12,
        lineWidth: 1,
        otm: new kyc(),
        ecl: new kyc(0, 500, 800, 20),
        vcw: [new kyc(22, 20, 161, 19), new kyc(422, 20, 161, 19), new kyc(22, 120, 161, 19), new kyc(422, 120, 161, 19), new kyc(22, 220, 161, 19), new kyc(422, 220, 161, 19), new kyc(22, 320, 161, 19), new kyc(422, 320, 161, 19), new kyc(22, 420, 161, 19), new kyc(422, 420, 161, 19)],
        uud: [new kyc(190, 41, 190, 44), new kyc(590, 41, 190, 44), new kyc(190, 141, 190, 44), new kyc(590, 141, 190, 44), new kyc(190, 241, 190, 44), new kyc(590, 241, 190, 44), new kyc(190, 341, 190, 44), new kyc(590, 341, 190, 44), new kyc(190, 441, 190, 44), new kyc(590, 441, 190, 44)]
    }
}
vcm.prototype = new cdj;

function gfs() {
    this.zqq = {
        ebf: new kyc(241, 200, 198, 64)
    };
    this.wdt.fontSize = 40;
    this.wdt.gbd = 40;
    this.wdt.gtq = 40;
    this.wdt.gvt = -40;
    this.gdk.xrg = 10;
    this.ytt.bac = {
        ebf: new kyc(179, 296, 430, 176),
        iut: 128,
        nso: 176,
        eha: 30,
    };
    this.ytt.wdt = {
        ebf: new kyc(523, 82, 408, 155),
        fontSize: 40,
        gbd: 40,
        eha: 0,
        gtq: 40,
        gvt: -40,
        xrg: 0,
        kkn: 2
    };
    this.ytt.dac = {
        ebf: new kyc(249, 201, 180, 64),
        iut: 36,
        nso: 64,
        uao: 36,
        lgn: 64
    };
    this.ytt.whw = {
        uux: 26,
        amm: 0,
        eha: 0,
        hnd: 0,
        dlr: 0,
        xjw: 16,
        jvq: 8,
        owp: 4
    };
    this.ytt.laf = new kyc(10, 455, 140, 100);
    this.ytt.rfj = new kyc(10, 65, 140, 100);
    this.ytt.hdm = new kyc(10, 325, 140, 100);
    this.ytt.uwn = new kyc(10, 195, 140, 100);
    this.ytt.ecl = new kyc(210, 50, 700, 120);
    this.ytt.wzl = new kyc(786, 311, 86, 156);
    this.dqz.win = {
        ebf: new kyc(160, 30, 800, 600),
        fontSize: 16,
        gbd: 40,
        swf: 20,
        lineWidth: 1,
        otm: new kyc(),
        ecl: new kyc(0, 530, 800, 40),
        vcw: [new kyc(22, 40, 161, 19), new kyc(422, 40, 161, 19), new kyc(22, 140, 161, 19), new kyc(422, 140, 161, 19), new kyc(22, 240, 161, 19), new kyc(422, 240, 161, 19), new kyc(22, 340, 161, 19), new kyc(422, 340, 161, 19), new kyc(22, 440, 161, 19), new kyc(422, 440, 161, 19)],
        uud: [new kyc(190, 61, 190, 44), new kyc(590, 61, 190, 44), new kyc(190, 161, 190, 44), new kyc(590, 161, 190, 44), new kyc(190, 261, 190, 44), new kyc(590, 261, 190, 44), new kyc(190, 361, 190, 44), new kyc(590, 361, 190, 44), new kyc(190, 461, 190, 44), new kyc(590, 461, 190, 44)]
    }
}
gfs.prototype = new npa;

function blt() {
    this.zqq = {
        ebf: new kyc(81, 200, 198, 64)
    };
    this.wdt.fontSize = 40;
    this.wdt.gbd = 40;
    this.wdt.gtq = 40;
    this.wdt.gvt = -40;
    this.gdk.xrg = 10;
    this.ytt.bac = {
        ebf: new kyc(19, 296, 430, 176),
        iut: 128,
        nso: 176,
        eha: 30,
    };
    this.ytt.wdt = {
        ebf: new kyc(363, 82, 408, 155),
        fontSize: 40,
        gbd: 40,
        eha: 0,
        gtq: 40,
        gvt: -40,
        xrg: 0,
        kkn: 2
    };
    this.ytt.dac = {
        ebf: new kyc(89, 201, 180, 64),
        iut: 36,
        nso: 64,
        uao: 36,
        lgn: 64
    };
    this.ytt.whw = {
        uux: 26,
        amm: 0,
        eha: 0,
        hnd: 0,
        dlr: 0,
        xjw: 16,
        jvq: 8,
        owp: 4
    };
    this.ytt.laf = new kyc(810, 455, 140, 100);
    this.ytt.rfj = new kyc(810, 65, 140, 100);
    this.ytt.hdm = new kyc(810, 325, 140, 100);
    this.ytt.uwn = new kyc(810, 195, 140, 100);
    this.ytt.ecl = new kyc(50, 50, 700, 120);
    this.ytt.wzl = new kyc(626, 311, 86, 156);
    this.dqz.win = {
        ebf: new kyc(0, 30, 800, 600),
        fontSize: 16,
        gbd: 40,
        swf: 20,
        lineWidth: 1,
        otm: new kyc(),
        ecl: new kyc(0, 530, 800, 40),
        vcw: [new kyc(22, 40, 161, 19), new kyc(422, 40, 161, 19), new kyc(22, 140, 161, 19), new kyc(422, 140, 161, 19), new kyc(22, 240, 161, 19), new kyc(422, 240, 161, 19), new kyc(22, 340, 161, 19), new kyc(422, 340, 161, 19), new kyc(22, 440, 161, 19), new kyc(422, 440, 161, 19)],
        uud: [new kyc(190, 61, 190, 44), new kyc(590, 61, 190, 44), new kyc(190, 161, 190, 44), new kyc(590, 161, 190, 44), new kyc(190, 261, 190, 44), new kyc(590, 261, 190, 44), new kyc(190, 361, 190, 44), new kyc(590, 361, 190, 44), new kyc(190, 461, 190, 44), new kyc(590, 461, 190, 44)]
    }
}
blt.prototype = new yga;
var jyv = {
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
    ejv: {
        swn: 0,
        yyp: 1,
        jgz: 2,
        dbm: 3,
        yfi: 4,
        bbr: 5,
        szb: 10,
        lru: 11,
        smd: 12,
        oae: 13,
        bjg: 14,
        yny: 15,
        bus: 16
    },
    os: {
        bze: 0,
        lhy: 1,
        lrk: 2,
        qfe: 3,
        rlm: 4
    },
    bxp: {
        qjs: 1,
        uxs: 3,
        zgh: 4,
        eyw: 5,
        gsf: 7,
        hsg: 8,
        mqa: 11,
        udj: 13,
        she: 14,
        jdb: 6,
        aqn: 9,
        dil: 10
    },
    xwn: {
        nhw: 1,
        idk: 2,
        zay: 4,
        bbl: 8,
        rvi: 16,
        gfd: 32
    },
    eup: {
        jpd: 1,
        jor: 2,
        jar: 3,
        rlj: 4,
        skd: 5,
        ypk: 6,
        ryc: 7,
        yqt: 94,
        bea: 95,
        yta: 96,
        flv: 97,
        thk: 98,
        iii: 99,
        roulette: {
            nnu: 2,
            wxw: 9,
            tmx: 10
        }
    },
    ui: {
        nsj: "minimal",
        hgy: "modern",
        zgh: "classic"
    },
    lcb: {
        uqg: "auto",
        jcw: "left",
        tac: "right"
    },
    kqm: {
        qji: 0,
        zqw: 4
    },
    kwf: {
        lpk: {
            sip: "ji",
            chq: "jv",
            njg: "jh"
        }
    },
    jkz: {
        dzb: {
            wwh: 1,
            tbn: 2
        },
        tgk: {
            eeg: 1,
            ydf: 2,
            snl: 3
        }
    }
};
jyv.xzm = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += jyv.xwn.nhw
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += jyv.xwn.idk
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += jyv.xwn.zay
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += jyv.xwn.zay
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += jyv.xwn.bbl
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.ore = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.ore();
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
            window.jtr = window.requestAnimationFrame;
            window.iop = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.jtr; ++a) {
            window.jtr = window[g[a] + "RequestAnimationFrame"];
            window.iop = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.jtr || !window.iop) {
            window.jtr = function(l, i) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.iop) {
            window.iop = function(e) {
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
        console.error(c.eup)
    }
    return f
})();

function bkz() {
    var a = {};
    this.jil = 1;
    this.zxq = 1;
    this.lay = 0.6;
    this.ywp = 0.4;
    this.lya = function() {};
    this.nad = function(b, c) {
        a[b] = c
    };
    this.gcz = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.jil
        }
    }
}

function owt() {
    this.audio = {
        xbc: 65,
        swt: -1,
        value: "A",
        myl: null
    };
    this.aqq = {
        xbc: 70,
        swt: 122,
        value: "F",
        myl: "F11"
    };
    this.dac = {
        xbc: 72,
        swt: -1,
        value: "H",
        myl: null
    };
    this.iyc = {
        xbc: 83,
        swt: -1,
        value: "S",
        myl: null
    };
    this.nco = {
        xbc: 68,
        swt: -1,
        value: "D",
        myl: null
    };
    this.ok = {
        xbc: 13,
        swt: -1,
        value: "OK",
        myl: null
    };
    this.ucx = [this.audio, this.aqq, this.dac, this.iyc, this.nco, this.ok]
}

function efb() {
    var o = this;
    this.gru = false;
    this.ttg = null;
    this.lzy = false;
    this.hdl = false;
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
    this.lya = function() {
        this.uvf();
        this.cix();
        this.lzy = false;
        this.hdl = false
    };
    this.uvf = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.ttg = webAudioEngine.createGain();
            this.ttg.connect(webAudioEngine.destination);
            this.gru = true
        } catch (p) {
            this.gru = false
        }
    };
    this.cix = function() {
        m = jyv.oot.kld()
    };
    this.aiv = function(p) {
        l = p
    };
    this.ipx = function(p) {
        c = p
    };
    this.xug = function(t, s, p, q) {
        var r = new awr(t);
        r.lya(this.gru, s, p, l.gcz(t));
        i[t] = r;
        k.push(r);
        d.push({
            gyl: r,
            wzt: q,
            sta: o.was,
            zzi: m
        })
    };
    this.eef = function(r, q) {
        var p = new Image();
        f[r] = p;
        d.push({
            gyl: p,
            wzt: q,
            sta: null
        })
    };
    this.sfr = function(q, p) {
        d.unshift({
            gyl: null,
            wzt: q,
            sta: o.azh,
            qof: p
        })
    };
    this.uqw = function() {
        n = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            o.bza(d.shift())
        }
    };
    this.start = function() {
        if (!o.lzy) {
            return
        }
        o.lzy = false;
        n = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var q = 0; q < j && d.length > 0; q++) {
            a.push(d.shift())
        }
        for (var p = 0; p < a.length; p++) {
            o.bza(a.shift())
        }
    };
    this.lzx = function() {
        b++;
        if (o.ydd()) {
            o.lzy = true;
            jyv.dcm.gqj()
        }
    };
    this.asc = function() {
        o.oiz()
    };
    this.yyz = function() {
        o.hdl = true;
        o.oiz()
    };
    this.oiz = function() {
        b++;
        o.uch();
        if (o.ydd()) {
            o.yed()
        } else {
            o.gqr()
        }
    };
    this.uch = function() {
        var p = jyv.dcm.cwl.drl("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (p) {
                p.spt(e)
            }
        }
    };
    this.yed = function() {
        var q = jyv.dcm.cwl.drl("loading");
        if (o.hdl) {
            jyv.dcm.rxs(jyv.dcm.language.chy);
            var p = confirm(jyv.dcm.language.ugr);
            if (p == true) {
                jyv.dcm.exx = false;
                o.pny();
                jyv.dcm.mmr()
            } else {
                jyv.dcm.qca({
                    type: "gameDataLoaded",
                    sender: jyv.dcm.lqz,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                });
                setTimeout(jyv.dcm.cex, 1000)
            }
        } else {
            if (!jyv.dcm.wud) {
                e = 100;
                if (q) {
                    q.spt(e)
                }
                if (c === true) {
                    q.cec()
                } else {
                    setTimeout(jyv.dcm.mmr, 200)
                }
            }
        }
    };
    this.zln = function() {
        return e
    };
    this.gqr = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].gyl instanceof Image || a[0].gyl instanceof awr)) {
                j = 30;
                for (var p = 0; p < j && d.length > 0; p++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            o.bza(a.shift())
        }
    };
    this.ydd = function() {
        return (g > 0 && b == g)
    };
    this.bza = function(p) {
        if (p.gyl instanceof Image) {
            if (n === true) {
                this.awc(p.gyl, p.wzt)
            } else {
                this.fip(p.gyl, p.wzt)
            }
        } else {
            if (p.gyl instanceof awr) {
                this.xzo(p.gyl, p.wzt, p.sta, p.zzi)
            } else {
                this.omk(p.wzt, p.qof, p.sta)
            }
        }
    };
    this.awc = function(q, p) {
        q.onload = function() {
            jyv.dcm.nej.lzx()
        };
        q.onerror = function() {
            console.error("can not load image " + p)
        };
        q.src = p + "?v=" + jyv.dcm.chv
    };
    this.fip = function(q, p) {
        q.onload = function() {
            jyv.dcm.nej.asc()
        };
        q.onerror = function() {
            console.error("can not load image " + p);
            jyv.dcm.rxs(jyv.dcm.language.cxv);
            setTimeout(jyv.dcm.cex, 3000)
        };
        q.src = p + "?v=" + jyv.dcm.chv
    };
    this.xzo = function(q, r, s, p) {
        q.load(r, s, p)
    };
    this.omk = function(s, p, t) {
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
            jyv.dcm.rxs(jyv.dcm.language.cxv);
            setTimeout(jyv.dcm.cex, 3000)
        };
        try {
            q.send()
        } catch (r) {
            console.error("can not load from " + s + p);
            jyv.dcm.rxs(jyv.dcm.language.cxv);
            setTimeout(jyv.dcm.cex, 3000)
        }
    };
    this.was = function(q, p) {
        i[q].jii = p
    };
    this.azh = function(r, q) {
        var p = new Image();
        p.onload = function() {
            o.grs(p, q.data)
        };
        p.onerror = function() {
            console.error("can not load image " + r + q.src);
            jyv.dcm.rxs(jyv.dcm.language.cxv);
            setTimeout(jyv.dcm.cex, 3000)
        };
        p.src = r + q.src + "?v=" + jyv.dcm.chv
    };
    this.grs = function(r, u) {
        var s = null,
            q = null;
        for (var t = 0, p = u.length; t < p; t++) {
            s = document.createElement("canvas");
            s.width = u[t].rect.w;
            s.height = u[t].rect.h;
            q = s.getContext("2d");
            q.drawImage(r, u[t].rect.x, u[t].rect.y, u[t].rect.w, u[t].rect.h, 0, 0, u[t].rect.w, u[t].rect.h);
            o.psd(u[t].id, s)
        }
        jyv.dcm.nej.asc()
    };
    this.ata = function(p) {
        if (i && i[p]) {
            return i[p]
        } else {}
        return null
    };
    this.psd = function(q, p) {
        if (p && !f[q]) {
            f[q] = p
        } else {}
        return null
    };
    this.pvr = function(p) {
        if (f[p]) {
            return f[p]
        } else {}
        return null
    };
    this.ike = function(p) {
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
    this.dom = function(p) {
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
    this.ddz = function(q, p) {
        if (i && i[q]) {
            i[q].play(p)
        } else {}
    };
    this.ckk = function(p) {
        if (i && i[p]) {
            i[p].stop()
        } else {}
    };
    this.tsm = function(q, p) {
        if (i && i[q]) {
            i[q].fcu(p)
        } else {}
    };
    this.nbv = function(s, q, r, p) {
        p = (p != null && p === true);
        if (i && i[s]) {
            i[s].sre(l.gcz(s) * q, r, p)
        }
    };
    this.dzh = function(p) {
        if (i && i[p]) {
            return i[p].uci()
        }
        return 0
    };
    this.pyw = function(p) {
        if (this.gru) {
            this.ttg.gain.setValueAtTime(p, webAudioEngine.currentTime)
        }
    };
    this.ubv = function(q) {
        if (this.gru) {
            this.ttg.gain.setValueAtTime((q) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (k) {
                for (var p = 0; p < k.length; p++) {
                    k[p].fcu(q)
                }
            }
        }
    };
    this.pny = function() {
        if (k) {
            for (var p = 0; p < k.length; p++) {
                k[p].clear()
            }
        }
        k = null;
        i = null
    }
}

function chu() {
    this.huh = {};
    this.hyq = {};
    this.jnx = [];
    this.lya = function() {
        this.huh = {};
        this.hyq = {};
        this.jnx = []
    };
    this.mwi = function(b) {
        this.huh[b] = b
    };
    this.wvv = function(f, e, d) {
        this.hyq[f] = e;
        this.hyq[f].tgz = [];
        if (d && this.huh) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.huh[d[c]]) {
                    this.hyq[f].tgz.push(d[c])
                } else {}
            }
        }
        this.jnx.push(this.hyq[f])
    };
    this.bke = function() {
        var c = [];
        for (var d = 0, b = this.jnx.length; d < b; d++) {
            if (this.jnx[d] != null) {
                c.push(this.jnx[d])
            }
        }
        return c
    };
    this.drl = function(b) {
        if (this.hyq && this.hyq[b]) {
            return this.hyq[b]
        }
        return null
    };
    this.ovp = function(g) {
        if (this.huh && this.huh[g]) {
            var d = [];
            for (var f = 0, b = this.jnx.length; f < b; f++) {
                for (var e = 0, c = this.jnx[f].tgz.length; e < c; e++) {
                    if (this.jnx[f].tgz[e] == g) {
                        d.push(this.jnx[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.nor = function() {
        return this.huh
    };
    this.htk = function(e) {
        var d = -1;
        if (this.hyq && this.hyq[e]) {
            for (var c = 0, b = this.jnx.length; c < b; c++) {
                if (this.jnx[c] == this.hyq[e]) {
                    d = c;
                    this.hyq[e] = null
                }
            }
        }
        if (d >= 0) {
            this.jnx.splice(d, 1)
        }
    };
    this.zyh = function(f) {
        if (this.huh && this.huh[f]) {
            this.huh[f] = null;
            for (var e = 0, b = this.jnx.length; e < b; e++) {
                for (var d = 0, c = this.jnx[e].tgz.length; d < c; d++) {
                    if (this.jnx[e].tgz[d] == f) {
                        this.jnx[e].tgz.splice(d, 1)
                    }
                }
            }
        }
    };
    this.iiz = function(e, d, c, b) {
        return a(this.drl(e), d, c, b)
    };
    this.apc = function(f, d, c) {
        for (var e = 0, b = this.jnx.length; e < b; e++) {
            a(this.jnx[e], f, d, c)
        }
    };
    this.hlg = function(k, l, f, e) {
        if (this.huh && this.huh[k]) {
            for (var g = 0, b = this.jnx.length; g < b; g++) {
                for (var d = 0, c = this.jnx[g].tgz.length; d < c; d++) {
                    if (this.jnx[g].tgz[d] == k) {
                        a(this.jnx[g], l, f, e)
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

function awr(b) {
    var a = this;
    this.ikc = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.nig = false;
    this.jii = null;
    this.vzq = null;
    this.oxl = 0;
    this.jhu = 0;
    this.aou = 0;
    this.pft = 0;
    this.uwh = 30000;
    this.jlv = "";
    this.gsc = "";
    this.vkc = "";
    this.aez = null;
    this.oro = 1;
    this.kot = 0;
    this.oof = -1;
    this.zgl = 0;
    this.rjk = 0;
    this.hvp = false;
    this.lya = function(c, f, d, e) {
        this.nig = c;
        if (e) {
            this.oro = e;
            this.volume = e
        }
        if (f) {
            this.ikc = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.nig) {
            clearTimeout(this.oof);
            if (this.jii) {
                this.volume = (this.muted === true) ? 0 : jyv.dwe.value40 * this.oro;
                this.hvp = false;
                this.vzq = webAudioEngine.createBufferSource();
                this.vzq.buffer = this.jii;
                this.vzq.loop = this.loop;
                this.oxl = webAudioEngine.createGain();
                this.oxl.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.vzq.connect(this.oxl);
                this.oxl.connect(jyv.dcm.nej.ttg);
                this.vzq.start(0, c);
                this.kot = webAudioEngine.currentTime;
                if (this.ikc) {
                    this.jhu = setTimeout(a.ikc, a.jii.duration * 1000)
                }
            }
        } else {
            if (this.vzq) {
                if (this.loop) {
                    if (jyv.oot.cbz != jyv.ejv.yfi && jyv.oot.cbz != jyv.ejv.bjg) {
                        this.aou = setInterval(a.rbw, a.vzq.duration * 1000)
                    }
                }
                this.vzq.currentTime = 0;
                this.vzq.play()
            }
        }
    };
    this.rbw = function() {
        if (!a.vzq.paused || (jyv.oot.cbz != jyv.ejv.jgz && jyv.oot.cbz != jyv.ejv.smd)) {
            a.vzq.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.nig) {
                a.kot = 0;
                if (a.vzq) {
                    a.vzq.stop(0);
                    a.vzq = null
                }
                clearTimeout(a.jhu);
                if (a.oof >= 0) {
                    clearTimeout(a.oof);
                    a.oof = -1
                }
            } else {
                if (a.vzq) {
                    a.vzq.currentTime = 0;
                    a.vzq.pause();
                    clearInterval(a.aou);
                    if (a.oof >= 0) {
                        clearTimeout(a.oof);
                        a.oof = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.jlv = d[0];
        if (d.length >= 2) {
            this.gsc = d[1];
            this.vkc = e;
            this.aez = c
        }
        e += this.jlv + "?v=" + jyv.dcm.chv;
        if (this.nig) {
            this.rep(e, c)
        } else {
            this.gdr(e)
        }
    };
    this.dst = function() {
        if (this.nig) {
            this.rep(this.vkc + this.gsc + "?v=" + jyv.dcm.chv, this.aez)
        }
    };
    this.gdr = function(c) {
        this.vzq = new Audio();
        this.pft = setTimeout(function() {
            console.error("can not load audio " + c);
            jyv.dcm.nej.yyz()
        }, this.uwh);
        this.vzq.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.pft);
            jyv.dcm.nej.asc();
            a.gsr()
        }, false);
        this.vzq.addEventListener("error", function() {
            clearTimeout(a.pft);
            console.error("can not load audio " + c);
            jyv.dcm.nej.yyz()
        }, false);
        this.vzq.volume = jyv.dwe.value40 * this.volume;
        this.vzq.src = c;
        this.vzq.load()
    };
    this.rep = function(f, g) {
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
                jyv.dcm.nej.asc()
            }, function() {
                a.svz("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.svz("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.svz("can not load audio from ", f)
        }
    };
    this.svz = function(d, c) {
        console.error(d + c);
        if (a.gsc != "" && c.indexOf(a.gsc) < 0) {
            a.dst()
        } else {
            jyv.dcm.nej.yyz()
        }
    };
    this.ekd = function(c) {
        this.ikc = c;
        this.gsr()
    };
    this.gsr = function() {
        if (!this.nig) {
            if (this.ikc) {
                if (this.vzq) {
                    this.vzq.addEventListener("ended", function() {
                        a.ikc()
                    }, false)
                }
            }
            if (jyv.oot.cbz == jyv.ejv.yfi || jyv.oot.cbz == jyv.ejv.bjg) {
                if (this.loop) {
                    if (this.vzq) {
                        this.vzq.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.iik = function() {
        if (!this.wje) {
            if (this.ikc) {
                if (this.vzq) {
                    this.vzq.removeEventListener("ended", function() {
                        a.ikc()
                    }, false)
                }
            }
            if (jyv.oot.cbz == jyv.ejv.yfi || jyv.oot.cbz == jyv.ejv.bjg) {
                if (this.loop) {
                    if (this.vzq) {
                        this.vzq.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.sre = function(d, e, c) {
        if (this.nig === true && this.oxl) {
            this.volume = (this.muted === true) ? 0 : jyv.dwe.value40 * d * this.oro;
            if (e > 0) {
                this.oxl.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.oxl.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.oof = setTimeout(this.stop, e)
            }
        } else {
            if (!this.nig && c === true) {
                this.oof = setTimeout(this.stop, e)
            }
        }
    };
    this.fcu = function(c) {
        this.muted = c;
        if (!this.nig) {
            if (this.vzq && this.vzq.readyState > 0) {
                this.vzq.muted = c
            }
        } else {
            if (this.oxl) {
                this.oxl.gain.linearRampToValueAtTime((this.muted === true) ? 0 : jyv.dwe.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.nig) {
            if (this.vzq) {
                this.vzq.stop(0);
                clearTimeout(this.jhu);
                this.vzq = null
            }
        } else {
            if (this.vzq && this.vzq.readyState > 0) {
                this.vzq.currentTime = 0;
                this.vzq.pause();
                if (this.ikc) {
                    this.iik(this.ikc)
                }
                this.vzq = null
            }
        }
    };
    this.uci = function() {
        if (this.nig && this.kot > 0) {
            return (webAudioEngine.currentTime - this.kot) % this.jii.duration
        }
        return 0
    }
}

function jvn() {
    var a = null;
    this.lof = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.lof = c;
        b = new WebSocket(this.lof);
        b.onopen = function(d) {
            a.jzw(d)
        };
        b.onclose = function(d) {
            a.oju(d)
        };
        b.onmessage = function(d) {
            a.gmo(d)
        };
        b.onerror = function(d) {
            a.tnc(d)
        }
    };
    this.qxj = function(c) {};
    this.akh = function(c) {
        b.send(c)
    };
    this.jzw = function(c) {
        this.akh("A/u25vlt")
    };
    this.oju = function(c) {};
    this.gmo = function(c) {
        this.qxj(c.data)
    };
    this.tnc = function(c) {}
}

function rfs() {
    var b = null;
    this.xwo = null;
    this.xzm = 0;
    this.rwo = -1;
    this.eup = -1;
    this.ass = -1;
    this.pso = 0;
    this.lof = "";
    this.rjx = "";
    this.ayn = "";
    this.naf = "";
    this.lqz = "";
    this.chv = "";
    this.znj = "";
    this.mvv = "";
    this.kgm = [];
    this.bbi = [];
    this.hup = [];
    this.oir = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.lya = function(i) {
        this.xwo = i;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.lof);
        c.onopen = function(j) {
            b.jzw(j)
        };
        c.onclose = function(j) {
            b.oju(j)
        };
        c.onmessage = function(j) {
            b.gmo(j)
        };
        c.onerror = function(j) {
            b.tnc(j)
        }
    };
    this.rjt = function(i) {
        var j = parseInt(i.charAt(this.pso), 16);
        this.pso++;
        return j
    };
    this.vcp = function(i) {
        var k = 0;
        var j = i.charAt(this.pso);
        j += i.charAt(this.pso + 1);
        this.pso += 2;
        k = parseInt(j, 16);
        return k
    };
    this.bbc = function(m) {
        var j = this.jam(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.pso), 16);
            this.pso += 1
        }
        return n
    };
    this.jam = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.pso), 16);
        this.pso++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.pso);
            this.pso += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.bup = function(i) {
        var j = "";
        if (this.pso < i.length) {
            j = i.substring(this.pso, i.length)
        }
        return j
    };
    this.qxj = function(i) {};
    this.xfs = function(o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === jyv.kwf.lpk.sip || u === jyv.kwf.lpk.chq) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === jyv.kwf.lpk.sip && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.kgm[p] = {
                                kmz: t[0],
                                value: Number(t[1]),
                                xxm: t[2]
                            };
                            if (t.length >= 5) {
                                this.kgm[p].rid = t[3];
                                this.kgm[p].dad = t[4]
                            }
                        }
                    } else {
                        if (u === jyv.kwf.lpk.chq && t.length >= 2) {
                            for (var p = 0, r = this.kgm.length; p < r; p++) {
                                if (this.kgm[p].kmz === t[0]) {
                                    this.kgm[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === jyv.kwf.lpk.sip) {
                    s = [];
                    for (var p = 0, r = this.kgm.length; p < r; p++) {
                        s.push({
                            kmz: this.kgm[p].kmz,
                            value: (Number)(this.kgm[p].kmz.split("_")[1])
                        })
                    }
                    s.sort(function(j, i) {
                        return j.value - i.value
                    });
                    for (var p = 0, r = this.kgm.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.kgm[p].kmz == s[n].kmz) {
                                this.kgm[p].ebf = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === jyv.kwf.lpk.chq) {
                        this.xwo.vxd(this.kgm)
                    }
                }
            } else {
                if (u === jyv.kwf.lpk.njg) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            kmz: t[0],
                            value: Number(t[1]),
                            eqm: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.rjx = t[3];
                            q.fbf = t[4]
                        }
                        this.xwo.kxh(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.xwo.jyq.mwv()
        } else {
            b.akh("A/u260");
            if (jyv.dwe.value66 > 0) {
                setTimeout(b.rrg, jyv.dwe.value66)
            }
        }
    };
    this.eux = function(i) {
        if (this.xwo.jyq.ncu) {
            setTimeout(function() {
                window.location.reload()
            }, i)
        } else {
            this.xwo.jyq.qdg(e);
            setTimeout(function() {
                if (e < jyv.dwe.value46) {
                    b.xwo.jyq.connect();
                    e++
                } else {
                    b.xwo.jyq.mnz()
                }
            }, i)
        }
    };
    this.kwk = function() {
        return g
    };
    this.zik = function() {
        g = true;
        d = true;
        this.akh("A/u260");
        if (jyv.dwe.value66 > 0) {
            setTimeout(this.rrg, jyv.dwe.value66)
        }
    };
    this.sud = function() {
        g = true;
        f = true;
        this.akh("A/u260");
        if (jyv.dwe.value66 > 0) {
            setTimeout(this.rrg, jyv.dwe.value66)
        }
    };
    this.jzw = function(i) {
        var j = -(new Date().getTimezoneOffset() / 60),
            m = window.navigator.userLanguage || window.navigator.language,
            l = (jyv.dcm) ? jyv.oot.cbz + "|" + jyv.dcm.osh + "|" + j + "|" + m : "",
            k = (jyv.dcm && jyv.dcm.bmy > 0) ? "," + jyv.dcm.bmy : "";
        a = false;
        this.xwo.jzp();
        this.akh("A/u25" + this.rjx + "," + this.ayn + "," + this.naf + "," + this.lqz + "," + this.chv + "," + this.znj + "," + this.mvv + "," + l + k)
    };
    this.oju = function(i) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (jyv.oot.cbz == jyv.ejv.swn || jyv.oot.cbz == jyv.ejv.szb) {
                setTimeout(b.xiw, 500)
            } else {
                this.xwo.brm()
            }
        } else {
            if (d) {
                if (jyv.dwe.value13 == true) {
                    this.xwo.jyq.hpf()
                } else {
                    this.xwo.jyq.rgf()
                }
            } else {
                if (f) {
                    this.xwo.jyq.ltz()
                } else {
                    this.xwo.jyq.cex()
                }
            }
        }
    };
    this.gmo = function(i) {
        this.qxj(i.data)
    };
    this.tnc = function(i) {};
    this.akh = function(i) {
        if (c.readyState >= 2) {
            this.oju()
        }
        this.xzm = 0;
		var tmpPar=':::{"gameData":"'+i+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"JokerCardAM"}';i=tmpPar;
        c.send(i)
    };
    this.xiw = function() {
        b.xwo.brm()
    };
    this.rrg = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.oju()
    }
}

function iyy() {
    this.jyq = null;
    this.axr = null;
    this.lof = "";
    this.rjx = "";
    this.ayn = "";
    this.naf = "";
    this.lqz = "";
    this.znj = "";
    this.mvv = "";
    this.jzp = function() {};
    this.gmo = function(a) {
        this.jyq.nxm(a)
    };
    this.bdj = function() {};
    this.brm = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.jyq != null && !this.axr.kwk()) {
            this.jyq.vnv("Can not connect to gaming server!", true)
        }
    };
    this.tnc = function(a) {
        if (this.axr.xzm == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.jyq != null) {
            this.jyq.qca({
                type: "gameDataLoaded",
                sender: this.jyq.lqz,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    success: false
                }
            });
            this.jyq.vnv(a, true)
        }
    };
    this.eux = function(a) {
        this.axr.eux(a)
    };
    this.ssu = function() {
        this.jyq.nud(this.axr.eqm)
    };
    this.vxd = function(a) {
        this.jyq.vxd(a)
    };
    this.kxh = function(a) {
        this.jyq.kxh(a)
    };
    this.yik = function() {};
    this.lrm = function() {
        this.jyq.lrm()
    };
    this.cpc = function() {
        this.jyq.cpc()
    }
}

function xki() {
    var b = null;
    this.jyq = null;
    this.lof = "";
    this.rjx = "";
    this.ayn = "";
    this.naf = "";
    this.lqz = "";
    this.chv = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.dvi = true;
    this.hfg = false;
    this.zwf = false;
    this.pso = 0;
    this.zsk = 0;
    this.dse = 0;
    this.wmi = 0;
    this.box = 0;
    this.lya = function(f, g) {
        this.lof = g;
        this.jyq = f;
        this.zwf = false;
        return this
    };
    this.connect = function(g, j, i, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.rjx = j;
        this.ayn = i;
        this.naf = k;
        this.lqz = g;
        this.chv = f;
        this.dvi = true;
        this.hfg = l;
        c = new WebSocket(this.lof);
        c.onopen = function(m) {
            b.jzw(m)
        };
        c.onclose = function(m) {
            b.oju(m)
        };
        c.onmessage = function(m) {
            b.gmo(m)
        };
        c.onerror = function(m) {
            b.tnc(m)
        }
    };
    this.rjt = function(f) {
        var g = parseInt(f.charAt(this.pso), 16);
        this.pso++;
        return g
    };
    this.jam = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.pso), 16);
        this.pso++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.pso);
            this.pso += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.qxj = function(i) {
        var k = this.jyq.cwl.drl("stats");
        if (i != null && i != "null" && i) {
            if (i == "010101010101010") {
                this.nnt()
            } else {
                this.pso = 0;
                this.ass = this.rjt(i);
                if (this.ass == 0) {
                    var j = [];
                    j[0] = this.jam(i);
                    j[1] = this.jam(i);
                    j[2] = this.jam(i);
                    j[3] = this.jam(i);
                    j[4] = this.jam(i);
                    j[5] = this.jam(i);
                    j[6] = this.jam(i);
                    if (jyv.dwe.value36) {
                        this.dse = j[0];
                        this.wmi = j[1];
                        this.box = j[2]
                    } else {
                        if (jyv.dwe.value37) {
                            var g = jyv.dwe.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.hfg) ? 100 : g * 60000 : (g - f) * 60000;
                            this.zsk = j[3] * 60000;
                            this.wmi = j[5];
                            this.box = j[6];
                            this.jyq.vfu(f);
                            if (!this.zwf) {
                                this.zwf = true;
                                this.jyq.ghe(j[3] * 60000)
                            }
                            if (this.hfg) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.hfg) {
                        if (k) {
                            k.rxq(this.dse, this.wmi, this.box, this.zsk)
                        }
                    }
                } else {
                    console.error("Statistic error: " + i);
                    if (!this.hfg) {
                        if (k) {
                            k.rxq(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.nnt = function() {
        this.akh("A/u270," + this.lqz)
    };
    this.akh = function(f) {
        if (c && !e) {
            this.xzm = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.dvi = f;
        if (c && c.readyState >= 2) {
            if (this.jyq && this.dvi) {
                this.jyq.dvi()
            }
        } else {
            this.akh("A/u260");
            if (jyv.dwe.value66 > 0) {
                setTimeout(this.rrg, jyv.dwe.value66)
            }
        }
        e = true
    };
    this.jzw = function(f) {
        a = false;
        this.akh("A/u25" + this.rjx + "," + this.ayn + "," + this.naf + "," + d + "," + this.chv)
    };
    this.oju = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.hfg) {
                if (this.jyq && this.dvi) {
                    this.jyq.dvi()
                }
            }
        }
    };
    this.gmo = function(f) {
        this.qxj(f.data)
    };
    this.tnc = function(f) {};
    this.rrg = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.oju()
    }
}

function kyc(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.jcg = function() {
        return this.x + this.width
    };
    this.xss = function() {
        return this.y + this.height
    };
    this.vtt = function() {
        return this.x + this.width / 2
    };
    this.yjw = function() {
        return this.y + this.height / 2
    };
    this.aha = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.gyb = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function ezr() {
    this.cbz = -1;
    this.fqi = -1;
    this.azw = false;
    this.gto = false;
    this.zqh = false;
    this.wjy = false;
    this.ckh = false;
    this.mty = false;
    this.yxj = false;
    this.qnu = true;
    this.cvv = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.azw = true;
            this.zqh = true;
            this.cbz = jyv.ejv.jgz
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.zqh = true
                }
                this.cbz = jyv.ejv.bbr
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.cbz = jyv.ejv.smd;
                        this.zqh = true
                    } else {
                        this.cbz = jyv.ejv.jgz
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.cbz = jyv.ejv.bus;
                                this.zqh = true
                            } else {
                                this.cbz = jyv.ejv.lru;
                                this.zqh = true;
                                this.wjy = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.ckh = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.mty = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.cbz = jyv.ejv.yyp
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.cbz = jyv.ejv.dbm
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.cbz = jyv.ejv.yny;
                                    this.zqh = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.cbz = jyv.ejv.bjg;
                                        this.zqh = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.cbz = jyv.ejv.bjg;
                                            this.zqh = true
                                        } else {
                                            this.cbz = jyv.ejv.yfi
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.cbz = jyv.ejv.lru;
                                    this.gto = true;
                                    this.zqh = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.cbz = jyv.ejv.lru;
                                        this.gto = true;
                                        this.zqh = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.cbz = jyv.ejv.szb;
                                            this.zqh = true
                                        } else {
                                            this.cbz = jyv.ejv.swn
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
    this.uoy = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.fcb = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.fqi = jyv.os.bze;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.yxj = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.fqi = jyv.os.qfe
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.fqi = jyv.os.lrk
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.fqi = jyv.os.rlm;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.qnu = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.fqi = jyv.os.lhy
                        }
                    }
                }
            }
        }
    };
    this.upq = function() {
        return this.mty
    };
    this.urc = function() {
        return (this.ckh && !this.mty)
    };
    this.poy = function() {
        return this.wjy
    };
    this.rlz = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.yls = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.gwi = function() {
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
    this.nxu = function() {
        return (this.bek() === true)
    };
    this.bek = function() {
        if ((screen.width <= jyv.dwe.value73.w && screen.height <= jyv.dwe.value73.h) || (screen.height <= jyv.dwe.value73.w && screen.width <= jyv.dwe.value73.h)) {
            return true
        }
        return false
    };
    this.xxv = function(i, j, k, n, e, b, f, l, m, a, d, g) {
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
    this.rkp = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.wjo = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.ron = function() {
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
    this.qmx = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.jyo = function(b) {
        try {
            if (this.qmx() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.rxm = function() {
        try {
            if (this.qmx() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.rms = function() {
        return false
    };
    this.qca = function(a) {
        if (jyv.dwe.value77 !== undefined && jyv.dwe.value77) {
            if (a !== null && a !== undefined) {
                window.parent.postMessage(a, "*")
            }
        }
    };
    this.omx = function(c, a) {
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
    this.kld = function() {
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
    this.cpn = function(q, o, f, l, k, a, p, d, r, g, n, j) {
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
    this.lop = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
    this.gnh = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
    this.dbf = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.pyl = function(m, g, d, a, j, b, k, l, f) {
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
    this.exj = function(n, i, f, a, k, c, m, b, l, g, o) {
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
    this.elc = function(o, d, k, j, n, l, f, p, q, g, m, c) {
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
    this.mkc = function(q, j, g, b, m, p, l, d, f, o, a, n, i, r) {
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
    this.jbx = function(m, g, d, a, j, k, b, l, f, n) {
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
    this.dyu = function(k, g, d, c, i, a, j, f, l) {
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

function srr() {
    this.parent = null;
    this.context2D = null;
    this.tgs = null;
    this.lub = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.aik = true;
    this.ath = false;
    this.lya = function(a, d, c) {
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
                this.tgs = document.createElement("canvas");
                this.tgs.width = this.width;
                this.tgs.height = this.height;
                this.context2D = this.tgs.getContext("2d");
                if (c) {
                    this.lub = c
                }
            }
            this.ath = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.dho = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.tgs) {
                this.tgs.width = this.width;
                this.tgs.height = this.height
            }
            this.ath = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.gds = function(a) {};
    this.nxv = function(a) {};
    this.zgu = function(a, b) {
        this.aik = a;
        if (b && b === true) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.fam = function() {
        return (this.aik && !this.ath)
    };
    this.spt = function() {}
}

function frl() {
    this.ugy = null;
    this.abq = null;
    this.lfi = -1;
    this.rkx = -1;
    this.vuu = false;
    this.pqm = false;
    this.tlt = false;
    this.iug = 0;
    this.eul = 0;
    var a = 200;
    this.lya = function(c, f, d, b, e) {
        this.ugy = b;
        this.abq = e;
        frl.prototype.lya.call(this, c, f, d)
    };
    this.xgo = function(b, d, c) {
        this.vuu = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.fam()) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
        if (this.vuu === true && c === true) {
            clearTimeout(this.iug);
            this.iug = setTimeout(this.tnb, a)
        }
    };
    this.wlo = function() {
        return this.vuu
    };
    this.bco = function(b, c) {
        this.tlt = b;
        c = (c === false) ? false : true;
        clearTimeout(this.eul);
        if (this.tlt === true && c === true) {
            this.eul = setTimeout(this.tqe, a)
        }
    };
    this.gpy = function() {
        return this.tlt
    };
    this.rkw = function(b, c) {
        this.abq = b;
        if (c && c === true && this.fam()) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.qhj = function(b) {
        this.pqm = b
    };
    this.knh = function() {
        return this.pqm
    };
    this.fyd = function() {};
    this.tqe = function() {};
    this.tnb = function() {}
}
frl.prototype = new srr;

function mlm() {
    var a = this;
    this.byq = null;
    this.value = "";
    this.ixl = false;
    this.mqj = "round";
    this.shb = null;
    this.iuq = "bold";
    this.ocl = null;
    this.bfg = null;
    this.gyy = null;
    this.cvw = null;
    this.sfw = null;
    this.qis = 0;
    this.hzt = 6;
    this.ojy = -2;
    this.jks = 2;
    this.ofw = -4;
    this.kbg = 8;
    this.fga = 26;
    this.dzg = 0;
    this.ujn = 1;
    this.rgv = 0;
    this.xvl = 0;
    this.fvr = -1;
    this.ivj = 10;
    this.pzg = 0;
    this.opn = 0;
    this.chi = false;
    this.eqf = -1;
    this.cdx = true;
    this.lya = function(d, g, e, c, b, f) {
        mlm.prototype.lya.call(this, d, g, e, c, f);
        this.byq = b;
        if (this.ugy) {
            this.qis = Math.round(this.ugy.height / 2)
        }
    };
    this.gds = function(b) {
        try {
            this.mqj = b.sfy;
            this.shb = b.font;
            this.iuq = b.hfp;
            this.ocl = b.backgroundColor;
            this.bfg = b.esx;
            this.gyy = b.vfn;
            this.cvw = b.hau;
            if (b.borderColor && b.jdr) {
                this.sfw = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.sfw.addColorStop(0, b.borderColor);
                this.sfw.addColorStop(1, b.jdr)
            } else {
                this.sfw = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.nxv = function(b) {
        try {
            this.fga = b.uux;
            this.dzg = b.amm;
            this.hzt = b.jvq;
            this.ojy = b.eha;
            this.jks = b.hnd;
            this.ofw = b.dlr;
            this.kbg = b.xjw;
            this.ujn = b.owp
        } catch (c) {
            console.error(c)
        }
    };
    this.vve = function() {
        if (this.xtf()) {
            clearInterval(this.eqf);
            this.eqf = -1
        }
        this.cdx = false;
        this.eqf = setInterval(this.uwk, 400)
    };
    this.qft = function() {
        this.cdx = true;
        clearInterval(this.eqf);
        this.eqf = -1;
        this.lhz(false)
    };
    this.lhz = function(b, c) {
        this.chi = b;
        c = (c === false) ? false : true;
        if (c === true && this.fam() === true) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.xtf = function() {
        return (this.eqf >= 0)
    };
    this.kyr = function(b, c) {
        this.value = b;
        if (c && c === true && this.fam()) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.olh = function(b) {
        this.rgv = Math.round(b / this.ivj);
        this.pzg = 0;
        this.opn = 0;
        this.xvl = new Date().getTime();
        this.fvr = setTimeout(this.kbd, this.rgv)
    };
    this.rvc = function() {
        if (a.fvr >= 0) {
            clearTimeout(a.fvr);
            a.fvr = -1
        }
        a.pzg = 0;
        a.tnb()
    };
    this.fuz = function() {
        if (a.fvr >= 0) {
            clearInterval(a.fvr);
            a.fvr = -1
        }
        a.pzg = 1;
        a.tnb()
    };
    this.kbd = function() {
        var b = 0,
            c = new Date().getTime();
        a.opn += 1;
        if (a.opn < a.ivj) {
            a.pzg += 1 / a.ivj;
            a.parent.spt(a.x, a.y, a.width, a.height);
            b = a.rgv + (a.opn * a.rgv - (c - a.xvl));
            a.fvr = setTimeout(a.kbd, b)
        } else {
            a.fuz()
        }
    };
    this.spt = function() {
        if (!this.fam()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.ujn,
            d = (this.mqj === "roundedT" || this.mqj === "roundedL") ? this.kbg : 0,
            b = (this.mqj === "roundedT" || this.mqj === "roundedR") ? this.kbg : 0,
            o = (this.mqj === "roundedB" || this.mqj === "roundedR") ? this.kbg : 0,
            q = (this.mqj === "roundedB" || this.mqj === "roundedL") ? this.kbg : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.chi || this.pzg >= 1) {
            if (this.mqj === "round") {
                jyv.oot.dyu(p, this.x + this.width / 2, this.y + this.height / 2, l, this.bfg, 1, this.sfw, this.ujn, 1)
            } else {
                if (this.mqj === "rect") {
                    jyv.oot.pyl(p, this.x, this.y, this.width, this.height, this.kbg, this.bfg, this.sfw, this.ujn)
                } else {
                    if (this.mqj === "roundedT" || this.mqj === "roundedB" || this.mqj === "roundedR" || this.mqj === "roundedL") {
                        jyv.oot.mkc(p, this.x, this.y, this.width, this.height, d, b, o, q, this.bfg, 1, this.sfw, this.ujn, 1)
                    }
                }
            }
            if (this.byq || this.ugy) {
                if (this.wlo()) {
                    p.drawImage((this.byq) ? this.byq : this.ugy, 0, this.qis, this.ugy.width, this.qis, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.byq) ? this.byq : this.ugy, 0, 0, this.ugy.width, this.qis, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.ixl && this.knh() === false) {
                p.globalAlpha = 0.5
            }
            if (this.pzg > 0) {
                if (this.mqj === "round") {
                    jyv.oot.dyu(p, this.x + this.width / 2, this.y + this.height / 2, l, this.ocl, 1 - this.opn / this.ivj, this.sfw, this.ujn, 1);
                    jyv.oot.dyu(p, this.x + this.width / 2, this.y + this.height / 2, l, this.bfg, this.opn / this.ivj)
                } else {
                    if (this.mqj === "rect") {
                        ozk = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        ozk.addColorStop(1 - this.pzg, this.ocl);
                        ozk.addColorStop(1 - this.pzg, this.bfg);
                        jyv.oot.exj(p, this.x, this.y, this.width, this.height, this.kbg, ozk, 1, this.sfw, this.ujn, 1)
                    } else {
                        if (this.mqj === "roundedT" || this.mqj === "roundedB" || this.mqj === "roundedR" || this.mqj === "roundedL") {
                            ozk = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            ozk.addColorStop(1 - this.pzg, this.ocl);
                            ozk.addColorStop(1 - this.pzg, this.bfg);
                            jyv.oot.mkc(p, this.x, this.y, this.width, this.height, d, b, o, q, ozk, 1, this.sfw, this.ujn, 1)
                        }
                    }
                }
            } else {
                if (this.mqj === "round") {
                    jyv.oot.dyu(p, this.x + this.width / 2, this.y + this.height / 2, l, this.ocl, 1, this.sfw, this.ujn, 1)
                } else {
                    if (this.mqj === "rect") {
                        jyv.oot.pyl(p, this.x, this.y, this.width, this.height, this.kbg, this.ocl, this.sfw, this.ujn)
                    } else {
                        if (this.mqj === "roundedT" || this.mqj === "roundedB" || this.mqj === "roundedR" || this.mqj === "roundedL") {
                            jyv.oot.mkc(p, this.x, this.y, this.width, this.height, d, b, o, q, this.ocl, 1, this.sfw, this.ujn, 1)
                        }
                    }
                }
            }
            if (this.ugy) {
                if (this.wlo()) {
                    p.drawImage(this.ugy, 0, this.qis, this.ugy.width, this.qis, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.ugy, 0, 0, this.ugy.width, this.qis, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.dzg > 0) {
            f = (this.wlo()) ? 2 : 0;
            c = this.dzg;
            p.font = this.iuq + " " + c + "px " + this.shb;
            p.fillStyle = this.cvw;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.hzt) {
                e = ((this.width - 2 * this.hzt) / n);
                c = Math.round(e * c) - 1;
                p.font = this.iuq + " " + c + "px " + this.shb
            }
            if (c > this.height / 2 - this.hzt) {
                e = ((this.height / 2 - this.hzt) / c);
                c = Math.round(e * c) - 1;
                p.font = this.iuq + " " + c + "px " + this.shb
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.ojy, this.y - this.ofw + k + f)
        }
        if (this.abq && this.abq != "" && this.fga > 0) {
            g = this.abq.split("|");
            f = (this.wlo()) ? 2 : 0;
            c = this.fga;
            p.font = this.iuq + " " + c + "px " + this.shb;
            p.fillStyle = this.gyy;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.hzt) {
                e = ((this.width - 2 * this.hzt) / n);
                c = Math.round(e * c) - 1;
                p.font = this.iuq + " " + c + "px " + this.shb
            }
            if (this.dzg > 0) {
                if (c * g.length > this.height / 2 - this.hzt) {
                    e = ((this.height / 2 - this.hzt) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.iuq + " " + c + "px " + this.shb
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.hzt) {
                    e = ((this.height - 2 * this.hzt) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.iuq + " " + c + "px " + this.shb
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.ojy, this.y - this.jks + k + f);
                k += c
            }
        }
        p.restore();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.tgs, this.x, this.y)
        }
    };
    this.uwk = function() {
        if (!a.cdx) {
            a.lhz(!a.chi)
        }
    };
    this.tqe = function() {
        a.tlt = false
    };
    this.tnb = function() {
        a.vuu = false;
        if (a.fam()) {
            a.parent.spt(a.x, a.y, a.width, a.height)
        }
    }
}
mlm.prototype = new frl;

function gwo() {
    this.kuz = 0;
    this.bws = [];
    this.lya = function(a, c, b) {
        gwo.prototype.lya.call(this, a, c, b);
        this.kuz = 0;
        this.bws = []
    };
    this.hgc = function(a, b) {
        if (b && b === true) {
            this.bws.unshift(a)
        } else {
            this.bws.push(a)
        }
    };
    this.ild = function(a) {
        if (a && a === true) {
            this.bws.shift()
        } else {
            this.bws.pop()
        }
    };
    this.pxu = function(a) {
        this.kuz = a
    };
    this.ziz = function() {
        return this.kuz
    };
    this.spt = function() {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        if (this.kuz < this.bws.length) {
            this.bws[this.kuz].spt()
        }
        try {
            if (this.lub && this.tgs) {
                this.lub.drawImage(this.tgs, this.x, this.y)
            }
        } catch (a) {}
    }
}
gwo.prototype = new srr;

function urq() {
    var a = this;
    this.odj = null;
    this.kuz = 0;
    this.bws = [];
    this.ocl = null;
    this.aof = null;
    this.ssv = null;
    this.duv = new kyc();
    this.lya = function(b, d, c) {
        urq.prototype.lya.call(this, b, d, c);
        this.aik = false;
        this.kuz = 0;
        this.bws = [];
        this.pcj()
    };
    this.pcj = function() {
        this.odj = new chu();
        this.odj.lya();
        this.odj.mwi("buttons")
    };
    this.nxv = function(f) {
        try {
            var d = this.odj.ovp("buttons"),
                c = 0,
                b = d.length;
            this.duv = f.lpt;
            for (; c < b; c++) {
                d[c].nxv(f.wgs)
            }
            this.odj.iiz("return", "#dho", [f.elh]);
            this.odj.iiz("page", "#dho", [f.ift]);
            this.odj.iiz("prev", "#dho", [f.qbh]);
            this.odj.iiz("next", "#dho", [f.xuk])
        } catch (g) {
            console.error(g)
        }
    };
    this.gds = function(d) {
        try {
            var f = this.odj.ovp("buttons");
            this.ocl = d.backgroundColor;
            this.aof = d.sme;
            this.ssv = d.fhj;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].gds((this.parent.bxp.vaw === false) ? d.wqt : (this.parent.osh === jyv.bxp.jdb) ? d.hqz : d.cut)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.itu = function(m, l) {
        var k = this.odj.ovp("buttons"),
            g = this.odj.drl("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.fam() == true) {
                if (b.knh() && !b.gpy()) {
                    if (b != g) {
                        b.xgo(true, true)
                    }
                    this.parent.nej.ckk("btn");
                    this.parent.nej.ddz("btn");
                    b.fyd();
                    for (var d = 0; d < f; d++) {
                        k[d].bco(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.hlp = function() {
        var e = this.odj.ovp("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.wlo() === true) {
                c.xgo(false, true);
                return true
            }
        }
        return false
    };
    this.ykf = function(k) {
        var g = this.odj.ovp("buttons"),
            c = this.odj.drl("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.lfi) {
                if (d.knh() && !d.gpy()) {
                    if (d != c) {
                        d.xgo(true, true)
                    }
                    this.parent.nej.ckk("btn");
                    this.parent.nej.ddz("btn");
                    d.fyd();
                    for (var e = 0; e < b; e++) {
                        g[e].bco(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.ovz = function() {
        var e = this.odj.ovp("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.wlo() === true) {
                c.xgo(false, true);
                return true
            }
        }
        return false
    };
    this.hgc = function(b, c) {
        if (c && c === true) {
            this.bws.unshift(b);
            this.kuz++
        } else {
            this.bws.push(b)
        }
    };
    this.ild = function(b) {
        if (b && b === true) {
            this.bws.shift();
            this.kuz--
        } else {
            this.bws.pop()
        }
    };
    this.anh = function() {
        return this.bws.length
    };
    this.esp = function(e, c, b) {
        var d = (this.parent.bxp.vaw === false) ? c.wqt : (this.parent.osh === jyv.bxp.jdb) ? c.hqz : c.cut;
        if (this.parent.gmj === false) {
            this.odj.wvv("return", this.sja(e.elh, this.parent.language.ret, (this.parent.bxp.hxm === false) ? b : this.parent.nej.pvr("btn_re"), this.ngw, (this.parent.sbz.voi) ? this.parent.sbz.voi : null, e.wgs, d), ["buttons"]);
            this.odj.wvv("page", this.sja(e.ift, (this.kuz + 1) + "/" + this.bws.length, b, this.ghc, null, e.wgs, d), ["buttons"]);
            this.odj.wvv("prev", this.sja(e.qbh, this.parent.language.mwk, (this.parent.bxp.hxm === false) ? b : this.parent.nej.pvr("btn_pr"), this.rzg, (this.parent.sbz.lob) ? this.parent.sbz.lob : null, e.wgs, d), ["buttons"]);
            this.odj.wvv("next", this.sja(e.xuk, this.parent.language.cgu, (this.parent.bxp.hxm === false) ? b : this.parent.nej.pvr("btn_ne"), this.ghc, (this.parent.sbz.bqs) ? this.parent.sbz.bqs : null, e.wgs, d), ["buttons"])
        }
    };
    this.sja = function(g, j, b, i, d, f, e) {
        var c = new mlm();
        c.lya(g, this.context2D, null, b, null, j);
        c.parent = this;
        c.fyd = i;
        c.nxv(f);
        c.gds(e);
        if (d) {
            c.lfi = d.xbc
        }
        return c
    };
    this.spt = function(l, j, m, e) {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.odj.ovp("buttons"),
            d = null;
        if (this.parent.bxp.vaw === false) {
            d = this.parent.nej.pvr("btn_back")
        } else {
            if (this.parent.osh === jyv.bxp.jdb) {
                d = (this.parent.nej.pvr("h_right" + this.kuz) != null) ? this.parent.nej.pvr("h_right" + this.kuz) : this.parent.nej.pvr("h_right")
            } else {
                d = (this.parent.nej.pvr("h_left" + this.kuz) != null) ? this.parent.nej.pvr("h_left" + this.kuz) : this.parent.nej.pvr("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.kuz >= 0 && this.kuz < this.bws.length) {
            this.bws[this.kuz].spt()
        }
        if (d) {
            k = n.createLinearGradient(this.duv.x, this.duv.y, this.duv.x + this.duv.width, this.duv.y);
            k.addColorStop(0.2, this.aof);
            k.addColorStop(1, this.ssv);
            n.fillStyle = k;
            n.save();
            if (this.parent.bxp.vaw === false) {
                if (this.parent.osh === jyv.bxp.aqn) {
                    n.translate(this.duv.width / 2, this.duv.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.duv.width / 2, -this.duv.height / 2)
                }
                n.fillRect(this.duv.x, this.duv.y, this.duv.width, this.duv.height)
            }
            n.drawImage(d, this.duv.x, this.duv.y, this.duv.width, this.duv.height);
            n.restore()
        } else {
            if (this.ocl != null) {
                n.fillStyle = this.ocl;
                n.fillRect(this.duv.x, this.duv.y, this.duv.width, this.duv.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].spt()
        }
        n.restore();
        if (this.lub && this.tgs) {
            if (b) {
                this.lub.drawImage(this.tgs, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.lub.drawImage(this.tgs, this.x, this.y)
            }
        }
    };
    this.fpp = function(f, g) {
        var e = this.odj.drl("page"),
            c = this.odj.drl("return"),
            b = this.odj.drl("next"),
            d = this.odj.drl("prev");
        if (e != null) {
            e.rkw((this.kuz + 1) + "/" + this.bws.length)
        }
        if (c != null) {
            c.zgu(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.bws.length > 1) {
                    b.zgu(f);
                    d.zgu(f);
                    e.zgu(f)
                } else {
                    b.zgu(false);
                    d.zgu(false);
                    e.zgu(false)
                }
            } else {
                b.zgu(f);
                d.zgu(f);
                e.zgu(f)
            }
        }
        if (g && g === true) {
            this.spt()
        }
    };
    this.gpn = function() {
        this.kuz = 0;
        this.fpp(true);
        this.zgu(true, true)
    };
    this.qhb = function() {
        this.fpp(false);
        this.zgu(false, true)
    };
    this.koq = function() {
        var d = this.odj.drl("page"),
            b = this.odj.drl("next"),
            c = this.odj.drl("prev");
        this.kuz = (this.kuz < this.bws.length) ? this.kuz : this.bws.length - 1;
        this.kuz = (this.kuz < 0) ? 0 : this.kuz;
        d.rkw((this.kuz + 1) + "/" + this.bws.length, true);
        if (this.bws.length == 1) {
            b.zgu(false);
            c.zgu(false);
            d.zgu(false)
        } else {
            b.zgu(true);
            c.zgu(true);
            d.zgu(true)
        }
    };
    this.pwt = function(c) {
        var e = this.odj.ovp("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].qhj(c)
        }
    };
    this.ngw = function() {
        a.parent.bjx()
    };
    this.ghc = function() {
        var b = a.odj.drl("page");
        if (a.kuz < a.bws.length - 1) {
            a.kuz++
        } else {
            a.kuz = 0
        }
        if (b) {
            b.rkw((a.kuz + 1) + "/" + a.bws.length, false)
        }
        a.spt()
    };
    this.rzg = function() {
        var b = a.odj.drl("page");
        if (a.kuz > 0) {
            a.kuz--
        } else {
            a.kuz = a.bws.length - 1
        }
        if (b) {
            b.rkw((a.kuz + 1) + "/" + a.bws.length, false)
        }
        a.spt()
    }
}
urq.prototype = new srr;

function zpy() {
    this.ugy = new Image();
    this.xxm = null;
    this.vhh = [];
    this.yhm = [];
    this.zwh = null;
    this.shb = null;
    this.iuq = "bold";
    this.bwv = null;
    this.gyy = null;
    this.iaw = null;
    this.gyh = 0;
    this.nvf = [];
    this.epx = null;
    this.tws = 40;
    this.xvu = 18;
    this.csr = 1;
    this.lya = function(b, d, c, a) {
        this.ugy = a;
        this.vhh = [];
        this.nvf = [];
        zpy.prototype.lya.call(this, b, d, c)
    };
    this.nxv = function(a) {
        try {
            this.epx = a.otm;
            this.nvf = a.uud;
            this.xvu = a.fontSize;
            this.tws = a.gbd;
            this.csr = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.gds = function(a) {
        try {
            this.zwh = a.kpm;
            this.shb = a.font;
            this.iuq = a.hfp;
            this.bwv = a.ynr;
            this.gyy = a.vfn;
            this.iaw = a.klk
        } catch (b) {
            console.error(b)
        }
    };
    this.spt = function() {
        if (!this.fam()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.gyy;
        if (this.bwv) {
            b.strokeStyle = this.bwv
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.csr;
        b.font = this.iuq + " " + this.xvu + "px " + this.shb;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.ugy, 0, 0);
        if ((this.height - this.ugy.height) > 0) {
            var a = this.parent.duv;
            b.drawImage(this.ugy, a.x, a.y, a.width, this.ugy.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.xxm && this.epx) {
            jyv.oot.cpn(b, this.xxm, this.iaw, this.epx.x, this.epx.y, this.epx.width, this.epx.height, this.zwh, this.tws, this.iuq)
        }
        for (var c = 0; c < this.vhh.length; c++) {
            this.dbf(this.vhh[c], this.nvf[c], this.xvu, this.shb)
        }
        b.restore();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.tgs, this.x, this.y)
        }
    };
    this.vac = function(j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.yhm = [];
        b.save();
        b.font = this.iuq + " " + g + "px " + d;
        this.wjx(b, g, j, f, d);
        for (var e = 0, a = this.yhm.length; e < a; e++) {
            c = (f.height + this.gyh) / (this.yhm.length + 1) * (e + 1);
            b.fillText(this.yhm[e], (f.x), f.y + c);
            if (this.bwv != null && b.lineWidth >= 1) {
                b.strokeText(this.yhm[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.dbf = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.yhm = [];
        a.save();
        a.font = this.iuq + " " + f + "px " + c;
        this.wjx(a, f, g, e, c);
        for (var d = 0; d < this.yhm.length; d++) {
            b = (e.height + this.gyh) / (this.yhm.length + 1) * (d + 1);
            a.fillText(this.yhm[d], (e.x + e.width / 2), e.y + b);
            if (this.bwv != null && a.lineWidth >= 1) {
                a.strokeText(this.yhm[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.wjx = function(m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.gyh = o;
        if (this.gyh * n > g.height) {
            a = g.height / (this.gyh * n);
            this.gyh = Math.round(a * this.gyh) - 1;
            m.font = this.iuq + " " + this.gyh + "px " + b;
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
                this.yhm[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.yhm[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.yhm[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
zpy.prototype = new srr;

function tuo() {
    var a = this;
    this.ugy = new Image();
    this.dyx = "";
    this.yua = "";
    this.xjs = -1;
    this.bpn = 0;
    this.sgl = 0;
    this.ccc = 5000;
    this.shb = null;
    this.iuq = "bold";
    this.gyy = null;
    this.ocl = null;
    this.uef = null;
    this.kbg = 0;
    this.jdf = 0;
    this.hzt = 0;
    this.ujn = 0;
    this.gvk = 0;
    this.xvu = 0;
    this.zbu = null;
    this.bjf = 0;
    this.cnq = [];
    this.xuz = 0;
    this.phy = true;
    this.kfs = 0;
    this.nxv = function(b) {
        try {
            this.xvu = b.fontSize;
            this.gvk = b.gtq;
            this.kbg = b.xjw;
            this.jdf = b.nrx;
            this.hzt = b.jvq;
            this.ujn = b.owp
        } catch (c) {
            console.error(c)
        }
    };
    this.gds = function(b) {
        try {
            this.shb = b.font;
            this.iuq = b.hfp;
            this.ocl = b.backgroundColor;
            this.gyy = b.vfn;
            this.uef = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.afv = function(e, c, d, b) {
        this.dyx = e;
        this.yua = c;
        this.xjs = d;
        this.bpn = b;
        this.phy = true;
        clearTimeout(this.kfs);
        if (this.fam() === true) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.yvk = function(b, c) {
        this.dyx = b;
        this.yua = undefined;
        this.phy = c;
        if (this.phy) {
            clearTimeout(this.kfs)
        }
        if (this.fam() === true) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.yzw = function() {
        this.dyx = "";
        this.yua = undefined;
        this.phy = true;
        clearTimeout(this.kfs);
        if (this.fam() === true) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.wxn = function(b, c) {
        this.bjf = 0;
        this.xuz = b;
        this.phy = false;
        if (c && c > 0) {
            this.kfs = setTimeout(this.lnd, c)
        } else {
            this.kfs = setTimeout(this.lnd, this.ccc)
        }
    };
    this.sgy = function(b) {
        this.bjf = 0;
        this.xuz = b;
        if (this.phy) {
            this.yvk(this.cnq[this.xuz][this.bjf], false)
        }
        this.phy = false;
        this.kfs = setTimeout(this.lnd, this.ccc)
    };
    this.kmw = function() {
        this.phy = false;
        this.kfs = setTimeout(this.lnd, this.ccc)
    };
    this.ddw = function() {
        this.phy = true;
        clearTimeout(this.kfs)
    };
    this.aoa = function() {
        return this.phy
    };
    this.lnd = function() {
        if (!a.phy) {
            a.bjf = (a.cnq[a.xuz][a.bjf + 1] != undefined) ? a.bjf + 1 : 0;
            a.kfs = setTimeout(a.lnd, a.ccc);
            a.yvk(a.cnq[a.xuz][a.bjf], a.phy)
        }
    };
    this.urj = function(b) {
        this.cnq[b] = []
    };
    this.cdy = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.cnq[b][c] = d[c]
        }
    };
    this.eoq = function(b) {
        this.zbu = b
    };
    this.spt = function() {
        if (!this.fam()) {
            return
        }
        var o = this.context2D,
            m = this.xvu,
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
            q = (this.uef && this.ujn) ? this.hzt + this.ujn : this.hzt;
        o.save();
        if (this.ocl) {
            jyv.oot.pyl(o, this.x, this.y, this.width, this.height, this.kbg, this.ocl, this.uef, this.ujn)
        } else {
            if (this.zbu) {
                o.putImageData(this.zbu, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.gyy;
        o.font = this.iuq + " " + m + "px " + this.shb;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.dyx).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.yua != undefined && this.xjs >= 0) {
            j = o.measureText(this.yua).width;
            b += j;
            b += this.bpn * (this.ugy.width + this.jdf);
            if (this.bpn % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.bpn / 2) * (this.ugy.width + this.jdf);
                x = s - n;
                e = s + (this.bpn) * (this.ugy.width + this.jdf) + n
            } else {
                s = this.x + (this.width) / 2 - (this.bpn / 2) * (this.ugy.width) - (this.bpn - 1) / 2 * this.jdf;
                x = s - n;
                e = s + (this.bpn) * (this.ugy.width) + (this.bpn - 1) * this.jdf + n
            }
            for (var u = 0; u < this.bpn; u++) {
                o.drawImage(this.ugy, 0, this.sgl * this.xjs, this.ugy.width, this.sgl, s + (u * (this.jdf + this.ugy.width)), this.y + ((this.height - this.sgl) / 2), this.ugy.width, this.sgl)
            }
            o.textAlign = "right";
            o.fillText(this.dyx, x, this.y + m + this.gvk);
            o.textAlign = "left";
            o.fillText(this.yua, e, this.y + m + this.gvk)
        } else {
            if (this.dyx != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.iuq + " " + m + "px " + this.shb
                    }
                    g = [];
                    d = "";
                    v = 0;
                    y = 0;
                    t = 0;
                    for (var p = t; p < this.dyx.length; p++) {
                        d += this.dyx.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.dyx.charAt(p) == " ") || (this.dyx.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.dyx.length - 1) {
                            g[y] = this.dyx.substring(t, this.dyx.length)
                        } else {
                            if (this.dyx.charAt(p) == "|") {
                                g[y] = this.dyx.substring(t, v);
                                y++;
                                t = v + 1;
                                d = this.dyx.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[y] = this.dyx.substring(t, v);
                                    y++;
                                    t = v + 1;
                                    d = this.dyx.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.xvu) {
                    o.font = this.iuq + " " + (m - 3) + "px " + this.shb;
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
tuo.prototype = new srr;

function xid() {
    this.yoz = null;
    this.gqh = null;
    this.yzz = null;
    this.uyt = false;
    this.pqm = false;
    this.hqs = true;
    this.mfn = false;
    this.mtu = false;
    this.xrm = 0;
    this.uvk = 0;
    this.oys = 0;
    this.zqg = "";
    this.uxr = "";
    this.aof = null;
    this.ssv = null;
    this.shb = "arial";
    this.iuq = "bold";
    this.cyb = "arial";
    this.gme = "rgb(0,0,200)";
    this.vdq = "rgb(255,255,255)";
    this.tal = "rgb(0,0,150)";
    this.ocl = "rgb(220,240,255)";
    this.snq = "rgb(130,220,255)";
    this.pmy = "rgb(130,190,255)";
    this.gyy = "rgb(255,255,255)";
    this.ebp = "rgb(130,190,255)";
    this.cnz = "rgb(100,160,255)";
    this.edl = "rgb(255,255,255)";
    this.duv = new kyc();
    this.epx = null;
    this.nar = null;
    this.hsn = null;
    this.pbb = null;
    this.tpv = null;
    this.ysx = null;
    this.mng = null;
    this.erw = null;
    this.ujn = 2;
    this.igw = 3;
    this.syd = 10;
    this.gvk = 3;
    this.ojy = 5;
    this.jjn = 36;
    this.xvu = 30;
    this.ceo = 22;
    this.lya = function(a, c, b) {
        xid.prototype.lya.call(this, a, c, b);
        this.mfn = jyv.dwe.value37
    };
    this.dgs = function(b) {
        try {
            var a = (jyv.dwe.value37) ? b.knx : b.vdu;
            this.epx = b.otm;
            this.nar = b.fwb;
            this.hsn = b.okv;
            this.pbb = b.wkn;
            this.tpv = b.gst;
            this.ysx = b.iyb;
            this.duv = b.lpt;
            this.jjn = b.def;
            this.xvu = b.fontSize;
            this.ceo = b.eys;
            this.gvk = b.gtq;
            this.ojy = b.eha;
            this.ujn = b.owp;
            this.igw = b.agq;
            this.syd = b.nbj;
            if (jyv.dwe.value36) {
                this.uxr = this.parent.sqv(this.parent.language.iyc)
            } else {
                if (jyv.dwe.value37) {
                    this.uxr = this.parent.sqv(this.parent.language.crf)
                }
            }
            this.yoz = [];
            this.gqh = this.sja(a.wkx, this.parent.language.ret, this.parent.unt, (this.parent.bxp.hxm === false) ? this.parent.nej.pvr("btn") : this.parent.nej.pvr("btn_re"), b.wgs);
            this.yoz.push(this.gqh);
            if (jyv.dwe.value37) {
                this.yzz = this.sja(a.elh, this.parent.language.key, this.parent.dlo, (this.parent.bxp.hxm === false) ? this.parent.nej.pvr("btn") : this.parent.nej.pvr("btn_e"), b.wgs);
                this.yoz.push(this.yzz)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.nxv = function(b) {
        try {
            var a = (jyv.dwe.value37) ? b.knx : b.vdu;
            this.epx = b.otm;
            this.nar = b.fwb;
            this.hsn = b.okv;
            this.pbb = b.wkn;
            this.tpv = b.gst;
            this.ysx = b.iyb;
            this.duv = b.lpt;
            if (this.gqh) {
                this.gqh.dho(a.wkx);
                this.gqh.nxv(b.wgs)
            }
            if (this.yzz) {
                this.yzz.dho(a.elh);
                this.yzz.nxv(b.wgs)
            }
            this.jjn = b.def;
            this.xvu = b.fontSize;
            this.ceo = b.eys;
            this.gvk = b.gtq;
            this.ojy = b.eha;
            this.ujn = b.owp;
            this.igw = b.agq;
            this.syd = b.nbj
        } catch (c) {
            console.error(c)
        }
    };
    this.gds = function(c) {
        try {
            this.shb = c.font;
            this.iuq = c.hfp;
            this.gme = c.szg;
            this.vdq = c.ipj;
            this.tal = c.kzx;
            this.ocl = c.backgroundColor;
            this.snq = c.dih;
            this.pmy = c.qpp;
            this.gyy = c.vfn;
            this.ebp = c.kqn;
            this.cnz = c.vvs;
            this.edl = c.xne;
            this.aof = c.sme;
            this.ssv = c.fhj;
            for (var b = 0, a = this.yoz.length; b < a; b++) {
                this.yoz[b].gds((this.parent.bxp.vaw === true) ? c.cty : c.wqt)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.itu = function(d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.yoz.length; f < b; f++) {
            var a = this.yoz[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.fam() === true) {
                if (a.knh() === true && a.gpy() === false && this.hqs) {
                    a.xgo(true, true);
                    this.parent.nej.ckk("btn");
                    this.parent.nej.ddz("btn");
                    a.fyd();
                    for (var e = 0; e < b; e++) {
                        this.yoz[e].bco(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.ysx.x && c <= this.ysx.x + this.ysx.width && g >= this.ysx.y && g <= this.ysx.y + this.ysx.height && this.mfn && this.pqm) {
            this.nvm()
        }
        return true
    };
    this.hlp = function() {};
    this.ykf = function() {};
    this.ovz = function() {};
    this.sja = function(d, f, e, a, c) {
        var b = new mlm();
        b.lya(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.fyd = e;
        b.nxv(c);
        return b
    };
    this.pwt = function(c) {
        this.pqm = c;
        for (var b = 0, a = this.yoz.length; b < a; b++) {
            this.yoz[b].qhj(c)
        }
    };
    this.nvm = function() {
        this.hqs = !this.hqs;
        this.parent.spt()
    };
    this.rxq = function(d, a, c, b) {
        this.mtu = false;
        this.ffu = true;
        this.zqg = this.iem(b);
        this.xrm = d;
        this.uvk = a;
        this.oys = c;
        if (this.fam()) {
            this.pwt(true);
            this.spt()
        }
    };
    this.iem = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.jvs(d) + ":" + this.jvs(a) + ":" + this.jvs(c)
    };
    this.jvs = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.coo = function(a, b) {
        this.mtu = a;
        if (b && b === true) {
            this.spt()
        }
    };
    this.zgu = function(a, b) {
        this.ffu = false;
        if (jyv.dwe.value37) {
            this.hqs = false
        }
        this.coo(a, false);
        xid.prototype.zgu.call(this, a, b)
    };
    this.spt = function(j, f, k, d) {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.nej.pvr("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.ocl;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.duv.x, this.duv.y, this.duv.x + this.duv.width, this.duv.y);
            g.addColorStop(0.2, this.aof);
            g.addColorStop(1, this.ssv);
            l.fillStyle = g;
            l.save();
            if (this.parent.osh === jyv.bxp.aqn) {
                l.translate(this.duv.width / 2, this.duv.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.duv.width / 2, -this.duv.height / 2)
            }
            l.fillRect(this.duv.x, this.duv.y, this.duv.width, this.duv.height);
            l.drawImage(c, this.duv.x, this.duv.y, this.duv.width, this.duv.height);
            l.restore()
        } else {
            if (this.parent.bxp.vaw === true) {
                jyv.oot.jbx(l, this.duv.x, this.duv.y, this.duv.width, this.duv.height, this.aof, 1)
            }
        }
        jyv.oot.pyl(l, this.epx.x, this.epx.y, this.epx.width, this.epx.height, 0, this.snq);
        jyv.oot.cpn(l, this.uxr, this.gyy, this.epx.x, this.epx.y + this.gvk, this.epx.width, this.epx.height, this.shb, this.jjn, this.iuq);
        jyv.oot.pyl(l, this.nar.x, this.nar.y, this.nar.width, this.nar.height, 0, this.snq);
        if (jyv.dwe.value36) {
            jyv.oot.lop(l, this.parent.sqv(this.parent.language.ubl), this.gyy, this.nar.x, this.nar.y + this.gvk, this.nar.width, this.nar.height, this.shb, this.xvu, this.iuq, this.ojy)
        } else {
            if (jyv.dwe.value37) {
                jyv.oot.lop(l, this.parent.sqv(this.parent.language.cyc), this.gyy, this.nar.x, this.nar.y + this.gvk, this.nar.width, this.nar.height, this.shb, this.xvu, this.iuq, this.ojy)
            }
        }
        jyv.oot.pyl(l, this.hsn.x, this.hsn.y, this.hsn.width, this.hsn.height, 0, this.pmy);
        jyv.oot.lop(l, this.parent.sqv(this.parent.language.qkw), this.gyy, this.hsn.x, this.hsn.y + this.gvk, this.hsn.width, this.hsn.height, this.shb, this.xvu, this.iuq, this.ojy);
        jyv.oot.pyl(l, this.pbb.x, this.pbb.y, this.pbb.width, this.pbb.height, 0, this.snq);
        jyv.oot.lop(l, this.parent.sqv(this.parent.language.nji), this.gyy, this.pbb.x, this.pbb.y + this.gvk, this.pbb.width, this.pbb.height, this.shb, this.xvu, this.iuq, this.ojy);
        if (this.mfn) {
            this.xjb(l)
        }
        if (this.ffu) {
            if (jyv.dwe.value36) {
                jyv.oot.gnh(l, this.xrm, this.gyy, this.nar.x, this.nar.y + this.gvk, this.nar.width, this.nar.height, this.shb, this.xvu, this.iuq, this.ojy)
            } else {
                if (jyv.dwe.value37) {
                    jyv.oot.gnh(l, this.zqg, this.gyy, this.nar.x, this.nar.y + this.gvk, this.nar.width, this.nar.height, this.shb, this.xvu, this.iuq, this.ojy)
                }
            }
            jyv.oot.gnh(l, this.parent.sac(this.uvk), this.gyy, this.hsn.x, this.hsn.y + this.gvk, this.hsn.width, this.hsn.height, this.shb, this.xvu, this.iuq, this.ojy);
            jyv.oot.gnh(l, this.parent.sac(this.oys), this.gyy, this.pbb.x, this.pbb.y + this.gvk, this.pbb.width, this.pbb.height, this.shb, this.xvu, this.iuq, this.ojy)
        }
        for (var b = 0, e = this.yoz.length; b < e; b++) {
            this.yoz[b].spt()
        }
        if (this.mtu) {
            jyv.oot.exj(l, this.tpv.x, this.tpv.y, this.tpv.width, this.tpv.height, this.igw, this.gme, 0.3, this.tal, this.ujn, 1);
            jyv.oot.cpn(l, this.parent.sqv(this.parent.language.hhn), this.vdq, this.tpv.x, this.tpv.y, this.tpv.width, this.tpv.height, this.shb, this.xvu, this.iuq)
        }
        l.restore();
        if (this.lub && this.tgs) {
            if (a) {
                this.lub.drawImage(this.tgs, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.lub.drawImage(this.tgs, this.x, this.y)
            }
        }
    };
    this.xjb = function(b) {
        var c = Math.round(this.ysx.height / 2),
            a = Math.round(this.ysx.x + c),
            d = Math.round(this.ysx.y + c / 2);
        b.save();
        jyv.oot.pyl(b, this.ysx.x, this.ysx.y, this.ysx.width, this.ysx.height, this.syd, this.ebp, this.cnz, this.ujn);
        jyv.oot.cpn(b, this.parent.language.mms, this.gyy, this.ysx.x + this.ysx.height, this.ysx.y, this.ysx.width - this.ysx.height, this.ysx.height, this.shb, this.ceo, this.iuq);
        jyv.oot.jbx(b, a, d, c, c, null, 0, this.edl, this.ujn, 1);
        if (this.hqs) {
            jyv.oot.jbx(b, a + c / 4, d + c / 4, c / 2, c / 2, this.edl, 1)
        }
        b.restore()
    }
}
xid.prototype = new srr;

function fkg() {
    var a = this;
    this.tqe = function() {
        a.tlt = false
    };
    this.spt = function() {
        if (!this.fam()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.ugy != null) {
            b.drawImage(this.ugy, 0, 0, this.ugy.width, this.ugy.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
fkg.prototype = new frl;

function faq() {
    this.xxm = "";
    this.abq = "";
    this.ugy = null;
    this.zwh = "sans-serif";
    this.odc = "sans-serif";
    this.iuq = "bold";
    this.iaw = null;
    this.gyy = null;
    this.uef = null;
    this.kof = null;
    this.ocl = null;
    this.tws = 16;
    this.fga = 20;
    this.gek = 0;
    this.jks = 0;
    this.ujn = 2;
    this.mbw = 3;
    this.trt = 3;
    this.zbq = 3;
    this.uec = 3;
    this.lya = function(a, e, b, d, c) {
        faq.prototype.lya.call(this, a, e, b);
        this.xxm = d;
        this.abq = c
    };
    this.nxv = function(a) {
        try {
            this.tws = a.gbd;
            this.fga = a.uux;
            this.gek = a.gvt;
            this.jks = a.hnd;
            this.ujn = a.owp;
            this.mbw = a.meh;
            this.trt = a.wev;
            this.zbq = a.wwa;
            this.uec = a.zes
        } catch (b) {
            console.error(b)
        }
    };
    this.gds = function(a) {
        try {
            this.zwh = a.kpm;
            this.odc = a.nhu;
            this.iuq = a.hfp;
            this.iaw = a.klk;
            this.gyy = a.vfn;
            this.uef = a.borderColor;
            this.kof = a.jdr;
            this.ocl = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.rkw = function(a, b) {
        this.abq = a;
        if (b && b === true && this.context2D != null && this.fam() === true) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.syu = function(a, b) {
        this.xxm = a;
        if (b && b === true && this.context2D != null && this.fam() === true) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.spt = function() {
        if (!this.fam()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.kof) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.uef);
            b.addColorStop(1, this.kof);
            jyv.oot.mkc(a, this.x, this.y, this.width, this.height, this.mbw, this.trt, this.zbq, this.uec, this.ocl, 1, b, this.ujn, 1)
        } else {
            jyv.oot.mkc(a, this.x, this.y, this.width, this.height, this.mbw, this.trt, this.zbq, this.uec, this.ocl, 1, this.uef, this.ujn, 1)
        }
        if (this.xxm != null) {
            jyv.oot.cpn(a, this.xxm, this.iaw, this.x + this.ujn, this.y + this.gek, this.width - 2 * this.ujn, this.height, this.zwh, this.tws, this.iuq)
        }
        if (this.abq != null) {
            if (this.xxm != null) {
                jyv.oot.cpn(a, this.abq, this.gyy, this.x + this.ujn, this.y + this.jks, this.width - 2 * this.ujn, this.height, this.odc, this.fga, this.iuq)
            } else {
                jyv.oot.cpn(a, this.abq, this.gyy, this.x + this.ujn, this.y + this.ujn, this.width - 2 * this.ujn, this.height, this.odc, this.fga, this.iuq)
            }
        }
        if (this.ugy) {
            a.drawImage(this.ugy, 0, 0, this.ugy.width, this.ugy.height, this.x + this.ujn, this.y + this.ujn, this.width - 2 * this.ujn, this.height - 2 * this.ujn)
        }
        a.restore();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.tgs, this.x, this.y)
        }
    }
}
faq.prototype = new srr;

function itg() {
    this.ugy = new Image();
    this.abq = "";
    this.vng = true;
    this.shb = null;
    this.iuq = "bold";
    this.hkr = "red";
    this.kua = "orange";
    this.bwv = "white";
    this.xvu = 40;
    this.ojy = 0;
    this.gvk = 0;
    this.vbn = 0;
    this.ysr = 2;
    this.zip = null;
    this.dls = 0;
    this.bkt = 0;
    this.lya = function(a, e, c, b, d) {
        itg.prototype.lya.call(this, a, e, c);
        this.ugy = b;
        this.abq = d
    };
    this.nxv = function(a) {
        try {
            this.xvu = a.fontSize;
            this.ojy = a.eha;
            this.gvk = a.gtq;
            this.vbn = a.xrg;
            this.ysr = a.kkn
        } catch (b) {
            console.error(b)
        }
    };
    this.gds = function(a) {
        try {
            this.shb = a.font;
            this.iuq = a.hfp;
            this.hkr = a.cyf;
            this.kua = a.cmu;
            this.bwv = a.ynr
        } catch (b) {
            console.error(b)
        }
    };
    this.rkw = function(a, b) {
        this.abq = a;
        if (b && b === true && this.context2D != null) {
            this.zgu(true, true)
        }
    };
    this.haq = function(a, b) {
        this.abq = a;
        this.vng = false;
        if (b && b === true && this.context2D != null) {
            this.zgu(true, true)
        }
    };
    this.zgu = function(a, b) {
        this.aik = a;
        if (b && b === true && this.context2D != null) {
            if (this.tgs == null && this.fam()) {
                this.spt()
            } else {
                if (this.parent != null) {
                    this.parent.spt(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.xkv = function(a, b, c) {
        this.zip = a;
        this.dls = b;
        this.bkt = c
    };
    this.spt = function() {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.tgs != null) ? 0 : this.x,
            d = (this.tgs != null) ? 0 : this.y;
        b.save();
        if (this.tgs == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.vng === true) {
            if (this.zip != null) {
                b.drawImage(this.zip, this.x + this.dls, this.y + this.bkt, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.ugy != null) {
                b.drawImage(this.ugy, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.ojy, d, a + this.width / 2 + this.ojy, d + this.height);
        c.addColorStop(0, this.hkr);
        c.addColorStop(1, this.kua);
        jyv.oot.cpn(b, this.abq, c, a + this.vbn + this.ojy, d + this.gvk, this.width - 2 * this.vbn, this.height, this.shb, this.xvu, this.iuq, this.bwv, this.ysr);
        b.restore();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.tgs, this.x, this.y)
        }
    }
}
itg.prototype = new srr;

function nhk() {
    var a = this;
    this.state = 0;
    this.gal = 1;
    this.hyp = null;
    this.cnr = null;
    this.hil = null;
    this.mqj = "round";
    this.shb = null;
    this.iuq = "bold";
    this.rzw = "center";
    this.ocl = null;
    this.gyy = null;
    this.emg = 1;
    this.sfw = null;
    this.xvu = 17;
    this.vbn = 2;
    this.kbg = 0;
    this.ujn = 1;
    this.pqj = 0;
    this.llp = 0;
    this.ubb = 0;
    this.nxv = function(b) {
        try {
            this.xvu = b.fontSize;
            this.vbn = b.xrg;
            this.kbg = b.xjw;
            this.ujn = b.owp;
            this.ubb = b.qdz
        } catch (c) {
            console.error(c)
        }
    };
    this.gds = function(b) {
        try {
            this.mqj = b.sfy;
            this.shb = b.font;
            this.iuq = b.hfp;
            this.rzw = b.textAlign;
            this.ocl = b.backgroundColor;
            this.gyy = b.vfn;
            this.emg = b.mxx;
            if (b.borderColor && b.jdr) {
                this.sfw = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.sfw.addColorStop(0, b.borderColor);
                this.sfw.addColorStop(1, b.jdr)
            } else {
                this.sfw = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.znm = function() {
        return this.mqj
    };
    this.yqo = function(c, b) {
        this.state = c;
        this.gal = b
    };
    this.psd = function(b) {
        this.ugy = b;
        if (this.mqj === "round") {
            this.pqj = this.width / 2 - this.vbn
        }
        if (this.ugy) {
            this.llp = Math.round(this.ugy.height / (2 * this.gal))
        }
    };
    this.jox = function(b) {
        this.state = (b < this.gal) ? b : this.state
    };
    this.drb = function(b) {
        this.hyp = b
    };
    this.tqe = function() {
        a.tlt = false
    };
    this.tnb = function() {
        a.vuu = false;
        if (a.fam()) {
            a.parent.spt(a.x, a.y, a.width, a.height)
        }
    };
    this.spt = function() {
        if (!this.fam()) {
            return
        }
        var l = this.context2D,
            e = (this.knh()) ? this.emg : this.emg / 2,
            b = this.xvu,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.ugy && this.fyd) {
            if (!this.knh()) {
                l.globalAlpha = e
            }
            if (this.mqj === "round") {
                jyv.oot.dyu(l, this.x + this.width / 2, this.y + this.height / 2, this.pqj, this.ocl, e * this.emg)
            } else {
                if (this.mqj === "rect") {
                    jyv.oot.exj(l, this.x, this.y, this.width, this.height, this.kbg, this.ocl, e * this.emg, this.sfw, this.ujn, e)
                }
            }
            if (this.wlo()) {
                if (this.mqj === "round") {
                    l.drawImage(this.ugy, 0, (this.state * 2 * this.llp) + this.llp, this.ugy.width, this.llp, this.x, this.y, this.width, this.height)
                } else {
                    if (this.mqj === "rect") {
                        l.drawImage(this.ugy, 0, (this.state * 2 * this.llp) + this.llp, this.ugy.width, this.llp, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.mqj === "round") {
                    l.drawImage(this.ugy, 0, (this.state * 2 * this.llp), this.ugy.width, this.llp, this.x, this.y, this.width, this.height)
                } else {
                    if (this.mqj === "rect") {
                        l.drawImage(this.ugy, 0, (this.state * 2 * this.llp), this.ugy.width, this.llp, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.abq != null) {
                l.textAlign = this.rzw;
                l.textBaseline = "bottom";
                l.font = this.iuq + " " + b + "px " + this.shb;
                l.fillStyle = this.gyy;
                d = this.abq.split("|");
                j = 0;
                g = (this.rzw === "center") ? this.x + this.width / 2 : (this.rzw === "left") ? this.x + 2 * this.vbn : this.x + this.width - 2 * this.vbn;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.vbn) {
                    c = ((this.width - 2 * this.vbn) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.iuq + " " + b + "px " + this.shb
                }
                if (b * d.length > this.ubb) {
                    c = ((this.ubb) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.iuq + " " + b + "px " + this.shb
                }
                k = (this.height - this.vbn - this.ubb) + (this.ubb - b * d.length) / 2;
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
nhk.prototype = new frl;

function vtg() {
    var a = this;
    this.mqj = "rect";
    this.tfa = -1;
    this.shb = null;
    this.iuq = "bold";
    this.ocl = null;
    this.qdu = null;
    this.lts = null;
    this.mrk = null;
    this.uef = null;
    this.gyy = null;
    this.znk = null;
    this.kbg = 3;
    this.ojy = -2;
    this.gvk = 2;
    this.hzt = 6;
    this.xvu = 26;
    this.ujn = 2;
    this.nxv = function(b) {
        try {
            this.xvu = b.fontSize;
            this.ojy = b.eha;
            this.gvk = b.gtq;
            this.hzt = b.jvq;
            this.kbg = b.xjw;
            this.ujn = b.owp
        } catch (c) {
            console.error(c)
        }
    };
    this.gds = function(b) {
        try {
            this.shb = b.font;
            this.iuq = b.hfp;
            this.ocl = b.backgroundColor;
            this.qdu = b.our;
            this.lts = b.ebx;
            this.mrk = b.mhk;
            this.uef = b.borderColor;
            this.gyy = b.vfn;
            this.znk = b.mlv;
            this.mqj = b.sfy;
            this.tfa = b.aqz
        } catch (c) {
            console.error(c)
        }
    };
    this.znm = function() {
        return this.mqj
    };
    this.tqe = function() {
        a.tlt = false
    };
    this.tnb = function() {
        a.vuu = false;
        if (a.fam()) {
            a.parent.spt(a.x, a.y, a.width, a.height)
        }
    };
    this.spt = function() {
        if (!this.fam()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.ocl,
            m = this.qdu,
            b = this.xvu,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.tfa == 0 || this.tfa == 3) ? this.kbg : 0;
        lt = (this.tfa == 1 || this.tfa == 3) ? this.kbg : 0;
        rb = (this.tfa == 0 || this.tfa == 2) ? this.kbg : 0;
        lb = (this.tfa == 1 || this.tfa == 2) ? this.kbg : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.wlo()) {
            n = (this.lts != null) ? this.lts : n;
            m = (this.mrk != null) ? this.mrk : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.mqj === "rrect") {
                    jyv.oot.mkc(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.uef, this.ujn, 1)
                } else {
                    if (this.mqj === "rect") {
                        if (this.uef) {
                            jyv.oot.pyl(p, this.x, this.y, this.width, this.height, this.kbg, l, this.uef, this.ujn)
                        } else {
                            jyv.oot.jbx(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.mqj === "triangle") {
                            jyv.oot.elc(p, this.tfa, this.x, this.y, this.width, this.height, this.kbg, l, 1, this.uef, this.ujn, 1)
                        }
                    }
                }
            } else {
                if (this.mqj === "rrect") {
                    jyv.oot.mkc(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.uef, this.ujn, 1)
                } else {
                    if (this.mqj === "rect") {
                        if (this.uef) {
                            jyv.oot.pyl(p, this.x, this.y, this.width, this.height, this.kbg, n, this.uef, this.ujn, 1)
                        } else {
                            jyv.oot.jbx(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.mqj === "triangle") {
                            jyv.oot.elc(p, this.tfa, this.x, this.y, this.width, this.height, this.kbg, n, 1, this.uef, this.ujn, 1)
                        }
                    }
                }
            }
        }
        if (this.ugy != null) {
            h = this.height - 2 * this.hzt;
            p.drawImage(this.ugy, this.x + this.width / 2 - h / 2, this.y + this.hzt, h, h)
        }
        if (this.abq != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.abq.split("|");
            d = 0;
            if (this.wlo()) {
                d = 1;
                p.fillStyle = this.znk
            } else {
                p.fillStyle = this.gyy
            }
            p.font = this.iuq + " " + b + "px " + this.shb;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.hzt) {
                c = ((this.width - 2 * this.hzt) / o);
                b = Math.round(c * b) - 1;
                p.font = this.iuq + " " + b + "px " + this.shb
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.iuq + " " + b + "px " + this.shb
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.ojy, this.y - this.gvk + k + d);
                k += b
            }
        }
        p.restore()
    }
}
vtg.prototype = new frl;

function eqo() {
    var a = this;
    this.abq = null;
    this.pqm = false;
    this.tlt = false;
    this.wja = false;
    this.shb = null;
    this.iuq = "bold";
    this.rzw = "center";
    this.ocl = null;
    this.uef = null;
    this.gyy = null;
    this.usr = "rect";
    this.oqq = new kyc();
    this.hfl = new kyc();
    this.xvu = 16;
    this.kbg = 8;
    this.ujn = 1;
    this.eul = 0;
    var b = 200;
    this.lya = function(c, f, d, e) {
        this.abq = e;
        eqo.prototype.lya.call(this, c, f, d)
    };
    this.gds = function(c) {
        try {
            this.shb = c.font;
            this.iuq = c.hfp;
            this.rzw = c.textAlign;
            this.ocl = c.backgroundColor;
            this.uef = c.borderColor;
            this.gyy = c.vfn;
            this.usr = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.nxv = function(c) {
        try {
            this.oqq = c.uud;
            this.hfl = c.sos;
            this.xvu = c.fontSize;
            this.kbg = c.xjw;
            this.ujn = c.owp
        } catch (d) {
            console.error(d)
        }
    };
    this.qhj = function(c) {
        this.pqm = c
    };
    this.knh = function() {
        return this.pqm
    };
    this.yzl = function(c, d) {
        this.wja = c;
        if (d && d === true) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.yop = function() {
        return this.wja
    };
    this.rkw = function(c, d) {
        this.abq = c;
        if (d && d === true && this.fam()) {
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.bco = function(c, d) {
        this.tlt = c;
        d = (d === false) ? false : true;
        clearTimeout(this.eul);
        if (this.tlt === true && d === true) {
            this.eul = setTimeout(this.tqe, b)
        }
    };
    this.gpy = function() {
        return this.tlt
    };
    this.tqe = function() {
        a.tlt = false
    };
    this.spt = function() {
        if (!this.fam()) {
            return
        }
        var c = this.context2D;
        c.save();
        jyv.oot.pyl(c, this.x, this.y, this.width, this.height, this.kbg, this.ocl, this.uef, this.ujn);
        if (this.usr === "rect") {
            jyv.oot.jbx(c, this.x + this.hfl.x, this.y + this.hfl.y, this.hfl.width, this.hfl.height, this.gyy, 0.2, this.gyy, this.ujn, 1);
            if (this.wja === true) {
                jyv.oot.jbx(c, this.x + this.hfl.x + this.hfl.width / 4, this.y + this.hfl.y + this.hfl.height / 4, this.hfl.width / 2, this.hfl.height / 2, this.gyy, 1)
            }
        } else {
            if (this.usr === "round") {
                jyv.oot.dyu(c, this.x + this.hfl.x + this.hfl.width / 2, this.y + this.hfl.y + this.hfl.height / 2, this.hfl.width / 2, this.gyy, 0.2, this.gyy, this.ujn, 1);
                if (this.wja === true) {
                    jyv.oot.dyu(c, this.x + this.hfl.x + this.hfl.width / 2, this.y + this.hfl.y + this.hfl.height / 2, this.hfl.width / 4, this.gyy, 1)
                }
            }
        }
        if (this.abq && this.abq != "") {
            jyv.oot.dbf(c, this.abq, this.gyy, this.x + this.oqq.x, this.y + this.oqq.y, this.oqq.width, this.oqq.height, this.shb, this.xvu, this.iuq, this.rzw, true)
        }
        c.restore();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.tgs, this.x, this.y)
        }
    };
    this.fyd = {}
}
eqo.prototype = new srr;

function yew() {
    var b = this;
    var c = 0;
    var a = 1;
    this.odj = null;
    this.xxm = "";
    this.nng = "";
    this.osv = "";
    this.kgz = "";
    this.gfc = false;
    this.xrm = [];
    this.her = 0;
    this.aqi = 0;
    this.efj = 0;
    this.oez = 0;
    this.fbn = 0;
    this.dog = 0;
    this.daf = 0;
    this.nmw = 0;
    this.jzh = false;
    this.rnf = false;
    this.xag = false;
    this.usr = "center";
    this.shb = "arial";
    this.iuq = "bold";
    this.iaw = "white";
    this.gyy = "white";
    this.ocl = "black";
    this.qdu = null;
    this.uef = "white";
    this.kof = "rgb(150,150,150)";
    this.aof = null;
    this.loi = null;
    this.ujn = 3;
    this.ycb = 0;
    this.rrl = 0;
    this.cjk = 0;
    this.tws = 30;
    this.cmd = 24;
    this.epx = new kyc();
    this.hqd = new kyc();
    this.hwk = new kyc();
    this.yuq = new kyc();
    this.dbn = new kyc();
    this.jeu = new kyc();
    this.pwu = new kyc();
    this.owu = new kyc();
    this.ljw = new kyc();
    this.lqy = 7;
    this.zoy = 0;
    this.gww = 0;
    this.bsh = 0;
    this.cpa = c;
    this.kot = 0;
    this.vwv = 89;
    this.hvx = false;
    this.fxv = 0;
    this.btt = 0;
    this.spq = 0;
    this.aou = 0;
    this.owi = null;
    this.rpm = 0;
    this.qon = 1;
    this.ypb = 250;
    this.lya = function(d, f, e) {
        yew.prototype.lya.call(this, d, f, e);
        this.odj = new chu();
        this.odj.lya();
        this.odj.mwi("buttons");
        this.odj.mwi("checkboxes");
        this.odj.mwi("displays");
        this.odj.mwi("lbuttons");
        this.odj.mwi("mbuttons");
        this.odj.mwi("vbuttons");
        this.odj.mwi("cbuttons")
    };
    this.dgs = function(d) {
        try {
            this.esp(d);
            this.yzm(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.gds = function(k) {
        try {
            var n = this.odj.ovp("lbuttons"),
                m = this.odj.ovp("mbuttons"),
                f = this.odj.ovp("cbuttons"),
                g = this.odj.ovp("displays");
            this.usr = k.type;
            this.shb = k.font;
            this.iuq = k.hfp;
            this.iaw = k.klk;
            this.gyy = k.vfn;
            this.ocl = k.backgroundColor;
            this.qdu = k.our;
            this.uef = k.borderColor;
            this.aof = k.sme;
            this.loi = k.uvi;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].gds(k.zlf)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].gds(k.hvh)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].gds(k.qzp)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].gds(k.display)
            }
            this.odj.hlg("checkboxes", "#gds", [k.sur])
        } catch (l) {
            console.error(l)
        }
    };
    this.nxv = function(k) {
        try {
            var n = this.odj.ovp("lbuttons"),
                m = this.odj.ovp("mbuttons"),
                f = this.odj.ovp("cbuttons"),
                g = this.odj.ovp("displays");
            this.ujn = k.owp;
            this.ycb = k.wlp;
            this.rrl = k.ddf;
            this.cjk = k.ifs;
            this.tws = k.gbd;
            this.cmd = k.swf;
            this.epx = k.otm;
            this.hqd = k.ecl;
            this.hwk = k.ybz;
            this.yuq = k.chc;
            this.dbn = k.olx;
            this.jeu = k.bky;
            this.odj.iiz("lgames", "#dho", [k.zgq]);
            this.odj.iiz("mgames", "#dho", [k.apv]);
            this.odj.iiz("lmincredit", "#dho", [k.ipt]);
            this.odj.iiz("mmincredit", "#dho", [k.gxu]);
            this.odj.iiz("lmaxcredit", "#dho", [k.gqg]);
            this.odj.iiz("mmaxcredit", "#dho", [k.uwl]);
            this.odj.iiz("lmaxwin", "#dho", [k.bhe]);
            this.odj.iiz("mmaxwin", "#dho", [k.omf]);
            this.odj.iiz("start", "#dho", [k.fty]);
            this.odj.iiz("cancel", "#dho", [k.abc]);
            this.odj.iiz("gamesd", "#dho", [k.dit]);
            this.odj.iiz("mincreditd", "#dho", [k.zvk]);
            this.odj.iiz("maxcreditd", "#dho", [k.pws]);
            this.odj.iiz("maxwind", "#dho", [k.emf]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].nxv(k.zlf)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].nxv(k.hvh)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].nxv(k.qzp)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].nxv(k.display)
            }
            this.odj.iiz("cmincredit", "#dho", [k.hni]);
            this.odj.iiz("cmaxcredit", "#dho", [k.rny]);
            this.odj.iiz("cmaxwin", "#dho", [k.zvb]);
            this.odj.hlg("checkboxes", "#nxv", [k.sur])
        } catch (l) {
            console.error(l)
        }
    };
    this.esp = function(d) {
        this.odj.wvv("start", this.sja(d.fty, this.parent.language.start, this.uyq, this.parent.sbz.upo), ["buttons", "cbuttons"]);
        this.odj.wvv("cancel", this.sja(d.abc, this.parent.language.bxh, this.jxk, this.parent.sbz.gzo), ["buttons", "cbuttons"]);
        this.odj.wvv("lgames", this.sja(d.zgq, "", this.ucf, null), ["buttons", "lbuttons", "vbuttons"]);
        this.odj.wvv("mgames", this.sja(d.apv, "+", this.qvd, null), ["buttons", "mbuttons", "vbuttons"]);
        this.odj.wvv("lmincredit", this.sja(d.ipt, "", this.ida, null), ["buttons", "lbuttons", "vbuttons"]);
        this.odj.wvv("mmincredit", this.sja(d.gxu, "+", this.fhs, null), ["buttons", "mbuttons", "vbuttons"]);
        this.odj.wvv("lmaxcredit", this.sja(d.gqg, "", this.ftr, null), ["buttons", "lbuttons", "vbuttons"]);
        this.odj.wvv("mmaxcredit", this.sja(d.uwl, "+", this.fgi, null), ["buttons", "mbuttons", "vbuttons"]);
        this.odj.wvv("lmaxwin", this.sja(d.bhe, "", this.wrj, null), ["buttons", "lbuttons", "vbuttons"]);
        this.odj.wvv("mmaxwin", this.sja(d.omf, "+", this.imf, null), ["buttons", "mbuttons", "vbuttons"]);
        this.odj.wvv("cmincredit", this.fkb(d.hni, "", this.atp), ["checkboxes"]);
        this.odj.wvv("cmaxcredit", this.fkb(d.rny, "", this.mmn), ["checkboxes"]);
        this.odj.wvv("cmaxwin", this.fkb(d.zvb, "", this.wee), ["checkboxes"])
    };
    this.yzm = function(d) {
        this.odj.wvv("gamesd", this.rlh(d.dit, null, (this.xrm[this.her] > 0) ? this.xrm[this.her] : "---"), ["displays"]);
        this.odj.wvv("mincreditd", this.rlh(d.zvk, null, "---"), ["displays"]);
        this.odj.wvv("maxcreditd", this.rlh(d.pws, null, "---"), ["displays"]);
        this.odj.wvv("maxwind", this.rlh(d.emf, null, "---"), ["displays"])
    };
    this.rlh = function(d, g, f) {
        var e = new faq();
        e.lya(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.sja = function(f, i, g, e) {
        var d = new vtg();
        d.lya(f, this.context2D, null, null, i);
        d.parent = this;
        d.fyd = g;
        if (e) {
            d.lfi = e.xbc
        }
        return d
    };
    this.fkb = function(e, g, f) {
        var d = new eqo();
        d.lya(e, this.context2D, null, g);
        d.parent = this;
        d.fyd = f;
        return d
    };
    this.itu = function(r, n) {
        var s = this.odj.ovp("vbuttons"),
            l = this.odj.ovp("cbuttons"),
            g = this.odj.ovp("checkboxes"),
            p = this.odj.drl("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.lgg) {
            return true
        }
        if ((!p || !p.fam()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.xag = true;
            this.qhb();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.fam() === true && d.knh() === true && d.gpy() === false) {
                    d.xgo(true, false, false);
                    this.rpm = 0;
                    this.qon = 1;
                    if (d.fyd() === false) {
                        this.owi = function() {
                            if (d.fyd() === true) {
                                clearInterval(b.aou);
                                d.xgo(false, false);
                                b.parent.spt();
                                for (var i = 0; i < m; i++) {
                                    s[i].bco(false)
                                }
                            }
                        };
                        this.aou = setInterval(this.owi, this.ypb)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].bco(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.fam() === true && d.knh() === true) {
                    this.parent.nej.ckk("btn");
                    this.parent.nej.ddz("btn");
                    d.xgo(true, false);
                    d.fyd();
                    for (var e = 0; e < m; e++) {
                        l[e].bco(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.fam() === true && k.knh() === true) {
                    k.yzl(!k.yop(), true);
                    k.fyd();
                    for (var e = 0; e < m; e++) {
                        g[e].bco(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.hlp = function() {
        var e = this.odj.ovp("vbuttons"),
            j = this.odj.ovp("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.wlo() == true) {
                clearInterval(this.aou);
                f.xgo(false, false);
                this.parent.spt();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.wlo() == true) {
                f.xgo(false, false);
                this.parent.spt();
                return true
            }
        }
        return false
    };
    this.ykf = function(l) {
        var k = this.odj.ovp("buttons");
        if (this.lgg) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.lfi) {
                if (f.knh() && !f.gpy()) {
                    this.parent.nej.ckk("btn");
                    this.parent.nej.ddz("btn");
                    f.xgo(true, false);
                    f.fyd();
                    for (var e = 0; e < d; e++) {
                        k[e].bco(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.ovz = function() {
        var g = this.odj.ovp("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.wlo() == true) {
                e.xgo(false, false);
                this.parent.spt();
                return true
            }
        }
        return false
    };
    this.pwt = function(d) {
        this.odj.hlg("buttons", "#qhj", [d]);
        this.odj.hlg("checkboxes", "#qhj", [d]);
        if (d === true && this.rnf === true) {
            this.odj.iiz("cmincredit", "#qhj", [false])
        }
    };
    this.mce = function(d) {
        this.xrm = d.g;
        this.aqi = d.v;
        this.efj = d.v;
        this.jzh = d.r;
        this.rnf = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.oez = d.m;
            this.fbn = d.m
        }
    };
    this.ntj = function() {
        if (this.jzh === true) {
            this.dog = this.parent.eqm;
            this.daf = this.parent.eqm;
            this.her = 0;
            this.nmw = 0
        }
    };
    this.njl = function() {
        if (this.xrm.length > 0 && this.her >= 0 && this.xag === false) {
            return this.xrm[this.her]
        }
        return 0
    };
    this.ews = function() {
        var d = this.odj.drl("cmincredit") == null || this.odj.iiz("cmincredit", "#yop");
        if (this.dog > 0 && d === true) {
            return this.dog
        }
        return 0
    };
    this.etc = function() {
        var d = this.odj.drl("cmaxcredit") == null || this.odj.iiz("cmaxcredit", "#yop");
        if (this.daf > 0 && d === true) {
            return this.daf
        }
        return 0
    };
    this.sxg = function() {
        var d = this.odj.drl("cmaxwin") == null || this.odj.iiz("cmaxwin", "#yop");
        if (this.nmw > 0 && d === true) {
            return this.nmw
        }
        return 0
    };
    this.gpn = function() {
        var f = this.odj.drl("cmincredit") == null || this.odj.iiz("cmincredit", "#yop"),
            d = this.odj.drl("cmaxcredit") == null || this.odj.iiz("cmaxcredit", "#yop"),
            e = this.odj.drl("cmaxwin") == null || this.odj.iiz("cmaxwin", "#yop");
        this.hvx = false;
        this.xag = false;
        this.efj = (this.fbn > 0) ? this.parent.bdt() * this.fbn : this.efj;
        this.aqi = (this.oez > 0) ? this.parent.bdt() * this.oez : this.aqi;
        if (this.jzh === true) {
            f = this.rnf;
            d = false;
            e = false;
            this.ntj()
        } else {
            if (this.rnf === true) {
                f = true;
                this.dog = (this.dog < this.parent.eqm) ? this.dog : this.parent.eqm;
                this.dog = (this.dog > 0) ? this.dog : this.parent.eqm
            } else {
                f = (this.dog <= this.parent.eqm) ? f : false;
                this.dog = (this.dog < this.parent.eqm) ? this.dog : this.parent.eqm
            }
            d = (this.daf >= this.parent.eqm) ? d : false;
            this.daf = (this.daf > this.parent.eqm) ? this.daf : this.parent.eqm
        }
        this.odj.iiz("cmincredit", "#yzl", [f]);
        this.odj.iiz("cmaxcredit", "#yzl", [d]);
        this.odj.iiz("cmaxwin", "#yzl", [e]);
        this.odj.iiz("gamesd", "#rkw", [(this.xrm[this.her] > 0) ? this.xrm[this.her] : "---"]);
        this.odj.iiz("mincreditd", "#rkw", [(f === true && this.dog > 0) ? this.parent.sac(this.dog) : "---"]);
        this.odj.iiz("maxcreditd", "#rkw", [(d === true && this.daf > 0) ? this.parent.sac(this.daf) : "---"]);
        this.odj.iiz("maxwind", "#rkw", [(e === true && this.nmw > 0) ? this.parent.sac(this.nmw) : "---"]);
        this.odj.iiz("lmincredit", "#zgu", [f]);
        this.odj.iiz("mmincredit", "#zgu", [f && this.dog < this.parent.eqm]);
        this.odj.iiz("lmaxcredit", "#zgu", [d && this.daf > this.parent.eqm]);
        this.odj.iiz("mmaxcredit", "#zgu", [d]);
        this.odj.iiz("lmaxwin", "#zgu", [e && this.nmw > this.efj]);
        this.odj.iiz("mmaxwin", "#zgu", [e]);
        if (this.gfc === false) {
            this.pwt(true);
            this.zgu(true);
            this.parent.spt()
        } else {
            this.tvx();
            this.parent.nej.ckk("panel_out");
            this.parent.nej.ddz("panel_out");
            this.yfh()
        }
    };
    this.qhb = function() {
        b.pwt(false);
        if (b.gfc === false) {
            b.zgu(false);
            b.parent.spt()
        } else {
            b.uqk();
            b.parent.nej.ckk("panel_out");
            b.parent.nej.ddz("panel_out");
            b.yfh()
        }
    };
    this.tvx = function() {
        this.zgu(true);
        this.lgg = true;
        this.pqm = false;
        this.cpa = c;
        this.zoy = Math.floor(this.width / this.lqy);
        this.bsh = 0;
        this.gww = 0;
        this.kot = new Date().getTime()
    };
    this.uqk = function() {
        this.lgg = true;
        this.pqm = false;
        this.cpa = a;
        this.zoy = -Math.floor(this.width / this.lqy);
        this.bsh = 1;
        this.gww = this.width;
        this.kot = new Date().getTime()
    };
    this.yfh = function() {
        var d = b.vwv,
            e = new Date().getTime();
        if (b.bsh < b.lqy) {
            b.gww += b.zoy;
            b.bsh++;
            b.parent.spt();
            d = (((b.cpa === a) ? b.bsh - 1 : b.bsh) * b.vwv - (e - b.kot));
            b.fxv = setTimeout(b.yfh, d)
        } else {
            b.lgg = false;
            b.pqm = true;
            if (b.cpa == a) {
                b.zgu(false);
                b.parent.pjk();
                if (b.hvx === true) {
                    b.btt = setTimeout(b.parent.vak, 200)
                }
            } else {
                if (b.cpa == c) {
                    b.pwt(true)
                }
            }
            b.parent.spt()
        }
    };
    this.stop = function() {
        clearTimeout(this.fxv);
        clearTimeout(this.spq);
        clearTimeout(this.btt);
        clearInterval(this.aou)
    };
    this.uqd = function(d) {
        this.xxm = d.lbj;
        this.nng = d.qcc;
        this.osv = d.xzr;
        this.odj.iiz("start", "#rkw", [d.start]);
        this.odj.iiz("cancel", "#rkw", [d.bxh]);
        this.odj.iiz("cmincredit", "#rkw", [d.qnb]);
        this.odj.iiz("cmaxcredit", "#rkw", [d.gfu]);
        this.odj.iiz("cmaxwin", "#rkw", [d.jbp]);
        if (this.parent.mgm === true && jyv.dwe.value44.d === true) {
            this.kgz = d.dlp
        }
    };
    this.spt = function(n, m, o, j) {
        if (!this.fam()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.odj.bke(),
            e = this.ocl,
            l = this.uef;
        if (this.qdu) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.ocl);
            e.addColorStop(1, this.qdu)
        }
        if (this.kof) {
            if (this.usr === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.usr === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.usr === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.usr === "left") {
                l.addColorStop(1, this.uef);
                l.addColorStop(0, this.kof)
            } else {
                if (this.usr === "center" || this.usr === "right") {
                    l.addColorStop(0, this.uef);
                    l.addColorStop(1, this.kof)
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
        jyv.oot.mkc(p, 0, 0, this.width, this.height, this.ycb, this.rrl, this.rrl, this.ycb, e, 1, l, this.ujn, 1);
        jyv.oot.pyl(p, this.hwk.x, this.hwk.y, this.hwk.width, this.hwk.height, this.cjk, this.aof, this.loi, this.ujn / 2);
        jyv.oot.pyl(p, this.dbn.x, this.dbn.y, this.dbn.width, this.dbn.height, this.cjk, this.aof, this.loi, this.ujn / 2);
        jyv.oot.cpn(p, this.xxm, this.iaw, this.epx.x, this.epx.y, this.epx.width, this.epx.height, this.shb, this.tws, this.iuq);
        jyv.oot.dbf(p, this.kgz, this.gyy, this.hqd.x, this.hqd.y, this.hqd.width, this.hqd.height, this.shb, this.cmd, this.iuq, "center", true);
        jyv.oot.lop(p, this.nng, this.gyy, this.yuq.x, this.yuq.y, this.yuq.width, this.yuq.height, this.shb, this.cmd, this.iuq, 0);
        jyv.oot.cpn(p, this.osv, this.gyy, this.jeu.x, this.jeu.y, this.jeu.width, this.jeu.height, this.shb, this.cmd, this.iuq);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].spt()
        }
        p.restore();
        if (this.lub && this.tgs) {
            if (this.lgg) {
                if (this.gww > 0) {
                    if (this.usr === "left") {
                        this.lub.drawImage(this.tgs, this.width - this.gww, 0, this.gww, this.height, this.x, this.y, this.gww, this.height)
                    } else {
                        if (this.usr === "right") {
                            this.lub.drawImage(this.tgs, 0, 0, this.gww, this.height, this.x + this.width - this.gww, this.y, this.gww, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.lub.drawImage(this.tgs, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.lub.drawImage(this.tgs, this.x, this.y)
                }
            }
        }
    };
    this.uyq = function() {
        b.parent.spt();
        if (b.xrm[b.her] <= 0) {
            return
        }
        if (b.gfc === false) {
            b.spq = setTimeout(b.parent.pjk, 400);
            b.btt = setTimeout(b.parent.vak, 500)
        } else {
            b.lgg = true;
            b.hvx = true;
            b.spq = setTimeout(b.qhb, 400)
        }
    };
    this.jxk = function() {
        b.parent.spt();
        b.xag = true;
        if (b.gfc === false) {
            b.spq = setTimeout(b.parent.pjk, 400)
        } else {
            b.lgg = true;
            b.spq = setTimeout(b.qhb, 400)
        }
    };
    this.qvd = function() {
        b.her = (b.her < b.xrm.length - 1) ? b.her + 1 : 0;
        b.parent.nej.ddz("step0");
        b.odj.iiz("gamesd", "#rkw", [(b.xrm[b.her] > 0) ? b.xrm[b.her] : "---"]);
        b.parent.spt();
        return (b.her >= b.xrm.length - 1)
    };
    this.ucf = function() {
        b.her = (b.her > 0) ? b.her - 1 : b.xrm.length - 1;
        b.parent.nej.ddz("step0");
        b.odj.iiz("gamesd", "#rkw", [(b.xrm[b.her] > 0) ? b.xrm[b.her] : "---"]);
        b.parent.spt();
        return (b.her <= 0)
    };
    this.fhs = function() {
        var d = b.odj.drl("cmincredit") == null || b.odj.iiz("cmincredit", "#yop");
        if (d === true) {
            if (++b.rpm > 10) {
                b.qon = 10
            }
            b.dog = (b.dog + (b.aqi * b.qon) <= b.parent.eqm) ? b.dog + (b.aqi * b.qon) : b.parent.eqm;
            b.parent.nej.ddz("step0");
            b.odj.iiz("mincreditd", "#rkw", [(b.dog > 0) ? b.parent.sac(b.dog) : "---"]);
            b.odj.iiz("mmincredit", "#zgu", [d && b.dog < b.parent.eqm]);
            b.odj.iiz("lmincredit", "#zgu", [d && b.dog > 0]);
            b.parent.spt();
            return (b.dog >= b.parent.eqm)
        }
        return true
    };
    this.ida = function() {
        var d = b.odj.drl("cmincredit") == null || b.odj.iiz("cmincredit", "#yop");
        if (d === true) {
            if (++b.rpm > 10) {
                b.qon = 10
            }
            b.dog = (b.dog - (b.aqi * b.qon) > 0) ? b.dog - (b.aqi * b.qon) : 0;
            b.parent.nej.ddz("step0");
            b.odj.iiz("mincreditd", "#rkw", [(b.dog > 0) ? b.parent.sac(b.dog) : "---"]);
            b.odj.iiz("mmincredit", "#zgu", [d && b.dog < b.parent.eqm]);
            b.odj.iiz("lmincredit", "#zgu", [d && b.dog > 0]);
            b.parent.spt();
            return (b.dog >= b.parent.eqm || b.dog <= 0)
        }
        return true
    };
    this.fgi = function() {
        var d = b.odj.drl("cmaxcredit") == null || b.odj.iiz("cmaxcredit", "#yop");
        if (d === true) {
            if (++b.rpm > 10) {
                b.qon = 10
            }
            b.daf = (b.daf + (b.efj * b.qon) > 0) ? b.daf + (b.efj * b.qon) : 0;
            b.parent.nej.ddz("step0");
            b.odj.iiz("maxcreditd", "#rkw", [(b.daf > 0) ? b.parent.sac(b.daf) : "---"]);
            b.odj.iiz("lmaxcredit", "#zgu", [d && b.daf > b.parent.eqm]);
            b.parent.spt();
            return (b.daf <= b.parent.eqm)
        }
        return true
    };
    this.ftr = function() {
        var d = b.odj.drl("cmaxcredit") == null || b.odj.iiz("cmaxcredit", "#yop");
        if (d === true) {
            if (++b.rpm > 10) {
                b.qon = 10
            }
            b.daf = (b.daf - (b.efj * b.qon) > b.parent.eqm) ? b.daf - (b.efj * b.qon) : b.parent.eqm;
            b.parent.nej.ddz("step0");
            b.odj.iiz("maxcreditd", "#rkw", [(b.daf > 0) ? b.parent.sac(b.daf) : "---"]);
            b.odj.iiz("lmaxcredit", "#zgu", [d && b.daf > b.parent.eqm]);
            b.parent.spt();
            return (b.daf <= b.parent.eqm)
        }
        return true
    };
    this.imf = function() {
        var d = b.odj.drl("cmaxwin") == null || b.odj.iiz("cmaxwin", "#yop");
        if (d === true) {
            if (++b.rpm > 10) {
                b.qon = 10
            }
            b.nmw = (b.nmw + (b.efj * b.qon) > 0) ? b.nmw + (b.efj * b.qon) : 0;
            b.parent.nej.ddz("step0");
            b.odj.iiz("maxwind", "#rkw", [(b.nmw > 0) ? b.parent.sac(b.nmw) : "---"]);
            b.odj.iiz("lmaxwin", "#zgu", [d && b.nmw > b.efj]);
            b.parent.spt();
            return (b.nmw <= b.efj)
        }
        return true
    };
    this.wrj = function() {
        var d = b.odj.drl("cmaxwin") == null || b.odj.iiz("cmaxwin", "#yop");
        if (d === true) {
            if (++b.rpm > 10) {
                b.qon = 10
            }
            b.nmw = (b.nmw - (b.efj * b.qon) > 0) ? b.nmw - (b.efj * b.qon) : b.efj;
            b.parent.nej.ddz("step0");
            b.odj.iiz("maxwind", "#rkw", [(b.nmw > 0) ? b.parent.sac(b.nmw) : "---"]);
            b.odj.iiz("lmaxwin", "#zgu", [d && b.nmw > b.efj]);
            b.parent.spt();
            return (b.nmw <= b.efj)
        }
        return true
    };
    this.atp = function() {
        var d = b.odj.drl("cmincredit") == null || b.odj.iiz("cmincredit", "#yop");
        b.dog = b.parent.eqm;
        b.odj.iiz("mincreditd", "#rkw", [(d === true && b.dog > 0) ? b.parent.sac(b.dog) : "---"]);
        b.odj.iiz("lmincredit", "#zgu", [d]);
        b.odj.iiz("mmincredit", "#zgu", [d && b.dog < b.parent.eqm]);
        b.parent.spt()
    };
    this.mmn = function() {
        var d = b.odj.drl("cmaxcredit") == null || b.odj.iiz("cmaxcredit", "#yop");
        b.daf = b.parent.eqm;
        b.odj.iiz("maxcreditd", "#rkw", [(d === true && b.daf > 0) ? b.parent.sac(b.daf) : "---"]);
        b.odj.iiz("lmaxcredit", "#zgu", [d && b.daf > b.parent.eqm]);
        b.odj.iiz("mmaxcredit", "#zgu", [d]);
        b.parent.spt()
    };
    this.wee = function() {
        var d = b.odj.drl("cmaxwin") == null || b.odj.iiz("cmaxwin", "#yop");
        if (b.nmw === 0) {
            b.nmw = b.efj
        }
        b.odj.iiz("maxwind", "#rkw", [(d === true && b.nmw > 0) ? b.parent.sac(b.nmw) : "---"]);
        b.odj.iiz("lmaxwin", "#zgu", [d && b.nmw > b.efj]);
        b.odj.iiz("mmaxwin", "#zgu", [d]);
        b.parent.spt()
    }
}
yew.prototype = new srr;

function ezo() {
    this.tac = "right";
    this.jcw = "left";
    this.jjd = null;
    this.rvs = null;
    this.xxm = null;
    this.qch = -1;
    this.wjg = -1;
    this.pqm = true;
    this.wja = false;
    this.tlt = false;
    this.lgg = false;
    this.hua = 0;
    this.skb = 0;
    this.soo = [];
    this.mli = 0;
    this.kuz = 0;
    this.ohz = 1;
    this.yxs = 0;
    this.gdy = 0;
    this.usr = this.tac;
    this.shb = null;
    this.iuq = "bold";
    this.gyy = "rgb(255,255,255)";
    this.ocl = "rgb(0,0,0)";
    this.igc = "rgb(0,0,0)";
    this.dqe = "rgb(0,0,0)";
    this.bvs = 0.7;
    this.qea = null;
    this.nge = null;
    this.aqj = null;
    this.ycg = new kyc();
    this.iep = new kyc();
    this.edh = new kyc();
    this.epx = new kyc();
    this.ujn = 2;
    this.kbg = 5;
    this.qdr = 4;
    this.lvi = 10;
    this.mjo = 5;
    this.xvu = 15;
    var a = 200;
    this.cnl = function(c, d, f) {
        this.soo = [];
        this.hua = (d < 0) ? 0 : d;
        this.skb = (f < 0) ? 0 : f;
        for (var e = this.hua, b = 0; e <= this.skb; e++) {
            this.soo[b++] = c[e]
        }
        this.mli = this.soo.length;
        this.yxs = this.ycg.height / this.mli
    };
    this.nxv = function(b) {
        try {
            this.xvu = b.fontSize;
            this.ujn = b.owp;
            this.kbg = b.xjw;
            this.qdr = b.ifq;
            this.lvi = b.nie;
            this.mjo = b.vjw;
            this.ycg = new kyc(b.sht.x, b.sht.y + b.kxt, b.sht.width, b.sht.height - 2 * b.kxt);
            this.iep = new kyc(b.sht.x, b.sht.y, b.sht.width, b.kxt);
            this.edh = new kyc(b.sht.x, b.sht.y + b.sht.height - b.kxt, b.sht.width, b.kxt);
            this.epx = b.otm
        } catch (c) {
            console.error(c)
        }
    };
    this.gds = function(b) {
        try {
            this.shb = b.font;
            this.iuq = b.hfp;
            this.gyy = b.vfn;
            this.ocl = b.backgroundColor;
            this.igc = b.suh;
            this.dqe = b.sdx;
            this.bvs = b.szv;
            this.nge = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.nge.addColorStop(0, b.gua);
            this.nge.addColorStop(1, b.mzx);
            this.qea = this.context2D.createLinearGradient(this.ycg.x, 0, this.ycg.x + this.ycg.width, 0);
            this.aqj = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.usr === this.tac) {
                this.qea.addColorStop(0, b.guq);
                this.qea.addColorStop(1, b.oio);
                this.aqj.addColorStop(0, b.dmk);
                this.aqj.addColorStop(1, b.lzf)
            } else {
                if (this.usr === this.jcw) {
                    this.qea.addColorStop(0, b.oio);
                    this.qea.addColorStop(1, b.guq);
                    this.aqj.addColorStop(0, b.lzf);
                    this.aqj.addColorStop(1, b.dmk)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.itu = function(b, f, c) {
        if (this.lgg || !this.pqm || this.tlt) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.edh.aha(e, d)) {
                this.fko(-1);
                this.ddz();
                this.bco(true, true)
            } else {
                if (this.iep.aha(e, d)) {
                    this.fko(1);
                    this.ddz();
                    this.bco(true, true)
                } else {
                    if (this.ycg.aha(e, d)) {
                        this.wja = true;
                        this.ejm(f);
                        this.bco(true, true)
                    }
                }
            }
            this.fyd(this.kuz);
            return true
        }
    };
    this.hlp = function() {
        if (this.wja) {
            this.wja = false;
            this.ddz();
            return true
        }
        return false
    };
    this.ykf = function(b) {
        if (this.lgg || !this.pqm || this.tlt) {
            return true
        }
        if (b == this.wjg) {
            this.fko(-1);
            this.ddz();
            this.bco(true, true);
            this.fyd(this.kuz);
            return true
        } else {
            if (b == this.qch) {
                this.fko(1);
                this.ddz();
                this.bco(true, true);
                this.fyd(this.kuz);
                return true
            }
        }
        return false
    };
    this.ovz = function() {};
    this.qgx = function(b, d, c) {
        if (!this.wja) {
            return false
        }
        if (b >= this.x + this.ycg.x && b <= this.x + this.ycg.x + this.ycg.width && d >= this.y + this.ycg.y && d <= this.y + this.ycg.y + this.ycg.height) {
            this.ejm(d);
            this.fyd(this.kuz);
            return true
        }
        return false
    };
    this.bco = function(b, c) {
        this.tlt = b;
        c = (c === false) ? false : true;
        clearTimeout(this.eul);
        if (this.tlt === true && c === true) {
            this.eul = setTimeout(this.tqe, a)
        }
    };
    this.tqe = function() {};
    this.fyd = function(b) {};
    this.ddz = function() {};
    this.qoj = function(b, c) {
        this.hua = (b < 0) ? 0 : b;
        this.skb = (c < 0) ? 0 : c;
        if (this.soo) {
            this.skb = (this.skb > this.soo.length - 1) ? this.soo.length - 1 : this.skb
        }
    };
    this.gpn = function() {
        this.zgu(true, true)
    };
    this.qhb = function() {
        this.zgu(false, true)
    };
    this.qhj = function(b) {
        this.pqm = b
    };
    this.knh = function() {
        return this.pqm
    };
    this.pxu = function(b, c) {
        this.kuz = b;
        if (this.kuz < this.hua) {
            this.kuz = this.hua
        }
        if (this.kuz >= this.skb) {
            this.kuz = this.skb
        }
        this.ohz = this.kuz + 1;
        if (c && c === true) {
            this.parent.spt()
        }
    };
    this.peu = function(d, e) {
        this.kuz = 0;
        for (var c = 0, b = this.soo.length; c < b; c++) {
            if (this.soo[c] == d) {
                this.kuz = c;
                break
            }
        }
        this.kuz = (this.kuz >= this.hua) ? this.kuz : this.hua;
        this.kuz = (this.kuz < this.skb) ? this.kuz : this.skb;
        this.ohz = this.kuz + 1;
        if (e) {
            this.parent.spt()
        }
    };
    this.ejm = function(b) {
        this.kuz = Math.ceil(((this.ycg.height) - (b - this.ycg.y - this.y)) / this.yxs) - 1;
        this.kuz = (this.kuz >= this.hua) ? this.kuz : this.hua;
        this.kuz = (this.kuz < this.skb) ? this.kuz : this.skb;
        this.ohz = this.kuz + 1;
        this.parent.spt()
    };
    this.fko = function(b) {
        this.kuz += b;
        this.kuz = (this.kuz >= this.hua) ? this.kuz : this.hua;
        this.kuz = (this.kuz < this.skb) ? this.kuz : this.skb;
        this.ohz = this.kuz + 1;
        this.parent.spt()
    };
    this.spt = function() {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        this.ahc();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.uvq, this.x, this.y)
        }
    };
    this.ahc = function() {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.mmd(b);
        this.qna(b);
        this.azi(b);
        this.qsj(b);
        this.ugs(b);
        b.restore()
    };
    this.mmd = function(b) {
        if (this.usr === this.jcw) {
            jyv.oot.mkc(b, 0, 0, this.width, this.height, this.kbg, 0, 0, this.kbg, this.ocl, 0.4, this.aqj, this.ujn, 1)
        } else {
            if (this.usr === this.tac) {
                jyv.oot.mkc(b, 0, 0, this.width, this.height, 0, this.kbg, this.kbg, 0, this.ocl, 0.4, this.aqj, this.ujn, 1)
            }
        }
    };
    this.qna = function(b) {
        jyv.oot.jbx(b, this.ycg.x, this.ycg.y, this.ycg.width, this.ycg.height, this.igc, 1)
    };
    this.azi = function(b) {
        jyv.oot.jbx(b, this.ycg.x, this.ycg.y + this.ycg.height - Math.round(this.ohz * this.yxs), this.ycg.width, Math.round(this.ohz * this.yxs), this.nge, 1)
    };
    this.qsj = function(b) {
        jyv.oot.jbx(b, this.ycg.x - this.qdr, this.ycg.y - this.qdr, this.ycg.width + 2 * this.qdr, this.ycg.height + 2 * this.qdr, null, 0, this.qea, this.qdr, 1);
        if (this.usr === this.jcw) {
            jyv.oot.mkc(b, this.ycg.x - this.qdr, this.iep.y, this.ycg.width + 2 * this.qdr, this.iep.height, this.lvi, 0, 0, 0, this.qea, 1);
            jyv.oot.mkc(b, this.ycg.x - this.qdr, this.edh.y, this.ycg.width + 2 * this.qdr, this.edh.height, 0, 0, 0, this.lvi, this.qea, 1)
        } else {
            if (this.usr === this.tac) {
                jyv.oot.mkc(b, this.ycg.x - this.qdr, this.iep.y, this.ycg.width + 2 * this.qdr, this.iep.height, 0, this.lvi, 0, 0, this.qea, 1);
                jyv.oot.mkc(b, this.ycg.x - this.qdr, this.edh.y, this.ycg.width + 2 * this.qdr, this.edh.height, 0, 0, this.lvi, 0, this.qea, 1)
            }
        }
        b.strokeStyle = this.qea;
        b.lineWidth = Math.round(this.qdr / 4);
        b.beginPath();
        for (var c = 1; c < this.mli; c++) {
            b.moveTo(this.ycg.x, this.ycg.y + this.ycg.height - Math.round(c * this.yxs));
            b.lineTo(this.ycg.x + this.ycg.width, this.ycg.y + this.ycg.height - Math.round(c * this.yxs))
        }
        b.closePath();
        b.stroke();
        if (this.jjd) {
            if (this.usr === this.jcw) {
                b.drawImage(this.jjd, 0, 0, this.jjd.width / 2, this.jjd.height, this.ycg.x, this.ycg.y, this.ycg.width, this.ycg.height)
            } else {
                if (this.usr === this.tac) {
                    b.drawImage(this.jjd, this.jjd.width / 2, 0, this.jjd.width / 2, this.jjd.height, this.ycg.x, this.ycg.y, this.ycg.width, this.ycg.height)
                }
            }
        }
    };
    this.ugs = function(c) {
        var f = this.gyy,
            e = this.gyy,
            b = 0,
            d = 0;
        if (this.usr === this.jcw) {
            b = this.mjo;
            d = this.ycg.x - 2 * this.mjo
        } else {
            if (this.usr === this.tac) {
                b = this.ycg.x + this.ycg.width + this.mjo;
                d = this.width - this.mjo - (this.ycg.x + this.ycg.width + this.mjo)
            }
        }
        if (this.kuz > 0 && this.kuz < this.soo.length - 1) {
            jyv.oot.jbx(c, b, this.ycg.y + ((this.mli - this.ohz) * this.yxs), d, this.yxs, this.dqe, this.bvs);
            jyv.oot.gnh(c, this.soo[this.kuz], this.nge, b, this.ycg.y + ((this.mli - this.ohz) * this.yxs) + (this.yxs - this.xvu) / 2, d, this.xvu, this.shb, this.xvu, this.iuq, this.mjo)
        } else {
            if (this.kuz == 0) {
                f = this.nge
            } else {
                if (this.kuz == this.soo.length - 1) {
                    e = this.nge
                }
            }
        }
        jyv.oot.jbx(c, b, this.ycg.y + (this.yxs * (this.mli - 1)), d, this.yxs, this.dqe, this.bvs);
        jyv.oot.gnh(c, this.soo[0], f, b, this.ycg.y + (this.yxs * (this.mli - 1)) + (this.yxs - this.xvu) / 2, d, this.xvu, this.shb, this.xvu, this.iuq, this.mjo);
        jyv.oot.jbx(c, b, this.ycg.y, d, this.yxs, this.dqe, this.bvs);
        jyv.oot.gnh(c, this.soo[this.soo.length - 1], e, b, this.ycg.y + (this.yxs - this.xvu) / 2, d, this.xvu, this.shb, this.xvu, this.iuq, this.mjo);
        jyv.oot.cpn(c, "+", this.gyy, this.iep.x, this.iep.y, this.iep.width, this.iep.height, this.shb, this.xvu, this.iuq);
        jyv.oot.cpn(c, "", this.gyy, this.edh.x, this.edh.y, this.edh.width, this.edh.height, this.shb, this.xvu, this.iuq);
        if (this.xxm) {
            jyv.oot.cpn(c, this.xxm, this.gyy, this.epx.x, this.epx.y, this.epx.width, this.epx.height, this.shb, this.xvu, this.iuq)
        }
    }
}
ezo.prototype = new srr;

function tet() {
    var a = this;
    this.odj = null;
    this.bfl = false;
    this.phq = "";
    this.ohj = "";
    this.kuv = "";
    this.anp = "";
    this.kgz = "";
    this.nng = "";
    this.osv = "";
    this.shb = "arial";
    this.iuq = "bold";
    this.gyy = "white";
    this.ocl = "black";
    this.qdu = null;
    this.uef = "white";
    this.kof = "rgb(150,150,150)";
    this.ujn = 3;
    this.kbg = 4;
    this.kzm = 24;
    this.adt = 24;
    this.cmd = 24;
    this.xfh = new kyc();
    this.gwv = new kyc();
    this.per = new kyc();
    this.tqk = new kyc();
    this.fmx = new kyc();
    this.znb = new kyc();
    this.qvc = new kyc();
    this.xrm = [];
    this.her = 0;
    this.aqi = 0;
    this.efj = 0;
    this.oez = 0;
    this.fbn = 0;
    this.dog = 0;
    this.daf = 0;
    this.nmw = 0;
    this.ert = false;
    this.rnf = false;
    this.kuz = 0;
    this.qoy = true;
    this.tfo = true;
    this.owi = null;
    this.aou = 0;
    this.rpm = 0;
    this.qon = 1;
    this.ypb = 250;
    this.lya = function(b, d, c) {
        tet.prototype.lya.call(this, b, d, c);
        this.odj = new chu();
        this.odj.lya();
        this.odj.mwi("buttons");
        this.odj.mwi("displays");
        this.odj.mwi("checkboxes");
        this.odj.mwi("lbuttons");
        this.odj.mwi("mbuttons");
        this.odj.mwi("tbuttons");
        this.odj.mwi("bbuttons");
        this.odj.mwi("bdisplays");
        this.odj.mwi("abuttons");
        this.odj.mwi("adisplays");
        this.odj.mwi("acheckboxes");
        this.odj.mwi("sbuttons");
        this.odj.mwi("hbuttons")
    };
    this.dgs = function(b) {
        try {
            this.esp(b);
            this.moe(b);
            this.wws(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.gds = function(b) {
        try {
            var c = this.odj.ovp("lbuttons"),
                n = this.odj.ovp("mbuttons"),
                k = this.odj.ovp("tbuttons"),
                m = this.odj.ovp("sbuttons"),
                l = this.odj.ovp("hbuttons"),
                f = this.odj.ovp("displays");
            this.shb = b.font;
            this.iuq = b.hfp;
            this.gyy = b.vfn;
            this.ocl = b.backgroundColor;
            this.qdu = b.our;
            this.uef = b.borderColor;
            this.kof = b.jdr;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].gds(b.zlf)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].gds(b.hvh)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].gds(b.jqh)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].gds(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].gds(b.fso)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].gds(b.fso)
            }
            this.odj.hlg("checkboxes", "#gds", [b.sur])
        } catch (j) {
            console.error(j)
        }
    };
    this.nxv = function(g) {
        try {
            var b = this.odj.ovp("lbuttons"),
                o = this.odj.ovp("mbuttons"),
                l = this.odj.ovp("tbuttons"),
                n = this.odj.ovp("sbuttons"),
                m = this.odj.ovp("hbuttons"),
                c = this.odj.ovp("bdisplays"),
                f = this.odj.ovp("adisplays");
            ahq = this.odj.ovp("checkboxes"), bkc = n.length, hky = (bkc <= 2) ? g.vtw : (bkc <= 3) ? g.mvp : (bkc <= 4) ? g.ano : g.jrd, bkc = m.length, lgw = (bkc <= 2) ? g.vtw : (bkc <= 3) ? g.mvp : (bkc <= 4) ? g.ano : g.jrd, cdh = (this.parent.rap() != null) ? g.xhj : g.ywj;
            this.ujn = g.owp;
            this.kbg = g.xjw;
            this.kzm = g.tia;
            this.adt = g.vwz;
            this.cmd = g.swf;
            this.xfh = g.kcv;
            this.gwv = g.izy;
            this.per = g.luk;
            this.tqk = g.twt;
            this.fmx = g.ecl;
            this.znb = g.chc;
            this.qvc = g.api;
            this.odj.iiz("bett", "#dho", [cdh.kkb]);
            this.odj.iiz("autot", "#dho", [cdh.rie]);
            this.odj.iiz("helpt", "#dho", [cdh.fwp]);
            this.odj.iiz("settingt", "#dho", [cdh.igf]);
            this.odj.iiz("returnt", "#dho", [cdh.jnc]);
            this.odj.iiz("lbet", "#dho", [g.okc]);
            this.odj.iiz("mbet", "#dho", [g.bos]);
            this.odj.iiz("llines", "#dho", [g.hmd]);
            this.odj.iiz("mlines", "#dho", [g.dsj]);
            this.odj.iiz("betd", "#dho", [g.bnb]);
            this.odj.iiz("linesd", "#dho", [g.olq]);
            this.odj.iiz("totald", "#dho", [g.ekx]);
            this.odj.iiz("lgames", "#dho", [g.zgq]);
            this.odj.iiz("mgames", "#dho", [g.apv]);
            this.odj.iiz("lmincredit", "#dho", [g.ipt]);
            this.odj.iiz("mmincredit", "#dho", [g.gxu]);
            this.odj.iiz("lmaxcredit", "#dho", [g.gqg]);
            this.odj.iiz("mmaxcredit", "#dho", [g.uwl]);
            this.odj.iiz("lmaxwin", "#dho", [g.bhe]);
            this.odj.iiz("mmaxwin", "#dho", [g.omf]);
            this.odj.iiz("gamesd", "#dho", [g.dit]);
            this.odj.iiz("mincreditd", "#dho", [g.zvk]);
            this.odj.iiz("maxcreditd", "#dho", [g.pws]);
            this.odj.iiz("maxwind", "#dho", [g.emf]);
            this.odj.iiz("cmincredit", "#dho", [g.hni]);
            this.odj.iiz("cmaxcredit", "#dho", [g.rny]);
            this.odj.iiz("cmaxwin", "#dho", [g.zvb]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].nxv(g.zlf)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].nxv(g.hvh)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].nxv(g.jqh)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].nxv(g.cud)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].nxv(g.fnz)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].nxv(g.fso)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].nxv(g.fso)
            }
            for (var d = 0, j = ahq.length; d < j; d++) {
                ahq[d].nxv(g.sur)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].dho(hky[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].dho(lgw[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.esp = function(c) {
        var b = (this.parent.rap() != null) ? c.xhj : c.ywj;
        this.odj.wvv("bett", this.wlc(b.kkb, null, this.parent.nej.pvr("btn_b"), this.cyv, null), ["buttons", "tbuttons"]);
        if (this.parent.rap() != null) {
            this.odj.wvv("autot", this.wlc(b.rie, null, this.parent.nej.pvr("btn_as"), this.rru, null), ["buttons", "tbuttons"])
        }
        this.odj.wvv("helpt", this.wlc(b.fwp, null, this.parent.nej.pvr("btn_i"), this.afq, null), ["buttons", "tbuttons"]);
        this.odj.wvv("settingt", this.wlc(b.igf, null, this.parent.nej.pvr("btn_se"), this.kdn, null), ["buttons", "tbuttons"]);
        this.odj.wvv("returnt", this.wlc(b.jnc, null, this.parent.nej.pvr("btn_c"), this.ngw, null), ["buttons", "tbuttons"])
    };
    this.moe = function(b) {
        this.odj.wvv("betd", this.rlh(b.bnb, null, this.parent.jpl), ["displays", "bdisplays"]);
        this.odj.wvv("lbet", this.sja(b.okc, "", this.parent.gla), ["buttons", "lbuttons", "bbuttons"]);
        this.odj.wvv("mbet", this.sja(b.bos, "+", this.parent.xps), ["buttons", "mbuttons", "bbuttons"]);
        this.odj.wvv("linesd", this.rlh(b.olq, null, this.parent.bao), ["displays", "bdisplays"]);
        if (this.bfl) {
            this.odj.wvv("llines", this.sja(b.hmd, "", this.parent.ksw), ["buttons", "lbuttons", "bbuttons"]);
            this.odj.wvv("mlines", this.sja(b.dsj, "+", this.parent.yuu), ["buttons", "mbuttons", "bbuttons"])
        }
        this.odj.wvv("totald", this.rlh(b.ekx, null, this.parent.bdt()), ["displays", "bdisplays"])
    };
    this.wws = function(b) {
        this.odj.wvv("gamesd", this.rlh(b.dit, null, this.xrm[this.her]), ["displays", "adisplays"]);
        this.odj.wvv("lgames", this.sja(b.zgq, "", this.ucf), ["buttons", "lbuttons", "abuttons"]);
        this.odj.wvv("mgames", this.sja(b.apv, "+", this.qvd), ["buttons", "mbuttons", "abuttons"]);
        this.odj.wvv("mincreditd", this.rlh(b.zvk, null, "---"), ["displays", "adisplays"]);
        this.odj.wvv("lmincredit", this.sja(b.ipt, "", this.ida), ["buttons", "lbuttons", "abuttons"]);
        this.odj.wvv("mmincredit", this.sja(b.gxu, "+", this.fhs), ["buttons", "mbuttons", "abuttons"]);
        this.odj.wvv("maxcreditd", this.rlh(b.pws, null, "---"), ["displays", "adisplays"]);
        this.odj.wvv("lmaxcredit", this.sja(b.gqg, "", this.ftr), ["buttons", "lbuttons", "abuttons"]);
        this.odj.wvv("mmaxcredit", this.sja(b.uwl, "+", this.fgi), ["buttons", "mbuttons", "abuttons"]);
        this.odj.wvv("maxwind", this.rlh(b.emf, null, "---"), ["displays", "adisplays"]);
        this.odj.wvv("lmaxwin", this.sja(b.bhe, "", this.wrj), ["buttons", "lbuttons", "abuttons"]);
        this.odj.wvv("mmaxwin", this.sja(b.omf, "+", this.imf), ["buttons", "mbuttons", "abuttons"]);
        this.odj.wvv("cmincredit", this.fkb(b.hni, "", this.atp), ["checkboxes", "acheckboxes"]);
        this.odj.wvv("cmaxcredit", this.fkb(b.rny, "", this.mmn), ["checkboxes", "acheckboxes"]);
        this.odj.wvv("cmaxwin", this.fkb(b.zvb, "", this.wee), ["checkboxes", "acheckboxes"])
    };
    this.ahs = function(i, g, f, e, d, b) {
        var c = new nhk();
        c.lya(new kyc(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.fyd = e;
        c.abq = g;
        c.yqo(d, b);
        c.nxv(this.parent.bxp.voz.fso);
        c.gds(this.parent.style.voz.fso);
        c.psd(f);
        this.odj.wvv(i, c, ["buttons", "sbuttons"])
    };
    this.mdb = function(f, e, d, c) {
        var b = new nhk();
        b.lya(new kyc(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.fyd = c;
        b.abq = e;
        b.nxv(this.parent.bxp.voz.fso);
        b.gds(this.parent.style.voz.fso);
        b.psd(d);
        this.odj.wvv(f, b, ["buttons", "hbuttons"])
    };
    this.rlh = function(b, e, d) {
        var c = new faq();
        c.lya(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.sja = function(c, e, d) {
        var b = new vtg();
        b.lya(c, this.context2D, null, null, e);
        b.parent = this;
        b.fyd = d;
        return b
    };
    this.wlc = function(d, g, f, e, c) {
        var b = new vtg();
        b.lya(d, this.context2D, null, f, g);
        b.parent = this;
        b.fyd = e;
        if (c != null) {
            b.lfi = c
        }
        return b
    };
    this.fkb = function(c, e, d) {
        var b = new eqo();
        b.lya(c, this.context2D, null, e);
        b.parent = this;
        b.fyd = d;
        return b
    };
    this.itu = function(o, n) {
        var m = this.odj.ovp("buttons"),
            g = this.odj.ovp("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.fam() === true) {
                if (b.knh() === true && b.gpy() === false) {
                    if (b instanceof nhk) {
                        this.parent.nej.ckk("btn");
                        this.parent.nej.ddz("btn");
                        b.xgo(true, true, true);
                        b.fyd()
                    } else {
                        if (b instanceof vtg) {
                            if (b.znm() === "rect") {
                                this.parent.nej.ckk("btn");
                                this.parent.nej.ddz("btn");
                                b.xgo(true, true, false);
                                b.fyd()
                            } else {
                                b.xgo(true, false, false);
                                this.rpm = 0;
                                this.qon = 1;
                                if (b.fyd() === false) {
                                    this.owi = function() {
                                        if (b.fyd() === true) {
                                            clearInterval(a.aou);
                                            b.xgo(false, true);
                                            for (var i = 0; i < l; i++) {
                                                m[i].bco(false)
                                            }
                                        }
                                    };
                                    this.aou = setInterval(this.owi, this.ypb)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].bco(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.fam() === true && k.knh() === true) {
                    k.yzl(!k.yop(), true);
                    k.fyd();
                    for (var c = 0; c < l; c++) {
                        g[c].bco(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.hlp = function() {
        var e = this.odj.ovp("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.wlo() == true && !(c instanceof vtg && c.znm() === "rect")) {
                clearInterval(this.aou);
                c.xgo(false, true);
                return true
            }
        }
        return false
    };
    this.ykf = function(b) {};
    this.ovz = function(b) {};
    this.rxq = function(c, b, d) {
        this.odj.iiz("betd", "#rkw", [c]);
        this.odj.iiz("linesd", "#rkw", [b]);
        this.odj.iiz("totald", "#rkw", [d]);
        this.parent.spt()
    };
    this.uru = function(b) {
        this.xrm = b.g;
        this.aqi = b.v;
        this.efj = b.v;
        this.ert = b.r;
        this.rnf = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.oez = b.m;
            this.fbn = b.m
        }
    };
    this.ndo = function() {
        if (this.ert === true) {
            this.dog = this.parent.eqm;
            this.daf = this.parent.eqm;
            this.her = 0;
            this.nmw = 0
        }
    };
    this.njl = function() {
        if (this.xrm.length > 0 && this.her >= 0) {
            return this.xrm[this.her]
        }
        return 0
    };
    this.ews = function() {
        var b = this.odj.drl("cmincredit") == null || this.odj.iiz("cmincredit", "#yop");
        if (this.dog > 0 && b === true) {
            return this.dog
        }
        return 0
    };
    this.etc = function() {
        var b = this.odj.drl("cmaxcredit") == null || this.odj.iiz("cmaxcredit", "#yop");
        if (this.daf > 0 && b === true) {
            return this.daf
        }
        return 0
    };
    this.sxg = function() {
        var b = this.odj.drl("cmaxwin") == null || this.odj.iiz("cmaxwin", "#yop");
        if (this.nmw > 0 && b === true) {
            return this.nmw
        }
        return 0
    };
    this.gpn = function(c, f, d) {
        if (this.xrm && this.xrm.length > 0) {
            var g = this.odj.drl("cmincredit") == null || this.odj.iiz("cmincredit", "#yop"),
                e = this.odj.drl("cmaxcredit") == null || this.odj.iiz("cmaxcredit", "#yop"),
                b = this.odj.drl("cmaxwin") == null || this.odj.iiz("cmaxwin", "#yop");
            if (this.ert === true) {
                g = this.rnf;
                e = false;
                b = false;
                this.ndo()
            } else {
                if (this.rnf === true) {
                    g = true;
                    this.dog = (this.dog < this.parent.eqm) ? this.dog : this.parent.eqm;
                    this.dog = (this.dog > 0) ? this.dog : this.parent.eqm
                } else {
                    g = (this.dog < this.parent.eqm) ? g : false;
                    this.dog = (this.dog < this.parent.eqm) ? this.dog : this.parent.eqm
                }
                e = (this.daf > this.parent.eqm) ? e : false;
                this.daf = (this.daf > this.parent.eqm) ? this.daf : this.parent.eqm
            }
            this.odj.iiz("cmincredit", "#yzl", [g]);
            this.odj.iiz("cmaxcredit", "#yzl", [e]);
            this.odj.iiz("cmaxwin", "#yzl", [b]);
            this.odj.iiz("gamesd", "#rkw", [(this.xrm[this.her] > 0) ? this.xrm[this.her] : "---"]);
            this.odj.iiz("mincreditd", "#rkw", [(g === true && this.dog > 0) ? this.parent.sac(this.dog) : "---"]);
            this.odj.iiz("maxcreditd", "#rkw", [(e === true && this.daf > 0) ? this.parent.sac(this.daf) : "---"]);
            this.odj.iiz("maxwind", "#rkw", [(b === true && this.nmw > 0) ? this.parent.sac(this.nmw) : "---"]);
            this.odj.iiz("lmincredit", "#zgu", [g]);
            this.odj.iiz("mmincredit", "#zgu", [g]);
            this.odj.iiz("lmaxcredit", "#zgu", [e]);
            this.odj.iiz("mmaxcredit", "#zgu", [e]);
            this.odj.iiz("lmaxwin", "#zgu", [b]);
            this.odj.iiz("mmaxwin", "#zgu", [b])
        }
        this.qoy = c;
        this.tfo = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.cyv()
            } else {
                if (d === 1) {
                    if (this.parent.rap() != null) {
                        this.rru()
                    } else {
                        this.afq()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.rap() != null) {
                            this.afq()
                        } else {
                            this.kdn()
                        }
                    } else {
                        if (d === 3 && this.parent.rap() != null) {
                            this.kdn()
                        }
                    }
                }
            }
        } else {
            this.cyv()
        }
        this.odj.hlg("tbuttons", "#qhj", [true]);
        this.zgu(true);
        this.parent.spt()
    };
    this.qhb = function() {
        this.odj.hlg("tbuttons", "#qhj", [false]);
        this.odj.hlg("bbuttons", "#qhj", [false]);
        this.odj.hlg("sbuttons", "#qhj", [false]);
        this.odj.hlg("abuttons", "#qhj", [false]);
        this.odj.hlg("acheckboxes", "#qhj", [false]);
        this.zgu(false);
        this.parent.spt()
    };
    this.stop = function() {
        clearInterval(this.aou)
    };
    this.uqd = function(d, b) {
        var c = "";
        this.odj.iiz("language", "#rkw", [jyv.dcm.sqv(d.language)]);
        this.odj.iiz("audio", "#rkw", [jyv.dcm.sqv(d.audio)]);
        this.odj.iiz("melody", "#rkw", [jyv.dcm.sqv(d.itd)]);
        this.odj.iiz("fullscreen", "#rkw", [jyv.dcm.sqv(d.aqq)]);
        this.odj.iiz("turbo", "#rkw", [jyv.dcm.sqv(d.ukl)]);
        this.odj.iiz("help", "#rkw", [jyv.dcm.sqv(d.gdk)]);
        this.odj.iiz("history", "#rkw", [jyv.dcm.sqv(d.dac)]);
        this.odj.iiz("statistic", "#rkw", [jyv.dcm.sqv(d.iyc)]);
        this.odj.iiz("rules", "#rkw", [jyv.dcm.sqv(d.xma)]);
        this.odj.iiz("gamble", "#rkw", [jyv.dcm.sqv(d.qwj)]);
        if (jyv.dcm.log[jyv.dcm.dmj] === jyv.lcb.jcw) {
            c = jyv.dcm.sqv(d.left)
        } else {
            if (jyv.dcm.log[jyv.dcm.dmj] === jyv.lcb.tac) {
                c = jyv.dcm.sqv(d.pfn)
            } else {
                if (jyv.dcm.log[jyv.dcm.dmj] === jyv.lcb.uqg) {
                    c = jyv.dcm.sqv(d.tgi)
                }
            }
        }
        this.odj.iiz("adjustment", "#rkw", [c]);
        if (b && b === true) {
            this.phq = jyv.dcm.sqv(d.ssy) + "/" + jyv.dcm.sqv(d.cuu) + ":";
            this.ohj = jyv.dcm.sqv(d.bao) + ":"
        } else {
            this.phq = jyv.dcm.sqv(d.ssy) + ":"
        }
        this.kuv = jyv.dcm.sqv(d.qkw) + ":";
        this.nng = jyv.dcm.sqv(d.qcc);
        this.osv = jyv.dcm.sqv(d.xzr);
        if (this.parent.mgm === true && jyv.dwe.value44.d === true) {
            this.kgz = jyv.dcm.sqv(d.dlp)
        }
        this.odj.iiz("cmincredit", "#rkw", [jyv.dcm.sqv(d.qnb)]);
        this.odj.iiz("cmaxcredit", "#rkw", [jyv.dcm.sqv(d.gfu)]);
        this.odj.iiz("cmaxwin", "#rkw", [jyv.dcm.sqv(d.jbp)])
    };
    this.spt = function(l, j, m, e) {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.odj.ovp("tbuttons"),
            b = this.ocl,
            g = this.uef;
        if (this.qdu) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.ocl);
            b.addColorStop(1, this.qdu)
        }
        if (this.kof) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.uef);
            g.addColorStop(1, this.kof)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        jyv.oot.pyl(n, 0, 0, this.width, this.height, this.kbg, b, g, this.ujn);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].spt()
        }
        if (this.kuz === 0) {
            this.kdt(n)
        } else {
            if (this.kuz === 1) {
                this.dgo(n)
            } else {
                if (this.kuz === 2) {
                    this.pla(n)
                } else {
                    if (this.kuz === 3) {
                        this.kwx(n)
                    }
                }
            }
        }
        n.restore();
        if (this.lub && this.tgs) {
            if (c) {
                this.lub.drawImage(this.tgs, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.lub.drawImage(this.tgs, this.x, this.y)
            }
        }
    };
    this.kdt = function(c) {
        var f = this.odj.ovp("bbuttons"),
            d = this.odj.ovp("bdisplays");
        if (this.xfh.width > 0 && this.xfh.height > 0) {
            jyv.oot.lop(c, this.phq, this.gyy, this.xfh.x, this.xfh.y, this.xfh.width, this.xfh.height, this.shb, this.kzm, this.iuq, 0)
        }
        if (this.gwv.width > 0 && this.gwv.height > 0) {
            jyv.oot.lop(c, this.ohj, this.gyy, this.gwv.x, this.gwv.y, this.gwv.width, this.gwv.height, this.shb, this.kzm, this.iuq, 0)
        }
        if (this.per.width > 0 && this.per.height > 0) {
            jyv.oot.lop(c, this.kuv, this.gyy, this.per.x, this.per.y, this.per.width, this.per.height, this.shb, this.kzm, this.iuq, 0)
        }
        jyv.oot.dbf(c, this.anp, this.gyy, this.tqk.x, this.tqk.y, this.tqk.width, this.tqk.height, this.shb, this.cmd, this.iuq, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].spt()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].spt()
        }
    };
    this.dgo = function(c) {
        var f = this.odj.ovp("abuttons"),
            d = this.odj.ovp("adisplays"),
            g = this.odj.ovp("acheckboxes");
        jyv.oot.dbf(c, this.kgz, this.gyy, this.fmx.x, this.fmx.y, this.fmx.width, this.fmx.height, this.shb, this.cmd, this.iuq, "center", true);
        jyv.oot.lop(c, this.nng, this.gyy, this.znb.x, this.znb.y, this.znb.width, this.znb.height, this.shb, this.adt, this.iuq, 0);
        jyv.oot.cpn(c, this.osv, this.gyy, this.qvc.x, this.qvc.y, this.qvc.width, this.qvc.height, this.shb, this.adt, this.iuq);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].spt()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].spt()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].spt()
        }
    };
    this.pla = function(c) {
        var d = this.odj.ovp("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].spt()
        }
    };
    this.kwx = function(c) {
        var d = this.odj.ovp("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].spt()
        }
    };
    this.qvd = function() {
        a.her = (a.her < a.xrm.length - 1) ? a.her + 1 : 0;
        a.parent.nej.ddz("btn");
        a.odj.iiz("gamesd", "#rkw", [(a.xrm[a.her] > 0) ? a.xrm[a.her] : "---"]);
        a.spt();
        return (a.her >= a.xrm.length - 1)
    };
    this.ucf = function() {
        a.her = (a.her > 0) ? a.her - 1 : a.xrm.length - 1;
        a.parent.nej.ddz("btn");
        a.odj.iiz("gamesd", "#rkw", [(a.xrm[a.her] > 0) ? a.xrm[a.her] : "---"]);
        a.spt();
        return (a.her <= 0)
    };
    this.fhs = function() {
        var b = a.odj.drl("cmincredit") == null || a.odj.iiz("cmincredit", "#yop");
        if (b === true) {
            if (++a.rpm > 10) {
                a.qon = 10
            }
            a.dog = (a.dog + (a.aqi * a.qon) <= a.parent.eqm) ? a.dog + (a.aqi * a.qon) : a.parent.eqm;
            a.parent.nej.ddz("btn");
            a.odj.iiz("mincreditd", "#rkw", [(a.dog > 0) ? a.parent.sac(a.dog) : "---"]);
            a.odj.iiz("mmincredit", "#zgu", [b && a.dog < a.parent.eqm]);
            a.odj.iiz("lmincredit", "#zgu", [b && a.dog > 0]);
            a.spt();
            return (a.dog >= a.parent.eqm)
        }
        return true
    };
    this.ida = function() {
        var b = a.odj.drl("cmincredit") == null || a.odj.iiz("cmincredit", "#yop");
        if (b === true) {
            if (++a.rpm > 10) {
                a.qon = 10
            }
            a.dog = (a.dog - (a.aqi * a.qon) > 0) ? a.dog - (a.aqi * a.qon) : 0;
            a.parent.nej.ddz("btn");
            a.odj.iiz("mincreditd", "#rkw", [(a.dog > 0) ? a.parent.sac(a.dog) : "---"]);
            a.odj.iiz("mmincredit", "#zgu", [b && a.dog < a.parent.eqm]);
            a.odj.iiz("lmincredit", "#zgu", [b && a.dog > 0]);
            a.spt();
            return (a.dog >= a.parent.eqm || a.dog <= 0)
        }
        return true
    };
    this.fgi = function() {
        var b = a.odj.drl("cmaxcredit") == null || a.odj.iiz("cmaxcredit", "#yop");
        if (b === true) {
            if (++a.rpm > 10) {
                a.qon = 10
            }
            a.daf = (a.daf + (a.efj * a.qon) > 0) ? a.daf + (a.efj * a.qon) : 0;
            a.parent.nej.ddz("btn");
            a.odj.iiz("maxcreditd", "#rkw", [(a.daf > 0) ? a.parent.sac(a.daf) : "---"]);
            a.odj.iiz("lmaxcredit", "#zgu", [b && a.daf > a.parent.eqm]);
            a.spt();
            return (a.daf <= a.parent.eqm)
        }
        return true
    };
    this.ftr = function() {
        var b = a.odj.drl("cmaxcredit") == null || a.odj.iiz("cmaxcredit", "#yop");
        if (b === true) {
            if (++a.rpm > 10) {
                a.qon = 10
            }
            a.daf = (a.daf - (a.efj * a.qon) > a.parent.eqm) ? a.daf - (a.efj * a.qon) : a.parent.eqm;
            a.parent.nej.ddz("btn");
            a.odj.iiz("maxcreditd", "#rkw", [(a.daf > 0) ? a.parent.sac(a.daf) : "---"]);
            a.odj.iiz("lmaxcredit", "#zgu", [b && a.daf > a.parent.eqm]);
            a.spt();
            return (a.daf <= a.parent.eqm)
        }
        return true
    };
    this.imf = function() {
        var b = a.odj.drl("cmaxwin") == null || a.odj.iiz("cmaxwin", "#yop");
        if (b === true) {
            if (++a.rpm > 10) {
                a.qon = 10
            }
            a.nmw = (a.nmw + (a.efj * a.qon) > 0) ? a.nmw + (a.efj * a.qon) : 0;
            a.parent.nej.ddz("btn");
            a.odj.iiz("maxwind", "#rkw", [(a.nmw > 0) ? a.parent.sac(a.nmw) : "---"]);
            a.odj.iiz("lmaxwin", "#zgu", [b && a.nmw > a.efj]);
            a.spt();
            return (a.nmw <= a.efj)
        }
        return true
    };
    this.wrj = function() {
        var b = a.odj.drl("cmaxwin") == null || a.odj.iiz("cmaxwin", "#yop");
        if (b === true) {
            if (++a.rpm > 10) {
                a.qon = 10
            }
            a.nmw = (a.nmw - (a.efj * a.qon) > 0) ? a.nmw - (a.efj * a.qon) : a.efj;
            a.parent.nej.ddz("btn");
            a.odj.iiz("maxwind", "#rkw", [(a.nmw > 0) ? a.parent.sac(a.nmw) : "---"]);
            a.odj.iiz("lmaxwin", "#zgu", [b && a.nmw > a.efj]);
            a.spt();
            return (a.nmw <= a.efj)
        }
        return true
    };
    this.atp = function() {
        var b = a.odj.drl("cmincredit") == null || a.odj.iiz("cmincredit", "#yop");
        a.dog = a.parent.eqm;
        a.odj.iiz("mincreditd", "#rkw", [(b === true && a.dog > 0) ? a.parent.sac(a.dog) : "---"]);
        a.odj.iiz("lmincredit", "#zgu", [b]);
        a.odj.iiz("mmincredit", "#zgu", [b && a.dog < a.parent.eqm]);
        a.spt()
    };
    this.mmn = function() {
        var b = a.odj.drl("cmaxcredit") == null || a.odj.iiz("cmaxcredit", "#yop");
        a.daf = a.parent.eqm;
        a.odj.iiz("maxcreditd", "#rkw", [(b === true && a.daf > 0) ? a.parent.sac(a.daf) : "---"]);
        a.odj.iiz("lmaxcredit", "#zgu", [b && a.daf > a.parent.eqm]);
        a.odj.iiz("mmaxcredit", "#zgu", [b]);
        a.spt()
    };
    this.wee = function() {
        var b = a.odj.drl("cmaxwin") == null || a.odj.iiz("cmaxwin", "#yop");
        if (a.nmw === 0) {
            a.nmw = a.efj
        }
        a.odj.iiz("maxwind", "#rkw", [(b === true && a.nmw > 0) ? a.parent.sac(a.nmw) : "---"]);
        a.odj.iiz("lmaxwin", "#zgu", [b && a.nmw > a.efj]);
        a.odj.iiz("mmaxwin", "#zgu", [b]);
        a.spt()
    };
    this.cyv = function() {
        a.kuz = 0;
        a.odj.iiz("bett", "#xgo", [true, false, false]);
        a.odj.iiz("autot", "#xgo", [false, false, false]);
        a.odj.iiz("helpt", "#xgo", [false, false, false]);
        a.odj.iiz("settingt", "#xgo", [false, false, false]);
        a.odj.iiz("returnt", "#xgo", [false, false, false]);
        a.odj.hlg("bbuttons", "#qhj", [a.qoy]);
        a.odj.hlg("bbuttons", "#zgu", [a.qoy]);
        a.odj.hlg("abuttons", "#qhj", [false]);
        a.odj.hlg("acheckboxes", "#qhj", [false]);
        a.odj.hlg("hbuttons", "#qhj", [false]);
        a.odj.hlg("sbuttons", "#qhj", [false]);
        a.spt()
    };
    this.rru = function() {
        var d = a.odj.drl("cmincredit") == null || a.odj.iiz("cmincredit", "#yop"),
            c = a.odj.drl("cmaxcredit") == null || a.odj.iiz("cmaxcredit", "#yop"),
            b = a.odj.drl("cmaxwin") == null || a.odj.iiz("cmaxwin", "#yop");
        a.kuz = 1;
        a.aqi = (a.oez > 0) ? a.parent.bdt() * a.oez : a.aqi;
        a.efj = (a.fbn > 0) ? a.parent.bdt() * a.fbn : a.efj;
        a.odj.iiz("bett", "#xgo", [false, false, false]);
        a.odj.iiz("autot", "#xgo", [true, false, false]);
        a.odj.iiz("helpt", "#xgo", [false, false, false]);
        a.odj.iiz("settingt", "#xgo", [false, false, false]);
        a.odj.iiz("returnt", "#xgo", [false, false, false]);
        a.odj.hlg("bbuttons", "#qhj", [false]);
        a.odj.hlg("abuttons", "#qhj", [true]);
        a.odj.iiz("mmincredit", "#zgu", [d && a.dog < a.parent.eqm]);
        a.odj.iiz("lmaxcredit", "#zgu", [c && a.daf > a.parent.eqm]);
        a.odj.iiz("lmaxwin", "#zgu", [b && a.nmw > a.efj]);
        a.odj.hlg("acheckboxes", "#qhj", [true]);
        a.odj.hlg("hbuttons", "#qhj", [false]);
        a.odj.hlg("sbuttons", "#qhj", [false]);
        if (a.rnf === true) {
            a.odj.iiz("cmincredit", "#qhj", [false])
        }
        a.spt()
    };
    this.afq = function() {
        a.kuz = 2;
        a.odj.iiz("bett", "#xgo", [false, false, false]);
        a.odj.iiz("autot", "#xgo", [false, false, false]);
        a.odj.iiz("helpt", "#xgo", [true, false, false]);
        a.odj.iiz("settingt", "#xgo", [false, false, false]);
        a.odj.iiz("returnt", "#xgo", [false, false, false]);
        a.odj.hlg("bbuttons", "#qhj", [false]);
        a.odj.hlg("abuttons", "#qhj", [false]);
        a.odj.hlg("acheckboxes", "#qhj", [false]);
        a.odj.hlg("hbuttons", "#qhj", [true]);
        a.odj.hlg("sbuttons", "#qhj", [false]);
        a.spt()
    };
    this.kdn = function() {
        a.kuz = 3;
        a.odj.iiz("bett", "#xgo", [false, false, false]);
        a.odj.iiz("autot", "#xgo", [false, false, false]);
        a.odj.iiz("helpt", "#xgo", [false, false, false]);
        a.odj.iiz("settingt", "#xgo", [true, false, false]);
        a.odj.iiz("returnt", "#xgo", [false, false, false]);
        a.odj.hlg("bbuttons", "#qhj", [false]);
        a.odj.hlg("abuttons", "#qhj", [false]);
        a.odj.hlg("acheckboxes", "#qhj", [false]);
        a.odj.hlg("hbuttons", "#qhj", [false]);
        a.odj.hlg("sbuttons", "#qhj", [true]);
        a.odj.iiz("gamble", "#qhj", [a.tfo]);
        a.spt()
    };
    this.ngw = function() {
        a.parent.aeq();
        a.odj.iiz("returnt", "#xgo", [false, false, false])
    }
}
tet.prototype = new srr;

function szl() {
    var a = this;
    this.shb = null;
    this.iuq = "bold";
    this.ocl = "rgb(0,0,0)";
    this.qdu = null;
    this.gyy = "rgb(255,255,255)";
    this.kof = null;
    this.uef = "rgb(60,60,60)";
    this.jmc = null;
    this.bgg = null;
    this.pqm = false;
    this.fgk = [];
    this.jhm = [];
    this.apa = null;
    this.ygr = 19;
    this.eep = 15;
    this.usp = 120;
    this.ojy = 2;
    this.gvk = 2;
    this.wns = 2;
    this.ctz = 10;
    this.xvu = 12;
    this.lya = function(b, d, c) {
        szl.prototype.lya.call(this, b, d, c)
    };
    this.nxv = function(b) {
        try {
            this.xvu = b.fontSize;
            this.ygr = b.nbn;
            this.eep = b.sjs;
            this.usp = b.rjc;
            this.ojy = b.eha;
            this.gvk = b.gtq;
            this.wns = b.kol;
            this.ctz = b.mit
        } catch (c) {
            console.error(c)
        }
    };
    this.gds = function(b) {
        try {
            this.shb = b.font;
            this.iuq = b.hfp;
            this.ocl = b.backgroundColor;
            this.qdu = b.our;
            this.gyy = b.vfn;
            this.uef = b.borderColor;
            this.kof = b.jdr;
            if (this.qdu) {
                this.jmc = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.jmc.addColorStop(0, this.qdu);
                this.jmc.addColorStop(0.5, this.ocl)
            } else {
                this.jmc = this.ocl
            }
            if (this.kof) {
                this.bgg = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.bgg.addColorStop(0, this.kof);
                this.bgg.addColorStop(1, this.uef)
            } else {
                this.bgg = this.uef
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.itu = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.ctz : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.knh()) {
            this.parent.cxd();
            return true
        }
        return false
    };
    this.bpe = function(d, b, c) {
        this.jhm.push({
            id: d,
            xqj: b,
            value: c,
            ndt: null
        })
    };
    this.dgr = function(e, c, d, b) {
        this.jhm.push({
            id: e,
            xqj: c,
            value: d,
            ndt: b
        })
    };
    this.sdk = function(d, b, c) {
        this.fgk.push({
            id: d,
            kmz: b,
            value: c
        })
    };
    this.jox = function(e, d) {
        for (var c = 0, b = this.jhm.length; c < b; c++) {
            if (this.jhm[c].id == e) {
                this.jhm[c].value = d;
                return true
            }
        }
        return false
    };
    this.izk = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.drb = function(e, d) {
        for (var c = 0, b = this.fgk.length; c < b; c++) {
            if (this.fgk[c].id == e) {
                if (this.fgk[c].value != d) {
                    this.fgk[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.ppk = function(b) {
        this.apa = b
    };
    this.qhj = function(b) {
        this.pqm = b
    };
    this.knh = function(b) {
        return this.pqm
    };
    this.fos = function(c, b) {
        if (this.jox(c, b)) {
            window.jtr(a.spt)
        }
    };
    this.ezy = function(c, b) {
        if (this.drb(c, b)) {
            window.jtr(a.spt)
        }
    };
    this.puf = function(b) {
        this.ppk(b);
        window.jtr(a.spt)
    };
    this.spt = function() {
        if (!a.fam() || !a.parent.dmt()) {
            return
        }
        var e = (a.height - a.xvu) / 2 + a.gvk,
            c = a.ojy + a.ygr * a.jhm.length,
            d = a.width - c - (a.usp * a.fgk.length),
            b = a.context2D;
        b.save();
        jyv.oot.jbx(b, 0, 0, a.width, a.height, a.jmc, 1);
        a.uob(b, e);
        a.fdt(b, e);
        if (a.apa && a.apa != "") {
            jyv.oot.cpn(b, a.apa, a.gyy, c, e, d, a.xvu, a.shb, a.xvu, a.iuq)
        } else {
            if (a.knh()) {
                a.qyb(b)
            }
        }
        a.ijc(b, 0, a.height - a.wns / 2, a.width, a.height - a.wns / 2);
        b.restore();
        if (a.lub && a.tgs) {
            a.lub.drawImage(a.tgs, a.x, a.y)
        }
    };
    this.uob = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.jhm.length; f < b; f++) {
            if (this.jhm[f].ndt) {
                var e = this.izk(this.jhm[f].ndt, this.jhm[f].value);
                if (this.jhm[f].xqj instanceof Array) {
                    jyv.oot.cpn(d, this.jhm[f].xqj[e], this.gyy, c, g, this.ygr, this.xvu, this.shb, this.xvu, this.iuq)
                } else {
                    if (this.jhm[f].xqj instanceof Image || this.jhm[f].xqj instanceof HTMLCanvasElement) {
                        d.drawImage(this.jhm[f].xqj, e * this.eep, 0, this.eep, this.jhm[f].xqj.height, c + this.ojy, g - this.gvk, this.ygr - 2 * this.ojy, this.xvu)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.jhm[f].value == true) ? 1 : 0.3;
                if (this.jhm[f].xqj instanceof String) {
                    jyv.oot.cpn(d, this.jhm[f].xqj, this.gyy, c, g, this.ygr, this.xvu, this.shb, this.xvu, this.iuq)
                } else {
                    if (this.jhm[f].xqj instanceof Image || this.jhm[f].xqj instanceof HTMLCanvasElement) {
                        d.drawImage(this.jhm[f].xqj, c + this.ojy, g - this.gvk, this.ygr - 2 * this.ojy, this.xvu)
                    }
                }
                d.restore()
            }
            c += this.ygr;
            this.ijc(d, c, 0, c, this.height)
        }
        return c
    };
    this.fdt = function(d, f) {
        var c = this.width - this.ojy - this.usp * this.fgk.length;
        for (var e = 0, b = this.fgk.length; e < b; e++) {
            if (this.fgk[e].id == "freeplay") {
                jyv.oot.jbx(d, c, 0, this.usp, this.height, "red", 0.4)
            } else {
                if (this.fgk[e].id == "freespin") {
                    jyv.oot.jbx(d, c, 0, this.usp, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.ijc(d, c, 0, c, this.height);
            jyv.oot.cpn(d, this.fgk[e].kmz + this.fgk[e].value, this.gyy, c, f, this.usp, this.xvu, this.shb, this.xvu, this.iuq);
            c += this.usp
        }
    };
    this.ijc = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.bgg;
        b.lineWidth = this.wns;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.qyb = function(c) {
        if (this.parent.cwl.drl("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.wns,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.wns;
        c.save();
        c.strokeStyle = this.uef;
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
szl.prototype = new srr;

function mpg() {
    var b = this;
    var c = 0;
    var a = 1;
    this.eek = 7;
    this.vtu = 89;
    this.ivw = 10000;
    this.odj = null;
    this.pqm = false;
    this.lgg = false;
    this.djt = -1;
    this.fxv = 0;
    this.shb = null;
    this.iuq = "bold";
    this.ocl = "black";
    this.bwv = null;
    this.mnu = null;
    this.aqj = null;
    this.gyy = "white";
    this.xdu = 0.8;
    this.aqg = 0;
    this.vrn = 0;
    this.bsh = 0;
    this.cpa = 0;
    this.gdu = 0;
    this.exb = 0;
    this.xwh = 0;
    this.ojy = 10;
    this.gvk = 5;
    this.vbn = 10;
    this.jzx = this.ojy;
    this.mfa = 10;
    this.fbd = 20;
    this.qyo = 40;
    this.ujn = 4;
    this.xvu = 10;
    this.jno = null;
    this.bcu = null;
    this.ius = "";
    this.inr = null;
    this.lya = function(d, f, e) {
        mpg.prototype.lya.call(this, d, f, e);
        this.odj = new chu();
        this.odj.lya();
        this.odj.mwi("buttons");
        this.odj.mwi("system");
        this.odj.mwi("setting")
    };
    this.nxv = function(d) {
        try {
            this.xvu = d.fontSize;
            this.mfa = d.vjg;
            this.fbd = d.tsw;
            this.qyo = d.ads;
            this.ujn = d.owp;
            this.ojy = d.eha;
            this.gvk = d.gtq;
            this.vbn = d.xrg
        } catch (f) {
            console.error(f)
        }
    };
    this.gds = function(g, m) {
        try {
            var k = this.odj.ovp("buttons"),
                j = (m === true) ? g.qkk.wqt : g.jen.wqt;
            this.shb = g.font;
            this.iuq = g.hfp;
            this.ocl = g.backgroundColor;
            this.bwv = g.ynr;
            this.mnu = g.uoa;
            this.gyy = g.vfn;
            this.xdu = g.czq;
            if (this.bwv && this.mnu) {
                this.aqj = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.aqj.addColorStop(0, this.bwv);
                this.aqj.addColorStop(0.5, this.mnu);
                this.aqj.addColorStop(1, this.bwv)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].gds(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.itu = function(p, o) {
        var n = this.odj.bke(),
            q = this.odj.drl("audio"),
            r = this.odj.drl("language"),
            f = this.odj.drl("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.lgg) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.fam()) {
                if (g.knh() && !g.gpy()) {
                    if (g != q && g != r) {
                        this.parent.nej.ckk("btn");
                        this.parent.nej.ddz("btn")
                    }
                    g.xgo(true, true, false);
                    g.fyd();
                    for (var k = 0; k < m; k++) {
                        n[k].bco(true)
                    }
                    if (g != f) {
                        if (this.djt >= 0) {
                            clearTimeout(this.djt);
                            this.djt = -1
                        }
                        this.djt = setTimeout(this.evo, this.ivw)
                    }
                }
                return true
            }
        }
        if (this.fam() && this.knh()) {
            if (p < this.x + this.gdu || p > this.x + this.gdu + this.exb || o < this.y || o > this.y + this.height) {
                if (this.djt >= 0) {
                    clearTimeout(this.djt);
                    this.djt = -1
                }
                return false
            }
        }
        return true
    };
    this.hlp = function() {
        var g = this.odj.bke();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.wlo() == true) {
                e.xgo(false, true);
                return true
            }
        }
        return false
    };
    this.ykf = function(e) {
        var o = this.odj.bke(),
            d = this.odj.ovp("system"),
            m = this.odj.ovp("setting"),
            q = this.odj.drl("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.lgg) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.lfi || e == f.rkx) && !f.gpy()) {
                if (f != q) {
                    this.parent.nej.ckk("btn");
                    this.parent.nej.ddz("btn")
                }
                f.xgo(true, true, false);
                f.fyd();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].bco(true)
                }
                if (this.djt >= 0) {
                    clearTimeout(this.djt);
                    this.djt = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.lfi || e == f.rkx) && f.knh() && !f.gpy()) {
                if (f != q) {
                    this.parent.nej.ckk("btn");
                    this.parent.nej.ddz("btn")
                }
                f.xgo(true, true, false);
                f.fyd();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].bco(true)
                }
                if (this.djt >= 0) {
                    clearTimeout(this.djt);
                    this.djt = -1
                }
                return true
            }
        }
        if (this.fam() && this.knh()) {
            if (this.parent.sbz) {
                for (l = 0, n = this.parent.sbz.ucx.length; l < n; l++) {
                    var p = this.parent.sbz.ucx[l];
                    if (p.xbc == e || p.xbc == e) {
                        if (this.djt >= 0) {
                            clearTimeout(this.djt);
                            this.djt = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.ovz = function() {
        var g = this.odj.bke();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.wlo() == true) {
                e.xgo(false, true, false);
                return true
            }
        }
        return false
    };
    this.qgx = function(e, m) {
        var k = this.odj.bke(),
            l = e - this.x,
            j = m - this.y;
        this.bcu = this.jno;
        this.jno = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.fam() && f.knh() && !f.gpy()) {
                this.jno = f
            }
        }
        if (this.jno) {
            this.wrq(true)
        } else {
            this.wrq(false)
        }
        return true
    };
    this.ahs = function(e, f, g, i, l, d, m) {
        this.xwh = g.width;
        var k = new kyc(this.jzx, this.gvk, this.xwh, this.xwh);
        var j = new nhk();
        j.lya(k, this.context2D);
        j.parent = this;
        j.fyd = i;
        j.hyp = f;
        j.yqo(d, m);
        j.nxv(this.parent.bxp.rjp.wgs);
        j.gds(this.parent.style.rjp.jen.wqt);
        j.psd(g);
        if (l != null) {
            j.rkx = l.swt;
            j.lfi = l.xbc;
            j.cnr = l.value
        }
        this.odj.wvv(e, j, ["buttons", "setting"]);
        this.jzx += this.xwh + this.ojy;
        this.exb = this.jzx
    };
    this.zlo = function(k, j, i, g, e) {
        this.xwh = i.width;
        var f = new kyc(this.jzx, this.gvk, this.xwh, this.xwh);
        var d = new nhk();
        d.lya(f, this.context2D);
        d.parent = this;
        d.fyd = g;
        d.hyp = j;
        d.nxv(this.parent.bxp.rjp.wgs);
        d.gds(this.parent.style.rjp.jen.wqt);
        d.psd(i);
        if (e != null) {
            d.rkx = e.swt;
            d.lfi = e.xbc;
            d.cnr = e.value
        }
        this.odj.wvv(k, d, ["buttons", "system"]);
        this.jzx += this.xwh + this.ojy;
        this.exb = this.jzx
    };
    this.yxf = function() {
        var f = this.odj.bke();
        this.exb += 2 * this.vbn;
        this.gdu = Math.round((this.width - this.exb) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.gdu + this.vbn
        }
    };
    this.hfo = function() {
        return this.exb
    };
    this.qhj = function(d) {
        this.pqm = d
    };
    this.knh = function() {
        return this.pqm
    };
    this.pwt = function(g) {
        var f = this.odj.bke();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].qhj(g)
        }
        this.parent.spt()
    };
    this.yhy = function(g) {
        var f = this.odj.ovp("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].qhj(g)
        }
        this.parent.spt()
    };
    this.zno = function(g) {
        var f = this.odj.ovp("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].qhj(g)
        }
        this.parent.spt()
    };
    this.gpn = function() {
        if (this.fam()) {
            return
        }
        if (this.lgg) {
            if (this.cpa === a) {
                this.inr = this.gpn
            } else {
                this.inr = null
            }
        } else {
            this.inr = null;
            this.tvx();
            this.ers()
        }
    };
    this.ebt = function(d) {
        if (this.parent.jvl) {
            this.parent.jvl()
        }
        this.stop();
        this.lgg = false;
        this.inr = null;
        this.zgu(true, d);
        if (this.djt >= 0) {
            clearTimeout(this.djt);
            this.djt = -1
        }
        this.djt = setTimeout(this.evo, this.ivw)
    };
    this.evo = function() {
        if (b.fam()) {
            b.parent.nej.ckk("panel_out");
            b.parent.nej.ddz("panel_out");
            b.qhb()
        }
    };
    this.qhb = function() {
        if (!this.fam()) {
            return
        }
        if (this.lgg) {
            if (this.cpa === c) {
                this.inr = this.qhb
            } else {
                this.inr = null
            }
        } else {
            this.inr = null;
            this.uqk();
            this.ers();
            if (this.djt >= 0) {
                clearTimeout(this.djt);
                this.djt = -1
            }
        }
    };
    this.qqk = function(d) {
        if (this.parent.eke) {
            this.parent.eke()
        }
        this.stop();
        this.lgg = false;
        this.inr = null;
        this.zgu(false, d);
        if (typeof this.lup === "function") {
            this.lup();
            this.lup = null
        }
    };
    this.tvx = function() {
        this.zgu(true);
        this.lgg = true;
        this.pqm = false;
        this.cpa = c;
        this.aqg = Math.floor(this.height / this.eek);
        this.bsh = 1;
        this.vrn = Math.floor(this.height / this.eek)
    };
    this.uqk = function() {
        if (this.parent.eke) {
            this.parent.eke()
        }
        this.lgg = true;
        this.pqm = false;
        this.cpa = a;
        this.aqg = -Math.floor(this.height / this.eek);
        this.bsh = 1;
        this.vrn = this.height
    };
    this.ers = function() {
        this.fxv = setInterval(this.gfc, this.vtu)
    };
    this.qlw = function() {
        if (b.cpa == c) {
            if (b.parent.jvl) {
                b.parent.jvl()
            }
            if (b.djt >= 0) {
                clearTimeout(b.djt);
                b.djt = -1
            }
            b.djt = setTimeout(b.evo, b.ivw)
        }
        clearInterval(b.fxv);
        if (b.inr) {
            b.inr()
        }
    };
    this.stop = function() {
        clearTimeout(this.djt);
        clearInterval(this.fxv);
        this.djt = -1
    };
    this.gfc = function() {
        if (!b.yfh()) {
            b.qlw()
        }
    };
    this.yfh = function() {
        if (b.bsh < b.eek) {
            b.parent.spt(b.x, b.y, b.width, b.height);
            b.vrn += b.aqg;
            b.bsh++;
            return true
        } else {
            b.lgg = false;
            b.pqm = true;
            if (b.cpa == a) {
                b.zgu(false);
                if (typeof b.lup === "function") {
                    b.lup();
                    b.lup = null
                }
            }
            b.parent.spt(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.spt = function(n, m, o, g) {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.odj.bke(),
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
        this.zlb(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].spt()
        }
        if (this.jno && this.ius != "") {
            k = this.jno.x - this.ojy - this.xwh;
            d = 3 * this.xwh + 2 * this.ojy;
            if (k + d >= this.gdu + this.exb) {
                k = this.gdu + this.exb - d;
                jyv.oot.gnh(p, this.ius, this.gyy, k, this.jno.y + this.jno.height, d, this.xvu, this.shb, this.xvu, this.iuq, this.ojy)
            } else {
                jyv.oot.cpn(p, this.ius, this.gyy, k, this.jno.y + this.jno.height, d, this.xvu, this.shb, this.xvu, this.iuq)
            }
        }
        p.restore();
        if (this.lgg) {
            if (this.lub && this.tgs && this.vrn > 0) {
                this.lub.drawImage(this.tgs, 0, this.height - this.vrn, this.width, this.vrn, this.x, this.y, this.width, this.vrn)
            }
        } else {
            if (e) {
                this.parent.spt(this.x + n, this.y + m, o, g)
            } else {
                if (this.lub && this.tgs) {
                    this.lub.drawImage(this.tgs, this.x, this.y)
                }
            }
        }
    };
    this.zlb = function(d) {
        var f = this.ujn,
            e = f / 2;
        d.save();
        d.strokeStyle = this.aqj;
        d.fillStyle = this.ocl;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.mfa, this.mfa + e, this.mfa, this.mfa);
        d.arcTo(this.gdu, this.mfa, this.gdu, this.height - this.fbd - e, this.qyo);
        d.arcTo(this.gdu, this.height - e, this.gdu + this.fbd, this.height - e, this.fbd);
        d.lineTo(this.gdu + this.exb - this.fbd, this.height - e);
        d.arcTo(this.gdu + this.exb, this.height - e, this.gdu + this.exb, this.height - this.fbd - e, this.fbd);
        d.arcTo(this.gdu + this.exb, this.mfa, this.width - this.mfa - e, this.mfa, this.qyo);
        d.arcTo(this.width - e, this.mfa, this.width - e, 0, this.mfa);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.xdu;
        d.fill();
        d.restore()
    };
    this.wrq = function(d) {
        if (this.jno && this.jno != this.bcu) {
            if (d && this.jno) {
                this.ius = this.parent.sqv(this.jno.hyp);
                if (!jyv.oot.zqh) {
                    this.ius = (this.jno.cnr) ? this.ius + " [" + this.jno.cnr + "]" : this.ius
                }
            } else {
                this.ius = ""
            }
            this.parent.spt(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.jno && this.ius != this.parent.sqv(this.jno.hyp))) {
                this.ius = this.parent.sqv(this.jno.hyp);
                if (!jyv.oot.zqh) {
                    this.ius = (this.jno.cnr) ? this.ius + " [" + this.jno.cnr + "]" : this.ius
                }
            }
            this.parent.spt(this.x, this.y, this.width, this.height)
        }
    };
    this.lup = null
}
mpg.prototype = new srr;

function lzk() {
    var a = this;
    this.hbd = "LOADING ... ";
    this.wvu = "ERROR";
    this.vff = null;
    this.uav = null;
    this.omu = false;
    this.hki = false;
    this.tjy = true;
    this.fyd = null;
    this.snm = null;
    this.col = null;
    this.fxv = 0;
    this.mzv = 0;
    this.vad = false;
    this.kot = 0;
    this.vwv = 60;
    this.yxs = 0;
    this.shb = "arial";
    this.iuq = "bold";
    this.pel = "black";
    this.ujc = "rgb(0,100,10)";
    this.jhr = "rgb(80,255,100)";
    this.tqn = "rgb(120,120,120)";
    this.ngo = "red";
    this.slo = "white";
    this.gyy = "yellow";
    this.xvu = 14;
    this.tuy = 18;
    this.hqv = 20;
    this.hqd;
    this.oqq;
    this.htu;
    this.iua;
    this.vbn = 5;
    this.ojy = 12;
    this.gvk = 5;
    this.usx = 2;
    this.zgz = new kyc();
    this.zcl = new kyc();
    this.qvq = [];
    this.mxw = 0;
    this.jvv = 20;
    this.lya = function(b, d, c) {
        lzk.prototype.lya.call(this, b, d, c);
        this.snm = document.createElement("canvas");
        this.col = this.snm.getContext("2d")
    };
    this.nxv = function(b) {
        try {
            this.xvu = b.fontSize;
            this.tuy = b.arq;
            this.hqv = b.gqn;
            this.vbn = b.xrg;
            this.ojy = b.eha;
            this.gvk = b.gtq;
            this.usx = b.fru;
            this.hqd = b.ecl;
            this.oqq = b.uud;
            this.htu = b.hle;
            this.iua = b.wix;
            this.zgz = b.cua;
            if (this.zcl.width > 0 && this.zcl.height) {
                this.asd()
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.gds = function(b) {
        try {
            this.shb = b.font;
            this.iuq = b.hfp;
            this.pel = b.backgroundColor;
            this.ujc = b.fuo;
            this.jhr = b.bzd;
            this.tqn = b.pwf;
            this.ngo = b.uzm;
            this.slo = b.rkb;
            this.gyy = b.vfn;
            this.uav = b.uav
        } catch (c) {
            console.error(c)
        }
    };
    this.itu = function(b, e) {
        var d = b - this.x,
            c = e - this.y;
        if (d >= this.zcl.x && d <= this.zcl.x + this.zcl.width && c >= this.zcl.y && c <= this.zcl.y + this.zcl.height) {
            this.fyd();
            return true
        }
        return false
    };
    this.spt = function(b) {
        if (b && b >= 0) {
            this.mzv = b
        }
        if (!this.fam()) {
            return
        }
        if (jyv.dwe.value45 == jyv.kqm.qji) {
            this.lgq()
        } else {
            if (jyv.dwe.value45 == jyv.kqm.zqw) {
                this.tzw()
            }
        }
    };
    this.lgq = function() {
        if (this.omu) {
            var c = this.context2D,
                b = this.htu.width / 100;
            c.save();
            if (this.hki === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.nej.pvr("splash"), 0, 0, this.width, this.height);
            if (this.uav) {
                jyv.oot.jbx(c, this.vbn, this.vbn, this.width - 2 * this.vbn, this.height - 2 * this.vbn, this.uav, 0.3)
            }
            if (this.vff != null && this.vff != "") {
                this.skm(this.iua, true)
            } else {
                if (this.vad) {
                    jyv.oot.jbx(c, this.zgz.x, this.zgz.y, this.zgz.width, this.zgz.height, this.pel, 0.7);
                    c.drawImage(this.snm, this.zgz.x + this.zgz.width * (1 - this.qvq[this.mxw]) / 2, this.zgz.y + this.zgz.height * (1 - this.qvq[this.mxw]) / 2, this.zgz.width * this.qvq[this.mxw], this.zgz.height * this.qvq[this.mxw])
                } else {
                    if (this.tjy === true) {
                        if (this.hki === false) {
                            jyv.oot.jbx(c, this.hqd.x, this.hqd.y, this.hqd.width, this.hqd.height, this.pel, 0.7)
                        }
                        var e = this.hbd + " " + this.mzv + "%";
                        var d = c.createLinearGradient(this.htu.x, this.htu.y, this.htu.x + this.htu.width, this.htu.y);
                        d.addColorStop(0, this.ujc);
                        d.addColorStop(1, this.jhr);
                        jyv.oot.cpn(c, e, this.slo, this.oqq.x, this.oqq.y, this.oqq.width, this.oqq.height, this.shb, this.xvu, this.iuq);
                        jyv.oot.exj(c, this.htu.x - this.usx, this.htu.y, this.htu.width + 2 * this.usx, this.htu.height, this.usx, this.pel, 0.8, this.tqn, this.usx, 0.8);
                        jyv.oot.jbx(c, this.htu.x, this.htu.y + this.usx / 2, b * this.mzv, this.htu.height - this.usx, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.tzw = function() {
        if (this.omu) {
            var c = this.context2D,
                b = this.htu.width / 100;
            c.save();
            if (this.hki === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.nej.pvr("splash"), 0, 0, this.width, this.height);
            if (this.vff != null && this.vff != "") {
                this.skm(this.iua, true)
            } else {
                if (this.vad) {
                    c.drawImage(this.parent.nej.pvr("continue"), this.zgz.x, this.zgz.y, this.zgz.width, this.zgz.height);
                    c.drawImage(this.snm, this.zgz.x + this.zgz.width * (1 - this.qvq[this.mxw]) / 2, this.zgz.y + this.zgz.height * (1 - this.qvq[this.mxw]) / 2, this.zgz.width * this.qvq[this.mxw], this.zgz.height * this.qvq[this.mxw])
                } else {
                    if (this.tjy === true) {
                        jyv.oot.jbx(c, this.htu.x, this.htu.y, this.htu.width, this.htu.height, "rgb(0,0,0)", 0.5);
                        jyv.oot.jbx(c, this.htu.x, this.htu.y, b * this.mzv, this.htu.height, "rgb(0,250,0)", 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.skm = function(c, m) {
        var l = this.context2D,
            o = [],
            d = this.xvu,
            k = this.vff,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.tuy * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.iuq + " " + d + "px " + this.shb;
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
                    if (u >= c.width - 2 * this.ojy) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.gvk)) {
            w = (c.height - j - this.gvk) / b;
            d = Math.round(d * w) - 1;
            l.font = this.iuq + " " + d + "px " + this.shb;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.iuq + " " + d + "px " + this.shb;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.gvk));
            c.height = j + b + this.gvk;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            jyv.oot.jbx(l, c.x, c.y, c.width, c.height, this.pel, 0.7)
        }
        if (this.wvu != null) {
            l.font = this.iuq + " " + this.tuy + "px " + this.shb;
            l.fillStyle = this.ngo;
            l.textBaseline = "bottom";
            l.fillText(this.wvu, c.x + c.width / 2, c.y + this.tuy + this.gvk)
        }
        l.font = this.iuq + " " + d + "px " + this.shb;
        l.fillStyle = this.slo;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.ojy), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.lgs = function() {
        return (this.vad)
    };
    this.cec = function() {
        for (var b = 0; b < this.jvv; b++) {
            this.qvq[b] = 1 - Math.sin(Math.PI * b / (this.jvv - 1)) * 0.04
        }
        this.qvq[this.jvv - 1] = 1;
        this.vad = true;
        this.mxw = 0;
        this.asd();
        this.fxv = setInterval(this.mwy, this.vwv);
        this.spt()
    };
    this.mwy = function() {
        a.spt();
        a.mxw = (a.mxw < a.jvv - 1) ? a.mxw + 1 : 0
    };
    this.stop = function() {
        this.vad = false;
        clearTimeout(this.fxv)
    };
    this.asd = function() {
        var b = this.col;
        this.zcl = this.zgz;
        this.snm.width = Math.round(this.zcl.width);
        this.snm.height = Math.round(this.zcl.height);
        b.save();
        b.clearRect(0, 0, this.snm.width, this.snm.height);
        jyv.oot.dbf(b, this.parent.language.uzi, this.gyy, 0, 0, this.snm.width, this.snm.height, this.shb, this.hqv, this.iuq, "center", true);
        b.restore()
    }
}
lzk.prototype = new srr;

function dyp() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.ojx = null;
    this.qoa = null;
    this.anw = null;
    this.pwz = null;
    this.dlg = null;
    this.oid = [];
    this.grp = 0;
    this.htd = [];
    this.bhk = [];
    this.kuz = 0;
    this.fkd = false;
    this.aik = false;
    this.lya = function() {
        this.ojx = document.getElementById("messageOverlay");
        this.qoa = document.getElementById("messagePanel");
        this.anw = document.getElementById("messageTitle");
        this.pwz = document.getElementById("messageText");
        this.dlg = document.getElementById("btne");
        if (this.dlg) {
            this.dlg.innerHTML = "\u00D7";
            this.dlg.onclick = this.qhb;
            this.dlg.ontouchend = this.qhb
        }
        for (var f = 0; f < 4; f++) {
            this.oid[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.gds = function(f) {
        try {
            this.htd = f.mqs
        } catch (g) {
            console.error(g)
        }
    };
    this.nxv = function(j) {
        try {
            if (this.qoa) {
                jyv.oot.rkp(this.qoa, j.ebf)
            }
            if (this.anw) {
                this.anw.style.fontSize = j.gbd + "px";
                jyv.oot.rkp(this.anw, j.otm)
            }
            if (this.pwz) {
                this.pwz.style.fontSize = j.uux + "px";
                jyv.oot.rkp(this.pwz, j.iyb)
            }
            if (this.dlg) {
                jyv.oot.rkp(this.dlg, j.jwb)
            }
            for (var g = 0, f = this.oid.length; g < f; g++) {
                this.oid[g].style.fontSize = j.wgs.fontSize + "px";
                this.oid[g].style.top = j.ibv.y + "px";
                this.oid[g].style.height = j.ibv.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.gpn = function(j) {
        this.bhk.length = 0;
        this.kuz = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.bhk[g] = j[g]
        }
        this.sno(this.bhk[this.kuz])
    };
    this.qhb = function() {
        if (b.qoa) {
            b.aik = false;
            b.qoa.style.display = "none";
            b.ojx.style.display = "none";
            jyv.dcm.rxb();
            jyv.dcm.oqf = false
        }
    };
    this.sno = function(l) {
        var n = this.bhk.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.vlp === jyv.eup.yqt || l.vlp === jyv.eup.iii) {
            this.grp = d;
            this.fkd = (l.DisplayType == jyv.jkz.dzb.wwh) ? true : false
        } else {
            if (l.vlp === jyv.eup.jar || l.vlp === jyv.eup.rlj || l.vlp === jyv.eup.ryc || l.vlp === jyv.eup.roulette.wxw || l.vlp === jyv.eup.roulette.tmx) {
                this.grp = a;
                this.fkd = false
            } else {
                if (l.vlp === jyv.eup.skd || l.vlp === jyv.eup.ypk) {
                    this.grp = c;
                    this.fkd = false
                } else {
                    if (l.vlp === jyv.eup.bea || l.vlp === jyv.eup.yta || l.vlp === jyv.eup.flv) {
                        this.grp = e;
                        this.fkd = false
                    }
                }
            }
        }
        if (l.Title && this.anw) {
            this.anw.style.color = this.htd[this.grp];
            this.anw.innerHTML = l.Title
        }
        if (l.Text && this.pwz) {
            this.pwz.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.oid[0].innerHTML = "\u2039";
            this.oid[0].onclick = this.lgt;
            this.oid[0].ontouchend = this.lgt;
            this.oid[0].style.display = "inline-block";
            this.oid[this.oid.length - 1].innerHTML = "\u203A";
            this.oid[this.oid.length - 1].onclick = this.ebh;
            this.oid[this.oid.length - 1].ontouchend = this.ebh;
            this.oid[this.oid.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.oid.length - 1 : this.oid.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.oid[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.oid[g].innerHTML = jyv.dcm.language.qhz
                    } else {
                        if (j == "continue") {
                            this.oid[g].innerHTML = jyv.dcm.language.uzi.replace(/ /g, "")
                        } else {
                            this.oid[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.oid[g].onclick = jyv.dcm.mnz;
                    this.oid[g].ontouchend = jyv.dcm.mnz
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.vlp === jyv.eup.yqt) {
                            this.oid[g].onclick = this.eia.bind(this, l.Buttons[k].Link);
                            this.oid[g].ontouchend = this.eia.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.vlp === jyv.eup.iii || l.vlp === jyv.eup.bea || l.vlp === jyv.eup.yta) {
                                this.oid[g].onclick = this.glp;
                                this.oid[g].ontouchend = this.glp
                            } else {
                                if (l.vlp === jyv.eup.skd || l.vlp === jyv.eup.ypk || l.vlp === jyv.eup.flv) {
                                    this.oid[g].onclick = this.miw;
                                    this.oid[g].ontouchend = this.miw
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.oid[g].onclick = jyv.dcm.jxh;
                            this.oid[g].ontouchend = jyv.dcm.jxh
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === jyv.jkz.tgk.eeg) {
                                    this.oid[g].onclick = this.ckb.bind(this, l.Buttons[k].Link);
                                    this.oid[g].ontouchend = this.ckb.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === jyv.jkz.tgk.ydf) {
                                        this.oid[g].onclick = this.eia.bind(this, l.Buttons[k].Link);
                                        this.oid[g].ontouchend = this.eia.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === jyv.jkz.tgk.snl) {
                                            this.oid[g].onclick = this.cdd.bind(this, l.Buttons[k].Link);
                                            this.oid[g].ontouchend = this.cdd.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.oid[g].style.display = "inline-block"
            } else {
                this.oid[g].style.display = "none"
            }
        }
        this.dlg.style.display = (this.fkd) ? "inline-block" : "none";
        if (this.qoa) {
            this.aik = true;
            this.qoa.style.display = "block";
            this.ojx.style.display = "block";
            jyv.dcm.rxb();
            jyv.dcm.oqf = true
        }
    };
    this.fam = function() {
        if (this.aik) {
            return true
        }
        return false
    };
    this.glp = function() {
        b.qhb();
        jyv.dcm.ghz(jyv.dcm.state)
    };
    this.eia = function(f) {
        var g = null;
        if (f) {
            g = jyv.oot.omx("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        jyv.dcm.qca({
            type: "link",
            sender: jyv.dcm.lqz,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        b.qhb();
        jyv.dcm.rjh()
    };
    this.cdd = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = jyv.oot.omx("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.oid.length; g < f; g++) {
                b.oid[g].disabled = true
            }
            k.onload = function() {
                b.qhb();
                for (var m = 0, l = b.oid.length; m < l; m++) {
                    b.oid[m].disabled = false
                }
                jyv.dcm.rjh()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.oid.length; m < l; m++) {
                    b.oid[m].disabled = false
                }
            }
        }
        jyv.dcm.qca({
            type: "link",
            sender: jyv.dcm.lqz,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        k.send()
    };
    this.miw = function() {
        window.location.reload()
    };
    this.ckb = function(f) {
        jyv.dcm.qca({
            type: "link",
            sender: jyv.dcm.lqz,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        window.location.href = f
    };
    this.lgt = function() {
        b.kuz = (b.kuz > 0) ? b.kuz - 1 : b.bhk.length - 1;
        b.sno(b.bhk[b.kuz])
    };
    this.ebh = function() {
        b.kuz = (b.kuz < b.bhk.length - 1) ? b.kuz + 1 : 0;
        b.sno(b.bhk[b.kuz])
    }
}
jyv.dwe = new Settings();
jyv.oot = new ezr();

function ydx() {
    this.tgg = "";
    this.gak = "";
    this.pzy = null;
    this.canvas = null;
    this.context2D = null;
    this.sat = null;
    this.ixm = null;
    this.thp = null;
    this.yxi = null;
    this.fhc = null;
    this.oqr = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.spv = 0;
    this.lvn = 0;
    this.sqm = false;
    this.width = 0;
    this.height = 0;
    this.bzr = 0;
    this.msw = 0;
    this.gfl = 1;
    this.ogw = 1;
    this.cqo = false;
    this.aqq = false;
    this.style = null;
    this.bxp = null;
    this.osh = -1;
    this.gsm = false;
    this.wud = false;
    this.ncu = false;
    this.hcm = false;
    this.oqf = false;
    this.kgc = false;
    this.xvs = false;
    this.uaf = false;
    this.tzd = "";
    this.chj = "";
    this.czs = "";
    this.sfq = "";
    this.znj = "";
    this.mvv = "";
    this.chv = "1_1_60";
    try {
        if (jyv.dwe.value19) {
            this.tzd = sessionStorage.sessionValue2;
            this.chj = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.czs = sessionStorage.sessionValue2
            } else {
                this.tzd = sessionStorage.sessionValue2;
                this.chj = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.czs = sessionStorage.sessionValue2
                } else {
                    this.czs = ""
                }
            }
        }
    } catch (b) {}
    this.xwo = null;
    this.fcd = null;
    this.hho = false;
    this.ruj = null;
    this.nej = null;
    this.cwl = null;
    this.exx = true;
    this.vll = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.pko = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.pko = this.vll.length - 1
                } else {
                    this.pko = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.pko = this.vll.length - 1
        }
    } catch (b) {
        this.pko = 0
    }
    this.ztr = 0;
    this.language = new ojt();
    this.mhf = 0;
    this.fyh = 1;
    this.piy = this.fyh;
    this.log = [jyv.lcb.uqg, jyv.lcb.jcw, jyv.lcb.tac];
    this.dmj = (jyv.oot.rms()) ? 0 : this.log.length - 1;
    try {
        if (localStorage.localValue1) {
            this.dmj = Number(localStorage.localValue1);
            if (!jyv.oot.rms() && this.log[this.dmj] === jyv.lcb.uqg) {
                this.dmj = this.log.length - 1
            }
        }
    } catch (b) {}
    this.vke = false;
    this.lqz = "";
    this.quh = "";
    this.zwo = 0;
    this.state = 0;
    this.unf = false;
    this.wrl = 5000;
    this.ugn = 0;
    this.cgi = 0;
    this.ayd = 0;
    this.ewl = 0;
    this.gmj = false;
    this.dnc = false;
    this.dbs = false;
    this.sbz = null;
    this.qmu = 0;
    this.kvp = 0;
    this.pwj = 0;
    this.mwj = -1;
    this.gsv = -1;
    this.xzu = 0;
    this.kwf = null;
    this.oir = [];
    this.lgx = [];
    this.gty = false;
    this.mkl = 0;
    this.bmy = 0;
    this.koc = false;

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
    this.lya = function(d) {
        this.qca({
            type: "onAppFrameReady",
            sender: this.lqz
        });
        jyv.oot.cvv();
        jyv.oot.fcb();
        this.ivm();
        if (!this.gmj) {
            this.ppu()
        }
        this.arp(this.sfd(d.bxp));
        this.gyg();
        this.btn();
        this.faf();
        this.jbg();
        this.emr();
        this.ijz();
        this.pbi();
        this.wpt();
        this.cnc();
        this.xfl();
        return this
    };
    this.faf = function() {};
    this.wpt = function() {
        try {
            if (jyv.dwe.value64 && !this.dbs) {
                this.ruj = new jvn();
                this.ruj.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.ivm = function() {
        try {
            var i = a("exit");
            if (i != "") {
                sessionStorage.sessionValue5 = i
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && jyv.dwe.value8) {
                sessionStorage.sessionValue5 = jyv.dwe.value8
            }
            var o = a("curr");
            if (o != "") {
                sessionStorage.sessionValue8 = o
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.mvv = sessionStorage.sessionValue8;
                if (jyv.dwe.value72) {
                    var m = jyv.dwe.value72[this.mvv];
                    if (jyv.dwe.value21.e === true && m) {
                        jyv.dwe.value21.s = m.s;
                        jyv.dwe.value21.m = m.m;
                        jyv.dwe.value21.ts = m.ts;
                        jyv.dwe.value21.cs = m.cs
                    }
                    if (jyv.dwe.value76 && jyv.dwe.value76.f === true && m) {
                        jyv.dwe.value76.s = m.s;
                        jyv.dwe.value76.m = m.m;
                        jyv.dwe.value76.ts = m.ts;
                        jyv.dwe.value76.cs = m.cs
                    }
                }
            }
            if (this.vtm()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.znj = sessionStorage.sessionValue7
            }
            var q = a("fullscreen");
            if (q != "") {
                sessionStorage.sessionValue14 = q
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (jyv.oot.zqh) ? jyv.dwe.value51.m : jyv.dwe.value51.d
            }
            var g = a("sessionTime");
            if (g != "") {
                sessionStorage.sessionValue15 = g
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = jyv.dwe.value11
            }
            var s = a("realityCheckURL");
            if (s != "") {
                sessionStorage.sessionValue16 = s
            }
            var n = a("realityCheckTime");
            if (n != "") {
                sessionStorage.sessionValue17 = n
            }
            if (jyv.dwe.value39 > 0) {
                sessionStorage.sessionValue17 = jyv.dwe.value39
            }
            var r = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var f = sessionStorage.sessionValue18.split(";");
                if (f.length == 2) {
                    this.mkl = Number(f[0]);
                    this.bmy = Number(f[1])
                }
            }
            if (r != "") {
                if (Number(r) != this.bmy) {
                    this.bmy = Number(r);
                    this.mkl = new Date().getTime() - (this.bmy * 1000);
                    sessionStorage.sessionValue18 = this.mkl + ";" + this.bmy
                }
            }
            if (jyv.dwe.value86 === true) {
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
            console.error(j.eup)
        }
    };
    this.pbi = function() {
        if (!(jyv.oot.fqi == jyv.os.rlm && jyv.oot.cbz == jyv.ejv.szb)) {
            document.ontouchstart = jyv.dcm.vvi
        }
        if (jyv.oot.cbz != jyv.ejv.swn && jyv.oot.cbz != jyv.ejv.szb) {
            document.ontouchmove = jyv.dcm.zcy;
            document.ontouchend = jyv.dcm.pno
        }
        if (!jyv.oot.azw) {
            document.onmousedown = jyv.dcm.nrd;
            document.onmouseup = jyv.dcm.whv;
            document.onmousemove = jyv.dcm.wlx
        }
        document.onkeydown = jyv.dcm.wqy;
        document.onkeyup = jyv.dcm.pyp;
        document.oncontextmenu = jyv.dcm.tpd;
        this.kgc = (this.ifz() && jyv.oot.yls() && jyv.oot.zqh);
        if (jyv.oot.rlz() === false && jyv.oot.fqi === jyv.os.qfe && jyv.oot.urc() === true && screen.width <= 414 && this.okd()) {
            this.xzu = setInterval(this.vdg, 1000)
        }
    };
    this.vvi = function(d) {
        if (jyv.dcm.gsm === true) {
            jyv.dcm.hai();
            jyv.dcm.rgd()
        }
        jyv.dcm.itu(d)
    };
    this.pno = function(d) {
        if (jyv.dcm.gsm === true) {
            if (jyv.dcm.kgc) {
                jyv.dcm.njo()
            } else {
                jyv.dcm.hlp(d)
            }
        } else {
            if (jyv.dcm.xvs) {
                jyv.dcm.ahw()
            }
        }
    };
    this.zcy = function(d) {
        jyv.dcm.lds(d)
    };
    this.nrd = function(d) {
        window.focus();
        if (jyv.dcm.gsm === true) {
            jyv.dcm.hai();
            jyv.dcm.rgd()
        }
        jyv.dcm.itu(d)
    };
    this.whv = function(d) {
        if (jyv.dcm.gsm === true) {
            jyv.dcm.hlp(d)
        }
    };
    this.wlx = function(d) {};
    this.wqy = function(d) {
        if ((d.keyCode == 122 && (jyv.oot.fqi == jyv.os.bze || jyv.oot.fqi == jyv.os.lhy)) || (d.keyCode == 70 && d.ctrlKey && jyv.oot.fqi == jyv.os.lrk)) {
            return
        }
        jyv.dcm.hai();
        jyv.dcm.rgd();
        jyv.dcm.ykf(d)
    };
    this.pyp = function(d) {
        jyv.dcm.ovz(d)
    };
    this.tpd = function() {
        return false
    };
    this.itu = function(d) {};
    this.hlp = function(d) {};
    this.ykf = function(d) {};
    this.ovz = function(d) {};
    this.lds = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.qca = function(d) {};
    this.bvm = function() {
        var f = jyv.dcm.cwl.drl("topb"),
            e = jyv.dcm.cwl.drl("settings"),
            d = jyv.dcm.cwl.drl("topi"),
            g = jyv.dcm.cwl.drl("gameb");
        if (jyv.oot.cbz == jyv.ejv.swn || jyv.oot.cbz == jyv.ejv.yfi) {
            jyv.dcm.aqq = (window.innerWidth == window.outerWidth)
        } else {
            if (jyv.oot.cbz == jyv.ejv.yyp || jyv.oot.cbz == jyv.ejv.jgz) {
                jyv.dcm.aqq = (window.innerHeight >= window.outerHeight)
            } else {
                if (jyv.oot.cbz == jyv.ejv.bbr) {
                    jyv.dcm.aqq = (document.fullscreenElement) ? true : false
                } else {
                    if (jyv.oot.zqh) {
                        if (jyv.oot.cbz == jyv.ejv.smd || jyv.oot.cbz == jyv.ejv.oae || jyv.oot.cbz == jyv.ejv.lru) {
                            jyv.dcm.aqq = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (jyv.oot.cbz == jyv.ejv.szb) {
                                jyv.dcm.aqq = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.jox("fullscreen", jyv.dcm.aqq)
        }
        if (f) {
            f.odj.iiz("fullscreen", "#jox", [(jyv.dcm.aqq) ? 1 : 0])
        }
        if (e) {
            e.odj.iiz("fullscreen", "#jox", [(jyv.dcm.aqq) ? 1 : 0])
        }
        if (g) {
            g.odj.iiz("fullscreen", "#jox", [(jyv.dcm.aqq) ? 1 : 0])
        }
        jyv.dcm.jdd();
        jyv.dcm.osx();
        jyv.dcm.cqp();
        if (jyv.oot.urc() === true && jyv.oot.rlz() === false) {
            document.body.style.height = "5000px"
        }
        if (!jyv.oot.rlz() && jyv.oot.cbz === jyv.ejv.lru && jyv.dcm.lvn < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.twn = function() {
        jyv.dcm.bvm();
        jyv.dcm.vdg()
    };
    this.vdg = function() {
        if (jyv.oot.urc() === true && jyv.oot.rlz() === false) {
            if (jyv.dcm.okd() === true) {
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
                            jyv.dcm.bvm();
                            window.ontouchmove = jyv.dcm.twn
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = jyv.dcm.vvi;
                        document.ontouchmove = jyv.dcm.zcy;
                        document.ontouchend = jyv.dcm.pno;
                        if (window.ontouchmove != null) {
                            jyv.dcm.bvm();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.fdi = function(g) {
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
                    jyv.oot.xxv(e, i, i)
                }
                f.innerHTML = jyv.dcm.language.kpi;
                k.className = "rotateAnim";
                j.style.display = "block";
                jyv.dcm.oqf = true
            } else {
                j.style.display = "none";
                k.className = null;
                jyv.dcm.oqf = false
            }
        }
    };
    this.fkh = function() {
        var d = jyv.dcm.cwl.drl("settings");
        jyv.dcm.bvm();
        if (d) {
            d.odj.iiz("adjustment", "#jox", [(jyv.dcm.osh === jyv.bxp.jdb) ? 0 : 1]);
            d.spt()
        }
        if (jyv.dcm.vke === true) {
            jyv.dcm.oqf = true;
            jyv.dcm.kjl(true);
            jyv.dcm.fdi(true)
        } else {
            jyv.dcm.oqf = false;
            jyv.dcm.kjl((jyv.dcm.vll[jyv.dcm.pko] === 0));
            jyv.dcm.fdi(false)
        }
    };
    this.jdd = function() {
        this.spv = window.innerWidth, this.lvn = window.innerHeight;
        this.sqm = false;
        if (jyv.oot.rlz() == true && jyv.dwe.value69 === true) {
            if (jyv.oot.upq() === true) {
                this.sqm = true;
                this.spv = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.lvn = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.spv > this.lvn) {
                    this.lvn *= 0.98
                }
            } else {
                if (jyv.oot.urc() === true) {
                    this.sqm = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.spv = 1024;
                            this.lvn = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.spv = 736;
                                this.lvn = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.spv = 667;
                                    this.lvn = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.spv = 768;
                            this.lvn = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.spv = 414;
                                this.lvn = 628
                            } else {
                                if (screen.height === 667) {
                                    this.spv = 375;
                                    this.lvn = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.cqp = function() {
        var g = 0,
            j = 0,
            f = 1,
            e = 1,
            i = this.spv,
            d = this.lvn;
        this.cqo = (this.aqq || i < this.width || d < this.height || this.bxp.avq);
        g = this.kyt(this.cqo);
        f = ((i - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.cqo) {
            if (this.bxp.neo) {
                if (f > e) {
                    this.gfl = e;
                    this.ogw = e
                } else {
                    this.gfl = f;
                    this.ogw = f
                }
            } else {
                this.gfl = f;
                this.ogw = e
            }
        } else {
            this.gfl = 1;
            this.ogw = 1
        }
        jyv.oot.xxv(this.canvas, this.gfl, this.ogw);
        if (this.sat != null) {
            jyv.oot.xxv(this.sat, this.gfl, this.ogw, ((this.bxp.sat.ebf.x) - ((this.bxp.sat.ebf.x + this.bxp.sat.crz) / 2 * (1 - this.gfl))), ((this.bxp.sat.ebf.y) - ((this.bxp.sat.ebf.y + this.bxp.sat.yxu) / 2 * (1 - this.ogw))))
        }
        if (this.thp != null) {
            jyv.oot.xxv(this.thp, this.gfl, this.ogw)
        }
        if (this.cqo) {
            this.offsetLeft = Math.floor((i - (this.canvas.width * this.gfl))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.ogw))) / 2
        } else {
            this.offsetLeft = this.pzy.offsetLeft;
            this.offsetTop = this.pzy.offsetTop
        }
    };
    this.osx = function() {
        if (this.tuu() === true) {
            var e = null;
            if (this.log[this.dmj] === jyv.lcb.uqg) {
                if (window.orientation === -90) {
                    e = jyv.bxp.aqn
                } else {
                    e = jyv.bxp.jdb
                }
            } else {
                if (this.log[this.dmj] === jyv.lcb.jcw) {
                    e = jyv.bxp.aqn
                } else {
                    if (this.log[this.dmj] === jyv.lcb.tac) {
                        e = jyv.bxp.jdb
                    }
                }
            }
            this.vke = (this.lvn > this.spv);
            this.arp(e);
            this.glq(false);
            if (this.hcm === true) {
                this.spt()
            } else {
                this.cwl.iiz("loading", "#spt")
            }
        } else {
            if (jyv.oot.zqh) {
                var f = (this.spv > this.lvn) ? this.fyh : this.mhf,
                    d = this.bxp.psv,
                    e = null;
                if (f != this.piy) {
                    this.piy = f;
                    if (this.gmj) {
                        e = (this.piy == this.fyh) ? jyv.bxp.udj : jyv.bxp.gsf
                    } else {
                        e = (this.piy == this.fyh) ? jyv.dwe.value33 : jyv.dwe.value32
                    }
                    this.arp(e);
                    this.glq((d != this.bxp.psv) || this.gmj);
                    if (this.hcm === true) {
                        if (this.gmj && this.dnc) {
                            this.gwa(this.sqv(this.language.hum))
                        } else {
                            this.spt()
                        }
                    } else {
                        this.cwl.iiz("loading", "#spt")
                    }
                }
            } else {
                if (!this.gmj) {
                    e = (this.aqq) ? jyv.dwe.value15 : jyv.dwe.value14;
                    this.arp(e);
                    this.glq(false);
                    if (this.hcm === true) {
                        this.spt()
                    } else {
                        this.cwl.iiz("loading", "#spt")
                    }
                }
            }
        }
    };
    this.tuu = function() {
        return false
    };
    this.okd = function() {
        return false
    };
    this.arp = function(d) {};
    this.gyg = function() {
        this.style = new fhp()
    };
    this.kyt = function(d) {
        var e = 0;
        if (jyv.oot.upq() && window.innerWidth > window.innerHeight && d) {
            if (this.gsm === true && document.body.style.backgroundColor !== this.style.xni.backgroundColor) {
                document.body.style.backgroundColor = this.style.xni.backgroundColor
            }
        }
        return e
    };
    this.aqx = function() {
        if (jyv.oot.upq() && !jyv.oot.rlz() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.wmz = function() {
        return false
    };
    this.jbg = function() {
        if (jyv.oot.azw) {
            this.nej = new rzs()
        } else {
            this.nej = new efb()
        }
        this.nej.lya();
        this.nej.aiv(this.eck())
    };
    this.emr = function() {
        this.cwl = new chu();
        this.cwl.lya();
        this.cwl.mwi("jackpots")
    };
    this.eck = function() {
        var d = new bkz();
        d.lya();
        return d
    };
    this.ppu = function() {
        this.sbz = new owt()
    };
    this.btn = function() {
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
                    for (var k = 0, g = jyv.dwe.value5.length; k < g; k++) {
                        if (o[l] === jyv.dwe.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(jyv.dwe.value5[0])
                }
                jyv.dwe.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    jyv.dwe.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = jyv.oot.uoy();
                if (this.gqt(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === jyv.language.EN && this.gqt(jyv.language.US)) {
                        sessionStorage.sessionValue1 = jyv.language.US
                    } else {
                        if (q === jyv.language.DE && this.gqt(jyv.language.AT)) {
                            sessionStorage.sessionValue1 = jyv.language.AT
                        } else {
                            if (q === jyv.language.ES && this.gqt(jyv.language.MX)) {
                                sessionStorage.sessionValue1 = jyv.language.MX
                            } else {
                                if (q === jyv.language.ES && this.gqt(jyv.language.CO)) {
                                    sessionStorage.sessionValue1 = jyv.language.CO
                                } else {
                                    if (q === jyv.language.ES && this.gqt(jyv.language.CL)) {
                                        sessionStorage.sessionValue1 = jyv.language.CL
                                    } else {
                                        if (q === jyv.language.ES && this.gqt(jyv.language.VE)) {
                                            sessionStorage.sessionValue1 = jyv.language.VE
                                        } else {
                                            if (q === jyv.language.EN && this.gqt(jyv.language.BR)) {
                                                sessionStorage.sessionValue1 = jyv.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = jyv.dwe.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.gqt(sessionStorage.sessionValue1)) {
                for (var l = 0, m = jyv.dwe.value5.length; l < m; l++) {
                    if (jyv.dwe.value5[l] == sessionStorage.sessionValue1) {
                        this.ztr = l;
                        break
                    }
                }
                this.language = this.pum(sessionStorage.sessionValue1)
            } else {
                this.ztr = 0;
                this.language = this.pum(jyv.dwe.value5[this.ztr]);
                sessionStorage.sessionValue1 = jyv.dwe.value5[this.ztr]
            }
        } catch (n) {
            this.ztr = 0;
            this.language = this.pum(jyv.dwe.value5[this.ztr]);
            console.error(n.eup)
        }
    };
    this.cnc = function() {
        var d = (jyv.dwe.value45 == jyv.kqm.qji) ? this.bxp.kqm.dcm : this.bxp.kqm.xgx;
        this.pzy = document.getElementById("gameArea");
        if (this.sqm === false) {
            this.pzy.style.marginTop = (-d.ebf.height / 2) + "px";
            this.pzy.style.marginLeft = (-d.ebf.width / 2) + "px"
        } else {
            this.pzy.style.left = "0px";
            this.pzy.style.top = "0px";
            this.pzy.style.marginTop = ((window.innerHeight - d.ebf.height) / 2) + "px";
            this.pzy.style.marginLeft = ((window.innerWidth - d.ebf.width) / 2) + "px"
        }
        this.pzy.style.width = (d.ebf.width > window.innerWidth) ? window.innerWidth + "px" : d.ebf.width + "px";
        this.pzy.style.height = (d.ebf.height > window.innerHeight) ? window.innerHeight + "px" : d.ebf.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.ebf.width);
        this.canvas.height = Math.round(d.ebf.height);
        this.context2D = this.canvas.getContext("2d");
        this.thp = document.getElementById("gameOverlay");
        if (this.thp) {
            this.thp.style.width = d.ebf.width + "px";
            this.thp.style.height = d.ebf.height + "px"
        }
        this.xgg(d)
    };
    this.xgg = function(e) {
        var f = new lzk(),
            d = (jyv.dwe.value45 == jyv.kqm.qji) ? this.style.kqm.dcm : this.style.kqm.xgx;
        f.lya(e.ebf, this.context2D);
        f.parent = this;
        f.fyd = (jyv.oot.zqh) ? this.omn : this.ahw;
        f.hbd = (this.gmj) ? this.language.bnj : this.language.awz;
        f.wvu = this.language.error;
        f.nxv(e);
        f.gds(d);
        this.cwl.wvv("loading", f)
    };
    this.wcm = function() {
        var d = new szl();
        d.lya(this.bxp.mqg.ebf, null, this.context2D);
        d.parent = this;
        d.nxv(this.bxp.mqg);
        d.gds(this.style.mqg);
        if (sessionStorage.sessionValue15 == "true" && jyv.dwe.value49) {
            d.sdk("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || jyv.dwe.value49) {
                d.sdk("time", "", "--:--")
            }
        }
        if (this.vtm()) {
            d.sdk("freeplay", "", this.language.trm)
        } else {
            d.sdk("id", "", "")
        }
        this.cwl.wvv("topi", d)
    };
    this.zst = function() {
        var d = new mpg();
        d.lya(this.bxp.rjp.ebf, null, this.context2D);
        d.parent = this;
        d.nxv(this.bxp.rjp);
        d.gds(this.style.rjp, false);
        d.zgu(false);
        this.cwl.wvv("topb", d)
    };
    this.skp = function() {};
    this.wrh = function() {
        var d = new xid();
        d.lya(this.bxp.iyc.ebf, null, this.context2D);
        d.parent = this;
        d.dgs(this.bxp.iyc);
        d.gds(this.style.iyc);
        d.zgu(false);
        this.cwl.wvv("stats", d)
    };
    this.ste = function() {
        this.yxi = new dyp();
        this.yxi.lya();
        this.yxi.gds(this.style.yxi);
        this.yxi.nxv(this.bxp.yxi)
    };
    this.zcx = function() {
        this.fhc = new xbl();
        this.fhc.lya();
        this.fhc.gds(this.style.fhc);
        this.fhc.nxv(this.bxp.fhc)
    };
    this.xbq = function() {
        if (this.bmo()) {
            this.oqr.ssm = document.getElementById("jurisdictionDiv");
            this.oqr.dpf = document.getElementById("btnsp");
            this.oqr.dat = document.getElementById("btnsl");
            this.oqr.wco = document.getElementById("btnst");
            if (this.oqr.dpf) {
                this.oqr.dpf.innerHTML = this.language.btu;
                this.oqr.dpf.onclick = this.hzw;
                this.oqr.dpf.ontouchend = this.hzw
            }
            if (this.oqr.dat) {
                this.oqr.dat.innerHTML = this.language.eyy;
                this.oqr.dat.onclick = this.jnb;
                this.oqr.dat.ontouchend = this.jnb
            }
            if (this.oqr.wco) {
                this.oqr.wco.innerHTML = this.language.vnu;
                this.oqr.wco.onclick = this.okz;
                this.oqr.wco.ontouchend = this.okz
            }
            this.icc();
            this.rxb()
        }
    };
    this.wws = function(e) {
        var d = new yew();
        d.lya(this.bxp.lbf.ebf, null, this.context2D);
        d.parent = this;
        d.gfc = true;
        if (e) {
            d.mce(e)
        }
        d.dgs(this.bxp.lbf);
        d.uqd(this.language);
        d.gds(this.style.lbf);
        d.nxv(this.bxp.lbf);
        d.zgu(false);
        this.cwl.wvv("autop", d)
    };
    this.fxr = function(d) {
        var e = new tet();
        e.lya(this.bxp.voz.ebf, null, this.context2D);
        e.parent = this;
        if (d) {
            e.uru(d)
        }
        e.zgu(false);
        this.cwl.wvv("settings", e)
    };
    this.glq = function(d) {};
    this.mtd = function() {
        var d = this.cwl.drl("stats");
        if (d) {
            d.dho(this.bxp.iyc.ebf);
            d.nxv(this.bxp.iyc)
        }
    };
    this.dmo = function() {
        if (this.yxi) {
            this.yxi.nxv(this.bxp.yxi)
        }
    };
    this.nxt = function() {
        if (this.fhc) {
            this.fhc.nxv(this.bxp.fhc)
        }
    };
    this.icc = function() {
        var d = null,
            e = 0;
        if (this.oqr) {
            d = this.bxp.bvv;
            if (this.oqr.ssm) {
                jyv.oot.rkp(this.oqr.ssm, d.lpt)
            }
            if (this.oqr.dpf) {
                this.oqr.dpf.style.fontSize = d.wgs.fontSize + "px";
                this.oqr.dpf.style.textIndent = d.wgs.textIndent + "px";
                jyv.oot.rkp(this.oqr.dpf, d.gia)
            }
            if (this.oqr.dat) {
                this.oqr.dat.style.fontSize = d.wgs.fontSize + "px";
                this.oqr.dat.style.textIndent = d.wgs.textIndent + "px";
                jyv.oot.rkp(this.oqr.dat, d.sis)
            }
            if (this.oqr.wco) {
                this.oqr.wco.style.fontSize = d.wgs.fontSize + "px";
                this.oqr.wco.style.textIndent = d.wgs.textIndent + "px";
                jyv.oot.rkp(this.oqr.wco, d.odn)
            }
            if (this.oqr.ssm) {
                e = (d.lpt.width - d.lpt.height) / 2;
                if (this.osh == jyv.bxp.aqn) {
                    this.oqr.ssm.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.oqr.ssm.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.kob = function() {
        var d = this.cwl.drl("autop");
        if (d) {
            d.dho(this.bxp.lbf.ebf);
            d.nxv(this.bxp.lbf)
        }
    };
    this.eof = function() {
        var d = this.cwl.drl("settings");
        if (d) {
            d.dho(this.bxp.voz.ebf);
            d.nxv(this.bxp.voz)
        }
    };
    this.nbs = function() {
        var d = this.cwl.drl("topi");
        if (d) {
            d.dho(this.bxp.mqg.ebf);
            d.nxv(this.bxp.mqg)
        }
    };
    this.pkl = function() {
        var d = this.cwl.drl("topb");
        if (d) {
            d.dho(this.bxp.rjp.ebf);
            d.nxv(this.bxp.rjp)
        }
    };
    this.tfh = function() {
        var e = this.cwl.drl("loading"),
            d = (jyv.dwe.value45 == jyv.kqm.qji) ? this.bxp.kqm.dcm : this.bxp.kqm.xgx;
        if (e) {
            this.canvas.width = 0;
            if (this.sqm === false) {
                this.pzy.style.marginTop = (-d.ebf.height / 2) + "px";
                this.pzy.style.marginLeft = (-d.ebf.width / 2) + "px"
            } else {
                this.pzy.style.left = "0px";
                this.pzy.style.top = "0px";
                this.pzy.style.marginTop = ((this.lvn - d.ebf.height) / 2) + "px";
                this.pzy.style.marginLeft = ((this.spv - d.ebf.width) / 2) + "px"
            }
            this.pzy.style.width = (d.ebf.width > this.spv) ? this.spv + "px" : d.ebf.width + "px";
            this.pzy.style.height = (d.ebf.height > this.lvn) ? this.lvn + "px" : d.ebf.height + "px";
            this.canvas.width = Math.round(d.ebf.width);
            this.canvas.height = Math.round(d.ebf.height);
            if (this.thp) {
                this.thp.style.width = d.ebf.width + "px";
                this.thp.style.height = d.ebf.height + "px"
            }
            e.dho(d.ebf);
            e.nxv(d)
        }
    };
    this.ijz = function() {
        if (jyv.oot.zqh && !jyv.oot.azw) {
            if (!this.nej.gru && jyv.oot.cbz != jyv.ejv.bjg) {
                this.exx = false;
                this.pko = 0
            }
        }
    };
    this.sfd = function(d) {
        if (jyv.oot.zqh) {
            if (!this.gmj) {
                return jyv.bxp.she
            } else {
                if (!this.dbs) {
                    return jyv.bxp.udj
                }
            }
        }
        return d
    };
    this.gqj = function() {
        var d = this.cwl.drl("loading");
        this.bvm();
        if (d) {
            d.omu = true
        }
        if ((jyv.oot.cbz === jyv.ejv.smd || jyv.oot.cbz === jyv.ejv.jgz || jyv.oot.cbz === jyv.ejv.bus) && jyv.oot.fqi === jyv.os.rlm && jyv.oot.qnu === true) {
            if (this.nej.gru === false || jyv.oot.yls() === false || jyv.oot.qmx() === false) {
                jyv.xzm = jyv.xwn.idk
            }
        }
        if (jyv.xzm == 0) {
            if (this.exx === true && jyv.oot.kld().length === 0) {
                this.exx = false
            }
            if (d) {
                d.spt(0)
            }
            this.crd();
            if (this.exx === true) {
                this.lpa()
            }
            this.nej.start()
        } else {
            if (d) {
                if (jyv.xzm == jyv.xwn.zay && jyv.oot.cbz === jyv.ejv.lru) {
                    d.vff = this.language.mrl;
                    d.spt(0)
                } else {
                    if (jyv.xzm == jyv.eup.thk) {
                        d.vff = this.language.exe;
                        d.spt(0)
                    } else {
                        d.vff = this.language.efe;
                        if (jyv.oot.fqi === jyv.os.rlm || jyv.oot.fqi === jyv.os.lhy) {
                            if (jyv.xzm != jyv.xwn.zay && sessionStorage.sessionValue1 === jyv.language.TR) {
                                d.vff += "|Google Chrome" + this.language.zgr
                            } else {
                                if (jyv.xzm != jyv.xwn.zay && (sessionStorage.sessionValue1 === jyv.language.GE || sessionStorage.sessionValue1 === jyv.language.HU)) {
                                    d.vff += "|" + this.language.jrr + " Google Chrome" + this.language.jiq
                                } else {
                                    d.vff += "|" + this.language.zgr + " Google Chrome"
                                }
                            }
                        } else {
                            if (jyv.oot.fqi === jyv.os.bze || jyv.oot.fqi === jyv.os.lhy) {
                                if (jyv.xzm != jyv.xwn.zay && sessionStorage.sessionValue1 === jyv.language.TR) {
                                    d.vff += "|Google Chrome, Mozilla Firefox" + this.language.zgr
                                } else {
                                    if (jyv.xzm != jyv.xwn.zay && (sessionStorage.sessionValue1 === jyv.language.GE || sessionStorage.sessionValue1 === jyv.language.HU)) {
                                        d.vff += "|" + this.language.jrr + " Google Chrome, Mozilla Firefox" + this.language.jiq
                                    } else {
                                        d.vff += "|" + this.language.zgr + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + jyv.xzm);
                        d.spt(0)
                    }
                }
            }
        }
    };
    this.crd = function() {};
    this.lpa = function() {};
    this.xfl = function() {
        var e = this.tgg + this.bxp.type + "/",
            d = this.cwl.drl("loading");
        if (!this.gmj) {
            this.nej.eef("continue", jyv.dwe.value30 + "/basic/images/" + this.bxp.type + "/btn_continue.png")
        }
        if (jyv.dwe.value45 == jyv.kqm.qji) {
            e += "load.jpg"
        } else {
            if (jyv.dwe.value45 == jyv.kqm.zqw) {
                e += "load_amanet.jpg"
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.hki = true
            }
        }
        this.nej.eef("splash", e);
        this.nej.uqw()
    };
    this.kys = function() {};
    this.gqt = function(e) {
        for (var d = 0; d < jyv.dwe.value5.length; d++) {
            if (jyv.dwe.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.mmr = function() {
        jyv.dcm.wud = true;
        if (!jyv.dcm.gmj) {
            jyv.dcm.ene();
            if (jyv.dcm.ont()) {
                jyv.dcm.kei()
            }
        } else {
            jyv.dcm.tyj()
        }
        jyv.dcm.connect()
    };
    this.ene = function() {};
    this.tyj = function() {};
    this.connect = function() {
        this.xwo.connect(this.lqz, this.tzd, this.chj, this.czs, this.chv, this.znj, this.mvv)
    };
    this.eux = function(d) {
        if (typeof d === "undefined") {
            jyv.dcm.xwo.eux(0)
        } else {
            jyv.dcm.xwo.eux(d)
        }
    };
    this.qdg = function(d) {
        this.cgi = 0;
        this.ayd = 0;
        this.ewl = d;
        clearInterval(this.qmu);
        this.qmu = setInterval(this.ptw, 1000)
    };
    this.ptw = function() {
        var d = jyv.dcm.cwl.drl("loading");
        jyv.dcm.cgi++;
        jyv.dcm.ayd = Math.round(jyv.dwe.value47 / 1000) - jyv.dcm.cgi;
        jyv.dcm.ayd = (jyv.dcm.ayd > 0) ? jyv.dcm.ayd : 0;
        if (!jyv.dcm.gsm) {
            if (d) {
                d.vff = "Can not connect to game server!|Tries to connect: " + jyv.dcm.ewl + " (" + jyv.dcm.ayd + " sec)";
                d.spt(0)
            }
        }
    };
    this.rap = function() {
        return jyv.dwe.value74
    };
    this.spt = function(d, g, e, f) {};
    this.dmt = function() {
        return (this.hcm === true && this.gsm === true && this.vke === false)
    };
    this.gwa = function(e) {
        var d = this.cwl.drl("history");
        this.hcm = true;
        if (this.gsm) {
            if (this.bxp.osk) {
                jyv.oot.jbx(this.context2D, this.bxp.dcm.ebf.x - this.bxp.dcm.owp, this.bxp.dcm.ebf.y - this.bxp.dcm.owp, this.bxp.dcm.ebf.width + 2 * this.bxp.dcm.owp, this.bxp.dcm.ebf.height + 2 * this.bxp.dcm.owp, "black", 1)
            }
            jyv.oot.cpn(this.context2D, e, "white", this.bxp.dcm.ebf.x, this.bxp.dcm.ebf.y, this.bxp.dcm.ebf.width, this.bxp.dcm.ebf.height, "arial", 28, "bold");
            if (d) {
                d.spt()
            }
        }
    };
    this.jxh = function() {
        if (jyv.dcm.yxi) {
            jyv.dcm.yxi.qhb()
        }
        jyv.dcm.rvk(false);
        jyv.dcm.gmy.pwt(false);
        jyv.dcm.gmy.odj.iiz("exit", "#qhj", [true]);
        if (jyv.oot.wjo()) {
            jyv.oot.ron();
            setTimeout(jyv.dcm.bvm, 1400)
        }
        if (jyv.dwe.value67 > 0) {
            jyv.dcm.eux(jyv.dwe.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                jyv.dcm.qca({
                    type: "history",
                    sender: jyv.dcm.lqz,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null") {
                    jyv.dcm.qca({
                        type: "quit",
                        sender: jyv.dcm.lqz,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                        window.location.href = decodeURIComponent(sessionStorage.sessionValue5)
                    }
                }
            }
        }
    };
    this.mnz = function() {
        clearTimeout(jyv.dcm.mwj);
        jyv.dcm.rvk(false);
        if (jyv.dcm.gmy) {
            jyv.dcm.gmy.pwt(false)
        }
        if (!jyv.dcm.gmj) {
            jyv.dcm.stop();
            if (jyv.dcm.gmy) {
                jyv.dcm.gmy.odj.iiz("info", "#yvk", [jyv.dcm.language.hhn]);
                jyv.dcm.spt()
            }
            if (jyv.dcm.tuu() === true && jyv.oot.wjo()) {
                jyv.oot.ron();
                setTimeout(jyv.dcm.bvm, 800);
                setTimeout(jyv.dcm.xwo.axr.close, 800)
            } else {
                jyv.dcm.xwo.axr.close()
            }
        } else {
            jyv.dcm.xwo.close()
        }
    };
    this.res = function() {
        jyv.dcm.kgc = true
    };
    this.njo = function() {
        if (jyv.oot.zqh == true) {
            if (jyv.dcm.kgc == true) {
                jyv.dcm.kgc = false;
                jyv.oot.ron();
                setTimeout(jyv.dcm.bvm, 1400)
            }
        } else {
            jyv.oot.ron();
            setTimeout(jyv.dcm.bvm, 1400)
        }
    };
    this.blz = function() {
        var e = (jyv.dcm.tuu() === true) ? "smartphone" : "desktop",
            i = "en";
        if (sessionStorage.sessionValue1 == jyv.language.ES || sessionStorage.sessionValue1 == jyv.language.CO || sessionStorage.sessionValue1 == jyv.language.CL || sessionStorage.sessionValue1 == jyv.language.MX || sessionStorage.sessionValue1 == jyv.language.VE) {
            i = "es"
        } else {
            if (sessionStorage.sessionValue1 == jyv.language.RO) {
                i = "ro"
            } else {
                if (sessionStorage.sessionValue1 == jyv.language.PT || sessionStorage.sessionValue1 == jyv.language.BR) {
                    i = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == jyv.language.HR) {
                        i = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == jyv.language.DE) {
                            i = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == jyv.language.SE) {
                                i = "se"
                            }
                        }
                    }
                }
            }
        }
        if (jyv.dcm.zlh != "") {
            var f = null,
                g = "",
                d = "";
            if (jyv.dcm.zlh != "") {
                g += "rtp=" + jyv.dcm.zlh
            }
            if (jyv.dcm.cuh != "") {
                g += (jyv.dcm.zlh != "") ? "&" : "";
                g += "maxwin=" + ((jyv.dcm.cuh == "0") ? "0" : jyv.dcm.bug(Number(jyv.dcm.cuh) * jyv.dcm.ctb()))
            }
            d = encodeURIComponent(g);
            f = window.open(jyv.dwe.value30 + "/gamerules/" + i + "/" + e + "/" + jyv.dcm.lqz.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = jyv.dwe.value30 + "/gamerules/" + i + "/" + e + "/" + jyv.dcm.lqz.toLowerCase() + ".html?" + d
            }
        }
    };
    this.wew = function() {
        jyv.dcm.hho = false;
        jyv.dcm.ujv();
        jyv.dcm.mbf();
        jyv.dcm.ltz()
    };
    this.unt = function() {
        var d = jyv.dcm.cwl.drl("stats");
        if (d) {
            d.coo(true, true)
        }
        jyv.dcm.fcd.close(true)
    };
    this.dlo = function() {
        var d = jyv.dcm.cwl.drl("stats");
        jyv.dcm.stop();
        if (d && d.fam()) {
            d.coo(true, true)
        }
        jyv.dcm.xwo.axr.close();
        if (jyv.dcm.fcd) {
            jyv.dcm.fcd.close(false)
        }
    };
    this.kmc = function() {
        clearTimeout(jyv.dcm.mwj);
        jyv.dcm.gmy.pwt(false);
        jyv.dcm.stop();
        jyv.dcm.xwo.axr.zik()
    };
    this.ccz = function() {
        if (jyv.dcm.dnc) {
            return
        }
        var d = jyv.dcm.cwl.drl("history");
        if (d) {
            d.pwt(false)
        }
        jyv.dcm.stop();
        jyv.dcm.xwo.exm(jyv.dcm.zwo)
    };
    this.emu = function() {
        if (jyv.dcm.dnc) {
            return
        }
        var d = jyv.dcm.cwl.drl("history");
        if (d) {
            d.pwt(false)
        }
        jyv.dcm.stop();
        jyv.dcm.xwo.jmi(jyv.dcm.zwo)
    };
    this.nkg = function() {
        var d = jyv.dcm.cwl.drl("history");
        if (d) {
            d.pwt(false)
        }
        jyv.dcm.stop();
        clearInterval(jyv.dcm.xzu);
        jyv.dcm.jml();
        jyv.dcm.xwo.close()
    };
    this.dfi = function() {
        jyv.dcm.nej.ckk("btn");
        jyv.dcm.nej.ddz("btn");
        jyv.dcm.aqw()
    };
    this.ney = function() {
        var f = jyv.dcm.cwl.drl("topb"),
            e = jyv.dcm.cwl.drl("settings"),
            g = jyv.dcm.cwl.drl("gameb"),
            d = jyv.dcm.cwl.drl("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (jyv.dcm.nej.gru === true) {
            jyv.dcm.pko = (jyv.dcm.pko === jyv.dcm.vll.length - 1) ? 0 : jyv.dcm.pko + 1;
            jyv.dcm.ios(jyv.dcm.vll[jyv.dcm.pko])
        } else {
            jyv.dcm.pko = (jyv.dcm.pko === jyv.dcm.vll.length - 1) ? 0 : jyv.dcm.vll.length - 1;
            jyv.dcm.kjl((jyv.dcm.vll[jyv.dcm.pko] === 0))
        }
        sessionStorage.sessionValue6 = jyv.dcm.pko;
        if (jyv.dcm.vll[jyv.dcm.pko] > 0) {
            jyv.dcm.nej.ddz("audioon")
        }
        if (d) {
            d.fos("audio", jyv.dcm.vll[jyv.dcm.pko])
        }
        if (f) {
            f.odj.iiz("audio", "#jox", [jyv.dcm.pko])
        }
        if (e) {
            e.odj.iiz("audio", "#jox", [jyv.dcm.pko])
        }
        if (g) {
            g.odj.iiz("audio", "#jox", [jyv.dcm.pko])
        }
        jyv.dcm.spt()
    };
    this.omn = function() {
        jyv.dcm.xvs = true
    };
    this.ahw = function() {};
    this.lja = function() {
        var d = jyv.dcm.cwl.drl("settings");
        if (d) {
            if (d.fam()) {
                jyv.dcm.aeq()
            } else {
                jyv.dcm.yfl()
            }
            jyv.dcm.nej.ddz("btn");
            if (jyv.dcm.bxp.vaw === false) {
                jyv.dcm.gmy.odj.iiz("setting", "#lhz", [d.fam()])
            }
        }
    };
    this.yps = function() {
        var d = jyv.dcm.cwl.drl("settings"),
            e = "";
        jyv.dcm.dmj = (jyv.dcm.dmj < jyv.dcm.log.length - 1) ? jyv.dcm.dmj + 1 : (jyv.oot.rms()) ? 0 : 1;
        localStorage.localValue1 = jyv.dcm.dmj;
        jyv.dcm.bvm();
        if (d) {
            d.odj.iiz("adjustment", "#jox", [(jyv.dcm.osh === jyv.bxp.jdb) ? 0 : 1]);
            if (jyv.dcm.log[jyv.dcm.dmj] === jyv.lcb.jcw) {
                e = jyv.dcm.language.left
            } else {
                if (jyv.dcm.log[jyv.dcm.dmj] === jyv.lcb.tac) {
                    e = jyv.dcm.language.pfn
                } else {
                    if (jyv.dcm.log[jyv.dcm.dmj] === jyv.lcb.uqg) {
                        e = jyv.dcm.language.tgi
                    }
                }
            }
            d.odj.iiz("adjustment", "#rkw", [e])
        }
    };
    this.hzw = function() {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.jnb = function() {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.okz = function() {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.ssu = function(e, d) {
        this.gmy.odj.iiz("creditd", "#rkw", [this.bug(e), d])
    };
    this.eav = function(e, d) {
        if (e > 0) {
            this.gmy.odj.iiz("betd", "#rkw", [this.bug(e), d])
        } else {
            this.gmy.odj.iiz("betd", "#rkw", ["", d])
        }
    };
    this.mlp = function(e) {
        var d = this.cwl.drl("topi");
        this.zwo = e;
        if (d) {
            d.ezy("id", (e > 0) ? e : "")
        }
    };
    this.ikv = function() {
        var e = "",
            d = jyv.dcm.cwl.drl("topi");
        if (jyv.dwe.value49) {
            e += jyv.dcm.rjz()
        }
        if (jyv.dwe.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += jyv.dcm.mgd()
        }
        if (jyv.dwe.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.ezy("time", e)
        }
    };
    this.mgd = function() {
        return this.getTime(new Date().getTime() - this.aen)
    };
    this.rjz = function() {
        var d = new Date();
        return this.jvs(d.getHours()) + ":" + this.jvs(d.getMinutes())
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
        return this.jvs(d) + ":" + this.jvs(f)
    };
    this.jvs = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.wuq = function() {
        if (sessionStorage.sessionValue15 == "true" || jyv.dwe.value49) {
            if (jyv.dwe.value49) {
                this.rjz()
            }
            this.aen = (this.mkl > 0) ? this.mkl : new Date().getTime();
            this.ikv();
            this.kvp = setInterval(this.ikv, 1000)
        }
    };
    this.kcg = function() {
        clearInterval(this.kvp)
    };
    this.ghe = function(d) {
        this.aen -= d
    };
    this.rxs = function(d, f) {
        var e = this.cwl.drl("loading");
        if (e && e.vff == null) {
            if (f && f !== "") {
                e.wvu = f
            } else {
                e.wvu = this.language.error
            }
            e.vff = d;
            e.spt(this.nej.zln())
        }
    };
    this.yfl = function() {};
    this.aeq = function() {};
    this.mwe = function() {};
    this.pjk = function() {};
    this.aqw = function() {
        var g = false,
            i = this.cwl.drl("topb"),
            f = this.cwl.drl("settings"),
            j = this.cwl.drl("gameb"),
            d = this.cwl.drl("topi");
        this.ztr = (this.ztr + 1 == jyv.dwe.value5.length) ? 0 : this.ztr + 1;
        sessionStorage.sessionValue1 = jyv.dwe.value5[this.ztr];
        this.language = this.pum(jyv.dwe.value5[this.ztr]);
        this.uqd();
        if (i && g == false) {
            var e = i.odj.drl("language");
            if (e) {
                e.psd(this.qgk(jyv.dwe.value5[this.ztr]));
                g = true
            }
            i.wrq(true)
        }
        if (f && g == false) {
            var e = f.odj.drl("language");
            if (e) {
                e.psd(this.qgk(jyv.dwe.value5[this.ztr]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.odj.drl("language");
            if (e) {
                e.psd(this.qgk(jyv.dwe.value5[this.ztr]));
                g = true
            }
        }
        if (g == false) {
            var e = this.gmy.odj.drl("lang");
            if (e) {
                e.ugy = this.qgk(jyv.dwe.value5[this.ztr])
            }
        }
        if (d) {
            d.jox("language", sessionStorage.sessionValue1)
        }
        this.spt()
    };
    this.uqd = function() {};
    this.pum = function(d) {
        if (d == jyv.language.EN || d == jyv.language.US) {
            return new ouc()
        } else {
            if (d == jyv.language.ES || d == jyv.language.CO || d == jyv.language.MX || d == jyv.language.CL || d == jyv.language.VE) {
                return new qpg()
            } else {
                if (d == jyv.language.DE || d == jyv.language.AT) {
                    return new vkb()
                } else {
                    if (d == jyv.language.PT || d == jyv.language.BR) {
                        return new vjt()
                    } else {
                        if (d == jyv.language.RU) {
                            return new dep()
                        } else {
                            if (d == jyv.language.EE) {
                                return new cbv()
                            } else {
                                if (d == jyv.language.TR) {
                                    return new uxe()
                                } else {
                                    if (d == jyv.language.CZ) {
                                        return new eat()
                                    } else {
                                        if (d == jyv.language.GR) {
                                            return new psm()
                                        } else {
                                            if (d == jyv.language.BG) {
                                                return new nbh()
                                            } else {
                                                if (d == jyv.language.GE) {
                                                    return new xjf()
                                                } else {
                                                    if (d == jyv.language.HU) {
                                                        return new vxt()
                                                    } else {
                                                        if (d == jyv.language.RO) {
                                                            return new mrj()
                                                        } else {
                                                            if (d == jyv.language.FR) {
                                                                return new hor()
                                                            } else {
                                                                if (d == jyv.language.HR) {
                                                                    return new hqa()
                                                                } else {
                                                                    if (d == jyv.language.IT) {
                                                                        return new nla()
                                                                    } else {
                                                                        if (d == jyv.language.SE) {
                                                                            return new ima()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.qgk = function(d) {
        if (d) {
            return this.nej.pvr(d)
        }
        return null
    };
    this.lkn = function() {
        this.nej.pny()
    };
    this.jml = function() {};
    this.kjl = function(d) {
        this.nej.ubv(d)
    };
    this.ios = function(d) {
        this.nej.pyw(d)
    };
    this.uul = function() {
        this.skp();
        var d = this.cwl.drl("history");
        this.gsm = true;
        this.dnc = true;
        if (d) {
            d.mdw(true)
        }
        this.gwa(this.sqv(this.language.hum))
    };
    this.rgf = function() {
        loadGame("hist_" + jyv.dcm.lqz.toLowerCase(), jyv.dwe.value30 + "/" + jyv.dcm.lqz.toLowerCase() + "/src/hist_" + jyv.dcm.lqz.toLowerCase(), "UTF-8");
        removeGame(jyv.dcm.lqz.toLowerCase(), jyv.dwe.value30 + "/" + jyv.dcm.lqz.toLowerCase() + "/src/" + jyv.dcm.lqz.toLowerCase())
    };
    this.hpf = function() {
        var d = "./history_" + this.lqz.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.parent.postMessage('CloseGame',"*");
    };
    this.cex = function() {
        var d = null;
        if (jyv.dcm.dbs) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            jyv.dcm.qca({
                type: "quit",
                sender: jyv.dcm.lqz,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            jyv.dcm.xqc();
            if (d !== "(api)") {
                window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(jyv.dcm.lqz.toLowerCase(), jyv.dwe.value30 + "/" + jyv.dcm.lqz.toLowerCase() + "/src/" + jyv.dcm.lqz.toLowerCase());
            removeGame("hist_" + jyv.dcm.lqz.toLowerCase(), jyv.dwe.value30 + "/" + jyv.dcm.lqz.toLowerCase() + "/src/hist_" + jyv.dcm.lqz.toLowerCase());
            loadMenu("menu", jyv.dwe.value1001, "UTF-8", true)
        }
    };
    this.mwv = function() {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            jyv.dcm.qca({
                type: "quit",
                sender: jyv.dcm.lqz,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            d = decodeURIComponent(sessionStorage.sessionValue5);
            jyv.dcm.xqc();
            if (d !== "(api)") {
                window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(jyv.dcm.lqz.toLowerCase(), jyv.dwe.value30 + "/" + jyv.dcm.lqz.toLowerCase() + "/src/" + jyv.dcm.lqz.toLowerCase());
            removeGame("hist_" + jyv.dcm.lqz.toLowerCase(), jyv.dwe.value30 + "/" + jyv.dcm.lqz.toLowerCase() + "/src/hist_" + jyv.dcm.lqz.toLowerCase());
            loadMenu("menu", jyv.dwe.value1001, "UTF-8", false)
        }
    };
    this.xqc = function() {
        if (!jyv.dcm.gmj && jyv.dwe.value83) {
            sessionStorage.clear()
        }
    };
    this.tjr = function(f) {
        var g = null;
        if (this.yxi) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.vlp !== jyv.eup.yqt) {
                    if (g.vlp === jyv.eup.jar || g.vlp === jyv.eup.ryc) {
                        g.Title = this.language.ydq;
                        g.Text = (g.vlp === jyv.eup.jar) ? this.language.mpl : this.language.aoy;
                        g.Buttons = [{
                            Text: this.language.qhz,
                            Action: "quit"
                        }]
                    } else {
                        if (g.vlp === jyv.eup.rlj) {
                            g.Title = this.language.crf;
                            g.Text = this.language.shp + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.wlz;
                                g.Buttons = [{
                                    Text: this.sqv(this.language.dac),
                                    Action: "history"
                                }, {
                                    Text: this.language.qhz,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.qhz,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.vlp === jyv.eup.bea || g.vlp === jyv.eup.yta || g.vlp === jyv.eup.flv) {
                                g.Title = this.wgl;
                                if (g.vlp === jyv.eup.bea) {
                                    g.Text = this.language.freerounds_startinfo + " " + this.freeRoundTotal + " " + this.language.freerounds + "\n\n" + this.language.wiw
                                } else {
                                    if (g.vlp === jyv.eup.yta) {
                                        g.Text = this.language.freerounds_info1 + " " + (this.freeRoundTotal - this.gue) + " " + this.language.freerounds_info2 + "\n\n" + this.language.wiw
                                    } else {
                                        if (g.vlp === jyv.eup.flv) {
                                            g.Text = this.language.freerounds_played + ": " + this.gue + "\n" + this.language.freerounds_win + ": " + this.sac(this.bfk)
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
                    if (g.vlp === jyv.eup.skd || g.vlp === jyv.eup.ypk) {
                        g.Title = this.language.dco;
                        g.Text = this.language.ozz;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.vlp === jyv.eup.iii) {
                            g.Title = this.language.hyp;
                            g.Text = this.language.frx;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.vlp === jyv.eup.roulette.wxw || g.vlp === jyv.eup.roulette.tmx) {
                                g.Title = this.language.ydq;
                                g.Text = (g.vlp === jyv.eup.roulette.wxw) ? this.language.imc : this.language.gir;
                                g.Buttons = [{
                                    Text: this.language.qhz,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.yxi.gpn(f)
        }
    };
    this.stop = function() {
        this.kcg();
        this.jbo();
        this.hou();
        clearTimeout(this.pwj);
        if (!this.gmj) {
            clearInterval(this.xzu)
        }
        this.cwl.iiz("autop", "#stop");
        this.cwl.iiz("settings", "#stop");
        this.cwl.iiz("topb", "#stop")
    };
    this.vtm = function() {
        var d = false;
        if (this.sfq.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.tzd == "freeplay" && this.chj == "freeplay") {
                d = true
            } else {
                if (this.czs && (this.czs == "b71d982ffcbe56eb8cd11fa05963bbee" || this.czs.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (jyv.dwe.value68 != null && this.mvv.toLowerCase() === jyv.dwe.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            jyv.dwe.value21.e = false;
            if (jyv.dwe.value76) {
                jyv.dwe.value76.f = false
            }
        }
        return d
    };
    this.uit = function() {
        return (jyv.dwe.value65 > 0)
    };
    this.ifz = function() {
        return (this.gmj === false)
    };
    this.ees = function() {
        return false
    };
    this.ihy = function() {
        if (jyv.dcm.uit() && jyv.dcm.ees()) {
            clearTimeout(jyv.dcm.mwj);
            jyv.dcm.mwj = setTimeout(jyv.dcm.mnz, jyv.dwe.value65)
        }
    };
    this.hai = function() {
        if (jyv.dcm.uit() && jyv.dcm.mwj >= 0) {
            if (jyv.dcm.ees()) {
                clearTimeout(jyv.dcm.mwj);
                jyv.dcm.mwj = setTimeout(jyv.dcm.mnz, jyv.dwe.value65)
            } else {
                clearTimeout(jyv.dcm.mwj);
                jyv.dcm.mwj = -1
            }
        }
    };
    this.jbo = function() {
        if (jyv.dcm.uit()) {
            clearTimeout(jyv.dcm.mwj);
            jyv.dcm.mwj = -1
        }
    };
    this.jul = function() {
        return false
    };
    this.fdz = function() {
        return false
    };
    this.poo = function() {
        if (jyv.dcm.jul() && jyv.dcm.fdz() && jyv.dcm.gsv < 0) {
            clearTimeout(jyv.dcm.gsv);
            jyv.dcm.gsv = setTimeout(jyv.dcm.yvr, jyv.dcm.wrl)
        }
    };
    this.rgd = function() {
        if (jyv.dcm.jul() && jyv.dcm.gsv >= 0) {
            if (jyv.dcm.fdz()) {
                clearTimeout(jyv.dcm.gsv);
                jyv.dcm.gsv = setTimeout(jyv.dcm.yvr, jyv.dcm.wrl)
            } else {
                clearTimeout(jyv.dcm.gsv);
                jyv.dcm.gsv = -1
            }
        }
    };
    this.hou = function() {
        if (jyv.dcm.jul()) {
            clearTimeout(jyv.dcm.gsv);
            jyv.dcm.gsv = -1
        }
    };
    this.yvr = function() {};
    this.zcr = function() {};
    this.thn = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.chv.replace(/_*/g, ""));
        if (e > d) {
            this.chv = f
        }
    };
    this.rvk = function(g) {
        var e = (g && !this.ldn),
            f = this.cwl.drl("topb"),
            d = this.cwl.drl("topi");
        if (d) {
            d.qhj(e)
        }
        if (f) {
            f.qhj(e);
            f.pwt(e)
        }
    };
    this.bak = function(g) {
        var e = (g && !this.ldn),
            f = this.cwl.drl("topb"),
            d = this.cwl.drl("topi");
        if (d) {
            d.qhj(e)
        }
        if (f) {
            f.qhj(e);
            f.yhy(e)
        }
    };
    this.sxn = function(g) {
        var e = (g && !this.ldn),
            f = this.cwl.drl("topb"),
            d = this.cwl.drl("topi");
        if (d) {
            d.qhj(e)
        }
        if (f) {
            f.qhj(e);
            f.zno(e)
        }
    };
    this.cxd = function() {
        var d = this.cwl.drl("topb");
        if (d && !d.fam()) {
            this.nej.ckk("panel_in");
            this.nej.ddz("panel_in");
            d.gpn()
        }
    };
    this.ujv = function(d) {
        var e = this.cwl.drl("topb");
        if (e && e.fam()) {
            this.nej.ckk("panel_out");
            this.nej.ddz("panel_out");
            if (d) {
                e.lup = d
            }
            e.qhb()
        }
    };
    this.sac = function(f) {
        if (this.ugn > 0) {
            return (f * this.ugn).toFixed(0).toString()
        } else {
            if (jyv.dwe.value21.e == false || this.dbs == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (jyv.dwe.value21.m != 1) {
                    e = f * jyv.dwe.value21.m;
                    var g = jyv.dwe.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = jyv.dwe.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.cqd(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.bug = function(f) {
        if (this.ugn > 0) {
            var e = (f * this.ugn).toFixed(0).toString();
            if (jyv.dwe.value21.e == true && jyv.dwe.value21.m == 1 && jyv.dwe.value21.s && this.dbs == false) {
                e = jyv.dwe.value21.s + " " + e
            }
            return e
        } else {
            if (jyv.dwe.value21.e == false || this.dbs == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (jyv.dwe.value21.m != 1) {
                    e = f * jyv.dwe.value21.m;
                    var g = jyv.dwe.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = jyv.dwe.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.cqd(e, (d == 0) ? 0 : d + 1);
                if (jyv.dwe.value21.s) {
                    e = jyv.dwe.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.cqd = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (jyv.dwe.value21.cs != null) {
                l = l.replace(/\./, jyv.dwe.value21.cs)
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
                    if (jyv.dwe.value21.ts != null) {
                        e += jyv.dwe.value21.ts
                    }
                }
            }
            if (jyv.dwe.value21.cs != null) {
                f = f.replace(/\./, jyv.dwe.value21.cs)
            }
            return e + f
        }
    };
    this.aps = function(f) {
        if (this.ugn > 0) {
            return (f * this.ugn).toFixed(0).toString()
        } else {
            if (jyv.dwe.value76.f == false || this.dbs == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (jyv.dwe.value76.m != 1) {
                    e = f * jyv.dwe.value76.m;
                    var g = jyv.dwe.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = jyv.dwe.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.gqs(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.kfw = function(f) {
        if (this.ugn > 0) {
            var e = (f * this.ugn).toFixed(0).toString();
            if (jyv.dwe.value76.f == true && jyv.dwe.value76.m == 1 && jyv.dwe.value76.s && this.dbs == false) {
                e = jyv.dwe.value76.s + " " + e
            }
            return e
        } else {
            if (jyv.dwe.value76.f == false || this.dbs == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (jyv.dwe.value76.m != 1) {
                    e = f * jyv.dwe.value76.m;
                    var g = jyv.dwe.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = jyv.dwe.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.gqs(e, (d == 0) ? 0 : d + 1);
                if (jyv.dwe.value76.s) {
                    e = jyv.dwe.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.gqs = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (jyv.dwe.value76.cs != null) {
                l = l.replace(/\./, jyv.dwe.value76.cs)
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
                    if (jyv.dwe.value76.ts != null) {
                        e += jyv.dwe.value76.ts
                    }
                }
            }
            if (jyv.dwe.value76.cs != null) {
                f = f.replace(/\./, jyv.dwe.value76.cs)
            }
            return e + f
        }
    };
    this.sqv = function(d) {
        if (d && sessionStorage.sessionValue1 !== jyv.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.abp = function() {
        for (var f = 0, d = this.xwo.axr.kgm.length, e = null, g = 0; f < d; f++) {
            e = this.xwo.axr.kgm[f];
            g = e.kmz.substring(e.kmz.length - 1);
            this.cwl.wvv(e.kmz, this.tvc(this.bxp.kwf.ebf[d - 1][e.ebf], (d > 2) ? this.bxp.kwf.con : this.bxp.kwf.display, this.style.kwf.xjz[e.ebf], e.xxm, e.value, this.nej.pvr((d > 2) ? e.kmz + "_smalldsp" : e.kmz + "_dsp"), (d <= 2) ? [this.nej.pvr("jackpot_frame")] : (Number(g) <= 2) ? [this.nej.pvr("jackpot_topframe")] : [this.nej.pvr("jackpot_bottomframe")], (d > 2) ? this.nej.pvr(e.kmz + "_sym") : null), ["jackpots"])
        }
        this.cwl.wvv("jwp", this.tvc(this.bxp.kwf.dec.ebf, this.bxp.kwf.dec, this.style.kwf.dec, null, null, null, [this.nej.pvr("jackpot_win_0"), this.nej.pvr("jackpot_win_1"), this.nej.pvr("jackpot_win_2")], null));
        this.cwl.iiz("jwp", "#zgu", [false]);
        if (this.tra()) {
            this.cwl.wvv("mjwp", this.bvb(this.bxp.kwf.cnu.ebf, this.bxp.kwf.cnu, this.style.kwf.cnu, this.nej.pvr("mj_bg"), this.nej.pvr("mj_font"), this.nej.pvr("mj_label"), [this.nej.pvr("mj_0"), this.nej.pvr("mj_1"), this.nej.pvr("mj_2"), this.nej.pvr("mj_3"), this.nej.pvr("mj_4"), this.nej.pvr("mj_5")]));
            this.cwl.iiz("mjwp", "#zgu", [false])
        }
    };
    this.sfm = function() {
        var e = this.cwl.ovp("jackpots"),
            f = this.cwl.drl("jwp"),
            k = this.cwl.drl("mjwp");
        for (var j = 0, d = this.xwo.axr.kgm.length, g = null; j < d; j++) {
            g = this.xwo.axr.kgm[j];
            e[j].dho(this.bxp.kwf.ebf[d - 1][g.ebf]);
            e[j].nxv((d > 2) ? this.bxp.kwf.con : this.bxp.kwf.display)
        }
        if (f) {
            f.dho(this.bxp.kwf.dec.ebf);
            f.nxv(this.bxp.kwf.dec)
        }
        if (k) {
            k.dho(this.bxp.kwf.cnu.ebf);
            k.nxv(this.bxp.kwf.cnu)
        }
    };
    this.tvc = function(k, i, e, l, m, f, d, g) {
        var j = new xdt();
        j.lya(k, null, this.context2D);
        j.parent = this;
        j.uqm = f;
        j.wal = d;
        j.mkr = g;
        j.syu(l);
        j.kyr(m);
        j.gds(e);
        j.nxv(i);
        return j
    };
    this.bvb = function(j, i, g, k, l, f, e) {
        var d = new fjn();
        d.lya(j, null, this.context2D);
        d.parent = this;
        d.pkn = k;
        d.qfw = l;
        d.anq = f;
        d.fbu = e;
        d.gds(g);
        d.nxv(i);
        return d
    };
    this.vxd = function(f) {
        if (this.ntk() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.cwl.iiz(f[e].kmz, "#kyr", [f[e].value])
            }
            this.spt()
        }
    };
    this.kxh = function(d) {
        if (this.ntk() === true) {
            this.kwf = {
                kmz: d.kmz,
                value: d.value,
                eqm: d.eqm
            }
        }
    };
    this.wuo = function() {
        this.kwf = null
    };
    this.ces = function() {
        return false
    };
    this.tra = function() {
        return false
    };
    this.ntk = function() {
        return (!this.gmj && this.xwo.axr.kgm.length > 0 && this.ces())
    };
    this.ksj = function() {
        return (this.kwf != null)
    };
    this.bmo = function() {
        return (jyv.dwe.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.cpc = function() {
        if (this.ryw() && this.qsa()) {
            this.fln()
        }
    };
    this.qsa = function() {
        return false
    };
    this.ryw = function() {
        if (this.gmj) {
            return false
        }
        return (this.xwo.axr.hup.length + this.xwo.axr.bbi.length > 0)
    };
    this.fln = function() {
        var g = null,
            e = this.xwo.axr.hup.length,
            d = this.xwo.axr.bbi.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.xwo.axr.hup.splice(f, 1)[0];
                g.vlp = jyv.eup.yqt;
                this.lgx.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.xwo.axr.bbi.splice(f, 1)[0];
                g.vlp = jyv.eup.yqt;
                this.lgx.push(g)
            }
            if (this.yxi && !this.yxi.fam()) {
                this.rjh()
            }
        }
    };
    this.rjh = function() {
        var d = null;
        if (this.lgx.length > 0) {
            d = this.lgx.shift();
            this.tjr([d])
        }
    };
    this.klx = function() {
        if (jyv.dcm.oir.length > 0) {
            jyv.dcm.tjr(jyv.dcm.oir)
        }
    };
    this.hvy = function() {
        this.lgx.length = 0
    };
    this.uoq = function() {
        this.oir.length = 0;
        if (this.fhc) {
            this.fhc.qhb()
        }
    };
    this.lrm = function() {
        var f = null,
            d = this.xwo.axr.oir.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.xwo.axr.oir.splice(e, 1)[0];
                f.vlp = jyv.eup.yqt;
                this.oir.push(f)
            }
            if (this.fhc) {
                this.fhc.gpn(this.oir[0].Title, this.oir[0].Text, this.oir.length)
            }
        }
    };
    this.rxb = function() {
        var d = false;
        if (this.yxi && this.yxi.fam()) {
            d = true
        }
        if (this.fhc && this.fhc.fam()) {
            d = true
        }
        if (this.bmo()) {
            d = true
        }
        if (this.thp) {
            this.thp.style.display = (d) ? "block" : "none"
        }
    };
    this.iat = function() {
        this.rvk(false);
        this.gmy.pwt(false);
        this.gmy.odj.iiz("info", "#yzw");
        this.tjr([{
            vlp: jyv.eup.rlj
        }])
    };
    this.zyp = function() {
        jyv.dcm.gty = true
    };
    this.kei = function() {
        this.fcd = new xki().lya(this, jyv.dwe.value6)
    };
    this.noy = function() {
        if (this.fcd) {
            this.fcd.connect(this.lqz, this.tzd, this.chj, this.czs, this.chv, true)
        }
    };
    this.ltz = function() {
        if (jyv.dcm.fcd) {
            jyv.dcm.fcd.connect(jyv.dcm.lqz, jyv.dcm.tzd, jyv.dcm.chj, jyv.dcm.czs, jyv.dcm.chv, false)
        }
    };
    this.mbf = function() {};
    this.dvi = function() {};
    this.vfu = function(d) {
        if (!this.vtm() && !this.gmj) {
            clearTimeout(this.pwj);
            if (this.ont()) {
                this.pwj = setTimeout(this.soy, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.pwj = setTimeout(this.zyp, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.soy = function() {
        jyv.dcm.hho = true
    };
    this.ont = function() {
        return jyv.dwe.value36 || jyv.dwe.value37
    }
}

function wqm() {
    this.lya = function() {
        this.nad("btn", this.lay);
        this.nad("gamble_on", this.lay);
        this.nad("gamble_off", this.lay);
        this.nad("panel_in", this.lay);
        this.nad("panel_out", this.lay);
        this.nad("audioon", this.lay);
        for (var a = 0; a < 12; a++) {
            this.nad("step" + a, this.lay)
        }
        this.nad("maxstep", this.lay);
        this.nad("gambleprop", this.ywp)
    }
}
wqm.prototype = new bkz;

function wtu() {
    this.ukl = {
        xbc: 84,
        swt: -1,
        value: "T",
        myl: null
    };
    this.dqz = {
        xbc: 80,
        swt: -1,
        value: "P",
        myl: null
    };
    this.start = {
        xbc: 32,
        swt: -1,
        value: "SPACE",
        myl: null
    };
    this.ldn = {
        xbc: 16,
        swt: -1,
        value: "SHIFT",
        myl: null
    };
    this.qqc = {
        xbc: 38,
        swt: -1,
        value: "\u25B2",
        myl: null
    };
    this.izc = {
        xbc: 40,
        swt: -1,
        value: "\u25BC",
        myl: null
    };
    this.ytt = {
        xbc: 71,
        swt: -1,
        value: "G",
        myl: null
    };
    this.tpf = {
        xbc: 27,
        swt: -1,
        value: "ESC",
        myl: null
    };
    this.language = {
        xbc: 76,
        swt: -1,
        value: "L",
        myl: null
    };
    this.upo = {
        xbc: 13,
        swt: -1,
        value: "ENTER",
        myl: null
    };
    this.gzo = {
        xbc: 27,
        swt: -1,
        value: "ESC",
        myl: null
    };
    this.bqs = {
        xbc: 39,
        swt: -1,
        value: "\u25B6",
        myl: null
    };
    this.lob = {
        xbc: 37,
        swt: -1,
        value: "\u25C0",
        myl: null
    };
    this.voi = {
        xbc: 27,
        swt: -1,
        value: "ESC",
        myl: null
    };
    this.ucx.push(this.ukl);
    this.ucx.push(this.dqz);
    this.ucx.push(this.start);
    this.ucx.push(this.qqc);
    this.ucx.push(this.izc);
    this.ucx.push(this.tpf);
    this.ucx.push(this.language);
    this.ucx.push(this.ldn);
    this.ucx.push(this.ytt)
}
wtu.prototype = new owt;

function gra(g, c, f, e, i, a, d, b) {
    this.lof = g;
    this.rjx = f;
    this.ayn = e;
    this.naf = i;
    this.lqz = c;
    this.chv = a;
    this.znj = d;
    this.mvv = b;
    this.moa = [];
    this.xtq = [];
    this.fmq = [];
    this.tvk = [];
    this.iap = [];
    this.zwo = 0;
    this.eqm = 0;
    this.win = 0;
    this.fym = 0;
    this.rid = 0;
    this.odb = 0;
    this.rjn = 0;
    this.arn = 0;
    this.ohr = -1;
    this.jdn = -1;
    this.hmo = 0;
    this.ldn = false;
    this.ldw = -1;
    this.wdx = 0;
    this.zhd = "";
    this.qxj = function(l) {
        if (l != null) {
            this.pso = 0;
            this.ass = this.rjt(l);
            if (this.ass == 0) {
                this.rwo = this.vcp(l);
                this.eup = this.rjt(l);
                this.zwo = this.jam(l);
                this.eqm = this.jam(l);
                this.win = this.jam(l);
                this.fym = this.jam(l);
                this.rjn = this.vcp(l);
                this.rid = this.jam(l);
                this.odb = this.jam(l);
                this.arn = this.jam(l);
                for (var j = 0; j < 8; j++) {
                    this.fmq[j] = this.vcp(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.xtq[j] = this.jam(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.moa[j] = this.jam(l)
                }
                this.ohr = this.vcp(l);
                this.jdn = this.vcp(l);
                this.hmo = this.vcp(l);
                this.wdx = this.vcp(l);
                this.ldw = this.vcp(l);
                var m = this.vcp(l);
                for (var j = 0; j < m; j++) {
                    this.tvk[j] = this.jam(l)
                }
                var k = this.vcp(l);
                for (var j = 0; j < k; j++) {
                    this.iap[j] = this.jam(l)
                }
                this.okr(l);
                if (this.rwo == 0) {
                    this.akh("A/u250")
                } else {
                    this.xwo.gis()
                }
            } else {
                if (this.ass == 1) {
                    this.rwo = this.vcp(l);
                    this.eup = this.rjt(l);
                    this.zwo = this.jam(l);
                    this.eqm = this.jam(l);
                    this.win = this.jam(l);
                    this.fym = this.jam(l);
                    this.rjn = this.vcp(l);
                    this.rid = this.jam(l);
                    this.odb = this.jam(l);
                    this.arn = this.jam(l);
                    for (var j = 0; j < 8; j++) {
                        this.fmq[j] = this.vcp(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.xtq[j] = this.jam(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.moa[j] = this.jam(l)
                    }
                    this.ohr = this.vcp(l);
                    this.jdn = this.vcp(l);
                    this.hmo = this.vcp(l);
                    this.ldn = (this.vcp(l) == 1) ? true : false;
                    this.wdx = this.vcp(l);
                    this.ldw = this.vcp(l);
                    this.okr(l);
                    if (this.eup == 0) {
                        if (this.rwo == jyv.dze.gal.odo) {
                            this.xwo.gis()
                        } else {
                            if (this.rwo == jyv.dze.gal.jtx) {
                                this.xwo.pzf()
                            } else {
                                if (this.rwo == jyv.dze.gal.lwu) {
                                    this.xwo.kam()
                                } else {
                                    if (this.rwo == jyv.dze.gal.zqe) {
                                        this.xwo.tbt()
                                    } else {
                                        if (this.rwo == jyv.dze.gal.yjf) {
                                            this.xwo.qeo()
                                        } else {
                                            if (this.rwo == jyv.dze.gal.gur) {
                                                this.xwo.woa()
                                            } else {
                                                if (this.rwo == jyv.dze.gal.jzq) {
                                                    this.xwo.nwt()
                                                } else {
                                                    if (this.rwo == jyv.dze.gal.bmh) {
                                                        this.xwo.ozu()
                                                    } else {
                                                        if (this.rwo == jyv.dze.gal.ndw) {
                                                            this.xwo.khv()
                                                        } else {
                                                            if (this.rwo == jyv.dze.gal.kwj) {
                                                                this.xwo.ykn()
                                                            } else {
                                                                if (this.rwo == jyv.dze.gal.kkz) {
                                                                    this.xwo.lha()
                                                                } else {
                                                                    if (this.rwo == jyv.dze.gal.crg) {
                                                                        this.xwo.bdj()
                                                                    } else {
                                                                        this.quj()
                                                                    }
                                                                }
                                                            }
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
                        this.xwo.gmo(this.eup)
                    }
                } else {
                    if (this.ass == 2) {} else {
                        if (this.ass == 3) {
                            this.eqm = this.jam(l);
                            this.xwo.ssu()
                        } else {
                            if (this.ass === 8) {
                                this.akh("8")
                            } else {
                                if (this.ass == 9) {
                                    this.xwo.jyq.sfq = l.substring(this.pso)
                                } else {
                                    this.xzm = this.rjt(l);
                                    this.xwo.tnc(l.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.okr = function(j) {
        if (this.ass == 0) {
            this.zhd = this.bup(j);
            if (jyv.dwe.value21.e === true && jyv.dwe.value21.s !== "") {
                this.zhd = ""
            }
        }
    };
    this.quj = function() {};
    this.wih = function(j, k) {
        this.akh("A/u251," + j + "," + k)
    };
    this.nyk = function(j, l, k) {
        this.akh("A/u2512," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.hmz = function(j, l, k) {
        this.akh("A/u253," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.ucp = function() {
        this.akh("A/u257")
    };
    this.qyd = function() {
        this.akh("A/u259")
    };
    this.ytt = function(j) {
        this.akh("A/u258," + j)
    };
    this.yep = function() {
        this.akh("A/u2514")
    };
    this.nsd = function() {
        this.akh("A/u2515")
    };
    this.oco = function(j) {
        this.akh("A/u2513," + j)
    }
}
gra.prototype = new rfs;

function uam() {
    this.lya = function(a, b) {
        this.lof = b;
        this.jyq = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.rjx = f;
        this.ayn = e;
        this.naf = g;
        this.lqz = c;
        this.znj = d;
        this.mvv = b;
        this.axr = new gra(this.lof, c, f, e, g, a, d, b);
        this.axr.lya(this)
    };
    this.wih = function(a, b) {
        this.axr.wih(a, b)
    };
    this.nyk = function(a, c, b) {
        this.axr.nyk(a, c, b)
    };
    this.hmz = function(a, c, b) {
        this.axr.hmz(a, c, b)
    };
    this.ucp = function() {
        this.axr.ucp()
    };
    this.qyd = function() {
        this.axr.qyd()
    };
    this.ytt = function(a) {
        this.axr.ytt(a)
    };
    this.yep = function() {
        this.axr.yep()
    };
    this.nsd = function() {
        this.axr.nsd()
    };
    this.oco = function(a) {
        this.axr.oco(a)
    };
    this.gis = function() {
        var c = this.axr.rwo;
        for (var b = 0; b < this.axr.xtq.length; b++) {
            this.jyq.xtq[b] = this.axr.xtq[b]
        }
        for (var b = 0; b < this.axr.moa.length; b++) {
            this.jyq.moa[b] = this.axr.moa[b]
        }
        this.jyq.eqm = this.axr.eqm;
        this.jyq.rid = this.axr.rid;
        this.jyq.odb = this.axr.odb;
        for (var b = 0, a = this.axr.tvk.length; b < a && this.axr.tvk[b] <= this.axr.odb; b++) {
            this.jyq.tvk[b] = this.axr.tvk[b]
        }
        if (c == jyv.dze.gal.odo || (c == jyv.dze.gal.lwu && this.axr.win + this.axr.fym == 0) || c == jyv.dze.gal.zqe || (c == jyv.dze.gal.yjf && this.axr.win + this.axr.fym == 0) || c == jyv.dze.gal.jzq || (c == jyv.dze.gal.ndw && this.axr.win + this.axr.fym == 0) || (c == jyv.dze.gal.jtx && this.jyq.bsu == true)) {
            this.jyq.ors = true
        } else {
            this.jyq.ors = false
        }
        this.jyq.fvw = this.axr.rjn;
        this.jyq.totalBet = this.jyq.tvk[this.jyq.fvw];
        this.jyq.win = this.axr.win;
        this.jyq.auj = this.axr.ohr;
        this.jyq.jdn = this.axr.jdn;
        this.jyq.hmo = this.axr.hmo;
        this.jyq.state = c;
        this.yik();
        this.jyq.rpe();
        this.jyq.wcf(this.axr.rwo, this.axr.zwo, this.axr.fmq, this.axr.wdx, this.axr.ldw)
    };
    this.pzf = function() {
        for (var a = 0; a < this.axr.xtq.length; a++) {
            this.jyq.xtq[a] = this.axr.xtq[a]
        }
        for (var a = 0; a < this.axr.moa.length; a++) {
            this.jyq.moa[a] = this.axr.moa[a]
        }
        this.jyq.eqm = this.axr.eqm;
        this.jyq.auj = this.axr.ohr;
        this.jyq.state = this.axr.rwo;
        this.jyq.jdn = this.axr.jdn;
        this.yik();
        this.jyq.hko();
        this.jyq.mlp(this.axr.zwo)
    };
    this.ozu = function() {
        for (var a = 0; a < this.axr.xtq.length; a++) {
            this.jyq.xtq[a] = this.axr.xtq[a]
        }
        for (var a = 0; a < this.axr.moa.length; a++) {
            this.jyq.moa[a] = this.axr.moa[a]
        }
        this.jyq.eqm = this.axr.eqm;
        this.jyq.jdn = this.axr.jdn;
        this.jyq.auj = this.axr.ohr;
        this.jyq.state = this.axr.rwo;
        this.yik();
        this.jyq.phn();
        this.jyq.mlp(this.axr.zwo)
    };
    this.kam = function() {
        for (var a = 0; a < this.axr.xtq.length; a++) {
            this.jyq.xtq[a] = this.axr.xtq[a]
        }
        for (var a = 0; a < this.axr.moa.length; a++) {
            this.jyq.moa[a] = this.axr.moa[a]
        }
        this.jyq.eqm = this.axr.eqm;
        this.jyq.win = this.axr.win;
        this.jyq.jdn = this.axr.jdn;
        this.jyq.auj = this.axr.ohr;
        this.jyq.state = this.axr.rwo;
        if (this.jyq.win > 0) {
            this.jyq.pzk.iis(this.axr.fmq, this.axr.wdx)
        }
        this.yik();
        this.jyq.uyo();
        this.jyq.mlp(this.axr.zwo)
    };
    this.tbt = function() {
        this.jyq.eqm = this.axr.eqm;
        this.jyq.state = this.axr.rwo;
        this.yik();
        this.jyq.zhi()
    };
    this.nwt = function() {
        for (var a = 0; a < this.axr.xtq.length; a++) {
            this.jyq.xtq[a] = this.axr.xtq[a]
        }
        for (var a = 0; a < this.axr.moa.length; a++) {
            this.jyq.moa[a] = this.axr.moa[a]
        }
        this.jyq.eqm = this.axr.eqm;
        this.jyq.win = this.axr.win;
        this.jyq.jdn = this.axr.jdn;
        this.jyq.auj = this.axr.ohr;
        this.jyq.state = this.axr.rwo;
        if (this.jyq.win > 0) {
            this.jyq.pzk.iis(this.axr.fmq, this.axr.wdx)
        }
        this.yik();
        this.jyq.mca(this.axr.wdx);
        this.jyq.mlp(this.axr.zwo)
    };
    this.qeo = function() {
        this.jyq.eqm = this.axr.eqm;
        this.jyq.win = this.axr.win;
        this.jyq.state = this.axr.rwo;
        this.jyq.pzk.iis(this.axr.fmq, this.axr.wdx);
        this.yik();
        this.jyq.ezc();
        this.jyq.mlp(this.axr.zwo)
    };
    this.woa = function() {
        this.jyq.eqm = this.axr.eqm;
        this.jyq.win = this.axr.win;
        this.jyq.state = this.axr.rwo;
        this.yik();
        this.jyq.tne();
        this.jyq.mlp(this.axr.zwo)
    };
    this.khv = function() {
        this.jyq.eqm = this.axr.eqm;
        this.jyq.win = this.axr.win;
        this.jyq.state = this.axr.rwo;
        this.jyq.pzk.iis(this.axr.fmq, this.axr.wdx);
        this.yik();
        this.jyq.dai(this.axr.wdx);
        this.jyq.mlp(this.axr.zwo)
    };
    this.ykn = function() {
        this.jyq.eqm = this.axr.eqm;
        this.jyq.win = this.axr.win;
        this.jyq.state = this.axr.rwo;
        this.yik();
        this.jyq.qrs(this.axr.ldw);
        this.jyq.mlp(this.axr.zwo)
    };
    this.lha = function() {
        this.jyq.eqm = this.axr.eqm;
        this.jyq.win = this.axr.win;
        this.jyq.state = this.axr.rwo;
        this.jyq.pzk.iis(this.axr.fmq, this.axr.wdx);
        this.yik();
        this.jyq.ues(this.axr.ldw);
        this.jyq.mlp(this.axr.zwo)
    };
    this.yik = function() {
        this.jyq.zhd = this.axr.zhd
    }
}
uam.prototype = new iyy;

function jig() {
    var a = this;
    this.wgy = false;
    this.ffh = null;
    this.odj = null;
    this.pqm = false;
    this.aed = -1;
    this.aou = 0;
    this.lyn = null;
    this.uim = 800;
    this.wdl = 0;
    this.zbu = null;
    this.ocl = null;
    this.qdu = null;
    this.twa = null;
    this.aof = null;
    this.ssv = null;
    this.ikj = new kyc();
    this.eod = new kyc();
    this.bpc = 30;
    this.lya = function(b, d, c) {
        jig.prototype.lya.call(this, b, d, c);
        this.pcj()
    };
    this.dgs = function(c, b) {
        try {
            this.bpc = c.ypi;
            this.ikj = c.shk;
            this.eod = c.tzz;
            this.esp(c);
            this.yzm(c);
            this.wef(c);
            this.gds(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.nxv = function(f) {
        try {
            var c = {},
                b = this.odj.drl("info"),
                m = this.odj.drl("creditd"),
                l = this.odj.drl("betd"),
                k = this.odj.ovp("buttons");
            if (this.parent.rap() != null) {
                c = f.wbn
            } else {
                if (jyv.dwe.value57 === jyv.ui.hgy) {
                    c = f.bvu
                } else {
                    if (jyv.dwe.value57 === jyv.ui.zgh) {
                        c = f.bts
                    } else {
                        if (jyv.dwe.value57 === jyv.ui.nsj) {
                            c = f.gbw
                        }
                    }
                }
            }
            this.bpc = f.ypi;
            this.ikj = f.shk;
            this.eod = f.tzz;
            if (m) {
                m.nxv(f.display);
                m.dho(f.crs)
            }
            if (l) {
                l.nxv(f.display);
                l.dho(f.jws)
            }
            if (b) {
                b.nxv(f.hyp);
                b.dho(f.hyp.ebf)
            }
            this.yzp();
            for (var d = 0, g = k.length; d < g; d++) {
                if (k[d] instanceof mlm) {
                    k[d].nxv(f.whw)
                }
            }
            if (this.parent.rap() != null) {
                this.odj.iiz("astart", "#nxv", [f.uwa]);
                if (this.parent.tuu() === true) {
                    this.odj.iiz("start", "#nxv", [f.uwa])
                } else {
                    this.odj.iiz("start", "#nxv", [f.vda])
                }
            } else {
                this.odj.iiz("start", "#nxv", [f.vda]);
                if (jyv.dwe.value57 === jyv.ui.hgy) {
                    this.odj.iiz("astart", "#nxv", [f.vda])
                }
            }
            this.odj.iiz("start", "#dho", [c.gfb]);
            this.odj.iiz("astart", "#dho", [c.dcu]);
            this.odj.iiz("bet", "#dho", [c.vbd]);
            this.odj.iiz("gamble", "#dho", [c.nhm]);
            this.odj.iiz("exit", "#dho", [c.elh]);
            this.odj.iiz("lang", "#dho", [c.vzr]);
            this.odj.iiz("setting", "#dho", [c.jfr])
        } catch (j) {
            console.error(j)
        }
    };
    this.gds = function(f) {
        try {
            var k = this.odj.drl("info"),
                c = this.odj.ovp("displays"),
                g = this.odj.ovp("buttons");
            this.ocl = f.backgroundColor;
            this.qdu = f.our;
            this.aof = f.sme;
            this.ssv = f.fhj;
            if (k) {
                k.gds(f.hyp)
            }
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].gds(f.wqt)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].gds(f.display)
            }
            this.yzp()
        } catch (j) {
            console.error(j)
        }
    };
    this.itu = function(o, n, p) {
        var m = this.odj.ovp("buttons"),
            d = this.odj.drl("bet"),
            b = this.odj.drl("start"),
            k = this.odj.drl("betd"),
            c = this.odj.drl("creditd");
        phh = this.parent.cwl.drl("betsel"), vwi = o - this.x, hru = n - this.y;
        for (var g = 0, l = m.length; g < l; g++) {
            var e = m[g];
            if (vwi >= e.x && vwi <= e.x + e.width && hru >= e.y && hru <= e.y + e.height && e.fam() == true) {
                if (e.knh() && !e.gpy()) {
                    if (e === d) {
                        e.xgo(true, true, false);
                        for (var f = 0; f < l; f++) {
                            m[f].bco(true, false)
                        }
                        e.fyd();
                        this.lyn = function() {
                            if (e.fyd() === true) {
                                clearInterval(a.aou);
                                e.xgo(false, true);
                                for (var i = 0; i < l; i++) {
                                    m[i].bco(false)
                                }
                            }
                        };
                        this.aou = setInterval(this.lyn, e.wpo)
                    } else {
                        if (e === b && b.fyd === this.whb) {
                            e.xgo(true, true, false)
                        } else {
                            e.xgo(true, true)
                        }
                        e.fyd();
                        for (var f = 0; f < l; f++) {
                            m[f].bco(true)
                        }
                    }
                    return true
                }
            }
        }
        if (d && d.knh() && !d.gpy()) {
            if (k && vwi >= k.x && vwi <= k.x + k.width && hru >= k.y && hru <= k.y + k.height) {
                if (!p) {
                    if (phh && phh.knh()) {
                        this.parent.txy()
                    }
                    return true
                }
            } else {
                if (c && vwi >= c.x && vwi <= c.x + c.width && hru >= c.y && hru <= c.y + c.height) {
                    if (!p) {
                        this.parent.phu()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.hlp = function() {
        var f = this.odj.ovp("buttons"),
            k = this.odj.drl("bet"),
            g = this.odj.drl("start");
        for (var d = 0, b = f.length; d < b; d++) {
            var e = f[d];
            if (e.wlo() === true) {
                e.xgo(false, true);
                if (e === k) {
                    clearInterval(this.aou);
                    for (var c = 0; c < b; c++) {
                        f[c].bco(false)
                    }
                } else {
                    if (e === g && g.fyd === this.whb) {
                        clearTimeout(this.wdl);
                        a.parent.nej.ckk("auto_fill");
                        this.odj.iiz("start", "#rvc")
                    }
                }
                return true
            }
        }
        return false
    };
    this.ykf = function(g) {
        var f = this.odj.ovp("buttons"),
            k = this.odj.drl("bet");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (g == d.lfi) {
                if (d.knh() && !d.gpy()) {
                    d.xgo(true, true);
                    d.fyd();
                    for (var c = 0; c < b; c++) {
                        f[c].bco(true)
                    }
                }
                return true
            }
        }
        if (g == this.parent.sbz.izc.xbc) {
            if (k && k.knh() && !k.gpy()) {
                this.parent.gla();
                for (var c = 0, b = f.length; c < b; c++) {
                    f[c].bco(true)
                }
            }
            return true
        }
        return false
    };
    this.ovz = function() {
        var e = this.odj.ovp("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.wlo() == true) {
                c.xgo(false, true);
                return true
            }
        }
        return false
    };
    this.cfw = function(l, k, m) {
        var j = this.odj.ovp("buttons"),
            c = this.odj.drl("bet");
        if (l != null && k != null) {
            var e = l - this.x;
            var d = k - this.y;
            for (var f = 0, g = j.length; f < g; f++) {
                var b = j[f];
                if (e >= b.x && e <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.fam() && b.knh() && !b.gpy()) {
                    return b.fyd
                }
            }
        } else {
            if (m != null) {
                for (var f = 0, g = j.length; f < g; f++) {
                    var b = j[f];
                    if (m == b.lfi && b.fam() && b.knh() && !b.gpy()) {
                        return b.fyd
                    }
                }
                if (m == this.parent.sbz.izc.xbc && c && c.fam() && c.knh() && !c.gpy()) {
                    return this.parent.gla
                }
            }
        }
        return null
    };
    this.pcj = function() {
        this.odj = new chu();
        this.odj.lya();
        this.odj.mwi("displays");
        this.odj.mwi("buttons");
        this.odj.mwi("allbuttons");
        this.odj.mwi("infos");
        this.odj.mwi("start");
        this.odj.mwi("collect");
        this.odj.mwi("game");
        this.odj.mwi("hold");
        this.odj.mwi("settings")
    };
    this.wef = function(b) {
        var c = this.xdy(b.hyp.ebf);
        c.nxv(b.hyp);
        this.odj.wvv("info", c, ["infos"])
    };
    this.esp = function(c) {
        var b = {};
        if (this.parent.rap() != null) {
            b = c.wbn
        } else {
            if (jyv.dwe.value57 === jyv.ui.hgy) {
                b = c.bvu
            } else {
                if (jyv.dwe.value57 === jyv.ui.zgh) {
                    b = c.bts
                } else {
                    if (jyv.dwe.value57 === jyv.ui.nsj) {
                        b = c.gbw
                    }
                }
            }
        }
        if (this.parent.rap() != null) {
            this.odj.wvv("astart", this.oqt(b.dcu, this.parent.language.mtf, "---", this.parent.nej.pvr("btn_s"), this.parent.vak, (!this.parent.gmj) ? this.parent.sbz.ldn : null, c.uwa), ["buttons", "allbuttons", "start", "collect", "hold"]);
            if (this.parent.tuu() === true) {
                this.odj.wvv("start", this.oqt(b.gfb, (this.parent.bxp.hxm === false) ? this.parent.language.start : null, "---", (this.parent.bxp.hxm === false) ? this.parent.nej.pvr("btn") : this.parent.nej.pvr("btn_dl"), (this.parent.tuu() === true) ? this.whb : this.parent.szh, (!this.parent.gmj) ? this.parent.sbz.start : null, c.uwa), ["buttons", "allbuttons", "start", "collect", "hold"])
            } else {
                this.odj.wvv("start", this.sja(b.gfb, (this.parent.bxp.hxm === false) ? this.parent.language.start : null, (this.parent.bxp.hxm === false) ? this.parent.nej.pvr("btn") : this.parent.nej.pvr("btn_dl"), (this.parent.tuu() === true) ? this.whb : this.parent.szh, (!this.parent.gmj) ? this.parent.sbz.start : null, c.vda), ["buttons", "allbuttons", "start", "collect", "hold"])
            }
        } else {
            this.odj.wvv("start", this.sja(b.gfb, (this.parent.bxp.hxm === false) ? this.parent.language.start : null, (this.parent.bxp.hxm === false) ? this.parent.nej.pvr("btn") : this.parent.nej.pvr("btn_dl"), (this.parent.tuu() === true) ? this.whb : this.parent.szh, (!this.parent.gmj) ? this.parent.sbz.start : null, c.vda), ["buttons", "allbuttons", "start", "collect", "hold"]);
            this.odj.wvv("astart", this.sja(b.dcu, this.parent.language.ldn, (jyv.dwe.value57 === jyv.ui.hgy) ? this.parent.nej.pvr("btn") : this.parent.nej.pvr("btn_s"), this.parent.vak, (!this.parent.gmj) ? this.parent.sbz.ldn : null, c.whw), ["buttons", "allbuttons", "start", "collect", "game", "hold"])
        }
        this.odj.wvv("bet", this.sja(b.vbd, this.parent.language.ssy, this.parent.nej.pvr("btn_s"), this.parent.xps, (!this.parent.gmj) ? this.parent.sbz.qqc : null, c.whw), ["buttons", "allbuttons"]);
        this.odj.drl("bet").wpo = 300;
        this.odj.wvv("gamble", this.sja(b.nhm, this.parent.language.ytt, this.parent.nej.pvr("btn_s"), this.parent.sao, (!this.parent.gmj) ? this.parent.sbz.ytt : null, c.whw), ["buttons", "allbuttons", "start", "game", "collect", "hold"]);
        if (this.parent.rap() != null) {
            this.odj.wvv("exit", this.sja(b.elh, (this.parent.bxp.hxm === true) ? null : (jyv.dwe.value50.g === true) ? this.parent.language.qhz : this.parent.language.ujz, (this.parent.bxp.hxm === false) ? this.parent.nej.pvr("btn_s") : this.parent.nej.pvr("btn_e"), this.parent.mnz, (!this.parent.gmj) ? this.parent.sbz.tpf : null, c.whw), ["buttons", "allbuttons", "collect"])
        } else {
            if (jyv.dwe.value57 !== jyv.ui.nsj) {
                this.odj.wvv("exit", this.sja(b.elh, (this.parent.bxp.hxm === true) ? null : (jyv.dwe.value50.g === true) ? this.parent.language.qhz : this.parent.language.ujz, (this.parent.bxp.hxm === false) ? this.parent.nej.pvr("btn_s") : this.parent.nej.pvr("btn_e"), this.parent.mnz, (!this.parent.gmj) ? this.parent.sbz.tpf : null, c.whw), ["buttons", "allbuttons", "collect"])
            }
            if (jyv.dwe.value57 !== jyv.ui.hgy && this.parent.rap() == null) {
                this.odj.wvv("lang", this.tzx(b.vzr, this.parent.qgk(sessionStorage.sessionValue1), this.parent.dfi, (!this.parent.gmj) ? this.parent.sbz.language : null), ["buttons", "allbuttons", "hold"])
            }
        }
        this.odj.wvv("setting", this.sja(b.jfr, null, (this.parent.bxp.hxm === true) ? this.parent.nej.pvr("btn_m") : this.parent.nej.pvr("btn_s"), this.parent.lja, null, c.whw), ["buttons", "settings"])
    };
    this.yzm = function(c) {
        var b = this.parent.nej.pvr("display_effect");
        this.odj.wvv("creditd", this.rlh(c.crs, (this.parent.vtm()) ? this.parent.language.trm : this.parent.language.eqm, this.parent.bug(this.parent.eqm), b, c.display), ["displays"]);
        this.odj.wvv("betd", this.rlh(c.jws, this.parent.language.ssy, this.parent.bug(this.parent.totalBet), b, c.display), ["displays"])
    };
    this.ypf = function() {
        if (this.aed == 1) {
            this.pwt(this.pqm)
        } else {
            if (this.aed == 2) {
                this.zuq(this.pqm)
            } else {
                if (this.aed == 3) {
                    this.oza(this.pqm)
                } else {
                    if (this.aed == 4) {
                        this.tlj(this.pqm)
                    } else {
                        if (this.aed == 5) {
                            this.ujb(this.pqm)
                        } else {
                            if (this.aed == 6) {
                                this.zno(this.pqm)
                            }
                        }
                    }
                }
            }
        }
    };
    this.pwt = function(d) {
        var c = this.odj.ovp("allbuttons"),
            e = 0,
            b = 0;
        this.pqm = d;
        this.aed = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].qhj(d)
        }
    };
    this.zuq = function(d) {
        var c = this.odj.ovp("allbuttons"),
            f = this.odj.ovp("start"),
            e = 0,
            b = 0;
        this.pqm = d;
        this.aed = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].qhj(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].qhj(d)
        }
    };
    this.oza = function(d) {
        var c = this.odj.ovp("allbuttons"),
            f = this.odj.ovp("game"),
            e = 0,
            b = 0;
        this.pqm = d;
        this.aed = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].qhj(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].qhj(d)
        }
    };
    this.tlj = function(d) {
        var c = this.odj.ovp("allbuttons"),
            f = this.odj.ovp("hold"),
            e = 0,
            b = 0;
        this.pqm = d;
        this.aed = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].qhj(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].qhj(d)
        }
    };
    this.ujb = function(d) {
        var c = this.odj.ovp("allbuttons"),
            f = (this.wgy === true) ? this.odj.ovp("collect") : this.odj.ovp("start"),
            e = 0,
            b = 0;
        this.pqm = d;
        this.aed = 5;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].qhj(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].qhj(d)
        }
    };
    this.zno = function(e) {
        var c = this.odj.ovp("allbuttons"),
            d = this.odj.ovp("settings"),
            f = 0,
            b = 0;
        this.pqm = e;
        this.aed = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].qhj(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].qhj(e)
        }
    };
    this.rlh = function(c, g, f, e, b) {
        var d = new faq();
        d.lya(c, this.context2D, null, g, f);
        d.parent = this;
        d.ugy = e;
        d.nxv(b);
        return d
    };
    this.sja = function(e, i, g, f, c, d) {
        var b = new mlm();
        b.lya(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.fyd = f;
        b.nxv(d);
        if (c) {
            b.lfi = c.xbc
        }
        return b
    };
    this.oqt = function(e, j, g, i, f, c, d) {
        var b = new mlm();
        b.lya(e, this.context2D, null, i, null, j);
        b.parent = this;
        b.fyd = f;
        b.value = g;
        b.nxv(d);
        if (c) {
            b.lfi = c.xbc
        }
        return b
    };
    this.tzx = function(d, f, e, c) {
        var b = new fkg();
        b.lya(d, this.context2D, null, f, null);
        b.parent = this;
        b.fyd = e;
        if (c) {
            b.lfi = c.xbc
        }
        return b
    };
    this.xdy = function(b) {
        var c = new tuo();
        c.lya(b, this.context2D);
        c.parent = this;
        return c
    };
    this.tlr = function(c, b) {
        var d = this.odj.drl("info");
        if (d) {
            d.urj(b);
            d.cdy(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.aou)
    };
    this.yzp = function() {
        var b = this.context2D;
        b.save();
        if (this.ocl != null) {
            var f = b.createLinearGradient(this.ikj.x, this.ikj.y, this.ikj.x, this.ikj.y + this.ikj.height);
            f.addColorStop(0, this.ocl);
            b.fillStyle = f;
            b.fillRect(this.ikj.x, this.ikj.y, this.ikj.width, this.ikj.height)
        }
        if (this.qdu != null) {
            var f = b.createLinearGradient(this.ikj.x, this.ikj.y, this.ikj.x, this.ikj.y + this.bpc);
            f.addColorStop(0, this.qdu);
            f.addColorStop(1, this.ocl);
            b.fillStyle = f;
            b.fillRect(this.ikj.x, this.ikj.y, this.ikj.width, this.bpc)
        }
        if (this.ffh != null) {
            b.drawImage(this.ffh, this.ikj.x, this.ikj.y, this.ikj.width, this.ikj.height)
        }
        if (this.eod && this.eod.width > 0 && this.eod.height > 0) {
            var f = b.createLinearGradient(this.eod.x, this.eod.y, this.eod.x + this.eod.width, this.eod.y),
                c = this.parent.nej.pvr("btn_back");
            f.addColorStop(0.2, this.aof);
            f.addColorStop(1, this.ssv);
            b.fillStyle = f;
            if (this.parent.osh === jyv.bxp.jdb) {
                b.fillRect(this.eod.x, this.eod.y, this.eod.width, this.eod.height);
                if (c) {
                    b.drawImage(c, this.eod.x, this.eod.y, this.eod.width, this.eod.height)
                }
            } else {
                if (this.parent.osh === jyv.bxp.aqn) {
                    b.save();
                    b.translate(this.eod.width / 2, this.eod.height / 2);
                    b.rotate(Math.PI);
                    b.translate(-this.eod.width / 2, -this.eod.height / 2);
                    b.fillRect(this.eod.x, this.eod.y, this.eod.width, this.eod.height);
                    if (c) {
                        b.drawImage(c, this.eod.x, this.eod.y, this.eod.width, this.eod.height)
                    }
                    b.restore()
                }
            }
        }
        try {
            this.zbu = b.getImageData(0, 0, this.width, this.height)
        } catch (d) {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
            this.zbu = b.getImageData(0, 0, this.width, this.height)
        }
        b.clearRect(0, 0, this.width, this.height);
        b.restore()
    };
    this.spt = function(k, g, l, e) {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        var c = (k != null && g != null && l != null && e != null),
            j = (c === true) ? new kyc(k, g, l, e) : new kyc(this.x, this.y, this.width, this.height),
            m = this.context2D,
            b = this.odj.bke();
        m.save();
        if (c) {
            m.beginPath();
            m.rect(k, g, l, e);
            m.closePath();
            m.clip()
        }
        if (this.zbu != null) {
            m.putImageData(this.zbu, 0, 0)
        }
        for (var d = 0, f = b.length; d < f; d++) {
            b[d].spt()
        }
        if (this.parent.jxm === true && this.parent.tuu() === false) {
            this.parent.wec(m, j)
        }
        m.restore();
        if (this.lub && this.tgs) {
            if (c) {
                this.lub.drawImage(this.tgs, k, g, l, e, this.x + k, this.y + g, l, e)
            } else {
                this.lub.drawImage(this.tgs, this.x, this.y)
            }
        }
    };
    this.whb = function() {
        if (a.parent.ldn === true) {
            a.parent.vak()
        } else {
            a.parent.szh();
            if (a.parent.rsc() === true) {
                a.parent.nej.ddz("auto_fill");
                a.odj.iiz("start", "#olh", [a.uim]);
                a.wdl = setTimeout(a.srz, a.uim)
            }
        }
    };
    this.srz = function() {
        a.parent.vak();
        a.odj.iiz("start", "#fuz")
    }
}
jig.prototype = new srr;

function epk() {
    var a = this;
    this.vmc = 0;
    this.oxz = 1;
    this.eek = 7;
    this.fxv = 0;
    this.zoy = 0;
    this.gww = 0;
    this.bsh = 0;
    this.cpa = this.vmc;
    this.usr = this.jcw;
    this.tvx = function() {
        this.zgu(true);
        this.lgg = true;
        this.pqm = false;
        this.cpa = this.vmc;
        this.zoy = Math.floor(this.width / this.eek);
        this.bsh = 0;
        this.gww = 0
    };
    this.uqk = function() {
        this.lgg = true;
        this.pqm = false;
        this.cpa = this.oxz;
        this.zoy = -Math.floor(this.width / this.eek);
        this.bsh = 1;
        this.gww = this.width
    };
    this.yfh = function() {
        if (a.bsh < a.eek) {
            a.gww += a.zoy;
            a.bsh++;
            return true
        } else {
            a.lgg = false;
            a.pqm = true;
            if (a.cpa == a.oxz) {
                a.zgu(false)
            }
            return false
        }
    };
    this.ddz = function() {
        if (this.kuz == this.skb) {
            this.parent.nej.ddz("maxstep")
        } else {
            this.parent.nej.ddz("step" + (this.kuz % 12))
        }
    };
    this.tqe = function() {
        a.tlt = false
    };
    this.spt = function() {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        this.ahc();
        if (this.lub && this.tgs) {
            if (this.lgg) {
                if (this.gww > 0) {
                    if (this.usr == this.tac) {
                        this.lub.drawImage(this.tgs, this.width - this.gww, 0, this.gww, this.height, this.x, this.y, this.gww, this.height)
                    } else {
                        if (this.usr == this.jcw) {
                            this.lub.drawImage(this.tgs, 0, 0, this.gww, this.height, this.x + this.width - this.gww, this.y, this.gww, this.height)
                        }
                    }
                }
            } else {
                this.lub.drawImage(this.tgs, this.x, this.y)
            }
        }
    };
    this.ugs = function(c) {
        var f = this.gyy,
            e = this.gyy,
            b = 0,
            d = 0;
        if (this.usr == this.jcw) {
            b = this.mjo;
            d = this.ycg.x - 2 * this.mjo
        } else {
            if (this.usr == this.tac) {
                b = this.ycg.x + this.ycg.width + this.mjo;
                d = this.width - this.mjo - (this.ycg.x + this.ycg.width + this.mjo)
            }
        }
        if (this.kuz > 0 && this.kuz < this.soo.length - 1) {
            jyv.oot.jbx(c, b, this.ycg.y + ((this.mli - this.ohz) * this.yxs), d, this.yxs, this.dqe, this.bvs);
            jyv.oot.gnh(c, this.parent.sac(this.soo[this.kuz]), this.nge, b, this.ycg.y + ((this.mli - this.ohz) * this.yxs) + (this.yxs - this.xvu) / 2, d, this.xvu, this.shb, this.xvu, this.iuq, this.mjo)
        } else {
            if (this.kuz == 0) {
                f = this.nge
            } else {
                if (this.kuz == this.soo.length - 1) {
                    e = this.nge
                }
            }
        }
        jyv.oot.jbx(c, b, this.ycg.y + (this.yxs * (this.mli - 1)), d, this.yxs, this.dqe, this.bvs);
        jyv.oot.gnh(c, this.parent.sac(this.soo[0]), f, b, this.ycg.y + (this.yxs * (this.mli - 1)) + (this.yxs - this.xvu) / 2, d, this.xvu, this.shb, this.xvu, this.iuq, this.mjo);
        jyv.oot.jbx(c, b, this.ycg.y, d, this.yxs, this.dqe, this.bvs);
        jyv.oot.gnh(c, this.parent.sac(this.soo[this.soo.length - 1]), e, b, this.ycg.y + (this.yxs - this.xvu) / 2, d, this.xvu, this.shb, this.xvu, this.iuq, this.mjo);
        jyv.oot.cpn(c, "+", this.gyy, this.iep.x, this.iep.y, this.iep.width, this.iep.height, this.shb, this.xvu, this.iuq);
        jyv.oot.cpn(c, "", this.gyy, this.edh.x, this.edh.y, this.edh.width, this.edh.height, this.shb, this.xvu, this.iuq);
        if (this.xxm) {
            jyv.oot.cpn(c, this.xxm, this.gyy, this.epx.x, this.epx.y, this.epx.width, this.epx.height, this.shb, this.xvu, this.iuq)
        }
    }
}
epk.prototype = new ezo;

function bew() {
    this.ugy = null;
    this.lsp = [];
    this.azy = [];
    this.dzx = [];
    this.shb = "arial";
    this.iuq = "bold";
    this.gyy = "yellow";
    this.xvu = 30;
    this.vbn = 6;
    this.gds = function(a) {
        try {
            this.shb = a.font;
            this.iuq = a.hfp;
            this.gyy = a.vfn
        } catch (b) {
            console.error(b)
        }
    };
    this.nxv = function(a) {
        try {
            this.xvu = a.fontSize;
            this.vbn = a.xrg
        } catch (b) {
            console.error(b)
        }
    };
    this.nhe = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.dzx[b] = c[a - 1 - b]
        }
    };
    this.lvw = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.azy[b] = c[a - 1 - b];
            this.lsp[b] = c[a - 1 - b]
        }
    };
    this.ssh = function(c) {
        for (var b = 0, a = this.azy.length; b < a; b++) {
            this.lsp[b] = this.azy[b] * c
        }
        this.spt()
    };
    this.spt = function() {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        var b = this.context2D,
            g = this.height - 2 * this.vbn,
            c = this.width,
            d = Math.round(g / this.dzx.length),
            f = (this.xvu < d) ? this.xvu : d - 2;
        b.save();
        if (this.ugy != null) {
            b.drawImage(this.ugy, 0, 0)
        }
        for (var e = 0, a = this.dzx.length; e < a; e++) {
            jyv.oot.lop(b, this.dzx[e], this.gyy, 0, this.vbn + d * (e), c, f, this.shb, f, this.iuq, this.vbn)
        }
        for (var e = 0, a = this.lsp.length; e < a; e++) {
            jyv.oot.gnh(b, this.parent.sac(this.lsp[e]), this.gyy, 0, this.vbn + d * (e), c, f, this.shb, f, this.iuq, this.vbn)
        }
        b.restore();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.tgs, this.x, this.y)
        }
    }
}
bew.prototype = new srr;

function peg() {
    this.ugy = null;
    this.ioj = [];
    this.pqm = false;
    this.lsp = false;
    this.ccw = false;
    this.bpo = false;
    this.jdq = true;
    this.fxh = -1;
    this.ius = null;
    this.zbu = null;
    this.shb = "arial";
    this.iuq = "bold";
    this.ppe = "yellow";
    this.mev = "yellow";
    this.gyy = "yellow";
    this.xvu = 18;
    this.gdf = 0;
    this.drc = 0;
    this.rml = 20;
    this.vju = 0;
    this.gds = function(a) {
        try {
            this.shb = a.font;
            this.iuq = a.hfp;
            this.ppe = a.yng;
            this.mev = a.ulc;
            this.gyy = a.vfn
        } catch (b) {
            console.error(b)
        }
    };
    this.nxv = function(a) {
        try {
            this.xvu = a.fontSize;
            this.gdf = a.iut;
            this.drc = a.nso;
            this.rml = a.ial;
            this.vju = a.avc;
            this.jdq = a.poh
        } catch (b) {
            console.error(b)
        }
    };
    this.itu = function(a, b) {
        if (a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height && this.fam() === true) {
            if (this.knh() === true) {
                this.parent.jyl(this.ccw);
                this.xgo();
                if (this.ccw) {
                    this.parent.nej.ddz("hold")
                } else {
                    this.parent.nej.ddz("unhold")
                }
                return true
            }
        }
        return false
    };
    this.hlp = function() {};
    this.ykf = function() {};
    this.ovz = function() {};
    this.qhj = function(a) {
        this.pqm = a
    };
    this.knh = function() {
        return this.pqm
    };
    this.vpw = function(a) {
        if (this.zbu == null) {
            try {
                this.zbu = a.getImageData(this.x, this.y, this.width, this.height)
            } catch (b) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                this.zbu = a.getImageData(this.x, this.y, this.width, this.height)
            }
        }
    };
    this.xgo = function() {
        this.ccw = !this.ccw;
        if (this.ccw) {
            this.ius = this.parent.language.onv;
            this.gyy = this.ppe
        }
        this.spt()
    };
    this.kyr = function(d, e) {
        var a = 0,
            c = false;
        if (d == this.parent.ups) {
            this.fxh = d;
            c = true
        } else {
            if ((a = this.parent.gdq.length) > 0) {
                for (var b = 0; b < a && !c; b++) {
                    if (d == this.parent.gdq[b]) {
                        this.fxh = this.parent.stq[b];
                        c = true
                    }
                }
            }
        }
        if (!c) {
            this.fxh = d
        }
        if (e && e === true) {
            this.spt()
        }
    };
    this.eld = function(a, b) {
        this.ccw = a;
        if (this.ccw) {
            this.ius = this.parent.language.onv;
            this.gyy = this.ppe
        }
        if (b && b === true) {
            this.spt()
        }
    };
    this.hpy = function() {
        return this.ccw
    };
    this.cgt = function(a, b) {
        this.lsp = a;
        if (this.lsp) {
            this.ius = this.parent.language.win;
            this.gyy = this.mev
        }
        if (b && b === true) {
            this.spt()
        }
    };
    this.uqa = function() {
        return this.lsp
    };
    this.drb = function(c, b, a, d) {
        this.bpo = c;
        this.ius = b;
        if (a) {
            this.gyy = a
        }
        if (d && d === true) {
            this.spt()
        }
    };
    this.icg = function() {
        return this.bpo
    };
    this.spt = function() {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.beginPath();
        a.rect(this.x, this.y, this.width, this.height);
        a.closePath();
        a.clip();
        if (this.zbu != null) {
            a.putImageData(this.zbu, this.x, this.y)
        }
        if (this.ugy != null) {
            if (this.ccw || this.lsp) {
                if (this.jdq) {
                    a.drawImage(this.ugy, this.ioj[this.fxh] * this.gdf, 0, this.gdf, this.drc, this.x, this.y + this.rml, this.gdf, this.drc)
                } else {
                    a.drawImage(this.ugy, this.ioj[this.fxh] * this.gdf, 0, this.gdf, this.drc, this.x, this.y, this.gdf, this.drc)
                }
            } else {
                a.drawImage(this.ugy, this.ioj[this.fxh] * this.gdf, 0, this.gdf, this.drc, this.x, this.y + this.vju, this.gdf, this.drc)
            }
        }
        if (this.ccw || this.lsp || this.bpo) {
            b = this.ius
        }
        if (b != null) {
            if (this.jdq) {
                jyv.oot.cpn(a, b, this.gyy, this.x, this.y, this.width, this.rml, this.shb, this.xvu, this.iuq)
            } else {
                jyv.oot.cpn(a, b, this.gyy, this.x, this.y + this.drc, this.width, this.rml, this.shb, this.xvu, this.iuq)
            }
        }
        a.restore()
    }
}
peg.prototype = new srr;
jyv.dze = {
    gal: {
        odo: 0,
        hnw: 1,
        jtx: 2,
        lvr: 3,
        lwu: 4,
        pic: 5,
        qji: 6,
        zqe: 7,
        yjf: 8,
        gur: 9,
        jzq: 10,
        bmh: 11,
        brd: 12,
        ndw: 13,
        kwj: 14,
        kkz: 15,
        crg: 68
    }
};

function rdh() {
    this.zbm = false;
    this.oyu = null;
    this.mjr = null;
    this.wue = null;
    this.xqo = null;
    this.rpk = null;
    this.wwx = [];
    this.gmy = null;
    this.zpr = null;
    this.win = 0;
    this.fym = 0;
    this.fvw = 0;
    this.totalBet = 1000;
    this.tvk = [];
    this.rid = 0;
    this.odb = 0;
    this.eqm = 0;
    this.oya = [];
    this.bkm = [];
    this.ioj = [];
    this.ups = 63;
    this.jdn = -1;
    this.hmo = -1;
    this.xtq = [];
    this.moa = [];
    this.tzv = 0;
    this.cfi = null;
    this.wvj = null;
    this.vzn = null;
    this.pzk = null;
    this.rji = null;
    this.hvt = false;
    this.ytt = false;
    this.nky = false;
    this.yer = false;
    this.jxm = false;
    this.lfy = true;
    this.ldn = false;
    this.pmx = 1;
    this.boq = 0;
    this.trw = 150;
    this.zdv = 150;
    this.qod = 200;
    this.arw = 120;
    this.ztd = 0;
    this.gdq = [];
    this.stq = [];
    this.lpf = true;
    this.efg = true;
    this.bhv = false;
    this.map = 0;
    this.ysk = 0;
    this.wyf = 50;
    this.zjv = 100;
    this.wit = false;
    this.mpy = 0;
    this.tec = 0;
    this.slw = false;
    this.klr = 0;
    this.ymm = 0;
    this.zvc = 2;
    this.rnv = 1;
    this.bsu = false;
    this.auj = 0;
    this.iue = 0;
    this.ors = false;
    this.eab = 0;
    this.uaz = 0;
    this.lpw = 0;
    this.bgh = -1;
    this.wod = 0;
    this.ozp = 0;
    this.wvd = 0;
    this.fzn = true;
    this.ukl = false;
    this.zzh = false;
    this.fri = false;
    this.oaz = true;
    this.aoo = null;
    this.pvk = false;
    this.wgy = true;
    this.zhd = "";
    this.nvp = 0;
    this.rzc = 0;
    this.dlk = 0;
    this.all = 0;
    this.eck = function() {
        var a = new wqm();
        a.lya();
        return a
    };
    this.ppu = function() {
        this.sbz = new wtu()
    };
    this.cnl = function() {
        while (this.fvw < this.tvp()) {
            this.fvw++
        }
        var b = this.cim(this.ors);
        if (this.fvw > b) {
            var a = (b < 0) ? 0 : b;
            this.fvw = a
        }
        this.totalBet = this.tvk[this.fvw];
        this.swy();
        this.jpg();
        this.xoh();
        this.jag()
    };
    this.vgl = function() {
        this.ifh();
        this.kqv();
        this.fmp();
        this.awt();
        if (this.bxp.adz) {
            this.ikt()
        }
        if (this.bxp.wog) {
            this.fxd()
        }
        if (this.bxp.zkn) {
            this.wcm();
            if (!this.bxp.kwn) {
                this.zst()
            }
        }
        if (this.gmj) {
            this.skp()
        } else {
            if (this.bxp.psv) {
                this.rob()
            }
            this.ste();
            if (this.ont()) {
                this.wrh()
            }
            if (this.rap() != null && !this.tuu()) {
                this.wws(this.rap())
            }
        }
        if (!(this.gmj && !this.dbs)) {
            this.jxr();
            this.hrv()
        }
        if (this.bxp.kwn) {
            this.fxr(this.rap())
        }
        this.glh()
    };
    this.rpe = function() {
        if (!this.ncu) {
            if (this.sqm === false) {
                this.pzy.style.marginTop = (-this.height / 2 + this.aqx()) + "px";
                this.pzy.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.pzy.style.left = "0px";
                this.pzy.style.top = "0px";
                this.pzy.style.marginTop = ((this.lvn - this.height) / 2 + this.aqx()) + "px";
                this.pzy.style.marginLeft = ((this.spv - this.width) / 2) + "px"
            }
            this.pzy.style.width = (this.width > this.spv) ? this.spv + "px" : this.width + "px";
            this.pzy.style.height = (this.height > this.lvn) ? this.lvn + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            if (this.thp) {
                this.thp.style.width = this.width + "px";
                this.thp.style.height = this.height + "px"
            }
            this.offsetLeft = this.pzy.offsetLeft;
            this.offsetTop = this.pzy.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.ncu = true
        }
    };
    this.glh = function() {};
    this.wcm = function() {
        rdh.prototype.wcm.call(this);
        var a = this.cwl.drl("topi");
        try {
            if (a) {
                if (jyv.dwe.value57 === jyv.ui.hgy || this.rap() != null) {
                    a.dgr("language", this.nej.pvr("icon_l"), sessionStorage.sessionValue1, [jyv.language.EN, jyv.language.DE, jyv.language.RU, jyv.language.EE, jyv.language.ES, jyv.language.TR, jyv.language.CZ, jyv.language.GR, jyv.language.AT, jyv.language.US, jyv.language.BG, jyv.language.CO, jyv.language.MX, jyv.language.CL, jyv.language.VE, jyv.language.BR, jyv.language.GE, jyv.language.HU, jyv.language.RO, jyv.language.PT, jyv.language.FR, jyv.language.HR, jyv.language.IT, jyv.language.SE])
                }
                if (this.tuu() === false) {
                    a.bpe("help", new String("?"), true)
                }
                if (jyv.dwe.value27 && this.exx) {
                    a.dgr("audio", this.nej.pvr("icon_a"), this.vll[this.pko], this.vll)
                }
                if (sessionStorage.sessionValue14 == "true" && jyv.oot.yls()) {
                    a.bpe("fullscreen", this.nej.pvr("icon_f"), this.aqq)
                }
                if (jyv.dwe.value28 && this.fzn) {
                    a.bpe("turbo", this.nej.pvr("icon_t"), this.ukl)
                }
                a.bpe("auto", this.nej.pvr("icon_as"), this.ldn);
                a.bpe("gamble", this.nej.pvr("icon_g"), this.ytt)
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.zst = function() {
        rdh.prototype.zst.call(this);
        var b = this.cwl.drl("topb");
        try {
            if (b) {
                if (jyv.dwe.value5.length > 1 && (jyv.dwe.value57 === jyv.ui.hgy || this.rap() != null)) {
                    b.ahs("language", this.language.language, this.qgk(jyv.dwe.value5[this.ztr]), this.dfi, this.sbz.language, 0, 1)
                }
                if (jyv.dwe.value27 && this.exx) {
                    b.ahs("audio", this.language.audio, this.nej.pvr("btn_a"), this.ney, this.sbz.audio, this.pko, this.vll.length)
                }
                if (sessionStorage.sessionValue14 == "true" && jyv.oot.yls()) {
                    b.ahs("fullscreen", this.language.aqq, this.nej.pvr("btn_f"), (jyv.oot.zqh) ? this.res : this.njo, this.sbz.aqq, (this.aqq) ? 1 : 0, 2)
                }
                if (jyv.dwe.value28 && this.fzn) {
                    b.ahs("turbo", this.language.ukl, this.nej.pvr("btn_t"), this.nsf, this.sbz.ukl, (this.ukl) ? 1 : 0, 2)
                }
                b.zlo("help", this.language.gdk, this.nej.pvr("btn_p"), this.awu, this.sbz.dqz);
                if (jyv.dwe.value12 && !this.vtm()) {
                    b.zlo("history", this.language.dac, this.nej.pvr("btn_h"), this.kmc, this.sbz.dac)
                }
                if (jyv.dwe.value36 && !this.vtm()) {
                    b.zlo("statistic", this.language.iyc, this.nej.pvr("btn_st"), this.wew, this.sbz.iyc)
                }
                b.yxf()
            }
        } catch (a) {
            console.error(a)
        }
    };
    this.fxr = function(a) {
        rdh.prototype.fxr.call(this, a);
        var b = this.cwl.drl("settings"),
            c = "";
        if (b) {
            b.ahs("language", this.language.language, this.qgk(jyv.dwe.value5[this.ztr]), this.dfi, 0, 1);
            if (jyv.dwe.value27 && this.exx) {
                b.ahs("audio", this.language.audio, this.nej.pvr("btn_a"), this.ney, this.pko, this.vll.length)
            }
            if (sessionStorage.sessionValue14 == "true" && jyv.oot.yls()) {
                b.ahs("fullscreen", this.language.aqq, this.nej.pvr("btn_f"), this.res, (this.aqq) ? 1 : 0, 2)
            }
            if (jyv.dwe.value28 && this.fzn) {
                b.ahs("turbo", this.language.ukl, this.nej.pvr("btn_t"), this.nsf, (this.ukl) ? 1 : 0, 2)
            }
            b.ahs("gamble", this.language.ytt, this.nej.pvr("btn_g"), this.sao, (this.ytt) ? 1 : 0, 2);
            if (this.log[this.dmj] === jyv.lcb.jcw) {
                c = this.language.left
            } else {
                if (this.log[this.dmj] === jyv.lcb.tac) {
                    c = this.language.pfn
                } else {
                    if (this.log[this.dmj] === jyv.lcb.uqg) {
                        c = this.language.tgi
                    }
                }
            }
            b.ahs("adjustment", c, this.nej.pvr("btn_l"), this.yps, (this.osh === jyv.oot.gki) ? 0 : 1, 2);
            b.mdb("help", this.language.dbe, this.nej.pvr("btn_p"), this.awu);
            if (jyv.dwe.value12 && !this.vtm()) {
                b.mdb("history", this.language.dac, this.nej.pvr("btn_h"), this.kmc)
            }
            if (jyv.dwe.value36 && !this.vtm()) {
                b.mdb("statistic", this.language.iyc, this.nej.pvr("btn_st"), this.wew)
            }
            b.bfl = false;
            b.dgs(this.bxp.voz);
            b.nxv(this.bxp.voz);
            b.gds(this.style.voz);
            b.uqd(this.language, false)
        }
    };
    this.ifh = function() {
        this.gmy = new jig();
        this.gmy.parent = this;
        this.gmy.wgy = this.wgy;
        this.gmy.ffh = this.nej.pvr("control_back");
        this.gmy.lya(this.bxp.bxq.ebf, null, this.context2D);
        this.gmy.dgs(this.bxp.bxq, this.style.bxq);
        this.gmy.tlr(this.cfi, 0);
        this.gmy.tlr(this.vzn, 1);
        this.gmy.tlr(this.wvj, 2)
    };
    this.fxd = function() {
        var a = new epk();
        a.lya(this.bxp.phh.ebf, null, this.context2D);
        a.parent = this;
        a.xxm = this.language.ssy;
        a.fyd = this.bpm;
        a.qch = this.sbz.qqc.xbc;
        a.wjg = this.sbz.izc.xbc;
        a.jjd = this.nej.pvr("effect");
        a.nxv(this.bxp.phh);
        a.gds(this.style.srl);
        a.cnl(this.tvk, this.tvp(), this.cim(false));
        a.pxu(this.fvw, false);
        a.zgu(false);
        this.cwl.wvv("betsel", a)
    };
    this.hrv = function() {
        this.zpr.esp(this.bxp.dqz, this.style.dqz, this.nej.pvr("btn_s"))
    };
    this.rob = function() {
        var a = new gwo();
        a.lya(this.bxp.top.ebf, null, this.context2D);
        a.parent = this;
        this.cwl.wvv("tops", a)
    };
    this.kqv = function() {
        this.oyu = new peg();
        this.mjr = new peg();
        this.wue = new peg();
        this.xqo = new peg();
        this.rpk = new peg();
        this.oyu.lya(this.bxp.txd, this.context2D);
        this.mjr.lya(this.bxp.zvh, this.context2D);
        this.wue.lya(this.bxp.mnb, this.context2D);
        this.xqo.lya(this.bxp.wyj, this.context2D);
        this.rpk.lya(this.bxp.qbz, this.context2D);
        this.wwx = [this.oyu, this.mjr, this.wue, this.xqo, this.rpk];
        for (var b = 0, a = this.wwx.length; b < a; b++) {
            this.wwx[b].parent = this;
            this.wwx[b].ugy = this.nej.pvr("cards");
            this.wwx[b].ioj = this.ioj;
            this.wwx[b].kyr(this.ups);
            this.wwx[b].gds(this.style.bac);
            this.wwx[b].nxv(this.bxp.bac)
        }
    };
    this.jxr = function() {
        this.zpr = new urq();
        this.zpr.lya(this.bxp.dqz.ebf, null, this.context2D);
        this.zpr.parent = this;
        this.zpr.fpp(false);
        this.zpr.nxv(this.bxp.dqz);
        this.zpr.gds(this.style.dqz)
    };
    this.fmp = function() {
        var a = new bew();
        a.lya(this.bxp.gdk.ebf, null, this.context2D);
        a.parent = this;
        a.ugy = this.nej.pvr("paytable");
        a.nxv(this.bxp.gdk);
        a.gds(this.style.gdk);
        a.lvw(this.oya);
        a.nhe(this.bkm);
        this.cwl.wvv("paytable", a)
    };
    this.awt = function() {};
    this.ikt = function() {
        var a = new itg();
        a.lya(this.bxp.wdt.ebf, this.context2D, null, this.nej.pvr("winpanel"), "");
        a.parent = this;
        a.nxv(this.bxp.wdt);
        a.gds(this.style.wdt);
        a.zgu(false);
        this.cwl.wvv("winp", a)
    };
    this.skp = function() {
        var a = new qfa();
        a.lya(this.bxp.dac.ebf, null, this.context2D);
        a.parent = this;
        a.dgs(this.bxp.dac);
        a.gds(this.style.dac);
        this.cwl.wvv("history", a)
    };
    this.wcf = function(d, b, c, a, e) {
        this.gsm = true;
        this.state = d;
        this.zwo = b;
        this.jdi = e;
        this.lzv = a;
        clearInterval(this.qmu);
        if (this.exx) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.pko = 0
            }
            if (this.nej.gru === true) {
                this.ios(this.vll[this.pko])
            } else {
                this.kjl((this.vll[this.pko] === 0))
            }
        }
        if (this.vke === true) {
            this.oqf = true
        }
        this.cnl();
        this.vgl();
        this.wuq();
        this.vfu();
        this.pzk.iis(c, a);
        window.jtr(this.hjw)
    };
    this.hjw = function() {
        jyv.dcm.mlp(jyv.dcm.zwo);
        jyv.dcm.hcm = true;
        jyv.dcm.bvm();
        jyv.dcm.spt();
        if (jyv.dcm.vke === true) {
            jyv.dcm.fdi(true)
        }
        if (jyv.oot.fqi === jyv.os.rlm && jyv.oot.cbz !== jyv.ejv.smd) {
            jyv.dcm.tjr([{
                vlp: jyv.eup.iii
            }])
        } else {
            jyv.dcm.ghz(jyv.dcm.state)
        }
        jyv.dcm.uqd();
        if (jyv.dwe.value37 && !jyv.dcm.vtm()) {
            jyv.dcm.noy()
        }
    };
    this.ene = function() {
        this.xwo = new uam().lya(this, jyv.dwe.value6)
    };
    this.tyj = function() {
        this.xwo = new ofg().lya(this, jyv.dwe.value6)
    };
    this.itu = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.oqf) {
            return
        }
        var p = 0,
            o = 0,
            d = false,
            q = false,
            l = false,
            j = this.cwl.drl("loading"),
            b = this.cwl.drl("stats"),
            r = this.cwl.drl("topb"),
            n = this.cwl.drl("topi"),
            a = this.cwl.drl("betsel"),
            m = this.cwl.drl("autop"),
            e = this.cwl.drl("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.cqo) {
                p = g.pageX - this.offsetLeft;
                o = g.pageY - this.offsetTop
            } else {
                p = Math.round((g.pageX - this.offsetLeft) / this.gfl);
                o = Math.round((g.pageY - this.offsetTop) / this.ogw)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.cqo) {
                p = c.pageX - this.offsetLeft;
                o = c.pageY - this.offsetTop
            } else {
                p = Math.round((c.pageX - this.offsetLeft) / this.gfl);
                o = Math.round((c.pageY - this.offsetTop) / this.ogw)
            }
        }
        if (this.gsm === true) {
            if (m && m.fam()) {
                if (m.itu(p, o)) {
                    return
                }
            }
            if (r && r.fam()) {
                if (r.itu(p, o)) {
                    clearTimeout(this.wvd);
                    return
                } else {
                    l = true
                }
            }
            if (a) {
                if (a.fam()) {
                    if (a.itu(p, o, d)) {
                        clearTimeout(this.wvd);
                        return
                    } else {
                        q = true
                    }
                }
            }
            if (l) {
                this.ujv(this.gmy.cfw(p, o, null));
                return
            } else {
                if (q) {
                    if (a && a.knh()) {
                        this.uni(this.gmy.cfw(p, o, null))
                    }
                    return
                }
            }
            if (e && e.fam()) {
                if (e.itu(p, o)) {
                    return
                }
            }
            if (n) {
                if (n.itu(p, o, d)) {
                    return
                }
            }
            if (b && b.fam()) {
                if (b.itu(p, o)) {
                    return
                }
            }
            if (this.zpr && this.zpr.fam()) {
                if (this.zpr.itu(p, o)) {
                    return
                }
            }
            if (this.pzk && this.pzk.fam()) {
                if (this.pzk.itu(p, o)) {
                    return
                }
            }
            if (this.gmy) {
                if (this.gmy.itu(p, o, q)) {
                    return
                }
            }
            if (this.wwx) {
                for (var f = 0, k = this.wwx.length; f < k; f++) {
                    if (this.wwx[f].itu(p, o)) {
                        return
                    }
                }
            }
        } else {
            if (j && j.fam()) {
                if (j.itu(p, o)) {
                    return
                }
            }
        }
    };
    this.hlp = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.oqf) {
            return
        }
        var e = this.cwl.drl("topb"),
            b = this.cwl.drl("betsel"),
            a = this.cwl.drl("autop"),
            c = this.cwl.drl("settings");
        if (this.gsm === true) {
            if (a && a.fam()) {
                if (a.hlp()) {
                    return
                }
            }
            if (b) {
                if (b.hlp()) {
                    return
                }
            }
            if (this.zpr && this.zpr.fam()) {
                if (this.zpr.hlp()) {
                    return
                }
            }
            if (this.pzk && this.pzk.fam()) {
                if (this.pzk.hlp()) {
                    return
                }
            }
            if (this.gmy) {
                if (this.gmy.hlp()) {
                    return
                }
            }
            if (e) {
                if (e.hlp()) {
                    return
                }
            }
            if (c) {
                if (c.hlp()) {
                    return
                }
            }
        }
    };
    this.ykf = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.oqf) {
            return
        }
        var f = false,
            c = false,
            e = this.cwl.drl("topb"),
            b = this.cwl.drl("betsel"),
            a = this.cwl.drl("autop");
        if (a && a.fam()) {
            if (a.ykf(d.keyCode)) {
                return
            }
        }
        if (e) {
            if (e.ykf(d.keyCode)) {
                clearTimeout(this.wvd);
                return
            } else {
                if (e.fam() && e.knh()) {
                    c = true
                }
            }
        }
        if (b) {
            if (b.fam()) {
                if (b.ykf(d.keyCode)) {
                    clearTimeout(this.wvd);
                    return
                } else {
                    f = true
                }
            }
        }
        if (c) {
            this.ujv(this.gmy.cfw(null, null, d.keyCode));
            return
        } else {
            if (f) {
                if (b && b.knh()) {
                    this.uni(this.gmy.cfw(null, null, d.keyCode))
                }
                return
            }
        }
        if (this.zpr && this.zpr.fam()) {
            if (this.zpr.ykf(d.keyCode)) {
                return
            }
        }
        if (this.pzk && this.pzk.fam()) {
            if (this.pzk.ykf(d.keyCode)) {
                return
            }
        }
        if (this.gmy) {
            if (this.gmy.ykf(d.keyCode)) {
                return
            }
        }
    };
    this.ovz = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.oqf) {
            return
        }
        var a = this.cwl.drl("autop"),
            c = this.cwl.drl("topb");
        if (a && a.fam()) {
            if (a.ovz()) {
                return
            }
        }
        if (this.zpr && this.zpr.fam()) {
            if (this.zpr.ovz()) {
                return
            }
        }
        if (this.pzk && this.pzk.fam()) {
            if (this.pzk.ovz()) {
                return
            }
        }
        if (this.gmy) {
            if (this.gmy.ovz()) {
                return
            }
        }
        if (c) {
            if (c.ovz()) {
                return
            }
        }
    };
    this.tuu = function() {
        return (jyv.oot.nxu() && !this.gmj)
    };
    this.okd = function() {
        return (jyv.oot.nxu() && !this.dbs)
    };
    this.arp = function(a) {
        this.bxp = this.ufw(a);
        this.width = this.bxp.canvas.ebf.width;
        this.height = this.bxp.canvas.ebf.height;
        this.djc()
    };
    this.gyg = function() {
        this.style = new wuf()
    };
    this.ufw = function(a) {
        this.osh = a;
        if (a == jyv.bxp.qjs) {
            return new qeh()
        } else {
            if (a == jyv.bxp.uxs) {
                return new kht()
            } else {
                if (a == jyv.bxp.zgh) {
                    return new yri()
                } else {
                    if (a == jyv.bxp.eyw) {
                        return new cdj()
                    } else {
                        if (a == jyv.bxp.gsf) {
                            return new eza()
                        } else {
                            if (a == jyv.bxp.hsg) {
                                return new bsr()
                            } else {
                                if (a == jyv.bxp.mqa) {
                                    return new jet()
                                } else {
                                    if (a == jyv.bxp.udj) {
                                        return new rwr()
                                    } else {
                                        if (a == jyv.bxp.she) {
                                            return new sws()
                                        } else {
                                            if (a == jyv.bxp.aqn) {
                                                return new npa()
                                            } else {
                                                if (a == jyv.bxp.jdb) {
                                                    return new yga()
                                                }
                                            }
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
    this.djc = function() {};
    this.glq = function(a) {
        if (this.ncu) {
            this.rcv();
            this.pga(a)
        } else {
            this.tfh()
        }
    };
    this.rcv = function() {
        this.canvas.width = 0;
        if (this.sqm === false) {
            this.pzy.style.marginTop = (-this.height / 2 + this.aqx()) + "px";
            this.pzy.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.pzy.style.left = "0px";
            this.pzy.style.top = "0px";
            this.pzy.style.marginTop = ((this.lvn - this.height) / 2 + this.aqx()) + "px";
            this.pzy.style.marginLeft = ((this.spv - this.width) / 2) + "px"
        }
        this.pzy.style.width = (this.width > this.spv) ? this.spv + "px" : this.width + "px";
        this.pzy.style.height = (this.height > this.lvn) ? this.lvn + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.thp) {
            this.thp.style.width = this.width + "px";
            this.thp.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.pga = function(a) {
        this.kpv();
        this.fmv();
        this.ymn();
        this.gna();
        if (!(this.gmj && !this.dbs)) {
            this.cgf()
        }
        if (!this.gmj) {
            if (this.bxp.psv) {
                if (this.cwl.drl("tops")) {
                    this.zuf()
                } else {
                    this.rob()
                }
            } else {
                this.cwl.htk("tops")
            }
            this.dmo();
            this.kob();
            if (this.ont()) {
                this.mtd()
            }
        } else {
            this.skp()
        }
        if (this.bxp.adz) {
            this.vws()
        }
        if (this.bxp.wog) {
            this.lxu()
        }
        if (this.bxp.zkn) {
            this.nbs();
            if (!this.bxp.kwn) {
                this.pkl()
            }
        }
        if (this.bxp.kwn) {
            this.eof()
        }
        this.oov();
        if (a) {
            this.cjd()
        }
    };
    this.kpv = function() {
        if (this.gmy) {
            this.gmy.dho(this.bxp.bxq.ebf);
            this.gmy.nxv(this.bxp.bxq)
        }
    };
    this.pkl = function() {
        rdh.prototype.pkl.call(this);
        var b = this.cwl.drl("topb");
        if (b) {
            if (this.oaz) {
                var a = b.odj.drl("help");
                if (a) {
                    a.qhj(!this.bxp.psv)
                }
            }
        }
    };
    this.lxu = function() {
        var a = this.cwl.drl("betsel");
        if (a) {
            a.dho(this.bxp.phh.ebf);
            a.nxv(this.bxp.phh)
        }
    };
    this.fmv = function() {
        if (this.oyu) {
            this.oyu.dho(this.bxp.txd)
        }
        if (this.mjr) {
            this.mjr.dho(this.bxp.zvh)
        }
        if (this.wue) {
            this.wue.dho(this.bxp.mnb)
        }
        if (this.xqo) {
            this.xqo.dho(this.bxp.wyj)
        }
        if (this.rpk) {
            this.rpk.dho(this.bxp.qbz)
        }
        for (var b = 0, a = this.wwx.length; b < a; b++) {
            this.wwx[b].nxv(this.bxp.bac)
        }
    };
    this.vws = function() {
        var a = this.cwl.drl("winp");
        if (a) {
            a.dho(this.bxp.wdt.ebf);
            a.nxv(this.bxp.wdt)
        }
    };
    this.cgf = function() {
        if (this.zpr) {
            this.zpr.dho(this.bxp.dqz.ebf);
            this.zpr.nxv(this.bxp.dqz)
        }
    };
    this.zuf = function() {
        var a = this.cwl.drl("tops");
        if (a) {
            a.dho(this.bxp.top.ebf);
            a.zgu(this.bxp.psv)
        }
    };
    this.ymn = function() {
        var a = this.cwl.drl("paytable");
        if (a) {
            a.dho(this.bxp.gdk.ebf);
            a.nxv(this.bxp.gdk)
        }
    };
    this.gna = function() {};
    this.oov = function() {};
    this.cjd = function() {
        if (this.cwl.drl("tops")) {
            this.zpr.ild(true);
            this.qzl();
            if (this.zpr.anh() == 0) {
                this.bjx()
            }
        } else {
            this.lvj = null;
            this.zpr.hgc(this.rja, true)
        }
        this.zpr.koq()
    };
    this.swy = function() {
        this.cfi = [];
        if (this.vtm() === false && this.zhd != "") {
            this.cfi.push(this.zhd)
        }
        this.cfi.push(this.language.aeg);
        this.cfi.push(this.language.npo + " " + this.sac(this.dym()) + ((this.tuu() === true) ? "|" : " ") + this.language.uvy + " " + this.sac(this.ctb()));
        this.cfi.push(this.language.uuu)
    };
    this.jpg = function() {
        this.wvj = [];
        this.wvj[0] = this.language.uop;
        this.wvj[1] = this.language.ufy
    };
    this.xoh = function() {
        this.vzn = [];
        this.vzn[0] = this.language.fwe;
        this.vzn[1] = this.language.pse
    };
    this.jag = function() {
        this.rji = [];
        this.rji[0] = this.language.rez
    };
    this.jbg = function() {
        rdh.prototype.jbg.call(this);
        if (this.ifz() === true) {
            this.nej.ipx(true)
        }
    };
    this.lpa = function() {
        var b = jyv.dwe.value30 + "/poker/sounds/";
        this.nej.xug("collect", null, false, b + "collect");
        this.nej.xug("collectend", null, false, b + "collect1");
        b = jyv.dwe.value30 + "/basic/sounds/";
        if (!jyv.dwe.value55) {
            if (this.tuu() === false) {
                this.nej.xug("btn", null, false, b + "btn");
                this.nej.xug("auto_on", null, false, b + "auto_on");
                this.nej.xug("gamble_on", null, false, b + "gamble_on");
                this.nej.xug("gamble_off", null, false, b + "gamble_off");
                this.nej.xug("gambleprop", null, true, b + "gambleprop");
                this.nej.xug("auto_off", null, false, b + "auto_off");
                for (var a = 0; a < 12; a++) {
                    this.nej.xug("step" + a, null, false, b + "step" + (a + 1))
                }
                this.nej.xug("maxstep", null, false, b + "maxstep")
            } else {
                this.nej.xug("btn", null, false, b + "btn2");
                this.nej.xug("auto_fill", null, false, b + "auto_fill")
            }
        } else {
            this.nej.xug("btn", null, false, b + "ama_btn");
            if (this.tuu() === false) {
                this.nej.xug("gamble_on", null, false, b + "ama_gamble_on");
                this.nej.xug("gamble_off", null, false, b + "ama_gamble_off");
                this.nej.xug("gambleprop", null, true, b + "ama_gambleprop");
                for (var a = 0; a < 12; a++) {
                    this.nej.xug("step" + a, null, false, b + "ama_step")
                }
                this.nej.xug("maxstep", null, false, b + "ama_step")
            }
        }
        this.nej.xug("silence", null, false, b + "silence");
        this.nej.xug("audioon", null, false, b + "audio_on");
        if (this.tuu() === false) {
            this.nej.xug("panel_in", null, false, b + "panel_in");
            this.nej.xug("panel_out", null, false, b + "panel_out")
        }
        this.uvo();
        this.jba()
    };
    this.jba = function() {
        var b = jyv.dwe.value30 + "/poker/sounds/";
        this.nej.xug("hold", null, false, b + "hold");
        this.nej.xug("unhold", null, false, b + "unhold");
        for (var a = 0; a < 5; a++) {
            this.nej.xug("deal" + a, null, false, b + "deal2")
        }
    };
    this.uvo = function() {
        for (var a = 0; a < this.ymm; a++) {
            this.nej.xug("win" + a, this.jlg, false, this.gak + "win" + (a + 1))
        }
    };
    this.crd = function() {
        var a = this.tgg + this.bxp.type + "/";
        this.nej.eef("icon", a + "icon_out.png");
        this.nej.eef("back", a + "main.jpg");
        this.nej.eef("cards", a + "cardDeck.png");
        this.nej.eef("winpanel", a + "winPanel.png");
        this.nej.eef("help", a + "help.jpg");
        a = jyv.dwe.value30 + "/basic/images/" + this.bxp.type + "/";
        if (this.bxp.hxm === true) {
            this.nej.eef("btn_back", a + "buttonback.png")
        }
        a = jyv.dwe.value30 + "/poker/images/" + this.bxp.type + "/";
        if (this.tuu() === true) {
            this.nej.sfr(a, "gui_mobile_v15.json")
        } else {
            if (jyv.dwe.value57 === jyv.ui.hgy || this.rap() != null) {
                this.nej.sfr(a, "gui_desktop_v25.json")
            } else {
                this.nej.sfr(a, "gui_desktop_v15.json")
            }
        }
        this.mwx()
    };
    this.mwx = function() {
        var a = this.tgg + this.bxp.type + "/";
        this.nej.eef("g_back", a + "gamble.jpg")
    };
    this.aiy = function() {
        if (this.nky && !this.bhv) {
            this.ssu(this.eqm - this.win - this.fym, true)
        } else {
            this.ssu(this.eqm, true)
        }
        this.eav(this.totalBet, true);
        this.wlq();
        this.cwl.iiz("tops", "#spt");
        this.cwl.iiz("settings", "#rxq", [0, 0, this.sac(this.bdt())]);
        this.spt()
    };
    this.spt = function(l, k, m, s) {
        if (jyv.dcm.dmt()) {
            var a = (l != null && k != null && m != null && s != null),
                c = (a === true) ? new kyc(l, k, m, s) : new kyc(jyv.dcm.bxp.dcm.ebf.x, jyv.dcm.bxp.dcm.ebf.y, jyv.dcm.bxp.dcm.ebf.width, jyv.dcm.bxp.dcm.ebf.height),
                p = jyv.dcm.context2D,
                e = (jyv.dcm.dbs === true) ? jyv.dcm.style.dcm.yig : jyv.dcm.style.dcm.backgroundColor,
                v = jyv.dcm.cwl.drl("stats"),
                b = jyv.dcm.cwl.drl("history"),
                t = jyv.dcm.cwl.drl("topb"),
                f = jyv.dcm.cwl.drl("topi"),
                g = jyv.dcm.cwl.drl("betsel"),
                u = jyv.dcm.cwl.drl("paytable"),
                o = jyv.dcm.cwl.drl("tops"),
                j = jyv.dcm.cwl.drl("winp"),
                n = jyv.dcm.cwl.drl("autop"),
                d = jyv.dcm.cwl.drl("settings");
            jyv.dcm.jxm = false;
            p.save();
            if (a) {
                p.beginPath();
                p.rect(l, k, m, s);
                p.closePath();
                p.clip()
            }
            p.clearRect(0, 0, jyv.dcm.width, jyv.dcm.height);
            p.restore();
            if (jyv.dcm.bxp.osk) {
                jyv.oot.jbx(p, jyv.dcm.bxp.dcm.ebf.x - jyv.dcm.bxp.dcm.owp, jyv.dcm.bxp.dcm.ebf.y - jyv.dcm.bxp.dcm.owp, jyv.dcm.bxp.dcm.ebf.width + 2 * jyv.dcm.bxp.dcm.owp, jyv.dcm.bxp.dcm.ebf.height + 2 * jyv.dcm.bxp.dcm.owp, e, 1)
            }
            if (b) {
                b.spt()
            }
            if (f) {
                f.spt()
            }
            if (o && o.fam()) {
                o.spt()
            }
            if (v && v.fam()) {
                v.spt()
            } else {
                if (jyv.dcm.zpr != null && jyv.dcm.zpr.fam()) {
                    jyv.dcm.zpr.spt()
                } else {
                    if (jyv.dcm.pzk != null && jyv.dcm.pzk.fam()) {
                        jyv.dcm.pzk.spt()
                    } else {
                        p.drawImage(jyv.dcm.nej.pvr("back"), jyv.dcm.bxp.dcm.ebf.x, jyv.dcm.bxp.dcm.ebf.y);
                        if (jyv.dcm.gmy) {
                            jyv.dcm.gmy.spt()
                        }
                        for (var q = 0, r = jyv.dcm.wwx.length; q < r; q++) {
                            jyv.dcm.wwx[q].vpw(p);
                            jyv.dcm.wwx[q].spt()
                        }
                        if (j) {
                            j.spt()
                        }
                        if (u) {
                            u.spt()
                        }
                    }
                }
            }
            if (g) {
                g.spt()
            }
            if (t) {
                t.spt()
            }
            if (n) {
                n.spt()
            }
            if (d) {
                d.spt()
            }
        }
    };
    this.wec = function(a, b) {
        this.jxm = true;
        jyv.oot.jbx(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.lhs = function() {
        this.ese();
        if (this.state == jyv.dze.gal.lwu && this.jdn > 0) {
            this.nej.ckk("win" + (this.jdn - 1))
        }
        this.gmy.odj.iiz("info", "#yzw");
        this.rvk(false);
        this.gmy.pwt(false);
        this.ami(false);
        this.zpr.gpn();
        this.zpr.pwt(true);
        this.cwl.iiz("settings", "#qhb");
        this.gmy.odj.iiz("setting", "#lhz", [this.cwl.iiz("settings", "#fam")])
    };
    this.bjx = function() {
        this.zpr.pwt(false);
        if (this.state != jyv.dze.gal.jtx && this.state != jyv.dze.gal.bmh) {
            this.gmy.pwt(true)
        } else {
            this.gmy.tlj(true)
        }
        this.rvk(true);
        this.ami(true);
        this.zpr.qhb();
        this.gmy.odj.iiz("info", "#sgy", [0])
    };
    this.xhp = function() {
        var a = jyv.dcm.gmy.odj.drl("gamble");
        jyv.dcm.oql();
        jyv.dcm.iny();
        if (a) {
            a.qft();
            a.lhz(jyv.dcm.ytt)
        }
        jyv.dcm.ese();
        jyv.dcm.nej.ckk("win" + (jyv.dcm.jdn - 1));
        jyv.dcm.gmy.odj.iiz("info", "#yzw");
        jyv.dcm.gmy.pwt(false);
        jyv.dcm.ami(false);
        jyv.dcm.pzk.pwt(true);
        jyv.dcm.pzk.nsq(jyv.dcm.eqm, jyv.dcm.win + jyv.dcm.fym, jyv.dcm.jdn, false);
        jyv.dcm.pzk.gpn(!jyv.dcm.ldn)
    };
    this.sal = function() {
        jyv.dcm.ihy();
        jyv.dcm.pzk.pey();
        jyv.dcm.ami(true);
        jyv.dcm.pzk.pwt(false);
        jyv.dcm.pzk.zgu(false, true);
        jyv.dcm.gmy.odj.iiz("start", "#rkw", [jyv.dcm.language.start, true]);
        jyv.dcm.bhv = true;
        if (jyv.dcm.ldn) {
            jyv.dcm.gmy.oza(true);
            jyv.dcm.ozp = setTimeout(jyv.dcm.qho, 800)
        } else {
            jyv.dcm.gmy.pwt(true);
            if (!(jyv.dcm.ldn || jyv.dcm.nky)) {
                jyv.dcm.rvk(true)
            }
            jyv.dcm.gmy.odj.iiz("info", "#sgy", [0])
        }
    };
    this.kle = function() {
        var a = this.cwl.drl("tops");
        if (a) {
            a.pxu(0);
            this.spt()
        }
    };
    this.hwg = function() {
        this.xto();
        this.aiy();
        this.iny();
        this.rvk(false);
        this.bji(false);
        this.cwl.iiz("winp", "#zgu", [false]);
        this.cwl.iiz("paytable", "#zgu", [true]);
        this.wny()
    };
    this.jfx = function() {
        this.brr();
        if (this.zvc == this.rnv) {
            this.aiy()
        }
        this.rvk(false);
        this.bji(false);
        this.wny()
    };
    this.lhq = function() {
        this.tkz();
        if (this.zvc >= 2 && this.rnv == 2) {
            this.aiy()
        }
        this.rvk(false);
        this.bji(false);
        this.wny()
    };
    this.bjy = function() {
        var a = jyv.dcm.trw,
            b = 0;
        if (jyv.dcm.iue == 0) {
            jyv.dcm.boq = new Date().getTime()
        } else {
            b = new Date().getTime();
            a = jyv.dcm.trw + (jyv.dcm.ztd * jyv.dcm.trw - (b - jyv.dcm.boq))
        }
        if (!jyv.dcm.wwx[jyv.dcm.iue].hpy()) {
            jyv.dcm.ztd += 1;
            jyv.dcm.nej.ddz("deal" + (jyv.dcm.ztd - 1));
            jyv.dcm.wwx[jyv.dcm.iue].kyr(jyv.dcm.xtq[jyv.dcm.iue], true)
        } else {
            a = 0
        }
        jyv.dcm.iue++;
        if (a <= 0) {
            a = 0
        }
        if (jyv.dcm.iue < jyv.dcm.xtq.length) {
            if (a == 0) {
                jyv.dcm.bjy()
            } else {
                jyv.dcm.uaz = setTimeout(jyv.dcm.bjy, a)
            }
        } else {
            jyv.dcm.uaz = setTimeout(jyv.dcm.jed, jyv.dcm.trw)
        }
    };
    this.qbm = function() {
        var a = 40,
            b = a,
            c = 0;
        if (jyv.dcm.iue == 0) {
            jyv.dcm.boq = new Date().getTime()
        } else {
            c = new Date().getTime();
            b = a + (jyv.dcm.ztd * a - (c - jyv.dcm.boq))
        }
        if (!jyv.dcm.wwx[jyv.dcm.iue].hpy()) {
            jyv.dcm.ztd += 1;
            jyv.dcm.wwx[jyv.dcm.iue].kyr(jyv.dcm.ups, true)
        } else {
            b = 0
        }
        jyv.dcm.iue++;
        if (b <= 0) {
            b = 0
        }
        if (jyv.dcm.iue < jyv.dcm.xtq.length) {
            if (b == 0) {
                jyv.dcm.qbm()
            } else {
                jyv.dcm.uaz = setTimeout(jyv.dcm.qbm, b)
            }
        } else {
            jyv.dcm.uaz = setTimeout(jyv.dcm.ljy, 200)
        }
    };
    this.wny = function() {
        this.zbm = true;
        this.ztd = 0;
        this.lwg();
        if (this.auj == 1) {
            for (var b = 0, a = this.xtq.length; b < a; b++) {
                this.wwx[b].kyr(this.ups, false)
            }
            this.gmy.odj.iiz("info", "#yvk", [this.language.acj, true]);
            this.spt();
            this.iue = 0;
            this.uaz = setTimeout(this.bjy, 200)
        } else {
            this.gmy.odj.iiz("info", "#yzw");
            for (var b = 0, a = this.xtq.length; b < a; b++) {
                if (!this.wwx[b].hpy()) {
                    this.wwx[b].kyr(this.ups, false)
                }
            }
            this.spt();
            this.uaz = setTimeout(this.ccp, 200)
        }
    };
    this.ccp = function() {
        if (jyv.dcm.tzv > 0) {
            jyv.dcm.iue = 0;
            jyv.dcm.bjy()
        } else {
            jyv.dcm.jed()
        }
    };
    this.ljy = function() {
        jyv.dcm.ztd = 0;
        for (var b = 0, a = jyv.dcm.nej.ike("deal"); b < a; b++) {
            jyv.dcm.nej.ckk("deal" + b)
        }
        if (jyv.dcm.auj == 1) {
            jyv.dcm.iue = 0;
            jyv.dcm.bjy()
        } else {
            if (jyv.dcm.tzv > 0) {
                jyv.dcm.iue = 0;
                jyv.dcm.bjy()
            } else {
                jyv.dcm.jed()
            }
        }
    };
    this.jed = function() {
        jyv.dcm.zbm = false;
        jyv.dcm.lfy = true;
        if (jyv.dcm.lil()) {
            if (jyv.dcm.auj == 1) {
                jyv.dcm.wrv()
            } else {
                if (jyv.dcm.auj == 2) {
                    jyv.dcm.awy()
                }
            }
            jyv.dcm.vwn(true);
            jyv.dcm.bji(true);
            jyv.dcm.gmy.odj.iiz("info", "#sgy", [2]);
            if (jyv.dcm.ldn) {
                jyv.dcm.gmy.zuq(true);
                jyv.dcm.ozp = setTimeout(jyv.dcm.qho, 800)
            } else {
                jyv.dcm.gmy.tlj(true);
                if ((jyv.dcm.zvc == 3 && (jyv.dcm.rnv == 3 || (jyv.dcm.rnv == 2 && jyv.dcm.auj == 2))) || (jyv.dcm.zvc == 2 && jyv.dcm.rnv == 2)) {
                    jyv.dcm.gmy.odj.iiz("bet", "#qhj", [jyv.dcm.bsu]);
                    jyv.dcm.gmy.odj.iiz("exit", "#qhj", [true])
                }
                if (jyv.dcm.zvc == jyv.dcm.rnv) {
                    jyv.dcm.ihy()
                }
                jyv.dcm.rvk(true)
            }
        } else {
            jyv.dcm.eru();
            jyv.dcm.jtw();
            if (jyv.dcm.win > 0) {
                jyv.dcm.bhv = false;
                jyv.dcm.zop()
            } else {
                if (!jyv.dcm.gtf()) {
                    jyv.dcm.ihy();
                    jyv.dcm.gmy.odj.iiz("info", "#yvk", [jyv.dcm.language.yrx, true]);
                    if (jyv.dcm.ldn) {
                        jyv.dcm.gmy.zuq(true);
                        jyv.dcm.ozp = setTimeout(jyv.dcm.qho, 800)
                    } else {
                        jyv.dcm.gmy.pwt(true);
                        jyv.dcm.rvk(true)
                    }
                } else {
                    jyv.dcm.oca()
                }
            }
        }
    };
    this.lwg = function() {
        if (jyv.dwe.value79 > 0) {
            this.trw = jyv.dwe.value79 / this.wwx.length
        } else {
            if (this.ukl) {
                this.trw = this.arw
            } else {
                if (this.auj == 1) {
                    this.trw = this.zdv
                } else {
                    this.trw = this.qod
                }
            }
        }
    };
    this.vwn = function(d) {
        var c = false;
        this.efg = true;
        for (var b = 0, a = this.moa.length; b < a; b++) {
            if (this.moa[b] > 0) {
                this.wwx[b].eld(true, false);
                if (!c && d) {
                    this.nej.ddz("hold");
                    c = true
                }
            } else {
                this.wwx[b].eld(false, false)
            }
        }
        this.spt()
    };
    this.jtw = function() {
        for (var b = 0, a = this.moa.length; b < a; b++) {
            this.wwx[b].eld(false, false);
            if (this.lpf) {
                if (this.moa[b] > 0) {
                    this.wwx[b].cgt(true, false)
                } else {
                    this.wwx[b].cgt(false, false)
                }
            }
        }
        this.spt()
    };
    this.zop = function() {
        this.gmy.pwt(false);
        this.vfi(this.win);
        this.gmy.odj.iiz("info", "#yvk", [this.language.icz, false]);
        this.yer = false;
        if (!this.gmj) {
            this.nej.ddz("win" + (this.jdn - 1))
        }
        this.spt();
        this.djw()
    };
    this.oca = function() {};
    this.gtf = function() {
        return false
    };
    this.vfi = function(a) {
        this.cwl.iiz("winp", "#rkw", [this.sac(a), false]);
        this.cwl.iiz("winp", "#zgu", [true]);
        this.cwl.iiz("paytable", "#zgu", [false])
    };
    this.djw = function() {
        if (this.ytt && this.hvt) {
            setTimeout(this.xhp, 1000)
        } else {
            if ((this.nky || this.ldn)) {
                if (!this.slw && !this.bhv) {
                    this.gmy.odj.iiz("start", "#rkw", [this.language.ucp, true]);
                    if (this.nky) {
                        this.slw = true;
                        this.gmy.pwt(false);
                        setTimeout(this.ucp, 2000)
                    } else {
                        if (this.ldn) {
                            this.ozp = setTimeout(this.qho, 800)
                        }
                    }
                }
            } else {
                this.gmy.odj.iiz("start", "#rkw", [this.language.ucp, true]);
                if (!this.gmj) {
                    this.gmy.odj.iiz("gamble", "#vve");
                    this.gmy.odj.iiz("info", "#wxn", [1])
                } else {
                    if (!this.inAutogamble && !this.ghr) {
                        this.gmy.odj.iiz("gamble", "#vve")
                    }
                }
                setTimeout(this.pao, 400)
            }
        }
    };
    this.pao = function() {
        jyv.dcm.gmy.ujb(true)
    };
    this.xto = function() {};
    this.brr = function() {};
    this.tkz = function() {};
    this.wrv = function() {};
    this.awy = function() {};
    this.eru = function() {};
    this.lil = function() {
        return this.state == jyv.dze.gal.jtx || this.state == jyv.dze.gal.bmh
    };
    this.jyl = function(a) {
        if (this.efg) {
            if (!a) {
                this.iny()
            }
            this.efg = false
        }
    };
    this.iny = function() {
        for (var b = 0, a = this.wwx.length; b < a; b++) {
            this.wwx[b].eld(false, false);
            this.wwx[b].cgt(false, false)
        }
        this.spt()
    };
    this.qhd = function() {
        return !this.nky
    };
    this.iha = function() {
        var b = this.gmy.odj.drl("gamble"),
            a = this.gmy.odj.drl("info");
        this.gmy.pwt(false);
        this.iny();
        this.oql();
        if (b) {
            b.qft();
            b.lhz(this.ytt)
        }
        if (a) {
            a.yzw();
            a.yvk(this.language.blm + ": " + this.sac(this.win + this.fym));
            a.wxn(0)
        }
        this.xwo.ucp()
    };
    this.ucp = function() {
        if (!jyv.dcm.bhv) {
            jyv.dcm.iny();
            jyv.dcm.nej.ckk("collect");
            jyv.dcm.nej.ckk("collectend");
            if (jyv.dcm.aoo != jyv.dcm.mnz) {
                jyv.dcm.gmy.zuq(true)
            }
            jyv.dcm.nej.ckk("win" + (jyv.dcm.jdn - 1));
            jyv.dcm.map = 10;
            if (jyv.dcm.win + jyv.dcm.fym < jyv.dcm.map) {
                jyv.dcm.map = jyv.dcm.win + jyv.dcm.fym;
                jyv.dcm.vsa()
            } else {
                if (jyv.dcm.win + jyv.dcm.fym >= jyv.dcm.bdt() * 25) {
                    jyv.dcm.map = 20
                }
                jyv.dcm.vsa()
            }
        }
    };
    this.drq = function() {
        this.bhv = true;
        this.slw = false;
        clearTimeout(this.lpw);
        this.nej.ckk("collect");
        this.nej.ddz("collectend");
        this.ssu(this.eqm, true);
        this.ese();
        this.rvk(true);
        this.gmy.odj.iiz("start", "#rkw", [this.language.start, true]);
        if (!this.ldn) {
            this.gmy.pwt(true)
        } else {
            this.ozp = setTimeout(this.qho, 500)
        }
    };
    this.vsa = function() {
        this.fri = false;
        this.wit = (this.win + this.fym > this.totalBet) ? true : false;
        this.ysk = 0;
        this.uvc = this.win + this.fym;
        this.klr = this.eqm - this.win - this.fym;
        this.mpy = 0;
        this.tec = this.win + this.fym;
        this.boq = new Date().getTime();
        this.slw = true;
        this.lpw = setTimeout(this.eir, this.zjv)
    };
    this.eir = function() {
        var c = 0,
            a = jyv.dcm.wyf,
            b = 0;
        if (jyv.dcm.tec > 0) {
            if (!jyv.dcm.fri) {
                jyv.dcm.nej.ddz("collect");
                jyv.dcm.fri = true
            }
            c = Math.round(jyv.dcm.tec / jyv.dcm.map);
            jyv.dcm.tec -= c;
            if (jyv.dcm.tec < 0) {
                jyv.dcm.tec = 0
            }
            jyv.dcm.ach(jyv.dcm.uvc - (jyv.dcm.win + jyv.dcm.fym - jyv.dcm.tec));
            jyv.dcm.ssu(jyv.dcm.klr + (jyv.dcm.win + jyv.dcm.fym - jyv.dcm.tec), true);
            jyv.dcm.ysk++;
            jyv.dcm.map -= 1;
            a = jyv.dcm.wyf;
            b = new Date().getTime();
            a = jyv.dcm.zjv + (jyv.dcm.ysk * jyv.dcm.zjv - (b - jyv.dcm.boq));
            jyv.dcm.lpw = setTimeout(jyv.dcm.eir, a)
        } else {
            jyv.dcm.nej.ckk("collect");
            jyv.dcm.nej.ddz("collectend");
            jyv.dcm.slw = false;
            jyv.dcm.bhv = true;
            clearTimeout(jyv.dcm.lpw);
            jyv.dcm.ese();
            jyv.dcm.gmy.odj.iiz("start", "#rkw", [jyv.dcm.language.start, true]);
            if (jyv.dcm.aoo == jyv.dcm.mnz) {
                jyv.dcm.aoo()
            } else {
                if (!(jyv.dcm.ldn)) {
                    jyv.dcm.gmy.pwt(true);
                    jyv.dcm.rvk(true)
                } else {
                    jyv.dcm.gmy.oza(true);
                    jyv.dcm.gmy.odj.iiz("info", "#yvk", [jyv.dcm.language.blm + ": " + jyv.dcm.sac(jyv.dcm.win + jyv.dcm.fym)]);
                    jyv.dcm.ozp = setTimeout(jyv.dcm.qho, 500)
                }
            }
        }
    };
    this.iao = function(a, b, c) {
        if (a <= b) {
            return 1
        }
        var d = 0,
            e = this.rfy(a, b, c),
            f = 0;
        while (a > f) {
            e = this.rfy(a - f, b, c);
            f += e;
            d++
        }
        return d
    };
    this.rfy = function(d, a, b) {
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
    this.ghz = function(d) {
        var e = this.jdi,
            c = this.lzv;
        this.unf = true;
        this.gmy.odj.iiz("info", "#yvk", ["", true]);
        this.aiy();
        if (d == jyv.dze.gal.odo) {
            this.ihy();
            this.gmy.odj.iiz("info", "#sgy", [0]);
            this.gmy.pwt(true);
            this.rvk(true);
            this.zcu()
        } else {
            if (d == jyv.dze.gal.jtx) {
                for (var b = 0, a = this.xtq.length; b < a; b++) {
                    this.wwx[b].kyr(this.xtq[b], false)
                }
                this.wrv();
                this.vwn(false);
                this.bji(true);
                this.gmy.odj.iiz("info", "#sgy", [2]);
                this.gmy.tlj(true);
                if (this.zvc == this.rnv) {
                    this.gmy.odj.iiz("exit", "#qhj", [true]);
                    this.gmy.odj.iiz("bet", "#qhj", [this.bsu]);
                    this.ihy()
                }
                this.rvk(true)
            } else {
                if (d == jyv.dze.gal.lwu) {
                    for (var b = 0, a = this.xtq.length; b < a; b++) {
                        this.wwx[b].kyr(this.xtq[b], false)
                    }
                    this.eru();
                    this.jtw();
                    if (this.win > 0) {
                        if (this.tuu() === false) {
                            this.hvt = true
                        } else {
                            this.hvt = false;
                            this.nky = true
                        }
                        this.bhv = false;
                        this.zop()
                    } else {
                        if (this.gtf()) {
                            this.hvt = true;
                            this.oca()
                        } else {
                            this.ihy();
                            this.gmy.odj.iiz("info", "#sgy", [0]);
                            this.gmy.pwt(true);
                            this.rvk(true);
                            this.zcu()
                        }
                    }
                } else {
                    if (d == jyv.dze.gal.zqe) {
                        this.bhv = true;
                        for (var b = 0, a = this.xtq.length; b < a; b++) {
                            this.wwx[b].kyr(this.xtq[b], false)
                        }
                        this.ihy();
                        this.gmy.odj.iiz("info", "#sgy", [0]);
                        this.gmy.pwt(true);
                        this.rvk(true);
                        this.zcu()
                    } else {
                        if (d == jyv.dze.gal.yjf) {
                            for (var b = 0, a = this.xtq.length; b < a; b++) {
                                this.wwx[b].kyr(this.xtq[b], false)
                            }
                            this.spt();
                            if (!this.pzk.fam() && this.win + this.fym > 0) {
                                this.xhp();
                                this.pzk.nsq(this.eqm, this.win + this.fym, this.jdn, true)
                            }
                            if (this.win + this.fym == 0) {
                                this.ihy();
                                this.gmy.odj.iiz("info", "#sgy", [0]);
                                this.gmy.pwt(true);
                                this.rvk(true);
                                this.zcu()
                            }
                        } else {
                            if (d == jyv.dze.gal.gur) {
                                for (var b = 0, a = this.xtq.length; b < a; b++) {
                                    this.wwx[b].kyr(this.xtq[b], false)
                                }
                                if (!this.pzk.fam()) {
                                    this.xhp()
                                }
                                this.ssu(this.eqm, false);
                                this.pzk.nsq(this.eqm, this.win + this.fym, this.jdn, true);
                                this.pzk.pwt(true)
                            } else {
                                if (d == jyv.dze.gal.jzq) {
                                    this.bhv = true;
                                    for (var b = 0, a = this.xtq.length; b < a; b++) {
                                        this.wwx[b].kyr(this.xtq[b], false)
                                    }
                                    this.ihy();
                                    this.gmy.odj.iiz("info", "#sgy", [0]);
                                    this.gmy.pwt(true);
                                    this.rvk(true);
                                    this.zcu()
                                } else {
                                    if (d == jyv.dze.gal.bmh) {
                                        for (var b = 0, a = this.xtq.length; b < a; b++) {
                                            this.wwx[b].kyr(this.xtq[b], false)
                                        }
                                        this.awy();
                                        this.vwn(false);
                                        this.bji(true);
                                        this.gmy.odj.iiz("info", "#sgy", [2]);
                                        this.gmy.tlj(true);
                                        if ((this.zvc == 3 && this.rnv >= 2) && this.gmy.yzz != null) {
                                            this.gmy.odj.iiz("exit", "#qhj", [true])
                                        }
                                    } else {
                                        if (d == jyv.dze.gal.ndw) {
                                            for (var b = 0, a = this.xtq.length; b < a; b++) {
                                                this.wwx[b].kyr(this.xtq[b], false)
                                            }
                                            if (!this.pzk.fam()) {
                                                this.xhp()
                                            }
                                            this.ssu(this.eqm, false);
                                            this.pzk.nsq(this.eqm, this.win, this.jdn, true);
                                            this.pzk.fpp(false);
                                            this.pzk.egx(c)
                                        } else {
                                            if (d == jyv.dze.gal.kwj || d == jyv.dze.gal.kkz) {
                                                for (var b = 0, a = this.xtq.length; b < a; b++) {
                                                    this.wwx[b].kyr(this.xtq[b], false)
                                                }
                                                if (!this.pzk.fam()) {
                                                    this.xhp()
                                                }
                                                this.ssu(this.eqm, false);
                                                this.pzk.nsq(this.eqm, this.win, this.jdn, true);
                                                this.pzk.fpp(false);
                                                this.pzk.zoj(e)
                                            }
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
    this.hko = function() {
        this.unf = false;
        this.nky = false;
        this.hvt = false;
        this.tzv = 5;
        this.hwg();
        this.gmy.oza(true);
        this.phg()
    };
    this.phn = function() {
        this.unf = false;
        this.nky = false;
        this.hvt = false;
        this.jfx();
        this.gmy.oza(true)
    };
    this.uyo = function() {
        this.unf = false;
        this.nky = false;
        this.hvt = true;
        this.bhv = false;
        this.lhq();
        this.gmy.oza(true)
    };
    this.mca = function(a) {
        this.unf = false;
        this.nky = true;
        this.hvt = false;
        this.bhv = false;
        if (this.pzk.fam()) {
            this.pzk.nsq(this.eqm, this.win + this.fym, this.jdn, true);
            this.pzk.pey();
            this.ssu(this.eqm, false);
            try {
                if (this.pzk instanceof udt) {
                    this.pzk.egx(a, true)
                } else {
                    setTimeout(this.pzk.kpb, 500)
                }
            } catch (b) {
                setTimeout(this.pzk.kpb, 500)
            }
        } else {
            this.lhq();
            this.gmy.oza(true)
        }
    };
    this.zhi = function() {
        this.unf = false;
        this.hvt = false;
        this.lfy = true;
        this.jbo();
        if (this.pzk.fam()) {
            this.pzk.pey();
            this.ssu(this.eqm, false);
            setTimeout(this.pzk.kpb, 100)
        } else {
            this.ucp()
        }
    };
    this.ezc = function() {
        this.unf = false;
        if (!this.pzk.fam() && this.win + this.fym > 0) {
            this.xhp()
        }
        this.pzk.nsq(this.eqm, this.win + this.fym, this.jdn, true);
        if (this.win + this.fym == 0) {
            this.pzk.odj.iiz("info", "#yzw");
            setTimeout(this.sal, 1000)
        } else {
            this.pzk.ecc()
        }
    };
    this.tne = function() {
        this.unf = false;
        if (!this.pzk.fam()) {
            this.xhp()
        }
        this.ssu(this.eqm, false);
        this.pzk.nsq(this.eqm, this.win + this.fym, this.jdn, true);
        this.pzk.pwt(true)
    };
    this.qrs = function(a) {
        this.unf = false;
        if (!this.pzk.fam() && this.win > 0) {
            this.xhp()
        }
        this.pzk.nsq(this.eqm, this.win, this.jdn, true);
        this.pzk.fpp(false);
        this.pzk.zoj(a)
    };
    this.ues = function(a) {
        this.unf = false;
        if (!this.pzk.fam() && this.win > 0) {
            this.xhp()
        }
        this.pzk.nsq(this.eqm, this.win, this.jdn, true);
        this.pzk.fpp(false);
        this.pzk.zoj(a)
    };
    this.dai = function(a) {
        this.unf = false;
        this.pzk.nsq(this.eqm, this.win, this.jdn, true);
        this.pzk.egx(a, false)
    };
    this.vnv = function(b, d) {
        var c = this.cwl.drl("stats"),
            a = this.cwl.drl("history");
        if (this.wud) {
            if (!this.gmj) {
                if (c && c.fam()) {
                    c.pwt(false);
                    c.zgu(false)
                }
                this.cwl.iiz("settings", "#qhb");
                if (this.pzk != null && this.pzk.fam()) {
                    this.pzk.odj.iiz("info", "#yvk", [b, true]);
                    this.pzk.pwt(false);
                    this.kcg()
                } else {
                    if (this.gmy != null) {
                        if (this.zpr != null && this.zpr.fam()) {
                            this.bjx()
                        }
                        this.gmy.pwt(false);
                        this.stop();
                        this.gmy.odj.iiz("setting", "#lhz", [false]);
                        this.gmy.odj.iiz("info", "#yvk", [b, true])
                    } else {
                        this.rxs(b)
                    }
                }
            } else {
                this.stop();
                this.skp();
                if (a) {
                    a.mdw(true)
                }
                this.gwa(this.sqv(b))
            }
        } else {
            this.rxs(b)
        }
        if (d) {
            if (!this.gmj && this.xwo.axr.xzm == 0 && jyv.dwe.value46 > 0) {
                this.eux((this.ncu) ? jyv.dwe.value71 : jyv.dwe.value47)
            } else {
                setTimeout(this.mnz, jyv.dwe.value10)
            }
        }
    };
    this.nxm = function(a) {
        if (a == jyv.eup.jpd) {
            this.gmy.odj.iiz("info", "#yvk", [this.language.ggv, true])
        } else {
            if (a == jyv.eup.jor) {
                this.gmy.odj.iiz("info", "#yvk", [this.language.jkb + " " + this.sac(this.rid), true])
            } else {
                if (a >= jyv.eup.jar) {
                    this.gmy.odj.iiz("info", "#yzw");
                    if (a == jyv.eup.skd || a == jyv.eup.ypk) {
                        this.stop()
                    }
                    this.gmy.pwt(false);
                    this.rvk(false)
                }
            }
        }
        this.aqu();
        if (a < jyv.eup.jar) {
            this.lfy = true;
            this.gmy.pwt(true);
            this.rvk(true)
        } else {
            this.tjr([{
                vlp: a
            }])
        }
    };
    this.nud = function(a) {
        this.eqm = a;
        if (!(this.pzk.fam() || this.zpr.fam())) {
            this.ssu(a, true)
        } else {
            if (this.pzk.fam()) {
                this.pzk.odj.iiz("creditd", "#rkw", [this.bug(a), true]);
                this.ssu(a, false)
            }
        }
        if (this.eqm > 0) {
            this.jbo()
        } else {
            this.ihy()
        }
    };
    this.szh = function() {
        clearTimeout(jyv.dcm.ozp);
        if (jyv.dcm.lfy) {
            if (jyv.dcm.win + jyv.dcm.fym > 0 && !jyv.dcm.bhv) {
                if (!jyv.dcm.slw) {
                    if (jyv.dcm.qhd()) {
                        jyv.dcm.lfy = false;
                        jyv.dcm.iha()
                    }
                } else {
                    jyv.dcm.drq()
                }
            } else {
                if (!jyv.dcm.zbm) {
                    if (jyv.dcm.gty) {
                        jyv.dcm.aqu();
                        jyv.dcm.iat();
                        return
                    } else {
                        if (jyv.dcm.hho) {
                            jyv.dcm.aqu();
                            jyv.dcm.wew();
                            return
                        }
                    }
                    jyv.dcm.lfy = false;
                    if (jyv.dcm.tuu() === true) {
                        jyv.dcm.pmx = (!jyv.dcm.ytt) ? 1 : 0
                    } else {
                        if (jyv.dwe.value62 === true) {
                            jyv.dcm.pmx = 0;
                            if (jyv.dcm.ldn) {
                                jyv.dcm.pmx |= 2
                            }
                            if (jyv.dcm.ytt) {
                                jyv.dcm.pmx |= 4
                            }
                        } else {
                            jyv.dcm.pmx = (jyv.dcm.ldn && !jyv.dcm.ytt) ? 1 : 0
                        }
                    }
                    jyv.dcm.dkb();
                    if ((jyv.dcm.state == jyv.dze.gal.odo || jyv.dcm.state == jyv.dze.gal.lwu || jyv.dcm.state == jyv.dze.gal.zqe || jyv.dcm.state == jyv.dze.gal.yjf || jyv.dcm.state == jyv.dze.gal.jzq || jyv.dcm.state == jyv.dze.gal.ndw) || jyv.dcm.jkl()) {
                        if (jyv.dcm.eqm >= jyv.dcm.bdt() && jyv.dcm.bdt() >= jyv.dcm.rid) {
                            jyv.dcm.xwo.wih(jyv.dcm.fvw, jyv.dcm.pmx);
                            jyv.dcm.gmy.pwt(false)
                        } else {
                            jyv.dcm.ibj();
                            jyv.dcm.aqu();
                            jyv.dcm.gmy.pwt(true);
                            jyv.dcm.rvk(true);
                            jyv.dcm.lfy = true
                        }
                    } else {
                        if (jyv.dcm.state == jyv.dze.gal.jtx) {
                            if (jyv.dcm.zvc == 2 && jyv.dcm.rnv == 2 && jyv.dcm.bsu && (jyv.dcm.tzv == 5 || jyv.dcm.totalBet != jyv.dcm.xen)) {
                                jyv.dcm.xwo.wih(jyv.dcm.fvw, jyv.dcm.pmx);
                                jyv.dcm.gmy.pwt(false);
                                jyv.dcm.bji(false);
                                return
                            }
                            jyv.dcm.jjp();
                            if (jyv.dcm.zvc == 2 || (jyv.dcm.zvc == 3 && jyv.dcm.tzv == 0 && jyv.dcm.jdn > 0)) {
                                jyv.dcm.xwo.hmz(jyv.dcm.fvw, jyv.dcm.pmx, jyv.dcm.moa);
                                jyv.dcm.gmy.pwt(false)
                            } else {
                                if (jyv.dcm.zvc == 3) {
                                    jyv.dcm.xwo.nyk(jyv.dcm.fvw, jyv.dcm.pmx, jyv.dcm.moa);
                                    jyv.dcm.gmy.pwt(false)
                                }
                            }
                        } else {
                            if (jyv.dcm.state == jyv.dze.gal.bmh) {
                                jyv.dcm.jjp();
                                jyv.dcm.xwo.hmz(jyv.dcm.fvw, jyv.dcm.pmx, jyv.dcm.moa);
                                jyv.dcm.gmy.pwt(false)
                            }
                        }
                    }
                    jyv.dcm.bji(false)
                }
            }
        }
    };
    this.vak = function() {
        var a = jyv.dcm.cwl.drl("topi"),
            c = 0,
            b = 0,
            d = 0;
        if (!jyv.dwe.value55) {
            jyv.dcm.nej.ckk("auto_on");
            jyv.dcm.nej.ckk("auto_off")
        }
        if (jyv.dcm.ldn) {
            jyv.dcm.ldn = false;
            jyv.dcm.ndo();
            jyv.dcm.gmy.odj.iiz("astart", "#lhz", [jyv.dcm.ldn]);
            jyv.dcm.gmy.odj.iiz("start", "#rkw", [jyv.dcm.language.start, true]);
            if (!jyv.dwe.value55) {
                jyv.dcm.nej.ddz("auto_off")
            }
        } else {
            if (jyv.dcm.rap() != null && jyv.dcm.nvp <= 0 && jyv.dcm.tuu() === false) {
                if (a && a.knh() === true) {
                    jyv.dcm.rvk(false);
                    jyv.dcm.gmy.pwt(false);
                    jyv.dcm.id = setTimeout(jyv.dcm.mwe, 300)
                }
            } else {
                jyv.dcm.ldn = true;
                if (jyv.dcm.rap() != null && jyv.dcm.tuu() === true) {
                    jyv.dcm.nvp = jyv.dcm.cwl.iiz("settings", "#njl");
                    c = jyv.dcm.cwl.iiz("settings", "#ews");
                    b = jyv.dcm.cwl.iiz("settings", "#etc");
                    d = jyv.dcm.cwl.iiz("settings", "#sxg");
                    jyv.dcm.rzc = (c > 0) ? c : 0;
                    jyv.dcm.dlk = (b > 0) ? b : 0;
                    jyv.dcm.all = (d > 0) ? d : 0;
                    jyv.dcm.phg()
                }
                jyv.dcm.gmy.odj.iiz("astart", "#lhz", [jyv.dcm.ldn]);
                jyv.dcm.gmy.odj.iiz("start", "#rkw", [jyv.dcm.language.start, true]);
                if (!jyv.dwe.value55) {
                    jyv.dcm.nej.ddz("auto_on")
                }
                jyv.dcm.szh()
            }
        }
        if (a) {
            a.fos("auto", jyv.dcm.ldn)
        }
    };
    this.mnz = function() {
        if (jyv.xzm == 0 && jyv.dcm.gmj === false && jyv.dcm.win + jyv.dcm.fym > 0 && !jyv.dcm.bhv && jyv.dcm.qhd()) {
            if (!jyv.dcm.slw) {
                jyv.dcm.iha()
            }
            jyv.dcm.aoo = jyv.dcm.mnz
        } else {
            rdh.prototype.mnz.call(this)
        }
    };
    this.xps = function() {
        if (jyv.dcm.fvw < jyv.dcm.tvk.length - 1) {
            if (jyv.dcm.fvw >= jyv.dcm.cim(true)) {
                jyv.dcm.fvw = 0;
                while (jyv.dcm.fvw < jyv.dcm.tvp()) {
                    jyv.dcm.fvw++
                }
            } else {
                jyv.dcm.fvw++
            }
        } else {
            jyv.dcm.fvw = 0;
            while (jyv.dcm.fvw < jyv.dcm.tvp()) {
                jyv.dcm.fvw++
            }
        }
        jyv.dcm.bdj(false);
        if (jyv.dcm.fvw >= jyv.dcm.cim(true)) {
            return true
        }
        return false
    };
    this.gla = function() {
        if (jyv.dcm.fvw > 0) {
            if (jyv.dcm.fvw <= jyv.dcm.tvp()) {
                jyv.dcm.fvw = jyv.dcm.tvk.length;
                while (jyv.dcm.fvw > jyv.dcm.cim(true)) {
                    jyv.dcm.fvw--
                }
            } else {
                jyv.dcm.fvw--
            }
        } else {
            jyv.dcm.fvw = jyv.dcm.tvk.length;
            while (jyv.dcm.fvw > jyv.dcm.cim(true)) {
                jyv.dcm.fvw--
            }
        }
        if (jyv.dcm.fvw < 0) {
            jyv.dcm.fvw = 0
        }
        jyv.dcm.bdj(false);
        if (jyv.dcm.fvw <= jyv.dcm.tvp()) {
            return true
        }
        return false
    };
    this.sao = function() {
        var a = jyv.dcm.cwl.drl("topi"),
            b = jyv.dcm.cwl.drl("settings");
        if (jyv.dcm.tuu() === false && jyv.dcm.hvt && jyv.dcm.win + jyv.dcm.fym > 0) {
            if (!jyv.dcm.zbm) {
                jyv.dcm.unf = false;
                jyv.dcm.xhp()
            }
        } else {
            jyv.dcm.nej.ckk("gamble_on");
            jyv.dcm.nej.ckk("gamble_off");
            jyv.dcm.ytt = !jyv.dcm.ytt;
            if (jyv.dcm.ytt) {
                jyv.dcm.nej.ddz("gamble_on")
            } else {
                jyv.dcm.nej.ddz("gamble_off")
            }
            jyv.dcm.gmy.odj.iiz("gamble", "#lhz", [jyv.dcm.ytt]);
            if (a) {
                a.fos("gamble", jyv.dcm.ytt)
            }
            if (b) {
                b.odj.iiz("gamble", "#jox", [(jyv.dcm.ytt) ? 1 : 0])
            }
        }
    };
    this.awu = function() {
        if (!jyv.dcm.zpr.fam()) {
            jyv.dcm.ujv();
            if (jyv.dcm.cwl.drl("tops")) {
                jyv.dcm.kle()
            }
            if (jyv.dcm.zpr.anh() > 0) {
                jyv.dcm.lhs()
            }
        } else {
            jyv.dcm.bjx()
        }
    };
    this.nsf = function() {
        var a = jyv.dcm.cwl.drl("topi"),
            b = jyv.dcm.cwl.drl("settings"),
            c = jyv.dcm.cwl.drl("topb");
        jyv.dcm.ukl = !jyv.dcm.ukl;
        if (a) {
            a.fos("turbo", jyv.dcm.ukl)
        }
        if (c) {
            c.odj.iiz("turbo", "#jox", [(jyv.dcm.ukl) ? 1 : 0])
        }
        if (b) {
            b.odj.iiz("turbo", "#jox", [(jyv.dcm.ukl) ? 1 : 0])
        }
    };
    this.njo = function() {
        var a = false;
        if (jyv.oot.zqh == true) {
            if (jyv.dcm.kgc == true) {
                jyv.dcm.kgc = false;
                a = jyv.oot.ron();
                setTimeout(jyv.dcm.bvm, 1400)
            }
        } else {
            a = jyv.oot.ron();
            setTimeout(jyv.dcm.bvm, 1400)
        }
    };
    this.ahw = function() {
        if (jyv.dcm.nej.ydd() && !jyv.dcm.uaf) {
            jyv.dcm.xvs = false;
            jyv.dcm.uaf = true;
            jyv.dcm.cwl.iiz("loading", "#stop");
            setTimeout(jyv.dcm.mmr, 100);
            jyv.dcm.nej.ddz("silence");
            if (jyv.oot.yls() && jyv.oot.zqh) {
                jyv.dcm.njo()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.pum = function(a) {
        if (a == jyv.language.EN || a == jyv.language.US) {
            return new kck()
        } else {
            if (a == jyv.language.ES || a == jyv.language.CO || a == jyv.language.MX || a == jyv.language.CL || a == jyv.language.VE) {
                return new ngt()
            } else {
                if (a == jyv.language.DE || a == jyv.language.AT) {
                    return new sjt()
                } else {
                    if (a == jyv.language.PT || a == jyv.language.BR) {
                        return new ard()
                    } else {
                        if (a == jyv.language.RU) {
                            return new cxy()
                        } else {
                            if (a == jyv.language.EE) {
                                return new rpx()
                            } else {
                                if (a == jyv.language.TR) {
                                    return new ixd()
                                } else {
                                    if (a == jyv.language.CZ) {
                                        return new ldy()
                                    } else {
                                        if (a == jyv.language.GR) {
                                            return new mem()
                                        } else {
                                            if (a == jyv.language.BG) {
                                                return new xdo()
                                            } else {
                                                if (a == jyv.language.GE) {
                                                    return new oux()
                                                } else {
                                                    if (a == jyv.language.HU) {
                                                        return new ezn()
                                                    } else {
                                                        if (a == jyv.language.RO) {
                                                            return new mrh()
                                                        } else {
                                                            if (a == jyv.language.FR) {
                                                                return new qss()
                                                            } else {
                                                                if (a == jyv.language.HR) {
                                                                    return new leg()
                                                                } else {
                                                                    if (a == jyv.language.IT) {
                                                                        return new bwc()
                                                                    } else {
                                                                        if (a == jyv.language.SE) {
                                                                            return new kuc()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.uqd = function() {
        var f = this.cwl.drl("stats"),
            e = this.cwl.drl("topb"),
            c = this.cwl.drl("topi"),
            b = this.cwl.drl("betsel");
        this.swy();
        this.gmy.tlr(this.cfi, 0);
        this.vzn[0] = this.language.fwe;
        this.vzn[1] = this.language.pse;
        this.gmy.tlr(this.vzn, 1);
        this.wvj[0] = this.language.uop;
        this.wvj[1] = this.language.ufy;
        this.gmy.tlr(this.wvj, 2);
        if (this.ldn) {
            this.gmy.odj.iiz("start", "#rkw", [this.language.start])
        } else {
            if (this.win + this.fym > 0 && !this.nky && !this.bhv) {
                this.gmy.odj.iiz("start", "#rkw", [this.language.ucp])
            } else {
                this.gmy.odj.iiz("start", "#rkw", [this.language.start])
            }
        }
        if (this.rap() != null) {
            this.gmy.odj.iiz("astart", "#rkw", [this.language.mtf])
        } else {
            this.gmy.odj.iiz("astart", "#rkw", [this.language.ldn])
        }
        this.gmy.odj.iiz("gamble", "#rkw", [this.language.ytt]);
        this.gmy.odj.iiz("exit", "#rkw", [(jyv.dwe.value50.g === true) ? this.language.qhz : this.language.ujz]);
        this.gmy.odj.iiz("bet", "#rkw", [this.language.ssy]);
        this.gmy.odj.iiz("creditd", "#syu", [(this.vtm()) ? this.language.trm : this.language.eqm]);
        this.gmy.odj.iiz("betd", "#syu", [this.language.ssy]);
        if (e) {
            e.odj.iiz("language", "#drb", [this.language.language]);
            e.odj.iiz("audio", "#drb", [this.language.audio]);
            e.odj.iiz("turbo", "#drb", [this.language.ukl]);
            e.odj.iiz("fullscreen", "#drb", [this.language.aqq]);
            e.odj.iiz("help", "#drb", [this.language.dqz]);
            e.odj.iiz("history", "#drb", [this.language.dac]);
            e.odj.iiz("statistic", "#drb", [this.language.iyc]);
            e.odj.iiz("deposit", "#drb", [this.language.nco])
        }
        if (c) {
            c.drb("freeplay", this.language.trm)
        }
        if (b) {
            b.xxm = this.language.ssy
        }
        if (f) {
            if (jyv.dwe.value36) {
                f.xxm = this.sqv(this.language.iyc)
            } else {
                if (jyv.dwe.value37) {
                    f.xxm = this.sqv(this.language.crf)
                }
            }
            if (f.gqh != null) {
                f.gqh.rkw(this.language.ret, false)
            }
            if (f.yzz != null) {
                f.yzz.rkw(this.language.key, false)
            }
        }
        this.zpr.odj.iiz("return", "#rkw", [this.language.ret, false]);
        for (var d = 0, a = this.wwx.length; d < a; d++) {
            if (this.wwx[d].uqa()) {
                this.wwx[d].cgt(true, false)
            } else {
                if (this.wwx[d].hpy()) {
                    this.wwx[d].eld(true, false)
                }
            }
        }
        this.cwl.iiz("settings", "#uqd", [this.language, false]);
        this.cwl.iiz("autop", "#uqd", [this.language]);
        this.hmc()
    };
    this.hmc = function() {
        this.rji[0] = this.language.rez;
        this.pzk.tlr(this.rji)
    };
    this.bdt = function() {
        return this.totalBet
    };
    this.dym = function() {
        return this.rid
    };
    this.ctb = function() {
        return this.odb
    };
    this.cim = function(b) {
        for (var c = 0; c < this.tvk.length; c++) {
            var a = this.tvk[c];
            if (a > this.odb || (b && (this.eqm > 0 && this.eqm < a))) {
                return c - 1
            } else {
                if (a == this.odb || c == this.tvk.length - 1) {
                    return c
                }
            }
        }
        return -1
    };
    this.tvp = function() {
        for (var b = 0; b < this.tvk.length; b++) {
            var a = this.tvk[b];
            if (a >= this.rid && a < this.odb) {
                return b
            }
        }
        return -1
    };
    this.ibj = function() {
        var c = this.cim(true),
            a = this.tvp(),
            b = this.tvk.length - 1;
        b = (b > c) ? c : b;
        if (b > 0) {
            while (this.tvk[b] > this.eqm) {
                b--;
                if (b <= a) {
                    break
                }
            }
        }
        this.fvw = (b < a) ? a : b;
        this.bdj(false);
        if (this.bdt() > this.eqm) {
            this.gmy.odj.iiz("info", "#yvk", [this.language.ggv, true])
        } else {
            if (this.bdt() < this.rid) {
                this.gmy.odj.iiz("info", "#yvk", [this.language.jkb + " " + this.rid, true])
            }
        }
    };
    this.bdj = function(b) {
        var a = this.gmy.odj.drl("info");
        this.totalBet = this.tvk[this.fvw];
        this.aiy();
        if (a && a.aoa() === false) {
            a.yvk(this.cfi[2], true)
        }
        if (this.tuu() == true) {
            this.nej.ddz("btn")
        } else {
            if (this.fvw == this.cim(true)) {
                this.nej.ddz("maxstep")
            } else {
                this.nej.ddz("step" + (this.fvw % 12))
            }
        }
        this.cwl.iiz("betsel", "#pxu", [this.fvw, true])
    };
    this.ztk = function() {
        this.totalBet = this.tvk[this.fvw];
        this.aiy()
    };
    this.bpm = function(a) {
        jyv.dcm.fvw = a;
        jyv.dcm.ztk()
    };
    this.wlq = function() {
        this.cwl.iiz("paytable", "#ssh", [this.totalBet])
    };
    this.stop = function() {
        rdh.prototype.stop.call(this);
        this.eke();
        if (this.gmy != null) {
            this.gmy.odj.iiz("gamble", "#qft");
            this.gmy.odj.iiz("info", "#yzw");
            this.gmy.stop()
        }
        clearTimeout(this.bgh);
        clearTimeout(this.lpw);
        clearTimeout(this.eab);
        clearTimeout(this.uaz);
        clearTimeout(this.wod);
        this.ilw();
        if (this.pzk != null && this.pzk.fam()) {
            this.pzk.pey();
            try {
                if (this.pzk instanceof udt) {
                    this.pzk.odj.iiz("gamble", "#qft")
                } else {
                    this.pzk.odj.iiz("info", "#yzw")
                }
            } catch (a) {
                this.pzk.odj.iiz("info", "#yzw")
            }
        }
        this.lkn();
        if (!this.gmj) {
            this.spt()
        }
    };
    this.ilw = function() {};
    this.ese = function() {
        var a = this.cwl.drl("winp");
        if (a && a.fam()) {
            a.zgu(false, true)
        }
    };
    this.ach = function(a) {
        this.cwl.iiz("winp", "#rkw", [this.sac(a), true])
    };
    this.bji = function(c) {
        if (!(c && this.ldn)) {
            for (var b = 0, a = this.wwx.length; b < a; b++) {
                this.wwx[b].qhj(c)
            }
        }
    };
    this.ami = function(a) {
        this.gmy.odj.hlg("buttons", "#zgu", [a]);
        this.spt()
    };
    this.dkb = function() {
        this.tzv = 5;
        for (var b = 0, a = this.wwx.length; b < a; b++) {
            if (this.wwx[b].hpy()) {
                this.tzv--
            }
        }
    };
    this.jjp = function() {
        for (var b = 0, a = this.wwx.length; b < a; b++) {
            if (this.wwx[b].hpy()) {
                this.moa[b] = this.xtq[b]
            } else {
                this.moa[b] = 0
            }
        }
    };
    this.ufd = function(b) {
        for (var c = 0, a = this.gdq.length; c < a; c++) {
            if (b == this.gdq[c]) {
                return true
            }
        }
        return false
    };
    this.qpr = function(b) {
        for (var c = 0, a = this.gdq.length; c < a; c++) {
            if (b == this.gdq[c]) {
                if (this.stq[c]) {
                    return this.stq[c]
                }
            }
        }
        return -1
    };
    this.jkl = function() {
        return false
    };
    this.jlg = function() {
        if (!jyv.dcm.bhv && !jyv.dcm.slw && !(jyv.dcm.nky || jyv.dcm.ldn) && !(jyv.dcm.ytt && jyv.dcm.hvt)) {
            if (jyv.dcm.win + jyv.dcm.fym > 0 && !jyv.dcm.yer) {
                jyv.dcm.nej.ckk("gambleprop");
                jyv.dcm.nej.ddz("gambleprop")
            }
        }
    };
    this.oql = function() {
        if (!this.gmj) {
            this.nej.ckk("gambleprop");
            this.yer = true
        }
    };
    this.rvk = function(e) {
        rdh.prototype.rvk.call(this, e);
        var d = this.cwl.drl("topb"),
            c = (this.cwl.drl("tops") != null),
            a = (e && !this.ldn);
        if (this.gmy) {
            this.gmy.odj.iiz("setting", "#qhj", [a])
        }
        if (c) {
            var a = (e && !this.ldn);
            if (this.oaz && d) {
                var b = d.odj.drl("help");
                if (b) {
                    b.qhj(a && !c)
                }
            }
        }
    };
    this.bak = function(e) {
        rdh.prototype.bak.call(this, e);
        var d = this.cwl.drl("topb"),
            c = (this.cwl.drl("tops") != null),
            a = (e && !this.ldn);
        if (this.gmy) {
            this.gmy.odj.iiz("setting", "#qhj", [a])
        }
        if (c) {
            var a = (e && !this.ldn);
            if (this.oaz && d) {
                var b = d.odj.drl("help");
                if (b) {
                    b.qhj(a && !c)
                }
            }
        }
    };
    this.sxn = function(e) {
        rdh.prototype.sxn.call(this, e);
        var d = this.cwl.drl("topb"),
            c = (this.cwl.drl("tops") != null),
            a = (e && !this.ldn);
        if (this.gmy) {
            this.gmy.odj.iiz("setting", "#qhj", [a])
        }
        if (c) {
            var a = (e && !this.ldn);
            if (this.oaz && d) {
                var b = d.odj.drl("help");
                if (b) {
                    b.qhj(a && !c)
                }
            }
        }
    };
    this.fkh = function() {
        rdh.prototype.fkh.call(this);
        if (jyv.dcm.vke === true && jyv.dcm.hcm === true) {
            jyv.dcm.aqu()
        }
    };
    this.rsc = function() {
        if (jyv.dwe.value74 != null && this.cwl.iiz("settings", "#njl") <= 0) {
            return false
        } else {
            if ((this.state == jyv.dze.gal.odo || this.state == jyv.dze.gal.lwu || this.state == jyv.dze.gal.zqe || this.state == jyv.dze.gal.yjf || this.state == jyv.dze.gal.jzq || this.state == jyv.dze.gal.ndw) || this.jkl()) {
                if (!(this.eqm >= this.bdt() && this.bdt() >= this.rid)) {
                    return false
                }
            }
        }
        return true
    };
    this.azb = function() {
        var b = this.cwl.drl("stats"),
            a = this.cwl.drl("settings");
        if (this.zpr && this.zpr.fam()) {
            return false
        } else {
            if (this.pzk && this.pzk.fam()) {
                return false
            } else {
                if (b && b.fam()) {
                    return false
                } else {
                    if (a && a.fam()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.zcu = function() {
        if (jyv.dwe.value78 && this.tuu() === false) {
            if (jyv.dwe.value78.t === true) {
                this.cwl.iiz("topb", "#zgu", [true])
            }
            if (jyv.dwe.value78.b === true) {
                this.cwl.iiz("betsel", "#zgu", [true])
            }
            if (jyv.dwe.value78.t === true || jyv.dwe.value78.b === true) {
                this.jvl()
            }
            this.spt();
            if (jyv.dwe.value78.d > 0) {
                this.wvd = setTimeout(this.ffv, jyv.dwe.value78.d)
            }
        }
    };
    this.ffv = function() {
        jyv.dcm.uni();
        clearTimeout(jyv.dcm.wvd)
    };
    this.ujv = function(b) {
        var a = this.cwl.drl("betsel");
        if (a && a.fam() && a.knh()) {
            this.uni(b)
        } else {
            rdh.prototype.ujv.call(this, b)
        }
    };
    this.jvl = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(a) {
                jyv.dcm.lds(a)
            };
            this.canvas.ontouchmove = function(a) {
                jyv.dcm.lds(a)
            }
        }
    };
    this.eke = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.lds = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        var b = 0,
            g = 0,
            c = false,
            e = this.cwl.drl("topb"),
            a = this.cwl.drl("betsel");
        if (d.touches) {
            var f = d.touches[0];
            c = true;
            if (!this.cqo) {
                b = f.pageX - this.offsetLeft;
                g = f.pageY - this.offsetTop
            } else {
                b = Math.round((f.pageX - this.offsetLeft) / this.gfl);
                g = Math.round((f.pageY - this.offsetTop) / this.ogw)
            }
        } else {
            if (!this.cqo) {
                b = d.pageX - this.offsetLeft;
                g = d.pageY - this.offsetTop
            } else {
                b = Math.round((d.pageX - this.offsetLeft) / this.gfl);
                g = Math.round((d.pageY - this.offsetTop) / this.ogw)
            }
        }
        if (a && a.fam()) {
            if (a.qgx(b, g, c)) {
                return
            }
        }
        if (e && e.fam()) {
            e.qgx(b, g)
        }
    };
    this.txy = function() {
        if (this.bgh >= 0) {
            return
        }
        this.cwl.iiz("betsel", "#tvx");
        this.nej.ckk("panel_in");
        this.nej.ddz("panel_in");
        this.rvk(false);
        this.boq = new Date().getTime();
        this.ysk = 0;
        this.bgh = setTimeout(this.gwx, 89)
    };
    this.uni = function(b) {
        var c = this.cwl.drl("topb"),
            a = this.cwl.drl("betsel");
        if (this.bgh >= 0 || !((c && c.fam()) || (a && a.fam()))) {
            return
        }
        if (b == this.gla || b == this.xps) {
            b();
            return
        }
        if (c) {
            c.uqk()
        }
        if (a) {
            a.uqk()
        }
        this.nej.ckk("panel_out");
        this.nej.ddz("panel_out");
        this.chn = b;
        this.boq = new Date().getTime();
        this.ysk = 0;
        this.bgh = setTimeout(this.evc, 89)
    };
    this.gwx = function() {
        var a = jyv.dcm.cwl.drl("betsel"),
            d = (!a || (a && !a.yfh())),
            c = 0,
            b = 0;
        jyv.dcm.spt();
        jyv.dcm.ysk++;
        if (d) {
            jyv.dcm.jvl();
            clearTimeout(jyv.dcm.bgh);
            jyv.dcm.bgh = -1
        } else {
            c = new Date().getTime();
            b = 89 + (jyv.dcm.ysk * 89 - (c - jyv.dcm.boq));
            jyv.dcm.bgh = setTimeout(jyv.dcm.gwx, b)
        }
    };
    this.evc = function() {
        var a = jyv.dcm.cwl.drl("betsel"),
            e = jyv.dcm.cwl.drl("topb"),
            f = (!a || (a && !a.yfh())),
            b = (!e || (e && !e.yfh())),
            d = 0,
            c = 0;
        jyv.dcm.spt();
        jyv.dcm.ysk++;
        if (f && b) {
            jyv.dcm.eke();
            clearTimeout(jyv.dcm.bgh);
            if (jyv.dcm.azb()) {
                jyv.dcm.rvk(true)
            }
            jyv.dcm.bgh = -1;
            if (typeof jyv.dcm.chn === "function") {
                jyv.dcm.chn();
                jyv.dcm.chn = null
            }
        } else {
            d = new Date().getTime();
            c = 89 + (jyv.dcm.ysk * 89 - (d - jyv.dcm.boq));
            jyv.dcm.bgh = setTimeout(jyv.dcm.evc, c)
        }
    };
    this.chn = function() {};
    this.ees = function() {
        return (this.eqm == 0 && (this.state == jyv.dze.gal.odo || (this.state == jyv.dze.gal.lwu && (this.win + this.fym) == 0) || this.state == jyv.dze.gal.zqe || (this.state == jyv.dze.gal.yjf && (this.win + this.fym) == 0) || this.state == jyv.dze.gal.jzq || (this.state == jyv.dze.gal.ndw && (this.win + this.fym) == 0) || (this.state == jyv.dze.gal.jtx && this.bsu == true)))
    };
    this.phu = function() {
        if (jyv.dcm.zhd != "" && jyv.dcm.vtm() === false) {
            jyv.dcm.gmy.odj.iiz("info", "#ddw");
            jyv.dcm.gmy.odj.iiz("info", "#sgy", [0])
        }
    };
    this.mbf = function() {
        if (this.state == jyv.dze.gal.lwu && this.jdn > 0) {
            this.nej.ckk("win" + (this.jdn - 1))
        }
        this.gmy.odj.iiz("info", "#yzw");
        this.gmy.pwt(false);
        this.rvk(false);
        this.ami(false);
        this.cwl.iiz("settings", "#qhb");
        this.gmy.odj.iiz("setting", "#lhz", [this.cwl.iiz("settings", "#fam")]);
        this.cwl.iiz("stats", "#zgu", [true]);
        this.spt()
    };
    this.dvi = function() {
        this.cwl.iiz("stats", "#pwt", [false]);
        this.cwl.iiz("stats", "#zgu", [false]);
        if (this.state != jyv.dze.gal.jtx && this.state != jyv.dze.gal.bmh) {
            this.gmy.pwt(true)
        } else {
            this.gmy.tlj(true)
        }
        this.rvk(true);
        this.ami(true);
        this.spt();
        this.gmy.odj.iiz("info", "#sgy", [0])
    };
    this.yfl = function() {
        var a = this.gmy.odj.iiz("bet", "#knh");
        this.ese();
        if (this.state == jyv.dze.gal.lwu && this.jdn > 0) {
            this.nej.ckk("win" + (this.jdn - 1))
        }
        this.gmy.odj.iiz("info", "#yzw");
        this.ami(false);
        this.gmy.odj.hlg("settings", "#zgu", [true]);
        this.rvk(false);
        this.gmy.pwt(false);
        this.gmy.zno(true);
        this.cwl.iiz("settings", "#gpn", [a, true])
    };
    this.aeq = function() {
        this.cwl.iiz("settings", "#qhb");
        if (this.state != jyv.dze.gal.jtx && this.state != jyv.dze.gal.bmh) {
            this.gmy.pwt(true)
        } else {
            this.gmy.tlj(true)
        }
        this.rvk(true);
        this.ami(true);
        this.gmy.odj.iiz("info", "#sgy", [0])
    };
    this.mwe = function() {
        jyv.dcm.rvk(false);
        jyv.dcm.gmy.pwt(false);
        jyv.dcm.gmy.odj.iiz("info", "#ddw");
        jyv.dcm.cwl.iiz("autop", "#gpn")
    };
    this.pjk = function() {
        var a = jyv.dcm.cwl.drl("autop");
        if (a) {
            jyv.dcm.nvp = a.njl();
            jyv.dcm.rzc = (a.ews() > 0) ? a.ews() : 0;
            jyv.dcm.dlk = (a.etc() > 0) ? a.etc() : 0;
            jyv.dcm.all = (a.sxg() > 0) ? a.sxg() : 0;
            if (jyv.dcm.nvp <= 0) {
                jyv.dcm.rvk(true);
                jyv.dcm.gmy.pwt(true);
                jyv.dcm.gmy.odj.iiz("info", "#kmw")
            } else {
                jyv.dcm.gmy.odj.iiz("astart", "#kyr", [(jyv.dcm.nvp >= 0) ? jyv.dcm.nvp : "---"])
            }
        }
    };
    this.phg = function() {
        if (this.rap() != null && this.nvp >= 0) {
            this.nvp -= 1;
            this.gmy.odj.iiz("astart", "#kyr", [(this.nvp >= 0) ? this.nvp : "---", true]);
            this.gmy.odj.iiz("start", "#kyr", [(this.nvp >= 0) ? this.nvp : "---", true])
        }
    };
    this.ndo = function() {
        if (jyv.dcm.rap() != null) {
            jyv.dcm.nvp = 0;
            jyv.dcm.rzc = 0;
            jyv.dcm.dlk = 0;
            jyv.dcm.all = 0;
            jyv.dcm.gmy.odj.iiz("astart", "#kyr", ["---"]);
            jyv.dcm.gmy.odj.iiz("start", "#kyr", ["---"])
        }
        jyv.dcm.gmy.odj.iiz("start", "#rvc");
        jyv.dcm.cwl.iiz("autop", "#ntj");
        jyv.dcm.cwl.iiz("settings", "#ndo")
    };
    this.aqu = function() {
        var a = jyv.dcm.cwl.drl("topi");
        jyv.dcm.ldn = false;
        jyv.dcm.ndo();
        jyv.dcm.gmy.odj.iiz("astart", "#lhz", [jyv.dcm.ldn]);
        if (a) {
            a.fos("auto", jyv.dcm.ldn)
        }
    };
    this.qho = function() {
        jyv.dcm.dkb();
        var a = ((jyv.dcm.win + jyv.dcm.fym > 0 && jyv.dcm.bhv || jyv.dcm.win + jyv.dcm.fym === 0) && (jyv.dcm.state == jyv.dze.gal.odo || jyv.dcm.state == jyv.dze.gal.lwu || jyv.dcm.state == jyv.dze.gal.zqe || jyv.dcm.state == jyv.dze.gal.yjf || jyv.dcm.state == jyv.dze.gal.jzq || jyv.dcm.state == jyv.dze.gal.ndw) || (jyv.dcm.state == jyv.dze.gal.jtx && jyv.dcm.zvc == 2 && jyv.dcm.rnv == 2 && jyv.dcm.bsu && (jyv.dcm.tzv == 5 || jyv.dcm.totalBet != jyv.dcm.xen)) || jyv.dcm.jkl());
        if (jyv.dcm.rap() != null && a === true && (jyv.dcm.nvp <= 0 || (jyv.dcm.eqm - jyv.dcm.bdt() < jyv.dcm.rzc) || (jyv.dcm.dlk > 0 && jyv.dcm.eqm >= jyv.dcm.dlk) || (jyv.dcm.all > 0 && jyv.dcm.win > jyv.dcm.all))) {
            if (jyv.dcm.ldn === true) {
                jyv.dcm.vak()
            }
            jyv.dcm.rvk(true);
            jyv.dcm.gmy.odj.iiz("info", "#kmw");
            jyv.dcm.gmy.pwt(true)
        } else {
            jyv.dcm.szh()
        }
    }
}
rdh.prototype = new ydx;

function azr() {
    this.ugy = null;
    this.ioj = [];
    this.wen = [];
    this.kuz = 0;
    this.ojy = 30;
    this.gdf = 0;
    this.drc = 0;
    this.nxv = function(a) {
        try {
            this.gdf = a.iut;
            this.drc = a.nso;
            this.ojy = a.eha
        } catch (b) {
            console.error(b)
        }
    };
    this.qrq = function(d, a, c) {
        this.wen = [];
        for (var b = 0; b < a; b++) {
            this.wen[a - 1 - b] = rax(d[b])
        }
        if (c) {
            this.wen[a] = -1
        }
    };
    this.spt = function() {
        if (!this.fam()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.ugy != null) {
            for (var c = 0, a = this.wen.length; c < a; c++) {
                if (this.wen[c] < 0) {
                    b.drawImage(this.ugy, this.ugy.width - this.gdf, 0, this.gdf, this.drc, this.x + this.ojy * c, this.y, this.gdf, this.drc)
                } else {
                    b.drawImage(this.ugy, this.gdf * this.ioj[this.wen[c]], 0, this.gdf, this.drc, this.x + this.ojy * c, this.y, this.gdf, this.drc)
                }
            }
        }
        b.restore()
    }
}
azr.prototype = new srr;

function rme() {
    this.ioj = [];
    this.ugy = new Image();
    this.wen = [];
    this.gdf = 0;
    this.drc = 0;
    this.mrm = 36;
    this.ipl = 64;
    this.nxv = function(a) {
        try {
            this.ipl = a.lgn;
            this.mrm = a.uao;
            this.gdf = a.iut;
            this.drc = a.nso
        } catch (b) {
            console.error(b)
        }
    };
    this.qrq = function(b) {
        for (var a = 0; a < 5; a++) {
            this.wen[a] = rax(b[a])
        }
    };
    this.spt = function() {
        if (!this.fam()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.wen.length; b++) {
            a.drawImage(this.ugy, this.gdf * this.ioj[this.wen[b]], 0, this.mrm, this.ipl, this.x + this.mrm * b, this.y, this.mrm, this.ipl)
        }
        a.restore()
    }
}
rme.prototype = new srr;

function zfp() {
    this.mrw = {
        xbc: 32,
        swt: -1,
        value: "SPACE",
        myl: null
    };
    this.csi = {
        xbc: 8,
        swt: -1,
        value: "BACKSPACE",
        myl: null
    };
    this.zlu = {
        xbc: 38,
        swt: -1,
        value: "\u25B2",
        myl: null
    };
    this.nzh = {
        xbc: 40,
        swt: -1,
        value: "\u25BC",
        myl: null
    }
}
zfp.prototype = new wtu;

function ygs(g, c, f, e, i, a, d, b) {
    this.lof = g;
    this.rjx = f;
    this.ayn = e;
    this.naf = i;
    this.lqz = c;
    this.chv = a;
    this.znj = d;
    this.mvv = b;
    this.lhg = 1;
    this.okr = function(j) {
        if (this.ass == 0) {
            this.lhg = this.vcp(j)
        }
        ygs.prototype.okr.call(this, j)
    }
}
ygs.prototype = new gra;

function qik() {
    this.lya = function(a, b) {
        this.lof = b;
        this.jyq = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.rjx = f;
        this.ayn = e;
        this.naf = g;
        this.lqz = c;
        this.znj = d;
        this.mvv = b;
        this.axr = new ygs(this.lof, c, f, e, g, a, d, b);
        this.axr.lya(this)
    };
    this.yik = function() {
        this.jyq.lhg = this.axr.lhg;
        qik.prototype.yik.call(this)
    }
}
qik.prototype = new uam;

function wnq() {
    this.xxm = null;
    this.tws = 40;
    this.gek = 0;
    this.nxv = function(a) {
        wnq.prototype.nxv.call(this, a);
        try {
            this.tws = a.gbd;
            this.gek = a.gvt
        } catch (b) {
            console.error(b)
        }
    };
    this.syu = function(a, b) {
        this.xxm = a;
        if (b && b === true && this.context2D != null) {
            this.zgu(true, true)
        }
    };
    this.spt = function() {
        if (!this.fam() || (this.parent === jyv.dcm && !this.parent.dmt())) {
            return
        }
        var b = this.context2D,
            a = (this.tgs != null) ? 0 : this.x,
            c = (this.tgs != null) ? 0 : this.y;
        b.save();
        if (this.vng && this.ugy != null) {
            b.drawImage(this.ugy, a, c)
        }
        if (this.abq != null) {
            jyv.oot.cpn(b, this.abq, this.hkr, a + this.ojy, c + this.gvk, this.width, this.height, this.shb, this.xvu, this.iuq, this.bwv, this.ysr)
        }
        if (this.xxm != null) {
            jyv.oot.cpn(b, this.xxm, this.hkr, a + this.ojy, c + this.gek, this.width, this.height, this.shb, this.tws, this.iuq, this.bwv, this.ysr)
        }
        b.restore();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.tgs, this.x, this.y)
        }
    }
}
wnq.prototype = new itg;

function rax(a) {
    var c = wtv(a);
    var b = iga(a);
    return c + b * 13
}

function wtv(a) {
    return a >> 2
}

function iga(a) {
    return a & 3
}

function wzk() {
    var b = this;
    var a = 2;
    var d = 3;
    var e = 4;
    var c = 6;
    this.ugy = null;
    this.mlr = null;
    this.clh = null;
    this.gdb = null;
    this.bmf = null;
    this.odj = null;
    this.lhg = 1;
    this.fri = false;
    this.wit = false;
    this.map = 10;
    this.ysk = 0;
    this.uvc = 0;
    this.klr = 0;
    this.mpy = 0;
    this.tec = 0;
    this.boq = 0;
    this.dxc = false;
    this.wwx = [];
    this.ioj = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
    this.xio = 0;
    this.eqf = 0;
    this.zve = 0;
    this.chi = false;
    this.dni = [340, 280, 220, 180];
    this.ocl = null;
    this.aof = null;
    this.ssv = null;
    this.duv = new kyc();
    this.fdx = new kyc();
    this.lya = function(f, i, g) {
        wzk.prototype.lya.call(this, f, i, g);
        this.pcj()
    };
    this.dgs = function(i, f, g) {
        try {
            this.esp(i);
            this.yzm(i);
            this.wef(i);
            this.mav(i, f);
            this.bzb(i, g);
            this.ikt(i)
        } catch (j) {
            console.error(j)
        }
    };
    this.nxv = function(m) {
        try {
            var r = this.odj.ovp("bbuttons"),
                q = this.odj.ovp("sbuttons"),
                l = this.odj.ovp("displays"),
                j = this.odj.drl("card"),
                g = this.odj.drl("info"),
                p = this.odj.drl("history"),
                f = this.odj.drl("winp");
            for (var k = 0, n = r.length; k < n; k++) {
                r[k].nxv(m.wgs)
            }
            for (var k = 0, n = q.length; k < n; k++) {
                q[k].nxv(m.whw)
            }
            for (var k = 0, n = l.length; k < n; k++) {
                l[k].nxv(m.display)
            }
            if (j) {
                j.dho(m.bac.ebf);
                j.nxv(m.bac)
            }
            if (g) {
                g.dho(m.hyp.ebf);
                g.nxv(m.hyp)
            }
            if (f) {
                f.dho(m.wdt.ebf);
                f.nxv(m.wdt)
            }
            if (p) {
                p.dho(m.dac.ebf);
                p.nxv(m.dac)
            }
            this.odj.iiz("collect", "#dho", [m.laf]);
            this.odj.iiz("half", "#dho", [m.rfj]);
            this.odj.iiz("lowred", "#dho", [m.hdm]);
            this.odj.iiz("highblack", "#dho", [m.uwn]);
            this.odj.iiz("creditd", "#dho", [m.jbh]);
            this.odj.iiz("wind", "#dho", [m.rrc]);
            this.duv = m.lpt;
            this.fdx = m.wzl
        } catch (o) {
            console.error(o)
        }
    };
    this.gds = function(f) {
        try {
            var p = this.odj.ovp("buttons"),
                m = this.odj.ovp("displays"),
                k = this.odj.drl("card"),
                j = this.odj.drl("info"),
                g = this.odj.drl("winp");
            this.ocl = f.backgroundColor;
            this.aof = f.sme;
            this.ssv = f.fhj;
            for (var l = 0, n = p.length; l < n; l++) {
                p[l].gds(f.wqt)
            }
            for (var l = 0, n = m.length; l < n; l++) {
                m[l].gds(f.display)
            }
            if (k) {
                k.gds(f.bac)
            }
            if (j) {
                j.gds(f.hyp)
            }
            if (g) {
                g.gds(f.wdt)
            }
        } catch (o) {
            console.error(o)
        }
    };
    this.itu = function(q, p) {
        var n = q - this.x,
            m = p - this.y,
            o = this.odj.ovp("buttons");
        for (var k = 0, l = o.length; k < l; k++) {
            var f = o[k];
            if (n >= f.x && n <= f.x + f.width && m >= f.y && m <= f.y + f.height && f.fam() === true) {
                if (f.knh() && !f.gpy()) {
                    f.xgo(true, false, true);
                    this.spt();
                    this.parent.nej.ckk("btn");
                    this.parent.nej.ddz("btn");
                    f.fyd();
                    for (var g = 0; g < l; g++) {
                        o[g].bco(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.hlp = function() {
        var k = this.odj.ovp("buttons");
        for (var j = 0, f = k.length; j < f; j++) {
            var g = k[j];
            if (g.wlo() == true) {
                g.xgo(false, true);
                return true
            }
        }
        return false
    };
    this.ykf = function(n) {
        var m = this.odj.ovp("buttons");
        for (var l = 0, f = m.length; l < f; l++) {
            var k = m[l];
            if (k.lfi == n) {
                if (k.knh() && !k.gpy()) {
                    k.xgo(true, false, true);
                    this.spt();
                    this.parent.nej.ckk("btn");
                    this.parent.nej.ddz("btn");
                    k.fyd();
                    for (var g = 0; g < f; g++) {
                        m[g].bco(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.ovz = function() {
        var k = this.odj.ovp("buttons");
        for (var j = 0, f = k.length; j < f; j++) {
            var g = k[j];
            if (g.wlo() == true) {
                g.xgo(false, true);
                return true
            }
        }
        return false
    };
    this.nsq = function(j, g, f, i) {
        this.odj.iiz("creditd", "#rkw", [this.parent.bug(j), false]);
        this.odj.iiz("wind", "#rkw", [this.parent.bug(g), false]);
        this.odj.iiz("winp", "#rkw", [this.parent.sac(g), false]);
        this.odj.iiz("winp", "#syu", [this.parent.bkm[f - 1], false]);
        if (i && i === true) {
            this.spt()
        }
    };
    this.iis = function(g, f) {
        this.wwx = g;
        this.odj.iiz("history", "#qrq", [g]);
        this.odj.iiz("card", "#qrq", [g, f, false]);
        this.xio = f
    };
    this.haj = function(f) {
        if (f == a || f == c) {
            this.chi = true
        } else {
            this.chi = false
        }
    };
    this.ecc = function() {
        if (this.parent.win > 0) {
            if (this.xio == 1) {
                this.parent.nej.ddz("gamblewin1")
            } else {
                if (this.xio == 2) {
                    this.parent.nej.ddz("gamblewin2")
                } else {
                    if (this.xio >= 3) {
                        this.parent.nej.ddz("gamblewin3")
                    }
                }
            }
            setTimeout(b.xtw, 1000)
        }
    };
    this.xtw = function() {
        b.spt();
        b.ber();
        b.pwt(true)
    };
    this.gpn = function() {
        this.odj.iiz("info", "#zgu", [true]);
        this.zgu(true, true);
        this.ber();
        this.odj.iiz("info", "#sgy", [0])
    };
    this.ber = function() {
        this.odj.iiz("card", "#qrq", [this.wwx, this.xio, true]);
        this.spt();
        this.chi = true;
        this.eqf = setInterval(b.yts, (b.xio < 3) ? b.dni[b.xio] : b.dni[3])
    };
    this.yts = function() {
        b.chi = !b.chi;
        b.odj.iiz("highblack", "#lhz", [b.chi]);
        b.odj.iiz("lowred", "#lhz", [!b.chi]);
        if (b.chi) {
            b.parent.nej.ddz("blink1");
            b.parent.nej.ckk("blink2")
        } else {
            b.parent.nej.ddz("blink2");
            b.parent.nej.ckk("blink1")
        }
        b.bkw()
    };
    this.pey = function() {
        clearInterval(this.eqf);
        b.parent.nej.ckk("blink1");
        b.parent.nej.ckk("blink2");
        this.odj.iiz("highblack", "#lhz", [false]);
        this.odj.iiz("lowred", "#lhz", [false])
    };
    this.tlr = function(g, f) {
        this.odj.iiz("info", "#urj", [f]);
        this.odj.iiz("info", "#cdy", [g, f])
    };
    this.pcj = function() {
        this.odj = new chu();
        this.odj.lya();
        this.odj.mwi("buttons");
        this.odj.mwi("displays");
        this.odj.mwi("bbuttons");
        this.odj.mwi("sbuttons")
    };
    this.esp = function(f) {
        this.odj.wvv("collect", this.sja(f.laf, this.parent.language.ucp, this.parent.nej.pvr("btn"), (!this.parent.gmj) ? this.parent.sbz.mrw : null, this.eda, f.wgs), ["buttons", "bbuttons"]);
        this.odj.wvv("half", this.sja(f.rfj, this.parent.language.qyd, this.parent.nej.pvr("btn_s"), (!this.parent.gmj) ? this.parent.sbz.csi : null, this.wpd, f.whw), ["buttons", "sbuttons"]);
        this.odj.wvv("lowred", this.sja(f.hdm, (this.lhg == 1) ? this.parent.language.swj : this.parent.language.oar, this.parent.nej.pvr("btn_s"), (!this.parent.gmj) ? this.parent.sbz.nzh : null, this.ybk, f.whw), ["buttons", "sbuttons"]);
        this.odj.wvv("highblack", this.sja(f.uwn, (this.lhg == 1) ? this.parent.language.tpr : this.parent.language.mob, this.parent.nej.pvr("btn_s"), (!this.parent.gmj) ? this.parent.sbz.zlu : null, this.tns, f.whw), ["buttons", "sbuttons"])
    };
    this.yzm = function(f) {
        this.odj.wvv("creditd", this.rlh(f.jbh, (this.parent.vtm()) ? this.parent.language.trm : this.parent.language.eqm, this.parent.bug(this.parent.eqm), f.display), ["displays"]);
        this.odj.wvv("wind", this.rlh(f.rrc, this.parent.language.win, this.parent.bug(this.parent.win), f.display), ["displays"])
    };
    this.wef = function(f) {
        var g = new tuo();
        g.lya(f.hyp.ebf, this.context2D);
        g.parent = this;
        g.nxv(f.hyp);
        this.odj.wvv("info", g)
    };
    this.mav = function(i, f) {
        var g = new azr();
        g.lya(i.bac.ebf, this.context2D);
        g.ugy = f;
        g.ioj = this.ioj;
        g.nxv(i.bac);
        this.odj.wvv("card", g)
    };
    this.bzb = function(g, f) {
        var i = new rme();
        i.lya(g.dac.ebf, this.context2D);
        i.ugy = f;
        i.ioj = this.ioj;
        i.nxv(g.dac);
        this.odj.wvv("history", i)
    };
    this.ikt = function(f) {
        var g = new wnq();
        g.lya(f.wdt.ebf, null, this.context2D, this.parent.nej.pvr("winpanel"), "");
        g.parent = this;
        g.nxv(f.wdt);
        this.odj.wvv("winp", g)
    };
    this.sja = function(j, m, l, g, k, i) {
        var f = new mlm();
        f.lya(j, this.context2D, null, l, null, m);
        f.parent = this;
        f.fyd = k;
        f.nxv(i);
        if (g) {
            f.lfi = g.xbc
        }
        return f
    };
    this.rlh = function(g, k, j, f) {
        var i = new faq();
        i.lya(g, this.context2D, null, k, j);
        i.parent = this;
        i.ugy = this.parent.nej.pvr("display_effect");
        i.nxv(f);
        return i
    };
    this.pwt = function(f) {
        this.odj.hlg("buttons", "#qhj", [f])
    };
    this.eda = function() {
        b.pwt(false);
        b.parent.xwo.ucp()
    };
    this.wpd = function() {
        b.pwt(false);
        b.parent.xwo.qyd()
    };
    this.ybk = function() {
        b.pwt(false);
        b.chi = false;
        b.pey();
        b.parent.xwo.ytt((b.lhg == 1) ? d : c)
    };
    this.tns = function() {
        b.pwt(false);
        b.chi = true;
        b.pey();
        b.parent.xwo.ytt((b.lhg == 1) ? a : e)
    };
    this.kpb = function() {
        b.odj.iiz("info", "#yzw");
        setTimeout(b.vsa, 10)
    };
    this.vsa = function() {
        b.fri = false;
        b.wit = (b.parent.win > b.parent.totalBet) ? true : false;
        b.map = 10;
        b.ysk = 0;
        b.uvc = b.parent.win;
        b.klr = b.parent.eqm - b.parent.win;
        b.mpy = 0;
        b.tec = b.parent.win;
        b.boq = new Date().getTime();
        b.dxc = true;
        b.zve = setTimeout(b.eir, b.parent.zjv)
    };
    this.eir = function() {
        var i = Math.round(b.tec / b.map),
            f = 0,
            g = 0;
        if (b.tec > 0) {
            if (!b.fri) {
                b.parent.nej.ckk("collect");
                b.parent.nej.ddz("collect");
                b.fri = true
            }
            b.tec -= i;
            if (b.tec < 0) {
                b.tec = 0
            }
            b.odj.iiz("wind", "#rkw", [(b.parent.bug(b.uvc - (b.parent.win - b.tec))), true]);
            b.odj.iiz("creditd", "#rkw", [(b.parent.bug(b.klr + (b.parent.win - b.tec))), true]);
            b.ach(b.parent.sac(b.uvc - (b.parent.win - b.tec)));
            b.ysk++;
            b.map -= 1;
            f = b.parent.wyf;
            g = new Date().getTime();
            f = b.parent.zjv + (b.ysk * b.parent.zjv - (g - b.boq));
            b.zve = setTimeout(b.eir, f)
        } else {
            b.parent.nej.ckk("collect");
            b.parent.nej.ddz("collectend");
            b.dxc = false;
            clearTimeout(b.zve);
            setTimeout(b.parent.sal, 100)
        }
    };
    this.ach = function(f) {
        this.odj.iiz("winp", "#rkw", [f, true])
    };
    this.spt = function(p, n, q, l) {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        var g = (p != null && n != null && q != null && l != null),
            r = this.context2D,
            o = null,
            f = this.odj.bke(),
            k = this.parent.nej.pvr("btn_back");
        r.save();
        if (g) {
            r.beginPath();
            r.rect(p, n, q, l);
            r.closePath();
            r.clip()
        }
        if (k) {
            r.drawImage(this.ugy, (this.duv.x == 0) ? this.duv.width : 0, this.height - k.height);
            o = r.createLinearGradient(this.duv.x, this.duv.y, this.duv.x + this.duv.width, this.duv.y);
            o.addColorStop(0.2, this.aof);
            o.addColorStop(1, this.ssv);
            r.fillStyle = o;
            r.save();
            if (this.parent.osh === jyv.bxp.aqn) {
                r.translate(this.duv.width / 2, this.duv.height / 2);
                r.rotate(Math.PI);
                r.translate(-this.duv.width / 2, -this.duv.height / 2)
            }
            r.fillRect(this.duv.x, this.duv.y, this.duv.width, this.duv.height);
            r.drawImage(k, this.duv.x, this.duv.y, this.duv.width, this.duv.height);
            r.restore()
        } else {
            r.drawImage(this.ugy, 0, 0);
            if (this.ocl != null) {
                jyv.oot.jbx(r, this.duv.x, this.duv.y, this.duv.width, this.duv.height, this.ocl, 1)
            }
        }
        if (!((this.parent.state == jyv.dze.gal.zqe || this.parent.state == jyv.dze.gal.gur || this.parent.state == jyv.dze.gal.jzq) && this.parent.gmj)) {
            this.uup(r)
        }
        for (var j = 0, m = f.length; j < m; j++) {
            f[j].spt()
        }
        r.restore();
        if (this.lub && this.tgs) {
            if (g) {
                this.lub.drawImage(this.tgs, p, n, q, l, this.x + p, this.y + n, q, l)
            } else {
                this.lub.drawImage(this.tgs, this.x, this.y)
            }
        }
    };
    this.bkw = function() {
        var f = this.context2D,
            g = this.parent.nej.pvr("btn_back");
        f.save();
        f.beginPath();
        f.rect(this.fdx.x, this.fdx.y, this.fdx.width, this.fdx.height);
        f.closePath();
        f.clip();
        if (g) {
            f.drawImage(this.ugy, (this.duv.x == 0) ? this.duv.width : 0, this.height - g.height)
        } else {
            f.drawImage(this.ugy, 0, 0)
        }
        this.uup(f);
        f.restore();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.tgs, this.x, this.y)
        }
    };
    this.uup = function(f) {
        if (this.lhg == 1) {
            if (this.chi) {
                f.drawImage(this.mlr, this.fdx.x, this.fdx.y)
            } else {
                f.drawImage(this.clh, this.fdx.x, this.fdx.y + this.fdx.height - this.clh.height)
            }
        } else {
            if (this.chi) {
                f.drawImage(this.bmf, this.fdx.x, this.fdx.y)
            } else {
                f.drawImage(this.gdb, this.fdx.x, this.fdx.y + this.fdx.height - this.gdb.height)
            }
        }
    }
}
wzk.prototype = new srr;

function abh() {
    this.dmm = [];
    this.gds = function(a) {
        abh.prototype.gds.call(this, a);
        try {
            this.dmm = a.mdf
        } catch (b) {
            console.error(b)
        }
    };
    this.spt = function() {
        if (!this.fam() || !this.parent.dmt()) {
            return
        }
        var b = this.context2D,
            g = this.height - 2 * this.vbn,
            c = this.width,
            d = Math.round(g / this.dzx.length),
            f = (this.xvu < d) ? this.xvu : d - 2;
        b.save();
        if (this.ugy != null) {
            b.drawImage(this.ugy, 0, 0)
        }
        for (var e = 0, a = this.dzx.length; e < a; e++) {
            if (e == 0) {
                this.gyy = this.dmm[0]
            } else {
                if (e < 3) {
                    this.gyy = this.dmm[1]
                } else {
                    if (e < 5) {
                        this.gyy = this.dmm[2]
                    } else {
                        this.gyy = this.dmm[3]
                    }
                }
            }
            jyv.oot.lop(b, this.dzx[e], this.gyy, 0, this.vbn + d * (e), c, f, this.shb, f, this.iuq, this.vbn);
            jyv.oot.gnh(b, this.parent.sac(this.lsp[e]), this.gyy, 0, this.vbn + d * (e), c, f, this.shb, f, this.iuq, this.vbn)
        }
        b.restore();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.tgs, this.x, this.y)
        }
    }
}
abh.prototype = new bew;

function cug() {
    this.pjr = [];
    this.pwl = [];
    this.eak = "verdana";
    this.cnv = "bold italic";
    this.jib = "white";
    this.cmd = 12;
    this.hqd = new kyc();
    this.gds = function(a) {
        cug.prototype.gds.call(this, a);
        try {
            this.eak = a.wgh;
            this.cnv = a.pmv;
            this.jib = a.ybs
        } catch (b) {
            console.error(b)
        }
    };
    this.nxv = function(a) {
        cug.prototype.nxv.call(this, a);
        try {
            this.pwl = a.vcw;
            this.hqd = a.ecl;
            this.cmd = a.swf
        } catch (b) {
            console.error(b)
        }
    };
    this.spt = function() {
        var a = this.context2D;
        a.save();
        if (this.bwv) {
            a.strokeStyle = this.bwv
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.csr;
        a.font = this.iuq + " " + this.xvu + "px " + this.shb;
        a.textBaseline = "bottom";
        a.drawImage(this.ugy, 0, 0);
        a.textAlign = "left";
        a.fillStyle = this.iaw;
        for (var b = 0; b < this.pjr.length; b++) {
            this.vac(this.pjr[b], this.pwl[b], this.xvu, this.shb)
        }
        a.textAlign = "center";
        a.fillStyle = this.gyy;
        for (var b = 0; b < this.vhh.length; b++) {
            this.dbf(this.vhh[b], this.nvf[b], this.xvu, this.shb)
        }
        jyv.oot.cpn(a, jyv.dcm.sqv(jyv.dcm.language.vov), this.jib, this.hqd.x, this.hqd.y, this.hqd.width, this.hqd.height, this.eak, this.cmd, this.cnv);
        a.restore();
        if (this.lub && this.tgs) {
            this.lub.drawImage(this.tgs, this.x, this.y)
        }
    }
}
cug.prototype = new zpy;

function fov() {
    this.lqz = "JokerCardPoker";
    this.quh = "Joker Card";
    this.tgg = jyv.dwe.value30 + "/jokercardpoker/images/";
    this.gak = jyv.dwe.value30 + "/jokercardpoker/sounds/";
    this.ymm = 10;
    this.lhg = 1;
    this.ywi = new kyc(0, 0, 0, 0);
    this.rja = null;
    this.lvj = null;
    this.lvp = null;
    this.faf = function() {
        this.bkm = [this.language.suf, this.language.wgd, this.language.kgh, this.language.sqk, this.language.unh, this.language.iwt, this.language.phx, this.language.izh, this.language.axo, this.language.wfu];
        this.oya = [1, 2, 3, 5, 7, 10, 40, 100, 500, 1000];
        this.ioj = [-1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 52, -1, -1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, -1, -1, -1, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53];
        this.gdq = [79];
        this.stq = [15];
        this.lpf = false;
        this.thn("1_0_61")
    };
	gameController=this;
    this.ene = function() {
        this.xwo = new qik().lya(this, jyv.dwe.value6)
    };
    this.ppu = function() {
        this.sbz = new zfp()
    };
    this.awt = function() {
        this.pzk = new wzk();
        this.pzk.lya(this.bxp.ytt.ebf, null, this.context2D);
        this.pzk.parent = this;
        this.pzk.lhg = this.lhg;
        this.pzk.ugy = this.nej.pvr("g_back");
        this.pzk.gdb = this.nej.pvr("g_red");
        this.pzk.bmf = this.nej.pvr("g_black");
        this.pzk.mlr = this.nej.pvr("g_high");
        this.pzk.clh = this.nej.pvr("g_low");
        this.pzk.dgs(this.bxp.ytt, this.nej.pvr("cards"), this.nej.pvr("cardinfo"));
        this.pzk.tlr(this.rji, 0);
        this.pzk.gds(this.style.ytt);
        this.pzk.nxv(this.bxp.ytt);
        this.pzk.zgu(false)
    };
    this.ikt = function() {
        var a = new wnq();
        a.lya(this.bxp.wdt.ebf, this.context2D, null, this.nej.pvr("winpanel"), "");
        a.parent = this;
        a.nxv(this.bxp.wdt);
        a.gds(this.style.wdt);
        a.zgu(false);
        this.cwl.wvv("winp", a)
    };
    this.fmp = function() {
        var a = new abh();
        a.lya(this.bxp.gdk.ebf, null, this.context2D);
        a.parent = this;
        a.ugy = this.nej.pvr("paytable");
        a.nxv(this.bxp.gdk);
        a.gds(this.style.gdk);
        a.lvw(this.oya);
        a.nhe(this.bkm);
        this.cwl.wvv("paytable", a)
    };
    this.hrv = function() {
        this.ram();
        this.qzl();
        fov.prototype.hrv.call(this)
    };
    this.ram = function() {
        this.rja = new cug();
        this.rja.lya(this.bxp.dqz.win.ebf, null, this.zpr.context2D, this.nej.pvr("help"));
        this.rja.parent = this.zpr;
        this.rja.vhh[0] = this.language.rbk;
        this.rja.vhh[1] = this.language.jwp;
        this.rja.vhh[2] = this.language.rgz;
        this.rja.vhh[3] = this.language.bya;
        this.rja.vhh[4] = this.language.kvv;
        this.rja.vhh[5] = this.language.fqr;
        this.rja.vhh[6] = this.language.odd;
        this.rja.vhh[7] = this.language.vzf;
        this.rja.vhh[8] = this.language.bqz;
        this.rja.vhh[9] = this.language.dfy;
        this.rja.pjr[0] = this.language.wfu;
        this.rja.pjr[1] = this.language.axo;
        this.rja.pjr[2] = this.language.izh;
        this.rja.pjr[3] = this.language.phx;
        this.rja.pjr[4] = this.language.iwt;
        this.rja.pjr[5] = this.language.unh;
        this.rja.pjr[6] = this.language.sqk;
        this.rja.pjr[7] = this.language.kgh;
        this.rja.pjr[8] = this.language.wgd;
        this.rja.pjr[9] = this.language.suf;
        this.rja.gds(this.style.dqz.win);
        this.rja.nxv(this.bxp.dqz.win);
        if (!this.cwl.drl("tops")) {
            this.zpr.hgc(this.rja)
        }
    };
    this.qzl = function() {
        var a = this.cwl.drl("tops");
        if (a) {
            this.lvj = new cug();
            this.lvj.lya(this.bxp.top.win.ebf, null, a.context2D, this.nej.pvr("help_top"));
            this.lvj.parent = a;
            this.lvj.vhh[0] = this.language.rbk;
            this.lvj.vhh[1] = this.language.jwp;
            this.lvj.vhh[2] = this.language.rgz;
            this.lvj.vhh[3] = this.language.bya;
            this.lvj.vhh[4] = this.language.kvv;
            this.lvj.vhh[5] = this.language.fqr;
            this.lvj.vhh[6] = this.language.odd;
            this.lvj.vhh[7] = this.language.vzf;
            this.lvj.vhh[8] = this.language.bqz;
            this.lvj.vhh[9] = this.language.dfy;
            this.lvj.pjr[0] = this.language.wfu;
            this.lvj.pjr[1] = this.language.axo;
            this.lvj.pjr[2] = this.language.izh;
            this.lvj.pjr[3] = this.language.phx;
            this.lvj.pjr[4] = this.language.iwt;
            this.lvj.pjr[5] = this.language.unh;
            this.lvj.pjr[6] = this.language.sqk;
            this.lvj.pjr[7] = this.language.kgh;
            this.lvj.pjr[8] = this.language.wgd;
            this.lvj.pjr[9] = this.language.suf;
            this.lvj.gds(this.style.dqz.win);
            this.lvj.nxv(this.bxp.top.win);
            a.hgc(this.lvj)
        }
    };
    this.hmc = function() {
        if (this.lhg == 1) {
            this.rji[0] = this.language.rez
        } else {
            this.rji[0] = this.language.leu
        }
        this.pzk.tlr(this.rji, 0);
        this.pzk.odj.iiz("creditd", "#syu", [(this.vtm()) ? this.language.trm : this.language.eqm, false]);
        this.pzk.odj.iiz("wind", "#syu", [this.language.win, false]);
        this.pzk.odj.iiz("collect", "#rkw", [this.language.ucp, false]);
        this.pzk.odj.iiz("half", "#rkw", [this.language.qyd, false]);
        this.pzk.odj.iiz("lowred", "#rkw", [(this.pzk.lhg == 1) ? this.language.swj : this.language.oar, false]);
        this.pzk.odj.iiz("highblack", "#rkw", [(this.pzk.lhg == 1) ? this.language.tpr : this.language.mob, false]);
        if (this.rja != null) {
            this.rja.vhh[0] = this.language.rbk;
            this.rja.vhh[1] = this.language.jwp;
            this.rja.vhh[2] = this.language.rgz;
            this.rja.vhh[3] = this.language.bya;
            this.rja.vhh[4] = this.language.kvv;
            this.rja.vhh[5] = this.language.fqr;
            this.rja.vhh[6] = this.language.odd;
            this.rja.vhh[7] = this.language.vzf;
            this.rja.vhh[8] = this.language.bqz;
            this.rja.vhh[9] = this.language.dfy;
            this.rja.pjr[0] = this.language.wfu;
            this.rja.pjr[1] = this.language.axo;
            this.rja.pjr[2] = this.language.izh;
            this.rja.pjr[3] = this.language.phx;
            this.rja.pjr[4] = this.language.iwt;
            this.rja.pjr[5] = this.language.unh;
            this.rja.pjr[6] = this.language.sqk;
            this.rja.pjr[7] = this.language.kgh;
            this.rja.pjr[8] = this.language.wgd;
            this.rja.pjr[9] = this.language.suf
        }
        if (this.lvj != null) {
            this.lvj.vhh[0] = this.language.rbk;
            this.lvj.vhh[1] = this.language.jwp;
            this.lvj.vhh[2] = this.language.rgz;
            this.lvj.vhh[3] = this.language.bya;
            this.lvj.vhh[4] = this.language.kvv;
            this.lvj.vhh[5] = this.language.fqr;
            this.lvj.vhh[6] = this.language.odd;
            this.lvj.vhh[7] = this.language.vzf;
            this.lvj.vhh[8] = this.language.bqz;
            this.lvj.vhh[9] = this.language.dfy;
            this.lvj.pjr[0] = this.language.wfu;
            this.lvj.pjr[1] = this.language.axo;
            this.lvj.pjr[2] = this.language.izh;
            this.lvj.pjr[3] = this.language.phx;
            this.lvj.pjr[4] = this.language.iwt;
            this.lvj.pjr[5] = this.language.unh;
            this.lvj.pjr[6] = this.language.sqk;
            this.lvj.pjr[7] = this.language.kgh;
            this.lvj.pjr[8] = this.language.wgd;
            this.lvj.pjr[9] = this.language.suf
        }
    };
    this.jag = function() {
        this.rji = [];
        if (this.lhg == 1) {
            this.rji[0] = this.language.rez
        } else {
            this.rji[0] = this.language.leu
        }
    };
    this.oov = function() {
        if (this.rja) {
            this.rja.dho(this.bxp.dqz.win.ebf);
            this.rja.nxv(this.bxp.dqz.win)
        }
    };
    this.gna = function() {
        if (this.pzk) {
            this.pzk.dho(this.bxp.ytt.ebf);
            this.pzk.nxv(this.bxp.ytt)
        }
    };
    this.mwx = function() {
        fov.prototype.mwx.call(this);
        var a = this.tgg + this.bxp.type + "/";
        this.nej.eef("paytable", a + "paytable.png");
        this.nej.eef("red_black", a + "red_black.png");
        this.nej.eef("high_low", a + "high_low.png");
        this.nej.eef("cardinfo", a + "cardInfo.jpg");
        this.nej.eef("g_high", a + "high.png");
        this.nej.eef("g_low", a + "low.png");
        this.nej.eef("g_red", a + "red.png");
        this.nej.eef("g_black", a + "black.png");
        this.nej.eef("help_top", a + "help_top.jpg")
    };
    this.jba = function() {
        fov.prototype.jba.call(this);
        var a = this.gak;
        this.nej.xug("gamblewin1", null, false, a + "win11");
        this.nej.xug("gamblewin2", null, false, a + "win21");
        this.nej.xug("gamblewin3", null, false, a + "win31");
        this.nej.xug("blink1", null, false, a + "hi");
        this.nej.xug("blink2", null, false, a + "low")
    };
    this.vfi = function(b) {
        var a = this.cwl.drl("winp");
        if (a) {
            a.rkw(this.sac(b), false);
            a.syu(this.bkm[this.jdn - 1], false);
            a.zgu(true)
        }
        this.cwl.iiz("paytable", "#zgu", [false])
    };
    this.ese = function() {
        this.cwl.iiz("paytable", "#zgu", [true]);
        fov.prototype.ese.call(this)
    };
    this.spt = function(l, k, m, s) {
        if (jyv.dcm.dmt()) {
            var a = (l != null && k != null && m != null && s != null),
                c = (a === true) ? new kyc(l, k, m, s) : new kyc(jyv.dcm.bxp.dcm.ebf.x, jyv.dcm.bxp.dcm.ebf.y, jyv.dcm.bxp.dcm.ebf.width, jyv.dcm.bxp.dcm.ebf.height),
                p = jyv.dcm.context2D,
                e = (jyv.dcm.dbs === true) ? jyv.dcm.style.dcm.yig : jyv.dcm.style.dcm.backgroundColor,
                v = jyv.dcm.cwl.drl("stats"),
                b = jyv.dcm.cwl.drl("history"),
                t = jyv.dcm.cwl.drl("topb"),
                f = jyv.dcm.cwl.drl("topi"),
                g = jyv.dcm.cwl.drl("betsel"),
                u = jyv.dcm.cwl.drl("paytable"),
                o = jyv.dcm.cwl.drl("tops"),
                j = jyv.dcm.cwl.drl("winp"),
                n = jyv.dcm.cwl.drl("autop"),
                d = jyv.dcm.cwl.drl("settings");
            jyv.dcm.jxm = false;
            p.save();
            if (a) {
                p.beginPath();
                p.rect(l, k, m, s);
                p.closePath();
                p.clip()
            }
            p.clearRect(0, 0, jyv.dcm.width, jyv.dcm.height);
            p.restore();
            if (jyv.dcm.bxp.osk) {
                jyv.oot.jbx(p, jyv.dcm.bxp.dcm.ebf.x - jyv.dcm.bxp.dcm.owp, jyv.dcm.bxp.dcm.ebf.y - jyv.dcm.bxp.dcm.owp, jyv.dcm.bxp.dcm.ebf.width + 2 * jyv.dcm.bxp.dcm.owp, jyv.dcm.bxp.dcm.ebf.height + 2 * jyv.dcm.bxp.dcm.owp, e, 1)
            }
            if (b) {
                b.spt()
            }
            if (f) {
                f.spt()
            }
            if (o && o.fam()) {
                o.spt()
            }
            if (v && v.fam()) {
                v.spt()
            } else {
                if (jyv.dcm.zpr != null && jyv.dcm.zpr.fam()) {
                    jyv.dcm.zpr.spt()
                } else {
                    if (jyv.dcm.pzk != null && jyv.dcm.pzk.fam()) {
                        jyv.dcm.pzk.spt()
                    } else {
                        p.drawImage(jyv.dcm.nej.pvr("back"), jyv.dcm.bxp.dcm.ebf.x, jyv.dcm.bxp.dcm.ebf.y);
                        if (jyv.dcm.gmy) {
                            jyv.dcm.gmy.spt()
                        }
                        for (var q = 0, r = jyv.dcm.wwx.length; q < r; q++) {
                            jyv.dcm.wwx[q].vpw(p);
                            jyv.dcm.wwx[q].spt()
                        }
                        if (j) {
                            j.spt()
                        }
                        if (u) {
                            u.spt()
                        }
                        jyv.dcm.uup(p)
                    }
                }
            }
            if (g) {
                g.spt()
            }
            if (t) {
                t.spt()
            }
            if (n) {
                n.spt()
            }
            if (d) {
                d.spt()
            }
        }
    };
    this.uup = function(a) {
        if (this.lhg == 1) {
            a.drawImage(this.nej.pvr("high_low"), this.bxp.zqq.ebf.x, this.bxp.zqq.ebf.y, this.bxp.zqq.ebf.width, this.bxp.zqq.ebf.height)
        } else {
            a.drawImage(this.nej.pvr("red_black"), this.bxp.zqq.ebf.x, this.bxp.zqq.ebf.y, this.bxp.zqq.ebf.width, this.bxp.zqq.ebf.height)
        }
    };
    this.ufw = function(a) {
        this.osh = a;
        if (a == jyv.bxp.qjs) {
            return new wbh()
        } else {
            if (a == jyv.bxp.uxs) {
                return new hwy()
            } else {
                if (a == jyv.bxp.zgh) {
                    return new fvs()
                } else {
                    if (a == jyv.bxp.eyw) {
                        return new vcm()
                    } else {
                        if (a == jyv.bxp.gsf) {
                            return new cvj()
                        } else {
                            if (a == jyv.bxp.hsg) {
                                return new pdx()
                            } else {
                                if (a == jyv.bxp.mqa) {
                                    return new shl()
                                } else {
                                    if (a == jyv.bxp.udj) {
                                        return new tza()
                                    } else {
                                        if (a == jyv.bxp.she) {
                                            return new roo()
                                        } else {
                                            if (a == jyv.bxp.aqn) {
                                                return new gfs()
                                            } else {
                                                if (a == jyv.bxp.jdb) {
                                                    return new blt()
                                                }
                                            }
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
    this.gyg = function() {
        this.style = new smr()
    }
}
fov.prototype = new rdh;

function upk() {
    jyv.tgc = -1;
    jyv.dcm = new fov();
    jyv.dcm.lya({
        bxp: jyv.dwe.value14
    });
    window.focus()
}

function rby() {
    if (jyv.dcm != null) {
        if (jyv.tgc >= 0) {
            clearTimeout(jyv.tgc)
        }
        jyv.tgc = setTimeout(jyv.dcm.bvm, 200)
    }
}

function veq() {
    if (jyv.dcm != null) {
        if (jyv.tgc >= 0) {
            clearTimeout(jyv.tgc)
        }
        jyv.tgc = setTimeout(jyv.dcm.fkh, 200)
    }
}
if (jyv.oot.nxu()) {
    window.onorientationchange = veq;
    window.onresize = veq
} else {
    window.onresize = rby
}
if (jyv.dwe.value9) {
    window.onload = upk
} else {
    upk()
};