
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"JokerPokerAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
	
		gameWS.onmessage=function(k){
	
		    var tmpMess=k.data.split("#");

			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.usk.ohh!=undefined){
			
			if(gameController.ehm!=parseInt(tmpMess[1])){
				
			gameController.ehm=parseInt(tmpMess[1]);	
			gameController.mdr=parseInt(tmpMess[1]);	
			gameController.usk.ohh.mgf("creditd", "#zbu", [gameController.xth(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////
function tud() {
    this.dbg = "Info";
    this.thn = "DEPOSIT";
    this.audio = "AUDIO";
    this.hno = "TIP";
    this.cyf = "TURBO";
    this.qsf = "STATISTIC";
    this.ztv = "HISTORY";
    this.wmd = "SHORTCUTS";
    this.ebh = "HELP";
    this.apd = "PAYTABLE";
    this.language = "LANGUAGE";
    this.fxi = ">>";
    this.umo = "<<";
    this.aso = "Fullscreen is not supported!"
}

function mwa() {
    this.urg = "MINIMUM BET IS";
    this.dlu = "MAX BET";
    this.iqi = "MIN.BET";
    this.ozz = "MAX.BET";
    this.eaj = "BET";
    this.start = "START";
    this.ebh = "HELP";
    this.apd = "PAYTABLE";
    this.mmr = "MENU";
    this.cbg = "MORE|GAMES";
    this.zax = "STOP";
    this.fmn = "CREDIT";
    this.odv = "GAME OVER";
    this.gve = "WINNER!";
    this.mfn = "GOOD LUCK!";
    this.win = "WIN";
    this.hps = "LAST WIN";
    this.uhp = "COLLECT";
    this.soa = "COLLECT";
    this.pqg = "GAMBLE";
    this.npj = "AUTO|START";
    this.mzz = "HALF|GAMBLE";
    this.coc = "EXIT";
    this.klb = "START GAME";
    this.ehn = "CHOOSE BET";
    this.qeo = "HALF";
    this.ret = "RETURN|TO GAME";
    this.ymv = "Total Win";
    this.vrj = "Warning";
    this.mxn = "TOTAL";
    this.nuo = "PLEASE WAIT ...";
    this.tae = "More Games";
    this.cyf = "SPEED";
    this.xyo = "Malfunction voids all pays and plays.";
    this.htt = "CONTINUE";
    this.aly = "AUTOSTART";
    this.qhr = "PAYTABLE";
    this.rsp = "GAMBLE";
    this.left = "LEFT";
    this.udr = "RIGHT";
    this.ok = "OK";
    this.kfc = "CANCEL";
    this.kcv = "Gamble";
    this.hoy = "Half";
    this.qud = "GAME RULES";
    this.jar = "GAME RULES";
    this.qob = "Bonus!";
    this.bkc = "BONUS";
    this.rcc = "PRESS ANY KEY TO CONTINUE";
    this.piz = "NOT ENOUGH CREDIT!";
    this.zya = "wins";
    this.bty = "V A L U E";
    this.of = "OF";
    this.pbb = "TOUCH THE SCREEN TO CONTINUE";
    this.jpw = "LOADING ...";
    this.dlw = "LOADING HISTORY ...";
    this.zbm = "Communication Error";
    this.vcb = "You have reached one of the limits!";
    this.owa = "You have reached the maximum amount of free games!";
    this.iem = "Game will be closed";
    this.xka = "Game will be restarted";
    this.cdw = "WON";
    this.error = "ERROR";
    this.egz = "FREEPLAY";
    this.wwn = "AUTO";
    this.sfd = "GAME ID";
    this.vrg = "Playing Time";
    this.jij = "last";
    this.hqc = "games";
    this.thn = "DEPOSIT";
    this.audio = "AUDIO";
    this.qdl = "MUSIC";
    this.jjd = "FULLSCREEN";
    this.umc = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.xsc = "Do not show again";
    this.zyg = "Sounds can not be loaded!";
    this.fdg = "Resources missing!";
    this.nls = "Play without sound?";
    this.ife = "SETTINGS";
    this.dmu = "Please turn your device!";
    this.dbg = "INFO";
    this.rgi = "Please disable PRIVATE MODE in your browser to play the game.";
    this.cll = "This game is optimized for Google Chrome.";
    this.ucj = "Please use the current version of";
    this.pjk = "Unfortunately this browser is not fully supported.";
    this.zbd = "This game can not be started in freeplay mode!";
    this.qff = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.spf = "Adjust the game interface to your needs!";
    this.iex = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.xav = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.xky = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.qsf = "Statistic";
    this.mot = "Total Games";
    this.pih = "Total Bets";
    this.nmr = "Total Wins";
    this.izr = "Total Play Time";
    this.ftd = "I have read this message";
    this.rrx = "EXIT|GAME";
    this.ztv = "History";
    this.fra = "No games played.";
    this.state = "STATE";
    this.itm = "Main Game";
    this.nzp = "Auto Collected";
    this.lex = "Collected";
    this.yrw = "Bonusspins";
    this.oma = "Respin";
    this.xiq = "Bonus";
    this.zxc = "First Deal";
    this.mea = "Second Deal";
    this.nfr = "Third Deal";
    this.lof = "AUTOSTART SETTINGS";
    this.elx = "Amount of games:";
    this.vaj = "Stop autostart";
    this.xzt = "Credit lower than:";
    this.sri = "Credit higher than:";
    this.lpr = "Win higher than:";
    this.gdl = "The autostart will be stopped at the beginning of the bonus.";
    this.xru = "Share on Facebook";
    this.gen = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.uan = "Reality Check";
    this.cdn = "You have requested a Reality Check.";
    this.fbs = "Press HISTORY to view your game history.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
mwa.prototype = new tud;

function fif() {
    this.urg = "МИНИМАЛЬНАЯ СТАВКА -";
    this.dlu = "МАКС.|СТАВКА";
    this.iqi = "МИН.СТAВКА";
    this.ozz = "МАКС.СТAВКА";
    this.eaj = "СТАВКА";
    this.start = "СТАРТ";
    this.ebh = "ПОМОЩЬ";
    this.apd = "ТАБЛИЦА ВЫПЛАТ";
    this.mmr = "МЕНЮ";
    this.cbg = "ДРУГИЕ|ИГРЫ";
    this.zax = "СТОП";
    this.fmn = "КРЕДИТ";
    this.odv = "КОНЕЦ ИГРЫ";
    this.gve = "ПОБЕДИТЕЛЬ!";
    this.mfn = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.hps = "ПОСЛЕД. ВЫИГРЫШ";
    this.zya = "выйгрыши";
    this.uhp = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.soa = "ЗАБРАТЬ ВЫИГРЫШ";
    this.pqg = "ИГРА|НА|РИСК";
    this.npj = "АВТО|ИГРА";
    this.mzz = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.coc = "ВЫХОД";
    this.klb = "НАЖМИТЕ СТАРТ";
    this.ehn = "ВЫБЕРИТЕ СТАВКУ";
    this.qeo = "ВЗЯТЬ|1/2";
    this.rcc = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.pbb = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.kgs = "Множитель для Бонуса";
    this.omx = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.ymv = "ОБЩИЙ ВЫИГРЫШ";
    this.jpw = "Загрузка ...";
    this.dlw = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.piz = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.vcb = "Достигнут один из лимитов!";
    this.vrj = "Внимание";
    this.zbm = "ошибка обмена данных";
    this.owa = "Вы получили максимальное количество свободных игр!";
    this.iem = "Игра заканчивается";
    this.xka = "Игра начинается заново";
    this.qob = "Бонус!";
    this.bkc = "БОНУС";
    this.cdw = "ВЫИГРЫШ";
    this.mxn = "ВСЕГО";
    this.nuo = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.egz = "FREEPLAY";
    this.tae = "ВЫБОР ИГРЫ";
    this.sfd = "GAME ID";
    this.vrg = "Playing Time";
    this.jij = "последняя";
    this.hqc = "игры";
    this.thn = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.qdl = "МУЗЫКА";
    this.cyf = "СКОРОСТЬ";
    this.jjd = "ПОЛНОЭКРАННЫЙ";
    this.umc = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.xyo = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.htt = "ПРОДОЛЖИТЬ";
    this.xsc = "Больше не показывать";
    this.aly = "АВТОИГРА";
    this.qhr = "ТАБЛИЦА ВЫПЛАТ";
    this.rsp = "ИГРА НА РИСК";
    this.zyg = "Звук не загружается!";
    this.fdg = "Ресурсы отсутствуют!";
    this.nls = "Играть без звука?";
    this.ife = "НАСТРОЙКА";
    this.dmu = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.udr = "ПРАВО";
    this.wwn = "АВТО";
    this.bty = "V A L U E";
    this.dbg = "ИНФОРМАЦИЯ";
    this.rgi = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.cll = "Настоящая игра оптимизирована для Google Chrome.";
    this.ucj = "Используйте, пожалуйста, актуальную версию";
    this.pjk = "К сожалению нет полной поддержки браузера.";
    this.zbd = "Запуск этой игры в режиме свободных игр невозможен!";
    this.qff = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.spf = "Приспособь интерфейс к своим потребностям!";
    this.gen = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.uan = "Проверку реальности";
    this.cdn = "Вы запросили проверку реальности.";
    this.fbs = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.qud = "ПРАВИЛА ИГРЫ";
    this.jar = "ПРАВИЛА ИГРЫ";
    this.iex = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.xav = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.xky = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.qsf = "Статус";
    this.mot = "количество игр";
    this.pih = "вся ставка";
    this.nmr = "общий выигрыш";
    this.izr = "общее время игры";
    this.ftd = "Я сообщение прочитал.";
    this.rrx = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.ztv = "История";
    this.fra = "нет истории.";
    this.state = "STATE";
    this.itm = "Main Game";
    this.nzp = "Auto Collected";
    this.lex = "Collected";
    this.yrw = "Bonusspins";
    this.kcv = "Gamble";
    this.hoy = "Half";
    this.oma = "Respin";
    this.xiq = "Bonus";
    this.zxc = "First Deal";
    this.mea = "Second Deal";
    this.nfr = "Third Deal";
    this.kfc = "ИЗМЕНИТЬ";
    this.lof = "НАСТРОЙКА АВТОСТАРТА";
    this.elx = "Количество игр:";
    this.vaj = "Автостарт остановить";
    this.xzt = "Кредит ниже, чем:";
    this.sri = "Кредит выше, чем:";
    this.lpr = "Выигрыш выше, чем:";
    this.gdl = "Автостарт прерывается, если начинается бонусная игра.";
    this.xru = "Поделись в фейсбук";
    this.tpj = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
fif.prototype = new tud;

function xwk() {
    this.urg = "APUESTA MINIMA ES";
    this.dlu = "APUESTA|MAXIMA";
    this.iqi = "APUESTA MIN.";
    this.ozz = "APUESTA MAX.";
    this.eaj = "APUESTA";
    this.start = "START";
    this.ebh = "AYUDA";
    this.apd = "PLAN DE|GANANCIAS";
    this.mmr = "MENU";
    this.cbg = "MAS|JUEGOS";
    this.zax = "PARADA";
    this.fmn = "CREDITOS";
    this.odv = "FIN DEL JUEGO";
    this.gve = "¡GANADOR!";
    this.mfn = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.hps = "ULTIMOS PREMIO";
    this.zya = "gana";
    this.uhp = "COBRAR";
    this.soa = "COBRAR";
    this.pqg = "RIESGO";
    this.npj = "AUTO|START";
    this.mzz = "MEDIA|APUESTA";
    this.of = "DE";
    this.coc = "SALIR";
    this.klb = "¡PULSE START!";
    this.ehn = "ELIJA SU APUESTA";
    this.qeo = "MITAD";
    this.rcc = "PULSE UNA TECLA PARA CONTINUAR";
    this.pbb = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.ymv = "Premio total";
    this.jpw = "CARGANDO ...";
    this.dlw = "CARGANDO HISTORIAL ...";
    this.piz = "No hay bastante CREDITO";
    this.vcb = "¡Ha alcanzado uno de los limites!";
    this.vrj = "Advertencia";
    this.zbm = "Error de comunicación";
    this.owa = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.iem = "El juego se cerrará";
    this.xka = "El juego se reiniciará";
    this.qob = "¡BONUS!";
    this.bkc = "BONUS";
    this.cdw = "GANADO";
    this.mxn = "TOTAL";
    this.qjp = "TURBO SI";
    this.wlm = "TURBO NO";
    this.nuo = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.egz = "FREEPLAY";
    this.tae = "MAS JUEGOS";
    this.sfd = "ID DE JUEGO";
    this.vrg = "Playing Time";
    this.jij = "ultimos";
    this.hqc = "juegos";
    this.thn = "DEPÓSITO";
    this.audio = "AUDIO";
    this.qdl = "MÚSICA";
    this.cyf = "VELOCIDAD";
    this.jjd = "PANTALLA COMPLETA";
    this.umc = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.xyo = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.htt = "ADELANTE";
    this.xsc = "No mostrar de nuevo";
    this.aly = "AUTOSTART";
    this.qhr = "PLAN DE GANANCIAS";
    this.rsp = "RIESGO";
    this.zyg = "No se pueden cargar los sonidos.";
    this.fdg = "Faltan recursos.";
    this.nls = "¿Jugar sin sonido?";
    this.ife = "AJUSTES";
    this.bty = "V A L U E";
    this.dmu = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.udr = "DERECHA";
    this.wwn = "AUTOMÁTICO";
    this.dbg = "INFORMACIÓN";
    this.rgi = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.cll = "Este juego está optimizado para Google Chrome.";
    this.ucj = "Use la versión actual de";
    this.pjk = "Desafortunadamente, este explorador no es compatible.";
    this.zbd = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.qff = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.spf = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.gen = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.uan = "Reality Check";
    this.cdn = "Has solicitado un Reality Check.";
    this.fbs = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.qud = "REGLAS DEL JUEGO";
    this.jar = "REGLAS|DEL JUEGO";
    this.iex = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.xav = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.xky = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.qsf = "ESTADO";
    this.mot = "Número de juegos";
    this.pih = "Apuesta total";
    this.nmr = "Ganancia total";
    this.izr = "Tiempo total de juego";
    this.ftd = "He leído el mensaje.";
    this.rrx = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.ztv = "HISTORIAL";
    this.fra = "Aún no hay juegos.";
    this.state = "Estado";
    this.itm = "Juego principal";
    this.nzp = "Ganancia automática";
    this.lex = "Ganancia";
    this.yrw = "BONUSSPINS";
    this.kcv = "Apuesta";
    this.hoy = "Mitad";
    this.oma = "Respin";
    this.xiq = "Bonus";
    this.zxc = "Primera mano";
    this.mea = "Segunda mano";
    this.nfr = "Tercera mano";
    this.kfc = "CANCELAR";
    this.lof = "CONFIGURACIONES DE AUTOSTART";
    this.elx = "Cantidad de juegos:";
    this.vaj = "Detener Autostart";
    this.xzt = "Crédito menor que:";
    this.sri = "Crédito mayor que:";
    this.lpr = "Ganancia mayor que:";
    this.gdl = "El Autostart se detendrá al principio del bonus.";
    this.xru = "Compartir en Facebook";
    this.tpj = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
xwk.prototype = new tud;

function sws() {
    this.urg = "MINIMALER EINSATZ IST";
    this.dlu = "MAX. EINSATZ";
    this.iqi = "MIN. EINSATZ";
    this.ozz = "MAX. EINSATZ";
    this.eaj = "EINSATZ";
    this.start = "START";
    this.ebh = "HILFE";
    this.apd = "GEWINNPLAN";
    this.mmr = "MENÜ";
    this.cbg = "MEHR|SPIELE";
    this.fmn = "GUTHABEN";
    this.odv = "SPIEL ENDE";
    this.gve = "GEWINNER!";
    this.mfn = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.hps = "LETZTER GEWINN";
    this.zya = "gewinnt";
    this.uhp = "NEHMEN";
    this.soa = "NEHMEN";
    this.pqg = "RISIKO";
    this.npj = "AUTO|START";
    this.mzz = "HALF|GAMBLE";
    this.zax = "STOP";
    this.of = "VON";
    this.coc = "EXIT";
    this.klb = "START DRÜCKEN";
    this.ehn = "EINSATZ WÄHLEN";
    this.qeo = "TEILEN";
    this.rcc = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.pbb = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.ymv = "Gesamt Gewinn";
    this.jpw = "LÄDT ...";
    this.dlw = "LÄDT HISTORIE ...";
    this.piz = "NICHT GENUG GUTHABEN!";
    this.vrj = "Achtung";
    this.zbm = "Kommunikationsfehler";
    this.vcb = "Sie haben eines der Limits erreicht!";
    this.owa = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.iem = "Das Spiel wird beendet";
    this.xka = "Das Spiel wird neu gestartet";
    this.qob = "Bonus!";
    this.bkc = "BONUS";
    this.cdw = "GEWONNEN";
    this.mxn = "TOTAL";
    this.nuo = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.egz = "FREEPLAY";
    this.tae = "MEHR|SPIELE";
    this.sfd = "SPIEL ID";
    this.vrg = "Spielzeit";
    this.jij = "Letzten";
    this.hqc = "Spiele";
    this.thn = "GUTHABEN";
    this.audio = "AUDIO";
    this.qdl = "MUSIK";
    this.cyf = "SPEED";
    this.jjd = "VOLLBILD";
    this.umc = "VOLLBILD";
    this.language = "SPRACHE";
    this.xyo = "Bei Gerätestörung keine Haftung.";
    this.htt = "WEITER";
    this.xsc = "Nicht noch einmal anzeigen";
    this.aly = "AUTOSTART";
    this.rsp = "RISIKO";
    this.qhr = "GEWINNPLAN";
    this.zyg = "Sounds können nicht geladen werden!";
    this.fdg = "Ressourcen fehlen!";
    this.nls = "Ohne Ton spielen?";
    this.ife = "EINSTELL.";
    this.dmu = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.udr = "RECHTS";
    this.wwn = "AUTOM.";
    this.bty = "V A L U E";
    this.dbg = "INFO";
    this.rgi = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.cll = "Dieses Spiel ist optimiert für Google Chrome.";
    this.ucj = "Bitte benutzen sie die aktuelle Version von";
    this.pjk = "Leider wird dieser Browser nicht unterstützt.";
    this.zbd = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.qff = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.spf = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.gen = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.uan = "Reality Check";
    this.cdn = "Du hast einen Reality Check angefordert.";
    this.fbs = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.ggd = "Spielpause";
    this.zxe = "Spiellimits";
    this.ggv = "Selbsttest";
    this.qud = "SPIELREGELN";
    this.jar = "SPIELREGELN";
    this.iex = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.xav = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.xky = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.qsf = "Statistik";
    this.mot = "Anzahl der Spiele";
    this.pih = "Gesamteinsatz";
    this.nmr = "Gesamtgewinn";
    this.izr = "Gesamtspielzeit";
    this.ftd = "Ich habe die Nachricht gelesen";
    this.rrx = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.ztv = "Historie";
    this.fra = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.itm = "Hauptspiel";
    this.nzp = "Auto. Nehmen";
    this.lex = "Genommen";
    this.yrw = "Bonusspins";
    this.kcv = "Risiko";
    this.hoy = "Halb";
    this.oma = "Respin";
    this.xiq = "Bonus";
    this.zxc = "Erster Deal";
    this.mea = "Zweiter Deal";
    this.nfr = "Dritter Deal";
    this.kfc = "ABBRUCH";
    this.lof = "AUTOSTART EINSTELLUNGEN";
    this.elx = "Anzahl der Spiele: ";
    this.vaj = "Autostart anhalten";
    this.xzt = "Guthaben niedriger als:";
    this.sri = "Guthaben höher als:";
    this.lpr = "Gewinn höher als:";
    this.gdl = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.xru = "Auf Facebook teilen";
    this.tpj = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
sws.prototype = new tud;

function ymi() {
    this.urg = "MINIMUM BANKO";
    this.dlu = "MAKS. BANKO";
    this.iqi = "MIN. BANKO";
    this.ozz = "MAKS. BANKO";
    this.eaj = "BANKO";
    this.start = "BAŞLAT";
    this.ebh = "YARDIM";
    this.apd = "Kazanç planı";
    this.mmr = "MENÜ";
    this.cbg = "DAHA ÇOK|OYUN";
    this.zax = "DUR";
    this.fmn = "KREDI";
    this.odv = "OYUN BİTTİ";
    this.gve = "KAZANDINIZ!";
    this.mfn = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.hps = "SON KAZANÇ";
    this.zya = "kazanır";
    this.uhp = "ALMAK";
    this.soa = "ALMAK";
    this.pqg = "RIZIKO";
    this.npj = "OTOMATİK|BAŞLATMA";
    this.mzz = "YARI|RIZIKO";
    this.of = "VEREN";
    this.coc = "ÇIKIŞ";
    this.klb = "BAŞLAT TUŞUNA BASINIZ";
    this.ehn = "BANKO SEÇİNİZ";
    this.qeo = "ALMAK|1/2";
    this.rcc = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.pbb = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.ymv = "Toplam kazanç";
    this.jpw = "YÜKLÜYOR ...";
    this.dlw = "GEÇMIŞI YÜKLÜYOR ...";
    this.piz = "YETERSİZ KREDİ.";
    this.vcb = "Limitlerin birine ulaştınız!";
    this.vrj = "Dikkat";
    this.zbm = "İletişim hatası";
    this.owa = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.iem = "Oyun sonlandırılıyor";
    this.xka = "Oyun yeniden başlatılıyor";
    this.qob = "Bedava oyun primi!";
    this.bkc = "PRİM";
    this.cdw = "KAZANDINIZ";
    this.mxn = "TOPLAM";
    this.nuo = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.egz = "FREEPLAY";
    this.tae = "DAHA ÇOK OYUN";
    this.sfd = "OYUN ID";
    this.vrg = "OYUN SÜRESİ";
    this.jij = "Son";
    this.hqc = "oyun";
    this.thn = "BAKIYE";
    this.audio = "AUDIO";
    this.qdl = "MÜZIK";
    this.cyf = "HıZ";
    this.jjd = "TAM EKRAN";
    this.umc = "TAM EKRAN";
    this.language = "LISAN";
    this.xyo = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.htt = "DEVAM";
    this.xsc = "Tekrar gösterme";
    this.aly = "OTOMATİK|BAŞLATMA";
    this.rsp = "RIZIKO";
    this.qhr = "Kazanç planı";
    this.zyg = "Sesler yüklenemiyorlar!";
    this.fdg = "Kaynaklar eksik!";
    this.nls = "Sessiz oynayacak mısınız?";
    this.ife = "AYARLAR";
    this.dmu = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.udr = "SAĞ";
    this.wwn = "OTOMATIK";
    this.bty = "V A L U E";
    this.dbg = "BILGI";
    this.rgi = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.cll = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.ucj = "'nin güncel versiyonunu kullanın";
    this.pjk = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.zbd = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.qff = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.spf = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.gen = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.uan = "Reality Check";
    this.cdn = "Reality Check talebinde bulundun.";
    this.fbs = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.qud = "OYUNUN KURALLARı";
    this.jar = "OYUNUN|KURALLARı";
    this.iex = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.xav = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.xky = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.qsf = "İstatistik";
    this.mot = "Toplam oyunlar";
    this.pih = "Toplam bankolar";
    this.nmr = "Toplam kazançlar";
    this.izr = "Toplam oyun süresi";
    this.ftd = "Bu mesajı okudum.";
    this.rrx = "OYUNU|KAPAT";
    this.ok = "OK";
    this.ztv = "GEÇMİŞ";
    this.fra = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.itm = "Ana oyun";
    this.nzp = "Otomatik olarak kazandınız";
    this.lex = "Toplandı";
    this.yrw = "Prim oyunlar";
    this.kcv = "Riziko";
    this.hoy = "Yarım";
    this.oma = "Respin";
    this.xiq = "Prim";
    this.zxc = "İlk anlaşma";
    this.mea = "İkinci anlaşma";
    this.nfr = "Üçüncü anlaşma";
    this.kfc = "İPTAL";
    this.lof = "OTOMATIK BAŞLAT AYARLARı";
    this.elx = "Oyun sayısı:";
    this.vaj = "Otomatik başlatmayı durdur";
    this.xzt = "Kredi bundan düşüktür:";
    this.sri = "Kredi bundan yüksektir:";
    this.lpr = "Kazanç bundan yüksektir:";
    this.gdl = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.xru = "Facebook'ta paylaş";
    this.tpj = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
ymi.prototype = new tud;

function ein() {
    this.urg = "MINIMÁLNÍ SÁZKA JE";
    this.dlu = "MAX. SÁZKA";
    this.iqi = "MIN. SÁZKA";
    this.ozz = "MAX. SÁZKA";
    this.eaj = "SÁZKA";
    this.start = "START";
    this.ebh = "POMOC";
    this.apd = "VÝHERNÍ PLÁN";
    this.mmr = "MENU";
    this.cbg = "DALŠÍ|HRY";
    this.zax = "STOP";
    this.fmn = "KREDIT";
    this.odv = "KONEC HRY";
    this.gve = "VÍTEZ!";
    this.mfn = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.hps = "POSL. VÝHRA";
    this.zya = "vyhrává";
    this.uhp = "VEZMI";
    this.soa = "VEZMI";
    this.pqg = "HRA";
    this.npj = "AUTO|START";
    this.mzz = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.coc = "VÝSTUP";
    this.klb = "START HRY";
    this.ehn = "VYBRAT SÁZKU";
    this.qeo = "POLOVINA";
    this.rcc = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.pbb = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.ymv = "Celková výhra";
    this.jpw = "NAHRÁVÁM ...";
    this.dlw = "NAHRÁVÁM HISTORII ...";
    this.piz = "Nedostatecný kredit.";
    this.vcb = "Dosáhli jste jednoho z limitů!";
    this.vrj = "Varování";
    this.zbm = "Chyba komunikace";
    this.owa = "Dosáhli jste maximálního počtu her zdarma!";
    this.iem = "Hra se zavře";
    this.xka = "Hra se restartuje";
    this.qob = "Bonus!";
    this.bkc = "BONUS";
    this.cdw = "VYHRÁL";
    this.mxn = "CELKOVÁ";
    this.nuo = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.egz = "FREEPLAY";
    this.tae = "DALŠÍ HRY";
    this.sfd = "ID HRY";
    this.vrg = "HRACÍ DOBA";
    this.jij = "Poslední";
    this.hqc = "hry";
    this.thn = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.qdl = "MUZIKA";
    this.cyf = "RYCHLOST";
    this.jjd = "FULLSCREEN";
    this.umc = "FULLSCREEN";
    this.language = "ŘEČ";
    this.xyo = "Při poruše jsou všechny hry a výhry neplatné.";
    this.htt = "POKRAČUJ";
    this.xsc = "Nezobrazujte znovu";
    this.aly = "AUTOSTART";
    this.rsp = "HRA";
    this.qhr = "VÝHERNÍ PLÁN";
    this.zyg = "Zvuk nelze nahrát!";
    this.fdg = "Chybí zdroje!";
    this.nls = "Hrát bez zvuku?";
    this.ife = "NASTAVENÍ";
    this.bty = "V A L U E";
    this.dmu = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.udr = "VPRAVO";
    this.wwn = "AUTO";
    this.dbg = "INFORMACE";
    this.rgi = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.cll = "Tato hra je optimalizovaná pro Google Chrome.";
    this.ucj = "Použijte aktuální verzi";
    this.pjk = "Tento prohlížeč není bohužel plně podporován.";
    this.zbd = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.qff = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.spf = "Nastavte rozhraní hry svým potřebám!";
    this.gen = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.uan = "Reality Check";
    this.cdn = "Požádali jste o kontrolu reality.";
    this.fbs = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.qud = "PRAVIDLA HRY";
    this.jar = "PRAVIDLA HRY";
    this.iex = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.xav = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.xky = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.qsf = "Statistika";
    this.mot = "Celkem hry";
    this.pih = "Celkem sázky";
    this.nmr = "Celkem výhry";
    this.izr = "Celková hrací doba";
    this.ftd = "Zprávu jsem četl/a.";
    this.rrx = "UKONČIT|HRU";
    this.ok = "OK";
    this.ztv = "HISTORIE";
    this.fra = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.itm = "Hlavní hra";
    this.nzp = "Automaticky vybráno";
    this.lex = "Vybráno";
    this.yrw = "Bonusspins";
    this.kcv = "Hra";
    this.hoy = "Polovina";
    this.oma = "Respin";
    this.xiq = "Bonus";
    this.zxc = "První vyložení";
    this.mea = "Druhé vyložení";
    this.nfr = "Třetí vyložení";
    this.kfc = "ZRUŠIT";
    this.lof = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.elx = "Množství her:";
    this.vaj = "Zastavit automatický start";
    this.xzt = "Kredit nižší než:";
    this.sri = "Kredit vyšší než:";
    this.lpr = "Výhra vyšší než:";
    this.gdl = "Automatický start se zastaví na začátku bonusu.";
    this.xru = "Sdílet na Facebooku";
    this.tpj = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
ein.prototype = new tud;

function uty() {
    this.urg = "MIINIMUMPANUS ON";
    this.dlu = "MAX PANUS";
    this.iqi = "MIN PANUS";
    this.ozz = "MAX PANUS";
    this.eaj = "PANUS";
    this.start = "START";
    this.ebh = "ABI";
    this.apd = "VÕIDU TABEL";
    this.mmr = "MENÜÜ";
    this.cbg = "VALI|MÄNG";
    this.zax = "STOPP";
    this.fmn = "KREDIIT";
    this.odv = "MÄNG ON LÕPPENUD!";
    this.gve = "OLED VÕITNUD!";
    this.mfn = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.hps = "EELMINE VÕIT";
    this.uhp = "VÕTA|VÕIT";
    this.soa = "VÕTA VÕIT";
    this.pqg = "DUUBEL|DAMINE";
    this.npj = "AUTO|START";
    this.mzz = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.coc = "VÄLJA";
    this.klb = "ALUSTA MÄNGU";
    this.ehn = "VALI PANUS";
    this.qeo = "POOLIK";
    this.rcc = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.ymv = "Koguvõit";
    this.piz = "POLE PIISAVALT KREDIITI.";
    this.qob = "Boonus!";
    this.bkc = "BOONUS";
    this.nuo = "PALUN OODAKE ...";
    this.tae = "Vali Mäng";
    this.audio = "HELI";
    this.qdl = "MUUSIKA";
    this.cyf = "KIIRUS";
    this.jjd = "TÄISEKRAAN";
    this.umc = "TÄISEKRAAN";
    this.xyo = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.nfg = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.qud = "MÄNGUREEGLID";
    this.jar = "MÄNGUREEGLID";
    this.jpw = "LAADIMINE ...";
    this.dlw = "AJALOO LAADIMINE ...";
    this.vcb = "Oled saavutanud ühe limiitidest!";
    this.vrj = "Hoiatus";
    this.zbm = "Ühenduse viga";
    this.owa = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.iem = "Mäng suletakse";
    this.xka = "Mäng taaskäivitatakse";
    this.pbb = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.ife = "SÄTTED";
    this.bty = "V A L U E";
    this.dmu = "Pöörake oma seadet!";
    this.dbg = "INFO";
    this.rgi = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.cll = "See mäng on optimeeritud Google Chrome jaoks.";
    this.ucj = "Palun kasutage praeguse versiooni";
    this.pjk = "Kahjuks ei toetata seda brauserit täielikult.";
    this.zbd = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.udr = "PAREM";
    this.wwn = "AUTOMAATNE";
    this.cdw = "VÕITIS";
    this.zya = "võidetud";
    this.mxn = "KOKKU";
    this.error = "VIGA";
    this.egz = "TASUTA MÄNG";
    this.sfd = "MÄNGU ID";
    this.vrg = "MÄNGUAEG";
    this.jij = "Viimased";
    this.hqc = "mängu";
    this.thn = "SISSEMAKSE";
    this.iex = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.xav = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.xky = "RISKI, ET SUURENDADA OMA VÕITU";
    this.qsf = "Statistika";
    this.mot = "Mänge kokku";
    this.pih = "Kogupanus";
    this.nmr = "Koguvõit";
    this.izr = "Mänguaeg kokku";
    this.ftd = "Olen seda teadet lugenud.";
    this.rrx = "MÄNGU|LÕPP";
    this.ztv = "Ajalugu";
    this.fra = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.itm = "Põhimäng";
    this.nzp = "Automaatne väljavõtt";
    this.lex = "Välja võetud";
    this.yrw = "Bonusspins";
    this.kcv = "Gamble";
    this.hoy = "Pool";
    this.oma = "Respin";
    this.xiq = "Boonus";
    this.zxc = "Esimene jagamine";
    this.mea = "Teine jagamine";
    this.nfr = "Kolmas jagamine";
    this.htt = "JÄTKA";
    this.xsc = "Ära seda enam näita";
    this.aly = "AUTOSTART";
    this.rsp = "DUUBEL DAMINE";
    this.qhr = "VÕIDU TABEL";
    this.zyg = "Helisid ei saa laadida!";
    this.fdg = "Ressursid puuduvad!";
    this.nls = "Soovid mängida ilma helideta?";
    this.qff = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.spf = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.gen = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.kfc = "TÜHISTA";
    this.lof = "AUTOMAATKÄIVITUSE SÄTTED";
    this.elx = "Mängude arv:";
    this.vaj = "Peata automaatkäivitus";
    this.xzt = "Krediit madalam kui:";
    this.sri = "Krediit kõrgem kui:";
    this.lpr = "Võit suurem kui:";
    this.gdl = "Automaatkäivitus peatatakse boonuse alguses.";
    this.xru = "Jaga Facebookis";
    this.ok = "OK";
    this.uan = "Reality Check";
    this.cdn = "Olete soovinud reaalsuskontrolli.";
    this.fbs = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
uty.prototype = new tud;

function onj() {
    this.urg = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.dlu = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.iqi = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.ozz = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.eaj = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.ebh = "ΒΟHΘΕΙΑ";
    this.apd = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.mmr = "ΜΕΝΟY";
    this.cbg = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.zax = "ΣΤΟΠ";
    this.fmn = "ΠIΣΤΩΣΗ";
    this.odv = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.gve = "ΝΙΚΗΤΗΣ!";
    this.mfn = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.hps = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.uhp = "ΠΑΡΑΛΑΒH";
    this.soa = "ΠΑΡΑΛΑΒH";
    this.pqg = "ΤΖΟΓAΡΩ";
    this.npj = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.mzz = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.coc = "EΞΟΔΟΣ";
    this.klb = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.ehn = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.qeo = "ΠΑΡΑΛΑΒH|1/2";
    this.rcc = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.ymv = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.piz = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.qob = "Μπόνουσ!";
    this.bkc = "ΜΠOΝΟΥΣ";
    this.nuo = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.tae = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.qdl = "ΜΟΥΣΙΚΉ";
    this.cyf = "ΤΑΧYΤΗΤΑ";
    this.jjd = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.umc = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.xyo = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.mxn = "ΣYΝΟΛΟ";
    this.qud = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.jar = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.jpw = "ΦΟΡΤΩΣΗ ...";
    this.dlw = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.vcb = "Ξεπεράσατε κάποιο όριο!";
    this.vrj = "Προειδοποίηση";
    this.zbm = "Σφάλμα επικοινωνίας";
    this.owa = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.iem = "Το παιχνίδι θα τερματιστεί";
    this.xka = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.pbb = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.ife = "ΡΥΘΜΙΣΕΙΣ";
    this.bty = "V A L U E";
    this.dmu = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.dbg = "ΠΛΗΡΟΦΟΡΊΕς";
    this.rgi = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.cll = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.ucj = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.pjk = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.zbd = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.udr = "ΔΕΞΙA";
    this.wwn = "AΥΤOΜΑΤΟ";
    this.cdw = "ΚEΡΔΙΣΕ";
    this.zya = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.egz = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.sfd = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.vrg = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.jij = "Τελευταία";
    this.hqc = "παιχνίδια";
    this.thn = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.iex = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.xav = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.xky = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.qsf = "Στατιστικά";
    this.mot = "Σύνολο παιχνιδιών";
    this.pih = "Συνολικό ποντάρισμα";
    this.nmr = "Συνολικό κέρδος";
    this.izr = "Συνολικός χρόνος παιχνιδιού";
    this.ftd = "Eχω διαβάσει το μήνυμα.";
    this.rrx = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.ztv = "ΙΣΤΟΡΙΚΟ";
    this.fra = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.itm = "Κύριο παιχνίδι";
    this.nzp = "Αυτόματη λήψη";
    this.lex = "Ελήφθησαν";
    this.yrw = "Bonusspins";
    this.kcv = "Τζογάρω";
    this.hoy = "Hμισυ";
    this.oma = "Respin";
    this.xiq = "Μπόνουσ";
    this.zxc = "Πρώτο μοίρασμα";
    this.mea = "Δεύτερο μοίρασμα";
    this.nfr = "Τρίτο μοίρασμα";
    this.htt = "ΣΥΝΈΧΕΙΑ";
    this.xsc = "Να μην προβληθεί ξανά";
    this.aly = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.rsp = "ΤΖΟΓAΡΩ";
    this.qhr = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.zyg = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.fdg = "Λείπουν πόροι!";
    this.nls = "Παιχνίδι χωρίς ήχο?";
    this.qff = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.spf = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.gen = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.kfc = "ΑΚΎΡΩΣΗ";
    this.lof = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.elx = "Αριθμός παιχνιδιών:";
    this.vaj = "Διακοπή autostart";
    this.xzt = "Μονάδες χαμηλότερα από:";
    this.sri = "Μονάδες υψηλότερες από:";
    this.lpr = "Κέρδος υψηλότερο από:";
    this.gdl = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.xru = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.uan = "έλεγχο πραγματικότητας";
    this.cdn = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.fbs = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
onj.prototype = new tud;

function flw() {
    this.urg = "МИН. ЗАЛОГ Е";
    this.dlu = "МАКС. ЗАЛОГ";
    this.iqi = "МИНИМ. ЗАЛОГ";
    this.ozz = "МАКС. ЗАЛОГ";
    this.eaj = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.ebh = "ПОМОЩ";
    this.apd = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.mmr = "МЕНЮ";
    this.cbg = "ПОВЕЧЕ|ИГРИ";
    this.zax = "СТОП";
    this.fmn = "КРЕДИТ";
    this.odv = "ИГРАТА ЗАВЪРШИ";
    this.gve = "ПЕЧЕЛИТЕ!";
    this.mfn = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.hps = "ПОСЛ.ПЕЧАЛБА";
    this.uhp = "ПРИБИРАНЕ";
    this.soa = "ПРИБИРАНЕ";
    this.pqg = "ДУБЛИРАНЕ";
    this.npj = "АВТО|СТАРТ";
    this.mzz = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.coc = "ИЗХОД";
    this.klb = "ЗАПОЧНЕТЕ ИГРАТА";
    this.ehn = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.qeo = "ДЕЛЕНЕ";
    this.rcc = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.ymv = "ОБЩА ПЕЧАЛБА";
    this.piz = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.qob = "Бонус!";
    this.bkc = "БОНУС";
    this.nuo = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.tae = "Повече Игри";
    this.cyf = "ТУРБО";
    this.xyo = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.qud = "ПРАВИЛА НА ИГРАТА";
    this.jar = "ПРАВИЛА|НА ИГРАТА";
    this.jpw = "ЗАРЕЖДАНЕ ...";
    this.dlw = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.vcb = "Достигна един от лимитите!";
    this.vrj = "Предупреждение";
    this.zbm = "Комуникационна грешка";
    this.owa = "Достигнали сте максималния брой безплатни игри!";
    this.iem = "Играта ще бъде затворена";
    this.xka = "Играта ще бъде рестартирана";
    this.pbb = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.ife = "НАСТРОЙКИ";
    this.bty = "V A L U E";
    this.dmu = "Моля, включете устройството!";
    this.dbg = "ИНФОРМАЦИЯ";
    this.rgi = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.cll = "Тази игра е оптимизирана за Google Chrome.";
    this.ucj = "Моля, използвайте текущата версия на";
    this.pjk = "За съжаление този браузър не се поддържа напълно.";
    this.zbd = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.udr = "ДЯСНА";
    this.wwn = "АВТО";
    this.cdw = "СПЕЧЕЛЕНО";
    this.zya = "печалби";
    this.mxn = "ОБЩО";
    this.error = "ГРЕШКА";
    this.egz = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.qdl = "МУЗИКА";
    this.jjd = "ПЪЛЕН ЕКРАН";
    this.umc = "ПЪЛЕН|ЕКРАН";
    this.sfd = "ИД НА ИГРА";
    this.vrg = "ВРЕМЕ НА ИГРА";
    this.jij = "Последни";
    this.hqc = "игри";
    this.thn = "ДЕПОЗИТ";
    this.iex = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.xav = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.xky = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.qsf = "Статистика";
    this.mot = "Общо игри";
    this.pih = "Общо залог";
    this.nmr = "Общо печалби";
    this.izr = "Общо време на игра";
    this.ftd = "Прочетох това съобщение.";
    this.rrx = "ИЗХОД|ОТ|ИГРАТА";
    this.ztv = "ИСТОРИЯ";
    this.fra = "Няма играни игри.";
    this.state = "СТАТУС";
    this.itm = "Основна игра";
    this.nzp = "Автоматично събрани";
    this.lex = "Събрани";
    this.yrw = "Бонус-игри";
    this.kcv = "Дублиране";
    this.hoy = "Половина";
    this.oma = "Respin";
    this.xiq = "Бонус";
    this.zxc = "Първо раздаване";
    this.mea = "Второ раздаване";
    this.nfr = "Трето раздаване";
    this.htt = "ПРОДЪЛЖЕНИЕ";
    this.xsc = "Не показвай отново";
    this.aly = "AUTOSTART";
    this.rsp = "ДУБЛИРАНЕ";
    this.qhr = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.zyg = "Звукът не може да бъде зареден!";
    this.fdg = "Липсват ресурси!";
    this.nls = "Игра без звук?";
    this.qff = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.spf = "Настройте интерфейса на играта според своите нужди!";
    this.gen = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.kfc = "ИЗЧИСТВАНЕ";
    this.lof = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.elx = "Брой игри:";
    this.vaj = "Спри автоматичния старт";
    this.xzt = "Кредит по-малък от:";
    this.sri = "Кредит по-висок от:";
    this.lpr = "Спечели повече от:";
    this.gdl = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.xru = "Сподели във Facebook";
    this.ok = "OK";
    this.uan = "Reality Check";
    this.cdn = "Заявили сте проверка на реалността.";
    this.fbs = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
flw.prototype = new tud;

function nno() {
    this.urg = "მინიმალური ფსონი არის";
    this.dlu = "მაქსიმალური ფსონი";
    this.iqi = "მინიმალური ფსონი";
    this.ozz = "მაქსიმალური ფსონი";
    this.eaj = "ფსონი";
    this.start = "დაწყება";
    this.ebh = "დახმარება";
    this.apd = "გადახდის მრიცხველი";
    this.mmr = "მენიუ";
    this.cbg = "მეტი|თამაშები";
    this.zax = "გაჩერება";
    this.fmn = "კრედიტი";
    this.odv = "თამაში დასრულებულია";
    this.gve = "გამარჯვებული!";
    this.mfn = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.hps = "ბოლო მოგება";
    this.uhp = "შეგროვება";
    this.soa = "შეგროვება";
    this.pqg = "აზარტი";
    this.npj = "ავტო|დაწყება";
    this.mzz = "ნახევარი";
    this.coc = "გამოსვლა";
    this.klb = "თამაშის დაწყება";
    this.ehn = "აირჩიეთ ფსონი";
    this.qeo = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.ymv = "მთლიანი მოგება";
    this.vrj = "გაფრთხილება";
    this.mxn = "მთლიანი";
    this.nuo = "გთხოვთ, დაელოდოთ ...";
    this.tae = "მეტი თამაშები";
    this.cyf = "ტურბო";
    this.xyo = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.htt = "გაგრძელება";
    this.aly = "ავტო დაწყება";
    this.qhr = "გადახდის მრიცხველი";
    this.rsp = "აზარტი";
    this.left = "მარცხნივ";
    this.udr = "მარჯვნივ";
    this.wwn = "ავტომატურად";
    this.ok = "კი";
    this.kfc = "გაუქმება";
    this.kcv = "აზარტი";
    this.hoy = "ნახევარი";
    this.qud = "თამაშის წესები";
    this.jar = "თამაშის წესები";
    this.qob = "BONUS!";
    this.bkc = "ბონუს";
    this.rcc = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.piz = "არა საკმარისი კრედიტი.";
    this.pbb = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.jpw = "ჩატვირთვის  ...";
    this.dlw = "ჩატვირთვის  ისტორია  ...";
    this.zbm = "საკომუნიკაციო შეცდომა";
    this.vcb = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.owa = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.iem = "თამაში დასრულდება";
    this.xka = "თამაში გადაიტვირთება";
    this.cdw = "მოგებულია";
    this.zya = "wins";
    this.bty = "V A L U E";
    this.error = "შეცდომა";
    this.egz = "უფასო თამაში";
    this.sfd = "თამაშის  ნომერი";
    this.vrg = "სათამაშო დრო";
    this.jij = "ბოლო ";
    this.hqc = "თამაშები";
    this.thn = "დეპოზიტი";
    this.audio = "ხმა";
    this.qdl = "მუსიკა";
    this.jjd = "სრული ეკრანი";
    this.umc = "სრული ეკრანი";
    this.language = "ენის";
    this.xsc = "მომავალში აღარ ჩვენება";
    this.zyg = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.fdg = "არასაკმარისი რესურსები!";
    this.nls = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.dmu = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.rgi = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.cll = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.tzc = "გთხოვთ გამოიყენოთ";
    this.ugr = "-ის მიმდინარე ვერსია";
    this.pjk = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.zbd = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.qff = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.spf = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.iex = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.xav = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.xky = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.mot = "მთლიანი თამაშები";
    this.pih = "ფსონი მთლიანად";
    this.nmr = "მთლიანი მოგება";
    this.izr = "მთლიანი სათამაშო დრო";
    this.ftd = "მე გავეცანი ამ გზავნილს.";
    this.rrx = "თამაშის|დამთავრება";
    this.ztv = "მოვლენების ჩანაწერი";
    this.fra = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.itm = "ძირითადი თამაში";
    this.nzp = "ავტომატურად შეგროვება";
    this.lex = "აღებულ იქნა";
    this.zxc = "პირველი დარიგება";
    this.mea = "მეორე დარიგება";
    this.nfr = "მესამე დარიგება";
    this.lof = "ავტოგამშვების პარამეტრები";
    this.elx = "თამაშების რაოდენობა:";
    this.vaj = "შეაჩერეთ ავტოგამშვები";
    this.xzt = "კრედიტი უფრო დაბალი ვიდრე:";
    this.sri = "კრედიტი უფრო მაღალი ვიდრე:";
    this.lpr = "მოიგეთ უფრო მეტი ვიდრე:";
    this.gdl = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.xru = "გააზიარეთ ფეისბუქზე";
    this.qsf = "სტატისტიკა";
    this.of = "/";
    this.yrw = "Bonus თამაში";
    this.xiq = "ბონუსი";
    this.dbg = "ინფორმაცია";
    this.ife = "პარამეტრ.";
    this.oma = "ხელახლა დატრიალების";
    this.gen = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.uan = "რეალობის შემოწმება";
    this.cdn = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.fbs = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
nno.prototype = new tud;

function zyt() {
    this.urg = "A MINIMUM TÉT";
    this.dlu = "MAXIMUM TÉT";
    this.iqi = "MIN. TÉT";
    this.ozz = "MAX. TÉT";
    this.eaj = "TÉT";
    this.start = "START";
    this.ebh = "SÚGÓ";
    this.apd = "SÚGÓ";
    this.mmr = "MENÜ";
    this.cbg = "MENÜ";
    this.zax = "STOP";
    this.fmn = "HITEL";
    this.odv = "A JÁTÉKNAK VÉGE";
    this.gve = "NYEREMÉNY!";
    this.mfn = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.hps = "UTOLSÓ NYER.";
    this.uhp = "FELÍR";
    this.soa = "FELÍR";
    this.pqg = "SZORZÁS";
    this.npj = "AUTO|START";
    this.mzz = "FELEZÉS";
    this.coc = "KILÉPÉS";
    this.klb = "START";
    this.ehn = "VÁLASSZON TÉTET";
    this.qeo = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.ymv = "Összes Nyeremény";
    this.vrj = "Figyelmeztetés";
    this.mxn = "ÖSSZES";
    this.nuo = "KÉREM VÁRJON ...";
    this.tae = "Menü";
    this.cyf = "SEBESSÉG";
    this.xyo = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.htt = "TOVÁBB";
    this.aly = "AUTOSTART";
    this.qhr = "SÚGÓ";
    this.rsp = "SZORZÁS";
    this.left = "BAL";
    this.udr = "JOBB";
    this.ok = "OK";
    this.kfc = "MÉGSEM";
    this.kcv = "Szorzás";
    this.hoy = "Felezés";
    this.qud = "JÁTÉKSZABÁLYOK";
    this.jar = "JÁTÉKSZABÁLYOK";
    this.qob = "Bónusz!";
    this.bkc = "BÓNUSZ";
    this.rcc = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.piz = "NINCS ELÉG HITEL";
    this.bty = "V A L U E";
    this.zya = "nyeremények";
    this.of = "/";
    this.pbb = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.jpw = "BETÖLTÉSE ...";
    this.dlw = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.zbm = "Kommunikációs hiba";
    this.vcb = "Elérte az egyik limitet!";
    this.owa = "Elérte a szabad játékok maximum számát!";
    this.iem = "A játék megállítva";
    this.xka = "Játék újraindul";
    this.cdw = "NYERT";
    this.error = "HIBA";
    this.egz = "FREEPLAY";
    this.wwn = "AUTO";
    this.sfd = "JÁTÉK ID";
    this.vrg = "Játék Idő";
    this.jij = "utolsó";
    this.hqc = "játék";
    this.thn = "HITEL";
    this.audio = "HANG";
    this.qdl = "ZENE";
    this.jjd = "TELJES KÉPERNYŐ";
    this.umc = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.xsc = "Ne mutassa mégegyszer";
    this.zyg = "A hangot nem lehet betölteni!";
    this.fdg = "Források hiányoznak!";
    this.nls = "Játék hang nélkül?";
    this.ife = "BEÁLLÍTÁS";
    this.dmu = "Kérjük fordítsa el a készüléket!";
    this.dbg = "INFÓ";
    this.rgi = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.cll = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.tzc = "Kérjük használja a(z)";
    this.ugr = " legújabb verzióját!";
    this.pjk = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.zbd = "Ez a játék nem indítható FreePlay módban!";
    this.qff = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.spf = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.iex = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.xav = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.xky = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.qsf = "Statisztika";
    this.mot = "Összes Játék";
    this.pih = "Összes Tét";
    this.nmr = "Összes Nyeremény";
    this.izr = "Összes Játék Idő";
    this.ftd = "Elolvastam az üzenetet.";
    this.rrx = "KILÉPÉS";
    this.ztv = "Előzmények";
    this.fra = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.itm = "Fő Játék";
    this.nzp = "Autom. Felírás";
    this.lex = "Felírva";
    this.yrw = "Bónusz játék";
    this.oma = "Respin";
    this.xiq = "Bónusz";
    this.zxc = "Első Leosztás";
    this.mea = "Második Leosztás";
    this.nfr = "Harmadik Leosztás";
    this.lof = "AUTOSTART BEÁLLÍTÁS";
    this.elx = "Játékok száma:";
    this.vaj = "Stop autostart";
    this.xzt = "A hitel kevesebb, mint:";
    this.sri = "A hitel több, mint:";
    this.lpr = "A nyeremény több, mint:";
    this.gdl = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.xru = "Megosztás a Facebook-on";
    this.gen = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.uan = "Reality Check";
    this.cdn = "Ön egy valóság-ellenőrzést kért.";
    this.fbs = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
zyt.prototype = new tud;

function nqd() {
    this.urg = "MIZA MINIMĂ ESTE";
    this.dlu = "MIZA MAXIMĂ";
    this.iqi = "MIZA MIN.";
    this.ozz = "MIZA MAX.";
    this.eaj = "MIZĂ";
    this.start = "START";
    this.ebh = "AJUTOR";
    this.apd = "LISTA|CÂŞTIGURI";
    this.mmr = "MENIU";
    this.cbg = "MENIUL|JOCULUI";
    this.zax = "STOP";
    this.fmn = "CREDIT";
    this.odv = "SFÂRŞIT JOCUL";
    this.gve = "CÂŞTIGĂTOR!";
    this.mfn = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.hps = "ULTIMUL CÂŞTIG";
    this.uhp = "COLECTA";
    this.soa = "COLECTA";
    this.pqg = "JOC";
    this.npj = "AUTO|START";
    this.mzz = "COLECTARE|1/2";
    this.coc = "IEŞIRE";
    this.klb = "APĂSAŢI START";
    this.ehn = "ALEGEŢI MIZA";
    this.qeo = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.ymv = "Câştig total";
    this.vrj = "Avertizare";
    this.mxn = "TOTAL";
    this.nuo = "AŞTEPTAŢI VĂ ROG ...";
    this.tae = "Meniul Jocului";
    this.cyf = "VITEZĂ";
    this.xyo = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.htt = "CONTINUARE";
    this.aly = "AUTOSTART";
    this.qhr = "LISTA CÂŞTIGURI";
    this.rsp = "JOC";
    this.left = "STÂNGA";
    this.udr = "DREAPTA";
    this.ok = "OK";
    this.kfc = "ÎNTRERUPERE";
    this.kcv = "Joc";
    this.hoy = "Colectare 1/2";
    this.qud = "REGULILE JOCULUI";
    this.jar = "REGULILE|JOCULUI";
    this.qob = "Bonus!";
    this.bkc = "BONUS";
    this.rcc = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.piz = "CREDIT INSUFICIENT.";
    this.zya = "câştigă";
    this.bty = "V A L U E";
    this.of = "DIN";
    this.pbb = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.jpw = "ÎNCARCĂ ...";
    this.dlw = "ÎNCARCĂ ISTORIC ...";
    this.zbm = "Eroare de comunicare";
    this.vcb = "Aţi atins una dintre limite!";
    this.owa = "Aţi atins numărul maxim de jocuri gratis!";
    this.iem = "Jocul se încheie";
    this.xka = "Jocul se restartează";
    this.cdw = "CÂŞTIGAT";
    this.error = "EROARE";
    this.egz = "FREEPLAY";
    this.wwn = "AUTO";
    this.sfd = "ID JOC";
    this.vrg = "TIMP DE JOC";
    this.jij = "ultimele";
    this.hqc = "jocuri";
    this.thn = "CREDIT";
    this.audio = "AUDIO";
    this.qdl = "MUZICĂ";
    this.jjd = "ECRAN COMPLET";
    this.umc = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.xsc = "Nu reafișați";
    this.zyg = "Sunetele nu pot fi încărcate!";
    this.fdg = "Lipsesc resurse!";
    this.nls = "Jucaţi fără sunet?";
    this.ife = "SETĂRI";
    this.dmu = "Vă rugăm opriţi aparatul!";
    this.dbg = "INFO";
    this.rgi = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.cll = "Acest joc este optimizat pentru Google Chrome.";
    this.ucj = "Vă rugăm utilizaţi versiunea actuală";
    this.pjk = "Din păcate acest browser nu este sprijinit complet.";
    this.zbd = "Acest joc nu poate fi pornit în modul freeplay!";
    this.qff = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.spf = "Ajustează interfaţa de joc nevoilor dvs!";
    this.iex = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.xav = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.xky = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.qsf = "Statistică";
    this.mot = "Număr jocuri";
    this.pih = "Pariuri totale";
    this.nmr = "Câştig total";
    this.izr = "Timp total de joc";
    this.ftd = "Am citit mesajul.";
    this.rrx = "ÎNCHEIERE|JOC";
    this.ztv = "ISTORIC";
    this.fra = "Nu există jocuri.";
    this.state = "STATUT";
    this.itm = "Joc principal";
    this.nzp = "Auto colectare";
    this.lex = "Colectat";
    this.yrw = "Bonusspins";
    this.oma = "Respin";
    this.xiq = "Bonus";
    this.zxc = "Primul Deal";
    this.mea = "Al doilea deal";
    this.nfr = "Al treilea deal";
    this.lof = "SETĂRI AUTOSTART";
    this.elx = "Numărul jocurilor:";
    this.vaj = "Oprire autostart";
    this.xzt = "Credit sub:";
    this.sri = "Credit peste:";
    this.lpr = "Câștig peste:";
    this.gdl = "Autostart se va opti la începerea bonusului.";
    this.xru = "Distribuie Facebook";
    this.gen = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.uan = "Reality Check";
    this.cdn = "Ai cerut un Reality Check.";
    this.fbs = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
nqd.prototype = new tud;

function vlj() {
    this.urg = "MÍNIMA APOSTA É";
    this.dlu = "MÁX. APOSTA";
    this.iqi = "MÍN. APOSTA";
    this.ozz = "MÁX. APOSTA";
    this.eaj = "APOSTA";
    this.start = "PARTIDA";
    this.ebh = "AJUDA";
    this.apd = "ESQUEMA|DE PAGOS";
    this.mmr = "MENU";
    this.cbg = "SELEÇÃO|DE JOGOS";
    this.zax = "PARADA";
    this.fmn = "CRÉDITO";
    this.odv = "FIM DO JOGO";
    this.gve = "VENCEDOR!";
    this.mfn = "BOA SORTE!";
    this.win = "GANHO";
    this.hps = "ULTIMO GANHO";
    this.uhp = "COLETAR";
    this.soa = "COLETAR";
    this.pqg = "JOGADA";
    this.npj = "AUTO|PARTIDA";
    this.mzz = "METADE";
    this.coc = "SAÍDA";
    this.klb = "PREMIR PARTIDA";
    this.ehn = "SELECIONAR APOSTA";
    this.qeo = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.ymv = "Ganho total";
    this.vrj = "Aviso";
    this.mxn = "TOTAL";
    this.nuo = "AGUARDE POR FAVOR ...";
    this.tae = "Seleção de jogos";
    this.cyf = "VELOCIDADE";
    this.xyo = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.htt = "CONTINUAR";
    this.aly = "AUTOPARTIDA";
    this.qhr = "ESQUEMA DE PAGOS";
    this.rsp = "JOGADA";
    this.left = "ESQUERDA";
    this.udr = "DIREITA";
    this.ok = "OK";
    this.kfc = "CANCELAR";
    this.kcv = "Jogada";
    this.hoy = "Metade";
    this.qud = "REGRAS DO JOGO";
    this.jar = "REGRAS|DO JOGO";
    this.qob = "Bonus!";
    this.bkc = "BONUS";
    this.rcc = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.piz = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.zya = "ganha";
    this.bty = "V A L U E";
    this.of = "DE";
    this.pbb = "TOCAR NA TELA PARA CONTINUAR";
    this.jpw = "CARREGANDO ...";
    this.dlw = "CARREGANDO HISTÓRICO ...";
    this.zbm = "Erro de comunicação";
    this.vcb = "Alcançou um dos limities!";
    this.owa = "Alcançou a quantidade máxima de jogos livres!";
    this.iem = "O jogo será encerrado";
    this.xka = "O jogo será reiniciado";
    this.cdw = "GANHOU";
    this.error = "ERRO";
    this.egz = "FREEPLAY";
    this.wwn = "AUTO";
    this.sfd = "ID JOGO";
    this.vrg = "Playing Time";
    this.jij = "Últimos";
    this.hqc = "jogos";
    this.thn = "DEPOSIT";
    this.audio = "AUDIO";
    this.qdl = "MUSIC";
    this.jjd = "TELA CHEIA";
    this.umc = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.xsc = "Não exibir novamente";
    this.zyg = "Sounds não podem ser carregados!";
    this.fdg = "Faltam recursos!";
    this.nls = "Jogar sem som?";
    this.ife = "AJUSTES";
    this.dmu = "Favor girar o seu aparelho!";
    this.dbg = "INFORMAÇÃO";
    this.rgi = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.cll = "Este jogo é otimizado por Google Chrome.";
    this.ucj = "Favor usar a versão atual de";
    this.pjk = "Infelizmente este browser não é completamente suportado.";
    this.zbd = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.qff = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.spf = "Adapte a interface do jogo às suas necessidades!";
    this.iex = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.xav = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.xky = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.qsf = "Estatísticas";
    this.mot = "Número de jogos";
    this.pih = "Aposta total";
    this.nmr = "Ganho total";
    this.izr = "Tempo total do jogo";
    this.ftd = "Eu lí esta mensagem.";
    this.rrx = "ENCERRAR|JOGO";
    this.ztv = "HISTÓRICO";
    this.fra = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.itm = "Jogo principal";
    this.nzp = "Coletado automaticamente";
    this.lex = "Coletado";
    this.yrw = "Bonusspins";
    this.oma = "Respin";
    this.xiq = "Bonus";
    this.zxc = "Primeiro Deal";
    this.mea = "Segundo Deal";
    this.nfr = "Terceiro Deal";
    this.lof = "AJUSTES AUTOPARTIDA";
    this.elx = "Número de jogos:";
    this.vaj = "Parar autopartida";
    this.xzt = "Crédito menor do que:";
    this.sri = "Crédito maior do que:";
    this.lpr = "Ganho maior do que:";
    this.gdl = "O autopartida será parado no início do bonus.";
    this.xru = "Participar no Facebook";
    this.gen = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.uan = "Reality Check";
    this.cdn = "Solicitaste um Reality Check.";
    this.fbs = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
vlj.prototype = new tud;

function ycf() {
    this.urg = "LA MISE MINIMALE EST DE";
    this.dlu = "MISE MAX.";
    this.iqi = "MISE MINI";
    this.ozz = "MISE MAX.";
    this.eaj = "MISE";
    this.start = "DEPART";
    this.ebh = "AIDE";
    this.apd = "TABLEAU|DES PAIEMENTS";
    this.mmr = "MENU";
    this.cbg = "PLUS|DE JEUX";
    this.zax = "ARRÊTEZ";
    this.fmn = "CRÉDIT";
    this.odv = "FIN DU JEU";
    this.gve = "GAGNANT!";
    this.mfn = "BONNE CHANCE!";
    this.win = "GAIN";
    this.hps = "DERNIER GAIN";
    this.uhp = "ENCAISSER";
    this.soa = "ENCAISSER";
    this.pqg = "DOUBLER";
    this.npj = "AUTO|LANCER";
    this.mzz = "ENCAISSER|MOITIÉ";
    this.coc = "SORTIE";
    this.klb = "APPUYEZ SUR START";
    this.ehn = "CHOISIR LA MISE";
    this.qeo = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.ymv = "Gain total";
    this.vrj = "Avertissement";
    this.mxn = "TOTALE";
    this.nuo = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.tae = "Plus de jeux";
    this.cyf = "VITESSE";
    this.xyo = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.htt = "CONTINUER";
    this.aly = "AUTO LANCER";
    this.qhr = "TABLEAU DES PAIEMENTS";
    this.rsp = "DOUBLER";
    this.left = "GAUCHE";
    this.udr = "DROITE";
    this.ok = "OK";
    this.kfc = "ANNULER";
    this.kcv = "Doubler";
    this.hoy = "Encaisser moitié";
    this.qud = "RÈGLES DU JEU";
    this.jar = "RÈGLES DU JEU";
    this.qob = "Bonus!";
    this.bkc = "BONUS";
    this.rcc = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.piz = "PAS ASSEZ DE CRÉDIT";
    this.zya = "gagne";
    this.bty = "V A L U E";
    this.of = "SUR";
    this.pbb = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.jpw = "CHARGEMENT EN COURS ...";
    this.dlw = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.zbm = "Erreur de communication";
    this.vcb = "Vous avez atteint une des limites!";
    this.owa = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.iem = "Le jeu sera terminé";
    this.xka = "Le jeu sera démarré de nouveau";
    this.cdw = "GAGNÉ";
    this.error = "ERREUR";
    this.egz = "JEU GRATUIT";
    this.wwn = "AUTO";
    this.sfd = "ID DU JEU";
    this.vrg = "TEMPS DE JEU";
    this.jij = "Les";
    this.hqc = "derniers jeux";
    this.thn = "AVOIR";
    this.audio = "AUDIO";
    this.qdl = "MUSIQUE";
    this.jjd = "PLEIN ÉCRAN";
    this.umc = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.xsc = "Ne pas afficher encore une fois";
    this.zyg = "Impossible de charger des sounds!";
    this.fdg = "Manque de ressources!";
    this.nls = "Jouer sans son?";
    this.ife = "CONFIGUR.";
    this.dmu = "Merci de tourner votre matériel!";
    this.dbg = "INFO";
    this.rgi = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.cll = "Ce jeu est optimisé pour Google Chrome.";
    this.ucj = "Veuilllez utiliser la version à jour de";
    this.pjk = "Malheureusement, ce browser n'est intégralement supporté.";
    this.zbd = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.qff = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.spf = "Adapte l'interface de jeu à tes besoins!";
    this.iex = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.xav = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.xky = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.qsf = "Statistiques";
    this.mot = "Nombre des jeux";
    this.pih = "Total des mises";
    this.nmr = "Gain total";
    this.izr = "Temps total du jeu";
    this.ftd = "J'ai lu le message";
    this.rrx = "TERMINER|LE JEU";
    this.ztv = "Historique";
    this.fra = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.itm = "Jeu principal";
    this.nzp = "Pris automatiquement";
    this.lex = "Pris";
    this.yrw = "Bonusspins";
    this.oma = "Respin";
    this.xiq = "Bonus";
    this.zxc = "Premier Deal";
    this.mea = "Deuxième Deal";
    this.nfr = "Troisième Deal";
    this.lof = "AUTOSTART CONFIGURATION";
    this.elx = "Nombre des jeux:";
    this.vaj = "Arrêter autostart";
    this.xzt = "Crédit inférieur à:";
    this.sri = "Crédit supérieur à:";
    this.lpr = "Gain supérieur à:";
    this.gdl = "L'autostart est arrêté au début du bonus.";
    this.xru = "Partager sur Facebook";
    this.gen = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.uan = "Reality Check";
    this.cdn = "Tu as demandé un Reality Check.";
    this.fbs = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
ycf.prototype = new tud;

function zhj() {
    this.urg = "NAJMANJI ULOG JE";
    this.dlu = "MAX ULOG";
    this.iqi = "MIN. ULOG";
    this.ozz = "MAKS. ULOG";
    this.eaj = "ULOG";
    this.start = "START";
    this.ebh = "POMOĆ";
    this.apd = "LISTA DOBITAKA";
    this.mmr = "IZBORNIK";
    this.cbg = "VIŠE|IGARA";
    this.zax = "STOP";
    this.fmn = "KREDIT";
    this.odv = "KRAJ IGRE";
    this.gve = "DOBITAK!";
    this.mfn = "SRETNO!";
    this.win = "DOBITAK";
    this.hps = "ZADNJI DOBITAK";
    this.uhp = "UPIŠI";
    this.soa = "UPIŠI";
    this.pqg = "DUPLANJE";
    this.npj = "AUTO|START";
    this.mzz = "UZMI|1/2";
    this.coc = "IZLAZ";
    this.klb = "PRETISNITE START";
    this.ehn = "BIRAJTE ULOG";
    this.qeo = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.ymv = "Ukubni dobitci";
    this.vrj = "Upozorenje";
    this.mxn = "UKUBNI";
    this.nuo = "MOLIMO PRIČEKAJTE ...";
    this.tae = "Više igara";
    this.cyf = "BRZINA";
    this.xyo = "Kod kvara na uređaju nema jamstva.";
    this.htt = "DALJE";
    this.aly = "AUTOSTART";
    this.qhr = "LISTA DOBITAKA";
    this.rsp = "DUPLANJE";
    this.left = "LIJEVA";
    this.udr = "DESNA";
    this.ok = "OK";
    this.kfc = "PREKID";
    this.kcv = "Duplanje";
    this.hoy = "Uzmi 1/2";
    this.qud = "PRAVILA IGRE";
    this.jar = "PRAVILA IGRE";
    this.qob = "Bonus!";
    this.bkc = "BONUS";
    this.rcc = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.piz = "NEMATE DOVOLJNO KREDITA.";
    this.zya = "dobici";
    this.bty = "V A L U E";
    this.of = "OD";
    this.pbb = "ZA NASTAVAK DODIRNITE ZASLON";
    this.jpw = "UČITAVANJA ...";
    this.dlw = "POVIJEST UČITAVANJA ...";
    this.zbm = "Komunikacijska pogreška";
    this.vcb = "Dostigli ste jednu od graničnih vrijednosti!";
    this.owa = "Dostigli ste maksimum besplatnih igara!";
    this.iem = "Igra se zatvara";
    this.xka = "Igra se iznova učitava";
    this.cdw = "OSVOJENO";
    this.error = "POGREŠKA";
    this.egz = "FREEPLAY";
    this.wwn = "AUTO";
    this.sfd = "ID IGRE";
    this.vrg = "Vrijeme igre";
    this.jij = "posljednjih";
    this.hqc = "igara";
    this.thn = "DEPOZIT";
    this.audio = "ZVUKA";
    this.qdl = "GLAZBA";
    this.jjd = "PUN ZASLON";
    this.umc = "PUN ZASLON";
    this.language = "JEZIKA";
    this.xsc = "Ne prikazuj ponovo";
    this.zyg = "Zvukovi se ne mogu učitati!";
    this.fdg = "Nedostaju resursi!";
    this.nls = "Želite li igrati uz zvuk?";
    this.ife = "POSTAVKE";
    this.dmu = "Uključite svoj uređaj!";
    this.dbg = "INFORMACIJE";
    this.rgi = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.cll = "Ova igra je optimizirana za Google Chrome.";
    this.ucj = "Molimo koristite se trenutnom inačicom";
    this.pjk = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.zbd = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.qff = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.spf = "Prilagodite sučelje igre svojim potrebama!";
    this.iex = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.xav = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.xky = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.qsf = "Statistike";
    this.mot = "Ukupno igara";
    this.pih = "Ukupni ulog";
    this.nmr = "Ukupno dobitaka";
    this.izr = "Ukupno vrijeme igre";
    this.ftd = "Pročitao sam ovu poruku";
    this.rrx = "IZLAZ|IZ IGRE";
    this.ztv = "Povijest";
    this.fra = "Nema odigranih igara.";
    this.state = "STANJE";
    this.itm = "Glavna igra";
    this.nzp = "Auto. pokupljeno";
    this.lex = "Pokupljeno";
    this.yrw = "Besplatne igre";
    this.oma = "Dodatne okretaje";
    this.xiq = "Bonus";
    this.zxc = "Prvo dijeljenje";
    this.mea = "Drugo dijeljenje";
    this.nfr = "Treće dijeljenje";
    this.lof = "POSTAVKE AUTOMATSKE IGRE";
    this.elx = "Ukupno igara:";
    this.vaj = "Zaustavljanje automatske igre";
    this.xzt = "Kredit manji od:";
    this.sri = "Kredit veći od:";
    this.lpr = "Dobitak veći od:";
    this.gdl = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.xru = "Podijeli na Facebooku";
    this.gen = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.uan = "Reality Check";
    this.cdn = "Zatražili ste Reality Check.";
    this.fbs = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
zhj.prototype = new tud;

function lsp() {
    this.urg = "MINIMA PUNTATA È";
    this.dlu = "PUNTATA MASSIMA";
    this.iqi = "MIN. PUNTATA";
    this.ozz = "MASS. PUNTATA";
    this.eaj = "PUNTATA";
    this.start = "START";
    this.ebh = "AIUTO";
    this.apd = "TABELLA VINCITE";
    this.mmr = "MENU";
    this.cbg = "SCELTA|GIOCHI";
    this.zax = "STOP";
    this.fmn = "CREDITO";
    this.odv = "FINE PARTITA";
    this.gve = "VINCITORE!";
    this.mfn = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.hps = "ULTIMA VINCITA";
    this.uhp = "INCASSA";
    this.soa = "INCASSA";
    this.pqg = "GAMBLE";
    this.npj = "AUTO|START";
    this.mzz = "METÀ";
    this.coc = "FINE";
    this.klb = "PREMI START";
    this.ehn = "SCEGLI PUNTATA";
    this.qeo = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.ymv = "Totale vincita";
    this.vrj = "Attenzione";
    this.mxn = "TOTALE";
    this.nuo = "ATTENDERE PREGO ...";
    this.tae = "Scelta Giochi";
    this.cyf = "VELOCITÀ";
    this.xyo = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.htt = "CONTINUA";
    this.aly = "AUTOSTART";
    this.qhr = "TABELLA VINCITE";
    this.rsp = "GAMBLE";
    this.left = "SINISTRA";
    this.udr = "DESTRA";
    this.ok = "OK";
    this.kfc = "CANCELLA";
    this.kcv = "Gamble";
    this.hoy = "Metà";
    this.qud = "REGOLAMENTO";
    this.jar = "REGOLAMENTO";
    this.qob = "Bonus!";
    this.bkc = "BONUS";
    this.rcc = "PREMI UN TASTO PER CONTINUARE";
    this.piz = "CREDITO INSUFFICIENTE!";
    this.zya = "vince";
    this.bty = "V A L U E";
    this.of = "DI";
    this.pbb = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.jpw = "STA CARICANDO ...";
    this.dlw = "STA CARICANDO LA CRONACA ...";
    this.zbm = "Errore di comunicazione";
    this.vcb = "Hai raggiunto uno dei limiti!";
    this.owa = "Hai raggiunto il numero massimo di free games!";
    this.iem = "La partita sta terminando";
    this.xka = "La partita sta ripartendo";
    this.cdw = "VINTO";
    this.error = "ERRORE";
    this.egz = "FREEPLAY";
    this.wwn = "AUTO";
    this.sfd = "GAME ID";
    this.vrg = "Durata del gioco";
    this.jij = "Ultime partite";
    this.hqc = "";
    this.thn = "DEPOSITO";
    this.audio = "AUDIO";
    this.qdl = "MUSICA";
    this.jjd = "SCHERMO INTERO";
    this.umc = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.xsc = "Non mostrare di nuovo";
    this.zyg = "Suoni non caricabili!";
    this.fdg = "Mancano risorse!";
    this.nls = "Giocare senza suoni?";
    this.ife = "SETTAGGI";
    this.dmu = "Prego girare l'apparecchio!";
    this.dbg = "INFO";
    this.rgi = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.cll = "La partita è ottimizzata per Google Chrome.";
    this.ucj = "Prego utilizzare la versione attuale di";
    this.pjk = "Purtroppo il presente browser non viene supportato interamente";
    this.zbd = "Impossibile avviare questa partita nel modo freeplay!";
    this.qff = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.spf = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.iex = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.xav = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.xky = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.qsf = "Statistica";
    this.mot = "Totale partite";
    this.pih = "Totale puntata";
    this.nmr = "Totale vincita";
    this.izr = "Totale durata del gioco";
    this.ftd = "Ho letto il messaggio";
    this.rrx = "TERMINARE|LA PARTITA";
    this.ztv = "Cronaca";
    this.fra = "Nessuna partita giocata.";
    this.state = "STATO";
    this.itm = "Partita principale";
    this.nzp = "Raccolto autom.";
    this.lex = "Raccolto";
    this.yrw = "Bonusspin";
    this.oma = "Respin";
    this.xiq = "Bonus";
    this.zxc = "Primo deal";
    this.mea = "Secondo deal";
    this.nfr = "Terzo deal";
    this.lof = "SETTAGGI AUTOSTART";
    this.elx = "Numero di partite:";
    this.vaj = "Fermare l'autostart";
    this.xzt = "Credito più basso di:";
    this.sri = "Credito più alto di:";
    this.lpr = "Vincita più alta di:";
    this.gdl = "L'autostart si ferma all'inizio del bonus.";
    this.xru = "Dividi su facebook";
    this.gen = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.uan = "Reality Check";
    this.cdn = "Avete richiesto un Reality Check.";
    this.fbs = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.ggd = "Game break";
    this.zxe = "Game limits";
    this.ggv = "Self test";
    this.tpj = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
lsp.prototype = new tud;

function aqi() {
    this.urg = "MIN. INSATSEN ÄR";
    this.dlu = "MAXIMAL INSATS";
    this.iqi = "MIN. INSATS";
    this.ozz = "MAX. INSATS";
    this.eaj = "INSATS";
    this.start = "STARTA";
    this.ebh = "HJÄLP";
    this.apd = "VINSTTABELL";
    this.mmr = "MENY";
    this.cbg = "FLER|SPEL";
    this.zax = "STOPP";
    this.fmn = "KREDIT";
    this.odv = "SPELET ÄR SLUT";
    this.gve = "VINNARE!";
    this.mfn = "LYCKA TILL!";
    this.win = "VINN";
    this.hps = "SENASTE VINSTEN";
    this.uhp = "INKASSERA";
    this.soa = "INKASSERA";
    this.pqg = "DUBBLERA";
    this.npj = "AUTO|START";
    this.mzz = "HÄLFTEN|1/2";
    this.coc = "AVSLUTA";
    this.klb = "TRYCK PÅ START";
    this.ehn = "VÄLJ INSATS";
    this.qeo = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.ymv = "Total Vinst";
    this.vrj = "Varning";
    this.mxn = "TOTALT";
    this.nuo = "VAR VÄNLIG VÄNTA ...";
    this.tae = "Fler spel";
    this.cyf = "TEMPO";
    this.xyo = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.htt = "FORTSÄTT";
    this.aly = "AUTOSTART";
    this.qhr = "VINSTTABELL";
    this.rsp = "DUBBLERA";
    this.left = "VÄNSTER";
    this.udr = "HÖGER";
    this.ok = "OK";
    this.kfc = "AVBRYT";
    this.kcv = "Dubblering";
    this.hoy = "Hälften";
    this.qud = "SPELREGLER";
    this.jar = "SPELREGLER";
    this.qob = "Bonus!";
    this.bkc = "BONUS";
    this.rcc = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.piz = "FÖR LÅGT SALDO!";
    this.zya = "vinster";
    this.bty = "V A L U E";
    this.of = "AV";
    this.pbb = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.jpw = "LÄSER ...";
    this.dlw = "LÄSER IN HISTORIKEN ...";
    this.zbm = "Kommunikationsfel";
    this.vcb = "Du har nått en av gränserna!";
    this.owa = "Du har nått det maximala antalet gratisspel!";
    this.iem = "Spelet avslutas";
    this.xka = "Spelet startas om";
    this.cdw = "VUNNA";
    this.error = "FEL";
    this.egz = "GRATISSPEL";
    this.wwn = "AUTO";
    this.sfd = "SPEL-ID";
    this.vrg = "SPELTID";
    this.jij = "senaste";
    this.hqc = "spelen";
    this.thn = "INSÄTTNING";
    this.audio = "LJUD";
    this.qdl = "MUSIK";
    this.jjd = "HELSKÄRM";
    this.umc = "HELSKÄRM";
    this.language = "SPRÅK";
    this.xsc = "Visa inte igen";
    this.zyg = "Ljud kan inte laddas!";
    this.fdg = "Resurser saknas!";
    this.nls = "Spela utan ljud?";
    this.ife = "INSTÄLLN.";
    this.dmu = "Vänd din enhet!";
    this.dbg = "INFO";
    this.rgi = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.cll = "Det här spelet är optimerat för Google Chrome.";
    this.ucj = "Använd den senaste versionen av";
    this.pjk = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.zbd = "Det här spelet kan inte startas i gratisspelsläget!";
    this.qff = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.spf = "Anpassa spelgränssnittet efter dina behov!";
    this.iex = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.xav = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.xky = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.qsf = "Statistik";
    this.mot = "Totalt antal spel";
    this.pih = "Totalinsats";
    this.nmr = "Totalvinst";
    this.izr = "Total speltid";
    this.ftd = "Jag har läst detta meddelande";
    this.rrx = "AVSLUTA|SPELET";
    this.ztv = "Historik";
    this.fra = "Inga spel har spelats.";
    this.state = "STATUS";
    this.itm = "Huvudspel";
    this.nzp = "Auto. Inkasserat";
    this.lex = "Inkasserat";
    this.yrw = "Bonusspinn";
    this.oma = "Respin";
    this.xiq = "Bonus";
    this.zxc = "Första given";
    this.mea = "Andra given";
    this.nfr = "Tredje given";
    this.lof = "AUTOSTARTINSTÄLLNINGAR";
    this.elx = "Antal spelrundor:";
    this.vaj = "Stoppa autospel";
    this.xzt = "Saldo lägre än:";
    this.sri = "Saldo högre än:";
    this.lpr = "Vinst högre än:";
    this.gdl = "Autospelen kommer att stoppas då bonusen startar.";
    this.xru = "Dela på Facebook";
    this.gen = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.uan = "Reality Check";
    this.cdn = "Du har begärt att få en statusuppdatering.";
    this.fbs = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.ggd = "Spelpaus";
    this.zxe = "Spelgränser";
    this.ggv = "Självtest";
    this.tpj = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
aqi.prototype = new tud;

function ryv() {
    this.ygd = "HELD";
    this.svb = "RED";
    this.bcc = "BLACK";
    this.fjk = "HIGH";
    this.ivs = "LOW";
    this.jrv = "DEAL CARDS";
    this.jka = "HOLD CARDS";
    this.ccf = "DRAW CARDS";
    this.yji = "five equivalent cards (only possible with a wild card)";
    this.kac = "ace - king - queen - jack - ten of the same suit";
    this.mxs = "STRAIGHT with cards of the same suit";
    this.zgv = "four cards of the same rank";
    this.qzc = "combination of THREE OF A KIND and a PAIR";
    this.mbe = "five cards of the same suit";
    this.fop = "five cards in rank order, but not of the same suit";
    this.hmt = "three cards of the same rank";
    this.hec = "two distinct pairs and any 5th card";
    this.ulo = "two jacks, queens, kings or aces";
    this.hmm = "four cards of the same suit with any 5th card";
    this.kds = "straight with ace in the center";
    this.wix = "combination of figures which contains jack, queen and king";
    this.odq = "sequence with even or odd successive values";
    this.ocs = "ROYAL FLUSH containing a wild card";
    this.bnr = "four twos with any other card";
    this.zeg = "four 5's, 6's, 7's, 8's, 9's, 10's, JACK's, QUEEN's OR KING's";
    this.uuu = "four 2's, 3's or 4's with any other card";
    this.fmx = "four aces with any other card";
    this.dxv = "four 2's, 3's OR 4's with an Ace 2,3 or 4";
    this.mxv = "four Aces with 2, 3 or 4";
    this.aan = "two Kings or Aces";
    this.rqo = "two tens, jacks, queens, kings or aces";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "GAMBLE AGAIN OR COLLECT?";
    this.pxb = "SELECT A CARD";
    this.mnk = "If selected card is higher than dealer: WIN!";
    this.olb = "If selected card is lower than dealer: lose";
    this.gou = "If selected card is same as dealer: tie";
    this.voq = "ACE is highest, two is lowest, no wild cards.";
    this.aml = "TIE";
    this.ldw = "PLAYER";
    this.mww = "DEALER";
    this.aze = "BEAT THE DEALER TO DOUBLE THE WIN";
    this.hjv = "SELECT THE CORRECT VALUE TO DOUBLE THE WIN"
}
ryv.prototype = new mwa;

function xsj() {
    this.ygd = "Удержать";
    this.svb = "КРАСНЫЙ";
    this.bcc = "BLACK";
    this.fjk = "КРУПНАЯ";
    this.ivs = "МЕЛКАЯ";
    this.jrv = "РАЗДЕЛИТЬ КАРТЫ";
    this.jka = "УДЕРЖАТЬ КАРТЫ";
    this.ccf = "ВЗЯТЬ КАРТЫ";
    this.yji = "Пять карт одного номинала (одна из них джокер)";
    this.kac = "Туз - король - дама - валет - 10 одной масти";
    this.mxs = "STRAIGHT одной масти";
    this.zgv = "Четыре карты одного номинала";
    this.qzc = "Три карты одного номинала и одна пара";
    this.mbe = "Пять карт одной масти";
    this.fop = "Пять карт по порядку, но не одной масти";
    this.hmt = "Три карты одного номинала";
    this.hec = "Две пары и одна допол. карта";
    this.ulo = "Четыре карты одной масти и одна допол. карта";
    this.hmm = "Два валета, две дамы, два короля или туза";
    this.kds = "Пять карт по порядку через туз (3-2-Т-К-Д)";
    this.wix = "Комбинация из карт с картинками: две валета, две дамы и король";
    this.odq = "Пять четных или пять не четных карт по порядку";
    this.ocs = "ROYAL FLUSH с джокером";
    this.bnr = "Четыре карты 2 и одна допол. карта";
    this.zeg = "Четыре карты 5, 6, 7, 8, 9, 10, валет, дама или король";
    this.uuu = "Четыре карты 2, 3 или 4 с любой допол. картой.";
    this.fmx = "Четыре туза и одна допол. карта";
    this.dxv = "Четыре двойки, тройки или четверки с тузом, двойкой, тройкой или четверкой";
    this.mxv = "Четыре туза с 2, 3 или 4";
    this.aan = "Два короля или туза";
    this.rqo = "Две карты 10, валет, дама, король или туз";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "Удвоить или взять?";
    this.pxb = "ВЫБЕРИТЕ КАРТУ";
    this.mnk = "Если Ваши карты крупнее, чем карты дилера, Вы выиграете!";
    this.olb = "Если Ваши карты мельче, чем карты дилера, Вы не выиграете";
    this.gou = "Если достоинство Ваших карт равно картам дилера, это означает ничью";
    this.voq = "ТУЗ самая крупная, ДВА самая мелкая карта, нет джокеров.";
    this.aze = "ВЫИГРАЙТЕ У РАЗДАЮЩЕГО, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.aml = "РОВНО";
    this.ldw = "ИГРОК";
    this.mww = "DEALER";
    this.hjv = "ВЫБЕРИТЕ ПРАВИЛЬНЫЙ НОМИНАЛ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ."
}
xsj.prototype = new fif;

function sck() {
    this.ygd = "PARAR";
    this.svb = "ROJO";
    this.bcc = "NEGRO";
    this.fjk = "ALTO";
    this.ivs = "BAJO";
    this.jrv = "DAR CARTAS";
    this.jka = "RETENER CARTAS";
    this.ccf = "DAR CARTAS";
    this.yji = "Cinco cartas iguales (sólo posible con el comodin)";
    this.kac = "As - rey - dama - sota - 10 del mismo color";
    this.mxs = "STRAIGHT del mismo color";
    this.kds = "Escalera con as en el centro";
    this.wix = "Combinación de figuras con sota, dama y rey";
    this.zgv = "Cuatro cartas del mismo valor";
    this.odq = "Secuencia de cinco cartas pares o impares de valores sucesivos";
    this.qzc = "Combinación entre THREE OF A KIND y PAIR";
    this.mbe = "Cinco cartas del mismo color";
    this.fop = "Cinco cartas puestas en orden pero no del mismo color";
    this.hmt = "Tres cartas equivalentes";
    this.hec = "Dos pares diferentes y una quinta carta";
    this.ulo = "Cuatro cartas del mismo color con una quinta carta";
    this.hmm = "Dos sotas, damas, reyes o ases";
    this.ocs = "ROYAL FLUSH con comodin";
    this.bnr = "Cuatro doses con otra carta";
    this.zeg = "Cuatro 5, 6, 7, 8, 9, 10, sotas, damas o reyes";
    this.uuu = "Cuatro de dos, de tres o de cuatro con otra carta";
    this.fmx = "Cuatro ases con otra carta";
    this.dxv = "Cuatro 2, 3 o 4 con un as, una 2, 3 o 4";
    this.mxv = "Cuatro ases con una 2, 3 o 4";
    this.aan = "Dos reyes o dos ases";
    this.rqo = "Dos 10, sotas, damas, reyes o ases";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "Arriesgar otra vez o tomar el premio?";
    this.pxb = "Tome una carta";
    this.mnk = "Si la carta es más alta que la del crupier: hay premio!";
    this.olb = "Si la carta elegida es más baja que la del crupier: no hay premio!";
    this.gou = "Si la carta elegida es la misma que la del crupier: QUEDA IGUAL";
    this.voq = "ACE es la más alta, dos es la más baja, no hay comodin.";
    this.aze = "GANAR LA MANO PARA DOBLAR EL PREMIO";
    this.hjv = "SELECCIONAR EL VALOR CORRECTO PARA DOBLAR EL PREMIO";
    this.aml = "IGUAL";
    this.ldw = "JUGADOR";
    this.mww = "MANO"
}
sck.prototype = new xwk;

function kwq() {
    this.ygd = "HALTEN";
    this.svb = "ROT";
    this.bcc = "SCHWARZ";
    this.fjk = "HOCH";
    this.ivs = "TIEF";
    this.jrv = "KARTEN GEBEN";
    this.jka = "KARTEN HALTEN";
    this.ccf = "KARTEN GEBEN";
    this.yji = "Fünf gleiche Karten (nur mit Joker möglich)";
    this.kac = "Ass - König - Dame - Buben - 10er der selben Farbe";
    this.mxs = "STRAIGHT in der selben Farbe";
    this.zgv = "Vier wertgleiche Karten";
    this.qzc = "Kombination aus THREE OF A KIND und PAIR";
    this.mbe = "Fünf Karten mit der selben Farbe";
    this.fop = "Fünf Karten in geordneter Reihenfolge, ohne der selben Farbe";
    this.hmt = "Drei gleichwertige Karten";
    this.hec = "Zwei verschiedene Paare und eine 5. Karte";
    this.ulo = "Zwei Buben, Damen, Könige oder Assen";
    this.hmm = "Vier Karten der selben Farbe mit einer 5. Karte";
    this.kds = "Straight mit Ass in der Mitte";
    this.wix = "Bildkarten welche Bube, Dame und König enthalten";
    this.odq = "Fünf gerade oder ungerade aufeinanderfolgende Werte";
    this.ocs = "ROYAL FLUSH mit Joker";
    this.bnr = "Vier Zweier mit einer anderen Karte";
    this.zeg = "Vier 5er, 6er, 7er, 8er, 9er, 10er, Buben, Damen oder Könige";
    this.uuu = "Vier 2er,3er oder 4er mit einer anderen Karte";
    this.fmx = "Vier Assen mit einer anderen Karte";
    this.dxv = "Vier 2er, 3er oder 4er mit einer As, einem 2er, 3er oder 4er";
    this.mxv = "Vier Assen mit einer 2, 3 oder 4";
    this.aan = "Zwei Könige oder zwei Assen";
    this.rqo = "Zwei 10er, Buben, Damen, Könige oder Assen";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "NOCHEINMAL GAMBELN ODER GEWINN NEHMEN?";
    this.pxb = "NIMM EINE KARTE";
    this.mnk = "Wenn die gewählte Karte höher ist als die vom Dealer: Gewinn!";
    this.olb = "Wenn die gewählte Karte niedriger ist als die vom Dealer: Kein Gewinn";
    this.gou = "Wenn die gewählte Karte die selbe ist wie die vom Dealer: GLEICH";
    this.voq = "Ass ist die höchste Karte, Zwei die niedrigste, keine Joker.";
    this.aze = "BESIEGE DEN GEBER UM DEN GEWINN ZU VERDOPPELN";
    this.hjv = "WÄHLE DEN RICHTIGEN WERT UM DEN GEWINN ZU VERDOPPELN";
    this.aml = "GLEICH";
    this.ldw = "SPIELER";
    this.mww = "GEBER"
}
kwq.prototype = new sws;

function iby() {
    this.ygd = "TUTUNUZ";
    this.svb = "KIRMIZI";
    this.bcc = "SIYAH";
    this.fjk = "YÜKSEK";
    this.ivs = "DERIN";
    this.jrv = "KARTLARI VERİNİZ";
    this.jka = "KARTLARI TUTUNUZ";
    this.ccf = "KARTLARI VERİNİZ";
    this.yji = "Beş ayni kartlar (tek jokerle mümkün)";
    this.kac = "Ass - papaz - dama - valeler - 10lar ayni renkli";
    this.mxs = "STRAIGHT ayni renkli";
    this.zgv = "Dört ayni değerde olan kartlar";
    this.qzc = "Kombinasyon THREE OF A KIND ve PAIR le";
    this.mbe = "Beş ayni renkli kartlar";
    this.fop = "Beş kartlar düzenli bir sıralamada, ayni renk siz";
    this.hmt = "Üç ayni değerinde olan kartlar";
    this.hec = "Iki değişik çiftle ve bir 5. kart";
    this.ulo = "Iki valeler, damalar, papazlar veya asslar";
    this.hmm = "Ayni renkten dört kart ve bir 5. kart";
    this.kds = "As’ı ortada olan Straight";
    this.wix = "Vale, kız ve papaz gösteren resimli kartlar";
    this.odq = "Arka arkaya beş çift veya tek değer";
    this.ocs = "ROYAL FLUSH  joker le";
    this.bnr = "Dört ikili başka bir kartla";
    this.zeg = "Dört 5’li, 6’lı, 7’li, 8’li, 9’lu, 10’lu, vale, kız veya papaz";
    this.uuu = "Dört 2ler,3ler veya 4ler başka bir kartla";
    this.fmx = "Dört as başka bir kartla";
    this.dxv = "Bir as ile bir 2'li, 3'lü veya 4'lü ile dört adet 2'li, 3'lü veya 4'lü";
    this.mxv = "2,3 veya 4 ile dört as";
    this.aan = "Iki papazlar veya iki asslar";
    this.rqo = "Iki 10lar, valeler, damalar, papazlar veya asslar";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "Bir daha riziko veya kazançı alınız?";
    this.pxb = "Bir kart al";
    this.mnk = "Seçilen kart Dealer’inkinden yüksekse: Kazanç!";
    this.olb = "Seçilen kart Dealer’inkinden düşükse: Kazanç yok";
    this.gou = "Seçilen kart Dealer’inkiyle aynı ise: PAT";
    this.voq = "ACE is highest, two is lowest, Joker yok";
    this.aze = "KAĞITLARI DAĞITANI YENEREK KAZANCINI İKİYE KATLAYABİLİRSİN";
    this.aml = "AYNI";
    this.ldw = "OYUNCU";
    this.mww = "DEALER";
    this.hjv = "DOĞRU DEĞERİ SEÇEREK KAZANCINI İKİYE KATLARSIN"
}
iby.prototype = new ymi;

function mli() {
    this.ygd = "DRŽET";
    this.svb = "CERVENÁ";
    this.bcc = "CERNÁ";
    this.fjk = "VELKÁ";
    this.ivs = "MALÁ";
    this.jrv = "DÁT KARTY";
    this.jka = "KARTY DRŽET";
    this.ccf = "DÁT KARTY";
    this.yji = "Pet stejných karet(možné pouze s Jokerem)";
    this.kac = "Eso - král - královna - kluk - desítka stejné barvy";
    this.mxs = "STRAIGHT s kartami stejné barvy";
    this.zgv = "Ctyri karty stejné hodnoty";
    this.qzc = "Kombinace z THREE OF A KIND a PAIR";
    this.mbe = "Pet karet stejné barvy";
    this.fop = "Pet karet usporádaných v rade, ale ne stejné barvy";
    this.hmt = "Tri karty stejné hodnoty";
    this.hec = "Dve odlišné dvojice a 5. karta";
    this.ulo = "Dva klucii, královny, králové nebo esa";
    this.hmm = "Ctyrii karty stejné barvy s 5. kartou";
    this.kds = "postupka s esem uprostred";
    this.wix = "kombinace obsahující pouze postavy (jack, queen  a king)";
    this.odq = "postupka vytvorená ze sudých nebo lichých za sebou následujících císel";
    this.ocs = "ROYAL FLUSH s Jokerem";
    this.bnr = "Ctyri dvojky s jinou kartou";
    this.zeg = "Čtyři 5ky, 6ky, 7ky,8ky,9ky,10ky, kluci,královny nebo králové";
    this.uuu = "Čtyři 2ky,3ky nebo 4ky s další kartou";
    this.fmx = "Čtyri Esa s další kartou";
    this.dxv = "Čtyři 2, 3 nebo 4 s Esem, 2,3 nebo 4";
    this.mxv = "Čtyři Esa s jednou 2,3 nebo 4";
    this.aan = "Dva Králové nebo dvě Esa";
    this.rqo = "Dve desítky, kluci, královny, králové nebo esa";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "HRÁT ZNOVU NEBO VZÍT VÝHRU?";
    this.pxb = "ZVOL KARTU";
    this.mnk = "Je-li zvolená karta vyšší než dealerova: Výhra!";
    this.olb = "Je-li  zvolená karta nižšií než dealerova: Žádná výhra!";
    this.gou = "Je-li  zvolená karta shodná s dealerovou: nerozhodný výsledek";
    this.voq = "Eso je nejvyšší, dvě je nejnižší, žádné divoké karty.";
    this.aze = "PORAZIT DEALERA KE ZDVOJNÁSOBENÍ VÝHRY";
    this.hjv = "VYBRAT SPRÁVNOU HODNOTU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.aml = "STEJNÉ";
    this.ldw = "HRÁČ";
    this.mww = "DEALER"
}
mli.prototype = new ein;

function uil() {
    this.ygd = "HOIA";
    this.svb = "PUNANE";
    this.bcc = "MUST";
    this.fjk = "KÕRGE";
    this.ivs = "MADAL";
    this.jrv = "JAGA KAARDID";
    this.jka = "HOIA KAARTE";
    this.ccf = "JAGA KAARDID";
    this.yji = "viis võrdväärset kaarti (võimalik ainult koos Wild kaardiga)";
    this.kac = "sama masti äss - kuningas - emand - soldat - kümme";
    this.mxs = "RIDA samavärvi kaartidest";
    this.zgv = "neli sama väärtusega kaarti";
    this.qzc = "kombinatsioon KOLMIK ja PAAR";
    this.mbe = "viis sama värvi kaarti";
    this.fop = "viis järjestikust, kuid erivärvi kaarti";
    this.hmt = "kolm võrdväärset kaarti";
    this.hec = "kaks kindlat paari ja ükskõik milline viies kaart";
    this.ulo = "kaks soldatit, emandat, kuningat või ässa";
    this.hmm = "neli sama värvi kaarti koos ükskõik millise viienda kaardiga";
    this.ocs = "KUNINGLIK MASTIRIDA, mis sisaldab Wild kaarti";
    this.bnr = "neli kahte koos ükskõik millise muu kaardiga";
    this.zeg = "neli viite, kuute, seitset, kaheksat, üheksat, kümmet, Soldatit, Emandat või Kuningat";
    this.uuu = "neli kahte, kolme või nelja koos ükskõik millise muu kaardiga";
    this.fmx = "neli ässa ükskõik millise muu kaardiga";
    this.dxv = "Neli 2-te, 3-e või 4-ja koos 2, 3, või 4";
    this.mxv = "Neli ässa ja 2, 3, või 4";
    this.aan = "kaks Kuningat või Ässa";
    this.rqo = "kaks kümmet, soldatit, emandat, kuningat või ässa";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.aml = "VIIK";
    this.ldw = "PLAYER";
    this.mww = "DEALER";
    this.ryk = "MÄNGI VEEL VÕI VÕTA VÕIT?";
    this.mnk = "Kui valitud kaart on suurem kui diileril: OLED VÕITNUD!";
    this.olb = "Kui valitud kaart on väiksem kui diileril: kaotad";
    this.gou = "Kui valitud kaart on diileri kaardiga võrdne: viik";
    this.voq = "ÄSS on kõrgeim, kaks madalaim, metsikuid kaarte ei ole.";
    this.kds = "rida ässaga keskel";
    this.wix = "kombinatsioon soldatist, emandast ja kuningast";
    this.odq = "kaheste vahedega rida";
    this.pxb = "VALI KAART";
    this.aze = "VÕIDA DIILERIT, ET KAHEKORDISTADA OMA VÕIT";
    this.hjv = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄÄRTUS"
}
uil.prototype = new uty;

function ont() {
    this.ygd = "ΚΡΑΤΗΣΤΕ";
    this.svb = "ΚΟΚΚΙΝΟ";
    this.bcc = "ΜΑΥΡΟ";
    this.fjk = "ΥΨΗΛΟ";
    this.ivs = "ΧΑΜΗΛΟ";
    this.jrv = "ΜΟΙΡΑΣΤΕ ΧΑΡΤΙΑ";
    this.jka = "ΚΡΑΤΗΣΤΕ ΧΑΡΤΙΑ";
    this.ccf = "ΤΡΑΒΗΞΤΕ ΧΑΡΤΙΑ";
    this.yji = "πέντε ίδια χαρτιά (μόνη πιθανότητα με το Joker)";
    this.kac = "άσσος - ρήγας - ντάμα - βαλές - δέκα από το ίδιο χρώμα";
    this.mxs = "STRAIGHT με χαρτιά από το ίδιο χρώμα";
    this.zgv = "τέσσερα χαρτιά με την ίδια αξία";
    this.qzc = "συνδυασμός από THREE OF A KIND και ένα PAIR";
    this.mbe = "πέντε χαρτιά με το ίδιο χρώμα";
    this.fop = "πέντε χαρτιά σε αύξουσα σειρά, αλλά όχι ίδιο χρώμα";
    this.hmt = "τρία χαρτιά ίδιας αξίας";
    this.hec = "δύο διαφορετικά ζευγάρια και οποιοδήποτε πέμπτο χαρτί";
    this.ulo = "δύο βαλέδες, ντάμες, ρήγες ή άσσοι";
    this.hmm = "τέσσερα χαρτιά από το ίδιο χρώμα μαζί με κάθε πέμπτη κάρτα";
    this.kds = "Straight με άσσο στο κέντρο";
    this.wix = "συνδιασμός από φιγούρες που βγαίνει βαλές, ντάμα και ρήγας";
    this.odq = "σειρά μαζί με μονά ή ζυγά έχει διαδοχική αξία";
    this.ocs = "ROYAL FLUSH περιέχει και Joker";
    this.bnr = "τέσσερα δυάρια μαζί με κάθε άλλη κάρτα";
    this.zeg = "τέσσερα 5's, 6's,7's, 8's, 9's, 10's, ΒΑΛΕΔΕΣ, ΝΤΑΜΕΣ ή ΡΗΓΕΣ";
    this.uuu = "Τέσσερα 2's ή 4's μαζί με κάθε άλλη κάρτα";
    this.fmx = "τέσσερις άσσοι μαζί με κάθε άλλη κάρτα";
    this.dxv = "Τέσσερα 2άρια, 3άρια ή 4άρια μαζί με έναν Άσσο, ένα 2άρι, 3άρι ή 4άρι";
    this.mxv = "Τέσσερις άσσοι μαζί με ένα 2, 3 ή 4";
    this.aan = "δύο Ρήγες ή Άσσοι";
    this.rqo = "δύο δεκάρια, βαλέδες, ντάμες, ρήγες ή άσσοι";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.aze = "ΚΕΡΔΙΣΤΕ ΤΟΝ ΝΤΙΛΕΡ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.aml = "ΙΣΟΠΑΛΙΑ";
    this.ldw = "ΠΑIΧΤΗΣ";
    this.mww = "ΝΤHΛΕΡ";
    this.ryk = "ΞΑΝA ΡIΣΚΟ H ΠΑΡΑΛΑΒH;";
    this.mnk = "Αν έχετε χαρτί μεγαλύτερο από τον κρουπιέρη: ΚΕΡΔΙΖΕΤΕ!";
    this.olb = "Αν έχετε χαρτί μικρότερο από τον κρουπιέρη: ΧΑΝΕΤΕ!";
    this.gou = "Αν έχετε το ίδιο χαρτί με τον κρουπιέρη: ισοβαθμήτε";
    this.voq = "Ασσος είναι το μεγαλύτερο, δύο είναι το μικρότερο, δεν υπάρχει Τζόκερ";
    this.pxb = "ΕΠΙΛEΞΤΕ ΚAΡΤΑ";
    this.hjv = "ΕΠΙΛΕΞΤΕ ΤΗ ΣΩΣΤΗ ΑΞΙΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ"
}
ont.prototype = new onj;

function yih() {
    this.ygd = "ЗАДЪРЖАНИ";
    this.svb = "ЧЕРВЕНА";
    this.bcc = "ЧЕРНА";
    this.fjk = "ГОЛЯМА";
    this.ivs = "МАЛКА";
    this.jrv = "РАЗДАВАНЕ НА КАРТИТЕ";
    this.jka = "ЗАПАЗЕТЕ КАРТИ";
    this.ccf = "ИЗТЕГЛЕТЕ КАРТИ";
    this.yji = "пет еднакви карти (само с джокер)";
    this.kac = "Асе - Поп - Дама - Вале - 10 от един и същ цвят";
    this.mxs = "КЕНТА с карти от един и същ цвят";
    this.zgv = "четири карти с една и съща стойност";
    this.qzc = "комбинация от три еднакви карти и един чифт";
    this.mbe = "пет еднакви карти";
    this.fop = "пет поредни карти, но от различен цвят";
    this.hmt = "три карти с една и съща стойност";
    this.hec = "две различни двойки и някоя друга 5-та карта";
    this.ulo = "две Валета, Дами, Попа или Аса";
    this.hmm = "четири карти от един и същ цвят с някоя друга карта";
    this.ocs = "КЕНТ ФЛЕШ РОЯЛ с джокер";
    this.bnr = "четири 2-ки с някоя друга карта";
    this.zeg = "четири 5-ци, 6-ци, 7-ци, 8-ци, 9-ки, 10-ки, ВАЛЕТА, ДАМИ или ПОПОВЕ";
    this.uuu = "четири 2-ки, 3-ки или 4-ки с някоя друга карта";
    this.fmx = "четири Аса с някоя друга карта";
    this.dxv = "четири 2-ки, 3-ки, или 4-ки с Ас, 2-ка, 3-ка или 4-ка";
    this.mxv = "четири Аса с 2-ка, 3-ка или 4-ка";
    this.aan = "два Попа или Аса";
    this.rqo = "две 10-ки, Валета, Дами, Попа или Аса";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.aml = "НЕРЕШЕНО";
    this.ldw = "ИГРАЧ";
    this.mww = "ДИЛЪР";
    this.ryk = "ДУБЛИРАЙТЕ ОТНОВО ИЛИ ПРИБЕРЕТЕ?";
    this.mnk = "Ако избраната карта е по-голяма от картата на дилъра:ПЕЧЕЛИТЕ!";
    this.olb = "Ако избраната карта е по-малка от дилъровата:ГУБИТЕ";
    this.gou = "Ако избраната е същата:Нерешено";
    this.voq = "Ас е най-голямата, 2-ка е най-малката, без джокер карти.";
    this.kds = "пет поредни карти с Ас в средата";
    this.wix = "комбинация от карти в които има(K -Q -J -Поп, Дама, Вале)";
    this.odq = "пет карти с четни или нечетни стойности";
    this.pxb = "ЗАДРЪЖТЕ КАРТИ";
    this.aze = "ПОБЕДИ ДИЛЪРА, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.hjv = "ИЗБЕРИ ПРАВИЛНАТА СТОЙНОСТ, ЗА ДА УДВОИШ ПЕЧАЛБАТА"
}
yih.prototype = new flw;

function dvi() {
    this.ygd = "დაიჭირეთ";
    this.svb = "წითელი";
    this.bcc = "შავი";
    this.fjk = "მაღალი";
    this.ivs = "დაბლა";
    this.jrv = "აიღეთ ბარათი";
    this.jka = "დაიჭირეთ ბარათები";
    this.ccf = "აიღეთ ბარათი";
    this.yji = "ხუთი იგივე მნიშვნელობის კარტი (შესაძლოა მოპოვებულ იქნას მხოლოდ ჯოკერით)";
    this.kac = "იგივე ფერის ტუზი - მეფე - დამა - ვალეტი - ათიანი";
    this.mxs = "Straight იგივე ფერის კარტებით";
    this.zgv = "იგივე იერარქიის ოთხი კარტი";
    this.qzc = "Three Of A Kind-ისა და ერთი Pair-ის კომბინაცია";
    this.mbe = "ხუთი ერთი და იგივე ფერის კარტი";
    this.fop = "ხუთი თანმიმდევრული კარტი";
    this.hmt = "სამი თანაბარი კარტი";
    this.hec = "ორი ორ თანაბარ კარტთან ერთად";
    this.ulo = "ორი თანაბარი კარტი ვალეტით ზევითკენ";
    this.hmm = "ოთხი სხვადასხვა ერთი და იგივე ფერის კარტი";
    this.kds = "Straight შუაში ტუზით";
    this.wix = "5 ნახატიანი კარტი";
    this.odq = "Straight სადაც ყოველი მეორე კარტი აკლია";
    this.ocs = "ROYAL FLUSH რომელიც შეიცავს ჯოკერს";
    this.bnr = "ოთხი ორიანი ნებისმიერ სხვა კარტთან ერთად";
    this.zeg = "ოთხი 5-იანი, 6-იანი, 7-იანი, 8-იანი, 9-იანი, 10-იანი, ვალეტი, დამა ან მეფე";
    this.uuu = "ოთხი 2-იანი, 3-იანი ან 4-იანი ნებისმიერ სხვა კარტთან ერთად";
    this.fmx = "ოთხი ტუზი ნებისმიერ სხვა კარტთან ერთად";
    this.dxv = "ოთხი 2-იანი, 3-იანი ან 4-იანი ტუზთან 2-იანთან, 3-იანთან ან 4-იანთან ერთად";
    this.mxv = "ოთხი ტუზი 2, 3 ან 4-თან ერთად";
    this.aan = "ორი მეფე ან ტუზი";
    this.rqo = "ორი ათიანი, ვალეტი, დამა, მეფე ან ტუზი";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "ითამაშეთ ან აიღეთ მოგება?";
    this.pxb = "აირჩიეთ კარტი";
    this.mnk = "თუ არჩეული კარტი დილერის კარტზე უფრო მაღალია: თქვენ მოიგებთ!";
    this.olb = "თუ არჩეული კარტი დილერის კარტზე უფრო დაბალია: თქვენ წააგებთ";
    this.gou = "თუ არჩეული კარტი იგივეა რაც დილერს აქვს: ანგარიშია ფრე";
    this.voq = "ტუზი არის ყველაზე მაღალი, ორიანი ყველაზე დაბალი, ჯოკერის კარტი არ თამაშდება.";
    this.aml = "ფრე";
    this.ldw = "მოთამაშე";
    this.mww = "დილერი";
    this.aze = "მოუგეთ დილერს რომ გააორმაგოთ მოგება";
    this.hjv = "აირჩიეთ სწორი სიდიდე რომ გააორმაგოთ მოგება"
}
dvi.prototype = new nno;

function qyu() {
    this.ygd = "TART";
    this.svb = "PIROS";
    this.bcc = "FEKETE";
    this.fjk = "MAGAS";
    this.ivs = "ALACSONY";
    this.jrv = "KÉRJEN LAPOKAT";
    this.jka = "TARTSON LAPOKAT";
    this.ccf = "KÉRJEN LAPOKAT";
    this.yji = "öt egyforma lap (az ötödik a JOKER)";
    this.kac = "ász - király - dáma - bubi - tizes egy színben";
    this.mxs = "SOR egyforma színű lapokból";
    this.zgv = "négy egyforma lap";
    this.qzc = "három és kettő egyforma lap";
    this.mbe = "öt egyforma színű lap";
    this.fop = "öt sorban következő lap nem egyforma színben";
    this.hmt = "három egyforma lap";
    this.hec = "kettő pár és még egy lap";
    this.ulo = "kettő Bubi, Dáma, Király vagy Ász";
    this.hmm = "négy egyforma és egy másmilyen színű lap";
    this.kds = "5 sorban következő lap A-val a középen";
    this.wix = "5 'képes' lap";
    this.odq = "5 egymást követő páros vagy páratlan lap";
    this.ocs = "ROYAL FLUSH amelyben van Joker";
    this.bnr = "négy kettes és még egy lap";
    this.zeg = "négy 5-ös, 6-os, 7-es, 8-as, 9-es, 10-es, Bubi, Dáma vagy Király";
    this.uuu = "négy kettes, hármas vagy négyes + egy lap";
    this.fmx = "négy ász és még egy lap";
    this.dxv = "négy 2, 3 vagy 4 meg egy ász, 2, 3 vagy 4";
    this.mxv = "négy Ász és 2, 3 vagy 4";
    this.aan = "kettő Király vagy Ász";
    this.rqo = "kettő tizes, bubi, dáma, király vagy ász";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "SZOROZZA VAGY FELÍRJA?";
    this.pxb = "VÁLASSZON EGY LAPOT";
    this.mnk = "Ha a kiválasztott lap az osztó lapjától nagyobb: NYERT!";
    this.olb = "Ha a kiválasztott lap az osztó lapjától kisebb: veszített";
    this.gou = "Ha a két lap egyforma: döntetlen";
    this.voq = "Az ÁSZ a legnagyobb a kettes pedig a legkisebb lap.";
    this.aml = "DÖNTETLEN";
    this.ldw = "JÁTÉKOS";
    this.mww = "OSZTÓ";
    this.aze = "GYŐZZE LE AZ OSZTÓT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.hjv = "VÁLASSZA A MEGFELELŐT, HOGY MEGDUPLÁZZA A NYEREMÉNYT"
}
qyu.prototype = new zyt;

function ptm() {
    this.ygd = "ŢINERE";
    this.svb = "ROŞU";
    this.bcc = "NEGRU";
    this.fjk = "MARE";
    this.ivs = "MICĂ";
    this.jrv = "ÎMPĂRŢIRE CĂRŢI";
    this.jka = "ŢINERE CĂRŢI";
    this.ccf = "ÎMPĂRŢIRE CĂRŢI";
    this.yji = "Cinci cărţi identice (posibil numai cu joker)";
    this.kac = "As - rege - damă - valet - zece de aceeaşi culoare";
    this.mxs = "STRAIGHT cu cărţi de aceeaşi culoare";
    this.zgv = "Patru cărţi de aceeaşi valoare";
    this.qzc = "Combinaţie din THREE OF A KIND şi PAIR";
    this.mbe = "Cinci cărţi de aceeaşi culoare";
    this.fop = "Cinci cărţi în succesiune ordonată, nu de aceeaşi culoare";
    this.hmt = "Trei cărţi egale ca valoare";
    this.hec = "Două perechi diferite şi o a cincea carte";
    this.ulo = "Două cărţi cu valeţi, dame, regi sau aşi";
    this.hmm = "Patru cărţi de aceeaşi culoare cu o a 5-a carte";
    this.kds = "Straight cu as în mijloc";
    this.wix = "Combinaţie de cărţi cu figuri cu valet, damă şi rege";
    this.odq = "Cinci valori succesive cu soţ sau fără soţ";
    this.ocs = "ROYAL FLUSH cu joker";
    this.bnr = "Patru cărţi de doi cu o altă carte";
    this.zeg = "Patru cărţi de 5, 6, 7, 8, 9, 10, valeţi, dame sau regi";
    this.uuu = "Patru cărţi de 2, 3 sau 4 cu o altă carte";
    this.fmx = "Patru aşi cu o altă carte";
    this.dxv = "Patru cărţi de 2, 3 sau 4 cu un as, o carte de 2, 3 sau 4";
    this.mxv = "Patru aşi cu o carte de 2, 3 sau 4";
    this.aan = "Doi regi sau doi aşi.";
    this.rqo = "Două cărţi de 10, valeţi, dame, regi sau aşi";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "GAMBLE SAU RIDICAREA CÂŞTIGULUI?";
    this.pxb = "ALEGEŢI O CARTE";
    this.mnk = "Când cartea aleasă este mai mare decât cea a dealerului: câştig!";
    this.olb = "Când cartea aleasă este mai mică decât cea a dealerului: fără câştig";
    this.gou = " Când cartea aleasă este identică cu cea a dealerului: egal";
    this.voq = "As este cartea cea mai mare, 2 este cartea cea mai mică, fără joker.";
    this.aml = "EGAL";
    this.ldw = "PLAYER";
    this.mww = "DEALER";
    this.aze = "ÎNVINGE DEALERUL PENTRU DUBLAREA PROFITULUI";
    this.hjv = "SELECTEAZĂ VALOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI"
}
ptm.prototype = new nqd;

function mbr() {
    this.ygd = "HELD";
    this.svb = "VERMELHO";
    this.bcc = "PRETO";
    this.fjk = "ALTO";
    this.ivs = "BAIXO";
    this.jrv = "DAR CARTAS";
    this.jka = "RETER CARTAS";
    this.ccf = "DAR CARTAS";
    this.yji = "Cinco cartas iguais com o mesmo valor (só é possível com curinga)";
    this.kac = "Ás - Rei - Dama - Valete - Dez de um naipe";
    this.mxs = "STRAIGHT do mesmo naipe";
    this.zgv = "Quatro cartas do mesmo valor";
    this.qzc = "Combinação de THREE OF A KIND e PAIR";
    this.mbe = "Cinco cartas com o mesmo naipe";
    this.fop = "Cinco cartas sucessivas, sem o mesmo naipe";
    this.hmt = "Três cartas do mesmo valor";
    this.hec = "Dois pares diferentes e uma 5ª carta";
    this.ulo = "Dois valetes, damas, reis ou áses";
    this.hmm = "Quatro cartas do mesmo naipe com uma 5ª";
    this.kds = "Uma escada com um ás no centro";
    this.wix = "Uma combinação somente de figuras";
    this.odq = "Sequência de pares ou ímpares de sucessivos valores";
    this.ocs = "ROYAL FLUSH com curinga";
    this.bnr = "Quatro dois com uma outra carta";
    this.zeg = "Quatro 5, 6, 7, 8, 9, 10, valete, dama, rei";
    this.uuu = "Quatro 2, 3 ou 4 com outra carta";
    this.fmx = "Quatro áses com uma outra carta";
    this.dxv = "Quatro 2,3 ou 4 A, 2, 3 ou 4";
    this.mxv = "Quatro áses com 2,3 ou 4";
    this.aan = "Dois reis ou dois áses";
    this.rqo = "Dois 10, valetes, damas, reis ou áses";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "JOGAR OU RECOLHER O PRÉMIO?";
    this.pxb = "ESCOLHA UMA CARTA";
    this.mnk = "Se a carta selecionada for mais alta do que a do crupier: PRÉMIO";
    this.olb = "Se a carta selecionada for menor do que a do crupier: Nenhum prémio";
    this.gou = "Se a carta selecionada for a mesma que a do crupier: Empate";
    this.voq = "Az é carta mais alta, dois é a menor, não há curingas.";
    this.aml = "EMPATE";
    this.ldw = "JOGADOR";
    this.mww = "CRUPIER";
    this.aze = "GANHE DO DEALER PARA DOBRAR O GANHO";
    this.hjv = "ESCOLHA O VALOR CERTO PARA DUBRAR O GANHO"
}
mbr.prototype = new vlj;

function dnp() {
    this.ygd = "GARDER";
    this.svb = "ROUGE";
    this.bcc = "NOIR";
    this.fjk = "HAUT";
    this.ivs = "BAS";
    this.jrv = "DONNER DES CARTES";
    this.jka = "GARDER DES CARTES";
    this.ccf = "DONNER DES CARTES";
    this.yji = "Cinq cartes identiques (possible seulement avec un joker)";
    this.kac = "As, roi, dame, valet, 10 de la même couleur";
    this.mxs = "STRAIGHT dans la même couleur";
    this.zgv = "Quatre cartes de la même valeur";
    this.qzc = "Combinaison de trois (BRELAN) et un PAIRE";
    this.mbe = "Cinq cartes de la même couleur";
    this.fop = "Cinq cartes dans l'ordre, mais pas de la même couleur";
    this.hmt = "Trois cartes de la même valeur";
    this.hec = "Deux paires différentes et une 5ème carte";
    this.ulo = "Deux valets, dames, rois ou as";
    this.hmm = "Quatre cartes de la même couleur avec une 5ème carte";
    this.kds = "Straight avec un as au milieu";
    this.wix = "Cartes qui comprennent le valet, la dame et le roi";
    this.odq = "Cinq cartes consécutives paires ou impaires";
    this.ocs = "QUINTE FLUSH avec joker";
    this.bnr = "Quatre deux avec une autre carte";
    this.zeg = "Quatre 5, 6, 7, 8, 9, 10, valets, dames ou rois";
    this.uuu = "Quatre 2, 3 ou 4 avec une autre carte";
    this.fmx = "Quatres as avec une autre carte";
    this.dxv = "Quatre 2,3 ou 4 avec A, 2, 3, ou 4";
    this.mxv = "Quatre as avec un 2, 3, ou 4";
    this.aan = "Deux rois ou deux as.";
    this.rqo = "Deux 10, valets, dames, rois ou as";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "GAMBLE OU PRENDRE GAIN?";
    this.pxb = "PRENDS UNE CARTE";
    this.mnk = "Si la carte sélectionnée est supérieure à celle du dealer: GAIN";
    this.olb = "Si la carte sélectionnée est inférieure à celle du dealer: PAS DE GAIN";
    this.gou = "Si la carte sélectionnée est identique à celle du dealer: EGALITÉ";
    this.voq = "L'as a la valeur la plus importante, le deux la moins importante, aucun joker.";
    this.aml = "EGALITÉ";
    this.ldw = "JOUER";
    this.mww = "NOUN";
    this.aze = "VAINCS LE DONNEUR AFIN DE DOUBLER LE GAIN";
    this.hjv = "CHOISIS LA BONNE VALEUR AFIN DE DOUBLER LE GAIN"
}
dnp.prototype = new ycf;

function anc() {
    this.ygd = "ZADRŽI";
    this.svb = "CRVENA";
    this.bcc = "CRNA";
    this.fjk = "VELIKA";
    this.ivs = "MALA";
    this.jrv = "DIJELI KARTE";
    this.jka = "ZADRŽI KARTE";
    this.ccf = "DIJELI KARTE";
    this.yji = "Pet istih karata (moguće samo s džokerom)";
    this.kac = "As - kralj - dama - dečko - desetka u istoj boji";
    this.mxs = "STRAIGHT u istoj boji";
    this.zgv = "Četiri jednake karte";
    this.qzc = "Kombinacija od TRI ISTE i PARA";
    this.mbe = "Pet karata u istoj boji";
    this.fop = "Pet karata u nizu, ali ne u istoj boji";
    this.hmt = "Tri jednake karte";
    this.hec = "Dva različita para i neka 5. karta";
    this.ulo = "Dva dečka, dame, kralja ili asa";
    this.hmm = "Četiri karte u istoj boji s nekom 5. kartom";
    this.kds = "Pet karata u redu, As u sredini";
    this.wix = "5 karata sa slikama (dečko, dama i kralj + 2 slike)";
    this.odq = "5 uzastopnih parnih ili neparnih karata";
    this.ocs = "ROYAL FLUSH s džokerom";
    this.bnr = "Četiri dvojke s nekom drugom kartom";
    this.zeg = "Četiri petice, šestice, sedmice, osmice, devetke, desetke, dečka, dame ili kralja";
    this.uuu = "Četiri dvojke, trojke ili četvorke s nekom drugom kartom";
    this.fmx = "Četiri asa sa nekom drugom kartom";
    this.dxv = "Četiri 2,3 ili 4 sa A, 2, 3 ili 4";
    this.mxv = "Četiri asa s 2, 3 ili 4";
    this.aan = "Dva kralja ili dva asa";
    this.rqo = "Dvije desetke, dečka, dame, kralja ili asa";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "IGRAJ ILI POKUPI DOBITAK?";
    this.pxb = "ODABERITE KARTU";
    this.mnk = "Ako je odabrana karta veća od dilerove karte: DOBITAK";
    this.olb = "Ako je odabrana karta manja od dilerove karte: NEMA DOBITKA";
    this.gou = "Ako je odabrana karta ista kao dilerova: NERIJEŠENO";
    this.voq = "As je najveća karta, 2 je najmanja karta, nema džokera.";
    this.aml = "ISTA";
    this.ldw = "IGRAČ";
    this.mww = "DILER";
    this.aze = "POBJEDI DJELITELJA I TIME UDVOSTRUČI DOBITAK";
    this.hjv = "ODABERI PRAVU VRIJEDNOST I TIME UDVOSTRUČI DOBITAK"
}
anc.prototype = new zhj;

function uyu() {
    this.ygd = "TENERE";
    this.svb = "ROSSO";
    this.bcc = "NERO";
    this.fjk = "ALTO";
    this.ivs = "BASSO";
    this.jrv = "NUOVE CARTE";
    this.jka = "BLOCCA CARTE";
    this.ccf = "NUOVE CARTE";
    this.yji = "Cinque carte uguali (possibile soltanto con il joker)";
    this.kac = "Asso - Re - Dama - Fante - 10 di un colore";
    this.mxs = "STRAIGHT dello stesso colore";
    this.zgv = "Quattro carte dello stesso valore";
    this.qzc = "Combinazione tra THREE OF A KIND e una COPPIA";
    this.mbe = "Cinque carte dello stesso colore";
    this.fop = "Cinque carte in ordine cronologico, senza aver lo stesso colore";
    this.hmt = "Tre carte dello stesso valore";
    this.hec = "Due coppie diverse e una quinta carta";
    this.ulo = "Due fanti, dame, re o assi";
    this.hmm = "Quattro carte dello stesso colore con una quinta carta";
    this.kds = "Straight con asso in centro";
    this.wix = "5 carte solo con figure";
    this.odq = "Straight ove sempre una carta su due manca";
    this.ocs = "ROYAL FLUSH con Jolly";
    this.bnr = "Quattro due con un'altra carta";
    this.zeg = "Quattro carte da 5, 6, 7, 8, 9, 10, fante, dama o re";
    this.uuu = "Quattro carte da 2, 3 o 4 con un'altra carta";
    this.fmx = "Quattro assi con un'altra carta";
    this.dxv = "Quattro 2,3 o 4 con Asso, 2, 3 o 4";
    this.mxv = "Quattro assi con il 2, 3 o 4";
    this.aan = "Due re o due assi";
    this.rqo = "Due carte da 10, fante, dama, re o asso";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "GAMBLE O RACCOGLIERE VINCITA?";
    this.pxb = "PRENDI UNA CARTA";
    this.mnk = "Se la carta selezionata è più alta di quella del mazziere: VINCITA";
    this.olb = "Se la carta selezionata è più bassa di quella del mazziere: NESSUNA VINCITA";
    this.gou = "Se la carta selezionata è uguale a quella del mazziere:ALLA PARI";
    this.voq = "L'asso è la più alta, il due la più bassa, nessuno jolly.";
    this.aml = "ALLA PARI";
    this.ldw = "GIOCATORE";
    this.mww = "DEALER";
    this.aze = "VINCI SUL DEALER PER RADDOPPIARE LA VINCITA";
    this.hjv = "SCEGLI IL VALORE GIUSTO PER RADDOPPIARE LA VINCITA"
}
uyu.prototype = new lsp;

function vbr() {
    this.ygd = "HÅLLET";
    this.svb = "RÖTT";
    this.bcc = "SVART";
    this.fjk = "HÖG";
    this.ivs = "LÅG";
    this.jrv = "TA KORT";
    this.jka = "BEHÅLL KORTEN";
    this.ccf = "TA KORT";
    this.yji = "Fem kort av samma värde (endast möjligt med Joker)";
    this.kac = "Ess - Kung - Dam - Knekt - Tio i samma färg";
    this.mxs = "Stege i samma färg";
    this.zgv = "Fyra kort av samma värde";
    this.qzc = "Kombination bestående av TRISS och PAR";
    this.mbe = "Fem kort i samma färg";
    this.fop = "Fem kort i följd, men inte i samma färg";
    this.hmt = "Tre kort av samma värde";
    this.hec = "Två olika par och ett 5:e kort";
    this.ulo = "Två Knektar, Damer, Kungar eller Ess";
    this.hmm = "Fyra kort i en färg med ett 5:e kort";
    this.kds = "Stege med Ess i mitten";
    this.wix = "Kort som visar Knekt, Dam och Kung";
    this.odq = "Stege med fem udda eller fem jämna kort i följd";
    this.ocs = "ROYAL FLUSH med Joker";
    this.bnr = "Fyra tvåor med något annat kort";
    this.zeg = "Fyra 5:or, 6:or, 7:or, 8:or, 9:or, 10:or, Knektar, Damer eller Kungar";
    this.uuu = "Fyra 2:or, 3:or eller 4:or med något annat kort";
    this.fmx = "Fyra Ess med något annat kort";
    this.dxv = "Fyra 2:or, 3:or eller 4:or med ett Ess, en 2:a, 3:a eller 4:a";
    this.mxv = "Fyra Ess med en 2:a, 3:a eller 4:a";
    this.aan = "Två Kungar eller två Ess";
    this.rqo = "Två 10:or, Knektar, Damer, Kungar eller Ess.";
    this.lwp = "FIVE OF A KIND";
    this.osc = "ROYAL FLUSH";
    this.wvn = "STRAIGHT FLUSH";
    this.nir = "FOUR OF A KIND";
    this.roj = "FULL HOUSE";
    this.lbf = "FLUSH";
    this.xmx = "STRAIGHT";
    this.mxw = "THREE OF A KIND";
    this.zzf = "TWO PAIRS";
    this.rog = "HIGH PAIR";
    this.yqo = "FOUR FLUSH";
    this.brr = "POKER";
    this.aov = "SKIP STRAIGHT";
    this.iwa = "BLAZE";
    this.myt = "CORNER STRAIGHT";
    this.ejt = "TENS OR BETTER";
    this.mrz = "JACKS OR BETTER";
    this.hzr = "KINGS OR BETTER";
    this.vqq = "WILD ROYAL FLUSH";
    this.ysm = "FOUR DEUCES";
    this.ref = "FOUR 5 TO KING";
    this.qze = "FOUR 2 TO 4";
    this.lrk = "FOUR ACES";
    this.ouo = "FOUR LOW WITH LOW";
    this.wnf = "FOUR ACES WITH 2, 3 OR 4";
    this.ryk = "DUBBLERA ELLER INKASSERA?";
    this.pxb = "VÄLJ ETT KORT";
    this.mnk = "Om valt kort är högre än givens: VINST!";
    this.olb = "Om valt kort är lägre än givens: förlust";
    this.gou = "Om valt kort är samma som givens: lika";
    this.voq = "Ess är högst, två är lägst, inga Jokerkort.";
    this.aml = "LIKA";
    this.ldw = "SPELARE";
    this.mww = "GIVARE";
    this.aze = "SLÅ DEALERN FÖR ATT DUBBLA VINSTEN";
    this.hjv = "VÄLJ RÄTT VALÖR FÖR ATT DUBBLA VINSTEN"
}
vbr.prototype = new aqi;

function uxe() {
    this.sor = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.onl = {
        backgroundColor: "rgb(0,0,0)",
        zgh: "rgba(0,0,0,0.3)"
    };
    this.xkz = {
        onl: {
            font: "arial",
            ovs: "bold",
            backgroundColor: "black",
            osf: "rgb(0,100,10)",
            wwe: "rgb(80,255,100)",
            qdr: "rgb(120,120,120)",
            ndc: "red",
            urr: "white",
            lda: "white",
            wxo: null
        },
        pbh: {
            font: "arial",
            ovs: "bold",
            backgroundColor: "black",
            osf: "rgb(0,100,10)",
            wwe: "rgb(80,255,100)",
            qdr: "rgb(120,120,120)",
            ndc: "red",
            urr: "white",
            lda: "rgb(230,190,10)",
            wxo: null
        }
    };
    this.lvs = {
        font: "arial",
        ovs: "bold",
        backgroundColor: "rgb(0,0,0)",
        kck: null,
        lda: "rgb(255,255,255)",
        mqp: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.bdf = {
        font: "arial",
        ovs: "bold",
        backgroundColor: "black",
        puq: "rgb(50,50,50)",
        ums: "rgb(255,255,255)",
        lda: "white",
        zjj: 0.8,
        dmi: {
            lcf: {
                font: "sanf-serif",
                ovs: "",
                textAlign: "center",
                kke: "round",
                backgroundColor: "black",
                lda: "white",
                borderColor: null,
                mqp: null,
                uhg: 1
            }
        }
    };
    this.ztv = {
        font: "arial",
        ovs: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        shu: "rgba(255,255,255,0.2)",
        lda: "rgb(255,255,255)",
        idq: "rgba(0,0,0,0.3)",
        display: {
            spe: "arial",
            ofp: "arial",
            ovs: "bold",
            lda: "rgb(255,255,255)",
            yjs: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        lcf: {
            font: "arial",
            ovs: "bold",
            lda: "rgb(0,0,0)",
            ebs: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            kck: "rgba(255,255,255,1)",
            vcy: "rgba(255,255,255,0.8)",
            shl: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            kke: "rect",
            jyg: -1
        }
    };
    this.qsf = {
        font: "arial",
        ovs: "bold",
        cty: "rgb(0,0,200)",
        hnj: "rgb(255,255,255)",
        wvc: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        wli: "rgb(180,220,255)",
        thz: "rgb(10,20,25)",
        xrf: "rgb(130,220,255)",
        kpe: "rgb(130,190,255)",
        lda: "rgb(255,255,255)",
        wgp: "rgb(130,190,255)",
        gee: "rgb(100,160,255)",
        gll: "rgb(255,255,255)",
        lcf: {
            kke: "rect",
            font: "arial",
            ovs: "bold",
            lda: "rgb(255,255,255)",
            rzh: null,
            backgroundColor: "rgb(90,160,255)",
            dch: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            mqp: "rgb(40,80,140)"
        },
        sox: {
            kke: "round",
            font: "arial",
            ovs: "bold",
            lda: "rgb(255,255,255)",
            rzh: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            dch: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            mqp: "rgb(40,80,140)"
        }
    };
    this.dus = {};
    this.uyc = {
        rvb: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.jat = {
        type: "left",
        font: "arial",
        ovs: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        kck: null,
        borderColor: "rgb(0,0,0)",
        mqp: "rgb(180,180,180)",
        wli: "rgba(0,0,0,0.6)",
        oqe: null,
        yjs: "rgb(255,200,0)",
        lda: "white",
        rpk: {
            font: "arial",
            ovs: "bold",
            backgroundColor: "rgb(100,100,100)",
            kck: "rgb(100,100,100)",
            vcy: null,
            shl: null,
            borderColor: "rgb(100,100,100)",
            lda: "rgb(255,255,255)",
            ebs: "rgb(255,200,0)",
            kke: "triangle",
            jyg: 1
        },
        bmq: {
            font: "arial",
            ovs: "bold",
            backgroundColor: "rgb(100,100,100)",
            kck: "rgb(100,100,100)",
            vcy: null,
            shl: null,
            borderColor: "rgb(100,100,100)",
            lda: "rgb(255,255,255)",
            ebs: "rgb(255,200,0)",
            kke: "triangle",
            jyg: 0
        },
        iie: {
            font: "arial",
            ovs: "bold",
            backgroundColor: "rgb(100,100,100)",
            kck: "rgb(15,15,15)",
            vcy: "rgb(100,100,100)",
            shl: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            lda: "rgb(255,255,255)",
            ebs: "rgb(255,200,0)",
            kke: "rect",
            jyg: -1
        },
        display: {
            ofp: "sans-serif",
            spe: "sans-serif",
            ovs: "bold",
            yjs: null,
            lda: "yellow",
            borderColor: "rgb(100,100,100)",
            mqp: null,
            backgroundColor: "black"
        },
        zfw: {
            font: "arial",
            ovs: "bold",
            backgroundColor: null,
            kck: null,
            lda: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.sad = {
        font: "arial",
        ovs: "bold",
        backgroundColor: "rgb(180,180,180)",
        kck: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        mqp: "rgb(30,30,30)",
        lda: "white",
        bxq: {
            font: "arial",
            ovs: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            kck: null,
            vcy: "rgba(100,100,100,0.5)",
            shl: null,
            borderColor: null,
            lda: "white",
            kke: "rect",
            jyg: -1
        },
        rpk: {
            font: "arial",
            ovs: "bold",
            backgroundColor: "rgb(255,255,255)",
            kck: "rgb(255,255,255)",
            vcy: null,
            shl: null,
            borderColor: "rgb(255,255,255)",
            lda: "rgb(0,0,0)",
            ebs: "rgb(0,0,0)",
            kke: "triangle",
            jyg: 1
        },
        bmq: {
            font: "arial",
            ovs: "bold",
            backgroundColor: "rgb(255,255,255)",
            kck: "rgb(255,255,255)",
            vcy: null,
            shl: null,
            borderColor: "rgb(255,255,255)",
            lda: "rgb(0,0,0)",
            ebs: "rgb(0,0,0)",
            kke: "triangle",
            jyg: 0
        },
        gxk: {
            kke: "rect",
            font: "arial",
            ovs: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            lda: "white",
            uhg: 1,
            borderColor: "rgb(255,255,255)",
            mqp: "rgb(220,220,220)"
        },
        display: {
            ofp: "sans-serif",
            spe: "sans-serif",
            ovs: "bold",
            yjs: null,
            lda: "white",
            borderColor: "white",
            mqp: null,
            backgroundColor: "rgb(0,0,0)"
        },
        zfw: {
            font: "arial",
            ovs: "bold",
            backgroundColor: null,
            kck: null,
            lda: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.lmb = {
        vsg: [{
            ofp: "sans-serif",
            mpd: "verdana",
            ovs: "bold",
            yjs: "rgb(255,255,100)",
            utf: "rgb(210,190,40)",
            rzh: "rgb(252,247,0)",
            goz: "rgb(220,200,0)",
            puq: "rgb(0,0,0)"
        }, {
            ofp: "sans-serif",
            mpd: "verdana",
            ovs: "bold",
            yjs: "rgb(250,250,250)",
            utf: "rgb(210,210,210)",
            rzh: "rgb(255,255,255)",
            goz: "rgb(220,220,220)",
            puq: "rgb(0,0,0)"
        }, {
            ofp: "sans-serif",
            mpd: "verdana",
            ovs: "bold",
            yjs: "rgb(230,230,230)",
            utf: "rgb(190,190,190)",
            rzh: "rgb(255,255,255)",
            goz: "rgb(220,220,220)",
            puq: "rgb(0,0,0)"
        }, {
            ofp: "sans-serif",
            mpd: "verdana",
            ovs: "bold",
            yjs: "rgb(230,230,230)",
            utf: "rgb(190,190,190)",
            rzh: "rgb(255,255,255)",
            goz: "rgb(220,220,220)",
            puq: "rgb(0,0,0)"
        }],
        tof: {
            ofp: "sans-serif",
            mpd: "sans-serif",
            ovs: "bold",
            yjs: "rgb(236,225,207)",
            utf: "rgb(214,170,102)",
            rzh: "rgb(245,220,148)",
            goz: "rgb(190,137,40)"
        },
        uyq: {}
    };
    this.xps = {
        jol: "rgb(240,240,240)",
        yaj: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        idq: "rgba(0,80,150,0.6)",
        display: {
            spe: "arial",
            ofp: "arial",
            ovs: "bold",
            lda: "rgb(0,80,151)",
            yjs: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function nva() {
    this.sfa = {
        backgroundColor: null,
        kck: null,
        wli: "rgb(0,0,0)",
        thz: "rgb(0,0,0)",
        onv: null,
        mzk: 0.5,
        lcf: {
            kke: "rect",
            font: "verdana",
            ovs: "bold",
            backgroundColor: "rgb(0,0,0)",
            dch: "rgb(150,150,150)",
            lda: "rgb(255,255,255)",
            rzh: "rgb(255,255,0)",
            borderColor: "rgb(150,150,150)",
            mqp: "rgb(0,0,0)"
        },
        display: {
            spe: "sans-serif",
            ofp: "sans-serif",
            ovs: "bold",
            backgroundColor: "black",
            lda: "yellow",
            yjs: "yellow",
            borderColor: "rgb(255,255,255)",
            mqp: "rgb(160,160,160)"
        },
        dbg: {
            font: "verdana",
            ovs: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            lda: "rgb(255, 255, 0)"
        }
    };
    this.pqg = {
        backgroundColor: null,
        wli: "rgb(0,0,0)",
        thz: "rgb(0,0,0)",
        display: {
            spe: "sans-serif",
            ofp: "sans-serif",
            ovs: "bold",
            backgroundColor: "black",
            lda: "yellow",
            yjs: "yellow",
            borderColor: "rgb(255,255,255)",
            mqp: "rgb(160,160,160)"
        },
        lcf: {
            kke: "rect",
            font: "verdana",
            ovs: "bold",
            backgroundColor: "rgb(0,0,0)",
            dch: "rgb(150,150,150)",
            lda: "rgb(255,255,255)",
            rzh: null,
            borderColor: "rgb(150,150,150)",
            mqp: "rgb(0,0,0)"
        },
        dbg: {
            font: "verdana",
            ovs: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            lda: "rgb(255, 255, 0)"
        }
    };
    this.ebh = {
        backgroundColor: null,
        wli: "rgb(0,0,0)",
        thz: "rgb(0,0,0)",
        lcf: {
            kke: "rect",
            font: "verdana",
            ovs: "bold",
            backgroundColor: "rgb(0,0,0)",
            dch: "rgb(150,150,150)",
            lda: "rgb(255,255,255)",
            rzh: null,
            borderColor: "rgb(150,150,150)",
            mqp: "rgb(0,0,0)"
        },
    };
    this.yrn = {
        font: "arial",
        ovs: "bold",
        qlc: "yellow",
        joh: "yellow",
        lda: "yellow"
    };
    this.upb = {
        font: "sans-serif",
        ovs: "bold",
        vql: "red",
        edh: "orange",
        puq: "white"
    };
    this.apd = {
        font: "arial",
        ovs: "bold",
        lda: "yellow"
    };
    this.slz = {
        font: "sans-serif",
        ovs: "bold",
        lda: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        jpv: "rgb(0,0,0)",
        zcl: "rgb(255,0,0)",
        obu: "rgb(255,255,0)",
        ook: "rgb(80,80,80)",
        lkv: "rgb(15,15,15)",
        qdv: "rgb(0,0,0)",
        hvk: "rgb(180,180,180)",
        jez: "rgb(0,0,0)",
        ccc: 0.7
    }
}
nva.prototype = new uxe;

function pkd() {
    this.sfa.backgroundColor = "rgb(0,0,110)";
    this.sfa.wli = "rgb(0,0,110)";
    this.sfa.thz = "rgb(0,0,30)";
    this.sfa.dbg.backgroundColor = "rgb(0, 0, 50)";
    this.sfa.lcf.backgroundColor = "rgb(0,0,170)";
    this.sfa.lcf.dch = "rgb(0,0,255)";
    this.sfa.lcf.borderColor = "rgb(0,0,190)";
    this.sfa.lcf.mqp = "rgb(0,0,50)";
    this.yrn.qlc = "white";
    this.pqg.backgroundColor = "rgb(0,0,110)";
    this.pqg.wli = "rgb(0,0,110)";
    this.pqg.thz = "rgb(0,0,30)";
    this.pqg.dbg.backgroundColor = "rgb(0,0,50)";
    this.pqg.lcf.backgroundColor = "rgb(0,0,170)";
    this.pqg.lcf.dch = "rgb(0,0,255)";
    this.pqg.lcf.borderColor = "rgb(0,0,190)";
    this.pqg.lcf.mqp = "rgb(0,0,50)";
    this.pqg.font = "arial";
    this.pqg.ovs = "bold";
    this.pqg.lda = "white";
    this.pqg.yrn = {
        font: "arial",
        ovs: "bold",
        qlc: "white",
        joh: "yellow",
        lda: "yellow"
    };
    this.ebh.wli = "rgb(0,0,110)";
    this.ebh.thz = "rgb(0,0,30)";
    this.ebh.lcf.backgroundColor = "rgb(0,0,170)";
    this.ebh.lcf.borderColor = "rgb(0,0,190)";
    this.ebh.lcf.mqp = "rgb(0,0,50)";
    this.ebh.win = {
        font: "arial",
        ovs: "bold",
        lda: "white",
        yjs: "yellow",
        gtj: "verdana",
        pkk: "bold italic",
        bun: "white"
    };
    this.bdf.dmi.lcf.backgroundColor = "rgb(0,0,170)";
    this.apd.egm = "red";
    this.sad.backgroundColor = "rgb(0,0,110)";
    this.sad.kck = "rgb(0,0,50)"
}
pkd.prototype = new nva;

function vpk() {
    this.type = "800_600";
    this.wuz = true;
    this.vay = false;
    this.szn = false;
    this.bus = true;
    this.sxb = false;
    this.qro = false;
    this.hhh = false;
    this.yaz = false
}

function oyn() {
    this.wuz = false;
    this.canvas = {
        aei: new rud(0, 0, 800, 620)
    };
    this.dut = {
        aei: new rud(),
        vtg: 0
    };
    this.onl = {
        aei: new rud(0, 20, 800, 600),
        ihx: 0
    };
    this.gwo = {
        rgt: new rud(0, 40, 440, 36),
        xim: new rud(5, 2, 140, 30),
        vyn: new rud(150, 2, 140, 30),
        fma: new rud(295, 2, 140, 30),
        dya: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.xkz = {
        onl: {
            aei: new rud(0, 0, 500, 360),
            xbm: new rud(5, 325, 490, 30),
            che: new rud(5, 329, 490, 14),
            hsv: new rud(50, 345, 400, 6),
            owg: new rud(5, 285, 490, 70),
            ygy: new rud(120, 300, 260, 55),
            fontSize: 14,
            izj: 18,
            wnk: 26,
            plt: 5,
            bth: 12,
            xsm: 5,
            nig: 2
        },
        pbh: {
            aei: new rud(0, 0, 800, 620),
            xbm: new rud(),
            che: new rud(),
            hsv: new rud(200, 425, 400, 8),
            owg: new rud(100, 372, 600, 84),
            ygy: new rud(270, 394, 260, 70),
            fontSize: 18,
            izj: 24,
            wnk: 20,
            plt: 0,
            bth: 12,
            xsm: 7,
            nig: 0
        }
    };
    this.lvs = {
        aei: new rud(0, 0, 800, 20),
        fontSize: 12,
        ndv: 19,
        ggz: 15,
        jes: 120,
        bth: 2,
        xsm: 2,
        jju: 2,
        ulu: 40
    };
    this.bdf = {
        aei: new rud(0, 20, 800, 70),
        fontSize: 10,
        onq: 10,
        fxl: 20,
        akl: 40,
        ihx: 4,
        bth: 10,
        xsm: 5,
        plt: 10,
        dya: {
            fontSize: 17,
            plt: 2
        }
    };
    this.qsf = {
        aei: new rud(0, 20, 800, 600),
        rgt: new rud(),
        dya: {
            wdt: 20,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            pbk: 8,
            oul: 8,
            ihx: 0
        },
        gjb: new rud(0, 20, 800, 40),
        kqs: new rud(0, 100, 800, 40),
        cwn: new rud(0, 140, 800, 40),
        exa: new rud(0, 180, 800, 40),
        mwb: new rud(225, 275, 350, 100),
        gvs: new rud(200, 480, 400, 40),
        hnb: {
            iwq: new rud(340, 540, 120, 55)
        },
        vtd: {
            iwq: new rud(250, 540, 120, 55),
            qls: new rud(430, 540, 120, 55)
        },
        uas: 36,
        fontSize: 30,
        ypg: 22,
        xsm: 3,
        bth: 5,
        ihx: 2,
        vwj: 3,
        rev: 10
    };
    this.dus = {
        aei: new rud(-10, 25, 310, 50),
        gjb: new rud(10, 4, 240, 24),
        che: new rud(10, 28, 240, 18),
        ikc: new rud(260, 10, 40, 30),
        mho: new rud(7, 2, 26, 26),
        jjw: 16,
        wdt: 12,
        jvn: 18
    };
    this.uyc = {
        aei: new rud(150, 160, 500, 280),
        jjw: 26,
        fontSize: 20,
        vui: new rud(465, 5, 30, 30),
        gjb: new rud(30, 5, 440, 30),
        gvs: new rud(20, 40, 460, 160),
        hdy: new rud(20, 230, 460, 40),
        dya: {
            fontSize: 20
        }
    };
    this.jat = {
        aei: new rud(0, 55, 560, 430),
        ihx: 2,
        vvi: 0,
        tsu: 5,
        dnb: 10,
        jjw: 26,
        vse: 20,
        gjb: new rud(30, 15, 500, 30),
        rsf: new rud(20, 50, 520, 60),
        uqu: new rud(40, 60, 220, 40),
        yho: new rud(328, 60, 30, 40),
        ftf: new rud(360, 60, 120, 40),
        hwy: new rud(482, 60, 30, 40),
        tbl: new rud(20, 120, 520, 200),
        fox: new rud(40, 120, 480, 40),
        zww: new rud(30, 160, 280, 40),
        ahb: new rud(328, 160, 30, 40),
        qtt: new rud(360, 160, 120, 40),
        cuo: new rud(482, 160, 30, 40),
        xlz: new rud(30, 215, 280, 40),
        oct: new rud(328, 215, 30, 40),
        bmt: new rud(360, 215, 120, 40),
        itw: new rud(482, 215, 30, 40),
        bvt: new rud(30, 270, 280, 40),
        jxh: new rud(328, 270, 30, 40),
        yvf: new rud(360, 270, 120, 40),
        org: new rud(482, 270, 30, 40),
        xbm: new rud(30, 330, 500, 30),
        nlm: new rud(210, 370, 140, 50),
        txe: new rud(),
        zfw: {
            che: new rud(40, 0, 240, 40),
            uos: new rud(7, 12, 16, 16),
            fontSize: 20,
            pbk: 0,
            ihx: 2
        },
        bmq: {
            pbk: 3,
            bth: -5,
            xsm: -1,
            oul: 6,
            fontSize: 20,
            ihx: 0
        },
        rpk: {
            pbk: 3,
            bth: 5,
            xsm: 0,
            oul: 6,
            fontSize: 20,
            ihx: 0
        },
        iie: {
            pbk: 6,
            bth: 0,
            xsm: 0,
            oul: 6,
            fontSize: 26,
            ihx: 2
        },
        display: {
            jjw: 16,
            wdt: 24,
            mje: 0,
            jpi: 0,
            ihx: 2,
            zif: 3,
            bfn: 3,
            fnh: 3,
            tld: 3
        }
    };
    this.lmb = {
        aei: [
            [new rud(2, 20, 130, 44)],
            [new rud(2, 20, 130, 44), new rud(668, 20, 130, 44)],
            [new rud(2, 20, 130, 23), new rud(668, 20, 130, 23), new rud(2, 41, 130, 23)],
            [new rud(2, 20, 130, 23), new rud(668, 20, 130, 23), new rud(2, 41, 130, 23), new rud(668, 41, 130, 23)]
        ],
        display: {
            agg: new rud(0, 0, 130, 44),
            hpw: new rud(0, 0, 130, 44),
            osu: new rud(),
            gjb: new rud(2, 3, 126, 19),
            vgg: new rud(8, 24, 114, 19),
            jjw: 16,
            obv: 18,
            zeq: 0
        },
        ojd: {
            agg: new rud(0, 0, 130, 23),
            hpw: new rud(0, 0, 130, 23),
            osu: new rud(2, 2, 19, 19),
            gjb: new rud(),
            vgg: new rud(22, 3, 100, 19),
            jjw: 14,
            obv: 18,
            zeq: 0
        },
        tof: {
            aei: new rud(62, 100, 676, 372),
            agg: new rud(32, 10, 612, 351),
            hpw: new rud(0, 0, 676, 372),
            osu: new rud(301, 263, 74, 74),
            gjb: new rud(120, 58, 436, 56),
            vgg: new rud(32, 140, 612, 96),
            jjw: 68,
            obv: 100,
            zeq: 0
        },
        uyq: {
            aei: new rud(38, 80, 724, 369),
            ggn: new rud(100, 53, 525, 50),
            vgg: new rud(186, 153, 332, 94),
            haw: 340,
            tkh: 30,
            red: {
                _0: new rud(2, 0, 90, 94),
                _1: new rud(98, 0, 90, 94),
                _2: new rud(194, 0, 90, 94),
                _3: new rud(290, 0, 90, 94),
                _4: new rud(386, 0, 90, 94),
                _5: new rud(482, 0, 90, 94),
                _6: new rud(578, 0, 90, 94),
                _7: new rud(674, 0, 90, 94),
                _8: new rud(770, 0, 90, 94),
                _9: new rud(866, 0, 90, 94),
                _cm: new rud(962, 0, 28, 94),
                _dt: new rud(999, 0, 28, 94),
                _sp: new rud(1036, 0, 28, 94)
            }
        }
    }
}
oyn.prototype = new vpk;

function uij() {
    this.vay = true
}
uij.prototype = new oyn;

function dhc() {
    this.sxb = true;
    this.szn = true;
    this.wuz = false;
    this.vay = true;
    this.canvas = {
        aei: new rud(0, 0, 800, 1165)
    };
    this.dut = {
        aei: new rud(),
        vtg: 0
    };
    this.onl = {
        aei: new rud(0, 550, 800, 615),
        ihx: 10
    };
    this.gwo = {
        rgt: new rud(0, 330, 440, 36),
        xim: new rud(5, 2, 140, 30),
        vyn: new rud(150, 2, 140, 30),
        fma: new rud(295, 2, 140, 30),
        dya: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.xkz = {
        onl: {
            aei: new rud(0, 0, 500, 360),
            xbm: new rud(5, 325, 490, 30),
            che: new rud(5, 329, 490, 14),
            hsv: new rud(50, 345, 400, 6),
            owg: new rud(5, 285, 490, 70),
            ygy: new rud(120, 300, 260, 55),
            fontSize: 14,
            izj: 18,
            wnk: 26,
            plt: 5,
            bth: 12,
            xsm: 5,
            nig: 2
        },
        pbh: {
            aei: new rud(0, 0, 800, 600),
            xbm: new rud(),
            che: new rud(),
            hsv: new rud(200, 411, 400, 8),
            owg: new rud(100, 360, 600, 110),
            ygy: new rud(270, 380, 260, 70),
            fontSize: 18,
            izj: 24,
            wnk: 20,
            plt: 0,
            bth: 12,
            xsm: 7,
            nig: 0
        }
    };
    this.top = {
        aei: new rud(0, 20, 800, 520)
    };
    this.lvs = {
        aei: new rud(0, 0, 800, 20),
        fontSize: 12,
        ndv: 19,
        ggz: 15,
        jes: 120,
        bth: 2,
        xsm: 2,
        jju: 2,
        ulu: 60
    };
    this.bdf = {
        aei: new rud(0, 20, 800, 70),
        fontSize: 10,
        onq: 10,
        fxl: 20,
        akl: 40,
        ihx: 4,
        bth: 10,
        xsm: 5,
        plt: 10,
        dya: {
            fontSize: 17,
            plt: 2
        }
    };
    this.qsf = {
        aei: new rud(0, 550, 800, 615),
        rgt: new rud(),
        dya: {
            wdt: 26,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            pbk: 10,
            oul: 10,
            ihx: 2
        },
        gjb: new rud(0, 20, 800, 40),
        kqs: new rud(0, 100, 800, 40),
        cwn: new rud(0, 140, 800, 40),
        exa: new rud(0, 180, 800, 40),
        mwb: new rud(225, 275, 350, 100),
        gvs: new rud(200, 480, 400, 40),
        hnb: {
            iwq: new rud(340, 540, 120, 68)
        },
        vtd: {
            iwq: new rud(250, 540, 120, 68),
            qls: new rud(430, 540, 120, 68)
        },
        uas: 36,
        fontSize: 30,
        ypg: 22,
        xsm: 3,
        bth: 5,
        ihx: 2,
        vwj: 3,
        rev: 10,
    };
    this.dus = {
        aei: new rud(-10, 545, 310, 50),
        gjb: new rud(10, 4, 240, 24),
        che: new rud(10, 28, 240, 18),
        ikc: new rud(260, 10, 40, 30),
        mho: new rud(7, 2, 26, 26),
        jjw: 16,
        wdt: 12,
        jvn: 18
    };
    this.uyc = {
        aei: new rud(150, 690, 500, 280),
        jjw: 26,
        fontSize: 20,
        vui: new rud(465, 5, 30, 30),
        gjb: new rud(30, 5, 440, 40),
        gvs: new rud(20, 40, 460, 160),
        hdy: new rud(20, 230, 460, 40),
        dya: {
            fontSize: 20
        }
    };
    this.jat = {
        aei: new rud(0, 585, 560, 430),
        ihx: 2,
        vvi: 0,
        tsu: 5,
        dnb: 10,
        jjw: 26,
        vse: 20,
        gjb: new rud(30, 15, 500, 30),
        rsf: new rud(20, 50, 520, 60),
        uqu: new rud(40, 60, 220, 40),
        yho: new rud(328, 60, 30, 40),
        ftf: new rud(360, 60, 120, 40),
        hwy: new rud(482, 60, 30, 40),
        tbl: new rud(20, 120, 520, 200),
        fox: new rud(40, 120, 480, 40),
        zww: new rud(30, 160, 280, 40),
        ahb: new rud(328, 160, 30, 40),
        qtt: new rud(360, 160, 120, 40),
        cuo: new rud(482, 160, 30, 40),
        xlz: new rud(30, 215, 280, 40),
        oct: new rud(328, 215, 30, 40),
        bmt: new rud(360, 215, 120, 40),
        itw: new rud(482, 215, 30, 40),
        bvt: new rud(30, 270, 280, 40),
        jxh: new rud(328, 270, 30, 40),
        yvf: new rud(360, 270, 120, 40),
        org: new rud(482, 270, 30, 40),
        xbm: new rud(30, 330, 500, 30),
        nlm: new rud(210, 370, 140, 50),
        txe: new rud(),
        zfw: {
            che: new rud(40, 0, 240, 40),
            uos: new rud(7, 12, 16, 16),
            fontSize: 20,
            pbk: 0,
            ihx: 2
        },
        bmq: {
            pbk: 3,
            bth: -5,
            xsm: -1,
            oul: 6,
            fontSize: 20,
            ihx: 0
        },
        rpk: {
            pbk: 3,
            bth: 5,
            xsm: 0,
            oul: 6,
            fontSize: 20,
            ihx: 0
        },
        iie: {
            pbk: 6,
            bth: 0,
            xsm: 0,
            oul: 6,
            fontSize: 26,
            ihx: 2
        },
        display: {
            jjw: 16,
            wdt: 24,
            mje: 0,
            jpi: 0,
            ihx: 2,
            zif: 3,
            bfn: 3,
            fnh: 3,
            tld: 3
        }
    };
    this.lmb = {
        aei: [
            [new rud(2, 550, 130, 44)],
            [new rud(2, 550, 130, 44), new rud(668, 550, 130, 44)],
            [new rud(2, 550, 130, 23), new rud(668, 550, 130, 23), new rud(2, 571, 130, 23)],
            [new rud(2, 550, 130, 23), new rud(668, 550, 130, 23), new rud(2, 571, 130, 23), new rud(668, 571, 130, 23)]
        ],
        display: {
            agg: new rud(0, 0, 130, 44),
            hpw: new rud(0, 0, 130, 44),
            osu: new rud(),
            gjb: new rud(2, 3, 126, 19),
            vgg: new rud(8, 24, 114, 19),
            jjw: 16,
            obv: 18,
            zeq: 0
        },
        ojd: {
            agg: new rud(0, 0, 130, 23),
            hpw: new rud(0, 0, 130, 23),
            osu: new rud(2, 2, 19, 19),
            gjb: new rud(),
            vgg: new rud(22, 3, 100, 19),
            jjw: 14,
            obv: 18,
            zeq: 0
        },
        tof: {
            aei: new rud(62, 640, 676, 372),
            agg: new rud(32, 10, 612, 351),
            hpw: new rud(0, 0, 676, 372),
            osu: new rud(301, 263, 74, 74),
            gjb: new rud(120, 58, 436, 56),
            vgg: new rud(32, 140, 612, 96),
            jjw: 68,
            obv: 100,
            zeq: 0
        },
        uyq: {
            aei: new rud(38, 610, 724, 369),
            ggn: new rud(100, 53, 525, 50),
            vgg: new rud(186, 153, 332, 94),
            haw: 360,
            tkh: 30,
            red: {
                _0: new rud(2, 0, 90, 94),
                _1: new rud(98, 0, 90, 94),
                _2: new rud(194, 0, 90, 94),
                _3: new rud(290, 0, 90, 94),
                _4: new rud(386, 0, 90, 94),
                _5: new rud(482, 0, 90, 94),
                _6: new rud(578, 0, 90, 94),
                _7: new rud(674, 0, 90, 94),
                _8: new rud(770, 0, 90, 94),
                _9: new rud(866, 0, 90, 94),
                _cm: new rud(962, 0, 28, 94),
                _dt: new rud(999, 0, 28, 94),
                _sp: new rud(1036, 0, 28, 94)
            }
        }
    }
}
dhc.prototype = new vpk;

function mvg() {
    this.wuz = false;
    this.qro = true;
    this.hhh = true;
    this.canvas = {
        aei: new rud(0, 0, 960, 630)
    };
    this.dut = {
        aei: new rud(),
        vtg: 0,
        uwx: 0
    };
    this.onl = {
        aei: new rud(160, 30, 800, 600),
        ihx: 0
    };
    this.gwo = {
        rgt: new rud(460, 25, 500, 34),
        xim: new rud(5, 2, 160, 30),
        vyn: new rud(170, 2, 160, 30),
        fma: new rud(335, 2, 160, 30),
        dya: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.xkz = {
        onl: {
            aei: new rud(0, 0, 640, 460),
            xbm: new rud(6, 416, 628, 38),
            che: new rud(6, 420, 628, 17),
            hsv: new rud(64, 442, 512, 7),
            owg: new rud(6, 364, 628, 90),
            ygy: new rud(140, 384, 360, 70),
            fontSize: 18,
            izj: 20,
            wnk: 30,
            plt: 6,
            bth: 12,
            xsm: 6,
            nig: 3
        },
        pbh: {
            aei: new rud(0, 0, 960, 630),
            xbm: new rud(),
            che: new rud(),
            hsv: new rud(280, 431, 400, 8),
            owg: new rud(180, 380, 600, 90),
            ygy: new rud(350, 400, 260, 70),
            fontSize: 18,
            izj: 24,
            wnk: 20,
            plt: 0,
            bth: 12,
            xsm: 7,
            nig: 0
        }
    };
    this.lvs = {
        aei: new rud(160, 0, 800, 30),
        fontSize: 16,
        ndv: 26,
        ggz: 15,
        jes: 160,
        bth: 2,
        xsm: 2,
        jju: 2,
        ulu: 0
    };
    this.bdf = {};
    this.qsf = {
        aei: new rud(0, 0, 960, 630),
        rgt: new rud(0, 0, 160, 630),
        dya: {
            wdt: 0,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            oul: 8,
            pbk: 16,
            ihx: 4
        },
        gjb: new rud(160, 50, 800, 40),
        kqs: new rud(160, 130, 800, 40),
        cwn: new rud(160, 170, 800, 40),
        exa: new rud(160, 210, 800, 40),
        mwb: new rud(385, 305, 350, 100),
        gvs: new rud(360, 510, 400, 40),
        hnb: {
            iwq: new rud(10, 455, 140, 100),
        },
        vtd: {
            iwq: new rud(10, 355, 140, 100),
            qls: new rud(10, 165, 140, 100)
        },
        uas: 36,
        fontSize: 30,
        ypg: 22,
        xsm: 3,
        bth: 5,
        ihx: 2,
        vwj: 3,
        rev: 10
    };
    this.sad = {
        aei: new rud(160, 30, 800, 600),
        ihx: 0,
        pbk: 0,
        ijj: 50,
        lxq: 30,
        vse: 30,
        rey: new rud(30, 180, 410, 60),
        esx: new rud(460, 180, 50, 60),
        tcu: new rud(512, 180, 210, 60),
        gjr: new rud(724, 180, 50, 60),
        nxb: new rud(30, 310, 410, 60),
        oac: new rud(460, 310, 50, 60),
        ibz: new rud(512, 310, 210, 60),
        jtp: new rud(724, 310, 50, 60),
        drp: new rud(30, 440, 410, 60),
        bkp: new rud(512, 440, 210, 60),
        fbm: new rud(40, 530, 720, 50),
        uqu: new rud(30, 120, 360, 60),
        yho: new rud(460, 120, 50, 60),
        ftf: new rud(512, 120, 210, 60),
        hwy: new rud(724, 120, 50, 60),
        gdt: new rud(40, 200, 760, 70),
        zww: new rud(30, 280, 410, 60),
        ahb: new rud(460, 280, 50, 60),
        qtt: new rud(512, 280, 210, 60),
        cuo: new rud(724, 280, 50, 60),
        xlz: new rud(30, 360, 410, 60),
        oct: new rud(460, 360, 50, 60),
        bmt: new rud(512, 360, 210, 60),
        itw: new rud(724, 360, 50, 60),
        bvt: new rud(30, 440, 410, 60),
        jxh: new rud(460, 440, 50, 60),
        yvf: new rud(512, 440, 210, 60),
        org: new rud(724, 440, 50, 60),
        xbm: new rud(40, 530, 720, 50),
        oxo: {
            jyr: new rud(0, 0, 267, 90),
            cer: new rud(267, 0, 266, 90),
            dpf: new rud(533, 0, 267, 90),
            jnu: new rud()
        },
        hdj: {
            jyr: new rud(0, 0, 200, 90),
            iqg: new rud(200, 0, 200, 90),
            cer: new rud(400, 0, 200, 90),
            dpf: new rud(600, 0, 200, 90),
            jnu: new rud()
        },
        zjv: [new rud(132, 205, 200, 160), new rud(464, 205, 200, 160)],
        rfc: [new rud(50, 205, 200, 160), new rud(300, 205, 200, 160), new rud(550, 205, 200, 160)],
        rfo: [new rud(132, 130, 200, 160), new rud(464, 130, 200, 160), new rud(132, 360, 200, 160), new rud(464, 360, 200, 160)],
        kux: [new rud(50, 130, 200, 160), new rud(300, 130, 200, 160), new rud(550, 130, 200, 160), new rud(50, 360, 200, 160), new rud(300, 360, 200, 160), new rud(550, 360, 200, 160)],
        bmq: {
            pbk: 3,
            bth: -10,
            xsm: -1,
            oul: 6,
            fontSize: 36,
            ihx: 0
        },
        rpk: {
            pbk: 3,
            bth: 10,
            xsm: -1,
            oul: 6,
            fontSize: 36,
            ihx: 0
        },
        bxq: {
            fontSize: 36,
            bth: 0,
            xsm: 0,
            oul: 10,
            pbk: 0,
            ihx: 0
        },
        gxk: {
            fontSize: 26,
            plt: 5,
            pbk: 26,
            ihx: 4,
            ctn: 40
        },
        cye: {
            jjw: 16,
            wdt: 40,
            mje: 0,
            jpi: 0,
            ihx: 2,
            plt: 3
        },
        tgm: {
            jjw: 16,
            wdt: 40,
            mje: 0,
            jpi: 0,
            ihx: 2,
            plt: 3
        },
        zfw: {
            che: new rud(50, 0, 360, 60),
            uos: new rud(0, 13, 30, 30),
            fontSize: 30,
            pbk: 0,
            ihx: 2
        }
    };
    this.dus = {
        aei: new rud(660, 30, 310, 60),
        gjb: new rud(60, 6, 240, 26),
        che: new rud(60, 34, 240, 20),
        ikc: new rud(5, 11, 50, 38),
        mho: new rud(8, 2, 34, 34),
        jjw: 16,
        wdt: 12,
        jvn: 24
    };
    this.uyc = {
        aei: new rud(280, 150, 560, 330),
        jjw: 26,
        fontSize: 20,
        vui: new rud(515, 5, 40, 40),
        gjb: new rud(40, 5, 480, 30),
        gvs: new rud(20, 40, 520, 195),
        hdy: new rud(20, 265, 520, 54),
        dya: {
            fontSize: 20
        }
    };
    this.lmb = {
        aei: [
            [new rud(162, 30, 130, 44)],
            [new rud(162, 30, 130, 44), new rud(828, 30, 130, 44)],
            [new rud(162, 30, 130, 23), new rud(828, 30, 130, 23), new rud(162, 51, 130, 23)],
            [new rud(162, 30, 130, 23), new rud(828, 30, 130, 23), new rud(162, 51, 130, 23), new rud(828, 51, 130, 23)]
        ],
        display: {
            agg: new rud(0, 0, 130, 44),
            hpw: new rud(0, 0, 130, 44),
            osu: new rud(),
            gjb: new rud(2, 3, 126, 19),
            vgg: new rud(8, 24, 114, 19),
            jjw: 16,
            obv: 18,
            zeq: 0
        },
        ojd: {
            agg: new rud(0, 0, 130, 23),
            hpw: new rud(0, 0, 130, 23),
            osu: new rud(2, 2, 19, 19),
            gjb: new rud(),
            vgg: new rud(22, 3, 100, 19),
            jjw: 14,
            obv: 18,
            zeq: 0
        },
        tof: {
            aei: new rud(222, 110, 676, 372),
            agg: new rud(32, 10, 612, 351),
            hpw: new rud(0, 0, 676, 372),
            osu: new rud(301, 263, 74, 74),
            gjb: new rud(120, 58, 436, 56),
            vgg: new rud(32, 140, 612, 96),
            jjw: 68,
            obv: 100,
            zeq: 0
        },
        uyq: {
            aei: new rud(198, 90, 724, 369),
            ggn: new rud(100, 53, 525, 50),
            vgg: new rud(186, 153, 332, 94),
            haw: 340,
            tkh: 30,
            red: {
                _0: new rud(2, 0, 90, 94),
                _1: new rud(98, 0, 90, 94),
                _2: new rud(194, 0, 90, 94),
                _3: new rud(290, 0, 90, 94),
                _4: new rud(386, 0, 90, 94),
                _5: new rud(482, 0, 90, 94),
                _6: new rud(578, 0, 90, 94),
                _7: new rud(674, 0, 90, 94),
                _8: new rud(770, 0, 90, 94),
                _9: new rud(866, 0, 90, 94),
                _cm: new rud(962, 0, 28, 94),
                _dt: new rud(999, 0, 28, 94),
                _sp: new rud(1036, 0, 28, 94)
            }
        }
    }
}
mvg.prototype = new vpk;

function yyk() {
    this.wuz = false;
    this.qro = true;
    this.hhh = true;
    this.canvas = {
        aei: new rud(0, 0, 960, 630)
    };
    this.dut = {
        aei: new rud(),
        vtg: 0,
        uwx: 0
    };
    this.onl = {
        aei: new rud(0, 30, 800, 600),
        ihx: 0
    };
    this.gwo = {
        rgt: new rud(0, 25, 500, 34),
        xim: new rud(5, 2, 160, 30),
        vyn: new rud(170, 2, 160, 30),
        fma: new rud(335, 2, 160, 30),
        dya: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.xkz = {
        onl: {
            aei: new rud(0, 0, 640, 460),
            xbm: new rud(6, 416, 628, 38),
            che: new rud(6, 420, 628, 17),
            hsv: new rud(64, 442, 512, 7),
            owg: new rud(6, 364, 628, 90),
            ygy: new rud(140, 384, 360, 70),
            fontSize: 18,
            izj: 20,
            wnk: 30,
            plt: 6,
            bth: 12,
            xsm: 6,
            nig: 3
        },
        pbh: {
            aei: new rud(0, 0, 960, 630),
            xbm: new rud(),
            che: new rud(),
            hsv: new rud(280, 431, 400, 8),
            owg: new rud(180, 380, 600, 90),
            ygy: new rud(350, 400, 260, 70),
            fontSize: 18,
            izj: 24,
            wnk: 20,
            plt: 0,
            bth: 12,
            xsm: 7,
            nig: 0
        }
    };
    this.lvs = {
        aei: new rud(0, 0, 800, 30),
        fontSize: 16,
        ndv: 26,
        ggz: 15,
        jes: 160,
        bth: 2,
        xsm: 2,
        jju: 2,
        ulu: 0
    };
    this.bdf = {};
    this.qsf = {
        aei: new rud(0, 0, 960, 630),
        rgt: new rud(800, 0, 160, 630),
        dya: {
            wdt: 0,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            oul: 8,
            pbk: 16,
            ihx: 4
        },
        gjb: new rud(0, 50, 800, 40),
        kqs: new rud(0, 130, 800, 40),
        cwn: new rud(0, 170, 800, 40),
        exa: new rud(0, 210, 800, 40),
        mwb: new rud(225, 305, 350, 100),
        gvs: new rud(200, 510, 400, 40),
        hnb: {
            iwq: new rud(810, 455, 140, 100),
        },
        vtd: {
            iwq: new rud(810, 355, 140, 100),
            qls: new rud(810, 165, 140, 100)
        },
        uas: 36,
        fontSize: 30,
        ypg: 22,
        xsm: 3,
        bth: 5,
        ihx: 2,
        vwj: 3,
        rev: 10
    };
    this.sad = {
        aei: new rud(0, 30, 800, 600),
        ihx: 0,
        pbk: 0,
        ijj: 50,
        lxq: 30,
        vse: 30,
        rey: new rud(30, 180, 410, 60),
        esx: new rud(460, 180, 50, 60),
        tcu: new rud(512, 180, 210, 60),
        gjr: new rud(724, 180, 50, 60),
        nxb: new rud(30, 310, 410, 60),
        oac: new rud(460, 310, 50, 60),
        ibz: new rud(512, 310, 210, 60),
        jtp: new rud(724, 310, 50, 60),
        drp: new rud(30, 440, 410, 60),
        bkp: new rud(512, 440, 210, 60),
        fbm: new rud(40, 530, 720, 50),
        uqu: new rud(30, 120, 360, 60),
        yho: new rud(460, 120, 50, 60),
        ftf: new rud(512, 120, 210, 60),
        hwy: new rud(724, 120, 50, 60),
        gdt: new rud(40, 200, 760, 70),
        zww: new rud(30, 280, 410, 60),
        ahb: new rud(460, 280, 50, 60),
        qtt: new rud(512, 280, 210, 60),
        cuo: new rud(724, 280, 50, 60),
        xlz: new rud(30, 360, 410, 60),
        oct: new rud(460, 360, 50, 60),
        bmt: new rud(512, 360, 210, 60),
        itw: new rud(724, 360, 50, 60),
        bvt: new rud(30, 440, 410, 60),
        jxh: new rud(460, 440, 50, 60),
        yvf: new rud(512, 440, 210, 60),
        org: new rud(724, 440, 50, 60),
        xbm: new rud(40, 530, 720, 50),
        oxo: {
            jyr: new rud(0, 0, 267, 90),
            cer: new rud(267, 0, 266, 90),
            dpf: new rud(533, 0, 267, 90),
            jnu: new rud()
        },
        hdj: {
            jyr: new rud(0, 0, 200, 90),
            iqg: new rud(200, 0, 200, 90),
            cer: new rud(400, 0, 200, 90),
            dpf: new rud(600, 0, 200, 90),
            jnu: new rud()
        },
        zjv: [new rud(132, 205, 200, 160), new rud(464, 205, 200, 160)],
        rfc: [new rud(50, 205, 200, 160), new rud(300, 205, 200, 160), new rud(550, 205, 200, 160)],
        rfo: [new rud(132, 130, 200, 160), new rud(464, 130, 200, 160), new rud(132, 360, 200, 160), new rud(464, 360, 200, 160)],
        kux: [new rud(50, 130, 200, 160), new rud(300, 130, 200, 160), new rud(550, 130, 200, 160), new rud(50, 360, 200, 160), new rud(300, 360, 200, 160), new rud(550, 360, 200, 160)],
        bmq: {
            pbk: 3,
            bth: -10,
            xsm: -1,
            oul: 6,
            fontSize: 36,
            ihx: 0
        },
        rpk: {
            pbk: 3,
            bth: 10,
            xsm: -1,
            oul: 6,
            fontSize: 36,
            ihx: 0
        },
        bxq: {
            fontSize: 36,
            bth: 0,
            xsm: 0,
            oul: 10,
            pbk: 0,
            ihx: 0
        },
        gxk: {
            fontSize: 26,
            plt: 5,
            pbk: 26,
            ihx: 4,
            ctn: 40
        },
        cye: {
            jjw: 16,
            wdt: 40,
            mje: 0,
            jpi: 0,
            ihx: 2,
            plt: 3
        },
        tgm: {
            jjw: 16,
            wdt: 40,
            mje: 0,
            jpi: 0,
            ihx: 2,
            plt: 3
        },
        zfw: {
            che: new rud(50, 0, 360, 60),
            uos: new rud(0, 13, 30, 30),
            fontSize: 30,
            pbk: 0,
            ihx: 2
        }
    };
    this.dus = {
        aei: new rud(-10, 30, 310, 60),
        gjb: new rud(10, 6, 240, 26),
        che: new rud(10, 34, 240, 20),
        ikc: new rud(255, 11, 50, 38),
        mho: new rud(8, 2, 34, 34),
        jjw: 16,
        wdt: 12,
        jvn: 24
    };
    this.uyc = {
        aei: new rud(120, 150, 560, 330),
        jjw: 26,
        fontSize: 20,
        vui: new rud(515, 5, 40, 40),
        gjb: new rud(40, 5, 480, 30),
        gvs: new rud(20, 40, 520, 195),
        hdy: new rud(20, 265, 520, 54),
        dya: {
            fontSize: 20
        }
    };
    this.lmb = {
        aei: [
            [new rud(2, 30, 130, 44)],
            [new rud(2, 30, 130, 44), new rud(668, 30, 130, 44)],
            [new rud(2, 30, 130, 23), new rud(668, 30, 130, 23), new rud(2, 51, 130, 23)],
            [new rud(2, 30, 130, 23), new rud(668, 30, 130, 23), new rud(2, 51, 130, 23), new rud(668, 51, 130, 23)]
        ],
        display: {
            agg: new rud(0, 0, 130, 44),
            hpw: new rud(0, 0, 130, 44),
            osu: new rud(),
            gjb: new rud(2, 3, 126, 19),
            vgg: new rud(8, 24, 114, 19),
            jjw: 16,
            obv: 18,
            zeq: 0
        },
        ojd: {
            agg: new rud(0, 0, 130, 23),
            hpw: new rud(0, 0, 130, 23),
            osu: new rud(2, 2, 19, 19),
            gjb: new rud(),
            vgg: new rud(22, 3, 100, 19),
            jjw: 14,
            obv: 18,
            zeq: 0
        },
        tof: {
            aei: new rud(62, 110, 676, 372),
            agg: new rud(32, 10, 612, 351),
            hpw: new rud(0, 0, 676, 372),
            osu: new rud(301, 263, 74, 74),
            gjb: new rud(120, 58, 436, 56),
            vgg: new rud(32, 140, 612, 96),
            jjw: 68,
            obv: 100,
            zeq: 0
        },
        uyq: {
            aei: new rud(38, 90, 724, 369),
            ggn: new rud(100, 53, 525, 50),
            vgg: new rud(186, 153, 332, 94),
            haw: 340,
            tkh: 30,
            red: {
                _0: new rud(2, 0, 90, 94),
                _1: new rud(98, 0, 90, 94),
                _2: new rud(194, 0, 90, 94),
                _3: new rud(290, 0, 90, 94),
                _4: new rud(386, 0, 90, 94),
                _5: new rud(482, 0, 90, 94),
                _6: new rud(578, 0, 90, 94),
                _7: new rud(674, 0, 90, 94),
                _8: new rud(770, 0, 90, 94),
                _9: new rud(866, 0, 90, 94),
                _cm: new rud(962, 0, 28, 94),
                _dt: new rud(999, 0, 28, 94),
                _sp: new rud(1036, 0, 28, 94)
            }
        }
    }
}
yyk.prototype = new vpk;

function xlt() {
    this.pew = true;
    this.cyc = true;
    this.sfa = {
        aei: new rud(0, 496, 800, 124),
        szl: new rud(0, 0, 800, 124),
        xab: new rud(),
        dbg: {
            aei: new rud(187, 14, 470, 40),
            xsm: 10,
            fontSize: 18,
            pbk: 3,
            xpz: 2,
            oul: 6,
            ihx: 2
        },
        rkz: {
            wdt: 22,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            pbk: 10,
            oul: 8,
            ihx: 2
        },
        fwv: {
            wdt: 16,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            pbk: 8,
            oul: 6,
            ihx: 2
        },
        bxh: {
            wdt: 16,
            obv: 16,
            bth: 0,
            pbk: 8,
            oul: 6,
            ihx: 2,
            jpi: 24,
            yxs: -24
        },
        display: {
            mje: -12,
            jpi: 11,
            wdt: 26,
            jjw: 15,
            ihx: 2,
            zif: 3,
            bfn: 3,
            fnh: 3,
            tld: 3
        },
        zon: new rud(5, 10, 150, 48),
        vzu: new rud(689, 10, 106, 48),
        fal: {
            wyx: new rud(686, 68, 110, 53),
            lku: new rud(492, 68, 80, 53),
            qxd: new rud(382, 68, 80, 53),
            qls: new rud(272, 68, 80, 53),
            aox: new rud(25, 68, 110, 53),
            bsb: new rud()
        },
        grg: {
            wyx: new rud(686, 68, 110, 53),
            aox: new rud(532, 68, 80, 53),
            lku: new rud(432, 68, 80, 53),
            qxd: new rud(332, 68, 80, 53),
            qls: new rud(232, 68, 80, 53),
            dbi: new rud(40, 68, 80, 53),
            bsb: new rud()
        },
        pne: {
            wyx: new rud(686, 68, 110, 53),
            aox: new rud(492, 68, 80, 53),
            lku: new rud(382, 68, 80, 53),
            qxd: new rud(272, 68, 80, 53),
            dbi: new rud(40, 68, 80, 53),
            bsb: new rud()
        },
        imt: {
            wyx: new rud(686, 68, 110, 53),
            lku: new rud(492, 68, 80, 53),
            qxd: new rud(382, 68, 80, 53),
            qls: new rud(272, 68, 80, 53),
            aox: new rud(25, 68, 110, 53),
            bsb: new rud()
        },
        usg: 15
    };
    this.ebh = {
        aei: new rud(0, 20, 800, 600),
        rgt: new rud(0, 540, 800, 60),
        qls: new rud(711, 544, 73, 53),
        yqn: new rud(11, 544, 73, 53),
        xnc: new rud(316, 544, 73, 53),
        ccg: new rud(411, 544, 73, 53),
        dya: {
            wdt: 16,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            oul: 6,
            pbk: 8,
            ihx: 2
        }
    };
    this.pqg = {
        aei: new rud(0, 20, 800, 600),
        rgt: new rud(0, 485, 800, 115),
        dbg: {
            aei: new rud(187, 490, 470, 40),
            fontSize: 18,
            xsm: 14,
            pbk: 3,
            xpz: 2,
            oul: 6,
            ihx: 2
        },
        dya: {
            wdt: 18,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            oul: 8,
            pbk: 10,
            ihx: 2
        },
        display: {
            mje: -12,
            jpi: 11,
            wdt: 26,
            jjw: 15,
            ihx: 2,
            zif: 3,
            bfn: 3,
            fnh: 3,
            tld: 3
        },
        vkf: new rud(689, 486, 106, 48),
        gys: new rud(5, 486, 150, 48)
    };
    this.hyl = {
        aei: new rud(710, 35, 90, 450),
        gjb: new rud(5, 5, 80, 15),
        smu: new rud(50, 25, 35, 410),
        fontSize: 15,
        xhs: 20,
        ihx: 2,
        pbk: 5,
        fkp: 4,
        xho: 10,
        rcz: 5
    };
    this.yrn = {
        fontSize: 18,
        zvs: 128,
        knx: 176,
        kli: 0,
        rzu: 20,
        eyr: true
    };
    this.ftn = new rud(20, 290, 128, 205);
    this.tur = new rud(176, 290, 128, 205);
    this.uev = new rud(333, 290, 128, 205);
    this.yya = new rud(490, 290, 128, 205);
    this.abq = new rud(646, 290, 128, 205);
    this.upb = {
        aei: new rud(363, 72, 408, 155),
        fontSize: 50,
        bth: 0,
        xsm: 9,
        plt: 0,
        zeq: 2
    };
    this.apd = {
        aei: new rud(355, 30, 424, 236),
        fontSize: 20,
        plt: 6
    }
}
xlt.prototype = new oyn;

function hwc() {
    this.vay = true
}
hwc.prototype = new xlt;

function clv() {
    this.pew = true;
    this.cyc = true;
    this.sfa = {
        aei: new rud(0, 1026, 800, 139),
        szl: new rud(0, 0, 800, 139),
        xab: new rud(),
        dbg: {
            aei: new rud(187, 14, 470, 40),
            xsm: 10,
            fontSize: 18,
            pbk: 3,
            xpz: 2,
            oul: 6,
            ihx: 2
        },
        rkz: {
            wdt: 28,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            pbk: 12,
            oul: 10,
            ihx: 2
        },
        fwv: {
            wdt: 21,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            pbk: 10,
            oul: 8,
            ihx: 2
        },
        bxh: {
            wdt: 21,
            obv: 21,
            bth: 0,
            pbk: 8,
            oul: 6,
            ihx: 2,
            jpi: 30,
            yxs: -32
        },
        display: {
            mje: -12,
            jpi: 11,
            wdt: 26,
            jjw: 15,
            ihx: 2,
            zif: 3,
            bfn: 3,
            fnh: 3,
            tld: 3
        },
        zon: new rud(5, 10, 150, 48),
        vzu: new rud(689, 10, 106, 48),
        fal: {
            wyx: new rud(675, 68, 120, 68),
            lku: new rud(486, 68, 100, 68),
            qxd: new rud(371, 68, 100, 68),
            qls: new rud(256, 68, 100, 68),
            aox: new rud(20, 68, 120, 68),
            bsb: new rud()
        },
        grg: {
            wyx: new rud(675, 68, 110, 68),
            aox: new rud(536, 68, 100, 68),
            lku: new rud(426, 68, 100, 68),
            qxd: new rud(316, 68, 100, 68),
            qls: new rud(206, 68, 100, 68),
            dbi: new rud(30, 68, 100, 68),
            bsb: new rud()
        },
        pne: {
            wyx: new rud(675, 68, 120, 68),
            aox: new rud(486, 68, 100, 68),
            lku: new rud(371, 68, 100, 68),
            qxd: new rud(256, 68, 100, 68),
            dbi: new rud(30, 68, 100, 68),
            bsb: new rud()
        },
        imt: {
            wyx: new rud(675, 68, 120, 68),
            lku: new rud(486, 68, 100, 68),
            qxd: new rud(371, 68, 100, 68),
            qls: new rud(256, 68, 100, 68),
            aox: new rud(20, 68, 120, 68),
            bsb: new rud()
        },
        usg: 15
    };
    this.ebh = {
        aei: new rud(0, 550, 800, 615),
        rgt: new rud(0, 540, 800, 75),
        qls: new rud(695, 544, 90, 68),
        yqn: new rud(11, 544, 90, 68),
        xnc: new rud(295, 544, 90, 68),
        ccg: new rud(415, 544, 90, 68),
        dya: {
            wdt: 21,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            oul: 8,
            pbk: 10,
            ihx: 2
        }
    };
    this.pqg = {
        aei: new rud(0, 550, 800, 615),
        rgt: new rud(0, 485, 800, 130),
        dbg: {
            aei: new rud(187, 490, 470, 40),
            fontSize: 18,
            xsm: 14,
            pbk: 3,
            xpz: 2,
            oul: 6,
            ihx: 2
        },
        dya: {
            wdt: 23,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            oul: 10,
            pbk: 12,
            ihx: 2
        },
        display: {
            mje: -12,
            jpi: 11,
            wdt: 26,
            jjw: 15,
            ihx: 2,
            zif: 3,
            bfn: 3,
            fnh: 3,
            tld: 3
        },
        vkf: new rud(689, 486, 106, 48),
        gys: new rud(5, 486, 150, 48)
    };
    this.hyl = {
        aei: new rud(710, 565, 90, 450),
        gjb: new rud(5, 5, 80, 15),
        smu: new rud(50, 25, 35, 410),
        fontSize: 15,
        xhs: 20,
        ihx: 2,
        pbk: 5,
        fkp: 4,
        xho: 10,
        rcz: 5
    };
    this.yrn = {
        fontSize: 18,
        zvs: 128,
        knx: 176,
        kli: 0,
        rzu: 20,
        eyr: true
    };
    this.ftn = new rud(20, 820, 128, 205);
    this.tur = new rud(176, 820, 128, 205);
    this.uev = new rud(333, 820, 128, 205);
    this.yya = new rud(490, 820, 128, 205);
    this.abq = new rud(646, 820, 128, 205);
    this.upb = {
        aei: new rud(363, 602, 408, 155),
        fontSize: 50,
        bth: 0,
        xsm: 9,
        plt: 0,
        zeq: 2
    };
    this.apd = {
        aei: new rud(355, 560, 424, 236),
        fontSize: 20,
        plt: 6
    };
    this.top = {
        aei: new rud(0, 20, 800, 520)
    }
}
clv.prototype = new dhc;

function ntx() {
    this.pew = false;
    this.cyc = true;
    this.sfa = {
        aei: new rud(0, 0, 960, 630),
        szl: new rud(160, 506, 800, 124),
        xab: new rud(0, 0, 160, 630),
        dbg: {
            aei: new rud(385, 525, 390, 70),
            xsm: 14,
            fontSize: 24,
            pbk: 3,
            xpz: 2,
            oul: 6,
            ihx: 2
        },
        rkz: {
            wdt: 0,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            pbk: 24,
            oul: 8,
            ihx: 6
        },
        fwv: {
            wdt: 0,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            pbk: 16,
            oul: 8,
            ihx: 4
        },
        bxh: {
            wdt: 0,
            obv: 24,
            bth: 0,
            pbk: 24,
            oul: 8,
            ihx: 6,
            jpi: 0,
            yxs: -130
        },
        display: {
            mje: -20,
            jpi: 16,
            wdt: 32,
            jjw: 18,
            ihx: 3,
            zif: 3,
            bfn: 3,
            fnh: 3,
            tld: 3
        },
        zon: new rud(165, 525, 180, 70),
        vzu: new rud(815, 525, 140, 70),
        fal: {
            wyx: new rud(10, 215, 140, 200),
            lku: new rud(),
            qxd: new rud(),
            qls: new rud(10, 455, 140, 100),
            aox: new rud(),
            bsb: new rud(10, 75, 140, 100)
        },
        grg: {
            wyx: new rud(10, 215, 140, 200),
            aox: new rud(),
            lku: new rud(),
            qxd: new rud(),
            qls: new rud(10, 455, 140, 100),
            dbi: new rud(),
            bsb: new rud(10, 75, 140, 100)
        },
        pne: {
            wyx: new rud(10, 215, 140, 200),
            aox: new rud(),
            lku: new rud(),
            qxd: new rud(),
            dbi: new rud(),
            bsb: new rud(10, 75, 140, 100)
        },
        imt: {
            wyx: new rud(10, 215, 140, 200),
            lku: new rud(),
            qxd: new rud(),
            qls: new rud(10, 455, 140, 100),
            aox: new rud(),
            bsb: new rud(10, 75, 140, 100)
        },
        usg: 15
    };
    this.ebh = {
        aei: new rud(0, 0, 960, 630),
        rgt: new rud(0, 0, 160, 630),
        qls: new rud(10, 455, 140, 100),
        yqn: new rud(),
        xnc: new rud(10, 75, 140, 100),
        ccg: new rud(10, 265, 140, 100),
        dya: {
            wdt: 0,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            oul: 16,
            pbk: 16,
            ihx: 4
        }
    };
    this.pqg = {
        aei: new rud(0, 0, 960, 630),
        rgt: new rud(0, 0, 160, 630),
        dbg: {
            aei: new rud(390, 525, 390, 70),
            fontSize: 20,
            xsm: 14,
            pbk: 3,
            xpz: 2,
            oul: 6,
            ihx: 2
        },
        dya: {
            wdt: 24,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            oul: 8,
            pbk: 16,
            ihx: 4
        },
        display: {
            mje: -20,
            jpi: 16,
            wdt: 32,
            jjw: 18,
            ihx: 3,
            zif: 3,
            bfn: 3,
            fnh: 3,
            tld: 3
        },
        gys: new rud(165, 525, 180, 70),
        vkf: new rud(815, 525, 140, 70),
    };
    this.yrn = {
        fontSize: 18,
        zvs: 128,
        knx: 176,
        kli: 0,
        rzu: 20,
        eyr: true
    };
    this.ftn = new rud(180, 300, 128, 205);
    this.tur = new rud(336, 300, 128, 205);
    this.uev = new rud(493, 300, 128, 205);
    this.yya = new rud(650, 300, 128, 205);
    this.abq = new rud(806, 300, 128, 205);
    this.upb = {
        aei: new rud(523, 82, 408, 155),
        fontSize: 50,
        bth: 0,
        xsm: 9,
        plt: 0,
        zeq: 2
    };
    this.apd = {
        aei: new rud(515, 40, 424, 236),
        fontSize: 20,
        plt: 6
    };
    this.sad.rey = new rud();
    this.sad.tcu = new rud();
    this.sad.nxb = new rud();
    this.sad.oac = new rud();
    this.sad.ibz = new rud();
    this.sad.jtp = new rud();
    this.sad.drp = new rud(30, 180, 410, 60);
    this.sad.bkp = new rud(512, 180, 210, 60)
}
ntx.prototype = new mvg;

function tdx() {
    this.pew = false;
    this.cyc = true;
    this.sfa = {
        aei: new rud(0, 0, 960, 630),
        szl: new rud(0, 506, 800, 124),
        xab: new rud(800, 0, 160, 630),
        dbg: {
            aei: new rud(225, 525, 390, 70),
            xsm: 14,
            fontSize: 24,
            pbk: 3,
            xpz: 2,
            oul: 6,
            ihx: 2
        },
        rkz: {
            wdt: 0,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            pbk: 24,
            oul: 8,
            ihx: 6
        },
        fwv: {
            wdt: 0,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            pbk: 16,
            oul: 8,
            ihx: 4
        },
        bxh: {
            wdt: 0,
            obv: 24,
            bth: 0,
            pbk: 24,
            oul: 8,
            ihx: 6,
            jpi: 0,
            yxs: -130
        },
        display: {
            mje: -20,
            jpi: 16,
            wdt: 32,
            jjw: 18,
            ihx: 3,
            zif: 3,
            bfn: 3,
            fnh: 3,
            tld: 3
        },
        zon: new rud(5, 525, 180, 70),
        vzu: new rud(655, 525, 140, 70),
        fal: {
            wyx: new rud(810, 215, 140, 200),
            lku: new rud(),
            qxd: new rud(),
            qls: new rud(810, 455, 140, 100),
            aox: new rud(),
            bsb: new rud(810, 75, 140, 100)
        },
        grg: {
            wyx: new rud(810, 215, 140, 200),
            aox: new rud(),
            lku: new rud(),
            qxd: new rud(),
            qls: new rud(810, 455, 140, 100),
            dbi: new rud(),
            bsb: new rud(810, 75, 140, 100)
        },
        pne: {
            wyx: new rud(810, 215, 140, 200),
            aox: new rud(),
            lku: new rud(),
            qxd: new rud(),
            dbi: new rud(),
            bsb: new rud(810, 75, 140, 100)
        },
        imt: {
            wyx: new rud(810, 215, 140, 200),
            lku: new rud(),
            qxd: new rud(),
            qls: new rud(810, 455, 140, 100),
            aox: new rud(),
            bsb: new rud(810, 75, 140, 100)
        },
        usg: 15
    };
    this.ebh = {
        aei: new rud(0, 0, 960, 630),
        rgt: new rud(800, 0, 160, 630),
        qls: new rud(810, 455, 140, 100),
        yqn: new rud(),
        xnc: new rud(810, 75, 140, 100),
        ccg: new rud(810, 265, 140, 100),
        dya: {
            wdt: 0,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            oul: 16,
            pbk: 16,
            ihx: 4
        }
    };
    this.pqg = {
        aei: new rud(0, 0, 960, 630),
        rgt: new rud(800, 0, 160, 630),
        dbg: {
            aei: new rud(230, 525, 390, 70),
            fontSize: 20,
            xsm: 14,
            pbk: 3,
            xpz: 2,
            oul: 6,
            ihx: 2
        },
        dya: {
            wdt: 24,
            obv: 0,
            bth: 0,
            jpi: 0,
            yxs: 0,
            oul: 8,
            pbk: 16,
            ihx: 4
        },
        display: {
            mje: -20,
            jpi: 16,
            wdt: 32,
            jjw: 18,
            ihx: 3,
            zif: 3,
            bfn: 3,
            fnh: 3,
            tld: 3
        },
        gys: new rud(5, 525, 180, 70),
        vkf: new rud(655, 525, 140, 70),
    };
    this.yrn = {
        fontSize: 18,
        zvs: 128,
        knx: 176,
        kli: 0,
        rzu: 20,
        eyr: true
    };
    this.ftn = new rud(20, 300, 128, 205);
    this.tur = new rud(176, 300, 128, 205);
    this.uev = new rud(333, 300, 128, 205);
    this.yya = new rud(490, 300, 128, 205);
    this.abq = new rud(646, 300, 128, 205);
    this.upb = {
        aei: new rud(363, 82, 408, 155),
        fontSize: 50,
        bth: 0,
        xsm: 9,
        plt: 0,
        zeq: 2
    };
    this.apd = {
        aei: new rud(355, 40, 424, 236),
        fontSize: 20,
        plt: 6
    };
    this.sad.rey = new rud();
    this.sad.tcu = new rud();
    this.sad.nxb = new rud();
    this.sad.oac = new rud();
    this.sad.ibz = new rud();
    this.sad.jtp = new rud();
    this.sad.drp = new rud(30, 180, 410, 60);
    this.sad.bkp = new rud(512, 180, 210, 60)
}
tdx.prototype = new yyk;

function srx() {
    this.ftn = new rud(20, 250, 147, 227);
    this.tur = new rud(174, 250, 147, 227);
    this.uev = new rud(328, 250, 147, 227);
    this.yya = new rud(479, 250, 147, 227);
    this.abq = new rud(632, 250, 147, 227);
    this.yrn.zvs = 145;
    this.yrn.knx = 202;
    this.yrn.kli = 20;
    this.upb.aei = new rud(110, 290, 584, 60);
    this.upb.fontSize = 40;
    this.upb.plt = 10;
    this.upb.xsm = 3;
    this.apd.aei = new rud(22, 42, 756, 193);
    this.apd.plt = 5;
    this.apd.bth = 2;
    this.apd.vkf = [new rud(209, 2, 103, 189), new rud(314, 2, 103, 189), new rud(419, 2, 103, 189), new rud(524, 2, 103, 189), new rud(629, 2, 125, 189)];
    this.pqg.yrn = {
        fontSize: 18,
        zvs: 145,
        knx: 202,
        kli: 20,
        rzu: 20,
        eyr: true
    };
    this.pqg.ftn = new rud(20, 175, 147, 227);
    this.pqg.tur = new rud(174, 175, 147, 227);
    this.pqg.uev = new rud(327, 175, 147, 227);
    this.pqg.yya = new rud(479, 175, 147, 227);
    this.pqg.abq = new rud(632, 175, 147, 227);
    this.pqg.hfa = new rud(415, 544, 110, 53);
    this.pqg.qxd = new rud(275, 544, 110, 53);
    this.pqg.xbm = new rud(50, 20, 700, 120);
    this.pqg.fontSize = 20;
    this.ebh.win = {
        aei: new rud(0, 0, 800, 600),
        fontSize: 16,
        jjw: 24,
        vse: 12,
        lineWidth: 1,
        gjb: new rud(),
        xbm: new rud(0, 530, 800, 20),
        gtx: [new rud(32, 20, 180, 20), new rud(452, 20, 180, 20), new rud(32, 100, 180, 20), new rud(452, 100, 180, 20), new rud(32, 180, 180, 20), new rud(452, 180, 180, 20), new rud(32, 260, 180, 20), new rud(452, 260, 180, 20), new rud(32, 340, 180, 20), new rud(452, 340, 180, 20), new rud(32, 420, 180, 20), ],
        che: [new rud(170, 40, 190, 50), new rud(590, 40, 190, 50), new rud(170, 120, 190, 50), new rud(590, 120, 190, 50), new rud(170, 200, 190, 50), new rud(590, 200, 190, 50), new rud(170, 280, 190, 50), new rud(590, 280, 190, 50), new rud(170, 360, 190, 50), new rud(590, 360, 190, 50), new rud(170, 440, 190, 50)]
    }
}
srx.prototype = new xlt;

function xbq() {
    this.vay = true
}
xbq.prototype = new srx;

function sxd() {
    this.ftn = new rud(20, 780, 147, 227);
    this.tur = new rud(174, 780, 147, 227);
    this.uev = new rud(328, 780, 147, 227);
    this.yya = new rud(479, 780, 147, 227);
    this.abq = new rud(632, 780, 147, 227);
    this.yrn.zvs = 145;
    this.yrn.knx = 202;
    this.yrn.kli = 20;
    this.upb.aei = new rud(110, 820, 584, 60);
    this.upb.fontSize = 40;
    this.upb.plt = 10;
    this.upb.xsm = 3;
    this.apd.aei = new rud(22, 572, 756, 193);
    this.apd.plt = 5;
    this.apd.bth = 2;
    this.apd.vkf = [new rud(209, 2, 103, 189), new rud(314, 2, 103, 189), new rud(419, 2, 103, 189), new rud(524, 2, 103, 189), new rud(629, 2, 125, 189)];
    this.pqg.yrn = {
        fontSize: 18,
        zvs: 145,
        knx: 202,
        kli: 20,
        rzu: 20,
        eyr: true
    };
    this.pqg.ftn = new rud(20, 175, 147, 227);
    this.pqg.tur = new rud(174, 175, 147, 227);
    this.pqg.uev = new rud(327, 175, 147, 227);
    this.pqg.yya = new rud(479, 175, 147, 227);
    this.pqg.abq = new rud(632, 175, 147, 227);
    this.pqg.hfa = new rud(415, 544, 120, 68);
    this.pqg.qxd = new rud(265, 544, 120, 68);
    this.pqg.xbm = new rud(50, 20, 700, 120);
    this.pqg.fontSize = 20;
    this.ebh.win = {
        aei: new rud(0, 0, 800, 615),
        fontSize: 16,
        jjw: 24,
        vse: 12,
        lineWidth: 1,
        gjb: new rud(),
        xbm: new rud(0, 530, 800, 20),
        gtx: [new rud(32, 20, 180, 20), new rud(452, 20, 180, 20), new rud(32, 100, 180, 20), new rud(452, 100, 180, 20), new rud(32, 180, 180, 20), new rud(452, 180, 180, 20), new rud(32, 260, 180, 20), new rud(452, 260, 180, 20), new rud(32, 340, 180, 20), new rud(452, 340, 180, 20), new rud(32, 420, 180, 20), ],
        che: [new rud(170, 40, 190, 50), new rud(590, 40, 190, 50), new rud(170, 120, 190, 50), new rud(590, 120, 190, 50), new rud(170, 200, 190, 50), new rud(590, 200, 190, 50), new rud(170, 280, 190, 50), new rud(590, 280, 190, 50), new rud(170, 360, 190, 50), new rud(590, 360, 190, 50), new rud(170, 440, 190, 50)]
    };
    this.top.win = {
        aei: new rud(0, 0, 800, 520),
        fontSize: 16,
        jjw: 24,
        vse: 12,
        lineWidth: 1,
        gjb: new rud(),
        xbm: new rud(0, 500, 800, 20),
        gtx: [new rud(32, 20, 180, 20), new rud(452, 20, 180, 20), new rud(32, 100, 180, 20), new rud(452, 100, 180, 20), new rud(32, 180, 180, 20), new rud(452, 180, 180, 20), new rud(32, 260, 180, 20), new rud(452, 260, 180, 20), new rud(32, 340, 180, 20), new rud(452, 340, 180, 20), new rud(32, 420, 180, 20), ],
        che: [new rud(170, 40, 190, 50), new rud(590, 40, 190, 50), new rud(170, 120, 190, 50), new rud(590, 120, 190, 50), new rud(170, 200, 190, 50), new rud(590, 200, 190, 50), new rud(170, 280, 190, 50), new rud(590, 280, 190, 50), new rud(170, 360, 190, 50), new rud(590, 360, 190, 50), new rud(170, 440, 190, 50)]
    }
}
sxd.prototype = new clv;

function ggf() {
    this.ftn = new rud(180, 260, 147, 227);
    this.tur = new rud(334, 260, 147, 227);
    this.uev = new rud(488, 260, 147, 227);
    this.yya = new rud(639, 260, 147, 227);
    this.abq = new rud(792, 260, 147, 227);
    this.yrn.zvs = 145;
    this.yrn.knx = 202;
    this.yrn.kli = 20;
    this.upb.aei = new rud(270, 300, 584, 60);
    this.upb.fontSize = 40;
    this.upb.plt = 10;
    this.upb.xsm = 3;
    this.apd.aei = new rud(182, 52, 756, 193);
    this.apd.plt = 5;
    this.apd.bth = 2;
    this.apd.vkf = [new rud(209, 2, 103, 189), new rud(314, 2, 103, 189), new rud(419, 2, 103, 189), new rud(524, 2, 103, 189), new rud(629, 2, 125, 189)];
    this.pqg.yrn = {
        fontSize: 18,
        zvs: 145,
        knx: 202,
        kli: 20,
        rzu: 20,
        eyr: true
    };
    this.pqg.ftn = new rud(180, 205, 147, 227);
    this.pqg.tur = new rud(334, 205, 147, 227);
    this.pqg.uev = new rud(487, 205, 147, 227);
    this.pqg.yya = new rud(639, 205, 147, 227);
    this.pqg.abq = new rud(792, 205, 147, 227);
    this.pqg.hfa = new rud(10, 365, 140, 100);
    this.pqg.qxd = new rud(10, 165, 140, 100);
    this.pqg.xbm = new rud(210, 50, 700, 120);
    this.pqg.fontSize = 20;
    this.ebh.win = {
        aei: new rud(160, 30, 800, 600),
        fontSize: 16,
        jjw: 24,
        vse: 20,
        lineWidth: 1,
        gjb: new rud(),
        xbm: new rud(0, 530, 800, 40),
        gtx: [new rud(32, 20, 180, 20), new rud(452, 20, 180, 20), new rud(32, 100, 180, 20), new rud(452, 100, 180, 20), new rud(32, 180, 180, 20), new rud(452, 180, 180, 20), new rud(32, 260, 180, 20), new rud(452, 260, 180, 20), new rud(32, 340, 180, 20), new rud(452, 340, 180, 20), new rud(32, 420, 180, 20), ],
        che: [new rud(170, 40, 190, 50), new rud(590, 40, 190, 50), new rud(170, 120, 190, 50), new rud(590, 120, 190, 50), new rud(170, 200, 190, 50), new rud(590, 200, 190, 50), new rud(170, 280, 190, 50), new rud(590, 280, 190, 50), new rud(170, 360, 190, 50), new rud(590, 360, 190, 50), new rud(170, 440, 190, 50)]
    }
}
ggf.prototype = new ntx;

function eqq() {
    this.ftn = new rud(20, 260, 147, 227);
    this.tur = new rud(174, 260, 147, 227);
    this.uev = new rud(328, 260, 147, 227);
    this.yya = new rud(479, 260, 147, 227);
    this.abq = new rud(632, 260, 147, 227);
    this.yrn.zvs = 145;
    this.yrn.knx = 202;
    this.yrn.kli = 20;
    this.upb.aei = new rud(110, 300, 584, 60);
    this.upb.fontSize = 40;
    this.upb.plt = 10;
    this.upb.xsm = 3;
    this.apd.aei = new rud(22, 52, 756, 193);
    this.apd.plt = 5;
    this.apd.bth = 2;
    this.apd.vkf = [new rud(209, 2, 103, 189), new rud(314, 2, 103, 189), new rud(419, 2, 103, 189), new rud(524, 2, 103, 189), new rud(629, 2, 125, 189)];
    this.pqg.yrn = {
        fontSize: 18,
        zvs: 145,
        knx: 202,
        kli: 20,
        rzu: 20,
        eyr: true
    };
    this.pqg.ftn = new rud(20, 205, 147, 227);
    this.pqg.tur = new rud(174, 205, 147, 227);
    this.pqg.uev = new rud(327, 205, 147, 227);
    this.pqg.yya = new rud(479, 205, 147, 227);
    this.pqg.abq = new rud(632, 205, 147, 227);
    this.pqg.hfa = new rud(810, 365, 140, 100);
    this.pqg.qxd = new rud(810, 165, 140, 100);
    this.pqg.xbm = new rud(50, 50, 700, 120);
    this.pqg.fontSize = 20;
    this.ebh.win = {
        aei: new rud(0, 30, 800, 600),
        fontSize: 16,
        jjw: 24,
        vse: 20,
        lineWidth: 1,
        gjb: new rud(),
        xbm: new rud(0, 530, 800, 40),
        gtx: [new rud(32, 20, 180, 20), new rud(452, 20, 180, 20), new rud(32, 100, 180, 20), new rud(452, 100, 180, 20), new rud(32, 180, 180, 20), new rud(452, 180, 180, 20), new rud(32, 260, 180, 20), new rud(452, 260, 180, 20), new rud(32, 340, 180, 20), new rud(452, 340, 180, 20), new rud(32, 420, 180, 20), ],
        che: [new rud(170, 40, 190, 50), new rud(590, 40, 190, 50), new rud(170, 120, 190, 50), new rud(590, 120, 190, 50), new rud(170, 200, 190, 50), new rud(590, 200, 190, 50), new rud(170, 280, 190, 50), new rud(590, 280, 190, 50), new rud(170, 360, 190, 50), new rud(590, 360, 190, 50), new rud(170, 440, 190, 50)]
    }
}
eqq.prototype = new tdx;
var wpb = {
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
    zlj: {
        ieu: 0,
        mih: 1,
        sfb: 2,
        cyz: 3,
        wln: 4,
        nln: 5,
        zvq: 10,
        sul: 11,
        idg: 12,
        cgt: 13,
        ddo: 14,
        nqq: 15,
        ntz: 16
    },
    os: {
        mjo: 0,
        edb: 1,
        zfe: 2,
        jzq: 3,
        ilv: 4
    },
    bnu: {
        rvu: 1,
        djc: 3,
        liz: 4,
        gon: 5,
        cxt: 7,
        ofs: 8,
        pbc: 11,
        jkq: 13,
        eqt: 14,
        ira: 6,
        tvg: 9,
        qrl: 10
    },
    bfx: {
        rxg: 1,
        bjv: 2,
        dzl: 4,
        vwt: 8,
        eos: 16,
        wth: 32
    },
    stq: {
        duy: 1,
        afv: 2,
        pio: 3,
        hpr: 4,
        tky: 5,
        dzu: 6,
        rys: 7,
        sil: 94,
        lgy: 95,
        zql: 96,
        toh: 97,
        yvm: 98,
        anf: 99,
        roulette: {
            wpq: 2,
            yth: 9,
            lne: 10
        }
    },
    ui: {
        vyu: "minimal",
        ykx: "modern",
        liz: "classic"
    },
    yca: {
        apz: "auto",
        qkp: "left",
        ohw: "right"
    },
    xkz: {
        jsl: 0,
        gxn: 4
    },
    lmb: {
        ink: {
            uhn: "ji",
            lfm: "jv",
            jqc: "jh"
        }
    },
    cnm: {
        cdi: {
            bgk: 1,
            dqn: 2
        },
        nxf: {
            qmw: 1,
            ubn: 2,
            iqj: 3
        }
    }
};
wpb.gwm = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += wpb.bfx.rxg
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += wpb.bfx.bjv
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += wpb.bfx.dzl
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += wpb.bfx.dzl
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += wpb.bfx.vwt
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.iyt = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.iyt();
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
            window.qvf = window.requestAnimationFrame;
            window.fzq = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.qvf; ++a) {
            window.qvf = window[g[a] + "RequestAnimationFrame"];
            window.fzq = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.qvf || !window.fzq) {
            window.qvf = function(l, i) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.fzq) {
            window.fzq = function(e) {
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
        console.error(c.stq)
    }
    return f
})();

function ujb() {
    var a = {};
    this.olv = 1;
    this.jtu = 1;
    this.nts = 0.6;
    this.inn = 0.4;
    this.yjn = function() {};
    this.tft = function(b, c) {
        a[b] = c
    };
    this.gic = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.olv
        }
    }
}

function ukk() {
    this.audio = {
        zdj: 65,
        sab: -1,
        value: "A",
        dax: null
    };
    this.jjd = {
        zdj: 70,
        sab: 122,
        value: "F",
        dax: "F11"
    };
    this.ztv = {
        zdj: 72,
        sab: -1,
        value: "H",
        dax: null
    };
    this.qsf = {
        zdj: 83,
        sab: -1,
        value: "S",
        dax: null
    };
    this.thn = {
        zdj: 68,
        sab: -1,
        value: "D",
        dax: null
    };
    this.ok = {
        zdj: 13,
        sab: -1,
        value: "OK",
        dax: null
    };
    this.tpp = [this.audio, this.jjd, this.ztv, this.qsf, this.thn, this.ok]
}

function qlj() {
    var o = this;
    this.fml = false;
    this.uus = null;
    this.aje = false;
    this.edd = false;
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
    this.yjn = function() {
        this.rfl();
        this.arn();
        this.aje = false;
        this.edd = false
    };
    this.rfl = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.uus = webAudioEngine.createGain();
            this.uus.connect(webAudioEngine.destination);
            this.fml = true
        } catch (p) {
            this.fml = false
        }
    };
    this.arn = function() {
        m = wpb.trp.kop()
    };
    this.twk = function(p) {
        l = p
    };
    this.nyf = function(p) {
        c = p
    };
    this.xkh = function(t, s, p, q) {
        var r = new sif(t);
        r.yjn(this.fml, s, p, l.gic(t));
        i[t] = r;
        k.push(r);
        d.push({
            vsu: r,
            ubu: q,
            heo: o.fxo,
            ehd: m
        })
    };
    this.lin = function(r, q) {
        var p = new Image();
        f[r] = p;
        d.push({
            vsu: p,
            ubu: q,
            heo: null
        })
    };
    this.bsp = function(q, p) {
        d.unshift({
            vsu: null,
            ubu: q,
            heo: o.fex,
            ues: p
        })
    };
    this.fkk = function() {
        n = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            o.mao(d.shift())
        }
    };
    this.start = function() {
        if (!o.aje) {
            return
        }
        o.aje = false;
        n = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var q = 0; q < j && d.length > 0; q++) {
            a.push(d.shift())
        }
        for (var p = 0; p < a.length; p++) {
            o.mao(a.shift())
        }
    };
    this.ebe = function() {
        b++;
        if (o.xsa()) {
            o.aje = true;
            wpb.onl.gly()
        }
    };
    this.ary = function() {
        o.uqn()
    };
    this.vup = function() {
        o.edd = true;
        o.uqn()
    };
    this.uqn = function() {
        b++;
        o.qpl();
        if (o.xsa()) {
            o.ydc()
        } else {
            o.xmu()
        }
    };
    this.qpl = function() {
        var p = wpb.onl.fwc.xpy("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (p) {
                p.fur(e)
            }
        }
    };
    this.ydc = function() {
        var q = wpb.onl.fwc.xpy("loading");
        if (o.edd) {
            wpb.onl.zlg(wpb.onl.language.zyg);
            var p = confirm(wpb.onl.language.nls);
            if (p == true) {
                wpb.onl.nmt = false;
                o.xqk();
                wpb.onl.bzk()
            } else {
                wpb.onl.ige({
                    type: "gameDataLoaded",
                    sender: wpb.onl.ipq,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                });
                setTimeout(wpb.onl.ltx, 1000)
            }
        } else {
            if (!wpb.onl.kdd) {
                e = 100;
                if (q) {
                    q.fur(e)
                }
                if (c === true) {
                    q.pcx()
                } else {
                    setTimeout(wpb.onl.bzk, 200)
                }
            }
        }
    };
    this.qyq = function() {
        return e
    };
    this.xmu = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].vsu instanceof Image || a[0].vsu instanceof sif)) {
                j = 30;
                for (var p = 0; p < j && d.length > 0; p++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            o.mao(a.shift())
        }
    };
    this.xsa = function() {
        return (g > 0 && b == g)
    };
    this.mao = function(p) {
        if (p.vsu instanceof Image) {
            if (n === true) {
                this.dxd(p.vsu, p.ubu)
            } else {
                this.dsf(p.vsu, p.ubu)
            }
        } else {
            if (p.vsu instanceof sif) {
                this.esz(p.vsu, p.ubu, p.heo, p.ehd)
            } else {
                this.ogh(p.ubu, p.ues, p.heo)
            }
        }
    };
    this.dxd = function(q, p) {
        q.onload = function() {
            wpb.onl.eze.ebe()
        };
        q.onerror = function() {
            console.error("can not load image " + p)
        };
        q.src = p + "?v=" + wpb.onl.xpe
    };
    this.dsf = function(q, p) {
        q.onload = function() {
            wpb.onl.eze.ary()
        };
        q.onerror = function() {
            console.error("can not load image " + p);
            wpb.onl.zlg(wpb.onl.language.fdg);
            setTimeout(wpb.onl.ltx, 3000)
        };
        q.src = p + "?v=" + wpb.onl.xpe
    };
    this.esz = function(q, r, s, p) {
        q.load(r, s, p)
    };
    this.ogh = function(s, p, t) {
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
            wpb.onl.zlg(wpb.onl.language.fdg);
            setTimeout(wpb.onl.ltx, 3000)
        };
        try {
            q.send()
        } catch (r) {
            console.error("can not load from " + s + p);
            wpb.onl.zlg(wpb.onl.language.fdg);
            setTimeout(wpb.onl.ltx, 3000)
        }
    };
    this.fxo = function(q, p) {
        i[q].jke = p
    };
    this.fex = function(r, q) {
        var p = new Image();
        p.onload = function() {
            o.bup(p, q.data)
        };
        p.onerror = function() {
            console.error("can not load image " + r + q.src);
            wpb.onl.zlg(wpb.onl.language.fdg);
            setTimeout(wpb.onl.ltx, 3000)
        };
        p.src = r + q.src + "?v=" + wpb.onl.xpe
    };
    this.bup = function(r, u) {
        var s = null,
            q = null;
        for (var t = 0, p = u.length; t < p; t++) {
            s = document.createElement("canvas");
            s.width = u[t].rect.w;
            s.height = u[t].rect.h;
            q = s.getContext("2d");
            q.drawImage(r, u[t].rect.x, u[t].rect.y, u[t].rect.w, u[t].rect.h, 0, 0, u[t].rect.w, u[t].rect.h);
            o.rcg(u[t].id, s)
        }
        wpb.onl.eze.ary()
    };
    this.qad = function(p) {
        if (i && i[p]) {
            return i[p]
        } else {}
        return null
    };
    this.rcg = function(q, p) {
        if (p && !f[q]) {
            f[q] = p
        } else {}
        return null
    };
    this.ilh = function(p) {
        if (f[p]) {
            return f[p]
        } else {}
        return null
    };
    this.gfj = function(p) {
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
    this.qnl = function(p) {
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
    this.wym = function(q, p) {
        if (i && i[q]) {
            i[q].play(p)
        } else {}
    };
    this.qys = function(p) {
        if (i && i[p]) {
            i[p].stop()
        } else {}
    };
    this.toj = function(q, p) {
        if (i && i[q]) {
            i[q].gcd(p)
        } else {}
    };
    this.xhf = function(s, q, r, p) {
        p = (p != null && p === true);
        if (i && i[s]) {
            i[s].cst(l.gic(s) * q, r, p)
        }
    };
    this.vrq = function(p) {
        if (i && i[p]) {
            return i[p].les()
        }
        return 0
    };
    this.pxg = function(p) {
        if (this.fml) {
            this.uus.gain.setValueAtTime(p, webAudioEngine.currentTime)
        }
    };
    this.odk = function(q) {
        if (this.fml) {
            this.uus.gain.setValueAtTime((q) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (k) {
                for (var p = 0; p < k.length; p++) {
                    k[p].gcd(q)
                }
            }
        }
    };
    this.xqk = function() {
        if (k) {
            for (var p = 0; p < k.length; p++) {
                k[p].clear()
            }
        }
        k = null;
        i = null
    }
}

function ppr() {
    this.tuc = {};
    this.qyn = {};
    this.len = [];
    this.yjn = function() {
        this.tuc = {};
        this.qyn = {};
        this.len = []
    };
    this.qaf = function(b) {
        this.tuc[b] = b
    };
    this.usx = function(f, e, d) {
        this.qyn[f] = e;
        this.qyn[f].rjo = [];
        if (d && this.tuc) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.tuc[d[c]]) {
                    this.qyn[f].rjo.push(d[c])
                } else {}
            }
        }
        this.len.push(this.qyn[f])
    };
    this.ysv = function() {
        var c = [];
        for (var d = 0, b = this.len.length; d < b; d++) {
            if (this.len[d] != null) {
                c.push(this.len[d])
            }
        }
        return c
    };
    this.xpy = function(b) {
        if (this.qyn && this.qyn[b]) {
            return this.qyn[b]
        }
        return null
    };
    this.vtm = function(g) {
        if (this.tuc && this.tuc[g]) {
            var d = [];
            for (var f = 0, b = this.len.length; f < b; f++) {
                for (var e = 0, c = this.len[f].rjo.length; e < c; e++) {
                    if (this.len[f].rjo[e] == g) {
                        d.push(this.len[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.rpl = function() {
        return this.tuc
    };
    this.jud = function(e) {
        var d = -1;
        if (this.qyn && this.qyn[e]) {
            for (var c = 0, b = this.len.length; c < b; c++) {
                if (this.len[c] == this.qyn[e]) {
                    d = c;
                    this.qyn[e] = null
                }
            }
        }
        if (d >= 0) {
            this.len.splice(d, 1)
        }
    };
    this.nfe = function(f) {
        if (this.tuc && this.tuc[f]) {
            this.tuc[f] = null;
            for (var e = 0, b = this.len.length; e < b; e++) {
                for (var d = 0, c = this.len[e].rjo.length; d < c; d++) {
                    if (this.len[e].rjo[d] == f) {
                        this.len[e].rjo.splice(d, 1)
                    }
                }
            }
        }
    };
    this.mgf = function(e, d, c, b) {
        return a(this.xpy(e), d, c, b)
    };
    this.hcl = function(f, d, c) {
        for (var e = 0, b = this.len.length; e < b; e++) {
            a(this.len[e], f, d, c)
        }
    };
    this.neu = function(k, l, f, e) {
        if (this.tuc && this.tuc[k]) {
            for (var g = 0, b = this.len.length; g < b; g++) {
                for (var d = 0, c = this.len[g].rjo.length; d < c; d++) {
                    if (this.len[g].rjo[d] == k) {
                        a(this.len[g], l, f, e)
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

function sif(b) {
    var a = this;
    this.gln = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.bvb = false;
    this.jke = null;
    this.cco = null;
    this.iil = 0;
    this.rfu = 0;
    this.erh = 0;
    this.qei = 0;
    this.fvy = 30000;
    this.tua = "";
    this.srt = "";
    this.jru = "";
    this.xjl = null;
    this.fyh = 1;
    this.xvh = 0;
    this.ovj = -1;
    this.dsj = 0;
    this.ltm = 0;
    this.vki = false;
    this.yjn = function(c, f, d, e) {
        this.bvb = c;
        if (e) {
            this.fyh = e;
            this.volume = e
        }
        if (f) {
            this.gln = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.bvb) {
            clearTimeout(this.ovj);
            if (this.jke) {
                this.volume = (this.muted === true) ? 0 : wpb.zan.value40 * this.fyh;
                this.vki = false;
                this.cco = webAudioEngine.createBufferSource();
                this.cco.buffer = this.jke;
                this.cco.loop = this.loop;
                this.iil = webAudioEngine.createGain();
                this.iil.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.cco.connect(this.iil);
                this.iil.connect(wpb.onl.eze.uus);
                this.cco.start(0, c);
                this.xvh = webAudioEngine.currentTime;
                if (this.gln) {
                    this.rfu = setTimeout(a.gln, a.jke.duration * 1000)
                }
            }
        } else {
            if (this.cco) {
                if (this.loop) {
                    if (wpb.trp.kag != wpb.zlj.wln && wpb.trp.kag != wpb.zlj.ddo) {
                        this.erh = setInterval(a.lix, a.cco.duration * 1000)
                    }
                }
                this.cco.currentTime = 0;
                this.cco.play()
            }
        }
    };
    this.lix = function() {
        if (!a.cco.paused || (wpb.trp.kag != wpb.zlj.sfb && wpb.trp.kag != wpb.zlj.idg)) {
            a.cco.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.bvb) {
                a.xvh = 0;
                if (a.cco) {
                    a.cco.stop(0);
                    a.cco = null
                }
                clearTimeout(a.rfu);
                if (a.ovj >= 0) {
                    clearTimeout(a.ovj);
                    a.ovj = -1
                }
            } else {
                if (a.cco) {
                    a.cco.currentTime = 0;
                    a.cco.pause();
                    clearInterval(a.erh);
                    if (a.ovj >= 0) {
                        clearTimeout(a.ovj);
                        a.ovj = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.tua = d[0];
        if (d.length >= 2) {
            this.srt = d[1];
            this.jru = e;
            this.xjl = c
        }
        e += this.tua + "?v=" + wpb.onl.xpe;
        if (this.bvb) {
            this.dgd(e, c)
        } else {
            this.rip(e)
        }
    };
    this.dky = function() {
        if (this.bvb) {
            this.dgd(this.jru + this.srt + "?v=" + wpb.onl.xpe, this.xjl)
        }
    };
    this.rip = function(c) {
        this.cco = new Audio();
        this.qei = setTimeout(function() {
            console.error("can not load audio " + c);
            wpb.onl.eze.vup()
        }, this.fvy);
        this.cco.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.qei);
            wpb.onl.eze.ary();
            a.bcj()
        }, false);
        this.cco.addEventListener("error", function() {
            clearTimeout(a.qei);
            console.error("can not load audio " + c);
            wpb.onl.eze.vup()
        }, false);
        this.cco.volume = wpb.zan.value40 * this.volume;
        this.cco.src = c;
        this.cco.load()
    };
    this.dgd = function(f, g) {
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
                wpb.onl.eze.ary()
            }, function() {
                a.xeq("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.xeq("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.xeq("can not load audio from ", f)
        }
    };
    this.xeq = function(d, c) {
        console.error(d + c);
        if (a.srt != "" && c.indexOf(a.srt) < 0) {
            a.dky()
        } else {
            wpb.onl.eze.vup()
        }
    };
    this.htd = function(c) {
        this.gln = c;
        this.bcj()
    };
    this.bcj = function() {
        if (!this.bvb) {
            if (this.gln) {
                if (this.cco) {
                    this.cco.addEventListener("ended", function() {
                        a.gln()
                    }, false)
                }
            }
            if (wpb.trp.kag == wpb.zlj.wln || wpb.trp.kag == wpb.zlj.ddo) {
                if (this.loop) {
                    if (this.cco) {
                        this.cco.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.epw = function() {
        if (!this.ess) {
            if (this.gln) {
                if (this.cco) {
                    this.cco.removeEventListener("ended", function() {
                        a.gln()
                    }, false)
                }
            }
            if (wpb.trp.kag == wpb.zlj.wln || wpb.trp.kag == wpb.zlj.ddo) {
                if (this.loop) {
                    if (this.cco) {
                        this.cco.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.cst = function(d, e, c) {
        if (this.bvb === true && this.iil) {
            this.volume = (this.muted === true) ? 0 : wpb.zan.value40 * d * this.fyh;
            if (e > 0) {
                this.iil.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.iil.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.ovj = setTimeout(this.stop, e)
            }
        } else {
            if (!this.bvb && c === true) {
                this.ovj = setTimeout(this.stop, e)
            }
        }
    };
    this.gcd = function(c) {
        this.muted = c;
        if (!this.bvb) {
            if (this.cco && this.cco.readyState > 0) {
                this.cco.muted = c
            }
        } else {
            if (this.iil) {
                this.iil.gain.linearRampToValueAtTime((this.muted === true) ? 0 : wpb.zan.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.bvb) {
            if (this.cco) {
                this.cco.stop(0);
                clearTimeout(this.rfu);
                this.cco = null
            }
        } else {
            if (this.cco && this.cco.readyState > 0) {
                this.cco.currentTime = 0;
                this.cco.pause();
                if (this.gln) {
                    this.epw(this.gln)
                }
                this.cco = null
            }
        }
    };
    this.les = function() {
        if (this.bvb && this.xvh > 0) {
            return (webAudioEngine.currentTime - this.xvh) % this.jke.duration
        }
        return 0
    }
}

function bpk() {
    var a = null;
    this.kvr = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.kvr = c;
        b = new WebSocket(this.kvr);
        b.onopen = function(d) {
            a.vgr(d)
        };
        b.onclose = function(d) {
            a.tda(d)
        };
        b.onmessage = function(d) {
            a.hnm(d)
        };
        b.onerror = function(d) {
            a.ikx(d)
        }
    };
    this.iyr = function(c) {};
    this.han = function(c) {
        b.send(c)
    };
    this.vgr = function(c) {
        this.han("A/u25vlt")
    };
    this.tda = function(c) {};
    this.hnm = function(c) {
        this.iyr(c.data)
    };
    this.ikx = function(c) {}
}

function npi() {
    var b = null;
    this.sgq = null;
    this.gwm = 0;
    this.pjf = -1;
    this.stq = -1;
    this.pld = -1;
    this.okn = 0;
    this.kvr = "";
    this.qhv = "";
    this.mvo = "";
    this.rxu = "";
    this.ipq = "";
    this.xpe = "";
    this.nye = "";
    this.nyk = "";
    this.tst = [];
    this.mwm = [];
    this.fjf = [];
    this.njj = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.yjn = function(i) {
        this.sgq = i;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.kvr);
        c.onopen = function(j) {
            b.vgr(j)
        };
        c.onclose = function(j) {
            b.tda(j)
        };
        c.onmessage = function(j) {
            b.hnm(j)
        };
        c.onerror = function(j) {
            b.ikx(j)
        }
    };
    this.dna = function(i) {
        var j = parseInt(i.charAt(this.okn), 16);
        this.okn++;
        return j
    };
    this.jpo = function(i) {
        var k = 0;
        var j = i.charAt(this.okn);
        j += i.charAt(this.okn + 1);
        this.okn += 2;
        k = parseInt(j, 16);
        return k
    };
    this.pqo = function(m) {
        var j = this.bsx(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.okn), 16);
            this.okn += 1
        }
        return n
    };
    this.bsx = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.okn), 16);
        this.okn++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.okn);
            this.okn += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.obm = function(i) {
        var j = "";
        if (this.okn < i.length) {
            j = i.substring(this.okn, i.length)
        }
        return j
    };
    this.iyr = function(i) {};
    this.idy = function(o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === wpb.lmb.ink.uhn || u === wpb.lmb.ink.lfm) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === wpb.lmb.ink.uhn && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.tst[p] = {
                                pgm: t[0],
                                value: Number(t[1]),
                                itx: t[2]
                            };
                            if (t.length >= 5) {
                                this.tst[p].pwu = t[3];
                                this.tst[p].olz = t[4]
                            }
                        }
                    } else {
                        if (u === wpb.lmb.ink.lfm && t.length >= 2) {
                            for (var p = 0, r = this.tst.length; p < r; p++) {
                                if (this.tst[p].pgm === t[0]) {
                                    this.tst[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === wpb.lmb.ink.uhn) {
                    s = [];
                    for (var p = 0, r = this.tst.length; p < r; p++) {
                        s.push({
                            pgm: this.tst[p].pgm,
                            value: (Number)(this.tst[p].pgm.split("_")[1])
                        })
                    }
                    s.sort(function(j, i) {
                        return j.value - i.value
                    });
                    for (var p = 0, r = this.tst.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.tst[p].pgm == s[n].pgm) {
                                this.tst[p].aei = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === wpb.lmb.ink.lfm) {
                        this.sgq.nbc(this.tst)
                    }
                }
            } else {
                if (u === wpb.lmb.ink.jqc) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            pgm: t[0],
                            value: Number(t[1]),
                            fmn: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.qhv = t[3];
                            q.fnt = t[4]
                        }
                        this.sgq.zzs(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.sgq.lrg.vfc()
        } else {
            b.han("A/u260");
            if (wpb.zan.value66 > 0) {
                setTimeout(b.nde, wpb.zan.value66)
            }
        }
    };
    this.mvl = function(i) {
        if (this.sgq.lrg.hdt) {
            setTimeout(function() {
                window.location.reload()
            }, i)
        } else {
            this.sgq.lrg.inl(e);
            setTimeout(function() {
                if (e < wpb.zan.value46) {
                    b.sgq.lrg.connect();
                    e++
                } else {
                    b.sgq.lrg.isw()
                }
            }, i)
        }
    };
    this.cwr = function() {
        return g
    };
    this.tye = function() {
        g = true;
        d = true;
        this.han("A/u260");
        if (wpb.zan.value66 > 0) {
            setTimeout(this.nde, wpb.zan.value66)
        }
    };
    this.cfl = function() {
        g = true;
        f = true;
        this.han("A/u260");
        if (wpb.zan.value66 > 0) {
            setTimeout(this.nde, wpb.zan.value66)
        }
    };
    this.vgr = function(i) {
        var j = -(new Date().getTimezoneOffset() / 60),
            m = window.navigator.userLanguage || window.navigator.language,
            l = (wpb.onl) ? wpb.trp.kag + "|" + wpb.onl.dmh + "|" + j + "|" + m : "",
            k = (wpb.onl && wpb.onl.qgb > 0) ? "," + wpb.onl.qgb : "";
        a = false;
        this.sgq.ltc();
        this.han("A/u25" + this.qhv + "," + this.mvo + "," + this.rxu + "," + this.ipq + "," + this.xpe + "," + this.nye + "," + this.nyk + "," + l + k)
    };
    this.tda = function(i) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (wpb.trp.kag == wpb.zlj.ieu || wpb.trp.kag == wpb.zlj.zvq) {
                setTimeout(b.bzd, 500)
            } else {
                this.sgq.ncu()
            }
        } else {
            if (d) {
                if (wpb.zan.value13 == true) {
                    this.sgq.lrg.ogj()
                } else {
                    this.sgq.lrg.eje()
                }
            } else {
                if (f) {
                    this.sgq.lrg.hor()
                } else {
                    this.sgq.lrg.ltx()
                }
            }
        }
    };
    this.hnm = function(i) {
        this.iyr(i.data)
    };
    this.ikx = function(i) {};
    this.han = function(i) {
        if (c.readyState >= 2) {
            this.tda()
        }
        this.gwm = 0;
		var tmpPar=':::{"gameData":"'+i+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"JokerPokerAM"}';i=tmpPar;
        c.send(i)
    };
    this.bzd = function() {
        b.sgq.ncu()
    };
    this.nde = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.tda()
    }
}

function brd() {
    this.lrg = null;
    this.rha = null;
    this.kvr = "";
    this.qhv = "";
    this.mvo = "";
    this.rxu = "";
    this.ipq = "";
    this.nye = "";
    this.nyk = "";
    this.ltc = function() {};
    this.hnm = function(a) {
        this.lrg.alx(a)
    };
    this.zvc = function() {};
    this.ncu = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.lrg != null && !this.rha.cwr()) {
            this.lrg.lmu("Can not connect to gaming server!", true)
        }
    };
    this.ikx = function(a) {
        if (this.rha.gwm == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.lrg != null) {
            this.lrg.ige({
                type: "gameDataLoaded",
                sender: this.lrg.ipq,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    success: false
                }
            });
            this.lrg.lmu(a, true)
        }
    };
    this.mvl = function(a) {
        this.rha.mvl(a)
    };
    this.sfg = function() {
        this.lrg.mcv(this.rha.fmn)
    };
    this.nbc = function(a) {
        this.lrg.nbc(a)
    };
    this.zzs = function(a) {
        this.lrg.zzs(a)
    };
    this.sze = function() {};
    this.xnj = function() {
        this.lrg.xnj()
    };
    this.fon = function() {
        this.lrg.fon()
    }
}

function hvu() {
    var b = null;
    this.lrg = null;
    this.kvr = "";
    this.qhv = "";
    this.mvo = "";
    this.rxu = "";
    this.ipq = "";
    this.xpe = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.lxa = true;
    this.mib = false;
    this.nju = false;
    this.okn = 0;
    this.gyb = 0;
    this.mfg = 0;
    this.yxx = 0;
    this.zmf = 0;
    this.yjn = function(f, g) {
        this.kvr = g;
        this.lrg = f;
        this.nju = false;
        return this
    };
    this.connect = function(g, j, i, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.qhv = j;
        this.mvo = i;
        this.rxu = k;
        this.ipq = g;
        this.xpe = f;
        this.lxa = true;
        this.mib = l;
        c = new WebSocket(this.kvr);
        c.onopen = function(m) {
            b.vgr(m)
        };
        c.onclose = function(m) {
            b.tda(m)
        };
        c.onmessage = function(m) {
            b.hnm(m)
        };
        c.onerror = function(m) {
            b.ikx(m)
        }
    };
    this.dna = function(f) {
        var g = parseInt(f.charAt(this.okn), 16);
        this.okn++;
        return g
    };
    this.bsx = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.okn), 16);
        this.okn++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.okn);
            this.okn += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.iyr = function(i) {
        var k = this.lrg.fwc.xpy("stats");
        if (i != null && i != "null" && i) {
            if (i == "010101010101010") {
                this.ehg()
            } else {
                this.okn = 0;
                this.pld = this.dna(i);
                if (this.pld == 0) {
                    var j = [];
                    j[0] = this.bsx(i);
                    j[1] = this.bsx(i);
                    j[2] = this.bsx(i);
                    j[3] = this.bsx(i);
                    j[4] = this.bsx(i);
                    j[5] = this.bsx(i);
                    j[6] = this.bsx(i);
                    if (wpb.zan.value36) {
                        this.mfg = j[0];
                        this.yxx = j[1];
                        this.zmf = j[2]
                    } else {
                        if (wpb.zan.value37) {
                            var g = wpb.zan.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.mib) ? 100 : g * 60000 : (g - f) * 60000;
                            this.gyb = j[3] * 60000;
                            this.yxx = j[5];
                            this.zmf = j[6];
                            this.lrg.zmw(f);
                            if (!this.nju) {
                                this.nju = true;
                                this.lrg.elz(j[3] * 60000)
                            }
                            if (this.mib) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.mib) {
                        if (k) {
                            k.pvf(this.mfg, this.yxx, this.zmf, this.gyb)
                        }
                    }
                } else {
                    console.error("Statistic error: " + i);
                    if (!this.mib) {
                        if (k) {
                            k.pvf(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.ehg = function() {
        this.han("A/u270," + this.ipq)
    };
    this.han = function(f) {
        if (c && !e) {
            this.gwm = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.lxa = f;
        if (c && c.readyState >= 2) {
            if (this.lrg && this.lxa) {
                this.lrg.lxa()
            }
        } else {
            this.han("A/u260");
            if (wpb.zan.value66 > 0) {
                setTimeout(this.nde, wpb.zan.value66)
            }
        }
        e = true
    };
    this.vgr = function(f) {
        a = false;
        this.han("A/u25" + this.qhv + "," + this.mvo + "," + this.rxu + "," + d + "," + this.xpe)
    };
    this.tda = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.mib) {
                if (this.lrg && this.lxa) {
                    this.lrg.lxa()
                }
            }
        }
    };
    this.hnm = function(f) {
        this.iyr(f.data)
    };
    this.ikx = function(f) {};
    this.nde = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.tda()
    }
}

function rud(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.dcl = function() {
        return this.x + this.width
    };
    this.crz = function() {
        return this.y + this.height
    };
    this.fwl = function() {
        return this.x + this.width / 2
    };
    this.rks = function() {
        return this.y + this.height / 2
    };
    this.tru = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.kng = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function xzk() {
    this.kag = -1;
    this.key = -1;
    this.tsi = false;
    this.yfa = false;
    this.chz = false;
    this.usd = false;
    this.sjk = false;
    this.bqd = false;
    this.ybq = false;
    this.fgu = true;
    this.pxh = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.tsi = true;
            this.chz = true;
            this.kag = wpb.zlj.sfb
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.chz = true
                }
                this.kag = wpb.zlj.nln
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.kag = wpb.zlj.idg;
                        this.chz = true
                    } else {
                        this.kag = wpb.zlj.sfb
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.kag = wpb.zlj.ntz;
                                this.chz = true
                            } else {
                                this.kag = wpb.zlj.sul;
                                this.chz = true;
                                this.usd = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.sjk = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.bqd = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.kag = wpb.zlj.mih
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.kag = wpb.zlj.cyz
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.kag = wpb.zlj.nqq;
                                    this.chz = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.kag = wpb.zlj.ddo;
                                        this.chz = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.kag = wpb.zlj.ddo;
                                            this.chz = true
                                        } else {
                                            this.kag = wpb.zlj.wln
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.kag = wpb.zlj.sul;
                                    this.yfa = true;
                                    this.chz = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.kag = wpb.zlj.sul;
                                        this.yfa = true;
                                        this.chz = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.kag = wpb.zlj.zvq;
                                            this.chz = true
                                        } else {
                                            this.kag = wpb.zlj.ieu
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
    this.qlq = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.caf = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.key = wpb.os.mjo;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.ybq = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.key = wpb.os.jzq
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.key = wpb.os.zfe
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.key = wpb.os.ilv;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.fgu = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.key = wpb.os.edb
                        }
                    }
                }
            }
        }
    };
    this.vjz = function() {
        return this.bqd
    };
    this.pjr = function() {
        return (this.sjk && !this.bqd)
    };
    this.hgg = function() {
        return this.usd
    };
    this.gle = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.kfq = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.cxy = function() {
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
    this.pxm = function() {
        return (this.xub() === true)
    };
    this.xub = function() {
        if ((screen.width <= wpb.zan.value73.w && screen.height <= wpb.zan.value73.h) || (screen.height <= wpb.zan.value73.w && screen.width <= wpb.zan.value73.h)) {
            return true
        }
        return false
    };
    this.jfh = function(i, j, k, n, e, b, f, l, m, a, d, g) {
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
    this.cin = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.nki = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.mcw = function() {
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
    this.xkg = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.sug = function(b) {
        try {
            if (this.xkg() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.ysa = function() {
        try {
            if (this.xkg() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.sya = function() {
        return false
    };
    this.ige = function(a) {
        if (wpb.zan.value77 !== undefined && wpb.zan.value77) {
            if (a !== null && a !== undefined) {
                window.parent.postMessage(a, "*")
            }
        }
    };
    this.pug = function(c, a) {
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
    this.kop = function() {
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
    this.vio = function(q, o, f, l, k, a, p, d, r, g, n, j) {
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
    this.lye = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
    this.oub = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
    this.aaj = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.sbn = function(m, g, d, a, j, b, k, l, f) {
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
    this.paj = function(n, i, f, a, k, c, m, b, l, g, o) {
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
    this.jsv = function(o, d, k, j, n, l, f, p, q, g, m, c) {
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
    this.uhd = function(q, j, g, b, m, p, l, d, f, o, a, n, i, r) {
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
    this.ueq = function(m, g, d, a, j, k, b, l, f, n) {
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
    this.jau = function(k, g, d, c, i, a, j, f, l) {
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

function biu() {
    this.parent = null;
    this.context2D = null;
    this.upi = null;
    this.rzg = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.dks = true;
    this.fpy = false;
    this.yjn = function(a, d, c) {
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
                this.upi = document.createElement("canvas");
                this.upi.width = this.width;
                this.upi.height = this.height;
                this.context2D = this.upi.getContext("2d");
                if (c) {
                    this.rzg = c
                }
            }
            this.fpy = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.aqq = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.upi) {
                this.upi.width = this.width;
                this.upi.height = this.height
            }
            this.fpy = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.pzz = function(a) {};
    this.rmt = function(a) {};
    this.kwl = function(a, b) {
        this.dks = a;
        if (b && b === true) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.qdz = function() {
        return (this.dks && !this.fpy)
    };
    this.fur = function() {}
}

function rbb() {
    this.nhh = null;
    this.qqv = null;
    this.bdd = -1;
    this.tnd = -1;
    this.koe = false;
    this.uah = false;
    this.xci = false;
    this.ona = 0;
    this.yvv = 0;
    var a = 200;
    this.yjn = function(c, f, d, b, e) {
        this.nhh = b;
        this.qqv = e;
        rbb.prototype.yjn.call(this, c, f, d)
    };
    this.lyt = function(b, d, c) {
        this.koe = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.qdz()) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
        if (this.koe === true && c === true) {
            clearTimeout(this.ona);
            this.ona = setTimeout(this.frl, a)
        }
    };
    this.sxn = function() {
        return this.koe
    };
    this.znu = function(b, c) {
        this.xci = b;
        c = (c === false) ? false : true;
        clearTimeout(this.yvv);
        if (this.xci === true && c === true) {
            this.yvv = setTimeout(this.awm, a)
        }
    };
    this.mhg = function() {
        return this.xci
    };
    this.zbu = function(b, c) {
        this.qqv = b;
        if (c && c === true && this.qdz()) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.dxj = function(b) {
        this.uah = b
    };
    this.wek = function() {
        return this.uah
    };
    this.ett = function() {};
    this.awm = function() {};
    this.frl = function() {}
}
rbb.prototype = new biu;

function lao() {
    var a = this;
    this.xve = null;
    this.value = "";
    this.uzb = false;
    this.gkc = "round";
    this.wxm = null;
    this.zxl = "bold";
    this.tgy = null;
    this.apc = null;
    this.uzv = null;
    this.juy = null;
    this.hsw = null;
    this.mqm = 0;
    this.eau = 6;
    this.pwb = -2;
    this.fpc = 2;
    this.ozq = -4;
    this.eaq = 8;
    this.yxd = 26;
    this.koq = 0;
    this.uth = 1;
    this.ygl = 0;
    this.vzt = 0;
    this.yoi = -1;
    this.gzr = 10;
    this.nhw = 0;
    this.rfv = 0;
    this.mqk = false;
    this.epp = -1;
    this.hty = true;
    this.yjn = function(d, g, e, c, b, f) {
        lao.prototype.yjn.call(this, d, g, e, c, f);
        this.xve = b;
        if (this.nhh) {
            this.mqm = Math.round(this.nhh.height / 2)
        }
    };
    this.pzz = function(b) {
        try {
            this.gkc = b.kke;
            this.wxm = b.font;
            this.zxl = b.ovs;
            this.tgy = b.backgroundColor;
            this.apc = b.dch;
            this.uzv = b.lda;
            this.juy = b.rzh;
            if (b.borderColor && b.mqp) {
                this.hsw = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.hsw.addColorStop(0, b.borderColor);
                this.hsw.addColorStop(1, b.mqp)
            } else {
                this.hsw = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.rmt = function(b) {
        try {
            this.yxd = b.wdt;
            this.koq = b.obv;
            this.eau = b.oul;
            this.pwb = b.bth;
            this.fpc = b.jpi;
            this.ozq = b.yxs;
            this.eaq = b.pbk;
            this.uth = b.ihx
        } catch (c) {
            console.error(c)
        }
    };
    this.lvw = function() {
        if (this.vsd()) {
            clearInterval(this.epp);
            this.epp = -1
        }
        this.hty = false;
        this.epp = setInterval(this.pkx, 400)
    };
    this.sku = function() {
        this.hty = true;
        clearInterval(this.epp);
        this.epp = -1;
        this.xkl(false)
    };
    this.xkl = function(b, c) {
        this.mqk = b;
        c = (c === false) ? false : true;
        if (c === true && this.qdz() === true) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.vsd = function() {
        return (this.epp >= 0)
    };
    this.xhx = function(b, c) {
        this.value = b;
        if (c && c === true && this.qdz()) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.gvg = function(b) {
        this.ygl = Math.round(b / this.gzr);
        this.nhw = 0;
        this.rfv = 0;
        this.vzt = new Date().getTime();
        this.yoi = setTimeout(this.tts, this.ygl)
    };
    this.svo = function() {
        if (a.yoi >= 0) {
            clearTimeout(a.yoi);
            a.yoi = -1
        }
        a.nhw = 0;
        a.frl()
    };
    this.nvm = function() {
        if (a.yoi >= 0) {
            clearInterval(a.yoi);
            a.yoi = -1
        }
        a.nhw = 1;
        a.frl()
    };
    this.tts = function() {
        var b = 0,
            c = new Date().getTime();
        a.rfv += 1;
        if (a.rfv < a.gzr) {
            a.nhw += 1 / a.gzr;
            a.parent.fur(a.x, a.y, a.width, a.height);
            b = a.ygl + (a.rfv * a.ygl - (c - a.vzt));
            a.yoi = setTimeout(a.tts, b)
        } else {
            a.nvm()
        }
    };
    this.fur = function() {
        if (!this.qdz()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.uth,
            d = (this.gkc === "roundedT" || this.gkc === "roundedL") ? this.eaq : 0,
            b = (this.gkc === "roundedT" || this.gkc === "roundedR") ? this.eaq : 0,
            o = (this.gkc === "roundedB" || this.gkc === "roundedR") ? this.eaq : 0,
            q = (this.gkc === "roundedB" || this.gkc === "roundedL") ? this.eaq : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.mqk || this.nhw >= 1) {
            if (this.gkc === "round") {
                wpb.trp.jau(p, this.x + this.width / 2, this.y + this.height / 2, l, this.apc, 1, this.hsw, this.uth, 1)
            } else {
                if (this.gkc === "rect") {
                    wpb.trp.sbn(p, this.x, this.y, this.width, this.height, this.eaq, this.apc, this.hsw, this.uth)
                } else {
                    if (this.gkc === "roundedT" || this.gkc === "roundedB" || this.gkc === "roundedR" || this.gkc === "roundedL") {
                        wpb.trp.uhd(p, this.x, this.y, this.width, this.height, d, b, o, q, this.apc, 1, this.hsw, this.uth, 1)
                    }
                }
            }
            if (this.xve || this.nhh) {
                if (this.sxn()) {
                    p.drawImage((this.xve) ? this.xve : this.nhh, 0, this.mqm, this.nhh.width, this.mqm, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.xve) ? this.xve : this.nhh, 0, 0, this.nhh.width, this.mqm, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.uzb && this.wek() === false) {
                p.globalAlpha = 0.5
            }
            if (this.nhw > 0) {
                if (this.gkc === "round") {
                    wpb.trp.jau(p, this.x + this.width / 2, this.y + this.height / 2, l, this.tgy, 1 - this.rfv / this.gzr, this.hsw, this.uth, 1);
                    wpb.trp.jau(p, this.x + this.width / 2, this.y + this.height / 2, l, this.apc, this.rfv / this.gzr)
                } else {
                    if (this.gkc === "rect") {
                        jkn = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        jkn.addColorStop(1 - this.nhw, this.tgy);
                        jkn.addColorStop(1 - this.nhw, this.apc);
                        wpb.trp.paj(p, this.x, this.y, this.width, this.height, this.eaq, jkn, 1, this.hsw, this.uth, 1)
                    } else {
                        if (this.gkc === "roundedT" || this.gkc === "roundedB" || this.gkc === "roundedR" || this.gkc === "roundedL") {
                            jkn = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            jkn.addColorStop(1 - this.nhw, this.tgy);
                            jkn.addColorStop(1 - this.nhw, this.apc);
                            wpb.trp.uhd(p, this.x, this.y, this.width, this.height, d, b, o, q, jkn, 1, this.hsw, this.uth, 1)
                        }
                    }
                }
            } else {
                if (this.gkc === "round") {
                    wpb.trp.jau(p, this.x + this.width / 2, this.y + this.height / 2, l, this.tgy, 1, this.hsw, this.uth, 1)
                } else {
                    if (this.gkc === "rect") {
                        wpb.trp.sbn(p, this.x, this.y, this.width, this.height, this.eaq, this.tgy, this.hsw, this.uth)
                    } else {
                        if (this.gkc === "roundedT" || this.gkc === "roundedB" || this.gkc === "roundedR" || this.gkc === "roundedL") {
                            wpb.trp.uhd(p, this.x, this.y, this.width, this.height, d, b, o, q, this.tgy, 1, this.hsw, this.uth, 1)
                        }
                    }
                }
            }
            if (this.nhh) {
                if (this.sxn()) {
                    p.drawImage(this.nhh, 0, this.mqm, this.nhh.width, this.mqm, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.nhh, 0, 0, this.nhh.width, this.mqm, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.koq > 0) {
            f = (this.sxn()) ? 2 : 0;
            c = this.koq;
            p.font = this.zxl + " " + c + "px " + this.wxm;
            p.fillStyle = this.juy;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.eau) {
                e = ((this.width - 2 * this.eau) / n);
                c = Math.round(e * c) - 1;
                p.font = this.zxl + " " + c + "px " + this.wxm
            }
            if (c > this.height / 2 - this.eau) {
                e = ((this.height / 2 - this.eau) / c);
                c = Math.round(e * c) - 1;
                p.font = this.zxl + " " + c + "px " + this.wxm
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.pwb, this.y - this.ozq + k + f)
        }
        if (this.qqv && this.qqv != "" && this.yxd > 0) {
            g = this.qqv.split("|");
            f = (this.sxn()) ? 2 : 0;
            c = this.yxd;
            p.font = this.zxl + " " + c + "px " + this.wxm;
            p.fillStyle = this.uzv;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.eau) {
                e = ((this.width - 2 * this.eau) / n);
                c = Math.round(e * c) - 1;
                p.font = this.zxl + " " + c + "px " + this.wxm
            }
            if (this.koq > 0) {
                if (c * g.length > this.height / 2 - this.eau) {
                    e = ((this.height / 2 - this.eau) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.zxl + " " + c + "px " + this.wxm
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.eau) {
                    e = ((this.height - 2 * this.eau) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.zxl + " " + c + "px " + this.wxm
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.pwb, this.y - this.fpc + k + f);
                k += c
            }
        }
        p.restore();
        if (this.rzg && this.upi) {
            this.rzg.drawImage(this.upi, this.x, this.y)
        }
    };
    this.pkx = function() {
        if (!a.hty) {
            a.xkl(!a.mqk)
        }
    };
    this.awm = function() {
        a.xci = false
    };
    this.frl = function() {
        a.koe = false;
        if (a.qdz()) {
            a.parent.fur(a.x, a.y, a.width, a.height)
        }
    }
}
lao.prototype = new rbb;

function hlw() {
    this.wbj = 0;
    this.jbz = [];
    this.yjn = function(a, c, b) {
        hlw.prototype.yjn.call(this, a, c, b);
        this.wbj = 0;
        this.jbz = []
    };
    this.kky = function(a, b) {
        if (b && b === true) {
            this.jbz.unshift(a)
        } else {
            this.jbz.push(a)
        }
    };
    this.rnk = function(a) {
        if (a && a === true) {
            this.jbz.shift()
        } else {
            this.jbz.pop()
        }
    };
    this.zqq = function(a) {
        this.wbj = a
    };
    this.bkd = function() {
        return this.wbj
    };
    this.fur = function() {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        if (this.wbj < this.jbz.length) {
            this.jbz[this.wbj].fur()
        }
        try {
            if (this.rzg && this.upi) {
                this.rzg.drawImage(this.upi, this.x, this.y)
            }
        } catch (a) {}
    }
}
hlw.prototype = new biu;

function vdk() {
    var a = this;
    this.ohh = null;
    this.wbj = 0;
    this.jbz = [];
    this.tgy = null;
    this.uay = null;
    this.lfx = null;
    this.gsx = new rud();
    this.yjn = function(b, d, c) {
        vdk.prototype.yjn.call(this, b, d, c);
        this.dks = false;
        this.wbj = 0;
        this.jbz = [];
        this.dff()
    };
    this.dff = function() {
        this.ohh = new ppr();
        this.ohh.yjn();
        this.ohh.qaf("buttons")
    };
    this.rmt = function(f) {
        try {
            var d = this.ohh.vtm("buttons"),
                c = 0,
                b = d.length;
            this.gsx = f.rgt;
            for (; c < b; c++) {
                d[c].rmt(f.dya)
            }
            this.ohh.mgf("return", "#aqq", [f.qls]);
            this.ohh.mgf("page", "#aqq", [f.yqn]);
            this.ohh.mgf("prev", "#aqq", [f.xnc]);
            this.ohh.mgf("next", "#aqq", [f.ccg])
        } catch (g) {
            console.error(g)
        }
    };
    this.pzz = function(d) {
        try {
            var f = this.ohh.vtm("buttons");
            this.tgy = d.backgroundColor;
            this.uay = d.wli;
            this.lfx = d.thz;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].pzz((this.parent.bnu.yaz === false) ? d.lcf : (this.parent.dmh === wpb.bnu.ira) ? d.qfq : d.spa)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.qwn = function(m, l) {
        var k = this.ohh.vtm("buttons"),
            g = this.ohh.xpy("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.qdz() == true) {
                if (b.wek() && !b.mhg()) {
                    if (b != g) {
                        b.lyt(true, true)
                    }
                    this.parent.eze.qys("btn");
                    this.parent.eze.wym("btn");
                    b.ett();
                    for (var d = 0; d < f; d++) {
                        k[d].znu(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.vtx = function() {
        var e = this.ohh.vtm("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.sxn() === true) {
                c.lyt(false, true);
                return true
            }
        }
        return false
    };
    this.szu = function(k) {
        var g = this.ohh.vtm("buttons"),
            c = this.ohh.xpy("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.bdd) {
                if (d.wek() && !d.mhg()) {
                    if (d != c) {
                        d.lyt(true, true)
                    }
                    this.parent.eze.qys("btn");
                    this.parent.eze.wym("btn");
                    d.ett();
                    for (var e = 0; e < b; e++) {
                        g[e].znu(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.bjz = function() {
        var e = this.ohh.vtm("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.sxn() === true) {
                c.lyt(false, true);
                return true
            }
        }
        return false
    };
    this.kky = function(b, c) {
        if (c && c === true) {
            this.jbz.unshift(b);
            this.wbj++
        } else {
            this.jbz.push(b)
        }
    };
    this.rnk = function(b) {
        if (b && b === true) {
            this.jbz.shift();
            this.wbj--
        } else {
            this.jbz.pop()
        }
    };
    this.qnh = function() {
        return this.jbz.length
    };
    this.kvz = function(e, c, b) {
        var d = (this.parent.bnu.yaz === false) ? c.lcf : (this.parent.dmh === wpb.bnu.ira) ? c.qfq : c.spa;
        if (this.parent.szo === false) {
            this.ohh.usx("return", this.riu(e.qls, this.parent.language.ret, (this.parent.bnu.hhh === false) ? b : this.parent.eze.ilh("btn_re"), this.xel, (this.parent.rvw.ivp) ? this.parent.rvw.ivp : null, e.dya, d), ["buttons"]);
            this.ohh.usx("page", this.riu(e.yqn, (this.wbj + 1) + "/" + this.jbz.length, b, this.oex, null, e.dya, d), ["buttons"]);
            this.ohh.usx("prev", this.riu(e.xnc, this.parent.language.umo, (this.parent.bnu.hhh === false) ? b : this.parent.eze.ilh("btn_pr"), this.xua, (this.parent.rvw.xpv) ? this.parent.rvw.xpv : null, e.dya, d), ["buttons"]);
            this.ohh.usx("next", this.riu(e.ccg, this.parent.language.fxi, (this.parent.bnu.hhh === false) ? b : this.parent.eze.ilh("btn_ne"), this.oex, (this.parent.rvw.vcw) ? this.parent.rvw.vcw : null, e.dya, d), ["buttons"])
        }
    };
    this.riu = function(g, j, b, i, d, f, e) {
        var c = new lao();
        c.yjn(g, this.context2D, null, b, null, j);
        c.parent = this;
        c.ett = i;
        c.rmt(f);
        c.pzz(e);
        if (d) {
            c.bdd = d.zdj
        }
        return c
    };
    this.fur = function(l, j, m, e) {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.ohh.vtm("buttons"),
            d = null;
        if (this.parent.bnu.yaz === false) {
            d = this.parent.eze.ilh("btn_back")
        } else {
            if (this.parent.dmh === wpb.bnu.ira) {
                d = (this.parent.eze.ilh("h_right" + this.wbj) != null) ? this.parent.eze.ilh("h_right" + this.wbj) : this.parent.eze.ilh("h_right")
            } else {
                d = (this.parent.eze.ilh("h_left" + this.wbj) != null) ? this.parent.eze.ilh("h_left" + this.wbj) : this.parent.eze.ilh("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.wbj >= 0 && this.wbj < this.jbz.length) {
            this.jbz[this.wbj].fur()
        }
        if (d) {
            k = n.createLinearGradient(this.gsx.x, this.gsx.y, this.gsx.x + this.gsx.width, this.gsx.y);
            k.addColorStop(0.2, this.uay);
            k.addColorStop(1, this.lfx);
            n.fillStyle = k;
            n.save();
            if (this.parent.bnu.yaz === false) {
                if (this.parent.dmh === wpb.bnu.tvg) {
                    n.translate(this.gsx.width / 2, this.gsx.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.gsx.width / 2, -this.gsx.height / 2)
                }
                n.fillRect(this.gsx.x, this.gsx.y, this.gsx.width, this.gsx.height)
            }
            n.drawImage(d, this.gsx.x, this.gsx.y, this.gsx.width, this.gsx.height);
            n.restore()
        } else {
            if (this.tgy != null) {
                n.fillStyle = this.tgy;
                n.fillRect(this.gsx.x, this.gsx.y, this.gsx.width, this.gsx.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].fur()
        }
        n.restore();
        if (this.rzg && this.upi) {
            if (b) {
                this.rzg.drawImage(this.upi, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.rzg.drawImage(this.upi, this.x, this.y)
            }
        }
    };
    this.fyi = function(f, g) {
        var e = this.ohh.xpy("page"),
            c = this.ohh.xpy("return"),
            b = this.ohh.xpy("next"),
            d = this.ohh.xpy("prev");
        if (e != null) {
            e.zbu((this.wbj + 1) + "/" + this.jbz.length)
        }
        if (c != null) {
            c.kwl(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.jbz.length > 1) {
                    b.kwl(f);
                    d.kwl(f);
                    e.kwl(f)
                } else {
                    b.kwl(false);
                    d.kwl(false);
                    e.kwl(false)
                }
            } else {
                b.kwl(f);
                d.kwl(f);
                e.kwl(f)
            }
        }
        if (g && g === true) {
            this.fur()
        }
    };
    this.lpj = function() {
        this.wbj = 0;
        this.fyi(true);
        this.kwl(true, true)
    };
    this.gyp = function() {
        this.fyi(false);
        this.kwl(false, true)
    };
    this.luf = function() {
        var d = this.ohh.xpy("page"),
            b = this.ohh.xpy("next"),
            c = this.ohh.xpy("prev");
        this.wbj = (this.wbj < this.jbz.length) ? this.wbj : this.jbz.length - 1;
        this.wbj = (this.wbj < 0) ? 0 : this.wbj;
        d.zbu((this.wbj + 1) + "/" + this.jbz.length, true);
        if (this.jbz.length == 1) {
            b.kwl(false);
            c.kwl(false);
            d.kwl(false)
        } else {
            b.kwl(true);
            c.kwl(true);
            d.kwl(true)
        }
    };
    this.bab = function(c) {
        var e = this.ohh.vtm("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].dxj(c)
        }
    };
    this.xel = function() {
        a.parent.hch()
    };
    this.oex = function() {
        var b = a.ohh.xpy("page");
        if (a.wbj < a.jbz.length - 1) {
            a.wbj++
        } else {
            a.wbj = 0
        }
        if (b) {
            b.zbu((a.wbj + 1) + "/" + a.jbz.length, false)
        }
        a.fur()
    };
    this.xua = function() {
        var b = a.ohh.xpy("page");
        if (a.wbj > 0) {
            a.wbj--
        } else {
            a.wbj = a.jbz.length - 1
        }
        if (b) {
            b.zbu((a.wbj + 1) + "/" + a.jbz.length, false)
        }
        a.fur()
    }
}
vdk.prototype = new biu;

function nwt() {
    this.nhh = new Image();
    this.itx = null;
    this.ccp = [];
    this.meq = [];
    this.xyp = null;
    this.wxm = null;
    this.zxl = "bold";
    this.fnz = null;
    this.uzv = null;
    this.bfc = null;
    this.ajj = 0;
    this.xqy = [];
    this.gbn = null;
    this.jjz = 40;
    this.owy = 18;
    this.jey = 1;
    this.yjn = function(b, d, c, a) {
        this.nhh = a;
        this.ccp = [];
        this.xqy = [];
        nwt.prototype.yjn.call(this, b, d, c)
    };
    this.rmt = function(a) {
        try {
            this.gbn = a.gjb;
            this.xqy = a.che;
            this.owy = a.fontSize;
            this.jjz = a.jjw;
            this.jey = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.pzz = function(a) {
        try {
            this.xyp = a.ofp;
            this.wxm = a.font;
            this.zxl = a.ovs;
            this.fnz = a.puq;
            this.uzv = a.lda;
            this.bfc = a.yjs
        } catch (b) {
            console.error(b)
        }
    };
    this.fur = function() {
        if (!this.qdz()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.uzv;
        if (this.fnz) {
            b.strokeStyle = this.fnz
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.jey;
        b.font = this.zxl + " " + this.owy + "px " + this.wxm;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.nhh, 0, 0);
        if ((this.height - this.nhh.height) > 0) {
            var a = this.parent.gsx;
            b.drawImage(this.nhh, a.x, a.y, a.width, this.nhh.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.itx && this.gbn) {
            wpb.trp.vio(b, this.itx, this.bfc, this.gbn.x, this.gbn.y, this.gbn.width, this.gbn.height, this.xyp, this.jjz, this.zxl)
        }
        for (var c = 0; c < this.ccp.length; c++) {
            this.aaj(this.ccp[c], this.xqy[c], this.owy, this.wxm)
        }
        b.restore();
        if (this.rzg && this.upi) {
            this.rzg.drawImage(this.upi, this.x, this.y)
        }
    };
    this.lab = function(j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.meq = [];
        b.save();
        b.font = this.zxl + " " + g + "px " + d;
        this.tio(b, g, j, f, d);
        for (var e = 0, a = this.meq.length; e < a; e++) {
            c = (f.height + this.ajj) / (this.meq.length + 1) * (e + 1);
            b.fillText(this.meq[e], (f.x), f.y + c);
            if (this.fnz != null && b.lineWidth >= 1) {
                b.strokeText(this.meq[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.aaj = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.meq = [];
        a.save();
        a.font = this.zxl + " " + f + "px " + c;
        this.tio(a, f, g, e, c);
        for (var d = 0; d < this.meq.length; d++) {
            b = (e.height + this.ajj) / (this.meq.length + 1) * (d + 1);
            a.fillText(this.meq[d], (e.x + e.width / 2), e.y + b);
            if (this.fnz != null && a.lineWidth >= 1) {
                a.strokeText(this.meq[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.tio = function(m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.ajj = o;
        if (this.ajj * n > g.height) {
            a = g.height / (this.ajj * n);
            this.ajj = Math.round(a * this.ajj) - 1;
            m.font = this.zxl + " " + this.ajj + "px " + b;
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
                this.meq[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.meq[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.meq[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
nwt.prototype = new biu;

function equ() {
    var a = this;
    this.nhh = new Image();
    this.hdf = "";
    this.cek = "";
    this.wfc = -1;
    this.sqf = 0;
    this.xzc = 0;
    this.bja = 5000;
    this.wxm = null;
    this.zxl = "bold";
    this.uzv = null;
    this.tgy = null;
    this.mxo = null;
    this.eaq = 0;
    this.ejw = 0;
    this.eau = 0;
    this.uth = 0;
    this.ptu = 0;
    this.owy = 0;
    this.qiu = null;
    this.eup = 0;
    this.vgc = [];
    this.zqh = 0;
    this.zbh = true;
    this.syx = 0;
    this.rmt = function(b) {
        try {
            this.owy = b.fontSize;
            this.ptu = b.xsm;
            this.eaq = b.pbk;
            this.ejw = b.xpz;
            this.eau = b.oul;
            this.uth = b.ihx
        } catch (c) {
            console.error(c)
        }
    };
    this.pzz = function(b) {
        try {
            this.wxm = b.font;
            this.zxl = b.ovs;
            this.tgy = b.backgroundColor;
            this.uzv = b.lda;
            this.mxo = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.drw = function(e, c, d, b) {
        this.hdf = e;
        this.cek = c;
        this.wfc = d;
        this.sqf = b;
        this.zbh = true;
        clearTimeout(this.syx);
        if (this.qdz() === true) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.ubq = function(b, c) {
        this.hdf = b;
        this.cek = undefined;
        this.zbh = c;
        if (this.zbh) {
            clearTimeout(this.syx)
        }
        if (this.qdz() === true) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.gyg = function() {
        this.hdf = "";
        this.cek = undefined;
        this.zbh = true;
        clearTimeout(this.syx);
        if (this.qdz() === true) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.xml = function(b, c) {
        this.eup = 0;
        this.zqh = b;
        this.zbh = false;
        if (c && c > 0) {
            this.syx = setTimeout(this.cil, c)
        } else {
            this.syx = setTimeout(this.cil, this.bja)
        }
    };
    this.dhe = function(b) {
        this.eup = 0;
        this.zqh = b;
        if (this.zbh) {
            this.ubq(this.vgc[this.zqh][this.eup], false)
        }
        this.zbh = false;
        this.syx = setTimeout(this.cil, this.bja)
    };
    this.muj = function() {
        this.zbh = false;
        this.syx = setTimeout(this.cil, this.bja)
    };
    this.xji = function() {
        this.zbh = true;
        clearTimeout(this.syx)
    };
    this.buy = function() {
        return this.zbh
    };
    this.cil = function() {
        if (!a.zbh) {
            a.eup = (a.vgc[a.zqh][a.eup + 1] != undefined) ? a.eup + 1 : 0;
            a.syx = setTimeout(a.cil, a.bja);
            a.ubq(a.vgc[a.zqh][a.eup], a.zbh)
        }
    };
    this.akj = function(b) {
        this.vgc[b] = []
    };
    this.jmf = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.vgc[b][c] = d[c]
        }
    };
    this.oqs = function(b) {
        this.qiu = b
    };
    this.fur = function() {
        if (!this.qdz()) {
            return
        }
        var o = this.context2D,
            m = this.owy,
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
            q = (this.mxo && this.uth) ? this.eau + this.uth : this.eau;
        o.save();
        if (this.tgy) {
            wpb.trp.sbn(o, this.x, this.y, this.width, this.height, this.eaq, this.tgy, this.mxo, this.uth)
        } else {
            if (this.qiu) {
                o.putImageData(this.qiu, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.uzv;
        o.font = this.zxl + " " + m + "px " + this.wxm;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.hdf).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.cek != undefined && this.wfc >= 0) {
            j = o.measureText(this.cek).width;
            b += j;
            b += this.sqf * (this.nhh.width + this.ejw);
            if (this.sqf % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.sqf / 2) * (this.nhh.width + this.ejw);
                x = s - n;
                e = s + (this.sqf) * (this.nhh.width + this.ejw) + n
            } else {
                s = this.x + (this.width) / 2 - (this.sqf / 2) * (this.nhh.width) - (this.sqf - 1) / 2 * this.ejw;
                x = s - n;
                e = s + (this.sqf) * (this.nhh.width) + (this.sqf - 1) * this.ejw + n
            }
            for (var u = 0; u < this.sqf; u++) {
                o.drawImage(this.nhh, 0, this.xzc * this.wfc, this.nhh.width, this.xzc, s + (u * (this.ejw + this.nhh.width)), this.y + ((this.height - this.xzc) / 2), this.nhh.width, this.xzc)
            }
            o.textAlign = "right";
            o.fillText(this.hdf, x, this.y + m + this.ptu);
            o.textAlign = "left";
            o.fillText(this.cek, e, this.y + m + this.ptu)
        } else {
            if (this.hdf != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.zxl + " " + m + "px " + this.wxm
                    }
                    g = [];
                    d = "";
                    v = 0;
                    y = 0;
                    t = 0;
                    for (var p = t; p < this.hdf.length; p++) {
                        d += this.hdf.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.hdf.charAt(p) == " ") || (this.hdf.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.hdf.length - 1) {
                            g[y] = this.hdf.substring(t, this.hdf.length)
                        } else {
                            if (this.hdf.charAt(p) == "|") {
                                g[y] = this.hdf.substring(t, v);
                                y++;
                                t = v + 1;
                                d = this.hdf.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[y] = this.hdf.substring(t, v);
                                    y++;
                                    t = v + 1;
                                    d = this.hdf.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.owy) {
                    o.font = this.zxl + " " + (m - 3) + "px " + this.wxm;
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
equ.prototype = new biu;

function phd() {
    this.ssw = null;
    this.xhb = null;
    this.nnd = null;
    this.ali = false;
    this.uah = false;
    this.frh = true;
    this.gyh = false;
    this.ifj = false;
    this.aex = 0;
    this.mfz = 0;
    this.ymj = 0;
    this.ara = "";
    this.lem = "";
    this.uay = null;
    this.lfx = null;
    this.wxm = "arial";
    this.zxl = "bold";
    this.vuc = "arial";
    this.ffn = "rgb(0,0,200)";
    this.smb = "rgb(255,255,255)";
    this.gaj = "rgb(0,0,150)";
    this.tgy = "rgb(220,240,255)";
    this.iee = "rgb(130,220,255)";
    this.nmp = "rgb(130,190,255)";
    this.uzv = "rgb(255,255,255)";
    this.lqf = "rgb(130,190,255)";
    this.pcv = "rgb(100,160,255)";
    this.yfp = "rgb(255,255,255)";
    this.gsx = new rud();
    this.gbn = null;
    this.oln = null;
    this.dqh = null;
    this.ume = null;
    this.hjy = null;
    this.tcf = null;
    this.iur = null;
    this.nha = null;
    this.uth = 2;
    this.uvo = 3;
    this.btq = 10;
    this.ptu = 3;
    this.pwb = 5;
    this.whu = 36;
    this.owy = 30;
    this.bxp = 22;
    this.yjn = function(a, c, b) {
        phd.prototype.yjn.call(this, a, c, b);
        this.gyh = wpb.zan.value37
    };
    this.xxb = function(b) {
        try {
            var a = (wpb.zan.value37) ? b.vtd : b.hnb;
            this.gbn = b.gjb;
            this.oln = b.kqs;
            this.dqh = b.cwn;
            this.ume = b.exa;
            this.hjy = b.mwb;
            this.tcf = b.gvs;
            this.gsx = b.rgt;
            this.whu = b.uas;
            this.owy = b.fontSize;
            this.bxp = b.ypg;
            this.ptu = b.xsm;
            this.pwb = b.bth;
            this.uth = b.ihx;
            this.uvo = b.vwj;
            this.btq = b.rev;
            if (wpb.zan.value36) {
                this.lem = this.parent.pyl(this.parent.language.qsf)
            } else {
                if (wpb.zan.value37) {
                    this.lem = this.parent.pyl(this.parent.language.uan)
                }
            }
            this.ssw = [];
            this.xhb = this.riu(a.iwq, this.parent.language.ret, this.parent.jao, (this.parent.bnu.hhh === false) ? this.parent.eze.ilh("btn") : this.parent.eze.ilh("btn_re"), b.dya);
            this.ssw.push(this.xhb);
            if (wpb.zan.value37) {
                this.nnd = this.riu(a.qls, this.parent.language.rrx, this.parent.wcf, (this.parent.bnu.hhh === false) ? this.parent.eze.ilh("btn") : this.parent.eze.ilh("btn_e"), b.dya);
                this.ssw.push(this.nnd)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.rmt = function(b) {
        try {
            var a = (wpb.zan.value37) ? b.vtd : b.hnb;
            this.gbn = b.gjb;
            this.oln = b.kqs;
            this.dqh = b.cwn;
            this.ume = b.exa;
            this.hjy = b.mwb;
            this.tcf = b.gvs;
            this.gsx = b.rgt;
            if (this.xhb) {
                this.xhb.aqq(a.iwq);
                this.xhb.rmt(b.dya)
            }
            if (this.nnd) {
                this.nnd.aqq(a.qls);
                this.nnd.rmt(b.dya)
            }
            this.whu = b.uas;
            this.owy = b.fontSize;
            this.bxp = b.ypg;
            this.ptu = b.xsm;
            this.pwb = b.bth;
            this.uth = b.ihx;
            this.uvo = b.vwj;
            this.btq = b.rev
        } catch (c) {
            console.error(c)
        }
    };
    this.pzz = function(c) {
        try {
            this.wxm = c.font;
            this.zxl = c.ovs;
            this.ffn = c.cty;
            this.smb = c.hnj;
            this.gaj = c.wvc;
            this.tgy = c.backgroundColor;
            this.iee = c.xrf;
            this.nmp = c.kpe;
            this.uzv = c.lda;
            this.lqf = c.wgp;
            this.pcv = c.gee;
            this.yfp = c.gll;
            this.uay = c.wli;
            this.lfx = c.thz;
            for (var b = 0, a = this.ssw.length; b < a; b++) {
                this.ssw[b].pzz((this.parent.bnu.yaz === true) ? c.sox : c.lcf)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.qwn = function(d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.ssw.length; f < b; f++) {
            var a = this.ssw[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.qdz() === true) {
                if (a.wek() === true && a.mhg() === false && this.frh) {
                    a.lyt(true, true);
                    this.parent.eze.qys("btn");
                    this.parent.eze.wym("btn");
                    a.ett();
                    for (var e = 0; e < b; e++) {
                        this.ssw[e].znu(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.tcf.x && c <= this.tcf.x + this.tcf.width && g >= this.tcf.y && g <= this.tcf.y + this.tcf.height && this.gyh && this.uah) {
            this.wso()
        }
        return true
    };
    this.vtx = function() {};
    this.szu = function() {};
    this.bjz = function() {};
    this.riu = function(d, f, e, a, c) {
        var b = new lao();
        b.yjn(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.ett = e;
        b.rmt(c);
        return b
    };
    this.bab = function(c) {
        this.uah = c;
        for (var b = 0, a = this.ssw.length; b < a; b++) {
            this.ssw[b].dxj(c)
        }
    };
    this.wso = function() {
        this.frh = !this.frh;
        this.parent.fur()
    };
    this.pvf = function(d, a, c, b) {
        this.ifj = false;
        this.wkr = true;
        this.ara = this.gqi(b);
        this.aex = d;
        this.mfz = a;
        this.ymj = c;
        if (this.qdz()) {
            this.bab(true);
            this.fur()
        }
    };
    this.gqi = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.kxq(d) + ":" + this.kxq(a) + ":" + this.kxq(c)
    };
    this.kxq = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.cpp = function(a, b) {
        this.ifj = a;
        if (b && b === true) {
            this.fur()
        }
    };
    this.kwl = function(a, b) {
        this.wkr = false;
        if (wpb.zan.value37) {
            this.frh = false
        }
        this.cpp(a, false);
        phd.prototype.kwl.call(this, a, b)
    };
    this.fur = function(j, f, k, d) {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.eze.ilh("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.tgy;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.gsx.x, this.gsx.y, this.gsx.x + this.gsx.width, this.gsx.y);
            g.addColorStop(0.2, this.uay);
            g.addColorStop(1, this.lfx);
            l.fillStyle = g;
            l.save();
            if (this.parent.dmh === wpb.bnu.tvg) {
                l.translate(this.gsx.width / 2, this.gsx.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.gsx.width / 2, -this.gsx.height / 2)
            }
            l.fillRect(this.gsx.x, this.gsx.y, this.gsx.width, this.gsx.height);
            l.drawImage(c, this.gsx.x, this.gsx.y, this.gsx.width, this.gsx.height);
            l.restore()
        } else {
            if (this.parent.bnu.yaz === true) {
                wpb.trp.ueq(l, this.gsx.x, this.gsx.y, this.gsx.width, this.gsx.height, this.uay, 1)
            }
        }
        wpb.trp.sbn(l, this.gbn.x, this.gbn.y, this.gbn.width, this.gbn.height, 0, this.iee);
        wpb.trp.vio(l, this.lem, this.uzv, this.gbn.x, this.gbn.y + this.ptu, this.gbn.width, this.gbn.height, this.wxm, this.whu, this.zxl);
        wpb.trp.sbn(l, this.oln.x, this.oln.y, this.oln.width, this.oln.height, 0, this.iee);
        if (wpb.zan.value36) {
            wpb.trp.lye(l, this.parent.pyl(this.parent.language.mot), this.uzv, this.oln.x, this.oln.y + this.ptu, this.oln.width, this.oln.height, this.wxm, this.owy, this.zxl, this.pwb)
        } else {
            if (wpb.zan.value37) {
                wpb.trp.lye(l, this.parent.pyl(this.parent.language.izr), this.uzv, this.oln.x, this.oln.y + this.ptu, this.oln.width, this.oln.height, this.wxm, this.owy, this.zxl, this.pwb)
            }
        }
        wpb.trp.sbn(l, this.dqh.x, this.dqh.y, this.dqh.width, this.dqh.height, 0, this.nmp);
        wpb.trp.lye(l, this.parent.pyl(this.parent.language.pih), this.uzv, this.dqh.x, this.dqh.y + this.ptu, this.dqh.width, this.dqh.height, this.wxm, this.owy, this.zxl, this.pwb);
        wpb.trp.sbn(l, this.ume.x, this.ume.y, this.ume.width, this.ume.height, 0, this.iee);
        wpb.trp.lye(l, this.parent.pyl(this.parent.language.nmr), this.uzv, this.ume.x, this.ume.y + this.ptu, this.ume.width, this.ume.height, this.wxm, this.owy, this.zxl, this.pwb);
        if (this.gyh) {
            this.mnf(l)
        }
        if (this.wkr) {
            if (wpb.zan.value36) {
                wpb.trp.oub(l, this.aex, this.uzv, this.oln.x, this.oln.y + this.ptu, this.oln.width, this.oln.height, this.wxm, this.owy, this.zxl, this.pwb)
            } else {
                if (wpb.zan.value37) {
                    wpb.trp.oub(l, this.ara, this.uzv, this.oln.x, this.oln.y + this.ptu, this.oln.width, this.oln.height, this.wxm, this.owy, this.zxl, this.pwb)
                }
            }
            wpb.trp.oub(l, this.parent.sbe(this.mfz), this.uzv, this.dqh.x, this.dqh.y + this.ptu, this.dqh.width, this.dqh.height, this.wxm, this.owy, this.zxl, this.pwb);
            wpb.trp.oub(l, this.parent.sbe(this.ymj), this.uzv, this.ume.x, this.ume.y + this.ptu, this.ume.width, this.ume.height, this.wxm, this.owy, this.zxl, this.pwb)
        }
        for (var b = 0, e = this.ssw.length; b < e; b++) {
            this.ssw[b].fur()
        }
        if (this.ifj) {
            wpb.trp.paj(l, this.hjy.x, this.hjy.y, this.hjy.width, this.hjy.height, this.uvo, this.ffn, 0.3, this.gaj, this.uth, 1);
            wpb.trp.vio(l, this.parent.pyl(this.parent.language.nuo), this.smb, this.hjy.x, this.hjy.y, this.hjy.width, this.hjy.height, this.wxm, this.owy, this.zxl)
        }
        l.restore();
        if (this.rzg && this.upi) {
            if (a) {
                this.rzg.drawImage(this.upi, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.rzg.drawImage(this.upi, this.x, this.y)
            }
        }
    };
    this.mnf = function(b) {
        var c = Math.round(this.tcf.height / 2),
            a = Math.round(this.tcf.x + c),
            d = Math.round(this.tcf.y + c / 2);
        b.save();
        wpb.trp.sbn(b, this.tcf.x, this.tcf.y, this.tcf.width, this.tcf.height, this.btq, this.lqf, this.pcv, this.uth);
        wpb.trp.vio(b, this.parent.language.ftd, this.uzv, this.tcf.x + this.tcf.height, this.tcf.y, this.tcf.width - this.tcf.height, this.tcf.height, this.wxm, this.bxp, this.zxl);
        wpb.trp.ueq(b, a, d, c, c, null, 0, this.yfp, this.uth, 1);
        if (this.frh) {
            wpb.trp.ueq(b, a + c / 4, d + c / 4, c / 2, c / 2, this.yfp, 1)
        }
        b.restore()
    }
}
phd.prototype = new biu;

function nqe() {
    var a = this;
    this.awm = function() {
        a.xci = false
    };
    this.fur = function() {
        if (!this.qdz()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.nhh != null) {
            b.drawImage(this.nhh, 0, 0, this.nhh.width, this.nhh.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
nqe.prototype = new rbb;

function lyq() {
    this.itx = "";
    this.qqv = "";
    this.nhh = null;
    this.xyp = "sans-serif";
    this.zsr = "sans-serif";
    this.zxl = "bold";
    this.bfc = null;
    this.uzv = null;
    this.mxo = null;
    this.mtp = null;
    this.tgy = null;
    this.jjz = 16;
    this.yxd = 20;
    this.ufw = 0;
    this.fpc = 0;
    this.uth = 2;
    this.pnc = 3;
    this.ecl = 3;
    this.nem = 3;
    this.nvr = 3;
    this.yjn = function(a, e, b, d, c) {
        lyq.prototype.yjn.call(this, a, e, b);
        this.itx = d;
        this.qqv = c
    };
    this.rmt = function(a) {
        try {
            this.jjz = a.jjw;
            this.yxd = a.wdt;
            this.ufw = a.mje;
            this.fpc = a.jpi;
            this.uth = a.ihx;
            this.pnc = a.zif;
            this.ecl = a.bfn;
            this.nem = a.fnh;
            this.nvr = a.tld
        } catch (b) {
            console.error(b)
        }
    };
    this.pzz = function(a) {
        try {
            this.xyp = a.ofp;
            this.zsr = a.spe;
            this.zxl = a.ovs;
            this.bfc = a.yjs;
            this.uzv = a.lda;
            this.mxo = a.borderColor;
            this.mtp = a.mqp;
            this.tgy = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.zbu = function(a, b) {
        this.qqv = a;
        if (b && b === true && this.context2D != null && this.qdz() === true) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.ahe = function(a, b) {
        this.itx = a;
        if (b && b === true && this.context2D != null && this.qdz() === true) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.fur = function() {
        if (!this.qdz()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.mtp) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.mxo);
            b.addColorStop(1, this.mtp);
            wpb.trp.uhd(a, this.x, this.y, this.width, this.height, this.pnc, this.ecl, this.nem, this.nvr, this.tgy, 1, b, this.uth, 1)
        } else {
            wpb.trp.uhd(a, this.x, this.y, this.width, this.height, this.pnc, this.ecl, this.nem, this.nvr, this.tgy, 1, this.mxo, this.uth, 1)
        }
        if (this.itx != null) {
            wpb.trp.vio(a, this.itx, this.bfc, this.x + this.uth, this.y + this.ufw, this.width - 2 * this.uth, this.height, this.xyp, this.jjz, this.zxl)
        }
        if (this.qqv != null) {
            if (this.itx != null) {
                wpb.trp.vio(a, this.qqv, this.uzv, this.x + this.uth, this.y + this.fpc, this.width - 2 * this.uth, this.height, this.zsr, this.yxd, this.zxl)
            } else {
                wpb.trp.vio(a, this.qqv, this.uzv, this.x + this.uth, this.y + this.uth, this.width - 2 * this.uth, this.height, this.zsr, this.yxd, this.zxl)
            }
        }
        if (this.nhh) {
            a.drawImage(this.nhh, 0, 0, this.nhh.width, this.nhh.height, this.x + this.uth, this.y + this.uth, this.width - 2 * this.uth, this.height - 2 * this.uth)
        }
        a.restore();
        if (this.rzg && this.upi) {
            this.rzg.drawImage(this.upi, this.x, this.y)
        }
    }
}
lyq.prototype = new biu;

function ahk() {
    this.nhh = new Image();
    this.qqv = "";
    this.igt = true;
    this.wxm = null;
    this.zxl = "bold";
    this.mth = "red";
    this.tmv = "orange";
    this.fnz = "white";
    this.owy = 40;
    this.pwb = 0;
    this.ptu = 0;
    this.dzx = 0;
    this.byi = 2;
    this.bst = null;
    this.brx = 0;
    this.vtt = 0;
    this.yjn = function(a, e, c, b, d) {
        ahk.prototype.yjn.call(this, a, e, c);
        this.nhh = b;
        this.qqv = d
    };
    this.rmt = function(a) {
        try {
            this.owy = a.fontSize;
            this.pwb = a.bth;
            this.ptu = a.xsm;
            this.dzx = a.plt;
            this.byi = a.zeq
        } catch (b) {
            console.error(b)
        }
    };
    this.pzz = function(a) {
        try {
            this.wxm = a.font;
            this.zxl = a.ovs;
            this.mth = a.vql;
            this.tmv = a.edh;
            this.fnz = a.puq
        } catch (b) {
            console.error(b)
        }
    };
    this.zbu = function(a, b) {
        this.qqv = a;
        if (b && b === true && this.context2D != null) {
            this.kwl(true, true)
        }
    };
    this.eie = function(a, b) {
        this.qqv = a;
        this.igt = false;
        if (b && b === true && this.context2D != null) {
            this.kwl(true, true)
        }
    };
    this.kwl = function(a, b) {
        this.dks = a;
        if (b && b === true && this.context2D != null) {
            if (this.upi == null && this.qdz()) {
                this.fur()
            } else {
                if (this.parent != null) {
                    this.parent.fur(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.lie = function(a, b, c) {
        this.bst = a;
        this.brx = b;
        this.vtt = c
    };
    this.fur = function() {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.upi != null) ? 0 : this.x,
            d = (this.upi != null) ? 0 : this.y;
        b.save();
        if (this.upi == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.igt === true) {
            if (this.bst != null) {
                b.drawImage(this.bst, this.x + this.brx, this.y + this.vtt, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.nhh != null) {
                b.drawImage(this.nhh, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.pwb, d, a + this.width / 2 + this.pwb, d + this.height);
        c.addColorStop(0, this.mth);
        c.addColorStop(1, this.tmv);
        wpb.trp.vio(b, this.qqv, c, a + this.dzx + this.pwb, d + this.ptu, this.width - 2 * this.dzx, this.height, this.wxm, this.owy, this.zxl, this.fnz, this.byi);
        b.restore();
        if (this.rzg && this.upi) {
            this.rzg.drawImage(this.upi, this.x, this.y)
        }
    }
}
ahk.prototype = new biu;

function oun() {
    var a = this;
    this.state = 0;
    this.etl = 1;
    this.dbg = null;
    this.vnq = null;
    this.wtn = null;
    this.gkc = "round";
    this.wxm = null;
    this.zxl = "bold";
    this.aau = "center";
    this.tgy = null;
    this.uzv = null;
    this.sfm = 1;
    this.hsw = null;
    this.owy = 17;
    this.dzx = 2;
    this.eaq = 0;
    this.uth = 1;
    this.fgt = 0;
    this.aey = 0;
    this.qyw = 0;
    this.rmt = function(b) {
        try {
            this.owy = b.fontSize;
            this.dzx = b.plt;
            this.eaq = b.pbk;
            this.uth = b.ihx;
            this.qyw = b.ctn
        } catch (c) {
            console.error(c)
        }
    };
    this.pzz = function(b) {
        try {
            this.gkc = b.kke;
            this.wxm = b.font;
            this.zxl = b.ovs;
            this.aau = b.textAlign;
            this.tgy = b.backgroundColor;
            this.uzv = b.lda;
            this.sfm = b.uhg;
            if (b.borderColor && b.mqp) {
                this.hsw = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.hsw.addColorStop(0, b.borderColor);
                this.hsw.addColorStop(1, b.mqp)
            } else {
                this.hsw = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.upx = function() {
        return this.gkc
    };
    this.olq = function(c, b) {
        this.state = c;
        this.etl = b
    };
    this.rcg = function(b) {
        this.nhh = b;
        if (this.gkc === "round") {
            this.fgt = this.width / 2 - this.dzx
        }
        if (this.nhh) {
            this.aey = Math.round(this.nhh.height / (2 * this.etl))
        }
    };
    this.pjh = function(b) {
        this.state = (b < this.etl) ? b : this.state
    };
    this.ikh = function(b) {
        this.dbg = b
    };
    this.awm = function() {
        a.xci = false
    };
    this.frl = function() {
        a.koe = false;
        if (a.qdz()) {
            a.parent.fur(a.x, a.y, a.width, a.height)
        }
    };
    this.fur = function() {
        if (!this.qdz()) {
            return
        }
        var l = this.context2D,
            e = (this.wek()) ? this.sfm : this.sfm / 2,
            b = this.owy,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.nhh && this.ett) {
            if (!this.wek()) {
                l.globalAlpha = e
            }
            if (this.gkc === "round") {
                wpb.trp.jau(l, this.x + this.width / 2, this.y + this.height / 2, this.fgt, this.tgy, e * this.sfm)
            } else {
                if (this.gkc === "rect") {
                    wpb.trp.paj(l, this.x, this.y, this.width, this.height, this.eaq, this.tgy, e * this.sfm, this.hsw, this.uth, e)
                }
            }
            if (this.sxn()) {
                if (this.gkc === "round") {
                    l.drawImage(this.nhh, 0, (this.state * 2 * this.aey) + this.aey, this.nhh.width, this.aey, this.x, this.y, this.width, this.height)
                } else {
                    if (this.gkc === "rect") {
                        l.drawImage(this.nhh, 0, (this.state * 2 * this.aey) + this.aey, this.nhh.width, this.aey, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.gkc === "round") {
                    l.drawImage(this.nhh, 0, (this.state * 2 * this.aey), this.nhh.width, this.aey, this.x, this.y, this.width, this.height)
                } else {
                    if (this.gkc === "rect") {
                        l.drawImage(this.nhh, 0, (this.state * 2 * this.aey), this.nhh.width, this.aey, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.qqv != null) {
                l.textAlign = this.aau;
                l.textBaseline = "bottom";
                l.font = this.zxl + " " + b + "px " + this.wxm;
                l.fillStyle = this.uzv;
                d = this.qqv.split("|");
                j = 0;
                g = (this.aau === "center") ? this.x + this.width / 2 : (this.aau === "left") ? this.x + 2 * this.dzx : this.x + this.width - 2 * this.dzx;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.dzx) {
                    c = ((this.width - 2 * this.dzx) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.zxl + " " + b + "px " + this.wxm
                }
                if (b * d.length > this.qyw) {
                    c = ((this.qyw) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.zxl + " " + b + "px " + this.wxm
                }
                k = (this.height - this.dzx - this.qyw) + (this.qyw - b * d.length) / 2;
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
oun.prototype = new rbb;

function xit() {
    var a = this;
    this.gkc = "rect";
    this.xew = -1;
    this.wxm = null;
    this.zxl = "bold";
    this.tgy = null;
    this.qli = null;
    this.hcj = null;
    this.gif = null;
    this.mxo = null;
    this.uzv = null;
    this.wep = null;
    this.eaq = 3;
    this.pwb = -2;
    this.ptu = 2;
    this.eau = 6;
    this.owy = 26;
    this.uth = 2;
    this.rmt = function(b) {
        try {
            this.owy = b.fontSize;
            this.pwb = b.bth;
            this.ptu = b.xsm;
            this.eau = b.oul;
            this.eaq = b.pbk;
            this.uth = b.ihx
        } catch (c) {
            console.error(c)
        }
    };
    this.pzz = function(b) {
        try {
            this.wxm = b.font;
            this.zxl = b.ovs;
            this.tgy = b.backgroundColor;
            this.qli = b.kck;
            this.hcj = b.vcy;
            this.gif = b.shl;
            this.mxo = b.borderColor;
            this.uzv = b.lda;
            this.wep = b.ebs;
            this.gkc = b.kke;
            this.xew = b.jyg
        } catch (c) {
            console.error(c)
        }
    };
    this.upx = function() {
        return this.gkc
    };
    this.awm = function() {
        a.xci = false
    };
    this.frl = function() {
        a.koe = false;
        if (a.qdz()) {
            a.parent.fur(a.x, a.y, a.width, a.height)
        }
    };
    this.fur = function() {
        if (!this.qdz()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.tgy,
            m = this.qli,
            b = this.owy,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.xew == 0 || this.xew == 3) ? this.eaq : 0;
        lt = (this.xew == 1 || this.xew == 3) ? this.eaq : 0;
        rb = (this.xew == 0 || this.xew == 2) ? this.eaq : 0;
        lb = (this.xew == 1 || this.xew == 2) ? this.eaq : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.sxn()) {
            n = (this.hcj != null) ? this.hcj : n;
            m = (this.gif != null) ? this.gif : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.gkc === "rrect") {
                    wpb.trp.uhd(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.mxo, this.uth, 1)
                } else {
                    if (this.gkc === "rect") {
                        if (this.mxo) {
                            wpb.trp.sbn(p, this.x, this.y, this.width, this.height, this.eaq, l, this.mxo, this.uth)
                        } else {
                            wpb.trp.ueq(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.gkc === "triangle") {
                            wpb.trp.jsv(p, this.xew, this.x, this.y, this.width, this.height, this.eaq, l, 1, this.mxo, this.uth, 1)
                        }
                    }
                }
            } else {
                if (this.gkc === "rrect") {
                    wpb.trp.uhd(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.mxo, this.uth, 1)
                } else {
                    if (this.gkc === "rect") {
                        if (this.mxo) {
                            wpb.trp.sbn(p, this.x, this.y, this.width, this.height, this.eaq, n, this.mxo, this.uth, 1)
                        } else {
                            wpb.trp.ueq(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.gkc === "triangle") {
                            wpb.trp.jsv(p, this.xew, this.x, this.y, this.width, this.height, this.eaq, n, 1, this.mxo, this.uth, 1)
                        }
                    }
                }
            }
        }
        if (this.nhh != null) {
            h = this.height - 2 * this.eau;
            p.drawImage(this.nhh, this.x + this.width / 2 - h / 2, this.y + this.eau, h, h)
        }
        if (this.qqv != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.qqv.split("|");
            d = 0;
            if (this.sxn()) {
                d = 1;
                p.fillStyle = this.wep
            } else {
                p.fillStyle = this.uzv
            }
            p.font = this.zxl + " " + b + "px " + this.wxm;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.eau) {
                c = ((this.width - 2 * this.eau) / o);
                b = Math.round(c * b) - 1;
                p.font = this.zxl + " " + b + "px " + this.wxm
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.zxl + " " + b + "px " + this.wxm
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.pwb, this.y - this.ptu + k + d);
                k += b
            }
        }
        p.restore()
    }
}
xit.prototype = new rbb;

function rvs() {
    var a = this;
    this.qqv = null;
    this.uah = false;
    this.xci = false;
    this.rwx = false;
    this.wxm = null;
    this.zxl = "bold";
    this.aau = "center";
    this.tgy = null;
    this.mxo = null;
    this.uzv = null;
    this.cif = "rect";
    this.cdc = new rud();
    this.arp = new rud();
    this.owy = 16;
    this.eaq = 8;
    this.uth = 1;
    this.yvv = 0;
    var b = 200;
    this.yjn = function(c, f, d, e) {
        this.qqv = e;
        rvs.prototype.yjn.call(this, c, f, d)
    };
    this.pzz = function(c) {
        try {
            this.wxm = c.font;
            this.zxl = c.ovs;
            this.aau = c.textAlign;
            this.tgy = c.backgroundColor;
            this.mxo = c.borderColor;
            this.uzv = c.lda;
            this.cif = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.rmt = function(c) {
        try {
            this.cdc = c.che;
            this.arp = c.uos;
            this.owy = c.fontSize;
            this.eaq = c.pbk;
            this.uth = c.ihx
        } catch (d) {
            console.error(d)
        }
    };
    this.dxj = function(c) {
        this.uah = c
    };
    this.wek = function() {
        return this.uah
    };
    this.nzo = function(c, d) {
        this.rwx = c;
        if (d && d === true) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.nyb = function() {
        return this.rwx
    };
    this.zbu = function(c, d) {
        this.qqv = c;
        if (d && d === true && this.qdz()) {
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.znu = function(c, d) {
        this.xci = c;
        d = (d === false) ? false : true;
        clearTimeout(this.yvv);
        if (this.xci === true && d === true) {
            this.yvv = setTimeout(this.awm, b)
        }
    };
    this.mhg = function() {
        return this.xci
    };
    this.awm = function() {
        a.xci = false
    };
    this.fur = function() {
        if (!this.qdz()) {
            return
        }
        var c = this.context2D;
        c.save();
        wpb.trp.sbn(c, this.x, this.y, this.width, this.height, this.eaq, this.tgy, this.mxo, this.uth);
        if (this.cif === "rect") {
            wpb.trp.ueq(c, this.x + this.arp.x, this.y + this.arp.y, this.arp.width, this.arp.height, this.uzv, 0.2, this.uzv, this.uth, 1);
            if (this.rwx === true) {
                wpb.trp.ueq(c, this.x + this.arp.x + this.arp.width / 4, this.y + this.arp.y + this.arp.height / 4, this.arp.width / 2, this.arp.height / 2, this.uzv, 1)
            }
        } else {
            if (this.cif === "round") {
                wpb.trp.jau(c, this.x + this.arp.x + this.arp.width / 2, this.y + this.arp.y + this.arp.height / 2, this.arp.width / 2, this.uzv, 0.2, this.uzv, this.uth, 1);
                if (this.rwx === true) {
                    wpb.trp.jau(c, this.x + this.arp.x + this.arp.width / 2, this.y + this.arp.y + this.arp.height / 2, this.arp.width / 4, this.uzv, 1)
                }
            }
        }
        if (this.qqv && this.qqv != "") {
            wpb.trp.aaj(c, this.qqv, this.uzv, this.x + this.cdc.x, this.y + this.cdc.y, this.cdc.width, this.cdc.height, this.wxm, this.owy, this.zxl, this.aau, true)
        }
        c.restore();
        if (this.rzg && this.upi) {
            this.rzg.drawImage(this.upi, this.x, this.y)
        }
    };
    this.ett = {}
}
rvs.prototype = new biu;

function cnz() {
    var b = this;
    var c = 0;
    var a = 1;
    this.ohh = null;
    this.itx = "";
    this.rmj = "";
    this.qfl = "";
    this.jus = "";
    this.zly = false;
    this.aex = [];
    this.mhs = 0;
    this.bri = 0;
    this.yvx = 0;
    this.irv = 0;
    this.ugm = 0;
    this.hha = 0;
    this.gpo = 0;
    this.oyo = 0;
    this.qmm = false;
    this.lad = false;
    this.ymr = false;
    this.cif = "center";
    this.wxm = "arial";
    this.zxl = "bold";
    this.bfc = "white";
    this.uzv = "white";
    this.tgy = "black";
    this.qli = null;
    this.mxo = "white";
    this.mtp = "rgb(150,150,150)";
    this.uay = null;
    this.kzc = null;
    this.uth = 3;
    this.ajn = 0;
    this.kvg = 0;
    this.zut = 0;
    this.jjz = 30;
    this.emd = 24;
    this.gbn = new rud();
    this.ktu = new rud();
    this.hnx = new rud();
    this.vaf = new rud();
    this.qcq = new rud();
    this.mve = new rud();
    this.bke = new rud();
    this.nmu = new rud();
    this.lmn = new rud();
    this.cqa = 7;
    this.lkr = 0;
    this.dwn = 0;
    this.pyq = 0;
    this.url = c;
    this.xvh = 0;
    this.tyh = 89;
    this.zkt = false;
    this.dka = 0;
    this.kau = 0;
    this.fcc = 0;
    this.erh = 0;
    this.qgp = null;
    this.pvb = 0;
    this.unl = 1;
    this.iwt = 250;
    this.yjn = function(d, f, e) {
        cnz.prototype.yjn.call(this, d, f, e);
        this.ohh = new ppr();
        this.ohh.yjn();
        this.ohh.qaf("buttons");
        this.ohh.qaf("checkboxes");
        this.ohh.qaf("displays");
        this.ohh.qaf("lbuttons");
        this.ohh.qaf("mbuttons");
        this.ohh.qaf("vbuttons");
        this.ohh.qaf("cbuttons")
    };
    this.xxb = function(d) {
        try {
            this.kvz(d);
            this.pwt(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.pzz = function(k) {
        try {
            var n = this.ohh.vtm("lbuttons"),
                m = this.ohh.vtm("mbuttons"),
                f = this.ohh.vtm("cbuttons"),
                g = this.ohh.vtm("displays");
            this.cif = k.type;
            this.wxm = k.font;
            this.zxl = k.ovs;
            this.bfc = k.yjs;
            this.uzv = k.lda;
            this.tgy = k.backgroundColor;
            this.qli = k.kck;
            this.mxo = k.borderColor;
            this.uay = k.wli;
            this.kzc = k.oqe;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].pzz(k.rpk)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].pzz(k.bmq)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].pzz(k.iie)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].pzz(k.display)
            }
            this.ohh.neu("checkboxes", "#pzz", [k.zfw])
        } catch (l) {
            console.error(l)
        }
    };
    this.rmt = function(k) {
        try {
            var n = this.ohh.vtm("lbuttons"),
                m = this.ohh.vtm("mbuttons"),
                f = this.ohh.vtm("cbuttons"),
                g = this.ohh.vtm("displays");
            this.uth = k.ihx;
            this.ajn = k.vvi;
            this.kvg = k.tsu;
            this.zut = k.dnb;
            this.jjz = k.jjw;
            this.emd = k.vse;
            this.gbn = k.gjb;
            this.ktu = k.xbm;
            this.hnx = k.rsf;
            this.vaf = k.uqu;
            this.qcq = k.tbl;
            this.mve = k.fox;
            this.ohh.mgf("lgames", "#aqq", [k.yho]);
            this.ohh.mgf("mgames", "#aqq", [k.hwy]);
            this.ohh.mgf("lmincredit", "#aqq", [k.ahb]);
            this.ohh.mgf("mmincredit", "#aqq", [k.cuo]);
            this.ohh.mgf("lmaxcredit", "#aqq", [k.oct]);
            this.ohh.mgf("mmaxcredit", "#aqq", [k.itw]);
            this.ohh.mgf("lmaxwin", "#aqq", [k.jxh]);
            this.ohh.mgf("mmaxwin", "#aqq", [k.org]);
            this.ohh.mgf("start", "#aqq", [k.nlm]);
            this.ohh.mgf("cancel", "#aqq", [k.txe]);
            this.ohh.mgf("gamesd", "#aqq", [k.ftf]);
            this.ohh.mgf("mincreditd", "#aqq", [k.qtt]);
            this.ohh.mgf("maxcreditd", "#aqq", [k.bmt]);
            this.ohh.mgf("maxwind", "#aqq", [k.yvf]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].rmt(k.rpk)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].rmt(k.bmq)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].rmt(k.iie)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].rmt(k.display)
            }
            this.ohh.mgf("cmincredit", "#aqq", [k.zww]);
            this.ohh.mgf("cmaxcredit", "#aqq", [k.xlz]);
            this.ohh.mgf("cmaxwin", "#aqq", [k.bvt]);
            this.ohh.neu("checkboxes", "#rmt", [k.zfw])
        } catch (l) {
            console.error(l)
        }
    };
    this.kvz = function(d) {
        this.ohh.usx("start", this.riu(d.nlm, this.parent.language.start, this.rej, this.parent.rvw.lyo), ["buttons", "cbuttons"]);
        this.ohh.usx("cancel", this.riu(d.txe, this.parent.language.kfc, this.brj, this.parent.rvw.pzb), ["buttons", "cbuttons"]);
        this.ohh.usx("lgames", this.riu(d.yho, "", this.skb, null), ["buttons", "lbuttons", "vbuttons"]);
        this.ohh.usx("mgames", this.riu(d.hwy, "+", this.ffo, null), ["buttons", "mbuttons", "vbuttons"]);
        this.ohh.usx("lmincredit", this.riu(d.ahb, "", this.sjt, null), ["buttons", "lbuttons", "vbuttons"]);
        this.ohh.usx("mmincredit", this.riu(d.cuo, "+", this.dve, null), ["buttons", "mbuttons", "vbuttons"]);
        this.ohh.usx("lmaxcredit", this.riu(d.oct, "", this.gad, null), ["buttons", "lbuttons", "vbuttons"]);
        this.ohh.usx("mmaxcredit", this.riu(d.itw, "+", this.tqa, null), ["buttons", "mbuttons", "vbuttons"]);
        this.ohh.usx("lmaxwin", this.riu(d.jxh, "", this.nep, null), ["buttons", "lbuttons", "vbuttons"]);
        this.ohh.usx("mmaxwin", this.riu(d.org, "+", this.dnx, null), ["buttons", "mbuttons", "vbuttons"]);
        this.ohh.usx("cmincredit", this.yfz(d.zww, "", this.jrl), ["checkboxes"]);
        this.ohh.usx("cmaxcredit", this.yfz(d.xlz, "", this.rvd), ["checkboxes"]);
        this.ohh.usx("cmaxwin", this.yfz(d.bvt, "", this.nsd), ["checkboxes"])
    };
    this.pwt = function(d) {
        this.ohh.usx("gamesd", this.obc(d.ftf, null, (this.aex[this.mhs] > 0) ? this.aex[this.mhs] : "---"), ["displays"]);
        this.ohh.usx("mincreditd", this.obc(d.qtt, null, "---"), ["displays"]);
        this.ohh.usx("maxcreditd", this.obc(d.bmt, null, "---"), ["displays"]);
        this.ohh.usx("maxwind", this.obc(d.yvf, null, "---"), ["displays"])
    };
    this.obc = function(d, g, f) {
        var e = new lyq();
        e.yjn(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.riu = function(f, i, g, e) {
        var d = new xit();
        d.yjn(f, this.context2D, null, null, i);
        d.parent = this;
        d.ett = g;
        if (e) {
            d.bdd = e.zdj
        }
        return d
    };
    this.yfz = function(e, g, f) {
        var d = new rvs();
        d.yjn(e, this.context2D, null, g);
        d.parent = this;
        d.ett = f;
        return d
    };
    this.qwn = function(r, n) {
        var s = this.ohh.vtm("vbuttons"),
            l = this.ohh.vtm("cbuttons"),
            g = this.ohh.vtm("checkboxes"),
            p = this.ohh.xpy("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.eex) {
            return true
        }
        if ((!p || !p.qdz()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.ymr = true;
            this.gyp();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.qdz() === true && d.wek() === true && d.mhg() === false) {
                    d.lyt(true, false, false);
                    this.pvb = 0;
                    this.unl = 1;
                    if (d.ett() === false) {
                        this.qgp = function() {
                            if (d.ett() === true) {
                                clearInterval(b.erh);
                                d.lyt(false, false);
                                b.parent.fur();
                                for (var i = 0; i < m; i++) {
                                    s[i].znu(false)
                                }
                            }
                        };
                        this.erh = setInterval(this.qgp, this.iwt)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].znu(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.qdz() === true && d.wek() === true) {
                    this.parent.eze.qys("btn");
                    this.parent.eze.wym("btn");
                    d.lyt(true, false);
                    d.ett();
                    for (var e = 0; e < m; e++) {
                        l[e].znu(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.qdz() === true && k.wek() === true) {
                    k.nzo(!k.nyb(), true);
                    k.ett();
                    for (var e = 0; e < m; e++) {
                        g[e].znu(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.vtx = function() {
        var e = this.ohh.vtm("vbuttons"),
            j = this.ohh.vtm("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.sxn() == true) {
                clearInterval(this.erh);
                f.lyt(false, false);
                this.parent.fur();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.sxn() == true) {
                f.lyt(false, false);
                this.parent.fur();
                return true
            }
        }
        return false
    };
    this.szu = function(l) {
        var k = this.ohh.vtm("buttons");
        if (this.eex) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.bdd) {
                if (f.wek() && !f.mhg()) {
                    this.parent.eze.qys("btn");
                    this.parent.eze.wym("btn");
                    f.lyt(true, false);
                    f.ett();
                    for (var e = 0; e < d; e++) {
                        k[e].znu(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.bjz = function() {
        var g = this.ohh.vtm("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.sxn() == true) {
                e.lyt(false, false);
                this.parent.fur();
                return true
            }
        }
        return false
    };
    this.bab = function(d) {
        this.ohh.neu("buttons", "#dxj", [d]);
        this.ohh.neu("checkboxes", "#dxj", [d]);
        if (d === true && this.lad === true) {
            this.ohh.mgf("cmincredit", "#dxj", [false])
        }
    };
    this.tem = function(d) {
        this.aex = d.g;
        this.bri = d.v;
        this.yvx = d.v;
        this.qmm = d.r;
        this.lad = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.irv = d.m;
            this.ugm = d.m
        }
    };
    this.sny = function() {
        if (this.qmm === true) {
            this.hha = this.parent.fmn;
            this.gpo = this.parent.fmn;
            this.mhs = 0;
            this.oyo = 0
        }
    };
    this.nly = function() {
        if (this.aex.length > 0 && this.mhs >= 0 && this.ymr === false) {
            return this.aex[this.mhs]
        }
        return 0
    };
    this.hlv = function() {
        var d = this.ohh.xpy("cmincredit") == null || this.ohh.mgf("cmincredit", "#nyb");
        if (this.hha > 0 && d === true) {
            return this.hha
        }
        return 0
    };
    this.nfw = function() {
        var d = this.ohh.xpy("cmaxcredit") == null || this.ohh.mgf("cmaxcredit", "#nyb");
        if (this.gpo > 0 && d === true) {
            return this.gpo
        }
        return 0
    };
    this.nxp = function() {
        var d = this.ohh.xpy("cmaxwin") == null || this.ohh.mgf("cmaxwin", "#nyb");
        if (this.oyo > 0 && d === true) {
            return this.oyo
        }
        return 0
    };
    this.lpj = function() {
        var f = this.ohh.xpy("cmincredit") == null || this.ohh.mgf("cmincredit", "#nyb"),
            d = this.ohh.xpy("cmaxcredit") == null || this.ohh.mgf("cmaxcredit", "#nyb"),
            e = this.ohh.xpy("cmaxwin") == null || this.ohh.mgf("cmaxwin", "#nyb");
        this.zkt = false;
        this.ymr = false;
        this.yvx = (this.ugm > 0) ? this.parent.pqi() * this.ugm : this.yvx;
        this.bri = (this.irv > 0) ? this.parent.pqi() * this.irv : this.bri;
        if (this.qmm === true) {
            f = this.lad;
            d = false;
            e = false;
            this.sny()
        } else {
            if (this.lad === true) {
                f = true;
                this.hha = (this.hha < this.parent.fmn) ? this.hha : this.parent.fmn;
                this.hha = (this.hha > 0) ? this.hha : this.parent.fmn
            } else {
                f = (this.hha <= this.parent.fmn) ? f : false;
                this.hha = (this.hha < this.parent.fmn) ? this.hha : this.parent.fmn
            }
            d = (this.gpo >= this.parent.fmn) ? d : false;
            this.gpo = (this.gpo > this.parent.fmn) ? this.gpo : this.parent.fmn
        }
        this.ohh.mgf("cmincredit", "#nzo", [f]);
        this.ohh.mgf("cmaxcredit", "#nzo", [d]);
        this.ohh.mgf("cmaxwin", "#nzo", [e]);
        this.ohh.mgf("gamesd", "#zbu", [(this.aex[this.mhs] > 0) ? this.aex[this.mhs] : "---"]);
        this.ohh.mgf("mincreditd", "#zbu", [(f === true && this.hha > 0) ? this.parent.sbe(this.hha) : "---"]);
        this.ohh.mgf("maxcreditd", "#zbu", [(d === true && this.gpo > 0) ? this.parent.sbe(this.gpo) : "---"]);
        this.ohh.mgf("maxwind", "#zbu", [(e === true && this.oyo > 0) ? this.parent.sbe(this.oyo) : "---"]);
        this.ohh.mgf("lmincredit", "#kwl", [f]);
        this.ohh.mgf("mmincredit", "#kwl", [f && this.hha < this.parent.fmn]);
        this.ohh.mgf("lmaxcredit", "#kwl", [d && this.gpo > this.parent.fmn]);
        this.ohh.mgf("mmaxcredit", "#kwl", [d]);
        this.ohh.mgf("lmaxwin", "#kwl", [e && this.oyo > this.yvx]);
        this.ohh.mgf("mmaxwin", "#kwl", [e]);
        if (this.zly === false) {
            this.bab(true);
            this.kwl(true);
            this.parent.fur()
        } else {
            this.ekz();
            this.parent.eze.qys("panel_out");
            this.parent.eze.wym("panel_out");
            this.kny()
        }
    };
    this.gyp = function() {
        b.bab(false);
        if (b.zly === false) {
            b.kwl(false);
            b.parent.fur()
        } else {
            b.oet();
            b.parent.eze.qys("panel_out");
            b.parent.eze.wym("panel_out");
            b.kny()
        }
    };
    this.ekz = function() {
        this.kwl(true);
        this.eex = true;
        this.uah = false;
        this.url = c;
        this.lkr = Math.floor(this.width / this.cqa);
        this.pyq = 0;
        this.dwn = 0;
        this.xvh = new Date().getTime()
    };
    this.oet = function() {
        this.eex = true;
        this.uah = false;
        this.url = a;
        this.lkr = -Math.floor(this.width / this.cqa);
        this.pyq = 1;
        this.dwn = this.width;
        this.xvh = new Date().getTime()
    };
    this.kny = function() {
        var d = b.tyh,
            e = new Date().getTime();
        if (b.pyq < b.cqa) {
            b.dwn += b.lkr;
            b.pyq++;
            b.parent.fur();
            d = (((b.url === a) ? b.pyq - 1 : b.pyq) * b.tyh - (e - b.xvh));
            b.dka = setTimeout(b.kny, d)
        } else {
            b.eex = false;
            b.uah = true;
            if (b.url == a) {
                b.kwl(false);
                b.parent.mic();
                if (b.zkt === true) {
                    b.kau = setTimeout(b.parent.omm, 200)
                }
            } else {
                if (b.url == c) {
                    b.bab(true)
                }
            }
            b.parent.fur()
        }
    };
    this.stop = function() {
        clearTimeout(this.dka);
        clearTimeout(this.fcc);
        clearTimeout(this.kau);
        clearInterval(this.erh)
    };
    this.hwa = function(d) {
        this.itx = d.lof;
        this.rmj = d.elx;
        this.qfl = d.vaj;
        this.ohh.mgf("start", "#zbu", [d.start]);
        this.ohh.mgf("cancel", "#zbu", [d.kfc]);
        this.ohh.mgf("cmincredit", "#zbu", [d.xzt]);
        this.ohh.mgf("cmaxcredit", "#zbu", [d.sri]);
        this.ohh.mgf("cmaxwin", "#zbu", [d.lpr]);
        if (this.parent.alb === true && wpb.zan.value44.d === true) {
            this.jus = d.gdl
        }
    };
    this.fur = function(n, m, o, j) {
        if (!this.qdz()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.ohh.ysv(),
            e = this.tgy,
            l = this.mxo;
        if (this.qli) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.tgy);
            e.addColorStop(1, this.qli)
        }
        if (this.mtp) {
            if (this.cif === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.cif === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.cif === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.cif === "left") {
                l.addColorStop(1, this.mxo);
                l.addColorStop(0, this.mtp)
            } else {
                if (this.cif === "center" || this.cif === "right") {
                    l.addColorStop(0, this.mxo);
                    l.addColorStop(1, this.mtp)
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
        wpb.trp.uhd(p, 0, 0, this.width, this.height, this.ajn, this.kvg, this.kvg, this.ajn, e, 1, l, this.uth, 1);
        wpb.trp.sbn(p, this.hnx.x, this.hnx.y, this.hnx.width, this.hnx.height, this.zut, this.uay, this.kzc, this.uth / 2);
        wpb.trp.sbn(p, this.qcq.x, this.qcq.y, this.qcq.width, this.qcq.height, this.zut, this.uay, this.kzc, this.uth / 2);
        wpb.trp.vio(p, this.itx, this.bfc, this.gbn.x, this.gbn.y, this.gbn.width, this.gbn.height, this.wxm, this.jjz, this.zxl);
        wpb.trp.aaj(p, this.jus, this.uzv, this.ktu.x, this.ktu.y, this.ktu.width, this.ktu.height, this.wxm, this.emd, this.zxl, "center", true);
        wpb.trp.lye(p, this.rmj, this.uzv, this.vaf.x, this.vaf.y, this.vaf.width, this.vaf.height, this.wxm, this.emd, this.zxl, 0);
        wpb.trp.vio(p, this.qfl, this.uzv, this.mve.x, this.mve.y, this.mve.width, this.mve.height, this.wxm, this.emd, this.zxl);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].fur()
        }
        p.restore();
        if (this.rzg && this.upi) {
            if (this.eex) {
                if (this.dwn > 0) {
                    if (this.cif === "left") {
                        this.rzg.drawImage(this.upi, this.width - this.dwn, 0, this.dwn, this.height, this.x, this.y, this.dwn, this.height)
                    } else {
                        if (this.cif === "right") {
                            this.rzg.drawImage(this.upi, 0, 0, this.dwn, this.height, this.x + this.width - this.dwn, this.y, this.dwn, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.rzg.drawImage(this.upi, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.rzg.drawImage(this.upi, this.x, this.y)
                }
            }
        }
    };
    this.rej = function() {
        b.parent.fur();
        if (b.aex[b.mhs] <= 0) {
            return
        }
        if (b.zly === false) {
            b.fcc = setTimeout(b.parent.mic, 400);
            b.kau = setTimeout(b.parent.omm, 500)
        } else {
            b.eex = true;
            b.zkt = true;
            b.fcc = setTimeout(b.gyp, 400)
        }
    };
    this.brj = function() {
        b.parent.fur();
        b.ymr = true;
        if (b.zly === false) {
            b.fcc = setTimeout(b.parent.mic, 400)
        } else {
            b.eex = true;
            b.fcc = setTimeout(b.gyp, 400)
        }
    };
    this.ffo = function() {
        b.mhs = (b.mhs < b.aex.length - 1) ? b.mhs + 1 : 0;
        b.parent.eze.wym("step0");
        b.ohh.mgf("gamesd", "#zbu", [(b.aex[b.mhs] > 0) ? b.aex[b.mhs] : "---"]);
        b.parent.fur();
        return (b.mhs >= b.aex.length - 1)
    };
    this.skb = function() {
        b.mhs = (b.mhs > 0) ? b.mhs - 1 : b.aex.length - 1;
        b.parent.eze.wym("step0");
        b.ohh.mgf("gamesd", "#zbu", [(b.aex[b.mhs] > 0) ? b.aex[b.mhs] : "---"]);
        b.parent.fur();
        return (b.mhs <= 0)
    };
    this.dve = function() {
        var d = b.ohh.xpy("cmincredit") == null || b.ohh.mgf("cmincredit", "#nyb");
        if (d === true) {
            if (++b.pvb > 10) {
                b.unl = 10
            }
            b.hha = (b.hha + (b.bri * b.unl) <= b.parent.fmn) ? b.hha + (b.bri * b.unl) : b.parent.fmn;
            b.parent.eze.wym("step0");
            b.ohh.mgf("mincreditd", "#zbu", [(b.hha > 0) ? b.parent.sbe(b.hha) : "---"]);
            b.ohh.mgf("mmincredit", "#kwl", [d && b.hha < b.parent.fmn]);
            b.ohh.mgf("lmincredit", "#kwl", [d && b.hha > 0]);
            b.parent.fur();
            return (b.hha >= b.parent.fmn)
        }
        return true
    };
    this.sjt = function() {
        var d = b.ohh.xpy("cmincredit") == null || b.ohh.mgf("cmincredit", "#nyb");
        if (d === true) {
            if (++b.pvb > 10) {
                b.unl = 10
            }
            b.hha = (b.hha - (b.bri * b.unl) > 0) ? b.hha - (b.bri * b.unl) : 0;
            b.parent.eze.wym("step0");
            b.ohh.mgf("mincreditd", "#zbu", [(b.hha > 0) ? b.parent.sbe(b.hha) : "---"]);
            b.ohh.mgf("mmincredit", "#kwl", [d && b.hha < b.parent.fmn]);
            b.ohh.mgf("lmincredit", "#kwl", [d && b.hha > 0]);
            b.parent.fur();
            return (b.hha >= b.parent.fmn || b.hha <= 0)
        }
        return true
    };
    this.tqa = function() {
        var d = b.ohh.xpy("cmaxcredit") == null || b.ohh.mgf("cmaxcredit", "#nyb");
        if (d === true) {
            if (++b.pvb > 10) {
                b.unl = 10
            }
            b.gpo = (b.gpo + (b.yvx * b.unl) > 0) ? b.gpo + (b.yvx * b.unl) : 0;
            b.parent.eze.wym("step0");
            b.ohh.mgf("maxcreditd", "#zbu", [(b.gpo > 0) ? b.parent.sbe(b.gpo) : "---"]);
            b.ohh.mgf("lmaxcredit", "#kwl", [d && b.gpo > b.parent.fmn]);
            b.parent.fur();
            return (b.gpo <= b.parent.fmn)
        }
        return true
    };
    this.gad = function() {
        var d = b.ohh.xpy("cmaxcredit") == null || b.ohh.mgf("cmaxcredit", "#nyb");
        if (d === true) {
            if (++b.pvb > 10) {
                b.unl = 10
            }
            b.gpo = (b.gpo - (b.yvx * b.unl) > b.parent.fmn) ? b.gpo - (b.yvx * b.unl) : b.parent.fmn;
            b.parent.eze.wym("step0");
            b.ohh.mgf("maxcreditd", "#zbu", [(b.gpo > 0) ? b.parent.sbe(b.gpo) : "---"]);
            b.ohh.mgf("lmaxcredit", "#kwl", [d && b.gpo > b.parent.fmn]);
            b.parent.fur();
            return (b.gpo <= b.parent.fmn)
        }
        return true
    };
    this.dnx = function() {
        var d = b.ohh.xpy("cmaxwin") == null || b.ohh.mgf("cmaxwin", "#nyb");
        if (d === true) {
            if (++b.pvb > 10) {
                b.unl = 10
            }
            b.oyo = (b.oyo + (b.yvx * b.unl) > 0) ? b.oyo + (b.yvx * b.unl) : 0;
            b.parent.eze.wym("step0");
            b.ohh.mgf("maxwind", "#zbu", [(b.oyo > 0) ? b.parent.sbe(b.oyo) : "---"]);
            b.ohh.mgf("lmaxwin", "#kwl", [d && b.oyo > b.yvx]);
            b.parent.fur();
            return (b.oyo <= b.yvx)
        }
        return true
    };
    this.nep = function() {
        var d = b.ohh.xpy("cmaxwin") == null || b.ohh.mgf("cmaxwin", "#nyb");
        if (d === true) {
            if (++b.pvb > 10) {
                b.unl = 10
            }
            b.oyo = (b.oyo - (b.yvx * b.unl) > 0) ? b.oyo - (b.yvx * b.unl) : b.yvx;
            b.parent.eze.wym("step0");
            b.ohh.mgf("maxwind", "#zbu", [(b.oyo > 0) ? b.parent.sbe(b.oyo) : "---"]);
            b.ohh.mgf("lmaxwin", "#kwl", [d && b.oyo > b.yvx]);
            b.parent.fur();
            return (b.oyo <= b.yvx)
        }
        return true
    };
    this.jrl = function() {
        var d = b.ohh.xpy("cmincredit") == null || b.ohh.mgf("cmincredit", "#nyb");
        b.hha = b.parent.fmn;
        b.ohh.mgf("mincreditd", "#zbu", [(d === true && b.hha > 0) ? b.parent.sbe(b.hha) : "---"]);
        b.ohh.mgf("lmincredit", "#kwl", [d]);
        b.ohh.mgf("mmincredit", "#kwl", [d && b.hha < b.parent.fmn]);
        b.parent.fur()
    };
    this.rvd = function() {
        var d = b.ohh.xpy("cmaxcredit") == null || b.ohh.mgf("cmaxcredit", "#nyb");
        b.gpo = b.parent.fmn;
        b.ohh.mgf("maxcreditd", "#zbu", [(d === true && b.gpo > 0) ? b.parent.sbe(b.gpo) : "---"]);
        b.ohh.mgf("lmaxcredit", "#kwl", [d && b.gpo > b.parent.fmn]);
        b.ohh.mgf("mmaxcredit", "#kwl", [d]);
        b.parent.fur()
    };
    this.nsd = function() {
        var d = b.ohh.xpy("cmaxwin") == null || b.ohh.mgf("cmaxwin", "#nyb");
        if (b.oyo === 0) {
            b.oyo = b.yvx
        }
        b.ohh.mgf("maxwind", "#zbu", [(d === true && b.oyo > 0) ? b.parent.sbe(b.oyo) : "---"]);
        b.ohh.mgf("lmaxwin", "#kwl", [d && b.oyo > b.yvx]);
        b.ohh.mgf("mmaxwin", "#kwl", [d]);
        b.parent.fur()
    }
}
cnz.prototype = new biu;

function hkd() {
    this.ohw = "right";
    this.qkp = "left";
    this.wqq = null;
    this.kwe = null;
    this.itx = null;
    this.oyc = -1;
    this.twt = -1;
    this.uah = true;
    this.rwx = false;
    this.xci = false;
    this.eex = false;
    this.hod = 0;
    this.did = 0;
    this.sdn = [];
    this.rqh = 0;
    this.wbj = 0;
    this.wpm = 1;
    this.vts = 0;
    this.omi = 0;
    this.cif = this.ohw;
    this.wxm = null;
    this.zxl = "bold";
    this.uzv = "rgb(255,255,255)";
    this.tgy = "rgb(0,0,0)";
    this.smj = "rgb(0,0,0)";
    this.ffi = "rgb(0,0,0)";
    this.crl = 0.7;
    this.xlr = null;
    this.ksu = null;
    this.chn = null;
    this.xvc = new rud();
    this.mop = new rud();
    this.zuo = new rud();
    this.gbn = new rud();
    this.uth = 2;
    this.eaq = 5;
    this.nrh = 4;
    this.umi = 10;
    this.wzo = 5;
    this.owy = 15;
    var a = 200;
    this.xhw = function(c, d, f) {
        this.sdn = [];
        this.hod = (d < 0) ? 0 : d;
        this.did = (f < 0) ? 0 : f;
        for (var e = this.hod, b = 0; e <= this.did; e++) {
            this.sdn[b++] = c[e]
        }
        this.rqh = this.sdn.length;
        this.vts = this.xvc.height / this.rqh
    };
    this.rmt = function(b) {
        try {
            this.owy = b.fontSize;
            this.uth = b.ihx;
            this.eaq = b.pbk;
            this.nrh = b.fkp;
            this.umi = b.xho;
            this.wzo = b.rcz;
            this.xvc = new rud(b.smu.x, b.smu.y + b.xhs, b.smu.width, b.smu.height - 2 * b.xhs);
            this.mop = new rud(b.smu.x, b.smu.y, b.smu.width, b.xhs);
            this.zuo = new rud(b.smu.x, b.smu.y + b.smu.height - b.xhs, b.smu.width, b.xhs);
            this.gbn = b.gjb
        } catch (c) {
            console.error(c)
        }
    };
    this.pzz = function(b) {
        try {
            this.wxm = b.font;
            this.zxl = b.ovs;
            this.uzv = b.lda;
            this.tgy = b.backgroundColor;
            this.smj = b.jpv;
            this.ffi = b.jez;
            this.crl = b.ccc;
            this.ksu = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.ksu.addColorStop(0, b.zcl);
            this.ksu.addColorStop(1, b.obu);
            this.xlr = this.context2D.createLinearGradient(this.xvc.x, 0, this.xvc.x + this.xvc.width, 0);
            this.chn = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.cif === this.ohw) {
                this.xlr.addColorStop(0, b.lkv);
                this.xlr.addColorStop(1, b.ook);
                this.chn.addColorStop(0, b.hvk);
                this.chn.addColorStop(1, b.qdv)
            } else {
                if (this.cif === this.qkp) {
                    this.xlr.addColorStop(0, b.ook);
                    this.xlr.addColorStop(1, b.lkv);
                    this.chn.addColorStop(0, b.qdv);
                    this.chn.addColorStop(1, b.hvk)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.qwn = function(b, f, c) {
        if (this.eex || !this.uah || this.xci) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.zuo.tru(e, d)) {
                this.llw(-1);
                this.wym();
                this.znu(true, true)
            } else {
                if (this.mop.tru(e, d)) {
                    this.llw(1);
                    this.wym();
                    this.znu(true, true)
                } else {
                    if (this.xvc.tru(e, d)) {
                        this.rwx = true;
                        this.ppm(f);
                        this.znu(true, true)
                    }
                }
            }
            this.ett(this.wbj);
            return true
        }
    };
    this.vtx = function() {
        if (this.rwx) {
            this.rwx = false;
            this.wym();
            return true
        }
        return false
    };
    this.szu = function(b) {
        if (this.eex || !this.uah || this.xci) {
            return true
        }
        if (b == this.twt) {
            this.llw(-1);
            this.wym();
            this.znu(true, true);
            this.ett(this.wbj);
            return true
        } else {
            if (b == this.oyc) {
                this.llw(1);
                this.wym();
                this.znu(true, true);
                this.ett(this.wbj);
                return true
            }
        }
        return false
    };
    this.bjz = function() {};
    this.clx = function(b, d, c) {
        if (!this.rwx) {
            return false
        }
        if (b >= this.x + this.xvc.x && b <= this.x + this.xvc.x + this.xvc.width && d >= this.y + this.xvc.y && d <= this.y + this.xvc.y + this.xvc.height) {
            this.ppm(d);
            this.ett(this.wbj);
            return true
        }
        return false
    };
    this.znu = function(b, c) {
        this.xci = b;
        c = (c === false) ? false : true;
        clearTimeout(this.yvv);
        if (this.xci === true && c === true) {
            this.yvv = setTimeout(this.awm, a)
        }
    };
    this.awm = function() {};
    this.ett = function(b) {};
    this.wym = function() {};
    this.jhq = function(b, c) {
        this.hod = (b < 0) ? 0 : b;
        this.did = (c < 0) ? 0 : c;
        if (this.sdn) {
            this.did = (this.did > this.sdn.length - 1) ? this.sdn.length - 1 : this.did
        }
    };
    this.lpj = function() {
        this.kwl(true, true)
    };
    this.gyp = function() {
        this.kwl(false, true)
    };
    this.dxj = function(b) {
        this.uah = b
    };
    this.wek = function() {
        return this.uah
    };
    this.zqq = function(b, c) {
        this.wbj = b;
        if (this.wbj < this.hod) {
            this.wbj = this.hod
        }
        if (this.wbj >= this.did) {
            this.wbj = this.did
        }
        this.wpm = this.wbj + 1;
        if (c && c === true) {
            this.parent.fur()
        }
    };
    this.paw = function(d, e) {
        this.wbj = 0;
        for (var c = 0, b = this.sdn.length; c < b; c++) {
            if (this.sdn[c] == d) {
                this.wbj = c;
                break
            }
        }
        this.wbj = (this.wbj >= this.hod) ? this.wbj : this.hod;
        this.wbj = (this.wbj < this.did) ? this.wbj : this.did;
        this.wpm = this.wbj + 1;
        if (e) {
            this.parent.fur()
        }
    };
    this.ppm = function(b) {
        this.wbj = Math.ceil(((this.xvc.height) - (b - this.xvc.y - this.y)) / this.vts) - 1;
        this.wbj = (this.wbj >= this.hod) ? this.wbj : this.hod;
        this.wbj = (this.wbj < this.did) ? this.wbj : this.did;
        this.wpm = this.wbj + 1;
        this.parent.fur()
    };
    this.llw = function(b) {
        this.wbj += b;
        this.wbj = (this.wbj >= this.hod) ? this.wbj : this.hod;
        this.wbj = (this.wbj < this.did) ? this.wbj : this.did;
        this.wpm = this.wbj + 1;
        this.parent.fur()
    };
    this.fur = function() {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        this.vsc();
        if (this.rzg && this.upi) {
            this.rzg.drawImage(this.ihm, this.x, this.y)
        }
    };
    this.vsc = function() {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.agn(b);
        this.hnn(b);
        this.jkm(b);
        this.cqb(b);
        this.pbj(b);
        b.restore()
    };
    this.agn = function(b) {
        if (this.cif === this.qkp) {
            wpb.trp.uhd(b, 0, 0, this.width, this.height, this.eaq, 0, 0, this.eaq, this.tgy, 0.4, this.chn, this.uth, 1)
        } else {
            if (this.cif === this.ohw) {
                wpb.trp.uhd(b, 0, 0, this.width, this.height, 0, this.eaq, this.eaq, 0, this.tgy, 0.4, this.chn, this.uth, 1)
            }
        }
    };
    this.hnn = function(b) {
        wpb.trp.ueq(b, this.xvc.x, this.xvc.y, this.xvc.width, this.xvc.height, this.smj, 1)
    };
    this.jkm = function(b) {
        wpb.trp.ueq(b, this.xvc.x, this.xvc.y + this.xvc.height - Math.round(this.wpm * this.vts), this.xvc.width, Math.round(this.wpm * this.vts), this.ksu, 1)
    };
    this.cqb = function(b) {
        wpb.trp.ueq(b, this.xvc.x - this.nrh, this.xvc.y - this.nrh, this.xvc.width + 2 * this.nrh, this.xvc.height + 2 * this.nrh, null, 0, this.xlr, this.nrh, 1);
        if (this.cif === this.qkp) {
            wpb.trp.uhd(b, this.xvc.x - this.nrh, this.mop.y, this.xvc.width + 2 * this.nrh, this.mop.height, this.umi, 0, 0, 0, this.xlr, 1);
            wpb.trp.uhd(b, this.xvc.x - this.nrh, this.zuo.y, this.xvc.width + 2 * this.nrh, this.zuo.height, 0, 0, 0, this.umi, this.xlr, 1)
        } else {
            if (this.cif === this.ohw) {
                wpb.trp.uhd(b, this.xvc.x - this.nrh, this.mop.y, this.xvc.width + 2 * this.nrh, this.mop.height, 0, this.umi, 0, 0, this.xlr, 1);
                wpb.trp.uhd(b, this.xvc.x - this.nrh, this.zuo.y, this.xvc.width + 2 * this.nrh, this.zuo.height, 0, 0, this.umi, 0, this.xlr, 1)
            }
        }
        b.strokeStyle = this.xlr;
        b.lineWidth = Math.round(this.nrh / 4);
        b.beginPath();
        for (var c = 1; c < this.rqh; c++) {
            b.moveTo(this.xvc.x, this.xvc.y + this.xvc.height - Math.round(c * this.vts));
            b.lineTo(this.xvc.x + this.xvc.width, this.xvc.y + this.xvc.height - Math.round(c * this.vts))
        }
        b.closePath();
        b.stroke();
        if (this.wqq) {
            if (this.cif === this.qkp) {
                b.drawImage(this.wqq, 0, 0, this.wqq.width / 2, this.wqq.height, this.xvc.x, this.xvc.y, this.xvc.width, this.xvc.height)
            } else {
                if (this.cif === this.ohw) {
                    b.drawImage(this.wqq, this.wqq.width / 2, 0, this.wqq.width / 2, this.wqq.height, this.xvc.x, this.xvc.y, this.xvc.width, this.xvc.height)
                }
            }
        }
    };
    this.pbj = function(c) {
        var f = this.uzv,
            e = this.uzv,
            b = 0,
            d = 0;
        if (this.cif === this.qkp) {
            b = this.wzo;
            d = this.xvc.x - 2 * this.wzo
        } else {
            if (this.cif === this.ohw) {
                b = this.xvc.x + this.xvc.width + this.wzo;
                d = this.width - this.wzo - (this.xvc.x + this.xvc.width + this.wzo)
            }
        }
        if (this.wbj > 0 && this.wbj < this.sdn.length - 1) {
            wpb.trp.ueq(c, b, this.xvc.y + ((this.rqh - this.wpm) * this.vts), d, this.vts, this.ffi, this.crl);
            wpb.trp.oub(c, this.sdn[this.wbj], this.ksu, b, this.xvc.y + ((this.rqh - this.wpm) * this.vts) + (this.vts - this.owy) / 2, d, this.owy, this.wxm, this.owy, this.zxl, this.wzo)
        } else {
            if (this.wbj == 0) {
                f = this.ksu
            } else {
                if (this.wbj == this.sdn.length - 1) {
                    e = this.ksu
                }
            }
        }
        wpb.trp.ueq(c, b, this.xvc.y + (this.vts * (this.rqh - 1)), d, this.vts, this.ffi, this.crl);
        wpb.trp.oub(c, this.sdn[0], f, b, this.xvc.y + (this.vts * (this.rqh - 1)) + (this.vts - this.owy) / 2, d, this.owy, this.wxm, this.owy, this.zxl, this.wzo);
        wpb.trp.ueq(c, b, this.xvc.y, d, this.vts, this.ffi, this.crl);
        wpb.trp.oub(c, this.sdn[this.sdn.length - 1], e, b, this.xvc.y + (this.vts - this.owy) / 2, d, this.owy, this.wxm, this.owy, this.zxl, this.wzo);
        wpb.trp.vio(c, "+", this.uzv, this.mop.x, this.mop.y, this.mop.width, this.mop.height, this.wxm, this.owy, this.zxl);
        wpb.trp.vio(c, "", this.uzv, this.zuo.x, this.zuo.y, this.zuo.width, this.zuo.height, this.wxm, this.owy, this.zxl);
        if (this.itx) {
            wpb.trp.vio(c, this.itx, this.uzv, this.gbn.x, this.gbn.y, this.gbn.width, this.gbn.height, this.wxm, this.owy, this.zxl)
        }
    }
}
hkd.prototype = new biu;

function gfp() {
    var a = this;
    this.ohh = null;
    this.scg = false;
    this.wjs = "";
    this.ksw = "";
    this.dhq = "";
    this.siy = "";
    this.jus = "";
    this.rmj = "";
    this.qfl = "";
    this.wxm = "arial";
    this.zxl = "bold";
    this.uzv = "white";
    this.tgy = "black";
    this.qli = null;
    this.mxo = "white";
    this.mtp = "rgb(150,150,150)";
    this.uth = 3;
    this.eaq = 4;
    this.tqq = 24;
    this.snn = 24;
    this.emd = 24;
    this.gjw = new rud();
    this.cgp = new rud();
    this.psl = new rud();
    this.xwn = new rud();
    this.tqv = new rud();
    this.ahj = new rud();
    this.edj = new rud();
    this.aex = [];
    this.mhs = 0;
    this.bri = 0;
    this.yvx = 0;
    this.irv = 0;
    this.ugm = 0;
    this.hha = 0;
    this.gpo = 0;
    this.oyo = 0;
    this.yqd = false;
    this.lad = false;
    this.wbj = 0;
    this.udz = true;
    this.lfh = true;
    this.qgp = null;
    this.erh = 0;
    this.pvb = 0;
    this.unl = 1;
    this.iwt = 250;
    this.yjn = function(b, d, c) {
        gfp.prototype.yjn.call(this, b, d, c);
        this.ohh = new ppr();
        this.ohh.yjn();
        this.ohh.qaf("buttons");
        this.ohh.qaf("displays");
        this.ohh.qaf("checkboxes");
        this.ohh.qaf("lbuttons");
        this.ohh.qaf("mbuttons");
        this.ohh.qaf("tbuttons");
        this.ohh.qaf("bbuttons");
        this.ohh.qaf("bdisplays");
        this.ohh.qaf("abuttons");
        this.ohh.qaf("adisplays");
        this.ohh.qaf("acheckboxes");
        this.ohh.qaf("sbuttons");
        this.ohh.qaf("hbuttons")
    };
    this.xxb = function(b) {
        try {
            this.kvz(b);
            this.imx(b);
            this.kmv(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.pzz = function(b) {
        try {
            var c = this.ohh.vtm("lbuttons"),
                n = this.ohh.vtm("mbuttons"),
                k = this.ohh.vtm("tbuttons"),
                m = this.ohh.vtm("sbuttons"),
                l = this.ohh.vtm("hbuttons"),
                f = this.ohh.vtm("displays");
            this.wxm = b.font;
            this.zxl = b.ovs;
            this.uzv = b.lda;
            this.tgy = b.backgroundColor;
            this.qli = b.kck;
            this.mxo = b.borderColor;
            this.mtp = b.mqp;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].pzz(b.rpk)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].pzz(b.bmq)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].pzz(b.bxq)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].pzz(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].pzz(b.gxk)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].pzz(b.gxk)
            }
            this.ohh.neu("checkboxes", "#pzz", [b.zfw])
        } catch (j) {
            console.error(j)
        }
    };
    this.rmt = function(g) {
        try {
            var b = this.ohh.vtm("lbuttons"),
                o = this.ohh.vtm("mbuttons"),
                l = this.ohh.vtm("tbuttons"),
                n = this.ohh.vtm("sbuttons"),
                m = this.ohh.vtm("hbuttons"),
                c = this.ohh.vtm("bdisplays"),
                f = this.ohh.vtm("adisplays");
            sxp = this.ohh.vtm("checkboxes"), bah = n.length, bic = (bah <= 2) ? g.zjv : (bah <= 3) ? g.rfc : (bah <= 4) ? g.rfo : g.kux, bah = m.length, svj = (bah <= 2) ? g.zjv : (bah <= 3) ? g.rfc : (bah <= 4) ? g.rfo : g.kux, rkp = (this.parent.mnu() != null) ? g.hdj : g.oxo;
            this.uth = g.ihx;
            this.eaq = g.pbk;
            this.tqq = g.ijj;
            this.snn = g.lxq;
            this.emd = g.vse;
            this.gjw = g.rey;
            this.cgp = g.nxb;
            this.psl = g.drp;
            this.xwn = g.fbm;
            this.tqv = g.xbm;
            this.ahj = g.uqu;
            this.edj = g.gdt;
            this.ohh.mgf("bett", "#aqq", [rkp.jyr]);
            this.ohh.mgf("autot", "#aqq", [rkp.iqg]);
            this.ohh.mgf("helpt", "#aqq", [rkp.cer]);
            this.ohh.mgf("settingt", "#aqq", [rkp.dpf]);
            this.ohh.mgf("returnt", "#aqq", [rkp.jnu]);
            this.ohh.mgf("lbet", "#aqq", [g.esx]);
            this.ohh.mgf("mbet", "#aqq", [g.gjr]);
            this.ohh.mgf("llines", "#aqq", [g.oac]);
            this.ohh.mgf("mlines", "#aqq", [g.jtp]);
            this.ohh.mgf("betd", "#aqq", [g.tcu]);
            this.ohh.mgf("linesd", "#aqq", [g.ibz]);
            this.ohh.mgf("totald", "#aqq", [g.bkp]);
            this.ohh.mgf("lgames", "#aqq", [g.yho]);
            this.ohh.mgf("mgames", "#aqq", [g.hwy]);
            this.ohh.mgf("lmincredit", "#aqq", [g.ahb]);
            this.ohh.mgf("mmincredit", "#aqq", [g.cuo]);
            this.ohh.mgf("lmaxcredit", "#aqq", [g.oct]);
            this.ohh.mgf("mmaxcredit", "#aqq", [g.itw]);
            this.ohh.mgf("lmaxwin", "#aqq", [g.jxh]);
            this.ohh.mgf("mmaxwin", "#aqq", [g.org]);
            this.ohh.mgf("gamesd", "#aqq", [g.ftf]);
            this.ohh.mgf("mincreditd", "#aqq", [g.qtt]);
            this.ohh.mgf("maxcreditd", "#aqq", [g.bmt]);
            this.ohh.mgf("maxwind", "#aqq", [g.yvf]);
            this.ohh.mgf("cmincredit", "#aqq", [g.zww]);
            this.ohh.mgf("cmaxcredit", "#aqq", [g.xlz]);
            this.ohh.mgf("cmaxwin", "#aqq", [g.bvt]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].rmt(g.rpk)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].rmt(g.bmq)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].rmt(g.bxq)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].rmt(g.cye)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].rmt(g.tgm)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].rmt(g.gxk)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].rmt(g.gxk)
            }
            for (var d = 0, j = sxp.length; d < j; d++) {
                sxp[d].rmt(g.zfw)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].aqq(bic[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].aqq(svj[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.kvz = function(c) {
        var b = (this.parent.mnu() != null) ? c.hdj : c.oxo;
        this.ohh.usx("bett", this.wqe(b.jyr, null, this.parent.eze.ilh("btn_b"), this.sbr, null), ["buttons", "tbuttons"]);
        if (this.parent.mnu() != null) {
            this.ohh.usx("autot", this.wqe(b.iqg, null, this.parent.eze.ilh("btn_as"), this.dhu, null), ["buttons", "tbuttons"])
        }
        this.ohh.usx("helpt", this.wqe(b.cer, null, this.parent.eze.ilh("btn_i"), this.rel, null), ["buttons", "tbuttons"]);
        this.ohh.usx("settingt", this.wqe(b.dpf, null, this.parent.eze.ilh("btn_se"), this.awi, null), ["buttons", "tbuttons"]);
        this.ohh.usx("returnt", this.wqe(b.jnu, null, this.parent.eze.ilh("btn_c"), this.xel, null), ["buttons", "tbuttons"])
    };
    this.imx = function(b) {
        this.ohh.usx("betd", this.obc(b.tcu, null, this.parent.cxg), ["displays", "bdisplays"]);
        this.ohh.usx("lbet", this.riu(b.esx, "", this.parent.dhl), ["buttons", "lbuttons", "bbuttons"]);
        this.ohh.usx("mbet", this.riu(b.gjr, "+", this.parent.esv), ["buttons", "mbuttons", "bbuttons"]);
        this.ohh.usx("linesd", this.obc(b.ibz, null, this.parent.opk), ["displays", "bdisplays"]);
        if (this.scg) {
            this.ohh.usx("llines", this.riu(b.oac, "", this.parent.hmj), ["buttons", "lbuttons", "bbuttons"]);
            this.ohh.usx("mlines", this.riu(b.jtp, "+", this.parent.oaq), ["buttons", "mbuttons", "bbuttons"])
        }
        this.ohh.usx("totald", this.obc(b.bkp, null, this.parent.pqi()), ["displays", "bdisplays"])
    };
    this.kmv = function(b) {
        this.ohh.usx("gamesd", this.obc(b.ftf, null, this.aex[this.mhs]), ["displays", "adisplays"]);
        this.ohh.usx("lgames", this.riu(b.yho, "", this.skb), ["buttons", "lbuttons", "abuttons"]);
        this.ohh.usx("mgames", this.riu(b.hwy, "+", this.ffo), ["buttons", "mbuttons", "abuttons"]);
        this.ohh.usx("mincreditd", this.obc(b.qtt, null, "---"), ["displays", "adisplays"]);
        this.ohh.usx("lmincredit", this.riu(b.ahb, "", this.sjt), ["buttons", "lbuttons", "abuttons"]);
        this.ohh.usx("mmincredit", this.riu(b.cuo, "+", this.dve), ["buttons", "mbuttons", "abuttons"]);
        this.ohh.usx("maxcreditd", this.obc(b.bmt, null, "---"), ["displays", "adisplays"]);
        this.ohh.usx("lmaxcredit", this.riu(b.oct, "", this.gad), ["buttons", "lbuttons", "abuttons"]);
        this.ohh.usx("mmaxcredit", this.riu(b.itw, "+", this.tqa), ["buttons", "mbuttons", "abuttons"]);
        this.ohh.usx("maxwind", this.obc(b.yvf, null, "---"), ["displays", "adisplays"]);
        this.ohh.usx("lmaxwin", this.riu(b.jxh, "", this.nep), ["buttons", "lbuttons", "abuttons"]);
        this.ohh.usx("mmaxwin", this.riu(b.org, "+", this.dnx), ["buttons", "mbuttons", "abuttons"]);
        this.ohh.usx("cmincredit", this.yfz(b.zww, "", this.jrl), ["checkboxes", "acheckboxes"]);
        this.ohh.usx("cmaxcredit", this.yfz(b.xlz, "", this.rvd), ["checkboxes", "acheckboxes"]);
        this.ohh.usx("cmaxwin", this.yfz(b.bvt, "", this.nsd), ["checkboxes", "acheckboxes"])
    };
    this.uxz = function(i, g, f, e, d, b) {
        var c = new oun();
        c.yjn(new rud(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.ett = e;
        c.qqv = g;
        c.olq(d, b);
        c.rmt(this.parent.bnu.sad.gxk);
        c.pzz(this.parent.style.sad.gxk);
        c.rcg(f);
        this.ohh.usx(i, c, ["buttons", "sbuttons"])
    };
    this.riy = function(f, e, d, c) {
        var b = new oun();
        b.yjn(new rud(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.ett = c;
        b.qqv = e;
        b.rmt(this.parent.bnu.sad.gxk);
        b.pzz(this.parent.style.sad.gxk);
        b.rcg(d);
        this.ohh.usx(f, b, ["buttons", "hbuttons"])
    };
    this.obc = function(b, e, d) {
        var c = new lyq();
        c.yjn(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.riu = function(c, e, d) {
        var b = new xit();
        b.yjn(c, this.context2D, null, null, e);
        b.parent = this;
        b.ett = d;
        return b
    };
    this.wqe = function(d, g, f, e, c) {
        var b = new xit();
        b.yjn(d, this.context2D, null, f, g);
        b.parent = this;
        b.ett = e;
        if (c != null) {
            b.bdd = c
        }
        return b
    };
    this.yfz = function(c, e, d) {
        var b = new rvs();
        b.yjn(c, this.context2D, null, e);
        b.parent = this;
        b.ett = d;
        return b
    };
    this.qwn = function(o, n) {
        var m = this.ohh.vtm("buttons"),
            g = this.ohh.vtm("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.qdz() === true) {
                if (b.wek() === true && b.mhg() === false) {
                    if (b instanceof oun) {
                        this.parent.eze.qys("btn");
                        this.parent.eze.wym("btn");
                        b.lyt(true, true, true);
                        b.ett()
                    } else {
                        if (b instanceof xit) {
                            if (b.upx() === "rect") {
                                this.parent.eze.qys("btn");
                                this.parent.eze.wym("btn");
                                b.lyt(true, true, false);
                                b.ett()
                            } else {
                                b.lyt(true, false, false);
                                this.pvb = 0;
                                this.unl = 1;
                                if (b.ett() === false) {
                                    this.qgp = function() {
                                        if (b.ett() === true) {
                                            clearInterval(a.erh);
                                            b.lyt(false, true);
                                            for (var i = 0; i < l; i++) {
                                                m[i].znu(false)
                                            }
                                        }
                                    };
                                    this.erh = setInterval(this.qgp, this.iwt)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].znu(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.qdz() === true && k.wek() === true) {
                    k.nzo(!k.nyb(), true);
                    k.ett();
                    for (var c = 0; c < l; c++) {
                        g[c].znu(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.vtx = function() {
        var e = this.ohh.vtm("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.sxn() == true && !(c instanceof xit && c.upx() === "rect")) {
                clearInterval(this.erh);
                c.lyt(false, true);
                return true
            }
        }
        return false
    };
    this.szu = function(b) {};
    this.bjz = function(b) {};
    this.pvf = function(c, b, d) {
        this.ohh.mgf("betd", "#zbu", [c]);
        this.ohh.mgf("linesd", "#zbu", [b]);
        this.ohh.mgf("totald", "#zbu", [d]);
        this.parent.fur()
    };
    this.lyk = function(b) {
        this.aex = b.g;
        this.bri = b.v;
        this.yvx = b.v;
        this.yqd = b.r;
        this.lad = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.irv = b.m;
            this.ugm = b.m
        }
    };
    this.fgq = function() {
        if (this.yqd === true) {
            this.hha = this.parent.fmn;
            this.gpo = this.parent.fmn;
            this.mhs = 0;
            this.oyo = 0
        }
    };
    this.nly = function() {
        if (this.aex.length > 0 && this.mhs >= 0) {
            return this.aex[this.mhs]
        }
        return 0
    };
    this.hlv = function() {
        var b = this.ohh.xpy("cmincredit") == null || this.ohh.mgf("cmincredit", "#nyb");
        if (this.hha > 0 && b === true) {
            return this.hha
        }
        return 0
    };
    this.nfw = function() {
        var b = this.ohh.xpy("cmaxcredit") == null || this.ohh.mgf("cmaxcredit", "#nyb");
        if (this.gpo > 0 && b === true) {
            return this.gpo
        }
        return 0
    };
    this.nxp = function() {
        var b = this.ohh.xpy("cmaxwin") == null || this.ohh.mgf("cmaxwin", "#nyb");
        if (this.oyo > 0 && b === true) {
            return this.oyo
        }
        return 0
    };
    this.lpj = function(c, f, d) {
        if (this.aex && this.aex.length > 0) {
            var g = this.ohh.xpy("cmincredit") == null || this.ohh.mgf("cmincredit", "#nyb"),
                e = this.ohh.xpy("cmaxcredit") == null || this.ohh.mgf("cmaxcredit", "#nyb"),
                b = this.ohh.xpy("cmaxwin") == null || this.ohh.mgf("cmaxwin", "#nyb");
            if (this.yqd === true) {
                g = this.lad;
                e = false;
                b = false;
                this.fgq()
            } else {
                if (this.lad === true) {
                    g = true;
                    this.hha = (this.hha < this.parent.fmn) ? this.hha : this.parent.fmn;
                    this.hha = (this.hha > 0) ? this.hha : this.parent.fmn
                } else {
                    g = (this.hha < this.parent.fmn) ? g : false;
                    this.hha = (this.hha < this.parent.fmn) ? this.hha : this.parent.fmn
                }
                e = (this.gpo > this.parent.fmn) ? e : false;
                this.gpo = (this.gpo > this.parent.fmn) ? this.gpo : this.parent.fmn
            }
            this.ohh.mgf("cmincredit", "#nzo", [g]);
            this.ohh.mgf("cmaxcredit", "#nzo", [e]);
            this.ohh.mgf("cmaxwin", "#nzo", [b]);
            this.ohh.mgf("gamesd", "#zbu", [(this.aex[this.mhs] > 0) ? this.aex[this.mhs] : "---"]);
            this.ohh.mgf("mincreditd", "#zbu", [(g === true && this.hha > 0) ? this.parent.sbe(this.hha) : "---"]);
            this.ohh.mgf("maxcreditd", "#zbu", [(e === true && this.gpo > 0) ? this.parent.sbe(this.gpo) : "---"]);
            this.ohh.mgf("maxwind", "#zbu", [(b === true && this.oyo > 0) ? this.parent.sbe(this.oyo) : "---"]);
            this.ohh.mgf("lmincredit", "#kwl", [g]);
            this.ohh.mgf("mmincredit", "#kwl", [g]);
            this.ohh.mgf("lmaxcredit", "#kwl", [e]);
            this.ohh.mgf("mmaxcredit", "#kwl", [e]);
            this.ohh.mgf("lmaxwin", "#kwl", [b]);
            this.ohh.mgf("mmaxwin", "#kwl", [b])
        }
        this.udz = c;
        this.lfh = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.sbr()
            } else {
                if (d === 1) {
                    if (this.parent.mnu() != null) {
                        this.dhu()
                    } else {
                        this.rel()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.mnu() != null) {
                            this.rel()
                        } else {
                            this.awi()
                        }
                    } else {
                        if (d === 3 && this.parent.mnu() != null) {
                            this.awi()
                        }
                    }
                }
            }
        } else {
            this.sbr()
        }
        this.ohh.neu("tbuttons", "#dxj", [true]);
        this.kwl(true);
        this.parent.fur()
    };
    this.gyp = function() {
        this.ohh.neu("tbuttons", "#dxj", [false]);
        this.ohh.neu("bbuttons", "#dxj", [false]);
        this.ohh.neu("sbuttons", "#dxj", [false]);
        this.ohh.neu("abuttons", "#dxj", [false]);
        this.ohh.neu("acheckboxes", "#dxj", [false]);
        this.kwl(false);
        this.parent.fur()
    };
    this.stop = function() {
        clearInterval(this.erh)
    };
    this.hwa = function(d, b) {
        var c = "";
        this.ohh.mgf("language", "#zbu", [wpb.onl.pyl(d.language)]);
        this.ohh.mgf("audio", "#zbu", [wpb.onl.pyl(d.audio)]);
        this.ohh.mgf("melody", "#zbu", [wpb.onl.pyl(d.qdl)]);
        this.ohh.mgf("fullscreen", "#zbu", [wpb.onl.pyl(d.jjd)]);
        this.ohh.mgf("turbo", "#zbu", [wpb.onl.pyl(d.cyf)]);
        this.ohh.mgf("help", "#zbu", [wpb.onl.pyl(d.apd)]);
        this.ohh.mgf("history", "#zbu", [wpb.onl.pyl(d.ztv)]);
        this.ohh.mgf("statistic", "#zbu", [wpb.onl.pyl(d.qsf)]);
        this.ohh.mgf("rules", "#zbu", [wpb.onl.pyl(d.jar)]);
        this.ohh.mgf("gamble", "#zbu", [wpb.onl.pyl(d.rsp)]);
        if (wpb.onl.zjf[wpb.onl.kpg] === wpb.yca.qkp) {
            c = wpb.onl.pyl(d.left)
        } else {
            if (wpb.onl.zjf[wpb.onl.kpg] === wpb.yca.ohw) {
                c = wpb.onl.pyl(d.udr)
            } else {
                if (wpb.onl.zjf[wpb.onl.kpg] === wpb.yca.apz) {
                    c = wpb.onl.pyl(d.wwn)
                }
            }
        }
        this.ohh.mgf("adjustment", "#zbu", [c]);
        if (b && b === true) {
            this.wjs = wpb.onl.pyl(d.eaj) + "/" + wpb.onl.pyl(d.lsg) + ":";
            this.ksw = wpb.onl.pyl(d.opk) + ":"
        } else {
            this.wjs = wpb.onl.pyl(d.eaj) + ":"
        }
        this.dhq = wpb.onl.pyl(d.pih) + ":";
        this.rmj = wpb.onl.pyl(d.elx);
        this.qfl = wpb.onl.pyl(d.vaj);
        if (this.parent.alb === true && wpb.zan.value44.d === true) {
            this.jus = wpb.onl.pyl(d.gdl)
        }
        this.ohh.mgf("cmincredit", "#zbu", [wpb.onl.pyl(d.xzt)]);
        this.ohh.mgf("cmaxcredit", "#zbu", [wpb.onl.pyl(d.sri)]);
        this.ohh.mgf("cmaxwin", "#zbu", [wpb.onl.pyl(d.lpr)])
    };
    this.fur = function(l, j, m, e) {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.ohh.vtm("tbuttons"),
            b = this.tgy,
            g = this.mxo;
        if (this.qli) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.tgy);
            b.addColorStop(1, this.qli)
        }
        if (this.mtp) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.mxo);
            g.addColorStop(1, this.mtp)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        wpb.trp.sbn(n, 0, 0, this.width, this.height, this.eaq, b, g, this.uth);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].fur()
        }
        if (this.wbj === 0) {
            this.jsm(n)
        } else {
            if (this.wbj === 1) {
                this.mrp(n)
            } else {
                if (this.wbj === 2) {
                    this.alc(n)
                } else {
                    if (this.wbj === 3) {
                        this.god(n)
                    }
                }
            }
        }
        n.restore();
        if (this.rzg && this.upi) {
            if (c) {
                this.rzg.drawImage(this.upi, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.rzg.drawImage(this.upi, this.x, this.y)
            }
        }
    };
    this.jsm = function(c) {
        var f = this.ohh.vtm("bbuttons"),
            d = this.ohh.vtm("bdisplays");
        if (this.gjw.width > 0 && this.gjw.height > 0) {
            wpb.trp.lye(c, this.wjs, this.uzv, this.gjw.x, this.gjw.y, this.gjw.width, this.gjw.height, this.wxm, this.tqq, this.zxl, 0)
        }
        if (this.cgp.width > 0 && this.cgp.height > 0) {
            wpb.trp.lye(c, this.ksw, this.uzv, this.cgp.x, this.cgp.y, this.cgp.width, this.cgp.height, this.wxm, this.tqq, this.zxl, 0)
        }
        if (this.psl.width > 0 && this.psl.height > 0) {
            wpb.trp.lye(c, this.dhq, this.uzv, this.psl.x, this.psl.y, this.psl.width, this.psl.height, this.wxm, this.tqq, this.zxl, 0)
        }
        wpb.trp.aaj(c, this.siy, this.uzv, this.xwn.x, this.xwn.y, this.xwn.width, this.xwn.height, this.wxm, this.emd, this.zxl, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].fur()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].fur()
        }
    };
    this.mrp = function(c) {
        var f = this.ohh.vtm("abuttons"),
            d = this.ohh.vtm("adisplays"),
            g = this.ohh.vtm("acheckboxes");
        wpb.trp.aaj(c, this.jus, this.uzv, this.tqv.x, this.tqv.y, this.tqv.width, this.tqv.height, this.wxm, this.emd, this.zxl, "center", true);
        wpb.trp.lye(c, this.rmj, this.uzv, this.ahj.x, this.ahj.y, this.ahj.width, this.ahj.height, this.wxm, this.snn, this.zxl, 0);
        wpb.trp.vio(c, this.qfl, this.uzv, this.edj.x, this.edj.y, this.edj.width, this.edj.height, this.wxm, this.snn, this.zxl);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].fur()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].fur()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].fur()
        }
    };
    this.alc = function(c) {
        var d = this.ohh.vtm("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].fur()
        }
    };
    this.god = function(c) {
        var d = this.ohh.vtm("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].fur()
        }
    };
    this.ffo = function() {
        a.mhs = (a.mhs < a.aex.length - 1) ? a.mhs + 1 : 0;
        a.parent.eze.wym("btn");
        a.ohh.mgf("gamesd", "#zbu", [(a.aex[a.mhs] > 0) ? a.aex[a.mhs] : "---"]);
        a.fur();
        return (a.mhs >= a.aex.length - 1)
    };
    this.skb = function() {
        a.mhs = (a.mhs > 0) ? a.mhs - 1 : a.aex.length - 1;
        a.parent.eze.wym("btn");
        a.ohh.mgf("gamesd", "#zbu", [(a.aex[a.mhs] > 0) ? a.aex[a.mhs] : "---"]);
        a.fur();
        return (a.mhs <= 0)
    };
    this.dve = function() {
        var b = a.ohh.xpy("cmincredit") == null || a.ohh.mgf("cmincredit", "#nyb");
        if (b === true) {
            if (++a.pvb > 10) {
                a.unl = 10
            }
            a.hha = (a.hha + (a.bri * a.unl) <= a.parent.fmn) ? a.hha + (a.bri * a.unl) : a.parent.fmn;
            a.parent.eze.wym("btn");
            a.ohh.mgf("mincreditd", "#zbu", [(a.hha > 0) ? a.parent.sbe(a.hha) : "---"]);
            a.ohh.mgf("mmincredit", "#kwl", [b && a.hha < a.parent.fmn]);
            a.ohh.mgf("lmincredit", "#kwl", [b && a.hha > 0]);
            a.fur();
            return (a.hha >= a.parent.fmn)
        }
        return true
    };
    this.sjt = function() {
        var b = a.ohh.xpy("cmincredit") == null || a.ohh.mgf("cmincredit", "#nyb");
        if (b === true) {
            if (++a.pvb > 10) {
                a.unl = 10
            }
            a.hha = (a.hha - (a.bri * a.unl) > 0) ? a.hha - (a.bri * a.unl) : 0;
            a.parent.eze.wym("btn");
            a.ohh.mgf("mincreditd", "#zbu", [(a.hha > 0) ? a.parent.sbe(a.hha) : "---"]);
            a.ohh.mgf("mmincredit", "#kwl", [b && a.hha < a.parent.fmn]);
            a.ohh.mgf("lmincredit", "#kwl", [b && a.hha > 0]);
            a.fur();
            return (a.hha >= a.parent.fmn || a.hha <= 0)
        }
        return true
    };
    this.tqa = function() {
        var b = a.ohh.xpy("cmaxcredit") == null || a.ohh.mgf("cmaxcredit", "#nyb");
        if (b === true) {
            if (++a.pvb > 10) {
                a.unl = 10
            }
            a.gpo = (a.gpo + (a.yvx * a.unl) > 0) ? a.gpo + (a.yvx * a.unl) : 0;
            a.parent.eze.wym("btn");
            a.ohh.mgf("maxcreditd", "#zbu", [(a.gpo > 0) ? a.parent.sbe(a.gpo) : "---"]);
            a.ohh.mgf("lmaxcredit", "#kwl", [b && a.gpo > a.parent.fmn]);
            a.fur();
            return (a.gpo <= a.parent.fmn)
        }
        return true
    };
    this.gad = function() {
        var b = a.ohh.xpy("cmaxcredit") == null || a.ohh.mgf("cmaxcredit", "#nyb");
        if (b === true) {
            if (++a.pvb > 10) {
                a.unl = 10
            }
            a.gpo = (a.gpo - (a.yvx * a.unl) > a.parent.fmn) ? a.gpo - (a.yvx * a.unl) : a.parent.fmn;
            a.parent.eze.wym("btn");
            a.ohh.mgf("maxcreditd", "#zbu", [(a.gpo > 0) ? a.parent.sbe(a.gpo) : "---"]);
            a.ohh.mgf("lmaxcredit", "#kwl", [b && a.gpo > a.parent.fmn]);
            a.fur();
            return (a.gpo <= a.parent.fmn)
        }
        return true
    };
    this.dnx = function() {
        var b = a.ohh.xpy("cmaxwin") == null || a.ohh.mgf("cmaxwin", "#nyb");
        if (b === true) {
            if (++a.pvb > 10) {
                a.unl = 10
            }
            a.oyo = (a.oyo + (a.yvx * a.unl) > 0) ? a.oyo + (a.yvx * a.unl) : 0;
            a.parent.eze.wym("btn");
            a.ohh.mgf("maxwind", "#zbu", [(a.oyo > 0) ? a.parent.sbe(a.oyo) : "---"]);
            a.ohh.mgf("lmaxwin", "#kwl", [b && a.oyo > a.yvx]);
            a.fur();
            return (a.oyo <= a.yvx)
        }
        return true
    };
    this.nep = function() {
        var b = a.ohh.xpy("cmaxwin") == null || a.ohh.mgf("cmaxwin", "#nyb");
        if (b === true) {
            if (++a.pvb > 10) {
                a.unl = 10
            }
            a.oyo = (a.oyo - (a.yvx * a.unl) > 0) ? a.oyo - (a.yvx * a.unl) : a.yvx;
            a.parent.eze.wym("btn");
            a.ohh.mgf("maxwind", "#zbu", [(a.oyo > 0) ? a.parent.sbe(a.oyo) : "---"]);
            a.ohh.mgf("lmaxwin", "#kwl", [b && a.oyo > a.yvx]);
            a.fur();
            return (a.oyo <= a.yvx)
        }
        return true
    };
    this.jrl = function() {
        var b = a.ohh.xpy("cmincredit") == null || a.ohh.mgf("cmincredit", "#nyb");
        a.hha = a.parent.fmn;
        a.ohh.mgf("mincreditd", "#zbu", [(b === true && a.hha > 0) ? a.parent.sbe(a.hha) : "---"]);
        a.ohh.mgf("lmincredit", "#kwl", [b]);
        a.ohh.mgf("mmincredit", "#kwl", [b && a.hha < a.parent.fmn]);
        a.fur()
    };
    this.rvd = function() {
        var b = a.ohh.xpy("cmaxcredit") == null || a.ohh.mgf("cmaxcredit", "#nyb");
        a.gpo = a.parent.fmn;
        a.ohh.mgf("maxcreditd", "#zbu", [(b === true && a.gpo > 0) ? a.parent.sbe(a.gpo) : "---"]);
        a.ohh.mgf("lmaxcredit", "#kwl", [b && a.gpo > a.parent.fmn]);
        a.ohh.mgf("mmaxcredit", "#kwl", [b]);
        a.fur()
    };
    this.nsd = function() {
        var b = a.ohh.xpy("cmaxwin") == null || a.ohh.mgf("cmaxwin", "#nyb");
        if (a.oyo === 0) {
            a.oyo = a.yvx
        }
        a.ohh.mgf("maxwind", "#zbu", [(b === true && a.oyo > 0) ? a.parent.sbe(a.oyo) : "---"]);
        a.ohh.mgf("lmaxwin", "#kwl", [b && a.oyo > a.yvx]);
        a.ohh.mgf("mmaxwin", "#kwl", [b]);
        a.fur()
    };
    this.sbr = function() {
        a.wbj = 0;
        a.ohh.mgf("bett", "#lyt", [true, false, false]);
        a.ohh.mgf("autot", "#lyt", [false, false, false]);
        a.ohh.mgf("helpt", "#lyt", [false, false, false]);
        a.ohh.mgf("settingt", "#lyt", [false, false, false]);
        a.ohh.mgf("returnt", "#lyt", [false, false, false]);
        a.ohh.neu("bbuttons", "#dxj", [a.udz]);
        a.ohh.neu("bbuttons", "#kwl", [a.udz]);
        a.ohh.neu("abuttons", "#dxj", [false]);
        a.ohh.neu("acheckboxes", "#dxj", [false]);
        a.ohh.neu("hbuttons", "#dxj", [false]);
        a.ohh.neu("sbuttons", "#dxj", [false]);
        a.fur()
    };
    this.dhu = function() {
        var d = a.ohh.xpy("cmincredit") == null || a.ohh.mgf("cmincredit", "#nyb"),
            c = a.ohh.xpy("cmaxcredit") == null || a.ohh.mgf("cmaxcredit", "#nyb"),
            b = a.ohh.xpy("cmaxwin") == null || a.ohh.mgf("cmaxwin", "#nyb");
        a.wbj = 1;
        a.bri = (a.irv > 0) ? a.parent.pqi() * a.irv : a.bri;
        a.yvx = (a.ugm > 0) ? a.parent.pqi() * a.ugm : a.yvx;
        a.ohh.mgf("bett", "#lyt", [false, false, false]);
        a.ohh.mgf("autot", "#lyt", [true, false, false]);
        a.ohh.mgf("helpt", "#lyt", [false, false, false]);
        a.ohh.mgf("settingt", "#lyt", [false, false, false]);
        a.ohh.mgf("returnt", "#lyt", [false, false, false]);
        a.ohh.neu("bbuttons", "#dxj", [false]);
        a.ohh.neu("abuttons", "#dxj", [true]);
        a.ohh.mgf("mmincredit", "#kwl", [d && a.hha < a.parent.fmn]);
        a.ohh.mgf("lmaxcredit", "#kwl", [c && a.gpo > a.parent.fmn]);
        a.ohh.mgf("lmaxwin", "#kwl", [b && a.oyo > a.yvx]);
        a.ohh.neu("acheckboxes", "#dxj", [true]);
        a.ohh.neu("hbuttons", "#dxj", [false]);
        a.ohh.neu("sbuttons", "#dxj", [false]);
        if (a.lad === true) {
            a.ohh.mgf("cmincredit", "#dxj", [false])
        }
        a.fur()
    };
    this.rel = function() {
        a.wbj = 2;
        a.ohh.mgf("bett", "#lyt", [false, false, false]);
        a.ohh.mgf("autot", "#lyt", [false, false, false]);
        a.ohh.mgf("helpt", "#lyt", [true, false, false]);
        a.ohh.mgf("settingt", "#lyt", [false, false, false]);
        a.ohh.mgf("returnt", "#lyt", [false, false, false]);
        a.ohh.neu("bbuttons", "#dxj", [false]);
        a.ohh.neu("abuttons", "#dxj", [false]);
        a.ohh.neu("acheckboxes", "#dxj", [false]);
        a.ohh.neu("hbuttons", "#dxj", [true]);
        a.ohh.neu("sbuttons", "#dxj", [false]);
        a.fur()
    };
    this.awi = function() {
        a.wbj = 3;
        a.ohh.mgf("bett", "#lyt", [false, false, false]);
        a.ohh.mgf("autot", "#lyt", [false, false, false]);
        a.ohh.mgf("helpt", "#lyt", [false, false, false]);
        a.ohh.mgf("settingt", "#lyt", [true, false, false]);
        a.ohh.mgf("returnt", "#lyt", [false, false, false]);
        a.ohh.neu("bbuttons", "#dxj", [false]);
        a.ohh.neu("abuttons", "#dxj", [false]);
        a.ohh.neu("acheckboxes", "#dxj", [false]);
        a.ohh.neu("hbuttons", "#dxj", [false]);
        a.ohh.neu("sbuttons", "#dxj", [true]);
        a.ohh.mgf("gamble", "#dxj", [a.lfh]);
        a.fur()
    };
    this.xel = function() {
        a.parent.icm();
        a.ohh.mgf("returnt", "#lyt", [false, false, false])
    }
}
gfp.prototype = new biu;

function cwi() {
    var a = this;
    this.wxm = null;
    this.zxl = "bold";
    this.tgy = "rgb(0,0,0)";
    this.qli = null;
    this.uzv = "rgb(255,255,255)";
    this.mtp = null;
    this.mxo = "rgb(60,60,60)";
    this.jpc = null;
    this.oes = null;
    this.uah = false;
    this.zcj = [];
    this.ejs = [];
    this.oyu = null;
    this.wfz = 19;
    this.dny = 15;
    this.emq = 120;
    this.pwb = 2;
    this.ptu = 2;
    this.hgm = 2;
    this.rph = 10;
    this.owy = 12;
    this.yjn = function(b, d, c) {
        cwi.prototype.yjn.call(this, b, d, c)
    };
    this.rmt = function(b) {
        try {
            this.owy = b.fontSize;
            this.wfz = b.ndv;
            this.dny = b.ggz;
            this.emq = b.jes;
            this.pwb = b.bth;
            this.ptu = b.xsm;
            this.hgm = b.jju;
            this.rph = b.ulu
        } catch (c) {
            console.error(c)
        }
    };
    this.pzz = function(b) {
        try {
            this.wxm = b.font;
            this.zxl = b.ovs;
            this.tgy = b.backgroundColor;
            this.qli = b.kck;
            this.uzv = b.lda;
            this.mxo = b.borderColor;
            this.mtp = b.mqp;
            if (this.qli) {
                this.jpc = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.jpc.addColorStop(0, this.qli);
                this.jpc.addColorStop(0.5, this.tgy)
            } else {
                this.jpc = this.tgy
            }
            if (this.mtp) {
                this.oes = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.oes.addColorStop(0, this.mtp);
                this.oes.addColorStop(1, this.mxo)
            } else {
                this.oes = this.mxo
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.qwn = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.rph : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.wek()) {
            this.parent.buw();
            return true
        }
        return false
    };
    this.vyw = function(d, b, c) {
        this.ejs.push({
            id: d,
            nlt: b,
            value: c,
            slt: null
        })
    };
    this.sgi = function(e, c, d, b) {
        this.ejs.push({
            id: e,
            nlt: c,
            value: d,
            slt: b
        })
    };
    this.ngk = function(d, b, c) {
        this.zcj.push({
            id: d,
            pgm: b,
            value: c
        })
    };
    this.pjh = function(e, d) {
        for (var c = 0, b = this.ejs.length; c < b; c++) {
            if (this.ejs[c].id == e) {
                this.ejs[c].value = d;
                return true
            }
        }
        return false
    };
    this.aym = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.ikh = function(e, d) {
        for (var c = 0, b = this.zcj.length; c < b; c++) {
            if (this.zcj[c].id == e) {
                if (this.zcj[c].value != d) {
                    this.zcj[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.adk = function(b) {
        this.oyu = b
    };
    this.dxj = function(b) {
        this.uah = b
    };
    this.wek = function(b) {
        return this.uah
    };
    this.shw = function(c, b) {
        if (this.pjh(c, b)) {
            window.qvf(a.fur)
        }
    };
    this.djp = function(c, b) {
        if (this.ikh(c, b)) {
            window.qvf(a.fur)
        }
    };
    this.rfx = function(b) {
        this.adk(b);
        window.qvf(a.fur)
    };
    this.fur = function() {
        if (!a.qdz() || !a.parent.eqn()) {
            return
        }
        var e = (a.height - a.owy) / 2 + a.ptu,
            c = a.pwb + a.wfz * a.ejs.length,
            d = a.width - c - (a.emq * a.zcj.length),
            b = a.context2D;
        b.save();
        wpb.trp.ueq(b, 0, 0, a.width, a.height, a.jpc, 1);
        a.mug(b, e);
        a.mnx(b, e);
        if (a.oyu && a.oyu != "") {
            wpb.trp.vio(b, a.oyu, a.uzv, c, e, d, a.owy, a.wxm, a.owy, a.zxl)
        } else {
            if (a.wek()) {
                a.ovh(b)
            }
        }
        a.qql(b, 0, a.height - a.hgm / 2, a.width, a.height - a.hgm / 2);
        b.restore();
        if (a.rzg && a.upi) {
            a.rzg.drawImage(a.upi, a.x, a.y)
        }
    };
    this.mug = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.ejs.length; f < b; f++) {
            if (this.ejs[f].slt) {
                var e = this.aym(this.ejs[f].slt, this.ejs[f].value);
                if (this.ejs[f].nlt instanceof Array) {
                    wpb.trp.vio(d, this.ejs[f].nlt[e], this.uzv, c, g, this.wfz, this.owy, this.wxm, this.owy, this.zxl)
                } else {
                    if (this.ejs[f].nlt instanceof Image || this.ejs[f].nlt instanceof HTMLCanvasElement) {
                        d.drawImage(this.ejs[f].nlt, e * this.dny, 0, this.dny, this.ejs[f].nlt.height, c + this.pwb, g - this.ptu, this.wfz - 2 * this.pwb, this.owy)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.ejs[f].value == true) ? 1 : 0.3;
                if (this.ejs[f].nlt instanceof String) {
                    wpb.trp.vio(d, this.ejs[f].nlt, this.uzv, c, g, this.wfz, this.owy, this.wxm, this.owy, this.zxl)
                } else {
                    if (this.ejs[f].nlt instanceof Image || this.ejs[f].nlt instanceof HTMLCanvasElement) {
                        d.drawImage(this.ejs[f].nlt, c + this.pwb, g - this.ptu, this.wfz - 2 * this.pwb, this.owy)
                    }
                }
                d.restore()
            }
            c += this.wfz;
            this.qql(d, c, 0, c, this.height)
        }
        return c
    };
    this.mnx = function(d, f) {
        var c = this.width - this.pwb - this.emq * this.zcj.length;
        for (var e = 0, b = this.zcj.length; e < b; e++) {
            if (this.zcj[e].id == "freeplay") {
                wpb.trp.ueq(d, c, 0, this.emq, this.height, "red", 0.4)
            } else {
                if (this.zcj[e].id == "freespin") {
                    wpb.trp.ueq(d, c, 0, this.emq, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.qql(d, c, 0, c, this.height);
            wpb.trp.vio(d, this.zcj[e].pgm + this.zcj[e].value, this.uzv, c, f, this.emq, this.owy, this.wxm, this.owy, this.zxl);
            c += this.emq
        }
    };
    this.qql = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.oes;
        b.lineWidth = this.hgm;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.ovh = function(c) {
        if (this.parent.fwc.xpy("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.hgm,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.hgm;
        c.save();
        c.strokeStyle = this.mxo;
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
cwi.prototype = new biu;

function muc() {
    var b = this;
    var c = 0;
    var a = 1;
    this.hgv = 7;
    this.xqv = 89;
    this.kfi = 10000;
    this.ohh = null;
    this.uah = false;
    this.eex = false;
    this.nms = -1;
    this.dka = 0;
    this.wxm = null;
    this.zxl = "bold";
    this.tgy = "black";
    this.fnz = null;
    this.uyp = null;
    this.chn = null;
    this.uzv = "white";
    this.zgg = 0.8;
    this.ozf = 0;
    this.gdh = 0;
    this.pyq = 0;
    this.url = 0;
    this.qai = 0;
    this.phy = 0;
    this.lmt = 0;
    this.pwb = 10;
    this.ptu = 5;
    this.dzx = 10;
    this.wvu = this.pwb;
    this.zqn = 10;
    this.okm = 20;
    this.sex = 40;
    this.uth = 4;
    this.owy = 10;
    this.utv = null;
    this.afz = null;
    this.wfi = "";
    this.uiv = null;
    this.yjn = function(d, f, e) {
        muc.prototype.yjn.call(this, d, f, e);
        this.ohh = new ppr();
        this.ohh.yjn();
        this.ohh.qaf("buttons");
        this.ohh.qaf("system");
        this.ohh.qaf("setting")
    };
    this.rmt = function(d) {
        try {
            this.owy = d.fontSize;
            this.zqn = d.onq;
            this.okm = d.fxl;
            this.sex = d.akl;
            this.uth = d.ihx;
            this.pwb = d.bth;
            this.ptu = d.xsm;
            this.dzx = d.plt
        } catch (f) {
            console.error(f)
        }
    };
    this.pzz = function(g, m) {
        try {
            var k = this.ohh.vtm("buttons"),
                j = (m === true) ? g.iyz.lcf : g.dmi.lcf;
            this.wxm = g.font;
            this.zxl = g.ovs;
            this.tgy = g.backgroundColor;
            this.fnz = g.puq;
            this.uyp = g.ums;
            this.uzv = g.lda;
            this.zgg = g.zjj;
            if (this.fnz && this.uyp) {
                this.chn = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.chn.addColorStop(0, this.fnz);
                this.chn.addColorStop(0.5, this.uyp);
                this.chn.addColorStop(1, this.fnz)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].pzz(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.qwn = function(p, o) {
        var n = this.ohh.ysv(),
            q = this.ohh.xpy("audio"),
            r = this.ohh.xpy("language"),
            f = this.ohh.xpy("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.eex) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.qdz()) {
                if (g.wek() && !g.mhg()) {
                    if (g != q && g != r) {
                        this.parent.eze.qys("btn");
                        this.parent.eze.wym("btn")
                    }
                    g.lyt(true, true, false);
                    g.ett();
                    for (var k = 0; k < m; k++) {
                        n[k].znu(true)
                    }
                    if (g != f) {
                        if (this.nms >= 0) {
                            clearTimeout(this.nms);
                            this.nms = -1
                        }
                        this.nms = setTimeout(this.idv, this.kfi)
                    }
                }
                return true
            }
        }
        if (this.qdz() && this.wek()) {
            if (p < this.x + this.qai || p > this.x + this.qai + this.phy || o < this.y || o > this.y + this.height) {
                if (this.nms >= 0) {
                    clearTimeout(this.nms);
                    this.nms = -1
                }
                return false
            }
        }
        return true
    };
    this.vtx = function() {
        var g = this.ohh.ysv();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.sxn() == true) {
                e.lyt(false, true);
                return true
            }
        }
        return false
    };
    this.szu = function(e) {
        var o = this.ohh.ysv(),
            d = this.ohh.vtm("system"),
            m = this.ohh.vtm("setting"),
            q = this.ohh.xpy("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.eex) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.bdd || e == f.tnd) && !f.mhg()) {
                if (f != q) {
                    this.parent.eze.qys("btn");
                    this.parent.eze.wym("btn")
                }
                f.lyt(true, true, false);
                f.ett();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].znu(true)
                }
                if (this.nms >= 0) {
                    clearTimeout(this.nms);
                    this.nms = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.bdd || e == f.tnd) && f.wek() && !f.mhg()) {
                if (f != q) {
                    this.parent.eze.qys("btn");
                    this.parent.eze.wym("btn")
                }
                f.lyt(true, true, false);
                f.ett();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].znu(true)
                }
                if (this.nms >= 0) {
                    clearTimeout(this.nms);
                    this.nms = -1
                }
                return true
            }
        }
        if (this.qdz() && this.wek()) {
            if (this.parent.rvw) {
                for (l = 0, n = this.parent.rvw.tpp.length; l < n; l++) {
                    var p = this.parent.rvw.tpp[l];
                    if (p.zdj == e || p.zdj == e) {
                        if (this.nms >= 0) {
                            clearTimeout(this.nms);
                            this.nms = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.bjz = function() {
        var g = this.ohh.ysv();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.sxn() == true) {
                e.lyt(false, true, false);
                return true
            }
        }
        return false
    };
    this.clx = function(e, m) {
        var k = this.ohh.ysv(),
            l = e - this.x,
            j = m - this.y;
        this.afz = this.utv;
        this.utv = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.qdz() && f.wek() && !f.mhg()) {
                this.utv = f
            }
        }
        if (this.utv) {
            this.elk(true)
        } else {
            this.elk(false)
        }
        return true
    };
    this.uxz = function(e, f, g, i, l, d, m) {
        this.lmt = g.width;
        var k = new rud(this.wvu, this.ptu, this.lmt, this.lmt);
        var j = new oun();
        j.yjn(k, this.context2D);
        j.parent = this;
        j.ett = i;
        j.dbg = f;
        j.olq(d, m);
        j.rmt(this.parent.bnu.bdf.dya);
        j.pzz(this.parent.style.bdf.dmi.lcf);
        j.rcg(g);
        if (l != null) {
            j.tnd = l.sab;
            j.bdd = l.zdj;
            j.vnq = l.value
        }
        this.ohh.usx(e, j, ["buttons", "setting"]);
        this.wvu += this.lmt + this.pwb;
        this.phy = this.wvu
    };
    this.stv = function(k, j, i, g, e) {
        this.lmt = i.width;
        var f = new rud(this.wvu, this.ptu, this.lmt, this.lmt);
        var d = new oun();
        d.yjn(f, this.context2D);
        d.parent = this;
        d.ett = g;
        d.dbg = j;
        d.rmt(this.parent.bnu.bdf.dya);
        d.pzz(this.parent.style.bdf.dmi.lcf);
        d.rcg(i);
        if (e != null) {
            d.tnd = e.sab;
            d.bdd = e.zdj;
            d.vnq = e.value
        }
        this.ohh.usx(k, d, ["buttons", "system"]);
        this.wvu += this.lmt + this.pwb;
        this.phy = this.wvu
    };
    this.adw = function() {
        var f = this.ohh.ysv();
        this.phy += 2 * this.dzx;
        this.qai = Math.round((this.width - this.phy) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.qai + this.dzx
        }
    };
    this.tfx = function() {
        return this.phy
    };
    this.dxj = function(d) {
        this.uah = d
    };
    this.wek = function() {
        return this.uah
    };
    this.bab = function(g) {
        var f = this.ohh.ysv();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].dxj(g)
        }
        this.parent.fur()
    };
    this.ltt = function(g) {
        var f = this.ohh.vtm("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].dxj(g)
        }
        this.parent.fur()
    };
    this.vsj = function(g) {
        var f = this.ohh.vtm("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].dxj(g)
        }
        this.parent.fur()
    };
    this.lpj = function() {
        if (this.qdz()) {
            return
        }
        if (this.eex) {
            if (this.url === a) {
                this.uiv = this.lpj
            } else {
                this.uiv = null
            }
        } else {
            this.uiv = null;
            this.ekz();
            this.yjo()
        }
    };
    this.avf = function(d) {
        if (this.parent.snj) {
            this.parent.snj()
        }
        this.stop();
        this.eex = false;
        this.uiv = null;
        this.kwl(true, d);
        if (this.nms >= 0) {
            clearTimeout(this.nms);
            this.nms = -1
        }
        this.nms = setTimeout(this.idv, this.kfi)
    };
    this.idv = function() {
        if (b.qdz()) {
            b.parent.eze.qys("panel_out");
            b.parent.eze.wym("panel_out");
            b.gyp()
        }
    };
    this.gyp = function() {
        if (!this.qdz()) {
            return
        }
        if (this.eex) {
            if (this.url === c) {
                this.uiv = this.gyp
            } else {
                this.uiv = null
            }
        } else {
            this.uiv = null;
            this.oet();
            this.yjo();
            if (this.nms >= 0) {
                clearTimeout(this.nms);
                this.nms = -1
            }
        }
    };
    this.kqj = function(d) {
        if (this.parent.bfb) {
            this.parent.bfb()
        }
        this.stop();
        this.eex = false;
        this.uiv = null;
        this.kwl(false, d);
        if (typeof this.ygb === "function") {
            this.ygb();
            this.ygb = null
        }
    };
    this.ekz = function() {
        this.kwl(true);
        this.eex = true;
        this.uah = false;
        this.url = c;
        this.ozf = Math.floor(this.height / this.hgv);
        this.pyq = 1;
        this.gdh = Math.floor(this.height / this.hgv)
    };
    this.oet = function() {
        if (this.parent.bfb) {
            this.parent.bfb()
        }
        this.eex = true;
        this.uah = false;
        this.url = a;
        this.ozf = -Math.floor(this.height / this.hgv);
        this.pyq = 1;
        this.gdh = this.height
    };
    this.yjo = function() {
        this.dka = setInterval(this.zly, this.xqv)
    };
    this.tno = function() {
        if (b.url == c) {
            if (b.parent.snj) {
                b.parent.snj()
            }
            if (b.nms >= 0) {
                clearTimeout(b.nms);
                b.nms = -1
            }
            b.nms = setTimeout(b.idv, b.kfi)
        }
        clearInterval(b.dka);
        if (b.uiv) {
            b.uiv()
        }
    };
    this.stop = function() {
        clearTimeout(this.nms);
        clearInterval(this.dka);
        this.nms = -1
    };
    this.zly = function() {
        if (!b.kny()) {
            b.tno()
        }
    };
    this.kny = function() {
        if (b.pyq < b.hgv) {
            b.parent.fur(b.x, b.y, b.width, b.height);
            b.gdh += b.ozf;
            b.pyq++;
            return true
        } else {
            b.eex = false;
            b.uah = true;
            if (b.url == a) {
                b.kwl(false);
                if (typeof b.ygb === "function") {
                    b.ygb();
                    b.ygb = null
                }
            }
            b.parent.fur(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.fur = function(n, m, o, g) {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.ohh.ysv(),
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
        this.hao(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].fur()
        }
        if (this.utv && this.wfi != "") {
            k = this.utv.x - this.pwb - this.lmt;
            d = 3 * this.lmt + 2 * this.pwb;
            if (k + d >= this.qai + this.phy) {
                k = this.qai + this.phy - d;
                wpb.trp.oub(p, this.wfi, this.uzv, k, this.utv.y + this.utv.height, d, this.owy, this.wxm, this.owy, this.zxl, this.pwb)
            } else {
                wpb.trp.vio(p, this.wfi, this.uzv, k, this.utv.y + this.utv.height, d, this.owy, this.wxm, this.owy, this.zxl)
            }
        }
        p.restore();
        if (this.eex) {
            if (this.rzg && this.upi && this.gdh > 0) {
                this.rzg.drawImage(this.upi, 0, this.height - this.gdh, this.width, this.gdh, this.x, this.y, this.width, this.gdh)
            }
        } else {
            if (e) {
                this.parent.fur(this.x + n, this.y + m, o, g)
            } else {
                if (this.rzg && this.upi) {
                    this.rzg.drawImage(this.upi, this.x, this.y)
                }
            }
        }
    };
    this.hao = function(d) {
        var f = this.uth,
            e = f / 2;
        d.save();
        d.strokeStyle = this.chn;
        d.fillStyle = this.tgy;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.zqn, this.zqn + e, this.zqn, this.zqn);
        d.arcTo(this.qai, this.zqn, this.qai, this.height - this.okm - e, this.sex);
        d.arcTo(this.qai, this.height - e, this.qai + this.okm, this.height - e, this.okm);
        d.lineTo(this.qai + this.phy - this.okm, this.height - e);
        d.arcTo(this.qai + this.phy, this.height - e, this.qai + this.phy, this.height - this.okm - e, this.okm);
        d.arcTo(this.qai + this.phy, this.zqn, this.width - this.zqn - e, this.zqn, this.sex);
        d.arcTo(this.width - e, this.zqn, this.width - e, 0, this.zqn);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.zgg;
        d.fill();
        d.restore()
    };
    this.elk = function(d) {
        if (this.utv && this.utv != this.afz) {
            if (d && this.utv) {
                this.wfi = this.parent.pyl(this.utv.dbg);
                if (!wpb.trp.chz) {
                    this.wfi = (this.utv.vnq) ? this.wfi + " [" + this.utv.vnq + "]" : this.wfi
                }
            } else {
                this.wfi = ""
            }
            this.parent.fur(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.utv && this.wfi != this.parent.pyl(this.utv.dbg))) {
                this.wfi = this.parent.pyl(this.utv.dbg);
                if (!wpb.trp.chz) {
                    this.wfi = (this.utv.vnq) ? this.wfi + " [" + this.utv.vnq + "]" : this.wfi
                }
            }
            this.parent.fur(this.x, this.y, this.width, this.height)
        }
    };
    this.ygb = null
}
muc.prototype = new biu;

function cve() {
    var a = this;
    this.ygr = "LOADING ... ";
    this.zhq = "ERROR";
    this.nxv = null;
    this.wxo = null;
    this.doo = false;
    this.van = false;
    this.bga = true;
    this.ett = null;
    this.cjc = null;
    this.diy = null;
    this.dka = 0;
    this.uou = 0;
    this.lnw = false;
    this.xvh = 0;
    this.tyh = 60;
    this.vts = 0;
    this.wxm = "arial";
    this.zxl = "bold";
    this.zrw = "black";
    this.ayq = "rgb(0,100,10)";
    this.grt = "rgb(80,255,100)";
    this.ocj = "rgb(120,120,120)";
    this.beo = "red";
    this.tql = "white";
    this.uzv = "yellow";
    this.owy = 14;
    this.pwn = 18;
    this.sxf = 20;
    this.ktu;
    this.cdc;
    this.zsf;
    this.fqc;
    this.dzx = 5;
    this.pwb = 12;
    this.ptu = 5;
    this.iyo = 2;
    this.bdr = new rud();
    this.sbx = new rud();
    this.uga = [];
    this.zxa = 0;
    this.xys = 20;
    this.yjn = function(b, d, c) {
        cve.prototype.yjn.call(this, b, d, c);
        this.cjc = document.createElement("canvas");
        this.diy = this.cjc.getContext("2d")
    };
    this.rmt = function(b) {
        try {
            this.owy = b.fontSize;
            this.pwn = b.izj;
            this.sxf = b.wnk;
            this.dzx = b.plt;
            this.pwb = b.bth;
            this.ptu = b.xsm;
            this.iyo = b.nig;
            this.ktu = b.xbm;
            this.cdc = b.che;
            this.zsf = b.hsv;
            this.fqc = b.owg;
            this.bdr = b.ygy;
            if (this.sbx.width > 0 && this.sbx.height) {
                this.wfx()
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.pzz = function(b) {
        try {
            this.wxm = b.font;
            this.zxl = b.ovs;
            this.zrw = b.backgroundColor;
            this.ayq = b.osf;
            this.grt = b.wwe;
            this.ocj = b.qdr;
            this.beo = b.ndc;
            this.tql = b.urr;
            this.uzv = b.lda;
            this.wxo = b.wxo
        } catch (c) {
            console.error(c)
        }
    };
    this.qwn = function(b, e) {
        var d = b - this.x,
            c = e - this.y;
        if (d >= this.sbx.x && d <= this.sbx.x + this.sbx.width && c >= this.sbx.y && c <= this.sbx.y + this.sbx.height) {
            this.ett();
            return true
        }
        return false
    };
    this.fur = function(b) {
        if (b && b >= 0) {
            this.uou = b
        }
        if (!this.qdz()) {
            return
        }
        if (wpb.zan.value45 == wpb.xkz.jsl) {
            this.hpk()
        } else {
            if (wpb.zan.value45 == wpb.xkz.gxn) {
                this.emc()
            }
        }
    };
    this.hpk = function() {
        if (this.doo) {
            var c = this.context2D,
                b = this.zsf.width / 100;
            c.save();
            if (this.van === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.eze.ilh("splash"), 0, 0, this.width, this.height);
            if (this.wxo) {
                wpb.trp.ueq(c, this.dzx, this.dzx, this.width - 2 * this.dzx, this.height - 2 * this.dzx, this.wxo, 0.3)
            }
            if (this.nxv != null && this.nxv != "") {
                this.kzg(this.fqc, true)
            } else {
                if (this.lnw) {
                    wpb.trp.ueq(c, this.bdr.x, this.bdr.y, this.bdr.width, this.bdr.height, this.zrw, 0.7);
                    c.drawImage(this.cjc, this.bdr.x + this.bdr.width * (1 - this.uga[this.zxa]) / 2, this.bdr.y + this.bdr.height * (1 - this.uga[this.zxa]) / 2, this.bdr.width * this.uga[this.zxa], this.bdr.height * this.uga[this.zxa])
                } else {
                    if (this.bga === true) {
                        if (this.van === false) {
                            wpb.trp.ueq(c, this.ktu.x, this.ktu.y, this.ktu.width, this.ktu.height, this.zrw, 0.7)
                        }
                        var e = this.ygr + " " + this.uou + "%";
                        var d = c.createLinearGradient(this.zsf.x, this.zsf.y, this.zsf.x + this.zsf.width, this.zsf.y);
                        d.addColorStop(0, this.ayq);
                        d.addColorStop(1, this.grt);
                        wpb.trp.vio(c, e, this.tql, this.cdc.x, this.cdc.y, this.cdc.width, this.cdc.height, this.wxm, this.owy, this.zxl);
                        wpb.trp.paj(c, this.zsf.x - this.iyo, this.zsf.y, this.zsf.width + 2 * this.iyo, this.zsf.height, this.iyo, this.zrw, 0.8, this.ocj, this.iyo, 0.8);
                        wpb.trp.ueq(c, this.zsf.x, this.zsf.y + this.iyo / 2, b * this.uou, this.zsf.height - this.iyo, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.emc = function() {
        if (this.doo) {
            var c = this.context2D,
                b = this.zsf.width / 100;
            c.save();
            if (this.van === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.eze.ilh("splash"), 0, 0, this.width, this.height);
            if (this.nxv != null && this.nxv != "") {
                this.kzg(this.fqc, true)
            } else {
                if (this.lnw) {
                    c.drawImage(this.parent.eze.ilh("continue"), this.bdr.x, this.bdr.y, this.bdr.width, this.bdr.height);
                    c.drawImage(this.cjc, this.bdr.x + this.bdr.width * (1 - this.uga[this.zxa]) / 2, this.bdr.y + this.bdr.height * (1 - this.uga[this.zxa]) / 2, this.bdr.width * this.uga[this.zxa], this.bdr.height * this.uga[this.zxa])
                } else {
                    if (this.bga === true) {
                        wpb.trp.ueq(c, this.zsf.x, this.zsf.y, this.zsf.width, this.zsf.height, "rgb(0,0,0)", 0.5);
                        wpb.trp.ueq(c, this.zsf.x, this.zsf.y, b * this.uou, this.zsf.height, "rgb(0,250,0)", 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.kzg = function(c, m) {
        var l = this.context2D,
            o = [],
            d = this.owy,
            k = this.nxv,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.pwn * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.zxl + " " + d + "px " + this.wxm;
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
                    if (u >= c.width - 2 * this.pwb) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.ptu)) {
            w = (c.height - j - this.ptu) / b;
            d = Math.round(d * w) - 1;
            l.font = this.zxl + " " + d + "px " + this.wxm;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.zxl + " " + d + "px " + this.wxm;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.ptu));
            c.height = j + b + this.ptu;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            wpb.trp.ueq(l, c.x, c.y, c.width, c.height, this.zrw, 0.7)
        }
        if (this.zhq != null) {
            l.font = this.zxl + " " + this.pwn + "px " + this.wxm;
            l.fillStyle = this.beo;
            l.textBaseline = "bottom";
            l.fillText(this.zhq, c.x + c.width / 2, c.y + this.pwn + this.ptu)
        }
        l.font = this.zxl + " " + d + "px " + this.wxm;
        l.fillStyle = this.tql;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.pwb), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.rfk = function() {
        return (this.lnw)
    };
    this.pcx = function() {
        for (var b = 0; b < this.xys; b++) {
            this.uga[b] = 1 - Math.sin(Math.PI * b / (this.xys - 1)) * 0.04
        }
        this.uga[this.xys - 1] = 1;
        this.lnw = true;
        this.zxa = 0;
        this.wfx();
        this.dka = setInterval(this.xat, this.tyh);
        this.fur()
    };
    this.xat = function() {
        a.fur();
        a.zxa = (a.zxa < a.xys - 1) ? a.zxa + 1 : 0
    };
    this.stop = function() {
        this.lnw = false;
        clearTimeout(this.dka)
    };
    this.wfx = function() {
        var b = this.diy;
        this.sbx = this.bdr;
        this.cjc.width = Math.round(this.sbx.width);
        this.cjc.height = Math.round(this.sbx.height);
        b.save();
        b.clearRect(0, 0, this.cjc.width, this.cjc.height);
        wpb.trp.aaj(b, this.parent.language.htt, this.uzv, 0, 0, this.cjc.width, this.cjc.height, this.wxm, this.sxf, this.zxl, "center", true);
        b.restore()
    }
}
cve.prototype = new biu;

function kin() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.ndi = null;
    this.itg = null;
    this.pth = null;
    this.awg = null;
    this.giq = null;
    this.udi = [];
    this.jak = 0;
    this.dkc = [];
    this.mxk = [];
    this.wbj = 0;
    this.uvg = false;
    this.dks = false;
    this.yjn = function() {
        this.ndi = document.getElementById("messageOverlay");
        this.itg = document.getElementById("messagePanel");
        this.pth = document.getElementById("messageTitle");
        this.awg = document.getElementById("messageText");
        this.giq = document.getElementById("btne");
        if (this.giq) {
            this.giq.innerHTML = "\u00D7";
            this.giq.onclick = this.gyp;
            this.giq.ontouchend = this.gyp
        }
        for (var f = 0; f < 4; f++) {
            this.udi[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.pzz = function(f) {
        try {
            this.dkc = f.rvb
        } catch (g) {
            console.error(g)
        }
    };
    this.rmt = function(j) {
        try {
            if (this.itg) {
                wpb.trp.cin(this.itg, j.aei)
            }
            if (this.pth) {
                this.pth.style.fontSize = j.jjw + "px";
                wpb.trp.cin(this.pth, j.gjb)
            }
            if (this.awg) {
                this.awg.style.fontSize = j.wdt + "px";
                wpb.trp.cin(this.awg, j.gvs)
            }
            if (this.giq) {
                wpb.trp.cin(this.giq, j.vui)
            }
            for (var g = 0, f = this.udi.length; g < f; g++) {
                this.udi[g].style.fontSize = j.dya.fontSize + "px";
                this.udi[g].style.top = j.hdy.y + "px";
                this.udi[g].style.height = j.hdy.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.lpj = function(j) {
        this.mxk.length = 0;
        this.wbj = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.mxk[g] = j[g]
        }
        this.kav(this.mxk[this.wbj])
    };
    this.gyp = function() {
        if (b.itg) {
            b.dks = false;
            b.itg.style.display = "none";
            b.ndi.style.display = "none";
            wpb.onl.gec();
            wpb.onl.wyc = false
        }
    };
    this.kav = function(l) {
        var n = this.mxk.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.xby === wpb.stq.sil || l.xby === wpb.stq.anf) {
            this.jak = d;
            this.uvg = (l.DisplayType == wpb.cnm.cdi.bgk) ? true : false
        } else {
            if (l.xby === wpb.stq.pio || l.xby === wpb.stq.hpr || l.xby === wpb.stq.rys || l.xby === wpb.stq.roulette.yth || l.xby === wpb.stq.roulette.lne) {
                this.jak = a;
                this.uvg = false
            } else {
                if (l.xby === wpb.stq.tky || l.xby === wpb.stq.dzu) {
                    this.jak = c;
                    this.uvg = false
                } else {
                    if (l.xby === wpb.stq.lgy || l.xby === wpb.stq.zql || l.xby === wpb.stq.toh) {
                        this.jak = e;
                        this.uvg = false
                    }
                }
            }
        }
        if (l.Title && this.pth) {
            this.pth.style.color = this.dkc[this.jak];
            this.pth.innerHTML = l.Title
        }
        if (l.Text && this.awg) {
            this.awg.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.udi[0].innerHTML = "\u2039";
            this.udi[0].onclick = this.bhy;
            this.udi[0].ontouchend = this.bhy;
            this.udi[0].style.display = "inline-block";
            this.udi[this.udi.length - 1].innerHTML = "\u203A";
            this.udi[this.udi.length - 1].onclick = this.qnu;
            this.udi[this.udi.length - 1].ontouchend = this.qnu;
            this.udi[this.udi.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.udi.length - 1 : this.udi.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.udi[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.udi[g].innerHTML = wpb.onl.language.coc
                    } else {
                        if (j == "continue") {
                            this.udi[g].innerHTML = wpb.onl.language.htt.replace(/ /g, "")
                        } else {
                            this.udi[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.udi[g].onclick = wpb.onl.isw;
                    this.udi[g].ontouchend = wpb.onl.isw
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.xby === wpb.stq.sil) {
                            this.udi[g].onclick = this.lfl.bind(this, l.Buttons[k].Link);
                            this.udi[g].ontouchend = this.lfl.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.xby === wpb.stq.anf || l.xby === wpb.stq.lgy || l.xby === wpb.stq.zql) {
                                this.udi[g].onclick = this.ude;
                                this.udi[g].ontouchend = this.ude
                            } else {
                                if (l.xby === wpb.stq.tky || l.xby === wpb.stq.dzu || l.xby === wpb.stq.toh) {
                                    this.udi[g].onclick = this.uko;
                                    this.udi[g].ontouchend = this.uko
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.udi[g].onclick = wpb.onl.kuo;
                            this.udi[g].ontouchend = wpb.onl.kuo
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === wpb.cnm.nxf.qmw) {
                                    this.udi[g].onclick = this.itt.bind(this, l.Buttons[k].Link);
                                    this.udi[g].ontouchend = this.itt.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === wpb.cnm.nxf.ubn) {
                                        this.udi[g].onclick = this.lfl.bind(this, l.Buttons[k].Link);
                                        this.udi[g].ontouchend = this.lfl.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === wpb.cnm.nxf.iqj) {
                                            this.udi[g].onclick = this.das.bind(this, l.Buttons[k].Link);
                                            this.udi[g].ontouchend = this.das.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.udi[g].style.display = "inline-block"
            } else {
                this.udi[g].style.display = "none"
            }
        }
        this.giq.style.display = (this.uvg) ? "inline-block" : "none";
        if (this.itg) {
            this.dks = true;
            this.itg.style.display = "block";
            this.ndi.style.display = "block";
            wpb.onl.gec();
            wpb.onl.wyc = true
        }
    };
    this.qdz = function() {
        if (this.dks) {
            return true
        }
        return false
    };
    this.ude = function() {
        b.gyp();
        wpb.onl.rzb(wpb.onl.state)
    };
    this.lfl = function(f) {
        var g = null;
        if (f) {
            g = wpb.trp.pug("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        wpb.onl.ige({
            type: "link",
            sender: wpb.onl.ipq,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        b.gyp();
        wpb.onl.khb()
    };
    this.das = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = wpb.trp.pug("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.udi.length; g < f; g++) {
                b.udi[g].disabled = true
            }
            k.onload = function() {
                b.gyp();
                for (var m = 0, l = b.udi.length; m < l; m++) {
                    b.udi[m].disabled = false
                }
                wpb.onl.khb()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.udi.length; m < l; m++) {
                    b.udi[m].disabled = false
                }
            }
        }
        wpb.onl.ige({
            type: "link",
            sender: wpb.onl.ipq,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        k.send()
    };
    this.uko = function() {
        window.location.reload()
    };
    this.itt = function(f) {
        wpb.onl.ige({
            type: "link",
            sender: wpb.onl.ipq,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        window.location.href = f
    };
    this.bhy = function() {
        b.wbj = (b.wbj > 0) ? b.wbj - 1 : b.mxk.length - 1;
        b.kav(b.mxk[b.wbj])
    };
    this.qnu = function() {
        b.wbj = (b.wbj < b.mxk.length - 1) ? b.wbj + 1 : 0;
        b.kav(b.mxk[b.wbj])
    }
}
wpb.zan = new Settings();
wpb.trp = new xzk();

function feg() {
    this.ard = "";
    this.plc = "";
    this.wub = null;
    this.canvas = null;
    this.context2D = null;
    this.dut = null;
    this.gar = null;
    this.dph = null;
    this.uyc = null;
    this.dus = null;
    this.msn = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.fxj = 0;
    this.ueu = 0;
    this.jlh = false;
    this.width = 0;
    this.height = 0;
    this.gkg = 0;
    this.zaf = 0;
    this.dck = 1;
    this.ezo = 1;
    this.wgd = false;
    this.jjd = false;
    this.style = null;
    this.bnu = null;
    this.dmh = -1;
    this.iaq = false;
    this.kdd = false;
    this.hdt = false;
    this.xkx = false;
    this.wyc = false;
    this.mjh = false;
    this.tds = false;
    this.hdz = false;
    this.hsf = "";
    this.axl = "";
    this.evm = "";
    this.dxu = "";
    this.nye = "";
    this.nyk = "";
    this.xpe = "1_1_60";
    try {
        if (wpb.zan.value19) {
            this.hsf = sessionStorage.sessionValue2;
            this.axl = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.evm = sessionStorage.sessionValue2
            } else {
                this.hsf = sessionStorage.sessionValue2;
                this.axl = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.evm = sessionStorage.sessionValue2
                } else {
                    this.evm = ""
                }
            }
        }
    } catch (b) {}
    this.sgq = null;
    this.dpt = null;
    this.qgj = false;
    this.tva = null;
    this.eze = null;
    this.fwc = null;
    this.nmt = true;
    this.xyr = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.qns = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.qns = this.xyr.length - 1
                } else {
                    this.qns = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.qns = this.xyr.length - 1
        }
    } catch (b) {
        this.qns = 0
    }
    this.rxc = 0;
    this.language = new tud();
    this.jgs = 0;
    this.npa = 1;
    this.mxm = this.npa;
    this.zjf = [wpb.yca.apz, wpb.yca.qkp, wpb.yca.ohw];
    this.kpg = (wpb.trp.sya()) ? 0 : this.zjf.length - 1;
    try {
        if (localStorage.localValue1) {
            this.kpg = Number(localStorage.localValue1);
            if (!wpb.trp.sya() && this.zjf[this.kpg] === wpb.yca.apz) {
                this.kpg = this.zjf.length - 1
            }
        }
    } catch (b) {}
    this.wob = false;
    this.ipq = "";
    this.yhd = "";
    this.xnl = 0;
    this.state = 0;
    this.vfg = false;
    this.qhc = 5000;
    this.ksj = 0;
    this.zhf = 0;
    this.gpa = 0;
    this.ixb = 0;
    this.szo = false;
    this.luo = false;
    this.wyn = false;
    this.rvw = null;
    this.asq = 0;
    this.pru = 0;
    this.eyf = 0;
    this.cjy = -1;
    this.vgs = -1;
    this.msd = 0;
    this.lmb = null;
    this.njj = [];
    this.htl = [];
    this.any = false;
    this.nmg = 0;
    this.qgb = 0;
    this.kua = false;

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
    this.yjn = function(d) {
        this.ige({
            type: "onAppFrameReady",
            sender: this.ipq
        });
        wpb.trp.pxh();
        wpb.trp.caf();
        this.atn();
        if (!this.szo) {
            this.yww()
        }
        this.oda(this.pbv(d.bnu));
        this.ggt();
        this.qip();
        this.rde();
        this.ddu();
        this.zdm();
        this.jxq();
        this.vmj();
        this.mpk();
        this.hjk();
        this.ejz();
        return this
    };
    this.rde = function() {};
    this.mpk = function() {
        try {
            if (wpb.zan.value64 && !this.wyn) {
                this.tva = new bpk();
                this.tva.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.atn = function() {
        try {
            var i = a("exit");
            if (i != "") {
                sessionStorage.sessionValue5 = i
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && wpb.zan.value8) {
                sessionStorage.sessionValue5 = wpb.zan.value8
            }
            var o = a("curr");
            if (o != "") {
                sessionStorage.sessionValue8 = o
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.nyk = sessionStorage.sessionValue8;
                if (wpb.zan.value72) {
                    var m = wpb.zan.value72[this.nyk];
                    if (wpb.zan.value21.e === true && m) {
                        wpb.zan.value21.s = m.s;
                        wpb.zan.value21.m = m.m;
                        wpb.zan.value21.ts = m.ts;
                        wpb.zan.value21.cs = m.cs
                    }
                    if (wpb.zan.value76 && wpb.zan.value76.f === true && m) {
                        wpb.zan.value76.s = m.s;
                        wpb.zan.value76.m = m.m;
                        wpb.zan.value76.ts = m.ts;
                        wpb.zan.value76.cs = m.cs
                    }
                }
            }
            if (this.zxh()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.nye = sessionStorage.sessionValue7
            }
            var q = a("fullscreen");
            if (q != "") {
                sessionStorage.sessionValue14 = q
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (wpb.trp.chz) ? wpb.zan.value51.m : wpb.zan.value51.d
            }
            var g = a("sessionTime");
            if (g != "") {
                sessionStorage.sessionValue15 = g
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = wpb.zan.value11
            }
            var s = a("realityCheckURL");
            if (s != "") {
                sessionStorage.sessionValue16 = s
            }
            var n = a("realityCheckTime");
            if (n != "") {
                sessionStorage.sessionValue17 = n
            }
            if (wpb.zan.value39 > 0) {
                sessionStorage.sessionValue17 = wpb.zan.value39
            }
            var r = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var f = sessionStorage.sessionValue18.split(";");
                if (f.length == 2) {
                    this.nmg = Number(f[0]);
                    this.qgb = Number(f[1])
                }
            }
            if (r != "") {
                if (Number(r) != this.qgb) {
                    this.qgb = Number(r);
                    this.nmg = new Date().getTime() - (this.qgb * 1000);
                    sessionStorage.sessionValue18 = this.nmg + ";" + this.qgb
                }
            }
            if (wpb.zan.value86 === true) {
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
            console.error(j.stq)
        }
    };
    this.vmj = function() {
        if (!(wpb.trp.key == wpb.os.ilv && wpb.trp.kag == wpb.zlj.zvq)) {
            document.ontouchstart = wpb.onl.hlm
        }
        if (wpb.trp.kag != wpb.zlj.ieu && wpb.trp.kag != wpb.zlj.zvq) {
            document.ontouchmove = wpb.onl.eyx;
            document.ontouchend = wpb.onl.tos
        }
        if (!wpb.trp.tsi) {
            document.onmousedown = wpb.onl.efn;
            document.onmouseup = wpb.onl.jsq;
            document.onmousemove = wpb.onl.hyr
        }
        document.onkeydown = wpb.onl.xfq;
        document.onkeyup = wpb.onl.kfa;
        document.oncontextmenu = wpb.onl.hsx;
        this.mjh = (this.eqw() && wpb.trp.kfq() && wpb.trp.chz);
        if (wpb.trp.gle() === false && wpb.trp.key === wpb.os.jzq && wpb.trp.pjr() === true && screen.width <= 414 && this.gqv()) {
            this.msd = setInterval(this.iip, 1000)
        }
    };
    this.hlm = function(d) {
        if (wpb.onl.iaq === true) {
            wpb.onl.ejp();
            wpb.onl.hqm()
        }
        wpb.onl.qwn(d)
    };
    this.tos = function(d) {
        if (wpb.onl.iaq === true) {
            if (wpb.onl.mjh) {
                wpb.onl.djo()
            } else {
                wpb.onl.vtx(d)
            }
        } else {
            if (wpb.onl.tds) {
                wpb.onl.tmk()
            }
        }
    };
    this.eyx = function(d) {
        wpb.onl.qmi(d)
    };
    this.efn = function(d) {
        window.focus();
        if (wpb.onl.iaq === true) {
            wpb.onl.ejp();
            wpb.onl.hqm()
        }
        wpb.onl.qwn(d)
    };
    this.jsq = function(d) {
        if (wpb.onl.iaq === true) {
            wpb.onl.vtx(d)
        }
    };
    this.hyr = function(d) {};
    this.xfq = function(d) {
        if ((d.keyCode == 122 && (wpb.trp.key == wpb.os.mjo || wpb.trp.key == wpb.os.edb)) || (d.keyCode == 70 && d.ctrlKey && wpb.trp.key == wpb.os.zfe)) {
            return
        }
        wpb.onl.ejp();
        wpb.onl.hqm();
        wpb.onl.szu(d)
    };
    this.kfa = function(d) {
        wpb.onl.bjz(d)
    };
    this.hsx = function() {
        return false
    };
    this.qwn = function(d) {};
    this.vtx = function(d) {};
    this.szu = function(d) {};
    this.bjz = function(d) {};
    this.qmi = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.ige = function(d) {};
    this.txr = function() {
        var f = wpb.onl.fwc.xpy("topb"),
            e = wpb.onl.fwc.xpy("settings"),
            d = wpb.onl.fwc.xpy("topi"),
            g = wpb.onl.fwc.xpy("gameb");
        if (wpb.trp.kag == wpb.zlj.ieu || wpb.trp.kag == wpb.zlj.wln) {
            wpb.onl.jjd = (window.innerWidth == window.outerWidth)
        } else {
            if (wpb.trp.kag == wpb.zlj.mih || wpb.trp.kag == wpb.zlj.sfb) {
                wpb.onl.jjd = (window.innerHeight >= window.outerHeight)
            } else {
                if (wpb.trp.kag == wpb.zlj.nln) {
                    wpb.onl.jjd = (document.fullscreenElement) ? true : false
                } else {
                    if (wpb.trp.chz) {
                        if (wpb.trp.kag == wpb.zlj.idg || wpb.trp.kag == wpb.zlj.cgt || wpb.trp.kag == wpb.zlj.sul) {
                            wpb.onl.jjd = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (wpb.trp.kag == wpb.zlj.zvq) {
                                wpb.onl.jjd = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.pjh("fullscreen", wpb.onl.jjd)
        }
        if (f) {
            f.ohh.mgf("fullscreen", "#pjh", [(wpb.onl.jjd) ? 1 : 0])
        }
        if (e) {
            e.ohh.mgf("fullscreen", "#pjh", [(wpb.onl.jjd) ? 1 : 0])
        }
        if (g) {
            g.ohh.mgf("fullscreen", "#pjh", [(wpb.onl.jjd) ? 1 : 0])
        }
        wpb.onl.tbp();
        wpb.onl.jom();
        wpb.onl.cel();
        if (wpb.trp.pjr() === true && wpb.trp.gle() === false) {
            document.body.style.height = "5000px"
        }
        if (!wpb.trp.gle() && wpb.trp.kag === wpb.zlj.sul && wpb.onl.ueu < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.jhv = function() {
        wpb.onl.txr();
        wpb.onl.iip()
    };
    this.iip = function() {
        if (wpb.trp.pjr() === true && wpb.trp.gle() === false) {
            if (wpb.onl.gqv() === true) {
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
                            wpb.onl.txr();
                            window.ontouchmove = wpb.onl.jhv
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = wpb.onl.hlm;
                        document.ontouchmove = wpb.onl.eyx;
                        document.ontouchend = wpb.onl.tos;
                        if (window.ontouchmove != null) {
                            wpb.onl.txr();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.vkj = function(g) {
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
                    wpb.trp.jfh(e, i, i)
                }
                f.innerHTML = wpb.onl.language.dmu;
                k.className = "rotateAnim";
                j.style.display = "block";
                wpb.onl.wyc = true
            } else {
                j.style.display = "none";
                k.className = null;
                wpb.onl.wyc = false
            }
        }
    };
    this.vbx = function() {
        var d = wpb.onl.fwc.xpy("settings");
        wpb.onl.txr();
        if (d) {
            d.ohh.mgf("adjustment", "#pjh", [(wpb.onl.dmh === wpb.bnu.ira) ? 0 : 1]);
            d.fur()
        }
        if (wpb.onl.wob === true) {
            wpb.onl.wyc = true;
            wpb.onl.uvc(true);
            wpb.onl.vkj(true)
        } else {
            wpb.onl.wyc = false;
            wpb.onl.uvc((wpb.onl.xyr[wpb.onl.qns] === 0));
            wpb.onl.vkj(false)
        }
    };
    this.tbp = function() {
        this.fxj = window.innerWidth, this.ueu = window.innerHeight;
        this.jlh = false;
        if (wpb.trp.gle() == true && wpb.zan.value69 === true) {
            if (wpb.trp.vjz() === true) {
                this.jlh = true;
                this.fxj = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.ueu = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.fxj > this.ueu) {
                    this.ueu *= 0.98
                }
            } else {
                if (wpb.trp.pjr() === true) {
                    this.jlh = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.fxj = 1024;
                            this.ueu = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.fxj = 736;
                                this.ueu = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.fxj = 667;
                                    this.ueu = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.fxj = 768;
                            this.ueu = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.fxj = 414;
                                this.ueu = 628
                            } else {
                                if (screen.height === 667) {
                                    this.fxj = 375;
                                    this.ueu = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.cel = function() {
        var g = 0,
            j = 0,
            f = 1,
            e = 1,
            i = this.fxj,
            d = this.ueu;
        this.wgd = (this.jjd || i < this.width || d < this.height || this.bnu.vay);
        g = this.yrq(this.wgd);
        f = ((i - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.wgd) {
            if (this.bnu.wuz) {
                if (f > e) {
                    this.dck = e;
                    this.ezo = e
                } else {
                    this.dck = f;
                    this.ezo = f
                }
            } else {
                this.dck = f;
                this.ezo = e
            }
        } else {
            this.dck = 1;
            this.ezo = 1
        }
        wpb.trp.jfh(this.canvas, this.dck, this.ezo);
        if (this.dut != null) {
            wpb.trp.jfh(this.dut, this.dck, this.ezo, ((this.bnu.dut.aei.x) - ((this.bnu.dut.aei.x + this.bnu.dut.uwx) / 2 * (1 - this.dck))), ((this.bnu.dut.aei.y) - ((this.bnu.dut.aei.y + this.bnu.dut.vtg) / 2 * (1 - this.ezo))))
        }
        if (this.dph != null) {
            wpb.trp.jfh(this.dph, this.dck, this.ezo)
        }
        if (this.wgd) {
            this.offsetLeft = Math.floor((i - (this.canvas.width * this.dck))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.ezo))) / 2
        } else {
            this.offsetLeft = this.wub.offsetLeft;
            this.offsetTop = this.wub.offsetTop
        }
    };
    this.jom = function() {
        if (this.tuo() === true) {
            var e = null;
            if (this.zjf[this.kpg] === wpb.yca.apz) {
                if (window.orientation === -90) {
                    e = wpb.bnu.tvg
                } else {
                    e = wpb.bnu.ira
                }
            } else {
                if (this.zjf[this.kpg] === wpb.yca.qkp) {
                    e = wpb.bnu.tvg
                } else {
                    if (this.zjf[this.kpg] === wpb.yca.ohw) {
                        e = wpb.bnu.ira
                    }
                }
            }
            this.wob = (this.ueu > this.fxj);
            this.oda(e);
            this.vet(false);
            if (this.xkx === true) {
                this.fur()
            } else {
                this.fwc.mgf("loading", "#fur")
            }
        } else {
            if (wpb.trp.chz) {
                var f = (this.fxj > this.ueu) ? this.npa : this.jgs,
                    d = this.bnu.sxb,
                    e = null;
                if (f != this.mxm) {
                    this.mxm = f;
                    if (this.szo) {
                        e = (this.mxm == this.npa) ? wpb.bnu.jkq : wpb.bnu.cxt
                    } else {
                        e = (this.mxm == this.npa) ? wpb.zan.value33 : wpb.zan.value32
                    }
                    this.oda(e);
                    this.vet((d != this.bnu.sxb) || this.szo);
                    if (this.xkx === true) {
                        if (this.szo && this.luo) {
                            this.rfy(this.pyl(this.language.fra))
                        } else {
                            this.fur()
                        }
                    } else {
                        this.fwc.mgf("loading", "#fur")
                    }
                }
            } else {
                if (!this.szo) {
                    e = (this.jjd) ? wpb.zan.value15 : wpb.zan.value14;
                    this.oda(e);
                    this.vet(false);
                    if (this.xkx === true) {
                        this.fur()
                    } else {
                        this.fwc.mgf("loading", "#fur")
                    }
                }
            }
        }
    };
    this.tuo = function() {
        return false
    };
    this.gqv = function() {
        return false
    };
    this.oda = function(d) {};
    this.ggt = function() {
        this.style = new uxe()
    };
    this.yrq = function(d) {
        var e = 0;
        if (wpb.trp.vjz() && window.innerWidth > window.innerHeight && d) {
            if (this.iaq === true && document.body.style.backgroundColor !== this.style.sor.backgroundColor) {
                document.body.style.backgroundColor = this.style.sor.backgroundColor
            }
        }
        return e
    };
    this.wgl = function() {
        if (wpb.trp.vjz() && !wpb.trp.gle() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.xcd = function() {
        return false
    };
    this.ddu = function() {
        if (wpb.trp.tsi) {
            this.eze = new hjb()
        } else {
            this.eze = new qlj()
        }
        this.eze.yjn();
        this.eze.twk(this.qsj())
    };
    this.zdm = function() {
        this.fwc = new ppr();
        this.fwc.yjn();
        this.fwc.qaf("jackpots")
    };
    this.qsj = function() {
        var d = new ujb();
        d.yjn();
        return d
    };
    this.yww = function() {
        this.rvw = new ukk()
    };
    this.qip = function() {
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
                    for (var k = 0, g = wpb.zan.value5.length; k < g; k++) {
                        if (o[l] === wpb.zan.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(wpb.zan.value5[0])
                }
                wpb.zan.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    wpb.zan.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = wpb.trp.qlq();
                if (this.kxt(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === wpb.language.EN && this.kxt(wpb.language.US)) {
                        sessionStorage.sessionValue1 = wpb.language.US
                    } else {
                        if (q === wpb.language.DE && this.kxt(wpb.language.AT)) {
                            sessionStorage.sessionValue1 = wpb.language.AT
                        } else {
                            if (q === wpb.language.ES && this.kxt(wpb.language.MX)) {
                                sessionStorage.sessionValue1 = wpb.language.MX
                            } else {
                                if (q === wpb.language.ES && this.kxt(wpb.language.CO)) {
                                    sessionStorage.sessionValue1 = wpb.language.CO
                                } else {
                                    if (q === wpb.language.ES && this.kxt(wpb.language.CL)) {
                                        sessionStorage.sessionValue1 = wpb.language.CL
                                    } else {
                                        if (q === wpb.language.ES && this.kxt(wpb.language.VE)) {
                                            sessionStorage.sessionValue1 = wpb.language.VE
                                        } else {
                                            if (q === wpb.language.EN && this.kxt(wpb.language.BR)) {
                                                sessionStorage.sessionValue1 = wpb.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = wpb.zan.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.kxt(sessionStorage.sessionValue1)) {
                for (var l = 0, m = wpb.zan.value5.length; l < m; l++) {
                    if (wpb.zan.value5[l] == sessionStorage.sessionValue1) {
                        this.rxc = l;
                        break
                    }
                }
                this.language = this.dca(sessionStorage.sessionValue1)
            } else {
                this.rxc = 0;
                this.language = this.dca(wpb.zan.value5[this.rxc]);
                sessionStorage.sessionValue1 = wpb.zan.value5[this.rxc]
            }
        } catch (n) {
            this.rxc = 0;
            this.language = this.dca(wpb.zan.value5[this.rxc]);
            console.error(n.stq)
        }
    };
    this.hjk = function() {
        var d = (wpb.zan.value45 == wpb.xkz.jsl) ? this.bnu.xkz.onl : this.bnu.xkz.pbh;
        this.wub = document.getElementById("gameArea");
        if (this.jlh === false) {
            this.wub.style.marginTop = (-d.aei.height / 2) + "px";
            this.wub.style.marginLeft = (-d.aei.width / 2) + "px"
        } else {
            this.wub.style.left = "0px";
            this.wub.style.top = "0px";
            this.wub.style.marginTop = ((window.innerHeight - d.aei.height) / 2) + "px";
            this.wub.style.marginLeft = ((window.innerWidth - d.aei.width) / 2) + "px"
        }
        this.wub.style.width = (d.aei.width > window.innerWidth) ? window.innerWidth + "px" : d.aei.width + "px";
        this.wub.style.height = (d.aei.height > window.innerHeight) ? window.innerHeight + "px" : d.aei.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.aei.width);
        this.canvas.height = Math.round(d.aei.height);
        this.context2D = this.canvas.getContext("2d");
        this.dph = document.getElementById("gameOverlay");
        if (this.dph) {
            this.dph.style.width = d.aei.width + "px";
            this.dph.style.height = d.aei.height + "px"
        }
        this.pyo(d)
    };
    this.pyo = function(e) {
        var f = new cve(),
            d = (wpb.zan.value45 == wpb.xkz.jsl) ? this.style.xkz.onl : this.style.xkz.pbh;
        f.yjn(e.aei, this.context2D);
        f.parent = this;
        f.ett = (wpb.trp.chz) ? this.rrr : this.tmk;
        f.ygr = (this.szo) ? this.language.dlw : this.language.jpw;
        f.zhq = this.language.error;
        f.rmt(e);
        f.pzz(d);
        this.fwc.usx("loading", f)
    };
    this.jdc = function() {
        var d = new cwi();
        d.yjn(this.bnu.lvs.aei, null, this.context2D);
        d.parent = this;
        d.rmt(this.bnu.lvs);
        d.pzz(this.style.lvs);
        if (sessionStorage.sessionValue15 == "true" && wpb.zan.value49) {
            d.ngk("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || wpb.zan.value49) {
                d.ngk("time", "", "--:--")
            }
        }
        if (this.zxh()) {
            d.ngk("freeplay", "", this.language.egz)
        } else {
            d.ngk("id", "", "")
        }
        this.fwc.usx("topi", d)
    };
    this.ejq = function() {
        var d = new muc();
        d.yjn(this.bnu.bdf.aei, null, this.context2D);
        d.parent = this;
        d.rmt(this.bnu.bdf);
        d.pzz(this.style.bdf, false);
        d.kwl(false);
        this.fwc.usx("topb", d)
    };
    this.pzt = function() {};
    this.ufk = function() {
        var d = new phd();
        d.yjn(this.bnu.qsf.aei, null, this.context2D);
        d.parent = this;
        d.xxb(this.bnu.qsf);
        d.pzz(this.style.qsf);
        d.kwl(false);
        this.fwc.usx("stats", d)
    };
    this.fdl = function() {
        this.uyc = new kin();
        this.uyc.yjn();
        this.uyc.pzz(this.style.uyc);
        this.uyc.rmt(this.bnu.uyc)
    };
    this.wjc = function() {
        this.dus = new qxm();
        this.dus.yjn();
        this.dus.pzz(this.style.dus);
        this.dus.rmt(this.bnu.dus)
    };
    this.yaa = function() {
        if (this.wai()) {
            this.msn.ale = document.getElementById("jurisdictionDiv");
            this.msn.mhe = document.getElementById("btnsp");
            this.msn.vlt = document.getElementById("btnsl");
            this.msn.uwi = document.getElementById("btnst");
            if (this.msn.mhe) {
                this.msn.mhe.innerHTML = this.language.ggd;
                this.msn.mhe.onclick = this.glp;
                this.msn.mhe.ontouchend = this.glp
            }
            if (this.msn.vlt) {
                this.msn.vlt.innerHTML = this.language.zxe;
                this.msn.vlt.onclick = this.mvx;
                this.msn.vlt.ontouchend = this.mvx
            }
            if (this.msn.uwi) {
                this.msn.uwi.innerHTML = this.language.ggv;
                this.msn.uwi.onclick = this.ytz;
                this.msn.uwi.ontouchend = this.ytz
            }
            this.sew();
            this.gec()
        }
    };
    this.kmv = function(e) {
        var d = new cnz();
        d.yjn(this.bnu.jat.aei, null, this.context2D);
        d.parent = this;
        d.zly = true;
        if (e) {
            d.tem(e)
        }
        d.xxb(this.bnu.jat);
        d.hwa(this.language);
        d.pzz(this.style.jat);
        d.rmt(this.bnu.jat);
        d.kwl(false);
        this.fwc.usx("autop", d)
    };
    this.ing = function(d) {
        var e = new gfp();
        e.yjn(this.bnu.sad.aei, null, this.context2D);
        e.parent = this;
        if (d) {
            e.lyk(d)
        }
        e.kwl(false);
        this.fwc.usx("settings", e)
    };
    this.vet = function(d) {};
    this.qva = function() {
        var d = this.fwc.xpy("stats");
        if (d) {
            d.aqq(this.bnu.qsf.aei);
            d.rmt(this.bnu.qsf)
        }
    };
    this.vtu = function() {
        if (this.uyc) {
            this.uyc.rmt(this.bnu.uyc)
        }
    };
    this.ykz = function() {
        if (this.dus) {
            this.dus.rmt(this.bnu.dus)
        }
    };
    this.sew = function() {
        var d = null,
            e = 0;
        if (this.msn) {
            d = this.bnu.gwo;
            if (this.msn.ale) {
                wpb.trp.cin(this.msn.ale, d.rgt)
            }
            if (this.msn.mhe) {
                this.msn.mhe.style.fontSize = d.dya.fontSize + "px";
                this.msn.mhe.style.textIndent = d.dya.textIndent + "px";
                wpb.trp.cin(this.msn.mhe, d.xim)
            }
            if (this.msn.vlt) {
                this.msn.vlt.style.fontSize = d.dya.fontSize + "px";
                this.msn.vlt.style.textIndent = d.dya.textIndent + "px";
                wpb.trp.cin(this.msn.vlt, d.vyn)
            }
            if (this.msn.uwi) {
                this.msn.uwi.style.fontSize = d.dya.fontSize + "px";
                this.msn.uwi.style.textIndent = d.dya.textIndent + "px";
                wpb.trp.cin(this.msn.uwi, d.fma)
            }
            if (this.msn.ale) {
                e = (d.rgt.width - d.rgt.height) / 2;
                if (this.dmh == wpb.bnu.tvg) {
                    this.msn.ale.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.msn.ale.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.chs = function() {
        var d = this.fwc.xpy("autop");
        if (d) {
            d.aqq(this.bnu.jat.aei);
            d.rmt(this.bnu.jat)
        }
    };
    this.rft = function() {
        var d = this.fwc.xpy("settings");
        if (d) {
            d.aqq(this.bnu.sad.aei);
            d.rmt(this.bnu.sad)
        }
    };
    this.uzk = function() {
        var d = this.fwc.xpy("topi");
        if (d) {
            d.aqq(this.bnu.lvs.aei);
            d.rmt(this.bnu.lvs)
        }
    };
    this.ypp = function() {
        var d = this.fwc.xpy("topb");
        if (d) {
            d.aqq(this.bnu.bdf.aei);
            d.rmt(this.bnu.bdf)
        }
    };
    this.tjd = function() {
        var e = this.fwc.xpy("loading"),
            d = (wpb.zan.value45 == wpb.xkz.jsl) ? this.bnu.xkz.onl : this.bnu.xkz.pbh;
        if (e) {
            this.canvas.width = 0;
            if (this.jlh === false) {
                this.wub.style.marginTop = (-d.aei.height / 2) + "px";
                this.wub.style.marginLeft = (-d.aei.width / 2) + "px"
            } else {
                this.wub.style.left = "0px";
                this.wub.style.top = "0px";
                this.wub.style.marginTop = ((this.ueu - d.aei.height) / 2) + "px";
                this.wub.style.marginLeft = ((this.fxj - d.aei.width) / 2) + "px"
            }
            this.wub.style.width = (d.aei.width > this.fxj) ? this.fxj + "px" : d.aei.width + "px";
            this.wub.style.height = (d.aei.height > this.ueu) ? this.ueu + "px" : d.aei.height + "px";
            this.canvas.width = Math.round(d.aei.width);
            this.canvas.height = Math.round(d.aei.height);
            if (this.dph) {
                this.dph.style.width = d.aei.width + "px";
                this.dph.style.height = d.aei.height + "px"
            }
            e.aqq(d.aei);
            e.rmt(d)
        }
    };
    this.jxq = function() {
        if (wpb.trp.chz && !wpb.trp.tsi) {
            if (!this.eze.fml && wpb.trp.kag != wpb.zlj.ddo) {
                this.nmt = false;
                this.qns = 0
            }
        }
    };
    this.pbv = function(d) {
        if (wpb.trp.chz) {
            if (!this.szo) {
                return wpb.bnu.eqt
            } else {
                if (!this.wyn) {
                    return wpb.bnu.jkq
                }
            }
        }
        return d
    };
    this.gly = function() {
        var d = this.fwc.xpy("loading");
        this.txr();
        if (d) {
            d.doo = true
        }
        if ((wpb.trp.kag === wpb.zlj.idg || wpb.trp.kag === wpb.zlj.sfb || wpb.trp.kag === wpb.zlj.ntz) && wpb.trp.key === wpb.os.ilv && wpb.trp.fgu === true) {
            if (this.eze.fml === false || wpb.trp.kfq() === false || wpb.trp.xkg() === false) {
                wpb.gwm = wpb.bfx.bjv
            }
        }
        if (wpb.gwm == 0) {
            if (this.nmt === true && wpb.trp.kop().length === 0) {
                this.nmt = false
            }
            if (d) {
                d.fur(0)
            }
            this.gxj();
            if (this.nmt === true) {
                this.lmx()
            }
            this.eze.start()
        } else {
            if (d) {
                if (wpb.gwm == wpb.bfx.dzl && wpb.trp.kag === wpb.zlj.sul) {
                    d.nxv = this.language.rgi;
                    d.fur(0)
                } else {
                    if (wpb.gwm == wpb.stq.yvm) {
                        d.nxv = this.language.zbd;
                        d.fur(0)
                    } else {
                        d.nxv = this.language.pjk;
                        if (wpb.trp.key === wpb.os.ilv || wpb.trp.key === wpb.os.edb) {
                            if (wpb.gwm != wpb.bfx.dzl && sessionStorage.sessionValue1 === wpb.language.TR) {
                                d.nxv += "|Google Chrome" + this.language.ucj
                            } else {
                                if (wpb.gwm != wpb.bfx.dzl && (sessionStorage.sessionValue1 === wpb.language.GE || sessionStorage.sessionValue1 === wpb.language.HU)) {
                                    d.nxv += "|" + this.language.tzc + " Google Chrome" + this.language.ugr
                                } else {
                                    d.nxv += "|" + this.language.ucj + " Google Chrome"
                                }
                            }
                        } else {
                            if (wpb.trp.key === wpb.os.mjo || wpb.trp.key === wpb.os.edb) {
                                if (wpb.gwm != wpb.bfx.dzl && sessionStorage.sessionValue1 === wpb.language.TR) {
                                    d.nxv += "|Google Chrome, Mozilla Firefox" + this.language.ucj
                                } else {
                                    if (wpb.gwm != wpb.bfx.dzl && (sessionStorage.sessionValue1 === wpb.language.GE || sessionStorage.sessionValue1 === wpb.language.HU)) {
                                        d.nxv += "|" + this.language.tzc + " Google Chrome, Mozilla Firefox" + this.language.ugr
                                    } else {
                                        d.nxv += "|" + this.language.ucj + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + wpb.gwm);
                        d.fur(0)
                    }
                }
            }
        }
    };
    this.gxj = function() {};
    this.lmx = function() {};
    this.ejz = function() {
        var e = this.ard + this.bnu.type + "/",
            d = this.fwc.xpy("loading");
        if (!this.szo) {
            this.eze.lin("continue", wpb.zan.value30 + "/basic/images/" + this.bnu.type + "/btn_continue.png")
        }
        if (wpb.zan.value45 == wpb.xkz.jsl) {
            e += "load.jpg"
        } else {
            if (wpb.zan.value45 == wpb.xkz.gxn) {
                e += "load_amanet.jpg"
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.van = true
            }
        }
        this.eze.lin("splash", e);
        this.eze.fkk()
    };
    this.rhd = function() {};
    this.kxt = function(e) {
        for (var d = 0; d < wpb.zan.value5.length; d++) {
            if (wpb.zan.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.bzk = function() {
        wpb.onl.kdd = true;
        if (!wpb.onl.szo) {
            wpb.onl.nve();
            if (wpb.onl.wqf()) {
                wpb.onl.vzn()
            }
        } else {
            wpb.onl.cmg()
        }
        wpb.onl.connect()
    };
    this.nve = function() {};
    this.cmg = function() {};
    this.connect = function() {
        this.sgq.connect(this.ipq, this.hsf, this.axl, this.evm, this.xpe, this.nye, this.nyk)
    };
    this.mvl = function(d) {
        if (typeof d === "undefined") {
            wpb.onl.sgq.mvl(0)
        } else {
            wpb.onl.sgq.mvl(d)
        }
    };
    this.inl = function(d) {
        this.zhf = 0;
        this.gpa = 0;
        this.ixb = d;
        clearInterval(this.asq);
        this.asq = setInterval(this.wcg, 1000)
    };
    this.wcg = function() {
        var d = wpb.onl.fwc.xpy("loading");
        wpb.onl.zhf++;
        wpb.onl.gpa = Math.round(wpb.zan.value47 / 1000) - wpb.onl.zhf;
        wpb.onl.gpa = (wpb.onl.gpa > 0) ? wpb.onl.gpa : 0;
        if (!wpb.onl.iaq) {
            if (d) {
                d.nxv = "Can not connect to game server!|Tries to connect: " + wpb.onl.ixb + " (" + wpb.onl.gpa + " sec)";
                d.fur(0)
            }
        }
    };
    this.mnu = function() {
        return wpb.zan.value74
    };
    this.fur = function(d, g, e, f) {};
    this.eqn = function() {
        return (this.xkx === true && this.iaq === true && this.wob === false)
    };
    this.rfy = function(e) {
        var d = this.fwc.xpy("history");
        this.xkx = true;
        if (this.iaq) {
            if (this.bnu.szn) {
                wpb.trp.ueq(this.context2D, this.bnu.onl.aei.x - this.bnu.onl.ihx, this.bnu.onl.aei.y - this.bnu.onl.ihx, this.bnu.onl.aei.width + 2 * this.bnu.onl.ihx, this.bnu.onl.aei.height + 2 * this.bnu.onl.ihx, "black", 1)
            }
            wpb.trp.vio(this.context2D, e, "white", this.bnu.onl.aei.x, this.bnu.onl.aei.y, this.bnu.onl.aei.width, this.bnu.onl.aei.height, "arial", 28, "bold");
            if (d) {
                d.fur()
            }
        }
    };
    this.kuo = function() {
        if (wpb.onl.uyc) {
            wpb.onl.uyc.gyp()
        }
        wpb.onl.cyp(false);
        wpb.onl.usk.bab(false);
        wpb.onl.usk.ohh.mgf("exit", "#dxj", [true]);
        if (wpb.trp.nki()) {
            wpb.trp.mcw();
            setTimeout(wpb.onl.txr, 1400)
        }
        if (wpb.zan.value67 > 0) {
            wpb.onl.mvl(wpb.zan.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                wpb.onl.ige({
                    type: "history",
                    sender: wpb.onl.ipq,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null") {
                    wpb.onl.ige({
                        type: "quit",
                        sender: wpb.onl.ipq,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                        window.location.href = decodeURIComponent(sessionStorage.sessionValue5)
                    }
                }
            }
        }
    };
    this.isw = function() {
        clearTimeout(wpb.onl.cjy);
        wpb.onl.cyp(false);
        if (wpb.onl.usk) {
            wpb.onl.usk.bab(false)
        }
        if (!wpb.onl.szo) {
            wpb.onl.stop();
            if (wpb.onl.usk) {
                wpb.onl.usk.ohh.mgf("info", "#ubq", [wpb.onl.language.nuo]);
                wpb.onl.fur()
            }
            if (wpb.onl.tuo() === true && wpb.trp.nki()) {
                wpb.trp.mcw();
                setTimeout(wpb.onl.txr, 800);
                setTimeout(wpb.onl.sgq.rha.close, 800)
            } else {
                wpb.onl.sgq.rha.close()
            }
        } else {
            wpb.onl.sgq.close()
        }
    };
    this.orc = function() {
        wpb.onl.mjh = true
    };
    this.djo = function() {
        if (wpb.trp.chz == true) {
            if (wpb.onl.mjh == true) {
                wpb.onl.mjh = false;
                wpb.trp.mcw();
                setTimeout(wpb.onl.txr, 1400)
            }
        } else {
            wpb.trp.mcw();
            setTimeout(wpb.onl.txr, 1400)
        }
    };
    this.hkf = function() {
        var e = (wpb.onl.tuo() === true) ? "smartphone" : "desktop",
            i = "en";
        if (sessionStorage.sessionValue1 == wpb.language.ES || sessionStorage.sessionValue1 == wpb.language.CO || sessionStorage.sessionValue1 == wpb.language.CL || sessionStorage.sessionValue1 == wpb.language.MX || sessionStorage.sessionValue1 == wpb.language.VE) {
            i = "es"
        } else {
            if (sessionStorage.sessionValue1 == wpb.language.RO) {
                i = "ro"
            } else {
                if (sessionStorage.sessionValue1 == wpb.language.PT || sessionStorage.sessionValue1 == wpb.language.BR) {
                    i = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == wpb.language.HR) {
                        i = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == wpb.language.DE) {
                            i = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == wpb.language.SE) {
                                i = "se"
                            }
                        }
                    }
                }
            }
        }
        if (wpb.onl.tpj != "") {
            var f = null,
                g = "",
                d = "";
            if (wpb.onl.tpj != "") {
                g += "rtp=" + wpb.onl.tpj
            }
            if (wpb.onl.mkp != "") {
                g += (wpb.onl.tpj != "") ? "&" : "";
                g += "maxwin=" + ((wpb.onl.mkp == "0") ? "0" : wpb.onl.xth(Number(wpb.onl.mkp) * wpb.onl.wxw()))
            }
            d = encodeURIComponent(g);
            f = window.open(wpb.zan.value30 + "/gamerules/" + i + "/" + e + "/" + wpb.onl.ipq.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = wpb.zan.value30 + "/gamerules/" + i + "/" + e + "/" + wpb.onl.ipq.toLowerCase() + ".html?" + d
            }
        }
    };
    this.hsh = function() {
        wpb.onl.qgj = false;
        wpb.onl.svh();
        wpb.onl.aqj();
        wpb.onl.hor()
    };
    this.jao = function() {
        var d = wpb.onl.fwc.xpy("stats");
        if (d) {
            d.cpp(true, true)
        }
        wpb.onl.dpt.close(true)
    };
    this.wcf = function() {
        var d = wpb.onl.fwc.xpy("stats");
        wpb.onl.stop();
        if (d && d.qdz()) {
            d.cpp(true, true)
        }
        wpb.onl.sgq.rha.close();
        if (wpb.onl.dpt) {
            wpb.onl.dpt.close(false)
        }
    };
    this.yno = function() {
        clearTimeout(wpb.onl.cjy);
        wpb.onl.usk.bab(false);
        wpb.onl.stop();
        wpb.onl.sgq.rha.tye()
    };
    this.hxj = function() {
        if (wpb.onl.luo) {
            return
        }
        var d = wpb.onl.fwc.xpy("history");
        if (d) {
            d.bab(false)
        }
        wpb.onl.stop();
        wpb.onl.sgq.bve(wpb.onl.xnl)
    };
    this.glw = function() {
        if (wpb.onl.luo) {
            return
        }
        var d = wpb.onl.fwc.xpy("history");
        if (d) {
            d.bab(false)
        }
        wpb.onl.stop();
        wpb.onl.sgq.dgo(wpb.onl.xnl)
    };
    this.rdz = function() {
        var d = wpb.onl.fwc.xpy("history");
        if (d) {
            d.bab(false)
        }
        wpb.onl.stop();
        clearInterval(wpb.onl.msd);
        wpb.onl.cmk();
        wpb.onl.sgq.close()
    };
    this.jul = function() {
        wpb.onl.eze.qys("btn");
        wpb.onl.eze.wym("btn");
        wpb.onl.shf()
    };
    this.soo = function() {
        var f = wpb.onl.fwc.xpy("topb"),
            e = wpb.onl.fwc.xpy("settings"),
            g = wpb.onl.fwc.xpy("gameb"),
            d = wpb.onl.fwc.xpy("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (wpb.onl.eze.fml === true) {
            wpb.onl.qns = (wpb.onl.qns === wpb.onl.xyr.length - 1) ? 0 : wpb.onl.qns + 1;
            wpb.onl.shy(wpb.onl.xyr[wpb.onl.qns])
        } else {
            wpb.onl.qns = (wpb.onl.qns === wpb.onl.xyr.length - 1) ? 0 : wpb.onl.xyr.length - 1;
            wpb.onl.uvc((wpb.onl.xyr[wpb.onl.qns] === 0))
        }
        sessionStorage.sessionValue6 = wpb.onl.qns;
        if (wpb.onl.xyr[wpb.onl.qns] > 0) {
            wpb.onl.eze.wym("audioon")
        }
        if (d) {
            d.shw("audio", wpb.onl.xyr[wpb.onl.qns])
        }
        if (f) {
            f.ohh.mgf("audio", "#pjh", [wpb.onl.qns])
        }
        if (e) {
            e.ohh.mgf("audio", "#pjh", [wpb.onl.qns])
        }
        if (g) {
            g.ohh.mgf("audio", "#pjh", [wpb.onl.qns])
        }
        wpb.onl.fur()
    };
    this.rrr = function() {
        wpb.onl.tds = true
    };
    this.tmk = function() {};
    this.wne = function() {
        var d = wpb.onl.fwc.xpy("settings");
        if (d) {
            if (d.qdz()) {
                wpb.onl.icm()
            } else {
                wpb.onl.gup()
            }
            wpb.onl.eze.wym("btn");
            if (wpb.onl.bnu.yaz === false) {
                wpb.onl.usk.ohh.mgf("setting", "#xkl", [d.qdz()])
            }
        }
    };
    this.ljx = function() {
        var d = wpb.onl.fwc.xpy("settings"),
            e = "";
        wpb.onl.kpg = (wpb.onl.kpg < wpb.onl.zjf.length - 1) ? wpb.onl.kpg + 1 : (wpb.trp.sya()) ? 0 : 1;
        localStorage.localValue1 = wpb.onl.kpg;
        wpb.onl.txr();
        if (d) {
            d.ohh.mgf("adjustment", "#pjh", [(wpb.onl.dmh === wpb.bnu.ira) ? 0 : 1]);
            if (wpb.onl.zjf[wpb.onl.kpg] === wpb.yca.qkp) {
                e = wpb.onl.language.left
            } else {
                if (wpb.onl.zjf[wpb.onl.kpg] === wpb.yca.ohw) {
                    e = wpb.onl.language.udr
                } else {
                    if (wpb.onl.zjf[wpb.onl.kpg] === wpb.yca.apz) {
                        e = wpb.onl.language.wwn
                    }
                }
            }
            d.ohh.mgf("adjustment", "#zbu", [e])
        }
    };
    this.glp = function() {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.mvx = function() {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.ytz = function() {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.sfg = function(e, d) {
        this.usk.ohh.mgf("creditd", "#zbu", [this.xth(e), d])
    };
    this.xfm = function(e, d) {
        if (e > 0) {
            this.usk.ohh.mgf("betd", "#zbu", [this.xth(e), d])
        } else {
            this.usk.ohh.mgf("betd", "#zbu", ["", d])
        }
    };
    this.qxj = function(e) {
        var d = this.fwc.xpy("topi");
        this.xnl = e;
        if (d) {
            d.djp("id", (e > 0) ? e : "")
        }
    };
    this.mak = function() {
        var e = "",
            d = wpb.onl.fwc.xpy("topi");
        if (wpb.zan.value49) {
            e += wpb.onl.xrt()
        }
        if (wpb.zan.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += wpb.onl.yiw()
        }
        if (wpb.zan.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.djp("time", e)
        }
    };
    this.yiw = function() {
        return this.getTime(new Date().getTime() - this.ojf)
    };
    this.xrt = function() {
        var d = new Date();
        return this.kxq(d.getHours()) + ":" + this.kxq(d.getMinutes())
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
        return this.kxq(d) + ":" + this.kxq(f)
    };
    this.kxq = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.ert = function() {
        if (sessionStorage.sessionValue15 == "true" || wpb.zan.value49) {
            if (wpb.zan.value49) {
                this.xrt()
            }
            this.ojf = (this.nmg > 0) ? this.nmg : new Date().getTime();
            this.mak();
            this.pru = setInterval(this.mak, 1000)
        }
    };
    this.blq = function() {
        clearInterval(this.pru)
    };
    this.elz = function(d) {
        this.ojf -= d
    };
    this.zlg = function(d, f) {
        var e = this.fwc.xpy("loading");
        if (e && e.nxv == null) {
            if (f && f !== "") {
                e.zhq = f
            } else {
                e.zhq = this.language.error
            }
            e.nxv = d;
            e.fur(this.eze.qyq())
        }
    };
    this.gup = function() {};
    this.icm = function() {};
    this.aoc = function() {};
    this.mic = function() {};
    this.shf = function() {
        var g = false,
            i = this.fwc.xpy("topb"),
            f = this.fwc.xpy("settings"),
            j = this.fwc.xpy("gameb"),
            d = this.fwc.xpy("topi");
        this.rxc = (this.rxc + 1 == wpb.zan.value5.length) ? 0 : this.rxc + 1;
        sessionStorage.sessionValue1 = wpb.zan.value5[this.rxc];
        this.language = this.dca(wpb.zan.value5[this.rxc]);
        this.hwa();
        if (i && g == false) {
            var e = i.ohh.xpy("language");
            if (e) {
                e.rcg(this.nzx(wpb.zan.value5[this.rxc]));
                g = true
            }
            i.elk(true)
        }
        if (f && g == false) {
            var e = f.ohh.xpy("language");
            if (e) {
                e.rcg(this.nzx(wpb.zan.value5[this.rxc]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.ohh.xpy("language");
            if (e) {
                e.rcg(this.nzx(wpb.zan.value5[this.rxc]));
                g = true
            }
        }
        if (g == false) {
            var e = this.usk.ohh.xpy("lang");
            if (e) {
                e.nhh = this.nzx(wpb.zan.value5[this.rxc])
            }
        }
        if (d) {
            d.pjh("language", sessionStorage.sessionValue1)
        }
        this.fur()
    };
    this.hwa = function() {};
    this.dca = function(d) {
        if (d == wpb.language.EN || d == wpb.language.US) {
            return new mwa()
        } else {
            if (d == wpb.language.ES || d == wpb.language.CO || d == wpb.language.MX || d == wpb.language.CL || d == wpb.language.VE) {
                return new xwk()
            } else {
                if (d == wpb.language.DE || d == wpb.language.AT) {
                    return new sws()
                } else {
                    if (d == wpb.language.PT || d == wpb.language.BR) {
                        return new vlj()
                    } else {
                        if (d == wpb.language.RU) {
                            return new fif()
                        } else {
                            if (d == wpb.language.EE) {
                                return new uty()
                            } else {
                                if (d == wpb.language.TR) {
                                    return new ymi()
                                } else {
                                    if (d == wpb.language.CZ) {
                                        return new ein()
                                    } else {
                                        if (d == wpb.language.GR) {
                                            return new onj()
                                        } else {
                                            if (d == wpb.language.BG) {
                                                return new flw()
                                            } else {
                                                if (d == wpb.language.GE) {
                                                    return new nno()
                                                } else {
                                                    if (d == wpb.language.HU) {
                                                        return new zyt()
                                                    } else {
                                                        if (d == wpb.language.RO) {
                                                            return new nqd()
                                                        } else {
                                                            if (d == wpb.language.FR) {
                                                                return new ycf()
                                                            } else {
                                                                if (d == wpb.language.HR) {
                                                                    return new zhj()
                                                                } else {
                                                                    if (d == wpb.language.IT) {
                                                                        return new lsp()
                                                                    } else {
                                                                        if (d == wpb.language.SE) {
                                                                            return new aqi()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.nzx = function(d) {
        if (d) {
            return this.eze.ilh(d)
        }
        return null
    };
    this.aqe = function() {
        this.eze.xqk()
    };
    this.cmk = function() {};
    this.uvc = function(d) {
        this.eze.odk(d)
    };
    this.shy = function(d) {
        this.eze.pxg(d)
    };
    this.fdi = function() {
        this.pzt();
        var d = this.fwc.xpy("history");
        this.iaq = true;
        this.luo = true;
        if (d) {
            d.yju(true)
        }
        this.rfy(this.pyl(this.language.fra))
    };
    this.eje = function() {
        loadGame("hist_" + wpb.onl.ipq.toLowerCase(), wpb.zan.value30 + "/" + wpb.onl.ipq.toLowerCase() + "/src/hist_" + wpb.onl.ipq.toLowerCase(), "UTF-8");
        removeGame(wpb.onl.ipq.toLowerCase(), wpb.zan.value30 + "/" + wpb.onl.ipq.toLowerCase() + "/src/" + wpb.onl.ipq.toLowerCase())
    };
    this.ogj = function() {
        var d = "./history_" + this.ipq.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.parent.postMessage('CloseGame',"*");
    };
    this.ltx = function() {
        var d = null;
        if (wpb.onl.wyn) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            wpb.onl.ige({
                type: "quit",
                sender: wpb.onl.ipq,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            wpb.onl.qfj();
            if (d !== "(api)") {
                window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(wpb.onl.ipq.toLowerCase(), wpb.zan.value30 + "/" + wpb.onl.ipq.toLowerCase() + "/src/" + wpb.onl.ipq.toLowerCase());
            removeGame("hist_" + wpb.onl.ipq.toLowerCase(), wpb.zan.value30 + "/" + wpb.onl.ipq.toLowerCase() + "/src/hist_" + wpb.onl.ipq.toLowerCase());
            loadMenu("menu", wpb.zan.value1001, "UTF-8", true)
        }
    };
    this.vfc = function() {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            wpb.onl.ige({
                type: "quit",
                sender: wpb.onl.ipq,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            d = decodeURIComponent(sessionStorage.sessionValue5);
            wpb.onl.qfj();
            if (d !== "(api)") {
                window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(wpb.onl.ipq.toLowerCase(), wpb.zan.value30 + "/" + wpb.onl.ipq.toLowerCase() + "/src/" + wpb.onl.ipq.toLowerCase());
            removeGame("hist_" + wpb.onl.ipq.toLowerCase(), wpb.zan.value30 + "/" + wpb.onl.ipq.toLowerCase() + "/src/hist_" + wpb.onl.ipq.toLowerCase());
            loadMenu("menu", wpb.zan.value1001, "UTF-8", false)
        }
    };
    this.qfj = function() {
        if (!wpb.onl.szo && wpb.zan.value83) {
            sessionStorage.clear()
        }
    };
    this.oam = function(f) {
        var g = null;
        if (this.uyc) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.xby !== wpb.stq.sil) {
                    if (g.xby === wpb.stq.pio || g.xby === wpb.stq.rys) {
                        g.Title = this.language.vrj;
                        g.Text = (g.xby === wpb.stq.pio) ? this.language.vcb : this.language.owa;
                        g.Buttons = [{
                            Text: this.language.coc,
                            Action: "quit"
                        }]
                    } else {
                        if (g.xby === wpb.stq.hpr) {
                            g.Title = this.language.uan;
                            g.Text = this.language.cdn + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.fbs;
                                g.Buttons = [{
                                    Text: this.pyl(this.language.ztv),
                                    Action: "history"
                                }, {
                                    Text: this.language.coc,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.coc,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.xby === wpb.stq.lgy || g.xby === wpb.stq.zql || g.xby === wpb.stq.toh) {
                                g.Title = this.cli;
                                if (g.xby === wpb.stq.lgy) {
                                    g.Text = this.language.freerounds_startinfo + " " + this.freeRoundTotal + " " + this.language.freerounds + "\n\n" + this.language.won
                                } else {
                                    if (g.xby === wpb.stq.zql) {
                                        g.Text = this.language.freerounds_info1 + " " + (this.freeRoundTotal - this.ibr) + " " + this.language.freerounds_info2 + "\n\n" + this.language.won
                                    } else {
                                        if (g.xby === wpb.stq.toh) {
                                            g.Text = this.language.freerounds_played + ": " + this.ibr + "\n" + this.language.freerounds_win + ": " + this.sbe(this.aed)
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
                    if (g.xby === wpb.stq.tky || g.xby === wpb.stq.dzu) {
                        g.Title = this.language.zbm;
                        g.Text = this.language.xka;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.xby === wpb.stq.anf) {
                            g.Title = this.language.dbg;
                            g.Text = this.language.cll;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.xby === wpb.stq.roulette.yth || g.xby === wpb.stq.roulette.lne) {
                                g.Title = this.language.vrj;
                                g.Text = (g.xby === wpb.stq.roulette.yth) ? this.language.qtm : this.language.xqr;
                                g.Buttons = [{
                                    Text: this.language.coc,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.uyc.lpj(f)
        }
    };
    this.stop = function() {
        this.blq();
        this.lzm();
        this.wwc();
        clearTimeout(this.eyf);
        if (!this.szo) {
            clearInterval(this.msd)
        }
        this.fwc.mgf("autop", "#stop");
        this.fwc.mgf("settings", "#stop");
        this.fwc.mgf("topb", "#stop")
    };
    this.zxh = function() {
        var d = false;
        if (this.dxu.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.hsf == "freeplay" && this.axl == "freeplay") {
                d = true
            } else {
                if (this.evm && (this.evm == "b71d982ffcbe56eb8cd11fa05963bbee" || this.evm.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (wpb.zan.value68 != null && this.nyk.toLowerCase() === wpb.zan.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            wpb.zan.value21.e = false;
            if (wpb.zan.value76) {
                wpb.zan.value76.f = false
            }
        }
        return d
    };
    this.rnx = function() {
        return (wpb.zan.value65 > 0)
    };
    this.eqw = function() {
        return (this.szo === false)
    };
    this.wko = function() {
        return false
    };
    this.wjg = function() {
        if (wpb.onl.rnx() && wpb.onl.wko()) {
            clearTimeout(wpb.onl.cjy);
            wpb.onl.cjy = setTimeout(wpb.onl.isw, wpb.zan.value65)
        }
    };
    this.ejp = function() {
        if (wpb.onl.rnx() && wpb.onl.cjy >= 0) {
            if (wpb.onl.wko()) {
                clearTimeout(wpb.onl.cjy);
                wpb.onl.cjy = setTimeout(wpb.onl.isw, wpb.zan.value65)
            } else {
                clearTimeout(wpb.onl.cjy);
                wpb.onl.cjy = -1
            }
        }
    };
    this.lzm = function() {
        if (wpb.onl.rnx()) {
            clearTimeout(wpb.onl.cjy);
            wpb.onl.cjy = -1
        }
    };
    this.tpn = function() {
        return false
    };
    this.swf = function() {
        return false
    };
    this.qki = function() {
        if (wpb.onl.tpn() && wpb.onl.swf() && wpb.onl.vgs < 0) {
            clearTimeout(wpb.onl.vgs);
            wpb.onl.vgs = setTimeout(wpb.onl.zlp, wpb.onl.qhc)
        }
    };
    this.hqm = function() {
        if (wpb.onl.tpn() && wpb.onl.vgs >= 0) {
            if (wpb.onl.swf()) {
                clearTimeout(wpb.onl.vgs);
                wpb.onl.vgs = setTimeout(wpb.onl.zlp, wpb.onl.qhc)
            } else {
                clearTimeout(wpb.onl.vgs);
                wpb.onl.vgs = -1
            }
        }
    };
    this.wwc = function() {
        if (wpb.onl.tpn()) {
            clearTimeout(wpb.onl.vgs);
            wpb.onl.vgs = -1
        }
    };
    this.zlp = function() {};
    this.uqb = function() {};
    this.vhs = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.xpe.replace(/_*/g, ""));
        if (e > d) {
            this.xpe = f
        }
    };
    this.cyp = function(g) {
        var e = (g && !this.npj),
            f = this.fwc.xpy("topb"),
            d = this.fwc.xpy("topi");
        if (d) {
            d.dxj(e)
        }
        if (f) {
            f.dxj(e);
            f.bab(e)
        }
    };
    this.xsi = function(g) {
        var e = (g && !this.npj),
            f = this.fwc.xpy("topb"),
            d = this.fwc.xpy("topi");
        if (d) {
            d.dxj(e)
        }
        if (f) {
            f.dxj(e);
            f.ltt(e)
        }
    };
    this.xsw = function(g) {
        var e = (g && !this.npj),
            f = this.fwc.xpy("topb"),
            d = this.fwc.xpy("topi");
        if (d) {
            d.dxj(e)
        }
        if (f) {
            f.dxj(e);
            f.vsj(e)
        }
    };
    this.buw = function() {
        var d = this.fwc.xpy("topb");
        if (d && !d.qdz()) {
            this.eze.qys("panel_in");
            this.eze.wym("panel_in");
            d.lpj()
        }
    };
    this.svh = function(d) {
        var e = this.fwc.xpy("topb");
        if (e && e.qdz()) {
            this.eze.qys("panel_out");
            this.eze.wym("panel_out");
            if (d) {
                e.ygb = d
            }
            e.gyp()
        }
    };
    this.sbe = function(f) {
        if (this.ksj > 0) {
            return (f * this.ksj).toFixed(0).toString()
        } else {
            if (wpb.zan.value21.e == false || this.wyn == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (wpb.zan.value21.m != 1) {
                    e = f * wpb.zan.value21.m;
                    var g = wpb.zan.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = wpb.zan.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.dyp(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.xth = function(f) {
        if (this.ksj > 0) {
            var e = (f * this.ksj).toFixed(0).toString();
            if (wpb.zan.value21.e == true && wpb.zan.value21.m == 1 && wpb.zan.value21.s && this.wyn == false) {
                e = wpb.zan.value21.s + " " + e
            }
            return e
        } else {
            if (wpb.zan.value21.e == false || this.wyn == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (wpb.zan.value21.m != 1) {
                    e = f * wpb.zan.value21.m;
                    var g = wpb.zan.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = wpb.zan.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.dyp(e, (d == 0) ? 0 : d + 1);
                if (wpb.zan.value21.s) {
                    e = wpb.zan.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.dyp = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (wpb.zan.value21.cs != null) {
                l = l.replace(/\./, wpb.zan.value21.cs)
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
                    if (wpb.zan.value21.ts != null) {
                        e += wpb.zan.value21.ts
                    }
                }
            }
            if (wpb.zan.value21.cs != null) {
                f = f.replace(/\./, wpb.zan.value21.cs)
            }
            return e + f
        }
    };
    this.rkh = function(f) {
        if (this.ksj > 0) {
            return (f * this.ksj).toFixed(0).toString()
        } else {
            if (wpb.zan.value76.f == false || this.wyn == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (wpb.zan.value76.m != 1) {
                    e = f * wpb.zan.value76.m;
                    var g = wpb.zan.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = wpb.zan.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.okv(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.ipo = function(f) {
        if (this.ksj > 0) {
            var e = (f * this.ksj).toFixed(0).toString();
            if (wpb.zan.value76.f == true && wpb.zan.value76.m == 1 && wpb.zan.value76.s && this.wyn == false) {
                e = wpb.zan.value76.s + " " + e
            }
            return e
        } else {
            if (wpb.zan.value76.f == false || this.wyn == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (wpb.zan.value76.m != 1) {
                    e = f * wpb.zan.value76.m;
                    var g = wpb.zan.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = wpb.zan.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.okv(e, (d == 0) ? 0 : d + 1);
                if (wpb.zan.value76.s) {
                    e = wpb.zan.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.okv = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (wpb.zan.value76.cs != null) {
                l = l.replace(/\./, wpb.zan.value76.cs)
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
                    if (wpb.zan.value76.ts != null) {
                        e += wpb.zan.value76.ts
                    }
                }
            }
            if (wpb.zan.value76.cs != null) {
                f = f.replace(/\./, wpb.zan.value76.cs)
            }
            return e + f
        }
    };
    this.pyl = function(d) {
        if (d && sessionStorage.sessionValue1 !== wpb.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.fkb = function() {
        for (var f = 0, d = this.sgq.rha.tst.length, e = null, g = 0; f < d; f++) {
            e = this.sgq.rha.tst[f];
            g = e.pgm.substring(e.pgm.length - 1);
            this.fwc.usx(e.pgm, this.bpe(this.bnu.lmb.aei[d - 1][e.aei], (d > 2) ? this.bnu.lmb.ojd : this.bnu.lmb.display, this.style.lmb.vsg[e.aei], e.itx, e.value, this.eze.ilh((d > 2) ? e.pgm + "_smalldsp" : e.pgm + "_dsp"), (d <= 2) ? [this.eze.ilh("jackpot_frame")] : (Number(g) <= 2) ? [this.eze.ilh("jackpot_topframe")] : [this.eze.ilh("jackpot_bottomframe")], (d > 2) ? this.eze.ilh(e.pgm + "_sym") : null), ["jackpots"])
        }
        this.fwc.usx("jwp", this.bpe(this.bnu.lmb.tof.aei, this.bnu.lmb.tof, this.style.lmb.tof, null, null, null, [this.eze.ilh("jackpot_win_0"), this.eze.ilh("jackpot_win_1"), this.eze.ilh("jackpot_win_2")], null));
        this.fwc.mgf("jwp", "#kwl", [false]);
        if (this.upe()) {
            this.fwc.usx("mjwp", this.rym(this.bnu.lmb.uyq.aei, this.bnu.lmb.uyq, this.style.lmb.uyq, this.eze.ilh("mj_bg"), this.eze.ilh("mj_font"), this.eze.ilh("mj_label"), [this.eze.ilh("mj_0"), this.eze.ilh("mj_1"), this.eze.ilh("mj_2"), this.eze.ilh("mj_3"), this.eze.ilh("mj_4"), this.eze.ilh("mj_5")]));
            this.fwc.mgf("mjwp", "#kwl", [false])
        }
    };
    this.nxc = function() {
        var e = this.fwc.vtm("jackpots"),
            f = this.fwc.xpy("jwp"),
            k = this.fwc.xpy("mjwp");
        for (var j = 0, d = this.sgq.rha.tst.length, g = null; j < d; j++) {
            g = this.sgq.rha.tst[j];
            e[j].aqq(this.bnu.lmb.aei[d - 1][g.aei]);
            e[j].rmt((d > 2) ? this.bnu.lmb.ojd : this.bnu.lmb.display)
        }
        if (f) {
            f.aqq(this.bnu.lmb.tof.aei);
            f.rmt(this.bnu.lmb.tof)
        }
        if (k) {
            k.aqq(this.bnu.lmb.uyq.aei);
            k.rmt(this.bnu.lmb.uyq)
        }
    };
    this.bpe = function(k, i, e, l, m, f, d, g) {
        var j = new urf();
        j.yjn(k, null, this.context2D);
        j.parent = this;
        j.uwd = f;
        j.ygw = d;
        j.mqb = g;
        j.ahe(l);
        j.xhx(m);
        j.pzz(e);
        j.rmt(i);
        return j
    };
    this.rym = function(j, i, g, k, l, f, e) {
        var d = new rwz();
        d.yjn(j, null, this.context2D);
        d.parent = this;
        d.uhs = k;
        d.yui = l;
        d.rrw = f;
        d.ceu = e;
        d.pzz(g);
        d.rmt(i);
        return d
    };
    this.nbc = function(f) {
        if (this.xgj() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.fwc.mgf(f[e].pgm, "#xhx", [f[e].value])
            }
            this.fur()
        }
    };
    this.zzs = function(d) {
        if (this.xgj() === true) {
            this.lmb = {
                pgm: d.pgm,
                value: d.value,
                fmn: d.fmn
            }
        }
    };
    this.kii = function() {
        this.lmb = null
    };
    this.aat = function() {
        return false
    };
    this.upe = function() {
        return false
    };
    this.xgj = function() {
        return (!this.szo && this.sgq.rha.tst.length > 0 && this.aat())
    };
    this.hky = function() {
        return (this.lmb != null)
    };
    this.wai = function() {
        return (wpb.zan.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.fon = function() {
        if (this.cnc() && this.ril()) {
            this.gau()
        }
    };
    this.ril = function() {
        return false
    };
    this.cnc = function() {
        if (this.szo) {
            return false
        }
        return (this.sgq.rha.fjf.length + this.sgq.rha.mwm.length > 0)
    };
    this.gau = function() {
        var g = null,
            e = this.sgq.rha.fjf.length,
            d = this.sgq.rha.mwm.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.sgq.rha.fjf.splice(f, 1)[0];
                g.xby = wpb.stq.sil;
                this.htl.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.sgq.rha.mwm.splice(f, 1)[0];
                g.xby = wpb.stq.sil;
                this.htl.push(g)
            }
            if (this.uyc && !this.uyc.qdz()) {
                this.khb()
            }
        }
    };
    this.khb = function() {
        var d = null;
        if (this.htl.length > 0) {
            d = this.htl.shift();
            this.oam([d])
        }
    };
    this.xty = function() {
        if (wpb.onl.njj.length > 0) {
            wpb.onl.oam(wpb.onl.njj)
        }
    };
    this.gzp = function() {
        this.htl.length = 0
    };
    this.juq = function() {
        this.njj.length = 0;
        if (this.dus) {
            this.dus.gyp()
        }
    };
    this.xnj = function() {
        var f = null,
            d = this.sgq.rha.njj.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.sgq.rha.njj.splice(e, 1)[0];
                f.xby = wpb.stq.sil;
                this.njj.push(f)
            }
            if (this.dus) {
                this.dus.lpj(this.njj[0].Title, this.njj[0].Text, this.njj.length)
            }
        }
    };
    this.gec = function() {
        var d = false;
        if (this.uyc && this.uyc.qdz()) {
            d = true
        }
        if (this.dus && this.dus.qdz()) {
            d = true
        }
        if (this.wai()) {
            d = true
        }
        if (this.dph) {
            this.dph.style.display = (d) ? "block" : "none"
        }
    };
    this.nhq = function() {
        this.cyp(false);
        this.usk.bab(false);
        this.usk.ohh.mgf("info", "#gyg");
        this.oam([{
            xby: wpb.stq.hpr
        }])
    };
    this.geu = function() {
        wpb.onl.any = true
    };
    this.vzn = function() {
        this.dpt = new hvu().yjn(this, wpb.zan.value6)
    };
    this.ccd = function() {
        if (this.dpt) {
            this.dpt.connect(this.ipq, this.hsf, this.axl, this.evm, this.xpe, true)
        }
    };
    this.hor = function() {
        if (wpb.onl.dpt) {
            wpb.onl.dpt.connect(wpb.onl.ipq, wpb.onl.hsf, wpb.onl.axl, wpb.onl.evm, wpb.onl.xpe, false)
        }
    };
    this.aqj = function() {};
    this.lxa = function() {};
    this.zmw = function(d) {
        if (!this.zxh() && !this.szo) {
            clearTimeout(this.eyf);
            if (this.wqf()) {
                this.eyf = setTimeout(this.oqq, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.eyf = setTimeout(this.geu, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.oqq = function() {
        wpb.onl.qgj = true
    };
    this.wqf = function() {
        return wpb.zan.value36 || wpb.zan.value37
    }
}

function lii() {
    this.yjn = function() {
        this.tft("btn", this.nts);
        this.tft("gamble_on", this.nts);
        this.tft("gamble_off", this.nts);
        this.tft("panel_in", this.nts);
        this.tft("panel_out", this.nts);
        this.tft("audioon", this.nts);
        for (var a = 0; a < 12; a++) {
            this.tft("step" + a, this.nts)
        }
        this.tft("maxstep", this.nts);
        this.tft("gambleprop", this.inn)
    }
}
lii.prototype = new ujb;

function nwu() {
    this.cyf = {
        zdj: 84,
        sab: -1,
        value: "T",
        dax: null
    };
    this.ebh = {
        zdj: 80,
        sab: -1,
        value: "P",
        dax: null
    };
    this.start = {
        zdj: 32,
        sab: -1,
        value: "SPACE",
        dax: null
    };
    this.npj = {
        zdj: 16,
        sab: -1,
        value: "SHIFT",
        dax: null
    };
    this.fzl = {
        zdj: 38,
        sab: -1,
        value: "\u25B2",
        dax: null
    };
    this.uvp = {
        zdj: 40,
        sab: -1,
        value: "\u25BC",
        dax: null
    };
    this.pqg = {
        zdj: 71,
        sab: -1,
        value: "G",
        dax: null
    };
    this.tae = {
        zdj: 27,
        sab: -1,
        value: "ESC",
        dax: null
    };
    this.language = {
        zdj: 76,
        sab: -1,
        value: "L",
        dax: null
    };
    this.lyo = {
        zdj: 13,
        sab: -1,
        value: "ENTER",
        dax: null
    };
    this.pzb = {
        zdj: 27,
        sab: -1,
        value: "ESC",
        dax: null
    };
    this.vcw = {
        zdj: 39,
        sab: -1,
        value: "\u25B6",
        dax: null
    };
    this.xpv = {
        zdj: 37,
        sab: -1,
        value: "\u25C0",
        dax: null
    };
    this.ivp = {
        zdj: 27,
        sab: -1,
        value: "ESC",
        dax: null
    };
    this.tpp.push(this.cyf);
    this.tpp.push(this.ebh);
    this.tpp.push(this.start);
    this.tpp.push(this.fzl);
    this.tpp.push(this.uvp);
    this.tpp.push(this.tae);
    this.tpp.push(this.language);
    this.tpp.push(this.npj);
    this.tpp.push(this.pqg)
}
nwu.prototype = new ukk;

function brw(g, c, f, e, i, a, d, b) {
    this.kvr = g;
    this.qhv = f;
    this.mvo = e;
    this.rxu = i;
    this.ipq = c;
    this.xpe = a;
    this.nye = d;
    this.nyk = b;
    this.hwx = [];
    this.sxh = [];
    this.mca = [];
    this.xwi = [];
    this.neg = [];
    this.xnl = 0;
    this.fmn = 0;
    this.win = 0;
    this.nen = 0;
    this.pwu = 0;
    this.ghb = 0;
    this.ion = 0;
    this.nfq = 0;
    this.pia = -1;
    this.jpj = -1;
    this.stw = 0;
    this.npj = false;
    this.ifs = -1;
    this.fjn = 0;
    this.jsh = "";
    this.iyr = function(l) {
        if (l != null) {
            this.okn = 0;
            this.pld = this.dna(l);
            if (this.pld == 0) {
                this.pjf = this.jpo(l);
                this.stq = this.dna(l);
                this.xnl = this.bsx(l);
                this.fmn = this.bsx(l);
                this.win = this.bsx(l);
                this.nen = this.bsx(l);
                this.ion = this.jpo(l);
                this.pwu = this.bsx(l);
                this.ghb = this.bsx(l);
                this.nfq = this.bsx(l);
                for (var j = 0; j < 8; j++) {
                    this.mca[j] = this.jpo(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.sxh[j] = this.bsx(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.hwx[j] = this.bsx(l)
                }
                this.pia = this.jpo(l);
                this.jpj = this.jpo(l);
                this.stw = this.jpo(l);
                this.fjn = this.jpo(l);
                this.ifs = this.jpo(l);
                var m = this.jpo(l);
                for (var j = 0; j < m; j++) {
                    this.xwi[j] = this.bsx(l)
                }
                var k = this.jpo(l);
                for (var j = 0; j < k; j++) {
                    this.neg[j] = this.bsx(l)
                }
                this.lvl(l);
                if (this.pjf == 0) {
                    this.han("A/u250")
                } else {
                    this.sgq.ens()
                }
            } else {
                if (this.pld == 1) {
                    this.pjf = this.jpo(l);
                    this.stq = this.dna(l);
                    this.xnl = this.bsx(l);
                    this.fmn = this.bsx(l);
                    this.win = this.bsx(l);
                    this.nen = this.bsx(l);
                    this.ion = this.jpo(l);
                    this.pwu = this.bsx(l);
                    this.ghb = this.bsx(l);
                    this.nfq = this.bsx(l);
                    for (var j = 0; j < 8; j++) {
                        this.mca[j] = this.jpo(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.sxh[j] = this.bsx(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.hwx[j] = this.bsx(l)
                    }
                    this.pia = this.jpo(l);
                    this.jpj = this.jpo(l);
                    this.stw = this.jpo(l);
                    this.npj = (this.jpo(l) == 1) ? true : false;
                    this.fjn = this.jpo(l);
                    this.ifs = this.jpo(l);
                    this.lvl(l);
                    if (this.stq == 0) {
                        if (this.pjf == wpb.brr.etl.dpq) {
                            this.sgq.ens()
                        } else {
                            if (this.pjf == wpb.brr.etl.ogk) {
                                this.sgq.bjp()
                            } else {
                                if (this.pjf == wpb.brr.etl.nyr) {
                                    this.sgq.iqd()
                                } else {
                                    if (this.pjf == wpb.brr.etl.fap) {
                                        this.sgq.yuq()
                                    } else {
                                        if (this.pjf == wpb.brr.etl.mzh) {
                                            this.sgq.cxf()
                                        } else {
                                            if (this.pjf == wpb.brr.etl.xha) {
                                                this.sgq.bpr()
                                            } else {
                                                if (this.pjf == wpb.brr.etl.lxu) {
                                                    this.sgq.ptz()
                                                } else {
                                                    if (this.pjf == wpb.brr.etl.lvh) {
                                                        this.sgq.lhf()
                                                    } else {
                                                        if (this.pjf == wpb.brr.etl.eut) {
                                                            this.sgq.mjr()
                                                        } else {
                                                            if (this.pjf == wpb.brr.etl.syg) {
                                                                this.sgq.hki()
                                                            } else {
                                                                if (this.pjf == wpb.brr.etl.bwe) {
                                                                    this.sgq.ato()
                                                                } else {
                                                                    if (this.pjf == wpb.brr.etl.kkn) {
                                                                        this.sgq.zvc()
                                                                    } else {
                                                                        this.eoj()
                                                                    }
                                                                }
                                                            }
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
                        this.sgq.hnm(this.stq)
                    }
                } else {
                    if (this.pld == 2) {} else {
                        if (this.pld == 3) {
                            this.fmn = this.bsx(l);
                            this.sgq.sfg()
                        } else {
                            if (this.pld === 8) {
                                this.han("8")
                            } else {
                                if (this.pld == 9) {
                                    this.sgq.lrg.dxu = l.substring(this.okn)
                                } else {
                                    this.gwm = this.dna(l);
                                    this.sgq.ikx(l.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.lvl = function(j) {
        if (this.pld == 0) {
            this.jsh = this.obm(j);
            if (wpb.zan.value21.e === true && wpb.zan.value21.s !== "") {
                this.jsh = ""
            }
        }
    };
    this.eoj = function() {};
    this.zgx = function(j, k) {
        this.han("A/u251," + j + "," + k)
    };
    this.oxh = function(j, l, k) {
        this.han("A/u2512," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.qrg = function(j, l, k) {
        this.han("A/u253," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.uhp = function() {
        this.han("A/u257")
    };
    this.qeo = function() {
        this.han("A/u259")
    };
    this.pqg = function(j) {
        this.han("A/u258," + j)
    };
    this.xbk = function() {
        this.han("A/u2514")
    };
    this.ewd = function() {
        this.han("A/u2515")
    };
    this.awl = function(j) {
        this.han("A/u2513," + j)
    }
}
brw.prototype = new npi;

function gvw() {
    this.yjn = function(a, b) {
        this.kvr = b;
        this.lrg = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.qhv = f;
        this.mvo = e;
        this.rxu = g;
        this.ipq = c;
        this.nye = d;
        this.nyk = b;
        this.rha = new brw(this.kvr, c, f, e, g, a, d, b);
        this.rha.yjn(this)
    };
    this.zgx = function(a, b) {
        this.rha.zgx(a, b)
    };
    this.oxh = function(a, c, b) {
        this.rha.oxh(a, c, b)
    };
    this.qrg = function(a, c, b) {
        this.rha.qrg(a, c, b)
    };
    this.uhp = function() {
        this.rha.uhp()
    };
    this.qeo = function() {
        this.rha.qeo()
    };
    this.pqg = function(a) {
        this.rha.pqg(a)
    };
    this.xbk = function() {
        this.rha.xbk()
    };
    this.ewd = function() {
        this.rha.ewd()
    };
    this.awl = function(a) {
        this.rha.awl(a)
    };
    this.ens = function() {
        var c = this.rha.pjf;
        for (var b = 0; b < this.rha.sxh.length; b++) {
            this.lrg.sxh[b] = this.rha.sxh[b]
        }
        for (var b = 0; b < this.rha.hwx.length; b++) {
            this.lrg.hwx[b] = this.rha.hwx[b]
        }
        this.lrg.fmn = this.rha.fmn;
        this.lrg.pwu = this.rha.pwu;
        this.lrg.ghb = this.rha.ghb;
        for (var b = 0, a = this.rha.xwi.length; b < a && this.rha.xwi[b] <= this.rha.ghb; b++) {
            this.lrg.xwi[b] = this.rha.xwi[b]
        }
        if (c == wpb.brr.etl.dpq || (c == wpb.brr.etl.nyr && this.rha.win + this.rha.nen == 0) || c == wpb.brr.etl.fap || (c == wpb.brr.etl.mzh && this.rha.win + this.rha.nen == 0) || c == wpb.brr.etl.lxu || (c == wpb.brr.etl.eut && this.rha.win + this.rha.nen == 0) || (c == wpb.brr.etl.ogk && this.lrg.owt == true)) {
            this.lrg.csv = true
        } else {
            this.lrg.csv = false
        }
        this.lrg.lxv = this.rha.ion;
        this.lrg.totalBet = this.lrg.xwi[this.lrg.lxv];
        this.lrg.win = this.rha.win;
        this.lrg.vqd = this.rha.pia;
        this.lrg.jpj = this.rha.jpj;
        this.lrg.stw = this.rha.stw;
        this.lrg.state = c;
        this.sze();
        this.lrg.quh();
        this.lrg.sts(this.rha.pjf, this.rha.xnl, this.rha.mca, this.rha.fjn, this.rha.ifs)
    };
    this.bjp = function() {
        for (var a = 0; a < this.rha.sxh.length; a++) {
            this.lrg.sxh[a] = this.rha.sxh[a]
        }
        for (var a = 0; a < this.rha.hwx.length; a++) {
            this.lrg.hwx[a] = this.rha.hwx[a]
        }
        this.lrg.fmn = this.rha.fmn;
        this.lrg.vqd = this.rha.pia;
        this.lrg.state = this.rha.pjf;
        this.lrg.jpj = this.rha.jpj;
        this.sze();
        this.lrg.kyl();
        this.lrg.qxj(this.rha.xnl)
    };
    this.lhf = function() {
        for (var a = 0; a < this.rha.sxh.length; a++) {
            this.lrg.sxh[a] = this.rha.sxh[a]
        }
        for (var a = 0; a < this.rha.hwx.length; a++) {
            this.lrg.hwx[a] = this.rha.hwx[a]
        }
        this.lrg.fmn = this.rha.fmn;
        this.lrg.jpj = this.rha.jpj;
        this.lrg.vqd = this.rha.pia;
        this.lrg.state = this.rha.pjf;
        this.sze();
        this.lrg.nfb();
        this.lrg.qxj(this.rha.xnl)
    };
    this.iqd = function() {
        for (var a = 0; a < this.rha.sxh.length; a++) {
            this.lrg.sxh[a] = this.rha.sxh[a]
        }
        for (var a = 0; a < this.rha.hwx.length; a++) {
            this.lrg.hwx[a] = this.rha.hwx[a]
        }
        this.lrg.fmn = this.rha.fmn;
        this.lrg.win = this.rha.win;
        this.lrg.jpj = this.rha.jpj;
        this.lrg.vqd = this.rha.pia;
        this.lrg.state = this.rha.pjf;
        if (this.lrg.win > 0) {
            this.lrg.gei.wer(this.rha.mca, this.rha.fjn)
        }
        this.sze();
        this.lrg.uov();
        this.lrg.qxj(this.rha.xnl)
    };
    this.yuq = function() {
        this.lrg.fmn = this.rha.fmn;
        this.lrg.state = this.rha.pjf;
        this.sze();
        this.lrg.orv()
    };
    this.ptz = function() {
        for (var a = 0; a < this.rha.sxh.length; a++) {
            this.lrg.sxh[a] = this.rha.sxh[a]
        }
        for (var a = 0; a < this.rha.hwx.length; a++) {
            this.lrg.hwx[a] = this.rha.hwx[a]
        }
        this.lrg.fmn = this.rha.fmn;
        this.lrg.win = this.rha.win;
        this.lrg.jpj = this.rha.jpj;
        this.lrg.vqd = this.rha.pia;
        this.lrg.state = this.rha.pjf;
        if (this.lrg.win > 0) {
            this.lrg.gei.wer(this.rha.mca, this.rha.fjn)
        }
        this.sze();
        this.lrg.vop(this.rha.fjn);
        this.lrg.qxj(this.rha.xnl)
    };
    this.cxf = function() {
        this.lrg.fmn = this.rha.fmn;
        this.lrg.win = this.rha.win;
        this.lrg.state = this.rha.pjf;
        this.lrg.gei.wer(this.rha.mca, this.rha.fjn);
        this.sze();
        this.lrg.xus();
        this.lrg.qxj(this.rha.xnl)
    };
    this.bpr = function() {
        this.lrg.fmn = this.rha.fmn;
        this.lrg.win = this.rha.win;
        this.lrg.state = this.rha.pjf;
        this.sze();
        this.lrg.ixg();
        this.lrg.qxj(this.rha.xnl)
    };
    this.mjr = function() {
        this.lrg.fmn = this.rha.fmn;
        this.lrg.win = this.rha.win;
        this.lrg.state = this.rha.pjf;
        this.lrg.gei.wer(this.rha.mca, this.rha.fjn);
        this.sze();
        this.lrg.usc(this.rha.fjn);
        this.lrg.qxj(this.rha.xnl)
    };
    this.hki = function() {
        this.lrg.fmn = this.rha.fmn;
        this.lrg.win = this.rha.win;
        this.lrg.state = this.rha.pjf;
        this.sze();
        this.lrg.xqe(this.rha.ifs);
        this.lrg.qxj(this.rha.xnl)
    };
    this.ato = function() {
        this.lrg.fmn = this.rha.fmn;
        this.lrg.win = this.rha.win;
        this.lrg.state = this.rha.pjf;
        this.lrg.gei.wer(this.rha.mca, this.rha.fjn);
        this.sze();
        this.lrg.onm(this.rha.ifs);
        this.lrg.qxj(this.rha.xnl)
    };
    this.sze = function() {
        this.lrg.jsh = this.rha.jsh
    }
}
gvw.prototype = new brd;

function huk() {
    var a = this;
    this.kih = false;
    this.mrr = null;
    this.ohh = null;
    this.uah = false;
    this.bit = -1;
    this.erh = 0;
    this.lzt = null;
    this.ksv = 800;
    this.rkt = 0;
    this.qiu = null;
    this.tgy = null;
    this.qli = null;
    this.rsh = null;
    this.uay = null;
    this.lfx = null;
    this.gpf = new rud();
    this.ldl = new rud();
    this.mya = 30;
    this.yjn = function(b, d, c) {
        huk.prototype.yjn.call(this, b, d, c);
        this.dff()
    };
    this.xxb = function(c, b) {
        try {
            this.mya = c.usg;
            this.gpf = c.szl;
            this.ldl = c.xab;
            this.kvz(c);
            this.pwt(c);
            this.fcn(c);
            this.pzz(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.rmt = function(f) {
        try {
            var c = {},
                b = this.ohh.xpy("info"),
                m = this.ohh.xpy("creditd"),
                l = this.ohh.xpy("betd"),
                k = this.ohh.vtm("buttons");
            if (this.parent.mnu() != null) {
                c = f.imt
            } else {
                if (wpb.zan.value57 === wpb.ui.ykx) {
                    c = f.fal
                } else {
                    if (wpb.zan.value57 === wpb.ui.liz) {
                        c = f.grg
                    } else {
                        if (wpb.zan.value57 === wpb.ui.vyu) {
                            c = f.pne
                        }
                    }
                }
            }
            this.mya = f.usg;
            this.gpf = f.szl;
            this.ldl = f.xab;
            if (m) {
                m.rmt(f.display);
                m.aqq(f.zon)
            }
            if (l) {
                l.rmt(f.display);
                l.aqq(f.vzu)
            }
            if (b) {
                b.rmt(f.dbg);
                b.aqq(f.dbg.aei)
            }
            this.jvd();
            for (var d = 0, g = k.length; d < g; d++) {
                if (k[d] instanceof lao) {
                    k[d].rmt(f.fwv)
                }
            }
            if (this.parent.mnu() != null) {
                this.ohh.mgf("astart", "#rmt", [f.bxh]);
                if (this.parent.tuo() === true) {
                    this.ohh.mgf("start", "#rmt", [f.bxh])
                } else {
                    this.ohh.mgf("start", "#rmt", [f.rkz])
                }
            } else {
                this.ohh.mgf("start", "#rmt", [f.rkz]);
                if (wpb.zan.value57 === wpb.ui.ykx) {
                    this.ohh.mgf("astart", "#rmt", [f.rkz])
                }
            }
            this.ohh.mgf("start", "#aqq", [c.wyx]);
            this.ohh.mgf("astart", "#aqq", [c.aox]);
            this.ohh.mgf("bet", "#aqq", [c.lku]);
            this.ohh.mgf("gamble", "#aqq", [c.qxd]);
            this.ohh.mgf("exit", "#aqq", [c.qls]);
            this.ohh.mgf("lang", "#aqq", [c.dbi]);
            this.ohh.mgf("setting", "#aqq", [c.bsb])
        } catch (j) {
            console.error(j)
        }
    };
    this.pzz = function(f) {
        try {
            var k = this.ohh.xpy("info"),
                c = this.ohh.vtm("displays"),
                g = this.ohh.vtm("buttons");
            this.tgy = f.backgroundColor;
            this.qli = f.kck;
            this.uay = f.wli;
            this.lfx = f.thz;
            if (k) {
                k.pzz(f.dbg)
            }
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].pzz(f.lcf)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].pzz(f.display)
            }
            this.jvd()
        } catch (j) {
            console.error(j)
        }
    };
    this.qwn = function(o, n, p) {
        var m = this.ohh.vtm("buttons"),
            d = this.ohh.xpy("bet"),
            b = this.ohh.xpy("start"),
            k = this.ohh.xpy("betd"),
            c = this.ohh.xpy("creditd");
        hyl = this.parent.fwc.xpy("betsel"), vxd = o - this.x, ppi = n - this.y;
        for (var g = 0, l = m.length; g < l; g++) {
            var e = m[g];
            if (vxd >= e.x && vxd <= e.x + e.width && ppi >= e.y && ppi <= e.y + e.height && e.qdz() == true) {
                if (e.wek() && !e.mhg()) {
                    if (e === d) {
                        e.lyt(true, true, false);
                        for (var f = 0; f < l; f++) {
                            m[f].znu(true, false)
                        }
                        e.ett();
                        this.lzt = function() {
                            if (e.ett() === true) {
                                clearInterval(a.erh);
                                e.lyt(false, true);
                                for (var i = 0; i < l; i++) {
                                    m[i].znu(false)
                                }
                            }
                        };
                        this.erh = setInterval(this.lzt, e.zzm)
                    } else {
                        if (e === b && b.ett === this.gvi) {
                            e.lyt(true, true, false)
                        } else {
                            e.lyt(true, true)
                        }
                        e.ett();
                        for (var f = 0; f < l; f++) {
                            m[f].znu(true)
                        }
                    }
                    return true
                }
            }
        }
        if (d && d.wek() && !d.mhg()) {
            if (k && vxd >= k.x && vxd <= k.x + k.width && ppi >= k.y && ppi <= k.y + k.height) {
                if (!p) {
                    if (hyl && hyl.wek()) {
                        this.parent.atc()
                    }
                    return true
                }
            } else {
                if (c && vxd >= c.x && vxd <= c.x + c.width && ppi >= c.y && ppi <= c.y + c.height) {
                    if (!p) {
                        this.parent.kbs()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.vtx = function() {
        var f = this.ohh.vtm("buttons"),
            k = this.ohh.xpy("bet"),
            g = this.ohh.xpy("start");
        for (var d = 0, b = f.length; d < b; d++) {
            var e = f[d];
            if (e.sxn() === true) {
                e.lyt(false, true);
                if (e === k) {
                    clearInterval(this.erh);
                    for (var c = 0; c < b; c++) {
                        f[c].znu(false)
                    }
                } else {
                    if (e === g && g.ett === this.gvi) {
                        clearTimeout(this.rkt);
                        a.parent.eze.qys("auto_fill");
                        this.ohh.mgf("start", "#svo")
                    }
                }
                return true
            }
        }
        return false
    };
    this.szu = function(g) {
        var f = this.ohh.vtm("buttons"),
            k = this.ohh.xpy("bet");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (g == d.bdd) {
                if (d.wek() && !d.mhg()) {
                    d.lyt(true, true);
                    d.ett();
                    for (var c = 0; c < b; c++) {
                        f[c].znu(true)
                    }
                }
                return true
            }
        }
        if (g == this.parent.rvw.uvp.zdj) {
            if (k && k.wek() && !k.mhg()) {
                this.parent.dhl();
                for (var c = 0, b = f.length; c < b; c++) {
                    f[c].znu(true)
                }
            }
            return true
        }
        return false
    };
    this.bjz = function() {
        var e = this.ohh.vtm("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.sxn() == true) {
                c.lyt(false, true);
                return true
            }
        }
        return false
    };
    this.fbp = function(l, k, m) {
        var j = this.ohh.vtm("buttons"),
            c = this.ohh.xpy("bet");
        if (l != null && k != null) {
            var e = l - this.x;
            var d = k - this.y;
            for (var f = 0, g = j.length; f < g; f++) {
                var b = j[f];
                if (e >= b.x && e <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.qdz() && b.wek() && !b.mhg()) {
                    return b.ett
                }
            }
        } else {
            if (m != null) {
                for (var f = 0, g = j.length; f < g; f++) {
                    var b = j[f];
                    if (m == b.bdd && b.qdz() && b.wek() && !b.mhg()) {
                        return b.ett
                    }
                }
                if (m == this.parent.rvw.uvp.zdj && c && c.qdz() && c.wek() && !c.mhg()) {
                    return this.parent.dhl
                }
            }
        }
        return null
    };
    this.dff = function() {
        this.ohh = new ppr();
        this.ohh.yjn();
        this.ohh.qaf("displays");
        this.ohh.qaf("buttons");
        this.ohh.qaf("allbuttons");
        this.ohh.qaf("infos");
        this.ohh.qaf("start");
        this.ohh.qaf("collect");
        this.ohh.qaf("game");
        this.ohh.qaf("hold");
        this.ohh.qaf("settings")
    };
    this.fcn = function(b) {
        var c = this.acp(b.dbg.aei);
        c.rmt(b.dbg);
        this.ohh.usx("info", c, ["infos"])
    };
    this.kvz = function(c) {
        var b = {};
        if (this.parent.mnu() != null) {
            b = c.imt
        } else {
            if (wpb.zan.value57 === wpb.ui.ykx) {
                b = c.fal
            } else {
                if (wpb.zan.value57 === wpb.ui.liz) {
                    b = c.grg
                } else {
                    if (wpb.zan.value57 === wpb.ui.vyu) {
                        b = c.pne
                    }
                }
            }
        }
        if (this.parent.mnu() != null) {
            this.ohh.usx("astart", this.wem(b.aox, this.parent.language.aly, "---", this.parent.eze.ilh("btn_s"), this.parent.omm, (!this.parent.szo) ? this.parent.rvw.npj : null, c.bxh), ["buttons", "allbuttons", "start", "collect", "hold"]);
            if (this.parent.tuo() === true) {
                this.ohh.usx("start", this.wem(b.wyx, (this.parent.bnu.hhh === false) ? this.parent.language.start : null, "---", (this.parent.bnu.hhh === false) ? this.parent.eze.ilh("btn") : this.parent.eze.ilh("btn_dl"), (this.parent.tuo() === true) ? this.gvi : this.parent.uka, (!this.parent.szo) ? this.parent.rvw.start : null, c.bxh), ["buttons", "allbuttons", "start", "collect", "hold"])
            } else {
                this.ohh.usx("start", this.riu(b.wyx, (this.parent.bnu.hhh === false) ? this.parent.language.start : null, (this.parent.bnu.hhh === false) ? this.parent.eze.ilh("btn") : this.parent.eze.ilh("btn_dl"), (this.parent.tuo() === true) ? this.gvi : this.parent.uka, (!this.parent.szo) ? this.parent.rvw.start : null, c.rkz), ["buttons", "allbuttons", "start", "collect", "hold"])
            }
        } else {
            this.ohh.usx("start", this.riu(b.wyx, (this.parent.bnu.hhh === false) ? this.parent.language.start : null, (this.parent.bnu.hhh === false) ? this.parent.eze.ilh("btn") : this.parent.eze.ilh("btn_dl"), (this.parent.tuo() === true) ? this.gvi : this.parent.uka, (!this.parent.szo) ? this.parent.rvw.start : null, c.rkz), ["buttons", "allbuttons", "start", "collect", "hold"]);
            this.ohh.usx("astart", this.riu(b.aox, this.parent.language.npj, (wpb.zan.value57 === wpb.ui.ykx) ? this.parent.eze.ilh("btn") : this.parent.eze.ilh("btn_s"), this.parent.omm, (!this.parent.szo) ? this.parent.rvw.npj : null, c.fwv), ["buttons", "allbuttons", "start", "collect", "game", "hold"])
        }
        this.ohh.usx("bet", this.riu(b.lku, this.parent.language.eaj, this.parent.eze.ilh("btn_s"), this.parent.esv, (!this.parent.szo) ? this.parent.rvw.fzl : null, c.fwv), ["buttons", "allbuttons"]);
        this.ohh.xpy("bet").zzm = 300;
        this.ohh.usx("gamble", this.riu(b.qxd, this.parent.language.pqg, this.parent.eze.ilh("btn_s"), this.parent.aus, (!this.parent.szo) ? this.parent.rvw.pqg : null, c.fwv), ["buttons", "allbuttons", "start", "game", "collect", "hold"]);
        if (this.parent.mnu() != null) {
            this.ohh.usx("exit", this.riu(b.qls, (this.parent.bnu.hhh === true) ? null : (wpb.zan.value50.g === true) ? this.parent.language.coc : this.parent.language.cbg, (this.parent.bnu.hhh === false) ? this.parent.eze.ilh("btn_s") : this.parent.eze.ilh("btn_e"), this.parent.isw, (!this.parent.szo) ? this.parent.rvw.tae : null, c.fwv), ["buttons", "allbuttons", "collect"])
        } else {
            if (wpb.zan.value57 !== wpb.ui.vyu) {
                this.ohh.usx("exit", this.riu(b.qls, (this.parent.bnu.hhh === true) ? null : (wpb.zan.value50.g === true) ? this.parent.language.coc : this.parent.language.cbg, (this.parent.bnu.hhh === false) ? this.parent.eze.ilh("btn_s") : this.parent.eze.ilh("btn_e"), this.parent.isw, (!this.parent.szo) ? this.parent.rvw.tae : null, c.fwv), ["buttons", "allbuttons", "collect"])
            }
            if (wpb.zan.value57 !== wpb.ui.ykx && this.parent.mnu() == null) {
                this.ohh.usx("lang", this.zyv(b.dbi, this.parent.nzx(sessionStorage.sessionValue1), this.parent.jul, (!this.parent.szo) ? this.parent.rvw.language : null), ["buttons", "allbuttons", "hold"])
            }
        }
        this.ohh.usx("setting", this.riu(b.bsb, null, (this.parent.bnu.hhh === true) ? this.parent.eze.ilh("btn_m") : this.parent.eze.ilh("btn_s"), this.parent.wne, null, c.fwv), ["buttons", "settings"])
    };
    this.pwt = function(c) {
        var b = this.parent.eze.ilh("display_effect");
        this.ohh.usx("creditd", this.obc(c.zon, (this.parent.zxh()) ? this.parent.language.egz : this.parent.language.fmn, this.parent.xth(this.parent.fmn), b, c.display), ["displays"]);
        this.ohh.usx("betd", this.obc(c.vzu, this.parent.language.eaj, this.parent.xth(this.parent.totalBet), b, c.display), ["displays"])
    };
    this.thf = function() {
        if (this.bit == 1) {
            this.bab(this.uah)
        } else {
            if (this.bit == 2) {
                this.bhm(this.uah)
            } else {
                if (this.bit == 3) {
                    this.upp(this.uah)
                } else {
                    if (this.bit == 4) {
                        this.hdc(this.uah)
                    } else {
                        if (this.bit == 5) {
                            this.vyg(this.uah)
                        } else {
                            if (this.bit == 6) {
                                this.vsj(this.uah)
                            }
                        }
                    }
                }
            }
        }
    };
    this.bab = function(d) {
        var c = this.ohh.vtm("allbuttons"),
            e = 0,
            b = 0;
        this.uah = d;
        this.bit = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].dxj(d)
        }
    };
    this.bhm = function(d) {
        var c = this.ohh.vtm("allbuttons"),
            f = this.ohh.vtm("start"),
            e = 0,
            b = 0;
        this.uah = d;
        this.bit = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].dxj(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].dxj(d)
        }
    };
    this.upp = function(d) {
        var c = this.ohh.vtm("allbuttons"),
            f = this.ohh.vtm("game"),
            e = 0,
            b = 0;
        this.uah = d;
        this.bit = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].dxj(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].dxj(d)
        }
    };
    this.hdc = function(d) {
        var c = this.ohh.vtm("allbuttons"),
            f = this.ohh.vtm("hold"),
            e = 0,
            b = 0;
        this.uah = d;
        this.bit = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].dxj(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].dxj(d)
        }
    };
    this.vyg = function(d) {
        var c = this.ohh.vtm("allbuttons"),
            f = (this.kih === true) ? this.ohh.vtm("collect") : this.ohh.vtm("start"),
            e = 0,
            b = 0;
        this.uah = d;
        this.bit = 5;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].dxj(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].dxj(d)
        }
    };
    this.vsj = function(e) {
        var c = this.ohh.vtm("allbuttons"),
            d = this.ohh.vtm("settings"),
            f = 0,
            b = 0;
        this.uah = e;
        this.bit = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].dxj(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].dxj(e)
        }
    };
    this.obc = function(c, g, f, e, b) {
        var d = new lyq();
        d.yjn(c, this.context2D, null, g, f);
        d.parent = this;
        d.nhh = e;
        d.rmt(b);
        return d
    };
    this.riu = function(e, i, g, f, c, d) {
        var b = new lao();
        b.yjn(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.ett = f;
        b.rmt(d);
        if (c) {
            b.bdd = c.zdj
        }
        return b
    };
    this.wem = function(e, j, g, i, f, c, d) {
        var b = new lao();
        b.yjn(e, this.context2D, null, i, null, j);
        b.parent = this;
        b.ett = f;
        b.value = g;
        b.rmt(d);
        if (c) {
            b.bdd = c.zdj
        }
        return b
    };
    this.zyv = function(d, f, e, c) {
        var b = new nqe();
        b.yjn(d, this.context2D, null, f, null);
        b.parent = this;
        b.ett = e;
        if (c) {
            b.bdd = c.zdj
        }
        return b
    };
    this.acp = function(b) {
        var c = new equ();
        c.yjn(b, this.context2D);
        c.parent = this;
        return c
    };
    this.aru = function(c, b) {
        var d = this.ohh.xpy("info");
        if (d) {
            d.akj(b);
            d.jmf(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.erh)
    };
    this.jvd = function() {
        var b = this.context2D;
        b.save();
        if (this.tgy != null) {
            var f = b.createLinearGradient(this.gpf.x, this.gpf.y, this.gpf.x, this.gpf.y + this.gpf.height);
            f.addColorStop(0, this.tgy);
            b.fillStyle = f;
            b.fillRect(this.gpf.x, this.gpf.y, this.gpf.width, this.gpf.height)
        }
        if (this.qli != null) {
            var f = b.createLinearGradient(this.gpf.x, this.gpf.y, this.gpf.x, this.gpf.y + this.mya);
            f.addColorStop(0, this.qli);
            f.addColorStop(1, this.tgy);
            b.fillStyle = f;
            b.fillRect(this.gpf.x, this.gpf.y, this.gpf.width, this.mya)
        }
        if (this.mrr != null) {
            b.drawImage(this.mrr, this.gpf.x, this.gpf.y, this.gpf.width, this.gpf.height)
        }
        if (this.ldl && this.ldl.width > 0 && this.ldl.height > 0) {
            var f = b.createLinearGradient(this.ldl.x, this.ldl.y, this.ldl.x + this.ldl.width, this.ldl.y),
                c = this.parent.eze.ilh("btn_back");
            f.addColorStop(0.2, this.uay);
            f.addColorStop(1, this.lfx);
            b.fillStyle = f;
            if (this.parent.dmh === wpb.bnu.ira) {
                b.fillRect(this.ldl.x, this.ldl.y, this.ldl.width, this.ldl.height);
                if (c) {
                    b.drawImage(c, this.ldl.x, this.ldl.y, this.ldl.width, this.ldl.height)
                }
            } else {
                if (this.parent.dmh === wpb.bnu.tvg) {
                    b.save();
                    b.translate(this.ldl.width / 2, this.ldl.height / 2);
                    b.rotate(Math.PI);
                    b.translate(-this.ldl.width / 2, -this.ldl.height / 2);
                    b.fillRect(this.ldl.x, this.ldl.y, this.ldl.width, this.ldl.height);
                    if (c) {
                        b.drawImage(c, this.ldl.x, this.ldl.y, this.ldl.width, this.ldl.height)
                    }
                    b.restore()
                }
            }
        }
        try {
            this.qiu = b.getImageData(0, 0, this.width, this.height)
        } catch (d) {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
            this.qiu = b.getImageData(0, 0, this.width, this.height)
        }
        b.clearRect(0, 0, this.width, this.height);
        b.restore()
    };
    this.fur = function(k, g, l, e) {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        var c = (k != null && g != null && l != null && e != null),
            j = (c === true) ? new rud(k, g, l, e) : new rud(this.x, this.y, this.width, this.height),
            m = this.context2D,
            b = this.ohh.ysv();
        m.save();
        if (c) {
            m.beginPath();
            m.rect(k, g, l, e);
            m.closePath();
            m.clip()
        }
        if (this.qiu != null) {
            m.putImageData(this.qiu, 0, 0)
        }
        for (var d = 0, f = b.length; d < f; d++) {
            b[d].fur()
        }
        if (this.parent.qoz === true && this.parent.tuo() === false) {
            this.parent.whk(m, j)
        }
        m.restore();
        if (this.rzg && this.upi) {
            if (c) {
                this.rzg.drawImage(this.upi, k, g, l, e, this.x + k, this.y + g, l, e)
            } else {
                this.rzg.drawImage(this.upi, this.x, this.y)
            }
        }
    };
    this.gvi = function() {
        if (a.parent.npj === true) {
            a.parent.omm()
        } else {
            a.parent.uka();
            if (a.parent.oxk() === true) {
                a.parent.eze.wym("auto_fill");
                a.ohh.mgf("start", "#gvg", [a.ksv]);
                a.rkt = setTimeout(a.wsj, a.ksv)
            }
        }
    };
    this.wsj = function() {
        a.parent.omm();
        a.ohh.mgf("start", "#nvm")
    }
}
huk.prototype = new biu;

function emt() {
    this.nhh = null;
    this.ads = [];
    this.lil = [];
    this.mru = [];
    this.wxm = "arial";
    this.zxl = "bold";
    this.uzv = "yellow";
    this.owy = 30;
    this.dzx = 6;
    this.pzz = function(a) {
        try {
            this.wxm = a.font;
            this.zxl = a.ovs;
            this.uzv = a.lda
        } catch (b) {
            console.error(b)
        }
    };
    this.rmt = function(a) {
        try {
            this.owy = a.fontSize;
            this.dzx = a.plt
        } catch (b) {
            console.error(b)
        }
    };
    this.akp = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.mru[b] = c[a - 1 - b]
        }
    };
    this.our = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.lil[b] = c[a - 1 - b];
            this.ads[b] = c[a - 1 - b]
        }
    };
    this.pxq = function(c) {
        for (var b = 0, a = this.lil.length; b < a; b++) {
            this.ads[b] = this.lil[b] * c
        }
        this.fur()
    };
    this.fur = function() {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        var b = this.context2D,
            g = this.height - 2 * this.dzx,
            c = this.width,
            d = Math.round(g / this.mru.length),
            f = (this.owy < d) ? this.owy : d - 2;
        b.save();
        if (this.nhh != null) {
            b.drawImage(this.nhh, 0, 0)
        }
        for (var e = 0, a = this.mru.length; e < a; e++) {
            wpb.trp.lye(b, this.mru[e], this.uzv, 0, this.dzx + d * (e), c, f, this.wxm, f, this.zxl, this.dzx)
        }
        for (var e = 0, a = this.ads.length; e < a; e++) {
            wpb.trp.oub(b, this.parent.sbe(this.ads[e]), this.uzv, 0, this.dzx + d * (e), c, f, this.wxm, f, this.zxl, this.dzx)
        }
        b.restore();
        if (this.rzg && this.upi) {
            this.rzg.drawImage(this.upi, this.x, this.y)
        }
    }
}
emt.prototype = new biu;

function msq() {
    var a = this;
    this.zhc = 0;
    this.olf = 1;
    this.hgv = 7;
    this.dka = 0;
    this.lkr = 0;
    this.dwn = 0;
    this.pyq = 0;
    this.url = this.zhc;
    this.cif = this.qkp;
    this.ekz = function() {
        this.kwl(true);
        this.eex = true;
        this.uah = false;
        this.url = this.zhc;
        this.lkr = Math.floor(this.width / this.hgv);
        this.pyq = 0;
        this.dwn = 0
    };
    this.oet = function() {
        this.eex = true;
        this.uah = false;
        this.url = this.olf;
        this.lkr = -Math.floor(this.width / this.hgv);
        this.pyq = 1;
        this.dwn = this.width
    };
    this.kny = function() {
        if (a.pyq < a.hgv) {
            a.dwn += a.lkr;
            a.pyq++;
            return true
        } else {
            a.eex = false;
            a.uah = true;
            if (a.url == a.olf) {
                a.kwl(false)
            }
            return false
        }
    };
    this.wym = function() {
        if (this.wbj == this.did) {
            this.parent.eze.wym("maxstep")
        } else {
            this.parent.eze.wym("step" + (this.wbj % 12))
        }
    };
    this.awm = function() {
        a.xci = false
    };
    this.fur = function() {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        this.vsc();
        if (this.rzg && this.upi) {
            if (this.eex) {
                if (this.dwn > 0) {
                    if (this.cif == this.ohw) {
                        this.rzg.drawImage(this.upi, this.width - this.dwn, 0, this.dwn, this.height, this.x, this.y, this.dwn, this.height)
                    } else {
                        if (this.cif == this.qkp) {
                            this.rzg.drawImage(this.upi, 0, 0, this.dwn, this.height, this.x + this.width - this.dwn, this.y, this.dwn, this.height)
                        }
                    }
                }
            } else {
                this.rzg.drawImage(this.upi, this.x, this.y)
            }
        }
    };
    this.pbj = function(c) {
        var f = this.uzv,
            e = this.uzv,
            b = 0,
            d = 0;
        if (this.cif == this.qkp) {
            b = this.wzo;
            d = this.xvc.x - 2 * this.wzo
        } else {
            if (this.cif == this.ohw) {
                b = this.xvc.x + this.xvc.width + this.wzo;
                d = this.width - this.wzo - (this.xvc.x + this.xvc.width + this.wzo)
            }
        }
        if (this.wbj > 0 && this.wbj < this.sdn.length - 1) {
            wpb.trp.ueq(c, b, this.xvc.y + ((this.rqh - this.wpm) * this.vts), d, this.vts, this.ffi, this.crl);
            wpb.trp.oub(c, this.parent.sbe(this.sdn[this.wbj]), this.ksu, b, this.xvc.y + ((this.rqh - this.wpm) * this.vts) + (this.vts - this.owy) / 2, d, this.owy, this.wxm, this.owy, this.zxl, this.wzo)
        } else {
            if (this.wbj == 0) {
                f = this.ksu
            } else {
                if (this.wbj == this.sdn.length - 1) {
                    e = this.ksu
                }
            }
        }
        wpb.trp.ueq(c, b, this.xvc.y + (this.vts * (this.rqh - 1)), d, this.vts, this.ffi, this.crl);
        wpb.trp.oub(c, this.parent.sbe(this.sdn[0]), f, b, this.xvc.y + (this.vts * (this.rqh - 1)) + (this.vts - this.owy) / 2, d, this.owy, this.wxm, this.owy, this.zxl, this.wzo);
        wpb.trp.ueq(c, b, this.xvc.y, d, this.vts, this.ffi, this.crl);
        wpb.trp.oub(c, this.parent.sbe(this.sdn[this.sdn.length - 1]), e, b, this.xvc.y + (this.vts - this.owy) / 2, d, this.owy, this.wxm, this.owy, this.zxl, this.wzo);
        wpb.trp.vio(c, "+", this.uzv, this.mop.x, this.mop.y, this.mop.width, this.mop.height, this.wxm, this.owy, this.zxl);
        wpb.trp.vio(c, "", this.uzv, this.zuo.x, this.zuo.y, this.zuo.width, this.zuo.height, this.wxm, this.owy, this.zxl);
        if (this.itx) {
            wpb.trp.vio(c, this.itx, this.uzv, this.gbn.x, this.gbn.y, this.gbn.width, this.gbn.height, this.wxm, this.owy, this.zxl)
        }
    }
}
msq.prototype = new hkd;

function xvo() {
    this.nhh = null;
    this.zrk = [];
    this.uah = false;
    this.ads = false;
    this.owe = false;
    this.qut = false;
    this.pdq = true;
    this.ibh = -1;
    this.wfi = null;
    this.qiu = null;
    this.wxm = "arial";
    this.zxl = "bold";
    this.ezz = "yellow";
    this.ios = "yellow";
    this.uzv = "yellow";
    this.owy = 18;
    this.vyx = 0;
    this.sfu = 0;
    this.qyh = 20;
    this.gor = 0;
    this.pzz = function(a) {
        try {
            this.wxm = a.font;
            this.zxl = a.ovs;
            this.ezz = a.qlc;
            this.ios = a.joh;
            this.uzv = a.lda
        } catch (b) {
            console.error(b)
        }
    };
    this.rmt = function(a) {
        try {
            this.owy = a.fontSize;
            this.vyx = a.zvs;
            this.sfu = a.knx;
            this.qyh = a.rzu;
            this.gor = a.kli;
            this.pdq = a.eyr
        } catch (b) {
            console.error(b)
        }
    };
    this.qwn = function(a, b) {
        if (a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height && this.qdz() === true) {
            if (this.wek() === true) {
                this.parent.gbo(this.owe);
                this.lyt();
                if (this.owe) {
                    this.parent.eze.wym("hold")
                } else {
                    this.parent.eze.wym("unhold")
                }
                return true
            }
        }
        return false
    };
    this.vtx = function() {};
    this.szu = function() {};
    this.bjz = function() {};
    this.dxj = function(a) {
        this.uah = a
    };
    this.wek = function() {
        return this.uah
    };
    this.lpf = function(a) {
        if (this.qiu == null) {
            try {
                this.qiu = a.getImageData(this.x, this.y, this.width, this.height)
            } catch (b) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                this.qiu = a.getImageData(this.x, this.y, this.width, this.height)
            }
        }
    };
    this.lyt = function() {
        this.owe = !this.owe;
        if (this.owe) {
            this.wfi = this.parent.language.ygd;
            this.uzv = this.ezz
        }
        this.fur()
    };
    this.xhx = function(d, e) {
        var a = 0,
            c = false;
        if (d == this.parent.lpq) {
            this.ibh = d;
            c = true
        } else {
            if ((a = this.parent.xkp.length) > 0) {
                for (var b = 0; b < a && !c; b++) {
                    if (d == this.parent.xkp[b]) {
                        this.ibh = this.parent.hnk[b];
                        c = true
                    }
                }
            }
        }
        if (!c) {
            this.ibh = d
        }
        if (e && e === true) {
            this.fur()
        }
    };
    this.qwb = function(a, b) {
        this.owe = a;
        if (this.owe) {
            this.wfi = this.parent.language.ygd;
            this.uzv = this.ezz
        }
        if (b && b === true) {
            this.fur()
        }
    };
    this.gxv = function() {
        return this.owe
    };
    this.coq = function(a, b) {
        this.ads = a;
        if (this.ads) {
            this.wfi = this.parent.language.win;
            this.uzv = this.ios
        }
        if (b && b === true) {
            this.fur()
        }
    };
    this.ucb = function() {
        return this.ads
    };
    this.ikh = function(c, b, a, d) {
        this.qut = c;
        this.wfi = b;
        if (a) {
            this.uzv = a
        }
        if (d && d === true) {
            this.fur()
        }
    };
    this.eso = function() {
        return this.qut
    };
    this.fur = function() {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.beginPath();
        a.rect(this.x, this.y, this.width, this.height);
        a.closePath();
        a.clip();
        if (this.qiu != null) {
            a.putImageData(this.qiu, this.x, this.y)
        }
        if (this.nhh != null) {
            if (this.owe || this.ads) {
                if (this.pdq) {
                    a.drawImage(this.nhh, this.zrk[this.ibh] * this.vyx, 0, this.vyx, this.sfu, this.x, this.y + this.qyh, this.vyx, this.sfu)
                } else {
                    a.drawImage(this.nhh, this.zrk[this.ibh] * this.vyx, 0, this.vyx, this.sfu, this.x, this.y, this.vyx, this.sfu)
                }
            } else {
                a.drawImage(this.nhh, this.zrk[this.ibh] * this.vyx, 0, this.vyx, this.sfu, this.x, this.y + this.gor, this.vyx, this.sfu)
            }
        }
        if (this.owe || this.ads || this.qut) {
            b = this.wfi
        }
        if (b != null) {
            if (this.pdq) {
                wpb.trp.vio(a, b, this.uzv, this.x, this.y, this.width, this.qyh, this.wxm, this.owy, this.zxl)
            } else {
                wpb.trp.vio(a, b, this.uzv, this.x, this.y + this.sfu, this.width, this.qyh, this.wxm, this.owy, this.zxl)
            }
        }
        a.restore()
    }
}
xvo.prototype = new biu;
wpb.brr = {
    etl: {
        dpq: 0,
        upg: 1,
        ogk: 2,
        irg: 3,
        nyr: 4,
        kxk: 5,
        jsl: 6,
        fap: 7,
        mzh: 8,
        xha: 9,
        lxu: 10,
        lvh: 11,
        rzq: 12,
        eut: 13,
        syg: 14,
        bwe: 15,
        kkn: 68
    }
};

function iqs() {
    this.nfj = false;
    this.gps = null;
    this.byn = null;
    this.tns = null;
    this.feq = null;
    this.osi = null;
    this.kmf = [];
    this.usk = null;
    this.hcd = null;
    this.win = 0;
    this.nen = 0;
    this.lxv = 0;
    this.totalBet = 1000;
    this.xwi = [];
    this.pwu = 0;
    this.ghb = 0;
    this.fmn = 0;
    this.pdn = [];
    this.pfd = [];
    this.zrk = [];
    this.lpq = 63;
    this.jpj = -1;
    this.stw = -1;
    this.sxh = [];
    this.hwx = [];
    this.rgh = 0;
    this.uyz = null;
    this.eeg = null;
    this.hae = null;
    this.gei = null;
    this.ruo = null;
    this.usn = false;
    this.pqg = false;
    this.kxz = false;
    this.gmd = false;
    this.qoz = false;
    this.spg = true;
    this.npj = false;
    this.kmw = 1;
    this.gux = 0;
    this.jdf = 150;
    this.rth = 150;
    this.bmm = 200;
    this.jle = 120;
    this.aet = 0;
    this.xkp = [];
    this.hnk = [];
    this.fsk = true;
    this.sxl = true;
    this.wst = false;
    this.cus = 0;
    this.bge = 0;
    this.vxw = 50;
    this.qwj = 100;
    this.rsy = false;
    this.ahz = 0;
    this.zvj = 0;
    this.gyn = false;
    this.tph = 0;
    this.ktz = 0;
    this.dsu = 2;
    this.jrs = 1;
    this.owt = false;
    this.vqd = 0;
    this.jtv = 0;
    this.csv = false;
    this.qgw = 0;
    this.isn = 0;
    this.lpo = 0;
    this.div = -1;
    this.rrz = 0;
    this.tjp = 0;
    this.yws = 0;
    this.joj = true;
    this.cyf = false;
    this.twz = false;
    this.ccy = false;
    this.vtl = true;
    this.byd = null;
    this.xuo = false;
    this.kih = true;
    this.jsh = "";
    this.usb = 0;
    this.ins = 0;
    this.yyw = 0;
    this.rst = 0;
    this.qsj = function() {
        var a = new lii();
        a.yjn();
        return a
    };
    this.yww = function() {
        this.rvw = new nwu()
    };
    this.xhw = function() {
        while (this.lxv < this.rko()) {
            this.lxv++
        }
        var b = this.avr(this.csv);
        if (this.lxv > b) {
            var a = (b < 0) ? 0 : b;
            this.lxv = a
        }
        this.totalBet = this.xwi[this.lxv];
        this.hqa();
        this.ljt();
        this.hft();
        this.omo()
    };
    this.dbe = function() {
        this.ofd();
        this.jse();
        this.piu();
        this.xea();
        if (this.bnu.cyc) {
            this.ryj()
        }
        if (this.bnu.pew) {
            this.mbz()
        }
        if (this.bnu.bus) {
            this.jdc();
            if (!this.bnu.qro) {
                this.ejq()
            }
        }
        if (this.szo) {
            this.pzt()
        } else {
            if (this.bnu.sxb) {
                this.hxg()
            }
            this.fdl();
            if (this.wqf()) {
                this.ufk()
            }
            if (this.mnu() != null && !this.tuo()) {
                this.kmv(this.mnu())
            }
        }
        if (!(this.szo && !this.wyn)) {
            this.rwf();
            this.pzl()
        }
        if (this.bnu.qro) {
            this.ing(this.mnu())
        }
        this.lik()
    };
    this.quh = function() {
        if (!this.hdt) {
            if (this.jlh === false) {
                this.wub.style.marginTop = (-this.height / 2 + this.wgl()) + "px";
                this.wub.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.wub.style.left = "0px";
                this.wub.style.top = "0px";
                this.wub.style.marginTop = ((this.ueu - this.height) / 2 + this.wgl()) + "px";
                this.wub.style.marginLeft = ((this.fxj - this.width) / 2) + "px"
            }
            this.wub.style.width = (this.width > this.fxj) ? this.fxj + "px" : this.width + "px";
            this.wub.style.height = (this.height > this.ueu) ? this.ueu + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            if (this.dph) {
                this.dph.style.width = this.width + "px";
                this.dph.style.height = this.height + "px"
            }
            this.offsetLeft = this.wub.offsetLeft;
            this.offsetTop = this.wub.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.hdt = true
        }
    };
    this.lik = function() {};
    this.jdc = function() {
        iqs.prototype.jdc.call(this);
        var a = this.fwc.xpy("topi");
        try {
            if (a) {
                if (wpb.zan.value57 === wpb.ui.ykx || this.mnu() != null) {
                    a.sgi("language", this.eze.ilh("icon_l"), sessionStorage.sessionValue1, [wpb.language.EN, wpb.language.DE, wpb.language.RU, wpb.language.EE, wpb.language.ES, wpb.language.TR, wpb.language.CZ, wpb.language.GR, wpb.language.AT, wpb.language.US, wpb.language.BG, wpb.language.CO, wpb.language.MX, wpb.language.CL, wpb.language.VE, wpb.language.BR, wpb.language.GE, wpb.language.HU, wpb.language.RO, wpb.language.PT, wpb.language.FR, wpb.language.HR, wpb.language.IT, wpb.language.SE])
                }
                if (this.tuo() === false) {
                    a.vyw("help", new String("?"), true)
                }
                if (wpb.zan.value27 && this.nmt) {
                    a.sgi("audio", this.eze.ilh("icon_a"), this.xyr[this.qns], this.xyr)
                }
                if (sessionStorage.sessionValue14 == "true" && wpb.trp.kfq()) {
                    a.vyw("fullscreen", this.eze.ilh("icon_f"), this.jjd)
                }
                if (wpb.zan.value28 && this.joj) {
                    a.vyw("turbo", this.eze.ilh("icon_t"), this.cyf)
                }
                a.vyw("auto", this.eze.ilh("icon_as"), this.npj);
                a.vyw("gamble", this.eze.ilh("icon_g"), this.pqg)
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.ejq = function() {
        iqs.prototype.ejq.call(this);
        var b = this.fwc.xpy("topb");
        try {
            if (b) {
                if (wpb.zan.value5.length > 1 && (wpb.zan.value57 === wpb.ui.ykx || this.mnu() != null)) {
                    b.uxz("language", this.language.language, this.nzx(wpb.zan.value5[this.rxc]), this.jul, this.rvw.language, 0, 1)
                }
                if (wpb.zan.value27 && this.nmt) {
                    b.uxz("audio", this.language.audio, this.eze.ilh("btn_a"), this.soo, this.rvw.audio, this.qns, this.xyr.length)
                }
                if (sessionStorage.sessionValue14 == "true" && wpb.trp.kfq()) {
                    b.uxz("fullscreen", this.language.jjd, this.eze.ilh("btn_f"), (wpb.trp.chz) ? this.orc : this.djo, this.rvw.jjd, (this.jjd) ? 1 : 0, 2)
                }
                if (wpb.zan.value28 && this.joj) {
                    b.uxz("turbo", this.language.cyf, this.eze.ilh("btn_t"), this.mim, this.rvw.cyf, (this.cyf) ? 1 : 0, 2)
                }
                b.stv("help", this.language.apd, this.eze.ilh("btn_p"), this.vkv, this.rvw.ebh);
                if (wpb.zan.value12 && !this.zxh()) {
                    b.stv("history", this.language.ztv, this.eze.ilh("btn_h"), this.yno, this.rvw.ztv)
                }
                if (wpb.zan.value36 && !this.zxh()) {
                    b.stv("statistic", this.language.qsf, this.eze.ilh("btn_st"), this.hsh, this.rvw.qsf)
                }
                b.adw()
            }
        } catch (a) {
            console.error(a)
        }
    };
    this.ing = function(a) {
        iqs.prototype.ing.call(this, a);
        var b = this.fwc.xpy("settings"),
            c = "";
        if (b) {
            b.uxz("language", this.language.language, this.nzx(wpb.zan.value5[this.rxc]), this.jul, 0, 1);
            if (wpb.zan.value27 && this.nmt) {
                b.uxz("audio", this.language.audio, this.eze.ilh("btn_a"), this.soo, this.qns, this.xyr.length)
            }
            if (sessionStorage.sessionValue14 == "true" && wpb.trp.kfq()) {
                b.uxz("fullscreen", this.language.jjd, this.eze.ilh("btn_f"), this.orc, (this.jjd) ? 1 : 0, 2)
            }
            if (wpb.zan.value28 && this.joj) {
                b.uxz("turbo", this.language.cyf, this.eze.ilh("btn_t"), this.mim, (this.cyf) ? 1 : 0, 2)
            }
            b.uxz("gamble", this.language.pqg, this.eze.ilh("btn_g"), this.aus, (this.pqg) ? 1 : 0, 2);
            if (this.zjf[this.kpg] === wpb.yca.qkp) {
                c = this.language.left
            } else {
                if (this.zjf[this.kpg] === wpb.yca.ohw) {
                    c = this.language.udr
                } else {
                    if (this.zjf[this.kpg] === wpb.yca.apz) {
                        c = this.language.wwn
                    }
                }
            }
            b.uxz("adjustment", c, this.eze.ilh("btn_l"), this.ljx, (this.dmh === wpb.trp.mtu) ? 0 : 1, 2);
            b.riy("help", this.language.qhr, this.eze.ilh("btn_p"), this.vkv);
            if (wpb.zan.value12 && !this.zxh()) {
                b.riy("history", this.language.ztv, this.eze.ilh("btn_h"), this.yno)
            }
            if (wpb.zan.value36 && !this.zxh()) {
                b.riy("statistic", this.language.qsf, this.eze.ilh("btn_st"), this.hsh)
            }
            b.scg = false;
            b.xxb(this.bnu.sad);
            b.rmt(this.bnu.sad);
            b.pzz(this.style.sad);
            b.hwa(this.language, false)
        }
    };
    this.ofd = function() {
        this.usk = new huk();
        this.usk.parent = this;
        this.usk.kih = this.kih;
        this.usk.mrr = this.eze.ilh("control_back");
        this.usk.yjn(this.bnu.sfa.aei, null, this.context2D);
        this.usk.xxb(this.bnu.sfa, this.style.sfa);
        this.usk.aru(this.uyz, 0);
        this.usk.aru(this.hae, 1);
        this.usk.aru(this.eeg, 2)
    };
    this.mbz = function() {
        var a = new msq();
        a.yjn(this.bnu.hyl.aei, null, this.context2D);
        a.parent = this;
        a.itx = this.language.eaj;
        a.ett = this.php;
        a.oyc = this.rvw.fzl.zdj;
        a.twt = this.rvw.uvp.zdj;
        a.wqq = this.eze.ilh("effect");
        a.rmt(this.bnu.hyl);
        a.pzz(this.style.slz);
        a.xhw(this.xwi, this.rko(), this.avr(false));
        a.zqq(this.lxv, false);
        a.kwl(false);
        this.fwc.usx("betsel", a)
    };
    this.pzl = function() {
        this.hcd.kvz(this.bnu.ebh, this.style.ebh, this.eze.ilh("btn_s"))
    };
    this.hxg = function() {
        var a = new hlw();
        a.yjn(this.bnu.top.aei, null, this.context2D);
        a.parent = this;
        this.fwc.usx("tops", a)
    };
    this.jse = function() {
        this.gps = new xvo();
        this.byn = new xvo();
        this.tns = new xvo();
        this.feq = new xvo();
        this.osi = new xvo();
        this.gps.yjn(this.bnu.ftn, this.context2D);
        this.byn.yjn(this.bnu.tur, this.context2D);
        this.tns.yjn(this.bnu.uev, this.context2D);
        this.feq.yjn(this.bnu.yya, this.context2D);
        this.osi.yjn(this.bnu.abq, this.context2D);
        this.kmf = [this.gps, this.byn, this.tns, this.feq, this.osi];
        for (var b = 0, a = this.kmf.length; b < a; b++) {
            this.kmf[b].parent = this;
            this.kmf[b].nhh = this.eze.ilh("cards");
            this.kmf[b].zrk = this.zrk;
            this.kmf[b].xhx(this.lpq);
            this.kmf[b].pzz(this.style.yrn);
            this.kmf[b].rmt(this.bnu.yrn)
        }
    };
    this.rwf = function() {
        this.hcd = new vdk();
        this.hcd.yjn(this.bnu.ebh.aei, null, this.context2D);
        this.hcd.parent = this;
        this.hcd.fyi(false);
        this.hcd.rmt(this.bnu.ebh);
        this.hcd.pzz(this.style.ebh)
    };
    this.piu = function() {
        var a = new emt();
        a.yjn(this.bnu.apd.aei, null, this.context2D);
        a.parent = this;
        a.nhh = this.eze.ilh("paytable");
        a.rmt(this.bnu.apd);
        a.pzz(this.style.apd);
        a.our(this.pdn);
        a.akp(this.pfd);
        this.fwc.usx("paytable", a)
    };
    this.xea = function() {};
    this.ryj = function() {
        var a = new ahk();
        a.yjn(this.bnu.upb.aei, this.context2D, null, this.eze.ilh("winpanel"), "");
        a.parent = this;
        a.rmt(this.bnu.upb);
        a.pzz(this.style.upb);
        a.kwl(false);
        this.fwc.usx("winp", a)
    };
    this.pzt = function() {
        var a = new ioc();
        a.yjn(this.bnu.ztv.aei, null, this.context2D);
        a.parent = this;
        a.xxb(this.bnu.ztv);
        a.pzz(this.style.ztv);
        this.fwc.usx("history", a)
    };
    this.sts = function(d, b, c, a, e) {
        this.iaq = true;
        this.state = d;
        this.xnl = b;
        this.wsq = e;
        this.cev = a;
        clearInterval(this.asq);
        if (this.nmt) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.qns = 0
            }
            if (this.eze.fml === true) {
                this.shy(this.xyr[this.qns])
            } else {
                this.uvc((this.xyr[this.qns] === 0))
            }
        }
        if (this.wob === true) {
            this.wyc = true
        }
        this.xhw();
        this.dbe();
        this.ert();
        this.zmw();
        this.gei.wer(c, a);
        window.qvf(this.vpw)
    };
    this.vpw = function() {
        wpb.onl.qxj(wpb.onl.xnl);
        wpb.onl.xkx = true;
        wpb.onl.txr();
        wpb.onl.fur();
        if (wpb.onl.wob === true) {
            wpb.onl.vkj(true)
        }
        if (wpb.trp.key === wpb.os.ilv && wpb.trp.kag !== wpb.zlj.idg) {
            wpb.onl.oam([{
                xby: wpb.stq.anf
            }])
        } else {
            wpb.onl.rzb(wpb.onl.state)
        }
        wpb.onl.hwa();
        if (wpb.zan.value37 && !wpb.onl.zxh()) {
            wpb.onl.ccd()
        }
    };
    this.nve = function() {
        this.sgq = new gvw().yjn(this, wpb.zan.value6)
    };
    this.cmg = function() {
        this.sgq = new geo().yjn(this, wpb.zan.value6)
    };
    this.qwn = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.wyc) {
            return
        }
        var p = 0,
            o = 0,
            d = false,
            q = false,
            l = false,
            j = this.fwc.xpy("loading"),
            b = this.fwc.xpy("stats"),
            r = this.fwc.xpy("topb"),
            n = this.fwc.xpy("topi"),
            a = this.fwc.xpy("betsel"),
            m = this.fwc.xpy("autop"),
            e = this.fwc.xpy("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.wgd) {
                p = g.pageX - this.offsetLeft;
                o = g.pageY - this.offsetTop
            } else {
                p = Math.round((g.pageX - this.offsetLeft) / this.dck);
                o = Math.round((g.pageY - this.offsetTop) / this.ezo)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.wgd) {
                p = c.pageX - this.offsetLeft;
                o = c.pageY - this.offsetTop
            } else {
                p = Math.round((c.pageX - this.offsetLeft) / this.dck);
                o = Math.round((c.pageY - this.offsetTop) / this.ezo)
            }
        }
        if (this.iaq === true) {
            if (m && m.qdz()) {
                if (m.qwn(p, o)) {
                    return
                }
            }
            if (r && r.qdz()) {
                if (r.qwn(p, o)) {
                    clearTimeout(this.yws);
                    return
                } else {
                    l = true
                }
            }
            if (a) {
                if (a.qdz()) {
                    if (a.qwn(p, o, d)) {
                        clearTimeout(this.yws);
                        return
                    } else {
                        q = true
                    }
                }
            }
            if (l) {
                this.svh(this.usk.fbp(p, o, null));
                return
            } else {
                if (q) {
                    if (a && a.wek()) {
                        this.gjo(this.usk.fbp(p, o, null))
                    }
                    return
                }
            }
            if (e && e.qdz()) {
                if (e.qwn(p, o)) {
                    return
                }
            }
            if (n) {
                if (n.qwn(p, o, d)) {
                    return
                }
            }
            if (b && b.qdz()) {
                if (b.qwn(p, o)) {
                    return
                }
            }
            if (this.hcd && this.hcd.qdz()) {
                if (this.hcd.qwn(p, o)) {
                    return
                }
            }
            if (this.gei && this.gei.qdz()) {
                if (this.gei.qwn(p, o)) {
                    return
                }
            }
            if (this.usk) {
                if (this.usk.qwn(p, o, q)) {
                    return
                }
            }
            if (this.kmf) {
                for (var f = 0, k = this.kmf.length; f < k; f++) {
                    if (this.kmf[f].qwn(p, o)) {
                        return
                    }
                }
            }
        } else {
            if (j && j.qdz()) {
                if (j.qwn(p, o)) {
                    return
                }
            }
        }
    };
    this.vtx = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.wyc) {
            return
        }
        var e = this.fwc.xpy("topb"),
            b = this.fwc.xpy("betsel"),
            a = this.fwc.xpy("autop"),
            c = this.fwc.xpy("settings");
        if (this.iaq === true) {
            if (a && a.qdz()) {
                if (a.vtx()) {
                    return
                }
            }
            if (b) {
                if (b.vtx()) {
                    return
                }
            }
            if (this.hcd && this.hcd.qdz()) {
                if (this.hcd.vtx()) {
                    return
                }
            }
            if (this.gei && this.gei.qdz()) {
                if (this.gei.vtx()) {
                    return
                }
            }
            if (this.usk) {
                if (this.usk.vtx()) {
                    return
                }
            }
            if (e) {
                if (e.vtx()) {
                    return
                }
            }
            if (c) {
                if (c.vtx()) {
                    return
                }
            }
        }
    };
    this.szu = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.wyc) {
            return
        }
        var f = false,
            c = false,
            e = this.fwc.xpy("topb"),
            b = this.fwc.xpy("betsel"),
            a = this.fwc.xpy("autop");
        if (a && a.qdz()) {
            if (a.szu(d.keyCode)) {
                return
            }
        }
        if (e) {
            if (e.szu(d.keyCode)) {
                clearTimeout(this.yws);
                return
            } else {
                if (e.qdz() && e.wek()) {
                    c = true
                }
            }
        }
        if (b) {
            if (b.qdz()) {
                if (b.szu(d.keyCode)) {
                    clearTimeout(this.yws);
                    return
                } else {
                    f = true
                }
            }
        }
        if (c) {
            this.svh(this.usk.fbp(null, null, d.keyCode));
            return
        } else {
            if (f) {
                if (b && b.wek()) {
                    this.gjo(this.usk.fbp(null, null, d.keyCode))
                }
                return
            }
        }
        if (this.hcd && this.hcd.qdz()) {
            if (this.hcd.szu(d.keyCode)) {
                return
            }
        }
        if (this.gei && this.gei.qdz()) {
            if (this.gei.szu(d.keyCode)) {
                return
            }
        }
        if (this.usk) {
            if (this.usk.szu(d.keyCode)) {
                return
            }
        }
    };
    this.bjz = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.wyc) {
            return
        }
        var a = this.fwc.xpy("autop"),
            c = this.fwc.xpy("topb");
        if (a && a.qdz()) {
            if (a.bjz()) {
                return
            }
        }
        if (this.hcd && this.hcd.qdz()) {
            if (this.hcd.bjz()) {
                return
            }
        }
        if (this.gei && this.gei.qdz()) {
            if (this.gei.bjz()) {
                return
            }
        }
        if (this.usk) {
            if (this.usk.bjz()) {
                return
            }
        }
        if (c) {
            if (c.bjz()) {
                return
            }
        }
    };
    this.tuo = function() {
        return (wpb.trp.pxm() && !this.szo)
    };
    this.gqv = function() {
        return (wpb.trp.pxm() && !this.wyn)
    };
    this.oda = function(a) {
        this.bnu = this.uxy(a);
        this.width = this.bnu.canvas.aei.width;
        this.height = this.bnu.canvas.aei.height;
        this.nhs()
    };
    this.ggt = function() {
        this.style = new nva()
    };
    this.uxy = function(a) {
        this.dmh = a;
        if (a == wpb.bnu.rvu) {
            return new ckr()
        } else {
            if (a == wpb.bnu.djc) {
                return new yod()
            } else {
                if (a == wpb.bnu.liz) {
                    return new xlt()
                } else {
                    if (a == wpb.bnu.gon) {
                        return new clv()
                    } else {
                        if (a == wpb.bnu.cxt) {
                            return new uqs()
                        } else {
                            if (a == wpb.bnu.ofs) {
                                return new lop()
                            } else {
                                if (a == wpb.bnu.pbc) {
                                    return new lri()
                                } else {
                                    if (a == wpb.bnu.jkq) {
                                        return new nok()
                                    } else {
                                        if (a == wpb.bnu.eqt) {
                                            return new hwc()
                                        } else {
                                            if (a == wpb.bnu.tvg) {
                                                return new ntx()
                                            } else {
                                                if (a == wpb.bnu.ira) {
                                                    return new tdx()
                                                }
                                            }
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
    this.nhs = function() {};
    this.vet = function(a) {
        if (this.hdt) {
            this.mwy();
            this.epj(a)
        } else {
            this.tjd()
        }
    };
    this.mwy = function() {
        this.canvas.width = 0;
        if (this.jlh === false) {
            this.wub.style.marginTop = (-this.height / 2 + this.wgl()) + "px";
            this.wub.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.wub.style.left = "0px";
            this.wub.style.top = "0px";
            this.wub.style.marginTop = ((this.ueu - this.height) / 2 + this.wgl()) + "px";
            this.wub.style.marginLeft = ((this.fxj - this.width) / 2) + "px"
        }
        this.wub.style.width = (this.width > this.fxj) ? this.fxj + "px" : this.width + "px";
        this.wub.style.height = (this.height > this.ueu) ? this.ueu + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.dph) {
            this.dph.style.width = this.width + "px";
            this.dph.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.epj = function(a) {
        this.sir();
        this.hpy();
        this.pnj();
        this.cyu();
        if (!(this.szo && !this.wyn)) {
            this.uvh()
        }
        if (!this.szo) {
            if (this.bnu.sxb) {
                if (this.fwc.xpy("tops")) {
                    this.bqo()
                } else {
                    this.hxg()
                }
            } else {
                this.fwc.jud("tops")
            }
            this.vtu();
            this.chs();
            if (this.wqf()) {
                this.qva()
            }
        } else {
            this.pzt()
        }
        if (this.bnu.cyc) {
            this.fmu()
        }
        if (this.bnu.pew) {
            this.psp()
        }
        if (this.bnu.bus) {
            this.uzk();
            if (!this.bnu.qro) {
                this.ypp()
            }
        }
        if (this.bnu.qro) {
            this.rft()
        }
        this.cyt();
        if (a) {
            this.zmm()
        }
    };
    this.sir = function() {
        if (this.usk) {
            this.usk.aqq(this.bnu.sfa.aei);
            this.usk.rmt(this.bnu.sfa)
        }
    };
    this.ypp = function() {
        iqs.prototype.ypp.call(this);
        var b = this.fwc.xpy("topb");
        if (b) {
            if (this.vtl) {
                var a = b.ohh.xpy("help");
                if (a) {
                    a.dxj(!this.bnu.sxb)
                }
            }
        }
    };
    this.psp = function() {
        var a = this.fwc.xpy("betsel");
        if (a) {
            a.aqq(this.bnu.hyl.aei);
            a.rmt(this.bnu.hyl)
        }
    };
    this.hpy = function() {
        if (this.gps) {
            this.gps.aqq(this.bnu.ftn)
        }
        if (this.byn) {
            this.byn.aqq(this.bnu.tur)
        }
        if (this.tns) {
            this.tns.aqq(this.bnu.uev)
        }
        if (this.feq) {
            this.feq.aqq(this.bnu.yya)
        }
        if (this.osi) {
            this.osi.aqq(this.bnu.abq)
        }
        for (var b = 0, a = this.kmf.length; b < a; b++) {
            this.kmf[b].rmt(this.bnu.yrn)
        }
    };
    this.fmu = function() {
        var a = this.fwc.xpy("winp");
        if (a) {
            a.aqq(this.bnu.upb.aei);
            a.rmt(this.bnu.upb)
        }
    };
    this.uvh = function() {
        if (this.hcd) {
            this.hcd.aqq(this.bnu.ebh.aei);
            this.hcd.rmt(this.bnu.ebh)
        }
    };
    this.bqo = function() {
        var a = this.fwc.xpy("tops");
        if (a) {
            a.aqq(this.bnu.top.aei);
            a.kwl(this.bnu.sxb)
        }
    };
    this.pnj = function() {
        var a = this.fwc.xpy("paytable");
        if (a) {
            a.aqq(this.bnu.apd.aei);
            a.rmt(this.bnu.apd)
        }
    };
    this.cyu = function() {};
    this.cyt = function() {};
    this.zmm = function() {
        if (this.fwc.xpy("tops")) {
            this.hcd.rnk(true);
            this.zgk();
            if (this.hcd.qnh() == 0) {
                this.hch()
            }
        } else {
            this.hbn = null;
            this.hcd.kky(this.cna, true)
        }
        this.hcd.luf()
    };
    this.hqa = function() {
        this.uyz = [];
        if (this.zxh() === false && this.jsh != "") {
            this.uyz.push(this.jsh)
        }
        this.uyz.push(this.language.jrv);
        this.uyz.push(this.language.iqi + " " + this.sbe(this.hey()) + ((this.tuo() === true) ? "|" : " ") + this.language.ozz + " " + this.sbe(this.wxw()));
        this.uyz.push(this.language.ehn)
    };
    this.ljt = function() {
        this.eeg = [];
        this.eeg[0] = this.language.jka;
        this.eeg[1] = this.language.ccf
    };
    this.hft = function() {
        this.hae = [];
        this.hae[0] = this.language.xky;
        this.hae[1] = this.language.soa
    };
    this.omo = function() {
        this.ruo = [];
        this.ruo[0] = this.language.hjv
    };
    this.ddu = function() {
        iqs.prototype.ddu.call(this);
        if (this.eqw() === true) {
            this.eze.nyf(true)
        }
    };
    this.lmx = function() {
        var b = wpb.zan.value30 + "/poker/sounds/";
        this.eze.xkh("collect", null, false, b + "collect");
        this.eze.xkh("collectend", null, false, b + "collect1");
        b = wpb.zan.value30 + "/basic/sounds/";
        if (!wpb.zan.value55) {
            if (this.tuo() === false) {
                this.eze.xkh("btn", null, false, b + "btn");
                this.eze.xkh("auto_on", null, false, b + "auto_on");
                this.eze.xkh("gamble_on", null, false, b + "gamble_on");
                this.eze.xkh("gamble_off", null, false, b + "gamble_off");
                this.eze.xkh("gambleprop", null, true, b + "gambleprop");
                this.eze.xkh("auto_off", null, false, b + "auto_off");
                for (var a = 0; a < 12; a++) {
                    this.eze.xkh("step" + a, null, false, b + "step" + (a + 1))
                }
                this.eze.xkh("maxstep", null, false, b + "maxstep")
            } else {
                this.eze.xkh("btn", null, false, b + "btn2");
                this.eze.xkh("auto_fill", null, false, b + "auto_fill")
            }
        } else {
            this.eze.xkh("btn", null, false, b + "ama_btn");
            if (this.tuo() === false) {
                this.eze.xkh("gamble_on", null, false, b + "ama_gamble_on");
                this.eze.xkh("gamble_off", null, false, b + "ama_gamble_off");
                this.eze.xkh("gambleprop", null, true, b + "ama_gambleprop");
                for (var a = 0; a < 12; a++) {
                    this.eze.xkh("step" + a, null, false, b + "ama_step")
                }
                this.eze.xkh("maxstep", null, false, b + "ama_step")
            }
        }
        this.eze.xkh("silence", null, false, b + "silence");
        this.eze.xkh("audioon", null, false, b + "audio_on");
        if (this.tuo() === false) {
            this.eze.xkh("panel_in", null, false, b + "panel_in");
            this.eze.xkh("panel_out", null, false, b + "panel_out")
        }
        this.wxp();
        this.jdy()
    };
    this.jdy = function() {
        var b = wpb.zan.value30 + "/poker/sounds/";
        this.eze.xkh("hold", null, false, b + "hold");
        this.eze.xkh("unhold", null, false, b + "unhold");
        for (var a = 0; a < 5; a++) {
            this.eze.xkh("deal" + a, null, false, b + "deal2")
        }
    };
    this.wxp = function() {
        for (var a = 0; a < this.ktz; a++) {
            this.eze.xkh("win" + a, this.axx, false, this.plc + "win" + (a + 1))
        }
    };
    this.gxj = function() {
        var a = this.ard + this.bnu.type + "/";
        this.eze.lin("icon", a + "icon_out.png");
        this.eze.lin("back", a + "main.jpg");
        this.eze.lin("cards", a + "cardDeck.png");
        this.eze.lin("winpanel", a + "winPanel.png");
        this.eze.lin("help", a + "help.jpg");
        a = wpb.zan.value30 + "/basic/images/" + this.bnu.type + "/";
        if (this.bnu.hhh === true) {
            this.eze.lin("btn_back", a + "buttonback.png")
        }
        a = wpb.zan.value30 + "/poker/images/" + this.bnu.type + "/";
        if (this.tuo() === true) {
            this.eze.bsp(a, "gui_mobile_v15.json")
        } else {
            if (wpb.zan.value57 === wpb.ui.ykx || this.mnu() != null) {
                this.eze.bsp(a, "gui_desktop_v25.json")
            } else {
                this.eze.bsp(a, "gui_desktop_v15.json")
            }
        }
        this.bej()
    };
    this.bej = function() {
        var a = this.ard + this.bnu.type + "/";
        this.eze.lin("g_back", a + "gamble.jpg")
    };
    this.qui = function() {
        if (this.kxz && !this.wst) {
            this.sfg(this.fmn - this.win - this.nen, true)
        } else {
            this.sfg(this.fmn, true)
        }
        this.xfm(this.totalBet, true);
        this.opb();
        this.fwc.mgf("tops", "#fur");
        this.fwc.mgf("settings", "#pvf", [0, 0, this.sbe(this.pqi())]);
        this.fur()
    };
    this.fur = function(l, k, m, s) {
        if (wpb.onl.eqn()) {
            var a = (l != null && k != null && m != null && s != null),
                c = (a === true) ? new rud(l, k, m, s) : new rud(wpb.onl.bnu.onl.aei.x, wpb.onl.bnu.onl.aei.y, wpb.onl.bnu.onl.aei.width, wpb.onl.bnu.onl.aei.height),
                p = wpb.onl.context2D,
                e = (wpb.onl.wyn === true) ? wpb.onl.style.onl.zgh : wpb.onl.style.onl.backgroundColor,
                v = wpb.onl.fwc.xpy("stats"),
                b = wpb.onl.fwc.xpy("history"),
                t = wpb.onl.fwc.xpy("topb"),
                f = wpb.onl.fwc.xpy("topi"),
                g = wpb.onl.fwc.xpy("betsel"),
                u = wpb.onl.fwc.xpy("paytable"),
                o = wpb.onl.fwc.xpy("tops"),
                j = wpb.onl.fwc.xpy("winp"),
                n = wpb.onl.fwc.xpy("autop"),
                d = wpb.onl.fwc.xpy("settings");
            wpb.onl.qoz = false;
            p.save();
            if (a) {
                p.beginPath();
                p.rect(l, k, m, s);
                p.closePath();
                p.clip()
            }
            p.clearRect(0, 0, wpb.onl.width, wpb.onl.height);
            p.restore();
            if (wpb.onl.bnu.szn) {
                wpb.trp.ueq(p, wpb.onl.bnu.onl.aei.x - wpb.onl.bnu.onl.ihx, wpb.onl.bnu.onl.aei.y - wpb.onl.bnu.onl.ihx, wpb.onl.bnu.onl.aei.width + 2 * wpb.onl.bnu.onl.ihx, wpb.onl.bnu.onl.aei.height + 2 * wpb.onl.bnu.onl.ihx, e, 1)
            }
            if (b) {
                b.fur()
            }
            if (f) {
                f.fur()
            }
            if (o && o.qdz()) {
                o.fur()
            }
            if (v && v.qdz()) {
                v.fur()
            } else {
                if (wpb.onl.hcd != null && wpb.onl.hcd.qdz()) {
                    wpb.onl.hcd.fur()
                } else {
                    if (wpb.onl.gei != null && wpb.onl.gei.qdz()) {
                        wpb.onl.gei.fur()
                    } else {
                        p.drawImage(wpb.onl.eze.ilh("back"), wpb.onl.bnu.onl.aei.x, wpb.onl.bnu.onl.aei.y);
                        if (wpb.onl.usk) {
                            wpb.onl.usk.fur()
                        }
                        for (var q = 0, r = wpb.onl.kmf.length; q < r; q++) {
                            wpb.onl.kmf[q].lpf(p);
                            wpb.onl.kmf[q].fur()
                        }
                        if (j) {
                            j.fur()
                        }
                        if (u) {
                            u.fur()
                        }
                    }
                }
            }
            if (g) {
                g.fur()
            }
            if (t) {
                t.fur()
            }
            if (n) {
                n.fur()
            }
            if (d) {
                d.fur()
            }
        }
    };
    this.whk = function(a, b) {
        this.qoz = true;
        wpb.trp.ueq(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.mwg = function() {
        this.knj();
        if (this.state == wpb.brr.etl.nyr && this.jpj > 0) {
            this.eze.qys("win" + (this.jpj - 1))
        }
        this.usk.ohh.mgf("info", "#gyg");
        this.cyp(false);
        this.usk.bab(false);
        this.qbq(false);
        this.hcd.lpj();
        this.hcd.bab(true);
        this.fwc.mgf("settings", "#gyp");
        this.usk.ohh.mgf("setting", "#xkl", [this.fwc.mgf("settings", "#qdz")])
    };
    this.hch = function() {
        this.hcd.bab(false);
        if (this.state != wpb.brr.etl.ogk && this.state != wpb.brr.etl.lvh) {
            this.usk.bab(true)
        } else {
            this.usk.hdc(true)
        }
        this.cyp(true);
        this.qbq(true);
        this.hcd.gyp();
        this.usk.ohh.mgf("info", "#dhe", [0])
    };
    this.bug = function() {
        var a = wpb.onl.usk.ohh.xpy("gamble");
        wpb.onl.vce();
        wpb.onl.tjr();
        if (a) {
            a.sku();
            a.xkl(wpb.onl.pqg)
        }
        wpb.onl.knj();
        wpb.onl.eze.qys("win" + (wpb.onl.jpj - 1));
        wpb.onl.usk.ohh.mgf("info", "#gyg");
        wpb.onl.usk.bab(false);
        wpb.onl.qbq(false);
        wpb.onl.gei.bab(true);
        wpb.onl.gei.xzu(wpb.onl.fmn, wpb.onl.win + wpb.onl.nen, wpb.onl.jpj, false);
        wpb.onl.gei.lpj(!wpb.onl.npj)
    };
    this.tth = function() {
        wpb.onl.wjg();
        wpb.onl.gei.kxr();
        wpb.onl.qbq(true);
        wpb.onl.gei.bab(false);
        wpb.onl.gei.kwl(false, true);
        wpb.onl.usk.ohh.mgf("start", "#zbu", [wpb.onl.language.start, true]);
        wpb.onl.wst = true;
        if (wpb.onl.npj) {
            wpb.onl.usk.upp(true);
            wpb.onl.tjp = setTimeout(wpb.onl.khm, 800)
        } else {
            wpb.onl.usk.bab(true);
            if (!(wpb.onl.npj || wpb.onl.kxz)) {
                wpb.onl.cyp(true)
            }
            wpb.onl.usk.ohh.mgf("info", "#dhe", [0])
        }
    };
    this.arq = function() {
        var a = this.fwc.xpy("tops");
        if (a) {
            a.zqq(0);
            this.fur()
        }
    };
    this.cvl = function() {
        this.zdg();
        this.qui();
        this.tjr();
        this.cyp(false);
        this.jls(false);
        this.fwc.mgf("winp", "#kwl", [false]);
        this.fwc.mgf("paytable", "#kwl", [true]);
        this.bwg()
    };
    this.udh = function() {
        this.pis();
        if (this.dsu == this.jrs) {
            this.qui()
        }
        this.cyp(false);
        this.jls(false);
        this.bwg()
    };
    this.ikw = function() {
        this.ycm();
        if (this.dsu >= 2 && this.jrs == 2) {
            this.qui()
        }
        this.cyp(false);
        this.jls(false);
        this.bwg()
    };
    this.uya = function() {
        var a = wpb.onl.jdf,
            b = 0;
        if (wpb.onl.jtv == 0) {
            wpb.onl.gux = new Date().getTime()
        } else {
            b = new Date().getTime();
            a = wpb.onl.jdf + (wpb.onl.aet * wpb.onl.jdf - (b - wpb.onl.gux))
        }
        if (!wpb.onl.kmf[wpb.onl.jtv].gxv()) {
            wpb.onl.aet += 1;
            wpb.onl.eze.wym("deal" + (wpb.onl.aet - 1));
            wpb.onl.kmf[wpb.onl.jtv].xhx(wpb.onl.sxh[wpb.onl.jtv], true)
        } else {
            a = 0
        }
        wpb.onl.jtv++;
        if (a <= 0) {
            a = 0
        }
        if (wpb.onl.jtv < wpb.onl.sxh.length) {
            if (a == 0) {
                wpb.onl.uya()
            } else {
                wpb.onl.isn = setTimeout(wpb.onl.uya, a)
            }
        } else {
            wpb.onl.isn = setTimeout(wpb.onl.gfo, wpb.onl.jdf)
        }
    };
    this.iqy = function() {
        var a = 40,
            b = a,
            c = 0;
        if (wpb.onl.jtv == 0) {
            wpb.onl.gux = new Date().getTime()
        } else {
            c = new Date().getTime();
            b = a + (wpb.onl.aet * a - (c - wpb.onl.gux))
        }
        if (!wpb.onl.kmf[wpb.onl.jtv].gxv()) {
            wpb.onl.aet += 1;
            wpb.onl.kmf[wpb.onl.jtv].xhx(wpb.onl.lpq, true)
        } else {
            b = 0
        }
        wpb.onl.jtv++;
        if (b <= 0) {
            b = 0
        }
        if (wpb.onl.jtv < wpb.onl.sxh.length) {
            if (b == 0) {
                wpb.onl.iqy()
            } else {
                wpb.onl.isn = setTimeout(wpb.onl.iqy, b)
            }
        } else {
            wpb.onl.isn = setTimeout(wpb.onl.jue, 200)
        }
    };
    this.bwg = function() {
        this.nfj = true;
        this.aet = 0;
        this.qmy();
        if (this.vqd == 1) {
            for (var b = 0, a = this.sxh.length; b < a; b++) {
                this.kmf[b].xhx(this.lpq, false)
            }
            this.usk.ohh.mgf("info", "#ubq", [this.language.mfn, true]);
            this.fur();
            this.jtv = 0;
            this.isn = setTimeout(this.uya, 200)
        } else {
            this.usk.ohh.mgf("info", "#gyg");
            for (var b = 0, a = this.sxh.length; b < a; b++) {
                if (!this.kmf[b].gxv()) {
                    this.kmf[b].xhx(this.lpq, false)
                }
            }
            this.fur();
            this.isn = setTimeout(this.mvi, 200)
        }
    };
    this.mvi = function() {
        if (wpb.onl.rgh > 0) {
            wpb.onl.jtv = 0;
            wpb.onl.uya()
        } else {
            wpb.onl.gfo()
        }
    };
    this.jue = function() {
        wpb.onl.aet = 0;
        for (var b = 0, a = wpb.onl.eze.gfj("deal"); b < a; b++) {
            wpb.onl.eze.qys("deal" + b)
        }
        if (wpb.onl.vqd == 1) {
            wpb.onl.jtv = 0;
            wpb.onl.uya()
        } else {
            if (wpb.onl.rgh > 0) {
                wpb.onl.jtv = 0;
                wpb.onl.uya()
            } else {
                wpb.onl.gfo()
            }
        }
    };
    this.gfo = function() {
        wpb.onl.nfj = false;
        wpb.onl.spg = true;
        if (wpb.onl.rga()) {
            if (wpb.onl.vqd == 1) {
                wpb.onl.jsk()
            } else {
                if (wpb.onl.vqd == 2) {
                    wpb.onl.dta()
                }
            }
            wpb.onl.vmw(true);
            wpb.onl.jls(true);
            wpb.onl.usk.ohh.mgf("info", "#dhe", [2]);
            if (wpb.onl.npj) {
                wpb.onl.usk.bhm(true);
                wpb.onl.tjp = setTimeout(wpb.onl.khm, 800)
            } else {
                wpb.onl.usk.hdc(true);
                if ((wpb.onl.dsu == 3 && (wpb.onl.jrs == 3 || (wpb.onl.jrs == 2 && wpb.onl.vqd == 2))) || (wpb.onl.dsu == 2 && wpb.onl.jrs == 2)) {
                    wpb.onl.usk.ohh.mgf("bet", "#dxj", [wpb.onl.owt]);
                    wpb.onl.usk.ohh.mgf("exit", "#dxj", [true])
                }
                if (wpb.onl.dsu == wpb.onl.jrs) {
                    wpb.onl.wjg()
                }
                wpb.onl.cyp(true)
            }
        } else {
            wpb.onl.zlm();
            wpb.onl.uoi();
            if (wpb.onl.win > 0) {
                wpb.onl.wst = false;
                wpb.onl.pan()
            } else {
                if (!wpb.onl.kig()) {
                    wpb.onl.wjg();
                    wpb.onl.usk.ohh.mgf("info", "#ubq", [wpb.onl.language.odv, true]);
                    if (wpb.onl.npj) {
                        wpb.onl.usk.bhm(true);
                        wpb.onl.tjp = setTimeout(wpb.onl.khm, 800)
                    } else {
                        wpb.onl.usk.bab(true);
                        wpb.onl.cyp(true)
                    }
                } else {
                    wpb.onl.bxe()
                }
            }
        }
    };
    this.qmy = function() {
        if (wpb.zan.value79 > 0) {
            this.jdf = wpb.zan.value79 / this.kmf.length
        } else {
            if (this.cyf) {
                this.jdf = this.jle
            } else {
                if (this.vqd == 1) {
                    this.jdf = this.rth
                } else {
                    this.jdf = this.bmm
                }
            }
        }
    };
    this.vmw = function(d) {
        var c = false;
        this.sxl = true;
        for (var b = 0, a = this.hwx.length; b < a; b++) {
            if (this.hwx[b] > 0) {
                this.kmf[b].qwb(true, false);
                if (!c && d) {
                    this.eze.wym("hold");
                    c = true
                }
            } else {
                this.kmf[b].qwb(false, false)
            }
        }
        this.fur()
    };
    this.uoi = function() {
        for (var b = 0, a = this.hwx.length; b < a; b++) {
            this.kmf[b].qwb(false, false);
            if (this.fsk) {
                if (this.hwx[b] > 0) {
                    this.kmf[b].coq(true, false)
                } else {
                    this.kmf[b].coq(false, false)
                }
            }
        }
        this.fur()
    };
    this.pan = function() {
        this.usk.bab(false);
        this.tzm(this.win);
        this.usk.ohh.mgf("info", "#ubq", [this.language.gve, false]);
        this.gmd = false;
        if (!this.szo) {
            this.eze.wym("win" + (this.jpj - 1))
        }
        this.fur();
        this.apu()
    };
    this.bxe = function() {};
    this.kig = function() {
        return false
    };
    this.tzm = function(a) {
        this.fwc.mgf("winp", "#zbu", [this.sbe(a), false]);
        this.fwc.mgf("winp", "#kwl", [true]);
        this.fwc.mgf("paytable", "#kwl", [false])
    };
    this.apu = function() {
        if (this.pqg && this.usn) {
            setTimeout(this.bug, 1000)
        } else {
            if ((this.kxz || this.npj)) {
                if (!this.gyn && !this.wst) {
                    this.usk.ohh.mgf("start", "#zbu", [this.language.uhp, true]);
                    if (this.kxz) {
                        this.gyn = true;
                        this.usk.bab(false);
                        setTimeout(this.uhp, 2000)
                    } else {
                        if (this.npj) {
                            this.tjp = setTimeout(this.khm, 800)
                        }
                    }
                }
            } else {
                this.usk.ohh.mgf("start", "#zbu", [this.language.uhp, true]);
                if (!this.szo) {
                    this.usk.ohh.mgf("gamble", "#lvw");
                    this.usk.ohh.mgf("info", "#xml", [1])
                } else {
                    if (!this.inAutogamble && !this.lhb) {
                        this.usk.ohh.mgf("gamble", "#lvw")
                    }
                }
                setTimeout(this.jfu, 400)
            }
        }
    };
    this.jfu = function() {
        wpb.onl.usk.vyg(true)
    };
    this.zdg = function() {};
    this.pis = function() {};
    this.ycm = function() {};
    this.jsk = function() {};
    this.dta = function() {};
    this.zlm = function() {};
    this.rga = function() {
        return this.state == wpb.brr.etl.ogk || this.state == wpb.brr.etl.lvh
    };
    this.gbo = function(a) {
        if (this.sxl) {
            if (!a) {
                this.tjr()
            }
            this.sxl = false
        }
    };
    this.tjr = function() {
        for (var b = 0, a = this.kmf.length; b < a; b++) {
            this.kmf[b].qwb(false, false);
            this.kmf[b].coq(false, false)
        }
        this.fur()
    };
    this.ryf = function() {
        return !this.kxz
    };
    this.pyz = function() {
        var b = this.usk.ohh.xpy("gamble"),
            a = this.usk.ohh.xpy("info");
        this.usk.bab(false);
        this.tjr();
        this.vce();
        if (b) {
            b.sku();
            b.xkl(this.pqg)
        }
        if (a) {
            a.gyg();
            a.ubq(this.language.hps + ": " + this.sbe(this.win + this.nen));
            a.xml(0)
        }
        this.sgq.uhp()
    };
    this.uhp = function() {
        if (!wpb.onl.wst) {
            wpb.onl.tjr();
            wpb.onl.eze.qys("collect");
            wpb.onl.eze.qys("collectend");
            if (wpb.onl.byd != wpb.onl.isw) {
                wpb.onl.usk.bhm(true)
            }
            wpb.onl.eze.qys("win" + (wpb.onl.jpj - 1));
            wpb.onl.cus = 10;
            if (wpb.onl.win + wpb.onl.nen < wpb.onl.cus) {
                wpb.onl.cus = wpb.onl.win + wpb.onl.nen;
                wpb.onl.exd()
            } else {
                if (wpb.onl.win + wpb.onl.nen >= wpb.onl.pqi() * 25) {
                    wpb.onl.cus = 20
                }
                wpb.onl.exd()
            }
        }
    };
    this.vmu = function() {
        this.wst = true;
        this.gyn = false;
        clearTimeout(this.lpo);
        this.eze.qys("collect");
        this.eze.wym("collectend");
        this.sfg(this.fmn, true);
        this.knj();
        this.cyp(true);
        this.usk.ohh.mgf("start", "#zbu", [this.language.start, true]);
        if (!this.npj) {
            this.usk.bab(true)
        } else {
            this.tjp = setTimeout(this.khm, 500)
        }
    };
    this.exd = function() {
        this.ccy = false;
        this.rsy = (this.win + this.nen > this.totalBet) ? true : false;
        this.bge = 0;
        this.qbf = this.win + this.nen;
        this.tph = this.fmn - this.win - this.nen;
        this.ahz = 0;
        this.zvj = this.win + this.nen;
        this.gux = new Date().getTime();
        this.gyn = true;
        this.lpo = setTimeout(this.efw, this.qwj)
    };
    this.efw = function() {
        var c = 0,
            a = wpb.onl.vxw,
            b = 0;
        if (wpb.onl.zvj > 0) {
            if (!wpb.onl.ccy) {
                wpb.onl.eze.wym("collect");
                wpb.onl.ccy = true
            }
            c = Math.round(wpb.onl.zvj / wpb.onl.cus);
            wpb.onl.zvj -= c;
            if (wpb.onl.zvj < 0) {
                wpb.onl.zvj = 0
            }
            wpb.onl.oqu(wpb.onl.qbf - (wpb.onl.win + wpb.onl.nen - wpb.onl.zvj));
            wpb.onl.sfg(wpb.onl.tph + (wpb.onl.win + wpb.onl.nen - wpb.onl.zvj), true);
            wpb.onl.bge++;
            wpb.onl.cus -= 1;
            a = wpb.onl.vxw;
            b = new Date().getTime();
            a = wpb.onl.qwj + (wpb.onl.bge * wpb.onl.qwj - (b - wpb.onl.gux));
            wpb.onl.lpo = setTimeout(wpb.onl.efw, a)
        } else {
            wpb.onl.eze.qys("collect");
            wpb.onl.eze.wym("collectend");
            wpb.onl.gyn = false;
            wpb.onl.wst = true;
            clearTimeout(wpb.onl.lpo);
            wpb.onl.knj();
            wpb.onl.usk.ohh.mgf("start", "#zbu", [wpb.onl.language.start, true]);
            if (wpb.onl.byd == wpb.onl.isw) {
                wpb.onl.byd()
            } else {
                if (!(wpb.onl.npj)) {
                    wpb.onl.usk.bab(true);
                    wpb.onl.cyp(true)
                } else {
                    wpb.onl.usk.upp(true);
                    wpb.onl.usk.ohh.mgf("info", "#ubq", [wpb.onl.language.hps + ": " + wpb.onl.sbe(wpb.onl.win + wpb.onl.nen)]);
                    wpb.onl.tjp = setTimeout(wpb.onl.khm, 500)
                }
            }
        }
    };
    this.xds = function(a, b, c) {
        if (a <= b) {
            return 1
        }
        var d = 0,
            e = this.dvb(a, b, c),
            f = 0;
        while (a > f) {
            e = this.dvb(a - f, b, c);
            f += e;
            d++
        }
        return d
    };
    this.dvb = function(d, a, b) {
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
    this.rzb = function(d) {
        var e = this.wsq,
            c = this.cev;
        this.vfg = true;
        this.usk.ohh.mgf("info", "#ubq", ["", true]);
        this.qui();
        if (d == wpb.brr.etl.dpq) {
            this.wjg();
            this.usk.ohh.mgf("info", "#dhe", [0]);
            this.usk.bab(true);
            this.cyp(true);
            this.mmp()
        } else {
            if (d == wpb.brr.etl.ogk) {
                for (var b = 0, a = this.sxh.length; b < a; b++) {
                    this.kmf[b].xhx(this.sxh[b], false)
                }
                this.jsk();
                this.vmw(false);
                this.jls(true);
                this.usk.ohh.mgf("info", "#dhe", [2]);
                this.usk.hdc(true);
                if (this.dsu == this.jrs) {
                    this.usk.ohh.mgf("exit", "#dxj", [true]);
                    this.usk.ohh.mgf("bet", "#dxj", [this.owt]);
                    this.wjg()
                }
                this.cyp(true)
            } else {
                if (d == wpb.brr.etl.nyr) {
                    for (var b = 0, a = this.sxh.length; b < a; b++) {
                        this.kmf[b].xhx(this.sxh[b], false)
                    }
                    this.zlm();
                    this.uoi();
                    if (this.win > 0) {
                        if (this.tuo() === false) {
                            this.usn = true
                        } else {
                            this.usn = false;
                            this.kxz = true
                        }
                        this.wst = false;
                        this.pan()
                    } else {
                        if (this.kig()) {
                            this.usn = true;
                            this.bxe()
                        } else {
                            this.wjg();
                            this.usk.ohh.mgf("info", "#dhe", [0]);
                            this.usk.bab(true);
                            this.cyp(true);
                            this.mmp()
                        }
                    }
                } else {
                    if (d == wpb.brr.etl.fap) {
                        this.wst = true;
                        for (var b = 0, a = this.sxh.length; b < a; b++) {
                            this.kmf[b].xhx(this.sxh[b], false)
                        }
                        this.wjg();
                        this.usk.ohh.mgf("info", "#dhe", [0]);
                        this.usk.bab(true);
                        this.cyp(true);
                        this.mmp()
                    } else {
                        if (d == wpb.brr.etl.mzh) {
                            for (var b = 0, a = this.sxh.length; b < a; b++) {
                                this.kmf[b].xhx(this.sxh[b], false)
                            }
                            this.fur();
                            if (!this.gei.qdz() && this.win + this.nen > 0) {
                                this.bug();
                                this.gei.xzu(this.fmn, this.win + this.nen, this.jpj, true)
                            }
                            if (this.win + this.nen == 0) {
                                this.wjg();
                                this.usk.ohh.mgf("info", "#dhe", [0]);
                                this.usk.bab(true);
                                this.cyp(true);
                                this.mmp()
                            }
                        } else {
                            if (d == wpb.brr.etl.xha) {
                                for (var b = 0, a = this.sxh.length; b < a; b++) {
                                    this.kmf[b].xhx(this.sxh[b], false)
                                }
                                if (!this.gei.qdz()) {
                                    this.bug()
                                }
                                this.sfg(this.fmn, false);
                                this.gei.xzu(this.fmn, this.win + this.nen, this.jpj, true);
                                this.gei.bab(true)
                            } else {
                                if (d == wpb.brr.etl.lxu) {
                                    this.wst = true;
                                    for (var b = 0, a = this.sxh.length; b < a; b++) {
                                        this.kmf[b].xhx(this.sxh[b], false)
                                    }
                                    this.wjg();
                                    this.usk.ohh.mgf("info", "#dhe", [0]);
                                    this.usk.bab(true);
                                    this.cyp(true);
                                    this.mmp()
                                } else {
                                    if (d == wpb.brr.etl.lvh) {
                                        for (var b = 0, a = this.sxh.length; b < a; b++) {
                                            this.kmf[b].xhx(this.sxh[b], false)
                                        }
                                        this.dta();
                                        this.vmw(false);
                                        this.jls(true);
                                        this.usk.ohh.mgf("info", "#dhe", [2]);
                                        this.usk.hdc(true);
                                        if ((this.dsu == 3 && this.jrs >= 2) && this.usk.nnd != null) {
                                            this.usk.ohh.mgf("exit", "#dxj", [true])
                                        }
                                    } else {
                                        if (d == wpb.brr.etl.eut) {
                                            for (var b = 0, a = this.sxh.length; b < a; b++) {
                                                this.kmf[b].xhx(this.sxh[b], false)
                                            }
                                            if (!this.gei.qdz()) {
                                                this.bug()
                                            }
                                            this.sfg(this.fmn, false);
                                            this.gei.xzu(this.fmn, this.win, this.jpj, true);
                                            this.gei.fyi(false);
                                            this.gei.fba(c)
                                        } else {
                                            if (d == wpb.brr.etl.syg || d == wpb.brr.etl.bwe) {
                                                for (var b = 0, a = this.sxh.length; b < a; b++) {
                                                    this.kmf[b].xhx(this.sxh[b], false)
                                                }
                                                if (!this.gei.qdz()) {
                                                    this.bug()
                                                }
                                                this.sfg(this.fmn, false);
                                                this.gei.xzu(this.fmn, this.win, this.jpj, true);
                                                this.gei.fyi(false);
                                                this.gei.nml(e)
                                            }
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
    this.kyl = function() {
        this.vfg = false;
        this.kxz = false;
        this.usn = false;
        this.rgh = 5;
        this.cvl();
        this.usk.upp(true);
        this.ain()
    };
    this.nfb = function() {
        this.vfg = false;
        this.kxz = false;
        this.usn = false;
        this.udh();
        this.usk.upp(true)
    };
    this.uov = function() {
        this.vfg = false;
        this.kxz = false;
        this.usn = true;
        this.wst = false;
        this.ikw();
        this.usk.upp(true)
    };
    this.vop = function(a) {
        this.vfg = false;
        this.kxz = true;
        this.usn = false;
        this.wst = false;
        if (this.gei.qdz()) {
            this.gei.xzu(this.fmn, this.win + this.nen, this.jpj, true);
            this.gei.kxr();
            this.sfg(this.fmn, false);
            try {
                if (this.gei instanceof kba) {
                    this.gei.fba(a, true)
                } else {
                    setTimeout(this.gei.oiw, 500)
                }
            } catch (b) {
                setTimeout(this.gei.oiw, 500)
            }
        } else {
            this.ikw();
            this.usk.upp(true)
        }
    };
    this.orv = function() {
        this.vfg = false;
        this.usn = false;
        this.spg = true;
        this.lzm();
        if (this.gei.qdz()) {
            this.gei.kxr();
            this.sfg(this.fmn, false);
            setTimeout(this.gei.oiw, 100)
        } else {
            this.uhp()
        }
    };
    this.xus = function() {
        this.vfg = false;
        if (!this.gei.qdz() && this.win + this.nen > 0) {
            this.bug()
        }
        this.gei.xzu(this.fmn, this.win + this.nen, this.jpj, true);
        if (this.win + this.nen == 0) {
            this.gei.ohh.mgf("info", "#gyg");
            setTimeout(this.tth, 1000)
        } else {
            this.gei.hzf()
        }
    };
    this.ixg = function() {
        this.vfg = false;
        if (!this.gei.qdz()) {
            this.bug()
        }
        this.sfg(this.fmn, false);
        this.gei.xzu(this.fmn, this.win + this.nen, this.jpj, true);
        this.gei.bab(true)
    };
    this.xqe = function(a) {
        this.vfg = false;
        if (!this.gei.qdz() && this.win > 0) {
            this.bug()
        }
        this.gei.xzu(this.fmn, this.win, this.jpj, true);
        this.gei.fyi(false);
        this.gei.nml(a)
    };
    this.onm = function(a) {
        this.vfg = false;
        if (!this.gei.qdz() && this.win > 0) {
            this.bug()
        }
        this.gei.xzu(this.fmn, this.win, this.jpj, true);
        this.gei.fyi(false);
        this.gei.nml(a)
    };
    this.usc = function(a) {
        this.vfg = false;
        this.gei.xzu(this.fmn, this.win, this.jpj, true);
        this.gei.fba(a, false)
    };
    this.lmu = function(b, d) {
        var c = this.fwc.xpy("stats"),
            a = this.fwc.xpy("history");
        if (this.kdd) {
            if (!this.szo) {
                if (c && c.qdz()) {
                    c.bab(false);
                    c.kwl(false)
                }
                this.fwc.mgf("settings", "#gyp");
                if (this.gei != null && this.gei.qdz()) {
                    this.gei.ohh.mgf("info", "#ubq", [b, true]);
                    this.gei.bab(false);
                    this.blq()
                } else {
                    if (this.usk != null) {
                        if (this.hcd != null && this.hcd.qdz()) {
                            this.hch()
                        }
                        this.usk.bab(false);
                        this.stop();
                        this.usk.ohh.mgf("setting", "#xkl", [false]);
                        this.usk.ohh.mgf("info", "#ubq", [b, true])
                    } else {
                        this.zlg(b)
                    }
                }
            } else {
                this.stop();
                this.pzt();
                if (a) {
                    a.yju(true)
                }
                this.rfy(this.pyl(b))
            }
        } else {
            this.zlg(b)
        }
        if (d) {
            if (!this.szo && this.sgq.rha.gwm == 0 && wpb.zan.value46 > 0) {
                this.mvl((this.hdt) ? wpb.zan.value71 : wpb.zan.value47)
            } else {
                setTimeout(this.isw, wpb.zan.value10)
            }
        }
    };
    this.alx = function(a) {
        if (a == wpb.stq.duy) {
            this.usk.ohh.mgf("info", "#ubq", [this.language.piz, true])
        } else {
            if (a == wpb.stq.afv) {
                this.usk.ohh.mgf("info", "#ubq", [this.language.urg + " " + this.sbe(this.pwu), true])
            } else {
                if (a >= wpb.stq.pio) {
                    this.usk.ohh.mgf("info", "#gyg");
                    if (a == wpb.stq.tky || a == wpb.stq.dzu) {
                        this.stop()
                    }
                    this.usk.bab(false);
                    this.cyp(false)
                }
            }
        }
        this.arj();
        if (a < wpb.stq.pio) {
            this.spg = true;
            this.usk.bab(true);
            this.cyp(true)
        } else {
            this.oam([{
                xby: a
            }])
        }
    };
    this.mcv = function(a) {
        this.fmn = a;
        if (!(this.gei.qdz() || this.hcd.qdz())) {
            this.sfg(a, true)
        } else {
            if (this.gei.qdz()) {
                this.gei.ohh.mgf("creditd", "#zbu", [this.xth(a), true]);
                this.sfg(a, false)
            }
        }
        if (this.fmn > 0) {
            this.lzm()
        } else {
            this.wjg()
        }
    };
    this.uka = function() {
        clearTimeout(wpb.onl.tjp);
        if (wpb.onl.spg) {
            if (wpb.onl.win + wpb.onl.nen > 0 && !wpb.onl.wst) {
                if (!wpb.onl.gyn) {
                    if (wpb.onl.ryf()) {
                        wpb.onl.spg = false;
                        wpb.onl.pyz()
                    }
                } else {
                    wpb.onl.vmu()
                }
            } else {
                if (!wpb.onl.nfj) {
                    if (wpb.onl.any) {
                        wpb.onl.arj();
                        wpb.onl.nhq();
                        return
                    } else {
                        if (wpb.onl.qgj) {
                            wpb.onl.arj();
                            wpb.onl.hsh();
                            return
                        }
                    }
                    wpb.onl.spg = false;
                    if (wpb.onl.tuo() === true) {
                        wpb.onl.kmw = (!wpb.onl.pqg) ? 1 : 0
                    } else {
                        if (wpb.zan.value62 === true) {
                            wpb.onl.kmw = 0;
                            if (wpb.onl.npj) {
                                wpb.onl.kmw |= 2
                            }
                            if (wpb.onl.pqg) {
                                wpb.onl.kmw |= 4
                            }
                        } else {
                            wpb.onl.kmw = (wpb.onl.npj && !wpb.onl.pqg) ? 1 : 0
                        }
                    }
                    wpb.onl.ckd();
                    if ((wpb.onl.state == wpb.brr.etl.dpq || wpb.onl.state == wpb.brr.etl.nyr || wpb.onl.state == wpb.brr.etl.fap || wpb.onl.state == wpb.brr.etl.mzh || wpb.onl.state == wpb.brr.etl.lxu || wpb.onl.state == wpb.brr.etl.eut) || wpb.onl.uzr()) {
                        if (wpb.onl.fmn >= wpb.onl.pqi() && wpb.onl.pqi() >= wpb.onl.pwu) {
                            wpb.onl.sgq.zgx(wpb.onl.lxv, wpb.onl.kmw);
                            wpb.onl.usk.bab(false)
                        } else {
                            wpb.onl.qwk();
                            wpb.onl.arj();
                            wpb.onl.usk.bab(true);
                            wpb.onl.cyp(true);
                            wpb.onl.spg = true
                        }
                    } else {
                        if (wpb.onl.state == wpb.brr.etl.ogk) {
                            if (wpb.onl.dsu == 2 && wpb.onl.jrs == 2 && wpb.onl.owt && (wpb.onl.rgh == 5 || wpb.onl.totalBet != wpb.onl.yef)) {
                                wpb.onl.sgq.zgx(wpb.onl.lxv, wpb.onl.kmw);
                                wpb.onl.usk.bab(false);
                                wpb.onl.jls(false);
                                return
                            }
                            wpb.onl.lyd();
                            if (wpb.onl.dsu == 2 || (wpb.onl.dsu == 3 && wpb.onl.rgh == 0 && wpb.onl.jpj > 0)) {
                                wpb.onl.sgq.qrg(wpb.onl.lxv, wpb.onl.kmw, wpb.onl.hwx);
                                wpb.onl.usk.bab(false)
                            } else {
                                if (wpb.onl.dsu == 3) {
                                    wpb.onl.sgq.oxh(wpb.onl.lxv, wpb.onl.kmw, wpb.onl.hwx);
                                    wpb.onl.usk.bab(false)
                                }
                            }
                        } else {
                            if (wpb.onl.state == wpb.brr.etl.lvh) {
                                wpb.onl.lyd();
                                wpb.onl.sgq.qrg(wpb.onl.lxv, wpb.onl.kmw, wpb.onl.hwx);
                                wpb.onl.usk.bab(false)
                            }
                        }
                    }
                    wpb.onl.jls(false)
                }
            }
        }
    };
    this.omm = function() {
        var a = wpb.onl.fwc.xpy("topi"),
            c = 0,
            b = 0,
            d = 0;
        if (!wpb.zan.value55) {
            wpb.onl.eze.qys("auto_on");
            wpb.onl.eze.qys("auto_off")
        }
        if (wpb.onl.npj) {
            wpb.onl.npj = false;
            wpb.onl.fgq();
            wpb.onl.usk.ohh.mgf("astart", "#xkl", [wpb.onl.npj]);
            wpb.onl.usk.ohh.mgf("start", "#zbu", [wpb.onl.language.start, true]);
            if (!wpb.zan.value55) {
                wpb.onl.eze.wym("auto_off")
            }
        } else {
            if (wpb.onl.mnu() != null && wpb.onl.usb <= 0 && wpb.onl.tuo() === false) {
                if (a && a.wek() === true) {
                    wpb.onl.cyp(false);
                    wpb.onl.usk.bab(false);
                    wpb.onl.id = setTimeout(wpb.onl.aoc, 300)
                }
            } else {
                wpb.onl.npj = true;
                if (wpb.onl.mnu() != null && wpb.onl.tuo() === true) {
                    wpb.onl.usb = wpb.onl.fwc.mgf("settings", "#nly");
                    c = wpb.onl.fwc.mgf("settings", "#hlv");
                    b = wpb.onl.fwc.mgf("settings", "#nfw");
                    d = wpb.onl.fwc.mgf("settings", "#nxp");
                    wpb.onl.ins = (c > 0) ? c : 0;
                    wpb.onl.yyw = (b > 0) ? b : 0;
                    wpb.onl.rst = (d > 0) ? d : 0;
                    wpb.onl.ain()
                }
                wpb.onl.usk.ohh.mgf("astart", "#xkl", [wpb.onl.npj]);
                wpb.onl.usk.ohh.mgf("start", "#zbu", [wpb.onl.language.start, true]);
                if (!wpb.zan.value55) {
                    wpb.onl.eze.wym("auto_on")
                }
                wpb.onl.uka()
            }
        }
        if (a) {
            a.shw("auto", wpb.onl.npj)
        }
    };
    this.isw = function() {
        if (wpb.gwm == 0 && wpb.onl.szo === false && wpb.onl.win + wpb.onl.nen > 0 && !wpb.onl.wst && wpb.onl.ryf()) {
            if (!wpb.onl.gyn) {
                wpb.onl.pyz()
            }
            wpb.onl.byd = wpb.onl.isw
        } else {
            iqs.prototype.isw.call(this)
        }
    };
    this.esv = function() {
        if (wpb.onl.lxv < wpb.onl.xwi.length - 1) {
            if (wpb.onl.lxv >= wpb.onl.avr(true)) {
                wpb.onl.lxv = 0;
                while (wpb.onl.lxv < wpb.onl.rko()) {
                    wpb.onl.lxv++
                }
            } else {
                wpb.onl.lxv++
            }
        } else {
            wpb.onl.lxv = 0;
            while (wpb.onl.lxv < wpb.onl.rko()) {
                wpb.onl.lxv++
            }
        }
        wpb.onl.zvc(false);
        if (wpb.onl.lxv >= wpb.onl.avr(true)) {
            return true
        }
        return false
    };
    this.dhl = function() {
        if (wpb.onl.lxv > 0) {
            if (wpb.onl.lxv <= wpb.onl.rko()) {
                wpb.onl.lxv = wpb.onl.xwi.length;
                while (wpb.onl.lxv > wpb.onl.avr(true)) {
                    wpb.onl.lxv--
                }
            } else {
                wpb.onl.lxv--
            }
        } else {
            wpb.onl.lxv = wpb.onl.xwi.length;
            while (wpb.onl.lxv > wpb.onl.avr(true)) {
                wpb.onl.lxv--
            }
        }
        if (wpb.onl.lxv < 0) {
            wpb.onl.lxv = 0
        }
        wpb.onl.zvc(false);
        if (wpb.onl.lxv <= wpb.onl.rko()) {
            return true
        }
        return false
    };
    this.aus = function() {
        var a = wpb.onl.fwc.xpy("topi"),
            b = wpb.onl.fwc.xpy("settings");
        if (wpb.onl.tuo() === false && wpb.onl.usn && wpb.onl.win + wpb.onl.nen > 0) {
            if (!wpb.onl.nfj) {
                wpb.onl.vfg = false;
                wpb.onl.bug()
            }
        } else {
            wpb.onl.eze.qys("gamble_on");
            wpb.onl.eze.qys("gamble_off");
            wpb.onl.pqg = !wpb.onl.pqg;
            if (wpb.onl.pqg) {
                wpb.onl.eze.wym("gamble_on")
            } else {
                wpb.onl.eze.wym("gamble_off")
            }
            wpb.onl.usk.ohh.mgf("gamble", "#xkl", [wpb.onl.pqg]);
            if (a) {
                a.shw("gamble", wpb.onl.pqg)
            }
            if (b) {
                b.ohh.mgf("gamble", "#pjh", [(wpb.onl.pqg) ? 1 : 0])
            }
        }
    };
    this.vkv = function() {
        if (!wpb.onl.hcd.qdz()) {
            wpb.onl.svh();
            if (wpb.onl.fwc.xpy("tops")) {
                wpb.onl.arq()
            }
            if (wpb.onl.hcd.qnh() > 0) {
                wpb.onl.mwg()
            }
        } else {
            wpb.onl.hch()
        }
    };
    this.mim = function() {
        var a = wpb.onl.fwc.xpy("topi"),
            b = wpb.onl.fwc.xpy("settings"),
            c = wpb.onl.fwc.xpy("topb");
        wpb.onl.cyf = !wpb.onl.cyf;
        if (a) {
            a.shw("turbo", wpb.onl.cyf)
        }
        if (c) {
            c.ohh.mgf("turbo", "#pjh", [(wpb.onl.cyf) ? 1 : 0])
        }
        if (b) {
            b.ohh.mgf("turbo", "#pjh", [(wpb.onl.cyf) ? 1 : 0])
        }
    };
    this.djo = function() {
        var a = false;
        if (wpb.trp.chz == true) {
            if (wpb.onl.mjh == true) {
                wpb.onl.mjh = false;
                a = wpb.trp.mcw();
                setTimeout(wpb.onl.txr, 1400)
            }
        } else {
            a = wpb.trp.mcw();
            setTimeout(wpb.onl.txr, 1400)
        }
    };
    this.tmk = function() {
        if (wpb.onl.eze.xsa() && !wpb.onl.hdz) {
            wpb.onl.tds = false;
            wpb.onl.hdz = true;
            wpb.onl.fwc.mgf("loading", "#stop");
            setTimeout(wpb.onl.bzk, 100);
            wpb.onl.eze.wym("silence");
            if (wpb.trp.kfq() && wpb.trp.chz) {
                wpb.onl.djo()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.dca = function(a) {
        if (a == wpb.language.EN || a == wpb.language.US) {
            return new ryv()
        } else {
            if (a == wpb.language.ES || a == wpb.language.CO || a == wpb.language.MX || a == wpb.language.CL || a == wpb.language.VE) {
                return new sck()
            } else {
                if (a == wpb.language.DE || a == wpb.language.AT) {
                    return new kwq()
                } else {
                    if (a == wpb.language.PT || a == wpb.language.BR) {
                        return new mbr()
                    } else {
                        if (a == wpb.language.RU) {
                            return new xsj()
                        } else {
                            if (a == wpb.language.EE) {
                                return new uil()
                            } else {
                                if (a == wpb.language.TR) {
                                    return new iby()
                                } else {
                                    if (a == wpb.language.CZ) {
                                        return new mli()
                                    } else {
                                        if (a == wpb.language.GR) {
                                            return new ont()
                                        } else {
                                            if (a == wpb.language.BG) {
                                                return new yih()
                                            } else {
                                                if (a == wpb.language.GE) {
                                                    return new dvi()
                                                } else {
                                                    if (a == wpb.language.HU) {
                                                        return new qyu()
                                                    } else {
                                                        if (a == wpb.language.RO) {
                                                            return new ptm()
                                                        } else {
                                                            if (a == wpb.language.FR) {
                                                                return new dnp()
                                                            } else {
                                                                if (a == wpb.language.HR) {
                                                                    return new anc()
                                                                } else {
                                                                    if (a == wpb.language.IT) {
                                                                        return new uyu()
                                                                    } else {
                                                                        if (a == wpb.language.SE) {
                                                                            return new vbr()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.hwa = function() {
        var f = this.fwc.xpy("stats"),
            e = this.fwc.xpy("topb"),
            c = this.fwc.xpy("topi"),
            b = this.fwc.xpy("betsel");
        this.hqa();
        this.usk.aru(this.uyz, 0);
        this.hae[0] = this.language.xky;
        this.hae[1] = this.language.soa;
        this.usk.aru(this.hae, 1);
        this.eeg[0] = this.language.jka;
        this.eeg[1] = this.language.ccf;
        this.usk.aru(this.eeg, 2);
        if (this.npj) {
            this.usk.ohh.mgf("start", "#zbu", [this.language.start])
        } else {
            if (this.win + this.nen > 0 && !this.kxz && !this.wst) {
                this.usk.ohh.mgf("start", "#zbu", [this.language.uhp])
            } else {
                this.usk.ohh.mgf("start", "#zbu", [this.language.start])
            }
        }
        if (this.mnu() != null) {
            this.usk.ohh.mgf("astart", "#zbu", [this.language.aly])
        } else {
            this.usk.ohh.mgf("astart", "#zbu", [this.language.npj])
        }
        this.usk.ohh.mgf("gamble", "#zbu", [this.language.pqg]);
        this.usk.ohh.mgf("exit", "#zbu", [(wpb.zan.value50.g === true) ? this.language.coc : this.language.cbg]);
        this.usk.ohh.mgf("bet", "#zbu", [this.language.eaj]);
        this.usk.ohh.mgf("creditd", "#ahe", [(this.zxh()) ? this.language.egz : this.language.fmn]);
        this.usk.ohh.mgf("betd", "#ahe", [this.language.eaj]);
        if (e) {
            e.ohh.mgf("language", "#ikh", [this.language.language]);
            e.ohh.mgf("audio", "#ikh", [this.language.audio]);
            e.ohh.mgf("turbo", "#ikh", [this.language.cyf]);
            e.ohh.mgf("fullscreen", "#ikh", [this.language.jjd]);
            e.ohh.mgf("help", "#ikh", [this.language.ebh]);
            e.ohh.mgf("history", "#ikh", [this.language.ztv]);
            e.ohh.mgf("statistic", "#ikh", [this.language.qsf]);
            e.ohh.mgf("deposit", "#ikh", [this.language.thn])
        }
        if (c) {
            c.ikh("freeplay", this.language.egz)
        }
        if (b) {
            b.itx = this.language.eaj
        }
        if (f) {
            if (wpb.zan.value36) {
                f.itx = this.pyl(this.language.qsf)
            } else {
                if (wpb.zan.value37) {
                    f.itx = this.pyl(this.language.uan)
                }
            }
            if (f.xhb != null) {
                f.xhb.zbu(this.language.ret, false)
            }
            if (f.nnd != null) {
                f.nnd.zbu(this.language.rrx, false)
            }
        }
        this.hcd.ohh.mgf("return", "#zbu", [this.language.ret, false]);
        for (var d = 0, a = this.kmf.length; d < a; d++) {
            if (this.kmf[d].ucb()) {
                this.kmf[d].coq(true, false)
            } else {
                if (this.kmf[d].gxv()) {
                    this.kmf[d].qwb(true, false)
                }
            }
        }
        this.fwc.mgf("settings", "#hwa", [this.language, false]);
        this.fwc.mgf("autop", "#hwa", [this.language]);
        this.fft()
    };
    this.fft = function() {
        this.ruo[0] = this.language.hjv;
        this.gei.aru(this.ruo)
    };
    this.pqi = function() {
        return this.totalBet
    };
    this.hey = function() {
        return this.pwu
    };
    this.wxw = function() {
        return this.ghb
    };
    this.avr = function(b) {
        for (var c = 0; c < this.xwi.length; c++) {
            var a = this.xwi[c];
            if (a > this.ghb || (b && (this.fmn > 0 && this.fmn < a))) {
                return c - 1
            } else {
                if (a == this.ghb || c == this.xwi.length - 1) {
                    return c
                }
            }
        }
        return -1
    };
    this.rko = function() {
        for (var b = 0; b < this.xwi.length; b++) {
            var a = this.xwi[b];
            if (a >= this.pwu && a < this.ghb) {
                return b
            }
        }
        return -1
    };
    this.qwk = function() {
        var c = this.avr(true),
            a = this.rko(),
            b = this.xwi.length - 1;
        b = (b > c) ? c : b;
        if (b > 0) {
            while (this.xwi[b] > this.fmn) {
                b--;
                if (b <= a) {
                    break
                }
            }
        }
        this.lxv = (b < a) ? a : b;
        this.zvc(false);
        if (this.pqi() > this.fmn) {
            this.usk.ohh.mgf("info", "#ubq", [this.language.piz, true])
        } else {
            if (this.pqi() < this.pwu) {
                this.usk.ohh.mgf("info", "#ubq", [this.language.urg + " " + this.pwu, true])
            }
        }
    };
    this.zvc = function(b) {
        var a = this.usk.ohh.xpy("info");
        this.totalBet = this.xwi[this.lxv];
        this.qui();
        if (a && a.buy() === false) {
            a.ubq(this.uyz[2], true)
        }
        if (this.tuo() == true) {
            this.eze.wym("btn")
        } else {
            if (this.lxv == this.avr(true)) {
                this.eze.wym("maxstep")
            } else {
                this.eze.wym("step" + (this.lxv % 12))
            }
        }
        this.fwc.mgf("betsel", "#zqq", [this.lxv, true])
    };
    this.xrj = function() {
        this.totalBet = this.xwi[this.lxv];
        this.qui()
    };
    this.php = function(a) {
        wpb.onl.lxv = a;
        wpb.onl.xrj()
    };
    this.opb = function() {
        this.fwc.mgf("paytable", "#pxq", [this.totalBet])
    };
    this.stop = function() {
        iqs.prototype.stop.call(this);
        this.bfb();
        if (this.usk != null) {
            this.usk.ohh.mgf("gamble", "#sku");
            this.usk.ohh.mgf("info", "#gyg");
            this.usk.stop()
        }
        clearTimeout(this.div);
        clearTimeout(this.lpo);
        clearTimeout(this.qgw);
        clearTimeout(this.isn);
        clearTimeout(this.rrz);
        this.fxa();
        if (this.gei != null && this.gei.qdz()) {
            this.gei.kxr();
            try {
                if (this.gei instanceof kba) {
                    this.gei.ohh.mgf("gamble", "#sku")
                } else {
                    this.gei.ohh.mgf("info", "#gyg")
                }
            } catch (a) {
                this.gei.ohh.mgf("info", "#gyg")
            }
        }
        this.aqe();
        if (!this.szo) {
            this.fur()
        }
    };
    this.fxa = function() {};
    this.knj = function() {
        var a = this.fwc.xpy("winp");
        if (a && a.qdz()) {
            a.kwl(false, true)
        }
    };
    this.oqu = function(a) {
        this.fwc.mgf("winp", "#zbu", [this.sbe(a), true])
    };
    this.jls = function(c) {
        if (!(c && this.npj)) {
            for (var b = 0, a = this.kmf.length; b < a; b++) {
                this.kmf[b].dxj(c)
            }
        }
    };
    this.qbq = function(a) {
        this.usk.ohh.neu("buttons", "#kwl", [a]);
        this.fur()
    };
    this.ckd = function() {
        this.rgh = 5;
        for (var b = 0, a = this.kmf.length; b < a; b++) {
            if (this.kmf[b].gxv()) {
                this.rgh--
            }
        }
    };
    this.lyd = function() {
        for (var b = 0, a = this.kmf.length; b < a; b++) {
            if (this.kmf[b].gxv()) {
                this.hwx[b] = this.sxh[b]
            } else {
                this.hwx[b] = 0
            }
        }
    };
    this.oru = function(b) {
        for (var c = 0, a = this.xkp.length; c < a; c++) {
            if (b == this.xkp[c]) {
                return true
            }
        }
        return false
    };
    this.tgc = function(b) {
        for (var c = 0, a = this.xkp.length; c < a; c++) {
            if (b == this.xkp[c]) {
                if (this.hnk[c]) {
                    return this.hnk[c]
                }
            }
        }
        return -1
    };
    this.uzr = function() {
        return false
    };
    this.axx = function() {
        if (!wpb.onl.wst && !wpb.onl.gyn && !(wpb.onl.kxz || wpb.onl.npj) && !(wpb.onl.pqg && wpb.onl.usn)) {
            if (wpb.onl.win + wpb.onl.nen > 0 && !wpb.onl.gmd) {
                wpb.onl.eze.qys("gambleprop");
                wpb.onl.eze.wym("gambleprop")
            }
        }
    };
    this.vce = function() {
        if (!this.szo) {
            this.eze.qys("gambleprop");
            this.gmd = true
        }
    };
    this.cyp = function(e) {
        iqs.prototype.cyp.call(this, e);
        var d = this.fwc.xpy("topb"),
            c = (this.fwc.xpy("tops") != null),
            a = (e && !this.npj);
        if (this.usk) {
            this.usk.ohh.mgf("setting", "#dxj", [a])
        }
        if (c) {
            var a = (e && !this.npj);
            if (this.vtl && d) {
                var b = d.ohh.xpy("help");
                if (b) {
                    b.dxj(a && !c)
                }
            }
        }
    };
    this.xsi = function(e) {
        iqs.prototype.xsi.call(this, e);
        var d = this.fwc.xpy("topb"),
            c = (this.fwc.xpy("tops") != null),
            a = (e && !this.npj);
        if (this.usk) {
            this.usk.ohh.mgf("setting", "#dxj", [a])
        }
        if (c) {
            var a = (e && !this.npj);
            if (this.vtl && d) {
                var b = d.ohh.xpy("help");
                if (b) {
                    b.dxj(a && !c)
                }
            }
        }
    };
    this.xsw = function(e) {
        iqs.prototype.xsw.call(this, e);
        var d = this.fwc.xpy("topb"),
            c = (this.fwc.xpy("tops") != null),
            a = (e && !this.npj);
        if (this.usk) {
            this.usk.ohh.mgf("setting", "#dxj", [a])
        }
        if (c) {
            var a = (e && !this.npj);
            if (this.vtl && d) {
                var b = d.ohh.xpy("help");
                if (b) {
                    b.dxj(a && !c)
                }
            }
        }
    };
    this.vbx = function() {
        iqs.prototype.vbx.call(this);
        if (wpb.onl.wob === true && wpb.onl.xkx === true) {
            wpb.onl.arj()
        }
    };
    this.oxk = function() {
        if (wpb.zan.value74 != null && this.fwc.mgf("settings", "#nly") <= 0) {
            return false
        } else {
            if ((this.state == wpb.brr.etl.dpq || this.state == wpb.brr.etl.nyr || this.state == wpb.brr.etl.fap || this.state == wpb.brr.etl.mzh || this.state == wpb.brr.etl.lxu || this.state == wpb.brr.etl.eut) || this.uzr()) {
                if (!(this.fmn >= this.pqi() && this.pqi() >= this.pwu)) {
                    return false
                }
            }
        }
        return true
    };
    this.nug = function() {
        var b = this.fwc.xpy("stats"),
            a = this.fwc.xpy("settings");
        if (this.hcd && this.hcd.qdz()) {
            return false
        } else {
            if (this.gei && this.gei.qdz()) {
                return false
            } else {
                if (b && b.qdz()) {
                    return false
                } else {
                    if (a && a.qdz()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.mmp = function() {
        if (wpb.zan.value78 && this.tuo() === false) {
            if (wpb.zan.value78.t === true) {
                this.fwc.mgf("topb", "#kwl", [true])
            }
            if (wpb.zan.value78.b === true) {
                this.fwc.mgf("betsel", "#kwl", [true])
            }
            if (wpb.zan.value78.t === true || wpb.zan.value78.b === true) {
                this.snj()
            }
            this.fur();
            if (wpb.zan.value78.d > 0) {
                this.yws = setTimeout(this.lqj, wpb.zan.value78.d)
            }
        }
    };
    this.lqj = function() {
        wpb.onl.gjo();
        clearTimeout(wpb.onl.yws)
    };
    this.svh = function(b) {
        var a = this.fwc.xpy("betsel");
        if (a && a.qdz() && a.wek()) {
            this.gjo(b)
        } else {
            iqs.prototype.svh.call(this, b)
        }
    };
    this.snj = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(a) {
                wpb.onl.qmi(a)
            };
            this.canvas.ontouchmove = function(a) {
                wpb.onl.qmi(a)
            }
        }
    };
    this.bfb = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.qmi = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        var b = 0,
            g = 0,
            c = false,
            e = this.fwc.xpy("topb"),
            a = this.fwc.xpy("betsel");
        if (d.touches) {
            var f = d.touches[0];
            c = true;
            if (!this.wgd) {
                b = f.pageX - this.offsetLeft;
                g = f.pageY - this.offsetTop
            } else {
                b = Math.round((f.pageX - this.offsetLeft) / this.dck);
                g = Math.round((f.pageY - this.offsetTop) / this.ezo)
            }
        } else {
            if (!this.wgd) {
                b = d.pageX - this.offsetLeft;
                g = d.pageY - this.offsetTop
            } else {
                b = Math.round((d.pageX - this.offsetLeft) / this.dck);
                g = Math.round((d.pageY - this.offsetTop) / this.ezo)
            }
        }
        if (a && a.qdz()) {
            if (a.clx(b, g, c)) {
                return
            }
        }
        if (e && e.qdz()) {
            e.clx(b, g)
        }
    };
    this.atc = function() {
        if (this.div >= 0) {
            return
        }
        this.fwc.mgf("betsel", "#ekz");
        this.eze.qys("panel_in");
        this.eze.wym("panel_in");
        this.cyp(false);
        this.gux = new Date().getTime();
        this.bge = 0;
        this.div = setTimeout(this.fac, 89)
    };
    this.gjo = function(b) {
        var c = this.fwc.xpy("topb"),
            a = this.fwc.xpy("betsel");
        if (this.div >= 0 || !((c && c.qdz()) || (a && a.qdz()))) {
            return
        }
        if (b == this.dhl || b == this.esv) {
            b();
            return
        }
        if (c) {
            c.oet()
        }
        if (a) {
            a.oet()
        }
        this.eze.qys("panel_out");
        this.eze.wym("panel_out");
        this.dtz = b;
        this.gux = new Date().getTime();
        this.bge = 0;
        this.div = setTimeout(this.jqx, 89)
    };
    this.fac = function() {
        var a = wpb.onl.fwc.xpy("betsel"),
            d = (!a || (a && !a.kny())),
            c = 0,
            b = 0;
        wpb.onl.fur();
        wpb.onl.bge++;
        if (d) {
            wpb.onl.snj();
            clearTimeout(wpb.onl.div);
            wpb.onl.div = -1
        } else {
            c = new Date().getTime();
            b = 89 + (wpb.onl.bge * 89 - (c - wpb.onl.gux));
            wpb.onl.div = setTimeout(wpb.onl.fac, b)
        }
    };
    this.jqx = function() {
        var a = wpb.onl.fwc.xpy("betsel"),
            e = wpb.onl.fwc.xpy("topb"),
            f = (!a || (a && !a.kny())),
            b = (!e || (e && !e.kny())),
            d = 0,
            c = 0;
        wpb.onl.fur();
        wpb.onl.bge++;
        if (f && b) {
            wpb.onl.bfb();
            clearTimeout(wpb.onl.div);
            if (wpb.onl.nug()) {
                wpb.onl.cyp(true)
            }
            wpb.onl.div = -1;
            if (typeof wpb.onl.dtz === "function") {
                wpb.onl.dtz();
                wpb.onl.dtz = null
            }
        } else {
            d = new Date().getTime();
            c = 89 + (wpb.onl.bge * 89 - (d - wpb.onl.gux));
            wpb.onl.div = setTimeout(wpb.onl.jqx, c)
        }
    };
    this.dtz = function() {};
    this.wko = function() {
        return (this.fmn == 0 && (this.state == wpb.brr.etl.dpq || (this.state == wpb.brr.etl.nyr && (this.win + this.nen) == 0) || this.state == wpb.brr.etl.fap || (this.state == wpb.brr.etl.mzh && (this.win + this.nen) == 0) || this.state == wpb.brr.etl.lxu || (this.state == wpb.brr.etl.eut && (this.win + this.nen) == 0) || (this.state == wpb.brr.etl.ogk && this.owt == true)))
    };
    this.kbs = function() {
        if (wpb.onl.jsh != "" && wpb.onl.zxh() === false) {
            wpb.onl.usk.ohh.mgf("info", "#xji");
            wpb.onl.usk.ohh.mgf("info", "#dhe", [0])
        }
    };
    this.aqj = function() {
        if (this.state == wpb.brr.etl.nyr && this.jpj > 0) {
            this.eze.qys("win" + (this.jpj - 1))
        }
        this.usk.ohh.mgf("info", "#gyg");
        this.usk.bab(false);
        this.cyp(false);
        this.qbq(false);
        this.fwc.mgf("settings", "#gyp");
        this.usk.ohh.mgf("setting", "#xkl", [this.fwc.mgf("settings", "#qdz")]);
        this.fwc.mgf("stats", "#kwl", [true]);
        this.fur()
    };
    this.lxa = function() {
        this.fwc.mgf("stats", "#bab", [false]);
        this.fwc.mgf("stats", "#kwl", [false]);
        if (this.state != wpb.brr.etl.ogk && this.state != wpb.brr.etl.lvh) {
            this.usk.bab(true)
        } else {
            this.usk.hdc(true)
        }
        this.cyp(true);
        this.qbq(true);
        this.fur();
        this.usk.ohh.mgf("info", "#dhe", [0])
    };
    this.gup = function() {
        var a = this.usk.ohh.mgf("bet", "#wek");
        this.knj();
        if (this.state == wpb.brr.etl.nyr && this.jpj > 0) {
            this.eze.qys("win" + (this.jpj - 1))
        }
        this.usk.ohh.mgf("info", "#gyg");
        this.qbq(false);
        this.usk.ohh.neu("settings", "#kwl", [true]);
        this.cyp(false);
        this.usk.bab(false);
        this.usk.vsj(true);
        this.fwc.mgf("settings", "#lpj", [a, true])
    };
    this.icm = function() {
        this.fwc.mgf("settings", "#gyp");
        if (this.state != wpb.brr.etl.ogk && this.state != wpb.brr.etl.lvh) {
            this.usk.bab(true)
        } else {
            this.usk.hdc(true)
        }
        this.cyp(true);
        this.qbq(true);
        this.usk.ohh.mgf("info", "#dhe", [0])
    };
    this.aoc = function() {
        wpb.onl.cyp(false);
        wpb.onl.usk.bab(false);
        wpb.onl.usk.ohh.mgf("info", "#xji");
        wpb.onl.fwc.mgf("autop", "#lpj")
    };
    this.mic = function() {
        var a = wpb.onl.fwc.xpy("autop");
        if (a) {
            wpb.onl.usb = a.nly();
            wpb.onl.ins = (a.hlv() > 0) ? a.hlv() : 0;
            wpb.onl.yyw = (a.nfw() > 0) ? a.nfw() : 0;
            wpb.onl.rst = (a.nxp() > 0) ? a.nxp() : 0;
            if (wpb.onl.usb <= 0) {
                wpb.onl.cyp(true);
                wpb.onl.usk.bab(true);
                wpb.onl.usk.ohh.mgf("info", "#muj")
            } else {
                wpb.onl.usk.ohh.mgf("astart", "#xhx", [(wpb.onl.usb >= 0) ? wpb.onl.usb : "---"])
            }
        }
    };
    this.ain = function() {
        if (this.mnu() != null && this.usb >= 0) {
            this.usb -= 1;
            this.usk.ohh.mgf("astart", "#xhx", [(this.usb >= 0) ? this.usb : "---", true]);
            this.usk.ohh.mgf("start", "#xhx", [(this.usb >= 0) ? this.usb : "---", true])
        }
    };
    this.fgq = function() {
        if (wpb.onl.mnu() != null) {
            wpb.onl.usb = 0;
            wpb.onl.ins = 0;
            wpb.onl.yyw = 0;
            wpb.onl.rst = 0;
            wpb.onl.usk.ohh.mgf("astart", "#xhx", ["---"]);
            wpb.onl.usk.ohh.mgf("start", "#xhx", ["---"])
        }
        wpb.onl.usk.ohh.mgf("start", "#svo");
        wpb.onl.fwc.mgf("autop", "#sny");
        wpb.onl.fwc.mgf("settings", "#fgq")
    };
    this.arj = function() {
        var a = wpb.onl.fwc.xpy("topi");
        wpb.onl.npj = false;
        wpb.onl.fgq();
        wpb.onl.usk.ohh.mgf("astart", "#xkl", [wpb.onl.npj]);
        if (a) {
            a.shw("auto", wpb.onl.npj)
        }
    };
    this.khm = function() {
        wpb.onl.ckd();
        var a = ((wpb.onl.win + wpb.onl.nen > 0 && wpb.onl.wst || wpb.onl.win + wpb.onl.nen === 0) && (wpb.onl.state == wpb.brr.etl.dpq || wpb.onl.state == wpb.brr.etl.nyr || wpb.onl.state == wpb.brr.etl.fap || wpb.onl.state == wpb.brr.etl.mzh || wpb.onl.state == wpb.brr.etl.lxu || wpb.onl.state == wpb.brr.etl.eut) || (wpb.onl.state == wpb.brr.etl.ogk && wpb.onl.dsu == 2 && wpb.onl.jrs == 2 && wpb.onl.owt && (wpb.onl.rgh == 5 || wpb.onl.totalBet != wpb.onl.yef)) || wpb.onl.uzr());
        if (wpb.onl.mnu() != null && a === true && (wpb.onl.usb <= 0 || (wpb.onl.fmn - wpb.onl.pqi() < wpb.onl.ins) || (wpb.onl.yyw > 0 && wpb.onl.fmn >= wpb.onl.yyw) || (wpb.onl.rst > 0 && wpb.onl.win > wpb.onl.rst))) {
            if (wpb.onl.npj === true) {
                wpb.onl.omm()
            }
            wpb.onl.cyp(true);
            wpb.onl.usk.ohh.mgf("info", "#muj");
            wpb.onl.usk.bab(true)
        } else {
            wpb.onl.uka()
        }
    }
}
iqs.prototype = new feg;

function dkx(a) {
    var c = oko(a);
    var b = lyw(a);
    return c + b * 13
}

function oko(a) {
    return a >> 2
}

function lyw(a) {
    return a & 3
}

function kba() {
    var a = this;
    this.nhh = null;
    this.din = null;
    this.ccy = false;
    this.rsy = false;
    this.cus = 10;
    this.bge = 0;
    this.qbf = 0;
    this.tph = 0;
    this.ahz = 0;
    this.zvj = 0;
    this.gux = 0;
    this.kxv = false;
    this.lpo = 0;
    this.zrk = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 53];
    this.lpq = 52;
    this.jdf = 150;
    this.aet = 0;
    this.mca = [];
    this.ucb = false;
    this.win = 0;
    this.fjn = 0;
    this.uyz = [];
    this.dyk = 0;
    this.audio = true;
    this.kxz = false;
    this.jtv = 0;
    this.ifs = -1;
    this.ohh = null;
    this.tgy = null;
    this.uay = null;
    this.lfx = null;
    this.wxm = "arial";
    this.zxl = "bold";
    this.uzv = "white";
    this.gsx = null;
    this.owy = 20;
    this.ktu = new rud(50, 20, 700, 120);
    this.mel = false;
    this.yjn = function(b, d, c) {
        kba.prototype.yjn.call(this, b, d, c);
        this.dff()
    };
    this.xxb = function(b) {
        try {
            this.kvz(b);
            this.pwt(b);
            this.fcn(b);
            this.jse(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.rmt = function(g) {
        try {
            var f = this.ohh.vtm("buttons"),
                c = this.ohh.vtm("displays"),
                l = this.ohh.vtm("cards"),
                k = this.ohh.xpy("info");
            for (var d = 0, b = f.length; d < b; d++) {
                f[d].rmt(g.dya)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].rmt(g.display)
            }
            for (var d = 0, b = l.length; d < b; d++) {
                l[d].rmt(g.yrn)
            }
            if (k) {
                k.rmt(g.dbg);
                k.aqq(g.dbg.aei)
            }
            this.ohh.mgf("collect", "#aqq", [g.hfa]);
            this.ohh.mgf("gamble", "#aqq", [g.qxd]);
            this.ohh.mgf("creditd", "#aqq", [g.gys]);
            this.ohh.mgf("wind", "#aqq", [g.vkf]);
            this.ohh.mgf("card1", "#aqq", [g.ftn]);
            this.ohh.mgf("card2", "#aqq", [g.tur]);
            this.ohh.mgf("card3", "#aqq", [g.uev]);
            this.ohh.mgf("card4", "#aqq", [g.yya]);
            this.ohh.mgf("card5", "#aqq", [g.abq]);
            this.gsx = g.rgt;
            this.ktu = g.xbm;
            this.owy = g.fontSize
        } catch (j) {
            console.error(j)
        }
    };
    this.pzz = function(f) {
        try {
            var g = this.ohh.vtm("buttons"),
                c = this.ohh.vtm("displays"),
                l = this.ohh.vtm("cards"),
                k = this.ohh.xpy("info");
            this.tgy = f.backgroundColor;
            this.uay = f.wli;
            this.lfx = f.thz;
            this.wxm = f.font;
            this.zxl = f.ovs;
            this.uzv = f.lda;
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].pzz(f.lcf)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].pzz(f.display)
            }
            for (var d = 0, b = l.length; d < b; d++) {
                l[d].pzz(f.yrn)
            }
            if (k) {
                k.pzz(f.dbg)
            }
        } catch (j) {
            console.error(j)
        }
    };
    this.qwn = function(o, n) {
        var m = this.ohh.vtm("buttons"),
            b = this.ohh.vtm("cards"),
            l = o - this.x,
            k = n - this.y;
        for (var f = 0, g = m.length; f < g; f++) {
            var c = m[f];
            if (l >= c.x && l <= c.x + c.width && k >= c.y && k <= c.y + c.height && c.qdz() === true && c.wek() === true && c.mhg() === false) {
                this.parent.eze.qys("btn");
                this.parent.eze.wym("btn");
                c.lyt(true, false, true);
                this.fur();
                c.ett();
                for (var e = 0; e < g; e++) {
                    m[e].znu(true)
                }
                return true
            }
        }
        for (var f = 1, g = b.length; f < g; f++) {
            var d = b[f];
            if (l >= d.x && l <= d.x + d.width && k >= d.y && k <= d.y + d.height && d.qdz() === true && d.wek() === true) {
                d.ikh(true, this.parent.language.ldw, "white", true);
                this.jls(false);
                this.bab(false);
                this.tcw();
                this.parent.sgq.awl(f);
                return true
            }
        }
        return false
    };
    this.vtx = function() {
        var e = this.ohh.vtm("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.sxn() === true) {
                c.lyt(false, true);
                return true
            }
        }
        return false
    };
    this.szu = function(g) {
        var f = this.ohh.vtm("buttons");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.bdd == g) {
                if (d.qdz() === true && d.wek() === true && d.mhg() === false) {
                    this.parent.eze.qys("btn");
                    this.parent.eze.wym("btn");
                    d.lyt(true, false, true);
                    this.fur();
                    d.ett();
                    for (var c = 0; c < b; c++) {
                        f[c].znu(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.bjz = function() {
        var e = this.ohh.vtm("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.sxn() === true) {
                c.lyt(false, true);
                return true
            }
        }
        return false
    };
    this.dff = function() {
        this.ohh = new ppr();
        this.ohh.yjn();
        this.ohh.qaf("buttons");
        this.ohh.qaf("displays");
        this.ohh.qaf("cards")
    };
    this.kvz = function(b) {
        this.ohh.usx("collect", this.riu(b.hfa, this.parent.language.uhp, this.parent.eze.ilh("btn"), (!this.parent.szo) ? this.parent.rvw.xgw : null, this.rle, b.dya), ["buttons"]);
        this.ohh.usx("gamble", this.riu(b.qxd, this.parent.language.pqg, this.parent.eze.ilh("btn"), (!this.parent.szo) ? this.parent.rvw.krc : null, this.pqg, b.dya), ["buttons"])
    };
    this.pwt = function(b) {
        this.ohh.usx("creditd", this.obc(b.gys, (this.parent.zxh()) ? this.parent.language.egz : this.parent.language.fmn, this.parent.xth(this.parent.fmn), "yellow", b.display), ["displays"]);
        this.ohh.usx("wind", this.obc(b.vkf, this.parent.language.win, this.parent.xth(this.parent.win), "yellow", b.display), ["displays"])
    };
    this.jse = function(b) {
        this.ohh.usx("card1", this.yoz(b.ftn, this.parent.eze.ilh("cards"), b.yrn), ["cards"]);
        this.ohh.usx("card2", this.yoz(b.tur, this.parent.eze.ilh("cards"), b.yrn), ["cards"]);
        this.ohh.usx("card3", this.yoz(b.uev, this.parent.eze.ilh("cards"), b.yrn), ["cards"]);
        this.ohh.usx("card4", this.yoz(b.yya, this.parent.eze.ilh("cards"), b.yrn), ["cards"]);
        this.ohh.usx("card5", this.yoz(b.abq, this.parent.eze.ilh("cards"), b.yrn), ["cards"])
    };
    this.fcn = function(b) {
        var c = new equ();
        c.yjn(b.dbg.aei, this.context2D);
        c.parent = this;
        c.rmt(b.dbg);
        this.ohh.usx("info", c)
    };
    this.yoz = function(d, e, c) {
        var b = new xvo();
        b.yjn(d, this.context2D);
        b.parent = this.parent;
        b.nhh = e;
        b.zrk = this.zrk;
        b.xhx(this.lpq);
        b.rmt(c);
        return b
    };
    this.riu = function(e, i, g, c, f, d) {
        var b = new lao();
        b.yjn(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.ett = f;
        b.rmt(d);
        if (c) {
            b.bdd = c.zdj
        }
        return b
    };
    this.obc = function(c, g, f, d, b) {
        var e = new lyq();
        e.yjn(c, this.context2D, null, g, f);
        e.parent = this;
        e.nhh = this.parent.eze.ilh("display_effect");
        e.rmt(b);
        return e
    };
    this.bab = function(e) {
        var d = this.ohh.vtm("buttons");
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].dxj(e)
        }
    };
    this.jls = function(e) {
        var d = this.ohh.vtm("cards");
        for (var c = 1, b = d.length; c < b; c++) {
            d[c].dxj(e)
        }
    };
    this.xzu = function(e, c, b, d) {
        this.win = c;
        this.ohh.mgf("creditd", "#zbu", [this.parent.xth(e), false]);
        this.ohh.mgf("wind", "#zbu", [this.parent.xth(c), false]);
        if (d && d === true) {
            this.fur()
        }
    };
    this.wer = function(d, b) {
        for (var c = 0; c < 5; c++) {
            this.mca[c] = d[c]
        }
    };
    this.zph = function(f, d) {
        var k = this.ohh.xpy("info"),
            j = this.ohh.vtm("cards");
        if (f > 0) {
            if (!d) {
                var e = oko(this.mca[f]),
                    c = oko(this.mca[0]);
                if (k) {
                    if (e > c) {
                        k.ubq(this.parent.language.gve, true)
                    } else {
                        k.ubq("", true)
                    }
                }
                j[f].ikh(true, this.parent.language.ldw, "white", false)
            } else {
                if (k) {
                    k.ubq("", true)
                }
                j[f].ikh(true, "", "white", false)
            }
        } else {
            if (k) {
                k.ubq("", true)
            }
        }
        j[0].ikh(true, this.parent.language.mww, "white", false);
        for (var g = 0, b = this.mca.length; g < b; g++) {
            if (this.mca[g] >= 0) {
                j[g].xhx(dkx(this.mca[g]), false)
            } else {
                j[g].xhx(this.lpq, false)
            }
        }
    };
    this.aru = function(d, b) {
        var c = this.ohh.xpy("info");
        if (c) {
            c.akj(b);
            c.jmf(d, b)
        }
    };
    this.ubq = function(d) {
        this.uyz = [];
        for (var c = 0, b = d.length; c < b; c++) {
            this.uyz[c] = d[c]
        }
    };
    this.fyi = function(e) {
        var d = this.ohh.vtm("buttons");
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].kwl(e)
        }
    };
    this.lpj = function(d) {
        var f = this.ohh.xpy("info"),
            e = this.ohh.vtm("cards"),
            g = this.ohh.xpy("gamble");
        this.bab(!d);
        this.fyi((this.parent.state == wpb.brr.etl.eut || this.parent.state == wpb.brr.etl.bwe || (this.parent.state == wpb.brr.etl.nyr && !d)));
        if (f) {
            f.kwl(true)
        }
        for (var c = 0, b = e.length; c < b; c++) {
            e[c].xhx(this.lpq, false);
            e[c].ikh(false, "", null, false)
        }
        this.kwl(true, true);
        if (!this.parent.vfg && d) {
            this.mel = true;
            this.parent.sgq.xbk()
        } else {
            if (!d) {
                this.mel = false;
                if (g) {
                    g.lvw()
                }
                if (f) {
                    f.dhe(3)
                }
                this.utp()
            }
        }
    };
    this.nml = function(e) {
        var d = this.ohh.vtm("cards");
        for (var c = 0, b = this.parent.eze.gfj("deal"); c < b; c++) {
            this.parent.eze.qys("deal" + c)
        }
        this.ifs = dkx(e);
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].xhx(this.lpq, false);
            d[c].ikh(false, "", null, false)
        }
        this.fur();
        setTimeout(this.bks, 400)
    };
    this.bks = function() {
        var c = a.ohh.xpy("card1"),
            b = a.ohh.xpy("info");
        a.parent.eze.wym("deal0");
        if (c) {
            c.xhx(a.ifs, true);
            c.ikh(true, a.parent.language.mww, "white", true)
        }
        if (b) {
            b.gyg();
            b.dhe(0)
        }
        a.fur();
        a.jls(true);
        a.jpe()
    };
    this.fba = function(d, c) {
        var e = this.ohh.xpy("card1"),
            b = this.ohh.xpy("card" + (d + 1));
        this.ucb = oko(this.mca[d]) > oko(this.mca[0]);
        this.fjn = d;
        this.kxz = c;
        this.aet = 0;
        if (e) {
            e.xhx(dkx(this.mca[0]), true);
            e.ikh(true, this.parent.language.mww, "white", true)
        }
        this.parent.eze.wym("deal" + this.aet);
        if (b) {
            b.xhx(dkx(this.mca[d]), true);
            b.ikh(true, this.parent.language.ldw, "white", true)
        }
        this.fur();
        this.jtv = 1;
        setTimeout(this.uya, 500)
    };
    this.uya = function() {
        var c = a.jdf,
            b = a.ohh.xpy("card" + (a.jtv + 1));
        if (a.jtv == 1) {
            a.gux = new Date().getTime()
        } else {
            var d = new Date().getTime();
            c = a.jdf + (a.aet * a.jdf - (d - a.gux))
        }
        if (b && !b.eso()) {
            a.aet += 1;
            a.parent.eze.wym("deal" + (a.aet - 1));
            b.xhx(dkx(a.mca[a.jtv]), true);
            a.fur()
        } else {
            c = 0
        }
        a.jtv++;
        if (c <= 0) {
            c = 0
        }
        if (a.jtv < 5) {
            if (c == 0) {
                a.uya()
            } else {
                setTimeout(a.uya, c)
            }
        } else {
            setTimeout(a.gfo, a.jdf)
        }
    };
    this.gfo = function() {
        var b = a.ohh.xpy("card" + (a.fjn + 1)),
            d = a.ohh.xpy("info"),
            c = a.ohh.xpy("gamble");
        if (a.win > 0) {
            if (a.kxz) {
                a.oiw()
            } else {
                if (d) {
                    d.gyg()
                }
                if (a.ucb) {
                    a.parent.eze.wym("gamblewin");
                    if (b) {
                        b.ikh(true, a.parent.language.win, "yellow", true)
                    }
                    if (d) {
                        d.dhe(1)
                    }
                } else {
                    if (b) {
                        b.ikh(true, a.parent.language.aml, "yellow", true)
                    }
                    if (d) {
                        d.dhe(2)
                    }
                    a.utp()
                }
                a.fyi(true);
                if (c) {
                    c.lvw()
                }
                a.fur()
            }
        } else {
            if (d) {
                d.gyg()
            }
            setTimeout(a.parent.tth, 1000)
        }
    };
    this.kxr = function() {};
    this.jpe = function() {
        this.audio = true;
        this.dyk = setInterval(function() {
            a.audio = !a.audio;
            if (a.audio) {
                a.parent.eze.wym("gamble1");
                a.parent.eze.qys("gamble2")
            } else {
                a.parent.eze.wym("gamble2");
                a.parent.eze.qys("gamble1")
            }
        }, 400)
    };
    this.utp = function() {
        wpb.onl.eze.qys("gambleprop");
        wpb.onl.eze.wym("gambleprop");
        wpb.onl.gei.bab(true)
    };
    this.tcw = function() {
        clearInterval(this.dyk);
        this.parent.eze.qys("gamble1");
        this.parent.eze.qys("gamble2")
    };
    this.rle = function() {
        a.bab(false);
        a.ohh.mgf("gamble", "#sku");
        a.parent.eze.qys("gambleprop");
        a.parent.sgq.uhp()
    };
    this.pqg = function() {
        a.bab(false);
        a.ohh.mgf("gamble", "#sku");
        a.parent.eze.qys("gambleprop");
        if (a.mel == false) {
            a.mel = true;
            a.parent.sgq.xbk()
        } else {
            a.parent.sgq.ewd()
        }
    };
    this.oiw = function() {
        a.ohh.mgf("info", "#gyg");
        setTimeout(a.exd, 10)
    };
    this.exd = function() {
        a.ccy = false;
        a.rsy = (a.parent.win > a.parent.totalBet) ? true : false;
        a.cus = 10;
        a.bge = 0;
        a.qbf = a.parent.win;
        a.tph = a.parent.fmn - a.parent.win;
        a.ahz = 0;
        a.zvj = a.parent.win;
        a.gux = new Date().getTime();
        a.kxv = true;
        a.lpo = setTimeout(a.efw, a.parent.qwj)
    };
    this.efw = function() {
        var b = 0,
            c = a.parent.vxw,
            d = 0;
        if (a.zvj > 0) {
            if (!a.ccy) {
                a.parent.eze.qys("collect");
                a.parent.eze.wym("collect");
                a.ccy = true
            }
            b = Math.round(a.zvj / a.cus);
            a.zvj -= b;
            if (a.zvj < 0) {
                a.zvj = 0
            }
            a.ohh.mgf("wind", "#zbu", [a.parent.xth(a.qbf - (a.parent.win - a.zvj)), true]);
            a.ohh.mgf("creditd", "#zbu", [a.parent.xth(a.tph + (a.parent.win - a.zvj)), true]);
            a.bge++;
            a.cus -= 1;
            d = new Date().getTime();
            c = a.parent.qwj + (a.bge * a.parent.qwj - (d - a.gux));
            a.lpo = setTimeout(a.efw, c)
        } else {
            a.parent.eze.qys("collect");
            a.parent.eze.wym("collectend");
            a.kxv = false;
            clearTimeout(a.lpo);
            setTimeout(a.parent.tth, 100)
        }
    };
    this.fur = function(m, l, n, g) {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        var c = (m != null && l != null && n != null && g != null),
            p = this.context2D,
            b = this.ohh.vtm("cards"),
            k = this.ohh.vtm("buttons"),
            f = this.ohh.vtm("displays"),
            o = this.ohh.xpy("info"),
            e = this.parent.eze.ilh("btn_back"),
            d = 0,
            j = 0;
        p.save();
        if (c) {
            p.beginPath();
            p.rect(m, l, n, g);
            p.closePath();
            p.clip()
        }
        if (e) {
            p.drawImage(this.nhh, (this.gsx.x == 0) ? this.gsx.width : 0, this.height - e.height);
            kvo = p.createLinearGradient(this.gsx.x, this.gsx.y, this.gsx.x + this.gsx.width, this.gsx.y);
            kvo.addColorStop(0.2, this.uay);
            kvo.addColorStop(1, this.lfx);
            p.fillStyle = kvo;
            p.save();
            if (this.parent.dmh === wpb.bnu.tvg) {
                p.translate(this.gsx.width / 2, this.gsx.height / 2);
                p.rotate(Math.PI);
                p.translate(-this.gsx.width / 2, -this.gsx.height / 2)
            }
            p.fillRect(this.gsx.x, this.gsx.y, this.gsx.width, this.gsx.height);
            p.drawImage(e, this.gsx.x, this.gsx.y, this.gsx.width, this.gsx.height);
            p.restore()
        } else {
            p.drawImage(this.nhh, 0, 0);
            if (this.tgy != null) {
                wpb.trp.ueq(p, this.gsx.x, this.gsx.y, this.gsx.width, this.gsx.height, this.tgy, 1)
            }
        }
        this.qiz(p);
        p.restore();
        for (d = 0, j = b.length; d < j; d++) {
            b[d].lpf(p);
            b[d].fur()
        }
        for (d = 0, j = k.length; d < j; d++) {
            k[d].fur()
        }
        o.fur();
        for (d = 0, j = f.length; d < j; d++) {
            f[d].fur()
        }
        if (this.rzg && this.upi) {
            if (c) {
                this.rzg.drawImage(this.upi, m, l, n, g, this.x + m, this.y + l, n, g)
            } else {
                this.rzg.drawImage(this.upi, this.x, this.y)
            }
        }
    };
    this.qiz = function(c) {
        var d = Math.round(this.ktu.height / this.uyz.length) - 1;
        for (var e = 0, b = this.uyz.length; e < b; e++) {
            wpb.trp.vio(c, this.uyz[e], this.uzv, this.ktu.x, this.ktu.y + (e) * d, this.ktu.width, this.owy, this.wxm, this.owy, this.zxl)
        }
    }
}
kba.prototype = new biu;

function jhf() {
    this.xgw = {
        zdj: 32,
        sab: -1,
        value: "SPACE",
        dax: null
    };
    this.krc = {
        zdj: 8,
        sab: -1,
        value: "BACKSPACE",
        dax: null
    }
}
jhf.prototype = new nwu;

function tay() {
    this.lwb = [800, 800, 800, 1000, 800];
    this.xyf = [1, 2, 3, 4, 5];
    this.ads = [
        [],
        [],
        [],
        [],
        []
    ];
    this.lbu = 0;
    this.uel = -1;
    this.ucv = 0;
    this.thc = "red";
    this.cnj = [];
    this.pwb = 2;
    this.pzz = function(a) {
        tay.prototype.pzz.call(this, a);
        try {
            this.thc = a.egm
        } catch (b) {
            console.error(b)
        }
    };
    this.rmt = function(a) {
        tay.prototype.rmt.call(this, a);
        try {
            this.cnj = a.vkf;
            this.pwb = a.bth
        } catch (b) {
            console.error(b)
        }
    };
    this.qwn = function(b, j) {
        var g = b - this.x,
            f = j - this.y,
            e = this.parent.usk.ohh.xpy("bet");
        for (var c = 0, a = this.cnj.length; c < a; c++) {
            var d = this.cnj[c];
            if (g >= d.x && g <= d.x + d.width && f >= d.y && f <= d.y + d.height && this.qdz() === true) {
                if (e && e.wek() === true) {
                    if (c < 3) {
                        this.parent.lxv = this.parent.rko() + c
                    } else {
                        if (c == 4) {
                            this.parent.lxv = this.parent.avr()
                        } else {
                            if (this.parent.lxv < this.parent.xwi.length - 1) {
                                if (this.parent.lxv >= this.parent.avr() - 1) {
                                    this.parent.lxv = 0;
                                    while (this.parent.lxv < this.parent.rko() + 3) {
                                        this.parent.lxv++
                                    }
                                } else {
                                    if (this.parent.lxv < this.parent.rko() + 3) {
                                        this.parent.lxv = this.parent.rko() + 3
                                    } else {
                                        this.parent.lxv++
                                    }
                                }
                            } else {
                                this.parent.lxv = 0;
                                while (this.parent.lxv < this.parent.rko() + 3) {
                                    this.parent.lxv++
                                }
                            }
                        }
                    }
                    this.parent.zvc(false);
                    this.parent.usk.ohh.neu("buttons", "#znu", [true]);
                    return true
                }
            }
        }
        return false
    };
    this.vtx = function() {};
    this.szu = function() {};
    this.bjz = function() {};
    this.our = function(f) {
        var e = 0;
        this.ucv = this.parent.rko();
        for (; e < 4; e++) {
            this.xyf[e] = this.parent.xwi[this.ucv + e]
        }
        this.xyf[e] = this.parent.ghb;
        for (var e = 0, b = f.length; e < b; e++) {
            this.lil[e] = f[b - 1 - e]
        }
        for (var a = 0, d = this.xyf.length; a < d; a++) {
            for (var e = 0, c = this.lil.length; e < c; e++) {
                if (e == 0 && a == 4) {
                    this.ads[a][e] = this.lwb[this.parent.stw] * this.xyf[a]
                } else {
                    this.ads[a][e] = this.lil[e] * this.xyf[a]
                }
            }
        }
    };
    this.pxq = function(c) {
        if (c < this.parent.ghb && c > this.parent.xwi[this.ucv + 2]) {
            this.lbu = 3;
            this.xyf[3] = c;
            for (var b = 0, a = this.lil.length; b < a; b++) {
                this.ads[3][b] = this.lil[b] * this.xyf[3]
            }
        } else {
            if (c == this.parent.xwi[this.ucv]) {
                this.lbu = 0
            } else {
                if (c == this.parent.xwi[this.ucv + 1]) {
                    this.lbu = 1
                } else {
                    if (c == this.parent.xwi[this.ucv + 2]) {
                        this.lbu = 2
                    } else {
                        if (c == this.parent.ghb) {
                            this.lbu = 4
                        }
                    }
                }
            }
        }
        this.fur()
    };
    this.pan = function(a, b) {
        this.uel = this.mru.length - a;
        if (b && b === true) {
            this.fur()
        }
    };
    this.tpo = function(a) {
        this.uel = -1;
        if (a && a === true) {
            this.fur()
        }
    };
    this.fur = function() {
        if (!this.qdz() || !this.parent.eqn()) {
            return
        }
        var l = this.context2D,
            b = this.height - 2 * this.dzx,
            a = Math.round(b / this.mru.length),
            c = (this.owy < a) ? this.owy : a - 2;
        l.save();
        if (this.nhh != null) {
            l.drawImage(this.nhh, 0, 0)
        }
        wpb.trp.ueq(l, this.cnj[this.lbu].x, this.cnj[this.lbu].y, this.cnj[this.lbu].width, this.cnj[this.lbu].height, this.thc, 1);
        for (var g = 0, k = this.mru.length; g < k; g++) {
            if (g == this.uel) {
                wpb.trp.lye(l, this.mru[g], "white", 0, this.dzx + a * (g), 200, a, this.wxm, c, this.zxl, this.dzx)
            } else {
                wpb.trp.lye(l, this.mru[g], this.uzv, 0, this.dzx + a * (g), 200, a, this.wxm, c, this.zxl, this.dzx)
            }
        }
        for (var g = 0, e = this.ads.length; g < e; g++) {
            for (var f = 0, d = this.ads[g].length; f < d; f++) {
                if ((g == 4 && f == 0) || (this.uel == f && g == this.lbu)) {
                    wpb.trp.oub(l, this.parent.sbe(this.ads[g][f]), "white", this.cnj[g].x, this.dzx + a * (f), this.cnj[g].width, a, this.wxm, c, this.zxl, this.pwb)
                } else {
                    wpb.trp.oub(l, this.parent.sbe(this.ads[g][f]), this.uzv, this.cnj[g].x, this.dzx + a * (f), this.cnj[g].width, a, this.wxm, c, this.zxl, this.pwb)
                }
            }
        }
        l.restore();
        if (this.rzg && this.upi) {
            this.rzg.drawImage(this.upi, this.x, this.y)
        }
    }
}
tay.prototype = new emt;

function fkr() {
    this.rjl = [];
    this.pyn = "verdana";
    this.oir = "bold italic";
    this.ihc = "white";
    this.xeb = [];
    this.emd = 12;
    this.ktu = new rud();
    this.pzz = function(a) {
        fkr.prototype.pzz.call(this, a);
        try {
            this.pyn = a.gtj;
            this.oir = a.pkk;
            this.ihc = a.bun
        } catch (b) {
            console.error(b)
        }
    };
    this.rmt = function(a) {
        fkr.prototype.rmt.call(this, a);
        try {
            this.xeb = a.gtx;
            this.ktu = a.xbm;
            this.emd = a.vse
        } catch (b) {
            console.error(b)
        }
    };
    this.fur = function() {
        if (!this.qdz()) {
            return
        }
        var a = this.context2D;
        a.save();
        if (this.fnz) {
            a.strokeStyle = this.fnz
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.jey;
        a.font = this.zxl + " " + this.owy + "px " + this.wxm;
        a.textBaseline = "bottom";
        a.drawImage(this.nhh, 0, 0);
        a.textAlign = "left";
        a.fillStyle = this.bfc;
        for (var b = 0; b < this.rjl.length; b++) {
            this.lab(this.rjl[b], this.xeb[b], this.owy, this.wxm)
        }
        a.textAlign = "center";
        a.fillStyle = this.uzv;
        for (var b = 0; b < this.ccp.length; b++) {
            this.aaj(this.ccp[b], this.xqy[b], this.owy, this.wxm)
        }
        wpb.trp.vio(a, wpb.onl.pyl(wpb.onl.language.xyo), this.ihc, this.ktu.x, this.ktu.y, this.ktu.width, this.ktu.height, this.pyn, this.emd, this.oir);
        a.restore();
        if (this.rzg && this.upi) {
            this.rzg.drawImage(this.upi, this.x, this.y)
        }
    }
}
fkr.prototype = new nwt;

function kio() {
    this.ipq = "JokerPokerPoker";
    this.yhd = "Joker Poker";
    this.ard = wpb.zan.value30 + "/jokerpokerpoker/images/";
    this.plc = wpb.zan.value30 + "/jokerpokerpoker/sounds/";
    this.ktz = 11;
    this.cna = null;
    this.hbn = null;
    this.ike = [
        [1, 1, 2, 3, 5, 7, 20, 50, 100, 200, 400],
        [1, 1, 2, 3, 5, 7, 18, 50, 100, 200, 400],
        [1, 1, 2, 3, 5, 7, 16, 50, 100, 200, 400],
        [1, 1, 2, 3, 5, 6, 17, 50, 100, 200, 750],
        [1, 1, 2, 3, 5, 6, 16, 50, 100, 200, 400]
    ];
	gameController=this;
    this.meg = null;
    this.yqk = null;
    this.rqb = null;
    this.chq = null;
    this.rde = function() {
        this.pfd = [this.language.hzr, this.language.zzf, this.language.mxw, this.language.xmx, this.language.lbf, this.language.roj, this.language.nir, this.language.wvn, this.language.vqq, this.language.lwp, this.language.osc];
        this.zrk = [-1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1, -1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, -1, -1, -1, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53];
        this.xkp = [79];
        this.hnk = [63];
        this.lpq = 64;
        this.vhs("1_0_60")
    };
    this.qwn = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.wyc) {
            return
        }
        var q = 0,
            p = 0,
            d = false,
            r = false,
            m = false,
            j = this.fwc.xpy("loading"),
            b = this.fwc.xpy("stats"),
            s = this.fwc.xpy("topb"),
            o = this.fwc.xpy("topi"),
            a = this.fwc.xpy("betsel"),
            l = this.fwc.xpy("paytable"),
            n = this.fwc.xpy("autop"),
            e = this.fwc.xpy("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.wgd) {
                q = g.pageX - this.offsetLeft;
                p = g.pageY - this.offsetTop
            } else {
                q = Math.round((g.pageX - this.offsetLeft) / this.dck);
                p = Math.round((g.pageY - this.offsetTop) / this.ezo)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.wgd) {
                q = c.pageX - this.offsetLeft;
                p = c.pageY - this.offsetTop
            } else {
                q = Math.round((c.pageX - this.offsetLeft) / this.dck);
                p = Math.round((c.pageY - this.offsetTop) / this.ezo)
            }
        }
        if (this.iaq === true) {
            if (n && n.qdz()) {
                if (n.qwn(q, p)) {
                    return
                }
            }
            if (s && s.qdz()) {
                if (s.qwn(q, p)) {
                    clearTimeout(this.yws);
                    return
                } else {
                    m = true
                }
            }
            if (a) {
                if (a.qdz()) {
                    if (a.qwn(q, p, d)) {
                        clearTimeout(this.yws);
                        return
                    } else {
                        r = true
                    }
                }
            }
            if (m) {
                this.svh(this.usk.fbp(q, p, null));
                return
            } else {
                if (r) {
                    if (a && a.wek()) {
                        this.gjo(this.usk.fbp(q, p, null))
                    }
                    return
                }
            }
            if (e && e.qdz()) {
                if (e.qwn(q, p)) {
                    return
                }
            }
            if (o) {
                if (o.qwn(q, p, d)) {
                    return
                }
            }
            if (b && b.qdz()) {
                if (b.qwn(q, p)) {
                    return
                }
            }
            if (this.hcd && this.hcd.qdz()) {
                if (this.hcd.qwn(q, p)) {
                    return
                }
            }
            if (this.gei && this.gei.qdz()) {
                if (this.gei.qwn(q, p)) {
                    return
                }
            }
            if (this.usk != null) {
                if (this.usk.qwn(q, p, r)) {
                    return
                }
            }
            if (this.kmf != null) {
                for (var f = 0, k = this.kmf.length; f < k; f++) {
                    if (this.kmf[f].qwn(q, p)) {
                        return
                    }
                }
            }
            if (l) {
                if (l.qwn(q, p)) {
                    return
                }
            }
        } else {
            if (j && j.qdz()) {
                if (j.qwn(q, p)) {
                    return
                }
            }
        }
    };
    this.yww = function() {
        this.rvw = new jhf()
    };
    this.xhw = function() {
        kio.prototype.xhw.call(this);
        this.pdn = this.ike[this.stw]
    };
    this.xea = function() {
        this.gei = new kba();
        this.gei.yjn(this.bnu.pqg.aei, null, this.context2D);
        this.gei.parent = this;
        this.gei.nhh = this.eze.ilh("g_back");
        this.gei.xxb(this.bnu.pqg);
        this.gei.aru(this.ruo, 0);
        this.gei.aru(this.meg, 1);
        this.gei.aru(this.yqk, 2);
        this.gei.aru(this.chq, 3);
        this.gei.ubq(this.rqb);
        this.gei.pzz(this.style.pqg);
        this.gei.rmt(this.bnu.pqg);
        this.gei.kwl(false);
        var a = this.eze.qad("gamblewin");
        if (!this.szo && a != null) {
            a.htd(this.gei.utp)
        }
    };
    this.piu = function() {
        var a = new tay();
        a.yjn(this.bnu.apd.aei, null, this.context2D);
        a.parent = this;
        a.nhh = this.eze.ilh("paytable");
        a.pzz(this.style.apd);
        a.rmt(this.bnu.apd);
        a.our(this.pdn);
        a.akp(this.pfd);
        this.fwc.usx("paytable", a)
    };
    this.pzl = function() {
        this.ffc();
        this.zgk();
        kio.prototype.pzl.call(this)
    };
    this.ffc = function() {
        this.cna = new fkr();
        this.cna.yjn(this.bnu.ebh.win.aei, null, this.hcd.context2D, this.eze.ilh("help"));
        this.cna.parent = this.hcd;
        this.cna.ccp[0] = this.language.kac;
        this.cna.ccp[1] = this.language.yji;
        this.cna.ccp[2] = this.language.ocs;
        this.cna.ccp[3] = this.language.mxs;
        this.cna.ccp[4] = this.language.zgv;
        this.cna.ccp[5] = this.language.qzc;
        this.cna.ccp[6] = this.language.mbe;
        this.cna.ccp[7] = this.language.fop;
        this.cna.ccp[8] = this.language.hmt;
        this.cna.ccp[9] = this.language.hec;
        this.cna.ccp[10] = this.language.aan;
        this.cna.rjl[0] = this.language.osc;
        this.cna.rjl[1] = this.language.lwp;
        this.cna.rjl[2] = this.language.vqq;
        this.cna.rjl[3] = this.language.wvn;
        this.cna.rjl[4] = this.language.nir;
        this.cna.rjl[5] = this.language.roj;
        this.cna.rjl[6] = this.language.lbf;
        this.cna.rjl[7] = this.language.xmx;
        this.cna.rjl[8] = this.language.mxw;
        this.cna.rjl[9] = this.language.zzf;
        this.cna.rjl[10] = this.language.hzr;
        this.cna.pzz(this.style.ebh.win);
        this.cna.rmt(this.bnu.ebh.win);
        if (!this.fwc.xpy("tops")) {
            this.hcd.kky(this.cna)
        }
    };
    this.zgk = function() {
        var a = this.fwc.xpy("tops");
        if (a) {
            this.hbn = new fkr();
            this.hbn.yjn(this.bnu.top.win.aei, null, a.context2D, this.eze.ilh("help_top"));
            this.hbn.parent = a;
            this.hbn.ccp[0] = this.language.kac;
            this.hbn.ccp[1] = this.language.yji;
            this.hbn.ccp[2] = this.language.ocs;
            this.hbn.ccp[3] = this.language.mxs;
            this.hbn.ccp[4] = this.language.zgv;
            this.hbn.ccp[5] = this.language.qzc;
            this.hbn.ccp[6] = this.language.mbe;
            this.hbn.ccp[7] = this.language.fop;
            this.hbn.ccp[8] = this.language.hmt;
            this.hbn.ccp[9] = this.language.hec;
            this.hbn.ccp[10] = this.language.aan;
            this.hbn.rjl[0] = this.language.osc;
            this.hbn.rjl[1] = this.language.lwp;
            this.hbn.rjl[2] = this.language.vqq;
            this.hbn.rjl[3] = this.language.wvn;
            this.hbn.rjl[4] = this.language.nir;
            this.hbn.rjl[5] = this.language.roj;
            this.hbn.rjl[6] = this.language.lbf;
            this.hbn.rjl[7] = this.language.xmx;
            this.hbn.rjl[8] = this.language.mxw;
            this.hbn.rjl[9] = this.language.zzf;
            this.hbn.rjl[10] = this.language.hzr;
            this.hbn.pzz(this.style.ebh.win);
            this.hbn.rmt(this.bnu.top.win);
            a.kky(this.hbn)
        }
    };
    this.fft = function() {
        this.ruo[0] = this.language.pxb;
        this.ruo[1] = this.language.aze;
        this.gei.aru(this.ruo, 0);
        this.meg[0] = this.language.gve;
        this.meg[1] = this.language.ryk;
        this.gei.aru(this.meg, 1);
        this.yqk[0] = this.language.aml;
        this.yqk[1] = this.language.ryk;
        this.gei.aru(this.yqk, 2);
        this.chq[0] = this.language.xky;
        this.chq[1] = this.language.soa;
        this.gei.aru(this.chq, 3);
        this.rqb[0] = this.language.mnk;
        this.rqb[1] = this.language.olb;
        this.rqb[2] = this.language.gou;
        this.rqb[3] = this.language.voq;
        this.gei.ubq(this.rqb);
        this.gei.ohh.mgf("creditd", "#ahe", [(this.zxh()) ? this.language.egz : this.language.fmn, false]);
        this.gei.ohh.mgf("wind", "#ahe", [this.language.win, false]);
        this.gei.ohh.mgf("collect", "#zbu", [this.language.uhp, false]);
        this.gei.ohh.mgf("gamble", "#zbu", [this.language.pqg, false]);
        if (this.cna != null) {
            this.cna.ccp[0] = this.language.kac;
            this.cna.ccp[1] = this.language.yji;
            this.cna.ccp[2] = this.language.ocs;
            this.cna.ccp[3] = this.language.mxs;
            this.cna.ccp[4] = this.language.zgv;
            this.cna.ccp[5] = this.language.qzc;
            this.cna.ccp[6] = this.language.mbe;
            this.cna.ccp[7] = this.language.fop;
            this.cna.ccp[8] = this.language.hmt;
            this.cna.ccp[9] = this.language.hec;
            this.cna.ccp[10] = this.language.aan;
            this.cna.rjl[0] = this.language.osc;
            this.cna.rjl[1] = this.language.lwp;
            this.cna.rjl[2] = this.language.vqq;
            this.cna.rjl[3] = this.language.wvn;
            this.cna.rjl[4] = this.language.nir;
            this.cna.rjl[5] = this.language.roj;
            this.cna.rjl[6] = this.language.lbf;
            this.cna.rjl[7] = this.language.xmx;
            this.cna.rjl[8] = this.language.mxw;
            this.cna.rjl[9] = this.language.zzf;
            this.cna.rjl[10] = this.language.hzr
        }
        if (this.hbn != null) {
            this.hbn.ccp[0] = this.language.kac;
            this.hbn.ccp[1] = this.language.yji;
            this.hbn.ccp[2] = this.language.ocs;
            this.hbn.ccp[3] = this.language.mxs;
            this.hbn.ccp[4] = this.language.zgv;
            this.hbn.ccp[5] = this.language.qzc;
            this.hbn.ccp[6] = this.language.mbe;
            this.hbn.ccp[7] = this.language.fop;
            this.hbn.ccp[8] = this.language.hmt;
            this.hbn.ccp[9] = this.language.hec;
            this.hbn.ccp[10] = this.language.aan;
            this.hbn.rjl[0] = this.language.osc;
            this.hbn.rjl[1] = this.language.lwp;
            this.hbn.rjl[2] = this.language.vqq;
            this.hbn.rjl[3] = this.language.wvn;
            this.hbn.rjl[4] = this.language.nir;
            this.hbn.rjl[5] = this.language.roj;
            this.hbn.rjl[6] = this.language.lbf;
            this.hbn.rjl[7] = this.language.xmx;
            this.hbn.rjl[8] = this.language.mxw;
            this.hbn.rjl[9] = this.language.zzf;
            this.hbn.rjl[10] = this.language.hzr
        }
    };
    this.omo = function() {
        this.ruo = [];
        this.ruo[0] = this.language.pxb;
        this.ruo[1] = this.language.aze;
        this.meg = [];
        this.meg[0] = this.language.gve;
        this.meg[1] = this.language.ryk;
        this.yqk = [];
        this.yqk[0] = this.language.aml;
        this.yqk[1] = this.language.ryk;
        this.chq = [];
        this.chq[0] = this.language.xky;
        this.chq[1] = this.language.soa;
        this.rqb = [];
        this.rqb[0] = this.language.mnk;
        this.rqb[1] = this.language.olb;
        this.rqb[2] = this.language.gou;
        this.rqb[3] = this.language.voq
    };
    this.cyt = function() {
        if (this.cna) {
            this.cna.aqq(this.bnu.ebh.win.aei);
            this.cna.rmt(this.bnu.ebh.win)
        }
    };
    this.cyu = function() {
        if (this.gei) {
            this.gei.aqq(this.bnu.pqg.aei);
            this.gei.rmt(this.bnu.pqg)
        }
    };
    this.bej = function() {
        kio.prototype.bej.call(this);
        var a = this.ard + this.bnu.type + "/";
        this.eze.lin("paytable", a + "paytable.png");
        this.eze.lin("help_top", a + "help_top.jpg")
    };
    this.jdy = function() {
        kio.prototype.jdy.call(this);
        var a = this.plc;
        this.eze.xkh("gamblewin", null, false, a + "win13");
        this.eze.xkh("gamble1", null, false, a + "gamble1");
        this.eze.xkh("gamble2", null, false, a + "gamble2")
    };
    this.tzm = function(b) {
        var a = this.fwc.xpy("winp");
        if (a) {
            a.zbu(this.pfd[this.jpj - 1] + " " + this.language.zya + " " + this.sbe(b), false);
            a.kwl(true)
        }
        this.fwc.mgf("paytable", "#pan", [this.jpj, false])
    };
    this.oqu = function(a) {
        this.fwc.mgf("winp", "#zbu", [this.pfd[this.jpj - 1] + " " + this.language.zya + " " + this.sbe(a), true])
    };
    this.knj = function() {
        this.fwc.mgf("paytable", "#tpo");
        kio.prototype.knj.call(this)
    };
    this.uxy = function(a) {
        this.dmh = a;
        if (a == wpb.bnu.rvu) {
            return new kdk()
        } else {
            if (a == wpb.bnu.djc) {
                return new dhy()
            } else {
                if (a == wpb.bnu.liz) {
                    return new srx()
                } else {
                    if (a == wpb.bnu.gon) {
                        return new sxd()
                    } else {
                        if (a == wpb.bnu.cxt) {
                            return new xek()
                        } else {
                            if (a == wpb.bnu.ofs) {
                                return new hks()
                            } else {
                                if (a == wpb.bnu.pbc) {
                                    return new soh()
                                } else {
                                    if (a == wpb.bnu.jkq) {
                                        return new wzb()
                                    } else {
                                        if (a == wpb.bnu.eqt) {
                                            return new xbq()
                                        } else {
                                            if (a == wpb.bnu.tvg) {
                                                return new ggf()
                                            } else {
                                                if (a == wpb.bnu.ira) {
                                                    return new eqq()
                                                }
                                            }
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
    this.ggt = function() {
        this.style = new pkd()
    }
}
kio.prototype = new iqs;

function aqd() {
    wpb.fgy = -1;
    wpb.onl = new kio();
    wpb.onl.yjn({
        bnu: wpb.zan.value14
    });
    window.focus()
}

function ixo() {
    if (wpb.onl != null) {
        if (wpb.fgy >= 0) {
            clearTimeout(wpb.fgy)
        }
        wpb.fgy = setTimeout(wpb.onl.txr, 200)
    }
}

function mks() {
    if (wpb.onl != null) {
        if (wpb.fgy >= 0) {
            clearTimeout(wpb.fgy)
        }
        wpb.fgy = setTimeout(wpb.onl.vbx, 200)
    }
}
if (wpb.trp.pxm()) {
    window.onorientationchange = mks;
    window.onresize = mks
} else {
    window.onresize = ixo
}
if (wpb.zan.value9) {
    window.onload = aqd
} else {
    aqd()
};