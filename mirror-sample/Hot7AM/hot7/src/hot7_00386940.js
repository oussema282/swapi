
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"Hot7AM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
		gameWS.onmessage=function(k){
		
		var tmpMess=k.data.split("#");
		
			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.ywg.etp!=undefined){
			
			if(gameController.cfy!=parseInt(tmpMess[1])){
				
			gameController.cfy=parseInt(tmpMess[1]);	
			gameController.ywg.etp.tvc("creditd", "#qib", [gameController.ztt(tmpMess[1]), true]);	
				
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////


function jdo() {
    this.zjk = "Info";
    this.itf = "DEPOSIT";
    this.audio = "AUDIO";
    this.ysj = "TIP";
    this.bye = "TURBO";
    this.mik = "STATISTIC";
    this.vfc = "HISTORY";
    this.bcr = "SHORTCUTS";
    this.cth = "HELP";
    this.fqj = "PAYTABLE";
    this.language = "LANGUAGE";
    this.inh = ">>";
    this.skx = "<<";
    this.sbu = "Fullscreen is not supported!"
}

function mwg() {
    this.tbr = "MINIMUM BET IS";
    this.sxa = "MAX BET";
    this.xjg = "MIN.BET";
    this.tmd = "MAX.BET";
    this.oml = "BET";
    this.start = "START";
    this.cth = "HELP";
    this.fqj = "PAYTABLE";
    this.yyl = "MENU";
    this.hin = "MORE|GAMES";
    this.qhb = "STOP";
    this.cfy = "CREDIT";
    this.mua = "GAME OVER";
    this.ntt = "WINNER!";
    this.nfu = "GOOD LUCK!";
    this.win = "WIN";
    this.zry = "LAST WIN";
    this.stb = "COLLECT";
    this.bco = "COLLECT";
    this.zli = "GAMBLE";
    this.ryv = "AUTO|START";
    this.mrh = "HALF|GAMBLE";
    this.stm = "EXIT";
    this.ond = "START GAME";
    this.oad = "CHOOSE BET";
    this.rvn = "HALF";
    this.ret = "RETURN|TO GAME";
    this.awx = "Total Win";
    this.sov = "Warning";
    this.wey = "TOTAL";
    this.eqm = "PLEASE WAIT ...";
    this.ogm = "More Games";
    this.bye = "SPEED";
    this.oct = "Malfunction voids all pays and plays.";
    this.lcp = "C O N T I N U E";
    this.dzi = "AUTOSTART";
    this.umz = "PAYTABLE";
    this.aou = "GAMBLE";
    this.left = "LEFT";
    this.yud = "RIGHT";
    this.ok = "OK";
    this.yjf = "CANCEL";
    this.kru = "Gamble";
    this.lvk = "Half";
    this.kjj = "GAME RULES";
    this.jat = "GAME RULES";
    this.ifk = "Bonus!";
    this.bgw = "BONUS";
    this.jee = "PRESS ANY KEY TO CONTINUE";
    this.jse = "NOT ENOUGH CREDIT!";
    this.wor = "wins";
    this.tej = "V A L U E";
    this.of = "OF";
    this.wvq = "TOUCH THE SCREEN TO CONTINUE";
    this.pjk = "LOADING ...";
    this.mlf = "LOADING HISTORY ...";
    this.zxr = "Communication Error";
    this.glm = "You have reached one of the limits!";
    this.nfq = "You have reached the maximum amount of free games!";
    this.jyr = "Game will be closed";
    this.yxg = "Game will be restarted";
    this.bro = "WON";
    this.error = "ERROR";
    this.mbn = "FREEPLAY";
    this.siw = "AUTO";
    this.thl = "GAME ID";
    this.jue = "Playing Time";
    this.vqd = "last";
    this.hwv = "games";
    this.itf = "DEPOSIT";
    this.audio = "AUDIO";
    this.sxc = "MUSIC";
    this.iua = "FULLSCREEN";
    this.fit = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.fkr = "Do not show again";
    this.ynl = "Sounds can not be loaded!";
    this.qzr = "Resources missing!";
    this.knf = "Play without sound?";
    this.cvt = "SETTINGS";
    this.ntf = "Please turn your device!";
    this.zjk = "INFO";
    this.zch = "Please disable PRIVATE MODE in your browser to play the game.";
    this.kxs = "This game is optimized for Google Chrome.";
    this.cum = "Please use the current version of";
    this.ndt = "Unfortunately this browser is not fully supported.";
    this.deo = "This game can not be started in freeplay mode!";
    this.het = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.ekz = "Adjust the game interface to your needs!";
    this.nnx = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.yrh = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.cui = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.mik = "Statistic";
    this.fcz = "Total Games";
    this.zha = "Total Bets";
    this.ana = "Total Wins";
    this.fda = "Total Play Time";
    this.fnq = "I have read this message";
    this.daf = "EXIT|GAME";
    this.vfc = "History";
    this.szk = "No games played.";
    this.state = "STATE";
    this.alc = "Main Game";
    this.ron = "Auto Collected";
    this.hui = "Collected";
    this.wuc = "Bonusspins";
    this.zda = "Respin";
    this.hnt = "Bonus";
    this.cia = "First Deal";
    this.uin = "Second Deal";
    this.dvq = "Third Deal";
    this.ozf = "AUTOSTART SETTINGS";
    this.khs = "Amount of games:";
    this.bdh = "Stop autostart";
    this.gvm = "Credit lower than:";
    this.sgo = "Credit higher than:";
    this.gtu = "Win higher than:";
    this.jlp = "The autostart will be stopped at the beginning of the bonus.";
    this.pvb = "Share on Facebook";
    this.xej = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.rzt = "Reality Check";
    this.bvn = "You have requested a Reality Check.";
    this.rjz = "Press HISTORY to view your game history.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
mwg.prototype = new jdo;

function ajw() {
    this.tbr = "МИНИМАЛЬНАЯ СТАВКА -";
    this.sxa = "МАКС.|СТАВКА";
    this.xjg = "МИН.СТAВКА";
    this.tmd = "МАКС.СТAВКА";
    this.oml = "СТАВКА";
    this.start = "СТАРТ";
    this.cth = "ПОМОЩЬ";
    this.fqj = "ТАБЛИЦА ВЫПЛАТ";
    this.yyl = "МЕНЮ";
    this.hin = "ДРУГИЕ|ИГРЫ";
    this.qhb = "СТОП";
    this.cfy = "КРЕДИТ";
    this.mua = "КОНЕЦ ИГРЫ";
    this.ntt = "ПОБЕДИТЕЛЬ!";
    this.nfu = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.zry = "ПОСЛЕД. ВЫИГРЫШ";
    this.wor = "выйгрыши";
    this.stb = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.bco = "ЗАБРАТЬ ВЫИГРЫШ";
    this.zli = "ИГРА|НА|РИСК";
    this.ryv = "АВТО|ИГРА";
    this.mrh = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.stm = "ВЫХОД";
    this.ond = "НАЖМИТЕ СТАРТ";
    this.oad = "ВЫБЕРИТЕ СТАВКУ";
    this.rvn = "ВЗЯТЬ|1/2";
    this.jee = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.wvq = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.isc = "Множитель для Бонуса";
    this.nuc = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.awx = "ОБЩИЙ ВЫИГРЫШ";
    this.pjk = "Загрузка ...";
    this.mlf = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.jse = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.glm = "Достигнут один из лимитов!";
    this.sov = "Внимание";
    this.zxr = "ошибка обмена данных";
    this.nfq = "Вы получили максимальное количество свободных игр!";
    this.jyr = "Игра заканчивается";
    this.yxg = "Игра начинается заново";
    this.ifk = "Бонус!";
    this.bgw = "БОНУС";
    this.bro = "ВЫИГРЫШ";
    this.wey = "ВСЕГО";
    this.eqm = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.mbn = "FREEPLAY";
    this.ogm = "ВЫБОР ИГРЫ";
    this.thl = "GAME ID";
    this.jue = "Playing Time";
    this.vqd = "последняя";
    this.hwv = "игры";
    this.itf = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.sxc = "МУЗЫКА";
    this.bye = "СКОРОСТЬ";
    this.iua = "ПОЛНОЭКРАННЫЙ";
    this.fit = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.oct = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.lcp = "П Р О Д О Л Ж И Т Ь";
    this.fkr = "Больше не показывать";
    this.dzi = "АВТОИГРА";
    this.umz = "ТАБЛИЦА ВЫПЛАТ";
    this.aou = "ИГРА НА РИСК";
    this.ynl = "Звук не загружается!";
    this.qzr = "Ресурсы отсутствуют!";
    this.knf = "Играть без звука?";
    this.cvt = "НАСТРОЙКА";
    this.ntf = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.yud = "ПРАВО";
    this.siw = "АВТО";
    this.tej = "V A L U E";
    this.zjk = "ИНФОРМАЦИЯ";
    this.zch = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.kxs = "Настоящая игра оптимизирована для Google Chrome.";
    this.cum = "Используйте, пожалуйста, актуальную версию";
    this.ndt = "К сожалению нет полной поддержки браузера.";
    this.deo = "Запуск этой игры в режиме свободных игр невозможен!";
    this.het = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.ekz = "Приспособь интерфейс к своим потребностям!";
    this.xej = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.rzt = "Проверку реальности";
    this.bvn = "Вы запросили проверку реальности.";
    this.rjz = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.kjj = "ПРАВИЛА ИГРЫ";
    this.jat = "ПРАВИЛА ИГРЫ";
    this.nnx = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.yrh = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.cui = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.mik = "Статус";
    this.fcz = "количество игр";
    this.zha = "вся ставка";
    this.ana = "общий выигрыш";
    this.fda = "общее время игры";
    this.fnq = "Я сообщение прочитал.";
    this.daf = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.vfc = "История";
    this.szk = "нет истории.";
    this.state = "STATE";
    this.alc = "Main Game";
    this.ron = "Auto Collected";
    this.hui = "Collected";
    this.wuc = "Bonusspins";
    this.kru = "Gamble";
    this.lvk = "Half";
    this.zda = "Respin";
    this.hnt = "Bonus";
    this.cia = "First Deal";
    this.uin = "Second Deal";
    this.dvq = "Third Deal";
    this.yjf = "ИЗМЕНИТЬ";
    this.ozf = "НАСТРОЙКА АВТОСТАРТА";
    this.khs = "Количество игр:";
    this.bdh = "Автостарт остановить";
    this.gvm = "Кредит ниже, чем:";
    this.sgo = "Кредит выше, чем:";
    this.gtu = "Выигрыш выше, чем:";
    this.jlp = "Автостарт прерывается, если начинается бонусная игра.";
    this.pvb = "Поделись в фейсбук";
    this.mzg = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
ajw.prototype = new jdo;

function byg() {
    this.tbr = "APUESTA MINIMA ES";
    this.sxa = "APUESTA|MAXIMA";
    this.xjg = "APUESTA MIN.";
    this.tmd = "APUESTA MAX.";
    this.oml = "APUESTA";
    this.start = "START";
    this.cth = "AYUDA";
    this.fqj = "PLAN DE|GANANCIAS";
    this.yyl = "MENU";
    this.hin = "MAS|JUEGOS";
    this.qhb = "PARADA";
    this.cfy = "CREDITOS";
    this.mua = "FIN DEL JUEGO";
    this.ntt = "¡GANADOR!";
    this.nfu = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.zry = "ULTIMOS PREMIO";
    this.wor = "gana";
    this.stb = "COBRAR";
    this.bco = "COBRAR";
    this.zli = "RIESGO";
    this.ryv = "AUTO|START";
    this.mrh = "MEDIA|APUESTA";
    this.of = "DE";
    this.stm = "SALIR";
    this.ond = "¡PULSE START!";
    this.oad = "ELIJA SU APUESTA";
    this.rvn = "MITAD";
    this.jee = "PULSE UNA TECLA PARA CONTINUAR";
    this.wvq = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.awx = "Premio total";
    this.pjk = "CARGANDO ...";
    this.mlf = "CARGANDO HISTORIAL ...";
    this.jse = "No hay bastante CREDITO";
    this.glm = "¡Ha alcanzado uno de los limites!";
    this.sov = "Advertencia";
    this.zxr = "Error de comunicación";
    this.nfq = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.jyr = "El juego se cerrará";
    this.yxg = "El juego se reiniciará";
    this.ifk = "¡BONUS!";
    this.bgw = "BONUS";
    this.bro = "GANADO";
    this.wey = "TOTAL";
    this.sno = "TURBO SI";
    this.xtl = "TURBO NO";
    this.eqm = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.mbn = "FREEPLAY";
    this.ogm = "MAS JUEGOS";
    this.thl = "ID DE JUEGO";
    this.jue = "Playing Time";
    this.vqd = "ultimos";
    this.hwv = "juegos";
    this.itf = "DEPÓSITO";
    this.audio = "AUDIO";
    this.sxc = "MÚSICA";
    this.bye = "VELOCIDAD";
    this.iua = "PANTALLA COMPLETA";
    this.fit = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.oct = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.lcp = "A D E L A N T E";
    this.fkr = "No mostrar de nuevo";
    this.dzi = "AUTOSTART";
    this.umz = "PLAN DE GANANCIAS";
    this.aou = "RIESGO";
    this.ynl = "No se pueden cargar los sonidos.";
    this.qzr = "Faltan recursos.";
    this.knf = "¿Jugar sin sonido?";
    this.cvt = "AJUSTES";
    this.tej = "V A L U E";
    this.ntf = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.yud = "DERECHA";
    this.siw = "AUTOMÁTICO";
    this.zjk = "INFORMACIÓN";
    this.zch = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.kxs = "Este juego está optimizado para Google Chrome.";
    this.cum = "Use la versión actual de";
    this.ndt = "Desafortunadamente, este explorador no es compatible.";
    this.deo = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.het = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.ekz = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.xej = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.rzt = "Reality Check";
    this.bvn = "Has solicitado un Reality Check.";
    this.rjz = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.kjj = "REGLAS DEL JUEGO";
    this.jat = "REGLAS|DEL JUEGO";
    this.nnx = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.yrh = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.cui = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.mik = "ESTADO";
    this.fcz = "Número de juegos";
    this.zha = "Apuesta total";
    this.ana = "Ganancia total";
    this.fda = "Tiempo total de juego";
    this.fnq = "He leído el mensaje.";
    this.daf = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.vfc = "HISTORIAL";
    this.szk = "Aún no hay juegos.";
    this.state = "Estado";
    this.alc = "Juego principal";
    this.ron = "Ganancia automática";
    this.hui = "Ganancia";
    this.wuc = "BONUSSPINS";
    this.kru = "Apuesta";
    this.lvk = "Mitad";
    this.zda = "Respin";
    this.hnt = "Bonus";
    this.cia = "Primera mano";
    this.uin = "Segunda mano";
    this.dvq = "Tercera mano";
    this.yjf = "CANCELAR";
    this.ozf = "CONFIGURACIONES DE AUTOSTART";
    this.khs = "Cantidad de juegos:";
    this.bdh = "Detener Autostart";
    this.gvm = "Crédito menor que:";
    this.sgo = "Crédito mayor que:";
    this.gtu = "Ganancia mayor que:";
    this.jlp = "El Autostart se detendrá al principio del bonus.";
    this.pvb = "Compartir en Facebook";
    this.mzg = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
byg.prototype = new jdo;

function suo() {
    this.tbr = "MINIMALER EINSATZ IST";
    this.sxa = "MAX. EINSATZ";
    this.xjg = "MIN. EINSATZ";
    this.tmd = "MAX. EINSATZ";
    this.oml = "EINSATZ";
    this.start = "START";
    this.cth = "HILFE";
    this.fqj = "GEWINNPLAN";
    this.yyl = "MENÜ";
    this.hin = "MEHR|SPIELE";
    this.cfy = "KREDIT";
    this.mua = "SPIEL ENDE";
    this.ntt = "GEWINNER!";
    this.nfu = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.zry = "LETZTER GEWINN";
    this.wor = "gewinnt";
    this.stb = "NEHMEN";
    this.bco = "NEHMEN";
    this.zli = "RISIKO";
    this.ryv = "AUTO|START";
    this.mrh = "HALF|GAMBLE";
    this.qhb = "STOP";
    this.of = "VON";
    this.stm = "EXIT";
    this.ond = "START DRÜCKEN";
    this.oad = "EINSATZ WÄHLEN";
    this.rvn = "TEILEN";
    this.jee = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.wvq = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.awx = "Gesamt Gewinn";
    this.pjk = "LÄDT ...";
    this.mlf = "LÄDT HISTORIE ...";
    this.jse = "NICHT GENUG KREDIT!";
    this.sov = "Achtung";
    this.zxr = "Kommunikationsfehler";
    this.glm = "Sie haben eines der Limits erreicht!";
    this.nfq = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.jyr = "Das Spiel wird beendet";
    this.yxg = "Das Spiel wird neu gestartet";
    this.ifk = "Bonus!";
    this.bgw = "BONUS";
    this.bro = "GEWONNEN";
    this.wey = "TOTAL";
    this.eqm = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.mbn = "FREEPLAY";
    this.ogm = "MEHR|SPIELE";
    this.thl = "SPIEL ID";
    this.jue = "Spielzeit";
    this.vqd = "Letzten";
    this.hwv = "Spiele";
    this.itf = "GUTHABEN";
    this.audio = "AUDIO";
    this.sxc = "MUSIK";
    this.bye = "SPEED";
    this.iua = "VOLLBILD";
    this.fit = "VOLLBILD";
    this.language = "SPRACHE";
    this.oct = "Bei Gerätestörung keine Haftung.";
    this.lcp = "W E I T E R";
    this.fkr = "Nicht noch einmal anzeigen";
    this.dzi = "AUTOSTART";
    this.aou = "RISIKO";
    this.umz = "GEWINNPLAN";
    this.ynl = "Sounds können nicht geladen werden!";
    this.qzr = "Ressourcen fehlen!";
    this.knf = "Ohne Ton spielen?";
    this.cvt = "EINSTELL.";
    this.ntf = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.yud = "RECHTS";
    this.siw = "AUTOM.";
    this.tej = "V A L U E";
    this.zjk = "INFO";
    this.zch = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.kxs = "Dieses Spiel ist optimiert für Google Chrome.";
    this.cum = "Bitte benutzen sie die aktuelle Version von";
    this.ndt = "Leider wird dieser Browser nicht unterstützt.";
    this.deo = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.het = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.ekz = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.xej = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.rzt = "Reality Check";
    this.bvn = "Du hast einen Reality Check angefordert.";
    this.rjz = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.wpy = "Spielpause";
    this.gku = "Spiellimits";
    this.pjf = "Selbsttest";
    this.kjj = "SPIELREGELN";
    this.jat = "SPIELREGELN";
    this.nnx = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.yrh = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.cui = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.mik = "Statistik";
    this.fcz = "Anzahl der Spiele";
    this.zha = "Gesamteinsatz";
    this.ana = "Gesamtgewinn";
    this.fda = "Gesamtspielzeit";
    this.fnq = "Ich habe die Nachricht gelesen";
    this.daf = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.vfc = "Historie";
    this.szk = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.alc = "Hauptspiel";
    this.ron = "Auto. Nehmen";
    this.hui = "Genommen";
    this.wuc = "Bonusspins";
    this.kru = "Risiko";
    this.lvk = "Halb";
    this.zda = "Respin";
    this.hnt = "Bonus";
    this.cia = "Erster Deal";
    this.uin = "Zweiter Deal";
    this.dvq = "Dritter Deal";
    this.yjf = "ABBRUCH";
    this.ozf = "AUTOSTART EINSTELLUNGEN";
    this.khs = "Anzahl der Spiele: ";
    this.bdh = "Autostart anhalten";
    this.gvm = "Kredit niedriger als:";
    this.sgo = "Kredit höher als:";
    this.gtu = "Gewinn höher als:";
    this.jlp = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.pvb = "Auf Facebook teilen";
    this.mzg = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
suo.prototype = new jdo;

function vtw() {
    this.tbr = "MINIMUM BANKO";
    this.sxa = "MAKS. BANKO";
    this.xjg = "MIN. BANKO";
    this.tmd = "MAKS. BANKO";
    this.oml = "BANKO";
    this.start = "BAŞLAT";
    this.cth = "YARDIM";
    this.fqj = "Kazanç planı";
    this.yyl = "MENÜ";
    this.hin = "DAHA ÇOK|OYUN";
    this.qhb = "DUR";
    this.cfy = "KREDI";
    this.mua = "OYUN BİTTİ";
    this.ntt = "KAZANDINIZ!";
    this.nfu = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.zry = "SON KAZANÇ";
    this.wor = "kazanır";
    this.stb = "ALMAK";
    this.bco = "ALMAK";
    this.zli = "RIZIKO";
    this.ryv = "OTOMATİK|BAŞLATMA";
    this.mrh = "YARI|RIZIKO";
    this.of = "VEREN";
    this.stm = "ÇIKIŞ";
    this.ond = "BAŞLAT TUŞUNA BASINIZ";
    this.oad = "BANKO SEÇİNİZ";
    this.rvn = "ALMAK|1/2";
    this.jee = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.wvq = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.awx = "Toplam kazanç";
    this.pjk = "YÜKLÜYOR ...";
    this.mlf = "GEÇMIŞI YÜKLÜYOR ...";
    this.jse = "YETERSİZ KREDİ.";
    this.glm = "Limitlerin birine ulaştınız!";
    this.sov = "Dikkat";
    this.zxr = "İletişim hatası";
    this.nfq = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.jyr = "Oyun sonlandırılıyor";
    this.yxg = "Oyun yeniden başlatılıyor";
    this.ifk = "Bedava oyun primi!";
    this.bgw = "PRİM";
    this.bro = "KAZANDINIZ";
    this.wey = "TOPLAM";
    this.eqm = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.mbn = "FREEPLAY";
    this.ogm = "DAHA ÇOK OYUN";
    this.thl = "OYUN ID";
    this.jue = "OYUN SÜRESİ";
    this.vqd = "Son";
    this.hwv = "oyun";
    this.itf = "BAKIYE";
    this.audio = "AUDIO";
    this.sxc = "MÜZIK";
    this.bye = "HıZ";
    this.iua = "TAM EKRAN";
    this.fit = "TAM EKRAN";
    this.language = "LISAN";
    this.oct = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.lcp = "İ L E R I";
    this.fkr = "Tekrar gösterme";
    this.dzi = "OTOMATİK|BAŞLATMA";
    this.aou = "RIZIKO";
    this.umz = "Kazanç planı";
    this.ynl = "Sesler yüklenemiyorlar!";
    this.qzr = "Kaynaklar eksik!";
    this.knf = "Sessiz oynayacak mısınız?";
    this.cvt = "AYARLAR";
    this.ntf = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.yud = "SAĞ";
    this.siw = "OTOMATIK";
    this.tej = "V A L U E";
    this.zjk = "BILGI";
    this.zch = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.kxs = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.cum = "'nin güncel versiyonunu kullanın";
    this.ndt = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.deo = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.het = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.ekz = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.xej = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.rzt = "Reality Check";
    this.bvn = "Reality Check talebinde bulundun.";
    this.rjz = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.kjj = "OYUNUN KURALLARı";
    this.jat = "OYUNUN|KURALLARı";
    this.nnx = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.yrh = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.cui = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.mik = "İstatistik";
    this.fcz = "Toplam oyunlar";
    this.zha = "Toplam bankolar";
    this.ana = "Toplam kazançlar";
    this.fda = "Toplam oyun süresi";
    this.fnq = "Bu mesajı okudum.";
    this.daf = "OYUNU|KAPAT";
    this.ok = "OK";
    this.vfc = "GEÇMİŞ";
    this.szk = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.alc = "Ana oyun";
    this.ron = "Otomatik olarak kazandınız";
    this.hui = "Toplandı";
    this.wuc = "Prim oyunlar";
    this.kru = "Riziko";
    this.lvk = "Yarım";
    this.zda = "Respin";
    this.hnt = "Prim";
    this.cia = "İlk anlaşma";
    this.uin = "İkinci anlaşma";
    this.dvq = "Üçüncü anlaşma";
    this.yjf = "İPTAL";
    this.ozf = "OTOMATIK BAŞLAT AYARLARı";
    this.khs = "Oyun sayısı:";
    this.bdh = "Otomatik başlatmayı durdur";
    this.gvm = "Kredi bundan düşüktür:";
    this.sgo = "Kredi bundan yüksektir:";
    this.gtu = "Kazanç bundan yüksektir:";
    this.jlp = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.pvb = "Facebook'ta paylaş";
    this.mzg = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
vtw.prototype = new jdo;

function myb() {
    this.tbr = "MINIMÁLNÍ SÁZKA JE";
    this.sxa = "MAX. SÁZKA";
    this.xjg = "MIN. SÁZKA";
    this.tmd = "MAX. SÁZKA";
    this.oml = "SÁZKA";
    this.start = "START";
    this.cth = "POMOC";
    this.fqj = "VÝHERNÍ PLÁN";
    this.yyl = "MENU";
    this.hin = "DALŠÍ|HRY";
    this.qhb = "STOP";
    this.cfy = "KREDIT";
    this.mua = "KONEC HRY";
    this.ntt = "VÍTEZ!";
    this.nfu = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.zry = "POSL. VÝHRA";
    this.wor = "vyhrává";
    this.stb = "VEZMI";
    this.bco = "VEZMI";
    this.zli = "HRA";
    this.ryv = "AUTO|START";
    this.mrh = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.stm = "VÝSTUP";
    this.ond = "START HRY";
    this.oad = "VYBRAT SÁZKU";
    this.rvn = "POLOVINA";
    this.jee = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.wvq = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.awx = "Celková výhra";
    this.pjk = "NAHRÁVÁM ...";
    this.mlf = "NAHRÁVÁM HISTORII ...";
    this.jse = "Nedostatecný kredit.";
    this.glm = "Dosáhli jste jednoho z limitů!";
    this.sov = "Varování";
    this.zxr = "Chyba komunikace";
    this.nfq = "Dosáhli jste maximálního počtu her zdarma!";
    this.jyr = "Hra se zavře";
    this.yxg = "Hra se restartuje";
    this.ifk = "Bonus!";
    this.bgw = "BONUS";
    this.bro = "VYHRÁL";
    this.wey = "CELKOVÁ";
    this.eqm = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.mbn = "FREEPLAY";
    this.ogm = "DALŠÍ HRY";
    this.thl = "ID HRY";
    this.jue = "HRACÍ DOBA";
    this.vqd = "Poslední";
    this.hwv = "hry";
    this.itf = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.sxc = "MUZIKA";
    this.bye = "RYCHLOST";
    this.iua = "FULLSCREEN";
    this.fit = "FULLSCREEN";
    this.language = "ŘEČ";
    this.oct = "Při poruše jsou všechny hry a výhry neplatné.";
    this.lcp = "P O K R A Č U J";
    this.fkr = "Nezobrazujte znovu";
    this.dzi = "AUTOSTART";
    this.aou = "HRA";
    this.umz = "VÝHERNÍ PLÁN";
    this.ynl = "Zvuk nelze nahrát!";
    this.qzr = "Chybí zdroje!";
    this.knf = "Hrát bez zvuku?";
    this.cvt = "NASTAVENÍ";
    this.tej = "V A L U E";
    this.ntf = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.yud = "VPRAVO";
    this.siw = "AUTO";
    this.zjk = "INFORMACE";
    this.zch = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.kxs = "Tato hra je optimalizovaná pro Google Chrome.";
    this.cum = "Použijte aktuální verzi";
    this.ndt = "Tento prohlížeč není bohužel plně podporován.";
    this.deo = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.het = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.ekz = "Nastavte rozhraní hry svým potřebám!";
    this.xej = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.rzt = "Reality Check";
    this.bvn = "Požádali jste o kontrolu reality.";
    this.rjz = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.kjj = "PRAVIDLA HRY";
    this.jat = "PRAVIDLA HRY";
    this.nnx = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.yrh = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.cui = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.mik = "Statistika";
    this.fcz = "Celkem hry";
    this.zha = "Celkem sázky";
    this.ana = "Celkem výhry";
    this.fda = "Celková hrací doba";
    this.fnq = "Zprávu jsem četl/a.";
    this.daf = "UKONČIT|HRU";
    this.ok = "OK";
    this.vfc = "HISTORIE";
    this.szk = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.alc = "Hlavní hra";
    this.ron = "Automaticky vybráno";
    this.hui = "Vybráno";
    this.wuc = "Bonusspins";
    this.kru = "Hra";
    this.lvk = "Polovina";
    this.zda = "Respin";
    this.hnt = "Bonus";
    this.cia = "První vyložení";
    this.uin = "Druhé vyložení";
    this.dvq = "Třetí vyložení";
    this.yjf = "ZRUŠIT";
    this.ozf = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.khs = "Množství her:";
    this.bdh = "Zastavit automatický start";
    this.gvm = "Kredit nižší než:";
    this.sgo = "Kredit vyšší než:";
    this.gtu = "Výhra vyšší než:";
    this.jlp = "Automatický start se zastaví na začátku bonusu.";
    this.pvb = "Sdílet na Facebooku";
    this.mzg = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
myb.prototype = new jdo;

function sum() {
    this.tbr = "MIINIMUMPANUS ON";
    this.sxa = "MAX PANUS";
    this.xjg = "MIN PANUS";
    this.tmd = "MAX PANUS";
    this.oml = "PANUS";
    this.start = "START";
    this.cth = "ABI";
    this.fqj = "VÕIDU TABEL";
    this.yyl = "MENÜÜ";
    this.hin = "VALI|MÄNG";
    this.qhb = "STOPP";
    this.cfy = "KREDIIT";
    this.mua = "MÄNG ON LÕPPENUD!";
    this.ntt = "OLED VÕITNUD!";
    this.nfu = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.zry = "EELMINE VÕIT";
    this.stb = "VÕTA|VÕIT";
    this.bco = "VÕTA VÕIT";
    this.zli = "DUUBEL|DAMINE";
    this.ryv = "AUTO|START";
    this.mrh = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.stm = "VÄLJA";
    this.ond = "ALUSTA MÄNGU";
    this.oad = "VALI PANUS";
    this.rvn = "POOLIK";
    this.jee = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.awx = "Koguvõit";
    this.jse = "POLE PIISAVALT KREDIITI.";
    this.ifk = "Boonus!";
    this.bgw = "BOONUS";
    this.eqm = "PALUN OODAKE ...";
    this.ogm = "Vali Mäng";
    this.audio = "HELI";
    this.sxc = "MUUSIKA";
    this.bye = "KIIRUS";
    this.iua = "TÄISEKRAAN";
    this.fit = "TÄISEKRAAN";
    this.oct = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.rww = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.kjj = "MÄNGUREEGLID";
    this.jat = "MÄNGUREEGLID";
    this.pjk = "LAADIMINE ...";
    this.mlf = "AJALOO LAADIMINE ...";
    this.glm = "Oled saavutanud ühe limiitidest!";
    this.sov = "Hoiatus";
    this.zxr = "Ühenduse viga";
    this.nfq = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.jyr = "Mäng suletakse";
    this.yxg = "Mäng taaskäivitatakse";
    this.wvq = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.cvt = "SÄTTED";
    this.tej = "V A L U E";
    this.ntf = "Pöörake oma seadet!";
    this.zjk = "INFO";
    this.zch = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.kxs = "See mäng on optimeeritud Google Chrome jaoks.";
    this.cum = "Palun kasutage praeguse versiooni";
    this.ndt = "Kahjuks ei toetata seda brauserit täielikult.";
    this.deo = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.yud = "PAREM";
    this.siw = "AUTOMAATNE";
    this.bro = "VÕITIS";
    this.wor = "võidetud";
    this.wey = "KOKKU";
    this.error = "VIGA";
    this.mbn = "TASUTA MÄNG";
    this.thl = "MÄNGU ID";
    this.jue = "MÄNGUAEG";
    this.vqd = "Viimased";
    this.hwv = "mängu";
    this.itf = "SISSEMAKSE";
    this.nnx = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.yrh = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.cui = "RISKI, ET SUURENDADA OMA VÕITU";
    this.mik = "Statistika";
    this.fcz = "Mänge kokku";
    this.zha = "Kogupanus";
    this.ana = "Koguvõit";
    this.fda = "Mänguaeg kokku";
    this.fnq = "Olen seda teadet lugenud.";
    this.daf = "MÄNGU|LÕPP";
    this.vfc = "Ajalugu";
    this.szk = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.alc = "Põhimäng";
    this.ron = "Automaatne väljavõtt";
    this.hui = "Välja võetud";
    this.wuc = "Bonusspins";
    this.kru = "Gamble";
    this.lvk = "Pool";
    this.zda = "Respin";
    this.hnt = "Boonus";
    this.cia = "Esimene jagamine";
    this.uin = "Teine jagamine";
    this.dvq = "Kolmas jagamine";
    this.lcp = "J Ä T K A";
    this.fkr = "Ära seda enam näita";
    this.dzi = "AUTOSTART";
    this.aou = "DUUBEL DAMINE";
    this.umz = "VÕIDU TABEL";
    this.ynl = "Helisid ei saa laadida!";
    this.qzr = "Ressursid puuduvad!";
    this.knf = "Soovid mängida ilma helideta?";
    this.het = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.ekz = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.xej = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.yjf = "TÜHISTA";
    this.ozf = "AUTOMAATKÄIVITUSE SÄTTED";
    this.khs = "Mängude arv:";
    this.bdh = "Peata automaatkäivitus";
    this.gvm = "Krediit madalam kui:";
    this.sgo = "Krediit kõrgem kui:";
    this.gtu = "Võit suurem kui:";
    this.jlp = "Automaatkäivitus peatatakse boonuse alguses.";
    this.pvb = "Jaga Facebookis";
    this.ok = "OK";
    this.rzt = "Reality Check";
    this.bvn = "Olete soovinud reaalsuskontrolli.";
    this.rjz = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
sum.prototype = new jdo;

function gik() {
    this.tbr = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.sxa = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.xjg = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.tmd = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.oml = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.cth = "ΒΟHΘΕΙΑ";
    this.fqj = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.yyl = "ΜΕΝΟY";
    this.hin = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.qhb = "ΣΤΟΠ";
    this.cfy = "ΠIΣΤΩΣΗ";
    this.mua = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.ntt = "ΝΙΚΗΤΗΣ!";
    this.nfu = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.zry = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.stb = "ΠΑΡΑΛΑΒH";
    this.bco = "ΠΑΡΑΛΑΒH";
    this.zli = "ΤΖΟΓAΡΩ";
    this.ryv = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.mrh = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.stm = "EΞΟΔΟΣ";
    this.ond = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.oad = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.rvn = "ΠΑΡΑΛΑΒH|1/2";
    this.jee = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.awx = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.jse = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.ifk = "Μπόνουσ!";
    this.bgw = "ΜΠOΝΟΥΣ";
    this.eqm = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.ogm = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.sxc = "ΜΟΥΣΙΚΉ";
    this.bye = "ΤΑΧYΤΗΤΑ";
    this.iua = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.fit = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.oct = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.wey = "ΣYΝΟΛΟ";
    this.kjj = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.jat = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.pjk = "ΦΟΡΤΩΣΗ ...";
    this.mlf = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.glm = "Ξεπεράσατε κάποιο όριο!";
    this.sov = "Προειδοποίηση";
    this.zxr = "Σφάλμα επικοινωνίας";
    this.nfq = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.jyr = "Το παιχνίδι θα τερματιστεί";
    this.yxg = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.wvq = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.cvt = "ΡΥΘΜΙΣΕΙΣ";
    this.tej = "V A L U E";
    this.ntf = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.zjk = "ΠΛΗΡΟΦΟΡΊΕς";
    this.zch = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.kxs = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.cum = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.ndt = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.deo = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.yud = "ΔΕΞΙA";
    this.siw = "AΥΤOΜΑΤΟ";
    this.bro = "ΚEΡΔΙΣΕ";
    this.wor = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.mbn = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.thl = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.jue = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.vqd = "Τελευταία";
    this.hwv = "παιχνίδια";
    this.itf = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.nnx = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.yrh = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.cui = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.mik = "Στατιστικά";
    this.fcz = "Σύνολο παιχνιδιών";
    this.zha = "Συνολικό ποντάρισμα";
    this.ana = "Συνολικό κέρδος";
    this.fda = "Συνολικός χρόνος παιχνιδιού";
    this.fnq = "Eχω διαβάσει το μήνυμα.";
    this.daf = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.vfc = "ΙΣΤΟΡΙΚΟ";
    this.szk = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.alc = "Κύριο παιχνίδι";
    this.ron = "Αυτόματη λήψη";
    this.hui = "Ελήφθησαν";
    this.wuc = "Bonusspins";
    this.kru = "Τζογάρω";
    this.lvk = "Hμισυ";
    this.zda = "Respin";
    this.hnt = "Μπόνουσ";
    this.cia = "Πρώτο μοίρασμα";
    this.uin = "Δεύτερο μοίρασμα";
    this.dvq = "Τρίτο μοίρασμα";
    this.lcp = "Σ Υ Ν  E Χ Ε Ι Α";
    this.fkr = "Να μην προβληθεί ξανά";
    this.dzi = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.aou = "ΤΖΟΓAΡΩ";
    this.umz = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.ynl = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.qzr = "Λείπουν πόροι!";
    this.knf = "Παιχνίδι χωρίς ήχο?";
    this.het = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.ekz = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.xej = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.yjf = "ΑΚΎΡΩΣΗ";
    this.ozf = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.khs = "Αριθμός παιχνιδιών:";
    this.bdh = "Διακοπή autostart";
    this.gvm = "Μονάδες χαμηλότερα από:";
    this.sgo = "Μονάδες υψηλότερες από:";
    this.gtu = "Κέρδος υψηλότερο από:";
    this.jlp = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.pvb = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.rzt = "έλεγχο πραγματικότητας";
    this.bvn = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.rjz = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
gik.prototype = new jdo;

function mkx() {
    this.tbr = "МИН. ЗАЛОГ Е";
    this.sxa = "МАКС. ЗАЛОГ";
    this.xjg = "МИНИМ. ЗАЛОГ";
    this.tmd = "МАКС. ЗАЛОГ";
    this.oml = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.cth = "ПОМОЩ";
    this.fqj = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.yyl = "МЕНЮ";
    this.hin = "ПОВЕЧЕ|ИГРИ";
    this.qhb = "СТОП";
    this.cfy = "КРЕДИТ";
    this.mua = "ИГРАТА ЗАВЪРШИ";
    this.ntt = "ПЕЧЕЛИТЕ!";
    this.nfu = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.zry = "ПОСЛ.ПЕЧАЛБА";
    this.stb = "ПРИБИРАНЕ";
    this.bco = "ПРИБИРАНЕ";
    this.zli = "ДУБЛИРАНЕ";
    this.ryv = "АВТО|СТАРТ";
    this.mrh = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.stm = "ИЗХОД";
    this.ond = "ЗАПОЧНЕТЕ ИГРАТА";
    this.oad = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.rvn = "ДЕЛЕНЕ";
    this.jee = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.awx = "ОБЩА ПЕЧАЛБА";
    this.jse = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.ifk = "Бонус!";
    this.bgw = "БОНУС";
    this.eqm = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.ogm = "Повече Игри";
    this.bye = "ТУРБО";
    this.oct = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.kjj = "ПРАВИЛА НА ИГРАТА";
    this.jat = "ПРАВИЛА|НА ИГРАТА";
    this.pjk = "ЗАРЕЖДАНЕ ...";
    this.mlf = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.glm = "Достигна един от лимитите!";
    this.sov = "Предупреждение";
    this.zxr = "Комуникационна грешка";
    this.nfq = "Достигнали сте максималния брой безплатни игри!";
    this.jyr = "Играта ще бъде затворена";
    this.yxg = "Играта ще бъде рестартирана";
    this.wvq = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.cvt = "НАСТРОЙКИ";
    this.tej = "V A L U E";
    this.ntf = "Моля, включете устройството!";
    this.zjk = "ИНФОРМАЦИЯ";
    this.zch = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.kxs = "Тази игра е оптимизирана за Google Chrome.";
    this.cum = "Моля, използвайте текущата версия на";
    this.ndt = "За съжаление този браузър не се поддържа напълно.";
    this.deo = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.yud = "ДЯСНА";
    this.siw = "АВТО";
    this.bro = "СПЕЧЕЛЕНО";
    this.wor = "печалби";
    this.wey = "ОБЩО";
    this.error = "ГРЕШКА";
    this.mbn = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.sxc = "МУЗИКА";
    this.iua = "ПЪЛЕН ЕКРАН";
    this.fit = "ПЪЛЕН|ЕКРАН";
    this.thl = "ИД НА ИГРА";
    this.jue = "ВРЕМЕ НА ИГРА";
    this.vqd = "Последни";
    this.hwv = "игри";
    this.itf = "ДЕПОЗИТ";
    this.nnx = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.yrh = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.cui = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.mik = "Статистика";
    this.fcz = "Общо игри";
    this.zha = "Общо залог";
    this.ana = "Общо печалби";
    this.fda = "Общо време на игра";
    this.fnq = "Прочетох това съобщение.";
    this.daf = "ИЗХОД|ОТ|ИГРАТА";
    this.vfc = "ИСТОРИЯ";
    this.szk = "Няма играни игри.";
    this.state = "СТАТУС";
    this.alc = "Основна игра";
    this.ron = "Автоматично събрани";
    this.hui = "Събрани";
    this.wuc = "Бонус-игри";
    this.kru = "Дублиране";
    this.lvk = "Половина";
    this.zda = "Respin";
    this.hnt = "Бонус";
    this.cia = "Първо раздаване";
    this.uin = "Второ раздаване";
    this.dvq = "Трето раздаване";
    this.lcp = "П Р О Д Ъ Л Ж А В А М";
    this.fkr = "Не показвай отново";
    this.dzi = "AUTOSTART";
    this.aou = "ДУБЛИРАНЕ";
    this.umz = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.ynl = "Звукът не може да бъде зареден!";
    this.qzr = "Липсват ресурси!";
    this.knf = "Игра без звук?";
    this.het = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.ekz = "Настройте интерфейса на играта според своите нужди!";
    this.xej = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.yjf = "ИЗЧИСТВАНЕ";
    this.ozf = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.khs = "Брой игри:";
    this.bdh = "Спри автоматичния старт";
    this.gvm = "Кредит по-малък от:";
    this.sgo = "Кредит по-висок от:";
    this.gtu = "Спечели повече от:";
    this.jlp = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.pvb = "Сподели във Facebook";
    this.ok = "OK";
    this.rzt = "Reality Check";
    this.bvn = "Заявили сте проверка на реалността.";
    this.rjz = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
mkx.prototype = new jdo;

function yqt() {
    this.tbr = "მინიმალური ფსონი არის";
    this.sxa = "მაქსიმალური ფსონი";
    this.xjg = "მინიმალური ფსონი";
    this.tmd = "მაქსიმალური ფსონი";
    this.oml = "ფსონი";
    this.start = "დაწყება";
    this.cth = "დახმარება";
    this.fqj = "გადახდის მრიცხველი";
    this.yyl = "მენიუ";
    this.hin = "მეტი|თამაშები";
    this.qhb = "გაჩერება";
    this.cfy = "კრედიტი";
    this.mua = "თამაში დასრულებულია";
    this.ntt = "გამარჯვებული!";
    this.nfu = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.zry = "ბოლო მოგება";
    this.stb = "შეგროვება";
    this.bco = "შეგროვება";
    this.zli = "აზარტი";
    this.ryv = "ავტო|დაწყება";
    this.mrh = "ნახევარი";
    this.stm = "გამოსვლა";
    this.ond = "თამაშის დაწყება";
    this.oad = "აირჩიეთ ფსონი";
    this.rvn = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.awx = "მთლიანი მოგება";
    this.sov = "გაფრთხილება";
    this.wey = "მთლიანი";
    this.eqm = "გთხოვთ, დაელოდოთ ...";
    this.ogm = "მეტი თამაშები";
    this.bye = "ტურბო";
    this.oct = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.lcp = "გაგრძელება";
    this.dzi = "ავტო დაწყება";
    this.umz = "გადახდის მრიცხველი";
    this.aou = "აზარტი";
    this.left = "მარცხნივ";
    this.yud = "მარჯვნივ";
    this.siw = "ავტომატურად";
    this.ok = "კი";
    this.yjf = "გაუქმება";
    this.kru = "აზარტი";
    this.lvk = "ნახევარი";
    this.kjj = "თამაშის წესები";
    this.jat = "თამაშის წესები";
    this.ifk = "BONUS!";
    this.bgw = "ბონუს";
    this.jee = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.jse = "არა საკმარისი კრედიტი.";
    this.wvq = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.pjk = "ჩატვირთვის  ...";
    this.mlf = "ჩატვირთვის  ისტორია  ...";
    this.zxr = "საკომუნიკაციო შეცდომა";
    this.glm = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.nfq = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.jyr = "თამაში დასრულდება";
    this.yxg = "თამაში გადაიტვირთება";
    this.bro = "მოგებულია";
    this.wor = "wins";
    this.tej = "V A L U E";
    this.error = "შეცდომა";
    this.mbn = "უფასო თამაში";
    this.thl = "თამაშის  ნომერი";
    this.jue = "სათამაშო დრო";
    this.vqd = "ბოლო ";
    this.hwv = "თამაშები";
    this.itf = "დეპოზიტი";
    this.audio = "ხმა";
    this.sxc = "მუსიკა";
    this.iua = "სრული ეკრანი";
    this.fit = "სრული ეკრანი";
    this.language = "ენის";
    this.fkr = "მომავალში აღარ ჩვენება";
    this.ynl = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.qzr = "არასაკმარისი რესურსები!";
    this.knf = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.ntf = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.zch = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.kxs = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.tiv = "გთხოვთ გამოიყენოთ";
    this.ztc = "-ის მიმდინარე ვერსია";
    this.ndt = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.deo = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.het = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.ekz = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.nnx = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.yrh = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.cui = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.fcz = "მთლიანი თამაშები";
    this.zha = "ფსონი მთლიანად";
    this.ana = "მთლიანი მოგება";
    this.fda = "მთლიანი სათამაშო დრო";
    this.fnq = "მე გავეცანი ამ გზავნილს.";
    this.daf = "თამაშის|დამთავრება";
    this.vfc = "მოვლენების ჩანაწერი";
    this.szk = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.alc = "ძირითადი თამაში";
    this.ron = "ავტომატურად შეგროვება";
    this.hui = "აღებულ იქნა";
    this.cia = "პირველი დარიგება";
    this.uin = "მეორე დარიგება";
    this.dvq = "მესამე დარიგება";
    this.ozf = "ავტოგამშვების პარამეტრები";
    this.khs = "თამაშების რაოდენობა:";
    this.bdh = "შეაჩერეთ ავტოგამშვები";
    this.gvm = "კრედიტი უფრო დაბალი ვიდრე:";
    this.sgo = "კრედიტი უფრო მაღალი ვიდრე:";
    this.gtu = "მოიგეთ უფრო მეტი ვიდრე:";
    this.jlp = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.pvb = "გააზიარეთ ფეისბუქზე";
    this.mik = "სტატისტიკა";
    this.of = "/";
    this.wuc = "Bonus თამაში";
    this.hnt = "ბონუსი";
    this.zjk = "ინფორმაცია";
    this.cvt = "პარამეტრ.";
    this.zda = "ხელახლა დატრიალების";
    this.xej = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.rzt = "რეალობის შემოწმება";
    this.bvn = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.rjz = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
yqt.prototype = new jdo;

function tqy() {
    this.tbr = "A MINIMUM TÉT";
    this.sxa = "MAXIMUM TÉT";
    this.xjg = "MIN. TÉT";
    this.tmd = "MAX. TÉT";
    this.oml = "TÉT";
    this.start = "START";
    this.cth = "SÚGÓ";
    this.fqj = "SÚGÓ";
    this.yyl = "MENÜ";
    this.hin = "MENÜ";
    this.qhb = "STOP";
    this.cfy = "HITEL";
    this.mua = "A JÁTÉKNAK VÉGE";
    this.ntt = "NYEREMÉNY!";
    this.nfu = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.zry = "UTOLSÓ NYER.";
    this.stb = "FELÍR";
    this.bco = "FELÍR";
    this.zli = "SZORZÁS";
    this.ryv = "AUTO|START";
    this.mrh = "FELEZÉS";
    this.stm = "KILÉPÉS";
    this.ond = "START";
    this.oad = "VÁLASSZON TÉTET";
    this.rvn = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.awx = "Összes Nyeremény";
    this.sov = "Figyelmeztetés";
    this.wey = "ÖSSZES";
    this.eqm = "KÉREM VÁRJON ...";
    this.ogm = "Menü";
    this.bye = "SEBESSÉG";
    this.oct = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.lcp = "T O V Á B B";
    this.dzi = "AUTOSTART";
    this.umz = "SÚGÓ";
    this.aou = "SZORZÁS";
    this.left = "BAL";
    this.yud = "JOBB";
    this.ok = "OK";
    this.yjf = "MÉGSEM";
    this.kru = "Szorzás";
    this.lvk = "Felezés";
    this.kjj = "JÁTÉKSZABÁLYOK";
    this.jat = "JÁTÉKSZABÁLYOK";
    this.ifk = "Bónusz!";
    this.bgw = "BÓNUSZ";
    this.jee = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.jse = "NINCS ELÉG HITEL";
    this.tej = "V A L U E";
    this.wor = "nyeremények";
    this.of = "/";
    this.wvq = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.pjk = "BETÖLTÉSE ...";
    this.mlf = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.zxr = "Kommunikációs hiba";
    this.glm = "Elérte az egyik limitet!";
    this.nfq = "Elérte a szabad játékok maximum számát!";
    this.jyr = "A játék megállítva";
    this.yxg = "Játék újraindul";
    this.bro = "NYERT";
    this.error = "HIBA";
    this.mbn = "FREEPLAY";
    this.siw = "AUTO";
    this.thl = "JÁTÉK ID";
    this.jue = "Játék Idő";
    this.vqd = "utolsó";
    this.hwv = "játék";
    this.itf = "HITEL";
    this.audio = "HANG";
    this.sxc = "ZENE";
    this.iua = "TELJES KÉPERNYŐ";
    this.fit = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.fkr = "Ne mutassa mégegyszer";
    this.ynl = "A hangot nem lehet betölteni!";
    this.qzr = "Források hiányoznak!";
    this.knf = "Játék hang nélkül?";
    this.cvt = "BEÁLLÍTÁS";
    this.ntf = "Kérjük fordítsa el a készüléket!";
    this.zjk = "INFÓ";
    this.zch = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.kxs = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.tiv = "Kérjük használja a(z)";
    this.ztc = " legújabb verzióját!";
    this.ndt = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.deo = "Ez a játék nem indítható FreePlay módban!";
    this.het = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.ekz = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.nnx = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.yrh = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.cui = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.mik = "Statisztika";
    this.fcz = "Összes Játék";
    this.zha = "Összes Tét";
    this.ana = "Összes Nyeremény";
    this.fda = "Összes Játék Idő";
    this.fnq = "Elolvastam az üzenetet.";
    this.daf = "KILÉPÉS";
    this.vfc = "Előzmények";
    this.szk = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.alc = "Fő Játék";
    this.ron = "Autom. Felírás";
    this.hui = "Felírva";
    this.wuc = "Bónusz játék";
    this.zda = "Respin";
    this.hnt = "Bónusz";
    this.cia = "Első Leosztás";
    this.uin = "Második Leosztás";
    this.dvq = "Harmadik Leosztás";
    this.ozf = "AUTOSTART BEÁLLÍTÁS";
    this.khs = "Játékok száma:";
    this.bdh = "Stop autostart";
    this.gvm = "A hitel kevesebb, mint:";
    this.sgo = "A hitel több, mint:";
    this.gtu = "A nyeremény több, mint:";
    this.jlp = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.pvb = "Megosztás a Facebook-on";
    this.xej = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.rzt = "Reality Check";
    this.bvn = "Ön egy valóság-ellenőrzést kért.";
    this.rjz = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
tqy.prototype = new jdo;

function tiy() {
    this.tbr = "MIZA MINIMĂ ESTE";
    this.sxa = "MIZA MAXIMĂ";
    this.xjg = "MIZA MIN.";
    this.tmd = "MIZA MAX.";
    this.oml = "MIZĂ";
    this.start = "START";
    this.cth = "AJUTOR";
    this.fqj = "LISTA|CÂŞTIGURI";
    this.yyl = "MENIU";
    this.hin = "MENIUL|JOCULUI";
    this.qhb = "STOP";
    this.cfy = "CREDIT";
    this.mua = "SFÂRŞIT JOCUL";
    this.ntt = "CÂŞTIGĂTOR!";
    this.nfu = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.zry = "ULTIMUL CÂŞTIG";
    this.stb = "COLECTA";
    this.bco = "COLECTA";
    this.zli = "JOC";
    this.ryv = "AUTO|START";
    this.mrh = "COLECTARE|1/2";
    this.stm = "IEŞIRE";
    this.ond = "APĂSAŢI START";
    this.oad = "ALEGEŢI MIZA";
    this.rvn = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.awx = "Câştig total";
    this.sov = "Avertizare";
    this.wey = "TOTAL";
    this.eqm = "AŞTEPTAŢI VĂ ROG ...";
    this.ogm = "Meniul Jocului";
    this.bye = "VITEZĂ";
    this.oct = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.lcp = "C O N T I N U A R E";
    this.dzi = "AUTOSTART";
    this.umz = "LISTA CÂŞTIGURI";
    this.aou = "JOC";
    this.left = "STÂNGA";
    this.yud = "DREAPTA";
    this.ok = "OK";
    this.yjf = "ÎNTRERUPERE";
    this.kru = "Joc";
    this.lvk = "Colectare 1/2";
    this.kjj = "REGULILE JOCULUI";
    this.jat = "REGULILE|JOCULUI";
    this.ifk = "Bonus!";
    this.bgw = "BONUS";
    this.jee = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.jse = "CREDIT INSUFICIENT.";
    this.wor = "câştigă";
    this.tej = "V A L U E";
    this.of = "DIN";
    this.wvq = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.pjk = "ÎNCARCĂ ...";
    this.mlf = "ÎNCARCĂ ISTORIC ...";
    this.zxr = "Eroare de comunicare";
    this.glm = "Aţi atins una dintre limite!";
    this.nfq = "Aţi atins numărul maxim de jocuri gratis!";
    this.jyr = "Jocul se încheie";
    this.yxg = "Jocul se restartează";
    this.bro = "CÂŞTIGAT";
    this.error = "EROARE";
    this.mbn = "FREEPLAY";
    this.siw = "AUTO";
    this.thl = "ID JOC";
    this.jue = "TIMP DE JOC";
    this.vqd = "ultimele";
    this.hwv = "jocuri";
    this.itf = "CREDIT";
    this.audio = "AUDIO";
    this.sxc = "MUZICĂ";
    this.iua = "ECRAN COMPLET";
    this.fit = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.fkr = "Nu reafișați";
    this.ynl = "Sunetele nu pot fi încărcate!";
    this.qzr = "Lipsesc resurse!";
    this.knf = "Jucaţi fără sunet?";
    this.cvt = "SETĂRI";
    this.ntf = "Vă rugăm opriţi aparatul!";
    this.zjk = "INFO";
    this.zch = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.kxs = "Acest joc este optimizat pentru Google Chrome.";
    this.cum = "Vă rugăm utilizaţi versiunea actuală";
    this.ndt = "Din păcate acest browser nu este sprijinit complet.";
    this.deo = "Acest joc nu poate fi pornit în modul freeplay!";
    this.het = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.ekz = "Ajustează interfaţa de joc nevoilor dvs!";
    this.nnx = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.yrh = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.cui = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.mik = "Statistică";
    this.fcz = "Număr jocuri";
    this.zha = "Pariuri totale";
    this.ana = "Câştig total";
    this.fda = "Timp total de joc";
    this.fnq = "Am citit mesajul.";
    this.daf = "ÎNCHEIERE|JOC";
    this.vfc = "ISTORIC";
    this.szk = "Nu există jocuri.";
    this.state = "STATUT";
    this.alc = "Joc principal";
    this.ron = "Auto colectare";
    this.hui = "Colectat";
    this.wuc = "Bonusspins";
    this.zda = "Respin";
    this.hnt = "Bonus";
    this.cia = "Primul Deal";
    this.uin = "Al doilea deal";
    this.dvq = "Al treilea deal";
    this.ozf = "SETĂRI AUTOSTART";
    this.khs = "Numărul jocurilor:";
    this.bdh = "Oprire autostart";
    this.gvm = "Credit sub:";
    this.sgo = "Credit peste:";
    this.gtu = "Câștig peste:";
    this.jlp = "Autostart se va opti la începerea bonusului.";
    this.pvb = "Distribuie Facebook";
    this.xej = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.rzt = "Reality Check";
    this.bvn = "Ai cerut un Reality Check.";
    this.rjz = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
tiy.prototype = new jdo;

function piw() {
    this.tbr = "MÍNIMA APOSTA É";
    this.sxa = "MÁX. APOSTA";
    this.xjg = "MÍN. APOSTA";
    this.tmd = "MÁX. APOSTA";
    this.oml = "APOSTA";
    this.start = "PARTIDA";
    this.cth = "AJUDA";
    this.fqj = "ESQUEMA|DE PAGOS";
    this.yyl = "MENU";
    this.hin = "SELEÇÃO|DE JOGOS";
    this.qhb = "PARADA";
    this.cfy = "CRÉDITO";
    this.mua = "FIM DO JOGO";
    this.ntt = "VENCEDOR!";
    this.nfu = "BOA SORTE!";
    this.win = "GANHO";
    this.zry = "ULTIMO GANHO";
    this.stb = "COLETAR";
    this.bco = "COLETAR";
    this.zli = "JOGADA";
    this.ryv = "AUTO|PARTIDA";
    this.mrh = "METADE";
    this.stm = "SAÍDA";
    this.ond = "PREMIR PARTIDA";
    this.oad = "SELECIONAR APOSTA";
    this.rvn = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.awx = "Ganho total";
    this.sov = "Aviso";
    this.wey = "TOTAL";
    this.eqm = "AGUARDE POR FAVOR ...";
    this.ogm = "Seleção de jogos";
    this.bye = "VELOCIDADE";
    this.oct = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.lcp = "C O N T I N U A R";
    this.dzi = "AUTOPARTIDA";
    this.umz = "ESQUEMA DE PAGOS";
    this.aou = "JOGADA";
    this.left = "ESQUERDA";
    this.yud = "DIREITA";
    this.ok = "OK";
    this.yjf = "CANCELAR";
    this.kru = "Jogada";
    this.lvk = "Metade";
    this.kjj = "REGRAS DO JOGO";
    this.jat = "REGRAS|DO JOGO";
    this.ifk = "Bonus!";
    this.bgw = "BONUS";
    this.jee = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.jse = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.wor = "ganha";
    this.tej = "V A L U E";
    this.of = "DE";
    this.wvq = "TOCAR NA TELA PARA CONTINUAR";
    this.pjk = "CARREGANDO ...";
    this.mlf = "CARREGANDO HISTÓRICO ...";
    this.zxr = "Erro de comunicação";
    this.glm = "Alcançou um dos limities!";
    this.nfq = "Alcançou a quantidade máxima de jogos livres!";
    this.jyr = "O jogo será encerrado";
    this.yxg = "O jogo será reiniciado";
    this.bro = "GANHOU";
    this.error = "ERRO";
    this.mbn = "FREEPLAY";
    this.siw = "AUTO";
    this.thl = "ID JOGO";
    this.jue = "Playing Time";
    this.vqd = "Últimos";
    this.hwv = "jogos";
    this.itf = "DEPOSIT";
    this.audio = "AUDIO";
    this.sxc = "MUSIC";
    this.iua = "TELA CHEIA";
    this.fit = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.fkr = "Não exibir novamente";
    this.ynl = "Sounds não podem ser carregados!";
    this.qzr = "Faltam recursos!";
    this.knf = "Jogar sem som?";
    this.cvt = "AJUSTES";
    this.ntf = "Favor girar o seu aparelho!";
    this.zjk = "INFORMAÇÃO";
    this.zch = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.kxs = "Este jogo é otimizado por Google Chrome.";
    this.cum = "Favor usar a versão atual de";
    this.ndt = "Infelizmente este browser não é completamente suportado.";
    this.deo = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.het = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.ekz = "Adapte a interface do jogo às suas necessidades!";
    this.nnx = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.yrh = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.cui = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.mik = "Estatísticas";
    this.fcz = "Número de jogos";
    this.zha = "Aposta total";
    this.ana = "Ganho total";
    this.fda = "Tempo total do jogo";
    this.fnq = "Eu lí esta mensagem.";
    this.daf = "ENCERRAR|JOGO";
    this.vfc = "HISTÓRICO";
    this.szk = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.alc = "Jogo principal";
    this.ron = "Coletado automaticamente";
    this.hui = "Coletado";
    this.wuc = "Bonusspins";
    this.zda = "Respin";
    this.hnt = "Bonus";
    this.cia = "Primeiro Deal";
    this.uin = "Segundo Deal";
    this.dvq = "Terceiro Deal";
    this.ozf = "AJUSTES AUTOPARTIDA";
    this.khs = "Número de jogos:";
    this.bdh = "Parar autopartida";
    this.gvm = "Crédito menor do que:";
    this.sgo = "Crédito maior do que:";
    this.gtu = "Ganho maior do que:";
    this.jlp = "O autopartida será parado no início do bonus.";
    this.pvb = "Participar no Facebook";
    this.xej = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.rzt = "Reality Check";
    this.bvn = "Solicitaste um Reality Check.";
    this.rjz = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
piw.prototype = new jdo;

function dax() {
    this.tbr = "LA MISE MINIMALE EST DE";
    this.sxa = "MISE MAX.";
    this.xjg = "MISE MINI";
    this.tmd = "MISE MAX.";
    this.oml = "MISE";
    this.start = "DEPART";
    this.cth = "AIDE";
    this.fqj = "TABLEAU|DES PAIEMENTS";
    this.yyl = "MENU";
    this.hin = "PLUS|DE JEUX";
    this.qhb = "ARRÊTEZ";
    this.cfy = "CRÉDIT";
    this.mua = "FIN DU JEU";
    this.ntt = "GAGNANT!";
    this.nfu = "BONNE CHANCE!";
    this.win = "GAIN";
    this.zry = "DERNIER GAIN";
    this.stb = "ENCAISSER";
    this.bco = "ENCAISSER";
    this.zli = "DOUBLER";
    this.ryv = "AUTO|LANCER";
    this.mrh = "ENCAISSER|MOITIÉ";
    this.stm = "SORTIE";
    this.ond = "APPUYEZ SUR START";
    this.oad = "CHOISIR LA MISE";
    this.rvn = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.awx = "Gain total";
    this.sov = "Avertissement";
    this.wey = "TOTALE";
    this.eqm = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.ogm = "Plus de jeux";
    this.bye = "VITESSE";
    this.oct = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.lcp = "C O N T I N U E R";
    this.dzi = "AUTO LANCER";
    this.umz = "TABLEAU DES PAIEMENTS";
    this.aou = "DOUBLER";
    this.left = "GAUCHE";
    this.yud = "DROITE";
    this.ok = "OK";
    this.yjf = "ANNULER";
    this.kru = "Doubler";
    this.lvk = "Encaisser moitié";
    this.kjj = "RÈGLES DU JEU";
    this.jat = "RÈGLES DU JEU";
    this.ifk = "Bonus!";
    this.bgw = "BONUS";
    this.jee = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.jse = "PAS ASSEZ DE CRÉDIT";
    this.wor = "gagne";
    this.tej = "V A L U E";
    this.of = "SUR";
    this.wvq = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.pjk = "CHARGEMENT EN COURS ...";
    this.mlf = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.zxr = "Erreur de communication";
    this.glm = "Vous avez atteint une des limites!";
    this.nfq = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.jyr = "Le jeu sera terminé";
    this.yxg = "Le jeu sera démarré de nouveau";
    this.bro = "GAGNÉ";
    this.error = "ERREUR";
    this.mbn = "JEU GRATUIT";
    this.siw = "AUTO";
    this.thl = "ID DU JEU";
    this.jue = "TEMPS DE JEU";
    this.vqd = "Les";
    this.hwv = "derniers jeux";
    this.itf = "AVOIR";
    this.audio = "AUDIO";
    this.sxc = "MUSIQUE";
    this.iua = "PLEIN ÉCRAN";
    this.fit = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.fkr = "Ne pas afficher encore une fois";
    this.ynl = "Impossible de charger des sounds!";
    this.qzr = "Manque de ressources!";
    this.knf = "Jouer sans son?";
    this.cvt = "CONFIGUR.";
    this.ntf = "Merci de tourner votre matériel!";
    this.zjk = "INFO";
    this.zch = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.kxs = "Ce jeu est optimisé pour Google Chrome.";
    this.cum = "Veuilllez utiliser la version à jour de";
    this.ndt = "Malheureusement, ce browser n'est intégralement supporté.";
    this.deo = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.het = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.ekz = "Adapte l'interface de jeu à tes besoins!";
    this.nnx = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.yrh = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.cui = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.mik = "Statistiques";
    this.fcz = "Nombre des jeux";
    this.zha = "Total des mises";
    this.ana = "Gain total";
    this.fda = "Temps total du jeu";
    this.fnq = "J'ai lu le message";
    this.daf = "TERMINER|LE JEU";
    this.vfc = "Historique";
    this.szk = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.alc = "Jeu principal";
    this.ron = "Pris automatiquement";
    this.hui = "Pris";
    this.wuc = "Bonusspins";
    this.zda = "Respin";
    this.hnt = "Bonus";
    this.cia = "Premier Deal";
    this.uin = "Deuxième Deal";
    this.dvq = "Troisième Deal";
    this.ozf = "AUTOSTART CONFIGURATION";
    this.khs = "Nombre des jeux:";
    this.bdh = "Arrêter autostart";
    this.gvm = "Crédit inférieur à:";
    this.sgo = "Crédit supérieur à:";
    this.gtu = "Gain supérieur à:";
    this.jlp = "L'autostart est arrêté au début du bonus.";
    this.pvb = "Partager sur Facebook";
    this.xej = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.rzt = "Reality Check";
    this.bvn = "Tu as demandé un Reality Check.";
    this.rjz = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
dax.prototype = new jdo;

function tiu() {
    this.tbr = "NAJMANJI ULOG JE";
    this.sxa = "MAX ULOG";
    this.xjg = "MIN. ULOG";
    this.tmd = "MAKS. ULOG";
    this.oml = "ULOG";
    this.start = "START";
    this.cth = "POMOĆ";
    this.fqj = "LISTA DOBITAKA";
    this.yyl = "IZBORNIK";
    this.hin = "VIŠE|IGARA";
    this.qhb = "STOP";
    this.cfy = "KREDIT";
    this.mua = "KRAJ IGRE";
    this.ntt = "DOBITAK!";
    this.nfu = "SRETNO!";
    this.win = "DOBITAK";
    this.zry = "ZADNJI DOBITAK";
    this.stb = "UPIŠI";
    this.bco = "UPIŠI";
    this.zli = "DUPLANJE";
    this.ryv = "AUTO|START";
    this.mrh = "UZMI|1/2";
    this.stm = "IZLAZ";
    this.ond = "PRETISNITE START";
    this.oad = "BIRAJTE ULOG";
    this.rvn = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.awx = "Ukubni dobitci";
    this.sov = "Upozorenje";
    this.wey = "UKUBNI";
    this.eqm = "MOLIMO PRIČEKAJTE ...";
    this.ogm = "Više igara";
    this.bye = "BRZINA";
    this.oct = "Kod kvara na uređaju nema jamstva.";
    this.lcp = "D A L J E";
    this.dzi = "AUTOSTART";
    this.umz = "LISTA DOBITAKA";
    this.aou = "DUPLANJE";
    this.left = "LIJEVA";
    this.yud = "DESNA";
    this.ok = "OK";
    this.yjf = "PREKID";
    this.kru = "Duplanje";
    this.lvk = "Uzmi 1/2";
    this.kjj = "PRAVILA IGRE";
    this.jat = "PRAVILA IGRE";
    this.ifk = "Bonus!";
    this.bgw = "BONUS";
    this.jee = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.jse = "NEMATE DOVOLJNO KREDITA.";
    this.wor = "dobici";
    this.tej = "V A L U E";
    this.of = "OD";
    this.wvq = "ZA NASTAVAK DODIRNITE ZASLON";
    this.pjk = "UČITAVANJA ...";
    this.mlf = "POVIJEST UČITAVANJA ...";
    this.zxr = "Komunikacijska pogreška";
    this.glm = "Dostigli ste jednu od graničnih vrijednosti!";
    this.nfq = "Dostigli ste maksimum besplatnih igara!";
    this.jyr = "Igra se zatvara";
    this.yxg = "Igra se iznova učitava";
    this.bro = "OSVOJENO";
    this.error = "POGREŠKA";
    this.mbn = "FREEPLAY";
    this.siw = "AUTO";
    this.thl = "ID IGRE";
    this.jue = "Vrijeme igre";
    this.vqd = "posljednjih";
    this.hwv = "igara";
    this.itf = "DEPOZIT";
    this.audio = "ZVUKA";
    this.sxc = "GLAZBA";
    this.iua = "PUN ZASLON";
    this.fit = "PUN ZASLON";
    this.language = "JEZIKA";
    this.fkr = "Ne prikazuj ponovo";
    this.ynl = "Zvukovi se ne mogu učitati!";
    this.qzr = "Nedostaju resursi!";
    this.knf = "Želite li igrati uz zvuk?";
    this.cvt = "POSTAVKE";
    this.ntf = "Uključite svoj uređaj!";
    this.zjk = "INFORMACIJE";
    this.zch = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.kxs = "Ova igra je optimizirana za Google Chrome.";
    this.cum = "Molimo koristite se trenutnom inačicom";
    this.ndt = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.deo = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.het = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.ekz = "Prilagodite sučelje igre svojim potrebama!";
    this.nnx = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.yrh = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.cui = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.mik = "Statistike";
    this.fcz = "Ukupno igara";
    this.zha = "Ukupni ulog";
    this.ana = "Ukupno dobitaka";
    this.fda = "Ukupno vrijeme igre";
    this.fnq = "Pročitao sam ovu poruku";
    this.daf = "IZLAZ|IZ IGRE";
    this.vfc = "Povijest";
    this.szk = "Nema odigranih igara.";
    this.state = "STANJE";
    this.alc = "Glavna igra";
    this.ron = "Auto. pokupljeno";
    this.hui = "Pokupljeno";
    this.wuc = "Besplatne igre";
    this.zda = "Dodatne okretaje";
    this.hnt = "Bonus";
    this.cia = "Prvo dijeljenje";
    this.uin = "Drugo dijeljenje";
    this.dvq = "Treće dijeljenje";
    this.ozf = "POSTAVKE AUTOMATSKE IGRE";
    this.khs = "Ukupno igara:";
    this.bdh = "Zaustavljanje automatske igre";
    this.gvm = "Kredit manji od:";
    this.sgo = "Kredit veći od:";
    this.gtu = "Dobitak veći od:";
    this.jlp = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.pvb = "Podijeli na Facebooku";
    this.xej = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.rzt = "Reality Check";
    this.bvn = "Zatražili ste Reality Check.";
    this.rjz = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
tiu.prototype = new jdo;

function zov() {
    this.tbr = "MINIMA PUNTATA È";
    this.sxa = "PUNTATA MASSIMA";
    this.xjg = "MIN. PUNTATA";
    this.tmd = "MASS. PUNTATA";
    this.oml = "PUNTATA";
    this.start = "START";
    this.cth = "AIUTO";
    this.fqj = "TABELLA VINCITE";
    this.yyl = "MENU";
    this.hin = "SCELTA|GIOCHI";
    this.qhb = "STOP";
    this.cfy = "CREDITO";
    this.mua = "FINE PARTITA";
    this.ntt = "VINCITORE!";
    this.nfu = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.zry = "ULTIMA VINCITA";
    this.stb = "INCASSA";
    this.bco = "INCASSA";
    this.zli = "GAMBLE";
    this.ryv = "AUTO|START";
    this.mrh = "METÀ";
    this.stm = "FINE";
    this.ond = "PREMI START";
    this.oad = "SCEGLI PUNTATA";
    this.rvn = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.awx = "Totale vincita";
    this.sov = "Attenzione";
    this.wey = "TOTALE";
    this.eqm = "ATTENDERE PREGO ...";
    this.ogm = "Scelta Giochi";
    this.bye = "VELOCITÀ";
    this.oct = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.lcp = "C O N T I N U A";
    this.dzi = "AUTOSTART";
    this.umz = "TABELLA VINCITE";
    this.aou = "GAMBLE";
    this.left = "SINISTRA";
    this.yud = "DESTRA";
    this.ok = "OK";
    this.yjf = "CANCELLA";
    this.kru = "Gamble";
    this.lvk = "Metà";
    this.kjj = "REGOLAMENTO";
    this.jat = "REGOLAMENTO";
    this.ifk = "Bonus!";
    this.bgw = "BONUS";
    this.jee = "PREMI UN TASTO PER CONTINUARE";
    this.jse = "CREDITO INSUFFICIENTE!";
    this.wor = "vince";
    this.tej = "V A L U E";
    this.of = "DI";
    this.wvq = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.pjk = "STA CARICANDO ...";
    this.mlf = "STA CARICANDO LA CRONACA ...";
    this.zxr = "Errore di comunicazione";
    this.glm = "Hai raggiunto uno dei limiti!";
    this.nfq = "Hai raggiunto il numero massimo di free games!";
    this.jyr = "La partita sta terminando";
    this.yxg = "La partita sta ripartendo";
    this.bro = "VINTO";
    this.error = "ERRORE";
    this.mbn = "FREEPLAY";
    this.siw = "AUTO";
    this.thl = "GAME ID";
    this.jue = "Durata del gioco";
    this.vqd = "Ultime partite";
    this.hwv = "";
    this.itf = "DEPOSITO";
    this.audio = "AUDIO";
    this.sxc = "MUSICA";
    this.iua = "SCHERMO INTERO";
    this.fit = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.fkr = "Non mostrare di nuovo";
    this.ynl = "Suoni non caricabili!";
    this.qzr = "Mancano risorse!";
    this.knf = "Giocare senza suoni?";
    this.cvt = "SETTAGGI";
    this.ntf = "Prego girare l'apparecchio!";
    this.zjk = "INFO";
    this.zch = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.kxs = "La partita è ottimizzata per Google Chrome.";
    this.cum = "Prego utilizzare la versione attuale di";
    this.ndt = "Purtroppo il presente browser non viene supportato interamente";
    this.deo = "Impossibile avviare questa partita nel modo freeplay!";
    this.het = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.ekz = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.nnx = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.yrh = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.cui = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.mik = "Statistica";
    this.fcz = "Totale partite";
    this.zha = "Totale puntata";
    this.ana = "Totale vincita";
    this.fda = "Totale durata del gioco";
    this.fnq = "Ho letto il messaggio";
    this.daf = "TERMINARE|LA PARTITA";
    this.vfc = "Cronaca";
    this.szk = "Nessuna partita giocata.";
    this.state = "STATO";
    this.alc = "Partita principale";
    this.ron = "Raccolto autom.";
    this.hui = "Raccolto";
    this.wuc = "Bonusspin";
    this.zda = "Respin";
    this.hnt = "Bonus";
    this.cia = "Primo deal";
    this.uin = "Secondo deal";
    this.dvq = "Terzo deal";
    this.ozf = "SETTAGGI AUTOSTART";
    this.khs = "Numero di partite:";
    this.bdh = "Fermare l'autostart";
    this.gvm = "Credito più basso di:";
    this.sgo = "Credito più alto di:";
    this.gtu = "Vincita più alta di:";
    this.jlp = "L'autostart si ferma all'inizio del bonus.";
    this.pvb = "Dividi su facebook";
    this.xej = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.rzt = "Reality Check";
    this.bvn = "Avete richiesto un Reality Check.";
    this.rjz = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.wpy = "Game break";
    this.gku = "Game limits";
    this.pjf = "Self test";
    this.mzg = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
zov.prototype = new jdo;

function jaw() {
    this.tbr = "MIN. INSATSEN ÄR";
    this.sxa = "MAXIMAL INSATS";
    this.xjg = "MIN. INSATS";
    this.tmd = "MAX. INSATS";
    this.oml = "INSATS";
    this.start = "STARTA";
    this.cth = "HJÄLP";
    this.fqj = "VINSTTABELL";
    this.yyl = "MENY";
    this.hin = "FLER|SPEL";
    this.qhb = "STOPP";
    this.cfy = "KREDIT";
    this.mua = "SPELET ÄR SLUT";
    this.ntt = "VINNARE!";
    this.nfu = "LYCKA TILL!";
    this.win = "VINN";
    this.zry = "SENASTE VINSTEN";
    this.stb = "INKASSERA";
    this.bco = "INKASSERA";
    this.zli = "DUBBLERA";
    this.ryv = "AUTO|START";
    this.mrh = "HÄLFTEN|1/2";
    this.stm = "AVSLUTA";
    this.ond = "TRYCK PÅ START";
    this.oad = "VÄLJ INSATS";
    this.rvn = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.awx = "Total Vinst";
    this.sov = "Varning";
    this.wey = "TOTALT";
    this.eqm = "VAR VÄNLIG VÄNTA ...";
    this.ogm = "Fler spel";
    this.bye = "TEMPO";
    this.oct = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.lcp = "F O R T S Ä T T";
    this.dzi = "AUTOSTART";
    this.umz = "VINSTTABELL";
    this.aou = "DUBBLERA";
    this.left = "VÄNSTER";
    this.yud = "HÖGER";
    this.ok = "OK";
    this.yjf = "AVBRYT";
    this.kru = "Dubblering";
    this.lvk = "Hälften";
    this.kjj = "SPELREGLER";
    this.jat = "SPELREGLER";
    this.ifk = "Bonus!";
    this.bgw = "BONUS";
    this.jee = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.jse = "FÖR LÅGT SALDO!";
    this.wor = "vinster";
    this.tej = "V A L U E";
    this.of = "AV";
    this.wvq = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.pjk = "LÄSER ...";
    this.mlf = "LÄSER IN HISTORIKEN ...";
    this.zxr = "Kommunikationsfel";
    this.glm = "Du har nått en av gränserna!";
    this.nfq = "Du har nått det maximala antalet gratisspel!";
    this.jyr = "Spelet avslutas";
    this.yxg = "Spelet startas om";
    this.bro = "VUNNA";
    this.error = "FEL";
    this.mbn = "GRATISSPEL";
    this.siw = "AUTO";
    this.thl = "SPEL-ID";
    this.jue = "SPELTID";
    this.vqd = "senaste";
    this.hwv = "spelen";
    this.itf = "INSÄTTNING";
    this.audio = "LJUD";
    this.sxc = "MUSIK";
    this.iua = "HELSKÄRM";
    this.fit = "HELSKÄRM";
    this.language = "SPRÅK";
    this.fkr = "Visa inte igen";
    this.ynl = "Ljud kan inte laddas!";
    this.qzr = "Resurser saknas!";
    this.knf = "Spela utan ljud?";
    this.cvt = "INSTÄLLN.";
    this.ntf = "Vänd din enhet!";
    this.zjk = "INFO";
    this.zch = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.kxs = "Det här spelet är optimerat för Google Chrome.";
    this.cum = "Använd den senaste versionen av";
    this.ndt = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.deo = "Det här spelet kan inte startas i gratisspelsläget!";
    this.het = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.ekz = "Anpassa spelgränssnittet efter dina behov!";
    this.nnx = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.yrh = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.cui = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.mik = "Statistik";
    this.fcz = "Totalt antal spel";
    this.zha = "Totalinsats";
    this.ana = "Totalvinst";
    this.fda = "Total speltid";
    this.fnq = "Jag har läst detta meddelande";
    this.daf = "AVSLUTA|SPELET";
    this.vfc = "Historik";
    this.szk = "Inga spel har spelats.";
    this.state = "STATUS";
    this.alc = "Huvudspel";
    this.ron = "Auto. Inkasserat";
    this.hui = "Inkasserat";
    this.wuc = "Bonusspinn";
    this.zda = "Respin";
    this.hnt = "Bonus";
    this.cia = "Första given";
    this.uin = "Andra given";
    this.dvq = "Tredje given";
    this.ozf = "AUTOSTARTINSTÄLLNINGAR";
    this.khs = "Antal spelrundor:";
    this.bdh = "Stoppa autospel";
    this.gvm = "Saldo lägre än:";
    this.sgo = "Saldo högre än:";
    this.gtu = "Vinst högre än:";
    this.jlp = "Autospelen kommer att stoppas då bonusen startar.";
    this.pvb = "Dela på Facebook";
    this.xej = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.rzt = "Reality Check";
    this.bvn = "Du har begärt att få en statusuppdatering.";
    this.rjz = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.wpy = "Spelpaus";
    this.gku = "Spelgränser";
    this.pjf = "Självtest";
    this.mzg = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
jaw.prototype = new jdo;

function xbe() {
    this.hio = "LINES";
    this.bsd = "LINE";
    this.cqc = "BET / LINE";
    this.yug = "WAYS";
    this.bqa = "WAY";
    this.tuh = "BONUSSPINS LEFT";
    this.cmn = "TOTAL BONUSSPINS";
    this.bop = "BONUSSPINS PLAYED";
    this.vyc = "BONUSSPINS LEFT";
    this.gde = "CONGRATULATIONS YOU WIN!";
    this.vkf = "BONUS WIN";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SYMBOLS";
    this.keu = "SYMBOL";
    this.okw = "You win extra BONUSSPINS!";
    this.aer = "Wins pay only from left to right!";
    this.nuc = "BONUS ENTRY WIN:";
    this.nbh = "BONUSSPINS";
    this.yxu = "BONUSSPINS are played with the same bet and number of lines as the initiating game.";
    this.zdl = "Line Wins: Only the highest line win is paid on each line played. Line wins are a multiple of the line bet. Line wins from different lines are added.";
    this.prs = "Scatter Wins: Scatter wins are a multiple of the total bet. Wins from Scatter symbols are added to the line wins.";
    this.wxc = "BONUS HELP";
    this.gtv = "SYMBOL HELP";
    this.tfw = "WINLINE HELP";
    this.jeb = "WINWAY HELP";
    this.uqe = "You win an extra 15 BONUSSPINS!";
    this.ymt = "Play the Bonus until you have no BONUSSPINS left. BONUSSPINS can be re-triggered during the Bonus.";
    this.irc = "GAMBLE AMOUNT";
    this.mkg = "RED/BLACK GAMBLE TO WIN";
    this.man = "SUIT GAMBLE TO WIN";
    this.omx = "15 BONUSSPINS are won with 3, 4 or 5 SCATTERED Symbols on any position! All BONUSSPIN wins are multiplied by 3.";
    this.vgv = "Finish placing your bets!";
    this.xjb = "Place your bets please!";
    this.iar = "No more bets!";
    this.lbw = "Good Luck!";
    this.ric = "Better luck next time!";
    this.wdm = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.vnu = "Bets accepted!";
    this.wzv = "Bets not accepted!";
    this.tvz = "Game in progress, please wait!";
    this.vvm = "WIN UP TO";
    this.ciw = "WIN HISTORY";
    this.hwg = "BONUS END";
    this.isc = "Bonus Multiplier";
    this.bir = "Freespins!";
    this.vng = "FREESPINS PLAYED";
    this.byv = "FREESPIN WIN";
    this.oeo = "CONGRATULATION!";
    this.umx = "Congratulation, you get";
    this.enz = "You have";
    this.mnn = "freespins remaining!"
}
xbe.prototype = new mwg;

function kur() {
    this.hio = "ЛИНИИ";
    this.bsd = "ЛИНИЯ";
    this.cqc = "СТ. / ЛИНИЮ";
    this.tuh = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.cmn = "Бонусные вращения";
    this.bop = "СЫГРАННО ВРАЩЕНИЙ";
    this.vyc = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.gde = "ПОЗДРАВЛЯЕМ! ВЫ ВЫИГРАЛИ!";
    this.vkf = "БОНУС ВЫИГРЫШ";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "СИМВОЛЫ";
    this.keu = "СИМВОЛ";
    this.nbh = "призовых вращений";
    this.aer = "Все выигрыши считаются только слевa направо.";
    this.okw = "Вы выиграли дополнительные бонусные вращения!";
    this.yxu = "Ставка и количество линий в игре бонусные вращения те же самые, что и в инициировавшей игре.";
    this.zdl = "Линейные выигрыши: Засчитывается только максимальный выигрыш на каждой линии. Размер линейных выигрышей – многократная сумма ставки. Линейные выигрыши на разных линиях суммируются.";
    this.prs = "Выигрыши Scatter Сумма выигрышей Scatter – многократная сумма общей ставки. Выигрыши с символами Scatter прибавляются к линейным выигрышам.";
    this.yug = "ПУТИ";
    this.bqa = "ПУТЬ";
    this.wxc = "БОНУС – ПОМОЩЬ";
    this.gtv = "СИМВОЛ ПОМОЩЬ";
    this.tfw = "ЛИНИИ ВЫИГРЫША ПОМОЩЬ";
    this.jeb = "ПОМОЩЬ К ПУТИ К ВЫИГРЫШУ";
    this.wdm = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА";
    this.irc = "СУММА РИСКА";
    this.mkg = "РИСКНУТЬ КРАСНАЯ/ЧЕРНАЯ";
    this.man = "ВЫБОР МАСТИ";
    this.vvm = "ВЫИГРАЙ ДО";
    this.ciw = "ХРОНИКА ВЫИГРЫШЕЙ";
    this.hwg = "КОНЕЦ БОНУСА";
    this.bir = "бесплатных игр!";
    this.vng = "СЫГРАННЫЕ БЕСПЛАТНЫЕ ИГРЫ";
    this.byv = "ВЫИГРЫШ БЕСПЛАТНОЙ ИГРЫ";
    this.oeo = "ПОЗДРАВЛЯЕМ!";
    this.umx = "Поздравляем, вы получили";
    this.enz = "У вас еще";
    this.mnn = "бесплатных игр!";
    this.vnu = "Ставки признаны!";
    this.wzv = "Ставки не признаны!";
    this.tvz = "Игра в процессе, пожалуйста, подождите...";
    this.vgv = "Игра сейчас начнется!";
    this.xjb = "Сделайте ставку, пожалуйста!";
    this.iar = "Ставок больше нет!";
    this.lbw = "Удачи!";
    this.ric = "Желаем удачи в следующий раз!";
    this.uqe = "Вы выиграли следующие 15 призовых вращений барабанов!";
    this.ymt = "Бонус призовых вращений заканчивается когда призовых вращений больше нет. Дополнительные призовые вращения могут быть добавлены к Бонусу призовых вращений.";
    this.omx = "Вы получите 15 призовых вращений барабанов при выпадении 3, 4 или 5 символов СКАТТЕР на любой позиции. Все выигрыши умножаются на 3."
}
kur.prototype = new ajw;

function ann() {
    this.hio = "LÍNEAS";
    this.bsd = "LÍNEA";
    this.cqc = "APUE. / LÍNEA";
    this.tuh = "BONUSSPINS RESTANTES";
    this.cmn = "TOTAL DE BONUSSPINS";
    this.bop = "BONUSSPINS JUGADOS";
    this.vyc = "BONUSSPINS RESTANTES";
    this.gde = "ENHORABUENA, HAS GANADO!";
    this.vkf = "PREMIO BONUS";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SIMBOLOS";
    this.keu = "SIMBOLO";
    this.isc = "Multiplicador de bonus";
    this.nuc = "PREMIO ENTRADA BONUS:";
    this.nbh = "JUEGOS LIBRES";
    this.aer = "Premios de la izquierda a la derecha!";
    this.okw = "Ha ganado BONUSSPINS extra.";
    this.yxu = "Los BONUSSPINS se juegan con la misma apuesta y el número de lineas que el juego inicial.";
    this.zdl = "Premios de línea: Sólo se paga el mayor premio de línea por cada línea jugada. Los premios de línea son un múltiplo de la apuesta de la línea. Se suman los premios de línea de las diferentes líneas.";
    this.prs = "Premios Scatter: Los premios Scatter son múltiplos de la apuesta total. Los premios de los símbolos scatter se suman a los premios de la línea.";
    this.yug = "CAMINOS";
    this.bqa = "CAMINO";
    this.wxc = "AYUDA DE BONUS";
    this.gtv = "SÍMBOLO AYUDA";
    this.tfw = "LÍNEA GANADORA AYUDA";
    this.jeb = "AYUDA FORMAS DE PREMIO";
    this.wdm = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.irc = "PREMIO";
    this.mkg = "ROJO/NEGRO PREMIO";
    this.man = "PREMIO DE SIMBOLO";
    this.vvm = "GANANCIAS HASTA";
    this.ciw = "HISTORIAL DE GANANCIAS";
    this.hwg = "FIN DE BONUS";
    this.bir = "Giros gratis!";
    this.vng = "GIROS GRATIS JUGADOS";
    this.byv = "PREMIO GIRO GRATIS";
    this.oeo = "¡ENHORABUENA!";
    this.umx = "¡Enhorabuena, ha conseguido";
    this.enz = "¡Le quedan";
    this.mnn = "giros gratis!";
    this.vnu = "Aceptar apuestas!";
    this.wzv = "Apuestas rechazadas!";
    this.tvz = "El juego no ha concluido, por favor espere!";
    this.vgv = "El juega va a comenzar!";
    this.xjb = "Haga juego!";
    this.iar = "No más apuestas!";
    this.lbw = "¡Mucha suerte!";
    this.ric = "¡Mejor suerte la próxima vez!";
    this.uqe = "Premio de 15 Freespins addicionales!";
    this.ymt = "El bono concluye cuando todos los BONUSSPINS se hayan jugado. En bono pueden ganarse BONUSSPINS adicionales.";
    this.omx = "Se gana 15 Freespins con 3, 4 o 5 simbolos de SCATTER en alguna posicion! Se triplican todos los premios de freespins."
}
ann.prototype = new byg;

function hqf() {
    this.hio = "LINIEN";
    this.bsd = "LINIE";
    this.cqc = "EINS. / LINIE";
    this.tuh = "VERBLEIBENDE BONUSSPINS";
    this.cmn = "TOTAL BONUSSPINS";
    this.bop = "GESPIELTE BONUSSPINS";
    this.vyc = "VERBLEIBENDE BONUSSPINS";
    this.gde = "GRATULIERE GEWONNEN!";
    this.vkf = "BONUS GEWINN";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SYMBOLE";
    this.keu = "SYMBOL";
    this.isc = "Bonus Multiplikator";
    this.nuc = "BONUS START GEWINN:";
    this.nbh = "BONUSSPINS";
    this.aer = "Gewinne werden nur von links nach rechts gewertet!";
    this.okw = "Zusätzliche BONUSSPINS gewonnen!";
    this.yxu = "Die BONUSSPINS werden mit demselben Einsatz und Linienanzahl wie das auslösende Spiel gespielt.";
    this.zdl = "Liniengewinne: Nur der höchste Liniengewinn je gespielter Linie zählt. Liniengewinne sind ein Vielfaches des Linieneinsatzes. Die Liniengewinne von verschiedenen Linien werden addiert.";
    this.prs = "Scattergewinne: Scatter-Gewinne sind ein Vielfaches des Gesamteinsatzes. Gewinne aus Scatter-Symbolen werden den Liniengewinnen hinzugezählt.";
    this.yug = "WEGE";
    this.bqa = "WEG";
    this.wxc = "BONUS HILFE";
    this.gtv = "SYMBOL HILFE";
    this.tfw = "GEWINNLINIEN HILFE";
    this.jeb = "GEWINNWEGE HILFE";
    this.wdm = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.irc = "RISIKO";
    this.mkg = "ROT/SCHWARZ CHANCE";
    this.man = "SYMBOL CHANCE";
    this.vvm = "GEWINNE BIS ZU";
    this.ciw = "GEWINNHISTORIE";
    this.hwg = "BONUS ENDE";
    this.bir = "Freespins!";
    this.vng = "GESPIELTE FREESPINS";
    this.byv = "FREESPIN GEWINN";
    this.oeo = "GRATULIERE!";
    this.umx = "Gratulation, Sie bekommen";
    this.enz = "Sie haben noch";
    this.mnn = "Freespins übrig!";
    this.vnu = "Einsätze akzeptiert!";
    this.wzv = "Einsätze nicht akzeptiert!";
    this.tvz = "Spiel läuft, bitte warten!";
    this.vgv = "Das Spiel beginnt gleich!";
    this.xjb = "Ihre Einsätze bitte!";
    this.iar = "Keine weiteren Einsätze!";
    this.lbw = "Viel Glück!";
    this.ric = "Mehr Glück beim nächsten Mal!";
    this.uqe = "Weitere 15 BONUSSPINS gewonnen!";
    this.ymt = "Der Bonus endet, wenn alle BONUSSPINS abgespielt worden sind. Zusätzliche BONUSSPINS können im Bonus gewonnen werden.";
    this.omx = "15 BONUSSPINS werden durch 3, 4 oder 5 SCATTER Symbole auf jeder Position gewonnen! Alle BONUSSPIN Gewinne x 3."
}
hqf.prototype = new suo;

function brb() {
    this.hio = "ÇIZGILER";
    this.bsd = "ÇİZGİ";
    this.cqc = "BANKO / ÇIZGI";
    this.tuh = "KALAN PRIM OYUNLARIR";
    this.cmn = "TOPLAM PRİM SPİNLERİ";
    this.bop = "OYNANAN PRIM OYUNLAR";
    this.vyc = "KALAN PRIM OYUNLARIR";
    this.gde = "TEBRİKLER KAZANDINIZ!";
    this.vkf = "PRIM KAZANCI";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SEMBOLLER";
    this.keu = "SEMBOL";
    this.isc = "Prim çarpanı";
    this.nuc = "PRİM GİRİŞ KAZANCI:";
    this.nbh = "BEDAVA OYUNLAR";
    this.aer = "Kazançlar tek soldan sağa değerlendirilir!";
    this.okw = "Ek PRİM SPİN’LERİ kazandınız!";
    this.yxu = "PRİM SPİNLER başlayacak olan oyunda da aynı banko ve çizgi sayısı ile oynanacaktır.";
    this.zdl = "Çizgi kazançları: Oynanan her çizginin sadece en yüksek çizgi kazancı sayılmaktadır. Çizgi kazançları çizgi bankosunun kat sayısından oluşmaktadır. Çeşitli çizgilerin çizgi kazançları birbirleri ile toplanmaktadır.";
    this.prs = "Scatter kazançları: Scatter-kazançları toplam bankonun kat sayısından oluşmaktadır. Scatter-Sembollerinden elde edilen kazançlar çizgi kazançlarına eklenmektedir.";
    this.yug = "YOLLAR";
    this.bqa = "YOL";
    this.wxc = "PRİM YARDIMI";
    this.gtv = "SEMBOL YARDIMI";
    this.tfw = "KAZANÇ ÇIZGISI YARDIMI";
    this.jeb = "KAZANÇ YOLLARI YARDIM";
    this.wdm = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.irc = "RİSK";
    this.mkg = "KIRMIZI/SİYAH ŞANSI";
    this.man = "SEMBOL ŞANSI";
    this.vvm = "KAZANANILMASI MÜMKÜN OLAN";
    this.ciw = "KAZANÇ GEÇMİŞİ";
    this.hwg = "PRİM BİTTİ";
    this.bir = "adet bedava Spin kazandınız!";
    this.vng = "OYNANILAN BEDAVA SPİN'ler";
    this.byv = "BEDAVA SPİN KAZANCI";
    this.oeo = "TEBRİKLER!";
    this.umx = "Tebrikler,";
    this.enz = "Daha";
    this.mnn = "adet bedava SPİN'iniz bulunuyor!";
    this.lbw = "Bol şans!";
    this.vnu = "Bahisler kabul edildi!";
    this.wzv = "Bahisler kabul edilmedi!";
    this.tvz = "Oyun oynanmakta, lütfen bekleyin!";
    this.vgv = "Oyun başlamak üzere!";
    this.xjb = "Bankolarınız lütfen!";
    this.iar = "Daha fazla banko mümkün değil!";
    this.ric = "Bir dahaki sefer daha şanslı olursun!";
    this.uqe = "15 bedava oyun daha kazandın!";
    this.ymt = "Bedava oyun primleri tüm bedava oyunlar oynandığı zaman biter. Bedava oyun primlerinde ek bedava oyunlar kazanılabilir.";
    this.omx = "Her pozisyondaki 3, 4 veya 5 SCATTERED sembolleri ile 15 tane bedava oyun kazanılır! Tüm bedava oyun kazançları x 3."
}
brb.prototype = new vtw;

function oho() {
    this.hio = "LINEK";
    this.bsd = "LINKA";
    this.cqc = "SÁZKA / LINKA";
    this.tuh = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.cmn = "TOTÁLNÍ BONUSSPINS";
    this.bop = "ODEHRANÉ BONUS HRY";
    this.vyc = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.gde = "GRATULUJEME VYHRÁL JSTE!";
    this.vkf = "BONUS VÝHRA";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SYMBOLY";
    this.keu = "SYMBOL";
    this.isc = "Násobic bonusu";
    this.nuc = "BONUS STARTUJE VÝHRU:";
    this.nbh = "BONUSSPINS";
    this.aer = "Výhry platí pouze z leva do prava!";
    this.okw = "Vyhrál jste extra BONUSOVOU hru!";
    this.yxu = "BONUSSPINS sa hrají se stejnou  sázkou a počtem línií jako hra, při které se spustily.";
    this.zdl = "Výhry na línkách: Započítává se jen nejvyšší výhra na lince. Výhry na linkách jsou násobky linkových sázek. Výhry na různých línkách se sčítají.";
    this.prs = "Scatter výhry: Scatter výhry násobí celkovou sázku. Výhry ze Scatter symbolů se připočítávají k výhrám na línkách.";
    this.yug = "ZPŮSOBY";
    this.bqa = "ZPŮSOB";
    this.wxc = "BONUS NÁPOVĚDA";
    this.gtv = "SYMBOL NÁPOVĚDA";
    this.tfw = "VÝHERNÉ LINIE NÁPOVĚDA";
    this.jeb = "WINWAY HELP";
    this.wdm = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.irc = "VÝHRA";
    this.mkg = "CERVENÁ/CERNÁ VÝHRA";
    this.man = "SPRÁVNÁ BARVA KARTY VYHRÁVÁ";
    this.vnu = "Sázky byly akceptovány!";
    this.wzv = "Sázky nebyly akceptovány!";
    this.vvm = "VÝHRA AŽ";
    this.ciw = "HISTORIE VÝHER";
    this.hwg = "KONEC BONUSU";
    this.bir = "Freespins!";
    this.vng = "FREESPINS PLAYED";
    this.byv = "FREESPIN WIN";
    this.oeo = "GRATULUJEME!";
    this.umx = "Congratulation, you get";
    this.enz = "You have";
    this.mnn = "freespins remaining!";
    this.tvz = "Hra probíhá, počkejte prosím!";
    this.vgv = "Hra Se Hned Spustí!";
    this.xjb = "Vaše sázky prosím!";
    this.iar = "Žádné další sázky.";
    this.lbw = "Hodne štestí!";
    this.ric = "Příště více štěstí!";
    this.uqe = "Vyhráváte dalších 15 volných her!";
    this.ymt = "Bonus je ukoncen po odehrání všech bonusových her. Bonusové hry mohou být získány i behem bonusu.";
    this.omx = "3, 4 nebo 5 SCATTER symbolu na libovolné pozici vyhrává 15 volných her, výhry ve volné hre jsou násobené 3x."
}
oho.prototype = new myb;

function hsw() {
    this.hio = "LIINID";
    this.bsd = "LIIN";
    this.cqc = "PAN. / LIINIL";
    this.tuh = "TASUTA KEERUTUSI JÄÄNUD";
    this.cmn = "BOONUSKEERUTUSI KOKKU";
    this.bop = "MÄNGE MÄNGITUD";
    this.vyc = "TASUTA KEERUTUSI JÄÄNUD";
    this.gde = "PALJU ÕNNE, SA VÕITSID!";
    this.vkf = "BOONUSVÕIT";
    this.nbh = "BOONUSKEERUTUST";
    this.irc = "RISKIMÄNGU SUMMA";
    this.mkg = "PUNANE/MUST RISKIMÄNG";
    this.man = "RISKIMÄNG SÜMBOLIGA";
    this.wdm = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.vnu = "Panused aktsepteeritud!";
    this.wzv = "Panuseid ei aktsepteeritud!";
    this.vvm = "VÕIDA KUNI";
    this.ciw = "VÕITUDE AJALUGU";
    this.hwg = "BOONUSE LÕPP";
    this.bir = "tasuta keerutust!";
    this.vng = "TASUTA KEERUTUSI MÄNGITUD";
    this.byv = "TASUTA KEERUTUSE VÕIT";
    this.oeo = "ÕNNITLEME!";
    this.umx = "Õnnitleme, said";
    this.enz = "Sul on jäänud veel";
    this.mnn = "tasuta keerutust!";
    this.tvz = "Mäng algab, palun oodake...";
    this.vgv = "Lõpeta panuste tegemine!";
    this.xjb = "Asetage palun panused!";
    this.iar = "Panuste tegemine lõppenud";
    this.lbw = "Soovime edu!";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SÜMBOLID";
    this.keu = "SÜMBOL";
    this.nuc = "BOONUSVÕIT:";
    this.aer = "Võite arvestatakse ainult vasakult paremale!";
    this.okw = "Te võitsite lisa BOONUSKEERUTUSI!";
    this.yxu = "BOONUSKEERUTUSED mängitakse sama panuse ja liinide arvuga, nagu boonuse käivitanud mängus.";
    this.yug = "VÕIMALUSED";
    this.bqa = "VÕIMALUSE";
    this.uqe = "Te võitsite lisa 15 BOONUSKEERUTUST!";
    this.ymt = "Mängige kõik tasuta keerutused lõpuni. Tasuta keerutusi võib võita ka tasuta keerutuste boonuse ajal.";
    this.wxc = "BOONUSE SPIKKER";
    this.gtv = "SÜMBOLI SPIKKER";
    this.tfw = "LIINIDE SPIKKER";
    this.jeb = "VÕIDUVÕIMALUSE SPIKKER";
    this.zdl = "Liini võidud: Igal mänguliinil makstakse ainult suurimad liinivõidud. Liini võidud korrutatakse liini panusega. Erinevate liinide võidud liidetakse kokku.";
    this.prs = "Scatteri võidud: Scatteri võidud korrutatakse kogupanusega. Scatteri sümboli võidud liidetakse liini võitudele.";
    this.isc = "Boonuse mitmekordistaja";
    this.ric = "Rohkem õnne järgmisel korral!";
    this.omx = "3, 4 või 5 TÄHE sümbolit juhuslikel kohtadel annab 15 BOONUSKEERUTUST! Kõik BOONUSKEERUTUSE võidud korrutatakse 3-ga."
}
hsw.prototype = new sum;

function etj() {
    this.hio = "ΓΡΑΜΜEΣ";
    this.bsd = "ΓΡΑΜΜΗ";
    this.cqc = "ΣΤΟIΧΗΜΑ / Γ.";
    this.tuh = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.cmn = "ΤΕΛΕΙΩΣ BONUSSPINS";
    this.bop = "ΠΑΙΓΜEΝΑ BONUSSPINS";
    this.vyc = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.gde = "ΣΥΓΧΑΡΗΤΗΡΙΑ ΚΕΡΔΙΣΑΤΕ!";
    this.vkf = "ΜΠOΝΟΥΣ ΚEΡΔΟΣ";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "ΣYΜΒΟΛΑ";
    this.keu = "ΣΎΜΒΟΛΟ";
    this.isc = "Πολλαπλασιαστής μπόνους";
    this.nuc = "BONUS START ΚΕΡΔIΖΕΙ:";
    this.nbh = "BONUSSPINS";
    this.aer = "Τα κέρδη μετρούνται από αριστερά προς τα δεξιά!";
    this.okw = "Κερδίσατε συμπληρωματικούς BONUSSPINS!";
    this.yxu = "Τα γυρίσματα μπόνους, τα BONUSSPINS, παίζονται με το ίδιο ποντάρισμα και τον ίδιο αριθμό σειρών, όπως το αρχικό παιχνίδι.";
    this.zdl = "Κέρδη γραμμών: Μόνο το μεγαλύτερο κέρδος ανά παιγμένη γραμμή προσμετράται. Τα κέρδη των γραμμών αποτελούν πολλαπλάσιο του πονταρίσματος στη γραμμή. Τα κέρδη γραμμών που αφορούν σε διαφορετικές γραμμές προστίθενται.";
    this.prs = "Κέρδη Scatter: Τα κέρδη Scatter αποτελούν πολλαπλάσιο του συνολικού πονταρίσματος. Τα κέρδη από σύμβολα Scatter προσμετρώνται στα κέρδη των γραμμών.";
    this.yug = "ΔΙΑΔΡΟΜΕΣ";
    this.bqa = "ΔΙΑΔΡΟΜΉ";
    this.wxc = "BONUS ΒΟΉΘΕΙΑ";
    this.gtv = "ΒΟHΘΕΙΑ ΣΥΜΒOΛΩΝ";
    this.tfw = "ΒΟHΘΕΙΑ ΣΕΙΡΩΝ ΚEΡΔΟΥΣ";
    this.jeb = "WINWAY ΒΟΗΘΕΙΑ";
    this.wdm = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.irc = "ΠΟΣΟ ΡΙΣΚΟΥ";
    this.mkg = "ΜΑΥΡΟ/ΚΟΚΚΙΝΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.man = "ΣΥΜΒΟΛΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.vvm = "ΚΕΡΔΗ ΕΩΣ";
    this.ciw = "ΙΣΤΟΡΙΚΟ ΚΕΡΔΩΝ";
    this.hwg = "ΛΗΞΗ ΜΠΟΝΟΥΣ";
    this.bir = "Freespins!";
    this.vng = "FREESPINS ΠΟΥ ΚΑΤΑΝΑΛΏΘΗΚΑΝ";
    this.byv = "FREESPIN ΚΕΡΔΟΣ";
    this.oeo = "ΣΥΓΧΑΡΗΤΗΡΙΑ!";
    this.umx = "Συγχαρητήρια, κερδίσατε";
    this.enz = "Σας απομένουν";
    this.mnn = "Freespins!";
    this.vnu = "Γίνονται αποδεκτά πονταρίσματα!";
    this.wzv = "Πονταρίσματα δε γίνονται αποδεκτά!";
    this.tvz = "Ενεργό παιχνίδι, παρακαλώ περιμένετε!";
    this.vgv = "Το παιχνίδι ξεκινά σε λίγο!";
    this.xjb = "Το ποντάρισμα σας, παρακαλώ!";
    this.iar = "Ποντάρισμα τέλος!";
    this.lbw = "Καλή τύχη!";
    this.ric = "Καλύτερη τύχη την επόμενη φορά!";
    this.uqe = "Κερδίσατε 15 συμπληρωματικούς BONUSSPINS!";
    this.ymt = "Το Bonus τελειώνει, όταν όλα τα BONUSSPINS έχουν παιχθεί. Συμπληρωματικά BONUSSPINS δύνανται να κερδισθούν στο Bonus.";
    this.omx = "15 BONUSSPINS κερδίζονται με 3, 4 ή 5 σύμβολα ΑΣΤΡΟΥ σε κάθε θέση! Όλα τα BONUSSPINS αποφέρουν τριπλασιασμό κερδών."
}
etj.prototype = new gik;

function agi() {
    this.hio = "ЛИНИИ";
    this.bsd = "ЛИНИЯ";
    this.cqc = "ЗАЛОГ/Л-Я";
    this.tuh = "БОНУС-ИГРИ ОСТАВАТ";
    this.bop = "БОНУС-ИГРИ ИЗИГРАНИ";
    this.vyc = "БОНУС-ИГРИ ОСТАВАТ";
    this.gde = "ПОЗДРАВЛЕНИЯ, ВИЕ СПЕЧЕЛИХТЕ!";
    this.vkf = "БОНУС ПЕЧАЛБА";
    this.nbh = "БОНУС-ИГРИ";
    this.irc = "СУМА ЗА ДУБЛИРАНЕ";
    this.mkg = "ДУБЛИРАЙ ЧЕРВЕНА/ЧЕРНА-ПЕЧАЛБА";
    this.man = "ДУБЛИРАНЕ НА КОЗОВ ЦВЯТ-ПЕЧАЛБА";
    this.wdm = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.vnu = "Залозите са приети!";
    this.wzv = "Залозите не са приети!";
    this.vvm = "СПЕЧЕЛИ ДО";
    this.ciw = "ИСТОРИЯ НА ПЕЧАЛБИТЕ";
    this.hwg = "КРАЙ НА БОНУС";
    this.bir = "безплатни завъртания!";
    this.vng = "ИЗИГРАНИ БЕЗПЛАТНИ ЗАВЪРТАНИЯ";
    this.byv = "СПЕЧЕЛЕНО БЕЗПЛАТНО ЗАВЪРТАНЕ";
    this.oeo = "ПОЗДРАВЛЕНИЯ!";
    this.umx = "Поздравления, получихте";
    this.enz = "Имате останали";
    this.mnn = "безплатни завъртания!";
    this.tvz = "Затворено за залози!";
    this.vgv = "Приключете със залозите!";
    this.xjb = "Поставете своите залози!";
    this.iar = "Край на залозите!";
    this.lbw = "Успех!";
    this.cmn = "ОБЩО БОНУС ИГРИ";
    this.oju = "СКАТЕР";
    this.nxb = "SCATTERED:";
    this.gpl = "СИМВОЛИ";
    this.keu = "СИМВОЛ";
    this.nuc = "НАЧАЛНА БОНУС ПЕЧАЛБА:";
    this.aer = "Печалбите се изплащат само от ляво на дясно!";
    this.okw = "Вие спечелихте допълнителни Бонус игри!";
    this.yxu = "Бонус игрите се играят със същия залог и брой линии, както основната игра.";
    this.yug = "НАЧИНИ";
    this.bqa = "НАЧИН";
    this.uqe = "Печелите допълнителни 15 БОНУС ЗАВЪРТАНИЯ!";
    this.ymt = "Бонус играта продължава до изчерпване на бонус игрите. По време на бонус игра може да се спечелят допълнителни игри.";
    this.wxc = "ПОМОЩ ЗА БОНУС";
    this.gtv = "ПОМОЩ СИМВОЛ";
    this.tfw = "ПОМОЩ ПЕЧЕЛИВША ЛИНИЯ";
    this.jeb = "ПОМОЩ ЗА ПЕЧАЛБИ";
    this.zdl = "Печалби на Линия: От всяка активна линия се изплаща само най-голямата печалба. Печалбата от активна линия се умножава по залога на линия. Печалбите от активните линии се събират и формират общата печалба.";
    this.prs = "Скатер печалби: Скатер печалбата се умножава по общият залог. Печалбите от фигурите Скатер се добавят към печалбата от активните линии.";
    this.isc = "Бонус Множител";
    this.ric = "По-добър успех-следващият път!";
    this.omx = "15 БОНУС ЗАВЪРТАНИЯ се печелят с 3, 4 или 5 символа ЗВЕЗДА на която и да е позиция! Всичките печалби от Бонус играта се умножават по 3."
}
agi.prototype = new mkx;

function fvb() {
    this.hio = "ხაზები";
    this.bsd = "ხაზი";
    this.cqc = "ფსონი / ხაზი";
    this.yug = "გზა";
    this.bqa = "გზა";
    this.tuh = "დარჩენილი BONUS თამაშები";
    this.cmn = "BONUS თამაშების რაოდენობა ჯამში";
    this.bop = "უკვე ნათამაშები BONUS თამაშები";
    this.vyc = "დარჩენილი BONUS თამაშები";
    this.gde = "გილოცავთ თქვენ მოიგეთ!";
    this.vkf = "BONUS მოგება";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "სიმბოლოები";
    this.keu = "სიმბოლო";
    this.okw = "თქვენ მოიგეთ დამატებითი BONUS თამაშები!";
    this.aer = "მოგების ანაზღაურება ხდება მხოლოდ მარცხნიდან მარჯვნივ!";
    this.nuc = "ბონუს ჩანაწერის მოგება:";
    this.nbh = "BONUS თამაშები";
    this.yxu = "BONUS თამაშების თამაში ხდება იგივე ფსონზე და ხაზების რაოდენობაზე, როგორც თამაშის დაწყების დროს.";
    this.zdl = "ხაზის მოგება: თითოეულ ნათამაშებ ხაზზე, მოხდება მხოლოდ უმაღლესი ხაზის მოგების ანაზღაურება. ხაზის მოგება შედგება მრავალჯერადი ხაზის ფსონისაგან. სხვადასხვა ხაზიდან მიღებული მოგება ჯამდება ერთ მოგებად.";
    this.prs = "Scatter მოგება: Scatter მოგება შეადგენს მთლიან ფსონს რამოდენიმეჯერ. მოგება Scatter სიმბოლოებიდან ემატება ხაზის მოგებას.";
    this.wxc = "ბონუს დახმარება";
    this.gtv = "სიმბოლოს დახმარება";
    this.tfw = "მოგების ხაზის დახმარება";
    this.jeb = "მოგების გზაზე დახმარება";
    this.uqe = "თქვენ მოიგეთ დამატებითი 15 BONUS თამაშები!";
    this.ymt = "ითამაშეთ ბონუსი სანამ BONUS თამაში არ გაგითავდებათ. დამატებითი BONUS თამაშის მოგება შეიძლება ბონუსის დროს.";
    this.irc = "გარისკვის რიცხვი";
    this.mkg = "წითელი/შავი ითამაშე და მოიგე";
    this.man = "ფერი ითამაშე და მოიგე";
    this.omx = "15 BONUS თამაშის მოგება ხდება 3, 4 ან 5 ვარსკვლავის სიმბოლოთი ნებისმიერ პოზიციაზე! ყველა BONUSSPIN მოგება მრავლდება 3-ზე.";
    this.ric = "გისურვებთ მომავალში უკეთეს იღბალს!";
    this.vgv = "დაასრულე ფსონის დადება!";
    this.xjb = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.iar = "ფსონები აღარ მიიღება!";
    this.lbw = "გისურვებთ წარმატებას!";
    this.wdm = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.vnu = "ფსონები მიღებულ იქნა!";
    this.wzv = "ფსონები არ იქნა მიღებული!";
    this.hwg = "ბონუსის დასასრული";
    this.vvm = "-მდე მოგება";
    this.ciw = "მოგების ჩანაწერი";
    this.tvz = "თამაში მიმდინარეობს, გთხოვთ დაელოდოთ!";
    this.isc = "ბონუს მულტიპლიკატორი";
    this.bir = "უფასო დატრიალება!";
    this.vng = "ნათამაშები უფასო დატრიალებები";
    this.byv = "უფასო დატრიალების მოგება";
    this.oeo = "გილოცავთ!";
    this.umx = "გილოცავთ, თქვენ მიიღეთ";
    this.enz = "თქვენ დაგრჩათ";
    this.mnn = "უფასო დატრიალება!"
}
fvb.prototype = new yqt;

function oyv() {
    this.hio = "VONALAK";
    this.bsd = "VONAL";
    this.cqc = "TÉT / VONAL";
    this.yug = "IRÁNY";
    this.bqa = "IRÁNY";
    this.tuh = "MEGMARADT SZABAD JÁTÉKOK";
    this.cmn = "ÖSSZES SZABAD JÁTÉK";
    this.bop = "LEJÁTSZOTT SZABAD JÁTÉKOK";
    this.vyc = "MEGMARADT SZABAD JÁTÉKOK";
    this.gde = "GRATULÁLUNK, ÖN NYERT!";
    this.vkf = "BÓNUSZ NYEREMÉNY";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SZIMBÓLUMOK";
    this.keu = "SZIMBÓLUM";
    this.okw = "További SZABADJÁTÉKOKAT nyert!";
    this.aer = "A Nyeremények balról jobbra fizetnek!";
    this.nuc = "BÓNUSZBA LÉPŐ NYEREMÉNY:";
    this.nbh = "SZABAD JÁTÉKOK";
    this.yxu = "Az alapjátéknál beállított tét és nyerővonal számmal játszódik le a SZABAD JÁTÉK is.";
    this.zdl = "Vonal Nyeremények: Csak a legnagyobb nyeremény fizet a megjátszott vonalakon. A vonal nyeremények a vonalankénti tét szorzatai. A különböző vonalankénti nyeremények összeadódnak.";
    this.prs = "Scatter Nyeremények: A Scatter nyeremények az összes tét szorzatai. A Scatter szimbólummal elért nyeremények a vonal nyereményekhez adódnak.";
    this.wxc = "BÓNUSZ SÚGÓ";
    this.gtv = "SZIMBÓLUM SÚGÓ";
    this.tfw = "NYERŐVONAL SÚGÓ";
    this.jeb = "NYEREMÉNYÚT SEGÉDLET";
    this.uqe = "További 15 SZABADJÁTÉKOT nyert!";
    this.ymt = "Játssza a szabad játék bónuszt ameddig van szabad pörgetése. Ez idő alatt újabb szabad játékokat nyerhet.";
    this.irc = "FELTETT ÖSSZEG";
    this.mkg = "PIROS/FEKETE NYEREMÉNY";
    this.man = "SZÍN NYEREMÉNY";
    this.omx = "15 SZABAD JÁTÉKOT nyerhet ha 3, 4 vagy 5 CSILLAG szimbólum jelenik meg bármely helyen. Minden SZABAD JÁTÉKBAN elért nyeremény háromszorosan fizet.";
    this.ric = "Több szerencsét máskor!";
    this.vgv = "Tétek lezárva!";
    this.xjb = "Kérem tegyék meg tétjeiket!";
    this.iar = "A játék elkezdődött, kérem várjon!";
    this.lbw = "Sok szerencsét!";
    this.wdm = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.vnu = "Tétek elfogadva!";
    this.wzv = "Nem lehet tétet rakni!";
    this.tvz = "Játék folyamatban, kérem várjon!";
    this.vvm = "A NYEREMÉNY AKÁR";
    this.ciw = "JÁTÉK TÖRTÉNET";
    this.hwg = "BÓNUSZ VÉGE";
    this.isc = "Bónusz szorzó";
    this.bir = "szabad spint kap!";
    this.vng = "JÁTSZOTT SZABAD SPINEK";
    this.byv = "SZABAD SPIN NYEREMÉNY";
    this.oeo = "GRATULÁLUNK!";
    this.umx = "Gratulálunk, Ön";
    this.enz = "";
    this.mnn = "szabad spinje van még!"
}
oyv.prototype = new tqy;

function mnv() {
    this.hio = "LINII";
    this.bsd = "LINIE";
    this.cqc = "MIZĂ / LINIE";
    this.yug = "MODURI";
    this.bqa = "MOD";
    this.tuh = "BONUSSPIN RĂMAŞI";
    this.cmn = "TOTAL BONUSSPIN";
    this.bop = "BONUSSPIN JUCAŢI";
    this.vyc = "BONUSSPIN RĂMAŞI";
    this.gde = "FELICITĂRI CÂŞTIGAT!";
    this.vkf = "CÂŞTIG BONUS";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SIMBOLURI";
    this.keu = "SIMBOL";
    this.okw = "Aţi câştigat BONUSSPIN suplimentari!";
    this.aer = "Câştigurile sunt evaluate numai de la stânga la dreapta!";
    this.nuc = "CÂŞTIG BONUS START:";
    this.nbh = "BONUSSPIN";
    this.yxu = "BONUSSPIN sunt jucate cu aceeaşi miză şi număr de linii ca jocul iniţial.";
    this.zdl = "Câştiguri linie: Numai câştigul linie maxim pe linie jucată contează. Câştiguri linie sunt un multiplu al mizei liniei. Câştigurile linie ale diferitelor linii sunt adunate.";
    this.prs = "Câştiguri Scatter: Câştigurile Scatter sunt un multiplu al mizei totale. Câştigurile din simbolurile Scatter sunt adăugate la câştigurile linie.";
    this.wxc = "AJUTOR BONUS";
    this.gtv = "AJUTOR SIMBOL";
    this.tfw = "AJUTOR LINII DE CÂŞTIG";
    this.jeb = "AJUTOR CĂI DE CÂŞTIG";
    this.uqe = "Aţi câştigat 15 BONUSSPIN suplimentari!";
    this.ymt = "Bonusul este terminat când au fost jucaţi toţi BONUSSPIN. BONUSSPIN suplimentari pot fi câştigaţi la bonus.";
    this.irc = "RISC";
    this.mkg = "ŞANSA ROŞU/NEGRU";
    this.man = "SIMBOLUL ŞANSĂ";
    this.omx = "15 BONUSSPIN sunt câştigaţi prin 3, 4 sau 5 simboluri STEA pe fiecare poziţie! Toţi BONUSSPIN câştiguri x 3.";
    this.ric = "Mai mult noroc data viitoare!";
    this.vgv = "Jocul începe imediat!";
    this.xjb = "Rugăm mizele dv.!";
    this.iar = "Nu alte mize!";
    this.lbw = "Mult noroc!";
    this.wdm = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.vnu = "Pariuri acceptate!";
    this.wzv = "Pariuri neacceptate!";
    this.tvz = "Joc în derulare, vă rugăm așteptați!";
    this.vvm = "CÂŞTIGURI PÂNĂ LA";
    this.ciw = "ISTORIC CÂŞTIG";
    this.hwg = "BONUS FINAL";
    this.isc = "Bonus multiplicator";
    this.bir = "rotiri libere!";
    this.vng = "ROTIRI GRATUTE JUCATE";
    this.byv = "CÂŞTIG ROTIRI LIBERE";
    this.oeo = "FELICITĂRI!";
    this.umx = "Felicitări, ai primit";
    this.enz = "V-au rămas";
    this.mnn = "rotiri gratuite!l"
}
mnv.prototype = new tiy;

function orh() {
    this.hio = "LINHAS";
    this.bsd = "LINHA";
    this.cqc = "APOSTA / LINHA";
    this.yug = "FORMAS";
    this.bqa = "FORMA";
    this.tuh = "BONUSSPINS RESTANTES";
    this.cmn = "TOTAL DE BONUSSPINS";
    this.bop = "BONUSSPINS JOGADOS";
    this.vyc = "BONUSSPINS RESTANTES";
    this.gde = "PARABÉNS, GANHOU!";
    this.vkf = "PRÉMIO BONUS";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SÍMBOLOS";
    this.keu = "SÍMBOLO";
    this.okw = "Ganhou BONUSSPINS adicionais!";
    this.aer = "Prémios só são pagos da esquerda para a direita!";
    this.nuc = "PRÉMIO ENTRADA BONUS:";
    this.nbh = "BONUSSPINS";
    this.yxu = "Os BONUSSPINS são jogados com a mesma aposta e n° de linhas que o jogo inicial.";
    this.zdl = "Prémios de linha: Só conta o mais alto prémio de linha de cada linha jogada. Prémios de linha são um múltiplo da aposta de linha. Prémios de linha de diversas linhas são adicionados.";
    this.prs = "Prémios Scatter: Prémios Scatter são múltiplos da aposta total. Prémios de símbolos Scatter são adicionados aos prémios de linha.";
    this.wxc = "AJUDA BONUS";
    this.gtv = "AJUDA SÍMBOLO";
    this.tfw = "AJUDA DE LINHAS VENCEDORAS";
    this.jeb = "AJUDA DE FORMAS DE PRÊMIO";
    this.uqe = "Ganhou 15 BONUSSPINS adicionais!";
    this.ymt = "Jogar Bonus até não restarem mais BONUSSPINS. BONUSSPINS adicionais podem ser ganhos em Bonus.";
    this.irc = "RISCO";
    this.mkg = "VERMELHO/PRETO CHANCE DE GANHAR";
    this.man = "CHANCE DO NAIPE";
    this.omx = "15 BONUSSPINS são ganhos com 3, 4 ou 5 símbolos de estrelas em qualquer posição! Todos ganhos BONUSSPIN são multiplicados por 3.";
    this.vgv = "O jogo começa em breve!";
    this.xjb = "Suas apostas por favor!";
    this.iar = "Nenhuma aposta mais!";
    this.lbw = "Boa sorte!";
    this.wdm = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.vnu = "Apostas aceitas!";
    this.wzv = "Apostas não aceitas!";
    this.tvz = "Jogo em andamento, aguarde por favor!";
    this.vvm = "GANHOS ATÉ";
    this.ciw = "HISTÓRICO DO GANHO";
    this.hwg = "FIM BONUS";
    this.isc = "Multiplicador do bonus";
    this.ric = "Mais sorte da próxima vez!";
    this.bir = "freespins!";
    this.vng = "FREESPINS JOGADOS";
    this.byv = "GANHO DE FREESPINS";
    this.oeo = "PARABÉNS!";
    this.umx = "Parabéns, ganhas";
    this.enz = "Ainda lhe sobram";
    this.mnn = "freespins!"
}
orh.prototype = new piw;

function coi() {
    this.hio = "LIGNES";
    this.bsd = "LIGNE";
    this.cqc = "MISE / LIGNE";
    this.yug = "CHEMINS";
    this.bqa = "CHEMIN";
    this.tuh = "BONUSSPINS LAISSÉ";
    this.cmn = "TOTAL BONUSSPINS";
    this.bop = "JEUX GRATUITS JOUES";
    this.vyc = "BONUSSPINS LAISSÉ";
    this.gde = "FELICITATIONS TU AS GAGNE!";
    this.vkf = "BONUS GAIN";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SYMBOLES";
    this.keu = "SYMBOLE";
    this.okw = "Vous gagnez BONUSSPINS extra!";
    this.aer = "Victoires payer seulement de gauche à droite!";
    this.nuc = "BONUS ENTRÉE WIN:";
    this.nbh = "BONUSSPINS";
    this.yxu = "Les BONUSSPINS sont joué avec la même mise et nombre des lignes comme le jeu avant.";
    this.zdl = "Gains des lignes: Seulement le gain de ligne plus haut par ligne joué compté. Gains des lignes sont un multiple du mise de ligne. Les gains de lignes de lignes differents sont ajouté.";
    this.prs = "Gains de Scatter: Gains de Scatter sont un multiple du toute mise. Gains de symboles Scatter sont ajouter á le gain des lignes.";
    this.wxc = "BONUS D'AIDE";
    this.gtv = "SYMBOLE D'AIDE";
    this.tfw = "WINLINE AIDE";
    this.uqe = "Vous avez gagné un supplément de 15 BONUSSPINS!";
    this.ymt = "Le Bonus se Termine une fois tous les BONUSSPINS joués. Des BONUSSPINS supplémentaires peuvent être gagnés pendant la Bonus.";
    this.irc = "RISQUE";
    this.mkg = "ROUGE/NOIR SIGNIFIE GAIN";
    this.man = "GAIN DE SYMBOLES";
    this.omx = "15 BONUSSPINS sont gagnés avec 3, 4 ou 5 étoiles sur toute position! Tous les gains des BONUSSPINS sont multipliés par 3.";
    this.vgv = "Le jeu va commencer tout de suite!";
    this.xjb = "Faites vos jeux s'il vous plaît!";
    this.iar = "Rien ne va plus!";
    this.lbw = "Bonne chance!";
    this.jeb = "AIDE VOIES DE GAINS";
    this.ric = "Meilleure chance la prochaine fois!";
    this.wdm = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.vnu = "Mises acceptées!";
    this.wzv = "Mises refusées!";
    this.tvz = "Jeu en cours, merci de patienter!";
    this.vvm = "GAINS JUSQU'À";
    this.ciw = "HISTORIQUE DE GAINS";
    this.hwg = "FIN DU BONUS";
    this.isc = "Multiplicateur de bonus";
    this.bir = "Freespins!";
    this.vng = "FREESPINS JOUÉS";
    this.byv = "GAIN DE FREESPIN";
    this.oeo = "FÉLICITATIONS!";
    this.umx = "Félicitations, vous recevez";
    this.enz = "Il vous reste encore";
    this.mnn = "Freespins!"
}
coi.prototype = new dax;

function ntx() {
    this.hio = "LINIJE";
    this.bsd = "LINIJI";
    this.cqc = "ULOG / LINIJI";
    this.yug = "NAČINA";
    this.bqa = "NAČIN";
    this.tuh = "PREOSTALE BESPLATNE IGRE";
    this.cmn = "UKUPNO BESPLATNIH IGARA";
    this.bop = "ODIGRANE BESPLATNE IGRE";
    this.vyc = "PREOSTALE BESPLATNE IGRE";
    this.gde = "ČESTITAMO, DOBILI STE!";
    this.vkf = "BONUS DOBITAK";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SIMBOLI";
    this.keu = "SIMBOL";
    this.okw = "Dobili ste dodatne BESPLATNE IGRE!";
    this.aer = "Dobitci se isplaćuju samo sa lijeva na desno!";
    this.nuc = "BONUS POČETNI DOBITAK:";
    this.nbh = "BESPLATNE IGRE";
    this.yxu = "BESPLATNE IGRE se igraju sa istim ulogom i brojem linija kao početna igra.";
    this.zdl = "Linijski dobitak: Samo najveći linijski dobitak za svaku odigranu liniju se isplaćuje. Linijski dobitak je uvišestručeni linijski ulog. Linijski dobitci sa različitih linija se zbrajaju.";
    this.prs = "Scatter dobitak: Scatter dobitak je uvišestručeni ukupni ulog. Dobitci od scatter simbola se zbrajaju sa linijskim dobitcima.";
    this.wxc = "POMOĆ ZA BONUS";
    this.gtv = "POMOĆ ZA SIMBOL";
    this.tfw = "POMOĆ ZA DOBITNE LINIJE";
    this.uqe = "Dobili ste dodatnih 15 BESPLATNIH IGARA!";
    this.ymt = "Bonus se završava kada su odigrane sve BESPLATNE IGRE. Dodatne BESPLATNE IGRE se mogu dobiti tijekom Bonusa.";
    this.irc = "ULAŽETE";
    this.mkg = "POGODI BOJU ZA DOBITAK OD";
    this.man = "POGODI SIMBOL ZA DOBITAK OD";
    this.omx = "3, 4 ili 5 simbola ZVIJEZDA na bilo kojoj poziciji osvajaju 15 BESPLATNIH IGARA! Svi dobici tijekom BESPLATNIH IGARA množe se sa 3.";
    this.vgv = "Završte ulaganje!";
    this.xjb = "Molimo Vaše uloge!";
    this.iar = "Nema daljnjih uloga!";
    this.lbw = "Puno sreće!";
    this.jeb = "POMOĆ ZA POBJEDU";
    this.ric = "Više sreće sljedeći put!";
    this.wdm = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.vnu = "Ulozi su prihvaćeni!";
    this.wzv = "Ulozi nisu prihvaćeni!";
    this.tvz = "Igra je u tijeku, sačekajte!";
    this.vvm = "OSVOJI DO";
    this.ciw = "POVIJEST DOBITAKA";
    this.hwg = "KRAJ BESPLATNE IGRE";
    this.isc = "Bonus multiplikator";
    this.bir = "slobodnih igara!";
    this.vng = "ODIGRANIH SLOBODNIH IGARA";
    this.byv = "DOBITAK U SLOBODNOJ IGRI";
    this.oeo = "ČESTITAMO!";
    this.umx = "Čestitamo, osvojili ste";
    this.enz = "Preostalo ti je još";
    this.mnn = "slobodnih igara!"
}
ntx.prototype = new tiu;

function upm() {
    this.hio = "LINEE";
    this.bsd = "LINEA";
    this.cqc = "PUNTATA / LINEA";
    this.yug = "VIE";
    this.bqa = "VIA";
    this.tuh = "BONUSSPIN RIMASTI";
    this.cmn = "TOTALE BONUSSPIN";
    this.bop = "BONUSSPIN GIOCATI";
    this.vyc = "BONUSSPIN RIMASTI";
    this.gde = "CONGRATULAZIONI, HAI VINTO!";
    this.vkf = "VINCITA BONUS";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SIMBOLI";
    this.keu = "SIMBOLO";
    this.okw = "Hai vinto altri BONUSSPIN!";
    this.aer = "Le vincite sono valutate dalla sinistra alla destra soltanto!";
    this.nuc = "VINCITA START BONUS:";
    this.nbh = "BONUSSPIN";
    this.yxu = "Le giocate BONUS si giocano con la stessa puntata e con lo stesso numero di linee della partita iniziale.";
    this.zdl = "Vincite di linea: Soltanto la vincita di linea più alta di ogni linea conta. Le vincite di linea sono la moltiplicazione della puntata per la linea. Le vincite di linea delle diverse linee vengono sommate.";
    this.prs = "Vincite Scatter: Le vincite Scatter sono la moltiplicazione dell'intera puntata del gioco. Le vincite dai simboli Scatter vengono sommate alle vincite di linea.";
    this.wxc = "AIUTO BONUS";
    this.gtv = "AIUTO SYMBOLO";
    this.tfw = "AIUTO WINLINE";
    this.uqe = "Hai vinto altri 15 BONUSSPIN!";
    this.ymt = "Il bonus termina quando tutti i BONUSSPIN sono stati giocati. Si possono vincere altri BONUSSPIN nella giocata Bonus.";
    this.irc = "IMPORTO GAMBLE";
    this.mkg = "ROSSO/NERO GAMBLE PER VINCERE";
    this.man = "CHANCE SUIT GAMBLE";
    this.omx = "15 BONUSSPIN si vincono con 3, 4 o 5 simboli STELLA su ogni posizione! Tutte le vincite BONUSSPIN si moltiplicano x 3.";
    this.vgv = "Completare le puntate prego!";
    this.xjb = "Prego puntare!";
    this.iar = "Fine puntate!";
    this.lbw = "Buona Fortuna!";
    this.jeb = "AIUTO MODI DI VINCERE";
    this.ric = "La prossima volta sarai più fortunato!";
    this.wdm = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.vnu = "Puntate accettate!";
    this.wzv = "Puntate non accettate!";
    this.tvz = "Partita in corso, prego attendere!";
    this.vvm = "VINCITE FINO A";
    this.ciw = "CRONACA DELLE VINCITE";
    this.hwg = "FINE BONUS";
    this.isc = "Moltiplicatore bonus";
    this.bir = "Freespins!";
    this.vng = "FREESPIN GIOCATI";
    this.byv = "VINCITA FREESPIN";
    this.oeo = "CONGRATULAZIONI!";
    this.umx = "Congratulazioni, ricevi";
    this.enz = "Sono rimasti";
    this.mnn = "freespin!"
}
upm.prototype = new zov;

function yav() {
    this.hio = "LINJER";
    this.bsd = "LINJE";
    this.cqc = "INSATS / LINJE";
    this.yug = "SÄTT";
    this.bqa = "SÄTT";
    this.tuh = "ÅTERSTÅENDE BONUSSPINS";
    this.cmn = "BONUSSPINS TOTALT";
    this.bop = "SPELADE BONUSSPINS";
    this.vyc = "ÅTERSTÅENDE BONUSSPINS";
    this.gde = "GRATTIS, DU HAR VUNNIT!";
    this.vkf = "BONUSVINST";
    this.oju = "SCATTER";
    this.nxb = "SCATTERED:";
    this.gpl = "SYMBOLER";
    this.keu = "SYMBOL";
    this.okw = "Du har vunnit extra BONUSSPINS!";
    this.aer = "Vinster betalas endast ut från vänster till höger!";
    this.nuc = "BONUSSTARTSVINST:";
    this.nbh = "BONUSSPINS";
    this.yxu = "BONUSSPINS spelas med samma insats och samma antal linjer som det spel som aktiverade bonusomgången.";
    this.zdl = "Linjevinster: Endast den högsta linjevinster per spelad linje räknas. Linjevinster är en mångdubbling av linjeinsatsen. Linjevinsterna från olika linjer adderas.";
    this.prs = "Scattervinster: Scattervinster är en mångdubbling av den totala insatsen. Vinster från scattersymboler adderas till linjevinsterna.";
    this.wxc = "HJÄLP OM BONUS";
    this.gtv = "HJÄLP OM SYMBOLER";
    this.tfw = "HJÄLP OM VINSTRADER";
    this.jeb = "VINSTSÄTTSHJÄLP";
    this.uqe = "Du har vunnit ytterligare 15 BONUSSPINS!";
    this.ymt = "Spela ut bonusomgången tills inga BONUSSPINS återstår. Nya BONUSSPINS kan vinnas under bonusomgången.";
    this.irc = "SPELSUMMA";
    this.mkg = "SPEL OM RÖTT/SVART";
    this.man = "SPEL OM FÄRG";
    this.omx = "15 BONUSSPINS betalas ut för 3, 4 eller 5 SCATTER-symboler på varje position! Alla vinster från BONUSSPIN multipliceras med 3.";
    this.vgv = "Spelet har börjat!";
    this.xjb = "Placera dina insatser, tack!";
    this.iar = "Inga fler insatser!";
    this.lbw = "Lycka till!";
    this.ric = "Bättre lycka nästa gång!";
    this.wdm = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.vnu = "Insatserna accepterade!";
    this.wzv = "Insatserna ej accepterade!";
    this.tvz = "Spelet pågår, var vänlig vänta!";
    this.vvm = "VINN UPP TILL";
    this.ciw = "VINSTHISTORIK";
    this.hwg = "BONUSEN SLUT";
    this.isc = "Bonusmultiplikator";
    this.bir = "gratisspinn!";
    this.vng = "GRATISSPINN SPELADE";
    this.byv = "GRATISSPINNSVINST";
    this.oeo = "GRATTIS!";
    this.umx = "Grattis, du har fått";
    this.enz = "Du har";
    this.mnn = "gratisspinn kvar!"
}
yav.prototype = new jaw;

function gmp() {
    this.sle = "Wins pay from left to right. Star symbols pay in any position."
}
gmp.prototype = new xbe;

function lhe() {
    this.sle = "Выигрышем считаются все, рядом стоящие символы, на выигрышной линии. Засчитывается самый высокий выигрыш."
}
lhe.prototype = new kur;

function icw() {
    this.sle = "Los premios se evaluan de izquierda a derecha. Los simbolos estrella ganan en todas las posiciones."
}
icw.prototype = new ann;

function zwl() {
    this.sle = "Gewinne werden von links nach rechts gewertet. Sternsymbole gewinnen auf jeder Position."
}
zwl.prototype = new hqf;

function hap() {
    this.sle = "Kazançlar soldan sağa doğru değerlendirilir! Yıldız sembolleri her pozisyonda kazanır."
}
hap.prototype = new brb;

function iya() {
    this.sle = "Výhry se zapocítávají zleva doprava. Symbol hvezdy vyhrává na každé pozici."
}
iya.prototype = new oho;

function emy() {
    this.sle = "Võite arvestatakse vasakult paremale. Star sümbol toob võidu igas positsioonis."
}
emy.prototype = new hsw;

function plj() {
    this.sle = "Τα κέρδη μετράνε από αριστερά προς δεξιά. Το αστέρι κερδίζει σε οποιαδήποτε θέση."
}
plj.prototype = new etj;

function wee() {
    this.sle = "Печалбите се изплащат от ляво на дясно. Символът Звезда се изплаща на всяка позиция."
}
wee.prototype = new agi;

function peh() {
    this.sle = "მოგების ანაზღაურება ხდება მარცხნიდან მარჯვნივ. ვარსკვლავის სიმბოლოები იგებს ნებისმიერ პოზიციაზე."
}
peh.prototype = new fvb;

function mgf() {
    this.sle = "A nyeremények balról jobbra fizetnek. A Csillag szimbólum minden helyen nyerő."
}
mgf.prototype = new oyv;

function xuq() {
    this.sle = "Câştigurile numărate de la stânga la dreapta. Simbolul STAR câştigă in orice pozitie."
}
xuq.prototype = new mnv;

function tvt() {
    this.sle = "Os Prêmios ganham da esquerda à direita. O símbolo de estrela ganha em qualquer posição."
}
tvt.prototype = new orh;

function yef() {
    this.sle = "Les gains sont pris en compte de gauche à droite. Les symboles étoiles gagnent dans toute position."
}
yef.prototype = new coi;

function mwi() {
    this.sle = "Dobitci se zbrajaju sa lijeva na desno. Simbol ZVIJEZDA dobiva na bilo kojoj poziciji."
}
mwi.prototype = new ntx;

function zvl() {
    this.sle = "Le combinazioni vincenti sono valide da sinistra a destra. I simboli Stella vincono su ogni posizione."
}
zvl.prototype = new upm;

function kio() {
    this.sle = "Vinsterna betalas ut från vänster till höger. Stjärnsymbolen ger vinst i vilken position som helst."
}
kio.prototype = new yav;

function doi() {
    this.xra = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.yqr = {
        backgroundColor: "rgb(0,0,0)",
        jzv: "rgba(0,0,0,0.3)"
    };
    this.aaa = {
        font: "arial",
        zqm: "bold",
        backgroundColor: "black",
        yln: "rgb(0,100,10)",
        svz: "rgb(80,255,100)",
        hvf: "rgb(120,120,120)",
        szp: "red",
        ouq: "white",
        blb: null
    };
    this.svw = {
        font: "arial",
        zqm: "bold",
        backgroundColor: "rgb(0,0,0)",
        fss: null,
        xmb: "rgb(255,255,255)",
        vna: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.lsy = {
        font: "arial",
        zqm: "bold",
        backgroundColor: "black",
        owr: "rgb(50,50,50)",
        hay: "rgb(255,255,255)",
        xmb: "white",
        igc: 0.8,
        gjm: {
            bsl: {
                font: "sanf-serif",
                zqm: "",
                textAlign: "center",
                wtv: "round",
                backgroundColor: "black",
                xmb: "white",
                borderColor: null,
                vna: null,
                krn: 1
            }
        }
    };
    this.vfc = {
        font: "arial",
        zqm: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        uix: "rgba(255,255,255,0.2)",
        xmb: "rgb(255,255,255)",
        ekn: "rgba(0,0,0,0.3)",
        display: {
            jha: "arial",
            yrd: "arial",
            zqm: "bold",
            xmb: "rgb(255,255,255)",
            xww: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        bsl: {
            font: "arial",
            zqm: "bold",
            xmb: "rgb(0,0,0)",
            dik: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            fss: "rgba(255,255,255,1)",
            kxi: "rgba(255,255,255,0.8)",
            ukb: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            wtv: "rect",
            iuj: -1
        }
    };
    this.mik = {
        font: "arial",
        zqm: "bold",
        yrk: "rgb(0,0,200)",
        pox: "rgb(255,255,255)",
        kiy: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        pnr: "rgb(180,220,255)",
        lyp: "rgb(10,20,25)",
        eca: "rgb(130,220,255)",
        asb: "rgb(130,190,255)",
        xmb: "rgb(255,255,255)",
        geg: "rgb(130,190,255)",
        mgr: "rgb(100,160,255)",
        lyq: "rgb(255,255,255)",
        bsl: {
            wtv: "rect",
            font: "arial",
            zqm: "bold",
            xmb: "rgb(255,255,255)",
            yjk: null,
            backgroundColor: "rgb(90,160,255)",
            xgc: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            vna: "rgb(40,80,140)"
        },
        zjy: {
            wtv: "round",
            font: "arial",
            zqm: "bold",
            xmb: "rgb(255,255,255)",
            yjk: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            xgc: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            vna: "rgb(40,80,140)"
        }
    };
    this.ccq = {};
    this.bee = {
        efl: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.dge = {
        type: "left",
        font: "arial",
        zqm: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        fss: null,
        borderColor: "rgb(0,0,0)",
        vna: "rgb(180,180,180)",
        pnr: "rgba(0,0,0,0.6)",
        fzy: null,
        xww: "rgb(255,200,0)",
        xmb: "white",
        pxb: {
            font: "arial",
            zqm: "bold",
            backgroundColor: "rgb(100,100,100)",
            fss: "rgb(100,100,100)",
            kxi: null,
            ukb: null,
            borderColor: "rgb(100,100,100)",
            xmb: "rgb(255,255,255)",
            dik: "rgb(255,200,0)",
            wtv: "triangle",
            iuj: 1
        },
        hmv: {
            font: "arial",
            zqm: "bold",
            backgroundColor: "rgb(100,100,100)",
            fss: "rgb(100,100,100)",
            kxi: null,
            ukb: null,
            borderColor: "rgb(100,100,100)",
            xmb: "rgb(255,255,255)",
            dik: "rgb(255,200,0)",
            wtv: "triangle",
            iuj: 0
        },
        fgy: {
            font: "arial",
            zqm: "bold",
            backgroundColor: "rgb(100,100,100)",
            fss: "rgb(15,15,15)",
            kxi: "rgb(100,100,100)",
            ukb: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            xmb: "rgb(255,255,255)",
            dik: "rgb(255,200,0)",
            wtv: "rect",
            iuj: -1
        },
        display: {
            yrd: "sans-serif",
            jha: "sans-serif",
            zqm: "bold",
            xww: null,
            xmb: "yellow",
            borderColor: "rgb(100,100,100)",
            vna: null,
            backgroundColor: "black"
        },
        pae: {
            font: "arial",
            zqm: "bold",
            backgroundColor: null,
            fss: null,
            xmb: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.cix = {
        font: "arial",
        zqm: "bold",
        backgroundColor: "rgb(180,180,180)",
        fss: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        vna: "rgb(30,30,30)",
        xmb: "white",
        iug: {
            font: "arial",
            zqm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            fss: null,
            kxi: "rgba(100,100,100,0.5)",
            ukb: null,
            borderColor: null,
            xmb: "white",
            wtv: "rect",
            iuj: -1
        },
        pxb: {
            font: "arial",
            zqm: "bold",
            backgroundColor: "rgb(255,255,255)",
            fss: "rgb(255,255,255)",
            kxi: null,
            ukb: null,
            borderColor: "rgb(255,255,255)",
            xmb: "rgb(0,0,0)",
            dik: "rgb(0,0,0)",
            wtv: "triangle",
            iuj: 1
        },
        hmv: {
            font: "arial",
            zqm: "bold",
            backgroundColor: "rgb(255,255,255)",
            fss: "rgb(255,255,255)",
            kxi: null,
            ukb: null,
            borderColor: "rgb(255,255,255)",
            xmb: "rgb(0,0,0)",
            dik: "rgb(0,0,0)",
            wtv: "triangle",
            iuj: 0
        },
        ues: {
            wtv: "rect",
            font: "arial",
            zqm: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            xmb: "white",
            krn: 1,
            borderColor: "rgb(255,255,255)",
            vna: "rgb(220,220,220)"
        },
        display: {
            yrd: "sans-serif",
            jha: "sans-serif",
            zqm: "bold",
            xww: null,
            xmb: "white",
            borderColor: "white",
            vna: null,
            backgroundColor: "rgb(0,0,0)"
        },
        pae: {
            font: "arial",
            zqm: "bold",
            backgroundColor: null,
            fss: null,
            xmb: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.wdl = {
        xkv: [{
            yrd: "sans-serif",
            iup: "sans-serif",
            zqm: "bold",
            xww: "rgb(236,225,207)",
            shn: "rgb(214,170,102)",
            yjk: "rgb(245,220,148)",
            nih: "rgb(190,137,40)",
            ozy: "rgba(150,120,30,0.3)",
            borderColor: "rgb(150,110,30)",
            vna: "rgb(200,170,50)",
            backgroundColor: "rgb(100,70,30)",
            fss: "rgb(0,0,0)",
            jca: "rgb(0,0,0)"
        }, {
            yrd: "sans-serif",
            iup: "sans-serif",
            zqm: "bold",
            xww: "rgb(230,230,230)",
            shn: "rgb(190,190,190)",
            yjk: "rgb(240,240,240)",
            nih: "rgb(160,160,160)",
            ozy: "rgba(120,120,120,0.3)",
            borderColor: "rgb(120,120,120)",
            vna: "rgb(170,170,170)",
            backgroundColor: "rgb(100,100,100)",
            fss: "rgb(0,0,0)",
            jca: "rgb(0,0,0)"
        }],
        hit: {
            yrd: "sans-serif",
            iup: "sans-serif",
            zqm: "bold",
            xww: "rgb(236,225,207)",
            shn: "rgb(214,170,102)",
            yjk: "rgb(245,220,148)",
            nih: "rgb(190,137,40)",
            ozy: null,
            borderColor: null,
            vna: null,
            backgroundColor: null,
            fss: null,
            jca: null
        },
        wht: {}
    };
    this.cru = {
        bot: "rgb(240,240,240)",
        bxz: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        ekn: "rgba(0,80,150,0.6)",
        display: {
            jha: "arial",
            yrd: "arial",
            zqm: "bold",
            xmb: "rgb(0,80,151)",
            xww: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function zjj() {
    this.yqr.kxc = false;
    this.yqr.zsq = false;
    this.mmj = {
        display: {
            jha: "sans-serif",
            yrd: "sans-serif",
            zqm: "bold",
            backgroundColor: "black",
            xmb: "rgb(255,255,50)",
            xww: "rgb(255,255,50)",
            borderColor: "rgb(230,230,230)",
            vna: "rgb(160,160,160)"
        },
        yzm: {
            jha: "sans-serif",
            yrd: "sans-serif",
            zqm: "bold",
            backgroundColor: "rgba(0,0,0,0.8)",
            xmb: "rgb(255,255,50)",
            xww: "rgb(255,255,50)",
            borderColor: null,
            vna: null
        },
        hff: {
            jha: "arial",
            yrd: "arial",
            zqm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            xmb: "white",
            xww: "white",
            borderColor: null,
            vna: null
        },
        qcz: {
            font: "arial",
            zqm: "bold",
            backgroundColor: "rgb(230,230,230)",
            fss: null,
            kxi: null,
            ukb: null,
            borderColor: "rgb(230,230,230)",
            xmb: "rgb(0,0,0)",
            dik: "rgb(0,0,0)",
            wtv: "rrect",
            iuj: 3
        },
        jaf: {
            font: "sans-serif",
            zqm: "bold",
            xmb: "rgb(255,255,50)",
            backgroundColor: "black",
            borderColor: null,
            vna: null
        },
        gjm: {
            backgroundColor: null,
            fss: null,
            pnr: "rgb(0,0,0)",
            lyp: "rgb(0,0,0)",
            npf: null,
            nlx: 0.5,
            bsl: {
                wtv: "rect",
                font: "verdana",
                zqm: "bold",
                backgroundColor: "rgb(0,0,0)",
                xgc: "rgb(150,150,150)",
                xmb: "rgb(255,255,255)",
                yjk: "rgb(255,255,0)",
                borderColor: "rgb(150,150,150)",
                vna: "rgb(0,0,0)"
            },
            ebl: {
                wtv: "round",
                font: "verdana",
                zqm: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                xgc: "rgba(150,150,150,0.5)",
                xmb: "rgb(255,255,255)",
                yjk: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                vna: "rgb(100,100,100)"
            },
            ozm: {
                wtv: "round",
                font: "verdana",
                zqm: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                xgc: "rgba(150,150,150,0.5)",
                xmb: "rgb(255,255,255)",
                yjk: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                vna: "rgb(100,100,100)"
            },
            skf: {
                wtv: "rect",
                font: "verdana",
                zqm: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                xgc: "rgba(150,150,150,0.5)",
                xmb: "rgba(255,255,255,0.8)",
                yjk: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                vna: "rgb(100,100,100)"
            },
            yit: {
                wtv: "rect",
                font: "verdana",
                zqm: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                xgc: "rgba(150,150,150,0.5)",
                xmb: "rgba(255,255,255,0.8)",
                yjk: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                vna: "rgb(100,100,100)"
            },
            zjk: {
                font: "verdana",
                zqm: "bold",
                backgroundColor: "rgb(75, 5, 5)",
                borderColor: null,
                xmb: "rgb(255, 255, 50)"
            },
            win: {
                font: "helvetica",
                zqm: "bold",
                backgroundColor: null,
                borderColor: null,
                xmb: "rgb(240, 231, 203)"
            }
        }
    };
    this.zli = {
        backgroundColor: null,
        pnr: "rgb(0,0,0)",
        lyp: "rgb(0,0,0)",
        display: {
            jha: "sans-serif",
            yrd: "sans-serif",
            zqm: "bold",
            backgroundColor: "black",
            xmb: "yellow",
            xww: "yellow",
            borderColor: "rgb(230,230,230)",
            vna: "rgb(160,160,160)"
        },
        hff: {
            jha: "arial",
            yrd: "arial",
            zqm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            xmb: "white",
            xww: "white",
            borderColor: null,
            vna: null
        },
        vyo: {
            jha: "verdana",
            yrd: "verdana",
            zqm: "bold",
            xww: "white",
            xmb: "yellow"
        },
        bsl: {
            wtv: "rect",
            font: "verdana",
            zqm: "bold",
            backgroundColor: "rgb(0,0,0)",
            xgc: "rgb(150,150,150)",
            xmb: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            vna: "rgb(0,0,0)"
        },
        ebl: {
            wtv: "round",
            font: "verdana",
            zqm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            xgc: "rgba(150,150,150,0.5)",
            xmb: "rgb(255,255,255)",
            yjk: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            vna: "rgb(100,100,100)"
        },
        ozm: {
            wtv: "round",
            font: "verdana",
            zqm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            xgc: "rgba(150,150,150,0.5)",
            xmb: "rgb(255,255,255)",
            yjk: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            vna: "rgb(100,100,100)"
        },
        zjk: {
            font: "verdana",
            zqm: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            xmb: "rgb(255, 255, 0)"
        }
    };
    this.cth = {
        backgroundColor: null,
        pnr: "rgb(0,0,0)",
        lyp: "rgb(0,0,0)",
        bsl: {
            wtv: "rect",
            font: "verdana",
            zqm: "bold",
            backgroundColor: "rgb(0,0,0)",
            xgc: "rgb(150,150,150)",
            xmb: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            vna: "rgb(0,0,0)"
        },
        ebl: {
            wtv: "round",
            font: "verdana",
            zqm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            xgc: "rgba(150,150,150,0.5)",
            xmb: "rgb(255,255,255)",
            yjk: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            vna: "rgb(100,100,100)"
        },
        ozm: {
            wtv: "round",
            font: "verdana",
            zqm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            xgc: "rgba(150,150,150,0.5)",
            xmb: "rgb(255,255,255)",
            yjk: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            vna: "rgb(100,100,100)"
        }
    };
    this.tsa = {
        igc: 0,
        npf: "rgba(0,0,0,0)",
        utj: "rgba(0,0,0,0.5)"
    };
    this.mrw = {
        uja: "rgb(255,0,0)",
        hay: "rgb(255,255,0)",
        anq: "white",
        yxb: null,
        wsa: 0,
        pat: 0.05,
        ruo: [{
            qes: "rgb(180,180,30)",
            tic: "rgb(255,220,0)",
            pfj: "rgb(180,180,30)",
            upt: "rgb(255,255,0)"
        }, {
            qes: "rgb(210,110,0)",
            tic: "rgb(255,168,0)",
            pfj: "rgb(210,110,0)",
            upt: "rgb(255,210,50)"
        }, {
            qes: "rgb(0,50,180)",
            tic: "rgb(0,68,220)",
            pfj: "rgb(0,50,180)",
            upt: "rgb(0,100,255)"
        }, {
            qes: "rgb(0,160,64)",
            tic: "rgb(0,200,80)",
            pfj: "rgb(0,160,64)",
            upt: "rgb(0,255,70)"
        }, {
            qes: "rgb(140,30,140)",
            tic: "rgb(200,0,200)",
            pfj: "rgb(140,30,140)",
            upt: "rgb(255,30,255)"
        }, {
            qes: "rgb(180,180,30)",
            tic: "rgb(255,220,0)",
            pfj: "rgb(180,180,30)",
            upt: "rgb(255,255,0)"
        }, {
            qes: "rgba(200,200,50,0.7)",
            tic: "rgba(255,255,150,0.7)",
            pfj: "rgba(200,200,50,0.7)",
            upt: "rgba(255,255,150,0.7)"
        }]
    };
    this.oiv = {
        font: "sans-serif",
        zqm: "bold",
        dme: "red",
        mxv: "orange",
        owr: "white"
    };
    this.hra = {
        font: "sans-serif",
        zqm: "bold",
        dme: "red",
        mxv: "orange",
        owr: "white"
    };
    this.jkc = {
        font: "sans-serif",
        zqm: "bold",
        xmb: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        guy: "rgb(0,0,0)",
        inv: "rgb(255,0,0)",
        fyq: "rgb(255,255,0)",
        vlj: "rgb(80,80,80)",
        ybp: "rgb(15,15,15)",
        ndy: "rgb(0,0,0)",
        lau: "rgb(180,180,180)",
        dmc: "rgb(0,0,0)",
        uhy: 0.7
    }
}
zjj.prototype = new doi;

function aua() {
    this.yqr.zsq = true;
    this.mmj.jaf.backgroundColor = "rgb(50, 0, 0)";
    this.mmj.jaf.borderColor = "rgb(40,0,0)";
    this.mmj.gjm.zjk.backgroundColor = "rgb(50, 0, 0)";
    this.mmj.gjm.zjk.borderColor = "rgb(40,0,0)";
    this.mmj.gjm.bsl.backgroundColor = "rgb(140,0,17)";
    this.mmj.gjm.bsl.xgc = "rgb(200,0,20)";
    this.mmj.gjm.bsl.borderColor = "rgb(160,0,30)";
    this.mmj.gjm.bsl.vna = "rgb(50,0,0)";
    this.mmj.gjm.skf.backgroundColor = "rgba(0,0,0,0.5)";
    this.mmj.gjm.skf.xgc = "rgba(255,20,30,0.8)";
    this.mmj.gjm.skf.borderColor = "rgb(255,20,30)";
    this.mmj.gjm.skf.vna = "rgb(80,5,10)";
    this.mmj.gjm.yit.backgroundColor = "rgba(0,0,0,0.5)";
    this.mmj.gjm.yit.xgc = "rgba(255,20,30,0.8)";
    this.mmj.gjm.yit.borderColor = "rgb(255,20,30)";
    this.mmj.gjm.yit.vna = "rgb(80,5,10)";
    this.mmj.gjm.ebl.backgroundColor = "rgba(0,0,0,0.5)";
    this.mmj.gjm.ebl.xgc = "rgba(255,20,30,0.8)";
    this.mmj.gjm.ebl.borderColor = "rgb(255,20,30)";
    this.mmj.gjm.ebl.vna = "rgb(80,5,10)";
    this.mmj.gjm.ozm.backgroundColor = "rgba(0,0,0,0.5)";
    this.mmj.gjm.ozm.xgc = "rgba(255,20,30,0.8)";
    this.mmj.gjm.ozm.borderColor = "rgb(255,20,30)";
    this.mmj.gjm.ozm.vna = "rgb(80,5,10)";
    this.zli.zjk.borderColor = "rgb(65,0,0)";
    this.zli.bsl.backgroundColor = "rgb(140,0,17)";
    this.zli.bsl.borderColor = "rgb(160,0,30)";
    this.zli.bsl.vna = "rgb(50,0,0)";
    this.zli.ebl.backgroundColor = "rgba(0,0,0,0.5)";
    this.zli.ebl.borderColor = "rgb(255,20,30)";
    this.zli.ebl.vna = "rgb(80,5,10)";
    this.zli.ozm.backgroundColor = "rgba(0,0,0,0.5)";
    this.zli.ozm.borderColor = "rgb(255,20,90)";
    this.zli.ozm.vna = "rgb(80,5,10)";
    this.cth.bsl.backgroundColor = "rgb(140,0,17)";
    this.cth.bsl.borderColor = "rgb(160,0,30)";
    this.cth.bsl.vna = "rgb(50,0,0)";
    this.cth.ebl.backgroundColor = "rgba(0,0,0,0.5)";
    this.cth.ebl.borderColor = "rgb(255,20,30)";
    this.cth.ebl.vna = "rgb(80,5,10)";
    this.cth.ozm.backgroundColor = "rgba(0,0,0,0.5)";
    this.cth.ozm.borderColor = "rgb(255,20,30)";
    this.cth.ozm.vna = "rgb(80,5,10)";
    this.cth.lxe = {
        font: "sans-serif",
        yrd: "verdana",
        xww: "white",
        zqm: "bold",
        xmb: "yellow"
    };
    this.cth.fqj = {
        font: "sans-serif",
        zqm: "bold",
        xmb: "yellow",
        pub: "sans-serif",
        vbm: "verdana",
        nqh: "bold",
        txq: "white"
    };
    this.lsy.gjm.bsl.backgroundColor = "rgb(140,0,17)";
    this.cix.backgroundColor = "rgb(200,0,10)";
    this.cix.fss = "rgb(60,5,5)"
}
aua.prototype = new zjj;

function wdx() {
    this.type = "800_600";
    this.sdr = true;
    this.adp = false;
    this.jzd = false;
    this.ysc = true;
    this.vmb = false;
    this.xes = false;
    this.jps = false;
    this.csj = false
}

function rtp() {
    this.sdr = false;
    this.canvas = {
        cuz: new bku(0, 0, 800, 620)
    };
    this.bkx = {
        cuz: new bku(),
        edr: 0
    };
    this.yqr = {
        cuz: new bku(0, 20, 800, 600),
        dbr: 0
    };
    this.xot = {
        rnw: new bku(0, 40, 440, 36),
        ogh: new bku(5, 2, 140, 30),
        nng: new bku(150, 2, 140, 30),
        erc: new bku(295, 2, 140, 30),
        awl: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.aaa = {
        yqr: {
            cuz: new bku(0, 0, 500, 360),
            smg: new bku(0, 0, 500, 360),
            dsy: new bku(5, 325, 490, 30),
            ndg: new bku(5, 329, 490, 14),
            lru: new bku(50, 345, 400, 6),
            zwn: new bku(5, 285, 490, 70),
            fontSize: 14,
            rjo: 18,
            aro: 5,
            cic: 12,
            kth: 5,
            ied: 2,
            khk: 0,
            mrw: {
                cuz: new bku(),
                x: 0,
                wvc: 0,
                wwo: 0
            },
            jus: {
                smg: new bku(),
                ndg: new bku(),
                zeq: new bku()
            }
        },
        wtd: {
            cuz: new bku(0, 0, 800, 600),
            smg: new bku(140, 105, 520, 390),
            dsy: new bku(),
            ndg: new bku(140, 295, 520, 21),
            lru: new bku(192, 320, 416, 3),
            zwn: new bku(140, 275, 520, 95),
            fontSize: 18,
            rjo: 24,
            aro: 0,
            cic: 12,
            kth: 7,
            ied: 3,
            khk: 9,
            mrw: {
                cuz: new bku(400, 459, 0, 3),
                x: 33,
                wvc: 15,
                wwo: 20
            },
            jus: {
                smg: new bku(50, 0, 700, 450),
                ndg: new bku(100, 460, 600, 60),
                zeq: new bku(200, 540, 400, 40)
            }
        },
        kaa: {
            cuz: new bku(0, 0, 800, 600),
            smg: new bku(0, 0, 800, 600),
            dsy: new bku(),
            ndg: new bku(50, 420, 700, 21),
            lru: new bku(),
            zwn: new bku(50, 410, 700, 80),
            fontSize: 18,
            rjo: 24,
            aro: 0,
            cic: 12,
            kth: 7,
            ied: 0,
            khk: 0,
            mrw: {
                cuz: new bku(260, 119, 280, 280),
                x: 0,
                wvc: 0,
                wwo: 0
            },
            jus: {
                smg: new bku(50, 0, 700, 450),
                ndg: new bku(100, 460, 600, 60),
                zeq: new bku(200, 540, 400, 40)
            }
        }
    };
    this.svw = {
        cuz: new bku(0, 0, 800, 20),
        fontSize: 12,
        itw: 19,
        hvt: 15,
        stc: 120,
        cic: 2,
        kth: 2,
        jmx: 2,
        kvy: 40
    };
    this.lsy = {
        cuz: new bku(0, 20, 800, 70),
        fontSize: 10,
        ian: 10,
        gpx: 20,
        lsj: 40,
        dbr: 4,
        cic: 10,
        kth: 5,
        aro: 10,
        awl: {
            fontSize: 17,
            aro: 2
        }
    };
    this.mik = {
        cuz: new bku(0, 20, 800, 600),
        rnw: new bku(),
        awl: {
            ezx: 20,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 8,
            udi: 8,
            dbr: 0
        },
        fsm: new bku(0, 20, 800, 40),
        aix: new bku(0, 100, 800, 40),
        gym: new bku(0, 140, 800, 40),
        bdu: new bku(0, 180, 800, 40),
        mtx: new bku(225, 275, 350, 100),
        kdi: new bku(200, 480, 400, 40),
        qvh: {
            cbs: new bku(340, 540, 120, 55)
        },
        mzv: {
            cbs: new bku(250, 540, 120, 55),
            mpn: new bku(430, 540, 120, 55)
        },
        mpi: 36,
        fontSize: 30,
        lds: 22,
        kth: 3,
        cic: 5,
        dbr: 2,
        wmq: 3,
        zwd: 10
    };
    this.ccq = {
        cuz: new bku(-10, 25, 310, 50),
        fsm: new bku(10, 4, 240, 24),
        ndg: new bku(10, 28, 240, 18),
        mbe: new bku(260, 10, 40, 30),
        vcn: new bku(7, 2, 26, 26),
        blp: 16,
        ezx: 12,
        uwz: 18
    };
    this.bee = {
        cuz: new bku(150, 160, 500, 280),
        blp: 26,
        fontSize: 20,
        lqa: new bku(465, 5, 30, 30),
        fsm: new bku(30, 5, 440, 30),
        kdi: new bku(20, 40, 460, 160),
        mrr: new bku(20, 230, 460, 40),
        awl: {
            fontSize: 20
        }
    };
    this.dge = {
        cuz: new bku(0, 55, 560, 430),
        dbr: 2,
        hbu: 0,
        rud: 5,
        son: 10,
        blp: 26,
        ycv: 20,
        fsm: new bku(30, 15, 500, 30),
        mfu: new bku(20, 50, 520, 60),
        nho: new bku(40, 60, 220, 40),
        kfv: new bku(328, 60, 30, 40),
        ajh: new bku(360, 60, 120, 40),
        zom: new bku(482, 60, 30, 40),
        ete: new bku(20, 120, 520, 200),
        xxe: new bku(40, 120, 480, 40),
        ewu: new bku(30, 160, 280, 40),
        mwm: new bku(328, 160, 30, 40),
        aep: new bku(360, 160, 120, 40),
        sbc: new bku(482, 160, 30, 40),
        jmy: new bku(30, 215, 280, 40),
        pai: new bku(328, 215, 30, 40),
        yuf: new bku(360, 215, 120, 40),
        uqr: new bku(482, 215, 30, 40),
        fej: new bku(30, 270, 280, 40),
        sfz: new bku(328, 270, 30, 40),
        gre: new bku(360, 270, 120, 40),
        vvz: new bku(482, 270, 30, 40),
        dsy: new bku(30, 330, 500, 30),
        duz: new bku(210, 370, 140, 50),
        aop: new bku(),
        pae: {
            ndg: new bku(40, 0, 240, 40),
            ssb: new bku(7, 12, 16, 16),
            fontSize: 20,
            avi: 0,
            dbr: 2
        },
        hmv: {
            avi: 3,
            cic: -5,
            kth: -1,
            udi: 6,
            fontSize: 20,
            dbr: 0
        },
        pxb: {
            avi: 3,
            cic: 5,
            kth: 0,
            udi: 6,
            fontSize: 20,
            dbr: 0
        },
        fgy: {
            avi: 6,
            cic: 0,
            kth: 0,
            udi: 6,
            fontSize: 26,
            dbr: 2
        },
        display: {
            blp: 16,
            ezx: 24,
            ozg: 0,
            eet: 0,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        }
    };
    this.wdl = {
        cuz: [new bku(2, 20, 130, 46), new bku(668, 20, 130, 46)],
        display: {
            ada: new bku(6, 16, 118, 22),
            blp: 14,
            twx: 20,
            ozg: -11,
            wqg: 10,
            aro: 8,
            dbr: 3,
            mlm: 0,
            ale: 4
        },
        hit: {
            cuz: new bku(50, 130, 700, 300),
            ada: new bku(),
            blp: 66,
            twx: 150,
            ozg: -90,
            wqg: 60,
            aro: 10,
            dbr: 0,
            mlm: 0,
            ale: 0
        },
        wht: {
            cuz: new bku(38, 80, 724, 369),
            cih: new bku(100, 53, 525, 50),
            ada: new bku(186, 153, 332, 94),
            agk: 340,
            lll: 30,
            tyu: {
                _0: new bku(2, 0, 90, 94),
                _1: new bku(98, 0, 90, 94),
                _2: new bku(194, 0, 90, 94),
                _3: new bku(290, 0, 90, 94),
                _4: new bku(386, 0, 90, 94),
                _5: new bku(482, 0, 90, 94),
                _6: new bku(578, 0, 90, 94),
                _7: new bku(674, 0, 90, 94),
                _8: new bku(770, 0, 90, 94),
                _9: new bku(866, 0, 90, 94),
                _cm: new bku(962, 0, 28, 94),
                _dt: new bku(999, 0, 28, 94),
                _sp: new bku(1036, 0, 28, 94)
            }
        }
    }
}
rtp.prototype = new wdx;

function qdg() {
    this.adp = true
}
qdg.prototype = new rtp;

function ajo() {
    this.vmb = true;
    this.jzd = true;
    this.sdr = false;
    this.adp = true;
    this.canvas = {
        cuz: new bku(0, 0, 800, 1165)
    };
    this.bkx = {
        cuz: new bku(),
        edr: 0
    };
    this.yqr = {
        cuz: new bku(0, 550, 800, 615),
        dbr: 10
    };
    this.xot = {
        rnw: new bku(0, 330, 440, 36),
        ogh: new bku(5, 2, 140, 30),
        nng: new bku(150, 2, 140, 30),
        erc: new bku(295, 2, 140, 30),
        awl: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.aaa = {
        yqr: {
            cuz: new bku(0, 0, 500, 360),
            smg: new bku(0, 0, 500, 360),
            dsy: new bku(5, 325, 490, 30),
            ndg: new bku(5, 329, 490, 14),
            lru: new bku(50, 345, 400, 6),
            zwn: new bku(5, 285, 490, 70),
            fontSize: 14,
            rjo: 18,
            aro: 5,
            cic: 12,
            kth: 5,
            ied: 2,
            khk: 0,
            mrw: {
                cuz: new bku(),
                x: 0,
                wvc: 0,
                wwo: 0
            },
            jus: {
                smg: new bku(),
                ndg: new bku(),
                zeq: new bku()
            }
        },
        wtd: {
            cuz: new bku(0, 0, 800, 600),
            smg: new bku(100, 75, 600, 450),
            dsy: new bku(),
            ndg: new bku(100, 295, 600, 24),
            lru: new bku(160, 325, 480, 3),
            zwn: new bku(100, 265, 600, 115),
            fontSize: 21,
            rjo: 26,
            aro: 0,
            cic: 12,
            kth: 8,
            ied: 3,
            khk: 10,
            mrw: {
                cuz: new bku(400, 484, 0, 3),
                x: 38,
                wvc: 17,
                wwo: 23
            },
            jus: {
                smg: new bku(50, 0, 700, 450),
                ndg: new bku(100, 460, 600, 60),
                zeq: new bku(200, 540, 400, 40)
            }
        },
        kaa: {
            cuz: new bku(0, 0, 800, 600),
            smg: new bku(0, 0, 800, 600),
            dsy: new bku(),
            ndg: new bku(50, 420, 700, 21),
            lru: new bku(),
            zwn: new bku(50, 410, 700, 80),
            fontSize: 18,
            rjo: 24,
            aro: 0,
            cic: 12,
            kth: 7,
            ied: 0,
            khk: 0,
            mrw: {
                cuz: new bku(260, 119, 280, 280),
                x: 0,
                wvc: 0,
                wwo: 0
            },
            jus: {
                smg: new bku(50, 0, 700, 450),
                ndg: new bku(100, 460, 600, 60),
                zeq: new bku(200, 540, 400, 40)
            }
        }
    };
    this.top = {
        cuz: new bku(0, 20, 800, 520)
    };
    this.svw = {
        cuz: new bku(0, 0, 800, 20),
        fontSize: 12,
        itw: 19,
        hvt: 15,
        stc: 120,
        cic: 2,
        kth: 2,
        jmx: 2,
        kvy: 60
    };
    this.lsy = {
        cuz: new bku(0, 20, 800, 70),
        fontSize: 10,
        ian: 10,
        gpx: 20,
        lsj: 40,
        dbr: 4,
        cic: 10,
        kth: 5,
        aro: 10,
        awl: {
            fontSize: 17,
            aro: 2
        }
    };
    this.mik = {
        cuz: new bku(0, 550, 800, 615),
        rnw: new bku(),
        awl: {
            ezx: 26,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 10,
            udi: 10,
            dbr: 2
        },
        fsm: new bku(0, 20, 800, 40),
        aix: new bku(0, 100, 800, 40),
        gym: new bku(0, 140, 800, 40),
        bdu: new bku(0, 180, 800, 40),
        mtx: new bku(225, 275, 350, 100),
        kdi: new bku(200, 480, 400, 40),
        qvh: {
            cbs: new bku(340, 540, 120, 68)
        },
        mzv: {
            cbs: new bku(250, 540, 120, 68),
            mpn: new bku(430, 540, 120, 68)
        },
        mpi: 36,
        fontSize: 30,
        lds: 22,
        kth: 3,
        cic: 5,
        dbr: 2,
        wmq: 3,
        zwd: 10,
    };
    this.ccq = {
        cuz: new bku(-10, 545, 310, 50),
        fsm: new bku(10, 4, 240, 24),
        ndg: new bku(10, 28, 240, 18),
        mbe: new bku(260, 10, 40, 30),
        vcn: new bku(7, 2, 26, 26),
        blp: 16,
        ezx: 12,
        uwz: 18
    };
    this.bee = {
        cuz: new bku(150, 690, 500, 280),
        blp: 26,
        fontSize: 20,
        lqa: new bku(465, 5, 30, 30),
        fsm: new bku(30, 5, 440, 40),
        kdi: new bku(20, 40, 460, 160),
        mrr: new bku(20, 230, 460, 40),
        awl: {
            fontSize: 20
        }
    };
    this.dge = {
        cuz: new bku(0, 585, 560, 430),
        dbr: 2,
        hbu: 0,
        rud: 5,
        son: 10,
        blp: 26,
        ycv: 20,
        fsm: new bku(30, 15, 500, 30),
        mfu: new bku(20, 50, 520, 60),
        nho: new bku(40, 60, 220, 40),
        kfv: new bku(328, 60, 30, 40),
        ajh: new bku(360, 60, 120, 40),
        zom: new bku(482, 60, 30, 40),
        ete: new bku(20, 120, 520, 200),
        xxe: new bku(40, 120, 480, 40),
        ewu: new bku(30, 160, 280, 40),
        mwm: new bku(328, 160, 30, 40),
        aep: new bku(360, 160, 120, 40),
        sbc: new bku(482, 160, 30, 40),
        jmy: new bku(30, 215, 280, 40),
        pai: new bku(328, 215, 30, 40),
        yuf: new bku(360, 215, 120, 40),
        uqr: new bku(482, 215, 30, 40),
        fej: new bku(30, 270, 280, 40),
        sfz: new bku(328, 270, 30, 40),
        gre: new bku(360, 270, 120, 40),
        vvz: new bku(482, 270, 30, 40),
        dsy: new bku(30, 330, 500, 30),
        duz: new bku(210, 370, 140, 50),
        aop: new bku(),
        pae: {
            ndg: new bku(40, 0, 240, 40),
            ssb: new bku(7, 12, 16, 16),
            fontSize: 20,
            avi: 0,
            dbr: 2
        },
        hmv: {
            avi: 3,
            cic: -5,
            kth: -1,
            udi: 6,
            fontSize: 20,
            dbr: 0
        },
        pxb: {
            avi: 3,
            cic: 5,
            kth: 0,
            udi: 6,
            fontSize: 20,
            dbr: 0
        },
        fgy: {
            avi: 6,
            cic: 0,
            kth: 0,
            udi: 6,
            fontSize: 26,
            dbr: 2
        },
        display: {
            blp: 16,
            ezx: 24,
            ozg: 0,
            eet: 0,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        }
    };
    this.wdl = {
        cuz: [new bku(2, 550, 130, 46), new bku(668, 550, 130, 46)],
        display: {
            ada: new bku(6, 16, 118, 23),
            blp: 14,
            twx: 20,
            ozg: -11,
            wqg: 10,
            aro: 8,
            dbr: 3,
            mlm: 0,
            ale: 4
        },
        hit: {
            cuz: new bku(50, 660, 700, 300),
            ada: new bku(),
            blp: 66,
            twx: 150,
            ozg: -90,
            wqg: 60,
            aro: 10,
            dbr: 0,
            mlm: 0,
            ale: 0
        },
        wht: {
            cuz: new bku(38, 610, 724, 369),
            cih: new bku(100, 53, 525, 50),
            ada: new bku(186, 153, 332, 94),
            agk: 360,
            lll: 30,
            tyu: {
                _0: new bku(2, 0, 90, 94),
                _1: new bku(98, 0, 90, 94),
                _2: new bku(194, 0, 90, 94),
                _3: new bku(290, 0, 90, 94),
                _4: new bku(386, 0, 90, 94),
                _5: new bku(482, 0, 90, 94),
                _6: new bku(578, 0, 90, 94),
                _7: new bku(674, 0, 90, 94),
                _8: new bku(770, 0, 90, 94),
                _9: new bku(866, 0, 90, 94),
                _cm: new bku(962, 0, 28, 94),
                _dt: new bku(999, 0, 28, 94),
                _sp: new bku(1036, 0, 28, 94)
            }
        }
    }
}
ajo.prototype = new wdx;

function lrf() {
    this.jzd = true;
    this.canvas = {
        cuz: new bku(0, 0, 810, 625)
    };
    this.bkx = {
        cuz: new bku(),
        edr: 0
    };
    this.yqr = {
        cuz: new bku(5, 20, 800, 600),
        dbr: 20
    };
    this.xot = {
        rnw: new bku(5, 40, 440, 36),
        ogh: new bku(5, 2, 140, 30),
        nng: new bku(150, 2, 140, 30),
        erc: new bku(295, 2, 140, 30),
        awl: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.aaa = {
        yqr: {
            cuz: new bku(0, 0, 500, 360),
            smg: new bku(0, 0, 500, 360),
            dsy: new bku(5, 325, 490, 30),
            ndg: new bku(5, 329, 490, 14),
            lru: new bku(50, 345, 400, 6),
            zwn: new bku(5, 285, 490, 70),
            fontSize: 14,
            rjo: 18,
            aro: 5,
            cic: 12,
            kth: 5,
            ied: 2,
            khk: 0,
            mrw: {
                cuz: new bku(),
                x: 0,
                wvc: 0,
                wwo: 0
            },
            jus: {
                smg: new bku(),
                ndg: new bku(),
                zeq: new bku()
            }
        },
        wtd: {
            cuz: new bku(0, 0, 800, 600),
            smg: new bku(140, 105, 520, 390),
            dsy: new bku(),
            ndg: new bku(140, 295, 520, 21),
            lru: new bku(192, 320, 416, 3),
            zwn: new bku(140, 275, 520, 95),
            fontSize: 18,
            rjo: 24,
            aro: 0,
            cic: 12,
            kth: 7,
            ied: 3,
            khk: 9,
            mrw: {
                cuz: new bku(400, 459, 0, 3),
                x: 33,
                wvc: 15,
                wwo: 20
            },
            jus: {
                smg: new bku(50, 0, 700, 450),
                ndg: new bku(100, 460, 600, 60),
                zeq: new bku(200, 540, 400, 40)
            }
        },
        kaa: {
            cuz: new bku(0, 0, 800, 600),
            smg: new bku(0, 0, 800, 600),
            dsy: new bku(),
            ndg: new bku(50, 420, 700, 21),
            lru: new bku(),
            zwn: new bku(50, 410, 700, 80),
            fontSize: 18,
            rjo: 24,
            aro: 0,
            cic: 12,
            kth: 7,
            ied: 0,
            khk: 0,
            mrw: {
                cuz: new bku(260, 119, 280, 280),
                x: 0,
                wvc: 0,
                wwo: 0
            },
            jus: {
                smg: new bku(50, 0, 700, 450),
                ndg: new bku(100, 460, 600, 60),
                zeq: new bku(200, 540, 400, 40)
            }
        }
    };
    this.svw = {
        cuz: new bku(5, 0, 800, 20),
        fontSize: 12,
        itw: 19,
        hvt: 15,
        stc: 120,
        cic: 2,
        kth: 2,
        jmx: 2,
        kvy: 40
    };
    this.lsy = {
        cuz: new bku(5, 20, 800, 70),
        fontSize: 10,
        ian: 10,
        gpx: 20,
        lsj: 40,
        dbr: 4,
        cic: 10,
        kth: 5,
        aro: 10,
        awl: {
            fontSize: 17,
            aro: 2
        }
    };
    this.mik = {
        cuz: new bku(5, 20, 800, 600),
        rnw: new bku(),
        awl: {
            ezx: 20,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 8,
            udi: 8,
            dbr: 2
        },
        fsm: new bku(0, 20, 800, 40),
        aix: new bku(0, 100, 800, 40),
        gym: new bku(0, 140, 800, 40),
        bdu: new bku(0, 180, 800, 40),
        mtx: new bku(225, 275, 350, 100),
        kdi: new bku(200, 480, 400, 40),
        qvh: {
            cbs: new bku(340, 540, 120, 55)
        },
        mzv: {
            cbs: new bku(250, 540, 120, 55),
            mpn: new bku(430, 540, 120, 55)
        },
        mpi: 36,
        fontSize: 30,
        lds: 22,
        kth: 3,
        cic: 5,
        dbr: 2,
        wmq: 3,
        zwd: 10
    };
    this.ccq = {
        cuz: new bku(-10, 25, 310, 50),
        fsm: new bku(10, 4, 240, 24),
        ndg: new bku(10, 28, 240, 18),
        mbe: new bku(260, 10, 40, 30),
        vcn: new bku(7, 2, 26, 26),
        blp: 16,
        ezx: 12,
        uwz: 18
    };
    this.bee = {
        cuz: new bku(155, 160, 500, 280),
        blp: 26,
        fontSize: 20,
        lqa: new bku(465, 5, 30, 30),
        fsm: new bku(30, 5, 440, 40),
        kdi: new bku(20, 40, 460, 160),
        mrr: new bku(20, 230, 460, 40),
        awl: {
            fontSize: 20
        }
    };
    this.dge = {
        cuz: new bku(5, 55, 560, 430),
        dbr: 2,
        hbu: 0,
        rud: 5,
        son: 10,
        blp: 26,
        ycv: 20,
        fsm: new bku(30, 15, 500, 30),
        mfu: new bku(20, 50, 520, 60),
        nho: new bku(40, 60, 220, 40),
        kfv: new bku(328, 60, 30, 40),
        ajh: new bku(360, 60, 120, 40),
        zom: new bku(482, 60, 30, 40),
        ete: new bku(20, 120, 520, 200),
        xxe: new bku(40, 120, 480, 40),
        ewu: new bku(30, 160, 280, 40),
        mwm: new bku(328, 160, 30, 40),
        aep: new bku(360, 160, 120, 40),
        sbc: new bku(482, 160, 30, 40),
        jmy: new bku(30, 215, 280, 40),
        pai: new bku(328, 215, 30, 40),
        yuf: new bku(360, 215, 120, 40),
        uqr: new bku(482, 215, 30, 40),
        fej: new bku(30, 270, 280, 40),
        sfz: new bku(328, 270, 30, 40),
        gre: new bku(360, 270, 120, 40),
        vvz: new bku(482, 270, 30, 40),
        dsy: new bku(30, 330, 500, 30),
        duz: new bku(210, 370, 140, 50),
        aop: new bku(),
        pae: {
            ndg: new bku(40, 0, 240, 40),
            ssb: new bku(7, 12, 16, 16),
            fontSize: 20,
            avi: 0,
            dbr: 2
        },
        hmv: {
            avi: 3,
            cic: -5,
            kth: -1,
            udi: 6,
            fontSize: 20,
            dbr: 0
        },
        pxb: {
            avi: 3,
            cic: 5,
            kth: 0,
            udi: 6,
            fontSize: 20,
            dbr: 0
        },
        fgy: {
            avi: 6,
            cic: 0,
            kth: 0,
            udi: 6,
            fontSize: 26,
            dbr: 2
        },
        display: {
            blp: 16,
            ezx: 24,
            ozg: 0,
            eet: 0,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        }
    };
    this.wdl = {
        cuz: [new bku(7, 20, 130, 46), new bku(673, 20, 130, 46)],
        display: {
            ada: new bku(6, 16, 118, 22),
            blp: 14,
            twx: 20,
            ozg: -11,
            wqg: 10,
            dbr: 3,
            aro: 8,
            mlm: 0,
            ale: 4
        },
        hit: {
            cuz: new bku(55, 130, 700, 300),
            ada: new bku(),
            blp: 66,
            twx: 150,
            ozg: -90,
            wqg: 60,
            aro: 10,
            dbr: 0,
            mlm: 0,
            ale: 0
        },
        wht: {
            cuz: new bku(43, 80, 724, 369),
            cih: new bku(100, 53, 525, 50),
            ada: new bku(186, 153, 332, 94),
            agk: 340,
            lll: 30,
            tyu: {
                _0: new bku(2, 0, 90, 94),
                _1: new bku(98, 0, 90, 94),
                _2: new bku(194, 0, 90, 94),
                _3: new bku(290, 0, 90, 94),
                _4: new bku(386, 0, 90, 94),
                _5: new bku(482, 0, 90, 94),
                _6: new bku(578, 0, 90, 94),
                _7: new bku(674, 0, 90, 94),
                _8: new bku(770, 0, 90, 94),
                _9: new bku(866, 0, 90, 94),
                _cm: new bku(962, 0, 28, 94),
                _dt: new bku(999, 0, 28, 94),
                _sp: new bku(1036, 0, 28, 94)
            }
        }
    }
}
lrf.prototype = new wdx;

function rzu() {
    this.adp = true
}
rzu.prototype = new lrf;

function lfm() {
    this.sdr = false;
    this.xes = true;
    this.ysc = false;
    this.jps = true;
    this.csj = true;
    this.canvas = {
        cuz: new bku(0, 0, 960, 600)
    };
    this.bkx = {
        cuz: new bku(),
        edr: 0,
        kkk: 0
    };
    this.yqr = {
        cuz: new bku(0, 0, 800, 600),
        dbr: 0
    };
    this.xot = {
        rnw: new bku(0, 25, 470, 36),
        ogh: new bku(5, 2, 150, 30),
        nng: new bku(160, 2, 150, 30),
        erc: new bku(315, 2, 150, 30),
        awl: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.aaa = {
        yqr: {
            cuz: new bku(0, 0, 640, 460),
            smg: new bku(0, 0, 640, 460),
            dsy: new bku(6, 416, 628, 38),
            ndg: new bku(6, 420, 628, 17),
            lru: new bku(64, 442, 512, 7),
            zwn: new bku(6, 364, 628, 90),
            fontSize: 18,
            rjo: 20,
            aro: 6,
            cic: 12,
            kth: 6,
            ied: 3,
            khk: 0,
            mrw: {
                cuz: new bku(),
                x: 0,
                wvc: 0,
                wwo: 0
            },
            jus: {
                smg: new bku(),
                ndg: new bku(),
                zeq: new bku()
            }
        },
        wtd: {
            cuz: new bku(0, 0, 800, 600),
            smg: new bku(100, 75, 600, 450),
            dsy: new bku(),
            ndg: new bku(100, 295, 600, 24),
            lru: new bku(160, 325, 480, 3),
            zwn: new bku(100, 265, 600, 115),
            fontSize: 21,
            rjo: 26,
            aro: 0,
            cic: 12,
            kth: 8,
            ied: 3,
            khk: 10,
            mrw: {
                cuz: new bku(400, 484, 0, 3),
                x: 38,
                wvc: 17,
                wwo: 23
            },
            jus: {
                smg: new bku(50, 0, 700, 450),
                ndg: new bku(100, 430, 600, 60),
                zeq: new bku(200, 510, 400, 40)
            }
        },
        kaa: {
            cuz: new bku(0, 0, 800, 600),
            smg: new bku(0, 0, 800, 600),
            dsy: new bku(),
            ndg: new bku(50, 420, 700, 21),
            lru: new bku(),
            zwn: new bku(50, 410, 700, 80),
            fontSize: 18,
            rjo: 24,
            aro: 0,
            cic: 12,
            kth: 7,
            ied: 0,
            khk: 0,
            mrw: {
                cuz: new bku(260, 119, 280, 280),
                x: 0,
                wvc: 0,
                wwo: 0
            },
            jus: {
                smg: new bku(50, 0, 700, 450),
                ndg: new bku(100, 460, 600, 60),
                zeq: new bku(200, 540, 400, 40)
            }
        }
    };
    this.svw = {};
    this.lsy = {};
    this.mik = {
        cuz: new bku(0, 0, 960, 600),
        rnw: new bku(800, 0, 160, 600),
        awl: {
            ezx: 0,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            udi: 8,
            avi: 16,
            dbr: 4
        },
        fsm: new bku(0, 20, 800, 40),
        aix: new bku(0, 100, 800, 40),
        gym: new bku(0, 140, 800, 40),
        bdu: new bku(0, 180, 800, 40),
        mtx: new bku(225, 275, 350, 100),
        kdi: new bku(200, 480, 400, 40),
        qvh: {
            cbs: new bku(815, 410, 130, 130),
        },
        mzv: {
            cbs: new bku(815, 310, 130, 130),
            mpn: new bku(815, 120, 130, 130)
        },
        mpi: 36,
        fontSize: 30,
        lds: 22,
        kth: 3,
        cic: 5,
        dbr: 2,
        wmq: 3,
        zwd: 10
    };
    this.cix = {
        cuz: new bku(0, 0, 960, 600),
        dbr: 0,
        avi: 0,
        ysn: 50,
        fjd: 30,
        ycv: 30,
        zxt: new bku(70, 170, 470, 70),
        qlr: new bku(560, 170, 60, 70),
        czs: new bku(622, 170, 210, 70),
        ejs: new bku(834, 170, 60, 70),
        mlp: new bku(70, 310, 470, 70),
        rix: new bku(560, 310, 60, 70),
        ewe: new bku(622, 310, 210, 70),
        hcg: new bku(834, 310, 60, 70),
        wds: new bku(70, 450, 470, 70),
        qwz: new bku(622, 450, 210, 70),
        umg: new bku(90, 530, 780, 50),
        nho: new bku(80, 120, 470, 60),
        kfv: new bku(570, 120, 50, 60),
        ajh: new bku(622, 120, 210, 60),
        zom: new bku(834, 120, 50, 60),
        qse: new bku(90, 200, 780, 70),
        ewu: new bku(80, 280, 470, 60),
        mwm: new bku(570, 280, 50, 60),
        aep: new bku(622, 280, 210, 60),
        sbc: new bku(834, 280, 50, 60),
        jmy: new bku(80, 360, 470, 60),
        pai: new bku(570, 360, 50, 60),
        yuf: new bku(622, 360, 210, 60),
        uqr: new bku(834, 360, 50, 60),
        fej: new bku(80, 440, 470, 60),
        sfz: new bku(570, 440, 50, 60),
        gre: new bku(622, 440, 210, 60),
        vvz: new bku(834, 440, 50, 60),
        dsy: new bku(90, 530, 780, 50),
        ius: {
            ueu: new bku(0, 10, 240, 90),
            nhq: new bku(240, 10, 240, 90),
            jqk: new bku(480, 10, 240, 90),
            wzb: new bku(720, 10, 240, 90)
        },
        omc: {
            ueu: new bku(0, 10, 192, 90),
            hcd: new bku(192, 10, 192, 90),
            nhq: new bku(384, 10, 192, 90),
            jqk: new bku(576, 10, 192, 90),
            wzb: new bku(768, 10, 192, 90)
        },
        udx: [new bku(190, 205, 200, 160), new bku(570, 205, 200, 160)],
        llb: [new bku(90, 205, 200, 160), new bku(380, 205, 200, 160), new bku(670, 205, 200, 160)],
        xih: [new bku(190, 130, 200, 160), new bku(570, 130, 200, 160), new bku(190, 360, 200, 160), new bku(570, 360, 200, 160)],
        phx: [new bku(90, 130, 200, 160), new bku(380, 130, 200, 160), new bku(670, 130, 200, 160), new bku(90, 360, 200, 160), new bku(380, 360, 200, 160), new bku(670, 360, 200, 160)],
        hmv: {
            avi: 3,
            cic: -10,
            kth: -1,
            udi: 6,
            fontSize: 36,
            dbr: 0,
        },
        pxb: {
            avi: 3,
            cic: 10,
            kth: -1,
            udi: 6,
            fontSize: 36,
            dbr: 0,
        },
        iug: {
            fontSize: 36,
            cic: 0,
            kth: 0,
            udi: 10,
            avi: 0,
            dbr: 0
        },
        ues: {
            fontSize: 26,
            aro: 5,
            avi: 26,
            dbr: 4,
            hry: 40
        },
        ncc: {
            blp: 16,
            ezx: 40,
            ozg: 0,
            eet: 0,
            dbr: 2,
            aro: 3
        },
        hnu: {
            blp: 16,
            ezx: 40,
            ozg: 0,
            eet: 0,
            dbr: 2,
            aro: 3
        },
        pae: {
            ndg: new bku(50, 0, 360, 60),
            ssb: new bku(0, 13, 30, 30),
            fontSize: 30,
            avi: 0,
            dbr: 2
        }
    };
    this.ccq = {
        cuz: new bku(-10, 5, 310, 60),
        fsm: new bku(10, 6, 240, 26),
        ndg: new bku(10, 34, 240, 20),
        mbe: new bku(255, 11, 50, 38),
        vcn: new bku(8, 2, 34, 34),
        blp: 16,
        ezx: 12,
        uwz: 24
    };
    this.bee = {
        cuz: new bku(200, 135, 560, 330),
        blp: 26,
        fontSize: 20,
        lqa: new bku(515, 5, 40, 40),
        fsm: new bku(40, 0, 480, 30),
        kdi: new bku(20, 40, 520, 195),
        mrr: new bku(20, 265, 520, 54),
        awl: {
            fontSize: 20
        }
    };
    this.wdl = {
        cuz: [new bku(2, 0, 130, 46), new bku(668, 0, 130, 46)],
        display: {
            ada: new bku(6, 16, 118, 23),
            blp: 14,
            twx: 20,
            ozg: -11,
            wqg: 10,
            aro: 8,
            dbr: 3,
            mlm: 0,
            ale: 4
        },
        hit: {
            cuz: new bku(50, 110, 700, 300),
            ada: new bku(),
            blp: 66,
            twx: 150,
            ozg: -90,
            wqg: 60,
            aro: 10,
            dbr: 0,
            mlm: 0,
            ale: 0
        },
        wht: {
            cuz: new bku(38, 60, 724, 369),
            cih: new bku(100, 53, 525, 50),
            ada: new bku(186, 153, 332, 94),
            agk: 340,
            lll: 30,
            tyu: {
                _0: new bku(2, 0, 90, 94),
                _1: new bku(98, 0, 90, 94),
                _2: new bku(194, 0, 90, 94),
                _3: new bku(290, 0, 90, 94),
                _4: new bku(386, 0, 90, 94),
                _5: new bku(482, 0, 90, 94),
                _6: new bku(578, 0, 90, 94),
                _7: new bku(674, 0, 90, 94),
                _8: new bku(770, 0, 90, 94),
                _9: new bku(866, 0, 90, 94),
                _cm: new bku(962, 0, 28, 94),
                _dt: new bku(999, 0, 28, 94),
                _sp: new bku(1036, 0, 28, 94)
            }
        }
    }
}
lfm.prototype = new wdx;

function ugz() {
    this.sdr = false;
    this.xes = true;
    this.ysc = false;
    this.jps = true;
    this.csj = true;
    this.canvas = {
        cuz: new bku(0, 0, 960, 600)
    };
    this.bkx = {
        cuz: new bku(),
        edr: 0,
        kkk: 0
    };
    this.yqr = {
        cuz: new bku(160, 0, 800, 600),
        dbr: 0
    };
    this.xot = {
        rnw: new bku(490, 25, 470, 36),
        ogh: new bku(5, 4, 150, 30),
        nng: new bku(160, 4, 150, 30),
        erc: new bku(315, 4, 150, 30),
        awl: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.aaa = {
        yqr: {
            cuz: new bku(0, 0, 640, 460),
            smg: new bku(0, 0, 640, 460),
            dsy: new bku(6, 416, 628, 38),
            ndg: new bku(6, 420, 628, 17),
            lru: new bku(64, 442, 512, 7),
            zwn: new bku(6, 364, 628, 90),
            fontSize: 18,
            rjo: 20,
            aro: 6,
            cic: 12,
            kth: 6,
            ied: 3,
            khk: 0,
            mrw: {
                cuz: new bku(),
                x: 0,
                wvc: 0,
                wwo: 0
            },
            jus: {
                smg: new bku(),
                ndg: new bku(),
                zeq: new bku()
            }
        },
        wtd: {
            cuz: new bku(0, 0, 800, 600),
            smg: new bku(100, 75, 600, 450),
            dsy: new bku(),
            ndg: new bku(100, 295, 600, 24),
            lru: new bku(160, 325, 480, 3),
            zwn: new bku(100, 265, 600, 115),
            fontSize: 21,
            rjo: 26,
            aro: 0,
            cic: 12,
            kth: 8,
            ied: 3,
            khk: 10,
            mrw: {
                cuz: new bku(400, 484, 0, 3),
                x: 38,
                wvc: 17,
                wwo: 23
            },
            jus: {
                smg: new bku(50, 0, 700, 450),
                ndg: new bku(100, 430, 600, 60),
                zeq: new bku(200, 510, 400, 40)
            }
        },
        kaa: {
            cuz: new bku(0, 0, 800, 600),
            smg: new bku(0, 0, 800, 600),
            dsy: new bku(),
            ndg: new bku(50, 420, 700, 21),
            lru: new bku(),
            zwn: new bku(50, 410, 700, 80),
            fontSize: 18,
            rjo: 24,
            aro: 0,
            cic: 12,
            kth: 7,
            ied: 0,
            khk: 0,
            mrw: {
                cuz: new bku(260, 119, 280, 280),
                x: 0,
                wvc: 0,
                wwo: 0
            },
            jus: {
                smg: new bku(50, 0, 700, 450),
                ndg: new bku(100, 460, 600, 60),
                zeq: new bku(200, 540, 400, 40)
            }
        }
    };
    this.svw = {};
    this.lsy = {};
    this.mik = {
        cuz: new bku(0, 0, 960, 600),
        rnw: new bku(0, 0, 160, 600),
        awl: {
            ezx: 0,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            udi: 8,
            avi: 16,
            dbr: 4
        },
        fsm: new bku(160, 20, 800, 40),
        aix: new bku(160, 100, 800, 40),
        gym: new bku(160, 140, 800, 40),
        bdu: new bku(160, 180, 800, 40),
        mtx: new bku(385, 275, 350, 100),
        kdi: new bku(360, 480, 400, 40),
        qvh: {
            cbs: new bku(15, 410, 130, 130),
        },
        mzv: {
            cbs: new bku(15, 310, 130, 130),
            mpn: new bku(15, 120, 130, 130)
        },
        mpi: 36,
        fontSize: 30,
        lds: 22,
        kth: 3,
        cic: 5,
        dbr: 2,
        wmq: 3,
        zwd: 10
    };
    this.cix = {
        cuz: new bku(0, 0, 960, 600),
        dbr: 0,
        avi: 0,
        ysn: 50,
        fjd: 30,
        ycv: 30,
        zxt: new bku(70, 170, 470, 70),
        qlr: new bku(560, 170, 60, 70),
        czs: new bku(622, 170, 210, 70),
        ejs: new bku(834, 170, 60, 70),
        mlp: new bku(70, 310, 470, 70),
        rix: new bku(560, 310, 60, 70),
        ewe: new bku(622, 310, 210, 70),
        hcg: new bku(834, 310, 60, 70),
        wds: new bku(70, 450, 470, 70),
        qwz: new bku(622, 450, 210, 70),
        umg: new bku(90, 530, 780, 50),
        nho: new bku(80, 120, 470, 60),
        kfv: new bku(570, 120, 50, 60),
        ajh: new bku(622, 120, 210, 60),
        zom: new bku(834, 120, 50, 60),
        qse: new bku(90, 200, 780, 70),
        ewu: new bku(80, 280, 470, 60),
        mwm: new bku(570, 280, 50, 60),
        aep: new bku(622, 280, 210, 60),
        sbc: new bku(834, 280, 50, 60),
        jmy: new bku(80, 360, 470, 60),
        pai: new bku(570, 360, 50, 60),
        yuf: new bku(622, 360, 210, 60),
        uqr: new bku(834, 360, 50, 60),
        fej: new bku(80, 440, 470, 60),
        sfz: new bku(570, 440, 50, 60),
        gre: new bku(622, 440, 210, 60),
        vvz: new bku(834, 440, 50, 60),
        dsy: new bku(90, 530, 780, 50),
        ius: {
            ueu: new bku(0, 10, 240, 90),
            nhq: new bku(240, 10, 240, 90),
            jqk: new bku(480, 10, 240, 90),
            wzb: new bku(720, 10, 240, 90)
        },
        omc: {
            ueu: new bku(0, 10, 192, 90),
            hcd: new bku(192, 10, 192, 90),
            nhq: new bku(384, 10, 192, 90),
            jqk: new bku(576, 10, 192, 90),
            wzb: new bku(768, 10, 192, 90)
        },
        udx: [new bku(190, 205, 200, 160), new bku(570, 205, 200, 160)],
        llb: [new bku(90, 205, 200, 160), new bku(380, 205, 200, 160), new bku(670, 205, 200, 160)],
        xih: [new bku(190, 130, 200, 160), new bku(570, 130, 200, 160), new bku(190, 360, 200, 160), new bku(570, 360, 200, 160)],
        phx: [new bku(90, 130, 200, 160), new bku(380, 130, 200, 160), new bku(670, 130, 200, 160), new bku(90, 360, 200, 160), new bku(380, 360, 200, 160), new bku(670, 360, 200, 160)],
        hmv: {
            avi: 3,
            cic: -10,
            kth: -1,
            udi: 6,
            fontSize: 36,
            dbr: 0,
        },
        pxb: {
            avi: 3,
            cic: 10,
            kth: -1,
            udi: 6,
            fontSize: 36,
            dbr: 0,
        },
        iug: {
            fontSize: 36,
            cic: 0,
            kth: 0,
            udi: 10,
            avi: 0,
            dbr: 0
        },
        ues: {
            fontSize: 26,
            aro: 5,
            avi: 26,
            dbr: 4,
            hry: 40
        },
        ncc: {
            blp: 16,
            ezx: 40,
            ozg: 0,
            eet: 0,
            dbr: 2,
            aro: 3
        },
        hnu: {
            blp: 16,
            ezx: 40,
            ozg: 0,
            eet: 0,
            dbr: 2,
            aro: 3
        },
        pae: {
            ndg: new bku(50, 0, 360, 60),
            ssb: new bku(0, 13, 30, 30),
            fontSize: 30,
            avi: 0,
            dbr: 2
        }
    };
    this.ccq = {
        cuz: new bku(660, 5, 310, 60),
        fsm: new bku(60, 6, 240, 26),
        ndg: new bku(60, 34, 240, 20),
        mbe: new bku(5, 11, 50, 38),
        vcn: new bku(8, 2, 34, 34),
        blp: 16,
        ezx: 12,
        uwz: 24
    };
    this.bee = {
        cuz: new bku(200, 135, 560, 330),
        blp: 26,
        fontSize: 20,
        lqa: new bku(515, 5, 40, 40),
        fsm: new bku(40, 5, 480, 30),
        kdi: new bku(20, 40, 520, 195),
        mrr: new bku(20, 265, 520, 54),
        awl: {
            fontSize: 20
        }
    };
    this.wdl = {
        cuz: [new bku(162, 0, 130, 46), new bku(828, 0, 130, 46)],
        display: {
            ada: new bku(6, 16, 118, 23),
            blp: 14,
            twx: 20,
            ozg: -11,
            wqg: 10,
            aro: 8,
            dbr: 3,
            mlm: 0,
            ale: 4
        },
        hit: {
            cuz: new bku(210, 110, 700, 300),
            ada: new bku(),
            blp: 66,
            twx: 150,
            ozg: -90,
            wqg: 60,
            aro: 10,
            dbr: 0,
            mlm: 0,
            ale: 0
        },
        wht: {
            cuz: new bku(198, 60, 724, 369),
            cih: new bku(100, 53, 525, 50),
            ada: new bku(186, 153, 332, 94),
            agk: 340,
            lll: 30,
            tyu: {
                _0: new bku(2, 0, 90, 94),
                _1: new bku(98, 0, 90, 94),
                _2: new bku(194, 0, 90, 94),
                _3: new bku(290, 0, 90, 94),
                _4: new bku(386, 0, 90, 94),
                _5: new bku(482, 0, 90, 94),
                _6: new bku(578, 0, 90, 94),
                _7: new bku(674, 0, 90, 94),
                _8: new bku(770, 0, 90, 94),
                _9: new bku(866, 0, 90, 94),
                _cm: new bku(962, 0, 28, 94),
                _dt: new bku(999, 0, 28, 94),
                _sp: new bku(1036, 0, 28, 94)
            }
        }
    }
}
ugz.prototype = new wdx;

function zfs() {
    this.chd = true;
    this.fld = true;
    this.mli = true;
    this.bkx = {
        cuz: new bku(0, 20, 800, 600),
        edr: 0,
        kkk: 0
    };
    this.ggj = {
        cuz: new bku(0, 20, 800, 600),
        edr: -20,
        kkk: 0
    };
    this.ekb = {
        cuz: new bku(40, 110, 136, 360),
        muh: new bku(40, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.pwk = {
        cuz: new bku(186, 110, 136, 360),
        muh: new bku(186, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.ssk = {
        cuz: new bku(332, 110, 136, 360),
        muh: new bku(332, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.pzc = {
        cuz: new bku(478, 110, 136, 360),
        muh: new bku(478, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.qde = {
        cuz: new bku(624, 110, 136, 360),
        muh: new bku(624, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.oiv = {
        cuz: new bku(0, 20, 800, 86),
        fontSize: 50,
        cic: 0,
        kth: 6,
        aro: 0,
        tce: 2
    };
    this.hra = {
        cuz: new bku(0, 20, 800, 80),
        fontSize: 50,
        cic: 0,
        kth: 8,
        aro: 0,
        tce: 2
    };
    this.nmy = {
        cuz: new bku(4, 110, 0, 0),
        qin: [25, 65, 165, 265, 305],
        uxl: 30,
        mam: 30
    };
    this.rfc = {
        cuz: new bku(766, 110, 0, 0),
        qin: [25, 65, 165, 265, 305],
        uxl: 30,
        mam: 30
    };
    this.djr = {
        cuz: new bku(710, 35, 90, 450),
        fsm: new bku(5, 5, 80, 15),
        vyg: new bku(55, 25, 30, 410),
        fontSize: 15,
        pxn: 20,
        dbr: 2,
        avi: 5,
        qxt: 4,
        lka: 10,
        ezb: 5
    };
    this.plr = {
        cuz: new bku(0, 35, 90, 450),
        fsm: new bku(5, 5, 80, 15),
        vyg: new bku(5, 25, 30, 410),
        fontSize: 15,
        pxn: 20,
        dbr: 2,
        avi: 5,
        qxt: 4,
        lka: 10,
        ezb: 5
    };
    this.cth = {
        cuz: new bku(0, 20, 800, 600),
        rnw: new bku(0, 540, 800, 60),
        mpn: new bku(711, 544, 73, 53),
        ytv: new bku(11, 544, 73, 53),
        dgg: new bku(316, 544, 73, 53),
        qzz: new bku(411, 544, 73, 53),
        awl: {
            ezx: 16,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            udi: 6,
            avi: 8,
            dbr: 2
        }
    };
    this.zli = {
        cuz: new bku(0, 20, 800, 600),
        rnw: new bku(0, 485, 800, 115),
        zjk: {
            cuz: new bku(187, 489, 470, 40),
            fontSize: 18,
            kth: 14,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 2
        },
        yqj: {
            cuz: new bku(331, 216, 137, 187),
            ndg: new bku(5, 8, 56, 34),
            ada: new bku(37, 3, 98, 104),
            djs: new bku(33, 110, 72, 76),
            xsi: new bku(10, 42, 45, 45),
            gvq: new bku(5, 120, 126, 50),
            fontSize: 34,
            khm: 50,
            aro: 3,
            frj: 4
        },
        vfc: {
            cuz: new bku(380, 105, 380, 45),
            pcs: 2
        },
        awl: {
            ezx: 18,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            udi: 8,
            avi: 10,
            dbr: 2
        },
        display: {
            ozg: -12,
            eet: 11,
            ezx: 26,
            blp: 15,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        hff: {
            ozg: 0,
            eet: 0,
            ezx: 0,
            blp: 0,
            dbr: 0,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        zcd: new bku(),
        css: new bku(),
        jvj: new bku(415, 544, 110, 53),
        odd: new bku(275, 544, 110, 53),
        gvq: new bku(689, 485, 106, 48),
        nsm: new bku(5, 485, 150, 48),
        mgw: new bku(73, 315, 91, 96),
        uqp: new bku(166, 315, 91, 96),
        csc: new bku(542, 315, 91, 96),
        gaw: new bku(635, 315, 91, 96),
        esi: new bku(73, 218, 184, 92),
        akp: new bku(542, 218, 184, 92),
        nad: new bku(65, 170, 200, 50),
        sea: new bku(509, 170, 250, 50),
        hhn: new bku(534, 410, 200, 50)
    };
    this.mmj = {
        cuz: new bku(0, 475, 800, 145),
        upy: new bku(0, 0, 800, 145),
        uyn: new bku(),
        zjk: {
            cuz: new bku(187, 34, 470, 40),
            kth: 14,
            fontSize: 18,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 2
        },
        win: {
            cuz: new bku(45, 2, 710, 25),
            fontSize: 20,
            kth: 4,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 0
        },
        jaf: {
            cuz: new bku(187, 51, 470, 70),
            ezb: 10,
            eet: 2,
            fontSize: 24,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        jxm: {
            ezx: 22,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 10,
            udi: 8,
            dbr: 2
        },
        gnl: {
            ezx: 16,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 8,
            udi: 8,
            dbr: 2
        },
        gfv: {
            ezx: 0,
            twx: 0,
            cic: 0,
            avi: 0,
            udi: 0,
            dbr: 0,
            eet: 0,
            wqg: 0
        },
        psy: {
            ezx: 16,
            twx: 16,
            cic: 0,
            avi: 8,
            udi: 6,
            dbr: 2,
            eet: 24,
            wqg: -24
        },
        display: {
            ozg: -12,
            eet: 11,
            ezx: 26,
            blp: 15,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        yzm: {
            ozg: 0,
            eet: 0,
            ezx: 0,
            blp: 0,
            dbr: 0,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        hff: {
            cuz: new bku(),
            ozg: 0,
            eet: 0,
            ezx: 0,
            blp: 0,
            dbr: 0,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        zcd: new bku(),
        css: new bku(),
        owf: new bku(5, 30, 150, 48),
        vtf: new bku(689, 30, 106, 48),
        gzr: new bku(),
        zbk: {
            zeq: new bku(686, 89, 110, 53),
            krz: new bku(492, 89, 80, 53),
            isd: new bku(382, 89, 80, 53),
            mpn: new bku(272, 89, 80, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        acq: {
            zeq: new bku(686, 89, 110, 53),
            krz: new bku(532, 89, 80, 53),
            qin: new bku(432, 89, 80, 53),
            isd: new bku(332, 89, 80, 53),
            mpn: new bku(232, 89, 80, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        fbz: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(532, 89, 80, 53),
            krz: new bku(432, 89, 80, 53),
            isd: new bku(332, 89, 80, 53),
            mpn: new bku(232, 89, 80, 53),
            dwk: new bku(40, 89, 80, 53),
            oku: new bku()
        },
        jqv: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(562, 89, 80, 53),
            krz: new bku(472, 89, 80, 53),
            qin: new bku(382, 89, 80, 53),
            isd: new bku(292, 89, 80, 53),
            mpn: new bku(202, 89, 80, 53),
            dwk: new bku(40, 89, 80, 53),
            oku: new bku()
        },
        ygh: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(492, 89, 80, 53),
            krz: new bku(382, 89, 80, 53),
            isd: new bku(272, 89, 80, 53),
            dwk: new bku(40, 89, 80, 53),
            oku: new bku()
        },
        iqv: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(532, 89, 80, 53),
            krz: new bku(432, 89, 80, 53),
            qin: new bku(332, 89, 80, 53),
            isd: new bku(232, 89, 80, 53),
            dwk: new bku(40, 89, 80, 53),
            oku: new bku()
        },
        oay: {
            zeq: new bku(686, 89, 110, 53),
            krz: new bku(492, 89, 80, 53),
            isd: new bku(382, 89, 80, 53),
            mpn: new bku(272, 89, 80, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        epz: {
            zeq: new bku(686, 89, 110, 53),
            krz: new bku(532, 89, 80, 53),
            qin: new bku(432, 89, 80, 53),
            isd: new bku(332, 89, 80, 53),
            mpn: new bku(232, 89, 80, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        exw: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        yyr: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        uvj: 60
    };
    this.mrw = {
        cuz: new bku(40, 110, 720, 360),
        lineWidth: 4,
        fqs: 5,
        dbr: 1,
        mzi: 136,
        buj: 120,
        fontSize: 40,
        unt: 10,
        zbc: 5,
        ghf: 100,
        xui: 96,
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
    this.quf = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410]
    ]
}
zfs.prototype = new rtp;

function min() {
    this.adp = true
}
min.prototype = new zfs;

function usj() {
    this.chd = true;
    this.fld = true;
    this.mli = true;
    this.bkx = {
        cuz: new bku(0, 550, 800, 600),
        edr: -14,
        kkk: 0
    };
    this.ggj = {
        cuz: new bku(0, 550, 800, 600),
        edr: -550,
        kkk: 0
    };
    this.ekb = {
        cuz: new bku(40, 640, 136, 360),
        muh: new bku(40, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.pwk = {
        cuz: new bku(186, 640, 136, 360),
        muh: new bku(186, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.ssk = {
        cuz: new bku(332, 640, 136, 360),
        muh: new bku(332, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.pzc = {
        cuz: new bku(478, 640, 136, 360),
        muh: new bku(478, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.qde = {
        cuz: new bku(624, 640, 136, 360),
        muh: new bku(624, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.oiv = {
        cuz: new bku(0, 550, 800, 86),
        fontSize: 50,
        cic: 0,
        kth: 6,
        aro: 0,
        tce: 2
    };
    this.hra = {
        cuz: new bku(0, 550, 800, 80),
        fontSize: 50,
        cic: 0,
        kth: 8,
        aro: 0,
        tce: 2
    };
    this.nmy = {
        cuz: new bku(4, 640, 0, 0),
        qin: [25, 65, 165, 265, 305],
        uxl: 30,
        mam: 30
    };
    this.rfc = {
        cuz: new bku(766, 640, 0, 0),
        qin: [25, 65, 165, 265, 305],
        uxl: 30,
        mam: 30
    };
    this.djr = {
        cuz: new bku(710, 565, 90, 450),
        fsm: new bku(5, 5, 80, 15),
        vyg: new bku(55, 25, 30, 410),
        fontSize: 15,
        pxn: 20,
        dbr: 2,
        avi: 5,
        qxt: 4,
        lka: 10,
        ezb: 5
    };
    this.plr = {
        cuz: new bku(0, 565, 90, 450),
        fsm: new bku(5, 5, 80, 15),
        vyg: new bku(5, 25, 30, 410),
        fontSize: 15,
        pxn: 20,
        dbr: 2,
        avi: 5,
        qxt: 4,
        lka: 10,
        ezb: 5
    };
    this.cth = {
        cuz: new bku(0, 550, 800, 615),
        rnw: new bku(0, 540, 800, 75),
        mpn: new bku(695, 544, 90, 68),
        ytv: new bku(11, 544, 90, 68),
        dgg: new bku(295, 544, 90, 68),
        qzz: new bku(415, 544, 90, 68),
        awl: {
            ezx: 21,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            udi: 8,
            avi: 10,
            dbr: 2
        }
    };
    this.zli = {
        cuz: new bku(0, 550, 800, 615),
        rnw: new bku(0, 485, 800, 130),
        zjk: {
            cuz: new bku(187, 489, 470, 40),
            fontSize: 18,
            kth: 14,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 2
        },
        yqj: {
            cuz: new bku(331, 216, 137, 187),
            ndg: new bku(5, 8, 56, 34),
            ada: new bku(37, 3, 98, 104),
            djs: new bku(33, 110, 72, 76),
            xsi: new bku(10, 42, 45, 45),
            gvq: new bku(5, 120, 126, 50),
            fontSize: 34,
            khm: 50,
            aro: 3,
            frj: 4
        },
        vfc: {
            cuz: new bku(380, 105, 380, 45),
            pcs: 2
        },
        awl: {
            ezx: 23,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            udi: 10,
            avi: 12,
            dbr: 2
        },
        display: {
            ozg: -12,
            eet: 11,
            ezx: 26,
            blp: 15,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        hff: {
            ozg: 0,
            eet: 0,
            ezx: 0,
            blp: 0,
            dbr: 0,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        zcd: new bku(),
        css: new bku(),
        jvj: new bku(415, 544, 120, 68),
        odd: new bku(265, 544, 120, 68),
        gvq: new bku(689, 485, 106, 48),
        nsm: new bku(5, 485, 150, 48),
        mgw: new bku(73, 315, 91, 96),
        uqp: new bku(166, 315, 91, 96),
        csc: new bku(542, 315, 91, 96),
        gaw: new bku(635, 315, 91, 96),
        esi: new bku(73, 218, 184, 92),
        akp: new bku(542, 218, 184, 92),
        nad: new bku(65, 170, 200, 50),
        sea: new bku(509, 170, 250, 50),
        hhn: new bku(534, 410, 200, 50)
    };
    this.mmj = {
        cuz: new bku(0, 1005, 800, 160),
        upy: new bku(0, 0, 800, 160),
        uyn: new bku(),
        zjk: {
            cuz: new bku(187, 34, 470, 40),
            kth: 14,
            fontSize: 18,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 2
        },
        win: {
            cuz: new bku(45, 2, 710, 25),
            fontSize: 20,
            kth: 4,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 0
        },
        jaf: {
            cuz: new bku(187, 58, 470, 70),
            ezb: 10,
            eet: 2,
            fontSize: 24,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        jxm: {
            ezx: 28,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 12,
            udi: 10,
            dbr: 2
        },
        gnl: {
            ezx: 21,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 10,
            udi: 8,
            dbr: 2
        },
        gfv: {
            ezx: 0,
            twx: 0,
            cic: 0,
            avi: 0,
            udi: 0,
            dbr: 0,
            eet: 0,
            wqg: 0
        },
        psy: {
            ezx: 21,
            twx: 21,
            cic: 0,
            avi: 8,
            udi: 6,
            dbr: 2,
            eet: 30,
            wqg: -32
        },
        display: {
            ozg: -12,
            eet: 11,
            ezx: 26,
            blp: 15,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        yzm: {
            ozg: 0,
            eet: 0,
            ezx: 0,
            blp: 0,
            dbr: 0,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        hff: {
            ozg: 0,
            eet: 0,
            ezx: 0,
            blp: 0,
            dbr: 0,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        zcd: new bku(),
        css: new bku(),
        owf: new bku(5, 30, 150, 48),
        vtf: new bku(689, 30, 106, 48),
        gzr: new bku(),
        zbk: {
            zeq: new bku(675, 89, 120, 68),
            krz: new bku(486, 89, 100, 68),
            isd: new bku(371, 89, 100, 68),
            mpn: new bku(256, 89, 100, 68),
            yap: new bku(20, 89, 120, 68),
            oku: new bku()
        },
        acq: {
            zeq: new bku(675, 89, 120, 68),
            krz: new bku(536, 89, 100, 68),
            qin: new bku(426, 89, 100, 68),
            isd: new bku(316, 89, 100, 68),
            mpn: new bku(206, 89, 100, 68),
            yap: new bku(20, 89, 120, 68),
            oku: new bku()
        },
        fbz: {
            zeq: new bku(675, 89, 120, 68),
            yap: new bku(536, 89, 100, 68),
            krz: new bku(426, 89, 100, 68),
            isd: new bku(316, 89, 100, 68),
            mpn: new bku(206, 89, 100, 68),
            dwk: new bku(30, 89, 100, 68),
            oku: new bku()
        },
        jqv: {
            zeq: new bku(678, 89, 120, 68),
            yap: new bku(576, 89, 90, 68),
            krz: new bku(476, 89, 90, 68),
            qin: new bku(376, 89, 90, 68),
            isd: new bku(276, 89, 90, 68),
            mpn: new bku(176, 89, 90, 68),
            dwk: new bku(35, 89, 90, 68),
            oku: new bku()
        },
        ygh: {
            zeq: new bku(675, 89, 120, 68),
            yap: new bku(486, 89, 100, 68),
            krz: new bku(371, 89, 100, 68),
            isd: new bku(256, 89, 100, 68),
            dwk: new bku(30, 89, 100, 68),
            oku: new bku()
        },
        iqv: {
            zeq: new bku(675, 89, 120, 68),
            yap: new bku(536, 89, 100, 68),
            krz: new bku(426, 89, 100, 68),
            qin: new bku(316, 89, 100, 68),
            isd: new bku(206, 89, 100, 68),
            dwk: new bku(30, 89, 100, 68),
            oku: new bku()
        },
        oay: {
            zeq: new bku(675, 89, 120, 68),
            krz: new bku(486, 89, 100, 68),
            isd: new bku(371, 89, 100, 68),
            mpn: new bku(256, 89, 100, 68),
            yap: new bku(20, 89, 120, 68),
            oku: new bku()
        },
        epz: {
            zeq: new bku(675, 89, 120, 68),
            krz: new bku(536, 89, 100, 68),
            qin: new bku(426, 89, 100, 68),
            isd: new bku(316, 89, 100, 68),
            mpn: new bku(206, 89, 100, 68),
            yap: new bku(20, 89, 120, 68),
            oku: new bku()
        },
        exw: {
            zeq: new bku(675, 90, 120, 68),
            yap: new bku(20, 90, 120, 68),
            oku: new bku()
        },
        yyr: {
            zeq: new bku(675, 90, 120, 68),
            yap: new bku(20, 90, 120, 68),
            oku: new bku()
        },
        uvj: 60
    };
    this.mrw = {
        cuz: new bku(40, 640, 720, 360),
        lineWidth: 4,
        fqs: 5,
        dbr: 1,
        mzi: 136,
        buj: 120,
        fontSize: 40,
        unt: 10,
        zbc: 5,
        ghf: 100,
        xui: 96,
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
    this.quf = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940]
    ];
    this.top = {
        cuz: new bku(0, 20, 800, 520)
    }
}
usj.prototype = new ajo;

function rhu() {
    this.chd = true;
    this.fld = true;
    this.mli = true;
    this.bkx = {
        cuz: new bku(5, 20, 800, 600),
        edr: 0,
        kkk: -10
    };
    this.ggj = {
        cuz: new bku(5, 20, 800, 600),
        edr: -20,
        kkk: -5
    };
    this.ekb = {
        cuz: new bku(45, 110, 136, 360),
        muh: new bku(40, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.pwk = {
        cuz: new bku(191, 110, 136, 360),
        muh: new bku(186, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.ssk = {
        cuz: new bku(337, 110, 136, 360),
        muh: new bku(332, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.pzc = {
        cuz: new bku(483, 110, 136, 360),
        muh: new bku(478, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.qde = {
        cuz: new bku(629, 110, 136, 360),
        muh: new bku(624, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.oiv = {
        cuz: new bku(5, 20, 800, 86),
        fontSize: 50,
        cic: 0,
        kth: 6,
        aro: 0,
        tce: 2
    };
    this.hra = {
        cuz: new bku(5, 20, 800, 80),
        fontSize: 50,
        cic: 0,
        kth: 8,
        aro: 0,
        tce: 2
    };
    this.nmy = {
        cuz: new bku(9, 110, 0, 0),
        qin: [25, 65, 165, 265, 305],
        uxl: 30,
        mam: 30
    };
    this.rfc = {
        cuz: new bku(771, 110, 0, 0),
        qin: [25, 65, 165, 265, 305],
        uxl: 30,
        mam: 30
    };
    this.djr = {
        cuz: new bku(715, 35, 90, 450),
        fsm: new bku(5, 5, 80, 15),
        vyg: new bku(55, 25, 30, 410),
        fontSize: 15,
        pxn: 20,
        dbr: 2,
        avi: 5,
        qxt: 4,
        lka: 10,
        ezb: 5
    };
    this.plr = {
        cuz: new bku(5, 35, 90, 450),
        fsm: new bku(5, 5, 80, 15),
        vyg: new bku(5, 25, 30, 410),
        fontSize: 15,
        pxn: 20,
        dbr: 2,
        avi: 5,
        qxt: 4,
        lka: 10,
        ezb: 5
    };
    this.cth = {
        cuz: new bku(5, 20, 800, 600),
        rnw: new bku(0, 540, 800, 60),
        mpn: new bku(711, 544, 73, 53),
        ytv: new bku(11, 544, 73, 53),
        dgg: new bku(316, 544, 73, 53),
        qzz: new bku(411, 544, 73, 53),
        awl: {
            ezx: 16,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            udi: 6,
            avi: 8,
            dbr: 2
        }
    };
    this.zli = {
        cuz: new bku(5, 20, 800, 600),
        rnw: new bku(0, 485, 800, 115),
        zjk: {
            cuz: new bku(187, 489, 470, 40),
            fontSize: 18,
            kth: 14,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 2
        },
        yqj: {
            cuz: new bku(331, 216, 137, 187),
            ndg: new bku(5, 8, 56, 34),
            ada: new bku(37, 3, 98, 104),
            djs: new bku(33, 110, 72, 76),
            xsi: new bku(10, 42, 45, 45),
            gvq: new bku(5, 120, 126, 50),
            fontSize: 34,
            khm: 50,
            aro: 3,
            frj: 4
        },
        vfc: {
            cuz: new bku(380, 105, 380, 45),
            pcs: 2
        },
        awl: {
            ezx: 18,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            udi: 8,
            avi: 10,
            dbr: 2
        },
        display: {
            ozg: -12,
            eet: 11,
            ezx: 26,
            blp: 15,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        hff: {
            ozg: 0,
            eet: 0,
            ezx: 0,
            blp: 0,
            dbr: 0,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        zcd: new bku(),
        css: new bku(),
        jvj: new bku(415, 544, 110, 53),
        odd: new bku(275, 544, 110, 53),
        gvq: new bku(689, 485, 106, 48),
        nsm: new bku(5, 485, 150, 48),
        mgw: new bku(73, 315, 91, 96),
        uqp: new bku(166, 315, 91, 96),
        csc: new bku(542, 315, 91, 96),
        gaw: new bku(635, 315, 91, 96),
        esi: new bku(73, 218, 184, 92),
        akp: new bku(542, 218, 184, 92),
        nad: new bku(65, 170, 200, 50),
        sea: new bku(509, 170, 250, 50),
        hhn: new bku(534, 410, 200, 50)
    };
    this.mmj = {
        cuz: new bku(5, 475, 800, 145),
        upy: new bku(0, 0, 800, 145),
        uyn: new bku(),
        zjk: {
            cuz: new bku(187, 34, 470, 40),
            kth: 14,
            fontSize: 18,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 2
        },
        win: {
            cuz: new bku(45, 2, 710, 25),
            fontSize: 20,
            kth: 4,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 0
        },
        jaf: {
            cuz: new bku(187, 51, 470, 70),
            ezb: 10,
            eet: 2,
            fontSize: 24,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        jxm: {
            ezx: 22,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 10,
            udi: 8,
            dbr: 2
        },
        gnl: {
            ezx: 16,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 8,
            udi: 6,
            dbr: 2
        },
        gfv: {
            ezx: 0,
            twx: 0,
            cic: 0,
            avi: 0,
            udi: 0,
            dbr: 0,
            eet: 0,
            wqg: 0
        },
        psy: {
            ezx: 16,
            twx: 16,
            cic: 0,
            avi: 8,
            udi: 6,
            dbr: 2,
            eet: 24,
            wqg: -24
        },
        display: {
            ozg: -12,
            eet: 11,
            ezx: 26,
            blp: 15,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        yzm: {
            ozg: 0,
            eet: 0,
            ezx: 0,
            blp: 0,
            dbr: 0,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        hff: {
            cuz: new bku(),
            ozg: 0,
            eet: 0,
            ezx: 0,
            blp: 0,
            dbr: 0,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        zcd: new bku(),
        css: new bku(),
        owf: new bku(5, 30, 150, 48),
        vtf: new bku(689, 30, 106, 48),
        gzr: new bku(),
        zbk: {
            zeq: new bku(686, 89, 110, 53),
            krz: new bku(492, 89, 80, 53),
            isd: new bku(382, 89, 80, 53),
            mpn: new bku(272, 89, 80, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        acq: {
            zeq: new bku(686, 89, 110, 53),
            krz: new bku(532, 89, 80, 53),
            qin: new bku(432, 89, 80, 53),
            isd: new bku(332, 89, 80, 53),
            mpn: new bku(232, 89, 80, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        fbz: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(532, 89, 80, 53),
            krz: new bku(432, 89, 80, 53),
            isd: new bku(332, 89, 80, 53),
            mpn: new bku(232, 89, 80, 53),
            dwk: new bku(40, 89, 80, 53),
            oku: new bku()
        },
        jqv: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(562, 89, 80, 53),
            krz: new bku(472, 89, 80, 53),
            qin: new bku(382, 89, 80, 53),
            isd: new bku(292, 89, 80, 53),
            mpn: new bku(202, 89, 80, 53),
            dwk: new bku(40, 89, 80, 53),
            oku: new bku()
        },
        ygh: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(492, 89, 80, 53),
            krz: new bku(382, 89, 80, 53),
            isd: new bku(272, 89, 80, 53),
            dwk: new bku(40, 89, 80, 53),
            oku: new bku()
        },
        iqv: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(532, 89, 80, 53),
            krz: new bku(432, 89, 80, 53),
            qin: new bku(332, 89, 80, 53),
            isd: new bku(232, 89, 80, 53),
            dwk: new bku(40, 89, 80, 53),
            oku: new bku()
        },
        oay: {
            zeq: new bku(686, 89, 110, 53),
            krz: new bku(492, 89, 80, 53),
            isd: new bku(382, 89, 80, 53),
            mpn: new bku(272, 89, 80, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        epz: {
            zeq: new bku(686, 89, 110, 53),
            krz: new bku(532, 89, 80, 53),
            qin: new bku(432, 89, 80, 53),
            isd: new bku(332, 89, 80, 53),
            mpn: new bku(232, 89, 80, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        exw: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        yyr: {
            zeq: new bku(686, 89, 110, 53),
            yap: new bku(25, 89, 110, 53),
            oku: new bku()
        },
        uvj: 60
    };
    this.mrw = {
        cuz: new bku(45, 110, 720, 360),
        lineWidth: 4,
        fqs: 5,
        dbr: 1,
        mzi: 136,
        buj: 120,
        fontSize: 40,
        unt: 10,
        zbc: 5,
        ghf: 100,
        xui: 96,
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
    this.quf = [
        [92, 290, 718, 290],
        [92, 170, 718, 170],
        [92, 410, 718, 410],
        [92, 170, 117, 170, 405, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 405, 170, 693, 410, 718, 410]
    ]
}
rhu.prototype = new lrf;

function keh() {
    this.adp = true
}
keh.prototype = new rhu;

function vbi() {
    this.chd = false;
    this.fld = true;
    this.mli = true;
    this.bkx = {
        cuz: new bku(0, 0, 800, 600),
        edr: 0,
        kkk: -160
    };
    this.ggj = {
        cuz: new bku(-160, 0, 1120, 600),
        kkk: 160,
        edr: 0
    };
    this.ekb = {
        cuz: new bku(40, 90, 136, 360),
        muh: new bku(40, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.pwk = {
        cuz: new bku(186, 90, 136, 360),
        muh: new bku(186, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.ssk = {
        cuz: new bku(332, 90, 136, 360),
        muh: new bku(332, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.pzc = {
        cuz: new bku(478, 90, 136, 360),
        muh: new bku(478, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.qde = {
        cuz: new bku(624, 90, 136, 360),
        muh: new bku(624, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.oiv = {
        cuz: new bku(0, 0, 800, 86),
        fontSize: 50,
        cic: 0,
        kth: 6,
        aro: 0,
        tce: 2
    };
    this.hra = {
        cuz: new bku(0, 0, 800, 80),
        fontSize: 50,
        cic: 0,
        kth: 8,
        aro: 0,
        tce: 2
    };
    this.nmy = {
        cuz: new bku(4, 90, 0, 0),
        qin: [25, 65, 165, 265, 305],
        uxl: 30,
        mam: 30
    };
    this.rfc = {
        cuz: new bku(766, 90, 0, 0),
        qin: [25, 65, 165, 265, 305],
        uxl: 30,
        mam: 30
    };
    this.djr = {};
    this.plr = {};
    this.cth = {
        cuz: new bku(0, 0, 960, 600),
        rnw: new bku(800, 0, 160, 600),
        mpn: new bku(820, 400, 120, 120),
        ytv: new bku(),
        dgg: new bku(820, 50, 120, 120),
        qzz: new bku(820, 225, 120, 120),
        awl: {
            ezx: 0,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 0,
            udi: 16,
            dbr: 4
        }
    };
    this.zli = {
        cuz: new bku(0, 0, 960, 600),
        rnw: new bku(800, 0, 160, 600),
        zjk: {
            cuz: new bku(225, 520, 390, 70),
            fontSize: 20,
            kth: 14,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 2
        },
        yqj: {
            cuz: new bku(331, 216, 137, 187),
            ndg: new bku(5, 8, 56, 34),
            ada: new bku(37, 3, 98, 104),
            djs: new bku(33, 110, 72, 76),
            xsi: new bku(10, 42, 45, 45),
            gvq: new bku(5, 120, 126, 50),
            fontSize: 34,
            khm: 50,
            aro: 3,
            frj: 4
        },
        vfc: {
            cuz: new bku(380, 105, 380, 45),
            pcs: 2
        },
        awl: {
            ezx: 24,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            udi: 10,
            avi: 0,
            dbr: 4
        },
        display: {
            ozg: -18,
            eet: 16,
            ezx: 32,
            blp: 18,
            dbr: 3,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        hff: {
            ozg: 0,
            eet: 0,
            ezx: 16,
            blp: 0,
            dbr: 2,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        zcd: new bku(800, 0, 160, 22),
        css: new bku(800, 22, 160, 22),
        jvj: new bku(820, 325, 120, 120),
        odd: new bku(820, 125, 120, 120),
        gvq: new bku(655, 520, 140, 70),
        nsm: new bku(5, 520, 180, 70),
        mgw: new bku(73, 315, 91, 96),
        uqp: new bku(166, 315, 91, 96),
        csc: new bku(542, 315, 91, 96),
        gaw: new bku(635, 315, 91, 96),
        esi: new bku(73, 218, 184, 92),
        akp: new bku(542, 218, 184, 92),
        nad: new bku(65, 170, 200, 50),
        sea: new bku(509, 170, 250, 50),
        hhn: new bku(534, 410, 200, 50)
    };
    this.mmj = {
        cuz: new bku(0, 0, 960, 600),
        upy: new bku(0, 455, 800, 145),
        uyn: new bku(800, 0, 160, 600),
        zjk: {
            cuz: new bku(225, 520, 390, 70),
            kth: 14,
            fontSize: 24,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 2
        },
        win: {
            cuz: new bku(45, 458, 710, 25),
            fontSize: 20,
            kth: 4,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 0
        },
        jaf: {
            cuz: new bku(225, 520, 390, 70),
            ezb: 10,
            eet: 2,
            fontSize: 20,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        jxm: {
            ezx: 0,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 0,
            udi: 10,
            dbr: 4
        },
        gnl: {
            ezx: 0,
            twx: 20,
            cic: 0,
            eet: 0,
            wqg: -30,
            avi: 0,
            udi: 10,
            dbr: 4
        },
        psy: {
            ezx: 0,
            twx: 24,
            cic: 0,
            avi: 0,
            udi: 10,
            dbr: 6,
            eet: 0,
            wqg: -40
        },
        gfv: {
            ezx: 24,
            twx: 0,
            cic: 0,
            avi: 10,
            udi: 0,
            dbr: 4,
            eet: -2,
            wqg: 0
        },
        euc: {
            avi: 6,
            cic: 0,
            kth: -1,
            udi: 6,
            fontSize: 36,
            dbr: 3
        },
        display: {
            ozg: -18,
            eet: 16,
            ezx: 32,
            blp: 18,
            dbr: 3,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        yzm: {
            ozg: 0,
            eet: -40,
            ezx: 36,
            blp: 0,
            dbr: 3,
            nlq: 10,
            qch: 10,
            art: 0,
            exc: 0
        },
        hff: {
            ozg: 0,
            eet: 0,
            ezx: 16,
            blp: 0,
            dbr: 2,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        zcd: new bku(800, 0, 160, 22),
        css: new bku(800, 22, 160, 22),
        owf: new bku(5, 520, 180, 70),
        vtf: new bku(655, 520, 140, 70),
        gzr: new bku(660, 400, 130, 120),
        ocj: {
            zeq: new bku(805, 210, 150, 150),
            krz: new bku(655, 495, 140, 30),
            qin: new bku(),
            isd: new bku(),
            mpn: new bku(820, 400, 120, 120),
            yap: new bku(),
            oku: new bku(820, 50, 120, 120)
        },
        jkm: {
            zeq: new bku(815, 260, 140, 140),
            krz: new bku(655, 495, 140, 30),
            qin: new bku(),
            isd: new bku(),
            mpn: new bku(865, 50, 80, 80),
            yap: new bku(840, 140, 110, 110),
            oku: new bku(840, 410, 110, 110)
        },
        uvj: 60
    };
    this.mrw = {
        cuz: new bku(40, 90, 720, 360),
        lineWidth: 4,
        fqs: 5,
        dbr: 1,
        mzi: 136,
        buj: 120,
        fontSize: 40,
        unt: 10,
        zbc: 5,
        ghf: 100,
        xui: 96,
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
    this.quf = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390]
    ]
}
vbi.prototype = new lfm;

function fbj() {
    this.chd = false;
    this.fld = true;
    this.mli = true;
    this.bkx = {
        cuz: new bku(160, 0, 800, 600),
        edr: 0,
        kkk: 0
    };
    this.ggj = {
        cuz: new bku(0, 0, 1120, 600),
        kkk: 0,
        edr: 0
    };
    this.ekb = {
        cuz: new bku(200, 90, 136, 360),
        muh: new bku(40, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.pwk = {
        cuz: new bku(346, 90, 136, 360),
        muh: new bku(186, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.ssk = {
        cuz: new bku(492, 90, 136, 360),
        muh: new bku(332, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.pzc = {
        cuz: new bku(638, 90, 136, 360),
        muh: new bku(478, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.qde = {
        cuz: new bku(784, 90, 136, 360),
        muh: new bku(624, 90, 136, 360),
        eoj: 30,
        tlg: 30
    };
    this.oiv = {
        cuz: new bku(160, 0, 800, 86),
        fontSize: 50,
        cic: 0,
        kth: 6,
        aro: 0,
        tce: 2
    };
    this.hra = {
        cuz: new bku(160, 0, 800, 80),
        fontSize: 50,
        cic: 0,
        kth: 8,
        aro: 0,
        tce: 2
    };
    this.nmy = {
        cuz: new bku(164, 90, 0, 0),
        qin: [25, 65, 165, 265, 305],
        uxl: 30,
        mam: 30
    };
    this.rfc = {
        cuz: new bku(926, 90, 0, 0),
        qin: [25, 65, 165, 265, 305],
        uxl: 30,
        mam: 30
    };
    this.djr = {};
    this.plr = {};
    this.cth = {
        cuz: new bku(0, 0, 960, 600),
        rnw: new bku(0, 0, 160, 600),
        mpn: new bku(20, 400, 120, 120),
        ytv: new bku(),
        dgg: new bku(20, 50, 120, 120),
        qzz: new bku(20, 225, 120, 120),
        awl: {
            ezx: 0,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 0,
            udi: 16,
            dbr: 4
        }
    };
    this.zli = {
        cuz: new bku(0, 0, 960, 600),
        rnw: new bku(0, 0, 160, 600),
        zjk: {
            cuz: new bku(385, 520, 390, 70),
            fontSize: 20,
            kth: 14,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 2
        },
        yqj: {
            cuz: new bku(491, 216, 137, 187),
            ndg: new bku(5, 8, 56, 34),
            ada: new bku(37, 3, 98, 104),
            djs: new bku(33, 110, 72, 76),
            xsi: new bku(10, 42, 45, 45),
            gvq: new bku(5, 120, 126, 50),
            fontSize: 34,
            khm: 50,
            aro: 3,
            frj: 4
        },
        vfc: {
            cuz: new bku(540, 105, 380, 45),
            pcs: 2
        },
        awl: {
            ezx: 24,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            udi: 10,
            avi: 0,
            dbr: 4
        },
        display: {
            ozg: -18,
            eet: 16,
            ezx: 32,
            blp: 18,
            dbr: 3,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        hff: {
            ozg: 0,
            eet: 0,
            ezx: 16,
            blp: 0,
            dbr: 2,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        zcd: new bku(0, 0, 160, 22),
        css: new bku(0, 22, 160, 22),
        jvj: new bku(20, 325, 120, 120),
        odd: new bku(20, 125, 120, 120),
        gvq: new bku(815, 520, 140, 70),
        nsm: new bku(165, 520, 180, 70),
        mgw: new bku(233, 315, 91, 96),
        uqp: new bku(326, 315, 91, 96),
        csc: new bku(702, 315, 91, 96),
        gaw: new bku(795, 315, 91, 96),
        esi: new bku(233, 218, 184, 92),
        akp: new bku(702, 218, 184, 92),
        nad: new bku(225, 170, 200, 50),
        sea: new bku(669, 170, 250, 50),
        hhn: new bku(694, 410, 200, 50)
    };
    this.mmj = {
        cuz: new bku(0, 0, 960, 600),
        upy: new bku(160, 455, 800, 145),
        uyn: new bku(0, 0, 160, 600),
        zjk: {
            cuz: new bku(385, 520, 390, 70),
            kth: 14,
            fontSize: 24,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 2
        },
        win: {
            cuz: new bku(205, 458, 710, 25),
            fontSize: 20,
            kth: 4,
            avi: 3,
            fvy: 2,
            udi: 6,
            dbr: 0
        },
        jaf: {
            cuz: new bku(385, 520, 390, 70),
            ezb: 10,
            eet: 2,
            fontSize: 20,
            dbr: 2,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        jxm: {
            ezx: 0,
            twx: 0,
            cic: 0,
            eet: 0,
            wqg: 0,
            avi: 0,
            udi: 10,
            dbr: 4
        },
        gnl: {
            ezx: 0,
            twx: 20,
            cic: 0,
            eet: 0,
            wqg: -30,
            avi: 0,
            udi: 10,
            dbr: 4
        },
        psy: {
            ezx: 0,
            twx: 24,
            cic: 0,
            avi: 0,
            udi: 10,
            dbr: 6,
            eet: 0,
            wqg: -40
        },
        gfv: {
            ezx: 24,
            twx: 0,
            cic: 0,
            avi: 10,
            udi: 0,
            dbr: 4,
            eet: -2,
            wqg: 0
        },
        euc: {
            avi: 6,
            cic: 0,
            kth: -1,
            udi: 6,
            fontSize: 36,
            dbr: 3
        },
        display: {
            ozg: -18,
            eet: 16,
            ezx: 32,
            blp: 18,
            dbr: 3,
            nlq: 3,
            qch: 3,
            art: 3,
            exc: 3
        },
        yzm: {
            ozg: 0,
            eet: -40,
            ezx: 36,
            blp: 0,
            dbr: 3,
            nlq: 10,
            qch: 10,
            art: 0,
            exc: 0
        },
        hff: {
            ozg: 0,
            eet: 0,
            ezx: 16,
            blp: 0,
            dbr: 2,
            nlq: 0,
            qch: 0,
            art: 0,
            exc: 0
        },
        zcd: new bku(0, 0, 160, 22),
        css: new bku(0, 22, 160, 22),
        owf: new bku(165, 520, 180, 70),
        vtf: new bku(815, 520, 140, 70),
        gzr: new bku(820, 400, 130, 120),
        ocj: {
            zeq: new bku(5, 210, 150, 150),
            krz: new bku(815, 495, 140, 30),
            qin: new bku(),
            isd: new bku(),
            mpn: new bku(20, 400, 120, 120),
            yap: new bku(),
            oku: new bku(20, 50, 120, 120)
        },
        jkm: {
            zeq: new bku(5, 260, 140, 140),
            krz: new bku(815, 495, 140, 30),
            qin: new bku(),
            isd: new bku(),
            mpn: new bku(15, 50, 80, 80),
            yap: new bku(10, 140, 110, 110),
            oku: new bku(10, 410, 110, 110)
        },
        uvj: 60
    };
    this.mrw = {
        cuz: new bku(200, 90, 720, 360),
        lineWidth: 4,
        fqs: 5,
        dbr: 1,
        mzi: 136,
        buj: 120,
        fontSize: 40,
        unt: 10,
        zbc: 5,
        ghf: 100,
        xui: 96,
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
    this.quf = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390]
    ]
}
fbj.prototype = new ugz;

function zpt() {
    this.cth.win = {
        cuz: new bku(0, 0, 800, 600),
        fsm: new bku(),
        fontSize: 20,
        blp: 40,
        lineWidth: 1,
        ndg: [new bku(10, 425, 780, 42)]
    };
    this.cth.fqj = {
        cuz: new bku(0, 0, 800, 600),
        fsm: new bku(),
        fontSize: 16,
        fau: 30,
        blp: 40,
        ycv: 12,
        lineWidth: 1,
        dsy: new bku(20, 500, 760, 30),
        ndg: [],
        gvq: [new bku(352, 48, 175, 150), new bku(90, 43, 153, 122), new bku(625, 43, 153, 122), new bku(90, 203, 153, 122), new bku(625, 203, 153, 122), new bku(90, 363, 153, 122), new bku(625, 358, 153, 122), new bku(358, 363, 153, 122)]
    }
}
zpt.prototype = new zfs;

function mfz() {
    this.adp = true
}
mfz.prototype = new zpt;

function ttv() {
    this.cth.win = {
        cuz: new bku(0, 0, 800, 615),
        fsm: new bku(),
        fontSize: 20,
        blp: 40,
        lineWidth: 1,
        ndg: [new bku(10, 425, 780, 42)]
    };
    this.cth.fqj = {
        cuz: new bku(0, 0, 800, 615),
        fsm: new bku(),
        fontSize: 16,
        fau: 30,
        blp: 40,
        ycv: 12,
        lineWidth: 1,
        dsy: new bku(20, 500, 760, 30),
        ndg: [],
        gvq: [new bku(352, 48, 175, 150), new bku(90, 43, 153, 122), new bku(625, 43, 153, 122), new bku(90, 203, 153, 122), new bku(625, 203, 153, 122), new bku(90, 363, 153, 122), new bku(625, 358, 153, 122), new bku(358, 363, 153, 122)]
    };
    this.top.fqj = {
        cuz: new bku(0, 0, 800, 520),
        fsm: new bku(),
        fontSize: 16,
        fau: 30,
        blp: 40,
        ycv: 12,
        lineWidth: 1,
        dsy: new bku(20, 486, 760, 30),
        ndg: [],
        gvq: [new bku(352, 38, 175, 154), new bku(90, 32, 153, 124), new bku(625, 32, 153, 124), new bku(90, 192, 153, 124), new bku(625, 192, 153, 124), new bku(90, 352, 153, 124), new bku(625, 346, 153, 126), new bku(358, 352, 153, 124)]
    }
}
ttv.prototype = new usj;

function qsw() {
    this.cth.win = {
        cuz: new bku(0, 0, 800, 600),
        fsm: new bku(),
        fontSize: 20,
        blp: 40,
        lineWidth: 1,
        ndg: [new bku(10, 425, 780, 42)]
    };
    this.cth.fqj = {
        cuz: new bku(0, 0, 800, 600),
        fsm: new bku(),
        fontSize: 16,
        fau: 30,
        blp: 40,
        ycv: 12,
        lineWidth: 1,
        dsy: new bku(20, 500, 760, 30),
        ndg: [],
        gvq: [new bku(352, 48, 175, 150), new bku(90, 43, 153, 122), new bku(625, 43, 153, 122), new bku(90, 203, 153, 122), new bku(625, 203, 153, 122), new bku(90, 363, 153, 122), new bku(625, 358, 153, 122), new bku(358, 363, 153, 122)]
    }
}
qsw.prototype = new rhu;

function opr() {
    this.adp = true
}
opr.prototype = new qsw;

function dfi() {
    this.cth.win = {
        cuz: new bku(0, 0, 800, 600),
        fsm: new bku(),
        fontSize: 20,
        blp: 40,
        lineWidth: 1,
        ndg: [new bku(10, 425, 780, 42)]
    };
    this.cth.fqj = {
        cuz: new bku(0, 0, 800, 600),
        fsm: new bku(),
        fontSize: 16,
        fau: 30,
        blp: 40,
        ycv: 14,
        lineWidth: 1,
        dsy: new bku(0, 520, 800, 40),
        ndg: [],
        gvq: [new bku(352, 48, 175, 150), new bku(90, 43, 153, 122), new bku(625, 43, 153, 122), new bku(90, 203, 153, 122), new bku(625, 203, 153, 122), new bku(90, 363, 153, 122), new bku(625, 358, 153, 122), new bku(358, 363, 153, 122)]
    }
}
dfi.prototype = new vbi;

function mck() {
    this.cth.win = {
        cuz: new bku(160, 0, 800, 600),
        fsm: new bku(),
        fontSize: 20,
        blp: 40,
        lineWidth: 1,
        ndg: [new bku(10, 425, 780, 42)]
    };
    this.cth.fqj = {
        cuz: new bku(160, 0, 800, 600),
        fsm: new bku(),
        fontSize: 16,
        fau: 30,
        blp: 40,
        ycv: 14,
        lineWidth: 1,
        dsy: new bku(0, 520, 800, 40),
        ndg: [],
        gvq: [new bku(352, 48, 175, 150), new bku(90, 43, 153, 122), new bku(625, 43, 153, 122), new bku(90, 203, 153, 122), new bku(625, 203, 153, 122), new bku(90, 363, 153, 122), new bku(625, 358, 153, 122), new bku(358, 363, 153, 122)]
    }
}
mck.prototype = new fbj;
var bio = {
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
    uum: {
        etu: 0,
        rva: 1,
        hlw: 2,
        kwt: 3,
        rrs: 4,
        mxj: 5,
        gjc: 10,
        vua: 11,
        ueq: 12,
        lmj: 13,
        ixo: 14,
        tju: 15,
        fbn: 16
    },
    os: {
        lnj: 0,
        fdz: 1,
        epk: 2,
        elk: 3,
        cfd: 4
    },
    utg: {
        sbe: 1,
        jqu: 3,
        xod: 4,
        xvb: 5,
        syp: 7,
        jec: 8,
        zbs: 11,
        atg: 13,
        mxt: 14,
        uap: 6,
        lea: 9,
        czi: 10
    },
    hqm: {
        wxr: 1,
        plt: 2,
        jir: 4,
        zlw: 8,
        epg: 16,
        kow: 32
    },
    una: {
        prn: 1,
        puu: 2,
        ixf: 3,
        ttz: 4,
        wro: 5,
        deu: 6,
        gfn: 7,
        syl: 94,
        nev: 95,
        cqa: 96,
        pdp: 97,
        qod: 98,
        zgh: 99,
        roulette: {
            jhx: 2,
            lni: 9,
            rih: 10
        }
    },
    ui: {
        ygc: "minimal",
        azw: "modern",
        xod: "classic"
    },
    hvg: {
        dxh: "auto",
        wms: "left",
        fod: "right"
    },
    aaa: {
        qqg: 0,
        ihx: 1,
        ocl: 2,
        pkf: 3,
        htt: 4
    },
    wdl: {
        kcm: {
            yux: "ji",
            otr: "jv",
            kps: "jh"
        }
    },
    ngv: {
        sjf: {
            gsm: 1,
            bob: 2
        },
        rxz: {
            efn: 1,
            lvo: 2,
            zrl: 3
        }
    }
};
bio.qja = (function () {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += bio.hqm.wxr
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += bio.hqm.plt
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += bio.hqm.jir
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += bio.hqm.jir
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += bio.hqm.zlw
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.vdn = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function () {
                var e = this.vdn();
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
            window.mxx = window.requestAnimationFrame;
            window.uvn = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.mxx; ++a) {
            window.mxx = window[g[a] + "RequestAnimationFrame"];
            window.uvn = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.mxx || !window.uvn) {
            window.mxx = function (m, j) {
                var e = new Date().getTime();
                var k = Math.max(0, 16 - (e - d));
                var l = window.setTimeout(function () {
                    m(e + k)
                }, k);
                d = e + k;
                return l
            }
        }
        if (!window.uvn) {
            window.uvn = function (e) {
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
        console.error(c.una)
    }
    return f
})();

function uyi() {
    var a = {};
    this.mhw = 1;
    this.rct = 1;
    this.flx = 0.6;
    this.sgu = 0.4;
    this.yfy = function () {};
    this.vvk = function (b, c) {
        a[b] = c
    };
    this.xwg = function (b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.mhw
        }
    }
}

function uwl() {
    this.audio = {
        dye: 65,
        cxx: -1,
        value: "A",
        mrg: null
    };
    this.iua = {
        dye: 70,
        cxx: 122,
        value: "F",
        mrg: "F11"
    };
    this.vfc = {
        dye: 72,
        cxx: -1,
        value: "H",
        mrg: null
    };
    this.mik = {
        dye: 83,
        cxx: -1,
        value: "S",
        mrg: null
    };
    this.itf = {
        dye: 68,
        cxx: -1,
        value: "D",
        mrg: null
    };
    this.ok = {
        dye: 13,
        cxx: -1,
        value: "OK",
        mrg: null
    };
    this.cfz = [this.audio, this.iua, this.vfc, this.mik, this.itf, this.ok]
}

function iek() {
    var q = this;
    this.ion = false;
    this.lwi = null;
    this.zua = false;
    this.knp = false;
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
    this.yfy = function () {
        this.mej();
        this.jfe();
        this.zua = false;
        this.knp = false
    };
    this.mej = function () {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.lwi = webAudioEngine.createGain();
            this.lwi.connect(webAudioEngine.destination);
            this.ion = true
        } catch (r) {
            this.ion = false
        }
    };
    this.jfe = function () {
        n = bio.olq.tuc()
    };
    this.ryk = function (r) {
        m = r
    };
    this.vmp = function (r) {
        c = r
    };
    this.faj = function (r) {
        o = r
    };
    this.qhj = function (v, u, r, s) {
        var t = new fyr(v);
        t.yfy(this.ion, u, r, m.xwg(v));
        j[v] = t;
        l.push(t);
        d.push({
            mnq: t,
            jdv: s,
            ial: q.alb,
            kne: n
        })
    };
    this.vrr = function (t, s) {
        var r = new Image();
        f[t] = r;
        d.push({
            mnq: r,
            jdv: s,
            ial: null
        })
    };
    this.ack = function (s, r) {
        d.unshift({
            mnq: null,
            jdv: s,
            ial: q.kqk,
            put: r
        })
    };
    this.gzj = function () {
        p = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            q.zwo(d.shift())
        }
    };
    this.start = function () {
        if (!q.zua) {
            return
        }
        q.zua = false;
        p = false;
        g = d.length;
        b = 0;
        k = 1;
        for (var s = 0; s < k && d.length > 0; s++) {
            a.push(d.shift())
        }
        for (var r = 0; r < a.length; r++) {
            q.zwo(a.shift())
        }
    };
    this.brf = function () {
        b++;
        if (q.vga()) {
            q.zua = true;
            bio.yqr.qqy()
        }
    };
    this.epm = function () {
        q.usy()
    };
    this.zdn = function () {
        q.knp = true;
        q.usy()
    };
    this.usy = function () {
        b++;
        q.cak();
        if (q.vga()) {
            q.wjk()
        } else {
            q.aqw()
        }
    };
    this.cak = function () {
        var r = bio.yqr.hfo.brx("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (r) {
                r.jvb(e)
            }
        }
    };
    this.wjk = function () {
        var t = bio.yqr.hfo.brx("loading");
        if (q.knp) {
            bio.yqr.kup(bio.yqr.language.ynl);
            var s = confirm(bio.yqr.language.knf);
            if (s == true) {
                bio.yqr.ujp = false;
                q.glc();
                bio.yqr.wrk()
            } else {
                bio.yqr.sxd({
                    type: "gameDataLoaded",
                    sender: bio.yqr.rmd,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                });
                setTimeout(bio.yqr.psf, 1000)
            }
        } else {
            if (!bio.yqr.zii) {
                e = 100;
                if (t) {
                    t.jvb(e)
                }
                if (c === true) {
                    if (o === true) {
                        t.jer((bio.yqr.dfx() === true) ? bio.yqr.language.ekz : bio.yqr.language.het, bio.yqr.fcy.uxh("device_info"))
                    } else {
                        t.jer(bio.yqr.language.wvq, null)
                    }
                } else {
                    setTimeout(bio.yqr.wrk, 200)
                }
            }
        }
    };
    this.erx = function () {
        return e
    };
    this.aqw = function () {
        if (d.length > 0) {
            a.push(d.shift());
            if (k === 1 && (a[0].mnq instanceof Image || a[0].mnq instanceof fyr)) {
                k = 30;
                for (var r = 0; r < k && d.length > 0; r++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            q.zwo(a.shift())
        }
    };
    this.vga = function () {
        return (g > 0 && b == g)
    };
    this.zwo = function (r) {
        if (r.mnq instanceof Image) {
            if (p === true) {
                this.wut(r.mnq, r.jdv)
            } else {
                this.asu(r.mnq, r.jdv)
            }
        } else {
            if (r.mnq instanceof fyr) {
                this.ain(r.mnq, r.jdv, r.ial, r.kne)
            } else {
                this.zcv(r.jdv, r.put, r.ial)
            }
        }
    };
    this.wut = function (s, r) {
        s.onload = function () {
            bio.yqr.fcy.brf()
        };
        s.onerror = function () {
            console.error("can not load image " + r)
        };
        s.src = r + "?v=" + bio.yqr.rqm
    };
    this.asu = function (s, r) {
        s.onload = function () {
            bio.yqr.fcy.epm()
        };
        s.onerror = function () {
            console.error("can not load image " + r);
            bio.yqr.kup(bio.yqr.language.qzr);
            setTimeout(bio.yqr.psf, 3000)
        };
        s.src = r + "?v=" + bio.yqr.rqm
    };
    this.ain = function (s, t, u, r) {
        s.load(t, u, r)
    };
    this.zcv = function (u, r, v) {
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
            bio.yqr.kup(bio.yqr.language.qzr);
            setTimeout(bio.yqr.psf, 3000)
        };
        try {
            s.send()
        } catch (t) {
            console.error("can not load from " + u + r);
            bio.yqr.kup(bio.yqr.language.qzr);
            setTimeout(bio.yqr.psf, 3000)
        }
    };
    this.alb = function (s, r) {
        j[s].fir = r
    };
    this.kqk = function (t, s) {
        var r = new Image();
        r.onload = function () {
            q.yiv(r, s.data)
        };
        r.onerror = function () {
            console.error("can not load image " + t + s.src);
            bio.yqr.kup(bio.yqr.language.qzr);
            setTimeout(bio.yqr.psf, 3000)
        };
        r.src = t + s.src + "?v=" + bio.yqr.rqm
    };
    this.yiv = function (t, w) {
        var u = null,
            s = null;
        for (var v = 0, r = w.length; v < r; v++) {
            u = document.createElement("canvas");
            u.width = w[v].rect.w;
            u.height = w[v].rect.h;
            s = u.getContext("2d");
            s.drawImage(t, w[v].rect.x, w[v].rect.y, w[v].rect.w, w[v].rect.h, 0, 0, w[v].rect.w, w[v].rect.h);
            q.wbz(w[v].id, u)
        }
        bio.yqr.fcy.epm()
    };
    this.wkz = function (r) {
        if (j && j[r]) {
            return j[r]
        } else {}
        return null
    };
    this.wbz = function (s, r) {
        if (r && !f[s]) {
            f[s] = r
        } else {}
        return null
    };
    this.uxh = function (r) {
        if (f[r]) {
            return f[r]
        } else {}
        return null
    };
    this.nte = function (r) {
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
    this.tik = function (r) {
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
    this.lgu = function (s, r) {
        if (j && j[s]) {
            j[s].play(r)
        } else {}
    };
    this.aee = function (r) {
        if (j && j[r]) {
            j[r].stop()
        } else {}
    };
    this.wub = function (s, r) {
        if (j && j[s]) {
            j[s].dsn(r)
        } else {}
    };
    this.hto = function (u, s, t, r) {
        r = (r != null && r === true);
        if (j && j[u]) {
            j[u].ivd(m.xwg(u) * s, t, r)
        }
    };
    this.gcu = function (r) {
        if (j && j[r]) {
            return j[r].etm()
        }
        return 0
    };
    this.kwc = function (r) {
        if (this.ion) {
            this.lwi.gain.setValueAtTime(r, webAudioEngine.currentTime)
        }
    };
    this.msp = function (s) {
        if (this.ion) {
            this.lwi.gain.setValueAtTime((s) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (l) {
                for (var r = 0; r < l.length; r++) {
                    l[r].dsn(s)
                }
            }
        }
    };
    this.glc = function () {
        if (l) {
            for (var r = 0; r < l.length; r++) {
                l[r].clear()
            }
        }
        l = null;
        j = null
    }
}

function hcn() {
    this.xyp = {};
    this.ewf = {};
    this.yzw = [];
    this.yfy = function () {
        this.xyp = {};
        this.ewf = {};
        this.yzw = []
    };
    this.mnm = function (b) {
        this.xyp[b] = b
    };
    this.roh = function (f, e, d) {
        this.ewf[f] = e;
        this.ewf[f].wzq = [];
        if (d && this.xyp) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.xyp[d[c]]) {
                    this.ewf[f].wzq.push(d[c])
                } else {}
            }
        }
        this.yzw.push(this.ewf[f])
    };
    this.tmn = function () {
        var c = [];
        for (var d = 0, b = this.yzw.length; d < b; d++) {
            if (this.yzw[d] != null) {
                c.push(this.yzw[d])
            }
        }
        return c
    };
    this.brx = function (b) {
        if (this.ewf && this.ewf[b]) {
            return this.ewf[b]
        }
        return null
    };
    this.vla = function (g) {
        if (this.xyp && this.xyp[g]) {
            var d = [];
            for (var f = 0, b = this.yzw.length; f < b; f++) {
                for (var e = 0, c = this.yzw[f].wzq.length; e < c; e++) {
                    if (this.yzw[f].wzq[e] == g) {
                        d.push(this.yzw[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.oyp = function () {
        return this.xyp
    };
    this.tnp = function (e) {
        var d = -1;
        if (this.ewf && this.ewf[e]) {
            for (var c = 0, b = this.yzw.length; c < b; c++) {
                if (this.yzw[c] == this.ewf[e]) {
                    d = c;
                    this.ewf[e] = null
                }
            }
        }
        if (d >= 0) {
            this.yzw.splice(d, 1)
        }
    };
    this.erd = function (f) {
        if (this.xyp && this.xyp[f]) {
            this.xyp[f] = null;
            for (var e = 0, b = this.yzw.length; e < b; e++) {
                for (var d = 0, c = this.yzw[e].wzq.length; d < c; d++) {
                    if (this.yzw[e].wzq[d] == f) {
                        this.yzw[e].wzq.splice(d, 1)
                    }
                }
            }
        }
    };
    this.tvc = function (e, d, c, b) {
        return a(this.brx(e), d, c, b)
    };
    this.kpw = function (f, d, c) {
        for (var e = 0, b = this.yzw.length; e < b; e++) {
            a(this.yzw[e], f, d, c)
        }
    };
    this.zwf = function (k, l, f, e) {
        if (this.xyp && this.xyp[k]) {
            for (var g = 0, b = this.yzw.length; g < b; g++) {
                for (var d = 0, c = this.yzw[g].wzq.length; d < c; d++) {
                    if (this.yzw[g].wzq[d] == k) {
                        a(this.yzw[g], l, f, e)
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

function fyr(b) {
    var a = this;
    this.yjq = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.msu = false;
    this.fir = null;
    this.tmx = null;
    this.sil = 0;
    this.ihg = 0;
    this.dwx = 0;
    this.zoy = 0;
    this.ldn = 30000;
    this.fpw = "";
    this.hok = "";
    this.iii = "";
    this.eat = null;
    this.xml = 1;
    this.sjt = 0;
    this.vjg = -1;
    this.apb = 0;
    this.iqo = 0;
    this.liv = false;
    this.yfy = function (c, f, d, e) {
        this.msu = c;
        if (e) {
            this.xml = e;
            this.volume = e
        }
        if (f) {
            this.yjq = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function (c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.msu) {
            clearTimeout(this.vjg);
            if (this.fir) {
                this.volume = (this.muted === true) ? 0 : bio.pql.value40 * this.xml;
                this.liv = false;
                this.tmx = webAudioEngine.createBufferSource();
                this.tmx.buffer = this.fir;
                this.tmx.loop = this.loop;
                this.sil = webAudioEngine.createGain();
                this.sil.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.tmx.connect(this.sil);
                this.sil.connect(bio.yqr.fcy.lwi);
                this.tmx.start(0, c);
                this.sjt = webAudioEngine.currentTime;
                if (this.yjq) {
                    this.ihg = setTimeout(a.yjq, a.fir.duration * 1000)
                }
            }
        } else {
            if (this.tmx) {
                if (this.loop) {
                    if (bio.olq.nqd != bio.uum.rrs && bio.olq.nqd != bio.uum.ixo) {
                        this.dwx = setInterval(a.eut, a.tmx.duration * 1000)
                    }
                }
                this.tmx.currentTime = 0;
                this.tmx.play()
            }
        }
    };
    this.eut = function () {
        if (!a.tmx.paused || (bio.olq.nqd != bio.uum.hlw && bio.olq.nqd != bio.uum.ueq)) {
            a.tmx.currentTime = 0
        }
    };
    this.stop = function () {
        if (a) {
            if (a.msu) {
                a.sjt = 0;
                if (a.tmx) {
                    a.tmx.stop(0);
                    a.tmx = null
                }
                clearTimeout(a.ihg);
                if (a.vjg >= 0) {
                    clearTimeout(a.vjg);
                    a.vjg = -1
                }
            } else {
                if (a.tmx) {
                    a.tmx.currentTime = 0;
                    a.tmx.pause();
                    clearInterval(a.dwx);
                    if (a.vjg >= 0) {
                        clearTimeout(a.vjg);
                        a.vjg = -1
                    }
                }
            }
        }
    };
    this.load = function (e, c, d) {
        this.fpw = d[0];
        if (d.length >= 2) {
            this.hok = d[1];
            this.iii = e;
            this.eat = c
        }
        e += this.fpw + "?v=" + bio.yqr.rqm;
        if (this.msu) {
            this.nmq(e, c)
        } else {
            this.ghq(e)
        }
    };
    this.kjk = function () {
        if (this.msu) {
            this.nmq(this.iii + this.hok + "?v=" + bio.yqr.rqm, this.eat)
        }
    };
    this.ghq = function (c) {
        this.tmx = new Audio();
        this.zoy = setTimeout(function () {
            console.error("can not load audio " + c);
            bio.yqr.fcy.zdn()
        }, this.ldn);
        this.tmx.addEventListener("canplaythrough", function () {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.zoy);
            bio.yqr.fcy.epm();
            a.jgz()
        }, false);
        this.tmx.addEventListener("error", function () {
            clearTimeout(a.zoy);
            console.error("can not load audio " + c);
            bio.yqr.fcy.zdn()
        }, false);
        this.tmx.volume = bio.pql.value40 * this.volume;
        this.tmx.src = c;
        this.tmx.load()
    };
    this.nmq = function (f, g) {
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
                bio.yqr.fcy.epm()
            }, function () {
                a.awp("can not decode audio ", f)
            })
        };
        c.onerror = function () {
            a.awp("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.awp("can not load audio from ", f)
        }
    };
    this.awp = function (d, c) {
        console.error(d + c);
        if (a.hok != "" && c.indexOf(a.hok) < 0) {
            a.kjk()
        } else {
            bio.yqr.fcy.zdn()
        }
    };
    this.ofy = function (c) {
        this.yjq = c;
        this.jgz()
    };
    this.jgz = function () {
        if (!this.msu) {
            if (this.yjq) {
                if (this.tmx) {
                    this.tmx.addEventListener("ended", function () {
                        a.yjq()
                    }, false)
                }
            }
            if (bio.olq.nqd == bio.uum.rrs || bio.olq.nqd == bio.uum.ixo) {
                if (this.loop) {
                    if (this.tmx) {
                        this.tmx.addEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.rid = function () {
        if (!this.gbq) {
            if (this.yjq) {
                if (this.tmx) {
                    this.tmx.removeEventListener("ended", function () {
                        a.yjq()
                    }, false)
                }
            }
            if (bio.olq.nqd == bio.uum.rrs || bio.olq.nqd == bio.uum.ixo) {
                if (this.loop) {
                    if (this.tmx) {
                        this.tmx.removeEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.ivd = function (d, e, c) {
        if (this.msu === true && this.sil) {
            this.volume = (this.muted === true) ? 0 : bio.pql.value40 * d * this.xml;
            if (e > 0) {
                this.sil.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.sil.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.vjg = setTimeout(this.stop, e)
            }
        } else {
            if (!this.msu && c === true) {
                this.vjg = setTimeout(this.stop, e)
            }
        }
    };
    this.dsn = function (c) {
        this.muted = c;
        if (!this.msu) {
            if (this.tmx && this.tmx.readyState > 0) {
                this.tmx.muted = c
            }
        } else {
            if (this.sil) {
                this.sil.gain.linearRampToValueAtTime((this.muted === true) ? 0 : bio.pql.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function () {
        if (this.msu) {
            if (this.tmx) {
                this.tmx.stop(0);
                clearTimeout(this.ihg);
                this.tmx = null
            }
        } else {
            if (this.tmx && this.tmx.readyState > 0) {
                this.tmx.currentTime = 0;
                this.tmx.pause();
                if (this.yjq) {
                    this.rid(this.yjq)
                }
                this.tmx = null
            }
        }
    };
    this.etm = function () {
        if (this.msu && this.sjt > 0) {
            return (webAudioEngine.currentTime - this.sjt) % this.fir.duration
        }
        return 0
    }
}

function xfl() {
    var a = null;
    this.qqz = "";
    var b = null;
    this.connect = function (c) {
        a = this;
        this.qqz = c;
        b = new WebSocket(this.qqz);
        b.onopen = function (d) {
            a.tje(d)
        };
        b.onclose = function (d) {
            a.wfq(d)
        };
        b.onmessage = function (d) {
            a.oce(d)
        };
        b.onerror = function (d) {
            a.fdq(d)
        }
    };
    this.ike = function (c) {};
    this.mox = function (c) {
        b.send(c)
    };
    this.tje = function (c) {
        this.mox("A/u25vlt")
    };
    this.wfq = function (c) {};
    this.oce = function (c) {
        this.ike(c.data)
    };
    this.fdq = function (c) {}
}

function ysr() {
    var b = null;
    this.svb = null;
    this.qja = 0;
    this.apw = -1;
    this.una = -1;
    this.afx = -1;
    this.acg = 0;
    this.qqz = "";
    this.ocn = "";
    this.tcd = "";
    this.fhx = "";
    this.rmd = "";
    this.rqm = "";
    this.gxg = "";
    this.vye = "";
    this.hqk = [];
    this.xmm = [];
    this.iax = [];
    this.fzg = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.yfy = function (j) {
        this.svb = j;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.qqz);
        c.onopen = function (k) {
            b.tje(k)
        };
        c.onclose = function (k) {
            b.wfq(k)
        };
        c.onmessage = function (k) {
							
				
			var tmpA=k.data.split("_");
			
			if(tmpA[1]!=undefined){
			gameController.reels=JSON.parse(tmpA[1]);
			}
			k.data=tmpA[0];
            b.oce(k)
        };
        c.onerror = function (k) {
            b.fdq(k)
        }
    };
    this.jri = function (j) {
        var k = parseInt(j.charAt(this.acg), 16);
        this.acg++;
        return k
    };
    this.nma = function (j) {
        var l = 0;
        var k = j.charAt(this.acg);
        k += j.charAt(this.acg + 1);
        this.acg += 2;
        l = parseInt(k, 16);
        return l
    };
    this.erh = function (m) {
        var j = this.pcd(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.acg), 16);
            this.acg += 1
        }
        return n
    };
    this.pcd = function (n) {
        var m = 0;
        var j = parseInt(n.charAt(this.acg), 16);
        this.acg++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.acg);
            this.acg += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.kis = function (j) {
        var k = "";
        if (this.acg < j.length) {
            k = j.substring(this.acg, j.length)
        }
        return k
    };
    this.ike = function (j) {};
    this.gck = function (o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === bio.wdl.kcm.yux || u === bio.wdl.kcm.otr) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === bio.wdl.kcm.yux && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.hqk[p] = {
                                llo: t[0],
                                value: Number(t[1]),
                                jsb: t[2]
                            };
                            if (t.length >= 5) {
                                this.hqk[p].yfe = t[3];
                                this.hqk[p].ina = t[4]
                            }
                        }
                    } else {
                        if (u === bio.wdl.kcm.otr && t.length >= 2) {
                            for (var p = 0, r = this.hqk.length; p < r; p++) {
                                if (this.hqk[p].llo === t[0]) {
                                    this.hqk[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === bio.wdl.kcm.yux) {
                    s = [];
                    for (var p = 0, r = this.hqk.length; p < r; p++) {
                        s.push({
                            llo: this.hqk[p].llo,
                            value: (Number)(this.hqk[p].llo.split("_")[1])
                        })
                    }
                    s.sort(function (v, j) {
                        return v.value - j.value
                    });
                    for (var p = 0, r = this.hqk.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.hqk[p].llo == s[n].llo) {
                                this.hqk[p].cuz = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === bio.wdl.kcm.otr) {
                        this.svb.iwq(this.hqk)
                    }
                }
            } else {
                if (u === bio.wdl.kcm.kps) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            llo: t[0],
                            value: Number(t[1]),
                            cfy: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.ocn = t[3];
                            q.yem = t[4]
                        }
                        this.svb.vpn(q)
                    }
                }
            }
        }
    };
    this.close = function () {
        g = true;
        if (c.readyState >= 2) {
            b.svb.jpa.euh()
        } else {
            b.mox("A/u260");
            if (bio.pql.value66 > 0) {
                setTimeout(b.lvb, bio.pql.value66)
            }
        }
    };
    this.axn = function (j) {
        if (this.svb.jpa.rqg) {
            setTimeout(function () {
                window.location.reload()
            }, j)
        } else {
            this.svb.jpa.diq(e);
            setTimeout(function () {
                if (e < bio.pql.value46) {
                    b.svb.jpa.connect();
                    e++
                } else {
                    b.svb.jpa.abi()
                }
            }, j)
        }
    };
    this.tba = function () {
        return g
    };
    this.ahr = function () {
        g = true;
        d = true;
        this.mox("A/u260");
        if (bio.pql.value66 > 0) {
            setTimeout(this.lvb, bio.pql.value66)
        }
    };
    this.utk = function () {
        g = true;
        f = true;
        this.mox("A/u260");
        if (bio.pql.value66 > 0) {
            setTimeout(this.lvb, bio.pql.value66)
        }
    };
    this.tje = function (j) {
        var k = -(new Date().getTimezoneOffset() / 60),
            n = window.navigator.userLanguage || window.navigator.language,
            m = (bio.yqr) ? bio.olq.nqd + "|" + bio.yqr.igx + "|" + k + "|" + n : "",
            l = (bio.yqr && bio.yqr.psz > 0) ? "," + bio.yqr.psz : "";
        a = false;
        this.svb.ziy();
        this.mox("A/u25" + this.ocn + "," + this.tcd + "," + this.fhx + "," + this.rmd + "," + this.rqm + "," + this.gxg + "," + this.vye + "," + m + l)
    };
    this.wfq = function (j) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (bio.olq.nqd == bio.uum.etu || bio.olq.nqd == bio.uum.gjc) {
                setTimeout(b.fwu, 500)
            } else {
                this.svb.wfj()
            }
        } else {
            if (d) {
                if (bio.pql.value13 == true) {
                    this.svb.jpa.mbu()
                } else {
                    this.svb.jpa.gud()
                }
            } else {
                if (f) {
                    this.svb.jpa.ect()
                } else {
                    this.svb.jpa.psf()
                }
            }
        }
    };
    this.oce = function (j) {
        this.ike(j.data)
    };
    this.fdq = function (j) {};
    this.mox = function (j) {
        if (c.readyState >= 2) {
            this.wfq()
        }
        this.qja = 0;
          var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"Hot7AM"}';j=tmpPar;
        c.send(j)
    };
    this.fwu = function () {
        b.svb.wfj()
    };
    this.lvb = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.wfq()
    }
}

function dmi() {
    this.jpa = null;
    this.qlj = null;
    this.qqz = "";
    this.ocn = "";
    this.tcd = "";
    this.fhx = "";
    this.rmd = "";
    this.gxg = "";
    this.vye = "";
    this.ziy = function () {};
    this.oce = function (a) {
        this.jpa.eln(a)
    };
    this.vsa = function () {};
    this.wfj = function () {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.jpa != null && !this.qlj.tba()) {
            this.jpa.ezc("Can not connect to gaming server!", true)
        }
    };
    this.fdq = function (a) {
        if (this.qlj.qja == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.jpa != null) {
            this.jpa.sxd({
                type: "gameDataLoaded",
                sender: this.jpa.rmd,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    success: false
                }
            });
            this.jpa.ezc(a, true)
        }
    };
    this.axn = function (a) {
        this.qlj.axn(a)
    };
    this.hir = function () {
        this.jpa.sqf(this.qlj.cfy)
    };
    this.iwq = function (a) {
        this.jpa.iwq(a)
    };
    this.vpn = function (a) {
        this.jpa.vpn(a)
    };
    this.hzi = function () {};
    this.ckr = function () {
        this.jpa.ckr()
    };
    this.kjr = function () {
        this.jpa.kjr()
    }
}

function eoa() {
    var b = null;
    this.jpa = null;
    this.qqz = "";
    this.ocn = "";
    this.tcd = "";
    this.fhx = "";
    this.rmd = "";
    this.rqm = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.bzc = true;
    this.jdp = false;
    this.nkh = false;
    this.acg = 0;
    this.tck = 0;
    this.wfy = 0;
    this.xub = 0;
    this.bxq = 0;
    this.yfy = function (f, g) {
        this.qqz = g;
        this.jpa = f;
        this.nkh = false;
        return this
    };
    this.connect = function (g, k, j, l, f, m) {
        b = this;
        e = false;
        a = false;
        this.ocn = k;
        this.tcd = j;
        this.fhx = l;
        this.rmd = g;
        this.rqm = f;
        this.bzc = true;
        this.jdp = m;
        c = new WebSocket(this.qqz);
        c.onopen = function (n) {
            b.tje(n)
        };
        c.onclose = function (n) {
            b.wfq(n)
        };
        c.onmessage = function (n) {
            b.oce(n)
        };
        c.onerror = function (n) {
            b.fdq(n)
        }
    };
    this.jri = function (f) {
        var g = parseInt(f.charAt(this.acg), 16);
        this.acg++;
        return g
    };
    this.pcd = function (k) {
        var j = 0;
        var f = parseInt(k.charAt(this.acg), 16);
        this.acg++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.acg);
            this.acg += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.ike = function (j) {
        var l = this.jpa.hfo.brx("stats");
        if (j != null && j != "null" && j) {
            if (j == "010101010101010") {
                this.rfl()
            } else {
                this.acg = 0;
                this.afx = this.jri(j);
                if (this.afx == 0) {
                    var k = [];
                    k[0] = this.pcd(j);
                    k[1] = this.pcd(j);
                    k[2] = this.pcd(j);
                    k[3] = this.pcd(j);
                    k[4] = this.pcd(j);
                    k[5] = this.pcd(j);
                    k[6] = this.pcd(j);
                    if (bio.pql.value36) {
                        this.wfy = k[0];
                        this.xub = k[1];
                        this.bxq = k[2]
                    } else {
                        if (bio.pql.value37) {
                            var g = bio.pql.value39;
                            var f = k[4];
                            f = (g <= f) ? (this.jdp) ? 100 : g * 60000 : (g - f) * 60000;
                            this.tck = k[3] * 60000;
                            this.xub = k[5];
                            this.bxq = k[6];
                            this.jpa.ndf(f);
                            if (!this.nkh) {
                                this.nkh = true;
                                this.jpa.xyf(k[3] * 60000)
                            }
                            if (this.jdp) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.jdp) {
                        if (l) {
                            l.ful(this.wfy, this.xub, this.bxq, this.tck)
                        }
                    }
                } else {
                    console.error("Statistic error: " + j);
                    if (!this.jdp) {
                        if (l) {
                            l.ful(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.rfl = function () {
        this.mox("A/u270," + this.rmd)
    };
    this.mox = function (f) {
        if (c && !e) {
            this.qja = 0;
            c.send(f)
        }
    };
    this.close = function (f) {
        this.bzc = f;
        if (c && c.readyState >= 2) {
            if (this.jpa && this.bzc) {
                this.jpa.bzc()
            }
        } else {
            this.mox("A/u260");
            if (bio.pql.value66 > 0) {
                setTimeout(this.lvb, bio.pql.value66)
            }
        }
        e = true
    };
    this.tje = function (f) {
        a = false;
        this.mox("A/u25" + this.ocn + "," + this.tcd + "," + this.fhx + "," + d + "," + this.rqm)
    };
    this.wfq = function (f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.jdp) {
                if (this.jpa && this.bzc) {
                    this.jpa.bzc()
                }
            }
        }
    };
    this.oce = function (f) {
        this.ike(f.data)
    };
    this.fdq = function (f) {};
    this.lvb = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.wfq()
    }
}

function bku(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.ubc = function () {
        return this.x + this.width
    };
    this.jvo = function () {
        return this.y + this.height
    };
    this.ibq = function () {
        return this.x + this.width / 2
    };
    this.foa = function () {
        return this.y + this.height / 2
    };
    this.jak = function (e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.jww = function (f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function kcd() {
    this.nqd = -1;
    this.uyk = -1;
    this.uoz = false;
    this.cni = false;
    this.iza = false;
    this.qyr = false;
    this.wud = false;
    this.fas = false;
    this.mdl = false;
    this.mwr = true;
    this.nuy = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.uoz = true;
            this.iza = true;
            this.nqd = bio.uum.hlw
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.iza = true
                }
                this.nqd = bio.uum.mxj
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.nqd = bio.uum.ueq;
                        this.iza = true
                    } else {
                        this.nqd = bio.uum.hlw
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.nqd = bio.uum.fbn;
                                this.iza = true
                            } else {
                                this.nqd = bio.uum.vua;
                                this.iza = true;
                                this.qyr = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.wud = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.fas = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.nqd = bio.uum.rva
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.nqd = bio.uum.kwt
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.nqd = bio.uum.tju;
                                    this.iza = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.nqd = bio.uum.ixo;
                                        this.iza = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.nqd = bio.uum.ixo;
                                            this.iza = true
                                        } else {
                                            this.nqd = bio.uum.rrs
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.nqd = bio.uum.vua;
                                    this.cni = true;
                                    this.iza = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.nqd = bio.uum.vua;
                                        this.cni = true;
                                        this.iza = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.nqd = bio.uum.gjc;
                                            this.iza = true
                                        } else {
                                            this.nqd = bio.uum.etu
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
    this.pkz = function () {
        var a = navigator.language.split("")[0];
        return a
    };
    this.yhc = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.uyk = bio.os.lnj;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.mdl = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.uyk = bio.os.elk
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.uyk = bio.os.epk
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.uyk = bio.os.cfd;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.mwr = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.uyk = bio.os.fdz
                        }
                    }
                }
            }
        }
    };
    this.swr = function () {
        return this.fas
    };
    this.odk = function () {
        return (this.wud && !this.fas)
    };
    this.fzj = function () {
        return this.qyr
    };
    this.jpi = function () {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.bqr = function () {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.cwi = function () {
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
    this.mdi = function () {
        return (this.okg() === true)
    };
    this.okg = function () {
        if ((screen.width <= bio.pql.value73.w && screen.height <= bio.pql.value73.h) || (screen.height <= bio.pql.value73.w && screen.width <= bio.pql.value73.h)) {
            return true
        }
        return false
    };
    this.mbd = function (j, k, l, o, e, b, f, m, n, a, d, g) {
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
    this.zri = function (b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.vel = function () {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.fjj = function () {
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
    this.nzo = function () {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.mop = function (b) {
        try {
            if (this.nzo() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.uih = function () {
        try {
            if (this.nzo() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.ssc = function () {
        return false
    };
    this.sxd = function (a) {
        if (bio.pql.value77 !== undefined && bio.pql.value77) {
            if (a !== null && a !== undefined) {
                window.parent.postMessage(a, "*")
            }
        }
    };
    this.xou = function (c, a) {
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
    this.tuc = function () {
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
    this.fwv = function (r, p, f, m, l, a, q, d, s, g, o, k) {
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
    this.yzj = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.idi = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.tae = function (r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.ope = function (n, g, d, a, k, b, l, m, f) {
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
    this.kbi = function (o, j, f, a, l, c, n, b, m, g, p) {
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
    this.sai = function (p, d, l, k, o, m, f, q, r, g, n, c) {
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
    this.gpz = function (r, k, g, b, n, q, m, d, f, p, a, o, j, s) {
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
    this.zuu = function (n, g, d, a, k, l, b, m, f, o) {
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
    this.pih = function (l, g, d, c, j, a, k, f, m) {
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

function idn() {
    this.parent = null;
    this.context2D = null;
    this.ien = null;
    this.lhh = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.zro = true;
    this.sxr = false;
    this.yfy = function (a, d, c) {
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
                this.ien = document.createElement("canvas");
                this.ien.width = this.width;
                this.ien.height = this.height;
                this.context2D = this.ien.getContext("2d");
                if (c) {
                    this.lhh = c
                }
            }
            this.sxr = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.zlp = function (a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.ien) {
                this.ien.width = this.width;
                this.ien.height = this.height
            }
            this.sxr = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.psg = function (a) {};
    this.mey = function (a) {};
    this.tsg = function (a, b) {
        this.zro = a;
        if (b && b === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.kgg = function () {
        return (this.zro && !this.sxr)
    };
    this.jvb = function () {}
}

function qxz() {
    this.ssi = null;
    this.kmg = null;
    this.ohs = -1;
    this.buu = -1;
    this.tao = false;
    this.otl = false;
    this.nrk = false;
    this.wyl = 0;
    this.vix = 0;
    var a = 200;
    this.yfy = function (c, f, d, b, e) {
        this.ssi = b;
        this.kmg = e;
        qxz.prototype.yfy.call(this, c, f, d)
    };
    this.ars = function (b, d, c) {
        this.tao = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.kgg()) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
        if (this.tao === true && c === true) {
            clearTimeout(this.wyl);
            this.wyl = setTimeout(this.vat, a)
        }
    };
    this.ogk = function () {
        return this.tao
    };
    this.ntl = function (b, c) {
        this.nrk = b;
        c = (c === false) ? false : true;
        clearTimeout(this.vix);
        if (this.nrk === true && c === true) {
            this.vix = setTimeout(this.gln, a)
        }
    };
    this.sjx = function () {
        return this.nrk
    };
    this.qib = function (b, c) {
        this.kmg = b;
        if (c && c === true && this.kgg()) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.wsn = function (b) {
        this.otl = b
    };
    this.hon = function () {
        return this.otl
    };
    this.npx = function () {};
    this.gln = function () {};
    this.vat = function () {}
}
qxz.prototype = new idn;

function rqz() {
    var a = this;
    this.ggn = null;
    this.value = "";
    this.yaz = false;
    this.lsi = "round";
    this.zrw = null;
    this.kfk = "bold";
    this.gnv = null;
    this.qbs = null;
    this.tas = null;
    this.zyi = null;
    this.mem = null;
    this.uhg = 0;
    this.gwi = 6;
    this.ffl = -2;
    this.dbk = 2;
    this.nxd = -4;
    this.qrn = 8;
    this.fso = 26;
    this.rew = 0;
    this.oxo = 1;
    this.apr = 0;
    this.tau = 0;
    this.lfl = -1;
    this.xfi = 10;
    this.zuk = 0;
    this.zyc = 0;
    this.ybw = false;
    this.jnd = -1;
    this.xzl = true;
    this.yfy = function (d, g, e, c, b, f) {
        rqz.prototype.yfy.call(this, d, g, e, c, f);
        this.ggn = b;
        if (this.ssi) {
            this.uhg = Math.round(this.ssi.height / 2)
        }
    };
    this.psg = function (b) {
        try {
            this.lsi = b.wtv;
            this.zrw = b.font;
            this.kfk = b.zqm;
            this.gnv = b.backgroundColor;
            this.qbs = b.xgc;
            this.tas = b.xmb;
            this.zyi = b.yjk;
            if (b.borderColor && b.vna) {
                this.mem = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.mem.addColorStop(0, b.borderColor);
                this.mem.addColorStop(1, b.vna)
            } else {
                this.mem = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.mey = function (b) {
        try {
            this.fso = b.ezx;
            this.rew = b.twx;
            this.gwi = b.udi;
            this.ffl = b.cic;
            this.dbk = b.eet;
            this.nxd = b.wqg;
            this.qrn = b.avi;
            this.oxo = b.dbr
        } catch (c) {
            console.error(c)
        }
    };
    this.wux = function () {
        if (this.ate()) {
            clearInterval(this.jnd);
            this.jnd = -1
        }
        this.xzl = false;
        this.jnd = setInterval(this.oij, 400)
    };
    this.bde = function () {
        this.xzl = true;
        clearInterval(this.jnd);
        this.jnd = -1;
        this.zoo(false)
    };
    this.zoo = function (b, c) {
        this.ybw = b;
        c = (c === false) ? false : true;
        if (c === true && this.kgg() === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.ate = function () {
        return (this.jnd >= 0)
    };
    this.dck = function (b, c) {
        this.value = b;
        if (c && c === true && this.kgg()) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.vmc = function (b) {
        this.apr = Math.round(b / this.xfi);
        this.zuk = 0;
        this.zyc = 0;
        this.tau = new Date().getTime();
        this.lfl = setTimeout(this.jsv, this.apr)
    };
    this.pco = function () {
        if (a.lfl >= 0) {
            clearTimeout(a.lfl);
            a.lfl = -1
        }
        a.zuk = 0;
        a.vat()
    };
    this.hct = function () {
        if (a.lfl >= 0) {
            clearInterval(a.lfl);
            a.lfl = -1
        }
        a.zuk = 1;
        a.vat()
    };
    this.jsv = function () {
        var b = 0,
            c = new Date().getTime();
        a.zyc += 1;
        if (a.zyc < a.xfi) {
            a.zuk += 1 / a.xfi;
            a.parent.jvb(a.x, a.y, a.width, a.height);
            b = a.apr + (a.zyc * a.apr - (c - a.tau));
            a.lfl = setTimeout(a.jsv, b)
        } else {
            a.hct()
        }
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.oxo,
            d = (this.lsi === "roundedT" || this.lsi === "roundedL") ? this.qrn : 0,
            b = (this.lsi === "roundedT" || this.lsi === "roundedR") ? this.qrn : 0,
            o = (this.lsi === "roundedB" || this.lsi === "roundedR") ? this.qrn : 0,
            q = (this.lsi === "roundedB" || this.lsi === "roundedL") ? this.qrn : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.ybw || this.zuk >= 1) {
            if (this.lsi === "round") {
                bio.olq.pih(p, this.x + this.width / 2, this.y + this.height / 2, l, this.qbs, 1, this.mem, this.oxo, 1)
            } else {
                if (this.lsi === "rect") {
                    bio.olq.ope(p, this.x, this.y, this.width, this.height, this.qrn, this.qbs, this.mem, this.oxo)
                } else {
                    if (this.lsi === "roundedT" || this.lsi === "roundedB" || this.lsi === "roundedR" || this.lsi === "roundedL") {
                        bio.olq.gpz(p, this.x, this.y, this.width, this.height, d, b, o, q, this.qbs, 1, this.mem, this.oxo, 1)
                    }
                }
            }
            if (this.ggn || this.ssi) {
                if (this.ogk()) {
                    p.drawImage((this.ggn) ? this.ggn : this.ssi, 0, this.uhg, this.ssi.width, this.uhg, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.ggn) ? this.ggn : this.ssi, 0, 0, this.ssi.width, this.uhg, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.yaz && this.hon() === false) {
                p.globalAlpha = 0.5
            }
            if (this.zuk > 0) {
                if (this.lsi === "round") {
                    bio.olq.pih(p, this.x + this.width / 2, this.y + this.height / 2, l, this.gnv, 1 - this.zyc / this.xfi, this.mem, this.oxo, 1);
                    bio.olq.pih(p, this.x + this.width / 2, this.y + this.height / 2, l, this.qbs, this.zyc / this.xfi)
                } else {
                    if (this.lsi === "rect") {
                        olf = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        olf.addColorStop(1 - this.zuk, this.gnv);
                        olf.addColorStop(1 - this.zuk, this.qbs);
                        bio.olq.kbi(p, this.x, this.y, this.width, this.height, this.qrn, olf, 1, this.mem, this.oxo, 1)
                    } else {
                        if (this.lsi === "roundedT" || this.lsi === "roundedB" || this.lsi === "roundedR" || this.lsi === "roundedL") {
                            olf = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            olf.addColorStop(1 - this.zuk, this.gnv);
                            olf.addColorStop(1 - this.zuk, this.qbs);
                            bio.olq.gpz(p, this.x, this.y, this.width, this.height, d, b, o, q, olf, 1, this.mem, this.oxo, 1)
                        }
                    }
                }
            } else {
                if (this.lsi === "round") {
                    bio.olq.pih(p, this.x + this.width / 2, this.y + this.height / 2, l, this.gnv, 1, this.mem, this.oxo, 1)
                } else {
                    if (this.lsi === "rect") {
                        bio.olq.ope(p, this.x, this.y, this.width, this.height, this.qrn, this.gnv, this.mem, this.oxo)
                    } else {
                        if (this.lsi === "roundedT" || this.lsi === "roundedB" || this.lsi === "roundedR" || this.lsi === "roundedL") {
                            bio.olq.gpz(p, this.x, this.y, this.width, this.height, d, b, o, q, this.gnv, 1, this.mem, this.oxo, 1)
                        }
                    }
                }
            }
            if (this.ssi) {
                if (this.ogk()) {
                    p.drawImage(this.ssi, 0, this.uhg, this.ssi.width, this.uhg, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.ssi, 0, 0, this.ssi.width, this.uhg, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.rew > 0) {
            f = (this.ogk()) ? 2 : 0;
            c = this.rew;
            p.font = this.kfk + " " + c + "px " + this.zrw;
            p.fillStyle = this.zyi;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.gwi) {
                e = ((this.width - 2 * this.gwi) / n);
                c = Math.round(e * c) - 1;
                p.font = this.kfk + " " + c + "px " + this.zrw
            }
            if (c > this.height / 2 - this.gwi) {
                e = ((this.height / 2 - this.gwi) / c);
                c = Math.round(e * c) - 1;
                p.font = this.kfk + " " + c + "px " + this.zrw
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.ffl, this.y - this.nxd + k + f)
        }
        if (this.kmg && this.kmg != "" && this.fso > 0) {
            g = this.kmg.split("|");
            f = (this.ogk()) ? 2 : 0;
            c = this.fso;
            p.font = this.kfk + " " + c + "px " + this.zrw;
            p.fillStyle = this.tas;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.gwi) {
                e = ((this.width - 2 * this.gwi) / n);
                c = Math.round(e * c) - 1;
                p.font = this.kfk + " " + c + "px " + this.zrw
            }
            if (this.rew > 0) {
                if (c * g.length > this.height / 2 - this.gwi) {
                    e = ((this.height / 2 - this.gwi) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.kfk + " " + c + "px " + this.zrw
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.gwi) {
                    e = ((this.height - 2 * this.gwi) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.kfk + " " + c + "px " + this.zrw
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.ffl, this.y - this.dbk + k + f);
                k += c
            }
        }
        p.restore();
        if (this.lhh && this.ien) {
            this.lhh.drawImage(this.ien, this.x, this.y)
        }
    };
    this.oij = function () {
        if (!a.xzl) {
            a.zoo(!a.ybw)
        }
    };
    this.gln = function () {
        a.nrk = false
    };
    this.vat = function () {
        a.tao = false;
        if (a.kgg()) {
            a.parent.jvb(a.x, a.y, a.width, a.height)
        }
    }
}
rqz.prototype = new qxz;

function jco() {
    this.fod = "right";
    this.wms = "left";
    this.wqn = null;
    this.crb = null;
    this.jsb = null;
    this.jvv = -1;
    this.gdg = -1;
    this.otl = true;
    this.qzp = false;
    this.nrk = false;
    this.wlo = false;
    this.bxa = 0;
    this.odp = 0;
    this.akd = [];
    this.vyi = 0;
    this.akj = 0;
    this.rlr = 1;
    this.nwk = 0;
    this.hss = 0;
    this.ash = this.fod;
    this.zrw = null;
    this.kfk = "bold";
    this.tas = "rgb(255,255,255)";
    this.gnv = "rgb(0,0,0)";
    this.jsn = "rgb(0,0,0)";
    this.jar = "rgb(0,0,0)";
    this.npz = 0.7;
    this.xsp = null;
    this.quv = null;
    this.jay = null;
    this.kts = new bku();
    this.mui = new bku();
    this.dpj = new bku();
    this.vog = new bku();
    this.oxo = 2;
    this.qrn = 5;
    this.mjs = 4;
    this.zwx = 10;
    this.crv = 5;
    this.hum = 15;
    var a = 200;
    this.vdy = function (c, d, f) {
        this.akd = [];
        this.bxa = (d < 0) ? 0 : d;
        this.odp = (f < 0) ? 0 : f;
        for (var e = this.bxa, b = 0; e <= this.odp; e++) {
            this.akd[b++] = c[e]
        }
        this.vyi = this.akd.length;
        this.nwk = this.kts.height / this.vyi
    };
    this.mey = function (b) {
        try {
            this.hum = b.fontSize;
            this.oxo = b.dbr;
            this.qrn = b.avi;
            this.mjs = b.qxt;
            this.zwx = b.lka;
            this.crv = b.ezb;
            this.kts = new bku(b.vyg.x, b.vyg.y + b.pxn, b.vyg.width, b.vyg.height - 2 * b.pxn);
            this.mui = new bku(b.vyg.x, b.vyg.y, b.vyg.width, b.pxn);
            this.dpj = new bku(b.vyg.x, b.vyg.y + b.vyg.height - b.pxn, b.vyg.width, b.pxn);
            this.vog = b.fsm
        } catch (c) {
            console.error(c)
        }
    };
    this.psg = function (b) {
        try {
            this.zrw = b.font;
            this.kfk = b.zqm;
            this.tas = b.xmb;
            this.gnv = b.backgroundColor;
            this.jsn = b.guy;
            this.jar = b.dmc;
            this.npz = b.uhy;
            this.quv = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.quv.addColorStop(0, b.inv);
            this.quv.addColorStop(1, b.fyq);
            this.xsp = this.context2D.createLinearGradient(this.kts.x, 0, this.kts.x + this.kts.width, 0);
            this.jay = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.ash === this.fod) {
                this.xsp.addColorStop(0, b.ybp);
                this.xsp.addColorStop(1, b.vlj);
                this.jay.addColorStop(0, b.lau);
                this.jay.addColorStop(1, b.ndy)
            } else {
                if (this.ash === this.wms) {
                    this.xsp.addColorStop(0, b.vlj);
                    this.xsp.addColorStop(1, b.ybp);
                    this.jay.addColorStop(0, b.ndy);
                    this.jay.addColorStop(1, b.lau)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.fpy = function (b, f, c) {
        if (this.wlo || !this.otl || this.nrk) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.dpj.jak(e, d)) {
                this.cva(-1);
                this.lgu();
                this.ntl(true, true)
            } else {
                if (this.mui.jak(e, d)) {
                    this.cva(1);
                    this.lgu();
                    this.ntl(true, true)
                } else {
                    if (this.kts.jak(e, d)) {
                        this.qzp = true;
                        this.itx(f);
                        this.ntl(true, true)
                    }
                }
            }
            this.npx(this.akj);
            return true
        }
    };
    this.gnx = function () {
        if (this.qzp) {
            this.qzp = false;
            this.lgu();
            return true
        }
        return false
    };
    this.ivn = function (b) {
        if (this.wlo || !this.otl || this.nrk) {
            return true
        }
        if (b == this.gdg) {
            this.cva(-1);
            this.lgu();
            this.ntl(true, true);
            this.npx(this.akj);
            return true
        } else {
            if (b == this.jvv) {
                this.cva(1);
                this.lgu();
                this.ntl(true, true);
                this.npx(this.akj);
                return true
            }
        }
        return false
    };
    this.kif = function () {};
    this.edn = function (b, d, c) {
        if (!this.qzp) {
            return false
        }
        if (b >= this.x + this.kts.x && b <= this.x + this.kts.x + this.kts.width && d >= this.y + this.kts.y && d <= this.y + this.kts.y + this.kts.height) {
            this.itx(d);
            this.npx(this.akj);
            return true
        }
        return false
    };
    this.ntl = function (b, c) {
        this.nrk = b;
        c = (c === false) ? false : true;
        clearTimeout(this.vix);
        if (this.nrk === true && c === true) {
            this.vix = setTimeout(this.gln, a)
        }
    };
    this.gln = function () {};
    this.npx = function (b) {};
    this.lgu = function () {};
    this.ndq = function (b, c) {
        this.bxa = (b < 0) ? 0 : b;
        this.odp = (c < 0) ? 0 : c;
        if (this.akd) {
            this.odp = (this.odp > this.akd.length - 1) ? this.akd.length - 1 : this.odp
        }
    };
    this.sqt = function () {
        this.tsg(true, true)
    };
    this.zln = function () {
        this.tsg(false, true)
    };
    this.wsn = function (b) {
        this.otl = b
    };
    this.hon = function () {
        return this.otl
    };
    this.wyo = function (b, c) {
        this.akj = b;
        if (this.akj < this.bxa) {
            this.akj = this.bxa
        }
        if (this.akj >= this.odp) {
            this.akj = this.odp
        }
        this.rlr = this.akj + 1;
        if (c && c === true) {
            this.parent.jvb()
        }
    };
    this.hrx = function (d, e) {
        this.akj = 0;
        for (var c = 0, b = this.akd.length; c < b; c++) {
            if (this.akd[c] == d) {
                this.akj = c;
                break
            }
        }
        this.akj = (this.akj >= this.bxa) ? this.akj : this.bxa;
        this.akj = (this.akj < this.odp) ? this.akj : this.odp;
        this.rlr = this.akj + 1;
        if (e) {
            this.parent.jvb()
        }
    };
    this.itx = function (b) {
        this.akj = Math.ceil(((this.kts.height) - (b - this.kts.y - this.y)) / this.nwk) - 1;
        this.akj = (this.akj >= this.bxa) ? this.akj : this.bxa;
        this.akj = (this.akj < this.odp) ? this.akj : this.odp;
        this.rlr = this.akj + 1;
        this.parent.jvb()
    };
    this.cva = function (b) {
        this.akj += b;
        this.akj = (this.akj >= this.bxa) ? this.akj : this.bxa;
        this.akj = (this.akj < this.odp) ? this.akj : this.odp;
        this.rlr = this.akj + 1;
        this.parent.jvb()
    };
    this.jvb = function () {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        this.ych();
        if (this.lhh && this.ien) {
            this.lhh.drawImage(this.bbh, this.x, this.y)
        }
    };
    this.ych = function () {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.kfh(b);
        this.yyg(b);
        this.jqy(b);
        this.zyz(b);
        this.kyy(b);
        b.restore()
    };
    this.kfh = function (b) {
        if (this.ash === this.wms) {
            bio.olq.gpz(b, 0, 0, this.width, this.height, this.qrn, 0, 0, this.qrn, this.gnv, 0.4, this.jay, this.oxo, 1)
        } else {
            if (this.ash === this.fod) {
                bio.olq.gpz(b, 0, 0, this.width, this.height, 0, this.qrn, this.qrn, 0, this.gnv, 0.4, this.jay, this.oxo, 1)
            }
        }
    };
    this.yyg = function (b) {
        bio.olq.zuu(b, this.kts.x, this.kts.y, this.kts.width, this.kts.height, this.jsn, 1)
    };
    this.jqy = function (b) {
        bio.olq.zuu(b, this.kts.x, this.kts.y + this.kts.height - Math.round(this.rlr * this.nwk), this.kts.width, Math.round(this.rlr * this.nwk), this.quv, 1)
    };
    this.zyz = function (b) {
        bio.olq.zuu(b, this.kts.x - this.mjs, this.kts.y - this.mjs, this.kts.width + 2 * this.mjs, this.kts.height + 2 * this.mjs, null, 0, this.xsp, this.mjs, 1);
        if (this.ash === this.wms) {
            bio.olq.gpz(b, this.kts.x - this.mjs, this.mui.y, this.kts.width + 2 * this.mjs, this.mui.height, this.zwx, 0, 0, 0, this.xsp, 1);
            bio.olq.gpz(b, this.kts.x - this.mjs, this.dpj.y, this.kts.width + 2 * this.mjs, this.dpj.height, 0, 0, 0, this.zwx, this.xsp, 1)
        } else {
            if (this.ash === this.fod) {
                bio.olq.gpz(b, this.kts.x - this.mjs, this.mui.y, this.kts.width + 2 * this.mjs, this.mui.height, 0, this.zwx, 0, 0, this.xsp, 1);
                bio.olq.gpz(b, this.kts.x - this.mjs, this.dpj.y, this.kts.width + 2 * this.mjs, this.dpj.height, 0, 0, this.zwx, 0, this.xsp, 1)
            }
        }
        b.strokeStyle = this.xsp;
        b.lineWidth = Math.round(this.mjs / 4);
        b.beginPath();
        for (var c = 1; c < this.vyi; c++) {
            b.moveTo(this.kts.x, this.kts.y + this.kts.height - Math.round(c * this.nwk));
            b.lineTo(this.kts.x + this.kts.width, this.kts.y + this.kts.height - Math.round(c * this.nwk))
        }
        b.closePath();
        b.stroke();
        if (this.wqn) {
            if (this.ash === this.wms) {
                b.drawImage(this.wqn, 0, 0, this.wqn.width / 2, this.wqn.height, this.kts.x, this.kts.y, this.kts.width, this.kts.height)
            } else {
                if (this.ash === this.fod) {
                    b.drawImage(this.wqn, this.wqn.width / 2, 0, this.wqn.width / 2, this.wqn.height, this.kts.x, this.kts.y, this.kts.width, this.kts.height)
                }
            }
        }
    };
    this.kyy = function (c) {
        var f = this.tas,
            e = this.tas,
            b = 0,
            d = 0;
        if (this.ash === this.wms) {
            b = this.crv;
            d = this.kts.x - 2 * this.crv
        } else {
            if (this.ash === this.fod) {
                b = this.kts.x + this.kts.width + this.crv;
                d = this.width - this.crv - (this.kts.x + this.kts.width + this.crv)
            }
        }
        if (this.akj > 0 && this.akj < this.akd.length - 1) {
            bio.olq.zuu(c, b, this.kts.y + ((this.vyi - this.rlr) * this.nwk), d, this.nwk, this.jar, this.npz);
            bio.olq.idi(c, this.akd[this.akj], this.quv, b, this.kts.y + ((this.vyi - this.rlr) * this.nwk) + (this.nwk - this.hum) / 2, d, this.hum, this.zrw, this.hum, this.kfk, this.crv)
        } else {
            if (this.akj == 0) {
                f = this.quv
            } else {
                if (this.akj == this.akd.length - 1) {
                    e = this.quv
                }
            }
        }
        bio.olq.zuu(c, b, this.kts.y + (this.nwk * (this.vyi - 1)), d, this.nwk, this.jar, this.npz);
        bio.olq.idi(c, this.akd[0], f, b, this.kts.y + (this.nwk * (this.vyi - 1)) + (this.nwk - this.hum) / 2, d, this.hum, this.zrw, this.hum, this.kfk, this.crv);
        bio.olq.zuu(c, b, this.kts.y, d, this.nwk, this.jar, this.npz);
        bio.olq.idi(c, this.akd[this.akd.length - 1], e, b, this.kts.y + (this.nwk - this.hum) / 2, d, this.hum, this.zrw, this.hum, this.kfk, this.crv);
        bio.olq.fwv(c, "+", this.tas, this.mui.x, this.mui.y, this.mui.width, this.mui.height, this.zrw, this.hum, this.kfk);
        bio.olq.fwv(c, "", this.tas, this.dpj.x, this.dpj.y, this.dpj.width, this.dpj.height, this.zrw, this.hum, this.kfk);
        if (this.jsb) {
            bio.olq.fwv(c, this.jsb, this.tas, this.vog.x, this.vog.y, this.vog.width, this.vog.height, this.zrw, this.hum, this.kfk)
        }
    }
}
jco.prototype = new idn;

function qom() {
    var b = this;
    var c = 0;
    var a = 1;
    this.fwb = 7;
    this.guo = 89;
    this.irk = 10000;
    this.etp = null;
    this.otl = false;
    this.wlo = false;
    this.miy = -1;
    this.zvu = 0;
    this.zrw = null;
    this.kfk = "bold";
    this.gnv = "black";
    this.rcu = null;
    this.twv = null;
    this.jay = null;
    this.tas = "white";
    this.ewc = 0.8;
    this.krh = 0;
    this.fsg = 0;
    this.owo = 0;
    this.rae = 0;
    this.emj = 0;
    this.ohp = 0;
    this.ucf = 0;
    this.ffl = 10;
    this.wmw = 5;
    this.xqx = 10;
    this.zsx = this.ffl;
    this.adz = 10;
    this.grr = 20;
    this.jpb = 40;
    this.oxo = 4;
    this.hum = 10;
    this.clz = null;
    this.xta = null;
    this.lwz = "";
    this.wda = null;
    this.yfy = function (d, f, e) {
        qom.prototype.yfy.call(this, d, f, e);
        this.etp = new hcn();
        this.etp.yfy();
        this.etp.mnm("buttons");
        this.etp.mnm("system");
        this.etp.mnm("setting")
    };
    this.mey = function (d) {
        try {
            this.hum = d.fontSize;
            this.adz = d.ian;
            this.grr = d.gpx;
            this.jpb = d.lsj;
            this.oxo = d.dbr;
            this.ffl = d.cic;
            this.wmw = d.kth;
            this.xqx = d.aro
        } catch (f) {
            console.error(f)
        }
    };
    this.psg = function (g, m) {
        try {
            var k = this.etp.vla("buttons"),
                j = (m === true) ? g.obp.bsl : g.gjm.bsl;
            this.zrw = g.font;
            this.kfk = g.zqm;
            this.gnv = g.backgroundColor;
            this.rcu = g.owr;
            this.twv = g.hay;
            this.tas = g.xmb;
            this.ewc = g.igc;
            if (this.rcu && this.twv) {
                this.jay = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.jay.addColorStop(0, this.rcu);
                this.jay.addColorStop(0.5, this.twv);
                this.jay.addColorStop(1, this.rcu)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].psg(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.fpy = function (p, o) {
        var n = this.etp.tmn(),
            q = this.etp.brx("audio"),
            r = this.etp.brx("language"),
            f = this.etp.brx("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.wlo) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.kgg()) {
                if (g.hon() && !g.sjx()) {
                    if (g != q && g != r) {
                        this.parent.fcy.aee("btn");
                        this.parent.fcy.lgu("btn")
                    }
                    g.ars(true, true, false);
                    g.npx();
                    for (var k = 0; k < m; k++) {
                        n[k].ntl(true)
                    }
                    if (g != f) {
                        if (this.miy >= 0) {
                            clearTimeout(this.miy);
                            this.miy = -1
                        }
                        this.miy = setTimeout(this.bqx, this.irk)
                    }
                }
                return true
            }
        }
        if (this.kgg() && this.hon()) {
            if (p < this.x + this.emj || p > this.x + this.emj + this.ohp || o < this.y || o > this.y + this.height) {
                if (this.miy >= 0) {
                    clearTimeout(this.miy);
                    this.miy = -1
                }
                return false
            }
        }
        return true
    };
    this.gnx = function () {
        var g = this.etp.tmn();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.ogk() == true) {
                e.ars(false, true);
                return true
            }
        }
        return false
    };
    this.ivn = function (e) {
        var o = this.etp.tmn(),
            d = this.etp.vla("system"),
            m = this.etp.vla("setting"),
            q = this.etp.brx("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.wlo) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.ohs || e == f.buu) && !f.sjx()) {
                if (f != q) {
                    this.parent.fcy.aee("btn");
                    this.parent.fcy.lgu("btn")
                }
                f.ars(true, true, false);
                f.npx();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].ntl(true)
                }
                if (this.miy >= 0) {
                    clearTimeout(this.miy);
                    this.miy = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.ohs || e == f.buu) && f.hon() && !f.sjx()) {
                if (f != q) {
                    this.parent.fcy.aee("btn");
                    this.parent.fcy.lgu("btn")
                }
                f.ars(true, true, false);
                f.npx();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].ntl(true)
                }
                if (this.miy >= 0) {
                    clearTimeout(this.miy);
                    this.miy = -1
                }
                return true
            }
        }
        if (this.kgg() && this.hon()) {
            if (this.parent.lyz) {
                for (l = 0, n = this.parent.lyz.cfz.length; l < n; l++) {
                    var p = this.parent.lyz.cfz[l];
                    if (p.dye == e || p.dye == e) {
                        if (this.miy >= 0) {
                            clearTimeout(this.miy);
                            this.miy = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.kif = function () {
        var g = this.etp.tmn();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.ogk() == true) {
                e.ars(false, true, false);
                return true
            }
        }
        return false
    };
    this.edn = function (e, m) {
        var k = this.etp.tmn(),
            l = e - this.x,
            j = m - this.y;
        this.xta = this.clz;
        this.clz = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.kgg() && f.hon() && !f.sjx()) {
                this.clz = f
            }
        }
        if (this.clz) {
            this.ymf(true)
        } else {
            this.ymf(false)
        }
        return true
    };
    this.wjs = function (e, f, g, j, m, d, n) {
        this.ucf = g.width;
        var l = new bku(this.zsx, this.wmw, this.ucf, this.ucf);
        var k = new daq();
        k.yfy(l, this.context2D);
        k.parent = this;
        k.npx = j;
        k.zjk = f;
        k.swl(d, n);
        k.mey(this.parent.utg.lsy.awl);
        k.psg(this.parent.style.lsy.gjm.bsl);
        k.wbz(g);
        if (m != null) {
            k.buu = m.cxx;
            k.ohs = m.dye;
            k.fam = m.value
        }
        this.etp.roh(e, k, ["buttons", "setting"]);
        this.zsx += this.ucf + this.ffl;
        this.ohp = this.zsx
    };
    this.kxw = function (l, k, j, g, e) {
        this.ucf = j.width;
        var f = new bku(this.zsx, this.wmw, this.ucf, this.ucf);
        var d = new daq();
        d.yfy(f, this.context2D);
        d.parent = this;
        d.npx = g;
        d.zjk = k;
        d.mey(this.parent.utg.lsy.awl);
        d.psg(this.parent.style.lsy.gjm.bsl);
        d.wbz(j);
        if (e != null) {
            d.buu = e.cxx;
            d.ohs = e.dye;
            d.fam = e.value
        }
        this.etp.roh(l, d, ["buttons", "system"]);
        this.zsx += this.ucf + this.ffl;
        this.ohp = this.zsx
    };
    this.oen = function () {
        var f = this.etp.tmn();
        this.ohp += 2 * this.xqx;
        this.emj = Math.round((this.width - this.ohp) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.emj + this.xqx
        }
    };
    this.sph = function () {
        return this.ohp
    };
    this.wsn = function (d) {
        this.otl = d
    };
    this.hon = function () {
        return this.otl
    };
    this.qjf = function (g) {
        var f = this.etp.tmn();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].wsn(g)
        }
        this.parent.jvb()
    };
    this.ziw = function (g) {
        var f = this.etp.vla("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].wsn(g)
        }
        this.parent.jvb()
    };
    this.ikp = function (g) {
        var f = this.etp.vla("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].wsn(g)
        }
        this.parent.jvb()
    };
    this.sqt = function () {
        if (this.kgg()) {
            return
        }
        if (this.wlo) {
            if (this.rae === a) {
                this.wda = this.sqt
            } else {
                this.wda = null
            }
        } else {
            this.wda = null;
            this.yrt();
            this.qre()
        }
    };
    this.pry = function (d) {
        if (this.parent.vka) {
            this.parent.vka()
        }
        this.stop();
        this.wlo = false;
        this.wda = null;
        this.tsg(true, d);
        if (this.miy >= 0) {
            clearTimeout(this.miy);
            this.miy = -1
        }
        this.miy = setTimeout(this.bqx, this.irk)
    };
    this.bqx = function () {
        if (b.kgg()) {
            b.parent.fcy.aee("panel_out");
            b.parent.fcy.lgu("panel_out");
            b.zln()
        }
    };
    this.zln = function () {
        if (!this.kgg()) {
            return
        }
        if (this.wlo) {
            if (this.rae === c) {
                this.wda = this.zln
            } else {
                this.wda = null
            }
        } else {
            this.wda = null;
            this.nii();
            this.qre();
            if (this.miy >= 0) {
                clearTimeout(this.miy);
                this.miy = -1
            }
        }
    };
    this.yde = function (d) {
        if (this.parent.dss) {
            this.parent.dss()
        }
        this.stop();
        this.wlo = false;
        this.wda = null;
        this.tsg(false, d);
        if (typeof this.dwp === "function") {
            this.dwp();
            this.dwp = null
        }
    };
    this.yrt = function () {
        this.tsg(true);
        this.wlo = true;
        this.otl = false;
        this.rae = c;
        this.krh = Math.floor(this.height / this.fwb);
        this.owo = 1;
        this.fsg = Math.floor(this.height / this.fwb)
    };
    this.nii = function () {
        if (this.parent.dss) {
            this.parent.dss()
        }
        this.wlo = true;
        this.otl = false;
        this.rae = a;
        this.krh = -Math.floor(this.height / this.fwb);
        this.owo = 1;
        this.fsg = this.height
    };
    this.qre = function () {
        this.zvu = setInterval(this.atw, this.guo)
    };
    this.wiw = function () {
        if (b.rae == c) {
            if (b.parent.vka) {
                b.parent.vka()
            }
            if (b.miy >= 0) {
                clearTimeout(b.miy);
                b.miy = -1
            }
            b.miy = setTimeout(b.bqx, b.irk)
        }
        clearInterval(b.zvu);
        if (b.wda) {
            b.wda()
        }
    };
    this.stop = function () {
        clearTimeout(this.miy);
        clearInterval(this.zvu);
        this.miy = -1
    };
    this.atw = function () {
        if (!b.ayb()) {
            b.wiw()
        }
    };
    this.ayb = function () {
        if (b.owo < b.fwb) {
            b.parent.jvb(b.x, b.y, b.width, b.height);
            b.fsg += b.krh;
            b.owo++;
            return true
        } else {
            b.wlo = false;
            b.otl = true;
            if (b.rae == a) {
                b.tsg(false);
                if (typeof b.dwp === "function") {
                    b.dwp();
                    b.dwp = null
                }
            }
            b.parent.jvb(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.jvb = function (n, m, o, g) {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.etp.tmn(),
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
        this.xji(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].jvb()
        }
        if (this.clz && this.lwz != "") {
            k = this.clz.x - this.ffl - this.ucf;
            d = 3 * this.ucf + 2 * this.ffl;
            if (k + d >= this.emj + this.ohp) {
                k = this.emj + this.ohp - d;
                bio.olq.idi(p, this.lwz, this.tas, k, this.clz.y + this.clz.height, d, this.hum, this.zrw, this.hum, this.kfk, this.ffl)
            } else {
                bio.olq.fwv(p, this.lwz, this.tas, k, this.clz.y + this.clz.height, d, this.hum, this.zrw, this.hum, this.kfk)
            }
        }
        p.restore();
        if (this.wlo) {
            if (this.lhh && this.ien && this.fsg > 0) {
                this.lhh.drawImage(this.ien, 0, this.height - this.fsg, this.width, this.fsg, this.x, this.y, this.width, this.fsg)
            }
        } else {
            if (e) {
                this.parent.jvb(this.x + n, this.y + m, o, g)
            } else {
                if (this.lhh && this.ien) {
                    this.lhh.drawImage(this.ien, this.x, this.y)
                }
            }
        }
    };
    this.xji = function (d) {
        var f = this.oxo,
            e = f / 2;
        d.save();
        d.strokeStyle = this.jay;
        d.fillStyle = this.gnv;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.adz, this.adz + e, this.adz, this.adz);
        d.arcTo(this.emj, this.adz, this.emj, this.height - this.grr - e, this.jpb);
        d.arcTo(this.emj, this.height - e, this.emj + this.grr, this.height - e, this.grr);
        d.lineTo(this.emj + this.ohp - this.grr, this.height - e);
        d.arcTo(this.emj + this.ohp, this.height - e, this.emj + this.ohp, this.height - this.grr - e, this.grr);
        d.arcTo(this.emj + this.ohp, this.adz, this.width - this.adz - e, this.adz, this.jpb);
        d.arcTo(this.width - e, this.adz, this.width - e, 0, this.adz);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.ewc;
        d.fill();
        d.restore()
    };
    this.ymf = function (d) {
        if (this.clz && this.clz != this.xta) {
            if (d && this.clz) {
                this.lwz = this.parent.upg(this.clz.zjk);
                if (!bio.olq.iza) {
                    this.lwz = (this.clz.fam) ? this.lwz + " [" + this.clz.fam + "]" : this.lwz
                }
            } else {
                this.lwz = ""
            }
            this.parent.jvb(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.clz && this.lwz != this.parent.upg(this.clz.zjk))) {
                this.lwz = this.parent.upg(this.clz.zjk);
                if (!bio.olq.iza) {
                    this.lwz = (this.clz.fam) ? this.lwz + " [" + this.clz.fam + "]" : this.lwz
                }
            }
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.dwp = null
}
qom.prototype = new idn;

function fuq() {
    var a = this;
    this.zrw = null;
    this.kfk = "bold";
    this.gnv = "rgb(0,0,0)";
    this.kqn = null;
    this.tas = "rgb(255,255,255)";
    this.hkg = null;
    this.cxo = "rgb(60,60,60)";
    this.ugo = null;
    this.owm = null;
    this.otl = false;
    this.zel = [];
    this.oqa = [];
    this.ela = null;
    this.lxb = 19;
    this.yvc = 15;
    this.mcx = 120;
    this.ffl = 2;
    this.wmw = 2;
    this.xek = 2;
    this.mkk = 10;
    this.hum = 12;
    this.yfy = function (b, d, c) {
        fuq.prototype.yfy.call(this, b, d, c)
    };
    this.mey = function (b) {
        try {
            this.hum = b.fontSize;
            this.lxb = b.itw;
            this.yvc = b.hvt;
            this.mcx = b.stc;
            this.ffl = b.cic;
            this.wmw = b.kth;
            this.xek = b.jmx;
            this.mkk = b.kvy
        } catch (c) {
            console.error(c)
        }
    };
    this.psg = function (b) {
        try {
            this.zrw = b.font;
            this.kfk = b.zqm;
            this.gnv = b.backgroundColor;
            this.kqn = b.fss;
            this.tas = b.xmb;
            this.cxo = b.borderColor;
            this.hkg = b.vna;
            if (this.kqn) {
                this.ugo = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.ugo.addColorStop(0, this.kqn);
                this.ugo.addColorStop(0.5, this.gnv)
            } else {
                this.ugo = this.gnv
            }
            if (this.hkg) {
                this.owm = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.owm.addColorStop(0, this.hkg);
                this.owm.addColorStop(1, this.cxo)
            } else {
                this.owm = this.cxo
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.fpy = function (b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.mkk : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.hon()) {
            this.parent.uno();
            return true
        }
        return false
    };
    this.ney = function (d, b, c) {
        this.oqa.push({
            id: d,
            xcb: b,
            value: c,
            jbc: null
        })
    };
    this.rqw = function (e, c, d, b) {
        this.oqa.push({
            id: e,
            xcb: c,
            value: d,
            jbc: b
        })
    };
    this.rkq = function (d, b, c) {
        this.zel.push({
            id: d,
            llo: b,
            value: c
        })
    };
    this.lij = function (e, d) {
        for (var c = 0, b = this.oqa.length; c < b; c++) {
            if (this.oqa[c].id == e) {
                this.oqa[c].value = d;
                return true
            }
        }
        return false
    };
    this.dtx = function (c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.yab = function (e, d) {
        for (var c = 0, b = this.zel.length; c < b; c++) {
            if (this.zel[c].id == e) {
                if (this.zel[c].value != d) {
                    this.zel[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.xjo = function (b) {
        this.ela = b
    };
    this.wsn = function (b) {
        this.otl = b
    };
    this.hon = function (b) {
        return this.otl
    };
    this.xbo = function (c, b) {
        if (this.lij(c, b)) {
            window.mxx(a.jvb)
        }
    };
    this.uiu = function (c, b) {
        if (this.yab(c, b)) {
            window.mxx(a.jvb)
        }
    };
    this.kjc = function (b) {
        this.xjo(b);
        window.mxx(a.jvb)
    };
    this.jvb = function () {
        if (!a.kgg() || !a.parent.lnn()) {
            return
        }
        var e = (a.height - a.hum) / 2 + a.wmw,
            c = a.ffl + a.lxb * a.oqa.length,
            d = a.width - c - (a.mcx * a.zel.length),
            b = a.context2D;
        b.save();
        bio.olq.zuu(b, 0, 0, a.width, a.height, a.ugo, 1);
        a.yya(b, e);
        a.ksp(b, e);
        if (a.ela && a.ela != "") {
            bio.olq.fwv(b, a.ela, a.tas, c, e, d, a.hum, a.zrw, a.hum, a.kfk)
        } else {
            if (a.hon()) {
                a.oue(b)
            }
        }
        a.iei(b, 0, a.height - a.xek / 2, a.width, a.height - a.xek / 2);
        b.restore();
        if (a.lhh && a.ien) {
            a.lhh.drawImage(a.ien, a.x, a.y)
        }
    };
    this.yya = function (d, g) {
        var c = 0;
        for (var f = 0, b = this.oqa.length; f < b; f++) {
            if (this.oqa[f].jbc) {
                var e = this.dtx(this.oqa[f].jbc, this.oqa[f].value);
                if (this.oqa[f].xcb instanceof Array) {
                    bio.olq.fwv(d, this.oqa[f].xcb[e], this.tas, c, g, this.lxb, this.hum, this.zrw, this.hum, this.kfk)
                } else {
                    if (this.oqa[f].xcb instanceof Image || this.oqa[f].xcb instanceof HTMLCanvasElement) {
                        d.drawImage(this.oqa[f].xcb, e * this.yvc, 0, this.yvc, this.oqa[f].xcb.height, c + this.ffl, g - this.wmw, this.lxb - 2 * this.ffl, this.hum)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.oqa[f].value == true) ? 1 : 0.3;
                if (this.oqa[f].xcb instanceof String) {
                    bio.olq.fwv(d, this.oqa[f].xcb, this.tas, c, g, this.lxb, this.hum, this.zrw, this.hum, this.kfk)
                } else {
                    if (this.oqa[f].xcb instanceof Image || this.oqa[f].xcb instanceof HTMLCanvasElement) {
                        d.drawImage(this.oqa[f].xcb, c + this.ffl, g - this.wmw, this.lxb - 2 * this.ffl, this.hum)
                    }
                }
                d.restore()
            }
            c += this.lxb;
            this.iei(d, c, 0, c, this.height)
        }
        return c
    };
    this.ksp = function (d, f) {
        var c = this.width - this.ffl - this.mcx * this.zel.length;
        for (var e = 0, b = this.zel.length; e < b; e++) {
            if (this.zel[e].id == "freeplay") {
                bio.olq.zuu(d, c, 0, this.mcx, this.height, "red", 0.4)
            } else {
                if (this.zel[e].id == "freespin") {
                    bio.olq.zuu(d, c, 0, this.mcx, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.iei(d, c, 0, c, this.height);
            bio.olq.fwv(d, this.zel[e].llo + this.zel[e].value, this.tas, c, f, this.mcx, this.hum, this.zrw, this.hum, this.kfk);
            c += this.mcx
        }
    };
    this.iei = function (b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.owm;
        b.lineWidth = this.xek;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.oue = function (c) {
        if (this.parent.hfo.brx("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.xek,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.xek;
        c.save();
        c.strokeStyle = this.cxo;
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
fuq.prototype = new idn;

function aoj() {
    var a = this;
    this.kmg = null;
    this.otl = false;
    this.nrk = false;
    this.qzp = false;
    this.zrw = null;
    this.kfk = "bold";
    this.jfb = "center";
    this.gnv = null;
    this.cxo = null;
    this.tas = null;
    this.ash = "rect";
    this.ypa = new bku();
    this.oxh = new bku();
    this.hum = 16;
    this.qrn = 8;
    this.oxo = 1;
    this.vix = 0;
    var b = 200;
    this.yfy = function (c, f, d, e) {
        this.kmg = e;
        aoj.prototype.yfy.call(this, c, f, d)
    };
    this.psg = function (c) {
        try {
            this.zrw = c.font;
            this.kfk = c.zqm;
            this.jfb = c.textAlign;
            this.gnv = c.backgroundColor;
            this.cxo = c.borderColor;
            this.tas = c.xmb;
            this.ash = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.mey = function (c) {
        try {
            this.ypa = c.ndg;
            this.oxh = c.ssb;
            this.hum = c.fontSize;
            this.qrn = c.avi;
            this.oxo = c.dbr
        } catch (d) {
            console.error(d)
        }
    };
    this.wsn = function (c) {
        this.otl = c
    };
    this.hon = function () {
        return this.otl
    };
    this.etb = function (c, d) {
        this.qzp = c;
        if (d && d === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.tzz = function () {
        return this.qzp
    };
    this.qib = function (c, d) {
        this.kmg = c;
        if (d && d === true && this.kgg()) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.ntl = function (c, d) {
        this.nrk = c;
        d = (d === false) ? false : true;
        clearTimeout(this.vix);
        if (this.nrk === true && d === true) {
            this.vix = setTimeout(this.gln, b)
        }
    };
    this.sjx = function () {
        return this.nrk
    };
    this.gln = function () {
        a.nrk = false
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var c = this.context2D;
        c.save();
        bio.olq.ope(c, this.x, this.y, this.width, this.height, this.qrn, this.gnv, this.cxo, this.oxo);
        if (this.ash === "rect") {
            bio.olq.zuu(c, this.x + this.oxh.x, this.y + this.oxh.y, this.oxh.width, this.oxh.height, this.tas, 0.2, this.tas, this.oxo, 1);
            if (this.qzp === true) {
                bio.olq.zuu(c, this.x + this.oxh.x + this.oxh.width / 4, this.y + this.oxh.y + this.oxh.height / 4, this.oxh.width / 2, this.oxh.height / 2, this.tas, 1)
            }
        } else {
            if (this.ash === "round") {
                bio.olq.pih(c, this.x + this.oxh.x + this.oxh.width / 2, this.y + this.oxh.y + this.oxh.height / 2, this.oxh.width / 2, this.tas, 0.2, this.tas, this.oxo, 1);
                if (this.qzp === true) {
                    bio.olq.pih(c, this.x + this.oxh.x + this.oxh.width / 2, this.y + this.oxh.y + this.oxh.height / 2, this.oxh.width / 4, this.tas, 1)
                }
            }
        }
        if (this.kmg && this.kmg != "") {
            bio.olq.tae(c, this.kmg, this.tas, this.x + this.ypa.x, this.y + this.ypa.y, this.ypa.width, this.ypa.height, this.zrw, this.hum, this.kfk, this.jfb, true)
        }
        c.restore();
        if (this.lhh && this.ien) {
            this.lhh.drawImage(this.ien, this.x, this.y)
        }
    };
    this.npx = {}
}
aoj.prototype = new idn;

function hft() {
    var b = this;
    var c = 0;
    var a = 1;
    this.etp = null;
    this.jsb = "";
    this.oat = "";
    this.zxf = "";
    this.spo = "";
    this.atw = false;
    this.lrv = [];
    this.wnc = 0;
    this.udj = 0;
    this.xmt = 0;
    this.vys = 0;
    this.tla = 0;
    this.nhp = 0;
    this.ddv = 0;
    this.ewl = 0;
    this.xdk = false;
    this.rah = false;
    this.fjz = false;
    this.ash = "center";
    this.zrw = "arial";
    this.kfk = "bold";
    this.cdk = "white";
    this.tas = "white";
    this.gnv = "black";
    this.kqn = null;
    this.cxo = "white";
    this.hkg = "rgb(150,150,150)";
    this.pls = null;
    this.xso = null;
    this.oxo = 3;
    this.gdw = 0;
    this.fsq = 0;
    this.ynm = 0;
    this.bwp = 30;
    this.xsy = 24;
    this.vog = new bku();
    this.hih = new bku();
    this.urn = new bku();
    this.iog = new bku();
    this.waa = new bku();
    this.osp = new bku();
    this.kkh = new bku();
    this.slo = new bku();
    this.cne = new bku();
    this.nsk = 7;
    this.kkd = 0;
    this.uvo = 0;
    this.owo = 0;
    this.rae = c;
    this.sjt = 0;
    this.jzc = 89;
    this.nak = false;
    this.zvu = 0;
    this.sga = 0;
    this.xjp = 0;
    this.dwx = 0;
    this.jfk = null;
    this.jcz = 0;
    this.ujy = 1;
    this.stw = 250;
    this.yfy = function (d, f, e) {
        hft.prototype.yfy.call(this, d, f, e);
        this.etp = new hcn();
        this.etp.yfy();
        this.etp.mnm("buttons");
        this.etp.mnm("checkboxes");
        this.etp.mnm("displays");
        this.etp.mnm("lbuttons");
        this.etp.mnm("mbuttons");
        this.etp.mnm("vbuttons");
        this.etp.mnm("cbuttons")
    };
    this.hdv = function (d) {
        try {
            this.izp(d);
            this.uau(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.psg = function (k) {
        try {
            var n = this.etp.vla("lbuttons"),
                m = this.etp.vla("mbuttons"),
                f = this.etp.vla("cbuttons"),
                g = this.etp.vla("displays");
            this.ash = k.type;
            this.zrw = k.font;
            this.kfk = k.zqm;
            this.cdk = k.xww;
            this.tas = k.xmb;
            this.gnv = k.backgroundColor;
            this.kqn = k.fss;
            this.cxo = k.borderColor;
            this.pls = k.pnr;
            this.xso = k.fzy;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].psg(k.pxb)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].psg(k.hmv)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].psg(k.fgy)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].psg(k.display)
            }
            this.etp.zwf("checkboxes", "#psg", [k.pae])
        } catch (l) {
            console.error(l)
        }
    };
    this.mey = function (k) {
        try {
            var n = this.etp.vla("lbuttons"),
                m = this.etp.vla("mbuttons"),
                f = this.etp.vla("cbuttons"),
                g = this.etp.vla("displays");
            this.oxo = k.dbr;
            this.gdw = k.hbu;
            this.fsq = k.rud;
            this.ynm = k.son;
            this.bwp = k.blp;
            this.xsy = k.ycv;
            this.vog = k.fsm;
            this.hih = k.dsy;
            this.urn = k.mfu;
            this.iog = k.nho;
            this.waa = k.ete;
            this.osp = k.xxe;
            this.etp.tvc("lgames", "#zlp", [k.kfv]);
            this.etp.tvc("mgames", "#zlp", [k.zom]);
            this.etp.tvc("lmincredit", "#zlp", [k.mwm]);
            this.etp.tvc("mmincredit", "#zlp", [k.sbc]);
            this.etp.tvc("lmaxcredit", "#zlp", [k.pai]);
            this.etp.tvc("mmaxcredit", "#zlp", [k.uqr]);
            this.etp.tvc("lmaxwin", "#zlp", [k.sfz]);
            this.etp.tvc("mmaxwin", "#zlp", [k.vvz]);
            this.etp.tvc("start", "#zlp", [k.duz]);
            this.etp.tvc("cancel", "#zlp", [k.aop]);
            this.etp.tvc("gamesd", "#zlp", [k.ajh]);
            this.etp.tvc("mincreditd", "#zlp", [k.aep]);
            this.etp.tvc("maxcreditd", "#zlp", [k.yuf]);
            this.etp.tvc("maxwind", "#zlp", [k.gre]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].mey(k.pxb)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].mey(k.hmv)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].mey(k.fgy)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].mey(k.display)
            }
            this.etp.tvc("cmincredit", "#zlp", [k.ewu]);
            this.etp.tvc("cmaxcredit", "#zlp", [k.jmy]);
            this.etp.tvc("cmaxwin", "#zlp", [k.fej]);
            this.etp.zwf("checkboxes", "#mey", [k.pae])
        } catch (l) {
            console.error(l)
        }
    };
    this.izp = function (d) {
        this.etp.roh("start", this.aky(d.duz, this.parent.language.start, this.naw, this.parent.lyz.luh), ["buttons", "cbuttons"]);
        this.etp.roh("cancel", this.aky(d.aop, this.parent.language.yjf, this.zbu, this.parent.lyz.ssr), ["buttons", "cbuttons"]);
        this.etp.roh("lgames", this.aky(d.kfv, "", this.fij, null), ["buttons", "lbuttons", "vbuttons"]);
        this.etp.roh("mgames", this.aky(d.zom, "+", this.ooj, null), ["buttons", "mbuttons", "vbuttons"]);
        this.etp.roh("lmincredit", this.aky(d.mwm, "", this.wsl, null), ["buttons", "lbuttons", "vbuttons"]);
        this.etp.roh("mmincredit", this.aky(d.sbc, "+", this.rkd, null), ["buttons", "mbuttons", "vbuttons"]);
        this.etp.roh("lmaxcredit", this.aky(d.pai, "", this.ffq, null), ["buttons", "lbuttons", "vbuttons"]);
        this.etp.roh("mmaxcredit", this.aky(d.uqr, "+", this.anh, null), ["buttons", "mbuttons", "vbuttons"]);
        this.etp.roh("lmaxwin", this.aky(d.sfz, "", this.csv, null), ["buttons", "lbuttons", "vbuttons"]);
        this.etp.roh("mmaxwin", this.aky(d.vvz, "+", this.cyk, null), ["buttons", "mbuttons", "vbuttons"]);
        this.etp.roh("cmincredit", this.nzs(d.ewu, "", this.koo), ["checkboxes"]);
        this.etp.roh("cmaxcredit", this.nzs(d.jmy, "", this.swy), ["checkboxes"]);
        this.etp.roh("cmaxwin", this.nzs(d.fej, "", this.ure), ["checkboxes"])
    };
    this.uau = function (d) {
        this.etp.roh("gamesd", this.bzk(d.ajh, null, (this.lrv[this.wnc] > 0) ? this.lrv[this.wnc] : "---"), ["displays"]);
        this.etp.roh("mincreditd", this.bzk(d.aep, null, "---"), ["displays"]);
        this.etp.roh("maxcreditd", this.bzk(d.yuf, null, "---"), ["displays"]);
        this.etp.roh("maxwind", this.bzk(d.gre, null, "---"), ["displays"])
    };
    this.bzk = function (d, g, f) {
        var e = new wxm();
        e.yfy(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.aky = function (f, j, g, e) {
        var d = new puk();
        d.yfy(f, this.context2D, null, null, j);
        d.parent = this;
        d.npx = g;
        if (e) {
            d.ohs = e.dye
        }
        return d
    };
    this.nzs = function (e, g, f) {
        var d = new aoj();
        d.yfy(e, this.context2D, null, g);
        d.parent = this;
        d.npx = f;
        return d
    };
    this.fpy = function (r, n) {
        var s = this.etp.vla("vbuttons"),
            l = this.etp.vla("cbuttons"),
            g = this.etp.vla("checkboxes"),
            p = this.etp.brx("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.wlo) {
            return true
        }
        if ((!p || !p.kgg()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.fjz = true;
            this.zln();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.kgg() === true && d.hon() === true && d.sjx() === false) {
                    d.ars(true, false, false);
                    this.jcz = 0;
                    this.ujy = 1;
                    if (d.npx() === false) {
                        this.jfk = function () {
                            if (d.npx() === true) {
                                clearInterval(b.dwx);
                                d.ars(false, false);
                                b.parent.jvb();
                                for (var t = 0; t < m; t++) {
                                    s[t].ntl(false)
                                }
                            }
                        };
                        this.dwx = setInterval(this.jfk, this.stw)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].ntl(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.kgg() === true && d.hon() === true) {
                    this.parent.fcy.aee("btn");
                    this.parent.fcy.lgu("btn");
                    d.ars(true, false);
                    d.npx();
                    for (var e = 0; e < m; e++) {
                        l[e].ntl(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.kgg() === true && k.hon() === true) {
                    k.etb(!k.tzz(), true);
                    k.npx();
                    for (var e = 0; e < m; e++) {
                        g[e].ntl(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.gnx = function () {
        var e = this.etp.vla("vbuttons"),
            j = this.etp.vla("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.ogk() == true) {
                clearInterval(this.dwx);
                f.ars(false, false);
                this.parent.jvb();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.ogk() == true) {
                f.ars(false, false);
                this.parent.jvb();
                return true
            }
        }
        return false
    };
    this.ivn = function (l) {
        var k = this.etp.vla("buttons");
        if (this.wlo) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.ohs) {
                if (f.hon() && !f.sjx()) {
                    this.parent.fcy.aee("btn");
                    this.parent.fcy.lgu("btn");
                    f.ars(true, false);
                    f.npx();
                    for (var e = 0; e < d; e++) {
                        k[e].ntl(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.kif = function () {
        var g = this.etp.vla("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.ogk() == true) {
                e.ars(false, false);
                this.parent.jvb();
                return true
            }
        }
        return false
    };
    this.qjf = function (d) {
        this.etp.zwf("buttons", "#wsn", [d]);
        this.etp.zwf("checkboxes", "#wsn", [d]);
        if (d === true && this.rah === true) {
            this.etp.tvc("cmincredit", "#wsn", [false])
        }
    };
    this.aui = function (d) {
        this.lrv = d.g;
        this.udj = d.v;
        this.xmt = d.v;
        this.xdk = d.r;
        this.rah = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.vys = d.m;
            this.tla = d.m
        }
    };
    this.smu = function () {
        if (this.xdk === true) {
            this.nhp = this.parent.cfy;
            this.ddv = this.parent.cfy;
            this.wnc = 0;
            this.ewl = 0
        }
    };
    this.lxz = function () {
        if (this.lrv.length > 0 && this.wnc >= 0 && this.fjz === false) {
            return this.lrv[this.wnc]
        }
        return 0
    };
    this.lvj = function () {
        var d = this.etp.brx("cmincredit") == null || this.etp.tvc("cmincredit", "#tzz");
        if (this.nhp > 0 && d === true) {
            return this.nhp
        }
        return 0
    };
    this.kso = function () {
        var d = this.etp.brx("cmaxcredit") == null || this.etp.tvc("cmaxcredit", "#tzz");
        if (this.ddv > 0 && d === true) {
            return this.ddv
        }
        return 0
    };
    this.fub = function () {
        var d = this.etp.brx("cmaxwin") == null || this.etp.tvc("cmaxwin", "#tzz");
        if (this.ewl > 0 && d === true) {
            return this.ewl
        }
        return 0
    };
    this.sqt = function () {
        var f = this.etp.brx("cmincredit") == null || this.etp.tvc("cmincredit", "#tzz"),
            d = this.etp.brx("cmaxcredit") == null || this.etp.tvc("cmaxcredit", "#tzz"),
            e = this.etp.brx("cmaxwin") == null || this.etp.tvc("cmaxwin", "#tzz");
        this.nak = false;
        this.fjz = false;
        this.xmt = (this.tla > 0) ? this.parent.jcq() * this.tla : this.xmt;
        this.udj = (this.vys > 0) ? this.parent.jcq() * this.vys : this.udj;
        if (this.xdk === true) {
            f = this.rah;
            d = false;
            e = false;
            this.smu()
        } else {
            if (this.rah === true) {
                f = true;
                this.nhp = (this.nhp < this.parent.cfy) ? this.nhp : this.parent.cfy;
                this.nhp = (this.nhp > 0) ? this.nhp : this.parent.cfy
            } else {
                f = (this.nhp <= this.parent.cfy) ? f : false;
                this.nhp = (this.nhp < this.parent.cfy) ? this.nhp : this.parent.cfy
            }
            d = (this.ddv >= this.parent.cfy) ? d : false;
            this.ddv = (this.ddv > this.parent.cfy) ? this.ddv : this.parent.cfy
        }
        this.etp.tvc("cmincredit", "#etb", [f]);
        this.etp.tvc("cmaxcredit", "#etb", [d]);
        this.etp.tvc("cmaxwin", "#etb", [e]);
        this.etp.tvc("gamesd", "#qib", [(this.lrv[this.wnc] > 0) ? this.lrv[this.wnc] : "---"]);
        this.etp.tvc("mincreditd", "#qib", [(f === true && this.nhp > 0) ? this.parent.jos(this.nhp) : "---"]);
        this.etp.tvc("maxcreditd", "#qib", [(d === true && this.ddv > 0) ? this.parent.jos(this.ddv) : "---"]);
        this.etp.tvc("maxwind", "#qib", [(e === true && this.ewl > 0) ? this.parent.jos(this.ewl) : "---"]);
        this.etp.tvc("lmincredit", "#tsg", [f]);
        this.etp.tvc("mmincredit", "#tsg", [f && this.nhp < this.parent.cfy]);
        this.etp.tvc("lmaxcredit", "#tsg", [d && this.ddv > this.parent.cfy]);
        this.etp.tvc("mmaxcredit", "#tsg", [d]);
        this.etp.tvc("lmaxwin", "#tsg", [e && this.ewl > this.xmt]);
        this.etp.tvc("mmaxwin", "#tsg", [e]);
        if (this.atw === false) {
            this.qjf(true);
            this.tsg(true);
            this.parent.jvb()
        } else {
            this.yrt();
            this.parent.fcy.aee("panel_out");
            this.parent.fcy.lgu("panel_out");
            this.ayb()
        }
    };
    this.zln = function () {
        b.qjf(false);
        if (b.atw === false) {
            b.tsg(false);
            b.parent.jvb()
        } else {
            b.nii();
            b.parent.fcy.aee("panel_out");
            b.parent.fcy.lgu("panel_out");
            b.ayb()
        }
    };
    this.yrt = function () {
        this.tsg(true);
        this.wlo = true;
        this.otl = false;
        this.rae = c;
        this.kkd = Math.floor(this.width / this.nsk);
        this.owo = 0;
        this.uvo = 0;
        this.sjt = new Date().getTime()
    };
    this.nii = function () {
        this.wlo = true;
        this.otl = false;
        this.rae = a;
        this.kkd = -Math.floor(this.width / this.nsk);
        this.owo = 1;
        this.uvo = this.width;
        this.sjt = new Date().getTime()
    };
    this.ayb = function () {
        var d = b.jzc,
            e = new Date().getTime();
        if (b.owo < b.nsk) {
            b.uvo += b.kkd;
            b.owo++;
            b.parent.jvb();
            d = (((b.rae === a) ? b.owo - 1 : b.owo) * b.jzc - (e - b.sjt));
            b.zvu = setTimeout(b.ayb, d)
        } else {
            b.wlo = false;
            b.otl = true;
            if (b.rae == a) {
                b.tsg(false);
                b.parent.zzc();
                if (b.nak === true) {
                    b.sga = setTimeout(b.parent.ift, 200)
                }
            } else {
                if (b.rae == c) {
                    b.qjf(true)
                }
            }
            b.parent.jvb()
        }
    };
    this.stop = function () {
        clearTimeout(this.zvu);
        clearTimeout(this.xjp);
        clearTimeout(this.sga);
        clearInterval(this.dwx)
    };
    this.jes = function (d) {
        this.jsb = d.ozf;
        this.oat = d.khs;
        this.zxf = d.bdh;
        this.etp.tvc("start", "#qib", [d.start]);
        this.etp.tvc("cancel", "#qib", [d.yjf]);
        this.etp.tvc("cmincredit", "#qib", [d.gvm]);
        this.etp.tvc("cmaxcredit", "#qib", [d.sgo]);
        this.etp.tvc("cmaxwin", "#qib", [d.gtu]);
        if (this.parent.afj === true && bio.pql.value44.d === true) {
            this.spo = d.jlp
        }
    };
    this.jvb = function (n, m, o, j) {
        if (!this.kgg()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.etp.tmn(),
            e = this.gnv,
            l = this.cxo;
        if (this.kqn) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.gnv);
            e.addColorStop(1, this.kqn)
        }
        if (this.hkg) {
            if (this.ash === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.ash === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.ash === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.ash === "left") {
                l.addColorStop(1, this.cxo);
                l.addColorStop(0, this.hkg)
            } else {
                if (this.ash === "center" || this.ash === "right") {
                    l.addColorStop(0, this.cxo);
                    l.addColorStop(1, this.hkg)
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
        bio.olq.gpz(p, 0, 0, this.width, this.height, this.gdw, this.fsq, this.fsq, this.gdw, e, 1, l, this.oxo, 1);
        bio.olq.ope(p, this.urn.x, this.urn.y, this.urn.width, this.urn.height, this.ynm, this.pls, this.xso, this.oxo / 2);
        bio.olq.ope(p, this.waa.x, this.waa.y, this.waa.width, this.waa.height, this.ynm, this.pls, this.xso, this.oxo / 2);
        bio.olq.fwv(p, this.jsb, this.cdk, this.vog.x, this.vog.y, this.vog.width, this.vog.height, this.zrw, this.bwp, this.kfk);
        bio.olq.tae(p, this.spo, this.tas, this.hih.x, this.hih.y, this.hih.width, this.hih.height, this.zrw, this.xsy, this.kfk, "center", true);
        bio.olq.yzj(p, this.oat, this.tas, this.iog.x, this.iog.y, this.iog.width, this.iog.height, this.zrw, this.xsy, this.kfk, 0);
        bio.olq.fwv(p, this.zxf, this.tas, this.osp.x, this.osp.y, this.osp.width, this.osp.height, this.zrw, this.xsy, this.kfk);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].jvb()
        }
        p.restore();
        if (this.lhh && this.ien) {
            if (this.wlo) {
                if (this.uvo > 0) {
                    if (this.ash === "left") {
                        this.lhh.drawImage(this.ien, this.width - this.uvo, 0, this.uvo, this.height, this.x, this.y, this.uvo, this.height)
                    } else {
                        if (this.ash === "right") {
                            this.lhh.drawImage(this.ien, 0, 0, this.uvo, this.height, this.x + this.width - this.uvo, this.y, this.uvo, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.lhh.drawImage(this.ien, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.lhh.drawImage(this.ien, this.x, this.y)
                }
            }
        }
    };
    this.naw = function () {
        b.parent.jvb();
        if (b.lrv[b.wnc] <= 0) {
            return
        }
        if (b.atw === false) {
            b.xjp = setTimeout(b.parent.zzc, 400);
            b.sga = setTimeout(b.parent.ift, 500)
        } else {
            b.wlo = true;
            b.nak = true;
            b.xjp = setTimeout(b.zln, 400)
        }
    };
    this.zbu = function () {
        b.parent.jvb();
        b.fjz = true;
        if (b.atw === false) {
            b.xjp = setTimeout(b.parent.zzc, 400)
        } else {
            b.wlo = true;
            b.xjp = setTimeout(b.zln, 400)
        }
    };
    this.ooj = function () {
        b.wnc = (b.wnc < b.lrv.length - 1) ? b.wnc + 1 : 0;
        b.parent.fcy.lgu("step0");
        b.etp.tvc("gamesd", "#qib", [(b.lrv[b.wnc] > 0) ? b.lrv[b.wnc] : "---"]);
        b.parent.jvb();
        return (b.wnc >= b.lrv.length - 1)
    };
    this.fij = function () {
        b.wnc = (b.wnc > 0) ? b.wnc - 1 : b.lrv.length - 1;
        b.parent.fcy.lgu("step0");
        b.etp.tvc("gamesd", "#qib", [(b.lrv[b.wnc] > 0) ? b.lrv[b.wnc] : "---"]);
        b.parent.jvb();
        return (b.wnc <= 0)
    };
    this.rkd = function () {
        var d = b.etp.brx("cmincredit") == null || b.etp.tvc("cmincredit", "#tzz");
        if (d === true) {
            if (++b.jcz > 10) {
                b.ujy = 10
            }
            b.nhp = (b.nhp + (b.udj * b.ujy) <= b.parent.cfy) ? b.nhp + (b.udj * b.ujy) : b.parent.cfy;
            b.parent.fcy.lgu("step0");
            b.etp.tvc("mincreditd", "#qib", [(b.nhp > 0) ? b.parent.jos(b.nhp) : "---"]);
            b.etp.tvc("mmincredit", "#tsg", [d && b.nhp < b.parent.cfy]);
            b.etp.tvc("lmincredit", "#tsg", [d && b.nhp > 0]);
            b.parent.jvb();
            return (b.nhp >= b.parent.cfy)
        }
        return true
    };
    this.wsl = function () {
        var d = b.etp.brx("cmincredit") == null || b.etp.tvc("cmincredit", "#tzz");
        if (d === true) {
            if (++b.jcz > 10) {
                b.ujy = 10
            }
            b.nhp = (b.nhp - (b.udj * b.ujy) > 0) ? b.nhp - (b.udj * b.ujy) : 0;
            b.parent.fcy.lgu("step0");
            b.etp.tvc("mincreditd", "#qib", [(b.nhp > 0) ? b.parent.jos(b.nhp) : "---"]);
            b.etp.tvc("mmincredit", "#tsg", [d && b.nhp < b.parent.cfy]);
            b.etp.tvc("lmincredit", "#tsg", [d && b.nhp > 0]);
            b.parent.jvb();
            return (b.nhp >= b.parent.cfy || b.nhp <= 0)
        }
        return true
    };
    this.anh = function () {
        var d = b.etp.brx("cmaxcredit") == null || b.etp.tvc("cmaxcredit", "#tzz");
        if (d === true) {
            if (++b.jcz > 10) {
                b.ujy = 10
            }
            b.ddv = (b.ddv + (b.xmt * b.ujy) > 0) ? b.ddv + (b.xmt * b.ujy) : 0;
            b.parent.fcy.lgu("step0");
            b.etp.tvc("maxcreditd", "#qib", [(b.ddv > 0) ? b.parent.jos(b.ddv) : "---"]);
            b.etp.tvc("lmaxcredit", "#tsg", [d && b.ddv > b.parent.cfy]);
            b.parent.jvb();
            return (b.ddv <= b.parent.cfy)
        }
        return true
    };
    this.ffq = function () {
        var d = b.etp.brx("cmaxcredit") == null || b.etp.tvc("cmaxcredit", "#tzz");
        if (d === true) {
            if (++b.jcz > 10) {
                b.ujy = 10
            }
            b.ddv = (b.ddv - (b.xmt * b.ujy) > b.parent.cfy) ? b.ddv - (b.xmt * b.ujy) : b.parent.cfy;
            b.parent.fcy.lgu("step0");
            b.etp.tvc("maxcreditd", "#qib", [(b.ddv > 0) ? b.parent.jos(b.ddv) : "---"]);
            b.etp.tvc("lmaxcredit", "#tsg", [d && b.ddv > b.parent.cfy]);
            b.parent.jvb();
            return (b.ddv <= b.parent.cfy)
        }
        return true
    };
    this.cyk = function () {
        var d = b.etp.brx("cmaxwin") == null || b.etp.tvc("cmaxwin", "#tzz");
        if (d === true) {
            if (++b.jcz > 10) {
                b.ujy = 10
            }
            b.ewl = (b.ewl + (b.xmt * b.ujy) > 0) ? b.ewl + (b.xmt * b.ujy) : 0;
            b.parent.fcy.lgu("step0");
            b.etp.tvc("maxwind", "#qib", [(b.ewl > 0) ? b.parent.jos(b.ewl) : "---"]);
            b.etp.tvc("lmaxwin", "#tsg", [d && b.ewl > b.xmt]);
            b.parent.jvb();
            return (b.ewl <= b.xmt)
        }
        return true
    };
    this.csv = function () {
        var d = b.etp.brx("cmaxwin") == null || b.etp.tvc("cmaxwin", "#tzz");
        if (d === true) {
            if (++b.jcz > 10) {
                b.ujy = 10
            }
            b.ewl = (b.ewl - (b.xmt * b.ujy) > 0) ? b.ewl - (b.xmt * b.ujy) : b.xmt;
            b.parent.fcy.lgu("step0");
            b.etp.tvc("maxwind", "#qib", [(b.ewl > 0) ? b.parent.jos(b.ewl) : "---"]);
            b.etp.tvc("lmaxwin", "#tsg", [d && b.ewl > b.xmt]);
            b.parent.jvb();
            return (b.ewl <= b.xmt)
        }
        return true
    };
    this.koo = function () {
        var d = b.etp.brx("cmincredit") == null || b.etp.tvc("cmincredit", "#tzz");
        b.nhp = b.parent.cfy;
        b.etp.tvc("mincreditd", "#qib", [(d === true && b.nhp > 0) ? b.parent.jos(b.nhp) : "---"]);
        b.etp.tvc("lmincredit", "#tsg", [d]);
        b.etp.tvc("mmincredit", "#tsg", [d && b.nhp < b.parent.cfy]);
        b.parent.jvb()
    };
    this.swy = function () {
        var d = b.etp.brx("cmaxcredit") == null || b.etp.tvc("cmaxcredit", "#tzz");
        b.ddv = b.parent.cfy;
        b.etp.tvc("maxcreditd", "#qib", [(d === true && b.ddv > 0) ? b.parent.jos(b.ddv) : "---"]);
        b.etp.tvc("lmaxcredit", "#tsg", [d && b.ddv > b.parent.cfy]);
        b.etp.tvc("mmaxcredit", "#tsg", [d]);
        b.parent.jvb()
    };
    this.ure = function () {
        var d = b.etp.brx("cmaxwin") == null || b.etp.tvc("cmaxwin", "#tzz");
        if (b.ewl === 0) {
            b.ewl = b.xmt
        }
        b.etp.tvc("maxwind", "#qib", [(d === true && b.ewl > 0) ? b.parent.jos(b.ewl) : "---"]);
        b.etp.tvc("lmaxwin", "#tsg", [d && b.ewl > b.xmt]);
        b.etp.tvc("mmaxwin", "#tsg", [d]);
        b.parent.jvb()
    }
}
hft.prototype = new idn;

function qiw() {
    var a = this;
    this.etp = null;
    this.bdv = false;
    this.usi = "";
    this.ldi = "";
    this.nin = "";
    this.hor = "";
    this.spo = "";
    this.oat = "";
    this.zxf = "";
    this.zrw = "arial";
    this.kfk = "bold";
    this.tas = "white";
    this.gnv = "black";
    this.kqn = null;
    this.cxo = "white";
    this.hkg = "rgb(150,150,150)";
    this.oxo = 3;
    this.qrn = 4;
    this.aud = 24;
    this.ofn = 24;
    this.xsy = 24;
    this.ral = new bku();
    this.hwk = new bku();
    this.evd = new bku();
    this.haw = new bku();
    this.tws = new bku();
    this.llv = new bku();
    this.gmk = new bku();
    this.lrv = [];
    this.wnc = 0;
    this.udj = 0;
    this.xmt = 0;
    this.vys = 0;
    this.tla = 0;
    this.nhp = 0;
    this.ddv = 0;
    this.ewl = 0;
    this.aet = false;
    this.rah = false;
    this.akj = 0;
    this.jqc = true;
    this.ksm = true;
    this.jfk = null;
    this.dwx = 0;
    this.jcz = 0;
    this.ujy = 1;
    this.stw = 250;
    this.yfy = function (b, d, c) {
        qiw.prototype.yfy.call(this, b, d, c);
        this.etp = new hcn();
        this.etp.yfy();
        this.etp.mnm("buttons");
        this.etp.mnm("displays");
        this.etp.mnm("checkboxes");
        this.etp.mnm("lbuttons");
        this.etp.mnm("mbuttons");
        this.etp.mnm("tbuttons");
        this.etp.mnm("bbuttons");
        this.etp.mnm("bdisplays");
        this.etp.mnm("abuttons");
        this.etp.mnm("adisplays");
        this.etp.mnm("acheckboxes");
        this.etp.mnm("sbuttons");
        this.etp.mnm("hbuttons")
    };
    this.hdv = function (b) {
        try {
            this.izp(b);
            this.ezz(b);
            this.grn(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.psg = function (b) {
        try {
            var c = this.etp.vla("lbuttons"),
                n = this.etp.vla("mbuttons"),
                k = this.etp.vla("tbuttons"),
                m = this.etp.vla("sbuttons"),
                l = this.etp.vla("hbuttons"),
                f = this.etp.vla("displays");
            this.zrw = b.font;
            this.kfk = b.zqm;
            this.tas = b.xmb;
            this.gnv = b.backgroundColor;
            this.kqn = b.fss;
            this.cxo = b.borderColor;
            this.hkg = b.vna;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].psg(b.pxb)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].psg(b.hmv)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].psg(b.iug)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].psg(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].psg(b.ues)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].psg(b.ues)
            }
            this.etp.zwf("checkboxes", "#psg", [b.pae])
        } catch (j) {
            console.error(j)
        }
    };
    this.mey = function (g) {
        try {
            var b = this.etp.vla("lbuttons"),
                o = this.etp.vla("mbuttons"),
                l = this.etp.vla("tbuttons"),
                n = this.etp.vla("sbuttons"),
                m = this.etp.vla("hbuttons"),
                c = this.etp.vla("bdisplays"),
                f = this.etp.vla("adisplays");
            mds = this.etp.vla("checkboxes"), mtj = n.length, ofh = (mtj <= 2) ? g.udx : (mtj <= 3) ? g.llb : (mtj <= 4) ? g.xih : g.phx, mtj = m.length, jfs = (mtj <= 2) ? g.udx : (mtj <= 3) ? g.llb : (mtj <= 4) ? g.xih : g.phx, xte = (this.parent.ndn() != null) ? g.omc : g.ius;
            this.oxo = g.dbr;
            this.qrn = g.avi;
            this.aud = g.ysn;
            this.ofn = g.fjd;
            this.xsy = g.ycv;
            this.ral = g.zxt;
            this.hwk = g.mlp;
            this.evd = g.wds;
            this.haw = g.umg;
            this.tws = g.dsy;
            this.llv = g.nho;
            this.gmk = g.qse;
            this.etp.tvc("bett", "#zlp", [xte.ueu]);
            this.etp.tvc("autot", "#zlp", [xte.hcd]);
            this.etp.tvc("helpt", "#zlp", [xte.nhq]);
            this.etp.tvc("settingt", "#zlp", [xte.jqk]);
            this.etp.tvc("returnt", "#zlp", [xte.wzb]);
            this.etp.tvc("lbet", "#zlp", [g.qlr]);
            this.etp.tvc("mbet", "#zlp", [g.ejs]);
            this.etp.tvc("llines", "#zlp", [g.rix]);
            this.etp.tvc("mlines", "#zlp", [g.hcg]);
            this.etp.tvc("betd", "#zlp", [g.czs]);
            this.etp.tvc("linesd", "#zlp", [g.ewe]);
            this.etp.tvc("totald", "#zlp", [g.qwz]);
            this.etp.tvc("lgames", "#zlp", [g.kfv]);
            this.etp.tvc("mgames", "#zlp", [g.zom]);
            this.etp.tvc("lmincredit", "#zlp", [g.mwm]);
            this.etp.tvc("mmincredit", "#zlp", [g.sbc]);
            this.etp.tvc("lmaxcredit", "#zlp", [g.pai]);
            this.etp.tvc("mmaxcredit", "#zlp", [g.uqr]);
            this.etp.tvc("lmaxwin", "#zlp", [g.sfz]);
            this.etp.tvc("mmaxwin", "#zlp", [g.vvz]);
            this.etp.tvc("gamesd", "#zlp", [g.ajh]);
            this.etp.tvc("mincreditd", "#zlp", [g.aep]);
            this.etp.tvc("maxcreditd", "#zlp", [g.yuf]);
            this.etp.tvc("maxwind", "#zlp", [g.gre]);
            this.etp.tvc("cmincredit", "#zlp", [g.ewu]);
            this.etp.tvc("cmaxcredit", "#zlp", [g.jmy]);
            this.etp.tvc("cmaxwin", "#zlp", [g.fej]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].mey(g.pxb)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].mey(g.hmv)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].mey(g.iug)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].mey(g.ncc)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].mey(g.hnu)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].mey(g.ues)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].mey(g.ues)
            }
            for (var d = 0, j = mds.length; d < j; d++) {
                mds[d].mey(g.pae)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].zlp(ofh[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].zlp(jfs[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.izp = function (c) {
        var b = (this.parent.ndn() != null) ? c.omc : c.ius;
        this.etp.roh("bett", this.qmu(b.ueu, null, this.parent.fcy.uxh("btn_b"), this.zvy, null), ["buttons", "tbuttons"]);
        if (this.parent.ndn() != null) {
            this.etp.roh("autot", this.qmu(b.hcd, null, this.parent.fcy.uxh("btn_as"), this.khe, null), ["buttons", "tbuttons"])
        }
        this.etp.roh("helpt", this.qmu(b.nhq, null, this.parent.fcy.uxh("btn_i"), this.tyc, null), ["buttons", "tbuttons"]);
        this.etp.roh("settingt", this.qmu(b.jqk, null, this.parent.fcy.uxh("btn_se"), this.ysv, null), ["buttons", "tbuttons"]);
        this.etp.roh("returnt", this.qmu(b.wzb, null, this.parent.fcy.uxh("btn_c"), this.ksz, null), ["buttons", "tbuttons"])
    };
    this.ezz = function (b) {
        this.etp.roh("betd", this.bzk(b.czs, null, this.parent.cqc), ["displays", "bdisplays"]);
        this.etp.roh("lbet", this.aky(b.qlr, "", this.parent.edz), ["buttons", "lbuttons", "bbuttons"]);
        this.etp.roh("mbet", this.aky(b.ejs, "+", this.parent.lnl), ["buttons", "mbuttons", "bbuttons"]);
        this.etp.roh("linesd", this.bzk(b.ewe, null, this.parent.hio), ["displays", "bdisplays"]);
        if (this.bdv) {
            this.etp.roh("llines", this.aky(b.rix, "", this.parent.dji), ["buttons", "lbuttons", "bbuttons"]);
            this.etp.roh("mlines", this.aky(b.hcg, "+", this.parent.zwk), ["buttons", "mbuttons", "bbuttons"])
        }
        this.etp.roh("totald", this.bzk(b.qwz, null, this.parent.jcq()), ["displays", "bdisplays"])
    };
    this.grn = function (b) {
        this.etp.roh("gamesd", this.bzk(b.ajh, null, this.lrv[this.wnc]), ["displays", "adisplays"]);
        this.etp.roh("lgames", this.aky(b.kfv, "", this.fij), ["buttons", "lbuttons", "abuttons"]);
        this.etp.roh("mgames", this.aky(b.zom, "+", this.ooj), ["buttons", "mbuttons", "abuttons"]);
        this.etp.roh("mincreditd", this.bzk(b.aep, null, "---"), ["displays", "adisplays"]);
        this.etp.roh("lmincredit", this.aky(b.mwm, "", this.wsl), ["buttons", "lbuttons", "abuttons"]);
        this.etp.roh("mmincredit", this.aky(b.sbc, "+", this.rkd), ["buttons", "mbuttons", "abuttons"]);
        this.etp.roh("maxcreditd", this.bzk(b.yuf, null, "---"), ["displays", "adisplays"]);
        this.etp.roh("lmaxcredit", this.aky(b.pai, "", this.ffq), ["buttons", "lbuttons", "abuttons"]);
        this.etp.roh("mmaxcredit", this.aky(b.uqr, "+", this.anh), ["buttons", "mbuttons", "abuttons"]);
        this.etp.roh("maxwind", this.bzk(b.gre, null, "---"), ["displays", "adisplays"]);
        this.etp.roh("lmaxwin", this.aky(b.sfz, "", this.csv), ["buttons", "lbuttons", "abuttons"]);
        this.etp.roh("mmaxwin", this.aky(b.vvz, "+", this.cyk), ["buttons", "mbuttons", "abuttons"]);
        this.etp.roh("cmincredit", this.nzs(b.ewu, "", this.koo), ["checkboxes", "acheckboxes"]);
        this.etp.roh("cmaxcredit", this.nzs(b.jmy, "", this.swy), ["checkboxes", "acheckboxes"]);
        this.etp.roh("cmaxwin", this.nzs(b.fej, "", this.ure), ["checkboxes", "acheckboxes"])
    };
    this.wjs = function (j, g, f, e, d, b) {
        var c = new daq();
        c.yfy(new bku(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.npx = e;
        c.kmg = g;
        c.swl(d, b);
        c.mey(this.parent.utg.cix.ues);
        c.psg(this.parent.style.cix.ues);
        c.wbz(f);
        this.etp.roh(j, c, ["buttons", "sbuttons"])
    };
    this.ahk = function (f, e, d, c) {
        var b = new daq();
        b.yfy(new bku(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.npx = c;
        b.kmg = e;
        b.mey(this.parent.utg.cix.ues);
        b.psg(this.parent.style.cix.ues);
        b.wbz(d);
        this.etp.roh(f, b, ["buttons", "hbuttons"])
    };
    this.bzk = function (b, e, d) {
        var c = new wxm();
        c.yfy(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.aky = function (c, e, d) {
        var b = new puk();
        b.yfy(c, this.context2D, null, null, e);
        b.parent = this;
        b.npx = d;
        return b
    };
    this.qmu = function (d, g, f, e, c) {
        var b = new puk();
        b.yfy(d, this.context2D, null, f, g);
        b.parent = this;
        b.npx = e;
        if (c != null) {
            b.ohs = c
        }
        return b
    };
    this.nzs = function (c, e, d) {
        var b = new aoj();
        b.yfy(c, this.context2D, null, e);
        b.parent = this;
        b.npx = d;
        return b
    };
    this.fpy = function (o, n) {
        var m = this.etp.vla("buttons"),
            g = this.etp.vla("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.kgg() === true) {
                if (b.hon() === true && b.sjx() === false) {
                    if (b instanceof daq) {
                        this.parent.fcy.aee("btn");
                        this.parent.fcy.lgu("btn");
                        b.ars(true, true, true);
                        b.npx()
                    } else {
                        if (b instanceof puk) {
                            if (b.vfi() === "rect") {
                                this.parent.fcy.aee("btn");
                                this.parent.fcy.lgu("btn");
                                b.ars(true, true, false);
                                b.npx()
                            } else {
                                b.ars(true, false, false);
                                this.jcz = 0;
                                this.ujy = 1;
                                if (b.npx() === false) {
                                    this.jfk = function () {
                                        if (b.npx() === true) {
                                            clearInterval(a.dwx);
                                            b.ars(false, true);
                                            for (var p = 0; p < l; p++) {
                                                m[p].ntl(false)
                                            }
                                        }
                                    };
                                    this.dwx = setInterval(this.jfk, this.stw)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].ntl(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.kgg() === true && k.hon() === true) {
                    k.etb(!k.tzz(), true);
                    k.npx();
                    for (var c = 0; c < l; c++) {
                        g[c].ntl(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.gnx = function () {
        var e = this.etp.vla("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ogk() == true && !(c instanceof puk && c.vfi() === "rect")) {
                clearInterval(this.dwx);
                c.ars(false, true);
                return true
            }
        }
        return false
    };
    this.ivn = function (b) {};
    this.kif = function (b) {};
    this.ful = function (c, b, d) {
        this.etp.tvc("betd", "#qib", [c]);
        this.etp.tvc("linesd", "#qib", [b]);
        this.etp.tvc("totald", "#qib", [d]);
        this.parent.jvb()
    };
    this.vtm = function (b) {
        this.lrv = b.g;
        this.udj = b.v;
        this.xmt = b.v;
        this.aet = b.r;
        this.rah = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.vys = b.m;
            this.tla = b.m
        }
    };
    this.iqf = function () {
        if (this.aet === true) {
            this.nhp = this.parent.cfy;
            this.ddv = this.parent.cfy;
            this.wnc = 0;
            this.ewl = 0
        }
    };
    this.lxz = function () {
        if (this.lrv.length > 0 && this.wnc >= 0) {
            return this.lrv[this.wnc]
        }
        return 0
    };
    this.lvj = function () {
        var b = this.etp.brx("cmincredit") == null || this.etp.tvc("cmincredit", "#tzz");
        if (this.nhp > 0 && b === true) {
            return this.nhp
        }
        return 0
    };
    this.kso = function () {
        var b = this.etp.brx("cmaxcredit") == null || this.etp.tvc("cmaxcredit", "#tzz");
        if (this.ddv > 0 && b === true) {
            return this.ddv
        }
        return 0
    };
    this.fub = function () {
        var b = this.etp.brx("cmaxwin") == null || this.etp.tvc("cmaxwin", "#tzz");
        if (this.ewl > 0 && b === true) {
            return this.ewl
        }
        return 0
    };
    this.sqt = function (c, f, d) {
        if (this.lrv && this.lrv.length > 0) {
            var g = this.etp.brx("cmincredit") == null || this.etp.tvc("cmincredit", "#tzz"),
                e = this.etp.brx("cmaxcredit") == null || this.etp.tvc("cmaxcredit", "#tzz"),
                b = this.etp.brx("cmaxwin") == null || this.etp.tvc("cmaxwin", "#tzz");
            if (this.aet === true) {
                g = this.rah;
                e = false;
                b = false;
                this.iqf()
            } else {
                if (this.rah === true) {
                    g = true;
                    this.nhp = (this.nhp < this.parent.cfy) ? this.nhp : this.parent.cfy;
                    this.nhp = (this.nhp > 0) ? this.nhp : this.parent.cfy
                } else {
                    g = (this.nhp < this.parent.cfy) ? g : false;
                    this.nhp = (this.nhp < this.parent.cfy) ? this.nhp : this.parent.cfy
                }
                e = (this.ddv > this.parent.cfy) ? e : false;
                this.ddv = (this.ddv > this.parent.cfy) ? this.ddv : this.parent.cfy
            }
            this.etp.tvc("cmincredit", "#etb", [g]);
            this.etp.tvc("cmaxcredit", "#etb", [e]);
            this.etp.tvc("cmaxwin", "#etb", [b]);
            this.etp.tvc("gamesd", "#qib", [(this.lrv[this.wnc] > 0) ? this.lrv[this.wnc] : "---"]);
            this.etp.tvc("mincreditd", "#qib", [(g === true && this.nhp > 0) ? this.parent.jos(this.nhp) : "---"]);
            this.etp.tvc("maxcreditd", "#qib", [(e === true && this.ddv > 0) ? this.parent.jos(this.ddv) : "---"]);
            this.etp.tvc("maxwind", "#qib", [(b === true && this.ewl > 0) ? this.parent.jos(this.ewl) : "---"]);
            this.etp.tvc("lmincredit", "#tsg", [g]);
            this.etp.tvc("mmincredit", "#tsg", [g]);
            this.etp.tvc("lmaxcredit", "#tsg", [e]);
            this.etp.tvc("mmaxcredit", "#tsg", [e]);
            this.etp.tvc("lmaxwin", "#tsg", [b]);
            this.etp.tvc("mmaxwin", "#tsg", [b])
        }
        this.jqc = c;
        this.ksm = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.zvy()
            } else {
                if (d === 1) {
                    if (this.parent.ndn() != null) {
                        this.khe()
                    } else {
                        this.tyc()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.ndn() != null) {
                            this.tyc()
                        } else {
                            this.ysv()
                        }
                    } else {
                        if (d === 3 && this.parent.ndn() != null) {
                            this.ysv()
                        }
                    }
                }
            }
        } else {
            this.zvy()
        }
        this.etp.zwf("tbuttons", "#wsn", [true]);
        this.tsg(true);
        this.parent.jvb()
    };
    this.zln = function () {
        this.etp.zwf("tbuttons", "#wsn", [false]);
        this.etp.zwf("bbuttons", "#wsn", [false]);
        this.etp.zwf("sbuttons", "#wsn", [false]);
        this.etp.zwf("abuttons", "#wsn", [false]);
        this.etp.zwf("acheckboxes", "#wsn", [false]);
        this.tsg(false);
        this.parent.jvb()
    };
    this.stop = function () {
        clearInterval(this.dwx)
    };
    this.jes = function (d, b) {
        var c = "";
        this.etp.tvc("language", "#qib", [bio.yqr.upg(d.language)]);
        this.etp.tvc("audio", "#qib", [bio.yqr.upg(d.audio)]);
        this.etp.tvc("melody", "#qib", [bio.yqr.upg(d.sxc)]);
        this.etp.tvc("fullscreen", "#qib", [bio.yqr.upg(d.iua)]);
        this.etp.tvc("turbo", "#qib", [bio.yqr.upg(d.bye)]);
        this.etp.tvc("help", "#qib", [bio.yqr.upg(d.fqj)]);
        this.etp.tvc("history", "#qib", [bio.yqr.upg(d.vfc)]);
        this.etp.tvc("statistic", "#qib", [bio.yqr.upg(d.mik)]);
        this.etp.tvc("rules", "#qib", [bio.yqr.upg(d.jat)]);
        this.etp.tvc("gamble", "#qib", [bio.yqr.upg(d.aou)]);
        if (bio.yqr.vol[bio.yqr.iaf] === bio.hvg.wms) {
            c = bio.yqr.upg(d.left)
        } else {
            if (bio.yqr.vol[bio.yqr.iaf] === bio.hvg.fod) {
                c = bio.yqr.upg(d.yud)
            } else {
                if (bio.yqr.vol[bio.yqr.iaf] === bio.hvg.dxh) {
                    c = bio.yqr.upg(d.siw)
                }
            }
        }
        this.etp.tvc("adjustment", "#qib", [c]);
        if (b && b === true) {
            this.usi = bio.yqr.upg(d.oml) + "/" + bio.yqr.upg(d.bsd) + ":";
            this.ldi = bio.yqr.upg(d.hio) + ":"
        } else {
            this.usi = bio.yqr.upg(d.oml) + ":"
        }
        this.nin = bio.yqr.upg(d.zha) + ":";
        this.oat = bio.yqr.upg(d.khs);
        this.zxf = bio.yqr.upg(d.bdh);
        if (this.parent.afj === true && bio.pql.value44.d === true) {
            this.spo = bio.yqr.upg(d.jlp)
        }
        this.etp.tvc("cmincredit", "#qib", [bio.yqr.upg(d.gvm)]);
        this.etp.tvc("cmaxcredit", "#qib", [bio.yqr.upg(d.sgo)]);
        this.etp.tvc("cmaxwin", "#qib", [bio.yqr.upg(d.gtu)])
    };
    this.jvb = function (l, j, m, e) {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.etp.vla("tbuttons"),
            b = this.gnv,
            g = this.cxo;
        if (this.kqn) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.gnv);
            b.addColorStop(1, this.kqn)
        }
        if (this.hkg) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.cxo);
            g.addColorStop(1, this.hkg)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        bio.olq.ope(n, 0, 0, this.width, this.height, this.qrn, b, g, this.oxo);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].jvb()
        }
        if (this.akj === 0) {
            this.yec(n)
        } else {
            if (this.akj === 1) {
                this.vww(n)
            } else {
                if (this.akj === 2) {
                    this.uni(n)
                } else {
                    if (this.akj === 3) {
                        this.rpw(n)
                    }
                }
            }
        }
        n.restore();
        if (this.lhh && this.ien) {
            if (c) {
                this.lhh.drawImage(this.ien, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.lhh.drawImage(this.ien, this.x, this.y)
            }
        }
    };
    this.yec = function (c) {
        var f = this.etp.vla("bbuttons"),
            d = this.etp.vla("bdisplays");
        if (this.ral.width > 0 && this.ral.height > 0) {
            bio.olq.yzj(c, this.usi, this.tas, this.ral.x, this.ral.y, this.ral.width, this.ral.height, this.zrw, this.aud, this.kfk, 0)
        }
        if (this.hwk.width > 0 && this.hwk.height > 0) {
            bio.olq.yzj(c, this.ldi, this.tas, this.hwk.x, this.hwk.y, this.hwk.width, this.hwk.height, this.zrw, this.aud, this.kfk, 0)
        }
        if (this.evd.width > 0 && this.evd.height > 0) {
            bio.olq.yzj(c, this.nin, this.tas, this.evd.x, this.evd.y, this.evd.width, this.evd.height, this.zrw, this.aud, this.kfk, 0)
        }
        bio.olq.tae(c, this.hor, this.tas, this.haw.x, this.haw.y, this.haw.width, this.haw.height, this.zrw, this.xsy, this.kfk, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].jvb()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].jvb()
        }
    };
    this.vww = function (c) {
        var f = this.etp.vla("abuttons"),
            d = this.etp.vla("adisplays"),
            g = this.etp.vla("acheckboxes");
        bio.olq.tae(c, this.spo, this.tas, this.tws.x, this.tws.y, this.tws.width, this.tws.height, this.zrw, this.xsy, this.kfk, "center", true);
        bio.olq.yzj(c, this.oat, this.tas, this.llv.x, this.llv.y, this.llv.width, this.llv.height, this.zrw, this.ofn, this.kfk, 0);
        bio.olq.fwv(c, this.zxf, this.tas, this.gmk.x, this.gmk.y, this.gmk.width, this.gmk.height, this.zrw, this.ofn, this.kfk);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].jvb()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].jvb()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].jvb()
        }
    };
    this.uni = function (c) {
        var d = this.etp.vla("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].jvb()
        }
    };
    this.rpw = function (c) {
        var d = this.etp.vla("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].jvb()
        }
    };
    this.ooj = function () {
        a.wnc = (a.wnc < a.lrv.length - 1) ? a.wnc + 1 : 0;
        a.parent.fcy.lgu("btn");
        a.etp.tvc("gamesd", "#qib", [(a.lrv[a.wnc] > 0) ? a.lrv[a.wnc] : "---"]);
        a.jvb();
        return (a.wnc >= a.lrv.length - 1)
    };
    this.fij = function () {
        a.wnc = (a.wnc > 0) ? a.wnc - 1 : a.lrv.length - 1;
        a.parent.fcy.lgu("btn");
        a.etp.tvc("gamesd", "#qib", [(a.lrv[a.wnc] > 0) ? a.lrv[a.wnc] : "---"]);
        a.jvb();
        return (a.wnc <= 0)
    };
    this.rkd = function () {
        var b = a.etp.brx("cmincredit") == null || a.etp.tvc("cmincredit", "#tzz");
        if (b === true) {
            if (++a.jcz > 10) {
                a.ujy = 10
            }
            a.nhp = (a.nhp + (a.udj * a.ujy) <= a.parent.cfy) ? a.nhp + (a.udj * a.ujy) : a.parent.cfy;
            a.parent.fcy.lgu("btn");
            a.etp.tvc("mincreditd", "#qib", [(a.nhp > 0) ? a.parent.jos(a.nhp) : "---"]);
            a.etp.tvc("mmincredit", "#tsg", [b && a.nhp < a.parent.cfy]);
            a.etp.tvc("lmincredit", "#tsg", [b && a.nhp > 0]);
            a.jvb();
            return (a.nhp >= a.parent.cfy)
        }
        return true
    };
    this.wsl = function () {
        var b = a.etp.brx("cmincredit") == null || a.etp.tvc("cmincredit", "#tzz");
        if (b === true) {
            if (++a.jcz > 10) {
                a.ujy = 10
            }
            a.nhp = (a.nhp - (a.udj * a.ujy) > 0) ? a.nhp - (a.udj * a.ujy) : 0;
            a.parent.fcy.lgu("btn");
            a.etp.tvc("mincreditd", "#qib", [(a.nhp > 0) ? a.parent.jos(a.nhp) : "---"]);
            a.etp.tvc("mmincredit", "#tsg", [b && a.nhp < a.parent.cfy]);
            a.etp.tvc("lmincredit", "#tsg", [b && a.nhp > 0]);
            a.jvb();
            return (a.nhp >= a.parent.cfy || a.nhp <= 0)
        }
        return true
    };
    this.anh = function () {
        var b = a.etp.brx("cmaxcredit") == null || a.etp.tvc("cmaxcredit", "#tzz");
        if (b === true) {
            if (++a.jcz > 10) {
                a.ujy = 10
            }
            a.ddv = (a.ddv + (a.xmt * a.ujy) > 0) ? a.ddv + (a.xmt * a.ujy) : 0;
            a.parent.fcy.lgu("btn");
            a.etp.tvc("maxcreditd", "#qib", [(a.ddv > 0) ? a.parent.jos(a.ddv) : "---"]);
            a.etp.tvc("lmaxcredit", "#tsg", [b && a.ddv > a.parent.cfy]);
            a.jvb();
            return (a.ddv <= a.parent.cfy)
        }
        return true
    };
    this.ffq = function () {
        var b = a.etp.brx("cmaxcredit") == null || a.etp.tvc("cmaxcredit", "#tzz");
        if (b === true) {
            if (++a.jcz > 10) {
                a.ujy = 10
            }
            a.ddv = (a.ddv - (a.xmt * a.ujy) > a.parent.cfy) ? a.ddv - (a.xmt * a.ujy) : a.parent.cfy;
            a.parent.fcy.lgu("btn");
            a.etp.tvc("maxcreditd", "#qib", [(a.ddv > 0) ? a.parent.jos(a.ddv) : "---"]);
            a.etp.tvc("lmaxcredit", "#tsg", [b && a.ddv > a.parent.cfy]);
            a.jvb();
            return (a.ddv <= a.parent.cfy)
        }
        return true
    };
    this.cyk = function () {
        var b = a.etp.brx("cmaxwin") == null || a.etp.tvc("cmaxwin", "#tzz");
        if (b === true) {
            if (++a.jcz > 10) {
                a.ujy = 10
            }
            a.ewl = (a.ewl + (a.xmt * a.ujy) > 0) ? a.ewl + (a.xmt * a.ujy) : 0;
            a.parent.fcy.lgu("btn");
            a.etp.tvc("maxwind", "#qib", [(a.ewl > 0) ? a.parent.jos(a.ewl) : "---"]);
            a.etp.tvc("lmaxwin", "#tsg", [b && a.ewl > a.xmt]);
            a.jvb();
            return (a.ewl <= a.xmt)
        }
        return true
    };
    this.csv = function () {
        var b = a.etp.brx("cmaxwin") == null || a.etp.tvc("cmaxwin", "#tzz");
        if (b === true) {
            if (++a.jcz > 10) {
                a.ujy = 10
            }
            a.ewl = (a.ewl - (a.xmt * a.ujy) > 0) ? a.ewl - (a.xmt * a.ujy) : a.xmt;
            a.parent.fcy.lgu("btn");
            a.etp.tvc("maxwind", "#qib", [(a.ewl > 0) ? a.parent.jos(a.ewl) : "---"]);
            a.etp.tvc("lmaxwin", "#tsg", [b && a.ewl > a.xmt]);
            a.jvb();
            return (a.ewl <= a.xmt)
        }
        return true
    };
    this.koo = function () {
        var b = a.etp.brx("cmincredit") == null || a.etp.tvc("cmincredit", "#tzz");
        a.nhp = a.parent.cfy;
        a.etp.tvc("mincreditd", "#qib", [(b === true && a.nhp > 0) ? a.parent.jos(a.nhp) : "---"]);
        a.etp.tvc("lmincredit", "#tsg", [b]);
        a.etp.tvc("mmincredit", "#tsg", [b && a.nhp < a.parent.cfy]);
        a.jvb()
    };
    this.swy = function () {
        var b = a.etp.brx("cmaxcredit") == null || a.etp.tvc("cmaxcredit", "#tzz");
        a.ddv = a.parent.cfy;
        a.etp.tvc("maxcreditd", "#qib", [(b === true && a.ddv > 0) ? a.parent.jos(a.ddv) : "---"]);
        a.etp.tvc("lmaxcredit", "#tsg", [b && a.ddv > a.parent.cfy]);
        a.etp.tvc("mmaxcredit", "#tsg", [b]);
        a.jvb()
    };
    this.ure = function () {
        var b = a.etp.brx("cmaxwin") == null || a.etp.tvc("cmaxwin", "#tzz");
        if (a.ewl === 0) {
            a.ewl = a.xmt
        }
        a.etp.tvc("maxwind", "#qib", [(b === true && a.ewl > 0) ? a.parent.jos(a.ewl) : "---"]);
        a.etp.tvc("lmaxwin", "#tsg", [b && a.ewl > a.xmt]);
        a.etp.tvc("mmaxwin", "#tsg", [b]);
        a.jvb()
    };
    this.zvy = function () {
        a.akj = 0;
        a.etp.tvc("bett", "#ars", [true, false, false]);
        a.etp.tvc("autot", "#ars", [false, false, false]);
        a.etp.tvc("helpt", "#ars", [false, false, false]);
        a.etp.tvc("settingt", "#ars", [false, false, false]);
        a.etp.tvc("returnt", "#ars", [false, false, false]);
        a.etp.zwf("bbuttons", "#wsn", [a.jqc]);
        a.etp.zwf("bbuttons", "#tsg", [a.jqc]);
        a.etp.zwf("abuttons", "#wsn", [false]);
        a.etp.zwf("acheckboxes", "#wsn", [false]);
        a.etp.zwf("hbuttons", "#wsn", [false]);
        a.etp.zwf("sbuttons", "#wsn", [false]);
        a.jvb()
    };
    this.khe = function () {
        var d = a.etp.brx("cmincredit") == null || a.etp.tvc("cmincredit", "#tzz"),
            c = a.etp.brx("cmaxcredit") == null || a.etp.tvc("cmaxcredit", "#tzz"),
            b = a.etp.brx("cmaxwin") == null || a.etp.tvc("cmaxwin", "#tzz");
        a.akj = 1;
        a.udj = (a.vys > 0) ? a.parent.jcq() * a.vys : a.udj;
        a.xmt = (a.tla > 0) ? a.parent.jcq() * a.tla : a.xmt;
        a.etp.tvc("bett", "#ars", [false, false, false]);
        a.etp.tvc("autot", "#ars", [true, false, false]);
        a.etp.tvc("helpt", "#ars", [false, false, false]);
        a.etp.tvc("settingt", "#ars", [false, false, false]);
        a.etp.tvc("returnt", "#ars", [false, false, false]);
        a.etp.zwf("bbuttons", "#wsn", [false]);
        a.etp.zwf("abuttons", "#wsn", [true]);
        a.etp.tvc("mmincredit", "#tsg", [d && a.nhp < a.parent.cfy]);
        a.etp.tvc("lmaxcredit", "#tsg", [c && a.ddv > a.parent.cfy]);
        a.etp.tvc("lmaxwin", "#tsg", [b && a.ewl > a.xmt]);
        a.etp.zwf("acheckboxes", "#wsn", [true]);
        a.etp.zwf("hbuttons", "#wsn", [false]);
        a.etp.zwf("sbuttons", "#wsn", [false]);
        if (a.rah === true) {
            a.etp.tvc("cmincredit", "#wsn", [false])
        }
        a.jvb()
    };
    this.tyc = function () {
        a.akj = 2;
        a.etp.tvc("bett", "#ars", [false, false, false]);
        a.etp.tvc("autot", "#ars", [false, false, false]);
        a.etp.tvc("helpt", "#ars", [true, false, false]);
        a.etp.tvc("settingt", "#ars", [false, false, false]);
        a.etp.tvc("returnt", "#ars", [false, false, false]);
        a.etp.zwf("bbuttons", "#wsn", [false]);
        a.etp.zwf("abuttons", "#wsn", [false]);
        a.etp.zwf("acheckboxes", "#wsn", [false]);
        a.etp.zwf("hbuttons", "#wsn", [true]);
        a.etp.zwf("sbuttons", "#wsn", [false]);
        a.jvb()
    };
    this.ysv = function () {
        a.akj = 3;
        a.etp.tvc("bett", "#ars", [false, false, false]);
        a.etp.tvc("autot", "#ars", [false, false, false]);
        a.etp.tvc("helpt", "#ars", [false, false, false]);
        a.etp.tvc("settingt", "#ars", [true, false, false]);
        a.etp.tvc("returnt", "#ars", [false, false, false]);
        a.etp.zwf("bbuttons", "#wsn", [false]);
        a.etp.zwf("abuttons", "#wsn", [false]);
        a.etp.zwf("acheckboxes", "#wsn", [false]);
        a.etp.zwf("hbuttons", "#wsn", [false]);
        a.etp.zwf("sbuttons", "#wsn", [true]);
        a.etp.tvc("gamble", "#wsn", [a.ksm]);
        a.jvb()
    };
    this.ksz = function () {
        a.parent.fkv();
        a.etp.tvc("returnt", "#ars", [false, false, false])
    }
}
qiw.prototype = new idn;

function jtr() {
    var a = this;
    this.etp = null;
    this.akj = 0;
    this.iib = [];
    this.gnv = null;
    this.pls = null;
    this.uvf = null;
    this.gso = new bku();
    this.yfy = function (b, d, c) {
        jtr.prototype.yfy.call(this, b, d, c);
        this.zro = false;
        this.akj = 0;
        this.iib = [];
        this.nrf()
    };
    this.nrf = function () {
        this.etp = new hcn();
        this.etp.yfy();
        this.etp.mnm("buttons")
    };
    this.mey = function (f) {
        try {
            var d = this.etp.vla("buttons"),
                c = 0,
                b = d.length;
            this.gso = f.rnw;
            for (; c < b; c++) {
                d[c].mey(f.awl)
            }
            this.etp.tvc("return", "#zlp", [f.mpn]);
            this.etp.tvc("page", "#zlp", [f.ytv]);
            this.etp.tvc("prev", "#zlp", [f.dgg]);
            this.etp.tvc("next", "#zlp", [f.qzz])
        } catch (g) {
            console.error(g)
        }
    };
    this.psg = function (d) {
        try {
            var f = this.etp.vla("buttons");
            this.gnv = d.backgroundColor;
            this.pls = d.pnr;
            this.uvf = d.lyp;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].psg((this.parent.utg.csj === false) ? d.bsl : (this.parent.igx === bio.utg.uap) ? d.ebl : d.ozm)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.fpy = function (m, l) {
        var k = this.etp.vla("buttons"),
            g = this.etp.brx("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.kgg() == true) {
                if (b.hon() && !b.sjx()) {
                    if (b != g) {
                        b.ars(true, true)
                    }
                    this.parent.fcy.aee("btn");
                    this.parent.fcy.lgu("btn");
                    b.npx();
                    for (var d = 0; d < f; d++) {
                        k[d].ntl(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.gnx = function () {
        var e = this.etp.vla("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ogk() === true) {
                c.ars(false, true);
                return true
            }
        }
        return false
    };
    this.ivn = function (k) {
        var g = this.etp.vla("buttons"),
            c = this.etp.brx("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.ohs) {
                if (d.hon() && !d.sjx()) {
                    if (d != c) {
                        d.ars(true, true)
                    }
                    this.parent.fcy.aee("btn");
                    this.parent.fcy.lgu("btn");
                    d.npx();
                    for (var e = 0; e < b; e++) {
                        g[e].ntl(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.kif = function () {
        var e = this.etp.vla("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ogk() === true) {
                c.ars(false, true);
                return true
            }
        }
        return false
    };
    this.kus = function (b, c) {
        if (c && c === true) {
            this.iib.unshift(b);
            this.akj++
        } else {
            this.iib.push(b)
        }
    };
    this.kgr = function (b) {
        if (b && b === true) {
            this.iib.shift();
            this.akj--
        } else {
            this.iib.pop()
        }
    };
    this.nen = function () {
        return this.iib.length
    };
    this.izp = function (e, c, b) {
        var d = (this.parent.utg.csj === false) ? c.bsl : (this.parent.igx === bio.utg.uap) ? c.ebl : c.ozm;
        if (this.parent.ipo === false) {
            this.etp.roh("return", this.aky(e.mpn, this.parent.language.ret, (this.parent.utg.jps === false) ? b : this.parent.fcy.uxh("btn_re"), this.ksz, (this.parent.lyz.ghj) ? this.parent.lyz.ghj : null, e.awl, d), ["buttons"]);
            this.etp.roh("page", this.aky(e.ytv, (this.akj + 1) + "/" + this.iib.length, b, this.lsh, null, e.awl, d), ["buttons"]);
            this.etp.roh("prev", this.aky(e.dgg, this.parent.language.skx, (this.parent.utg.jps === false) ? b : this.parent.fcy.uxh("btn_pr"), this.cze, (this.parent.lyz.baq) ? this.parent.lyz.baq : null, e.awl, d), ["buttons"]);
            this.etp.roh("next", this.aky(e.qzz, this.parent.language.inh, (this.parent.utg.jps === false) ? b : this.parent.fcy.uxh("btn_ne"), this.lsh, (this.parent.lyz.fqi) ? this.parent.lyz.fqi : null, e.awl, d), ["buttons"])
        }
    };
    this.aky = function (g, k, b, j, d, f, e) {
        var c = new rqz();
        c.yfy(g, this.context2D, null, b, null, k);
        c.parent = this;
        c.npx = j;
        c.mey(f);
        c.psg(e);
        if (d) {
            c.ohs = d.dye
        }
        return c
    };
    this.jvb = function (l, j, m, e) {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.etp.vla("buttons"),
            d = null;
        if (this.parent.utg.csj === false) {
            d = this.parent.fcy.uxh("btn_back")
        } else {
            if (this.parent.igx === bio.utg.uap) {
                d = (this.parent.fcy.uxh("h_right" + this.akj) != null) ? this.parent.fcy.uxh("h_right" + this.akj) : this.parent.fcy.uxh("h_right")
            } else {
                d = (this.parent.fcy.uxh("h_left" + this.akj) != null) ? this.parent.fcy.uxh("h_left" + this.akj) : this.parent.fcy.uxh("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.akj >= 0 && this.akj < this.iib.length) {
            this.iib[this.akj].jvb()
        }
        if (d) {
            k = n.createLinearGradient(this.gso.x, this.gso.y, this.gso.x + this.gso.width, this.gso.y);
            k.addColorStop(0.2, this.pls);
            k.addColorStop(1, this.uvf);
            n.fillStyle = k;
            n.save();
            if (this.parent.utg.csj === false) {
                if (this.parent.igx === bio.utg.lea) {
                    n.translate(this.gso.width / 2, this.gso.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.gso.width / 2, -this.gso.height / 2)
                }
                n.fillRect(this.gso.x, this.gso.y, this.gso.width, this.gso.height)
            }
            n.drawImage(d, this.gso.x, this.gso.y, this.gso.width, this.gso.height);
            n.restore()
        } else {
            if (this.gnv != null) {
                n.fillStyle = this.gnv;
                n.fillRect(this.gso.x, this.gso.y, this.gso.width, this.gso.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].jvb()
        }
        n.restore();
        if (this.lhh && this.ien) {
            if (b) {
                this.lhh.drawImage(this.ien, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.lhh.drawImage(this.ien, this.x, this.y)
            }
        }
    };
    this.pvu = function (f, g) {
        var e = this.etp.brx("page"),
            c = this.etp.brx("return"),
            b = this.etp.brx("next"),
            d = this.etp.brx("prev");
        if (e != null) {
            e.qib((this.akj + 1) + "/" + this.iib.length)
        }
        if (c != null) {
            c.tsg(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.iib.length > 1) {
                    b.tsg(f);
                    d.tsg(f);
                    e.tsg(f)
                } else {
                    b.tsg(false);
                    d.tsg(false);
                    e.tsg(false)
                }
            } else {
                b.tsg(f);
                d.tsg(f);
                e.tsg(f)
            }
        }
        if (g && g === true) {
            this.jvb()
        }
    };
    this.sqt = function () {
        this.akj = 0;
        this.pvu(true);
        this.tsg(true, true)
    };
    this.zln = function () {
        this.pvu(false);
        this.tsg(false, true)
    };
    this.vuc = function () {
        var d = this.etp.brx("page"),
            b = this.etp.brx("next"),
            c = this.etp.brx("prev");
        this.akj = (this.akj < this.iib.length) ? this.akj : this.iib.length - 1;
        this.akj = (this.akj < 0) ? 0 : this.akj;
        d.qib((this.akj + 1) + "/" + this.iib.length, true);
        if (this.iib.length == 1) {
            b.tsg(false);
            c.tsg(false);
            d.tsg(false)
        } else {
            b.tsg(true);
            c.tsg(true);
            d.tsg(true)
        }
    };
    this.qjf = function (c) {
        var e = this.etp.vla("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].wsn(c)
        }
    };
    this.ksz = function () {
        a.parent.rmf()
    };
    this.lsh = function () {
        var b = a.etp.brx("page");
        if (a.akj < a.iib.length - 1) {
            a.akj++
        } else {
            a.akj = 0
        }
        if (b) {
            b.qib((a.akj + 1) + "/" + a.iib.length, false)
        }
        a.jvb()
    };
    this.cze = function () {
        var b = a.etp.brx("page");
        if (a.akj > 0) {
            a.akj--
        } else {
            a.akj = a.iib.length - 1
        }
        if (b) {
            b.qib((a.akj + 1) + "/" + a.iib.length, false)
        }
        a.jvb()
    }
}
jtr.prototype = new idn;

function dcc() {
    this.ssi = new Image();
    this.jsb = null;
    this.pqz = [];
    this.cnq = [];
    this.zqj = null;
    this.zrw = null;
    this.kfk = "bold";
    this.rcu = null;
    this.tas = null;
    this.cdk = null;
    this.xau = 0;
    this.xsw = [];
    this.vog = null;
    this.bwp = 40;
    this.hum = 18;
    this.meb = 1;
    this.yfy = function (b, d, c, a) {
        this.ssi = a;
        this.pqz = [];
        this.xsw = [];
        dcc.prototype.yfy.call(this, b, d, c)
    };
    this.mey = function (a) {
        try {
            this.vog = a.fsm;
            this.xsw = a.ndg;
            this.hum = a.fontSize;
            this.bwp = a.blp;
            this.meb = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.psg = function (a) {
        try {
            this.zqj = a.yrd;
            this.zrw = a.font;
            this.kfk = a.zqm;
            this.rcu = a.owr;
            this.tas = a.xmb;
            this.cdk = a.xww
        } catch (b) {
            console.error(b)
        }
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.tas;
        if (this.rcu) {
            b.strokeStyle = this.rcu
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.meb;
        b.font = this.kfk + " " + this.hum + "px " + this.zrw;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.ssi, 0, 0);
        if ((this.height - this.ssi.height) > 0) {
            var a = this.parent.gso;
            b.drawImage(this.ssi, a.x, a.y, a.width, this.ssi.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.jsb && this.vog) {
            bio.olq.fwv(b, this.jsb, this.cdk, this.vog.x, this.vog.y, this.vog.width, this.vog.height, this.zqj, this.bwp, this.kfk)
        }
        for (var c = 0; c < this.pqz.length; c++) {
            this.tae(this.pqz[c], this.xsw[c], this.hum, this.zrw)
        }
        b.restore();
        if (this.lhh && this.ien) {
            this.lhh.drawImage(this.ien, this.x, this.y)
        }
    };
    this.fnf = function (j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.cnq = [];
        b.save();
        b.font = this.kfk + " " + g + "px " + d;
        this.rkc(b, g, j, f, d);
        for (var e = 0, a = this.cnq.length; e < a; e++) {
            c = (f.height + this.xau) / (this.cnq.length + 1) * (e + 1);
            b.fillText(this.cnq[e], (f.x), f.y + c);
            if (this.rcu != null && b.lineWidth >= 1) {
                b.strokeText(this.cnq[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.tae = function (g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.cnq = [];
        a.save();
        a.font = this.kfk + " " + f + "px " + c;
        this.rkc(a, f, g, e, c);
        for (var d = 0; d < this.cnq.length; d++) {
            b = (e.height + this.xau) / (this.cnq.length + 1) * (d + 1);
            a.fillText(this.cnq[d], (e.x + e.width / 2), e.y + b);
            if (this.rcu != null && a.lineWidth >= 1) {
                a.strokeText(this.cnq[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.rkc = function (m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.xau = o;
        if (this.xau * n > g.height) {
            a = g.height / (this.xau * n);
            this.xau = Math.round(a * this.xau) - 1;
            m.font = this.kfk + " " + this.xau + "px " + b;
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
                this.cnq[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.cnq[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.cnq[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
dcc.prototype = new idn;

function daq() {
    var a = this;
    this.state = 0;
    this.ioz = 1;
    this.zjk = null;
    this.fam = null;
    this.avn = null;
    this.lsi = "round";
    this.zrw = null;
    this.kfk = "bold";
    this.jfb = "center";
    this.gnv = null;
    this.tas = null;
    this.xql = 1;
    this.mem = null;
    this.hum = 17;
    this.xqx = 2;
    this.qrn = 0;
    this.oxo = 1;
    this.jwk = 0;
    this.eoc = 0;
    this.hlg = 0;
    this.mey = function (b) {
        try {
            this.hum = b.fontSize;
            this.xqx = b.aro;
            this.qrn = b.avi;
            this.oxo = b.dbr;
            this.hlg = b.hry
        } catch (c) {
            console.error(c)
        }
    };
    this.psg = function (b) {
        try {
            this.lsi = b.wtv;
            this.zrw = b.font;
            this.kfk = b.zqm;
            this.jfb = b.textAlign;
            this.gnv = b.backgroundColor;
            this.tas = b.xmb;
            this.xql = b.krn;
            if (b.borderColor && b.vna) {
                this.mem = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.mem.addColorStop(0, b.borderColor);
                this.mem.addColorStop(1, b.vna)
            } else {
                this.mem = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.vfi = function () {
        return this.lsi
    };
    this.swl = function (c, b) {
        this.state = c;
        this.ioz = b
    };
    this.wbz = function (b) {
        this.ssi = b;
        if (this.lsi === "round") {
            this.jwk = this.width / 2 - this.xqx
        }
        if (this.ssi) {
            this.eoc = Math.round(this.ssi.height / (2 * this.ioz))
        }
    };
    this.lij = function (b) {
        this.state = (b < this.ioz) ? b : this.state
    };
    this.yab = function (b) {
        this.zjk = b
    };
    this.gln = function () {
        a.nrk = false
    };
    this.vat = function () {
        a.tao = false;
        if (a.kgg()) {
            a.parent.jvb(a.x, a.y, a.width, a.height)
        }
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var l = this.context2D,
            e = (this.hon()) ? this.xql : this.xql / 2,
            b = this.hum,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.ssi && this.npx) {
            if (!this.hon()) {
                l.globalAlpha = e
            }
            if (this.lsi === "round") {
                bio.olq.pih(l, this.x + this.width / 2, this.y + this.height / 2, this.jwk, this.gnv, e * this.xql)
            } else {
                if (this.lsi === "rect") {
                    bio.olq.kbi(l, this.x, this.y, this.width, this.height, this.qrn, this.gnv, e * this.xql, this.mem, this.oxo, e)
                }
            }
            if (this.ogk()) {
                if (this.lsi === "round") {
                    l.drawImage(this.ssi, 0, (this.state * 2 * this.eoc) + this.eoc, this.ssi.width, this.eoc, this.x, this.y, this.width, this.height)
                } else {
                    if (this.lsi === "rect") {
                        l.drawImage(this.ssi, 0, (this.state * 2 * this.eoc) + this.eoc, this.ssi.width, this.eoc, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.lsi === "round") {
                    l.drawImage(this.ssi, 0, (this.state * 2 * this.eoc), this.ssi.width, this.eoc, this.x, this.y, this.width, this.height)
                } else {
                    if (this.lsi === "rect") {
                        l.drawImage(this.ssi, 0, (this.state * 2 * this.eoc), this.ssi.width, this.eoc, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.kmg != null) {
                l.textAlign = this.jfb;
                l.textBaseline = "bottom";
                l.font = this.kfk + " " + b + "px " + this.zrw;
                l.fillStyle = this.tas;
                d = this.kmg.split("|");
                j = 0;
                g = (this.jfb === "center") ? this.x + this.width / 2 : (this.jfb === "left") ? this.x + 2 * this.xqx : this.x + this.width - 2 * this.xqx;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.xqx) {
                    c = ((this.width - 2 * this.xqx) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.kfk + " " + b + "px " + this.zrw
                }
                if (b * d.length > this.hlg) {
                    c = ((this.hlg) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.kfk + " " + b + "px " + this.zrw
                }
                k = (this.height - this.xqx - this.hlg) + (this.hlg - b * d.length) / 2;
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
daq.prototype = new qxz;

function puk() {
    var a = this;
    this.lsi = "rect";
    this.qzu = -1;
    this.zrw = null;
    this.kfk = "bold";
    this.gnv = null;
    this.kqn = null;
    this.akg = null;
    this.dfj = null;
    this.cxo = null;
    this.tas = null;
    this.gca = null;
    this.qrn = 3;
    this.ffl = -2;
    this.wmw = 2;
    this.gwi = 6;
    this.hum = 26;
    this.oxo = 2;
    this.mey = function (b) {
        try {
            this.hum = b.fontSize;
            this.ffl = b.cic;
            this.wmw = b.kth;
            this.gwi = b.udi;
            this.qrn = b.avi;
            this.oxo = b.dbr
        } catch (c) {
            console.error(c)
        }
    };
    this.psg = function (b) {
        try {
            this.zrw = b.font;
            this.kfk = b.zqm;
            this.gnv = b.backgroundColor;
            this.kqn = b.fss;
            this.akg = b.kxi;
            this.dfj = b.ukb;
            this.cxo = b.borderColor;
            this.tas = b.xmb;
            this.gca = b.dik;
            this.lsi = b.wtv;
            this.qzu = b.iuj
        } catch (c) {
            console.error(c)
        }
    };
    this.vfi = function () {
        return this.lsi
    };
    this.gln = function () {
        a.nrk = false
    };
    this.vat = function () {
        a.tao = false;
        if (a.kgg()) {
            a.parent.jvb(a.x, a.y, a.width, a.height)
        }
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.gnv,
            m = this.kqn,
            b = this.hum,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.qzu == 0 || this.qzu == 3) ? this.qrn : 0;
        lt = (this.qzu == 1 || this.qzu == 3) ? this.qrn : 0;
        rb = (this.qzu == 0 || this.qzu == 2) ? this.qrn : 0;
        lb = (this.qzu == 1 || this.qzu == 2) ? this.qrn : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.ogk()) {
            n = (this.akg != null) ? this.akg : n;
            m = (this.dfj != null) ? this.dfj : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.lsi === "rrect") {
                    bio.olq.gpz(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.cxo, this.oxo, 1)
                } else {
                    if (this.lsi === "rect") {
                        if (this.cxo) {
                            bio.olq.ope(p, this.x, this.y, this.width, this.height, this.qrn, l, this.cxo, this.oxo)
                        } else {
                            bio.olq.zuu(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.lsi === "triangle") {
                            bio.olq.sai(p, this.qzu, this.x, this.y, this.width, this.height, this.qrn, l, 1, this.cxo, this.oxo, 1)
                        }
                    }
                }
            } else {
                if (this.lsi === "rrect") {
                    bio.olq.gpz(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.cxo, this.oxo, 1)
                } else {
                    if (this.lsi === "rect") {
                        if (this.cxo) {
                            bio.olq.ope(p, this.x, this.y, this.width, this.height, this.qrn, n, this.cxo, this.oxo, 1)
                        } else {
                            bio.olq.zuu(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.lsi === "triangle") {
                            bio.olq.sai(p, this.qzu, this.x, this.y, this.width, this.height, this.qrn, n, 1, this.cxo, this.oxo, 1)
                        }
                    }
                }
            }
        }
        if (this.ssi != null) {
            h = this.height - 2 * this.gwi;
            p.drawImage(this.ssi, this.x + this.width / 2 - h / 2, this.y + this.gwi, h, h)
        }
        if (this.kmg != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.kmg.split("|");
            d = 0;
            if (this.ogk()) {
                d = 1;
                p.fillStyle = this.gca
            } else {
                p.fillStyle = this.tas
            }
            p.font = this.kfk + " " + b + "px " + this.zrw;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.gwi) {
                c = ((this.width - 2 * this.gwi) / o);
                b = Math.round(c * b) - 1;
                p.font = this.kfk + " " + b + "px " + this.zrw
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.kfk + " " + b + "px " + this.zrw
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.ffl, this.y - this.wmw + k + d);
                k += b
            }
        }
        p.restore()
    }
}
puk.prototype = new qxz;

function pte() {
    var a = this;
    this.vzp = null;
    this.syn = null;
    this.isq = null;
    this.utp = null;
    this.yid = null;
    this.zro = false;
    this.zvu = -1;
    this.yfy = function () {
        this.vzp = document.getElementById("notificationDiv");
        this.syn = document.getElementById("notificationTitle");
        this.isq = document.getElementById("notificationText");
        this.utp = document.getElementById("notificationIcon");
        this.yid = document.getElementById("notificationCounter");
        if (this.vzp) {
            this.vzp.onclick = bio.yqr.bka;
            this.vzp.ontouchend = bio.yqr.bka
        }
    };
    this.psg = function (b) {};
    this.mey = function (b) {
        try {
            if (this.vzp) {
                this.zri(this.vzp, b.cuz);
                if (this.zro) {
                    if (bio.yqr.igx === bio.utg.lea) {
                        this.vzp.className = "slideRight"
                    } else {
                        this.vzp.className = "slideLeft"
                    }
                }
            }
            if (this.syn) {
                this.syn.style.fontSize = b.blp + "px";
                this.syn.style.left = b.fsm.x + "px";
                this.syn.style.top = b.fsm.y + "px";
                this.syn.style.width = b.fsm.width + "px"
            }
            if (this.isq) {
                this.isq.style.fontSize = b.ezx + "px";
                this.isq.style.left = b.ndg.x + "px";
                this.isq.style.top = b.ndg.y + "px";
                this.isq.style.width = b.ndg.width + "px"
            }
            if (this.utp) {
                this.zri(this.utp, b.mbe)
            }
            if (this.yid) {
                this.yid.style.fontSize = b.uwz + "px";
                this.zri(this.yid, b.vcn)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.zri = function (c, b) {
        if (c) {
            c.style.left = b.x + "px";
            c.style.top = b.y + "px";
            c.style.width = b.width + "px";
            c.style.height = b.height + "px"
        }
    };
    this.sqt = function (d, c, b) {
        if (d && this.syn) {
            this.syn.innerHTML = d
        }
        if (c && this.isq) {
            this.isq.innerHTML = c.replace(/[\r]?\n/g, "")
        }
        if (b && this.yid) {
            this.yid.innerHTML = b
        }
        if (this.vzp) {
            if (this.zvu >= 0) {
                clearTimeout(this.zvu);
                this.zvu = -1;
                this.vzp.className = null
            }
            this.zro = true;
            bio.yqr.eqa();
            if (bio.yqr.igx === bio.utg.lea) {
                this.vzp.className = "slideInRightAnim"
            } else {
                this.vzp.className = "slideInLeftAnim"
            }
        }
    };
    this.zln = function () {
        if (a.vzp && a.zro) {
            if (bio.yqr.igx === bio.utg.lea) {
                a.vzp.className = "slideOutRightAnim"
            } else {
                a.vzp.className = "slideOutLeftAnim"
            }
            a.zvu = setTimeout(a.ckv, 800)
        }
    };
    this.kgg = function () {
        if (this.zro) {
            return true
        }
        return false
    };
    this.ckv = function () {
        a.zro = false;
        a.zvu = -1;
        bio.yqr.eqa()
    }
}

function aph() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.nrr = null;
    this.vzp = null;
    this.syn = null;
    this.isq = null;
    this.ymk = null;
    this.jlo = [];
    this.wyz = 0;
    this.jej = [];
    this.czt = [];
    this.akj = 0;
    this.qky = false;
    this.zro = false;
    this.yfy = function () {
        this.nrr = document.getElementById("messageOverlay");
        this.vzp = document.getElementById("messagePanel");
        this.syn = document.getElementById("messageTitle");
        this.isq = document.getElementById("messageText");
        this.ymk = document.getElementById("btne");
        if (this.ymk) {
            this.ymk.innerHTML = "\u00D7";
            this.ymk.onclick = this.zln;
            this.ymk.ontouchend = this.zln
        }
        for (var f = 0; f < 4; f++) {
            this.jlo[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.psg = function (f) {
        try {
            this.jej = f.efl
        } catch (g) {
            console.error(g)
        }
    };
    this.mey = function (j) {
        try {
            if (this.vzp) {
                bio.olq.zri(this.vzp, j.cuz)
            }
            if (this.syn) {
                this.syn.style.fontSize = j.blp + "px";
                bio.olq.zri(this.syn, j.fsm)
            }
            if (this.isq) {
                this.isq.style.fontSize = j.ezx + "px";
                bio.olq.zri(this.isq, j.kdi)
            }
            if (this.ymk) {
                bio.olq.zri(this.ymk, j.lqa)
            }
            for (var g = 0, f = this.jlo.length; g < f; g++) {
                this.jlo[g].style.fontSize = j.awl.fontSize + "px";
                this.jlo[g].style.top = j.mrr.y + "px";
                this.jlo[g].style.height = j.mrr.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.sqt = function (j) {
        this.czt.length = 0;
        this.akj = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.czt[g] = j[g]
        }
        this.itm(this.czt[this.akj])
    };
    this.zln = function () {
        if (b.vzp) {
            b.zro = false;
            b.vzp.style.display = "none";
            b.nrr.style.display = "none";
            bio.yqr.eqa();
            bio.yqr.sib = false
        }
    };
    this.itm = function (l) {
        var n = this.czt.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.umd === bio.una.syl || l.umd === bio.una.zgh) {
            this.wyz = d;
            this.qky = (l.DisplayType == bio.ngv.sjf.gsm) ? true : false
        } else {
            if (l.umd === bio.una.ixf || l.umd === bio.una.ttz || l.umd === bio.una.gfn || l.umd === bio.una.roulette.lni || l.umd === bio.una.roulette.rih) {
                this.wyz = a;
                this.qky = false
            } else {
                if (l.umd === bio.una.wro || l.umd === bio.una.deu) {
                    this.wyz = c;
                    this.qky = false
                } else {
                    if (l.umd === bio.una.nev || l.umd === bio.una.cqa || l.umd === bio.una.pdp) {
                        this.wyz = e;
                        this.qky = false
                    }
                }
            }
        }
        if (l.Title && this.syn) {
            this.syn.style.color = this.jej[this.wyz];
            this.syn.innerHTML = l.Title
        }
        if (l.Text && this.isq) {
            this.isq.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.jlo[0].innerHTML = "\u2039";
            this.jlo[0].onclick = this.snl;
            this.jlo[0].ontouchend = this.snl;
            this.jlo[0].style.display = "inline-block";
            this.jlo[this.jlo.length - 1].innerHTML = "\u203A";
            this.jlo[this.jlo.length - 1].onclick = this.oro;
            this.jlo[this.jlo.length - 1].ontouchend = this.oro;
            this.jlo[this.jlo.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.jlo.length - 1 : this.jlo.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.jlo[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.jlo[g].innerHTML = bio.yqr.language.stm
                    } else {
                        if (j == "continue") {
                            this.jlo[g].innerHTML = bio.yqr.language.lcp.replace(/ /g, "")
                        } else {
                            this.jlo[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.jlo[g].onclick = bio.yqr.abi;
                    this.jlo[g].ontouchend = bio.yqr.abi
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.umd === bio.una.syl) {
                            this.jlo[g].onclick = this.qev.bind(this, l.Buttons[k].Link);
                            this.jlo[g].ontouchend = this.qev.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.umd === bio.una.zgh || l.umd === bio.una.nev || l.umd === bio.una.cqa) {
                                this.jlo[g].onclick = this.bqn;
                                this.jlo[g].ontouchend = this.bqn
                            } else {
                                if (l.umd === bio.una.wro || l.umd === bio.una.deu || l.umd === bio.una.pdp) {
                                    this.jlo[g].onclick = this.zot;
                                    this.jlo[g].ontouchend = this.zot
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.jlo[g].onclick = bio.yqr.lsv;
                            this.jlo[g].ontouchend = bio.yqr.lsv
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === bio.ngv.rxz.efn) {
                                    this.jlo[g].onclick = this.lrz.bind(this, l.Buttons[k].Link);
                                    this.jlo[g].ontouchend = this.lrz.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === bio.ngv.rxz.lvo) {
                                        this.jlo[g].onclick = this.qev.bind(this, l.Buttons[k].Link);
                                        this.jlo[g].ontouchend = this.qev.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === bio.ngv.rxz.zrl) {
                                            this.jlo[g].onclick = this.izd.bind(this, l.Buttons[k].Link);
                                            this.jlo[g].ontouchend = this.izd.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.jlo[g].style.display = "inline-block"
            } else {
                this.jlo[g].style.display = "none"
            }
        }
        this.ymk.style.display = (this.qky) ? "inline-block" : "none";
        if (this.vzp) {
            this.zro = true;
            this.vzp.style.display = "block";
            this.nrr.style.display = "block";
            bio.yqr.eqa();
            bio.yqr.sib = true
        }
    };
    this.kgg = function () {
        if (this.zro) {
            return true
        }
        return false
    };
    this.bqn = function () {
        b.zln();
        bio.yqr.rlq(bio.yqr.state)
    };
    this.qev = function (f) {
        var g = null;
        if (f) {
            g = bio.olq.xou("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function () {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        bio.yqr.sxd({
            type: "link",
            sender: bio.yqr.rmd,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        b.zln();
        bio.yqr.mkf()
    };
    this.izd = function (j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = bio.olq.xou("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.jlo.length; g < f; g++) {
                b.jlo[g].disabled = true
            }
            k.onload = function () {
                b.zln();
                for (var m = 0, l = b.jlo.length; m < l; m++) {
                    b.jlo[m].disabled = false
                }
                bio.yqr.mkf()
            };
            k.onerror = function () {
                console.error("Error on request!");
                for (var m = 0, l = b.jlo.length; m < l; m++) {
                    b.jlo[m].disabled = false
                }
            }
        }
        bio.yqr.sxd({
            type: "link",
            sender: bio.yqr.rmd,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        k.send()
    };
    this.zot = function () {
        window.location.reload()
    };
    this.lrz = function (f) {
        bio.yqr.sxd({
            type: "link",
            sender: bio.yqr.rmd,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        window.location.href = f
    };
    this.snl = function () {
        b.akj = (b.akj > 0) ? b.akj - 1 : b.czt.length - 1;
        b.itm(b.czt[b.akj])
    };
    this.oro = function () {
        b.akj = (b.akj < b.czt.length - 1) ? b.akj + 1 : 0;
        b.itm(b.czt[b.akj])
    }
}

function avc() {
    var a = this;
    this.ssi = new Image();
    this.feb = "";
    this.leu = "";
    this.keu = -1;
    this.soz = 0;
    this.buj = 0;
    this.jzu = 5000;
    this.zrw = null;
    this.kfk = "bold";
    this.tas = null;
    this.gnv = null;
    this.cxo = null;
    this.qrn = 0;
    this.bxy = 0;
    this.gwi = 0;
    this.oxo = 0;
    this.wmw = 0;
    this.hum = 0;
    this.crd = null;
    this.emu = 0;
    this.azo = [];
    this.cmr = 0;
    this.fgz = true;
    this.isj = 0;
    this.mey = function (b) {
        try {
            this.hum = b.fontSize;
            this.wmw = b.kth;
            this.qrn = b.avi;
            this.bxy = b.fvy;
            this.gwi = b.udi;
            this.oxo = b.dbr
        } catch (c) {
            console.error(c)
        }
    };
    this.psg = function (b) {
        try {
            this.zrw = b.font;
            this.kfk = b.zqm;
            this.gnv = b.backgroundColor;
            this.tas = b.xmb;
            this.cxo = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.nbt = function (e, c, d, b) {
        this.feb = e;
        this.leu = c;
        this.keu = d;
        this.soz = b;
        this.fgz = true;
        clearTimeout(this.isj);
        if (this.kgg() === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.qoz = function (b, c) {
        this.feb = b;
        this.leu = undefined;
        this.fgz = c;
        if (this.fgz) {
            clearTimeout(this.isj)
        }
        if (this.kgg() === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.ylr = function () {
        this.feb = "";
        this.leu = undefined;
        this.fgz = true;
        clearTimeout(this.isj);
        if (this.kgg() === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.vct = function (b, c) {
        this.emu = 0;
        this.cmr = b;
        this.fgz = false;
        if (c && c > 0) {
            this.isj = setTimeout(this.hbf, c)
        } else {
            this.isj = setTimeout(this.hbf, this.jzu)
        }
    };
    this.bdd = function (b) {
        this.emu = 0;
        this.cmr = b;
        if (this.fgz) {
            this.qoz(this.azo[this.cmr][this.emu], false)
        }
        this.fgz = false;
        this.isj = setTimeout(this.hbf, this.jzu)
    };
    this.clo = function () {
        this.fgz = false;
        this.isj = setTimeout(this.hbf, this.jzu)
    };
    this.ajz = function () {
        this.fgz = true;
        clearTimeout(this.isj)
    };
    this.pmp = function () {
        return this.fgz
    };
    this.hbf = function () {
        if (!a.fgz) {
            a.emu = (a.azo[a.cmr][a.emu + 1] != undefined) ? a.emu + 1 : 0;
            a.isj = setTimeout(a.hbf, a.jzu);
            a.qoz(a.azo[a.cmr][a.emu], a.fgz)
        }
    };
    this.pct = function (b) {
        this.azo[b] = []
    };
    this.owb = function (d, b) {
        for (var c = 0; c < d.length; c++) {
            this.azo[b][c] = d[c]
        }
    };
    this.qcy = function (b) {
        this.crd = b
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var o = this.context2D,
            m = this.hum,
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
            q = (this.cxo && this.oxo) ? this.gwi + this.oxo : this.gwi;
        o.save();
        if (this.gnv) {
            bio.olq.ope(o, this.x, this.y, this.width, this.height, this.qrn, this.gnv, this.cxo, this.oxo)
        } else {
            if (this.crd) {
                o.putImageData(this.crd, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.tas;
        o.font = this.kfk + " " + m + "px " + this.zrw;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.feb).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.leu != undefined && this.keu >= 0) {
            j = o.measureText(this.leu).width;
            b += j;
            b += this.soz * (this.ssi.width + this.bxy);
            if (this.soz % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.soz / 2) * (this.ssi.width + this.bxy);
                x = s - n;
                e = s + (this.soz) * (this.ssi.width + this.bxy) + n
            } else {
                s = this.x + (this.width) / 2 - (this.soz / 2) * (this.ssi.width) - (this.soz - 1) / 2 * this.bxy;
                x = s - n;
                e = s + (this.soz) * (this.ssi.width) + (this.soz - 1) * this.bxy + n
            }
            for (var u = 0; u < this.soz; u++) {
                o.drawImage(this.ssi, 0, this.buj * this.keu, this.ssi.width, this.buj, s + (u * (this.bxy + this.ssi.width)), this.y + ((this.height - this.buj) / 2), this.ssi.width, this.buj)
            }
            o.textAlign = "right";
            o.fillText(this.feb, x, this.y + m + this.wmw);
            o.textAlign = "left";
            o.fillText(this.leu, e, this.y + m + this.wmw)
        } else {
            if (this.feb != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.kfk + " " + m + "px " + this.zrw
                    }
                    g = [];
                    d = "";
                    v = 0;
                    z = 0;
                    t = 0;
                    for (var p = t; p < this.feb.length; p++) {
                        d += this.feb.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.feb.charAt(p) == " ") || (this.feb.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.feb.length - 1) {
                            g[z] = this.feb.substring(t, this.feb.length)
                        } else {
                            if (this.feb.charAt(p) == "|") {
                                g[z] = this.feb.substring(t, v);
                                z++;
                                t = v + 1;
                                d = this.feb.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[z] = this.feb.substring(t, v);
                                    z++;
                                    t = v + 1;
                                    d = this.feb.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.hum) {
                    o.font = this.kfk + " " + (m - 3) + "px " + this.zrw;
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
avc.prototype = new idn;

function yor() {
    this.ydj = null;
    this.wtl = null;
    this.tdh = null;
    this.bpw = false;
    this.otl = false;
    this.rzy = true;
    this.vuw = false;
    this.ngs = false;
    this.lrv = 0;
    this.xps = 0;
    this.wit = 0;
    this.uqy = "";
    this.yxi = "";
    this.pls = null;
    this.uvf = null;
    this.zrw = "arial";
    this.kfk = "bold";
    this.ite = "arial";
    this.esl = "rgb(0,0,200)";
    this.rhy = "rgb(255,255,255)";
    this.efu = "rgb(0,0,150)";
    this.gnv = "rgb(220,240,255)";
    this.erj = "rgb(130,220,255)";
    this.okz = "rgb(130,190,255)";
    this.tas = "rgb(255,255,255)";
    this.nav = "rgb(130,190,255)";
    this.jmo = "rgb(100,160,255)";
    this.pqn = "rgb(255,255,255)";
    this.gso = new bku();
    this.vog = null;
    this.xjy = null;
    this.gue = null;
    this.wpv = null;
    this.nej = null;
    this.okk = null;
    this.tjh = null;
    this.hfu = null;
    this.oxo = 2;
    this.iul = 3;
    this.ktk = 10;
    this.wmw = 3;
    this.ffl = 5;
    this.ohr = 36;
    this.hum = 30;
    this.njn = 22;
    this.yfy = function (a, c, b) {
        yor.prototype.yfy.call(this, a, c, b);
        this.vuw = bio.pql.value37
    };
    this.hdv = function (b) {
        try {
            var a = (bio.pql.value37) ? b.mzv : b.qvh;
            this.vog = b.fsm;
            this.xjy = b.aix;
            this.gue = b.gym;
            this.wpv = b.bdu;
            this.nej = b.mtx;
            this.okk = b.kdi;
            this.gso = b.rnw;
            this.ohr = b.mpi;
            this.hum = b.fontSize;
            this.njn = b.lds;
            this.wmw = b.kth;
            this.ffl = b.cic;
            this.oxo = b.dbr;
            this.iul = b.wmq;
            this.ktk = b.zwd;
            if (bio.pql.value36) {
                this.yxi = this.parent.upg(this.parent.language.mik)
            } else {
                if (bio.pql.value37) {
                    this.yxi = this.parent.upg(this.parent.language.rzt)
                }
            }
            this.ydj = [];
            this.wtl = this.aky(a.cbs, this.parent.language.ret, this.parent.kpb, (this.parent.utg.jps === false) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_re"), b.awl);
            this.ydj.push(this.wtl);
            if (bio.pql.value37) {
                this.tdh = this.aky(a.mpn, this.parent.language.daf, this.parent.txy, (this.parent.utg.jps === false) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_e"), b.awl);
                this.ydj.push(this.tdh)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.mey = function (b) {
        try {
            var a = (bio.pql.value37) ? b.mzv : b.qvh;
            this.vog = b.fsm;
            this.xjy = b.aix;
            this.gue = b.gym;
            this.wpv = b.bdu;
            this.nej = b.mtx;
            this.okk = b.kdi;
            this.gso = b.rnw;
            if (this.wtl) {
                this.wtl.zlp(a.cbs);
                this.wtl.mey(b.awl)
            }
            if (this.tdh) {
                this.tdh.zlp(a.mpn);
                this.tdh.mey(b.awl)
            }
            this.ohr = b.mpi;
            this.hum = b.fontSize;
            this.njn = b.lds;
            this.wmw = b.kth;
            this.ffl = b.cic;
            this.oxo = b.dbr;
            this.iul = b.wmq;
            this.ktk = b.zwd
        } catch (c) {
            console.error(c)
        }
    };
    this.psg = function (c) {
        try {
            this.zrw = c.font;
            this.kfk = c.zqm;
            this.esl = c.yrk;
            this.rhy = c.pox;
            this.efu = c.kiy;
            this.gnv = c.backgroundColor;
            this.erj = c.eca;
            this.okz = c.asb;
            this.tas = c.xmb;
            this.nav = c.geg;
            this.jmo = c.mgr;
            this.pqn = c.lyq;
            this.pls = c.pnr;
            this.uvf = c.lyp;
            for (var b = 0, a = this.ydj.length; b < a; b++) {
                this.ydj[b].psg((this.parent.utg.csj === true) ? c.zjy : c.bsl)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.fpy = function (d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.ydj.length; f < b; f++) {
            var a = this.ydj[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.kgg() === true) {
                if (a.hon() === true && a.sjx() === false && this.rzy) {
                    a.ars(true, true);
                    this.parent.fcy.aee("btn");
                    this.parent.fcy.lgu("btn");
                    a.npx();
                    for (var e = 0; e < b; e++) {
                        this.ydj[e].ntl(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.okk.x && c <= this.okk.x + this.okk.width && g >= this.okk.y && g <= this.okk.y + this.okk.height && this.vuw && this.otl) {
            this.qek()
        }
        return true
    };
    this.gnx = function () {};
    this.ivn = function () {};
    this.kif = function () {};
    this.aky = function (d, f, e, a, c) {
        var b = new rqz();
        b.yfy(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.npx = e;
        b.mey(c);
        return b
    };
    this.qjf = function (c) {
        this.otl = c;
        for (var b = 0, a = this.ydj.length; b < a; b++) {
            this.ydj[b].wsn(c)
        }
    };
    this.qek = function () {
        this.rzy = !this.rzy;
        this.parent.jvb()
    };
    this.ful = function (d, a, c, b) {
        this.ngs = false;
        this.uju = true;
        this.uqy = this.olk(b);
        this.lrv = d;
        this.xps = a;
        this.wit = c;
        if (this.kgg()) {
            this.qjf(true);
            this.jvb()
        }
    };
    this.olk = function (b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.hxo(d) + ":" + this.hxo(a) + ":" + this.hxo(c)
    };
    this.hxo = function (a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.xpv = function (a, b) {
        this.ngs = a;
        if (b && b === true) {
            this.jvb()
        }
    };
    this.tsg = function (a, b) {
        this.uju = false;
        if (bio.pql.value37) {
            this.rzy = false
        }
        this.xpv(a, false);
        yor.prototype.tsg.call(this, a, b)
    };
    this.jvb = function (j, f, k, d) {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.fcy.uxh("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.gnv;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.gso.x, this.gso.y, this.gso.x + this.gso.width, this.gso.y);
            g.addColorStop(0.2, this.pls);
            g.addColorStop(1, this.uvf);
            l.fillStyle = g;
            l.save();
            if (this.parent.igx === bio.utg.lea) {
                l.translate(this.gso.width / 2, this.gso.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.gso.width / 2, -this.gso.height / 2)
            }
            l.fillRect(this.gso.x, this.gso.y, this.gso.width, this.gso.height);
            l.drawImage(c, this.gso.x, this.gso.y, this.gso.width, this.gso.height);
            l.restore()
        } else {
            if (this.parent.utg.csj === true) {
                bio.olq.zuu(l, this.gso.x, this.gso.y, this.gso.width, this.gso.height, this.pls, 1)
            }
        }
        bio.olq.ope(l, this.vog.x, this.vog.y, this.vog.width, this.vog.height, 0, this.erj);
        bio.olq.fwv(l, this.yxi, this.tas, this.vog.x, this.vog.y + this.wmw, this.vog.width, this.vog.height, this.zrw, this.ohr, this.kfk);
        bio.olq.ope(l, this.xjy.x, this.xjy.y, this.xjy.width, this.xjy.height, 0, this.erj);
        if (bio.pql.value36) {
            bio.olq.yzj(l, this.parent.upg(this.parent.language.fcz), this.tas, this.xjy.x, this.xjy.y + this.wmw, this.xjy.width, this.xjy.height, this.zrw, this.hum, this.kfk, this.ffl)
        } else {
            if (bio.pql.value37) {
                bio.olq.yzj(l, this.parent.upg(this.parent.language.fda), this.tas, this.xjy.x, this.xjy.y + this.wmw, this.xjy.width, this.xjy.height, this.zrw, this.hum, this.kfk, this.ffl)
            }
        }
        bio.olq.ope(l, this.gue.x, this.gue.y, this.gue.width, this.gue.height, 0, this.okz);
        bio.olq.yzj(l, this.parent.upg(this.parent.language.zha), this.tas, this.gue.x, this.gue.y + this.wmw, this.gue.width, this.gue.height, this.zrw, this.hum, this.kfk, this.ffl);
        bio.olq.ope(l, this.wpv.x, this.wpv.y, this.wpv.width, this.wpv.height, 0, this.erj);
        bio.olq.yzj(l, this.parent.upg(this.parent.language.ana), this.tas, this.wpv.x, this.wpv.y + this.wmw, this.wpv.width, this.wpv.height, this.zrw, this.hum, this.kfk, this.ffl);
        if (this.vuw) {
            this.tri(l)
        }
        if (this.uju) {
            if (bio.pql.value36) {
                bio.olq.idi(l, this.lrv, this.tas, this.xjy.x, this.xjy.y + this.wmw, this.xjy.width, this.xjy.height, this.zrw, this.hum, this.kfk, this.ffl)
            } else {
                if (bio.pql.value37) {
                    bio.olq.idi(l, this.uqy, this.tas, this.xjy.x, this.xjy.y + this.wmw, this.xjy.width, this.xjy.height, this.zrw, this.hum, this.kfk, this.ffl)
                }
            }
            bio.olq.idi(l, this.parent.jos(this.xps), this.tas, this.gue.x, this.gue.y + this.wmw, this.gue.width, this.gue.height, this.zrw, this.hum, this.kfk, this.ffl);
            bio.olq.idi(l, this.parent.jos(this.wit), this.tas, this.wpv.x, this.wpv.y + this.wmw, this.wpv.width, this.wpv.height, this.zrw, this.hum, this.kfk, this.ffl)
        }
        for (var b = 0, e = this.ydj.length; b < e; b++) {
            this.ydj[b].jvb()
        }
        if (this.ngs) {
            bio.olq.kbi(l, this.nej.x, this.nej.y, this.nej.width, this.nej.height, this.iul, this.esl, 0.3, this.efu, this.oxo, 1);
            bio.olq.fwv(l, this.parent.upg(this.parent.language.eqm), this.rhy, this.nej.x, this.nej.y, this.nej.width, this.nej.height, this.zrw, this.hum, this.kfk)
        }
        l.restore();
        if (this.lhh && this.ien) {
            if (a) {
                this.lhh.drawImage(this.ien, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.lhh.drawImage(this.ien, this.x, this.y)
            }
        }
    };
    this.tri = function (b) {
        var c = Math.round(this.okk.height / 2),
            a = Math.round(this.okk.x + c),
            d = Math.round(this.okk.y + c / 2);
        b.save();
        bio.olq.ope(b, this.okk.x, this.okk.y, this.okk.width, this.okk.height, this.ktk, this.nav, this.jmo, this.oxo);
        bio.olq.fwv(b, this.parent.language.fnq, this.tas, this.okk.x + this.okk.height, this.okk.y, this.okk.width - this.okk.height, this.okk.height, this.zrw, this.njn, this.kfk);
        bio.olq.zuu(b, a, d, c, c, null, 0, this.pqn, this.oxo, 1);
        if (this.rzy) {
            bio.olq.zuu(b, a + c / 4, d + c / 4, c / 2, c / 2, this.pqn, 1)
        }
        b.restore()
    }
}
yor.prototype = new idn;

function zek() {
    this.akj = 0;
    this.iib = [];
    this.yfy = function (a, c, b) {
        zek.prototype.yfy.call(this, a, c, b);
        this.akj = 0;
        this.iib = []
    };
    this.kus = function (a, b) {
        if (b && b === true) {
            this.iib.unshift(a)
        } else {
            this.iib.push(a)
        }
    };
    this.kgr = function (a) {
        if (a && a === true) {
            this.iib.shift()
        } else {
            this.iib.pop()
        }
    };
    this.wyo = function (a) {
        this.akj = a
    };
    this.qgr = function () {
        return this.akj
    };
    this.jvb = function () {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        if (this.akj < this.iib.length) {
            this.iib[this.akj].jvb()
        }
        try {
            if (this.lhh && this.ien) {
                this.lhh.drawImage(this.ien, this.x, this.y)
            }
        } catch (a) {}
    }
}
zek.prototype = new idn;

function fhf() {
    var a = this;
    this.gln = function () {
        a.nrk = false
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.ssi != null) {
            b.drawImage(this.ssi, 0, 0, this.ssi.width, this.ssi.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
fhf.prototype = new qxz;

function wxm() {
    this.jsb = "";
    this.kmg = "";
    this.ssi = null;
    this.zqj = "sans-serif";
    this.wsm = "sans-serif";
    this.kfk = "bold";
    this.cdk = null;
    this.tas = null;
    this.cxo = null;
    this.hkg = null;
    this.gnv = null;
    this.bwp = 16;
    this.fso = 20;
    this.gnt = 0;
    this.dbk = 0;
    this.oxo = 2;
    this.oii = 3;
    this.fyf = 3;
    this.nof = 3;
    this.fdh = 3;
    this.yfy = function (a, e, b, d, c) {
        wxm.prototype.yfy.call(this, a, e, b);
        this.jsb = d;
        this.kmg = c
    };
    this.mey = function (a) {
        try {
            this.bwp = a.blp;
            this.fso = a.ezx;
            this.gnt = a.ozg;
            this.dbk = a.eet;
            this.oxo = a.dbr;
            this.oii = a.nlq;
            this.fyf = a.qch;
            this.nof = a.art;
            this.fdh = a.exc
        } catch (b) {
            console.error(b)
        }
    };
    this.psg = function (a) {
        try {
            this.zqj = a.yrd;
            this.wsm = a.jha;
            this.kfk = a.zqm;
            this.cdk = a.xww;
            this.tas = a.xmb;
            this.cxo = a.borderColor;
            this.hkg = a.vna;
            this.gnv = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.qib = function (a, b) {
        this.kmg = a;
        if (b && b === true && this.context2D != null && this.kgg() === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.gno = function (a, b) {
        this.jsb = a;
        if (b && b === true && this.context2D != null && this.kgg() === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.hkg) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.cxo);
            b.addColorStop(1, this.hkg);
            bio.olq.gpz(a, this.x, this.y, this.width, this.height, this.oii, this.fyf, this.nof, this.fdh, this.gnv, 1, b, this.oxo, 1)
        } else {
            bio.olq.gpz(a, this.x, this.y, this.width, this.height, this.oii, this.fyf, this.nof, this.fdh, this.gnv, 1, this.cxo, this.oxo, 1)
        }
        if (this.jsb != null) {
            bio.olq.fwv(a, this.jsb, this.cdk, this.x + this.oxo, this.y + this.gnt, this.width - 2 * this.oxo, this.height, this.zqj, this.bwp, this.kfk)
        }
        if (this.kmg != null) {
            if (this.jsb != null) {
                bio.olq.fwv(a, this.kmg, this.tas, this.x + this.oxo, this.y + this.dbk, this.width - 2 * this.oxo, this.height, this.wsm, this.fso, this.kfk)
            } else {
                bio.olq.fwv(a, this.kmg, this.tas, this.x + this.oxo, this.y + this.oxo, this.width - 2 * this.oxo, this.height, this.wsm, this.fso, this.kfk)
            }
        }
        if (this.ssi) {
            a.drawImage(this.ssi, 0, 0, this.ssi.width, this.ssi.height, this.x + this.oxo, this.y + this.oxo, this.width - 2 * this.oxo, this.height - 2 * this.oxo)
        }
        a.restore();
        if (this.lhh && this.ien) {
            this.lhh.drawImage(this.ien, this.x, this.y)
        }
    }
}
wxm.prototype = new idn;

function nlr() {
    var a = this;
    this.ssi = null;
    this.yxi = "";
    this.fhv = null;
    this.otl = false;
    this.qcx = false;
    this.zvu = 0;
    this.owo = 0;
    this.nsk = 150;
    this.jzc = 100;
    this.sjt = 0;
    this.pjj = 3;
    this.wcx = 92;
    this.afp = 0;
    this.exl = 0;
    this.zqj = "sans-serif";
    this.cbx = "sans-serif";
    this.kfk = "";
    this.cdk = null;
    this.szb = null;
    this.zyi = null;
    this.feo = null;
    this.rpr = null;
    this.cxo = null;
    this.hkg = null;
    this.gnv = null;
    this.qha = null;
    this.oyh = null;
    this.wjw = null;
    this.ugo = null;
    this.mem = null;
    this.bei = new bku();
    this.bwp = 0;
    this.rew = 0;
    this.gnt = 0;
    this.nxd = 0;
    this.xqx = 0;
    this.oxo = 0;
    this.uwd = 0;
    this.qtw = 0;
    this.mey = function (b) {
        try {
            this.bwp = b.blp;
            this.rew = b.twx;
            this.gnt = b.ozg;
            this.nxd = b.wqg;
            this.xqx = b.aro;
            this.oxo = b.dbr;
            this.uwd = b.mlm;
            this.qtw = b.ale;
            this.bei = b.ada;
            this.wzx()
        } catch (c) {
            console.error(c)
        }
    };
    this.psg = function (b) {
        try {
            this.zqj = b.yrd;
            this.cbx = b.iup;
            this.kfk = b.zqm;
            this.cdk = b.xww;
            this.szb = b.shn;
            this.zyi = b.yjk;
            this.feo = b.nih;
            this.rpr = b.ozy;
            this.cxo = b.borderColor;
            this.hkg = b.vna;
            this.gnv = b.backgroundColor;
            this.kqn = b.fss;
            this.qha = b.jca;
            this.wzx()
        } catch (c) {
            console.error(c)
        }
    };
    this.rny = function (b) {
        try {
            this.cdk = b.xww;
            this.szb = b.shn;
            this.zyi = b.yjk;
            this.feo = b.nih;
            this.wzx()
        } catch (c) {
            console.error(c)
        }
    };
    this.xxq = function () {
        return {
            xww: this.cdk,
            shn: this.szb,
            yjk: this.zyi,
            nih: this.feo
        }
    };
    this.wzx = function () {
        this.ugo = this.gnv;
        this.mem = this.cxo;
        this.oyh = this.cdk;
        this.wjw = this.zyi;
        if (this.height > 0 && this.hkg) {
            this.mem = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.mem.addColorStop(0, this.cxo);
            this.mem.addColorStop(1, this.hkg)
        }
        if (this.height > 0 && this.kqn) {
            this.ugo = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.ugo.addColorStop(0, this.gnv);
            this.ugo.addColorStop(1, this.kqn)
        }
        if (this.bwp > 0 && this.szb) {
            this.oyh = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height / 2);
            this.oyh.addColorStop(0, this.cdk);
            this.oyh.addColorStop(1, this.szb)
        }
        if (this.rew > 0 && this.feo) {
            this.wjw = this.context2D.createLinearGradient(this.width / 2, this.height / 2, this.width / 2, this.height);
            this.wjw.addColorStop(0, this.zyi);
            this.wjw.addColorStop(1, this.feo)
        }
    };
    this.fpy = function (b, c) {
        if (b >= this.parent.utg.yqr.cuz.x && b <= this.parent.utg.yqr.cuz.x + this.parent.utg.yqr.cuz.width && c >= this.parent.utg.yqr.cuz.y && c <= this.parent.utg.yqr.cuz.y + this.parent.utg.yqr.cuz.height && this.kgg()) {
            if (this.otl) {
                this.qcx = false;
                this.otl = false;
                this.stop();
                this.dwp()
            }
            return true
        }
        return false
    };
    this.dck = function (b, c) {
        this.fhv = b;
        if (c && c === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.gno = function (b, c) {
        this.yxi = b;
        if (c && c === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.gil = function () {
        return this.yxi
    };
    this.start = function () {
        this.tsg(true);
        this.parent.jvb();
        this.sjt = new Date().getTime();
        this.owo = 0;
        this.exl = 0;
        this.afp = Math.floor((9 * this.fhv) / (10 * this.wcx));
        this.qcx = true;
        this.otl = false;
        this.parent.fcy.lgu("jackpot");
        this.ksg()
    };
    this.ksg = function () {
        var b = 0,
            c = new Date().getTime();
        a.owo++;
        if (a.owo < a.nsk) {
            if (a.owo === a.pjj) {
                a.exl = Math.floor(a.fhv / 10)
            } else {
                if (a.owo > a.pjj && a.owo < a.pjj + a.wcx) {
                    a.exl += a.afp
                } else {
                    if (a.owo == a.pjj + a.wcx) {
                        a.exl = a.fhv
                    }
                }
            }
            a.jvb();
            b = (a.owo * a.jzc - (c - a.sjt));
            a.zvu = setTimeout(a.ksg, b)
        } else {
            a.parent.fcy.aee("jackpot");
            if (!bio.pql.value76 || !bio.pql.value76.u) {
                a.qcx = false;
                a.stop();
                a.dwp()
            } else {
                a.spb();
                a.otl = true;
                a.tgl()
            }
        }
    };
    this.tgl = function () {
        var b = 0,
            c = new Date().getTime();
        a.owo++;
        a.jvb();
        b = (a.owo * a.jzc - (c - a.sjt));
        a.zvu = setTimeout(a.tgl, b)
    };
    this.stop = function () {
        clearTimeout(this.zvu)
    };
    this.jvb = function () {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var b = this.context2D,
            c = (this.uwd === 0) ? this.oxo : 0;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        if (this.ssi) {
            if (this.qcx === true) {
                b.drawImage(this.ssi, (this.owo % 3) * this.ssi.width / 3, 0, this.ssi.width / 3, this.ssi.height, 0, 0, this.width, this.height)
            } else {
                b.drawImage(this.ssi, 0, 0, this.width, this.height)
            }
        } else {
            bio.olq.gpz(b, 0, -c, this.width, this.height, this.uwd, this.uwd, this.qtw, this.qtw, this.ugo, 1, this.mem, this.oxo, 1);
            bio.olq.ope(b, this.bei.x, this.bei.y, this.bei.width, this.bei.height, this.qtw, this.qha, 1)
        }
        if (this.yxi != null) {
            bio.olq.fwv(b, this.yxi, this.oyh, this.xqx, this.gnt - c, this.width - 2 * this.xqx, this.height, this.zqj, this.bwp, this.kfk)
        }
        if (this.qcx === true) {
            if (this.exl > 0) {
                bio.olq.fwv(b, this.parent.lik(this.exl), this.wjw, this.xqx, this.nxd - c, this.width - 2 * this.xqx, this.height, this.cbx, this.rew, this.kfk)
            }
        } else {
            if (this.fhv != null) {
                bio.olq.fwv(b, (this.fhv > 0) ? this.parent.lik(this.fhv) : 0, this.wjw, this.xqx, this.nxd - c, this.width - 2 * this.xqx, this.height, this.cbx, this.rew, this.kfk)
            }
        }
        b.restore();
        if (this.lhh && this.ien) {
            this.lhh.drawImage(this.ien, this.x, this.y)
        }
    };
    this.dwp = function () {};
    this.spb = function () {}
}
nlr.prototype = new idn;

function sgj() {
    var a = this;
    this.crr = null;
    this.qzo = [];
    this.cyg = null;
    this.fwx = null;
    this.fhv = null;
    this.lwm = null;
    this.plm = null;
    this.otl = false;
    this.qcx = false;
    this.zvu = 0;
    this.nwk = 0;
    this.jzc = 89;
    this.sjt = 0;
    this.tfb = [];
    this.unu = 0;
    this.ylv = 0;
    this.zjr = 0;
    this.jky = 0;
    this.isp = new bku();
    this.bei = new bku();
    this.ndr = null;
    this.awj = 0;
    this.lzm = 0;
    this.yfy = function (b, d, c) {
        sgj.prototype.yfy.call(this, b, d, c);
        this.lwm = document.createElement("canvas");
        this.plm = this.lwm.getContext("2d")
    };
    this.mey = function (b) {
        try {
            this.ndr = b.tyu;
            this.bei = b.ada;
            this.isp = b.cih;
            this.awj = b.agk;
            this.lzm = b.lll;
            this.lwm.width = Math.round(this.bei.width);
            this.lwm.height = Math.round(this.bei.height)
        } catch (c) {
            console.error(c)
        }
    };
    this.dck = function (l, j) {
        var m = this.plm,
            c = "",
            n = [],
            b = 0,
            d = 1,
            k = 0,
            f = 0;
        j = (j) ? j : 1;
        f = this.parent.vvg(l);
        for (var e = 0, g = f.length; e < g; e++) {
            c = f.charAt(e);
            c = c.replace(/\./g, "dt").replace(/\,/g, "cm").replace(/\ /g, "sp");
            n[e] = this.ndr["_" + c];
            b += n[e].width
        }
        if ((b * j) > this.lwm.width) {
            d = (this.lwm.width / (b * j)).toString();
            d = Number(d.substring(0, (d.length > 5) ? 5 : d.length))
        } else {
            k = Math.floor((this.lwm.width - (b * j)) / 2);
            y = 0
        }
        m.save();
        m.clearRect(0, 0, this.lwm.width, this.lwm.height);
        for (var e = 0, g = n.length; e < g; e++) {
            if (n[e].width > 0 && n[e].height > 0) {
                m.drawImage(this.cyg, n[e].x, n[e].y, n[e].width, n[e].height, k * d, n[e].y * d * j + (this.lwm.height - n[e].height * d * j) / 2, n[e].width * d * j, n[e].height * d * j);
                k += n[e].width * j
            }
        }
        m.restore()
    };
    this.start = function () {
        this.tsg(true);
        this.parent.jvb();
        this.sjt = new Date().getTime();
        this.nwk = 0;
        this.qcx = true;
        this.otl = false;
        this.tfb.length = 0;
        for (var c = 0; c < 56; c++) {
            this.tfb[c] = {
                scale: 1,
                igc: 1,
                y: this.y,
                x: this.x,
                lci: 0,
                hhe: 0.5,
                mmq: 0
            }
        }
        for (var c = 0; c < 16; c++) {
            if (c <= 3) {
                this.tfb[c].igc = Math.sin(Math.PI / 8 * (c + 1))
            }
            this.tfb[c].y = this.y + this.awj * Math.cos(Math.PI / 32 * c);
            this.tfb[c].x = this.x + this.lzm * Math.sin(Math.PI / 8 * c);
            this.tfb[c].scale = Math.sin(Math.PI / 32 * c)
        }
        for (var c = 6, b = 1; b <= 10; c++, b++) {
            this.tfb[c].hhe = 0.5 + 0.5 * Math.sin(Math.PI / 20 * b)
        }
        for (var c = 16, b = 1; b <= 40; c++, b++) {
            this.tfb[c].hhe = 1 + 0.5 * Math.sin(Math.PI / 40 * b)
        }
        for (var c = 16, b = 0; c < this.tfb.length; c++, b++) {
            this.tfb[c].lci = b;
            if (b >= this.qzo.length && b <= this.qzo.length + 6) {
                this.tfb[c].mmq = Math.sin(Math.PI / 12 * (b - this.qzo.length))
            } else {
                if (b >= this.qzo.length + 6) {
                    this.tfb[c].mmq = 1
                }
            }
        }
        for (var c = this.tfb.length - 7, b = 0; c < this.tfb.length; c++, b++) {
            this.tfb[c].igc = Math.cos(Math.PI / 12 * b)
        }
        this.parent.fcy.lgu("mystery_jackpot");
        this.ksg()
    };
    this.ksg = function () {
        var b = 0,
            c = new Date().getTime();
        a.nwk++;
        if (a.nwk < a.tfb.length - 1) {
            a.unu = Math.floor(a.width * a.tfb[a.nwk].scale);
            a.ylv = Math.floor(a.height * a.tfb[a.nwk].scale);
            a.zjr = Math.floor(a.bei.width * a.tfb[a.nwk].hhe);
            a.jky = Math.floor(a.bei.height * a.tfb[a.nwk].hhe);
            a.parent.jvb();
            b = (a.nwk * a.jzc - (c - a.sjt));
            a.zvu = setTimeout(a.ksg, b)
        } else {
            a.qcx = false;
            a.stop();
            a.dwp()
        }
    };
    this.stop = function () {
        clearTimeout(this.zvu)
    };
    this.jvb = function () {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var c = this.context2D,
            b = (this.qcx) ? this.tfb[this.nwk].x : this.x,
            f = (this.qcx) ? this.tfb[this.nwk].y : this.y,
            d = (this.qcx) ? this.tfb[this.nwk].igc : 1,
            e = (this.qcx) ? this.tfb[this.nwk].lci : 0;
        c.save();
        c.globalAlpha = d;
        c.clearRect(0, 0, this.width, this.height);
        if (e == 0) {
            c.drawImage(this.crr, 0, 0, this.width, this.height)
        }
        if (e < this.qzo.length) {
            c.drawImage(this.qzo[e], 0, 0, this.width, this.height)
        } else {
            c.save();
            c.globalAlpha = d * this.tfb[this.nwk].mmq;
            c.drawImage(this.fwx, this.isp.x, this.isp.y);
            c.restore()
        }
        if (this.lwm) {
            c.drawImage(this.lwm, this.bei.x + (this.bei.width - this.zjr) / 2, this.bei.y + (this.bei.height - this.jky) / 2, this.zjr, this.jky)
        }
        c.restore();
        if (this.lhh && this.ien) {
            this.lhh.drawImage(this.ien, b + (this.width - this.unu) / 2, f + (this.height - this.ylv) / 2, this.unu, this.ylv)
        }
    };
    this.dwp = function () {}
}
sgj.prototype = new idn;

function eow() {
    this.ssi = new Image();
    this.kmg = "";
    this.dxs = true;
    this.zrw = null;
    this.kfk = "bold";
    this.xpu = "red";
    this.hxb = "orange";
    this.rcu = "white";
    this.hum = 40;
    this.ffl = 0;
    this.wmw = 0;
    this.xqx = 0;
    this.qko = 2;
    this.ifm = null;
    this.elh = 0;
    this.ddk = 0;
    this.yfy = function (a, e, c, b, d) {
        eow.prototype.yfy.call(this, a, e, c);
        this.ssi = b;
        this.kmg = d
    };
    this.mey = function (a) {
        try {
            this.hum = a.fontSize;
            this.ffl = a.cic;
            this.wmw = a.kth;
            this.xqx = a.aro;
            this.qko = a.tce
        } catch (b) {
            console.error(b)
        }
    };
    this.psg = function (a) {
        try {
            this.zrw = a.font;
            this.kfk = a.zqm;
            this.xpu = a.dme;
            this.hxb = a.mxv;
            this.rcu = a.owr
        } catch (b) {
            console.error(b)
        }
    };
    this.qib = function (a, b) {
        this.kmg = a;
        if (b && b === true && this.context2D != null) {
            this.tsg(true, true)
        }
    };
    this.duo = function (a, b) {
        this.kmg = a;
        this.dxs = false;
        if (b && b === true && this.context2D != null) {
            this.tsg(true, true)
        }
    };
    this.tsg = function (a, b) {
        this.zro = a;
        if (b && b === true && this.context2D != null) {
            if (this.ien == null && this.kgg()) {
                this.jvb()
            } else {
                if (this.parent != null) {
                    this.parent.jvb(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.dwv = function (a, b, c) {
        this.ifm = a;
        this.elh = b;
        this.ddk = c
    };
    this.jvb = function () {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.ien != null) ? 0 : this.x,
            d = (this.ien != null) ? 0 : this.y;
        b.save();
        if (this.ien == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.dxs === true) {
            if (this.ifm != null) {
                b.drawImage(this.ifm, this.x + this.elh, this.y + this.ddk, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.ssi != null) {
                b.drawImage(this.ssi, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.ffl, d, a + this.width / 2 + this.ffl, d + this.height);
        c.addColorStop(0, this.xpu);
        c.addColorStop(1, this.hxb);
        bio.olq.fwv(b, this.kmg, c, a + this.xqx + this.ffl, d + this.wmw, this.width - 2 * this.xqx, this.height, this.zrw, this.hum, this.kfk, this.rcu, this.qko);
        b.restore();
        if (this.lhh && this.ien) {
            this.lhh.drawImage(this.ien, this.x, this.y)
        }
    }
}
eow.prototype = new idn;

function pmj() {
    var a = this;
    this.sdw = "LOADING ... ";
    this.xeu = "ERROR";
    this.uip = null;
    this.blb = null;
    this.yhi = false;
    this.gui = false;
    this.yja = true;
    this.fvs = null;
    this.zjn = null;
    this.zvu = 0;
    this.huw = 0;
    this.qcx = false;
    this.dtn = false;
    this.sjt = 0;
    this.jzc = 60;
    this.nwk = 0;
    this.kie = null;
    this.lwz = null;
    this.blr = null;
    this.vuw = true;
    this.zrw = null;
    this.kfk = "bold";
    this.pjt = "black";
    this.wmp = "rgb(0,100,10)";
    this.xpz = "rgb(80,255,100)";
    this.yjb = "rgb(120,120,120)";
    this.snf = "red";
    this.ign = "white";
    this.hum = 14;
    this.gou = 18;
    this.hih;
    this.ypa;
    this.evh;
    this.jou;
    this.xqx = 5;
    this.ffl = 12;
    this.wmw = 5;
    this.vgh = 2;
    this.eak = 7;
    this.fxh = new bku();
    this.ldp = 0;
    this.kuf = 0;
    this.msk = 0;
    this.bnn = new bku();
    this.lqe = new bku();
    this.osi = new bku();
    this.gsx = new bku();
    this.yfy = function (b, d, c) {
        pmj.prototype.yfy.call(this, b, d, c);
        if (bio.pql.value45 == bio.aaa.htt) {
            this.fvs = document.createElement("canvas");
            this.zjn = this.fvs.getContext("2d")
        }
    };
    this.mey = function (b) {
        try {
            this.hum = b.fontSize;
            this.gou = b.rjo;
            this.xqx = b.aro;
            this.ffl = b.cic;
            this.wmw = b.kth;
            this.vgh = b.ied;
            this.eak = b.khk;
            this.hih = b.dsy;
            this.ypa = b.ndg;
            this.evh = b.lru;
            this.jou = b.zwn;
            this.fxh = b.mrw.cuz;
            this.ldp = b.mrw.x;
            this.kuf = b.mrw.wwo;
            this.msk = b.mrw.wvc;
            this.bnn = b.smg;
            this.lqe = b.jus.smg;
            this.osi = b.jus.ndg;
            this.gsx = b.jus.zeq;
            if (bio.pql.value45 == bio.aaa.htt) {
                this.fvs.width = Math.round(this.fxh.width);
                this.fvs.height = Math.round(this.fxh.height)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.psg = function (b) {
        try {
            this.zrw = b.font;
            this.kfk = b.zqm;
            this.pjt = b.backgroundColor;
            this.wmp = b.yln;
            this.xpz = b.svz;
            this.yjb = b.hvf;
            this.snf = b.szp;
            this.ign = b.ouq;
            this.blb = b.blb
        } catch (c) {
            console.error(c)
        }
    };
    this.jvb = function (b) {
        if (b && b >= 0) {
            this.huw = b
        }
        if (!this.kgg()) {
            return
        }
        if (bio.pql.value45 == bio.aaa.qqg) {
            this.vcx()
        } else {
            if (bio.pql.value45 == bio.aaa.ocl || bio.pql.value45 == bio.aaa.htt) {
                if (!this.uip && this.lwz && this.blr) {
                    this.slh()
                } else {
                    if (bio.pql.value45 == bio.aaa.ocl) {
                        this.evi()
                    } else {
                        if (bio.pql.value45 == bio.aaa.htt) {
                            if (b === 100) {
                                this.jqs()
                            }
                            this.cef()
                        }
                    }
                }
            }
        }
    };
    this.vcx = function () {
        if (this.yhi) {
            var c = this.context2D,
                b = this.evh.width / 100;
            c.save();
            if (this.gui === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.fcy.uxh("splash"), 0, 0, this.width, this.height);
            if (this.blb) {
                bio.olq.zuu(c, this.xqx, this.xqx, this.width - 2 * this.xqx, this.height - 2 * this.xqx, this.blb, 0.3)
            }
            if (this.uip != null && this.uip != "") {
                this.jyq(this.jou, true)
            } else {
                if (this.lwz != null && this.lwz != "") {
                    this.tri(this.jou, true)
                } else {
                    if (this.yja === true) {
                        if (this.gui === false) {
                            bio.olq.zuu(c, this.hih.x, this.hih.y, this.hih.width, this.hih.height, this.pjt, 0.5)
                        }
                        var e = this.sdw + " " + this.huw + "%";
                        var d = c.createLinearGradient(this.evh.x, this.evh.y, this.evh.x + this.evh.width, this.evh.y);
                        d.addColorStop(0, this.wmp);
                        d.addColorStop(1, this.xpz);
                        bio.olq.fwv(c, e, this.ign, this.ypa.x, this.ypa.y, this.ypa.width, this.ypa.height, this.zrw, this.hum, this.kfk);
                        bio.olq.kbi(c, this.evh.x - this.vgh, this.evh.y, this.evh.width + 2 * this.vgh, this.evh.height, this.vgh, this.pjt, 0.8, this.yjb, this.vgh, 0.8);
                        bio.olq.zuu(c, this.evh.x, this.evh.y + this.vgh / 2, b * this.huw, this.evh.height - this.vgh, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.evi = function () {
        if (this.yhi) {
            var c = this.context2D,
                b = this.evh.width / 100;
            c.save();
            if (this.gui === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            if (this.qcx === true && this.kie) {
                c.beginPath();
                c.rect(this.kie.x, this.kie.y, this.kie.width, this.kie.height);
                c.closePath();
                c.clip()
            }
            c.drawImage(this.parent.fcy.uxh("splash"), this.bnn.x, this.bnn.y, this.bnn.width, this.bnn.height);
            if (this.uip != null && this.uip != "") {
                this.jyq(this.jou, false)
            } else {
                if (this.lwz != null && this.lwz != "") {
                    this.tri(this.jou, false)
                } else {
                    if (this.yja === true) {
                        var e = this.sdw + " " + this.huw + "%";
                        var d = c.createLinearGradient(this.evh.x, this.evh.y, this.evh.x + this.evh.width, this.evh.y);
                        d.addColorStop(0, this.wmp);
                        d.addColorStop(1, this.xpz);
                        var f = c.createLinearGradient(this.evh.x + (b * this.huw) - this.eak, this.evh.y, this.evh.x + (b * this.huw), this.evh.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        bio.olq.fwv(c, e, this.ign, this.ypa.x, this.ypa.y, this.ypa.width, this.ypa.height, this.zrw, this.hum, this.kfk);
                        bio.olq.zuu(c, this.evh.x, this.evh.y, this.evh.width, this.evh.height, "rgb(12,15,25)", 1);
                        if (this.huw > 0 && this.huw < 100) {
                            bio.olq.kbi(c, this.evh.x + (b * this.huw) - this.eak + this.vgh / 2, this.evh.y - this.vgh, this.eak, this.evh.height + 2 * this.vgh, this.vgh, f, 0.5)
                        }
                        bio.olq.zuu(c, this.evh.x, this.evh.y, b * this.huw, this.evh.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.cef = function () {
        if (this.yhi) {
            var c = this.context2D,
                b = this.evh.width / 100;
            c.save();
            if (this.gui === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.fcy.uxh("splash"), this.bnn.x, this.bnn.y, this.bnn.width, this.bnn.height);
            if (this.dtn) {
                c.drawImage(this.fvs, this.fxh.x, this.fxh.y)
            }
            if (this.uip != null && this.uip != "") {
                this.jyq(this.jou, false)
            } else {
                if (this.lwz != null && this.lwz != "") {
                    this.tri(this.jou, false)
                } else {
                    if (this.yja === true) {
                        var e = this.sdw + " " + this.huw + "%";
                        var d = c.createLinearGradient(this.evh.x, this.evh.y, this.evh.x + this.evh.width, this.evh.y);
                        d.addColorStop(0, this.wmp);
                        d.addColorStop(1, this.xpz);
                        var f = c.createLinearGradient(this.evh.x + (b * this.huw) - this.eak, this.evh.y, this.evh.x + (b * this.huw), this.evh.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        bio.olq.fwv(c, e, this.ign, this.ypa.x, this.ypa.y, this.ypa.width, this.ypa.height, this.zrw, this.hum, this.kfk);
                        bio.olq.zuu(c, this.evh.x, this.evh.y, this.evh.width, this.evh.height, "rgb(12,15,25)", 1);
                        if (this.huw > 0 && this.huw < 100) {
                            bio.olq.kbi(c, this.evh.x + (b * this.huw) - this.eak + this.vgh / 2, this.evh.y - this.vgh, this.eak, this.evh.height + 2 * this.vgh, this.vgh, f, 0.5)
                        }
                        bio.olq.zuu(c, this.evh.x, this.evh.y, b * this.huw, this.evh.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.slh = function () {
        if (this.yhi) {
            var b = this.context2D;
            b.save();
            b.clearRect(0, 0, this.width, this.height);
            if (this.blr) {
                b.drawImage(this.blr, this.lqe.x, this.lqe.y, this.lqe.width, this.lqe.height)
            }
            if (this.lwz != null && this.lwz != "") {
                bio.olq.tae(b, this.lwz, this.ign, this.osi.x, this.osi.y, this.osi.width, this.osi.height, this.zrw, this.hum, this.kfk, "center", true)
            }
            if (this.vuw === true) {
                bio.olq.tae(b, "[ " + this.parent.language.lcp + " ]", this.ign, this.gsx.x, this.gsx.y, this.gsx.width, this.gsx.height, this.zrw, 2 * this.hum, this.kfk, "center", true)
            }
            b.restore()
        }
    };
    this.jyq = function (c, m) {
        var l = this.context2D,
            o = [],
            d = this.hum,
            k = this.uip,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.gou * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.kfk + " " + d + "px " + this.zrw;
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
                    if (u >= c.width - 2 * this.ffl) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.wmw)) {
            w = (c.height - j - this.wmw) / b;
            d = Math.round(d * w) - 1;
            l.font = this.kfk + " " + d + "px " + this.zrw;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.kfk + " " + d + "px " + this.zrw;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.wmw));
            c.height = j + b + this.wmw;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            bio.olq.zuu(l, c.x, c.y, c.width, c.height, this.pjt, 0.7)
        }
        if (this.xeu != null) {
            l.font = this.kfk + " " + this.gou + "px " + this.zrw;
            l.fillStyle = this.snf;
            l.textBaseline = "bottom";
            l.fillText(this.xeu, c.x + c.width / 2, c.y + this.gou + this.wmw)
        }
        l.font = this.kfk + " " + d + "px " + this.zrw;
        l.fillStyle = this.ign;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.ffl), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.tri = function (c, d) {
        var b = this.context2D;
        b.save();
        if (d && d === true) {
            bio.olq.zuu(b, c.x, c.y, c.width, c.height, this.pjt, 0.7)
        }
        if (this.vuw === true) {
            bio.olq.tae(b, this.lwz, this.ign, c.x, c.y, c.width, c.height, this.zrw, this.hum, this.kfk, "center", true)
        }
        b.restore()
    };
    this.start = function () {
        this.qcx = true;
        this.sjt = new Date().getTime();
        this.kie = new bku(this.fxh.x, this.fxh.y, this.fxh.width, this.fxh.height);
        this.nwk = 0;
        this.atw()
    };
    this.stop = function () {
        this.qcx = false;
        this.kie = null;
        clearTimeout(this.zvu)
    };
    this.atw = function () {
        var b = 0,
            c = new Date().getTime();
        if (a.nwk < 6) {
            a.kie.x -= a.ldp;
            a.kie.width += 2 * a.ldp
        } else {
            if (a.nwk < 12) {
                a.kie.y -= a.msk;
                a.kie.height += a.kuf
            } else {
                a.stop();
                if (typeof a.rup === "function") {
                    a.rup()
                }
            }
        }
        a.jvb();
        a.nwk++;
        if (a.nwk <= 12) {
            b = (a.nwk * a.jzc - (c - a.sjt));
            a.zvu = setTimeout(a.atw, b)
        }
    };
    this.bmo = function () {
        this.dtn = true;
        this.sjt = new Date().getTime();
        this.nwk = 0;
        this.jzc = 89;
        this.jnl()
    };
    this.jqs = function () {
        this.dtn = false;
        clearTimeout(this.zvu)
    };
    this.jnl = function () {
        var d = 0,
            e = new Date().getTime(),
            b = a.zjn,
            c = a.parent.fcy.uxh("splashanim");
        if (a.dtn === true) {
            a.nwk++;
            b.save();
            b.clearRect(0, 0, c.width, c.height);
            b.translate(c.width / 2, c.height / 2);
            b.rotate(Math.PI / 6 * (a.nwk % 12));
            b.translate(-c.width / 2, -c.height / 2);
            b.drawImage(c, 0, 0);
            b.restore();
            a.jvb();
            d = (a.nwk * a.jzc - (e - a.sjt));
            a.zvu = setTimeout(a.jnl, d)
        }
    };
    this.xpi = function () {
        return (this.qcx || this.dtn)
    };
    this.jer = function (c, b) {
        this.lwz = c;
        this.blr = b;
        this.qcx = true;
        this.vuw = true;
        this.zvu = setInterval(this.ntv, 800);
        this.jvb()
    };
    this.ntv = function () {
        a.vuw = !a.vuw;
        a.jvb()
    };
    this.rup = null
}
pmj.prototype = new idn;
bio.pql = new Settings();
bio.olq = new kcd();

function jsg() {
    this.all = "";
    this.eok = "";
    this.ntc = null;
    this.canvas = null;
    this.context2D = null;
    this.bkx = null;
    this.vcc = null;
    this.gun = null;
    this.bee = null;
    this.ccq = null;
    this.xtj = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.pyf = 0;
    this.klu = 0;
    this.txp = false;
    this.width = 0;
    this.height = 0;
    this.npu = 0;
    this.czk = 0;
    this.tqh = 1;
    this.hds = 1;
    this.drb = false;
    this.iua = false;
    this.style = null;
    this.utg = null;
    this.igx = -1;
    this.wui = false;
    this.zii = false;
    this.rqg = false;
    this.pes = false;
    this.sib = false;
    this.vsm = false;
    this.vya = false;
    this.nnn = "";
    this.voc = "";
    this.ufb = "";
    this.avh = "";
    this.gxg = "";
    this.vye = "";
    this.rqm = "1_1_60";
    try {
        if (bio.pql.value19) {
            this.nnn = sessionStorage.sessionValue2;
            this.voc = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.ufb = sessionStorage.sessionValue2
            } else {
                this.nnn = sessionStorage.sessionValue2;
                this.voc = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.ufb = sessionStorage.sessionValue2
                } else {
                    this.ufb = ""
                }
            }
        }
    } catch (b) {}
    this.svb = null;
    this.uvh = null;
    this.rco = false;
    this.qlb = null;
    this.fcy = null;
    this.hfo = null;
    this.ujp = true;
    this.ygv = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.mgc = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.mgc = this.ygv.length - 1
                } else {
                    this.mgc = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.mgc = this.ygv.length - 1
        }
    } catch (b) {
        this.mgc = 0
    }
    this.has = 0;
    this.language = new jdo();
    this.nee = 0;
    this.bwu = 1;
    this.dkj = this.bwu;
    this.vol = [bio.hvg.dxh, bio.hvg.wms, bio.hvg.fod];
    this.iaf = (bio.olq.ssc()) ? 0 : this.vol.length - 1;
    try {
        if (localStorage.localValue1) {
            this.iaf = Number(localStorage.localValue1);
            if (!bio.olq.ssc() && this.vol[this.iaf] === bio.hvg.dxh) {
                this.iaf = this.vol.length - 1
            }
        }
    } catch (b) {}
    this.igd = false;
    this.rmd = "";
    this.zxd = "";
    this.aar = 0;
    this.state = 0;
    this.thu = false;
    this.faz = 5000;
    this.xuj = 0;
    this.dcz = 0;
    this.nsh = 0;
    this.ubx = 0;
    this.ipo = false;
    this.thk = false;
    this.kjo = false;
    this.lyz = null;
    this.yxk = 0;
    this.awe = 0;
    this.ygp = 0;
    this.jut = -1;
    this.byx = -1;
    this.alj = 0;
    this.wdl = null;
    this.fzg = [];
    this.pow = [];
    this.atn = false;
    this.lpu = 0;
    this.psz = 0;
    this.csb = false;

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
    this.yfy = function (d) {
        this.sxd({
            type: "onAppFrameReady",
            sender: this.rmd
        });
        bio.olq.nuy();
        bio.olq.yhc();
        this.zgy();
        if (!this.ipo) {
            this.iun()
        }
        this.yww(this.qqd(d.utg));
        this.que();
        this.lkt();
        this.kbu();
        this.tbm();
        this.ook();
        this.bpj();
        this.cph();
        this.mra();
        this.ltf();
        this.ikk();
        return this
    };
    this.kbu = function () {};
    this.mra = function () {
        try {
            if (bio.pql.value64 && !this.kjo) {
                this.qlb = new xfl();
                this.qlb.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.zgy = function () {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && bio.pql.value8) {
                sessionStorage.sessionValue5 = bio.pql.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.vye = sessionStorage.sessionValue8;
                if (bio.pql.value72) {
                    var n = bio.pql.value72[this.vye];
                    if (bio.pql.value21.e === true && n) {
                        bio.pql.value21.s = n.s;
                        bio.pql.value21.m = n.m;
                        bio.pql.value21.ts = n.ts;
                        bio.pql.value21.cs = n.cs
                    }
                    if (bio.pql.value76 && bio.pql.value76.f === true && n) {
                        bio.pql.value76.s = n.s;
                        bio.pql.value76.m = n.m;
                        bio.pql.value76.ts = n.ts;
                        bio.pql.value76.cs = n.cs
                    }
                }
            }
            if (this.ndk()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.gxg = sessionStorage.sessionValue7
            }
            var r = a("fullscreen");
            if (r != "") {
                sessionStorage.sessionValue14 = r
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (bio.olq.iza) ? bio.pql.value51.m : bio.pql.value51.d
            }
            var g = a("sessionTime");
            if (g != "") {
                sessionStorage.sessionValue15 = g
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = bio.pql.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var o = a("realityCheckTime");
            if (o != "") {
                sessionStorage.sessionValue17 = o
            }
            if (bio.pql.value39 > 0) {
                sessionStorage.sessionValue17 = bio.pql.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var f = sessionStorage.sessionValue18.split(";");
                if (f.length == 2) {
                    this.lpu = Number(f[0]);
                    this.psz = Number(f[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.psz) {
                    this.psz = Number(s);
                    this.lpu = new Date().getTime() - (this.psz * 1000);
                    sessionStorage.sessionValue18 = this.lpu + ";" + this.psz
                }
            }
            if (bio.pql.value86 === true) {
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
            console.error(k.una)
        }
    };
    this.cph = function () {
        if (!(bio.olq.uyk == bio.os.cfd && bio.olq.nqd == bio.uum.gjc)) {
            document.ontouchstart = bio.yqr.nmn
        }
        if (bio.olq.nqd != bio.uum.etu && bio.olq.nqd != bio.uum.gjc) {
            document.ontouchmove = bio.yqr.dfy;
            document.ontouchend = bio.yqr.spe
        }
        if (!bio.olq.uoz) {
            document.onmousedown = bio.yqr.mhx;
            document.onmouseup = bio.yqr.rvm;
            document.onmousemove = bio.yqr.opf
        }
        document.onkeydown = bio.yqr.sik;
        document.onkeyup = bio.yqr.ctm;
        document.oncontextmenu = bio.yqr.fcp;
        this.vsm = this.byb();
        if (bio.olq.jpi() === false && bio.olq.uyk === bio.os.elk && bio.olq.odk() === true && screen.width <= 414 && this.odu()) {
            this.alj = setInterval(this.ohg, 1000)
        }
    };
    this.nmn = function (d) {
        bio.yqr.hel();
        bio.yqr.ofg();
        bio.yqr.fpy(d)
    };
    this.spe = function (d) {
        if (bio.yqr.wui === true) {
            if (bio.yqr.vsm) {
                bio.yqr.ztg()
            } else {
                bio.yqr.gnx(d)
            }
        } else {
            if (bio.yqr.byb()) {
                bio.yqr.ffp()
            }
        }
    };
    this.dfy = function (d) {
        bio.yqr.sud(d)
    };
    this.mhx = function (d) {
        window.focus();
        if (bio.yqr.wui === true) {
            bio.yqr.hel();
            bio.yqr.ofg();
            bio.yqr.fpy(d)
        } else {
            if (bio.yqr.byb()) {
                bio.yqr.ffp()
            }
        }
    };
    this.rvm = function (d) {
        bio.yqr.gnx(d)
    };
    this.opf = function (d) {};
    this.sik = function (d) {
        if ((d.keyCode == 122 && (bio.olq.uyk == bio.os.lnj || bio.olq.uyk == bio.os.fdz)) || (d.keyCode == 70 && d.ctrlKey && bio.olq.uyk == bio.os.epk)) {
            return
        }
        bio.yqr.hel();
        bio.yqr.ofg();
        bio.yqr.ivn(d)
    };
    this.ctm = function (d) {
        bio.yqr.kif(d)
    };
    this.fcp = function () {
        return false
    };
    this.fpy = function (d) {};
    this.gnx = function (d) {};
    this.ivn = function (d) {};
    this.kif = function (d) {};
    this.sud = function (d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.sxd = function (d) {};
    this.xhv = function () {
        var f = bio.yqr.hfo.brx("topb"),
            e = bio.yqr.hfo.brx("settings"),
            d = bio.yqr.hfo.brx("topi"),
            g = bio.yqr.hfo.brx("gameb");
        if (bio.olq.nqd == bio.uum.etu || bio.olq.nqd == bio.uum.rrs) {
            bio.yqr.iua = (window.innerWidth == window.outerWidth)
        } else {
            if (bio.olq.nqd == bio.uum.rva || bio.olq.nqd == bio.uum.hlw) {
                bio.yqr.iua = (window.innerHeight >= window.outerHeight)
            } else {
                if (bio.olq.nqd == bio.uum.mxj) {
                    bio.yqr.iua = (document.fullscreenElement) ? true : false
                } else {
                    if (bio.olq.iza) {
                        if (bio.olq.nqd == bio.uum.ueq || bio.olq.nqd == bio.uum.lmj || bio.olq.nqd == bio.uum.vua) {
                            bio.yqr.iua = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (bio.olq.nqd == bio.uum.gjc) {
                                bio.yqr.iua = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.lij("fullscreen", bio.yqr.iua)
        }
        if (f) {
            f.etp.tvc("fullscreen", "#lij", [(bio.yqr.iua) ? 1 : 0])
        }
        if (e) {
            e.etp.tvc("fullscreen", "#lij", [(bio.yqr.iua) ? 1 : 0])
        }
        if (g) {
            g.etp.tvc("fullscreen", "#lij", [(bio.yqr.iua) ? 1 : 0])
        }
        bio.yqr.tqo();
        bio.yqr.jof();
        bio.yqr.ftr();
        if (bio.olq.odk() === true && bio.olq.jpi() === false) {
            document.body.style.height = "5000px"
        }
        if (!bio.olq.jpi() && bio.olq.nqd === bio.uum.vua && bio.yqr.klu < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.ikj = function () {
        bio.yqr.xhv();
        bio.yqr.ohg()
    };
    this.ohg = function () {
        if (bio.olq.odk() === true && bio.olq.jpi() === false) {
            if (bio.yqr.odu() === true && bio.yqr.pes === true) {
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
                            bio.yqr.xhv();
                            window.ontouchmove = bio.yqr.ikj
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = bio.yqr.nmn;
                        document.ontouchmove = bio.yqr.dfy;
                        document.ontouchend = bio.yqr.spe;
                        if (window.ontouchmove != null) {
                            bio.yqr.xhv();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.hkb = function (g) {
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
                    bio.olq.mbd(e, j, j)
                }
                f.innerHTML = bio.yqr.language.ntf;
                l.className = "rotateAnim";
                k.style.display = "block";
                bio.yqr.sib = true
            } else {
                k.style.display = "none";
                l.className = null;
                bio.yqr.sib = false
            }
        }
    };
    this.lmm = function () {
        var d = bio.yqr.hfo.brx("settings");
        bio.yqr.xhv();
        if (d) {
            d.etp.tvc("adjustment", "#lij", [(bio.yqr.igx === bio.utg.uap) ? 0 : 1]);
            d.jvb()
        }
        if (bio.yqr.igd === true) {
            bio.yqr.sib = true;
            bio.yqr.kpi(true);
            bio.yqr.hkb(true)
        } else {
            bio.yqr.sib = false;
            bio.yqr.kpi((bio.yqr.ygv[bio.yqr.mgc] === 0));
            bio.yqr.hkb(false)
        }
    };
    this.tqo = function () {
        this.pyf = window.innerWidth, this.klu = window.innerHeight;
        this.txp = false;
        if (bio.olq.jpi() == true && bio.pql.value69 === true) {
            if (bio.olq.swr() === true) {
                this.txp = true;
                this.pyf = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.klu = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.pyf > this.klu) {
                    this.klu *= 0.98
                }
            } else {
                if (bio.olq.odk() === true) {
                    this.txp = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.pyf = 1024;
                            this.klu = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.pyf = 736;
                                this.klu = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.pyf = 667;
                                    this.klu = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.pyf = 768;
                            this.klu = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.pyf = 414;
                                this.klu = 628
                            } else {
                                if (screen.height === 667) {
                                    this.pyf = 375;
                                    this.klu = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.ftr = function () {
        var g = 0,
            k = 0,
            f = 1,
            e = 1,
            j = this.pyf,
            d = this.klu;
        this.drb = (this.iua || j < this.width || d < this.height || this.utg.adp);
        g = this.tak(this.drb);
        f = ((j - k) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.drb) {
            if (this.utg.sdr) {
                if (f > e) {
                    this.tqh = e;
                    this.hds = e
                } else {
                    this.tqh = f;
                    this.hds = f
                }
            } else {
                this.tqh = f;
                this.hds = e
            }
        } else {
            this.tqh = 1;
            this.hds = 1
        }
        bio.olq.mbd(this.canvas, this.tqh, this.hds);
        if (this.bkx != null) {
            bio.olq.mbd(this.bkx, this.tqh, this.hds, ((this.utg.bkx.cuz.x) - ((this.utg.bkx.cuz.x + this.utg.bkx.kkk) / 2 * (1 - this.tqh))), ((this.utg.bkx.cuz.y) - ((this.utg.bkx.cuz.y + this.utg.bkx.edr) / 2 * (1 - this.hds))))
        }
        if (this.gun != null) {
            bio.olq.mbd(this.gun, this.tqh, this.hds)
        }
        if (this.drb) {
            this.offsetLeft = Math.floor((j - (this.canvas.width * this.tqh))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.hds))) / 2
        } else {
            this.offsetLeft = this.ntc.offsetLeft;
            this.offsetTop = this.ntc.offsetTop
        }
    };
    this.jof = function () {
        if (this.dfx() === true) {
            var e = null;
            if (this.vol[this.iaf] === bio.hvg.dxh) {
                if (window.orientation === -90) {
                    e = bio.utg.lea
                } else {
                    e = bio.utg.uap
                }
            } else {
                if (this.vol[this.iaf] === bio.hvg.wms) {
                    e = bio.utg.lea
                } else {
                    if (this.vol[this.iaf] === bio.hvg.fod) {
                        e = bio.utg.uap
                    }
                }
            }
            this.igd = (this.klu > this.pyf);
            this.yww(e);
            this.xma(false);
            if (this.pes === true) {
                this.jvb()
            } else {
                this.hfo.tvc("loading", "#jvb")
            }
        } else {
            if (bio.olq.iza) {
                var f = (this.pyf > this.klu) ? this.bwu : this.nee,
                    d = this.utg.vmb,
                    e = null;
                if (f != this.dkj) {
                    this.dkj = f;
                    if (this.ipo) {
                        e = (this.dkj == this.bwu) ? bio.utg.atg : bio.utg.syp
                    } else {
                        e = (this.dkj == this.bwu) ? bio.pql.value33 : bio.pql.value32
                    }
                    this.yww(e);
                    this.xma((d != this.utg.vmb) || this.ipo);
                    if (this.pes === true) {
                        if (this.ipo && this.thk) {
                            this.xtk(this.upg(this.language.szk))
                        } else {
                            this.jvb()
                        }
                    } else {
                        this.hfo.tvc("loading", "#jvb")
                    }
                }
            } else {
                if (!this.ipo) {
                    e = (this.iua) ? bio.pql.value15 : bio.pql.value14;
                    this.yww(e);
                    this.xma(false);
                    if (this.pes === true) {
                        this.jvb()
                    } else {
                        this.hfo.tvc("loading", "#jvb")
                    }
                }
            }
        }
    };
    this.dfx = function () {
        return false
    };
    this.odu = function () {
        return false
    };
    this.yww = function (d) {};
    this.que = function () {
        this.style = new doi()
    };
    this.tak = function (d) {
        var e = 0;
        if (bio.olq.swr() && window.innerWidth > window.innerHeight && d) {
            if (this.wui === true && document.body.style.backgroundColor !== this.style.xra.backgroundColor) {
                document.body.style.backgroundColor = this.style.xra.backgroundColor
            }
        }
        return e
    };
    this.mcf = function () {
        if (bio.olq.swr() && !bio.olq.jpi() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.nkw = function () {
        return false
    };
    this.tbm = function () {
        if (bio.olq.uoz) {
            this.fcy = new ynv()
        } else {
            this.fcy = new iek()
        }
        this.fcy.yfy();
        this.fcy.ryk(this.jlm())
    };
    this.ook = function () {
        this.hfo = new hcn();
        this.hfo.yfy();
        this.hfo.mnm("jackpots")
    };
    this.jlm = function () {
        var d = new uyi();
        d.yfy();
        return d
    };
    this.iun = function () {
        this.lyz = new uwl()
    };
    this.lkt = function () {
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
                    for (var k = 0, g = bio.pql.value5.length; k < g; k++) {
                        if (o[l] === bio.pql.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(bio.pql.value5[0])
                }
                bio.pql.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    bio.pql.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = bio.olq.pkz();
                if (this.ixr(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === bio.language.EN && this.ixr(bio.language.US)) {
                        sessionStorage.sessionValue1 = bio.language.US
                    } else {
                        if (q === bio.language.DE && this.ixr(bio.language.AT)) {
                            sessionStorage.sessionValue1 = bio.language.AT
                        } else {
                            if (q === bio.language.ES && this.ixr(bio.language.MX)) {
                                sessionStorage.sessionValue1 = bio.language.MX
                            } else {
                                if (q === bio.language.ES && this.ixr(bio.language.CO)) {
                                    sessionStorage.sessionValue1 = bio.language.CO
                                } else {
                                    if (q === bio.language.ES && this.ixr(bio.language.CL)) {
                                        sessionStorage.sessionValue1 = bio.language.CL
                                    } else {
                                        if (q === bio.language.ES && this.ixr(bio.language.VE)) {
                                            sessionStorage.sessionValue1 = bio.language.VE
                                        } else {
                                            if (q === bio.language.EN && this.ixr(bio.language.BR)) {
                                                sessionStorage.sessionValue1 = bio.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = bio.pql.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.ixr(sessionStorage.sessionValue1)) {
                for (var l = 0, m = bio.pql.value5.length; l < m; l++) {
                    if (bio.pql.value5[l] == sessionStorage.sessionValue1) {
                        this.has = l;
                        break
                    }
                }
                this.language = this.ttk(sessionStorage.sessionValue1)
            } else {
                this.has = 0;
                this.language = this.ttk(bio.pql.value5[this.has]);
                sessionStorage.sessionValue1 = bio.pql.value5[this.has]
            }
        } catch (n) {
            this.has = 0;
            this.language = this.ttk(bio.pql.value5[this.has]);
            console.error(n.una)
        }
    };
    this.ltf = function () {
        var d = (bio.pql.value45 == bio.aaa.qqg) ? this.utg.aaa.yqr : (bio.pql.value45 == bio.aaa.ocl) ? this.utg.aaa.wtd : this.utg.aaa.kaa;
        this.ntc = document.getElementById("gameArea");
        if (this.txp === false) {
            this.ntc.style.marginTop = (-d.cuz.height / 2) + "px";
            this.ntc.style.marginLeft = (-d.cuz.width / 2) + "px"
        } else {
            this.ntc.style.left = "0px";
            this.ntc.style.top = "0px";
            this.ntc.style.marginTop = ((window.innerHeight - d.cuz.height) / 2) + "px";
            this.ntc.style.marginLeft = ((window.innerWidth - d.cuz.width) / 2) + "px"
        }
        this.ntc.style.width = (d.cuz.width > window.innerWidth) ? window.innerWidth + "px" : d.cuz.width + "px";
        this.ntc.style.height = (d.cuz.height > window.innerHeight) ? window.innerHeight + "px" : d.cuz.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.cuz.width);
        this.canvas.height = Math.round(d.cuz.height);
        this.context2D = this.canvas.getContext("2d");
        this.gun = document.getElementById("gameOverlay");
        if (this.gun) {
            this.gun.style.width = d.cuz.width + "px";
            this.gun.style.height = d.cuz.height + "px"
        }
        this.zgf(d)
    };
    this.zgf = function (d) {
        var e = new pmj();
        e.yfy(d.cuz, this.context2D);
        e.parent = this;
        e.sdw = (this.ipo) ? this.language.mlf : this.language.pjk;
        e.xeu = this.language.error;
        e.mey(d);
        e.psg(this.style.aaa);
        this.hfo.roh("loading", e)
    };
    this.ttu = function () {
        var d = new fuq();
        d.yfy(this.utg.svw.cuz, null, this.context2D);
        d.parent = this;
        d.mey(this.utg.svw);
        d.psg(this.style.svw);
        if (sessionStorage.sessionValue15 == "true" && bio.pql.value49) {
            d.rkq("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || bio.pql.value49) {
                d.rkq("time", "", "--:--")
            }
        }
        if (this.ndk()) {
            d.rkq("freeplay", "", this.language.mbn)
        } else {
            d.rkq("id", " ", "")
        }
        this.hfo.roh("topi", d)
    };
    this.ikn = function () {
        var d = new qom();
        d.yfy(this.utg.lsy.cuz, null, this.context2D);
        d.parent = this;
        d.mey(this.utg.lsy);
        d.psg(this.style.lsy, false);
        d.tsg(false);
        this.hfo.roh("topb", d)
    };
    this.ilx = function () {};
    this.tmy = function () {
        var d = new yor();
        d.yfy(this.utg.mik.cuz, null, this.context2D);
        d.parent = this;
        d.hdv(this.utg.mik);
        d.psg(this.style.mik);
        d.tsg(false);
        this.hfo.roh("stats", d)
    };
    this.bqo = function () {
        this.bee = new aph();
        this.bee.yfy();
        this.bee.psg(this.style.bee);
        this.bee.mey(this.utg.bee)
    };
    this.eqt = function () {
        this.ccq = new pte();
        this.ccq.yfy();
        this.ccq.psg(this.style.ccq);
        this.ccq.mey(this.utg.ccq)
    };
    this.rfu = function () {
        if (this.vup()) {
            this.xtj.mlo = document.getElementById("jurisdictionDiv");
            this.xtj.ltm = document.getElementById("btnsp");
            this.xtj.jzg = document.getElementById("btnsl");
            this.xtj.rnb = document.getElementById("btnst");
            if (this.xtj.ltm) {
                this.xtj.ltm.innerHTML = this.language.wpy;
                this.xtj.ltm.onclick = this.bic;
                this.xtj.ltm.ontouchend = this.bic
            }
            if (this.xtj.jzg) {
                this.xtj.jzg.innerHTML = this.language.gku;
                this.xtj.jzg.onclick = this.rre;
                this.xtj.jzg.ontouchend = this.rre
            }
            if (this.xtj.rnb) {
                this.xtj.rnb.innerHTML = this.language.pjf;
                this.xtj.rnb.onclick = this.ydp;
                this.xtj.rnb.ontouchend = this.ydp
            }
            this.qvn();
            this.eqa()
        }
    };
    this.grn = function (e) {
        var d = new hft();
        d.yfy(this.utg.dge.cuz, null, this.context2D);
        d.parent = this;
        d.atw = true;
        if (e) {
            d.aui(e)
        }
        d.hdv(this.utg.dge);
        d.jes(this.language);
        d.psg(this.style.dge);
        d.mey(this.utg.dge);
        d.tsg(false);
        this.hfo.roh("autop", d)
    };
    this.pmf = function (d) {
        var e = new qiw();
        e.yfy(this.utg.cix.cuz, null, this.context2D);
        e.parent = this;
        if (d) {
            e.vtm(d)
        }
        e.tsg(false);
        this.hfo.roh("settings", e)
    };
    this.xma = function (d) {};
    this.frm = function () {
        var d = this.hfo.brx("stats");
        if (d) {
            d.zlp(this.utg.mik.cuz);
            d.mey(this.utg.mik)
        }
    };
    this.tac = function () {
        if (this.bee) {
            this.bee.mey(this.utg.bee)
        }
    };
    this.qjs = function () {
        if (this.ccq) {
            this.ccq.mey(this.utg.ccq)
        }
    };
    this.qvn = function () {
        var d = null,
            e = 0;
        if (this.xtj) {
            d = this.utg.xot;
            if (this.xtj.mlo) {
                bio.olq.zri(this.xtj.mlo, d.rnw)
            }
            if (this.xtj.ltm) {
                this.xtj.ltm.style.fontSize = d.awl.fontSize + "px";
                this.xtj.ltm.style.textIndent = d.awl.textIndent + "px";
                bio.olq.zri(this.xtj.ltm, d.ogh)
            }
            if (this.xtj.jzg) {
                this.xtj.jzg.style.fontSize = d.awl.fontSize + "px";
                this.xtj.jzg.style.textIndent = d.awl.textIndent + "px";
                bio.olq.zri(this.xtj.jzg, d.nng)
            }
            if (this.xtj.rnb) {
                this.xtj.rnb.style.fontSize = d.awl.fontSize + "px";
                this.xtj.rnb.style.textIndent = d.awl.textIndent + "px";
                bio.olq.zri(this.xtj.rnb, d.erc)
            }
            if (this.xtj.mlo) {
                e = (d.rnw.width - d.rnw.height) / 2;
                if (this.igx == bio.utg.lea) {
                    this.xtj.mlo.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.xtj.mlo.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.ydu = function () {
        var d = this.hfo.brx("autop");
        if (d) {
            d.zlp(this.utg.dge.cuz);
            d.mey(this.utg.dge)
        }
    };
    this.jtv = function () {
        var d = this.hfo.brx("settings");
        if (d) {
            d.zlp(this.utg.cix.cuz);
            d.mey(this.utg.cix)
        }
    };
    this.hjw = function () {
        var d = this.hfo.brx("topi");
        if (d) {
            d.zlp(this.utg.svw.cuz);
            d.mey(this.utg.svw)
        }
    };
    this.ihz = function () {
        var d = this.hfo.brx("topb");
        if (d) {
            d.zlp(this.utg.lsy.cuz);
            d.mey(this.utg.lsy)
        }
    };
    this.rrc = function () {
        var e = this.hfo.brx("loading"),
            d = (bio.pql.value45 == bio.aaa.qqg) ? this.utg.aaa.yqr : (bio.pql.value45 == bio.aaa.ocl) ? this.utg.aaa.wtd : this.utg.aaa.kaa;
        if (e) {
            this.canvas.width = 0;
            if (this.txp === false) {
                this.ntc.style.marginTop = (-d.cuz.height / 2) + "px";
                this.ntc.style.marginLeft = (-d.cuz.width / 2) + "px"
            } else {
                this.ntc.style.left = "0px";
                this.ntc.style.top = "0px";
                this.ntc.style.marginTop = ((this.klu - d.cuz.height) / 2) + "px";
                this.ntc.style.marginLeft = ((this.pyf - d.cuz.width) / 2) + "px"
            }
            this.ntc.style.width = (d.cuz.width > this.pyf) ? this.pyf + "px" : d.cuz.width + "px";
            this.ntc.style.height = (d.cuz.height > this.klu) ? this.klu + "px" : d.cuz.height + "px";
            this.canvas.width = Math.round(d.cuz.width);
            this.canvas.height = Math.round(d.cuz.height);
            if (this.gun) {
                this.gun.style.width = d.cuz.width + "px";
                this.gun.style.height = d.cuz.height + "px"
            }
            e.zlp(d.cuz);
            e.mey(d)
        }
    };
    this.bpj = function () {
        if (bio.olq.iza && !bio.olq.uoz) {
            if (!this.fcy.ion && bio.olq.nqd != bio.uum.ixo) {
                this.ujp = false;
                this.mgc = 0
            }
        }
    };
    this.qqd = function (d) {
        if (bio.olq.iza) {
            if (!this.ipo) {
                return bio.utg.mxt
            } else {
                if (!this.kjo) {
                    return bio.utg.atg
                }
            }
        }
        return d
    };
    this.qqy = function () {
        var d = this.hfo.brx("loading");
        this.xhv();
        if (d) {
            d.yhi = true
        }
        if ((bio.olq.nqd === bio.uum.ueq || bio.olq.nqd === bio.uum.hlw || bio.olq.nqd === bio.uum.fbn) && bio.olq.uyk === bio.os.cfd && bio.olq.mwr === true) {
            if (this.fcy.ion === false || bio.olq.bqr() === false || bio.olq.nzo() === false) {
                bio.qja = bio.hqm.plt
            }
        }
        if (bio.qja == 0) {
            if (this.ujp === true && bio.olq.tuc().length === 0) {
                this.ujp = false
            }
            if (d) {
                if (bio.pql.value45 === bio.aaa.ocl) {
                    d.start()
                } else {
                    if (bio.pql.value45 === bio.aaa.htt) {
                        d.bmo()
                    }
                }
                d.jvb(0)
            }
            this.uss();
            if (this.ujp === true) {
                this.hdy()
            }
            if (d && d.xpi() && bio.pql.value45 === bio.aaa.ocl) {
                d.rup = bio.yqr.fcy.start
            } else {
                this.fcy.start()
            }
        } else {
            if (d) {
                if (bio.qja == bio.hqm.jir && bio.olq.nqd === bio.uum.vua) {
                    d.uip = this.language.zch;
                    d.jvb(0)
                } else {
                    if (bio.qja == bio.una.qod) {
                        d.uip = this.language.deo;
                        d.jvb(0)
                    } else {
                        d.uip = this.language.ndt;
                        if (bio.olq.uyk === bio.os.cfd || bio.olq.uyk === bio.os.fdz) {
                            if (bio.qja != bio.hqm.jir && sessionStorage.sessionValue1 === bio.language.TR) {
                                d.uip += "|Google Chrome" + this.language.cum
                            } else {
                                if (bio.qja != bio.hqm.jir && (sessionStorage.sessionValue1 === bio.language.GE || sessionStorage.sessionValue1 === bio.language.HU)) {
                                    d.uip += "|" + this.language.tiv + " Google Chrome" + this.language.ztc
                                } else {
                                    d.uip += "|" + this.language.cum + " Google Chrome"
                                }
                            }
                        } else {
                            if (bio.olq.uyk === bio.os.lnj || bio.olq.uyk === bio.os.fdz) {
                                if (bio.qja != bio.hqm.jir && sessionStorage.sessionValue1 === bio.language.TR) {
                                    d.uip += "|Google Chrome, Mozilla Firefox" + this.language.cum
                                } else {
                                    if (bio.qja != bio.hqm.jir && (sessionStorage.sessionValue1 === bio.language.GE || sessionStorage.sessionValue1 === bio.language.HU)) {
                                        d.uip += "|" + this.language.tiv + " Google Chrome, Mozilla Firefox" + this.language.ztc
                                    } else {
                                        d.uip += "|" + this.language.cum + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + bio.qja);
                        d.jvb(0)
                    }
                }
            }
        }
    };
    this.uss = function () {};
    this.hdy = function () {};
    this.ikk = function () {
        var e = this.all + this.utg.type + "/",
            d = this.hfo.brx("loading");
        if (bio.pql.value45 == bio.aaa.qqg) {
            e += "load.jpg"
        } else {
            if (bio.pql.value45 == bio.aaa.ocl) {
                e += "load_amatic.png"
            } else {
                if (bio.pql.value45 == bio.aaa.htt) {
                    this.fcy.vrr("splashanim", bio.pql.value30 + "/basic/images/" + this.utg.type + "/loadanim.png");
                    e += "load_amanet.png"
                }
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.gui = true
            }
        }
        this.fcy.vrr("splash", e);
        this.fcy.gzj()
    };
    this.qsv = function () {};
    this.ixr = function (e) {
        for (var d = 0; d < bio.pql.value5.length; d++) {
            if (bio.pql.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.wrk = function () {
        bio.yqr.zii = true;
        if (!bio.yqr.ipo) {
            bio.yqr.bxf();
            if (bio.yqr.fah()) {
                bio.yqr.hus()
            }
        } else {
            bio.yqr.ssn()
        }
        bio.yqr.connect()
    };
    this.bxf = function () {};
    this.ssn = function () {};
    this.connect = function () {
        this.svb.connect(this.rmd, this.nnn, this.voc, this.ufb, this.rqm, this.gxg, this.vye)
    };
    this.axn = function (d) {
        if (typeof d === "undefined") {
            bio.yqr.svb.axn(0)
        } else {
            bio.yqr.svb.axn(d)
        }
    };
    this.diq = function (d) {
        this.dcz = 0;
        this.nsh = 0;
        this.ubx = d;
        clearInterval(this.yxk);
        this.yxk = setInterval(this.aso, 1000)
    };
    this.aso = function () {
        var d = bio.yqr.hfo.brx("loading");
        bio.yqr.dcz++;
        bio.yqr.nsh = Math.round(bio.pql.value47 / 1000) - bio.yqr.dcz;
        bio.yqr.nsh = (bio.yqr.nsh > 0) ? bio.yqr.nsh : 0;
        if (!bio.yqr.wui) {
            if (d) {
                d.uip = "Can not connect to game server!|Tries to connect: " + bio.yqr.ubx + " (" + bio.yqr.nsh + " sec)";
                d.jvb(0)
            }
        }
    };
    this.ndn = function () {
        return bio.pql.value74
    };
    this.jvb = function (d, g, e, f) {};
    this.lnn = function () {
        return (this.pes === true && this.wui === true && this.igd === false)
    };
    this.xtk = function (e) {
        var d = this.hfo.brx("history");
        this.pes = true;
        if (this.wui) {
            if (this.utg.jzd) {
                bio.olq.zuu(this.context2D, this.utg.yqr.cuz.x - this.utg.yqr.dbr, this.utg.yqr.cuz.y - this.utg.yqr.dbr, this.utg.yqr.cuz.width + 2 * this.utg.yqr.dbr, this.utg.yqr.cuz.height + 2 * this.utg.yqr.dbr, "black", 1)
            }
            bio.olq.fwv(this.context2D, e, "white", this.utg.yqr.cuz.x, this.utg.yqr.cuz.y, this.utg.yqr.cuz.width, this.utg.yqr.cuz.height, "arial", 28, "bold");
            if (d) {
                d.jvb()
            }
        }
    };
    this.lsv = function () {
        if (bio.yqr.bee) {
            bio.yqr.bee.zln()
        }
        bio.yqr.ggg(false);
        bio.yqr.ywg.qjf(false);
        bio.yqr.ywg.etp.tvc("exit", "#wsn", [true]);
        if (bio.olq.vel()) {
            bio.olq.fjj();
            setTimeout(bio.yqr.xhv, 1400)
        }
        if (bio.pql.value67 > 0) {
            bio.yqr.axn(bio.pql.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                bio.yqr.sxd({
                    type: "history",
                    sender: bio.yqr.rmd,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null") {
                    bio.yqr.sxd({
                        type: "quit",
                        sender: bio.yqr.rmd,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                          window.parent.postMessage('CloseGame',"*");
                    }
                }
            }
        }
    };
    this.abi = function () {
        clearTimeout(bio.yqr.jut);
        bio.yqr.ggg(false);
        if (bio.yqr.ywg) {
            bio.yqr.ywg.qjf(false)
        }
        if (!bio.yqr.ipo) {
            bio.yqr.stop();
            if (bio.yqr.ywg) {
                bio.yqr.ywg.etp.tvc("info", "#qoz", [bio.yqr.language.eqm]);
                bio.yqr.jvb()
            }
            if (bio.yqr.dfx() === true && bio.olq.vel()) {
                bio.olq.fjj();
                setTimeout(bio.yqr.xhv, 800);
                setTimeout(bio.yqr.svb.qlj.close, 800)
            } else {
                bio.yqr.svb.qlj.close()
            }
        } else {
            bio.yqr.svb.close()
        }
    };
    this.qvo = function () {
        bio.yqr.vsm = true
    };
    this.ztg = function () {
        if (bio.olq.iza == true) {
            if (bio.yqr.vsm == true) {
                bio.yqr.vsm = false;
                bio.olq.fjj();
                setTimeout(bio.yqr.xhv, 1400)
            }
        } else {
            bio.olq.fjj();
            setTimeout(bio.yqr.xhv, 1400)
        }
    };
    this.swi = function () {
        var e = (bio.yqr.dfx() === true) ? "smartphone" : "desktop",
            j = "en";
        if (sessionStorage.sessionValue1 == bio.language.ES || sessionStorage.sessionValue1 == bio.language.CO || sessionStorage.sessionValue1 == bio.language.CL || sessionStorage.sessionValue1 == bio.language.MX || sessionStorage.sessionValue1 == bio.language.VE) {
            j = "es"
        } else {
            if (sessionStorage.sessionValue1 == bio.language.RO) {
                j = "ro"
            } else {
                if (sessionStorage.sessionValue1 == bio.language.PT || sessionStorage.sessionValue1 == bio.language.BR) {
                    j = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == bio.language.HR) {
                        j = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == bio.language.DE) {
                            j = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == bio.language.SE) {
                                j = "se"
                            }
                        }
                    }
                }
            }
        }
        if (bio.yqr.mzg != "") {
            var f = null,
                g = "",
                d = "";
            if (bio.yqr.mzg != "") {
                g += "rtp=" + bio.yqr.mzg
            }
            if (bio.yqr.tgs != "") {
                g += (bio.yqr.mzg != "") ? "&" : "";
                g += "maxwin=" + ((bio.yqr.tgs == "0") ? "0" : bio.yqr.ztt(Number(bio.yqr.tgs) * bio.yqr.eze()))
            }
            d = encodeURIComponent(g);
            f = window.open(bio.pql.value30 + "/gamerules/" + j + "/" + e + "/" + bio.yqr.rmd.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = bio.pql.value30 + "/gamerules/" + j + "/" + e + "/" + bio.yqr.rmd.toLowerCase() + ".html?" + d
            }
        }
    };
    this.sqj = function () {
        bio.yqr.rco = false;
        bio.yqr.cge();
        bio.yqr.mfa();
        bio.yqr.ect()
    };
    this.kpb = function () {
        var d = bio.yqr.hfo.brx("stats");
        if (d) {
            d.xpv(true, true)
        }
        bio.yqr.uvh.close(true)
    };
    this.txy = function () {
        var d = bio.yqr.hfo.brx("stats");
        bio.yqr.stop();
        if (d && d.kgg()) {
            d.xpv(true, true)
        }
        bio.yqr.svb.qlj.close();
        if (bio.yqr.uvh) {
            bio.yqr.uvh.close(false)
        }
    };
    this.mzb = function () {
        clearTimeout(bio.yqr.jut);
        bio.yqr.ywg.qjf(false);
        bio.yqr.stop();
        bio.yqr.svb.qlj.ahr()
    };
    this.sdv = function () {
        if (bio.yqr.thk) {
            return
        }
        var d = bio.yqr.hfo.brx("history");
        if (d) {
            d.qjf(false)
        }
        bio.yqr.stop();
        bio.yqr.svb.vfm(bio.yqr.aar)
    };
    this.sms = function () {
        if (bio.yqr.thk) {
            return
        }
        var d = bio.yqr.hfo.brx("history");
        if (d) {
            d.qjf(false)
        }
        bio.yqr.stop();
        bio.yqr.svb.foj(bio.yqr.aar)
    };
    this.del = function () {
        var d = bio.yqr.hfo.brx("history");
        if (d) {
            d.qjf(false)
        }
        bio.yqr.stop();
        clearInterval(bio.yqr.alj);
        bio.yqr.oiy();
        bio.yqr.svb.close()
    };
    this.rtk = function () {
        bio.yqr.fcy.aee("btn");
        bio.yqr.fcy.lgu("btn");
        bio.yqr.goh()
    };
    this.zvh = function () {
        var f = bio.yqr.hfo.brx("topb"),
            e = bio.yqr.hfo.brx("settings"),
            g = bio.yqr.hfo.brx("gameb"),
            d = bio.yqr.hfo.brx("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (bio.yqr.fcy.ion === true) {
            bio.yqr.mgc = (bio.yqr.mgc === bio.yqr.ygv.length - 1) ? 0 : bio.yqr.mgc + 1;
            bio.yqr.esp(bio.yqr.ygv[bio.yqr.mgc])
        } else {
            bio.yqr.mgc = (bio.yqr.mgc === bio.yqr.ygv.length - 1) ? 0 : bio.yqr.ygv.length - 1;
            bio.yqr.kpi((bio.yqr.ygv[bio.yqr.mgc] === 0))
        }
        sessionStorage.sessionValue6 = bio.yqr.mgc;
        if (bio.yqr.ygv[bio.yqr.mgc] > 0) {
            bio.yqr.fcy.lgu("audioon")
        }
        if (d) {
            d.xbo("audio", bio.yqr.ygv[bio.yqr.mgc])
        }
        if (f) {
            f.etp.tvc("audio", "#lij", [bio.yqr.mgc])
        }
        if (e) {
            e.etp.tvc("audio", "#lij", [bio.yqr.mgc])
        }
        if (g) {
            g.etp.tvc("audio", "#lij", [bio.yqr.mgc])
        }
        bio.yqr.jvb()
    };
    this.ffp = function () {};
    this.vrg = function () {
        var d = bio.yqr.hfo.brx("settings");
        if (d) {
            if (d.kgg()) {
                bio.yqr.fkv()
            } else {
                bio.yqr.hvy()
            }
            bio.yqr.fcy.lgu("btn");
            if (bio.yqr.utg.csj === false) {
                bio.yqr.ywg.etp.tvc("setting", "#zoo", [d.kgg()])
            }
        }
    };
    this.nzr = function () {
        var d = bio.yqr.hfo.brx("settings"),
            e = "";
        bio.yqr.iaf = (bio.yqr.iaf < bio.yqr.vol.length - 1) ? bio.yqr.iaf + 1 : (bio.olq.ssc()) ? 0 : 1;
        localStorage.localValue1 = bio.yqr.iaf;
        bio.yqr.xhv();
        if (d) {
            d.etp.tvc("adjustment", "#lij", [(bio.yqr.igx === bio.utg.uap) ? 0 : 1]);
            if (bio.yqr.vol[bio.yqr.iaf] === bio.hvg.wms) {
                e = bio.yqr.language.left
            } else {
                if (bio.yqr.vol[bio.yqr.iaf] === bio.hvg.fod) {
                    e = bio.yqr.language.yud
                } else {
                    if (bio.yqr.vol[bio.yqr.iaf] === bio.hvg.dxh) {
                        e = bio.yqr.language.siw
                    }
                }
            }
            d.etp.tvc("adjustment", "#qib", [e])
        }
    };
    this.bic = function () {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.rre = function () {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.ydp = function () {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.hir = function (e, d) {
        this.ywg.etp.tvc("creditd", "#qib", [this.ztt(e), d])
    };
    this.kgv = function (e, d) {
        if (e > 0) {
            this.ywg.etp.tvc("betd", "#qib", [this.ztt(e), d])
        } else {
            this.ywg.etp.tvc("betd", "#qib", ["", d])
        }
    };
    this.xxb = function (e) {
        var d = this.hfo.brx("topi");
        this.aar = e;
        if (d) {
            d.uiu("id", (e > 0) ? e : "")
        }
    };
    this.lgy = function () {
        var e = "",
            d = bio.yqr.hfo.brx("topi");
        if (bio.pql.value49) {
            e += bio.yqr.okc()
        }
        if (bio.pql.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += bio.yqr.jti()
        }
        if (bio.pql.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.uiu("time", e)
        }
    };
    this.jti = function () {
        return this.getTime(new Date().getTime() - this.nwa)
    };
    this.okc = function () {
        var d = new Date();
        return this.hxo(d.getHours()) + ":" + this.hxo(d.getMinutes())
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
        return this.hxo(d) + ":" + this.hxo(f)
    };
    this.hxo = function (d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.vgq = function () {
        if (sessionStorage.sessionValue15 == "true" || bio.pql.value49) {
            if (bio.pql.value49) {
                this.okc()
            }
            this.nwa = (this.lpu > 0) ? this.lpu : new Date().getTime();
            this.lgy();
            this.awe = setInterval(this.lgy, 1000)
        }
    };
    this.ymc = function () {
        clearInterval(this.awe)
    };
    this.xyf = function (d) {
        this.nwa -= d
    };
    this.kup = function (d, f) {
        var e = this.hfo.brx("loading");
        if (e && e.uip == null) {
            if (f && f !== "") {
                e.xeu = f
            } else {
                e.xeu = this.language.error
            }
            e.uip = d;
            e.jvb(this.fcy.erx())
        }
    };
    this.hvy = function () {};
    this.fkv = function () {};
    this.ewi = function () {};
    this.zzc = function () {};
    this.goh = function () {
        var g = false,
            j = this.hfo.brx("topb"),
            f = this.hfo.brx("settings"),
            k = this.hfo.brx("gameb"),
            d = this.hfo.brx("topi");
        this.has = (this.has + 1 == bio.pql.value5.length) ? 0 : this.has + 1;
        sessionStorage.sessionValue1 = bio.pql.value5[this.has];
        this.language = this.ttk(bio.pql.value5[this.has]);
        this.jes();
        if (j && g == false) {
            var e = j.etp.brx("language");
            if (e) {
                e.wbz(this.eig(bio.pql.value5[this.has]));
                g = true
            }
            j.ymf(true)
        }
        if (f && g == false) {
            var e = f.etp.brx("language");
            if (e) {
                e.wbz(this.eig(bio.pql.value5[this.has]));
                g = true
            }
        }
        if (k && g == false) {
            var e = k.etp.brx("language");
            if (e) {
                e.wbz(this.eig(bio.pql.value5[this.has]));
                g = true
            }
        }
        if (g == false) {
            var e = this.ywg.etp.brx("lang");
            if (e) {
                e.ssi = this.eig(bio.pql.value5[this.has])
            }
        }
        if (d) {
            d.lij("language", sessionStorage.sessionValue1)
        }
        this.jvb()
    };
    this.jes = function () {};
    this.ttk = function (d) {
        if (d == bio.language.EN || d == bio.language.US) {
            return new mwg()
        } else {
            if (d == bio.language.ES || d == bio.language.CO || d == bio.language.MX || d == bio.language.CL || d == bio.language.VE) {
                return new byg()
            } else {
                if (d == bio.language.DE || d == bio.language.AT) {
                    return new suo()
                } else {
                    if (d == bio.language.PT || d == bio.language.BR) {
                        return new piw()
                    } else {
                        if (d == bio.language.RU) {
                            return new ajw()
                        } else {
                            if (d == bio.language.EE) {
                                return new sum()
                            } else {
                                if (d == bio.language.TR) {
                                    return new vtw()
                                } else {
                                    if (d == bio.language.CZ) {
                                        return new myb()
                                    } else {
                                        if (d == bio.language.GR) {
                                            return new gik()
                                        } else {
                                            if (d == bio.language.BG) {
                                                return new mkx()
                                            } else {
                                                if (d == bio.language.GE) {
                                                    return new yqt()
                                                } else {
                                                    if (d == bio.language.HU) {
                                                        return new tqy()
                                                    } else {
                                                        if (d == bio.language.RO) {
                                                            return new tiy()
                                                        } else {
                                                            if (d == bio.language.FR) {
                                                                return new dax()
                                                            } else {
                                                                if (d == bio.language.HR) {
                                                                    return new tiu()
                                                                } else {
                                                                    if (d == bio.language.IT) {
                                                                        return new zov()
                                                                    } else {
                                                                        if (d == bio.language.SE) {
                                                                            return new jaw()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.eig = function (d) {
        if (d) {
            return this.fcy.uxh(d)
        }
        return null
    };
    this.ljq = function () {
        this.fcy.glc()
    };
    this.oiy = function () {};
    this.kpi = function (d) {
        this.fcy.msp(d)
    };
    this.esp = function (d) {
        this.fcy.kwc(d)
    };
    this.ayt = function () {
        this.ilx();
        var d = this.hfo.brx("history");
        this.wui = true;
        this.thk = true;
        if (d) {
            d.tzb(true)
        }
        this.xtk(this.upg(this.language.szk))
    };
    this.gud = function () {
        loadGame("hist_" + bio.yqr.rmd.toLowerCase(), bio.pql.value30 + "/" + bio.yqr.rmd.toLowerCase() + "/src/hist_" + bio.yqr.rmd.toLowerCase(), "UTF-8");
        removeGame(bio.yqr.rmd.toLowerCase(), bio.pql.value30 + "/" + bio.yqr.rmd.toLowerCase() + "/src/" + bio.yqr.rmd.toLowerCase())
    };
    this.mbu = function () {
        var d = "./history_" + this.rmd.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.psf = function () {
        var d = null;
        if (bio.yqr.kjo) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            bio.yqr.sxd({
                type: "quit",
                sender: bio.yqr.rmd,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            bio.yqr.ttc();
            if (d !== "(api)") {
         window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(bio.yqr.rmd.toLowerCase(), bio.pql.value30 + "/" + bio.yqr.rmd.toLowerCase() + "/src/" + bio.yqr.rmd.toLowerCase());
            removeGame("hist_" + bio.yqr.rmd.toLowerCase(), bio.pql.value30 + "/" + bio.yqr.rmd.toLowerCase() + "/src/hist_" + bio.yqr.rmd.toLowerCase());
            loadMenu("menu", bio.pql.value1001, "UTF-8", true)
        }
    };
    this.euh = function () {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            bio.yqr.sxd({
                type: "quit",
                sender: bio.yqr.rmd,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            d = decodeURIComponent(sessionStorage.sessionValue5);
            bio.yqr.ttc();
            if (d !== "(api)") {
                 window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(bio.yqr.rmd.toLowerCase(), bio.pql.value30 + "/" + bio.yqr.rmd.toLowerCase() + "/src/" + bio.yqr.rmd.toLowerCase());
            removeGame("hist_" + bio.yqr.rmd.toLowerCase(), bio.pql.value30 + "/" + bio.yqr.rmd.toLowerCase() + "/src/hist_" + bio.yqr.rmd.toLowerCase());
            loadMenu("menu", bio.pql.value1001, "UTF-8", false)
        }
    };
    this.ttc = function () {
        if (!bio.yqr.ipo && bio.pql.value83) {
            sessionStorage.clear()
        }
    };
    this.ebu = function (f) {
        var g = null;
        if (this.bee) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.umd !== bio.una.syl) {
                    if (g.umd === bio.una.ixf || g.umd === bio.una.gfn) {
                        g.Title = this.language.sov;
                        g.Text = (g.umd === bio.una.ixf) ? this.language.glm : this.language.nfq;
                        g.Buttons = [{
                            Text: this.language.stm,
                            Action: "quit"
                        }]
                    } else {
                        if (g.umd === bio.una.ttz) {
                            g.Title = this.language.rzt;
                            g.Text = this.language.bvn + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.rjz;
                                g.Buttons = [{
                                    Text: this.upg(this.language.vfc),
                                    Action: "history"
                                }, {
                                    Text: this.language.stm,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.stm,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.umd === bio.una.nev || g.umd === bio.una.cqa || g.umd === bio.una.pdp) {
                                g.Title = this.zqc;
                                if (g.umd === bio.una.nev) {
                                    g.Text = this.language.umx + " " + this.nuk + " " + this.language.bir + "\n\n" + this.language.lbw
                                } else {
                                    if (g.umd === bio.una.cqa) {
                                        g.Text = this.language.enz + " " + (this.nuk - this.bbe) + " " + this.language.mnn + "\n\n" + this.language.lbw
                                    } else {
                                        if (g.umd === bio.una.pdp) {
                                            g.Text = this.language.vng + ": " + this.bbe + "\n" + this.language.byv + ": " + this.jos(this.qte)
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
                    if (g.umd === bio.una.wro || g.umd === bio.una.deu) {
                        g.Title = this.language.zxr;
                        g.Text = this.language.yxg;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.umd === bio.una.zgh) {
                            g.Title = this.language.zjk;
                            g.Text = this.language.kxs;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.umd === bio.una.roulette.lni || g.umd === bio.una.roulette.rih) {
                                g.Title = this.language.sov;
                                g.Text = (g.umd === bio.una.roulette.lni) ? this.language.xxd : this.language.oqq;
                                g.Buttons = [{
                                    Text: this.language.stm,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.bee.sqt(f)
        }
    };
    this.stop = function () {
        this.ymc();
        this.lpn();
        this.ufu();
        clearTimeout(this.ygp);
        if (!this.ipo) {
            clearInterval(this.alj)
        }
        this.hfo.tvc("autop", "#stop");
        this.hfo.tvc("settings", "#stop");
        this.hfo.tvc("topb", "#stop")
    };
    this.ndk = function () {
        var d = false;
        if (this.avh.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.nnn == "freeplay" && this.voc == "freeplay") {
                d = true
            } else {
                if (this.ufb && (this.ufb == "b71d982ffcbe56eb8cd11fa05963bbee" || this.ufb.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (bio.pql.value68 != null && this.vye.toLowerCase() === bio.pql.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            bio.pql.value21.e = false;
            if (bio.pql.value76) {
                bio.pql.value76.f = false
            }
        }
        return d
    };
    this.urq = function () {
        return (bio.pql.value65 > 0)
    };
    this.byb = function () {
        return (((bio.olq.uyk === bio.os.elk && bio.olq.fzj() === true) || bio.olq.uyk === bio.os.cfd) && this.ipo === false)
    };
    this.qvw = function () {
        return false
    };
    this.jqj = function () {
        if (bio.yqr.urq() && bio.yqr.qvw()) {
            clearTimeout(bio.yqr.jut);
            bio.yqr.jut = setTimeout(bio.yqr.abi, bio.pql.value65)
        }
    };
    this.hel = function () {
        if (bio.yqr.urq() && bio.yqr.jut >= 0) {
            if (bio.yqr.qvw()) {
                clearTimeout(bio.yqr.jut);
                bio.yqr.jut = setTimeout(bio.yqr.abi, bio.pql.value65)
            } else {
                clearTimeout(bio.yqr.jut);
                bio.yqr.jut = -1
            }
        }
    };
    this.lpn = function () {
        if (bio.yqr.urq()) {
            clearTimeout(bio.yqr.jut);
            bio.yqr.jut = -1
        }
    };
    this.vsu = function () {
        return false
    };
    this.swp = function () {
        return false
    };
    this.tdt = function () {
        if (bio.yqr.vsu() && bio.yqr.swp() && bio.yqr.byx < 0) {
            clearTimeout(bio.yqr.byx);
            bio.yqr.byx = setTimeout(bio.yqr.tkg, bio.yqr.faz)
        }
    };
    this.ofg = function () {
        if (bio.yqr.vsu() && bio.yqr.byx >= 0) {
            if (bio.yqr.swp()) {
                clearTimeout(bio.yqr.byx);
                bio.yqr.byx = setTimeout(bio.yqr.tkg, bio.yqr.faz)
            } else {
                clearTimeout(bio.yqr.byx);
                bio.yqr.byx = -1
            }
        }
    };
    this.ufu = function () {
        if (bio.yqr.vsu()) {
            clearTimeout(bio.yqr.byx);
            bio.yqr.byx = -1
        }
    };
    this.tkg = function () {};
    this.anz = function () {};
    this.pnb = function (f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.rqm.replace(/_*/g, ""));
        if (e > d) {
            this.rqm = f
        }
    };
    this.ggg = function (g) {
        var e = (g && !this.ryv),
            f = this.hfo.brx("topb"),
            d = this.hfo.brx("topi");
        if (d) {
            d.wsn(e)
        }
        if (f) {
            f.wsn(e);
            f.qjf(e)
        }
    };
    this.qsq = function (g) {
        var e = (g && !this.ryv),
            f = this.hfo.brx("topb"),
            d = this.hfo.brx("topi");
        if (d) {
            d.wsn(e)
        }
        if (f) {
            f.wsn(e);
            f.ziw(e)
        }
    };
    this.knt = function (g) {
        var e = (g && !this.ryv),
            f = this.hfo.brx("topb"),
            d = this.hfo.brx("topi");
        if (d) {
            d.wsn(e)
        }
        if (f) {
            f.wsn(e);
            f.ikp(e)
        }
    };
    this.uno = function () {
        var d = this.hfo.brx("topb");
        if (d && !d.kgg()) {
            this.fcy.aee("panel_in");
            this.fcy.lgu("panel_in");
            d.sqt()
        }
    };
    this.cge = function (d) {
        var e = this.hfo.brx("topb");
        if (e && e.kgg()) {
            this.fcy.aee("panel_out");
            this.fcy.lgu("panel_out");
            if (d) {
                e.dwp = d
            }
            e.zln()
        }
    };
    this.jos = function (f) {
        if (this.xuj > 0) {
            return (f * this.xuj).toFixed(0).toString()
        } else {
            if (bio.pql.value21.e == false || this.kjo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bio.pql.value21.m != 1) {
                    e = f * bio.pql.value21.m;
                    var g = bio.pql.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bio.pql.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.rsh(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.ztt = function (f) {
        if (this.xuj > 0) {
            var e = (f * this.xuj).toFixed(0).toString();
            if (bio.pql.value21.e == true && bio.pql.value21.m == 1 && bio.pql.value21.s && this.kjo == false) {
                e = bio.pql.value21.s + " " + e
            }
            return e
        } else {
            if (bio.pql.value21.e == false || this.kjo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bio.pql.value21.m != 1) {
                    e = f * bio.pql.value21.m;
                    var g = bio.pql.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bio.pql.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.rsh(e, (d == 0) ? 0 : d + 1);
                if (bio.pql.value21.s) {
                    e = bio.pql.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.rsh = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (bio.pql.value21.cs != null) {
                l = l.replace(/\./, bio.pql.value21.cs)
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
                    if (bio.pql.value21.ts != null) {
                        e += bio.pql.value21.ts
                    }
                }
            }
            if (bio.pql.value21.cs != null) {
                f = f.replace(/\./, bio.pql.value21.cs)
            }
            return e + f
        }
    };
    this.vvg = function (f) {
        if (this.xuj > 0) {
            return (f * this.xuj).toFixed(0).toString()
        } else {
            if (bio.pql.value76.f == false || this.kjo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bio.pql.value76.m != 1) {
                    e = f * bio.pql.value76.m;
                    var g = bio.pql.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bio.pql.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.crw(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.lik = function (f) {
        if (this.xuj > 0) {
            var e = (f * this.xuj).toFixed(0).toString();
            if (bio.pql.value76.f == true && bio.pql.value76.m == 1 && bio.pql.value76.s && this.kjo == false) {
                e = bio.pql.value76.s + " " + e
            }
            return e
        } else {
            if (bio.pql.value76.f == false || this.kjo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bio.pql.value76.m != 1) {
                    e = f * bio.pql.value76.m;
                    var g = bio.pql.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bio.pql.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.crw(e, (d == 0) ? 0 : d + 1);
                if (bio.pql.value76.s) {
                    e = bio.pql.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.crw = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (bio.pql.value76.cs != null) {
                l = l.replace(/\./, bio.pql.value76.cs)
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
                    if (bio.pql.value76.ts != null) {
                        e += bio.pql.value76.ts
                    }
                }
            }
            if (bio.pql.value76.cs != null) {
                f = f.replace(/\./, bio.pql.value76.cs)
            }
            return e + f
        }
    };
    this.upg = function (d) {
        if (d && sessionStorage.sessionValue1 !== bio.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.orm = function () {
        for (var e = 0, d = this.svb.qlj.hqk.length; e < d; e++) {
            this.hfo.roh(this.svb.qlj.hqk[e].llo, this.rxf(this.svb.qlj.hqk[e], this.utg.wdl.cuz[this.svb.qlj.hqk[e].cuz], this.utg.wdl.display, this.style.wdl.xkv[this.svb.qlj.hqk[e].cuz], null), ["jackpots"])
        }
        this.hfo.roh("jwp", this.rxf(null, this.utg.wdl.hit.cuz, this.utg.wdl.hit, this.style.wdl.hit, this.fcy.uxh("jackpot")));
        this.hfo.tvc("jwp", "#tsg", [false]);
        if (this.szg()) {
            this.hfo.roh("mjwp", this.bbp(this.utg.wdl.wht.cuz, this.utg.wdl.wht, this.style.wdl.wht, this.fcy.uxh("mj_bg"), this.fcy.uxh("mj_font"), this.fcy.uxh("mj_label"), [this.fcy.uxh("mj_0"), this.fcy.uxh("mj_1"), this.fcy.uxh("mj_2"), this.fcy.uxh("mj_3"), this.fcy.uxh("mj_4"), this.fcy.uxh("mj_5")]));
            this.hfo.tvc("mjwp", "#tsg", [false])
        }
    };
    this.sut = function () {
        var e = this.hfo.vla("jackpots"),
            f = this.hfo.brx("jwp"),
            j = this.hfo.brx("mjwp");
        for (var g = 0, d = e.length; g < d; g++) {
            e[g].zlp(this.utg.wdl.cuz[this.svb.qlj.hqk[g].cuz]);
            e[g].mey(this.utg.wdl.display)
        }
        if (f) {
            f.zlp(this.utg.wdl.hit.cuz);
            f.mey(this.utg.wdl.hit)
        }
        if (j) {
            j.zlp(this.utg.wdl.wht.cuz);
            j.mey(this.utg.wdl.wht)
        }
    };
    this.rxf = function (f, k, j, g, d) {
        var e = new nlr();
        e.yfy(k, null, this.context2D);
        e.parent = this;
        e.ssi = d;
        e.psg(g);
        e.mey(j);
        if (f) {
            e.gno(f.jsb);
            e.dck(f.value)
        }
        return e
    };
    this.bbp = function (k, j, g, l, m, f, e) {
        var d = new sgj();
        d.yfy(k, null, this.context2D);
        d.parent = this;
        d.crr = l;
        d.cyg = m;
        d.fwx = f;
        d.qzo = e;
        d.psg(g);
        d.mey(j);
        return d
    };
    this.iwq = function (f) {
        if (this.obs() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.hfo.tvc(f[e].llo, "#dck", [f[e].value])
            }
            this.jvb()
        }
    };
    this.vpn = function (d) {
        if (this.obs() === true) {
            this.wdl = {
                llo: d.llo,
                value: d.value,
                cfy: d.cfy
            }
        }
    };
    this.dqs = function () {
        this.wdl = null
    };
    this.sgc = function () {
        return false
    };
    this.szg = function () {
        return false
    };
    this.obs = function () {
        return (!this.ipo && this.svb.qlj.hqk.length > 0 && this.sgc())
    };
    this.fsp = function () {
        return (this.wdl != null)
    };
    this.vup = function () {
        return (bio.pql.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.kjr = function () {
        if (this.uic() && this.hrq()) {
            this.gem()
        }
    };
    this.hrq = function () {
        return false
    };
    this.uic = function () {
        if (this.ipo) {
            return false
        }
        return (this.svb.qlj.iax.length + this.svb.qlj.xmm.length > 0)
    };
    this.gem = function () {
        var g = null,
            e = this.svb.qlj.iax.length,
            d = this.svb.qlj.xmm.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.svb.qlj.iax.splice(f, 1)[0];
                g.umd = bio.una.syl;
                this.pow.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.svb.qlj.xmm.splice(f, 1)[0];
                g.umd = bio.una.syl;
                this.pow.push(g)
            }
            if (this.bee && !this.bee.kgg()) {
                this.mkf()
            }
        }
    };
    this.mkf = function () {
        var d = null;
        if (this.pow.length > 0) {
            d = this.pow.shift();
            this.ebu([d])
        }
    };
    this.bka = function () {
        if (bio.yqr.fzg.length > 0) {
            bio.yqr.ebu(bio.yqr.fzg)
        }
    };
    this.umk = function () {
        this.pow.length = 0
    };
    this.ujv = function () {
        this.fzg.length = 0;
        if (this.ccq) {
            this.ccq.zln()
        }
    };
    this.ckr = function () {
        var f = null,
            d = this.svb.qlj.fzg.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.svb.qlj.fzg.splice(e, 1)[0];
                f.umd = bio.una.syl;
                this.fzg.push(f)
            }
            if (this.ccq) {
                this.ccq.sqt(this.fzg[0].Title, this.fzg[0].Text, this.fzg.length)
            }
        }
    };
    this.eqa = function () {
        var d = false;
        if (this.bee && this.bee.kgg()) {
            d = true
        }
        if (this.ccq && this.ccq.kgg()) {
            d = true
        }
        if (this.vup()) {
            d = true
        }
        if (this.gun) {
            this.gun.style.display = (d) ? "block" : "none"
        }
    };
    this.zla = function () {
        this.ggg(false);
        this.ywg.qjf(false);
        this.ywg.etp.tvc("info", "#ylr");
        this.ebu([{
            umd: bio.una.ttz
        }])
    };
    this.hli = function () {
        bio.yqr.atn = true
    };
    this.hus = function () {
        this.uvh = new eoa().yfy(this, bio.pql.value6)
    };
    this.xnh = function () {
        if (this.uvh) {
            this.uvh.connect(this.rmd, this.nnn, this.voc, this.ufb, this.rqm, true)
        }
    };
    this.ect = function () {
        if (bio.yqr.uvh) {
            bio.yqr.uvh.connect(bio.yqr.rmd, bio.yqr.nnn, bio.yqr.voc, bio.yqr.ufb, bio.yqr.rqm, false)
        }
    };
    this.mfa = function () {};
    this.bzc = function () {};
    this.ndf = function (d) {
        if (!this.ndk() && !this.ipo) {
            clearTimeout(this.ygp);
            if (this.fah()) {
                this.ygp = setTimeout(this.snu, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.ygp = setTimeout(this.hli, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.snu = function () {
        bio.yqr.rco = true
    };
    this.fah = function () {
        return bio.pql.value36 || bio.pql.value37
    }
}

function fqg() {
    this.yfy = function () {
        this.vvk("btn", this.flx);
        this.vvk("gamble_on", this.flx);
        this.vvk("gamble_off", this.flx);
        this.vvk("panel_in", this.flx);
        this.vvk("panel_out", this.flx);
        this.vvk("audioon", this.flx);
        for (var a = 0; a < 12; a++) {
            this.vvk("step" + a, this.flx)
        }
        this.vvk("maxstep", this.flx);
        this.vvk("start", 0.2);
        this.vvk("gambleprop", this.sgu);
        this.vvk("freespinstart", 0.5)
    }
}
fqg.prototype = new uyi;

function kyz() {
    this.bye = {
        dye: 84,
        cxx: -1,
        value: "T",
        mrg: null
    };
    this.ibd = {
        dye: 82,
        cxx: -1,
        value: "R",
        mrg: null
    };
    this.fqj = {
        dye: 80,
        cxx: -1,
        value: "P",
        mrg: null
    };
    this.see = {
        dye: 77,
        cxx: -1,
        value: "M",
        mrg: null
    };
    this.start = {
        dye: 32,
        cxx: -1,
        value: "SPACE",
        mrg: null
    };
    this.ryv = {
        dye: 16,
        cxx: -1,
        value: "SHIFT",
        mrg: null
    };
    this.loc = {
        dye: 38,
        cxx: -1,
        value: "\u25B2",
        mrg: null
    };
    this.odg = {
        dye: 40,
        cxx: -1,
        value: "\u25BC",
        mrg: null
    };
    this.mnw = {
        dye: 39,
        cxx: -1,
        value: "\u25B6",
        mrg: null
    };
    this.fto = {
        dye: 37,
        cxx: -1,
        value: "\u25C0",
        mrg: null
    };
    this.zli = {
        dye: 71,
        cxx: -1,
        value: "G",
        mrg: null
    };
    this.ogm = {
        dye: 27,
        cxx: -1,
        value: "ESC",
        mrg: null
    };
    this.language = {
        dye: 76,
        cxx: -1,
        value: "L",
        mrg: null
    };
    this.luh = {
        dye: 13,
        cxx: -1,
        value: "ENTER",
        mrg: null
    };
    this.ssr = {
        dye: 27,
        cxx: -1,
        value: "ESC",
        mrg: null
    };
    this.fqi = {
        dye: 39,
        cxx: -1,
        value: "\u25B6",
        mrg: null
    };
    this.baq = {
        dye: 37,
        cxx: -1,
        value: "\u25C0",
        mrg: null
    };
    this.ghj = {
        dye: 27,
        cxx: -1,
        value: "ESC",
        mrg: null
    };
    this.zsn = {
        dye: 32,
        cxx: -1,
        value: "SPACE",
        mrg: null
    };
    this.och = {
        dye: 8,
        cxx: -1,
        value: "BACKSPACE",
        mrg: null
    };
    this.ooo = {
        dye: 82,
        cxx: -1,
        value: "R",
        mrg: null
    };
    this.zxb = {
        dye: 66,
        cxx: -1,
        value: "B",
        mrg: null
    };
    this.vof = {
        dye: 72,
        cxx: -1,
        value: "H",
        mrg: null
    };
    this.iec = {
        dye: 68,
        cxx: -1,
        value: "D",
        mrg: null
    };
    this.jub = {
        dye: 83,
        cxx: -1,
        value: "S",
        mrg: null
    };
    this.jiz = {
        dye: 67,
        cxx: -1,
        value: "C",
        mrg: null
    };
    this.cfz.push(this.bye);
    this.cfz.push(this.fqj);
    this.cfz.push(this.start);
    this.cfz.push(this.ryv);
    this.cfz.push(this.loc);
    this.cfz.push(this.odg);
    this.cfz.push(this.mnw);
    this.cfz.push(this.fto);
    this.cfz.push(this.zli);
    this.cfz.push(this.ogm);
    this.cfz.push(this.language)
}
kyz.prototype = new uwl;

function mvq() {
    this.fpn = new Image();
    this.jeq = 0;
    this.rpa = 0;
    this.whe = 0;
    this.yfy = function (c, a, b, d) {
        this.fpn = c;
        this.rpa = b;
        this.jeq = a;
        this.whe = d;
        return this
    }
}

function uoq() {
    this.wey = 0;
    this.ikv = 0;
    this.win = 0;
    this.zrw = "sans-serif";
    this.kfk = "bold";
    this.tas = null;
    this.cxo = null;
    this.hkg = null;
    this.gnv = null;
    this.hum = 16;
    this.crv = 0;
    this.dbk = 0;
    this.oxo = 2;
    this.oii = 3;
    this.fyf = 3;
    this.nof = 3;
    this.fdh = 3;
    this.mey = function (a) {
        try {
            this.hum = a.fontSize;
            this.crv = a.ezb;
            this.dbk = a.eet;
            this.oxo = a.dbr;
            this.oii = a.nlq;
            this.fyf = a.qch;
            this.nof = a.art;
            this.fdh = a.exc
        } catch (b) {
            console.error(b)
        }
    };
    this.psg = function (a) {
        try {
            this.zrw = a.font;
            this.kfk = a.zqm;
            this.tas = a.xmb;
            this.cxo = a.borderColor;
            this.hkg = a.vna;
            this.gnv = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.ful = function (a, c, b, d) {
        this.wey = a;
        this.ikv = c;
        this.win = b;
        if (d && d === true && this.context2D != null && this.kgg() === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.unf = function (a, b) {
        this.win = a;
        if (b && b === true && this.context2D != null && this.kgg() === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.hkg) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.cxo);
            b.addColorStop(1, this.hkg);
            bio.olq.gpz(a, this.x, this.y, this.width, this.height, this.oii, this.fyf, this.nof, this.fdh, this.gnv, 1, b, this.oxo, 1)
        } else {
            bio.olq.gpz(a, this.x, this.y, this.width, this.height, this.oii, this.fyf, this.nof, this.fdh, this.gnv, 1, this.cxo, this.oxo, 1)
        }
        bio.olq.yzj(a, bio.yqr.language.vng + ":", this.tas, this.x + this.oxo + this.crv, this.y + this.dbk, 2 * this.width / 3 - this.oxo, this.height / 2, this.zrw, this.hum, this.kfk, 0);
        bio.olq.yzj(a, bio.yqr.language.byv + ":", this.tas, this.x + this.oxo + this.crv, this.y + this.height / 2 + this.dbk, 2 * this.width / 3 - this.oxo, this.height / 2, this.zrw, this.hum, this.kfk, 0);
        bio.olq.idi(a, this.ikv + "/" + this.wey, this.tas, this.x + this.oxo + 2 * this.width / 3, this.y + this.dbk, this.width / 3 - this.oxo - this.crv, this.height / 2, this.zrw, this.hum, this.kfk, 0);
        bio.olq.idi(a, this.win, this.tas, this.x + this.oxo + 2 * this.width / 3, this.y + this.height / 2 + this.dbk, this.width / 3 - this.oxo - this.crv, this.height / 2, this.zrw, this.hum, this.kfk, 0);
        a.restore();
        if (this.lhh && this.ien) {
            this.lhh.drawImage(this.ien, this.x, this.y)
        }
    }
}
uoq.prototype = new idn;

function apc() {
    var a = this;
    this.wnz = false;
    this.etp = null;
    this.otl = false;
    this.xdy = -1;
    this.dwx = 0;
    this.chj = null;
    this.cup = 800;
    this.iie = 0;
    this.gnv = null;
    this.kqn = null;
    this.zoh = null;
    this.cym = 0;
    this.mgo = null;
    this.pls = null;
    this.uvf = null;
    this.ifm = null;
    this.elh = 0;
    this.ddk = 0;
    this.wbb = new bku();
    this.luv = new bku();
    this.hvm = 30;
    this.yfy = function (b, d, c) {
        apc.prototype.yfy.call(this, b, d, c);
        this.nrf()
    };
    this.hdv = function (c, b) {
        try {
            this.hvm = c.uvj;
            this.wbb = c.upy;
            this.luv = c.uyn;
            this.uau(c);
            this.izp(c);
            this.epi(c);
            this.gdt(c);
            this.ffd(c);
            this.psg(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.mey = function (g, r) {
        try {
            var d = {},
                c = this.etp.brx("info"),
                k = this.etp.brx("win"),
                s = this.etp.brx("creditd"),
                o = this.etp.brx("betd"),
                p = this.etp.brx("betpopup"),
                n = this.etp.brx("idd"),
                q = this.etp.brx("timed"),
                b = this.etp.brx("freeround"),
                m = this.etp.vla("buttons");
            if (this.parent.dfx() || (this.parent.ipo && this.parent.aib)) {
                if ((this.parent.ndn() == null || this.parent.ndn().o == false) && this.parent.style.yqr.zsq == true) {
                    d = g.jkm
                } else {
                    d = g.ocj
                }
            } else {
                if (r) {
                    if (this.parent.ndn() != null) {
                        d = g.yyr
                    } else {
                        d = g.exw
                    }
                } else {
                    if (this.parent.ndn() != null) {
                        if (!this.parent.inz()) {
                            d = g.oay
                        } else {
                            d = g.epz
                        }
                    } else {
                        if (bio.pql.value57 === bio.ui.azw || this.ykm()) {
                            if (!this.parent.inz()) {
                                d = g.zbk
                            } else {
                                d = g.acq
                            }
                        } else {
                            if (bio.pql.value57 === bio.ui.xod) {
                                if (!this.parent.inz()) {
                                    d = g.fbz
                                } else {
                                    d = g.jqv
                                }
                            } else {
                                if (bio.pql.value57 === bio.ui.ygc) {
                                    if (!this.parent.inz()) {
                                        d = g.ygh
                                    } else {
                                        d = g.iqv
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.hvm = g.uvj;
            this.wbb = g.upy;
            this.luv = g.uyn;
            if (s) {
                s.mey(g.display);
                s.zlp(g.owf)
            }
            if (o) {
                o.mey(g.display);
                o.zlp(g.vtf)
            }
            if (p) {
                p.mey(g.yzm);
                p.zlp(g.gzr)
            }
            if (n) {
                n.mey(g.hff);
                n.zlp(g.zcd)
            }
            if (q) {
                q.mey(g.hff);
                q.zlp(g.css)
            }
            if (c) {
                c.mey(g.zjk);
                c.zlp(g.zjk.cuz)
            }
            if (k) {
                k.mey(g.win);
                k.zlp(g.win.cuz)
            }
            if (b) {
                b.mey(g.jaf);
                b.zlp(g.jaf.cuz)
            }
            for (var f = 0, j = m.length; f < j; f++) {
                if (m[f] instanceof rqz) {
                    m[f].mey(g.gnl)
                }
            }
            if (this.parent.ndn() != null) {
                if (this.parent.dfx() === true) {
                    if (this.parent.ndn().o === true || this.parent.style.yqr.zsq == false) {
                        this.etp.tvc("start", "#mey", [g.psy])
                    } else {
                        this.etp.tvc("start", "#mey", [g.jxm])
                    }
                } else {
                    this.etp.tvc("start", "#mey", [g.jxm]);
                    this.etp.tvc("astart", "#mey", [g.psy])
                }
            } else {
                this.etp.tvc("start", "#mey", [g.jxm]);
                if (this.parent.dfx() === true) {} else {
                    if (bio.pql.value57 === bio.ui.azw || this.ykm()) {
                        this.etp.tvc("astart", "#mey", [g.jxm])
                    }
                }
            }
            if (r) {
                this.etp.tvc("start", "#zlp", [d.zeq]);
                this.etp.tvc("astart", "#zlp", [d.yap]);
                this.etp.tvc("setting", "#zlp", [d.oku])
            } else {
                this.etp.tvc("start", "#zlp", [d.zeq]);
                this.etp.tvc("astart", "#zlp", [d.yap]);
                this.etp.tvc("bet", "#zlp", [d.krz]);
                this.etp.tvc("gamble", "#zlp", [d.isd]);
                this.etp.tvc("exit", "#zlp", [d.mpn]);
                this.etp.tvc("help", "#zlp", [d.mpn]);
                this.etp.tvc("lang", "#zlp", [d.dwk]);
                this.etp.tvc("line", "#zlp", [d.qin]);
                this.etp.tvc("setting", "#zlp", [d.oku])
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.psg = function (b, r) {
        try {
            var d = this.etp.brx("info"),
                l = this.etp.brx("win"),
                p = this.etp.brx("betpopup"),
                c = this.etp.brx("freeround"),
                j = this.etp.vla("displays"),
                o = this.etp.brx("idd"),
                q = this.etp.brx("timed"),
                n = this.etp.vla("buttons"),
                g = (r === true) ? b.obp : b.gjm;
            this.gnv = g.backgroundColor;
            this.kqn = g.fss;
            this.zoh = g.npf;
            this.cym = g.nlx;
            this.pls = g.pnr;
            this.uvf = g.lyp;
            if (d) {
                d.psg(g.zjk)
            }
            if (l) {
                l.psg(g.win)
            }
            if (c) {
                c.psg(b.jaf)
            }
            for (var f = 0, k = n.length; f < k; f++) {
                n[f].psg((this.parent.utg.csj === false) ? g.bsl : (this.parent.igx === bio.utg.uap) ? g.ebl : g.ozm)
            }
            for (var f = 0, k = j.length; f < k; f++) {
                j[f].psg(b.display)
            }
            if (p) {
                p.psg(b.yzm)
            }
            if (o) {
                o.psg(b.hff)
            }
            if (q) {
                q.psg(b.hff)
            }
            if (this.parent.dfx() === true) {
                this.etp.tvc("bet", "#psg", [b.qcz])
            }
        } catch (m) {
            console.error(m)
        }
    };
    this.fpy = function (t, s, u) {
        var r = this.etp.vla("buttons"),
            g = this.etp.brx("line"),
            k = this.etp.brx("bet"),
            c = this.etp.brx("start"),
            p = this.etp.brx("betd"),
            f = this.etp.brx("creditd"),
            b = this.parent.hfo.brx("betsel"),
            e = this.parent.hfo.brx("linesel"),
            o = t - this.x,
            m = s - this.y;
        for (var n = 0, q = r.length; n < q; n++) {
            var d = r[n];
            if (o >= d.x && o <= d.x + d.width && m >= d.y && m <= d.y + d.height && d.kgg() == true) {
                if (d.hon() && !d.sjx()) {
                    if (!this.parent.dfx() && (d === k || d === g)) {
                        d.ars(true, true, false);
                        for (var l = 0; l < q; l++) {
                            r[l].ntl(true, false)
                        }
                        d.npx();
                        this.chj = function () {
                            if (d.npx() === true) {
                                clearInterval(a.dwx);
                                d.ars(false, true);
                                for (var v = 0; v < q; v++) {
                                    r[v].ntl(false)
                                }
                            }
                        };
                        this.dwx = setInterval(this.chj, d.btc)
                    } else {
                        if (d === c && c.npx === this.fbo) {
                            d.ars(true, true, false)
                        } else {
                            d.ars(true, true)
                        }
                        d.npx();
                        for (var l = 0; l < q; l++) {
                            r[l].ntl(true)
                        }
                    }
                    return true
                }
            }
        }
        if (k && k.hon() && !k.sjx() && k.kgg()) {
            if (p && o >= p.x && o <= p.x + p.width && m >= p.y && m <= p.y + p.height) {
                if (!u) {
                    if ((b && b.hon()) && ((e && e.hon()) || !e)) {
                        this.parent.pqr()
                    }
                    return true
                }
            } else {
                if (f && o >= f.x && o <= f.x + f.width && m >= f.y && m <= f.y + f.height) {
                    if (!u) {
                        this.parent.fza()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.gnx = function () {
        var f = this.etp.vla("buttons"),
            k = this.etp.brx("bet"),
            l = this.etp.brx("line"),
            g = this.etp.brx("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.ogk() === true) {
                d.ars(false, true);
                if (bio.pql.value82 && d == g) {
                    for (var c = 0; c < b; c++) {
                        f[c].ntl(false)
                    }
                }
                if (d === k || d === l) {
                    clearInterval(this.dwx);
                    for (var c = 0; c < b; c++) {
                        f[c].ntl(false)
                    }
                } else {
                    if (d === g && g.npx === this.fbo) {
                        clearTimeout(this.iie);
                        if (this.parent.ryv === false) {
                            this.etp.tvc("start", "#pco")
                        }
                    }
                }
                return true
            }
        }
        return false
    };
    this.ivn = function (c) {
        var m = this.etp.vla("buttons"),
            f = this.etp.brx("bet"),
            e = this.etp.brx("line"),
            b = this.etp.brx("start");
        for (var k = 0, l = m.length; k < l; k++) {
            var d = m[k];
            if (c == d.ohs) {
                if (d.hon() && !d.sjx() && d.kgg()) {
                    if (bio.pql.value82 && d == b) {
                        d.ars(true, true, false);
                        for (var g = 0; g < l; g++) {
                            m[g].ntl(true, false)
                        }
                    } else {
                        d.ars(true, true);
                        d.npx();
                        for (var g = 0; g < l; g++) {
                            m[g].ntl(true)
                        }
                    }
                }
                return true
            }
        }
        if (c == this.parent.lyz.odg.dye) {
            if (f && f.hon() && !f.sjx() && f.kgg()) {
                this.parent.edz();
                for (var g = 0, l = m.length; g < l; g++) {
                    m[g].ntl(true)
                }
            }
            return true
        } else {
            if (c == this.parent.lyz.fto.dye) {
                if (e && e.hon() && !e.sjx() && e.kgg()) {
                    this.parent.dji();
                    for (var g = 0, l = m.length; g < l; g++) {
                        m[g].ntl(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.kif = function (g) {
        var f = this.etp.vla("buttons"),
            k = this.etp.brx("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.ogk() == true && g == d.ohs) {
                if (bio.pql.value82 && d == k) {
                    d.npx();
                    for (var c = 0; c < b; c++) {
                        f[c].ntl(false)
                    }
                }
                d.ars(false, true);
                return true
            }
        }
        return false
    };
    this.nkg = function (n, m, o) {
        var l = this.etp.vla("buttons"),
            e = this.etp.brx("bet"),
            d = this.etp.brx("line"),
            b = this.etp.brx("start"),
            p = this.etp.brx("astart");
        if (n != null && m != null) {
            var j = n - this.x;
            var f = m - this.y;
            for (var g = 0, k = l.length; g < k; g++) {
                var c = l[g];
                if (j >= c.x && j <= c.x + c.width && f >= c.y && f <= c.y + c.height && c.kgg() && c.hon() && !c.sjx()) {
                    return c.npx
                }
            }
        } else {
            if (o != null) {
                for (var g = 0, k = l.length; g < k; g++) {
                    var c = l[g];
                    if (o == c.ohs && c.kgg() && c.hon() && !c.sjx()) {
                        if (c == b || c == p) {
                            return null
                        }
                        return c.npx
                    }
                }
                if (o == this.parent.lyz.odg.dye && e && e.kgg() && e.hon() && !e.sjx()) {
                    return this.parent.edz
                } else {
                    if (o == this.parent.lyz.fto.dye && d && d.kgg() && d.hon() && !d.sjx()) {
                        return this.parent.dji
                    }
                }
            }
        }
        return null
    };
    this.nrf = function () {
        this.etp = new hcn();
        this.etp.yfy();
        this.etp.mnm("displays");
        this.etp.mnm("buttons");
        this.etp.mnm("allbuttons");
        this.etp.mnm("infos");
        this.etp.mnm("start");
        this.etp.mnm("auto");
        this.etp.mnm("collect");
        this.etp.mnm("freespin");
        this.etp.mnm("game");
        this.etp.mnm("settings")
    };
    this.ffd = function (b) {
        var c = this.wzk(b.zjk.cuz);
        c.mey(b.zjk);
        this.etp.roh("info", c, ["infos"])
    };
    this.gdt = function (b) {
        var c = this.wzk(b.win.cuz);
        c.font = this.parent.gcq;
        c.ssi = this.parent.fcy.uxh("s_symb");
        c.buj = this.parent.fcy.uxh("s_symb").height / this.parent.she.length;
        c.mey(b.win);
        this.etp.roh("win", c, ["infos"])
    };
    this.epi = function (b) {
        var c = new uoq();
        c.yfy(b.jaf.cuz, this.context2D, null);
        c.parent = this;
        c.mey(b.jaf);
        c.tsg(false);
        this.etp.roh("freeround", c)
    };
    this.izp = function (c) {
        var b = {};
        if (this.parent.dfx() || (this.parent.ipo && this.parent.aib)) {
            if ((this.parent.ndn() == null || this.parent.ndn().o == false) && this.parent.style.yqr.zsq == true) {
                b = c.jkm
            } else {
                b = c.ocj
            }
        } else {
            if (this.parent.ndn() != null) {
                if (!this.parent.inz()) {
                    b = c.oay
                } else {
                    b = c.epz
                }
            } else {
                if (bio.pql.value57 === bio.ui.azw || this.ykm()) {
                    if (!this.parent.inz()) {
                        b = c.zbk
                    } else {
                        b = c.acq
                    }
                } else {
                    if (bio.pql.value57 === bio.ui.xod) {
                        if (!this.parent.inz()) {
                            b = c.fbz
                        } else {
                            b = c.jqv
                        }
                    } else {
                        if (bio.pql.value57 === bio.ui.ygc) {
                            if (!this.parent.inz()) {
                                b = c.ygh
                            } else {
                                b = c.iqv
                            }
                        }
                    }
                }
            }
        }
        if (this.parent.ndn() != null) {
            if (this.parent.dfx() === true) {
                if (this.parent.ndn().o == true || this.parent.style.yqr.zsq == false) {
                    this.etp.roh("start", this.crm(b.zeq, (this.parent.utg.jps === false) ? this.parent.language.start : null, (this.parent.utg.jps === false) ? "---" : "A", (this.parent.utg.jps === false) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_sp"), null, this.fbo, (!this.parent.ipo) ? this.parent.lyz.start : null, c.psy), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                } else {
                    this.etp.roh("start", this.aky(b.zeq, (this.parent.utg.jps === false) ? this.parent.language.start : null, (this.parent.utg.jps === false) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_sp"), (this.parent.utg.jps === false) ? null : this.parent.fcy.uxh("btn_sph"), this.parent.irl, null, c.jxm), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.etp.roh("astart", this.crm(b.yap, null, (this.parent.utg.jps === false) ? "---" : "A", this.parent.fcy.uxh("btn_astl"), null, this.parent.ift, null, c.gnl), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                }
            } else {
                this.etp.roh("start", this.aky(b.zeq, (this.parent.utg.jps === false) ? this.parent.language.start : null, (this.parent.utg.jps === false) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_sp"), null, this.parent.irl, (!this.parent.ipo) ? this.parent.lyz.start : null, c.jxm), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.etp.roh("astart", this.crm(b.yap, this.parent.language.dzi, (this.parent.utg.jps === false) ? "---" : "A", this.parent.fcy.uxh("btn"), null, this.parent.ift, (!this.parent.ipo) ? this.parent.lyz.ryv : null, c.psy), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        } else {
            if (this.parent.dfx() === true) {
                if (this.parent.style.yqr.zsq) {
                    this.etp.roh("start", this.aky(b.zeq, (this.parent.utg.jps === false) ? this.parent.language.start : null, (this.parent.utg.jps === false) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_sp"), (this.parent.utg.jps === false) ? null : this.parent.fcy.uxh("btn_sph"), this.parent.irl, null, c.jxm), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.etp.roh("astart", this.aky(b.yap, null, this.parent.fcy.uxh("btn_ast"), null, this.parent.ift, null, c.gnl), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                } else {
                    this.etp.roh("start", this.aky(b.zeq, (this.parent.utg.jps === false) ? this.parent.language.start : null, (this.parent.utg.jps === false) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_asp"), (this.parent.utg.jps === false) ? null : this.parent.fcy.uxh("btn_asph"), this.fbo, null, c.jxm), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                }
            } else {
                this.etp.roh("start", this.aky(b.zeq, (this.parent.utg.jps === false) ? this.parent.language.start : null, (this.parent.utg.jps === false) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_asp"), (this.parent.utg.jps === false) ? null : this.parent.fcy.uxh("btn_asph"), this.parent.irl, (!this.parent.ipo) ? this.parent.lyz.start : null, c.jxm), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.etp.roh("astart", this.aky(b.yap, this.parent.language.ryv, (bio.pql.value57 === bio.ui.azw || this.ykm()) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_s"), null, this.parent.ift, (!this.parent.ipo) ? this.parent.lyz.ryv : null, c.gnl), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        }
        if (this.parent.dfx() === true) {
            this.etp.roh("bet", this.ecy(b.krz, "+", null, this.parent.lnl, (!this.parent.ipo) ? this.parent.lyz.loc : null, c.euc), ["buttons", "allbuttons"])
        } else {
            this.etp.roh("bet", this.aky(b.krz, this.parent.language.oml, this.parent.fcy.uxh("btn_s"), null, this.parent.lnl, (!this.parent.ipo) ? this.parent.lyz.loc : null, c.gnl), ["buttons", "allbuttons"])
        }
        this.etp.brx("bet").btc = 300;
        this.etp.roh("gamble", this.aky(b.isd, this.parent.language.zli, this.parent.fcy.uxh("btn_s"), null, this.parent.fhl, (!this.parent.ipo) ? this.parent.lyz.zli : null, c.gnl), ["buttons", "allbuttons", "game", "auto", "collect"]);
        if (this.parent.ndn() != null) {
            if (sessionStorage.sessionValue5 != null) {
                this.etp.roh("exit", this.aky(b.mpn, (this.parent.utg.jps === true) ? null : (bio.pql.value50.g === true) ? this.parent.language.stm : this.parent.language.hin, (this.parent.utg.jps === false) ? this.parent.fcy.uxh("btn_s") : this.parent.fcy.uxh("btn_e"), null, this.parent.abi, (!this.parent.ipo) ? this.parent.lyz.ogm : null, c.gnl), ["buttons", "allbuttons", "collect"])
            } else {
                if (this.parent.dfx() === false) {
                    this.etp.roh("help", this.aky(b.mpn, (this.parent.utg.jps === true) ? null : this.parent.language.cth, this.parent.fcy.uxh("btn_s"), null, this.parent.twa, (!this.parent.ipo) ? this.parent.lyz.fqj : null, c.gnl), ["buttons", "allbuttons"])
                }
            }
        } else {
            if (bio.pql.value57 !== bio.ui.ygc) {
                if (sessionStorage.sessionValue5 != null) {
                    this.etp.roh("exit", this.aky(b.mpn, (this.parent.utg.jps === true) ? null : (bio.pql.value50.g === true) ? this.parent.language.stm : this.parent.language.hin, (this.parent.utg.jps === false) ? this.parent.fcy.uxh("btn_s") : this.parent.fcy.uxh("btn_e"), null, this.parent.abi, (!this.parent.ipo) ? this.parent.lyz.ogm : null, c.gnl), ["buttons", "allbuttons", "collect"])
                } else {
                    if (this.parent.dfx() === false) {
                        this.etp.roh("help", this.aky(b.mpn, (this.parent.utg.jps === true) ? null : this.parent.language.cth, this.parent.fcy.uxh("btn_s"), null, this.parent.twa, (!this.parent.ipo) ? this.parent.lyz.fqj : null, c.gnl), ["buttons", "allbuttons"])
                    }
                }
            }
            if (bio.pql.value57 !== bio.ui.azw && !this.ykm() && this.parent.ndn() == null) {
                this.etp.roh("lang", this.kgb(b.dwk, this.parent.eig(sessionStorage.sessionValue1), this.parent.rtk, (!this.parent.ipo) ? this.parent.lyz.language : null), ["buttons", "allbuttons"])
            }
        }
        if (this.parent.inz()) {
            this.etp.roh("line", this.aky(b.qin, this.parent.language.hio, this.parent.fcy.uxh("btn_s"), null, this.parent.zwk, (!this.parent.ipo) ? this.parent.lyz.mnw : null, c.gnl), ["buttons", "allbuttons"]);
            this.etp.brx("line").btc = 300
        }
        this.etp.roh("setting", this.aky(b.oku, null, this.parent.fcy.uxh("btn_m"), null, this.parent.vrg, null, c.gnl), ["buttons", "settings"])
    };
    this.uau = function (c) {
        var b = null;
        if (!(this.parent.ipo && this.parent.aib) && this.parent.style.yqr.kxc === false) {
            b = this.parent.fcy.uxh("display_effect")
        }
        if (this.parent.dfx() === true) {
            this.etp.roh("betpopup", this.bzk(c.gzr, "", "", null, c.yzm), ["displays"]);
            this.etp.tvc("betpopup", "#tsg", [false])
        }
        this.etp.roh("creditd", this.bzk(c.owf, (this.parent.ndk()) ? this.parent.language.mbn : this.parent.language.cfy, this.parent.ztt(this.parent.cfy), b, c.display), ["displays"]);
        this.etp.roh("betd", this.bzk(c.vtf, this.parent.language.oml, this.parent.ztt(this.parent.totalBet), b, c.display), ["displays"]);
        this.etp.roh("idd", this.bzk(c.zcd, null, (this.parent.ndk() === true) ? this.parent.language.mbn : " " + ((this.parent.aar > 0) ? this.parent.aar : ""), null, c.hff), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || bio.pql.value49) {
            this.etp.roh("timed", this.bzk(c.css, null, "", null, c.hff), ["displays"])
        }
    };
    this.ljt = function () {
        if (this.xdy == 1) {
            this.qjf(this.otl)
        } else {
            if (this.xdy == 2) {
                this.edx(this.otl)
            } else {
                if (this.xdy == 3) {
                    this.puo(this.otl)
                } else {
                    if (this.xdy == 4) {
                        this.pmy(this.otl)
                    } else {
                        if (this.xdy == 5) {
                            this.uld(this.otl)
                        } else {
                            if (this.xdy == 6) {
                                this.ikp(this.otl)
                            } else {
                                if (this.xdy == 7) {
                                    this.jsp(this.otl)
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.qjf = function (d) {
        var c = this.etp.vla("allbuttons"),
            e = 0,
            b = 0;
        this.otl = d;
        this.xdy = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].wsn(d)
        }
    };
    this.edx = function (d) {
        var c = this.etp.vla("allbuttons"),
            f = this.etp.vla("start"),
            e = 0,
            b = 0;
        this.otl = d;
        this.xdy = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].wsn(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].wsn(d)
        }
    };
    this.puo = function (d) {
        var c = this.etp.vla("allbuttons"),
            f = this.etp.vla("game"),
            e = 0,
            b = 0;
        this.otl = d;
        this.xdy = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].wsn(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].wsn(d)
        }
    };
    this.pmy = function (d) {
        var c = this.etp.vla("allbuttons"),
            f = (this.wnz === true) ? this.etp.vla("collect") : this.etp.vla("game"),
            e = 0,
            b = 0;
        this.otl = d;
        this.xdy = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].wsn(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].wsn(d)
        }
    };
    this.jsp = function (d) {
        var b = this.etp.vla("allbuttons"),
            c = this.etp.vla("auto");
        i = 0, twi = 0;
        this.otl = d;
        this.xdy = 7;
        for (i = 0, twi = b.length; i < twi; i++) {
            b[i].wsn(false)
        }
        for (i = 0, twi = c.length; i < twi; i++) {
            c[i].wsn(d)
        }
    };
    this.uld = function (c) {
        var b = this.etp.vla("allbuttons"),
            d = this.etp.vla("freespin");
        i = 0, twi = 0;
        this.otl = c;
        this.xdy = 5;
        for (i = 0, twi = b.length; i < twi; i++) {
            b[i].wsn(false)
        }
        for (i = 0, twi = d.length; i < twi; i++) {
            d[i].wsn(c)
        }
    };
    this.ikp = function (e) {
        var c = this.etp.vla("allbuttons"),
            d = this.etp.vla("settings"),
            f = 0,
            b = 0;
        this.otl = e;
        this.xdy = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].wsn(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].wsn(e)
        }
    };
    this.bzk = function (c, g, f, e, b) {
        var d = new wxm();
        d.yfy(c, this.context2D, null, g, f);
        d.parent = this;
        d.ssi = e;
        d.mey(b);
        return d
    };
    this.aky = function (f, k, j, b, g, d, e) {
        var c = new rqz();
        c.yfy(f, this.context2D, null, j, b, k);
        c.parent = this;
        c.npx = g;
        c.mey(e);
        if (d) {
            c.ohs = d.dye
        }
        return c
    };
    this.crm = function (f, k, g, b, l, c, j, e) {
        var d = new rqz();
        d.yfy(f, this.context2D, null, b, l, k);
        d.parent = this;
        d.npx = c;
        d.value = g;
        d.mey(e);
        if (j) {
            d.ohs = j.dye
        }
        return d
    };
    this.ecy = function (e, j, g, f, c, d) {
        var b = new puk();
        b.yfy(e, this.context2D, null, g, j);
        b.parent = this;
        b.npx = f;
        b.mey(d);
        if (c) {
            b.ohs = c.dye
        }
        return b
    };
    this.kgb = function (d, f, e, c) {
        var b = new fhf();
        b.yfy(d, this.context2D, null, f, null);
        b.parent = this;
        b.npx = e;
        if (c) {
            b.ohs = c.dye
        }
        return b
    };
    this.wzk = function (b) {
        var c = new avc();
        c.yfy(b, this.context2D);
        c.parent = this;
        return c
    };
    this.ykm = function () {
        return (this.parent.nuk > 0 && this.parent.bbe < this.parent.nuk)
    };
    this.ecx = function (c, b) {
        var d = this.etp.brx("info");
        if (d) {
            d.pct(b);
            d.owb(c, b)
        }
    };
    this.stop = function () {
        clearInterval(this.dwx)
    };
    this.dwv = function (b, c, d) {
        this.ifm = b;
        this.elh = c;
        this.ddk = d
    };
    this.jvb = function (m, j, n, f) {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var c = (m != null && j != null && n != null && f != null),
            k = (c === true) ? new bku(m, j, n, f) : new bku(this.x, this.y, this.width, this.height),
            o = this.context2D,
            b = this.etp.tmn();
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
        if (this.ifm != null) {
            if (this.parent.igx === bio.utg.xvb) {
                o.drawImage(this.ifm, this.x + this.wbb.x + this.elh, this.y + this.wbb.y + this.ddk, this.wbb.width, this.ifm.height - (this.y + this.wbb.y + this.ddk), this.wbb.x, this.wbb.y, this.wbb.width, this.wbb.height)
            } else {
                o.drawImage(this.ifm, this.x + this.wbb.x + this.elh, this.y + this.wbb.y + this.ddk, this.wbb.width, this.wbb.height, this.wbb.x, this.wbb.y, this.wbb.width, this.wbb.height)
            }
            if (this.luv && this.luv.width > 0 && this.luv.height > 0) {
                o.drawImage(this.ifm, this.x + this.luv.x + this.elh, this.y + this.luv.y + this.ddk, this.luv.width, this.luv.height, this.luv.x, this.luv.y, this.luv.width, this.luv.height)
            }
        }
        if (this.luv && this.luv.width > 0 && this.luv.height > 0 && this.parent.utg.csj === false) {
            var l = o.createLinearGradient(this.luv.x, this.luv.y, this.luv.x + this.luv.width, this.luv.y),
                e = this.parent.fcy.uxh("btn_back");
            l.addColorStop(0.2, this.pls);
            l.addColorStop(1, this.uvf);
            o.fillStyle = l;
            if (this.parent.igx === bio.utg.uap) {
                o.fillRect(this.luv.x, this.luv.y, this.luv.width, this.luv.height);
                if (e) {
                    o.drawImage(e, this.luv.x, this.luv.y, this.luv.width, this.luv.height)
                }
            } else {
                if (this.parent.igx === bio.utg.lea) {
                    o.save();
                    o.translate(this.luv.width / 2, this.luv.height / 2);
                    o.rotate(Math.PI);
                    o.translate(-this.luv.width / 2, -this.luv.height / 2);
                    o.fillRect(this.luv.x, this.luv.y, this.luv.width, this.luv.height);
                    if (e) {
                        o.drawImage(e, this.luv.x, this.luv.y, this.luv.width, this.luv.height)
                    }
                    o.restore()
                }
            }
        }
        for (var d = 0, g = b.length; d < g; d++) {
            b[d].jvb()
        }
        if (this.parent.twj === true && !(this.parent.dfx() === true && this.parent.utg.csj === false)) {
            this.parent.zvo(o, k)
        }
        o.restore();
        if (this.lhh && this.ien) {
            if (c) {
                this.lhh.drawImage(this.ien, m, j, n, f, this.x + m, this.y + j, n, f)
            } else {
                this.lhh.drawImage(this.ien, this.x, this.y)
            }
        }
    };
    this.fbo = function () {
        if (a.parent.ryv === true) {
            a.nib()
        } else {
            a.parent.irl();
            if (a.parent.vqe() === true) {
                a.etp.tvc("start", "#vmc", [a.cup]);
                a.iie = setTimeout(a.nib, a.cup)
            }
        }
    };
    this.nib = function () {
        a.parent.ift();
        if (a.parent.ryv === true) {
            a.etp.tvc("start", "#hct")
        } else {
            a.etp.tvc("start", "#pco")
        }
    }
}
apc.prototype = new idn;

function pmg(e, b, a, c, d) {
    this.cuz = {
        x: e.x || 0,
        y: e.y || 0
    };
    this.fpn = b;
    this.mtj = 0;
    this.whe = 21;
    this.yqi = a;
    this.cdn = c || 0;
    this.hmb = d || 0;
    this.uxl = 100;
    this.mam = 96;
    this.vuc = function () {
        if (this.mtj < this.whe) {
            this.mtj++
        }
        return (this.mtj >= this.whe)
    };
    this.jvb = function () {
        a.drawImage(this.fpn, this.mtj * this.uxl, 0, this.uxl, this.mam, this.cuz.x, this.cuz.y, this.cdn, this.hmb)
    }
}

function rcw() {
    this.wso = false;
    this.pjy = false;
    this.qgn = false;
    this.uez = [];
    this.vln = [];
    this.usx = [];
    this.quf = [];
    this.abm = [];
    this.jzu = 89;
    this.gut = 400;
    this.fvz = 3;
    this.font = "arial";
    this.zqm = "bold";
    this.kyu = true;
    this.vwq = true;
    this.yhd = null;
    this.qcx = false;
    this.bci = [];
    this.fhw = 0;
    this.xnm = false;
    this.lke = false;
    this.isj = 0;
    this.pyo = 0;
    this.gtf = false;
    this.iuh = true;
    this.xow = false;
    this.ybw = false;
    this.bbb = 0;
    this.jlr = 0;
    this.erl = [];
    this.oew = false;
    this.axt = 0;
    this.ncs = 0;
    this.iwe = 0;
    this.twt = -1;
    this.cki = 0;
    this.juk = 0;
    this.udm = true;
    this.wmo = null;
    this.elf = [];
    this.kcy = [];
    this.jay = null;
    this.quv = null;
    this.otw = 0;
    this.asd = null;
    this.twv = null;
    this.sos = null;
    this.iwn = null;
    this.muj = 0.05;
    this.meb = 4;
    this.tkv = 5;
    this.oxo = 1;
    this.igl = 0;
    this.nkm = 0;
    this.hum = 40;
    this.rky = 12;
    this.hjt = 5;
    this.dza = 0;
    this.fab = 100;
    this.ahg = 96;
    this.ifm = null;
    this.elh = 0;
    this.ddk = 0;
    this.xpc = 0;
    this.wuv = new bku();
    this.tyz = [];
    this.cdy = 3;
    this.ajp = 6;
    this.lth = 0;
    this.qje = new bku(0, 0, 920, 160);
    this.acd = [0, 515, 405];
    this.okr = 40;
    this.fck = new bku(0, 165, 920, 160);
    this.wls = [0, 330, 420];
    this.ayj = 40;
    this.gsk = new bku(0, 330, 920, 160);
    this.kug = [0, 440, 415];
    this.oix = 20;
    this.qre = function () {};
    this.xew = function () {};
    this.kos = function () {};
    this.yrf = function () {};
    this.ypl = function () {};
    this.zfi = function () {};
    this.mey = function (a) {
        try {
            this.meb = a.lineWidth;
            this.tkv = a.fqs;
            this.oxo = a.dbr;
            this.igl = a.mzi;
            this.nkm = a.buj;
            this.hum = a.fontSize;
            this.rky = a.unt;
            this.hjt = a.zbc;
            this.fab = a.ghf;
            this.ahg = a.xui
        } catch (b) {
            console.error(b)
        }
    };
    this.psg = function (a) {
        try {
            this.kcy = a.ruo;
            this.otw = a.wsa;
            this.asd = a.uja;
            this.twv = a.hay;
            this.sos = a.anq;
            this.iwn = a.yxb;
            this.muj = a.pat
        } catch (b) {
            console.error(b)
        }
    };
    this.sqt = function () {
        this.qgn = false;
        this.tsg(true)
    };
    this.zln = function () {
        this.qgn = false;
        this.tsg(false, true)
    };
    this.xpi = function () {
        return this.qcx
    };
    this.gof = function (d, b) {
        if (d && b) {
            this.bci = b;
            this.wmo = [];
            for (var c = 0, a = d.length; c < a; c++) {
                this.wmo[c] = d[c]
            }
            if (this.vwq) {
                this.parent.fcy.aee("winline");
                this.parent.fcy.lgu("winline")
            }
        } else {
            this.wmo = null
        }
        this.qcx = false;
        this.xow = false;
        this.ybw = false;
        this.qgn = true;
        this.tsg(true, true)
    };
    this.start = function () {
        this.qcx = true;
        this.xow = true;
        this.ybw = false;
        if (!this.xnm) {
            this.axt = 0
        } else {
            if (this.axt >= this.iwe) {
                this.axt = 0
            }
        }
        this.iuh = true;
        this.parent.puv = false;
        this.lke = (this.parent.dfp >= (this.parent.trf - 1));
        if (this.xnm && this.vwq) {
            if (!this.parent.aof && this.parent.obh) {
                this.parent.fcy.aee("winline");
                this.parent.fcy.lgu("winline")
            }
        }
        this.qre()
    };
    this.stop = function () {
        this.qcx = false;
        this.xow = false;
        this.dly();
        clearInterval(this.isj);
        clearTimeout(this.pyo);
        clearTimeout(this.parent.jwe)
    };
    this.cde = function (d, c, a, f, j, e, b, g) {
        if (this.qgn) {
            this.qgn = false;
            this.parent.jvb()
        }
        this.twt = f;
        this.fhw = d;
        this.bci = c;
        this.juk = j;
        this.cki = e;
        this.udm = a;
        this.xnm = g;
        if (b) {
            this.opv()
        } else {
            this.iyv()
        }
    };
    this.opv = function () {
        this.tpb();
        this.start()
    };
    this.iyv = function () {
        this.qcx = true;
        this.xow = true;
        this.iuh = false;
        this.ybw = this.kyu;
        this.dly();
        if (!this.parent.aof && this.vwq) {
            this.parent.fcy.aee("winline");
            this.parent.fcy.lgu("winline")
        }
        this.jvb();
        this.kos()
    };
    this.atw = function () {
        if (this.oew) {
            this.bbb++;
            if (this.bbb == 6 || this.bbb == 10 || this.bbb == 15 || (this.parent.dqa == 2 && (this.bbb == 48 || this.bbb == 55 || this.bbb == 64))) {
                this.omy()
            }
            for (var a = this.erl.length - 1; a >= 0; a--) {
                if (this.erl[a].vuc()) {
                    this.erl.shift()
                }
            }
        }
        if (this.kyu) {
            if (this.xnm) {
                this.ybw = true
            } else {
                if ((this.axt % 3) == 0) {
                    this.ybw = !this.ybw
                }
            }
        }
        if (((!this.xnm || this.lke) && this.axt < this.iwe)) {
            this.parent.jvb();
            this.axt++;
            if (this.xnm) {
                this.ncs++
            }
        } else {
            if (this.xnm && !this.lke && this.ncs < this.fvz) {
                this.parent.jvb();
                this.ncs++;
                this.axt = (this.axt < this.iwe) ? this.axt + 1 : 0
            } else {
                this.ncs = 0;
                clearInterval(this.isj);
                this.gxs()
            }
        }
    };
    this.gxs = function () {
        this.qcx = false;
        this.xow = (this.wso && this.iuh);
        if (this.xow == true && this.lke == true && this.parent.aof == false && this.parent.ryv == true) {
            this.xow = false
        }
        if (!this.xnm || this.lke) {
            if (!(this.pjy && this.wso) && !this.oew) {
                this.zln()
            }
        }
        this.parent.jvb();
        this.parent.oss();
        this.parent.swa();
        this.parent.szs()
    };
    this.tpb = function () {
        this.iwe = 0;
        for (var a = 0; a < this.bci.length; a++) {
            for (var b = 0; b < this.bci[a].length; b++) {
                if (this.bci[a][b] >= 0) {
                    if (this.uez[this.bci[a][b]].whe > this.iwe) {
                        this.iwe = this.uez[this.bci[a][b]].whe
                    }
                }
            }
        }
    };
    this.nkb = function () {
        if (this.kgg()) {
            this.erl = [];
            this.oew = true;
            this.bbb = 0
        }
    };
    this.kdc = function () {
        this.bbb = 0
    };
    this.dly = function () {
        this.oew = false
    };
    this.omy = function () {
        var e = (Math.random() > 0.7) ? 4 : 3,
            d = this.fab * e,
            g = this.ahg * e,
            a = Math.random();
        while (Math.abs(a - this.jlr) < 0.3) {
            a = Math.random()
        }
        this.jlr = a;
        var f = Math.round(a * (this.width - d));
        a = Math.random();
        var c = Math.round(a * (this.height - g));
        var b = new pmg({
            x: f,
            y: c
        }, this.parent.fcy.uxh("firework"), this.context2D, d, g);
        this.erl.push(b)
    };
    this.qzj = function (b) {
        this.gtf = true;
        this.axt = 0;
        this.xpc = b;
        if (this.xpc >= this.parent.omq) {
            this.wuv = this.qje;
            for (var c = 0, a = this.acd.length; c < a; c++) {
                this.tyz[c] = this.acd[c]
            }
            this.parent.fcy.lgu("megawin");
            this.parent.fst(48);
            this.iwe = this.okr
        } else {
            if (this.xpc >= this.parent.bcz) {
                this.wuv = this.fck;
                for (var c = 0, a = this.wls.length; c < a; c++) {
                    this.tyz[c] = this.wls[c]
                }
                this.parent.fcy.lgu("bigwin");
                this.parent.fst(48);
                this.iwe = this.ayj
            } else {
                if (this.xpc >= this.parent.sgz) {
                    this.wuv = this.gsk;
                    for (var c = 0, a = this.kug.length; c < a; c++) {
                        this.tyz[c] = this.kug[c]
                    }
                    this.parent.fcy.lgu("nicewin");
                    this.parent.fst(24);
                    this.iwe = this.oix
                }
            }
        }
        this.iwe += (this.tyz.length - 1) * this.ajp;
        this.lth = 0;
        this.parent.lna(true);
        this.ypl()
    };
    this.zbe = function () {
        this.gtf = false;
        clearInterval(this.isj);
        if (this.xpc >= this.parent.omq) {
            this.parent.fcy.aee("megawin")
        } else {
            if (this.xpc >= this.parent.bcz) {
                this.parent.fcy.aee("bigwin")
            } else {
                if (this.xpc >= this.parent.sgz) {
                    this.parent.fcy.aee("nicewin")
                }
            }
        }
        this.zln();
        this.parent.lna(false);
        this.parent.wpk()
    };
    this.dwv = function (a, b, c) {
        this.ifm = a;
        this.elh = b;
        this.ddk = c
    };
    this.jvb = function () {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var d = this.context2D;
        d.save();
        d.clearRect(0, 0, this.width, this.height);
        d.lineWidth = this.meb;
        d.lineCap = "round";
        d.lineJoin = "round";
        if (this.qgn) {
            this.utd()
        }
        if (this.xow) {
            if (this.qcx && this.wso && this.udm) {
                for (var b = 0; b < this.bci.length; b++) {
                    for (var f = 0; f < this.bci[b].length; f++) {
                        if (this.bci[b][f] != -1) {
                            if (this.iuh) {
                                this.qda(b, f)
                            } else {
                                this.tai(b, f)
                            }
                        }
                    }
                }
                if (this.udm) {
                    this.gsy(this.fhw)
                }
                for (var c = this.juk; c < this.juk + this.cki; c++) {
                    if (this.twt >= 0 && (this.bci[c][this.abm[this.fhw][c] - 1] == this.twt || this.parent.jux(this.bci[c][this.abm[this.fhw][c] - 1]))) {
                        if (this.iuh) {
                            this.qda(c, this.abm[this.fhw][c] - 1)
                        } else {
                            this.tai(c, this.abm[this.fhw][c] - 1)
                        }
                    }
                }
            } else {
                if (this.qcx && this.udm) {
                    this.gsy(this.fhw)
                }
                for (var b = 0; b < this.bci.length; b++) {
                    for (var f = 0; f < this.bci[b].length; f++) {
                        if (this.bci[b][f] != -1) {
                            if (this.iuh) {
                                this.qda(b, f)
                            } else {
                                this.tai(b, f)
                            }
                        }
                    }
                }
            }
            if (this.yhd) {
                for (var b = 0; b < this.bci.length; b++) {
                    for (var f = 0; f < this.bci[b].length; f++) {
                        if (this.bci[b][f] != -1) {
                            d.drawImage(this.yhd, 0, f * this.nkm, this.yhd.width, this.nkm, this.usx[b][f].x, this.usx[b][f].y, this.igl, this.nkm)
                        }
                    }
                }
            }
            if (this.qcx) {
                if (this.fhw < 0) {
                    if (this.kcy[this.kcy.length - 2]) {
                        for (var b = 0; b < this.bci.length; b++) {
                            for (var f = 0; f < this.bci[b].length; f++) {
                                if (this.parent.xll >= 0 && this.bci[b][f] == this.parent.xll) {
                                    this.zuu(b, f, this.kcy[this.kcy.length - 2])
                                }
                            }
                        }
                    }
                } else {
                    for (var c = this.juk; c < this.juk + this.cki; c++) {
                        if (this.twt >= 0 && (this.bci[c][this.abm[this.fhw][c] - 1] == this.twt || this.parent.jux(this.bci[c][this.abm[this.fhw][c] - 1]))) {
                            this.zuu(c, this.abm[this.fhw][c] - 1, this.kcy[this.fhw])
                        }
                    }
                }
            }
            if (this.oew) {
                for (var e = 0, a = this.erl.length; e < a; e++) {
                    this.erl[e].jvb()
                }
            }
        } else {
            if (this.gtf) {
                this.ipz()
            }
        }
        d.restore();
        if (this.parent.ssp()) {
            if (this.lhh && this.ien) {
                this.lhh.drawImage(this.ien, this.x, this.y)
            }
        }
    };
    this.ipz = function () {
        var l = this.context2D,
            f = this.parent.fcy.uxh("wins"),
            b = (this.height / 2 - this.wuv.height) / 2,
            g = this.tyz[0],
            a = this.axt % this.ajp,
            k = (a < this.cdy) ? Math.floor(this.tyz[this.lth + 1] / this.cdy) * a : this.tyz[this.lth + 1],
            j = (a < this.cdy) ? Math.floor(this.wuv.height / this.cdy) * a : this.wuv.height,
            c = 1,
            e = 5;
        l.save();
        if (this.axt >= this.iwe - e) {
            c = (this.iwe - this.axt) * (1 / e)
        }
        l.globalAlpha = c;
        for (var d = 0; d <= this.lth && d < this.tyz.length - 1; d++) {
            if (d == this.tyz.length - 2) {
                b += this.height / 2
            }
            if (d == this.lth) {
                l.drawImage(f, g, this.wuv.y, this.tyz[d + 1], this.wuv.height, ((this.width - this.tyz[d + 1]) / 2 + (this.tyz[d + 1] - k) / 2), (b + (this.wuv.height - j) / 2), k, j)
            } else {
                l.drawImage(f, g, this.wuv.y, this.tyz[d + 1], this.wuv.height, (this.width - this.tyz[d + 1]) / 2, b, this.tyz[d + 1], this.wuv.height)
            }
            g += this.tyz[d + 1]
        }
        l.restore()
    };
    this.utd = function () {
        if (this.wmo) {
            this.elf = [];
            for (var b = 0; b < this.bci.length; b++) {
                for (var d = 0; d < this.bci[b].length; d++) {
                    if (this.bci[b][d] != -1) {
                        this.tai(b, d);
                        if (this.yhd) {
                            this.context2D.drawImage(this.yhd, 0, d * this.nkm, this.yhd.width, this.nkm, this.usx[b][d].x, this.usx[b][d].y, this.igl, this.nkm)
                        }
                    }
                }
            }
            for (var c = 0, a = this.wmo.length; c < a; c++) {
                this.dqq(this.wmo[c])
            }
        } else {
            for (var c = 0; c < this.parent.hio; c++) {
                this.gsy(c)
            }
        }
    };
    this.gsy = function (c) {
        var a = this.context2D;
        a.save();
        a.strokeStyle = (this.ybw) ? this.kcy[c].pfj : this.kcy[c].qes;
        a.lineWidth = this.meb;
        a.beginPath();
        for (var b = 0; b < this.quf[c].length; b++) {
            if (b == 0) {
                a.moveTo(this.quf[c][b].x, this.quf[c][b].y)
            } else {
                a.lineTo(this.quf[c][b].x, this.quf[c][b].y)
            }
        }
        a.moveTo(this.quf[c][0].x, this.quf[c][0].y);
        a.stroke();
        a.strokeStyle = (this.ybw) ? this.kcy[c].upt : this.kcy[c].tic;
        a.lineWidth = this.meb - 2 * this.oxo;
        a.stroke();
        a.restore()
    };
    this.dqq = function (d) {
        var a = this.context2D,
            c = null;
        a.save();
        for (var b = 1; b < this.quf[d].length; b++) {
            c = this.quf[d][b - 1].x + "_" + this.quf[d][b - 1].y + "_" + this.quf[d][b].x + "_" + this.quf[d][b].y;
            if (this.elf.indexOf(c) < 0) {
                this.elf.push(c);
                a.beginPath();
                a.moveTo(this.quf[d][b - 1].x, this.quf[d][b - 1].y);
                a.lineTo(this.quf[d][b].x, this.quf[d][b].y);
                a.moveTo(this.quf[d][b - 1].x, this.quf[d][b - 1].y);
                a.strokeStyle = (this.ybw) ? this.kcy[this.kcy.length - 1].pfj : this.kcy[this.kcy.length - 1].qes;
                a.lineWidth = this.meb;
                a.stroke();
                a.strokeStyle = (this.ybw) ? this.kcy[this.kcy.length - 1].upt : this.kcy[this.kcy.length - 1].tic;
                a.lineWidth = this.meb - 2 * this.oxo;
                a.stroke()
            }
        }
        a.restore()
    };
    this.qda = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.ifm != null) {
            this.context2D.drawImage(this.ifm, this.usx[a][c].x + this.elh, this.usx[a][c].y + this.ddk, this.igl, this.nkm, this.usx[a][c].x, this.usx[a][c].y, this.igl, this.nkm)
        }
        if (this.uez[this.bci[a][c]].whe <= this.axt) {
            b.drawImage(this.uez[this.bci[a][c]].fpn, (this.uez[this.bci[a][c]].whe - 1) * this.uez[this.bci[a][c]].jeq, 0, this.uez[this.bci[a][c]].jeq, this.uez[this.bci[a][c]].rpa, this.usx[a][c].x + (this.igl - this.uez[this.bci[a][c]].jeq) / 2, this.usx[a][c].y + (this.nkm - this.uez[this.bci[a][c]].rpa) / 2, this.uez[this.bci[a][c]].jeq, this.uez[this.bci[a][c]].rpa)
        } else {
            b.drawImage(this.uez[this.bci[a][c]].fpn, this.axt * this.uez[this.bci[a][c]].jeq, 0, this.uez[this.bci[a][c]].jeq, this.uez[this.bci[a][c]].rpa, this.usx[a][c].x + (this.igl - this.uez[this.bci[a][c]].jeq) / 2, this.usx[a][c].y + (this.nkm - this.uez[this.bci[a][c]].rpa) / 2, this.uez[this.bci[a][c]].jeq, this.uez[this.bci[a][c]].rpa)
        }
        b.restore()
    };
    this.tai = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.ifm != null) {
            this.context2D.drawImage(this.ifm, this.usx[a][c].x + this.elh, this.usx[a][c].y + this.ddk, this.igl, this.nkm, this.usx[a][c].x, this.usx[a][c].y, this.igl, this.nkm)
        }
        b.drawImage(this.vln[this.bci[a][c]], this.usx[a][c].x + (this.igl - this.vln[this.bci[a][c]].width) / 2, this.usx[a][c].y + (this.nkm - this.vln[this.bci[a][c]].height) / 2);
        b.restore()
    };
    this.zuu = function (a, d, c) {
        var b = this.context2D;
        b.save();
        if (c) {
            b.lineWidth = this.tkv;
            b.strokeStyle = (this.ybw) ? c.pfj : c.qes;
            b.strokeRect(this.usx[a][d].x + this.tkv / 2, this.usx[a][d].y + this.tkv / 2, this.igl - this.tkv, this.nkm - this.tkv);
            b.strokeStyle = (this.ybw) ? c.upt : c.tic;
            b.lineWidth = this.tkv - 2 * this.oxo;
            b.strokeRect(this.usx[a][d].x + this.tkv / 2, this.usx[a][d].y + this.tkv / 2, this.igl - this.tkv, this.nkm - this.tkv)
        }
        b.restore()
    }
}
rcw.prototype = new idn;

function xrz() {
    var a = this;
    this.qre = function () {
        this.xew();
        this.isj = setInterval(a.xew, a.jzu)
    };
    this.xew = function () {
        a.atw()
    };
    this.kos = function () {
        this.pyo = setTimeout(a.yrf, a.gut)
    };
    this.yrf = function () {
        a.gxs()
    };
    this.ypl = function () {
        this.isj = setInterval(this.zfi, 60)
    };
    this.zfi = function () {
        if (a.axt < a.iwe) {
            a.axt++;
            if ((a.axt % (a.ajp)) == 0) {
                a.lth++
            }
            a.parent.jvb()
        } else {
            a.zbe()
        }
    }
}
xrz.prototype = new rcw;

function ifn() {
    var a = this;
    this.iuf = 0;
    this.omr = 1;
    this.fwb = 7;
    this.zvu = 0;
    this.kkd = 0;
    this.uvo = 0;
    this.owo = 0;
    this.rae = this.iuf;
    this.ash = this.wms;
    this.yrt = function () {
        this.tsg(true);
        this.wlo = true;
        this.otl = false;
        this.rae = this.iuf;
        this.kkd = Math.floor(this.width / this.fwb);
        this.owo = 0;
        this.uvo = 0
    };
    this.nii = function () {
        this.wlo = true;
        this.otl = false;
        this.rae = this.omr;
        this.kkd = -Math.floor(this.width / this.fwb);
        this.owo = 1;
        this.uvo = this.width
    };
    this.ayb = function () {
        if (a.owo < a.fwb) {
            a.uvo += a.kkd;
            a.owo++;
            return true
        } else {
            a.wlo = false;
            a.otl = true;
            if (a.rae == a.omr) {
                a.tsg(false)
            }
            return false
        }
    };
    this.lgu = function () {
        if (this.akj == this.odp) {
            this.parent.fcy.lgu("maxstep")
        } else {
            this.parent.fcy.lgu("step" + (this.akj % 12))
        }
    };
    this.wyo = function (b, d) {
        var c = false;
        this.akj = b;
        if (this.akj < this.bxa) {
            c = true;
            this.akj = this.bxa
        }
        if (this.akj >= this.odp) {
            c = true;
            this.akj = this.odp
        }
        this.rlr = this.akj + 1;
        if (c) {
            this.npx(this.akj)
        }
        if (d && d === true) {
            this.parent.jvb()
        }
    };
    this.gln = function () {
        a.nrk = false
    };
    this.jvb = function () {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        this.ych();
        if (this.lhh && this.ien) {
            if (this.wlo) {
                if (this.uvo > 0) {
                    if (this.ash === this.fod) {
                        this.lhh.drawImage(this.ien, this.width - this.uvo, 0, this.uvo, this.height, this.x, this.y, this.uvo, this.height)
                    } else {
                        if (this.ash === this.wms) {
                            this.lhh.drawImage(this.ien, 0, 0, this.uvo, this.height, this.x + this.width - this.uvo, this.y, this.uvo, this.height)
                        }
                    }
                }
            } else {
                this.lhh.drawImage(this.ien, this.x, this.y)
            }
        }
    };
    this.kyy = function (c) {
        var f = this.tas,
            e = this.tas,
            b = 0,
            d = 0;
        if (this.ash === this.wms) {
            b = this.crv;
            d = this.kts.x - 2 * this.crv
        } else {
            if (this.ash === this.fod) {
                b = this.kts.x + this.kts.width + this.crv;
                d = this.width - this.crv - (this.kts.x + this.kts.width + this.crv)
            }
        }
        if (this.akj > 0 && this.akj < this.akd.length - 1) {
            bio.olq.zuu(c, b, this.kts.y + ((this.vyi - this.rlr) * this.nwk), d, this.nwk, this.jar, this.npz);
            bio.olq.idi(c, this.parent.jos(this.akd[this.akj]), this.quv, b, this.kts.y + ((this.vyi - this.rlr) * this.nwk) + (this.nwk - this.hum) / 2, d, this.hum, this.zrw, this.hum, this.kfk, this.crv)
        } else {
            if (this.akj == 0) {
                f = this.quv
            } else {
                if (this.akj == this.akd.length - 1) {
                    e = this.quv
                }
            }
        }
        bio.olq.zuu(c, b, this.kts.y + (this.nwk * (this.vyi - 1)), d, this.nwk, this.jar, this.npz);
        bio.olq.idi(c, this.parent.jos(this.akd[0]), f, b, this.kts.y + (this.nwk * (this.vyi - 1)) + (this.nwk - this.hum) / 2, d, this.hum, this.zrw, this.hum, this.kfk, this.crv);
        bio.olq.zuu(c, b, this.kts.y, d, this.nwk, this.jar, this.npz);
        bio.olq.idi(c, this.parent.jos(this.akd[this.akd.length - 1]), e, b, this.kts.y + (this.nwk - this.hum) / 2, d, this.hum, this.zrw, this.hum, this.kfk, this.crv);
        bio.olq.fwv(c, "+", this.tas, this.mui.x, this.mui.y, this.mui.width, this.mui.height, this.zrw, this.hum, this.kfk);
        bio.olq.fwv(c, "", this.tas, this.dpj.x, this.dpj.y, this.dpj.width, this.dpj.height, this.zrw, this.hum, this.kfk);
        if (this.jsb) {
            bio.olq.fwv(c, this.jsb, this.tas, this.vog.x, this.vog.y, this.vog.width, this.vog.height, this.zrw, this.hum, this.kfk)
        }
    }
}
ifn.prototype = new jco;

function lls() {
    var a = this;
    this.iuf = 0;
    this.omr = 1;
    this.fwb = 7;
    this.zvu = 0;
    this.kkd = 0;
    this.uvo = 0;
    this.owo = 0;
    this.rae = this.iuf;
    this.yrt = function () {
        this.tsg(true);
        this.wlo = true;
        this.otl = false;
        this.rae = this.iuf;
        this.kkd = Math.floor(this.width / this.fwb);
        this.owo = 0;
        this.uvo = 0
    };
    this.nii = function () {
        this.wlo = true;
        this.otl = false;
        this.rae = this.omr;
        this.kkd = -Math.floor(this.width / this.fwb);
        this.owo = 1;
        this.uvo = this.width
    };
    this.ayb = function () {
        if (a.owo < a.fwb) {
            a.uvo += a.kkd;
            a.owo++;
            return true
        } else {
            a.wlo = false;
            a.otl = true;
            if (a.rae == a.omr) {
                a.tsg(false)
            }
            return false
        }
    };
    this.lgu = function () {
        if (this.akj == this.odp) {
            this.parent.fcy.lgu("maxstep")
        } else {
            this.parent.fcy.lgu("step" + (this.akj % 12))
        }
    };
    this.gln = function () {
        a.nrk = false
    };
    this.jvb = function () {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        this.ych();
        if (this.lhh && this.ien) {
            if (this.wlo) {
                if (this.uvo > 0) {
                    if (this.ash === this.fod) {
                        this.lhh.drawImage(this.ien, this.width - this.uvo, 0, this.uvo, this.height, this.x, this.y, this.uvo, this.height)
                    } else {
                        if (this.ash === this.wms) {
                            this.lhh.drawImage(this.ien, 0, 0, this.uvo, this.height, this.x + this.width - this.uvo, this.y, this.uvo, this.height)
                        }
                    }
                }
            } else {
                this.lhh.drawImage(this.ien, this.x, this.y)
            }
        }
    };
    this.kyy = function (c) {
        var f = this.tas,
            e = this.tas,
            b = 0,
            d = 0;
        if (this.ash === this.wms) {
            b = this.crv;
            d = this.kts.x - 2 * this.crv
        } else {
            if (this.ash === this.fod) {
                b = this.kts.x + this.kts.width + this.crv;
                d = this.width - this.crv - (this.kts.x + this.kts.width + this.crv)
            }
        }
        if (this.akj > 0 && this.akj < this.akd.length - 1) {
            bio.olq.zuu(c, b, this.kts.y + ((this.vyi - this.rlr) * this.nwk), d, this.nwk, this.jar, this.npz);
            bio.olq.yzj(c, this.akd[this.akj], this.quv, b, this.kts.y + ((this.vyi - this.rlr) * this.nwk) + (this.nwk - this.hum) / 2, d, this.hum, this.zrw, this.hum, this.kfk, this.crv)
        } else {
            if (this.akj == 0) {
                f = this.quv
            } else {
                if (this.akj == this.akd.length - 1) {
                    e = this.quv
                }
            }
        }
        bio.olq.zuu(c, b, this.kts.y + (this.nwk * (this.vyi - 1)), d, this.nwk, this.jar, this.npz);
        bio.olq.yzj(c, this.akd[0], f, b, this.kts.y + (this.nwk * (this.vyi - 1)) + (this.nwk - this.hum) / 2, d, this.hum, this.zrw, this.hum, this.kfk, this.crv);
        bio.olq.zuu(c, b, this.kts.y, d, this.nwk, this.jar, this.npz);
        bio.olq.yzj(c, this.akd[this.akd.length - 1], e, b, this.kts.y + (this.nwk - this.hum) / 2, d, this.hum, this.zrw, this.hum, this.kfk, this.crv);
        bio.olq.fwv(c, "+", this.tas, this.mui.x, this.mui.y, this.mui.width, this.mui.height, this.zrw, this.hum, this.kfk);
        bio.olq.fwv(c, "", this.tas, this.dpj.x, this.dpj.y, this.dpj.width, this.dpj.height, this.zrw, this.hum, this.kfk);
        if (this.jsb) {
            bio.olq.fwv(c, this.jsb, this.tas, this.vog.x, this.vog.y, this.vog.width, this.vog.height, this.zrw, this.hum, this.kfk)
        }
    }
}
lls.prototype = new jco;

function rnr() {
    this.ssi = new Image();
    this.dwo = [];
    this.mcw = 0;
    this.nhs = 0;
    this.nnc = [];
    this.fjb = 0;
    this.fmd = 0;
    this.eoc = 0;
    this.fie = [];
    this.ifm = null;
    this.elh = 0;
    this.ddk = 0;
    this.mey = function (a) {
        try {
            this.fie = a.qin;
            this.fmd = a.uxl;
            this.eoc = a.mam
        } catch (b) {
            console.error(b)
        }
    };
    this.fpy = function (b, f, c) {
        var e = this.parent.ywg.etp.brx("line"),
            a = this.parent.hfo.brx("betsel"),
            d = this.parent.hfo.brx("linesel");
        if (b >= this.x && b <= this.x + this.width && f >= this.y && f <= this.y + this.height && this.kgg() === true) {
            if (e && e.hon() && !e.sjx()) {
                if (!c) {
                    this.parent.fcy.aee("panel");
                    this.parent.fcy.lgu("panel");
                    if ((a && a.hon()) && ((d && d.hon()) || !d)) {
                        this.parent.pqr()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.jvb = function () {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var c = this.context2D,
            e = false;
        if (this.ifm != null) {
            c.drawImage(this.ifm, this.x + this.elh, this.y + this.ddk, this.width, this.height, this.x, this.y, this.width, this.height)
        }
        if (this.nnc.length > 0) {
            for (var f = this.mcw - 1, d = 0; f <= this.nhs - 1; f++, d++) {
                e = false;
                for (var b = 0, a = this.nnc.length; b < a; b++) {
                    if (this.dwo[f] === this.nnc[b]) {
                        e = true;
                        c.drawImage(this.ssi, 0, this.ssi.height / 2 + (this.dwo[f] - 1) * this.eoc, this.fmd, this.eoc, this.x, this.y + this.fie[d], this.fmd, this.eoc)
                    }
                }
                if (e === false) {
                    c.drawImage(this.ssi, 0, (this.dwo[f] - 1) * this.eoc, this.fmd, this.eoc, this.x, this.y + this.fie[d], this.fmd, this.eoc)
                }
            }
        } else {
            for (var f = this.mcw - 1, d = 0; f <= this.nhs - 1; f++, d++) {
                if (this.dwo[f] <= this.fjb) {
                    c.drawImage(this.ssi, 0, this.ssi.height / 2 + (this.dwo[f] - 1) * this.eoc, this.fmd, this.eoc, this.x, this.y + this.fie[d], this.fmd, this.eoc)
                } else {
                    c.drawImage(this.ssi, 0, (this.dwo[f] - 1) * this.eoc, this.fmd, this.eoc, this.x, this.y + this.fie[d], this.fmd, this.eoc)
                }
            }
        }
    };
    this.bnf = function (a, b) {
        this.fjb = a;
        if (b && b === true) {
            this.jvb()
        }
    };
    this.vxw = function (b, d) {
        this.nnc = [];
        if (b) {
            for (var c = 0, a = b.length; c < a; c++) {
                this.nnc[c] = b[c]
            }
        }
        if (d && d === true) {
            this.jvb()
        }
    };
    this.wbz = function (a) {
        this.ssi = a;
        this.width = this.fmd;
        this.height = this.fie[this.fie.length - 1] + this.eoc;
        this.zlp(new bku(this.x, this.y, this.width, this.height))
    };
    this.dwv = function (a, b, c) {
        this.ifm = a;
        this.elh = b;
        this.ddk = c
    }
}
rnr.prototype = new idn;

function yam(g, c, f, e, j, a, d, b) {
    this.qqz = g;
    this.ocn = f;
    this.tcd = e;
    this.fhx = j;
    this.rmd = c;
    this.rqm = a;
    this.gxg = d;
    this.vye = b;
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
    this.dnk = [];
    this.onb = [];
    this.rzi = [];
    this.nrb = [];
    this.akl = [];
    this.syh = [];
    this.wmk = 5;
    this.qfx = [];
    this.qas = [];
    this.zoq = [];
    this.dkv = [];
    this.zqo = [];
    this.sue = [];
    this.pwx = [];
    this.jru = [];
    this.etk = [];
    this.esf = [];
    this.hbm = [];
    this.yio = [];
    this.mke = [];
    this.xqp = [];
    this.eot = [];
    this.wea = [];
    this.uwr = [];
    this.fqn = [];
    this.vvn = [];
    this.gxj = [];
    this.aar = 0;
    this.cfy = 0;
    this.win = 0;
    this.yfe = 0;
    this.gly = 0;
    this.bxm = 0;
    this.hio = 0;
    this.sjm = 0;
    this.elz = 0;
    this.enj = 0;
    this.wyb = 1;
    this.aae = 1;
    this.yxy = 0;
    this.nmc = 0;
    this.alk = 0;
    this.mhp = 0;
    this.vmz = 0;
    this.dyf = 1;
    this.nzt = 1;
    this.sda = 0;
    this.bbe = 0;
    this.nuk = 0;
    this.qte = 0;
    this.zqc = "";
    this.lym = "";
    this.mzg = "";
    this.tgs = "";
    this.xuj = 0;
    this.xwv = function (k) {
        return this.erh(k)
    };
    this.ike = function (o) {
        if (o != null) {
            this.acg = 0;
            this.afx = this.jri(o);
            if (this.afx == 0) {
                this.rl = this.jri(o);
                this.r1 = this.xwv(o);
                this.r2 = this.xwv(o);
                this.r3 = this.xwv(o);
                if (this.rl >= 4) {
                    this.r4 = this.xwv(o)
                }
                if (this.rl >= 5) {
                    this.r5 = this.xwv(o)
                }
                if (this.rl >= 6) {
                    this.r6 = this.xwv(o)
                }
                if (this.rl >= 7) {
                    this.r7 = this.xwv(o)
                }
                if (this.rl >= 8) {
                    this.r8 = this.xwv(o)
                }
                if (this.rl >= 9) {
                    this.r9 = this.xwv(o)
                }
                if (this.rl >= 10) {
                    this.dnk = this.xwv(o)
                }
                if (this.rl >= 11) {
                    this.onb = this.xwv(o)
                }
                if (this.rl >= 12) {
                    this.rzi = this.xwv(o)
                }
                if (this.rl >= 13) {
                    this.nrb = this.xwv(o)
                }
                if (this.rl >= 14) {
                    this.akl = this.xwv(o)
                }
                if (this.rl >= 15) {
                    this.syh = this.xwv(o)
                }
                this.wmk = this.jri(o);
                if (this.wmk > 0) {
                    this.qfx = this.xwv(o);
                    this.qas = this.xwv(o);
                    this.zoq = this.xwv(o);
                    if (this.wmk >= 4) {
                        this.dkv = this.xwv(o)
                    }
                    if (this.wmk >= 5) {
                        this.zqo = this.xwv(o)
                    }
                    if (this.wmk >= 6) {
                        this.sue = this.xwv(o)
                    }
                    if (this.wmk >= 7) {
                        this.pwx = this.xwv(o)
                    }
                    if (this.wmk >= 8) {
                        this.jru = this.xwv(o)
                    }
                    if (this.wmk >= 9) {
                        this.etk = this.xwv(o)
                    }
                    if (this.wmk >= 10) {
                        this.esf = this.xwv(o)
                    }
                    if (this.wmk >= 11) {
                        this.hbm = this.xwv(o)
                    }
                    if (this.wmk >= 12) {
                        this.yio = this.xwv(o)
                    }
                    if (this.wmk >= 13) {
                        this.mke = this.xwv(o)
                    }
                    if (this.wmk >= 14) {
                        this.xqp = this.xwv(o)
                    }
                    if (this.wmk >= 15) {
                        this.eot = this.xwv(o)
                    }
                }
                this.apw = this.nma(o);
                this.una = this.jri(o);
                for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                    this.wea[l] = this.pcd(o)
                }
                this.aar = this.pcd(o);
                this.cfy = this.pcd(o);
                this.win = this.pcd(o);
                this.bxm = this.nma(o);
                this.yfe = this.pcd(o);
                this.gly = this.pcd(o);
                this.hio = this.nma(o);
                this.sjm = this.pcd(o);
                this.elz = this.pcd(o);
                this.enj = this.pcd(o);
                this.wyb = this.pcd(o);
                this.aae = this.pcd(o);
                this.yxy = this.pcd(o);
                this.nmc = this.pcd(o);
                this.alk = this.nma(o);
                this.mhp = this.nma(o);
                this.vmz = this.nma(o);
                this.dyf = this.pcd(o);
                this.nzt = this.nma(o);
                
                
                for (var l = 0, k = (this.wmk < 5) ? 5 : this.wmk; l < k; l++) {
                    this.uwr[l] = this.pcd(o)
                }
                for (var l = 0; l < 8; l++) {
                    this.fqn[l] = this.nma(o)
                }
                var p = this.nma(o);
                for (var l = 0; l < p; l++) {
                    this.vvn[l] = this.pcd(o)
                }
                var n = this.nma(o);
                for (var l = 0; l < n; l++) {
                    this.gxj[l] = this.pcd(o)
                }
                this.wtk(o);
                if (this.apw == 0) {
                    this.mox("A/u250")
                } else {
                    this.svb.cyt()
                }
            } else {
                if (this.afx == 1) {
                    this.apw = this.nma(o);
                    this.una = this.jri(o);
                    this.aar = this.pcd(o);
                    this.cfy = this.pcd(o);
                    this.win = this.pcd(o);
                    for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                        this.wea[l] = this.pcd(o)
                    }
                    this.bxm = this.nma(o);
                    this.hio = this.nma(o);
                    this.sjm = this.pcd(o);
                    this.elz = this.pcd(o);
                    this.enj = this.pcd(o);
                    this.wyb = this.pcd(o);
                    this.aae = this.pcd(o);
                    this.yxy = this.pcd(o);
                    for (var l = 0, k = (this.wmk < 5) ? 5 : this.wmk; l < k; l++) {
                        this.uwr[l] = this.pcd(o)
                    }
                    var n = this.nma(o);
                    for (var l = 0; l < n; l++) {
                        this.gxj[l] = this.pcd(o)
                    }
                    for (var l = 0; l < 8; l++) {
                        this.fqn[l] = this.nma(o)
                    }
                    this.wtk(o);
                    if (this.una == 0) {
                        if (this.apw == bio.tfo.ioz.sfw) {
                            this.svb.cyt()
                        } else {
                            if (this.apw == bio.tfo.ioz.qqg) {
                                this.svb.tvw()
                            } else {
                                if (this.apw == bio.tfo.ioz.bsz) {
                                    this.svb.aff()
                                } else {
                                    if (this.apw == bio.tfo.ioz.cku) {
                                        this.svb.wlq()
                                    } else {
                                        if (this.apw == bio.tfo.ioz.owv) {
                                            this.svb.asa()
                                        } else {
                                            if (this.apw == bio.tfo.ioz.eql) {
                                                this.svb.ior()
                                            } else {
                                                if (this.apw == bio.tfo.ioz.kag) {
                                                    this.svb.xoh()
                                                } else {
                                                    if (this.apw == bio.tfo.ioz.agm) {
                                                        this.svb.ywx()
                                                    } else {
                                                        if (this.apw == bio.tfo.ioz.nws) {
                                                            this.svb.xak()
                                                        } else {
                                                            if (this.apw == bio.tfo.ioz.jfv) {
                                                                this.svb.oqb()
                                                            } else {
                                                                if (this.apw == bio.tfo.ioz.vhl) {
                                                                    this.svb.pwh()
                                                                } else {
                                                                    if (this.apw == bio.tfo.ioz.zmd) {
                                                                        this.svb.okv()
                                                                    } else {
                                                                        if (this.apw == bio.tfo.ioz.jjr) {
                                                                            this.svb.vsa()
                                                                        } else {
                                                                            this.buz()
                                                                        }
                                                                    }
                                                                }
                                                            }
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
                        this.svb.oce(this.una)
                    }
                } else {
                    if (this.afx == 2) {} else {
                        if (this.afx == 3) {
                            this.cfy = this.pcd(o);
                            this.svb.hir()
                        } else {
                            if (this.afx === 6 || this.afx === 7) {
                                this.gck(o.substring(this.acg))
                            } else {
                                if (this.afx === 8) {
                                    this.mox("8")
                                } else {
                                    if (this.afx == 9) {
                                        this.svb.jpa.avh = o.substring(this.acg)
                                    } else {
                                        if (this.afx == 10) {
                                            var m = JSON.parse(o.substring(this.acg)).Message;
                                            for (var l = 0, k = m.length; l < k; l++) {
                                                if (m[l].DisplayType == bio.ngv.sjf.bob) {
                                                    this.xmm.push(m[l])
                                                }
                                            }
                                            if (this.xmm.length > 0) {
                                                this.svb.kjr()
                                            }
                                        } else {
                                            this.qja = this.jri(o);
                                            this.svb.fdq(o.substring(2))
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
    this.wtk = function (t) {
        var l = null,
            n = [],
            q = null,
            v = null,
            o = null,
            m = null,
            p = null,
            k = null;
        if (this.afx == 0) {
            l = this.kis(t);
            if (l != "") {
                n = l.split("#");
                if (n.length >= 1) {
                    q = n[0].split("|");
                    this.lym = q[0];
                    if (q.length > 1) {
                        this.mzg = q[1];
                        if (q.length > 2) {
                            this.tgs = q[2]
                        }
                    }
                    if (n.length >= 2) {
                        v = n[1].split("|");
                        if (v.length >= 1) {
                            m = v[0];
                            this.acg = 0;
                            this.sda = this.nma(m);
                            this.bbe = this.pcd(m);
                            this.nuk = this.pcd(m);
                            this.qte = this.pcd(m);
                            this.zqc = this.kis(m);
                            if (v.length >= 2) {
                                k = v[1];
                                if (k) {
                                    this.xuj = parseFloat(k)
                                }
                            }
                        }
                    }
                }
            }
            if (bio.pql.value21.e === true && bio.pql.value21.s) {
                if (this.xuj == 0) {
                    this.lym = ""
                } else {
                    if (this.xuj != 0 && bio.pql.value21.m == 1) {
                        this.lym = ""
                    }
                }
            }
        } else {
            l = this.kis(t);
            if (l != "") {
                n = l.split("#");
                if (n.length > 1) {
                    m = n[1];
                    o = n[1].split("|{");
                    m = o[0];
                    if (m) {
                        this.acg = 0;
                        this.bbe = this.pcd(m);
                        this.nuk = this.pcd(m);
                        this.qte = this.pcd(m)
                    }
                    if (o.length > 1) {
                        p = "{" + o[1];
                        var r = JSON.parse(p).Message;
                        this.iax.length = 0;
                        this.fzg.length = 0;
                        for (var s = 0, u = r.length; s < u; s++) {
                            if (r[s].DisplayType == bio.ngv.sjf.gsm) {
                                this.fzg.push(r[s])
                            } else {
                                if (r[s].DisplayType == bio.ngv.sjf.bob) {
                                    this.iax.push(r[s])
                                }
                            }
                        }
                    }
                    if (this.fzg.length > 0) {
                        this.svb.ckr()
                    }
                }
            }
        }
    };
    this.buz = function () {};
    this.play = function (l, k, m) {
        this.mox("A/u251," + l + "," + k + "," + m)
    };
    this.stb = function () {
        this.mox("A/u254")
    };
    this.rvn = function () {
        this.mox("A/u258")
    };
    this.zli = function (k) {
        this.mox("A/u257," + k)
    };
    this.ihe = function (l, k, m) {
        this.mox("A/u256," + l + "," + k + "," + m)
    }
}
yam.prototype = new ysr;

function ysz() {
    this.yfy = function (a, b) {
        this.qqz = b;
        this.jpa = a;
        return this
    };
    this.connect = function (c, f, e, g, a, d, b) {
        this.ocn = f;
        this.tcd = e;
        this.fhx = g;
        this.rmd = c;
        this.gxg = d;
        this.vye = b;
        this.qlj = new yam(this.qqz, c, f, e, g, a, d, b);
        this.qlj.yfy(this)
    };
    this.play = function (b, a, c) {
        this.qlj.play(b, a, c)
    };
    this.ihe = function (b, a, c) {
        this.qlj.ihe(b, a, c)
    };
    this.stb = function () {
        this.qlj.stb()
    };
    this.rvn = function () {
        this.qlj.rvn()
    };
    this.zli = function (a) {
        this.qlj.zli(a)
    };
    this.cyt = function () {
        var c = this.qlj.apw;
        this.jpa.r1 = this.qlj.r1;
        this.jpa.r2 = this.qlj.r2;
        this.jpa.r3 = this.qlj.r3;
        this.jpa.r4 = this.qlj.r4;
        this.jpa.r5 = this.qlj.r5;
        this.jpa.r6 = this.qlj.r6;
        this.jpa.r7 = this.qlj.r7;
        this.jpa.r8 = this.qlj.r8;
        this.jpa.r9 = this.qlj.r9;
        this.jpa.dnk = this.qlj.dnk;
        this.jpa.onb = this.qlj.onb;
        this.jpa.rzi = this.qlj.rzi;
        this.jpa.nrb = this.qlj.nrb;
        this.jpa.akl = this.qlj.akl;
        this.jpa.syh = this.qlj.syh;
        if (c == bio.tfo.ioz.owv || c == bio.tfo.ioz.eql || c == bio.tfo.ioz.kag || c == bio.tfo.ioz.agm || c == bio.tfo.ioz.nws) {
            this.jpa.r1 = this.qlj.qfx;
            this.jpa.r2 = this.qlj.qas;
            this.jpa.r3 = this.qlj.zoq;
            this.jpa.r4 = this.qlj.dkv;
            this.jpa.r5 = this.qlj.zqo;
            this.jpa.r6 = this.qlj.sue;
            this.jpa.r7 = this.qlj.pwx;
            this.jpa.r8 = this.qlj.jru;
            this.jpa.r9 = this.qlj.etk;
            this.jpa.dnk = this.qlj.esf;
            this.jpa.onb = this.qlj.hbm;
            this.jpa.rzi = this.qlj.yio;
            this.jpa.nrb = this.qlj.mke;
            this.jpa.akl = this.qlj.xqp;
            this.jpa.syh = this.qlj.eot
        }
        this.jpa.oam = this.qlj.wea;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.yfe = this.qlj.yfe;
        this.jpa.gly = this.qlj.gly;
        this.jpa.mhp = this.qlj.mhp;
        this.jpa.vmz = this.qlj.vmz;
        if (this.adj()) {
            for (var b = 0, a = this.qlj.vvn.length; b < a && this.qlj.vvn[b] <= this.qlj.gly; b++) {
                this.jpa.vvn[b] = this.qlj.vvn[b]
            }
        } else {
            for (var b = 0, a = this.qlj.vvn.length; b < a && this.qlj.vvn[b] * this.qlj.alk <= this.qlj.gly; b++) {
                this.jpa.vvn[b] = this.qlj.vvn[b]
            }
        }
        if (c == bio.tfo.ioz.sfw || ((c == bio.tfo.ioz.qqg || c == bio.tfo.ioz.vhl) && this.qlj.win == 0) || c == bio.tfo.ioz.bsz || c == bio.tfo.ioz.jfv || c == bio.tfo.ioz.nws) {
            this.jpa.bea = true
        } else {
            this.jpa.bea = false
        }
        this.jpa.hio = this.qlj.hio;
        this.jpa.lmy = this.qlj.bxm;
        this.jpa.cqc = this.jpa.vvn[this.jpa.lmy];
        this.jpa.win = this.qlj.win;
        for (var b = 0; b < this.qlj.gxj.length; b++) {
            this.jpa.yzy[b] = this.qlj.gxj[b]
        }
        this.jpa.eke = this.qlj.uwr;
        this.jpa.enj = this.qlj.enj;
        this.jpa.yxy = this.qlj.yxy;
        this.jpa.elz = this.qlj.elz;
        this.jpa.sjm = this.qlj.sjm;
        this.jpa.crp = this.qlj.sjm;
        this.jpa.wyb = this.qlj.wyb;
        this.hzi();
        this.jpa.bjm();
        this.jpa.hyv(c, this.qlj.fqn, this.qlj.aar)
    };
    this.tvw = function () {
        this.jpa.sxd({
            type: "roundStarted",
            sender: this.jpa.rmd,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.jpa.jos(this.jpa.cfy)
            }
        });
        this.jpa.state = this.qlj.apw;
        this.jpa.oam = this.qlj.wea;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.hio = this.qlj.hio;
        this.jpa.lmy = this.qlj.bxm;
        this.jpa.win = this.qlj.win;
        for (var a = 0; a < this.qlj.gxj.length; a++) {
            this.jpa.yzy[a] = this.qlj.gxj[a]
        }
        if (this.jpa.riv && this.jpa.win > 0) {
            this.jpa.riv.etp.tvc("history", "#fai", [this.qlj.fqn])
        }
        this.jpa.wwz = false;
        this.hzi();
        this.jpa.clg();
        this.jpa.xxb(this.qlj.aar)
    };
    this.aff = function () {
        this.jpa.state = this.qlj.apw;
        this.jpa.cfy = this.qlj.cfy;
        this.smt = false;
        this.hzi();
        this.jpa.wsr();
        this.jpa.xxb(this.qlj.aar)
    };
    this.oqb = function () {
        this.jpa.sxd({
            type: "roundStarted",
            sender: this.jpa.rmd,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.jpa.jos(this.jpa.cfy)
            }
        });
        this.jpa.state = this.qlj.apw;
        this.jpa.oam = this.qlj.wea;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.hio = this.qlj.hio;
        this.jpa.lmy = this.qlj.bxm;
        this.jpa.win = this.qlj.win;
        for (var a = 0; a < this.qlj.gxj.length; a++) {
            this.jpa.yzy[a] = this.qlj.gxj[a]
        }
        this.jpa.wwz = false;
        if (this.jpa.riv && this.jpa.win > 0) {
            this.jpa.riv.fai(this.qlj.fqn[0], this.qlj.fqn, true)
        }
        this.hzi();
        this.jpa.urs();
        this.jpa.xxb(this.qlj.aar)
    };
    this.pwh = function () {
        this.jpa.state = this.qlj.apw;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.win = this.qlj.win;
        if (this.jpa.riv) {
            this.jpa.riv.fai(this.qlj.fqn[0], this.qlj.fqn, false)
        }
        this.jpa.wpe();
        this.jpa.xxb(this.qlj.aar)
    };
    this.okv = function () {
        this.jpa.state = this.qlj.apw;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.win = this.qlj.win;
        this.jpa.cpm();
        this.jpa.xxb(this.qlj.aar)
    };
    this.wlq = function () {
        this.jpa.sxd({
            type: "roundStarted",
            sender: this.jpa.rmd,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.jpa.jos(this.jpa.cfy)
            }
        });
        this.jpa.state = this.qlj.apw;
        this.jpa.oam = this.qlj.wea;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.hio = this.qlj.hio;
        this.jpa.lmy = this.qlj.bxm;
        this.jpa.win = this.qlj.win;
        for (var a = 0; a < this.qlj.gxj.length; a++) {
            this.jpa.yzy[a] = this.qlj.gxj[a]
        }
        this.jpa.wwz = (this.qlj.sjm > this.jpa.sjm);
        this.jpa.enj = this.qlj.enj;
        this.jpa.yxy = this.qlj.yxy;
        this.jpa.elz = this.qlj.elz;
        this.jpa.sjm = this.qlj.sjm;
        this.jpa.crp = this.qlj.sjm;
        this.jpa.wyb = this.qlj.wyb;
        this.hzi();
        this.jpa.ezj();
        this.jpa.xxb(this.qlj.aar)
    };
    this.asa = function () {
        this.jpa.state = this.qlj.apw;
        this.jpa.eke = this.qlj.uwr;
        this.jpa.oam = this.qlj.wea;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.hio = this.qlj.hio;
        this.jpa.lmy = this.qlj.bxm;
        this.jpa.win = this.qlj.win;
        for (var a = 0; a < this.qlj.gxj.length; a++) {
            this.jpa.yzy[a] = this.qlj.gxj[a]
        }
        this.jpa.wwz = (this.qlj.sjm > this.jpa.sjm);
        this.jpa.enj = this.qlj.enj;
        this.jpa.yxy = this.qlj.yxy;
        this.jpa.elz = this.qlj.elz;
        this.jpa.sjm = this.qlj.sjm;
        this.jpa.crp = this.qlj.sjm;
        this.jpa.wyb = this.qlj.wyb;
        this.hzi();
        this.jpa.oqz();
        this.jpa.xxb(this.qlj.aar)
    };
    this.ior = function () {
        this.jpa.state = this.qlj.apw;
        this.jpa.eke = this.qlj.uwr;
        this.jpa.oam = this.qlj.wea;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.hio = this.qlj.hio;
        this.jpa.lmy = this.qlj.bxm;
        this.jpa.win = this.qlj.win;
        for (var a = 0; a < this.qlj.gxj.length; a++) {
            this.jpa.yzy[a] = this.qlj.gxj[a]
        }
        this.jpa.wwz = (this.qlj.sjm > this.jpa.sjm);
        this.jpa.crp = this.jpa.sjm;
        this.jpa.enj = this.qlj.enj;
        this.jpa.yxy = this.qlj.yxy;
        this.jpa.elz = this.qlj.elz;
        this.jpa.sjm = this.qlj.sjm;
        this.jpa.wyb = this.qlj.wyb;
        this.hzi();
        this.jpa.lbq();
        this.jpa.xxb(this.qlj.aar)
    };
    this.xoh = function () {
        this.jpa.state = this.qlj.apw;
        this.jpa.eke = this.qlj.uwr;
        this.jpa.oam = this.qlj.wea;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.hio = this.qlj.hio;
        this.jpa.lmy = this.qlj.bxm;
        this.jpa.win = this.qlj.win;
        for (var a = 0; a < this.qlj.gxj.length; a++) {
            this.jpa.yzy[a] = this.qlj.gxj[a]
        }
        this.jpa.wwz = (this.qlj.sjm > this.jpa.sjm);
        this.jpa.crp = this.jpa.sjm;
        this.jpa.enj = this.qlj.enj;
        this.jpa.yxy = this.qlj.yxy;
        this.jpa.elz = this.qlj.elz;
        this.jpa.sjm = this.qlj.sjm;
        this.jpa.wyb = this.qlj.wyb;
        this.hzi();
        this.jpa.jre();
        this.jpa.xxb(this.qlj.aar)
    };
    this.ywx = function () {
        this.jpa.state = this.qlj.apw;
        this.jpa.eke = this.qlj.uwr;
        this.jpa.oam = this.qlj.wea;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.hio = this.qlj.hio;
        this.jpa.lmy = this.qlj.bxm;
        this.jpa.win = this.qlj.win;
        for (var a = 0; a < this.qlj.gxj.length; a++) {
            this.jpa.yzy[a] = this.qlj.gxj[a]
        }
        if (this.jpa.riv && this.jpa.win > 0) {
            this.jpa.riv.etp.tvc("history", "#fai", [this.qlj.fqn])
        }
        this.jpa.wwz = (this.qlj.sjm > this.jpa.sjm);
        this.jpa.enj = this.qlj.enj;
        this.jpa.yxy = this.qlj.yxy;
        this.jpa.elz = this.qlj.elz;
        this.jpa.sjm = this.qlj.sjm;
        this.jpa.crp = this.qlj.sjm;
        this.jpa.wyb = this.qlj.wyb;
        this.hzi();
        this.jpa.kjb();
        this.jpa.xxb(this.qlj.aar)
    };
    this.xak = function () {
        this.jpa.state = this.qlj.apw;
        this.jpa.eke = this.qlj.uwr;
        this.jpa.oam = this.qlj.wea;
        this.jpa.cfy = this.qlj.cfy;
        this.jpa.hio = this.qlj.hio;
        this.jpa.lmy = this.qlj.bxm;
        this.jpa.win = this.qlj.win;
        for (var a = 0; a < this.qlj.gxj.length; a++) {
            this.jpa.yzy[a] = this.qlj.gxj[a]
        }
        this.jpa.wwz = (this.qlj.sjm > this.jpa.sjm);
        this.jpa.enj = this.qlj.enj;
        this.jpa.yxy = this.qlj.yxy;
        this.jpa.elz = this.qlj.elz;
        this.jpa.sjm = this.qlj.sjm;
        this.jpa.crp = this.qlj.sjm;
        this.jpa.wyb = this.qlj.wyb;
        this.hzi();
        this.jpa.ulp();
        this.jpa.xxb(this.qlj.aar)
    };
    this.hzi = function () {
        this.jpa.lym = this.qlj.lym;
        this.jpa.mzg = this.qlj.mzg;
        this.jpa.tgs = this.qlj.tgs;
        this.jpa.bbe = this.qlj.bbe;
        this.jpa.nuk = this.qlj.nuk;
        this.jpa.qte = this.qlj.qte;
        this.jpa.zqc = this.qlj.zqc;
        if (this.jpa.nuk > 0 && this.jpa.bbe < this.jpa.nuk) {
            this.jpa.lmy = this.qlj.sda
        }
        this.jpa.xuj = this.qlj.xuj
    };
    this.adj = function () {
        return false
    }
}
ysz.prototype = new dmi;

function bds() {
    var a = this;
    this.psc = false;
    this.loo = -1;
    this.mok = 0;
    this.upc = null;
    this.gpl = 3;
    this.dbz = 0;
    this.lyi = null;
    this.tsa = null;
    this.ryi = false;
    this.ieu = false;
    this.gjl = false;
    this.chb = [];
    this.dwf = null;
    this.eqb = false;
    this.qhd = [];
    this.otl = false;
    this.zoh = null;
    this.paa = null;
    this.nwk = 0;
    this.vyi = 0;
    this._y = 0;
    this._d = 0;
    this.qzb = 0;
    this.yoc = 4;
    this.jfu = 2;
    this.dda = 9;
    this.izy = true;
    this.jgl = 0;
    this.awj = -1;
    this.qnn = 0;
    this.bou = -1;
    this.dqm = -1;
    this.aia = -1;
    this.jgg = false;
    this.tvs = [];
    this.zvu = 0;
    this.sjt = 0;
    this.jrm = 0;
    this.jzc = 89;
    this.nsa = 0;
    this.wrn = 0;
    this.vah = null;
    this.ifm = null;
    this.elh = 0;
    this.ddk = 0;
    this.neu = [];
    this.ehx = [];
    this.cdq = [];
    this.whj = [];
    this.yfc = [];
    this.yfy = function (f, k, j, c, b, d, g, e) {
        bds.prototype.yfy.call(this, f, k, j);
        this.gpl = d;
        this.jgl = this.height / this.gpl;
        this.upc = b;
        this.tsa = g;
        this.vyi = e;
        this.nwk = Math.round(c);
        this.lyi = [];
        this.dbz = 0;
        this.qzb = 0;
        this.dda = Math.round(this.nwk / 20);
        this.yoc = Math.round(this.nwk / 12);
        this.jfu = Math.round(this.nwk / 2);
        this.qhd.length = 0
    };
    this.psg = function (b) {
        try {
            this.zoh = b.npf;
            this.paa = b.utj
        } catch (c) {
            console.error(c)
        }
    };
    this.zlp = function (c, b) {
        bds.prototype.zlp.call(this, c);
        try {
            this.nwk = Math.round(b);
            this.dda = Math.round(this.nwk / 20);
            this.yoc = Math.round(this.nwk / 12);
            this.jfu = Math.round(this.nwk / 2);
            this._y = this.y + (this.gpl - 1) * this.jgl
        } catch (d) {
            console.error(d)
        }
    };
    this.fpy = function (b, e) {
        var d = b - this.x - ((this.parent.nkw()) ? this.parent.utg.bkx.cuz.x : 0),
            c = e - this.y - ((this.parent.nkw()) ? this.parent.utg.bkx.cuz.y : 0);
        if (d >= 0 && d <= this.width && c >= 0 && c <= this.height) {
            if (this.parent.tpx && this.parent.qud && !this.parent.bye && !this.psc && this.parent.owk()) {
                this.coh()
            } else {
                if (!this.parent.tpx) {
                    if (bio.pql.value43) {
                        if (this.parent.zua()) {
                            this.parent.irl();
                            if (this.parent.ywg) {
                                this.parent.ywg.etp.zwf("buttons", "#ntl", [true])
                            }
                        }
                    } else {
                        if (this.otl) {
                            this.awj = c;
                            this.qnn = 0;
                            this.parent.vka();
                            this.parent.sim();
                            this.parent.huq()
                        }
                    }
                }
            }
            return true
        }
        return false
    };
    this.gnx = function () {
        if (this.awj >= 0) {
            this.jst();
            return true
        }
        return false
    };
    this.edn = function (b, f, c) {
        var e = b - this.x - ((this.parent.nkw()) ? this.parent.utg.bkx.cuz.x : 0),
            d = f - this.y - ((this.parent.nkw()) ? this.parent.utg.bkx.cuz.y : 0);
        if (this.awj >= 0) {
            if (e >= 0 && e <= this.width && d >= 0 && d <= this.height) {
                if (d > this.awj) {
                    this.nsa = mxx(this.fpd)
                } else {
                    if (d < this.awj) {
                        this.nsa = mxx(this.ijs)
                    }
                }
                this.awj = d;
                if (c) {
                    clearTimeout(this.wrn);
                    this.wrn = setTimeout(this.jst, 500)
                }
                return true
            } else {
                this.jst();
                return true
            }
        }
        return false
    };
    this.jvb = function () {
        var g = 0,
            k = 0,
            d = 0;
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        if (this.dbz >= 0) {
            this.context2D.save();
            if (this.parent.csb === false) {
                this.context2D.beginPath();
                this.context2D.rect(this.x, this.y, this.width, this.height);
                this.context2D.closePath();
                this.context2D.clip()
            }
            if (this.ifm != null) {
                this.context2D.drawImage(this.ifm, this.x + this.elh, this.y + this.ddk, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            for (var f = 0, b = this.ehx.length; f < b; f++) {
                if (this.ehx[f]) {
                    this.context2D.drawImage(this.ehx[f].ssi, this.ehx[f].lci * this.width, 0, this.width, this.ehx[f].ssi.height, this.x, this.y + f * this.jgl, this.width, this.ehx[f].ssi.height)
                }
            }
            g = this._y - this.height + this.qnn;
            for (var f = 0; f < this.gpl + 1; f++) {
                k = this.dbz + f;
                d = this.lyi[k];
                try {
                    if (this.gjl === false) {
                        this.context2D.drawImage(this.upc[d], this.x, g)
                    } else {
                        this.context2D.drawImage(this.chb[d], this.x, g)
                    }
                } catch (l) {
                    if (!this.parent.ipo) {
                        console.error("can not display image " + this.upc.length + "" + d + "" + k + "" + this.lyi.length + "" + this.lyi)
                    }
                }
                g += this.jgl
            }
            g = this._y - this.height;
            for (var f = 0; f < this.gpl + 1; f++) {
                k = this.dbz + f;
                d = this.lyi[k];
                try {
                    for (var c = 0, b = this.tvs.length; c < b; c++) {
                        if (this.tvs[c] == d && this.neu[d] && (this.neu[d].fhm || !this.neu[d].rdu)) {
                            this.context2D.drawImage(this.neu[d].ssi, this.neu[d].lci * this.width, 0, this.width, this.neu[d].ssi.height, this.x, g + (this.jgl - this.neu[d].ssi.height) / 2, this.width, this.neu[d].ssi.height);
                            break
                        }
                    }
                } catch (l) {
                    if (!this.parent.ipo) {
                        console.error("can not display image " + this.neu.length + "" + d + "" + k + "" + this.lyi.length + "" + this.lyi)
                    }
                }
                g += this.jgl
            }
            for (var f = 0, b = this.qhd.length; f < b; f++) {
                if (this.qhd[f]) {
                    this.context2D.drawImage(this.qhd[f], this.x, this.y + f * this.jgl)
                }
            }
            for (var f = 0, b = this.cdq.length; f < b; f++) {
                if (this.cdq[f]) {
                    this.context2D.drawImage(this.cdq[f].ssi, this.cdq[f].lci * this.width, 0, this.width, this.cdq[f].ssi.height, this.x, this.y + f * this.jgl, this.width, this.cdq[f].ssi.height)
                }
            }
            if (this.ryi) {
                this.context2D.fillStyle = this.zoh;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.ieu) {
                this.context2D.fillStyle = this.paa;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.vah != null) {
                this.context2D.drawImage(this.vah, this.x, this.y)
            }
            this.context2D.restore();
            if (this.lhh && this.ien) {
                this.lhh.drawImage(this.ien, this.x, this.y)
            }
        }
    };
    this.gmn = function (b) {
        this.dqm = -1;
        this.aia = -1;
        this.mok = b;
        this.psc = false;
        this.bou = -1;
        this.dbz = 0;
        this.izy = true;
        this.loo = -1;
        this.lyi.length = this.vyi;
        for (var c = 0; c <= this.gpl; c++) {
            this.lyi[this.lyi.length - 1 - this.gpl + c] = this.lyi[c]
        }
        this.dbz = this.lyi.length - 1 - this.gpl;
        this.izy = true;
        this.hbi(false)
    };
    this.kge = function (d, f) {
        for (var b = 0; b < this.vyi; b++) {
            if (b < this.tsa.length) {
                this.lyi[b] = this.tsa[b]
            } else {
                var c = b % this.tsa.length;
                this.lyi[b] = this.tsa[c]
            }
        }
        if (f) {
            var e = (this.gpl > 1) ? d - 2 : d - 1;
            if (e < 0) {
                e = this.tsa.length + e
            }
            for (var b = 0; b <= this.gpl; b++) {
                this.lyi[b] = this.tsa[e];
                e += 1;
                if (e == this.tsa.length) {
                    e = e - this.tsa.length
                }
            }
        }
        this.dbz = 0;
        this._y = this.y + (this.gpl - 1) * this.jgl
    };
    this.coh = function () {
        this.eqb = true;
        if (this.dbz > this.gpl) {
            var c = this.dbz;
            var d = this.gpl;
            for (var b = 0; b <= this.gpl; b++) {
                this.lyi[d + b + 1] = this.lyi[c + b]
            }
            this.dbz = this.gpl + 1
        }
    };
    this.ssx = function () {
        this.dbz = 0;
        this.bou = 0;
        this.aoq()
    };
    this.fpd = function () {
        if (a.qnn < a.jgl / 4) {
            a.qnn = a.qnn + 2;
            if (a.parent.csb === false) {
                a.jvb()
            } else {
                a.parent.hgo()
            }
        }
    };
    this.ijs = function () {
        if (a.qnn > 0) {
            a.qnn = a.qnn - 2;
            if (a.parent.csb === false) {
                a.jvb()
            } else {
                a.parent.hgo()
            }
        }
    };
    this.jst = function () {
        clearTimeout(a.wrn);
        a.parent.dss();
        if (a.qnn > 0) {
            a.ijs();
            a.nsa = mxx(a.jst)
        } else {
            a.qum()
        }
    };
    this.qum = function () {
        uvn(this.nsa);
        this.awj = -1;
        this.qnn = 0
    };
    this.leg = function (c) {
        if (this.qnn > 0) {
            this.qnn = 0
        }
        if (this.gpl === 1 && this.bou < 0 && this.dqm >= 0 && this._y === this.y + this.height - this.nwk) {
            this.vps(this.dqm, this.aia, this.jgg)
        }
        if (this.dbz >= 0) {
            if (this.dbz > 0) {
                if (!this.eqb || !this.parent.gss) {
                    this._y += this.nwk;
                    this._d += this.nwk
                } else {
                    this._y += (this.nwk + this.nwk / 2);
                    this._d += (this.nwk + this.nwk / 2)
                }
            } else {
                if (this.dbz == 0) {
                    if (this.bou == -1) {
                        this.loo += 1;
                        this.dbz = this.mok - 1 - this.gpl;
                        this._y += this.nwk;
                        this._d += this.nwk;
                        for (var b = 0; b <= this.gpl; b++) {
                            this.lyi[this.mok - 1 - this.gpl + b] = this.lyi[b]
                        }
                    } else {
                        if (this.qzb < this.jfu && this.izy) {
                            this._y += this.yoc;
                            this.qzb += this.yoc;
                            if (this.qzb >= this.jfu) {
                                this.izy = false
                            }
                        } else {
                            if (this.qzb > 0 && !this.izy) {
                                this._y -= this.dda;
                                this.qzb -= this.dda;
                                if (this.qzb <= 0) {
                                    this.psc = true;
                                    this.eqb = false;
                                    if (typeof this.dnq === "function") {
                                        this.dnq()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this._d > this.jgl - this.nwk && this.dbz > 0) {
                if (c && this.bou >= 0) {
                    if (this.dbz == 1) {
                        if (typeof this.hhb === "function") {
                            this.hhb()
                        }
                        if (this.dwf) {
                            this.dwf.play()
                        }
                        if (!this.parent.orl && !this.parent.igd) {
                            if (this.fgd()) {
                                this.apg()
                            }
                        }
                    }
                }
                this.dbz -= 1;
                this._d = 0;
                this._y = this.y + (this.gpl - 1) * this.jgl
            }
        }
    };
    this.kmz = function (e, c, f) {
        for (var d = 0, b = this.cdq.length; d < b; d++) {
            if (this.cdq[d]) {
                if (this.cdq[d].jzr === false && this.cdq[d].lci < this.cdq[d].whe - 1) {
                    this.cdq[d].lci += 1
                } else {
                    if (this.cdq[d].jzr === true && this.cdq[d].lci > 0) {
                        this.cdq[d].lci -= 1
                    } else {
                        if (this.cdq[d].loop === true) {
                            this.cdq[d].lci = (this.cdq[d].jzr === false) ? 0 : this.cdq[d].whe - 1
                        } else {
                            if (this.cdq[d].zln === true) {
                                this.cdq[d] = null
                            }
                        }
                    }
                }
            }
        }
        if (f && f === true) {
            this.jvb()
        }
    };
    this.rul = function () {
        for (var c = 0, b = this.cdq.length; c < b; c++) {
            if (this.cdq[c] && ((this.cdq[c].jzr === false && this.cdq[c].lci < this.cdq[c].whe - 1) || (this.cdq[c].jzr === true && this.cdq[c].lci > 0))) {
                return true
            }
        }
        return false
    };
    this.adh = function (d) {
        for (var c = 0, b = this.ehx.length; c < b; c++) {
            if (this.ehx[c]) {
                if (this.ehx[c].jzr === false && this.ehx[c].lci < this.ehx[c].whe - 1) {
                    this.ehx[c].lci += 1
                } else {
                    if (this.ehx[c].jzr === true && this.ehx[c].lci > 0) {
                        this.ehx[c].lci -= 1
                    } else {
                        if (this.ehx[c].loop === true) {
                            this.ehx[c].lci = (this.ehx[c].jzr === false) ? 0 : this.ehx[c].whe - 1
                        } else {
                            if (this.ehx[c].zln === true) {
                                this.ehx[c] = null
                            }
                        }
                    }
                }
            }
        }
        if (d && d === true) {
            this.jvb()
        }
    };
    this.zab = function () {
        for (var c = 0, b = this.ehx.length; c < b; c++) {
            if (this.ehx[c] && ((this.ehx[c].jzr === false && this.ehx[c].lci < this.ehx[c].whe - 1) || (this.ehx[c].jzr === true && this.ehx[c].lci > 0))) {
                return true
            }
        }
        return false
    };
    this.qqo = function (d, c, b) {
        this.dqm = d;
        this.aia = c;
        this.jgg = b;
        if (this.gpl > 1) {
            this.vps(this.dqm, this.aia, this.jgg)
        }
    };
    this.vps = function (j, g, d) {
        var k = 0,
            c = 0,
            e = 0,
            b = [];
        this.loo = -1;
        this.bou = j;
        k = (this.gpl > 1) ? this.bou - 2 : this.bou - 1;
        if (k < 0) {
            k = this.tsa.length + k
        }
        c = (d === true) ? this.lyi.length + g : this.gpl + g + 1;
        for (var f = 0; f <= this.gpl; f++) {
            e = this.dbz + f;
            if (e >= this.lyi.length) {
                e = e - this.lyi.length
            }
            b[f] = this.lyi[e]
        }
        for (var f = 0; f < c; f++) {
            this.lyi[f] = this.tsa[k];
            k += 1;
            if (k == this.tsa.length) {
                k = k - this.tsa.length
            }
        }
        this.dbz = this.gpl + g + 1;
        for (var f = 0; f <= this.gpl; f++) {
            this.lyi[this.dbz + f] = b[f]
        }
        this.hbi(true);
        this.dqm = -1;
        this.aia = -1;
        this.jgg = false
    };
    this.hbi = function (k) {
        var d = -1,
            n = -1,
            b = 0,
            o = true,
            e = false,
            m = 0,
            l = 0;
        if (this.whj.length > 0 && this.yfc.length > 0) {
            if (k) {
                for (var g = 0; g < this.whj.length; g++) {
                    for (var f = 0; f < this.whj[g].length - 1; f++) {
                        if (this.lyi[this.gpl] == this.whj[g][f]) {
                            d = f;
                            n = g
                        }
                    }
                }
                if (n >= 0 && d >= 0 && d < this.whj[n].length - 1) {
                    if (this.gpl + this.whj[n].length - d - 1 < this.dbz) {
                        for (var g = d + 1, f = 1; g < this.whj[n].length; g++, f++) {
                            this.lyi[this.gpl + f] = this.whj[n][g]
                        }
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.whj.length; g++) {
                for (var f = 1; f < this.whj[g].length; f++) {
                    if (this.lyi[this.dbz] == this.whj[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d > 0) {
                if (this.dbz - d > this.gpl) {
                    for (var g = d - 1, f = 1; g >= 0; g--, f++) {
                        this.lyi[this.dbz - f] = this.whj[n][g]
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.whj.length; g++) {
                for (var f = 0; f < this.whj[g].length; f++) {
                    if (this.lyi[this.dbz + this.gpl] == this.whj[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d >= 0 && d < this.whj[n].length - 1) {
                if (!k) {
                    for (var g = d + 1; g < this.whj[n].length; g++) {
                        this.lyi[m++] = this.whj[n][g]
                    }
                } else {
                    if (this.dbz + this.gpl + this.whj[n].length - d - 1 < this.lyi.length) {
                        for (var g = d + 1, f = 1; g < this.whj[n].length; g++, f++) {
                            this.lyi[this.dbz + this.gpl + f] = this.whj[n][g]
                        }
                    }
                }
            }
            m = (k) ? this.gpl + 1 : m;
            l = (k) ? this.lyi.length : this.dbz;
            for (var c = m; c < l; c++) {
                if (k == false || (c < this.dbz || c > this.dbz + this.gpl)) {
                    d = -1;
                    n = -1;
                    for (var g = 0; g < this.whj.length; g++) {
                        for (var f = 0; f < this.whj[g].length; f++) {
                            if (this.lyi[c] == this.whj[g][f]) {
                                d = f;
                                n = g
                            }
                        }
                    }
                    if (n >= 0 && d >= 0) {
                        o = true;
                        b = 0;
                        for (var g = 0; g < this.whj[n].length && o; g++) {
                            if (this.lyi[c - d + g] != this.whj[n][g]) {
                                o = false
                            } else {
                                b++
                            }
                        }
                        if (o) {
                            c += this.whj[n].length - d - 1
                        } else {
                            if (b == 0) {
                                this.lyi[c] = this.yfc[Math.floor(Math.random() * this.yfc.length)]
                            } else {
                                if (b == this.whj[n].length - 1 && (c + b < this.dbz || c + b > this.dbz + this.gpl) && c + b < this.lyi.length) {
                                    e = false;
                                    for (var g = 0; g < this.whj.length && !e; g++) {
                                        for (var f = 0; f < this.whj[g].length && !e; f++) {
                                            if (this.lyi[c + b] == this.whj[g][f]) {
                                                e = true
                                            }
                                        }
                                    }
                                    if (!e) {
                                        this.lyi[c + b] = this.whj[n][this.whj[n].length - 1];
                                        c += b
                                    } else {
                                        this.lyi[c] = this.yfc[Math.floor(Math.random() * this.yfc.length)]
                                    }
                                } else {
                                    for (var q = 0; q < b; q++) {
                                        if (c + q < this.dbz || c + q > this.dbz + this.gpl) {
                                            this.lyi[c + q] = this.yfc[Math.floor(Math.random() * this.yfc.length)]
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
    this.wsn = function (b) {
        this.otl = b
    };
    this.hon = function () {
        return this.otl
    };
    this.fgd = function () {
        for (var c = 0, b = this.tvs.length; c < b; c++) {
            if (this.tvs[c] >= 0) {
                return true
            }
        }
        return false
    };
    this.rwg = function (b) {
        this.tvs = b
    };
    this.qmk = function (b) {
        return this.tvs
    };
    this.apg = function () {
        for (var d = 0, b = this.tvs.length; d < b; d++) {
            var c = this.neu[this.tvs[d]];
            if (c) {
                c.fhm = true;
                c.fem = c.loop;
                c.rdu = c.zln
            }
        }
        if (this.parent.csb === false) {
            this.jvb()
        } else {
            this.parent.hgo()
        }
        this.jrm = 0;
        this.sjt = new Date().getTime();
        this.gdc()
    };
    this.aoq = function () {
        for (var c = 0, b = this.neu.length; c < b; c++) {
            if (this.neu[c]) {
                this.neu[c].fhm = false
            }
        }
        clearTimeout(this.zvu)
    };
    this.dii = function () {
        for (var c = 0, b = this.neu.length; c < b; c++) {
            if (this.neu[c]) {
                this.neu[c].fem = false
            }
        }
    };
    this.txv = function () {
        for (var c = 0, b = this.neu.length; c < b; c++) {
            if (this.neu[c]) {
                this.neu[c].rdu = true;
                this.neu[c].lci = 0
            }
        }
    };
    this.xpi = function () {
        for (var c = 0, b = this.neu.length; c < b; c++) {
            if (this.neu[c] && this.neu[c].fhm) {
                return true
            }
        }
        return false
    };
    this.gdc = function () {
        var f = true,
            d = null;
        a.jrm++;
        for (var e = 0, b = a.tvs.length; e < b; e++) {
            d = a.neu[a.tvs[e]];
            if (d && d.fhm) {
                d.lci = (d.lci < d.whe - 1) ? d.lci + 1 : (d.rdu) ? 0 : d.lci;
                if ((d.lci === 0 && d.fem === false) || (d.lci === d.whe - 1 && d.rdu === false)) {
                    d.fhm = false
                }
                if (f === true && d.fhm === true) {
                    f = false
                }
            }
        }
        if (a.parent.csb === false) {
            a.jvb()
        } else {
            a.parent.hgo()
        }
        if (f === false) {
            var c = (a.jrm * a.jzc - (new Date().getTime() - a.sjt));
            if (c < 2) {
                c = 0
            }
            a.zvu = setTimeout(a.gdc, c)
        } else {
            clearTimeout(a.zvu);
            a.parent.fjh()
        }
    };
    this.aza = function (d) {
        for (var c = 0, b = d.length; c < b; c++) {
            if (d[c]) {
                this.neu[c] = {};
                this.neu[c].ssi = d[c].ssi;
                this.neu[c].loop = d[c].loop;
                this.neu[c].zln = d[c].zln;
                this.neu[c].whe = this.neu[c].ssi.width / this.width;
                this.neu[c].lci = 0;
                this.neu[c].fhm = false;
                this.neu[c].fem = false;
                this.neu[c].rdu = true
            }
        }
    };
    this.dwv = function (b, c, d) {
        this.ifm = b;
        this.elh = c;
        this.ddk = d
    };
    this.lfx = function (b) {
        this.vah = b
    };
    this.mqg = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.cdq[f] = {
            ssi: e,
            lci: 0,
            whe: e.width / this.width,
            loop: b,
            zln: d,
            jzr: c
        }
    };
    this.pba = function () {
        return this.cdq
    };
    this.xiw = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.ehx[f] = {
            ssi: e,
            lci: 0,
            whe: e.width / this.width,
            loop: b,
            zln: d,
            jzr: c
        }
    };
    this.tfq = function () {
        return this.ehx
    };
    this.nyx = function (g, c) {
        this.whj = [];
        this.yfc = [];
        for (var f = 0, b = g.length; f < b; f++) {
            this.whj[f] = [];
            for (var e = 0, d = g[f].length; e < d; e++) {
                this.whj[f][e] = g[f][e]
            }
        }
        for (var f = 0, b = c.length; f < b; f++) {
            this.yfc[f] = c[f]
        }
    };
    this.hhb = null;
    this.dnq = null
}
bds.prototype = new idn;
bio.tfo = {
    ioz: {
        sfw: 0,
        azu: 1,
        bwl: 2,
        qqg: 3,
        bsz: 4,
        cku: 5,
        owv: 6,
        vhl: 7,
        zmd: 8,
        jfv: 9,
        eql: 10,
        kag: 11,
        agm: 12,
        jvt: 13,
        nws: 14,
        net: 15,
        gio: 16,
        oof: 20,
        ovi: 21,
        xbj: 22,
        fhg: 23,
        zex: 24,
        wgq: 25,
        ymv: 30,
        kjm: 31,
        dpr: 32,
        ago: 33,
        jjr: 68
    }
};

function umh() {
    this.ekb = null;
    this.pwk = null;
    this.ssk = null;
    this.pzc = null;
    this.qde = null;
    this.xrv = [];
    this.ywg = null;
    this.tup = null;
    this.hbe = null;
    this.riv = null;
    this.pee = null;
    this.dlt = null;
    this.zrh = null;
    this.niq = null;
    this.oam = [];
    this.yzy = [];
    this.win = 0;
    this.cqc = 1;
    this.lmy = 0;
    this.totalBet = 1000;
    this.vvn = [];
    this.yfe = 0;
    this.gly = 0;
    this.hio = 10;
    this.cfy = 0;
    this.ina = 0;
    this.gxj = [];
    this.ppx = 0;
    this.xll = -1;
    this.imq = -1;
    this.hxu = -1;
    this.r1 = [];
    this.r2 = [];
    this.r3 = [];
    this.r4 = [];
    this.r5 = [];
    this.r6 = [];
    this.r7 = [];
    this.r8 = [];
    this.r9 = [];
    this.dnk = [];
    this.onb = [];
    this.rzi = [];
    this.nrb = [];
    this.akl = [];
    this.syh = [];
    this.crs = 3;
    this.qmi = 5;
    this.she = [];
    this.vmz = 1;
    this.mhp = 1;
    this.aod = 1;
    this.itn = [];
    this.eke = null;
    this.auz = false;
    this.elz = 0;
    this.wyb = 1;
    this.sjm = 0;
    this.crp = 0;
    this.enj = 0;
    this.yxy = 0;
    this.any = true;
    this.wwz = false;
    this.bea = false;
    this.jmv = false;
    this.ryv = false;
    this.ofl = false;
    this.idu = false;
    this.urk = 1;
    this.bgc = true;
    this.lym = "";
    this.afj = false;
    this.twj = false;
    this.kdv = false;
    this.okb = true;
    this.uyq = false;
    this.nuk = 0;
    this.bbe = 0;
    this.qte = 0;
    this.zqc = "";
    this.mzg = "";
    this.tgs = "";
    this.rdx = null;
    this.orl = true;
    this.ixu = false;
    this.tpx = false;
    this.eds = 20;
    this.ywk = true;
    this.qud = false;
    this.qkh = false;
    this.owe = [15, 20, 25, 30, 35];
    this.lwy = [8, 8, 8, 8, 8];
    this.mnp = [0, 0, 0, 0, 0];
    this.pch = this.owe;
    this.asp = 16;
    this.wsy = 16;
    this.pkp = this.asp;
    this.ili = 12;
    this.jrp = 0;
    this.lde = 0;
    this.upc = [];
    this.gss = true;
    this.ypc = false;
    this.yzd = false;
    this.gml = false;
    this.hxy = true;
    this.viu = 0;
    this.rvc = 0;
    this.whu = [];
    this.kok = true;
    this.ugc = false;
    this.xdh = false;
    this.gpf = false;
    this.qnm = false;
    this.puv = false;
    this.dqa = 1;
    this.omq = 400;
    this.bcz = 200;
    this.sgz = 100;
    this.nwj = true;
    this.lft = true;
    this.clv = false;
    this.xbs = [];
    this.xzr = 50;
    this.wim = null;
    this.zwj = null;
    this.xrr = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.enk = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.rvq = false;
    this.dfp = 0;
    this.soz = 0;
    this.wpz = -1;
    this.orf = 0;
    this.jdj = false;
    this.aev = false;
    this.jim = -1;
    this.ioc = false;
    this.vej = true;
    this.fvz = 3;
    this.ovg = false;
    this.trf = 0;
    this.ajt = true;
    this.boj = 330;
    this.ejj = [];
    this.quf = null;
    this.usx = null;
    this.abm = [
        [2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1],
        [3, 3, 3, 3, 3],
        [1, 2, 3, 2, 1],
        [3, 2, 1, 2, 3]
    ];
    this.iio = [];
    this.rfr = 1;
    this.ujg = 5;
    this.jml = 1;
    this.mew = 5;
    this.xnp = true;
    this.fqx = 0;
    this.qws = 0;
    this.skq = 30;
    this.mko = 50;
    this.dkh = false;
    this.qwa = 0;
    this.mdd = 0;
    this.aof = false;
    this.obh = true;
    this.mei = 0;
    this.euy = 0;
    this.xfn = false;
    this.lbp = 0;
    this.nze = false;
    this.wxl = true;
    this.sho = false;
    this.zli = false;
    this.msx = null;
    this.bye = false;
    this.tbt = true;
    this.rqh = 0;
    this.uky = 0;
    this.unc = 0;
    this.leb = 0;
    this.wnz = true;
    this.hsy = null;
    this.avl = false;
    this.bpt = false;
    this.pli = true;
    this.qnb = "";
    this.fac = false;
    this.cou = -1;
    this.uuu = 0;
    this.jwe = 0;
    this.ydx = 0;
    this.nfh = 0;
    this.id = 0;
    this.eef = 0;
    this.jiq = 0;
    this.ujo = 0;
    this.zge = 0;
    this.laj = 0;
    this.qil = -1;
    this.yga = 0;
    this.anb = 0;
    this.ewr = -1;
    this.pgh = 0;
    this.qae = 0;
    this.xyg = -1;
    this.sxd = function (b) {
        if (!bio.yqr.ipo) {
            bio.olq.sxd(b)
        }
    };
    this.jlm = function () {
        var b = new fqg();
        b.yfy();
        return b
    };
    this.iun = function () {
        this.lyz = new kyz()
    };
    this.vdy = function () {
        this.vxp();
        var f = [];
        if (!(this.nuk > 0 && this.bbe < this.nuk)) {
            while (this.lmy < this.yvm()) {
                this.lmy++
            }
            var e = this.qen(this.bea);
            if (this.lmy > e) {
                var d = (e < 0) ? 0 : e;
                this.lmy = d
            }
        }
        this.cqc = this.vvn[this.lmy];
        this.totalBet = this.jcq();
        this.ygi();
        this.vgw();
        this.nrj();
        for (var c = 0, b = this.fcy.tik("symb"); c < b; c++) {
            this.upc[c] = this.fcy.uxh("symb" + c)
        }
        if (bio.pql.value38) {
            f[bio.os.lnj] = "w";
            f[bio.os.fdz] = "l";
            f[bio.os.epk] = "m";
            f[bio.os.elk] = "i";
            f[bio.os.cfd] = "a";
            this.gss = bio.pql.value38[f[bio.olq.uyk]]
        }
    };
    this.uif = function () {
        this.bsj();
        this.twk();
        this.rgy();
        this.mwh();
        this.wss();
        this.igp();
        if (this.wxl) {
            this.tqe()
        }
        if (this.utg.fld) {
            this.rsy();
            this.vkx()
        }
        if (this.utg.chd && !(this.nuk > 0 && this.bbe < this.nuk)) {
            this.zjg();
            if (this.inz()) {
                this.kwi()
            }
        }
        if (this.utg.ysc) {
            this.ttu();
            if (!this.utg.xes) {
                this.ikn()
            }
        }
        if (this.utg.mli) {
            this.xxs()
        }
        if (this.ipo) {
            this.ilx()
        } else {
            this.pev();
            if (this.utg.vmb) {
                this.gix()
            }
            if (this.fah()) {
                this.tmy()
            }
            if (this.obs()) {
                this.orm()
            }
            if (this.ndn() != null && !this.dfx()) {
                this.grn(this.ndn())
            }
        }
        if (!(this.ipo && !this.kjo)) {
            this.xbg();
            this.cst()
        }
        if (this.utg.xes) {
            this.pmf(this.ndn())
        }
        this.czh();
        if (!this.ipo) {
            this.eqt();
            this.bqo()
        }
        if (!this.kjo) {
            this.rfu()
        }
    };
    this.bjm = function () {
        if (!this.rqg) {
            if (this.txp === false) {
                this.ntc.style.marginTop = (-this.height / 2 + this.mcf()) + "px";
                this.ntc.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.ntc.style.left = "0px";
                this.ntc.style.top = "0px";
                this.ntc.style.marginTop = ((this.klu - this.height) / 2 + this.mcf()) + "px";
                this.ntc.style.marginLeft = ((this.pyf - this.width) / 2) + "px"
            }
            this.ntc.style.width = (this.width > this.pyf) ? this.pyf + "px" : this.width + "px";
            this.ntc.style.height = (this.height > this.klu) ? this.klu + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            this.pee = document.createElement("canvas");
            this.pee.width = this.utg.ggj.cuz.width;
            this.pee.height = this.utg.ggj.cuz.height;
            this.dlt = this.pee.getContext("2d");
            if (this.nkw() === true && typeof WebGL2D != "undefined") {
                try {
                    this.bkx = document.getElementById("canvas2");
                    this.bkx.width = Math.round(this.utg.bkx.cuz.width);
                    this.bkx.height = Math.round(this.utg.bkx.cuz.height);
                    WebGL2D.enable(this.bkx);
                    this.vcc = this.bkx.getContext("webgl-2d");
                    this.csb = true;
                    this.zrh = document.createElement("canvas");
                    this.zrh.width = this.utg.ggj.cuz.width;
                    this.zrh.height = this.utg.ggj.cuz.height;
                    this.niq = this.zrh.getContext("2d")
                } catch (b) {
                    this.bkx = null;
                    this.vcc = null;
                    this.csb = false
                }
            }
            if (this.gun) {
                this.gun.style.width = this.width + "px";
                this.gun.style.height = this.height + "px"
            }
            this.offsetLeft = this.ntc.offsetLeft;
            this.offsetTop = this.ntc.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.rqg = true
        }
    };
    this.czh = function () {};
    this.ttu = function () {
        umh.prototype.ttu.call(this);
        var b = this.hfo.brx("topi");
        try {
            if (b) {
                if (bio.pql.value57 === bio.ui.azw || this.ndn() != null) {
                    b.rqw("language", this.fcy.uxh("icon_l"), sessionStorage.sessionValue1, [bio.language.EN, bio.language.DE, bio.language.RU, bio.language.EE, bio.language.ES, bio.language.TR, bio.language.CZ, bio.language.GR, bio.language.AT, bio.language.US, bio.language.BG, bio.language.CO, bio.language.MX, bio.language.CL, bio.language.VE, bio.language.BR, bio.language.GE, bio.language.HU, bio.language.RO, bio.language.PT, bio.language.FR, bio.language.HR, bio.language.IT, bio.language.SE])
                }
                if (this.dfx() === false) {
                    b.ney("help", new String("?"), true)
                }
                if (bio.pql.value27 && this.ujp) {
                    b.rqw("audio", this.fcy.uxh("icon_a"), this.ygv[this.mgc], this.ygv);
                    if (this.nfe() === true) {
                        b.ney("melody", this.fcy.uxh("icon_m"), this.okb)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && bio.olq.bqr()) {
                    b.ney("fullscreen", this.fcy.uxh("icon_f"), this.iua)
                }
                if (bio.pql.value28 && this.tbt) {
                    b.ney("turbo", this.fcy.uxh("icon_t"), this.bye)
                }
                b.ney("auto", this.fcy.uxh("icon_as"), this.ryv);
                b.ney("gamble", this.fcy.uxh("icon_g"), this.zli)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.ikn = function () {
        umh.prototype.ikn.call(this);
        var c = this.hfo.brx("topb");
        try {
            if (c) {
                if ((bio.pql.value5.length > 1) && (bio.pql.value57 === bio.ui.azw || this.ndn() != null)) {
                    c.wjs("language", this.language.language, this.eig(bio.pql.value5[this.has]), this.rtk, this.lyz.language, 0, 1)
                }
                if (bio.pql.value27 && this.ujp) {
                    c.wjs("audio", this.language.audio, this.fcy.uxh("btn_a"), this.zvh, this.lyz.audio, this.mgc, this.ygv.length);
                    if (this.nfe() === true) {
                        c.wjs("melody", this.language.sxc, this.fcy.uxh("btn_mu"), this.iph, this.lyz.see, (this.okb) ? 1 : 0, 2)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && bio.olq.bqr()) {
                    c.wjs("fullscreen", this.language.iua, this.fcy.uxh("btn_f"), (bio.olq.iza) ? this.qvo : this.ztg, this.lyz.iua, (this.iua) ? 1 : 0, 2)
                }
                if (bio.pql.value28 && this.tbt) {
                    c.wjs("turbo", this.language.bye, this.fcy.uxh("btn_t"), this.qsk, this.lyz.bye, (this.bye) ? 1 : 0, 2)
                }
                c.kxw("help", this.language.umz, this.fcy.uxh("btn_p"), this.twa, this.lyz.fqj);
                if (this.mzg != "" && (bio.pql.value81 && bio.pql.value81.g === true)) {
                    c.kxw("rules", this.language.kjj, this.fcy.uxh("btn_gr"), this.swi, this.lyz.ibd)
                }
                if (bio.pql.value12 && !this.ndk()) {
                    c.kxw("history", this.language.vfc, this.fcy.uxh("btn_h"), this.mzb, this.lyz.vfc)
                }
                if (bio.pql.value36 && !this.ndk()) {
                    c.kxw("statistic", this.language.mik, this.fcy.uxh("btn_st"), this.sqj, this.lyz.mik)
                }
                c.oen()
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.pmf = function (b) {
        umh.prototype.pmf.call(this, b);
        var d = this.hfo.brx("settings"),
            e = "",
            c = 0;
        if (d) {
            if (bio.pql.value5.length > 1) {
                c++;
                d.wjs("language", this.language.language, this.eig(bio.pql.value5[this.has]), this.rtk, 0, 1)
            }
            if (bio.pql.value27 && this.ujp) {
                c++;
                d.wjs("audio", this.language.audio, this.fcy.uxh("btn_a"), this.zvh, this.mgc, this.ygv.length);
                if (this.nfe() === true) {
                    c++;
                    d.wjs("melody", this.language.sxc, this.fcy.uxh("btn_mu"), this.iph, (this.okb) ? 1 : 0, 2)
                }
            }
            if (sessionStorage.sessionValue14 == "true" && bio.olq.bqr()) {
                c++;
                d.wjs("fullscreen", this.language.iua, this.fcy.uxh("btn_f"), this.qvo, (this.iua) ? 1 : 0, 2)
            }
            if (bio.pql.value28 && this.tbt && c < 4) {
                d.wjs("turbo", this.language.bye, this.fcy.uxh("btn_t"), this.qsk, (this.bye) ? 1 : 0, 2)
            }
            d.wjs("gamble", this.language.zli, this.fcy.uxh("btn_g"), this.fhl, (this.zli) ? 1 : 0, 2);
            if (this.vol[this.iaf] === bio.hvg.wms) {
                e = this.language.left
            } else {
                if (this.vol[this.iaf] === bio.hvg.fod) {
                    e = this.language.yud
                } else {
                    if (this.vol[this.iaf] === bio.hvg.dxh) {
                        e = this.language.siw
                    }
                }
            }
            d.wjs("adjustment", e, this.fcy.uxh("btn_l"), this.nzr, (this.igx === bio.utg.uap) ? 0 : 1, 2);
            d.ahk("help", this.language.fqj, this.fcy.uxh("btn_p"), this.twa);
            if (this.mzg != "" && (bio.pql.value81 && bio.pql.value81.g === true)) {
                d.ahk("rules", this.language.jat, this.fcy.uxh("btn_gr"), this.swi)
            }
            if (bio.pql.value12 && !this.ndk()) {
                d.ahk("history", this.language.vfc, this.fcy.uxh("btn_h"), this.mzb)
            }
            if (bio.pql.value36 && !this.ndk()) {
                d.ahk("statistic", this.language.mik, this.fcy.uxh("btn_st"), this.sqj)
            }
            d.bdv = this.inz();
            d.hdv(this.utg.cix);
            d.mey(this.utg.cix);
            d.psg(this.style.cix);
            d.jes(this.language, true)
        }
    };
    this.bsj = function () {
        var b = (this.ipo && this.aib) ? this.utg.wcd : this.utg.mmj;
        this.ywg = new apc();
        this.ywg.parent = this;
        this.ywg.wnz = this.wnz;
        this.ywg.yfy(b.cuz, null, this.context2D);
        this.ywg.hdv(b, this.style.mmj);
        this.ywg.ecx(this.wim, 0);
        this.ywg.ecx(this.zwj, 1)
    };
    this.igp = function () {};
    this.pev = function () {};
    this.cst = function () {
        this.hbe.izp(this.utg.cth, this.style.cth, this.fcy.uxh("btn_s"))
    };
    this.idv = function () {};
    this.etl = function () {};
    this.gix = function () {
        var b = new zek();
        b.yfy(this.utg.top.cuz, null, this.context2D);
        b.parent = this;
        this.hfo.roh("tops", b)
    };
    this.rgy = function () {
        this.ejj = []
    };
    this.twk = function () {
        var e = [],
            c = (this.state == bio.tfo.ioz.owv || this.state == bio.tfo.ioz.eql || this.state == bio.tfo.ioz.kag || this.state == bio.tfo.ioz.agm || this.state == bio.tfo.ioz.nws) ? true : false;
        if (c) {
            if (this.any) {
                e = this.eke
            } else {
                e = this.oam
            }
        } else {
            e = this.oam
        }
        this.ekb = new bds();
        this.pwk = new bds();
        this.ssk = new bds();
        this.pzc = new bds();
        this.qde = new bds();
        this.ekb.dwf = this.fcy.wkz("stop1");
        this.pwk.dwf = this.fcy.wkz("stop2");
        this.ssk.dwf = this.fcy.wkz("stop1");
        if (this.pzc != null) {
            this.pzc.dwf = this.fcy.wkz("stop2")
        }
        if (this.qde != null) {
            this.qde.dwf = this.fcy.wkz("stop1")
        }
        if (this.csb === false) {
            this.ekb.yfy(this.utg.ekb.cuz, this.context2D, null, (this.gss) ? this.utg.ekb.eoj : this.utg.ekb.tlg, this.upc, this.crs, this.r1, this.pch[0])
        } else {
            this.ekb.yfy(this.utg.ekb.muh, this.vcc, null, (this.gss) ? this.utg.ekb.eoj : this.utg.ekb.tlg, this.upc, this.crs, this.r1, this.pch[0])
        }
        this.ekb.kge(e[0], true);
        if (this.csb === false) {
            this.pwk.yfy(this.utg.pwk.cuz, this.context2D, null, (this.gss) ? this.utg.pwk.eoj : this.utg.pwk.tlg, this.upc, this.crs, this.r2, this.pch[1])
        } else {
            this.pwk.yfy(this.utg.pwk.muh, this.vcc, null, (this.gss) ? this.utg.pwk.eoj : this.utg.pwk.tlg, this.upc, this.crs, this.r2, this.pch[1])
        }
        this.pwk.kge(e[1], true);
        if (this.csb === false) {
            this.ssk.yfy(this.utg.ssk.cuz, this.context2D, null, (this.gss) ? this.utg.ssk.eoj : this.utg.ssk.tlg, this.upc, this.crs, this.r3, this.pch[2])
        } else {
            this.ssk.yfy(this.utg.ssk.muh, this.vcc, null, (this.gss) ? this.utg.ssk.eoj : this.utg.ssk.tlg, this.upc, this.crs, this.r3, this.pch[2])
        }
        this.ssk.kge(e[2], true);
        if (this.csb === false) {
            this.pzc.yfy(this.utg.pzc.cuz, this.context2D, null, (this.gss) ? this.utg.pzc.eoj : this.utg.pzc.tlg, this.upc, this.crs, this.r4, this.pch[3])
        } else {
            this.pzc.yfy(this.utg.pzc.muh, this.vcc, null, (this.gss) ? this.utg.pzc.eoj : this.utg.pzc.tlg, this.upc, this.crs, this.r4, this.pch[3])
        }
        this.pzc.kge(e[3], true);
        if (this.csb === false) {
            this.qde.yfy(this.utg.qde.cuz, this.context2D, null, (this.gss) ? this.utg.qde.eoj : this.utg.qde.tlg, this.upc, this.crs, this.r5, this.pch[4])
        } else {
            this.qde.yfy(this.utg.qde.muh, this.vcc, null, (this.gss) ? this.utg.qde.eoj : this.utg.qde.tlg, this.upc, this.crs, this.r5, this.pch[4])
        }
        this.qde.kge(e[4], true);
        this.xrv = [this.ekb, this.pwk, this.ssk, this.pzc, this.qde];
        this.rdx = [true, true, true, true, true];
        for (var d = 0, b = this.xrv.length; d < b; d++) {
            this.xrv[d].parent = this;
            this.xrv[d].psg(this.style.tsa);
            this.xrv[d].lfx(this.fcy.uxh("reelfront"))
        }
    };
    this.xbg = function () {
        this.hbe = new jtr();
        this.hbe.yfy(this.utg.cth.cuz, null, this.context2D);
        this.hbe.parent = this;
        this.hbe.pvu(false);
        this.hbe.mey(this.utg.cth);
        this.hbe.psg(this.style.cth)
    };
    this.tqe = function () {
        var c = this.utg.zli,
            b = this.fcy.uxh("g_back");
        if (this.ipo && this.aib && this.style.yqr.zsq) {
            c = this.utg.bqc;
            b = this.fcy.uxh("m_g_back")
        }
        this.riv = new hzl();
        this.riv.parent = this;
        this.riv.yfy(c.cuz, null, this.context2D);
        this.riv.ssi = b;
        this.riv.hdv(c);
        this.riv.psg(this.style.zli);
        this.riv.ghy();
        this.riv.ecx(this.msx, 0);
        this.riv.tsg(false)
    };
    this.mwh = function () {};
    this.wss = function () {
        this.tup = this.hbp();
        this.tup.parent = this;
        this.tup.quf = this.quf;
        this.tup.ruo = this.sis;
        this.tup.abm = this.abm;
        this.tup.usx = this.usx;
        this.tup.fvz = this.fvz;
        this.tup.gut = this.boj;
        this.tup.uez = this.ejj;
        this.tup.wso = this.rvq;
        this.tup.pjy = (this.jdj == true || this.aev == true);
        this.tup.kyu = this.ajt;
        this.tup.nwj = this.nwj;
        this.tup.mey(this.utg.mrw);
        this.tup.psg(this.style.mrw)
    };
    this.zjg = function () {
        var b = new ifn();
        b.yfy(this.utg.djr.cuz, null, this.context2D);
        b.parent = this;
        b.jsb = this.language.cqc;
        b.npx = this.xcg;
        b.jvv = this.lyz.loc.dye;
        b.gdg = this.lyz.odg.dye;
        b.wqn = this.fcy.uxh("effect");
        b.mey(this.utg.djr);
        b.psg(this.style.jkc);
        b.vdy(this.vvn, this.yvm(), this.qen(false));
        b.ndq(this.hll(), this.qen(true));
        b.wyo(this.lmy, false);
        b.tsg(false);
        this.hfo.roh("betsel", b)
    };
    this.kwi = function () {
        this.itn = [];
        for (var b = this.vmz; b <= this.mhp;) {
            this.itn.push(b);
            b += this.aod
        }
        var c = new lls();
        c.yfy(this.utg.plr.cuz, null, this.context2D);
        c.parent = this;
        c.jsb = this.language.hio;
        c.npx = this.myh;
        c.jvv = this.lyz.mnw.dye;
        c.gdg = this.lyz.fto.dye;
        c.wqn = this.fcy.uxh("effect");
        c.mey(this.utg.plr);
        c.psg(this.style.jkc);
        c.vdy(this.itn, 0, this.itn.length - 1);
        c.hrx(this.hio, false);
        c.tsg(false);
        this.hfo.roh("linesel", c)
    };
    this.xxs = function () {
        this.hfo.roh("llinep", this.kum(this.utg.nmy.cuz.x, this.utg.nmy.cuz.y, this.fcy.uxh("winlines"), this.rfr, this.ujg, this.utg.nmy));
        this.hfo.roh("rlinep", this.kum(this.utg.rfc.cuz.x, this.utg.rfc.cuz.y, this.fcy.uxh("winlines"), this.jml, this.mew, this.utg.rfc));
        this.hfo.tvc("llinep", "#bnf", [this.hio]);
        this.hfo.tvc("rlinep", "#bnf", [this.hio])
    };
    this.rsy = function () {
        var c = new eow(),
            b = this.fcy.uxh("m_win");
        if (this.ipo && this.aib && this.style.yqr.zsq) {
            b = this.fcy.uxh("m_m_win")
        }
        c.yfy(this.utg.oiv.cuz, this.context2D, null, b, "");
        c.parent = this;
        c.mey(this.utg.oiv);
        c.psg(this.style.oiv);
        c.tsg(false);
        this.hfo.roh("winp", c)
    };
    this.vkx = function () {};
    this.ilx = function () {
        var b = new ysd();
        b.yfy(this.utg.vfc.cuz, null, this.context2D);
        b.parent = this;
        b.hdv(this.utg.vfc);
        b.psg(this.style.vfc);
        this.hfo.roh("history", b)
    };
    this.kum = function (b, j, d, g, c, e) {
        var f = new rnr();
        f.yfy(new bku(b, j, 0, 0), this.context2D);
        f.dwo = this.iio;
        f.parent = this;
        f.mcw = g;
        f.nhs = c;
        f.mey(e);
        f.wbz(d);
        f.tsg(true);
        return f
    };
    this.hbp = function () {
        var e = [];
        for (var d = 0, b = this.fcy.tik("symb"); d < b; d++) {
            e[d] = this.fcy.uxh("symb" + d)
        }
        var c = new xrz();
        c.yfy(this.utg.mrw.cuz, null, this.context2D);
        c.vln = e;
        c.yhd = this.fcy.uxh("reelfront");
        c.tsg(false);
        return c
    };
    this.srn = function () {
        if (this.yzd === true) {
            for (var c = 0, b = this.xrv.length; c < b; c++) {
                if (!this.csb) {
                    this.xrv[c].dwv(this.pee, this.utg.ggj.kkk, this.utg.ggj.edr)
                }
            }
            if (this.tup) {
                this.tup.dwv(this.pee, this.utg.ggj.kkk + this.tup.x, this.utg.ggj.edr + this.tup.y)
            }
        }
        if (this.ywg) {
            this.ywg.dwv(this.pee, this.utg.ggj.kkk, this.utg.ggj.edr)
        }
    };
    this.hyv = function (d, c, b) {
        this.sxd({
            type: "gameDataLoaded",
            sender: this.rmd,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                success: true
            }
        });
        this.wui = true;
        this.state = d;
        this.aar = b;
        clearInterval(this.yxk);
        if (this.ujp) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.mgc = 0
            }
            if (this.fcy.ion === true) {
                this.esp(this.ygv[this.mgc])
            } else {
                this.kpi((this.ygv[this.mgc] === 0))
            }
        }
        if (this.igd === true) {
            this.sib = true
        }
        this.vdy();
        this.uif();
        this.vgq();
        this.ndf();
        if (this.riv) {
            this.riv.etp.tvc("history", "#fai", [c])
        }
        this.fud();
        window.mxx(this.tsx)
    };
    this.tsx = function () {
        bio.yqr.xxb(bio.yqr.aar);
        bio.yqr.pes = true;
        bio.yqr.xhv();
        bio.yqr.lah();
        bio.yqr.srn();
        bio.yqr.jvb();
        if (bio.yqr.igd === true) {
            bio.yqr.hkb(true)
        }
        if (bio.olq.uyk === bio.os.cfd && bio.olq.nqd !== bio.uum.ueq) {
            bio.yqr.ebu([{
                umd: bio.una.zgh
            }])
        } else {
            if (bio.yqr.nuk > 0) {
                if (bio.yqr.bbe === 0) {
                    bio.yqr.ebu([{
                        umd: bio.una.nev
                    }])
                } else {
                    if (bio.yqr.bbe < bio.yqr.nuk) {
                        bio.yqr.ebu([{
                            umd: bio.una.cqa
                        }])
                    }
                }
            } else {
                bio.yqr.rlq(bio.yqr.state)
            }
        }
        if (bio.pql.value37 && !bio.yqr.ndk()) {
            bio.yqr.xnh()
        }
        if (bio.yqr.obs()) {
            setTimeout(bio.yqr.jvb, 20)
        }
    };
    this.bxf = function () {
        this.svb = new ysz().yfy(this, bio.pql.value6)
    };
    this.ssn = function () {
        this.svb = new kqg().yfy(this, bio.pql.value6)
    };
    this.fpy = function (q) {
        if (q.preventDefault) {
            q.preventDefault()
        }
        if (q.stopPropagation) {
            q.stopPropagation()
        }
        if (this.sib) {
            return
        }
        var k = 0,
            j = 0,
            u = false,
            l = false,
            f = false,
            v = this.hfo.brx("stats"),
            t = this.hfo.brx("topb"),
            c = this.hfo.brx("topi"),
            d = this.hfo.brx("betsel"),
            n = this.hfo.brx("linesel"),
            o = this.hfo.brx("llinep"),
            w = this.hfo.brx("rlinep"),
            z = this.hfo.brx("finfop"),
            p = this.hfo.brx("finfoc"),
            m = this.hfo.brx("autop"),
            b = this.hfo.brx("settings"),
            g = this.hfo.brx("jwp");
        if (q.touches) {
            var e = q.touches[0];
            u = true;
            if (!this.drb) {
                k = e.pageX - this.offsetLeft;
                j = e.pageY - this.offsetTop
            } else {
                k = Math.round((e.pageX - this.offsetLeft) / this.tqh);
                j = Math.round((e.pageY - this.offsetTop) / this.hds)
            }
        } else {
            if (q.which != 1) {
                return
            }
            if (!this.drb) {
                k = q.pageX - this.offsetLeft;
                j = q.pageY - this.offsetTop
            } else {
                k = Math.round((q.pageX - this.offsetLeft) / this.tqh);
                j = Math.round((q.pageY - this.offsetTop) / this.hds)
            }
        }
        this.ygr();
        if (m && m.kgg()) {
            if (m.fpy(k, j)) {
                return
            }
        }
        if (t && t.kgg()) {
            if (t.fpy(k, j)) {
                clearTimeout(this.pgh);
                return
            } else {
                f = true
            }
        }
        if (d) {
            if (d.kgg()) {
                if (d.fpy(k, j, u)) {
                    clearTimeout(this.pgh);
                    return
                } else {
                    l = true
                }
            }
        }
        if (n) {
            if (n.kgg()) {
                if (n.fpy(k, j, u)) {
                    clearTimeout(this.pgh);
                    return
                } else {
                    l = true
                }
            }
        }
        if (f) {
            this.cge(this.ywg.nkg(k, j, null));
            return
        } else {
            if (l) {
                if ((d && d.hon()) && ((n && n.hon()) || !n)) {
                    this.bql(this.ywg.nkg(k, j, null))
                }
                return
            }
        }
        if (this.inz() && !this.uyq && o && w) {
            if (o.fpy(k, j, l)) {
                return
            } else {
                if (w.fpy(k, j, l)) {
                    return
                }
            }
        }
        if (z) {
            if (z.fpy(k, j)) {
                return
            }
        }
        if (p) {
            if (p.fpy(k, j)) {
                return
            }
        }
        if (b && b.kgg()) {
            if (b.fpy(k, j)) {
                return
            }
        }
        if (c) {
            if (c.fpy(k, j, u)) {
                return
            }
        }
        if (v && v.kgg()) {
            if (v.fpy(k, j)) {
                return
            }
        }
        if (this.hbe && this.hbe.kgg()) {
            if (this.hbe.fpy(k, j)) {
                return
            }
        }
        if (this.riv && this.riv.kgg()) {
            if (this.riv.fpy(k, j)) {
                return
            }
        }
        if (g) {
            if (g.fpy(k, j)) {
                return
            }
        }
        if (this.ywg) {
            if (this.ywg.fpy(k, j, l)) {
                return
            }
        }
        for (var r = 0, s = this.xrv.length; r < s; r++) {
            if (this.xrv[r].fpy(k, j)) {
                return
            }
        }
    };
    this.gnx = function (j) {
        if (j.preventDefault) {
            j.preventDefault()
        }
        if (j.stopPropagation) {
            j.stopPropagation()
        }
        if (this.sib) {
            return
        }
        var k = this.hfo.brx("topb"),
            d = this.hfo.brx("autop"),
            g = this.hfo.brx("settings"),
            c = this.hfo.brx("betsel"),
            e = this.hfo.brx("linesel");
        if (d && d.kgg()) {
            if (d.gnx()) {
                return
            }
        }
        if (c) {
            if (c.gnx()) {
                return
            }
        }
        if (e) {
            if (e.gnx()) {
                return
            }
        }
        if (this.hbe && this.hbe.kgg()) {
            if (this.hbe.gnx()) {
                return
            }
        }
        if (this.riv && this.riv.kgg()) {
            if (this.riv.gnx()) {
                return
            }
        }
        if (this.ywg) {
            if (this.ywg.gnx()) {
                return
            }
        }
        if (k) {
            if (k.gnx()) {
                return
            }
        }
        if (g) {
            if (g.gnx()) {
                return
            }
        }
        for (var f = 0, b = this.xrv.length; f < b; f++) {
            if (this.xrv[f].gnx()) {
                return
            }
        }
    };
    this.ivn = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.sib) {
            return
        }
        var k = false,
            e = false,
            l = this.hfo.brx("topb"),
            b = this.hfo.brx("betsel"),
            d = this.hfo.brx("linesel"),
            g = this.hfo.brx("finfop"),
            j = this.hfo.brx("finfoc"),
            f = this.hfo.brx("autop");
        if (f && f.kgg()) {
            if (f.ivn(c.keyCode)) {
                return
            }
        }
        if (l) {
            if (l.ivn(c.keyCode)) {
                clearTimeout(this.pgh);
                return
            } else {
                if (l.kgg() && l.hon()) {
                    e = true
                }
            }
        }
        if (g) {
            if (g.ivn()) {
                return
            }
        }
        if (j) {
            if (j.ivn(c.keyCode)) {
                return
            }
        }
        if (b) {
            if (b.kgg()) {
                if (b.ivn(c.keyCode)) {
                    clearTimeout(this.pgh);
                    return
                } else {
                    k = true
                }
            }
        }
        if (d) {
            if (d.kgg()) {
                if (d.ivn(c.keyCode)) {
                    clearTimeout(this.pgh);
                    return
                } else {
                    k = true
                }
            }
        }
        if (e) {
            this.cge(this.ywg.nkg(null, null, c.keyCode));
            return
        } else {
            if (k) {
                if ((b && b.hon()) && ((d && d.hon()) || !d)) {
                    this.bql(this.ywg.nkg(null, null, c.keyCode))
                }
                return
            }
        }
        if (this.hbe && this.hbe.kgg()) {
            if (this.hbe.ivn(c.keyCode)) {
                return
            }
        }
        if (this.riv && this.riv.kgg()) {
            if (this.riv.ivn(c.keyCode)) {
                return
            }
        }
        if (this.ywg) {
            if (this.ywg.ivn(c.keyCode)) {
                return
            }
        }
    };
    this.kif = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.sib) {
            return
        }
        var b = this.hfo.brx("autop"),
            d = this.hfo.brx("topb");
        if (b && b.kgg()) {
            if (b.kif()) {
                return
            }
        }
        if (this.hbe && this.hbe.kgg()) {
            if (this.hbe.kif()) {
                return
            }
        }
        if (this.riv && this.riv.kgg()) {
            if (this.riv.kif()) {
                return
            }
        }
        if (this.ywg) {
            if (this.ywg.kif(c.keyCode)) {
                return
            }
        }
        if (d) {
            if (d.kif()) {
                return
            }
        }
    };
    this.dfx = function () {
        return (bio.olq.mdi() && !this.ipo)
    };
    this.odu = function () {
        return (bio.olq.mdi() && !this.kjo)
    };
    this.nfe = function () {
        return (this.kdv === true && this.fcy.ion === true)
    };
    this.stq = function () {
        if (this.nfe() === true) {
            this.fcy.lgu("melody")
        }
    };
    this.aug = function () {
        if (this.nfe() === true) {
            this.fcy.aee("melody")
        }
    };
    this.xjh = function (c, b) {
        if (this.nfe() === true && this.okb === true) {
            this.fcy.hto("melody", c, b)
        }
    };
    this.gor = function () {
        return false
    };
    this.wsv = function () {
        return 1
    };
    this.loq = function () {
        return 0
    };
    this.yww = function (b) {
        this.utg = this.gfr(b);
        this.width = this.utg.canvas.cuz.width;
        this.height = this.utg.canvas.cuz.height;
        this.ajf();
        this.zgl();
        this.rtv()
    };
    this.que = function () {
        this.style = new zjj()
    };
    this.gfr = function (b) {
        this.igx = b;
        if (b == bio.utg.sbe) {
            return new rhu()
        } else {
            if (b == bio.utg.jqu) {
                return new wnb()
            } else {
                if (b == bio.utg.xod) {
                    return new zfs()
                } else {
                    if (b == bio.utg.xvb) {
                        return new usj()
                    } else {
                        if (b == bio.utg.syp) {
                            return new amt()
                        } else {
                            if (b == bio.utg.jec) {
                                return new tqk()
                            } else {
                                if (b == bio.utg.zbs) {
                                    return new keh()
                                } else {
                                    if (b == bio.utg.atg) {
                                        return new ngm()
                                    } else {
                                        if (b == bio.utg.mxt) {
                                            return new min()
                                        } else {
                                            if (b == bio.utg.lea) {
                                                return new fbj()
                                            } else {
                                                if (b == bio.utg.uap) {
                                                    return new vbi()
                                                }
                                            }
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
    this.rtv = function () {};
    this.xma = function (b) {
        if (this.rqg) {
            this.tyx();
            this.tcw(b);
            this.srn()
        } else {
            this.rrc()
        }
    };
    this.tyx = function () {
        this.canvas.width = 0;
        if (this.txp === false) {
            this.ntc.style.marginTop = (-this.height / 2 + this.mcf()) + "px";
            this.ntc.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.ntc.style.left = "0px";
            this.ntc.style.top = "0px";
            this.ntc.style.marginTop = ((this.klu - this.height) / 2 + this.mcf()) + "px";
            this.ntc.style.marginLeft = ((this.pyf - this.width) / 2) + "px"
        }
        this.ntc.style.width = (this.width > this.pyf) ? this.pyf + "px" : this.width + "px";
        this.ntc.style.height = (this.height > this.klu) ? this.klu + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.gun) {
            this.gun.style.width = this.width + "px";
            this.gun.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.tcw = function (b) {
        this.npr();
        this.fvh();
        this.zal();
        this.sdp();
        this.pwy();
        if (!(this.ipo && !this.kjo)) {
            this.knl()
        }
        if (!this.ipo) {
            this.cmm();
            if (this.utg.vmb) {
                if (this.hfo.brx("tops")) {
                    this.ott()
                } else {
                    this.gix()
                }
            } else {
                this.hfo.tnp("tops")
            }
            if (this.fah()) {
                this.frm()
            }
            this.ydu();
            if (this.obs()) {
                this.sut()
            }
        } else {
            this.ilx()
        }
        if (this.utg.fld) {
            this.wkg();
            this.wvr()
        }
        if (this.utg.chd) {
            this.nbz();
            if (this.inz()) {
                this.oks()
            }
        }
        if (this.utg.ysc) {
            this.hjw();
            if (!this.utg.xes) {
                this.ihz()
            }
        }
        if (this.utg.mli) {
            this.lcx()
        }
        if (this.utg.xes) {
            this.jtv()
        }
        this.ucv();
        if (b) {
            this.uzn()
        }
        this.tac();
        this.qjs();
        this.qvn()
    };
    this.npr = function () {
        if (this.ywg) {
            var b = (this.ipo && this.aib) ? this.utg.wcd : this.utg.mmj;
            this.ywg.zlp(b.cuz);
            this.ywg.mey(b, this.auz);
            if (this.utg.csj === true) {
                this.ywg.psg(this.style.mmj, this.auz)
            }
        }
    };
    this.fvh = function () {
        if (this.ekb) {
            this.ekb.zlp((this.csb === false) ? this.utg.ekb.cuz : this.utg.ekb.muh, (this.gss) ? this.utg.ekb.eoj : this.utg.ekb.tlg)
        }
        if (this.pwk) {
            this.pwk.zlp((this.csb === false) ? this.utg.pwk.cuz : this.utg.pwk.muh, (this.gss) ? this.utg.pwk.eoj : this.utg.pwk.tlg)
        }
        if (this.ssk) {
            this.ssk.zlp((this.csb === false) ? this.utg.ssk.cuz : this.utg.ssk.muh, (this.gss) ? this.utg.ssk.eoj : this.utg.ssk.tlg)
        }
        if (this.pzc) {
            this.pzc.zlp((this.csb === false) ? this.utg.pzc.cuz : this.utg.pzc.muh, (this.gss) ? this.utg.pzc.eoj : this.utg.pzc.tlg)
        }
        if (this.qde) {
            this.qde.zlp((this.csb === false) ? this.utg.qde.cuz : this.utg.qde.muh, (this.gss) ? this.utg.qde.eoj : this.utg.qde.tlg)
        }
    };
    this.wkg = function () {
        var b = this.hfo.brx("winp");
        if (b) {
            b.zlp(this.utg.oiv.cuz);
            b.mey(this.utg.oiv)
        }
    };
    this.wvr = function () {};
    this.zal = function () {
        if (this.tup) {
            this.tup.zlp(this.utg.mrw.cuz);
            this.tup.quf = this.quf;
            this.tup.usx = this.usx;
            this.tup.mey(this.utg.mrw)
        }
    };
    this.lcx = function () {
        var c = this.hfo.brx("llinep"),
            b = this.hfo.brx("rlinep");
        if (c) {
            c.x = this.utg.nmy.cuz.x;
            c.y = this.utg.nmy.cuz.y;
            c.mey(this.utg.nmy)
        }
        if (b) {
            b.x = this.utg.rfc.cuz.x;
            b.y = this.utg.rfc.cuz.y;
            b.mey(this.utg.rfc)
        }
    };
    this.nbz = function () {
        var b = this.hfo.brx("betsel");
        if (b) {
            b.zlp(this.utg.djr.cuz);
            b.mey(this.utg.djr)
        }
    };
    this.oks = function () {
        var b = this.hfo.brx("linesel");
        if (b) {
            b.zlp(this.utg.plr.cuz);
            b.mey(this.utg.plr)
        }
    };
    this.ott = function () {
        var b = this.hfo.brx("tops");
        if (b) {
            b.zlp(this.utg.top.cuz);
            b.tsg(this.utg.vmb)
        }
    };
    this.knl = function () {
        if (this.hbe) {
            this.hbe.zlp(this.utg.cth.cuz);
            this.hbe.mey(this.utg.cth);
            if (this.utg.csj === true) {
                this.hbe.psg(this.style.cth)
            }
        }
    };
    this.pwy = function () {
        if (this.riv) {
            var b = (this.ipo && this.aib) ? this.utg.bqc : this.utg.zli;
            this.riv.zlp(b.cuz);
            this.riv.mey(b);
            if (this.utg.csj === true) {
                this.riv.psg(this.style.zli)
            }
        }
    };
    this.sdp = function () {};
    this.cmm = function () {};
    this.ucv = function () {};
    this.uzn = function () {
        if (this.hfo.brx("tops")) {
            this.hbe.kgr(true);
            this.etl()
        } else {
            this.frn = null;
            this.hbe.kus(this.krx, true)
        }
        this.hbe.vuc()
    };
    this.ajf = function () {
        var c = 0 - this.utg.mrw.cuz.x,
            b = 0 - this.utg.mrw.cuz.y;
        this.usx = [
            [{
                x: this.utg.ekb.cuz.x + c,
                y: this.utg.ekb.cuz.y + b
            }, {
                x: this.utg.ekb.cuz.x + c,
                y: this.utg.ekb.cuz.y + b + this.utg.mrw.buj
            }, {
                x: this.utg.ekb.cuz.x + c,
                y: this.utg.ekb.cuz.y + b + 2 * this.utg.mrw.buj
            }],
            [{
                x: this.utg.pwk.cuz.x + c,
                y: this.utg.pwk.cuz.y + b
            }, {
                x: this.utg.pwk.cuz.x + c,
                y: this.utg.pwk.cuz.y + b + this.utg.mrw.buj
            }, {
                x: this.utg.pwk.cuz.x + c,
                y: this.utg.pwk.cuz.y + b + 2 * this.utg.mrw.buj
            }],
            [{
                x: this.utg.ssk.cuz.x + c,
                y: this.utg.ssk.cuz.y + b
            }, {
                x: this.utg.ssk.cuz.x + c,
                y: this.utg.ssk.cuz.y + b + this.utg.mrw.buj
            }, {
                x: this.utg.ssk.cuz.x + c,
                y: this.utg.ssk.cuz.y + b + 2 * this.utg.mrw.buj
            }],
            [{
                x: this.utg.pzc.cuz.x + c,
                y: this.utg.pzc.cuz.y + b
            }, {
                x: this.utg.pzc.cuz.x + c,
                y: this.utg.pzc.cuz.y + b + this.utg.mrw.buj
            }, {
                x: this.utg.pzc.cuz.x + c,
                y: this.utg.pzc.cuz.y + b + 2 * this.utg.mrw.buj
            }],
            [{
                x: this.utg.qde.cuz.x + c,
                y: this.utg.qde.cuz.y + b
            }, {
                x: this.utg.qde.cuz.x + c,
                y: this.utg.qde.cuz.y + b + this.utg.mrw.buj
            }, {
                x: this.utg.qde.cuz.x + c,
                y: this.utg.qde.cuz.y + b + 2 * this.utg.mrw.buj
            }]
        ]
    };
    this.zgl = function () {
        var e = 0 - this.utg.mrw.cuz.x,
            b = 0 - this.utg.mrw.cuz.y;
        this.quf = [];
        for (var g = 0, f = this.utg.quf.length; g < f; g++) {
            this.quf[g] = [];
            for (var d = 0, k = 0, c = this.utg.quf[g].length; d < c; d += 2, k += 1) {
                this.quf[g][k] = {
                    x: this.utg.quf[g][d] + e,
                    y: this.utg.quf[g][d + 1] + b
                }
            }
        }
    };
    this.ygi = function () {
        this.wim = [];
        if (this.ndk() === false && this.lym != "") {
            this.wim.push(this.lym)
        }
        this.wim.push(this.language.ond);
        this.wim.push(this.language.xjg + " " + this.jos(this.hdj()) + ((this.dfx() === true) ? "|" : " ") + this.language.tmd + " " + this.jos(this.eze()));
        this.wim.push(this.language.oad)
    };
    this.vgw = function () {
        this.zwj = [];
        this.zwj[0] = this.language.cui;
        this.zwj[1] = this.language.bco
    };
    this.nrj = function () {
        this.msx = [];
        this.msx[0] = this.language.nnx;
        this.msx[1] = this.language.wdm
    };
    this.tbm = function () {
        umh.prototype.tbm.call(this);
        if (this.byb() === true) {
            this.fcy.vmp(true);
            this.fcy.faj(bio.pql.value45 === bio.aaa.ocl || bio.pql.value45 === bio.aaa.htt)
        }
    };
    this.hdy = function () {
        var c = "";
        this.fcy.qhj("spin", null, false, this.eok + "reels");
        this.fcy.qhj("stop1", null, false, this.eok + "stop_reel2");
        this.fcy.qhj("stop2", null, false, this.eok + "stop_reel2");
        this.fcy.qhj("start", null, false, this.eok + "onstart");
        if (this.nfe() === true) {
            this.fcy.qhj("melody", null, true, this.eok + "background")
        }
        if (this.viu > 0) {
            this.fcy.qhj("wincountfade", null, false, this.eok + "count_fade")
        }
        c = bio.pql.value30 + "/slot/sounds/";
        this.fcy.qhj("winfinal", this.sui, false, c + "winfinal");
        if (this.dqa <= 2) {
            this.fcy.qhj("wincount", null, false, c + "countup" + this.dqa + "1");
            this.fcy.qhj("wincount1", null, false, c + "countup" + this.dqa + "2");
            this.fcy.qhj("wincount3", null, false, c + "countup" + this.dqa + "3");
            this.fcy.qhj("wincount5", null, false, c + "countup" + this.dqa + "4");
            if (this.fcy.ion === false) {
                this.fcy.qhj("wincount2", null, false, c + "countup" + this.dqa + "2");
                this.fcy.qhj("wincount4", null, false, c + "countup" + this.dqa + "3");
                this.fcy.qhj("wincount6", null, false, c + "countup" + this.dqa + "4")
            }
            this.fcy.qhj("winline", null, false, c + "winline");
            this.fcy.qhj("collect", null, false, c + "collect");
            this.fcy.qhj("collectend", null, false, c + "collect1")
        }
        c = bio.pql.value30 + "/basic/sounds/";
        this.fcy.qhj("silence", null, false, c + "silence");
        this.fcy.qhj("audioon", null, false, c + "audio_on");
        if (!bio.pql.value55) {
            if (this.dfx() === false) {
                this.fcy.qhj("btn", null, false, c + "btn");
                this.fcy.qhj("auto_on", null, false, c + "auto_on");
                this.fcy.qhj("auto_off", null, false, c + "auto_off");
                this.fcy.qhj("gamble_on", null, false, c + "gamble_on");
                this.fcy.qhj("gamble_off", null, false, c + "gamble_off");
                if (this.nfe() === false && this.dqa <= 2) {
                    this.fcy.qhj("gambleprop", null, true, c + "gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.fcy.qhj("step" + b, null, false, c + "step" + (b + 1))
                }
                this.fcy.qhj("maxstep", null, false, c + "maxstep")
            } else {
                this.fcy.qhj("btn", null, false, c + "btn2");
                this.fcy.qhj("auto_on", null, false, c + "auto_on");
                this.fcy.qhj("auto_off", null, false, c + "auto_off")
            }
        } else {
            this.fcy.qhj("btn", null, false, c + "ama_btn");
            if (this.dfx() === false) {
                this.fcy.qhj("gamble_on", null, false, c + "ama_gamble_on");
                this.fcy.qhj("gamble_off", null, false, c + "ama_gamble_off");
                if (this.nfe() === false && this.dqa <= 2) {
                    this.fcy.qhj("gambleprop", null, true, c + "ama_gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.fcy.qhj("step" + b, null, false, c + "ama_step")
                }
                this.fcy.qhj("maxstep", null, false, c + "ama_step")
            }
        }
        if (this.sgc() === true) {
            this.fcy.qhj("jackpot", null, false, c + "jackpot");
            if (this.szg()) {
                this.fcy.qhj("mystery_jackpot", null, false, c + "mystery_jackpot")
            }
        }
        if (this.dfx() === false) {
            this.fcy.qhj("panel_in", null, false, c + "panel_in");
            this.fcy.qhj("panel_out", null, false, c + "panel_out")
        }
        c = bio.pql.value30 + "/gamble/sounds/";
        this.fcy.qhj("gamble1", null, false, c + "deal_2");
        this.fcy.qhj("gamble2", null, false, c + "deal_2");
        this.fcy.qhj("gamblewin1", null, false, c + "win1");
        this.fcy.qhj("gamblewin2", null, false, c + "win2");
        this.fcy.qhj("gamblewin3", null, false, c + "win3");
        this.tlz();
        this.jla();
        this.kzn()
    };
    this.tlz = function () {
        for (var b = 0; b < this.ppx; b++) {
            this.fcy.qhj("symb" + b, this.odt, false, this.eok + "symb" + (b + 1))
        }
    };
    this.jla = function () {
        var b = bio.pql.value30 + "/slot/sounds/";
        this.fcy.qhj("bigwin", null, false, b + "bigwin");
        this.fcy.qhj("megawin", null, false, b + "megawin");
        this.fcy.qhj("nicewin", null, false, b + "nicewin")
    };
    this.kzn = function () {};
    this.uss = function () {
        var b = this.all + this.utg.type + "/";
        this.fcy.vrr("icon", b + "icon_out.png");
        if (this.byb() === true && (bio.pql.value45 === bio.aaa.ocl || bio.pql.value45 === bio.aaa.htt)) {
            this.fcy.vrr("device_info", b + "info_" + ((this.dfx() === true) ? "smartphone.png" : "tablet.png"))
        }
        if (this.xnp) {
            this.fcy.vrr("winlines", b + "wl.png")
        }
        this.fcy.vrr("s_symb", b + "symbols_small.png");
        b = bio.pql.value30 + "/basic/images/" + this.utg.type + "/";
        if (this.sgc() === true) {
            this.fcy.vrr("jackpot", b + "jackpot.png");
            if (this.szg()) {
                this.fcy.ack(b, "mystery_jackpot.json")
            }
        }
        if (this.dfx() === true) {
            if (this.utg.csj === false) {
                this.fcy.vrr("btn_back", b + "buttonback.png")
            }
        }
        b = bio.pql.value30 + "/slot/images/" + this.utg.type + "/";
        if (this.dfx() === true) {
            if (this.utg.csj === true) {
                this.fcy.ack(b, "gui_mobile_v29.json")
            } else {
                this.fcy.ack(b, "gui_mobile_v17.json")
            }
        } else {
            if (bio.pql.value57 === bio.ui.azw || this.ndn() != null) {
                this.fcy.ack(b, "gui_desktop_v27.json")
            } else {
                this.fcy.ack(b, "gui_desktop_v17.json")
            }
        }
        if (this.nwj && !this.ipo) {
            this.fcy.vrr("firework", b + "firework.png")
        }
        this.jib();
        this.qgm();
        this.nms();
        this.hfv();
        this.vcr()
    };
    this.qgm = function () {
        var b = this.all + this.utg.type + "/";
        this.fcy.vrr("m_back", b + "main.png");
        this.fcy.vrr("g_back", b + "gamble.jpg");
        this.fcy.vrr("m_win", b + "winPanel.png");
        this.fcy.vrr("h_paytable", b + "wthelp.jpg");
        this.fcy.vrr("h_winlines", b + "wlhelp.jpg")
    };
    this.nms = function () {
        var c = this.all + this.utg.type + "/";
        this.fcy.ack(c, "symbols.json");
        for (var b = 0; b < this.ppx; b++) {
            this.fcy.vrr("anim" + b, c + "symbanim" + (b + 1) + ".jpg")
        }
    };
    this.hfv = function () {
        var b = bio.pql.value30 + "/slot/images/" + this.utg.type + "/";
        this.fcy.vrr("wins", b + "wins.png")
    };
    this.jib = function () {
        var b = bio.pql.value30 + "/gamble/images/" + this.utg.type + "/";
        this.fcy.vrr("g_red", b + "red_orig.png");
        this.fcy.vrr("g_blue", b + "blue_orig.png");
        this.fcy.ack(b, "gamble.json")
    };
    this.vcr = function () {};
    this.qoi = function (b) {
        var c = this.cfy;
        b = (b != null && b === true) ? true : false;
        if (this.ofl && !this.idu && !this.uyq) {
            c = c - this.win
        }
        if (this.wdl) {
            c = c - this.wdl.value
        }
        if (!this.uyq) {
            this.hir(c, true, b)
        }
        this.kgv(this.totalBet, true);
        this.hfo.tvc("tops", "#jvb");
        this.hfo.tvc("settings", "#ful", [this.jos(this.cqc), this.hio, this.jos(this.jcq())])
    };
    this.jvb = function (p, o, q, D, f) {
        if (bio.yqr.lnn()) {
            var b = (p != null && o != null && q != null && D != null),
                d = (b === true) ? new bku(p, o, q, D) : ((bio.yqr.utg.csj === true) ? new bku(bio.yqr.utg.mmj.cuz.x, bio.yqr.utg.mmj.cuz.y, bio.yqr.utg.mmj.cuz.width, bio.yqr.utg.mmj.cuz.height) : new bku(bio.yqr.utg.yqr.cuz.x, bio.yqr.utg.yqr.cuz.y, bio.yqr.utg.yqr.cuz.width, bio.yqr.utg.yqr.cuz.height)),
                A = bio.yqr.context2D,
                g = (bio.yqr.kjo === true) ? bio.yqr.style.yqr.jzv : bio.yqr.style.yqr.backgroundColor,
                G = bio.yqr.hfo.brx("stats"),
                c = bio.yqr.hfo.brx("history"),
                E = bio.yqr.hfo.brx("topb"),
                j = bio.yqr.hfo.brx("topi"),
                k = bio.yqr.hfo.brx("betsel"),
                s = bio.yqr.hfo.brx("linesel"),
                t = bio.yqr.hfo.brx("tops"),
                l = bio.yqr.hfo.brx("winp"),
                m = bio.yqr.hfo.brx("fwinp"),
                v = bio.yqr.hfo.brx("llinep"),
                I = bio.yqr.hfo.brx("rlinep"),
                H = bio.yqr.hfo.brx("finfop"),
                z = bio.yqr.hfo.brx("finfoc"),
                r = bio.yqr.hfo.brx("autop"),
                F = bio.yqr.hfo.vla("jackpots"),
                n = bio.yqr.hfo.brx("jwp"),
                u = bio.yqr.hfo.brx("mjwp"),
                e = bio.yqr.hfo.brx("settings");
            bio.yqr.twj = false;
            if (bio.yqr.csb === true) {
                bio.yqr.hgo()
            }
            A.save();
            if (b) {
                A.beginPath();
                A.rect(p, o, q, D);
                A.closePath();
                A.clip()
            }
            if (f == null || f === false) {
                A.clearRect(0, 0, bio.yqr.width, bio.yqr.height)
            }
            if (bio.yqr.utg.jzd) {
                if (bio.yqr.csb === false) {
                    bio.olq.zuu(bio.yqr.context2D, bio.yqr.utg.yqr.cuz.x - bio.yqr.utg.yqr.dbr, bio.yqr.utg.yqr.cuz.y - bio.yqr.utg.yqr.dbr, bio.yqr.utg.yqr.cuz.width + 2 * bio.yqr.utg.yqr.dbr, bio.yqr.utg.yqr.cuz.height + 2 * bio.yqr.utg.yqr.dbr, g, 1)
                } else {
                    bio.olq.zuu(bio.yqr.context2D, bio.yqr.utg.yqr.cuz.x - bio.yqr.utg.yqr.dbr, bio.yqr.utg.yqr.cuz.y - bio.yqr.utg.yqr.dbr, bio.yqr.utg.yqr.cuz.width + 2 * bio.yqr.utg.yqr.dbr, bio.yqr.utg.yqr.cuz.height + 2 * bio.yqr.utg.yqr.dbr, null, 0, g, bio.yqr.utg.yqr.dbr, 1)
                }
            }
            if (c) {
                c.jvb()
            }
            if (j) {
                j.jvb()
            }
            if (t) {
                t.jvb()
            }
            if (G && G.kgg()) {
                G.jvb()
            } else {
                if (bio.yqr.hbe && bio.yqr.hbe.kgg()) {
                    bio.yqr.hbe.jvb()
                } else {
                    if (bio.yqr.riv && bio.yqr.riv.kgg()) {
                        bio.yqr.riv.jvb()
                    } else {
                        if (bio.yqr.csb) {
                            A.drawImage(bio.yqr.zrh, bio.yqr.utg.ggj.cuz.x, bio.yqr.utg.ggj.cuz.y)
                        } else {
                            A.drawImage(bio.yqr.pee, bio.yqr.utg.ggj.cuz.x, bio.yqr.utg.ggj.cuz.y)
                        }
                        if (l && l.kgg()) {
                            l.jvb()
                        } else {
                            if (m && m.kgg()) {
                                m.jvb()
                            }
                        }
                        if (v) {
                            v.jvb()
                        }
                        if (I) {
                            I.jvb()
                        }
                        if (bio.yqr.csb === false) {
                            for (var B = 0, C = bio.yqr.xrv.length; B < C; B++) {
                                if (bio.yqr.xrv[B]) {
                                    bio.yqr.xrv[B].jvb()
                                }
                            }
                        }
                        if (bio.yqr.tup) {
                            bio.yqr.tup.jvb()
                        }
                        if (bio.yqr.ywg) {
                            bio.yqr.ywg.jvb()
                        }
                        for (var B = 0, C = F.length; B < C; B++) {
                            F[B].jvb()
                        }
                        if (n) {
                            if (n.kgg()) {
                                bio.yqr.zvo(A, d)
                            }
                            n.jvb()
                        }
                        if (u) {
                            if (u.kgg()) {
                                bio.yqr.zvo(A, d)
                            }
                            u.jvb()
                        }
                        if (H) {
                            if (H.kgg()) {
                                bio.yqr.zvo(A, d)
                            }
                            H.jvb()
                        }
                        if (z) {
                            if (z.kgg()) {
                                bio.yqr.zvo(A, d)
                            }
                            z.jvb()
                        }
                    }
                }
            }
            if (k) {
                k.jvb()
            }
            if (s) {
                s.jvb()
            }
            if (E) {
                E.jvb()
            }
            if (r) {
                r.jvb()
            }
            if (e) {
                e.jvb()
            }
            A.restore()
        }
    };
    this.zvo = function (b, c) {
        this.twj = true;
        bio.olq.zuu(b, c.x, c.y, c.width, c.height, "black", 0.5)
    };
    this.whk = function () {
        for (var c = 0, b = this.xrv.length; c < b; c++) {
            if (this.xrv[c] && this.rdx[c] === true) {
                this.xrv[c].jvb()
            }
        }
    };
    this.hgo = function () {
        var d = this.vcc,
            c = this.fcy.uxh("m_back"),
            f = this.fcy.uxh("f_back");
        if (this.ipo && this.aib && this.style.yqr.zsq) {
            c = this.fcy.uxh("m_m_back");
            f = this.fcy.uxh("m_f_back")
        }
        if (this.lnn()) {
            d.save();
            if (this.auz) {
                d.drawImage(f, 0, 0)
            } else {
                d.drawImage(c, 0, 0)
            }
            for (var e = 0, b = this.xrv.length; e < b; e++) {
                this.xrv[e].jvb()
            }
            d.restore()
        }
    };
    this.lah = function () {
        var d = bio.yqr.dlt,
            g = (bio.yqr.utg.ggj.cuz.width - bio.yqr.utg.yqr.cuz.width) / 2,
            e = 0,
            c = (bio.yqr.auz) ? bio.yqr.fcy.uxh("f_back") : bio.yqr.fcy.uxh("m_back"),
            k = (bio.yqr.auz) ? bio.yqr.fcy.uxh("f_left") : bio.yqr.fcy.uxh("m_left"),
            j = (bio.yqr.auz) ? bio.yqr.fcy.uxh("f_right") : bio.yqr.fcy.uxh("m_right");
        if (bio.yqr.ipo && bio.yqr.aib && bio.yqr.style.yqr.zsq) {
            c = (bio.yqr.auz) ? bio.yqr.fcy.uxh("m_f_back") : bio.yqr.fcy.uxh("m_m_back")
        }
        d.save();
        d.clearRect(0, 0, bio.yqr.utg.ggj.cuz.width, bio.yqr.utg.ggj.cuz.height);
        d.drawImage(c, g, e);
        if (bio.yqr.igx === bio.utg.lea || bio.yqr.igx === bio.utg.uap) {
            if (k) {
                d.drawImage(k, 0, 0)
            }
            if (j) {
                d.drawImage(j, bio.yqr.utg.ggj.cuz.width - j.width, 0)
            }
        }
        d.restore();
        if (bio.yqr.csb) {
            d = bio.yqr.niq;
            d.save();
            d.drawImage(bio.yqr.pee, 0, 0);
            for (var f = 0, b = bio.yqr.xrv.length; f < b; f++) {
                d.clearRect(bio.yqr.xrv[f].x + g, bio.yqr.xrv[f].y + e, bio.yqr.xrv[f].width, bio.yqr.xrv[f].height)
            }
            d.restore()
        }
    };
    this.fst = function (f) {
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
        if (this.ewr < 0) {
            for (var d = 0; d < f; d++) {
                this.xbs[d] = c[e];
                e = (e < c.length - 1) ? e + 1 : 0
            }
            this.qws = 0;
            this.jrp = new Date().getTime();
            this.cey()
        }
    };
    this.hvd = function () {
        clearTimeout(this.ewr);
        this.ewr = -1;
        bio.olq.mbd(this.canvas, this.tqh, this.hds);
        if (this.bkx != null) {
            bio.olq.mbd(this.bkx, this.tqh, this.hds, ((this.utg.bkx.cuz.x) - ((this.utg.bkx.cuz.x + this.utg.bkx.kkk) / 2 * (1 - this.tqh))), ((this.utg.bkx.cuz.y) - ((this.utg.bkx.cuz.y + this.utg.bkx.edr) / 2 * (1 - this.hds))))
        }
    };
    this.cey = function () {
        var b = bio.yqr.xzr,
            d = new Date().getTime(),
            c = null;
        if (bio.yqr.qws >= bio.yqr.xbs.length) {
            bio.yqr.hvd()
        } else {
            c = bio.yqr.xbs[bio.yqr.qws];
            bio.olq.mbd(bio.yqr.canvas, bio.yqr.tqh * c.sx, bio.yqr.hds * c.sy, c.tx, c.ty, c.rx, c.ry);
            if (bio.yqr.bkx != null) {
                bio.olq.mbd(bio.yqr.bkx, bio.yqr.tqh * c.sx, bio.yqr.hds * c.sy, ((bio.yqr.utg.bkx.cuz.x) - ((bio.yqr.utg.bkx.cuz.x + bio.yqr.utg.bkx.kkk) / 2 * (1 - bio.yqr.tqh * c.sx))) + c.tx, ((bio.yqr.utg.bkx.cuz.y) - ((bio.yqr.utg.bkx.cuz.y + bio.yqr.utg.bkx.edr) / 2 * (1 - bio.yqr.hds * c.sy))) + c.ty, c.rx, c.ry)
            }
            bio.yqr.qws++;
            b = bio.yqr.xzr + (bio.yqr.qws * bio.yqr.xzr - (d - bio.yqr.jrp));
            if (b < 10) {
                b = 10
            }
            bio.yqr.ewr = setTimeout(bio.yqr.cey, b)
        }
    };
    this.irl = function () {
        clearTimeout(bio.yqr.laj);
        if (bio.yqr.bgc) {
            if (bio.yqr.tpx) {
                if (!bio.yqr.bye && bio.yqr.owk()) {
                    setTimeout(bio.yqr.bsp, 2)
                }
            } else {
                if (!bio.yqr.auz) {
                    if (bio.yqr.win > 0 && !bio.yqr.idu) {
                        if (bio.yqr.aof) {
                            bio.yqr.gys();
                            if (bio.yqr.paz()) {
                                bio.yqr.bgc = false;
                                bio.yqr.ywg.qjf(false);
                                setTimeout(bio.yqr.mmb, 400)
                            }
                        } else {
                            if (bio.yqr.xfn) {
                                bio.yqr.jlt()
                            } else {
                                if (!(bio.yqr.aof || bio.yqr.xfn)) {
                                    if (bio.yqr.paz()) {
                                        bio.yqr.bgc = false;
                                        bio.yqr.ywg.qjf(false);
                                        bio.yqr.mmb()
                                    } else {
                                        bio.yqr.gys()
                                    }
                                }
                            }
                        }
                    } else {
                        if (!bio.yqr.tpx) {
                            if (bio.yqr.atn) {
                                bio.yqr.zbx();
                                bio.yqr.zla();
                                return
                            } else {
                                if (bio.yqr.rco) {
                                    bio.yqr.zbx();
                                    bio.yqr.sqj();
                                    return
                                }
                            }
                            bio.yqr.xdh = true;
                            bio.yqr.bgc = false;
                            if (bio.yqr.dfx() === true) {
                                bio.yqr.urk = (!bio.yqr.zli) ? 1 : 0
                            } else {
                                if (bio.pql.value62 === true) {
                                    bio.yqr.urk = 0;
                                    if (bio.yqr.ryv) {
                                        bio.yqr.urk |= 2
                                    }
                                    if (bio.yqr.zli) {
                                        bio.yqr.urk |= 4
                                    }
                                } else {
                                    bio.yqr.urk = (bio.yqr.ryv && !bio.yqr.zli) ? 1 : 0
                                }
                            }
                            if (bio.yqr.uyq || (bio.yqr.cfy >= bio.yqr.jcq() && bio.yqr.jcq() >= bio.yqr.yfe)) {
                                bio.yqr.bov();
                                for (var c = 0, b = bio.yqr.xrv.length; c < b; c++) {
                                    bio.yqr.oam[c] = -1;
                                    if (bio.yqr.xrv[c]) {
                                        bio.yqr.xrv[c].gmn(bio.yqr.pch[0])
                                    }
                                }
                                bio.yqr.kmj();
                                bio.yqr.sxd({
                                    type: "roundStart",
                                    sender: bio.yqr.rmd,
                                    lang: sessionStorage.sessionValue1.toUpperCase(),
                                    data: {
                                        totalBet: bio.yqr.jos(bio.yqr.totalBet)
                                    }
                                });
                                bio.yqr.umk();
                                bio.yqr.ujv();
                                bio.yqr.svb.play(bio.yqr.hio, bio.yqr.lmy, bio.yqr.urk);
                                bio.yqr.ywg.qjf(false);
                                bio.yqr.ywg.etp.tvc("start", "#wsn", [true])
                            } else {
                                bio.yqr.jvi();
                                bio.yqr.zbx();
                                bio.yqr.ywg.qjf(true);
                                bio.yqr.ggg(true);
                                bio.yqr.bgc = true
                            }
                            bio.yqr.sll()
                        }
                    }
                } else {
                    if (bio.yqr.enj > 0) {
                        if (bio.yqr.aof) {
                            bio.yqr.gys()
                        } else {
                            if (!(bio.yqr.gpf || bio.yqr.xdh)) {
                                bio.yqr.bwk()
                            } else {
                                bio.yqr.huq()
                            }
                        }
                    }
                    if (bio.yqr.elz > 0 && !(bio.yqr.wwz && !bio.yqr.avl)) {
                        if (bio.yqr.rco) {
                            bio.yqr.zbx();
                            bio.yqr.sqj();
                            return
                        }
                        bio.yqr.xdh = true;
                        bio.yqr.bgc = false;
                        bio.yqr.bov();
                        for (var c = 0, b = bio.yqr.xrv.length; c < b; c++) {
                            bio.yqr.oam[c] = -1;
                            if (bio.yqr.xrv[c]) {
                                bio.yqr.xrv[c].gmn(bio.yqr.pch[0])
                            }
                        }
                        bio.yqr.hcf();
                        if (bio.yqr.dfx() && bio.yqr.elz == 1) {
                            bio.yqr.urk = (!bio.yqr.zli) ? 1 : 0
                        } else {
                            if (bio.pql.value62 === true) {
                                bio.yqr.urk = 0;
                                if (bio.yqr.ndn() == null && bio.pql.value44.e && bio.yqr.elz == 1) {
                                    if (bio.yqr.fac) {
                                        bio.yqr.urk |= 2
                                    }
                                } else {
                                    if (bio.yqr.ryv) {
                                        bio.yqr.urk |= 2
                                    }
                                }
                                if (bio.yqr.zli) {
                                    bio.yqr.urk |= 4
                                }
                            } else {
                                if (bio.yqr.ndn() == null && bio.pql.value44.e && bio.yqr.elz == 1) {
                                    bio.yqr.urk = (bio.yqr.fac && !bio.yqr.zli) ? 1 : 0
                                } else {
                                    bio.yqr.urk = (bio.yqr.ryv && !bio.yqr.zli) ? 1 : 0
                                }
                            }
                        }
                        bio.yqr.ujv();
                        bio.yqr.svb.ihe(bio.yqr.hio, bio.yqr.lmy, bio.yqr.urk);
                        bio.yqr.ywg.qjf(false);
                        bio.yqr.ywg.etp.tvc("start", "#wsn", [true]);
                        bio.yqr.dvg()
                    }
                }
            }
        } else {
            if (!bio.yqr.ywk && bio.yqr.tpx && !bio.yqr.bye && bio.yqr.owk()) {
                bio.yqr.qkh = true
            }
        }
    };
    this.ift = function () {
        var b = bio.yqr.hfo.brx("topi"),
            d = 0,
            c = 0,
            e = 0;
        if (!bio.pql.value55) {
            bio.yqr.fcy.aee("auto_on");
            bio.yqr.fcy.aee("auto_off")
        }
        if (bio.yqr.ryv) {
            bio.yqr.ryv = false;
            bio.yqr.iqf();
            if (bio.yqr.ndn() == null && bio.pql.value44.e && bio.yqr.auz) {
                bio.yqr.fac = false
            }
            bio.yqr.ywg.etp.tvc("astart", "#zoo", [bio.yqr.ryv]);
            if (!bio.yqr.tpx) {
                bio.yqr.ywg.etp.tvc("start", "#qib", [bio.yqr.language.start, true])
            }
            if (!bio.pql.value55) {
                bio.yqr.fcy.lgu("auto_off")
            }
            if (bio.yqr.sho && !bio.yqr.ryv && !bio.yqr.zli && !bio.yqr.meg() && !bio.yqr.auz && bio.yqr.win > 0 && !bio.yqr.idu && !bio.yqr.xfn && !bio.yqr.tpx) {
                if (!bio.yqr.ywg.etp.tvc("gamble", "#ate")) {
                    bio.yqr.ywg.etp.tvc("start", "#qib", [bio.yqr.language.stb, true]);
                    bio.yqr.ywg.etp.tvc("gamble", "#wux");
                    bio.yqr.bqt();
                    if (!bio.yqr.aof) {
                        bio.yqr.ywg.etp.tvc("info", "#qoz", [bio.yqr.upg(bio.yqr.language.awx) + ": " + bio.yqr.jos(bio.yqr.win)])
                    }
                    bio.yqr.srl()
                }
            }
        } else {
            if (bio.yqr.ndn() != null && bio.yqr.rqh <= 0 && bio.yqr.dfx() === false) {
                if (b && b.hon() === true) {
                    bio.yqr.ggg(false);
                    bio.yqr.ywg.qjf(false);
                    bio.yqr.id = setTimeout(bio.yqr.ewi, 300)
                }
            } else {
                if (bio.yqr.ndn() == null && bio.pql.value44.e && bio.yqr.auz) {
                    bio.yqr.fac = true
                } else {
                    if (bio.yqr.ndn() != null && bio.yqr.dfx() === true) {
                        bio.yqr.rqh = bio.yqr.hfo.tvc("settings", "#lxz");
                        if (bio.yqr.rqh <= 0) {
                            return
                        }
                        d = bio.yqr.hfo.tvc("settings", "#lvj");
                        c = bio.yqr.hfo.tvc("settings", "#kso");
                        e = bio.yqr.hfo.tvc("settings", "#fub");
                        bio.yqr.uky = (d > 0) ? d : 0;
                        bio.yqr.unc = (c > 0) ? c : 0;
                        bio.yqr.leb = (e > 0) ? e : 0;
                        bio.yqr.dgt(bio.yqr.ndn().o === true || bio.yqr.style.yqr.zsq == false)
                    }
                }
                bio.yqr.ryv = true;
                bio.yqr.ywg.etp.tvc("astart", "#zoo", [bio.yqr.ryv]);
                if (!bio.yqr.tpx) {
                    bio.yqr.ywg.etp.tvc("start", "#qib", [bio.yqr.language.start, true])
                }
                if (!bio.pql.value55) {
                    bio.yqr.fcy.lgu("auto_on")
                }
                if (!bio.yqr.tpx) {
                    if (bio.yqr.auz || (!bio.yqr.auz && !(bio.yqr.win > 0 && bio.yqr.sho && bio.yqr.zli && !(bio.yqr.idu || bio.yqr.xfn)))) {
                        bio.yqr.irl()
                    }
                }
            }
        }
        if (b) {
            b.xbo("auto", bio.yqr.ryv)
        }
    };
    this.abi = function () {
        if (bio.qja == 0 && bio.yqr.ipo === false && bio.yqr.win > 0 && !bio.yqr.idu && bio.yqr.paz()) {
            if (!bio.yqr.xfn) {
                bio.yqr.bgc = false;
                bio.yqr.ywg.qjf(false);
                if (bio.yqr.aof) {
                    bio.yqr.gys();
                    setTimeout(bio.yqr.mmb, 400)
                } else {
                    bio.yqr.mmb()
                }
            }
            bio.yqr.hsy = bio.yqr.abi
        } else {
            umh.prototype.abi.call(this)
        }
    };
    this.lnl = function () {
        if (bio.yqr.lmy < bio.yqr.vvn.length - 1) {
            if (bio.yqr.lmy >= bio.yqr.qen(true)) {
                bio.yqr.lmy = 0;
                while (bio.yqr.lmy < bio.yqr.hll()) {
                    bio.yqr.lmy++
                }
            } else {
                bio.yqr.lmy++
            }
        } else {
            bio.yqr.lmy = 0;
            while (bio.yqr.lmy < bio.yqr.hll()) {
                bio.yqr.lmy++
            }
        }
        bio.yqr.vsa(false, false);
        if (bio.yqr.dfx() && bio.yqr.ssp()) {
            bio.yqr.ywg.etp.tvc("betpopup", "#qib", [bio.yqr.ztt(bio.yqr.totalBet)]);
            bio.yqr.ywg.etp.tvc("betpopup", "#tsg", [true]);
            bio.yqr.jvb();
            clearTimeout(bio.yqr.cou);
            bio.yqr.cou = setTimeout(bio.yqr.ygr, 2000)
        }
        if (bio.yqr.lmy >= bio.yqr.qen(true)) {
            return true
        }
        return false
    };
    this.edz = function () {
        if (bio.yqr.lmy > 0) {
            if (bio.yqr.lmy <= bio.yqr.hll()) {
                bio.yqr.lmy = bio.yqr.vvn.length;
                while (bio.yqr.lmy > bio.yqr.qen(true)) {
                    bio.yqr.lmy--
                }
            } else {
                bio.yqr.lmy--
            }
        } else {
            bio.yqr.lmy = bio.yqr.vvn.length;
            while (bio.yqr.lmy > bio.yqr.qen(true)) {
                bio.yqr.lmy--
            }
        }
        if (bio.yqr.lmy < 0) {
            bio.yqr.lmy = 0
        }
        bio.yqr.vsa(false, false);
        if (bio.yqr.lmy <= bio.yqr.hll()) {
            return true
        }
        return false
    };
    this.zwk = function () {
        var c = bio.yqr.hio,
            b = bio.yqr.hfo.brx("betsel"),
            e = bio.yqr.hfo.brx("llinep"),
            d = bio.yqr.hfo.brx("rlinep");
        c += bio.yqr.aod;
        if (c > bio.yqr.mhp) {
            c = bio.yqr.vmz
        }
        bio.yqr.hio = c;
        if (e) {
            e.bnf(c)
        }
        if (d) {
            d.bnf(c)
        }
        if (b) {
            b.ndq(bio.yqr.hll(), bio.yqr.qen(true))
        }
        bio.yqr.vsa(true, true);
        bio.yqr.jvb();
        if (c >= bio.yqr.mhp) {
            return true
        }
        return false
    };
    this.dji = function () {
        var c = bio.yqr.hio,
            b = bio.yqr.hfo.brx("betsel"),
            e = bio.yqr.hfo.brx("llinep"),
            d = bio.yqr.hfo.brx("rlinep");
        c -= bio.yqr.aod;
        if (c < bio.yqr.vmz) {
            c = bio.yqr.mhp
        }
        bio.yqr.hio = c;
        if (e) {
            e.bnf(c)
        }
        if (d) {
            d.bnf(c)
        }
        if (b) {
            b.ndq(bio.yqr.hll(), bio.yqr.qen(true))
        }
        bio.yqr.vsa(true, true);
        bio.yqr.jvb();
        if (c <= bio.yqr.vmz) {
            return true
        }
        return false
    };
    this.fhl = function () {
        var b = bio.yqr.hfo.brx("topi"),
            c = bio.yqr.hfo.brx("settings");
        if (bio.yqr.sho && !bio.yqr.auz && bio.yqr.win > 0 && !bio.yqr.tpx && !bio.yqr.zli && !bio.yqr.ryv) {
            bio.yqr.gpt()
        } else {
            bio.yqr.fcy.aee("gamble_on");
            bio.yqr.fcy.aee("gamble_off");
            bio.yqr.zli = !bio.yqr.zli;
            if (bio.yqr.zli) {
                bio.yqr.fcy.lgu("gamble_on")
            } else {
                bio.yqr.fcy.lgu("gamble_off")
            }
            if (bio.yqr.sho && !bio.yqr.ryv && !bio.yqr.zli && !bio.yqr.meg() && !bio.yqr.auz && bio.yqr.win > 0 && !bio.yqr.idu && !bio.yqr.xfn && !bio.yqr.tpx) {
                if (!bio.yqr.ywg.etp.tvc("gamble", "#ate")) {
                    bio.yqr.ywg.etp.tvc("start", "#qib", [bio.yqr.language.stb, true]);
                    bio.yqr.ywg.etp.tvc("gamble", "#wux");
                    bio.yqr.bqt();
                    if (!bio.yqr.aof) {
                        bio.yqr.ywg.etp.tvc("info", "#qoz", [bio.yqr.upg(bio.yqr.language.awx) + ": " + bio.yqr.jos(bio.yqr.win)])
                    }
                    bio.yqr.srl()
                }
            }
            bio.yqr.ywg.etp.tvc("gamble", "#zoo", [bio.yqr.zli]);
            if (b) {
                b.xbo("gamble", bio.yqr.zli)
            }
            if (c) {
                c.etp.tvc("gamble", "#lij", [(bio.yqr.zli) ? 1 : 0])
            }
        }
    };
    this.twa = function () {
        if (!bio.yqr.hbe.kgg()) {
            bio.yqr.cge();
            if (bio.yqr.auz) {
                bio.yqr.hib()
            }
            bio.yqr.cie()
        } else {
            bio.yqr.rmf()
        }
    };
    this.qsk = function () {
        var d = bio.yqr.hfo.brx("topb"),
            c = bio.yqr.hfo.brx("settings"),
            b = bio.yqr.hfo.brx("topi");
        bio.yqr.bye = !bio.yqr.bye;
        if (b) {
            b.xbo("turbo", bio.yqr.bye)
        }
        if (d) {
            d.etp.tvc("turbo", "#lij", [(bio.yqr.bye) ? 1 : 0])
        }
        if (c) {
            c.etp.tvc("turbo", "#lij", [(bio.yqr.bye) ? 1 : 0])
        }
    };
    this.ztg = function () {
        var b = false;
        if (bio.olq.iza == true) {
            if (bio.yqr.vsm == true) {
                bio.yqr.vsm = false;
                b = bio.olq.fjj();
                setTimeout(bio.yqr.xhv, 1400)
            }
        } else {
            b = bio.olq.fjj();
            setTimeout(bio.yqr.xhv, 1400)
        }
    };
    this.ffp = function () {
        if (bio.yqr.fcy.vga() && !bio.yqr.vya) {
            bio.yqr.vya = true;
            bio.yqr.hfo.tvc("loading", "#stop");
            setTimeout(bio.yqr.wrk, 100);
            bio.yqr.fcy.lgu("silence");
            if (bio.olq.bqr()) {
                bio.yqr.ztg()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.iph = function () {
        var d = bio.yqr.hfo.brx("topb"),
            c = bio.yqr.hfo.brx("settings"),
            b = bio.yqr.hfo.brx("topi");
        bio.yqr.okb = !bio.yqr.okb;
        if (bio.yqr.okb === true) {
            bio.yqr.stq();
            if (bio.yqr.ssp() === false) {
                bio.yqr.xjh(0, 0)
            }
        } else {
            bio.yqr.aug()
        }
        if (b) {
            b.xbo("melody", (bio.yqr.okb) ? 1 : 0)
        }
        if (d) {
            d.etp.tvc("melody", "#lij", [(bio.yqr.okb) ? 1 : 0])
        }
        if (c) {
            c.etp.tvc("melody", "#lij", [(bio.yqr.okb) ? 1 : 0])
        }
        bio.yqr.jvb()
    };
    this.kmj = function () {
        this.ywk = false;
        this.qud = false;
        this.qkh = false;
        this.idu = false;
        this.ggg(false);
        this.ywg.etp.tvc("info", "#qoz", [this.language.nfu, true]);
        this.fcy.aee("collectend");
        if (this.xyg >= 0) {
            clearTimeout(this.xyg);
            this.xyg = -1
        }
        this.sim();
        this.eps();
        if (this.tpx == false) {
            this.dss();
            for (var c = 0, b = this.xrv.length; c < b; c++) {
                this.xrv[c].qum()
            }
            this.tpx = true;
            this.ist = false;
            this.orl = false;
            this.pso();
            this.jrp = new Date().getTime();
            if (this.gss) {
                this.id = window.mxx(this.pyk)
            } else {
                this.id = setTimeout(this.pyk, 10)
            }
        }
    };
    this.hcf = function () {};
    this.pyk = function () {
        var c = bio.yqr.pkp,
            e = 0;
        bio.yqr.rvc = 0;
        if (!bio.yqr.gss || bio.yqr.oji) {
            if (bio.yqr.lde == 0) {
                bio.yqr.jrp = new Date().getTime()
            } else {
                e = new Date().getTime();
                c = bio.yqr.pkp + (bio.yqr.lde * bio.yqr.pkp - (e - bio.yqr.jrp))
            }
            if (bio.yqr.orl) {
                c = bio.yqr.ili
            }
        }
        if (bio.yqr.lde > 0 && !bio.yqr.bgc && bio.yqr.ywk) {
            bio.yqr.bgc = true
        }
        for (var d = 0, b = bio.yqr.xrv.length; d < b; d++) {
            if (bio.yqr.rdx[d] && !bio.yqr.xrv[d].psc) {
                if (d == bio.yqr.qmi - 1) {
                    bio.yqr.xrv[d].leg(true)
                } else {
                    bio.yqr.xrv[d].leg((!bio.yqr.orl && !bio.yqr.bye))
                }
            }
        }
        if (typeof bio.yqr.iey === "function") {
            bio.yqr.iey()
        }
        if (bio.yqr.csb === false) {
            bio.yqr.whk()
        } else {
            bio.yqr.hgo()
        }
        if (c <= 0) {
            c = 0
        }
        if (bio.yqr.ixu) {
            return
        }
        if (!bio.yqr.mwb()) {
            bio.yqr.lde += 1;
            if (bio.yqr.gss && !bio.yqr.oji) {
                bio.yqr.id = window.mxx(bio.yqr.pyk)
            } else {
                if (c == 0) {
                    bio.yqr.pyk()
                } else {
                    bio.yqr.id = setTimeout(bio.yqr.pyk, c)
                }
            }
        } else {
            bio.yqr.tpx = false;
            bio.yqr.wxn();
            bio.yqr.lde = 0;
            bio.yqr.ugc = false;
            bio.yqr.fjh()
        }
    };
    this.iey = function () {};
    this.fjh = function () {
        if (bio.yqr.igd === false) {
            var d = bio.yqr.mwb();
            clearTimeout(bio.yqr.anb);
            for (var c = 0, b = bio.yqr.xrv.length; c < b && d; c++) {
                if (bio.yqr.xrv[c].xpi()) {
                    bio.yqr.xrv[c].dii();
                    d = false
                }
            }
            if (d) {
                for (var c = 0, b = bio.yqr.xrv.length; c < b; c++) {
                    bio.yqr.xrv[c].pba().length = 0;
                    bio.yqr.xrv[c].tfq().length = 0;
                    bio.yqr.xrv[c].txv()
                }
                bio.yqr.bgc = true;
                if (bio.yqr.fsp()) {
                    bio.yqr.spx()
                } else {
                    if (bio.yqr.edi() === true) {
                        bio.yqr.zqi()
                    } else {
                        bio.yqr.rpn()
                    }
                }
            } else {
                bio.yqr.bgc = false
            }
        } else {
            bio.yqr.anb = setTimeout(bio.yqr.fjh, 50)
        }
    };
    this.mwb = function () {
        for (var c = 0, b = this.xrv.length; c < b; c++) {
            if (this.xrv[c] && !this.xrv[c].psc) {
                return false
            }
        }
        return true
    };
    this.owk = function () {
        return (bio.pql.value79 === 0)
    };
    this.bsp = function () {
        var c = 0,
            b = bio.yqr.xrv.length;
        if (!bio.yqr.orl) {
            bio.yqr.ixu = false;
            bio.yqr.orl = true;
            if (!bio.yqr.qud) {
                if (!bio.yqr.auz) {
                    bio.yqr.qud = true;
                    for (c = 0; c < b; c++) {
                        if (bio.yqr.xrv[c] && bio.yqr.rdx[c]) {
                            bio.yqr.xrv[c].qqo(bio.yqr.oam[c], bio.yqr.pch[c] - bio.yqr.pch[0], bio.yqr.ypc)
                        }
                    }
                } else {
                    bio.yqr.qud = true;
                    for (c = 0; c < b; c++) {
                        if (bio.yqr.xrv[c] && bio.yqr.rdx[c]) {
                            bio.yqr.xrv[c].qqo((bio.yqr.any) ? bio.yqr.eke[c] : bio.yqr.oam[c], bio.yqr.pch[c] - bio.yqr.pch[0], bio.yqr.ypc)
                        }
                    }
                }
            }
            for (c = 0; c < b; c++) {
                if (bio.yqr.xrv[c] && bio.yqr.rdx[c]) {
                    bio.yqr.xrv[c].coh()
                }
            }
        }
    };
    this.rnz = function () {
        this.ixu = true;
        this.win = 0;
        for (var c = 0, b = this.xrv.length; c < b; c++) {
            if (this.xrv[c] && !this.xrv[c].psc) {
                this.xrv[c].ssx()
            }
        }
    };
    this.bov = function () {
        if (this.bye) {
            this.pch = this.lwy;
            this.pkp = this.wsy
        } else {
            this.pch = this.owe;
            this.pkp = this.asp
        }
        this.oji = this.vxp()
    };
    this.pso = function () {
        this.fcy.lgu("spin")
    };
    this.wxn = function () {
        this.fcy.aee("spin")
    };
    this.lur = function () {};
    this.eps = function () {
        if (!this.auz) {
            this.rhe()
        } else {
            if (this.gor() === true) {
                this.fcy.hto("freespinstart", 1, 300)
            }
        }
        for (var c = 0, b = this.xrv.length; c < b; c++) {
            this.xrv[c].dwf = ((c % 2) == 0) ? this.fcy.wkz("stop1") : this.fcy.wkz("stop2");
            this.xrv[c].qmk().length = 0;
            this.xrv[c].eqb = false;
            this.xrv[c].hhb = null;
            this.xrv[c].dnq = null
        }
        for (var c = 0, b = this.mnp.length; c < b; c++) {
            this.mnp[c] = 0
        }
    };
    this.xcl = function (b) {
        if (this.auz === true) {
            if (this.gor() === true) {
                this.fcy.hto("freespinstart", 0, 300)
            }
            this.ywg.etp.tvc("start", "#qib", [this.language.start, true])
        } else {
            this.xjh(0, 0);
            this.ywg.etp.tvc("info", "#ylr");
            if (!this.meg()) {
                this.ywg.etp.tvc("start", "#qib", [this.language.stb, true])
            } else {
                this.ywg.etp.tvc("start", "#qib", [this.language.start, true])
            }
        }
        this.ywg.qjf(false);
        this.tup.sqt();
        this.tup.qzj(b)
    };
    this.rpn = function () {
        if (!bio.yqr.auz && bio.yqr.win >= bio.yqr.totalBet * bio.yqr.sgz) {
            bio.yqr.xcl(bio.yqr.win / bio.yqr.totalBet)
        } else {
            if (bio.yqr.auz && bio.yqr.enj >= bio.yqr.totalBet * bio.yqr.sgz) {
                bio.yqr.xcl(bio.yqr.enj / bio.yqr.totalBet)
            } else {
                bio.yqr.wpk()
            }
        }
    };
    this.wpk = function () {
        if (this.win > 0 && !this.auz) {
            this.gpf = false;
            this.xdh = false;
            this.fde();
            if (this.dgj()) {
                this.qfs()
            } else {
                this.xjh(0, 200);
                this.ywg.qjf(false);
                this.id = setTimeout(this.vqn, 200)
            }
        } else {
            if (this.enj > 0 && this.auz) {
                this.gpf = false;
                this.xdh = false;
                this.fde();
                if (this.dgj()) {
                    this.qfs()
                } else {
                    this.ywg.qjf(false);
                    this.id = setTimeout(this.cob, 200)
                }
            } else {
                this.jqj();
                this.whu = [];
                this.trf = 0;
                if (this.dgj()) {
                    this.qfs()
                } else {
                    if (this.vth()) {
                        this.iae()
                    } else {
                        if (this.auz && this.elz > 0 || !this.auz) {
                            this.ggg(true)
                        }
                        this.yrf()
                    }
                }
            }
        }
    };
    this.cie = function () {
        this.aof = false;
        clearTimeout(this.uuu);
        this.kli(this.win);
        this.rhe();
        this.ggg(false);
        this.sim();
        this.huq();
        this.kro();
        this.ywg.etp.tvc("info", "#ylr");
        this.ywg.qjf(false);
        this.dfe(false);
        this.hbe.sqt();
        this.hbe.qjf(true);
        this.hfo.tvc("settings", "#zln");
        if (this.utg.csj === false) {
            this.ywg.etp.tvc("setting", "#zoo", [this.hfo.tvc("settings", "#kgg")])
        }
        if (this.auz === true && this.gor() === true) {
            this.fcy.hto("freespinstart", 0, 0)
        } else {
            if (this.auz === false) {
                this.xjh(0, 0)
            }
        }
    };
    this.rmf = function () {
        this.hbe.qjf(false);
        if (!this.auz) {
            this.ywg.qjf(true)
        } else {
            this.ywg.uld(true)
        }
        this.ggg(true);
        this.dfe(true);
        this.hbe.zln();
        if (!this.auz) {
            if (this.win > 0) {
                this.ywg.etp.tvc("info", "#qoz", [this.upg(this.language.awx) + ": " + this.jos(this.win)])
            } else {
                this.ywg.etp.tvc("info", "#bdd", [0])
            }
            this.xjh(1, 200)
        } else {
            this.byd(true);
            this.hib();
            if (this.gor() === true) {
                this.fcy.hto("freespinstart", 1, 200)
            }
        }
    };
    this.gpt = function () {
        var b = bio.yqr.ywg.etp.brx("gamble");
        bio.yqr.tna();
        if (b) {
            b.bde();
            b.zoo(bio.yqr.zli)
        }
        bio.yqr.aof = false;
        clearTimeout(bio.yqr.uuu);
        bio.yqr.rhe();
        bio.yqr.sim();
        bio.yqr.huq();
        bio.yqr.kro();
        clearTimeout(bio.yqr.qae);
        if (bio.yqr.auz === false) {
            bio.yqr.xjh(1, 300)
        }
        bio.yqr.ywg.etp.tvc("info", "#ylr");
        bio.yqr.ywg.qjf(false);
        bio.yqr.ggg(false);
        bio.yqr.dfe(false);
        if (bio.yqr.riv) {
            bio.yqr.riv.qjf(true);
            bio.yqr.riv.wwe(bio.yqr.cfy, bio.yqr.win);
            bio.yqr.riv.etp.tvc("history", "#npl");
            bio.yqr.riv.sqt();
            bio.yqr.riv.pcr()
        }
    };
    this.uhk = function () {
        if (!bio.yqr.thu) {
            bio.yqr.sxd({
                type: "roundEnded",
                sender: bio.yqr.rmd,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: bio.yqr.jos(bio.yqr.win),
                    balanceAfter: bio.yqr.jos(bio.yqr.cfy)
                }
            })
        }
        bio.yqr.jqj();
        bio.yqr.dfe(true);
        if (bio.yqr.riv) {
            bio.yqr.riv.qtl();
            bio.yqr.riv.frd();
            bio.yqr.riv.qjf(false);
            bio.yqr.riv.tsg(false, true)
        }
        bio.yqr.ywg.etp.tvc("start", "#qib", [bio.yqr.language.start, true]);
        bio.yqr.idu = true;
        if (bio.yqr.uic()) {
            bio.yqr.zbx();
            bio.yqr.ywg.qjf(true);
            bio.yqr.ggg(true);
            if (bio.yqr.win > 0) {
                bio.yqr.ywg.etp.tvc("info", "#qoz", [bio.yqr.upg(bio.yqr.language.awx) + ": " + bio.yqr.jos(bio.yqr.win)])
            } else {
                bio.yqr.ywg.etp.tvc("info", "#bdd", [0])
            }
            bio.yqr.gem()
        } else {
            if (bio.yqr.ryv) {
                bio.yqr.ywg.puo(true);
                bio.yqr.laj = setTimeout(bio.yqr.ijr, 400)
            } else {
                bio.yqr.ywg.qjf(true);
                bio.yqr.ggg(true);
                if (bio.yqr.win > 0) {
                    bio.yqr.ywg.etp.tvc("info", "#qoz", [bio.yqr.upg(bio.yqr.language.awx) + ": " + bio.yqr.jos(bio.yqr.win)])
                } else {
                    bio.yqr.ywg.etp.tvc("info", "#bdd", [0])
                }
            }
        }
    };
    this.hib = function () {
        var b = this.hfo.brx("tops");
        if (b) {
            if (b.qgr() == 1) {
                b.wyo(0)
            } else {
                b.wyo(1)
            }
            this.jvb()
        }
    };
    this.xga = function () {
        var b = this.hfo.brx("topi"),
            c = this.hfo.brx("settings");
        this.zli = !bio.yqr.zli;
        this.ywg.etp.tvc("gamble", "#zoo", [this.zli]);
        if (b) {
            b.xbo("gamble", this.zli)
        }
        if (c) {
            c.etp.tvc("gamble", "#lij", [(this.zli) ? 1 : 0])
        }
    };
    this.xsl = function () {
        if (this.ipo) {
            return false
        }
        var b = new bku(197, 24, 246, 200),
            c = bio.pql[bio.yqr.language.tej.toLowerCase().replace(/\s/g, "") + (b.y / 4)];
        if (c && c.indexOf(":" + b.ubc() + "/") >= 0) {
            return false
        }
        return true
    };
    this.fud = function () {
        if (this.pes === false) {
            this.kst = 100;
            return
        }
        if (this.xsl()) {
            var c = new Date().getTime(),
                b = c % this.xrv.length,
                d = c % this.xrv[b].tsa.length;
            if (this.kst <= 0 && ((this.auz && this.enj == 0) || (!this.auz && this.win == 0)) && c & 1 == 1) {
                if (this.auz && this.any) {
                    this.eke[b] = d
                } else {
                    this.oam[b] = d
                }
            } else {
                this.kst = (this.kst > 0) ? this.kst - 1 : 0
            }
        }
    };
    this.vqn = function () {
        bio.yqr.dfp = 0;
        bio.yqr.iuw();
        bio.yqr.bzt();
        bio.yqr.zmi(bio.yqr.oam);
        bio.yqr.jmn();
        bio.yqr.cjx();
        if ((bio.yqr.jdj || bio.yqr.aev || bio.yqr.csb) && bio.yqr.win > 0 && bio.yqr.trf > 0 && !bio.yqr.ugc) {
            bio.yqr.rcy(bio.yqr.jdj, bio.yqr.aev)
        }
        if (bio.yqr.win > 0) {
            if (!bio.yqr.ugc) {
                bio.yqr.htx();
                bio.yqr.ywg.qjf(false)
            }
            if (!bio.yqr.meg()) {
                if (!bio.yqr.ipo) {
                    bio.yqr.ywg.etp.tvc("start", "#qib", [bio.yqr.language.stb, true])
                }
            } else {
                bio.yqr.ywg.etp.tvc("start", "#qib", [bio.yqr.language.start, true])
            }
            bio.yqr.sdh();
            bio.yqr.gml = true;
            bio.yqr.jwe = setTimeout(bio.yqr.ouh, 10)
        } else {}
    };
    this.cob = function () {};
    this.ouh = function () {
        if (!bio.yqr.ugc) {
            if (!bio.yqr.auz) {
                bio.yqr.ekh()
            } else {
                bio.yqr.iab()
            }
        }
        if (!bio.yqr.xdh) {
            if (bio.yqr.kok) {
                bio.yqr.szs()
            } else {
                bio.yqr.klh()
            }
        }
    };
    this.sdh = function () {
        var b = this.ywg.etp.brx("info");
        if (b) {
            if (!this.meg()) {
                if (b.pmp()) {
                    b.qoz(this.language.ntt, true)
                }
            } else {
                b.qoz(this.language.vkf, true)
            }
        }
    };
    this.htx = function () {};
    this.yji = function () {};
    this.ghv = function () {
        for (var b = 0; b < this.mhp; b++) {
            this.yzy[b] *= this.cqc
        }
        this.yzy[this.mhp] *= this.jcq()
    };

    function a(d, c) {
        return c[1] - d[1]
    }
    this.fde = function () {
        var c = [],
            d = 0;
        this.ghv();
        this.whu = [];
        this.trf = 0;
        d = this.yzy[this.mhp];
        for (var b = 0; b < this.mhp; b++) {
            c[b] = [b, this.yzy[b]]
        }
        c.sort(a);
        if (this.rzk(d, c)) {
            this.yzy[0] = d;
            this.whu[0] = this.mhp;
            if (this.yzy[0] > 0) {
                this.trf++
            }
            for (var b = 1; b < this.mhp + 1; b++) {
                this.yzy[b] = c[b - 1][1];
                this.whu[b] = c[b - 1][0];
                if (this.yzy[b] > 0) {
                    this.trf++
                }
            }
            this.kok = false
        } else {
            for (var b = 0; b < this.mhp; b++) {
                this.yzy[b] = c[b][1];
                this.whu[b] = c[b][0];
                if (this.yzy[b] > 0) {
                    this.trf++
                }
            }
            this.yzy[this.mhp] = d;
            this.whu[this.mhp] = this.mhp;
            if (this.yzy[this.mhp] > 0) {
                this.trf++
            }
            this.kok = true
        }
    };
    this.rzk = function (c, b) {
        return c > b[0][1]
    };
    this.swa = function () {
        this.dfp = this.dfp + 1
    };
    this.oss = function () {
        this.rvc = this.rvc + 1
    };
    this.szs = function () {
        if (!this.idu) {
            if (this.dfp < this.whu.length && this.whu[this.dfp] < this.abm.length) {
                if (!this.rvq) {
                    this.iuw()
                }
                var b = this.jet(this.whu[this.dfp]);
                this.soz = this.hug(b);
                if (!this.rvq) {
                    this.fjm(b)
                }
                if (this.yzy[this.dfp] > 0) {
                    this.ywp(this.wpz, this.soz, this.dfp);
                    this.tup.sqt();
                    if (!this.gpf && !this.ugc && this.dfp == 0) {
                        if (this.hxy) {
                            this.fcy.lgu("symb" + this.wpz);
                            if (this.viu > 0) {
                                this.qae = setTimeout(this.pkv, this.viu)
                            }
                        } else {
                            this.odt()
                        }
                    } else {
                        if (this.ivu) {
                            this.bqt()
                        }
                    }
                    this.cde()
                } else {
                    this.swa();
                    this.szs()
                }
            } else {
                if (this.xll >= 0 && this.kok && this.dfp <= this.abm.length) {
                    this.klh();
                    this.gml = false
                } else {
                    this.fze()
                }
            }
        }
    };
    this.hug = function (b) {
        var e = 0,
            c = 0;
        this.soz = 0;
        this.orf = 0;
        this.wpz = b[e];
        if (this.wpz == this.xll) {
            return 0
        }
        for (var d = e; d < 5; d++) {
            if (this.wpz == b[d]) {
                this.soz += 1
            } else {
                break
            }
        }
        if (this.soz == 0) {
            return 0
        }
        c = this.gxj[this.wpz][this.soz - 1];
        if (c > 0) {
            return this.soz
        }
        return 0
    };
    this.klh = function () {
        if (!this.idu) {
            if (!this.rvq) {
                this.iuw()
            }
            var b = this.rfp();
            if (b > 0 && this.gxj[this.xll][b - 1] > 0) {
                this.ywp(this.xll, b, this.dfp);
                this.tup.sqt();
                if (!this.gpf && !this.ugc && this.dfp == 0) {
                    if (this.hxy) {
                        this.fcy.lgu("symb" + this.xll);
                        if (this.viu > 0) {
                            this.qae = setTimeout(this.pkv, this.viu)
                        }
                    } else {
                        this.odt()
                    }
                } else {
                    if (this.ivu) {
                        this.bqt()
                    }
                }
                this.osr()
            } else {
                this.fze()
            }
        }
    };
    this.cde = function () {
        if (this.aof && this.ryv || !this.ryv) {
            if (!(this.zli && this.sho && !this.aof && !this.ugc)) {
                this.mbr([this.whu[this.dfp] + 1]);
                if (this.ovg && this.ryv && this.rvc > 0 && !this.ugc) {
                    this.tup.cde(this.whu[this.dfp], this.xrr, this.vej, this.wpz, this.orf, this.soz, true, true)
                } else {
                    this.tup.cde(this.whu[this.dfp], this.xrr, this.vej, this.wpz, this.orf, this.soz, true, false)
                }
            } else {
                if (!this.clv) {
                    this.mbr([this.whu[this.dfp] + 1]);
                    if (this.ovg) {
                        this.tup.cde(this.whu[this.dfp], this.xrr, this.vej, this.wpz, this.orf, this.soz, true, true)
                    } else {
                        this.tup.cde(this.whu[this.dfp], this.xrr, this.vej, this.wpz, this.orf, this.soz, false, false)
                    }
                } else {
                    this.ywg.etp.tvc("win", "#ylr");
                    this.mbr([this.mhp + 1]);
                    this.swa();
                    this.szs()
                }
            }
        } else {
            if (this.ryv && !this.ugc && !this.clv) {
                this.mbr([this.whu[this.dfp] + 1]);
                if (this.ovg) {
                    this.tup.cde(this.whu[this.dfp], this.xrr, this.vej, this.wpz, this.orf, this.soz, true, true)
                } else {
                    this.tup.cde(this.whu[this.dfp], this.xrr, this.vej, this.wpz, this.orf, this.soz, false, false)
                }
            } else {
                this.ywg.etp.tvc("win", "#ylr");
                this.mbr([this.mhp + 1]);
                this.swa();
                this.szs()
            }
        }
    };
    this.osr = function () {
        if (this.aof && this.ryv || !this.ryv) {
            this.mbr([this.mhp + 1]);
            if (!(this.zli && this.sho && !this.aof && !this.ugc)) {
                if (this.ovg && this.ryv && this.rvc > 0 && !this.ugc) {
                    this.tup.cde(-1, this.xrr, false, this.xll, this.orf, this.soz, true, true)
                } else {
                    this.tup.cde(-1, this.xrr, false, this.xll, this.orf, this.soz, true, false)
                }
            } else {
                if (!this.clv) {
                    if (this.ovg) {
                        this.tup.cde(-1, this.xrr, false, this.xll, this.orf, this.soz, true, true)
                    } else {
                        this.tup.cde(-1, this.xrr, false, this.xll, this.orf, this.soz, false, false)
                    }
                } else {
                    this.ywg.etp.tvc("win", "#ylr");
                    this.swa();
                    this.szs()
                }
            }
        } else {
            if (this.ryv && !this.ugc && !this.clv) {
                this.mbr([this.mhp + 1]);
                if (this.ovg) {
                    this.tup.cde(-1, this.xrr, false, this.xll, this.orf, this.soz, true, true)
                } else {
                    this.tup.cde(-1, this.xrr, false, this.xll, this.orf, this.soz, false, false)
                }
            } else {
                this.ywg.etp.tvc("win", "#ylr");
                this.mbr([this.mhp + 1]);
                this.swa();
                this.szs()
            }
        }
    };
    this.mbr = function (b) {
        if (this.lft === true) {
            this.hfo.tvc("llinep", "#vxw", [b, true]);
            this.hfo.tvc("rlinep", "#vxw", [b, true])
        }
    };
    this.ywp = function (c, d, b) {
        var e = this.ywg.etp.brx("win");
        if (e) {
            if (this.win > 0 && !this.auz) {
                if (this.yzy[b] > 0) {
                    if (c == this.xll) {
                        e.nbt(this.language.nxb, this.language.win + ": " + this.jos(this.yzy[b]), c, d)
                    } else {
                        e.nbt(this.language.bsd + " " + (this.whu[b] + 1) + ": ", this.language.win + ": " + this.jos(this.yzy[b]), c, d)
                    }
                }
            } else {
                if (this.auz && this.enj > 0) {
                    if (this.yzy[b] > 0) {
                        if (this.wyb > 1) {
                            if (c == this.xll) {
                                e.nbt(this.language.nxb, this.language.win + ": " + this.jos(this.yzy[b]) + " x " + this.wyb, c, d)
                            } else {
                                e.nbt(this.language.bsd + " " + (this.whu[b] + 1) + ": ", this.language.win + ": " + this.jos(this.yzy[b]) + " x " + this.wyb, c, d)
                            }
                        } else {
                            if (c == this.xll) {
                                e.nbt(this.language.nxb, this.language.win + ": " + this.jos(this.yzy[b]), c, d)
                            } else {
                                e.nbt(this.language.bsd + " " + (this.whu[b] + 1) + ": ", this.language.win + ": " + this.jos(this.yzy[b]), c, d)
                            }
                        }
                    }
                }
            }
        }
    };
    this.pkv = function () {
        bio.yqr.fcy.lgu("wincountfade")
    };
    this.iuw = function () {
        for (var b = 0; b < this.xrr.length; b++) {
            for (var c = 0; c < this.xrr[b].length; c++) {
                this.xrr[b][c] = -1
            }
        }
    };
    this.bzt = function () {
        for (var b = 0; b < this.enk.length; b++) {
            for (var c = 0; c < this.enk[b].length; c++) {
                this.enk[b][c] = -1
            }
        }
    };
    this.zmi = function (e) {
        for (var d = 0; d < this.qmi; d++) {
            for (var b = 0; b < this.crs; b++) {
                var c = (e[d] - 1 + b >= 0) ? e[d] - 1 + b : this.xrv[d].tsa.length + e[d] - 1 + b;
                c = (c > this.xrv[d].tsa.length - 1) ? c - (this.xrv[d].tsa.length) : c;
                this.enk[d][b] = this.xrv[d].tsa[c]
            }
        }
    };
    this.jmn = function () {
        if (this.rvq) {
            for (var d = 0; d < this.abm.length; d++) {
                if (this.whu[d] < this.abm.length) {
                    var c = this.jet(this.whu[d]);
                    this.soz = this.hug(c);
                    if (this.yzy[d] > 0) {
                        for (var b = this.orf; b < this.orf + this.soz; b++) {
                            if (this.ioc && c[b] == this.imq) {
                                this.xrr[b][this.abm[this.whu[d]][b] - 1] = this.jim
                            } else {
                                this.xrr[b][this.abm[this.whu[d]][b] - 1] = c[b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.cjx = function () {
        if (this.rvq) {
            if (this.xll >= 0) {
                var d = 0;
                for (var c = 0; c < this.enk.length; c++) {
                    for (var b = 0; b < this.enk[c].length; b++) {
                        if (this.enk[c][b] == this.xll) {
                            d++
                        }
                    }
                }
                if ((this.yzy[this.abm.length] > 0 && this.kok) || (this.yzy[0] > 0 && !this.kok)) {
                    for (var c = 0; c < this.enk.length; c++) {
                        for (var b = 0; b < this.enk[c].length; b++) {
                            if (this.enk[c][b] == this.xll) {
                                this.xrr[c][b] = this.enk[c][b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.jet = function (d) {
        var c = [];
        for (var b = 0; b < this.abm[d].length; b++) {
            c[b] = this.enk[b][this.abm[d][b] - 1]
        }
        return c
    };
    this.fjm = function (c) {
        for (var b = this.orf; b < this.orf + this.soz; b++) {
            if (this.ioc && c[b] == this.imq) {
                this.xrr[b][this.abm[this.whu[this.dfp]][b] - 1] = this.jim
            } else {
                this.xrr[b][this.abm[this.whu[this.dfp]][b] - 1] = c[b]
            }
        }
    };
    this.rfp = function () {
        var d = 0;
        for (var c = 0; c < this.enk.length; c++) {
            for (var b = 0; b < this.enk[c].length; b++) {
                if (this.enk[c][b] == this.xll) {
                    this.xrr[c][b] = this.enk[c][b];
                    d++;
                    break
                }
            }
        }
        return d
    };
    this.jux = function (b) {
        if (((this.ioc && b == this.jim) && this.jim >= 0) || (b == this.imq && this.imq >= 0)) {
            return true
        }
        return false
    };
    this.yrf = function () {
        if (this.wwz) {
            this.ywg.etp.tvc("start", "#qib", [this.language.start, true]);
            if (!this.auz) {
                this.sim();
                this.ywg.qjf(false);
                this.ydx = setTimeout(this.tjm, 600)
            } else {
                this.nzj()
            }
        } else {
            if (!this.auz) {
                this.jkn()
            } else {
                this.eqq()
            }
        }
    };
    this.jkn = function () {
        if (this.win > 0) {
            if (this.zli && this.sho) {
                setTimeout(this.gpt, 400)
            } else {
                if (this.ryv || this.ofl) {
                    if (!this.xfn && !this.idu) {
                        if (this.ofl) {
                            this.xfn = true;
                            this.sim();
                            setTimeout(this.stb, 400)
                        } else {
                            clearTimeout(this.ujo);
                            this.ujo = setTimeout(this.irl, 400)
                        }
                    }
                }
            }
        } else {
            this.sxd({
                type: "roundEnded",
                sender: this.rmd,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: this.jos(this.win),
                    balanceAfter: this.jos(this.cfy)
                }
            });
            this.ywg.etp.tvc("info", "#qoz", [this.language.mua, true]);
            this.sdm();
            if (this.nuk > 0 && this.bbe >= this.nuk) {
                this.ggg(false);
                this.ywg.qjf(false);
                this.zbx();
                this.glr()
            } else {
                this.ywg.etp.tvc("start", "#qib", [this.language.start, true]);
                if (this.uic()) {
                    this.zbx();
                    this.ywg.etp.tvc("info", "#vct", [0]);
                    this.ywg.qjf(true);
                    this.ggg(true);
                    this.gem()
                } else {
                    if (this.ryv) {
                        this.laj = setTimeout(this.ijr, 400)
                    } else {
                        this.ywg.etp.tvc("info", "#vct", [0]);
                        this.ywg.qjf(true);
                        this.ggg(true)
                    }
                }
            }
        }
    };
    this.eqq = function () {};
    this.qtz = function () {
        return ((this.ryv || (this.zli && this.sho && !this.aof)) && this.trf > 1 && this.clv)
    };
    this.qgn = function () {
        var c = [],
            f = [],
            e = (this.kok) ? 0 : 1,
            b = ((this.kok && this.yzy[this.mhp] > 0) || (!this.kok && this.yzy[0] > 0)) ? this.trf - 1 : this.trf;
        for (var d = 0; d < b; d++, e++) {
            c[d] = this.whu[e];
            f[d] = this.whu[e] + 1
        }
        this.qnm = true;
        this.xdh = true;
        this.bzt();
        this.iuw();
        this.zmi((this.auz === true) ? this.eke : this.oam);
        this.jmn();
        this.cjx();
        this.ywg.etp.tvc("win", "#qoz", [this.language.win + " " + b + " " + this.language.hio, true]);
        this.mbr(f);
        this.tup.stop();
        this.tup.gof(c, this.xrr);
        this.xyg = setTimeout(this.rma, 1000)
    };
    this.rma = function () {
        if (bio.yqr.xyg >= 0 && !bio.yqr.ryv) {
            bio.yqr.xyg = -1;
            bio.yqr.sim()
        }
        if (bio.yqr.vth()) {
            bio.yqr.iae()
        } else {
            bio.yqr.yrf()
        }
    };
    this.fze = function () {
        this.gpf = true;
        this.ugc = true;
        if (!this.auz) {
            if (!this.aof) {
                if (this.qtz()) {
                    this.qgn()
                } else {
                    this.rma()
                }
            }
            if (!(this.idu || this.xdh || ((this.qnm) && !this.aof))) {
                if (!(this.zli && this.sho && !this.aof)) {
                    this.kgn()
                }
            }
        } else {
            if (!this.aof) {
                if (this.qtz()) {
                    this.qgn()
                } else {
                    this.rma()
                }
            } else {
                if (!(this.idu || this.xdh || (this.qnm && !this.aof))) {
                    this.kgn()
                } else {}
            }
        }
    };
    this.kgn = function () {
        this.ugc = true;
        if (!(this.tup.xpi() || this.puv)) {
            this.puv = true;
            if (!this.auz) {
                this.vqn()
            } else {
                this.cob();
                if (!this.wwz && this.elz > 0) {
                    if (!this.aof) {
                        this.ggg(true);
                        this.ywg.uld(true)
                    }
                }
            }
        }
    };
    this.edi = function () {
        return false
    };
    this.dgj = function () {
        return false
    };
    this.vth = function () {
        return false
    };
    this.zqi = function () {};
    this.qfs = function () {};
    this.iae = function () {};
    this.meg = function () {
        return this.wwz
    };
    this.trj = function () {
        if (!bio.yqr.xfn && !bio.yqr.idu) {
            bio.yqr.irl()
        }
    };
    this.ijr = function () {
        if (bio.yqr.ndn() != null && (bio.yqr.rqh <= 0 || (bio.yqr.auz === false && bio.yqr.uyq === false && bio.yqr.cfy - bio.yqr.jcq() < bio.yqr.uky) || (bio.yqr.auz === false && bio.yqr.uyq === false && bio.yqr.unc > 0 && bio.yqr.cfy >= bio.yqr.unc) || (bio.yqr.auz === false && bio.yqr.leb > 0 && bio.yqr.win > bio.yqr.leb))) {
            if (bio.yqr.ryv === true) {
                bio.yqr.ift()
            }
            bio.yqr.ggg(true);
            if (bio.yqr.auz === true) {
                bio.yqr.kli(bio.yqr.win);
                bio.yqr.sim();
                bio.yqr.huq();
                bio.yqr.kro();
                bio.yqr.ywg.etp.tvc("info", "#ylr");
                bio.yqr.byd(true);
                bio.yqr.ywg.uld(true)
            } else {
                bio.yqr.ywg.etp.tvc("info", "#clo");
                bio.yqr.ywg.qjf(true)
            }
        } else {
            if (!bio.yqr.tpx) {
                bio.yqr.irl()
            }
        }
    };
    this.ubb = function () {};
    this.nvz = function () {};
    this.bjs = function () {};
    this.flf = function () {};
    this.nzj = function () {};
    this.tjm = function () {};
    this.hdm = function () {};
    this.gts = function () {};
    this.wpr = function () {};
    this.xjn = function () {
        var b = this.hfo.brx("tops");
        if (b) {
            b.wyo(1)
        }
    };
    this.tud = function () {
        var b = this.hfo.brx("tops");
        if (b) {
            b.wyo(0)
        }
    };
    this.jbr = function () {};
    this.zlj = function () {};
    this.ttn = function () {};
    this.wac = function () {};
    this.ail = function () {
        if (!(this.wwz && this.auz && this.ryv)) {
            this.pli = false;
            if (!bio.olq.iza) {
                this.qnb = this.language.jee
            } else {
                this.qnb = this.language.wvq
            }
            this.nfh = setInterval(this.kik, 1000)
        }
    };
    this.kik = function () {
        var b = bio.yqr.ywg.etp.brx("info");
        if (b) {
            if (bio.yqr.pli) {
                b.qoz(bio.yqr.qnb, true)
            } else {
                b.ylr()
            }
            bio.yqr.jvb();
            bio.yqr.pli = !bio.yqr.pli
        }
    };
    this.zwu = function () {};
    this.soa = function () {};
    this.cwr = function (b) {};
    this.pcx = function (b) {
        if (b) {
            this.r1 = this.svb.qlj.qfx;
            this.r2 = this.svb.qlj.qas;
            this.r3 = this.svb.qlj.zoq;
            this.r4 = this.svb.qlj.dkv;
            this.r5 = this.svb.qlj.zqo
        } else {
            this.r1 = this.svb.qlj.r1;
            this.r2 = this.svb.qlj.r2;
            this.r3 = this.svb.qlj.r3;
            this.r4 = this.svb.qlj.r4;
            this.r5 = this.svb.qlj.r5
        }
        this.ekb.tsa = this.r1;
        this.pwk.tsa = this.r2;
        this.ssk.tsa = this.r3;
        this.pzc.tsa = this.r4;
        this.qde.tsa = this.r5
    };
    this.kob = function () {};
    this.ekh = function () {
        if (!(this.zli && this.sho)) {
            setTimeout(this.srl, 500);
            if (!this.ryv && !this.ofl && !this.zli && !this.meg()) {
                this.ywg.etp.tvc("gamble", "#wux")
            }
        } else {
            setTimeout(this.apz, 500)
        }
        this.dkh = (this.win > this.totalBet) ? true : false;
        this.qws = 0;
        this.mei = 0;
        this.vgg = 0;
        this.yag = 0;
        this.qwa = 0;
        this.mdd = this.win;
        this.jrp = new Date().getTime();
        this.aof = true;
        this.euy = 0;
        this.kro();
        this.fcy.aee("winfinal");
        this.uuu = setTimeout(this.tyo, this.skq)
    };
    this.srl = function () {
        if (bio.yqr.ryv || bio.yqr.meg()) {
            bio.yqr.ywg.edx(true)
        } else {
            bio.yqr.ywg.pmy(true)
        }
    };
    this.apz = function () {
        bio.yqr.ywg.jsp(true)
    };
    this.iab = function () {};
    this.nki = function () {};
    this.gys = function () {
        this.sim();
        this.huq();
        if (this.auz) {
            this.qnm = true
        }
        this.dtg()
    };
    this.bwk = function () {};
    this.sim = function () {
        this.xdh = true;
        this.gpf = true;
        if (this.jdj || this.aev || this.csb) {
            this.rcy(false, false)
        }
        this.ywg.etp.tvc("win", "#ylr");
        this.mbr(null);
        this.tup.stop();
        this.tup.zln()
    };
    this.huq = function () {
        if (this.hxy) {
            for (var c = 0, b = this.fcy.nte("symb"); c < b; c++) {
                this.fcy.aee("symb" + c)
            }
        }
    };
    this.odt = function () {
        if (bio.yqr.aof) {
            bio.yqr.obh = false;
            bio.yqr.euy = new Date().getTime();
            bio.yqr.fcy.lgu("wincount");
            bio.yqr.rvc += 1;
            bio.yqr.mei = 0;
            bio.yqr.vgg = 0
        } else {
            clearTimeout(bio.yqr.qae);
            if (bio.yqr.auz === true && bio.yqr.gor() === true) {
                bio.yqr.fcy.hto("freespinstart", bio.yqr.wsv(), 300)
            } else {
                if (bio.yqr.auz === false) {
                    bio.yqr.xjh(1, 300)
                }
            }
        }
    };
    this.kro = function () {
        this.fcy.aee("wincount");
        this.fcy.aee("wincount1");
        this.fcy.aee("wincount2");
        this.fcy.aee("wincount3");
        this.fcy.aee("wincount4");
        this.fcy.aee("wincount5");
        this.fcy.aee("wincount6")
    };
    this.sui = function () {
        bio.yqr.obh = true;
        if (bio.yqr.auz === true && bio.yqr.gor() === true) {
            bio.yqr.fcy.hto("freespinstart", bio.yqr.wsv(), 300)
        } else {
            if (bio.yqr.auz === false && bio.yqr.wwz === false) {
                bio.yqr.xjh(1, 300)
            }
        }
    };
    this.tyo = function () {
        var d = 0,
            b = bio.yqr.skq,
            c = 0;
        if (bio.yqr.qwa < bio.yqr.mdd) {
            if (bio.yqr.dqa == 1) {
                bio.yqr.hoy()
            } else {
                if (bio.yqr.dqa == 2) {
                    bio.yqr.xgn()
                } else {
                    if (bio.yqr.dqa == 3) {
                        bio.yqr.bqh()
                    }
                }
            }
            d = bio.yqr.wqe(bio.yqr.mdd - bio.yqr.qwa);
            bio.yqr.qwa += d;
            bio.yqr.kli(bio.yqr.yag + bio.yqr.qwa);
            bio.yqr.qws++;
            c = new Date().getTime();
            b = bio.yqr.skq + (bio.yqr.qws * bio.yqr.skq - (c - bio.yqr.jrp));
            bio.yqr.uuu = setTimeout(bio.yqr.tyo, b)
        } else {
            bio.yqr.dtg()
        }
    };
    this.hoy = function () {
        if (this.euy > 0) {
            var b = new Date().getTime() - this.euy;
            if (b > 7112 && this.mei == 0) {
                this.fcy.lgu("wincount1");
                this.mei = 1
            } else {
                if (b > (7112 + (3556 * this.mei))) {
                    if (this.mei % 2 == 0) {
                        if (this.qwa >= this.totalBet * this.bcz) {
                            this.fcy.lgu("wincount5");
                            if (this.nwj) {
                                if (!this.tup.cew) {
                                    this.tup.nkb()
                                } else {
                                    this.tup.kdc()
                                }
                            }
                        } else {
                            if (this.qwa >= this.totalBet * this.sgz) {
                                this.fcy.lgu("wincount3")
                            } else {
                                this.fcy.lgu("wincount1")
                            }
                        }
                    } else {
                        if (this.qwa >= this.totalBet * this.bcz) {
                            this.fcy.lgu((this.fcy.ion === true) ? "wincount5" : "wincount6");
                            if (this.nwj) {
                                if (!this.tup.cew) {
                                    this.tup.nkb()
                                } else {
                                    this.tup.kdc()
                                }
                            }
                        } else {
                            if (this.qwa >= this.totalBet * this.sgz) {
                                this.fcy.lgu((this.fcy.ion === true) ? "wincount3" : "wincount4")
                            } else {
                                this.fcy.lgu((this.fcy.ion === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.mei += 1
                }
            }
        }
    };
    this.xgn = function () {
        if (this.euy > 0) {
            var b = new Date().getTime() - this.euy;
            if (b > 4173 && this.mei == 0) {
                this.fcy.lgu("wincount1");
                this.mei = 1
            } else {
                if (b > (4173 + (4173 * (this.mei + this.vgg)))) {
                    if (this.mei % 2 == 0) {
                        if (this.qwa >= this.totalBet * this.bcz) {
                            this.fcy.lgu("wincount5");
                            if (this.nwj) {
                                if (!this.tup.cew) {
                                    this.tup.nkb()
                                } else {
                                    this.tup.kdc()
                                }
                            }
                            this.vgg += 1
                        } else {
                            if (this.qwa >= this.totalBet * this.sgz) {
                                this.fcy.lgu("wincount3")
                            } else {
                                this.fcy.lgu("wincount1")
                            }
                        }
                    } else {
                        if (this.qwa >= this.totalBet * this.bcz) {
                            this.fcy.lgu((this.fcy.ion === true) ? "wincount5" : "wincount6");
                            if (this.nwj) {
                                if (!this.tup.cew) {
                                    this.tup.nkb()
                                } else {
                                    this.tup.kdc()
                                }
                            }
                            this.vgg += 1
                        } else {
                            if (this.qwa >= this.totalBet * this.sgz) {
                                this.fcy.lgu((this.fcy.ion === true) ? "wincount3" : "wincount4")
                            } else {
                                this.fcy.lgu((this.fcy.ion === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.mei += 1
                }
            }
        }
    };
    this.bqh = function () {};
    this.dtg = function () {
        if (this.mdd > 0) {
            clearTimeout(this.qae);
            this.fcy.hto("wincountfade", 0, 300);
            if (this.euy > 0) {
                this.fcy.lgu("winfinal")
            } else {
                if (this.auz === false && this.wwz === false) {
                    this.xjh(1, 300)
                }
            }
        } else {
            this.sui()
        }
        this.kro();
        this.kli(this.win);
        this.hiq(this.win);
        this.aof = false;
        clearTimeout(this.uuu);
        if (!(this.ryv || this.ofl)) {
            if (!(this.sjm > 0)) {
                if (!this.zli) {
                    this.eef = setTimeout(this.bqt, 500)
                }
            } else {
                if (this.auz && this.elz > 0) {
                    this.ywg.edx(true);
                    if (!this.wwz && !this.vth()) {
                        this.ggg(true)
                    }
                }
            }
        }
        if (this.gpf) {
            if (this.qtz()) {
                this.qgn()
            } else {
                this.rma()
            }
        }
    };
    this.wqe = function (c) {
        var b = this.cqc;
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
    this.paz = function () {
        return !(this.meg() || this.ofl || this.auz)
    };
    this.mmb = function () {
        var d = bio.yqr.ywg.etp.brx("gamble"),
            c = bio.yqr.ywg.etp.brx("info"),
            b = bio.yqr.ywg.etp.brx("win");
        bio.yqr.tna();
        if (d) {
            d.bde();
            d.zoo(bio.yqr.zli)
        }
        if (b) {
            b.ylr()
        }
        if (c) {
            c.qoz(bio.yqr.upg(bio.yqr.language.awx) + ": " + bio.yqr.jos(bio.yqr.win))
        }
        bio.yqr.svb.stb()
    };
    this.stb = function () {
        if (!bio.yqr.idu) {
            if (bio.yqr.hsy != bio.yqr.abi) {
                bio.yqr.ywg.edx(true)
            }
            bio.yqr.sim();
            bio.yqr.fqx = 20;
            if (bio.yqr.win < bio.yqr.fqx) {
                bio.yqr.fqx = bio.yqr.win;
                bio.yqr.aif()
            } else {
                if (bio.yqr.win >= bio.yqr.jcq() * 25) {
                    bio.yqr.fqx = 40
                }
                bio.yqr.aif()
            }
        }
    };
    this.jlt = function () {
        this.idu = true;
        this.xfn = false;
        this.mdd = 0;
        clearTimeout(this.jiq);
        this.fcy.aee("collect");
        this.fcy.aee("collectend");
        this.fcy.lgu("collectend");
        this.hir(this.cfy, true, !this.uyq);
        this.rhe();
        this.sdm();
        this.ywg.etp.tvc("start", "#qib", [this.language.start, true]);
        this.sxd({
            type: "roundEnded",
            sender: this.rmd,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                win: this.jos(this.win),
                balanceAfter: this.jos(this.cfy)
            }
        });
        if (this.nuk > 0 && this.bbe >= this.nuk) {
            this.ggg(false);
            this.ywg.qjf(false);
            this.zbx();
            this.glr()
        } else {
            if (this.uic()) {
                this.zbx();
                this.ggg(true);
                this.ywg.qjf(true);
                this.gem()
            } else {
                this.ggg(true);
                if (!this.ryv) {
                    this.ywg.qjf(true)
                } else {
                    this.laj = setTimeout(this.ijr, 500)
                }
            }
        }
    };
    this.aif = function () {
        this.nze = false;
        this.dkh = (this.win > this.totalBet) ? true : false;
        this.qws = 0;
        this.yag = this.win;
        if (this.uyq) {
            this.lbp = this.qte - this.win
        } else {
            this.lbp = this.cfy - this.win
        }
        this.qwa = 0;
        this.mdd = this.win;
        this.jrp = new Date().getTime();
        this.xfn = true;
        this.jiq = setTimeout(this.xvq, this.mko)
    };
    this.xvq = function () {
        var d = 0,
            b = bio.yqr.skq,
            c = 0;
        if (bio.yqr.mdd > 0) {
            if (!bio.yqr.nze) {
                bio.yqr.fcy.aee("collect");
                bio.yqr.fcy.aee("collectend");
                bio.yqr.fcy.lgu("collect");
                bio.yqr.nze = true
            }
            d = Math.round(bio.yqr.mdd / bio.yqr.fqx);
            bio.yqr.mdd -= d;
            bio.yqr.qws++;
            bio.yqr.fqx -= 1;
            if (bio.yqr.mdd < 0) {
                bio.yqr.mdd = 0
            }
            bio.yqr.kli(bio.yqr.yag - (bio.yqr.win - bio.yqr.mdd));
            if (bio.yqr.uyq) {
                bio.yqr.bhl(bio.yqr.lbp + (bio.yqr.win - bio.yqr.mdd), true)
            } else {
                bio.yqr.hir(bio.yqr.lbp + (bio.yqr.win - bio.yqr.mdd), true, false)
            }
            c = new Date().getTime();
            b = bio.yqr.mko + (bio.yqr.qws * bio.yqr.mko - (c - bio.yqr.jrp));
            bio.yqr.jiq = setTimeout(bio.yqr.xvq, b)
        } else {
            if (!bio.yqr.idu) {
                bio.yqr.fcy.aee("collect");
                bio.yqr.fcy.lgu("collectend");
                bio.yqr.xfn = false;
                bio.yqr.idu = true;
                clearTimeout(bio.yqr.jiq);
                bio.yqr.hir(bio.yqr.cfy, true, !bio.yqr.uyq);
                bio.yqr.rhe();
                bio.yqr.sdm();
                bio.yqr.ywg.etp.tvc("start", "#qib", [bio.yqr.language.start, true]);
                bio.yqr.sxd({
                    type: "roundEnded",
                    sender: bio.yqr.rmd,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        win: bio.yqr.jos(bio.yqr.win),
                        balanceAfter: bio.yqr.jos(bio.yqr.cfy)
                    }
                });
                if (bio.yqr.nuk > 0 && bio.yqr.bbe >= bio.yqr.nuk) {
                    bio.yqr.ggg(false);
                    bio.yqr.ywg.qjf(false);
                    bio.yqr.zbx();
                    bio.yqr.glr()
                } else {
                    if (bio.yqr.hsy == bio.yqr.abi) {
                        bio.yqr.hsy()
                    } else {
                        if (bio.yqr.uic()) {
                            bio.yqr.zbx();
                            bio.yqr.ywg.qjf(true);
                            bio.yqr.ggg(true);
                            bio.yqr.gem()
                        } else {
                            if (!bio.yqr.ryv) {
                                bio.yqr.ywg.qjf(true)
                            } else {
                                bio.yqr.ywg.puo(true)
                            }
                            bio.yqr.ggg(true);
                            if (bio.yqr.ryv || bio.yqr.ofl) {
                                bio.yqr.ywg.etp.tvc("info", "#qoz", [bio.yqr.upg(bio.yqr.language.awx) + ": " + bio.yqr.jos(bio.yqr.win)]);
                                if (bio.yqr.ryv) {
                                    bio.yqr.laj = setTimeout(bio.yqr.ijr, 400)
                                } else {
                                    if (bio.yqr.ofl) {}
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.iwo = function (b, c, d) {
        if (b <= c) {
            return 1
        }
        var e = 0,
            f = this.xvh(b, c, d),
            g = 0;
        while (b > g) {
            f = this.xvh(b - g, c, d);
            g += f;
            e++
        }
        return e
    };
    this.xvh = function (e, b, c) {
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
    this.rlq = function (b) {
        this.thu = true;
        this.bsb();
        this.ywg.etp.tvc("info", "#qoz", ["", true]);
        this.qoi(true);
        this.wsi(b);
        if (b == bio.tfo.ioz.sfw) {
            this.jqj();
            this.ywg.etp.tvc("info", "#bdd", [0]);
            this.gjn((this.nuk > 0 && this.bbe < this.nuk), false, true);
            this.ywg.qjf(true);
            this.ggg(true);
            this.xlc()
        } else {
            if (b == bio.tfo.ioz.qqg) {
                if (this.win > 0) {
                    this.ugc = true;
                    this.idu = false;
                    this.gpf = false;
                    this.xdh = false;
                    this.fde();
                    this.kli(this.win);
                    this.ywg.etp.tvc("info", "#qoz", [this.upg(this.language.awx) + ": " + this.jos(this.win)]);
                    this.aof = false;
                    this.rcy(this.jdj, this.aev);
                    this.htx();
                    if (this.dfx() === false) {
                        this.sho = true;
                        this.ywg.etp.tvc("start", "#qib", [this.language.stb, true]);
                        this.ywg.etp.tvc("gamble", "#wux");
                        this.eef = setTimeout(this.bqt, 10)
                    } else {
                        this.sho = false
                    }
                    if (this.dgj()) {
                        this.qfs()
                    } else {
                        this.vqn();
                        this.ywg.pmy(true)
                    }
                } else {
                    this.jqj();
                    this.ywg.etp.tvc("info", "#bdd", [0]);
                    this.gjn((this.nuk > 0 && this.bbe < this.nuk), false, true);
                    this.ywg.qjf(true);
                    this.ggg(true);
                    this.xlc()
                }
                this.sjm = 0;
                this.elz = 0
            } else {
                if (b == bio.tfo.ioz.bsz || b == bio.tfo.ioz.jfv) {
                    this.sjm = 0;
                    this.elz = 0;
                    this.idu = true;
                    this.jqj();
                    this.ywg.etp.tvc("info", "#bdd", [0]);
                    this.gjn((this.nuk > 0 && this.bbe < this.nuk), false, true);
                    this.ywg.qjf(true);
                    this.ggg(true);
                    this.xlc()
                } else {
                    if (b == bio.tfo.ioz.cku || b == bio.tfo.ioz.owv || b == bio.tfo.ioz.eql || b == bio.tfo.ioz.kag) {
                        this.zvc(b)
                    } else {
                        if (b == bio.tfo.ioz.agm) {
                            this.pcx(false);
                            this.sjm = 0;
                            this.elz = 0;
                            this.sho = true;
                            this.idu = false;
                            if (this.win > 0) {
                                this.kli(this.win);
                                this.ywg.etp.tvc("info", "#qoz", [this.upg(this.language.awx) + ": " + this.jos(this.win)]);
                                if (this.dfx() === false) {
                                    this.ywg.etp.tvc("start", "#qib", [this.language.stb, true]);
                                    this.ywg.etp.tvc("gamble", "#wux");
                                    this.eef = setTimeout(this.bqt, 10)
                                } else {
                                    this.sho = false
                                }
                                this.ywg.pmy(true)
                            } else {
                                this.jqj();
                                this.ywg.etp.tvc("info", "#bdd", [0]);
                                this.gjn((this.nuk > 0 && this.bbe < this.nuk), false, true);
                                this.ywg.qjf(true);
                                this.ggg(true);
                                this.xlc()
                            }
                        } else {
                            if (b == bio.tfo.ioz.nws) {
                                this.pcx(false);
                                this.sjm = 0;
                                this.elz = 0;
                                this.idu = true;
                                this.jqj();
                                this.ywg.etp.tvc("info", "#bdd", [0]);
                                this.gjn((this.nuk > 0 && this.bbe < this.nuk), false, true);
                                this.ywg.qjf(true);
                                this.ggg(true);
                                this.xlc()
                            } else {
                                if (b == bio.tfo.ioz.vhl) {
                                    this.sjm = 0;
                                    this.elz = 0;
                                    this.wpe();
                                    this.thu = true;
                                    if (this.win == 0) {
                                        this.gjn((this.nuk > 0 && this.bbe < this.nuk), false, true);
                                        this.xlc()
                                    }
                                } else {
                                    if (b == bio.tfo.ioz.zmd) {
                                        this.sjm = 0;
                                        this.elz = 0;
                                        this.cpm();
                                        this.thu = true
                                    } else {
                                        this.igr(b)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.zvc = function (b) {};
    this.igr = function (b) {};
    this.wsi = function (b) {
        if (bio.pql.value9 && bio.olq.nqd == bio.uum.vua && bio.olq.fzj() === false) {
            return
        }
        if (b == bio.tfo.ioz.owv || b == bio.tfo.ioz.eql || b == bio.tfo.ioz.kag || b == bio.tfo.ioz.cku) {
            this.fcy.lgu("freespinstart")
        } else {
            if (!((b == bio.tfo.ioz.vhl && this.win > 0) || b == bio.tfo.ioz.zmd)) {
                this.fcy.lgu("start");
                this.stq()
            }
        }
    };
    this.vlx = function () {
        this.fud();
        this.qoi(true);
        if (this.ekb.dbz < this.crs || this.ekb.loo > 0) {
            this.kvj()
        } else {
            var b = this.ekb.dbz * this.eds;
            setTimeout(this.kvj, b)
        }
    };
    this.kvj = function () {
        if (!bio.yqr.qud) {
            if (!bio.yqr.bye && bio.yqr.owk()) {
                bio.yqr.ywg.etp.tvc("start", "#qib", [bio.yqr.language.qhb, true])
            }
            bio.yqr.lur();
            for (var c = 0, b = bio.yqr.xrv.length; c < b; c++) {
                if (bio.yqr.xrv[c] && bio.yqr.rdx[c]) {
                    bio.yqr.xrv[c].qqo(bio.yqr.oam[c], bio.yqr.pch[c] - bio.yqr.pch[0] + bio.yqr.mnp[c], bio.yqr.ypc)
					/*-------------*/
					for(var j=0; j<gameController.reels['reel'+(c+1)].length; j++){
						
					if(gameController.reels['reel'+(c+1)][j]!=""){
						
					 bio.yqr.xrv[c].lyi[j+1]=parseInt(gameController.reels['reel'+(c+1)][j]);	
						
					}	
						
					
					
					}
					/*------------*/
                }
            }
            bio.yqr.qud = true;
            bio.yqr.ywk = true;
            if (bio.yqr.qkh === true) {
                bio.yqr.bsp()
            }
        }
    };
    this.jgn = function () {};
    this.pbf = function () {};
    this.clg = function () {
        this.thu = false;
        this.ofl = false;
        this.sho = true;
        this.qnm = false;
        this.bsb();
        this.vlx();
        this.ywg.puo(true);
        this.dgt()
    };
    this.urs = function () {
        this.thu = false;
        this.ofl = true;
        this.sho = false;
        this.qnm = false;
        this.bsb();
        if (this.riv && this.riv.kgg()) {
            this.hir(this.cfy, false, true);
            this.riv.wwe(this.cfy, this.win, true);
            setTimeout(this.riv.sks, 1000)
        } else {
            this.vlx();
            this.ywg.puo(true);
            this.dgt()
        }
    };
    this.wsr = function () {
        this.thu = false;
        this.sho = false;
        this.bgc = true;
        this.bsb();
        this.lpn();
        if (this.riv && this.riv.kgg()) {
            this.riv.qtl();
            this.hir(this.cfy, false, true);
            setTimeout(this.riv.sks, 100)
        } else {
            this.stb()
        }
    };
    this.cpm = function () {
        this.thu = false;
        this.bsb();
        if (this.riv) {
            if (!this.riv.kgg()) {
                this.gpt()
            } else {
                this.riv.pcr()
            }
            this.hir(this.cfy, false, true);
            this.riv.wwe(this.cfy, this.win, true);
            this.riv.qjf(true)
        }
    };
    this.wpe = function () {
        this.thu = false;
        this.bsb();
        if (this.riv) {
            if (!this.riv.kgg() && this.win > 0) {
                this.gpt()
            }
            this.riv.wwe(this.cfy, this.win, true);
            if (this.win == 0) {
                this.riv.etp.tvc("info", "#ylr");
                setTimeout(this.uhk, 1000)
            }
        }
    };
    this.ezj = function () {};
    this.oqz = function () {};
    this.lbq = function () {};
    this.jre = function () {};
    this.kjb = function () {};
    this.ulp = function () {};
    this.eln = function (b) {
        if (b == bio.una.prn) {
            this.ywg.etp.tvc("info", "#qoz", [this.language.jse, true])
        } else {
            if (b == bio.una.puu) {
                this.ywg.etp.tvc("info", "#qoz", [this.language.tbr + " " + this.jos(this.yfe), true])
            } else {
                if (b >= bio.una.ixf) {
                    this.rnz();
                    if (b == bio.una.wro || b == bio.una.deu) {
                        this.stop()
                    }
                    this.ywg.etp.tvc("info", "#ylr");
                    this.ywg.qjf(false);
                    this.ggg(false)
                }
            }
        }
        this.zbx();
        if (b < bio.una.ixf) {
            this.bgc = true;
            this.ywg.qjf(true);
            this.ggg(true)
        } else {
            this.ebu([{
                umd: b
            }])
        }
    };
    this.ezc = function (c, e) {
        var d = this.hfo.brx("stats"),
            b = this.hfo.brx("history");
        if (this.zii) {
            if (!this.ipo) {
                if (d && d.kgg()) {
                    d.qjf(false);
                    d.tsg(false)
                }
                this.hfo.tvc("settings", "#zln");
                if (this.riv != null && this.riv.kgg()) {
                    this.riv.etp.tvc("info", "#qoz", [c, true]);
                    this.riv.qjf(false);
                    this.ymc()
                } else {
                    if (this.ywg != null) {
                        if (this.hbe != null && this.hbe.kgg()) {
                            this.rmf()
                        }
                        this.ywg.qjf(false);
                        this.rnz();
                        this.stop();
                        if (this.utg.csj === false) {
                            this.ywg.etp.tvc("setting", "#zoo", [false])
                        }
                        this.ywg.etp.tvc("info", "#qoz", [c, true])
                    } else {
                        this.kup(c)
                    }
                }
            } else {
                this.stop();
                this.ilx();
                if (b) {
                    b.tzb(true)
                }
                this.xtk(this.upg(c))
            }
        } else {
            this.kup(c)
        }
        if (e) {
            if (!this.ipo && this.svb.qlj.qja == 0 && bio.pql.value46 > 0) {
                this.axn((this.rqg) ? bio.pql.value71 : bio.pql.value47)
            } else {
                setTimeout(this.abi, bio.pql.value10)
            }
        }
    };
    this.sqf = function (b) {
        this.cfy = b;
        this.bsb();
        if (((this.riv && !this.riv.kgg() || !this.riv) && !this.hbe.kgg())) {
            this.hir(b, true, true)
        } else {
            if (this.riv && this.riv.kgg()) {
                this.riv.etp.tvc("creditd", "#qib", [this.ztt(b), true]);
                this.hir(b, false, true)
            }
        }
        if (this.cfy > 0) {
            this.lpn()
        } else {
            this.jqj()
        }
    };
    this.hir = function (d, b, c) {
        umh.prototype.hir.call(this, d, b);
        c = (c != null && c === true) ? true : false;
        if (c) {
            this.sxd({
                type: "balance",
                sender: this.rmd,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    amount: this.jos(d)
                }
            })
        }
    };
    this.ttk = function (b) {
        if (b == bio.language.EN || b == bio.language.US) {
            return new xbe()
        } else {
            if (b == bio.language.ES || b == bio.language.CO || b == bio.language.MX || b == bio.language.CL || b == bio.language.VE) {
                return new ann()
            } else {
                if (b == bio.language.DE || b == bio.language.AT) {
                    return new hqf()
                } else {
                    if (b == bio.language.PT || b == bio.language.BR) {
                        return new orh()
                    } else {
                        if (b == bio.language.RU) {
                            return new kur()
                        } else {
                            if (b == bio.language.EE) {
                                return new hsw()
                            } else {
                                if (b == bio.language.TR) {
                                    return new brb()
                                } else {
                                    if (b == bio.language.CZ) {
                                        return new oho()
                                    } else {
                                        if (b == bio.language.GR) {
                                            return new etj()
                                        } else {
                                            if (b == bio.language.BG) {
                                                return new agi()
                                            } else {
                                                if (b == bio.language.GE) {
                                                    return new fvb()
                                                } else {
                                                    if (b == bio.language.HU) {
                                                        return new oyv()
                                                    } else {
                                                        if (b == bio.language.RO) {
                                                            return new mnv()
                                                        } else {
                                                            if (b == bio.language.FR) {
                                                                return new coi()
                                                            } else {
                                                                if (b == bio.language.HR) {
                                                                    return new ntx()
                                                                } else {
                                                                    if (b == bio.language.IT) {
                                                                        return new upm()
                                                                    } else {
                                                                        if (b == bio.language.SE) {
                                                                            return new yav()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.jes = function () {
        var f = this.hfo.brx("stats"),
            e = this.hfo.brx("topb"),
            c = this.hfo.brx("topi"),
            b = this.hfo.brx("betsel"),
            d = this.hfo.brx("linesel");
        this.ygi();
        this.ywg.ecx(this.wim, 0);
        this.zwj[0] = this.language.cui;
        this.zwj[1] = this.language.bco;
        this.ywg.ecx(this.zwj, 1);
        this.msx[0] = this.language.nnx;
        this.msx[1] = this.language.wdm;
        if (this.riv) {
            this.riv.ecx(this.msx, 0)
        }
        if (this.ryv) {
            this.ywg.etp.tvc("start", "#qib", [this.language.start])
        } else {
            if (this.win > 0 && !this.ofl && !this.idu && !this.auz) {
                this.ywg.etp.tvc("start", "#qib", [this.language.stb])
            } else {
                this.ywg.etp.tvc("start", "#qib", [this.language.start])
            }
        }
        this.ywg.etp.tvc("gamble", "#qib", [this.language.zli]);
        if (this.dfx() === false) {
            this.ywg.etp.tvc("bet", "#qib", [this.language.oml]);
            if (this.ndn() != null) {
                this.ywg.etp.tvc("astart", "#qib", [this.language.dzi])
            } else {
                this.ywg.etp.tvc("astart", "#qib", [this.language.ryv])
            }
        }
        this.ywg.etp.tvc("exit", "#qib", [(bio.pql.value50.g === true) ? this.language.stm : this.language.hin]);
        this.ywg.etp.tvc("line", "#qib", [this.language.hio]);
        this.ywg.etp.tvc("creditd", "#gno", [(this.ndk()) ? this.language.mbn : this.language.cfy]);
        this.ywg.etp.tvc("betd", "#gno", [this.language.oml]);
        this.ywg.etp.tvc("help", "#qib", [this.language.cth]);
        if (this.riv) {
            this.riv.etp.tvc("creditd", "#gno", [(this.ndk()) ? this.language.mbn : this.language.cfy]);
            this.riv.etp.tvc("wind", "#gno", [this.language.win]);
            this.riv.etp.tvc("gambled", "#gno", [this.language.irc]);
            this.riv.etp.tvc("colorwind", "#gno", [this.language.mkg]);
            this.riv.etp.tvc("suitwind", "#gno", [this.language.man]);
            if (this.utg.jps === false || this.utg.csj === false) {
                this.riv.etp.tvc("collect", "#qib", [this.language.stb]);
                this.riv.etp.tvc("half", "#qib", [this.language.rvn])
            }
        }
        if (e) {
            e.etp.tvc("language", "#yab", [this.language.language]);
            e.etp.tvc("audio", "#yab", [this.language.audio]);
            e.etp.tvc("melody", "#yab", [this.language.sxc]);
            e.etp.tvc("turbo", "#yab", [this.language.bye]);
            e.etp.tvc("fullscreen", "#yab", [this.language.iua]);
            e.etp.tvc("help", "#yab", [this.language.umz]);
            e.etp.tvc("history", "#yab", [this.language.vfc]);
            e.etp.tvc("statistic", "#yab", [this.language.mik]);
            e.etp.tvc("rules", "#yab", [this.language.kjj])
        }
        if (c) {
            c.yab("freeplay", this.language.mbn)
        }
        if (b) {
            b.jsb = this.language.cqc
        }
        if (d) {
            d.jsb = this.language.hio
        }
        if (f) {
            if (bio.pql.value36) {
                f.jsb = this.upg(this.language.mik)
            } else {
                if (bio.pql.value37) {
                    f.jsb = this.upg(this.language.rzt)
                }
            }
            if (f.wtl != null) {
                f.wtl.qib(this.language.ret, false)
            }
            if (f.tdh != null) {
                f.tdh.qib(this.language.daf, false)
            }
        }
        this.hbe.etp.tvc("return", "#qib", [this.language.ret, false]);
        this.dil();
        this.hfo.tvc("settings", "#jes", [this.language, true]);
        this.hfo.tvc("autop", "#jes", [this.language]);
        if (this.xtj) {
            if (this.xtj.ltm) {
                this.xtj.ltm.innerHTML = this.language.wpy
            }
            if (this.xtj.jzg) {
                this.xtj.jzg.innerHTML = this.language.gku
            }
            if (this.xtj.rnb) {
                this.xtj.rnb.innerHTML = this.language.pjf
            }
        }
    };
    this.dil = function () {};
    this.ngh = function () {
        if (this.ipo) {
            return false
        }
        if (typeof scripts !== "undefined" && scripts.length === 2) {
            return false
        }
        return true
    };
    this.vxp = function () {
        var j = new Date().getTime(),
            k = [],
            f = 40,
            e = 50,
            l = 750;
        if (!this.cxc) {
            this.cxc = new Date().getTime();
            this.oji = false;
            return false
        }
        if (this.ngh() && j - this.cxc > f * e * l) {
            for (var g = 0, d = this.owe.length; g < d; g++) {
                k[g] = this.owe[g] + ((g > 0) ? j % 60 : 0)
            }
            this.pch = k;
            this.pkp = 5 + j % 50;
            return true
        }
        return false
    };
    this.jcq = function () {
        return this.cqc * this.hio
    };
    this.hdj = function () {
        return this.yfe
    };
    this.eze = function () {
        return this.gly
    };
    this.qen = function (c) {
        for (var d = 0; d < this.vvn.length; d++) {
            var b = this.vvn[d] * this.hio;
            if (b > this.gly || (c && (this.cfy > 0 && this.cfy < b))) {
                return d - 1
            } else {
                if (b == this.gly || d == this.vvn.length - 1) {
                    return d
                }
            }
        }
        return -1
    };
    this.hll = function () {
        for (var c = 0; c < this.vvn.length; c++) {
            var b = this.vvn[c] * this.hio;
            if ((b >= this.yfe && b < this.gly)) {
                return c
            }
        }
        return -1
    };
    this.yvm = function () {
        for (var c = 0; c < this.vvn.length; c++) {
            var b = this.vvn[c] * this.mhp;
            if ((b >= this.yfe && b < this.gly)) {
                return c
            }
        }
        return -1
    };
    this.jvi = function () {
        var d = this.qen(true);
        var b = this.hll();
        var c = this.vvn.length - 1;
        c = (c > d) ? d : c;
        if (c > 0) {
            while (this.vvn[c] * this.hio > this.cfy) {
                c--;
                if (c <= b) {
                    break
                }
            }
        }
        this.lmy = (c < b) ? b : c;
        this.vsa(false, false);
        if (this.jcq() > this.cfy) {
            this.ywg.etp.tvc("info", "#qoz", [this.language.jse, true])
        } else {
            if (this.jcq() < this.yfe) {
                this.ywg.etp.tvc("info", "#qoz", [this.language.tbr + " " + this.jos(this.yfe), true])
            }
        }
    };
    this.vsa = function (j, g) {
        var f = this.ywg.etp.brx("info"),
            b = this.hfo.brx("betsel"),
            d = this.hfo.brx("linesel"),
            c = this.hll(),
            e = this.qen(true);
        this.lmy = (this.lmy < c && c >= 0) ? c : this.lmy;
        this.lmy = (this.lmy > e && e > 0) ? e : this.lmy;
        this.cqc = this.vvn[this.lmy];
        this.totalBet = this.jcq();
        this.qoi(false);
        if (this.dfx() == true) {
            this.fcy.lgu("btn")
        } else {
            if (g) {
                if (this.hio == this.mhp) {
                    this.fcy.lgu("maxstep")
                } else {
                    this.fcy.lgu("step" + ((this.hio / this.aod) % 12))
                }
            } else {
                if (this.lmy == e) {
                    this.fcy.lgu("maxstep")
                } else {
                    this.fcy.lgu("step" + (this.lmy % 12))
                }
            }
        }
        if (f) {
            if (f.pmp() === false) {
                f.ajz();
                f.qoz(this.ogd());
                f.clo()
            } else {
                if (this.ssp()) {
                    f.qoz(this.ogd());
                    f.bdd(0)
                }
            }
        }
        if (b) {
            b.wyo(this.lmy, true)
        }
        if (d) {
            d.hrx(this.hio, false)
        }
        if (this.jmv && g) {
            this.tup.gof()
        }
    };
    this.pwv = function () {
        var c = this.ywg.etp.brx("info"),
            b = this.qen(true);
        this.lmy = (this.lmy > b && b > 0) ? b : this.lmy;
        this.cqc = this.vvn[this.lmy];
        this.totalBet = this.jcq();
        this.qoi(false);
        if (c) {
            if (c.pmp() === false) {
                c.ajz();
                c.qoz(this.ogd());
                c.clo()
            } else {
                if (this.ssp()) {
                    c.qoz(this.ogd());
                    c.bdd(0)
                }
            }
        }
    };
    this.wkb = function (b) {
        var e = this.ywg.etp.brx("info"),
            d = this.hfo.brx("llinep"),
            c = this.hfo.brx("rlinep");
        this.hio = this.itn[b];
        this.totalBet = this.jcq();
        if (this.jmv) {
            this.tup.gof()
        }
        if (d) {
            d.bnf(this.hio)
        }
        if (c) {
            c.bnf(this.hio)
        }
        this.qoi(false);
        if (e && e.pmp() === false) {
            e.ajz();
            e.qoz(this.ogd());
            e.clo()
        }
    };
    this.ogd = function () {
        return this.language.hio + ": " + this.hio + ((bio.olq.mdi() === true) ? "|" : "  -  ") + this.language.oml + "/" + this.language.bsd + ": " + this.jos(this.cqc)
    };
    this.xcg = function (b) {
        bio.yqr.lmy = b;
        bio.yqr.pwv()
    };
    this.inz = function () {
        return this.vmz != this.mhp
    };
    this.myh = function (d) {
        var b = bio.yqr.hfo.brx("betsel"),
            c = bio.yqr.hfo.brx("linesel");
        bio.yqr.wkb(d);
        if (b) {
            b.ndq(bio.yqr.hll(), bio.yqr.qen(true));
            b.wyo(bio.yqr.lmy, false)
        }
        if (c) {
            c.hrx(bio.yqr.hio, false)
        }
        bio.yqr.jvb()
    };
    this.xlc = function () {
        if (bio.pql.value78 && this.dfx() === false) {
            if (bio.pql.value78.t === true) {
                this.hfo.tvc("topb", "#tsg", [true])
            }
            if (bio.pql.value78.b === true && this.uyq === false) {
                this.hfo.tvc("betsel", "#tsg", [true]);
                this.hfo.tvc("linesel", "#tsg", [true])
            }
            if (bio.pql.value78.t === true || bio.pql.value78.b === true) {
                this.vka()
            }
            this.jvb();
            if (bio.pql.value78.d > 0) {
                this.pgh = setTimeout(this.avv, bio.pql.value78.d)
            }
        }
    };
    this.avv = function () {
        bio.yqr.bql();
        clearTimeout(bio.yqr.pgh)
    };
    this.cge = function (c) {
        var b = this.hfo.brx("betsel");
        if (b && b.kgg() && b.hon()) {
            this.bql(c)
        } else {
            umh.prototype.cge.call(this, c)
        }
    };
    this.vka = function () {
        if (this.canvas) {
            this.canvas.onmousemove = function (b) {
                bio.yqr.sud(b)
            };
            this.canvas.ontouchmove = function (b) {
                bio.yqr.sud(b)
            }
        }
    };
    this.dss = function () {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.sud = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        var l = 0,
            k = 0,
            d = false,
            m = this.hfo.brx("topb"),
            b = this.hfo.brx("betsel"),
            e = this.hfo.brx("linesel");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.drb) {
                l = g.pageX - this.offsetLeft;
                k = g.pageY - this.offsetTop
            } else {
                l = Math.round((g.pageX - this.offsetLeft) / this.tqh);
                k = Math.round((g.pageY - this.offsetTop) / this.hds)
            }
        } else {
            if (!this.drb) {
                l = c.pageX - this.offsetLeft;
                k = c.pageY - this.offsetTop
            } else {
                l = Math.round((c.pageX - this.offsetLeft) / this.tqh);
                k = Math.round((c.pageY - this.offsetTop) / this.hds)
            }
        }
        if (b && b.kgg()) {
            if (b.edn(l, k, d)) {
                return
            }
        }
        if (e && e.kgg()) {
            if (e.edn(l, k, d)) {
                return
            }
        }
        if (m && m.kgg()) {
            m.edn(l, k)
        }
        for (var f = 0, j = this.xrv.length; f < j; f++) {
            if (this.xrv[f].edn(l, k, d)) {
                return
            }
        }
    };
    this.pqr = function () {
        var b = this.hfo.brx("betsel"),
            c = this.hfo.brx("linesel");
        if (this.qil >= 0) {
            return
        }
        if (b) {
            b.yrt();
            b.ndq(this.hll(), this.qen(true));
            b.wyo(this.lmy, false)
        }
        if (c) {
            c.yrt();
            c.hrx(this.hio, false)
        }
        this.fcy.aee("panel_in");
        this.fcy.lgu("panel_in");
        this.ggg(false);
        this.jrp = new Date().getTime();
        this.qws = 0;
        this.qil = setTimeout(this.yys, 89)
    };
    this.bql = function (d) {
        var b = this.hfo.brx("betsel"),
            c = this.hfo.brx("linesel"),
            e = this.hfo.brx("topb");
        if (this.qil >= 0 || !((e && e.kgg()) || (b && b.kgg()) || (c && c.kgg()))) {
            return
        }
        if (d == this.edz || d == this.lnl || d == this.dji || d == this.zwk) {
            d();
            return
        }
        if (b) {
            b.nii()
        }
        if (c) {
            c.nii()
        }
        if (e) {
            e.nii()
        }
        this.fcy.aee("panel_out");
        this.fcy.lgu("panel_out");
        this.mwx = d;
        this.jrp = new Date().getTime();
        this.qws = 0;
        this.qil = setTimeout(this.bpn, 89)
    };
    this.yys = function () {
        var b = bio.yqr.hfo.brx("betsel"),
            f = bio.yqr.hfo.brx("linesel"),
            e = (!b || (b && !b.ayb())),
            c = (!f || (f && !f.ayb())),
            g = 0,
            d = 0;
        bio.yqr.jvb();
        bio.yqr.qws++;
        if (e && c) {
            bio.yqr.vka();
            clearTimeout(bio.yqr.qil);
            bio.yqr.qil = -1
        } else {
            g = new Date().getTime();
            d = 89 + (bio.yqr.qws * 89 - (g - bio.yqr.jrp));
            bio.yqr.qil = setTimeout(bio.yqr.yys, d)
        }
    };
    this.bpn = function () {
        var b = bio.yqr.hfo.brx("betsel"),
            g = bio.yqr.hfo.brx("linesel"),
            k = bio.yqr.hfo.brx("topb"),
            f = (!b || (b && !b.ayb())),
            d = (!g || (g && !g.ayb())),
            c = (!k || (k && !k.ayb())),
            j = 0,
            e = 0;
        bio.yqr.jvb();
        bio.yqr.qws++;
        if (f && d && c) {
            bio.yqr.dss();
            clearTimeout(bio.yqr.qil);
            bio.yqr.qil = -1;
            if (bio.yqr.ssp()) {
                bio.yqr.ggg(true)
            }
            if (bio.yqr.inz()) {
                bio.yqr.tup.zln()
            }
            if (typeof bio.yqr.mwx === "function") {
                bio.yqr.mwx();
                bio.yqr.mwx = null
            }
        } else {
            j = new Date().getTime();
            e = 89 + (bio.yqr.qws * 89 - (j - bio.yqr.jrp));
            bio.yqr.qil = setTimeout(bio.yqr.bpn, e)
        }
    };
    this.mwx = function () {};
    this.sll = function () {
        this.fcy.aee("start")
    };
    this.dvg = function () {};
    this.ygr = function () {
        if (bio.yqr.cou >= 0) {
            clearTimeout(bio.yqr.cou);
            bio.yqr.cou = -1;
            bio.yqr.ywg.etp.tvc("betpopup", "#tsg", [false]);
            bio.yqr.jvb()
        }
    };
    this.stop = function () {
        umh.prototype.stop.call(this);
        this.dss();
        this.tna();
        if (this.ywg != null) {
            this.ywg.etp.tvc("gamble", "#bde");
            this.ywg.etp.tvc("info", "#ylr");
            this.ywg.etp.tvc("win", "#ylr");
            this.ywg.stop()
        }
        if (this.tup != null) {
            this.mbr(null);
            this.tup.stop();
            this.tup.zln()
        }
        if (!this.ipo || (this.ipo && !this.thk)) {
            this.rcy(false, false);
            this.jvb()
        }
        this.hvd();
        clearTimeout(this.uuu);
        clearTimeout(this.jiq);
        clearTimeout(this.ujo);
        clearTimeout(this.cou);
        clearTimeout(this.zge);
        clearTimeout(this.ydx);
        clearTimeout(this.laj);
        clearTimeout(this.yga);
        clearTimeout(this.anb);
        if (this.gss) {
            window.uvn(this.id);
            this.id = 0
        } else {
            clearTimeout(this.id)
        }
        clearTimeout(this.qil);
        clearInterval(this.nfh);
        this.dlr();
        if (this.riv != null && this.riv.kgg()) {
            this.riv.qtl();
            this.riv.etp.tvc("info", "#ylr")
        }
        this.ljq()
    };
    this.dlr = function () {};
    this.rhe = function () {
        var b = this.hfo.brx("winp");
        if (b && b.kgg()) {
            b.tsg(false, true)
        }
    };
    this.dfe = function (b) {
        if (this.auz) {
            this.ywg.etp.zwf("buttons", "#tsg", [false]);
            this.ywg.etp.zwf("freespin", "#tsg", [b]);
            this.ywg.etp.zwf("settings", "#tsg", [b])
        } else {
            if (this.uyq) {
                this.ywg.etp.zwf("buttons", "#tsg", [false]);
                this.ywg.etp.zwf("start", "#tsg", [b]);
                this.ywg.etp.zwf("settings", "#tsg", [b])
            } else {
                this.ywg.etp.zwf("buttons", "#tsg", [b])
            }
        }
        this.jvb()
    };
    this.byd = function (b) {};
    this.kli = function (c) {
        var d = this.hfo.brx("winp"),
            b = this.hfo.brx("fwinp");
        if (!this.auz && d) {
            d.qib(this.jos(c), true)
        } else {
            if (b) {
                if (c > 0) {
                    b.qib(this.jos(c), true)
                } else {
                    b.qib("", true)
                }
            }
        }
        this.hfo.zwf("jackpots", "#jvb")
    };
    this.pix = function (d) {
        var c = this.hfo.brx("winp"),
            b = this.hfo.brx("fwinp");
        if (!this.auz && c) {
            c.qib(d, true)
        } else {
            if (b) {
                b.qib(d, true)
            }
        }
        this.hfo.zwf("jackpots", "#jvb")
    };
    this.hiq = function (b) {
        if (!this.auz && !this.wwz) {
            this.ywg.etp.tvc("info", "#qoz", [this.upg(this.language.awx) + ": " + this.jos(this.win)])
        }
    };
    this.bqt = function () {
        if (!bio.yqr.idu && !bio.yqr.xfn && ((bio.yqr.riv && !bio.yqr.riv.kgg()) || !bio.yqr.riv) && !bio.yqr.tpx && !bio.yqr.ipo) {
            if (bio.yqr.win > 0 && (bio.yqr.rvc > 0 || bio.yqr.svb.qlj.apw == bio.tfo.ioz.agm)) {
                bio.yqr.fcy.aee("gambleprop");
                bio.yqr.fcy.lgu("gambleprop");
                bio.yqr.ivu = false
            } else {
                bio.yqr.ivu = true
            }
        }
    };
    this.tna = function () {
        this.fcy.aee("gambleprop");
        this.ivu = false;
        clearTimeout(this.eef)
    };
    this.uxk = function () {
        var b = bio.yqr.hfo.brx("finfop");
        if (!bio.yqr.bpt && b && b.kgg()) {
            bio.yqr.bpt = true;
            bio.yqr.fcy.aee("freespininit");
            bio.yqr.fcy.aee("freespinwaiting");
            bio.yqr.fcy.lgu("freespinwaiting")
        }
    };
    this.xap = function () {
        this.bpt = false;
        this.fcy.aee("freespininit");
        this.fcy.aee("freespinwaiting")
    };
    this.iks = function () {};
    this.rcy = function (e, c) {
        e = (e != null && e === true);
        c = (c != null && c === true);
        for (var d = 0, b = bio.yqr.xrv.length; d < b; d++) {
            if (bio.yqr.xrv[d]) {
                bio.yqr.xrv[d].ryi = e;
                bio.yqr.xrv[d].gjl = c;
                bio.yqr.xrv[d].jvb()
            }
        }
        if (bio.yqr.csb) {
            bio.yqr.hgo()
        }
    };
    this.lna = function (d) {
        for (var c = 0, b = bio.yqr.xrv.length; c < b; c++) {
            if (bio.yqr.xrv[c]) {
                bio.yqr.xrv[c].ieu = d;
                bio.yqr.xrv[c].jvb()
            }
        }
        if (bio.yqr.csb) {
            bio.yqr.hgo()
        }
    };
    this.qvw = function () {
        return (this.cfy == 0 && this.auz == false && (this.state == bio.tfo.ioz.sfw || (this.state == bio.tfo.ioz.qqg && this.win == 0) || this.state == bio.tfo.ioz.bsz || (this.state == bio.tfo.ioz.vhl && this.win == 0) || this.state == bio.tfo.ioz.jfv || (this.state == bio.tfo.ioz.agm && this.win == 0) || this.state == bio.tfo.ioz.nws))
    };
    this.swp = function () {
        var b = this.hfo.brx("topi"),
            c = null;
        if (this.ywg) {
            c = this.ywg.etp.brx("setting")
        }
        if ((b && b.hon() === true) || (c && c.hon() === true)) {
            return true
        }
        return false
    };
    this.fza = function () {
        if (bio.yqr.lym != "" && bio.yqr.ndk() === false) {
            bio.yqr.ywg.etp.tvc("info", "#ajz");
            bio.yqr.ywg.etp.tvc("info", "#bdd", [0])
        }
    };
    this.nkw = function () {
        if (this.ipo === false && bio.olq.odk() === true) {
            return true
        }
        return false
    };
    this.ggg = function (e) {
        umh.prototype.ggg.call(this, e);
        var c = (e && !this.ryv);
        for (var d = 0, b = this.xrv.length; d < b; d++) {
            this.xrv[d].wsn(c)
        }
        if (this.ywg) {
            this.ywg.etp.tvc("setting", "#wsn", [c])
        }
        if (c === true) {
            this.tdt()
        } else {
            this.ufu();
            this.anz()
        }
    };
    this.qsq = function (e) {
        umh.prototype.qsq.call(this, e);
        var c = (e && !this.ryv);
        for (var d = 0, b = this.xrv.length; d < b; d++) {
            this.xrv[d].wsn(c)
        }
        if (this.ywg) {
            this.ywg.etp.tvc("setting", "#wsn", [c])
        }
    };
    this.knt = function (e) {
        umh.prototype.knt.call(this, e);
        var c = (e && !this.ryv);
        for (var d = 0, b = this.xrv.length; d < b; d++) {
            this.xrv[d].wsn(c)
        }
        if (this.ywg) {
            this.ywg.etp.tvc("setting", "#wsn", [c])
        }
    };
    this.lmm = function () {
        umh.prototype.lmm.call(this);
        if (bio.yqr.igd === true && bio.yqr.pes === true) {
            bio.yqr.zbx()
        }
    };
    this.vqe = function () {
        return (this.cfy >= this.jcq() && this.jcq() >= this.yfe && ((bio.yqr.ndn() != null && this.hfo.tvc("settings", "#lxz") > 0) || bio.yqr.ndn() == null))
    };
    this.ssp = function () {
        var c = this.hfo.brx("stats"),
            b = this.hfo.brx("settings");
        if (this.hbe && this.hbe.kgg()) {
            return false
        } else {
            if (this.riv && this.riv.kgg()) {
                return false
            } else {
                if (c && c.kgg()) {
                    return false
                } else {
                    if (b && b.kgg()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.zua = function () {
        if (this.ywg) {
            var b = this.ywg.etp.brx("start");
            if (b && b.hon() && !b.sjx()) {
                return true
            }
        }
        return false
    };
    this.xxb = function (b) {
        umh.prototype.xxb.call(this, b);
        if (this.ndk() === false) {
            if (this.ywg) {
                this.ywg.etp.tvc("idd", "#qib", [" " + ((b > 0) ? b : ""), this.ssp()])
            }
            if (this.riv) {
                this.riv.etp.tvc("idd", "#qib", [" " + ((b > 0) ? b : ""), true])
            }
        }
    };
    this.lgy = function () {
        umh.prototype.lgy.call(this);
        var b = "";
        if (bio.pql.value49) {
            b += bio.yqr.okc()
        }
        if (bio.pql.value49 && sessionStorage.sessionValue15 == "true") {
            b += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            b += bio.yqr.jti()
        }
        if (bio.pql.value49 && sessionStorage.sessionValue15 == "true") {
            b += "]"
        }
        if (bio.yqr.ywg) {
            bio.yqr.ywg.etp.tvc("timed", "#qib", [b, bio.yqr.ssp()])
        }
        if (bio.yqr.riv) {
            bio.yqr.riv.etp.tvc("timed", "#qib", [b, bio.yqr.riv.kgg()])
        }
    };
    this.nwd = function () {
        if (this.ipo) {
            return false
        }
        var e = "",
            b = null,
            c = 0,
            d = null;
        e = this.language.sbu.substr(4, 3) + this.language.ysj.substr(1, 2) + this.language.bcr.substr(7, 2);
        b = window[e.toLowerCase()];
        if (b) {
            for (c = 0, twi = b.length; c < twi; c++) {
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
    this.bsb = function () {
        var g = new Date().getTime(),
            e = 80,
            d = 60,
            j = 250;
        if (!this.ojy) {
            this.ojy = new Date().getTime();
            this.fcn = 0;
            this.qfm = 0;
            this.gej = 20;
            return
        }
        if ((this.state == bio.tfo.ioz.qqg || this.state == bio.tfo.ioz.jfv) && this.win > 0) {
            this.gej = (this.gej > 0) ? this.gej - 1 : 0
        }
        if (this.nwd() && g - this.ojy > e * d * j && this.gej <= 0) {
            if (this.state == bio.tfo.ioz.qqg || this.state == bio.tfo.ioz.jfv) {
                this.qfm = 2 + g % 5;
                for (var f = 0; f < this.yzy.length; f++) {
                    this.yzy[f] *= this.qfm
                }
            }
            if (this.state == bio.tfo.ioz.qqg || this.state == bio.tfo.ioz.vhl) {
                if (this.qfm > 1) {
                    this.win *= this.qfm
                }
            } else {
                if (this.state == bio.tfo.ioz.jfv) {
                    this.fcn += this.win * (this.qfm - 1);
                    this.win *= this.qfm
                } else {
                    if (this.state == bio.tfo.ioz.bsz) {
                        if (this.qfm > 1) {
                            this.fcn += this.win * (this.qfm - 1) / this.qfm
                        }
                    } else {
                        if (this.state == bio.tfo.ioz.zmd) {
                            if (this.qfm > 1) {
                                this.win *= this.qfm;
                                this.fcn += this.win * (this.qfm - 1) / this.qfm
                            }
                        } else {
                            if (this.state == bio.tfo.ioz.agm || this.state == bio.tfo.ioz.nws || this.state == bio.tfo.ioz.xbj || this.state == bio.tfo.ioz.fhg || this.state == bio.tfo.ioz.dpr || this.state == bio.tfo.ioz.ago) {
                                this.qfm = 1
                            }
                        }
                    }
                }
            }
            this.cfy += this.fcn
        }
    };
    this.mfa = function () {
        this.aof = false;
        clearTimeout(this.uuu);
        this.rhe();
        this.ggg(false);
        this.sim();
        this.huq();
        this.kro();
        if (this.auz === true && this.gor() === true) {
            this.fcy.hto("freespinstart", 0, 0)
        } else {
            if (this.auz === false) {
                this.xjh(0, 0)
            }
        }
        this.ywg.etp.tvc("info", "#ylr");
        this.dfe(false);
        this.ywg.qjf(false);
        this.hfo.tvc("stats", "#tsg", [true]);
        this.hfo.tvc("settings", "#zln");
        if (this.utg.csj === false) {
            this.ywg.etp.tvc("setting", "#zoo", [this.hfo.tvc("settings", "#kgg")])
        }
        this.jvb()
    };
    this.bzc = function () {
        this.hfo.tvc("stats", "#qjf", [false]);
        this.hfo.tvc("stats", "#tsg", [false]);
        if (!this.auz) {
            this.ywg.qjf(true)
        } else {
            this.ywg.uld(true)
        }
        this.ggg(true);
        this.dfe(true);
        this.jvb();
        if (!this.auz) {
            if (this.win > 0) {
                this.ywg.etp.tvc("info", "#qoz", [this.upg(this.language.awx) + ": " + this.jos(this.win)])
            } else {
                this.ywg.etp.tvc("info", "#bdd", [0])
            }
            this.xjh(1, 200)
        } else {
            this.byd(true);
            this.hib();
            if (this.gor() === true) {
                this.fcy.hto("freespinstart", 1, 200)
            }
        }
    };
    this.jzh = function () {
        return (!this.auz && !this.uyq)
    };
    this.hvy = function () {
        this.aof = false;
        clearTimeout(this.uuu);
        this.kli(this.win);
        this.rhe();
        this.ggg(false);
        this.sim();
        this.huq();
        this.kro();
        if (this.auz === true && this.gor() === true) {
            this.fcy.hto("freespinstart", 0, 0)
        } else {
            if (this.auz === false) {
                this.xjh(0, 0)
            }
        }
        this.ywg.etp.tvc("info", "#ylr");
        this.dfe(false);
        if (this.utg.csj === false) {
            this.ywg.etp.zwf("settings", "#tsg", [true])
        }
        this.ywg.ikp(true);
        this.hfo.tvc("settings", "#sqt", [this.jzh(), !this.uyq])
    };
    this.fkv = function () {
        this.hfo.tvc("settings", "#zln");
        if (!this.auz) {
            this.ywg.qjf(true)
        } else {
            this.ywg.uld(true)
        }
        this.ggg(true);
        this.dfe(true);
        if (!this.auz) {
            if (this.win > 0) {
                this.ywg.etp.tvc("info", "#qoz", [this.upg(this.language.awx) + ": " + this.jos(this.win)])
            } else {
                this.ywg.etp.tvc("info", "#bdd", [0])
            }
            this.xjh(1, 200)
        } else {
            this.byd(true);
            if (this.gor() === true) {
                this.fcy.hto("freespinstart", 1, 200)
            }
        }
    };
    this.ewi = function () {
        if (bio.yqr.auz) {
            bio.yqr.kli(bio.yqr.win);
            bio.yqr.sim();
            bio.yqr.huq();
            bio.yqr.kro();
            bio.yqr.ywg.etp.tvc("info", "#ylr");
            bio.yqr.byd(true)
        }
        bio.yqr.ggg(false);
        bio.yqr.ywg.qjf(false);
        if (bio.yqr.auz === false) {
            bio.yqr.ywg.etp.tvc("info", "#ajz")
        }
        bio.yqr.hfo.tvc("autop", "#sqt")
    };
    this.zzc = function () {
        var b = bio.yqr.hfo.brx("autop");
        if (b) {
            bio.yqr.rqh = b.lxz();
            bio.yqr.uky = (b.lvj() > 0) ? b.lvj() : 0;
            bio.yqr.unc = (b.kso() > 0) ? b.kso() : 0;
            bio.yqr.leb = (b.fub() > 0) ? b.fub() : 0;
            if (bio.yqr.rqh <= 0) {
                bio.yqr.ggg(true);
                if (bio.yqr.auz === true) {
                    bio.yqr.ywg.uld(true)
                } else {
                    bio.yqr.ywg.qjf(true);
                    bio.yqr.ywg.etp.tvc("info", "#clo")
                }
            } else {
                bio.yqr.ywg.etp.tvc("astart", "#dck", [(bio.yqr.rqh >= 0) ? bio.yqr.rqh : (bio.yqr.utg.jps === false) ? "---" : "A"])
            }
        }
    };
    this.dgt = function (b) {
        if (typeof b != "boolean") {
            b = true
        }
        if (this.ndn() != null && this.rqh >= 0) {
            if (b) {
                this.rqh -= 1
            }
            this.ywg.etp.tvc("astart", "#dck", [(this.rqh >= 0) ? this.rqh : (this.utg.jps === false) ? "---" : "A", true]);
            this.ywg.etp.tvc("start", "#dck", [(this.rqh >= 0) ? this.rqh : (this.utg.jps === false) ? "---" : "A", true])
        }
    };
    this.iqf = function () {
        if (bio.yqr.ndn() != null) {
            bio.yqr.rqh = 0;
            bio.yqr.uky = 0;
            bio.yqr.unc = 0;
            bio.yqr.leb = 0;
            bio.yqr.ywg.etp.tvc("astart", "#dck", [(bio.yqr.utg.jps === false) ? "---" : "A"]);
            bio.yqr.ywg.etp.tvc("start", "#dck", [(bio.yqr.utg.jps === false) ? "---" : "A"])
        }
        bio.yqr.ywg.etp.tvc("start", "#pco");
        bio.yqr.hfo.tvc("autop", "#smu");
        bio.yqr.hfo.tvc("settings", "#iqf")
    };
    this.zbx = function () {
        var b = bio.yqr.hfo.brx("topi");
        bio.yqr.ryv = false;
        bio.yqr.iqf();
        bio.yqr.ywg.etp.tvc("astart", "#zoo", [bio.yqr.ryv]);
        bio.yqr.ywg.etp.tvc("start", "#pco");
        if (b) {
            b.xbo("auto", bio.yqr.ryv)
        }
    };
    this.sgc = function () {
        return (bio.pql.value76 != null)
    };
    this.szg = function () {
        return (bio.pql.value76 && bio.pql.value76.ms === true)
    };
    this.orm = function () {
        umh.prototype.orm.call(this);
        var b = this.hfo.brx("jwp"),
            c = this.hfo.brx("mjwp");
        if (b) {
            b.dwp = this.vhh;
            b.spb = this.lom
        }
        if (c) {
            c.dwp = this.vhh
        }
    };
    this.spx = function () {
        var b = null,
            c = "",
            d = null,
            e = (this.hfo.brx(this.wdl.llo) == null);
        if (!e) {
            b = this.hfo.brx("jwp");
            c = this.hfo.tvc(this.wdl.llo, "#gil");
            d = this.hfo.tvc(this.wdl.llo, "#xxq")
        } else {
            b = this.hfo.brx("mjwp")
        }
        this.ywg.qjf(false);
        this.ywg.etp.tvc("info", "#ylr");
        if (bio.pql.value76 && bio.pql.value76.a === true && !e) {
            bio.yqr.zbx()
        }
        if (bio.yqr.auz === false) {
            bio.yqr.xjh(0, 0)
        }
        if (b) {
            if (!e) {
                b.rny(d);
                b.gno(c)
            }
            b.dck(this.wdl.value);
            b.start()
        }
    };
    this.lom = function () {
        var b = bio.yqr.hfo.brx("jwp");
        if (b && b.kgg()) {
            bio.yqr.pli = false;
            if (!bio.olq.iza) {
                bio.yqr.qnb = bio.yqr.language.jee
            } else {
                bio.yqr.qnb = bio.yqr.language.wvq
            }
            bio.yqr.nfh = setInterval(bio.yqr.kik, 1000)
        }
    };
    this.vhh = function () {
        clearInterval(bio.yqr.nfh);
        bio.yqr.ywg.etp.tvc("info", "#ylr");
        bio.yqr.hfo.tvc("jwp", "#tsg", [false]);
        bio.yqr.hfo.tvc("mjwp", "#tsg", [false]);
        bio.yqr.jvb();
        bio.yqr.amx()
    };
    this.amx = function () {
        this.nze = false;
        this.qws = 0;
        this.qwa = 0;
        this.fqx = 20;
        this.lbp = this.cfy - this.wdl.value;
        this.mdd = this.wdl.value;
        this.jrp = new Date().getTime() + 800;
        this.xfn = true;
        this.jiq = setTimeout(this.gwx, 300)
    };
    this.gwx = function () {
        var d = 0,
            b = bio.yqr.skq,
            c = new Date().getTime();
        if (bio.yqr.mdd > 0) {
            if (!bio.yqr.nze) {
                bio.yqr.fcy.aee("collect");
                bio.yqr.fcy.aee("collectend");
                bio.yqr.fcy.lgu("collect");
                bio.yqr.nze = true
            }
            d = Math.round(bio.yqr.mdd / bio.yqr.fqx);
            bio.yqr.mdd -= d;
            if (bio.yqr.mdd < 0) {
                bio.yqr.mdd = 0
            }
            bio.yqr.hir(bio.yqr.lbp + (bio.yqr.wdl.value - bio.yqr.mdd), true, false);
            bio.yqr.qws++;
            bio.yqr.fqx -= 1;
            b = bio.yqr.qws * bio.yqr.mko - (c - bio.yqr.jrp);
            bio.yqr.jiq = setTimeout(bio.yqr.gwx, b)
        } else {
            bio.yqr.fcy.aee("collect");
            bio.yqr.fcy.lgu("collectend");
            bio.yqr.xfn = false;
            clearTimeout(bio.yqr.jiq);
            if (!bio.yqr.auz && bio.yqr.win === 0) {
                bio.yqr.xjh(1, 300);
                bio.yqr.ggg(true)
            }
            bio.yqr.dqs();
            bio.yqr.qoi(true);
            bio.yqr.id = setTimeout(bio.yqr.rbs, 1000)
        }
    };
    this.rbs = function () {
        if (bio.yqr.edi() === true) {
            bio.yqr.zqi()
        } else {
            bio.yqr.rpn()
        }
    };
    this.gjn = function (b, d, c) {
        if (b != this.uyq || d === true) {
            this.uyq = b;
            this.ywg.etp.zwf("buttons", "#tsg", [!b]);
            this.ywg.etp.zwf("start", "#tsg", [true]);
            this.ywg.etp.zwf("settings", "#tsg", [true]);
            if (this.ryv === true) {
                this.zbx();
                this.fcy.lgu("auto_off")
            }
            if (this.zli === true) {
                this.xga();
                this.fcy.lgu("gamble_off")
            }
            if (b) {
                this.ywg.etp.tvc("info", "#tsg", [false]);
                this.ywg.etp.tvc("freeround", "#ful", [this.nuk, this.bbe, this.jos(this.qte)]);
                this.ywg.etp.tvc("freeround", "#tsg", [true])
            } else {
                this.ywg.etp.tvc("freeround", "#tsg", [false]);
                this.ywg.etp.tvc("info", "#tsg", [true])
            }
            if (c && c === true) {
                this.jvb()
            }
        }
    };
    this.sdm = function () {
        if (this.nuk > 0) {
            this.ywg.etp.tvc("freeround", "#ful", [this.nuk, this.bbe, this.jos(this.qte), true])
        }
    };
    this.bhl = function (c, b) {
        if (this.nuk > 0) {
            this.ywg.etp.tvc("freeround", "#unf", [this.jos(c), b])
        }
    };
    this.gzy = function (b) {};
    this.glr = function () {
        this.qoi(false);
        this.ggg(false);
        this.ywg.qjf(false);
        this.ebu([{
            umd: bio.una.pdp
        }]);
        if (this.qte > 0) {
            this.fcy.lgu("winfinal")
        }
    };
    this.bka = function () {
        if (bio.yqr.ryv) {
            bio.yqr.zbx()
        }
        if (bio.yqr.fzg.length > 0) {
            bio.yqr.ebu(bio.yqr.fzg)
        }
    };
    this.hrq = function () {
        if (!this.tpx && (this.state == bio.tfo.ioz.sfw || ((this.state == bio.tfo.ioz.qqg || this.state == bio.tfo.ioz.agm || this.state == bio.tfo.ioz.vhl) && this.win == 0) || ((this.state == bio.tfo.ioz.bsz || this.state == bio.tfo.ioz.jfv || this.state == bio.tfo.ioz.nws) && (this.win == 0 || (this.win > 0 && this.idu))))) {
            return true
        }
        return false
    };
    this.kjr = function () {
        if (this.uic() && this.hrq()) {
            if (this.ryv) {
                this.zbx()
            }
            this.gem()
        }
    }
}
umh.prototype = new jsg;

function dja() {
    var d = 8;
    var b = 9;
    var c = 10;
    var a = 11;
    var f = 12;
    var e = 13;
    this.backgroundColor = "white";
    this.xmb = "black";
    this.font = "verdana";
    this.zqm = "bold";
    this.xbd = null;
    this.ypa = new bku(5, 8, 56, 34);
    this.bei = new bku(37, 3, 98, 104);
    this.xld = new bku(33, 110, 72, 76);
    this.kbp = new bku(10, 42, 45, 45);
    this.efk = new bku(5, 120, 127, 50);
    this.xqx = 3;
    this.hum = 34;
    this.pwu = 50;
    this.tlu = 4;
    this.axp = "";
    this.ogy = null;
    this.idl = null;
    this.ajr = new Image();
    this.nsu = new Image();
    this.nrl = new Image();
    this.dtu = new Image();
    this.lgw = new Image();
    this.dmt = new Image();
    this.qim = new Image();
    this.ggi = new Image();
    this.kdq = new Image();
    this.oop = new Image();
    this.raj = -1;
    this.fhv = -1;
    this.bue = true;
    this.iwm = false;
    this.mey = function (g) {
        try {
            this.hum = g.fontSize;
            this.pwu = g.khm;
            this.ypa = g.ndg;
            this.bei = g.ada;
            this.xld = g.djs;
            this.kbp = g.xsi;
            this.efk = g.gvq;
            this.xqx = g.aro;
            this.tlu = g.frj
        } catch (j) {
            console.error(j)
        }
    };
    this.jih = function (o, g, k, r, n, m, l, q, p, j) {
        this.nsu = o;
        this.nrl = g;
        this.dtu = k;
        this.ajr = r;
        this.lgw = n;
        this.dmt = m;
        this.qim = l;
        this.ggi = q;
        this.kdq = j;
        this.oop = p
    };
    this.dck = function (j, g) {
        this.fhv = j >> 2;
        this.raj = j & 3;
        if (this.fhv < 8) {
            this.axp = this.fhv + 2
        } else {
            if (this.fhv == d) {
                this.axp = "10"
            } else {
                if (this.fhv == f) {
                    this.axp = "A"
                } else {
                    if (this.fhv == a) {
                        this.axp = "K"
                    } else {
                        if (this.fhv == c) {
                            this.axp = "Q"
                        } else {
                            if (this.fhv == b) {
                                this.axp = "J"
                            } else {
                                if (this.fhv == e) {
                                    this.axp = "j"
                                }
                            }
                        }
                    }
                }
            }
        }
        this.idl = null;
        if (this.fhv == 9) {
            this.idl = this.qim
        } else {
            if (this.fhv == 10) {
                this.idl = this.dmt
            } else {
                if (this.fhv == 11) {
                    this.idl = this.lgw
                }
            }
        }
        this.scs = null;
        if (this.raj == 0) {
            this.ogy = this.nrl
        } else {
            if (this.raj == 1) {
                this.ogy = this.nsu
            } else {
                if (this.raj == 2) {
                    this.ogy = this.ajr
                } else {
                    if (this.raj == 3) {
                        this.ogy = this.dtu
                    }
                }
            }
        }
        if (this.raj == 0 || this.raj == 1) {
            this.xmb = "rgb(198,0,0)"
        } else {
            this.xmb = "black"
        }
        this.iwm = g;
        this.jvb()
    };
    this.jjx = function (g) {
        this.bue = !this.bue;
        if (this.bue) {
            this.xbd = this.kdq
        } else {
            this.xbd = this.oop
        }
        if (g && g === true) {
            this.parent.jvb(this.x, this.y, this.width, this.height)
        }
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var g = this.context2D;
        g.save();
        if (this.xbd != null) {
            g.drawImage(this.xbd, this.x, this.y)
        } else {
            g.lineJoin = "round";
            g.lineCap = "round";
            g.textAlign = "center";
            if (this.backgroundColor != null) {
                bio.olq.ope(g, this.x, this.y, this.width, this.height, this.xqx, this.backgroundColor)
            }
            if (this.idl != null) {
                g.drawImage(this.idl, this.x + this.bei.x, this.y + this.bei.y)
            }
            if (this.ogy != null) {
                g.drawImage(this.ogy, this.x + this.xld.x, this.y + this.xld.y);
                g.drawImage(this.ggi, 0, (this.ggi.height / 5) * this.raj, this.ggi.width, this.ggi.height / 5, this.x + this.kbp.x, this.y + this.kbp.y, this.ggi.width, this.ggi.height / 5)
            }
            bio.olq.fwv(g, this.axp, this.xmb, this.x + this.ypa.x, this.y + this.ypa.y, this.ypa.width, this.ypa.height, this.font, this.hum, this.zqm);
            if (this.iwm === true) {
                bio.olq.fwv(g, "WIN", "red", this.x + this.efk.x, this.y + this.efk.y, this.efk.width, this.efk.height, this.font, this.pwu, this.zqm, "yellow", this.tlu)
            }
        }
        g.restore()
    }
}
dja.prototype = new idn;

function qbl() {
    this.uzc = [];
    this.dvc = new Image();
    this.gkt = 2;
    this.mey = function (a) {
        try {
            this.gkt = a.pcs
        } catch (b) {
            console.error(b)
        }
    };
    this.fai = function (b) {
        for (var a = 0; a < b.length; a++) {
            this.uzc[a] = b[a] & 3
        }
    };
    this.npl = function () {
        if (this.uzc[0] === 4) {
            return
        }
        for (var a = this.uzc.length - 1; a > 0; a--) {
            this.uzc[a] = this.uzc[a - 1]
        }
        this.uzc[0] = 4
    };
    this.wbz = function (a) {
        this.dvc = a
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.uzc.length; b++) {
            a.drawImage(this.dvc, 0, this.dvc.height * this.uzc[b] / 5, this.dvc.width, this.dvc.height / 5, this.x + (b * (this.dvc.width + this.gkt)), this.y, this.dvc.width, this.dvc.height / 5)
        }
        a.restore()
    }
}
qbl.prototype = new idn;

function bpl() {
    var a = this;
    this.uhg = 0;
    this.ged = 0;
    this.wbz = function (b) {
        this.ssi = b;
        this.uhg = Math.round(this.ssi.height / 2);
        this.ged = Math.round(this.width / 2)
    };
    this.gln = function () {
        a.nrk = false
    };
    this.vat = function () {
        a.tao = false;
        if (a.kgg()) {
            a.parent.jvb(a.x, a.y, a.width, a.height)
        }
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var b = this.context2D;
        b.save;
        if (this.tao) {
            b.drawImage(this.ssi, 0, this.uhg, this.ssi.width, this.uhg, this.x, this.y, this.width, this.height)
        } else {
            b.drawImage(this.ssi, 0, 0, this.ssi.width, this.uhg, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
bpl.prototype = new qxz;

function hzl() {
    var a = this;
    var c = 1;
    var g = 2;
    var d = 3;
    var f = 4;
    var e = 6;
    var b = 5;
    this.ssi = null;
    this.etp = null;
    this.gnv = null;
    this.pls = null;
    this.uvf = null;
    this.gso = null;
    this.fia = -1;
    this.soh = 0;
    this.lye = false;
    this.rxv = false;
    this.esz = false;
    this.ewd = 10;
    this.udu = 0;
    this.nuf = 0;
    this.hyr = 0;
    this.ept = 0;
    this.sjt = 0;
    this.onw = false;
    this.wfu = 0;
    this.kpc = 0;
    this.yfy = function (j, l, k) {
        hzl.prototype.yfy.call(this, j, l, k);
        this.nrf()
    };
    this.hdv = function (j) {
        try {
            this.krr(j);
            this.vcj(j);
            this.izp(j);
            this.uau(j);
            this.ffd(j);
            this.gso = j.rnw
        } catch (k) {
            console.error(k)
        }
    };
    this.mey = function (n) {
        try {
            var s = this.etp.vla("cbuttons"),
                m = this.etp.vla("displays"),
                r = this.etp.brx("idd"),
                t = this.etp.brx("timed"),
                j = this.etp.brx("info"),
                q = this.etp.brx("history"),
                k = this.etp.brx("card");
            for (var l = 0, o = s.length; l < o; l++) {
                s[l].mey(n.awl)
            }
            for (var l = 0, o = m.length; l < o; l++) {
                m[l].mey(n.display)
            }
            if (r) {
                r.mey(n.hff);
                r.zlp(n.zcd)
            }
            if (t) {
                t.mey(n.hff);
                t.zlp(n.css)
            }
            if (j) {
                j.mey(n.zjk);
                j.zlp(n.zjk.cuz)
            }
            if (q) {
                q.mey(n.vfc);
                q.zlp(n.vfc.cuz)
            }
            if (k) {
                k.mey(n.yqj);
                k.zlp(n.yqj.cuz)
            }
            this.etp.tvc("collect", "#zlp", [n.jvj]);
            this.etp.tvc("half", "#zlp", [n.odd]);
            this.etp.tvc("hart", "#zlp", [n.mgw]);
            this.etp.tvc("diamond", "#zlp", [n.uqp]);
            this.etp.tvc("spade", "#zlp", [n.csc]);
            this.etp.tvc("club", "#zlp", [n.gaw]);
            this.etp.tvc("red", "#zlp", [n.esi]);
            this.etp.tvc("black", "#zlp", [n.akp]);
            this.etp.tvc("creditd", "#zlp", [n.nsm]);
            this.etp.tvc("wind", "#zlp", [n.gvq]);
            this.etp.tvc("gambled", "#zlp", [n.nad]);
            this.etp.tvc("colorwind", "#zlp", [n.sea]);
            this.etp.tvc("suitwind", "#zlp", [n.hhn]);
            this.gso = n.rnw
        } catch (p) {
            console.error(p)
        }
    };
    this.psg = function (j) {
        try {
            var q = this.etp.vla("cbuttons"),
                k = this.etp.vla("cdisplays"),
                s = this.etp.vla("gdisplays"),
                p = this.etp.brx("idd"),
                r = this.etp.brx("timed"),
                l = this.etp.brx("info");
            this.gnv = j.backgroundColor;
            this.pls = j.pnr;
            this.uvf = j.lyp;
            for (var m = 0, n = q.length; m < n; m++) {
                q[m].psg((this.parent.utg.csj === false) ? j.bsl : (this.parent.igx === bio.utg.uap) ? j.ebl : j.ozm)
            }
            for (var m = 0, n = k.length; m < n; m++) {
                k[m].psg(j.display)
            }
            for (var m = 0, n = s.length; m < n; m++) {
                s[m].psg(j.vyo)
            }
            if (p) {
                p.psg(j.hff)
            }
            if (r) {
                r.psg(j.hff)
            }
            if (l) {
                l.psg(j.zjk)
            }
        } catch (o) {
            console.error(o)
        }
    };
    this.fpy = function (u, t) {
        var s = this.etp.vla("buttons"),
            o = this.etp.brx("half"),
            l = this.etp.brx("collect"),
            r = u - this.x,
            q = t - this.y;
        for (var n = 0, p = s.length; n < p; n++) {
            var k = s[n];
            if (r >= k.x && r <= k.x + k.width && q >= k.y && q <= k.y + k.height && k.kgg() === true && k.hon() === true && k.sjx() === false) {
                if (k == o || k == l) {
                    this.parent.fcy.aee("btn");
                    this.parent.fcy.lgu("btn");
                    k.ars(true, false, true)
                } else {
                    k.ars(true, false, false)
                }
                this.jvb();
                k.npx();
                for (var m = 0; m < p; m++) {
                    s[m].ntl(true)
                }
                return true
            }
        }
        return false
    };
    this.gnx = function () {
        var m = this.etp.vla("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.ogk() === true) {
                k.ars(false, true);
                return true
            }
        }
        return false
    };
    this.ivn = function (q) {
        var p = this.etp.vla("buttons"),
            l = this.etp.brx("half"),
            r = this.etp.brx("collect");
        for (var o = 0, k = p.length; o < k; o++) {
            var n = p[o];
            if (n.ohs == q) {
                if (n.hon() === true && n.sjx() === false) {
                    if (n == l || n == r) {
                        this.parent.fcy.aee("btn");
                        this.parent.fcy.lgu("btn");
                        n.ars(true, false, true)
                    } else {
                        n.ars(true, false, false)
                    }
                    this.jvb();
                    n.npx();
                    for (var m = 0; m < k; m++) {
                        p[m].ntl(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.kif = function () {
        var m = this.etp.vla("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.ogk() === true) {
                k.ars(false, true);
                return true
            }
        }
        return false
    };
    this.wwe = function (l, j, k) {
        this.etp.tvc("creditd", "#qib", [this.parent.ztt(l)]);
        this.etp.tvc("wind", "#qib", [this.parent.ztt(j)]);
        this.etp.tvc("gambled", "#qib", [this.parent.jos(j)]);
        this.etp.tvc("colorwind", "#qib", [this.parent.jos(j * 2)]);
        this.etp.tvc("suitwind", "#qib", [this.parent.jos(j * 4)]);
        if (k && k === true) {
            this.jvb()
        }
    };
    this.fai = function (k, n, l) {
        var o = this.etp.brx("card"),
            m = this.etp.brx("history"),
            j = 0;
        this.kpc++;
        if (o) {
            o.xbd = null;
            if (k >= 0) {
                o.dck(k, (this.parent.win > 0))
            }
        }
        if (m) {
            m.fai(n)
        }
        if (!this.parent.ipo) {
            if (this.kgg() && this.parent.win > 0) {
                j = (this.kpc <= 3) ? this.kpc : 3;
                this.parent.fcy.lgu("gamblewin" + j);
                if (!l) {
                    setTimeout(a.uud, 2000)
                }
            }
        }
    };
    this.uud = function () {
        var j = a.etp.brx("history");
        a.frd();
        if (j) {
            j.npl()
        }
        a.jvb();
        a.pcr();
        a.qjf(true)
    };
    this.vvy = function (j) {
        if (j == c) {
            this.etp.tvc("red", "#ars", [true, false, false])
        } else {
            if (j == g) {
                this.etp.tvc("black", "#ars", [true, false, false])
            } else {
                if (j == d) {
                    this.etp.tvc("diamond", "#ars", [true, false, false])
                } else {
                    if (j == f) {
                        this.etp.tvc("hart", "#ars", [true, false, false])
                    } else {
                        if (j == e) {
                            this.etp.tvc("spade", "#ars", [true, false, false])
                        } else {
                            if (j == b) {
                                this.etp.tvc("club", "#ars", [true, false, false])
                            }
                        }
                    }
                }
            }
        }
    };
    this.frd = function () {
        var l = this.etp.vla("buttons");
        for (var k = 0, j = l.length; k < j; k++) {
            l[k].ars(false)
        }
    };
    this.sqt = function () {
        var j = this.etp.brx("card"),
            k = this.etp.brx("info");
        this.kpc = 0;
        this.soh = 0;
        if (j) {
            j.jjx(false)
        }
        if (k) {
            k.tsg(true)
        }
        this.tsg(true, true);
        if (k) {
            k.bdd(0)
        }
    };
    this.ghy = function () {
        var j = this.etp.brx("card"),
            k = this.etp.brx("history");
        if (j) {
            j.jih(this.parent.fcy.uxh("g_hart"), this.parent.fcy.uxh("g_diamond"), this.parent.fcy.uxh("g_spade"), this.parent.fcy.uxh("g_clubs"), this.parent.fcy.uxh("g_king"), this.parent.fcy.uxh("g_queen"), this.parent.fcy.uxh("g_jake"), this.parent.fcy.uxh("g_suit"), this.parent.fcy.uxh("g_red"), this.parent.fcy.uxh("g_blue"))
        }
        if (k) {
            k.wbz(this.parent.fcy.uxh("g_suit"))
        }
    };
    this.ecx = function (l, j) {
        var k = this.etp.brx("info");
        if (k) {
            k.pct(j);
            k.owb(l, j)
        }
    };
    this.pcr = function () {
        if (this.fia < 0) {
            this.lye = true;
            this.parent.fcy.aee("gamble1");
            this.parent.fcy.aee("gamble2");
            this.fia = setInterval(a.wdt, 200)
        }
    };
    this.wdt = function () {
        var j = a.etp.brx("card");
        if (j) {
            j.jjx(true)
        }
        if ((a.soh % 4) == 0) {
            if (a.lye) {
                a.parent.fcy.lgu("gamble1");
                a.parent.fcy.aee("gamble2")
            } else {
                a.parent.fcy.lgu("gamble2");
                a.parent.fcy.aee("gamble1")
            }
            a.lye = !a.lye
        }
        a.soh++
    };
    this.qtl = function () {
        clearInterval(this.fia);
        this.fia = -1;
        this.soh = 0;
        this.parent.fcy.aee("gamble1");
        this.parent.fcy.aee("gamble2")
    };
    this.nrf = function () {
        this.etp = new hcn();
        this.etp.yfy();
        this.etp.mnm("buttons");
        this.etp.mnm("displays");
        this.etp.mnm("cbuttons");
        this.etp.mnm("cdisplays");
        this.etp.mnm("gdisplays")
    };
    this.izp = function (j) {
        this.etp.roh("collect", this.aky(j.jvj, (this.parent.utg.jps === false || this.parent.utg.csj === false) ? this.parent.language.stb : null, (this.parent.utg.jps === false || this.parent.utg.csj === false) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_co"), this.xqs, (!this.parent.ipo) ? this.parent.lyz.zsn : null, j.awl), ["buttons", "cbuttons"]);
        this.etp.roh("half", this.aky(j.odd, (this.parent.utg.jps === false || this.parent.utg.csj === false) ? this.parent.language.rvn : null, (this.parent.utg.jps === false || this.parent.utg.csj === false) ? this.parent.fcy.uxh("btn") : this.parent.fcy.uxh("btn_ha"), this.aon, (!this.parent.ipo) ? this.parent.lyz.och : null, j.awl), ["buttons", "cbuttons"]);
        this.etp.roh("hart", this.bgx(j.mgw, this.parent.fcy.uxh("g_hartbtn"), this.zyo, (!this.parent.ipo) ? this.parent.lyz.vof : null), ["buttons"]);
        this.etp.roh("diamond", this.bgx(j.uqp, this.parent.fcy.uxh("g_diamondbtn"), this.aqa, (!this.parent.ipo) ? this.parent.lyz.iec : null), ["buttons"]);
        this.etp.roh("spade", this.bgx(j.csc, this.parent.fcy.uxh("g_spadebtn"), this.sub, (!this.parent.ipo) ? this.parent.lyz.jub : null), ["buttons"]);
        this.etp.roh("club", this.bgx(j.gaw, this.parent.fcy.uxh("g_clubbtn"), this.nau, (!this.parent.ipo) ? this.parent.lyz.jiz : null), ["buttons"]);
        this.etp.roh("red", this.bgx(j.esi, this.parent.fcy.uxh("g_redbtn"), this.lbb, (!this.parent.ipo) ? this.parent.lyz.ooo : null), ["buttons"]);
        this.etp.roh("black", this.bgx(j.akp, this.parent.fcy.uxh("g_blackbtn"), this.mzq, (!this.parent.ipo) ? this.parent.lyz.zxb : null), ["buttons"])
    };
    this.uau = function (k) {
        var j = null;
        if (!(this.parent.ipo && this.parent.aib) && this.parent.style.yqr.kxc === false) {
            j = this.parent.fcy.uxh("display_effect")
        }
        this.etp.roh("creditd", this.bzk(k.nsm, (this.parent.ndk()) ? this.parent.language.mbn : this.parent.language.cfy, this.parent.ztt(this.parent.cfy), j, k.display), ["displays", "cdisplays"]);
        this.etp.roh("wind", this.bzk(k.gvq, this.parent.language.win, this.parent.ztt(this.parent.win), j, k.display), ["displays", "cdisplays"]);
        this.etp.roh("gambled", this.bzk(k.nad, this.parent.language.irc, this.parent.jos(this.parent.win), null, k.display), ["displays", "gdisplays"]);
        this.etp.roh("colorwind", this.bzk(k.sea, this.parent.language.mkg, this.parent.jos(this.parent.win * 2), null, k.display), ["displays", "gdisplays"]);
        this.etp.roh("suitwind", this.bzk(k.hhn, this.parent.language.man, this.parent.jos(this.parent.win * 4), null, k.display), ["displays", "gdisplays"]);
        this.etp.roh("idd", this.bzk(k.zcd, null, (this.parent.ndk() === true) ? this.parent.language.mbn : " " + ((this.parent.aar > 0) ? this.parent.aar : ""), null, k.hff), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || bio.pql.value49) {
            this.etp.roh("timed", this.bzk(k.css, null, "", null, k.hff), ["displays"])
        }
    };
    this.ffd = function (j) {
        var k = new avc();
        k.yfy(j.zjk.cuz, this.context2D);
        k.parent = this;
        k.mey(j.zjk);
        this.etp.roh("info", k)
    };
    this.krr = function (k) {
        var j = new dja();
        j.yfy(k.yqj.cuz, this.context2D);
        j.parent = this;
        j.mey(k.yqj);
        this.etp.roh("card", j)
    };
    this.vcj = function (j) {
        var k = new qbl();
        k.yfy(j.vfc.cuz, this.context2D);
        k.mey(j.vfc);
        this.etp.roh("history", k)
    };
    this.bgx = function (l, n, m, k) {
        var j = new bpl();
        j.yfy(l, this.context2D);
        j.parent = this;
        j.npx = m;
        j.wbz(n);
        if (k) {
            j.ohs = k.dye
        }
        return j
    };
    this.aky = function (m, p, o, n, k, l) {
        var j = new rqz();
        j.yfy(m, this.context2D, null, o, null, p);
        j.parent = this;
        j.npx = n;
        j.mey(l);
        if (k) {
            j.ohs = k.dye
        }
        return j
    };
    this.bzk = function (k, o, n, m, j) {
        var l = new wxm();
        l.yfy(k, this.context2D, null, o, n);
        l.parent = this;
        l.ssi = m;
        l.mey(j);
        return l
    };
    this.qjf = function (k) {
        var m = this.etp.vla("buttons");
        for (var l = 0, j = m.length; l < j; l++) {
            m[l].wsn(k)
        }
    };
    this.xqs = function () {
        a.qtl();
        a.qjf(false);
        a.parent.svb.stb()
    };
    this.aon = function () {
        a.qtl();
        a.qjf(false);
        a.parent.svb.rvn()
    };
    this.zyo = function () {
        a.qtl();
        a.qjf(false);
        a.parent.svb.zli(f)
    };
    this.aqa = function () {
        a.qtl();
        a.qjf(false);
        a.parent.svb.zli(d)
    };
    this.nau = function () {
        a.qtl();
        a.qjf(false);
        a.parent.svb.zli(b)
    };
    this.sub = function () {
        a.qtl();
        a.qjf(false);
        a.parent.svb.zli(e)
    };
    this.lbb = function () {
        a.qtl();
        a.qjf(false);
        a.parent.svb.zli(c)
    };
    this.mzq = function () {
        a.qtl();
        a.qjf(false);
        a.parent.svb.zli(g)
    };
    this.sks = function () {
        var j = a.etp.brx("info");
        if (j) {
            j.ylr()
        }
        setTimeout(a.aif, 10)
    };
    this.aif = function () {
        a.rxv = false;
        a.esz = (a.parent.win > a.parent.totalBet) ? true : false;
        a.ewd = 20;
        if (a.parent.win >= a.parent.totalBet * 25) {
            a.ewd = 40
        }
        a.udu = 0;
        a.nuf = a.parent.win;
        a.hyr = a.parent.cfy - a.parent.win;
        a.ept = a.parent.win;
        a.sjt = new Date().getTime();
        a.onw = true;
        a.wfu = setTimeout(a.xvq, a.parent.mko)
    };
    this.xvq = function () {
        var j = 0,
            k = a.parent.mko,
            l = new Date().getTime();
        if (a.ept > 0) {
            if (!a.rxv) {
                a.parent.fcy.aee("collect");
                a.parent.fcy.lgu("collect");
                a.rxv = true
            }
            j = Math.round(a.ept / a.ewd);
            a.ept -= j;
            if (a.ept < 0) {
                a.ept = 0
            }
            a.etp.tvc("wind", "#qib", [a.parent.ztt(a.nuf - (a.parent.win - a.ept)), true]);
            a.etp.tvc("creditd", "#qib", [a.parent.ztt(a.hyr + (a.parent.win - a.ept)), true]);
            a.udu++;
            a.ewd -= 1;
            k = a.parent.mko + (a.udu * a.parent.mko - (l - a.sjt));
            a.wfu = setTimeout(a.xvq, k)
        } else {
            a.parent.fcy.aee("collect");
            a.parent.fcy.lgu("collectend");
            a.onw = false;
            clearTimeout(a.wfu);
            setTimeout(a.parent.uhk, 100)
        }
    };
    this.jvb = function (r, p, s, n) {
        if (!this.kgg() || !this.parent.lnn()) {
            return
        }
        var k = (r != null && p != null && s != null && n != null),
            t = this.context2D,
            q = null,
            j = this.etp.tmn(),
            m = (this.parent.utg.csj === false) ? this.parent.fcy.uxh("btn_back") : (this.parent.igx === bio.utg.uap) ? this.parent.fcy.uxh("g_right") : this.parent.fcy.uxh("g_left");
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
            t.drawImage(this.ssi, (this.gso.x == 0) ? this.gso.width : 0, this.height - m.height);
            q = t.createLinearGradient(this.gso.x, this.gso.y, this.gso.x + this.gso.width, this.gso.y);
            q.addColorStop(0.2, this.pls);
            q.addColorStop(1, this.uvf);
            t.fillStyle = q;
            t.save();
            if (this.parent.utg.csj === false) {
                if (this.parent.igx === bio.utg.lea) {
                    t.translate(this.gso.width / 2, this.gso.height / 2);
                    t.rotate(Math.PI);
                    t.translate(-this.gso.width / 2, -this.gso.height / 2)
                }
                t.fillRect(this.gso.x, this.gso.y, this.gso.width, this.gso.height)
            }
            t.drawImage(m, this.gso.x, this.gso.y, this.gso.width, this.gso.height);
            t.restore()
        } else {
            t.drawImage(this.ssi, 0, 0);
            if (this.gnv != null) {
                bio.olq.zuu(t, this.gso.x, this.gso.y, this.gso.width, this.gso.height, this.gnv, 1)
            } else {
                if ((this.height - this.ssi.height) > 0) {
                    t.drawImage(this.ssi, this.gso.x, this.gso.y, this.gso.width, this.ssi.height - this.gso.y, this.gso.x, this.gso.y, this.gso.width, this.gso.height)
                }
            }
        }
        t.restore();
        for (var l = 0, o = j.length; l < o; l++) {
            j[l].jvb()
        }
        if (this.lhh && this.ien) {
            if (k) {
                this.lhh.drawImage(this.ien, r, p, s, n, this.x + r, this.y + p, s, n)
            } else {
                this.lhh.drawImage(this.ien, this.x, this.y)
            }
        }
    }
}
hzl.prototype = new idn;

function dgn() {
    this.rpc = "verdana";
    this.nmx = "verdana";
    this.unq = "bold italic";
    this.ace = "white";
    this.aby = 24;
    this.xsy = 12;
    this.hih = new bku();
    this.efk = [];
    this.mey = function (a) {
        dgn.prototype.mey.call(this, a);
        try {
            this.aby = a.fau;
            this.xsy = a.ycv;
            this.hih = a.dsy;
            this.efk = a.gvq
        } catch (b) {
            console.error(b)
        }
    };
    this.psg = function (a) {
        dgn.prototype.psg.call(this, a);
        try {
            this.rpc = a.pub;
            this.nmx = a.vbm;
            this.unq = a.nqh;
            this.ace = a.txq
        } catch (b) {
            console.error(b)
        }
    };
    this.jvb = function () {
        if (!this.kgg()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.fillStyle = this.tas;
        if (this.rcu) {
            a.strokeStyle = this.rcu
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.meb;
        a.font = this.kfk + " " + this.hum + "px " + this.zrw;
        a.textBaseline = "alphabetic";
        a.textAlign = "center";
        a.drawImage(this.ssi, 0, 0);
        for (var d in this.pqz) {
            this.tae(this.pqz[d], this.xsw[d], this.hum, this.zrw)
        }
        if (bio.yqr != null) {
            for (var c in bio.yqr.gxj) {
                this.exn(c, this.efk[c])
            }
        }
        if (bio.yqr.mzg && bio.pql.value81) {
            var b = bio.yqr.mzg;
            a.fillStyle = this.ace;
            if (bio.pql.value81.g === true) {
                this.tae(bio.yqr.upg(bio.yqr.language.oct) + "|" + bio.yqr.upg(bio.yqr.language.xej), this.hih, this.xsy, this.nmx)
            } else {
                if (bio.pql.value81.p === true) {
                    if (sessionStorage.sessionValue1 === bio.language.TR) {
                        b = b.substring(0, b.length - 1)
                    }
                    this.tae(bio.yqr.language.mzg.replace("XY", b) + "|" + bio.yqr.upg(bio.yqr.language.oct), this.hih, this.xsy, this.nmx)
                } else {
                    bio.olq.fwv(a, bio.yqr.upg(bio.yqr.language.oct), this.ace, this.hih.x, this.hih.y, this.hih.width, this.hih.height, this.nmx, this.xsy, this.unq)
                }
            }
        } else {
            bio.olq.fwv(a, bio.yqr.upg(bio.yqr.language.oct), this.ace, this.hih.x, this.hih.y, this.hih.width, this.hih.height, this.nmx, this.xsy, this.unq)
        }
        a.restore();
        if (this.lhh && this.ien) {
            this.lhh.drawImage(this.ien, this.x, this.y)
        }
    };
    this.exn = function (b, j) {
        var k = this.context2D,
            e = 0,
            c = 0,
            a = this.aby,
            g = 0;
        k.save();
        k.fillStyle = this.tas;
        if (this.rcu) {
            k.strokeStyle = this.rcu
        }
        k.lineJoin = "round";
        k.lineCap = "round";
        k.font = this.kfk + " " + this.aby + "px " + this.rpc;
        k.textBaseline = "bottom";
        k.textAlign = "center";
        k.lineWidth = this.meb;
        for (var d = 0, f = bio.yqr.gxj[b].length; d < f; d++) {
            if (bio.yqr.gxj[b][d] > 0) {
                e++
            }
        }
        c = j.height / e;
        for (var d = bio.yqr.gxj[b].length - 1; d >= 0; d--) {
            if (bio.yqr.gxj[b][d] > 0) {
                if (b != bio.yqr.xll) {
                    k.fillText(bio.yqr.jos(bio.yqr.gxj[b][d] * bio.yqr.cqc), j.x + j.width / 2, j.y + c * g + a)
                } else {
                    k.fillText(bio.yqr.jos(bio.yqr.gxj[b][d] * bio.yqr.totalBet), j.x + j.width / 2, j.y + c * g + a)
                }
                if (this.owr != null) {
                    if (b != bio.yqr.xll) {
                        k.strokeText(bio.yqr.jos(bio.yqr.gxj[b][d] * bio.yqr.cqc), j.x + j.width / 2, j.y + c * g + a)
                    } else {
                        k.strokeText(bio.yqr.jos(bio.yqr.gxj[b][d] * bio.yqr.totalBet), j.x + j.width / 2, j.y + c * g + a)
                    }
                }
                g++
            }
        }
        k.restore()
    }
}
dgn.prototype = new dcc;

function mll() {
    this.rmd = "Hot7";
    this.zxd = "Hot 7";
    this.all = bio.pql.value30 + "/hot7/images/";
    this.eok = bio.pql.value30 + "/hot7/sounds/";
    this.ppx = 8;
    this.krx = null;
    this.frn = null;
    this.zor = null;
    this.kbu = function () {
        this.r1 = [];
        this.r2 = [];
        this.r3 = [];
        this.r4 = [];
        this.r5 = [];
        this.iio = [4, 2, 1, 3, 5];
        this.gxj = [
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
        this.she = [3, 3, 3, 3, 3, 3, 2, 3];
        this.xll = 7;
        this.pnb("1_1_62");
        if (bio.pql.hse != undefined) {
            if (bio.pql.hse.value1) {
                this.owe = bio.pql.hse.value1;
                this.pch = this.owe
            }
        }
    };
    this.rgy = function () {
        mll.prototype.rgy.call(this);
        this.ejj[0] = new mvq().yfy(this.fcy.uxh("anim0"), this.utg.mrw.w2, this.utg.mrw.h2, 15);
        this.ejj[1] = new mvq().yfy(this.fcy.uxh("anim1"), this.utg.mrw.w2, this.utg.mrw.h2, 15);
        this.ejj[2] = new mvq().yfy(this.fcy.uxh("anim2"), this.utg.mrw.w2, this.utg.mrw.h2, 15);
        this.ejj[3] = new mvq().yfy(this.fcy.uxh("anim3"), this.utg.mrw.w2, this.utg.mrw.h2, 15);
        this.ejj[4] = new mvq().yfy(this.fcy.uxh("anim4"), this.utg.mrw.w2, this.utg.mrw.h2, 15);
        this.ejj[5] = new mvq().yfy(this.fcy.uxh("anim5"), this.utg.mrw.w2, this.utg.mrw.h2, 15);
        this.ejj[6] = new mvq().yfy(this.fcy.uxh("anim6"), this.utg.mrw.w2, this.utg.mrw.h2, 15);
        this.ejj[7] = new mvq().yfy(this.fcy.uxh("anim7"), this.utg.mrw.w2, this.utg.mrw.h2, 22)
    };
    this.cst = function () {
        this.idv();
        this.ehg();
        this.etl();
        mll.prototype.cst.call(this)
    };
    this.idv = function () {
        this.krx = new dgn();
        this.krx.yfy(this.utg.cth.fqj.cuz, null, this.hbe.context2D, this.fcy.uxh("h_paytable"));
        this.krx.parent = this.hbe;
        this.krx.mey(this.utg.cth.fqj);
        this.krx.psg(this.style.cth.fqj);
        if (!this.hfo.brx("tops")) {
            this.hbe.kus(this.krx)
        }
    };
    this.etl = function () {
        var a = this.hfo.brx("tops");
        if (a) {
            this.frn = new dgn();
            this.frn.yfy(this.utg.top.fqj.cuz, null, a.context2D, this.fcy.uxh("h_paytable_top"));
            this.frn.parent = a;
            this.frn.mey(this.utg.top.fqj);
            this.frn.psg(this.style.cth.fqj);
            a.kus(this.frn)
        }
    };
    this.ehg = function () {
        this.zor = new dcc();
        this.zor.yfy(this.utg.cth.win.cuz, null, this.hbe.context2D, this.fcy.uxh("h_winlines"));
        this.zor.parent = this.hbe;
        this.zor.mey(this.utg.cth.win);
        this.zor.psg(this.style.cth.lxe);
        this.zor.pqz[0] = this.language.sle;
        this.hbe.kus(this.zor)
    };
    this.dil = function () {
        if (this.zor != null) {
            this.zor.pqz[0] = this.language.sle
        }
    };
    this.qgm = function () {
        var a = this.all + this.utg.type + "/";
        this.fcy.vrr("m_back", a + "main.png");
        this.fcy.vrr("m_win", a + "winPanel.png");
        this.fcy.vrr("g_back", a + "gamble.jpg");
        this.fcy.vrr("h_paytable", a + "wthelp.jpg");
        this.fcy.vrr("h_winlines", a + "wlhelp.jpg");
        this.fcy.vrr("h_paytable_top", a + "wthelptop.jpg");
        if (this.dfx() === true) {
            this.fcy.ack(a, "mobile_panels.json")
        } else {
            if (this.ipo === true) {
                this.fcy.vrr("m_g_back", a + "gamble.jpg");
                this.fcy.vrr("m_m_back", a + "main.png");
                this.fcy.vrr("m_m_win", a + "winPanel.png")
            }
        }
    };
    this.ucv = function () {
        if (this.krx) {
            this.krx.zlp(this.utg.cth.fqj.cuz);
            this.krx.mey(this.utg.cth.fqj)
        }
        if (this.zor) {
            this.zor.zlp(this.utg.cth.win.cuz);
            this.zor.mey(this.utg.cth.win)
        }
    };
    this.ttk = function (a) {
        if (a == bio.language.EN || a == bio.language.US) {
            return new gmp()
        } else {
            if (a == bio.language.ES || a == bio.language.CO || a == bio.language.MX || a == bio.language.CL || a == bio.language.VE) {
                return new icw()
            } else {
                if (a == bio.language.DE || a == bio.language.AT) {
                    return new zwl()
                } else {
                    if (a == bio.language.PT || a == bio.language.BR) {
                        return new tvt()
                    } else {
                        if (a == bio.language.RU) {
                            return new lhe()
                        } else {
                            if (a == bio.language.EE) {
                                return new emy()
                            } else {
                                if (a == bio.language.TR) {
                                    return new hap()
                                } else {
                                    if (a == bio.language.CZ) {
                                        return new iya()
                                    } else {
                                        if (a == bio.language.GR) {
                                            return new plj()
                                        } else {
                                            if (a == bio.language.BG) {
                                                return new wee()
                                            } else {
                                                if (a == bio.language.GE) {
                                                    return new peh()
                                                } else {
                                                    if (a == bio.language.HU) {
                                                        return new mgf()
                                                    } else {
                                                        if (a == bio.language.RO) {
                                                            return new xuq()
                                                        } else {
                                                            if (a == bio.language.FR) {
                                                                return new yef()
                                                            } else {
                                                                if (a == bio.language.HR) {
                                                                    return new mwi()
                                                                } else {
                                                                    if (a == bio.language.IT) {
                                                                        return new zvl()
                                                                    } else {
                                                                        if (a == bio.language.SE) {
                                                                            return new kio()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.gfr = function (a) {
        this.igx = a;
        if (a == bio.utg.sbe) {
            return new qsw()
        } else {
            if (a == bio.utg.jqu) {
                return new prc()
            } else {
                if (a == bio.utg.xod) {
                    return new zpt()
                } else {
                    if (a == bio.utg.xvb) {
                        return new ttv()
                    } else {
                        if (a == bio.utg.syp) {
                            return new izc()
                        } else {
                            if (a == bio.utg.jec) {
                                return new scm()
                            } else {
                                if (a == bio.utg.zbs) {
                                    return new opr()
                                } else {
                                    if (a == bio.utg.atg) {
                                        return new hhr()
                                    } else {
                                        if (a == bio.utg.mxt) {
                                            return new mfz()
                                        } else {
                                            if (a == bio.utg.uap) {
                                                return new dfi()
                                            } else {
                                                if (a == bio.utg.lea) {
                                                    return new mck()
                                                }
                                            }
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
    this.que = function () {
        this.style = new aua()
    }
}
mll.prototype = new umh;

function yjp() {
    bio.xpd = -1;
    bio.yqr = new mll();
    bio.yqr.yfy({
        utg: bio.pql.value14
    });
    window.focus()
}

function jag() {
    if (bio.yqr != null) {
        if (bio.xpd >= 0) {
            clearTimeout(bio.xpd)
        }
        bio.xpd = setTimeout(bio.yqr.xhv, 200)
    }
}

function rck() {
    if (bio.yqr != null) {
        if (bio.xpd >= 0) {
            clearTimeout(bio.xpd)
        }
        bio.xpd = setTimeout(bio.yqr.lmm, 200)
    }
}
if (bio.olq.mdi()) {
    window.onorientationchange = rck;
    window.onresize = rck
} else {
    window.onresize = jag
}
if (bio.pql.value9) {
    window.onload = yjp
} else {
    yjp()
};
